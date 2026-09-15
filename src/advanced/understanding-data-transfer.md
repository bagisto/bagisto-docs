# Understanding Data Transfer

`packages/Webkul/DataTransfer` imports records in bulk from CSV, XLS, XLSX and XML files: products, customers and tax rates in core, and any entity a package registers an importer for. Every import runs through the same pipeline, which validates, writes, links and indexes the rows in batches. There is no exporter framework: exporting is the CSV, XLS and XLSX export built into every DataGrid.

## How an Import Runs

An import record moves through the states defined as constants on `Webkul\DataTransfer\Helpers\Import`:

`pending` → `validating` → `validated` → (`downloading`) → `processing` → `processed` → (`linking` → `linked`) → (`indexing` → `indexed`) → `completed`

| Stage | What happens | The importer's part |
|---|---|---|
| Validate | The header row is checked against the importer's columns, then every row goes through `validateRow()`. Rows that pass are cleaned by `prepareRowForDb()` and stored in `import_batches`, `AbstractImporter::BATCH_SIZE` (100) rows per batch | `$validColumnNames`, `$permanentAttributes`, `validateRow()` |
| Download images | Only when the importer has a `downloadImagesBatch()` method, the action isn't a delete and the images are given as URLs | none |
| Import | Each batch is passed to `importBatch()` | `importBatch()` |
| Link | Only when `isLinkingRequired()` is true: each batch is passed to `linkBatch()` | `$linkingRequired`, `linkBatch()` |
| Index | Only when `isIndexingRequired()` is true: each batch is passed to `indexBatch()` | `$indexingRequired`, `indexBatch()` |

`isLinkingRequired()` and `isIndexingRequired()` return `false` for a delete, whatever the properties say.

**Where the stages run.** With the import's **Process in Queue** setting (`process_in_queue`) on, `AbstractImporter::importData()` dispatches one `Bus::chain()` of the jobs in `Webkul\DataTransfer\Jobs\Import`: a `Bus::batch()` of `ImportBatch` jobs, then `Linking` and a batch of `LinkBatch` jobs, then `Indexing` and a batch of `IndexBatch` jobs, then `Completed`. Every batch allows failures, so one failing batch doesn't stop the others, and the admin refuses to start a queued import while the queue connection is `sync`. With the setting off, the admin page drives the same stages itself, one batch per request.

**Validation** runs over the whole file in one pass unless the importer sets `$chunkedValidationSupported`; then the file is validated in windows of `$validationChunkSize` rows, across requests or `ValidateChunk` queue jobs. Uploaded files, validation state and error reports are kept on the `private` disk. Each stage fires events, from `data_transfer.imports.validate.before` to `data_transfer.imports.completed`, listed on [Event Listeners](./event-listeners.md#data-transfer).

### File Formats

`Import::getSource()` picks a source class from the file's extension, and every source extends `AbstractSource`, so an importer never opens the file itself and one importer serves all four formats:

| Format | Extension | Source class |
|---|---|---|
| CSV | `.csv` | `Webkul\DataTransfer\Helpers\Sources\CSV` |
| Excel | `.xlsx` | `Webkul\DataTransfer\Helpers\Sources\XLSX` |
| Excel 97-2003 | `.xls` | `Webkul\DataTransfer\Helpers\Sources\XLS` |
| XML | `.xml` | `Webkul\DataTransfer\Helpers\Sources\XML` |

### Product Images

The product importer takes images from one of three sources, stored on the import as `Import::IMAGE_SOURCE_URL`, `IMAGE_SOURCE_UPLOAD` or `IMAGE_SOURCE_DIRECTORY`: links in the `images` column, downloaded in their own stage before any row is written; a ZIP archive uploaded with the import; or a directory on the server. A custom importer that carries images can use the same `Webkul\DataTransfer\Helpers\Importers\Concerns\DownloadsImages` trait, since having `downloadImagesBatch()` is what switches the image stage on.

## Writing an Importer

The rest of this page builds `Webkul\RedirectImport`, a package that imports URL rewrites: the redirects in the `url_rewrites` table that the storefront follows when a request path matches, which a store moving to Bagisto usually has by the thousand. `Webkul\DataTransfer\Helpers\Importers\TaxRate\Importer` is the closest core model for a single-table importer.

Its files:

```text
packages/Webkul/RedirectImport
└── src
    ├── Config
    │   └── importers.php
    ├── Helpers
    │   └── Importers
    │       └── UrlRewrite
    │           └── Importer.php
    ├── Providers
    │   └── RedirectImportServiceProvider.php
    └── Resources
        ├── lang
        │   └── en
        │       └── app.php
        └── samples
            ├── csv
            │   └── url-rewrites.csv
            ├── xls
            │   └── url-rewrites.xls
            ├── xlsx
            │   └── url-rewrites.xlsx
            └── xml
                └── url-rewrites.xml
```

## Step 1: Write the Importer Class

An importer extends `Webkul\DataTransfer\Helpers\Importers\AbstractImporter` and implements `validateRow()` and `importBatch()`. Core keeps each one under `Helpers/Importers/<Entity>/Importer.php`.

**File:** `packages/Webkul/RedirectImport/src/Helpers/Importers/UrlRewrite/Importer.php`

```php
<?php

namespace Webkul\RedirectImport\Helpers\Importers\UrlRewrite;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Validator;
use Webkul\DataTransfer\Contracts\ImportBatch as ImportBatchContract;
use Webkul\DataTransfer\Helpers\Import;
use Webkul\DataTransfer\Helpers\Importers\AbstractImporter;
use Webkul\DataTransfer\Repositories\ImportBatchRepository;
use Webkul\Marketing\Repositories\URLRewriteRepository;

class Importer extends AbstractImporter
{
    /**
     * Error code for a rewrite that appears more than once in the file.
     */
    const ERROR_DUPLICATE_REWRITE = 'duplicate_rewrite';

    /**
     * Columns the file may contain.
     */
    protected array $validColumnNames = [
        'entity_type',
        'request_path',
        'target_path',
        'redirect_type',
        'locale',
    ];

    /**
     * Columns every file must contain.
     *
     * @var string[]
     */
    protected $permanentAttributes = ['entity_type', 'request_path', 'locale'];

    /**
     * Translation keys of this importer's error messages.
     */
    protected array $messages = [
        self::ERROR_DUPLICATE_REWRITE => 'redirect_import::app.importers.url-rewrites.errors.duplicate-rewrite',
    ];

    /**
     * Keys of the rows validated so far.
     */
    protected array $rowKeys = [];

    /**
     * Create a new importer instance.
     */
    public function __construct(
        protected ImportBatchRepository $importBatchRepository,
        protected URLRewriteRepository $urlRewriteRepository
    ) {
        parent::__construct($importBatchRepository);
    }

    /**
     * Validate one row of the file.
     */
    public function validateRow(array $rowData, int $rowNumber): bool
    {
        if (isset($this->validatedRows[$rowNumber])) {
            return ! $this->errorHelper->isRowInvalid($rowNumber);
        }

        $this->validatedRows[$rowNumber] = true;

        $rules = [
            'entity_type' => 'required|in:category,product,cms_page',
            'request_path' => 'required|string',
            'locale' => 'required|exists:locales,code',
        ];

        if ($this->import->action != Import::ACTION_DELETE) {
            $rules['target_path'] = 'required|string';

            $rules['redirect_type'] = 'required|in:301,302';
        }

        $validator = Validator::make($rowData, $rules);

        if ($validator->fails()) {
            $failedAttributes = $validator->failed();

            foreach ($validator->errors()->getMessages() as $attributeCode => $message) {
                $errorCode = array_key_first($failedAttributes[$attributeCode] ?? []);

                $this->skipRow($rowNumber, $errorCode, $attributeCode, current($message));
            }

            return false;
        }

        $rowKey = $this->rowKey($rowData);

        if (in_array($rowKey, $this->rowKeys)) {
            $this->skipRow($rowNumber, self::ERROR_DUPLICATE_REWRITE, 'request_path');

            return false;
        }

        $this->rowKeys[] = $rowKey;

        return true;
    }

    /**
     * Write one batch of validated rows.
     */
    public function importBatch(ImportBatchContract $batch): bool
    {
        Event::dispatch('data_transfer.imports.batch.import.before', $batch);

        if ($batch->import->action == Import::ACTION_DELETE) {
            $this->deleteRewrites($batch->data);
        } else {
            $this->saveRewrites($batch->data);
        }

        $batch = $this->importBatchRepository->update([
            'state' => Import::STATE_PROCESSED,

            'summary' => [
                'created' => $this->getCreatedItemsCount(),
                'updated' => $this->getUpdatedItemsCount(),
                'deleted' => $this->getDeletedItemsCount(),
            ],
        ], $batch->id);

        Event::dispatch('data_transfer.imports.batch.import.after', $batch);

        return true;
    }

    /**
     * Register this importer's error messages alongside the generic ones.
     */
    protected function initErrorMessages(): void
    {
        foreach ($this->messages as $errorCode => $message) {
            $this->errorHelper->addErrorMessage($errorCode, trans($message));
        }

        parent::initErrorMessages();
    }

    /**
     * Update the rewrites that already exist and insert the rest.
     */
    protected function saveRewrites(array $rows): void
    {
        $existingRewrites = $this->existingRewrites($rows);

        $newRewrites = [];

        foreach ($rows as $row) {
            $rewrite = $existingRewrites[$this->rowKey($row)] ?? null;

            if ($rewrite) {
                $this->urlRewriteRepository->update([
                    'target_path' => $row['target_path'],
                    'redirect_type' => $row['redirect_type'],
                ], $rewrite->id);

                $this->updatedItemsCount++;

                continue;
            }

            $newRewrites[] = array_merge($row, [
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        if (! empty($newRewrites)) {
            $this->urlRewriteRepository->insert($newRewrites);

            $this->createdItemsCount += count($newRewrites);
        }
    }

    /**
     * Delete the rewrites the rows name.
     */
    protected function deleteRewrites(array $rows): void
    {
        $rewriteIds = collect($this->existingRewrites($rows))->pluck('id')->all();

        if (! empty($rewriteIds)) {
            $this->urlRewriteRepository->deleteWhere([['id', 'IN', $rewriteIds]]);
        }

        $this->deletedItemsCount += count($rewriteIds);
    }

    /**
     * The stored rewrites matching the rows, keyed the same way as the rows.
     */
    protected function existingRewrites(array $rows): array
    {
        return $this->urlRewriteRepository
            ->findWhereIn('request_path', array_column($rows, 'request_path'))
            ->keyBy(fn ($rewrite) => $this->rowKey($rewrite->toArray()))
            ->all();
    }

    /**
     * The key a rewrite is matched on: its entity type, locale and request path.
     */
    protected function rowKey(array $row): string
    {
        return implode('|', [$row['entity_type'], $row['locale'], $row['request_path']]);
    }
}
```

| Member | What matters |
|---|---|
| `$validColumnNames` | Every column the file may contain. A header outside it, or one that doesn't match `^[a-z][a-z0-9_]*$`, fails validation before any row is read |
| `$permanentAttributes` | The columns every file must contain, for append and delete alike. `AbstractImporter::validateColumns()` reads it, so declare it even when it's empty |
| `validateRow()` | Can see the same row more than once, so it remembers the rows it has checked. It reports each failure with `skipRow()` instead of throwing, applies fewer rules for a delete, and uses the rules the admin applies to a URL rewrite created by hand |
| `skipRow($rowNumber, $errorCode, $columnName = null, $errorMessage = null)` | Records the error and leaves the row out of the batches. A code without a message uses the template registered in `initErrorMessages()`, where `%s` becomes the column name |
| `importBatch()` | Receives one stored batch: `$batch->data` holds the validated rows, and `$batch->import->action` is `Import::ACTION_APPEND` or `Import::ACTION_DELETE`. It writes in bulk through `URLRewriteRepository`, keeps the created, updated and deleted counters the admin's summary shows, marks the batch processed and fires the batch events |

## Step 2: Register the Importer

Add the importer to the `importers` registry, which the admin's import form lists. The array key is the import `type` stored on every import record, so don't change it once imports exist.

**File:** `packages/Webkul/RedirectImport/src/Config/importers.php`

```php
<?php

return [
    'url_rewrites' => [
        'title' => 'redirect_import::app.importers.url-rewrites.title',
        'importer' => 'Webkul\RedirectImport\Helpers\Importers\UrlRewrite\Importer',

        'sample_paths' => [
            'csv' => 'redirect-import/samples/csv/url-rewrites.csv',
            'xls' => 'redirect-import/samples/xls/url-rewrites.xls',
            'xlsx' => 'redirect-import/samples/xlsx/url-rewrites.xlsx',
            'xml' => 'redirect-import/samples/xml/url-rewrites.xml',
        ],
    ],
];
```

| Key | Purpose |
|---|---|
| `title` | Translation key shown in the import type list; a plain string also renders |
| `importer` | The importer's class name, resolved from the container |
| `sample_paths` | One sample file per format, served with `Storage::download()` from the default filesystem disk |
| `sample_images_zip_path` | Optional, used by the product importer: a ZIP of the images its sample sheet names |

`mergeConfigFrom()` keeps core's `products`, `customers` and `tax_rates` entries, so to change a core importer, extend its class and point the entry at your subclass from your provider's `boot()`, as in `config(['importers.products.importer' => ProductImporter::class])` with your subclass imported; [Overriding a Core Type](../product-type-development/understanding-product-type-configuration.md#overriding-a-core-type) explains why `boot()`.

## Step 3: Load It from a Service Provider

The provider merges the registry file into `importers`, loads the translations and makes the sample files publishable.

**File:** `packages/Webkul/RedirectImport/src/Providers/RedirectImportServiceProvider.php`

```php
<?php

namespace Webkul\RedirectImport\Providers;

use Illuminate\Support\ServiceProvider;

class RedirectImportServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(dirname(__DIR__).'/Config/importers.php', 'importers');
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'redirect_import');

        $this->publishes([
            dirname(__DIR__).'/Resources/samples' => storage_path('app/public/redirect-import/samples'),
        ], 'redirect-import-samples');
    }
}
```

**File:** `packages/Webkul/RedirectImport/src/Resources/lang/en/app.php`

```php
<?php

return [
    'importers' => [
        'url-rewrites' => [
            'title' => 'URL Rewrites',

            'errors' => [
                'duplicate-rewrite' => 'This URL rewrite appears more than once in the file.',
            ],
        ],
    ],
];
```

Register the provider in `bootstrap/providers.php` and the namespace in `composer.json`, as in [Package Development](../package-development/getting-started.md#register-the-provider), then run `php artisan optimize:clear`. Add the translation file to every locale the admin uses, or the type and its errors show raw keys.

## Step 4: Ship the Sample Files

The admin offers a sample download in all four formats, so the package ships one file per format and publishes them to the default disk.

**File:** `packages/Webkul/RedirectImport/src/Resources/samples/csv/url-rewrites.csv`

```text
entity_type,request_path,target_path,redirect_type,locale
product,old-blue-shirt,blue-shirt,301,en
category,summer-sale-2025,summer-sale,302,en
```

The XML source reads every element that has attributes as a row, and takes the column names from the first one:

**File:** `packages/Webkul/RedirectImport/src/Resources/samples/xml/url-rewrites.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<url_rewrites>
    <url_rewrite
        entity_type="product"
        request_path="old-blue-shirt"
        target_path="blue-shirt"
        redirect_type="301"
        locale="en"
    />
    <url_rewrite
        entity_type="category"
        request_path="summer-sale-2025"
        target_path="summer-sale"
        redirect_type="302"
        locale="en"
    />
</url_rewrites>
```

Save the CSV from a spreadsheet application as `url-rewrites.xls` and `url-rewrites.xlsx`, then publish all four:

```bash
php artisan vendor:publish --tag=redirect-import-samples
```

That copies them to `storage/app/public/redirect-import/samples`, the root of the default `public` disk. When File Management points the default disk at Amazon S3 or Cloudflare R2, upload the files to the same paths on that disk instead. Write `request_path` and `target_path` without a leading slash, because the storefront compares the request path with its slashes trimmed.

## Test It

1. Run `php artisan config:show importers`. The output lists `url_rewrites` beside core's `products`, `customers` and `tax_rates`.
2. In the admin, open **Settings → Data Transfer → Imports** and create an import. **URL Rewrites** is in the type list, and **Download Sample** downloads the file for each format.
3. Upload the sample CSV with the **Append** action, save, then validate and import it. The summary shows 2 records created.
4. Request `/old-blue-shirt` on the storefront, for example with `curl -I`. The response is a `301` redirect to `/blue-shirt`.
5. Import the same file again: the summary shows 2 records updated. Then import a file with the **Delete** action that holds only the identifying columns; it shows 1 record deleted:

   ```text
   entity_type,request_path,locale
   product,old-blue-shirt,en
   ```

6. Import a file that repeats a row. Validation reports "This URL rewrite appears more than once in the file." for the repeat.

## Things to Watch

- **Validation must not write.** `validateRow()` runs over the whole file before anything is imported, and with the `stop-on-errors` strategy validation may be all that runs.
- **`exists:locales,code` runs a query per row.** For a large file, load the locale codes once in `prepareForValidation()`, the hook core's importers load their lookups in, and validate with `Rule::in()` instead.
- **A queued import needs a worker.** With **Process in Queue** on, nothing after validation happens until a queue worker picks up the jobs. Failed batches are in `failed_jobs`; the import's error report covers only row validation.
- **Bulk writes skip the admin's events.** `insert()` fires no events, and the importer doesn't fire the `marketing.search_seo.url_rewrites.*` events the admin controller does, so their listeners don't run for imported rows. Dispatch them yourself if a listener depends on them.
- **Leave chunked validation off for this importer.** With `$chunkedValidationSupported` on, the admin page carries what `validateRow()` accumulates between windows only through `captureValidationState()` and `restoreValidationState()`, and a queued import validates the windows in parallel, each from an empty state, cross-checking them only through `fileUniqueColumns()`, one column per entry, as `TaxRate\Importer` declares for `identifier`. This importer's uniqueness spans three columns, which `fileUniqueColumns()` can't express.
- **Deletes aren't checked against the database here.** Core's importers also reject a delete row whose record doesn't exist, loading the existing identifiers once in `prepareForValidation()`; add that when operators need the error report to list rows that matched nothing.

## Related Pages

- [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md#data-transfer): the workers a queued import runs on.
- [Event Listeners](./event-listeners.md#data-transfer): the events each import stage fires.
- [Understanding Indexers](./understanding-indexers.md): what the product importer's indexing stage refreshes.
- [File Storage](./file-storage.md): the default disk the sample files are served from.

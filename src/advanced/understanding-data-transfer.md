# Understanding Data Transfer

Bagisto's data transfer system enables seamless bulk data import operations directly from the admin panel under the **Settings Menu**. This powerful feature allows efficient management of large datasets through custom import functionality.

::: info What is Data Transfer?
Data transfer in Bagisto provides a structured way to import bulk data (products, customers, tax rates, etc.) using various file formats. It includes validation, batch processing, and error handling for reliable data imports.
:::

## Implementation Guide

This step-by-step guide demonstrates how to create a custom importer for your Bagisto package. For this example, we'll build an **Admin Import** functionality to showcase the implementation process.

::: info Example Scenario
We'll create an admin user importer for a custom package called `AdminImport`. Admin imports are ideal for demonstration because they involve a single table structure, making the concept easier to understand before implementing more complex import logic.
:::

### Create Importer File

Start by creating an `AdminImporter.php` file under the `Importers` directory of your package:

```text
└── packages
    └── Webkul
        └── AdminImport
            ├── ...
            └── src
                └── ...
                └── Importers
                    └── AdminImporter.php
```

::: tip Directory Structure
Core keeps its importers under `Helpers/Importers/<Entity>/Importer.php` (`Webkul\DataTransfer\Helpers\Importers\Product\Importer` and so on). Any directory works as long as the class name in `importers.php` matches; this tutorial uses a flat `Importers` directory for brevity.
:::

## How an import runs

Before writing an importer it helps to know what the framework does around it. An import record moves through a fixed set of states, defined as constants on `Webkul\DataTransfer\Helpers\Import`:

`pending` → `validating` → `validated` → (`downloading`) → `processing` → `processed` → (`linking` → `linked`) → (`indexing` → `indexed`) → `completed`

| Phase | What happens | Your importer's part |
|---|---|---|
| Validate | The file is read in chunks and every row goes through `validateRow()`. Invalid rows are recorded with `skipRow()` and can be downloaded as an error report. Rows that pass are grouped into batches of `AbstractImporter::BATCH_SIZE` (100) | `validateRow()` |
| Images (products only) | When the import's image source is `url`, every image link in the file is fetched once before any row is written | none; provided by `DownloadsImages` |
| Create / Delete | Each batch is handed to `importBatch()`. The import's `action` is `append` or `delete` | `importBatch()` |
| Link | Runs when `isLinkingRequired()` is true: relationships between imported rows are resolved | `linkData()` and `$linkingRequired` |
| Index | Runs when `isIndexingRequired()` is true: price, inventory and search indexes are rebuilt for the batch | `indexData()` and `$indexingRequired` |

Each phase is a queued job under `Webkul\DataTransfer\Jobs\Import` (`ValidateChunk`, `DownloadImages`, `ImportBatch`, `LinkBatch`, `IndexBatch`, plus the `Linking`, `Indexing` and `Completed` markers), chained with `Bus::chain()` and `Bus::batch()`. With **Process in Queue** on, validation and image download are spread across workers; with it off, the admin page drives the same phases in short requests. Either way the import runs to completion on its own once saved. The events fired are `data_transfer.imports.validate.before/after`, `data_transfer.imports.batch.import.before/after`, `data_transfer.imports.batch.linking.before/after`, `data_transfer.imports.batch.indexing.before/after`, and `data_transfer.imports.started`, `.linking`, `.indexing` and `.completed`.

There is no exporter framework in the package: exporting is the CSV, XLS and XLSX export built into every DataGrid.

### Implement Importer Logic

Create the importer class by extending `AbstractImporter` and implementing the required validation and processing methods:

```php
<?php

namespace Webkul\AdminImport\Importers;

use Illuminate\Support\Facades\Event;
use Webkul\DataTransfer\Contracts\ImportBatch as ImportBatchContract;
use Webkul\DataTransfer\Helpers\Import;
use Webkul\DataTransfer\Helpers\Importers\AbstractImporter;

class AdminImporter extends AbstractImporter
{
    /**
     * Permanent entity columns.
     *
     * @var string[]
     */
    protected $permanentAttributes = ['email'];

    /**
     * Valid column names.
     */
    protected array $validColumnNames = ['name', 'email', 'password', 'status', 'role_id'];

    /**
     * Validate data row.
     */
    public function validateRow(array $rowData, int $rowNumber): bool
    {
        // Your validation logic here.

        return true;
    }

    /**
     * Import data rows.
     */
    public function importBatch(ImportBatchContract $batch): bool
    {
        Event::dispatch('data_transfer.imports.batch.import.before', $batch);

        // Your import logic here.

        /**
         * Update import batch summary.
         */
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
}
```

#### Key Implementation Details

The `AdminImporter` class contains several important components that work together to handle the data import process. Understanding these properties and methods will help you customize the importer for your specific requirements.

##### Essential Properties

**`$permanentAttributes`** - Fields that cannot be modified during updates
- In this example, `email` is permanent to maintain admin identity
- These fields are used for identifying existing records

**`$validColumnNames`** - Allowed CSV column headers
- Defines which columns are acceptable in the import file
- Helps validate file structure before processing

##### Core Methods

**`validateRow()`** - Validates each CSV row
- Implement your business logic validation here
- Check required fields, data formats, and business rules
- Return `true` for valid rows, `false` for invalid

**`importBatch()`** - Processes the validated data
- Contains the actual import logic
- Create or update database records
- Handle Laravel events for hooks
- Update batch summary with results

::: tip Implementation Strategy
Start with basic validation and import logic, then gradually add more sophisticated features like password hashing, role validation, and duplicate detection as needed.
:::

### Register Custom Importer

After implementing the importer logic, you need to register it with Bagisto's data transfer system to make it available in the admin panel.

#### Create Importer Configuration

Create a configuration file to define your custom importer settings:

**File:** `packages/Webkul/AdminImport/src/Config/importers.php`

```php
<?php

return [
    'admins' => [
        'title' => 'Admin Users', // add translation key if needed
        'importer' => 'Webkul\AdminImport\Importers\AdminImporter',

        'sample_paths' => [
            'csv' => 'data-transfer/samples/csv/admins.csv',
            'xls' => 'data-transfer/samples/xls/admins.xls',
            'xlsx' => 'data-transfer/samples/xlsx/admins.xlsx',
            'xml' => 'data-transfer/samples/xml/admins.xml',
        ],
    ],
];
```

::: tip Configuration Options
- **title**: Translation key shown in the admin panel dropdown (core uses `data_transfer::app.importers.products.title`); a plain string also renders
- **importer**: Full class name of your importer
- **sample_paths**: Optional sample file paths for different formats, resolved on the `public` disk
- **sample_images_zip_path**: Optional, products only in core; a sample archive matching the sample sheet
:::

#### Register Configuration in Service Provider

Update your service provider to merge the importer configuration:

**File:** `packages/Webkul/AdminImport/src/Providers/AdminImportServiceProvider.php`

```php
<?php

namespace Webkul\AdminImport\Providers;

use Illuminate\Support\ServiceProvider;

class AdminImportServiceProvider extends ServiceProvider
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
    public function boot(): void {}
}
```

#### Verify Registration

After completing the registration steps:

1. **Clear Config Cache**: Run `php artisan config:clear` to refresh configuration
2. **Check Admin Panel**: Navigate to **Settings → Data Transfer → Import**
3. **Verify Dropdown**: Your "Admin Users" option should appear in the importer dropdown

::: info Admin Panel Location
The custom importer will be available at: **Admin Panel → Settings → Data Transfer → Import → Select Type → Admin Users**
:::

#### Implementing Row Validation

Now that you have the basic importer structure, you need to add actual validation and import logic. Without these implementations, the import process will run successfully but won't validate data or insert records into the database.

Let's start by implementing the `validateRow()` method. This method uses Laravel's validation system and Bagisto's built-in error handling to ensure data integrity.

##### Understanding the Validation Process

The validation process follows these key principles:

- **Laravel Validator**: Uses standard Laravel validation rules for consistency
- **Error Tracking**: Failed rows are tracked using the `skipRow()` method
- **Error Export**: Invalid rows are exported to a separate CSV file with error messages
- **Row Status**: The method returns whether the row passed validation

::: tip Validation Best Practices
Always call the `skipRow()` method when validation fails. This ensures proper error tracking and allows users to download a report of failed imports with specific error messages.
:::

##### Validation Implementation

Add `use Illuminate\Support\Facades\Validator;` to the imports at the top of the class, then:

```php
/**
 * Validates row.
 */
public function validateRow(array $rowData, int $rowNumber): bool
{
    $validator = Validator::make($rowData, [
        'name' => 'required',
        'email' => 'required|email',
        'password' => 'required',
        'status' => 'required',
        'role_id' => 'required',
    ]);

    if ($validator->fails()) {
        $failedAttributes = $validator->failed();

        foreach ($validator->errors()->getMessages() as $attributeCode => $message) {
            $errorCode = array_key_first($failedAttributes[$attributeCode] ?? []);

            $this->skipRow($rowNumber, $errorCode, $attributeCode, current($message));
        }
    }

    return ! $this->errorHelper->isRowInvalid($rowNumber);
}
```

##### Validation Flow Explained

1. **Create Validator**: Laravel validator checks each field against defined rules
2. **Handle Failures**: When validation fails, extract error details
3. **Track Errors**: Use `skipRow()` to record failed rows with specific error messages
4. **Return Status**: Return boolean indicating whether the row is valid

::: info Error Handling
`skipRow($rowNumber, $errorCode, $columnName = null, $errorMessage = null)` records the failure against the row; the `$errorCode` should be one of the `AbstractImporter::ERROR_CODE_*` constants (`ERROR_CODE_INVALID_ATTRIBUTE`, `ERROR_CODE_COLUMN_NOT_FOUND`, `ERROR_CODE_SYSTEM_EXCEPTION`, and so on) so the error report groups them. What happens next depends on the import's validation strategy: `skip-errors` proceeds without the bad rows, up to the allowed error count, while `stop-on-errors` halts after validation. For detailed implementation patterns, refer to other Bagisto importers or examine the abstract class methods.
:::

#### Implementing Batch Import

After successful validation, you can proceed with the actual data import process. The `importBatch()` method handles the core logic for inserting, updating, or deleting records in the database.

You have flexibility in choosing your data persistence approach - whether using repositories, Eloquent models, or direct database operations. Select the method that best fits your application's architecture and requirements.

##### Import Process Overview

The batch import process follows these key steps:

- **Event Dispatch**: Triggers before/after events for extensibility
- **Action Handling**: Supports create, update, and delete operations
- **Data Processing**: Iterates through validated batch data
- **Database Operations**: Performs bulk inserts/updates for efficiency
- **Summary Tracking**: Maintains counts for reporting

::: tip Database Operations
The example below demonstrates direct database insertion for simplicity. In production, consider using repositories or Eloquent models for better maintainability and to leverage Laravel features like observers and events.
:::

##### Batch Import Implementation

Add `use Illuminate\Support\Facades\DB;` to the imports, then:

```php
/**
 * Import data rows.
 */
public function importBatch(ImportBatchContract $batch): bool
{
    Event::dispatch('data_transfer.imports.batch.import.before', $batch);

    if ($batch->import->action == Import::ACTION_DELETE) {
        // Deletion logic can be implemented here if needed.
    } else {
        foreach ($batch->data as $rowData) {
            // You can check for existing admin by email and prepare update data if needed.
            $adminData['insert'][$rowData['email']] = array_merge($rowData, [
                'created_at' => $rowData['created_at'] ?? now(),
                'updated_at' => $rowData['updated_at'] ?? now(),
            ]);
        }

        if (! empty($adminData['update'])) {
            $this->updatedItemsCount += count($adminData['update']);

            // Update logic can be implemented here if needed.
        }

        if (! empty($adminData['insert'])) {
            $this->createdItemsCount += count($adminData['insert']);

            DB::table('admins')->insert(array_values($adminData['insert']));
        }
    }

    /**
     * Update import batch summary.
     */
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
```

##### Implementation Flow Explained

1. **Pre-Import Event**: Dispatches event for any pre-processing hooks
2. **Action Check**: Determines whether to perform create, update, or delete operations
3. **Data Iteration**: Processes each validated row from the batch
4. **Record Preparation**: Organizes data for bulk operations and adds timestamps
5. **Database Operations**: Executes bulk inserts/updates for performance
6. **Count Tracking**: Updates internal counters for summary reporting
7. **State Update**: Marks batch as processed with operation summary
8. **Post-Import Event**: Dispatches event for any post-processing hooks

::: info Performance Considerations
- **Bulk Operations**: Use bulk inserts/updates instead of individual operations
- **Memory Management**: Process large batches in chunks if memory is limited
- **Transaction Handling**: Consider wrapping operations in database transactions
- **Event Optimization**: Be mindful of event listeners that might slow down processing
:::

#### Complete Directory Structure

Your final package structure should look like this:

```text
└── packages
    └── Webkul
        └── AdminImport
            ├── src
            │   ├── Config
            │   │   └── importers.php
            │   ├── Importers
            │   │   └── AdminImporter.php
            │   └── Providers
            │       └── AdminImportServiceProvider.php
            └── composer.json
```

### Supported File Formats

Bagisto's data transfer system supports multiple file formats for flexible import operations:

| **Format** | **Extension** | **Use Case** | **Features** |
|---|---|---|---|
| **CSV** | `.csv` | Large datasets | Lightweight, fast processing |
| **Excel** | `.xlsx` | Formatted data | Rich formatting, multiple sheets |
| **Excel Legacy** | `.xls` | Legacy systems | Backward compatibility |
| **XML** | `.xml` | Structured data | Hierarchical data, validation |

The sources are `Webkul\DataTransfer\Helpers\Sources\{CSV,XLS,XLSX,XML}`, chosen by extension in `Import::getSource()`; the upload form accepts exactly those four extensions. Uploaded files, chunk state, downloaded images and error reports live on the local `private` disk, whatever the store's default disk is.

::: info File Size Recommendations
- **CSV**: Best for files > 10MB or > 50,000 records
- **Excel**: Ideal for files < 5MB with complex formatting
- **XML**: Perfect for structured data with relationships
:::

### Product images

The product importer can take images from three sources, chosen per import and stored as `Import::IMAGE_SOURCE_URL`, `IMAGE_SOURCE_UPLOAD` or `IMAGE_SOURCE_DIRECTORY`: `https://` links in the `images` column (fetched in the Images phase, with a same-host and private-address guard), a ZIP archive uploaded with the import, or a directory under `storage/app/import`. The choice is validated against the file, so a mismatch is reported instead of silently importing every product without images. A custom importer that carries images can reuse `Webkul\DataTransfer\Helpers\Importers\Concerns\DownloadsImages`.

## Conclusion

You have successfully learned how to implement custom data transfer functionality in Bagisto. This comprehensive guide covered the complete process from creating importer classes to registering them with the admin panel.

### Key Takeaways

- **Custom Importers**: Extend `AbstractImporter` to create specialized import functionality
- **Validation System**: Leverage Laravel's validation with proper error tracking and reporting
- **Batch Processing**: Implement efficient bulk operations for large dataset imports
- **Event Integration**: Use Laravel events for extensible import workflows
- **Admin Integration**: Register importers through configuration for seamless admin panel access

### Next Steps

With your custom importer implementation complete, consider these enhancements:

- **Sample Files**: Create sample CSV/Excel files for user guidance
- **Advanced Validation**: Implement business-specific validation rules
- **Error Recovery**: Add mechanisms for handling and retrying failed imports
- **Audit Logging**: Track import activities for compliance and debugging

::: tip Best Practices
- Always test with various file sizes and formats
- Implement proper error handling and user feedback
- Consider memory optimization for large imports
- Document your custom fields and validation rules
- Provide clear sample files for end users
:::

For more advanced data transfer scenarios, explore the existing Bagisto importers in the core package for additional implementation patterns and optimization techniques.


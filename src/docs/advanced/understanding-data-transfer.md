# Understanding Data Transfer

Creating a custom data import functionality in Bagisto enables seamless bulk data import operations directly from the admin panel under the `Settings Menu`. This feature is particularly useful for efficiently managing large datasets within your application.

## Implement Custom Data Import

To implement custom data import in your application, follow these structured steps within your package directory:

### Create Importer File

Start by creating an `Importer.php` file under the `Helpers/Importers` directory of your package. Here's a simplified representation of the directory structure:

```
   └── packages
       └── Webkul
           └── CustomImport
               ├── ...
               └── src
                   └── ...
                   └── Helpers
                       └── ...
                       └── Importers
                           ├── ...
                           └── FileName
                               └── Importer.php
```

Here inside the Helpers/Importers folder, the FileName folder is for which section we are implementing the import method.

### Implement Importer Logic

Within the `Importer.php` file, implement the necessary logic for handling data validation and batch processing. Below is an example implementation:

```php
    <?php

    namespace Webkul\CustomImport\Helpers\CustomImportImage;

    use Illuminate\Support\Arr;
    use Illuminate\Support\Facades\Event;
    use Illuminate\Support\Facades\Validator;
    use Webkul\CustomImport\Contracts\CustomImportImageBatch as CustomImportImageContract;
    use Webkul\CustomImport\Repositories\ImportBatchRepository;
    use Webkul\DataTransfer\Helpers\Import;
    use Webkul\DataTransfer\Helpers\Importers\AbstractImporter;

    class Importer extends AbstractImporter
    {
        /**
         * Error code for non existing identifier
         */
        const ERROR_IDENTIFIER_NOT_FOUND_FOR_DELETE = 'identifier_not_found_to_delete';

        /**
         * Error code for duplicated identifier
         */
        const ERROR_DUPLICATE_IDENTIFIER = 'duplicated_identifier';

        /**
         * Permanent entity columns
         */
        protected array $validColumnNames = [
            'identifier',
            'is_zip_range',
            'zip_code',
            'zip_from',
            'zip_to',
            'state',
            'country',
            'tax_rate',
        ];

        /**
         * Error message templates
         */
        protected array $messages = [
            self::ERROR_IDENTIFIER_NOT_FOUND_FOR_DELETE => 'data_transfer::app.importers.tax-rates.validation.errors.identifier-not-found',
            self::ERROR_DUPLICATE_IDENTIFIER            => 'data_transfer::app.importers.tax-rates.validation.errors.duplicate-identifier',
        ];

        /**
         * Permanent entity columns
         *
         * @var string[]
         */
        protected $permanentAttributes = ['identifier'];

        /**
         * Identifiers storage
         */
        protected array $identifiers = [];

        /**
         * Create a new helper instance.
         *
         * @return void
         */
        public function __construct(
            protected ImportBatchRepository $importBatchRepository,
            protected Storage $taxRateStorage
        ) {
            parent::__construct($importBatchRepository);
        }

        /**
         * Initialize Product error templates
         */
        protected function initErrorMessages(): void
        {
            foreach ($this->messages as $errorCode => $message) {
                $this->errorHelper->addErrorMessage($errorCode, trans($message));
            }

            parent::initErrorMessages();
        }

        /**
         * Validate data.
         */
        public function validateData(): void
        {
            $this->taxRateStorage->init();

            parent::validateData();
        }

        /**
         * Validates row
         */
        public function validateRow(array $rowData, int $rowNumber): bool
        {
            /**
             * If row is already validated than no need for further validation
             */
            if (isset($this->validatedRows[$rowNumber])) {
                return ! $this->errorHelper->isRowInvalid($rowNumber);
            }

            $this->validatedRows[$rowNumber] = true;

            /**
             * If import action is delete than no need for further validation
             */
            if ($this->import->action == Import::ACTION_DELETE) {
                if (! $this->isIdentifierExist($rowData['identifier'])) {
                    $this->skipRow($rowNumber, self::ERROR_IDENTIFIER_NOT_FOUND_FOR_DELETE);

                    return false;
                }

                return true;
            }

            /**
             * Validate product attributes
             */
            $validator = Validator::make($rowData, [
                'identifier'   => 'required|string',
                'is_zip_range' => 'sometimes|boolean',
                'zip_code'     => 'nullable|required_if:is_zip_range,0',
                'zip_from'     => 'nullable|required_if:is_zip_range,1',
                'zip_to'       => 'nullable|required_if:is_zip_range,1',
                'country'      => 'required|string',
                'tax_rate'     => 'required|numeric|min:0.0001',
            ]);

            if ($validator->fails()) {
                $failedAttributes = $validator->failed();

                foreach ($validator->errors()->getMessages() as $attributeCode => $message) {
                    $errorCode = array_key_first($failedAttributes[$attributeCode] ?? []);

                    $this->skipRow($rowNumber, $errorCode, $attributeCode, current($message));
                }
            }

            /**
             * Check if identifier is unique
             */
            if (! in_array($rowData['identifier'], $this->identifiers)) {
                $this->identifiers[] = $rowData['identifier'];
            } else {
                $message = sprintf(
                    trans($this->messages[self::ERROR_DUPLICATE_IDENTIFIER]),
                    $rowData['identifier']
                );

                $this->skipRow($rowNumber, self::ERROR_DUPLICATE_IDENTIFIER, 'identifier', $message);
            }

            return ! $this->errorHelper->isRowInvalid($rowNumber);
        }

        /**
         * Start the import process
         */
        public function importBatch(CustomImportImageContract $batch): bool
        {
            Event::dispatch('data_transfer.imports.batch.import.before', $batch);

            if ($batch->import->action == Import::ACTION_DELETE) {
                $this->deleteTaxRates($batch);
            } else {
                $this->saveTaxRatesData($batch);
            }

            /**
             * Update import batch summary
             */
            $batch = $this->importBatchRepository->update([
                'state' => Import::STATE_PROCESSED,

                'summary'      => [
                    'created' => $this->getCreatedItemsCount(),
                    'updated' => $this->getUpdatedItemsCount(),
                    'deleted' => $this->getDeletedItemsCount(),
                ],
            ], $batch->id);

            Event::dispatch('data_transfer.imports.batch.import.after', $batch);

            return true;
        }

        /**
         * Check if identifier exists
         */
        public function isIdentifierExist(string $identifier): bool
        {
            return $this->taxRateStorage->has($identifier);
        }

        /**
         * Prepare row data to save into the database
         */
        protected function prepareRowForDb(array $rowData): array
        {
            $rowData = parent::prepareRowForDb($rowData);

            $rowData['is_zip'] = $rowData['is_zip_range'] ?? 0;

            return Arr::except($rowData, 'is_zip_range');
        }
    }

```

This structured explanation provides a clear overview of the steps involved in setting up and implementing a custom data import feature in Bagisto

- `validateRow()`: This method is responsible for validating all the rows of your `.csv` files. It checks for required fields, data types, and performs other validation checks.

- `importBatch()`: This method imports all the rows of your `.csv` files into a batch file and then imports them into the database in a queue. It handles the processing of the data and updates the import batch summary.

These methods play a crucial role in ensuring the integrity and accuracy of the imported data. They help in identifying and handling errors, such as missing or duplicate identifiers, and provide a smooth data transfer process.

### Types of file allowed in the import process.

We support four types of files for data transfer when importing bulk data into the system:

- XML
- CSV
- XLSX
- XLS

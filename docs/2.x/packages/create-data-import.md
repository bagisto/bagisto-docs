# Data Transfer

[[TOC]]

Creating a data import in a custom package makes it very easy to import bulk data into Bagisto. In Bagisto, data transfer can be found in the admin panel under the **Settings Menu**.

## Directory Structure

To create a custom data import for your application, follow these steps:

1. Create a **`Importer.php`** file in the **`Helpers`** folder of your package:

 ```
    └── packages
        └── Webkul
            └── Blog
                ├── ...
                └── src
                    └── ...
                    └── Helpers
                        ├── ...
                        └── BlogImage
                            └── Importer.php             
```

Here inside the Helpers folder, the BlogImage folder is for which section we are implementing the import method.

2. Inside the **`Importer.php`** file, include the following code:

```php
    <?php

    namespace Webkul\Blog\Helpers\BlogImage;

    use Illuminate\Support\Arr;
    use Illuminate\Support\Facades\Event;
    use Illuminate\Support\Facades\Validator;
    use Webkul\Blog\Contracts\BlogImageBatch as BlogImageContract;
    use Webkul\Blog\Repositories\ImportBatchRepository;
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
        public function importBatch(BlogImageContract $batch): bool
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

This code defines the custom data transfer settings. There are two main methods. The first one is ValidateRow, which is validating all the rows of your.csv files. The second one is Import Batch, which is importing all the rows of your.csv files into a batch file and then importing all the rows of your.csv files into the database in queue.     

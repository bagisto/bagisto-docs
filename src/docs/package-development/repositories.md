---
title: Repositories
description: Create and use repositories in a Bagisto package to encapsulate database access for your models.
outline: deep
---

# Repositories

## Introduction

In traditional development, application logic is often embedded in controllers. An alternative approach uses Repositories to abstract database operations and queries, promoting cleaner, more maintainable code.

Repositories decouple models from controllers and provide readable names for complex queries. Each Repository class binds to an Eloquent model in its constructor, enabling the use of methods like `findOrFail`, `update`, and `all`. This separation enhances code readability, reusability, and adherence to the separation of concerns principle, making the application easier to manage and scale.

## Dependency Injection

Use dependency injection to access your repository within controllers/services. This keeps your classes loosely coupled and easy to test.

```php
use Webkul\RMA\Repository\ReturnRequestRepository;

// Bound in constructor
public function __construct(protected ReturnRequestRepository $returnRequestRepository) {}
```

The constructor binds an instance of `ReturnRequestRepository` to a property using PHP 8 constructor property promotion.

## Using Bagisto Package Generator

The Bagisto package generator can scaffold a repository class for you.

### Create a New Repository Class

To create a new repository class, run:

```bash
php artisan package:make-repository ReturnRequestRepository Webkul/RMA
```

### Explanation

- Command: `php artisan package:make-repository` generates a new repository class.
- Repository Name: `ReturnRequestRepository` will be created.
- Package Path: `Webkul/RMA` is the package where the class will be placed.

## Manually Setting Up Repository Files

Manually setting up repository files involves creating and organizing repository classes in your application without relying on automated generators. This approach allows for custom structuring and naming conventions tailored to your project's needs. By manually managing repository files, developers can ensure precise control over code organization and maintain consistency across the application architecture.

### Setting Up ReturnRequestRepository in Webkul/RMA Package

Create a `Repository` folder within the `packages/Webkul/RMA/src/` directory. Then create a file named `ReturnRequestRepository.php`.

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Repository
                └── ReturnRequestRepository.php
```

Copy the following code into your newly created repository file.

```php
<?php

namespace Webkul\RMA\Repository;

use Webkul\Core\Eloquent\Repository;

class ReturnRequestRepository extends Repository
{
    /**
     * Specify the Model contract class name.
     */
    public function model(): string
    {
        return 'Webkul\RMA\Contracts\ReturnRequest';
    }
}
```

The `model()` method returns your model contract FQCN. This initializes the model instance used throughout the repository for database interactions.

## Available Methods

Bagisto leverages the Prettus Repository package. You can find the full list here: https://github.com/andersao/l5-repository?tab=readme-ov-file#methods. Common examples:

Examples:

| # | Method       | Description                                              |
|---|--------------|----------------------------------------------------------|
| 1 | all          | Find all results in the repository                       |
| 2 | find         | Find a result by ID                                      |
| 3 | findOrFail   | Find a result by ID or throw if not found                |
| 4 | create       | Create a new record                                      |
| 5 | update       | Update an existing record by its ID                      |
| 6 | delete       | Delete a record by its ID                                |
| 7 | paginate     | Find all results with pagination                         |
| 8 | where        | Retrieve records matching specific conditions            |
| 9 | first        | Retrieve the first record matching specific conditions   |
|10 | with([...])  | Eager load relationships                                 |
|11 | findWhereIn  | Find results by multiple values in one field             |

### all

Retrieve all records.

```php
$returns = $this->returnRequestRepository->all();
```

### find

Retrieve a single record by its ID.

```php
$return = $this->returnRequestRepository->find($id);
```

### findOrFail

Retrieve a single record by its ID or throw an exception if not found.

```php
$return = $this->returnRequestRepository->findOrFail($id);
```

### create

Create a new record.

```php
$data = [
    'order_id' => 123,
    'customer_id' => 456,
    'reason' => 'Damaged item',
    'status' => 'pending',
];

$return = $this->returnRequestRepository->create($data);
```

### update

Update an existing record by its ID.

```php
$return = $this->returnRequestRepository->update([
    'status' => 'approved',
], $id);
```

### delete

Delete a record by its ID.

```php
$this->returnRequestRepository->delete($id);
```

### paginate

Retrieve a paginated set of return requests from the database.

```php
// Number of records per page.
$perPage = 15;

// Paginate the results.
$returns = $this->returnRequestRepository->paginate($perPage);
```

### where

Retrieve records matching specific conditions.

```php
$returns = $this->returnRequestRepository->findWhere([
    'status' => 'pending',
    'customer_id' => 456,
]);
```

### first

Retrieve the first record matching specific conditions.

```php
$firstPending = $this->returnRequestRepository->findWhere([
    'status' => 'pending',
])->first();
```

### with

Eager load relationships.

```php
$return = $this->returnRequestRepository->with(['order', 'customer'])->find($id);
```

### findWhereIn

Retrieve records where a specified column's value is within a given array of values.

```php
$returns = $this->returnRequestRepository->findWhereIn('id', [1, 2, 3, 4, 5]);
```

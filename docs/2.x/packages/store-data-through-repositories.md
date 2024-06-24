# Repositories

[[TOC]]

## Introduction

In traditional development, application logic is often embedded in controllers. An alternative approach uses Repositories to abstract database operations and queries, promoting cleaner, more maintainable code.

Repositories decouple models from controllers and provide readable names for complex queries. Each Repository class binds to an Eloquent model in its constructor, enabling the use of methods like `findOrFail`, `update`, and `all`. This separation enhances code readability, reusability, and adherence to the separation of concerns principle, making the application easier to manage and scale.

## Available Methods

We are using the Prettus Repository package. You can find all available methods in the Prettus repository [here](https://github.com/andersao/l5-repository?tab=readme-ov-file#methods). Here are some examples:

Examples:

| Sl. no. | Method              | Description                               |
| ------- | ------              | -----------                               |
| 1       | all                 | Find all results in the Repository        |
| 2       | find                | Find a result by ID                       |
| 3       | findOrFail          | Retrieve a single record by its ID or throw an exception if not found.|
| 4       | create              | Create a new record.                       |
| 5       | update              | Update an existing record by its ID.       |
| 6       | delete              | Delete a record by its ID.                 |
| 7       | paginate            | Find all results in the Repository with pagination  |
| 8       | where               | Retrieve records matching specific conditions.  |
| 9       | first               | Retrieve the first record matching specific conditions. |
| 10      | firstOrFail         | Retrieve the first record matching specific conditions or throw an exception if not found. |
| 11      | With(['table_name'])| Load the model relationships Eager load relationships |
| 12      | findWhereIn         | Find results by multiple values in one field|

### All

Retrieve all records.

```php
public function all()
{
    return $this->model->all();
}
```

### Find

Retrieve a single record by its ID.

```php
public function find($id)
{
    return $this->model->find($id);
}
```

### FindOrFail

Retrieve a single record by its ID or throw an exception if not found.

```php
public function findOrFail($id)
{
    return $this->model->findOrFail($id);
}
```

### Create

Create a new record.

```php
public function create(array $data)
{
    return $this->model->create($data);
}
```

### Update

Update an existing record by its ID.

```php
public function update($id, array $data)
{
    $record = $this->findOrFail($id);
    $record->update($data);
    return $record;
}
```

### Delete

Delete a record by its ID.

```php
public function delete($id)
{
    $record = $this->findOrFail($id);
    return $record->delete();
}
```

### Paginate

Retrieve paginated records.

```php
public function paginate($perPage = 15)
{
    return $this->model->paginate($perPage);
}
```

### Where

Retrieve records matching specific conditions.

```php
public function where(array $conditions)
{
    return $this->model->where($conditions)->get();
}
```

### First

Retrieve the first record matching specific conditions.

```php
public function first(array $conditions)
{
    return $this->model->where($conditions)->first();
}
```

### FirstOrFail

Retrieve the first record matching specific conditions or throw an exception if not found.

```php
public function firstOrFail(array $conditions)
{
    return $this->model->where($conditions)->firstOrFail();
}
```

### With

Eager load relationships.

```php
public function with(array $relations)
{
    return $this->model->with($relations);
}
```

### FindWhereIn

Retrieve records where a specified column's value is within a given array of values.

```php
public function findWhereIn($column, array $values)
{
    return $this->model->whereIn($column, $values)->get();
}
```

## Constructor Binding

In the given constructor, we are using dependency injection to bind the PostRepository to a protected property within the class. This allows for easy access to the repository's methods and ensures that the class adheres to the principle of dependency inversion, promoting loose coupling and enhancing testability.

```php
// Bound in constructor
public function __construct(protected PostRepository $postRepository) {}
```

The constructor binds an instance of `PostRepository` to the `$postRepository` property of the class. This is achieved using PHP's constructor property promotion, a feature introduced in PHP 8 that simplifies the declaration and initialization of class properties.

## Using Bagisto Package Generator

The Bagisto package generator provides a convenient way to create new components for your Bagisto application. One of these components is the Repository class, which is essential for abstracting database interactions and promoting clean code architecture.

### Create a New Repository Class

To create a new Repository class, use the following command. This command creates a new Repository class in the `packages/Webkul/Blog/src/Repository` directory.

  ```sh
  php artisan package:make-repository PostRepository Webkul/Blog
  ```

### Explanation

- **Command:** The command `php artisan package:make-repository` is used to generate a new Repository class.
- **Repository Name:** `PostRepository` is the name of the new Repository class that will be created.
- **Package Path:** `Webkul/Blog` specifies the package within the packages directory where the new Repository class will be created.

## Manually Setting Up Repository Files

Manually setting up repository files involves creating and organizing repository classes in your application without relying on automated generators. This approach allows for custom structuring and naming conventions tailored to your project's needs. By manually managing repository files, developers can ensure precise control over code organization and maintain consistency across the application architecture.

### Setting Up PostRepository in Webkul/Blog Package

Start by creating a `Repository` folder within the `Webkul/Blog/src/` directory. This folder will house the repository class responsible for handling post-related database operations.Create a file named `PostRepository.php`. 

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  └── Repository
                      └── PostRepository.php
  ```

This file will contain the `PostRepository` class, which will encapsulate methods for interacting with post data.
Copy the following code into your newly created repository file.

  ```php
  <?php

  namespace Webkul\Blog\Repository;

  use Webkul\Core\Eloquent\Repository;

  class PostRepository extends Repository
  {
      /**
      * Specify the Model class name
      *
      * @return string
      */
      function model(): string
      {
          return 'Webkul\Blog\Contracts\Post';
      }
  }
  ```

The `model()` method within PostRepository.php returns the path of your contract class (`PostContract` in this example). This method initializes the model instance used throughout the repository for database interactions.

Your `PostRepository` is now set up and ready for use within your application. It encapsulates the logic for interacting with post data, following best practices for separation of concerns and promoting clean architecture.

By utilizing the `PostRepository`, you can efficiently perform database operations related to posts while maintaining a structured and maintainable codebase.
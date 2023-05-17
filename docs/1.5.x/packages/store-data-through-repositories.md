# Repository

[[TOC]]

## Introduction

In traditional development, application logic is often written directly in the controller. However, there is an alternative approach that abstracts some of these calls into PHP classes called Repositories. The purpose of repositories is to decouple models from controllers and provide readable names for complex queries.

This file defines our Repository class. Instances of this class have a model property that is bound to an Eloquent model. With this binding in the constructor, we can call Eloquent methods such as findOrFail, update, or all from the class methods.

We are using the Prettus Repository package. You can find all available methods in the Prettus repository [here](https://github.com/andersao/l5-repository). Here are some examples:

Examples:

| Sl. no. | Method              | Description                               |
| ------- | ------              | -----------                               |
| 1       | all                 | Find all results in the Repository         |
| 2       | paginate            | Find all results in the Repository with pagination  |
| 3       | find                | Find a result by ID                        |
| 4       | with(['table_name'])| Load the model relationships               |
| 5       | findWhereIn         | Find results by multiple values in one field|

```php
// Bound in constructor
public function __construct(protected PostRepository $postRepository) {}
```

```php
// Find all results in the Repository
$posts = $this->postRepository->all();
```

## Using Bagisto Package Generator

- This command creates a new Repository class in the **`packages/Webkul/Blog/src/Repository`** directory.

  ```sh
  php artisan package:make-repository PostRepository Webkul/Blog
  ```

## Manual Setup of Files

- Create a **`Repository`** folder inside **`Webkul/Blog/src/`** and create a file named **`PostRepository.php`**. In the repository class, create the **`model()`** method that returns the path of your contract class.

  ```
  - packages/
    - Webkul/Blog/
      - src/
        ...
        - Repository/
          - PostRepository.php
  ```

- Copy the following code into your newly created repository file.

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

- Now, your **`PostRepository`** is ready to use.
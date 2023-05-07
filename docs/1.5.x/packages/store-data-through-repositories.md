# Repository

[[TOC]]

## Introduction

Generally, we wrote all of our application logic in the controller. There’s an alternative approach of development that abstracts some calls into PHP classes called Repositories. The idea is that we can decouple models from controllers and assign a readable name's to complicated queries.

This file defines our Repository class. Instances of this class have a model property that we tie to an Eloquent model. Once this is bound in the constructor we can call Eloquent methods like findOrFail, update or all from the class methods.

- We are using Prettus Repository. You can find all available methods in the Prettus repository from [here](https://github.com/andersao/l5-repository). For now, We are giving some examples below.

  Examples: 

  Sl. no. |  Method               | Description
  ------- |  ------               | ----------- 
  1       | all                   | Find all results in Repository
  2       | paginate              | Find all results in Repository with pagination
  3       | find                  | Find result by id
  4       | with(['table_name'])  | Loading the Model relationships
  5       | findWhereIn           | Find by result by multiple values in one field

  ```php
  // bound in constructor
  public function __construct(protected PostRepository $postRepository) {}
  ```

    ```php
    // Find all results in Repository
    $posts = $this->postRepository->all();
    ```

## Using Bagisto Package Generator

- This command will create a new Repository class in **`packages/Webkul/Blog/src/Repository`** directory.

  ```sh
  php artisan package:make-repository PostRepository Webkul/Blog
  ```

## By Manually Setting up all Files

- Create a **`Repository`** folder inside **`Webkul/Blog/src/`** and create a file **`PostRepository.php`** and create the **`model()`** method in repository class which returns the path of your contract class.

  ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Repository/
            - PostRepository.php
    ```
- After that copy the below code to your newly created repository file. 

  ~~~php
  <?php

  namespace Webkul\Blog\Repository;

  use Webkul\Core\Eloquent\Repository;

  class PostRepository extends Repository
  {
      /**
      * Specify Model class name
      *
      * @return string
      */
      function model(): string
      {
          return 'Webkul\Blog\Contracts\Post';
      }
  }
  ~~~

- Now, You your **`PostRepository`** is ready to use.
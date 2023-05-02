# Migrations

There are two ways to create a migration in **Bagisto**.

1. Using Bagisto Package Generator (**Recommended**)
2. By normal laravel command. (**Expert Level**)

## 1. Using Bagisto Package Generator

This command will create a new migration class in `packages/Webkul/Blog/src/Database/Migrations` directory.

`php artisan package:make-migration CreatePostsTable Webkul/Blog`

## 2. By normal laravel command

To create a migration, use the `make:migration` artisan command:

`php artisan make:migration create_posts_table`

The new migration will be placed in your `database/migrations` directory. Each migration file name contains a timestamp which allows Laravel to determine the order of the migrations.

- Now, Create a `Database` folder in `packages/Webkul/Blog/src` path and inside `Database` folder create `Migrations` and `Seeders` folder.

- After that move your migration file from `database/migration` to `packages/Webkul/Blog/src/Database/Migration/`

    ::: details Updated directory structure

    ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Database/
            - Migrations/
              - 2023_04_28_173207_create_posts_table.php
            - Seeders/
    ```
    :::

The --table and --create options may also be used to indicate the name of the table and whether the migration will be creating a new table.

You may also specify a --path option when creating the migration. The path should be relative to the root directory of your installation:

`php artisan make:migration create_posts_table --path=packages/Webkul/Blog/src/Database/Migrations`

- Now, we need to add migrations to our service provider to load them.

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * BlogServiceProvider
  *
  * @copyright 2023 Webkul Software Pvt. Ltd. (http://www.webkul.com)
  */
  class BlogServiceProvider extends ServiceProvider
  {
      /**
      * Bootstrap services.
      *
      * @return void
      */
      public function boot()
      {          
          $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
      }

      /**
      * Register services.
      *
      * @return void
      */
      public function register()
      {

      }
  }
  ```



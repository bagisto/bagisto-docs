# Migrations

[[TOC]]

To understand Migrations in detail, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/migrations).

## Using Bagisto Package Generator

This command creates a new migration class in the **`packages/Webkul/Blog/src/Database/Migrations`** directory.

```sh
php artisan package:make-migration CreatePostsTable Webkul/Blog
```

## Using Laravel Artisan Command

- Create a **`Database`** folder in the **`packages/Webkul/Blog/src`** path. Inside the **`Database`** folder, create **`Migrations`** and **`Seeders`** folders.

    ```
    └── packages
        └── Webkul
            └── Blog
                └── src
                    ├── ...
                    └── Database
                        ├── Migrations
                        └── Seeders
    ```

- Run the following command with the **`--path`** option to specify where your migration file will be placed.

  ```sh
  php artisan make:migration create_posts_table --path=packages/Webkul/Blog/src/Database/Migrations
  ```

- Copy the code provided here and paste it into your migration file.

  ```php
  <?php

  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;
  use Illuminate\Support\Facades\Schema;

  return new class extends Migration
  {
      /**
      * Run the migrations.
      *
      * @return void
      */
      public function up()
      {
          Schema::create('posts', function (Blueprint $table) {
              $table->id();
              $table->string('title')->nullable();
              $table->longText('description')->nullable();
              $table->integer('user_id');
              $table->tinyInteger('status')->default(1);
              $table->timestamps();
          });
      }

      /**
      * Reverse the migrations.
      *
      * @return void
      */
      public function down()
      {
          Schema::dropIfExists('posts');
      }
  };
  ```

### Loading Migration from Package

- We need to add the migrations to our service provider to load them.

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
  }
  ```

### Creating Tables from Migrations

- Run the following command to create the **`posts`** table in your database.

  ```sh
  php artisan migrate
  ```

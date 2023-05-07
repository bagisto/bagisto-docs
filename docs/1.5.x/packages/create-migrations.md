# Migrations

[[TOC]]

To learn in detail about Migrations you can visit Laravel doc from [here](https://laravel.com/docs/10.x/migrations)

## Using Bagisto Package Generator

This command will create a new migration class in **`packages/Webkul/Blog/src/Database/Migrations`** directory.

```sh
php artisan package:make-migration CreatePostsTable Webkul/Blog
```

## By Laravel artisan Command

- Create a **`Database`** folder in **`packages/Webkul/Blog/src`** path and inside **`Database`** folder create **`Migrations`** and **`Seeders`** folder.

    ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Database/
            - Migrations/
            - Seeders/
    ```
- Now run the below command with the **`--path`** option to determine where your migration file will be placed.

  ```sh
  php artisan make:migration create_posts_table --path=packages/Webkul/Blog/src/Database/Migrations
  ```

- You can copy the code from here and paste it into your migration file.

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
### Load Migration From Package

- Here, we need to add migrations to our service provider to load them.

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
### Create Table From Migration

- Now run below command to create **`posts`** table inside your database.

  ```sh
  php artisan migrate
  ```


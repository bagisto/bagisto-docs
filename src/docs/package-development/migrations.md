---
title: Migrations
description: Create and load package database migrations in Bagisto using Laravel's schema builder and artisan commands.
outline: deep
---

# Migrations

Migrations are like version control for your database, allowing your team to define and share the application's database schema definition.

Bagisto leverages the Laravel Schema facade to offer database-agnostic support for creating and manipulating tables across various database systems supported by Laravel. Migrations in Bagisto utilize this powerful feature to manage database schema changes efficiently.

To understand Migrations in detail, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/migrations).

Let's create a new migration file for your application. We will assume that the package name is "**RMA**". Follow these steps:

## Using Bagisto Package Generator

This command creates a new migration class in the `packages/Webkul/RMA/src/Database/Migrations` directory.

```bash
php artisan package:make-migration CreateReturnsTable Webkul/RMA
```

- `CreateReturnsTable`: specifies the name of the migration file
- `Webkul/RMA`: specifies the package name

## Using Laravel Artisan Command

Create a `Database` folder in the `packages/Webkul/RMA/src` path. Inside the `Database` folder, create `Migrations` and `Seeders` folders.

```text
└── packages
    └── Webkul
        └── RMA
            └── src
                ├── ...
                └── Database
                    ├── Migrations
                    └── Seeders
```

Run the following command with the `--path` option to specify where your migration file will be placed.

::: tip Scoped to your package
Using `--path` ensures the migration is created inside your package rather than the app-level `database/migrations` folder.
:::

```bash
php artisan make:migration create_returns_table --path=packages/Webkul/RMA/src/Database/Migrations
```

## Writing the Migration

To create a new database table, copy the code provided here and paste it into your migration file. The `create` method on the Schema facade accepts two arguments: the first is the name of the table, and the second is a closure that receives a `Blueprint` instance to define the table columns:

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
          Schema::create('returns', function (Blueprint $table) {
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
          Schema::dropIfExists('returns');
      }
  };
```

## Loading Migrations from the Package

We need to add the migrations to our service provider to load them.

```php
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;

class RMAServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
    *
    * @return void
    */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
    }
}
```

## Run Migrations

Run the following command to create the `returns` table in your database.

```bash
php artisan migrate
```

::: info Useful commands
- Show migration status:
    ```bash
    php artisan migrate:status
    ```
- Roll back the last batch:
    ```bash
    php artisan migrate:rollback
    ```
- Re-run all migrations:
    ```bash
    php artisan migrate:fresh
    ```
:::

::: warning Package autoloading
If you just created the RMA package namespace, make sure to refresh Composer autoloads in your Bagisto app before running migrations:
```bash
composer dump-autoload
```
:::

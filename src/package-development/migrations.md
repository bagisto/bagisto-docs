# Migrations

Migrations provide version control for your database schema, allowing you to define and share database changes across different environments.

For our RMA package, we'll create a migration that establishes the database structure needed for basic CRUD operations where admin users can create and manage return requests on behalf of customers.

::: info Learning Objective
This migration demonstrates how to create a table that follows Bagisto's column conventions, references core tables with foreign keys, and runs on every database Bagisto supports.
:::

For detailed information about Laravel migrations, visit the [Laravel Documentation](https://laravel.com/docs/migrations).

::: warning Three databases
Bagisto runs on MySQL, MariaDB and PostgreSQL, and CI runs every migration on all three. Bagisto 2.4 supports MySQL and MariaDB only. Write migrations with the schema builder rather than raw SQL, prefer `jsonb()` to `json()` for JSON columns (core switched its own JSON columns to `jsonb()`), and route any raw expression through `db_grammar()`; see [Database compatibility](../advanced/database-compatibility.md).
:::

## RMA Database Schema Overview

For our RMA package demonstration, we'll create a single table that supports basic CRUD operations where admin users can create, view, edit, and manage RMA requests on behalf of customers. This table will include all essential fields needed for a functional return management system.

**Key Features of Our RMA Table:**
- **Primary Key**: Auto-incrementing ID for database relationships
- **Customer & Order References**: Links to existing customers and orders
- **Product Information**: Track which products are being returned with SKU, name, and quantity
- **Status Management**: Workflow states from pending to completed
- **Return Reason**: Optional field for tracking why items are being returned
- **Admin Notes**: Internal comments for tracking and communication
- **Timestamps**: Audit trail for creation and updates

## Setting up Migration Support

Before creating migrations, we need to configure our service provider to load them. Update your `RMAServiceProvider.php` file:

```php{26}
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;

class RMAServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

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

::: info Service Provider Registration
The `loadMigrationsFrom()` method tells Laravel where to find your package's migrations. This allows them to be run alongside the application's migrations using standard Artisan commands. Once the package is also registered as a Concord module (see [Models](./models.md)), Concord loads the same `Database/Migrations` directory itself; core packages keep the explicit call anyway so the migrations run even before the module is registered.
:::

## Creating Migration Files

Now that we have configured our service provider to load migrations, let's create the actual migration file. There are two approaches you can use:

### Using Bagisto Package Generator

This command creates a new migration class in the `packages/Webkul/RMA/src/Database/Migrations` directory.

```bash
php artisan package:make-migration CreateRmaRequestsTable Webkul/RMA
```

**Command Parameters:**
- `CreateRmaRequestsTable`: specifies the name of the migration file for our RMA requests table
- `Webkul/RMA`: specifies the package name

The package generator will automatically create the migration file with a basic structure. You'll see a new file created like this:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rma_requests', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rma_requests');
    }
};
```

::: tip Generated Migration Structure
The package generator creates a basic migration with just the table name, `id`, and `timestamps`. You'll need to add your custom fields to complete the migration for your RMA functionality.
:::

Now you need to modify this generated migration to add the specific fields for your RMA system. Continue to the [Writing the Migration](#writing-the-migration) section to see the complete implementation.

### Using Laravel Artisan Command

If you prefer using the standard Laravel artisan command, you can use the `--path` option to specify where your migration file will be placed. This command will automatically create the necessary directory structure for you.

::: tip Scoped to your package
Using `--path` ensures the migration is created inside your package rather than the app-level `database/migrations` folder.
:::

```bash
php artisan make:migration CreateRmaRequestsTable --path=packages/Webkul/RMA/src/Database/Migrations
```

This will automatically create the following directory structure if it doesn't exist:

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

## Writing the Migration

To create the RMA requests table, copy the code provided here and paste it into your migration file:

```php{15-34}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rma_requests', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('customer_id')->unsigned();
            $table->integer('order_id')->unsigned();

            $table->string('product_sku');
            $table->string('product_name');
            $table->integer('product_quantity');

            $table->string('status')->default('pending');
            $table->string('reason')->nullable();

            $table->text('admin_notes')->nullable();

            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');

            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rma_requests');
    }
};
```

### Migration Explanation

Let's break down the key components of this migration:

**Primary Key:**
- `increments('id')`: An unsigned `INT` primary key. The core tables you will reference (`products`, `customers`, `orders`, …) use `increments()` rather than `id()`, which would create a `BIGINT`; a foreign key column must match the referenced key's type, so use `integer(...)->unsigned()` for those and check the migration of any other table before referencing it, since a few newer core tables do use `id()`.

**Reference Fields:**
- `customer_id`: Links to `customers.id`, with a foreign key so a deleted customer takes their requests with them
- `order_id`: Links to `orders.id` in the same way

**Product Information:**
- `product_sku`: Unique product identifier 
- `product_name`: Human-readable product name
- `product_quantity`: Number of items being returned

**Business Logic Fields:**
- `reason`: Optional field to categorize why items are being returned
- `status`: Tracks workflow progression (defaults to 'pending')

**Administrative Fields:**
- `admin_notes`: Text field for internal comments and communication
- `timestamps`: Laravel's created_at and updated_at for audit trails

**Indexes:**
- `status` is indexed because the DataGrid filters on it. Add an index for every column you filter or join on; the schema builder writes the right syntax for each database.

::: tip Seeders
Core keeps its seeders under `packages/Webkul/Installer/src/Database/Seeders` and runs them from `bagisto:install`. A package that needs seed data ships its own `Database/Seeders` directory and documents the `php artisan db:seed --class=` command; nothing runs it automatically.
:::

## Run Migrations

Run the following command to create the `rma_requests` table in your database:

```bash
php artisan migrate
```

You should see output similar to:
```
2025_01_01_000000_create_rma_requests_table ............... 75.34ms DONE
```

### Useful Migration Commands

As you continue developing your RMA package, you'll frequently need to manage your migrations. Here are the most commonly used migration commands for package development:

```bash
# Check migration status
php artisan migrate:status

# Run only package migrations
php artisan migrate --path=packages/Webkul/RMA/src/Database/Migrations

# Rollback last migration batch
php artisan migrate:rollback

# Reset and re-run all migrations (development only)
php artisan migrate:fresh
```

## Your Next Step

With your migration complete, you now need to create a model that interacts with the `rma_requests` table. In Bagisto, models follow a specific architecture pattern using Contracts, Proxies, and Concord registration.

**Continue to:** **[Models](./models.md)** - Create the ReturnRequest model for your RMA package

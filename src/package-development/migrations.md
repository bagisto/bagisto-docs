# Migrations

On this page you create the `faqs` table: one row per question, each tied to a channel so every storefront shows its own FAQ. A package keeps its migrations in `src/Database/Migrations` and loads that folder from its service provider; the migrations themselves are standard [Laravel migrations](https://laravel.com/docs/migrations).

<a id="setting-up-migration-support"></a>

## Load the Migrations Folder

Add `loadMigrationsFrom()` to the provider's `boot()` method:

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{19}
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void {}

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');
    }
}
```

<a id="creating-migration-files"></a>
<a id="using-laravel-artisan-command"></a>

## Create the Migration File

Laravel's `make:migration` writes into the folder given with `--path`, and creates the folder when it is missing:

```bash
php artisan make:migration create_faqs_table --path=packages/Webkul/Faq/src/Database/Migrations
```

The file is named `<timestamp>_create_faqs_table.php`.

<a id="writing-the-migration"></a>
<a id="migration-explanation"></a>

## Write the Migration

Replace the generated body with the table the FAQ needs:

**File:** `packages/Webkul/Faq/src/Database/Migrations/<timestamp>_create_faqs_table.php`

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
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('channel_id');
            $table->string('question');
            $table->text('answer');
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('status')->default(true);
            $table->timestamps();

            $table->index(['channel_id', 'status']);

            $table->foreign('channel_id')->references('id')->on('channels')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faqs');
    }
};
```

| Column | Why |
|---|---|
| `channel_id` | The channel the question belongs to. `channels.id` is created with `increments()`, and a foreign key column must match the referenced column's type, so this is `unsignedInteger()` |
| `question`, `answer` | The content |
| `sort_order` | The order on the storefront page |
| `status` | Whether the question is published; new questions are |

The foreign key deletes a channel's questions with the channel, and the composite index serves the storefront query, which filters on `channel_id` and `status` together.

<a id="run-migrations"></a>
<a id="useful-migration-commands"></a>

## Test It

1. Run the migration:

   ```bash
   php artisan migrate
   ```

2. Check that it ran. `<timestamp>_create_faqs_table` is listed as `Ran`:

   ```bash
   php artisan migrate:status
   ```

## Things to Watch

- **Write migrations that run on every supported database.** Bagisto 2.5 runs on MySQL, MariaDB and PostgreSQL. Use the schema builder rather than raw SQL, and route any raw expression through `db_grammar()`; see [Database Compatibility](../advanced/database-compatibility.md).
- **Read the referenced table before adding a foreign key.** `channels`, `customers`, `products` and `orders` use `increments()`, but some newer core tables use `id()` or `bigIncrements()`.
- **Always write `down()`, and never change a migration that has already run** on a shared database. Add a new migration that alters the table.
- **Table names share one database with core.** A bare name such as `faqs` is fine while no core table uses it; prefix a name with the package's (`faq_categories`) when it could collide.
- **`DB_PREFIX` applies to every table.** The schema builder, Eloquent and the query builder add the prefix for you; raw SQL doesn't, so read it from `DB::getTablePrefix()`.

## Next Step

The table exists. Next, give it a model that the rest of Bagisto can resolve and replace.

**Continue to:** [Models](./models.md)

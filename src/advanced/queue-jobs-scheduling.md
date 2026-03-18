# Queue, Jobs & Scheduling

Bagisto uses Laravel's queue system for background processing of indexing, data import/export, and search operations. By default, the queue runs synchronously (`sync` driver), but production environments should use an async driver like Redis or database.

## Queue Configuration

The queue driver is set in `.env`:

```properties
QUEUE_CONNECTION=sync
```

For production, switch to an async driver:

```properties
# Using Redis (recommended)
QUEUE_CONNECTION=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

# Or using the database driver
QUEUE_CONNECTION=database
```

::: tip When to Use Async Queues
If you have more than a few hundred products, or use Elasticsearch, switching to an async queue driver significantly improves admin panel responsiveness during product saves, imports, and catalog rule updates.
:::

## Built-in Jobs

### Product Indexing Jobs

These jobs update product indices when products are created, updated, or deleted:

| Job Class | Package | Purpose |
|---|---|---|
| `UpdateCreateInventoryIndex` | `Webkul\Product` | Reindexes inventory levels for given product IDs |
| `UpdateCreatePriceIndex` | `Webkul\Product` | Reindexes price data for given product IDs |
| `ElasticSearch\UpdateCreateIndex` | `Webkul\Product` | Updates Elasticsearch indices for products (only runs when Elasticsearch is the configured search engine) |
| `ElasticSearch\DeleteIndex` | `Webkul\Product` | Removes products from Elasticsearch across all channel/locale combinations |

### Catalog Rule Jobs

These jobs recalculate product pricing when catalog rules change:

| Job Class | Package | Purpose |
|---|---|---|
| `UpdateCreateCatalogRuleIndex` | `Webkul\CatalogRule` | Reindexes a catalog rule and reprices associated products in batches of 100 |
| `DeleteCatalogRuleIndex` | `Webkul\CatalogRule` | Reprices products after a catalog rule is deleted |
| `UpdateCreateProductIndex` | `Webkul\CatalogRule` | Reindexes a single product against all catalog rules |

### Data Transfer Jobs

The data import system uses Laravel's job batching for large imports:

| Job Class | Package | Purpose |
|---|---|---|
| `Import\ImportBatch` | `Webkul\DataTransfer` | Processes a batch of import records |
| `Import\LinkBatch` | `Webkul\DataTransfer` | Links/associates imported records |
| `Import\IndexBatch` | `Webkul\DataTransfer` | Indexes a batch of imported records |
| `Import\Linking` | `Webkul\DataTransfer` | Full linking pass after import |
| `Import\Indexing` | `Webkul\DataTransfer` | Full indexing pass after import |
| `Import\Completed` | `Webkul\DataTransfer` | Post-import completion tasks |

### Other Jobs

| Job Class | Package | Purpose |
|---|---|---|
| `UpdateCreateSearchTerm` | `Webkul\Marketing` | Creates/updates search term records with usage counts |
| `ProcessSitemap` | `Webkul\Sitemap` | Generates XML sitemaps for products, categories, and CMS pages |

## Running the Queue Worker

For async queue drivers, run a worker process:

```bash
# Start a queue worker
php artisan queue:work

# Process jobs from a specific queue
php artisan queue:work --queue=default

# Limit memory and timeout
php artisan queue:work --memory=256 --timeout=120

# Run once and exit (useful for cron-based processing)
php artisan queue:work --once
```

::: warning Production Workers
In production, use a process manager like Supervisor to keep queue workers running. See the [Laravel Queue documentation](https://laravel.com/docs/12.x/queues#supervisor-configuration) for Supervisor configuration.
:::

## Scheduled Tasks

Bagisto's scheduled commands should be triggered via your server's crontab. Add the Laravel scheduler entry:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

### Commands Intended for Scheduling

| Command | Suggested Frequency | Purpose |
|---|---|---|
| `invoice:cron` | Daily (e.g., 3:00 AM) | Send overdue invoice reminders |
| `exchange-rate:update` | Daily / Weekly / Monthly | Update currency exchange rates |
| `campaign:process` | Every few minutes | Process and send marketing campaign emails |
| `product:price-rule:index` | Daily or on-demand | Reindex catalog rule pricing |
| `indexer:index` | Daily or on-demand | Full product reindex (price, inventory, flat, elastic) |

### Example Crontab Entries

```bash
# Laravel scheduler (handles all scheduled commands)
* * * * * cd /var/www/html/bagisto && php artisan schedule:run >> /dev/null 2>&1

# Or run specific commands directly:
0 3 * * * cd /var/www/html/bagisto && php artisan invoice:cron >> /dev/null 2>&1
0 4 * * * cd /var/www/html/bagisto && php artisan exchange-rate:update >> /dev/null 2>&1
*/5 * * * * cd /var/www/html/bagisto && php artisan campaign:process >> /dev/null 2>&1
0 2 * * * cd /var/www/html/bagisto && php artisan indexer:index >> /dev/null 2>&1
```

## Dispatching Jobs in Your Package

To dispatch a job from your custom package, follow the standard Laravel pattern:

```php
use Webkul\Product\Jobs\UpdateCreatePriceIndex;

// Dispatch to the queue
UpdateCreatePriceIndex::dispatch($productIds);

// Dispatch synchronously (bypasses queue)
UpdateCreatePriceIndex::dispatchSync($productIds);
```

When creating custom jobs, place them in your package's `Jobs/` directory:

```
packages/Webkul/YourPackage/src/Jobs/
└── YourCustomJob.php
```

```php
<?php

namespace Webkul\YourPackage\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class YourCustomJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        protected array $data
    ) {}

    public function handle(): void
    {
        // Your background processing logic
    }
}
```

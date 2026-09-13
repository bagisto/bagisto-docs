# Queue, Jobs & Scheduling

Bagisto uses Laravel's queue system for background processing of indexing, data imports, search operations and mail. The shipped `.env.example` sets `QUEUE_CONNECTION=sync`, so every job runs inside the request that dispatched it until you switch to an asynchronous driver and run a worker.

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

`config/queue.php` defaults to `database` when the variable is absent, so a deployment that omits `QUEUE_CONNECTION` needs a running worker.

::: tip When to Use Async Queues
If you have more than a few hundred products, or use Elasticsearch, switching to an async queue driver significantly improves admin panel responsiveness during product saves, imports, and catalog rule updates. Data Transfer's **Process in Queue** option refuses to start on the `sync` driver and needs a worker on whichever real driver you pick.
:::

::: warning Mail is queued too
Every mailable in the Shop and Admin packages implements `ShouldQueue`. With a real queue driver, order and account emails wait for the worker, and they render outside a storefront request, which matters for [theme email overrides](../theme-development/email-template.md).
:::

## Built-in Jobs

### Product Indexing Jobs

These jobs update product indices when products are created, updated, or deleted:

| Job Class | Package | Purpose |
|---|---|---|
| `UpdateCreateInventoryIndex` | `Webkul\Product` | Reindexes inventory levels for given product IDs |
| `UpdateCreatePriceIndex` | `Webkul\Product` | Reindexes price data for given product IDs |
| `Search\IndexProducts` | `Webkul\Product` | Sends products to the configured search indexer; a no-op indexer is used when no external engine is enabled |
| `Search\DeleteProducts` | `Webkul\Product` | Removes products from the search index |

The product listener chains the inventory, price and search jobs with `Bus::chain()` after every update, so they run in that order.

::: info Bagisto 2.4
The two search jobs are `ElasticSearch\UpdateCreateIndex` and `ElasticSearch\DeleteIndex` on 2.4, and each checks the search engine setting itself before doing anything.
:::

### Catalog Rule Jobs

These jobs recalculate product pricing when catalog rules change:

| Job Class | Package | Purpose |
|---|---|---|
| `UpdateCreateCatalogRuleIndex` | `Webkul\CatalogRule` | Reindexes a catalog rule and reprices associated products in batches |
| `DeleteCatalogRuleIndex` | `Webkul\CatalogRule` | Reprices products after a catalog rule is deleted |
| `UpdateCreateProductIndex` | `Webkul\CatalogRule` | Reindexes a single product against all catalog rules |

Both rule jobs dispatch `promotions.catalog_rule.reindex.before` and `.after` with the affected product ids, which the full page cache listens to.

### Data Transfer Jobs

The import pipeline is built from Laravel job batches and chains, all in `Webkul\DataTransfer\Jobs\Import`:

| Job Class | Purpose |
|---|---|
| `ValidateChunk` | Validates one window of rows and writes a fragment; the batch's completion step merges the fragments and builds the import batches |
| `DownloadImages` | Fetches one wave of remote images named in the file, before any row is written |
| `ImportBatch` | Writes one batch of rows |
| `LinkBatch` | Resolves relationships for one batch (variants, grouped and bundle children, related products) |
| `IndexBatch` | Indexes one batch |
| `Linking`, `Indexing`, `Completed` | Chain markers that move the import from one state to the next and finish it |

`ImportBatch`, `LinkBatch` and `IndexBatch` are bounded by the queue connection's `retry_after` so a second worker cannot pick up a batch that is still running, and retry on database deadlocks. See [Understanding Data Transfer](./understanding-data-transfer.md).

### Other Jobs

| Job Class | Package | Purpose |
|---|---|---|
| `UpdateCreateSearchTerm` | `Webkul\Marketing` | Records storefront search terms with usage counts |
| `ProcessSitemap` | `Webkul\Sitemap` | Generates the XML sitemap for a sitemap record; does nothing when sitemaps are disabled in configuration or the record has no channels |
| `Events\CreateOrderNotification`, `Events\UpdateOrderNotification` | `Webkul\Notification` | Not jobs but broadcast events for the admin bell, queued on the `broadcastable` queue when a broadcast driver is configured |

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
In production, use a process manager like Supervisor to keep queue workers running. See the [Laravel Queue documentation](https://laravel.com/docs/queues#supervisor-configuration) for Supervisor configuration. The production Docker images run PHP-FPM, the web server and the database under Supervisor but **no queue worker**; add a `[program:queue]` entry to their `supervisord.conf`, or run a worker container alongside.
:::

## Scheduled Tasks

Bagisto's scheduled commands are registered by the packages that own them, through `callAfterResolving(Schedule::class, …)` in their service providers. Add the Laravel scheduler entry to your crontab and they run on their own:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

| Command | Frequency | Purpose |
|---|---|---|
| `invoice:cron` | Daily at 03:00 | Send overdue invoice reminders |
| `exchange-rate:update` | Daily, weekly or monthly at the configured time, when scheduled import is enabled | Update currency exchange rates |
| `product:price-rule:index` | Daily at 00:01 | Reindex catalog rule pricing |
| `indexer:index --type=price` | Daily at 00:01 | Rebuild the price index so date-bound special prices take effect |
| `campaign:process` | Daily | Send marketing campaign emails |
| `omnibus:snapshot-prices` | Every fifteen minutes | Record price snapshots (Bagisto 2.5) |
| `omnibus:purge-old-snapshots` | Daily | Drop snapshots past the retention window (Bagisto 2.5) |

`packages/Webkul/Core/tests/Unit/ScheduleTest.php` asserts these registrations, so a change to the schedule is a change to that test.

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

```text
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

    /**
     * Create a new job instance.
     */
    public function __construct(
        protected array $data
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Your background processing logic
    }
}
```

To schedule a command from a package, register it the way core does:

```php
use Illuminate\Console\Scheduling\Schedule;

public function boot(): void
{
    $this->callAfterResolving(Schedule::class, function (Schedule $schedule) {
        $schedule->command('your-package:sync')->hourly();
    });
}
```

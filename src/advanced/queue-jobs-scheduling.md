# Queues, Jobs and Scheduling

Bagisto sends mail, keeps product indices current, runs imports and records search terms through Laravel's queue, and registers its recurring commands with Laravel's scheduler. This page lists the jobs and scheduled tasks core ships, how to run workers and the scheduler in production, and how a package adds its own.

## Queue Connection

`.env.example` sets `QUEUE_CONNECTION=sync`, so every job runs inside the request that dispatches it until you choose an asynchronous connection and run a worker. `config/queue.php` falls back to `database` when the variable is missing, so a server without it queues jobs and needs a worker.

```properties
QUEUE_CONNECTION=redis
```

`database` works as well; the `jobs`, `job_batches` and `failed_jobs` tables come from the root migrations. Both connections hand a job to another worker after `retry_after` seconds (90, from `DB_QUEUE_RETRY_AFTER` or `REDIS_QUEUE_RETRY_AFTER`), so keep a worker's `--timeout` below it; the import jobs size their own timeout to fit. Data Transfer's **Process in Queue** option refuses to start an import while the default connection is `sync`.

## Jobs Core Dispatches

### Product Indexing

| Job | Purpose |
|---|---|
| `Webkul\Product\Jobs\UpdateCreateInventoryIndex` | Reindexes inventory for the given product ids |
| `Webkul\Product\Jobs\UpdateCreatePriceIndex` | Reindexes prices for the given product ids |
| `Webkul\Product\Jobs\Search\IndexProducts` | Sends the products to the search indexer, a no-op when no external engine is enabled |
| `Webkul\Product\Jobs\Search\DeleteProducts` | Removes the products from the search index |

`Webkul\Product\Listeners\Product` refreshes the flat table inline, then dispatches `IndexProducts` after a product is created. After an update it chains the inventory, price and search jobs with `Bus::chain()`, so they run in that order. Before a delete it dispatches `DeleteProducts`, and `IndexProducts` for related products that survive. See [Search Engines](./search-engines.md#indexing).

On Bagisto 2.4 the search jobs are `Webkul\Product\Jobs\ElasticSearch\UpdateCreateIndex` and `DeleteIndex`, and each checks the search engine setting itself.

### Catalog Rules

| Job | Purpose |
|---|---|
| `Webkul\CatalogRule\Jobs\UpdateCreateCatalogRuleIndex` | Reindexes a catalog rule and reprices its products in batches |
| `Webkul\CatalogRule\Jobs\DeleteCatalogRuleIndex` | Reprices products after a catalog rule is deleted |
| `Webkul\CatalogRule\Jobs\UpdateCreateProductIndex` | Reindexes one product against every catalog rule |

The two rule jobs dispatch `promotions.catalog_rule.reindex.before` and `.after` with the affected product ids, which the full page cache and the catalog API cache listen for.

### Data Transfer

The import pipeline is built from job batches and chains in `Webkul\DataTransfer\Jobs\Import`:

| Job | Purpose |
|---|---|
| `ValidateChunk` | Validates one window of rows and writes a fragment; the batch's completion step merges the fragments and builds the import batches |
| `DownloadImages` | Fetches one wave of remote images named in the file, before any row is written |
| `ImportBatch` | Writes one batch of rows |
| `LinkBatch` | Resolves relationships for one batch (variants, grouped and bundle children, related products) |
| `IndexBatch` | Indexes one batch |
| `Linking`, `Indexing`, `Completed` | Chain markers that move the import from one state to the next and finish it |

`ImportBatch`, `LinkBatch` and `IndexBatch` bound their timeout by the connection's `retry_after`, so a second worker can't pick up a batch that's still running, and retry on database deadlocks. See [Understanding Data Transfer](./understanding-data-transfer.md).

### Mail

The base `Mailable` classes in `Webkul\Admin\Mail`, `Webkul\Shop\Mail` and `Webkul\Marketing\Mail` implement `ShouldQueue`, and so does `Webkul\Shop\Mail\Customer\EUWithdrawal\GuestWithdrawalLink`. Order, customer and marketing emails built on them wait for a worker, and they render outside a storefront request, which matters for [email template overrides](../theme-development/email-template.md). The admin and customer `ResetPasswordNotification` classes extend Laravel's `ResetPassword` notification and are sent immediately.

### Other Jobs

| Class | Purpose |
|---|---|
| `Webkul\Marketing\Jobs\UpdateCreateSearchTerm` | Records a storefront search term with its result count, per channel and locale. The storefront product API dispatches it when the request has a search term and no filters besides `mode`, `sort` and `limit` |
| `Webkul\Sitemap\Jobs\ProcessSitemap` | Generates the XML files of a sitemap when the admin creates or updates it; does nothing when sitemaps are disabled in configuration or the sitemap has no channels |
| `Webkul\Notification\Events\CreateOrderNotification`, `UpdateOrderNotification` | Broadcast events for the admin's notification bell. Their `broadcastQueue()` returns `broadcastable`, so Laravel queues them on that queue of the default connection |

## Running Workers in Production

Run workers on the `default` and `broadcastable` queues. A worker that listens on `default` only leaves the notification broadcasts waiting in the queue:

```bash
php artisan queue:work --queue=default,broadcastable --tries=3 --max-time=3600
```

Keep workers running with a process manager. A Supervisor program, with paths and user adjusted to your server:

```ini
[program:bagisto-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/bagisto/artisan queue:work --queue=default,broadcastable --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/bagisto/storage/logs/worker.log
stopwaitsecs=3600
```

- **Restart workers after every deployment** with `php artisan queue:restart`. A worker keeps the code it booted with; it finishes its current job, exits, and Supervisor starts it again.
- **Restart workers after changing configuration too.** Before each job the worker clears the facade instances it resolved, so `core()` and `system_config()` start again for every job. Two things persist until the worker restarts: the configuration applied at boot, including the **File Management** disk and the **Search Engines** connection, and the repository cache's generation tokens, so the six cached repositories can keep returning old values (see [Cache Strategy](./cache-strategy.md#invalidation)). `--max-time` bounds how long a worker lives.
- **The production Docker images run no worker.** Their `supervisord.conf` starts the web server, PHP and the database only, so add a program like the one above or run a worker container beside them.
- **Failed jobs** are stored in `failed_jobs`; list them with `php artisan queue:failed` and retry with `php artisan queue:retry`.

### Refreshing Repository Cache Tokens Between Jobs

A worker can pick up the current repository cache tokens before every job, without a restart, through a listener on Laravel's `JobProcessing` event:

**File:** `packages/Webkul/SupplierFeed/src/Listeners/FlushRepositoryCacheTokens.php`

```php
<?php

namespace Webkul\SupplierFeed\Listeners;

use Illuminate\Queue\Events\JobProcessing;
use Webkul\Core\Helpers\CacheGeneration;

class FlushRepositoryCacheTokens
{
    /**
     * Forget the repository cache tokens an earlier job on this worker read.
     */
    public function handle(JobProcessing $event): void
    {
        CacheGeneration::flush();
    }
}
```

Map `JobProcessing::class` (`Illuminate\Queue\Events\JobProcessing`) to `FlushRepositoryCacheTokens::class` in the `$listen` array of the package's `EventServiceProvider`, and register that provider from the package's main provider with `$this->app->register(EventServiceProvider::class)`; [Event Listeners](./event-listeners.md#register-a-listener) shows the full provider. The next cached read in each job then fetches the current token from the cache store. Settings applied at boot still need a restart.

## Scheduled Tasks

Packages register their commands with `callAfterResolving(Schedule::class, …)` in their service providers. Add Laravel's scheduler to the crontab of **one** server:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

In a container without cron, run `php artisan schedule:work` as a long-running process instead. Bagisto's tasks don't use `onOneServer()`, so a scheduler on every server runs every task once per server.

These are the tasks core registers; `php artisan schedule:list` shows them on your store:

| Command | Schedule | Registered in | Notes |
|---|---|---|---|
| `invoice:cron` | Daily at 03:00 | `Webkul\Core\Providers\CoreServiceProvider` | Sends overdue invoice reminders |
| `exchange-rate:update` | Daily, weekly on Monday or monthly on the 1st, at the configured time (00:00 when empty) | `CoreServiceProvider` | Only when `general.exchange_rates.schedule.enabled` is on (**Scheduled Import**) |
| `indexer:index --type=price` | Daily at 00:01 | `Webkul\Product\Providers\ProductServiceProvider` | Rebuilds prices so date-bound special prices take effect |
| `product:price-rule:index` | Daily at 00:01 | `Webkul\CatalogRule\Providers\CatalogRuleServiceProvider` | Reindexes catalog rule prices |
| `campaign:process` | Daily at 00:00 | `Webkul\Marketing\Providers\MarketingServiceProvider` | Sends marketing campaign emails |
| `omnibus:snapshot-prices` | Every fifteen minutes | `Webkul\Omnibus\Providers\OmnibusServiceProvider` | Always scheduled; records snapshots only for channels with `catalog.products.omnibus.is_enabled` on |
| `omnibus:purge-old-snapshots` | Daily at 00:00 | `OmnibusServiceProvider` | Drops snapshots past the retention window |
| `inspire` | Hourly | `routes/console.php` | Laravel's sample command |

The exchange rate settings are read when the scheduler builds its task list, so a change applies from the next `schedule:run`. The other Bagisto tasks have no setting: their schedules are fixed in the providers listed above.

## Adding Jobs and Scheduled Commands in a Package

Put a job in your package's `src/Jobs` directory. This one reindexes products that a supplier feed changed, in the same order core uses:

**File:** `packages/Webkul/SupplierFeed/src/Jobs/ReindexProducts.php`

```php
<?php

namespace Webkul\SupplierFeed\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Bus;
use Webkul\Product\Jobs\Search\IndexProducts;
use Webkul\Product\Jobs\UpdateCreateInventoryIndex;
use Webkul\Product\Jobs\UpdateCreatePriceIndex;

class ReindexProducts implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The number of times the job may be attempted.
     */
    public int $tries = 3;

    /**
     * Create a new job instance.
     */
    public function __construct(protected array $productIds) {}

    /**
     * Chain the inventory, price and search reindex for the products.
     */
    public function handle(): void
    {
        Bus::chain([
            new UpdateCreateInventoryIndex($this->productIds),
            new UpdateCreatePriceIndex($this->productIds),
            new IndexProducts($this->productIds),
        ])->dispatch();
    }
}
```

Dispatch it with `ReindexProducts::dispatch($productIds)`. `dispatchSync()` runs it immediately in the current process, whatever the connection. Write jobs so that running one twice does no harm, because a queue retries.

Register a scheduled command from the package's service provider, the way core does:

**File:** `packages/Webkul/SupplierFeed/src/Providers/SupplierFeedServiceProvider.php`

```php
<?php

namespace Webkul\SupplierFeed\Providers;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;

class SupplierFeedServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->callAfterResolving(Schedule::class, function (Schedule $schedule) {
            $schedule->command('supplier-feed:sync')->hourly()->onOneServer();
        });
    }
}
```

`supplier-feed:sync` stands for a command your package registers. `onOneServer()` keeps the task to one server when several run the scheduler, and needs a shared cache store such as `database` or `redis`.

## Related Pages

- [Cache Strategy](./cache-strategy.md): the caches these jobs keep current.
- [Understanding Data Transfer](./understanding-data-transfer.md): the import pipeline the Data Transfer jobs run.
- [Configure Load Balancing](../performance/configure-load-balancing.md#queue-and-scheduler): workers and the scheduler on several servers.

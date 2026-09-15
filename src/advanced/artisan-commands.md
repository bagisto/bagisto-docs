# Artisan Commands

Bagisto's packages add their own Artisan commands to Laravel's, registered from each package's service provider when the application runs in the console, and schedule the periodic ones in the same provider. This page lists every command Bagisto adds, then the options and behaviour worth knowing; `php artisan list` shows everything installed.

## Command Reference

| Command | What it does | Class |
|---|---|---|
| [`bagisto:install`](#bagisto-install) | Installs Bagisto: environment, database, admin user and seed data. **Wipes the database** | `Webkul\Installer\Console\Commands\Installer` |
| [`bagisto:fake`](#bagisto-fake) | Generates fake customers, categories or products for development | `Webkul\Faker\Commands\Console\Faker`, from `bagisto/laravel-datafaker` |
| `bagisto:version` | Prints the installed Bagisto version | `Webkul\Core\Console\Commands\BagistoVersion` |
| [`bagisto:translations:check`](#bagisto-translations-check) | Checks every package's translation files against the `en` locale | `Webkul\Core\Console\Commands\TranslationsChecker` |
| [`indexer:index`](#indexer-index) | Rebuilds the price, inventory, flat and search indexes | `Webkul\Product\Console\Commands\Indexer` |
| `product:price-rule:index` | Rebuilds the catalog rule index tables, `catalog_rule_products` and `catalog_rule_product_prices`. Saving or deleting a rule already reindexes its products through queued jobs; this is the nightly refresh | `Webkul\CatalogRule\Console\Commands\PriceRuleIndex` |
| [`exchange-rate:update`](#exchange-rate-update) | Fetches exchange rates from the configured service and updates the stored rates | `Webkul\Core\Console\Commands\ExchangeRateUpdate` |
| `campaign:process` | Processes campaigns and queues their emails for the subscribed customers | `Webkul\Marketing\Console\Commands\EmailsCommand` |
| `invoice:cron` | Queues a reminder email for each `overdue` invoice whose next reminder is due, while it's under the configured reminder limit, if one is set | `Webkul\Core\Console\Commands\InvoiceOverdueCron` |
| `omnibus:snapshot-prices` | Captures Omnibus price snapshots for every active product across the configured channels and currencies | `Webkul\Omnibus\Console\Commands\SnapshotPrices` |
| [`omnibus:purge-old-snapshots`](#omnibus-purge-old-snapshots) | Deletes Omnibus snapshots older than the retention window | `Webkul\Omnibus\Console\Commands\PurgeOldSnapshots` |
| [`down`, `up`](#down-and-up) | Laravel's maintenance commands, extended to switch maintenance on every channel | `Webkul\Core\Console\Commands\DownCommand`, `UpCommand` |

## Options and Behaviour

### `bagisto:install`

```bash
php artisan bagisto:install
```

| Option | Description |
|---|---|
| `-n`, `--no-interaction` | Laravel's global option. Runs an unattended install that asks no questions, uses the existing `.env`, creates the default admin user and skips sample products |
| `--demo-samples` | Seeds the demo products. Combine it with `--no-interaction` for an unattended install with sample data |

::: danger Fresh Installs Only
The command wipes the database (`db:wipe` followed by `migrate:fresh`) before seeding. Never run it on an existing store; an upgrade runs `php artisan migrate`.
:::

```bash
# Unattended, no sample products
php artisan bagisto:install --no-interaction

# Unattended, with demo products
php artisan bagisto:install --no-interaction --demo-samples
```

An unattended install relies on the existing `.env`, so configure it first. It creates the admin `admin@example.com` with the password `admin123`. In interactive mode the database step offers `mysql`, `mariadb` and `pgsql`. Bagisto 2.4's `--skip-env-check`, `--skip-admin-creation`, `--skip-cloud-promotion` and `--skip-github-star` options no longer exist; a deployment script that passes them has to use `--no-interaction` instead.

### `bagisto:fake`

It asks what to create (customers, categories, or products of every type or only simple, virtual, downloadable or configurable ones) and how many. The command comes from `bagisto/laravel-datafaker`, a development dependency of the root `composer.json`, so it's absent from an install made with `composer install --no-dev`. Queued batch jobs create the records, so run a queue worker unless `QUEUE_CONNECTION` is `sync`.

### `bagisto:translations:check`

| Option | Description |
|---|---|
| `--locale=` | Check only one locale against `en` |
| `--package=` | Check only one package, such as `Admin` |
| `--details` | Show key-by-key differences |

```bash
php artisan bagisto:translations:check --locale=fr --details
```

### `indexer:index`

| Option | Values | Description |
|---|---|---|
| `--type` | `inventory`, `price`, `flat`, `search` | The indexers to run; repeat the option for several. Default: all four |
| `--mode` | `selective`, `full` | Default `selective`. Only the first value is used |

```bash
# Rebuild every index after a bulk data fix
php artisan indexer:index --mode=full

# Rebuild one index
php artisan indexer:index --type=price --mode=full
```

With no options the command rebuilds `product_flat` and refreshes date-dependent prices, and nothing else: the inventory and search indexers do nothing in selective mode. It has no catalog rule indexer, so run `php artisan product:price-rule:index` first when catalog rule prices may have changed. [What Each Mode Does](./understanding-indexers.md#what-each-mode-does) has the full breakdown.

### `exchange-rate:update`

The service is read from the `general.exchange_rates.settings.default_service` configuration value, falling back to `config('services.exchange_api.default')`, and each service's class is set under `services.exchange_api.<service>.class`. A failure is printed rather than thrown, and the command still exits successfully, so a cron monitor won't flag it.

### `omnibus:purge-old-snapshots`

| Option | Description |
|---|---|
| `--all` | Delete every snapshot regardless of age |
| `--force` | Skip the confirmation prompt when using `--all` |

The retention window is `omnibus.snapshots.retention_days`, 35 days by default.

### `down` and `up`

`down` also sets `is_maintenance_on` on every channel, and `up` clears it. Bagisto binds them over Laravel's commands in `CoreServiceProvider::registerOverrides()`, so Laravel's own options, such as `--secret`, still work.

While the application is down, Bagisto's `PreventRequestsDuringMaintenance` middleware still serves the admin URL, the IP addresses in the current channel's `allowed_ips`, and any channel whose `is_maintenance_on` flag is off. Saving a channel in the admin puts the whole application down or up to match that channel's flag.

## Scheduled Commands

`omnibus:snapshot-prices`, `omnibus:purge-old-snapshots`, `campaign:process`, `product:price-rule:index`, `indexer:index --type=price`, `invoice:cron` and `exchange-rate:update` run on Laravel's scheduler once its cron entry is in place. [Scheduled Tasks](./queue-jobs-scheduling.md#scheduled-tasks) lists each schedule and the provider that registers it; `php artisan schedule:list` shows them on your install.

## Commands Provided by Dependencies

| Command | From | Used for |
|---|---|---|
| `responsecache:clear {--url=}` | `spatie/laravel-responsecache` | Flush the [full page cache](../performance/configure-fpc.md#clear-the-cache); the admin's cache management actions run it too. `Webkul\FPC\Hasher\DefaultHasher` keys each page by channel, locale and currency, so `--url` forgets only the variant for the context the command resolves |
| `purify:clear` | `stevebauman/purify` | Flush the HTML Purifier cache behind `clean_content()` |
| `concord:modules`, `concord:models` | `konekt/concord` | List the registered Concord modules and models, a quick check that a package's `ModuleServiceProvider` is loaded |
| `octane:install`, `octane:start` | `laravel/octane` | [Laravel Octane](../performance/configure-laravel-octane.md) |
| `package:make`, `package:make-*` | `bagisto/bagisto-package-generator`, an optional development dependency that a stock install doesn't have | [Package Generator](../tools/package-generator.md#command-reference) |

## Laravel Commands You'll Use Often

```bash
# Clear all caches
php artisan optimize:clear

# Create the storage symlink (required for product images on the local disk)
php artisan storage:link

# Run migrations
php artisan migrate

# Seed a freshly migrated, empty database with Bagisto's base data (including admin@example.com)
php artisan db:seed

# Drop all tables, migrate and seed
php artisan migrate:fresh --seed

# Generate the application key
php artisan key:generate

# Start the development server
php artisan serve
```

## Related Pages

- [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md#scheduled-tasks): running the queue workers and the scheduler these commands rely on.
- [Understanding Indexers](./understanding-indexers.md): what each indexer writes and what refreshes it automatically.
- [Installation](../getting-started/installation.md): installing Bagisto with `bagisto:install`.

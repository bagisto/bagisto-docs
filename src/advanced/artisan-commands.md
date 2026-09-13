# Artisan Commands Reference

Bagisto provides custom Artisan commands for installation, indexing, maintenance, and data management. These are in addition to Laravel's built-in commands. Every signature below is copied from the command class it names.

## Installation

### `bagisto:install`

Interactive installation wizard that handles environment configuration, database setup, admin user creation, and initial data seeding.

```bash
php artisan bagisto:install
```

**Options:**

| Flag | Description |
|---|---|
| `-n`, `--no-interaction` | Run an unattended install: ask no questions, use the existing `.env`, create the default admin user, and skip sample products. |
| `--demo-samples` | Seed demo/sample product data. Useful together with `--no-interaction`. |

::: warning Fresh installs only
The command wipes the database (`db:wipe` followed by `migrate:fresh`) before seeding. Never run it on an existing store; an upgrade runs `php artisan migrate`.
:::

::: info Bagisto 2.4
2.4 additionally accepts the deprecated `--skip-env-check`, `--skip-admin-creation`, `--skip-cloud-promotion` and `--skip-github-star` options, each of which prints a deprecation warning and is covered by `--no-interaction`. They have been removed in the current development version.
:::

**Unattended install (no questions, no sample products):**

```bash
php artisan bagisto:install --no-interaction
```

This relies on the existing `.env`, so make sure it is configured before running. It creates the default admin user:

- **Email:** `admin@example.com`
- **Password:** `admin123`

**Unattended install with demo/sample products:**

```bash
php artisan bagisto:install --no-interaction --demo-samples
```

In interactive mode the database step offers MySQL, MariaDB and PostgreSQL and fills in the matching default port (PostgreSQL is available on the current development version only).

**Source:** `Webkul\Installer\Console\Commands\Installer`

## System Information

### `bagisto:version`

Displays the current installed version of Bagisto.

```bash
php artisan bagisto:version
```

**Source:** `Webkul\Core\Console\Commands\BagistoVersion`

## Product Indexing

### `indexer:index`

Reindexes product data for the inventory, price, flat and search indices.

```bash
# Reindex everything
php artisan indexer:index

# Reindex only specific types
php artisan indexer:index --type=price --type=inventory

# Full reindex mode (drops and rebuilds)
php artisan indexer:index --mode=full
```

**Options:**

| Flag | Values | Description |
|---|---|---|
| `--type` | `inventory`, `price`, `flat`, `search` | Select which indexer(s) to run (repeatable). Default: all four |
| `--mode` | `full`, `selective` | Full reindex vs. incremental (default `selective`) |

The `search` indexer runs only when an external search engine is enabled in **Configuration → Search Engines**, and only in `full` mode. An unknown type prints a warning rather than failing.

::: info Bagisto 2.4
On 2.4 the search indexer is selected with `--type=elastic`, and it runs only when the search engine setting is `elastic`.
:::

**Source:** `Webkul\Product\Console\Commands\Indexer`

::: tip When to Reindex
Run this after bulk product imports, price changes, or if product listings appear out of sync. The price indexer is also scheduled daily; see [Scheduled Commands](#scheduled-commands).
:::

### `product:price-rule:index`

Reindexes catalog rule pricing (discount rules applied to products at the catalog level).

```bash
php artisan product:price-rule:index
```

**Source:** `Webkul\CatalogRule\Console\Commands\PriceRuleIndex`

## Currency & Exchange Rates

### `exchange-rate:update`

Fetches and updates currency exchange rates from the configured external provider.

```bash
php artisan exchange-rate:update
```

The provider, its API key and the schedule are set under **Configuration → General → Exchange Rates**; the schedule is applied by the Laravel scheduler when enabled there.

**Source:** `Webkul\Core\Console\Commands\ExchangeRateUpdate`

## Marketing

### `campaign:process`

Processes campaigns and sends emails to the subscribed customers.

```bash
php artisan campaign:process
```

**Source:** `Webkul\Marketing\Console\Commands\EmailsCommand`

## Invoicing

### `invoice:cron`

Sends overdue invoice reminders for unpaid invoices past their due date, within the configured reminders limit.

```bash
php artisan invoice:cron
```

**Source:** `Webkul\Core\Console\Commands\InvoiceOverdueCron`

## Omnibus Price Snapshots

Both commands belong to the `Webkul\Omnibus` package, which ships with the current development version only.

### `omnibus:snapshot-prices`

Captures a price snapshot for every active product on every channel where Omnibus is enabled, in every currency of that channel. Only changed prices are stored. Exits with a warning when no channel has Omnibus enabled.

```bash
php artisan omnibus:snapshot-prices
```

### `omnibus:purge-old-snapshots`

Deletes snapshots older than the retention window (`omnibus.snapshots.retention_days`, 35 days by default), or every snapshot with `--all`.

```bash
php artisan omnibus:purge-old-snapshots
php artisan omnibus:purge-old-snapshots --all --force
```

| Flag | Description |
|---|---|
| `--all` | Delete every snapshot regardless of age |
| `--force` | Skip the confirmation prompt when using `--all` |

**Source:** `Webkul\Omnibus\Console\Commands\SnapshotPrices`, `PurgeOldSnapshots`

## Maintenance Mode

Bagisto overrides Laravel's default `up` and `down` commands to also manage channel-level maintenance state.

### `down`

Puts the application in maintenance mode and marks all channels as under maintenance.

```bash
php artisan down
```

### `up`

Brings the application out of maintenance mode and deactivates maintenance on all channels.

```bash
php artisan up
```

**Source:** `Webkul\Core\Console\Commands\DownCommand`, `Webkul\Core\Console\Commands\UpCommand`

::: info Channel-Aware Maintenance
Unlike standard Laravel, Bagisto's maintenance mode updates the `is_maintenance_on` flag on all channel records in the database, allowing the storefront to show maintenance pages per-channel.
:::

## Translation Validation

### `bagisto:translations:check`

Validates translation files across all packages for consistency against the English (`en`) canonical locale.

```bash
# Check all packages and locales
php artisan bagisto:translations:check

# Check a specific locale
php artisan bagisto:translations:check --locale=fr

# Check a specific package
php artisan bagisto:translations:check --package=Admin

# Show detailed key-by-key differences
php artisan bagisto:translations:check --details
```

**Options:**

| Flag | Description |
|---|---|
| `--locale=` | Check only a specific locale code |
| `--package=` | Check only a specific package name |
| `--details` | Show detailed key-level differences |

**Source:** `Webkul\Core\Console\Commands\TranslationsChecker`

## Scheduled Commands

Packages register their schedules in their service providers; `bootstrap/app.php` and `routes/console.php` hold nothing but Laravel's `inspire` example. With the scheduler cron entry in place, these run on their own:

| Command | Frequency | Registered in |
|---|---|---|
| `invoice:cron` | Daily at 03:00 | `Webkul\Core\Providers\CoreServiceProvider` |
| `exchange-rate:update` | Daily, weekly (Monday) or monthly (1st) at the configured time, only when **Scheduled Import** is enabled in Exchange Rates configuration | `CoreServiceProvider` |
| `product:price-rule:index` | Daily at 00:01 | `Webkul\CatalogRule\Providers\CatalogRuleServiceProvider` |
| `indexer:index --type=price` | Daily at 00:01 | `Webkul\Product\Providers\ProductServiceProvider` |
| `campaign:process` | Daily | `Webkul\Marketing\Providers\MarketingServiceProvider` |
| `omnibus:snapshot-prices` | Every fifteen minutes | `Webkul\Omnibus\Providers\OmnibusServiceProvider` (development version) |
| `omnibus:purge-old-snapshots` | Daily | `OmnibusServiceProvider` (development version) |

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

## Commands provided by dependencies

These are not Bagisto's own but are part of the everyday workflow:

| Command | From | Used for |
|---|---|---|
| `responsecache:clear {--url=}` | `spatie/laravel-responsecache` | Flush the [full page cache](../performance/configure-fpc.md); also what the admin's Clear All and Flush buttons run |
| `octane:install`, `octane:start` | `laravel/octane` | [Laravel Octane](../performance/configure-laravel-octane.md) |
| `package:make` and `package:make-*` | `bagisto/bagisto-package-generator` (optional dev dependency) | Scaffolding a package; not present in a stock install |

## Common Laravel Commands Used with Bagisto

These are standard Laravel commands frequently needed during Bagisto development:

```bash
# Clear all caches
php artisan optimize:clear

# Create storage symlink (required for product images)
php artisan storage:link

# Run migrations
php artisan migrate

# Seed the database
php artisan db:seed

# Fresh install (drops all tables, migrates, seeds)
php artisan migrate:fresh --seed

# Generate application key
php artisan key:generate

# Start development server
php artisan serve
```

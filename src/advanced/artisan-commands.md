# Artisan Commands Reference

Bagisto provides custom Artisan commands for installation, indexing, maintenance, and data management. These are in addition to Laravel's built-in commands.

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
| `--skip-env-check` | *(Deprecated — use `--no-interaction`.)* Skip environment file validation. |
| `--skip-admin-creation` | *(Deprecated — use `--no-interaction`.)* Skip the admin user creation step and create the default admin. |
| `--skip-cloud-promotion` | *(Deprecated — use `--no-interaction`.)* Skip the Bagisto Cloud hosting prompt. |
| `--skip-github-star` | *(Deprecated — use `--no-interaction`.)* Alias of `--skip-cloud-promotion`. |

::: warning Deprecated options
The `--skip-*` options are superseded by the global `--no-interaction` (`-n`) flag and will be removed in a future release. Using any of them prints a deprecation warning. `--no-interaction` performs the combined behavior (skip env check + create default admin + skip the cloud prompt).
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

**Source:** `Webkul\Installer\Console\Commands\Installer`

## System Information

### `bagisto:version`

Displays the current installed version of Bagisto.

```bash
php artisan bagisto:version
```

**Output example:**

```
2.4.1
```

**Source:** `Webkul\Core\Console\Commands\BagistoVersion`

## Product Indexing

### `indexer:index`

Reindexes product data for price, inventory, flat catalog, and Elasticsearch indices.

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
| `--type` | `price`, `inventory`, `flat`, `elastic` | Select which indexer(s) to run (repeatable) |
| `--mode` | `full`, `selective` | Full reindex vs. incremental |

**Source:** `Webkul\Product\Console\Commands\Indexer`

::: tip When to Reindex
Run this after bulk product imports, price changes, or if product listings appear out of sync. For production, consider scheduling periodic reindex via cron.
:::

### `product:price-rule:index`

Reindexes catalog rule pricing (discount rules applied to products at the catalog level).

```bash
php artisan product:price-rule:index
```

**Source:** `Webkul\CatalogRule\Console\Commands\PriceRuleIndex`

## Currency & Exchange Rates

### `exchange-rate:update`

Fetches and updates currency exchange rates from configured external providers.

```bash
php artisan exchange-rate:update
```

The frequency can be configured via admin panel under **Settings > Exchange Rates**. Supported update intervals: daily, weekly, monthly.

**Source:** `Webkul\Core\Console\Commands\ExchangeRateUpdate`

## Marketing

### `campaign:process`

Processes pending marketing campaigns and sends emails to subscribed customers.

```bash
php artisan campaign:process
```

**Source:** `Webkul\Marketing\Console\Commands\EmailsCommand`

::: tip Scheduling
This command should be run periodically via cron to process queued campaigns. Add it to your server's crontab or use Laravel's task scheduler.
:::

## Invoicing

### `invoice:cron`

Processes overdue invoice reminders. Checks for unpaid invoices past their due date and sends reminder notifications within the configured reminders limit.

```bash
php artisan invoice:cron
```

**Source:** `Webkul\Core\Console\Commands\InvoiceOverdueCron`

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

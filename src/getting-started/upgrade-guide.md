# 🔄 Upgrade Guide

Keep your Bagisto installation up-to-date with the latest features and security improvements.

::: warning Before You Start
Always backup your database and files before upgrading. Test the upgrade process in a staging environment first.
:::

## 📋 Prerequisites

Before upgrading, ensure you have:

- **Database Backup** - Complete backup of your current database
- **File Backup** - Backup of customizations and uploaded files
- **Server Requirements** - PHP 8.4 for the current development version (8.3 or 8.4 for 2.4), MySQL 8.0 or MariaDB 10.11 (PostgreSQL 16 from the development version), Composer 2.5+
- **Downtime Planning** - Schedule maintenance window for the upgrade

## 🚀 Upgrade Process

### Step 1: Download Latest Version

Download the latest version of Bagisto from one of the following links:
- [Download From Official Bagisto Site](https://bagisto.com/en/download/)
- [Download From GitHub](https://github.com/bagisto/bagisto)

Get the latest Bagisto release:

::: code-group
```bash [GitHub (Recommended)]
# Clone the latest release
git clone https://github.com/bagisto/bagisto.git bagisto-new
cd bagisto-new
git checkout v2.4.10  # Replace with the version tag you are upgrading to
```
:::

### Step 2: Install Dependencies

```bash
composer install
```

### Step 3: Environment Configuration

1. **Copy your existing environment file:**

::: tip Safer .env Migration
Instead of copying the entire `.env` file, consider adding environment variables one by one. The latest version may introduce new variables or deprecate old ones. At this stage, you mainly need to set up database connection details and essential configuration. Review the sample `.env.example` for new options.
:::

```bash
cp /path/to/old-project/.env .env
```

2. **Update environment variables:**
```bash
# Generate new application key if needed
php artisan key:generate

# Review and update any new configuration options
nano .env
```

::: tip Environment Updates
Check the [CHANGELOG.md](https://github.com/bagisto/bagisto/blob/2.4/CHANGELOG.md) for any new environment variables that need to be added.
:::

### Step 4: Database Migration

::: danger Critical Step
Always backup your database before running migrations!
:::

```bash
# Run database migrations
php artisan migrate

# Run optimize clear
php artisan optimize:clear
```

::: warning Seeder Caution
Avoid using `php artisan db:seed` on existing installations as it may reset your settings and categories. Never run `php artisan bagisto:install` on an existing store: it wipes the database before seeding.
:::

### Step 5: Storage and Assets

```bash
# Create storage link
php artisan storage:link
```

Front-end assets are committed with each release, so a stock install needs no build. If you maintain your own theme or have changed anything under `packages/Webkul/Admin`, `Shop` or `Installer`, rebuild from each package directory:

```bash
cd packages/Webkul/Shop && rm -rf node_modules package-lock.json && npm install && npm run build
```

### Step 6: File Migration

Copy your existing files to the new installation:

```bash
# Copy uploaded files
cp -r /path/to/old-project/storage/app/public/* storage/app/public/

# Copy any custom assets
cp -r /path/to/old-project/public/storage/* public/storage/

# Copy custom themes (if any)
cp -r /path/to/old-project/packages/* packages/
```

::: info File Locations
If you've changed default storage paths or have custom file locations, ensure you copy those as well.
:::

### Step 7: Final Optimization

```bash
# Clear all the cache
php artisan optimize:clear
```

## 📚 Version-Specific Guides

### Upgrading from v2.4 to v2.5

The 2.5 line moves to Laravel 13 and PHP 8.4 and changes several things a customized store has to follow. The repository's `UPGRADE.md` on the `master` branch is the authoritative checklist; the items most likely to need your attention are:

| Area | What changed |
|---|---|
| Platform | PHP 8.4 and Laravel 13; Pest 5 and PHPUnit 13 for tests; `prettus/l5-repository` 4, `kalnoy/nestedset` 7, `laravel/tinker` 3, `barryvdh/laravel-debugbar` 4 (its facade moved to `Fruitcake\LaravelDebugbar`) |
| Front end | Tailwind CSS 4 in the Admin, Shop and Installer packages: `tailwind.config.js` and PostCSS are gone, tokens live in `app.css` under `@theme`, several icon classes were renamed or removed. A custom theme built on Tailwind 3 must be migrated; see [Vite-Powered Theme Assets](../theme-development/vite-powered-theme-assets.md) |
| Search | The Elasticsearch repository became an engine behind `SearchEngineManager`; `ProductRepository::setSearchEngine()` is now `setSearchContext()`, the index jobs were renamed, `indexer:index --type=elastic` is `--type=search`, and settings moved from `catalog.products.search` to **Configuration → Search Engines** (a migration carries them over). Rebuild the index after upgrading. See [Search Engines](../advanced/search-engines.md) |
| Configuration codes | `catalog.products.storefront.buy_now_button_display` → `catalog.products.product_view_page.buy_now_button_display`, `sales.checkout.my_cart.summary` → `sales.checkout.mini_cart.summary`, and `customer.settings.social_login.enable_linkedin-openid` → `enable_linkedin`; migrations rename stored values |
| Images | `config/image.php` became `config/images.php` (`IMAGE_DRIVER`), `image_manager()` returns Laravel's `Illuminate\Image\ImageManager`, and image cache templates must be classes with a public `applyFilter()`; see [Image Cache Templates](../theme-development/image-cache-templates.md) |
| Theme media | Section image paths are stored bare; two migrations rewrite existing rows, and they compare hosts against `APP_URL`, so set it correctly **before** migrating |
| Full page cache | `spatie/laravel-responsecache` 8 with a restructured `config/responsecache.php`; see [Configure Full Page Cache](../performance/configure-fpc.md) |
| Storage | `league/flysystem-aws-s3-v3` is now required, and `config/filesystems.php` gains an `r2` disk |
| New packages | `Webkul\Omnibus` is registered in `bootstrap/providers.php` and `config/concord.php`; copy both entries if you maintain your own versions of those files |
| Database | PostgreSQL 16 is supported; JSON columns are `jsonb`, and any raw SQL in your packages should go through `db_grammar()`. See [Database compatibility](../advanced/database-compatibility.md) |

The upgrade sequence is `php artisan down`, `composer install`, `php artisan migrate --force`, rebuild front-end assets for any package you have changed, `php artisan optimize:clear`, `php artisan up`, then `php artisan indexer:index --type=search --mode=full` if you use Elasticsearch.

- [UPGRADE.md on master](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md)
- [CHANGELOG.md on master](https://github.com/bagisto/bagisto/blob/master/CHANGELOG.md)

### Upgrading from v2.3 to v2.4

For detailed breaking changes and migration steps, refer to:
- [Official UPGRADE.md](https://github.com/bagisto/bagisto/blob/2.4/UPGRADE.md)
- [CHANGELOG.md](https://github.com/bagisto/bagisto/blob/2.4/CHANGELOG.md)

### Upgrading from v2.2 to v2.3

For detailed breaking changes and migration steps, refer to:
- [Official UPGRADE.md (v2.3)](https://github.com/bagisto/bagisto/blob/2.3/UPGRADE.md)
- [CHANGELOG.md (v2.3)](https://github.com/bagisto/bagisto/blob/2.3/CHANGELOG.md)

### Upgrading from v2.1 to v2.2

For detailed breaking changes and migration steps, refer to:
- [Official UPGRADE.md (v2.2)](https://github.com/bagisto/bagisto/blob/2.2/UPGRADE.md)
- [CHANGELOG.md (v2.2)](https://github.com/bagisto/bagisto/blob/2.2/CHANGELOG.md)

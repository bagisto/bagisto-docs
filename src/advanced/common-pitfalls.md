# Common Pitfalls

This page documents frequent issues encountered by developers working with Bagisto, along with solutions derived from the actual codebase.

## Installation & Setup

### PHP Version Mismatch

The current development version requires **PHP 8.4** (`"php": "^8.4"` in `composer.json`); Bagisto 2.4 accepts **8.3 or 8.4** (`">=8.3 <8.5"`). A lower version fails at `composer install` with a platform error, which is easy to mistake for a broken install when a second PHP binary is on the `PATH`.

```bash
# Verify your PHP version
php -v
```

The web installer still checks against 8.3.0, so a host on 8.3 passes the installer's requirement screen and then fails on the development version's Composer constraint.

### Missing PHP Extensions

The following extensions are required (from `composer.json`):

- `ext-calendar`
- `ext-curl`
- `ext-intl`
- `ext-mbstring`
- `ext-openssl`
- `ext-pdo`
- `ext-pdo_mysql`
- `ext-tokenizer`

```bash
# Check installed extensions
php -m | grep -E "calendar|curl|intl|mbstring|openssl|pdo|tokenizer"
```

### Storage Link Not Created

Product images and uploads won't display without the storage symlink:

```bash
php artisan storage:link
```

This creates `public/storage` → `storage/app/public`. If images still don't load, verify `APP_URL` in `.env` matches your actual domain/port.

### APP_URL Mismatch

A mismatch between `APP_URL` and your actual URL causes broken assets, images, and redirects. This is especially common when switching between local development and production.

```properties
# Must match exactly, including port
APP_URL=http://localhost:8000
```

## Database

### Database Versions

Bagisto runs on MySQL 8.0, MariaDB 10.11 and, on the current development version, PostgreSQL 16; these are the versions CI tests. The `utf8mb4_unicode_ci` collation is recommended on MySQL and MariaDB for full Unicode support.

### PostgreSQL-only Failures

Code that only ever ran on MySQL fails on PostgreSQL in predictable ways: case-sensitive `LIKE`, `CAST(… AS CHAR)` truncating to one character, `GROUP BY` rejecting a query that selects ungrouped columns, empty strings written to typed columns, and booleans coming back as `true`/`false` rather than `1`/`0`. Route raw SQL through `db_grammar()` and cast boolean columns; the full list is on [Database compatibility](./database-compatibility.md).

### Migration Order Matters

When running `php artisan migrate:fresh --seed`, Bagisto's package migrations run in the order they're discovered by Concord. If you add a custom package with foreign key dependencies on core tables, ensure your migrations have timestamps that come after the core migrations.

### Database Session Driver

Bagisto defaults to `SESSION_DRIVER=database`, and on the current development version to `CACHE_STORE=database` as well. If you run `php artisan migrate:fresh` but forget `--seed`, the tables exist but the application may behave unexpectedly without seed data.

### Running `bagisto:install` on an existing store

`bagisto:install` is the fresh-install command: it runs `db:wipe` and `migrate:fresh` before seeding. An upgrade runs `php artisan migrate` only.

### Files Vanish After Switching Storage

Choosing Amazon S3 or Cloudflare R2 under **Configure → File Management** changes where new uploads go; files already on the local disk are not copied, and the storefront looks for them on the new disk. Copy `storage/app/public` to the bucket first. See [File Storage](./file-storage.md).

## Package Development

### Service Provider Registration

Every Bagisto package needs a service provider registered in the root `composer.json` autoload section. Forgetting this step means your package won't be discovered:

```json
"autoload": {
    "psr-4": {
        "Webkul\\YourPackage\\": "packages/Webkul/YourPackage/src"
    }
}
```

After adding, run:

```bash
composer dump-autoload
```

### Concord Module Registration

A package with models needs a `ModuleServiceProvider` (extending `Konekt\Concord\BaseModuleServiceProvider` or `Webkul\Core\Providers\CoreModuleServiceProvider`) listed in `config/concord.php`, and a `src/Resources/manifest.php` file, or its proxies resolve to `null`. See [Models](../package-development/models.md).

### Admin Routes Without ACL Entries

The `admin` middleware refuses any admin route that no `acl.php` maps, with a `401`, for every role except one whose permissions are set to **All**. Testing as the super admin hides it. Add an ACL entry for every admin route; see [Access Control List](../package-development/access-control-list.md).

### Bypassing the Repository Pattern

Bagisto's repository cache automatically invalidates when you use repositories for CRUD. If you bypass the repository and write raw Eloquent queries, cached data can become stale. Always prefer repository methods:

```php
// ✅ Correct — uses repository, triggers cache invalidation
$this->productRepository->update($data, $id);

// ❌ Avoid — bypasses cache invalidation
Product::where('id', $id)->update($data);
```

## Frontend & Assets

### Vite Build Required

After changing CSS or JavaScript in a package, you must rebuild assets:

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build
```

Each package with frontend assets (Admin, Shop, Installer) has its own `vite.config.js`, and each build is run from that package's directory. The root `vite.config.js` handles the main application assets.

### Missing Tailwind Classes

Tailwind only emits classes it finds while scanning source files. On the current development version (Tailwind 4) the scan root is the `source("../../../")` argument at the top of each package's `app.css`, which covers the package's `src/` directory, so a class used only in a file outside the package (a theme in `resources/themes`, another package) is not generated; a class built at runtime needs a `@source inline(...)` entry. On Bagisto 2.4 (Tailwind 3) the equivalent is the `content` array in `tailwind.config.js` and the `safelist`. Icon classes are declared in `app.css` too, so an icon name that is not in the `@theme` block renders blank.

## Caching Issues

### Stale Configuration After `.env` Changes

After modifying `.env`, always clear the config cache:

```bash
php artisan config:clear
# Or clear everything
php artisan optimize:clear
```

If you've run `php artisan config:cache`, the cached config takes precedence over `.env` values until cleared.

### Response Cache Serving Old Pages

If storefront pages show stale content after product/category changes, the FPC event listeners may not be covering your change. The cache is switched on under **Configure → Cache Management → Full Page Cache** (there is no `RESPONSE_CACHE_ENABLED` variable); flush it from the same page or from the console:

```bash
php artisan responsecache:clear
```

Signed-in customers are never served cached pages, so a stale page reproduces only as a guest.

## Queue & Jobs

### Sync Queue in Production

The default `QUEUE_CONNECTION=sync` processes all jobs synchronously during the HTTP request. This works for development but causes timeouts in production when saving products with Elasticsearch indexing or processing large imports.

Switch to `redis` or `database` driver for production and run a queue worker:

```properties
QUEUE_CONNECTION=redis
```

```bash
php artisan queue:work
```

## Mail Configuration

### Dynamic SMTP

Bagisto uses a custom `bagisto-dynamic-smtp` mail driver that reads SMTP settings from the database (admin panel configuration) rather than `.env` only. If email settings in the admin panel differ from `.env`, the admin panel values take precedence.

This is handled by `Webkul\Core\Providers\DynamicSmtpServiceProvider`.

## Admin Panel

### Custom Admin URL

The admin panel URL is configured via `APP_ADMIN_URL` in `.env`:

```properties
APP_ADMIN_URL=admin
```

Changing this value requires clearing the route cache:

```bash
php artisan route:clear
```

### ACL Not Working

If a custom admin menu item doesn't respect ACL, verify that:

1. Your `Config/acl.php` file defines the permission key
2. Your route or controller checks the permission with the correct key
3. The admin role has the permission enabled

## Elasticsearch

### Connection Refused

If product search fails with Elasticsearch errors, verify:

1. Elasticsearch is running and accessible
2. The host and credentials under **Configure → Search Engines → Elasticsearch** (or `ELASTICSEARCH_*` in `.env`, which those settings fall back to) are correct; the **Test Connection** button on that page reports `unreachable`, `unauthorized`, `incompatible` or `misconfigured`
3. The server is an Elasticsearch 8.x cluster, which is what the `elasticsearch/elasticsearch` client targets

```bash
# Test Elasticsearch connection
curl http://localhost:9200
```

### Index Out of Sync

After bulk changes, rebuild the search index:

```bash
php artisan indexer:index --type=search --mode=full
```

On Bagisto 2.4 the type is `elastic`. Remember that a store whose **Enable External Search Engine** switch is off searches the database whatever the mode settings say.

## Multi-Channel / Multi-Locale

### Channel-Specific Configuration

Many configuration values in Bagisto are channel-specific and locale-specific. When reading config with `core()->getConfigData()`, the current channel and locale context matters. A setting that works on one channel may return `null` on another if not configured.

### Maintenance Mode is Per-Channel

Bagisto's `php artisan down` command sets maintenance mode on all channels. If you only want to take down one channel, manage the `is_maintenance_on` flag directly on the channel record rather than using the artisan command.

# Common Pitfalls

This page documents frequent issues encountered by developers working with Bagisto, along with solutions derived from the actual codebase.

## Installation & Setup

### PHP Version Mismatch

Bagisto requires **PHP 8.3 or higher**. The `composer.json` specifies `"php": "^8.3"`. Running on PHP 8.2 or lower will cause dependency resolution failures.

```bash
# Verify your PHP version
php -v
```

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

### MySQL Version

Bagisto requires MySQL 8.0.32 or higher. The `utf8mb4_unicode_ci` collation is recommended for full Unicode support.

### Migration Order Matters

When running `php artisan migrate:fresh --seed`, Bagisto's package migrations run in the order they're discovered by Concord. If you add a custom package with foreign key dependencies on core tables, ensure your migrations have timestamps that come after the core migrations.

### Database Session Driver

Bagisto defaults to `SESSION_DRIVER=database`. If you run `php artisan migrate:fresh` but forget `--seed`, the sessions table exists but the application may behave unexpectedly without seed data.

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

Packages must extend `Webkul\Core\Providers\CoreModuleServiceProvider` (or register as a Concord module) to be properly recognized. Check that your service provider is registered in `config/concord.php` or uses Laravel's package discovery.

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

Each package with frontend assets (Admin, Shop) has its own `vite.config.js`. The root `vite.config.js` handles the main application assets.

### Tailwind CSS Purging

If custom Tailwind classes don't appear in production, ensure your Blade file paths are included in the relevant `tailwind.config.js` content array. Tailwind only includes classes that appear in scanned files.

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

If storefront pages show stale content after product/category changes, the FPC event listeners may not be covering your change. Check that `RESPONSE_CACHE_ENABLED=true` and clear manually if needed:

```bash
php artisan responsecache:clear
```

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
2. The `.env` or `config/elasticsearch.php` has the correct host URL
3. Elasticsearch version is 7.x or 8.x compatible

```bash
# Test Elasticsearch connection
curl http://localhost:9200
```

### Index Out of Sync

After bulk changes, reindex Elasticsearch:

```bash
php artisan indexer:index --type=elastic
```

## Multi-Channel / Multi-Locale

### Channel-Specific Configuration

Many configuration values in Bagisto are channel-specific and locale-specific. When reading config with `core()->getConfigData()`, the current channel and locale context matters. A setting that works on one channel may return `null` on another if not configured.

### Maintenance Mode is Per-Channel

Bagisto's `php artisan down` command sets maintenance mode on all channels. If you only want to take down one channel, manage the `is_maintenance_on` flag directly on the channel record rather than using the artisan command.

# Debugging Tips

Bagisto includes a custom DebugBar integration and supports standard Laravel debugging tools. This guide covers practical debugging approaches for common development scenarios.

## DebugBar

Bagisto ships with a custom DebugBar package (`Webkul\DebugBar`) that extends [barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar) with Bagisto-specific insights.

### Enabling DebugBar

DebugBar is available when `APP_DEBUG=true` in your `.env` file:

```properties
APP_DEBUG=true
```

### IP Whitelisting

For security, DebugBar access can be restricted to specific IPs using the `APP_DEBUG_ALLOWED_IPS` environment variable:

```properties
APP_DEBUG_ALLOWED_IPS=127.0.0.1,192.168.1.100
```

This is configured in `App\Providers\AppServiceProvider`, which checks the client IP against the whitelist before enabling DebugBar.

### Bagisto Module Collector

The custom **Modules** tab in DebugBar (`Webkul\DebugBar\DataCollector\ModuleCollector`) provides:

- **Model Tracking** — Which Eloquent models were loaded during the request, grouped by Concord module
- **View Tracking** — Which Blade templates were rendered, with file paths
- **Query Tracking** — SQL queries executed, with bindings substituted and duration recorded
- **Module Grouping** — All of the above grouped by the Webkul package that owns them

This helps you understand which packages are involved in a given page load and identify N+1 query problems or unnecessary view compositions.

## Logging

Bagisto uses Laravel's logging system. Log configuration is in `.env`:

```properties
LOG_CHANNEL=stack
LOG_STACK=single
LOG_LEVEL=debug
```

### Writing Logs

```php
use Illuminate\Support\Facades\Log;

Log::info('Order processed', ['order_id' => $order->id]);
Log::error('Payment failed', ['error' => $e->getMessage()]);
```

Log files are stored in `storage/logs/laravel.log`.

### Viewing Logs

```bash
# Tail the log file
tail -f storage/logs/laravel.log

# Search for specific entries
grep "Payment failed" storage/logs/laravel.log
```

## Common Debugging Scenarios

### Debugging Routes

List all registered routes to find which controller handles a URL:

```bash
# All routes
php artisan route:list

# Filter by URI pattern
php artisan route:list --path=admin/catalog

# Filter by name
php artisan route:list --name=shop
```

::: tip Route Organization
Admin routes are in `packages/Webkul/Admin/src/Routes/` (split into `catalog-routes.php`, `sales-routes.php`, etc.). Shop routes are in `packages/Webkul/Shop/src/Routes/` (split into `store-front-routes.php`, `customer-routes.php`, `checkout-routes.php`).
:::

### Debugging Events

To see what events are fired during a request, use DebugBar's Events tab. Alternatively, add a temporary wildcard listener:

```php
// In a service provider boot() method (temporary debugging only)
Event::listen('*', function (string $event, array $data) {
    Log::debug('Event fired: ' . $event);
});
```

### Debugging Database Queries

Enable query logging temporarily:

```php
\DB::enableQueryLog();

// ... your code ...

dd(\DB::getQueryLog());
```

Or use DebugBar's Queries tab, which shows all queries with execution time and the Webkul module that triggered them.

### Debugging Configuration

Check if a system configuration value is loading correctly:

```php
// In tinker
php artisan tinker
>>> core()->getConfigData('catalog.products.storefront.search_mode')
```

### Debugging Blade Views

Bagisto includes a **Blade Tracer** (documented in [Theme Development > Blade Tracer](/theme-development/blade-tracer)) that helps identify which Blade template renders a given section of the page.

### Debugging the Shop Middleware Stack

The Shop middleware group applies these middleware in order:

1. `Webkul\Shop\Http\Middleware\Theme` — Loads the active theme
2. `Webkul\Shop\Http\Middleware\Locale` — Sets the current locale
3. `Webkul\Shop\Http\Middleware\Currency` — Sets the current currency

If the shop looks wrong (wrong theme, language, or currency), check these middleware are running and that the channel/locale/currency configuration is correct.

## Useful Artisan Commands for Debugging

```bash
# Clear all caches (config, route, view, event, app cache)
php artisan optimize:clear

# Check current Bagisto version
php artisan bagisto:version

# Validate translation files
php artisan bagisto:translations:check --details

# List all registered service providers
php artisan about

# Check queue status
php artisan queue:monitor
```

## Environment Checks

Common issues and quick checks:

| Symptom | Check |
|---|---|
| Broken images | `APP_URL` matches your domain; `php artisan storage:link` was run |
| 500 errors | `storage/logs/laravel.log` for stack trace; permissions on `storage/` and `bootstrap/cache/` |
| Stale data after changes | `php artisan optimize:clear`; check `RESPONSE_CACHE_ENABLED` |
| Admin not accessible | `APP_ADMIN_URL` in `.env` matches the URL path you're using |
| CSS/JS not loading | Run `npm run build` or `npm run dev` for Vite assets |
| Queue jobs not processing | Check `QUEUE_CONNECTION` in `.env`; run `php artisan queue:work` |

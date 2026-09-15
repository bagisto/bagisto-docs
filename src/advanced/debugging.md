# Debugging Tips

Most problems in a Bagisto store come down to a handful of causes: an environment value that isn't what you think, a cache holding an old answer, a route, middleware or listener you didn't know about, or a query that runs far more often than it should. This page shows the tools that reveal each one, starting with what the application is actually running.

## Start with What Is Running

```bash
php artisan about
php artisan bagisto:version
```

`about` reports the environment, whether debug and maintenance mode are on, which of the configuration, event, route and view caches are built, the cache, database, log, mail, queue and session drivers, and whether `public/storage` is linked. A setting that seems to do nothing is often explained by one line of it: a cached configuration, the `sync` queue, or a mail driver other than `bagisto-dynamic-smtp`.

The admin's **About** configuration screen shows the same report with the Bagisto version, the database server, the search engine, the mail transport and storage added, each with a health indicator (`packages/Webkul/Admin/src/Helpers/SystemInformation.php`). Bagisto 2.4 has no such screen.

## The Debug Bar

The bar comes from `barryvdh/laravel-debugbar`, a development dependency (version 4, whose classes are under `Fruitcake\LaravelDebugbar`). `packages/Webkul/DebugBar` adds a **Modules** tab to it, and its `DebugBarServiceProvider` is already registered in `bootstrap/providers.php`.

### When It Appears

The bar renders on a web request when all of these hold:

- `APP_DEBUG=true`.
- `APP_ENV` is neither `production` nor `testing`.
- `DEBUGBAR_ENABLED` is unset or `true`. Set it to `false` to hide the bar and keep debug mode.
- Development dependencies are installed. A `composer install --no-dev` build has no debug bar, and Bagisto's provider skips it.

It never collects in the console, so an indexer or a queue worker doesn't build up its data.

::: warning Leave `APP_DEBUG_ALLOWED_IPS` Empty
`App\Providers\AppServiceProvider::register()` switches the bar on and off for the IPs in `APP_DEBUG_ALLOWED_IPS` through the `Barryvdh\Debugbar\Facades\Debugbar` class, which version 4 doesn't ship. With any value set, every request and artisan command stops with `Class "Barryvdh\Debugbar\Facades\Debugbar" not found`. Control the bar with `APP_DEBUG` and `DEBUGBAR_ENABLED` instead.
:::

### The Modules Tab

`Webkul\DebugBar\DataCollector\ModuleCollector` groups the request's work by Concord module, one entry per `Webkul\<Package>`:

- **Models**: each Eloquent model class retrieved, with the number of instances loaded.
- **Views**: each Blade view rendered from the package, or from a theme override under `resources/themes/<package>/`, `resources/admin-themes/<package>/` or `resources/vendor/views/<package>/`.
- **Queries**: each query that reads from one of the module's tables, with its bindings filled in and its duration.

A page that loads hundreds of one model, or repeats a query for every product in a listing, shows up as a large count under one module.

### The Other Tabs

The standard collectors for queries, views, models, cache, mail, jobs and HTTP client calls are on by default. Events, the current route, the session and the configuration are off; turn one on with its variable, such as `DEBUGBAR_COLLECTORS_EVENTS=true`.

## Logs

Logging goes through Laravel's `stack` channel, which the default `.env` points at the `single` channel, one file at `storage/logs/laravel.log`:

```properties
LOG_CHANNEL=stack
LOG_STACK=single
LOG_LEVEL=debug
```

Set `LOG_STACK=daily` to start a new file each day; `LOG_DAILY_DAYS` sets how many are kept, 14 by default. The exception behind a `500` is written there with its stack trace:

```bash
tail -f storage/logs/laravel.log
```

Write your own entries with the `Log` facade, passing details as context rather than building them into the message:

```php
use Illuminate\Support\Facades\Log;

Log::warning('Shipping rate request failed.', [
    'order_id' => $order->id,
    'status' => $response->status(),
]);
```

## Routes and Middleware

```bash
php artisan route:list --path=admin/catalog/products
php artisan route:list --name=shop.checkout
php artisan route:list --path=admin/catalog/products/edit -v
```

With `-v`, each route lists its middleware in the order it runs:

```text
GET|HEAD  admin/catalog/products/edit/{id} admin.catalog.products.edit › Webkul\Admin\Http\Controllers\Catalog\ProductController@edit
          ⇂ web
          ⇂ Webkul\Core\Http\Middleware\PreventRequestsDuringMaintenance
          ⇂ Webkul\User\Http\Middleware\Bouncer
          ⇂ Webkul\Core\Http\Middleware\NoCacheMiddleware
```

| Package | Route files | Middleware |
|---|---|---|
| Admin | `packages/Webkul/Admin/src/Routes/web.php`, which loads `auth-routes.php` and, under the `APP_ADMIN_URL` prefix, `catalog-routes.php`, `sales-routes.php` and the other `*-routes.php` files beside it | `web`, the maintenance check, then `admin` (`Webkul\User\Http\Middleware\Bouncer`) for everything but the sign-in routes |
| Shop | `packages/Webkul/Shop/src/Routes/web.php`, which loads `webmcp-routes.php`, `store-front-routes.php`, `customer-routes.php` and `checkout-routes.php`, and `api.php` | `web`, the `shop` group, then the maintenance check |

The `shop` group runs three middleware from `Webkul\Shop\Http\Middleware` in this order:

1. `Theme` sets the channel's theme when that theme is registered in `config/themes.php`, and `themes.shop-default` otherwise.
2. `Locale` uses the `locale` query parameter when the channel has that locale, then the locale in the session, then the channel's default locale.
3. `Currency` does the same with the `currency` parameter, the session and the channel's base currency.

A storefront in the wrong theme, language or currency is almost always one of these three reading a channel that isn't set up the way you expect. An admin route that answers `401` for a restricted role usually has no ACL entry; see [Common Pitfalls](./common-pitfalls.md#admin-routes-need-an-acl-entry).

## Events

Bagisto's events are dot-delimited strings, so `event:list` finds the listeners for one by name:

```bash
php artisan event:list --event=catalog.product.update.after
```

```text
catalog.product.update.after ...............................................
⇂ Webkul\Omnibus\Listeners\ProductPriceChange
⇂ Webkul\CatalogRule\Listeners\Product@afterUpdate
⇂ Webkul\FPC\Listeners\Product@afterUpdate
⇂ Webkul\Product\Listeners\Product@afterUpdate
⇂ Webkul\Shop\Listeners\CatalogCache@flush
```

The list shows what a save sets off, and whether your own listener is registered at all. To see which events a request fires, and in what order, turn on the debug bar's events collector with `DEBUGBAR_COLLECTORS_EVENTS=true`. Where the core dispatches its events is covered in [Event Listeners](./event-listeners.md).

## Queries

The debug bar covers the queries of a web request. For code you run by hand, record them in Tinker (`php artisan tinker`):

```php
use Illuminate\Support\Facades\DB;
use Webkul\Product\Repositories\ProductRepository;

DB::enableQueryLog();

app(ProductRepository::class)->findBySlug('a-product-url-key');

DB::getQueryLog();
```

## Configuration Values

`config:show` prints a file-based value:

```bash
php artisan config:show app.admin_url
```

Settings saved in the admin are rows in `core_config`, read with `core()->getConfigData($field, $channelCode, $localeCode)`. Without the channel and locale arguments it reads the current channel and locale, so a value saved only for another channel reads as the field's default from `system.php`, or `null` when the field has none:

```bash
php artisan tinker --execute="dump(core()->getConfigData('search_engines.general.products.storefront_mode'))"
```

After editing `.env` or a file in `config/` on a store where `php artisan config:cache` has run, nothing changes until `php artisan optimize:clear`. `about` shows whether the configuration is cached.

## Views

To find which Blade file renders part of a page, turn on the [Blade Tracer](../tools/blade-tracer.md) with `'tracer' => true` in `config/view.php`; it labels each rendered view with its path. The debug bar's Views tab lists every view the request rendered, and the Modules tab groups them by package. The overlay appears on storefront pages; on admin pages, read the `data-blade-path` attributes in the browser's inspector.

## Queues and Scheduled Work

The default `.env` sets `QUEUE_CONNECTION=sync`, so a queued job runs inside the request or command that dispatched it, and its exception surfaces there and in the log. With a real queue driver, a failed job is stored in the `failed_jobs` table:

```bash
php artisan queue:failed
php artisan queue:retry all
php artisan queue:work --once
php artisan schedule:list
```

`queue:work --once` processes one job in the foreground, which is the easiest way to watch a job run. `schedule:list` shows what the scheduler runs and when. Running workers and the scheduler on a server is covered in [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md).

## Caches

| Symptom | Clear with |
|---|---|
| Edits to `.env`, `config/`, routes or events are ignored | `php artisan optimize:clear` |
| A guest sees an old storefront page that a signed-in customer doesn't | `php artisan responsecache:clear`; the full page cache is only served to guests |

What each cache holds and what invalidates it is on [Cache Strategy](./cache-strategy.md).

## Environment Checks

| Symptom | Check |
|---|---|
| Broken images or asset URLs | `APP_URL` matches the URL you browse, and `about` shows `public/storage` as linked (`php artisan storage:link`) |
| A `500` with no detail | `storage/logs/laravel.log`, and that `storage/` and `bootstrap/cache/` are writable |
| The admin URL returns `404` | `APP_ADMIN_URL` in `.env`, then `php artisan optimize:clear` |
| The storefront shows the maintenance page | Maintenance mode in `about`, and the channel's `is_maintenance_on`; see [Common Pitfalls](./common-pitfalls.md#maintenance-mode-is-one-switch-plus-a-flag-per-channel) |
| Styles or scripts missing after a change | `npm run build` in `packages/Webkul/Admin` or `packages/Webkul/Shop` |
| Emails ignore the admin's SMTP settings | `MAIL_MAILER=bagisto-dynamic-smtp`; see [Common Pitfalls](./common-pitfalls.md#smtp-settings-from-the-admin-are-ignored) |

## Related Pages

- [Common Pitfalls](./common-pitfalls.md): the problems that come up most often, and their fixes.
- [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md): running workers and the scheduler.
- [Event Listeners](./event-listeners.md): where core dispatches its events.

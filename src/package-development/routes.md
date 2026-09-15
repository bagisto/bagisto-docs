# Routes

On this page you give the FAQ two addresses, `/admin/faq` and `/faq`, answered for now by closures that [Controllers](./controllers.md) replaces. A package declares its routes in files under `src/Routes` and loads them from its service provider, with admin and storefront routes in separate files because they run under different middleware.

<a id="middleware-bagisto-provides"></a>
<a id="bagisto-route-organization"></a>

## The Middleware Bagisto Provides

| Middleware | Registered by | What it does |
|---|---|---|
| `admin` | User package | `Webkul\User\Http\Middleware\Bouncer`: requires a signed-in admin, enforces two-factor authentication and checks the route against the ACL |
| `shop` | Shop package | A group of `Theme`, `Locale` and `Currency`, which set the channel's theme, locale and currency for the request |
| `theme`, `locale`, `currency` | Shop package | The same three, one at a time |
| `customer` | Shop package | Requires a signed-in customer |
| `cache.response` | Shop package | Lets the [full page cache](../performance/configure-fpc.md) store the response; [Cache Strategy](../advanced/cache-strategy.md#full-page-cache) lists what is cached and what clears it |
| `Webkul\Core\Http\Middleware\NoCacheMiddleware` | Core package, by class name | Sends `Cache-Control: no-store`, so a browser never shows an admin page from its cache |
| `Webkul\Core\Http\Middleware\PreventRequestsDuringMaintenance` | Core package, by class name | Answers storefront requests with the maintenance page while the channel is in maintenance mode |

Admin routes run under `web`, `admin` and `NoCacheMiddleware`, prefixed with `config('app.admin_url')`, which is `admin` unless `APP_ADMIN_URL` changes it. Core's admin group also adds `PreventRequestsDuringMaintenance`, but that middleware lets every admin URL through, so a package leaves it out. Storefront routes run under `web`, `shop` and `PreventRequestsDuringMaintenance`, with no prefix, as core's do.

<a id="creating-route-files"></a>
<a id="admin-routes-file"></a>

## Create the Admin Routes

**File:** `packages/Webkul/Faq/src/Routes/admin-routes.php`

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Core\Http\Middleware\NoCacheMiddleware;

Route::group([
    'middleware' => ['web', 'admin', NoCacheMiddleware::class],
    'prefix' => config('app.admin_url'),
], function () {
    Route::get('faq', function () {
        return 'FAQ admin';
    })->name('admin.faq.index');
});
```

`web` comes first because `admin` reads the session it starts. Name every admin route `admin.<package>.<action>`, so the name says where the route belongs and doesn't collide with core's.

<a id="shop-routes-file"></a>

## Create the Storefront Routes

**File:** `packages/Webkul/Faq/src/Routes/shop-routes.php`

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Core\Http\Middleware\PreventRequestsDuringMaintenance;

Route::group([
    'middleware' => ['web', 'shop', PreventRequestsDuringMaintenance::class],
], function () {
    Route::get('faq', function () {
        return 'FAQ storefront';
    })->name('shop.faq.index');
});
```

Without `shop`, the page renders with no theme, locale or currency set for the request. Without `PreventRequestsDuringMaintenance`, it stays reachable while the rest of the storefront is down for maintenance.

<a id="registering-routes-with-service-provider"></a>

## Load the Route Files

Add both files to the provider's `boot()` method:

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{21,23}
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void {}

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');

        $this->loadRoutesFrom(__DIR__.'/../Routes/admin-routes.php');

        $this->loadRoutesFrom(__DIR__.'/../Routes/shop-routes.php');
    }
}
```

<a id="testing-your-routes"></a>

## Test It

1. List the routes. `admin/faq` is named `admin.faq.index` and `faq` is named `shop.faq.index`, each with its middleware:

   ```bash
   php artisan route:list --name=faq -v
   ```

2. Signed in to the admin, open `/admin/faq`. The page shows `FAQ admin`.
3. Open `/faq` on the storefront. The page shows `FAQ storefront`.

## Things to Watch

- **Admin routes fail closed.** The `admin` middleware maps every route name in every `acl.php` to a permission and refuses a route missing from that map with a `401`. Only a role whose permissions are set to **All** skips the check, so `/admin/faq` works for the default administrator and fails for any custom role until [Access Control List](./access-control-list.md) adds the package's entries.
- **Read the prefix from configuration.** A literal `admin/` prefix breaks on a store that sets `APP_ADMIN_URL`.
- **The storefront catch-all runs last.** The Shop package resolves product and category URLs with `Route::fallback()`, which Laravel tries only after every other route, so `/faq` is always reachable. The cost falls the other way: a product or category whose URL key is `faq` can no longer be opened at `/faq`, so choose storefront paths a merchant is unlikely to use as a URL key.
- **Route names must be unique across the application.** When two routes share a name, `route()` returns whichever was registered last and `php artisan route:cache` fails.

## Next Step

The routes answer with placeholder strings. Next, point them at controllers that use the repository.

**Continue to:** [Controllers](./controllers.md)

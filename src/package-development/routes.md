# Routes

Routes define the entry points to your application, mapping HTTP requests to specific controllers or actions. In Bagisto, routes are organized to handle both admin panel functionality and storefront operations, supporting all common HTTP methods (GET, POST, PUT, DELETE, PATCH) with middleware protection and RESTful patterns.

For our RMA package, we'll create routes that allow administrators to manage return requests and provide customer-facing functionality for submitting and tracking returns.

::: info Learning Objective
This section demonstrates how to create organized, secure routes for both admin and shop sections of your Bagisto package, following best practices for middleware configuration and URL structure.
:::

For detailed information on Laravel routing concepts, visit the [Laravel Documentation on Routing](https://laravel.com/docs/routing).

## Bagisto Route Organization

Bagisto follows a structured approach to route organization:

### Admin Routes
- **Purpose**: Administrative functionality for managing your package features
- **Access**: Protected by admin authentication middleware
- **URL Pattern**: Prefixed with the admin URL (typically `/admin`)
- **Features**: Full CRUD operations, data management, reporting

### Shop Routes  
- **Purpose**: Customer-facing functionality for your package
- **Access**: Protected by the `shop` middleware group (theme, locale, currency)
- **URL Pattern**: Public URLs accessible to customers
- **Features**: Customer interactions, public APIs, frontend functionality

### Middleware Bagisto provides

| Name | Registered by | What it does |
|---|---|---|
| `admin` | User package | `Webkul\User\Http\Middleware\Bouncer`: requires an admin session and checks the route against the ACL |
| `shop` | Shop package | A group of `Theme`, `Locale` and `Currency`, which activate the channel's theme and set the locale and currency for the request |
| `theme`, `locale`, `currency` | Shop package | The same three, available individually |
| `customer` | Shop package | Requires a signed-in customer |
| `cache.response` | Shop package | Lets the [full page cache](../performance/configure-fpc.md) store the response |

Core admin routes are wrapped in `['web', PreventRequestsDuringMaintenance::class]` and then in `['admin', NoCacheMiddleware::class]` under the `config('app.admin_url')` prefix; core shop routes use `['web', 'shop', PreventRequestsDuringMaintenance::class]`. The examples below use the shorter forms that give the same result for a package.

::: warning Admin routes fail closed
The `admin` middleware looks every request up in the ACL. A route name that has no entry in any `acl.php` is refused with a 401 for every role except one whose permissions are set to **All**. So an admin route without an ACL entry looks fine while you test as the super admin and breaks for everyone else. Add the ACL entry in the same change as the route; see [Access Control List](./access-control-list.md).
:::

## Creating Route Files

Let's create the route structure for our RMA package. We'll organize routes into separate files for better maintainability. Core packages split their route files by concern too: Shop loads `web.php` and `api.php`, and the Admin package keeps one file per area under `src/Routes/`. The two-file layout here keeps admin and shop concerns apart, and any split is fine as long as the provider loads every file.

### Directory Structure

Create the following directory structure in your package:

```bash
mkdir -p packages/Webkul/RMA/src/Routes
```

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Routes
                ├── admin-routes.php
                └── shop-routes.php
```

### Admin Routes File

Create `packages/Webkul/RMA/src/Routes/admin-routes.php`:

```php
<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['web', 'admin'],
    'prefix' => config('app.admin_url'),
], function () {
    /**
     * Return request routes.
     */
    Route::prefix('rma/return-requests')->group(function () {
        /**
         * First route.
         */
        Route::get('', function () {
            return 'Admin RMA Return Requests List';
        })->name('admin.rma.return-requests.index');
    });
});
```

::: info Admin Route Explanation
**Route Structure:**

- **Middleware**: `['web', 'admin']` ensures proper session handling and admin authentication
- **Prefix**: Uses `config('app.admin_url')` (typically `/admin`) for all admin routes
- **Route Prefix**: `rma/return-requests` creates organized URL structure
- **Callback Functions**: Simple closures that return strings to demonstrate route functionality
- **Naming Convention**: Uses `admin.rma.return-requests.*` pattern for easy route referencing
- **RESTful Pattern**: Will follow standard CRUD operations when we add controllers

**Note**: We'll replace these callback functions with proper controllers in the **[Controllers](./controllers.md)** section.
:::

### Shop Routes File

Create `packages/Webkul/RMA/src/Routes/shop-routes.php`:

```php
<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['web', 'shop'],
], function () {
    // Leave it blank for now...
});
```

::: info Shop Route Explanation
**Route Structure:**

- **Middleware**: `['web', 'shop']` handles storefront essentials; `shop` expands to the theme, locale and currency middleware in that order
- **No Prefix**: Shop routes are accessible directly from the root URL
- **Placeholder**: Currently empty, will be populated when we add customer-facing functionality
- **Future Structure**: Will include routes for customers to create and view their return requests
- **Naming Convention**: Will use `shop.rma.*` pattern to distinguish from admin routes

**Note**: Shop routes will be added with proper controllers in the **[Controllers](./controllers.md)** section.
:::

## Registering Routes with Service Provider

Now we need to register these route files with our RMA service provider so Laravel can load them.

Update your `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`:

```php{27-29}
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;

class RMAServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');

        $this->loadRoutesFrom(__DIR__.'/../Routes/admin-routes.php');
        $this->loadRoutesFrom(__DIR__.'/../Routes/shop-routes.php');
    }
}
```

::: tip Service Provider Loading Order
The `loadRoutesFrom()` method automatically registers your routes with Laravel's routing system. Routes are loaded during the application's boot process, making them available immediately.
:::

::: warning The storefront catch-all
The Shop package resolves products, categories and CMS pages with `Route::fallback()`, which Laravel tries only after every ordinary route has failed to match, whatever order the providers booted in. So a storefront route of yours is always reachable; the risk runs the other way: a path your package claims, such as `/returns`, can no longer be used as a product or category slug. Prefix storefront routes with something no merchant would pick for a URL key.
:::

## Testing Your Routes

Verify your routes are properly registered and working:

```bash
# Test a route in your browser
# Visit: http://your-app.com/admin/rma/return-requests (will show "Admin RMA Return Requests List")
```

::: info Route Testing Tips
**Verification Commands:**
- Check route registration: `php artisan route:list | grep rma`
- Test route generation: `php artisan tinker` then `route('admin.rma.return-requests.index')`
- Visit routes in browser to see callback responses
- Verify middleware: Look for middleware column in route:list output
:::

## Your Next Step

With your routes defined using callback functions, you now have a working URL structure for your RMA package. These routes currently return simple strings to demonstrate the routing concept.

In the **Controllers** section, we'll create proper controller classes that use the repository we built earlier, and then **update these routes** to use the controllers instead of callback functions.

**Continue to:** **[Controllers](./controllers.md)** - Build controllers and update your routes to use them
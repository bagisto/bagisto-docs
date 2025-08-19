# Routes

Routes define the entry points to your application, mapping HTTP requests to specific controllers or actions. In Bagisto, routes are organized to handle both admin panel functionality and storefront operations, supporting all common HTTP methods (GET, POST, PUT, DELETE, PATCH) with middleware protection and RESTful patterns.

For our RMA package, we'll create routes that allow administrators to manage return requests and provide customer-facing functionality for submitting and tracking returns.

::: info Learning Objective
This section demonstrates how to create organized, secure routes for both admin and shop sections of your Bagisto package, following best practices for middleware configuration and URL structure.
:::

For detailed information on Laravel routing concepts, visit the [Laravel Documentation on Routing](https://laravel.com/docs/11.x/routing).

## Bagisto Route Organization

Bagisto follows a structured approach to route organization:

### Admin Routes
- **Purpose**: Administrative functionality for managing your package features
- **Access**: Protected by admin authentication middleware
- **URL Pattern**: Prefixed with the admin URL (typically `/admin`)
- **Features**: Full CRUD operations, data management, reporting

### Shop Routes  
- **Purpose**: Customer-facing functionality for your package
- **Access**: Protected by shop middleware (locale, theme, currency)
- **URL Pattern**: Public URLs accessible to customers
- **Features**: Customer interactions, public APIs, frontend functionality

## Creating Route Files

Let's create the route structure for our RMA package. We'll organize routes into separate files for better maintainability.

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
    'prefix' => config('app.admin_url')
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

::: details Admin Route Explanation
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
    'middleware' => ['web', 'locale', 'theme', 'currency']
], function () {
    // Leave it blank for now...
});
```

::: details Shop Route Explanation
**Route Structure:**

- **Middleware**: `['web', 'locale', 'theme', 'currency']` handles storefront essentials
- **No Prefix**: Shop routes are accessible directly from the root URL
- **Placeholder**: Currently empty, will be populated when we add customer-facing functionality
- **Future Structure**: Will include routes for customers to create and view their return requests
- **Naming Convention**: Will use `shop.rma.*` pattern to distinguish from admin routes

**Note**: Shop routes will be added with proper controllers in the **[Controllers](./controllers.md)** section.
:::

## Registering Routes with Service Provider

Now we need to register these route files with our RMA service provider so Laravel can load them.

Update your `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`:

```php
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
        // Load migrations
        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
        
        // Load routes
        $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');
        $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');
    }
}
```

::: tip Service Provider Loading Order
The `loadRoutesFrom()` method automatically registers your routes with Laravel's routing system. Routes are loaded during the application's boot process, making them available immediately.
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
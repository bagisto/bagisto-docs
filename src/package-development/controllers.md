# Controllers

Controllers in Laravel act as the bridge between your routes and business logic, handling HTTP requests and coordinating with repositories to return appropriate responses. In Bagisto, controllers follow a structured approach that separates admin panel functionality from storefront operations while integrating seamlessly with the repository pattern.

For our RMA package, we'll create controllers that handle the admin interface for managing return requests, using the repository we built earlier to interact with our data.

::: info Learning Objective
This section demonstrates how to create organized, maintainable controllers that use dependency injection with repositories and follow Bagisto's architectural patterns for both admin and shop functionality.
:::

For detailed information on Laravel controllers, visit the [Laravel Documentation on Controllers](https://laravel.com/docs/11.x/controllers).

## Bagisto Controller Architecture

Bagisto follows a structured approach to controller organization:

### Admin Controllers
- **Purpose**: Handle administrative functionality for your package
- **Location**: `Http/Controllers/Admin/` directory
- **Features**: Full CRUD operations, data management, repository integration
- **Access**: Protected by admin middleware

### Shop Controllers  
- **Purpose**: Handle customer-facing functionality
- **Location**: `Http/Controllers/Shop/` directory
- **Features**: Customer interactions, limited operations, public interfaces
- **Access**: Protected by shop middleware

## Creating Controller Structure

Let's create the controller structure for our RMA package, starting with the basic setup and then implementing the index functionality.

### Directory Structure

Create the following directory structure in your package:

```bash
mkdir -p packages/Webkul/RMA/src/Http/Controllers/Admin
mkdir -p packages/Webkul/RMA/src/Http/Controllers/Shop
```

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Http
                └── Controllers
                    ├── Controller.php
                    ├── Admin
                    │   └── ReturnRequestController.php
                    └── Shop
                        └── ReturnRequestController.php
```

### Base Controller

Create `packages/Webkul/RMA/src/Http/Controllers/Controller.php`:

```php
<?php

namespace Webkul\RMA\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
```

::: info Base Controller Explanation
**Purpose**: Provides common functionality for all controllers in your package

**Traits Used:**
- **AuthorizesRequests**: Enables authorization policies and gates
- **DispatchesJobs**: Allows dispatching queued jobs
- **ValidatesRequests**: Provides request validation capabilities

**Inheritance**: Extends Laravel's base controller while maintaining package isolation
:::

## Creating Controllers

Now let's create the actual controllers that will handle our RMA functionality, starting with the essential index method.

### Admin Controller

Create `packages/Webkul/RMA/src/Http/Controllers/Admin/ReturnRequestController.php`:

```php
<?php

namespace Webkul\RMA\Http\Controllers\Admin;

use Webkul\RMA\Http\Controllers\Controller;
use Webkul\RMA\Repositories\ReturnRequestRepository;

class ReturnRequestController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected ReturnRequestRepository $returnRequestRepository
    ) {}

    /**
     * Display a listing of return requests.
     */
    public function index()
    {
        // For now, return a simple response
        // We'll enhance this with views in the Views section
        return 'Admin RMA Return Requests List - Using Controller!';
    }
}
```

::: info Admin Controller Explanation
**Key Components:**

- **Dependency Injection**: Repository injected via constructor using PHP 8 property promotion
- **Namespace**: Organized under `Admin` for clear separation
- **Base Class**: Extends our package's base controller
- **Index Method**: Simple implementation that will be enhanced with views later

**Repository Integration**: The controller uses the repository we created earlier for data access
:::

### Shop Controller

Create `packages/Webkul/RMA/src/Http/Controllers/Shop/ReturnRequestController.php`:

```php
<?php

namespace Webkul\RMA\Http\Controllers\Shop;

use Webkul\RMA\Http\Controllers\Controller;
use Webkul\RMA\Repositories\ReturnRequestRepository;

class ReturnRequestController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected ReturnRequestRepository $returnRequestRepository
    ) {}

    /**
     * Display a listing of customer return requests.
     */
    public function index()
    {
        // For now, return a simple response
        // We'll enhance this with views in the Views section
        return 'Shop RMA Return Requests List - Using Controller!';
    }
}
```

::: info Shop Controller Explanation
**Key Components:**

- **Customer Focus**: Designed for customer-facing functionality
- **Limited Scope**: Typically fewer operations than admin controllers
- **Same Structure**: Follows the same dependency injection pattern as admin controller

**Future Enhancement**: Will be expanded with customer-specific functionality in later sections
:::

## Updating Routes to Use Controllers

Now that we have our controllers, let's update the route files we created earlier to use these controllers instead of callback functions.

### Update Admin Routes

Update `packages/Webkul/RMA/src/Routes/admin-routes.php`:

```php{17-18}
<?php

use Illuminate\Support\Facades\Route;
use Webkul\RMA\Http\Controllers\Admin\ReturnRequestController;

Route::group([
    'middleware' => ['web', 'admin'], 
    'prefix' => config('app.admin_url')
], function () {
    /**
     * Return request routes.
     */
    Route::prefix('rma/return-requests')->group(function () {
        /**
         * List return requests.
         */
        Route::get('', [ReturnRequestController::class, 'index'])
            ->name('admin.rma.return-requests.index');
    });
});
```

### Update Shop Routes

Update `packages/Webkul/RMA/src/Routes/shop-routes.php`:

```php{16-17}
<?php

use Illuminate\Support\Facades\Route;
use Webkul\RMA\Http\Controllers\Shop\ReturnRequestController;

Route::group([
    'middleware' => ['web', 'locale', 'theme', 'currency']
], function () {
    /**
     * Customer return request routes.
     */
    Route::prefix('rma/return-requests')->group(function () {
        /**
         * List customer return requests.
         */
        Route::get('', [ReturnRequestController::class, 'index'])
            ->name('shop.rma.return-requests.index');
    });
});
```

::: tip Route Update Benefits
**Before**: Routes used callback functions that returned simple strings

**After**: Routes now use proper controllers with dependency injection and repository access

This change enables us to add complex business logic, data retrieval, and view rendering as we continue developing the package.
:::

## Testing Your Controllers

Verify your controllers are working correctly:

```bash
# Test the routes in your browser
# Admin: http://your-app.com/admin/rma/return-requests
# Shop: http://your-app.com/rma/return-requests
```

You should now see:
- **Admin Route**: "Admin RMA Return Requests List - Using Controller!"
- **Shop Route**: "Shop RMA Return Requests List - Using Controller!"

::: info Testing Tips
**Verification Commands:**
- Check routes are updated: `php artisan route:list | grep rma`
- Test dependency injection: Controllers should load without errors
- Verify repository access: No "class not found" errors indicate successful injection
:::

## Your Next Step

With your controllers created and routes updated, you now have a working controller layer that integrates with your repository. The next logical step is to create views that will replace the simple string responses with proper HTML interfaces.

**Continue to:** **[Views](./views.md)** - Create admin panel interfaces for your RMA package
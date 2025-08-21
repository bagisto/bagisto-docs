# Views

Views in Laravel provide a clean separation between application logic and presentation layer, using the powerful Blade templating engine to create dynamic, maintainable interfaces. In Bagisto, views are organized to support both admin panel functionality and customer-facing storefront operations while maintaining consistency with Bagisto's design patterns.

For our RMA package, we'll create views that display return request listings and forms, integrating seamlessly with Bagisto's existing admin interface and storefront design.

::: info Learning Objective
This section demonstrates how to create organized, reusable Blade templates that integrate with Bagisto's admin interface and follow established patterns for data presentation, starting with listing pages and progressing to form creation.
:::

For detailed information on Laravel views and Blade templating, visit the [Laravel Documentation on Views](https://laravel.com/docs/11.x/views).

## Bagisto View Architecture

Bagisto follows a structured approach to view organization that separates administrative interfaces from customer-facing pages:

### Admin Views
- **Purpose**: Administrative interfaces for managing package features
- **Integration**: Extends Bagisto's admin layout and components
- **Features**: Data tables, forms, modals, CRUD operations
- **Styling**: Uses Bagisto's admin CSS framework and Vue components

### Shop Views  
- **Purpose**: Customer-facing interfaces for package functionality
- **Integration**: Uses storefront theme and layout components
- **Features**: Customer interactions, responsive design, theme compatibility
- **Styling**: Inherits from active storefront theme

## Creating View Structure

Let's create the view structure for our RMA package, starting with the essential directory organization and then building the listing functionality.

### Directory Structure

Create the following directory structure in your package:

```bash
mkdir -p packages/Webkul/RMA/src/Resources/views/admin/return-requests
mkdir -p packages/Webkul/RMA/src/Resources/views/shop/return-requests
```

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Resources
                └── views
                    ├── admin
                    │   └── return-requests
                    │       ├── index.blade.php
                    │       └── create.blade.php
                    └── shop
                        └── return-requests
                            ├── index.blade.php
                            └── create.blade.php
```

::: info View Organization Strategy
**Admin Views**: Organized under `admin/return-requests/` for clear feature separation

**Shop Views**: Located under `shop/return-requests/` for customer-facing functionality

**Naming Convention**: Uses descriptive folder names (`return-requests`) instead of generic terms for better organization

**Scalability**: Structure supports adding more views (edit, show, etc.) as the package grows
:::

## Registering Views with Service Provider

Before creating view templates, we need to register our views with the service provider so Laravel can find them.

Update your `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`:

```php{30-31}
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
        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
        
        $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');
        $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');
        
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'rma');
    }
}
```

::: tip View Namespace
The `loadViewsFrom()` method registers views with the `rma` namespace, allowing you to reference them as `rma::admin.return-requests.index` instead of using full file paths.
:::

## Creating Admin Listing View

Let's start with the most important view - the admin listing page that displays all return requests. This view will integrate with Bagisto's admin interface and display data from our repository.

### Admin Index View

Create `packages/Webkul/RMA/src/Resources/views/admin/return-requests/index.blade.php`:

```blade
<x-admin::layouts>
    <x-slot:title>
        RMA Listing Title
    </x-slot:title>

    RMA Listing Content
</x-admin::layouts>
```

::: info Admin View Explanation
**Key Components:**

- **Bagisto Layout**: Uses `<x-admin::layouts>` for consistent admin interface
- **Basic Structure**: Simple title and content placeholders to demonstrate layout integration
- **Component Integration**: Shows how to use Bagisto's slot-based layout system
- **Scalable Foundation**: Structure supports adding DataGrid, forms, and other components later

**Note on Localization**: You'll notice we haven't used any `@lang()` or `trans()` methods in these views. We're keeping the views simple at this stage and will cover comprehensive localization techniques in the **[Localization](./localization.md)** section.
:::

## Updating Controllers to Use Views

Now let's update our controllers to render these views instead of returning simple strings.

### Update Admin Controller

Update `packages/Webkul/RMA/src/Http/Controllers/Admin/ReturnRequestController.php`:

```php{22-24}
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
        // For now, we'll render the view without data
        // In a later section, we'll add DataGrid functionality for data loading
        return view('rma::admin.return-requests.index');
    }
}
```

::: tip Controller Update
We've updated the controller to render the Blade view instead of returning a string. This demonstrates the basic integration between routes, controllers, and views in the Bagisto architecture.
:::

## Creating Shop Views

For the shop section, you can create views following the same pattern as the admin views. Since we're focusing on understanding the admin panel architecture in this section, we'll concentrate on the admin implementation.

### Shop View Structure

The shop views would follow a similar structure:

```bash
# Shop view creation (for reference)
# packages/Webkul/RMA/src/Resources/views/shop/return-requests/index.blade.php
```

```blade
<x-shop::layouts>
    <x-slot:title>
        RMA Shop Listing Title
    </x-slot:title>

    RMA Shop Listing Content
</x-shop::layouts>
```

::: tip Shop Implementation
The shop views follow the same principles as admin views but use `<x-shop::layouts>` for storefront integration. For now, we're focusing on the admin panel to understand the core concepts before expanding to customer-facing functionality.
:::

## Testing Your Views

Test your views are working correctly:

```bash
# Clear cache to ensure views are loaded
php artisan optimize:clear

# Test the admin route in your browser
# Admin: http://your-app.com/admin/rma/return-requests
```

You should now see:
- **Admin Route**: Basic admin interface with Bagisto layout displaying "RMA Listing Title" and "RMA Listing Content"

::: info Testing Tips
- Check views load without errors
- Verify styling matches Bagisto's admin interface
- Test that layout components render correctly
- Ensure views display the basic title and content placeholders
:::

## Your Next Step

With your basic admin views complete, you now have a foundation presentation layer for your RMA package. These simple views demonstrate how to integrate with Bagisto's admin layout system.

The views currently show basic content placeholders, which is perfect for this stage of learning. In subsequent sections, you'll expand these views with more advanced features and multi-language support.

**Continue to:** **[Localization](./localization.md)** - Add multi-language support to your RMA package views and content

::: tip Learning Approach
Starting with basic admin layouts helps you understand Bagisto's component system before adding complexity. This foundation will make it easier to implement advanced features like localization, datagrids, and forms in later sections.
:::

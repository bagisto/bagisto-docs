---
title: Views
description: Create and load Blade views for a Bagisto RMA package, and render them from controllers.
outline: deep
---

# Views

Views in Laravel are responsible for separating the application's logic from the presentation layer. They provide a clean way to manage and organize the HTML content of your application. Views are typically stored in the `resources/views` directory and are rendered using the Blade templating engine, which offers a simple and powerful way to create dynamic content.

By using views, you can create reusable templates and components, making your code more maintainable and easier to understand. Blade templates allow you to use control structures like loops and conditionals, as well as to include other templates, which helps to keep your views organized and modular.

Learn more: [Laravel View](https://laravel.com/docs/11.x/views)

## Directory structure

We’ll organize views for the RMA package under `packages/Webkul/RMA/src/Resources/views`.

1) Create `Resources` inside `packages/Webkul/RMA/src`.
2) Inside it, create a `views` folder.
3) Inside `views`, create `admin` and `shop` folders. Optionally, group templates by feature (e.g., `returns`).

#### Create the `views` Folder
   - Inside the `Resources` folder, create another folder named `views`.

#### Create the `admin` and `shop` Folders
   - Inside the `views` folder, create two folders named `admin` and `shop`.

Directory structure:

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Resources
                └── views
                    ├── admin
                    │   └── returns
                    │       └── index.blade.php
                    └── shop
                        └── returns
                            ├── index.blade.php
                            ├── create.blade.php
                            └── edit.blade.php
```

### Create templates

Create simple Blade templates to start.

#### `admin/returns/index.blade.php`

```html
<!DOCTYPE html>
<html>
    <head>
    <title>Admin - Return Requests</title>
    </head>
    <body>
    <h1>Admin - Return Requests</h1>
    <p>Manage customer return requests.</p>
    </body>
</html>
```

#### `shop/returns/index.blade.php`

```html
<!DOCTYPE html>
<html>
    <head>
    <title>Shop - Return Requests</title>
    </head>
    <body>
    <h1>Shop - Return Requests</h1>
    <p>View your return requests.</p>
    </body>
</html>
```

## Load views from the package

Register views in your service provider’s `boot()` method.

### Update the service provider

In `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`:

  ```php
    <?php

    namespace Webkul\RMA\Providers;

    use Illuminate\Support\ServiceProvider;

    class RMAServiceProvider extends ServiceProvider
    {
        /**
         * Bootstrap services.
        *
        * @return void
        */
        public function boot()
        {
            $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'rma');
        }
    }
  ```

#### Explanation

- The `namespace` keyword defines the namespace for the `RMAServiceProvider` class: `Webkul\RMA\Providers`.
- The `RMAServiceProvider` class extends Laravel's base `ServiceProvider` class.
- The `boot` method is used to bootstrap any application services.
- Inside the `boot` method, we use the `$this->loadViewsFrom` method to register the views from the package.
- The `loadViewsFrom` method takes two arguments:
    - The path to the views directory within the package: `__DIR__ . '/../Resources/views'`.
    - A namespace for the views: `'rma'`.

## Render views

In Laravel applications, views are typically rendered from controller methods using the `view` helper function. This section describes how views are invoked and passed data from a controller.

```php
<?php

namespace Webkul\RMA\Http\Controllers\Shop;

use Webkul\RMA\Http\Controllers\Controller;
use Webkul\RMA\Repository\ReturnRequestRepository;

class ReturnRequestController extends Controller
{
    public function __construct(protected ReturnRequestRepository $returnRequestRepository) {}

    public function index()
    {
        $returns = $this->returnRequestRepository->with(['order'])->paginate(10);

        return view('rma::shop.returns.index', compact('returns'));
    }
}
```

#### Explanation

- The `view()` helper renders a package view using the namespace (`rma::shop.returns.index`).
- Pass data to the view as the second argument (e.g., `compact('returns')`).

## Blade file naming

Use Blade templates for `listing`, `creation`, and `updating` operations for resources like return requests.

### Listing (index.blade.php)

- Display a list of all records (return requests).
- The controller’s `index` method fetches data and passes it to the view.

### Creation (create.blade.php)

- Contains a form for creating new records.
- The controller’s `create` method renders this view.

### Updating (edit.blade.php)

- Contains a form for editing existing records.
- The controller’s `edit` method fetches the record and passes it to the view.

By following these steps, you can effectively use Blade templates in Bagisto for listing, creating, and updating resources, keeping CRUD views structured and maintainable.
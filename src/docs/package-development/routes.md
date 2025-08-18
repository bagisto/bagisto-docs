---
title: Routes
description: Define and load package routes for admin and shop in a Bagisto RMA package using Laravel routing.
outline: deep
---

# Routes

Routes map HTTP requests to controllers or closures. They define how users interact with your app and support all common methods (GET, POST, PUT, DELETE, PATCH), parameters, middleware, and RESTful patterns.

For detailed information on Laravel routes, including how to define routes, use route parameters, and apply middleware, refer to the [Laravel Documentation on Routing](https://laravel.com/docs/11.x/routing).

## Create routes

We'll set up admin and shop routes for the RMA package:

1) Create a `Routes` folder inside `packages/Webkul/RMA/src`.
2) Inside it, add `admin-routes.php` and `shop-routes.php`.

Directory structure:

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

### Admin routes
Add the following code to `admin-routes.php`:

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\RMA\Http\Controllers\Admin\ReturnRequestController;

Route::group(['middleware' => ['web', 'admin'], 'prefix' => config('app.admin_url')], function () {
  /**
   * RMA routes.
   */
  Route::controller(ReturnRequestController::class)->prefix('returns')->group(function () {
    Route::get('', 'index')->name('admin.returns.index');
    // Add your own admin routes related to RMA returns here
  });
});
```

#### Explanation
Routes inside `admin-routes.php` are prefixed with the admin URL (`config('app.admin_url')`) and apply the `web` and `admin` middleware groups. Adjust middleware and the URL prefix per your application's configuration.

### Shop routes

Define routes for the shop section in `shop-routes.php`.

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\RMA\Http\Controllers\Shop\ReturnRequestController;

Route::group(['middleware' => ['web', 'locale', 'theme', 'currency']], function () {
  /**
   * RMA routes.
   */
  Route::controller(ReturnRequestController::class)->prefix('returns')->group(function () {
    Route::get('', 'index')->name('shop.returns.index');
    // Add your own shop routes related to RMA returns here
  });
});
```

#### Explanation

Routes inside `shop-routes.php` apply middleware groups (`web`, `locale`, `theme`, `currency`) commonly used for shop-related routes. Adjust middleware as per your application's requirements.

## Load routes

### Register routes in ServiceProvider

In the `RMAServiceProvider.php` class, load the routes using the `loadRoutesFrom` method inside `boot()`.

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
    // ... other boot logic
    $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');
    $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');
  }
}
```

#### Explanation 

The `loadRoutesFrom` method registers routes defined in `admin-routes.php` and `shop-routes.php` with the Laravel application.

## HTTP methods

Basic routes are the most common type of routes in Laravel. They respond to HTTP requests like `GET`, `POST`, `PUT`, `DELETE`, etc., and map the URL to a specific controller method or closure function. For example:

### GET

The `GET` method is used to retrieve data from the server. It is typically used to display pages or retrieve information.

```php
// Define a route that responds to a GET request
Route::get('/returns', [ReturnRequestController::class, 'index']);
```
### POST

The `POST` method is used to submit data to the server. It is commonly used for form submissions.

```php
// Define a route that responds to a POST request
Route::post('/returns', [ReturnRequestController::class, 'store']);
```

### PUT

The `PUT` method is used to update existing data on the server. It is usually used for updating resources.

```php
// Define a route that responds to a PUT request
Route::put('/returns/{id}', [ReturnRequestController::class, 'update']);
```

### DELETE

The `DELETE` method is used to delete data from the server. It is used to remove resources.

```php
// Define a route that responds to a DELETE request
Route::delete('/returns/{id}', [ReturnRequestController::class, 'destroy']);
```

### PATCH

The `PATCH` method is similar to `PUT`, but it is used to make partial updates to data on the server.

```php
// Define a route that responds to a PATCH request
Route::patch('/returns/{id}', [ReturnRequestController::class, 'partialUpdate']);
```

::: tip Route names
Use named routes when generating URLs/redirects:
```php
route('admin.returns.index'); 
route('shop.returns.index');  
```
:::
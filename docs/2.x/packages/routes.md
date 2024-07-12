# Routes

[[TOC]]

## Introduction

Routes in Laravel define the entry points of your application, mapping HTTP requests to specific controllers or closures. They play a crucial role in defining how users interact with your web application's endpoints.

Routes can be defined to handle various HTTP methods (GET, POST, PUT, DELETE, etc.) and can include parameters and route parameters to capture dynamic values from the URL. Laravel's routing system is powerful and flexible, allowing for easy RESTful routing and middleware application to routes.

For detailed information on Laravel routes, including how to define routes, use route parameters, and apply middleware, refer to the [Laravel Documentation on Routing](https://laravel.com/docs/11.x/routing).

## Create a new Route

Let's start by creating a route to display the blogs. We will assume that the package name is "Blog". 

Start by creating a `Routes` folder inside `packages/Webkul/Blog/src`.

Inside the `Routes` folder, create two files named `admin-routes.php` and `shop-routes.php`. 

The updated directory structure will look like this:

```
└── packages
    └── Webkul
        └── Blog
            └── src
                ├── ...
                └── Routes
                    ├── admin-routes.php
                    └── shop-routes.php
```

### Admin Routes

`admin-routes.php` This file is for admin routes. Add the following code to this file:

  ```php
  <?php

  use Illuminate\Support\Facades\Route;
  use Webkul\Blog\Http\Controllers\Admin\PostController;

    Route::group(['middleware' => ['web', 'admin'], 'prefix' => config('app.admin_url')], function () {
        /**
         * Blog routes.
         */
        Route::controller(PostController::class)->prefix('blogs')->group(function () {
            Route::get('', 'index')->name('admin.blogs.index');

            // Here you can add your own routes related to the blog 
        });
    });
  ```

#### Explanation
Routes inside `admin-routes.php` are prefixed with the admin URL (`config('app.admin_url')`) and apply the `web` and `admin` middleware groups. Adjust the middleware and URL prefix according to your application's configuration.

### Shop Routes 

`shop-routes.php` Define routes for the shop section in this file.

  ```php
  <?php

  use Illuminate\Support\Facades\Route;
  use Webkul\Blog\Http\Controllers\Shop\PostController;

  Route::group(['middleware' => ['web', 'locale', 'theme', 'currency']], function () {
         /**
         * Blog routes.
         */
        Route::controller(PostController::class)->prefix('blogs')->group(function () {
            Route::get('', 'index')->name('shop.blogs.index');

            // Here you can add your own routes related to the blog 
    });
  });
  ```

#### Explanation

Routes inside `shop-routes.php` apply middleware groups (`web`, `theme`, `locale`, `currency`) commonly used for shop-related routes. Adjust middleware as per your application's requirements.

## Loading Routes

### Register Routes in ServiceProvider

In the `BlogServiceProvider.php` class, load the routes using the loadRoutesFrom method inside the boot method.

```php
<?php

namespace Webkul\Blog\Providers;

use Illuminate\Support\ServiceProvider;

class BlogServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //... 
        
        $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');

        $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');
    }
}
```

#### Explanation 

The `loadRoutesFrom` method registers routes defined in `admin-routes.php` and `shop-routes.php` within the Laravel application, integrating them into the routing system.

## Available HTTP methods 

Basic routes are the most common type of routes in Laravel. They respond to HTTP requests like `GET`, `POST`, `PUT`, `DELETE`, etc., and map the URL to a specific controller method or closure function. For example:

### GET

The `GET` method is used to retrieve data from the server. It is typically used to display pages or retrieve information.

```php
// Define a route that responds to a GET request
Route::get('/posts', [PostController::class, 'index']);
```

### POST

The `POST` method is used to submit data to the server. It is commonly used for form submissions.

```php
// Define a route that responds to a POST request
Route::post('/posts', [PostController::class, 'store']);
```

### PUT

The `PUT` method is used to update existing data on the server. It is usually used for updating resources.

```php
// Define a route that responds to a PUT request
Route::put('/posts/{id}', [PostController::class, 'update']);
```

### DELETE

The `DELETE` method is used to delete data from the server. It is used to remove resources.

```php
// Define a route that responds to a DELETE request
Route::delete('/posts/{id}', [PostController::class, 'destroy']);
```

### PATCH

The `PATCH` method is similar to `PUT`, but it is used to make partial updates to data on the server.

```php
// Define a route that responds to a PATCH request
Route::patch('/posts/{id}', [PostController::class, 'partialUpdate']);
```
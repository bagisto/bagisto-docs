# Routes

[[TOC]]

To learn in detail about Routes you can visit Laravel doc from [here](https://laravel.com/docs/10.x/routing)

## Directory Structure

- Create a **`Routes`** folder in **`packages/Webkul/Blog/src`** and create two files named as **`admin-routes.php`** and **`shop-routes.php`**. So the updated structure will look like below.

    ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Routes/
            - admin-routes.php
            - shop-routes.php
    ```

- `admin-routes.php`: This file is for the admin routes. Add below codes to this file,

  ```php
  <?php

  use Illuminate\Support\Facades\Route;
  use Webkul\Blog\Http\Controllers\Admin\PostController;

  Route::group(['middleware' => ['web', 'admin'], 'prefix' => config('app.admin_url')], function () {

      Route::get('/blog', [PostController::class, 'index']);
  });
  ```

- `shop-routes.php`: This file is for the shop routes. Add below codes to this file,

  ```php
  <?php

  use Illuminate\Support\Facades\Route;
  use Webkul\Blog\Http\Controllers\Shop\PostController;

  Route::group(['middleware' => ['web', 'theme', 'locale', 'currency']], function () {

      Route::get('/blogs', [PostController::class, 'index']);
  });
  ```
## Loading Routes

- Now, we need to register our routes to service provider’s boot method i.e. **`BlogServiceProvider.php`**

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * BlogServiceProvider
  *
  * @copyright 2023 Webkul Software Pvt. Ltd. (http://www.webkul.com)
  */
  class BlogServiceProvider extends ServiceProvider
  {
      /**
      * Bootstrap services.
      *
      * @return void
      */
      public function boot()
      {
          $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
          
          $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');
      }

      /**
      * Register services.
      *
      * @return void
      */
      public function register()
      {

      }
  }
  ```
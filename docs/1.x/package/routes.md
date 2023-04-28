# Creating Routes

### Step-1

- **For routes**: Create a `Routes` folder in `packages/Webkul/Blog/src` and create two files named as `admin-routes.php` and `shop-routes.php`. So the updated structure will look like below.

    ::: details Updated directory structure

    ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Routes/
            - admin-routes.php
            - shop-routes.php
    ```

    :::

    - `admin-routes.php`: This file is for the admin routes. Add below codes to this file,

      ```php
      <?php

      use Illuminate\Support\Facades\Route;

      Route::group(['middleware' => ['web', 'admin'], 'prefix' => config('app.admin_url')], function () {

          // all admin routes will place here
      });
      ```

    - `shop-routes.php`: This file is for the shop routes. Add below codes to this file,

      ```php
      <?php

      use Illuminate\Support\Facades\Route;

      Route::group(['middleware' => ['web', 'theme', 'locale', 'currency']], function () {

          // all shop routes will be place here
      });
      ```

### Step-2

- Now, we need to register our routes to service provider’s boot method i.e. `BlogServiceProvider.php`

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
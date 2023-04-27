# Creating Views

### Step-1

  - **For views**: Create `Resources` folder in `packages/Webkul/Blog/src` path. In `Resources` folder, create another folder named as `views`. Now, in the `views` folder, we need to create a two more folder i.e. `admin` and `shop`. And finally, we need to create two more folder i.e. `default` and `velocity` under the shop folder. So updated structure will look like this.

    ::: details Updated directory structure

    ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Resources/
            ...
            - views/
              - admin/
              - shop/
                - default/
                - velocity/
    ```
    :::

    ::: tip Default and Velocity folders
    **Note:-** Whenever you are creating a blade file for the shop front then you have to keep the same file in the both folder i.e. `default` and `velocity`.
    
    **Reason:-** We are using `theme` middleware, So whenever we used the `default` theme `view` will be called from the `default` folder, and whenever we used the `velocity` theme `view` will be called from the `velocity` folder. 
    
    **If you don't want to do this stuff then simply remove the `theme` middleware from `shop-routes.php` and then your blade file will be called from the `shop` folder directly.**

    In this tutorial, We are using the `theme` middleware and `velocity` theme so we have to use `velocity` folder. But, we are not going to create the same files for the default theme.
    :::

    ::: tip Theme Change
    Simply visit admin>settings>channels in Bagisto admin panel.
    :::
    
    - Inside each folder i.e. `admin` and `velocity` create a file named as `index.blade.php`. And add some html to it.

      - `admin/index.blade.php`

        ```html
        <h2>Blog Admin Page</h2>
        ```

      - `shop/velocity/index.blade.php`

        ```html
        <h2>Blog Shop Page</h2>
        ```

### Step-2

- Now, we need to register our routes and views to service provider’s boot method i.e. `packages/Webkul/Blog/src/Providers/BlogServiceProvider.php`

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

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'blog');
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

### Step-3

- Now, we need to add a route for the view.

- Go to `packages/Webkul/Blog/src/Routes/shop-routes.php` file and create a route to render view.

  ```php
  <?php

  use Illuminate\Support\Facades\Route;
  use Webkul\Blog\Http\Controllers\Shop\ShopController;

  Route::group(['middleware' => ['web', 'theme', 'locale', 'currency']], function () {

      Route::get('/blogs', [ShopController::class, 'index'])->defaults('_config', [
          'view' => 'blog::shop.index',
      ]);
  });
  ```

- Same for admin routes in file `packages/Webkul/Blog/src/Routes/admin-routes.php`.

  ```php
  <?php

  use Illuminate\Support\Facades\Route;
  use Webkul\Blog\Http\Controllers\Admin\AdminController;

  Route::group(['middleware' => ['web', 'admin'], 'prefix' => config('app.admin_url')], function () {

      Route::group(['prefix' => 'blogs'], function () {

          Route::controller(AdminController::class)->group(function () {

              Route::get('/', 'index')->defaults('_config', [
                  'view' => 'blog::admin.index',
              ]);
          });
      });
  });
  ```

### Step-4

- Go to `packages/Webkul/Blog/src/Http/Controllers/Shop/ShopController.php` file and update the file.

  ```php
  <?php

  namespace Webkul\Blog\Http\Controllers\Shop;

  use Webkul\Blog\Http\Controllers\Controller;

  class ShopController extends Controller
  {
    /**
     * Display a listing of the resource.
     *
     * @var array
     */
    protected $_config;

    public function __construct()
    {
        $this->_config = request('_config');
    }

    public function index() {

        return view($this->_config['view']);
    }
  }
  ```

- Same for AdminController in file `packages/Webkul/Blog/src/Http/Controllers/Admin/AdminController.php`.

  ```php
  <?php

  namespace Webkul\Blog\Http\Controllers\Admin;

  use Webkul\Blog\Http\Controllers\Controller;

  class AdminController extends Controller
  {
    /**
     * Display a listing of the resource.
     *
     * @var array
     */
    protected $_config;

    public function __construct()
    {
        $this->_config = request('_config');
    }

    public function index() {

        return view($this->_config['view']);
    }
  }
  ```  

- Now, check your route in your browser,

  ::: details Admin Output

  ![Admin Browser Output](../../assets/images/package-development/blog-admin-output.png)

  :::

  ::: details Shop Output

  ![Shop Browser Output](../../assets/images/package-development/blog-shop-output.png)

  :::
# Controller

[[TOC]]

To learn in detail about Controllers, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/controllers).

## Directory Structure

- Create an **`Http`** folder in the **`packages/Webkul/Blog/src`** path. Inside the **`Http`** folder, create another folder named **`Controllers`**. Inside the **`Controllers`** folder, we need to create one file named **`Controller.php`** and two folders, namely **`Admin`** and **`Shop`**.

- Inside both the **`Admin`** and **`Shop`** folders, create a **`PostController.php`** file. The updated directory structure will look like this:

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  └── Http
                      └── Controllers
                          ├── Controller.php
                          ├── Admin
                          │   └── PostController.php
                          └── Shop
                              └── PostController.php
  ```

## Base Controller

- **`Controller.php`**: This is the base controller. Add the following code to this file:

  ```php
  <?php

  namespace Webkul\Blog\Http\Controllers;

  use Illuminate\Foundation\Bus\DispatchesJobs;
  use Illuminate\Routing\Controller as BaseController;
  use Illuminate\Foundation\Validation\ValidatesRequests;
  use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

  class Controller extends BaseController
  {
      use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
  }
  ```

## Controllers

- **`Admin/PostController.php`**: This file is for admin usage. Add the following code to this file:

  ```php
  <?php

  namespace Webkul\Blog\Http\Controllers\Admin;

  use Illuminate\Http\Request;
  use Webkul\Blog\Http\Controllers\Controller;
  use Webkul\Blog\Repository\PostRepository;

  class PostController extends Controller
  {
      /**
       * Create a controller instance.
       * 
       * @param  \Webkul\Blog\Repository\PostRepository  $postRepository
       * @return void
       */
      public function __construct(protected PostRepository $postRepository)
      {
      }

      /**
       * Index.
       * 
       * @return \Illuminate\View\View
       */
      public function index() {
          $blogs = $this->postRepository->all();

          return view('blog::admin.index', ['blogs' => $blogs]);
      }

      /**
       * Create.
       * 
       * @return \Illuminate\View\View
       */
      public function create() {
          //
      }

      /**
       * Store.
       * 
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\View\View
       */
      public function store(Request $request) {
          //
      }
  }
  ```

- **`Shop/PostController.php`**: This file is for shop usage. Add the following code to this file:

  ```php
  <?php

  namespace Webkul\Blog\Http\Controllers\Shop;

  use Webkul\Blog\Http\Controllers\Controller;
  use Webkul\Blog\Repository\PostRepository;

  class PostController extends Controller
  {
      /**
       * Create a controller instance.
       * 
       * @param  \Webkul\Blog\Repository\PostRepository  $postRepository
       * @return void
       */
      public function __construct(protected PostRepository $postRepository)
      {
      }

      /**
       * Index.
       * 
       * @return \Illuminate\View\View
       */
      public function index()
      {
          $blogs = $this->postRepository->with(['author'])->all();

          return view('blog::shop.index', ['blogs' => $blogs]);
      }

      /**
       * Blog details.
       * 
       * @return \Illuminate\View\View
       */
      public function blogDetails($id) 
      {
          //
      }
  }
  ```
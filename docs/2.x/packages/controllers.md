# Controller

[[TOC]]

## Introduction

In Laravel, controllers are responsible for handling the request logic of an application. They act as intermediaries between the models and views, processing user input, interacting with the data layer, and returning the appropriate responses. By organizing related request handling logic into separate classes, controllers make it easier to manage and maintain the application's codebase.

To learn in detail about Controllers, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/controllers).

## How to create Controllers

To start building a controller for our blog posts within the Laravel package named "Blog", follow the steps below:

### Directory Structure

Create the necessary directory structure within the `packages/Webkul/Blog/src` path. To create the directory structure follow the following steps:

1. Navigate to the `packages/Webkul/Blog/src` directory.
2. Create an `Http` folder inside `src`.
3. Inside the `Http` folder, create another folder named `Controllers`.
4. Inside the `Controllers` folder, create one file named `Controller.php` and two folders, namely `Admin` and `Shop`.
5. Inside both the `Admin` and `Shop` folders, create a `PostController.php` file. The updated directory structure will look like this:

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

### Creating Controller Files

Now, create the necessary controller files.

#### Base Controller (Controller.php)

In `packages/Webkul/Blog/src/Http/Controllers/Controller.php`, you can define the base controller for your package:

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

### PostController.php for Admin

In `packages/Webkul/Blog/src/Http/Controllers/Admin/PostController.php`, define the Admin post controller:

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
      public function index() 
      {
          $blogs = $this->postRepository->all();

          return view('blog::admin.index', ['blogs' => $blogs]);
      }

      /**
       * Create.
       * 
       * @return \Illuminate\View\View
       */
      public function create() 
      {
          //
      }

      /**
       * Store.
       * 
       * @return \Illuminate\View\View
       */
      public function store(Request $request)
      {
          //
      }

      /**
       * Function to update items.
       */
       public function update(int $id)
       {
         //
       }

      /**
       * Function to remove items.
       */
       public function destroy(int $id)
       {
         //
       }
  }
  ```

### PostController.php for Shop

In `packages/Webkul/Blog/src/Http/Controllers/Shop/PostController.php`, define the Shop post controller:

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
      public function blogDetails(int $id) 
      {
          //
      }
  }
  ```

By following these steps, you will have created the necessary structure and files for handling blog posts within your "Blog" package. You can now add the specific logic for each method to handle the functionality required for your blog posts in both the admin and shop areas.
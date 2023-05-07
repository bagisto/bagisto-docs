# Controller

[[TOC]]

To learn in detail about Controllers you can visit Laravel doc from [here](https://laravel.com/docs/10.x/controllers)

## Directory Structure

- Create **`Http`** folder in **`packages/Webkul/Blog/src`** path. In **`Http`** folder, create another folder name as **`Controllers`**. Now, in the **`Controllers`** folder, we need to create one file **`Controller.php`** and two folders i.e. **`Admin`** and **`Shop`**.

- Inside both **`Admin`** and **`Shop`** folder create **`PostController.php`**. So updated structure will look like this.

  ```
  - packages/
    - Webkul/Blog/
      - src/
        ...
        - Http/
          ...
          - Controllers/
            - Controller.php
            - Admin/
              - PostController.php
            - Shop
              - PostController.php
  ```

## Base Controller

- **`Controller.php`**: This is base controller, Add below codes to this file.

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

- **`Admin/PostController.php`**: This file is for the admin usage. Add below codes to this file.

  ```php
  <?php

  namespace Webkul\Blog\Http\Controllers\Admin;

  use Illuminate\Http\Request;
  use Webkul\Blog\Http\Controllers\Controller;
  use Webkul\Blog\Repository\PostRepository;

  class PostController extends Controller
  {
      /**
       * @param  \Webkul\Blog\Repository\PostRepository $postRepository
       *
       * @var array
       */
      public function __construct(protected PostRepository $postRepository) {

      }

      public function index() {
          $blogs = $this->postRepository->all();

          return view('blog::admin.index', ['blogs' => $blogs]);
      }

      public function create() {
          //
      }

      public function store(Request $request) {
          //
      }
  }
  ```

- **`Shop/PostController`**: This file is for the shop usage. Add below codes to this file.

  ```php
  <?php

  namespace Webkul\Blog\Http\Controllers\Shop;

  use Webkul\Blog\Http\Controllers\Controller;
  use Webkul\Blog\Repository\PostRepository;

  class PostController extends Controller
  {
      /**
       * @param  \Webkul\Blog\Repository\PostRepository $postRepository
       *
       * @var array
       */
      public function __construct(protected PostRepository $postRepository) {

      }

      public function index() {
          $blogs = $this->postRepository->with(['author'])->all();

          return view('blog::shop.index', ['blogs' => $blogs]);
      }

      public function blogDetails($id) {
          //
      }
  }
  ```
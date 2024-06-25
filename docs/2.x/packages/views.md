# Views

[[TOC]]

## Introduction

Views in Laravel are responsible for separating the application's logic from the presentation layer. They provide a clean way to manage and organize the HTML content of your application. Views are typically stored in the `resources/views` directory and are rendered using the Blade templating engine, which offers a simple and powerful way to create dynamic content.

By using views, you can create reusable templates and components, making your code more maintainable and easier to understand. Blade templates allow you to use control structures like loops and conditionals, as well as to include other templates, which helps to keep your views organized and modular.

To learn in detail about Views, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/views).

Here's a basic example of a Blade template:

## Directory Structure

To organize the views for our blog package, we need to set up a specific directory structure. Follow the steps below to create the necessary folders.

#### Create the `Resources` Folder
   - Navigate to the `packages/Webkul/Blog/src` directory.
   - Create a folder named `Resources`.

#### Create the `views` Folder
   - Inside the `Resources` folder, create another folder named `views`.

#### Create the `admin` and `shop` Folders
   - Inside the `views` folder, create two folders named `admin` and `shop`.

The updated directory structure will look like this:

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  └── Resources
                      └── views
                          ├── admin
                          └── shop
  ```

#### Create the `index.blade.php` File in the `shop` Folder
- Inside the `shop/default` folder, create a file named `index.blade.php`, `create.blade.php`, `edit.blade.php` .

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  └── Resources
                      └── views
                          ├── admin
                          │   └── index.blade.php
                          └── shop
                              └── index.blade.php
                              └── create.blade.php
                              └── edit.blade.php
  ```

### Adding HTML Content

Below is an example of basic HTML content that you can add to each `index.blade.php` file.

#### `index.blade.php` in the `admin` Folder

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Admin - Blog Posts</title>
    </head>
    <body>
        <h1>Admin - Blog Posts</h1>
        <p>Welcome to the admin section for managing blog posts.</p>
    </body>
</html>
```

#### `index.blade.php` in the `default` Folder

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Shop - Blog Posts</title>
    </head>
    <body>
        <h1>Shop - Blog Posts</h1>
        <p>Welcome to the shop section for viewing blog posts.</p>
    </body>
</html>
```

## Load Views from Package

To make the views in our package accessible, we need to register them in the service provider's `boot` method. This involves updating the `BlogServiceProvider.php` file to include the view loading logic. Follow the steps below:

#### Open the Service Provider File
   - Navigate to the `packages/Webkul/Blog/src/Providers` directory.
   - Open the `BlogServiceProvider.php` file.

#### Update the `boot` Method
   - Inside the `boot` method of the `BlogServiceProvider` class, add the logic to load views from the package.

#### Updated `BlogServiceProvider.php`

Here is the updated code for `BlogServiceProvider.php`:

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

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'blog');
      }
  }
  ```

#### Explanation

- The `namespace` keyword defines the namespace for the `BlogServiceProvider` class, which is `Webkul\Blog\Providers`.
- The `BlogServiceProvider` class extends Laravel's base `ServiceProvider` class.
- The `boot` method is used to bootstrap any application services.
- Inside the `boot` method, we use the `$this->loadViewsFrom` method to register the views from the package.
- The `loadViewsFrom` method takes two arguments:
    - The path to the views directory within the package: `__DIR__ . '/../Resources/views'`.
    - A namespace for the views: `'blog'`.

## Rendering Views

In Laravel applications, views are typically rendered from controller methods using the `view` helper function. This section describes how views are invoked and passed data from a controller.

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

          return view('blog::shop.index', compact('blogs'));
      }
  }
  ```

#### Explanation

- The `view` helper function in Laravel is used within the `index` method of the `PostController` to render the `shop.index` view.

- It accepts two parameters the name of the view (`blog::shop.index`) and an array of data (`compact('blogs')`) to pass to the `view`.

## Blade File Naming Convention

Bagisto utilizes Blade templates to handle `listing`, `creation`, and `updating` operations for resources like products, posts, and categories. This section provides a detailed guide on how to implement these operations using Blade templates within your Bagisto package.

### Listing (Index Blade):

- The `index.blade.php` template is used to display a list of all records (posts).

- The controller's `index` method fetches all posts and passes them to the view.

### Creation (Create Blade):

- The `create.blade.php` template contains a form for creating new records.

- The controller's `create` method renders this view.

### Updating (Edit Blade):

- The `edit.blade.php` template contains a form for editing existing records.

- The controller's `edit` method fetches the specific post and passes it to the view.

By following these steps, you can effectively utilize Blade templates in Bagisto for listing, creating, and updating resources, ensuring a structured and maintainable approach to managing CRUD operations within your application.
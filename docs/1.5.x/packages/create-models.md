# Models

[[TOC]]

To understand Models in detail, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/eloquent).

We are using the [konekt/concord](https://packagist.org/packages/konekt/concord) package, which is an extension of Laravel. It helps in building modular Laravel applications.

## Using Bagisto Package Generator

- This command creates a new **`Post`** Model inside your package.

  ```sh
  php artisan package:make-model Post Webkul/Blog
  ```

- This command creates the following files:
  - New model **`Post.php`** in the **`packages/Webkul/Blog/src/Models`** directory.
  - New model proxy **`PostProxy.php`** in the **`packages/Webkul/Blog/src/Models`** directory.
  - New model contract **`Post.php*`** in the **`packages/Webkul/Blog/src/Contracts`** directory.

## Using Laravel Artisan Command

Before creating the model class, we need to create two things: the **`Contract`** and the **`Proxy`**.

### Contract

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, the **`Illuminate\Contracts\Queue\Queue`** contract defines the methods needed for queueing jobs, while the **`Illuminate\Contracts\Mail\Mailer`** contract defines the methods needed for sending an email.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with various drivers and a mailer implementation powered by SwiftMailer.

All Laravel contracts are stored in their own GitHub repository. This provides a quick reference for all available contracts and a single, decoupled package that can be used by package developers.

- Now, create a folder named **`Contracts`** inside **`Webkul/Blog/src/`** and create an interface file named **`Post.php`**.

  ```
  packages
  └── Webkul
      └── Blog
          └── src
              ├── ...
              └── Contracts
                  └── Post.php
  ```

- Copy the following code into the **`Post.php`** file.

  ```php
  <?php

  namespace Webkul\Blog\Contracts;

  interface Post
  {
  }
  ```

### Proxy

Proxies, as their name suggests, lead you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.

- Now, create a **`Models`** folder inside **`packages/Webkul/Blog/src/`**. Inside the **`Models`** folder, create a model proxy file named **`PostProxy.php`**. This Proxy class will extend **`Konekt\Concord\Proxies\ModelProxy`**.

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  ├── Contracts
                  │   └── Post.php
                  └── Models
                      └── PostProxy.php
  ```

- Copy the following code into the **`PostProxy.php`** file.

  ```php
  <?php

  namespace Webkul\Blog\Models;

  use Konekt\Concord\Proxies\ModelProxy;

  class PostProxy extends ModelProxy
  {
  }
  ```

### Model

- The simple way to create a model is to execute the `make:model` artisan command:

  ```sh
  php artisan make:model Post
  ```

- Now, move your **`Post`** model from the project root directory (i.e., **`App/Models`**) to the **`packages/Webkul/Blog/src/Models`** folder.

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  ├── Contracts
                  │   └── Post.php
                  └── Models
                      ├── Post.php
                      └── PostProxy.php
  ```

- Copy the following code into the **`Post.php`** file.

  ```php
  <?php

  namespace Webkul\Blog\Models;

  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Relations\BelongsTo;
  use Webkul\User\Models\Admin;
  use Webkul\Blog\Contracts\Post as PostContract;

  class Post extends Model implements PostContract
  {
      /**
      * The attributes that are mass assignable.
      *
      * @var $fillable
      */
      protected $fillable = [
          'title',
          'description',
          'user_id',
          'status'
      ];

      /**
      * Get the user that owns the post.
      */
      public function author(): BelongsTo
      {
          return $this->belongsTo(Admin::class, 'user_id');
      }
  }
  ```

### Module Service Provider

- Now, we need to create a provider named **`ModuleServiceProvider.php`** inside **`Webkul/Blog/src/Providers`**.

  ```
  └── packages
    └── Webkul
        └── Blog
            └── src
                ├── ...
                └── Providers
                    ├── BlogServiceProvider.php
                    └── ModuleServiceProvider.php
  ```

- In this file, we register the models used in this package. You can see the code below.

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Konekt\Concord\BaseModuleServiceProvider;

  class ModuleServiceProvider extends BaseModuleServiceProvider
  {
      protected $models = [
          \Webkul\Blog\Models\Post::class,
      ];
  }
  ```

- Finally, register your **`ModuleServiceProvider.php`** in the **`config/concord.php`** file.

  ```php
  <?php

  return [
      'modules' => [
          // Other service providers
          \Webkul\Blog\Providers\ModuleServiceProvider::class,
      ]
  ];
  ```
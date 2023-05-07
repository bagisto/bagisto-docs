# Models

[[TOC]]

To learn in detail about Models you can visit Laravel doc from [here](https://laravel.com/docs/10.x/eloquent)

We are using [konekt/concord](https://packagist.org/packages/konekt/concord) package here. That is an extension of Laravel. This helps in building modular Laravel application.

## Using Bagisto Package Generator

- This command will create a new **`Post`** Model inside your package.

  ```sh
  php artisan package:make-model Post Webkul/Blog
  ```
- This command will create a following files.

  - New model **`Post.php`** in **`packages/Webkul/Blog/src/Models`** directory.
  - New model proxy **`PostProxy.php`** in **`packages/Webkul/Blog/src/Models`** directory.
  - New model contract **`Post.php*`** in **`packages/Webkul/Blog/src/Contracts`** directory.

## By Laravel artisan Command

- Before ctreating model class we have to create two things i.e. **`Contract`** and **`Proxy`**.

### Contract

Laravel's Contract are a set of interfaces that define the core services provided by the framework. For example, an **`Illuminate\Contracts\Queue\Queue`** contract defines the methods needed for queueing jobs, while the **`Illuminate\Contracts\Mail\Mailer`** contract defines the methods needed for sending an e-mail.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with a variety of drivers, and a mailer implementation that is powered by SwiftMailer.

All of the Laravel contracts live in their own GitHub repository. This provides a quick reference point for all available contracts, as well as a single, decoupled package that may be utilized by package developers.

- Now, create a folder named as **`Contracts`** inside **`Webkul/Blog/src/`** and create an interface file named as **`Post.php`**

  ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Contracts/
            - Post.php
    ```
- Copy the below code in file **`Post.php`**.

  ~~~php
  <?php

  namespace Webkul\Blog\Contracts;

  interface Post
  {
  }
  ~~~

### Proxy

Proxies as their name state will drive you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.

- Now, Create a **`Models`** folder inside **`packages/Webkul/Blog/src/`**. After that create a model proxy file as **`PostProxy.php`**. This Proxy class will extends **`Konekt\Concord\Proxies\ModelProxy`**.

  ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Contracts/
            - Post.php
          - Models
            - PostProxy.php
    ```
- Copy the below code in file **`PostProxy.php`**.

  ~~~php
  <?php

  namespace Webkul\Blog\Models;

  use Konekt\Concord\Proxies\ModelProxy;

  class PostProxy extends ModelProxy
  {
  }
  ~~~

### Model

- The simple way to create a model is executing the command **`make:model`** artisan command,

  ```php 
  php artisan make:model Post
  ```

- Now, move your **`Post`** model from project root directory i.e. **`App/Models`** to **`packages/Webkul/Blog/src/Models`** folder.

  ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Contracts/
            - Post.php
          - Models
            - Post.php
            - PostProxy.php
    ```
- Copy the below code in file **`Post.php`**.

  ~~~php
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
  ~~~


### Module Service Provider

- Now, We have to create a provider as **`ModuleServiceProvider.php`** inside **`Webkul/Blog/src/Providers`**.

  ```
  - packages/
    - Webkul/Blog/
      - src/
        - Providers
          - BlogServiceProvider.php
          - ModuleServiceProvider.php
  ```

- In this file, models which are used in this package are registered. You may check below code.

  ~~~php
  <?php

  namespace Webkul\Blog\Providers;

  use Konekt\Concord\BaseModuleServiceProvider;

  class ModuleServiceProvider extends BaseModuleServiceProvider
  {
      protected $models = [
          \Webkul\Blog\Models\Post::class,
      ];
  }
  ~~~

- Now, Register your **`ModuleServiceProvider.php`** in **`config/concord.php`** file,

    ~~~php
    <?php

    return [
        'modules' => [
            ...
            \Webkul\Blog\Providers\ModuleServiceProvider::class,
            ...
        ]
    ];
    ~~~
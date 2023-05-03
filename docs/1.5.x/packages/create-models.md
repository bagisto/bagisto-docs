# Models

There are two ways to create a model in **Bagisto**.

1. Using Bagisto Package Generator (**Recommended**)
2. By normal laravel command. (**Expert Level**)

## 1. Using Bagisto Package Generator

- This command will create a following files,
  - New model class in `packages/Webkul/Blog/src/Models` directory.
  - New model proxy class in `packages/Webkul/Blog/src/Models` directory.
  - New model contract in `packages/Webkul/Blog/src/Contracts` directory.

  `php artisan package:make-model Post Webkul/Blog`

## 2. By normal laravel commands

### Models

The simple way to create a model is executing the command `make:model` artisan command,

```php 
php artisan make:model Post
```

- Now, Create a `Models` folder inside `packages/Webkul/Blog/src/`. After that move your `Post` model from `App/Model` to `packages/Webkul/Blog/src/Models` folder.

  ~~~php
  <?php

  namespace Webkul\Blog\Models;

  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Webkul\Blog\Contracts\Post as PostContract;

  class Post extends Model implements PostContract
  {
      use HasFactory;
      
      protected $fillable = [];
  }
  ~~~

### Proxies

Proxies as their name state will drive you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.

- Now, at the same location create a model proxy file as `PostProxy.php`. This Proxy class will extends `Konekt\Concord\Proxies\ModelProxy`. Copy the below code in file,

  ~~~php
  <?php

  namespace Webkul\Blog\Models;

  use Konekt\Concord\Proxies\ModelProxy;

  class PostProxy extends ModelProxy
  {
  }
  ~~~

### Contracts

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, an `Illuminate\Contracts\Queue\Queue` contract defines the methods needed for queueing jobs, while the `Illuminate\Contracts\Mail\Mailer` contract defines the methods needed for sending an e-mail.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with a variety of drivers, and a mailer implementation that is powered by SwiftMailer.

All of the Laravel contracts live in their own GitHub repository. This provides a quick reference point for all available contracts, as well as a single, decoupled package that may be utilized by package developers.

- Now, create a folder named as `Contracts` inside `Webkul/Blog/src/` and create an interface file named as `Post.php`,

  ~~~php
  <?php

  namespace Webkul\Blog\Contracts;

  interface Post
  {
  }
  ~~~




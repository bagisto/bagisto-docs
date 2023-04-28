# Store data through Repository

## Contracts, Repositories and Proxies

### Contracts

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, an `Illuminate\Contracts\Queue\Queue` contract defines the methods needed for queueing jobs, while the `Illuminate\Contracts\Mail\Mailer` contract defines the methods needed for sending an e-mail.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with a variety of drivers, and a mailer implementation that is powered by SwiftMailer.

All of the Laravel contracts live in their own GitHub repository. This provides a quick reference point for all available contracts, as well as a single, decoupled package that may be utilized by package developers.

### Repositories

Generally, we wrote all of our application logic in the controller. There’s an alternative approach of development that abstracts some calls into PHP classes called Repositories. The idea is that we can decouple models from controllers and assign a readable name's to complicated queries.

This file defines our Repository class. Instances of this class have a model property that we tie to an Eloquent model. Once this is bound in the constructor we can call Eloquent methods like findOrFail, update or all from the class methods.

### Proxies

Proxies as their name state will drive you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.

### Step-1

- Create a `Models` folder inside `packages/Webkul/Blog/src/`. After that create a file named as `Post.php` in this folder, and copy the below code to the `Post.php` file,

  ~~~php
  <?php

  namespace Webkul\Blog\Models;

  use Illuminate\Database\Eloquent\Model;
  use Illuminate\Database\Eloquent\Factories\HasFactory;
  use Illuminate\Database\Eloquent\Relations\BelongsTo;
  use Webkul\User\Models\Admin;
  use Webkul\Blog\Contracts\Post as PostContract;

  class Post extends Model implements PostContract
  {
      use HasFactory;

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

### Step-2

- Now, at the same location create a model proxy file as `PostProxy.php`. This Proxy class will extends `Konekt\Concord\Proxies\ModelProxy`. Copy the below code in file,

  ~~~php
  <?php

  namespace Webkul\Blog\Models;

  use Konekt\Concord\Proxies\ModelProxy;

  class PostProxy extends ModelProxy
  {
  }
  ~~~

### Ste-3

- Now, create a folder named as `Contracts` inside `Webkul/Blog/src/` and create an interface file named as `Post.php`,

  ~~~php
  <?php

  namespace Webkul\Blog\Contracts;

  interface Post
  {
  }
  ~~~

### Step-4 

- Create a `Repository` folder inside `Webkul/Blog/src/` and create a file `PostRepository.php` and create the `model()` method in repository class which returns the path of your contract class.

  ~~~php
  <?php

  namespace Webkul\Blog\Repository;

  use Webkul\Core\Eloquent\Repository;

  class PostRepository extends Repository
  {
      /**
      * Specify Model class name
      *
      * @return string
      */
      function model(): string
      {
          return 'Webkul\Blog\Contracts\Post';
      }
  }
  ~~~

### Step-5

- After creating all the files stated above, we have to create a provider as  `ModuleServiceProvider.php` inside `Webkul/Blog/src/Providers`. In this file, models which are used in this package are registered. You may check below code,

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

### Step-6

- Now, Register your `ModuleServiceProvider.php` in `config/concord.php` file,

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

- Now, You your `PostRepository` is ready to use.
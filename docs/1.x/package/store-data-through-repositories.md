# Repository

Generally, we wrote all of our application logic in the controller. There’s an alternative approach of development that abstracts some calls into PHP classes called Repositories. The idea is that we can decouple models from controllers and assign a readable name's to complicated queries.

This file defines our Repository class. Instances of this class have a model property that we tie to an Eloquent model. Once this is bound in the constructor we can call Eloquent methods like findOrFail, update or all from the class methods.

There are two ways to create a Repository in **Bagisto**.

1. Using Bagisto Package Generator (**Recommended**)
2. By manually setting up all files (**Expert Level**)

## 1. Using Bagisto Package Generator

This command will create a new Repository class in `packages/Webkul/Blog/src/Repository` directory.

`php artisan package:make-repository PostRepository Webkul/Blog`

After that we have to create a [Module Service Provider](#module-service-provider).

## 2. By manually setting up all files

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


### Module Service Provider

- After creating Model, Proxy and Repository, we have to create a provider as  `ModuleServiceProvider.php` inside `Webkul/Blog/src/Providers`. In this file, models which are used in this package are registered. You may check below code,

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
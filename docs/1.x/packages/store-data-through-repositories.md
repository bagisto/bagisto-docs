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

## Steps to store data through repository

- For creating models, create a file named as `HelloWorld.php` in `packages/ACME/HelloWorld/src/Models`, and copy the below code in file,

  ~~~php
  <?php

  namespace ACME\HelloWorld\Models;

  use Illuminate\Database\Eloquent\Model;
  use ACME\HelloWorld\Contracts\HelloWorld as HelloWorldContract;

  class HelloWorld extends Model implements HelloWorldContract
  {
      protected $fillable = [];
  }
  ~~~

> Note: If you have created model by using **Bagisto Package Generator**, then you can skip the model proxy and contract creation step.

- Now, at the same location create a model proxy file as `HelloWorldProxy.php`. This Proxy class will extends `Konekt\Concord\Proxies\ModelProxy`. Copy the below code in file,

  ~~~php
  <?php

  namespace ACME\HelloWorld\Models;

  use Konekt\Concord\Proxies\ModelProxy;

  class HelloWorldProxy extends ModelProxy
  {

  }
  ~~~

- Now, create a folder named as `Contracts` and create an interface file named as `HelloWorld.php`,

  ~~~php
  <?php

  namespace ACME\HelloWorld\Contracts;

  interface HelloWorld
  {
  }
  ~~~

- Create a `Repository` folder and create a file `HelloWorldRepository.php` and create the `model()` method in repository class which returns the path of your contract class.

  ~~~php
  <?php

  namespace ACME\HelloWorld\Repositories;

  use Webkul\Core\Eloquent\Repository;

  class HelloWorldRepository extends Repository
  {
      /**
      * Specify Model class name
      *
      * @return mixed
      */
      function model()
      {
          return 'ACME/HelloWorld/Contracts/HelloWorld';
      }
  }
  ~~~

  ::: tip

  - You can use **Bagisto Package Generator** also,

    `php artisan package:make-repository HelloWorldRepository ACME/HelloWorld`

  :::

- After creating all the files stated above, we have to create a provider as  `ModuleServiceProvider.php`. In this file, models which are used in this package are registered. You may check below code,

  ~~~php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Konekt\Concord\BaseModuleServiceProvider;

  class ModuleServiceProvider extends BaseModuleServiceProvider
  {
      protected $models = [
          ACME\HelloWorld\Models\HelloWorld::class,
      ];
  }
  ~~~

- Now, Register your `ModuleServiceProvider.php` in `config/concord.php` file,

    ~~~php
    <?php

    return [
        'modules' => [
            ACME\HelloWorld\Providers\ModuleServiceProvider::class
        ]
    ];
    ~~~

- Now, you are all set to go.

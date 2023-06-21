# Override Core Model

[[TOC]]

## Introduction

Bagisto utilizes Concord, a Laravel extension, for building modules on top of Laravel's built-in service providers. Concord introduces the concept of model proxies, which allow you to override and extend core models in a modular way.

Concord requires the existence of an interface, such as **Product**, which serves as a contract that can be bound to a concrete class using Concord's **registerModel()** method.

By default, the **`Models\Product`** class is bound to the **`Contracts\Product`** interface within the module. If you want to extend or override this class, you can use Concord's **registerModel()** method.

The **registerModel()** method handles the binding of the interface and implementation in Laravel's service container, enabling you to easily type-hint the interface for automatic injection.

For more details, you can visit the [Concord GitHub repository](https://github.com/artkonekt/concord) or refer to the [Concord documentation](https://artkonekt.github.io/concord/#/).

## Overriding a Model Class

- In Concord modules, an interface is typically defined for each Eloquent model. If you wish to override a model, you can instruct Concord to use another class for that interface. Here's an example:

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\ServiceProvider;

  class BlogServiceProvider extends ServiceProvider
  {
      /**
       * Bootstrap any application services.
       *
       * @return void
       */
      public function boot()
      {
          //...
          
          $this->app->concord->registerModel(
              \Webkul\Product\Contracts\Product::class, \App\Http\Product::class
          );
      }
  }
  ```

- In the code above, the **registerModel()** method accepts two parameters:

  - The first parameter specifies the path to the interface (contract) you want to override.
  - The second parameter specifies the path to the model class that will override the default implementation.

- The model class you're overriding must extend your specified model path, as shown in the example below:

  ```php
  <?php

  namespace App\Http;

  use Webkul\Product\Models\Product as ProductBaseModel;

  class Product extends ProductBaseModel
  {
      //
  }
  ```

By following this approach, you can override core models in Bagisto using Concord's module system.
# Override Core Model

[[TOC]]

## Introduction

Bagisto utilizes Concord, a Laravel extension, for building modules on top of Laravel's built-in service providers. Concord introduces the concept of model proxies, which allow you to override and extend core models in a modular way.

Concord requires the existence of an interface, such as `Product`, which serves as a contract that can be bound to a concrete class using Concord's `registerModel()` method.

By default, the `Models\Product` class is bound to the `Contracts\Product` interface within the module. If you want to extend or override this class, you can use Concord's `registerModel()` method.

The `registerModel()` method handles the binding of the interface and implementation in Laravel's service container, enabling you to easily type-hint the interface for automatic injection.

For more details, you can visit the [Concord GitHub repository](https://github.com/artkonekt/concord) or refer to the [Concord documentation](https://artkonekt.github.io/concord/#/).

## Overriding a Model Class

To override a core model in Bagisto using Concord, follow these steps:

### Define an Interface (Contract)

In Bagisto's modular structure, each Eloquent model typically corresponds to an interface. This interface acts as a contract that specifies the methods the model must implement.

### Register the Model Override

Use Concord's registerModel() method in your module's service provider (ServiceProvider) to bind your custom model implementation to the interface. Here’s how you can do it:

```php
<?php

namespace Webkul\CustomModule\Providers;

use Illuminate\Support\ServiceProvider;

class CustomModuleServiceProvider extends ServiceProvider
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

- Replace `\Webkul\Product\Contracts\Product::class` with the interface you wish to override.
- Replace `\App\Http\Product::class` with the path to your custom model class that extends the core model you are overriding.

### Implement the Custom Model Class

Your custom model class (Product in this example) should extend the base core model (`ProductBaseModel`), ensuring it adheres to the contract specified by the interface. Here’s an example:

```php
<?php

namespace App\Http;

use Webkul\Product\Models\Product as ProductBaseModel;

class Product extends ProductBaseModel
{
    //
}
```

Once registered, you can use dependency injection or other Laravel mechanisms to reference the interface(`\Webkul\Product\Contracts\Product::class`) throughout your application. Laravel's service container will automatically resolve your custom model implementation (`\App\Http\Product::class`) where the interface is referenced.

By following this approach, you can effectively extend and override core models within Bagisto using Concord, maintaining modularity and flexibility in your application's architecture.

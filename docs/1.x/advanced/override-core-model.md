# Override core model

Concord is a Laravel Extension that helps building modules on top of Laravel's built-in Service Providers.
Bagisto uses Concord for managing their modules.
The concept of model proxies has been introduced. Proxies, as the name suggests will drive you to the actual model class.

Concord's concept also requires to have an interface **_Product_** and this way it's possible to freely bind a concrete class to it using Concord's **registerModel()** method.

`Models\Product` class gets bound to the `Contracts\Product` interface within the module (consider it as a default). If the application wants to extend that class, it invokes Concord's **registerModel()** again, and that's all.

The **registerModel()** method also silently binds the interface to the implementation with Laravel's service container so you can simply type-hint the interface at any point where automatic injection happens.

**Note** : _For more details check_ <a href="https://github.com/artkonekt/concord" target="_blank" class="bagsito-link"> Concord </a> _on github or refer to its_<a href="https://artkonekt.github.io/concord/#/" target="_blank" class="bagsito-link"> Documentation </a>

Overriding Model class in the application:

Concord modules generally define an interface for every eloquent model. If you want to override a model you can tell concord to use another class for that interface. Below, you may have a look at code

```php
    namespace App\Providers;

    use Illuminate\Support\ServiceProvider;
    use Illuminate\Support\Facades\Schema;

    class AppServiceProvider extends ServiceProvider
    {

        /**
        * Bootstrap any application services.
        *
        * @return void
        */
        public function boot()
        {
            $this->app->concord->registerModel(
                \Webkul\Product\Contracts\Product::class, \App\Http\Product::class
            );
        }
    }
```

In the code shown above, **registerModel()** method accepts two parameters, described below:

- The first parameter states your Contracts path which you want to override.

- The second parameter states the model path from where you will override the model.

The model from which you want to override must extend your model path as shown below

```php
<?php

namespace App\Http;

use Webkul\Product\Models\Product as ProductBaseModel;

class Product extends ProductBaseModel
{

}
```
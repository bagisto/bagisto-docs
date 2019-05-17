---
title: Override Core Model-Bagisto
layout: default
---


# Override core model

Concord is a Laravel Extension that serves as a foundation to build modules for Laravel Applications on top of Laravel's built in Service Providers. Bagisto uses Concord for managing their modules. The concept of model proxies has been introduced. Proxies as their name state, will drive you to the actual model class.

Concord's concept also requires to have an interface `Product` and this way it's possible to freely bind a concrete class to it using Concord's `registerModel()` method.

`Models\Product` class gets bound to the `Contracts\Product` interface within the module (consider it as a default). If the application wants to extend that class, it invokes Concord's `registerModel()` again, and that's all.

The `registerModel()` method also silently binds the interface to the implementation with Laravel's service container so you can simply type hint the interface at any point where automatic injection happens.

Overriding Model class in application:


    namespace App\Providers;

    use Illuminate\Support\ServiceProvider;
    use Vendor\ProductModule\Contracts\Product as ProductContract;

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
                ProductContract::class, \App\Product::class
            );
        }
    }
---
title: Bagisto Introduction
layout: default
---
# What is Contracts, Repositories and proxies ?<a id="#detail"></a><span class="edit-github"><img src="/assets/images/icons/Icon-Pencil-Large.svg" width="19px" height="13px"/> <a class="nav-link" href="https://github.com/bagisto/bagisto-docs">Edit On github</a></span>

## Contracts

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, a Illuminate\Contracts\Queue\Queue contract defines the methods needed for queueing jobs, while the Illuminate\Contracts\Mail\Mailer contract defines the methods needed for sending e-mail.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with a variety of drivers, and a mailer implementation that is powered by SwiftMailer.

All of the Laravel contracts live in their own GitHub repository. This provides a quick reference point for all available contracts, as well as a single, decoupled package that may be utilized by package developers.

## Repositories


## Proxies


# Store data through Repository <a id="store-data-through-repository"></a>

 Steps to store data through repository :

* Beginning with the creation of models, generally models are created using command stated below. The model is created on specified path/location.

> php artisan make:model HelloWorld --path=""

* Now, at the same location create a model proxy file as 'HelloWorldProxy.php'. This Proxy class will extends  ModelProxy. Also, you have to add "use Konekt\Concord\Proxies\ModelProxy; " like below stated

``` php
namespace Acme\HelloWorld\Models;

use Konekt\Concord\Proxies\ModelProxy;

class DataFlowProfileProxy extends ModelProxy
{
}
```

* Now ,make a Folder named as Contracts and inside it create a interface file named as HelloWorld.php

* Now, make a repository folder and inside it create a file 'HelloWorldRepository.php' and
write the model method for repository class and under the method return path of your contract class.

><?php

>namespace Webkul\Marketplace\Repositories;

>use Webkul\Core\Eloquent\Repository;


>class HelloWorldRepository extends Repository

>{

    /**
     * Specify Model class name
     *
     * @return mixed
     */
>    function model()

>    {

>        return 'ACME\HelloWorld\Contracts\HelloWorld';

>    }

>}


# Override Existing model <a id="override-existing-model"></a>


Concord is a Laravel Extension that serves as a foundation to build Modules for Laravel Applications on top of Laravel's built in Service Providers. Bagisto uses Concord for managing their modules. The concept of model proxies has been introduced. Proxies as their name state, will drive you to the actual model class.

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
---
title: Models
description: Create Eloquent models, contracts, and proxies for Bagisto packages using Concord and Laravel best practices.
outline: deep
---

# Models


Eloquent is Laravel’s ORM for working with database records as PHP objects. Each table maps to a "model" class that can retrieve, insert, update, and delete rows.

Learn more in the Laravel docs: https://laravel.com/docs/11.x/eloquent

Bagisto uses the [konekt/concord](https://packagist.org/packages/konekt/concord) package to enable modular packages. Below, we’ll create an `RMA` package model.

## Using Bagisto Package Generator

Generate a new `ReturnRequest` model in your package:

```bash
php artisan package:make-model ReturnRequest Webkul/RMA
```

This creates the following files:
- `packages/Webkul/RMA/src/Models/ReturnRequest.php` (model)
- `packages/Webkul/RMA/src/Models/ReturnRequestProxy.php` (model proxy)
- `packages/Webkul/RMA/src/Contracts/ReturnRequest.php` (model contract interface)

## Using Laravel Artisan Command

If you prefer the manual approach, create the `Contract` and `Proxy` first, then the model class.

### Create the Contract

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, the `Illuminate\Contracts\Queue\Queue` contract defines the methods needed for queueing jobs, while the `Illuminate\Contracts\Mail\Mailer` contract defines the methods needed for sending an email.

All Laravel contracts are stored in their own GitHub repository. This provides a quick reference for available contracts and a decoupled package for reuse.

Now, create a folder named `Contracts` inside `packages/Webkul/RMA/src/` and create an interface file named `ReturnRequest.php`.

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Contracts
                └── ReturnRequest.php
```

Copy the following code into the `ReturnRequest.php` file.

```php
<?php

namespace Webkul\RMA\Contracts;

interface ReturnRequest
{
}
```

### Create the Proxy

Proxies, as their name suggests, act as intermediaries to the actual model class. Model proxies are used to override the functionality of existing models without creating a new database table.

Navigate to the directory `packages/Webkul/RMA/src/` and create a new folder named `Models`.

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Models
```

Inside the `Models` folder, create a new PHP file named `ReturnRequestProxy.php`.

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            ├── Contracts
            │   └── ReturnRequest.php
            └── Models
                └── ReturnRequestProxy.php
```

Copy the following code into the `ReturnRequestProxy.php` file.

```php
<?php

namespace Webkul\RMA\Models;

use Konekt\Concord\Proxies\ModelProxy;

class ReturnRequestProxy extends ModelProxy
{
}
```

### Create the Model

The simple way to create a model is to execute the `make:model` artisan command:

```bash
php artisan make:model ReturnRequest
```

Now, move your `ReturnRequest` model from the project root directory (i.e., `app/Models`) to `packages/Webkul/RMA/src/Models`.

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            ├── Contracts
            │   └── ReturnRequest.php
            └── Models
                ├── ReturnRequest.php
                └── ReturnRequestProxy.php
```

Copy the following code into the `ReturnRequest.php` file.

```php
<?php

namespace Webkul\RMA\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Webkul\Sales\Models\Order;
use Webkul\Customer\Models\Customer;
use Webkul\RMA\Contracts\ReturnRequest as ReturnRequestContract;

class ReturnRequest extends Model implements ReturnRequestContract
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'returns';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'order_id',
        'customer_id',
        'reason',
        'status',
    ];

    /**
     * Return request belongs to an order.
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Return request belongs to a customer.
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
}
```

The `ReturnRequest` model represents an RMA request. It implements the `ReturnRequest` contract, belongs to the `Webkul\RMA\Models` namespace, and maps to the `returns` table.

The `order()` and `customer()` methods define `BelongsTo` relationships to `Order` and `Customer`.

## Module Service Provider

To create a provider named `ModuleServiceProvider.php` inside `packages/Webkul/RMA/src/Providers` for your Laravel package, follow these steps.

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Providers
                ├── RMAServiceProvider.php
                └── ModuleServiceProvider.php
```

Register models used in this package. Example:

```php
<?php

namespace Webkul\RMA\Providers;

use Konekt\Concord\BaseModuleServiceProvider;

class ModuleServiceProvider extends BaseModuleServiceProvider
{
    protected $models = [
        \Webkul\RMA\Models\ReturnRequest::class,
    ];
}
```

The `ModuleServiceProvider` registers models for the RMA package. It extends `BaseModuleServiceProvider` from `konekt/concord`.

## Registering ModuleServiceProvider

To integrate the `ModuleServiceProvider` with the Concord module system in Laravel, you need to register it in the `config/concord.php` configuration file.

- Open the configuration file at `config/concord.php` in your Laravel application.
- Inside the `modules` array, add the `ModuleServiceProvider` class to register it with Concord.

```php
<?php

return [
    'modules' => [
        // Other service providers
        \Webkul\RMA\Providers\ModuleServiceProvider::class,
    ],
];
```

::: tip Concord integration
Concord discovers and registers your package models through the `ModuleServiceProvider`. Ensure your package namespace is autoloaded in composer.json and run:
```bash
composer dump-autoload
```
:::
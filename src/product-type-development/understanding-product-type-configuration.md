# Understanding Product Type Configuration

`Config/product_types.php` registers a product type in `config('product_types')`: its key, the name the admin shows and the class behind it. Core's own file, `packages/Webkul/Product/src/Config/product_types.php`, has the same shape with seven entries. This page covers the keys, how Bagisto uses them, core's types, and overriding one.

## The Configuration File

This is the file you created in [Creating Your First Product Type](./create-your-first-product-type.md#step-2-add-the-product-type-configuration):

**File:** `packages/Webkul/SubscriptionProduct/src/Config/product_types.php`

```php
<?php

return [
    'subscription' => [
        'key' => 'subscription',
        'name' => 'subscription::app.type.subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort' => 8,
    ],
];
```

| Key | Required | Description |
|---|---|---|
| `key` | Yes | Unique identifier, matching the array key. Stored in `products.type`, and used as the value of the product grid's type filter |
| `name` | Yes | Translation key of the name in the admin type dropdown and the product grid filter; passed through `trans()`, so a plain string renders unchanged but can't be localized |
| `class` | Yes | The fully qualified product type class |
| `sort` | No | Declared by every core entry, but nothing reads it: the dropdown and the grid filter use the order the array was merged in |

There are no other keys; a `children` or `options` entry is ignored. One file can register several types, each as its own entry.

## How Bagisto Uses the Configuration

- **Admin product creation.** The **Product Type** dropdown lists `config('product_types')` in array order. Because `mergeConfigFrom()` puts a package's entries **before** core's, a custom type lands at the top when its provider is registered after `ProductServiceProvider`. `Admin\Http\Controllers\Catalog\ProductController::store()` passes the chosen `type` to `ProductRepository::create()`, which calls the class's `create()`; saving the edit form later goes through its `update()`.
- **Product type instantiation.** Whenever a product's behaviour is needed, `Product::getTypeInstance()` resolves `config('product_types.{type}.class')` from the container with `app()` and hands it the product. Cart items and order items do the same. Your type's constructor may inject dependencies, but it must pass the repositories `AbstractType::__construct()` requires on to `parent::__construct()`.
- **A missing entry throws.** If the package is removed while products of the type still exist, `getTypeInstance()` throws "Please ensure the product type '…' is configured in your application." Keep the type registered for as long as products, cart items or orders of it exist.

## Built-In Product Types

Each core type is a class under `Webkul\Product\Type`, and the closest one is the best reference for a custom type:

| Type | Class | What it is |
|---|---|---|
| `simple` | `Simple` | A physical item with its own price and stock |
| `configurable` | `Configurable` | A parent whose variants (size, colour) are simple products; the customer picks options on the product page |
| `virtual` | `Virtual` | A non-physical product with no shipping; still has stock |
| `downloadable` | `Downloadable` | A virtual product sold with downloadable links; the customer downloads files from their account |
| `grouped` | `Grouped` | Several simple products shown together, each added to the cart in its own quantity |
| `bundle` | `Bundle` | A kit built from options the customer chooses; priced from the chosen option products |
| `booking` | `Booking` | Appointments, events, rentals and tables, with slots and dates; the `BookingProduct` package supplies its models, repositories and listeners |

Every one of them declares `getPriceIndexer()`, has an admin edit partial under `Admin/src/Resources/views/catalog/products/edit/types/`, and, where the storefront needs extra controls, a partial under `Shop/src/Resources/views/products/view/types/`. If a built-in type almost fits, extend its class (for example `Webkul\Product\Type\Virtual`) instead of starting from `AbstractType`, and override only what differs.

## Overriding a Core Type

A package can't replace a core type through its configuration file. `mergeConfigFrom()` keeps any key that is already set, and `ProductServiceProvider` has already merged core's `simple` entry by the time a package listed after it in `bootstrap/providers.php` registers, so the package's own `simple` entry is discarded. Set the class in your provider's `boot()` instead, once every provider has registered, with `use Webkul\SubscriptionProduct\Type\Simple;` at the top of the provider:

```php
/**
 * Bootstrap services.
 */
public function boot(): void
{
    config(['product_types.simple.class' => Simple::class]);
}
```

That `Simple` is a class of your own that extends `Webkul\Product\Type\Simple` and overrides what differs; without the import, `Simple::class` doesn't name it. Existing products keep their `type` value and pick up the new class on the next request.

## Next Step

Next, see the properties and methods a type class inherits from `AbstractType`, and which ones to override.

**Continue to:** [Understanding the AbstractType Class](./understanding-abstract-type-class.md)

# Understanding Product Type Configuration

Product type configuration tells Bagisto how your custom product type should behave. It's a simple array that defines the key properties and connects your configuration to your product type class.

::: info What You'll Learn
- How the configuration file works
- How Bagisto uses this configuration
:::

## Basic Configuration Structure

The `Config/product_types.php` file is a simple PHP array that registers your product type. Core's own file, `packages/Webkul/Product/src/Config/product_types.php`, has the same shape with seven entries:

```php
<?php

return [
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'subscription::app.type.subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 8,
    ],
];
```

## Configuration Properties

| Property | Description | Example |
|----------|-------------|---------|
| `key` | Unique identifier, matching the array key. Stored in `products.type` for every product of this type | `'subscription'` |
| `name` | **Translation key** of the name shown in the admin type dropdown and the product grid filter; passed through `trans()`, so a plain string renders unchanged but cannot be localized | `'subscription::app.type.subscription'` |
| `class` | Full namespace to your product type class | `'Webkul\SubscriptionProduct\Type\Subscription'` |
| `sort` | Declared by every core entry, but nothing reads it: the dropdown and the grid filter iterate the array in the order it was merged | `8` |

There are no other keys; a `children` or `options` entry is ignored.

## How Bagisto Uses This Configuration

### 1. Admin Product Creation
When you create a product in admin, Bagisto reads all registered product types from `config('product_types')` and lists them in the **Product Type** dropdown in array order. Because `mergeConfigFrom()` puts your package's entries **before** core's, a custom type lands at the top of the list.

### 2. Product Type Instantiation
Whenever a product's behaviour is needed, `Product::getTypeInstance()` resolves `config('product_types.{type}.class')` from the container with `app()`, then hands it the product. Cart items and order items do the same. Since the container is used, your type's constructor may inject dependencies, but it must pass the repositories `AbstractType::__construct()` requires on to `parent::__construct()`.

### 3. Configuration Loading
Your service provider merges your configuration:

```php
public function register(): void
{
    $this->mergeConfigFrom(
        dirname(__DIR__).'/Config/product_types.php',
        'product_types'
    );
}
```

## Multiple Product Types

You can register multiple product types in one configuration file:

```php
<?php

return [
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'subscription::app.type.subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 8,
    ],

    'rental' => [
        'key'   => 'rental',
        'name'  => 'subscription::app.type.rental',
        'class' => 'Webkul\SubscriptionProduct\Type\Rental',
        'sort'  => 9,
    ],
];
```

## Overriding a core type

Because configuration is merged by key, a package can replace the class behind a core type by declaring the same key:

```php
'simple' => [
    'key'   => 'simple',
    'name'  => 'product::app.type.simple',
    'class' => 'Webkul\SubscriptionProduct\Type\Simple',
    'sort'  => 1,
],
```

Extend `Webkul\Product\Type\Simple` and override what differs. Existing products keep their `type` value and pick up the new class immediately.

## What's Next?

Now that you understand how product type configuration works, let's explore the business logic:

**📖 [Understanding AbstractType Class →](./understanding-abstract-type-class.md)**  
Learn about the key methods you can override to implement custom product behavior.

**📖 [Building Your Subscription Product Type →](./building-your-subscription-product-type.md)**  
See how to use configuration and methods together to build a complete subscription product type.

::: tip Key Takeaways

- Configuration is just a simple PHP array
- `key`, `name` and `class` are what Bagisto reads; `sort` is declared by convention
- Bagisto uses this to show options in admin and instantiate your classes
- Keep it simple - add complexity only when needed

:::

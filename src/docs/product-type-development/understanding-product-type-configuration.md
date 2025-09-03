# Understanding Product Type Configuration

Product type configuration tells Bagisto how your custom product type should behave. It's a simple array that defines the key properties and connects your configuration to your product type class.

::: info What You'll Learn
- How the configuration file works
- How Bagisto uses this configuration
:::

## Basic Configuration Structure

The `Config/product-types.php` file is a simple PHP array that registers your product type:

```php
<?php

return [
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'Subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 5,
    ],
];
```

## Required Configuration Properties

These four properties are all you need for a basic product type:

| Property | Description | Example |
|----------|-------------|---------|
| `key` | Unique identifier (matches array key) | `'subscription'` |
| `name` | Display name in admin dropdown | `'Subscription'` |
| `class` | Full namespace to your product type class | `'Webkul\SubscriptionProduct\Type\Subscription'` |
| `sort` | Order in dropdown (optional, default: 0) | `5` |

## How Bagisto Uses This Configuration

### 1. Admin Product Creation
When you create a product in admin, Bagisto:
- Reads all registered product types from configuration
- Shows them in the "Product Type" dropdown
- Uses the `name` for display and `sort` for ordering

### 2. Product Type Instantiation
When working with a product, Bagisto:
- Looks up the product's type using the `key`
- Creates an instance of the `class` 
- Calls methods on that instance for product behavior

### 3. Configuration Loading
Your service provider merges your configuration:

```php
public function register(): void
{
    $this->mergeConfigFrom(
        dirname(__DIR__) . '/Config/product-types.php',
        'product_types'  // merges into config ('product_types')
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
        'name'  => 'Subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 5,
    ],
    
    'rental' => [
        'key'   => 'rental',
        'name'  => 'Rental Product',
        'class' => 'Webkul\RentalProduct\Type\Rental',
        'sort'  => 6,
    ],
];
```

## What's Next?

Now that you understand how product type configuration works, let's explore the business logic:

**📖 [Understanding AbstractType Class →](./understanding-abstract-type-class.md)**  
Learn about the key methods you can override to implement custom product behavior.

**📖 [Building Your Subscription Product Type →](./building-your-subscription-product-type.md)**  
See how to use configuration and methods together to build a complete subscription product type.

::: tip Key Takeaways

- Configuration is just a simple PHP array
- Only 4 properties are required: `key`, `name`, `class`, `sort`
- Bagisto uses this to show options in admin and instantiate your classes
- Keep it simple - add complexity only when needed

:::

The configuration system is straightforward once you understand these basics. Focus on getting the core properties right first, then enhance as needed.

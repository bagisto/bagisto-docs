# Understanding System Configuration

Learn how to create admin configuration interfaces for your shipping method, allowing administrators to customize settings without touching code.

::: info What You'll Learn
This guide covers:
- Creating simple configuration fields
- Field types and validation
- Accessing configuration data in your carrier class
:::

## Basic Configuration Structure

System configuration creates admin interface fields for your shipping method:

**File:** `packages/Webkul/CustomExpressShipping/src/Config/system.php`

```php
<?php

return [
    [
        'key'    => 'sales.carriers.custom_express_shipping',
        'name'   => 'Custom Express Shipping',
        'info'   => 'Configure the Custom Express Shipping method settings.',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'active',
                'title'         => 'Enable Method',
                'type'          => 'boolean',
                'default_value' => true,
            ],
            [
                'name'          => 'title',
                'title'         => 'Method Title',
                'type'          => 'text',
                'default_value' => 'Express Delivery',
            ],
            [
                'name'          => 'default_rate',
                'title'         => 'Shipping Rate',
                'type'          => 'text',
                'default_value' => '19.99',
                'validation'    => 'numeric|min:0',
            ],
        ]
    ]
];
```

## Field Types and Validation

For detailed information about all available field types, validation rules, and advanced configuration options, see:

**📖 [Package Development - System Configuration →](../package-development/system-configuration.md)**
Complete guide to creating admin configuration interfaces with all field types and options.

## Accessing Configuration Data

Once you've defined your configuration fields, you can access their values in your carrier class using the `getConfigData()` method:

### In Your Carrier Class

The most common place to access configuration data is in your carrier's `calculate()` method:
```php
public function calculate()
{
    // get configuration values
    $isActive = $this->getConfigData('active');
    $title = $this->getConfigData('title');
    $rate = $this->getConfigData('default_rate');
    
    // use in your logic
    if (! $isActive) {
        return false;
    }
    
    $shippingRate = new CartShippingRate;
    $shippingRate->price = $rate;
    
    return $shippingRate;
}
```

## What's Next?

Now that you understand system configuration, you have all the pieces to build a complete shipping method:

**📖 [Back to Getting Started ←](./getting-started.md)**
Review the complete shipping method development workflow and see your progress.

Your shipping method now has a complete admin configuration interface. You're ready to build sophisticated shipping solutions!

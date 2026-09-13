# Understanding System Configuration

Learn how to create admin configuration interfaces for your shipping method, allowing administrators to customize settings without touching code.

::: info What You'll Learn
This guide covers:
- Creating simple configuration fields
- Field types and validation
- Accessing configuration data in your carrier class
:::

## Basic Configuration Structure

System configuration creates admin interface fields for your shipping method. The section's `key` must be `sales.carriers.{code}`, which places it under **Configuration → Sales → Shipping Methods** and is the path `getConfigData()` reads:

**File:** `packages/Webkul/CustomExpressShipping/src/Config/system.php`

```php
<?php

return [
    [
        'key'    => 'sales.carriers.custom_express_shipping',
        'name'   => 'Custom Express Shipping',
        'info'   => 'Configure the Custom Express Shipping method settings.',
        'sort'   => 3,
        'fields' => [
            [
                'name'          => 'active',
                'title'         => 'Enable Method',
                'type'          => 'boolean',
                'channel_based' => true,
                'locale_based'  => false,
            ],
            [
                'name'          => 'title',
                'title'         => 'Method Title',
                'type'          => 'text',
                'depends'       => 'active:1',
                'validation'    => 'required_if:active,1',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'default_rate',
                'title'         => 'Shipping Rate',
                'type'          => 'text',
                'depends'       => 'active:1',
                'validation'    => 'required_if:active,1|numeric|min:0',
                'channel_based' => true,
                'locale_based'  => false,
            ],
        ],
    ],
];
```

Points that match core's own carrier sections:

- **`info` is required** on the item; the configuration page fails without it.
- **Defaults go in `carriers.php`**, not here. The field key that a `system.php` field honours is `default`, and it is only consulted when neither the database nor `carriers.php` has a value.
- **`depends => 'active:1'`** hides the other fields while the method is off, and `required_if:active,1` lets the page save in that state; a bare `required` would block saving until the method is switched on.
- **`channel_based`** gives each channel its own rate and title; **`locale_based`** on `title` and `description` lets them be translated.

The section is merged into the `core` configuration key from your service provider:

```php
$this->mergeConfigFrom(dirname(__DIR__).'/Config/system.php', 'core');
```

## Field Types and Validation

For detailed information about all available field types, validation rules, and advanced configuration options, see:

**📖 [Package Development - System Configuration →](../package-development/system-configuration.md)**
Complete guide to creating admin configuration interfaces with all field types and options.

## Accessing Configuration Data

Once you've defined your configuration fields, you can access their values in your carrier class using the `getConfigData()` method, which reads `sales.carriers.{code}.{field}` and applies the fallback chain described on [Understanding Carrier Configuration](./understanding-carrier-configuration.md#5-value-resolution-fallback-chain):

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $rate = new CartShippingRate;

    $rate->carrier = $this->getCode();
    $rate->carrier_title = $this->getConfigData('title');
    $rate->method = $this->getMethod();
    $rate->method_title = $this->getConfigData('title');
    $rate->price = core()->convertPrice($this->getConfigData('default_rate'));
    $rate->base_price = $this->getConfigData('default_rate');

    return $rate;
}
```

## What's Next?

Now that you understand system configuration, you have all the pieces to build a complete shipping method:

**📖 [Back to Getting Started ←](./getting-started.md)**
Review the complete shipping method development workflow and see your progress.

Your shipping method now has a complete admin configuration interface. You're ready to build sophisticated shipping solutions!

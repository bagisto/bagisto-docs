# Understanding Payment Configuration

Now that you've created your payment method, let's understand how the configuration files work and what each property does.

## Payment Method Configuration

In the previous section, we created `config/payment-methods.php`. Let's understand each property:

```php
<?php

return [
    'custom_stripe_payment' => [
        'code'        => 'custom_stripe_payment',
        'title'       => 'Credit Card (Stripe)',
        'description' => 'Secure credit card payments powered by Stripe',
        'class'       => 'Webkul\CustomStripePayment\Payment\CustomStripePayment',
        'active'      => true,
        'sort'        => 1,
    ],
];
```

### Configuration Properties Explained

| Property | Type | Purpose | Description |
|----------|------|---------|-------------|
| **`code`** | String | Unique identifier | Must match the array key and be used consistently across your payment method |
| **`title`** | String | Default display name | Shown to customers during checkout (can be overridden in admin) |
| **`description`** | String | Payment method description | Brief explanation of the payment method |
| **`class`** | String | Payment class namespace | Full path to your payment processing class |
| **`active`** | Boolean | Default status | Whether the payment method is enabled by default |
| **`sort`** | Integer | Display order | Lower numbers appear first in checkout (0 = first) |

::: tip Configuration Key Consistency
The array key (`custom_stripe_payment`) must match the `code` property and be used consistently in:
- Your payment class `$code` property
- System configuration key path
- Route names and identifiers
:::

## System Configuration (Admin Settings)

We also created `system.php` for the admin interface. Let's understand what we built:

```php
<?php

return [
    [
        'key'    => 'sales.payment_methods.custom_stripe_payment',
        'name'   => 'Custom Stripe Payment',
        'info'   => 'Custom Stripe Payment Method Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'active',
                'title'         => 'Status',
                'type'          => 'boolean',
                'default_value' => true,
                'channel_based' => true,
            ],
            [
                'name'          => 'title',
                'title'         => 'Title',
                'type'          => 'text',
                'default_value' => 'Credit Card (Stripe)',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'description',
                'title'         => 'Description',
                'type'          => 'textarea',
                'default_value' => 'Secure credit card payments',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'sort',
                'title'         => 'Sort Order',
                'type'          => 'text',
                'default_value' => '1',
            ],
        ],
    ],
];
```

### System Configuration Properties Explained

The system configuration creates the admin interface that allows store administrators to manage payment method settings. Each property serves a specific purpose in creating a user-friendly admin experience.

#### Section Properties

These properties define the overall section that appears in the admin configuration panel:

| Property | Purpose | Description |
|----------|---------|-------------|
| **`key`** | Configuration path | `sales.payment_methods.{your_code}` - where settings are stored |
| **`name`** | Admin section title | Displayed in the admin configuration panel |
| **`info`** | Section description | Additional information shown to administrators |
| **`sort`** | Section order | Order in which payment methods appear in admin |

#### Field Properties

These properties define each individual form field that administrators can configure:

| Property | Purpose | Description |
|----------|---------|-------------|
| **`name`** | Field identifier | Used to store and retrieve configuration values |
| **`title`** | Field label | Label displayed in the admin form |
| **`type`** | Input type | `text`, `textarea`, `boolean`, `select`, `password`, etc. |
| **`default_value`** | Default setting | Initial value when first configured |
| **`channel_based`** | Multi-store support | Different values per sales channel |
| **`locale_based`** | Multi-language support | Translatable content per language |
| **`validation`** | Field validation | Rules like `required`, `numeric`, `email` |

### How Configuration is Used

When you call `$this->getConfigData('title')` in your payment class, Bagisto looks up:

```
core()->getConfigData('sales.payment_methods.custom_stripe_payment.title')
```

This retrieves the value from the admin configuration that administrators can modify.

### Configuration Value Resolution

Bagisto resolves configuration values using a specific fallback chain. Understanding this chain is important to ensure your payment method always has sensible values, even before an administrator saves any settings.

```
core()->getConfigData('sales.payment_methods.custom_stripe_payment.title')
│
├── 1. Core Config (Database)
│     Checks the `core_config` table for admin-saved values.
│     Found? → Returns the saved value.
│
└── 2. Fallback (No database entry)
      │
      ├── Package Config (payment-methods.php)
      │     Checks Config::get('payment_methods.custom_stripe_payment.title')
      │     Found? → Returns the package default.
      │
      └── System Default (system.php 'default' key)
            Returns the 'default' value defined in the field configuration,
            or null if not defined.
```

**In practice**, this means your `payment-methods.php` config file serves as the primary fallback for all fields. When a value exists in both `payment-methods.php` and as a `default` in `system.php`, the `payment-methods.php` value takes priority.

::: tip Ensure Fallback Values
Always define essential properties like `active`, `title`, `description`, and `sort` in your `payment-methods.php` config file. This ensures your payment method works correctly even before any admin configuration is saved.
:::

### System Configuration Reference

For detailed information about creating admin interface forms for your payment method, see:

**📖 [Package Development - System Configuration →](../package-development/system-configuration.md)**
Complete guide to creating admin configuration interfaces with all field types and options.

## What's Next?

Now that you understand payment configuration, let's explore the payment class:

**📖 [Understanding Payment Class →](./understanding-payment-class.md)**
Learn how to implement payment processing logic and handle transactions.

**📖 [Back to Getting Started ←](./getting-started.md)**
Review the complete payment method development workflow.

# Understanding Payment Configuration

A payment method has two configuration files: `Config/payment-methods.php` registers it in `config('payment_methods')` with its defaults, and `Config/system.php` gives it settings under **Configure → Sales → Payment Methods**. This page covers the keys of both and how a setting is resolved.

## The Configuration File

This is the file you created in [Creating Your First Payment Method](./create-your-first-payment-method.md#step-2-add-the-payment-method-configuration):

**File:** `packages/Webkul/CustomStripePayment/src/Config/payment-methods.php`

```php
<?php

return [
    'custom_stripe_payment' => [
        'code' => 'custom_stripe_payment',
        'title' => 'Credit Card (Stripe)',
        'description' => 'Secure credit card payments powered by Stripe',
        'class' => 'Webkul\CustomStripePayment\Payment\CustomStripePayment',
        'active' => true,
        'sort' => 1,
    ],
];
```

| Key | Required | Description |
|---|---|---|
| `class` | Yes | The fully qualified payment class, resolved with `app($class)`, so constructor injection works. The only key the checkout reads from this file |
| `code` | No | The method code. Identity comes from the class's `$code`, which forms the `system.php` key and is stored in `order_payments.method`; keep it, this key and the array key identical |
| `title` | Yes | Default display name at checkout, used until an admin saves one. Also read directly from this file by the admin's transaction view and the storefront's RMA order grid, which show it as written |
| `description` | No | Default description |
| `active` | No | Default enabled state |
| `sort` | No | Default position at checkout; lower numbers come first, compared numerically |

Except for `class`, these are defaults: `$this->getConfigData('title')` reads the admin-saved value first (see [Configuration Value Resolution](#configuration-value-resolution)).

Core's `cashondelivery` and `moneytransfer` entries also carry `'generate_invoice' => false`. Only those two use it: `Webkul\Payment\Listeners\GenerateInvoice` names both codes, so the key does nothing for another method; see [Understanding the Payment Class](./understanding-payment-class.md#automatic-invoices) for how gateways invoice.

<a id="system-configuration-admin-settings"></a>

## System Configuration

The section's `key` must be `sales.payment_methods.{code}`. This is an excerpt of the file from [Step 4](./create-your-first-payment-method.md#step-4-add-the-system-configuration):

**File:** `packages/Webkul/CustomStripePayment/src/Config/system.php`

```php
<?php

return [
    [
        'key' => 'sales.payment_methods.custom_stripe_payment',
        'name' => 'Custom Stripe Payment',
        'info' => 'Custom Stripe Payment Method Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'active',
                'title' => 'Status',
                'type' => 'boolean',
                'channel_based' => true,
                'locale_based' => false,
            ],
            // ...
            [
                'name' => 'image',
                'title' => 'Logo',
                'type' => 'image',
                'depends' => 'active:1',
                'validation' => 'mimes:bmp,jpeg,jpg,png,webp',
                'channel_based' => true,
                'locale_based' => false,
            ],
            [
                'name' => 'sort',
                'title' => 'Sort Order',
                'type' => 'number',
                'depends' => 'active:1',
                'validation' => 'required_if:active,1|integer|min:1',
                'channel_based' => true,
                'locale_based' => false,
            ],
        ],
    ],
];
```

What a payment section needs:

- **`info` is required** on the item; the configuration page breaks without it.
- **Keep a boolean `active` field.** `ConfigurationController::store()` reads `active` from every payment method section when the Payment Methods page is saved, and refuses to save when none is on.
- **`image` is the logo** the base class's `getImage()` returns; your class turns the stored path into a URL.
- **`sort` is a `number`,** because the checkout sorts methods numerically.
- **`depends => 'active:1'`** hides a field while the method is off, and a hidden field is neither rendered nor validated. `required_if:active,1` is checked only in the browser, because on the server it looks for a top-level `active` input; `required_if:sales.payment_methods.custom_stripe_payment.active,1` is enforced on both.
- **Credentials are `password` fields with `'channel_based' => true`,** as in core's gateways, so the admin masks them and each channel holds its own keys.

Every item and field key, and every field type, is on [System Configuration](../package-development/system-configuration.md).

## Configuration Value Resolution

`getConfigData($field)` reads `core()->getConfigData('sales.payment_methods.{code}.{field}')`: a value saved for the requested channel (and locale, for a `locale_based` field) wins, then `config('payment_methods.{code}.{field}')` from `payment-methods.php`, then the field's `default`. There is no fallback between channels or locales, so define `active`, `title`, `description` and `sort` in `payment-methods.php`, and the method works before an admin saves anything. [System Configuration](../package-development/system-configuration.md#configuration-value-resolution) covers the lookup for every key.

## Things to Watch

- **Keep the code identical everywhere:** the array key, `code`, the class's `$code`, the `system.php` key, and your route names.
- **Change a core method from `boot()`.** `mergeConfigFrom()` keeps core's entries, so extend the core class, keep its `$code`, and point the entry at your subclass from your provider's `boot()`, as in `config(['payment_methods.cashondelivery.class' => CashOnDelivery::class])` with your `CashOnDelivery` imported. [Overriding a Core Type](../product-type-development/understanding-product-type-configuration.md#overriding-a-core-type) explains why `boot()`.

## Next Step

Next, see what the payment class inherits, how availability works, and how a gateway that redirects brings the customer back.

**Continue to:** [Understanding the Payment Class](./understanding-payment-class.md)

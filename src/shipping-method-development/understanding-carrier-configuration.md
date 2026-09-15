# Understanding Carrier Configuration

A carrier has two configuration files: `Config/carriers.php` registers it in `config('carriers')` with its defaults, and `Config/system.php` gives it settings under **Configure → Sales → Shipping Methods**. This page covers the keys of both, how a setting is resolved, and how to configure carriers with several services or an external rate API.

## The Configuration File

This is the file you created in [Creating Your First Shipping Method](./create-your-first-shipping-method.md#step-2-add-the-carrier-configuration):

**File:** `packages/Webkul/CustomExpressShipping/src/Config/carriers.php`

```php
<?php

return [
    'custom_express_shipping' => [
        'code' => 'custom_express_shipping',
        'title' => 'Express Delivery (1-2 Days)',
        'description' => 'Premium express shipping with tracking and insurance',
        'active' => true,
        'default_rate' => '19.99',
        'type' => 'per_order',
        'class' => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
    ],
];
```

| Key | Required | Description |
|---|---|---|
| `class` | Yes | The fully qualified carrier class, matched case-sensitively. The only key core reads from this file when it collects rates |
| `code` | No | The carrier code. Identity comes from the class's `$code`, so keep it, this key and the array key identical: lowercase with underscores, and unique across carriers |
| `title` | No | Default display name, used until an admin saves one |
| `description` | No | Default description. The carrier copies it into the rate's `method_description`, which the shipping step prints after the method title |
| `active` | No | Default enabled state, used until an admin saves one. Both core carriers ship `true` |
| `default_rate` | No | Default base rate, as a string or float. Core's flat rate ships `'10'` |
| `type` | No | Pricing model: `per_order` or `per_unit`. Core's flat rate ships `per_unit`; the free carrier has no `type` |

Everything except `class` is a **default**: `$this->getConfigData('title')` reads the admin-saved value first and falls back to this file (see [Configuration Value Resolution](#configuration-value-resolution)).

## Custom Keys

A carrier can carry any other keys it needs, and reads them through `getConfigData()` like the core ones:

```php
<?php

return [
    'custom_express_shipping' => [
        'code' => 'custom_express_shipping',
        // ...
        'class' => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
        'free_shipping_threshold' => '100.00',
        'supports' => [
            'tracking' => true,
            'insurance' => true,
        ],
        'api' => [
            'endpoint' => env('EXPRESS_SHIPPING_API_URL'),
            'timeout' => 30,
        ],
    ],
];
```

| Key | Read with | Editable in the admin |
|---|---|---|
| A flat key that matches a field `name` in `system.php` | `getConfigData('free_shipping_threshold')` | Yes; this file supplies the default |
| A flat key with no matching field | `getConfigData('free_shipping_threshold')` | No |
| A nested key | `getConfigData('supports.tracking')`, `getConfigData('api.timeout')` | No; it is only ever read from this file |

Put what a merchant must change (rates, thresholds, credentials as `password` fields) in `system.php`, and keep what only a developer changes (service codes, endpoints, timeouts) here.

## System Configuration

The section's `key` must be `sales.carriers.{code}`: that places it on the Shipping Methods page and is the path `getConfigData()` reads. The file is in [Step 4](./create-your-first-shipping-method.md#step-4-add-the-system-configuration), and every item key, field key and field type is on [System Configuration](../package-development/system-configuration.md). What a carrier section needs, as core's own sections in `packages/Webkul/Admin/src/Config/system.php` show:

- **Keep a boolean `active` field.** `ConfigurationController::store()` reads `active` from every carrier section when the Shipping Methods page is saved, and refuses to save when none is switched on.
- **`sort` orders the sections.** Core's Free Shipping is `1` and Flat Rate is `2`, so `3` lists yours after them.
- **Defaults go in `carriers.php`.** A field's `default` is consulted only when neither the database nor `carriers.php` has a value.
- **`depends => 'active:1'`** hides the other fields while the method is off, and the admin neither renders nor validates a hidden field, so the page saves in that state. Core's carrier sections keep the toggle last and put `depends` only on the title and rate; either layout works.
- **`required_if:active,1` is enforced only in the browser.** On the server the rule looks for a top-level `active` input, as in core's carrier sections; write `required_if:sales.carriers.custom_express_shipping.active,1` if the server must enforce it too.
- **`channel_based`** gives each channel its own rate and title; **`locale_based`** on `title` and `description` lets them be translated.

## How Bagisto Uses the Configuration

- **It is merged, never replaced.** Your provider's `register()` merges the file into `carriers`, and `mergeConfigFrom()` keeps a key that is already set, so reusing the code `flatrate` or `free` leaves core's class in place. To change a core carrier, extend its class and point the entry at your subclass from your provider's `boot()`, as in `config(['carriers.flatrate.class' => FlatRate::class])` with your `FlatRate` imported; [Overriding a Core Type](../product-type-development/understanding-product-type-configuration.md#overriding-a-core-type) explains why `boot()`.
- **Every entry is asked for rates.** `Webkul\Shipping\Shipping::collectRates()` calls every carrier in `config('carriers')`, and `Webkul\CartRule\Repositories\CartRuleRepository::getShippingMethods()` offers every entry as a cart-rule condition. `Shipping::getShippingMethods()` lists the available ones, though no core screen calls it.
- **A carrier is created with `new`,** in `Shipping::collectRates()` and `Shipping::getShippingMethods()`, so it can't take constructor dependencies. Resolve repositories or services inside `calculate()` with `app()`. Payment methods differ: they are resolved with `app($class)`.

**File:** `packages/Webkul/Shipping/src/Shipping.php`

```php
foreach (Config::get('carriers') as $shippingMethod) {
    $object = new $shippingMethod['class'];

    if ($rates = $object->calculate()) {
        // ...
    }
}
```

<a id="value-resolution-fallback-chain"></a>

## Configuration Value Resolution

`getConfigData($field)` reads `core()->getConfigData('sales.carriers.{code}.{field}')`: a value saved for the requested channel (and locale, for a `locale_based` field) wins, then `config('carriers.{code}.{field}')` from this file, then the field's `default`. There is no fallback between channels or locales, so before anything is saved `getConfigData('default_rate')` returns `'19.99'` from the file above. [System Configuration](../package-development/system-configuration.md#configuration-value-resolution) covers the lookup for every key.

## Common Configuration Patterns

### Multi-Service Carrier

When one carrier offers several speeds, the simplest model is **one class returning several rates**. `calculate()` returns an array of `CartShippingRate` objects, one per service, each with its own `method` and `method_title`, and the checkout groups them under the shared `carrier_title`:

```php
/**
 * Calculate one rate per service level.
 *
 * @return array|false
 */
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    return [
        $this->rate('express_standard', trans('express::app.standard'), 9.99),
        $this->rate('express_priority', trans('express::app.priority'), 19.99),
    ];
}

/**
 * Build one rate of this carrier.
 */
protected function rate(string $method, string $title, float $basePrice): CartShippingRate
{
    $rate = new CartShippingRate;

    $rate->carrier = $this->getCode();
    $rate->carrier_title = $this->getConfigData('title');
    $rate->method = $method;
    $rate->method_title = $title;
    $rate->method_description = $this->getConfigData('description');
    $rate->price = core()->convertPrice($basePrice);
    $rate->base_price = $basePrice;

    return $rate;
}
```

`rate()` is your own helper, in a carrier that imports `Webkul\Checkout\Models\CartShippingRate`; `express::` stands for your package's translation namespace. Each `method` string must be unique across every carrier, because `Shipping::isMethodCodeExists()` matches the customer's choice against all collected rates.

The alternative is **one class per service**, each with its own entry:

```php
<?php

return [
    'express_standard' => [
        'code' => 'express_standard',
        'title' => 'Express Standard (2-3 Days)',
        'rate' => '9.99',
        'class' => 'Vendor\Express\Carriers\ExpressStandard',
        'days' => '2-3',
    ],

    'express_priority' => [
        'code' => 'express_priority',
        'title' => 'Express Priority (1-2 Days)',
        'rate' => '19.99',
        'class' => 'Vendor\Express\Carriers\ExpressPriority',
        'days' => '1-2',
        'max_weight' => 30.0,
    ],
];
```

- **One class, several rates:** one admin section, one enable toggle, one title and one cart-rule condition for every service; the services are fixed in code.
- **One class per service:** each service has its own section, toggle, rate fields and cart-rule condition. Choose it when each service needs its own settings, and share the rate-building code in a base class.

### Region, Option and API-Based Carriers

These follow the same rules: structural data can live here as custom keys, anything the merchant must change needs a `system.php` field, and the decision is made in `calculate()` or `isAvailable()` from the cart.

- **By region:** read the destination from `Cart::getCart()->shipping_address` (`country`, `state` and `postcode`, the only address fields the cart page's shipping estimator provides), and return `false` for a destination you don't serve, or override `isAvailable()` as shown in [Understanding the Carrier Class](./understanding-carrier-class.md#availability-beyond-the-toggle).
- **By service option:** the shipping step only lets the customer choose a rate, so offer each combination (with or without insurance, say) as a rate of its own.
- **From an API:** rates are collected on every save of the address step, again when the method is saved, and by the cart page's shipping estimator. `collectRates()` doesn't catch exceptions, so a failing request fails the checkout request. Cache the courier's answer, set a timeout, and return `false` or a fallback rate when the API doesn't answer.

```php
'fedex_integration' => [
    'code' => 'fedex_integration',
    'title' => 'FedEx Express',
    'class' => 'Vendor\FedEx\Carriers\FedExIntegration',
    'services' => [
        'FEDEX_GROUND' => 'FedEx Ground',
        'FEDEX_2_DAY' => 'FedEx 2Day',
        'PRIORITY_OVERNIGHT' => 'FedEx Priority Overnight',
    ],
    'timeout' => 30,
    'fallback_rate' => '24.99',
],
```

The service list and timeout are developer settings; the account number and API secret belong in `password` fields in `system.php`, so each channel can hold its own.

## Things to Watch

- **Define the defaults a carrier needs** (`active`, `title`, `default_rate`, `type`) here, so it works before an admin saves anything.
- **Ship the method disabled** (`'active' => false`) when it can't quote until the store owner enters a rate or credentials, and never ship a placeholder rate a customer could be charged.
- **Use descriptive codes.** The code is what an admin sees among cart-rule conditions and what is stored in `cart_shipping_rates.carrier`, so avoid abbreviations such as `ped`.
- **Call `env()` only in this file.** It is cached with the application configuration; called from the carrier class, it returns `null` once the configuration is cached.
- **Write titles and descriptions for the customer.** They are what the shipping step shows, so say what the customer gets, such as "Express Delivery (1-2 Business Days)".

## Next Step

Next, see what the carrier class inherits and how `calculate()` builds a rate.

**Continue to:** [Understanding the Carrier Class](./understanding-carrier-class.md)

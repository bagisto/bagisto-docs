# Understanding Carrier Class Implementation

The carrier class contains your shipping method's business logic. It has one main job: implement the `calculate()` method to determine shipping rates.

::: info What You'll Learn
This guide covers:
- Simple carrier class structure
- What `AbstractShipping` gives you
- The `calculate()` method implementation
- Basic pricing patterns
:::

## Basic Carrier Class Structure

Every shipping method extends `Webkul\Shipping\Carriers\AbstractShipping` and implements one abstract method:

**File:** `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Carriers;

use Webkul\Checkout\Models\CartShippingRate;
use Webkul\Shipping\Carriers\AbstractShipping;

class CustomExpressShipping extends AbstractShipping
{
    /**
     * Shipping method carrier code.
     *
     * @var string
     */
    protected $code = 'custom_express_shipping';

    /**
     * Shipping method code.
     *
     * @var string
     */
    protected $method = 'custom_express_shipping_custom_express_shipping';

    /**
     * Calculate the rate for the current cart.
     *
     * @return CartShippingRate|false
     */
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
        $rate->method_description = $this->getConfigData('description');
        $rate->price = core()->convertPrice($this->getConfigData('default_rate'));
        $rate->base_price = $this->getConfigData('default_rate');

        return $rate;
    }
}
```

## What `AbstractShipping` provides

**File:** `packages/Webkul/Shipping/src/Carriers/AbstractShipping.php`

| Member | Purpose |
|---|---|
| `protected $code` | The carrier code. `getCode()` throws `CarrierCodeException` when it is empty, so every carrier must set it |
| `protected $method` | The method code the checkout posts back. `getMethod()` falls back to `{code}_{code}` when unset; core's carriers set it explicitly (`flatrate_flatrate`, `free_free`) |
| `calculate()` | Abstract. Returns a `CartShippingRate`, an array of them, or `false` |
| `isAvailable()` | Returns the `active` setting. Called by `calculate()` in core carriers, and **also called on its own** by `Shipping::getShippingMethods()`, so put availability logic here rather than only inside `calculate()`. Cart-rule conditions list every configured carrier regardless of it |
| `getTitle()`, `getDescription()` | The `title` and `description` settings |
| `getConfigData($field)` | `core()->getConfigData('sales.carriers.{code}.{field}')` |

There is no `getCart()` on the carrier. Read the cart through the facade, as core does:

```php
use Webkul\Checkout\Facades\Cart;

$cart = Cart::getCart();
```

## Understanding the `calculate()` Method

`calculate()` is called by `Webkul\Shipping\Shipping::collectRates()` for every carrier in `config('carriers')` whenever the checkout needs rates, which happens only for a cart that contains stockable items. It returns:

- a `CartShippingRate` for one option,
- an **array** of `CartShippingRate` for several options from one carrier (they are grouped under the same `carrier_title` at checkout),
- `false` when the method does not apply.

Fill in every column the storefront reads:

| Property | Value |
|---|---|
| `carrier` | `$this->getCode()` |
| `carrier_title` | The carrier's display name |
| `method` | `$this->getMethod()`. This string is what the customer's choice is saved as, and `Cart::saveShippingMethod()` rejects a value no collected rate carries |
| `method_title`, `method_description` | Shown on the shipping step |
| `base_price` | The rate in the base currency |
| `price` | The rate in the current channel currency: `core()->convertPrice($basePrice)` |

`Shipping::saveAllShippingRates()` copies `price` and `base_price` into `price_incl_tax` and `base_price_incl_tax` (the cart applies shipping tax afterwards) and persists rates only once the cart has a shipping address.

::: warning Do not set `price` equal to `base_price`
On a store selling in more than one currency, the two differ. Compute the base-currency amount and convert it; setting both to the same number shows the wrong price the moment a shopper switches currency.
:::

## Simple Pricing Examples

Each example is a complete `calculate()` using the helper below to build the rate object:

```php
/**
 * Build a rate carrying the given base-currency price.
 */
protected function rate(float $basePrice): CartShippingRate
{
    $rate = new CartShippingRate;

    $rate->carrier = $this->getCode();
    $rate->carrier_title = $this->getConfigData('title');
    $rate->method = $this->getMethod();
    $rate->method_title = $this->getConfigData('title');
    $rate->method_description = $this->getConfigData('description');
    $rate->price = core()->convertPrice($basePrice);
    $rate->base_price = $basePrice;

    return $rate;
}
```

### Fixed Rate Shipping

Simple flat rate shipping - same price for every order:

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    return $this->rate((float) $this->getConfigData('default_rate'));
}
```

### Weight-Based Pricing

Weight lives on the cart items (`total_weight` and `base_total_weight`), not on the cart, so sum it:

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $weight = Cart::getCart()->items
        ->filter(fn ($item) => $item->getTypeInstance()->isStockable())
        ->sum('total_weight');

    return $this->rate(5.00 + ($weight * 2.50));
}
```

### Free Shipping Above a Threshold

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();

    return $this->rate($cart->base_sub_total >= 100 ? 0 : 9.99);
}
```

Compare against `base_sub_total`, which is in the base currency like the threshold.

### Availability Beyond the Toggle

To hide the method for some carts (a country, a weight limit), override `isAvailable()` so every caller agrees:

```php
public function isAvailable()
{
    $cart = Cart::getCart();

    return $this->getConfigData('active')
        && $cart?->shipping_address?->country === 'US';
}
```

## What's Next?

Now that you understand the carrier class, let's explore system configuration:

**📖 [Understanding System Configuration →](./understanding-system-configuration.md)**
Learn how to create admin interfaces for configuring your shipping method.

Your carrier class is now ready to handle shipping calculations. The next section shows you how to create admin configuration interfaces.

# Understanding Carrier Class Implementation

The carrier class contains your shipping method's business logic. It has one main job: implement the `calculate()` method to determine shipping rates.

::: info What You'll Learn
This guide covers:
- Simple carrier class structure
- The `calculate()` method implementation
- Basic pricing patterns
:::

## Basic Carrier Class Structure

Every shipping method extends `AbstractShipping` and implements one key method:

**File:** `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Carriers;

use Webkul\Shipping\Carriers\AbstractShipping;
use Webkul\Checkout\Models\CartShippingRate;

class CustomExpressShipping extends AbstractShipping
{
    protected $code = 'custom_express_shipping';

    public function calculate()
    {
        if (! $this->getConfigData('active')) {
            return false;
        }

        $rate = new CartShippingRate;
        $rate->carrier = $this->getCode();
        $rate->carrier_title = $this->getConfigData('title');
        $rate->method = $this->getCode();
        $rate->method_title = $this->getConfigData('title');
        $rate->price = $this->getConfigData('default_rate');
        $rate->base_price = $rate->price;

        return $rate;
    }
}
```

## Understanding the `calculate()` Method

The `calculate()` method is the only method you need to implement. It either returns a shipping rate or `false`:

```php
public function calculate()
{
    // return false if shipping is not available
    if (! $this->getConfigData('active')) {
        return false;
    }

    // create and return shipping rate
    $rate = new CartShippingRate;
    $rate->carrier = $this->getCode();
    $rate->carrier_title = $this->getConfigData('title');
    $rate->method = $this->getCode();
    $rate->method_title = $this->getConfigData('title');
    $rate->price = $this->getConfigData('default_rate');
    $rate->base_price = $rate->price;

    return $rate;
}
```

## Simple Pricing Examples

Here are common pricing patterns you can implement in your `calculate()` method. Each example shows a complete method implementation:

### Fixed Rate Shipping

Simple flat rate shipping - same price for every order:

```php
public function calculate()
{
    if (! $this->getConfigData('active')) {
        return false;
    }

    $rate = new CartShippingRate;
    $rate->carrier = $this->getCode();
    $rate->carrier_title = $this->getConfigData('title');
    $rate->method = $this->getCode();
    $rate->method_title = $this->getConfigData('title');
    $rate->price = 15.99; // Fixed price
    $rate->base_price = $rate->price;

    return $rate;
}
```

### Weight-Based Pricing

Calculate shipping cost based on cart weight - base rate plus cost per kilogram:

```php
public function calculate()
{
    if (! $this->getConfigData('active')) {
        return false;
    }

    $cart = $this->getCart();
    $price = 5.00 + ($cart->weight * 2.50); // base + per kg

    $rate = new CartShippingRate;
    $rate->carrier = $this->getCode();
    $rate->carrier_title = $this->getConfigData('title');
    $rate->method = $this->getCode();
    $rate->method_title = $this->getConfigData('title');
    $rate->price = $price;
    $rate->base_price = $rate->price;

    return $rate;
}
```

### Free Shipping Example

Offer free shipping when cart total reaches a threshold, otherwise charge standard rate:

```php
public function calculate()
{
    if (! $this->getConfigData('active')) {
        return false;
    }

    $cart = $this->getCart();
    $price = $cart->sub_total >= 100 ? 0 : 9.99; // free over $100

    $rate = new CartShippingRate;
    $rate->carrier = $this->getCode();
    $rate->carrier_title = $this->getConfigData('title');
    $rate->method = $this->getCode();
    $rate->method_title = $this->getConfigData('title');
    $rate->price = $price;
    $rate->base_price = $rate->price;

    return $rate;
}
```

## What's Next?

Now that you understand the carrier class, let's explore system configuration:

**📖 [Understanding System Configuration →](./understanding-system-configuration.md)**
Learn how to create admin interfaces for configuring your shipping method.

Your carrier class is now ready to handle shipping calculations. The next section shows you how to create admin configuration interfaces.

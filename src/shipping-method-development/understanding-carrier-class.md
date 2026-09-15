# Understanding the Carrier Class

A carrier class extends `Webkul\Shipping\Carriers\AbstractShipping` and has one job: `calculate()` returns the rate for the current cart. You built one in [Creating Your First Shipping Method](./create-your-first-shipping-method.md#step-3-create-the-carrier-class), at `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`. This page covers what the base class gives it, when `calculate()` runs, and common pricing patterns.

## What the Base Class Provides

**File:** `packages/Webkul/Shipping/src/Carriers/AbstractShipping.php`

| Member | Purpose |
|---|---|
| `protected $code` | The carrier code. `getCode()` throws `CarrierCodeException` when it is empty, so every carrier must set it |
| `protected $method` | The method code the checkout posts back. `getMethod()` falls back to `{code}_{code}` when unset; core's carriers set it explicitly (`flatrate_flatrate`, `free_free`) |
| `calculate()` | Abstract. Returns a `CartShippingRate`, an array of them, or `false` |
| `isAvailable()` | Returns the `active` setting. Put availability logic here and call it first in `calculate()`, as core's carriers do; `Shipping::getShippingMethods()` also uses it, though no core screen calls that method. Cart-rule conditions list every configured carrier regardless of it |
| `getTitle()`, `getDescription()` | The `title` and `description` settings |
| `getConfigData($field)` | `core()->getConfigData('sales.carriers.{code}.{field}')` |

There is no `getCart()` on the carrier. Read the cart through the facade, as core does:

```php
use Webkul\Checkout\Facades\Cart;

$cart = Cart::getCart();
```

## Understanding the `calculate()` Method

`calculate()` is called by `Webkul\Shipping\Shipping::collectRates()` for every carrier in `config('carriers')` whenever rates are needed: by the checkout, only for a cart that contains stockable items, and by the cart page's shipping estimator. It returns:

- a `CartShippingRate` for one option,
- an **array** of `CartShippingRate` for several options from one carrier (they are grouped under the same `carrier_title` at checkout),
- `false` when the method doesn't apply.

The checkout collects rates each time the customer saves the address step, and `Cart::saveShippingMethod()` collects them once more through `Shipping::isMethodCodeExists()` to validate the choice. The estimator (`Shop\Http\Controllers\API\CartController::estimateShippingMethods()`) collects them from an unsaved address that holds only `country`, `state` and `postcode`, so don't rely on the street, the city or the address id. Keep `calculate()` cheap to repeat and free of side effects. Nothing on that path catches an exception, so one thrown here fails the checkout request.

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

::: warning Don't Set `price` Equal to `base_price`
On a store selling in more than one currency, the two differ. Compute the base-currency amount and convert it; setting both to the same number shows the wrong price the moment a shopper switches currency.
:::

## Simple Pricing Examples

Each example is a complete `calculate()` using the helper below to build the rate object. The examples that read the cart assume `use Webkul\Checkout\Facades\Cart;` at the top of the class:

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

Simple flat rate shipping, the same price for every order:

```php
/**
 * Charge the configured rate once per order.
 *
 * @return CartShippingRate|false
 */
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
/**
 * Charge a base fee plus a price per unit of weight that ships.
 *
 * @return CartShippingRate|false
 */
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
/**
 * Ship for free once the subtotal reaches the threshold.
 *
 * @return CartShippingRate|false
 */
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

To hide the method for some carts (a country, a weight limit), override `isAvailable()`. Every `calculate()` above starts with the `isAvailable()` check, so it then returns `false` for those carts:

```php
/**
 * Offer the method only for shipping addresses in the United States.
 *
 * @return bool
 */
public function isAvailable()
{
    $cart = Cart::getCart();

    return $this->getConfigData('active')
        && $cart?->shipping_address?->country === 'US';
}
```

## Related Pages

- [System Configuration](../package-development/system-configuration.md): every field type, item key and validation rule.
- [Testing with Pest](../advanced/testing-with-pest.md#writing-tests-for-a-package): core's `packages/Webkul/Shipping/tests/Unit/CarriersTest.php` saves carrier settings with `setConfig()` and calls `(new FlatRate)->calculate()`; the same pattern tests your carrier.
- [Event Listeners](../advanced/event-listeners.md): `Cart::collectTotals()` dispatches `checkout.cart.collect.totals.before` and `.after` around every totals calculation, shipping included.
- [Payment Method Development](../payment-method-development/getting-started.md): the checkout step that follows shipping.

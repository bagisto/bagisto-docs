# Creating Your First Shipping Method

This page builds the `Webkul\CustomExpressShipping` package: a carrier that charges a configurable rate per order or per item, with its settings in the admin.

::: tip Package Generator
The [Package Generator](../tools/package-generator.md#payment-and-shipping-method-packages) can scaffold a shipping method package for you. This page builds it by hand, so you see every file and how it's registered.
:::

## What You'll Build

```text
packages/Webkul/CustomExpressShipping
└── src
    ├── Carriers
    │   └── CustomExpressShipping.php
    ├── Config
    │   ├── carriers.php
    │   └── system.php
    └── Providers
        └── CustomExpressShippingServiceProvider.php
```

<a id="method-2-manual-setup-complete-understanding"></a>

## Step 1: Create the Package Structure

From the Bagisto root, create the package's folders:

```bash
mkdir -p packages/Webkul/CustomExpressShipping/src/{Carriers,Config,Providers}
```

## Step 2: Add the Carrier Configuration

This file registers the carrier and holds its default settings.

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

Core reads only `class` from this file when it collects rates. The other keys are defaults that the carrier's `getConfigData()` returns until an admin saves a value, which is why the method is offered as soon as the package is registered.

## Step 3: Create the Carrier Class

`calculate()` returns the rate for the current cart, or `false` when the method doesn't apply.

**File:** `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Carriers;

use Webkul\Checkout\Facades\Cart;
use Webkul\Checkout\Models\CartShippingRate;
use Webkul\Shipping\Carriers\AbstractShipping;

class CustomExpressShipping extends AbstractShipping
{
    /**
     * Shipping method carrier code, must match the carriers.php key.
     *
     * @var string
     */
    protected $code = 'custom_express_shipping';

    /**
     * Shipping method code, the value the checkout posts back.
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

        $cart = Cart::getCart();

        $cartShippingRate = new CartShippingRate;

        $cartShippingRate->carrier = $this->getCode();
        $cartShippingRate->carrier_title = $this->getConfigData('title');
        $cartShippingRate->method = $this->getMethod();
        $cartShippingRate->method_title = $this->getConfigData('title');
        $cartShippingRate->method_description = $this->getConfigData('description');

        $baseRate = $this->getConfigData('default_rate');

        $finalRate = $baseRate;

        if ($this->getConfigData('type') === 'per_unit') {
            $totalItems = 0;

            foreach ($cart->items as $item) {
                if ($item->getTypeInstance()->isStockable()) {
                    $totalItems += $item->quantity;
                }
            }

            $finalRate = $baseRate * $totalItems;
        }

        $cartShippingRate->price = core()->convertPrice($finalRate);
        $cartShippingRate->base_price = $finalRate;

        return $cartShippingRate;
    }
}
```

The class has the shape of core's `Webkul\Shipping\Carriers\FlatRate`. `base_price` is in the base currency and `price` is converted to the channel currency with `core()->convertPrice()`. Per-item pricing counts only the items that ship, asking each cart item's own type instance, which is right for a configurable variant.

## Step 4: Add the System Configuration

This section gives the carrier its settings under **Configure → Sales → Shipping Methods**.

**File:** `packages/Webkul/CustomExpressShipping/src/Config/system.php`

```php
<?php

return [
    [
        'key' => 'sales.carriers.custom_express_shipping',
        'name' => 'Custom Express Shipping',
        'info' => 'Configure the Custom Express Shipping method settings.',
        'sort' => 3,
        'fields' => [
            [
                'name' => 'active',
                'title' => 'Enabled',
                'type' => 'boolean',
                'channel_based' => true,
                'locale_based' => false,
            ],
            [
                'name' => 'title',
                'title' => 'Method Title',
                'type' => 'text',
                'depends' => 'active:1',
                'validation' => 'required_if:active,1',
                'channel_based' => true,
                'locale_based' => true,
            ],
            [
                'name' => 'description',
                'title' => 'Description',
                'type' => 'textarea',
                'depends' => 'active:1',
                'channel_based' => true,
                'locale_based' => true,
            ],
            [
                'name' => 'default_rate',
                'title' => 'Base Rate',
                'type' => 'text',
                'depends' => 'active:1',
                'validation' => 'required_if:active,1|numeric|min:0',
                'channel_based' => true,
                'locale_based' => false,
            ],
            [
                'name' => 'type',
                'title' => 'Pricing Type',
                'type' => 'select',
                'depends' => 'active:1',
                'options' => [
                    [
                        'title' => 'Per Order (Flat Rate)',
                        'value' => 'per_order',
                    ],
                    [
                        'title' => 'Per Item',
                        'value' => 'per_unit',
                    ],
                ],
                'channel_based' => true,
                'locale_based' => false,
            ],
        ],
    ],
];
```

The `key` must be `sales.carriers.` followed by the carrier code, and `info` is required. Keep the boolean `active` field: saving the Shipping Methods page reads it from every carrier and refuses to save when none is on. [Understanding Carrier Configuration](./understanding-carrier-configuration.md#system-configuration) explains `sort`, `depends` and the validation rules.

## Step 5: Create the Service Provider

The provider merges both configuration files.

**File:** `packages/Webkul/CustomExpressShipping/src/Providers/CustomExpressShippingServiceProvider.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Providers;

use Illuminate\Support\ServiceProvider;

class CustomExpressShippingServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/carriers.php',
            'carriers'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/system.php',
            'core'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void {}
}
```

`carriers.php` joins `config('carriers')`, which the checkout reads; `system.php` joins `config('core')`, which the admin configuration reads.

## Step 6: Register the Package

Add the namespace to the root `composer.json` and the provider to `bootstrap/providers.php`. [Package Development](../package-development/getting-started.md#autoload-the-namespace) explains both files.

**File:** `composer.json`

```json
{
  "autoload": {
    "psr-4": {
      "Webkul\\CustomExpressShipping\\": "packages/Webkul/CustomExpressShipping/src"
    }
  }
}
```

The block shows only the entry to add; keep the others.

**File:** `bootstrap/providers.php`

```php{4,11}
<?php

use App\Providers\AppServiceProvider;
use Webkul\CustomExpressShipping\Providers\CustomExpressShippingServiceProvider;

return [
    AppServiceProvider::class,

    // ...

    CustomExpressShippingServiceProvider::class,
];
```

Then regenerate the autoloader and clear the cached configuration:

```bash
composer dump-autoload

php artisan optimize:clear
```

## Test It

1. In the admin, open **Configure → Sales → Shipping Methods**. A **Custom Express Shipping** section follows Free Shipping and Flat Rate.
2. Add a simple product to the cart, go to checkout and enter a shipping address. **Express Delivery (1-2 Days)** is offered at the base rate of 19.99, from the defaults in `carriers.php`.
3. Set **Pricing Type** to **Per Item** and save. Back on the shipping step, the rate is the base rate times the quantity of items that ship.
4. Check out a cart that holds only a virtual or downloadable product. The checkout skips the shipping step, because it collects rates only for a cart with stockable items.
5. Cover `calculate()` with a Pest test: core's `packages/Webkul/Shipping/tests/Unit/CarriersTest.php` saves carrier settings with `setConfig()` and calls `calculate()`; see [Testing with Pest](../advanced/testing-with-pest.md#writing-tests-for-a-package).

## Things to Watch

- **The checkout asks for rates more than once,** and the cart page's shipping estimator asks with only a country, state and postcode. Keep `calculate()` cheap and free of side effects; see [Understanding the Carrier Class](./understanding-carrier-class.md#understanding-the-calculate-method).
- **A carrier is created with `new`,** not through the container, so constructor injection fails. Resolve services with `app()` inside `calculate()`.
- **Use a code of your own.** `mergeConfigFrom()` keeps keys that are already set, so reusing `flatrate` or `free` leaves core's carrier in place. To change a core carrier instead, see [Understanding Carrier Configuration](./understanding-carrier-configuration.md#how-bagisto-uses-the-configuration).
- **A saved setting applies to one channel,** and a translated field such as the title to one locale. Saving the section replaces the `carriers.php` defaults only for the channel and locale selected in the switchers.

## Next Step

The carrier works. Next, see every key `carriers.php` and `system.php` accept and how a setting is resolved.

**Continue to:** [Understanding Carrier Configuration](./understanding-carrier-configuration.md)

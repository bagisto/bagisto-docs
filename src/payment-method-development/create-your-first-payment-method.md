# Creating Your First Payment Method

This page builds the `Webkul\CustomStripePayment` package: a payment method with a logo and a sort order in the admin, which places the order as soon as the customer confirms.

::: tip Package Generator
The [Package Generator](../tools/package-generator.md#payment-and-shipping-method-packages) can scaffold a payment method package for you. This page builds it by hand, so you see every file and how it's registered.
:::

## What You'll Build

```text
packages/Webkul/CustomStripePayment
└── src
    ├── Config
    │   ├── payment-methods.php
    │   └── system.php
    ├── Payment
    │   └── CustomStripePayment.php
    └── Providers
        └── CustomStripePaymentServiceProvider.php
```

<a id="method-2-manual-setup-complete-understanding"></a>

## Step 1: Create the Package Structure

From the Bagisto root, create the package's folders:

```bash
mkdir -p packages/Webkul/CustomStripePayment/src/{Config,Payment,Providers}
```

## Step 2: Add the Payment Method Configuration

This file registers the payment method and holds its default settings.

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

Core reads only `class` from this file when it lists payment methods. The other keys are defaults that the class's `getConfigData()` returns until an admin saves a value, which is why the method is offered as soon as the package is registered.

## Step 3: Create the Payment Class

The class names the method's code, says where to send the customer, and gives the logo shown at checkout.

**File:** `packages/Webkul/CustomStripePayment/src/Payment/CustomStripePayment.php`

```php
<?php

namespace Webkul\CustomStripePayment\Payment;

use Illuminate\Support\Facades\Storage;
use Webkul\Payment\Payment\Payment;

class CustomStripePayment extends Payment
{
    /**
     * Payment method code, must match the payment-methods.php key.
     *
     * @var string
     */
    protected $code = 'custom_stripe_payment';

    /**
     * Get the redirect url.
     *
     * @return string|null
     */
    public function getRedirectUrl()
    {
        return null;
    }

    /**
     * Get the payment method image shown at checkout.
     *
     * @return string
     */
    public function getImage()
    {
        $url = $this->getConfigData('image');

        return $url ? Storage::url($url) : bagisto_asset('images/stripe.png', 'shop');
    }
}
```

`getRedirectUrl()` is abstract on the base class; returning `null` keeps the customer on the checkout and has the order created at once. Returning a URL means writing the return leg that creates the order, which [Understanding the Payment Class](./understanding-payment-class.md#the-redirect-flow) walks through. The checkout draws `getImage()` for every method, so the fallback, the Stripe logo the Shop theme ships, avoids an empty image until a logo is uploaded.

## Step 4: Add the System Configuration

This section gives the method its settings under **Configure → Sales → Payment Methods**.

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
            [
                'name' => 'title',
                'title' => 'Title',
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

The `key` must be `sales.payment_methods.` followed by the method code, and `info` is required. Keep the boolean `active` field: saving the Payment Methods page reads it from every method and refuses to save when none is on. [Understanding Payment Configuration](./understanding-payment-configuration.md#system-configuration) explains the other fields and the validation rules.

## Step 5: Create the Service Provider

The provider merges both configuration files.

**File:** `packages/Webkul/CustomStripePayment/src/Providers/CustomStripePaymentServiceProvider.php`

```php
<?php

namespace Webkul\CustomStripePayment\Providers;

use Illuminate\Support\ServiceProvider;

class CustomStripePaymentServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/payment-methods.php',
            'payment_methods'
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

`payment-methods.php` joins `config('payment_methods')`, which the checkout reads; `system.php` joins `config('core')`, which the admin configuration reads.

## Step 6: Register the Package

Add the namespace to the root `composer.json` and the provider to `bootstrap/providers.php`. [Package Development](../package-development/getting-started.md#autoload-the-namespace) explains both files.

**File:** `composer.json`

```json
{
  "autoload": {
    "psr-4": {
      "Webkul\\CustomStripePayment\\": "packages/Webkul/CustomStripePayment/src"
    }
  }
}
```

The block shows only the entry to add; keep the others.

**File:** `bootstrap/providers.php`

```php{4,11}
<?php

use App\Providers\AppServiceProvider;
use Webkul\CustomStripePayment\Providers\CustomStripePaymentServiceProvider;

return [
    AppServiceProvider::class,

    // ...

    CustomStripePaymentServiceProvider::class,
];
```

Then regenerate the autoloader and clear the cached configuration:

```bash
composer dump-autoload

php artisan optimize:clear
```

## Test It

1. In the admin, open **Configure → Sales → Payment Methods**. A **Custom Stripe Payment** section is listed with the core methods.
2. Add a product to the cart and go to checkout. After the address step, and the shipping step for a cart that ships, **Credit Card (Stripe)** is offered with the Stripe logo.
3. Choose it and place the order. The order is created at once and the customer lands on the success page, because `getRedirectUrl()` returns `null`.
4. Open the order in the admin. Its payment method reads **Credit Card (Stripe)**.
5. Cover the method with a Pest test: `Webkul\Payment\Tests\Concerns\ProvidePaymentHelpers::createCartWithItems($paymentMethod)` builds an addressed customer cart paid by the method you name; see [Testing with Pest](../advanced/testing-with-pest.md#test-benches).

## Things to Watch

- **Declare `$code`.** The base class doesn't, so a class without it makes `getCode()` throw as soon as the checkout lists payment methods, and the payment step fails for every method.
- **Use a code of your own.** `mergeConfigFrom()` keeps keys that are already set, so reusing `stripe` or `cashondelivery` leaves core's class in place. To change a core method instead, see [Understanding Payment Configuration](./understanding-payment-configuration.md#things-to-watch).
- **A saved setting applies to one channel,** and a translated field such as the title to one locale. Saving the section replaces the `payment-methods.php` defaults only for the channel and locale selected in the switchers.

## Next Step

The method works. Next, see what each configuration key does and how a setting is resolved.

**Continue to:** [Understanding Payment Configuration](./understanding-payment-configuration.md)

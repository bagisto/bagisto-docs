# Building Your Subscription Product Type

This page turns the basic `Subscription` class into a subscription a customer can buy: they pick a frequency on the product page, the frequency travels with the cart item into the order, and the checkout skips shipping. The type records the frequency; it doesn't bill renewals.

## What You'll Build

The package from [Creating Your First Product Type](./create-your-first-product-type.md), with a new view and three files changed:

```text
packages/Webkul/SubscriptionProduct
└── src
    ├── Config
    │   └── product_types.php
    ├── Providers
    │   └── SubscriptionServiceProvider.php          # changed: views and a listener
    ├── Resources
    │   ├── lang
    │   │   └── en
    │   │       └── app.php                          # changed: frequency strings
    │   └── views
    │       └── shop
    │           └── products
    │               └── frequency.blade.php          # new: the product page field
    └── Type
        └── Subscription.php                         # changed: shipping, cart rows, options
```

## Step 1: Enhance the Subscription Class

The class stops the type from shipping, requires a frequency, and keeps each frequency on its own cart line. Replace it with this version:

**File:** `packages/Webkul/SubscriptionProduct/src/Type/Subscription.php`

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Helpers\Indexers\Price\Simple as SimpleIndexer;
use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    /**
     * The frequencies a customer can subscribe at.
     */
    public const FREQUENCIES = ['weekly', 'monthly', 'yearly'];

    /**
     * Subscriptions are not shipped.
     *
     * @var bool
     */
    protected $isStockable = false;

    /**
     * Let customers choose how many subscriptions they buy.
     *
     * @var bool
     */
    protected $showQuantityBox = true;

    /**
     * Physical dimensions do not apply to a subscription.
     *
     * @var array
     */
    protected $skipAttributes = [
        'length',
        'width',
        'height',
        'weight',
    ];

    /**
     * Get the price indexer for this product type.
     */
    public function getPriceIndexer(): SimpleIndexer
    {
        return app(SimpleIndexer::class);
    }

    /**
     * Prepare the cart rows, or return an error message when no valid frequency was chosen.
     *
     * @param  array  $data
     * @return array|string
     */
    public function prepareForCart($data)
    {
        if (! in_array($data['subscription_frequency'] ?? null, self::FREQUENCIES, true)) {
            return trans('subscription::app.checkout.cart.missing-frequency');
        }

        return parent::prepareForCart($data);
    }

    /**
     * Keep the request data on the cart item and show the frequency as an option.
     *
     * @param  array  $data
     * @return array
     */
    public function getAdditionalOptions($data)
    {
        if (empty($data['subscription_frequency'])) {
            return $data;
        }

        $data['attributes'] = [
            [
                'attribute_name' => trans('subscription::app.shop.frequency'),
                'option_label' => trans('subscription::app.frequencies.'.$data['subscription_frequency']),
            ],
        ];

        return $data;
    }

    /**
     * Treat the same product at another frequency as a separate cart item.
     *
     * @param  array  $options1
     * @param  array  $options2
     * @return bool
     */
    public function compareOptions($options1, $options2)
    {
        if (! parent::compareOptions($options1, $options2)) {
            return false;
        }

        return ($options1['subscription_frequency'] ?? null) === ($options2['subscription_frequency'] ?? null);
    }
}
```

| Member | Effect |
|---|---|
| `FREQUENCIES` | The allowed values. The product page field and the cart check both read it |
| `$isStockable = false` | `$cart->haveStockableItems()` is false for a cart of subscriptions, so the checkout asks for no shipping address or method, and cash on delivery, offered only when every item is stockable, isn't listed. Order items of the type are never shipped |
| `$showQuantityBox = true` | The product page shows its quantity box |
| `$skipAttributes` | Hides the dimension and weight fields on the admin edit page and leaves them out of the form's validation |
| `prepareForCart()` | Refuses a request without a valid frequency. `Cart::addProduct()` turns the returned string into an exception, and the storefront shows the message |
| `getAdditionalOptions()` | `AbstractType::prepareForCart()` stores its result as the cart item's `additional`. The `attributes` list is what the storefront cart (through `Shop\Http\Resources\CartItemResource`) and the admin order view print under the item, the same shape core's `Simple` type uses for customizable options |
| `compareOptions()` | `Cart::getItemByProduct()` uses it to decide whether an add-to-cart updates an existing line. Without the override, adding the product at a second frequency would add to the first line's quantity and overwrite its frequency |

`haveSufficientQuantity()` and `isSaleable()` keep the base behaviour, so stock never limits a sale; [Understanding the AbstractType Class](./understanding-abstract-type-class.md#key-methods-to-understand) explains each method.

## Step 2: Add the Translations

The type now needs labels for the field, the frequencies and the error. Replace the language file:

**File:** `packages/Webkul/SubscriptionProduct/src/Resources/lang/en/app.php`

```php
<?php

return [
    'type' => [
        'subscription' => 'Subscription',
    ],

    'shop' => [
        'frequency' => 'Frequency',
    ],

    'frequencies' => [
        'weekly' => 'Weekly',
        'monthly' => 'Monthly',
        'yearly' => 'Yearly',
    ],

    'checkout' => [
        'cart' => [
            'missing-frequency' => 'Please choose how often you want this subscription.',
        ],
    ],
];
```

## Step 3: Add the Frequency Field to the Product Page

The product page includes option partials only for core's types, so the field is added through a [view render event](../advanced/view-render-events.md#product-page-events). `bagisto.shop.products.short_description.after` is dispatched inside the page's add-to-cart form and passes the product; the form posts every named field to the cart, and `Cart::addProduct()` hands the request to `prepareForCart()`.

**File:** `packages/Webkul/SubscriptionProduct/src/Resources/views/shop/products/frequency.blade.php`

```blade
@if ($product->type === 'subscription')
    <x-shop::form.control-group class="mt-8 max-sm:mt-4">
        <x-shop::form.control-group.label class="required">
            @lang('subscription::app.shop.frequency')
        </x-shop::form.control-group.label>

        <x-shop::form.control-group.control
            type="select"
            name="subscription_frequency"
            value="monthly"
            rules="required"
            :label="trans('subscription::app.shop.frequency')"
        >
            @foreach (\Webkul\SubscriptionProduct\Type\Subscription::FREQUENCIES as $frequency)
                <option value="{{ $frequency }}">
                    @lang('subscription::app.frequencies.'.$frequency)
                </option>
            @endforeach
        </x-shop::form.control-group.control>

        <x-shop::form.control-group.error control-name="subscription_frequency" />
    </x-shop::form.control-group>
@endif
```

The event fires for every product, so the partial checks the type first. Then register the views and the listener in the provider:

**File:** `packages/Webkul/SubscriptionProduct/src/Providers/SubscriptionServiceProvider.php`

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Webkul\Theme\ViewRenderEventManager;

class SubscriptionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/product_types.php',
            'product_types'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadTranslationsFrom(dirname(__DIR__).'/Resources/lang', 'subscription');

        $this->loadViewsFrom(dirname(__DIR__).'/Resources/views', 'subscription');

        Event::listen('bagisto.shop.products.short_description.after', static function (ViewRenderEventManager $viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('subscription::shop.products.frequency');
        });
    }
}
```

`Webkul\Theme\ViewRenderEventManager` renders each added template with the event's parameters, which is where the partial's `$product` comes from. Clear the caches, and the full page cache too if it's on, so product pages are rendered again:

```bash
php artisan optimize:clear

php artisan responsecache:clear
```

## Test It

1. In the admin, create a **Subscription** product with a name, URL key and price, enable it and assign it to your channel.
2. Open its product page. The **Frequency** field sits under the short description, above the quantity box.
3. Add it to the cart at one frequency, then again at another. The cart shows two lines, each listing its frequency.
4. Go to checkout. There is no shipping step, and cash on delivery isn't offered.
5. Place the order and open it in the admin. Each item lists its frequency.
6. Run a Pest test for the type. `make()` builds a product without saving it, which is all these checks need:

   **File:** `packages/Webkul/SubscriptionProduct/tests/Feature/SubscriptionTypeTest.php`

   ```php
   <?php

   use Webkul\Product\Models\Product;

   it('does not ship subscriptions', function () {
       $product = Product::factory()->make(['type' => 'subscription']);

       expect($product->getTypeInstance()->isStockable())->toBeFalse();
   });

   it('refuses a subscription without a frequency', function () {
       $product = Product::factory()->make(['type' => 'subscription']);

       expect($product->getTypeInstance()->prepareForCart(['quantity' => 1]))
           ->toBe(trans('subscription::app.checkout.cart.missing-frequency'));
   });
   ```

   Register the package's tests as [Writing Tests for a Package](../advanced/testing-with-pest.md#writing-tests-for-a-package) describes, then run them. For tests that need saved, indexed products, mix in `ProductTestBench` and call `$this->createProduct('subscription')`, which builds a product of any type key (`createProductOfType()` accepts core types only); see [Testing with Pest](../advanced/testing-with-pest.md#test-benches).

**Add To Cart** on a category page's product card sends no frequency. The cart refuses it, and the error response carries the product's URL, so the card sends the customer to the product page to choose one.

## Things to Watch

- **This is not recurring billing.** Nothing charges the customer again, and no core package handles recurring payments: `laravel/cashier` is required in the root `composer.json`, but no core code uses it. Renewals need a payment integration of your own.
- **The frequency lives in JSON.** It is stored in `cart_items.additional` and `order_items.additional`, not in a column of its own, so reports, filters and any renewal job read it from there.
- **The price doesn't change with the frequency.** The cart charges `getFinalPrice()`, which reads the price index built by `getPriceIndexer()`. A price per frequency needs a price indexer of its own; overriding `getProductPrices()` alone changes the displayed price, not the charged one.
- **Other ways into the cart carry other data.** Reordering, from the storefront or the admin, replays the order item's `additional`, so the frequency comes with it. A wishlist item added from the product page, and a product added while creating an order in the admin, carry no frequency, so `prepareForCart()` refuses them.
- **Stock is still recorded.** `manage_stock` is on by default, so each order reserves stock for a product that has inventories, although the type never checks it. Add `manage_stock` to `$skipAttributes`, as `Downloadable` does, and the edit form saves it as off; the Inventories group stays, because `edit.blade.php` hides it only for composite types and `downloadable`. To enforce stock instead, copy `Virtual::haveSufficientQuantity()`.

## Next Step

Each new subscription order carries its frequency in its items' `additional`. To act on it, for example to record the subscription for a renewal job, listen to `checkout.order.save.after`.

**Continue to:** [Event Listeners](../advanced/event-listeners.md)

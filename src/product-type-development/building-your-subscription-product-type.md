# Building Your Subscription Product Type

Now that you understand the `AbstractType` methods, let's implement a complete subscription product type class. This guide shows you how to build a functional product type that handles subscription-specific logic.

::: info What You'll Learn
- How to implement a complete subscription product type class
- Practical usage of `AbstractType` methods with real business logic
- Adding subscription-specific attributes and handling form data
- Testing your product type implementation
:::

## From Basic to Functional

Remember your basic `Subscription` class? Let's enhance it with the `AbstractType` methods we learned about:

### Your Current Basic Class

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    public function getPriceIndexer()
    {
        return app(SimpleIndexer::class);
    }
}
```

### Enhanced Subscription Class

Let's add the key methods to make it functional:

::: tip Need to Understand the Methods?
If you're not familiar with the `AbstractType` methods we're implementing below, check out the **[Key Methods to Understand →](./understanding-abstract-type-class.md#key-methods-to-understand)** section first to learn what each method does and when to use them.
:::

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Helpers\Indexers\Price\Simple;
use Webkul\Product\Helpers\Indexers\Price\Simple as SimpleIndexer;
use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    /**
     * Subscriptions do not use inventory.
     *
     * @var bool
     */
    protected $isStockable = false;

    /**
     * Allow customers to pick how many seats they subscribe.
     *
     * @var bool
     */
    protected $showQuantityBox = true;

    /**
     * Get the price indexer for this product type.
     *
     * @return Simple
     */
    public function getPriceIndexer()
    {
        return app(SimpleIndexer::class);
    }

    /**
     * Check if the subscription is available for purchase.
     *
     * @return bool
     */
    public function isSaleable()
    {
        if (! parent::isSaleable()) {
            return false;
        }

        return (bool) $this->product->subscription_frequency;
    }

    /**
     * Check if enough subscription seats are available.
     */
    public function haveSufficientQuantity(int $qty): bool
    {
        return $qty <= $this->totalQuantity();
    }

    /**
     * Return the total number of subscription seats.
     *
     * @return int
     */
    public function totalQuantity()
    {
        return (int) ($this->product->subscription_slots ?? 0);
    }

    /**
     * Prepare subscription data for the cart.
     *
     * @param  array  $data
     * @return array|string
     */
    public function prepareForCart($data)
    {
        if (empty($data['subscription_frequency'])) {
            return trans('subscription::app.checkout.cart.missing-frequency');
        }

        $products = parent::prepareForCart($data);

        if (is_string($products)) {
            return $products;
        }

        $products[0]['additional']['subscription_frequency'] = $data['subscription_frequency'];
        $products[0]['additional']['subscription_start_date'] = $data['start_date'] ?? now()->addDay()->format('Y-m-d');

        return $products;
    }
}
```

Two details worth noticing:

- `isStockable` and `showQuantityBox` are set as **properties** because the base methods just return them; overriding the method is only needed when the answer depends on the product.
- `prepareForCart()` stays untyped and checks the parent's result, because the cart treats a string return as an error message (core's `Simple` type returns one when required customizable options are missing) and a type that extends `Simple` inherits that. `subscription_frequency` and `subscription_slots` are assumed to be attributes you have added to the attribute family; `AbstractType::update()` saves them like any other attribute.

## Testing Your Subscription Product Type

Now test your enhanced subscription product type:

### Test in Tinker
```bash
php artisan tinker

# Test your methods
>>> $product = \Webkul\Product\Models\Product::where('type', 'subscription')->first()
>>> $subscription = $product->getTypeInstance()

# Test each method
>>> $subscription->isStockable()        // Should return false
>>> $subscription->showQuantityBox()    // Should return true
>>> $subscription->isSaleable()         // Should return true (if product is active)
>>> $subscription->haveSufficientQuantity(5)  // Should return true

# Test cart preparation
>>> $cartData = $subscription->prepareForCart(['quantity' => 2, 'subscription_frequency' => 'monthly'])
>>> $cartData[0]['additional']  // Should show subscription data
```

### Test in Admin
1. **Go to Admin → Catalog → Products**
2. **Create a new subscription product**
3. **Verify the quantity box appears on frontend**
4. **Test adding to cart with different quantities**

### Test with Pest

A product-type test is a plain feature test; the `ProductTestBench` trait creates indexed products of every core type, and a custom type is created the same way through the factory by passing `type`:

```php
use Webkul\Product\Models\Product;

it('keeps subscription products out of stock checks', function () {
    $product = Product::factory()->create(['type' => 'subscription']);

    expect($product->getTypeInstance()->isStockable())->toBeFalse();
});
```

See [Testing Workflow](../advanced/testing.md) for the suite layout.

## What You've Accomplished

Congratulations! You've successfully completed the product type development journey and built a complete subscription product type for Bagisto:

### ✅ Complete Product Type System
- **Configuration**: `Config/product_types.php` registers your subscription type
- **Service Provider**: `SubscriptionServiceProvider` loads your configuration  
- **Product Type Class**: `Subscription` implements custom business logic
- **Integration**: Works seamlessly with Bagisto's admin and frontend

### ✅ Key Skills Mastered
- **Product Type Creation**: Built a working product type from scratch
- **Configuration System**: Understood how Bagisto manages product types
- **AbstractType Methods**: Implemented custom business logic using key methods
- **Testing & Debugging**: Validated your implementation with real scenarios

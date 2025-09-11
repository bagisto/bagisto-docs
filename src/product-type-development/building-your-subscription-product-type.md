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
    // Basic implementation - just extends `AbstractType`
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

use Webkul\Product\Helpers\Indexers\Price\Simple as SimpleIndexer;
use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    /**
     * Returns price indexer class for a specific product type.
     *
     * @return string
     */
    public function getPriceIndexer()
    {
        // SimpleIndexer extends AbstractIndexer, so it handles basic price indexing
        // You can keep this as-is for most custom product types
        return app(SimpleIndexer::class);
    }
    
    /**
     * Subscriptions don't use traditional inventory.
     */
    public function isStockable(): bool
    {
        return false;
    }
    
    /**
     * Allow customers to select quantity for multiple subscription slots.
     */
    public function showQuantityBox(): bool
    {
        return true;
    }
    
    /**
     * Check if subscription is available for purchase.
     */
    public function isSaleable(): bool
    {
        // Check basic conditions first
        if (! parent::isSaleable()) {
            return false;
        }
        
        // Add your custom subscription-specific availability logic here
        return true;
    }
    
    /**
     * Check if enough subscription slots are available.
     * Note: Assumes you have a `subscription_slots` attribute on your product.
     */
    public function haveSufficientQuantity(int $qty): bool
    {
        // Add your custom subscription-specific availability logic here
        // For now, returning true to allow all quantities (you'll customize this based on your subscription slots logic)
        return true;
    }
    
    /**
     * Return total available subscription slots.
     * Note: Assumes you have a `subscription_slots` attribute on your product.
     */
    public function totalQuantity(): int
    {
        // Add your custom subscription-specific availability logic here
        // For example, you might have a custom attribute like `subscription_slots`
        return $this->product->subscription_slots ?? 0;
    }
    
    /**
     * Prepare subscription data for cart.
     * Note: Assumes your frontend form sends 'subscription_frequency' in the request data.
     */
    public function prepareForCart($data): array
    {
        // Validate subscription-specific data first
        // For example, if your form passes a subscription_frequency field that needs validation
        if (empty($data['subscription_frequency'])) {
            return 'Please select subscription frequency.';
        }
        
        // Get base cart data from parent
        $cartData = parent::prepareForCart($data);
        
        // Add subscription-specific information to the cart data
        // Note: We're accessing the first cart item [0] - if you have multiple items, you'll need to loop through them
        $cartData[0]['additional']['subscription_frequency'] = $data['subscription_frequency'];
        $cartData[0]['additional']['subscription_start_date'] = $data['start_date'] ?? now()->addDays(1)->format('Y-m-d');
        
        return $cartData;
    }
}
```

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

## What You've Accomplished

Congratulations! You've successfully completed the product type development journey and built a complete subscription product type for Bagisto:

### ✅ Complete Product Type System
- **Configuration**: `Config/product-types.php` registers your subscription type
- **Service Provider**: `SubscriptionServiceProvider` loads your configuration  
- **Product Type Class**: `Subscription` implements custom business logic
- **Integration**: Works seamlessly with Bagisto's admin and frontend

### ✅ Key Skills Mastered
- **Product Type Creation**: Built a working product type from scratch
- **Configuration System**: Understood how Bagisto manages product types
- **AbstractType Methods**: Implemented custom business logic using key methods
- **Testing & Debugging**: Validated your implementation with real scenarios

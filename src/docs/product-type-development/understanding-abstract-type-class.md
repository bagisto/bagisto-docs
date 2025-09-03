# Understanding AbstractType Class

The `AbstractType` class is the foundation that all product types in Bagisto extend. Before building advanced subscription features, it's essential to understand the key methods available and how they control product behavior.

::: info What You'll Learn
- Core AbstractType methods and their purposes
- How product availability and cart behavior is controlled
- Which methods to override for custom product types
- Real examples using the subscription product we built
:::

## AbstractType Overview

Every product type in Bagisto extends the `AbstractType` class which provides the core functionality:

```php
<?php

namespace Webkul\Product\Type;

abstract class AbstractType
{
    protected $product;
    protected $isStockable = true;
    protected $showQuantityBox = false;
    protected $haveSufficientQuantity = true;
    protected $canBeMovedFromWishlistToCart = true;
    // ... other properties

    // Key methods you can override:
    public function isSaleable(): bool
    public function isStockable(): bool  
    public function showQuantityBox(): bool
    public function haveSufficientQuantity(int $qty): bool
    public function totalQuantity(): int
    public function prepareForCart(array $data): array
    // ... and more
}
```

## Key Methods to Understand

The AbstractType class provides several important methods that control different aspects of product behavior. Let's explore the most commonly overridden methods and understand when and how to use them in your custom product types.

### Product Availability Control

These methods determine if and how customers can purchase your product:

#### `isSaleable(): bool`

Controls whether the product appears as purchasable:

```php
// Core method signature in AbstractType
public function isSaleable(): bool
{
    // Checks product status and inventory availability
    // Returns true if product can be purchased
}
```

**For subscription products, you might override this to:**

```php
public function isSaleable(): bool
{
    // Check basic conditions first
    if (! parent::isSaleable()) {
        return false;
    }
    
    // Check subscription-specific availability
    // Add your custom subscription-specific availability logic here
}
```

#### `haveSufficientQuantity(int $qty): bool`

Checks if enough quantity is available for purchase:

```php
// Core method signature in AbstractType
public function haveSufficientQuantity(int $qty): bool
{
    // Validates if requested quantity is available
    // Returns true if sufficient quantity exists
}
```

**For subscriptions:**

```php
public function haveSufficientQuantity(int $qty): bool
{
    // Add your custom subscription-specific availability logic here
    // For now, returning true to allow all quantities (you'll customize this based on your subscription slots logic)
    return true;
}
```

### Inventory and Stock Control

These methods control how your product type handles inventory tracking and stock management:

#### `isStockable(): bool`

Determines if the product uses inventory tracking:

```php
// Core method signature in AbstractType
public function isStockable(): bool
{
    // Returns whether product requires inventory management
    // Default is true for most product types
}
```

**For subscription products:**

```php
public function isStockable(): bool
{
    return false; // Subscriptions don't use traditional inventory
}
```

#### `totalQuantity(): int`

Returns total available quantity:

```php
// Core method signature in AbstractType
public function totalQuantity(): int
{
    // Returns total available quantity for the product
    // Usually gets data from inventory or product attributes
}
```

**For subscriptions:**

```php
public function totalQuantity(): int
{
    // Add your custom subscription-specific availability logic here
    // For example, you might have a custom attribute like `subscription_slots`
    return $this->product->subscription_slots ?? 0;
}
```

### User Interface Control

These methods control how your product appears and behaves on the frontend, affecting the user experience and purchase flow.

#### `showQuantityBox(): bool`

Controls whether quantity input appears on product page:

```php
// Core method signature in AbstractType
public function showQuantityBox(): bool
{
    // Returns whether to display quantity input box
    // Default varies by product type
}
```

**For subscriptions:**

```php
public function showQuantityBox(): bool
{
    // Return true to show quantity input, or false if you want fixed quantity purchases
    return true;
}
```

### Cart Integration

#### `prepareForCart(array $data): array`

The most important method - processes product data before adding to cart:

```php
// Core method signature in AbstractType
public function prepareForCart(array $data): array
{
    // Processes product data for cart addition
    // Returns array of cart item data or error message
    // Handles pricing, validation, and product-specific logic
}
```

**For subscription products:**

```php
public function prepareForCart(array $data): array
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
```

## Exploring More Methods

The methods covered above are the most commonly overridden ones, but the AbstractType class contains many more methods that you can customize based on your specific requirements. We recommend exploring the full AbstractType class to discover additional methods that might be useful for your custom product type implementation.

::: tip Pro Tip
Check out the complete AbstractType class in `packages/Webkul/Product/src/Type/AbstractType.php` to see all available methods and understand their purposes. This will help you identify which methods to override for your specific use case.
:::

## What's Next?

Now that you understand the key `AbstractType` methods, let's put them into practice:

**📖 [Building Your Subscription Product Type →](./building-your-subscription-product-type.md)**  
See how to implement these methods in a complete, functional subscription product type with real business logic.

::: tip Key Takeaways

**Essential Methods:**
- `isSaleable()` - Controls product availability
- `isStockable()` - Determines inventory behavior  
- `showQuantityBox()` - Controls UI elements
- `prepareForCart()` - Handles cart integration

**Override Patterns:**
- Call parent methods first when possible
- Add your custom logic on top
- Handle errors gracefully
- Test thoroughly in different scenarios

:::

Understanding these AbstractType methods is crucial before implementing advanced features. The next section will show you how to use these methods to build sophisticated subscription functionality.

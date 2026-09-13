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
    protected $isComposite = false;
    protected $isStockable = true;
    protected $showQuantityBox = false;
    protected $haveSufficientQuantity = true;
    protected $canBeMovedFromWishlistToCart = true;
    protected $canBeAddedToCartWithoutOptions = true;
    protected $canBeCopied = true;
    protected $hasVariants = false;
    protected $isChildrenCalculated = false;
    protected $skipAttributes = [];
    protected $additionalViews = [];

    // Key methods you can override:
    public function isSaleable()
    public function isStockable()
    public function showQuantityBox()
    public function haveSufficientQuantity(int $qty): bool
    public function totalQuantity()
    public function prepareForCart($data)
    // ... and more
}
```

Most of the boolean methods simply return the matching property, so a type that only needs to flip a flag can set the property instead of overriding the method. Apart from `haveSufficientQuantity(int $qty): bool`, none of these methods declares a return type in the base class; the `: bool`, `: int`, `: array` and `: string` annotations on the examples below are additions an override may make (PHP allows narrowing) but are not what the core declares. Two members every type must provide itself:

- **`getPriceIndexer()`**: not declared on the base class but called by `getFinalPrice()` and the price indexer; return `app(\Webkul\Product\Helpers\Indexers\Price\Simple::class)` unless your pricing needs its own indexer.
- **A constructor that calls `parent::__construct()`** if you add dependencies, since the base constructor takes eight repositories that the container injects.

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

### Pricing and Display Methods

These methods handle product pricing calculations and display formatting, which are essential for any product type that needs custom pricing logic:

#### `getProductPrices(): array`

Returns structured pricing data for the product:

```php
// Core method signature in AbstractType
public function getProductPrices(): array
{
    // Returns structured pricing data with regular and final prices
    // Includes both raw prices and formatted currency strings
}
```

**For subscription products with custom pricing:**

```php
public function getProductPrices(): array
{
    $basePrice = $this->product->price;
    
    // Apply subscription discount if applicable
    $subscriptionDiscount = $this->product->subscription_discount ?? 0;
    $finalPrice = $basePrice - ($basePrice * $subscriptionDiscount / 100);
    
    return [
        'regular' => [
            'price'           => core()->convertPrice($basePrice),
            'formatted_price' => core()->currency($basePrice),
        ],
        'final'   => [
            'price'           => core()->convertPrice($finalPrice),
            'formatted_price' => core()->currency($finalPrice),
        ],
    ];
}
```

#### `getPriceHtml(): string`

Generates the complete price HTML for frontend display:

```php
// Core method signature in AbstractType
public function getPriceHtml(): string
{
    // Generates complete price HTML for frontend display
    // Uses pricing view templates with product and pricing data
}
```

**For subscription products with custom pricing display:**

```php
public function getPriceHtml(): string
{
    // You can customize the pricing view for subscriptions
    return view('subscription::products.prices.subscription', [
        'product' => $this->product,
        'prices'  => $this->getProductPrices(),
        'subscription_info' => [
            'frequency' => $this->product->subscription_frequency,
            'discount' => $this->product->subscription_discount,
        ],
    ])->render();
}
```

### Validation Methods

These methods handle form validation for product-specific data during product creation and updates:

#### `getTypeValidationRules(): array`

Returns validation rules for product type specific fields:

```php
// Core method signature in AbstractType
public function getTypeValidationRules(): array
{
    // Returns array of validation rules for product type specific fields
    // Used during product creation and update processes
}
```

**For subscription products with custom validation:**

```php
public function getTypeValidationRules(): array
{
    return [
        'subscription_frequency'     => 'required|in:weekly,monthly,quarterly,yearly',
        'subscription_discount'      => 'nullable|numeric|min:0|max:100',
        'subscription_duration'      => 'nullable|integer|min:1',
        'subscription_trial_period'  => 'nullable|integer|min:0',
        'subscription_slots'         => 'required|integer|min:1',
    ];
}
```

**For downloadable products (real Bagisto example):**

```php
public function getTypeValidationRules(): array
{
    return [
        'downloadable_links.*.type'       => 'required',
        'downloadable_links.*.file'       => 'required_if:type,==,file',
        'downloadable_links.*.file_name'  => 'required_if:type,==,file',
        'downloadable_links.*.url'        => 'required_if:type,==,url',
        'downloadable_links.*.downloads'  => 'required',
        'downloadable_links.*.sort_order' => 'required',
    ];
}
```

### Admin Interface Customization

These properties and methods control how your product type appears in the admin interface, particularly in the product edit page:

#### `$additionalViews` Property

Specifies additional blade views to include in the product edit page:

```php
// Core property in AbstractType
protected $additionalViews = [];
```

**For subscription products with custom admin fields:**

```php
/**
 * These blade files will be included in product edit page.
 *
 * @var array
 */
protected $additionalViews = [
    'subscription::admin.catalog.products.edit.subscription-settings',
    'subscription::admin.catalog.products.edit.subscription-pricing',
];
```

The admin edit page includes two things for a type, in this order:

```blade
@includeIf('admin::catalog.products.edit.types.' . $product->type)

@foreach ($product->getTypeInstance()->getAdditionalViews() as $view)
    @includeIf($view)
@endforeach
```

The first is a **conventional per-type partial** in the `admin` namespace: core's own types live at `Admin/src/Resources/views/catalog/products/edit/types/{simple,configurable,grouped,bundle,downloadable,...}.blade.php`, so a package can supply `admin::catalog.products.edit.types.subscription` by publishing it into the admin theme's view path or by [registering the view](../package-development/views.md). `$additionalViews` is the second route and takes any namespace, which makes it the easier one for a package. Both use `@includeIf`, so a missing view is skipped silently rather than raising an error; if your fields do not appear, check the view name first.

#### `$skipAttributes` Property

Specifies which attributes to skip for this product type:

```php
// Core property in AbstractType
protected $skipAttributes = [];
```

**For subscription products that don't need certain attributes:**

```php
/**
 * Skip attribute for subscription product type.
 *
 * @var array
 */
protected $skipAttributes = [
    'weight',
    'dimensions',
    'color',
    'size',
];
```

**For digital products example:**

```php
protected $skipAttributes = [
    'weight',
    'height',
    'width',
    'depth',
];
```

::: tip Custom Admin Sections
Use `additionalViews` to add:
- Custom product configuration forms
- Specialized pricing options
- Product type specific settings
- Integration configurations
- Advanced validation options

Use `skipAttributes` to:
- Hide irrelevant attributes for specific product types
- Simplify the admin interface
- Prevent unnecessary data entry
- Focus on product type specific fields

These views are automatically included in the product edit page and have access to the `$product` variable.
:::

Fields added this way are saved like any other product data: `AbstractType::update()` receives the whole request, and `getTypeValidationRules()` is where their validation belongs. For the storefront there is no equivalent hook; `shop::products.view` includes the option partials of the core types from a fixed list, so a custom type adds its controls by overriding that view in a theme or through the page's `view_render_event` hooks.

### Cart Integration

#### `prepareForCart($data)`

The most important method - processes product data before adding to cart:

```php
// Core method signature in AbstractType
public function prepareForCart($data)
{
    // Processes product data for cart addition
    // Returns an array of cart item data on success,
    // or a string error message on failure (the cart treats a
    // string return value as an error and aborts the add-to-cart).
    // Handles pricing, validation, and product-specific logic
}
```

**For subscription products:**

```php
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
```

Leave the signature untyped, as the base class declares it: the method returns an **array** of cart-item rows on success and a **string** error message on failure (core's `Simple` type returns one when required customizable options are missing, and the cart aborts the add with that message), so a `: array` return type would throw the moment an error is reported. Check the parent's result before indexing it for the same reason. `AbstractType::prepareForCart()` itself never returns a string; it throws `InsufficientProductInventoryException` when the quantity is not available.



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
- `getProductPrices()` - Handles pricing calculations
- `getPriceHtml()` - Generates price display
- `getTypeValidationRules()` - Defines validation rules
- `prepareForCart()` - Handles cart integration

**Essential Properties:**
- `$additionalViews` - Custom admin interface sections
- `$skipAttributes` - Skip irrelevant attributes for product type

**Override Patterns:**
- Call parent methods first when possible
- Add your custom logic on top
- Handle errors gracefully
- Test thoroughly in different scenarios

:::

Understanding these AbstractType methods is crucial before implementing advanced features. The next section will show you how to use these methods to build sophisticated subscription functionality.

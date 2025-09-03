# Creating Your First Product Type

Let's create a custom product type using Bagisto's manual setup approach. We'll build everything from scratch to give you complete understanding of how product types work.

::: info What You'll Learn
This guide covers the complete process of creating a **Subscription Product** type, including:
- Package structure setup (manual approach)
- Configuration file creation
- Product type class implementation
- Admin interface integration
:::

## Manual Setup (Complete Understanding)

Since Bagisto doesn't have a package generator for product types, we'll create everything manually. This approach teaches you every component by building from scratch.

### Step 1: Create Package Structure

Create the package directory structure:

```bash
mkdir -p packages/Webkul/SubscriptionProduct/src/{Type,Config,Providers}
```

### Step 2: Configure Product Type

Create `packages/Webkul/SubscriptionProduct/src/Config/product-types.php`:

```php
<?php

return [
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'Subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 5,
    ],
];
```

### Step 3: Create Product Type Class

Create `packages/Webkul/SubscriptionProduct/src/Type/Subscription.php`:

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
}
```

::: tip Implementation Notes
For visualization purposes, we're keeping this class simple by just extending AbstractType. This allows the product type to appear in admin and demonstrates basic functionality.

You can override methods step by step according to your subscription-based product requirements:

- **isStockable()**: Define if products use inventory tracking
- **showQuantityBox()**: Control quantity input display  
- **haveSufficientQuantity()**: Custom availability logic
- **isSaleable()**: Custom saleable conditions
- **prepareForCart()**: Add subscription-specific cart data

See the [Understanding Abstract Type Class →](./understanding-abstract-type-class.md) section for detailed method explanations.
:::

### Step 4: Create Service Provider

Create `packages/Webkul/SubscriptionProduct/src/Providers/SubscriptionServiceProvider.php`:

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider;

class SubscriptionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        // Merge product type configuration
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/product-types.php',
            'product_types'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
```

### Step 5: Register Your Package

After creating all the files, you need to register your package with Bagisto:

**Add to composer.json** (in Bagisto root directory):

```json{5}
{
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Webkul\\SubscriptionProduct\\": "packages/Webkul/SubscriptionProduct/src"
        }
    }
}
```

**Update autoloader:**

```bash
composer dump-autoload
```

**Register service provider** in `bootstrap/providers.php`:

```php{8}
<?php

return [
    App\Providers\AppServiceProvider::class,
    
    // ... other providers ...
    
    Webkul\SubscriptionProduct\Providers\SubscriptionServiceProvider::class,
];
```

**Clear caches:**

```bash
php artisan optimize:clear
```

### Step 6: Test Your Product Type

After completing the setup, let's test your subscription product type:

### 1. Admin Interface Test

1. **Navigate to Products**: Go to Admin → Catalog → Products
2. **Create New Product**: Click "Add Product"
3. **Select Type**: Choose "Subscription" from the dropdown
4. **Verify Fields**: Check that subscription-specific fields appear
5. **Save Product**: Complete the product creation process

### 2. Frontend Validation

1. **Product Page**: Visit the product page and verify display
2. **Add to Cart**: Test cart functionality with different quantities
3. **Cart Behavior**: Verify subscription data is preserved
4. **Checkout**: Ensure checkout process works correctly

## What You've Built

Congratulations! You've successfully created a basic subscription product type with:

### Completed Components
- ✅ **Product Type Configuration**: Registered subscription type with Bagisto
- ✅ **Product Type Class**: Basic subscription class extending AbstractType
- ✅ **Service Provider**: Properly registered the package with Bagisto
- ✅ **Admin Integration**: Product type appears in admin product creation

### Next Steps for Customization

Your basic product type is now functional! To make it truly subscription-specific, you can:

1. **Override Methods**: Add custom behavior by implementing methods in your Subscription class
2. **Add Validation**: Implement subscription-specific validation rules
3. **Custom Pricing**: Add subscription billing frequency and pricing logic
4. **Inventory Logic**: Implement slot-based or service-based availability

## What's Next?

Congratulations! You've successfully created your first product type. Now you can dive deeper into understanding how each component works:

**📖 [Understanding Product Type Configuration →](./understanding-product-type-configuration.md)**  
Learn how the configuration system defines your product type properties and behavior.

**📖 [Understanding AbstractType Class →](./understanding-abstract-type-class.md)**  
Master the methods available for customizing product behavior and business logic.

**📖 [Building Your Subscription Product Type →](./building-your-subscription-product-type.md)**  
See how to implement a complete, functional subscription product type with real business logic.

Your subscription product type is now ready for enhancement and customization!

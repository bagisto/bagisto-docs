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

Create `packages/Webkul/SubscriptionProduct/src/Config/product_types.php`:

```php
<?php

return [
    'subscription' => [
        'key' => 'subscription',
        'name' => 'subscription::app.type.subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort' => 8,
    ],
];
```

`name` is a translation key (core uses `product::app.type.simple` and so on); a plain string renders as-is but cannot be localized. Add the key to your package's language file when you register translations.

### Step 3: Create Product Type Class

Create `packages/Webkul/SubscriptionProduct/src/Type/Subscription.php`:

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Helpers\Indexers\Price\Simple;
use Webkul\Product\Helpers\Indexers\Price\Simple as SimpleIndexer;
use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    /**
     * Get the price indexer for this product type.
     *
     * @return Simple
     */
    public function getPriceIndexer()
    {
        return app(SimpleIndexer::class);
    }
}
```

::: tip Implementation Notes
This basic implementation includes the essential `getPriceIndexer()` method. `AbstractType` does not declare it, yet `getFinalPrice()` and the price indexer call it, so a type without it fails the first time a price is read. `Webkul\Product\Helpers\Indexers\Price\Simple` extends `Webkul\Product\Helpers\Indexers\Price\AbstractType` (a different class from the product type base) and handles a single-price product; you can keep it for most custom types.

You can then override additional methods step by step according to your subscription-based product requirements:

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
        ...
        "psr-4": {
            // Other PSR-4 namespaces
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

use App\Providers\AppServiceProvider;
use Webkul\SubscriptionProduct\Providers\SubscriptionServiceProvider;

return [
    AppServiceProvider::class,

    // ... other providers ...

    SubscriptionServiceProvider::class,
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
2. **Create New Product**: Click "Create Product"
3. **Select Type**: Choose "Subscription" from the dropdown
4. **Save Product**: Complete the product creation; the edit page shows the attribute-family fields (name, price, description, images, inventory)

There are no subscription-specific fields yet: the edit page includes a per-type partial with `@includeIf('admin::catalog.products.edit.types.subscription')` and silently skips a missing one, and lists any `$additionalViews` the type declares. Both are covered on [Understanding AbstractType Class](./understanding-abstract-type-class.md#admin-interface-customization).

### 2. Frontend Validation

1. **Product Page**: Visit the product page and verify display
2. **Add to Cart**: Test cart functionality with different quantities
3. **Checkout**: Ensure checkout process works correctly

The storefront product page includes the per-type option partials (`shop::products.view.types.*`) from a fixed list of the core types, so a custom type gets the standard page: name, price, quantity box (when `showQuantityBox()` is true), add to cart and buy now. Extra controls for a custom type are added by overriding `products/view.blade.php` in a theme or by listening to the page's [render events](../advanced/view-render-events.md), for example `bagisto.shop.products.view.quantity.before`.

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

# Creating Your First Product Type

In this guide, you'll build a complete **Subscription Product** type that demonstrates all the essential concepts for creating custom product types in Bagisto. You'll learn both automated and manual approaches, giving you flexibility for future projects.

::: info What You'll Build
A subscription product type with:
- ✅ **Custom Product Behavior**: Subscription-specific logic and validation
- ✅ **Inventory Management**: Service-based products without traditional stock tracking
- ✅ **Pricing Logic**: Recurring pricing calculations and billing frequencies
- ✅ **Cart Integration**: Subscription-specific cart preparation and validation
:::

## Method 1: Using Package Generator (Recommended for Beginners)

If your Bagisto installation includes the package generator, this is the fastest way to get started.

### Step 1: Generate Product Type Package

Generate a new package with product type support:

```bash
php artisan package:make-product-type Webkul/SubscriptionProduct
```

This creates the foundation structure:

```text
packages/Webkul/SubscriptionProduct/
├── src/
│   ├── Type/
│   │   └── Subscription.php
│   ├── Config/
│   │   └── product_types.php
│   ├── Providers/
│   │   └── ServiceProvider.php
│   └── Resources/
├── composer.json
└── README.md
```

### Step 2: Configure Package Registration

Register the package in `composer.json`:

```json
{
    "autoload": {
        "psr-4": {
            "Webkul\\SubscriptionProduct\\": "packages/Webkul/SubscriptionProduct/src"
        }
    }
}
```

### Step 3: Register Service Provider

Add to `config/app.php`:

```php
'providers' => [
    // ...existing providers
    Webkul\SubscriptionProduct\Providers\ServiceProvider::class,
],
```

### Step 4: Update Dependencies

```bash
composer dump-autoload
php artisan config:cache
```

## Method 2: Manual Setup (Complete Understanding)

This approach teaches you every component by building from scratch.

### Step 1: Create Package Structure

Create the package directory structure:

```bash
mkdir -p packages/Webkul/SubscriptionProduct/src/{Type,Config,Providers}
```

### Step 2: Create Composer Configuration

Create `packages/Webkul/SubscriptionProduct/composer.json`:

```json
{
    "name": "webkul/subscription-product",
    "description": "Subscription Product Type for Bagisto",
    "type": "library",
    "license": "MIT",
    "authors": [
        {
            "name": "Your Name",
            "email": "your-email@domain.com"
        }
    ],
    "require": {
        "php": "^8.1",
        "bagisto/bagisto": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "Webkul\\SubscriptionProduct\\": "src/"
        }
    },
    "extra": {
        "laravel": {
            "providers": [
                "Webkul\\SubscriptionProduct\\Providers\\ServiceProvider"
            ]
        }
    }
}
```

### Step 3: Configure Product Type

Create `packages/Webkul/SubscriptionProduct/src/Config/product_types.php`:

```php
<?php

return [
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'Subscription Product',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 5,
    ],
];
```

::: details Understanding Configuration Options

**Key Properties:**
- `key`: Unique identifier for the product type
- `name`: Display name in admin interface
- `class`: Full namespace path to the product type class
- `sort`: Display order in product type dropdown (lower numbers first)

**Optional Properties:**
- `description`: Extended description for admin users
- `icon`: Icon class for admin interface
- `groups`: Product type grouping for organization
:::

### Step 4: Create Product Type Class

Create `packages/Webkul/SubscriptionProduct/src/Type/Subscription.php`:

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    /**
     * Skip attribute for subscription products.
     */
    protected array $skipAttributes = [
        'price',
        'cost',
        'special_price',
        'special_price_from',
        'special_price_to',
        'length',
        'width',
        'height',
        'weight',
    ];

    /**
     * Show quantity box for subscription products.
     */
    public function showQuantityBox(): bool
    {
        return true;
    }

    /**
     * Check if subscription product can be moved to cart.
     */
    public function canBeMovedFromWishlistToCart(): bool
    {
        return true;
    }

    /**
     * Check if subscription is saleable (has available slots).
     */
    public function isSaleable(): bool
    {
        // For subscription products, check service availability
        $availableSlots = $this->product->subscription_slots ?? 0;
        $currentSubscriptions = $this->getCurrentSubscriptionCount();
        
        return $availableSlots > $currentSubscriptions;
    }

    /**
     * Check if product has sufficient quantity for cart.
     */
    public function haveSufficientQuantity(int $qty): bool
    {
        // For subscriptions, check slot availability instead of inventory
        if (! $this->product->manage_stock) {
            return true;
        }

        $availableSlots = $this->product->subscription_slots ?? 0;
        $currentSubscriptions = $this->getCurrentSubscriptionCount();
        
        return ($currentSubscriptions + $qty) <= $availableSlots;
    }

    /**
     * Get total quantity available for subscription.
     */
    public function totalQuantity(): int
    {
        return $this->product->subscription_slots ?? 0;
    }

    /**
     * Check if product is stockable (subscriptions are service-based).
     */
    public function isStockable(): bool
    {
        return false;
    }

    /**
     * Prepare product for cart addition.
     */
    public function prepareForCart(array $data): array
    {
        $data = parent::prepareForCart($data);

        // Add subscription-specific data
        $data['subscription_frequency'] = $this->getSubscriptionFrequency();
        $data['subscription_price'] = $this->getSubscriptionPrice();
        $data['billing_cycle'] = $this->getBillingCycle();

        return $data;
    }

    /**
     * Get subscription frequency from product or request.
     */
    protected function getSubscriptionFrequency(): string
    {
        return request('subscription_frequency', $this->product->subscription_frequency ?? 'monthly');
    }

    /**
     * Calculate subscription price based on frequency.
     */
    protected function getSubscriptionPrice(): float
    {
        $basePrice = (float) $this->product->subscription_base_price;
        $frequency = $this->getSubscriptionFrequency();

        return match ($frequency) {
            'weekly' => $basePrice * 0.95,  // 5% discount for weekly
            'monthly' => $basePrice,
            'quarterly' => $basePrice * 2.85, // 5% discount for quarterly
            'yearly' => $basePrice * 10.8,    // 10% discount for yearly
            default => $basePrice,
        };
    }

    /**
     * Get billing cycle information.
     */
    protected function getBillingCycle(): array
    {
        $frequency = $this->getSubscriptionFrequency();
        
        return [
            'frequency' => $frequency,
            'interval' => $this->getIntervalForFrequency($frequency),
            'next_billing' => $this->calculateNextBilling($frequency),
        ];
    }

    /**
     * Get interval period for frequency.
     */
    protected function getIntervalForFrequency(string $frequency): int
    {
        return match ($frequency) {
            'weekly' => 7,
            'monthly' => 30,
            'quarterly' => 90,
            'yearly' => 365,
            default => 30,
        };
    }

    /**
     * Calculate next billing date based on frequency.
     */
    protected function calculateNextBilling(string $frequency): string
    {
        $interval = $this->getIntervalForFrequency($frequency);
        return now()->addDays($interval)->format('Y-m-d');
    }

    /**
     * Get current subscription count for this product.
     */
    protected function getCurrentSubscriptionCount(): int
    {
        // This would integrate with your subscription management system
        // For now, return 0 as placeholder
        return 0;
    }

    /**
     * Validate subscription-specific data.
     */
    public function validateCartItem(array $data): bool
    {
        if (! parent::validateCartItem($data)) {
            return false;
        }

        // Validate subscription frequency
        $allowedFrequencies = ['weekly', 'monthly', 'quarterly', 'yearly'];
        if (! in_array($data['subscription_frequency'] ?? '', $allowedFrequencies)) {
            return false;
        }

        // Validate slot availability
        return $this->haveSufficientQuantity($data['quantity'] ?? 1);
    }
}
```

::: details Understanding Product Type Methods

**Core Methods:**
- `showQuantityBox()`: Controls quantity input display
- `isSaleable()`: Determines if product can be purchased
- `haveSufficientQuantity()`: Checks availability for requested quantity
- `isStockable()`: Defines if product uses inventory tracking

**Cart Methods:**
- `prepareForCart()`: Processes data before adding to cart
- `validateCartItem()`: Validates cart item data

**Custom Methods:**
- Subscription-specific logic for pricing and availability
- Integration points for subscription management systems
:::

### Step 5: Create Service Provider

Create `packages/Webkul/SubscriptionProduct/src/Providers/ServiceProvider.php`:

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Register the application services.
     */
    public function register(): void
    {
        $this->registerConfig();
    }

    /**
     * Bootstrap the application services.
     */
    public function boot(): void
    {
        $this->loadConfig();
    }

    /**
     * Register package configuration.
     */
    protected function registerConfig(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/product_types.php',
            'product_types'
        );
    }

    /**
     * Load and publish package configuration.
     */
    protected function loadConfig(): void
    {
        // Merge product types configuration
        $productTypes = include dirname(__DIR__) . '/Config/product_types.php';
        
        config(['product_types' => array_merge(
            config('product_types', []),
            $productTypes
        )]);
    }
}
```

### Step 6: Register the Package

Add to your root `composer.json`:

```json
{
    "autoload": {
        "psr-4": {
            "Webkul\\SubscriptionProduct\\": "packages/Webkul/SubscriptionProduct/src"
        }
    }
}
```

Register in `config/app.php`:

```php
'providers' => [
    // ...existing providers
    Webkul\SubscriptionProduct\Providers\ServiceProvider::class,
],
```

### Step 7: Update and Test

Update autoloader and clear caches:

```bash
composer dump-autoload
php artisan config:cache
php artisan cache:clear
```

## Testing Your Product Type

### 1. Admin Interface Test

1. **Navigate to Products**: Go to Admin → Catalog → Products
2. **Create New Product**: Click "Add Product"
3. **Select Type**: Choose "Subscription Product" from the dropdown
4. **Verify Fields**: Check that subscription-specific fields appear
5. **Save Product**: Complete the product creation process

### 2. Frontend Validation

1. **Product Page**: Visit the product page and verify display
2. **Add to Cart**: Test cart functionality with different quantities
3. **Cart Behavior**: Verify subscription data is preserved
4. **Checkout**: Ensure checkout process works correctly

### 3. Debug Common Issues

::: warning Common Issues

**Product Type Not Appearing:**
- Check service provider registration
- Verify autoloader was updated
- Clear all caches

**Class Not Found:**
- Verify namespace in product_types.php
- Check composer autoload configuration
- Run `composer dump-autoload`

**Configuration Not Loading:**
- Check service provider boot() method
- Verify config file path
- Clear config cache
:::

## What's Next?

Now that you have a working subscription product type, you can enhance it with:

1. **📖 [Understanding Product Type Configuration](./understanding-product-type-configuration.md)** - Deep dive into configuration options
2. **📖 [Understanding AbstractType](./understanding-abstract-type.md)** - Master the base class and its methods
3. **📖 [Advanced Product Type Examples](./advanced-product-type-examples.md)** - Add sophisticated features

::: tip Pro Tips

**Development Workflow:**
- Test each component individually before integration
- Use Laravel's Tinker for quick testing: `php artisan tinker`
- Enable debug mode for detailed error messages
- Keep a backup of working configurations

**Performance Considerations:**
- Cache frequently accessed configuration
- Optimize database queries in custom methods
- Consider queue processing for complex operations
:::

Your subscription product type is now ready for enhancement and customization. The next sections will help you understand and extend its capabilities.

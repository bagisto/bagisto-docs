# Understanding Product Type Configuration

Product type configuration is the foundation that defines how your custom product type behaves within Bagisto. This comprehensive guide covers every aspect of configuration, from basic setup to advanced customization options.

::: info What You'll Learn
- Complete product type configuration syntax and options
- How configuration affects admin interface and frontend behavior
- Advanced configuration patterns for complex product types
- Integration with Bagisto's core systems
:::

## Configuration File Structure

The `Config/product_types.php` file defines all properties and behaviors for your product type:

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

### Core Configuration Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | string | ✅ | Unique identifier for the product type |
| `name` | string | ✅ | Display name in admin interface |
| `class` | string | ✅ | Full namespace path to product type class |
| `sort` | integer | ❌ | Display order in dropdowns (default: 0) |

## Advanced Configuration Options

Enhance your product type with additional configuration properties:

```php
<?php

return [
    'subscription' => [
        // Core Properties
        'key'   => 'subscription',
        'name'  => 'Subscription Product',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 5,
        
        // Enhanced Properties
        'description' => 'Recurring subscription products with flexible billing',
        'icon' => 'fas fa-sync-alt',
        'category' => 'services',
        'tags' => ['subscription', 'recurring', 'service'],
        
        // Behavior Configuration
        'settings' => [
            'manage_stock' => false,
            'track_quantity' => false,
            'allow_backorders' => false,
            'require_shipping' => false,
            'is_digital' => true,
        ],
        
        // Admin Interface
        'admin' => [
            'show_in_product_list' => true,
            'show_weight_fields' => false,
            'show_dimension_fields' => false,
            'show_inventory_fields' => false,
            'custom_fields' => [
                'subscription_frequency',
                'subscription_slots',
                'trial_period_days',
            ],
        ],
        
        // Frontend Behavior
        'frontend' => [
            'show_quantity_box' => true,
            'show_price_range' => false,
            'allow_wishlist' => true,
            'allow_compare' => false,
        ],
        
        // Cart and Checkout
        'cart' => [
            'prepare_data' => true,
            'validate_before_add' => true,
            'merge_similar_items' => false,
            'calculate_shipping' => false,
        ],
    ],
];
```

::: details Extended Configuration Reference

**Category Options:**
- `physical`: Physical products requiring shipping
- `digital`: Digital/downloadable products
- `services`: Service-based products
- `virtual`: Virtual products without physical form
- `custom`: Custom category for specialized products

**Tag Usage:**
- Help with product type discovery and filtering
- Used in admin interface for quick identification
- Can be used for automated categorization

**Admin Interface Customization:**
- Control which fields appear in product creation
- Hide irrelevant sections for your product type
- Add custom fields specific to your needs
:::

## Configuration Registration Patterns

### Method 1: Direct Service Provider Registration

Most straightforward approach for simple configurations:

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    public function boot(): void
    {
        // Direct configuration merge
        $this->mergeProductTypes();
    }

    protected function mergeProductTypes(): void
    {
        $productTypes = include dirname(__DIR__) . '/Config/product_types.php';
        
        config(['product_types' => array_merge(
            config('product_types', []),
            $productTypes
        )]);
    }
}
```

### Method 2: Dynamic Configuration Loading

For packages that need conditional registration:

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    public function boot(): void
    {
        $this->loadProductTypes();
    }

    protected function loadProductTypes(): void
    {
        // Check if subscription features are enabled
        if (! config('subscription.enabled', true)) {
            return;
        }

        $productTypes = $this->getProductTypesConfiguration();
        
        foreach ($productTypes as $key => $config) {
            config(["product_types.{$key}" => $config]);
        }
    }

    protected function getProductTypesConfiguration(): array
    {
        return include dirname(__DIR__) . '/Config/product_types.php';
    }
}
```

### Method 3: Event-Based Registration

For advanced scenarios with conditional logic:

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Webkul\Core\Events\CoreConfigChangeEvent;

class ServiceProvider extends BaseServiceProvider
{
    public function boot(): void
    {
        $this->registerEventListeners();
        $this->loadProductTypes();
    }

    protected function registerEventListeners(): void
    {
        // Re-register product types when configuration changes
        $this->app['events']->listen(CoreConfigChangeEvent::class, function () {
            $this->loadProductTypes();
        });
    }

    protected function loadProductTypes(): void
    {
        $config = $this->buildDynamicConfiguration();
        
        config(['product_types' => array_merge(
            config('product_types', []),
            $config
        )]);
    }

    protected function buildDynamicConfiguration(): array
    {
        $baseConfig = include dirname(__DIR__) . '/Config/product_types.php';
        
        // Modify configuration based on system state
        if (! $this->supportsAdvancedFeatures()) {
            unset($baseConfig['subscription']['settings']['advanced_billing']);
        }
        
        return $baseConfig;
    }

    protected function supportsAdvancedFeatures(): bool
    {
        // Check system capabilities, installed packages, etc.
        return class_exists('Webkul\AdvancedSubscription\AdvancedBilling');
    }
}
```

## Environment-Specific Configuration

Adapt your product type configuration for different environments:

### Development Configuration

```php
<?php

return [
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'Subscription Product (Dev)',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 1, // Higher priority in dev
        
        'settings' => [
            'debug_mode' => true,
            'test_mode' => true,
            'skip_validation' => env('SUBSCRIPTION_SKIP_VALIDATION', false),
        ],
        
        'admin' => [
            'show_debug_info' => true,
            'enable_test_controls' => true,
        ],
    ],
];
```

### Production Configuration

```php
<?php

return [
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'Subscription Product',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 5,
        
        'settings' => [
            'debug_mode' => false,
            'test_mode' => false,
            'enable_caching' => true,
            'cache_duration' => 3600,
        ],
        
        'admin' => [
            'show_debug_info' => false,
            'enable_test_controls' => false,
        ],
    ],
];
```

## Multiple Product Type Registration

Register multiple related product types in a single package:

```php
<?php

return [
    // Basic Subscription
    'subscription' => [
        'key'   => 'subscription',
        'name'  => 'Basic Subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort'  => 5,
        'category' => 'services',
    ],
    
    // Premium Subscription with Advanced Features
    'premium_subscription' => [
        'key'   => 'premium_subscription',
        'name'  => 'Premium Subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\PremiumSubscription',
        'sort'  => 6,
        'category' => 'services',
        'parent' => 'subscription', // Inherit from base subscription
    ],
    
    // One-time Service
    'service' => [
        'key'   => 'service',
        'name'  => 'Service Product',
        'class' => 'Webkul\SubscriptionProduct\Type\Service',
        'sort'  => 7,
        'category' => 'services',
    ],
];
```

## Configuration Validation

Add validation to ensure proper configuration:

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use InvalidArgumentException;

class ServiceProvider extends BaseServiceProvider
{
    public function boot(): void
    {
        $this->loadAndValidateProductTypes();
    }

    protected function loadAndValidateProductTypes(): void
    {
        $productTypes = include dirname(__DIR__) . '/Config/product_types.php';
        
        foreach ($productTypes as $key => $config) {
            $this->validateProductTypeConfig($key, $config);
        }
        
        config(['product_types' => array_merge(
            config('product_types', []),
            $productTypes
        )]);
    }

    protected function validateProductTypeConfig(string $key, array $config): void
    {
        $required = ['key', 'name', 'class'];
        
        foreach ($required as $field) {
            if (! isset($config[$field]) || empty($config[$field])) {
                throw new InvalidArgumentException(
                    "Product type '{$key}' is missing required field: {$field}"
                );
            }
        }
        
        if (! class_exists($config['class'])) {
            throw new InvalidArgumentException(
                "Product type class does not exist: {$config['class']}"
            );
        }
        
        // Validate inheritance
        if (! is_subclass_of($config['class'], 'Webkul\Product\Type\AbstractType')) {
            throw new InvalidArgumentException(
                "Product type class must extend AbstractType: {$config['class']}"
            );
        }
    }
}
```

## Configuration Testing

Verify your product type configuration:

### Unit Test Example

```php
<?php

namespace Tests\Unit\ProductType;

use Tests\TestCase;
use Webkul\SubscriptionProduct\Type\Subscription;

class SubscriptionConfigTest extends TestCase
{
    /** @test */
    public function it_registers_subscription_product_type(): void
    {
        $productTypes = config('product_types');
        
        $this->assertArrayHasKey('subscription', $productTypes);
        $this->assertEquals('Subscription Product', $productTypes['subscription']['name']);
        $this->assertEquals(Subscription::class, $productTypes['subscription']['class']);
    }

    /** @test */
    public function it_creates_subscription_product_type_instance(): void
    {
        $productType = app()->make(Subscription::class);
        
        $this->assertInstanceOf(Subscription::class, $productType);
        $this->assertTrue(method_exists($productType, 'isSaleable'));
        $this->assertTrue(method_exists($productType, 'prepareForCart'));
    }

    /** @test */
    public function it_validates_product_type_configuration(): void
    {
        $config = config('product_types.subscription');
        
        $this->assertNotEmpty($config['key']);
        $this->assertNotEmpty($config['name']);
        $this->assertNotEmpty($config['class']);
        $this->assertTrue(class_exists($config['class']));
    }
}
```

## Debugging Configuration Issues

Common configuration problems and solutions:

::: warning Common Configuration Issues

**Product Type Not Appearing in Admin:**
```bash
# Check configuration loading
php artisan config:cache
php artisan cache:clear

# Debug in Tinker
php artisan tinker
>>> config('product_types')
```

**Class Not Found Errors:**
```bash
# Verify autoloader
composer dump-autoload

# Check namespace and file location
# Ensure class file exists at correct path
```

**Configuration Not Merging:**
```php
// Add debugging to service provider
public function boot(): void
{
    logger('Loading product types...', ['existing' => config('product_types')]);
    $this->loadProductTypes();
    logger('After loading', ['updated' => config('product_types')]);
}
```
:::

## Performance Optimization

Optimize configuration loading for production:

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    protected static ?array $cachedConfig = null;

    public function boot(): void
    {
        $this->loadProductTypesWithCaching();
    }

    protected function loadProductTypesWithCaching(): void
    {
        if (self::$cachedConfig === null) {
            self::$cachedConfig = include dirname(__DIR__) . '/Config/product_types.php';
        }
        
        config(['product_types' => array_merge(
            config('product_types', []),
            self::$cachedConfig
        )]);
    }
}
```

## What's Next?

Now that you understand product type configuration, explore the implementation details:

**📖 [Understanding AbstractType](./understanding-abstract-type.md)** - Master the base class and implement custom logic

**📖 [Advanced Product Type Examples](./advanced-product-type-examples.md)** - See sophisticated implementations and patterns

::: tip Configuration Best Practices

**Organization:**
- Group related product types in the same package
- Use consistent naming conventions
- Document custom configuration options

**Performance:**
- Cache configuration in production
- Minimize configuration loading overhead
- Use lazy loading for optional features

**Maintenance:**
- Version your configuration changes
- Test configuration in multiple environments
- Provide migration paths for configuration updates
:::

Your product type configuration is now robust and production-ready. The next section will help you implement the business logic that brings your configuration to life.

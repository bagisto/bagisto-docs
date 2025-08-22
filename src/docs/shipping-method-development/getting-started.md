# Getting Started

Creating custom shipping methods in Bagisto allows you to tailor delivery options to meet your specific business needs. Whether you need special handling for fragile items, express delivery options, or region-specific shipping rules, custom shipping methods provide the flexibility your e-commerce store requires.

For our tutorial, we'll create a **Custom Express Shipping** method that demonstrates all the essential concepts you need to build any type of shipping solution.

::: info Learning Objective
This section demonstrates how to create a complete custom shipping method from scratch, including configuration options, rate calculation logic, and admin interface integration.
:::

## Understanding Bagisto Shipping Architecture

Bagisto's shipping system is built around a flexible carrier-based architecture:

### Core Components
- **Carriers Configuration**: PHP arrays defining shipping method properties
- **Carrier Classes**: PHP classes containing the business logic for rate calculation
- **System Configuration**: Admin interface forms for method settings
- **Rate Calculation**: Dynamic pricing based on cart contents and shipping rules

### Key Features
- **Flexible Rate Calculation**: Support for per-unit, per-order, or custom pricing models
- **Configuration Management**: Admin-friendly settings interface
- **Multi-channel Support**: Different rates and settings per sales channel
- **Localization Ready**: Translation support for international stores

## Creating Your First Shipping Method

Let's create a custom shipping method using both approaches available in Bagisto. We'll explore the package generator for quick setup and the manual method for complete understanding.

### Method 1: Using Bagisto Package Generator (Quick Setup)

The fastest way to create a shipping method is using Bagisto's package generator. This tool creates the proper structure and boilerplate code automatically.

#### Step 1: Install Package Generator

If you haven't installed the package generator yet:

```bash
composer require bagisto/bagisto-package-generator
```

#### Step 2: Generate Shipping Method Package

Navigate to your Bagisto root directory and run:

```bash
php artisan package:make-shipping-method Webkul/CustomExpressShipping
```

**Command Parameters:**
- `Webkul/CustomExpressShipping`: The vendor/package name for your shipping method

#### Step 3: Handle Existing Package (If Needed)

If the package directory already exists, use the `--force` flag:

```bash
php artisan package:make-shipping-method Webkul/CustomExpressShipping --force
```

::: tip Package Generator Benefits
The generator automatically creates:
- Proper directory structure following Bagisto conventions
- Carrier configuration file with correct schema
- Base carrier class extending AbstractShipping
- System configuration for admin settings
- Service provider with proper registration
:::

### Method 2: Manual Setup (Complete Understanding)

For developers who want to understand every component, let's create the shipping method manually from scratch.

#### Step 1: Create Package Directory Structure

Create the complete directory structure for your shipping method package:

```bash
mkdir -p packages/Webkul/CustomExpressShipping/src/{Carriers,Config,Providers}
```

This creates the following structure:

```text
packages
└── Webkul
    └── CustomExpressShipping
        └── src
            ├── Carriers/          # Shipping calculation logic
            ├── Config/            # Configuration files
            └── Providers/         # Service provider
```

#### Step 2: Create Carrier Configuration

Create the carriers configuration file that defines your shipping method properties:

**Create:** `packages/Webkul/CustomExpressShipping/src/Config/carriers.php`

```php
<?php

return [
    'custom_express_shipping' => [
        'code'         => 'custom_express_shipping',
        'title'        => 'Express Delivery (1-2 Days)',
        'description'  => 'Premium express shipping with tracking and insurance',
        'active'       => true,
        'default_rate' => '19.99',
        'type'         => 'per_order',
        'class'        => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
    ]
];
```

::: info Manual Configuration Benefits
**Learning Value**: Understanding each property helps you customize behavior

**Flexibility**: Complete control over configuration structure

**Debugging**: Easier to troubleshoot when you know every line

**Customization**: Add custom properties for advanced features
:::

#### Step 3: Create Carrier Class

Create the main carrier class that handles rate calculation:

**Create:** `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Carriers;

use Webkul\Shipping\Carriers\AbstractShipping;
use Webkul\Checkout\Models\CartShippingRate;
use Webkul\Checkout\Facades\Cart;

class CustomExpressShipping extends AbstractShipping
{
    /**
     * Shipping method code - must match carriers.php key.
     */
    protected $code = 'custom_express_shipping';

    /**
     * Calculate shipping rate for the current cart.
     */
    public function calculate()
    {
        // Check if shipping method is available
        if (! $this->isAvailable()) {
            return false;
        }

        $cart = Cart::getCart();
        
        // Create shipping rate object
        $object = new CartShippingRate;
        $object->carrier = 'custom_express_shipping';
        $object->carrier_title = $this->getConfigData('title');
        $object->method = 'custom_express_shipping_custom_express_shipping';
        $object->method_title = $this->getConfigData('title');
        $object->method_description = $this->getConfigData('description');
        
        // Calculate rate - start with base rate
        $baseRate = $this->getConfigData('default_rate');
        $finalRate = $baseRate;
        
        // Express shipping logic - you can customize this
        if ($this->getConfigData('type') === 'per_unit') {
            // Calculate per item
            $totalItems = 0;
            foreach ($cart->items as $item) {
                if ($item->product->getTypeInstance()->isStockable()) {
                    $totalItems += $item->quantity;
                }
            }
            $finalRate = $baseRate * $totalItems;
        } else {
            // Per order pricing (flat rate)
            $finalRate = $baseRate;
        }
        
        // Set calculated prices
        $object->price = core()->convertPrice($finalRate);
        $object->base_price = $finalRate;

        return $object;
    }
}
```

#### Step 4: Create System Configuration

Create the admin interface configuration for your shipping method:

**Create:** `packages/Webkul/CustomExpressShipping/src/Config/system.php`

```php
<?php

return [
    'key'    => 'sales.carriers.custom_express_shipping',
    'name'   => 'Custom Express Shipping',
    'sort'   => 2,
    'fields' => [
        [
            'name'          => 'title',
            'title'         => 'Method Title',
            'type'          => 'text',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => true
        ],
        [
            'name'          => 'description', 
            'title'         => 'Description',
            'type'          => 'textarea',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'default_rate',
            'title'         => 'Base Rate ($)',
            'type'          => 'text',
            'validation'    => 'required|numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'    => 'type',
            'title'   => 'Pricing Type',
            'type'    => 'select',
            'options' => [
                [
                    'title' => 'Per Order (Flat Rate)',
                    'value' => 'per_order',
                ],
                [
                    'title' => 'Per Item',
                    'value' => 'per_unit',
                ],
            ],
            'channel_based' => true,
            'locale_based'  => false,
        ],
        [
            'name'          => 'active',
            'title'         => 'Enabled',
            'type'          => 'boolean',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ]
    ]
];
```

#### Step 5: Create Service Provider

Create the service provider to register your shipping method with Bagisto:

**Create:** `packages/Webkul/CustomExpressShipping/src/Providers/CustomExpressShippingServiceProvider.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Providers;

use Illuminate\Support\ServiceProvider;

class CustomExpressShippingServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        // Merge carrier configuration
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/carriers.php',
            'carriers'
        );

        // Merge system configuration  
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/system.php',
            'core'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Additional bootstrapping can be added here
        // For example: publishing configs, loading views, etc.
    }
}
```

### Generated vs Manual Package Structure

Both methods create the same final structure:

```text
packages
└── Webkul
    └── CustomExpressShipping
        └── src
            ├── Carriers
            │   └── CustomExpressShipping.php     # Rate calculation logic
            ├── Config
            │   ├── carriers.php                   # Shipping method definition
            │   └── system.php                     # Admin configuration
            └── Providers
                └── CustomExpressShippingServiceProvider.php  # Registration
```

::: tip Choosing Your Approach
**Use Package Generator When:**
- Quick prototyping or testing
- Following standard Bagisto patterns
- Building simple shipping methods
- Learning Bagisto basics

**Use Manual Setup When:**
- Need complete control over code
- Building complex shipping logic
- Want to understand every component
- Customizing beyond standard patterns
:::

Let's continue with understanding each component and how to customize it for your needs.

## Understanding the Carrier Configuration

Let's examine the generated `carriers.php` file and understand each configuration option:

**File:** `packages/Webkul/CustomExpressShipping/src/Config/carriers.php`

```php
<?php

return [
    'custom_express_shipping' => [
        'code'         => 'custom_express_shipping',
        'title'        => 'Custom Express Shipping',
        'description'  => 'Fast delivery for urgent orders',
        'active'       => true,
        'default_rate' => '15.00',
        'type'         => 'per_order',
        'class'        => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
    ]
];
```

::: info Configuration Properties Explained
**Essential Properties:**

- **`code`**: Unique identifier for your shipping method (must match class name)
- **`title`**: Display name shown to customers during checkout
- **`description`**: Brief explanation of the shipping method
- **`active`**: Boolean to enable/disable the shipping method
- **`default_rate`**: Base shipping cost (can be overridden by calculation logic)
- **`type`**: Pricing model - `per_unit` (per item) or `per_order` (flat rate)
- **`class`**: Full namespace path to your carrier class
:::

### Customizing Your Configuration

Let's enhance the configuration for a real-world express shipping method:

```php{5-9}
<?php

return [
    'custom_express_shipping' => [
        'code'         => 'custom_express_shipping',
        'title'        => 'Express Delivery (1-2 Days)',
        'description'  => 'Premium express shipping with tracking and insurance',
        'active'       => true,
        'default_rate' => '19.99',
        'type'         => 'per_order',
        'class'        => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
    ]
];
```

## Understanding the Carrier Class

The carrier class contains the business logic for your shipping method. Let's examine the generated file:

**File:** `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Carriers;

use Webkul\Shipping\Carriers\AbstractShipping;
use Webkul\Checkout\Models\CartShippingRate;

class CustomExpressShipping extends AbstractShipping
{
    /**
     * Shipping method code.
     */
    protected $code = 'custom_express_shipping';

    /**
     * Calculate shipping rate.
     */
    public function calculate()
    {
        if (! $this->isAvailable()) {
            return false;
        }

        $object = new CartShippingRate;
        $object->carrier = 'custom_express_shipping';
        $object->carrier_title = $this->getConfigData('title');
        $object->method = 'custom_express_shipping_custom_express_shipping';
        $object->method_title = $this->getConfigData('title');
        $object->method_description = $this->getConfigData('description');
        
        // Basic rate calculation
        $object->price = core()->convertPrice($this->getConfigData('default_rate'));
        $object->base_price = $this->getConfigData('default_rate');

        return $object;
    }
}
```

::: info Carrier Class Explained
**Key Components:**

- **`$code`**: Must match the code in your carriers.php configuration
- **`calculate()`**: Main method that returns shipping rates for the current cart
- **`isAvailable()`**: Built-in method that checks if shipping method should be offered
- **`getConfigData()`**: Helper to retrieve configuration values
- **`CartShippingRate`**: Object that contains all shipping rate information
:::

### Enhancing the Calculate Method

Let's add more sophisticated logic for express shipping:

```php{15-35}
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    
    $object = new CartShippingRate;
    $object->carrier = 'custom_express_shipping';
    $object->carrier_title = $this->getConfigData('title');
    $object->method = 'custom_express_shipping_custom_express_shipping';
    $object->method_title = $this->getConfigData('title');
    $object->method_description = $this->getConfigData('description');
    
    // Express shipping logic with weight-based pricing
    $baseRate = $this->getConfigData('default_rate');
    $totalWeight = 0;
    
    foreach ($cart->items as $item) {
        if ($item->product->getTypeInstance()->isStockable()) {
            $weight = $item->product->weight ?? 1; // Default weight if not set
            $totalWeight += $weight * $item->quantity;
        }
    }
    
    // Add weight surcharge for heavy packages
    $weightSurcharge = 0;
    if ($totalWeight > 5) { // 5kg threshold
        $weightSurcharge = ($totalWeight - 5) * 2; // $2 per kg over 5kg
    }
    
    $finalRate = $baseRate + $weightSurcharge;
    
    $object->price = core()->convertPrice($finalRate);
    $object->base_price = $finalRate;

    return $object;
}
```

## Understanding System Configuration

The system configuration creates the admin interface for your shipping method settings:

**File:** `packages/Webkul/CustomExpressShipping/src/Config/system.php`

```php
<?php

return [
    'key'    => 'sales.carriers.custom_express_shipping',
    'name'   => 'Custom Express Shipping',
    'sort'   => 2,
    'fields' => [
        [
            'name'          => 'title',
            'title'         => 'Method Title',
            'type'          => 'text',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => true
        ],
        [
            'name'          => 'description', 
            'title'         => 'Description',
            'type'          => 'textarea',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'default_rate',
            'title'         => 'Base Rate ($)',
            'type'          => 'text',
            'validation'    => 'required|numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'active',
            'title'         => 'Enabled',
            'type'          => 'boolean',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ]
    ]
];
```

::: info System Configuration Explained
**Configuration Properties:**

- **`key`**: Configuration path following Bagisto's convention
- **`name`**: Section name in admin configuration
- **`sort`**: Order in the carriers list
- **`fields`**: Array of form fields for admin settings

**Field Properties:**
- **`name`**: Field identifier (matches getConfigData() parameter)
- **`title`**: Label shown in admin form
- **`type`**: Field type (text, textarea, select, boolean, etc.)
- **`validation`**: Laravel validation rules
- **`channel_based`**: Different values per sales channel
- **`locale_based`**: Different values per language
:::

### Adding Advanced Configuration Options

Let's enhance the configuration with more options:

```php{11-35}
return [
    'key'    => 'sales.carriers.custom_express_shipping',
    'name'   => 'Custom Express Shipping',
    'sort'   => 2,
    'fields' => [
        // ...existing fields...
        
        [
            'name'          => 'free_shipping_amount',
            'title'         => 'Free Shipping Above ($)',
            'type'          => 'text',
            'validation'    => 'nullable|numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'max_weight',
            'title'         => 'Maximum Weight (kg)',
            'type'          => 'text',
            'validation'    => 'nullable|numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'    => 'delivery_time',
            'title'   => 'Delivery Time',
            'type'    => 'select',
            'options' => [
                [
                    'title' => '1-2 Business Days',
                    'value' => '1-2_days',
                ],
                [
                    'title' => '2-3 Business Days', 
                    'value' => '2-3_days',
                ],
            ],
            'channel_based' => true,
            'locale_based'  => false,
        ],
    ]
];
```

## Registering Your Shipping Method

The service provider handles registering your shipping method with Bagisto. Let's examine and enhance the generated service provider:

**File:** `packages/Webkul/CustomExpressShipping/src/Providers/CustomExpressShippingServiceProvider.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Providers;

use Illuminate\Support\ServiceProvider;

class CustomExpressShippingServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/carriers.php',
            'carriers'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/system.php',
            'core'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Additional bootstrapping can be added here
    }
}
```

::: info Service Provider Explained
**Key Functions:**

- **`mergeConfigFrom()`**: Merges your package configs with Bagisto's core configurations
- **Carriers Registration**: Makes your shipping method available to the shipping system
- **System Configuration**: Adds your admin form fields to the configuration interface
:::

### Composer Autoloading Registration

Add your package namespace to `composer.json` in the Bagisto root directory:

```json{5}
{
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Webkul\\CustomExpressShipping\\": "packages/Webkul/CustomExpressShipping/src"
        }
    }
}
```

### Service Provider Registration

Register your service provider in `bootstrap/providers.php`:

```php{8}
<?php

return [
    App\Providers\AppServiceProvider::class,
    
    // ... other providers ...
    
    Webkul\CustomExpressShipping\Providers\CustomExpressShippingServiceProvider::class,
];
```

### Finalizing Installation

Complete the installation with these commands:

```bash
# Regenerate autoloader
composer dump-autoload

# Clear configuration cache
php artisan config:cache
```

::: warning Cache Clearing
If you encounter errors with `composer dump-autoload`, delete all files in the `bootstrap/cache` directory and try again.
:::

## Testing Your Shipping Method

Now let's test your custom express shipping method:

### Step 1: Enable in Admin

1. Go to **Admin Panel → Configuration → Sales → Carriers**
2. Find **Custom Express Shipping** section
3. Set **Enabled** to **Yes**
4. Configure your rates and settings
5. Click **Save Configuration**

### Step 2: Frontend Testing

1. Add products to cart
2. Proceed to checkout
3. Enter shipping address
4. Verify your express shipping option appears
5. Check that rates calculate correctly

### Step 3: Testing Checklist

::: info Testing Checklist
**Admin Configuration:**
- ✅ Custom Express Shipping appears in carrier settings
- ✅ All form fields render correctly
- ✅ Settings save and persist properly
- ✅ Validation works for required fields

**Frontend Functionality:**
- ✅ Shipping method appears during checkout
- ✅ Rates calculate correctly
- ✅ Method title and description display properly
- ✅ Integration with cart totals works

**Edge Cases:**
- ✅ Method respects enabled/disabled status
- ✅ Handles empty carts gracefully
- ✅ Works with different product types
- ✅ Responds correctly to weight/price thresholds
:::

## Advanced Rate Calculation Examples

Here are some common shipping rate calculation patterns:

### Free Shipping Threshold

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    $freeShippingAmount = $this->getConfigData('free_shipping_amount');
    
    // Free shipping if cart total exceeds threshold
    if ($freeShippingAmount && $cart->sub_total >= $freeShippingAmount) {
        $rate = 0;
    } else {
        $rate = $this->getConfigData('default_rate');
    }
    
    $object = new CartShippingRate;
    $object->carrier = 'custom_express_shipping';
    $object->carrier_title = $this->getConfigData('title');
    $object->method = 'custom_express_shipping_custom_express_shipping';
    $object->method_title = $this->getConfigData('title');
    $object->method_description = $this->getConfigData('description');
    $object->price = core()->convertPrice($rate);
    $object->base_price = $rate;

    return $object;
}
```

### Distance-Based Pricing

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    $shippingAddress = $cart->shipping_address;
    
    // Calculate distance (you would implement actual distance calculation)
    $distance = $this->calculateDistance($shippingAddress);
    
    $baseRate = $this->getConfigData('default_rate');
    $distanceRate = 0;
    
    if ($distance > 50) { // 50km threshold
        $distanceRate = ($distance - 50) * 0.5; // $0.50 per km over 50km
    }
    
    $finalRate = $baseRate + $distanceRate;
    
    $object = new CartShippingRate;
    // ... rest of the rate object setup
    $object->price = core()->convertPrice($finalRate);
    $object->base_price = $finalRate;

    return $object;
}
```

## Your Next Step

Congratulations! You've successfully created a custom shipping method for Bagisto. Your express shipping method now integrates seamlessly with the checkout process and provides administrators with full configuration control.

**Key Achievements:**
- ✅ Built a complete shipping method from scratch
- ✅ Implemented advanced rate calculation logic
- ✅ Created admin configuration interface
- ✅ Integrated with Bagisto's shipping system

Your shipping method is now ready for production use. You can extend it further by adding features like tracking integration, delivery time estimates, or integration with shipping carrier APIs.

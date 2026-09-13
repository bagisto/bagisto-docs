# Creating Your First Shipping Method

Let's create a custom shipping method using both approaches available in Bagisto. We'll explore the package generator for quick setup and the manual method for complete understanding.

::: info What You'll Learn
This guide covers the complete process of creating a **Custom Express Shipping** method, including:
- Package structure setup (generator vs manual)
- Configuration file creation
- Rate calculation implementation
- Admin interface integration
- Testing and deployment
:::

## Method 1: Using Bagisto Package Generator (Quick Setup)

The fastest way to create a shipping method is using Bagisto's package generator. This tool creates the proper structure and boilerplate code automatically.

### Step 1: Install Package Generator

If you haven't installed the package generator yet (it is a separate, optional development dependency; the `package:make*` commands are not part of Bagisto core, so check the generator's README for the version matching your Bagisto release):

```bash
composer require --dev bagisto/bagisto-package-generator
```

### Step 2: Generate Shipping Method Package

Navigate to your Bagisto root directory and run:

```bash
php artisan package:make-shipping-method Webkul/CustomExpressShipping
```

**Command Parameters:**
- `Webkul/CustomExpressShipping`: The vendor/package name for your shipping method

### Step 3: Handle Existing Package (If Needed)

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

### Step 4: Register the Generated Package

After generating the package, you need to register it with Bagisto:

**Add to composer.json** (in Bagisto root directory):

```json{5}
{
    "autoload": {
        "psr-4": {
            // Other PSR-4 namespaces...
            "Webkul\\CustomExpressShipping\\": "packages/Webkul/CustomExpressShipping/src"
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
    
    Webkul\CustomExpressShipping\Providers\CustomExpressShippingServiceProvider::class,
];
```

**Clear caches:**

```bash
php artisan optimize:clear
```

### Step 5: Configure Your Shipping Method

Now test the basic configuration that the generator created:

1. **Go to Admin Panel**: Navigate to **Configuration → Sales → Shipping Methods**
2. **Find Your Method**: Look for "Custom Express Shipping" section
3. **Basic Configuration**: You'll see some basic configuration fields that can be adjusted as per your needs

::: tip Translation Note
You may notice some translation keys are missing as we haven't registered translation files yet. For complete localization setup, refer to the [Localization section in Package Development](../package-development/localization.md). The main purpose here is to understand shipping method functionality.
:::

::: info Generator Creates Basic Configuration
The package generator creates a simple shipping method with:
- **Flat rate pricing**: Single rate for all orders
- **Basic admin fields**: Essential configuration options
- **Standard structure**: Following Bagisto conventions

For advanced features like weight-based pricing, API integration, or complex calculations, you'll need to customize the generated code or use the manual approach below.
:::

## Method 2: Manual Setup (Complete Understanding)

For developers who want to understand every component, let's create the shipping method manually from scratch.

### Step 1: Create Package Directory Structure

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

### Step 2: Create Carrier Configuration

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

### Step 3: Create Carrier Class

Create the main carrier class that handles rate calculation:

**Create:** `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`

::: tip Don't Get Overwhelmed!
Don't worry about understanding every line of code right now - just go with the flow! We'll cover all these concepts in detail in the following sections:
- **Carrier configuration** and properties
- **Rate calculation logic** and methods
- **System configuration** and admin fields
- **Advanced features** and customizations

Focus on getting your shipping method working first, then dive deeper into each component.
:::

```php
<?php

namespace Webkul\CustomExpressShipping\Carriers;

use Webkul\Checkout\Facades\Cart;
use Webkul\Checkout\Models\CartShippingRate;
use Webkul\Shipping\Carriers\AbstractShipping;

class CustomExpressShipping extends AbstractShipping
{
    /**
     * Shipping method carrier code, must match the carriers.php key.
     *
     * @var string
     */
    protected $code = 'custom_express_shipping';

    /**
     * Shipping method code, the value the checkout posts back.
     *
     * @var string
     */
    protected $method = 'custom_express_shipping_custom_express_shipping';

    /**
     * Calculate the rate for the current cart.
     *
     * @return CartShippingRate|false
     */
    public function calculate()
    {
        if (! $this->isAvailable()) {
            return false;
        }

        $cart = Cart::getCart();

        $cartShippingRate = new CartShippingRate;

        $cartShippingRate->carrier = $this->getCode();
        $cartShippingRate->carrier_title = $this->getConfigData('title');
        $cartShippingRate->method = $this->getMethod();
        $cartShippingRate->method_title = $this->getConfigData('title');
        $cartShippingRate->method_description = $this->getConfigData('description');

        $baseRate = $this->getConfigData('default_rate');

        $finalRate = $baseRate;

        if ($this->getConfigData('type') === 'per_unit') {
            $totalItems = 0;

            foreach ($cart->items as $item) {
                if ($item->getTypeInstance()->isStockable()) {
                    $totalItems += $item->quantity;
                }
            }

            $finalRate = $baseRate * $totalItems;
        }

        $cartShippingRate->price = core()->convertPrice($finalRate);
        $cartShippingRate->base_price = $finalRate;

        return $cartShippingRate;
    }
}
```

This is the shape of core's own `Webkul\Shipping\Carriers\FlatRate`. Note `$item->getTypeInstance()` (the cart item's own type, which is right for a configurable variant) and the two prices: `base_price` is in the base currency, `price` is converted to the channel currency with `core()->convertPrice()`.

### Step 4: Create System Configuration

Create the admin interface configuration for your shipping method:

**Create:** `packages/Webkul/CustomExpressShipping/src/Config/system.php`

```php
<?php

return [
    [
        'key'    => 'sales.carriers.custom_express_shipping',
        'name'   => 'Custom Express Shipping',
        'info'   => 'Configure the Custom Express Shipping method settings.',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'active',
                'title'         => 'Enabled',
                'type'          => 'boolean',
                'channel_based' => true,
                'locale_based'  => false,
            ],
            [
                'name'          => 'title',
                'title'         => 'Method Title',
                'type'          => 'text',
                'depends'       => 'active:1',
                'validation'    => 'required_if:active,1',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'description',
                'title'         => 'Description',
                'type'          => 'textarea',
                'depends'       => 'active:1',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'default_rate',
                'title'         => 'Base Rate',
                'type'          => 'text',
                'depends'       => 'active:1',
                'validation'    => 'required_if:active,1|numeric|min:0',
                'channel_based' => true,
                'locale_based'  => false,
            ],
            [
                'name'    => 'type',
                'title'   => 'Pricing Type',
                'type'    => 'select',
                'depends' => 'active:1',
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
        ],
    ],
];
```

Here the `active` toggle comes first and every other field depends on it, so a disabled method hides its fields, and `required_if:active,1` rather than `required` means the page can still be saved while the method is off. Core's own carrier sections keep the toggle last and put `depends` only on the title and rate; either layout works. The `info` key is required on every item; the page breaks without it.

### Step 5: Create Service Provider

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
        // merge carrier configuration
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/carriers.php',
            'carriers'
        );

        // merge system configuration  
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
    }
}
```

### Step 6: Register Your Package

After creating all the files, you need to register your package with Bagisto:

**Add to composer.json** (in Bagisto root directory):

```json{5}
{
    "autoload": {
        "psr-4": {
            // Other PSR-4 namespaces...
            "Webkul\\CustomExpressShipping\\": "packages/Webkul/CustomExpressShipping/src"
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
    
    Webkul\CustomExpressShipping\Providers\CustomExpressShippingServiceProvider::class,
];
```

**Clear caches:**

```bash
php artisan optimize:clear
```

## Testing Your Shipping Method

Now let's test your custom express shipping method:

### Step 1: Enable in Admin

1. Go to **Admin Panel → Configuration → Sales → Shipping Methods**
2. Find **Custom Express Shipping** section
3. Set **Enabled** to **Yes**
4. Configure your rates and settings
5. Click **Save Configuration**

### Step 2: Frontend Testing

1. Add a physical (simple) product to the cart; rates are only collected for carts with stockable items
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

## Generated vs Manual Package Structure

Both methods create the same final structure:

```text
packages
└── Webkul
    └── CustomExpressShipping
        └── src
            ├── Carriers
            │   └── CustomExpressShipping.php                 # Rate calculation logic
            ├── Config
            │   ├── carriers.php                              # Shipping method definition
            │   └── system.php                                # Admin configuration
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

## Your Next Steps

Congratulations! You've successfully created a custom shipping method for Bagisto. Your express shipping method now integrates seamlessly with the checkout process and provides administrators with full configuration control.

**Key Achievements:**
- ✅ Built a complete shipping method from scratch
- ✅ Implemented basic rate calculation logic
- ✅ Created admin configuration interface
- ✅ Integrated with Bagisto's shipping system

### Continue Learning

Now that you have a working shipping method, dive deeper into specific components:

**📖 [Understanding Carrier Configuration →](./understanding-carrier-configuration.md)**
Learn about carrier configuration properties, validation, and advanced options.

**📖 [Understanding Carrier Class →](./understanding-carrier-class.md)**
Learn how to implement the business logic and rate calculation methods for your shipping method.

**📖 [Understanding System Configuration →](./understanding-system-configuration.md)**
Master the admin interface creation with field types, validation, and multi-channel support.

::: tip Production Considerations
**Before deploying to production:**
- Test with various cart configurations
- Verify multi-channel and multi-locale settings
- Set up monitoring for rate calculation errors
- Document configuration options for administrators
:::

Your shipping method is now complete! You can extend it further by adding features like tracking integration, delivery time estimates, or API integrations with shipping carriers.

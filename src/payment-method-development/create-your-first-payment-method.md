# Creating Your First Payment Method

Let's create a custom payment method using both approaches available in Bagisto. We'll explore the package generator for quick setup and the manual method for complete understanding.

::: info What You'll Learn
This guide covers the complete process of creating a **Custom Stripe Payment** method, including:
- Package structure setup (generator vs manual)
- Configuration file creation
- Payment processing implementation
- Admin interface integration
:::

## Method 1: Using Bagisto Package Generator (Quick Setup)

The fastest way to create a payment method is using Bagisto's package generator.

### Step 1: Install Package Generator

If you haven't installed the package generator yet:

```bash
composer require bagisto/bagisto-package-generator
```

### Step 2: Generate Payment Method Package

Navigate to your Bagisto root directory and run:

```bash
php artisan package:make-payment-method Webkul/CustomStripePayment
```

### Step 3: Handle Existing Package (If Needed)

If the package directory already exists, use the `--force` flag:

```bash
php artisan package:make-payment-method Webkul/CustomStripePayment --force
```

::: tip Package Generator Benefits
The generator automatically creates:
- Proper directory structure following Bagisto conventions
- Payment method configuration with correct schema
- Base payment class extending AbstractPayment
- System configuration for admin settings
- Service provider with proper registration
:::

### Step 4: Register the Generated Package

After generating the package, you need to register it with Bagisto:

**Add to composer.json** (in Bagisto root directory):

```json{5}
{
    "autoload": {
        ...
        "psr-4": {
            // Other PSR-4 namespaces
            "Webkul\\CustomStripePayment\\": "packages/Webkul/CustomStripePayment/src"
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
    
    Webkul\CustomStripePayment\Providers\CustomStripePaymentServiceProvider::class,
];
```

**Clear caches:**

```bash
php artisan optimize:clear
```

### Step 5: Configure Your Payment Method

Now test the basic configuration that the generator created:

1. **Go to Admin Panel**: Navigate to **Configuration → Sales → Payment Methods**
2. **Find Your Method**: Look for "Custom Stripe Payment" section
3. **Basic Configuration**: You'll see some basic configuration fields that can be adjusted as per your needs

::: tip Translation Note
You may notice some translation keys are missing as we haven't registered translation files yet. For complete localization setup, refer to the [Localization section in Package Development](../package-development/localization.md). The main purpose here is to understand payment method functionality.
:::

::: info Generator Creates Basic Configuration
The package generator creates a simple payment method with:
- **Basic payment processing**: Simple payment handling logic
- **Basic admin fields**: Essential configuration options
- **Standard structure**: Following Bagisto conventions

For advanced features like webhook handling, refund processing, or complex payment flows, you'll need to customize the generated code or use the manual approach below.
:::

## Method 2: Manual Setup (Complete Understanding)

For developers who want to understand every component, let's create the payment method manually.

### Step 1: Create Package Directory Structure

Create the directory structure for your payment method package:

```bash
mkdir -p packages/Webkul/CustomStripePayment/src/{Payment,Config,Providers}
```

### Step 2: Create Payment Method Configuration

Create the payment methods configuration file:

**Create:** `packages/Webkul/CustomStripePayment/src/Config/payment-methods.php`

```php
<?php

return [
    'custom_stripe_payment' => [
        'code'        => 'custom_stripe_payment',
        'title'       => 'Credit Card (Stripe)',
        'description' => 'Secure credit card payments powered by Stripe',
        'class'       => 'Webkul\CustomStripePayment\Payment\CustomStripePayment',
        'active'      => true,
        'sort'        => 1,
    ],
];
```

### Step 3: Create Payment Class

Create the main payment class:

**Create:** `packages/Webkul/CustomStripePayment/src/Payment/CustomStripePayment.php`

```php
<?php

namespace Webkul\CustomStripePayment\Payment;

use Webkul\Payment\Payment\Payment;

class CustomStripePayment extends Payment
{
    /**
     * Payment method code - must match payment-methods.php key.
     */
    protected $code = 'custom_stripe_payment';

    /**
     * Get redirect URL for payment processing.
     * 
     * Note: You need to create this route in your Routes/web.php file
     * or return null if you don't need a redirect.
     */
    public function getRedirectUrl()
    {
        // return route('custom_stripe_payment.process');
        return null; // No redirect needed for this basic example
    }

    /**
     * Get additional details for frontend display.
     */
    public function getAdditionalDetails()
    {
        return [
            'title' => $this->getConfigData('title'),
            'description' => $this->getConfigData('description'),
            'requires_card_details' => true,
        ];
    }

    /**
     * Get payment method configuration data.
     */
    public function getConfigData($field)
    {
        return core()->getConfigData('sales.payment_methods.custom_stripe_payment.' . $field);
    }
}
```

::: warning Route Configuration
If you uncomment the `getRedirectUrl()` method to return a route, make sure to create the corresponding route in your package's `Routes/web.php` file. For basic payment methods that don't require external redirects, returning `null` is perfectly fine.
:::

### Step 4: Create System Configuration

Create the admin interface configuration:

**Create:** `packages/Webkul/CustomStripePayment/src/Config/system.php`

```php
<?php

return [
    [
        'key'    => 'sales.payment_methods.custom_stripe_payment',
        'name'   => 'Custom Stripe Payment',
        'info'   => 'Custom Stripe Payment Method Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'active',
                'title'         => 'Status',
                'type'          => 'boolean',
                'default_value' => true,
                'channel_based' => true,
            ],
            [
                'name'          => 'title',
                'title'         => 'Title',
                'type'          => 'text',
                'default_value' => 'Credit Card (Stripe)',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'description',
                'title'         => 'Description',
                'type'          => 'textarea',
                'default_value' => 'Secure credit card payments',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'sort',
                'title'         => 'Sort Order',
                'type'          => 'text',
                'default_value' => '1',
            ],
        ],
    ],
];
```

### Step 5: Create Service Provider

Create the service provider to register your payment method:

**Create:** `packages/Webkul/CustomStripePayment/src/Providers/CustomStripePaymentServiceProvider.php`

```php
<?php

namespace Webkul\CustomStripePayment\Providers;

use Illuminate\Support\ServiceProvider;

class CustomStripePaymentServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        // merge payment method configuration
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/payment-methods.php',
            'payment_methods'
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
        ...
        "psr-4": {
            // Other PSR-4 namespaces
            "Webkul\\CustomStripePayment\\": "packages/Webkul/CustomStripePayment/src"
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
    
    Webkul\CustomStripePayment\Providers\CustomStripePaymentServiceProvider::class,
];
```

**Clear caches:**

```bash
php artisan optimize:clear
```

## Testing Your Payment Method

Now let's test your custom payment method:

### Step 1: Enable in Admin

1. Go to **Admin Panel → Configuration → Sales → Payment Methods**
2. Find **Custom Stripe Payment** section
3. Set **Enabled** to **Yes**
4. Configure your payment settings
5. Click **Save Configuration**

### Step 2: Frontend Testing

1. Add products to cart
2. Proceed to checkout
3. Enter billing address
4. Verify your payment method appears
5. Test payment processing

## Generated vs Manual Package Structure

Both methods create the same final structure:

```text
packages
└── Webkul
    └── CustomStripePayment
        └── src
            ├── Payment
            │   └── CustomStripePayment.php                 # Payment processing logic
            ├── Config
            │   ├── payment-methods.php                     # Payment method definition
            │   └── system.php                              # Admin configuration
            └── Providers
                └── CustomStripePaymentServiceProvider.php  # Registration
```

::: tip Choosing Your Approach
**Use Package Generator When:**
- Quick prototyping or testing
- Following standard Bagisto patterns
- Building simple payment methods
- Learning Bagisto basics

**Use Manual Setup When:**
- Need complete control over code
- Building complex payment logic
- Want to understand every component
- Customizing beyond standard patterns
:::

## Your Next Steps

Congratulations! You've successfully created a custom payment method for Bagisto. Your payment method now integrates seamlessly with the checkout process.

**Key Achievements:**
- ✅ Built a complete payment method from scratch
- ✅ Implemented basic payment processing logic
- ✅ Created admin configuration interface
- ✅ Integrated with Bagisto's payment system

### Continue Learning

Now that you have a working payment method, dive deeper into specific components:

**📖 [Understanding Payment Configuration →](./understanding-payment-configuration.md)**
Learn about payment method configuration properties and system settings.

**📖 [Understanding Payment Class →](./understanding-payment-class.md)**
Master the payment processing logic and implementation details.

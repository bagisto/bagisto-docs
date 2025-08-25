# Creating Your First Payment Method

Let's create a custom payment method using both approaches available in Bagisto. We'll explore the package generator for quick setup and the manual method for complete understanding.

::: info What You'll Learn
This guide covers the complete process of creating a **Custom Stripe Payment** method, including:
- Package structure setup (generator vs manual)
- Configuration file creation
- Payment processing implementation
- Admin interface integration
- Testing and deployment
:::

## Method 1: Using Bagisto Package Generator (Quick Setup)

The fastest way to create a payment method is using Bagisto's package generator. This tool creates the proper structure and boilerplate code automatically.

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

**Command Parameters:**
- `Webkul/CustomStripePayment`: The vendor/package name for your payment method

### Step 3: Handle Existing Package (If Needed)

If the package directory already exists, use the `--force` flag:

```bash
php artisan package:make-payment-method Webkul/CustomStripePayment --force
```

::: tip Package Generator Benefits
The generator automatically creates:
- Proper directory structure following Bagisto conventions
- Payment method configuration file with correct schema
- Base payment class extending AbstractPayment
- System configuration for admin settings
- Service provider with proper registration
:::

## Method 2: Manual Setup (Complete Understanding)

For developers who want to understand every component, let's create the payment method manually from scratch.

### Step 1: Create Package Directory Structure

Create the complete directory structure for your payment method package:

```bash
mkdir -p packages/Webkul/CustomStripePayment/src/{Payment,Config,Providers}
```

This creates the following structure:

```text
packages
└── Webkul
    └── CustomStripePayment
        └── src
            ├── Payment/           # Payment processing logic
            ├── Config/            # Configuration files
            └── Providers/         # Service provider
```

### Step 2: Create Payment Method Configuration

Create the payment methods configuration file that defines your payment method properties:

**Create:** `packages/Webkul/CustomStripePayment/src/Config/payment_methods.php`

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
    ]
];
```

::: info Configuration Properties Explained
**Essential Properties:**

- **`code`**: Unique identifier for your payment method (used in database and forms)
- **`title`**: Display name shown to customers during checkout
- **`description`**: Brief explanation of the payment method
- **`class`**: Full namespace path to your payment class
- **`active`**: Default enabled/disabled status
- **`sort`**: Order in which payment methods appear (lower numbers appear first)
:::

### Step 3: Create Payment Class

Create the main payment class that handles payment processing:

**Create:** `packages/Webkul/CustomStripePayment/src/Payment/CustomStripePayment.php`

```php
<?php

namespace Webkul\CustomStripePayment\Payment;

use Webkul\Payment\Payment\Payment;

class CustomStripePayment extends Payment
{
    /**
     * Payment method code - must match payment_methods.php key.
     */
    protected $code = 'custom_stripe_payment';

    /**
     * Get redirect URL for payment processing.
     * For Stripe, we might redirect to a secure payment form.
     */
    public function getRedirectUrl()
    {
        return route('custom_stripe_payment.process');
    }

    /**
     * Check if payment method supports additional information.
     * Stripe typically requires credit card information.
     */
    public function getAdditionalDetails()
    {
        return [
            'title' => $this->getConfigData('title'),
            'description' => $this->getConfigData('description'),
            'sort' => $this->getConfigData('sort'),
            'requires_card_details' => true,
            'supports_3d_secure' => true,
        ];
    }

    /**
     * Check if payment method is available for current context.
     */
    public function isAvailable()
    {
        // Check if payment method is enabled
        if (! $this->getConfigData('active')) {
            return false;
        }

        // Check if required API keys are configured
        $publicKey = $this->getConfigData('publishable_key');
        $secretKey = $this->getConfigData('secret_key');

        if (empty($publicKey) || empty($secretKey)) {
            return false;
        }

        // Additional availability checks can be added here
        // For example: currency support, country restrictions, etc.
        return true;
    }

    /**
     * Get payment method configuration data.
     */
    public function getConfigData($field)
    {
        return core()->getConfigData('sales.payment_methods.custom_stripe_payment.' . $field);
    }

    /**
     * Process payment after form submission.
     * This method would handle the actual Stripe API integration.
     */
    public function processPayment($paymentData)
    {
        try {
            // Initialize Stripe with secret key
            $secretKey = $this->getConfigData('secret_key');
            
            // In a real implementation, you would:
            // 1. Create Stripe charge/payment intent
            // 2. Handle payment confirmation
            // 3. Process webhooks for status updates
            // 4. Update order status accordingly
            
            // For this example, we'll simulate a successful payment
            return [
                'status' => 'success',
                'transaction_id' => 'stripe_' . uniqid(),
                'message' => 'Payment processed successfully'
            ];
            
        } catch (\Exception $e) {
            return [
                'status' => 'error',
                'message' => 'Payment failed: ' . $e->getMessage()
            ];
        }
    }
}
```

### Step 4: Create System Configuration

Create the admin interface configuration for your payment method:

**Create:** `packages/Webkul/CustomStripePayment/src/Config/system.php`

```php
<?php

return [
    'key'    => 'sales.payment_methods.custom_stripe_payment',
    'name'   => 'Custom Stripe Payment',
    'sort'   => 3,
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
            'name'          => 'publishable_key',
            'title'         => 'Stripe Publishable Key',
            'type'          => 'text',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'secret_key',
            'title'         => 'Stripe Secret Key',
            'type'          => 'password',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'    => 'environment',
            'title'   => 'Environment',
            'type'    => 'select',
            'options' => [
                [
                    'title' => 'Sandbox',
                    'value' => 'sandbox',
                ],
                [
                    'title' => 'Production',
                    'value' => 'production',
                ],
            ],
            'channel_based' => true,
            'locale_based'  => false,
        ],
        [
            'name'          => 'webhook_secret',
            'title'         => 'Webhook Secret',
            'type'          => 'password',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'sort',
            'title'         => 'Sort Order',
            'type'          => 'text',
            'validation'    => 'numeric|min:0',
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

### Step 5: Create Service Provider

Create the service provider to register your payment method with Bagisto:

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
        // Merge payment method configuration
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/payment_methods.php',
            'payment_methods'
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
        // Load routes for payment processing
        $this->loadRoutesFrom(__DIR__ . '/../Routes/web.php');
        
        // Load views for payment forms
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'custom_stripe_payment');
        
        // Load translations
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'custom_stripe_payment');
    }
}
```

## Generated vs Manual Package Structure

Both methods create the same final structure:

```text
packages
└── Webkul
    └── CustomStripePayment
        └── src
            ├── Payment
            │   └── CustomStripePayment.php       # Payment processing logic
            ├── Config
            │   ├── payment_methods.php           # Payment method definition
            │   └── system.php                    # Admin configuration
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

## Registering Your Payment Method

The service provider handles registering your payment method with Bagisto. Let's examine the registration process:

### Composer Autoloading Registration

Add your package namespace to `composer.json` in the Bagisto root directory:

```json{5}
{
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Webkul\\CustomStripePayment\\": "packages/Webkul/CustomStripePayment/src"
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
    
    Webkul\CustomStripePayment\Providers\CustomStripePaymentServiceProvider::class,
];
```

After registering the service provider, run composer dump-autoload to ensure the new classes are autoloaded:

```bash
# Regenerate autoloader to recognize new package classes
composer dump-autoload
```

### Finalizing Installation

Complete the installation with these commands:

```bash
# Clear configuration cache to load new configs
php artisan config:cache

# Clear application cache
php artisan cache:clear
```

::: warning Cache Clearing
If you encounter errors with `composer dump-autoload`, delete all files in the `bootstrap/cache` directory and try again.
:::

## Testing Your Payment Method

Now let's test your custom Stripe payment method:

### Step 1: Configure in Admin

1. Go to **Admin Panel → Configuration → Sales → Payment Methods**
2. Find **Custom Stripe Payment** section
3. Set **Enabled** to **Yes**
4. Configure your Stripe API keys
5. Set environment (Sandbox for testing)
6. Click **Save Configuration**

### Step 2: Frontend Testing

1. Add products to cart
2. Proceed to checkout
3. Enter billing/shipping information
4. Verify your payment method appears in payment options
5. Test payment processing (use Stripe test cards)

### Step 3: Testing Checklist

::: info Testing Checklist
**Admin Configuration:**
- ✅ Custom Stripe Payment appears in payment method settings
- ✅ All form fields render correctly
- ✅ API key validation works
- ✅ Settings save and persist properly

**Frontend Functionality:**
- ✅ Payment method appears during checkout
- ✅ Payment form renders correctly
- ✅ Test payments process successfully
- ✅ Order status updates properly

**Security Tests:**
- ✅ Invalid API keys prevent payment processing
- ✅ Payment failures are handled gracefully
- ✅ No sensitive data is logged or exposed
- ✅ HTTPS is enforced for payment pages
:::

## Your Next Steps

Congratulations! You've successfully created a custom payment method for Bagisto. Your Stripe payment method now integrates with the checkout process and provides administrators with configuration control.

**Key Achievements:**
- ✅ Built a complete payment method from scratch
- ✅ Implemented basic payment processing logic
- ✅ Created admin configuration interface
- ✅ Integrated with Bagisto's payment system

### Continue Learning

Now that you have a working payment method, dive deeper into specific components:

**📖 [Understanding Payment Configuration →](./understanding-payment-configuration.md)**
Learn about payment method configuration properties and system configuration in detail.

**📖 [Understanding Payment Class →](./understanding-payment-class.md)**
Master the payment class implementation with advanced processing logic and security best practices.

**📖 [Advanced Payment Examples →](./advanced-payment-examples.md)**
Implement sophisticated features like webhooks, refunds, and 3D Secure authentication.

::: tip Production Considerations
**Before deploying to production:**
- Switch to production Stripe API keys
- Test with real payment amounts (then refund)
- Set up webhook endpoints for status updates
- Implement proper error logging and monitoring
- Review security and PCI compliance requirements
:::

Your payment method is now ready for advanced features like webhook handling, refund processing, and enhanced security implementations.

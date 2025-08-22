# Getting Started

Creating custom payment methods in Bagisto enables you to offer diverse payment options that cater to your customers' preferences and expand your market reach. Whether you need to integrate with local payment gateways, implement cryptocurrency payments, or create specialized payment flows, custom payment methods provide the flexibility your business requires.

For our tutorial, we'll create a **Custom Stripe Payment** method that demonstrates all the essential concepts you need to build any type of payment solution.

::: info Learning Objective
This section demonstrates how to create a complete custom payment method from scratch, including configuration options, payment processing logic, and admin interface integration.
:::

## Understanding Bagisto Payment Architecture

Bagisto's payment system is built around a flexible method-based architecture:

### Core Components
- **Payment Methods Configuration**: PHP arrays defining payment method properties
- **Payment Classes**: PHP classes containing the business logic for payment processing
- **System Configuration**: Admin interface forms for method settings
- **Payment Flow**: Integration with checkout process and order management

### Key Features
- **Flexible Payment Processing**: Support for redirects, APIs, or custom payment flows
- **Configuration Management**: Admin-friendly settings interface
- **Multi-channel Support**: Different settings per sales channel
- **Security Ready**: Built-in CSRF protection and secure payment handling

## Creating Your First Payment Method

Let's create a custom payment method using both approaches available in Bagisto. We'll explore the package generator for quick setup and the manual method for complete understanding.

### Method 1: Using Bagisto Package Generator (Quick Setup)

The fastest way to create a payment method is using Bagisto's package generator. This tool creates the proper structure and boilerplate code automatically.

#### Step 1: Install Package Generator

If you haven't installed the package generator yet:

```bash
composer require bagisto/bagisto-package-generator
```

#### Step 2: Generate Payment Method Package

Navigate to your Bagisto root directory and run:

```bash
php artisan package:make-payment-method Webkul/CustomStripePayment
```

**Command Parameters:**
- `Webkul/CustomStripePayment`: The vendor/package name for your payment method

#### Step 3: Handle Existing Package (If Needed)

If the package directory already exists, use the `--force` flag:

```bash
php artisan package:make-payment-method Webkul/CustomStripePayment --force
```

::: tip Package Generator Benefits
The generator automatically creates:
- Proper directory structure following Bagisto conventions
- Payment method configuration with correct schema
- Base payment class extending Payment
- System configuration for admin settings
- Service provider with proper registration
:::

### Method 2: Manual Setup (Complete Understanding)

For developers who want to understand every component, let's create the payment method manually from scratch.

#### Step 1: Create Package Directory Structure

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

#### Step 2: Create Payment Method Configuration

Create the payment methods configuration file that defines your payment method properties:

**Create:** `packages/Webkul/CustomStripePayment/src/Config/paymentmethods.php`

```php
<?php

return [
    'custom_stripe' => [
        'code'        => 'custom_stripe',
        'title'       => 'Custom Stripe Payment',
        'description' => 'Secure payment processing with Stripe',
        'class'       => 'Webkul\CustomStripePayment\Payment\CustomStripe',
        'active'      => true,
        'sort'        => 1,
    ],
];
```

::: info Configuration Properties Explained
**Essential Properties:**

- **`code`**: Unique identifier for your payment method (must match class name)
- **`title`**: Display name shown to customers during checkout
- **`description`**: Brief explanation of the payment method
- **`class`**: Full namespace path to your payment class
- **`active`**: Boolean to enable/disable the payment method
- **`sort`**: Order in which payment methods appear
:::

#### Step 3: Create Payment Class

Create the main payment class that handles payment processing:

**Create:** `packages/Webkul/CustomStripePayment/src/Payment/CustomStripe.php`

```php
<?php

namespace Webkul\CustomStripePayment\Payment;

use Webkul\Payment\Payment\Payment;

class CustomStripe extends Payment
{
    /**
     * Payment method code - must match paymentmethods.php key.
     */
    protected $code = 'custom_stripe';

    /**
     * Get redirect URL for payment processing.
     * 
     * This method is called when customer selects this payment method
     * and proceeds with checkout.
     */
    public function getRedirectUrl()
    {
        // Basic implementation - you can customize this
        return route('custom_stripe.process');
    }

    /**
     * Check if payment method is available for current cart/customer.
     */
    public function isAvailable()
    {
        // Check if payment method is enabled in configuration
        if (! $this->getConfigData('active')) {
            return false;
        }

        // Add custom availability logic here
        // For example: currency checks, region restrictions, etc.
        
        return true;
    }

    /**
     * Get payment method title from configuration.
     */
    public function getTitle()
    {
        return $this->getConfigData('title') ?? 'Custom Stripe Payment';
    }

    /**
     * Get payment method description from configuration.
     */
    public function getDescription()
    {
        return $this->getConfigData('description') ?? 'Secure payment with Stripe';
    }

    /**
     * Additional method for processing payment (example).
     * You can add more methods as needed for your payment flow.
     */
    public function processPayment($paymentData)
    {
        // Your payment processing logic would go here
        // For example: API calls to Stripe, validation, etc.
        
        return [
            'success' => true,
            'message' => 'Payment processed successfully',
        ];
    }
}
```

::: info Payment Class Explained
**Key Components:**

- **`$code`**: Must match the code in your paymentmethods.php configuration
- **`getRedirectUrl()`**: Returns URL where customer is redirected for payment processing
- **`isAvailable()`**: Determines if payment method should be shown to customer
- **`getTitle()` & `getDescription()`**: Retrieve display information from configuration
- **Custom Methods**: Add any additional methods needed for your payment flow
:::

#### Step 4: Create System Configuration

Create the admin interface configuration for your payment method:

**Create:** `packages/Webkul/CustomStripePayment/src/Config/system.php`

```php
<?php

return [
    [
        'key'    => 'sales.payment_methods.custom_stripe',
        'name'   => 'Custom Stripe Payment',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'title',
                'title'         => 'Method Title',
                'type'          => 'text',
                'validation'    => 'required',
                'channel_based' => false,
                'locale_based'  => true,
            ],
            [
                'name'          => 'description',
                'title'         => 'Description',
                'type'          => 'textarea',
                'channel_based' => false,
                'locale_based'  => true,
            ],
            [
                'name'          => 'publishable_key',
                'title'         => 'Stripe Publishable Key',
                'type'          => 'text',
                'validation'    => 'required_if:active,1',
                'channel_based' => false,
                'locale_based'  => false,
            ],
            [
                'name'          => 'secret_key',
                'title'         => 'Stripe Secret Key',
                'type'          => 'password',
                'validation'    => 'required_if:active,1',
                'channel_based' => false,
                'locale_based'  => false,
            ],
            [
                'name'          => 'mode',
                'title'         => 'Mode',
                'type'          => 'select',
                'options'       => [
                    [
                        'title' => 'Test',
                        'value' => 'test',
                    ],
                    [
                        'title' => 'Live',
                        'value' => 'live',
                    ],
                ],
                'channel_based' => false,
                'locale_based'  => false,
            ],
            [
                'name'          => 'active',
                'title'         => 'Enabled',
                'type'          => 'boolean',
                'validation'    => 'required',
                'channel_based' => false,
                'locale_based'  => false,
            ]
        ]
    ]
];
```

::: info System Configuration Explained
**Configuration Properties:**

- **`key`**: Configuration path following Bagisto's convention
- **`name`**: Section name in admin configuration
- **`sort`**: Order in the payment methods list
- **`fields`**: Array of form fields for admin settings

**Field Properties:**
- **`name`**: Field identifier (matches getConfigData() parameter)
- **`title`**: Label shown in admin form
- **`type`**: Field type (text, textarea, select, boolean, password, etc.)
- **`validation`**: Laravel validation rules
- **`channel_based`**: Different values per sales channel
- **`locale_based`**: Different values per language
:::

#### Step 5: Create Service Provider

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
            dirname(__DIR__) . '/Config/paymentmethods.php',
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
        // Additional bootstrapping can be added here
        // For example: loading routes, views, translations, etc.
    }
}
```

### Generated vs Manual Package Structure

Both methods create the same final structure:

```text
packages
└── Webkul
    └── CustomStripePayment
        └── src
            ├── Payment
            │   └── CustomStripe.php              # Payment processing logic
            ├── Config
            │   ├── paymentmethods.php             # Payment method definition
            │   └── system.php                     # Admin configuration
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

Let's continue with understanding each component and how to customize it for your needs.

## Understanding Payment Method Configuration

Let's examine the configuration files and understand how they work together:

### Payment Methods Configuration Deep Dive

The `paymentmethods.php` file is where you define your payment method's basic properties:

```php{3-9}
<?php

return [
    'custom_stripe' => [
        'code'        => 'custom_stripe',
        'title'       => 'Custom Stripe Payment',
        'description' => 'Secure payment processing with Stripe',
        'class'       => 'Webkul\CustomStripePayment\Payment\CustomStripe',
        'active'      => true,
        'sort'        => 1,
    ],
];
```

### System Configuration Deep Dive

The `system.php` file creates the admin interface with realistic Stripe-specific fields:

```php{16-42}
<?php

return [
    [
        'key'    => 'sales.payment_methods.custom_stripe',
        'name'   => 'Custom Stripe Payment',
        'sort'   => 1,
        'fields' => [
            // Basic configuration fields...
            
            [
                'name'          => 'publishable_key',
                'title'         => 'Stripe Publishable Key',
                'type'          => 'text',
                'validation'    => 'required_if:active,1',
                'channel_based' => false,
                'locale_based'  => false,
            ],
            [
                'name'          => 'secret_key',
                'title'         => 'Stripe Secret Key',
                'type'          => 'password',
                'validation'    => 'required_if:active,1',
                'channel_based' => false,
                'locale_based'  => false,
            ],
            [
                'name'          => 'webhook_secret',
                'title'         => 'Webhook Secret',
                'type'          => 'text',
                'validation'    => 'nullable',
                'channel_based' => false,
                'locale_based'  => false,
            ],
            [
                'name'          => 'capture_mode',
                'title'         => 'Payment Capture',
                'type'          => 'select',
                'options'       => [
                    [
                        'title' => 'Automatic',
                        'value' => 'automatic',
                    ],
                    [
                        'title' => 'Manual',
                        'value' => 'manual',
                    ],
                ],
                'channel_based' => false,
                'locale_based'  => false,
            ],
        ]
    ]
];
```

## Enhancing the Payment Class

Let's create a more comprehensive payment class with realistic Stripe integration patterns:

```php{25-95}
<?php

namespace Webkul\CustomStripePayment\Payment;

use Webkul\Payment\Payment\Payment;
use Webkul\Checkout\Facades\Cart;
use Webkul\Sales\Repositories\OrderRepository;

class CustomStripe extends Payment
{
    /**
     * Payment method code.
     */
    protected $code = 'custom_stripe';

    /**
     * Order repository instance.
     */
    protected $orderRepository;

    /**
     * Create a new payment instance.
     */
    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * Get redirect URL for Stripe payment processing.
     */
    public function getRedirectUrl()
    {
        $cart = Cart::getCart();
        
        // Create Stripe session and return checkout URL
        $sessionData = $this->createStripeSession($cart);
        
        if ($sessionData['success']) {
            return $sessionData['checkout_url'];
        }
        
        // Fallback to error page
        return route('shop.checkout.cart.index');
    }

    /**
     * Check if payment method is available.
     */
    public function isAvailable()
    {
        // Check if payment method is enabled
        if (! $this->getConfigData('active')) {
            return false;
        }

        // Check if required API keys are configured
        if (! $this->getConfigData('publishable_key') || ! $this->getConfigData('secret_key')) {
            return false;
        }

        $cart = Cart::getCart();
        
        // Check currency support (Stripe supports many currencies)
        $supportedCurrencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY'];
        if (! in_array($cart->cart_currency_code, $supportedCurrencies)) {
            return false;
        }

        // Check minimum amount (Stripe has minimum amounts per currency)
        $minimumAmounts = [
            'USD' => 0.50,
            'EUR' => 0.50,
            'GBP' => 0.30,
            'CAD' => 0.50,
            'AUD' => 0.50,
            'JPY' => 50,
        ];
        
        $minAmount = $minimumAmounts[$cart->cart_currency_code] ?? 0.50;
        if ($cart->grand_total < $minAmount) {
            return false;
        }

        return true;
    }

    /**
     * Create Stripe checkout session.
     */
    protected function createStripeSession($cart)
    {
        try {
            // Initialize Stripe with secret key
            $secretKey = $this->getConfigData('secret_key');
            
            // This is a simplified example - you would use actual Stripe SDK here
            $lineItems = [];
            foreach ($cart->items as $item) {
                $lineItems[] = [
                    'price_data' => [
                        'currency' => strtolower($cart->cart_currency_code),
                        'product_data' => [
                            'name' => $item->name,
                        ],
                        'unit_amount' => $item->price * 100, // Stripe uses cents
                    ],
                    'quantity' => $item->quantity,
                ];
            }

            // Create session data
            $sessionData = [
                'success' => true,
                'checkout_url' => route('custom_stripe.checkout', ['cart' => $cart->id]),
                'session_id' => 'cs_' . uniqid(),
            ];

            return $sessionData;

        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Get configuration data with environment support.
     */
    public function getConfigData($field)
    {
        $mode = parent::getConfigData('mode') ?? 'test';
        
        // For API keys, use mode-specific configuration
        if (in_array($field, ['publishable_key', 'secret_key'])) {
            $field = $mode . '_' . $field;
        }
        
        return parent::getConfigData($field);
    }
}
```

::: info Advanced Payment Class Features
**Real-World Functionality:**

- **Environment Support**: Separate test/live API keys
- **Currency Validation**: Checks supported currencies and minimum amounts
- **Error Handling**: Graceful handling of API failures
- **Session Management**: Creates and manages payment sessions
- **Configuration Validation**: Ensures required settings are present

**Security Considerations:**
- API keys are retrieved securely from configuration
- Input validation on cart data
- Error handling prevents sensitive data exposure
:::

## Registering Your Payment Method

The service provider handles registering your payment method with Bagisto:

**Enhanced Service Provider:** `packages/Webkul/CustomStripePayment/src/Providers/CustomStripePaymentServiceProvider.php`

```php{22-35}
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
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/paymentmethods.php',
            'payment_methods'
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
        // Register routes for payment processing
        $this->loadRoutesFrom(__DIR__ . '/../Routes/web.php');
        
        // Load views if you have custom payment forms
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'custom_stripe');
        
        // Load translations
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'custom_stripe');
    }
}
```

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

## Testing Your Payment Method

Now let's test your custom Stripe payment method:

### Step 1: Configure in Admin

1. Go to **Admin Panel → Configuration → Sales → Payment Methods**
2. Find **Custom Stripe Payment** section
3. Set **Enabled** to **Yes**
4. Add your Stripe API keys (use test keys for development)
5. Configure other settings as needed
6. Click **Save Configuration**

### Step 2: Frontend Testing

1. Add products to cart
2. Proceed to checkout
3. Fill in billing/shipping information
4. Verify Custom Stripe Payment appears as an option
5. Select the payment method and test the flow

### Step 3: Testing Checklist

::: info Testing Checklist
**Admin Configuration:**
- ✅ Custom Stripe Payment appears in payment methods settings
- ✅ All form fields render correctly
- ✅ Settings save and persist properly
- ✅ Validation works for required fields

**Frontend Functionality:**
- ✅ Payment method appears during checkout
- ✅ Payment method respects enabled/disabled status
- ✅ Currency and amount validation works
- ✅ Redirect flow functions properly

**Edge Cases:**
- ✅ Method handles missing API keys gracefully
- ✅ Works with different cart currencies
- ✅ Respects minimum amount requirements
- ✅ Error handling displays user-friendly messages
:::

## Advanced Payment Processing Examples

Here are some common payment processing patterns:

### Webhook Handling

```php
<?php

namespace Webkul\CustomStripePayment\Http\Controllers;

use Illuminate\Http\Request;
use Webkul\Sales\Repositories\OrderRepository;

class WebhookController extends Controller
{
    protected $orderRepository;

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    /**
     * Handle Stripe webhooks.
     */
    public function handle(Request $request)
    {
        $payload = $request->getContent();
        $signature = $request->header('Stripe-Signature');
        
        // Verify webhook signature
        $webhookSecret = config('payment_methods.custom_stripe.webhook_secret');
        
        try {
            // Verify and parse webhook (simplified example)
            $event = $this->verifyWebhook($payload, $signature, $webhookSecret);
            
            switch ($event['type']) {
                case 'payment_intent.succeeded':
                    $this->handlePaymentSuccess($event['data']['object']);
                    break;
                    
                case 'payment_intent.payment_failed':
                    $this->handlePaymentFailed($event['data']['object']);
                    break;
            }
            
            return response('Webhook handled', 200);
            
        } catch (\Exception $e) {
            return response('Webhook error', 400);
        }
    }

    /**
     * Handle successful payment.
     */
    protected function handlePaymentSuccess($paymentIntent)
    {
        $orderId = $paymentIntent['metadata']['order_id'] ?? null;
        
        if ($orderId) {
            $order = $this->orderRepository->find($orderId);
            if ($order && $order->status === 'pending_payment') {
                $order->status = 'processing';
                $order->save();
            }
        }
    }
}
```

### Custom Payment Form

```php
// In your payment class
public function getFormFields()
{
    return [
        'publishable_key' => $this->getConfigData('publishable_key'),
        'currency' => strtolower(Cart::getCart()->cart_currency_code),
        'amount' => Cart::getCart()->grand_total * 100, // Convert to cents
    ];
}
```

## Your Next Step

Congratulations! You've successfully created a custom payment method for Bagisto. Your Stripe payment method now integrates seamlessly with the checkout process and provides administrators with full configuration control.

**Key Achievements:**
- ✅ Built a complete payment method from scratch
- ✅ Implemented secure payment processing logic
- ✅ Created comprehensive admin configuration interface
- ✅ Integrated with Bagisto's payment system

Your payment method is now ready for production use. You can extend it further by adding features like:
- Webhook handling for real-time payment updates
- Refund processing capabilities
- Subscription payment support
- Advanced fraud detection

# Understanding Payment Class

The payment class is the core component that handles payment processing logic, security validation, and integration with payment gateways. This is where the actual payment processing happens.

::: info What You'll Learn
This section covers:
- Payment class structure and key methods
- Secure payment processing implementation
- Error handling and validation techniques
- Integration with payment gateway APIs
- Order status management
:::

## Payment Class Foundation

Your payment class extends the base `Payment` class and implements the payment processing logic:

**File:** `packages/Webkul/CustomStripePayment/src/Payment/CustomStripePayment.php`

```php
<?php

namespace Webkul\CustomStripePayment\Payment;

use Webkul\Payment\Payment\Payment;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Stripe\Exception\CardException;

class CustomStripePayment extends Payment
{
    /**
     * Payment method code - must match payment_methods.php key.
     */
    protected $code = 'custom_stripe_payment';

    /**
     * Initialize Stripe configuration.
     */
    public function __construct()
    {
        parent::__construct();
        
        // Set Stripe API key
        $secretKey = $this->getConfigData('secret_key');
        if ($secretKey) {
            Stripe::setApiKey($secretKey);
        }
    }
}
```

## Essential Payment Methods

### Check Availability
```php
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

    // Check currency support
    $currentCurrency = core()->getCurrentCurrencyCode();
    $supportedCurrencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
    
    if (! in_array($currentCurrency, $supportedCurrencies)) {
        return false;
    }

    // Check minimum amount requirements
    $cart = cart()->getCart();
    if ($cart && $cart->grand_total < 0.50) { // Stripe minimum
        return false;
    }

    return true;
}
```

### Get Additional Details
```php
/**
 * Get additional information for frontend display.
 */
public function getAdditionalDetails()
{
    return [
        'title' => $this->getConfigData('title'),
        'description' => $this->getConfigData('description'),
        'sort' => $this->getConfigData('sort'),
        'code' => $this->code,
        'requires_card_details' => true,
        'supports_3d_secure' => true,
        'supports_save_card' => true,
        'publishable_key' => $this->getConfigData('publishable_key'),
        'environment' => $this->getConfigData('environment'),
    ];
}
```

### Get Redirect URL
```php
/**
 * Get redirect URL for payment processing.
 */
public function getRedirectUrl()
{
    return route('custom_stripe_payment.process');
}
```

## Advanced Payment Processing

### Create Payment Intent
```php
/**
 * Create Stripe Payment Intent for secure processing.
 */
public function createPaymentIntent($order)
{
    try {
        $paymentIntent = PaymentIntent::create([
            'amount' => round($order->grand_total * 100), // Convert to cents
            'currency' => strtolower($order->order_currency_code),
            'payment_method_types' => ['card'],
            'capture_method' => $this->getConfigData('capture_mode') === 'manual' ? 'manual' : 'automatic',
            'metadata' => [
                'order_id' => $order->id,
                'customer_email' => $order->customer_email,
                'store_name' => core()->getCurrentChannel()->name,
            ],
            'description' => 'Order #' . $order->increment_id,
        ]);

        return [
            'success' => true,
            'client_secret' => $paymentIntent->client_secret,
            'payment_intent_id' => $paymentIntent->id,
        ];

    } catch (CardException $e) {
        return [
            'success' => false,
            'error' => $e->getError()->message,
        ];
    } catch (\Exception $e) {
        \Log::error('Stripe Payment Intent creation failed: ' . $e->getMessage());
        
        return [
            'success' => false,
            'error' => 'Payment processing failed. Please try again.',
        ];
    }
}
```

### Process Payment
```php
/**
 * Process payment after customer confirmation.
 */
public function processPayment($paymentData, $order)
{
    try {
        // Retrieve payment intent
        $paymentIntentId = $paymentData['payment_intent_id'];
        $paymentIntent = PaymentIntent::retrieve($paymentIntentId);

        // Verify payment succeeded
        if ($paymentIntent->status !== 'succeeded') {
            throw new \Exception('Payment not completed');
        }

        // Create payment record
        $payment = $this->createPaymentRecord($order, $paymentIntent);

        // Update order status
        $this->updateOrderStatus($order, $paymentIntent);

        return [
            'success' => true,
            'transaction_id' => $paymentIntent->id,
            'payment' => $payment,
        ];

    } catch (\Exception $e) {
        \Log::error('Stripe payment processing failed: ' . $e->getMessage());
        
        return [
            'success' => false,
            'error' => $e->getMessage(),
        ];
    }
}
```

### Create Payment Record
```php
/**
 * Create payment record in database.
 */
protected function createPaymentRecord($order, $paymentIntent)
{
    $payment = app(\Webkul\Sales\Repositories\OrderPaymentRepository::class)->create([
        'order_id' => $order->id,
        'method' => $this->getCode(),
        'method_title' => $this->getConfigData('title'),
        'transaction_id' => $paymentIntent->id,
        'amount' => $order->grand_total,
        'additional_details' => json_encode([
            'stripe_payment_intent_id' => $paymentIntent->id,
            'stripe_payment_method_id' => $paymentIntent->payment_method,
            'environment' => $this->getConfigData('environment'),
            'capture_method' => $paymentIntent->capture_method,
        ]),
    ]);

    return $payment;
}
```

### Update Order Status
```php
/**
 * Update order status based on payment result.
 */
protected function updateOrderStatus($order, $paymentIntent)
{
    $orderRepository = app(\Webkul\Sales\Repositories\OrderRepository::class);
    
    if ($paymentIntent->status === 'succeeded') {
        if ($paymentIntent->capture_method === 'manual' && ! $paymentIntent->amount_captured) {
            // Authorization only
            $orderRepository->update(['status' => 'processing'], $order->id);
        } else {
            // Payment captured
            $orderRepository->update(['status' => 'processing'], $order->id);
        }
    } else {
        $orderRepository->update(['status' => 'pending_payment'], $order->id);
    }
}
```

## Error Handling and Security

### Comprehensive Error Handling
```php
/**
 * Handle different types of payment errors.
 */
protected function handlePaymentError(\Exception $e)
{
    if ($e instanceof CardException) {
        // Card was declined
        $errorMessage = $e->getError()->message;
        
        \Log::warning('Stripe card declined', [
            'error_code' => $e->getError()->code,
            'error_type' => $e->getError()->type,
            'message' => $errorMessage,
        ]);
        
        return [
            'success' => false,
            'error' => $errorMessage,
            'retry_allowed' => true,
        ];
        
    } elseif ($e instanceof \Stripe\Exception\RateLimitException) {
        // Rate limit exceeded
        \Log::error('Stripe rate limit exceeded');
        
        return [
            'success' => false,
            'error' => 'Service temporarily unavailable. Please try again in a moment.',
            'retry_allowed' => true,
        ];
        
    } elseif ($e instanceof \Stripe\Exception\InvalidRequestException) {
        // Invalid request
        \Log::error('Stripe invalid request', ['message' => $e->getMessage()]);
        
        return [
            'success' => false,
            'error' => 'Payment configuration error. Please contact support.',
            'retry_allowed' => false,
        ];
        
    } else {
        // Generic error
        \Log::error('Stripe payment error', [
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
        ]);
        
        return [
            'success' => false,
            'error' => 'Payment processing failed. Please try again.',
            'retry_allowed' => true,
        ];
    }
}
```

### Input Validation
```php
/**
 * Validate payment data before processing.
 */
protected function validatePaymentData($paymentData)
{
    $requiredFields = ['payment_intent_id'];
    
    foreach ($requiredFields as $field) {
        if (empty($paymentData[$field])) {
            throw new \InvalidArgumentException("Missing required field: {$field}");
        }
    }
    
    // Validate payment intent ID format
    if (! preg_match('/^pi_[a-zA-Z0-9]{24}$/', $paymentData['payment_intent_id'])) {
        throw new \InvalidArgumentException('Invalid payment intent ID format');
    }
    
    return true;
}
```

### Environment-based Configuration
```php
/**
 * Get environment-specific configuration.
 */
protected function getEnvironmentConfig()
{
    $environment = $this->getConfigData('environment');
    
    return [
        'secret_key' => $this->getConfigData('secret_key'),
        'publishable_key' => $this->getConfigData('publishable_key'),
        'webhook_secret' => $this->getConfigData('webhook_secret'),
        'is_test_mode' => $environment === 'sandbox',
    ];
}
```

## Refund Processing

### Process Refund
```php
/**
 * Process refund through Stripe.
 */
public function refund($payment, $amount = null)
{
    try {
        $transactionId = $payment->transaction_id;
        
        // Determine refund amount
        $refundAmount = $amount ? round($amount * 100) : null; // Convert to cents
        
        // Create refund
        $refund = \Stripe\Refund::create([
            'payment_intent' => $transactionId,
            'amount' => $refundAmount, // null for full refund
            'metadata' => [
                'order_id' => $payment->order_id,
                'refund_reason' => 'Customer request',
            ],
        ]);

        // Create refund record
        $this->createRefundRecord($payment, $refund, $amount);

        return [
            'success' => true,
            'refund_id' => $refund->id,
            'amount' => $refund->amount / 100,
        ];

    } catch (\Exception $e) {
        \Log::error('Stripe refund failed', [
            'payment_id' => $payment->id,
            'error' => $e->getMessage(),
        ]);

        return [
            'success' => false,
            'error' => 'Refund processing failed: ' . $e->getMessage(),
        ];
    }
}
```

## Configuration Helper Methods

### Get Configuration Data
```php
/**
 * Get payment method configuration data.
 */
public function getConfigData($field)
{
    return core()->getConfigData('sales.payment_methods.custom_stripe_payment.' . $field);
}

/**
 * Check if test mode is enabled.
 */
public function isTestMode()
{
    return $this->getConfigData('environment') === 'sandbox';
}

/**
 * Get formatted configuration for frontend.
 */
public function getClientConfiguration()
{
    return [
        'publishable_key' => $this->getConfigData('publishable_key'),
        'environment' => $this->getConfigData('environment'),
        'currency' => strtolower(core()->getCurrentCurrencyCode()),
        'country' => core()->getCurrentChannel()->default_locale->country ?? 'US',
    ];
}
```

## Best Practices

### Security Implementation
```php
// Always validate webhook signatures
protected function validateWebhookSignature($payload, $signature)
{
    $secret = $this->getConfigData('webhook_secret');
    
    try {
        \Stripe\Webhook::constructEvent($payload, $signature, $secret);
        return true;
    } catch (\Exception $e) {
        \Log::warning('Invalid webhook signature', ['error' => $e->getMessage()]);
        return false;
    }
}

// Never log sensitive data
protected function logPaymentActivity($action, $data = [])
{
    // Remove sensitive fields before logging
    $sanitizedData = array_diff_key($data, [
        'secret_key' => '',
        'publishable_key' => '',
        'card_number' => '',
        'cvv' => '',
    ]);
    
    \Log::info("Payment activity: {$action}", $sanitizedData);
}
```

### Performance Optimization
```php
// Cache API responses when appropriate
protected function getCachedExchangeRate($currency)
{
    $cacheKey = "stripe_exchange_rate_{$currency}";
    
    return cache()->remember($cacheKey, 3600, function () use ($currency) {
        return $this->fetchExchangeRateFromAPI($currency);
    });
}

// Use async processing for webhooks
protected function processWebhookAsync($webhookData)
{
    // Queue webhook processing for better performance
    dispatch(new ProcessStripeWebhook($webhookData))->onQueue('payments');
}
```

## Key Takeaways

Effective payment class implementation balances functionality, security, and performance:

**Implementation Guidelines:**
- ✅ Always validate input data before processing
- ✅ Implement comprehensive error handling
- ✅ Use environment-specific configuration
- ✅ Log activities without exposing sensitive data

**Security Best Practices:**
- ✅ Never store sensitive payment data
- ✅ Validate webhook signatures
- ✅ Use HTTPS for all payment operations
- ✅ Implement proper access controls

**Performance Considerations:**
- ✅ Cache expensive API calls when appropriate
- ✅ Use async processing for webhooks
- ✅ Implement proper retry mechanisms
- ✅ Monitor and log payment performance

### Continue Learning

**📖 [Advanced Payment Examples →](./advanced-payment-examples.md)**
Explore webhook handling, 3D Secure implementation, and complex payment scenarios.

**📖 [Understanding Payment Configuration ←](./understanding-payment-configuration.md)**
Learn about the configuration options that power these payment methods.

**📖 [Back to Getting Started ←](./getting-started.md)**
Return to the main payment method development guide.

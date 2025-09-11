# Understanding Payment Class

When you created your first payment method, you built this `CustomStripePayment` class. Now let's dive deeper into how each part works:

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

## Understanding Key Methods

Let's break down each method in your `CustomStripePayment` class and understand what they do and when they're used.

### Payment Method Code

The `$code` property is the foundation of your payment method - it connects all the pieces together.

```php
protected $code = 'custom_stripe_payment';
```

::: info When Do You Need This Property?
Usually, you don't need to explicitly set this property because if your codes are properly set, then config data can get properly. However, if codes are not in convention then you might need this property to override the default behavior.
:::

**Purpose:** This is the unique identifier that ties everything together:
- Must match the key in `payment-methods.php`
- Used in configuration paths
- References your payment method throughout Bagisto

### Redirect URL Handling

This method controls the payment flow - whether customers stay on your site or get redirected elsewhere.

```php
public function getRedirectUrl()
{
    return null; // No redirect needed for this basic example
}
```

::: info Basic Example Note
In this example, we return `null` to keep things simple. At this stage, orders will be placed directly without external redirects. However, in real-life scenarios, you might need to redirect customers to external payment gateways for actual payment processing.
:::

**Purpose:** Determines where to redirect customers for payment processing:
- Return `null` for inline payment forms
- Return a route for external payment pages
- Used for gateways that require external redirects

**When to use redirects:**
- PayPal Checkout
- Bank transfer instructions page
- External payment gateway forms

### Frontend Display Information

This method provides all the data your payment method needs to display correctly on the checkout page.

```php
public function getAdditionalDetails()
{
    return [
        'title' => $this->getConfigData('title'),
        'description' => $this->getConfigData('description'),
        'requires_card_details' => true,
    ];
}
```

**Purpose:** Provides frontend with payment method information:
- `title`: Display name from admin configuration
- `description`: Payment method description
- `requires_card_details`: Tells frontend to show card form
- Custom properties for your specific needs

### Configuration Data Access

This method handles how your payment class retrieves configuration values from the admin panel.

```php
public function getConfigData($field)
{
    return core()->getConfigData('sales.payment_methods.custom_stripe_payment.' . $field);
}
```

::: info When Do You Need This Method?
Usually, you don't need this method because if your payment method code is properly set, then config data can get properly. However, if not in convention then you might need this method to override the default behavior.
:::

**Purpose:** Retrieves admin configuration values:
- Builds the full configuration path
- Accesses values set in admin panel
- Returns the configured value for the specified field

## Best Practices for Payment Classes

Here are some essential practices to follow when building robust payment methods:

::: warning Implementation Note
The methods shown in this section are **demonstration examples** for best practices. In real-world applications, you need to implement these methods according to your specific payment gateway requirements and business logic. Use these examples as reference guides and adapt them to your particular use case.
:::

### Error Handling

Always implement comprehensive error handling in your payment methods:

```php
/**
 * Handle payment errors gracefully.
 */
protected function handlePaymentError(\Exception $e)
{
    // log the error for debugging
    \Log::error('Payment error in ' . $this->code, [
        'error' => $e->getMessage(),
        'trace' => $e->getTraceAsString(),
    ]);

    // return user-friendly error message
    return [
        'success' => false,
        'error' => 'Payment processing failed. Please try again or contact support.',
    ];
}
```

### Security Considerations

Always validate and sanitize data before processing payments to protect your application and customers.

```php
/**
 * Validate payment data before processing.
 */
protected function validatePaymentData($data)
{
    $validator = validator($data, [
        'amount' => 'required|numeric|min:0.01',
        'currency' => 'required|string|size:3',
        'customer_email' => 'required|email',
    ]);

    if ($validator->fails()) {
        throw new \InvalidArgumentException($validator->errors()->first());
    }

    return true;
}
```

### Logging and Debugging

Proper logging helps you track payment activities and troubleshoot issues without exposing sensitive information.

```php
/**
 * Log payment activities for debugging and audit.
 */
protected function logPaymentActivity($action, $data = [])
{
    // remove sensitive data before logging
    $sanitizedData = array_diff_key($data, [
        'api_key' => '',
        'secret_key' => '',
        'card_number' => '',
        'cvv' => '',
    ]);

    \Log::info("Payment {$action} for {$this->code}", $sanitizedData);
}
```

### Comprehensive Error Handling

Different payment scenarios require different error handling approaches. Here's how to handle various types of payment errors gracefully:

```php
/**
 * Handle different types of payment errors.
 */
protected function handlePaymentError(\Exception $e)
{
    if ($e instanceof CardException) {
        // card was declined
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
        // rate limit exceeded
        \Log::error('Stripe rate limit exceeded');
        
        return [
            'success' => false,
            'error' => 'Service temporarily unavailable. Please try again in a moment.',
            'retry_allowed' => true,
        ];
    } elseif ($e instanceof \Stripe\Exception\InvalidRequestException) {
        // invalid request
        \Log::error('Stripe invalid request', ['message' => $e->getMessage()]);
        
        return [
            'success' => false,
            'error' => 'Payment configuration error. Please contact support.',
            'retry_allowed' => false,
        ];
    } else {
        // generic error
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

## Continue Your Journey

**📖 [Understanding Payment Configuration ←](./understanding-payment-configuration.md)**
Learn about the configuration system that powers your payment method.

**📖 [Back to Creating Your First Payment Method ←](./create-your-first-payment-method.md)**
Review how we built this payment method step by step.

**📖 [Back to Getting Started ←](./getting-started.md)**
Return to the main payment method development guide.

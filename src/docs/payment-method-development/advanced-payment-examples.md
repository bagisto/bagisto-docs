# Advanced Payment Examples

Once you have the basic payment method working, you can implement sophisticated features like webhook handling, 3D Secure authentication, and complex payment scenarios. This section provides real-world examples of advanced payment implementations.

::: info What You'll Learn
This section covers:
- Webhook handling for real-time payment updates
- 3D Secure authentication implementation
- Recurring payments and subscriptions
- Refund and dispute management
- Multi-party payment scenarios
- Advanced security and compliance features
:::

## Webhook Implementation

Webhooks provide real-time updates about payment status changes, ensuring your store stays synchronized with the payment gateway.

### Webhook Controller Setup

**Create:** `packages/Webkul/CustomStripePayment/src/Http/Controllers/WebhookController.php`

```php
<?php

namespace Webkul\CustomStripePayment\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Controller;
use Stripe\Webhook;
use Webkul\Sales\Repositories\OrderRepository;
use Webkul\Sales\Repositories\OrderPaymentRepository;

class WebhookController extends Controller
{
    protected $orderRepository;
    protected $paymentRepository;

    public function __construct(
        OrderRepository $orderRepository,
        OrderPaymentRepository $paymentRepository
    ) {
        $this->orderRepository = $orderRepository;
        $this->paymentRepository = $paymentRepository;
    }

    /**
     * Handle Stripe webhook events.
     */
    public function handle(Request $request)
    {
        $payload = $request->getContent();
        $signature = $request->header('Stripe-Signature');
        
        try {
            // Verify webhook signature
            $event = $this->verifyWebhookSignature($payload, $signature);
            
            // Process the event
            $this->processWebhookEvent($event);
            
            return response()->json(['status' => 'success']);
            
        } catch (\Exception $e) {
            \Log::error('Webhook processing failed', [
                'error' => $e->getMessage(),
                'payload' => $payload,
            ]);
            
            return response()->json(['error' => 'Webhook processing failed'], 400);
        }
    }

    /**
     * Verify webhook signature for security.
     */
    protected function verifyWebhookSignature($payload, $signature)
    {
        $webhookSecret = $this->getWebhookSecret();
        
        return Webhook::constructEvent($payload, $signature, $webhookSecret);
    }

    /**
     * Process different webhook event types.
     */
    protected function processWebhookEvent($event)
    {
        switch ($event->type) {
            case 'payment_intent.succeeded':
                $this->handlePaymentSucceeded($event->data->object);
                break;
                
            case 'payment_intent.payment_failed':
                $this->handlePaymentFailed($event->data->object);
                break;
                
            case 'payment_intent.requires_action':
                $this->handlePaymentRequiresAction($event->data->object);
                break;
                
            case 'charge.dispute.created':
                $this->handleChargeDispute($event->data->object);
                break;
                
            case 'invoice.payment_succeeded':
                $this->handleSubscriptionPayment($event->data->object);
                break;
                
            default:
                \Log::info('Unhandled webhook event', ['type' => $event->type]);
        }
    }

    /**
     * Handle successful payment confirmation.
     */
    protected function handlePaymentSucceeded($paymentIntent)
    {
        $orderId = $paymentIntent->metadata->order_id ?? null;
        
        if (! $orderId) {
            \Log::warning('Payment succeeded but no order ID in metadata', [
                'payment_intent_id' => $paymentIntent->id
            ]);
            return;
        }

        $order = $this->orderRepository->find($orderId);
        
        if (! $order) {
            \Log::error('Order not found for payment intent', [
                'order_id' => $orderId,
                'payment_intent_id' => $paymentIntent->id
            ]);
            return;
        }

        // Update order status
        $this->orderRepository->update([
            'status' => 'processing'
        ], $order->id);

        // Update payment record
        $payment = $this->paymentRepository->findOneWhere([
            'transaction_id' => $paymentIntent->id
        ]);

        if ($payment) {
            $this->paymentRepository->update([
                'additional_details' => json_encode([
                    'stripe_payment_intent_id' => $paymentIntent->id,
                    'stripe_charge_id' => $paymentIntent->latest_charge,
                    'webhook_processed_at' => now(),
                    'amount_received' => $paymentIntent->amount_received / 100,
                ])
            ], $payment->id);
        }

        \Log::info('Payment confirmed via webhook', [
            'order_id' => $orderId,
            'payment_intent_id' => $paymentIntent->id
        ]);
    }

    /**
     * Handle failed payment.
     */
    protected function handlePaymentFailed($paymentIntent)
    {
        $orderId = $paymentIntent->metadata->order_id ?? null;
        
        if ($orderId) {
            $order = $this->orderRepository->find($orderId);
            
            if ($order) {
                $this->orderRepository->update([
                    'status' => 'canceled'
                ], $order->id);
            }
        }

        \Log::warning('Payment failed via webhook', [
            'order_id' => $orderId,
            'payment_intent_id' => $paymentIntent->id,
            'last_payment_error' => $paymentIntent->last_payment_error
        ]);
    }

    /**
     * Handle payment requiring additional action (3D Secure).
     */
    protected function handlePaymentRequiresAction($paymentIntent)
    {
        $orderId = $paymentIntent->metadata->order_id ?? null;
        
        if ($orderId) {
            // Notify customer that additional authentication is required
            $this->sendAuthenticationRequiredNotification($orderId, $paymentIntent);
        }

        \Log::info('Payment requires additional action', [
            'order_id' => $orderId,
            'payment_intent_id' => $paymentIntent->id
        ]);
    }

    /**
     * Get webhook secret from configuration.
     */
    protected function getWebhookSecret()
    {
        return core()->getConfigData('sales.payment_methods.custom_stripe_payment.webhook_secret');
    }
}
```

### Webhook Route Registration

**Create:** `packages/Webkul/CustomStripePayment/src/Routes/web.php`

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\CustomStripePayment\Http\Controllers\WebhookController;

Route::post('stripe/webhook', [WebhookController::class, 'handle'])
    ->name('custom_stripe_payment.webhook')
    ->middleware('api');
```

## 3D Secure Authentication

Implement Strong Customer Authentication (SCA) compliance with 3D Secure:

### Frontend 3D Secure Implementation

**Create:** `packages/Webkul/CustomStripePayment/src/Resources/views/payment-form.blade.php`

```html
<div id="stripe-payment-form">
    <div id="card-element">
        <!-- Stripe Elements will create form elements here -->
    </div>
    
    <div id="card-errors" role="alert"></div>
    
    <button id="submit-payment" class="btn btn-primary">
        Complete Payment
    </button>
</div>

<script src="https://js.stripe.com/v3/"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Stripe
    const stripe = Stripe('{{ $publishableKey }}');
    const elements = stripe.elements();
    
    // Create card element
    const cardElement = elements.create('card', {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
        },
    });
    
    cardElement.mount('#card-element');
    
    // Handle form submission
    document.getElementById('submit-payment').addEventListener('click', async function(event) {
        event.preventDefault();
        
        const {token, error} = await stripe.createToken(cardElement);
        
        if (error) {
            showError(error.message);
            return;
        }
        
        // Create payment intent
        const response = await fetch('/stripe/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify({
                payment_method: token.id,
                order_id: '{{ $orderId }}'
            })
        });
        
        const {client_secret, error: serverError} = await response.json();
        
        if (serverError) {
            showError(serverError);
            return;
        }
        
        // Confirm payment with 3D Secure if required
        const {error: confirmError} = await stripe.confirmCardPayment(client_secret, {
            payment_method: token.id
        });
        
        if (confirmError) {
            showError(confirmError.message);
        } else {
            // Payment succeeded, redirect to success page
            window.location.href = '/checkout/success';
        }
    });
    
    function showError(message) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = message;
    }
});
</script>
```

### 3D Secure Server-side Handling

```php
/**
 * Create payment intent with 3D Secure support.
 */
public function createSecurePaymentIntent($order, $paymentMethodId)
{
    try {
        $paymentIntent = PaymentIntent::create([
            'amount' => round($order->grand_total * 100),
            'currency' => strtolower($order->order_currency_code),
            'payment_method' => $paymentMethodId,
            'confirmation_method' => 'manual',
            'confirm' => true,
            'setup_future_usage' => 'off_session', // Enable for saved cards
            'metadata' => [
                'order_id' => $order->id,
                'customer_email' => $order->customer_email,
            ],
        ]);

        if ($paymentIntent->status === 'requires_action') {
            // 3D Secure authentication required
            return [
                'requires_action' => true,
                'client_secret' => $paymentIntent->client_secret,
                'payment_intent_id' => $paymentIntent->id,
            ];
        } elseif ($paymentIntent->status === 'succeeded') {
            // Payment completed successfully
            return [
                'success' => true,
                'payment_intent_id' => $paymentIntent->id,
            ];
        }

    } catch (CardException $e) {
        return [
            'error' => $e->getError()->message,
        ];
    }
}
```

## Recurring Payments and Subscriptions

Implement subscription-based payments for recurring billing:

### Subscription Setup

```php
/**
 * Create subscription for recurring payments.
 */
public function createSubscription($customer, $priceId, $metadata = [])
{
    try {
        // Create or retrieve Stripe customer
        $stripeCustomer = $this->createOrGetStripeCustomer($customer);
        
        // Create subscription
        $subscription = \Stripe\Subscription::create([
            'customer' => $stripeCustomer->id,
            'items' => [
                ['price' => $priceId],
            ],
            'payment_behavior' => 'default_incomplete',
            'expand' => ['latest_invoice.payment_intent'],
            'metadata' => array_merge($metadata, [
                'bagisto_customer_id' => $customer->id,
                'created_at' => now()->toDateTimeString(),
            ]),
        ]);

        // Handle initial payment setup
        if ($subscription->latest_invoice->payment_intent->status === 'requires_action') {
            return [
                'subscription_id' => $subscription->id,
                'requires_action' => true,
                'client_secret' => $subscription->latest_invoice->payment_intent->client_secret,
            ];
        }

        return [
            'success' => true,
            'subscription_id' => $subscription->id,
        ];

    } catch (\Exception $e) {
        \Log::error('Subscription creation failed', [
            'customer_id' => $customer->id,
            'error' => $e->getMessage(),
        ]);

        return [
            'error' => 'Subscription setup failed: ' . $e->getMessage(),
        ];
    }
}

/**
 * Handle subscription payment webhooks.
 */
protected function handleSubscriptionPayment($invoice)
{
    $subscriptionId = $invoice->subscription;
    $customerId = $invoice->customer_metadata->bagisto_customer_id ?? null;
    
    if (! $customerId) {
        \Log::warning('Subscription payment received but no customer ID', [
            'invoice_id' => $invoice->id,
            'subscription_id' => $subscriptionId,
        ]);
        return;
    }

    // Create order for subscription payment
    $this->createSubscriptionOrder($customerId, $invoice);
    
    // Update subscription status in your database
    $this->updateSubscriptionStatus($subscriptionId, 'active');
    
    \Log::info('Subscription payment processed', [
        'invoice_id' => $invoice->id,
        'subscription_id' => $subscriptionId,
        'customer_id' => $customerId,
    ]);
}
```

## Refund and Dispute Management

Handle refunds and chargebacks professionally:

### Advanced Refund Processing

```php
/**
 * Process partial or full refund with reason tracking.
 */
public function processAdvancedRefund($payment, $amount, $reason = null)
{
    try {
        $refundData = [
            'payment_intent' => $payment->transaction_id,
            'metadata' => [
                'order_id' => $payment->order_id,
                'refund_reason' => $reason ?? 'Customer request',
                'processed_by' => auth()->user()->id ?? 'system',
                'processed_at' => now()->toDateTimeString(),
            ],
        ];

        // Add amount for partial refunds
        if ($amount && $amount < $payment->amount) {
            $refundData['amount'] = round($amount * 100); // Convert to cents
        }

        $refund = \Stripe\Refund::create($refundData);

        // Create refund record
        $refundRecord = $this->createRefundRecord($payment, $refund, $amount, $reason);

        // Update order status if fully refunded
        if ($refund->amount === $payment->amount * 100) {
            $this->orderRepository->update([
                'status' => 'refunded'
            ], $payment->order_id);
        }

        return [
            'success' => true,
            'refund_id' => $refund->id,
            'amount' => $refund->amount / 100,
            'status' => $refund->status,
        ];

    } catch (\Exception $e) {
        \Log::error('Refund processing failed', [
            'payment_id' => $payment->id,
            'amount' => $amount,
            'error' => $e->getMessage(),
        ]);

        return [
            'success' => false,
            'error' => 'Refund failed: ' . $e->getMessage(),
        ];
    }
}

/**
 * Handle dispute notifications.
 */
protected function handleChargeDispute($dispute)
{
    $chargeId = $dispute->charge;
    
    // Find the payment record
    $payment = $this->paymentRepository->findOneWhere([
        'additional_details->stripe_charge_id' => $chargeId
    ]);

    if (! $payment) {
        \Log::error('Dispute received for unknown charge', [
            'dispute_id' => $dispute->id,
            'charge_id' => $chargeId,
        ]);
        return;
    }

    // Create dispute record
    $this->createDisputeRecord($payment, $dispute);

    // Update order status
    $this->orderRepository->update([
        'status' => 'disputed'
    ], $payment->order_id);

    // Notify administrators
    $this->sendDisputeNotification($payment, $dispute);

    \Log::warning('Chargeback/dispute created', [
        'dispute_id' => $dispute->id,
        'order_id' => $payment->order_id,
        'amount' => $dispute->amount / 100,
        'reason' => $dispute->reason,
    ]);
}
```

## Multi-party Payment Scenarios

Handle complex payment scenarios with multiple recipients:

### Marketplace Payments

```php
/**
 * Create payment for marketplace with connected accounts.
 */
public function createMarketplacePayment($order, $vendors)
{
    try {
        $transfers = [];
        
        foreach ($vendors as $vendor) {
            $vendorAmount = $this->calculateVendorAmount($order, $vendor);
            $applicationFee = $this->calculateApplicationFee($vendorAmount);
            
            $paymentIntent = PaymentIntent::create([
                'amount' => round($vendorAmount * 100),
                'currency' => strtolower($order->order_currency_code),
                'application_fee_amount' => round($applicationFee * 100),
                'transfer_data' => [
                    'destination' => $vendor->stripe_account_id,
                ],
                'metadata' => [
                    'order_id' => $order->id,
                    'vendor_id' => $vendor->id,
                    'marketplace_order' => 'true',
                ],
            ]);
            
            $transfers[] = [
                'vendor_id' => $vendor->id,
                'amount' => $vendorAmount,
                'payment_intent_id' => $paymentIntent->id,
            ];
        }

        return [
            'success' => true,
            'transfers' => $transfers,
        ];

    } catch (\Exception $e) {
        \Log::error('Marketplace payment creation failed', [
            'order_id' => $order->id,
            'error' => $e->getMessage(),
        ]);

        return [
            'success' => false,
            'error' => 'Marketplace payment setup failed',
        ];
    }
}
```

## Performance and Monitoring

### Payment Analytics

```php
/**
 * Generate payment analytics and metrics.
 */
public function generatePaymentAnalytics($dateRange)
{
    $analytics = [
        'total_transactions' => 0,
        'successful_payments' => 0,
        'failed_payments' => 0,
        'total_amount' => 0,
        'average_transaction_value' => 0,
        'refund_rate' => 0,
        'dispute_rate' => 0,
    ];

    // Query payment data
    $payments = $this->paymentRepository->whereInRange('created_at', $dateRange);
    
    $analytics['total_transactions'] = $payments->count();
    $analytics['successful_payments'] = $payments->where('status', 'completed')->count();
    $analytics['failed_payments'] = $payments->where('status', 'failed')->count();
    $analytics['total_amount'] = $payments->sum('amount');
    
    if ($analytics['total_transactions'] > 0) {
        $analytics['average_transaction_value'] = $analytics['total_amount'] / $analytics['total_transactions'];
    }

    return $analytics;
}

/**
 * Monitor payment performance and alert on issues.
 */
public function monitorPaymentHealth()
{
    $recentFailures = $this->paymentRepository
        ->where('status', 'failed')
        ->where('created_at', '>=', now()->subHour())
        ->count();

    $failureRate = $recentFailures / max(1, $this->getTotalRecentTransactions());

    if ($failureRate > 0.05) { // 5% failure rate threshold
        $this->sendPaymentAlerts([
            'type' => 'high_failure_rate',
            'rate' => $failureRate,
            'recent_failures' => $recentFailures,
        ]);
    }
}
```

## Key Takeaways

Advanced payment implementations require careful consideration of security, reliability, and user experience:

**Implementation Guidelines:**
- ✅ Always implement webhook signature verification
- ✅ Handle 3D Secure authentication gracefully
- ✅ Provide clear error messages without exposing sensitive data
- ✅ Implement comprehensive logging and monitoring

**Security Best Practices:**
- ✅ Use HTTPS for all payment-related requests
- ✅ Validate all webhook events with signatures
- ✅ Never store sensitive payment data
- ✅ Implement proper access controls for admin functions

**Performance Considerations:**
- ✅ Use async processing for webhook handling
- ✅ Implement proper retry mechanisms
- ✅ Cache configuration data when appropriate
- ✅ Monitor payment performance and failure rates

**Compliance Requirements:**
- ✅ Follow PCI DSS guidelines
- ✅ Implement SCA (3D Secure) for European customers
- ✅ Handle disputes and chargebacks properly
- ✅ Maintain audit trails for all payment activities

### Continue Learning

**📖 [Understanding Payment Class ←](./understanding-payment-class.md)**
Review the foundation payment class implementation.

**📖 [Understanding Payment Configuration ←](./understanding-payment-configuration.md)**
Learn about the configuration options that enable these advanced features.

**📖 [Back to Getting Started ←](./getting-started.md)**
Return to the main payment method development guide.

---

**Congratulations!** You now have the knowledge to implement sophisticated payment methods that can handle complex business requirements, security challenges, and compliance needs while maintaining excellent user experience.

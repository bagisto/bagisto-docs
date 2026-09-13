# Understanding Payment Class

When you created your first payment method, you built this `CustomStripePayment` class. Now let's dive deeper into how each part works, what the base class already gives you, and how a method that sends the customer to a gateway gets them back.

```php
<?php

namespace Webkul\CustomStripePayment\Payment;

use Illuminate\Support\Facades\Storage;
use Webkul\Payment\Payment\Payment;

class CustomStripePayment extends Payment
{
    /**
     * Payment method code, must match the payment-methods.php key.
     *
     * @var string
     */
    protected $code = 'custom_stripe_payment';

    /**
     * Get the redirect url.
     *
     * @return string|null
     */
    public function getRedirectUrl()
    {
        return null;
    }

    /**
     * Get the payment method image shown at checkout.
     *
     * @return string
     */
    public function getImage()
    {
        $url = $this->getConfigData('image');

        return $url ? Storage::url($url) : bagisto_asset('images/money-transfer.png', 'shop');
    }
}
```

## What the base class provides

**File:** `packages/Webkul/Payment/src/Payment/Payment.php`

| Member | Purpose |
|---|---|
| `protected $code` | The method code. Not declared on the base class, so **every method must set it**; `getCode()` returns it and `getConfigData()` builds `sales.payment_methods.{code}.{field}` from it |
| `protected $cart` | The current cart, loaded lazily |
| `getRedirectUrl()` | **Abstract.** Where to send the customer after they click Place Order, or nothing to create the order immediately |
| `isAvailable()` | Whether the method is offered. Base implementation returns the `active` setting |
| `getTitle()`, `getDescription()` | The `title` and `description` settings |
| `getImage()` | Logo URL drawn beside the method at checkout. Base returns the `image` setting; core methods fall back to a bundled asset |
| `getConfigData($field)` | `core()->getConfigData('sales.payment_methods.{code}.{field}')`. No need to override it |
| `setCart()`, `getCart()`, `getCartItems()` | Access to the cart being paid for |
| `getSortOrder()` | The `sort` setting |
| `getAdditionalDetails()` | An array with `title` and `value`, shown on the admin order page and in order emails. Base returns the `instructions` setting under a translated title, or an empty array |

## Understanding Key Methods

### Payment Method Code

```php
protected $code = 'custom_stripe_payment';
```

This is the unique identifier that ties everything together. It must match the key in `payment-methods.php`, it forms the configuration path, and it is what the order stores in `order_payments.method`.

### Availability

`Webkul\Payment\Payment::getPaymentMethods()` instantiates every configured class, calls `isAvailable()` and drops the ones that return `false`; the same check runs again server-side just before an order is created. Override it when a method should be offered only for some carts. Cash on delivery is the canonical example:

```php
public function isAvailable()
{
    if (! $this->cart) {
        $this->setCart();
    }

    return $this->getConfigData('active') && $this->cart?->hasOnlyStockableItems();
}
```

PhonePe and PayGlocal add a credentials check to `isAvailable()`, so the method disappears from checkout until its keys are configured; their currency checks (INR only, or the **Accepted Currencies** list) run in the redirect controller instead.

### Redirect URL Handling

```php
public function getRedirectUrl()
{
    return null;
}
```

When the customer clicks **Place Order**, `Shop\Http\Controllers\API\OnepageController::storeOrder()` validates the cart, then asks `Payment::getRedirectUrl($cart)`. If the method returns a URL, the response is `{"redirect": true, "redirect_url": "..."}` and **no order is created yet**; the storefront sends the browser there. If it returns nothing, the controller creates the order from the cart and the customer lands on the success page.

Core's PayPal Standard returns its own route:

```php
public function getRedirectUrl()
{
    return route('paypal.standard.redirect');
}
```

### The redirect flow

A redirecting method owns the return leg. The pieces, as PayPal Standard implements them:

1. **A route file** loaded by your provider (`Routes/web.php` in Stripe, Razorpay, PayU, PayGlocal and PhonePe; `Http/routes.php` in PayPal). PayPal's, condensed:

   ```php
   Route::group(['middleware' => ['web']], function () {
       Route::get('paypal/standard/redirect', [StandardController::class, 'redirect'])->name('paypal.standard.redirect');
       Route::get('paypal/standard/success', [StandardController::class, 'success'])->name('paypal.standard.success');
       Route::get('paypal/standard/cancel', [StandardController::class, 'cancel'])->name('paypal.standard.cancel');
   });

   Route::post('paypal/standard/ipn', [StandardController::class, 'ipn'])
       ->name('paypal.standard.ipn')
       ->withoutMiddleware(PreventRequestForgery::class);
   ```

   Add the `shop` middleware to the group if your redirect or return views need the theme, locale and currency to be resolved.

2. **A redirect action** that sends the customer to the gateway with the cart totals.

3. **A return action** that creates the order. This is the part every gateway package repeats:

   ```php
   public function success()
   {
       $cart = Cart::getCart();

       $data = (new OrderResource($cart))->jsonSerialize();

       $order = $this->orderRepository->create($data);

       Cart::deActivateCart();

       session()->flash('order_id', $order->id);

       return redirect()->route('shop.checkout.onepage.success');
   }
   ```

   `Webkul\Sales\Transformers\OrderResource` turns the cart into the order payload, `OrderRepository::create()` dispatches `checkout.order.save.before` and `.after` (the events invoicing, notifications and the full page cache listen to), and the success page reads `order_id` from the session and redirects away when it is missing.

4. **A cancel action** that sends the customer back to the cart with a message.

5. **A webhook** (PayPal's IPN, PayGlocal's settlement callback) for the case where the customer never comes back. Webhooks must opt out of CSRF with `->withoutMiddleware(PreventRequestForgery::class)` (`ValidateCsrfToken` on Bagisto 2.4), and Stripe's package additionally excludes `stripe/*` in `bootstrap/app.php`. Verify the gateway's signature before trusting the payload.

A method that captures on the client, like PayPal Smart Button, keeps `getRedirectUrl()` empty and completes the payment from JavaScript on the checkout page before the order is placed; the checkout deliberately rejects an order whose method is `paypal_smart_button` through the ordinary path.

### Order totals

`Cart::collectTotals()` runs before validation and again after a coupon is removed, and it dispatches `checkout.cart.collect.totals.before` and `.after`. Read amounts from the cart after that (`$cart->grand_total`, `$cart->base_grand_total`) rather than recomputing them; `OrderResource` copies the same figures onto the order.

### Automatic invoices

`Webkul\Payment\Listeners\GenerateInvoice` invoices cash-on-delivery and money-transfer orders on `checkout.order.save.after` when their `generate_invoice` setting is on. A gateway method usually invoices once the gateway confirms payment, from its return action or webhook, with `InvoiceRepository::create()`.

### Additional details

```php
public function getAdditionalDetails()
{
    return [
        'title' => trans('custom-stripe::app.payment.instructions'),
        'value' => $this->getConfigData('instructions'),
    ];
}
```

Only `title` and `value` are read; the admin order view and the order emails print them. Nothing on the checkout page consumes this method.

## Best Practices for Payment Classes

::: warning Implementation Note
The methods shown in this section are **demonstration examples** for best practices. In real-world applications, you need to implement these methods according to your specific payment gateway requirements and business logic.
:::

### Error Handling

Always implement comprehensive error handling in your payment methods:

```php
/**
 * Handle payment errors gracefully.
 */
protected function handlePaymentError(\Exception $e)
{
    Log::error('Payment error in '.$this->code, [
        'error' => $e->getMessage(),
        'trace' => $e->getTraceAsString(),
    ]);

    return [
        'success' => false,
        'error'   => trans('custom-stripe::app.payment.failed'),
    ];
}
```

### Security Considerations

Always validate the gateway's callback before acting on it: verify the signature or token with the gateway, compare the amount and currency against the cart, and never create an order from parameters the browser could have altered.

### Logging and Debugging

Proper logging helps you track payment activities and troubleshoot issues without exposing sensitive information.

```php
/**
 * Log payment activities for debugging and audit.
 */
protected function logPaymentActivity($action, $data = [])
{
    $sanitizedData = array_diff_key($data, [
        'api_key'     => '',
        'secret_key'  => '',
        'card_number' => '',
        'cvv'         => '',
    ]);

    Log::info("Payment {$action} for {$this->code}", $sanitizedData);
}
```

## Continue Your Journey

**📖 [Understanding Payment Configuration ←](./understanding-payment-configuration.md)**
Learn about the configuration system that powers your payment method.

**📖 [Back to Creating Your First Payment Method ←](./create-your-first-payment-method.md)**
Review how we built this payment method step by step.

**📖 [Back to Getting Started ←](./getting-started.md)**
Return to the main payment method development guide.

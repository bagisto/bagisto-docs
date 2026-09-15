# Understanding the Payment Class

A payment class extends `Webkul\Payment\Payment\Payment` and tells the checkout whether the method is offered and where to send the customer. You built one in [Creating Your First Payment Method](./create-your-first-payment-method.md#step-3-create-the-payment-class), at `packages/Webkul/CustomStripePayment/src/Payment/CustomStripePayment.php`. This page covers what the base class gives it, availability, and the redirect flow a real gateway needs.

## What the Base Class Provides

**File:** `packages/Webkul/Payment/src/Payment/Payment.php`

| Member | Purpose |
|---|---|
| `protected $code` | The method code. Not declared on the base class, so **every method must declare it**; `getCode()` returns it and `getConfigData()` builds `sales.payment_methods.{code}.{field}` from it. It is what the order stores in `order_payments.method` |
| `protected $cart` | The current cart, loaded lazily |
| `getRedirectUrl()` | **Abstract.** Where to send the customer after they place the order, or nothing to create the order immediately |
| `isAvailable()` | Whether the method is offered. The base returns the `active` setting |
| `getTitle()`, `getDescription()` | The `title` and `description` settings |
| `getImage()` | The logo URL drawn beside the method at checkout. The base returns the `image` setting; core methods fall back to a bundled asset |
| `getConfigData($field)` | `core()->getConfigData('sales.payment_methods.{code}.{field}')` |
| `setCart()`, `getCart()`, `getCartItems()` | Access to the cart being paid for |
| `getSortOrder()` | The `sort` setting |
| `getAdditionalDetails()` | A `title` and `value` shown on the admin order page, the invoice PDF and the order emails. The base returns the `instructions` setting, or an empty array |

## Availability

`Webkul\Payment\Payment::getPaymentMethods()` resolves every configured class, calls `isAvailable()` and drops the ones that return `false`; the checkout checks the chosen method against that list again when the method is saved and when the order is placed. Override `isAvailable()` when a method should be offered only for some carts. Cash on delivery is the canonical example:

**File:** `packages/Webkul/Payment/src/Payment/CashOnDelivery.php`

```php
/**
 * Is available.
 *
 * @return bool
 */
public function isAvailable()
{
    if (! $this->cart) {
        $this->setCart();
    }

    return $this->getConfigData('active') && $this->cart?->hasOnlyStockableItems();
}
```

A real gateway also stays hidden until its keys are entered. Stripe, Razorpay, PayU, PhonePe and PayGlocal keep their keys in `password` fields and add a credentials check to the parent's `active` check:

**File:** `packages/Webkul/Stripe/src/Payment/Stripe.php`

```php
/**
 * Check if payment method is available.
 *
 * @return bool
 */
public function isAvailable()
{
    return parent::isAvailable() && $this->hasValidCredentials();
}
```

`hasValidCredentials()` checks the test keys when the `sandbox` setting is on and the live keys otherwise. Razorpay, PayU, PhonePe and PayGlocal check the currency in their redirect action, not in `isAvailable()`: the method is listed, and an unsupported currency sends the customer back with an error.

## Redirect URL

When the customer places the order, `Shop\Http\Controllers\API\OnepageController::storeOrder()` validates the cart, then calls `Payment::getRedirectUrl($cart)`. If the method returns a URL, the response is `{"data": {"redirect": true, "redirect_url": "..."}}` and **no order is created yet**; the storefront sends the browser there. If it returns nothing, the controller creates the order from the cart and the customer lands on the success page.

Core's PayPal Standard returns its own route:

**File:** `packages/Webkul/Paypal/src/Payment/Standard.php`

```php
/**
 * Return paypal redirect url.
 *
 * @return string
 */
public function getRedirectUrl()
{
    return route('paypal.standard.redirect');
}
```

## The Redirect Flow

A redirecting method owns the return leg. Core's gateways are the best reference: `Webkul\Stripe` and `Webkul\Razorpay` (success and cancel returns), `Webkul\Paypal` (Standard: redirect and IPN webhook), `Webkul\PayU` (POST returns), `Webkul\PhonePe` (callback and webhook) and `Webkul\PayGlocal` (a signed return token and a settlement webhook). The pieces, as PayPal Standard implements them:

1. **A route file** loaded by your provider (`Routes/web.php` in Stripe, Razorpay, PayU, PayGlocal and PhonePe; `Http/routes.php` in PayPal):

   **File:** `packages/Webkul/Paypal/src/Http/routes.php`

   ```php
   <?php

   use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
   use Illuminate\Support\Facades\Route;
   use Webkul\Paypal\Http\Controllers\StandardController;

   Route::group(['middleware' => ['web']], function () {
       Route::prefix('paypal/standard')->group(function () {
           Route::get('/redirect', [StandardController::class, 'redirect'])->name('paypal.standard.redirect');

           Route::get('/success', [StandardController::class, 'success'])->name('paypal.standard.success');

           Route::get('/cancel', [StandardController::class, 'cancel'])->name('paypal.standard.cancel');
       });

       // ...
   });

   Route::post('paypal/standard/ipn', [StandardController::class, 'ipn'])
       ->withoutMiddleware(PreventRequestForgery::class)
       ->name('paypal.standard.ipn');
   ```

   Add the Shop package's `shop` middleware group (theme, locale and currency) if your redirect or return pages render storefront views.

2. **A redirect action** that sends the customer to the gateway with the cart totals.

3. **A return action** that creates the order:

   **File:** `packages/Webkul/Paypal/src/Http/Controllers/StandardController.php`

   ```php
   /**
    * Success payment.
    *
    * @return Response
    */
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

   `Webkul\Sales\Transformers\OrderResource` turns the cart into the order payload, and `OrderRepository::create()` dispatches `checkout.order.save.before` and `.after`, which invoicing, notifications and the full page cache listen to. The success page reads `order_id` from the session and redirects to the cart when it is missing.

4. **A cancel action** that sends the customer back to the cart with a message.

5. **A webhook** for the customer who never comes back. A gateway posts from its own servers, so these routes opt out of CSRF with `->withoutMiddleware(PreventRequestForgery::class)`; PayU's POST return legs do the same, and the application's `bootstrap/app.php` excludes `stripe/*`. On Bagisto 2.4, which runs Laravel 12, PayPal's routes named `VerifyCsrfToken` instead, and `bootstrap/app.php` called `validateCsrfTokens()`.

A method that captures on the client, like PayPal Smart Button, keeps `getRedirectUrl()` empty and completes the payment from JavaScript on the checkout page before the order is placed; the checkout deliberately rejects an order whose method is `paypal_smart_button` through the ordinary path.

## Order Totals

`Cart::collectTotals()` runs before validation and again after a coupon is removed, and dispatches `checkout.cart.collect.totals.before` and `.after`. Read amounts from the cart after that (`$cart->grand_total`, `$cart->base_grand_total`) rather than recomputing them; `OrderResource` copies the same figures onto the order.

## Automatic Invoices

`Webkul\Payment\Listeners\GenerateInvoice` listens to `checkout.order.save.after` and invoices cash-on-delivery and money-transfer orders when their `generate_invoice` setting is on, using their `invoice_status` and `order_status` settings. A gateway invoices once the gateway confirms payment: the Stripe, Razorpay, PayU, PhonePe and PayGlocal controllers each call `InvoiceRepository::create()` from their return action or webhook.

## Additional Details

Override `getAdditionalDetails()` to show something other than the `instructions` setting. Money transfer shows the mailing address:

**File:** `packages/Webkul/Payment/src/Payment/MoneyTransfer.php`

```php
/**
 * Returns payment method additional information.
 *
 * @return array
 */
public function getAdditionalDetails()
{
    if (empty($this->getConfigData('mailing_address'))) {
        return [];
    }

    return [
        'title' => trans('admin::app.configuration.index.sales.payment-methods.mailing-address'),
        'value' => $this->getConfigData('mailing_address'),
    ];
}
```

Only `title` and `value` are read, by the admin order view, the invoice PDF and the order emails. Nothing on the checkout page uses this method.

## Things to Watch

- **Return a URL from `getImage()`.** The checkout draws an image for every method, so a method with no logo and no fallback shows an empty one.
- **Check the currency before sending the customer away.** Core's gateways do it in their redirect action, so an unsupported currency never reaches the gateway.
- **A redirecting method creates the order itself.** No order exists until your return action or webhook creates it from the cart, and invoices it once the gateway confirms payment.
- **Verify every callback.** Routes a gateway posts to opt out of CSRF, so verify the gateway's signature or token, as PayGlocal does, compare the amount and currency with the cart, and never create an order from parameters the browser could have altered.
- **Log without secrets.** Leave API keys and card data out of anything you log.

## Related Pages

- [Testing with Pest](../advanced/testing-with-pest.md#test-benches): `Webkul\Payment\Tests\Concerns\ProvidePaymentHelpers::createCartWithItems($paymentMethod)` builds an addressed customer cart paid by the method you name; the Stripe, Razorpay, PayU and PayGlocal test cases use it.
- [Event Listeners](../advanced/event-listeners.md): listen to `checkout.order.save.after` to act on every new order, the way `GenerateInvoice` does.
- [Routes](../package-development/routes.md): loading the route file for a redirect flow; the same chain covers controllers.
- [Product Type Development](../product-type-development/getting-started.md): a custom product type, which also decides whether checkout asks for shipping.

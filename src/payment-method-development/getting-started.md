# Getting Started

A payment method in Bagisto is a class the checkout offers as a way to pay, added from a package through merged configuration. This section builds one method, then explains its configuration and its class, including the redirect flow a real gateway needs, without editing a core package.

## What You'll Build

**`Webkul\CustomStripePayment`**, a package that adds the payment method `custom_stripe_payment`:

- a **Credit Card (Stripe)** option, with a logo, on the checkout's payment step
- an order placed as soon as the customer confirms, as with cash on delivery; the tutorial method doesn't charge a card
- a **Custom Stripe Payment** section in the admin's payment method configuration, with its status, title, description, logo and sort order per channel

## How It Works

Paths are relative to `packages/Webkul/CustomStripePayment/src`.

| Part | File | Plugs into |
|---|---|---|
| Payment method configuration | `Config/payment-methods.php` | Merged into `config('payment_methods')`; its `class` key names the payment class |
| Payment class | `Payment/CustomStripePayment.php` | Extends `Webkul\Payment\Payment\Payment`; `getRedirectUrl()` decides whether the customer leaves the site |
| System configuration | `Config/system.php` | Merged into `config('core')` as the section `sales.payment_methods.custom_stripe_payment`, which the class's `getConfigData()` reads |
| Service provider | `Providers/CustomStripePaymentServiceProvider.php` | Merges both files; listed in `bootstrap/providers.php` |

The checkout lists every method whose `isAvailable()` returns true, sorted by its `sort` setting (`Webkul\Payment\Payment::getPaymentMethods()`), and checks the choice against that list again before placing the order. When the customer places it, a method whose `getRedirectUrl()` returns a URL sends them there and no order exists yet; a method that returns nothing has the order created at once. A gateway that redirects also needs routes and a controller for the return leg; [Understanding the Payment Class](./understanding-payment-class.md#the-redirect-flow) walks through core's.

## Prerequisites

- Bagisto 2.5, installed and running: see [Installation](../getting-started/installation.md).
- How a package is autoloaded and its provider registered: see [Package Development](../package-development/getting-started.md).

## The Path

1. [Creating Your First Payment Method](./create-your-first-payment-method.md): build the package by hand and place an order with it. To scaffold it instead, see [Package Generator](../tools/package-generator.md#payment-and-shipping-method-packages).
2. [Understanding Payment Configuration](./understanding-payment-configuration.md): the `payment-methods.php` keys and the admin section.
3. [Understanding the Payment Class](./understanding-payment-class.md): what the base class provides, availability, and the redirect, return and webhook flow.

## Next Step

Start by building the package.

**Continue to:** [Creating Your First Payment Method](./create-your-first-payment-method.md)

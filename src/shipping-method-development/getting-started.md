# Getting Started

A shipping method in Bagisto is a carrier: a class that quotes a rate for the cart, added from a package through merged configuration. This section builds one carrier, then explains each of its parts, without editing a core package.

## What You'll Build

**`Webkul\CustomExpressShipping`**, a package that adds the carrier `custom_express_shipping`:

- an **Express Delivery (1-2 Days)** option on the checkout's shipping step
- a rate charged once per order, or once per item that ships
- a **Custom Express Shipping** section in the admin's shipping method configuration, with its status, title, description, rate and pricing type per channel

## How It Works

Paths are relative to `packages/Webkul/CustomExpressShipping/src`.

| Part | File | Plugs into |
|---|---|---|
| Carrier configuration | `Config/carriers.php` | Merged into `config('carriers')`; its `class` key names the carrier class |
| Carrier class | `Carriers/CustomExpressShipping.php` | Extends `Webkul\Shipping\Carriers\AbstractShipping`; `calculate()` returns the rate |
| System configuration | `Config/system.php` | Merged into `config('core')` as the section `sales.carriers.custom_express_shipping`, which the carrier's `getConfigData()` reads |
| Service provider | `Providers/CustomExpressShippingServiceProvider.php` | Merges both files; listed in `bootstrap/providers.php` |

At checkout, `Webkul\Shipping\Shipping::collectRates()` creates every carrier in `config('carriers')`, calls its `calculate()` and groups the rates for the shipping step. The checkout does this only for a cart with stockable items, and saves the customer's choice only if a collected rate carries the same `method` code.

## Prerequisites

- Bagisto 2.5, installed and running: see [Installation](../getting-started/installation.md).
- How a package is autoloaded and its provider registered: see [Package Development](../package-development/getting-started.md).

## The Path

1. [Creating Your First Shipping Method](./create-your-first-shipping-method.md): build the package by hand and see its rate at checkout. To scaffold it instead, see [Package Generator](../tools/package-generator.md#payment-and-shipping-method-packages).
2. [Understanding Carrier Configuration](./understanding-carrier-configuration.md): the `carriers.php` keys, the admin section in `system.php`, and carriers with several services.
3. [Understanding the Carrier Class](./understanding-carrier-class.md): what `AbstractShipping` provides, when `calculate()` runs, and common pricing patterns.

## Next Step

Start by building the package.

**Continue to:** [Creating Your First Shipping Method](./create-your-first-shipping-method.md)

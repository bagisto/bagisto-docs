# Getting Started

A product type in Bagisto decides how a product behaves: whether it ships, how its stock and price are checked, and what goes into the cart. This section registers a custom type from a package, explains the class behind it, then turns it into a subscription a customer can buy, without editing a core package.

## What You'll Build

**`Webkul\SubscriptionProduct`**, a package that adds the product type `subscription`:

- **Subscription** in the admin's product type list, backed by its own class
- no shipping step at checkout for a cart of subscriptions
- a weekly, monthly or yearly frequency the customer picks on the product page, kept on the cart item and the order item

The type records the frequency the customer chose; it doesn't bill renewals.

## How It Works

Paths are relative to `packages/Webkul/SubscriptionProduct/src`.

| Part | File | Plugs into |
|---|---|---|
| Product type configuration | `Config/product_types.php` | Merged into `config('product_types')`; the admin's type list reads it, and `Product::getTypeInstance()` resolves its `class` |
| Product type class | `Type/Subscription.php` | Extends `Webkul\Product\Type\AbstractType`; decides shipping, stock, the cart rows and the price indexer |
| Translations | `Resources/lang/en/app.php` | The `subscription::` namespace: the type's name and the storefront labels |
| Product page field | `Resources/views/shop/products/frequency.blade.php` | The `bagisto.shop.products.short_description.after` view render event |
| Service provider | `Providers/SubscriptionServiceProvider.php` | Merges the configuration and loads the translations, views and listener; listed in `bootstrap/providers.php` |

Unlike a shipping or payment method, a product type has no section in the admin configuration. A product's data stays in the attributes of its attribute family; the type class decides what Bagisto does with it.

## Prerequisites

- Bagisto 2.5, installed and running: see [Installation](../getting-started/installation.md).
- How a package is autoloaded and its provider registered: see [Package Development](../package-development/getting-started.md).

## The Path

1. [Creating Your First Product Type](./create-your-first-product-type.md): register the type and create a product of it in the admin.
2. [Understanding Product Type Configuration](./understanding-product-type-configuration.md): the `product_types.php` keys, core's seven types, and overriding one.
3. [Understanding the AbstractType Class](./understanding-abstract-type-class.md): the properties and methods a type overrides.
4. [Building Your Subscription Product Type](./building-your-subscription-product-type.md): the frequency field, the cart rows and a checkout without shipping.

## Next Step

Start by registering the type.

**Continue to:** [Creating Your First Product Type](./create-your-first-product-type.md)

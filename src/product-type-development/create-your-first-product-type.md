# Creating Your First Product Type

This page builds the `Webkul\SubscriptionProduct` package: a `subscription` type that appears in the admin's product type list, backed by its own class. The [Package Generator](../tools/package-generator.md) has no product type command, so every file is written by hand.

## What You'll Build

```text
packages/Webkul/SubscriptionProduct
└── src
    ├── Config
    │   └── product_types.php
    ├── Providers
    │   └── SubscriptionServiceProvider.php
    ├── Resources
    │   └── lang
    │       └── en
    │           └── app.php
    └── Type
        └── Subscription.php
```

## Step 1: Create the Package Structure

From the Bagisto root, create the package's folders:

```bash
mkdir -p packages/Webkul/SubscriptionProduct/src/{Config,Providers,Resources/lang/en,Type}
```

## Step 2: Add the Product Type Configuration

This file registers the type's key, name and class.

**File:** `packages/Webkul/SubscriptionProduct/src/Config/product_types.php`

```php
<?php

return [
    'subscription' => [
        'key' => 'subscription',
        'name' => 'subscription::app.type.subscription',
        'class' => 'Webkul\SubscriptionProduct\Type\Subscription',
        'sort' => 8,
    ],
];
```

`name` is a translation key, as in core's `product::app.type.simple`; a plain string renders as it is but can't be localized. The next step adds the key.

## Step 3: Add the Translation

The language file holds the type's name.

**File:** `packages/Webkul/SubscriptionProduct/src/Resources/lang/en/app.php`

```php
<?php

return [
    'type' => [
        'subscription' => 'Subscription',
    ],
];
```

English is enough to follow the tutorial, because `en` is the application's fallback locale. A package you ship adds the same keys for every locale the store uses; see [Localization](../package-development/localization.md).

## Step 4: Create the Product Type Class

The class decides how products of the type behave. For now it only supplies the price indexer.

**File:** `packages/Webkul/SubscriptionProduct/src/Type/Subscription.php`

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Helpers\Indexers\Price\Simple as SimpleIndexer;
use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    /**
     * Get the price indexer for this product type.
     */
    public function getPriceIndexer(): SimpleIndexer
    {
        return app(SimpleIndexer::class);
    }
}
```

`AbstractType` doesn't declare `getPriceIndexer()`, yet the price index job queued on every product save calls it, and so does `getFinalPrice()` for a quantity above one, so a type without it fails the first time a product of it is saved. `Webkul\Product\Helpers\Indexers\Price\Simple` prices a single-price product from its price, special price, customer group prices and catalog rules, which suits most custom types.

## Step 5: Create the Service Provider

The provider merges the configuration and loads the translations.

**File:** `packages/Webkul/SubscriptionProduct/src/Providers/SubscriptionServiceProvider.php`

```php
<?php

namespace Webkul\SubscriptionProduct\Providers;

use Illuminate\Support\ServiceProvider;

class SubscriptionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/product_types.php',
            'product_types'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadTranslationsFrom(dirname(__DIR__).'/Resources/lang', 'subscription');
    }
}
```

`register()` adds the type to `config('product_types')`; `boot()` registers the `subscription::` translation namespace that the type's `name` uses.

## Step 6: Register the Package

Add the namespace to the root `composer.json` and the provider to `bootstrap/providers.php`. [Package Development](../package-development/getting-started.md#autoload-the-namespace) explains both files.

**File:** `composer.json`

```json
{
  "autoload": {
    "psr-4": {
      "Webkul\\SubscriptionProduct\\": "packages/Webkul/SubscriptionProduct/src"
    }
  }
}
```

The block shows only the entry to add; keep the others.

**File:** `bootstrap/providers.php`

```php{4,11}
<?php

use App\Providers\AppServiceProvider;
use Webkul\SubscriptionProduct\Providers\SubscriptionServiceProvider;

return [
    AppServiceProvider::class,

    // ...

    SubscriptionServiceProvider::class,
];
```

Then regenerate the autoloader and clear the cached configuration:

```bash
composer dump-autoload

php artisan optimize:clear
```

## Test It

1. In the admin, go to **Catalog → Products** and click **Create Product**. **Subscription** is first in the **Product Type** list, because `mergeConfigFrom()` puts a package's entries ahead of core's.
2. Choose it, enter a SKU, choose the attribute family and save. The edit page shows the family's fields (name, price, description, images, inventory) and nothing specific to subscriptions yet.
3. Give the product a price, enable it, assign it to your channel and open its page on the storefront. It shows the standard page: name, price, and **Add To Cart**.
4. Add it to the cart and go to checkout. The checkout asks for a shipping address and method, because the type is still stockable.

## Things to Watch

- **The type inherits every `AbstractType` default.** It's stockable, so it ships; `haveSufficientQuantity()` returns `true` whatever the stock; and `showQuantityBox()` returns `false`. [Building Your Subscription Product Type](./building-your-subscription-product-type.md) turns off shipping and turns on the quantity box, and keeps the stock default.
- **The admin and the storefront add no fields for a custom type.** The admin edit page includes a per-type partial only if one exists, and the storefront includes option partials only for core's types; see [Understanding the AbstractType Class](./understanding-abstract-type-class.md#admin-interface-customization).
- **Keep the type registered** while products, cart items or orders of it exist. Without its entry, `Product::getTypeInstance()` throws for them.

## Next Step

The type is registered. Next, see what each configuration key does and how core's own types are registered.

**Continue to:** [Understanding Product Type Configuration](./understanding-product-type-configuration.md)

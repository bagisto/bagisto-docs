# View Render Events

Bagisto's Blade views call `view_render_event()` at fixed points: around the page layout, each block of the product page, each step of the checkout, and throughout the admin. A package listens to one of those events and adds a template or an HTML string, which is rendered at that spot. It's the supported way to add markup to a core page, since a theme override of the whole view has to be kept in step with every Bagisto update.

## How It Works

A view passes the event name and, usually, the model the section is about:

```blade
{!! view_render_event('bagisto.shop.products.price.after', ['product' => $product]) !!}
```

The helper, `view_render_event(string $eventName, mixed $params = null)` in `packages/Webkul/Theme/src/Http/helpers.php`, hands the call to `Webkul\Theme\ViewRenderEventManager`. The manager dispatches an ordinary Laravel event of that name with itself as the only argument, each listener adds templates to it, and `render()` prints them in order: a template that is an existing view is rendered with the parameters, and any other string is output as it is.

| Manager method | Does |
|---|---|
| `addTemplate($template, $params = [])` | Queues a view name or an HTML string. `$params` are merged into the parameters every template of this event receives |
| `getParam($name)` | Returns one parameter the view passed, such as `product` |
| `getParams()` | Returns every parameter |
| `getEventName()` | Returns the event being rendered, for a listener attached to several events |
| `getTemplates()` | Returns the templates queued so far |

## Adding Markup from a Package

The `Webkul\DeliveryEstimate` package below prints a delivery estimate under the price of products that are shipped, on `bagisto.shop.products.price.after`. Its event service provider maps the render event to a listener method, as core packages do:

**File:** `packages/Webkul/DeliveryEstimate/src/Providers/EventServiceProvider.php`

```php
<?php

namespace Webkul\DeliveryEstimate\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Webkul\DeliveryEstimate\Listeners\ProductView;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'bagisto.shop.products.price.after' => [
            [ProductView::class, 'addEstimate'],
        ],
    ];
}
```

The listener reads the product from the manager and queues the template only for product types that are shipped:

**File:** `packages/Webkul/DeliveryEstimate/src/Listeners/ProductView.php`

```php
<?php

namespace Webkul\DeliveryEstimate\Listeners;

use Webkul\Theme\ViewRenderEventManager;

class ProductView
{
    /**
     * Add the delivery estimate under the price of a product that is shipped.
     */
    public function addEstimate(ViewRenderEventManager $viewRenderEventManager): void
    {
        $product = $viewRenderEventManager->getParam('product');

        if (! $product?->getTypeInstance()->isStockable()) {
            return;
        }

        $viewRenderEventManager->addTemplate('delivery_estimate::shop.products.estimate');
    }
}
```

The template receives the event's parameters, so `$product` is available in it:

**File:** `packages/Webkul/DeliveryEstimate/src/Resources/views/shop/products/estimate.blade.php`

```blade
<p class="mt-2 text-sm text-zinc-500">
    @lang('delivery_estimate::app.shop.products.estimate')
</p>
```

**File:** `packages/Webkul/DeliveryEstimate/src/Resources/lang/en/app.php`

```php
<?php

return [
    'shop' => [
        'products' => [
            'estimate' => 'Usually ships within two business days.',
        ],
    ],
];
```

The main service provider loads the views and translations and registers the event service provider:

**File:** `packages/Webkul/DeliveryEstimate/src/Providers/DeliveryEstimateServiceProvider.php`

```php
<?php

namespace Webkul\DeliveryEstimate\Providers;

use Illuminate\Support\ServiceProvider;

class DeliveryEstimateServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__.'/../Resources/views', 'delivery_estimate');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'delivery_estimate');

        $this->app->register(EventServiceProvider::class);
    }
}
```

Register `DeliveryEstimateServiceProvider` in `bootstrap/providers.php` and the package namespace in `composer.json`, as in [Package Development](../package-development/getting-started.md#register-the-provider), and add the translation to every locale your store uses.

Core also passes an HTML string instead of a view, in `Webkul\BookingProduct\Listeners\PriceNote::addNote()`, and registers a closure with `Event::listen()` in `boot()`, in `Webkul\SocialShare\Providers\EventServiceProvider`:

**File:** `packages/Webkul/SocialShare/src/Providers/EventServiceProvider.php` (from `boot()`)

```php
Event::listen('bagisto.shop.products.view.compare.after', function ($viewRenderEventManager) {
    $viewRenderEventManager->addTemplate('social_share::share');
});
```

## Finding the Event You Need

There are over a thousand render events across the Shop and Admin views. Open the Blade file that draws the spot you want (the [Blade Tracer](../tools/blade-tracer.md) shows which file that is) and read the surrounding calls, or grep:

```bash
grep -rn "view_render_event('bagisto.admin.sales.order" packages/Webkul/Admin/src/Resources/views
```

Most names follow the view's path and end in `.before` or `.after`, such as `bagisto.admin.catalog.attributes.list.before`. Read the view rather than guessing from the pattern: some older admin events have no `bagisto.` prefix, such as `admin.settings.channels.create.create_form_controls.before`, `bagisto.admin.layout.head` has no suffix, and the admin product edit form builds names at runtime, such as `bagisto.admin.catalog.product.edit.form.{$group->code}.before`, which a search for a quoted literal doesn't find.

### Storefront Layout Events

`packages/Webkul/Shop/src/Resources/views/components/layouts/index.blade.php`, in page order:

| Event | Position |
|---|---|
| `bagisto.shop.layout.head.before`, `bagisto.shop.layout.head.after` | Start and end of `<head>` |
| `bagisto.shop.layout.body.before` | Start of `<body>`, before the Vue application's root element |
| `bagisto.shop.layout.content.before`, `bagisto.shop.layout.content.after` | Around `<main>`, inside the Vue application |
| `bagisto.shop.layout.body.after` | After the Vue application's root element, before the page's scripts |
| `bagisto.shop.layout.webmcp.before`, `bagisto.shop.layout.webmcp.after` | Around the WebMCP component's tool forms, fired from `components/layouts/webmcp.blade.php`; see [WebMCP](../ai/webmcp.md#adding-a-tool-from-a-package) |
| `bagisto.shop.layout.vue-app-mount.before`, `bagisto.shop.layout.vue-app-mount.after` | Around the script that mounts the Vue application |

### Admin Layout Events

`packages/Webkul/Admin/src/Resources/views/components/layouts/index.blade.php`, in page order:

| Event | Position |
|---|---|
| `bagisto.admin.layout.head.before`, `bagisto.admin.layout.head.after` | Start and end of `<head>` |
| `bagisto.admin.layout.body.before` | Start of `<body>`, before the Vue application's root element |
| `bagisto.admin.layout.content.before`, `bagisto.admin.layout.content.after` | Inside the Vue application, around the header and the page content |
| `bagisto.admin.layout.body.after` | After the Vue application's root element, before the page's scripts |
| `bagisto.admin.layout.vue-app-mount.before`, `bagisto.admin.layout.vue-app-mount.after` | Around the script that mounts the Vue application |

The admin's anonymous layout, `components/layouts/anonymous.blade.php`, fires the same body, content and mount events, and `bagisto.admin.layout.head` in place of the `head.before` and `head.after` pair.

### Product Page Events

`packages/Webkul/Shop/src/Resources/views/products/view.blade.php`. Every event passes `['product' => $product]`:

| Event | Position |
|---|---|
| `bagisto.shop.products.view.before`, `bagisto.shop.products.view.after` | Around the page content |
| `bagisto.shop.products.view.description.before`, `bagisto.shop.products.view.description.after` | Around the description tab |
| `bagisto.shop.products.name.*`, `bagisto.shop.products.rating.*`, `bagisto.shop.products.price.*`, `bagisto.shop.products.short_description.*` | Around each block of the product details |
| `bagisto.shop.products.view.quantity.*`, `bagisto.shop.products.view.add_to_cart.*`, `bagisto.shop.products.view.buy_now.*` | Around the purchase controls |
| `bagisto.shop.products.view.additional_actions.*`, with `bagisto.shop.products.view.compare.*` inside | Around the compare button and extra actions |

### Checkout Events

`packages/Webkul/Shop/src/Resources/views/checkout/onepage/`. These pass no parameters:

| Event | Position |
|---|---|
| `bagisto.shop.checkout.onepage.header.*`, `bagisto.shop.checkout.onepage.breadcrumbs.*` | Page header and breadcrumbs |
| `bagisto.shop.checkout.onepage.address.*`, `bagisto.shop.checkout.onepage.address.guest.billing.*`, `bagisto.shop.checkout.onepage.address.guest.shipping.*`, `bagisto.shop.checkout.onepage.address.customer.*` | The address step |
| `bagisto.shop.checkout.onepage.address.form.{field}.after` | After each address field, such as `bagisto.shop.checkout.onepage.address.form.phone.after` |
| `bagisto.shop.checkout.onepage.shipping_methods.*`, `bagisto.shop.checkout.onepage.shipping_method.*` | The shipping step |
| `bagisto.shop.checkout.onepage.payment_methods.*`, `bagisto.shop.checkout.onepage.payment_method.accordion.*` | The payment step |
| `bagisto.shop.checkout.payment-method.*`, `bagisto.shop.checkout.onepage.payment-method.image.*`, `.title.*`, `.description.*` | Each payment method |
| `bagisto.shop.checkout.onepage.summary.{item_image,item_name,sub_total,discount_amount,coupon,delivery_charges,tax,grand_total,paypal_smart_button}.*` | The order summary |

The cart page's summary has its own names, such as `bagisto.shop.checkout.cart.summary.grand_total.before`.

### Order Page Events

The customer's order page, `packages/Webkul/Shop/src/Resources/views/customers/account/orders/view.blade.php`, passes `['order' => $order]` to `bagisto.shop.customers.account.orders.view.before` and `.after`, `bagisto.shop.customers.account.orders.reorder_button.*` and `bagisto.shop.customers.account.orders.cancel_button.*`.

The admin order page, `packages/Webkul/Admin/src/Resources/views/sales/orders/view.blade.php`, passes `['order' => $order]` to `bagisto.admin.sales.order.page_action.before` and `.after`, and `bagisto.admin.sales.order.left_component.before` and `.after`.

## Things to Watch

- **Everything inside the storefront layout's `<div id="app">` is compiled by Vue.** The storefront mounts Vue on that element without a template of its own, so markup added on `bagisto.shop.layout.content.*`, the product page events and the checkout events becomes part of a Vue template. Vue drops `<script>` and `<style>` tags from what it compiles, and inside the product and checkout `text/x-template` blocks a `</script>` ends the template early. Add scripts on `bagisto.shop.layout.body.after`, where `Webkul\Paypal\Providers\EventServiceProvider` adds the PayPal smart button, and styles on `bagisto.shop.layout.head.after`.
- **Inside a loop, the markup repeats.** `bagisto.shop.checkout.payment-method.before` sits inside Vue's loop over the payment methods: PHP renders the markup once, Vue repeats it for every method, and the listener can't tell which method it is next to.
- **A view name that doesn't exist is printed as text.** `render()` outputs any string that isn't an existing view, so a mistyped view name appears on the page instead of raising an error.
- **Parameters are shared by the event's templates.** `addTemplate()` merges its `$params` into the parameters of every template rendered for that event, including other packages' templates. Use keys no one else will.
- **Don't render events from a listener, or from a template you add.** The manager is one shared object, bound as a singleton in `Webkul\Theme\Providers\ThemeServiceProvider`. A listener that calls `view_render_event()` resets the event being handled, and its next `addTemplate()` throws a `TypeError`; a template that fires a render event breaks the templates rendered after it for the same event in the same way. Keep what a listener adds free of render events. Listeners also run on every render of the page, so keep them to a check and an `addTemplate()` call, and load data in the template only when it is shown.
- **A theme that overrides a view keeps only the events it keeps.** A storefront template is subject to [theme overrides](../theme-development/creating-store-theme.md#how-views-are-resolved) like any other view, and an override that leaves out a `view_render_event()` call removes that extension point.

## Related Pages

- [Event Listeners](./event-listeners.md): events fired by controllers and repositories rather than views.
- [Blade Tracer](../tools/blade-tracer.md): finding the view that draws a spot on the page.
- [Creating a Store Theme](../theme-development/creating-store-theme.md#how-views-are-resolved): overriding a whole view instead.

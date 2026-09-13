# View Render Events

View Render Events in Bagisto provide a powerful mechanism for injecting content into blade templates without modifying the core files. Bagisto strategically places these events throughout its templates, creating extension points that allow packages and customizations to seamlessly integrate with the existing UI.

This guide covers how Bagisto's render event system works and how to leverage it in your packages for flexible template customization.

## What You'll Learn

- [Understanding Bagisto's Render Event System](#understanding-bagisto-s-render-event-system)
- [How Bagisto Uses Render Events](#how-bagisto-uses-render-events)
- [Injecting Content with Render Events](#injecting-content-with-render-events)
- [Practical Example: RMA Package Integration](#practical-example-rma-package-integration)
- [Best Practices](#best-practices)

## Understanding Bagisto's Render Event System

Bagisto's render event system allows modules and packages to inject content into predefined locations within blade templates without overriding core template files. This approach maintains upgradability while providing extensive customization capabilities.

### Core Concept

The `view_render_event()` function creates injection points in templates where external content can be rendered:

```blade
{!! view_render_event('event.name.here') !!}

{!! view_render_event('bagisto.shop.products.view.before', ['product' => $product]) !!}
```

The helper lives in `packages/Webkul/Theme/src/Http/helpers.php` and has the signature `view_render_event(string $eventName, mixed $params = null)`. When it runs, `Webkul\Theme\ViewRenderEventManager` dispatches an ordinary Laravel event of that name with itself as the payload, collects the templates every listener adds, renders them with the parameters, and returns the concatenated HTML at that exact location. Most core call sites pass the model the section is about, so a listener can read it with `$viewRenderEventManager->getParam('product')`.

## How Bagisto Uses Render Events

Bagisto strategically places render events throughout its blade templates to provide maximum flexibility for customization. Let's examine some real examples from Bagisto's core templates.

### Shop Layout Events

In the main shop layout (`packages/Webkul/Shop/src/Resources/views/components/layouts/index.blade.php`):

```blade{7,11,18,22,25}
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    {!! view_render_event('bagisto.shop.layout.head.before') !!}
    
    <title>{{ $title ?? '' }}</title>
    
    {!! view_render_event('bagisto.shop.layout.head.after') !!}
</head>

<body>
    {!! view_render_event('bagisto.shop.layout.body.before') !!}
    
    <div id="app">
        {!! view_render_event('bagisto.shop.layout.content.before') !!}
        
        {{ $slot }}
        
        {!! view_render_event('bagisto.shop.layout.content.after') !!}
    </div>
    
    {!! view_render_event('bagisto.shop.layout.body.after') !!}
</body>
</html>
```

### Product Page Events

The product page (`packages/Webkul/Shop/src/Resources/views/products/view.blade.php`) wraps each block in a pair of events and passes the product every time. The names it actually dispatches:

```blade
{!! view_render_event('bagisto.shop.products.view.before', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.name.before', ['product' => $product]) !!}
    <!-- Product name -->
    {!! view_render_event('bagisto.shop.products.name.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.rating.before', ['product' => $product]) !!}
    <!-- Rating -->
    {!! view_render_event('bagisto.shop.products.rating.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.price.before', ['product' => $product]) !!}
    <!-- Price -->
    {!! view_render_event('bagisto.shop.products.price.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.short_description.before', ['product' => $product]) !!}
    <!-- Short description -->
    {!! view_render_event('bagisto.shop.products.short_description.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.view.quantity.before', ['product' => $product]) !!}
    <!-- Quantity box -->
    {!! view_render_event('bagisto.shop.products.view.quantity.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.view.add_to_cart.before', ['product' => $product]) !!}
    <!-- Add to cart -->
    {!! view_render_event('bagisto.shop.products.view.add_to_cart.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.view.buy_now.before', ['product' => $product]) !!}
    <!-- Buy now -->
    {!! view_render_event('bagisto.shop.products.view.buy_now.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.view.additional_actions.before', ['product' => $product]) !!}
        {!! view_render_event('bagisto.shop.products.view.compare.before', ['product' => $product]) !!}
        <!-- Compare -->
        {!! view_render_event('bagisto.shop.products.view.compare.after', ['product' => $product]) !!}
    {!! view_render_event('bagisto.shop.products.view.additional_actions.after', ['product' => $product]) !!}

    {!! view_render_event('bagisto.shop.products.view.description.before', ['product' => $product]) !!}
    <!-- Description tab -->
    {!! view_render_event('bagisto.shop.products.view.description.after', ['product' => $product]) !!}

{!! view_render_event('bagisto.shop.products.view.after', ['product' => $product]) !!}
```

The SocialShare package, for instance, adds its buttons by listening to `bagisto.shop.products.view.compare.after`; a package that wants to print something under the price would listen to `bagisto.shop.products.price.after` the same way.

### Checkout Page Events

The one-page checkout (`checkout/onepage/index.blade.php` and its partials) wraps the header, breadcrumbs, each address form, the shipping and payment method lists and the order summary:

```blade
{!! view_render_event('bagisto.shop.checkout.onepage.header.before') !!}
{!! view_render_event('bagisto.shop.checkout.onepage.header.after') !!}

{!! view_render_event('bagisto.shop.checkout.onepage.address.guest.billing.before') !!}
{!! view_render_event('bagisto.shop.checkout.onepage.address.guest.billing.after') !!}

{!! view_render_event('bagisto.shop.checkout.onepage.payment_methods.before') !!}
    {!! view_render_event('bagisto.shop.checkout.onepage.payment_method.accordion.before') !!}
        {!! view_render_event('bagisto.shop.checkout.payment-method.before') !!}
        <!-- One payment method radio -->
        {!! view_render_event('bagisto.shop.checkout.onepage.payment-method.image.before') !!}
        {!! view_render_event('bagisto.shop.checkout.onepage.payment-method.image.after') !!}
{!! view_render_event('bagisto.shop.checkout.onepage.payment_methods.after') !!}

{!! view_render_event('bagisto.shop.checkout.cart.summary.grand_total.before') !!}
{!! view_render_event('bagisto.shop.checkout.cart.summary.grand_total.after') !!}

{!! view_render_event('bagisto.shop.checkout.onepage.summary.paypal_smart_button.before') !!}
{!! view_render_event('bagisto.shop.checkout.onepage.summary.paypal_smart_button.after') !!}
```

### Finding the name you need

There are over a thousand render events across the Shop and Admin views. The reliable way to find the one for a spot on a page is to open the Blade file that draws it (the [Blade Tracer](../theme-development/blade-tracer.md) shows which file that is) and read the surrounding `view_render_event()` calls, or to grep:

```bash
grep -rn "view_render_event('bagisto.admin.sales.order" packages/Webkul/Admin/src/Resources/views
```

::: tip Strategic Placement
Bagisto places render events at key locations where extensions commonly need to add functionality:
- Before/after major sections (header, footer, content areas)
- Around forms (login, checkout, product configuration)
- Near action buttons (add to cart, checkout, account actions)
- In listing pages (product grids, order lists)
:::

## Injecting Content with Render Events

To inject content into these predefined locations, you need to listen for the render events and provide template content. This is typically done in your package's service provider.

### Basic Event Listener Setup

Core packages register render listeners in their `EventServiceProvider::boot()`, the way SocialShare does:

**File:** `packages/Webkul/SocialShare/src/Providers/EventServiceProvider.php`

```php
<?php

namespace Webkul\SocialShare\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Event::listen('bagisto.shop.products.view.compare.after', function ($viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('social_share::share');
        });
    }
}
```

A package's own provider registers that `EventServiceProvider` from its `boot()` method. For the RMA example:

```php
Event::listen('bagisto.shop.products.view.additional_actions.after', function ($viewRenderEventManager) {
    $viewRenderEventManager->addTemplate('rma::shop.products.return-button');
});

Event::listen('bagisto.shop.customers.account.orders.view.after', function ($viewRenderEventManager) {
    $viewRenderEventManager->addTemplate('rma::shop.customers.return-request-form');
});
```

### Template Registration Method

The `$viewRenderEventManager->addTemplate($template, $params = [])` method accepts:

- **Template path**: Using package notation (`package::view.path`), rendered with the parameters
- **Raw HTML**: A string that is not a view name is emitted as-is; `Webkul\BookingProduct\Listeners\PriceNote` uses this for a one-line note
- **Data array** (optional): Merged into the parameters the template receives

The listener also receives whatever the view passed as the second argument to `view_render_event()`:

```php
Event::listen('bagisto.shop.products.price.after', function ($viewRenderEventManager) {
    $product = $viewRenderEventManager->getParam('product');

    $viewRenderEventManager->addTemplate('rma::shop.products.return-window', [
        'returnDays' => core()->getConfigData('sales.rma.setting.default_allowed_days'),
    ]);
});
```

`getParams()` returns the whole array and `getEventName()` the event, which is useful for one listener bound to several events.

::: info Template Resolution
Bagisto resolves template paths using Laravel's view system. Package notation (`rma::shop.products.return-button`) looks for templates in your package's `Resources/views` directory, and a storefront template is subject to [theme overrides](../theme-development/creating-store-theme.md#how-views-are-resolved) like any other view.
:::

## Best Practices

When working with Bagisto's render events, following these best practices ensures your implementations are maintainable, performant, and compatible with future updates.

### Event Naming Conventions

Follow consistent naming patterns for your render events:

```blade
{!! view_render_event('bagisto.{area}.{module}.{page}.{section}.{position}') !!}
```

**Examples:**
- `bagisto.shop.products.view.additional_actions.after`
- `bagisto.admin.sales.orders.create.before`
- `bagisto.shop.checkout.onepage.address.guest.billing.after`

Almost every core event ends in `.before` or `.after`. A handful of older admin events omit the `bagisto.` prefix (`admin.settings.channels.create.create_form_controls.before`), and `bagisto.admin.layout.head` has no suffix; read the view rather than guessing a name from the convention.

### Performance Considerations

::: warning Performance Impact
Render events add minimal overhead, but consider these guidelines:
- **Limit complex logic**: Keep event listeners lightweight
- **Cache when possible**: Cache heavy computations in your templates
- **Conditional loading**: Only register events when your package is active
- **Template optimization**: Use efficient blade templates
:::

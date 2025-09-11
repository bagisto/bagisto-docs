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
```

When this function is called, Bagisto checks if any listeners are registered for that event and renders their content at that exact location.

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

In product detail pages, Bagisto provides events for different sections:

```blade{5,9,13,16,20}
<div class="product-details">
    <div class="product-images">
        <!-- Product image gallery -->
        
        {!! view_render_event('bagisto.shop.products.view.gallery.after') !!}
    </div>
    
    <div class="product-info">
        {!! view_render_event('bagisto.shop.products.view.info.before') !!}
        
        <!-- Product title, price, description -->
        
        {!! view_render_event('bagisto.shop.products.view.info.after') !!}
        
        <div class="product-actions">
            {!! view_render_event('bagisto.shop.products.view.actions.before') !!}
            
            <!-- Add to cart, wishlist buttons -->
            
            {!! view_render_event('bagisto.shop.products.view.actions.after') !!}
        </div>
    </div>
</div>
```

### Checkout Page Events

Checkout pages have numerous injection points for payment methods, shipping options, and custom fields:

```blade{3,7,11,15}
<div class="checkout-form">
    <div class="billing-section">
        {!! view_render_event('bagisto.shop.checkout.billing.before') !!}
        
        <!-- Billing address form -->
        
        {!! view_render_event('bagisto.shop.checkout.billing.after') !!}
    </div>
    
    <div class="payment-section">
        {!! view_render_event('bagisto.shop.checkout.payment.before') !!}
        
        <!-- Payment method selection -->
        
        {!! view_render_event('bagisto.shop.checkout.payment.after') !!}
    </div>
</div>
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

Here's how to set up event listeners for render events:

```php{16-23}
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Event;

class RMAServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Listen to render events
        Event::listen('bagisto.shop.products.view.actions.after', function($viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('rma::shop.products.return-button');
        });

        Event::listen('bagisto.shop.customers.account.orders.view.after', function($viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('rma::shop.customers.return-request-form');
        });
    }
}
```

### Template Registration Method

The `$viewRenderEventManager->addTemplate()` method accepts:

- **Template path**: Using package notation (`package::view.path`) or direct path
- **Data array** (optional): Additional data to pass to the template

```php{3-5}
Event::listen('bagisto.shop.checkout.payment.after', function($viewRenderEventManager) {
    $viewRenderEventManager->addTemplate('rma::shop.checkout.return-policy', [
        'policyUrl' => config('rma.return_policy_url'),
        'returnDays' => config('rma.default_return_days', 30)
    ]);
});
```

::: info Template Resolution
Bagisto resolves template paths using Laravel's view system. Package notation (`rma::shop.products.return-button`) looks for templates in your package's `Resources/views` directory.
:::

## Best Practices

When working with Bagisto's render events, following these best practices ensures your implementations are maintainable, performant, and compatible with future updates.

### Event Naming Conventions

Follow consistent naming patterns for your render events:

```blade
{!! view_render_event('bagisto.{area}.{module}.{page}.{section}.{position}') !!}
```

**Examples:**
- `bagisto.shop.products.view.actions.after`
- `bagisto.admin.sales.orders.edit.form.before`
- `bagisto.shop.checkout.billing.address.after`

### Performance Considerations

::: warning Performance Impact
Render events add minimal overhead, but consider these guidelines:
- **Limit complex logic**: Keep event listeners lightweight
- **Cache when possible**: Cache heavy computations in your templates
- **Conditional loading**: Only register events when your package is active
- **Template optimization**: Use efficient blade templates
:::

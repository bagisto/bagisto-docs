# Email Template

Bagisto's order, account and store emails render Blade views from the Shop and Admin packages, so a theme restyles them like any other view. The catch is that the theme's copy is only used while the theme is active, which depends on how the email is sent. This page lists the email views, overrides one in a theme, and overrides an email everywhere.

## How an Email Is Rendered

Order, account and store emails are mailables extending `Webkul\Shop\Mail\Mailable` or `Webkul\Admin\Mail\Mailable`, both of which implement `ShouldQueue`. Each names its view in `content()`: `Webkul\Shop\Mail\Order\CreatedNotification` renders `shop::emails.orders.created` and passes its public `$order` property to it. The customer's password reset is a notification, `Webkul\Shop\Mail\Customer\ResetPasswordNotification`, that renders `shop::emails.customers.forgot-password`. Each email view wraps its body in its package's layout with `@component('shop::emails.layout')` or `@component('admin::emails.layout')`.

Campaign emails are the exception: `Webkul\Marketing\Mail\NewsletterMail` sends the HTML of the email template saved in the admin rather than a Blade view, so a theme can't restyle them.

### The Email Views

| Views | Files | Recipient |
|---|---|---|
| `shop::emails.layout` | `packages/Webkul/Shop/src/Resources/views/emails/layout.blade.php` | The layout of every Shop email |
| `shop::emails.orders.*` | `created`, `invoiced`, `shipped`, `refunded`, `canceled` and `commented` in `emails/orders/` | The customer |
| `shop::emails.customers.*` | `registration`, `email-verification`, `forgot-password`, `update-password`, `subscribed`, `commented`, `invoice-reminder` and `new-customer`, plus the `gdpr/`, `rma/` and `eu-withdrawal/` folders, in `emails/customers/` | The customer |
| `shop::emails.contact-us` | `emails/contact-us.blade.php` | The store, with the contact form's message |
| `admin::emails.layout` | `packages/Webkul/Admin/src/Resources/views/emails/layout.blade.php` | The layout of every Admin email |
| `admin::emails.orders.*` | `created`, `invoiced`, `shipped`, `refunded`, `canceled` and `inventory-source` in `emails/orders/` | Store notifications, such as the new-order email sent to the address from `core()->getAdminEmailDetails()` |
| `admin::emails.customers.*`, `admin::emails.admin.*`, `admin::emails.rma.*` | `registration` and `gdpr/` in `emails/customers/`, `forget-password` and `backup-codes` in `emails/admin/`, and `rma/conversation/message.blade.php` | Store notifications and admin account emails |

## Overriding an Email in a Theme

### Step 1: Copy the View into the Theme

The copy's path under the theme's `views` directory must equal the view's path under `packages/Webkul/Shop/src/Resources/views`:

```bash
mkdir -p resources/themes/custom-theme/views/emails/orders

cp packages/Webkul/Shop/src/Resources/views/emails/orders/created.blade.php resources/themes/custom-theme/views/emails/orders/created.blade.php
```

In the `CustomTheme` package, put the copy in `packages/Webkul/CustomTheme/src/Resources/views/emails/orders/` and publish it, or register the package views under the theme code ([Skipping the Publish Step](./creating-custom-theme-package.md#skipping-the-publish-step)).

### Step 2: Edit the Copy

Change the markup, and keep the `@component('shop::emails.layout')` wrapper so the email keeps its layout:

```blade
@component('shop::emails.layout')
    <p>This is a customized order email.</p>
@endcomponent
```

### Step 3: Restyle the Email Layout

Copy `packages/Webkul/Shop/src/Resources/views/emails/layout.blade.php` to `resources/themes/custom-theme/views/emails/layout.blade.php`, and change the structure, styling and branding there. The file name is singular: a `layouts.blade.php` is never picked up.

## When the Theme's Copy Is Used

The theme folder is only searched while a storefront theme is active; see [How Views Are Resolved](./creating-store-theme.md#how-views-are-resolved). Listeners send mailables with `Mail::queue()` (`packages/Webkul/Shop/src/Listeners/Base.php`), so where the email is rendered decides which view it uses:

| How the email is sent | View used |
|---|---|
| `QUEUE_CONNECTION=sync`, triggered on the storefront, such as an order being placed | The storefront theme's copy |
| `QUEUE_CONNECTION=sync`, triggered in the admin, such as an invoice being created | The admin theme's `views_path`, then the package view; never the storefront theme's copy |
| A real queue driver, with the email rendered by `php artisan queue:work` | The package view, because no theme is active in the worker |

A fresh install uses `QUEUE_CONNECTION=sync` (the value in `.env.example`), so emails are rendered in the request that triggers them until you configure a queue; see [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md).

::: warning Customer and Admin Emails Can Share an Override
The theme folder is searched by path, without the namespace. On a storefront request with the `sync` queue, `emails/orders/created.blade.php` in the theme answers both `shop::emails.orders.created` and `admin::emails.orders.created`, so the store's new-order notification is replaced as well. Check `packages/Webkul/Admin/src/Resources/views/emails` for a file with the same path before you override a Shop email.
:::

## Overriding an Email Everywhere

For an email that must look the same however it's sent, override the view on its namespace rather than through the theme. The provider below is the one the earlier pages built, with `View::prependNamespace()` added at the end of `boot()`:

**File:** `packages/Webkul/CustomTheme/src/Providers/CustomThemeServiceProvider.php`

```php
<?php

namespace Webkul\CustomTheme\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Webkul\CustomTheme\Listeners\StartingSections;

class CustomThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../Resources/views' => resource_path('themes/custom-theme/views'),
        ], 'custom-theme-views');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'custom-theme');

        Blade::anonymousComponentPath(__DIR__.'/../Resources/views/components', 'custom-theme');

        Event::listen(['appearance.theme.activate.after', 'core.channel.create.after'], StartingSections::class);

        View::prependNamespace('shop', __DIR__.'/../Resources/overrides/shop');
    }
}
```

The `anonymousComponentPath()` and `Event::listen()` calls are only there if you added the [standalone layout component](./understanding-layouts.md#a-standalone-layout-component) and the [starting sections](./theme-sections.md#starting-sections-for-a-theme).

A file at `packages/Webkul/CustomTheme/src/Resources/overrides/shop/emails/orders/created.blade.php` now replaces `shop::emails.orders.created` in queue workers, admin requests and storefront requests alike, on every channel. On a storefront request the active theme's `views_path` is still searched first. Use `View::prependNamespace('admin', ...)` for an Admin email.

Laravel's application-level equivalent is `resources/views/vendor/shop/emails/orders/created.blade.php`, which is searched whenever that directory exists. Prefer the package route: it travels with the theme.

## Previewing an Email

A mailable returned from a route renders in the browser. A temporary route in the `shop` middleware group renders it with the storefront theme active:

**File:** `routes/web.php`

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Sales\Repositories\OrderRepository;
use Webkul\Shop\Mail\Order\CreatedNotification;

Route::middleware(['web', 'shop'])->get('mail-preview/order-created', function (OrderRepository $orderRepository) {
    return new CreatedNotification($orderRepository->find(1));
});
```

::: danger Remove the Route After Use
It shows an order's details to anyone who opens the URL. Never deploy it.
:::

## Next Step

Next, validate the forms your theme renders.

**Continue to:** [Validation](./validation.md)

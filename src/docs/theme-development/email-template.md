# Email Template

Email templates are a crucial part of your Bagisto theme, providing branded communication with your customers. This guide shows you how to customize email templates as part of your theme development workflow, building on the concepts covered in previous theme development sections.

## Understanding Email Templates in Themes

Email templates in Bagisto follow the same theming principles as your storefront views. Just like regular theme views, email templates can be customized and organized within your theme structure to maintain consistency with your brand identity.

### Email Template Architecture

Bagisto's email system uses Laravel's Mailable classes combined with Blade templates, following the same view resolution patterns as your theme:

```
Theme Structure for Emails:
└── resources/themes/your-theme/
    └── views/
        └── emails/
            ├── ...
            ├── ...
            ├── ...
            └── layouts.blade.php
```

::: tip Theme Integration
Email templates follow the same view resolution hierarchy as your theme views. When you customize an email template, it becomes part of your theme package, ensuring consistency across all customer touchpoints.
:::

## Email Template Flow

Email templates in Bagisto work through a system of Mailable classes and Blade views, similar to how your theme handles regular page views. Let's examine how this works:

### Mailable Classes

Bagisto uses mail notification classes located in namespaces like `Webkul\Shop\Mail`. These classes extend Laravel's `Mailable` class and define the email's structure, recipient, and view template.

Here's an example from the order created notification:

```php{42}
<?php

namespace Webkul\Shop\Mail\Order;

use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Webkul\Sales\Contracts\Order;
use Webkul\Shop\Mail\Mailable;

class CreatedNotification extends Mailable
{
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public Order $order) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            to: [
                new Address(
                    $this->order->customer_email,
                    $this->order->customer_full_name
                ),
            ],
            subject: trans('shop::app.emails.orders.created.subject'),
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'shop::emails.orders.created',
        );
    }
}
```

### View Resolution

The `view: 'shop::emails.orders.created'` follows the same theme resolution pattern you learned about in [Creating Store Theme](/docs/theme-development/creating-store-theme). Bagisto will look for this view in:

1. **Your active theme**: `resources/themes/your-theme/views/emails/orders/created.blade.php`
2. **Default theme**: `resources/themes/default/views/emails/orders/created.blade.php`  
3. **Package views**: `packages/Webkul/Shop/src/Resources/views/emails/orders/created.blade.php`

### Email Layout System

Email templates use a layout component system similar to your theme layouts:

```blade
@component('shop::emails.layout')
    ...
@endcomponent
```

The layout component (`shop::emails.layout`) provides the base HTML structure, styling, and branding for all emails, similar to how your theme's master layout works.

## Customizing Email Templates

Now let's learn how to customize email templates as part of your theme development. This process follows the same patterns you've learned for customizing other theme views.

### Method 1: Theme-Based Customization (Recommended)

This approach integrates email customization into your theme structure, making it part of your overall theme package.

#### Step 1: Create Email Views in Your Theme

Create the email template structure within your theme directory:

```bash
# Create email directories in your theme
mkdir -p resources/themes/your-theme/views/emails
```

#### Step 2: Override Specific Email Templates

Let's customize the order created email. Create the file:

**`resources/themes/your-theme/views/emails/orders/created.blade.php`**

::: warning Path Matching Requirement
Notice the path we have used: `emails/orders/created.blade.php`. This path is exactly the same as in the shop package (`packages/Webkul/Shop/src/Resources/views/emails/orders/created.blade.php`). We must follow the exact same path structure for view overriding to work. If you use a different path, the view will not be able to override the default template.
:::

```blade{1,8,15-20}
@component('shop::emails.layout')
    <p>This is customized order email.</p>
@endcomponent
```

#### Step 3: Customize the Email Layout

Create a custom email layout for your theme:

**`resources/themes/your-theme/views/emails/layouts.blade.php`**

::: warning Path Matching Requirement
Notice the path we have used: `emails/layouts.blade.php`. This path must match the layout reference used in email templates. The layout component `@component('shop::emails.layout')` will look for this file in the exact path structure for view overriding to work.
:::

::: info Layout Override
We are assuming you will change the layout to match your theme design, so we keep it as it is for now. You can customize the HTML structure, styling, and branding according to your theme requirements.
:::

```blade{5-10,15-25}
<!-- ... existing layout code ... -->
```

### Method 2: Package-Based Customization

If you're developing a theme package (as covered in [Creating Custom Theme Package](/docs/theme-development/creating-custom-theme-package)), email template customization follows the same principles as Method 1.

::: tip Package Structure
Simply place your email templates in your package's `src/Resources/views/emails/` directory following the same path structure:
- `src/Resources/views/emails/orders/created.blade.php`
- `src/Resources/views/emails/layouts.blade.php`
:::

The view registration and override mechanics work exactly the same way - Laravel's view resolution will automatically find your package's email templates when the corresponding views are requested.

For detailed package development setup, refer to the [Creating Custom Theme Package](/docs/theme-development/creating-custom-theme-package) guide.

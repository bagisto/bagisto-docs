# Email Template

[[TOC]]

## Introduction

In this section, we'll guide you through the process of customizing email templates in Bagisto. Customizing email templates allows you to personalize the appearance and content of email notifications sent from your Bagisto application.

## Email Template Flow

Before customizing, let's understand how email templates work in Bagisto. Bagisto uses mail notification classes located in namespaces like `Webkul\Shop\Mail`. These classes, such as `CanceledNotification`, extend Laravel's `Mailable` class and define the email's structure and data.

Here's an example from `CanceledNotification`:

```php
<?php

namespace Webkul\Shop\Mail\Order;

use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Webkul\Shop\Mail\Mailable;

class CanceledNotification extends Mailable
{
    /**
     * Create a new CanceledNotification instance.
     *
     * @return void
     */
    public function __construct(public $order) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            to: [
                new Address($this->order->customer_email, $this->order->customer_full_name),
            ],
            subject: trans('shop::app.emails.orders.canceled.subject'),
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'shop::emails.orders.canceled',
        );
    }
}
```

In the `content()` method of `CanceledNotification`, the email view `shop::emails.orders.canceled` is specified. This view file is located in the package's view directory.

The view file `order-cancel.blade.php` typically includes a layout component, such as `shop::emails.layouts.master`.

Now, let's explore the view file mentioned in `view('shop::emails.orders.canceled')`. If you check the file at the path `packages/Webkul/Shop/src/Resources/views/emails/sales/order-cancel.blade.php`, you will find it. This view file uses the main layout component `shop::emails.layouts.master`.

```php
@component('shop::emails.layout')
    ...
@endcomponent
```

This layout component is responsible for the overall email layout. If desired, you can explore this file as well. Now, let's proceed to learn how to change these email templates.

## Changing Email Template

To customize an email template in Bagisto, follow these steps:

### Override the View

To customize the email template, the recommended approach is to override the package's view. Since all email views are defined in the shop package, we need to override the view within the shop package.

Here's how you can override the view for the same file we mentioned above, `view('shop::emails.orders.canceled')`.

Bagisto registers two locations for views: the application's `resources/themes` directory specified in `config/themes.php`, and the directory you specify. If you are using the default theme, `shop` package, Bagisto will first check if a custom version of the view exists in the`resources/themes/default` directory. If the view has not been customized, Bagisto will then search the package's view directory.

To override the view, create the same directory structure in the application's `resources/themes/default` directory:

```
- resources/
  └── themes/
      └── default/
          └── views/
              └── emails/
                  └── sales/
                      └── order-cancel.blade.php
```

For example, create a file named `order-cancel.blade.php` within the `sales` directory, and modify its content as desired:

```blade

We regret to inform you that your order has been cancelled:

```

### Test Your Template

After customizing the template, test it by triggering the relevant email notification from your Bagisto application to verify that the changes are applied correctly.
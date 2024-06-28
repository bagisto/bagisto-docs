# Email Template

[[TOC]]

## Introduction

In this section, we'll guide you through the process of customizing email templates in Bagisto. Customizing email templates allows you to personalize the appearance and content of email notifications sent from your Bagisto application.

## Email Template Flow

Before customizing, let's understand how email templates work in Bagisto. Bagisto uses mail notification classes located in namespaces like `Webkul\Admin\Mail`. These classes, such as `CancelOrderAdminNotification`, extend Laravel's `Mailable` class and define the email's structure and data.

Here's an example from `CancelOrderAdminNotification`:

```php
<?php

namespace Webkul\Admin\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CancelOrderAdminNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Order.
     *
     * @var \Webkul\Sales\Contracts\Order
     */
    public $order;

    /**
     * Constructor.
     *
     * @param  \Webkul\Sales\Contracts\Order  $order
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Build.
     *
     * @return void
     */
    public function build()
    {
        return $this->from(core()->getSenderEmailDetails()['email'], core()->getSenderEmailDetails()['name'])
                    ->to(core()->getAdminEmailDetails()['email'])
                    ->subject(trans('shop::app.mail.order.cancel.subject'))
                    ->view('shop::emails.sales.order-cancel-admin');
    }
}
```

In the `build()` method, the email view `shop::emails.sales.order-cancel-admin` is specified, which is located in the package's view directory.

The view file `order-cancel-admin.blade.php` typically includes a layout component, such as `shop::emails.layouts.master`.

Now, let's explore the view file mentioned in `view('shop::emails.sales.order-cancel-admin')`. If you check the file at the path `packages/Webkul/Shop/src/Resources/views/emails/sales/order-cancel-admin.blade.php`, you will find it. This view file uses the main layout component `shop::emails.layouts.master`.

```php
@component('shop::emails.layouts.master')
    ...
@endcomponent
```

This layout component is responsible for the overall email layout. If desired, you can explore this file as well. Now, let's proceed to learn how to change these email templates.

## Changing Email Template

To customize an email template in Bagisto, follow these steps:

### Override the View

To customize the email template, the recommended approach is to override the package's view. Since all email views are defined in the shop package, we need to override the view within the shop package.

Here's how you can override the view for the same file we mentioned above, `view('shop::emails.sales.order-cancel-admin')`.

Bagisto registers two locations for views: the application's `resources/themes` directory specified in `config/themes.php`, and the directory you specify. If you are using the default theme, `shop` package, Bagisto will first check if a custom version of the view exists in the`resources/themes/default` directory. If the view has not been customized, Bagisto will then search the package's view directory.

To override the view, create the same directory structure in the application's `resources/themes/default` directory:

```
- resources/
  └── themes/
      └── default/
          └── views/
              └── emails/
                  └── sales/
                      └── order-cancel-admin.blade.php
```

For example, create a file named `order-cancel-admin.blade.php` within the `sales` directory, and modify its content as desired:

```blade

Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro cumque numquam neque dicta quo, accusantium, perferendis sed beatae nesc

iunt eum impedit vel doloribus dolor excepturi vero tenetur perspiciatis saepe?
```

### Test Your Template

After customizing the template, test it by triggering the relevant email notification from your Bagisto application to verify that the changes are applied correctly.


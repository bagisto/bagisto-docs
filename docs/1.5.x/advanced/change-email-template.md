# Email Template

In this section, we are explaining how to change the email templates in Bagisto. As we all know, everyone wants some customization according to their own taste that's why knowing about changing the email template is also quite helpful for some users.

## Email template flow

Before diving into template change first we should know how the email template works in the Bagisto.

There are several mail notification classes like `CancelOrderAdminNotification`, `NewCustomerNotification`, and many more present in the `Webkul\Admin\Mail` namespace. Let's check one of these files, we are taking `CancelOrderAdminNotification` class as an example.

~~~php
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

    public function build()
    {
        return $this->from(core()->getSenderEmailDetails()['email'], core()->getSenderEmailDetails()['name'])
                    ->to(core()->getAdminEmailDetails()['email'])
                    ->subject(trans('shop::app.mail.order.cancel.subject'))
                    ->view('shop::emails.sales.order-cancel-admin');
    }
}
~~~

If you check the `build()` method in the above class. You will come to know that the main view file i.e. `view('shop::emails.sales.order-cancel-admin')` is loaded from the shop package.

Now check the view file mentioned in the `view('shop::emails.sales.order-cancel-admin')` method. If you check at this path `packages/Webkul/Shop/src/Resources/views/emails/sales/order-cancel-admin.blade.php`, you will get this file. Let's explore this one, if you check this file you will come to know that the main layout component i.e. `shop::emails.layouts.master` is used.

~~~php
@component('shop::emails.layouts.master')
    ...
@endcomponent
~~~

And this is responsible for your layouts. You can also explore that file if you want. Now we will move on to how to change these layouts.

## Changing email template

Now, we are changing the template. The recommended way to change the template is by overriding the package's view. If you check the above flow you will come to know that all views for emails are defined in the shop package. So we need to override the view for the shop package.

Let's override the view of the same file which we explained above i.e. `view('shop::emails.sales.order-cancel-admin')`.

As this is a Laravel stuff, Bagisto also registers two locations for your views i.e. the application's `resources/themes` directory mentioned in the `config/themes.php` and the directory you specify. So, if you are using the `default` theme i.e. `shop` package, then Bagisto will first check if a custom version of the view has been placed in the `resources/themes/default` directory. Then, if the view has not been customized, Bagisto will search the package view directory.

Now, for overriding we are creating the same structure in the application's `resources/themes/default` directory.

~~~directory-structure
- resources/
  - themes/
    - default/
      - views/
        - emails/
          - sales/
            - order-cancel-admin.blade.php
~~~

Let's say this file i.e. `order-cancel-admin.blade.php` is having some random paragraphs like below,

~~~order-cancel-admin.blade.php
...

Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro cumque numquam neque dicta quo, accusantium, perferendis sed beatae nesciunt eum impedit vel doloribus dolor excepturi vero tenetur perspiciatis saepe?

...
~~~

Now, test the mail.

## Mail Sample

![Mail Sample](../../assets/1.5.x/images/advanced-topics/mail-sample.png)

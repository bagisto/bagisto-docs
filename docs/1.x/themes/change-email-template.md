# Change email template

In this section, we are explaining how to change the email template in the Bagisto. As we all know that everyone wants some customization according to their own taste that's why knowing about changing the email template is also quite helpful for some users.

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
     * @var \Webkul\Sales\Contracts\Order
     */
    public $order;

    /**
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

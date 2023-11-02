# Event Listeners

[[TOC]]

## Introduction

Event Listeners in Bagisto are a way to implement the observer pattern, where listeners respond to events that occur in the application. Events can be thought of as announcements made by the application, and listeners are the actions taken in response to those announcements. All event classes in Bagisto are stored in the **Providers** folder, and the listeners are stored in the **Listeners** folder.

## Creating an Event Class

If you have the Bagisto Package Generator installed, you can use the following command to create a new event class in the **`packages/Webkul/Blog/src/Events`** directory:

```sh
php artisan package:make-event BlogEvent Webkul/Blog
```

If the event class already exists, you can use the **`--force`** option to overwrite it:

```sh
php artisan package:make-event BlogEvent Webkul/Blog --force
```

Alternatively, if you don't have the package generator, you can create the file manually.

## Manually Registering Events

In Bagisto, events are manually registered in the **`boot`** method of your **`EventServiceProvider.php`** file. Here is an example of how to register events:

```php
/**
 * Register any other events for your application.
 *
 * @return void
 */
public function boot()
{
    //...

    Event::listen('event.name', 'path-upto-listener@function');
}
```

## Manually Registering Listeners

When registering events, you specify the listener function to be executed when an event is called. Here is an example of how to register a listener:

```php
class EventServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //...

        Event::listen('checkout.order.save.after', 'Webkul\Admin\Listeners\Order@sendNewOrderMail');
    }
}
```

## Specifying Events

In most CRUD operations, events are fired before and after the execution of a function. This allows listeners to perform additional operations before or after certain actions, such as product creation, update, or deletion.

## Events Fired in Bagisto

- Events fired in bagisto but not listened such that if any user wants to perform any action on event fire, then they may create listener file and perform the respective operation.

    | Events name                  | Functionality|
    | ------------------------------- | ------------- |
    | catalog.attribute.create.before | This event will be fired before attribute gets created. |
    | catalog.attribute.create.after | This event will be fired after attribute gets created. |
    | catalog.attribute.update.before | This event will be fired before attribute gets updated. |
    | catalog.attribute.update.after | This event will be fired after attribute gets updated. |
    | catalog.attribute.delete.before | This event will be fired before attribute gets deleted. |
    | catalog.attribute.delete.after | This event will be fired after attribute gets deleted. |
    | catalog.attribute_family.create.before | This event will be fired before attribute family gets created. |
    | catalog.attribute_family.create.after | This event will be fired after attribute family gets created. |
    | catalog.attribute_family.update.before | This event will be fired before updating attribute family. |
    | catalog.attribute_family.update.after | This event will be fired after updating attribute family. |
    | catalog.attribute_family.delete.before | This event will be fired before deleting attribute family. |
    | catalog.attribute_family.delete.after | This event will be fired after deleting attribute family. |
    | catalog.category.create.before | This event will be fired before creating category. | 
    | catalog.category.create.after | This event will be fired after creating category. |
    | catalog.category.update.before | This event will be fired before updating category. |
    | catalog.category.update.after | This event will be fired after updating category. |
    | catalog.category.delete.before | This event will be fired before deleting category. |
    | catalog.category.delete.after | This event will be fired after deleting category. |
    | catalog.categories.mass-update.before | This event will be fired before bulk category update. |
    | catalog.categories.mass-update.after | This event will be fired after bulk category update. |
    | catalog.product.create.before | This event will be fired before product gets created. |
    | catalog.product.create.after | This event will be fired after product gets created. |
    | catalog.product.update.before | This event will be fired before product gets updated. |
    | catalog.product.update.after | This event will be fired after product gets updated. |
    | catalog.product.delete.before | This event will be fired before product gets deleted. |
    | catalog.product.delete.after | This event will be fired after product gets deleted. | 
    | products.datagrid.sync | This event will be fired to synicing datagrid product. |
    | cms.pages.create.before | This event will be fired before cms page gets created. |
    | cms.pages.create.after | This event will be fired after cms page gets created. |
    | cms.pages.update.before | This event will be fired before cms page gets updated. |
    | cms.pages.update.after | This event will be fired after cms page gets updated. |
    | cms.pages.delete.before | This event will be fired before cms page gets deleted. |
    | cms.pages.delete.after | This event will be fired after cms page gets deleted. |
    | customer.addresses.create.before | This event will be fired before customer address gets created. |
    | customer.addresses.create.after | This event will be fired after customer address gets created. |
    | customer.addresses.update.before | This event will be fired before customer address gets updated. |
    | customer.addresses.update.after | This event will be fired after customer address gets updated. |
    | customer.addresses.delete.before | This event will be fired before customer address gets deleted. |
    | customer.addresses.delete.after | This event will be fired after customer address gets deleted. | 
    | customer.registration.before | This event will be fired before customer gets created. |
    | customer.registration.after | This event will be fired after customer gets created. |
    | customer.login.after | This event will be fired after customer gets login. |
    | customer.logout.after | This event will be fired after customer gets logout. |
    | customer.update.before | This event will be fired before customer gets updated. |
    | customer.update.after | This event will be fired after customer gets updated. |
    | customer.password.update.after | This event will be fired after customer password gets updated. |
    | customer.note-created.after | This event will be fired after customer note gets created. |
    | customer.subscription.before | This event will be fired before customer gets subscription. |
    | customer.subscription.after | This event will be fired after customer gets subscription. |
    | customer.delete.before | This event will be fired before customer gets deleted. |
    | customer.delete.after | This event will be fired after customer gets deleted. |
    | customer.customer_group.create.before | This event will be fired before customer group gets created. |
    | customer.customer_group.create.after | This event will be fired after customer group gets created. |
    | customer.customer_group.update.before | This event will be fired before customer group gets updated. |
    | customer.customer_group.update.after | This event will be fired after customer group gets updated. |
    | customer.customer_group.delete.before | This event will be fired before customer group gets deleted. |
    | customer.customer_group.delete.after | This event will be fired after customer group gets deleted. |
    | customer.review.update.before | This event will be fired before customer review gets updated. | 
    | customer.review.update.after | This event will be fired after customer review gets updated. |
    | customer.review.delete.before | This event will be fired before customer review gets deleted. |
    | customer.review.delete.after | This event will be fired after customer review gets deleted. |
    | marketing.sitemaps.create.before | This event will be fired before sitemaps gets created. |
    | marketing.sitemaps.create.after | This event will be fired after sitemaps gets created. |
    | marketing.sitemaps.update.before | This event will be fired before sitemaps gets updated. |
    | marketing.sitemaps.update.after | This event will be fired after sitemaps gets updated. | 
    | marketing.sitemaps.delete.before | This event will be fired before sitemaps gets deleted. |
    | marketing.sitemaps.delete.after | This event will be fired after sitemaps gets deleted. |
    | marketing.campaigns.create.before | This event will be fired before campaigns gets created. |
    | marketing.campaigns.create.after | This event will be fired after campaigns gets created. |
    | marketing.campaigns.update.before | This event will be fired before campaigns gets updated. |
    | marketing.campaigns.update.after | This event will be fired after campaigns gets updated. | 
    | marketing.campaigns.delete.before | This event will be fired before campaigns gets deleted. |
    | marketing.campaigns.delete.after | This event will be fired after campaigns gets deleted. |
    | marketing.events.create.before | This event will be fired before marketing event gets created. |
    | marketing.events.create.after | This event will be fired after marketing event gets created. |
    | marketing.events.update.before | This event will be fired before marketing event gets updated. |
    | marketing.events.update.after | This event will be fired after marketing event gets updated. | 
    | marketing.events.delete.before | This event will be fired before marketing event gets deleted. |
    | marketing.events.delete.after | This event will be fired after marketing event gets deleted. |
    | marketing.templates.create.before | This event will be fired before templates gets created. |
    | marketing.templates.create.after | This event will be fired after templates gets created. |
    | marketing.templates.update.before | This event will be fired before templates gets updated. |
    | marketing.templates.update.after | This event will be fired after templates gets updated. | 
    | marketing.templates.delete.before | This event will be fired before templates gets deleted. |
    | marketing.templates.delete.after | This event will be fired after templates gets deleted. |
    | promotions.cart_rule.create.before | This event will be fired before cart rule gets created. |
    | promotions.cart_rule.create.after | This event will be fired after cart rule gets created. |
    | promotions.cart_rule.update.before | This event will be fired before cart rule gets updated. |
    | promotions.cart_rule.update.after | This event will be fired after cart rule gets updated. |
    | promotions.cart_rule.delete.before | This event will be fired before cart rule gets deleted. |
    | promotions.cart_rule.delete.after | This event will be fired after cart rule gets deleted. |
    | promotions.catalog_rule.create.before | This event will be fired before catalog rule gets created. |
    | promotions.catalog_rule.create.after | This event will be fired after catalog rule gets created. |
    | promotions.catalog_rule.update.before | This event will be fired before catalog rule gets updated. |
    | promotions.catalog_rule.update.after | This event will be fired after catalog rule gets updated. |
    | promotions.catalog_rule.delete.before | This event will be fired before catalog rule gets deleted. |
    | promotions.catalog_rule.delete.after | This event will be fired after catalog rule gets deleted. |
    | sales.order.comment.create.before | This event will be fired before order comment gets created. |
    | sales.order.comment.create.after | This event will be fired after order comment gets created.|
    | core.channel.create.before | This event will be fired before channel gets created. |
    | core.channel.create.after | This event will be fired after channel gets created. |
    | core.channel.update.before | This event will be fired before channel gets updated. |
    | core.channel.update.after | This event will be fired after channel gets updated. |
    | core.channel.delete.before | This event will be fired before channel gets deleted. |
    | core.channel.delete.after | This event will be fired after channel gets deleted. |
    | core.exchange_rate.create.before | This event will be fired before exchange rate gets created. |
    | core.exchange_rate.create.after | This event will be fired after exchange rate gets created. |
    | core.exchange_rate.update.before | This event will be fired before exchange rate gets updated. |
    | core.exchange_rate.update.after | This event will be fired after exchange rate gets updated. |
    | core.exchange_rate.delete.before | This event will be fired before exchange rate gets deleted. |
    | core.exchange_rate.delete.after | This event will be fired after exchange rate gets deleted. |
    | inventory.inventory_source.create.before | This event will be fired before inventory source gets created. |
    | inventory.inventory_source.create.after | This event will be fired after inventory source gets created. |
    | inventory.inventory_source.update.before | This event will be fired before inventory source gets updated. |
    | inventory.inventory_source.update.after | This event will be fired after inventory source gets updated. |
    | inventory.inventory_source.delete.before | This event will be fired before inventory source gets deleted. |
    | inventory.inventory_source.delete.after | This event will be fired after inventory source gets deleted. |
    | user.role.create.before | This event will be fired before role gets created. |
    | user.role.create.after | This event will be fired after role gets created. |
    | user.role.update.before | This event will be fired before role gets updated. |
    | user.role.update.after | This event will be fired after role gets updated. |
    | user.role.delete.before | This event will be fired before role gets deleted. |
    | user.role.delete.after | This event will be fired after role gets deleted. |
    | theme_customization.create.before | This event will be fired before theme customization gets created. |
    | theme_customization.create.after | This event will be fired after theme customization gets created. |
    | theme_customization.update.before | This event will be fired before theme customization gets updated. |
    | theme_customization.update.after | This event will be fired after theme customization gets updated. |
    | theme_customization.delete.before | This event will be fired before theme customization gets deleted. |
    | theme_customization.delete.after | This event will be fired after theme customization gets deleted. |
    | user.admin.create.before | This event will be fired before admin gets created. |
    | user.admin.create.after | This event will be fired after admin gets created. |
    | user.admin.update.before | This event will be fired before admin gets updated. |
    | user.admin.update.after | This event will be fired after admin gets updated. |
    | admin.password.update.after | This event will be fired after admin password gets updated. |
    | user.admin.delete.before | This event will be fired before admin gets deleted. |
    | user.admin.delete.after | This event will be fired after admin gets deleted. |
    | tax.category.create.before | This event will be fired before tax category gets created. |
    | tax.category.create.after | This event will be fired after tax category gets created. |
    | tax.category.update.before | This event will be fired before tax category gets updated. |
    | tax.category.update.after | This event will be fired after tax category gets updated. |
    | tax.category.delete.before | This event will be fired before tax category gets deleted. |
    | tax.category.delete.after | This event will be fired after tax category gets deleted. |
    | tax.rate.create.before | This event will be fired before tax rate gets created. |
    | tax.rate.create.after | This event will be fired after tax rate gets created. |
    | tax.rate.update.before | This event will be fired before tax rate gets updated. |
    | tax.rate.update.after | This event will be fired after tax rate gets updated. |
    | tax.rate.delete.before | This event will be fired before tax rate gets deleted. |
    | tax.rate.delete.after | This event will be fired after tax rate gets deleted. |
    | checkout.cart.delete.before | This event will be fired before cart item gets deleted. |
    | checkout.cart.delete.after | This event will be fired after cart item gets deleted. |
    | checkout.cart.delete.all.before | This event will be fired before all cart items gets deleted. |
    | checkout.cart.delete.all.after | This event will be fired after all cart item gets deleted. |
    | checkout.cart.add.before | This event will be fired before cart item gets created. |
    | checkout.cart.add.after | This event will be fired after cart item gets created. |
    | checkout.cart.update.before | This event will be fired before cart item gets updated. |
    | checkout.cart.update.after | This event will be fired after cart item gets updated. |
    | checkout.cart.collect.totals.before | This event will be fired before collecting cart totals. |
    | checkout.cart.collect.totals.after | This event will be fired after collecting cart totals. |
    | checkout.cart.calculate.items.tax.before | This event will be fired before calculating cart items tax. |
    | checkout.cart.calculate.items.tax.after | This event will be fired after calculating cart items tax. |
    | core.configuration.save.before | This event will be fired before core configuration gets saved. |
    | core.configuration.save.after | This event will be fired after core configuration gets saved. |
    | core.currency.create.before | This event will be fired before currency gets created. |
    | core.currency.create.after | This event will be fired after currency gets created. |
    | core.currency.update.before | This event will be fired before currency gets updated. |
    | core.currency.update.after | This event will be fired after currency gets updated. |
    | core.currency.delete.before | This event will be fired before currency gets deleted. |
    | core.currency.delete.after | This event will be fired after currency gets deleted. |
    | core.locale.create.before | This event will be fired before locale gets created. |
    | core.locale.create.after | This event will be fired after locale gets created. |
    | core.locale.update.before | This event will be fired before locale gets updated. |
    | core.locale.update.after | This event will be fired after locale gets updated. |
    | core.locale.delete.before | This event will be fired before locale gets deleted. |
    | core.locale.delete.after | This event will be fired after locale gets deleted. |
    | sales.invoice.save.before | This event will be fired before invoice gets saved. |
    | sales.invoice.save.after | This event will be fired after invoice gets saved. |
    | checkout.order.save.before | This event will be fired before order gets saved. |
    | checkout.order.save.after | This event will be fired after order gets saved. |
    | checkout.order.orderitem.save.before | This event will be fired before order item gets saved. |
    | checkout.order.orderitem.save.after | This event will be fired after order item gets saved. |
    | sales.order.cancel.before | This event will be fired before order gets canceled. |
    | sales.order.cancel.after | This event will be fired after order gets canceled. |
    | sales.order.update-status.before | This event will be fired before order status gets updated. |
    | sales.order.update-status.after | This event will be fired after order status gets updated. |
    | sales.refund.save.before | This event will be fired before order refund gets saved. |
    | sales.refund.save.after | This event will be fired after order refund gets saved. |
    | sales.shipment.save.before | This event will be fired before shipment gets saved. |
    | sales.shipment.save.after | This event will be fired after shipment gets saved. |
    | checkout.load.index | This event will be fired on checkout page load. |
    | shop.item.buy-now | This event will be fired directly on the Buy Now product. |

## Events Listen in Bagisto

- Event listen in bagisto is given below with their functionality.

    | Events name                     | functionality |
    | ------------------------------- | ------------- |
    | bagisto.shop.layout.body.after | Listing this event to load css of shop layout. |
    | bagisto.admin.layout.head | Listing this event to load css of admin layout. |
    | checkout.order.save.after | Listing this event to send notification of new order. |
    | sales.order.update-status.after | Listing this event to send notification of when order status is changed. |
    | sales.invoice.save.after | Listing this event to add paypal smart button. |
    | bagisto.shop.customers.login_form_controls.before | Listing this event to add social login buttons. |
    | bagisto.shop.products.view.compare.after | Listing this event to add social share buttons. |

## Listening to Existing Events

To listen to an existing event in Bagisto, you can follow these steps:

1. Open the **`EventServiceProvider.php`** file located in the **`Providers`** folder.

2. Inside the **`boot`** method, you can register your listener by calling the **`Event::listen`** method and providing the event name and the listener function.

   ```php
   Event::listen('checkout.order.save.after', 'Webkul\Notification\Listeners\Order@createOrder');
   ```

   In the example above, we are listening to the **`checkout.order.save.after`** event and specifying the **`createOrder`** function from the **`Order`** listener class in the **`Webkul\Notification\Listeners`** namespace.

By registering the listener, you have associated the **`createOrder`** function with the **`checkout.order.save.after`** event. Whenever this event is triggered, the specified function will be executed.

You can modify the listener function according to your requirements to perform the desired operation.

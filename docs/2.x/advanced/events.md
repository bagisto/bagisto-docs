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
    
    parent::boot();

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
    | catalog.attribute.create.before | |
    | catalog.attribute.create.after | |
    | catalog.attribute.update.before | |
    | catalog.attribute.update.after | |
    | catalog.attribute.delete.before | |
    | catalog.attribute.delete.after | |
    | catalog.attribute_family.create.before | |
    | catalog.attribute_family.create.after | |
    | catalog.attribute_family.update.before | |
    | catalog.attribute_family.update.after | |
    | catalog.attribute_family.delete.before | |
    | catalog.attribute_family.delete.after | |
    | catalog.category.create.before | | 
    | catalog.category.create.after | |
    | catalog.category.update.before | |
    | catalog.category.update.after | |
    | catalog.category.delete.before | |
    | catalog.category.delete.after | |
    | catalog.categories.mass-update.before | |
    | catalog.categories.mass-update.after | |
    | catalog.product.create.before | |
    | catalog.product.create.after | |
    | catalog.product.update.before | |
    | catalog.product.update.after | |
    | catalog.product.delete.before | |
    | catalog.product.delete.after | | 
    | products.datagrid.sync | |
    | cms.pages.create.before | |
    | cms.pages.create.after | |
    | cms.pages.update.before | |
    | cms.pages.update.after | |
    | cms.pages.delete.before | |
    | cms.pages.delete.after | |
    | customer.addresses.create.before | |
    | customer.addresses.create.after | |
    | customer.addresses.update.before | |
    | customer.addresses.update.after | |
    | customer.addresses.delete.before | |
    | customer.addresses.delete.after | | 
    | customer.registration.before | |
    | customer.login.after | |
    | customer.logout.after | |
    | customer.registration.after | |
    | customer.update.before | |
    | customer.update.after | |
    | customer.password.update.after | |
    | customer.note-created.after | |
    | customer.subscription.before | |
    | customer.subscription.after | |
    | customer.delete.before | |
    | customer.delete.after | |
    | customer.customer_group.create.before | |
    | customer.customer_group.create.after | |
    | customer.customer_group.update.before | |
    | customer.customer_group.update.after | |
    | customer.customer_group.delete.before | |
    | customer.customer_group.delete.after | |
    | customer.review.update.before | | 
    | customer.review.update.after | |
    | customer.review.delete.before | |
    | customer.review.delete.after | |
    | marketing.sitemaps.create.before | |
    | marketing.sitemaps.create.after | |
    | marketing.sitemaps.update.before | |
    | marketing.sitemaps.update.after | | 
    | marketing.sitemaps.delete.before | |
    | marketing.sitemaps.delete.after | |
    | marketing.campaigns.create.before | |
    | marketing.campaigns.create.after | |
    | marketing.campaigns.update.before | |
    | marketing.campaigns.update.after | | 
    | marketing.campaigns.delete.before | |
    | marketing.campaigns.delete.after | |
    | marketing.events.create.before | |
    | marketing.events.create.after | |
    | marketing.events.update.before | |
    | marketing.events.update.after | | 
    | marketing.events.delete.before | |
    | marketing.events.delete.after | |
    | marketing.templates.create.before | |
    | marketing.templates.create.after | |
    | marketing.templates.update.before | |
    | marketing.templates.update.after | | 
    | marketing.templates.delete.before | |
    | marketing.templates.delete.after | |
    | promotions.cart_rule.create.before | |
    | promotions.cart_rule.create.after | |
    | promotions.cart_rule.update.before | |
    | promotions.cart_rule.update.after | |
    | promotions.cart_rule.delete.before | |
    | promotions.cart_rule.delete.after | |
    | promotions.catalog_rule.create.before | |
    | promotions.catalog_rule.create.after | |
    | promotions.catalog_rule.update.before | |
    | promotions.catalog_rule.update.after | |
    | promotions.catalog_rule.delete.before | |
    | promotions.catalog_rule.delete.after | |
    | sales.order.comment.create.before | |
    | sales.order.comment.create.after | |
    | core.channel.create.before | |
    | core.channel.create.after | |
    | core.channel.update.before | |
    | core.channel.update.after | |
    | core.channel.delete.before | |
    | core.channel.delete.after | |
    | core.exchange_rate.create.before | |
    | core.exchange_rate.create.after | |
    | core.exchange_rate.update.before | |
    | core.exchange_rate.update.after | |
    | core.exchange_rate.delete.before | |
    | core.exchange_rate.delete.after | |
    | inventory.inventory_source.create.before | |
    | inventory.inventory_source.create.after | |
    | inventory.inventory_source.update.before | |
    | inventory.inventory_source.update.after | |
    | inventory.inventory_source.delete.before | |
    | inventory.inventory_source.delete.after | |
    | user.role.create.before | |
    | user.role.create.after | |
    | user.role.update.before | |
    | user.role.update.after | |
    | user.role.delete.before | |
    | user.role.delete.after | |
    | theme_customization.create.before | |
    | theme_customization.create.after | |
    | theme_customization.update.before | |
    | theme_customization.update.after | |
    | theme_customization.delete.before | |
    | theme_customization.delete.after | |
    | user.admin.create.before | |
    | user.admin.create.after | |
    | user.admin.update.before | |
    | user.admin.update.after | |
    | admin.password.update.after | |
    | user.admin.delete.before | |
    | user.admin.delete.after | |
    | tax.category.create.before | |
    | tax.category.create.after | |
    | tax.category.update.before | |
    | tax.category.update.after | |
    | tax.category.delete.before | |
    | tax.category.delete.after | |
    | tax.rate.create.before | |
    | tax.rate.create.after | |
    | tax.rate.update.before | |
    | tax.rate.update.after | |
    | tax.rate.delete.before | |
    | tax.rate.delete.after | |
    | checkout.cart.delete.before | |
    | checkout.cart.delete.after | |
    | checkout.cart.delete.all.before | |
    | checkout.cart.delete.all.after | |
    | checkout.cart.add.before | |
    | checkout.cart.add.after | |
    | checkout.cart.update.before | |
    | checkout.cart.update.after | |
    | checkout.cart.collect.totals.before | |
    | checkout.cart.collect.totals.after | |
    | checkout.cart.calculate.items.tax.before | |
    | checkout.cart.calculate.items.tax.after | |
    | core.configuration.save.before | |
    | core.configuration.save.after | |
    | core.currency.create.before | |
    | core.currency.create.after | |
    | core.currency.update.before | |
    | core.currency.update.after | |
    | core.currency.delete.before | |
    | core.currency.delete.after | |
    | core.locale.create.before | |
    | core.locale.create.after | |
    | core.locale.update.before | |
    | core.locale.update.after | |
    | core.locale.delete.before | |
    | core.locale.delete.after | |
    | sales.invoice.save.before | |
    | sales.invoice.save.after | |
    | checkout.order.save.before | |
    | checkout.order.save.after | |
    | checkout.order.orderitem.save.before | |
    | checkout.order.orderitem.save.after | |
    | sales.order.cancel.before | |
    | sales.order.cancel.after | |
    | sales.order.update-status.before | |
    | sales.order.update-status.after | |
    | sales.refund.save.before | |
    | sales.refund.save.after | |
    | sales.shipment.save.before | |
    | sales.shipment.save.after | |
    | checkout.load.index | |
    | shop.item.buy-now | |

## Events Listen in Bagisto

- Event listen in bagisto is given below with their functionality.

    | Events name                     | functionality |
    | ------------------------------- | ------------- |
    | bagisto.shop.layout.body.after | |
    | bagisto.admin.layout.head | |
    | checkout.order.save.after | |
    | sales.order.update-status.after | |
    | checkout.order.save.after | |
    | sales.invoice.save.after |  |
    | bagisto.shop.customers.login_form_controls.before | |
    | bagisto.shop.products.view.compare.after | |

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

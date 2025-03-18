# Event Listeners

[[TOC]]

## Introduction

Event Listeners in Bagisto are a way to implement the observer pattern, where listeners respond to events that occur in the application. Events can be thought of as announcements made by the application, and listeners are the actions taken in response to those announcements. All event classes in Bagisto are stored in the **Providers** folder, and the listeners are stored in the **Listeners** folder.

## Creating an Event Class

If you have the Bagisto Package Generator installed, you can use the following command to create a new event class in the **`packages/Webkul/CustomEvent/src/Events`** directory:

```sh
php artisan package:make-event CustomEvent Webkul/CustomEvent
```

If the event class already exists, you can use the **`--force`** option to overwrite it:

```sh
php artisan package:make-event CustomEvent Webkul/CustomEvent --force
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

  | Events name                                | Functionality                                                                                                                                                                                            |
  | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | core.configuration.save.after              | This event will be fired after core configuration form data gets saved, then you may create a listener file and perform the respective operation when that event fires                                   |
  | core.configuration.save.after              | This event will be fired after core configuration form data gets saved, then you may create a listener file and perform the respective operation when that event fires                                   |
  | checkout.cart.item.add.before              | This event will be fired before saving into the database of item added in checkout and you may create a listener file and perform the respective operation when that event fires                         |
  | checkout.cart.item.add.after               | This event will be fired after saving into the database of item added in checkout and you may create a listener file and perform the respective operation when that event fires                          |
  | checkout.cart.item.update.before           | This event will be fired before updating the database item of checkout table of respective passed **`id`** and you may create a listener file and perform the respective operation when that event fires |
  | checkout.cart.item.update.after            | This event will be fired after updating the database item of checkout table of respective passed **`id`** and you may create a listener file and perform the respective operation when that event fires  |
  | checkout.cart.delete.before                | This event will be fired before deleting the database item of checkout table of respective passed **`id`** and you may create a listener file and perform the respective operation when that event fires |
  | checkout.cart.delete.after                 | This event will be fired after deleting the database item of checkout table of respective passed **`id`** and you may create a listener file and perform the respective operation when that event fires  |
  | checkout.cart.item.delete.before           | This event will be fired before deleting the database item of checkout table of respective passed **`id`** and you may create a listener file and perform the respective operation when that event fires |
  | checkout.cart.item.delete.after            | This event will be fired after deleting the database item of checkout table of respective passed **`id`** and you may create a listener file and perform the respective operation when that event fires  |
  | checkout.cart.item.move-to-wishlist.before | This event will be fired before adding cart item to wishlist added in checkout and you may create a listener file and perform the respective operation when that event fires                             |
  | checkout.cart.item.move-to-wishlist.after  | This event will be fired after adding cart item to wishlist added in checkout and you may create a listener file and perform the respective operation when that event fires                              |
  | customer.registration.before               | This event will be fired before registration of customer details and you may create a listener file and perform the respective operation when that event fires                                           |
  | customer.registration.after                | This event will be fired after registration of customer details and you may create a listener file and perform the respective operation when that event fires                                            |
  | customer.after.login                       | This event will be fired after login of customer and you may create a listener file and perform the respective operation when that event fires                                                           |
  | catalog.attribute_family.create.before     | This event will be fired before attribute family gets created and you may create a listener file and perform the respective operation when that event fires                                              |
  | catalog.attribute_family.create.after      | This event will be fired after attribute family gets created and you may create a listener file and perform the respective operation when that event fires                                               |
  | catalog.attribute_family.update.before     | This event will be fired before updating attribute family and you may create a listener file and perform the respective operation when that event fires                                                  |
  | catalog.attribute_family.update.after      | This event will be fired after updating attribute family and you may create a listener file and perform the respective operation when that event fires                                                   |
  | catalog.attribute_family.delete.before     | This event will be fired before deleting attribute family and you may create a listener file and perform the respective operation when that event fires                                                  |
  | catalog.attribute_family.delete.after      | This event will be fired after deleting attribute family and you may create a listener file and perform the respective operation when that event fires                                                   |
  | catalog.attribute.create.before            | This event will be fired before attribute gets created and you may create a listener file and perform the respective operation when that event fires                                                     |
  | catalog.attribute.create.after             | This event will be fired after attribute gets created and you may create a listener file and perform the respective operation when that event fires                                                      |
  | catalog.attribute.update.before            | This event will be fired before attribute gets updated and you may create a listener file and perform the respective operation when that event fires                                                     |
  | catalog.attribute.update.after             | This event will be fired after attribute gets updated and you may create a listener file and perform the respective operation when that event fires                                                      |
  | catalog.attribute.delete.before            | This event will be fired before attribute gets deleted and you may create a listener file and perform the respective operation when that event fires                                                     |
  | catalog.attribute.delete.after             | This event will be fired after attribute gets deleted and you may create a listener file and perform the respective operation when that event fires                                                      |
  | catalog.category.delete.after              | This event will be fired after deleting category and you may create a listener file and perform the respective operation when that event fires                                                           |
  | catalog.category.delete.before             | This event will be fired before deleting category with mass selection and you may create a listener file and perform the respective operation when that event fires                                      |
  | catalog.category.delete.after              | This event will be fired after deleting category with mass selection and you may create a listener file and perform the respective operation when that event fires                                       |
  | catalog.category.create.before             | This event will be fired before creating category and you may create a listener file and perform the respective operation when that event fires                                                          |
  | catalog.category.create.after              | This event will be fired after creating category and you may create a listener file and perform the respective operation when that event fires                                                           |
  | catalog.category.update.before             | This event will be fired before updating category and you may create a listener file and perform the respective operation when that event fires                                                          |
  | catalog.category.update.after              | This event will be fired after updating category and you may create a listener file and perform the respective operation when that event fires                                                           |
  | catalog.category.delete.before             | This event will be fired before deleting category and you may create a listener file and perform the respective operation when that event fires                                                          |
  | catalog.category.delete.after              | This event will be fired after deleting category and you may create a listener file and perform the respective operation when that event fires                                                           |
  | core.channel.create.before                 | This event will be fired before channel gets created and you may create a listener file and perform the respective operation when that event fires                                                       |
  | core.channel.create.after                  | This event will be fired after channel gets created and you may create a listener file and perform the respective operation when that event fires                                                        |
  | core.channel.update.before                 | This event will be fired before channel gets updated and you may create a listener file and perform the respective operation when that event fires                                                       |
  | core.channel.update.after                  | This event will be fired after channel gets updated and you may create a listener file and perform the respective operation when that event fires                                                        |
  | core.channel.delete.before                 | This event will be fired before channel gets deleted and you may create a listener file and perform the respective operation when that event fires                                                       |
  | core.channel.delete.after                  | This event will be fired after channel gets deleted and you may create a listener file and perform the respective operation when that event fires                                                        |
  | core.currency.create.before                | This event will be fired before currency gets created and you may create a listener file and perform the respective operation when that event fires                                                      |
  | core.currency.create.after                 | This event will be fired after currency gets created and you may create a listener file and perform the respective operation when that event fires                                                       |
  | core.currency.update.before                | This event will be fired before currency gets updated and you may create a listener file and perform the respective operation when that event fires                                                      |
  | core.currency.update.after                 | This event will be fired after currency gets updated and you may create a listener file and perform the respective operation when that event fires                                                       |
  | core.currency.delete.before                | This event will be fired before currency gets deleted and you may create a listener file and perform the respective operation when that event fires                                                      |
  | core.currency.delete.after                 | This event will be fired after currency gets deleted and you may create a listener file and perform the respective operation when that event fires                                                       |
  | core.currency.delete.before                | This event will be fired before currency gets deleted with mass selection and you may create a listener file and perform the respective operation when that event fires                                  |
  | core.currency.delete.after                 | This event will be fired after currency gets deleted with mass selection and you may create a listener file and perform the respective operation when that event fires                                   |
  | core.exchange_rate.create.before           | This event will be fired before exchange rate gets created and you may create a listener file and perform the respective operation when that event fires                                                 |
  | core.exchange_rate.create.after            | This event will be fired after exchange rate gets created and you may create a listener file and perform the respective operation when that event fires                                                  |
  | core.exchange_rate.update.before           | This event will be fired before exchange rate gets updated and you may create a listener file and perform the respective operation when that event fires                                                 |
  | core.exchange_rate.update.after            | This event will be fired after exchange rate gets updated and you may create a listener file and perform the respective operation when that event fires                                                  |
  | core.exchange_rate.delete.before           | This event will be fired before exchange rate gets deleted and you may create a listener file and perform the respective operation when that event fires                                                 |
  | core.exchange_rate.delete.after            | This event will be fired after exchange rate gets deleted and you may create a listener file and perform the respective operation when that event fires                                                  |
  | core.locale.create.before                  | This event will be fired before locale gets created and you may create a listener file and perform the respective operation when that event fires                                                        |
  | core.locale.create.after                   | This event will be fired after locale gets created and you may create a listener file and perform the respective operation when that event fires                                                         |
  | core.locale.update.before                  | This event will be fired before locale gets updated and you may create a listener file and perform the respective operation when that event fires                                                        |
  | core.locale.update.after                   | This event will be fired after locale gets updated and you may create a listener file and perform the respective operation when that event fires                                                         |
  | core.locale.delete.before                  | This event will be fired before locale gets deleted and you may create a listener file and perform the respective operation when that event fires                                                        |
  | core.locale.delete.after                   | This event will be fired after locale gets deleted and you may create a listener file and perform the respective operation when that event fires                                                         |
  | customer.registration.before               | This event will be fired before customer gets registered and you may create a listener file and perform the respective operation when that event fires                                                   |
  | customer.registration.after                | This event will be fired after customer gets registered and you may create a listener file and perform the respective operation when that event fires                                                    |
  | customer.after.login                       | This event will be fired after customer successfully logins in store and you may create a listener file and perform the respective operation when that event fires                                       |
  | customer.after.logout                      | This event will be fired after customer successfully logouts from store and you may create a listener file and perform the respective operation when that event fires                                    |
  | inventory.inventory_source.create.before   | This event will be fired before inventory source gets created and you may create a listener file and perform the respective operation when that event fires                                              |
  | inventory.inventory_source.create.after    | This event will be fired after inventory source gets created and you may create a listener file and perform the respective operation when that event fires                                               |
  | inventory.inventory_source.update.before   | This event will be fired before inventory source gets updated and you may create a listener file and perform the respective operation when that event fires                                              |
  | inventory.inventory_source.update.after    | This event will be fired after inventory source gets updated and you may create a listener file and perform the respective operation when that event fires                                               |
  | inventory.inventory_source.delete.before   | This event will be fired before inventory source gets deleted and you may create a listener file and perform the respective operation when that event fires                                              |
  | inventory.inventory_source.delete.after    | This event will be fired after inventory source gets deleted and you may create a listener file and perform the respective operation when that event fires                                               |
  | customer.review.update.before              | This event will be fired before customer review gets updated and you may create a listener file and perform the respective operation when that event fires                                               |
  | customer.review.update.after               | This event will be fired after customer review gets updated and you may create a listener file and perform the respective operation when that event fires                                                |
  | customer.review.delete.before              | This event will be fired before customer review gets deleted and you may create a listener file and perform the respective operation when that event fires                                               |
  | customer.review.delete.after               | This event will be fired after customer review gets deleted and you may create a listener file and perform the respective operation when that event fires                                                |
  | customer.review.delete.before              | This event will be fired before customer review gets deleted with mass selection and you may create a listener file and perform the respective operation when that event fires                           |
  | customer.review.delete.after               | This event will be fired after customer review gets deleted with mass selection and you may create a listener file and perform the respective operation when that event fires                            |
  | customer.review.update.before              | This event will be fired before customer review gets updated with mass selection and you may create a listener file and perform the respective operation when that event fires                           |
  | customer.review.update.after               | This event will be fired after customer review gets updated with mass selection and you may create a listener file and perform the respective operation when that event fires                            |
  | catalog.product.create.before              | This event will be fired before product gets created and you may create a listener file and perform the respective operation when that event fires                                                       |
  | catalog.product.create.after               | This event will be fired after product gets created and you may create a listener file and perform the respective operation when that event fires                                                        |
  | catalog.product.update.before              | This event will be fired before product gets updated and you may create a listener file and perform the respective operation when that event fires                                                       |
  | catalog.product.update.after               | This event will be fired after product gets updated and you may create a listener file and perform the respective operation when that event fires                                                        |
  | catalog.product.delete.before              | This event will be fired before product gets deleted and you may create a listener file and perform the respective operation when that event fires                                                       |
  | catalog.product.delete.after               | This event will be fired after product gets deleted and you may create a listener file and perform the respective operation when that event fires                                                        |
  | sales.invoice.save.before                  | This event will be fired before invoice gets created and you may create a listener file and perform the respective operation when that event fires                                                       |
  | sales.invoice.save.after                   | This event will be fired after invoice gets created and you may create a listener file and perform the respective operation when that event fires                                                        |
  | checkout.order.save.before                 | This event will be fired before order gets created and you may create a listener file and perform the respective operation when that event fires                                                         |
  | checkout.order.save.after                  | This event will be fired after order gets created and you may create a listener file and perform the respective operation when that event fires                                                          |
  | sales.order.cancel.before                  | This event will be fired before order gets cancelled and you may create a listener file and perform the respective operation when that event fires                                                       |
  | sales.order.cancel.after                   | This event will be fired after order gets cancelled and you may create a listener file and perform the respective operation when that event fires                                                        |
  | catalog.product.update.after               | This event will be fired after product gets updated and you may create a listener file and perform the respective operation when that event fires                                                        |
  | sales.shipment.save.before                 | This event will be fired before shipment for product gets created and you may create a listener file and perform the respective operation when that event fires                                          |
  | sales.shipment.save.after                  | This event will be fired after shipment for product gets created and you may create a listener file and perform the respective operation when that event fires                                           |
  | checkout.cart.add.before                   | This event will be fired before product get added in cart and you may create a listener file and perform the respective operation when that event fires                                                  |
  | checkout.cart.add.after                    | This event will be fired after product get added in cart and you may create a listener file and perform the respective operation when that event fires                                                   |
  | checkout.cart.delete.before                | This event will be fired before product get deleted from cart and you may create a listener file and perform the respective operation when that event fires                                              |
  | checkout.cart.delete.after                 | This event will be fired after product get deleted from cart and you may create a listener file and perform the respective operation when that event fires                                               |
  | checkout.cart.update.before                | This event will be fired before cart item get updated and you may create a listener file and perform the respective operation when that event fires                                                      |
  | checkout.cart.update.after                 | This event will be fired after cart item get updated and you may create a listener file and perform the respective operation when that event fires                                                       |
  | checkout.cart.add.before                   | This event will be fired before configurable product get added in cart and you may create a listener file and perform the respective operation when that event fires                                     |
  | checkout.cart.add.after                    | This event will be fired after configurable product get added in cart and proceeded to but the product and you may create a listener file and perform the respective operation when that event fires     |
  | tax.tax_category.create.before             | This event will be fired before tax category gets created and you may create a listener file and perform the respective operation when that event fires                                                  |
  | tax.tax_category.create.after              | This event will be fired after tax category gets created and you may create a listener file and perform the respective operation when that event fires                                                   |
  | tax.tax_category.update.before             | This event will be fired before tax category gets updated and you may create a listener file and perform the respective operation when that event fires                                                  |
  | tax.tax_category.update.after              | This event will be fired after tax category gets updated and you may create a listener file and perform the respective operation when that event fires                                                   |
  | tax.tax_category.delete.before             | This event will be fired before tax category gets deleted and you may create a listener file and perform the respective operation when that event fires                                                  |
  | tax.tax_category.delete.after              | This event will be fired after tax category gets deleted and you may create a listener file and perform the respective operation when that event fires                                                   |
  | tax.tax_rate.create.before                 | This event will be fired before tax rate gets created and you may create a listener file and perform the respective operation when that event fires                                                      |
  | tax.tax_rate.create.after                  | This event will be fired after tax rate gets created and you may create a listener file and perform the respective operation when that event fires                                                       |
  | tax.tax_rate.update.before                 | This event will be fired before tax rate gets updated and you may create a listener file and perform the respective operation when that event fires                                                      |
  | tax.tax_rate.update.after                  | This event will be fired after tax rate gets updated and you may create a listener file and perform the respective operation when that event fires                                                       |
  | tax.tax_rate.delete.before                 | This event will be fired before tax rate gets deleted and you may create a listener file and perform the respective operation when that event fires                                                      |
  | tax.tax_rate.delete.after                  | This event will be fired after tax rate gets deleted and you may create a listener file and perform the respective operation when that event fires                                                       |
  | user.role.create.before                    | This event will be fired before user role gets created. The role of user in created from admin panel and you may create a listener file and perform the respective operation when that event fires       |
  | user.role.create.after                     | This event will be fired after user role gets created. The role of user in created from admin panel and you may create a listener file and perform the respective operation when that event fires        |
  | user.role.update.before                    | This event will be fired before user role gets updated. The role of user in created from admin panel and you may create a listener file and perform the respective operation when that event fires       |
  | user.role.update.after                     | This event will be fired after user role gets updated. The role of user in created from admin panel and you may create a listener file and perform the respective operation when that event fires        |
  | user.role.delete.before                    | This event will be fired before user role gets updated. The role of user in created from admin panel and you may create a listener file and perform the respective operation when that event fires       |
  | user.role.delete.after                     | This event will be fired after user role gets deleted. The role of user in created from admin panel and you may create a listener file and perform the respective operation when that event fires        |
  | user.admin.create.before                   | This event will be fired before user gets created. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                  |
  | user.admin.delete.after                    | This event will be fired after user gets deleted. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                   |
  | user.admin.update.before                   | This event will be fired before user gets updated. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                  |
  | user.admin.update.after                    | This event will be fired after user gets updated. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                   |
  | user.admin.delete.before                   | This event will be fired before user gets deleted. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                  |
  | user.admin.delete.after                    | This event will be fired after user gets deleted. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                   |
  | user.admin.delete.before                   | This event will be fired before user gets deleted. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                  |
  | user.admin.delete.after                    | This event will be fired after user gets deleted. The user gets created from admin panel and you may create a listener file and perform the respective operation when that event fires                   |

## Events Listen in Bagisto

- Event listen in bagisto is given below with their functionality.

  | Events name                     | functionality                                                                                                                                                                   |
  | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | checkout.order.save.after       | This event will be fired after order creation and listen in **`ProductFlat`** listener file to send new order mail from **`sendNewOrderMail`** function                         |
  | sales.invoice.save.after        | This event will be fired after invoice details have been saved and listen in **`ProductFlat`** listener file to send new invoice mail from **`sendNewInvoiceMail`** function    |
  | sales.shipment.save.after       | This event will be fired after shipment details have been saved and listen in **`ProductFlat`** listener file to send new shipment mail from **`sendNewShipmentMail`** function |
  | checkout.order.save.after       | This event will be fired after order has been created and will listen in **`ProductFlat`** listener file to update product inventory from **`updateProductInventory`** function |
  | catalog.attribute.create.after  | This event will be fired after attribute has been created and listen in **`ProductFlat`** listener file from **`afterAttributeCreatedUpdated`** function                        |
  | catalog.attribute.update.after  | This event will be fired after attribute has updated and listen in **`ProductFlat`** listener file from **`afterAttributeCreatedUpdated`** function                             |
  | catalog.attribute.delete.before | This event will be fired before attribute has been delete and listen in **`ProductFlat`** listener file from **`afterAttributeDeleted`** function                               |
  | catalog.product.create.after    | This event will be fired after product has been creation and listen in **`ProductFlat`** listener file from **`afterProductCreatedUpdated`** function                           |
  | catalog.product.update.after    | This event will be fired after product has been updated and listen in **`ProductFlat`** listener file from **`afterProductCreatedUpdated`** function                            |

## Listening to Existing Events

To listen to an existing event in Bagisto, you can follow these steps:

1. Open the **`EventServiceProvider.php`** file located in the **`Providers`** folder.

2. Inside the **`boot`** method, you can register your listener by calling the **`Event::listen`** method and providing the event name and the listener function.

   ```php
   Event::listen('checkout.order.save.after', 'Webkul\Admin\Listeners\Order@sendNewOrderMail');
   ```

   In the example above, we are listening to the **`checkout.order.save.after`** event and specifying the **`sendNewOrderMail`** function from the **`Order`** listener class in the **`Webkul\Admin\Listeners`** namespace.

By registering the listener, you have associated the **`sendNewOrderMail`** function with the **`checkout.order.save.after`** event. Whenever this event is triggered, the specified function will be executed.

You can modify the listener function according to your requirements to perform the desired operation.

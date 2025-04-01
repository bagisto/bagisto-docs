# Events

[[TOC]]

## Introduction

Event Listeners in Bagisto are a way to implement the observer pattern, where listeners respond to events that occur in the application. Events can be thought of as announcements made by the application, and listeners are the actions taken in response to those announcements. All event classes in Bagisto are stored in the `Providers` folder, and the listeners are stored in the `Listeners` folder.

In Bagisto, events and listeners are organized in a clear and structured manner:

- Events are typically stored in the Events folder.
- Listeners are stored in the Listeners folder.

This organization makes it easy to manage and locate the event-driven components of your application.

To learn in detail about Controllers, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/events).

## Creating an Event Class

### Using Package Generator

If you have the Bagisto Package Generator installed, you can use the following command to create a new event class in the `packages/Webkul/CustomEvent/src/Events` directory:

```sh
php artisan package:make-event CustomEvent Webkul/CustomEvent
```

If the event class already exists, you can use the --force option to overwrite it:

```sh
php artisan package:make-event CustomEvent Webkul/CustomEvent --force
```

Alternatively, if you don't have the package generator, you can create the file manually by creating a new class in the `packages/Webkul/CustomEvent/src/Events` directory.

### Manually Registering Events

In Bagisto, you register events manually in the `boot` method of your `EventServiceProvider.php` file. Here is an example of how to register events:

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

In this example, `event.name` is the name of the event, and `path-upto-listener@function` is the listener method that will handle the event.

### Manually Registering Listeners

When registering events, you specify the listener function to be executed when an event is triggered. Here is an example of how to register a listener:

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

In this example, the `checkout.order.save.after` event will trigger the `sendNewOrderMail` method of the `Order` listener in the `Webkul\Admin\Listeners` namespace.

## Specifying Events

In Bagisto, events are typically fired before and after the execution of CRUD operations. This allows listeners to perform additional actions, such as logging, notifications, or data manipulation, at specific points in the lifecycle of an operation.

For example, you might have events fired during product creation, updating, or deletion. Here’s an example of firing events before and after saving an order:

```php
namespace Webkul\Sales\Repositories;

use Webkul\Sales\Contracts\Order;

class OrderRepository extends Repository
{
    public function create(array $data)
    {
        Event::dispatch('sales.order.create.before', $data);

        $order = parent::create($data);

        Event::dispatch('sales.order.create.after', $order);

        return $order;
    }
}
```

## Events Fired in Bagisto

In Bagisto, there are several events fired throughout its operations, allowing developers to hook into specific points in the application's lifecycle to customize behavior or add functionality. Here's a list of events that are fired in Bagisto, which you can listen to and handle as needed by creating event listeners:

| Events Name                                        | Functionality                                                     | Arguments                 |
| -------------------------------------------------- | ----------------------------------------------------------------- | ------------------------- |
| catalog.attribute.create.before                    | This event will be fired before attribute gets created.           | -                         |
| catalog.attribute.create.after                     | This event will be fired after attribute gets created.            | `attribute`               |
| catalog.attribute.update.before                    | This event will be fired before attribute gets updated.           | -                         |
| catalog.attribute.update.after                     | This event will be fired after attribute gets updated.            | `$attribute`              |
| catalog.attribute.delete.before                    | This event will be fired before attribute gets deleted.           | `$id`                     |
| catalog.attribute.delete.after                     | This event will be fired after attribute gets deleted.            | `$id`                     |
| catalog.attribute_family.create.before             | This event will be fired before attribute family gets created.    | -                         |
| catalog.attribute_family.create.after              | This event will be fired after attribute family gets created.     | `attribute_family`        |
| catalog.attribute_family.update.before             | This event will be fired before updating attribute family.        | `$id`                     |
| catalog.attribute_family.update.after              | This event will be fired after updating attribute family.         | `$attributeFamily`        |
| catalog.attribute_family.delete.before             | This event will be fired before deleting attribute family.        | `$id`                     |
| catalog.attribute_family.delete.after              | This event will be fired after deleting attribute family.         | `$id`                     |
| catalog.category.create.before                     | This event will be fired before creating category.                | -                         |
| catalog.category.create.after                      | This event will be fired after creating category.                 | `$category`               |
| catalog.category.update.before                     | This event will be fired before updating category.                | `$id`                     |
| catalog.category.update.after                      | This event will be fired after updating category.                 | `$category`               |
| catalog.category.delete.before                     | This event will be fired before deleting category.                | `$id`                     |
| catalog.category.delete.after                      | This event will be fired after deleting category.                 | `$id`                     |
| catalog.categories.mass-update.before              | This event will be fired before bulk category update.             | `$categoryId`             |
| catalog.categories.mass-update.after               | This event will be fired after bulk category update.              | `$category`               |
| catalog.product.create.before                      | This event will be fired before product gets created.             | -                         |
| catalog.product.create.after                       | This event will be fired after product gets created.              | `$product`                |
| catalog.product.update.before                      | This event will be fired before product gets updated.             | `$id`                     |
| catalog.product.update.after                       | This event will be fired after product gets updated.              | `$product`                |
| catalog.product.delete.before                      | This event will be fired before product gets deleted.             | `$id`                     |
| catalog.product.delete.after                       | This event will be fired after product gets deleted.              | `$id`                     |
| products.datagrid.sync                             | This event will be fired to synicing datagrid product.            | `true`                    |
| cms.page.create.before                             | This event will be fired before cms page gets created.            | -                         |
| cms.page.create.after                              | This event will be fired after cms page gets created.             | `$page`                   |
| cms.page.update.before                             | This event will be fired before cms page gets updated.            | `$id`                     |
| cms.page.update.after                              | This event will be fired after cms page gets updated.             | `$page`                   |
| cms.page.delete.before                             | This event will be fired before cms page gets deleted.            | `$id`                     |
| cms.page.delete.after                              | This event will be fired after cms page gets deleted.             | `id`                      |
| customer.addresses.create.before                   | This event will be fired before customer address gets created.    | -                         |
| customer.addresses.create.after                    | This event will be fired after customer address gets created.     | `$address`                |
| customer.addresses.update.before                   | This event will be fired before customer address gets updated.    | `$id`                     |
| customer.addresses.update.after                    | This event will be fired after customer address gets updated.     | `$address`                |
| customer.addresses.delete.before                   | This event will be fired before customer address gets deleted.    | `$id`                     |
| customer.addresses.delete.after                    | This event will be fired after customer address gets deleted.     | `$id`                     |
| customer.registration.before                       | This event will be fired before customer gets created.            | -                         |
| customer.registration.after                        | This event will be fired after customer gets created.             | -                         |
| customer.update.before                             | This event will be fired before customer gets updated.            | `$id`                     |
| customer.update.after                              | This event will be fired after customer gets updated.             | `$customer`               |
| customer.password.update.after                     | This event will be fired after customer password gets updated.    | `$customer`               |
| customer.note.create.before                        | This event will be fired before customer note gets created.       | `$id`                     |
| customer.note.create.after                         | This event will be fired after customer note gets created.        | `$customerNote`           |
| customer.subscription.before                       | This event will be fired before customer gets subscription.       | -                         |
| customer.subscription.after                        | This event will be fired after customer gets subscription.        | `$subscription`           |
| customer.after.login                               | This event will be fired after customer login.                    | `auth()->guard()->user()` |
| customer.delete.before                             | This event will be fired before customer gets deleted.            | `$customer`               |
| customer.delete.after                              | This event will be fired after customer gets deleted.             | `$customer`               |
| customer.customer_group.create.before              | This event will be fired before customer group gets created.      | -                         |
| customer.customer_group.create.after               | This event will be fired after customer group gets created.       | `$customerGroup`          |
| customer.customer_group.update.before              | This event will be fired before customer group gets updated.      | `$id`                     |
| customer.customer_group.update.after               | This event will be fired after customer group gets updated.       | `$customerGroup`          |
| customer.customer_group.delete.before              | This event will be fired before customer group gets deleted.      | `$id`                     |
| customer.customer_group.delete.after               | This event will be fired after customer group gets deleted.       | `$id`                     |
| customer.review.update.before                      | This event will be fired before customer review gets updated.     | `$id`                     |
| customer.review.update.after                       | This event will be fired after customer review gets updated.      | `$review`                 |
| customer.review.delete.before                      | This event will be fired before customer review gets deleted.     | `$id`                     |
| customer.review.delete.after                       | This event will be fired after customer review gets deleted.      | `$id`                     |
| marketing.search_seo.sitemap.create.before         | This event will be fired before sitemaps gets created.            | -                         |
| marketing.search_seo.sitemap.create.after          | This event will be fired after sitemaps gets created.             | `$sitemap`                |
| marketing.search_seo.sitemap.update.before         | This event will be fired before sitemaps gets updated.            | `$id`                     |
| marketing.search_seo.sitemap.update.after          | This event will be fired after sitemaps gets updated.             | `$sitemap`                |
| marketing.search_seo.sitemap.delete.before         | This event will be fired before sitemaps gets deleted.            | `$id`                     |
| marketing.search_seo.sitemap.delete.after          | This event will be fired after sitemaps gets deleted.             | `$id`                     |
| marketing.search_seo.search_synonyms.create.before | This event will be fired before search synonyms created           | -                         |
| marketing.search_seo.search_synonyms.create.after  | This event will be fired after search synonyms created            | `$searchSynonym`          |
| marketing.search_seo.search_synonyms.update.before | This event will be fired before synonyms gets updated.            | `$id`                     |
| marketing.search_seo.search_synonyms.update.after  | This event will be fired after synonyms gets updated.             | `$searchSynonym`          |
| marketing.search_seo.search_synonyms.delete.before | This event will be fired before synonyms gets deleted.            | `$id`                     |
| marketing.search_seo.search_synonyms.delete.after  | This event will be fired before synonyms gets deleted.            | `$id`                     |
| marketing.search_seo.search_terms.create.before    | This event will be fired before search search terms created       | -                         |
| marketing.search_seo.search_terms.create.after     | This event will be fired after search search terms created        | `$searchTerm`             |
| marketing.search_seo.search_terms.update.before    | This event will be fired before search search terms updated       | `$id`                     |
| marketing.search_seo.search_terms.update.after     | This event will be fired after search search terms updated        | `$searchTerm`             |
| marketing.search_seo.search_terms.delete.before    | This event will be fired before search search terms gets deleted  | `$id`                     |
| marketing.search_seo.search_terms.delete.after     | This event will be fired after search search terms gets deleted   | `$id`                     |
| marketing.search_seo.url_rewrites.create.before    | This event will be fired before search url rewrites gets created  | -                         |
| marketing.search_seo.url_rewrites.create.after     | This event will be fired after search url rewrites gets created   | `$urlRewrite`             |
| marketing.search_seo.url_rewrites.update.before    | This event will be fired before search url rewrites gets updated  | `$id`                     |
| marketing.search_seo.url_rewrites.update.after     | This event will be fired after search url rewrites gets updated   | `$urlRewrite`             |
| marketing.search_seo.url_rewrites.delete.before    | This event will be fired before search url rewrites gets deleted  | `$id`                     |
| marketing.search_seo.url_rewrites.delete.after     | This event will be fired after search url rewrites gets deleted   | `$id`                     |
| marketing.campaigns.create.before                  | This event will be fired before campaigns gets created.           | -                         |
| marketing.campaigns.create.after                   | This event will be fired after campaigns gets created.            | `$campaign`               |
| marketing.campaigns.update.before                  | This event will be fired before campaigns gets updated.           | `$id`                     |
| marketing.campaigns.update.after                   | This event will be fired after campaigns gets updated.            | `$campaign`               |
| marketing.campaigns.delete.before                  | This event will be fired before campaigns gets deleted.           | `$id`                     |
| marketing.campaigns.delete.after                   | This event will be fired after campaigns gets deleted.            | `$id`                     |
| marketing.events.create.before                     | This event will be fired before marketing event gets created.     | -                         |
| marketing.events.create.after                      | This event will be fired after marketing event gets created.      | `$event`                  |
| marketing.events.update.before                     | This event will be fired before marketing event gets updated.     | `$id`                     |
| marketing.events.update.after                      | This event will be fired after marketing event gets updated.      | `$event`                  |
| marketing.events.delete.before                     | This event will be fired before marketing event gets deleted.     | `$id`                     |
| marketing.events.delete.after                      | This event will be fired after marketing event gets deleted.      | `$id`                     |
| marketing.templates.create.before                  | This event will be fired before templates gets created.           | -                         |
| marketing.templates.create.after                   | This event will be fired after templates gets created.            | ` $template`              |
| marketing.templates.update.before                  | This event will be fired before templates gets updated.           | `$id`                     |
| marketing.templates.update.after                   | This event will be fired after templates gets updated.            | `$template`               |
| marketing.templates.delete.before                  | This event will be fired before templates gets deleted.           | `$id`                     |
| marketing.templates.delete.after                   | This event will be fired after templates gets deleted.            | `$id`                     |
| promotions.cart_rule.create.before                 | This event will be fired before cart rule gets created.           | -                         |
| promotions.cart_rule.create.after                  | This event will be fired after cart rule gets created.            | `$cartRule`               |
| promotions.cart_rule.update.before                 | This event will be fired before cart rule gets updated.           | `$id`                     |
| promotions.cart_rule.update.after                  | This event will be fired after cart rule gets updated.            | `$cartRule`               |
| promotions.cart_rule.delete.before                 | This event will be fired before cart rule gets deleted.           | `$id`                     |
| promotions.cart_rule.delete.after                  | This event will be fired after cart rule gets deleted.            | `$id`                     |
| promotions.catalog_rule.create.before              | This event will be fired before catalog rule gets created.        | -                         |
| promotions.catalog_rule.create.after               | This event will be fired after catalog rule gets created.         | `$catalogRule`            |
| promotions.catalog_rule.update.before              | This event will be fired before catalog rule gets updated.        | `$id`                     |
| promotions.catalog_rule.update.after               | This event will be fired after catalog rule gets updated.         | `$catalogRule`            |
| promotions.catalog_rule.delete.before              | This event will be fired before catalog rule gets deleted.        | `$id`                     |
| promotions.catalog_rule.delete.after               | This event will be fired after catalog rule gets deleted.         | `$id`                     |
| sales.order.comment.create.before                  | This event will be fired before order comment gets created.       | -                         |
| sales.order.comment.create.after                   | This event will be fired after order comment gets created.        | `$comment`                |
| core.channel.create.before                         | This event will be fired before channel gets created.             | -                         |
| core.channel.create.after                          | This event will be fired after channel gets created.              | `$channel`                |
| core.channel.update.before                         | This event will be fired before channel gets updated.             | `$id`                     |
| core.channel.update.after                          | This event will be fired after channel gets updated.              | `$channel`                |
| core.channel.delete.before                         | This event will be fired before channel gets deleted.             | `$id`                     |
| core.channel.delete.after                          | This event will be fired after channel gets deleted.              | `$id`                     |
| core.exchange_rate.create.before                   | This event will be fired before exchange rate gets created.       | -                         |
| core.exchange_rate.create.after                    | This event will be fired after exchange rate gets created.        |
| core.exchange_rate.update.before                   | This event will be fired before exchange rate gets updated.       | `request()->id`           |
| core.exchange_rate.update.after                    | This event will be fired after exchange rate gets updated.        | `$exchangeRate`           |
| core.exchange_rate.delete.before                   | This event will be fired before exchange rate gets deleted.       | `$id`                     |
| core.exchange_rate.delete.after                    | This event will be fired after exchange rate gets deleted.        | `$id`                     |
| inventory.inventory_source.create.before           | This event will be fired before inventory source gets created.    | -                         |
| inventory.inventory_source.create.after            | This event will be fired after inventory source gets created.     | `$inventorySource`        |
| inventory.inventory_source.update.before           | This event will be fired before inventory source gets updated.    | `$id`                     |
| inventory.inventory_source.update.after            | This event will be fired after inventory source gets updated.     | `$inventorySource`        |
| inventory.inventory_source.delete.before           | This event will be fired before inventory source gets deleted.    | `$id`                     |
| inventory.inventory_source.delete.after            | This event will be fired after inventory source gets deleted.     | `$id`                     |
| user.role.create.before                            | This event will be fired before role gets created.                | -                         |
| user.role.create.after                             | This event will be fired after role gets created.                 | `$role`                   |
| user.role.update.before                            | This event will be fired before role gets updated.                | `$id`                     |
| user.role.update.after                             | This event will be fired after role gets updated.                 | `$role`                   |
| user.role.delete.before                            | This event will be fired before role gets deleted.                | `$id`                     |
| user.role.delete.after                             | This event will be fired after role gets deleted.                 | `$id`                     |
| theme_customization.create.before                  | This event will be fired before theme customization gets created. | -                         |
| theme_customization.create.after                   | This event will be fired after theme customization gets created.  | `$id`                     |
| theme_customization.update.before                  | This event will be fired before theme customization gets updated. | `$id`                     |
| theme_customization.update.after                   | This event will be fired after theme customization gets updated.  | `$theme`                  |
| theme_customization.delete.before                  | This event will be fired before theme customization gets deleted. | `$id`                     |
| theme_customization.delete.after                   | This event will be fired after theme customization gets deleted.  | `$id`                     |
| user.admin.create.before                           | This event will be fired before admin gets created.               | -                         |
| user.admin.create.after                            | This event will be fired after admin gets created.                | `$admin`                  |
| user.admin.update.before                           | This event will be fired before admin gets updated.               | `$id`                     |
| user.admin.update.after                            | This event will be fired after admin gets updated.                | `$admin`                  |
| admin.password.update.after                        | This event will be fired after admin password gets updated.       | `$admin`                  |
| user.admin.delete.before                           | This event will be fired before admin gets deleted.               | `$id`                     |
| user.admin.delete.after                            | This event will be fired after admin gets deleted.                | `$id`                     |
| tax.category.create.before                         | This event will be fired before tax category gets created.        | -                         |
| tax.category.create.after                          | This event will be fired after tax category gets created.         | `$taxCategory`            |
| tax.category.update.before                         | This event will be fired before tax category gets updated.        | `$id`                     |
| tax.category.update.after                          | This event will be fired after tax category gets updated.         | `$taxCategory`            |
| tax.category.delete.before                         | This event will be fired before tax category gets deleted.        | `$id`                     |
| tax.category.delete.after                          | This event will be fired after tax category gets deleted.         | `$id`                     |
| tax.rate.create.before                             | This event will be fired before tax rate gets created.            | -                         |
| tax.rate.create.after                              | This event will be fired after tax rate gets created.             | `$taxRate`                |
| tax.rate.update.before                             | This event will be fired before tax rate gets updated.            | `$id`                     |
| tax.rate.update.after                              | This event will be fired after tax rate gets updated.             | `$taxRate`                |
| tax.rate.delete.before                             | This event will be fired before tax rate gets deleted.            | `$id`                     |
| tax.rate.delete.after                              | This event will be fired after tax rate gets deleted.             | `$id`                     |
| checkout.cart.delete.before                        | This event will be fired before cart item gets deleted.           | `$itemId`                 |
| checkout.cart.delete.after                         | This event will be fired after cart item gets deleted.            | `$itemId`                 |
| checkout.cart.add.before                           | This event will be fired before cart item gets created.           | `$product->id`            |
| checkout.cart.add.after                            | This event will be fired after cart item gets created.            | `$this->cart`             |
| checkout.cart.update.before                        | This event will be fired before cart item gets updated.           | `$item`                   |
| checkout.cart.update.after                         | This event will be fired after cart item gets updated.            | `$item`                   |
| checkout.cart.collect.totals.before                | This event will be fired before collecting cart totals.           | `$this->cart`             |
| checkout.cart.collect.totals.after                 | This event will be fired after collecting cart totals.            | `$this->cart`             |
| checkout.cart.calculate.items.tax.before           | This event will be fired before calculating cart items tax.       | `$this->cart`             |
| checkout.cart.calculate.items.tax.after            | This event will be fired after calculating cart items tax.        | `$this->cart`             |
| core.configuration.save.before                     | This event will be fired before core configuration gets saved.    | -                         |
| core.configuration.save.after                      | This event will be fired after core configuration gets saved.     | -                         |
| core.currency.create.before                        | This event will be fired before currency gets created.            | -                         |
| core.currency.create.after                         | This event will be fired after currency gets created.             | `$currency`               |
| core.currency.update.before                        | This event will be fired before currency gets updated.            | `$id`                     |
| core.currency.update.after                         | This event will be fired after currency gets updated.             | `$currency`               |
| core.currency.delete.before                        | This event will be fired before currency gets deleted.            | `$id`                     |
| core.currency.delete.after                         | This event will be fired after currency gets deleted.             | `$id`                     |
| core.locale.create.before                          | This event will be fired before locale gets created.              | -                         |
| core.locale.create.after                           | This event will be fired after locale gets created.               | `$locale`                 |
| core.locale.update.before                          | This event will be fired before locale gets updated.              | `$id`                     |
| core.locale.update.after                           | This event will be fired after locale gets updated.               | `$locale`                 |
| core.locale.delete.before                          | This event will be fired before locale gets deleted.              | `$id`                     |
| core.locale.delete.after                           | This event will be fired after locale gets deleted.               | `$id`                     |
| sales.invoice.save.before                          | This event will be fired before invoice gets saved.               | `$data`                   |
| sales.invoice.save.after                           | This event will be fired after invoice gets saved.                | `$invoice`                |
| checkout.order.save.before                         | This event will be fired before order gets saved.                 | `[$data]`                 |
| checkout.order.save.after                          | This event will be fired after order gets saved.                  | `$order`                  |
| checkout.order.orderitem.save.before               | This event will be fired before order item gets saved.            | `$item`                   |
| checkout.order.orderitem.save.after                | This event will be fired after order item gets saved.             | `$orderItem`              |
| sales.order.cancel.before                          | This event will be fired before order gets canceled.              | `$order`                  |
| sales.order.cancel.after                           | This event will be fired after order gets canceled.               | `$order`                  |
| sales.order.update-status.before                   | This event will be fired before order status gets updated.        | `$order`                  |
| sales.order.update-status.after                    | This event will be fired after order status gets updated.         | `$order`                  |
| sales.refund.save.before                           | This event will be fired before order refund gets saved.          | `$data`                   |
| sales.refund.save.after                            | This event will be fired after order refund gets saved.           | `$refund`                 |
| sales.shipment.save.before                         | This event will be fired before shipment gets saved.              | `$data`                   |
| sales.shipment.save.after                          | This event will be fired after shipment gets saved.               | `$shipment`               |
| checkout.load.index                                | This event will be fired on checkout page load.                   | -                         |

## Events Listen in Bagisto

- Event listen in bagisto is given below with their functionality.

  | Events name                                       | functionality                                                            |
  | ------------------------------------------------- | ------------------------------------------------------------------------ |
  | bagisto.shop.layout.body.after                    | Listing this event to load css of shop layout.                           |
  | bagisto.admin.layout.head                         | Listing this event to load css of admin layout.                          |
  | checkout.order.save.after                         | Listing this event to send notification of new order.                    |
  | sales.order.update-status.after                   | Listing this event to send notification of when order status is changed. |
  | sales.invoice.save.after                          | Listing this event to add paypal smart button.                           |
  | bagisto.shop.customers.login_form_controls.before | Listing this event to add social login buttons.                          |
  | bagisto.shop.products.view.compare.after          | Listing this event to add social share buttons.                          |

## Listening to Existing Events

Bagisto uses events and listeners to implement the observer pattern, allowing you to respond to various actions and events within the application. You can listen to specific events and execute custom code when those events are triggered.

### Registering a Listener

Open the `EventServiceProvider.php` file located in the `Providers` directory of your Bagisto application. This file is where you register event listeners.

Inside the `boot()` method of `EventServiceProvider.php`, use the `Event::listen` method to register your listener. This method takes the event name and a callback function or a class method that will handle the event.

```php
Event::listen('checkout.order.save.after', 'Webkul\Notification\Listeners\Order@createOrder');
```

In the example above, we are listening to the `checkout.order.save.after` event and specifying the `createOrder` function from the `Order` listener class in the `Webkul\Notification\Listeners` namespace.

Replace `'checkout.order.save.after'` with the specific event you want to listen to. In this example, it listens to the event triggered after saving an order during checkout.

By registering the listener, you have associated the **`createOrder`** function with the **`checkout.order.save.after`** event. Whenever this event is triggered, the specified function will be executed.

You can modify the listener function according to your requirements to perform the desired operation.

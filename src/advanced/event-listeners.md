# Event Listeners

Event Listeners in Bagisto provide a powerful way to extend and customize the platform's functionality without modifying core code. Bagisto uses Laravel's event system with string-based event dispatching, making it simple to hook into various points in the application lifecycle.

This advanced guide covers how to implement comprehensive event-driven architecture in your Bagisto applications, including listening to core events, creating custom events, and building reactive systems.

## What You'll Learn

- [Understanding Bagisto's Event System](#understanding-bagisto-s-event-system)
- [Dispatching Custom Events](#dispatching-events)  
- [Creating Event Listeners](#creating-event-listeners)
- [Advanced Event Patterns](#advanced-event-patterns)
- [Best Practices](#best-practices)
- [Available Events Reference](#available-bagisto-events)

## Understanding Bagisto's Event System

Bagisto dispatches events throughout its operations using string identifiers. This approach allows for:

- **Loose Coupling**: Components can communicate without direct dependencies
- **Extensibility**: Third-party packages can hook into core functionality
- **Maintainability**: Changes can be made without affecting existing code
- **Scalability**: Event-driven architecture supports complex business logic

## Dispatching Events

Events are dispatched using `Event::dispatch()` with string identifiers:

```php{13,19}
<?php

namespace Webkul\RMA\Http\Controllers;

use Illuminate\Support\Facades\Event;
use Webkul\Admin\Http\Controllers\Controller;

class RMAController extends Controller
{
    public function processReturnRequest()
    {
        // Dispatch before event
        Event::dispatch('rma.return.request.before', request()->all());

        // Perform main operation - create return request
        $returnRequest = $this->createReturnRequest();

        // Dispatch after event with result
        Event::dispatch('rma.return.request.created', $returnRequest);

        return response()->json(['status' => 'success', 'data' => $returnRequest]);
    }
}
```

### Event Naming Convention

Follow Bagisto's hierarchical naming convention for consistency:

| Event Type | Pattern | Example | Use Case |
|------------|---------|---------|-----------|
| **Core Events** | `{module}.{entity}.{action}.{timing}` | `catalog.product.create.after` | Built-in Bagisto operations |
| **Package Events** | `{package}.{feature}.{action}.{timing}` | `rma.return.request.created` | Custom package functionality |
| **Integration Events** | `{system}.{integration}.{action}.{status}` | `payment.paypal.transaction.failed` | Third-party integrations |

**Event Naming Best Practices:**

```php
// ✅ Good - Clear and descriptive
Event::dispatch('rma.return.request.created', $returnRequest);
Event::dispatch('rma.return.item.approved', $returnItem);
Event::dispatch('rma.refund.processed', $refund);

// ❌ Avoid - Vague or inconsistent
Event::dispatch('rma.something.happened', $data);
Event::dispatch('return_created', $return);
```

## Creating Event Listeners

To create an event listener in Bagisto, you need to define a listener class with a method that will handle the event. This method receives the event data as its argument. You can then register this listener to respond to specific events, allowing you to execute custom logic whenever those events are fired.

Let's say you are having a package like **RMA (Return Merchandise Authorization)** or some other name - let's use RMA for this practical example. This RMA package would listen to order events to manage returns effectively.

::: tip Package Development Reference
If you want to build a package, check out our [Package Development Guide](/package-development/getting-started) where we have shown how to build an RMA package step by step. This guide covers the basics of creating packages, service providers, and directory structure before implementing event listeners.
:::

### Basic Event Listener

In an RMA package, you would have an event listener to handle order events:

```php{9-16,18-24}
<?php

namespace Webkul\RMA\Listeners;

use Illuminate\Support\Facades\Log;

class RMAOrderListener
{
    public function handleOrderCreated($order): void
    {
        // Create RMA eligibility record for the order
        Log::info('Order created - checking RMA eligibility', ['order_id' => $order->id]);
        
        // Check if order items are eligible for returns
        $this->createRMAEligibilityForOrder($order);
    }

    public function handleOrderStatusUpdate($order): void
    {
        // Update RMA status based on order status changes
        if ($order->status === 'delivered') {
            $this->activateReturnWindow($order);
        }
    }

    private function createRMAEligibilityForOrder($order): void
    {
        // Implementation logic for RMA eligibility
    }

    private function activateReturnWindow($order): void
    {
        // Start 30-day return window
    }
}
```

::: details Method Explanations
- **`handleOrderCreated()`**: Creates RMA eligibility records when new orders are placed
- **`handleOrderStatusUpdate()`**: Manages RMA status changes based on order status
- **`createRMAEligibilityForOrder()`**: Business logic for determining return eligibility
- **`activateReturnWindow()`**: Starts the countdown for return requests
:::

### Event Service Provider

In your RMA package, you would register the listeners in the `EventServiceProvider`:

```php{15-24}
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Webkul\RMA\Listeners\RMAOrderListener;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the application.
     *
     * @var array<string, array<int, array<int, string>>>
     */
    protected $listen = [
        // Listen to core Bagisto order events
        'checkout.order.save.after' => [
            [RMAOrderListener::class, 'handleOrderCreated'],
        ],

        'sales.order.update-status.after' => [
            [RMAOrderListener::class, 'handleOrderStatusUpdate'],
        ],
    ];
}
```

::: info Modern Event Registration
The `[ClassName::class, 'method']` syntax is the modern Laravel approach for registering event listeners. This provides better IDE support and refactoring capabilities compared to string-based registration.
:::

::: tip RMA Package Registration
Your package may not have an `EventServiceProvider` initially. If so, you would need to register the `EventServiceProvider` in the package's main service provider:

```php
// In Webkul\RMA\Providers\RMAServiceProvider
public function register(): void
{
    $this->app->register(EventServiceProvider::class);
}
```

This ensures all your RMA event listeners are properly loaded when the package is installed.
:::

## Advanced Event Patterns

Advanced event patterns in Bagisto allow you to build more flexible and modular systems. You can chain events, trigger custom events from listeners, and even use queued listeners for asynchronous processing. This enables you to decouple business logic, improve maintainability, and handle complex workflows such as notifications, analytics, or integrations with external services.

### Multiple Listeners for Single Event

You can register multiple listeners for the same event to separate concerns:

```php{4-6}
protected $listen = [
    'checkout.order.save.after' => [
        [RMAOrderListener::class, 'handleOrderCreated'],
        [NotificationListener::class, 'sendOrderConfirmation'],
        [InventoryListener::class, 'updateStockLevels'],
        [AnalyticsListener::class, 'trackOrderMetrics'],
    ],
];
```

### Event Priority and Ordering

Listeners execute in the order they're registered. Place critical listeners first:

```php{3-6}
protected $listen = [
    'sales.order.update-status.after' => [
        // Critical: Update RMA status first
        [RMAStatusListener::class, 'updateReturnEligibility'],
        // Secondary: Send notifications
        [NotificationListener::class, 'notifyCustomer'],
    ],
];
```

## Practical Example: Complete RMA Integration

Here's a complete example showing how to integrate RMA functionality using event listeners:

::: code-group

```php [RMAOrderListener.php]
<?php

namespace Webkul\RMA\Listeners;

use Webkul\RMA\Services\RMAService;
use Illuminate\Support\Facades\Log;

class RMAOrderListener
{
    public function __construct(
        private RMAService $rmaService
    ) {}

    public function handleOrderCreated($order): void
    {
        try {
            $this->rmaService->createEligibilityRecords($order);
            
            Log::info('RMA eligibility created for order', [
                'order_id' => $order->id,
                'customer_id' => $order->customer_id
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to create RMA eligibility', [
                'order_id' => $order->id,
                'error' => $e->getMessage()
            ]);
        }
    }

    public function handleOrderDelivered($order): void
    {
        $this->rmaService->activateReturnWindow($order);
        
        // Dispatch custom RMA event
        event('rma.return.window.activated', $order);
    }
}
```

```php [EventServiceProvider.php]
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Webkul\RMA\Listeners\RMAOrderListener;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        // Core Bagisto events
        'checkout.order.save.after' => [
            [RMAOrderListener::class, 'handleOrderCreated'],
        ],
        
        'sales.order.update-status.after' => [
            [RMAOrderListener::class, 'handleOrderDelivered'],
        ],
        
        // Custom RMA events
        'rma.return.window.activated' => [
            [RMANotificationListener::class, 'sendReturnEligibilityEmail'],
        ],
    ];
}
```

:::

## Best Practices

By following best practices, you can ensure your event-driven code is robust, easy to extend, and integrates smoothly with both core and custom features.

### Performance Considerations

Keep these performance guidelines in mind when implementing event listeners:

- **Keep listeners lightweight**: Avoid heavy computations in event listeners
- **Use queues for heavy operations**: Dispatch time-consuming tasks to background queues
- **Handle exceptions gracefully**: Wrap listener logic in try-catch blocks
- **Log important events**: Use structured logging for debugging and monitoring

### Event Naming Guidelines

Follow these naming conventions for consistent and maintainable event-driven architecture:

- Use consistent hierarchical patterns (`module.entity.action.timing`)
- Fire both `before` and `after` events for major operations
- Include descriptive action names (`created`, `updated`, `deleted`)

### Data Handling Best Practices

Ensure robust data management in your event listeners:

- Validate event data before processing
- Pass relevant context in event payloads
- Avoid circular event dependencies

### Error Handling Strategies

Implement comprehensive error handling to maintain system stability:

- Implement proper exception handling in listeners
- Log errors with sufficient context for debugging
- Consider fallback mechanisms for critical operations

**Example Error Handling:**

```php{5-14}
public function handleOrderCreated($order): void
{
    try {
        $this->createRMAEligibilityForOrder($order);
    } catch (\Exception $e) {
        Log::error('Failed to create RMA eligibility', [
            'order_id' => $order->id,
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
        
        // Don't break the order creation process
        // Consider alternative handling or notification
    }
}
```

## Available Bagisto Events

The following table lists the core events available in Bagisto that you can listen to:

| Events Name                                          | Functionality                                                     | Arguments                 |
| ---------------------------------------------------- | ----------------------------------------------------------------- | ------------------------- |
| `catalog.attribute.create.before`                    | This event will be fired before attribute gets created.           | -                         |
| `catalog.attribute.create.after`                     | This event will be fired after attribute gets created.            | `attribute`               |
| `catalog.attribute.update.before`                    | This event will be fired before attribute gets updated.           | -                         |
| `catalog.attribute.update.after`                     | This event will be fired after attribute gets updated.            | `$attribute`              |
| `catalog.attribute.delete.before`                    | This event will be fired before attribute gets deleted.           | `$id`                     |
| `catalog.attribute.delete.after`                     | This event will be fired after attribute gets deleted.            | `$id`                     |
| `catalog.attribute_family.create.before`             | This event will be fired before attribute family gets created.    | -                         |
| `catalog.attribute_family.create.after`              | This event will be fired after attribute family gets created.     | `attribute_family`        |
| `catalog.attribute_family.update.before`             | This event will be fired before updating attribute family.        | `$id`                     |
| `catalog.attribute_family.update.after`              | This event will be fired after updating attribute family.         | `$attributeFamily`        |
| `catalog.attribute_family.delete.before`             | This event will be fired before deleting attribute family.        | `$id`                     |
| `catalog.attribute_family.delete.after`              | This event will be fired after deleting attribute family.         | `$id`                     |
| `catalog.category.create.before`                     | This event will be fired before creating category.                | -                         |
| `catalog.category.create.after`                      | This event will be fired after creating category.                 | `$category`               |
| `catalog.category.update.before`                     | This event will be fired before updating category.                | `$id`                     |
| `catalog.category.update.after`                      | This event will be fired after updating category.                 | `$category`               |
| `catalog.category.delete.before`                     | This event will be fired before deleting category.                | `$id`                     |
| `catalog.category.delete.after`                      | This event will be fired after deleting category.                 | `$id`                     |
| `catalog.categories.mass-update.before`              | This event will be fired before bulk category update.             | `$categoryId`             |
| `catalog.categories.mass-update.after`               | This event will be fired after bulk category update.              | `$category`               |
| `catalog.product.create.before`                      | This event will be fired before product gets created.             | -                         |
| `catalog.product.create.after`                       | This event will be fired after product gets created.              | `$product`                |
| `catalog.product.update.before`                      | This event will be fired before product gets updated.             | `$id`                     |
| `catalog.product.update.after`                       | This event will be fired after product gets updated.              | `$product`                |
| `catalog.product.delete.before`                      | This event will be fired before product gets deleted.             | `$id`                     |
| `catalog.product.delete.after`                       | This event will be fired after product gets deleted.              | `$id`                     |
| `products.datagrid.sync`                             | This event will be fired to synicing datagrid product.            | `true`                    |
| `cms.page.create.before`                             | This event will be fired before cms page gets created.            | -                         |
| `cms.page.create.after`                              | This event will be fired after cms page gets created.             | `$page`                   |
| `cms.page.update.before`                             | This event will be fired before cms page gets updated.            | `$id`                     |
| `cms.page.update.after`                              | This event will be fired after cms page gets updated.             | `$page`                   |
| `cms.page.delete.before`                             | This event will be fired before cms page gets deleted.            | `$id`                     |
| `cms.page.delete.after`                              | This event will be fired after cms page gets deleted.             | `id`                      |
| `customer.addresses.create.before`                   | This event will be fired before customer address gets created.    | -                         |
| `customer.addresses.create.after`                    | This event will be fired after customer address gets created.     | `$address`                |
| `customer.addresses.update.before`                   | This event will be fired before customer address gets updated.    | `$id`                     |
| `customer.addresses.update.after`                    | This event will be fired after customer address gets updated.     | `$address`                |
| `customer.addresses.delete.before`                   | This event will be fired before customer address gets deleted.    | `$id`                     |
| `customer.addresses.delete.after`                    | This event will be fired after customer address gets deleted.     | `$id`                     |
| `customer.registration.before`                       | This event will be fired before customer gets created.            | -                         |
| `customer.registration.after`                        | This event will be fired after customer gets created.             | -                         |
| `customer.update.before`                             | This event will be fired before customer gets updated.            | `$id`                     |
| `customer.update.after`                              | This event will be fired after customer gets updated.             | `$customer`               |
| `customer.password.update.after`                     | This event will be fired after customer password gets updated.    | `$customer`               |
| `customer.note.create.before`                        | This event will be fired before customer note gets created.       | `$id`                     |
| `customer.note.create.after`                         | This event will be fired after customer note gets created.        | `$customerNote`           |
| `customer.subscription.before`                       | This event will be fired before customer gets subscription.       | -                         |
| `customer.subscription.after`                        | This event will be fired after customer gets subscription.        | `$subscription`           |
| `customer.after.login`                               | This event will be fired after customer login.                    | `auth()->guard()->user()` |
| `customer.delete.before`                             | This event will be fired before customer gets deleted.            | `$customer`               |
| `customer.delete.after`                              | This event will be fired after customer gets deleted.             | `$customer`               |
| `customer.customer_group.create.before`              | This event will be fired before customer group gets created.      | -                         |
| `customer.customer_group.create.after`               | This event will be fired after customer group gets created.       | `$customerGroup`          |
| `customer.customer_group.update.before`              | This event will be fired before customer group gets updated.      | `$id`                     |
| `customer.customer_group.update.after`               | This event will be fired after customer group gets updated.       | `$customerGroup`          |
| `customer.customer_group.delete.before`              | This event will be fired before customer group gets deleted.      | `$id`                     |
| `customer.customer_group.delete.after`               | This event will be fired after customer group gets deleted.       | `$id`                     |
| `customer.review.update.before`                      | This event will be fired before customer review gets updated.     | `$id`                     |
| `customer.review.update.after`                       | This event will be fired after customer review gets updated.      | `$review`                 |
| `customer.review.delete.before`                      | This event will be fired before customer review gets deleted.     | `$id`                     |
| `customer.review.delete.after`                       | This event will be fired after customer review gets deleted.      | `$id`                     |
| `customer.account.gdpr-request.create.before`        | This event will be fired before gdpr request created.             | -                         |
| `customer.gdpr-request.create.after`                 | This event will be fired after gdpr request created.              | `$gdprRequest`            |
| `customer.account.gdpr-request.update.before`        | This event will be fired before gdpr request updated.             | -                         |
| `customer.account.gdpr-request.update.after`         | This event will be fired after gdpr request updated.              | `$gdprRequest`            | 
| `customer.gdpr-request.update.after`                 | This event will be fired after gdpr request updated.              | `$gdprRequest`            | 
| `customer.gdpr-request.update.before`                | This event will be fired after gdpr request updated.              | -                         | 
| `marketing.search_seo.sitemap.create.before`         | This event will be fired before sitemaps gets created.            | -                         |
| `marketing.search_seo.sitemap.create.after`          | This event will be fired after sitemaps gets created.             | `$sitemap`                |
| `marketing.search_seo.sitemap.update.before`         | This event will be fired before sitemaps gets updated.            | `$id`                     |
| `marketing.search_seo.sitemap.update.after`          | This event will be fired after sitemaps gets updated.             | `$sitemap`                |
| `marketing.search_seo.sitemap.delete.before`         | This event will be fired before sitemaps gets deleted.            | `$id`                     |
| `marketing.search_seo.sitemap.delete.after`          | This event will be fired after sitemaps gets deleted.             | `$id`                     |
| `marketing.search_seo.search_synonyms.create.before` | This event will be fired before search synonyms created           | -                         |
| `marketing.search_seo.search_synonyms.create.after`  | This event will be fired after search synonyms created            | `$searchSynonym`          |
| `marketing.search_seo.search_synonyms.update.before` | This event will be fired before synonyms gets updated.            | `$id`                     |
| `marketing.search_seo.search_synonyms.update.after`  | This event will be fired after synonyms gets updated.             | `$searchSynonym`          |
| `marketing.search_seo.search_synonyms.delete.before` | This event will be fired before synonyms gets deleted.            | `$id`                     |
| `marketing.search_seo.search_synonyms.delete.after`  | This event will be fired before synonyms gets deleted.            | `$id`                     |
| `marketing.search_seo.search_terms.create.before`    | This event will be fired before search search terms created       | -                         |
| `marketing.search_seo.search_terms.create.after`     | This event will be fired after search search terms created        | `$searchTerm`             |
| `marketing.search_seo.search_terms.update.before`    | This event will be fired before search search terms updated       | `$id`                     |
| `marketing.search_seo.search_terms.update.after`     | This event will be fired after search search terms updated        | `$searchTerm`             |
| `marketing.search_seo.search_terms.delete.before`    | This event will be fired before search search terms gets deleted  | `$id`                     |
| `marketing.search_seo.search_terms.delete.after`     | This event will be fired after search search terms gets deleted   | `$id`                     |
| `marketing.search_seo.url_rewrites.create.before`    | This event will be fired before search url rewrites gets created  | -                         |
| `marketing.search_seo.url_rewrites.create.after`     | This event will be fired after search url rewrites gets created   | `$urlRewrite`             |
| `marketing.search_seo.url_rewrites.update.before`    | This event will be fired before search url rewrites gets updated  | `$id`                     |
| `marketing.search_seo.url_rewrites.update.after`     | This event will be fired after search url rewrites gets updated   | `$urlRewrite`             |
| `marketing.search_seo.url_rewrites.delete.before`    | This event will be fired before search url rewrites gets deleted  | `$id`                     |
| `marketing.search_seo.url_rewrites.delete.after`     | This event will be fired after search url rewrites gets deleted   | `$id`                     |
| `marketing.campaigns.create.before`                  | This event will be fired before campaigns gets created.           | -                         |
| `marketing.campaigns.create.after`                   | This event will be fired after campaigns gets created.            | `$campaign`               |
| `marketing.campaigns.update.before`                  | This event will be fired before campaigns gets updated.           | `$id`                     |
| `marketing.campaigns.update.after`                   | This event will be fired after campaigns gets updated.            | `$campaign`               |
| `marketing.campaigns.delete.before`                  | This event will be fired before campaigns gets deleted.           | `$id`                     |
| `marketing.campaigns.delete.after`                   | This event will be fired after campaigns gets deleted.            | `$id`                     |
| `marketing.events.create.before`                     | This event will be fired before marketing event gets created.     | -                         |
| `marketing.events.create.after`                      | This event will be fired after marketing event gets created.      | `$event`                  |
| `marketing.events.update.before`                     | This event will be fired before marketing event gets updated.     | `$id`                     |
| `marketing.events.update.after`                      | This event will be fired after marketing event gets updated.      | `$event`                  |
| `marketing.events.delete.before`                     | This event will be fired before marketing event gets deleted.     | `$id`                     |
| `marketing.events.delete.after`                      | This event will be fired after marketing event gets deleted.      | `$id`                     |
| `marketing.templates.create.before`                  | This event will be fired before templates gets created.           | -                         |
| `marketing.templates.create.after`                   | This event will be fired after templates gets created.            | ` $template`              |
| `marketing.templates.update.before`                  | This event will be fired before templates gets updated.           | `$id`                     |
| `marketing.templates.update.after`                   | This event will be fired after templates gets updated.            | `$template`               |
| `marketing.templates.delete.before`                  | This event will be fired before templates gets deleted.           | `$id`                     |
| `marketing.templates.delete.after`                   | This event will be fired after templates gets deleted.            | `$id`                     |
| `promotions.cart_rule.create.before`                 | This event will be fired before cart rule gets created.           | -                         |
| `promotions.cart_rule.create.after`                  | This event will be fired after cart rule gets created.            | `$cartRule`               |
| `promotions.cart_rule.update.before`                 | This event will be fired before cart rule gets updated.           | `$id`                     |
| `promotions.cart_rule.update.after`                  | This event will be fired after cart rule gets updated.            | `$cartRule`               |
| `promotions.cart_rule.delete.before`                 | This event will be fired before cart rule gets deleted.           | `$id`                     |
| `promotions.cart_rule.delete.after`                  | This event will be fired after cart rule gets deleted.            | `$id`                     |
| `promotions.catalog_rule.create.before`              | This event will be fired before catalog rule gets created.        | -                         |
| `promotions.catalog_rule.create.after`               | This event will be fired after catalog rule gets created.         | `$catalogRule`            |
| `promotions.catalog_rule.update.before`              | This event will be fired before catalog rule gets updated.        | `$id`                     |
| `promotions.catalog_rule.update.after`               | This event will be fired after catalog rule gets updated.         | `$catalogRule`            |
| `promotions.catalog_rule.delete.before`              | This event will be fired before catalog rule gets deleted.        | `$id`                     |
| `promotions.catalog_rule.delete.after`               | This event will be fired after catalog rule gets deleted.         | `$id`                     |
| `sales.order.comment.create.before`                  | This event will be fired before order comment gets created.       | -                         |
| `sales.order.comment.create.after`                   | This event will be fired after order comment gets created.        | `$comment`                |
| `core.channel.create.before`                         | This event will be fired before channel gets created.             | -                         |
| `core.channel.create.after`                          | This event will be fired after channel gets created.              | `$channel`                |
| `core.channel.update.before`                         | This event will be fired before channel gets updated.             | `$id`                     |
| `core.channel.update.after`                          | This event will be fired after channel gets updated.              | `$channel`                |
| `core.channel.delete.before`                         | This event will be fired before channel gets deleted.             | `$id`                     |
| `core.channel.delete.after`                          | This event will be fired after channel gets deleted.              | `$id`                     |
| `core.exchange_rate.create.before`                   | This event will be fired before exchange rate gets created.       | -                         |
| `core.exchange_rate.create.after`                    | This event will be fired after exchange rate gets created.        |                           |
| `core.exchange_rate.update.before`                   | This event will be fired before exchange rate gets updated.       | `request()->id`           |
| `core.exchange_rate.update.after`                    | This event will be fired after exchange rate gets updated.        | `$exchangeRate`           |
| `core.exchange_rate.delete.before`                   | This event will be fired before exchange rate gets deleted.       | `$id`                     |
| `core.exchange_rate.delete.after`                    | This event will be fired after exchange rate gets deleted.        | `$id`                     |
| `inventory.inventory_source.create.before`           | This event will be fired before inventory source gets created.    | -                         |
| `inventory.inventory_source.create.after`            | This event will be fired after inventory source gets created.     | `$inventorySource`        |
| `inventory.inventory_source.update.before`           | This event will be fired before inventory source gets updated.    | `$id`                     |
| `inventory.inventory_source.update.after`            | This event will be fired after inventory source gets updated.     | `$inventorySource`        |
| `inventory.inventory_source.delete.before`           | This event will be fired before inventory source gets deleted.    | `$id`                     |
| `inventory.inventory_source.delete.after`            | This event will be fired after inventory source gets deleted.     | `$id`                     |
| `user.role.create.before`                            | This event will be fired before role gets created.                | -                         |
| `user.role.create.after`                             | This event will be fired after role gets created.                 | `$role`                   |
| `user.role.update.before`                            | This event will be fired before role gets updated.                | `$id`                     |
| `user.role.update.after`                             | This event will be fired after role gets updated.                 | `$role`                   |
| `user.role.delete.before`                            | This event will be fired before role gets deleted.                | `$id`                     |
| `user.role.delete.after`                             | This event will be fired after role gets deleted.                 | `$id`                     |
| `theme_customization.create.before`                  | This event will be fired before theme customization gets created. | -                         |
| `theme_customization.create.after`                   | This event will be fired after theme customization gets created.  | `$id`                     |
| `theme_customization.update.before`                  | This event will be fired before theme customization gets updated. | `$id`                     |
| `theme_customization.update.after`                   | This event will be fired after theme customization gets updated.  | `$theme`                  |
| `theme_customization.delete.before`                  | This event will be fired before theme customization gets deleted. | `$id`                     |
| `theme_customization.delete.after`                   | This event will be fired after theme customization gets deleted.  | `$id`                     |
| `user.admin.create.before`                           | This event will be fired before admin gets created.               | -                         |
| `user.admin.create.after`                            | This event will be fired after admin gets created.                | `$admin`                  |
| `user.admin.update.before`                           | This event will be fired before admin gets updated.               | `$id`                     |
| `user.admin.update.after`                            | This event will be fired after admin gets updated.                | `$admin`                  |
| `admin.password.update.after`                        | This event will be fired after admin password gets updated.       | `$admin`                  |
| `user.admin.delete.before`                           | This event will be fired before admin gets deleted.               | `$id`                     |
| `user.admin.delete.after`                            | This event will be fired after admin gets deleted.                | `$id`                     |
| `tax.category.create.before`                         | This event will be fired before tax category gets created.        | -                         |
| `tax.category.create.after`                          | This event will be fired after tax category gets created.         | `$taxCategory`            |
| `tax.category.update.before`                         | This event will be fired before tax category gets updated.        | `$id`                     |
| `tax.category.update.after`                          | This event will be fired after tax category gets updated.         | `$taxCategory`            |
| `tax.category.delete.before`                         | This event will be fired before tax category gets deleted.        | `$id`                     |
| `tax.category.delete.after`                          | This event will be fired after tax category gets deleted.         | `$id`                     |
| `tax.rate.create.before`                             | This event will be fired before tax rate gets created.            | -                         |
| `tax.rate.create.after`                              | This event will be fired after tax rate gets created.             | `$taxRate`                |
| `tax.rate.update.before`                             | This event will be fired before tax rate gets updated.            | `$id`                     |
| `tax.rate.update.after`                              | This event will be fired after tax rate gets updated.             | `$taxRate`                |
| `tax.rate.delete.before`                             | This event will be fired before tax rate gets deleted.            | `$id`                     |
| `tax.rate.delete.after`                              | This event will be fired after tax rate gets deleted.             | `$id`                     |
| `checkout.cart.delete.before`                        | This event will be fired before cart item gets deleted.           | `$itemId`                 |
| `checkout.cart.delete.after`                         | This event will be fired after cart item gets deleted.            | `$itemId`                 |
| `checkout.cart.add.before`                           | This event will be fired before cart item gets created.           | `$product->id`            |
| `checkout.cart.add.after`                            | This event will be fired after cart item gets created.            | `$this->cart`             |
| `checkout.cart.update.before`                        | This event will be fired before cart item gets updated.           | `$item`                   |
| `checkout.cart.update.after`                         | This event will be fired after cart item gets updated.            | `$item`                   |
| `checkout.cart.collect.totals.before`                | This event will be fired before collecting cart totals.           | `$this->cart`             |
| `checkout.cart.collect.totals.after`                 | This event will be fired after collecting cart totals.            | `$this->cart`             |
| `checkout.cart.calculate.items.tax.before`           | This event will be fired before calculating cart items tax.       | `$this->cart`             |
| `checkout.cart.calculate.items.tax.after`            | This event will be fired after calculating cart items tax.        | `$this->cart`             |
| `core.configuration.save.before`                     | This event will be fired before core configuration gets saved.    | -                         |
| `core.configuration.save.after`                      | This event will be fired after core configuration gets saved.     | -                         |
| `core.currency.create.before`                        | This event will be fired before currency gets created.            | -                         |
| `core.currency.create.after`                         | This event will be fired after currency gets created.             | `$currency`               |
| `core.currency.update.before`                        | This event will be fired before currency gets updated.            | `$id`                     |
| `core.currency.update.after`                         | This event will be fired after currency gets updated.             | `$currency`               |
| `core.currency.delete.before`                        | This event will be fired before currency gets deleted.            | `$id`                     |
| `core.currency.delete.after`                         | This event will be fired after currency gets deleted.             | `$id`                     |
| `core.locale.create.before`                          | This event will be fired before locale gets created.              | -                         |
| `core.locale.create.after`                           | This event will be fired after locale gets created.               | `$locale`                 |
| `core.locale.update.before`                          | This event will be fired before locale gets updated.              | `$id`                     |
| `core.locale.update.after`                           | This event will be fired after locale gets updated.               | `$locale`                 |
| `core.locale.delete.before`                          | This event will be fired before locale gets deleted.              | `$id`                     |
| `core.locale.delete.after`                           | This event will be fired after locale gets deleted.               | `$id`                     |
| `sales.invoice.save.before`                          | This event will be fired before invoice gets saved.               | `$data`                   |
| `sales.invoice.save.after`                           | This event will be fired after invoice gets saved.                | `$invoice`                |
| `checkout.order.save.before`                         | This event will be fired before order gets saved.                 | `[$data]`                 |
| `checkout.order.save.after`                          | This event will be fired after order gets saved.                  | `$order`                  |
| `checkout.order.orderitem.save.before`               | This event will be fired before order item gets saved.            | `$item`                   |
| `checkout.order.orderitem.save.after`                | This event will be fired after order item gets saved.             | `$orderItem`              |
| `sales.order.cancel.before`                          | This event will be fired before order gets canceled.              | `$order`                  |
| `sales.order.cancel.after`                           | This event will be fired after order gets canceled.               | `$order`                  |
| `sales.order.update-status.before`                   | This event will be fired before order status gets updated.        | `$order`                  |
| `sales.order.update-status.after`                    | This event will be fired after order status gets updated.         | `$order`                  |
| `sales.refund.save.before`                           | This event will be fired before order refund gets saved.          | `$data`                   |
| `sales.refund.save.after`                            | This event will be fired after order refund gets saved.           | `$refund`                 |
| `sales.shipment.save.before`                         | This event will be fired before shipment gets saved.              | `$data`                   |
| `sales.shipment.save.after`                          | This event will be fired after shipment gets saved.               | `$shipment`               |
| `checkout.load.index`                                | This event will be fired on checkout page load.                   | -                         |

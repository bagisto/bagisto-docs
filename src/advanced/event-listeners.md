# Event Listeners

Bagisto announces what happens in the store with **string events**: dot-delimited names such as `catalog.product.update.after`, fired with Laravel's `Event::dispatch()`, mostly in `before` and `after` pairs around a create, update, delete or save. A package reacts to them from its own event service provider, so it never edits a core controller or repository. This page shows how to register a listener, then lists [every event core dispatches](#available-events) with what a listener receives; events fired from Blade views are on [View Render Events](./view-render-events.md).

**On this page**

- **Registering:** [Register a Listener](#register-a-listener), [Firing Events from Your Package](#firing-events-from-your-package)
- **Event groups:** [Catalog](#catalog), [Customers](#customers), [GDPR Requests](#gdpr-requests), [Cart and Checkout](#cart-and-checkout), [Sales](#sales), [Returns (RMA)](#returns-rma), [Promotions](#promotions), [Marketing and SEO](#marketing-and-seo), [CMS](#cms), [Settings](#settings), [Appearance](#appearance), [DataGrid Saved Filters](#datagrid-saved-filters), [Data Transfer](#data-transfer), [Booking Products](#booking-products), [Installer](#installer)

## Register a Listener

Core fires a pair of events around each write, as `CategoryController::store()` in `packages/Webkul/Admin/src/Http/Controllers/Catalog/CategoryController.php` does:

```php
Event::dispatch('catalog.category.create.before');

$category = $this->categoryRepository->create($data);

Event::dispatch('catalog.category.create.after', $category);
```

A package maps event names to listener methods in an event service provider of its own, in the same shape as `Webkul\Admin\Providers\EventServiceProvider`. This example sends every new order to an external ERP:

**File:** `packages/Webkul/ErpSync/src/Providers/EventServiceProvider.php`

```php
<?php

namespace Webkul\ErpSync\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Webkul\ErpSync\Listeners\Order;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'checkout.order.save.after' => [
            [Order::class, 'afterCreated'],
        ],
    ];
}
```

**File:** `packages/Webkul/ErpSync/src/Listeners/Order.php`

```php
<?php

namespace Webkul\ErpSync\Listeners;

use Webkul\ErpSync\Jobs\SendOrder;
use Webkul\Sales\Contracts\Order as OrderContract;

class Order
{
    /**
     * Queue a newly placed order for the ERP.
     */
    public function afterCreated(OrderContract $order): void
    {
        SendOrder::dispatch($order->id)->afterCommit();
    }
}
```

The listener only queues a job, once the order's database transaction has committed, so a slow or failing ERP never holds up checkout. The package's main service provider merges the job's configuration in `register()` and registers the event service provider from `boot()`, as `AdminServiceProvider` and `ProductServiceProvider` do:

**File:** `packages/Webkul/ErpSync/src/Providers/ErpSyncServiceProvider.php`

```php
<?php

namespace Webkul\ErpSync\Providers;

use Illuminate\Support\ServiceProvider;

class ErpSyncServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(dirname(__DIR__).'/Config/erp-sync.php', 'erp_sync');
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->app->register(EventServiceProvider::class);
    }
}
```

Register `ErpSyncServiceProvider` in `bootstrap/providers.php` and the package namespace in `composer.json`, as in [Package Development](../package-development/getting-started.md#register-the-provider), then confirm the listener is attached:

```bash
php artisan event:list --event=checkout.order.save.after
```

The command lists every listener on the event, core's included. For a listener built step by step in a package, see [Events, Commands and Tests](../package-development/events-commands-and-tests.md#listen-to-events). Before you ship a listener, read [Things to Watch](#things-to-watch): an exception in a checkout listener rolls the order back, and a listener that returns `false` stops core's listeners after it.

::: details The `SendOrder` Job and Its Configuration
`SendOrder` is an ordinary queued job that loads the order through its repository and posts it, to the endpoint and token in `Config/erp-sync.php`, which `register()` above merges under `erp_sync`.

**File:** `packages/Webkul/ErpSync/src/Config/erp-sync.php`

```php
<?php

return [
    'endpoint' => env('ERP_SYNC_ENDPOINT'),

    'token' => env('ERP_SYNC_TOKEN'),
];
```

**File:** `packages/Webkul/ErpSync/src/Jobs/SendOrder.php`

```php
<?php

namespace Webkul\ErpSync\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Webkul\Sales\Repositories\OrderRepository;

class SendOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The number of times the job may be attempted.
     */
    public int $tries = 3;

    /**
     * Create a new job instance.
     */
    public function __construct(protected int $orderId) {}

    /**
     * Send the order to the ERP.
     */
    public function handle(OrderRepository $orderRepository): void
    {
        $order = $orderRepository->find($this->orderId);

        if (! $order) {
            return;
        }

        Http::withToken(config('erp_sync.token'))
            ->post(config('erp_sync.endpoint'), [
                'increment_id' => $order->increment_id,
                'grand_total' => $order->base_grand_total,
                'items' => $order->items->map(fn ($item) => [
                    'sku' => $item->sku,
                    'qty' => $item->qty_ordered,
                ])->all(),
            ])
            ->throw();
    }
}
```
:::

### What a Listener Receives

Names follow `<domain>.<entity>.<action>.<before|after>`. By convention a `before` event carries the record's id, or nothing when the record doesn't exist yet, and an `after` event carries the resulting model, except a delete, whose `after` event carries the id. Some names break the pattern (`customer.after.login`, `data_transfer.imports.started`, `sales.invoice.send_duplicate_email`), so take the exact name and payload from the [tables](#available-events).

Laravel passes the payload to a listener as arguments. A payload that isn't an array is wrapped in one, and an array payload is spread into one argument per value, with its keys dropped:

| Dispatch | Listener signature |
|---|---|
| `Event::dispatch('cms.page.create.before')` | `beforeCreate()`, called with no arguments |
| `Event::dispatch('catalog.category.create.after', $category)` | `afterCreate($category)` |
| `Event::dispatch('checkout.order.save.before', [$data])` | `beforeCreate(array $data)` |
| `Event::dispatch('sales.invoice.send_duplicate_email', ['invoice' => $invoice, 'duplicate_invoice_email' => $email])` | `afterCreated($invoice, $duplicateInvoiceEmail = null)` |

An event dispatched without a payload calls its listeners with no arguments, so a required parameter throws `ArgumentCountError`; give it a default (`$id = null`) when one method handles both a `create.before` and an `update.before`. That's also why `OrderRepository` wraps `$data` in a second array for `checkout.order.save.before`. A few core events pass an unwrapped array (`sales.invoice.save.before`, `sales.refund.save.before`, `sales.shipment.save.before`, the RMA request `create.before` events, `checkout.order.orderitem.save.before`, `section.reorder.before` and `section.media.upload.after`), so their listeners receive the array's values as separate arguments.

### Other Ways to Register

- **`Event::listen()` in `boot()`**, with a closure or a `[Listener::class, 'method']` pair, as `Webkul\SocialShare\Providers\EventServiceProvider` does.
- **A class name without a method**, which calls the listener's `handle()`, as `Webkul\Core\Providers\EventServiceProvider` maps the repository events to `Webkul\Core\Listeners\CleanCacheRepository`.
- **From `register()`** instead of `boot()`, as `OmnibusServiceProvider` registers its event service provider; both work.

## Firing Events from Your Package

Give your package's own writes the same hooks, so other packages can extend yours the way yours extends core. Fire both halves, name them `<package>.<entity>.<action>.<before|after>`, and pass what core passes: nothing before a create, the id before an update or delete, the model after a create or update, and the id after a delete. Wrap an array payload so a listener receives it whole:

```php
Event::dispatch('blog.post.create.before');

$post = $this->postRepository->create($data);

Event::dispatch('blog.post.create.after', $post);
```

A string name needs no event class for another package to import.

## Available Events

Every string event the core packages dispatch, grouped by area, with what a listener receives. Two families aren't listed individually: every DataGrid dispatches `datagrid.{grid_name}.{stage}` events as it is built (see [DataGrid](../package-development/datagrid.md#extending-a-datagrid-you-do-not-own)), and every `view_render_event()` call in a Blade view dispatches an event of the same name (see [View Render Events](./view-render-events.md)). Bagisto 2.4 dispatches the same events except `catalog.product.price.reindex.before` and `.after` and `promotions.catalog_rule.reindex.before` and `.after`, which are new in Bagisto 2.5.

### Catalog

Dispatched by the admin catalog controllers in `packages/Webkul/Admin/src/Http/Controllers/Catalog` and by the price indexer. `catalog.product.update.after` is also fired by `InvoiceItemRepository` and `ShipmentItemRepository` after they change a product's stock.

| Event | Fired | Listener receives |
|---|---|---|
| `catalog.attribute.create.after` | After an attribute is created | the attribute |
| `catalog.attribute.create.before` | Before an attribute is created | nothing |
| `catalog.attribute.delete.after` | After an attribute is deleted | the id |
| `catalog.attribute.delete.before` | Before an attribute is deleted | the id |
| `catalog.attribute.update.after` | After an attribute is updated | the attribute |
| `catalog.attribute.update.before` | Before an attribute is updated | the id |
| `catalog.attribute_family.create.after` | After an attribute family is created | the attribute family |
| `catalog.attribute_family.create.before` | Before an attribute family is created | nothing |
| `catalog.attribute_family.delete.after` | After an attribute family is deleted | the id |
| `catalog.attribute_family.delete.before` | Before an attribute family is deleted | the id |
| `catalog.attribute_family.update.after` | After an attribute family is updated | the attribute family |
| `catalog.attribute_family.update.before` | Before an attribute family is updated | the id |
| `catalog.categories.mass-update.after` | After each category in a mass update is changed | the category |
| `catalog.categories.mass-update.before` | Before each category in a mass update is changed | the category id |
| `catalog.category.create.after` | After a category is created | the category |
| `catalog.category.create.before` | Before a category is created | nothing |
| `catalog.category.delete.after` | After a category is deleted | the id |
| `catalog.category.delete.before` | Before a category is deleted | the id |
| `catalog.category.update.after` | After a category is updated | the category |
| `catalog.category.update.before` | Before a category is updated | the id |
| `catalog.product.create.after` | After a product is created | the product |
| `catalog.product.create.before` | Before a product is created | nothing |
| `catalog.product.delete.after` | After a product is deleted | the id |
| `catalog.product.delete.before` | Before a product is deleted | the id |
| `catalog.product.price.reindex.after` | After the price indexer runs from `indexer:index` | the reindexed product ids array; nothing after a full reindex |
| `catalog.product.price.reindex.before` | Before the price indexer runs from `indexer:index` | nothing |
| `catalog.product.update.after` | After a product is updated | the product |
| `catalog.product.update.before` | Before a product is updated | the id |
| `products.datagrid.sync` | After a product mass action, to refresh the product grid | `true` |

### Customers

Dispatched by the admin customer controllers, the storefront account, address, wishlist, compare, review and subscription controllers, the WebMCP controller, `Webkul\Checkout\Cart` when a cart item moves to the wishlist, and the social login controller for `customer.after.login`.

| Event | Fired | Listener receives |
|---|---|---|
| `customer.addresses.create.after` | After a customer address is created | the address |
| `customer.addresses.create.before` | Before a customer address is created | nothing |
| `customer.addresses.delete.after` | After a customer address is deleted | the id |
| `customer.addresses.delete.before` | Before a customer address is deleted | the id |
| `customer.addresses.update.after` | After a customer address is updated | the address |
| `customer.addresses.update.before` | Before a customer address is updated | the id; nothing from the storefront API |
| `customer.after.login` | After a customer signs in | the customer |
| `customer.after.logout` | After a customer signs out | the customer id |
| `customer.compare.create.after` | After a product is added to the compare list | the compare item |
| `customer.compare.create.before` | Before a product is added to the compare list | nothing |
| `customer.compare.delete-all.after` | After the compare list is cleared | nothing |
| `customer.compare.delete-all.before` | Before the compare list is cleared | nothing |
| `customer.compare.delete.after` | After a product is removed from the compare list | the product id |
| `customer.compare.delete.before` | Before a product is removed from the compare list | the product id |
| `customer.create.after` | After an admin creates a customer or a customer registers on the storefront | the customer |
| `customer.create.before` | Before an admin creates a customer | nothing |
| `customer.customer_group.create.after` | After a customer group is created | the customer group |
| `customer.customer_group.create.before` | Before a customer group is created | nothing |
| `customer.customer_group.delete.after` | After a customer group is deleted | the id |
| `customer.customer_group.delete.before` | Before a customer group is deleted | the id |
| `customer.customer_group.update.after` | After a customer group is updated | the customer group |
| `customer.customer_group.update.before` | Before a customer group is updated | the id |
| `customer.delete.after` | After a customer is deleted | the customer |
| `customer.delete.before` | Before a customer is deleted | the customer |
| `customer.note.create.after` | After a customer note is created | the customer note |
| `customer.note.create.before` | Before a customer note is created | the customer id |
| `customer.password.update.after` | After a customer changes or resets their password | the customer |
| `customer.registration.after` | After a customer registers, or an admin creates one | the customer |
| `customer.registration.before` | Before a customer registers, or an admin creates one | nothing |
| `customer.review.create.after` | After a product review is created | the review |
| `customer.review.create.before` | Before a product review is created | the product id |
| `customer.review.delete.after` | After a product review is deleted | the id |
| `customer.review.delete.before` | Before a product review is deleted | the id |
| `customer.review.update.after` | After a product review is updated | the review |
| `customer.review.update.before` | Before a product review is updated | the id |
| `customer.subscription.after` | After a newsletter subscription is saved | the subscription |
| `customer.subscription.before` | Before a newsletter subscription is saved | nothing |
| `customer.update.after` | After a customer is updated | the customer |
| `customer.update.before` | Before a customer is updated | the id; nothing from the storefront account page |
| `customer.wishlist.create.after` | After a product is added to the wishlist | the wishlist |
| `customer.wishlist.create.before` | Before a product is added to the wishlist | the product id |
| `customer.wishlist.delete-all.after` | After the wishlist is cleared | nothing |
| `customer.wishlist.delete-all.before` | Before the wishlist is cleared | nothing |
| `customer.wishlist.delete.after` | After a wishlist item is removed | the wishlist item id |
| `customer.wishlist.delete.before` | Before a wishlist item is removed | the wishlist item id |
| `customer.wishlist.move-to-cart.after` | After a wishlist item is moved to the cart | the wishlist item id |
| `customer.wishlist.move-to-cart.before` | Before a wishlist item is moved to the cart | the wishlist item id |
| `customer.wishlist.update.after` | After a cart item moved to the wishlist updates an existing wishlist item | the wishlist item |
| `customer.wishlist.update.before` | Before a cart item moved to the wishlist updates an existing wishlist item | the product id |

### GDPR Requests

Dispatched by the storefront and admin `GDPRController`.

| Event | Fired | Listener receives |
|---|---|---|
| `customer.account.gdpr-request.create.after` | After a customer submits a GDPR request | the GDPR request |
| `customer.account.gdpr-request.create.before` | Before a customer submits a GDPR request | nothing |
| `customer.account.gdpr-request.update.after` | After a GDPR request is revoked by the customer or updated by an admin | the GDPR request |
| `customer.account.gdpr-request.update.before` | Before a customer revokes a GDPR request | nothing |
| `customer.gdpr-request.create.after` | After a customer submits a GDPR request (fired right after the one above) | the GDPR request |
| `customer.gdpr-request.update.after` | After a customer revokes a GDPR request | the GDPR request |
| `customer.gdpr-request.update.before` | Before an admin updates a GDPR request | nothing |

### Cart and Checkout

Dispatched by `Webkul\Checkout\Cart`, `Webkul\Sales\Repositories\OrderRepository` and the storefront `OnepageController`.

| Event | Fired | Listener receives |
|---|---|---|
| `checkout.cart.add.after` | After a product is added to the cart | the cart |
| `checkout.cart.add.before` | Before a product is added to the cart | the product id |
| `checkout.cart.calculate.items.tax.after` | After tax is calculated on the cart items | the cart |
| `checkout.cart.calculate.items.tax.before` | Before tax is calculated on the cart items | the cart |
| `checkout.cart.calculate.shipping.tax.after` | After tax is calculated on shipping | the cart |
| `checkout.cart.calculate.shipping.tax.before` | Before tax is calculated on shipping | the cart |
| `checkout.cart.collect.totals.after` | After the cart totals are collected | the cart |
| `checkout.cart.collect.totals.before` | Before the cart totals are collected | the cart |
| `checkout.cart.delete.after` | After a cart item is removed | the cart item id |
| `checkout.cart.delete.before` | Before a cart item is removed | the cart item id |
| `checkout.cart.update.after` | After a cart item quantity is updated | the cart item |
| `checkout.cart.update.before` | Before a cart item quantity is updated | the cart item |
| `checkout.load.index` | When the one-page checkout page loads | nothing |
| `checkout.order.orderitem.save.after` | After an order item is saved | the order item |
| `checkout.order.orderitem.save.before` | Before an order item is saved | the item data array, one argument per value |
| `checkout.order.save.after` | After an order and its items are created, before the transaction commits | the order |
| `checkout.order.save.before` | Before an order is created, inside the order transaction | the order data array |

### Sales

The `save`, `cancel` and `update-status` events are dispatched by the Sales repositories, so they fire wherever an order, invoice, shipment or refund goes through them. The comment and duplicate email events come from the admin controllers, and the RMA `RequestController` also fires `sales.order.cancel.after`.

| Event | Fired | Listener receives |
|---|---|---|
| `sales.invoice.save.after` | After an invoice is saved | the invoice |
| `sales.invoice.save.before` | Before an invoice is saved | the request data array, one argument per value |
| `sales.invoice.send_duplicate_email` | When an admin sends an invoice email again | the invoice, then the email address |
| `sales.order.cancel.after` | After an order is canceled | the order |
| `sales.order.cancel.before` | Before an order is canceled | the order |
| `sales.order.comment.create.after` | After an admin adds an order comment | the order comment |
| `sales.order.comment.create.before` | Before an admin adds an order comment | nothing |
| `sales.order.update-status.after` | After an order status is recalculated | the order |
| `sales.order.update-status.before` | Before an order status is recalculated | the order |
| `sales.refund.save.after` | After a refund is saved | the refund |
| `sales.refund.save.before` | Before a refund is saved | the request data array, one argument per value |
| `sales.shipment.save.after` | After a shipment is saved | the shipment |
| `sales.shipment.save.before` | Before a shipment is saved | the request data array, one argument per value |

### Returns (RMA)

Dispatched by the admin controllers in `packages/Webkul/Admin/src/Http/Controllers/Sales/RMA` and the storefront `RMAController`.

| Event | Fired | Listener receives |
|---|---|---|
| `customer.rma.request.create.after` | After a customer creates a return request | the return request |
| `customer.rma.request.create.before` | Before a customer creates a return request | the request data array, one argument per value |
| `customer.rma.request.update.after` | After a customer updates a return request | the return request |
| `customer.rma.request.update.before` | Before a customer updates a return request (reopen, cancel or close) | the id |
| `sales.rma.custom-field.create.after` | After an RMA custom field is created | the RMA custom field |
| `sales.rma.custom-field.create.before` | Before an RMA custom field is created | nothing |
| `sales.rma.custom-field.delete.after` | After an RMA custom field is deleted | the id |
| `sales.rma.custom-field.delete.before` | Before an RMA custom field is deleted | the id |
| `sales.rma.custom-field.update.after` | After an RMA custom field is updated | the RMA custom field |
| `sales.rma.custom-field.update.before` | Before an RMA custom field is updated | the id |
| `sales.rma.reason.create.after` | After an RMA reason is created | the RMA reason |
| `sales.rma.reason.create.before` | Before an RMA reason is created | nothing |
| `sales.rma.reason.delete.after` | After an RMA reason is deleted | the id |
| `sales.rma.reason.delete.before` | Before an RMA reason is deleted | the id |
| `sales.rma.reason.update.after` | After an RMA reason is updated | the RMA reason |
| `sales.rma.reason.update.before` | Before an RMA reason is updated | the id |
| `sales.rma.request.create.after` | After an admin creates a return request | the return request |
| `sales.rma.request.create.before` | Before an admin creates a return request | the request data array, one argument per value |
| `sales.rma.rma-status.create.after` | After an RMA status is created | the RMA status |
| `sales.rma.rma-status.create.before` | Before an RMA status is created | nothing |
| `sales.rma.rma-status.delete.after` | After an RMA status is deleted | the id |
| `sales.rma.rma-status.delete.before` | Before an RMA status is deleted | the id |
| `sales.rma.rma-status.update.after` | After an RMA status is updated | the RMA status |
| `sales.rma.rma-status.update.before` | Before an RMA status is updated | the id |
| `sales.rma.rules.create.after` | After an RMA rule is created | the RMA rule |
| `sales.rma.rules.create.before` | Before an RMA rule is created | nothing |
| `sales.rma.rules.delete.after` | After an RMA rule is deleted | the id |
| `sales.rma.rules.delete.before` | Before an RMA rule is deleted | the id |
| `sales.rma.rules.update.after` | After an RMA rule is updated | the RMA rule |
| `sales.rma.rules.update.before` | Before an RMA rule is updated | the id |

### Promotions

Dispatched by the admin promotion controllers; the `reindex` pair by the `UpdateCreateCatalogRuleIndex` and `DeleteCatalogRuleIndex` jobs.

| Event | Fired | Listener receives |
|---|---|---|
| `cart_rules.coupons.delete.after` | After a cart rule coupon is deleted | the coupon |
| `cart_rules.coupons.delete.before` | Before a cart rule coupon is deleted | the coupon |
| `promotions.cart_rule.create.after` | After a cart rule is created | the cart rule |
| `promotions.cart_rule.create.before` | Before a cart rule is created | nothing |
| `promotions.cart_rule.delete.after` | After a cart rule is deleted | the id |
| `promotions.cart_rule.delete.before` | Before a cart rule is deleted | the id |
| `promotions.cart_rule.update.after` | After a cart rule is updated | the cart rule |
| `promotions.cart_rule.update.before` | Before a cart rule is updated | the id |
| `promotions.catalog_rule.create.after` | After a catalog rule is created | the catalog rule |
| `promotions.catalog_rule.create.before` | Before a catalog rule is created | nothing |
| `promotions.catalog_rule.delete.after` | After a catalog rule is deleted | the id |
| `promotions.catalog_rule.delete.before` | Before a catalog rule is deleted | the id |
| `promotions.catalog_rule.reindex.after` | After prices are reindexed for a saved or deleted catalog rule | the product ids array |
| `promotions.catalog_rule.reindex.before` | Before prices are reindexed for a saved or deleted catalog rule | the product ids array |
| `promotions.catalog_rule.update.after` | After a catalog rule is updated | the catalog rule |
| `promotions.catalog_rule.update.before` | Before a catalog rule is updated | the id |

### Marketing and SEO

Dispatched by the admin marketing controllers. The URL rewrite `create` and `delete` events are also fired by `Webkul\Marketing\Listeners\Category`, `Product` and `Page`, which maintain the rewrites of categories, products and CMS pages.

| Event | Fired | Listener receives |
|---|---|---|
| `marketing.campaigns.create.after` | After a campaign is created | the campaign |
| `marketing.campaigns.create.before` | Before a campaign is created | nothing |
| `marketing.campaigns.delete.after` | After a campaign is deleted | the id |
| `marketing.campaigns.delete.before` | Before a campaign is deleted | the id |
| `marketing.campaigns.update.after` | After a campaign is updated | the campaign |
| `marketing.campaigns.update.before` | Before a campaign is updated | the id |
| `marketing.events.create.after` | After a marketing event is created | the marketing event |
| `marketing.events.create.before` | Before a marketing event is created | nothing |
| `marketing.events.delete.after` | After a marketing event is deleted | the id |
| `marketing.events.delete.before` | Before a marketing event is deleted | the id |
| `marketing.events.update.after` | After a marketing event is updated | the marketing event |
| `marketing.events.update.before` | Before a marketing event is updated | the id |
| `marketing.search_seo.search_synonyms.create.after` | After a search synonym is created | the search synonym |
| `marketing.search_seo.search_synonyms.create.before` | Before a search synonym is created | nothing |
| `marketing.search_seo.search_synonyms.delete.after` | After a search synonym is deleted | the id |
| `marketing.search_seo.search_synonyms.delete.before` | Before a search synonym is deleted | the id |
| `marketing.search_seo.search_synonyms.update.after` | After a search synonym is updated | the search synonym |
| `marketing.search_seo.search_synonyms.update.before` | Before a search synonym is updated | the id |
| `marketing.search_seo.search_terms.create.after` | After a search term is created | the search term |
| `marketing.search_seo.search_terms.create.before` | Before a search term is created | nothing |
| `marketing.search_seo.search_terms.delete.after` | After a search term is deleted | the id |
| `marketing.search_seo.search_terms.delete.before` | Before a search term is deleted | the id |
| `marketing.search_seo.search_terms.update.after` | After a search term is updated | the search term |
| `marketing.search_seo.search_terms.update.before` | Before a search term is updated | the id |
| `marketing.search_seo.sitemap.create.after` | After a sitemap is created | the sitemap |
| `marketing.search_seo.sitemap.create.before` | Before a sitemap is created | nothing |
| `marketing.search_seo.sitemap.delete.after` | After a sitemap is deleted | the id |
| `marketing.search_seo.sitemap.delete.before` | Before a sitemap is deleted | the id |
| `marketing.search_seo.sitemap.update.after` | After a sitemap is updated | the sitemap |
| `marketing.search_seo.sitemap.update.before` | Before a sitemap is updated | the id |
| `marketing.search_seo.url_rewrites.create.after` | After a URL rewrite is created | the URL rewrite |
| `marketing.search_seo.url_rewrites.create.before` | Before a URL rewrite is created | nothing |
| `marketing.search_seo.url_rewrites.delete.after` | After a URL rewrite is deleted | the id |
| `marketing.search_seo.url_rewrites.delete.before` | Before a URL rewrite is deleted | the id |
| `marketing.search_seo.url_rewrites.update.after` | After a URL rewrite is updated | the URL rewrite |
| `marketing.search_seo.url_rewrites.update.before` | Before a URL rewrite is updated | the id |
| `marketing.templates.create.after` | After an email template is created | the email template |
| `marketing.templates.create.before` | Before an email template is created | nothing |
| `marketing.templates.delete.after` | After an email template is deleted | the id |
| `marketing.templates.delete.before` | Before an email template is deleted | the id |
| `marketing.templates.update.after` | After an email template is updated | the email template |
| `marketing.templates.update.before` | Before an email template is updated | the id |

### CMS

Dispatched by the admin `PageController`.

| Event | Fired | Listener receives |
|---|---|---|
| `cms.page.create.after` | After a CMS page is created | the CMS page |
| `cms.page.create.before` | Before a CMS page is created | nothing |
| `cms.page.delete.after` | After a CMS page is deleted | the id |
| `cms.page.delete.before` | Before a CMS page is deleted | the id |
| `cms.page.update.after` | After a CMS page is updated | the CMS page |
| `cms.page.update.before` | Before a CMS page is updated | the id |

### Settings

Dispatched by the admin settings controllers. `core.currency.delete.*` and `core.locale.delete.*` come from `CurrencyRepository` and `LocaleRepository`, `core.configuration.save.*` from `CoreConfigRepository`, and activating a theme also fires `core.channel.update.before` and `.after` from `ThemeController`.

| Event | Fired | Listener receives |
|---|---|---|
| `admin.password.update.after` | After an admin password is changed | the admin |
| `core.channel.create.after` | After a channel is created | the channel |
| `core.channel.create.before` | Before a channel is created | nothing |
| `core.channel.delete.after` | After a channel is deleted | the id |
| `core.channel.delete.before` | Before a channel is deleted | the id |
| `core.channel.update.after` | After a channel is updated | the channel |
| `core.channel.update.before` | Before a channel is updated | the id |
| `core.configuration.save.after` | After configuration values are saved | nothing |
| `core.configuration.save.before` | Before configuration values are saved | nothing |
| `core.currency.create.after` | After a currency is created | the currency |
| `core.currency.create.before` | Before a currency is created | nothing |
| `core.currency.delete.after` | After a currency is deleted | the id |
| `core.currency.delete.before` | Before a currency is deleted | the id |
| `core.currency.update.after` | After a currency is updated | the currency |
| `core.currency.update.before` | Before a currency is updated | the id |
| `core.exchange_rate.create.after` | After an exchange rate is created | the exchange rate |
| `core.exchange_rate.create.before` | Before an exchange rate is created | nothing |
| `core.exchange_rate.delete.after` | After an exchange rate is deleted | the id |
| `core.exchange_rate.delete.before` | Before an exchange rate is deleted | the id |
| `core.exchange_rate.update.after` | After an exchange rate is updated | the exchange rate |
| `core.exchange_rate.update.before` | Before an exchange rate is updated | the id |
| `core.locale.create.after` | After a locale is created | the locale |
| `core.locale.create.before` | Before a locale is created | nothing |
| `core.locale.delete.after` | After a locale is deleted | the id |
| `core.locale.delete.before` | Before a locale is deleted | the id |
| `core.locale.update.after` | After a locale is updated | the locale |
| `core.locale.update.before` | Before a locale is updated | the id |
| `inventory.inventory_source.create.after` | After an inventory source is created | the inventory source |
| `inventory.inventory_source.create.before` | Before an inventory source is created | nothing |
| `inventory.inventory_source.delete.after` | After an inventory source is deleted | the id |
| `inventory.inventory_source.delete.before` | Before an inventory source is deleted | the id |
| `inventory.inventory_source.update.after` | After an inventory source is updated | the inventory source |
| `inventory.inventory_source.update.before` | Before an inventory source is updated | the id |
| `tax.category.create.after` | After a tax category is created | the tax category |
| `tax.category.create.before` | Before a tax category is created | nothing |
| `tax.category.delete.after` | After a tax category is deleted | the id |
| `tax.category.delete.before` | Before a tax category is deleted | the id |
| `tax.category.update.after` | After a tax category is updated | the tax category |
| `tax.category.update.before` | Before a tax category is updated | the id |
| `tax.rate.create.after` | After a tax rate is created | the tax rate |
| `tax.rate.create.before` | Before a tax rate is created | nothing |
| `tax.rate.delete.after` | After a tax rate is deleted | the id |
| `tax.rate.delete.before` | Before a tax rate is deleted | the id |
| `tax.rate.update.after` | After a tax rate is updated | the tax rate |
| `tax.rate.update.before` | Before a tax rate is updated | the id |
| `user.admin.create.after` | After an admin user is created | the admin |
| `user.admin.create.before` | Before an admin user is created | nothing |
| `user.admin.delete.after` | After an admin user is deleted | the id |
| `user.admin.delete.before` | Before an admin user is deleted | the id |
| `user.admin.update.after` | After an admin user is updated | the admin |
| `user.admin.update.before` | Before an admin user is updated | the id |
| `user.role.create.after` | After a role is created | the role |
| `user.role.create.before` | Before a role is created | nothing |
| `user.role.delete.after` | After a role is deleted | the id |
| `user.role.delete.before` | Before a role is deleted | the id |
| `user.role.update.after` | After a role is updated | the role |
| `user.role.update.before` | Before a role is updated | the id |

### Appearance

Dispatched by the admin `SectionController` and `ThemeController`.

| Event | Fired | Listener receives |
|---|---|---|
| `appearance.theme.activate.after` | After a theme is activated on a channel | the channel |
| `appearance.theme.activate.before` | Before a theme is activated on a channel | the channel id |
| `section.create.after` | After a theme section is created | the section |
| `section.create.before` | Before a theme section is created | nothing |
| `section.delete.after` | After a theme section is deleted | the id |
| `section.delete.before` | Before a theme section is deleted | the id |
| `section.draft.discard.after` | After a section draft is discarded | the section |
| `section.draft.discard.before` | Before a section draft is discarded | the id |
| `section.draft.save.after` | After a section draft is saved | the section |
| `section.draft.save.before` | Before a section draft is saved | the id |
| `section.media.upload.after` | After media is uploaded to a section | the stored path, then the media type (`image` or `video`) |
| `section.media.upload.before` | Before media is uploaded to a section | the section id |
| `section.reorder.after` | After sections are reordered | the sections |
| `section.reorder.before` | Before sections are reordered | each section id as a separate argument |
| `section.update.after` | After a theme section is updated | the section |
| `section.update.before` | Before a theme section is updated | the id |

### DataGrid Saved Filters

Dispatched by the admin `SavedFilterController`.

| Event | Fired | Listener receives |
|---|---|---|
| `datagrid.saved_filter.create.after` | After a saved filter is created | the saved filter |
| `datagrid.saved_filter.create.before` | Before a saved filter is created | nothing |
| `datagrid.saved_filter.delete.after` | After a saved filter is deleted | the id |
| `datagrid.saved_filter.delete.before` | Before a saved filter is deleted | the id |
| `datagrid.saved_filter.update.after` | After a saved filter is updated | the saved filter |
| `datagrid.saved_filter.update.before` | Before a saved filter is updated | the id |

### Data Transfer

`create` and `update` come from the admin `ImportController`, `validate` from `AbstractImporter`, and `started`, `linking`, `indexing` and `completed` from `Webkul\DataTransfer\Helpers\Import`. The batch events are dispatched by each importer's own `importBatch()`, `linkBatch()` and `indexBatch()`, so a custom importer fires them only if it dispatches them itself.

| Event | Fired | Listener receives |
|---|---|---|
| `data_transfer.imports.batch.import.after` | After an importer writes a batch | the import batch |
| `data_transfer.imports.batch.import.before` | Before an importer writes a batch | the import batch |
| `data_transfer.imports.batch.indexing.after` | After the product importer indexes a batch | the import batch |
| `data_transfer.imports.batch.indexing.before` | Before the product importer indexes a batch | the import batch |
| `data_transfer.imports.batch.linking.after` | After the product importer links a batch | the import batch |
| `data_transfer.imports.batch.linking.before` | Before the product importer links a batch | the import batch |
| `data_transfer.imports.completed` | When an import completes | the import |
| `data_transfer.imports.create.after` | After an import is created | the import |
| `data_transfer.imports.create.before` | Before an import is created | nothing |
| `data_transfer.imports.indexing` | When an import enters the indexing stage | the import |
| `data_transfer.imports.linking` | When an import enters the linking stage | the import |
| `data_transfer.imports.started` | When an import starts processing | the import |
| `data_transfer.imports.update.after` | After an import is updated | the import |
| `data_transfer.imports.update.before` | Before an import is updated | nothing |
| `data_transfer.imports.validate.after` | After an import file is validated | the import |
| `data_transfer.imports.validate.before` | Before an import file is validated | the import |

### Booking Products

Dispatched by `BookingRepository` and `BookingProductEventTicketRepository`.

| Event | Fired | Listener receives |
|---|---|---|
| `booking_product.booking.event-ticket.save.after` | After event tickets are saved on a booking product | the saved tickets |
| `booking_product.booking.event-ticket.save.before` | Before event tickets are saved on a booking product | the ticket data, then the booking product |
| `booking_product.booking.save.after` | After a booking is saved | the booking |
| `booking_product.booking.save.before` | Before a booking is saved | the order item |

### Installer

Dispatched by the `bagisto:install` command and the web installer's `CanInstall` middleware.

| Event | Fired | Listener receives |
|---|---|---|
| `bagisto.installed` | After installation completes, from the installer command or web installer | nothing |

## Things to Watch

- **An exception in a listener fails the action.** `checkout.order.save.before` and `checkout.order.save.after` run inside the order's database transaction in `OrderRepository::createOrderIfNotThenRetry()`: an exception rolls the order back, and the repository tries again up to `sales.order_settings.order_creation.max_retry_attempts` times. Core's email listeners catch their own exceptions and `report()` them. A listener that returns `false` also stops the listeners after it, core's included, so return nothing from a listener method.
- **Change a core listener by binding a subclass.** A listener mapped by class name is resolved from the container each time its event fires, so binding `Webkul\Shop\Listeners\Order` to your subclass in your provider's `register()` changes the customer's order email that its `afterCreated()` sends. `Event::forget()` is no substitute: it removes every listener of the event, other packages' included.
- **Queue slow work, after commit.** A job dispatched inside a transaction can be picked up before the transaction commits and find no record. `->afterCommit()` holds it back; with `QUEUE_CONNECTION=sync` the job still runs inside the request, once the transaction has committed.
- **The dispatch site decides whether an event fires, and with what.** The catalog, customer, marketing and settings events are dispatched by the Admin and Shop controllers, so a record written through a repository elsewhere, by an importer, an API package or your own code, fires none of them; the sales events are the main exception, dispatched by the Sales repositories. Each table says where its events come from. The payload differs between sites too: `customer.update.before` carries the customer id from the admin but nothing from the storefront account page, so accept an optional argument where a table lists more than one shape.
- **A misspelled event name fails silently.** Copy the name from the table and check it with `php artisan event:list`.
- **Repositories also fire class events.** Every Bagisto repository extends Prettus's `BaseRepository`, whose `create()`, `update()`, `updateOrCreate()`, `delete()` and `deleteWhere()` fire `Prettus\Repository\Events\RepositoryEntityCreated`, `RepositoryEntityUpdated` and `RepositoryEntityDeleted`, unless a repository overrides the method without calling the parent (`ProductRepository::create()` hands the create to the product type). They don't fire for `insert()`, `upsert()` or query builder updates.

## Related Pages

- [Events, Commands and Tests](../package-development/events-commands-and-tests.md#listen-to-events): a listener built step by step in the FAQ package.
- [View Render Events](./view-render-events.md): adding markup at the events Blade views fire.
- [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md): running the jobs a listener queues.
- [Debugging Tips](./debugging.md#events): inspecting which listeners run.

# Understanding Indexers

Bagisto keeps precomputed copies of the product data the storefront reads most, so a category page doesn't work out prices, stock and attribute values product by product. **Indexers**, in `packages/Webkul/Product/src/Helpers/Indexers` and `packages/Webkul/CatalogRule/src/Helpers`, write those copies; listeners, queued jobs and scheduled commands keep them in step with the catalog.

## The Indexes

| Index | Stored in | Written by | Holds |
|---|---|---|---|
| Price | `product_price_indices` | `Webkul\Product\Helpers\Indexers\Price`, with a type indexer per product type in `Helpers/Indexers/Price/` | Each product's prices per channel and customer group, including special, customer group and catalog rule prices |
| Inventory | `product_inventory_indices` | `Webkul\Product\Helpers\Indexers\Inventory` | The saleable quantity of simple and virtual products per channel |
| Flat | `product_flat` | `Webkul\Product\Helpers\Indexers\Flat` | One row per product, channel and locale with its attribute values, plus columns derived from other tables: `quantity`, `images_count`, `base_image`, `attribute_family_name` and `category_name` |
| Catalog rule | `catalog_rule_products`, `catalog_rule_product_prices` | `Webkul\CatalogRule\Helpers\CatalogRuleIndex` | Which catalog rules apply to which products, and the resulting rule prices by date |
| Search | The external search engine's index | The indexer `SearchEngineManager::indexer()` returns | The product documents Elasticsearch searches. With the database engine the manager returns `NullIndexer`, which does nothing |

The price, inventory and flat indexers extend one base class, and search indexers implement one contract:

| Base | Methods |
|---|---|
| `Webkul\Product\Helpers\Indexers\AbstractIndexer` (price, inventory, flat) | `reindexFull()`, `reindexSelective()` (a full reindex unless overridden), `reindexRows($products)`, which splits products into batches of 100 for `reindexBatch()`, and `reindexRow($product)` |
| `Webkul\Product\Contracts\SearchIndexer` (search) | `indexBatch(array $products)`, `deleteBatch(array $productIds)`, `reindexFull()`. How an engine and its indexer are chosen is on [Search Engines](./search-engines.md) |

## What Keeps Them Current

Listeners registered in `Webkul\Product\Providers\EventServiceProvider` and `Webkul\CatalogRule\Providers\EventServiceProvider` refresh the indexes when the admin changes the catalog:

| Event | Listener | What it does |
|---|---|---|
| `catalog.product.create.after` | `Webkul\Product\Listeners\Product::afterCreate` | Refreshes the product's flat rows, then queues `IndexProducts` for the product and its related products |
| `catalog.product.update.after` | `Product::afterUpdate` | Refreshes the flat rows, then queues a chain of `UpdateCreateInventoryIndex`, `UpdateCreatePriceIndex` and `IndexProducts` |
| `catalog.product.update.after` | `Webkul\CatalogRule\Listeners\Product::afterUpdate` | Queues `UpdateCreateProductIndex`, which reapplies catalog rules to the product |
| `catalog.product.delete.before` | `Product::beforeDelete` | Queues `DeleteProducts` for the product and a configurable's variants, and `IndexProducts` for related products that remain |
| `checkout.order.save.after`, `sales.order.cancel.after` | `Webkul\Product\Listeners\Order::afterCancelOrCreate` | Refreshes the flat derived columns of the ordered products and queues `UpdateCreateInventoryIndex` for them |
| `sales.refund.save.after` | `Webkul\Product\Listeners\Refund::afterCreate` | The same for refunded products |
| `catalog.category.update.after`, `catalog.category.delete.after` | `Webkul\Product\Listeners\Category` | Refreshes the flat derived columns of the products in the category and its descendants, or of every product after a delete |
| `catalog.attribute_family.update.after` | `Webkul\Product\Listeners\AttributeFamily::afterUpdate` | Refreshes the flat derived columns of the family's products |
| `inventory.inventory_source.delete.after` | `Webkul\Product\Listeners\InventorySource::afterDelete` | Refreshes the flat derived columns of every product |
| `data_transfer.imports.batch.indexing.after` | `Webkul\Product\Listeners\Import::afterBatchIndexing` | Writes the admin locale's flat rows for an imported batch |
| `promotions.catalog_rule.create.after`, `promotions.catalog_rule.update.after` | `Webkul\CatalogRule\Listeners\CatalogRule::afterUpdateCreate` | Queues `UpdateCreateCatalogRuleIndex`, which reindexes the rule and then the prices of the products it applies to |
| `promotions.catalog_rule.update.before`, `promotions.catalog_rule.delete.before` | `CatalogRule::beforeUpdate`, `CatalogRule::beforeDelete` | Deletes the rule's prices and queues `DeleteCatalogRuleIndex`, which reindexes the prices of the products it applied to |

"Related products" are a configurable product's variants, or a simple product's configurable parent and the bundle and grouped products that contain it. The flat rows are written in the request itself; the inventory, price and search indexes are queued jobs in `Webkul\Product\Jobs`. The shipped `.env.example` sets `QUEUE_CONNECTION=sync`, so those jobs run inside the request until the store runs a queue worker; see [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md).

::: details The Product Listener's Update Handler
**File:** `packages/Webkul/Product/src/Listeners/Product.php`

```php
<?php

namespace Webkul\Product\Listeners;

use Illuminate\Support\Facades\Bus;
use Webkul\Product\Helpers\Indexers\Flat as FlatIndexer;
use Webkul\Product\Jobs\Search\IndexProducts as IndexSearchJob;
use Webkul\Product\Jobs\UpdateCreateInventoryIndex as UpdateCreateInventoryIndexJob;
use Webkul\Product\Jobs\UpdateCreatePriceIndex as UpdateCreatePriceIndexJob;
use Webkul\Product\Repositories\ProductBundleOptionProductRepository;
use Webkul\Product\Repositories\ProductGroupedProductRepository;
use Webkul\Product\Repositories\ProductRepository;

class Product
{
    /**
     * Create a new listener instance.
     *
     * @return void
     */
    public function __construct(
        protected ProductRepository $productRepository,
        protected ProductBundleOptionProductRepository $productBundleOptionProductRepository,
        protected ProductGroupedProductRepository $productGroupedProductRepository,
        protected FlatIndexer $flatIndexer
    ) {}

    // ...

    /**
     * Update or create product indices
     *
     * @param  \Webkul\Product\Contracts\Product  $product
     * @return void
     */
    public function afterUpdate($product)
    {
        $this->flatIndexer->refresh($product);

        $productIds = $this->getAllRelatedProductIds($product);

        Bus::chain([
            new UpdateCreateInventoryIndexJob($productIds),
            new UpdateCreatePriceIndexJob($productIds),
            new IndexSearchJob($productIds),
        ])->dispatch();
    }

    // ...
}
```
:::

## Reindexing from the Command Line

`php artisan indexer:index` runs the indexers by hand:

| Option | Values |
|---|---|
| `--type` | `inventory`, `price`, `flat`, `search`; repeat it for several. Without it all four run |
| `--mode` | `selective` (the default) or `full`. Only the first value is used |

### What Each Mode Does

| Type | `selective` (default) | `full` |
|---|---|---|
| `inventory` | Nothing | Every simple and virtual product |
| `price` | Products whose special price starts today or ended yesterday, or whose catalog rule price is dated yesterday, and the composite products built from them | Every product |
| `flat` | Every product | Every product |
| `search` | Nothing | The whole external search index, when an external engine is enabled |

An unknown type prints a warning and is skipped. On Bagisto 2.4 the search indexer's type is `elastic`.

```bash
# Rebuild the price, inventory, flat and search indexes after a bulk data fix
php artisan indexer:index --mode=full

# Rebuild one index
php artisan indexer:index --type=price --mode=full
php artisan indexer:index --type=inventory --mode=full

# Rebuild the Elasticsearch index
php artisan indexer:index --type=search --mode=full
```

`indexer:index` has no catalog rule indexer: run `php artisan product:price-rule:index` first when catalog rule prices may have changed. Product imports index their own batches while they run, on the `sync` queue connection. The command's indexers are fixed in its `$indexers` property, so a package that keeps an index of its own needs a command of its own.

## Scheduled Reindexing

Two schedules keep date-dependent prices right, both registered in the providers of the packages that own the commands:

| Command | Schedule | Registered in |
|---|---|---|
| `product:price-rule:index` | Daily at 00:01 | `Webkul\CatalogRule\Providers\CatalogRuleServiceProvider` |
| `indexer:index --type=price` | Daily at 00:01 | `Webkul\Product\Providers\ProductServiceProvider` |

`schedule:run` runs them one after the other, the catalog rule index first. Both need the scheduler cron entry:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

Neither command updates the search documents: the price indexer writes `product_price_indices` only, so price sorting and price filters on Elasticsearch can lag behind date-bound prices until the products are indexed again ([Search Engines](./search-engines.md#things-to-watch)). Every scheduled task Bagisto registers is listed on [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md#scheduled-tasks).

## Events the Indexers Fire

| Events | Fired by | `after` listeners receive |
|---|---|---|
| `catalog.product.price.reindex.before`, `.after` | The price indexer's `reindexFull()` and `reindexSelective()`, the two methods `indexer:index` calls | The reindexed product ids after a selective run; nothing after a full run |
| `promotions.catalog_rule.reindex.before`, `.after` | The `UpdateCreateCatalogRuleIndex` and `DeleteCatalogRuleIndex` jobs | The ids of the products whose prices they reindex |

The full page cache (`Webkul\FPC\Listeners\Price`) and the storefront catalog cache (`Webkul\Shop\Listeners\CatalogCache`) listen to both `after` events. The product index jobs, `UpdateCreateProductIndex`, `reindexRows()` and the nightly `product:price-rule:index` fire neither pair. Take the ids as an optional argument, as `Webkul\FPC\Listeners\Price::afterReindex($productIds = null)` does, since a full reindex passes none.

## Refreshing Indexes from Your Own Code

A package that changes products outside the admin controllers, such as a stock sync, a price feed or a bulk update, refreshes the indexes itself. The simplest way is to fire the event the admin would, as `Webkul\Sales\Repositories\InvoiceItemRepository` does after it changes stock; that runs every listener core attaches to a product update:

```php
Event::dispatch('catalog.product.update.after', $product);
```

To refresh only the indexes, chain the jobs yourself. Start with `Webkul\CatalogRule\Jobs\UpdateCreateProductIndex` when prices changed, because catalog rule prices are calculated from the product's `price`; it takes a product model, while the other jobs take the ids of the products and their related products:

```php
<?php

use Illuminate\Support\Facades\Bus;
use Webkul\CatalogRule\Jobs\UpdateCreateProductIndex;
use Webkul\Product\Jobs\Search\IndexProducts;
use Webkul\Product\Jobs\UpdateCreateInventoryIndex;
use Webkul\Product\Jobs\UpdateCreatePriceIndex;

Bus::chain([
    ...$products->map(fn ($product) => new UpdateCreateProductIndex($product))->all(),
    new UpdateCreateInventoryIndex($productIds),
    new UpdateCreatePriceIndex($productIds),
    new IndexProducts($productIds),
])->dispatch();
```

Then call `app(\Webkul\Product\Helpers\Indexers\Flat::class)->refresh($product)` for each product whose attribute values changed, or `refreshDerivedColumns($productIds)` when only stock, images or categories did.

## Things to Watch

- **`--type=inventory` and `--type=search` do nothing without `--mode=full`.** Selective mode skips both.
- **The flat index is current straight away; the others are not.** With a real queue driver, prices, stock and search results change when a worker has run the jobs. Check `php artisan queue:failed` when they never do.
- **Index jobs reindex only the ids you pass.** Pass a configurable product's variant ids and a simple product's parents along with the product, as `Product::getAllRelatedProductIds()` does, or composite prices go stale.
- **Direct SQL writes fire no events.** An import script or migration that updates `products` or `product_attribute_values` directly leaves every index stale until you refresh it, or run `php artisan product:price-rule:index` and then `php artisan indexer:index --mode=full`.
- **A new product type brings its own price indexer.** `Price::getTypeIndexer()` asks the product type's `getPriceIndexer()` for it; see [Understanding the AbstractType Class](../product-type-development/understanding-abstract-type-class.md#pricing-and-display-methods).

## Related Pages

- [Search Engines](./search-engines.md): how the search engine and its indexer are chosen.
- [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md): running the index jobs on a worker, and every scheduled task.
- [Understanding Data Transfer](./understanding-data-transfer.md): imports that index their own batches as they run.
- [Artisan Commands](./artisan-commands.md#indexer-index): `indexer:index` alongside Bagisto's other commands.

# Understanding Indexers

When dealing with large volumes of data and retrieving complex information like product variants and pricing, optimizing database queries becomes critical for performance. Bagisto's indexing system provides the solution.

::: info What are Indexers?
Indexers create and maintain specialized data structures optimized for quick information retrieval. They analyze incoming data, extract key metadata, and store it with pointers to original data for lightning-fast searches.
:::

## Benefits of Indexing

### Performance Optimization
- **Fast Data Retrieval**: Eliminates sequential data scanning
- **Optimized Queries**: Reduces database load and response times
- **Scalable Operations**: Handles large datasets efficiently

### Enhanced User Experience
- **Quick Search Results**: Users find products instantly
- **Real-time Updates**: Pricing and inventory reflect immediately
- **Consistent Data**: Synchronized information across all channels

## Essential Indexers in Bagisto

Bagisto implements several specialized indexers to maintain optimal performance across different data types:

### Price Indexing

Price indexing ensures accurate product pricing across your entire storefront, handling complex pricing scenarios efficiently.

::: tip Key Features
- **Real-time Updates**: Prices reflect immediately when changed
- **Rule Integration**: Automatically applies catalog pricing rules
- **Multi-channel Support**: Consistent pricing across all sales channels
:::

**How it Works:**
The price indexing process updates product prices in the database whenever changes occur, ensuring accurate price information across the storefront and maintaining consistency with promotional rules.

### Inventory Indexing

Manages real-time inventory tracking and stock level synchronization across all sales channels.

**Automatic Inventory Management:**
- **Restock Operations**: Quantities update when new stock arrives
- **Return Processing**: Inventory increases when products are returned
- **Real-time Sync**: Inventory levels remain accurate across all touchpoints

::: warning Stock Accuracy
Inventory indexing prevents overselling by maintaining real-time stock levels. Always ensure indexers are running properly to avoid inventory discrepancies.
:::

### Flat Indexing

Optimizes product data retrieval by creating denormalized flat tables for faster query performance.

**Performance Benefits:**
- **Batch Processing**: Handles large datasets efficiently without system overload
- **Attribute Management**: Manages fillable attribute codes during index creation
- **Multi-locale Support**: Accurate indexing for different markets and languages

**Manual Re-indexing:**
When channels or locales change, manually trigger re-indexing to ensure flat tables reflect updates:

```bash
php artisan indexer:index --type=flat --mode=full
```

### Catalog Rule Indexing

Maintains accurate pricing by applying catalog rules, promotions, and discounts consistently across the store.

**Automated Scheduling:**
- **Daily Execution**: Runs automatically at 00:01 every day
- **Rule Validation**: Ensures expired promotions are removed
- **Price Recalculation**: Updates product prices based on active rules
- **Zero Maintenance**: No manual intervention required

::: info Scheduling Details
The catalog rule indexer runs daily to ensure promotional pricing remains accurate. This prevents expired offers from displaying incorrect prices.
:::

### Search Indexing

When an external search engine is enabled, the search indexer keeps its index in step with the catalog: one Elasticsearch index per channel and locale, carrying the product's attributes, prices and category names.

On Bagisto 2.5 the indexer is resolved through `SearchEngineManager::indexer()`, so the same jobs work for the database engine (where a no-op indexer is used) and for Elasticsearch. On Bagisto 2.4 the Elasticsearch indexer is invoked directly and the jobs check the engine setting themselves.

**Configuration Reference:**
The engine, the per-context modes and the connection are described on [Search Engines](./search-engines.md); the cluster setup is on [Configure Elasticsearch](../performance/configure-elasticsearch).

## Managing Indexers

### Re-indexing Commands

The `indexer:index` console command provides flexible re-indexing capabilities to maintain optimal data performance.

#### Command Syntax

```bash
php artisan indexer:index {--type=*} {--mode=*}
```

**Parameters:**
- `--type`: Specifies which indexers to reindex (optional, repeatable): `inventory`, `price`, `flat`, `search` (`elastic` on Bagisto 2.4)
- `--mode`: Sets reindexing mode - `full` or `selective` (default: selective). The search indexer only runs in `full` mode

### Common Re-indexing Operations

#### Full Re-indexing (All Types)
```bash
# Rebuilds all indexes completely
php artisan indexer:index --mode=full
```

::: tip When to Use Full Re-indexing
Use full re-indexing after major data imports, structural changes, or when troubleshooting index corruption issues.
:::

#### Selective Re-indexing (Specific Type)
```bash
# Re-index only price data
php artisan indexer:index --type=price

# Re-index only inventory data  
php artisan indexer:index --type=inventory

# Re-index only flat tables
php artisan indexer:index --type=flat

# Rebuild the search index (Elasticsearch)
php artisan indexer:index --type=search --mode=full
```

### Automated Scheduling

Bagisto automatically schedules critical indexers to maintain data accuracy:

| **Indexer** | **Schedule** | **Purpose** |
|---|---|---|
| **Price Indexer** | Daily at 00:01 | Updates product pricing |
| **Catalog Rules** | Daily at 00:01 | Applies promotional pricing |

The registrations live in the packages that own the commands, `Webkul\Product\Providers\ProductServiceProvider` and `Webkul\CatalogRule\Providers\CatalogRuleServiceProvider`:

```php
$this->callAfterResolving(Schedule::class, function (Schedule $schedule) {
    $schedule->command('indexer:index --type=price')->dailyAt('00:01');
});
```

The price indexer dispatches `catalog.product.price.reindex.before` and `.after`, and the catalog rule indexer `promotions.catalog_rule.reindex.before` and `.after`, so a listener (the full page cache is one) can react once prices have changed.

::: warning Production Requirement
For automated scheduling to work in production, ensure you have added the Laravel scheduler cron entry to your server's crontab:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

Without this cron entry, the automated indexer scheduling will not function properly.
:::

## Practical Implementation

Understanding indexers conceptually is important, but seeing how they work in real Bagisto code provides valuable insights for developers working with the system.

### How Indexers Work in Practice

Bagisto uses event listeners to automatically trigger indexing when products are created, updated, or deleted. Here's how the system maintains data consistency:

::: info Example Use Case
The following examples demonstrate indexing implementation from the **Product Listener** - one of many indexing scenarios in Bagisto. Similar indexing patterns are used throughout the system.
:::

#### Automatic Index Updates

**File:** `packages/Webkul/Product/src/Listeners/Product.php`

```php
public function afterCreate($product)
{
    $this->flatIndexer->refresh($product);

    $productIds = $this->getAllRelatedProductIds($product);

    IndexSearchJob::dispatch($productIds);
}
```

#### Chained Index Operations

When products are updated, multiple indexers run in sequence to maintain data consistency:

```php
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
```

`IndexSearchJob` is `Webkul\Product\Jobs\Search\IndexProducts` (`Jobs\ElasticSearch\UpdateCreateIndex` on Bagisto 2.4). The flat index is refreshed synchronously because the admin listing reads it on the very next request; the rest is queued.

### Event-Driven Indexing

::: info Automatic Updates
Bagisto automatically triggers indexing through Laravel events:
- **Product Created**: Flat and search indexes update
- **Product Updated**: Inventory, Price, and search indexes update in sequence
- **Product Deleted**: The product is removed from the search index; a configurable parent whose variant was deleted is reindexed
- **Order placed / refunded**: The inventory index of the ordered products updates
- **Product import**: The importer dispatches the same jobs per batch, and the Index phase of an import rebuilds price, inventory and search data for every imported row
:::

### Performance Optimization Strategies

Before diving into optimization strategies, it's important to understand that Bagisto's indexers are designed to keep your storefront responsive and data accurate, even as your catalog grows. By leveraging event-driven updates, background job queues, and batch processing, Bagisto ensures that indexing operations do not impact the user experience or slow down your application.

#### Job Queuing
```php
// Jobs are queued to prevent blocking user interactions
IndexSearchJob::dispatch($productIds);

// Chained jobs ensure proper sequence
Bus::chain([
    new UpdateCreateInventoryIndexJob($productIds),
    new UpdateCreatePriceIndexJob($productIds),
])->dispatch();
```

With `QUEUE_CONNECTION=sync` (the shipped default) all of this still runs inside the request that saved the product, which is why a store with Elasticsearch or a large catalog should move to a real queue driver; see [Queue, Jobs & Scheduling](./queue-jobs-scheduling.md).

#### Batch Processing
```php
// Process multiple products efficiently
$productIds = [1, 2, 3, 4, 5]; // Multiple product IDs
UpdateCreatePriceIndexJob::dispatch($productIds);
```

::: tip Development Best Practices
- **Queue Workers**: Ensure queue workers are running for background indexing
- **Error Handling**: Monitor failed jobs and implement retry mechanisms
- **Performance Testing**: Test indexing performance with large product datasets
- **Event Monitoring**: Log indexing events for debugging and optimization
:::

### Monitoring Index Health

Before relying on indexers in a production environment, it's important to monitor their health and ensure all background processes are running smoothly. Regular checks help prevent data inconsistencies and performance bottlenecks.

#### Check Queue Status
```bash
# Monitor indexing job queues
php artisan queue:work --queue=default

# Check failed indexing jobs
php artisan queue:failed
```

#### Debug Index Issues
```bash
# Clear failed jobs and retry
php artisan queue:retry all

# Monitor real-time indexing
php artisan queue:listen --verbose
```

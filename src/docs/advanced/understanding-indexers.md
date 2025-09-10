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

### Elasticsearch Integration

Leverages Elasticsearch's powerful search capabilities to provide fast, scalable product search functionality.

**Advanced Search Features:**
- **Full-text Search**: Comprehensive product content indexing
- **Faceted Navigation**: Dynamic filtering and categorization
- **Autocomplete**: Real-time search suggestions
- **Analytics**: Search performance and user behavior insights

::: tip Performance Impact
Elasticsearch can handle millions of products while maintaining sub-second search response times. Perfect for large catalogs and complex search requirements.
:::

**Configuration Reference:**
For detailed Elasticsearch setup, see [Configure Elasticsearch](../performance/configure-elasticsearch) guide.

## Managing Indexers

### Re-indexing Commands

The `indexer:index` console command provides flexible re-indexing capabilities to maintain optimal data performance.

#### Command Syntax

```bash
php artisan indexer:index {--type=*} {--mode=*}
```

**Parameters:**
- `--type`: Specifies which indexers to reindex (optional)
- `--mode`: Sets reindexing mode - `full` or `selective` (default: selective)

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
```

### Automated Scheduling

Bagisto automatically schedules critical indexers to maintain data accuracy:

| **Indexer** | **Schedule** | **Purpose** |
|---|---|---|
| **Price Indexer** | Daily at 00:01 | Updates product pricing |
| **Catalog Rules** | Daily at 00:01 | Applies promotional pricing |

```php
// Scheduled commands in Laravel
$schedule->command('indexer:index --type=price')->dailyAt('00:01');
$schedule->command('product:price-rule:index')->dailyAt('00:01');
```

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

```php
// Product Listener Example - Real Bagisto Implementation
public function afterCreate($product)
{
    // Refresh flat index immediately
    $this->flatIndexer->refresh($product);
    
    // Get all related product IDs (variants, bundles, grouped)
    $productIds = $this->getAllRelatedProductIds($product);
    
    // Queue Elasticsearch indexing
    UpdateCreateElasticSearchIndexJob::dispatch($productIds);
}
```

#### Chained Index Operations

When products are updated, multiple indexers run in sequence to maintain data consistency:

```php
public function afterUpdate($product)
{
    // Update flat index first
    $this->flatIndexer->refresh($product);
    
    $productIds = $this->getAllRelatedProductIds($product);
    
    // Chain indexing jobs for optimal performance
    Bus::chain([
        new UpdateCreateInventoryIndexJob($productIds),
        new UpdateCreatePriceIndexJob($productIds), 
        new UpdateCreateElasticSearchIndexJob($productIds),
    ])->dispatch();
}
```

### Event-Driven Indexing

::: info Automatic Updates
Bagisto automatically triggers indexing through Laravel events:
- **Product Created**: Flat and Elasticsearch indexes update
- **Product Updated**: Inventory, Price, and Elasticsearch indexes update in sequence  
- **Product Deleted**: Elasticsearch index removes product data
:::

### Performance Optimization Strategies

Before diving into optimization strategies, it's important to understand that Bagisto's indexers are designed to keep your storefront responsive and data accurate, even as your catalog grows. By leveraging event-driven updates, background job queues, and batch processing, Bagisto ensures that indexing operations do not impact the user experience or slow down your application.

#### Job Queuing
```php
// Jobs are queued to prevent blocking user interactions
UpdateCreateElasticSearchIndexJob::dispatch($productIds);

// Chained jobs ensure proper sequence
Bus::chain([
    new UpdateCreateInventoryIndexJob($productIds),
    new UpdateCreatePriceIndexJob($productIds),
])->dispatch();
```

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

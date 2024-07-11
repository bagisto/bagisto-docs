# Performance

[[TOC]]

In the realm of online stores, [web vitals](https://web.dev/vitals/) have become increasingly crucial. **Bagisto** prioritises good [LCP](https://web.dev/lcp/) and [CLS](https://web.dev/cls/) to ensure an optimal user experience.

Additionally, **Bagisto** has seamlessly integrated [ElasticSearch](https://bagisto.com/en/elasticsearch-for-bagisto/) to further enhance user experience.

## Indexing

When dealing with large volumes of data and retrieving complex information like variants and prices, optimizing queries becomes a challenge.

Indexers create and maintain indexes, which are data structures optimized for quick retrieval of information. When data is added to a system, the indexer analyzes it and extracts key information or metadata. This metadata is then stored in the index, along with pointers to the original data.

By indexing data, the system can quickly locate relevant information without having to scan through every piece of data sequentially. This greatly speeds up search and retrieval operations, especially in large datasets.

Indexers improve the overall user experience. Users can quickly find what they're looking for, leading to increased satisfaction and productivity.


To enhance **Bagisto's** performance, the following indexers play a crucial role:

### Price Indexing

Price indexing is a crucial component of eCommerce operations, ensuring that product prices are accurately reflected across the storefront. This documentation will delve into how Bagisto handles price indexing.

The price indexing process in Bagisto involves updating product prices in the database whenever changes occur. This process ensures that the latest price information is reflected accurately across the storefront. 

### Inventory Indexing

Similar to price indexing, the inventory indexing process in Bagisto involves updating product quantities in the database. Whenever a product is purchased, returned, or restocked, Bagisto automatically adjusts the inventory levels accordingly. This real-time synchronization ensures that inventory information remains accurate and up to date.

### ElasticSearch 

As Elastic is designed to handle large amounts of data and provide fast and scalable search capabilities, **Bagisto** leverages its capabilities to index all products, thereby significantly enhancing the search functionality.

#### Configuration Setup:

To configure Elasticsearch, please refer to the [Configuration Setup](https://devdocs.bagisto.com/2.x/advanced/indexing-products-to-elasticsearch.html) documentation.

### Reindexing

The `ReindexCommands` console command is responsible for reindexing data within Bagisto, facilitating efficient data retrieval and search functionality. This command offers flexibility in selecting specific indexers and reindexing modes to suit varying requirements.

By default, reindexing is executed at the scheduled time or based on specific events, such as product creation or updates. However, there may be situations where you need to manually trigger reindexing. This can be done using the following commands:

#### Command Signature

The command `php artisan indexer:index` in Bagisto is used to manage the reindexing of various indexers. Here is a detailed description of its usage:

```shell
php artisan indexer:index {--type=*} {--mode=*}
```    
- **--type**: Specifies the type of indexers to reindex.
- **--mode**: Specifies the reindexing mode, either `full` for full reindexing or selective for `selective` reindexing (default).

- **Full Reindexing for All Types**

```shell
php artisan indexer:index --mode=full
```
This command performs a full reindexing for all indexers by default.


- **Selective Reindexing**

```shell
php artisan indexer:index --type=price
```

This command performs selective reindexing specifically for the price indexer.

Price and price rule indexing are scheduled to reindex at a specific time each day to ensure that the latest pricing information is accurately reflected in searches and displays. The following commands are scheduled to run daily at 00:01 AM:

```php
$schedule->command('indexer:index --type=price')->dailyAt('00:01');
```

## Full Page Cache 

Bagisto introduces Full Page Cache support to deliver lightning-fast page loading, improved SEO, scalability, and reduced server load for enhanced eCommerce performance.

Full Page Cache is a mechanism that stores entire HTML pages in the cache. When a request is made for the same page, the cache seamlessly serves the page without the need for re-executing server-side logic. This process allows for faster page load times as the cache provides a quick and efficient way to serve the requested page without the need to run the server-side logic again. This reduces the need for database queries, template rendering, and other resource-intensive tasks, resulting in faster page load times.

We used the Spatie Laravel Responsecache Package in Bagisto

### How to Enable Full Page Cache In Bagisto

- Go to the .env Configuration file

- Set RESPONSE_CACHE_ENABLED=true

### How to set Cache duration and other Configuration

- Navigate to  `config/responsecache.php.` this path to adjust cache duration and explore other configuration settings for Full Page Cache in Bagisto. Here, you’ll find all the configurations related to Full Page Cache.

### Full page cache supported pages

- Home Page
- Category Page
- Product Page

### Supported Cache Drivers

- File
- Memcached
- Redis
- DynamoDB

### Clearing  Response Cache with Artisan Commands:

To effortlessly clear your application’s response cache in Bagisto, utilize the following command:

```php
php artisan cache:clear
```

### Cache invalidation

Here are some common techniques for cache invalidation in Laravel:

**Create the EventServiceProvider class**

We create an EventServiceProvider in the `packages/Webkul/FPC/src/Providers/EventServiceProvider.php` directory. This file contains the code for the event service provider, which can be used to register events and their listeners. To register an event and its listener, you can add them to the $listen array in the EventServiceProvider class.

```php
<?php

namespace Webkul\FPC\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'customer.review.update.after' => [
            'Webkul\FPC\Listeners\Review@afterUpdate',
        ],
    ];
}
```

**Register the service in the FPC service provider**

In the `packages/Webkul/FPC/src/Providers/FPCServiceProvider.php` file, locate the boot()  method. Here you can see we add EventServiceProvider within the boot() method.

```php
<?php

namespace Webkul\FPC\Providers;

use Illuminate\Support\ServiceProvider;

class FPCServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->register(EventServiceProvider::class);
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
    }
}
```

For instance, in the realm of event-based cache management, consider the event ‘customer.review.update.after’ triggered from the review controller upon a review update. This seamless integration guarantees swift cache clearance or update, maintaining synchronization with the latest review modifications.

```php
/**
 * Update the specified resource in storage.
 *
 * @param  int  $id
 * @return \Illuminate\Http\Response
 */
public function update($id)
{
    Event::dispatch('customer.review.update.before', $id);

    $review = $this->productReviewRepository->update(request()->only(['status']), $id);

    Event::dispatch('customer.review.update.after', $review);

    session()->flash('success', trans('admin::app.customers.reviews.update-success', ['name' => 'admin::app.customers.reviews.review']));

    return redirect()->route('admin.customers.customers.review.index');
}
```

In the directory `packages/Webkul/FPC/src/Listeners` you can find the `afterUpdate()` method. This method clears the cache using the `forget()` method when a review is updated.

```php
/**
 * After review is updated
 *
 * @param  \Webkul\Product\Contracts\Review  $review
 * @return void
 */
public function afterUpdate($review)
{
    ResponseCache::forget('/' .  $review->product->url_key);
}
```

## Laravel Octane 

[Laravel Octane](https://laravel.com/docs/10.x/octane) is a performance-boosting package designed to enhance the speed, efficiency, and scalability of Laravel applications, including Bagisto.

- Drives remarkable improvements in page load times, ensuring a seamless and responsive shopping experience.

- Provides the scalability required to accommodate the growth of e-commerce businesses.

- Forms the foundation for optimizing Bagisto's performance and meeting the demands of modern e-commerce.
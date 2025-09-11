# Configure Full Page Cache (FPC)

Bagisto's Full Page Cache delivers lightning-fast page loading, improved SEO, enhanced scalability, and reduced server load for superior eCommerce performance.

::: info What You'll Learn
- How to enable and configure Full Page Cache
- Understand cache invalidation strategies
- Implement custom cache listeners
- Optimize cache performance for your store
:::

## Overview

Full Page Cache stores complete HTML pages in memory, serving them instantly without re-executing server-side logic. This dramatically reduces database queries, template rendering, and resource-intensive operations for **significantly faster page load times**.

::: tip Built on Spatie
Bagisto uses the proven [Spatie Laravel Responsecache Package](https://github.com/spatie/laravel-responsecache) for reliable cache management.
:::

## Configuration

Before enabling Full Page Cache, ensure your environment meets the minimum requirements and that you have a backup of your `.env` and configuration files. Proper configuration is essential for optimal performance and to avoid serving outdated content.

### Enable Full Page Cache

Add the following configuration to your `.env` file:

::: code-group

```properties [Environment Setup]
# Enable Full Page Cache
RESPONSE_CACHE_ENABLED=true

# Optional: Set cache lifetime (in minutes)
RESPONSE_CACHE_LIFETIME=10080  # 1 week

# Optional: Set cache driver
RESPONSE_CACHE_DRIVER=file     # file, redis, memcached, dynamodb
```

```bash [Quick Enable]
# Add to your .env file
echo "RESPONSE_CACHE_ENABLED=true" >> .env
```

:::

### Configure Cache Settings

Customize cache behavior in `config/responsecache.php`:

```php
// config/responsecache.php

return [
    // Enable/disable cache
    'enabled' => env('RESPONSE_CACHE_ENABLED', false),
    
    // Cache lifetime in minutes
    'cache_lifetime_in_minutes' => env('RESPONSE_CACHE_LIFETIME', 60 * 24 * 7), // 1 week
    
    // Cache store to use
    'cache_store' => env('RESPONSE_CACHE_DRIVER', 'file'),
    
    // Add cache headers for debugging
    'add_cache_time_header' => env('APP_DEBUG', false),
    'cache_time_header_name' => 'laravel-responsecache',
];
```

## Supported Features

Bagisto FPC supports advanced features such as automatic cache invalidation, selective cache clearing, cache warming, and integration with multiple cache drivers. It is designed to work seamlessly with Bagisto's event system, ensuring that only relevant pages are cached and updated as your catalog changes.

### Cached Pages

Full Page Cache optimally works with these page types:

| Page Type | Performance Gain | SEO Impact |
|-----------|------------------|------------|
| **Home Page** | 🚀 Excellent | ⭐ High |
| **Category Pages** | 🚀 Excellent | ⭐ High |
| **Product Pages** | 🚀 Excellent | ⭐ Very High |

::: warning Dynamic Content
Pages with user-specific content (cart, wishlist, account) are automatically excluded from caching to ensure personalized experiences.
:::

### Cache Drivers

Choose the best cache driver for your infrastructure:

| Driver | Performance | Scalability | Setup Complexity |
|--------|-------------|-------------|------------------|
| **File** | ⭐⭐⭐ | ⭐⭐ | 🟢 Easy |
| **Redis** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 🟡 Moderate |
| **Memcached** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 🟡 Moderate |
| **DynamoDB** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 🔴 Complex |

::: tip Recommendation
- **Development**: Use `file` driver
- **Production**: Use `redis` for best performance
- **Enterprise**: Consider `dynamodb` for global scale
:::

## Cache Management

Full Page Cache can be managed easily using artisan commands and configuration options. You can clear the entire cache, target specific URLs, or automate cache clearing through event listeners. This ensures your store always serves up-to-date content while maintaining high performance.

### Clear All Cache

Remove all cached responses:

```bash
php artisan responsecache:clear
```

### Clear Specific URL

Target a specific page for cache removal:

```bash
php artisan responsecache:clear --url=https://yourstore.com/products/sample-product
```

::: warning Cache Clearing
Always clear cache after:
- Product updates
- Category changes
- Price modifications
- Inventory updates
:::

## Cache Invalidation

Bagisto's Full Page Cache (FPC) system uses event-driven cache invalidation to ensure data consistency while maintaining optimal performance. Here's how real-world cache invalidation works with actual Bagisto examples:

### Product Cache Invalidation

When products are updated in Bagisto, the FPC system automatically invalidates related cache entries using sophisticated relationship mapping:

::: code-group

```php [Product Listener - Real Bagisto Implementation]
<?php
namespace Webkul\FPC\Listeners;

use Spatie\ResponseCache\Facades\ResponseCache;
use Webkul\Product\Repositories\ProductBundleOptionProductRepository;
use Webkul\Product\Repositories\ProductGroupedProductRepository;
use Webkul\Product\Repositories\ProductRepository;

class Product
{
    ...
    /**
     * Update or create product page cache
     *
     * @param \Webkul\Product\Contracts\Product $product
     * @return void
     */
    public function afterUpdate($product)
    {
        $urls = $this->getForgettableUrls($product);
        
        ResponseCache::forget($urls);
    }
    ...
}
```

```php [Event Registration - Bagisto FPC]
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
        ...
        'catalog.product.update.after' => [
            'Webkul\FPC\Listeners\Product@afterUpdate',
        ],
        ...
    ];
}
```

:::

## Performance Optimization

### Granular Cache Strategy

::: tip Performance Benefits

- **Selective Clearing**: Only affected pages are invalidated, not entire cache
- **Relationship Mapping**: Complex product relationships are handled automatically
- **Batch Operations**: Multiple URLs are cleared in single operations
- **Memory Efficient**: Uses product IDs and relationships rather than loading full objects
:::

## Performance Benefits

Implementing Full Page Cache in Bagisto provides significant advantages:

| Metric | Improvement | Impact |
|--------|-------------|---------|
| **Page Load Time** | 60-80% reduction | 🚀 Excellent |
| **Server Load** | 70-90% reduction | ⚡ Outstanding |
| **Database Queries** | 95%+ reduction | 💾 Exceptional |
| **SEO Rankings** | Faster site speed | 📈 Improved |

### Performance Monitoring

Monitor your cache effectiveness:

```bash
# Check cache statistics (Redis example)
redis-cli info stats

# Look for:
# - keyspace_hits: successful cache retrievals
# - keyspace_misses: cache misses requiring generation
```

### Production Checklist

::: warning Production Considerations
- ✅ Configure appropriate cache lifetime
- ✅ Set up cache invalidation events
- ✅ Monitor cache hit rates
- ✅ Implement cache warming for critical pages
- ✅ Configure proper cache drivers
- ✅ Set up monitoring and alerting
:::

::: tip Developer Note
Always ensure proper cache invalidation strategies are in place when implementing Full Page Cache to prevent serving stale content to your users.
:::

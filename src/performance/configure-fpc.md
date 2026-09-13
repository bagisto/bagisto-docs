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

### Enable Full Page Cache

The switch is in the admin. Go to **Configure → Cache Management → Full Page Cache**:

- **Enabled** turns caching on or off (on by default).
- **Lifetime** is how long a rendered page is kept, in minutes. Leave it empty to use the value from `config/responsecache.php`.
- **Flush** empties the cache so every storefront page is rendered again on its next visit.

`Webkul\FPC\CacheProfiles\FullPageCacheProfile` reads these two settings (`cache_management.full_page_cache.settings.enabled` and `.lifetime`) on every request. There is no `RESPONSE_CACHE_ENABLED` environment variable; `config/responsecache.php` hard-codes `'enabled' => true` and leaves the decision to the admin.

### Environment keys

Where the cache is stored and its default lifetime come from `.env`:

```properties
# Cache store used for responses: file, redis, memcached, dynamodb
RESPONSE_CACHE_DRIVER=file

# Default lifetime in seconds, used when the admin lifetime is empty
RESPONSE_CACHE_LIFETIME=604800

# Optional tag, for stores that support tagging
RESPONSE_CACHE_TAG=

# Bypass a cached page from a client by sending this header
CACHE_BYPASS_HEADER_NAME=
CACHE_BYPASS_HEADER_VALUE=
```

None of these is present in `.env.example`; add the ones you need. With `APP_DEBUG=true` every response carries `Bagisto-FPC`, `Bagisto-FPC-Age`, `Bagisto-FPC-Status` and `Bagisto-FPC-Key` headers that show whether a page came from the cache and under which key.

### Configuration file

`config/responsecache.php` wires Bagisto's profile, hasher, serializer and replacers into Spatie's package:

```php
use Spatie\ResponseCache\Replacers\CsrfTokenReplacer;
use Spatie\ResponseCache\Serializers\JsonSerializer;
use Webkul\FPC\CacheProfiles\FullPageCacheProfile;
use Webkul\FPC\Hasher\DefaultHasher;
use Webkul\FPC\Replacers\FlashMessagesReplacer;
use Webkul\FPC\Replacers\MiniCartReplacer;

return [
    'enabled' => true,

    'cache' => [
        'store' => env('RESPONSE_CACHE_DRIVER', 'file'),
        'lifetime_in_seconds' => (int) env('RESPONSE_CACHE_LIFETIME', 60 * 60 * 24 * 7),
        'tag' => env('RESPONSE_CACHE_TAG', ''),
    ],

    'ignored_query_parameters' => [
        'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid',
    ],

    'cache_profile' => FullPageCacheProfile::class,
    'hasher' => DefaultHasher::class,
    'serializer' => JsonSerializer::class,

    'replacers' => [
        CsrfTokenReplacer::class,
        FlashMessagesReplacer::class,
        MiniCartReplacer::class,
    ],
];
```

::: info Bagisto 2.4
2.4 uses `spatie/laravel-responsecache` 7 with a flat configuration file: the keys are `cache_store`, `cache_lifetime_in_seconds`, `cache_tag`, `add_cache_time_header` and `cache_time_header_name`, the serializer is the default one and there is no `ignored_query_parameters` list. The admin toggle, lifetime and flush button are the same.
:::

## Supported Features

Bagisto FPC supports advanced features such as automatic cache invalidation, selective cache clearing, cache warming, and integration with multiple cache drivers. It is designed to work seamlessly with Bagisto's event system, ensuring that only relevant pages are cached and updated as your catalog changes.

### Cached Pages

Only routes carrying the `cache.response` middleware are cached. In the Shop package those are:

| Route | Page |
|---|---|
| `shop.home.index` | Home page |
| `shop.product_or_category.index` | Every product and category page (the slug fallback) |
| `shop.cms.page` | CMS pages |
| `shop.home.contact_us` | Contact page |
| `shop.search.index` | Search results; only the `query` parameter is part of the cache key |
| `shop.compare.index` | Compare page |

A page is cached once per host, channel, locale and currency. Tracking parameters (`utm_*`, `gclid`, `fbclid`) are ignored when building the key.

::: warning Dynamic Content
Signed-in customers are never served cached pages, and their requests never fill the cache. The cart, checkout, account pages, the appearance preview and the admin are not on the list above. Inside a cached page the CSRF token, flash messages and the mini cart are replaced on every request, so they stay live.
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

Full Page Cache is managed with artisan commands and configuration options. You can clear the entire cache, target specific URLs, or automate cache clearing through event listeners. This ensures your store always serves up-to-date content while maintaining high performance.

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

The same command is what the **Flush** button on the Cache Management page runs, and **Clear All Cache** on that page runs it after `optimize:clear`.

## Cache Invalidation

Bagisto's Full Page Cache (FPC) system uses event-driven cache invalidation, so product, category, price, review, order, CMS, URL rewrite, section, channel and configuration changes drop the affected pages on their own. The event-to-listener map is on [Cache Strategy](../advanced/cache-strategy.md#what-invalidates-the-cache). Here's how real-world cache invalidation works with actual Bagisto examples:

### Product Cache Invalidation

When products are updated in Bagisto, the FPC system automatically invalidates related cache entries using sophisticated relationship mapping:

::: code-group

```php [Product Listener]
<?php

namespace Webkul\FPC\Listeners;

use Webkul\FPC\Concerns\ForgetsPages;

class Product
{
    use ForgetsPages;

    /**
     * Forget the product's own page, every category page it sits in and the home page.
     */
    public function afterUpdate($product)
    {
        $this->forgetPages($this->getForgettableUrls($product));
    }
}
```

```php [Event Registration]
<?php

namespace Webkul\FPC\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Webkul\FPC\Listeners\Product;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'catalog.product.update.after' => [
            [Product::class, 'afterUpdate'],
        ],
    ];
}
```

:::

`ForgetsPages::forgetPages()` expands each path to every channel host and every locale and currency combination, because each of those is a separate cache entry, and `getForgettableUrls()` includes the parent bundle, grouped and configurable products so a variant change refreshes the page shoppers actually visit.

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
- ✅ Set `RESPONSE_CACHE_DRIVER=redis` on a multi-server deployment so every node shares one cache
- ✅ Choose a lifetime that matches how often prices and stock change
- ✅ Invalidate from your own packages when they change what a cached page shows
- ✅ Monitor cache hit rates
- ✅ Keep `APP_DEBUG=false`, which also removes the `Bagisto-FPC-*` diagnostic headers
:::

::: tip Developer Note
Always ensure proper cache invalidation strategies are in place when implementing Full Page Cache to prevent serving stale content to your users.
:::

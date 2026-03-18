# Cache Strategy

Bagisto implements a multi-layered caching strategy to optimize performance across the storefront, admin panel, and data access layers. Understanding these layers helps you build performant custom packages and debug cache-related issues.

## Cache Layers Overview

| Layer | Technology | Scope | Configuration |
|---|---|---|---|
| **Application Cache** | File / Redis / Memcached | Key-value storage for config, routes | `CACHE_STORE` in `.env` |
| **Repository Cache** | Prettus L5 Repository | Automatic model query caching | `config/repository.php` |
| **Full Page Cache (FPC)** | Spatie ResponseCache | Caches entire HTTP responses | `RESPONSE_CACHE_ENABLED` in `.env` |
| **Elasticsearch** | Elasticsearch 7.17+ | Product search index | `config/elasticsearch.php` |
| **Session Store** | Database / Redis | User session data | `SESSION_DRIVER` in `.env` |

## Application Cache

Configured via the `CACHE_STORE` environment variable. Default is `file`:

```properties
# .env
CACHE_STORE=file
```

For production, Redis is recommended:

```properties
CACHE_STORE=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

Clear the application cache:

```bash
php artisan cache:clear

# Or clear everything at once
php artisan optimize:clear
```

## Repository Cache

Bagisto uses the [Prettus L5 Repository](https://github.com/prettus/l5-repository) package, which provides automatic query-level caching for repository operations. Configuration is in `config/repository.php`.

### Automatic Invalidation

The `Webkul\Core\Listeners\CleanCacheRepository` listener automatically invalidates cached repository data when entities are created, updated, or deleted:

```
Event: RepositoryEntityCreated → Cache cleared for that repository
Event: RepositoryEntityUpdated → Cache cleared for that repository
Event: RepositoryEntityDeleted → Cache cleared for that repository
```

This is registered in `Webkul\Core\Providers\EventServiceProvider` and runs globally for all repositories.

::: tip No Manual Cache Clearing Needed
When you use the repository pattern (as Bagisto recommends), cache invalidation happens automatically. You don't need to manually clear caches after CRUD operations through repositories.
:::

## Full Page Cache (FPC)

The FPC package (`Webkul\FPC`) uses [Spatie ResponseCache](https://github.com/spatie/laravel-responsecache) to cache complete HTTP responses for storefront pages.

### Enabling FPC

```properties
# .env
RESPONSE_CACHE_ENABLED=true
```

### How It Works

The `CacheResponse` middleware in the Shop package caches GET responses for guest users. When content changes, event listeners automatically invalidate affected URLs:

| Event | What Gets Invalidated |
|---|---|
| Product create/update/delete | Product page URL + category pages |
| Category update/delete | Category page URL |
| Review update/delete | Corresponding product page |
| Order placed / Refund issued | Product pages (stock changes) |
| CMS page update/delete | CMS page URL |
| URL rewrite change | Old and new URLs |
| Theme customization change | Full cache clear |
| Core configuration change | Full cache clear |
| Channel update | Full cache clear |

### FPC Event Listeners

These listeners are in `packages/Webkul/FPC/src/Listeners/` and are registered via `Webkul\FPC\Providers\EventServiceProvider`:

- `Product.php` — Invalidates product and category URLs
- `Category.php` — Invalidates category URLs
- `Review.php` — Invalidates reviewed product URLs
- `Order.php` — Invalidates product URLs for ordered items
- `Refund.php` — Invalidates product URLs for refunded items
- `Page.php` — Invalidates CMS page URLs
- `URLRewrite.php` — Invalidates rewritten URLs
- `ThemeCustomization.php` — Clears entire cache or specific URLs
- `CoreConfig.php` — Clears entire response cache

::: warning Admin Panel
The admin panel is explicitly excluded from response caching via the `NoCacheMiddleware` applied to all admin routes. This ensures admin users always see fresh data.
:::

## Cache in Custom Packages

When building custom packages that modify data visible on the storefront, make sure to invalidate FPC for affected URLs:

```php
use Spatie\ResponseCache\Facades\ResponseCache;

// Clear specific URLs
ResponseCache::forget('/products/my-product');

// Clear everything
ResponseCache::clear();
```

For repository-level cache, simply using the repository pattern ensures automatic invalidation. If you bypass the repository and use Eloquent directly, cached data may become stale.

## Cache Configuration for Production

Recommended `.env` settings for production:

```properties
CACHE_STORE=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
RESPONSE_CACHE_ENABLED=true

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

Run these commands after deployment:

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
```

To clear all caches at once:

```bash
php artisan optimize:clear
```

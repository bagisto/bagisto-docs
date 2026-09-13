# Cache Strategy

Bagisto implements a multi-layered caching strategy to optimize performance across the storefront, admin panel, and data access layers. Understanding these layers helps you build performant custom packages and debug cache-related issues.

## Cache Layers Overview

| Layer | Technology | Scope | Configuration |
|---|---|---|---|
| **Application Cache** | Database / File / Redis / Memcached | Key-value storage for config, routes, repository results | `CACHE_STORE` in `.env` |
| **Repository Cache** | Prettus L5 Repository on top of the application cache | Automatic model query caching | `config/repository.php` |
| **Full Page Cache (FPC)** | Spatie ResponseCache | Caches entire HTTP responses | **Configure → Cache Management** and `config/responsecache.php` |
| **Image Cache** | HTTP caching only | Resized images | `config/imagecache.php` |
| **Search Index** | Elasticsearch | Product search index | **Configure → Search Engines** |
| **Session Store** | Database / Redis | User session data | `SESSION_DRIVER` in `.env` |

## Application Cache

Configured via the `CACHE_STORE` environment variable. The shipped `.env.example` uses the `database` store on the current development version (`file` on Bagisto 2.4); the `cache` table is created by a root migration.

```properties
# .env
CACHE_STORE=database
```

For production, Redis is recommended:

```properties
CACHE_STORE=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

`config/cache.php` sets `serializable_classes` to `true` on purpose: the repository cache stores Eloquent models and collections, which Laravel 13's default of `false` would return as incomplete objects.

Clear the application cache:

```bash
php artisan cache:clear

# Or clear everything at once
php artisan optimize:clear
```

## Repository Cache

Bagisto uses the [Prettus L5 Repository](https://github.com/prettus/l5-repository) package, and `Webkul\Core\Eloquent\Repository` implements its `CacheableInterface`. Caching is off by default: `config/repository.php` ships `'enabled' => false`, and even when enabled only the repositories listed under `cache.repositories` in that file take part. For those, `all()`, `paginate()` and the finders cache their results; `find()` and `findOrFail()` are redefined without caching and always query the database.

### Automatic Invalidation

Each cache key carries a generation token, and every `create()`, `update()` and `delete()` through a cached repository advances it. The `Webkul\Core\Listeners\CleanCacheRepository` listener, registered in `Webkul\Core\Providers\EventServiceProvider`, does the same on Prettus' `RepositoryEntityCreated`, `RepositoryEntityUpdated` and `RepositoryEntityDeleted` events.

::: tip Opt in deliberately
A repository in your own package is not cached unless you enable the cache and add the class to `cache.repositories`. Once you do, write through the repository: a table changed with Eloquent or the query builder directly serves stale reads until the token moves for another reason.
:::

## Full Page Cache (FPC)

The FPC package (`Webkul\FPC`) uses [Spatie ResponseCache](https://github.com/spatie/laravel-responsecache) to cache complete HTTP responses for storefront pages.

### Enabling FPC

The switch is in the admin: **Configure → Cache Management → Full Page Cache** has an **Enabled** toggle (on by default), a **Lifetime** in minutes and a **Flush** button. `config/responsecache.php` hard-codes `'enabled' => true`; the `RESPONSE_CACHE_ENABLED` variable is not read. The environment keys that do apply are `RESPONSE_CACHE_DRIVER` (default `file`) and `RESPONSE_CACHE_LIFETIME` in seconds (default one week), which the admin lifetime overrides when set.

### How It Works

`Webkul\FPC\CacheProfiles\FullPageCacheProfile` decides per request. A response is cached when the route carries the `cache.response` middleware, the admin toggle is on and no customer is signed in. The seven storefront routes that carry it are the home page, the product/category slug fallback, CMS pages, the contact page (and its POST), the search page and the compare page. The cache key includes the host, channel, locale and currency, and drops every query parameter except `query` on the search page and the tracking parameters listed in `ignored_query_parameters`.

Three replacers punch holes for content that must stay live inside a cached page: the CSRF token, flash messages and the mini cart.

### What Invalidates the Cache

| Event | What Gets Invalidated |
|---|---|
| Product create/update/delete | The product page, every category page it sits in, the home page, and the same for its parent bundle/grouped/configurable products |
| Category create/update/delete | Category page URL |
| Price reindex (`catalog.product.price.reindex.after`, `promotions.catalog_rule.reindex.after`) | The affected products, or the whole cache when every price was reindexed |
| Review update/delete | Corresponding product page |
| Order placed / cancelled, refund issued | Product pages of the items (stock changes) |
| CMS page update/delete | CMS page URL |
| URL rewrite update/delete | Old and new URLs |
| Section create/update/delete | The home page, or everything when the section type renders in the layout |
| Channel update | Full cache clear |
| Configuration save | Full cache clear |

Targeted flushes go through `Webkul\FPC\Concerns\ForgetsPages`, which forgets every URL for every channel host, locale and currency combination, because each is a separate cache entry.

### FPC Event Listeners

The listeners live in `packages/Webkul/FPC/src/Listeners/` and are registered in `Webkul\FPC\Providers\EventServiceProvider`: `Product`, `Category`, `Price`, `Review`, `Order`, `Refund`, `Page`, `URLRewrite`, `Section`, `Channel` and `CoreConfig`.

::: warning Admin Panel
The admin panel is explicitly excluded from response caching via the `NoCacheMiddleware` applied to all admin routes. This ensures admin users always see fresh data.
:::

## Image Cache

Resized images at `/cache/{template}/{path}` are not written to disk. The controller resizes on every request and relies on an `ETag` and a `Cache-Control: max-age` header of `imagecache.lifetime` minutes (30 days by default). There is nothing to clear; a changed template takes effect when a client revalidates. See [Image Cache Templates](../theme-development/image-cache-templates.md).

## Cache in Custom Packages

When building custom packages that modify data visible on the storefront, make sure to invalidate FPC for affected URLs:

```php
use Spatie\ResponseCache\Facades\ResponseCache;

// Clear specific URLs
ResponseCache::forget('/products/my-product');

// Clear everything
ResponseCache::clear();
```

For a package that renders inside a cached page, use `Webkul\FPC\FullPageCache::willCache()` in the view to decide whether to emit a replacer placeholder instead of live content.

For repository-level cache, writing through a cached repository ensures automatic invalidation.

## Cache Configuration for Production

Recommended `.env` settings for production:

```properties
CACHE_STORE=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
RESPONSE_CACHE_DRIVER=redis

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

The buttons under **Configure → Cache Management** run `config:cache`, `route:cache`, `view:cache` and `optimize` on the build side, and `config:clear`, `cache:clear`, `clear-compiled`, `event:clear`, `route:clear`, `view:clear` and `optimize:clear` on the clear side (`Webkul\Admin\Services\CacheManagerService`); the full page cache has its own **Flush** button. To clear all caches at once:

```bash
php artisan optimize:clear
```

# Cache Strategy

Bagisto caches at several layers, each with its own store and its own way of being invalidated. This page explains what each layer holds and what clears it, so a package can take part without serving stale data. Setting the caches up for production is on [Configure Full Page Cache](../performance/configure-fpc.md) and [Configure Load Balancing](../performance/configure-load-balancing.md).

## Cache Layers

| Layer | What it holds | Stored in | Cleared by |
|---|---|---|---|
| Application cache | Laravel's cache, and the two layers below it | `CACHE_STORE` | Writes, events, `cache:clear` |
| Repository cache | Reads of six core repositories | The application cache | Writes through the repository |
| Catalog API cache | Guest responses of the storefront product and category APIs | The application cache | Catalog, price, review and order events |
| Full page cache | Guest storefront HTML | `RESPONSE_CACHE_DRIVER` | The `Webkul\FPC` listeners, `responsecache:clear` |
| Image cache | Nothing on the server; resized images carry HTTP cache headers | Browsers and any CDN in front | Expiry |
| Framework caches | Configuration, routes, events and compiled views | `bootstrap/cache`, `storage/framework/views` | `optimize:clear` |

## Application Cache

`config/cache.php` reads the store from `CACHE_STORE`. On Bagisto 2.5 the default, in `config/cache.php` and in `.env.example`, is `database`, backed by the `cache` and `cache_locks` tables of the root migration `2026_02_03_151925_create_cache_table.php`; on Bagisto 2.4 it was `file`.

`config/cache.php` sets `serializable_classes` to `true` on purpose. The repository cache stores Eloquent models and collections, which Laravel 13's default of `false` would return as incomplete objects.

For Redis, set `CACHE_STORE=redis`. `.env.example` sets `REDIS_CLIENT=phpredis`, which needs the `phpredis` PHP extension; `predis/predis` is installed with Bagisto, so `REDIS_CLIENT=predis` works without it.

## Repository Cache

Every Bagisto repository extends `Webkul\Core\Eloquent\Repository`, which implements the Prettus `CacheableInterface`. Caching is off by default (`'enabled' => false` in `config/repository.php`) and switched on for the repositories under `cache.repositories`: `CoreConfigRepository`, `ChannelRepository`, `CountryRepository`, `CountryStateRepository`, `CurrencyRepository` and `LocaleRepository`, the ones read on nearly every request.

- **Cached methods.** The read methods of the Prettus `CacheableRepository` trait: `all()`, `paginate()`, `findByField()`, `findWhere()` and `getByCriteria()`, plus Bagisto's `findOneByField()` and `findOneWhere()`, which call them. `Repository` redefines `find()` and `findOrFail()` without caching, and methods the trait doesn't define, such as `findWhereIn()`, `first()` and `count()`, always query the database.
- **Lifetime.** Reads are kept for the global `cache.minutes` (10080), unless the repository class sets a `$cacheMinutes` property. A `minutes` key inside a `cache.repositories` entry isn't read.
- **Key.** It's built from the method, its arguments, the criteria and the full request URL, so the same read made on two URLs is cached twice.
- **Bypass.** A request carrying the `skipCache` parameter (`cache.params.skipCache`) reads past the cache.

### Invalidation

Each cached repository has a generation token, stored in the application cache under `repository-generation:{class}` and mixed into every key. `Webkul\Core\Listeners\CleanCacheRepository` listens for the Prettus `RepositoryEntityCreated`, `RepositoryEntityUpdated` and `RepositoryEntityDeleted` events, which the repository's `create()`, `update()` and `delete()` fire, and calls `Webkul\Core\Helpers\CacheGeneration::bump()`. The old entries become unreachable and expire on their own. The listener honours a per-repository `clean.on.created`, `updated` or `deleted` entry; switching cleaning off altogether is only the global `cache.clean.enabled`.

A write that bypasses the repository, such as a model's `save()` or a `DB::table()` update, fires none of these events and leaves the cached reads in place.

`CacheGeneration` also keeps the tokens it has read in a static property, `CacheGeneration::$tokens`, which nothing clears outside the test suite. A PHP-FPM request starts with it empty, but a queue worker or an Octane worker keeps the first token it read for each repository across jobs and requests, so its cached reads keep returning old values after another process writes. A listener that calls `CacheGeneration::flush()` fixes it; see [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md#refreshing-repository-cache-tokens-between-jobs) and [Configure Laravel Octane](../performance/configure-laravel-octane.md#repository-cache-tokens).

### Caching Your Own Repository

Turn caching on for a repository by adding it to `repository.cache.repositories` from your package's service provider, so `config/repository.php` stays untouched:

**File:** `packages/Webkul/Blog/src/Providers/BlogServiceProvider.php`

```php
<?php

namespace Webkul\Blog\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\Blog\Repositories\PostRepository;

class BlogServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        config([
            'repository.cache.repositories.'.PostRepository::class.'.enabled' => true,
        ]);
    }
}
```

Set the lifetime with a `protected $cacheMinutes = 60;` property on `PostRepository`, documented like any other property. An entry in `cache.repositories` can also set `allowed.only`, to cache only some methods, and `clean.on.created`, `updated` or `deleted`. Use `allowed.only` rather than `allowed.except`, which the per-repository lookup doesn't read. Cache a repository only when every write to its table goes through it.

## Catalog API Cache

The storefront product listing and category APIs cache their responses for guests through `Webkul\Shop\Helpers\CatalogApiCache`. A response is kept for an hour under a key built from a catalog version number, the channel, its theme, the locale, the currency and the request parameters. Signed-in customers aren't cached, because their responses carry wishlist state and group prices, and product searches with a term aren't cached either.

Guest responses are sent with `Cache-Control: max-age=60, public` and `Vary: Cookie`; customer responses with `Cache-Control: no-cache, private`.

`Webkul\Shop\Listeners\CatalogCache::flush()` increments the version (`shop_api_catalog_version`), which moves every cached response onto new keys. The Shop `EventServiceProvider` calls it on product and category create, update and delete, on `catalog.product.price.reindex.after` and `promotions.catalog_rule.reindex.after`, on review update and delete, and on `checkout.order.save.after`, `sales.order.cancel.after` and `sales.refund.save.after`. Imports fire none of these. To invalidate the API cache from a package, call `app(CatalogApiCache::class)->flush()` from a listener on your own event.

## Full Page Cache

`Webkul\FPC` stores guest storefront pages through [`spatie/laravel-responsecache`](https://github.com/spatie/laravel-responsecache) 8. The profile, hasher and replacers are wired in `config/responsecache.php`; the middleware alias is set in `ShopServiceProvider::boot()`:

| Piece | Class | Job |
|---|---|---|
| Middleware | `Webkul\Shop\Http\Middleware\CacheResponse`, aliased as `cache.response` | Follows search-term and URL-rewrite redirects, then serves or stores the page |
| Cache profile | `Webkul\FPC\CacheProfiles\FullPageCacheProfile` | Decides whether a request is cached and for how long |
| Hasher | `Webkul\FPC\Hasher\DefaultHasher` | Builds the cache key |
| Replacers | `CsrfTokenReplacer`, `Webkul\FPC\Replacers\FlashMessagesReplacer`, `MiniCartReplacer` | Put visitor-specific values into a cached page on every hit |

A page is cached when its route carries `cache.response`, the request is a non-AJAX `GET` whose response is successful or a redirect with a text or JSON content type, the `cache_management.full_page_cache.settings.enabled` setting is on (the default), and no customer is signed in. These Shop routes carry the middleware:

| Route | Page |
|---|---|
| `shop.home.index` | The home page |
| `shop.product_or_category.index` | Every product and category page (the fallback route) |
| `shop.cms.page` | CMS pages |
| `shop.home.contact_us` | The contact page |
| `shop.home.contact_us.send_mail` | Carries the middleware, but as a `POST` it's never stored |
| `shop.search.index` | The search results page |
| `shop.compare.index` | The compare page |

The key is built from the host, the path, the HTTP method and a suffix of `{channel}-{locale}-{currency}-`, so each page is stored once per host, channel, locale and currency. The hasher drops the query string, except `query` on the search page. Customer account routes and every admin route carry `Webkul\Core\Http\Middleware\NoCacheMiddleware`, which sends `Cache-Control: no-store, no-cache, must-revalidate, max-age=0` to browsers and proxies.

A view that prints something specific to the visitor inside a cached route must not write it into the page. The flash messages and mini cart views call `Webkul\FPC\FullPageCache::willCache()` and, when it returns `true`, print a marker that their replacer swaps for the live value on every response.

### What Invalidates the Cache

The listeners are in `packages/Webkul/FPC/src/Listeners/` and registered in `Webkul\FPC\Providers\EventServiceProvider`:

| Event | Listener | Forgets |
|---|---|---|
| `catalog.product.create.after`, `catalog.product.update.after`, `catalog.product.delete.before` | `Product` | The home page, and the page and category pages of the product and its related products |
| `catalog.category.create.after` | `Category` | The home page |
| `catalog.category.update.after`, `catalog.category.delete.before` | `Category` | The home page and the category's page in every locale |
| `catalog.product.price.reindex.after`, `promotions.catalog_rule.reindex.after` | `Price` | The affected products' pages as above, or the whole cache when no product ids are passed (a full price reindex) |
| `customer.review.update.after`, `customer.review.delete.before` | `Review` | The product's page |
| `checkout.order.save.after`, `sales.order.cancel.after` | `Order` | The ordered products' pages as above |
| `sales.refund.save.after` | `Refund` | The refunded products' pages as above |
| `cms.page.update.after`, `cms.page.delete.before` | `Page` | `/page/{url_key}` for every translation |
| `marketing.search_seo.url_rewrites.update.after`, `marketing.search_seo.url_rewrites.delete.before` | `URLRewrite` | The rewrite's request path |
| `section.create.after`, `section.update.after`, `section.delete.before` | `Section` | The whole cache when the section type renders in the layout, otherwise the home page |
| `core.channel.update.after` | `Channel` | The whole cache |
| `core.configuration.save.after` | `CoreConfig` | The whole cache |

A product's related products are the configurable, bundle and grouped parents of a simple product, or the variants of a configurable product. Publishing theme sections fires `section.update.after` for each published section. Imports fire only `data_transfer.imports.*` events, which none of these listeners handle.

Targeted forgets go through `Webkul\FPC\Concerns\ForgetsPages`. It forgets each path on the current host and on every channel's own hostname, under every locale and currency combination of every channel, because each is a separate entry. `ResponseCache::forget()` from Spatie builds a single key from the current request's channel, locale and currency, so from the admin or the console it misses the other variants.

### Invalidating Pages from Your Package

When your package changes what a cached page shows, fire your own event and forget the pages in a listener that uses `ForgetsPages`:

**File:** `packages/Webkul/Blog/src/Listeners/PageCache.php`

```php
<?php

namespace Webkul\Blog\Listeners;

use Webkul\FPC\Concerns\ForgetsPages;

class PageCache
{
    use ForgetsPages;

    /**
     * Forget the post's page and the home page that lists the latest posts.
     */
    public function afterPostUpdate($post): void
    {
        $this->forgetPages([
            $this->homePath(),
            '/blog/'.$post->slug,
        ]);
    }
}
```

Map the event in the `$listen` array of the package's `EventServiceProvider`, as `'blog.post.update.after' => [[PageCache::class, 'afterPostUpdate']]`, and register that provider from the package's main provider with `$this->app->register(EventServiceProvider::class)`, as `FPCServiceProvider` does; [Event Listeners](./event-listeners.md#register-a-listener) shows the full provider. Dispatch `blog.post.update.after` after the post is saved. Your own storefront routes are only cached when you add `cache.response` to them.

## Image Cache

`Webkul\ImageCache` keeps nothing on the server. It resizes the stored file on every request to `/cache/{template}/{path}` and sends an `ETag` and `Cache-Control: max-age={imagecache.lifetime × 60}, public`, 30 days by default. Browsers and any CDN in front hold the copies, so there's nothing to clear, and a changed template reaches a client only when its copy expires. Templates, the route and the configuration are on [Image Cache](../theme-development/image-cache-templates.md).

## Framework Caches

`php artisan optimize` caches the configuration, events, routes and views, and `php artisan optimize:clear` removes them and also runs `cache:clear`. The **Cache Management** configuration page runs the same commands through `Webkul\Admin\Services\CacheManagerService`:

| Action (key) | Runs |
|---|---|
| Rebuild All Cache (`build-all`) | `optimize` |
| Cache Config, Cache Routes, Cache Views (`build-config`, `build-routes`, `build-views`) | `config:cache`, `route:cache`, `view:cache` |
| Clear All Cache (`clear-all`) | `optimize:clear`, then `responsecache:clear` |
| Clear Config, Application, Compiled, Event, Route and View Cache (`clear-config`, `clear-cache`, `clear-compiled`, `clear-events`, `clear-routes`, `clear-views`) | `config:clear`, `cache:clear`, `clear-compiled`, `event:clear`, `route:clear`, `view:clear` |
| Flush Page Cache, in the Full Page Cache settings (`clear-page-cache`) | `responsecache:clear` |

These run in the web process that handles the click. The configuration, route, event and view caches are files, so on more than one server run `optimize` on every server as part of the deployment instead.

## Things to Watch

- **Clearing the page cache empties its whole store**, which is why it needs a store of its own; see [Configure Full Page Cache](../performance/configure-fpc.md#choose-where-pages-are-stored).
- **Per-server stores go stale.** A `file` store, or a `database` store on a local database, is only cleared on the server that handled the change. More than one web server needs shared stores.
- **Write through repositories.** A direct model or query builder write leaves the repository cache, and any page built from it, stale.
- **Long-running workers keep their repository cache tokens and their booted configuration.** Restart queue workers and reload Octane after a deployment or a configuration change.

## Related Pages

- [Configure Full Page Cache](../performance/configure-fpc.md): the page cache's store, lifetime, checks and clearing.
- [Configure Load Balancing](../performance/configure-load-balancing.md): the stores several web servers must share.
- [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md#running-workers-in-production): what a long-running worker keeps between jobs.

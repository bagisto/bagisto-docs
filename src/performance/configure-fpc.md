# Configure Full Page Cache

The full page cache stores the HTML of guest storefront pages and serves it without running the controller again. It's on by default; this page sets it up for production. Which routes are cached, how the key is built and which events forget which pages are on [Cache Strategy](../advanced/cache-strategy.md#full-page-cache).

## When You Need It

The shipped settings suit a single server. Change them when:

- the store runs on more than one web server, so every server must read the same stored pages;
- you move pages off the default `file` store, to Redis for example;
- you want a different lifetime, or need to compare cached and uncached response times.

## Step 1: Check the Switch and the Lifetime

Two settings in the **Cache Management** configuration section control the cache. They're global, not per channel or locale:

| Key | Default | Purpose |
|---|---|---|
| `cache_management.full_page_cache.settings.enabled` | on | Whether pages are cached at all |
| `cache_management.full_page_cache.settings.lifetime` | `RESPONSE_CACHE_LIFETIME` in minutes (10080) | How long a page is kept, in minutes |

`Webkul\FPC\CacheProfiles\FullPageCacheProfile` reads both on every request. `config/responsecache.php` sets `'enabled' => true` and leaves the decision to the setting; there is no `RESPONSE_CACHE_ENABLED` variable. On Bagisto 2.4 the admin switch only works when `RESPONSE_CACHE_ENABLED` is true in `.env` (`.env.example` sets it; the configuration default is `false`), and `config/responsecache.php` uses the flat keys of `spatie/laravel-responsecache` 7 (`cache_store`, `cache_lifetime_in_seconds`, `cache_tag`); take the 2.5 file from the release, as the [configuration files section](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#configuration-files-you-maintain-yourself) of `UPGRADE.md` says.

<a id="choose-where-pages-are-stored"></a>

## Step 2: Give Pages a Store of Their Own

These `.env` keys are read by `config/responsecache.php`. None of them is in `.env.example`:

| Key | Default | Purpose |
|---|---|---|
| `RESPONSE_CACHE_DRIVER` | `file` | The cache store, by name from `config/cache.php` |
| `RESPONSE_CACHE_LIFETIME` | `604800` | Lifetime in seconds, used when the admin lifetime is empty |
| `RESPONSE_CACHE_TAG` | empty | A tag for every stored page, on stores that support tags |
| `CACHE_BYPASS_HEADER_NAME`, `CACHE_BYPASS_HEADER_VALUE` | empty | A request header that skips the cache entirely |
| `RESPONSE_CACHE_HEADER_NAME`, `RESPONSE_CACHE_AGE_HEADER_NAME` | `Bagisto-FPC`, `Bagisto-FPC-Age` | Names of the debug headers |

The default `file` store keeps pages under `storage/framework/cache` on the server that rendered them, which is fine for a single server.

::: warning Clearing Empties the Whole Store
Without a tag, `ResponseCache::clear()` calls `flush()` on the store: `FLUSHDB` on a Redis connection, every row of the `cache` table on the `database` store. Bagisto calls it from `responsecache:clear`, from the Flush Page Cache and Clear All Cache actions, on every configuration save and channel update, when a layout section changes, and after a full price reindex. If `RESPONSE_CACHE_DRIVER` names the same store as `CACHE_STORE`, each of those also empties the application and repository caches.
:::

With Redis, add a connection that uses its own database in `config/database.php`, a store that uses it in `config/cache.php`, and point `RESPONSE_CACHE_DRIVER` at the store:

**File:** `config/database.php`

```php
'redis' => [
    // ...

    'responsecache' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'username' => env('REDIS_USERNAME'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', '6379'),
        'database' => env('RESPONSE_CACHE_REDIS_DB', '2'),
    ],
],
```

**File:** `config/cache.php`

```php
'stores' => [
    // ...

    'responsecache' => [
        'driver' => 'redis',
        'connection' => 'responsecache',
    ],
],
```

```properties
RESPONSE_CACHE_DRIVER=responsecache
```

The shipped `default` and `cache` Redis connections use databases `0` and `1`, so `2` keeps pages apart from sessions, queues and the application cache. Both files belong to your application, so an update doesn't overwrite them. On a Redis or Memcached store you can also set `RESPONSE_CACHE_TAG`, and clearing then flushes only the tagged pages; the `file` and `database` stores don't support tags.

## Test It

1. On a staging server, set `APP_DEBUG=true`, so each response carries the debug headers.
2. Request a page twice as a guest, without a customer's session cookie:

   ```bash
   curl -sI https://staging.example.com/ | grep -i bagisto-fpc
   ```

3. The second response should be a `HIT`:

   | Header | Value |
   |---|---|
   | `Bagisto-FPC-Status` | `MISS` when the page was rendered, `HIT` when it came from the cache |
   | `Bagisto-FPC` | When the stored page was cached |
   | `Bagisto-FPC-Age` | On a hit, the page's age in seconds |
   | `Bagisto-FPC-Key` | The cache key |

A signed-in customer is never served a cached page. In production, keep `APP_DEBUG=false`; to compare cached and uncached timings there, set `CACHE_BYPASS_HEADER_NAME` and `CACHE_BYPASS_HEADER_VALUE`, and a request carrying that header and value is neither served from nor stored in the cache.

## Clear the Cache

```bash
php artisan responsecache:clear
```

This clears every stored page. It's what the **Flush Page Cache** setting of the full page cache runs (the `clear-page-cache` action in `Webkul\Admin\Services\CacheManagerService`), and **Clear All Cache** (`clear-all`) runs it after `optimize:clear`. On several servers sharing a store, run it once.

`responsecache:clear --url=https://example.com/shirts` forgets one key only: the one for the channel, locale and currency the console resolves to, usually the defaults. On a store with more than one locale or currency, use `Webkul\FPC\Concerns\ForgetsPages` from code instead, as shown on [Cache Strategy](../advanced/cache-strategy.md#invalidating-pages-from-your-package).

## Things to Watch

- **More than one server.** Every server must read and write the same store. The listeners that forget pages run on the server that handled the admin's save, so with a `file` store the other servers keep the old pages until the lifetime ends. See [Configure Load Balancing](./configure-load-balancing.md).
- **Visitor data in a cached route** must go through a replacer; see [Cache Strategy](../advanced/cache-strategy.md#full-page-cache).
- **Imports and direct database changes fire no event.** Imports fire only `data_transfer.imports.*` events, which nothing in core handles for the page cache or the catalog API cache, so old pages stay until their lifetime ends and the storefront product and category APIs serve old responses for up to an hour. After an import, run `php artisan responsecache:clear`, or listen for `data_transfer.imports.completed` in your package and call `ResponseCache::clear()` and `app(\Webkul\Shop\Helpers\CatalogApiCache::class)->flush()`.
- **Web server page caches.** Use the full page cache rather than a web server cache such as Nginx's FastCGI cache, LiteSpeed's LSCache or Apache's `mod_cache`. A web server cache has none of the replacers and doesn't skip signed-in customers, so it stores the first visitor's HTML, including the CSRF token that storefront forms print, and serves it to everyone else.
- **Varnish replaces the built-in cache.** The [Varnish package](./configure-varnish.md) takes over the `cache.response` middleware, so the full page cache stops storing pages once it's installed.

## Related Pages

- [Cache Strategy](../advanced/cache-strategy.md): what each cache holds and which events clear it.
- [Configure Varnish](./configure-varnish.md): a reverse proxy in front of the store instead of the built-in cache.
- [Configure Load Balancing](./configure-load-balancing.md): the stores several web servers must share.

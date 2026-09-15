# Configure Varnish

Varnish is a reverse proxy that serves cached pages without reaching PHP. Bagisto's Varnish integration isn't in core: it's the separate [`bagisto/bagisto-varnish`](https://github.com/bagisto/bagisto-varnish) package, which tags storefront responses, purges Varnish when the catalog changes and renders personalized fragments through ESI or AJAX. This page follows the package's v2.1.0 release.

## When You Need It

Use it when you want cached storefront pages answered by Varnish instead of by PHP. The package targets Varnish 6.0 or later, and its README lists Bagisto 2.4.x and PHP 8.3 or later.

It replaces Bagisto's built-in [full page cache](./configure-fpc.md); the two are alternatives, not layers. Varnish sits between the public web server and the web server that runs Bagisto:

```text
browser -> web server (TLS) -> Varnish -> web server for Bagisto -> PHP
```

::: danger Signed-In Pages Can Be Served to Everyone
The package's `composer.json` declares no version constraints, so Composer won't stop you installing it on Bagisto 2.5. Its middleware marks every `cache.response` route `public`, and the exported VCL neither bypasses a signed-in storefront session nor varies the cache on it. Bagisto 2.5's storefront header prints the signed-in customer's name, so a page rendered for one customer can be cached and served to every visitor.

The package relies on its published header views, which move the customer's parts of the header into ESI fragments, but those views are copies of the 2.4 storefront. Before going live, move every customer-specific part of your 2.5 header and product card into the package's fragments, then test on a staging copy as a guest and as a signed-in customer. If you can't, don't install the package.
:::

## Step 1: Install the Package

1. Require the package:

   ```bash
   composer require bagisto/bagisto-varnish
   ```

2. Register the provider as the **last** entry in `bootstrap/providers.php`. The package doesn't use package discovery, and both it and the Shop package's provider set the `cache.response` alias while booting, so the last one wins:

   ```php
   <?php

   use Webkul\Varnish\Providers\VarnishServiceProvider;

   return [
       // ...

       VarnishServiceProvider::class,
   ];
   ```

3. Publish the configuration and the views, and clear the caches:

   ```bash
   php artisan vendor:publish --provider="Webkul\Varnish\Providers\VarnishServiceProvider"
   php artisan optimize:clear
   ```

Registering the provider is the switch, whatever the **Cache Application** setting says: every route that carries `cache.response` is then tagged for Varnish (`Webkul\Varnish\Http\Middleware\VarnishCache`) and no longer stored by the built-in cache.

## Step 2: Configure the Package

The settings are stored under `cache_management.varnish.configuration`, in a **Varnish** group of the **Cache Management** configuration section. The other fields stay hidden until **Cache Application** is set to Varnish, and every field except **Cache Application** is saved per channel.

| Setting | Key | Example |
|---|---|---|
| Cache Application | `cache_application` | Varnish |
| Access List | `varnish_access_list` | `localhost,127.0.0.1,::1`: the addresses allowed to purge, including the server Bagisto runs on |
| Varnish Host URL | `varnish_url` | `127.0.0.1:6081`: where Bagisto sends purge requests |
| Backend Host URL | `varnish_backend_url` | `127.0.0.1`: the host of the web server Varnish forwards to, without scheme or port |
| Backend Host Port | `varnish_backend_port` | `8080`: the port of that web server |
| Grace Period | `varnish_grace_period` | Written into the exported VCL as a request header only; the VCL itself sets `beresp.grace = 3d` |

The two host settings describe different hops. A wrong **Varnish Host URL** means purges never reach Varnish and pages never update; a wrong **Backend Host URL** or port means Varnish can't reach the store.

## Step 3: Install the VCL

The VCL is generated from the settings above, so save them first.

1. Download the VCL with **Export VCL** in the Varnish settings. The package also ships `vcls/6.0.vcl` for reference, but the exported file carries your backend, access list and grace period.
2. Compile it before loading it, then reload Varnish:

   ```bash
   sudo cp default.vcl /etc/varnish/default.vcl
   sudo varnishd -C -f /etc/varnish/default.vcl > /dev/null && echo "VCL compiles"
   sudo systemctl reload varnish
   ```

3. Purge everything once, with **Purge Everything** in the Varnish settings or `php artisan varnish:flush` on the Varnish host, so nothing cached under an earlier configuration survives.

## Test It

1. Request a page as a guest:

   ```bash
   curl -sI https://example.com/ | grep -i 'x-bagisto\|cache-control'
   ```

   A cacheable page carries `X-Bagisto-Tags` and `Cache-Control: public, s-maxage=604800, max-age=0, must-revalidate`.
2. Request it again. `X-Bagisto-Cache-Debug` reports `HIT`, `MISS` or `UNCACHEABLE`, and the second response should be a `HIT`.
3. Change a product on the page and request it once more. If it never returns to `MISS`, purges aren't reaching Varnish.
4. Check forms, flash messages and the mini cart as a guest, and the header as a signed-in customer.

## Cache Lifetime

The middleware gives the lifetime to `s-maxage`, which only shared caches such as Varnish read, and asks browsers to revalidate with `max-age=0`, because a purge only reaches Varnish. The lifetime is a middleware argument in minutes and defaults to 10080 (seven days):

```php
Route::get('offers', [OfferController::class, 'index'])
    ->name('shop.offers.index')
    ->middleware('cache.response:1440');
```

The exported VCL sets `beresp.ttl = 1h` in `vcl_backend_response`, which overrides `s-maxage`, so Varnish refreshes every page after an hour whatever the middleware argument says. Edit that line in the VCL to let the middleware lifetime apply.

## Purging

The package's listeners purge on product and category create, update and delete, review updates and deletes, orders and refunds, CMS pages, URL rewrites, sections, channel updates and configuration saves. A purge covers the page in every channel, locale and currency it was cached under.

To purge from your own code, use the facade. `forget()` takes one path or a list and purges every variant of each; `flush()` purges everything:

```php
use Webkul\Varnish\Facades\VarnishCache;

VarnishCache::forget('/shirts');

VarnishCache::forget(['/shirts', '/trousers']);

VarnishCache::flush();
```

From the command line, `varnish:flush` runs `varnishadm ban req.url ~ <url>`, so it only works on the host where `varnishadm` can reach Varnish:

```bash
php artisan varnish:flush

php artisan varnish:flush '^/shirts$'
```

Without an argument it bans every URL. The argument is a regular expression matched anywhere in the URL, so `/shirts` alone also bans `/shirts-for-men`; anchor it as above. The Varnish settings also offer **Purge by URLs** and **Purge Everything**.

## Personalized Fragments

Parts of a cached page that depend on the visitor, such as the customer menu, are rendered separately. Each fragment is a key and a Blade view in `config/varnish.php`:

**File:** `config/varnish.php`

```php
return [
    'esi' => [
        'views' => [
            'customer-desktop-dropdown' => 'varnish::shop.components.layouts.header.desktop.customer-dropdown',
            'customer-mobile-md-dropdown' => 'varnish::shop.components.layouts.header.mobile.customer-md-dropdown',
            'customer-mobile-sm-dropdown' => 'varnish::shop.components.layouts.header.mobile.customer-sm-dropdown',
            'customer-account-profile-drawer' => 'varnish::shop.components.layouts.header.mobile.customer-account-profile-drawer',
            'customer-status' => 'varnish::shop.components.layouts.header.customer-status',
        ],
    ],
];
```

Include a fragment in one of two ways:

```blade
<esi:include src="/esi?tag=customer-desktop-dropdown" />

<x-varnish::dynamic-view view="customer-desktop-dropdown" />
```

The ESI include is assembled by Varnish, so the fragment is in the first response, and a slow backend holds up the whole page. The dynamic view is fetched from `/esi?tag=…` the first time the visitor moves the mouse or touches the screen, so a keyboard-only visitor never gets it; use it for menus and dropdowns only.

## Removing the Package

1. Remove `VarnishServiceProvider::class` from `bootstrap/providers.php`, then run `composer remove bagisto/bagisto-varnish`.
2. Delete `config/varnish.php` and the views it published under `resources/themes/default/views`: `components/layouts/header/desktop/bottom.blade.php`, `components/layouts/header/mobile/index.blade.php` and `components/products/card.blade.php`.
3. Point the public web server back at the web server that runs Bagisto.
4. Run `php artisan optimize:clear` and `php artisan responsecache:clear`, so the Shop package's `cache.response` alias and the built-in page cache take over again.

The `cache_management.varnish.*` rows stay in `core_config`; they're harmless once the package is gone.

## Things to Watch

- **Signed-in pages.** The exported VCL bypasses `/customer` and `/checkout`; keep that if you edit it. It doesn't bypass other pages for a signed-in customer; see the warning at the top.
- **The built-in replacers no longer run.** The CSRF token that storefront forms print is cached with the page, and the flash messages and mini cart views, which call `Webkul\FPC\FullPageCache::willCache()`, still print the markers those replacers used to fill in.
- **Price reindexes don't purge.** Unlike the built-in page cache, the package doesn't purge on `catalog.product.price.reindex.after` or `promotions.catalog_rule.reindex.after`, so prices changed by the nightly price reindex or a catalog rule stay cached until the TTL ends.
- **Which responses Varnish skips.** `Cache-Control: private`, `no-cache` or `no-store`, or a status other than 200 or 404, makes Varnish skip a response. A `Set-Cookie` header doesn't: the VCL removes it and caches the page.
- **Purge everything after upgrading the package**, since pages already in Varnish carry the old tag format.
- **The settings live in `core_config`**, so `bagisto:install`, which wipes the database, removes them.

## Related Pages

- [Configure Full Page Cache](./configure-fpc.md): Bagisto's built-in page cache, which the package replaces.
- [Cache Strategy](../advanced/cache-strategy.md#what-invalidates-the-cache): the events core's own page cache listens for.
- [Configure Laravel Octane](./configure-laravel-octane.md): running the application itself in long-lived workers.

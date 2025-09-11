# Configure Varnish

Bagisto introduces Varnish Cache integration to deliver lightning-fast page loading, improved SEO, scalability, and reduced server load for enhanced eCommerce performance.

Varnish acts as a reverse proxy and caches full HTML pages. When a request is made for a cached page, Varnish serves it directly without executing backend logic. This reduces database queries, template rendering, and other resource-intensive operations, resulting in faster page loads.

Varnish also supports ESI (Edge Side Includes) and AJAX-based dynamic views, allowing dynamic content (like carts, dropdowns, or login blocks) to load fresh while the rest of the page remains cached.

## How to Enable Varnish Integration in Bagisto

### Install the Package

Install the package via Composer:

```bash
composer require bagisto/bagisto-varnish
```

### Register Service Provider

Register the service provider in `bootstrap/providers.php`:

```php
'providers' => [
    Webkul\Varnish\Providers\VarnishServiceProvider::class,
],
```

### Publish Configuration

Publish assets and configuration:

```bash
php artisan vendor:publish --provider="Webkul\Varnish\Providers\VarnishServiceProvider"
```

### Configure Alias

Configure the alias in `config/varnish.php`:

```php
return [
    'aliases' => [
        'Varnish' => \Webkul\Varnish\Facades\VarnishCache::class,
    ],
];
```

## Full Page Cache Supported Pages

- Home Page
- Category Page
- Product Page
- CMS Pages

## Varnish Server Configuration

### Install Varnish

Install Varnish 6.x on your server.

### Configure VCL File

Replace `/etc/varnish/default.vcl` with the provided file:

```
Varnish/vcls/6.0.vcl
```

### Restart Varnish

Restart Varnish:

```bash
sudo systemctl restart varnish
```

## Theme Integration

### Define Dynamic Views / Fragments

In `config/esi_views.php`, define a key and its Blade view path:

```php
return [
    'customer-desktop-dropdown' =>
        'varnish::shop.components.layouts.header.desktop.customer-dropdown',
];
```

**Configuration:**
- **Key** → Used in ESI or AJAX call (`customer-desktop-dropdown`)
- **Path** → Full Blade view path (`varnish::...`)

### ESI Include

```html
<esi:include src="/esi?tag=customer-desktop-dropdown" />
```

**ESI Characteristics:**
- Injects content at the Varnish level (server-side)
- Appears immediately on page load
- May affect LCP/FCP if backend is slow

### AJAX Dynamic View (Recommended for LCP)

```html
<x-varnish::dynamic-view view="customer-desktop-dropdown" />
```

**AJAX Benefits:**
- Loads via AJAX after user interaction
- Improves LCP/FCP
- Ideal for non-critical dropdowns, modals, and menus

## Cache-Control Headers

### Non-Cacheable Routes

```http
Cache-Control: no-cache, no-store, must-revalidate
```

### Cacheable Routes

```http
Cache-Control: public, max-age=604800, s-maxage=604800
```
*(Example: 7 days)*

### Middleware for Cache Headers

```php
Route::get('/', [HomeController::class, 'index'])
    ->middleware('cache.response');
```

## Clearing Cache with Artisan Commands

To clear Varnish cache using Artisan commands:

```bash
php artisan varnish:purge
```

- Clears all cache entries
- Optionally, provide URLs to purge specific pages:

```bash
php artisan varnish:purge --url=http://example.com
```

Replace `http://example.com` with the URL you want to clear from cache.

## Cache Invalidation

### Automatic Cache Purging

The Varnish package automatically purges cache when:

- Products, categories, CMS pages, orders, reviews, refunds, or themes are updated

### Manual Cache Purging in Code

You can trigger cache invalidation manually using:

```php
VarnishCache::forget($urls);
```

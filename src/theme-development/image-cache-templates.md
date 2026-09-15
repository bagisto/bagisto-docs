# Image Cache

Storefront images aren't stored in several sizes. Their URLs point at `/cache/{template}/{path}`, and `Webkul\ImageCache` resizes the stored file on every request with an image **template**: a class whose public `applyFilter()` method receives an `Illuminate\Image\Image`, applies a filter such as `cover()`, and returns the image that call returns. A theme can override a core template or add its own in `config/themes.php`, without touching core.

## Default Templates

`config/imagecache.php` registers three templates, `Webkul\Shop\CacheFilters\Small`, `Medium` and `Large`. Each one crops with `cover()` (scale, then crop from the centre to the exact size) and picks the size from the image's path in the URL:

| Template | Product (`/product`) | Category (`/category`) | Swatch (`/attribute_option`) | Anything else, such as a slider image |
|---|---|---|---|---|
| `small` | 100 × 100 | 80 × 80 | 60 × 60 | 768 × 280 |
| `medium` | 350 × 360 | 110 × 110 | 210 × 210 | 1024 × 372 |
| `large` | 560 × 610 | 165 × 165 | 330 × 330 | 1280 × 467 |

The product sizes are defaults: the filters read `catalog.products.cache_small_image`, `cache_medium_image` and `cache_large_image` (`width` and `height`) from the store configuration. The output keeps the stored file's format (uploads are stored as WebP, see [File Storage](../advanced/file-storage.md#image-processing)) at Laravel's default quality of 70; a template can change both with `quality()`, `toWebp()` and the other `to*()` methods.

`original`, `download` and `logo` are reserved names, not templates. The controller answers them itself: `original` returns the stored file unchanged, `download` returns it as an attachment, and `logo` fetches the Bagisto logo from `updates.bagisto.com`.

## How Templates Are Resolved

`Webkul\ImageCache\TemplateRegistry` builds the template list for a request:

1. **Core templates** are `config('imagecache.templates')`.
2. **Theme templates** are `config('themes.shop.{code}.customize.image_cache.templates')`, merged over the core list with `array_replace`, so a theme entry with a core name wins.
3. **The theme** is the one the current channel runs, found by the request's hostname (the first channel when none matches), if it's registered in `config/themes.php`, otherwise `themes.shop-default`. `currentTheme()` returns `null` for a request under the admin URL, so code running in the admin gets the core templates only.

A theme entry is dropped, and reported with `report()` as `Webkul\ImageCache\Exceptions\InvalidTemplate`, when its name isn't `[A-Za-z0-9_-]+`, is a reserved name in any letter case, or maps to a class that can't be instantiated or has no public `applyFilter()`. Entries in `config/imagecache.php` aren't checked.

## Customize an Individual Template

Every option leaves the core packages untouched:

| To change | Set | Applies to |
|---|---|---|
| Only the product sizes | `catalog.products.cache_{small,medium,large}_image.width` and `height` in the store configuration | Every theme that keeps the core template |
| One template, for one theme | `customize.image_cache.templates` in `config/themes.php`, below | Channels running that theme |
| One template, for every theme | `templates` in `config/imagecache.php` | Every channel |

`config/imagecache.php` belongs to your application, and the [`UPGRADE.md`](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#configuration-files-you-maintain-yourself) lists it among the configuration files you maintain yourself. A package can't add a template with `mergeConfigFrom()`, because the merge is shallow and the application's `templates` key replaces the package's. Set it from the provider's `boot()` instead, as in `config(['imagecache.templates.product_card' => ProductCard::class])`, or register it in a theme.

## Override or Add Templates in a Theme

This example gives the `custom-theme` theme square product images at `medium` and a portrait `product_card` size for its product cards.

### Step 1: Write the Template Classes

A template needs no base class and no interface.

**File:** `packages/Webkul/CustomTheme/src/ImageTemplates/ProductCard.php`

```php
<?php

namespace Webkul\CustomTheme\ImageTemplates;

use Illuminate\Image\Image;

class ProductCard
{
    /**
     * Crop the image to a portrait product card.
     */
    public function applyFilter(Image $image): Image
    {
        return $image->cover(240, 320);
    }
}
```

A theme's `medium` replaces the core one for **every** kind of image, including category logos, swatches and section sliders. To change only product images, extend the core filter and hand everything else back to it:

**File:** `packages/Webkul/CustomTheme/src/ImageTemplates/Medium.php`

```php
<?php

namespace Webkul\CustomTheme\ImageTemplates;

use Illuminate\Image\Image;
use Illuminate\Support\Str;
use Webkul\Shop\CacheFilters\Medium as BaseMedium;

class Medium extends BaseMedium
{
    /**
     * Crop product images to a square, and size every other image as the core template does.
     *
     * @param  Image  $image
     */
    public function applyFilter($image): Image
    {
        if (Str::startsWith((string) request()->route('filename'), ['product/', 'products/'])) {
            return $image->cover(400, 400);
        }

        return parent::applyFilter($image);
    }
}
```

Unlike core's filters, which match `/product` anywhere in the URL, it checks the stored path: `product/{id}` for uploads and `products/{id}` for the installer's sample products. It ignores the `cache_medium_image` store configuration. A new name such as `product_card` can also extend `Webkul\ImageCache\Templates\Small`, `Medium` or `Large`, fixed 100, 300 and 600 pixel squares, and set their `$width` and `$height` properties.

### Step 2: Register the Templates

**File:** `config/themes.php`

```php
<?php

use Webkul\CustomTheme\ImageTemplates\Medium;
use Webkul\CustomTheme\ImageTemplates\ProductCard;

return [
    // ...

    'shop' => [
        // ...

        'custom-theme' => [
            'name' => 'Custom Theme',
            'assets_path' => 'public/themes/shop/custom-theme',
            'views_path' => 'resources/themes/custom-theme/views',

            // ...

            'customize' => [
                'sections' => [
                    // ...
                ],

                'image_cache' => [
                    'templates' => [
                        'medium' => Medium::class,
                        'product_card' => ProductCard::class,
                    ],

                    'product_images' => ['product_card'],
                ],
            ],
        ],
    ],
];
```

| Key | What it does |
|---|---|
| `templates` | Template classes keyed by the name in the URL. A core name overrides that template; any other name adds one. |
| `product_images` | Extra names every product image carries, as `{name}_image_url`. |
| `category_images` | The same for `logo` and `banner` in `Webkul\Shop\Http\Resources\CategoryResource`, the storefront category API; `$category->banner_url` in Blade isn't affected. |
| `swatch_images` | The same for the `swatch_image` that `Webkul\Product\Helpers\ConfigurableOption` builds for image swatches. |

Every key is optional. A listed name must be registered here or in `config/imagecache.php`; an unregistered one is reported and left out.

### Step 3: Use the New URL

`product_image()->getProductBaseImage($product)` and `getGalleryImages($product)` now return `small_image_url`, `medium_image_url`, `large_image_url`, `product_card_image_url`, `original_image_url` and `alt`. The same arrays reach Vue through `Webkul\Shop\Http\Resources\ProductCardResource`, `ProductResource` and `CartItemResource`. Your theme's copy of the product card component can therefore bind the new URL in place of `medium_image_url`. The copy goes at `products/card.blade.php` under the theme's `views_path`, without the `components` segment (see [Blade Components](./blade-components.md#overriding-a-component)). The grid card also sets `::srcset` and `sizes`, and a browser picks from `srcset` before `src`, so change all three in the grid block, and `::src` in the list block:

```blade
::src="product.base_image.product_card_image_url"
::srcset="`${product.base_image.product_card_image_url} 240w`"
sizes="240px"
```

A product without images gets a placeholder for every name, the `large` one for a non-core name. Behind the helper is `image_urls(string $path, ?string $key = null)`, where `$key` is `TemplateRegistry::PRODUCT_IMAGES`, `CATEGORY_IMAGES` or `SWATCH_IMAGES`; without a key it returns only the core sizes and `original`.

**Other channels.** A channel on another theme keeps its own templates, its image arrays have no `product_card_image_url`, and `/cache/product_card/…` requested on its hostname returns a 404.

## Test It

Clear the caches first. Storefront API responses and pages cached before Step 2 have no `product_card_image_url` and still carry the stock card:

```bash
php artisan optimize:clear
php artisan responsecache:clear
```

1. On a channel running `custom-theme`, copy a product image URL from the storefront and replace `/cache/medium/` with `/cache/product_card/`. The image is 240 × 320.
2. Open the original `/cache/medium/…` URL and reload it without the browser cache. The image is 400 × 400, while a category logo under `/cache/medium/category/…` stays 110 × 110.
3. In grid view, the product cards load their images from `/cache/product_card/…`.

## How Cached Images Are Served

`ImageCacheServiceProvider` registers `GET cache/{template}/{filename}`, named `imagecache`, outside the `web` middleware group. For each request, `ImageCacheController::getResponse()`:

1. Answers `original`, `download` and `logo` itself, and otherwise looks the template up in the registry; an unknown name returns a 404.
2. Reads the file with `Storage::get()` from the default disk, then from the `imagecache.paths` directories, and always from `storage/app/public`, `public/` and `public/storage`; a missing file returns a 404.
3. Runs `image_manager()->fromBytes()`, the template's `applyFilter()` and `toBytes()`. An exception, for example on an SVG or another format the driver can't decode, returns a 404.
4. Responds with an `ETag` (the MD5 of the output) and `Cache-Control: max-age={lifetime × 60}, public`, or a `304` with no body when `If-None-Match` matches.

Nothing is written to disk and there's no command to clear or warm the image cache: a changed template takes effect on the next request. `image_manager()` is Laravel's `Illuminate\Image\ImageManager`, and its `gd` or `imagick` driver, both built on Intervention Image 4, comes from `IMAGE_DRIVER` in `config/images.php` (`gd` by default).

| `config/imagecache.php` key | Default | Purpose |
|---|---|---|
| `route` | `cache` | The first URL segment; a non-string value removes the route |
| `paths` | `storage_path('app/public')`, `public_path('storage')` | Local directories searched after the default disk, before the fixed fallbacks above |
| `templates` | `small`, `medium`, `large` | The core templates |
| `lifetime` | `43200` (30 days) | Minutes in `Cache-Control: max-age`; `logo` always uses 7 days |

## Things to Watch

- **Browsers and CDNs keep the old image.** The URL doesn't change with the template, so a copy lives until `lifetime` ends. The resize also runs before the `ETag` check, even for a `304`, so put a CDN or proxy cache in front of `/cache/`.
- **New URL keys don't appear on cached responses.** After changing `product_images`, `category_images` or `swatch_images`, run `php artisan optimize:clear`, which also clears the configuration cache and the [catalog API cache](../advanced/cache-strategy.md#catalog-api-cache), and `php artisan responsecache:clear` for cached pages.
- **Theme section images use the core names.** `bagisto_theme_storage()->imageUrls($path)` always builds `small`, `medium` and `large`, so a theme's override of those names resizes section images too, and its lists are ignored.
- **The Appearance preview resizes with the live theme.** Preview images are separate `/cache/` requests, so a theme that isn't active on that hostname yet shows its section and product images through the active theme's templates.
- **Some mistakes fail quietly.** `Image` is immutable, so a template that calls `cover()` but returns its argument serves the image unresized, and so does a class in `config/imagecache.php` that doesn't exist. Names are case-sensitive: `/cache/Medium/…` returns a 404, while reserved names match in any case.
- **Keep `imagecache.route` as `cache`.** `ImageUrlBuilder` and `ThemeStorage` always build `cache/…` URLs.

## Next Step

Next, brand the emails your store sends.

**Continue to:** [Email Template](./email-template.md)

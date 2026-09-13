# Image Cache Templates

Every product, category and swatch image on the storefront is served through
the image cache at `/cache/{template}/{path}`, resized on the fly by a
**template** class. Bagisto ships three templates, `small`, `medium` and
`large`. A theme can replace any of them and add templates of its own, and can
decide which of those extra sizes product, category and swatch image URLs
carry, all from `config/themes.php`.

This is the second half of a theme's `customize` key; the first half,
[Theme Sections](./theme-sections.md), covers section types.

::: info Availability
Per-theme image templates (`customize.image_cache`) ship in both Bagisto 2.4
and the current development version. The template class's type hints differ
between the two lines; see [Writing a template class](#writing-a-template-class).
:::

## How the image cache resolves a template

`Webkul\ImageCache\TemplateRegistry` builds the template list for a request:

1. **Core templates** come from `config/imagecache.php`. In a stock install
   that file maps `small`, `medium` and `large` to
   `Webkul\Shop\CacheFilters\{Small,Medium,Large}`, which pick their size from
   the URL: product images use the sizes set in
   **Configuration → Catalog → Products** (or 100×100, 350×360 and 560×610),
   category images 80, 110 and 165 pixels square, swatches 60, 210 and 330,
   and anything else, such as a slider image, 768×280, 1024×372 and 1280×467.
2. **Theme templates** come from
   `config('themes.shop.{code}.customize.image_cache.templates')` and are
   merged **over** the core list with `array_replace`, so a theme entry with
   the same name wins.
3. The **current theme** is the theme of the current channel, if it is
   registered in `config/themes.php`, otherwise `themes.shop-default`. Requests
   to the admin URL always use the core templates only.

An entry is dropped (and reported through `report()` as
`Webkul\ImageCache\Exceptions\InvalidTemplate`) rather than breaking the page
when its name is not `[A-Za-z0-9_-]+`, is one of the reserved names
`original`, `download` or `logo`, or its class cannot be instantiated or has no
public `applyFilter()` method.

## Registering templates on a theme

**File:** `config/themes.php`

```php
'shop' => [
    'fashion' => [
        'name'        => 'Fashion',
        'assets_path' => 'public/themes/shop/fashion',
        'views_path'  => 'resources/themes/fashion/views',

        // ...

        'customize' => [
            'image_cache' => [
                'templates' => [
                    'small'        => \Webkul\Fashion\ImageTemplates\Small::class,
                    'product_card' => \Webkul\Fashion\ImageTemplates\ProductCard::class,
                ],

                'product_images'  => ['product_card'],
                'category_images' => [],
                'swatch_images'   => [],
            ],
        ],
    ],
],
```

| Key | What it does |
|---|---|
| `templates` | Template classes keyed by the name used in the URL. A core name (`small`, `medium`, `large`) overrides that core template for this theme; any other name adds one. |
| `product_images` | Extra template names every product image URL set carries, as `{name}_image_url`. |
| `category_images` | The same for category logo and banner URLs. |
| `swatch_images` | The same for the `swatch_image` of a configurable product's image swatches. |

Every key is optional. A name listed under `product_images`, `category_images`
or `swatch_images` must be registered, either here under `templates` or in
`config/imagecache.php`; an unregistered name is dropped from the list.

## Writing a template class

A template is any class with a public `applyFilter()` method that takes an
image and returns it. It needs no base class and no interface.

**File:** `packages/Webkul/Fashion/src/ImageTemplates/ProductCard.php`

```php
<?php

namespace Webkul\Fashion\ImageTemplates;

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

To override a core size you can also extend the bundled fixed-size classes,
which expose `$width` and `$height`:

```php
<?php

namespace Webkul\Fashion\ImageTemplates;

use Webkul\ImageCache\Templates\Small as BaseSmall;

class Small extends BaseSmall
{
    /**
     * The width for small images.
     */
    protected int $width = 160;

    /**
     * The height for small images.
     */
    protected int $height = 100;
}
```

::: warning The image type differs between versions
The current development version processes images with Laravel's
`Illuminate\Image` component, so `applyFilter()` receives and returns
`Illuminate\Image\Image`. **Bagisto 2.4** uses Intervention Image directly and
the signature is `applyFilter(ImageInterface $image): ImageInterface` with
`Intervention\Image\Interfaces\ImageInterface`. The method calls you make
(`cover()`, `resize()`, `scale()` and so on) are the same in both. On the
development version a closure is no longer accepted as a template; it must be a
class.
:::

The `applyFilter()` method must be **public**. A protected or private one makes
the class invalid and the template is skipped.

## Using the extra URLs

Once a name is listed under `product_images`, it appears wherever product image
URLs are built:

```php
$image = product_image()->getProductBaseImage($product);

// [
//     'small_image_url'        => 'https://store.test/cache/small/product/1/abc.webp',
//     'medium_image_url'       => '...',
//     'large_image_url'        => '...',
//     'product_card_image_url' => 'https://store.test/cache/product_card/product/1/abc.webp',
//     'original_image_url'     => '...',
//     'alt'                    => 'Product name',
// ]
```

The same keys reach the storefront product APIs through
`Webkul\Shop\Http\Resources\ProductCardResource`, so a theme's Vue components
can read `product.base_image.product_card_image_url`. Category images surface
in `CategoryResource` as `logo` and `banner`, and swatches in the
configurable-product options as `swatch_image`.

Behind the helper is `image_urls(string $path, ?string $key = null)`, where
`$key` is one of `TemplateRegistry::PRODUCT_IMAGES`, `CATEGORY_IMAGES` or
`SWATCH_IMAGES`; with no key only the core sizes and `original` are returned.

Placeholders follow the same rule: a product with no image gets a placeholder
for every listed template, using the `large` placeholder for any non-core name.

## Notes

- **Nothing is written to disk.** The image cache resizes on every request and
  relies on HTTP caching: an `ETag` and a `Cache-Control: max-age` of
  `imagecache.lifetime` minutes (30 days by default). There is no cache to
  clear after changing a template, but a CDN or browser may hold the old bytes
  until the URL is requested again with a stale `ETag`.
- **Remote disks work the same way.** The controller reads through the
  configured filesystem disk first, so a store on S3 or R2 is resized like a
  local one. (In Bagisto 2.4 a non-local disk returned the original file URL
  instead of a resized one.)
- **Theme media is separate.** Section images use
  `bagisto_theme_storage()->imageUrls($path)`, which always returns the core
  `small`, `medium` and `large` sizes and ignores the theme's lists.
- **Admin pages ignore theme templates.** The registry returns `null` for the
  current theme on admin requests, so an admin thumbnail is always the core
  size.

## Related

- [Theme Sections](./theme-sections.md) — the other half of `customize`.
- [Creating Store Theme](./creating-store-theme.md) — where `config/themes.php` fits.
- [Common Pitfalls](../advanced/common-pitfalls.md) — the storage link and `APP_URL` checks that also affect image URLs.

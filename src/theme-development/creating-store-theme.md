# Creating a Store Theme

A storefront theme starts as a folder of Blade overrides registered in `config/themes.php`. This page registers the `custom-theme` theme, overrides the home page, and explains how Bagisto decides which Blade file to render.

## What You'll Build

```text
config/themes.php                         # the custom-theme entry
resources/
└── themes/
    └── custom-theme/
        └── views/
            └── home/
                └── index.blade.php       # replaces shop::home.index
```

## Step 1: Register the Theme

Every storefront theme is an entry under `shop` in `config/themes.php`, keyed by its theme code. Add `custom-theme` beside the stock `default` theme:

**File:** `config/themes.php`

```php{21-31}
<?php

return [
    'shop-default' => 'default',

    'shop' => [
        'default' => [
            'name' => 'Default',
            'assets_path' => 'public/themes/shop/default',
            'views_path' => 'resources/themes/default/views',

            'vite' => [
                'hot_file' => 'shop-default-vite.hot',
                'build_directory' => 'themes/shop/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],

            // ...
        ],

        'custom-theme' => [
            'name' => 'Custom Theme',
            'assets_path' => 'public/themes/shop/custom-theme',
            'views_path' => 'resources/themes/custom-theme/views',

            'vite' => [
                'hot_file' => 'shop-default-vite.hot',
                'build_directory' => 'themes/shop/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

The `vite` block reuses the default theme's build for now; [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) gives the theme its own. Leave `shop-default` as `'default'`. Every key is described in [Theme Configuration Keys](#theme-configuration-keys).

<a id="step-3-create-your-first-template"></a>

## Step 2: Override the Home Page

A file in the theme replaces the package view at the same path under `packages/Webkul/Shop/src/Resources/views`, so `home/index.blade.php` replaces `shop::home.index`.

**File:** `resources/themes/custom-theme/views/home/index.blade.php`

```blade
<x-shop::layouts>
    <x-slot:title>
        Custom Theme Home
    </x-slot>

    <div class="container mt-8 px-15 text-center max-lg:px-8">
        <h1 class="font-dmserif text-3xl">
            Welcome to Our Custom Theme
        </h1>

        <p class="mt-4 text-lg text-zinc-500">
            This is your custom Bagisto store theme in action!
        </p>
    </div>
</x-shop::layouts>
```

The page keeps the stock `<x-shop::layouts>` component, so it keeps the header, the footer and the Vue app ([Understanding Layouts](./understanding-layouts.md)). It uses only classes the storefront's stylesheet already contains; see [Things to Watch](#things-to-watch).

## Step 3: Clear the Cache

Clear the cached configuration so Bagisto sees the new theme:

```bash
php artisan optimize:clear
```

## Step 4: Activate the Theme on a Channel

A storefront theme is applied per channel. On every storefront request `Webkul\Shop\Http\Middleware\Theme` reads the channel's `theme` column and activates that theme, or `shop-default` when the code isn't registered in `config/themes.php`.

The merchant picks the theme in the admin, which lists every theme under `shop`; see [Activate a theme](https://docs.bagisto.com/appearance/themes#activate-a-theme) in the User Guide.

## Test It

1. Open the home page of a channel running `custom-theme`. Your template replaces the default home page.
2. Switch the channel back to **Default**. The stock home page returns.
3. Turn on the [Blade Tracer](../tools/blade-tracer.md). The welcome block's `data-blade-path` attribute reads `/resources/themes/custom-theme/views/home/index.blade.php`.

## Theme Configuration Keys

| Key | Description |
|---|---|
| `shop-default` | The theme code a channel falls back to when its theme isn't registered. It doesn't switch a channel that already runs a registered theme |
| `name` | The name the admin shows for the theme |
| `views_path` | Directory, relative to the project root, holding the theme's Blade overrides |
| `assets_path` | Directory for the theme's built assets. Declared for every theme, but asset URLs come from the `vite` block |
| `vite` | The hot file, build directory and package assets directory the layout loads the theme's CSS and JavaScript from |
| `parent` | Optional. Code of another theme whose `views_path` is searched after this theme's own, such as `'default'` |
| `views_namespace` | Optional. The view namespace a theme package registered its views under, when it differs from the theme code (see [Package Views Without Publishing](#package-views-without-publishing)) |
| `customize` | Optional. The theme's [section types](./theme-sections.md) (`sections`) and [image templates](./image-cache-templates.md) (`image_cache`) |

## How Views Are Resolved

Once a theme is active, `Webkul\Theme\ThemeViewFinder`, which replaces Laravel's view finder, searches these locations in order for a namespaced view such as `shop::home.index`:

1. **The theme's `views_path`**, then the `views_path` of its `parent`, and so on up the chain.
2. **The theme's own registered view namespace**, for `shop::` and `admin::` views only, when the theme isn't `default` and a package registered views under the theme code (or `views_namespace`). See [Package Views Without Publishing](#package-views-without-publishing).
3. **The namespace's own locations**: Laravel's `resources/views/vendor/shop` when that directory exists, then the package's views in `packages/Webkul/Shop/src/Resources/views`.

The same order applies to `admin::` views with the admin theme. To replace the product page, create `resources/themes/custom-theme/views/products/view.blade.php`, mirroring `packages/Webkul/Shop/src/Resources/views/products/view.blade.php`. Nothing is registered; the file's existence is enough. There is no vendor-publish tag or artisan command for storefront views, and editing `packages/Webkul/Shop` directly is lost on the next update.

Step 1 applies to **every** namespaced view, not only `shop::` ones: a view is looked up in the theme folder by its path inside the package that owns it (`ThemeViewFinder::addThemeNamespacePaths()`).

::: warning The Namespace Isn't Part of the Path
Two views with the same path in different namespaces share one override, such as the customer's and the admin's order emails; see [Email Template](./email-template.md#when-the-theme-s-copy-is-used). Check the other packages for a view of the same path before you add an override.
:::

A theme is only active where something sets it. Storefront routes run the `theme` middleware in the `shop` middleware group, and on admin URLs the finder sets the `admin-default` theme itself. A view rendered anywhere else, such as in a queue worker, an artisan command or a package route outside the `shop` group, gets no theme overrides. Emails are affected by this; see [Email Template](./email-template.md).

### Blade Components

Components such as `<x-shop::layouts>` or `<x-shop::products.card>` are anonymous components registered from `packages/Webkul/Shop/src/Resources/views/components`. They resolve through the same finder, but their names are relative to that `components` directory, so the override path **drops** the `components` segment:

| Component | Package file | Theme override |
|---|---|---|
| `<x-shop::layouts>` | `views/components/layouts/index.blade.php` | `<views_path>/layouts/index.blade.php` |
| `<x-shop::products.card>` | `views/components/products/card.blade.php` | `<views_path>/products/card.blade.php` |
| `<x-shop::layouts.header>` | `views/components/layouts/header/index.blade.php` | `<views_path>/layouts/header/index.blade.php` |

A file at `<views_path>/components/layouts/index.blade.php` is ignored. The theme's registered view namespace (step 2 above) isn't searched for components, so a component override must be under `views_path`.

### Error Pages

Bagisto's exception handler, `packages/Webkul/Core/src/Exceptions/Handler.php`, only takes over when `APP_DEBUG` is `false`; in debug mode Laravel's own error pages are shown, so set `APP_DEBUG=false` locally to see your theme's. It renders `shop::errors.{code}` for 401, 403, 404 and 503 responses and `shop::errors.500` for anything else, falling back to `shop::errors.index`, the only error view the Shop package ships. Add `errors/index.blade.php` to your theme to restyle every error page, or `errors/404.blade.php` for one status. Unknown storefront URLs reach the Shop package's `Route::fallback`, which runs the `shop` middleware group, so a 404 page is rendered with the theme active.

### Package Views Without Publishing

A theme package doesn't have to publish its views into `resources/themes`. If its service provider registers them under the theme code:

```php
$this->loadViewsFrom(__DIR__.'/../Resources/views', 'custom-theme');
```

then, whenever `custom-theme` is active, every `shop::` lookup checks that namespace before the Shop package. Use `views_namespace` when the registered namespace differs from the theme code. This doesn't apply to the `default` theme or to Blade components. [Skipping the Publish Step](./creating-custom-theme-package.md#skipping-the-publish-step) shows it in a package.

### Views from Other Packages

A view in another package's namespace, such as `faq::shop.index` from the [Package Development](../package-development/views.md) guides, is looked up in the theme folder first, by its path inside that package: `resources/themes/custom-theme/views/shop/index.blade.php`. When no location has the view, the finder retries once with the theme code after the area segment, `faq::shop.custom-theme.index`, so a package can ship a per-theme variant of a view.

## Things to Watch

- **Mirror the path exactly.** A theme file replaces a package view only when its path under `views_path` matches the view's path inside the package.
- **A static home page drops the merchant's sections.** The stock `home/index.blade.php` draws the sections arranged in the Appearance editor. To keep them, copy the package file into your theme and edit the copy; [Rendering a custom type](./theme-sections.md#rendering-a-custom-type-on-the-storefront) shows what it must keep.
- **Until the theme has its own build, use existing classes.** Tailwind only emits classes it finds in the Shop package, so a class used only in your theme's files isn't in the stylesheet. Reuse storefront classes or add plain CSS.
- **Sections stay with their theme.** Activating a theme only sets the channel's `theme` column (`ThemeController::activateOn()`), and the footer and services strip load their sections by theme code. A channel switched to `custom-theme` starts with no footer links and an empty services strip; see [Sections stay with their theme](https://docs.bagisto.com/appearance/themes#sections-stay-with-their-theme) and [Starting Sections for a Theme](./theme-sections.md#starting-sections-for-a-theme).
- **Clear the cache after editing `config/themes.php`.** A cached configuration keeps serving the old theme list.

## Next Step

The theme lives in `resources/themes`. Next, move it into a package.

**Continue to:** [Creating a Custom Theme Package](./creating-custom-theme-package.md)

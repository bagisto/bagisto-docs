# Creating a Custom Theme Package

This page moves the `custom-theme` folder from [Creating a Store Theme](./creating-store-theme.md) into the `Webkul\CustomTheme` package. A package can be versioned and installed on other stores, and it's where the theme's Vite build, section types and image templates live on later pages.

## What You'll Build

```text
packages/Webkul/CustomTheme/
└── src/
    ├── Providers/
    │   └── CustomThemeServiceProvider.php
    └── Resources/
        ├── lang/
        │   └── en/
        │       └── app.php
        └── views/
            └── home/
                └── index.blade.php
```

The package keeps using the `custom-theme` entry in `config/themes.php` from [Step 1](./creating-store-theme.md#step-1-register-the-theme) of the previous page. Add that entry now if you skipped it.

## Step 1: Create the Service Provider

The provider publishes the package views into the theme's `views_path`.

**File:** `packages/Webkul/CustomTheme/src/Providers/CustomThemeServiceProvider.php`

```php
<?php

namespace Webkul\CustomTheme\Providers;

use Illuminate\Support\ServiceProvider;

class CustomThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../Resources/views' => resource_path('themes/custom-theme/views'),
        ], 'custom-theme-views');
    }
}
```

`publishes()` copies the views when you run `vendor:publish`. [Skipping the Publish Step](#skipping-the-publish-step) reads them straight from the package instead.

## Step 2: Move the Views into the Package

Copy the theme folder's `views` directory into the package:

```bash
cp -r resources/themes/custom-theme/views/. packages/Webkul/CustomTheme/src/Resources/views/
```

The home page is now at `packages/Webkul/CustomTheme/src/Resources/views/home/index.blade.php`; if you skipped the previous page, create it from [Step 2](./creating-store-theme.md#step-2-override-the-home-page) there. Package views follow the same rule as the theme folder: the path under `Resources/views` must match the Shop view's path.

<a id="adding-translations"></a>

## Step 3: Add Translations

Later pages give the package strings of its own, such as section names and validation messages, in the `custom-theme::` namespace.

**File:** `packages/Webkul/CustomTheme/src/Resources/lang/en/app.php`

```php
<?php

return [
    'sections' => [
        'hero-banner' => 'Hero Banner',
        'slides' => 'Slides',
        'add-slide' => 'Add Slide',
        'image' => 'Image',
        'heading' => 'Heading',
        'deals-carousel' => 'Deals Carousel',
        'on-sale' => 'On Sale',
        'services' => 'Services',
        'free-shipping' => 'Free Shipping',
        'free-shipping-info' => 'Free shipping on all orders',
    ],

    'validation' => [
        'password' => 'Password',
        'strong-password' => 'Use at least 8 characters with an uppercase letter, a lowercase letter and a digit.',
    ],
];
```

Load the directory at the end of the provider's `boot()` method:

**File:** `packages/Webkul/CustomTheme/src/Providers/CustomThemeServiceProvider.php`

```php
<?php

namespace Webkul\CustomTheme\Providers;

use Illuminate\Support\ServiceProvider;

class CustomThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../Resources/views' => resource_path('themes/custom-theme/views'),
        ], 'custom-theme-views');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'custom-theme');
    }
}
```

`trans('custom-theme::app.sections.hero-banner')` now reads the file. Add the same keys for every locale the store serves; see [Localization](../package-development/localization.md).

## Step 4: Autoload and Register the Package

Add the namespace to the `psr-4` map of the root `composer.json`, beside the `Webkul\\` entries already there:

**File:** `composer.json`

```json
"autoload": {
    "psr-4": {
        "Webkul\\CustomTheme\\": "packages/Webkul/CustomTheme/src"
    }
}
```

Regenerate the autoloader, or Laravel can't load the provider:

```bash
composer dump-autoload
```

Then register the provider:

**File:** `bootstrap/providers.php`

```php{4,11}
<?php

use App\Providers\AppServiceProvider;
use Webkul\CustomTheme\Providers\CustomThemeServiceProvider;

return [
    AppServiceProvider::class,

    // ...

    CustomThemeServiceProvider::class,
];
```

[Package Development](../package-development/getting-started.md) covers package registration in depth.

## Step 5: Publish the Views

Publish the package views into `resources/themes/custom-theme/views`, and clear the cache:

```bash
php artisan vendor:publish --provider="Webkul\CustomTheme\Providers\CustomThemeServiceProvider" --force

php artisan optimize:clear
```

`--force` overwrites the published copies, so run it again after every change to a package view, and never edit the published copies.

## Test It

1. `php artisan vendor:publish --provider="Webkul\CustomTheme\Providers\CustomThemeServiceProvider" --force` copies `packages/Webkul/CustomTheme/src/Resources/views` to `resources/themes/custom-theme/views`. "No publishable resources" means the provider isn't autoloaded or registered (Step 4).
2. `php artisan tinker --execute="echo trans('custom-theme::app.sections.hero-banner');"` prints `Hero Banner`.
3. The home page of a channel running `custom-theme` shows your template.
4. Change the package's home view, publish again with `--force`, and reload: the change shows.

## Skipping the Publish Step

Publishing leaves two copies of every view. Instead, register the package views under the **theme code** in the provider's `boot()` method, in place of the `publishes()` call; when a theme other than `default` is active, that namespace is searched before the Shop package:

```php
$this->loadViewsFrom(__DIR__.'/../Resources/views', 'custom-theme');
```

With `custom-theme` active, `shop::home.index` resolves to the package file directly. To use another namespace name, register it under that name and add `'views_namespace' => 'that-name'` to the theme's entry.

- **Delete the published copies**, such as `resources/themes/custom-theme/views/home/index.blade.php`, but keep the directory. `views_path` is searched first, so a stale copy keeps answering, and it stays the place where a store can override one file of your package.
- **Components still need `views_path`.** The theme namespace isn't searched for Blade components, so an override of `<x-shop::layouts>` or any other component must be published there (keep a `publishes()` call for those files).
- **Not for the `default` theme.** The shortcut is skipped when the active theme code is `default`.

The full order is in [How Views Are Resolved](./creating-store-theme.md#how-views-are-resolved).

<a id="option-2-symlink-the-views"></a>

## Symlinking the Views

Republishing after every change is slow while you develop. Point the theme's `views_path` at the package views instead. Move any edits out of the published directory first, then run from the project root:

```bash
rm -rf resources/themes/custom-theme/views

ln -s $(pwd)/packages/Webkul/CustomTheme/src/Resources/views resources/themes/custom-theme/views
```

Alternatively, iterate in `resources/themes/custom-theme/views` and copy the finished files into the package.

## Things to Watch

- **`views_path` always wins.** Published copies are searched before the package's own views, however those reach the finder.
- **Edit the package, not the published copy.** `vendor:publish --force` replaces the published files.
- **The theme gallery shows only the theme's `name`.** The screenshot, author, version and description come from the core file `packages/Webkul/Theme/src/Resources/catalog.php`, read by the protected `Webkul\Theme\ThemeCatalog::catalogEntries()`. To show yours, bind a subclass of `ThemeCatalog` whose `catalogEntries()` adds an entry under your theme code, with a remote `screenshot` URL, since any other path is read from the admin build.
- **Symbolic links need extra setup on Windows.**

## Next Step

The package still reuses the default theme's build. Next, give it its own Tailwind CSS 4 and Vite build.

**Continue to:** [Vite-Powered Theme Assets](./vite-powered-theme-assets.md)

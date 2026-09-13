# Creating Store Theme

Learn how to create custom store themes for your Bagisto e-commerce platform. This guide covers the basic approach using Bagisto's resources directory, perfect for getting started with theme development, and explains how Bagisto decides which Blade file to render once a theme is active.

::: info What You'll Learn
- Understanding Bagisto's theme configuration system
- Creating themes using the resources directory approach
- How views, Blade components, emails and error pages are resolved for a theme
- Configuring theme settings and activating your custom theme
:::

## Understanding Theme Configuration

Bagisto's theme system is managed through the `config/themes.php` file. This central configuration file defines all available themes and their settings.

### Key Configuration Properties

| Property | Description |
|----------|-------------|
| `shop-default` | The theme code a channel falls back to when the theme it is set to is not registered in this file |
| `name` | Display name shown in the admin theme selector and the Appearance gallery |
| `views_path` | Directory, relative to the project root, containing this theme's Blade overrides |
| `assets_path` | Directory for the theme's built assets. Declared for every theme, but asset URLs are generated from the `vite` block below |
| `vite` | The hot file, build directory and package assets directory the layout uses to load this theme's compiled CSS and JavaScript |
| `parent` | Optional code of another theme whose `views_path` is searched after this theme's own |
| `views_namespace` | Optional. The view namespace a theme package registered its own views under, if it differs from the theme code (see [Package views](#package-views-without-publishing)) |
| `customize` | Optional. What the theme changes in the storefront: its section types (`sections`) and image templates (`image_cache`). Both are covered on their own pages |

### Default Theme Configuration

Let's examine the default theme configuration structure:

**Step 1: Locate the configuration file**

Navigate to your Bagisto project root and find the themes configuration:

```text
bagisto-project/
├── app/
├── bootstrap/
├── config/
│   ├── app.php
│   ├── themes.php  ← Theme configuration file
│   └── ...
├── database/
└── ...
```

**Step 2: Understanding the configuration structure**

Open `config/themes.php` to see the default configuration (the `customize` block, which lists the core section types and empty image template lists, is shown on the [Theme Sections](./theme-sections.md) and [Image Cache Templates](./image-cache-templates.md) pages):

```php
<?php

use Webkul\Theme\Enums\SectionTypeEnum;

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

            'customize' => [
                'sections' => [
                    SectionTypeEnum::IMAGE_CAROUSEL,
                    // ...
                ],

                'image_cache' => [
                    'templates' => [],
                    'product_images' => [],
                    'category_images' => [],
                    'swatch_images' => [],
                ],
            ],
        ],
    ],
];
```

**Configuration breakdown:**
- `shop-default`: The fallback theme code (`'default'` in this case)
- `shop`: Contains all available store theme definitions, keyed by theme code
- Each theme has its own configuration block with paths and settings

## Creating Your Custom Theme

Now let's create a custom theme step by step:

### Step 1: Add Theme Configuration

Add your new theme to the `config/themes.php` file:

```php{18-29}
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

::: tip Vite Configuration Note
The Vite configuration currently uses the default theme settings, so your theme borrows the default theme's compiled CSS and JavaScript. We'll cover custom Vite setup in the [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) guide.
:::

::: tip Inherit from the default theme
Add `'parent' => 'default'` to your theme's block if you want any view you do not override to be looked up in the default theme's `views_path` before falling back to the package. Without `parent`, only your own `views_path` and then the package views are consulted.
:::

### Step 2: Create Theme Directory Structure

Create the necessary directories for your theme in the `resources` folder:

```bash
# Create theme directory structure
mkdir -p resources/themes/custom-theme/views/home
```

Your directory structure should look like this:

```text
resources/
└── themes/
    └── custom-theme/
        └── views/
            └── home/
                └── index.blade.php
```

::: warning Directory Structure
The directory structure must mirror `packages/Webkul/Shop/src/Resources/views`. A file is only picked up when its path under `views/` matches the path of the package view it replaces.
:::

### Step 3: Create Your First Template

Create a home page template at `resources/themes/custom-theme/views/home/index.blade.php`:

```blade
<x-shop::layouts>
    <x-slot:title>
        Custom Theme Home
    </x-slot>

    <div class="container mx-auto mt-8 px-4 py-16">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Custom Theme
            </h1>

            <p class="text-lg text-gray-600 mb-8">
                This is your custom Bagisto store theme in action!
            </p>
        </div>
    </div>
</x-shop::layouts>
```

::: tip Layout Usage
We're using the default `<x-shop::layouts>` component since we haven't created a custom layout yet. Custom layouts will be covered in the [Understanding Layouts](./understanding-layouts.md) guide.
:::

::: warning Styling Limitations & Development Approach
When using the default shop layout, you're inheriting the existing Tailwind CSS compilation that's optimized for the default theme. Tailwind only emits classes it finds while scanning the Shop package, so a class that appears only in your theme's Blade files will not exist in the stylesheet.

**This basic approach is intentional** - we're focusing on core theme concepts first before diving into complex tooling. For now, stick to the classes the default storefront already uses, or add custom CSS. The [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) guide shows how to set up a build that scans your own files.
:::

### Step 4: Clear Application Cache

Clear Bagisto's cache to recognize your new theme:

```bash
php artisan optimize:clear
```

### Step 5: Activate Your Theme

A theme is applied per channel. Either edit the channel under **Settings → Channels** and pick the theme, or use **Appearance → Themes** and click **Activate** on the theme, which lets you choose the channels. Both write the theme code to the channel record; the storefront middleware reads it on every request and falls back to `shop-default` when the code is not registered.

### Step 6: View Your Custom Theme

Visit your store's homepage to see your custom theme in action! You should see your new custom design instead of the default Bagisto theme.

## How views are resolved

Once a theme is active, `Webkul\Theme\ThemeViewFinder` (which replaces Laravel's view finder) searches these locations in order for any view in the `shop::` namespace:

1. **The theme's `views_path`**, then the `views_path` of its `parent`, and so on up the chain.
2. **The theme's own registered view namespace**, when the theme is not `default` and a package registered views under the theme code (or `views_namespace`). See [Package views](#package-views-without-publishing).
3. **The Shop package's views** in `packages/Webkul/Shop/src/Resources/views`.

The same order applies to `admin::` views with the admin theme. Laravel's own `resources/views` directory is excluded from the search for namespaced views.

So to replace the product page you create `resources/themes/custom-theme/views/products/view.blade.php`, mirroring `packages/Webkul/Shop/src/Resources/views/products/view.blade.php`. Nothing needs to be registered; the file's existence is enough.

### Blade components

Components such as `<x-shop::layouts>` or `<x-shop::products.card>` are anonymous components registered from `packages/Webkul/Shop/src/Resources/views/components`. They resolve through the same finder, but their names are relative to that `components` directory, so the override path **does not** include a `components` segment:

| Component | Package file | Theme override |
|---|---|---|
| `<x-shop::layouts>` | `views/components/layouts/index.blade.php` | `<views_path>/layouts/index.blade.php` |
| `<x-shop::products.card>` | `views/components/products/card.blade.php` | `<views_path>/products/card.blade.php` |
| `<x-shop::layouts.header>` | `views/components/layouts/header/index.blade.php` | `<views_path>/layouts/header/index.blade.php` |

A file at `<views_path>/components/layouts/index.blade.php` is ignored.

### Email and error views

The `mails` and `errors` namespaces are special-cased: the finder prepends `<views_path>/mails` and `<views_path>/errors` for them, so a theme can ship its own `errors/404.blade.php`. Order emails, however, are ordinary `shop::emails.*` views and are overridden like any other view; see [Email Template](./email-template.md).

### Package views without publishing

A theme shipped as a package does not have to publish its views into `resources/themes`. If the package's service provider registers its views under the theme code:

```php
$this->loadViewsFrom(__DIR__.'/../Resources/views', 'custom-theme');
```

then, whenever the `custom-theme` theme is active, every `shop::` lookup checks that namespace before the Shop package. Use `views_namespace` in `config/themes.php` when the namespace you registered differs from the theme code. This only applies to themes other than `default`.

### Views from other packages

For a view in another package's namespace, say `rma::shop.products.return-button`, the finder first looks for the plain name. Only when that file does not exist does it retry with the theme code inserted after the area segment, `rma::shop.custom-theme.products.return-button`. This lets a package ship a per-theme variant of a view it does not otherwise provide, but it cannot be used to override a view the package already has.

::: warning Precedence is the whole mechanism
There is no vendor-publish tag for storefront views and no artisan command that copies them. Overriding is purely a matter of placing a file where the finder looks first. Editing `packages/Webkul/Shop` directly works but is lost on the next update.
:::

## Testing Your Theme

To ensure your theme works correctly:

1. **Check different pages**: Navigate through various store pages to ensure consistent styling
2. **Test responsiveness**: View your theme on different device sizes
3. **Verify functionality**: Ensure all store features work correctly with your theme
4. **Browser testing**: Test across different browsers for compatibility
5. **Use the Blade Tracer**: Enable the [Blade Tracer](./blade-tracer.md) to confirm which file each part of a page came from

## What's Next?

Congratulations! You've successfully created your first custom store theme. Here are your next steps:

**💼 [Creating Admin Theme →](./creating-admin-theme.md)**
Learn to customize the admin panel interface with custom admin themes.

**📦 [Custom Theme Package →](./creating-custom-theme-package.md)**
Advance to creating professional theme packages for distribution and better organization.

**🧩 [Theme Sections →](./theme-sections.md)**
Declare which section types the Appearance editor offers for your theme, and add your own.

**🖼️ [Image Cache Templates →](./image-cache-templates.md)**
Register the image sizes your theme's layouts need.

**⚡ [Vite-Powered Theme Assets →](./vite-powered-theme-assets.md)**
Master modern asset compilation and optimization for your themes.

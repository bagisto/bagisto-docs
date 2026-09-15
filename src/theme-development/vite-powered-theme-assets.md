# Vite-Powered Theme Assets

A theme that only overrides views can reuse the Shop package's CSS and JavaScript; a theme that restyles the storefront needs a Vite and Tailwind CSS 4 build of its own. This page adds one to the `Webkul\CustomTheme` package from [Creating a Custom Theme Package](./creating-custom-theme-package.md). How the core packages build their assets is in [Frontend Architecture](../architecture/frontend.md).

## What You'll Build

```text
packages/Webkul/CustomTheme/
├── package.json
├── vite.config.js
└── src/
    ├── Providers/
    │   └── CustomThemeServiceProvider.php
    └── Resources/
        ├── assets/                # copied from the Shop package
        │   ├── css/
        │   │   └── app.css
        │   ├── fonts/
        │   ├── images/
        │   ├── js/
        │   │   └── app.js
        │   └── locales/
        └── views/
```

The build lands in `public/themes/shop/custom-theme/build`, and the theme's `vite` block in `config/themes.php` points at it.

## Step 1: Copy the Shop Assets

A theme with its own `vite` block answers **every** `bagisto_asset()` call from its own manifest, including the calls in Shop views it doesn't override, so copy the whole asset folder. From the project root:

```bash
cp -r packages/Webkul/Shop/src/Resources/assets packages/Webkul/CustomTheme/src/Resources/
```

Keep all of it: `js/app.js` creates the `app` object every Blade component registers its Vue component on and loads VeeValidate, Axios and the event emitter; the Shop views load the images and fonts through `bagisto_asset()`. Copy views sparingly, unlike assets: a copied view stops receiving Bagisto's fixes.

## Step 2: Create `package.json`

Start from `packages/Webkul/Shop/package.json` without its Playwright scripts and dependencies, so your versions match the build you copied:

**File:** `packages/Webkul/CustomTheme/package.json`

```json
{
  "name": "custom-theme",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "axios": "^1.7.9",
    "laravel-vite-plugin": "^1.0",
    "tailwindcss": "^4.0.0",
    "vite": "^6.4.2",
    "vue": "^3.5.13"
  },
  "dependencies": {
    "@vee-validate/i18n": "^4.9.1",
    "@vee-validate/rules": "^4.9.1",
    "@vitejs/plugin-vue": "^5.2.4",
    "mitt": "^3.0.0",
    "vee-validate": "^4.9.1",
    "vue-flatpickr": "^2.3.0"
  }
}
```

There is no `tailwind.config.js` or PostCSS configuration: `@tailwindcss/vite` reads its settings from `app.css`.

## Step 3: Create `vite.config.js`

Copy `packages/Webkul/Shop/vite.config.js` and change the three highlighted settings in the `laravel()` plugin:

**File:** `packages/Webkul/CustomTheme/vite.config.js`

```js{29,31,36}
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
    const envDir = "../../../";

    Object.assign(process.env, loadEnv(mode, envDir));

    return {
        // ...

        envDir,

        server: {
            host: process.env.VITE_HOST || "localhost",
            port: process.env.VITE_PORT || 5173,
            cors: true,
        },

        plugins: [
            vue(),

            tailwindcss(),

            laravel({
                hotFile: "../../../public/custom-theme-vite.hot",
                publicDirectory: "../../../public",
                buildDirectory: "themes/shop/custom-theme/build",
                input: [
                    "src/Resources/assets/css/app.css",
                    "src/Resources/assets/js/app.js",
                ],
                refresh: ["src/Resources/views/**"],
                preload: false,
            }),
        ],

        // ...
    };
});
```

Keep the copied `build` block and `renderBuiltUrl()` option (shown as `// ...`): they split the vendor chunks and keep the URLs inside the CSS relative. `hotFile` and `buildDirectory` must match the `vite` block in step 6; the paths are relative to the package directory, three levels below the project root. `refresh` names the package's views because `refresh: true` only watches application directories such as `resources/views`.

## Step 4: Point Tailwind at the Views It Styles

The copied `app.css` scans its own package: `source("../../../")` resolves to `packages/Webkul/CustomTheme/src`. The theme still renders every Shop view it doesn't override, so add the Shop package as a source directly below that line:

**File:** `packages/Webkul/CustomTheme/src/Resources/assets/css/app.css`

```css
@import "tailwindcss" source("../../../");

/**
 * The Shop views and components this theme renders wherever it does not override them.
 */
@source "../../../../../Shop/src";
```

If you publish the theme's views into `resources/themes/custom-theme/views`, scan that directory too:

```css
/**
 * The published copies of this theme's views.
 */
@source "../../../../../../../resources/themes/custom-theme/views";
```

A `@source` path is relative to the directory holding `app.css`. Leave the rest of the copied file as it is, and change its `@theme` tokens to restyle the theme.

## Step 5: Build the Assets

```bash
cd packages/Webkul/CustomTheme

npm install

npm run build
```

The build writes `public/themes/shop/custom-theme/build/manifest.json` and the hashed files under `build/assets/`. Build before the next step: once the theme points at this directory, its pages fail with a 404 or a Vite manifest error until the manifest exists.

## Step 6: Register the Build on the Theme

Point the theme's `vite` block at the new build:

**File:** `config/themes.php`

```php{14-18}
<?php

return [
    'shop-default' => 'default',

    'shop' => [
        // ...

        'custom-theme' => [
            'name' => 'Custom Theme',
            'assets_path' => 'public/themes/shop/custom-theme',
            'views_path' => 'resources/themes/custom-theme/views',

            'vite' => [
                'hot_file' => 'custom-theme-vite.hot',
                'build_directory' => 'themes/shop/custom-theme/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

Then clear the cached configuration:

```bash
php artisan optimize:clear
```

## Step 7: Develop with Hot Reload

```bash
cd packages/Webkul/CustomTheme

npm run dev
```

While the dev server runs it writes `public/custom-theme-vite.hot`, and `@bagistoVite` loads the theme's assets from the dev server: CSS changes apply without a reload, and a change under `src/Resources/views` reloads the page. Stopping the server removes the file.

## Test It

1. Open the storefront of a channel running `custom-theme`. In the browser's network tab, the stylesheet and scripts come from `/themes/shop/custom-theme/build/assets/`.
2. Change `--color-navyBlue` in `app.css`, run `npm run build`, and reload: the primary buttons, such as **Add To Cart**, change colour.
3. With `npm run dev` running, edit a package view: the page reloads. The change shows when the views are [symlinked](./creating-custom-theme-package.md#symlinking-the-views) or [registered under the theme code](./creating-custom-theme-package.md#skipping-the-publish-step); published copies must be republished with `vendor:publish --force`.

## How a Theme's Assets Are Loaded

The Shop layout loads its entry points with `@bagistoVite`, registered in `packages/Webkul/Theme/src/Providers/ThemeServiceProvider.php`:

**File:** `packages/Webkul/Shop/src/Resources/views/components/layouts/index.blade.php`

```blade
@bagistoVite(['src/Resources/assets/css/app.css', 'src/Resources/assets/js/app.js'])
```

`@bagistoVite` and the `bagisto_asset()` helper both read the `vite` block of the **active theme**:

| `config/themes.php` key | Vite plugin option | Meaning |
|---|---|---|
| `hot_file` | `hotFile` | The file the dev server writes in `public/`. While it exists, pages load assets from the dev server |
| `build_directory` | `buildDirectory` | The directory under `public/` holding `manifest.json` and the built files |
| `package_assets_directory` | The prefix of each `input` entry | Put in front of the requested path, so `bagisto_asset('images/logo.svg')` looks up `src/Resources/assets/images/logo.svg` in the manifest |

Views and assets resolve separately: a view the theme doesn't override falls back to the Shop package, but an asset is always answered from the active theme's manifest.

## Loading Assets Outside the Stock Layout

A layout of your own must call `@bagistoVite` itself; see [A Standalone Layout Component](./understanding-layouts.md#a-standalone-layout-component).

An extra entry point, loaded only on some pages, goes into `input` in `vite.config.js` and is loaded by name. Loading by name needs a named build in `config/bagisto-vite.php`:

**File:** `config/bagisto-vite.php`

```php
<?php

return [
    'viters' => [
        // ...

        'custom-theme' => [
            'hot_file' => 'custom-theme-vite.hot',
            'build_directory' => 'themes/shop/custom-theme/build',
            'package_assets_directory' => 'src/Resources/assets',
        ],
    ],
];
```

```blade
@pushOnce('scripts')
    @bagistoVite(['src/Resources/assets/js/lookbook.js'], 'custom-theme')
@endPushOnce
```

`bagisto_asset('images/banner.webp', 'custom-theme')` resolves a single file the same way. A name missing from `viters` throws `Webkul\Theme\Exceptions\ViterNotFound`. Without a name, both helpers use the active theme's `vite` block, which is what the stock views rely on.

## Building an Admin Theme

The same steps apply to an admin theme, starting from `packages/Webkul/Admin`: copy its `assets` directory, `package.json` and `vite.config.js`, and register the build in the admin theme's `vite` block under `admin` in `config/themes.php` (see [Creating an Admin Theme](./creating-admin-theme.md)). Two differences:

- Keep the `src/Resources/assets/js/chart.js` input. The reporting pages load it with `bagisto_asset('js/chart.js')`.
- The Admin `app.css` also scans `packages/Webkul/Theme/src/Sections` for the section editor's tile icons. Add `@source "../../../../../Admin/src";` so the Admin views your theme doesn't override are scanned too.

## Deploying

- Build before the theme goes live, and deploy `public/themes/shop/custom-theme/build` with the code that references it. Bagisto commits its own package builds; commit your theme's build the same way or run `npm run build` during deployment. Never edit a `build/` directory by hand.
- Never deploy a `*.hot` file. Pages would ask a dev server that isn't running for their assets and render unstyled.
- Keep the default Shop build in `public/themes/shop/default/build`, even when no channel runs the default theme. Core code asks for it by name: the product image placeholders in `packages/Webkul/Product/src/ProductImage.php` use `bagisto_asset('images/large-product-placeholder.webp', 'shop')`.

## Things to Watch

- **A missing asset turns the page into a 404.** When the manifest lacks a file that `bagisto_asset()` asks for, `Webkul\Theme\Theme::url()` reports the error and aborts the request with a 404 (`packages/Webkul/Theme/src/Theme.php`).
- **Keep the names in step.** `hotFile` and `hot_file`, `buildDirectory` and `build_directory`, and the `input` paths and `package_assets_directory` must agree, or the layout looks for a manifest that isn't there.
- **Icons are utilities.** Each `icon-*` class is declared as an `--icon-*` token in `@theme` and emitted by `@utility icon-*` only when the scanner sees the class name. A class assembled at runtime needs a `@source inline("...")` entry.
- **Compare your copy after each update.** Diff your `assets` directory, `package.json` and `vite.config.js` against the Shop package's after upgrading Bagisto; an upstream view may rely on a class, token or plugin your copy lacks.

::: details Building the Same Theme on Bagisto 2.4 (Tailwind CSS 3)
Bagisto 2.4 builds with Tailwind CSS 3 through PostCSS, so copy its Shop package's `tailwind.config.js` and `postcss.config.cjs` as well. Scanned files are listed in `tailwind.config.js` under `content` (`"./src/Resources/**/*.blade.php"`, `"./src/Resources/**/*.js"`) rather than with `@source`, `app.css` starts with `@tailwind base;`, `@tailwind components;` and `@tailwind utilities;`, `package.json` has `tailwindcss` `^3.3.2`, `postcss` and `autoprefixer` in place of `@tailwindcss/vite`, and `vite.config.js` has no `tailwindcss()` plugin. The `config/themes.php` and `@bagistoVite` steps are the same. To move a theme to Tailwind CSS 4, see [Tailwind CSS Upgraded from v3 to v4](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#tailwind-css-upgraded-from-v3-to-v4) in `UPGRADE.md`.
:::

## Next Step

Next, learn how the storefront and admin layouts are built, and how to override them.

**Continue to:** [Understanding Layouts](./understanding-layouts.md)

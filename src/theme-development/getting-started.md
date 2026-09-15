# Getting Started

A Bagisto theme replaces the Blade views and the compiled CSS and JavaScript that the `Shop` package renders for the storefront, or that the `Admin` package renders for the admin. It never edits those packages: Bagisto looks at the theme's files **before** the package's own. This section takes you from a first theme folder to a theme package with its own build.

## What You'll Build

- A storefront theme with the code `custom-theme`, registered in `config/themes.php`, that overrides the home page.
- The same theme as the `Webkul\CustomTheme` package, so it can be versioned and installed on other stores.
- Its own Tailwind CSS 4 and Vite build.
- Section types and image templates of its own, themed emails and validation rules.
- An admin theme, using the same mechanism.

## How It Works

| Piece | Where | What it does |
|---|---|---|
| Theme registry | `config/themes.php` | Lists storefront themes under `shop` and admin themes under `admin`, each with its `views_path`, its `vite` build and, for storefront themes, a `customize` block |
| Active theme | The channel's `theme` column; `admin-default` for the admin | `Webkul\Shop\Http\Middleware\Theme` activates the channel's theme on every storefront request, falling back to `shop-default` |
| View finder | `packages/Webkul/Theme/src/ThemeViewFinder.php` | Looks for a view in the active theme's `views_path` before the package that owns it |
| Theme manager and helpers | `packages/Webkul/Theme/src/Themes.php` (`themes()`), `packages/Webkul/Theme/src/Http/helpers.php` | Hold the active theme and load its build through `@bagistoVite` and `bagisto_asset()` |
| Package views | `packages/Webkul/Shop/src/Resources/views`, `packages/Webkul/Admin/src/Resources/views` | The defaults a theme overrides. Never edit them: the change is lost on the next update |

A **theme folder** (`resources/themes/custom-theme/views`) needs no PHP. A **theme package** (`packages/Webkul/CustomTheme`) ships the same views plus the theme's build, section types and image templates. Choosing which theme a channel runs is a merchant task; see [Activate a theme](https://docs.bagisto.com/appearance/themes#activate-a-theme) in the User Guide.

## Prerequisites

- A Bagisto 2.5 [Installation](../getting-started/installation.md) where you can run `php artisan` and edit `config/themes.php`.
- Composer, from the theme package page on, and Node.js with npm, from the Vite page on.
- Working knowledge of Blade and Laravel service providers. Vue 3 is used inline in Blade components; you don't compile `.vue` files.

## The Path

1. [Creating a Store Theme](./creating-store-theme.md): register a theme, override a view, and learn how views are resolved.
2. [Creating a Custom Theme Package](./creating-custom-theme-package.md): move the theme into a package.
3. [Vite-Powered Theme Assets](./vite-powered-theme-assets.md): give the package its own Tailwind CSS 4 and Vite build.
4. [Understanding Layouts](./understanding-layouts.md): use and override the storefront and admin layouts.
5. [Blade Components](./blade-components.md): the ready-made components pages are built from.
6. [Theme Sections](./theme-sections.md): the section types the merchant can place on the home page.
7. [Image Cache](./image-cache-templates.md): the image sizes the storefront serves, and theme overrides.
8. [Email Template](./email-template.md): branded order and account emails.
9. [Validation](./validation.md): browser and server validation for the forms a theme renders.
10. [Creating an Admin Theme](./creating-admin-theme.md): the same mechanism for the admin.

Along the way, the [Blade Tracer](../tools/blade-tracer.md) tool shows which Blade file renders any part of a page.

## Next Step

Start by registering a theme and overriding one view.

**Continue to:** [Creating a Store Theme](./creating-store-theme.md)

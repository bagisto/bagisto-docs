# Understanding Layouts

Every storefront page is wrapped in the `<x-shop::layouts>` component and every admin page in `<x-admin::layouts>`. The layout draws the page chrome, loads the active theme's Vite build, and holds the element the Vue app mounts on. This page covers using both layouts, overriding the storefront layout in a theme, and adding a standalone layout.

## Shop Layout

**File:** `packages/Webkul/Shop/src/Resources/views/components/layouts/index.blade.php`

Wrap a storefront page's content in the storefront layout:

```blade
<x-shop::layouts>
    <x-slot:title>
        @lang('blog::app.shop.blogs.page-title')
    </x-slot>

    <div class="container px-15 max-lg:px-8">
        <h1 class="text-2xl font-medium">
            @lang('blog::app.shop.blogs.page-title')
        </h1>
    </div>
</x-shop::layouts>
```

The `title` slot fills the page's `<title>`. Push meta tags from the page with `@push('meta')`. `blog::` stands for your own package's translation namespace, such as `custom-theme::` ([Add translations](./creating-custom-theme-package.md#step-3-add-translations)).

| Prop | Default | What it controls |
|------|---------|------------------|
| `has-header` | `true` | `<x-shop::layouts.header>`: logo, navigation, search and cart |
| `has-feature` | `true` | `<x-shop::layouts.services>`: the service promises strip, drawn from the channel's `services_content` section |
| `has-footer` | `true` | `<x-shop::layouts.footer>`: the footer, with the columns of the channel's `footer_links` section |

The customer sign-in, sign-up, forgot-password and reset-password pages turn all three off with `:has-header="false"`, `:has-feature="false"` and `:has-footer="false"`.

### What the Layout Provides

- `lang` and `dir` from the current locale, and the `base-url` and `currency` meta tags the storefront's JavaScript reads.
- The channel's favicon, or the theme's `images/favicon.ico`.
- `@bagistoVite(['src/Resources/assets/css/app.css', 'src/Resources/assets/js/app.js'])`, which loads the **active theme's** build; see [Vite-Powered Theme Assets](./vite-powered-theme-assets.md).
- The Poppins and DM Serif Display fonts, from Google Fonts.
- The `meta`, `styles` and `scripts` stacks, and the custom CSS and JavaScript stored under `general.content.custom_scripts` in the store configuration.
- `<div id="app">` holding `<x-shop::flash-group>`, `<x-shop::modal.confirm>`, the header, the cookie consent banner when GDPR cookie consent is enabled, the page content in `<main id="main">`, the services strip and the footer.
- The hidden [WebMCP](../ai/webmcp.md) tool declarations, `<x-shop::layouts.webmcp>`.
- The script that mounts the Vue app on `#app` once the DOM is ready, after `@stack('scripts')` has registered every component.
- Render events around each region: `bagisto.shop.layout.head.before` and `.after`, `body.before` and `.after`, `content.before` and `.after`, and `vue-app-mount.before` and `.after`. See [View Render Events](../advanced/view-render-events.md).

### Customer Account Pages

`<x-shop::layouts.account>` wraps the customer account pages. It renders the storefront layout with `has-feature` turned off, adds the account breadcrumb, and lays the account navigation and the page content out side by side (`packages/Webkul/Shop/src/Resources/views/components/layouts/account/index.blade.php`).

## Admin Layout

**File:** `packages/Webkul/Admin/src/Resources/views/components/layouts/index.blade.php`

Admin pages of your packages use the admin layout, with the admin's own button classes such as `primary-button` and `secondary-button`:

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('blog::app.admin.index.page-title')
    </x-slot>

    <div class="flex items-center justify-between gap-4 max-sm:flex-wrap">
        <p class="text-xl font-bold text-gray-800 dark:text-white">
            @lang('blog::app.admin.index.page-title')
        </p>

        <button
            type="button"
            class="primary-button"
        >
            @lang('blog::app.admin.index.create-btn')
        </button>
    </div>
</x-admin::layouts>
```

The admin layout takes no props. It provides:

- The `dark` class on `<html>` from the `dark_mode` cookie, so Tailwind `dark:` variants apply.
- The header, the sidebar (collapsed when the `sidebar_collapsed` cookie is set), `<x-admin::flash-group>`, `<x-admin::modal.confirm>` and the command palette.
- `@bagistoVite` for the admin theme's build, the `meta`, `styles` and `scripts` stacks, and the Vue app mounted on `#app`.
- Render events: `bagisto.admin.layout.head.before` and `.after`, `body.before` and `.after`, `content.before` and `.after`, and `vue-app-mount.before` and `.after`.

`<x-admin::layouts.anonymous>` is the layout for pages shown before sign-in, with no header or sidebar; `packages/Webkul/Admin/src/Resources/views/users/sessions/create.blade.php` uses it.

## Overriding the Storefront Layout in a Theme

A theme restyles the chrome of every page by overriding the layout component rather than creating a new layout, because every Shop view already calls `<x-shop::layouts>`. Copy the component into the theme package:

```bash
mkdir -p packages/Webkul/CustomTheme/src/Resources/views/layouts

cp packages/Webkul/Shop/src/Resources/views/components/layouts/index.blade.php packages/Webkul/CustomTheme/src/Resources/views/layouts/index.blade.php
```

Then republish the package views, or [symlink them](./creating-custom-theme-package.md#symlinking-the-views). Component overrides are only read from `views_path` (see [Creating a Store Theme](./creating-store-theme.md#blade-components)), so this file must reach `resources/themes/custom-theme/views/layouts/index.blade.php` even if you [skipped the publish step](./creating-custom-theme-package.md#skipping-the-publish-step) for views. A theme without a package puts the copy at that path directly.

To restyle only the header or the footer, copy `components/layouts/header/index.blade.php` to `layouts/header/index.blade.php`, or `components/layouts/footer/index.blade.php` to `layouts/footer/index.blade.php`, in the same package directory instead.

Edit the copy, and keep what the rest of the storefront relies on:

- The `hasHeader`, `hasFeature` and `hasFooter` props with their defaults, which the customer sign-in pages set.
- `@bagistoVite`, the `meta`, `styles` and `scripts` stacks, and the render events, which packages hook into.
- `<div id="app">` around the content, and the script that calls `app.mount("#app")` after `@stack('scripts')`. Without them no Vue component on the page renders.
- `<x-shop::flash-group>` and `<x-shop::modal.confirm>`, which components open through the event emitter.

A copied layout no longer receives Bagisto's changes to the original. Compare it with the package file after each update.

## A Standalone Layout Component

For a page that must not use the storefront chrome at all, such as a campaign landing page, give the theme package a layout component of its own. Register the package's `components` directory as an anonymous component path in its service provider:

**File:** `packages/Webkul/CustomTheme/src/Providers/CustomThemeServiceProvider.php`

```php
<?php

namespace Webkul\CustomTheme\Providers;

use Illuminate\Support\Facades\Blade;
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

        Blade::anonymousComponentPath(__DIR__.'/../Resources/views/components', 'custom-theme');
    }
}
```

Then create the layout. Nothing else on the page loads the theme's build and fonts or mounts Vue, so the layout does all three:

**File:** `packages/Webkul/CustomTheme/src/Resources/views/components/layouts/landing.blade.php`

```blade
<!DOCTYPE html>

<html
    lang="{{ app()->getLocale() }}"
    dir="{{ core()->getCurrentLocale()->direction }}"
>
    <head>
        <title>{{ $title ?? '' }}</title>

        <meta charset="UTF-8">

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        >

        <meta
            name="base-url"
            content="{{ url()->to('/') }}"
        >

        <meta
            name="currency"
            content="{{ core()->getCurrentCurrency()->toJson() }}"
        >

        @stack('meta')

        @bagistoVite(['src/Resources/assets/css/app.css', 'src/Resources/assets/js/app.js'])

        <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossorigin
        />

        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
        />

        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=DM+Serif+Display&display=swap"
        />

        @stack('styles')
    </head>

    <body>
        <div id="app">
            <x-shop::flash-group />

            <x-shop::modal.confirm />

            <main id="main">
                {{ $slot }}
            </main>
        </div>

        @stack('scripts')

        <script>
            function mountApp() {
                app.mount("#app");
            }

            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", mountApp);
            } else {
                mountApp();
            }
        </script>
    </body>
</html>
```

Use it from a view rendered by a route that runs the `web` and `shop` middleware, as the Shop package's own routes do (`packages/Webkul/Shop/src/Providers/ShopServiceProvider.php`), so the active theme and channel are resolved. Your package's storefront routes are set up in [Routes](../package-development/routes.md#create-the-storefront-routes).

```blade
<x-custom-theme::layouts.landing>
    <x-slot:title>
        Summer Sale
    </x-slot>

    <section class="container px-15 max-lg:px-8">
        <h1 class="font-dmserif text-3xl">
            Summer Sale
        </h1>
    </section>
</x-custom-theme::layouts.landing>
```

`x-custom-theme::layouts.landing` resolves to `components/layouts/landing.blade.php` in the package: the `components` directory is the registered path, not part of the component name.

## Things to Watch

- **The script order matters.** Components register themselves with `app.component()` from the `scripts` stack, so `@stack('scripts')` must come before the call to `app.mount()`.
- **A standalone layout skips the storefront's extension points.** Packages that inject markup through the storefront layout's render events, and the configured custom CSS and JavaScript, don't reach a page that uses your own layout.

## Next Step

Next, build pages from Bagisto's ready-made components.

**Continue to:** [Blade Components](./blade-components.md)

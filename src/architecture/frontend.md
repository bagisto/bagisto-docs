# Frontend Architecture

The admin, the storefront and the web installer are Blade pages with a Vue.js 3 app mounted on them. Each of the three packages has its own Vite build and its own Tailwind CSS 4 stylesheet. There is no separate single-page application, and core has no `.vue` files.

## Where the Front End Lives

| Package | Sources | Build output | Hot file (dev server) |
|---|---|---|---|
| `packages/Webkul/Admin` | `src/Resources/assets/` | `public/themes/admin/default/build/` | `public/admin-default-vite.hot` |
| `packages/Webkul/Shop` | `src/Resources/assets/` | `public/themes/shop/default/build/` | `public/shop-default-vite.hot` |
| `packages/Webkul/Installer` | `src/Resources/assets/` | `public/themes/installer/default/build/` | `public/installer-default-vite.hot` |

In Admin and Shop, `assets/` holds `css/app.css`, `js/app.js` with its `plugins/` and `directives/`, `locales/`, and the images and fonts the package ships. The Installer's `assets/` has no `directives/`, and keeps its `locales/` inside `js/`. The views that use them are in `src/Resources/views/`.

The built bundles are committed to the repository, so a fresh install serves the admin and the storefront without running npm. The root `vite.config.js` belongs to the Laravel skeleton: it builds `resources/css/app.css` and `resources/js/app.js`, which Bagisto's pages don't load.

## How Blade and Vue Work Together

1. The layout component loads the bundle with the `@bagistoVite` directive:

   **File:** `packages/Webkul/Shop/src/Resources/views/components/layouts/index.blade.php`

   ```blade
   @bagistoVite(['src/Resources/assets/css/app.css', 'src/Resources/assets/js/app.js'])
   ```

2. `js/app.js` creates the app with the full build of Vue (`vue/dist/vue.esm-bundler`), which compiles templates in the browser, and stores it on `window.app`. It then installs the global plugins: Axios, an event emitter, VeeValidate and Flatpickr in both packages, plus `Shop` on the storefront and `Admin`, `CreateElement` and `Draggable` in the admin. The storefront registers the `v-debounce` directive; the admin adds `v-slugify`, `v-slugify-target` and `v-code`, and registers the `vue-cal` calendar component. The installer's app installs only Axios and VeeValidate.
3. Blade components in `src/Resources/views/components/` are registered with `Blade::anonymousComponentPath()` under the `shop` or `admin` prefix, so `components/modal/index.blade.php` in the Shop package is `<x-shop::modal>`. See [Blade Components](../theme-development/blade-components.md).
4. A component that needs Vue renders a custom tag, and pushes its template and its registration onto the `scripts` stack once per page:

   **File:** `packages/Webkul/Shop/src/Resources/views/components/modal/index.blade.php`

   ```blade
   <v-modal
       is-active="{{ $isActive }}"
       {{ $attributes }}
   >
       {{-- ... --}}
   </v-modal>

   @pushOnce('scripts')
       <script
           type="text/x-template"
           id="v-modal-template"
       >
           {{-- ... --}}
       </script>

       <script type="module">
           app.component('v-modal', {
               template: '#v-modal-template',

               props: ['isActive', 'panelClass'],

               // ...
           });
       </script>
   @endPushOnce
   ```

5. The layout prints the `scripts` stack and then calls `app.mount("#app")` once the DOM is ready, so every component is registered before the app mounts.

Forms are validated with VeeValidate; see [Validation](../theme-development/validation.md).

## Vite and `@bagistoVite`

The Theme package registers `@bagistoVite` in `packages/Webkul/Theme/src/Providers/ThemeServiceProvider.php`. It calls `themes()->setBagistoVite()`, which uses the `vite` block of the active theme in `config/themes.php`:

**File:** `config/themes.php`

```php
'vite' => [
    'hot_file' => 'shop-default-vite.hot',
    'build_directory' => 'themes/shop/default/build',
    'package_assets_directory' => 'src/Resources/assets',
],
```

`bagisto_asset()` resolves images and fonts the same way. Given a namespace, as in `bagisto_asset('images/logo.svg', 'shop')`, both read the same three keys from the `viters` array in `config/bagisto-vite.php`, which registers `admin`, `shop` and `installer`. Assets come from the dev server while the hot file exists, and from the build manifest otherwise.

Each package's `vite.config.js` loads `.env` from the application root, adds the Vue and Tailwind CSS plugins, and passes `laravel-vite-plugin` the hot file (`../../../public/shop-default-vite.hot` in Shop), the build directory (`themes/shop/default/build`) and the two entry points, `css/app.css` and `js/app.js`. [Vite-Powered Theme Assets](../theme-development/vite-powered-theme-assets.md#step-3-create-vite-config-js) shows the complete file.

## Tailwind CSS 4

Tailwind CSS is configured in each package's `app.css`, which starts with `@import "tailwindcss" source("../../../")`. There is no `tailwind.config.js` and no PostCSS step; the `@tailwindcss/vite` plugin compiles the file.

- `source("../../../")` is relative to `app.css` and points at the package's `src/`, so Tailwind finds classes in views, JavaScript, `Config` and `DataGrids` files. The Installer scans `src/Resources/` with `source("../../")`, and the Admin adds `@source "../../../../../Theme/src/Sections"` for the classes used by theme section types.
- Breakpoints, colours and fonts are CSS variables in `@theme`. Icon glyphs are `--icon-*` variables, emitted by the `icon-*` utility.
- A class that no scanned file mentions has to be listed with `@source inline(...)`, as the storefront does for five icons.
- Bagisto 2.4 uses Tailwind CSS 3, with a `tailwind.config.js` and a `postcss.config.cjs` in each package.

## Build Commands

Run npm inside the package, not in the application root:

```bash
cd packages/Webkul/Shop
npm install
npm run dev
```

`npm run dev` starts the Vite dev server with hot reload and writes `public/shop-default-vite.hot`; while that file exists, pages load their assets from the dev server. `npm run build` writes the production bundle to `public/themes/shop/default/build/`. The same commands work in `packages/Webkul/Admin` and `packages/Webkul/Installer`.

## Things to Watch

- Changes inside `packages/Webkul/Shop` or `packages/Webkul/Admin` are overwritten when you update Bagisto. Put storefront changes in a [theme package](../theme-development/creating-custom-theme-package.md) with its own Vite build.
- Rebuild after changing anything in `assets/`, and never edit the files in a `build/` directory; the next build replaces them.
- If pages still request assets from `localhost:5173` after the dev server has stopped, delete the leftover `.hot` file in `public/`.
- A Tailwind class used only in your own package's views isn't in the core stylesheet. Compile it into your theme's stylesheet.
- `php artisan dev` runs `npm run dev` in the application root, which starts the skeleton build, not these package builds. See [Use php artisan dev](../getting-started/installation.md#use-php-artisan-dev).

## Related Pages

- [Theme Development](../theme-development/getting-started.md): build a storefront or admin theme on this setup.
- [Vite-Powered Theme Assets](../theme-development/vite-powered-theme-assets.md): the complete Vite and Tailwind CSS files for a theme package.
- [Blade Components](../theme-development/blade-components.md): the `<x-shop::*>` and `<x-admin::*>` components.
- [Backend Architecture](./backend.md): what happens on the server before a view renders.

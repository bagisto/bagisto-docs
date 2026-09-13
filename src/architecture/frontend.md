# Bagisto Frontend Overview

Bagisto's frontend leverages powerful tools and frameworks to create a dynamic, responsive, and visually appealing user interface. Designed to deliver a seamless shopping experience, Bagisto combines modern technologies and best practices to ensure optimal performance and flexibility.

## Tailwind CSS

Bagisto uses [Tailwind CSS](https://tailwindcss.com/) for its styling needs. Tailwind CSS is a highly customizable, utility-first CSS framework that allows developers to build responsive and modern designs efficiently.

### Key Features

- **Customization**: Tailwind CSS provides extensive configuration options, enabling developers to tailor the design system to specific project requirements
- **Utility-First Approach**: It offers utility classes that can be combined to create any design directly in your HTML

### Configuration

How Tailwind is configured depends on the release line:

- **Bagisto 2.5 (Tailwind 4)**: there is no `tailwind.config.js`. Each package's `app.css` imports Tailwind and declares where to scan for classes with `@import "tailwindcss" source("../../../")`, defines design tokens in an `@theme {}` block, and registers the icon font's utilities with `@utility`. The `@tailwindcss/vite` plugin compiles it; there is no PostCSS step.
- **Bagisto 2.4 (Tailwind 3)**: each package carries a `tailwind.config.js` listing the Blade and JavaScript paths to scan, and a `postcss.config.cjs` runs Tailwind through PostCSS.

Both shapes, with the exact files, are shown side by side on [Vite-Powered Theme Assets](../theme-development/vite-powered-theme-assets.md).

## Vue.js

The dynamic user interfaces in Bagisto are powered by [Vue.js](https://vuejs.org/), a robust and flexible JavaScript framework.

### Key Features

- **Reactive Components**: Vue.js enables the development of reactive components that update seamlessly as the data changes
- **Component-Based Architecture**: This promotes reusability and maintainability of code by breaking down the UI into isolated, reusable components

Vue components are not compiled from `.vue` files. Each Blade component under `Resources/views/components/` registers its Vue component with an inline `<script type="text/x-template">` pushed onto the `scripts` stack, and the [Blade Components](../theme-development/blade-components.md) page documents the props of each. Forms use VeeValidate, as described on [Validation](../theme-development/validation.md).

### Build Tool Integration

In conjunction with Vue.js, Bagisto uses [Vite](https://vitejs.dev/) as the build tool. Vite offers a fast and efficient development environment with hot module replacement.

Admin, Shop and Installer each have an independent Vite build, run from the package directory:

| Package | Source | Output |
|---|---|---|
| `packages/Webkul/Admin` | `src/Resources/assets/` | `public/themes/admin/default/build/` |
| `packages/Webkul/Shop` | `src/Resources/assets/` | `public/themes/shop/default/build/` |
| `packages/Webkul/Installer` | `src/Resources/assets/` | `public/themes/installer/default/build/` |

```bash
cd packages/Webkul/Shop
npm install
npm run dev     # or npm run build
```

The root `vite.config.js` belongs to the Laravel skeleton and builds only `resources/css/app.css` and `resources/js/app.js`; Bagisto's own pages do not use it. A custom theme brings its own Vite config and declares its build in `config/themes.php`, and the `@bagistoVite` directive loads the right manifest for the active theme.

## Blade

Bagisto utilizes the Blade template engine, which is integrated with [Laravel](https://laravel.com). Blade allows developers to use both Blade components and plain PHP code within templates, providing flexibility and power for crafting dynamic and efficient solutions.

### Key Features

- **Template Inheritance**: Blade supports template inheritance, which allows for a modular and maintainable template structure
- **Directives**: Blade includes various directives that simplify common tasks, such as loops and conditionals
- **Theme override**: any view or component can be replaced by a theme without touching the package; see [Creating Store Theme](../theme-development/creating-store-theme.md#how-views-are-resolved)
- **Render events**: `view_render_event()` hooks let a package inject markup into core pages; see [View Render Events](../advanced/view-render-events.md)

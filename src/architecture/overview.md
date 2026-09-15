# Architecture Overview

Bagisto is a Laravel application whose features live in 42 packages under `packages/Webkul/`, inside a thin application shell that registers them, holds the configuration and serves the built assets. This page maps the project so you know where to look. [Backend Architecture](./backend.md) and [Frontend Architecture](./frontend.md) go one level deeper.

## Technology Stack

| | Bagisto 2.5 |
|---|---|
| PHP | 8.4 |
| Framework | Laravel 13 |
| Modules and models | `konekt/concord` 1.18 |
| Data access | `prettus/l5-repository` 4, through `Webkul\Core\Eloquent\Repository` |
| Front end | Vue.js 3.5, Tailwind CSS 4, Vite 6 |
| Tests | Pest 5 and Playwright |
| Databases | MySQL 8.0, MariaDB 10.11, PostgreSQL 16 |

Bagisto 2.4 runs on PHP 8.3 or 8.4 with Laravel 12, Tailwind CSS 3 and Pest 3, and supports MySQL and MariaDB only. [Database Compatibility](../advanced/database-compatibility.md) explains the `db_grammar()` helper that keeps package code portable across the three databases.

Both the admin (the `Admin` package) and the storefront (the `Shop` package, skinned by [themes](../theme-development/getting-started.md)) are Blade pages with Vue components mounted inside them. There is no separate single-page application to build.

## Project Structure

```text
my-bagisto-store/
├── app/                    # Thin shell: AppServiceProvider and the EncryptCookies middleware
├── bootstrap/
│   ├── app.php             # Global middleware, CSRF exclusions, trusted proxies, the /up health route
│   └── providers.php       # Every service provider, including one for each Bagisto package
├── config/
│   ├── concord.php         # Concord modules: the packages that register models
│   ├── themes.php          # Storefront and admin themes, their view paths and Vite builds
│   ├── bagisto-vite.php    # Vite builds looked up by namespace: admin, shop, installer
│   └── ...                 # Laravel's config files, plus elasticsearch, images, imagecache, purify, responsecache
├── database/               # Laravel's own tables; DatabaseSeeder calls the Installer package's seeder
├── lang/                   # Laravel's translations (auth, pagination, passwords, validation) in 22 locales
├── packages/Webkul/        # The 42 Bagisto packages
├── public/
│   ├── index.php
│   └── themes/             # Built Vite bundles for admin, shop and installer
├── resources/
│   ├── themes/             # Views of storefront themes you publish or create
│   └── ...                 # Laravel skeleton css and js, built only by the root vite.config.js
├── routes/                 # web.php is empty; console.php holds Laravel's inspire command
├── storage/                # Logs, caches, uploads in app/public, and the installed marker
├── tests/                  # Pest.php, shared datasets and cross-package unit tests
├── composer.json           # Maps each Webkul\<Name>\ namespace to packages/Webkul/<Name>/src
├── phpunit.xml             # One test suite for each package that has tests
└── vite.config.js          # Laravel skeleton build; Bagisto's pages don't use it
```

Routes, migrations, views and translations all come from the packages, which is why `routes/`, `database/` and `resources/` in the application root hold so little.

## Inside a Package

| What | Where |
|---|---|
| Service provider | `packages/Webkul/<Name>/src/Providers/<Name>ServiceProvider.php` |
| Concord module provider | `packages/Webkul/<Name>/src/Providers/ModuleServiceProvider.php` |
| Contracts, models and proxies | `src/Contracts/`, `src/Models/` |
| Repositories | `src/Repositories/` |
| Migrations, seeders and factories | `src/Database/` |
| Routes, controllers, middleware and form requests | `src/Routes/` (in Paypal and SocialLogin, `src/Http/routes.php`), `src/Http/Controllers/`, `src/Http/Middleware/`, `src/Http/Requests/` |
| Event listeners | `src/Listeners/`, usually mapped in `src/Providers/EventServiceProvider.php` |
| Jobs and Artisan commands | `src/Jobs/`, `src/Console/Commands/` |
| Admin listings | `src/DataGrids/` |
| Config merged into the application | `src/Config/` |
| Blade views | `src/Resources/views/`, loaded under a namespace such as `shop::` or `admin::` |
| Translations | `src/Resources/lang/<locale>/app.php`, in all 22 locales |
| Front-end sources | `src/Resources/assets/`, in `Admin`, `Shop` and `Installer` |
| Pest tests | `tests/` at the package root, registered as a suite in `phpunit.xml` |
| Playwright end-to-end tests | `tests/e2e-pw/` in `Admin`, `Shop` and `Installer` |

Most packages carry only some of these directories; only `Providers/` is in every one.

## How a Package Is Wired In

A package is loaded because three files name it:

1. `composer.json` maps `Webkul\<Name>\` to `packages/Webkul/<Name>/src` under `autoload.psr-4`.
2. `bootstrap/providers.php` lists the package's service provider, which loads its routes, views, translations and migrations and merges its config.
3. `config/concord.php` lists its `ModuleServiceProvider`, which registers the package's models with Concord. A new package needs one only when it has models. In core, 35 packages are listed, 10 of them with an empty model list.

`php artisan concord:modules` and `php artisan concord:models` show what Concord has loaded. [Package Development](../package-development/getting-started.md) walks through creating and registering your own package.

## Extension Points at a Glance

| You want to | Read |
|---|---|
| Add a feature with its own tables, admin pages and routes | [Package Development](../package-development/getting-started.md) |
| Add an admin listing | [DataGrid](../package-development/datagrid.md) |
| Change how the storefront or admin looks | [Theme Development](../theme-development/getting-started.md) |
| Add a carrier, a gateway or a product type | [Shipping](../shipping-method-development/getting-started.md), [payment](../payment-method-development/getting-started.md), [product type](../product-type-development/getting-started.md) development |
| React to something the core does | [Event Listeners](../advanced/event-listeners.md) |
| Add markup to a core page without overriding its view | [View Render Events](../advanced/view-render-events.md) |
| Replace or extend a core model | [Extending a Core Model](../package-development/models.md#extending-a-core-model) |
| Change what a core controller, repository, DataGrid or listener does | Bind a subclass in the container: [Controllers](../package-development/controllers.md#things-to-watch), [Repositories](../package-development/repositories.md#things-to-watch), [DataGrid](../package-development/datagrid.md#extending-a-datagrid-you-do-not-own), [Event Listeners](../advanced/event-listeners.md#things-to-watch) |
| Change the class behind a core payment method, carrier, product type or importer | Point its `class` or `importer` key at your subclass from `boot()`: [Understanding Carrier Configuration](../shipping-method-development/understanding-carrier-configuration.md#how-bagisto-uses-the-configuration), [Understanding Payment Configuration](../payment-method-development/understanding-payment-configuration.md#things-to-watch), [Understanding Product Type Configuration](../product-type-development/understanding-product-type-configuration.md#overriding-a-core-type), [Understanding Data Transfer](../advanced/understanding-data-transfer.md#step-2-register-the-importer) |
| Talk to the store from outside | [REST and GraphQL APIs](../api/introduction.md), [WebMCP](../ai/webmcp.md) |

Each of these works without editing `packages/Webkul/` or `vendor/`. Changes made there are overwritten when you update Bagisto.

## Next Step

[Package Development](../package-development/getting-started.md) builds your first package. For more of the map first, read [Backend Architecture](./backend.md) (the request flow and all 42 packages) and [Frontend Architecture](./frontend.md) (Blade, Vue.js and Vite).

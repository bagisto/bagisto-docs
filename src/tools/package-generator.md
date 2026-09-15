# Package Generator

[`bagisto/bagisto-package-generator`](https://github.com/bagisto/bagisto-package-generator) is an optional development dependency that adds `package:make*` Artisan commands, which scaffold a package, its classes, or a payment or shipping method package under `packages/`. Bagisto itself ships none of these commands, and the tutorials in these docs build every file by hand and link here. This page describes release v2.1.2 (September 2025) against Bagisto 2.5.

## Install It

Run this in the Bagisto root:

```bash
composer require --dev bagisto/bagisto-package-generator

php artisan list package
```

The second command lists its 32 commands. Laravel's package discovery registers `Webkul\PackageGenerator\Providers\PackageGeneratorServiceProvider` (Bagisto excludes only `laravel/socialite` from discovery), so nothing goes in `bootstrap/providers.php`. The provider registers the commands in the console only and publishes nothing. With `--dev`, `composer install --no-dev` leaves the generator out of production; the code it generates doesn't need it.

## Create a Package

```bash
php artisan package:make Webkul/Faq
```

| Argument or option | What it does |
|---|---|
| `package` | `Vendor/Name`, with a forward slash. The package goes in `packages/Vendor/Name`, with the namespace `Vendor\Name` |
| `--plain` | Creates the empty folders under `src` and no files, so a provider added later with `package:make-provider` stops the application booting until four files exist ([Command Reference](#command-reference)) |
| `--force` | Deletes the package folder first. See [Things to Watch](#things-to-watch) |

Every name comes from the last segment of `package`. Class names use it as written; keys, route names, URLs and the view namespace use it lower-cased, with no separator added:

| What | `Webkul/Faq` | `Acme/ProductLabel` |
|---|---|---|
| Service provider | `Webkul\Faq\Providers\FaqServiceProvider` | `Acme\ProductLabel\Providers\ProductLabelServiceProvider` |
| Controllers | `FaqController`, in `Http/Controllers/Admin` and `Http/Controllers/Shop` | `ProductLabelController` |
| View and translation namespace | `faq::` | `productlabel::` |
| Routes | `admin.faq.index` at `/admin/faq`, `shop.faq.index` at `/faq` | `admin.productlabel.index` at `/admin/productlabel`, `shop.productlabel.index` at `/productlabel` |
| Menu and ACL key, and label | `faq`, `Faq` | `productlabel`, `ProductLabel` |

These are the names the [Package Development](../package-development/getting-started.md) tutorial uses for `Webkul\Faq`, so you can generate the package and complete each file on the page that covers it.

### What `package:make` Generates

It writes a service provider, a Concord module provider, an admin and a storefront controller with one route and one placeholder view each, menu and ACL entries, and a separate front-end build. The other folders under `src` are created empty.

::: details The Generated Tree and Files

```text
packages/Webkul/Faq
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── Config
    │   ├── acl.php
    │   └── admin-menu.php
    ├── Console
    │   └── Commands
    ├── Contracts
    ├── Database
    │   ├── Migrations
    │   └── Seeders
    ├── Events
    ├── Http
    │   ├── Controllers
    │   │   ├── Admin
    │   │   │   └── FaqController.php
    │   │   └── Shop
    │   │       └── FaqController.php
    │   ├── Middleware
    │   └── Requests
    ├── Listeners
    ├── Mail
    ├── Models
    ├── Providers
    │   ├── FaqServiceProvider.php
    │   └── ModuleServiceProvider.php
    ├── Repositories
    ├── Resources
    │   ├── assets
    │   │   ├── css
    │   │   │   └── app.css
    │   │   ├── images
    │   │   │   ├── icon-temp-active.svg
    │   │   │   └── icon-temp.svg
    │   │   └── js
    │   │       └── app.js
    │   ├── lang
    │   └── views
    │       ├── admin
    │       │   ├── index.blade.php
    │       │   └── layouts
    │       │       └── style.blade.php
    │       └── shop
    │           └── index.blade.php
    └── Routes
        ├── admin-routes.php
        └── shop-routes.php
```

| File | What's in it |
|---|---|
| `Providers/FaqServiceProvider.php` | `register()` merges `Config/admin-menu.php` into `menu.admin` and `Config/acl.php` into `acl`. `boot()` loads the migrations, both route files, and the translations and views under `faq`, and adds `faq::admin.layouts.style` on `bagisto.admin.layout.head`, which only the anonymous admin layout fires (sign-in, password reset, two-factor verification and error pages) |
| `Providers/ModuleServiceProvider.php` | Extends `Konekt\Concord\BaseModuleServiceProvider`, with an empty `$models` array |
| `Http/Controllers/Admin/FaqController.php` | Extends `Webkul\Admin\Http\Controllers\Controller`. `index()` renders `faq::admin.index`, with the DataGrid call commented out; `create()` and `edit()` render `faq::admin.create` and `faq::admin.edit`, which aren't generated; `store()`, `update()` and `destroy()` return a fixed JSON message |
| `Http/Controllers/Shop/FaqController.php` | Extends `Webkul\Shop\Http\Controllers\Controller`; `index()` renders `faq::shop.index` |
| `Routes/admin-routes.php` | `GET /admin/faq`, named `admin.faq.index`, with the `web` and `admin` middleware |
| `Routes/shop-routes.php` | `GET /faq`, named `shop.faq.index`, with the `web`, `theme`, `locale` and `currency` middleware |
| `Config/admin-menu.php` | One entry: key `faq`, name `Faq`, route `admin.faq.index`, sort `2`, icon `icon-sales` |
| `Config/acl.php` | One entry: key `faq`, name `Faq`, route `admin.faq.index`, sort `2` |
| `Resources/views/admin/index.blade.php`, `Resources/views/shop/index.blade.php` | Placeholder pages in `<x-admin::layouts>` and `<x-shop::layouts>` |
| `Resources/views/admin/layouts/style.blade.php` | A `<link>` to `themes/default/assets/css/admin.css`, a file Bagisto doesn't ship |
| `Resources/assets`, and the four files beside `src` | A separate front-end build on Tailwind CSS 3, Vite 4 and `laravel-vite-plugin` 0.7, writing to `public/themes/faq/default/build` |

:::

It writes no `composer.json`, `Resources/manifest.php`, translation files, models, migrations, system configuration or tests.

### Add a Class to a Package

The other commands write a class into a package, creating its folder if needed, and don't register what they write:

```bash
php artisan package:make-model Faq Webkul/Faq

php artisan package:make-repository FaqRepository Webkul/Faq

php artisan package:make-migration CreateFaqsTable Webkul/Faq
```

The first writes the model, `FaqProxy` and the `Faq` contract; the second a repository whose `model()` returns `Webkul\Faq\Contracts\Faq`; the third runs Laravel's `make:migration` with `--path=packages/Webkul/Faq/src/Database/Migrations`. A class command refuses a file that already exists, again with exit status `0`; with `--force` it overwrites the files it writes. [Command Reference](#command-reference) lists them all.

## Register the Generated Package

The generator doesn't edit `composer.json`, `bootstrap/providers.php` or `config/concord.php`, so a generated package needs the same registration as one written by hand:

1. Map the namespace in the root `composer.json` and run `composer dump-autoload`, as in [Autoload the Namespace](../package-development/getting-started.md#autoload-the-namespace).
2. Add `Webkul\Faq\Providers\FaqServiceProvider::class` to `bootstrap/providers.php`, as in [Register the Provider](../package-development/getting-started.md#register-the-provider).
3. Once the package has a model, list `Webkul\Faq\Providers\ModuleServiceProvider::class` in `config/concord.php` and create `src/Resources/manifest.php`, as in [Register the Model with Concord](../package-development/models.md#register-the-model-with-concord).
4. Clear the caches and check the routes:

   ```bash
   php artisan optimize:clear

   php artisan route:list --name=faq
   ```

   The list shows `admin.faq.index` and `shop.faq.index`.

If you came from the Package Development tutorial, continue with [Migrations](../package-development/migrations.md).

## Payment and Shipping Method Packages

Two commands generate a complete method package:

```bash
php artisan package:make-shipping-method Webkul/CustomExpressShipping

php artisan package:make-payment-method Webkul/CustomStripePayment
```

Each takes `package` and `--force`, with the same meaning as for `package:make`, and has no `--plain`. The method code is the last segment lower-cased, so `CustomExpressShipping` becomes `customexpressshipping` in every file, and the admin shows the section under the class name, `CustomExpressShipping`.

### Shipping Method

| File | What's in it |
|---|---|
| `src/Config/carriers.php` | The carrier entry, shown below |
| `src/Config/system.php` | A `sales.carriers.customexpressshipping` section, sort `1`, with **Title** (required), **Description** and **Status** (required) fields |
| `src/Carriers/CustomExpressShipping.php` | Extends `Webkul\Shipping\Carriers\AbstractShipping`, with `$code` `customexpressshipping` and `$method` `customexpressshipping_customexpressshipping`. `calculate()` charges `default_rate` once per cart, whatever `type` says |
| `src/Providers/CustomExpressShippingServiceProvider.php` | Merges `carriers.php` into `carriers` and `system.php` into `core` |

**File:** `packages/Webkul/CustomExpressShipping/src/Config/carriers.php`

```php
<?php

return [
    'customexpressshipping' => [
        'code' => 'customexpressshipping',
        'title' => 'CustomExpressShipping',
        'description' => 'CustomExpressShipping',
        'active' => true,
        'default_rate' => '10',
        'type' => 'per_unit',
        'class' => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
    ],
];
```

### Payment Method

| File | What's in it |
|---|---|
| `src/Config/payment-methods.php` | Entry `customstripepayment`: title and description `CustomStripePayment`, `class` `Webkul\CustomStripePayment\Payment\CustomStripePayment`, `active` `true`, `sort` `1` |
| `src/Config/system.php` | A `sales.payment_methods.customstripepayment` section, sort `1`, with **Title** (required), **Description** and **Status** (required) fields |
| `src/Payment/CustomStripePayment.php` | Extends `Webkul\Payment\Payment\Payment`, with `$code` `customstripepayment`. `getRedirectUrl()` returns nothing, so the checkout places the order without a redirect, as for cash on delivery |
| `src/Providers/CustomStripePaymentServiceProvider.php` | Merges `payment-methods.php` into `payment_methods` and `system.php` into `core` |

### How the Generated Methods Differ from Core

- **Labels are plain strings.** The section and field names are English literals, with `// use translation` comments beside them. [Localization](../package-development/localization.md) shows how to register keys.
- **Status is saved per locale.** The generated `active` field is `locale_based` and not `channel_based`, the reverse of core's carriers and payment methods, so switching a method off applies to the selected locale, across every channel.
- **The payment method has no logo.** The class doesn't override `getImage()` and the section has no image field, so the checkout draws an empty image beside the method.
- **Both are live once registered.** The configuration files set `active` to `true`, so the method appears at checkout before anything is saved in the admin.

Register either package with the first two steps of [Register the Generated Package](#register-the-generated-package); neither has models.

### Line the Generated Files Up with the Tutorials

[Creating Your First Shipping Method](../shipping-method-development/create-your-first-shipping-method.md) and [Creating Your First Payment Method](../payment-method-development/create-your-first-payment-method.md), and the pages after them, use the codes `custom_express_shipping` and `custom_stripe_payment`, a per-order or per-item rate, and a logo. To follow them from a generated package:

1. Replace the three code-bearing files with the tutorial's versions, together, because the code has to match in all of them:
   - shipping: `Config/carriers.php`, `Config/system.php` and `Carriers/CustomExpressShipping.php`;
   - payment: `Config/payment-methods.php`, `Config/system.php` and `Payment/CustomStripePayment.php`.
2. Keep the generated service provider. It merges the same two files into the same keys as the tutorial's provider.
3. Run `php artisan optimize:clear`. Settings saved in the admin under the generated code stay in `core_config` under that code, and the tutorial's method doesn't read them.

## Command Reference

Every path is relative to `packages/<package>/`. `name` is the class or file name, and `package` is `Vendor/Name`.

| Command | Arguments | Options | Creates |
|---|---|---|---|
| `package:make` | `package` | `--plain`, `--force` | The package described in [Create a Package](#create-a-package) |
| `package:make-shipping-method` | `package` | `--force` | A shipping method package: `Config`, `Carriers` and `Providers` |
| `package:make-payment-method` | `package` | `--force` | A payment method package: `Config`, `Payment` and `Providers` |
| `package:make-provider` | `name`, `package` | `--force` | `src/Providers/<name>.php`, always the full package provider. It requires `Config/admin-menu.php`, `Config/acl.php`, `Routes/admin-routes.php` and `Routes/shop-routes.php`, so in a package made with `--plain` the application fails to boot until those four files exist |
| `package:make-module-provider` | `name`, `package` | `--force` | `src/Providers/<name>.php`, whose class is always named `ModuleServiceProvider`. Pass `ModuleServiceProvider` as `name`; any other name gives a file Composer can't autoload |
| `package:make-shipping-method-provider` | `name`, `package` | `--force` | `src/Providers/<name>.php`, merging `Config/carriers.php` and `Config/system.php` |
| `package:make-payment-method-provider` | `name`, `package` | `--force` | `src/Providers/<name>.php`, merging `Config/payment-methods.php` and `Config/system.php` |
| `package:make-admin-route` | `package` | `--force` | `src/Routes/admin-routes.php`, for `Http/Controllers/Admin/<Name>Controller` |
| `package:make-shop-route` | `package` | `--force` | `src/Routes/shop-routes.php`, for `Http/Controllers/Shop/<Name>Controller` |
| `package:make-admin-controller` | `name`, `package` | `--force` | `src/Http/Controllers/Admin/<name>.php` |
| `package:make-shop-controller` | `name`, `package` | `--force` | `src/Http/Controllers/Shop/<name>.php` |
| `package:make-request` | `name`, `package` | `--force` | `src/Http/Requests/<name>.php` |
| `package:make-middleware` | `name`, `package` | `--force` | `src/Http/Middleware/<name>.php` |
| `package:make-model` | `name`, `package` | `--force` | `src/Models/<name>.php`, `src/Models/<name>Proxy.php` and `src/Contracts/<name>.php` |
| `package:make-model-proxy` | `name`, `package` | `--force` | `src/Models/<name>.php`; pass the full name, such as `FaqProxy` |
| `package:make-model-contract` | `name`, `package` | `--force` | `src/Contracts/<name>.php` |
| `package:make-migration` | `name`, `package` | None | A migration in `src/Database/Migrations`, through `make:migration` |
| `package:make-seeder` | `name`, `package` | `--force` | `src/Database/Seeders/<name>.php` |
| `package:make-repository` | `name`, `package` | `--force` | `src/Repositories/<name>.php`, for the contract named `<name>` without `Repository` |
| `package:make-datagrid` | `name`, `package` | `--force` | `src/Datagrids/<name>.php` |
| `package:make-event` | `name`, `package` | `--force` | `src/Events/<name>.php` |
| `package:make-listener` | `name`, `package` | `--force` | `src/Listeners/<name>.php` |
| `package:make-mail` | `name`, `package` | `--force` | `src/Mail/<name>.php` |
| `package:make-notification` | `name`, `package` | `--force` | `src/Notifications/<name>.php` |
| `package:make-command` | `name`, `package` | `--force` | `src/Console/Commands/<name>.php`, with the signature `command:name` |
| `package:make-shipping` | `name`, `package` | `--force` | `src/Carriers/<name>.php`, whose code is the lower-cased package name |
| `package:make-payment` | `name`, `package` | `--force` | `src/Payment/<name>.php`, whose code is the lower-cased package name |
| `package:make-vite-config` | `package` | `--force` | `vite.config.js` beside `src` |
| `package:make-tailwind-config` | `package` | `--force` | `tailwind.config.js` beside `src` |
| `package:make-postcss-config` | `package` | `--force` | Nothing: it stops with an error, because it asks for a `post-config` stub the package doesn't ship |
| `package:make-shop-theme` | `key`, `package` | `--force` | A `shop.<key>` entry written into `config/themes.php`, and `resources/themes/shop/<key>/views/home/index.blade.php` |
| `package:make-admin-theme` | `key`, `package` | `--force` | An `admin.<key>` entry written into `config/themes.php`, and `resources/themes/admin/<key>/views/dashboard/index.blade.php` |

The generator's README passes a file name to the three config commands, as in `package:make-vite-config vite.config ACME/TestPackage`; their signatures take only `package`, so that form is rejected. The two theme commands require `package` but never use it; nothing is written into the package.

## Things to Watch

- **`--force` deletes the whole package folder.** On `package:make`, `package:make-shipping-method` and `package:make-payment-method` it deletes `packages/<Vendor>/<Name>` before generating, with every file you've added. Given a core name such as `Webkul/Admin`, it deletes the core package. On the class commands, `--force` overwrites only the files that command writes.
- **Generate before you create any file by hand.** The three package commands refuse a folder that already exists, printing `Package 'Webkul/Faq' already exist !` and exiting with status `0`, so a script doesn't notice. Add files to an existing package with the class commands.
- **The menu and ACL entries sit beside Sales, with an untranslated label.** [Menu](../package-development/menu.md) and [Access Control List](../package-development/access-control-list.md) replace both files.
- **The theme commands break `config/themes.php`.** They need `--force`, because the file always exists, and they rewrite it from `var_export()`: every comment is lost, and the `SectionTypeEnum` cases in the stock file come out as PHP that doesn't parse, so the application stops loading. Without `--force` they still write the Blade file before refusing. Register a theme as in [Creating a Store Theme](../theme-development/creating-store-theme.md) or [Creating an Admin Theme](../theme-development/creating-admin-theme.md) instead.
- **Generated code isn't formatted for Bagisto.** Run `vendor/bin/pint packages/Webkul/Faq` to fix the aligned `=>` columns and spacing, and remove the comments inside method bodies by hand, as the [Coding Standards](../advanced/coding-standards.md) require.
- **No version constraint.** The generator's `composer.json` requires nothing, so Composer installs it on any PHP, Laravel or Bagisto version without a warning. Its README asks for Bagisto 2.3 or higher, and nothing in the release is specific to 2.5.

### Stubs That Don't Match Bagisto 2.5

| Stub | What happens | Fix |
|---|---|---|
| Admin routes | A fixed `admin/` prefix instead of `config('app.admin_url')`, so the page stays at `/admin/faq` when the store sets `APP_ADMIN_URL` | [Routes](../package-development/routes.md) |
| Storefront routes | No `PreventRequestsDuringMaintenance`, so the page stays up in maintenance mode | [Routes](../package-development/routes.md) |
| `package:make-request` | `authorize()` returns `false`, so every request using it gets a `403` | Return `true`, as in [Controllers](../package-development/controllers.md) |
| `package:make-datagrid` | Writes to `Datagrids`, not core's `DataGrids`, and labels columns with `admin::app.datagrid.*` keys the Admin package doesn't define | [DataGrid](../package-development/datagrid.md) |
| Concord module | No `Resources/manifest.php`, so `php artisan concord:modules` fails once the module is listed | [Register the Model with Concord](../package-development/models.md#register-the-model-with-concord) |
| Front-end build | Tailwind CSS 3 and Vite 4, while Bagisto builds with Tailwind CSS 4, and no view loads the build | [Loading Assets Outside the Stock Layout](../theme-development/vite-powered-theme-assets.md#loading-assets-outside-the-stock-layout) |

## Related Pages

- [Package Development](../package-development/getting-started.md): the `Webkul\Faq` package built by hand, file by file.
- [Creating Your First Shipping Method](../shipping-method-development/create-your-first-shipping-method.md): the `CustomExpressShipping` carrier by hand.
- [Creating Your First Payment Method](../payment-method-development/create-your-first-payment-method.md): the `CustomStripePayment` method by hand.
- [Artisan Commands](../advanced/artisan-commands.md): the commands Bagisto itself provides.

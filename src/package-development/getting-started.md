# Getting Started

A Bagisto package is a self-contained Laravel module under `packages/Webkul/<Name>/src`. It plugs into the same extension points as the core packages, so your feature survives Bagisto updates without an edit to core. This section builds one package, `Webkul\Faq`, one page at a time; this page creates it and registers it.

<a id="using-bagisto-package-generator"></a>
<a id="creating-a-package"></a>
<a id="scaffolding-with-the-package-generator"></a>

::: tip Package Generator
The [Package Generator](../tools/package-generator.md) can scaffold this package for you. This section builds it by hand, so you see every file and how it's registered.
:::

## What You'll Build

**`Webkul\Faq`**, a store FAQ:

- a `faqs` table, a model and a repository
- an admin section at `/admin/faq` with a DataGrid listing, create and edit forms, a sidebar entry and ACL permissions
- a storefront page at `/faq`, switched on and titled from the admin configuration
- English translations, ready to copy into the other 21 locales
- a listener, a console command and Pest tests

<a id="before-you-start"></a>

## Prerequisites

- Bagisto 2.5 installed and running, with its database migrated. See [Install with Composer](../getting-started/installation.md#install-with-composer).
- Composer and Artisan available where the application runs.
- Working knowledge of Laravel service providers, migrations, Eloquent and Blade. [Architecture Overview](../architecture/overview.md) shows where a package plugs in.

## The Names Used on Every Page

| What | Name |
|---|---|
| Folder | `packages/Webkul/Faq/src` |
| Namespace | `Webkul\Faq` |
| Service providers | `Webkul\Faq\Providers\FaqServiceProvider`, `Webkul\Faq\Providers\ModuleServiceProvider` |
| Table | `faqs` |
| Contract, model, proxy | `Webkul\Faq\Contracts\Faq`, `Webkul\Faq\Models\Faq`, `Webkul\Faq\Models\FaqProxy` |
| Repository | `Webkul\Faq\Repositories\FaqRepository` |
| Admin routes | `admin.faq.*`, under `/admin/faq` |
| Storefront route | `shop.faq.index`, at `/faq` |
| View and translation namespace | `faq::` |
| Menu and ACL key | `faq` |
| Configuration keys | `faq.settings.general.*` |
| Events | `faq.create.before`, `faq.create.after`, and the same pair for `update` and `delete` |

If you build your own package alongside, replace these names consistently, and pick a folder name no package in `packages/Webkul` already uses (see [Things to Watch](#things-to-watch)).

## The Path

| Page | Adds |
|---|---|
| Getting Started (this page) | The folder, the service provider, the autoload entry and the provider registration |
| [Migrations](./migrations.md) | The `faqs` table |
| [Models](./models.md) | Contract, model, proxy, and the Concord module listed in `config/concord.php` |
| [Repositories](./repositories.md) | `FaqRepository` and a seeder |
| [Routes](./routes.md) | The admin and storefront route files |
| [Controllers](./controllers.md) | A form request, the admin controller and the storefront controller |
| [Views](./views.md) | The admin forms and the storefront page |
| [Localization](./localization.md) | The `faq::` translations |
| [DataGrid](./datagrid.md) | The admin listing, with row and mass actions |
| [Menu](./menu.md) | The sidebar entry, merged into `menu.admin` |
| [Access Control List](./access-control-list.md) | Permissions for custom roles, merged into `acl` |
| [System Configuration](./system-configuration.md) | The storefront page's settings, merged into `core` |
| [Events, Commands and Tests](./events-commands-and-tests.md) | A listener, a console command and Pest tests |

::: details The Finished Package Tree

```text
packages/Webkul/Faq
├── src
│   ├── Config
│   │   ├── acl.php
│   │   ├── admin-menu.php
│   │   └── system.php
│   ├── Console
│   │   └── Commands
│   │       └── FaqSummary.php
│   ├── Contracts
│   │   └── Faq.php
│   ├── DataGrids
│   │   └── Admin
│   │       └── FaqDataGrid.php
│   ├── Database
│   │   ├── Migrations
│   │   │   └── <timestamp>_create_faqs_table.php
│   │   └── Seeders
│   │       └── FaqSeeder.php
│   ├── Http
│   │   ├── Controllers
│   │   │   ├── Admin
│   │   │   │   └── FaqController.php
│   │   │   └── Shop
│   │   │       └── FaqController.php
│   │   └── Requests
│   │       └── FaqRequest.php
│   ├── Listeners
│   │   └── Faq.php
│   ├── Models
│   │   ├── Faq.php
│   │   └── FaqProxy.php
│   ├── Providers
│   │   ├── EventServiceProvider.php
│   │   ├── FaqServiceProvider.php
│   │   └── ModuleServiceProvider.php
│   ├── Repositories
│   │   └── FaqRepository.php
│   ├── Resources
│   │   ├── lang
│   │   │   └── <locale>
│   │   │       └── app.php
│   │   ├── manifest.php
│   │   └── views
│   │       ├── admin
│   │       │   ├── create.blade.php
│   │       │   ├── edit.blade.php
│   │       │   ├── form-fields.blade.php
│   │       │   └── index.blade.php
│   │       └── shop
│   │           └── index.blade.php
│   └── Routes
│       ├── admin-routes.php
│       └── shop-routes.php
└── tests
    ├── Feature
    │   └── FaqTest.php
    └── FaqTestCase.php
```

:::

<a id="manual-setup-of-files"></a>
<a id="create-service-provider"></a>

## Create the Service Provider

The provider tells Laravel what the package contains: `register()` merges configuration, and `boot()` loads migrations, routes, views and translations. Every later page adds a line to one of the two.

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void {}

    /**
     * Bootstrap services.
     */
    public function boot(): void {}
}
```

<a id="update-composer-autoloader"></a>

## Autoload the Namespace

Add your namespace to `autoload.psr-4` in the root `composer.json`, beside the core packages' entries:

**File:** `composer.json`

```json
{
  "autoload": {
    "psr-4": {
      "Webkul\\Faq\\": "packages/Webkul/Faq/src"
    }
  }
}
```

The block shows only the entry to add; keep the others. Then regenerate the autoloader:

```bash
composer dump-autoload
```

<a id="registering-your-package"></a>
<a id="register-your-package"></a>
<a id="register-service-provider"></a>

## Register the Provider

Laravel reads service providers from `bootstrap/providers.php`. Import yours and add it to the end of the array:

**File:** `bootstrap/providers.php`

```php{5,19}
<?php

use App\Providers\AppServiceProvider;
use Webkul\Admin\Providers\AdminServiceProvider;
use Webkul\Faq\Providers\FaqServiceProvider;

return [
    /**
     * Application service providers.
     */
    AppServiceProvider::class,

    /**
     * Webkul's service providers.
     */
    AdminServiceProvider::class,
    // ...

    FaqServiceProvider::class,
];
```

## Test It

Clear the cached configuration first:

```bash
php artisan optimize:clear
```

1. Confirm that Laravel loaded the provider. The command prints `true`:

   ```bash
   php artisan tinker --execute="dump(app()->providerIsLoaded(Webkul\Faq\Providers\FaqServiceProvider::class));"
   ```

## Distribute or Remove a Package

Come back to this section when the package is finished.

### Install It in Another Store

Give the package its own `composer.json` beside `src`, under your vendor name:

**File:** `packages/Acme/Faq/composer.json`

```json
{
  "name": "acme/faq",
  "description": "A store FAQ for Bagisto.",
  "autoload": {
    "psr-4": {
      "Acme\\Faq\\": "src/"
    }
  },
  "extra": {
    "laravel": {
      "providers": [
        "Acme\\Faq\\Providers\\FaqServiceProvider"
      ]
    }
  }
}
```

- **Composer installs it.** Bagisto's root `composer.json` declares a path repository for `packages/*/*`, so a store that has the folder runs `composer require acme/faq:@dev`. The `@dev` is needed because the root sets `minimum-stability` to `stable` and the folder has no tagged version. Other stores install it from Packagist or a private Composer repository.
- **Discovery registers the provider** from `extra.laravel.providers`, so the store adds neither a PSR-4 entry nor a line in `bootstrap/providers.php`.
- **The Concord module is still listed by hand** in `config/concord.php`, followed by `php artisan migrate` and `php artisan optimize:clear`. Say so in the package's README.

### Remove It

Work in this order, while the package's files are still in place:

1. Roll back the package's tables. Given a folder, `migrate:reset` rolls back only the migrations in it:

   ```bash
   php artisan migrate:reset --path=packages/Webkul/Faq/src/Database/Migrations
   ```

2. Remove the module from `config/concord.php`, the provider from `bootstrap/providers.php` and the `Webkul\\Faq\\` entry from `composer.json`, or run `composer remove` for a package installed through Composer.
3. Delete the package folder, then run `composer dump-autoload` and `php artisan optimize:clear`.

Settings saved under `faq.` keys stay in the `core_config` table, and custom roles keep the `faq` permission keys; without the package, nothing reads them.

## Things to Watch

- **Choose a name no package uses.** `packages/Webkul` already holds the core packages, `RMA`, `CMS` and `GDPR` among them, and a package that reuses one of those names writes over core files. For a package you distribute, use your own vendor name, such as `Acme\Faq`; this guide keeps `Webkul` so its paths match the rest of the documentation.
- **A package with models registers twice.** `bootstrap/providers.php` loads the service provider; `config/concord.php` loads the `ModuleServiceProvider` that registers the models. [Models](./models.md) adds the second, and a package missing either half-loads.
- **Core packages aren't yours to edit.** A change inside `packages/Webkul/Admin` or any other core package is overwritten by the next Bagisto update. Extend it from your package: events, view render events, merged configuration, Concord model overrides, theme overrides, or a subclass bound in the container in place of a core class.
- **A cached configuration hides your merged entries.** `mergeConfigFrom()` does nothing while the configuration is cached, so run `php artisan optimize:clear` after changing a provider or a `Config` file.
- **A namespace missing from `composer.json` fails as "Class not found"**, even when the file exists. Run `composer dump-autoload` after adding the entry.

## Next Step

The provider loads nothing yet. The first thing the FAQ needs is its table.

**Continue to:** [Migrations](./migrations.md)

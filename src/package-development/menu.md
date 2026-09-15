# Menu

On this page you add **FAQ** to the admin sidebar, linking to the listing. The sidebar is built from configuration: core's entries live in `packages/Webkul/Admin/src/Config/menu.php`, merged into the `menu.admin` key, and a package merges a file of its own into the same key.

<a id="creating-the-menu-configuration"></a>
<a id="basic-menu-properties"></a>
<a id="understanding-menu-configuration-options"></a>

## Create the Menu File

**File:** `packages/Webkul/Faq/src/Config/admin-menu.php`

```php
<?php

return [
    [
        'key' => 'faq',
        'name' => 'faq::app.admin.menu.faq',
        'route' => 'admin.faq.index',
        'sort' => 11,
        'icon' => 'icon-information',
    ],
];
```

| Key | Meaning |
|---|---|
| `key` | The entry's identifier. Dots nest entries, so `faq.categories` sits under `faq`. It is also the ACL key that decides who sees the entry |
| `name` | A translation key, translated when the menu is built |
| `route` | The name of the route the entry opens |
| `sort` | The order among siblings. Core's top-level entries run from 1 (Dashboard) to 10 (Configure) |
| `icon` | A class from the admin icon font, such as `icon-cms`, `icon-settings` or `icon-information`, or `''` for none |

Every entry needs all five keys. `Webkul\Core\Menu` reads them without defaults, so a missing key fails with `Undefined array key` on every admin page, and the typed constructor of `Webkul\Core\Menu\MenuItem` rejects a `sort` or `icon` that is `null`.

<a id="registering-the-menu-configuration"></a>

## Merge It into the Admin Menu

Configuration is merged in `register()`, as `AdminServiceProvider` merges core's menu:

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{14-17}
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/admin-menu.php',
            'menu.admin'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');

        $this->loadRoutesFrom(__DIR__.'/../Routes/admin-routes.php');

        $this->loadRoutesFrom(__DIR__.'/../Routes/shop-routes.php');

        $this->loadViewsFrom(__DIR__.'/../Resources/views', 'faq');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'faq');
    }
}
```

## Add the Label

Add a `menu` group under `admin` in the language file, and the same key in every other locale:

**File:** `packages/Webkul/Faq/src/Resources/lang/en/app.php`

```php
<?php

return [
    'admin' => [
        // ...

        'menu' => [
            'faq' => 'FAQ',
        ],
    ],

    // ...
];
```

<a id="testing-your-admin-menu"></a>

## Test It

Clear the cached configuration, then reload the admin:

```bash
php artisan optimize:clear
```

1. **FAQ** appears at the end of the sidebar and opens `/admin/faq`.
2. Open `/admin/faq/create`. **FAQ** stays highlighted, because the page's URL starts with the entry's URL.

## How the Sidebar Uses the Entries

- **Visibility follows the ACL.** `Webkul\Core\Menu` drops every entry for which `bouncer()->hasPermission($key)` is false. The default administrator holds every key; an admin with a custom role sees **FAQ** once [Access Control List](./access-control-list.md) defines the `faq` permission and the role is given it.
- **A parent opens its first visible child.** After that filter, an entry with children takes the route of its first remaining child, so a parent always leads somewhere the admin may go.
- **The current entry is found by URL.** The entry whose URL is the longest prefix of the current URL becomes current, and every entry whose key is a prefix of its key is highlighted with it. Keep a section's pages under its entry's URL, as `/admin/faq/create` is under `/admin/faq`.

<a id="creating-hierarchical-menu-structure"></a>

## Nested Entries

A second level is another entry whose key starts with its parent's. Suppose the package later gains categories with their own `admin.faq.categories.index` route, which this guide doesn't build:

```php
<?php

return [
    [
        'key' => 'faq',
        'name' => 'faq::app.admin.menu.faq',
        'route' => 'admin.faq.index',
        'sort' => 11,
        'icon' => 'icon-information',
    ], [
        'key' => 'faq.questions',
        'name' => 'faq::app.admin.menu.questions',
        'route' => 'admin.faq.index',
        'sort' => 1,
        'icon' => '',
    ], [
        'key' => 'faq.categories',
        'name' => 'faq::app.admin.menu.categories',
        'route' => 'admin.faq.categories.index',
        'sort' => 2,
        'icon' => '',
    ],
];
```

Each nested key needs its parent entry, and an ACL key of the same name. Core nests three levels in places, such as `sales.rma.requests`.

## Other Menus

- **The customer account menu** on the storefront is built the same way, from the `menu.customer` key that the Shop package fills from `packages/Webkul/Shop/src/Config/menu.php`, with entries under `account` (`account.orders`, `account.address`). A package that adds a page there merges an entry into `menu.customer` and protects the page's route with the `customer` middleware. No ACL applies to that menu.
- **The admin command palette**, opened with Ctrl+K or ⌘K, indexes the admin menu and the configuration tree, so **FAQ** is searchable as soon as its entry exists. To add actions and search aliases of your own, see [Command Palette](../advanced/command-palette.md).

## Things to Watch

- **A menu key with no ACL key of the same name is invisible to custom roles**, while the default administrator still sees it.
- **Reusing a core key doesn't replace the core entry predictably.** All entries are merged into one list and indexed by `key`, so which of two entries with the same key survives depends on provider order. Use keys of your own.
- **Every route named in the menu must exist.** The sidebar calls `route()` for every entry, so an unknown route name breaks every admin page.
- **A cached configuration hides the entry.** Run `php artisan optimize:clear` after changing the file.

## Next Step

The sidebar shows **FAQ** to the default administrator. Next, define the permissions that decide who else may see and use it.

**Continue to:** [Access Control List](./access-control-list.md)

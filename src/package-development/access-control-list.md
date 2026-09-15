# Access Control List

On this page you give the FAQ four permissions: see the listing, create, edit and delete. Each entry in an `acl.php` names a permission key and the routes it unlocks; the roles form shows the keys as a tree, and the `admin` middleware refuses any route the admin's role doesn't hold. Core's entries live in `packages/Webkul/Admin/src/Config/acl.php`, merged into the `acl` configuration key.

<a id="define-acl-configuration"></a>
<a id="basic-acl-properties"></a>
<a id="understanding-acl-configuration-options"></a>

## Create the ACL File

**File:** `packages/Webkul/Faq/src/Config/acl.php`

```php
<?php

return [
    [
        'key' => 'faq',
        'name' => 'faq::app.admin.acl.faq',
        'route' => 'admin.faq.index',
        'sort' => 10,
    ], [
        'key' => 'faq.create',
        'name' => 'faq::app.admin.acl.create',
        'route' => [
            'admin.faq.create',
            'admin.faq.store',
        ],
        'sort' => 1,
    ], [
        'key' => 'faq.edit',
        'name' => 'faq::app.admin.acl.edit',
        'route' => [
            'admin.faq.edit',
            'admin.faq.update',
            'admin.faq.mass_update',
        ],
        'sort' => 2,
    ], [
        'key' => 'faq.delete',
        'name' => 'faq::app.admin.acl.delete',
        'route' => [
            'admin.faq.delete',
            'admin.faq.mass_delete',
        ],
        'sort' => 3,
    ],
];
```

Every admin route the package registers appears once, and the four keys mirror core's CMS permissions: `cms`, `cms.create`, `cms.edit` and `cms.delete`.

| Key | Meaning |
|---|---|
| `key` | The permission. Dots nest it under its parent in the roles form. The menu entry and every `bouncer()->hasPermission()` check use the same string |
| `name` | A translation key for the roles form |
| `route` | The route name, or a list of route names, the permission unlocks |
| `sort` | The order among siblings. Core's top-level permissions run from 1 (Dashboard) to 9 |

Every entry needs all four keys.

<a id="register-acl-configuration"></a>

## Merge It into the ACL

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{19-22}
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

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/acl.php',
            'acl'
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

## Add the Labels

Add an `acl` group under `admin` in the language file, and the same keys in every other locale:

**File:** `packages/Webkul/Faq/src/Resources/lang/en/app.php`

```php
<?php

return [
    'admin' => [
        // ...

        'acl' => [
            'faq' => 'FAQ',
            'create' => 'Create',
            'edit' => 'Edit',
            'delete' => 'Delete',
        ],
    ],

    // ...
];
```

## Test It

Clear the cached configuration first:

```bash
php artisan optimize:clear
```

1. Open `/admin/settings/roles/create`. The permission tree lists **FAQ**, with **Create**, **Edit** and **Delete** beneath it.
2. Create a role at `/admin/settings/roles/create` with only **Dashboard** ticked, and an admin user with that role. Signed in as that user, open `/admin/faq`. The request is refused with a `401`.
3. Edit the role: tick **FAQ**, untick **Create**, **Edit** and **Delete**, and save. Reload `/admin/faq` as that user. The listing opens and **FAQ** shows in the sidebar, but the **Create FAQ** button and the row actions are hidden.

## How a Route Is Checked

`Webkul\User\Http\Middleware\Bouncer`, registered as the `admin` middleware, runs on every admin request. After the sign-in check, and before the two-factor check:

1. A role whose permission type is **All** passes.
2. A custom role with no permissions at all is signed out and sent back to the sign-in page.
3. A route in `Bouncer::UNRESTRICTED_ROUTES` passes for every signed-in admin: the admin's own account and two-factor settings, notifications, the command palette, help, the DataGrid look-up and saved filters, the editor's image upload, Magic AI content and image generation, and deleting an admin user.
4. Any other route is looked up in a map built from every `acl.php`, from route name to permission key. A route missing from the map is refused with a `401`, and so is a route whose key the role doesn't hold.

<a id="checking-permissions-in-your-code"></a>

## Check a Permission Yourself

The middleware already enforces the permission of the route being requested. Check a key yourself to decide what a page shows, or when an action needs a second permission:

- **In a view**, hide controls the role can't use. The listing page from [Views](./views.md) wraps its create button:

  ```blade
  @if (bouncer()->hasPermission('faq.create'))
      <a
          href="{{ route('admin.faq.create') }}"
          class="primary-button"
      >
          @lang('faq::app.admin.index.create-btn')
      </a>
  @endif
  ```

- **In a DataGrid**, wrap each action and mass action. [DataGrid](./datagrid.md) wraps edit and delete in `faq.edit` and `faq.delete`.

- **In a controller**, refuse the request when the role lacks a permission other than the route's own:

  ```php
  abort_unless(bouncer()->hasPermission('faq.delete'), 401);
  ```

`bouncer()->hasPermission()` returns `true` for a role whose permission type is **All**. Don't call `bouncer()->allow()` outside the middleware: it doesn't make that exception, and for the default Administrator role, whose stored permission list is empty, it fails with a `TypeError`.

<a id="creating-hierarchical-acl-structure"></a>

## Things to Watch

- **Every admin route needs an entry.** A route missing from every `acl.php` answers `401` to custom roles, while the default administrator still reaches it, so test as an admin with a custom role before you call a route done. `UNRESTRICTED_ROUTES` is a constant in the core middleware, not an extension point.
- **Declare every parent key.** The roles form draws its tree from the dotted keys through `acl()->getItems()`. A key whose top-level parent has no entry of its own breaks the roles form, and a deeper key whose parent is missing is left out of the tree without a warning.
- **Hiding isn't protecting.** A `bouncer()->hasPermission()` check around a button changes what is shown; the route's ACL entry is what refuses the request.
- **Spell a key the same everywhere.** `acl.php`, `admin-menu.php`, views and DataGrids compare plain strings, so a typo hides a control or shows one the role can't use, and nothing reports it.
- **Test the coverage.** `packages/Webkul/Admin/tests/Feature/Acl/PermissionCoverageTest.php` requests every route in the Admin package's `acl.php` as a role holding its permission; [Events, Commands and Tests](./events-commands-and-tests.md) tests the FAQ route with a role that lacks it.

## Next Step

The admin section is complete and protected. Next, let the admin configure the storefront page.

**Continue to:** [System Configuration](./system-configuration.md)

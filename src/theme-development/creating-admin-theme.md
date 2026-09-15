# Creating an Admin Theme

An admin theme overrides the Blade views of the `Admin` package the same way a storefront theme overrides the `Shop` package. This page registers the `custom-admin-theme` theme folder and overrides the dashboard.

## What You'll Build

```text
config/themes.php                         # the custom-admin-theme entry
resources/
└── admin-themes/
    └── custom-admin-theme/
        └── views/
            └── dashboard/
                └── index.blade.php       # replaces admin::dashboard.index
```

## Step 1: Register the Admin Theme

Admin themes are entries under `admin` in `config/themes.php`, with the same keys as [storefront themes](./creating-store-theme.md#theme-configuration-keys) except `customize`: sections and image templates are storefront concepts.

**File:** `config/themes.php`

```php{19-29}
<?php

return [
    'admin-default' => 'default',

    'admin' => [
        'default' => [
            'name' => 'Default',
            'assets_path' => 'public/themes/admin/default',
            'views_path' => 'resources/admin-themes/default/views',

            'vite' => [
                'hot_file' => 'admin-default-vite.hot',
                'build_directory' => 'themes/admin/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],

        'custom-admin-theme' => [
            'name' => 'Custom Admin Theme',
            'assets_path' => 'public/themes/admin/custom-admin-theme',
            'views_path' => 'resources/admin-themes/custom-admin-theme/views',

            'vite' => [
                'hot_file' => 'admin-default-vite.hot',
                'build_directory' => 'themes/admin/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

The `vite` block reuses the default admin build; [Building an Admin Theme](./vite-powered-theme-assets.md#building-an-admin-theme) gives the theme its own.

## Step 2: Override the Dashboard

The file replaces `packages/Webkul/Admin/src/Resources/views/dashboard/index.blade.php`, because its path under `views_path` is the same.

**File:** `resources/admin-themes/custom-admin-theme/views/dashboard/index.blade.php`

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('admin::app.dashboard.index.title')
    </x-slot>

    <div class="flex items-center justify-between gap-4 max-sm:flex-wrap">
        <p class="text-xl font-bold text-gray-800 dark:text-white">
            Custom Admin Dashboard
        </p>
    </div>

    <div class="box-shadow mt-8 rounded-sm bg-white p-4 dark:bg-gray-900">
        <p class="text-gray-600 dark:text-gray-300">
            Welcome to your customized Bagisto admin panel!
        </p>
    </div>
</x-admin::layouts>
```

The page keeps the stock `<x-admin::layouts>` component, which draws the header and sidebar, and uses only classes the admin stylesheet already contains.

## Step 3: Activate the Admin Theme

The admin theme isn't chosen per channel: `admin-default` is the theme the whole admin uses. Set it to your theme's code:

**File:** `config/themes.php`

```php{4}
<?php

return [
    'admin-default' => 'custom-admin-theme',

    'admin' => [
        // ...
    ],
];
```

Then clear the cached configuration:

```bash
php artisan optimize:clear
```

On an admin URL, `Webkul\Theme\ThemeViewFinder` activates `admin-default` before it looks up a view, and views resolve as described in [How Views Are Resolved](./creating-store-theme.md#how-views-are-resolved), with `admin::` in place of `shop::`.

## Test It

1. Sign in to the admin. The dashboard shows your template.
2. Open another admin page. It still uses the stock view.
3. Set `admin-default` back to `'default'` and clear the cache. The stock dashboard returns.

## Things to Watch

- **A static dashboard drops the widgets.** The stock dashboard draws the sales, customer and stock widgets. To keep them, copy the package file into your theme and edit the copy.
- **Until the theme has its own build, use existing classes.** Tailwind only emits classes it finds in the Admin package, so a class used only in your theme's files isn't in the stylesheet.
- **Layout components override the same way.** Restyle the header or sidebar with `<views_path>/layouts/index.blade.php`, `layouts/header/index.blade.php` or `layouts/sidebar/index.blade.php`; see [Admin Layout](./understanding-layouts.md#admin-layout).
- **Keep the permission checks.** Admin views hide actions with `bouncer()->hasPermission()`; a copy that drops a check shows the action to roles that can't use it, so test with a custom role as well as a super admin.

## Related Pages

- [Creating a Custom Theme Package](./creating-custom-theme-package.md): package the admin theme, publishing to `resources/admin-themes/<code>/views`.
- [Vite-Powered Theme Assets](./vite-powered-theme-assets.md#building-an-admin-theme): give the admin theme its own build.
- [Understanding Layouts](./understanding-layouts.md#admin-layout): what the admin layout provides.
- [Package Development](../package-development/getting-started.md): build your own admin screens.

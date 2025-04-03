# Admin Theme

[[TOC]]

## Introduction

The Bagisto admin panel serves as the command center for your e-commerce operations. Customizing its appearance allows you to create a more efficient and branded management experience. This guide provides comprehensive instructions for configuring and developing custom admin themes to match your brand identity and workflow preferences.

## Theme Configuration

Bagisto's theme system is managed through a central configuration file: `themes.php`. This file contains all the theme definitions and settings that determine how your storefront appears.

### Key Configuration Parameters

| Parameter              | Description                                             |
| ---------------------- | --------------------------------------------------------|
| **`admin-default`**    | Designates the active theme for your admin view |
| **`name`**             | The display name of your theme. |
| **`views_path`**       | Location of the theme's blade template files. |
| **`assets_path`**      | Location of CSS, JavaScript, and image files.  |
| **`parent`**           | (Optional) Parent theme to inherit from. |
| **`vite`**             | Configuration for Vite assets bundling |

1. Locate the `themes.php` File. Navigate to the `config` folder located in the root directory of your Bagisto project.

```
- app
- bin
- bootstrap
- config
    ├── ...
    └── themes.php  👈 This is the file we need
- database
- packages
    └── Webkul
```

2. Locate the `themes.php` file inside the `config` folder located in your project's root directory. Look for the keys `admin-default` and `admin`. The configuration will appear as follows.

```php
<?php
return [
    'admin-default' => 'default',

    'admin' => [
        'default' => [
            'name'        => 'Default',
            'assets_path' => 'public/themes/admin/default',
            'views_path'  => 'resources/admin-themes/default/views',

            'vite'        => [
                'hot_file'                 => 'admin-default-vite.hot',
                'build_directory'          => 'themes/admin/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```
3. Understand the structure

- `admin-default` defines which theme is currently active
- The `admin` array contains all available themes
- Each theme (like `default`) has its own configuration settings

## Creating a Custom Theme

Follow these four steps to create and implement a custom admin theme:

1. Add your new theme definition to the themes.php file under the admin section:

```php
<?php
return [
    'admin-default' => 'default',

    'admin' => [
        'default' => [
            'name'        => 'Default',
            'assets_path' => 'public/themes/admin/default',
            'views_path'  => 'resources/admin-themes/default/views',

            'vite'        => [
                'hot_file'                 => 'admin-default-vite.hot',
                'build_directory'          => 'themes/admin/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],

        'new-theme' => [
            'name'        => 'new-theme',
            'assets_path' => 'public/themes/admin/new-theme',
            'views_path'  => 'resources/admin-themes/new-theme/views',

            'vite'        => [
                'hot_file'                 => 'admin-new-theme-vite.hot',
                'build_directory'          => 'themes/admin/new-theme/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

2. Set up the required directories for your new theme and create template files within the theme's views directory. Begin by customizing the dashboard.

```
📁 resources
 └── 📁 admin-themes
     └── 📁 new-theme
         └── 📁 views
             └── 📁 dashboard
                 └── 📄 index.blade.php
```

Example content for index.blade.php:

```html
New Theme Sample
```

3. Change the `admin-default` value in your `themes.php` file to activate your new theme

```php
'admin-default' => 'new-theme',
```

4. Clear the application cache to ensure your changes take effect:

```sh
php artisan cache:clear
```

Now, when you access the dashboard page in the admin area, you should see the customized version provided by the new theme

:::tip Note
This section covers the basic theme setup using resources. In the next topic, we'll explore an advanced setup with a separate package and Vite configuration.
:::
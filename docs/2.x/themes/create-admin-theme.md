# Admin Theme

[[TOC]]

## Introduction

In Bagisto, the flexibility to customize the look and feel of your admin panel allows you to create a more personalized and efficient backend experience. This guide provides a step-by-step process to configure and create a new admin theme. By following these instructions, you will be able to set up custom views and assets, tailoring the admin interface to better suit your brand and operational needs.

## Configuration

To configure the admin theme in Bagisto, follow these steps:

- Locate the `themes.php` file inside the `config` folder located in your project's root directory. Look for the keys `admin-default` and `admin`. The configuration will appear as follows:

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

| Key            | Description                              |
| -------------- | ---------------------------------------- |
| admin-default  | Sets the current theme for the admin area |
| admin          | Stores a list of available themes         |

## Creating a Theme

To create a new admin theme, follow these steps

### Add a New Theme Entry

Update the themes.php file inside the config folder to include your new theme. Add the new theme entry under the admin array:

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

### Specify the Path to Views and Assets

Ensure the paths to the views and assets folders are according to your desired structure. For example

- Views structure:

    ```
    - resources
    └── admin-themes
        └── new-theme
            └── views
    ```

- Assets structure:

    ```
    - public
    └── admin-themes
        └── new-theme
            └── assets
    ```

### Customize the Dashboard Page

Create the directory structure for the dashboard page in the `new-theme` folder, mirroring the structure in the `default` folder. For example:

```
- resources
    └── admin-themes
        └── new-theme
            └── views
                └── dashboard
                    └── index.blade.php
```

Add the desired content for the dashboard page in the index.blade.php file. For example:

```php
New Theme Sample
```

### Activate the New Theme

Change the value of the `admin-default` key in the `config/themes.php` file to activate the new theme

```php
'admin-default' => 'new-theme',
```

Now, when you access the dashboard page in the admin area, you should see the customized version provided by the new theme

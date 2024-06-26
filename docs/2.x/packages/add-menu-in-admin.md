# Admin Menu

[[TOC]]

## Introduction

The admin menu in Bagisto allows developers to customize and extend the default menu items within the admin panel. By adding custom menu items, you can provide easy access to various sections and features specific to your package. This guide will walk you through the process of configuring the admin menu for your custom package.

## Configure the admin menu

To ensure that the admin menu includes the necessary configuration, follow these steps:

### Create Configuration File:

- Navigate to your package's source directory, typically located at `packages/Webkul/Blog/src`.

- Create a new directory named `Config` if it doesn't already exist.

- Inside the `Config` directory, create a file `named admin-menu.php`.

```
└── packages
    └── Webkul
        └── Blog
            └── src
                ├── ...
                └── Config
                    └── admin-menu.php
```

### Define Menu Items

Open `admin-menu.php` and define your menu items using an array structure. Each item should include:

- `key` Unique identifier for the menu item.
- `name` Display name of the menu item.
- `route` Laravel route name corresponding to the menu item.
- `sort` Optional. Sort order for menu items.
- `icon` Optional. CSS class for an icon associated with the menu item.

```php
<?php

return [
    [
        'key'   => 'blogs',
        'name'  => 'Blogs',
        'route' => 'blog.admin.index',
        'sort'  => 2,
        'icon'  => 'icon-blog',
    ],
];
```

### Define Routes

In your package's `admin-routes.php` file, define the named route used in` admin-menu.php` as follows.

```php
Route::get('/blog', [PostController::class, 'index'])->name('blog.admin.index');
```

    In this step, we define the route that corresponds to the menu item added in the previous step.

### Add Menu Icon

Place your custom icon font (e.g., `font.woff`) under `assets/fonts/`.

Define the icon in your CSS file (e.g., `assets/css/app.css`) using a pseudo-element class.

For example

```css
.icon-blog:before {
    content: "\e929";  /* Your Icon Code */
}
```

### Merge Configuration:

In your package's service provider (`BlogServiceProvider`), use `mergeConfigFrom()` to integrate your `admin-menu.php` configuration with the core admin menu.

```php
<?php

namespace Webkul\Blog\Providers;

use Illuminate\Support\ServiceProvider;

class BlogServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/admin-menu.php', 'menu.admin'
        );
    }
}
```

### Optimize Application

Finally, run the following command to optimize your application:

```
php artisan optimize:clear
```

After completing these steps, your custom menu item (Blogs) with its associated route and icon should appear within the admin panel of Bagisto.

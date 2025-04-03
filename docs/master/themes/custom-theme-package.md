# Custom Theme Package

[[TOC]]

## Introduction 

A custom theme package allows you to separate your theme files from Bagisto's core structure, making your theme modular, reusable, and easier to maintain. This approach provides better control over layouts, assets, and views while enabling seamless theme management.
This guide walks you through creating and configuring a custom theme package in Bagisto, including setting up service providers, integrating assets, and using Vite for asset bundling.

## Package Structure Setup

### Create the Directory Structure
First, create the following directory structure for your new theme package:

```
📁 packages
└── 📁 Webkul
    └── 📁 NewTheme
        └── 📁 src
            ├── 📁 Providers
            │   └── 📄 NewThemeServiceProvider.php
            │
            ├── 📁 Resources  
            │   ├── 📁 views
            │   │   └── 📁 home
            │   │       └── 📄 index.blade.php
            │   │
            │   └── 📁 assets
            │       ├── 📁 css
            │       │   └── 📄 app.css
            │       └── 📁 js
            │           └── 📄 app.js
            │
            ├── 📄 composer.json    
            ├── 📄 package.json
            ├── 📄 tailwind.config.js
            └── 📄 vite.config.js
```

### Create the Service Provider

Add the following code to `NewThemeServiceProvider.php`:

```php
<?php

namespace Webkul\NewTheme\Providers;

use Illuminate\Support\ServiceProvider;

class NewThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Service provider code will be added here
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
```

### Configure Autoloading

Update the root `composer.json` file to include your package's namespace:

```php
"autoload": {
    ...
    "psr-4": {
        // Other PSR-4 namespaces
        "Webkul\\NewTheme\\": "packages/Webkul/NewTheme/src"
    }
}
```

### Register the Service Provider

Add your service provider to `bootstrap/providers.php` 

```php
<?php

return [
    // Application service providers.
    App\Providers\AppServiceProvider::class,

    // Other service providers
    
    // NewTheme service providers.
    Webkul\NewTheme\Providers\NewThemeServiceProvider::class,
];
```

### Update Autoloader

Run the following command to register your package

```shell
composer dump-autoload
```

:::tip Note
Your new theme package has been set up successfully! In the next step, we will configure and apply the theme.
:::

## Theme Configuration

### Define the Theme

Edit `config/themes.php` to include your new theme:

```php
<?php
return [
    'shop-default' => 'default',

    'shop' => [
        'default' => [
            'name'        => 'Default',
            'assets_path' => 'public/themes/shop/default',
            'views_path'  => 'resources/themes/default/views',

            'vite'        => [
                'hot_file'                 => 'shop-default-vite.hot',
                'build_directory'          => 'themes/shop/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],

        'new-theme' => [
            'name'        => 'New Theme',
            'assets_path' => 'public/themes/shop/new-theme',
            'views_path'  => 'resources/themes/new-theme/views',

            'vite'        => [
                'hot_file'                 => 'shop-new-theme-vite.hot',
                'build_directory'          => 'themes/shop/new-theme/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

### Create Sample View

Add content to `packages/Webkul/NewTheme/src/Resources/views/home/index.blade.php`

```html
<div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold">New Theme Sample</h1>
    <p>This is a sample page from your custom Bagisto theme.</p>
</div>
```

### Update Service Provider

Configure the service provider to publish your theme's views. Update the `boot` method in `NewThemeServiceProvider.php`:

```php
public function boot()
{
    $this->publishes([
        __DIR__.'/../Resources/views'  => resource_path('themes/new-theme/views'),
    ]);
}
```

4. To publish the view files, run the following command

```
php artisan vendor:publish --provider="Webkul\NewTheme\Providers\NewThemeServiceProvider" --force
```

:::tip Note
Your new theme has been set up successfully! Next, we will configure Tailwind CSS and Vite to manage styles and assets efficiently.
:::

## Asset Management

### Configure package.json

Create `packages/Webkul/NewTheme/package.json` with the following content.

```json
{
    "private": true,
    "scripts": {
        "dev": "vite",
        "build": "vite build"
    },
    "devDependencies": {
        "@vitejs/plugin-vue": "^4.1.0",
        "autoprefixer": "^10.4.14",
        "laravel-vite-plugin": "^0.7.4",
        "postcss": "^8.4.21",
        "tailwindcss": "^3.3.1",
        "vite": "^4.2.1"
    }
}
```

### Configure Tailwind CSS

Add the following to `packages/Webkul/NewTheme/tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/Resources/**/*.blade.php", "./src/Resources/**/*.js"],

    theme: {
        screens: {
            sm: "525px",
            md: "768px",
            lg: "1024px",
            xl: "1240px",
        },

        extend: {
            colors: {
                darkPink: '#F85156',
            },
        }
    },

    plugins: [],
};
```

### Create CSS Entry Point

Add the following to `packages/Webkul/NewTheme/src/Resources/assets/css/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles can be added here */
```

### Create JS Entry Point

Add the following to `packages/Webkul/NewTheme/src/Resources/assets/js/app.js`

```js
// Import your custom JS modules here
console.log('New Theme JS initialized');

```

### Configure Vite

3. To configure your vite Add the following to `packages/Webkul/NewTheme/vite.config.js`:

```js
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig(({ mode }) => {
    const envDir = "../../../";

    Object.assign(process.env, loadEnv(mode, envDir));

    return {
        build: {
            emptyOutDir: true,
        },

        envDir,

        server: {
            host: process.env.VITE_HOST || "localhost",
            port: process.env.VITE_PORT || 5173,
            cors: true,
        },

        plugins: [
            vue(),

            laravel({
                hotFile: "../../../public/shop-new-theme-vite.hot",
                publicDirectory: "../../../public",
                buildDirectory: "themes/shop/new-theme/build",
                input: [
                    "src/Resources/assets/css/app.css",
                    "src/Resources/assets/js/app.js",
                ],
                refresh: true,
            }),
        ],

        experimental: {
            renderBuiltUrl(filename, { hostId, hostType, type }) {
                if (hostType === "css") {
                    return path.basename(filename);
                }
            },
        },
    };
});
```

:::warning
Make sure the `app.css` and `app.js` file added into your package under the assets folder.
:::

### Install Dependencies

Navigate to your theme package directory and install dependencies:

4. Navigate to the packages directory:

```shell
cd packages/Webkul/NewTheme

npm install
```

### Compile your assets

```shell
npm run build
```

### Publish Theme Files

Publish your theme's views to the Bagisto application:

```shell
php artisan vendor:publish --provider="Webkul\NewTheme\Providers\NewThemeServiceProvider" --force
```

### Using Theme Assets in Templates

In your Blade templates, use the Vite directive to include your theme's assets:

```html
@vite(['themes/shop/new-theme/build/css/app.css', 'themes/shop/new-theme/build/js/app.js'])
```

You've successfully created a custom theme package for Bagisto! This modular approach allows you to maintain your theme separately from the core and easily reuse it across multiple projects
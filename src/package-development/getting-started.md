# Getting Started

A package is a self-contained module that encapsulates specific features or functionality, allowing developers to add custom features without altering the core codebase. This approach not only preserves the integrity of the core system but also ensures that updates and maintenance can be carried out smoothly.

By developing packages, you can introduce new functionalities, integrate third-party services, or customize existing features to better meet your business requirements. Each package is isolated, promoting clean code practices and enabling easier debugging and testing.

To provide you with a practical understanding of package development, we'll be building a basic **RMA** package throughout this documentation, a small return-request tracker. This will demonstrate real-world implementation patterns and show you how different components work together.

The RMA package will include:
- A `rma_requests` table, model, and repository
- Admin routes, controllers, and a DataGrid listing
- An admin menu entry, ACL permissions, and system configuration
- Translations

::: warning Demonstration Purpose
This RMA package is designed for educational purposes to demonstrate package development concepts. It includes only basic CRUD operations and simplified workflows. For production use, you would need to implement additional features like complex business rules, advanced security measures, and comprehensive error handling.

Bagisto core already ships a complete RMA package at `packages/Webkul/RMA` (return requests, reasons, rules, statuses and custom fields), registered in `composer.json`, `bootstrap/providers.php` and `config/concord.php`. The tutorial builds a much smaller package under the same name so the examples read naturally. If you follow along on a real installation, give your package a different name, for example `Webkul/ReturnTracker`, so nothing you create overwrites the shipped files, and treat the core package as a reference implementation of everything covered here.
:::

## Prerequisites

Before getting started with package development, ensure you have:

- A working [Bagisto Application](/getting-started/installation.html#%F0%9F%9A%80-quick-installation-recommended)
- Basic knowledge of [Laravel Framework](https://laravel.com/docs)
- Understanding of [PHP](https://www.php.net/manual/) and Object Oriented Programming

## Using Bagisto Package Generator

To facilitate package development, you can use the [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator). It is a separate, optional development dependency; Bagisto itself ships no `package:make` command. Follow the steps below to install it:

::: tip Package Generator Benefits
The [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator) automatically creates the necessary directory structure, service providers, and configuration files, saving you time and ensuring consistency across packages.
:::

### Installation

Install the [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator) as a development dependency by running the following command in the root folder of your Bagisto application:

```bash
composer require --dev bagisto/bagisto-package-generator
```

The `package:make*` commands shown in this section come from that package. Check its README for the version that supports your Bagisto release; the commands and their output are not part of Bagisto core.

### Creating a Package

Once installed, you can generate your package using the following command:

::: info Example Package
We will assume that the package name is **"RMA"** for demonstration purposes.
:::

- If the package directory does not exist:

  ```bash
  php artisan package:make Webkul/RMA
  ```

- If the package directory already exists, you can use the `--force` option to overwrite it:

  ```bash
  php artisan package:make Webkul/RMA --force
  ```

This command will set up the necessary files and directories in the `packages` directory.

### Registering Your Package

To register your package, follow these steps:

#### Update Composer Autoloader

Add your package's namespace to the `psr-4` section in the `composer.json` file located in the root directory of your Bagisto application. Update it as follows:

```json{5}
"autoload": {
    ...
    "psr-4": {
        // Other PSR-4 namespaces
        "Webkul\\RMA\\": "packages/Webkul/RMA/src"
    }
}
```

Run the following command to regenerate the autoloader files:

```bash
composer dump-autoload
```

This ensures that the new namespace mapping is properly loaded by Composer's autoloader.

#### Register Service Provider

Register your package's service provider in the `bootstrap/providers.php` file located in the root directory of your Bagisto application. The file already lists `AppServiceProvider` and every Webkul package provider; add `Webkul\RMA\Providers\RMAServiceProvider::class,` alongside them:

```php{12}
<?php

use App\Providers\AppServiceProvider;
use Webkul\Admin\Providers\AdminServiceProvider;
use Webkul\RMA\Providers\RMAServiceProvider;

return [
    /**
     * Application service providers.
     */
    AppServiceProvider::class,

    /**
     * Webkul's service providers.
     */
    AdminServiceProvider::class,
    RMAServiceProvider::class,
    // ... the other Webkul providers
];
```

#### Final Setup Commands

Run the following command to clear the application cache:

```bash
php artisan optimize:clear
```

::: tip Success
Congratulations! Your RMA package is now successfully registered and ready for development. The generator scaffolds the directory structure and the service provider; the admin menu entry, ACL permissions and routes are added in the following sections, and a menu entry only appears once a matching ACL key exists.
:::

## Manual Setup of Files

If you prefer to set up your package manually, follow these steps assuming you are familiar with package directory structures and workflows. We'll use the default `package` folder in Bagisto as an example.

::: warning Manual Setup
Manual setup requires good understanding of Laravel package development. If you're new to this, consider using the [Package Generator](#using-bagisto-package-generator) method above.
:::

### Create Package Directory

Inside the `packages/Webkul` folder, create a folder with your package name. Your structure should look like this:

```text
└── packages
    └── Webkul
        └── RMA
```

In your package folder, create a folder named as `src`. This is where you'll put all your package-related files. Your updated structure will look like this:

```text
└── packages
    └── Webkul
        └── RMA
            └── src
```

### Create Service Provider

In the `src` folder, create a folder named as `Providers`. Inside that folder, create a file named as `RMAServiceProvider.php`. Your structure should look like this:

```text
└── packages
    └── Webkul
        └── RMA
            └── src
                └── Providers
                    └── RMAServiceProvider.php
```

Copy the following code and paste it into `RMAServiceProvider.php`:

```php
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;

class RMAServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
```

::: info Service Provider Explanation
The Service Provider is the central place to register your package's services, including routes, views, configurations, and other components. The `boot()` method is called after all services are registered, while `register()` is used to bind services into the container. Core packages merge configuration (`mergeConfigFrom`) and register console commands in `register()`, and load migrations, routes, views and translations in `boot()`; the following sections follow the same split.
:::

### Register Your Package

#### Update Composer Autoloader

Add your package's namespace to the `psr-4` section in the `composer.json` file located in the root directory of your Bagisto application. Update it as follows:

```json{5}
"autoload": {
    ...
    "psr-4": {
        // Other PSR-4 namespaces
        "Webkul\\RMA\\": "packages/Webkul/RMA/src"
    }
}
```

Run the following command to regenerate the autoloader files:

```bash
composer dump-autoload
```

#### Register Service Provider

Register your package's service provider in the `bootstrap/providers.php` file located in the root directory of your Bagisto application, alongside the existing Webkul providers:

```php{12}
<?php

use App\Providers\AppServiceProvider;
use Webkul\Admin\Providers\AdminServiceProvider;
use Webkul\RMA\Providers\RMAServiceProvider;

return [
    /**
     * Application service providers.
     */
    AppServiceProvider::class,

    /**
     * Webkul's service providers.
     */
    AdminServiceProvider::class,
    RMAServiceProvider::class,
    // ... the other Webkul providers
];
```

#### Final Setup Commands

Run the following command to clear the application cache:

```bash
php artisan optimize:clear
```

::: info Two providers per package
A package with models registers a second provider, `ModuleServiceProvider`, in `config/concord.php`. That step, and the `Resources/manifest.php` file Concord expects to find in every module, are covered in [Models](./models.md).
:::

::: tip Package Ready
Your package is now ready for development! Note that the [Package Generator](#using-bagisto-package-generator) creates a more complete structure with additional boilerplate files. For a full-featured setup, consider using the Package Generator method which includes controllers, models, views, and other components automatically.
:::

## Next Steps

Once your package is set up, you can start building its functionality. For the remainder of this documentation, we'll assume you're following the manual setup approach, as this allows you to understand each component registration process step by step - such as routes, views, models, and controllers. While the Package Generator automates these registrations, learning the manual process helps you understand how each piece works together.

::: info Learning Approach
The remaining sections will guide you through manual registration of components to provide deeper understanding of package development concepts. If you used the Package Generator, you can still follow along to understand what was automatically created for you.
:::

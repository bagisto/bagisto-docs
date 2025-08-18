# Getting Started

A package is a self-contained module that encapsulates specific features or functionality, allowing developers to add custom features without altering the core codebase. This approach not only preserves the integrity of the core system but also ensures that updates and maintenance can be carried out smoothly.

By developing packages, you can introduce new functionalities, integrate third-party services, or customize existing features to better meet your business requirements. Each package is isolated, promoting clean code practices and enabling easier debugging and testing.

To provide you with a practical understanding of package development, we'll be building a basic **RMA (Return Merchandise Authorization)** package throughout this documentation. This will demonstrate real-world implementation patterns and show you how different components work together.

The RMA package will include:
- Customer return request functionality
- Admin panel for managing returns
- Email notifications
- Basic reporting features

::: warning Demonstration Purpose
This RMA package is designed for educational purposes to demonstrate package development concepts. It includes only basic CRUD operations and simplified workflows. For production use, you would need to implement additional features like complex business rules, advanced security measures, and comprehensive error handling.
:::

## Prerequisites

Before getting started with package development, ensure you have:

- A working [Bagisto Application](/docs/getting-started/installation.html#%F0%9F%9A%80-quick-installation-recommended)
- Basic knowledge of [Laravel Framework](https://laravel.com/docs)
- Understanding of [PHP](https://www.php.net/manual/) and Object Oriented Programming

## Using Bagisto Package Generator

To facilitate package development, you can use the [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator). Follow the steps below to install it:

::: tip Package Generator Benefits
The [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator) automatically creates the necessary directory structure, service providers, and configuration files, saving you time and ensuring consistency across packages.
:::

### Installation

Install the [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator) by running the following command in the root folder of your Bagisto application:

```bash
composer require bagisto/bagisto-package-generator
```

### Creating a Package

Once installed, you can generate your package using the following command:

::: info Example Package
We will assume that the package name is **"RMA"** (Return Merchandise Authorization) for demonstration purposes.
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

```json
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

Register your package's service provider in the `bootstrap/providers.php` file located in the root directory of your Bagisto application. Add the following line `Webkul\RMA\Providers\RMAServiceProvider::class,` just like other Bagisto service providers:

```php
<?php

return [
    /**
     * Application service providers.
     */
    App\Providers\AppServiceProvider::class,

    /**
     * Webkul's service providers.
     */

    /**
     * RMA service providers.
     */
    Webkul\RMA\Providers\RMAServiceProvider::class,
];
```

#### Final Setup Commands

Run the following command to clear the application cache:

```bash
php artisan optimize:clear
```

::: tip Success
Congratulations! Your RMA package is now successfully registered and ready for development. The package generator has automatically configured the basic structure, routes, and admin menu - you should now be able to see the RMA menu in the admin navigation panel. You can now start building the RMA functionality step by step according to your requirements.
:::

## Manual Setup of Files

If you prefer to set up your package manually, follow these steps assuming you are familiar with package directory structures and workflows. We'll use the default `package` folder in Bagisto as an example.

::: warning Manual Setup
Manual setup requires good understanding of Laravel package development. If you're new to this, consider using the [Package Generator](#using-bagisto-package-generator) method above.
:::

### Create Package Directory

Inside the `packages/Webkul` folder, create a folder with your package name. Your structure should look like this:

```
└── packages
    └── Webkul
        └── RMA
```

In your package folder, create a folder named as `src`. This is where you'll put all your package-related files. Your updated structure will look like this:

```
└── packages
    └── Webkul
        └── RMA
            └── src
```

### Create Service Provider

In the `src` folder, create a folder named as `Providers`. Inside that folder, create a file named as `RMAServiceProvider.php`. Your structure should look like this:

```
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
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
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

::: details Service Provider Explanation
The Service Provider is the central place to register your package's services, including routes, views, configurations, and other components. The `boot()` method is called after all services are registered, while `register()` is used to bind services into the container.
:::

### Register Your Package

#### Update Composer Autoloader

Add your package's namespace to the `psr-4` section in the `composer.json` file located in the root directory of your Bagisto application. Update it as follows:

```json
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

Register your package's service provider in the `bootstrap/providers.php` file located in the root directory of your Bagisto application. Add the following line `Webkul\RMA\Providers\RMAServiceProvider::class,` just like other Bagisto service providers:

```php
<?php

return [
    /**
     * Application service providers.
     */
    App\Providers\AppServiceProvider::class,

    /**
     * Webkul's service providers.
     */

    /**
     * RMA service providers.
     */
    Webkul\RMA\Providers\RMAServiceProvider::class,
];
```

#### Final Setup Commands

Run the following command to clear the application cache:

```bash
php artisan optimize:clear
```

::: tip Package Ready
Your package is now ready for development! Note that the [Package Generator](#using-bagisto-package-generator) creates a more complete structure with additional boilerplate files. For a full-featured setup, consider using the Package Generator method which includes controllers, models, views, and other components automatically.
:::

## Next Steps

Once your package is set up, you can start building its functionality. For the remainder of this documentation, we'll assume you're following the manual setup approach, as this allows you to understand each component registration process step by step - such as routes, views, models, and controllers. While the Package Generator automates these registrations, learning the manual process helps you understand how each piece works together.

::: info Learning Approach
The following sections will guide you through manual registration of components to provide deeper understanding of package development concepts. If you used the Package Generator, you can still follow along to understand what was automatically created for you.
:::

- **[Migrations](/docs/package-development/migrations)** - Set up your database schema  
- **[Models](/docs/package-development/models)** - Define your data structures
- **[Add Routes](/docs/package-development/routes)** - Define your package's endpoints
- **[Create Controllers](/docs/package-development/controllers)** - Handle your business logic
- **[Design Views](/docs/package-development/views)** - Build your user interface

# Getting Started

## Introduction 

A package is a self-contained module that encapsulates specific features or functionality, allowing developers to add custom features without altering the core codebase. This approach not only preserves the integrity of the core system but also ensures that updates and maintenance can be carried out smoothly.

By developing packages, you can introduce new functionalities, integrate third-party services, or customize existing features to better meet your business requirements. Each package is isolated, promoting clean code practices and enabling easier debugging and testing.

This guide will take you through the process of creating a package for Bagisto, from setting up the directory structure to defining configurations, routes, controllers, models, and views. By the end of this guide, you will have a solid understanding of how to develop and integrate packages into the Bagisto platform, enhancing its capabilities while maintaining a robust and maintainable codebase.

## Prerequisites

- A working Bagisto application
- Composer installed

## Using Bagisto Package Generator

To facilitate package development, you can use the [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator). Follow the steps below to install it:

- Install the Bagisto Package Generator by running the following command in the root folder of your Bagisto application:

   ```shell
   composer require bagisto/bagisto-package-generator
   ```

- Once installed, you can generate your package using the following command:

    We will assume that the package name is "**Blog**".

   - If the package directory does not exist:

     ```shell
     php artisan package:make Webkul/Blog
     ```

   - If the package directory already exists, you can use the **`--force`** option to overwrite it:

     ```shell
     php artisan package:make Webkul/Blog --force
     ```

   This command will set up the necessary files and directories in the **`packages`** directory.

### Registering Your Package

To register your package, follow these steps:

Add your package's namespace to the **`psr-4`** section in the **`composer.json`** file located in the root directory of your Bagisto application. Update it as follows:

   ```json
   "autoload": {
       ...
       "psr-4": {
           // Other PSR-4 namespaces
           "Webkul\\Blog\\": "packages/Webkul/Blog/src"
       }
   }
   ```

Register your package's service provider in the **`bootstrap/providers.php`** file located in the root directory of your Bagisto application. Add the following line `Webkul\Blog\Providers\BlogServiceProvider::class,` just like other Bagisto service providers:

```php
<?php

return [
    /**
     * Application service providers.
     */
    App\Providers\AppServiceProvider::class,

    // Other service providers

    /**
     * Blog service providers.
     */
    Webkul\Blog\Providers\BlogServiceProvider::class,
];
```

### Run the Commands 

Run the following commands to autoload your package and publish its assets and configurations:

   ```shell
   composer dump-autoload
   php artisan optimize
   php artisan vendor:publish --provider=Webkul\Blog\Providers\BlogServiceProvider
   ```

   When prompted to select which items to publish, choose the number corresponding to **`"Webkul\Blog\Providers\BlogServiceProvider"`** and press enter to publish all assets and configurations.

Congratulations! Your package is now registered and ready to use. Start creating something cool!

## Manual Setup of Files

If you prefer to set up your package manually, follow these steps assuming you are familiar with package directory structures and workflows. We'll use the default **`package`** folder in Bagisto as an example.

### Create Package Directory

Inside the **`packages/Webkul`** folder, create a folder with your package name. Your structure should look like this:

   ```
   └── packages
       └── Webkul
           └── Blog
   ```

In your package folder, create a folder named as **`src`**. This is where you'll put all your package-related files. Your updated structure will look like this:

   ```
   └── packages
       └── Webkul
           └── Blog
               └── src
   ```

### Create Service Provider

In the **`src`** folder, create a folder named as **`Providers`**. Inside that folder, create a file named as **`BlogServiceProvider.php`**. Your structure should look like this:

   ```
   └── packages
       └── Webkul
           └── Blog
               └── src
                   └── Providers
                       └── BlogServiceProvider.php
   ```

Copy the following code and paste it into **`BlogServiceProvider.php`**:

   ```php
   <?php

   namespace Webkul\Blog\Providers;

   use Illuminate\Support\ServiceProvider;

   class BlogServiceProvider extends ServiceProvider
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

### Register Your Package

Add your package's namespace to the **`psr-4`** section in the **`composer.json`** file located in the root directory of your Bagisto application. Update it as follows:

   ```json
   "autoload": {
       ...
       "psr-4": {
           // Other PSR-4 namespaces
           "Webkul\\Blog\\": "packages/Webkul/Blog/src"
       }
   }
   ```

Register your package's service provider in the **`bootstrap/providers.php`** file located in the root directory of your Bagisto application. Add the following line `Webkul\Blog\Providers\BlogServiceProvider::class,` just like other Bagisto service providers:

```php
<?php

return [
    /**
     * Application service providers.
     */
    App\Providers\AppServiceProvider::class,

    // Other service providers

    /**
     * Blog service providers.
     */
    Webkul\Blog\Providers\BlogServiceProvider::class,
];
```

### Run the Commands 

Run the following command to autoload your package:

   ```shell
   composer dump-autoload
   ```

   Your package is now ready to use!
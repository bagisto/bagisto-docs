# Getting Started

[[TOC]]

## Using Bagisto Package Generator

To facilitate package development, you can use the [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator). Follow the steps below to install it:

1. Install the Bagisto Package Generator by running the following command in the root folder of your Bagisto application:

   ```shell
   composer require bagisto/bagisto-package-generator
   ```

2. Once installed, you can generate your package using the following command:

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

1. Add your package's namespace to the **`psr-4`** section in the **`composer.json`** file located in the root directory of your Bagisto application. Update it as follows:

   ```json
   "autoload": {
       ...
       "psr-4": {
           // Other PSR-4 namespaces
           "Webkul\\Blog\\": "packages/Webkul/Blog/src"
       }
   }
   ```

2. Register your package's service provider in the **`config/app.php`** file located in the root directory of your Bagisto application. Add the following line to the **`providers`** array:

    ```php
    <?php

    return [
        
        // Other configuration options

        'providers' => ServiceProvider::defaultProviders()->merge([
            // Other service providers
            Webkul\Blog\Providers\BlogServiceProvider::class,
        ])->toArray(),
        
        // Other configuration options
    ];
    ```

3. Run the following commands to autoload your package and publish its assets and configurations:

   ```shell
   composer dump-autoload
   php artisan optimize
   php artisan vendor:publish --force
   ```

   When prompted to select which items to publish, choose the number corresponding to **`"Webkul\Blog\Providers\BlogServiceProvider"`** and press enter to publish all assets and configurations.

::: details Example Output in the Browser

![helloworld-admin-browser-output](../../assets/2.x/images/package-development/blog-package-output.png)

:::

Congratulations! Your package is now registered and ready to use. Start creating something cool!

## Manual Setup of Files

If you prefer to set up your package manually, follow these steps assuming you are familiar with package directory structures and workflows. We'll use the default **`package`** folder in Bagisto as an example.

### Create Package Directory

1. Inside the **`packages/Webkul`** folder, create a folder with your package name. Your structure should look like this:

   ```
   └── packages
       └── Webkul
           └── Blog
   ```

2. In your package folder, create a folder named as **`src`**. This is where you'll put all your package-related files. Your updated structure will look like this:

   ```
   └── packages
       └── Webkul
           └── Blog
               └── src
   ```

### Create Service Provider

1. In the **`src`** folder, create a folder named as **`Providers`**. Inside that folder, create a file named as **`BlogServiceProvider.php`**. Your structure should look like this:

   ```
   └── packages
       └── Webkul
           └── Blog
               └── src
                   └── Providers
                       └── BlogServiceProvider.php
   ```

2. Copy the following code and paste it into **`BlogServiceProvider.php`**:

   ```php
   <?php

   namespace Webkul\Blog\Providers;

   use Illuminate\Support\ServiceProvider;

   /**
    * BlogServiceProvider
    *
    * @copyright 2024 Webkul Software Pvt. Ltd.
    */
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

1. Add your package's namespace to the **`psr-4`** section in the **`composer.json`** file located in the root directory of your Bagisto application. Update it as follows:

   ```json
   "autoload": {
       ...
       "psr-4": {
           // Other PSR-4 namespaces
           "Webkul\\Blog\\": "packages/Webkul/Blog/src"
       }
   }
   ```

2. Register your package's service provider in the **`config/app.php`** file located in the root directory of your Bagisto application. Add the following line to the **`providers`** array:

    ```php
    <?php

    return [
        
        // Other configuration options

        'providers' => ServiceProvider::defaultProviders()->merge([
            // Other service providers
            Webkul\Blog\Providers\BlogServiceProvider::class,
        ])->toArray(),
        
        // Other configuration options
    ];
    ```

3. Run the following command to autoload your package:

   ```shell
   composer dump-autoload
   ```

   Your package is now ready to use!
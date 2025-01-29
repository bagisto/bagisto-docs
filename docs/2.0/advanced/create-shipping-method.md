# Shipping Method

[[TOC]]

## Introduction

In Bagisto, shipping methods are crucial components that define how products are delivered to customers. Creating a custom shipping method package allows you to tailor the shipping options to meet the specific needs of your e-commerce store. By using the Bagisto package generator, you can streamline the creation and management of these shipping methods, ensuring a seamless integration into your application.

## Using Bagisto Package Generator

To create a shipping method package in Bagisto, you can utilize the Bagisto package generator. This tool simplifies the process and ensures that the necessary files and directory structures are automatically created.

### Run the following command

Navigate to the Bagisto root directory and run the following command:

```sh
php artisan package:make-shipping-method Webkul/Blog
```

### Overwrite Existing Package

If the package directory already exists, use the `--force` flag to overwrite it

```sh
php artisan package:make-shipping-method Webkul/Blog --force
```

This command will generate the entire directory structure automatically, eliminating the need for manual setup.

## Manual Configuration

If you prefer to manually set up the files for your shipping method package, follow these steps:

### Create the carriers.php File

Create a `carriers.php` file in the `src/Config` path of your package. The file structure should be as follows:

```
- Webkul
    └── Blog/
        └── src/
            ├── ...
            └── Config/
                ├── ...
                └── carriers.php
```

Copy the following code into the `carriers.php` file:

```php
<?php

return [
    'blog' => [
        'code'         => 'blog',
        'title'        => 'Blog',
        'description'  => 'Blog',
        'active'       => true,
        'default_rate' => '10',
        'type'         => 'per_unit',
        'class'        => 'Webkul\Blog\Carriers\Blog',
    ]
];
```

- `code` : A unique value used to refer to the particular shipping method.
- `title` : The label or name displayed in the user interface.
- `description` : Information about your shipping method.
- `active` : Enable or disable option for the shipping method.
- `default_rate` : The default rate value.
- `type` : Specifies whether the shipping method applies per unit or per order.
- `class` : The path and filename of the shipping method class (`namespace\package-name\Carriers-folder\filename`).

### Create the Carrier Class

Create a directory named `Carriers` inside the `src` folder of your package:

```
- Webkul
  └── Blog/
      └── src/
          ├── ...
          └── Carriers/
```

Create a file named `Blog.php` inside the `Carriers` directory. The file structure should be as follows:

```
- Webkul
    └── Blog/
        └── src/
            ├── ...
            ├── Carriers/
            │   └── Blog.php
            └── Config/
                ├── ...
                └── carriers.php  

```

Add the following code to the `Blog.php` file to define your custom shipping method:

```php
<?php

namespace Webkul\Blog\Carriers;

use Config;
use Webkul\Shipping\Carriers\AbstractShipping;
use Webkul\Checkout\Models\CartShippingRate;
use Webkul\Shipping\Facades\Shipping;

class Blog extends AbstractShipping
{
    /**
     * Code.
     *
     * @var string
     */
    protected $code  = 'blog';

    /**
     * Calculate.
     *
     * @return mixed
     */
    public function calculate()
    {
        if (! $this->isAvailable()) {
            return false;
        }

        $object = new CartShippingRate;

        $object->carrier = 'blog';
        $object->carrier_title = $this->getConfigData('title');
        $object->method = 'blog_blog';
        $object->method_title = $this->getConfigData('title');
        $object->method_description = $this->getConfigData('description');
        $object->price = 0;
        $object->base_price = 0;

        if ($this->getConfigData('type') == 'per_unit') {
            foreach ($cart->items as $item) {
                if (
                    $this->getConfigData('base_amount') &&
                    $this->getConfigData('base_amount') > ($item->product->price)
                ) {
                    continue;
                }
                if ($item->product->getTypeInstance()->isStockable()) {
                    $object->price += core()->convertPrice($this->getConfigData('default_rate')) * $item->quantity;
                    $object->base_price += $this->getConfigData('default_rate') * $item->quantity;
                }
            }
        } else {
            if (
                $this->getConfigData('base_amount') &&
                $this->getConfigData('base_amount') > ($cart->sub_total)
            ) {
                return false;
            }
            $object->price = core()->convertPrice($this->getConfigData('default_rate'));
            $object->base_price = $this->getConfigData('default_rate');
        }

        return $object;
    }
}
```

The `Blog.php` file extends the `AbstractShipping` class defined at `Webkul\Shipping\Carriers\AbstractShipping`. In this file, you can write all the operations needed for your shipping method. To render the shipping methods in the checkout process, define the `calculate()` method within the `Blog.php` file and return the shipping rate, title, and description within a `CartShippingRate` object.

After creating all the necessary files and configurations, create a form that will appear in the configuration section. Create a `system.php` file in the `src/Config` path and add the following code to it:

```php
<?php

return
[
    'key'    => 'sales.carriers.blog',
    'name'   => 'admin::app.admin.system.blog-shipping',
    'sort'   => 2,
    'fields' => [
        [
            'name'          => 'title',
            'title'         => 'admin::app.admin.system.title',
            'type'          => 'depends',
            'depend'        => 'active:1',
            'validation'    => 'required_if:active,1',
            'channel_based' => true,
            'locale_based'  => true
        ], [
            'name'          => 'description',
            'title'         => 'admin::app.admin.system.description',
            'type'          => 'textarea',
            'channel_based' => true,
            'locale_based'  => false
        ], [
            'name'          => 'default_rate',
            'title'         => 'admin::app.admin.system.rate',
            'type'          => 'depends',
            'depend'        => 'active:1',
            'validation'    => 'required_if:active,1',
            'channel_based' => true,
            'locale_based'  => false
        ], [
            'name'          => 'base_amount',
            'title'         => 'admin::app.admin.system.minimum-amount',
            'type'          => 'text',
            'channel_based' => true,
            'locale_based'  => false
        ], [
            'name'    => 'type',
            'title'   => 'admin::app.admin.system.type',
            'type'    => 'select',
            'options' => [
                [
                    'title' => 'Per Unit',
                    'value' => 'per_unit',
                ], [
                    'title' => 'Per Order',
                    'value' => 'per_order',
                ],
            ],
            'channel_based' => true,
            'locale_based'  => false,
        ], [
            'name'          => 'active',
            'title'         => 'admin::app.admin.system.status',
            'type'          => 'boolean',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ]
    ]
]
```

## Merge Configuration 

To ensure that your system configurations for the shipping method package are properly merged and recognized by Bagisto, follow these steps:

### Modify the BlogServiceProvider

Modify the `BlogServiceProvider` class to merge your custom configurations. This ensures that the configurations defined in your `carriers.php` and `system.php` files are integrated into the Bagisto application.

Open the BlogServiceProvider.php file located at `packages/Webkul/Blog/src/Providers/BlogServiceProvider.php`.

Update the `register` method as follows:

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
            dirname(__DIR__) . '/Config/carriers.php',
            'carriers'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/system.php',
            'core'
        );
    }
}
```
### Add the Namespace to composer.json

To ensure that your custom shipping method package is correctly autoloaded by Composer, you need to add its namespace to the `psr-4` key in the `composer.json` file located in the Bagisto root directory. This step is essential for enabling the application to locate and utilize the classes in your package.

```json
"autoload": {
    ...
    "psr-4": {
        // Other PSR-4 namespaces
        "Webkul\\Blog\\": "packages/Webkul/Blog/src"
    }
}
```

### Register the Service Provider

To ensure that your custom shipping method package is properly integrated into the Bagisto application, you need to register your service provider. This can be done by adding it to the `config/app.php` file in the Bagisto root directory.

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

### Clear Configuration Cache

After making changes to the `composer.json` and `config/app.php` files, you need to refresh Composer's autoloader and clear the configuration cache to ensure that the changes take effect.

#### Run Composer Dump-Autoload

This command regenerates the list of all classes that need to be included in the project, ensuring that your newly added namespace is recognized.

```sh
composer dump-autoload
```

#### Clear the Configuration Cache

This command clears and regenerates the configuration cache, ensuring that the application uses the latest configuration settings.

```sh
php artisan config:cache
```

If you encounter an error with the `composer dump-autoload` command, try deleting all files in the `bootstrap/cache` directory and then running the command again.
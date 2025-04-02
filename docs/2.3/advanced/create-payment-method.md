# Payment Method

[[TOC]]

## Introduction

Creating payment methods in Bagisto is straightforward and caters to both novice and experienced developers. Payment methods play a crucial role in providing customers with diverse payment options during checkout, enhancing user experience and expanding market reach.

By integrating multiple payment methods, merchants can cater to a global audience effectively, ensuring convenience and flexibility in transactions. Bagisto simplifies the process of configuring and integrating these methods, empowering merchants to offer seamless payment experiences tailored to their business needs.

## Using Bagisto Package Generator

Follow these commands in your Bagisto root directory to create a payment method package:

### Creating a New Package

If the package directory (`Webkul/CustomPaymentMethod` in this example) does not exist, use the following command:

```sh
php artisan package:make-payment-method Webkul/CustomPaymentMethod
```

This command initializes a new package named Webkul/CustomPaymentMethod specifically tailored for a payment method.

### Overwriting Existing Packages

If you need to overwrite an existing package, add the `--force` flag to the command:

```sh
php artisan package:make-payment-method Webkul/CustomPaymentMethod --force
```

This option allows you to regenerate the package structure, updating any existing files as necessary.

These commands automate the creation of necessary files and directories, streamlining the initial setup process for integrating payment methods into your Bagisto application. This approach saves time and effort, ensuring a standardized setup across your development environment.

## Manually Setting Up All Files

Setting up a payment method manually in Bagisto involves creating the necessary directory structure and configuration files. Follow these steps to ensure your payment method integrates seamlessly:

### Directory Structure

Create the following directory structure for your payment method within the `Webkul/CustomPaymentMethod` package:

```
- Webkul/
    └── CustomPaymentMethod/
        └── src/
            ├── ...
            ├── Config/
            │   ├── system.php
            │   └── paymentmethods.php
            ├── Payment/
            │   └── Stripe.php
            └── Providers/
                └── StripeServiceProvider.php
```

### Configuration Files

The `Config` folder contains application configuration files In the `system.php` file, include the following array keys.

```php
<?php

return [
    [
        'key'    => 'sales.payment_methods.stripe',
        'name'   => 'Stripe',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'title',
                'title'         => 'admin::app.admin.system.title',
                'type'          => 'text',
                'validation'    => 'required',
                'channel_based' => false,
                'locale_based'  => true,
            ], [
                'name'          => 'description',
                'title'         => 'admin::app.admin.system.description',
                'type'          => 'textarea',
                'channel_based' => false,
                'locale_based'  => true,
            ], [
                'name'          => 'active',
                'title'         => 'admin::app.admin.system.status',
                'type'          => 'boolean',
                'validation'    => 'required',
                'channel_based' => false,
                'locale_based'  => true,
            ]
        ]
    ]
];
```

- `key` : A unique value for the configuration, concatenated with a dot (`.`) operator.
- `name` : The placeholder value for the configuration. It is recommended to use translations in Bagisto.
- `sort` : The position of the configuration menu.
- `fields` : An array containing the custom configurations and fields for the payment method. The example includes three arrays for `title`, `description`, and `status`. You can add more arrays for additional settings.

The `Config` folder contains application configuration files In the `paymentmethods.php` file, include the following array keys.

```php
<?php

return [
    'stripe'  => [
        'code'        => 'stripe',
        'title'       => 'Stripe',
        'description' => 'Stripe',
        'class'       => 'Webkul\CustomPaymentMethod\Payment\Stripe',
        'active'      => true,
        'sort'        => 1,
    ],
];
```

- `code` : A text representing the payment method.
- `title` : The name of the payment method.
- `description` : A brief description of the payment method.
- `class` : The namespace of the class where the payment method functions are defined.
- `active` : A boolean value (`true` or `false`) to enable or disable the module.
- `sort` : The position of the payment method.

Implement the payment method logic. Example skeleton for `Stripe.php`:

```php
<?php

namespace Webkul\CustomPaymentMethod\Payment;

use Webkul\Payment\Payment\Payment;

class Stripe extends Payment
{
    /**
    * Payment method code
    *
    * @var string
    */
    protected $code  = 'stripe';

    /**
    * Get redirect url.
    *
    * @var string
    */
    public function getRedirectUrl()
    {
        // Implementation code goes here
    }
}
```

## Merge Configuration

To seamlessly integrate your custom payment method into Bagisto, follow these steps to merge the configuration:

### Create ServiceProvider

Create a service provider `StripeServiceProvider.php` in `Webkul\CustomPaymentMethod\Providers` directory:

```php
<?php

namespace Webkul\CustomPaymentMethod\Providers;

use Illuminate\Support\ServiceProvider;

class StripeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerConfig();
    }

    /**
     * Register package config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/paymentmethods.php',
            'payment_methods'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/system.php',
            'core'
        );
    }
}
```

### Update composer.json

Add your payment method namespace to the `psr-4` key in the `composer.json` file in the Bagisto root directory:

```json
"autoload": {
    ...
    "psr-4": {
        // Other PSR-4 namespaces
        "Webkul\\CustomPaymentMethod\\": "packages/Webkul/CustomPaymentMethod/src"
    }
}
```

### Register ServiceProvider

To ensure that your custom payment method package is properly integrated into the Bagisto application, you need to register your service provider. This can be done by adding it to the `bootstrap/providers.php` file in the Bagisto root directory.

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
    Webkul\CustomPaymentMethod\Providers\StripeServiceProvider::class,
];
```

### Finalize Setup

After making these changes, execute the following commands:

```sh
composer dump-autoload
```

```sh
php artisan config:cache
```

If you encounter issues with `composer dump-autoload`, delete all files in the `bootstrap/cache` directory and rerun the command.

These steps ensure that your payment method configuration is properly merged into Bagisto, making it available for use in your e-commerce application. This integration enhances flexibility and customization options, tailored to meet specific business requirements and improve user experience during checkout.

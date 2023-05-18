# Payment Method

[[TOC]]

## Introduction

Bagisto eases the task of creating payment methods, making it simple for both novice and professional developers.

The diversity of payment methods provides customers with various options for payment when they proceed to checkout. Moreover, offering multiple payment methods is a great strategy to reach out to the global marketplace.

## Using Bagisto Package Generator

To create a payment method package, follow these commands in the Bagisto root directory:

- If the package directory is not present:

  ```sh
  php artisan package:make-payment-method Webkul/Blog
  ```

- If the package directory is already present, you can use the force command to overwrite it. Simply add the **`--force`** flag:

  ```sh
  php artisan package:make-payment-method Webkul/Blog --force
  ```

  These commands will generate the entire directory structure automatically, saving you from manual setup.

## Manually Setting Up All Files

1. To create your payment method, follow these steps to set up the respective directory structure:

    ```
    - Webkul/
      └── Blog/
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

2. The **`Config`** folder contains application configuration files. Create two files, **`system.php`** and **`paymentmethods.php`**, within the **`Config`** folder. In the **`system.php`** file, include the following array keys:

    ```php
    <?php

    return [
        [
            'key'    => 'sales.paymentmethods.stripe',
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
    - **`key`**: A unique value for the configuration, concatenated with a dot (`.`) operator.
    - **`name`**: The placeholder value for the configuration. It is recommended to use translations in Bagisto.
    - **`sort`**: The position of the configuration menu.
    - **`fields`**: An array containing the custom configurations and fields for the payment method. The example includes three arrays for **`title`**, **`description`**, and **`status`**. You can add more arrays for additional settings.

3. In the **`paymentmethods.php`** file, add the following content:

    ```php
    <?php

    return [
        'stripe'  => [
            'code'        => 'stripe',
            'title'       => 'Stripe',
            'description' => 'Stripe',
            'class'       => 'Webkul\Blog\Payment\Stripe',
            'active'      => true,
            'sort'        => 1,
        ],
    ];
    ```
    - **`code`**: A text representing the payment method.
    - **`title`**: The name of the payment method.
    - **`description`**: A brief description of the payment method.
    - **`class`**: The namespace of the class where the payment method functions are defined.
    - **`active`**: A boolean value (`true` or `false`) to enable or disable the module.
    - **`sort`**: The position of the payment method.

4. In the **`Stripe.php`** file within the **`Payment`** directory, add the following code:

    ```php
    <?php

    namespace Webkul\Blog\Payment;

    use Webkul\Payment\Payment\Payment;

    class Stripe extends Payment
    {
        /**
        * Payment method code
        *
        * @var string
        */
        protected $code  = 'stripe';

        public function getRedirectUrl()
        {
            // Implementation code goes here
        }
    }
    ```
## Merge Configuration

1. To merge the configuration, create the provider in **`StripeServiceProvider.php`**:

    ```php
    <?php

    namespace Webkul\Blog\Providers;

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
                dirname(__DIR__) . '/Config/paymentmethods.php', 'paymentmethods'
            );

            $this->mergeConfigFrom(
                dirname(__DIR__) . '/Config/system.php', 'core'
            );
        }
    }
    ```

2. Next, add your payment method namespace to the **`psr-4`** key in the **`composer.json`** file located in the Bagisto root directory:

    ```json
    "autoload": {
        ...
        "psr-4": {
            // Other PSR-4 namespaces
            "Webkul\\Blog\\": "packages/Webkul/Blog/src"
        }
    }
    ```

3. Register your service provider in the **`config/app.php`** file, also located in the Bagisto root directory:

    ```php
    <?php

    return [
        // Other configuration options

        'providers' => ServiceProvider::defaultProviders()->merge([
            // Other service providers
            Webkul\Blog\Providers\StripeServiceProvider::class,
        ])->toArray(),
        
        // Other configuration options
    ];
    ```

4. After making these changes, run the following commands:

    ```sh
    composer dump-autoload
    ```

    ```sh
    php artisan config:cache
    ```

    If you encounter any issues with **`composer dump-autoload`**, delete all files from the **`bootstrap/cache`** directory and run **`composer dump-autoload`** again.
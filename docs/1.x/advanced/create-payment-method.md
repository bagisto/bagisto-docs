# Create a new payment method

We hope that now you know how to create a package, if not refer to [Package Development](../packages).

Bagisto eases the task of creating payment methods. So, a novice developer or a professional developer can easily create payment methods.

As the diversity of payment methods provide the options to customer for payment when they proceed to checkout.

On another perspective, multiple payment methods are a great strategy to reach out to the global marketplace.

In this section, we will explain how to create a payment method. You can create a payment method in two ways.

1. By using Bagisto Package Generator (**Recommended**)
2. By manually setting up all files (**Expert Level**)

## 1. By using Bagisto Package Generator

- For creating payment method package, you need to use these commands in bagisto root directory,

  - If package directory not present,

    ```php
    php artisan package:make-payment-method ACME/Stripe
    ```

  - If somehow package directory already present then you can use force command as well. For that you just need to pass the '**--force**' command.

    ```php
    php artisan package:make-payment-method ACME/Stripe --force
    ```

  - This will generate whole directory structures. You don't need to do manually.

- After that, you need to register your service provider in `config/app.php` which is located Bagisto root directory.

  ```php
  <?php

  return [
      ...
      'providers' => [
          ...
          ACME\Stripe\Providers\StripeServiceProvider::class,
          ...
      ]
      ...
  ];
  ```

- After that, add you payment method namespace in `psr-4` key in `composer.json` file for auto loading which is located Bagisto root directory.

  ```json
  "autoload": {
      ...
      "psr-4": {
          ...
          "ACME\\Stripe\\": "packages/ACME/Stripe/src"
          ...
      }
      ...
  }
  ```

- Run `composer dump-autoload`.

- After that run `php artisan config:cache`.

- This will setup the configuration in the admin panel. Now start creating routes, controllers and make some cool stuff.

## 2. By manually setting up all files

### Steps to create a payment method

- Create respective directory structure to create your payment method.

  ```file-structure
  - ACME/Stripe/src/
    - Config/
      - system.php
      - paymentmethods.php
    - Payment/
      - Stripe.php
    - Providers/
      - StripeServiceProvider.php
  ```

- Within `Config` folder, it contains application's configuration files. Let's just create two files i.e. `system.php` and `paymentmethods.php`. In `system.php` file, you have to include the array keys in the file as shown below,

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

  - Let's discuss what these keys are,

    - `key`: Value which is provided in this key should be unique and concatenated with '.' (dot) operator.

    - `name`: This key accept the value as a placeholder for your configuration. Generally, in Bagisto, we consider writing it using translation.

    - `sort`: This key accept the sort position for your configuration menu.

    - `fields`: This key accept the list of arrays representing your custom configurations and fields. Right now you are seeing that it only holding 3 array i.e. title, description and status. If you need some other settings than you can add one more array to this.

- Similarly in `paymentmethods.php`,

  ```php
  <?php

  return [
      'stripe'  => [
          'code'        => 'stripe',
          'title'       => 'Stripe',
          'description' => 'Stripe',
          'class'       => 'ACME\Stripe\Payment\Stripe',
          'active'      => true,
          'sort'        => 1,
      ],
  ];
  ```

  - Now, let's look into this what these keys are,
    - `code`: A text to represent payment method.
    - `title`: Name of the payment method.
    - `description`: A brief description of the payment method.
    - `class`: This key includes the class namespace where all functions of payment method are written.
    - `active`: This key accepts true/false to enable or disable the module.
    - `sort`: This key accept the sort position of the payment.

- If you check the above point, we have discussed the key `class` which includes the class namespace. So let's create that class in the respective file. In `Stripe.php`, add the below code,

  ```php
  <?php

  namespace ACME\Stripe\Payment;

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
      }
  }
  ```

- Now we need to create the provider, in `StripeServiceProvider.php` add the below code,

  ```php
  <?php

  namespace ACME\Stripe\Providers;

  use Illuminate\Support\ServiceProvider;

  class StripeServiceProvider extends ServiceProvider
  {
      /**
      * Bootstrap services.
      *
      * @return void
      */
      public function boot()
      {
      }

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

- After that, you need to register your service provider in `config/app.php` which is located Bagisto root directory.

  ```php
  <?php

  return [
      ...
      'providers' => [
          ...
          ACME\Stripe\Providers\StripeServiceProvider::class,
          ...
      ]
      ...
  ];
  ```

- After that, add you payment method namespace in `psr-4` key in `composer.json` file for auto loading which is located Bagisto root directory.

  ```json
  "autoload": {
      ...
      "psr-4": {
          ...
          "ACME\\Stripe\\": "packages/ACME/Stripe/src"
          ...
      }
      ...
  }
  ```

- Run `composer dump-autoload`.

- After that run `php artisan config:cache`.

::: tip

If `composer dump-autoload` giving some error than in that case delete all files from the `bootstrap/cache` and again run `composer dump-autoload`.

:::

# Create a new shipping method

We hope that now you know how to create a package, if not refer to [Package Development](../packages).

In this section, we will understand how to create a shipping method.

You can create a shipping method in two ways.

1. By using Bagisto Package Generator (**Recommended**)
2. By manually setting up all files (**Expert Level**)

## 1. By using Bagisto Package Generator

For creating shipping method package, you need to use this command in bagisto root directory,

~~~php
php artisan package:make-shipping-method ACME/FedEx
~~~

If somehow package directory already present then you can use force command as well. For that you just need to pass the '**--force**' command.

~~~php
php artisan package:make-shipping-method ACME/FedEx --force
~~~

This will generate whole directory structures. You don't need to do manually.

## 2. By manually setting up all files

- User needs to create a `carriers.php` file in the `src/Config` path in the package (say FedEx). Here, we are going to specify what to include in your `carriers.php` file.

  ::: details Directory structure
  
  ~~~
  - ACME/FedEx/
    - FedEx/
      - src/
        - Config/
          - carriers.php
  ~~~

  :::

  ~~~php
  <?php

  return [
      'FedEx' => [
          'code' => 'fedex',
          'title' => 'FedEx',
          'description' => 'FedEx Shipping',
          'active' => true,
          'type' => 'per_unit',
          'class' => 'ACME\FedEx\Carriers\FedEx',
      ]
  ];
  ~~~

  - Explanation
    - **code**: Unique value used for referring the particular menu.
    - **title**: Label or name to display at the user interface.
    - **description**: About your shipping method.
    - **active**: Enable or disable option for shipping method.
    - **type**: This field specifies that the shipping method applies as `per_unit` or
      `per_order`.
    - **class**: Path specified with filename `namespace\package-name\Carriers-folder\filename`

- Create `Carriers` folder inside the `src` folder. Now, create `Fedex.php` in `Carriers` folder.

  - File `Fedex.php` will extends `AbstractShipping` class which is defined at `Webkul\Shipping\Carriers\AbstractShipping`. In `Fedex.php`, methods are defined that you can use while creating a shipping method.

  - Now, you can write all the operations needed for your shipping method in `Fedex.php` file.

  - To render the shipping methods in checkout process, you need to define `calculate()` within your `Fedex.php` and return shipping rate, shipping title, shipping description within an object.

    ::: tip
    May refer [FlatRate](https://github.com/bagisto/bagisto/blob/master/packages/Webkul/Shipping/src/Carriers/FlatRate.php#L28) `calculate()` method.
    :::

- After creating all the necessary files and configurations, you need to create the form which will appear on the config section. So for that create file `system.php` in `src/Config`. Add below code to following file,

  ~~~php
  <?php

  return [
      'key'    => 'sales.carriers.Fedex',
      'name'   => 'admin::app.admin.system.fedex-shipping',
      'sort'   => 2,
      'fields' => [
          [
            'name'          => 'title',
            'title'         => 'admin::app.admin.system.title',
            'type'          => 'text',
            'validation'    => 'required',
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
            'type'          => 'text',
            'channel_based' => true,
            'locale_based'  => false
          ], [
            'name'          => 'base_amount',
            'title'         => 'admin::app.admin.system.minimum-amount',
            'type'          => 'text',
            'channel_based' => true,
            'locale_based'  => false
          ], [
            'name'          => 'active',
            'title'         => 'admin::app.admin.system.status',
            'type'          => 'select',
            'options' => [
              [
                'title' => 'Active',
                'value' => true
              ], [
                'title' => 'Inactive',
                'value' => false
              ]
            ],
              'validation'    => 'required',
              'channel_based' => false,
              'locale_based'  => true
          ]
      ]
  ]
  ~~~

- Now merge all your config in `packages/ACME/FedEx/src/Providers/FedExServiceProvider.php`,

  ~~~php
  <?php

  namespace ACME\FedEx\Providers;

  use Illuminate\Support\ServiceProvider;

  class FedExServiceProvider extends ServiceProvider
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
          $this->mergeConfigFrom(
              dirname(__DIR__) . '/Config/carriers.php', 'carriers'
          );

          $this->mergeConfigFrom(
              dirname(__DIR__) . '/Config/system.php', 'core'
          );
      }
  }
  ~~~

- After that, you need to register your service provider in `config/app.php`.

  ~~~php
  <?php

  return [
      ...
      'providers' => [
          ...
          ACME\FedEx\Providers\FedExServiceProvider::class,
          ...
      ]
      ...
  ];
  ~~~

- After that, add you shipment method namespace in `psr-4` key in `composer.json` file for auto loading.

  ~~~json
  "autoload": {
      ...
      "psr-4": {
          ...
          "ACME\\FedEx\\": "packages/ACME/FedEx/src"
          ...
      }
      ...
  }
  ~~~

- Run `composer dump-autoload`.

- After that run `php artisan config:cache`.

::: tip

If `composer dump-autoload` giving some error than in that case delete all files from the `bootstrap/cache` and again run `composer dump-autoload`.

:::

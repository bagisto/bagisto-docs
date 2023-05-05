# Shipping Method

[[TOC]]

## Using Bagisto Package Generator

- For creating shipping method package, you need to use this command in bagisto root directory,

    ~~~sh
    php artisan package:make-shipping-method Webkul/Blog
    ~~~

- If somehow package directory already present then you can use force command as well. For that you just need to pass the '**--force**' command.

    ~~~php
    php artisan package:make-shipping-method Webkul/Blog --force
    ~~~

- This will generate whole directory structures. You don't need to do manually.

## By Manually Setting up all Files

- User needs to create a **`carriers.php`** file in the **`src/Config`** path in the package (say FedEx). Here, we are going to specify what to include in your **`carriers.php`** file.

  ~~~
  - Webkul/Blog/
    - src/
      - Config/
        ...
        - carriers.php      
  ~~~

- Copy Below code to **`carriers.php`** file.

  ~~~php
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
  ~~~

- Explanation
    - **code**: Unique value used for referring the particular menu.
    - **title**: Label or name to display at the user interface.
    - **description**: About your shipping method.
    - **active**: Enable or disable option for shipping method.
    - **default_rate**: Value used for default rate.
    - **type**: This field specifies that the shipping method applies as **`per_unit`** or
      `per_order`.
    - **class**: Path specified with filename **`namespace\package-name\Carriers-folder\filename`**

- Create **`Carriers`** folder inside the **`src`** folder. Now, create **`Blog.php`** in **`Carriers`** folder and add the below code to **`Blog.php`** file.

  ~~~
  - Webkul/Blog/
    - src/
      - Carriers/
        - Blog.php
      - Config/
        ...
        - carriers.php      
  ~~~

- Copy below code to the **`Blog.php`** file.

  ~~~php
  <?php

  namespace Webkul\Blog\Carriers;

  use Config;
  use Webkul\Shipping\Carriers\AbstractShipping;
  use Webkul\Checkout\Models\CartShippingRate;
  use Webkul\Shipping\Facades\Shipping;

  class Blog extends AbstractShipping
  {
      /**
       * Shipping method code
       *
       * @var string
       */
      protected $code  = 'blog';

      /**
       * Returns rate for shipping method
       *
       * @return CartShippingRate|false
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
  ~~~

- File **`Blog.php`** will extends **`AbstractShipping`** class which is defined at **`Webkul\Shipping\Carriers\AbstractShipping`**. In **`Blog.php`**, methods are defined that you can use while creating a shipping method.

  - Now, you can write all the operations needed for your shipping method in **`Blog.php`** file.

  - To render the shipping methods in checkout process, you need to define **`calculate()`** within your **`Blog.php`** and return shipping rate, shipping title, shipping description within an object.

    ::: tip
    May refer [FlatRate](https://github.com/bagisto/bagisto/blob/master/packages/Webkul/Shipping/src/Carriers/FlatRate.php#L28) **`calculate()`** method.
    :::

- After creating all the necessary files and configurations, you need to create the form which will appear on the config section. So for that create file **`system.php`** in **`src/Config`**. Add below code to following file,

  ~~~php
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
  ~~~

## Merge Configuration 

- Now merge all your config in **`packages/Webkul/Blog/src/Providers/BlogServiceProvider.php`**.

  ~~~php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * BlogServiceProvider
  *
  * @copyright 2023 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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

## Service Provider

- After that, add you shipment method namespace in **`psr-4`** key in **`composer.json`** file for auto loading which is located in Bagisto root directory.

  ~~~json
  "autoload": {
      ...
      "psr-4": {
          ...
          "Webkul\\Blog\\": "packages/Webkul/Blog/src"
          ...
      }
      ...
  }
  ~~~

- Then, you need to register your service provider in **`config/app.php`** which is located in Bagisto root directory.

  ~~~php
  <?php

  return [
      ...
      'providers' => [
          ...
          Webkul\Blog\Providers\BlogServiceProvider::class,
          ...
      ]
      ...
  ];
  ~~~

- After that run the below commands.

    ```sh
    composer dump-autoload
    ```
    ```sh
    php artisan config:cache
    ```

    ::: tip

    If **`composer dump-autoload`** giving some error than in that case delete all files from the **`bootstrap/cache`** and again run **`composer dump-autoload`**.

    :::

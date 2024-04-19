# Shipping Method

[[TOC]]

## Using Bagisto Package Generator

To create a shipping method package using the Bagisto package generator, follow these steps in the Bagisto root directory:

1. Run the following command:

   ```sh
   php artisan package:make-shipping-method Webkul/Blog
   ```

2. If the package directory already exists, you can use the force command to overwrite it. Simply add the **`--force`** flag:

   ```sh
   php artisan package:make-shipping-method Webkul/Blog --force
   ```

   This command will generate the entire directory structure automatically, so you don't need to do it manually.

## Manual Configuration

Alternatively, you can manually set up all the files for your shipping method package:

1. Create a **`carriers.php`** file in the **`src/Config`** path of your package (e.g., Blog). The file structure should be as follows:

   ```
   - Webkul
     └── Blog/
         └── src/
             ├── ...
             └── Config/
                 ├── ...
                 └── carriers.php
   ```

2. Copy the following code into the **`carriers.php`** file:

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

   - **code** : A unique value used to refer to the particular shipping method.
   - **title** : The label or name displayed in the user interface.
   - **description** : Information about your shipping method.
   - **active** : Enable or disable option for the shipping method.
   - **default_rate** : The default rate value.
   - **type** : Specifies whether the shipping method applies per unit or per order.
   - **class** : The path and filename of the shipping method class (**`namespace\package-name\Carriers-folder\filename`**).

3. Create a **`Carriers`** folder inside the **`src`** folder. Then, create a **`Blog.php`** file inside the **`Carriers`** folder.

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

4. Copy the following code into the **`Blog.php`** file:

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

   The **`Blog.php`** file extends the **`AbstractShipping`** class defined at **`Webkul\Shipping\Carriers\AbstractShipping`**. In this file, you can write all the operations needed for your shipping method. To render the shipping methods in the checkout process, define the **`calculate()`** method within the **`Blog.php`** file and return the shipping rate, title, and description within a **`CartShippingRate`** object.

5. After creating all the necessary files and configurations, create a form that will appear in the configuration section. Create a **`system.php`** file in the **`src/Config`** path and add the following code to it:

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

1. To merge all your configurations, modify the **`packages/Webkul/Blog/src/Providers/BlogServiceProvider.php`** file as follows:

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

2. Add the namespace for your shipment method in the **`psr-4`** key of the **`composer.json`** file in the Bagisto root directory:

     ```json
   "autoload": {
       ...
       "psr-4": {
           // Other PSR-4 namespaces
           "Webkul\\Blog\\": "packages/Webkul/Blog/src"
       }
   }
   ```

3. Register your service provider in the **`config/app.php`** file located in the Bagisto root directory:

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

4. After making these changes, run the following commands:

    ```sh
    composer dump-autoload
    ```

    ```sh
    php artisan config:cache
    ```

    If you encounter an error with the **`composer dump-autoload`** command, try deleting all files in the **`bootstrap/cache`** directory and then running the command again.
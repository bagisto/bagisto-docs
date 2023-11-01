# Product Type

[[TOC]]

## Introduction

Bagisto provides several default product types, including simple, configurable, virtual, grouped, downloadable, and bundled. However, if these default product types do not meet your requirements, you can create your own custom product types.

## Creating a New Product Type

To create a new product type in Bagisto, follow these steps:

**Note**: In this example, we will create a new product type called "coupon".

1. Create your own package. If you need assistance with package development, you can refer to the [Package Development](../packages) section.

2. Inside the **Config** folder of your package, create a file named **`product_types.php`**.

3. Add the following code to the **`product_types.php`** file. This code will define the new product type and its properties:

   ```php
   <?php

   return [
       'coupon' => [
           'key'   => 'coupon',
           'name'  => 'Coupon',
           'class' => 'Webkul\Blog\Type\Coupon',
           'sort'  => 7
       ],
   ];
   ```

### Merging the Configuration

4. To merge the **`Config/product_types.php`** with the core product types configuration, use the **`mergeConfigFrom()`** method in the **`register()`** method of your service provider. For example, in the **`CouponServiceProvider.php`** file:

   ```php
   <?php

   namespace Webkul\Blog\Providers;

   use Illuminate\Support\ServiceProvider;

   class CouponServiceProvider extends ServiceProvider
   {
      /**
       * Register services.
       *
       * @return void
       */
       public function register()
       {
           //...

           $this->mergeConfigFrom(
               dirname(__DIR__) . '/Config/product_types.php', 'product_types'
           );
       }
   }
   ```

5. In the code snippet above, notice the **`class`** key mentioned in step 3. This key specifies the class that loads the coupon product type. Create a file named **`Coupon.php`** within your package under the **`src/Type`** folder, and add the following code:

   ```php
   <?php

   namespace Webkul\Blog\Type;

   use Webkul\Product\Type\AbstractType;

   class Coupon extends AbstractType
   {

   }
   ```

6. After completing the above steps, your product type will be created. However, the **`Type/Coupon.php`** file does not have any code specific to the coupon type product yet. To inherit the basic functionality of any product type, you need to extend the classes from the Product package, specifically the **`type/AbstractType.php`** file.

    By extending the **`AbstractType.php`** class in your product type (**`Type/Coupon.php`**), you can provide the core functionality of a product. Additionally, if you need to define custom methods for your product type, you can do so within the **`Coupon.php`** file.
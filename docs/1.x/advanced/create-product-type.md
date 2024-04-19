# Create your own product type

By default Bagisto provides the following product types: simple, configurable, virtual, grouped, downloadable, bundled and bookings.
If the default product types do not meet your requirements, you can create your own product type.

## Steps to create your own product-types

You may access this super-functionality of creating your own product-types by following the points listed below.

**Note**: To demonstrate the process here, we will be creating a new product-type say "`coupon`"

1. Create your own package, you can check out the [Package Development](../packages) section if you need help with this.
2. Within the Config folder of your package, create a file `product_types.php`
3. Write the below piece of code in it, which is will be used to add product-type in your project.

   ```php
   <?php

   return [
       'coupon' => [
           'key' => 'coupon',
           'name' => 'Coupon',
           'class' => 'ACME\Coupon\Type\Coupon',
           'sort' => 7
       ],
   ];
   ```
4. After that, we need to merge this `Config/product_types.php`  with a core product_types option. For this, we use the method mergeConfigFrom() in the register method of the service provider(`ACME\Coupon\Providers\CouponServiceProvider.php`).


   ```php
   <?php
        namespace ACME\Coupon\Providers;

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
               $this->mergeConfigFrom(
                    dirname(__DIR__) . '/Config/product_types.php', 'product_types'
                );
            }
        }
       
   ```

5. In 3rd point above, that have mentioned key `class` which loads coupon product type. So, you need to create a file `Coupon.php` within your package under Type folder and add the below code.

```php

<?php
namespace ACME\Coupon\Type;

use Webkul\Product\Type\AbstractType;

class Coupon extends AbstractType 
{

}
?>
```

6. After successfully completion of above steps, your product type will get created. But, still we don't have any code written for coupon type product in the `Type/Coupon.php`. To inherit basic functionality of any product to your product type, we need to inherit the classes from the Product package `type/AbstractType.php` file.

7. Extending `AbstractType.php` class within your product_type (`Type\Coupon.php`) class let you to provide some core functionality of product. But, in addition, if user need to defined it's own custom methods, then he can define within their `Coupon.php` file.

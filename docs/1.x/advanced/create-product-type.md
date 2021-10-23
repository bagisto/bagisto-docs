# Create your product type

By default, Bagisto provides the following product types: simple, configurable, virtual, grouped, downloadable, bundled, and bookings.  
If the default product types do not meet your requirements, you can create your product type.

## Steps to create your product-types

You may access this super-functionality of creating your product types by following the points listed below.

**Note**: To demonstrate the process here, we will be creating a new product-type say "`coupon`"

1. Create your package; you can check out the [Package Development](../packages/create.md) section if you need help with this.
2. Within the Config folder of your package, create a file `product_types.php`
3. Write the below piece of code in it, which is used to add product-type in your project when merged in app/config.php in the root directory. Todo so, you need to refer to further steps.

    ```php
    <?php

    return [
        'coupon' => [
            'key' => 'Coupon',
            'name' => 'Coupon',
            'class' => 'Webkul\Coupon\Type\Coupon',
            'sort' => 7
        ],
    ];
    ```

4. Below the code, let you merge your package config files to the project root "`config`" folder.

    ```php
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/product_types.php', 'product_types'
        );
    ```

5. Create a"`Type`" folder within your package; inside the "`type`" folder, create a file with your product-type name "`Coupon.php.`" Essential functions that a product will make use of are declared in the "product" package `type/AbstractType.php` file. Besides, the user needs some extra functionality; then, they can define their functions in the"`Coupon.php`" file.

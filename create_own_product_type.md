---
title: Create own product-type | Bagisto Web APIs Documentation
layout: default
---

# Create your own product-type

In this release, we provided the options for admin to create more than two types of the product i.e., virtual, grouped, downloadable and bundled. But, in addition to this, the user has the power to create their product-types as per their need.

## Steps to create own product-types

You may access this super-functionality of creating your own product-types by following the points listed below.

**Note**: To demonstrate the process here, we will be creating a new product-type say "`coupon`"

1. Create your own package, may refer [Package development](create_package.md){: target="\_blank" .link-color}.
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

4. Below piece of code, let you merge your package config files to the project root "`config`" folder.

    ```php
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/product_types.php', 'product_types'
        );
    ```

5. Create "`Type`" folder within your package, inside the "`type`" folder create a file with your product-type name "`Coupon.php`". Basic functions that a product will make use of are declared in "product" package `type/AbstractType.php` file. Besides, the user needs some extra functionality then they can define their functions in "`Coupon.php`" file.
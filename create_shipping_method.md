---
title: Creating shipping method-Bagisto
layout: default
---

# Shipping Method


![](assets/images/icons/Icon-Pencil-Large.svg){:.pencil-icon}
[edit on github](https://github.com/bagisto/bagisto-docs/blob/master/create_shipping_method.md){:.edit-github  target="_blank"}

I hope that you know how to create package, if not(refer [Package development](create_package.md)), and I will skip package development step

### Steps to create shipping methods

* User need to create a file named as `carriers.php` at `src/config` path in the package. Here, we are going to specify what to include in your `carriers.php` file.

    ```php
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
    ```

##### Parameters needed for explanation

1. code : unique value used for referring the particular menu

2. title : label/name to display at user interface

3. description : about your shipping method.

4. active : enable/disable option for shipping method

5. type : these field specifies that the shipping method apply as per_unit or
   per_order

6. class : path specified with filename 'namespace\package-name\Carriers-folder\filename'


* And, `Carriers` named folder inside `src` folder. We will now create a file name as our shipping method name for better understandability inside Carriers folder e.g., Fedex.php

    1. File `Fedex.php` will extends AbstractShipping class which is defined at `Webkul\Shipping\Carriers\AbstractShipping`. Inside this file, the methods are defined that you can use while creating shipping method.

    2. Now, you can write all operations needed for your shipping method in `Fedex.php` file

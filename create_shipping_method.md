---
title: Creating shipping method-Bagisto
layout: default
---

# Shipping Method

![](assets/images/icons/Icon-Pencil-Large.svg){:.pencil-icon}
[edit on github](https://github.com/bagisto/bagisto-docs/blob/master/create_shipping_method.md){:.edit-github target="\_blank"}

I hope that you know how to create package, if not refer [Package development](create_package.md){: target="\_blank" .link-color}.

### Steps to create shipping methods

- The user needs to create a file named **_carriers.php_** at the `src/config` path in the package (say FedEx). Here, we are going to specify what to include in your **_carriers.php_** file.

  - FedEx/
    - src/
      - config/
        - carriers.php


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

- <b>code:</b> unique value used for referring the particular menu
- <b>title:</b> label/name to display at the user interface
- <b>description:</b> about your shipping method.
- <b>active:</b> enable/disable option for shipping method
- <b>type:</b> this field specifies that the shipping method applies as per_unit or
   per_order
- <b>class:</b> path specified with filename 'namespace\package-name\Carriers-folder\filename'

And, create **Carriers** folder inside the **src** folder. We will now create a file name as our shipping method name for better understandability inside **Carriers** folder e.g., **_Fedex.php_**

1. File **_Fedex.php_** will extends AbstractShipping class which is defined at `Webkul\Shipping\Carriers\AbstractShipping`. Inside file **_Fedex.php_**, the methods are defined that you can use while creating a shipping method.

2. Now, you can write all the operations needed for your shipping method in **_Fedex.php_** file.

3. To render the shipping methods in checkout process, you need to define 'calculate()' within your **_Fedex.php_** and return shipping rate, shipping title, shipping description within an object.

    <b>Note:</b> May refer [FlatRate](https://github.com/bagisto/bagisto/blob/master/packages/Webkul/Shipping/src/Carriers/FlatRate.php#L28) 'calculate()' method.

3. After creating all necessary files and config you need to create the form that will appear on the config section in the next route `packages/Webkul/Shipping/src/Config/system.php`. so you can use them on **_Fedex.php_**

4. To get the translations working you need to add them on `packages/Webkul/Admin/src/Resources/lang/en/app.php`
   > 'fedex-shipping'=>' Your title or translation',

      ```php
        [
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
                  'title' => 'Activo',
                  'value' => true
                ], [
                  'title' => 'Inactivo',
                  'value' => false
                ]
              ],
                'validation'    => 'required',
                'channel_based' => false,
                'locale_based'  => true
            ]
          ]
        ]
      ```

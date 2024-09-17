# System Configuration

[[TOC]]

## Introduction

Custom configuration in Bagisto enhances flexibility and ease of management for both developers and non-developers. It allows you to define, manage, and adjust settings directly from the admin panel, ensuring a seamless and efficient configuration process.

Custom configurations are accessible from the `Configuration Menu` in the admin panel. This menu provides an organized and user-friendly interface where all configuration settings are categorized and can be easily navigated.

## Create a new configuration

To create a custom configuration for your application in Bagisto, follow these steps:

### Create a system.php File

First, you need to create a `system.php` file. This file should be placed in the `Config` folder of your package. The directory structure will look like this:

#### Directory Structure

```
└── packages
    └── Webkul
        └── Blog
            ├── ...
            └── src
                └── ...
                └── Config
                    ├── ...
                    └── system.php
            
```

### Define Configuration Settings

Inside the `system.php` file, include the following code to define your custom configuration settings:

```php
<?php

return [
    [
        'key'  => 'blog',
        'name' => 'blog::app.admin.system.title',
        'info' => 'blog::app.admin.system.info',
        'sort' => 1
    ], [
        'key'  => 'blog.settings',
        'name' => 'blog::app.admin.system.settings.title',
        'info' => 'blog::app.admin.system.settings.info',
        'icon' => 'settings/settings.svg',
        'sort' => 1,
    ], [
        'key'    => 'blog.settings.general',
        'name'   => 'blog::app.admin.system.settings.general',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'status',
                'title' => 'blog::app.admin.system.settings.status',
                'type'  => 'boolean'
            ], [
                'name'  => 'pagination',
                'title' => 'blog::app.admin.system.settings.pagination',
                'type'  => 'boolean',
            ], [
                'name'       => 'items',
                'title'      => 'blog::app.admin.system.settings.items_per_page',
                'type'       => 'integer',
                'validation' => 'numeric'
            ]
        ]
    ]
];
```

This code snippet defines custom configuration settings, including a key, name, sort order, and fields if applicable.

### Merge the Configuration

To merge the custom configuration into your application, follow these steps:

Open the `BlogServiceProvider` Class This class is found in the `Webkul\Blog\Providers` namespace.

Merge the Custom Configuration In the `register` method, add the following code

```php
<?php

namespace Webkul\Blog\Providers;

use Illuminate\Support\ServiceProvider;

class StripeServiceProvider extends ServiceProvider
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
            dirname(__DIR__) . '/Config/system.php',
            'core'
        );
    }
}
```

This code merges the custom configuration with the existing configuration.

### Optimize Configuration

After making the changes, run the following command to cache the latest changes:

```sh
php artisan optimize:clear
```

This ensures that the latest custom configuration is used.

## Supported Field Types

Bagisto supports several field types for custom configurations. Here's a detailed look at each type:

### Text Type

This field type provides an input field of type text.

#### Example

```php
return [
    // ...
    [
        'key'    => 'general.general.custom-types',
        'name'   => 'admin::app.admin.system.custom-types',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'text_type',
                'title'         => 'admin::app.admin.system.text-type',
                'type'          => 'text',
                'default_value' => '',
            ],
        ],
    ],
    // ...
];
```

### Number Type

This field type provides an input field of type number.

#### Example

```php
return [
    // ...
    [
        'key'    => 'general.general.custom-types',
        'name'   => 'admin::app.admin.system.custom-types',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'number_type',
                'title' => 'admin::app.admin.system.number-type',
                'type'  => 'integer',
            ],
        ],
    ],
    // ...
];
```

### Boolean Type

This field type provides an enable/disable switch.

#### Example

```php
return [
    // ...
    [
        'key'    => 'general.general.custom-types',
        'name'   => 'admin::app.admin.system.custom-types',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'boolean_type',
                'title' => 'admin::app.admin.system.boolean-type',
                'type'  => 'boolean',
            ],
        ],
    ],
    // ...
];
```

### Select Type

This field type provides a select field with specified options.

#### Example

```php
return [
    // ...
    [
        'key'    => 'general.general.custom-types',
        'name'   => 'admin::app.admin.system.custom-types',
        'sort'   => 1,
        'fields' => [
            [
                'name'    => 'select_type',
                'title'   => 'admin::app.admin.system.select-type',
                'type'    => 'select',
                'options' => [
                    [
                        'title' => 'option_1',
                        'value' => 'value_1',
                    ], [
                    ], [
                        'title' => 'option_2',
                        'value' => 'vallue_2',
                    ],
                ],
            ],
        ],
    ],
    // ...
];
```

### Textarea Type

This field type provides a textarea field, mostly used for long text.

#### Example

```php
return [
    // ...
    [
        'key'    => 'general.general.custom-types',
        'name'   => 'admin::app.admin.system.custom-types',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'textarea_type',
                'title' => 'admin::app.admin.system.textarea-type',
                'type'  => 'textarea'
            ],
        ],
    ],
    // ...
];
```

### Image Type

This field type provides a file upload option for uploading images.

#### Example

```php
return [
    // ...
    [
        'key'    => 'general.general.custom-types',
        'name'   => 'admin::app.admin.system.custom-types',
        'sort'   => 1,
        'fields' => [
            [
                'name'       => 'image_type',
                'title'      => 'admin::app.admin.system.image-type',
                'type'       => 'image',
                'validation' => 'mimes:bmp,jpeg,jpg,png,webp,svg',
            ],
        ],
    ],
    // ...
];
```

## Dependent Fields

The `depends` feature in Bagisto's configuration system allows you to conditionally display or enable certain configuration fields based on the value of other fields. This feature is particularly useful for creating dynamic and context-sensitive configuration forms in the admin panel.

The `depends` attribute is used within the configuration array of a setting to specify a condition under which the setting should be enabled or visible. It evaluates the value of another field in real-time and adjusts the display or behavior of the current field accordingly.

Consider the following example configuration snippet:
```php
return [
    'key'    => 'sales.order_settings.minimum_order',
    'name'   => 'admin::app.configuration.index.sales.order-settings.minimum-order.title',
    'info'   => 'admin::app.configuration.index.sales.order-settings.minimum-order.info',
    'sort'   => 1,
    'fields' => [
        [
            'name'          => 'enable',
            'title'         => 'admin::app.configuration.index.sales.order-settings.minimum-order.enable',
            'type'          => 'boolean',
        ], [
            'name'          => 'minimum_order_amount',
            'title'         => 'admin::app.configuration.index.sales.order-settings.minimum-order.minimum-order-amount',
            'type'          => 'integer',
            'validation'    => 'required_if:enable,1|numeric',
            'depends'       => 'enable:1',
            'channel_based' => true,
        ], [
            'name'          => 'include_discount_amount',
            'title'         => 'admin::app.configuration.index.sales.order-settings.minimum-order.include-discount-amount',
            'type'          => 'boolean',
            'depends'       => 'enable:1',
        ], [
            'name'          => 'include_tax_to_amount',
            'title'         => 'admin::app.configuration.index.sales.order-settings.minimum-order.include-tax-amount',
            'type'          => 'boolean',
            'depends'       => 'enable:1',
        ], [
            'name'          => 'description',
            'title'         => 'admin::app.configuration.index.sales.order-settings.minimum-order.description',
            'type'          => 'textarea',
            'depends'       => 'enable:1',
            'channel_based' => true,
        ],
    ],
],

```

#### Explanation 

- The `active` field determines if the "Free Shipping" method is enabled.

- If `active` is set to `1`(true), the `title` field becomes required and is displayed. The depends attribute ensures that the title field is only shown if the shipping method is active.

- The `description` field is always displayed but is both channel and locale-based, meaning its value can vary by channel and language.

## Validations in Bagisto Configuration

In Bagisto, validations are defined in the configuration array for each field under the `validation` key. These validations follow Laravel's validation rules, providing a robust way to enforce data integrity.

- `required` Ensures the field is not empty.

- `string` Ensures the field contains a string.

- `Integer` Ensures the field contains an integer.

- `boolean` Ensures the field contains a boolean value (true or false).

- `numeric` Ensures the field contains an numeric value.

- `email` Ensures the field contains a valid email address.

- `mimes` Ensures the uploaded file is of a specific MIME type.

- `max` Ensures the field contains a value not greater than a specified maximum.

- `min` Ensures the field contains a value not less than a specified minimum.

- `required_if` Ensures the field is required if another field has a specific value.

#### Example Configuration with Validations

```php
return [
    [
        'key'    => 'general.general.custom-settings',
        'name'   => 'admin::app.admin.system.custom-settings',
        'sort'   => 1,
        'fields' => [
            [
                'name'       => 'site_title',
                'title'      => 'admin::app.admin.system.site-title',
                'type'       => 'text',
                'validation' => 'required|string|max:255',
            ],
            [
                'name'       => 'admin_email',
                'title'      => 'admin::app.admin.system.admin-email',
                'type'       => 'email',
                'validation' => 'required|email',
            ],
            [
                'name'       => 'max_upload_size',
                'title'      => 'admin::app.admin.system.max-upload-size',
                'type'       => 'integer',
                'validation' => 'required|integer|min:1|max:1024',
            ],
            [
                'name'       => 'enable_feature',
                'title'      => 'admin::app.admin.system.enable-feature',
                'type'       => 'boolean',
                'validation' => 'required|boolean',
            ],
            [
                'name'       => 'upload_file',
                'title'      => 'admin::app.admin.system.upload-file',
                'type'       => 'file',
                'validation' => 'required|mimes:jpeg,jpg,png|max:2048',
            ],
        ],
    ],
];
```
By following these steps and examples, you can create and manage custom configurations in Bagisto effectively, ensuring a flexible and tailored experience for your e-commerce platform.
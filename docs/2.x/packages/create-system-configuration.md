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
                'type'       => 'number',
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
                'type'  => 'number',
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

By following these steps and examples, you can create and manage custom configurations in Bagisto effectively, ensuring a flexible and tailored experience for your e-commerce platform.
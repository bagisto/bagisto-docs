# Custom Configuration

[[TOC]]

Creating a custom configuration makes it easier for developers or non-developers to manage settings in Bagisto. In Bagisto, custom configurations can be found in the admin panel under the **Configuration Menu**.

## Directory Structure

To create a custom configuration for your application, follow these steps:

1. Create a **`system.php`** file in the **`Config`** folder of your package:

   ```
    └── packages
        └── Webkul
            └── Blog
                ├── ...
                └── src
                    └── ...
                    └── Config
                    └── system.php
                
   ```

2. Inside the **`system.php`** file, include the following code:

   ```php
   <?php

   return [
       [
           'key' => 'blog',
           'name' => 'Blog',
           'sort' => 1
       ],
       [
           'key' => 'blog.settings',
           'name' => 'Blog Settings',
           'sort' => 1,
       ],
       [
           'key' => 'blog.settings.package',
           'name' => 'Package Status',
           'sort' => 1,
           'fields' => [
               [
                   'name' => 'status',
                   'title' => 'Status',
                   'type' => 'boolean',
                   'validation' => 'required'
               ]
           ]
       ],
       [
           'key'    => 'blog.settings.blog-setting',
           'name'   => 'blog::app.admin.system.blog-setting',
           'sort'   => 2,
           'fields' => [
               [
                   'name'          => 'pagination',
                   'title'         => 'blog::app.admin.system.pagination',
                   'type'          => 'select',
                   'validation' => 'required',
                   'options'       => [
                       [
                           'title' => 'Yes',
                           'value' => 1,
                       ],
                       [
                           'title' => 'No',
                           'value' => 0,
                       ],
                   ]
               ],
               [
                   'name'  => 'items',
                   'title' => 'blog::app.admin.system.items',
                   'type'  => 'number',
                   'validation' => 'numeric'
               ]
           ]
       ]
   ];
   ```

   This code defines the custom configuration settings. Each configuration has a key, name, sort, and fields (if applicable).

## Merge Configuration

To merge the custom configuration, follow these steps:

1. Open the **`BlogServiceProvider`** class in the **`Webkul\Blog\Providers`** namespace.

2. In the **`register`** method, add the following code to merge the custom configuration:

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
               dirname(__DIR__) . '/Config/system.php', 'core'
            );
        }
    }
    ```

   This code merges the custom configuration with the existing configuration.

3. After making the changes, run the following command to cache the latest changes:

   ```sh
   php artisan optimize
   ```

   This ensures that the latest custom configuration is used.

4. You can now check the updated configuration in the admin panel:

    :::details Custom Configuration

   ![Admin Custom Config Output](../../assets/1.5.x/images/package-development/custom-config-output.png)
   
   :::

## Supported Field Types

Bagisto supports several field types for custom configurations. Let's explore each of them:

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
                'name'          => 'boolean_type',
                'title'         => 'admin::app.admin.system.boolean-type',
                'type'          => 'boolean',
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
                'name'          => 'select_type',
                'title'         => 'admin::app.admin.system.select-type',
                'type'          => 'select',
                'options'       => [
                    [
                        'title' => 'option_1',
                        'value' => 'value_1',
                    ],
                    [
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
                'name'          => 'textarea_type',
                'title'         => 'admin::app.admin.system.textarea-type',
                'type'          => 'textarea'
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
                'name'          => 'image_type',
                'title'         => 'admin::app.admin.system.image-type',
                'type'          => 'image',
                'validation'    => 'mimes:bmp,jpeg,jpg,png,webp',
            ],
        ],
    ],
    // ...
];
```
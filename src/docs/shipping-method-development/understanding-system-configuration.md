# Understanding System Configuration

The system configuration creates the admin interface for your shipping method settings:

**File:** `packages/Webkul/CustomExpressShipping/src/Config/system.php`

```php
<?php

return [
    'key'    => 'sales.carriers.custom_express_shipping',
    'name'   => 'Custom Express Shipping',
    'sort'   => 2,
    'fields' => [
        [
            'name'          => 'title',
            'title'         => 'Method Title',
            'type'          => 'text',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => true
        ],
        [
            'name'          => 'description', 
            'title'         => 'Description',
            'type'          => 'textarea',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'default_rate',
            'title'         => 'Base Rate ($)',
            'type'          => 'text',
            'validation'    => 'required|numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'active',
            'title'         => 'Enabled',
            'type'          => 'boolean',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ]
    ]
];
```

::: info System Configuration Explained
**Configuration Properties:**

- **`key`**: Configuration path following Bagisto's convention
- **`name`**: Section name in admin configuration
- **`sort`**: Order in the carriers list
- **`fields`**: Array of form fields for admin settings

**Field Properties:**
- **`name`**: Field identifier (matches getConfigData() parameter)
- **`title`**: Label shown in admin form
- **`type`**: Field type (text, textarea, select, boolean, etc.)
- **`validation`**: Laravel validation rules
- **`channel_based`**: Different values per sales channel
- **`locale_based`**: Different values per language
:::

## Adding Advanced Configuration Options

Let's enhance the configuration with more options:

```php{11-35}
return [
    'key'    => 'sales.carriers.custom_express_shipping',
    'name'   => 'Custom Express Shipping',
    'sort'   => 2,
    'fields' => [
        // ...existing fields...
        
        [
            'name'          => 'free_shipping_amount',
            'title'         => 'Free Shipping Above ($)',
            'type'          => 'text',
            'validation'    => 'nullable|numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'max_weight',
            'title'         => 'Maximum Weight (kg)',
            'type'          => 'text',
            'validation'    => 'nullable|numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'    => 'delivery_time',
            'title'   => 'Delivery Time',
            'type'    => 'select',
            'options' => [
                [
                    'title' => '1-2 Business Days',
                    'value' => '1-2_days',
                ],
                [
                    'title' => '2-3 Business Days', 
                    'value' => '2-3_days',
                ],
            ],
            'channel_based' => true,
            'locale_based'  => false,
        ],
    ]
];
```

# System Configuration

System configuration in Bagisto allows you to create admin-configurable settings for your package that can be managed directly from the admin panel. This provides a user-friendly interface for administrators to adjust your package settings without modifying code.

For our RMA package, we'll create system configuration options to control return request settings, demonstrating how to add configurable options to your Bagisto package.

::: info Learning Objective
This section demonstrates how to create system configuration settings for your Bagisto package, allowing administrators to configure your package behavior through the admin panel.
:::

## Directory Structure

To create system configuration for your package, follow these structured steps:

### Create Configuration File

Begin by creating a new file named `system.php` within the `Config` directory of your package located at `packages/Webkul/RMA/src/Config`:

```
└── packages
    └── Webkul
        └── RMA
            ├── ...
            └── src
                └── ...
                └── Config
                    ├── acl.php
                    ├── admin-menu.php
                    └── system.php
            
```

### Define Configuration Settings

Inside the `system.php` file, include the following code to define your RMA configuration settings:

```php
<?php

return [
    [
        'key'  => 'rma',
        'name' => 'RMA',  // Use direct text for now
        'info' => 'Return Merchandise Authorization settings',  // Use direct text for now
        'sort' => 1
    ], [
        'key'  => 'rma.settings',
        'name' => 'General Settings',  // Use direct text for now
        'info' => 'Configure basic RMA functionality',  // Use direct text for now
        'icon' => 'settings/settings.svg',
        'sort' => 1,
    ], [
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',  // Use direct text for now
        'info'   => 'Basic RMA settings and options',  // Use direct text for now
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'enable',
                'title' => 'Enable RMA',  // Use direct text for now
                'type'  => 'boolean'
            ], [
                'name'  => 'allow_partial_returns',
                'title' => 'Allow Partial Returns',  // Use direct text for now
                'type'  => 'boolean',
            ], [
                'name'       => 'max_return_days',
                'title'      => 'Maximum Return Days',  // Use direct text for now
                'type'       => 'number',
                'validation' => 'numeric|min:1'
            ]
        ]
    ]
];
```

This configuration defines RMA-specific settings including enable/disable functionality, partial return options, and return time limits.

## Register Configuration

In the `register` method, add the following code to merge your system configuration:

```php{23-27}
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;

class RMAServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/admin-menu.php',
            'menu.admin'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/acl.php',
            'acl'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/system.php',
            'core'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
        
        $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');
        $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');
        
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'rma');
        
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'rma');
    }
}
```

This code merges the system configuration with the existing core configuration.

### Testing Your Configuration

Now you can test your system configuration:

```bash
# Clear cache
php artisan optimize:clear

# Visit the admin panel
# Navigate to: Configuration → RMA
```

**Expected Results:**
- **Configuration Menu**: "RMA" appears in the admin Configuration menu
- **Settings Interface**: RMA settings are accessible and editable
- **Form Validation**: Configuration fields validate according to defined rules

::: info Configuration Testing Checklist
**Core Functionality:**
- ✅ RMA section appears in admin Configuration menu
- ✅ Settings can be saved and retrieved
- ✅ Validation rules work correctly
- ✅ Default values are applied properly

**What's Working:**
- ✅ Basic system configuration structure
- ✅ Integration with admin configuration panel
- ✅ Form field validation and data persistence
:::

## Adding Translations

Once you have the basic configuration working, you can implement translations for better internationalization support:

### Step 1: Add Configuration Translations

Update your translation file `packages/Webkul/RMA/src/Resources/lang/en/app.php`:

```php{16-27}
<?php

return [
    'admin' => [
        // ...existing admin translations...
        
        'menu' => [
            'rma' => 'RMA',
        ],
        
        'acl' => [
            'rma' => 'RMA',
            'return-requests' => 'Return Requests',
            'view' => 'View',
        ],
        
        'system' => [
            'rma' => 'RMA',
            'rma-info' => 'Return Merchandise Authorization settings',
            'general-settings' => 'General Settings',
            'general-settings-info' => 'Configure basic RMA functionality',
            'rma-configuration' => 'RMA Configuration',
            'rma-configuration-info' => 'Basic RMA settings and options',
            'enable-rma' => 'Enable RMA',
            'allow-partial-returns' => 'Allow Partial Returns',
            'max-return-days' => 'Maximum Return Days',
        ],
    ],
];
```

### Step 2: Update Configuration with Translation Keys

Replace the direct text with translation keys in your `system.php`:

```php{6,7,11,12,17,18,23,27,31}
<?php

return [
    [
        'key'  => 'rma',
        'name' => 'rma::app.admin.system.rma',  // Now using translation key
        'info' => 'rma::app.admin.system.rma-info',  // Now using translation key
        'sort' => 1
    ], [
        'key'  => 'rma.settings',
        'name' => 'rma::app.admin.system.general-settings',  // Now using translation key
        'info' => 'rma::app.admin.system.general-settings-info',  // Now using translation key
        'icon' => 'settings/settings.svg',
        'sort' => 1,
    ], [
        'key'    => 'rma.settings.general',
        'name'   => 'rma::app.admin.system.rma-configuration',  // Now using translation key
        'info'   => 'rma::app.admin.system.rma-configuration-info',  // Now using translation key
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'enable',
                'title' => 'rma::app.admin.system.enable-rma',  // Now using translation key
                'type'  => 'boolean'
            ], [
                'name'  => 'allow_partial_returns',
                'title' => 'rma::app.admin.system.allow-partial-returns',  // Now using translation key
                'type'  => 'boolean',
            ], [
                'name'       => 'max_return_days',
                'title'      => 'rma::app.admin.system.max-return-days',  // Now using translation key
                'type'       => 'number',
                'validation' => 'numeric|min:1'
            ]
        ]
    ]
];
```

## Supported Field Types

Bagisto supports several field types for system configurations. Here are all the available field types with RMA-related examples:

### Text Type

This field type provides an input field of type text, useful for simple text configurations.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'    => 'return_email',
                'title'   => 'Return Request Email',  // Consider using translation key
                'type'    => 'text',
                'default' => 'returns@yourstore.com',
                'validation' => 'email',
            ],
        ],
    ],
    // ...
];
```

### Password Type

This field type provides a password input field for sensitive information.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.api',
        'name'   => 'API Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'       => 'api_secret',
                'title'      => 'API Secret Key',  // Consider using translation key
                'type'       => 'password',
                'validation' => 'required',
            ],
        ],
    ],
    // ...
];
```

### Number Type

This field type provides an input field for numeric values.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'       => 'max_return_days',
                'title'      => 'Maximum Return Days',  // Consider using translation key
                'type'       => 'number',
                'validation' => 'required|numeric|min:1|max:365',
            ],
        ],
    ],
    // ...
];
```

### Color Type

This field type provides a color picker input field.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.appearance',
        'name'   => 'Appearance Settings',
        'sort'   => 1,
        'fields' => [
            [
                'name'    => 'return_button_color',
                'title'   => 'Return Button Color',  // Consider using translation key
                'type'    => 'color',
                'default' => '#007bff',
            ],
        ],
    ],
    // ...
];
```

### Boolean Type

This field type provides an enable/disable switch, perfect for feature toggles.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'enable_auto_approval',
                'title' => 'Auto-approve Return Requests',  // Consider using translation key
                'type'  => 'boolean',
            ],
        ],
    ],
    // ...
];
```

### Select Type

This field type provides a select field with specified options, useful for predefined choices.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'    => 'default_return_status',
                'title'   => 'Default Return Status',  // Consider using translation key
                'type'    => 'select',
                'options' => [
                    [
                        'title' => 'Pending Review',
                        'value' => 'pending',
                    ], [
                        'title' => 'Approved',
                        'value' => 'approved',
                    ], [
                        'title' => 'Rejected',
                        'value' => 'rejected',
                    ],
                ],
            ],
        ],
    ],
    // ...
];
```

### Multiselect Type

This field type provides a multiselect field allowing multiple option selections.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'    => 'allowed_return_reasons',
                'title'   => 'Allowed Return Reasons',  // Consider using translation key
                'type'    => 'multiselect',
                'options' => [
                    [
                        'title' => 'Defective Product',
                        'value' => 'defective',
                    ], [
                        'title' => 'Wrong Item Received',
                        'value' => 'wrong_item',
                    ], [
                        'title' => 'Not as Described',
                        'value' => 'not_described',
                    ], [
                        'title' => 'Changed Mind',
                        'value' => 'changed_mind',
                    ],
                ],
            ],
        ],
    ],
    // ...
];
```

### Textarea Type

This field type provides a textarea field, mostly used for longer text content.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'return_policy_text',
                'title' => 'Return Policy Description',  // Consider using translation key
                'type'  => 'textarea'
            ],
        ],
    ],
    // ...
];
```

### Editor Type

This field type provides a rich text editor with TinyMCE for formatted content.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.content',
        'name'   => 'Content Settings',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'return_instructions',
                'title' => 'Return Instructions (Rich Text)',  // Consider using translation key
                'type'  => 'editor'
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
        'key'    => 'rma.settings.general',
        'name'   => 'RMA Configuration',
        'sort'   => 1,
        'fields' => [
            [
                'name'       => 'return_label_logo',
                'title'      => 'Return Label Logo',  // Consider using translation key
                'type'       => 'image',
                'validation' => 'mimes:bmp,jpeg,jpg,png,webp,svg',
            ],
        ],
    ],
    // ...
];
```

### File Type

This field type provides a file upload option for documents and other file types.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.documents',
        'name'   => 'Document Settings',
        'sort'   => 1,
        'fields' => [
            [
                'name'       => 'return_policy_pdf',
                'title'      => 'Return Policy Document',  // Consider using translation key
                'type'       => 'file',
                'validation' => 'mimes:pdf,doc,docx|max:10240', // 10MB max
            ],
        ],
    ],
    // ...
];
```

### Country Type

This field type provides a dropdown of available countries.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.location',
        'name'   => 'Location Settings',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'return_center_country',
                'title' => 'Return Center Country',  // Consider using translation key
                'type'  => 'country',
            ],
        ],
    ],
    // ...
];
```

### State Type

This field type provides a dropdown of states/provinces based on the selected country.

#### Example

```php
return [
    // ...
    [
        'key'    => 'rma.settings.location',
        'name'   => 'Location Settings',
        'sort'   => 1,
        'fields' => [
            [
                'name'  => 'return_center_state',
                'title' => 'Return Center State/Province',  // Consider using translation key
                'type'  => 'state',
            ],
        ],
    ],
    // ...
];
```

## Dependent Fields

The `depends` feature in Bagisto's configuration system allows you to conditionally display or enable certain configuration fields based on the value of other fields. This feature is particularly useful for creating dynamic and context-sensitive configuration forms.

The `depends` attribute is used within the configuration array to specify a condition under which the setting should be enabled or visible. It evaluates the value of another field in real-time and adjusts the display accordingly.

Consider the following RMA configuration example:

```php
return [
    // ...
    [
        'key'    => 'rma.settings.return_policy',
        'name'   => 'Return Policy Settings',  // Consider using translation key
        'sort'   => 2,
        'fields' => [
            [
                'name'  => 'enable_return_policy',
                'title' => 'Enable Return Policy',  // Consider using translation key
                'type'  => 'boolean',
            ], [
                'name'       => 'max_return_days',
                'title'      => 'Maximum Return Days',  // Consider using translation key
                'type'       => 'number',
                'validation' => 'required_if:enable_return_policy,1|numeric|min:1',
                'depends'    => 'enable_return_policy:1',
            ], [
                'name'    => 'auto_approve_returns',
                'title'   => 'Auto-approve Returns',  // Consider using translation key
                'type'    => 'boolean',
                'depends' => 'enable_return_policy:1',
            ], [
                'name'    => 'require_return_reason',
                'title'   => 'Require Return Reason',  // Consider using translation key
                'type'    => 'boolean',
                'depends' => 'enable_return_policy:1',
            ], [
                'name'    => 'return_policy_text',
                'title'   => 'Return Policy Description',  // Consider using translation key
                'type'    => 'textarea',
                'depends' => 'enable_return_policy:1',
            ],
        ],
    ],
    // ...
];
```

#### Explanation 

- The `enable_return_policy` field determines if the return policy feature is enabled.

- If `enable_return_policy` is set to `1` (true), the dependent fields (`max_return_days`, `auto_approve_returns`, `require_return_reason`, `return_policy_text`) become visible and accessible.

- The `depends` attribute ensures that these configuration options are only shown when the return policy feature is actually enabled, creating a cleaner and more intuitive admin interface.

## Validations in System Configuration

In Bagisto, validations are defined in the configuration array for each field under the `validation` key. These validations follow Laravel's validation rules, providing robust data integrity for your configuration settings.

### Common Validation Rules

- `required` - Ensures the field is not empty.
- `string` - Ensures the field contains a string.
- `integer` - Ensures the field contains an integer.
- `boolean` - Ensures the field contains a boolean value (true or false).
- `numeric` - Ensures the field contains a numeric value.
- `email` - Ensures the field contains a valid email address.
- `mimes` - Ensures the uploaded file is of a specific MIME type.
- `max` - Ensures the field contains a value not greater than a specified maximum.
- `min` - Ensures the field contains a value not less than a specified minimum.
- `required_if` - Ensures the field is required if another field has a specific value.

#### Example RMA Configuration with Validations

```php
return [
    [
        'key'    => 'rma.settings.validation_example',
        'name'   => 'RMA Validation Examples',  // Consider using translation key
        'sort'   => 1,
        'fields' => [
            [
                'name'       => 'return_email',
                'title'      => 'Return Request Email',  // Consider using translation key
                'type'       => 'text',
                'validation' => 'required|email|max:255',
            ],
            [
                'name'       => 'max_return_days',
                'title'      => 'Maximum Return Days',  // Consider using translation key
                'type'       => 'number',
                'validation' => 'required|numeric|min:1|max:365',
            ],
            [
                'name'       => 'enable_notifications',
                'title'      => 'Enable Email Notifications',  // Consider using translation key
                'type'       => 'boolean',
                'validation' => 'required|boolean',
            ],
            [
                'name'       => 'notification_email',
                'title'      => 'Notification Email',  // Consider using translation key
                'type'       => 'text',
                'validation' => 'required_if:enable_notifications,1|email',
                'depends'    => 'enable_notifications:1',
            ],
            [
                'name'       => 'return_label_logo',
                'title'      => 'Return Label Logo',  // Consider using translation key
                'type'       => 'image',
                'validation' => 'mimes:jpeg,jpg,png|max:2048',
            ],
        ],
    ],
];
```

## Using Configuration Values in Your Code

Once you've defined your system configuration, you can access these values throughout your RMA package:

### In Controllers

```php{11,13}
<?php

namespace Webkul\RMA\Http\Controllers;

use Illuminate\Http\Request;

class ReturnRequestController extends Controller
{
    public function create()
    {
        $isRmaEnabled = core()->getConfigData('rma.settings.general.enable');

        $maxReturnDays = core()->getConfigData('rma.settings.general.max_return_days');
        
        if (! $isRmaEnabled) {
            return redirect()->back()->with('error', 'RMA is currently disabled.');
        }
        
        // Your logic here
    }
}
```

### In Blade Views

```blade{1,5}
@if (core()->getConfigData('rma.settings.general.enable'))
    <div class="return-request-section">
        <h3>Request Return</h3>

        <p>You have {{ core()->getConfigData('rma.settings.general.max_return_days') }} days to return this item.</p>
    </div>
@endif
```

::: tip Configuration Best Practices
**Logical Grouping**: Organize related settings together for better admin experience

**Clear Naming**: Use descriptive field names that clearly indicate their purpose

**Proper Validation**: Always validate configuration inputs to prevent invalid data

**Default Values**: Provide sensible defaults for a better initial experience

**Dependencies**: Use dependent fields to show/hide related configuration options

**Documentation**: Comment your configuration arrays to explain complex settings
:::

## Your Next Step

You've now successfully implemented system configuration for your RMA package. Your package now provides administrators with an intuitive interface to configure RMA behavior without touching code.

With system configuration in place, administrators can now:
- Enable or disable RMA functionality across the store
- Configure return policies and time limits
- Set up notification preferences
- Customize return request workflow settings
- Upload custom branding elements for return labels

Your RMA package now has comprehensive configuration management alongside its security, navigation, and data management features.

By following these steps and examples, you can create and manage custom configurations in Bagisto effectively, ensuring a flexible and tailored experience for your package users.
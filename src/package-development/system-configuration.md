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

```text
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
        'key' => 'rma',
        'name' => 'RMA',  // Use direct text for now
        'info' => 'Return Merchandise Authorization settings',  // Use direct text for now
        'sort' => 1,
    ], [
        'key' => 'rma.settings',
        'name' => 'General Settings',  // Use direct text for now
        'info' => 'Configure basic RMA functionality',  // Use direct text for now
        'icon' => 'settings/settings.svg',
        'sort' => 1,
    ], [
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',  // Use direct text for now
        'info' => 'Basic RMA settings and options',  // Use direct text for now
        'sort' => 1,
        'fields' => [
            [
                'name' => 'enable',
                'title' => 'Enable RMA',  // Use direct text for now
                'type' => 'boolean',
            ], [
                'name' => 'allow_partial_returns',
                'title' => 'Allow Partial Returns',  // Use direct text for now
                'type' => 'boolean',
            ], [
                'name' => 'max_return_days',
                'title' => 'Maximum Return Days',  // Use direct text for now
                'type' => 'number',
                'validation' => 'numeric|min:1',
            ],
        ],
    ],
];
```

This configuration defines RMA-specific settings including enable/disable functionality, partial return options, and return time limits.

::: warning Every item needs `info`, and keys are three levels deep
Bagisto translates each item's `info` when it builds the configuration tree; an item without an `info` key breaks the whole Configuration area. The examples further down this page shorten the surrounding items for readability, but keep `name`, `info` and `sort` on every item you write. The page shown in the admin is always the third level (`group.section.subsection`): a URL naming a group or section alone answers with a not found.
:::

### Item and field keys

| Item key | Purpose |
|---|---|
| `key` | Dotted path; the first segment is the group, the second the page, the third the section drawn on that page |
| `name`, `info` | Translation keys for the title and description. Both required |
| `sort` | Order among siblings |
| `icon` | Group and page level only: an SVG under the admin package's `assets/images` |
| `layout` | Page level only, current development version: hide parts of the page (see [Page layout](#page-layout)) |
| `fields` | Section level: the inputs |

| Field key | Purpose |
|---|---|
| `name` | The last segment of the stored code, `rma.settings.general.enable` |
| `title`, `info` | Translation keys for the label and the help text under the input |
| `type` | One of the [field types](#supported-field-types) |
| `default` | Fallback when nothing has been saved |
| `validation` | Laravel rules as a pipe string or an array (see [Validations](#validations-in-system-configuration)) |
| `options` | For `select` and `multiselect`: an array, or a `Class@method` string resolved from the container |
| `placeholder` | Placeholder text for text inputs |
| `depends` | Show only when another field has one of the listed values (see [Dependent fields](#dependent-fields)) |
| `channel_based` | Store one value per channel; the page shows the channel switcher |
| `locale_based` | Store one value per locale; the page shows the locale switcher |

`channel_based` and `locale_based` decide how a value is stored and read back. A field without them holds one global value; a field with `channel_based` set is read for the current channel, and `core()->getConfigData()` takes the channel and locale codes as its second and third arguments when you need another scope. Set them deliberately: a shipping origin is per channel, a return policy text is per locale, an API key is neither.

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
            dirname(__DIR__).'/Config/admin-menu.php',
            'menu.admin'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/acl.php',
            'acl'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/system.php',
            'core'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');

        $this->loadRoutesFrom(__DIR__.'/../Routes/admin-routes.php');
        $this->loadRoutesFrom(__DIR__.'/../Routes/shop-routes.php');

        $this->loadViewsFrom(__DIR__.'/../Resources/views', 'rma');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'rma');
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
# Navigate to: Configure → RMA
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
        'key' => 'rma',
        'name' => 'rma::app.admin.system.rma',  // Now using translation key
        'info' => 'rma::app.admin.system.rma-info',  // Now using translation key
        'sort' => 1,
    ], [
        'key' => 'rma.settings',
        'name' => 'rma::app.admin.system.general-settings',  // Now using translation key
        'info' => 'rma::app.admin.system.general-settings-info',  // Now using translation key
        'icon' => 'settings/settings.svg',
        'sort' => 1,
    ], [
        'key' => 'rma.settings.general',
        'name' => 'rma::app.admin.system.rma-configuration',  // Now using translation key
        'info' => 'rma::app.admin.system.rma-configuration-info',  // Now using translation key
        'sort' => 1,
        'fields' => [
            [
                'name' => 'enable',
                'title' => 'rma::app.admin.system.enable-rma',  // Now using translation key
                'type' => 'boolean',
            ], [
                'name' => 'allow_partial_returns',
                'title' => 'rma::app.admin.system.allow-partial-returns',  // Now using translation key
                'type' => 'boolean',
            ], [
                'name' => 'max_return_days',
                'title' => 'rma::app.admin.system.max-return-days',  // Now using translation key
                'type' => 'number',
                'validation' => 'numeric|min:1',
            ],
        ],
    ],
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
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_email',
                'title' => 'Return Request Email',  // Consider using translation key
                'type' => 'text',
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
        'key' => 'rma.settings.api',
        'name' => 'API Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'api_secret',
                'title' => 'API Secret Key',  // Consider using translation key
                'type' => 'password',
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
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'max_return_days',
                'title' => 'Maximum Return Days',  // Consider using translation key
                'type' => 'number',
                'validation' => 'required|numeric|min:1|max:365',
            ],
        ],
    ],
    // ...
];
```

### Color Type

This field type provides a color picker input field. The renderer supports it, but no core setting uses it, so test it in your own page before relying on it; the same is true of the `file` type below.

#### Example

```php
return [
    // ...
    [
        'key' => 'rma.settings.appearance',
        'name' => 'Appearance Settings',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_button_color',
                'title' => 'Return Button Color',  // Consider using translation key
                'type' => 'color',
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
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'enable_auto_approval',
                'title' => 'Auto-approve Return Requests',  // Consider using translation key
                'type' => 'boolean',
            ],
        ],
    ],
    // ...
];
```

### Select Type

This field type provides a select field with specified options, useful for predefined choices. `options` can also name a class and method, which Bagisto resolves from the container each time the page is built, so the list can come from the database:

```php
'options' => 'Webkul\Tax\Repositories\TaxCategoryRepository@getConfigOptions',
```

#### Example

```php
return [
    // ...
    [
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'default_return_status',
                'title' => 'Default Return Status',  // Consider using translation key
                'type' => 'select',
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
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'allowed_return_reasons',
                'title' => 'Allowed Return Reasons',  // Consider using translation key
                'type' => 'multiselect',
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
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_policy_text',
                'title' => 'Return Policy Description',  // Consider using translation key
                'type' => 'textarea',
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
        'key' => 'rma.settings.content',
        'name' => 'Content Settings',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_instructions',
                'title' => 'Return Instructions (Rich Text)',  // Consider using translation key
                'type' => 'editor',
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
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_label_logo',
                'title' => 'Return Label Logo',  // Consider using translation key
                'type' => 'image',
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
        'key' => 'rma.settings.documents',
        'name' => 'Document Settings',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_policy_pdf',
                'title' => 'Return Policy Document',  // Consider using translation key
                'type' => 'file',
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
        'key' => 'rma.settings.location',
        'name' => 'Location Settings',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_center_country',
                'title' => 'Return Center Country',  // Consider using translation key
                'type' => 'country',
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
        'key' => 'rma.settings.location',
        'name' => 'Location Settings',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_center_state',
                'title' => 'Return Center State/Province',  // Consider using translation key
                'type' => 'state',
            ],
        ],
    ],
    // ...
];
```

### Blade Type

This field type allows you to render a custom Blade view directly inside the system configuration form. It is useful for advanced use cases where standard field types are not sufficient — such as displaying custom UI components, notices, previews, or interactive elements within the configuration page.

The `blade` type requires a `path` attribute pointing to a valid Blade view. The view receives `$field` and `$child` variables that provide access to the field configuration and parent section context.

#### Example

**Step 1:** Define the blade field in your `system.php`:

```php
return [
    // ...
    [
        'key' => 'rma.settings.general',
        'name' => 'RMA Configuration',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_policy_preview',
                'title' => 'Return Policy Preview',  // Consider using translation key
                'type' => 'blade',
                'path' => 'rma::admin.configuration.return-policy-preview',
            ],
        ],
    ],
    // ...
];
```

**Step 2:** Create the corresponding Blade view at `packages/Webkul/RMA/src/Resources/views/admin/configuration/return-policy-preview.blade.php`:

```blade
<div class="flex flex-col gap-2 rounded-lg border p-4 dark:border-gray-800">
    <p class="text-sm text-gray-600 dark:text-gray-300">
        This is a custom preview rendered via the blade field type.
        You can include any HTML, Vue components, or dynamic content here.
    </p>
</div>
```

::: tip When to Use Blade Type
Use the `blade` field type when you need to embed custom UI that goes beyond standard form inputs — for example, informational notices, preview panels, action buttons, or interactive widgets within your configuration page. Core uses it for the Cache Management buttons, the About page and the search-engine connection test.
:::

## Page layout

A page that is all buttons or all read-only information does not want a save button or a channel switcher. On the current development version an item at the page level may carry a `layout` array that switches parts of the page off; anything left out stays shown.

```php
[
    'key' => 'rma.tools',
    'name' => 'rma::app.admin.system.tools',
    'info' => 'rma::app.admin.system.tools-info',
    'icon' => 'settings/settings.svg',
    'sort' => 2,
    'layout' => [
        'title_section' => false,
        'save_button' => false,
        'channel_switcher' => false,
        'locale_switcher' => false,
    ],
],
```

| Key | Hides |
|---|---|
| `title_section` | The describing column beside each field group; the fields then span the full width |
| `save_button` | The Save Configuration button |
| `channel_switcher` | The channel dropdown |
| `locale_switcher` | The locale dropdown |

When both switchers are hidden, a save resolves the channel and locale itself from the request. Bagisto 2.4 has no `layout` key; every page there shows all four elements.

## Dependent Fields

The `depends` feature in Bagisto's configuration system allows you to conditionally display or enable certain configuration fields based on the value of other fields. This feature is particularly useful for creating dynamic and context-sensitive configuration forms.

The `depends` attribute is used within the configuration array to specify a condition under which the setting should be enabled or visible. It evaluates the value of another field in real-time and adjusts the display accordingly.

Consider the following RMA configuration example:

```php
return [
    // ...
    [
        'key' => 'rma.settings.return_policy',
        'name' => 'Return Policy Settings',  // Consider using translation key
        'sort' => 2,
        'fields' => [
            [
                'name' => 'enable_return_policy',
                'title' => 'Enable Return Policy',  // Consider using translation key
                'type' => 'boolean',
            ], [
                'name' => 'max_return_days',
                'title' => 'Maximum Return Days',  // Consider using translation key
                'type' => 'number',
                'validation' => 'required_if:enable_return_policy,1|numeric|min:1',
                'depends' => 'enable_return_policy:1',
            ], [
                'name' => 'auto_approve_returns',
                'title' => 'Auto-approve Returns',  // Consider using translation key
                'type' => 'boolean',
                'depends' => 'enable_return_policy:1',
            ], [
                'name' => 'require_return_reason',
                'title' => 'Require Return Reason',  // Consider using translation key
                'type' => 'boolean',
                'depends' => 'enable_return_policy:1',
            ], [
                'name' => 'return_policy_text',
                'title' => 'Return Policy Description',  // Consider using translation key
                'type' => 'textarea',
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

- Several values may be listed after the colon, separated by commas: `'depends' => 'mode:smtp,api'` shows the field when `mode` is either. The value is compared as a string, so core also writes `'depends' => 'prerender_enabled:true'`.

- A field whose dependency is not met is neither shown nor validated on save, so a `required_if` rule on a dependent field is redundant; plain `required` is enough.

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

Bagisto adds four rules of its own that a `system.php` field may use by name: `comma_separated_integer`, `decimal`, `phone` and `postcode` (implemented in `Webkul\Core\Rules`). A field with no `validation` key is validated as `nullable`.

The same rules are also sent to the browser, where Vee Validate checks them before the form posts. Rules only the server understands (`nullable`, `sometimes`, `present`, `filled`, `bail`) are stripped from that copy, and `min`/`max` on a `number` field are rewritten as `min_value`/`max_value`, so a rule the browser cannot run is not an error, but a rule that is wrong in Vee Validate blocks the save.

#### Example RMA Configuration with Validations

```php
return [
    [
        'key' => 'rma.settings.validation_example',
        'name' => 'RMA Validation Examples',  // Consider using translation key
        'sort' => 1,
        'fields' => [
            [
                'name' => 'return_email',
                'title' => 'Return Request Email',  // Consider using translation key
                'type' => 'text',
                'validation' => 'required|email|max:255',
            ],
            [
                'name' => 'max_return_days',
                'title' => 'Maximum Return Days',  // Consider using translation key
                'type' => 'number',
                'validation' => 'required|numeric|min:1|max:365',
            ],
            [
                'name' => 'enable_notifications',
                'title' => 'Enable Email Notifications',  // Consider using translation key
                'type' => 'boolean',
                'validation' => 'required|boolean',
            ],
            [
                'name' => 'notification_email',
                'title' => 'Notification Email',  // Consider using translation key
                'type' => 'text',
                'validation' => 'required_if:enable_notifications,1|email',
                'depends' => 'enable_notifications:1',
            ],
            [
                'name' => 'return_label_logo',
                'title' => 'Return Label Logo',  // Consider using translation key
                'type' => 'image',
                'validation' => 'mimes:jpeg,jpg,png|max:2048',
            ],
        ],
    ],
];
```

## Configuration Value Resolution

When you retrieve a configuration value using `core()->getConfigData()`, Bagisto resolves it through a fallback chain:

```text
core()->getConfigData('rma.settings.general.enable')
│
├── 1. Core Config (Database)
│     Checks the `core_config` table for admin-saved values.
│     Found? → Returns the saved value.
│
└── 2. Fallback (No database entry)
      │
      ├── Laravel Config (merged via mergeConfigFrom)
      │     For payment methods: Config::get('payment_methods.{code}.{field}')
      │     For shipping methods: Config::get('carriers.{code}.{field}')
      │     Found? → Returns the package config value.
      │
      └── System Default ('default' key in system.php field definition)
            Returns the 'default' value from the field array,
            or null if not defined.
```

::: info When Does Each Layer Apply?
- **Payment and shipping methods** have package config files (`payment-methods.php`, `carriers.php`) that are merged into the Laravel config. These serve as the primary fallback when no admin-saved value exists.
- **General package settings** (like the RMA example) typically don't have a matching Laravel config key, so the `default` value in your `system.php` field definition serves as the direct fallback.
:::

::: tip Best Practice
For payment and shipping methods, always define essential defaults (`active`, `title`, `sort`, etc.) in your package config file (`payment-methods.php` or `carriers.php`). For other packages, use the `default` key in your `system.php` field definitions to provide sensible initial values.
:::

## Using Configuration Values in Your Code

Once you've defined your system configuration, you can access these values throughout your RMA package:

### In Controllers

```php{11,13}
<?php

namespace Webkul\RMA\Http\Controllers;

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
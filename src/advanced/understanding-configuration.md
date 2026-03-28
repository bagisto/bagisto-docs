# Understanding Bagisto's Configuration System

This guide provides a comprehensive explanation of Bagisto's three-part configuration system, how configuration keys are resolved, and best practices for working with configurations in your custom packages.

## Overview

Bagisto's configuration system is designed to provide flexibility for both developers and administrators. It allows developers to ship sensible default values while giving store administrators the ability to override these values through the admin interface without touching code.

## The Three-Part Configuration System

Bagisto's configuration system consists of three distinct components that work together:

| Component        | Purpose                                                         | Example               |
| ---------------- | --------------------------------------------------------------- | --------------------- |
| **Config Files** | Provide default values that ship with your package              | `config/carriers.php` |
| **Database**     | Store admin-configured overrides that take precedence           | `core_config` table   |
| **System.php**   | Define how configuration appears in admin UI and maps to routes | `config/system.php`   |

### Access Methods

There are two primary ways to access configuration values:

```php
// Direct config file access (static defaults only)
config('carriers.free.title');

// Full configuration resolution (database override or config file default)
core()->getConfigData('sales.carriers.free.title');
```

**When to use each method:**

- Use config() when you only need the default value and don't want database overrides
- Use core()->getConfigData() when you want the full resolution process including admin overrides

## Configuration Key Structure

### Key Naming Convention

In `system.php`, the number of dots in the `key` determines its purpose:

#### One Dot (Routing Level)

Creates a route/section in the admin UI but has no configurable fields:

```php
[
    'key'  => 'sales.carriers',  // Creates route: /admin/configuration/sales/carriers
    'name' => 'admin::app.configuration.index.sales.shipping-methods.title',
    'info' => 'admin::app.configuration.index.sales.shipping-methods.info',
    'icon' => 'settings/shipping-method.svg',
    'sort' => 2,
]
```

#### Two Dots (Configuration Level)

Defines actual configurable fields that map to database and config files:

```php
[
    'key'    => 'sales.carriers.free',  // Sub-section with actual fields
    'name'   => 'admin::app.configuration.index.sales.shipping-methods.free-shipping.page-title',
    'info'   => 'admin::app.configuration.index.sales.shipping-methods.free-shipping.title-info',
    'sort'   => 1,
    'fields' => [
        ['name' => 'title', ...],   // Becomes: sales.carriers.free.title
        ['name' => 'active', ...],  // Becomes: sales.carriers.free.active
    ]
]
```

### The Three Purposes of system.php Keys

The `key` in `system.php` serves three critical purposes that must remain consistent:

| Purpose              | Example                                   | Effect                                               |
| -------------------- | ----------------------------------------- | ---------------------------------------------------- |
| **Routing**          | `'sales.carriers'`                        | Creates route: `/admin/configuration/sales/carriers` |
| **Menu Grouping**    | All keys starting with `'sales'`          | Groups items together in admin menu                  |
| **Database Storage** | `'sales.carriers.free'` + field `'title'` | Stores as: `code='sales.carriers.free.title'`        |

## Configuration Resolution Process

When calling `core()->getConfigData('sales.carriers.free.title')`, the system follows this process:

### Step 1: Metadata Lookup

The system first checks `system.php` for field definition to determine:

- Channel and locale scope
- Field type and validation rules
- Dependencies between fields

### Step 2: Database Query

The system searches the `core_config` table for an override:

```sql
SELECT * FROM core_config
WHERE code = 'sales.carriers.free.title'
  AND channel_code = 'default'
  AND locale_code = 'en';
```

### Step 3: Config File Fallback

If no database override exists, the system strips the first segment and accesses the config file:

```php
// Without database override (uses default)
$title = core()->getConfigData('sales.carriers.free.title');
// → Queries DB: code='sales.carriers.free.title' → Not found
// → Strips 'sales': 'carriers.free.title'
// → Returns: Config::get('carriers.free.title') → 'Free Shipping'

// With database override (uses admin-configured value)
$title = core()->getConfigData('sales.carriers.free.title');
// → Queries DB: code='sales.carriers.free.title' → Found!
// → Returns: 'Custom Free Shipping' (never reaches config file)
```

::: warning Critical: First Segment Not Validated
The first segment is **mechanically stripped without validation**. This means:

```php
// All these resolve identically when no database override exists:
core()->getConfigData('sales.carriers.free.title')     // → Config::get('carriers.free.title')
core()->getConfigData('catalog.carriers.free.title')   // → Config::get('carriers.free.title')
core()->getConfigData('xyz.carriers.free.title')       // → Config::get('carriers.free.title')
```

**Why this matters:** You could use any prefix and still access config files, but routing, UI, and database storage depend on the correct prefix from `system.php`.

**Always use the exact key defined in system.php** to maintain consistency across all three purposes.
:::

## Complete Implementation Example

### Step 1: Define UI Structure in system.php

```php
// In packages/Webkul/Admin/src/Config/system.php
return [
    // Parent section (routing level - 1 dot)
    [
        'key'  => 'sales.carriers',      // Creates route: /admin/configuration/sales/carriers
        'name' => 'admin::app.configuration.index.sales.shipping-methods.title',
        'info' => 'admin::app.configuration.index.sales.shipping-methods.info',
        'icon' => 'settings/shipping-method.svg',
        'sort' => 2,
    ],

    // Child configuration (field level - 2 dots)
    [
        'key'    => 'sales.carriers.free',   // Defines configurable fields
        'name'   => 'admin::app.configuration.index.sales.shipping-methods.free-shipping.page-title',
        'info'   => 'admin::app.configuration.index.sales.shipping-methods.free-shipping.title-info',
        'sort'   => 1,
        'fields' => [
            [
                'name'          => 'title',      // Full key: sales.carriers.free.title
                'title'         => 'admin::app.configuration.index.sales.shipping-methods.free-shipping.title',
                'type'          => 'text',
                'depends'       => 'active:1',
                'validation'    => 'required_if:active,1',
                'channel_based' => true,
                'locale_based'  => true,
            ],
            [
                'name'          => 'active',     // Full key: sales.carriers.free.active
                'title'         => 'admin::app.configuration.index.sales.shipping-methods.free-shipping.status',
                'type'          => 'boolean',
                'channel_based' => true,
                'locale_based'  => false,
            ],
        ],
    ],
];
```

### Step 2: Register Default Values in Config File

```php
// Config/carriers.php - These are the DEFAULT values
return [
    'free' => [
        'title'        => 'Free Shipping',
        'description'  => 'Free Shipping',
        'active'       => true,
        'default_rate' => '0', // Not configurable in Admin UI
        'class'        => 'Webkul\Shipping\Carriers\Free', // Not configurable in Admin UI
    ],
];
```

### Step 3: Register Both Configs in Service Provider

```php
// In your service provider
public function register()
{
    // Register default values
    $this->mergeConfigFrom(
        dirname(__DIR__).'/Config/carriers.php',
        'carriers'  // ← Must match the second segment after stripping first
    );

    // Register UI structure
    $this->mergeConfigFrom(
        dirname(__DIR__).'/Config/system.php',
        'core'  // ← Must always be 'core' for system config
    );
}
```

## Channel and Locale Scoping

Fields can be scoped to channels and locales for multi-tenant support:

```php
[
    'name'          => 'title',
    'channel_based' => true,   // Different per channel
    'locale_based'  => true,   // Different per locale
]
```

### Retrieval with Scope

```php
// Current channel/locale (uses context)
core()->getConfigData('sales.carriers.free.title');

// Specific channel/locale
core()->getConfigData('sales.carriers.free.title', 'wholesale', 'fr');

// Specific locale only (uses current channel)
core()->getConfigData('sales.carriers.free.title', null, 'en');
```

## Troubleshooting

### Configuration Not Loading

**Problem**: `core()->getConfigData()` returns null even though you have default values.

**Solution**: Check that your config file is registered with the correct key name:

```php
// system.php key: 'sales.carriers.free'
// Config file must be registered as 'carriers' (second segment)
$this->mergeConfigFrom(
    dirname(__DIR__).'/Config/carriers.php',
    'carriers'  // ← This must match the second segment
);
```

### Database Overrides Not Working

**Problem**: Admin changes aren't being used.

**Solution**: Verify the field definition in `system.php` matches exactly:

```php
// The full key is constructed from: system.php key + field name
// system.php key: 'sales.carriers.free'
// field name: 'title'
// Full database key: 'sales.carriers.free.title'
```

### Channel/Locale Values Not Saving

**Problem**: Values are saved but not retrieved correctly for specific channels.

**Solution**: Ensure the field is properly scoped:

```php
[
    'name'          => 'title',
    'channel_based' => true,  // Required for channel-specific values
    'locale_based'  => true,  // Required for locale-specific values
]
```

### Configuration Not Appearing in Admin

**Problem**: Your configuration section doesn't show up in the admin panel.

**Solution**: Check these common issues:

1. Verify the `system.php` file is merged with the 'core' config
2. Ensure parent sections (1-dot keys) exist before child sections (2-dot keys)
3. Check that the sort order doesn't conflict with existing items
4. Clear the configuration cache: `php artisan config:clear`

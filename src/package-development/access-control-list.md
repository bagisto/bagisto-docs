# Access Control List (ACL)

Access Control Lists (ACL) in Bagisto provide security by controlling which admin users can access different sections of your package. ACL ensures that only authorized administrators can view and interact with specific features based on their assigned roles and permissions.

For our RMA package, we'll create ACL configuration to control access to the return requests management section, demonstrating how to secure your package's admin features.

::: info Learning Objective
This section demonstrates how to implement Access Control Lists for your Bagisto package, ensuring proper security and user access management for your admin features.
:::

## Directory Structure

To configure Access Control List (ACL) settings in Bagisto, follow these structured steps:

### Create Configuration File

 Begin by creating a new file named `acl.php` within the `Config` directory of your package located at `packages/Webkul/RMA/src/Config`:

```
└── packages
      └── Webkul
         └── RMA
            └── src
                  ├── ...
                  └── Config
                     ├── acl.php
                     └── ...
```

### Define ACL Configuration

Inside `acl.php`, define ACL settings using an array format. Each array element represents a menu item or resource with parameters such as key, `name`, `route`, and `sort`. Here’s an example:
 
Add the following code to `acl.php`:

```php
<?php

return [
    [
        'key'   => 'rma',
        'name'  => 'RMA',  // Using direct text for now
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 1,
    ], [
        'key'   => 'rma.return-requests',
        'name'  => 'Return Requests',  // Using direct text for now
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 1,
    ], [
        'key'   => 'rma.return-requests.view',
        'name'  => 'View',  // Using direct text for now
        'route' => 'admin.rma.return-requests.view',
        'sort'  => 1,
    ],
];
```

In the above code, we start with a simple ACL configuration using direct text for permission names. This creates a hierarchical structure: main module (RMA) → sub-module (Return Requests) → specific action (View).

## Adding Translations

Once you have the basic ACL working, you can implement translations for better internationalization support. Here's how to upgrade your configuration:

### Step 1: Add Translation File

Create or update your translation file `packages/Webkul/RMA/src/Resources/lang/en/app.php`:

```php{11-15}
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
    ],
];
```

### Step 2: Update ACL Configuration

Replace the direct text with translation keys in your `acl.php`:

```php{6,11,16}
<?php

return [
    [
        'key'   => 'rma',
        'name'  => 'rma::app.admin.acl.rma',  // Now using translation key
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 1,
    ], [
        'key'   => 'rma.return-requests',
        'name'  => 'rma::app.admin.acl.return-requests',  // Now using translation key
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 1,
    ], [
        'key'   => 'rma.return-requests.view',
        'name'  => 'rma::app.admin.acl.view',  // Now using translation key
        'route' => 'admin.rma.return-requests.view',
        'sort'  => 1,
    ],
];
```

::: tip Translation Benefits
- **Multi-language Support**: Your ACL permissions can be displayed in different languages
- **Consistency**: Matches Bagisto's core translation patterns
- **Maintainability**: Easier to update permission names across the application
:::

## Register ACL Configuration

Update your package's service provider to register the ACL:

**Update:** `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`

```php{18-22}
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

### Testing Your ACL Configuration

Now you can test your ACL configuration:

```bash
# Clear cache
php artisan optimize:clear

# Visit the admin panel
# Login to: http://your-app.com/admin
```

**Expected Results:**
- **Permission Created**: "RMA" appears in the admin roles/permissions interface
- **Menu Integration**: RMA menu is automatically hidden for users without permission
- **Route Protection**: Direct access to RMA routes requires proper permission

::: info Simple ACL Testing Checklist
**Core Functionality:**
- ✅ RMA permission appears in admin roles management
- ✅ Super admin can access RMA features by default
- ✅ Users without RMA permission cannot see the menu
- ✅ Direct URL access is blocked for unauthorized users

**What's Working:**
- ✅ Basic ACL permission configured
- ✅ Integration with admin menu system
- ✅ Route-level security enabled
:::

## Understanding ACL Configuration Options

Now that you have a working ACL setup, let's understand the configuration options:

### Basic ACL Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| **`key`** | String | Unique identifier for the permission |
| **`name`** | String | Display name in admin roles interface |
| **`route`** | String | Named Laravel route to protect |
| **`sort`** | Integer | Sort order in permissions list |

### Creating Hierarchical ACL Structure

For packages with multiple admin sections, you can create hierarchical permissions following Bagisto's standard pattern:

```php
<?php

return [
    // Main RMA permission
    [
        'key'   => 'rma',
        'name'  => 'RMA',  // Consider using translation key: rma::app.admin.acl.rma
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 1,
    ], [
        'key'   => 'rma.return-requests',
        'name'  => 'Return Requests',  // Consider using translation key: rma::app.admin.acl.return-requests
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 1,
    ], [
        'key'   => 'rma.return-requests.view',
        'name'  => 'View',  // Consider using translation key: rma::app.admin.acl.view
        'route' => 'admin.rma.return-requests.view',
        'sort'  => 1,
    ], [
        'key'   => 'rma.return-requests.create',
        'name'  => 'Create',  // Consider using translation key: rma::app.admin.acl.create
        'route' => 'admin.rma.return-requests.create',
        'sort'  => 2,
    ], [
        'key'   => 'rma.return-requests.edit',
        'name'  => 'Edit',  // Consider using translation key: rma::app.admin.acl.edit
        'route' => 'admin.rma.return-requests.edit',
        'sort'  => 3,
    ], [
        'key'   => 'rma.return-requests.delete',
        'name'  => 'Delete',  // Consider using translation key: rma::app.admin.acl.delete
        'route' => 'admin.rma.return-requests.delete',
        'sort'  => 4,
    ], [
        'key'   => 'rma.settings',
        'name'  => 'Settings',  // Consider using translation key: rma::app.admin.acl.settings
        'route' => 'admin.rma.settings.index',
        'sort'  => 2,
    ], [
        'key'   => 'rma.settings.view',
        'name'  => 'View',  // Consider using translation key: rma::app.admin.acl.view
        'route' => 'admin.rma.settings.view',
        'sort'  => 1,
    ], [
        'key'   => 'rma.settings.edit',
        'name'  => 'Edit',  // Consider using translation key: rma::app.admin.acl.edit
        'route' => 'admin.rma.settings.edit',
        'sort'  => 2,
    ],
];
```

::: info ACL Structure Explanation
**Hierarchical Structure**: Uses dot notation (e.g., `rma.return-requests.view`) to create permission hierarchy

**Translation Keys**: Uses `rma::app.acl.*` pattern for internationalization support

**Array Format**: Each permission is a separate array element, similar to Bagisto core modules like Sales

**Permission Levels**:
- **Module Level**: `rma` - Overall access to RMA features
- **Section Level**: `rma.return-requests` - Access to specific sections
- **Action Level**: `rma.return-requests.view` - Specific actions within sections

**Route Matching**: Each permission protects specific admin routes for fine-grained control
:::

## Checking Permissions in Your Code

To check permissions in your controllers or views, use Bagisto's built-in methods:

### In Controllers

```php
<?php

namespace Webkul\RMA\Http\Controllers\Admin;

use Webkul\Admin\Http\Controllers\Controller;

class ReturnRequestController extends Controller
{
    public function index()
    {
        // Check if user has RMA permission
        if (! bouncer()->hasPermission('rma')) {
            abort(401, 'Unauthorized access.');
        }
        
        // Your controller logic here
    }
}
```

### In Blade Views

```blade
@if (bouncer()->hasPermission('rma'))
    <!-- Show RMA-related content -->
    <div class="rma-section">
        <h3>Return Requests Management</h3>

        <!-- RMA content here -->
    </div>
@endif
```

::: tip ACL Best Practices
**Match Menu Keys**: Use the same key for both ACL and menu configuration for consistency

**Descriptive Names**: Use clear, descriptive names for permissions in the admin interface

**Logical Hierarchy**: Organize permissions logically to match your package structure

**Test Thoroughly**: Always test with different user roles to ensure proper access control

**Document Permissions**: Document what each permission allows for easier role management
:::

## Your Next Step

You've now successfully implemented Access Control Lists for your RMA package. Your package now has proper security controls that integrate seamlessly with Bagisto's user management system.

With ACL configured, administrators can now:
- Create custom roles with specific RMA permissions
- Assign users to roles based on their responsibilities
- Control access to your package features at a granular level
- Ensure sensitive return request data is properly protected

Now that your package has comprehensive security alongside its data management and navigation features, the next step is to make your package configurable through the admin interface.

**Continue to:** **[System Configuration](./system-configuration.md)** - Add configurable settings that administrators can manage through the Bagisto admin panel

With ACL security and system configuration in place, your package will be both secure and flexible, allowing administrators to customize its behavior according to their business needs.

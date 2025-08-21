# Menu

In Bagisto, there are two types of menus to understand:

**Shop Menu**: The frontend navigation that customers see is managed through the **Categories** section in the admin panel. These menus are automatically generated from your product categories and don't require package development.

**Admin Menu**: This section focuses on the backend navigation that administrators use to manage the system. Specifically, we will cover how to create custom admin menu items for your package.

Admin menus provide navigation structure for your package's administrative interface in Bagisto. They allow administrators to easily access different sections and features of your package from the admin panel sidebar.

For our RMA package, we'll create a simple admin menu that provides access to the return requests listing page, demonstrating how to integrate your package seamlessly into Bagisto's admin navigation.

::: info Learning Objective
This section demonstrates how to create admin menu items for your Bagisto package, providing intuitive navigation for administrators to access your package's features.
:::

## Understanding Bagisto Admin Menu

Bagisto's admin menu system is hierarchical and provides multiple levels of navigation:

### Menu Levels
- **First Level (Sidebar)**: Primary navigation items in the left sidebar
- **Second Level (Dropdown)**: Sub-items that appear when hovering over first-level items
- **Third Level (Tabs)**: Additional tabs within specific admin pages

### Menu Components
- **Configuration**: PHP array defining menu structure
- **Routes**: Named routes that menu items link to
- **Icons**: CSS classes for menu item icons
- **Permissions**: Access control for menu visibility

## Creating Your First Admin Menu

Let's create a simple admin menu for our RMA package that provides access to the return requests listing page.

### Directory Structure

Create the configuration directory structure in your package:

```bash
mkdir -p packages/Webkul/RMA/src/Config
```

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Config
                └── admin-menu.php
```

### Creating the Menu Configuration

Create `packages/Webkul/RMA/src/Config/admin-menu.php`:

```php
<?php

return [
    [
        'key'   => 'rma',
        'name'  => 'RMA',
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 100, // Order position `100` places it near the end of the menu
        'icon'  => '',
    ],
];
```

::: info Simple Menu Explanation
**Key**: Unique identifier `rma` for our menu item

**Name**: Display text `RMA` that appears in the admin sidebar

**Route**: Points to our DataGrid listing page we created earlier

**Sort**: Order position `100` places it near the end of the menu

**Icon**: Left empty for this tutorial - you can add any icon class as per your requirement
:::

### Adding Menu Translations

Update your translation file `packages/Webkul/RMA/src/Resources/lang/en/app.php` to include menu translations:

```php{6-9}
<?php

return [
    'admin' => [
        // ...existing translations...
        
        'menu' => [
            'rma' => 'RMA',
        ],
    ],
];
```

Now update your menu configuration to use translations:

```php{6}
<?php

return [
    [
        'key'   => 'rma',
        'name'  => 'rma::app.admin.menu.rma',
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 100,
        'icon'  => '',
    ],
];
```

### Registering the Menu Configuration

Update your package's service provider to register the admin menu configuration:

**Update:** `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`

```php{14-17}
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

### Testing Your Admin Menu

Now you can test your admin menu:

```bash
# Clear cache
php artisan optimize:clear

# Visit the admin panel
# Login to: http://your-app.com/admin
```

**Expected Results:**
- **Menu Item Visible**: "RMA" appears in the admin sidebar
- **Navigation Works**: Clicking the menu takes you to the return requests DataGrid
- **Translation Active**: Menu uses translation keys for internationalization

::: info Simple Menu Testing Checklist
**Core Functionality:**
- ✅ RMA menu item appears in admin sidebar
- ✅ Clicking menu navigates to return requests page  
- ✅ No console errors or broken links
- ✅ Menu integrates seamlessly with existing Bagisto admin menus

**What's Working:**
- ✅ Simple, single-level menu item
- ✅ Direct link to your DataGrid page
- ✅ Translation support enabled
:::

## Understanding Menu Configuration Options

Now that you have a working menu, let's understand the configuration options available:

### Basic Menu Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| **`key`** | String | Unique identifier for the menu item |
| **`name`** | String | Display name (use translation keys) |
| **`route`** | String | Named Laravel route to link to |
| **`sort`** | Integer | Sort order (lower numbers appear first) |
| **`icon`** | String | CSS class for menu icon |
| **`info`** | String | Additional information or badge text |

### Creating Hierarchical Menu Structure

In Bagisto, hierarchical menus are created by using dot notation in the `key` property, not through nested arrays. Each menu level is defined as a separate array item. Here's how to create a multi-level menu structure:

```php
<?php

return [
    // Main RMA menu item
    [
        'key'   => 'rma',
        'name'  => 'RMA',  // Use 'rma::app.admin.menu.rma' for translations
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 100,
        'icon'  => 'icon-rma',
    ],
    
    // Sub-menu: Return Requests
    [
        'key'   => 'rma.return-requests',
        'name'  => 'Return Requests',  // Use 'rma::app.admin.menu.return-requests' for translations
        'route' => 'admin.rma.return-requests.index',
        'sort'  => 1,
        'icon'  => '',
    ],
    
    // Sub-menu: RMA Settings
    [
        'key'   => 'rma.settings',
        'name'  => 'Settings',  // Use 'rma::app.admin.menu.settings' for translations
        'route' => 'admin.rma.return-requests.index',  // Same route for demo
        'sort'  => 2,
        'icon'  => '',
    ],
    
    // Sub-menu: Reports (if needed)
    [
        'key'   => 'rma.reports',
        'name'  => 'Reports',  // Use 'rma::app.admin.menu.reports' for translations
        'route' => 'admin.rma.return-requests.index',  // Same route for demo
        'sort'  => 3,
        'icon'  => '',
    ],
];
```

::: info Route Configuration Note
For demonstration purposes, all menu items above use the same route (`admin.rma.return-requests.index`). In a real implementation, you would create separate routes for each menu item:

- `admin.rma.settings.index` for the settings page
- `admin.rma.reports.index` for the reports page

Make sure to create appropriate routes, controllers, and views for each menu item as per your package requirements.
:::

::: info How Hierarchical Keys Work
**Parent Menu**: `'key' => 'rma'` creates the main menu item

**Child Menu**: `'key' => 'rma.return-requests'` creates a sub-item under the RMA menu

**Grandchild Menu**: `'key' => 'rma.settings.general'` would create a third-level item

The hierarchy is automatically built based on the dot notation in the key names.
:::

::: tip Menu Best Practices
**Keep It Simple**: Start with a single menu item and expand as your package grows

**Use Translations**: Always use translation keys for menu names to support internationalization

**Logical Ordering**: Use the sort property to position your menu logically among existing items

**Consistent Icons**: Choose icons that match the visual style of existing Bagisto admin menus

**Clear Naming**: Use descriptive names that clearly indicate the menu's purpose
:::

## Your Next Step

Excellent! You've now successfully created an admin menu for your RMA package. Your package now has a complete navigation structure.

At this point in your package development journey, you have mastered the core backend components. However, to ensure proper security and access control for your admin menu, you'll need to implement permission-based access.

**Continue to:** **[Access Control List (ACL)](./access-control-list.md)** - Set up access control lists to manage who can view and interact with your admin menu

With menu navigation and proper access control in place, you'll have a secure, professional admin interface that integrates seamlessly with Bagisto's permission system.

# Creating Admin Theme

Learn how to create custom admin themes for your Bagisto administration panel. This guide covers the basic approach using Bagisto's resources directory to customize the backend interface.

::: info What You'll Learn
- Understanding Bagisto's admin theme configuration system
- Creating admin themes using the resources directory approach
- Customizing the admin panel interface and dashboard
- Best practices for admin theme development
:::

## Understanding Admin Theme Configuration

Bagisto's admin theme system is managed through the same `config/themes.php` file as store themes. The admin section defines themes specifically for the backend administration interface.

### Key Configuration Properties

| Property | Description |
|----------|-------------|
| `admin-default` | Specifies which theme is currently active for the admin panel |
| `name` | Display name shown in the admin theme selector |
| `views_path` | Directory path containing Blade template files |
| `assets_path` | Directory path for CSS, JavaScript, and image files |
| `parent` | Optional parent theme for inheritance (advanced usage) |
| `vite` | Asset bundling configuration for development and production |

### Default Admin Theme Configuration

Let's examine the default admin theme configuration structure:

**Step 1: Locate the configuration file**

Navigate to your Bagisto project root and find the themes configuration:

```text
bagisto-project/
├── app/
├── bootstrap/
├── config/
│   ├── app.php
│   ├── themes.php  ← Theme configuration file
│   └── ...
├── database/
└── ...
```

**Step 2: Understanding the admin configuration structure**

Open `config/themes.php` and look for the admin section:

```php
<?php

return [
    'admin-default' => 'default',

    'admin' => [
        'default' => [
            'name'        => 'Default',
            'assets_path' => 'public/themes/admin/default',
            'views_path'  => 'resources/admin-themes/default/views',

            'vite'        => [
                'hot_file'                 => 'admin-default-vite.hot',
                'build_directory'          => 'themes/admin/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

**Configuration breakdown:**
- `admin-default`: Points to the active admin theme (`'default'` in this case)
- `admin`: Contains all available admin theme definitions
- Each theme has its own configuration block with paths and settings

## Creating Your Custom Admin Theme

Now let's create a custom admin theme step by step:

### Step 1: Add Admin Theme Configuration

Add your new admin theme to the `config/themes.php` file:

```php{18-29}
<?php

return [
    'admin-default' => 'default',

    'admin' => [
        'default' => [
            'name'        => 'Default',
            'assets_path' => 'public/themes/admin/default',
            'views_path'  => 'resources/admin-themes/default/views',

            'vite'        => [
                'hot_file'                 => 'admin-default-vite.hot',
                'build_directory'          => 'themes/admin/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],

        'custom-admin-theme' => [
            'name'        => 'Custom Admin Theme',
            'assets_path' => 'public/themes/admin/custom-admin-theme',
            'views_path'  => 'resources/admin-themes/custom-admin-theme/views',

            'vite'        => [
                'hot_file'                 => 'admin-default-vite.hot',
                'build_directory'          => 'themes/admin/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

::: tip Vite Configuration Note
The Vite configuration currently uses the default theme settings. We'll cover custom Vite setup in the [Asset Bundling](./bundling-assets.md) guide.
:::

### Step 2: Create Admin Theme Directory Structure

Create the necessary directories for your admin theme in the `resources` folder:

```bash
# Create admin theme directory structure
mkdir -p resources/admin-themes/custom-admin-theme/views/dashboard
```

Your directory structure should look like this:

```text
resources/
└── admin-themes/
    └── custom-admin-theme/
        └── views/
            └── dashboard/
                └── index.blade.php
```

::: warning Directory Structure
The directory structure should follow the same conventions as the `admin` package to ensure compatibility and maintainability.
:::

### Step 3: Create Your First Admin Template

Create a dashboard template at `resources/admin-themes/custom-admin-theme/views/dashboard/index.blade.php`:

```blade
<x-admin::layouts>
    <x-slot:title>
        Custom Admin Dashboard
    </x-slot>

    <div class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-sm p-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-6">
                🎛️ Custom Admin Dashboard
            </h1>
            
            <p class="text-lg text-gray-600 mb-8">
                Welcome to your customized Bagisto admin panel!
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 class="text-xl font-semibold text-blue-800 mb-2">
                        📊 Analytics
                    </h3>

                    <p class="text-blue-600">
                        Enhanced dashboard analytics and reporting
                    </p>
                </div>
                
                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 class="text-xl font-semibold text-green-800 mb-2">
                        🛍️ Orders
                    </h3>

                    <p class="text-green-600">
                        Streamlined order management interface
                    </p>
                </div>
                
                <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 class="text-xl font-semibold text-purple-800 mb-2">
                        👥 Customers
                    </h3>
                    
                    <p class="text-purple-600">
                        Enhanced customer management tools
                    </p>
                </div>
            </div>
        </div>
    </div>
</x-admin::layouts>
```

::: tip Layout Usage
We're using the default `<x-admin::layouts>` component since we haven't created a custom admin layout yet. Custom layouts will be covered in the [Layouts and Views](./layouts.md) guide.
:::

::: warning Styling Limitations & Development Approach
When using the default admin layout, you're inheriting the existing CSS compilation optimized for the default admin theme. Some custom styling classes might not be available since they weren't included in the original build process.

**This basic approach is intentional** - we're focusing on core admin theme concepts first before diving into complex development tooling. In real-world admin theme development, you would typically set up your own complete development environment including:

- **Custom CSS framework configuration** with your own admin design tokens
- **Vue.js or React** for interactive admin components  
- **Custom build processes** with Vite or Webpack for admin assets
- **SCSS/PostCSS** preprocessing for admin styling
- **Asset optimization** and bundling for admin interfaces

We'll gradually progress through these advanced concepts in the upcoming guides. For now, stick to the existing CSS classes or use custom CSS to avoid compilation issues. The [Asset Bundling](./bundling-assets.md) guide will show you how to set up a complete modern admin development workflow.
:::

### Step 4: Clear Application Cache

Clear Bagisto's cache to recognize your new admin theme:

```bash
php artisan optimize:clear
```

### Step 5: Activate Your Admin Theme

Update the `admin-default` value in your `config/themes.php` file:

```php{4}
<?php

return [
    'admin-default' => 'custom-admin-theme', // Changed from 'default'
    
    'admin' => [
        // ...existing themes
    ],
];
```

### Step 6: View Your Custom Admin Theme

Log in to your Bagisto admin panel and navigate to the dashboard. You should see your new custom admin theme design instead of the default admin interface.

## Testing Your Admin Theme

To ensure your admin theme works correctly:

1. **Check different admin pages**: Navigate through various admin sections to ensure consistent styling
2. **Test responsiveness**: View your admin theme on different screen sizes
3. **Verify functionality**: Ensure all admin features work correctly with your theme
4. **Browser testing**: Test across different browsers for compatibility

## What's Next?

Congratulations! You've successfully created your first custom admin theme. Here are your next steps:

**📄 [Creating Store Theme →](./create-store-theme.md)**  
Learn to create custom store themes for the customer-facing frontend.

**📦 [Custom Theme Package →](./custom-theme-package.md)**  
Advance to creating professional theme packages for distribution and better organization.

**⚡ [Asset Bundling →](./bundling-assets.md)**  
Master Vite configuration for optimized CSS, JavaScript, and asset management.

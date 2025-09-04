# Creating Custom Theme Package

Learn how to convert your basic custom theme into a professional package structure. This guide shows you how to move the store theme we created earlier into a standalone package for better organization and distribution.

::: info What You'll Learn
- Converting basic themes to package structure
- Understanding Bagisto's package development approach
- Creating service providers for theme packages
- Publishing theme views and assets from packages
- Best practices for theme package organization
:::

## Prerequisites

Before starting this guide, make sure you have completed the [Creating Store Theme](./create-store-theme.md) tutorial. We'll be converting that basic theme into a package structure.

::: tip Package Benefits
- **Better Organization**: Keep your theme separate from core files
- **Easy Distribution**: Share your theme as a reusable package
- **Version Control**: Manage theme updates independently
- **Professional Structure**: Follow Laravel package conventions
:::

## Understanding Package Structure

Bagisto follows Laravel's package development conventions. A theme package contains all theme-related files in a self-contained structure that can be easily distributed and maintained.

### Package vs Basic Theme Comparison

| Basic Theme (Resources) | Package Theme |
|------------------------|---------------|
| `resources/themes/custom-theme/` | `packages/Webkul/CustomTheme/` |
| Direct file editing | Service provider publishing |
| Limited reusability | Easy distribution |
| Mixed with core files | Self-contained structure |

## Creating Your Theme Package

Let's convert our basic custom theme into a professional package structure.

### Step 1: Create Package Directory Structure

Create the package directory structure in your Bagisto project:

```bash
# Create package directory structure
mkdir -p packages/Webkul/CustomTheme/src/Providers
mkdir -p packages/Webkul/CustomTheme/src/Resources/views
```

Your package structure should look like this:

```text
packages/
└── Webkul/
    └── CustomTheme/
        └── src/
            ├── Providers/
            │   └── CustomThemeServiceProvider.php
            └── Resources/
                └── views/
                    └── home/
                        └── index.blade.php
```

::: warning Directory Structure
The package structure should follow Laravel package conventions with proper PSR-4 namespace organization for maintainability.
:::

### Step 2: Create the Service Provider

Create the service provider at `packages/Webkul/CustomTheme/src/Providers/CustomThemeServiceProvider.php`:

```php
<?php

namespace Webkul\CustomTheme\Providers;

use Illuminate\Support\ServiceProvider;

class CustomThemeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../Resources/views' => resource_path('themes/custom-theme/views'),
        ], 'custom-theme-views');
    }
}
```

### Step 3: Move Your Theme Files

Move your existing theme files from the basic theme location to your package:

::: warning No Existing Theme Files?
If you jumped directly to this section and don't have existing theme files from the [Creating Store Theme](./create-store-theme.md) tutorial, you'll need to either:

1. **Go back and complete the basic theme tutorial first** (recommended for understanding)
2. **Create the files directly in your package** using the examples below

This guide assumes you have basic theme files to move from the previous tutorial.
:::

**Copy your theme template:**

Take the home page template you created in the basic theme tutorial and move it to:
`packages/Webkul/CustomTheme/src/Resources/views/home/index.blade.php`

::: tip Moving Existing Files
If you have an existing basic theme, you can simply copy the entire `views` directory from `resources/themes/custom-theme/views/` to `packages/Webkul/CustomTheme/src/Resources/views/` to move all your existing customizations.
:::

**Example template content:**

If you want to add some changes or don't have existing theme files, you can replace the content with the example below:

```blade
<x-shop::layouts>
    <x-slot:title>
        Custom Theme Home
    </x-slot>

    <div class="container mx-auto mt-8 px-4 py-16">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-6">
                🎨 Custom Theme Package
            </h1>
            
            <p class="text-lg text-gray-600 mb-8">
                This theme is now powered by a professional package structure!
            </p>
            
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200 max-w-md mx-auto">
                <h3 class="text-xl font-semibold text-blue-800 mb-2">
                    📦 Package Benefits
                </h3>

                <p class="text-blue-600">
                    Better organization, easy distribution, and professional development workflow.
                </p>
            </div>
        </div>
    </div>
</x-shop::layouts>
```

### Step 4: Configure Package Autoloading

Update your root `composer.json` file to include the package namespace and regenerate the autoloader:

```json{5}
"autoload": {
    ...
    "psr-4": {
        // Other PSR-4 namespaces
        "Webkul\\CustomTheme\\": "packages/Webkul/CustomTheme/src"
    }
}
```

After updating the `composer.json` file, run the following command to register your package:

```bash
composer dump-autoload
```

::: warning Important Step
This command regenerates the autoloader files to include your new package namespace. Without this step, Laravel won't be able to find your package classes.
:::

### Step 5: Register the Service Provider

Add your service provider to `bootstrap/providers.php`:

```php{8}
<?php

return [
    App\Providers\AppServiceProvider::class,
    
    // Other service providers...
    
    Webkul\CustomTheme\Providers\CustomThemeServiceProvider::class,
];
```

### Step 6: Update Theme Configuration

Ensure your `config/themes.php` file has the correct configuration for your package theme:

::: info Optional Step
If you completed the [Creating Store Theme](./create-store-theme.md) tutorial, you should already have this configuration. However, if you jumped directly to this section or want to verify your setup, make sure your theme configuration matches the example below.
:::

```php{18-29}
<?php

return [
    'shop-default' => 'custom-theme',

    'shop' => [
        'default' => [
            'name'        => 'Default',
            'assets_path' => 'public/themes/shop/default',
            'views_path'  => 'resources/themes/default/views',

            'vite'        => [
                'hot_file'                 => 'shop-default-vite.hot',
                'build_directory'          => 'themes/shop/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],

        'custom-theme' => [
            'name'        => 'Custom Theme Package',
            'assets_path' => 'public/themes/shop/custom-theme',
            'views_path'  => 'resources/themes/custom-theme/views',

            'vite'        => [
                'hot_file'                 => 'shop-default-vite.hot',
                'build_directory'          => 'themes/shop/default/build',
                'package_assets_directory' => 'src/Resources/assets',
            ],
        ],
    ],
];
```

### Step 7: Publish Theme Views

Publish your package views to the application:

```bash
php artisan vendor:publish --provider="Webkul\CustomTheme\Providers\CustomThemeServiceProvider"
```

If you need to overwrite existing files, use the `--force` flag:

```bash
php artisan vendor:publish --provider="Webkul\CustomTheme\Providers\CustomThemeServiceProvider" --force
```

::: tip When to Use --force
Use the `--force` flag when you're updating existing theme files or when the destination directory already contains published files from a previous run.
:::

### Step 8: Clear Cache and Test

Clear the application cache and test your package theme:

```bash
php artisan optimize:clear
```

Visit your store's homepage to see your package theme in action!

::: tip Verification Steps
1. **Check Admin Panel**: Go to Settings → Channels and verify "Custom Theme Package" appears in the theme dropdown
2. **Verify File Structure**: Confirm your views are published to `resources/themes/custom-theme/views/`
3. **Test Homepage**: Visit your store frontend to see the updated theme
:::

## Package Development Workflow

Now that your theme package is set up, here's how to work with it effectively during development:

### Adding New Views

To add new views to your package:

1. **Create the view file** in your package:
   ```text
   packages/Webkul/CustomTheme/src/Resources/views/catalog/products/index.blade.php
   ```

::: warning Directory Structure
The directory structure should follow the same paths as the corresponding views in the default Bagisto theme. For example, if you want to customize a product page, maintain the same folder hierarchy: `catalog/products/index.blade.php`.
:::

2. **Republish the package views**:
   ```bash
   php artisan vendor:publish --provider="Webkul\CustomTheme\Providers\CustomThemeServiceProvider" --force
   ```

### Updating Existing Views

When you modify views in your package:

1. **Edit the package file** (not the published file)
2. **Republish to apply changes**:
   ```bash
   php artisan vendor:publish --provider="Webkul\CustomTheme\Providers\CustomThemeServiceProvider" --force
   ```

::: warning Development Workflow
Always edit files in your package directory (`packages/Webkul/CustomTheme/src/Resources/views/`), not in the published location (`resources/themes/custom-theme/views/`). The published files will be overwritten when you republish.
:::

## Alternative Development Workflows

Publishing your package views repeatedly during development can be tedious. Here are two efficient alternatives to streamline your development process:

### Option 1: Develop in Resources First

This approach lets you develop your theme directly in the published location, then move everything to your package at once.

**Development Process:**
1. Develop all your changes directly in `resources/themes/custom-theme/views/`
2. Test and iterate on your customizations without republishing
3. Once satisfied, copy all files to your package: `packages/Webkul/CustomTheme/src/Resources/views/`
4. Republish once to ensure everything works from the package

**Benefits:**
- No constant republishing during development
- Faster iteration and testing
- Simple file management

### Option 2: Symlink Approach (Advanced)

Create symbolic links to enable real-time development without any republishing.

**Setup Commands:**
```bash
# Remove the published views directory
rm -rf resources/themes/custom-theme/views

# Create symlink from package to resources (use absolute path)
ln -s $(pwd)/packages/Webkul/CustomTheme/src/Resources/views resources/themes/custom-theme/views
```

**Benefits:**
- Real-time changes without republishing
- Direct development in package files
- Automatic synchronization

::: warning Symlink Requirements
- Requires file system permissions to create symbolic links
- Works best on Unix-like systems (Linux, macOS)
- May require additional setup on Windows systems
- Ensure you're running commands from your Bagisto project root
:::

**Choose the workflow that best fits your development style and system requirements.**

## Testing Your Package Theme

To ensure your package theme works correctly:

1. **Check view publishing**: Verify files are published to `resources/themes/custom-theme/`
2. **Test theme activation**: Ensure the theme appears in admin theme selector
3. **Verify functionality**: Navigate through different store pages
4. **Test republishing**: Make changes and republish to confirm workflow

## What's Next?

Congratulations! You've successfully converted your basic theme into a professional package structure. Here are your next steps:

**⚡ [Asset Bundling →](./bundling-assets.md)**  
Learn to set up Vite for modern asset compilation and optimization in your package.

**📄 [Create Admin Theme Package →](./create-admin-theme.md)**  
Apply the same package approach to admin themes for complete customization.

**🎨 [Layouts and Views →](./layouts.md)**  
Master custom layouts and advanced view organization in packages.

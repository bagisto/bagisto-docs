# Creating Store Theme

Learn how to create custom store themes for your Bagisto e-commerce platform. This guide covers the basic approach using Bagisto's resources directory, perfect for getting started with theme development.

::: info What You'll Learn
- Understanding Bagisto's theme configuration system
- Creating themes using the resources directory approach
- Configuring theme settings and activating your custom theme
- Best practices for basic theme development
:::

## Understanding Theme Configuration

Bagisto's theme system is managed through the `config/themes.php` file. This central configuration file defines all available themes and their settings.

### Key Configuration Properties

| Property | Description |
|----------|-------------|
| `shop-default` | Specifies which theme is currently active for the storefront |
| `name` | Display name shown in the admin theme selector |
| `views_path` | Directory path containing Blade template files |
| `assets_path` | Directory path for CSS, JavaScript, and image files |
| `parent` | Optional parent theme for inheritance (advanced usage) |
| `vite` | Asset bundling configuration for development and production |

### Default Theme Configuration

Let's examine the default theme configuration structure:

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

**Step 2: Understanding the configuration structure**

Open `config/themes.php` to see the default configuration:

```php
<?php

return [
    'shop-default' => 'default',

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
    ],
];
```

**Configuration breakdown:**
- `shop-default`: Points to the active theme (`'default'` in this case)
- `shop`: Contains all available store theme definitions
- Each theme has its own configuration block with paths and settings

## Creating Your Custom Theme

Now let's create a custom theme step by step:

### Step 1: Add Theme Configuration

Add your new theme to the `config/themes.php` file:

```php{18-29}
<?php

return [
    'shop-default' => 'default',

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
            'name'        => 'Custom Theme',
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

::: tip Vite Configuration Note
The Vite configuration currently uses the default theme settings. We'll cover custom Vite setup in the [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) guide.
:::

### Step 2: Create Theme Directory Structure

Create the necessary directories for your theme in the `resources` folder:

```bash
# Create theme directory structure
mkdir -p resources/themes/custom-theme/views/home
```

Your directory structure should look like this:

```text
resources/
└── themes/
    └── custom-theme/
        └── views/
            └── home/
                └── index.blade.php
```

::: warning Directory Structure
The directory structure should follow the same conventions as the `shop` package to ensure compatibility and maintainability.
:::

### Step 3: Create Your First Template

Create a home page template at `resources/themes/custom-theme/views/home/index.blade.php`:

```blade
<x-shop::layouts>
    <x-slot:title>
        Custom Theme Home
    </x-slot>

    <div class="container mx-auto mt-8 px-4 py-16">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Custom Theme
            </h1>
            
            <p class="text-lg text-gray-600 mb-8">
                This is your custom Bagisto store theme in action!
            </p>
        </div>
    </div>
</x-shop::layouts>
```

::: tip Layout Usage
We're using the default `<x-shop::layouts>` component since we haven't created a custom layout yet. Custom layouts will be covered in the [Layouts and Views](./layouts.md) guide.
:::

::: warning Styling Limitations & Development Approach
When using the default shop layout, you're inheriting the existing Tailwind CSS compilation that's optimized for the default theme. Some custom Tailwind classes might not be available since they weren't included in the original build process.

**This basic approach is intentional** - we're focusing on core theme concepts first before diving into complex tooling. In real-world theme development, you would typically set up your own complete development environment including:

- **Custom Tailwind CSS configuration** with your own design tokens
- **Vue.js or React** for interactive components  
- **Custom build processes** with Vite or Webpack
- **SCSS/PostCSS** preprocessing
- **Asset optimization** and bundling

We'll gradually progress through these advanced concepts in the upcoming guides. For now, stick to the existing Tailwind classes or use custom CSS to avoid compilation issues. The [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) guide will show you how to set up a complete modern development workflow.
:::

### Step 4: Clear Application Cache

Clear Bagisto's cache to recognize your new theme:

```bash
php artisan optimize:clear
```

### Step 5: Activate Your Theme

1. Log in to your Bagisto admin panel
2. Navigate to **Settings → Channels**
3. Edit your desired channel
4. Change the **Theme** dropdown to "Custom Theme"
5. Click **Save**

### Step 6: View Your Custom Theme

Visit your store's homepage to see your custom theme in action! You should see your new custom design instead of the default Bagisto theme.

## Testing Your Theme

To ensure your theme works correctly:

1. **Check different pages**: Navigate through various store pages to ensure consistent styling
2. **Test responsiveness**: View your theme on different device sizes
3. **Verify functionality**: Ensure all store features work correctly with your theme
4. **Browser testing**: Test across different browsers for compatibility

## What's Next?

Congratulations! You've successfully created your first custom store theme. Here are your next steps:

**💼 [Creating Admin Theme →](./creating-admin-theme.md)**  
Learn to customize the admin panel interface with custom admin themes.

**📦 [Custom Theme Package →](./creating-custom-theme-package.md)**  
Advance to creating professional theme packages for distribution and better organization.

**⚡ [Vite-Powered Theme Assets →](./vite-powered-theme-assets.md)**  
Master modern asset compilation and optimization for your themes.

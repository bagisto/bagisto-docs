# Understanding Layouts

Learn how Bagisto's layout system works and how to effectively use layouts in your custom themes. This guide explains both admin and shop layouts, building upon the theme development concepts from our previous tutorials.

::: info What You'll Learn
- How Bagisto's layout components work
- Using admin layouts for backend interfaces
- Working with shop layouts for store**📚 [Back to Getting Started →](./getting-started.md)**  
Review the complete theme development journey and explore other paths.ont themes
- Layout customization and best practices
- Connecting layouts with your custom theme package
:::

## Introduction

Layouts in Bagisto are fundamental building blocks that provide consistent structure across your application. They act as templates that wrap your content, ensuring unified design and user experience throughout your theme.

**Key Benefits:**
- **Consistency**: Unified design across all pages
- **Maintainability**: Changes in one place affect the entire application
- **Developer Experience**: Pre-built components with sensible defaults
- **Flexibility**: Customizable props and slots for different use cases

::: tip Connecting to Theme Development
If you're building a custom theme package (covered in our [Custom Theme Package](./creating-custom-theme-package.md) guide), understanding layouts is crucial for creating professional themes that integrate seamlessly with Bagisto's architecture.
:::

::: info Laravel Blade Foundation
Bagisto layouts are built on Laravel's Blade templating system. For comprehensive details about Blade components and layouts, visit the [Laravel documentation](https://laravel.com/docs/11.x/blade).
:::

## Admin Layout

The `<x-admin::layouts>` component provides the foundation for all admin panel pages, including navigation, header, sidebar, and content areas.

### Basic Admin Layout Usage

When building admin interfaces for your packages, use the admin layout to maintain consistency with Bagisto's admin panel design:

```blade
<x-admin::layouts>
    <!-- Page title (appears in browser tab and page header) -->
    <x-slot:title>
        @lang('blog::app.admin.index.page-title')
    </x-slot:title>

    {{-- Page Header --}}
    <div class="flex gap-4 justify-between max-sm:flex-wrap">
        <p class="py-[11px] text-xl text-gray-800 dark:text-white font-bold">
            @lang('blog::app.admin.index.page-title')
        </p>

        <div class="flex gap-x-2.5 items-center">
            {{-- Action buttons (Add, Export, etc.) --}}
            <button class="primary-button">
                @lang('blog::app.admin.index.create-btn')
            </button>
        </div>
    </div>

    {{-- Main Content --}}
    <div class="mt-8">
        <!-- Your admin content goes here -->
    </div>
</x-admin::layouts>
```

### Admin Layout Features

The admin layout automatically provides:
- **Navigation**: Admin sidebar with menu items
- **Header**: Top navigation with user menu and notifications
- **Responsive Design**: Mobile-friendly layout that adapts to screen size
- **Dark Mode**: Built-in dark mode support
- **Breadcrumbs**: Automatic breadcrumb generation based on routes

::: tip Admin Layout Best Practices
- Always use the title slot for SEO and user experience
- Follow Bagisto's admin design patterns for consistency
- Use the provided CSS classes for styling (e.g., `primary-button`)
- Keep the layout structure clean and semantic
:::

### Example: Custom Package Admin Page

Here's how you might use the admin layout in your custom theme package:

```blade
{{-- File: packages/Webkul/CustomTheme/src/Resources/views/admin/index.blade.php --}}
<x-admin::layouts>
    <x-slot:title>
        Custom Theme Settings
    </x-slot:title>

    <div class="flex gap-4 justify-between max-sm:flex-wrap">
        <h1 class="py-[11px] text-xl text-gray-800 dark:text-white font-bold">
            Custom Theme Configuration
        </h1>

        <div class="flex gap-x-2.5 items-center">
            <button class="secondary-button">
                Reset to Defaults
            </button>
            
            <button class="primary-button">
                Save Settings
            </button>
        </div>
    </div>

    {{-- Settings Form --}}
    <div class="mt-8 bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <!-- Your theme settings form -->
    </div>
</x-admin::layouts>
```

## Shop Layout

The `<x-shop::layouts>` component is the foundation for all storefront pages, providing header, navigation, footer, and content structure that customers see.

### Basic Shop Layout Usage

When building storefront pages for your custom theme, the shop layout provides everything needed for a complete customer experience:

```blade
<x-shop::layouts>
    <!-- Page title (SEO and browser tab) -->
    <x-slot:title>
        @lang('blog::app.shop.blogs.page-title')
    </x-slot:title>

    {{-- Page Content --}}
    <div class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-[26px] font-medium">
                @lang('blog::app.shop.blogs.page-title')
            </h1>
        </div>

        {{-- Your page content --}}
        <div class="grid gap-6">
            <!-- Blog posts, products, or other content -->
        </div>
    </div>
</x-shop::layouts>
```

### Shop Layout Configuration

The shop layout accepts several props to customize which sections are included:

```blade
<x-shop::layouts
    :has-header="false"
    :has-feature="false"  
    :has-footer="false"
>
    <!-- Content when header/footer are disabled -->
</x-shop::layouts>
```

### Layout Props Reference

| Prop Name | Description | Default Value | Use Case |
|-----------|-------------|---------------|-----------|
| **`has-header`** | Include site header with navigation and search | `true` | Disable for popup pages or custom headers |
| **`has-feature`** | Show featured content section | `true` | Disable for minimal pages |
| **`has-footer`** | Include site footer with links and info | `true` | Disable for checkout or modal pages |

::: tip Shop Layout in Custom Themes
If you're building a custom theme package (from our [Custom Theme Package](./creating-custom-theme-package.md) tutorial), the shop layout automatically loads your theme's compiled assets when configured properly. This works seamlessly with the asset compilation setup from our [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) guide.
:::

### Example: Custom Theme Home Page

Here's how you might use the shop layout in your custom theme package:

```blade
{{-- File: packages/Webkul/CustomTheme/src/Resources/views/home/index.blade.php --}}
<x-shop::layouts>
    <x-slot:title>
        Custom Theme Home
    </x-slot:title>

    {{-- Hero Section --}}
    <div class="hero-section bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">
                Welcome to Our Store
            </h1>
            
            <p class="text-xl mb-8 opacity-90">
                Professional theme with modern design
            </p>
            
            <a href="{{ route('shop.search.index') }}" 
               class="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                Start Shopping
            </a>
        </div>
    </div>

    {{-- Featured Products --}}
    <div class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12">
            Featured Products
        </h2>
        
        <!-- Product grid -->
    </div>
</x-shop::layouts>
```

### Shop Layout Features

The shop layout automatically provides:
- **Header**: Logo, navigation menu, search, and cart
- **Mobile Navigation**: Responsive mobile menu
- **SEO**: Proper meta tags and structured data
- **Asset Loading**: Automatic inclusion of theme CSS/JS
- **Responsive Design**: Mobile-first responsive layout

::: warning Asset Loading Behavior
The shop layout automatically loads your active theme's compiled assets. This means:
- ✅ **Custom themes**: Your CSS/JS will be loaded automatically
- ✅ **Asset compilation**: Works with Vite dev server and production builds
- ⚠️ **Custom layouts**: If you create your own layout, you'll need to manually include `@bagistoVite` directive

For details on asset loading, see our [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) guide.
:::

### Creating Minimal Pages

For pages that need minimal structure (like popups or standalone pages), disable unnecessary sections:

```blade
<x-shop::layouts
    :has-header="false"
    :has-footer="false"
>
    <x-slot:title>
        Minimal Page
    </x-slot:title>

    {{-- Standalone content without header/footer --}}
    <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full">
            <!-- Popup or standalone content -->
        </div>
    </div>
</x-shop::layouts>
```

## Custom Layouts and Best Practices

### When to Create Custom Layouts

While Bagisto's built-in layouts cover most use cases, you might need custom layouts for:

- **Unique Design Requirements**: When your theme needs a completely different structure
- **Specialized Pages**: Landing pages, maintenance pages, or custom applications
- **Third-party Integrations**: External widgets or embedded applications
- **Performance Optimization**: Minimal layouts for specific high-performance pages

### Creating Custom Layouts

If you need complete control over the layout structure, you can create your own master layout:

```blade
{{-- File: packages/Webkul/CustomTheme/src/Resources/views/layouts/master.blade.php --}}
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? config('app.name') }}</title>
    
    {{-- Load theme assets manually --}}
    @bagistoVite([
        'src/Resources/assets/css/app.css',
        'src/Resources/assets/js/app.js'
    ])
    
    {{-- Additional meta tags --}}
    @stack('meta')
    
    {{-- Additional styles --}}
    @stack('styles')
</head>
<body class="{{ $bodyClass ?? '' }}">
    {{-- Custom header --}}
    @if($hasHeader ?? true)
        @include('custom-theme::layouts.header')
    @endif
    
    {{-- Main content --}}
    <main class="main-content">
        {{ $slot }}
    </main>
    
    {{-- Custom footer --}}
    @if($hasFooter ?? true)
        @include('custom-theme::layouts.footer')
    @endif
    
    {{-- Additional scripts --}}
    @stack('scripts')
</body>
</html>
```

Then use your custom layout:

```blade
<x-custom-theme::layouts.master 
    :title="'Custom Page'"
    :has-header="true"
    :has-footer="false"
    body-class="custom-page"
>
    <!-- Your page content -->
</x-custom-theme::layouts.master>
```

### Layout Development Tips

**1. Asset Management**
- Use `@bagistoVite` for loading compiled assets in custom layouts
- Leverage `@stack` directives for flexible script/style injection
- Consider performance implications of loading assets

**2. Responsive Design**
- Test layouts across different screen sizes
- Use Bagisto's responsive utilities and breakpoints
- Ensure mobile navigation works properly

**3. SEO Considerations**
- Always include proper `<title>` tags
- Add meta descriptions and Open Graph tags
- Implement structured data where appropriate

**4. Internationalization**
- Use Laravel's `@lang` directive for translatable content
- Support RTL languages if needed
- Consider cultural design differences

::: tip Layout Performance
- **Shop Layout**: Automatically optimized for SEO and performance
- **Admin Layout**: Includes admin-specific optimizations and features
- **Custom Layouts**: Require manual optimization but offer complete control
:::

## Integration with Theme Development

### Connecting with Previous Tutorials

This layout system integrates seamlessly with our previous guides:

**🎨 [Custom Theme Package](./creating-custom-theme-package.md)**
- Layouts work automatically with your theme package structure
- Service provider handles layout registration and publishing

**⚡ [Vite-Powered Theme Assets](./vite-powered-theme-assets.md)**  
- Shop layout automatically loads your compiled theme assets
- Custom layouts require manual asset inclusion with `@bagistoVite`

### Next Steps in Theme Development

Now that you understand layouts, you can:

1. **Create Complex Views**: Build sophisticated pages using layout slots and props
2. **Customize Components**: Override specific layout components for your theme
3. **Optimize Performance**: Choose the right layout for each page's requirements
4. **Build Reusable Patterns**: Create your own layout components for consistency

::: warning Translation Requirements
Notice that the examples use translation strings (e.g., `@lang('blog::app.admin.index.page-title')`). You'll need to:

1. **Create language files** in your package: `src/Resources/lang/en/app.php`
2. **Register translations** in your service provider
3. **Publish language files** for customization

See our package development guides for details on handling translations.
:::

## What's Next?

Understanding layouts is crucial for effective theme development. Here are your next steps:

**🧩 [Blade Components →](./blade-components.md)**  
Learn to use Bagisto's pre-built components that work seamlessly with your layouts.

**🛠️ [Package Development →](../package-development/)**  
Explore advanced package development techniques for creating custom functionality.

**� [Back to Getting Started →](./getting-started.md)**  
Review the complete theme development journey and explore other paths.

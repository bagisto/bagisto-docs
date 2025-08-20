# Localization

Localization in Laravel enables your application to support multiple languages and regional settings, making your package accessible to a global audience. In Bagisto, localization is deeply integrated into the system, supporting both frontend customer interfaces and backend administrative panels with consistent translation patterns.

For our RMA package, we'll implement comprehensive localization that covers admin panel labels, customer-facing messages, email notifications, and validation messages, demonstrating how to create a truly international e-commerce extension.

::: info Learning Objective
This section demonstrates how to create organized, maintainable translation files for your Bagisto package, register them properly with the service provider, and use them effectively in views, controllers, and other components.
:::

For detailed information on Laravel localization features, visit the [Laravel Documentation on Localization](https://laravel.com/docs/11.x/localization).

## Bagisto Localization Architecture

Bagisto's localization system extends Laravel's built-in functionality with additional features for e-commerce applications:

### Translation Organization
- **Admin Translations**: Interface elements, form labels, buttons, and messages for administrative users
- **Shop Translations**: Customer-facing content, product information, checkout messages, and notifications
- **Email Translations**: Transactional emails, notifications, and communication templates
- **Validation Translations**: Custom validation messages specific to your package functionality

### Namespace Support
- **Package Namespacing**: Each package maintains its own translation namespace for isolation
- **Fallback System**: Graceful fallback to default language when translations are missing
- **Override Capability**: Ability to override core translations without modifying core files

### Multi-Language Features
- **RTL Support**: Right-to-left language support for Arabic, Hebrew, and other RTL languages
- **Currency Localization**: Automatic currency formatting based on locale settings
- **Date/Time Formatting**: Locale-aware date and time display throughout the interface

## Understanding Laravel Localization Basics

Before diving into Bagisto-specific implementation, let's understand the foundational concepts that power Laravel's localization system.

### Publish Laravel Language Files (Optional)

Laravel's default installation doesn't include the `lang` directory in your project root. If you need to customize Laravel's own error messages and validation text, you can publish them:

```bash
php artisan lang:publish
```

This creates a `lang` directory in your project root with Laravel's default English translations, which you can then modify or use as templates for other languages.

::: tip When to Use This
You typically only need to publish Laravel's language files if you want to customize framework-level messages like validation errors, authentication messages, or HTTP status messages.
:::

### Configure Application Locale

Set your default and fallback locales in `config/app.php`. These settings affect how Laravel resolves translations throughout your application:

```php
/*
|--------------------------------------------------------------------------
| Application Locale Configuration
|--------------------------------------------------------------------------
|
| The application locale determines the default locale that will be used
| by the translation service provider. You are free to set this value
| to any of the locales which will be supported by the application.
|
*/

'locale' => env('APP_LOCALE', 'en'),

'fallback_locale' => env('APP_FALLBACK_LOCALE', 'en'),
```

::: details Locale Configuration Explanation
**Application Locale**: The primary language your application will use by default.

**Fallback Locale**: When a translation key is missing in the current locale, Laravel will attempt to find it in the fallback locale before displaying the key itself.

**Environment Override**: Using `env('APP_LOCALE', 'en')` allows you to set different default locales for different environments (staging, production, etc.).
:::

## Creating Package Localization Structure

Now let's create a comprehensive localization structure for our RMA package that covers all the different types of content we'll need to translate.

### Directory Structure

Create a simple language directory structure for our basic translations:

```bash
mkdir -p packages/Webkul/RMA/src/Resources/lang/en
```

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Resources
                └── lang
                    └── en
                        └── app.php
```

::: details Simple Translation Structure
**app.php**: Contains the basic translations we need for our simple admin view

**Starting Simple**: We're beginning with just English and one file to match our basic view implementation

**Expandable**: This structure can easily be expanded with more languages and specialized files as your package grows
:::

### Creating Translation Files

Let's create a simple translation file that matches our basic view implementation.

#### Basic Translation File

Create `packages/Webkul/RMA/src/Resources/lang/en/app.php` with just the translations we need for our basic view:

```php
<?php

return [
    'admin' => [
        'return-requests' => [
            'title' => 'RMA Listing Title',
            'content' => 'RMA Listing Content',
        ],
    ],
];
```

::: tip Simple Start
We're keeping the translations minimal to match our basic view implementation. This demonstrates the core concept without overwhelming complexity. As you add more features to your views, you can expand these translation files accordingly.
:::

## Registering Translations with Service Provider

Register your package translations in the service provider so they're available throughout the application. This step is crucial for Laravel to recognize and load your translation files.

Update `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`:

```php
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;

class RMAServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Load migrations
        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
        
        // Load routes
        $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');
        $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');
        
        // Load views
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'rma');
        
        // Load translations
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'rma');
    }
}
```

::: tip Translation Namespace
The `loadTranslationsFrom()` method registers translations with the `rma` namespace. This means you'll reference translation keys as `rma::admin.title` or `rma::shop.create-return` in your application.
:::

### Publishing Translations (Optional)

If you want to allow users to customize your package's translations, you can make them publishable:

```php
// Add to the boot() method in RMAServiceProvider
$this->publishes([
    __DIR__ . '/../Resources/lang' => resource_path('lang/vendor/rma'),
], 'rma-translations');
```

Users can then publish and customize your translations:

```bash
php artisan vendor:publish --tag=rma-translations
```

::: details Publishing Benefits
**Customization**: Users can modify translations without editing your package files

**Override System**: Published translations take precedence over package translations

**Maintenance**: Users can update your package without losing their translation customizations

**Localization**: Teams can add new languages without modifying the original package
:::

## Using Translations in Your Package

Now that we've set up our translation structure, let's see how to use these translations in different parts of your RMA package.

### In Blade Templates

Update your views to use translations instead of hardcoded text. Let's update the admin index view we created earlier to use our simple translations:

**Update:** `packages/Webkul/RMA/src/Resources/views/admin/return-requests/index.blade.php`

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('rma::app.admin.return-requests.title')
    </x-slot:title>

    @lang('rma::app.admin.return-requests.content')
</x-admin::layouts>
```

::: tip Matching Our Basic View
This translation implementation perfectly matches our simple view from the Views section, demonstrating how to replace hardcoded strings with translation keys without adding unnecessary complexity.
:::

### In Controllers

Use translations in controller methods for basic responses:

```php
<?php

namespace Webkul\RMA\Http\Controllers\Admin;

use Webkul\RMA\Http\Controllers\Controller;
use Webkul\RMA\Repositories\ReturnRequestRepository;

class ReturnRequestController extends Controller
{
    public function __construct(
        protected ReturnRequestRepository $returnRequestRepository
    ) {}

    public function index()
    {
        // Test accessing a translation
        $title = trans('rma::app.admin.return-requests.title');

        // This is just for demonstration
        dd($title);

        return view('rma::admin.return-requests.index');
    }
}
```

::: tip Simple Controller Integration
For now, our controller simply renders the view. As we add more functionality like create, edit, and delete operations, we'll expand the translation usage for success messages and validation feedback.
:::

### Translation Helper Functions

Laravel provides several helper functions for accessing translations:

```php
// Using trans() function
$title = trans('rma::app.admin.return-requests.title');

// Using __() helper (shorter syntax)
$content = __('rma::app.admin.return-requests.content');

// Using @lang directive in Blade templates (already shown above)
@lang('rma::app.admin.return-requests.title')
```

::: tip Translation Best Practices
**Consistent Naming**: Use descriptive, hierarchical keys that reflect your content structure

**Avoid Hardcoding**: Replace hardcoded strings with translation keys for better maintainability

**Fallback Values**: Laravel automatically falls back to the key name if translation is missing

**Simple Start**: Begin with basic translations and expand as your package features grow
:::

## Testing Your Translations

Verify your translations are working correctly:

```bash
# Clear cache to ensure translations are loaded
php artisan optimize:clear

# Test different language settings
php artisan tinker
```

Now test translation functionality in the tinker console:

```php
// Test in tinker
App::setLocale('en');
echo __('rma::app.admin.return-requests.title'); // Should output: "RMA Listing Title"

// Test fallback behavior
App::setLocale('fr'); 
echo __('rma::app.admin.return-requests.title'); // Should fallback to English since French not defined
```

::: info Testing Tips
**Route Testing**: Visit your admin routes to see translations in action

**Language Switching**: Test fallback behavior when translations are missing

**Cache Clearing**: Always clear cache after adding new translation files
:::

## Your Next Step

With comprehensive localization implemented, your RMA package now supports multiple languages and provides a professional, international user experience. The translation system you've built provides a solid foundation for expanding to additional languages and regions.

You've successfully created:
- **Organized translation files** for different interface sections
- **Service provider registration** for automatic translation loading  
- **Practical examples** of translation usage in views and controllers
- **Testing strategies** for verifying translation functionality

The localization system is now ready to support your package's growth and international expansion.

**Continue to:** **[DataGrid](./datagrid.md)** - Learn how to create data tables with sorting, filtering, and pagination for your admin interface

::: tip Internationalization Strategy
As your package grows, consider creating translation files for major e-commerce markets (Spanish, French, German, Arabic) and implementing locale-specific features like RTL support and currency formatting.
:::
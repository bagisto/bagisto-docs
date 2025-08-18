---
title: Localization
description: Add translations to your package, load them via the service provider, and use them in Blade. Clean, VitePress-friendly and RMA-based.
outline: deep
---

# Localization

Laravel's localization features let you fetch strings in multiple languages so your application can support different locales. Translation strings live in the application's `lang` directory, with one subfolder per locale (for example, `en`, `hi`).

For the full Laravel guide, see: https://laravel.com/docs/11.x/localization

## Publish the application language files (optional)

Laravel's default skeleton doesn't include the `lang` directory. To customize Laravel's own messages, scaffold them with:

```bash
php artisan lang:publish
```

## Configure the application locale

Set your default and fallback locales in `config/app.php`:

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

  /*
  |--------------------------------------------------------------------------
  | Application Fallback Locale
  |--------------------------------------------------------------------------
  |
  | The fallback locale determines the locale to use when the current one
  | is not available. You may change the value to correspond to any of
  | the language folders that are provided through your application.
  |
  */

  'fallback_locale' => 'en',
```

## Create locales in your package (RMA example)

Create a `lang` folder in your package and add an English file to hold translations.

1) Create folders
- Path: `packages/Webkul/RMA/src/Resources/lang`
- Inside `lang`, create a folder for each locale you support (for example, `en`, `ar`). Start with `en`.

2) Create `app.php`
- Inside `packages/Webkul/RMA/src/Resources/lang/en`, create `app.php`.

### Directory structure

```
packages
  └── Webkul
      └── RMA
          └── src
              ├── ...
              └── Resources
                  ├── ...
                  └── lang
                      └── en
                          └── app.php              
```

### Write translations in `app.php`

Define your keys as an associative array. Example:

```php
<?php

return [
    'admin' => [
        'name' => 'John Doe',
    ],
];
```

This file is referenced by its filename (`app`). The example exposes the key `app.admin.name` in the `rma` namespace (shown below).

## Load translations from the package

Register your package translations in the service provider so they're available across the app.

Update `packages/Webkul/RMA/src/Providers/RMAServiceProvider.php`:

```php
<?php

namespace Webkul\RMA\Providers;

use Illuminate\Support\ServiceProvider;

class RMAServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // ... other boot logic

        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'rma');
    }
}
```

::: tip Namespace
Use the `'rma'` namespace in views. The path points to your package's `Resources/lang` directory.
:::

If you want to allow publishing your package translations to the application, add a publish group:

```php
$this->publishes([
    __DIR__ . '/../Resources/lang' => resource_path('lang/vendor/rma'),
], 'rma-translations');
```

## Use translations in Blade

In Blade templates, use `@lang` (or `__()`) with your namespace and key:

```html
@lang('rma::app.admin.name')
```

Your package now ships its own translations, loaded under the `rma` namespace and ready to use across your application.
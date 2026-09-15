# Localization

The views and controllers already use `faq::` keys, and Laravel prints each key as it is until the package registers its language files. On this page you supply the text. Bagisto keeps strings in PHP language files, one folder per locale, and each package registers its files under a namespace of its own.

<a id="creating-translation-files"></a>

## Create the English File

English is the reference locale that Bagisto's translation checker compares every other locale with. Like the core packages, this package keeps one `app.php` per locale, grouped by area:

**File:** `packages/Webkul/Faq/src/Resources/lang/en/app.php`

```php
<?php

return [
    'admin' => [
        'index' => [
            'title' => 'FAQ',
            'create-btn' => 'Create FAQ',
        ],

        'create' => [
            'title' => 'Create FAQ',
        ],

        'edit' => [
            'title' => 'Edit FAQ',
        ],

        'form' => [
            'general' => 'General',
            'question' => 'Question',
            'answer' => 'Answer',
            'channel' => 'Channel',
            'sort-order' => 'Sort Order',
            'status' => 'Status',
            'back-btn' => 'Back',
            'save-btn' => 'Save FAQ',
        ],

        'create-success' => 'FAQ created successfully.',
        'update-success' => 'FAQ updated successfully.',
        'delete-success' => 'FAQ deleted successfully.',
    ],

    'shop' => [
        'index' => [
            'title' => 'Frequently Asked Questions',
            'empty' => 'No questions have been published yet.',
        ],
    ],
];
```

The folder is the locale, the file name is the group and the nested keys follow, so `admin`, `index`, `title` in `lang/en/app.php` is `faq::app.admin.index.title`. Keys are lowercase and hyphenated, as in core's files. The later pages add groups to this file for the DataGrid, the menu, the ACL and the configuration fields.

<a id="registering-translations-with-service-provider"></a>

## Register the Translations

Add `loadTranslationsFrom()` to the provider's `boot()` method:

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{27}
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void {}

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');

        $this->loadRoutesFrom(__DIR__.'/../Routes/admin-routes.php');

        $this->loadRoutesFrom(__DIR__.'/../Routes/shop-routes.php');

        $this->loadViewsFrom(__DIR__.'/../Resources/views', 'faq');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'faq');
    }
}
```

The namespace given to `loadTranslationsFrom()` is the part of a key before `::`. Reusing the view namespace keeps `faq::` meaning one package everywhere.

<a id="using-translations-in-your-package"></a>
<a id="translation-helper-functions"></a>

## Use a String

| Where | How |
|---|---|
| Blade text | `@lang('faq::app.admin.index.title')` |
| A Blade component attribute | `:label="trans('faq::app.admin.form.question')"` |
| PHP | `trans('faq::app.admin.create-success')`, or `__()` |
| `admin-menu.php`, `acl.php`, `system.php` | The key as a plain string, `'name' => 'faq::app.admin.menu.faq'`; Bagisto translates it when it builds the menu, the permission tree or the configuration page |

## Add the Other Locales

Bagisto ships 22 locales: `ar`, `bn`, `ca`, `de`, `en`, `es`, `fa`, `fr`, `he`, `hi_IN`, `id`, `it`, `ja`, `nl`, `pl`, `pt_BR`, `ro`, `ru`, `sin`, `tr`, `uk` and `zh_CN`. For each one, copy `en/app.php` into a folder of that name and translate the values, keeping every key on the same line as in English.

A key missing from the current locale falls back to `config('app.fallback_locale')`, which is `en` unless `APP_FALLBACK_LOCALE` changes it. A key missing from every locale is printed as the key.

### Checking Every Locale

`bagisto:translations:check` compares every locale with `en`. It reads the root `lang` folder and each package directly under `packages/Webkul`; `--package` takes a package folder name, in any letter case:

```bash
php artisan bagisto:translations:check --package=Faq

php artisan bagisto:translations:check --package=Faq --locale=fr --details
```

It reports keys missing from a locale, and fails on a missing locale folder or a file that doesn't match English line for line, so a package that ships only `en` fails with 21 missing folders. [Coding Standards](../advanced/coding-standards.md#translations) lists every rule.

## Test It

Clear the cached configuration first:

```bash
php artisan optimize:clear
```

1. Reload `/admin/faq/create` and `/faq`. The keys are replaced by their text.
2. Once every locale folder exists, run `php artisan bagisto:translations:check --package=Faq`. It ends with `All translations are synchronized with EN!`

## Publishing Translations (Optional)

Laravel merges overrides from the application's `lang/vendor/<namespace>/<locale>/<group>.php` over the package's file, so a store changes one FAQ string by creating `lang/vendor/faq/en/app.php` with only the keys it replaces. Core strings are overridden the same way, under `lang/vendor/admin` and `lang/vendor/shop`. Bagisto's `.gitignore` lists `/lang/vendor`, so remove that line or use `git add -f` when the overrides belong in the store's repository.

To give stores a copy to start from, offer the files for publishing in `boot()`:

```php
$this->publishes([
    __DIR__.'/../Resources/lang' => lang_path('vendor/faq'),
], 'faq-translations');
```

```bash
php artisan vendor:publish --tag=faq-translations
```

<a id="configure-application-locale"></a>

## Things to Watch

- **Every user-facing string needs a key**, including flash messages, DataGrid labels and configuration titles.
- **Add a key to every locale in the same change**, on the same line as in English, and run the checker before you commit.
- **Never edit a core package's language files** for wording of your own; the next update overwrites them. Override core strings under `lang/vendor` instead.
- **The storefront chooses the locale per request, not from `config('app.locale')`.** `Webkul\Shop\Http\Middleware\Locale`, part of the `shop` middleware group, takes the `locale` query parameter, then the locale kept in the session, then the channel's default locale, and accepts only locales assigned to the channel.
- **Right-to-left locales need direction-aware spacing.** The admin and storefront layouts write the locale's direction into `<html dir>`, so Arabic, Persian and Hebrew render right to left; use Tailwind's `ltr:` and `rtl:` variants for spacing that depends on it, as core views do.

## Next Step

The pages show text, but `/admin/faq` lists nothing yet. Next, add the listing.

**Continue to:** [DataGrid](./datagrid.md)

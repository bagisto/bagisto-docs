# System Configuration

On this page you add an FAQ settings page that switches the storefront page on or off for each channel and replaces its title. A package describes its configuration groups, pages and fields in a `system.php` merged into the `core` key; Bagisto renders the form, stores the values in the `core_config` table and returns them through `core()->getConfigData()`, per channel and per locale where a field asks for it. Core's settings live in `packages/Webkul/Admin/src/Config/system.php`.

<a id="define-configuration-settings"></a>

## Create the Configuration File

**File:** `packages/Webkul/Faq/src/Config/system.php`

```php
<?php

return [
    [
        'key' => 'faq',
        'name' => 'faq::app.admin.system.faq.title',
        'info' => 'faq::app.admin.system.faq.info',
        'sort' => 11,
    ], [
        'key' => 'faq.settings',
        'name' => 'faq::app.admin.system.settings.title',
        'info' => 'faq::app.admin.system.settings.info',
        'icon' => 'settings/settings.svg',
        'sort' => 1,
    ], [
        'key' => 'faq.settings.general',
        'name' => 'faq::app.admin.system.general.title',
        'info' => 'faq::app.admin.system.general.info',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'enabled',
                'title' => 'faq::app.admin.system.general.enabled',
                'type' => 'boolean',
                'default' => true,
                'channel_based' => true,
            ], [
                'name' => 'page_title',
                'title' => 'faq::app.admin.system.general.page-title',
                'info' => 'faq::app.admin.system.general.page-title-info',
                'type' => 'text',
                'validation' => 'max:100',
                'depends' => 'enabled:1',
                'channel_based' => true,
                'locale_based' => true,
            ],
        ],
    ],
];
```

The file declares three levels, each with a dotted key:

| Level | Key | Appears as |
|---|---|---|
| Group | `faq` | A heading on the configuration index |
| Page | `faq.settings` | A tile under that heading, opening `/admin/configuration/faq/settings` |
| Section | `faq.settings.general` | A block of fields on that page |

A field's value is stored under its section's key followed by its name, so the switch is `faq.settings.general.enabled`. Every key an item or a field accepts is listed in [Item and Field Keys](#item-and-field-keys).

<a id="register-configuration"></a>

## Merge It into the Configuration

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{24-27}
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/admin-menu.php',
            'menu.admin'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/acl.php',
            'acl'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/system.php',
            'core'
        );
    }

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

## Add the Labels

Add a `system` group under `admin` in the language file, and the same keys in every other locale:

**File:** `packages/Webkul/Faq/src/Resources/lang/en/app.php`

```php
<?php

return [
    'admin' => [
        // ...

        'system' => [
            'faq' => [
                'title' => 'FAQ',
                'info' => 'Settings for the storefront FAQ page.',
            ],

            'settings' => [
                'title' => 'Settings',
                'info' => 'Show the FAQ page and set its title.',
            ],

            'general' => [
                'title' => 'General',
                'info' => 'Each channel shows or hides its own FAQ page.',
                'enabled' => 'Show FAQ Page',
                'page-title' => 'Page Title',
                'page-title-info' => 'Leave empty to use the default title.',
            ],
        ],
    ],

    // ...
];
```

<a id="using-configuration-values-in-your-code"></a>

## Read the Values

`core()->getConfigData($key, $channelCode = null, $localeCode = null)` returns a setting. Update the storefront controller to honour both fields:

**File:** `packages/Webkul/Faq/src/Http/Controllers/Shop/FaqController.php`

```php{21,25}
<?php

namespace Webkul\Faq\Http\Controllers\Shop;

use Illuminate\View\View;
use Webkul\Faq\Repositories\FaqRepository;
use Webkul\Shop\Http\Controllers\Controller;

class FaqController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(protected FaqRepository $faqRepository) {}

    /**
     * Show the active questions of the current channel.
     */
    public function index(): View
    {
        abort_unless((bool) core()->getConfigData('faq.settings.general.enabled'), 404);

        return view('faq::shop.index', [
            'faqs' => $this->faqRepository->getActiveForChannel(core()->getCurrentChannel()->id),
            'title' => core()->getConfigData('faq.settings.general.page_title') ?: trans('faq::app.shop.index.title'),
        ]);
    }
}
```

- **`enabled`** is `channel_based`, so the controller reads the value for the channel serving the request, and each channel switches its own page.
- **`page_title`** is `channel_based` and `locale_based`; while it is empty, the page keeps the translated default title.
- **A saved value is a string.** The switch comes back as `"1"` or `"0"`, and a field that has never been saved returns its `default` as written, `true` here, so cast before comparing.

### Configuration Value Resolution

`getConfigData()` looks in three places, in order:

1. **The `core_config` table**, for the row with that key, matched on the channel code when the field is `channel_based` and on the locale code when it is `locale_based`. Without codes as arguments, the channel is the request's `channel` input (the admin's channel switcher), then the channel whose hostname matches the request, then the first channel in the `channels` table, which is what a console command or queued job usually gets. The locale is the `locale` input, then the application locale.
2. **Laravel's configuration**, at the key without its first segment: `sales.payment_methods.cashondelivery.active` reads `config('payment_methods.cashondelivery.active')`. This is how payment methods and carriers take their defaults from `payment-methods.php` and `carriers.php`.
3. **The field's `default`**, or `null` when it has none.

The second step applies to every key: `faq.settings.general.enabled` reads `config('settings.general.enabled')` before its default. Choose keys whose remainder after the first segment isn't an existing configuration path.

## Test It

Clear the cached configuration first:

```bash
php artisan optimize:clear
```

1. Open `/admin/configuration`. An **FAQ** heading shows a **Settings** tile, which opens `/admin/configuration/faq/settings`.
2. Switch **Show FAQ Page** off for the default channel and save. `/faq` answers `404` on that channel.
3. Switch it back on, enter a **Page Title** and save. `/faq` shows that title.

## Item and Field Keys

### Item Keys

| Key | Where | Meaning |
|---|---|---|
| `key` | Every item | The dotted path |
| `name`, `info` | Every item | Translation keys for the title and the description. Both are required |
| `sort` | Every item | The order among siblings; required on a group. Core's groups run from 1 (General) to 10 (About) |
| `icon` | Page | An image path under the admin theme's `images` folder, such as `settings/settings.svg` |
| `icon_class` | Page | An admin icon font class, as an alternative to `icon` |
| `layout` | Page | Parts of the page to hide; see [Page Layout](#page-layout) |
| `fields` | Section | The inputs |

### Field Keys

| Key | Meaning |
|---|---|
| `name` | The last segment of the stored key; required |
| `title` | A translation key for the label; required |
| `type` | One of the [field types](#field-types); required |
| `info` | A translation key for the help text under the input |
| `default` | The value returned while nothing has been saved |
| `validation` | Laravel rules as one pipe-separated string; see [Validation](#validation) |
| `depends` | Show the field only while another field of the section has one of the given values; see [Dependent Fields](#dependent-fields) |
| `channel_based` | Keep one value per channel; the page shows the channel switcher |
| `locale_based` | Keep one value per locale; the page shows the locale switcher |
| `options` | For `select` and `multiselect`: a list of `title` and `value` pairs, or a `Class@method` string |
| `placeholder` | Placeholder text for the input |
| `path` | For the `blade` type, the view to render |

<a id="supported-field-types"></a>

## Field Types

| Type | Input | Stored value |
|---|---|---|
| `text`, `password`, `number` | A single-line input | The value as a string |
| `textarea` | A plain text area | The text |
| `editor` | A TinyMCE rich text editor | The HTML |
| `boolean` | A switch | `1` or `0` |
| `select` | A dropdown of `options` | The chosen `value` |
| `multiselect` | A multiple choice of `options` | The chosen values, joined with commas |
| `country` | A dropdown of countries | The country code |
| `state` | A dropdown of the states of the section's country field, or a text input for a country without states | The state code, or the text |
| `image`, `file` | An upload | The path of the stored file |
| `color` | A colour picker | The colour |
| `blade` | The view named in `path` | Whatever inputs that view renders |

No core setting uses `color` or `file`; check them on your own page before relying on them.

### Options from Code

`options` can name a class and a method, which Bagisto resolves from the container each time the page is built. The method returns `title` and `value` pairs, and each `title` is translated. Core's tax settings list the store's tax categories this way:

**File:** `packages/Webkul/Admin/src/Config/system.php`

```php
'options' => 'Webkul\Tax\Repositories\TaxCategoryRepository@getConfigOptions',
```

### Uploads

`image` and `file` fields store the upload under `configuration/` on the default filesystem disk. Give each one a `validation` with an explicit `mimes:` list and a `max:` size, and don't accept `svg` for an upload that a storefront page renders.

The admin renders both types as an upload tile with its own replace, download and delete actions. `Webkul\Core\Repositories\CoreConfigRepository` deletes the previous file from the disk when a value is replaced, and removes the stored file along with the configuration row when the setting is deleted.

<a id="blade-type"></a>

### A View of Your Own

The `blade` type renders a view instead of an input, for a notice, a preview or a button:

```php
[
    'name' => 'preview',
    'title' => 'faq::app.admin.system.general.preview',
    'type' => 'blade',
    'path' => 'faq::admin.configuration.preview',
],
```

The view receives `$field`, the field as a `Webkul\Core\SystemConfig\ItemField`, and `$child`, the section as a `Webkul\Core\SystemConfig\Item`. Core uses the type for panels such as the SMTP driver notice, cache management and the About page's system information.

## Page Layout

A page of buttons or read-only information needs no save button or channel switcher. A page-level item may carry a `layout` array that switches parts of the page off; anything left out stays shown. Bagisto 2.4 has no `layout` key.

```php
[
    'key' => 'faq.tools',
    'name' => 'faq::app.admin.system.tools.title',
    'info' => 'faq::app.admin.system.tools.info',
    'icon' => 'settings/settings.svg',
    'sort' => 2,
    'layout' => [
        'title_section' => false,
        'save_button' => false,
        'channel_switcher' => false,
        'locale_switcher' => false,
    ],
],
```

| Key | Hides |
|---|---|
| `title_section` | The column describing each section; the fields then span the full width |
| `save_button` | The save button |
| `channel_switcher` | The channel dropdown |
| `locale_switcher` | The locale dropdown |

## Dependent Fields

`'depends' => 'enabled:1'` shows `page_title` only while `enabled` is on:

- **The format is `<field name>:<value>`**, naming a field of the same section. Several values are separated by commas, and the field shows while the other field has any of them.
- **A boolean field sends `1` or `0`**, so a dependency on it names `1`.
- **A hidden field isn't validated on save**, so a plain `required` rule on a dependent field is safe.

<a id="validations-in-system-configuration"></a>
<a id="common-validation-rules"></a>

## Validation

- **`validation` holds Laravel rules in one pipe-separated string.** A field without it is validated as `nullable`.
- **Bagisto adds four rules** a field can name: `comma_separated_integer`, `decimal`, `phone` and `postcode`, implemented in `Webkul\Core\Rules`.
- **The browser checks the same string with VeeValidate** before the form posts. Rules only Laravel knows (`nullable`, `sometimes`, `present`, `filled`, `bail`) are left out of the browser's copy, and on a `number` field `min` and `max` become `min_value` and `max_value`.

## Things to Watch

- **Every item needs `name` and `info`, and a group needs `sort`.** A missing `info`, or a group without `name` or `sort`, breaks the whole configuration area, not only your page; a page or section without `name` disappears without a warning.
- **`validation` is a string.** `Webkul\Core\SystemConfig\ItemField` declares it as one, so an array of rules breaks the page.
- **Use keys of your own at every level.** Items are merged into one list and indexed by `key`, so an item that repeats a core key replaces the core item or is replaced by it, depending on provider order. To add a section to a core page, give it a new key under that page, such as `sales.checkout.faq`.
- **The configuration pages share one permission.** The routes behind `/admin/configuration` belong to core's `configuration` ACL key, so your settings need no ACL entry, and every admin who may open the configuration can change them.
- **Only page URLs open a form.** `/admin/configuration/faq/settings` shows the page; `/admin/configuration/faq` shows the configuration index, and a page key that doesn't exist answers `404`.

## Next Step

The FAQ now has its table, admin section, permissions, storefront page and settings. Last, react to its events, add a console command and test the package.

**Continue to:** [Events, Commands and Tests](./events-commands-and-tests.md)

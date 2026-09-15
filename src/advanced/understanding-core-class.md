# Understanding the Core Class

`Webkul\Core\Core`, in `packages/Webkul/Core/src/Core.php`, holds the store-wide lookups most Bagisto code needs: the current channel, locale and currency, price conversion and formatting, the saved configuration, countries and states, and a few utilities. You reach it through the global `core()` helper, which returns the instance behind the `Webkul\Core\Facades\Core` facade, so every call in one request or one queued job talks to the same object, and that object [remembers what it looks up](#things-to-watch).

```php
$channelCode = core()->getCurrentChannelCode();

$total = core()->formatPrice($amount, 'EUR');

$maxAttempts = core()->getConfigData('sales.order_settings.order_creation.max_retry_attempts');
```

## How the Current Context Is Resolved

Each of these values is resolved once, then the remembered model is returned:

| Value | Resolved from | Fallback |
|---|---|---|
| Current channel | The channel whose `hostname` matches the request host, with or without `http://` or `https://` | The first channel |
| Default channel | The channel whose code is `config('app.channel')` | The first channel |
| Current locale | The locale whose code is `app()->getLocale()` | The locale for `config('app.fallback_locale')` |
| Base currency | The currency whose code is `config('app.currency')` | The first currency |
| Current currency | The currency last passed to `setCurrentCurrency()` | The current channel's base currency |

The "requested" methods read the admin's channel and locale switchers instead, the `channel` and `locale` query parameters; they're in the tables below.

## Method Reference

Signatures are as declared in `Core.php` and its `Webkul\Core\Concerns\CurrencyFormatter` trait.

### Channels

| Method | Returns |
|---|---|
| `getAllChannels()` | Every channel |
| `getCurrentChannel(?string $hostname = null)` | The current channel. `$hostname` replaces the request host, but only on the first call |
| `setCurrentChannel(Channel $channel): void` | Makes `$channel` the current channel |
| `getCurrentChannelCode(): ?string` | The current channel's code |
| `getDefaultChannel(): ?Channel` | The default channel |
| `setDefaultChannel(Channel $channel): void` | Makes `$channel` the default channel |
| `getDefaultChannelCode(): ?string` | The default channel's code |
| `getDefaultLocaleCodeFromDefaultChannel(): string` | The default locale code of the default channel |
| `getRequestedChannel()` | The channel named by the `channel` query parameter, `null` when no channel has that code, or the current channel when the parameter is absent |
| `getRequestedChannelCode($fallback = true)` | The `channel` request input; with `$fallback`, the current and then the default channel code when it is empty |
| `getChannelName($channel): string` | The channel's name, falling back to its translation in the app locale and then the fallback locale |

### Locales

| Method | Returns |
|---|---|
| `getAllLocales()` | Every locale, sorted by name |
| `getCurrentLocale()` | The current locale |
| `getRequestedLocale()` | The locale named by the `locale` query parameter, `null` when no locale has that code, or the current locale when the parameter is absent |
| `getRequestedLocaleCode($localeKey = 'locale', $fallback = true)` | The `$localeKey` request input; with `$fallback`, `app()->getLocale()` when it is empty |
| `getRequestedLocaleCodes($localeKey = 'locale'): array` | Every locale code when the input is `all`, otherwise a one-item array of the requested code |
| `getRequestedLocaleCodeInRequestedChannel()` | The requested locale code when the requested channel has that locale, otherwise the channel's default locale code |

### Currencies and Prices

| Method | Returns |
|---|---|
| `getAllCurrencies()` | Every currency |
| `getBaseCurrency()` | The base currency |
| `getBaseCurrencyCode()` | The base currency code |
| `getChannelBaseCurrency()` | The current channel's base currency |
| `getChannelBaseCurrencyCode()` | The current channel's base currency code |
| `setCurrentCurrency($currencyCode)` | Sets the current currency; an unknown code selects the channel's base currency |
| `getCurrentCurrency()` | The current currency |
| `getCurrentCurrencyCode()` | The current currency code |
| `getExchangeRate($targetCurrencyId)` | The exchange rate row for a currency **id**, or `null` |
| `convertPrice($amount, $targetCurrencyCode = null)` | `$amount` multiplied by the target currency's rate (the current currency when no code is given); unchanged when there is no rate |
| `convertToBasePrice($amount, $targetCurrencyCode = null)` | `$amount` divided by the target currency's rate; unchanged when there is no rate |
| `currency($amount = 0)` | `$amount` converted to the current currency and formatted |
| `formatPrice(?float $price, ?string $currencyCode = null): string` | `$price` formatted in the given or current currency, **without** converting it |
| `formatBasePrice(?float $price): string` | `$price` formatted in the base currency |
| `formatCurrency(?float $price, Currency $currency): string` | `$price` formatted for the app locale: with the currency's position, decimals and separators when its `currency_position` is set, otherwise in the locale's own format with the currency's symbol |
| `useDefaultCurrencyFormatter(?float $price, Currency $currency): string` | The locale's currency format, using the currency's own symbol when it differs from the locale's |
| `useCustomCurrencyFormatter(?float $price, Currency $currency): string` | The number with the currency's decimals and separators, and its symbol, or its code when it has none, placed by `currency_position` |
| `currencySymbol($currency): string` | The locale's symbol for a currency code or `Currency` model |

### Dates

| Method | Returns |
|---|---|
| `isChannelDateInInterval($dateFrom = null, $dateTo = null)` | Whether today, in the current channel's timezone, is between the two dates inclusive; an empty date leaves that side open |
| `channelTimeStamp($channel)` | The current Unix timestamp; the channel's timezone doesn't change it |
| `is_empty_date($date)` | Whether a SQL date such as `0000-00-00 00:00:00` is empty |
| `formatDate($date = null, $format = 'd-m-Y H:i:s')` | The date (now when `null`) in the current channel's timezone, formatted with Carbon's `translatedFormat()` |
| `xWeekRange($date, $day)` | As `Y-m-d`, the Sunday on or before `$date` when `$day` is `0`, otherwise the Saturday on or after it |

### Configuration

| Method | Returns |
|---|---|
| `getConfigData(string $field, ?string $currentChannelCode = null, ?string $currentLocaleCode = null): mixed` | The saved configuration value. The codes default to `getRequestedChannelCode()` and `getRequestedLocaleCode()`: the request's `channel` and `locale` input, then the current channel and the app locale. Delegates to `system_config()->getConfigData()` |
| `getConfigField($fieldName)` | The field definition from the `core` configuration tree |

A value that has never been saved falls back to `config()` at the same key without its first segment (`sales.payment_methods.<code>.<field>` reads `config('payment_methods.<code>.<field>')`), then to the field's `default` in `system.php`; see [System Configuration](../package-development/system-configuration.md#configuration-value-resolution).

### Countries and Addresses

| Method | Returns |
|---|---|
| `countries()` | Every row of the `countries` table |
| `country_name($code)` | The country name for an ISO 3166-1 alpha-2 code, or an empty string |
| `states($countryCode)` | The states of a country |
| `groupedStatesByCountries()` | Every state, grouped in an array keyed by country code |
| `findStateByCountryCode($countryCode = null, $stateCode = null)` | The matching state, or `false` |
| `isCountryRequired()`, `isStateRequired()`, `isPostCodeRequired()` | Whether the address field is required, from `customer.address.requirements.*` |

### Customers, Taxes and Email

| Method | Returns |
|---|---|
| `getGuestCustomerGroup()` | The customer group with the code `guest` |
| `getTaxCategoryById($id)` | The tax category, or `null` for an empty id |
| `Core::taxRateAsIdentifier(float $taxRate): string` | Static. The rate with dots replaced by underscores, for use in element ids |
| `getSenderEmailDetails()` | `['name' => …, 'email' => …]` from `emails.configure.email_settings.sender_*`, falling back to `config('mail.from')` |
| `getAdminEmailDetails()` | The same shape from `admin_name` and `admin_email`, falling back to `config('mail.admin')` and then `config('mail.from')` |
| `getContactEmailDetails()` | The same shape from `contact_name` and `contact_email`, falling back to `config('mail.contact')` and then `config('mail.from')` |

### Utilities

| Method | Returns |
|---|---|
| `version()` | The value of `Core::BAGISTO_VERSION` |
| `getMaxUploadSize()` | PHP's `upload_max_filesize` setting |
| `convertEmptyStringsToNull($array)` | The array with empty strings and the string `'null'` replaced by `null` |
| `getSingletonInstance($className)` | One instance of `$className` per `Core` instance, resolved from the container |
| `getSpeculationRules()` | The browser speculation rules (`prerender` and `prefetch`) built from `general.content.speculation_rules.*` |

## Other Global Helpers

Each of these is defined in its package's `src/Http/helpers.php` and available everywhere without an import.

| Helper | Package | Returns |
|---|---|---|
| `core()` | Core | `Webkul\Core\Core` |
| `menu()` | Core | `Webkul\Core\Menu`; `menu()->getItems(Menu::ADMIN)` |
| `acl()` | Core | `Webkul\Core\Acl` |
| `system_config()` | Core | `Webkul\Core\SystemConfig` |
| `db_grammar()` | Core | `Webkul\Core\Contracts\DatabaseGrammar` for the current database. See [Database Compatibility](./database-compatibility.md) |
| `clean_path(string $path)` | Core | The path with empty segments removed |
| `clean_content(string $content)` | Core | HTML purified and stripped of Blade directives |
| `array_permutation($input)` | Core | Every combination of an array of arrays |
| `themes()` | Theme | `Webkul\Theme\Themes`; `themes()->current()`, `themes()->set($themeName)` |
| `bagisto_asset(string $path, ?string $namespace = null)` | Theme | The Vite URL of a theme asset |
| `bagisto_theme_storage()` | Theme | `Webkul\Theme\ThemeStorage` for section media URLs |
| `view_render_event(string $eventName, mixed $params = null)` | Theme | Rendered listener output. See [View Render Events](./view-render-events.md) |
| `product_image()` | Product | `Webkul\Product\ProductImage` |
| `product_video()` | Product | `Webkul\Product\ProductVideo` |
| `product_toolbar()` | Product | `Webkul\Product\Helpers\Toolbar` (sort orders and page limits) |
| `image_manager()` | ImageCache | `Illuminate\Image\ImageManager` |
| `image_urls(string $path, ?string $key = null)` | ImageCache | The `*_image_url` set for a stored path. See [Image Cache](../theme-development/image-cache-templates.md) |
| `datagrid(string $datagridClass)` | DataGrid | A resolved DataGrid instance |
| `cart()` | Checkout | `Webkul\Checkout\Cart` |
| `payment()` | Payment | `Webkul\Payment\Payment` |
| `shipping()` | Shipping | `Webkul\Shipping\Shipping` |
| `magic_ai()` | MagicAI | `Webkul\MagicAI\MagicAI` |
| `bouncer()` | User | `Webkul\User\Bouncer`; `hasPermission()`, and the static `allow()` |
| `two_factor_authentication()` | User | `Webkul\User\TwoFactorAuthentication` |

`db_grammar()`, `bagisto_theme_storage()` and `image_urls()` were added in Bagisto 2.5, and on Bagisto 2.4 `image_manager()` returns `Intervention\Image\ImageManager`. There is no `theme()`, `visitor()` or `money_format()` helper.

## Things to Watch

- **`core()` remembers for one request or one job, then starts fresh.** The current and default channel, the current and base currency, the current locale, the guest customer group, exchange rates and tax categories are looked up once and kept on the instance. `Webkul\Core\Core` has no container binding: the instance is the one the facade caches, and `php artisan queue:work` clears that cache before every job, as Laravel Octane does for every request. Code that works through several channels in one job must call `setCurrentChannel()`, and `setCurrentCurrency()`, which is remembered separately, for each one.
- **A command or queued job has no browser request.** Laravel builds the console request from `APP_URL`, so `getCurrentChannel()` returns the channel whose hostname matches `APP_URL`, or the first channel.
- **`formatPrice()` doesn't convert; `currency()` does.** `currency()` converts from the base currency before formatting, so an amount already in the order's currency is converted twice.
- **`getConfigData()` isn't `config()`.** It reads the configuration saved from the admin, per channel and locale, from the database.
- **`countries()` and `groupedStatesByCountries()` query the database on every call.** Call them once per request and reuse the result.

## Related Pages

- [System Configuration](../package-development/system-configuration.md): declaring the fields `getConfigData()` reads.
- [Understanding Indexers](./understanding-indexers.md): the price, inventory and flat indexes the storefront reads.
- [Database Compatibility](./database-compatibility.md): the `db_grammar()` helper.
- [View Render Events](./view-render-events.md): the `view_render_event()` helper.

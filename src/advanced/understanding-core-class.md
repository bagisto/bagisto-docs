# Understanding Core Class

Bagisto provides a comprehensive helper system built around the Core class to streamline development and provide easy access to essential functionality. These helpers eliminate the need for repetitive code patterns and offer a consistent API for common operations across channels, currencies, locales, and configuration management.

## Introduction

The Core class (`Webkul\Core\Core`) serves as Bagisto's central utility hub, providing a unified interface for accessing system-wide functionality. It acts as a facade that abstracts complex operations into simple, memorable method calls.

### Architecture Overview

The Core class is designed around Bagisto's multi-tenant architecture, where:

- **Channels** represent different storefronts or websites
- **Locales** handle internationalization and language settings  
- **Currencies** manage multi-currency operations
- **Configuration** provides centralized settings management

### Accessing the Core Class

Bagisto provides a global `core()` helper function that returns the Core class instance:

```php
// Direct access to Core class methods
$version = core()->version();
$currentChannel = core()->getCurrentChannel();
$allCurrencies = core()->getAllCurrencies();
```

::: tip Global Helper Function
The `core()` function is globally available throughout your Bagisto application, making it accessible in controllers, views, service providers, and custom classes without any imports.
:::

### Core Class Benefits

- **Consistency**: Standardized API across all Bagisto operations
- **Simplicity**: Complex operations reduced to single method calls
- **Context Awareness**: Automatically handles current channel/locale context
- **Performance**: Optimized caching and lazy loading for frequently accessed data

### Internal Architecture

The Core class maintains several protected properties for caching and performance:

```php
protected $currentChannel;    // Cached current channel

protected $defaultChannel;    // Cached default channel

protected $currentCurrency;   // Cached current currency

protected $baseCurrency;      // Cached base currency

protected $currentLocale;     // Cached current locale

protected $guestCustomerGroup; // Cached guest customer group

protected $exchangeRates = []; // Cached exchange rates

protected $taxCategoriesById = []; // Cached tax categories

protected $singletonInstances = []; // Cached singleton instances
```

::: tip Caching Strategy
The Core class implements intelligent caching to minimize database queries. Once a channel, currency, or locale is loaded, it's stored in memory for the request lifecycle.
:::

## Core Helper Methods

The following sections detail the various helper methods available through the Core class, organized by functionality area.

### System Information

#### Get the version number of Bagisto

To get the version number of your Bagisto application, you can use the `core()->version()` method:

```php
$version = core()->version();
// Returns the value of Core::BAGISTO_VERSION, e.g. "2.4.10" or "2.5.0-beta2"
```

### Channel Management

Channels in Bagisto represent different storefronts or websites, enabling multi-channel retailing from a single installation.

#### Get all channels

The `core()->getAllChannels()` method retrieves all available channels in the application, useful for channel selection interfaces and multi-channel operations:

```php
$channels = core()->getAllChannels();
// Returns: Collection of channel models
```

#### Get current channel model

The `core()->getCurrentChannel()` method retrieves the current channel being accessed:

```php
$currentChannel = core()->getCurrentChannel();
// Returns: Current channel model with all properties

$channel = core()->getCurrentChannel('shop.example.com');
// The hostname is honoured only on the first resolution; once the channel
// middleware has resolved the request's channel, the argument is ignored
```

#### Set the current channel

Dynamically change the active channel, or the default channel:

```php
core()->setCurrentChannel($channel);
core()->setDefaultChannel($channel);
```

#### Get current channel code

Retrieve just the code of the currently active channel:

```php
$channelCode = core()->getCurrentChannelCode();
// Returns: "default", "mobile", etc.
```

#### Get default channel model

Access the default channel configuration:

```php
$defaultChannel = core()->getDefaultChannel();
```

#### Get default channel code

Retrieve the default channel code from configuration:

```php
$defaultCode = core()->getDefaultChannelCode();
```

#### Get default locale code from default channel

Get the locale code for the default language in the default channel:

```php
$defaultLocaleCode = core()->getDefaultLocaleCodeFromDefaultChannel();
```

#### Get channel from request

Retrieve the channel based on the current HTTP request:

```php
$requestedChannel = core()->getRequestedChannel();
```

#### Get channel code from request

Get just the channel code from the current request:

```php
$requestedCode = core()->getRequestedChannelCode();

// Return null instead of falling back to the current channel
$requestedCode = core()->getRequestedChannelCode(fallback: false);
```

#### Get channel name

Retrieve the display name of the current channel:

```php
$channelName = core()->getChannelName($channel);
// Note: Requires passing a channel object as parameter
```

::: info Parameter Required
Unlike other channel methods, `getChannelName()` requires a channel object as a parameter. It handles translation fallbacks automatically.
:::  

### Locale Management

Locales handle internationalization, language settings, and regional preferences.

#### Get all locales

Retrieve all available locales in the system:

```php
$locales = core()->getAllLocales();
// Returns: Collection of locale models
```

#### Get current locale

Get the currently active locale:

```php
$currentLocale = core()->getCurrentLocale();
```

#### Get locale from request

Retrieve the locale from the current request:

```php
$requestedLocale = core()->getRequestedLocale();
```

#### Get locale code from request

Get the locale code with optional fallback:

```php
$localeCode = core()->getRequestedLocaleCode($localeKey = 'locale', $fallback = true);
```

Parameters:
- `$localeKey`: The key to look for in the request (default: 'locale')
- `$fallback`: Whether to provide a fallback locale if not found (default: true)

#### Get locale code in requested channel

Ensure the locale code is valid for the requested channel:

```php
$validLocaleCode = core()->getRequestedLocaleCodeInRequestedChannel();
```

If not found, this method sets the channel's default locale code.

#### Get every requested locale code

The configuration locale switcher may post `all`; this expands it to every locale code, or returns the single requested one:

```php
$localeCodes = core()->getRequestedLocaleCodes();
```

### Currency Management

Bagisto's currency helpers facilitate multi-currency operations and conversions.

#### Get all currencies

Retrieve all available currencies:

```php
$currencies = core()->getAllCurrencies();
```

#### Get base currency model

Get the application's base currency:

```php
$baseCurrency = core()->getBaseCurrency();
```

#### Get base currency code

Retrieve the base currency code:

```php
$baseCurrencyCode = core()->getBaseCurrencyCode();
```

#### Get channel's base currency

Get the base currency model for the current channel:

```php
$channelBaseCurrency = core()->getChannelBaseCurrency();
```

#### Get channel's base currency code

Retrieve the base currency code for the current channel:

```php
$channelBaseCurrencyCode = core()->getChannelBaseCurrencyCode();
```

#### Set current currency

Change the active currency:

```php
core()->setCurrentCurrency($currencyCode);
```

#### Get current currency model

Retrieve the current channel's currency:

```php
$currentCurrency = core()->getCurrentCurrency();
```

#### Get current currency code

Get the current channel's currency code:

```php
$currentCurrencyCode = core()->getCurrentCurrencyCode();
```

#### Get exchange rates

Retrieve exchange rate information by target currency ID:

```php
$exchangeRate = core()->getExchangeRate($targetCurrencyId);
// Returns: ExchangeRate model or null
```

::: warning Parameter Type
This method expects a currency ID (integer), not a currency code. Use the currency model's ID property.
:::

#### Convert price

Convert an amount to a target currency:

```php
$amount = 100;
$targetCurrencyCode = 'EUR';
$convertedAmount = core()->convertPrice($amount, $targetCurrencyCode);
```

#### Convert to base price

Convert an amount from a specific currency to the base currency:

```php
$amount = 200;
$targetCurrencyCode = 'EUR';
$baseAmount = core()->convertToBasePrice($amount, $targetCurrencyCode);
```

#### Format and convert price with currency

The `currency()` method formats and converts a price with automatic currency conversion:

```php
$formattedPrice = core()->currency($amount);
// Converts to current currency and formats with symbol
```

#### Format price with currency

Format and display a price with currency symbol:

```php
$price = 100;
$currencyCode = 'USD'; // Optional, uses current currency if not provided
$formattedPrice = core()->formatPrice($price, $currencyCode);
```

#### Format base price

Format a price with the base currency symbol:

```php
$formattedBasePrice = core()->formatBasePrice($price);
```

### Date and Time Helpers

#### Check if date is in interval

Verify if the current channel date falls within a specified range:

```php
$isInRange = core()->isChannelDateInInterval($dateFrom = null, $dateTo = null);
```

#### Get channel timestamp

Get a timestamp adjusted for the channel's timezone:

```php
$timestamp = core()->channelTimeStamp($channel);
```

#### Check if SQL date is empty

Validate whether a SQL date field is empty:

```php
$isEmpty = core()->is_empty_date($date);
```

#### Format date using current channel

Format a date according to channel timezone and locale:

```php
$formattedDate = core()->formatDate($date = null, $format = 'd-m-Y H:i:s');
```

### Configuration Management

#### Retrieve configuration data

Get specific configuration values with channel and locale context:

```php
$configValue = core()->getConfigData($field, $currentChannelCode = null, $currentLocaleCode = null);
// Delegates to system_config()->getConfigData()

$enabled = core()->getConfigData('catalog.products.omnibus.is_enabled', 'default');
// Read the value stored for the "default" channel regardless of the current one
```

The channel and locale default to the current ones. A value that has never been saved falls back to the package config merged under the same key (payment methods, carriers) and then to the field's `default` in `system.php`; see [Configuration Value Resolution](../package-development/system-configuration.md#configuration-value-resolution).

#### Get configuration field

Access a specific configuration field structure:

```php
$fieldStructure = core()->getConfigField($fieldName);
// Returns: Configuration field definition array
```

::: tip System Config Integration
The Core class delegates configuration operations to the system configuration manager, providing a unified interface for accessing settings.
:::

### Geographic Data Helpers

#### Get all countries

Retrieve all available countries:

```php
$countries = core()->countries();
```

#### Get country name by code

Get country name using ISO 3166-1 alpha-2 code:

```php
$countryName = core()->country_name($code);
```

#### Get country states

Retrieve all states/provinces for a country:

```php
$states = core()->states($countryCode);
```

#### Get grouped states by countries

Get all states organized by country:

```php
$groupedStates = core()->groupedStatesByCountries();
```

#### Find state by country code

Get specific state information:

```php
$state = core()->findStateByCountryCode($countryCode = null, $stateCode = null);
```

#### Check field requirements

Verify if address fields are required:

```php
$isCountryRequired = core()->isCountryRequired();
$isStateRequired = core()->isStateRequired();
$isPostCodeRequired = core()->isPostCodeRequired();
```

### Customer Management

#### Get guest customer group

Retrieve the guest customer group configuration:

```php
$guestGroup = core()->getGuestCustomerGroup();
```

### Utility Methods

#### Get maximum upload size

Retrieve the maximum file upload size from PHP configuration:

```php
$maxSize = core()->getMaxUploadSize();
// Returns: Value from ini_get('upload_max_filesize')
```

#### Week range calculation

Calculate week start or end dates:

```php
$weekStart = core()->xWeekRange($date, 0); // Week start (Sunday)
$weekEnd = core()->xWeekRange($date, 1);   // Week end (Saturday)
```

Parameters:
- `$date`: Date string to calculate from
- `$day`: 0 for week start, 1 for week end

#### Convert empty strings to null

Clean up array data by converting empty strings to null:

```php
$cleanedArray = core()->convertEmptyStringsToNull($array);
```

#### Create singleton instance

Get singleton instances through the service container:

```php
$instance = core()->getSingletonInstance($className);
```

#### Tax-related helpers

Generate tax rate identifiers for view elements (a static method):

```php
$taxIdentifier = Core::taxRateAsIdentifier($taxRate);
// Returns: Tax rate with dots replaced by underscores
```

Get tax category by ID with caching:

```php
$taxCategory = core()->getTaxCategoryById($id);
```

#### Email configuration helpers

Retrieve email sender details:

```php
$shopEmailDetails = core()->getSenderEmailDetails();
$adminEmailDetails = core()->getAdminEmailDetails();
$contactEmailDetails = core()->getContactEmailDetails();
```

Each method returns an array with 'name' and 'email' keys, with automatic fallbacks to configuration defaults.

### Performance and Advanced Features

#### Get speculation rules

Retrieve browser speculation rules for performance optimization:

```php
$speculationRules = core()->getSpeculationRules();
// Returns: Array of prerender and prefetch rules based on configuration
```

This method generates speculation rules for browser performance optimization, including prerender and prefetch configurations.

## Other global helpers

`core()` is one of a family of helper functions, each defined in a package's `src/Http/helpers.php` and each returning a facade root or container binding. They are available everywhere without imports.

| Helper | Package | Returns |
|---|---|---|
| `core()` | Core | `Webkul\Core\Core` |
| `menu()` | Core | `Webkul\Core\Menu`; `menu()->getItems(Menu::ADMIN)` |
| `acl()` | Core | `Webkul\Core\Acl` |
| `system_config()` | Core | `Webkul\Core\SystemConfig` |
| `db_grammar()` | Core | `Webkul\Core\Contracts\DatabaseGrammar` for the current database; development version only. See [Database compatibility](./database-compatibility.md) |
| `clean_path(string $path)` | Core | The path with empty segments removed |
| `clean_content(string $content)` | Core | HTML purified and stripped of Blade directives |
| `array_permutation(array $input)` | Core | Every combination of an array of arrays |
| `themes()` | Theme | `Webkul\Theme\Themes`; `themes()->current()`, `themes()->set($code)` |
| `bagisto_asset(string $path, ?string $namespace = null)` | Theme | The Vite URL of a theme asset |
| `bagisto_theme_storage()` | Theme | `Webkul\Theme\ThemeStorage` for section media URLs; development version only |
| `view_render_event(string $eventName, mixed $params = null)` | Theme | Rendered listener output. See [View Render Events](./view-render-events.md) |
| `product_image()` | Product | `Webkul\Product\ProductImage` |
| `product_video()` | Product | `Webkul\Product\ProductVideo` |
| `product_toolbar()` | Product | `Webkul\Product\Helpers\Toolbar` (sort orders and page limits) |
| `image_manager()` | ImageCache | `Illuminate\Image\ImageManager` (`Intervention\Image\ImageManager` on 2.4) |
| `image_urls(string $path, ?string $key = null)` | ImageCache | The `*_image_url` set for a stored path. See [Image Cache Templates](../theme-development/image-cache-templates.md) |
| `datagrid(string $class)` | DataGrid | A resolved DataGrid instance |
| `cart()` | Checkout | `Webkul\Checkout\Cart` |
| `payment()` | Payment | `Webkul\Payment\Payment` |
| `shipping()` | Shipping | `Webkul\Shipping\Shipping` |
| `magic_ai()` | MagicAI | `Webkul\MagicAI\MagicAI` |
| `bouncer()` | User | `Webkul\User\Bouncer`; `hasPermission()`, `allow()` |
| `two_factor_authentication()` | User | `Webkul\User\TwoFactorAuthentication` |

There is no `theme()`, `visitor()` or `money_format()` helper.

## Best Practices

When using Bagisto's Core helpers, consider these recommendations:

::: tip Performance
- Cache results of expensive operations like `getAllChannels()` when used repeatedly
- Use specific methods rather than general ones when possible (e.g., `getCurrentChannelCode()` vs `getCurrentChannel()->code`)
:::

::: warning Context Awareness
- Always consider the current channel/locale context when using helpers
- Be aware that some methods may return different results based on the current request context
:::

::: info Error Handling
- Many Core methods return null or empty collections when data is not found
- Always validate return values, especially when working with optional parameters
:::
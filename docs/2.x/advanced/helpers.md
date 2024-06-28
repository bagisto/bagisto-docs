# Helpers

[[TOC]]

## Introduction

Bagisto provides a range of helper methods in its packages to streamline and simplify the development process. These helpers are designed to offer utility functions that facilitate common tasks, reducing the amount of boilerplate code developers need to write and enhancing overall productivity.

## Core Helpers

The core helper methods are part of the Core class in the `Webkul\Core` namespace. These methods provide essential functionality that can be utilized across different parts of the application, making development more efficient and consistent. Let's explore some common methods:

### Get the version number of the Bagisto.

To get the version number of your Bagisto application, you can use the `core()->version()` method as shown below:

```php
core()->version()
```

### Get all channels

The `core()->getAllChannels()` method is a helper function in Bagisto that retrieves all the available channels in the application. Channels in Bagisto represent different storefronts or websites, allowing for multi-channel retailing from a single Bagisto installation. This method is useful for obtaining a list of all configured channels, which can be utilized in various parts of the application.

To get all the channels in your Bagisto application, you can use the `core()->getAllChannels()` method as shown below

```php
core()->getAllChannels()
```

### Get current channel models

The `core()->getCurrentChannel()` method is a helper function in Bagisto that retrieves the current channel being accessed in the application. Channels in Bagisto represent different storefronts or websites, allowing for multi-channel retailing from a single installation. This method is useful for obtaining details about the specific channel currently in use.

```php
core()->getCurrentChannel()
```

### Set the current channel

The `core()->setCurrentChannel($channel)` method is a helper function in Bagisto that allows you to set the current channel being accessed in the application. This can be useful in scenarios where you need to dynamically change the active channel based on certain conditions.

```php
core()->setCurrentChannel($channel)
```

### Get current channel code

The `core()->getCurrentChannelCode()` method is a helper function in Bagisto that retrieves the code of the currently active channel. This is particularly useful when you need to identify the channel context in which your application is operating.

```php
core()->getCurrentChannelCode()
```

### Get default channel models

The `core()->getDefaultChannel()` method in Bagisto is a helper function that retrieves the default channel model. This is useful when you need to access the default channel's details, such as its configuration, settings, and associated models.

```php
core()->getDefaultChannel()
```

### Set the default channel

Setting the default channel in Bagisto typically involves configuration settings rather than a direct method call like `core()->setDefaultChannel()`. Normally, you would define the default channel in your configuration files or through administrative settings in Bagisto's admin panel. Here’s a general approach to setting the default channel:

```php
core()->setDefaultChannel()
```

### Get the default channel code configured in `config/app.php`.

To retrieve the default channel code configured in config/app.php using Bagisto's helper function `core()->getDefaultChannelCode()`, you typically need to ensure that Bagisto explicitly defines this helper function to access configuration settings directly related to channels. Here’s how you would typically use it:

```php
core()->getDefaultChannelCode()
```

### Get default locale code from default channel

The function `core()->getDefaultLocaleCodeFromDefaultChannel()` retrieves the locale code for the default language set in the default channel of Bagisto. This can be useful for ensuring that content is displayed in the correct language based on the default settings of the e-commerce platform.

```php
core()->getDefaultLocaleCodeFromDefaultChannel()
```

### Get channel from request

The function `core()->getRequestedChannel()` retrieves the current channel from the request. This is useful in a multi-channel environment where different settings, configurations, or customizations might be needed based on the channel from which the request originated.

```php
core()->getRequestedChannel()
```

### Get channel code from request

The function `core()->getRequestedChannelCode()` retrieves the code of the current channel from the request. This helps identify which channel the request is associated with, allowing for channel-specific processing or configurations in a multi-channel setup.

```php
core()->getRequestedChannelCode()
```
  
### Get the channel name 

The function `core()->getChannelName()` retrieves the name of the current channel. This is useful for displaying or logging the name of the channel that is currently active or being accessed.

```php
core()->getChannelName()
```  

### Get all locales

The function `core()->getChannelName()` retrieves the name of the current channel. This is useful for displaying or logging the name of the channel that is currently active or being accessed.

```php
core()->getAllLocales()
```

### Get current locale

The function `core()->getCurrentLocale()` retrieves the current locale being used. This is useful for determining the language and regional settings that are currently active, allowing for appropriate content and formatting adjustments based on the locale.

```php
core()->getCurrentLocale()
```

### Get locale from request

The function `core()->getRequestedLocale()` retrieves the locale from the current request. This is useful for determining the language and regional settings that the user has requested, allowing the application to display content in the appropriate language and format.

```php
core()->getRequestedLocale()
```

### Get locale code from request

The function `core()->getRequestedLocaleCode($localeKey = 'locale', $fallback = true)` retrieves the locale code from the current request.

- `$localeKey (default is 'locale')`: Specifies the key to look for in the request to get the locale code.

- `$fallback (default is true)`: If set to true, it will provide a fallback locale code if the requested locale is not found.

```php
core()->getRequestedLocaleCode($localeKey = 'locale', $fallback = true)
```

Here if you want to use admin locale, you can pass it as an argument.

This function is useful for obtaining the locale code based on user requests, with the option to fall back to a default or administrative locale if necessary.

### Check requested locale code in requested channel. 

The function `core()->getRequestedLocaleCodeInRequestedChannel()` checks and retrieves the locale code from the current request within the context of the requested channel. This ensures that the locale code being used is valid and applicable for the specified channel, allowing for accurate localization based on both the channel and the user's request.

```php
core()->getRequestedLocaleCodeInRequestedChannel()
```

If not found, then set channel default locale code.

### Get all currencies

The function `core()->getAllCurrencies()` retrieves a list of all available currencies in the system. This can be useful for displaying currency options to users, configuring pricing, or handling multi-currency setups in an e-commerce platform.

```php
core()->getAllCurrencies()
```

### Get base currency model

The function `core()->getBaseCurrency()` retrieves the base currency model used in the application. This is typically the default currency against which other currencies are converted or displayed in multi-currency environments within an e-commerce platform.

```php
core()->getBaseCurrency()
```

### Get base channel's currency code

The function `core()->ge1tBaseCurrencyCode()` retrieves the currency code of the base channel, which is essential for operations involving currency management and display within an e-commerce application.

```php
core()->ge1tBaseCurrencyCode()
```

### Get base channel's currency model

The function `core()->getChannelBaseCurrency()` retrieves the currency model of the base channel in Bagisto. This is useful for accessing detailed information about the currency, such as its code, symbol, conversion rates, and other attributes related to currency management within the e-commerce platform.

```php
core()->getChannelBaseCurrency()
```

### Get base channel's currency code

This function `core()->getChannelBaseCurrencyCode()` retrieves the currency code of the base channel, which is essential for operations involving currency management and display within an e-commerce application.

```php
core()->getChannelBaseCurrencyCode()
```

### Set current currency

To set the current currency in Bagisto using the `core()->setCurrentCurrency()` method, you typically need to pass the desired currency code as an argument. Here's how you can do it:

```php
core()->setCurrentCurrency()
```

### Get current channel's currency model

```php
core()->getCurrentCurrency()
```

- **Get current channel's currency code.**

To retrieve the current channel's currency model in Bagisto, you should use the `core()->getCurrentCurrency()` method. Here's how you can use it:

```php
core()->getCurrentCurrencyCode()
```

This function call retrieves the currency model of the current channel, allowing you to access attributes such as the currency code, symbol, exchange rates, and other relevant information related to currency management within your e-commerce application.

### Get exchange rates

To get exchange rates in Bagisto, you typically need to specify the base currency and the target currency for which you want to retrieve the exchange rate. Here's how you can achieve this:

```php
core()->getExchangeRate()
```

### Converts price.

The `core()->convertPrice()` function in Bagisto is used to convert a given amount from the base currency to a specified target currency. Here's how you can use it:

```php
$amount = 100; // Replace with the amount you want to convert
$targetCurrencyCode = 'EUR'; // Replace with the target currency code

$convertedAmount = core()->convertPrice($amount, $targetCurrencyCode);
```

### Converts to base price

The `core()->convertToBasePrice()` function in Bagisto is used to convert a given amount from a specified currency (target currency) to the base currency of the application. Here's how you can use it:

```php
$amount = 200; // Replace with the amount you want to convert to the base currency
$targetCurrencyCode = 'EUR'; // Replace with the target currency code

$baseAmount = core()->convertToBasePrice($amount, $targetCurrencyCode);
```   

### Format and convert price with currency symbol

To format and convert a price to the base currency while including the currency symbol, you typically need to use formatting functions along with conversion. Here’s how you can achieve this in Bagisto:

```php
core()->convertToBasePrice($amount)
```

### Get currency symbol from currency code

To get the currency symbol from a currency code in Bagisto, you typically use the `currencySymbol()` method with the currency code as an argument. Here's how you can do it:

```php
core()->currencySymbol($amount)
```

### Format and convert price with currency symbol

To format and convert a price with a currency symbol in Bagisto, you can use the `core()->formatPrice()` method. Here’s how you can use it:

```php
$price = 100; // Replace with the price you want to format and convert
$currencyCode = 'USD'; // Replace with the currency code you want to use, if different from the default

$formattedPrice = core()->formatPrice($price, $currencyCode);
```

This function retrieves the formatted price as a string with the currency symbol based on the provided or default currency code.

### Format price with base currency symbol.

In Bagisto, if you want to format a price with the base currency symbol, considering the option to encode it, you would typically handle it like this:

This method also give ability to encode the base currency symbol and its optional.

```php
core()->formatBasePrice($price, $isEncoded = false)
```

### Checks if current date of the given channel (in the channel timezone) is within the range

The `core()->isChannelDateInInterval($dateFrom = null, $dateTo = null)` function in Bagisto checks if the current date of the given channel (considering the channel's timezone) falls within the specified date range.

```php
core()->isChannelDateInInterval($dateFrom = null, $dateTo = null)
```

### Get channel timestamp, timestamp will be builded with channel timezone settings.

To retrieve a timestamp that adheres to a specific channel's timezone settings in Bagisto, you typically use the `core()->channelTimeStamp($channel)` function. Here's how you can implement it:

```php
core()->channelTimeStamp($channel)
```

Ensure that the $channel variable is correctly instantiated with the channel object before passing it to `core()->channelTimeStamp()`. This method ensures that timestamps align with the timezone settings defined for each channel in your Bagisto application.

### Check whether sql date is empty.

In Bagisto, there isn't a specific `core()->is_empty_date()` function predefined. However, if you need to check whether a SQL date field is empty or null in PHP, you can do it as follows

```php
core()->is_empty_date($date)
```

This function retrieves the date in the specified format, adjusted according to the timezone and locale settings of the current channel in Bagisto

### Format date using current channel.

In Bagisto, you can format a date using the current channel's timezone and locale using the `core()->formatDate()` function. Here's how you can use it

```php
core()->formatDate($date = null, $format = 'd-m-Y H:i:s')
```

### Retrieve information from configuration

In Bagisto, to retrieve information from configuration using `core()->getConfigData()`, you can fetch specific configuration fields based on the provided parameters. Here’s how you can use it

```php
core()->getConfigData($field, $channel = null, $locale = null)
```

### Retrieve all countries

To retrieve all countries in Bagisto, you can use the `core()->countries()` function. Here's how you can fetch and utilize this data:

```php
core()->countries()
```

### Get country name by code

To get the country name by its ISO 3166-1 alpha-2 code in Bagisto, you can use the `core()->country_name($code)` function. Here's how you can use it

```php
core()->country_name($code)
```

This function retrieves the full name of the country based on its ISO 3166-1 alpha-2 code ($code). 

### Retrieve all country states

To retrieve all states (or provinces) of a specific country in Bagisto, you can use the `core()->states($countryCode)` function. Here's how you can use it

```php
core()->states($countryCode)
```

This function returns a collection of state objects for the specified country

### Retrieve all grouped states by country code.

In Bagisto, to retrieve all states grouped by country code, you can use the `core()->groupedStatesByCountries()` function. This function organizes states or provinces by their respective countries. Here's how you can use it:

```php
core()->groupedStatesByCountries()
```

### Get states by country code.

To retrieve states (or provinces) by country code in Bagisto, you can use the `core()->findStateByCountryCode($countryCode, $stateCode = null)` function. Here’s how you can use it

```php
core()->findStateByCountryCode($countryCode = null, $stateCode = null)
```

### Get guest customer group

In Bagisto, to get the guest customer group, you can use the `core()->getGuestCustomerGroup()` function. Here's how you can use it

```php
core()->getGuestCustomerGroup()
```

This function retrieves the guest customer group configured in your Bagisto application. It returns an object representing the guest customer group

### Is country required

In Bagisto, to check if a country selection is required (typically in address forms or checkout processes), you can use the `core()->isCountryRequired()` function. Here's how you can use it:

```php
core()->isCountryRequired()
```

This function returns a boolean (true or false) indicating whether the country selection is mandatory

### Is state required

In Bagisto, to check if a state or province selection is required (typically in address forms or checkout processes), you can use the `core()->isStateRequired()` function. Here's how you can use it:

```php
core()->isStateRequired()
```

### Is postcode required.

This function returns a boolean (true or false) indicating whether the postcode (or ZIP code) selection is mandatory. 

```php
core()->isPostCodeRequired()
```

### Week range

In Bagisto, there isn't a specific `core()->xWeekRange()` function predefined. However, if you need to calculate a date range based on a given date and the number of weeks before or after that date, you can achieve this using PHP's DateTime and DateInterval classes. Here’s how you can calculate a week range

```php
core()->xWeekRange($date, $day)
```

### Method to sort through the acl items and put them in order

In Bagisto, there isn't a specific `core()->sortItems()` function predefined for sorting ACL items directly. However, you can implement a custom function to sort ACL items based on your specific criteria

```php
core()->sortItems($items)
```

### Get config field

You can retrieve a specific configuration field value using a method like `core()->getConfigField($fieldName)`

```php
core()->getConfigField($fieldName)
```   

### Convert to associative array

In Bagisto, there isn't a specific `core()->convertToAssociativeArray()` function predefined for converting items into associative arrays directly. However, you can easily achieve this using PHP's array functions and loops. Here's a straightforward way to convert a list of items into an associative array based on a key:

```php
core()->convertToAssociativeArray($items)
```

### Array set

There is a helper function array_set() that allows you to set a value within a nested array using a dot-notation key. 

```php
core()->array_set($array, $key, $value)
```

### Convert empty strings to null.

`convertEmptyStringsToNull` function is designed to convert empty strings ('') or the string 'null' to null within an array. Let's break down the function and how it works:

```php
core()->convertEmptyStringsToNull($array)
```

### Create singleton object through single facade.

By using getSingletonInstance() method in Bagisto you can Create singleton object through single facade.

```php
core()->getSingletonInstance($className)
```

### Returns a string as selector part for identifying elements in views.

The `taxRateAsIdentifier` function provided is a helper function in Bagisto that generates a string identifier based on a tax rate. Here’s a breakdown of how it works and how you can use it in your Bagisto application:

It Returns a string as selector part for identifying elements in views.

```php
core()->taxRateAsIdentifier(float $taxRate)
```

### Get tax category through Id.

To retrieve a tax category by its ID using a method like `core()->getTaxCategoryById($id)` in Bagisto or Laravel, you typically need to access the appropriate repository or model where tax categories are stored. Here’s how you can implement such a method assuming you are working within the Bagisto framework

```php
core()->getTaxCategoryById($id)
```

### Get Shop email sender details

To retrieve the shop email sender details in Bagisto or Laravel, you typically need to access configuration settings where these details are stored, such as in the environment configuration or a dedicated settings repository. Here’s a conceptual implementation of how you might achieve this functionality:

```php
core()->getSenderEmailDetails()
```

### Get Admin email details

To retrieve the admin email details in Bagisto, you typically need to access the configuration settings where these details are stored. Here’s how you can conceptualize and implement the `core()->getAdminEmailDetails()` function:

```php
core()->getAdminEmailDetails()
```

By implementing `getAdminEmailDetails()` in your Bagisto application, you can efficiently retrieve and utilize the configured admin details for various administrative functionalities, ensuring clarity and reliability in your communication processes. 

### Get core config values

To retrieve core configuration values in Bagisto application using a method like `core()->getCoreConfig($field, $channel, $locale)`, you would typically access configuration settings specific to your application's setup. Here’s a conceptual implementation for such a method:

```php
core()->getCoreConfig($field, $channel, $locale)
```    

### Get default config

By using the `getDefaultConfig($field)` method, you can achieve the default config.

```php
core()->getDefaultConfig($field)
```     

### Get max upload size from the php.ini file

By using the `getMaxUploadSize` method, you can achieve the maximum upload size.
```php
core()->getMaxUploadSize()
```

These core helper methods provide various functionalities to simplify common tasks and streamline development in Bagisto.
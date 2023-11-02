# Helpers

[[TOC]]

## Introduction

Bagisto provides several helper methods in its packages, which are designed to assist developers in building their projects more efficiently.

## Core Helpers

The core helper methods mentioned below are part of the `Core` class in the `Webkul\Core` namespace. Let's explore some common methods:

- **Get the version number of the Bagisto.**

```php
core()->version()
```

- **Get all channels.**

```php
core()->getAllChannels()
```

- **Get current channel models.**

```php
core()->getCurrentChannel()
```

- **Set the current channel.**

```php
core()->setCurrentChannel($channel)
```

- **Get current channel code.**

```php
core()->getCurrentChannelCode()
```

- **Get current channel code.**

```php
core()->getCurrentChannelCode()
```

- **Get default channel models.**

```php
core()->getDefaultChannel()
```

- **Set the default channel.**

```php
core()->setDefaultChannel()
```

- **Get the default channel code configured in `config/app.php`.**

```php
core()->getDefaultChannelCode()
```

- **Get default locale code from default channel.**

```php
core()->getDefaultLocaleCodeFromDefaultChannel()
```

- **Get channel from request.**

```php
core()->getRequestedChannel()
```

- **Get channel code from request.**

```php
core()->getRequestedChannelCode()
```
  
- **Get the channel name.**

```php
core()->getChannelName()
```  

- **Get all locales.**

```php
core()->getAllLocales()
```

- **Get current locale.**

```php
core()->getCurrentLocale()
```

- **Get locale from request.**

```php
core()->getRequestedLocale()
```

- **Get locale code from request. Here if you want to use admin locale, you can pass it as an argument.**

```php
core()->getRequestedLocaleCode($localeKey = 'locale', $fallback = true)
```

- **Check requested locale code in requested channel. If not found, then set channel default locale code.**

```php
core()->getRequestedLocaleCodeInRequestedChannel()
```

- **Get all currencies.**

```php
core()->getAllCurrencies()
```

- **Get base currency model.**

```php
core()->getBaseCurrency()
```

- **Get base channel's currency code.**

```php
core()->getBaseCurrencyCode()
```

- **Get base channel's currency model.**

```php
core()->getChannelBaseCurrency()
```

- **Get base channel's currency code.**

```php
core()->getChannelBaseCurrencyCode()
```

- **Set current currency.**

```php
core()->setCurrentCurrency()
```

- **Get current channel's currency model.**

```php
core()->getCurrentCurrency()
```

- **Get current channel's currency code.**

```php
core()->getCurrentCurrencyCode()
```

- **Get exchange rates.**

```php
core()->getExchangeRate()
```

- **Converts price.**

```php
core()->convertPrice($amount, $targetCurrencyCode = null)
```

- **Converts to base price.**

```php
core()->convertToBasePrice($amount, $targetCurrencyCode = null)
```   

- **Format and convert price with currency symbol.**

```php
core()->convertToBasePrice($amount)
```

- **Get currency symbol from currency code.**

```php
core()->currencySymbol($amount)
```

- **Format and convert price with currency symbol.**

```php
core()->formatPrice($price, $currencyCode = null)
```

- **Format price with base currency symbol. This method also give ability to encode the base currency symbol and its optional.**

```php
core()->formatBasePrice($price, $isEncoded = false)
```

- **Checks if current date of the given channel (in the channel timezone) is within the range.**

```php
core()->isChannelDateInInterval($dateFrom = null, $dateTo = null)
```

- **Get channel timestamp, timestamp will be builded with channel timezone settings.**

```php
core()->channelTimeStamp($channel)
```

- **Check whether sql date is empty.**

```php
core()->is_empty_date($date)
```

- **Format date using current channel.**

```php
core()->formatDate($date = null, $format = 'd-m-Y H:i:s')
```

- **Retrieve information from configuration.**

```php
core()->getConfigData($field, $channel = null, $locale = null)
```

- **Retrieve all countries.**

```php
core()->countries()
```

- **Get country name by code.**

```php
core()->country_name($code)
```   

- **Retrieve all country states.**

```php
core()->states($countryCode)
```

- **Retrieve all grouped states by country code.**

```php
core()->groupedStatesByCountries()
```

- **Get states by country code.**

```php
core()->findStateByCountryCode($countryCode = null, $stateCode = null)
```

- **Get guest customer group.**

```php
core()->getGuestCustomerGroup()
```

- **Is country required.**

```php
core()->isCountryRequired()
```

- **Is state required.**

```php
core()->isStateRequired()
```

- **Is postcode required.**

```php
core()->isPostCodeRequired()
```

- **Week range.**

```php
core()->xWeekRange($date, $day)
```

- **Method to sort through the acl items and put them in order.**

```php
core()->sortItems($items)
```

- **Get config field.**

```php
core()->getConfigField($fieldName)
```   

- **Convert to associative array.**

```php
core()->convertToAssociativeArray($items)
```

- **Array set.**

```php
core()->array_set(&$array, $key, $value)
```

- **Convert empty strings to null.**

```php
core()->convertEmptyStringsToNull($array)
```

- **Create singleton object through single facade.**

```php
core()->getSingletonInstance($className)
```

- **Returns a string as selector part for identifying elements in views.**

```php
core()->taxRateAsIdentifier(float $taxRate)
```

- **Get tax category through Id.**

```php
core()->getTaxCategoryById($id)
```

- **Get Shop email sender details.**

```php
core()->getSenderEmailDetails()
```

- **Get Admin email details.**

```php
core()->getAdminEmailDetails()
```

- **Array merge.**

```php
core()->arrayMerge(array &$array1, array &$array2)
``` 

- **Get core config values.**

```php
core()->getCoreConfig($field, $channel, $locale)
```    

- **Get default config.**

```php
core()->getDefaultConfig($field)
```     

- **Get max upload size from the php.ini file.**

```php
core()->getMaxUploadSize()
```

These core helper methods provide various functionalities to simplify common tasks and streamline development in Bagisto.
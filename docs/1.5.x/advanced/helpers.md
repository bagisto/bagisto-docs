# Helpers

[[TOC]]

## Introduction

Bagisto provides several helper methods in its packages, which are designed to assist developers in building their projects more efficiently.

## Core Helpers

The core helper methods mentioned below are part of the `Core` class in the `Webkul\Core` namespace. Let's explore some common methods:

- **Get all channels:**

  ```php
  core()->getAllChannels();
  ```

- **Get the current channel:**

  ```php
  core()->getCurrentChannel();
  ```

- **Set the current channel:** This method takes an instance of the `Webkul\Core\Models\Channel` class as an argument.

  ```php
  core()->setCurrentChannel($channel);
  ```

- **Get the current channel code:**

  ```php
  core()->getCurrentChannelCode();
  ```

- **Get the default channel:**

  ```php
  core()->getDefaultChannel();
  ```

- **Get the default channel code:**

  ```php
  core()->getDefaultChannelCode();
  ```

- **Get the requested channel code:** This method is useful when you need to retrieve the channel from the request, with an optional fallback parameter.

  ```php
  core()->getRequestedChannelCode($fallback = true);
  ```

- **Get the channel name:** This method retrieves the name of the channel. It handles fallback cases by checking the name in the property, app locale code, and the `app.fallback_locale` config key.

  ```php
  core()->getChannelName($channel);
  ```

- **Get all locales:**

  ```php
  core()->getAllLocales();
  ```

- **Get all locales by requested channel:** This method provides all the locales associated with the requested channel.

  ```php
  core()->getAllLocalesByRequestedChannel();
  ```

- **Get the current locale:**

  ```php
  core()->getCurrentLocale();
  ```

- **Get the requested locale code:** This method retrieves the locale code from the request, with optional parameters for specifying the locale key and fallback behavior.

  ```php
  core()->getRequestedLocaleCode($localeKey = null, $fallback = true);
  ```

- **Get all customer groups:**

  ```php
  core()->getAllCustomerGroups();
  ```

- **Get the requested customer group code:** This method fetches the customer group code from the request.

  ```php
  core()->getRequestedCustomerGroupCode();
  ```

- **Get all currencies:**

  ```php
  core()->getAllCurrencies();
  ```

- **Get the base currency:**

  ```php
  core()->getBaseCurrency();
  ```

- **Get the base currency code:**

  ```php
  core()->getBaseCurrencyCode();
  ```

- **Get the channel-based currency:**

  ```php
  core()->getChannelBaseCurrency();
  ```

- **Get the channel-based currency code:**

  ```php
  core()->getChannelBaseCurrencyCode();
  ```

- **Get the current currency:**

  ```php
  core()->getCurrentCurrency();
  ```

- **Get the current currency code:**

  ```php
  core()->getCurrentCurrencyCode();
  ```

- **Get the exchange rate based on the currency ID:**

  ```php
  core()->getExchangeRate($targetCurrencyId);
  ```

- **Get the formatted amount:**

  ```php
  core()->currency($amount = 0);
  ```

- **Get the configuration data based on the key, channel, and locale:**

  ```php
  core()->getConfigData($field, $channel = null, $locale = null);
  ```

- **Get all countries:**

  ```php
  core()->countries();
  ```

- **Get the country name by country code:**

  ```php
  core()->country_name($countryCode);
  ```

- **Get all states of a country:**

  ```php
  core()->states($countryCode);
  ```

- **Get sender email details:**

  ```php
  core()->getSenderEmailDetails();
  ```

- **Get admin email details:**

  ```php
  core()->getAdminEmailDetails();
  ```

These core helper methods provide various functionalities to simplify common tasks and streamline development in Bagisto.
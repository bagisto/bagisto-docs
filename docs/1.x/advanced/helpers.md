# Helpers

In Bagisto, there are several packages have been used. We have provided useful helper methods in the packages which can help developers to develop their projects with ease.

## Core Helpers

All the mentioned helper methods are from Bagisto's core package class named `Core` in the `Webkul\Core` namespace. Let's discuss some common methods,

- Get all the channels,

  ~~~php
  core()->getAllChannels();
  ~~~

- Get the current channel,

  ~~~php
  core()->getCurrentChannel();
  ~~~

- Set the current channel, this method will take one argument i.e. instance of this class `Webkul\Core\Models\Channel`,

  ~~~php
  core()->setCurrentChannel($channel);
  ~~~

- Get the current channel code,

  ~~~php
  core()->getCurrentChannelCode();
  ~~~

- Get the default channel,

  ~~~php
  core()->getDefaultChannel();
  ~~~

- Get the default channel code,

  ~~~php
  core()->getDefaultChannelCode();
  ~~~

- Get requested channel code, this method is useful when you need to fetch the channel from the request, and no need to worry about the fallback as well. This method also has the optional parameter `$fallback`, which means the developer can use this with or without fallback,

  ~~~php
  core()->getRequestedChannelCode();
  ~~~

- Get the channel name, yeah we know that you can chain it with the `Channel` instance but the purpose of this method is to handle the fallback case as well. This method will first check the name in the property, if not found then it will proceed further with app locale code, if still not found then it will check from the config key name as `app.fallback_locale`,

  ~~~php
  core()->getChannelName($channel);
  ~~~

- Get all the locales,

  ~~~php
  core()->getAllLocales();
  ~~~

- Get all locales by requested channel, this method will provide you all the locales associated with the requested channel,

  ~~~php
  core()->getAllLocalesByRequestedChannel();
  ~~~

- Get the current locale,

  ~~~php
  core()->getCurrentLocale();
  ~~~

- Get the requested locale code, this method is useful when you need to fetch the locale code from the request, and no need to worry about the fallback as well. This method also has the optional parameter `$localeKey` and `$fallback`, which means the developer can use this with or without fallback,

  ~~~php
  core()->getRequestedLocaleCode();
  ~~~

- Get all the customer groups,

  ~~~php
  core()->getAllCustomerGroups();
  ~~~

- Get requested customer group code, this method will fetch you customer group code from the request,

  ~~~php
  core()->getRequestedCustomerGroupCode();
  ~~~

- Get all the currencies,

  ~~~php
  core()->getAllCurrencies();
  ~~~

- Get the base currency,

  ~~~php
  core()->getBaseCurrency();
  ~~~

- Get the base currency code,

  ~~~php
  core()->getBaseCurrencyCode();
  ~~~

- Get the channel based currency,

  ~~~php
  core()->getChannelBaseCurrency();
  ~~~

- Get the channel based currency code,

  ~~~php
  core()->getChannelBaseCurrencyCode();
  ~~~

- Get the current currency,

  ~~~php
  core()->getCurrentCurrency();
  ~~~

- Get the current currency code,

  ~~~php
  core()->getCurrentCurrencyCode();
  ~~~

- Get the exchange rate based on the currency id,

  ~~~php
  core()->getExchangeRate($targetCurrencyId);
  ~~~

- Get the formatted amount,

  ~~~php
  core()->currency($amount = 0);
  ~~~

- Get the configuration date based on the key, channel and locale,

  ~~~php
  core()->getConfigData($field, $channel = null, $locale = null);
  ~~~

- Get all the countries,

  ~~~php
  core()->countries();
  ~~~

- Get the country name by country code,

  ~~~php
  core()->country_name($countryCode);
  ~~~

- Get all the country's state,

  ~~~php
  core()->states($countryCode);
  ~~~

- Get sender email details,

  ~~~php
  core()->getSenderEmailDetails();
  ~~~

- Get admin email details,

  ~~~php
  core()->getAdminEmailDetails();
  ~~~

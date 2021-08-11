# Helpers

In Bagisto, there are several packages have been used. We have provided useful helper methods in the packages which can help developers to develop their projects with ease.

## Core Helpers

All the mentioned helper methods are from Bagisto's core package class named `Core` in the `Webkul\Core` namespace. Let's discuss them,

- Fetch all the collections `Webkul\Core\Models\Channel` model,

  ~~~php
  core()->getAllChannels()
  ~~~

- Get the current `Webkul\Core\Models\Channel` model,

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

- Get the default `Webkul\Core\Models\Channel` model,

  ~~~php
  core()->getDefaultChannel();
  ~~~

- Get the default channel code,

  ~~~php
  core()->getDefaultChannelCode();
  ~~~

- Get requested channel code, this method is useful when you need to fetch the channel from the request and no need to worry about the fallback as well. This method also has the optional parameter `$fallback`, which means the developer can use this with or without fallback,

  ~~~php
  core()->getRequestedChannelCode($fallback = true);
  ~~~

- Get the channel name, yeah we know that you can chain it with the `Channel` instance but the purpose of this method is to handle the fallback case as well. This method will first check the name in the property, if not found then it will proceed further with app locale code, if still not found then it will check from the config key name as `app.fallback_locale`,

  ~~~php
  core()->getChannelName($channel);
  ~~~

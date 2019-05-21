---
title: Bagisto Introduction
layout: default
---

## How to Configure Settings

### Add Currency<a id="add-currency"></a><span class="edit-github"><img src="/assets/images/icons/Icon-Pencil-Large.svg"/> <a href="https://github.com/bagisto/bagisto-docs">Edit On github</a></span>

Before publishing the eCommerce store, it has been a crucial decision to decide the currency to be used all over the store. And, for providing ease to the store owner to perform the trade in multiple countries with their currency format

In admin panel, Click on Setting >> Currencies >> Add Currency

Channel Setting For Currency
Click on Setting >> open the selected channel in Edit Mode

Currency:- You can select or multi-select currency as per your choice.

Base Currency:- You have to set your Base currency that will be applicable throughout your eCommerce ecosystem as the default currency.

Once the channel setting has been done click on Save Channel


![Locale Configuration](assets/images/Bagisto_Docs_Images/configure-setting/currency/Add-currency.png){: height="50%" width="50%" border="1px solid"}

![Locale Configuration](assets/images/Bagisto_Docs_Images/configure-setting/currency/channel-currency.png){: height="50%" width="50%" border="1px solid"}

![Locale Configuration](assets/images/Bagisto_Docs_Images/configure-setting/currency/currency-12.png){: height="50%" width="50%" border="1px solid"}

![Locale Configuration](assets/images/Bagisto_Docs_Images/configure-setting/currency/currency-frontend.png){: height="50%" width="50%" border="1px solid"}

![Locale Configuration](assets/images/Bagisto_Docs_Images/configure-setting/currency/currency-setting.png){: height="50%" width="50%" border="1px solid"}



#### Front End:-
At the top of the front end, there is an option of currency so you can select your currency.

### Add Language<a id="add-language"></a>


Language file creation demonstration



### Add Locale<a id="add-locale"></a>
The Locale is something that determines the language of the store. Locale Configuration is provided in admin panel settings menu. By default, we have chosen English as locale. Users can create several locales for a store.

![Locale Configuration](assets/images/Bagisto_Docs_Images/configure-setting/locale-configure.png){: height="100%" width="100%" border="1px solid"}

#### Steps to create and apply locale
Below, there are some steps that should be followed in accordance to create and turns store language for locale created:-

1:-The admin has to create locales from admin section from settings. The locale created from admin panel will

2:-The admin needs to register his locale code within the config/app.php file of the root

3:-Now, at last, to turn the language of the store to created locale, admin should go to settings/channels in the admin panel and perform editing for the particular channel selected.

4:-On clicking the pencil icon, The admin will be redirected to edit form where admin can choose particular locale-name in Locales and Default Locale fields of a form


![locale selection](assets/images/Bagisto_Docs_Images/configure-setting/locale-selection.png){: width="100%" height="100%"}


![locale selection](assets/images/Bagisto_Docs_Images/configure-setting/locale-lang.png){: width="50%" height="50%"}

![locale selection](assets/images/Bagisto_Docs_Images/configure-setting/set-locale-config.png){: width="50%" height="50%"}


### Add Channel<a id="add-channel"></a>


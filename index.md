---
title: Introduction-Bagisto
layout: default
---

# Introduction <a id="bagisto"></a><span class="edit-github"><img src="/assets/images/icons/Icon-Pencil-Large.svg"/> <a href="https://github.com/bagisto/bagisto-docs/blob/master/introduction.md">edit on github</a></span>


Bagisto is a hand tailored E-Commerce framework designed on some of the hottest opensource technologies such as Laravel a PHP framework, Vue.js a progressive Javascript framework.

Bagisto is viable attempt to cut down your time, cost and workforce for building online stores or migrating from physical stores to the ever demanding online world. Your business whether small or huge it suits all and very simple to set it up. Built on top of Laravel, it is coupled with easy product information management. The framework is very flexible and easy to use even for non-tech users.

At the time of writing, Bagisto’s main feature list includes:

* Multiple Channels, Locale, Currencies.
* Built-in Access Control Layer.
* Beautiful and Responsive Storefront.
* Descriptive and Simple Admin Panel.
* Admin Dashboard.
* Custom Attributes.
* Built on Modular Approach.
* Support for Multiple Store Themes.
* Multistore Inventory System.
* Orders Management System.
* Customer Cart, Wishlist, Product Reviews.
* Simple and Configurable Products.

Bagisto features an administration panel with a Dashboard, sales data, a catalog of products you can manage, and customer management:



Besides the features already available, the Bagisto’s roadmap includes:

API Support (REST and GraphQL)
Progressive web application
Mobile application on the Google Play and Apple App Store
Dropshipping
Docker integration
Elasticsearch integration
Support for Redis, Varnish, Nginx, and Memcached
Percona support
Accelerated mobile pages (AMP) integration
CI/CD Pipeline management
New product types like subscriptions, bookings, and recurring billing.
GDPR compliance
To learn more about Bagisto’s features and try a demo, check out [Bagisto](https://bagisto.com). You can get started with the source code by checking out the repo on GitHub at [bagisto/bagisto](https://github.com/bagisto/bagisto).

Also, You can Check out the roadmap for Bagisto here: [bagisto roadmap](https://bagisto.com/roadmap/)

### Requirements <a id="requirements"></a>:

* **OS**: Ubuntu 16.04 LTS or higher.
* **SERVER**: Apache 2 or NGINX
* **RAM**: 3 GB or higher.
* **PHP**: 7.1.17 or higher.
* **Processor**: Clock Cycle 1 Ghz or higher.
* **For MySQL users**: 5.7.23 or higher.
* **For MariaDB users**: 10.2.7 or Higher.
* **Node**: 8.11.3 LTS or higher.
* **Composer**: 1.6.5 or higher.

### Installation & Configuration <a id="installation"></a>:

**1. Try our new GUI installer to install Bagisto:**

##### a. Download zip from the link below:

[Download](https://github.com/bagisto/bagisto/archive/v0.1.5.zip)

##### b. Extract the contents of zip and execute the project in browser:

~~~
http(s)://localhost/bagisto/public
~~~

or

~~~
http(s)://example.com/public
~~~

**2. Try our old fashioned way to install Bagisto:**

##### Execute these commands below as in their order

~~~
1. composer create-project bagisto/bagisto
~~~

**Now configure your database:**

If the above command was completed successfully, then you'll find directory **bagisto** and all of the code will be inside it.

Find file **.env** inside **bagisto** directory and set the environment variables listed below:

* **APP_URL**
* **DB_CONNECTION**
* **DB_HOST**
* **DB_PORT**
* **DB_DATABASE**
* **DB_USERNAME**
* **DB_PASSWORD**

Although, mailer environment variables are also required to be set up as **Bagisto** requires emails to send to customers and admins for various functionalities that are built in.

~~~
2. php artisan migrate
~~~

~~~
3. php artisan db:seed
~~~

~~~
4. php artisan vendor:publish
-> Press 0 and then press enter to publish all assets and configurations.
~~~

~~~
5. php artisan storage:link
~~~

~~~
6. composer dump-autoload
~~~


**To execute Bagisto**:

##### On server:

~~~
Open the specified entry point in your hosts file in browser or make entry in hosts file if not done.
~~~

##### On local:

~~~
php artisan serve
~~~


**How to log in as admin:**

> *http(s)://example.com/admin/login*

~~~
email:admin@example.com
password:admin123
~~~

**How to log in as customer:**

*You can directly register as customer and then login.*

> *http(s)://example.com/customer/register*


## Directory Structure <a id="directory_structure"></a>

*    module-name/
        * Console/
            * Commands/
        * Contracts/
        * Events/
        * Exceptions/
        * Helpers/
        * Http/
            *  Controllers/
            *  Middleware/
            *  Requests/
            *  Resources/
        * Jobs/
        * Listeners/
        * Models/
        * Providers/
            *  ModuleServiceProvider.php
            *  EventServiceProvider.php
        * Services/
        * resources/
            *  assets/
            *  config/
                *  module.php
            *  database/
                *  migrations/
                *  seeds/
            *  lang/
            *  routes/
                *  api.php
                *  web.php
            *  views/
            *  manifest.php







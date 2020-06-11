---
title: Bagisto Documentation | Laravel eCommerce DevDocs
layout: default
---

# Introduction <a id="bagisto"></a>

![](assets/images/icons/Icon-Pencil-Large.svg){:.pencil-icon }
[edit on github](https://github.com/bagisto/bagisto-docs/blob/master/index.md){:.edit-github target="\_blank"}

Bagisto is a customized E-Commerce framework designed on some of the hottest opensource technologies such as Laravel, a PHP framework and Vue.js, a progressive Javascript framework.

Bagisto is a viable option to reduce your time, cost and workforce for building online stores or migrating from a physical store to an online platform. It suitable for all small or large E-Commerce business demands, with a simple set-up procedure. Built on top of Laravel, it is equipped with easy product information management. The framework is very flexible and easy to use even for non-tech users.

At the time of writing, Bagisto’s main feature list includes:

- Multiple Channels, Locale, Currencies
- Built-in Access Control Layer
- Beautiful and Responsive Storefront
- Descriptive and Simple Admin Panel
- Admin Dashboard
- Custom Attributes
- Built on a Modular Approach
- Support for Multiple Store Themes
- Multistore Inventory System
- Orders Management System
- Customer Cart, Wishlist, Product Reviews
- Simple and Configurable Products

Bagisto features an administration panel with a Dashboard, sales data, a catalog for Products and Customer management:

Besides the features already available, Bagisto’s roadmap includes:

- API Support (REST and GraphQL)
- Progressive web application
- Mobile application on the Google Play and Apple App Store
- Dropshipping
- Docker integration
- Elasticsearch integration
- Support for Redis, Varnish, Nginx, and Memcached
- Percona support
- Accelerated mobile pages (AMP) integration
- CI/CD Pipeline management
- New product types like subscriptions, bookings, and recurring billing
- GDPR compliance

To learn more about Bagisto’s features and try a demo, check out [Bagisto](https://bagisto.com){: target="\_blank" .link-color}. You can get started with the source code by checking out the repo on GitHub at [bagisto/bagisto](https://github.com/bagisto/bagisto){: target="\_blank" .link-color}.

To get quickly updated on the current version and recently released features, see [Bagisto roadmap](https://bagisto.com/roadmap/){: target="\_blank" .link-color}.

### Requirements <a id="requirements"></a>:

- <b>OS:</b>
  1. Windows 7 or above with WAMP/XAMPP environment
  2. Compatible with macOS
  3. Ubuntu 16.04 LTS or higher
- <b>SERVER:</b> Apache 2 or NGINX
- <b>RAM:</b> 3 GB or higher
- <b>PHP:</b> 7.1.17 or higher
- <b>Processor:</b> Clock Cycle 1 Ghz or higher
- <b>For </b>MySQL users: 5.7.23 or higher
- <b>For </b>MariaDB users: 10.2.7 or higher
- <b>Node:</b> 8.11.3 LTS or higher
- <b>Composer:</b> 1.6.5 or higher
- <b>php7.</b>1-intl extension
- <b>php7.</b>1-gd extension

### Installation & Configuration <a id="installation"></a>:

1. Try our new GUI installer to install Bagisto:

    - [Download bagisto](https://bagisto.com/en/download/){: target="\_self" .link-color}.

    - Extract the contents of zip and execute the project in browser:

      `http(s)://localhost/bagisto/public`

        or

      `http(s)://example.com/public`

2. Try our old fashioned way to install Bagisto:

    - Execute these commands below as in their order

    ```
      1. composer create-project bagisto/bagisto
    ```

    - Now configure your database:

      If the command above was completed successfully, then you'll find the directory **bagisto** and all of its available code.

      Find file **_.env_** inside the  **bagisto** directory and set the environment variables listed below:

        - APP_URL
        - DB_CONNECTION
        - DB_HOST
        - DB_PORT
        - DB_DATABASE
        - DB_USERNAME
        - DB_PASSWORD

    - Although, mailer environment variables are also required to be set up as **Bagisto** requires emails to send to customers and admins for various built-in functionalities.

    ```
    2. php artisan migrate
    ```

    ```
    3. php artisan db:seed
    ```

    ```
    4. php artisan vendor:publish
      -> Press 0 and then press enter to publish all assets and
      configurations.
    ```

    ```
    5. php artisan storage:link
    ```

    ```
    6. composer dump-autoload
    ```

3. To execute Bagisto:

  - On server:

    ```
      Open the specified entry point in your hosts file in browser
      or make entry in hosts file if not done.
    ```

  - On local:

    ```
      php artisan serve
    ```

  - How to login as admin:

      `http(s)://example.com/admin/login`

         email: admin@example.com

         password: admin123

  - How to login as customer:

      You can directly register as a customer and then login.

      `http(s)://example.com/customer/register`

## Directory Structure <a id="directory_structure"></a>

- module-name/
  - Console/
    - Commands/
  - Contracts/
  - Events/
  - Exceptions/
  - Helpers/
  - Http/
    - Controllers/
    - Middleware/
    - Requests/
    - Resources/
  - Jobs/
  - Listeners/
  - Models/
  - Providers/
    - ModuleServiceProvider.php
    - EventServiceProvider.php
  - Services/
  - resources/
    - assets/
    - config/
      - module.php
    - database/
      - migrations/
      - seeds/
    - lang/
    - routes/
      - api.php
      - web.php
    - views/
    - manifest.php

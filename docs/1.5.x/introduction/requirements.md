# Requirements

Before installing Bagisto, make sure the server meets the following requirements:

## Server configuration

- **SERVER**: Apache 2 or NGINX
- **RAM**: 4GB or higher
- **Node**: 18.12.0 LTS or higher
- **PHP**: 8.1 or higher
- **Composer**: 2.5 or higher

## PHP Extensions

Make sure the following extensions are installed and enabled. You can check using the `phpinfo()` page or the `php -m` command.

- php-intl extension

- php-gd extension

  ::: tip
    You must install the `php-gd` extension properly otherwise, the image does not work properly in the project.
  :::

## PHP Configuration

Open your php configuration file **php.ini** and change the following settings.  

  ~~~ini
  memory_limit = 4G
  max_execution_time = 360
  date.timezone = Asia/Kolkata <- Change this to your own timezone.
  ~~~

::: tip Restart your web server
  Whenever you make changes to the PHP configuration file, you must restart Apache or NGINX.
:::

## Supported Database Servers

- **MySQL**: 8.0.32 or higher
- **MariaDB**: 10.3 or higher
- **Database Collation** : utf8mb4_0900_ai_ci

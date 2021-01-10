# Requirements

Before installing Bagisto please make sure your server meets the following requirements.

## Server configuration
- **SERVER** Apache 2 or NGINX
- **RAM** 4GB or higher
- **Node** 8.11.3 LTS or higher
- **PHP** 7.3.0 or higher
- **Composer** 1.6.5 or higher

## PHP Extensions
-  php7.3-intl extension
-  php7.3-gd extension

## PHP Configuration
Open your php configuration file **php.ini** and change the following settings.  

```ini
memory_limit = 4G
max_execution_time = 360
date.timezone = Europe/Brussels <- Change this to your own timezone.
```

::: tip Restart your web server
Everytime you make changes to PHP configuration file you will need to restart apache or NGINX.
:::

## Supported Database Servers
- **MySQL** 5.7.23 or higher
- **MariaDB** 10.2.7 or higher
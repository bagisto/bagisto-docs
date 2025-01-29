# Requirements

[[TOC]]

## Server Configuration

- **Server**: Apache 2 or NGINX
- **RAM**: 4GB or higher
- **Node**: 18.12.0 LTS or higher
- **PHP**: 8.1 or higher
- **Composer**: 2.5 or higher

## PHP Extensions

Ensure the following extensions are installed and enabled. You can check using the **`phpinfo()`** page or the **`php -m`** command.

- **php-intl extension**: This extension is required for internationalization support in Bagisto.

- **php-gd extension**: The **`php-gd`** extension must be properly installed to ensure correct image functionality in the project. If not installed correctly, image-related features may not work as expected.

  ::: tip Note
  It is important to ensure proper installation of the **`php-gd`** extension to avoid any issues with image manipulation in Bagisto.
  :::

## PHP Configuration

Open your **`php.ini`** file and modify the following settings.

- **memory_limit**: Set the **`memory_limit`** directive to **`4G`** or higher to ensure sufficient memory allocation for the application.

- **max_execution_time**: Adjust the **`max_execution_time`** directive to **`360`** or higher. This value determines the maximum time (in seconds) a script is allowed to run. Increasing this value ensures that longer operations, such as import/export processes, can be completed successfully.

- **date.timezone**: Set the **`date.timezone`** directive to your specific timezone. For example, **`Asia/Kolkata`**. This ensures that date and time-related functions work accurately based on the specified timezone.

```ini
memory_limit = 4G
max_execution_time = 360
date.timezone = Asia/Kolkata <- Change this to your own timezone.
```

::: tip Remember to restart your web server
Whenever you make changes to the PHP configuration file, be sure to restart Apache or NGINX to apply the modifications.
:::

## Supported Database Servers

Bagisto supports the following database servers:

- **MySQL**: Version 8.0.32 or higher is recommended for optimal performance and compatibility.

- **Database Collation**: The recommended collation for the database is **`utf8mb4_unicode_ci`**, which ensures proper handling of Unicode characters and multilingual support.
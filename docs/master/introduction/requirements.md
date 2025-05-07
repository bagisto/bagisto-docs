# Requirements

[[TOC]]

## Server Configuration

- **Server**: Apache 2 or NGINX
- **RAM**: 4GB or higher
- **Node**: 23.10.0 LTS or higher
- **PHP**: 8.2 or higher
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

## Apache Configuration

To serve Bagisto using Apache, make sure your virtual host is properly configured. Below is a basic `VirtualHost` example suitable for local development:

```ini
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/bagisto/public

    <Directory /var/www/html/bagisto/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

::: tip Note
Ensure `DocumentRoot` points to the `public` directory of your Bagisto installation.

`AllowOverride All` is essential for Laravel’s `.htaccess` to function correctly.
:::

## Nginx Configuration

If you are deploying your Bagisto application to a server that is running Nginx, you may use the following configuration file as a starting point for configuring your web server. Most likely, this file will need to be customized depending on your server's configuration.

Please ensure, like the configuration below, your web server directs all requests to your application's `public/index.php` file. You should never attempt to move the `index.php` file to your project's root, as serving the application from the project root will expose many sensitive configuration files to the public Internet:

```ini
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /srv/example.com/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~* ^\/(?!cache).*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|webp|woff|woff2)$ {
      expires max;
      access_log off;
      add_header Cache-Control "public";
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ ^/index\.php(/|$) {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

## Supported Database Servers

Bagisto supports the following database servers:

- **MySQL**: Version 8.0.32 or higher is recommended for optimal performance and compatibility.

- **Database Collation**: The recommended collation for the database is **`utf8mb4_unicode_ci`**, which ensures proper handling of Unicode characters and multilingual support.
# 🚀 Deployment

If you are deploying your Bagisto application to a server that is running Nginx, you may use the following configuration file as a starting point for configuring your web server. Most likely, this file will need to be customized depending on your server's configuration.

Please ensure, like the configuration below, your web server directs all requests to your application's `public/index.php` file. You should never attempt to move the `index.php` file to your project's root, as serving the application from the project root will expose many sensitive configuration files to the public Internet.

## 🌐 Nginx

Below is a sample Nginx configuration for Bagisto. This configuration should be placed in your web server's configuration file:

```nginx
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

## 🔄 Apache (Alternative)

To serve Bagisto using Apache, make sure your virtual host is properly configured. Below is a basic VirtualHost example suitable for local development:

```apache
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

::: warning Mod Rewrite Required
Make sure you have the `mod_rewrite` module enabled in Apache. You can enable it using:

```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```
:::

## ⚡ Optimization

Before deploying your application, make sure to run the following optimization commands:

```shell
php artisan optimize
```

For additional optimization and security configurations, you may want to consider:

- Enabling SSL/TLS encryption
- Implementing proper firewall rules
- Setting up monitoring and logging
- Configuring caching mechanisms

::: tip Performance
For better performance in production, consider enabling OPcache and configuring your PHP-FPM settings appropriately.
:::

# 🚀 Deployment

If you are deploying your Bagisto application to a server running **Nginx**, **OpenLiteSpeed (LiteSpeed)**, or **Apache**, you may use one of the following configurations as a starting point for your web server. Most likely, these will need to be customized depending on your server's configuration. Each section also shows how to enable that server's page cache.

Please ensure, like the configuration below, your web server directs all requests to your application's `public/index.php` file. You should never attempt to move the `index.php` file to your project's root, as serving the application from the project root will expose many sensitive configuration files to the public Internet.

## 🌐 Nginx

Below is a sample Nginx configuration for Bagisto. This configuration should be placed in your web server's configuration file:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /srv/example.com/public;

    client_max_body_size 10M;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_proxied any;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/json
        application/xml
        application/rss+xml
        image/svg+xml;

    location ^~ /themes/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
        try_files $uri =404;
    }

    location ^~ /cache/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
        try_files $uri /index.php?$query_string;
    }

    location ^~ /storage/ {
        expires 30d;
        add_header Cache-Control "public";
        access_log off;
        try_files $uri /index.php?$query_string;
    }

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~* ^\/(?!cache).*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|webp|woff|woff2)$ {
        expires max;
        access_log off;
        add_header Cache-Control "public";
    }

    location ~* \.(?:woff2?|ttf|eot|otf|ico|svg|jpe?g|png|gif|webp|avif|css|js)$ {
        expires 30d;
        add_header Cache-Control "public";
        access_log off;
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ ^/index\.php(/|$) {
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Use the socket of the PHP version your release runs on: `php8.4-fpm.sock` for the current development version, `php8.3-fpm.sock` or `php8.4-fpm.sock` for Bagisto 2.4.

### ⚡ Nginx FastCGI Cache

To cache rendered pages, declare a cache zone in the `http {}` block:

```nginx
fastcgi_cache_path /var/cache/nginx/bagisto levels=1:2 keys_zone=BAGISTO:100m inactive=60m;
fastcgi_cache_key  "$scheme$request_method$host$request_uri";
```

Then, inside the `server {}` block, decide what to skip and enable the cache on the PHP location:

```nginx
# Never cache dynamic / authenticated areas
set $skip_cache 0;
if ($request_method = POST)                                { set $skip_cache 1; }
if ($request_uri ~* "/(admin|checkout|cart|customer|api)") { set $skip_cache 1; }
if ($http_cookie ~* "bagisto_session")                     { set $skip_cache 1; }

location ~ ^/index\.php(/|$) {
    fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
    include fastcgi_params;

    fastcgi_cache        BAGISTO;
    fastcgi_cache_valid  200 301 302 10m;
    fastcgi_cache_bypass $skip_cache;
    fastcgi_no_cache     $skip_cache;
    add_header           X-FastCGI-Cache $upstream_cache_status;
}
```

::: warning Cache only public pages
Bagisto is a dynamic store — never cache the cart, checkout, customer account, admin, or API. The `$skip_cache` rules (and the session-cookie check) keep personalized responses uncached.
:::

## 🪶 LiteSpeed (OpenLiteSpeed)

To serve Bagisto with OpenLiteSpeed, point a virtual host at the `public/` directory and route everything through `index.php`. Below is a virtual host config file (e.g. `conf/vhosts/bagisto.conf`):

```text
docRoot                   $VH_ROOT/public
enableGzip                1

index {
  useServer               0
  indexFiles              index.php
}

scripthandler {
  add                     lsapi:lsphp php
}

rewrite {
  enable                  1
  rules                   <<<END_rules
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php [L]
END_rules
}

context / {
  allowBrowse             1
}
```

### ⚡ LiteSpeed Cache (LSCache)

OpenLiteSpeed ships the built-in **LSCache** module. Enable it at the server level (`WebAdmin → Server Configuration → Module → cache`, or in `httpd_config.conf`):

```text
module cache {
  enableCache             1
  qsCache                 1
  reqCookieCache          0
  expireInSeconds         300
  maxStaleAge             200
  maxCacheObjSize         10000000
  storagePath             /tmp/lscache
}
```

Then, in the vhost `rewrite` rules, mark public storefront pages as cacheable while excluding the dynamic areas:

```text
rewrite {
  enable                  1
  rules                   <<<END_rules
RewriteEngine On

# Do not cache dynamic / authenticated areas
RewriteRule ^/(admin|checkout|cart|customer|api)(/|$) - [E=Cache-Control:no-cache]

# Cache other GET pages for 5 minutes
RewriteCond %{REQUEST_METHOD} GET
RewriteRule .* - [E=Cache-Control:max-age=300]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php [L]
END_rules
}
```

::: warning Cache only public pages
As with any cache in front of a store, exclude the cart, checkout, customer, admin and API so personalized/authenticated responses are never served from cache.
:::

## 🔄 Apache

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

### ⚡ Apache Cache (mod_cache)

Enable the cache modules, then store cacheable responses on disk:

```bash
sudo a2enmod cache cache_disk
sudo systemctl restart apache2
```

Add the following inside your `<VirtualHost>` block:

```apache
<IfModule mod_cache.c>
    CacheQuickHandler off
    CacheRoot /var/cache/apache2/bagisto
    CacheEnable disk /
    CacheDirLevels 2
    CacheDirLength 1
    CacheDefaultExpire 300

    # Do not cache dynamic / authenticated areas
    CacheDisable /admin
    CacheDisable /checkout
    CacheDisable /cart
    CacheDisable /customer
    CacheDisable /api
</IfModule>
```

::: warning Cache only public pages
Exclude the cart, checkout, customer, admin and API (as above) so personalized/authenticated responses are never cached.
:::

## 🐳 Docker

If you would rather not configure a web server, the official images bundle one of the three servers above with MySQL, MariaDB or PostgreSQL, under Supervisor, and accept the same `.env` values as environment variables. They are described on the [Installation](./installation.md#method-1-using-docker-hub-recommended) page and in `docker/production/README.md` in the repository.

## ⚡ Optimization

Before deploying your application, make sure to run the following optimization commands:

```shell
php artisan optimize
```

Bagisto's own caches are on by default; check the [Cache Strategy](../advanced/cache-strategy.md) page for the environment keys to point them at Redis, and run a queue worker and the scheduler:

```shell
# Supervisor or systemd
php artisan queue:work --tries=3

# crontab
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

Without a worker, every mail, index update and import runs inside a web request; without the scheduler, catalog rule prices, exchange rates and invoice reminders do not update.

For additional optimization and security configurations, you may want to consider:

- Enabling SSL/TLS encryption and setting `APP_URL` to the `https://` origin
- Implementing proper firewall rules
- Setting up monitoring and logging
- Serving media from [S3 or R2](../advanced/file-storage.md) when running more than one web server

::: tip Performance
For better performance in production, consider enabling OPcache and configuring your PHP-FPM settings appropriately.
:::

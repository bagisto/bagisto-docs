# Deployment

This page is a numbered checklist for putting Bagisto into production, then web server configurations for Nginx, OpenLiteSpeed and Apache. Work through the steps in order, then read [Things to Watch](#things-to-watch) for the production traps and the notes for stores on more than one server.

## Production Checklist

### 1. Set the Environment

Start from `.env.example` and set at least these keys:

| Key | Production value | Why |
|---|---|---|
| `APP_ENV` | `production` | Laravel runs in production mode, and commands such as `migrate` ask for `--force` |
| `APP_DEBUG` | `false` | Hides error details; DebugBar and the full page cache's debug headers follow it |
| `APP_DEBUG_ALLOWED_IPS` | Empty | Any value makes `AppServiceProvider` call the DebugBar facade on every request, and a `--no-dev` install has no DebugBar |
| `APP_URL` | `https://your-domain` | Every generated link and image URL uses it |
| `APP_ADMIN_URL` | Your admin prefix | Prefix of every admin route; defaults to `admin` |
| `APP_TIMEZONE` | The store's timezone | `.env.example` sets `Asia/Kolkata` |
| `DB_*` | Your database | `DB_CONNECTION` is `mysql`, `mariadb` or `pgsql` |
| `CACHE_STORE`, `SESSION_DRIVER` | `redis` or `database` | `.env.example` uses `database` for both |
| `QUEUE_CONNECTION` | `redis` or `database` | `.env.example` sets `sync`, which runs every job inside the web request |
| `RESPONSE_CACHE_DRIVER` | `redis` or `file` | Where the full page cache stores pages; defaults to `file` |
| `MAIL_MAILER` | `bagisto-dynamic-smtp` | Sends mail with the SMTP settings saved in the admin, falling back to the `MAIL_*` values |
| `SESSION_SECURE_COOKIE` | `true` | The session cookie is only sent over HTTPS |

Remote storage and Elasticsearch are configured in the admin, with the `AWS_*`, `R2_*` and `ELASTICSEARCH_*` values as fallbacks; see [File Storage](../advanced/file-storage.md) and [Configure Elasticsearch](../performance/configure-elasticsearch.md).

### 2. Install the Code

```bash
composer install --no-dev --optimize-autoloader
php artisan storage:link
php artisan migrate --force
```

`--no-dev` leaves out development tools such as DebugBar and Pest, as the production Docker image does (`docker/production/nginx/Dockerfile`). `storage:link` creates `public/storage`, the link through which uploads are served.

On a new server with an empty database, seed the basic data after migrating:

```bash
php artisan db:seed --force
```

The seeders create the default channel, locales, currencies and attribute families, and the admin account `admin@example.com` / `admin123`; change that password straight away.

### 3. Make the Directories Writable

The web server's user needs write access to `storage/` and `bootstrap/cache/`. The production image, where that user is `www-data`, runs:

```bash
chown -R www-data:www-data /var/www/bagisto
chmod -R 775 storage bootstrap/cache
```

### 4. Ship the Front-End Assets

The Admin, Shop and Installer bundles are committed under `public/themes/*/default/build/`, so a stock install needs no npm step. Rebuild a package, or your own theme package, only when you have changed its assets:

```bash
cd packages/Webkul/Shop
npm install
npm run build
```

Make sure no `*-vite.hot` file exists in `public/` on the server; while one does, pages load their assets from a Vite dev server.

### 5. Cache the Framework

```bash
php artisan optimize
```

`optimize` runs `config:cache`, `event:cache`, `route:cache` and `view:cache`. Run it again after every deploy and every `.env` change. The production image's `php.ini` sets `opcache.validate_timestamps = 0`, so also restart PHP-FPM, or your server's PHP process, after deploying new code.

### 6. Run a Queue Worker

Keep a worker running under Supervisor or systemd, on both queues core uses:

```bash
php artisan queue:work --queue=default,broadcastable --tries=3
```

Mail, search indexing and imports run on `default`; the admin's order notifications are broadcast from `broadcastable` (`Webkul\Notification\Events\CreateOrderNotification::broadcastQueue()`). After each deploy, run `php artisan queue:restart` so the workers load the new code. See [Running Workers in Production](../advanced/queue-jobs-scheduling.md#running-workers-in-production).

### 7. Run the Scheduler

Add Laravel's scheduler to the server's crontab:

```bash
* * * * * cd /path/to/bagisto && php artisan schedule:run >> /dev/null 2>&1
```

`php artisan schedule:list` shows what it runs: the catalog rule and price indexes, overdue invoice reminders, campaign emails, Omnibus price snapshots and, when enabled in the admin, exchange rate updates. Without the scheduler, date-bound prices and catalog rules stop updating. See [Scheduled Tasks](../advanced/queue-jobs-scheduling.md#scheduled-tasks).

### 8. Index the Catalog

After importing products or restoring a database, rebuild the indexes:

```bash
php artisan indexer:index --mode=full
```

Without `--type`, the command rebuilds the `inventory`, `price`, `flat` and `search` indexes. Add `--type=search` to rebuild only the search index; see [Search Engines](../advanced/search-engines.md).

### 9. Check Caching and Health

- The full page cache stores pages in `RESPONSE_CACHE_DRIVER` and is managed in the admin; see [Configure Full Page Cache](../performance/configure-fpc.md) and [Cache Strategy](../advanced/cache-strategy.md).
- `bootstrap/app.php` registers Laravel's health route at `/up`, for load balancers and uptime monitors.
- `php artisan down` also puts every channel into maintenance mode, while the admin URL stays reachable. `php artisan up` reverses both.

### 10. Secure the Store

Work through [Best Security Practices](./best-security-practice.md).

## Web Server Configuration

Point the web server at the application's `public/` directory and send every request that isn't a file to `public/index.php`. Never move `index.php` to the project root: serving the project root exposes `.env` and the rest of the application to the internet.

`SecureHeaders` already adds `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection` and `Referrer-Policy` to every response from the application (see [Best Security Practices](./best-security-practice.md#what-bagisto-already-does)), so the configurations below don't repeat them. The official Docker images already bundle one of these three web servers; see [Production Image](./installation.md#production-image).

<a id="🌐-nginx"></a>

### Nginx

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /srv/example.com/public;

    client_max_body_size 100M;

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

- `client_max_body_size` matches the production image's `upload_max_filesize` of 100M; keep the two in step.
- Resized images under `/cache/` aren't files: `index.php` creates each one, so their `Cache-Control` comes from `imagecache.lifetime`, not from Nginx. See [Image Cache](../theme-development/image-cache-templates.md#how-cached-images-are-served).
- There is no `location` for `robots.txt` or `sitemap.xml`: Bagisto generates both for each channel, so they must reach `index.php`.
- Use the PHP-FPM socket of the PHP version you run: `php8.4-fpm.sock` for Bagisto 2.5, `php8.3-fpm.sock` or `php8.4-fpm.sock` for Bagisto 2.4.

<a id="🪶-litespeed-openlitespeed"></a>

### OpenLiteSpeed

Point a virtual host at the `public/` directory and route everything through `index.php`. This is a virtual host file, for example `conf/vhosts/bagisto.conf`:

```text
docRoot                   $VH_ROOT/public
enableGzip                1

index {
  useServer               0
  indexFiles              index.php
  autoIndex               0
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

<a id="🔄-apache"></a>

### Apache

Enable `mod_rewrite`, and let `public/.htaccess` handle routing:

```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

```apache
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/bagisto/public

    <Directory /var/www/html/bagisto/public>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

## Things to Watch

- **Don't cache pages in the web server.** Nginx's FastCGI cache, LiteSpeed's LSCache or Apache's `mod_cache` serve the first visitor's HTML, CSRF token included, to everyone; use the [full page cache](../performance/configure-fpc.md#things-to-watch) instead, or [Varnish](../performance/configure-varnish.md) for a reverse proxy.
- **Don't run `bagisto:install --no-interaction` in production.** Once `APP_ENV` is `production`, its `db:wipe` and `migrate:fresh` steps stop at their confirmation, which `--no-interaction` answers with no, so no tables are created. Use step 2 instead.
- **The production Docker image starts no queue worker and no scheduler.** Its Supervisor runs only the web server, PHP and the bundled database, so provide steps 6 and 7 yourself.
- **More than one web server** (see [Configure Load Balancing](../performance/configure-load-balancing.md)):
  - Keep media on Amazon S3 or Cloudflare R2, and give every server the same `private` disk, where imports keep their files ([Files](../performance/configure-load-balancing.md#files)).
  - Add the cron entry on one server only. Bagisto registers its tasks without `onOneServer()`, so every server with the entry runs each task again ([Queue and scheduler](../performance/configure-load-balancing.md#queue-and-scheduler)).
  - Set `APP_MAINTENANCE_DRIVER=cache` with a shared cache store. The default, `file`, keeps maintenance mode on one server, and saving a channel switches it the same way.

## Related Pages

- [Best Security Practices](./best-security-practice.md): harden the store before it goes live.
- [Performance](../performance/introduction.md): full page cache, Elasticsearch, Octane and load balancing.
- [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md): workers and scheduled tasks in depth.
- [Upgrade Guide](./upgrade-guide.md): moving a live store to a new release.

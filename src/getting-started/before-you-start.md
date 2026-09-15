# Before You Start

Bagisto is a Laravel application, so working on Bagisto means working in Laravel. This page lists what helps to know before you begin, and what your machine needs to run Bagisto.

## What to Know First

You can install Bagisto without deep Laravel experience, but extending it means writing Laravel code. These topics come up on almost every page.

### PHP

- [Core PHP concepts](https://www.php.net/manual/en/langref.php): variables, functions, arrays and control structures
- [Namespaces](https://www.php.net/manual/en/language.namespaces.php) and [autoloading](https://www.php.net/manual/en/language.oop5.autoload.php), including the [PSR-4 standard](https://www.php-fig.org/psr/psr-4/)
- [Object-oriented PHP](https://www.php.net/manual/en/language.oop5.php)
- [Composer](https://getcomposer.org/doc/01-basic-usage.md) for dependencies

### Laravel

- [Routing](https://laravel.com/docs/routing) and [controllers](https://laravel.com/docs/controllers)
- The [service container](https://laravel.com/docs/container) and [service providers](https://laravel.com/docs/providers)
- [Middleware](https://laravel.com/docs/middleware)
- [Events and listeners](https://laravel.com/docs/events)
- [Eloquent](https://laravel.com/docs/eloquent) and [migrations](https://laravel.com/docs/migrations)
- [Blade templates](https://laravel.com/docs/blade)

Bagisto 2.5 runs on Laravel 13; Bagisto 2.4 runs on Laravel 12. The concepts above are the same on both.

### Front End

You need these only when you change how the admin or the storefront looks:

- [Vue.js 3](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS](https://tailwindcss.com/docs/installation), version 4 (Bagisto 2.4 uses version 3)
- [Vite](https://laravel.com/docs/vite)

### Where to Ask

- [Bagisto on GitHub](https://github.com/bagisto/bagisto): code, issues and pull requests
- [Bagisto forums](https://forums.bagisto.com/): questions and community discussion

## System Requirements

| Software | Version | Notes |
|---|---|---|
| PHP | 8.4 | `composer.json` requires `^8.4`, and CI runs on 8.4. Bagisto 2.4 runs on PHP 8.3 or 8.4. |
| Composer | 2 | |
| Database | MySQL 8.0, MariaDB 10.11 or PostgreSQL 16 | CI tests all three. Bagisto 2.4 doesn't support PostgreSQL. |
| Web server | Nginx, Apache or OpenLiteSpeed | Not needed on your own machine, where `php artisan serve` is enough. |
| Node.js | 22 | Only to rebuild the admin, storefront or installer assets, to run the Playwright end-to-end tests, or to use `php artisan dev`. CI uses Node.js 22.13.1. |

Check what your machine has:

```bash
php -v
php -m
composer --version
node -v
```

### PHP Extensions

| Needed by | Extensions |
|---|---|
| `composer.json` | `calendar`, `curl`, `intl`, `mbstring`, `openssl`, `pdo`, `pdo_mysql`, `tokenizer` |
| The web installer's requirements screen (`packages/Webkul/Installer/src/Helpers/ServerRequirements.php`) | Also `ctype`, `dom`, `fileinfo`, `filter`, `gd`, `hash`, `json`, `pcre`, `session`, `xml` |
| Composer dependencies, which some PHP builds leave out | `bcmath`, `iconv`, `libxml`, `simplexml`, `xmlreader`, `xmlwriter`, `zip`, `zlib` |
| PostgreSQL | `pdo_pgsql` |
| `IMAGE_DRIVER=imagick` (the default driver in `config/images.php` is `gd`) | `imagick` |
| `REDIS_CLIENT=phpredis`, the value in `.env.example` | `redis`. Set `REDIS_CLIENT=predis` to use the `predis/predis` library instead, which Bagisto already requires. |

`composer install` stops and names any extension that is missing.

### PHP Settings

Bagisto doesn't check `php.ini` values. The production Docker image ships these, which are a sensible starting point for a store:

**File:** `docker/production/shared/php.ini`

```ini
memory_limit = 512M
upload_max_filesize = 100M
post_max_size = 110M
max_execution_time = 300
max_input_time = 300
```

### Optional Services

- **Elasticsearch 8** for catalog search on larger stores. Bagisto requires the `elasticsearch/elasticsearch` client `^8.10`. See [Configure Elasticsearch](../performance/configure-elasticsearch.md).
- **Redis** for the cache, session, queue and full page cache stores. See [Cache Strategy](../advanced/cache-strategy.md).
- **Amazon S3 or Cloudflare R2** for media files. See [File Storage](../advanced/file-storage.md).

## Next Step

[Install Bagisto](./installation.md).

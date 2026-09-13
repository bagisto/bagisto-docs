# Before You Start

Welcome to the Bagisto development journey! This guide will help you prepare your development environment and understand the foundational knowledge needed to work effectively with Bagisto, a powerful Laravel-based e-commerce platform.

Whether you're planning to customize an existing store, build new features, or contribute to the community, having the right setup and background knowledge will set you up for success.

## Getting Ready for Bagisto

To work efficiently with Bagisto (especially the latest versions), having a basic understanding of certain concepts will help you learn faster and customize with confidence.

### 🐘 PHP Basics and Best Practices

- [Core PHP concepts](https://www.php.net/manual/en/langref.php): variables, functions, arrays, and control structures
- [Namespaces](https://www.php.net/manual/en/language.namespaces.php) and [how autoloading works](https://www.php.net/manual/en/language.oop5.autoload.php)
- [PSR-4 autoloading guidelines](https://www.php-fig.org/psr/psr-4/)
- [Object-Oriented Programming (OOP) in PHP](https://www.php.net/manual/en/language.oop5.php)
- [Using Composer to manage dependencies](https://getcomposer.org/doc/01-basic-usage.md)

### ⚡ Key Laravel Knowledge for Bagisto

- [Defining routes](https://laravel.com/docs/routing) and [building controllers](https://laravel.com/docs/controllers)
- Understanding the [Service Container](https://laravel.com/docs/container) and [Dependency Injection](https://laravel.com/docs/providers)
- [Middleware](https://laravel.com/docs/middleware) and the request-handling flow
- [Events](https://laravel.com/docs/events), [listeners](https://laravel.com/docs/events#defining-listeners), and [model observers](https://laravel.com/docs/eloquent#observers)
- Working with [Eloquent ORM](https://laravel.com/docs/eloquent) and [database migrations](https://laravel.com/docs/migrations)
- [Blade templating essentials](https://laravel.com/docs/blade)

Bagisto 2.4 runs on Laravel 12; Bagisto 2.5 runs on Laravel 13. The concepts above are the same on both.

### 🎨 Helpful Extras for Advanced Customization

- [Tailwind CSS](https://tailwindcss.com/docs/installation) for modern, responsive styling (version 4 on Bagisto 2.5, version 3 on Bagisto 2.4)
- [Vue.js basics](https://vuejs.org/guide/introduction.html) for interactive features
- Asset bundling with [Vite](https://laravel.com/docs/vite)
- [Creating custom Laravel packages](https://laravel.com/docs/packages)

### 🔗 Learn and Connect

- [Bagisto GitHub Repository](https://github.com/bagisto/bagisto) – Browse code, report issues, and contribute
- [Bagisto Forums](https://forums.bagisto.com/) – Ask questions and join community discussions

::: tip 💡 Pro Tip
You can start with Bagisto even as a beginner, but familiarity with Laravel and Vue.js will make your development process much smoother.
:::

## System Requirements

Before diving into Bagisto development, ensure your system meets these requirements:

### 🖥️ Server Configuration

- **Server**: Apache 2, NGINX or OpenLiteSpeed
- **RAM**: 4GB or higher
- **Node**: 22 LTS or higher (needed only to build front-end assets and to run the Playwright tests)
- **PHP**: 8.4 for Bagisto 2.5; 8.3 or 8.4 for Bagisto 2.4. PHP 8.5 and above are not supported yet
- **Composer**: 2.5 or higher

### 🧩 PHP Extensions

`composer.json` requires `calendar`, `curl`, `intl`, `mbstring`, `openssl`, `pdo`, `pdo_mysql` and `tokenizer`. The installer additionally checks for `ctype`, `dom`, `fileinfo`, `filter`, `gd`, `hash`, `json`, `pcre`, `session` and `xml`.

- **php-intl**: Required for internationalization support
- **php-gd** (or **php-imagick**): Image processing; the driver is chosen with `IMAGE_DRIVER` on Bagisto 2.5
- **php-pdo_pgsql**: Only when running on PostgreSQL
- **Other standard Laravel extensions**: Check via `php -m` command

### ⚙️ PHP Configuration

Key settings in your `php.ini`:

```ini
memory_limit = 4G
max_execution_time = 360
date.timezone = Asia/Kolkata  # Change to your timezone
```

### 🗄️ Database

Bagisto is tested on three engines, and each is a first-class choice:

| Engine | Version | Availability |
|---|---|---|
| **MySQL** | 8.0 | Bagisto 2.4 and 2.5 |
| **MariaDB** | 10.11 | Bagisto 2.4 and 2.5 |
| **PostgreSQL** | 16 | Bagisto 2.5 |

- **Collation**: `utf8mb4_unicode_ci` on MySQL and MariaDB (recommended)
- The installer asks which engine to use and fills in the default port. See [Database compatibility](../advanced/database-compatibility.md) for what to keep in mind when writing code that must run on all three.

### 🔍 Optional services

- **Elasticsearch 8.x** for catalog search on larger stores; see [Configure Elasticsearch](../performance/configure-elasticsearch.md)
- **Redis** for the cache, session, queue and full page cache stores in production
- **Amazon S3 or Cloudflare R2** for media on Bagisto 2.5; see [File Storage](../advanced/file-storage.md)

::: tip Quick Check
Run `php -v` and `composer --version` to verify your PHP and Composer versions meet the requirements.
:::

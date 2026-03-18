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

- [Defining routes](https://laravel.com/docs/12.x/routing) and [building controllers](https://laravel.com/docs/12.x/controllers)
- Understanding the [Service Container](https://laravel.com/docs/12.x/container) and [Dependency Injection](https://laravel.com/docs/12.x/providers)
- [Middleware](https://laravel.com/docs/12.x/middleware) and the request-handling flow
- [Events](https://laravel.com/docs/12.x/events), [listeners](https://laravel.com/docs/12.x/events#defining-listeners), and [model observers](https://laravel.com/docs/12.x/eloquent#observers)
- Working with [Eloquent ORM](https://laravel.com/docs/12.x/eloquent) and [database migrations](https://laravel.com/docs/12.x/migrations)
- [Blade templating essentials](https://laravel.com/docs/12.x/blade)

### 🎨 Helpful Extras for Advanced Customization

- [Tailwind CSS](https://tailwindcss.com/docs/installation) for modern, responsive styling
- [Vue.js basics](https://vuejs.org/guide/introduction.html) for interactive features
- Asset bundling with [Vite](https://laravel.com/docs/12.x/vite)
- [Creating custom Laravel packages](https://laravel.com/docs/12.x/packages)

### 🔗 Learn and Connect

- [Bagisto GitHub Repository](https://github.com/bagisto/bagisto) – Browse code, report issues, and contribute
- [Bagisto Forums](https://forums.bagisto.com/) – Ask questions and join community discussions

::: tip 💡 Pro Tip
You can start with Bagisto even as a beginner, but familiarity with Laravel and Vue.js will make your development process much smoother.
:::

## System Requirements

Before diving into Bagisto development, ensure your system meets these requirements:

### 🖥️ Server Configuration

- **Server**: Apache 2 or NGINX
- **RAM**: 4GB or higher
- **Node**: 23.10.0 LTS or higher
- **PHP**: 8.3 or higher
- **Composer**: 2.5 or higher

### 🧩 PHP Extensions

- **php-intl**: Required for internationalization support
- **php-gd**: Essential for image processing and manipulation
- **Other standard Laravel extensions**: Check via `php -m` command

### ⚙️ PHP Configuration

Key settings in your `php.ini`:

```ini
memory_limit = 4G
max_execution_time = 360
date.timezone = Asia/Kolkata  # Change to your timezone
```

### 🗄️ Database

- **MySQL**: Version 8.0.32 or higher
- **Collation**: `utf8mb4_unicode_ci` (recommended)

::: tip Quick Check
Run `php -v` and `composer --version` to verify your PHP and Composer versions meet the requirements.
:::

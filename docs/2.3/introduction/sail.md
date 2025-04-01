# Sail

[[toc]]

## Introduction

[Laravel Sail](https://laravel.com/docs/11.x/sail) is a lightweight CLI tool that simplifies the setup and management of Laravel's Docker development environment. It provides pre-configured Docker containers for services like PHP, MySQL, Redis, and Mailhog, allowing developers to quickly create a local environment for Laravel applications without manual configuration. Sail supports multiple PHP versions and is ideal for consistent and isolated local development, making it easier to run and manage Laravel-based projects, including Bagisto.

## Installing Dependencies

To install Composer dependencies on a fresh clone of your project, the default PHP version is 8.3. However, you may switch to a Bagisto-supported PHP version by using one of the following:

- `laravelsail/php81-composer:latest`
- `laravelsail/php82-composer:latest`
- `laravelsail/php83-composer:latest`

When changing the PHP version, remember to update the Dockerfile context in the `docker-compose` file accordingly. For more details, refer to the [Laravel Sail documentation on PHP versions](https://laravel.com/docs/11.x/sail#sail-php-versions).

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer require laravel/sail --dev --ignore-platform-reqs
```

If you are working on an existing project with a dependency manager installed, you can easily set up Laravel Sail by running the following command:

```bash
composer require laravel/sail --dev
```

## Available Services

The docker-compose file includes the following services for Bagisto:
- Laravel
- MySQL
- Redis
- Elasticsearch
- Kibana
- MailPit

For detailed information about these services, please refer to the [Laravel Sail Documentation](https://laravel.com/docs/11.x/sail#introduction).

## Environment Configuration

Before starting Bagisto, you'll need to configure the following services in your `.env` file:

### MySQL Configuration
These credentials will be used to create the database when the container starts for the first time:
```env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=bagisto
DB_USERNAME=sail
DB_PASSWORD=password
DB_PREFIX=
```

### Redis Configuration
```env
REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379
```

### MailPit Configuration
```env
MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
```

### Elasticsearch Configuration
```env
ELASTICSEARCH_HOST=http://elasticsearch:9200
```

## Building and Running Containers

1. Build the container (use `--no-cache` for a fresh build):
```bash
vendor/bin/sail build --no-cache
```

2. Start the containers in detached mode:
```bash
vendor/bin/sail up -d
```

## Installing Bagisto

If this is your first time running the container, you'll need to install Bagisto:
```bash
vendor/bin/sail artisan bagisto:install
```

During the installation process, you'll be prompted for various credentials. The system will suggest default values based on your `.env` file configurations. For consistency, it's recommended to use the same credentials you specified in your `.env` file, even though this may seem redundant. Because some environment variables are used to create services (like MySQL), and we are now reconnecting with the following credentials.
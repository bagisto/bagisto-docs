# Installation

This page installs Bagisto with Composer and gets it running on your machine. Check the [system requirements](./before-you-start.md#system-requirements) first, and create an empty database for the store. Git, the web installer and Docker are covered after the main path, under [Other Ways to Install](#other-ways-to-install) and [Run with Docker](#run-with-docker).

<a id="🚀-quick-installation-recommended"></a>

## Install with Composer

1. Create the project:

   ```bash
   composer create-project bagisto/bagisto my-bagisto-store
   ```

   Composer installs the latest stable release, copies `.env.example` to `.env` and generates `APP_KEY`. To install a particular release line, add a version constraint, for example `composer create-project bagisto/bagisto my-bagisto-store "2.5.*"`.

2. Go to the project directory:

   ```bash
   cd my-bagisto-store
   ```

3. Run the installer and answer its questions:

   ```bash
   php artisan bagisto:install
   ```

   When it asks for the application URL, enter `http://localhost:8000`, the address `php artisan serve` uses in step 4.

4. Start the development server:

   ```bash
   php artisan serve
   ```

   Open the storefront at `http://localhost:8000` and the admin at `http://localhost:8000/admin`, with the admin account you created. [Run Bagisto Locally](#run-bagisto-locally) has the details.

::: danger Fresh Installs Only
`bagisto:install` runs `db:wipe` and `migrate:fresh`, which delete everything in the database. Never run it on a store that has data; upgrades use `php artisan migrate`, as the [Upgrade Guide](./upgrade-guide.md) describes.
:::

### What the Installer Asks

- **Application:** name, URL, timezone, default locale and currency, and the locales and currencies your channels allow. The URL offered is `APP_URL` from `.env`, which is `http://localhost` in a new project.
- **Database:** MySQL, MariaDB or PostgreSQL, host, port, database name, an optional table prefix of up to four letters, digits or underscores, username and password. The host and port offered come from `.env`, so the port stays `3306` unless you change it; enter `5432` for PostgreSQL.
- **Admin account:** name, email, and a password of at least six characters.
- **Sample products:** whether to add the demo catalog.

::: details What the Installer Does with Your Answers
The installer writes your answers to `.env`, generates the application key, wipes the database and runs every migration, seeds the channel, locales, currencies and other basic data, links the `storage/` directory, creates the admin account, adds and indexes the sample products if you asked for them, and clears the caches. It prints the admin URL and the credentials, and last asks whether to open the Bagisto Cloud hosting page in your browser.
:::

## Run Bagisto Locally

| Page | Address |
|---|---|
| Storefront | `http://localhost:8000` |
| Admin | `http://localhost:8000/admin`, which redirects to `/admin/login` |
| Customer registration | `http://localhost:8000/customer/register` |

- **`APP_URL`** in `.env` must equal the address you open, including the port; image URLs and links are built from it. The admin prefix comes from `APP_ADMIN_URL`.
- **No npm step.** The admin, storefront and installer assets are already built and committed under `public/themes/`. To work on those assets, see [Build Commands](../architecture/frontend.md#build-commands).
- **Queued work runs inline.** `.env.example` sets `QUEUE_CONNECTION=sync`, so mail and search indexing run inside the request. That's fine on your machine; a production store needs a queue worker, as [Deployment](./deployment.md) explains.
- **Prefer `php artisan serve` to `php artisan dev`** until you have set up Octane; see [Things to Watch](#use-php-artisan-dev).

## Other Ways to Install

| Method | Use it when |
|---|---|
| [Install Without Prompts](#install-without-prompts) | You script the install, for example in CI |
| [Install Step by Step](#install-step-by-step) | You want to run each installer step yourself |
| [Install from Git](#install-from-git) | You want to track releases or contribute to Bagisto |
| [Web installer](#use-the-web-installer) | You prefer to answer the setup questions in a browser |
| [Docker](#run-with-docker) | You want a running store without installing PHP, or a containerized development setup |

### Install Without Prompts

With Laravel's global `--no-interaction` option, the installer asks nothing:

```bash
php artisan bagisto:install --no-interaction --demo-samples
```

| Option | Effect |
|---|---|
| `-n`, `--no-interaction` | Uses the settings already in `.env`, creates the default admin account (`admin@example.com` / `admin123`) and skips sample products |
| `--demo-samples` | Adds and indexes the sample products. In interactive mode, it adds them whatever you answer. |

Set the `DB_*` values in `.env` first. [Artisan Commands](../advanced/artisan-commands.md#bagisto-install) has the full reference.

::: warning Not with `APP_ENV=production`
In production, `db:wipe` and `migrate:fresh` ask for confirmation, and `--no-interaction` answers no. The installer then carries on without creating any tables. Install before you set `APP_ENV=production`, or follow the [production checklist](./deployment.md#production-checklist) on a production server.
:::

### Install Step by Step

Configure `.env`, then run:

```bash
php artisan key:generate
php artisan migrate:fresh --seed
php artisan storage:link
php artisan optimize:clear
```

The seeders create the default channel, locales, currencies and attribute families, and the admin account `admin@example.com` / `admin123`, but no products. To add the sample catalog:

```bash
php artisan db:seed --class="Webkul\Installer\Database\Seeders\ProductTableSeeder"
php artisan indexer:index --mode=full
```

### Install from Git

Clone the repository, check out the release you want, and install the dependencies:

```bash
git clone https://github.com/bagisto/bagisto.git my-bagisto-store
cd my-bagisto-store
git tag --list
git checkout <release-tag>
composer install
php artisan bagisto:install
```

A clone has no `.env` file; `bagisto:install` copies `.env.example` and generates the key itself. You can also [download a release](https://bagisto.com/en/download/) from the Bagisto website and run `composer install` in it.

### Use the Web Installer

Until Bagisto is installed, `Webkul\Installer\Http\Middleware\CanInstall` redirects every request to `/install`. Bagisto counts as installed once `storage/installed` exists, or once `.env` exists and the database's `admins` table has at least one row.

1. Get the code with [Composer](#install-with-composer) (steps 1 and 2), or with [Git](#install-from-git) followed by `cp .env.example .env` and `php artisan key:generate`. Don't run `bagisto:install`. The installer's pages need an application key before they can load.
2. Serve the `public/` directory, with your web server or with `php artisan serve`.
3. Open the site in a browser. The installer checks the PHP version and extensions, asks for the application and database settings, runs the migrations and seeders, optionally adds sample products, and creates the admin account.

After installation, `/install` redirects to the storefront.

<a id="🐳-docker-installation"></a>

## Run with Docker

### Production Image

The official images are built from `docker/production/` in the Bagisto repository. Each one bundles a web server, PHP 8.4, a database and an installed store with sample products:

```bash
docker run -d --name bagisto -p 80:80 webkul/bagisto:latest
```

Open `http://localhost`, and the admin at `http://localhost/admin/login` with `admin@example.com` / `admin123`. Change that password on any store other people can reach.

| Web server | MySQL 8.0 | MariaDB 10.11 | PostgreSQL 16 |
|---|---|---|---|
| Nginx and PHP-FPM | `latest`, `latest-nginx`, `latest-nginx-mysql` | `latest-nginx-mariadb` | `latest-nginx-postgres` |
| Apache and mod_php | `latest-apache`, `latest-apache-mysql` | `latest-apache-mariadb` | `latest-apache-postgres` |
| OpenLiteSpeed and lsphp | `latest-litespeed`, `latest-litespeed-mysql` | `latest-litespeed-mariadb` | `latest-litespeed-postgres` |

To pin a release, replace `latest` with its version, for example `webkul/bagisto:2.5.0-nginx-postgres`. To use another host port, set `APP_URL` to match:

```bash
docker run -d --name bagisto -p 8080:80 -e APP_URL=http://localhost:8080 webkul/bagisto:latest
```

The container reads `APP_URL`, `APP_KEY`, `APP_TIMEZONE`, `APP_LOCALE`, `APP_CURRENCY`, `APP_ADMIN_URL` and the `DB_*` variables from the environment. Set `DB_HOST` to anything other than `127.0.0.1` or `localhost` to use your own database instead of the bundled one. Without volumes, the data is lost when the container is removed; [`docker/production/README.md`](https://github.com/bagisto/bagisto/blob/master/docker/production/README.md) lists the volumes to mount and every variable.

### Docker Compose Workspace

The [bagisto-docker](https://github.com/bagisto/bagisto-docker) repository is a development workspace with a choice of Nginx, OpenLiteSpeed or Apache runtimes, MySQL, phpMyAdmin and Mailpit. Its setup script installs Bagisto 2.4.7 and its runtimes run PHP 8.3, so it can't run Bagisto 2.5 yet. For a containerized Bagisto 2.5, use the [production image](#production-image) or [Laravel Sail](#laravel-sail).

<a id="⛵-laravel-sail-installation"></a>

### Laravel Sail

Bagisto's `docker-compose.yml` is a [Laravel Sail](https://laravel.com/docs/sail) file with MySQL 8.0, Redis, Elasticsearch, Kibana and Mailpit. Sail itself isn't installed with Bagisto.

1. Install Sail. On a machine without PHP, run Composer in a container from the project directory:

   ```bash
   docker run --rm \
       -u "$(id -u):$(id -g)" \
       -v "$(pwd):/var/www/html" \
       -w /var/www/html \
       laravelsail/php84-composer:latest \
       composer require laravel/sail --dev --ignore-platform-reqs
   ```

   With PHP and Composer installed, run `composer require laravel/sail --dev` instead.

2. In `docker-compose.yml`, point the `laravel.test` build at Sail's PHP 8.4 runtime. The file names `./vendor/laravel/sail/runtimes/8.3`, and Bagisto needs PHP 8.4:

   ```yaml
   services:
       laravel.test:
           build:
               context: ./vendor/laravel/sail/runtimes/8.4
   ```

3. Point `.env` at the Sail services:

   ```properties
   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=bagisto
   DB_USERNAME=sail
   DB_PASSWORD=password

   REDIS_HOST=redis

   MAIL_HOST=mailpit
   MAIL_PORT=1025
   ```

4. Build and start the containers, then install Bagisto:

   ```bash
   vendor/bin/sail build --no-cache
   vendor/bin/sail up -d
   vendor/bin/sail artisan bagisto:install
   ```

The store is at `http://localhost`, Mailpit at `http://localhost:8025` and Kibana at `http://localhost:5601`. Stop the containers with `vendor/bin/sail down`.

::: warning Elasticsearch Version
The Sail file runs Elasticsearch 7.17, while Bagisto's Elasticsearch client is version 8. Change the `elasticsearch` and `kibana` images to an 8.x release before you use Elasticsearch search; see [Configure Elasticsearch](../performance/configure-elasticsearch.md).
:::

<a id="📱-mobile-app-installation"></a>

## Mobile App

Bagisto's open-source mobile app is a separate Flutter project. It talks to the store through the GraphQL API of the [bagisto-api](https://github.com/bagisto/bagisto-api) package, which you install in Bagisto first. The app's [README](https://github.com/bagisto/opensource-ecommerce-mobile-app) lists the Flutter, Dart, Android Studio and Xcode versions it needs, and where to set your store's endpoint.

<a id="🛠️-common-troubleshooting"></a>

## Troubleshooting

- **Pages or assets return 404.** The web server's document root must be `public/`, not the project root.
- **Images are broken.** `APP_URL` must match the address you open, including the scheme and port. Also check that `public/storage` exists; `php artisan storage:link` creates it as a link to `storage/app/public`, where uploads are stored.
- **Changes to `.env` have no effect.** Clear the cached configuration with `php artisan optimize:clear`.
- **Mixed content warnings behind HTTPS.** `bootstrap/app.php` already trusts every proxy (`$middleware->trustProxies(at: '*')`), so Laravel follows the `X-Forwarded-Proto` and `X-Forwarded-Host` headers your proxy or load balancer sends. Set `APP_URL` to the `https://` address, and make sure the proxy sends those headers.

  If the proxy can't send them, force HTTPS URLs in the `boot()` method of `app/Providers/AppServiceProvider.php`, and import `Illuminate\Support\Facades\URL` at the top of the file:

  **File:** `app/Providers/AppServiceProvider.php`

  ```php
  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
      ParallelTesting::setUpTestDatabase(function (string $database, int $token) {
          Artisan::call('db:seed');
      });

      if ($this->app->isProduction()) {
          URL::forceScheme('https');
      }
  }
  ```

## Things to Watch

<a id="use-php-artisan-dev"></a>

- **`php artisan dev` needs setup first.** Laravel 13's `dev` command starts three processes, listed by `php artisan dev:list`:
  - `server`: `php artisan octane:start --watch`, registered by `laravel/octane`, which Bagisto requires, in place of `php artisan serve`. It needs an Octane server installed and configured (RoadRunner, unless `OCTANE_SERVER` names another), and `--watch` needs Node.js and the `chokidar` package; see [Configure Laravel Octane](../performance/configure-laravel-octane.md).
  - `queue`: `php artisan queue:listen --tries=1 --timeout=0`.
  - `vite`: the root `npm run dev`, which runs the Laravel skeleton's `vite.config.js` and doesn't build the admin or storefront assets. For those, run `npm run dev` inside `packages/Webkul/Shop` or `packages/Webkul/Admin`.

  `dev` starts the processes through `@laravel/multiplex` (`concurrently` on Windows) with your package manager (`npx` for npm), so Node.js must be installed.

## Next Step

[Architecture Overview](../architecture/overview.md) maps where everything lives in your new project. When the store is ready to go live, follow [Deployment](./deployment.md).

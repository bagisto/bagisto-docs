# Common Pitfalls

The problems Bagisto developers run into again and again, each as the symptom, its cause in the code, and the fix. To investigate something that isn't listed here, start with [Debugging Tips](./debugging.md).

## Installation and Setup

### PHP Version and Extensions

- **Symptom:** `composer install` fails with a platform error, or every request stops with a PHP version error.
- **Cause:** Bagisto 2.5 requires PHP 8.4 (`"php": "^8.4"` in `composer.json`; the locked dependencies need 8.4.1 or later), while 2.4 accepts 8.3 or 8.4. A second, older PHP binary often comes first on the `PATH`. `composer.json` also requires the `calendar`, `curl`, `intl`, `mbstring`, `openssl`, `pdo`, `pdo_mysql` and `tokenizer` extensions, and a PostgreSQL store needs `pdo_pgsql`.
- **Fix:** Check the PHP that Composer runs with `php -v` and `composer check-platform-reqs`, which lists anything missing.

### Storage Link and `APP_URL`

- **Symptom:** Channel logos, category images or theme section images under `/storage` are broken; or, often after the store moves to another domain, only channel logos and category images point at the wrong host.
- **Cause:** Every file served from `/storage` needs the `public/storage` link to `storage/app/public`. Channel logos and category images are also built with `Storage::url()`, which takes its host from `APP_URL` (the `public` disk's `url` in `config/filesystems.php`), so it must match the URL you browse, port included. Theme section images and resized images under `/cache/…` use the request's own host.
- **Fix:** Run `php artisan storage:link` and correct `APP_URL`; `php artisan about` shows the URL and whether the link exists.

### Running `bagisto:install` on an Existing Store

- **Symptom:** Every order, customer and product is gone.
- **Cause:** `php artisan bagisto:install` sets up a new store: it generates a new `APP_KEY` and runs `db:wipe` and `migrate:fresh` before seeding.
- **Fix:** Upgrade with `php artisan migrate`, never `bagisto:install`. See [Upgrade Guide](../getting-started/upgrade-guide.md).

### `migrate:fresh` Without Seeding

- **Symptom:** The storefront and the admin stop working after `php artisan migrate:fresh`.
- **Cause:** The tables are empty: no channel, locale, currency, customer group or admin, which the storefront and the admin read on every request.
- **Fix:** Run `php artisan db:seed`; the application's `DatabaseSeeder` runs the installer's seeders.

## Database

### Code That Only Ever Ran on MySQL

- **Symptom:** A package that works on MySQL fails on PostgreSQL with type, grouping or syntax errors, or searches that no longer match.
- **Cause:** Bagisto runs on MySQL 8.0, MariaDB 10.11 and PostgreSQL 16 (2.4 has no PostgreSQL support). PostgreSQL has a case-sensitive `LIKE`, truncates `CAST(… AS CHAR)` to one character, rejects ungrouped selected columns and empty strings in typed columns, and returns booleans as `true` and `false`.
- **Fix:** Route database-specific SQL through `db_grammar()` and cast boolean columns; see [Database Compatibility](./database-compatibility.md).

### Migration Order

- **Symptom:** A migration in your package fails to add a foreign key to a core table.
- **Cause:** Laravel sorts the migrations of every package into one list by file name, whichever service provider loaded them.
- **Fix:** Give the migration a timestamp later than the core migration that creates the table.

### Switching File Storage

- **Symptom:** After choosing Amazon S3 or Cloudflare R2 in the admin's File Management configuration, existing product and category images are missing.
- **Cause:** New uploads go to the new disk, and the storefront looks for existing files there too, but nothing copies them.
- **Fix:** Copy `storage/app/public` to the bucket before switching; see [File Storage](./file-storage.md).

## Package Development

### Editing Core Packages

- **Symptom:** Your change disappears or conflicts on the next Bagisto update.
- **Cause:** It was made inside `packages/Webkul/<Package>` or `vendor/`.
- **Fix:** Put it in your own package: override the view from a theme, listen to the event, merge configuration from your service provider, or replace the model through Concord. See [Event Listeners](./event-listeners.md) and [Models](../package-development/models.md).

### Registering a Package

- **Symptom:** The package's classes aren't found, or its routes, views, translations, migrations or models never load.
- **Cause:** One of its three registrations is missing: the namespace in `autoload` in the root `composer.json` (classes), the service provider in `bootstrap/providers.php` (routes, views, translations, migrations), or, for a package with models, the `ModuleServiceProvider` in `config/concord.php` (models).
- **Fix:** Add the missing one, and run `composer dump-autoload` after editing `composer.json`. See [Package Development](../package-development/getting-started.md) and [Models](../package-development/models.md#the-manifest-file).

### Admin Routes Need an ACL Entry

- **Symptom:** A restricted admin role gets `401` on your route, while the default administrator can open it.
- **Cause:** The `admin` middleware, `Webkul\User\Http\Middleware\Bouncer`, refuses any admin route that isn't mapped in an `acl.php` and isn't in its short list of routes every admin may use. It applies to every role whose permission type isn't **All**, so testing as the default administrator hides the problem.
- **Fix:** Add an ACL entry for every admin route, and use the same key with `bouncer()->hasPermission()` in controllers and views; see [Access Control List](../package-development/access-control-list.md).

### Saving a Product Outside the Admin Controller

- **Symptom:** A product written from your own code keeps its old price, stock or page on the storefront.
- **Cause:** The admin's `ProductController` dispatches `catalog.product.update.before` and `catalog.product.update.after` around its save, and the listeners on the `after` event refresh the flat row, queue the indexing, reindex catalog rule prices, record the Omnibus price and clear the page and catalog API caches. Eloquent, the query builder and even `ProductRepository::update()` skip all of that.
- **Fix:** Fire the same pair around your write:

  ```php
  Event::dispatch('catalog.product.update.before', $id);

  $product = $this->productRepository->update($data, $id);

  Event::dispatch('catalog.product.update.after', $product);
  ```

  `php artisan event:list --event=catalog.product.update.after` lists the listeners.

## Front End and Assets

### Assets Not Rebuilt

- **Symptom:** A CSS, JavaScript or Vue change doesn't show in the browser.
- **Cause:** Admin, Shop and Installer each have their own `vite.config.js` and npm scripts; the Admin and Shop builds are written to `public/themes/admin/default/build` and `public/themes/shop/default/build`.
- **Fix:** Run `npm run build` from that package's directory, such as `packages/Webkul/Shop`, or `npm run dev` to serve the assets from Vite's development server while you work.

### Missing Tailwind Classes

- **Symptom:** A Tailwind class, or an icon, renders with no style.
- **Cause:** Tailwind generates only the classes it finds in the files it scans. The `source("../../../")` argument at the top of the Admin and Shop `app.css` covers that package's `src/` directory, so a class used only in a theme under `resources/themes` or another package isn't generated, and neither is a class name built at runtime. Icon classes are declared in `app.css` too.
- **Fix:** Add an `@source` line for the extra path, or an `@source inline(...)` entry for runtime class names, then rebuild. On 2.4 (Tailwind 3) use the `content` array and `safelist` in the package's `tailwind.config.js`.

## Caching

### Stale Configuration After `.env` Changes

- **Symptom:** An edit to `.env` or `config/` has no effect.
- **Cause:** `php artisan config:cache` has been run, and the cached configuration wins over `.env` until it's cleared.
- **Fix:** Run `php artisan optimize:clear`.

### Full Page Cache Serving Old Pages

- **Symptom:** A guest sees an old storefront page that a signed-in customer doesn't.
- **Cause:** The change fired no event the full page cache listens for, such as an import or a direct database write. Signed-in customers are never served cached pages (`packages/Webkul/FPC/src/CacheProfiles/FullPageCacheProfile.php`), so the problem only reproduces as a guest.
- **Fix:** Run `php artisan responsecache:clear`. `--url` forgets only one channel, locale and currency variant; see [Configure Full Page Cache](../performance/configure-fpc.md#clear-the-cache).

## Queues

### The Sync Queue in Production

- **Symptom:** Product saves are slow, and mail and indexing hold up the admin's requests.
- **Cause:** `.env.example` sets `QUEUE_CONNECTION=sync`, which runs every job inside the request, so a product save runs its inventory, price and search indexing before the page returns.
- **Fix:** Set `QUEUE_CONNECTION` to `database` or `redis` and run a worker on both queues core uses, `php artisan queue:work --queue=default,broadcastable`. See [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md#running-workers-in-production).

## Mail

### SMTP Settings from the Admin Are Ignored

- **Symptom:** Mail doesn't use the SMTP host and credentials saved in the admin's email configuration.
- **Cause:** Those settings (`emails.configure.smtp.*`) are read only by the `bagisto-dynamic-smtp` mailer that `Webkul\Core\Providers\DynamicMailServiceProvider` registers, which falls back to `config('mail.mailers.smtp')` for any empty setting. `MAIL_MAILER` in `.env` naming another mailer bypasses it, and the admin's configuration screen shows a notice saying so.
- **Fix:** Set `MAIL_MAILER=bagisto-dynamic-smtp`, as `.env.example` does.

## Admin and Debugging

### Changing the Admin URL

- **Symptom:** The admin still answers on the old prefix, or returns `404` on the new one.
- **Cause:** `APP_ADMIN_URL` sets the prefix of every admin route (`config('app.admin_url')`, `admin` by default), and the configuration and routes are cached.
- **Fix:** Run `php artisan optimize:clear` after changing it. The storefront maintenance page never applies under that prefix.

### Setting `APP_DEBUG_ALLOWED_IPS`

- **Symptom:** Every request and artisan command stops with a class-not-found error for the old Debugbar facade.
- **Cause:** Any value in `APP_DEBUG_ALLOWED_IPS` makes `AppServiceProvider` call a facade that the installed debug bar no longer ships.
- **Fix:** Leave it empty and control the debug bar with `APP_DEBUG` and `DEBUGBAR_ENABLED`; see [Debugging Tips](./debugging.md#when-it-appears).

## Search

### Search Index Out of Date

- **Symptom:** Elasticsearch results, price sorting or filters don't match the catalog after attribute, category or customer group changes, or after the nightly price reindex.
- **Cause:** A document holds the product as it was last indexed. Attribute, category and customer group changes and the scheduled price reindexes don't rewrite it; see [Search Engines](./search-engines.md#things-to-watch).
- **Fix:** Run `php artisan indexer:index --type=search --mode=full` (`--type=elastic` on 2.4); it does nothing unless an external search engine is enabled. For connection problems, see [Configure Elasticsearch](../performance/configure-elasticsearch.md#troubleshooting).

## Channels and Locales

### Settings Are per Channel and Locale

- **Symptom:** A setting saved in the admin reads as its default in code, or on another channel.
- **Cause:** Many settings are saved per channel, per locale, or both, and `core()->getConfigData()` reads the current channel and locale, falling back to the field's default when nothing is saved there.
- **Fix:** Save the setting for the channel and locale that reads it, or pass the channel and locale codes to `core()->getConfigData()`.

### Maintenance Mode Is One Switch Plus a Flag per Channel

- **Symptom:** A channel's maintenance page doesn't appear, or saving one channel brings every channel back up.
- **Cause:** The storefront shows its maintenance page only when Laravel's maintenance mode is on **and** the current channel's `is_maintenance_on` is set (`Webkul\Core\Http\Middleware\PreventRequestsDuringMaintenance`); the admin URL and the channel's allowed IPs always get through. `php artisan down` sets the flag on every channel and turns maintenance mode on; `php artisan up` clears both. Saving a channel turns maintenance mode on or off to match that channel alone, so saving one with maintenance off brings back every channel.
- **Fix:** After changing maintenance on one channel, check the others and confirm the state with `php artisan about`. On more than one web server, share the state with `APP_MAINTENANCE_DRIVER=cache`; see [Configure Load Balancing](../performance/configure-load-balancing.md).

## Tests

### Tests See Your Store's Data

- **Symptom:** A test that counts rows or reads the first row of a listing fails, or a test fails with "table not found".
- **Cause:** The Pest suite runs against the database in `.env`, inside a transaction per test, and a normal run never migrates.
- **Fix:** Assert on the records the test created, and run `php artisan migrate` first when your package adds a table; see [Testing with Pest](./testing-with-pest.md#the-test-database).

### Stale Parallel Test Databases

- **Symptom:** `vendor/bin/pest --parallel` fails after a seeder or an existing migration changed, although the code is right.
- **Cause:** The `_test_N` databases are kept between runs and only migrated forward.
- **Fix:** Run `vendor/bin/pest --parallel --recreate-databases`.

### The Translations Check Fails for a New Package

- **Symptom:** `php artisan bagisto:translations:check` reports missing locale folders for your package, or never checks it.
- **Cause:** It expects every supported locale folder in each package directly under `packages/Webkul`, and ignores packages anywhere else.
- **Fix:** Add every locale folder; see [Coding Standards](./coding-standards.md#translations).

## Related Pages

- [Debugging Tips](./debugging.md): the tools for a problem that isn't listed here.
- [Database Compatibility](./database-compatibility.md): writing SQL that runs on MySQL, MariaDB and PostgreSQL.
- [Configure Full Page Cache](../performance/configure-fpc.md): the page cache's store, checks and clearing.

# Upgrade Guide

Bagisto is a complete Laravel application, not a package inside one. Upgrading means bringing your copy of the application files up to the new release, reconciling the files you changed, installing the new dependencies and running the migrations. The Bagisto repository keeps the full procedure and every breaking change in `UPGRADE.md`; this page tells you which copy to read, what to prepare, and which changes reach your own packages and themes.

::: tip Full Upgrade Procedure
Follow [`UPGRADE.md`](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md) to upgrade from 2.4 to 2.5. It has the commands, the configuration files to bring across, and the code changes for each breaking change.
:::

## Which Document to Read

Each `UPGRADE.md` covers one release line. From an older release, work through them in order.

| Upgrading | Read |
|---|---|
| 2.4 to 2.5 | [`UPGRADE.md` on `master`](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md) |
| 2.3 to 2.4 | [`UPGRADE.md` on the `2.4` branch](https://github.com/bagisto/bagisto/blob/2.4/UPGRADE.md) |
| 2.2 to 2.3 | [`UPGRADE.md` on the `2.3` branch](https://github.com/bagisto/bagisto/blob/2.3/UPGRADE.md) |
| 2.1 to 2.2 | [`UPGRADE.md` on the `2.2` branch](https://github.com/bagisto/bagisto/blob/2.2/UPGRADE.md) |

The `CHANGELOG.md` on the same branch lists what changed in each release of that line.

## Before You Upgrade

- **Back up the database and `storage/`.** Some migrations rewrite existing rows, and their `down()` methods don't restore the old values.
- **Check that `APP_URL` is the live store's address.** A migration keeps theme section links portable only for links on that host.
- **Rehearse on a copy of the store**, with a copy of its data, before you upgrade production.
- **Plan for maintenance mode** while the migrations run; see [Before You Start](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#before-you-start).
- **List your custom packages and themes**, and check each one against the changes below. Edits inside `packages/Webkul/` or `vendor/` are overwritten, so move them into a package, a theme or an event listener first; see [Extension Points at a Glance](../architecture/overview.md#extension-points-at-a-glance).

::: danger Never Run the Installer on an Existing Store
`php artisan bagisto:install` runs `db:wipe` and then `migrate:fresh`, which destroys your data. An upgrade only runs `php artisan migrate`.
:::

<a id="upgrading-from-v2-4-to-v2-5"></a>

## Changes That Affect Packages and Themes

These 2.5 changes most often need work in a custom package or theme; `UPGRADE.md` has the migration steps.

- **Laravel 13 and PHP 8.4.** Several dependencies moved to a new major version, and PHP 8.4 deprecates implicitly nullable parameters, so write `?string $locale = null`. See [System Requirements](./before-you-start.md#system-requirements).
- **Search engines.** Search runs through `SearchEngineManager`: the Elasticsearch repository and jobs were replaced, the settings moved to `search_engines.*` codes, and `indexer:index --type=elastic` is now `--type=search`. See [Search Engines](../advanced/search-engines.md). A store with Elasticsearch credentials in `.env` must re-enter them in the admin after migrating; see [Configure Elasticsearch](../performance/configure-elasticsearch.md#things-to-watch).
- **Relocated configuration codes.** `sales.checkout.my_cart.summary` is now `sales.checkout.mini_cart.summary`, and `catalog.products.storefront.buy_now_button_display` is now `catalog.products.product_view_page.buy_now_button_display`. A migration moves stored values, but code reading the old codes must change; see [Relocated Configuration Codes](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#relocated-configuration-codes).
- **Tailwind CSS 4.** A theme or package with its own Tailwind build moves to the `@tailwindcss/vite` plugin and configures Tailwind in `app.css`. Some icon classes were renamed or removed. See [Vite-Powered Theme Assets](../theme-development/vite-powered-theme-assets.md).
- **Images.** `image_manager()` returns Laravel's `Illuminate\Image\ImageManager`, and an image template is a class whose `applyFilter()` takes and returns `Illuminate\Image\Image`. See [Image Cache](../theme-development/image-cache-templates.md).
- **Theme section media.** Sections store uploads as bare paths (`themes/...`), so an overridden section view builds its URLs with `bagisto_theme_storage()`. See [Theme Sections](../theme-development/theme-sections.md).
- **PostgreSQL.** Custom queries must run on MySQL, MariaDB and PostgreSQL, for example with `db_grammar()->caseInsensitiveLike()` instead of `'like'`. See [Database Compatibility](../advanced/database-compatibility.md).
- **Configuration files.** The upgrade doesn't touch your `config/` directory. Take `config/responsecache.php` from the release, and replace `config/image.php` with `config/images.php`; the [configuration files section](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#configuration-files-you-maintain-yourself) of `UPGRADE.md` lists the rest.
- **Omnibus registration.** Merge the new `Webkul\Omnibus` entries into your `composer.json`, `bootstrap/providers.php` and `config/concord.php`; see [The Omnibus Package](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#the-omnibus-package).

## Related Pages

- [Deployment](./deployment.md): what a production server needs after the upgrade.
- [Common Pitfalls](../advanced/common-pitfalls.md): the symptom, cause and fix for problems developers hit again and again, such as a PHP version error.

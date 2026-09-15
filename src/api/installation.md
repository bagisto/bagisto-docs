# Installation

This page installs `bagisto/bagisto-api`, developed at [github.com/bagisto/bagisto-api](https://github.com/bagisto/bagisto-api) rather than in Bagisto core, issues the credentials each API surface needs, and lists the settings and commands you use afterwards.

## Prerequisites

The package's README names the Bagisto release each line is tested against; read the **Requirements** section of the release you install:

| Package line | Latest release | README requirement |
|---|---|---|
| `bagisto/bagisto-api` 2.4.x | v2.4.4 | Bagisto 2.4.x, tested in CI against 2.4.10 |
| `bagisto/bagisto-api` 2.3.x | v2.3.1 | Bagisto 2.3, tested in CI against 2.3.8 |

- **Bagisto 2.5 isn't named yet.** The package's `composer.json` has no constraint on the Bagisto version, and Composer resolves the 2.4.x line against Bagisto 2.5's dependencies, but no release, README or CHANGELOG names Bagisto 2.5. Install it on a copy of your store before production.
- **Start from a clean working tree.** The installer edits files in your application, [listed below](#what-the-installer-changes), so you want to review the diff and be able to roll it back.

## Installing with Composer

1. Require the package:

   ```bash
   composer require bagisto/bagisto-api
   ```

   Composer brings in API Platform for Laravel (`api-platform/laravel` and `api-platform/graphql`, `~4.3.8` on the 2.4.x line) and the Symfony components they need. Laravel's package discovery registers `Webkul\BagistoApi\Providers\BagistoApiServiceProvider`.

2. Run the installer:

   ```bash
   php artisan bagisto-api-platform:install
   ```

3. Rebuild the caches the API reads on every request:

   ```bash
   php artisan bagisto-api-platform:optimize
   ```

   It clears stale caches, rebuilds the configuration and route caches, and warms API Platform's resource metadata.

4. Open `https://your-domain.com/api`. The landing page links the Shop and Admin playgrounds.

## Installing from Source

::: details Only When You Want the Repository's Code Rather than a Tagged Release
1. Download the package from GitHub and extract it to `packages/Webkul/BagistoApi`.

2. Register the service provider in `bootstrap/providers.php`:

   ```php
   <?php

   use Webkul\BagistoApi\Providers\BagistoApiServiceProvider;

   return [
       // ...
       BagistoApiServiceProvider::class,
   ];
   ```

3. Add the namespace to the `autoload.psr-4` section of the root `composer.json`:

   ```json
   {
     "autoload": {
       "psr-4": {
         "Webkul\\BagistoApi\\": "packages/Webkul/BagistoApi/src"
       }
     }
   }
   ```

4. Install API Platform and the Symfony components the package requires. The constraints below are the ones in the 2.4.4 `composer.json`; take them from the copy you downloaded:

   ```bash
   composer require -W \
     api-platform/laravel:~4.3.8 \
     api-platform/graphql:~4.3.8 \
     "symfony/property-access:^7.0" \
     "symfony/property-info:^7.1" \
     "symfony/serializer:^7.4.9" \
     "symfony/type-info:^7.3" \
     "symfony/validator:^7.0" \
     "symfony/web-link:^7.4"
   ```

5. Regenerate the autoloader, run the installer and rebuild the caches:

   ```bash
   composer dump-autoload
   php artisan bagisto-api-platform:install
   php artisan bagisto-api-platform:optimize
   ```
:::

## What the Installer Changes

`bagisto-api-platform:install` changes your application as well as the database:

| Change | Where |
|---|---|
| Runs `vendor:publish` for the package's service provider | The paths the package publishes |
| Symlinks API Platform's front-end assets, or copies them where a symlink fails | `public/vendor/api-platform` |
| Adds `api-platform/laravel` to `extra.laravel.dont-discover`, so the package registers API Platform once | `composer.json` |
| Declares `TranslatableModel` abstract | `packages/Webkul/Core/src/Eloquent/TranslatableModel.php` |
| Adds a `->withProviders([...])` call with `ApiPlatformProvider`, `ApiPlatformDeferredProvider` and `ApiPlatformEventProvider` before `->create()` | `bootstrap/app.php` |
| Runs `migrate`, creating `storefront_keys`, `cart_tokens`, `admin_personal_access_tokens` and `admin_api_audits` | Database |
| Generates a storefront key named `Default Storefront Key1`, saves it as `STOREFRONT_PLAYGROUND_KEY`, and writes the other [storefront settings](#configuration) | `.env` |
| Copies the package's API Platform configuration, replacing any existing file | `config/api-platform.php` |
| Clears the caches and runs `optimize` | `bootstrap/cache` |

Before most edits the installer checks whether the change is already there and skips it, so running it again is safe. The exception is `config/api-platform.php`, which it copies again every time.

## Credentials

The two API surfaces authenticate differently, and neither accepts the other's credential.

| Surface | Endpoints | Credential |
|---|---|---|
| Shop | `/api/shop/*`, `POST /api/graphql` | `X-STOREFRONT-KEY: <key>` on every request, plus `Authorization: Bearer <token>` with a customer or guest-cart token for account, cart and checkout calls |
| Admin | `/api/admin/*`, `POST /api/admin/graphql` | `Authorization: Bearer <id>\|<token>` with an Integration token, and no storefront key |

### Storefront Keys

A storefront key identifies the application calling the Shop API, not a person. It ends up in browser bundles and mobile apps, so treat it as public. The installer's own key is the value of `STOREFRONT_PLAYGROUND_KEY` in `.env`, which is enough for the examples on the next pages. For each client, issue a key of its own; `bagisto-api:generate-key` prints each new key when it creates it:

```bash
php artisan bagisto-api:generate-key --name="Mobile App" --rate-limit=5000
```

- `--rate-limit` defaults to `100` and is capped at `5000`; an empty value (`--rate-limit=`) creates a key with no limit.
- The command's help calls it requests per minute, but in v2.4.4 both the REST and the GraphQL key checks count it **per hour**, so size it for an hour of traffic.
- `--no-activation` creates the key inactive.

Manage existing keys with `bagisto-api:key:manage`. Its first argument is one of `rotate`, `deactivate`, `cleanup`, `status`, `expiring`, `unused` or `summary`, and `--key` takes a key's ID or name:

```bash
php artisan bagisto-api:key:manage status --key="Mobile App"
```

### Customer and Cart Tokens

The Shop API issues these itself: customer sign-in returns a `token`, and creating a guest cart returns a cart token. [REST API](./rest-api.md) and [GraphQL API](./graphql-api.md) show both calls.

### Integration Tokens

An admin generates an Integration token in the admin; there is no sign-in endpoint or Artisan command for it. Each token belongs to one admin user, can do no more than that admin's role allows, is shown only once, and must stay on a server. The package README's [Admin API Authentication](https://github.com/bagisto/bagisto-api#admin-api-authentication) section has the steps. The Integration screens appear only while the package's `api.integration.settings.enabled` configuration field is on, which is the default.

## Configuration

The installer writes these variables to `.env`. They feed the `storefront` configuration the package merges:

| Variable | Config key | Default | Controls |
|---|---|---|---|
| `STOREFRONT_DEFAULT_RATE_LIMIT` | `storefront.default_rate_limit` | `100` | The value the REST `X-RateLimit-Limit` header reports; the limit applied is each key's own rate limit |
| `STOREFRONT_CACHE_TTL` | `storefront.cache_ttl` | `60` | Minutes a key lookup stays cached |
| `STOREFRONT_KEY_PREFIX` | `storefront.key_prefix` | `storefront_key_` | Prefix of those cache entries |
| `STOREFRONT_PLAYGROUND_KEY` | `storefront.playground_key` | none | Key the Swagger UI and GraphiQL pages use |
| `API_PLAYGROUND_AUTO_INJECT_STOREFRONT_KEY` | `storefront.auto_inject_playground_key` | `false` | Fills that key in on the playground pages |

::: warning Keep Auto-Inject Off on Public Stores
With `API_PLAYGROUND_AUTO_INJECT_STOREFRONT_KEY` on, the playground key is handed to anyone who opens `/api/shop` or `/api/graphiql`. Turn it on only in a local or private environment.
:::

API Platform's own settings are in `config/api-platform.php`, including `swagger_ui.enabled` and `graphql.graphiql.enabled`, which turn the Swagger UI and GraphiQL pages on or off, and the GraphQL limits `graphql.max_query_complexity` and `graphql.max_query_depth`. Run `php artisan bagisto-api-platform:optimize` after changing either file.

## Where Things Are on Your Store

| URL | What it serves |
|---|---|
| `/api` | Landing page linking both surfaces |
| `/api/shop` | Swagger UI for the Shop REST API |
| `/api/shop/docs` | The Shop OpenAPI document, as JSON |
| `/api/admin` | Swagger UI for the Admin REST API |
| `/api/admin/docs` | The Admin OpenAPI document, as JSON |
| `/api/graphql` | Shop GraphQL endpoint |
| `/api/graphiql` | GraphiQL for the Shop schema |
| `/api/admin/graphql` | Admin GraphQL endpoint |
| `/api/admin/graphiql` | GraphiQL for the Admin schema |

The endpoint reference, with every request and response, is at [api-docs.bagisto.com](https://api-docs.bagisto.com/). Its [`llms.txt`](https://api-docs.bagisto.com/llms.txt) indexes every endpoint for AI tools.

## Artisan Commands

| Command | Does |
|---|---|
| `bagisto-api-platform:install` | Installs and configures the package, as described above |
| `bagisto-api-platform:optimize` | Clears stale caches, rebuilds the configuration and route caches, and warms the API Platform metadata cache |
| `bagisto-api-platform:clear-cache` | Flushes the API Platform metadata and schema cache; `--store=` names a different cache store |
| `bagisto-api-platform:warm-cache` | Builds the resource metadata cache ahead of the first request |
| `bagisto-api-platform:export-schema` | Writes each surface's OpenAPI JSON and GraphQL SDL; `--path=` sets the directory and `--transport=` is `all`, `rest` or `graphql` |
| `bagisto-api:generate-key` | Creates a storefront key |
| `bagisto-api:key:manage` | Rotates, deactivates and reports on storefront keys |
| `bagisto-api:key:maintain` | Runs key maintenance with `--cleanup`, `--invalidate`, `--notify` or `--all` |
| `bagisto-api:prune-audits` | Deletes Admin API audit history older than `bagistoapi.audit.retention_days`; `--days=` overrides it |
| `bagisto-api:prune-cart-uploads` | Deletes abandoned custom-option uploads; the package schedules it every two hours |

## Adding Your Own Endpoints

The package documents a supported way to add REST and GraphQL endpoints from your own Bagisto package without editing it. You write resource classes marked `#[ApiResource]`, with providers and processors tagged in the container. Your service provider then merges your resource directory into the `api-platform.resources` config. Follow [For Developers](https://api-docs.bagisto.com/api/for-developers/) on the API documentation site, starting with [Register Your Package](https://api-docs.bagisto.com/api/for-developers/register-your-package). Changes made inside `vendor/bagisto/bagisto-api` are lost on the next `composer update`.

## Things to Watch

- **An upgrade can undo the installer.** Two of its edits are in files Bagisto itself ships, `packages/Webkul/Core/src/Eloquent/TranslatableModel.php` and `bootstrap/app.php`. After an upgrade that replaces either file, run `php artisan bagisto-api-platform:install` again, then `php artisan bagisto-api-platform:optimize`.
- **The migration step can stop in production.** The installer runs `php artisan migrate` without `--force`. With `APP_ENV=production`, Laravel asks for confirmation, which the installer's child process can't give, so the migration is cancelled and the installer stops at that step. Run the installer on a non-production copy and commit the files it changes. Then, on production, run `php artisan migrate --force` and issue a key there with `bagisto-api:generate-key`.
- **The route cache hides new endpoints.** After installing or updating the package, or adding an endpoint, run `bagisto-api-platform:optimize`. Until then the cached route table doesn't know about the change.
- **Cart upload pruning needs the scheduler.** Run Laravel's scheduler as described in [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md).
- **Exported schemas default to the package folder.** Without `--path`, `export-schema` writes to the package's `schema/generated` directory. On a Composer install that is `vendor/bagisto/bagisto-api/schema/generated`, which the next update replaces.
- **Removing the package leaves its edits behind.** `composer remove bagisto/bagisto-api` also removes API Platform, but `bootstrap/app.php` still names API Platform's providers. Take the `withProviders` block out of `bootstrap/app.php` before removing the package. The package's tables and `.env` lines stay until you remove them.

## Next Step

Make your first calls with the [REST API](./rest-api.md), or go straight to the [GraphQL API](./graphql-api.md).

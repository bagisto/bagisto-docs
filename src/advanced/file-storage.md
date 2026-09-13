# File Storage

Product images, category banners, theme section media, uploaded search images and every other file Bagisto writes go to Laravel's **default filesystem disk**. Out of the box that is the local `public` disk, which `php artisan storage:link` exposes at `public/storage`. On Bagisto 2.5 the disk can also be Amazon S3 or Cloudflare R2, chosen from the admin, and this page explains how that switch works and what it does not do.

::: info Availability
The `r2` disk, the `league/flysystem-aws-s3-v3` dependency and the **Configure → File Management** section belong to Bagisto 2.5. Bagisto 2.4 ships the `s3` disk definition in `config/filesystems.php` but no admin switch and no S3 adapter; there, install `league/flysystem-aws-s3-v3` yourself and set `FILESYSTEM_DISK=s3` in `.env`.
:::

## Disks

**File:** `config/filesystems.php`

| Disk | Driver | Used for |
|---|---|---|
| `public` | local, `storage/app/public` | Default disk: catalog and theme media, customer uploads |
| `private` | local, `storage/app/private` | Import files, validation fragments, downloaded import images, error reports. Never served |
| `local` | local, `storage/app` | Laravel default, unused by core |
| `s3` | S3 | Amazon S3, from `AWS_*` env keys |
| `r2` | S3 | Cloudflare R2, from `R2_*` env keys, path-style endpoint on by default |

The default is `env('FILESYSTEM_DISK', 'public')`.

Two things stay on the local `private` disk whatever the default: the Data Transfer import pipeline (it reads files by path, which a remote adapter cannot provide) and the CSV, XLS, XLSX and XML sources. Sitemaps are written to the `public` disk explicitly. Everything else, including product images, theme section images and the CMS editor's uploads, uses the default disk and therefore moves with it.

## Choosing the disk from the admin

The **File Management** configuration group has three sections:

| Section | Keys |
|---|---|
| `file_management.general.settings` | `default_driver`: `public`, `s3` or `r2` |
| `file_management.amazon_s3.settings` | `key`, `secret`, `region`, `bucket`, `url`, `endpoint`, `use_path_style_endpoint` |
| `file_management.cloudflare_r2.settings` | `account_id`, `key`, `secret`, `bucket`, `url` |

R2 asks for no region or endpoint: the endpoint is built from the account id as `https://{account_id}.r2.cloudflarestorage.com`, the region is forced to `auto` and path-style addressing is forced on.

`Webkul\Core\Filesystem\StorageConfigurator::configure()` runs from `CoreServiceProvider::boot()`, before anything resolves storage. It reads `core_config` directly (the channel-aware reader is not available that early), copies every filled-in setting onto `filesystems.disks.{s3|r2}.*`, and sets `filesystems.default` to the chosen driver. A setting left empty is passed over, so `.env` stays in charge of anything the admin has not filled in, and a driver whose adapter class is not installed is refused. `Webkul\Core\Enums\SupportedFilesystemEnum` holds the three values and the adapter check.

::: warning Existing files do not move
Switching the default disk changes where files are written from now on. Files already uploaded stay on the storage they were saved to, and their paths are stored without a disk name, so a product image saved locally is looked up on S3 after the switch and not found. Copy `storage/app/public` to the bucket before switching, or switch before uploading anything.
:::

## URLs on a remote disk

Two pieces of core were changed so that a remote disk behaves like a local one:

- **Image cache.** `image_urls()` always returns `/cache/{template}/{path}` URLs, and `Webkul\ImageCache\Http\Controllers\ImageCacheController` reads the file through `Storage::get()` on the default disk before falling back to the local paths in `config/imagecache.php`. So product, category and swatch images are resized whichever disk holds them. On Bagisto 2.4 a non-local disk short-circuits to `Storage::url($path)` and serves the original file unresized.
- **Theme media.** `bagisto_theme_storage()` (`Webkul\Theme\ThemeStorage`) resolves section images at render time: a local disk yields a site-relative URL, a remote disk yields `Storage::url($path)`. Paths in `theme_section_translations` are stored bare, without host or `storage/` prefix, so a domain change or a disk change does not break them. Two migrations on Bagisto 2.5 rewrite older rows into this form.

## Environment keys

```properties
FILESYSTEM_DISK=public

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_URL=
AWS_ENDPOINT=
AWS_USE_PATH_STYLE_ENDPOINT=false

R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_DEFAULT_REGION=auto
R2_BUCKET=
R2_URL=
R2_ENDPOINT=
R2_USE_PATH_STYLE_ENDPOINT=true
```

Admin settings win over these when filled in. Use the env keys for a deployment where credentials must not live in the database, and leave the admin fields empty.

## Writing files from a package

Use the `Storage` facade with no disk name for anything the store owner may want on object storage, and `Storage::disk('private')` for working files that must be read by path:

```php
Storage::put('rma/'.$request->id.'/'.$file->hashName(), $file->get());

$url = Storage::url($path);
```

Sanitize SVG uploads with the `Webkul\Core\Traits\Sanitizer` trait (`sanitizeSVG($path, $mimeType)`), which strips remote references; core does this for locale logos, search images and review attachments.

# File Storage

Product images, category images, theme section media, editor uploads and most other files Bagisto writes go to Laravel's **default filesystem disk**: the local `public` disk out of the box, or Amazon S3 or Cloudflare R2 chosen in the admin. This page explains the disks, how the admin setting overrides them, which files stay on a local disk whatever the default, and how images are converted and resized.

## Disks

**File:** `config/filesystems.php`

| Disk | Driver and root | Used for |
|---|---|---|
| `public` | local, `storage/app/public` | The default disk: catalog and theme media, customer uploads, sitemaps |
| `private` | local, `storage/app/private` | Import files, downloadable product files and return (RMA) uploads; never served directly |
| `local` | local, `storage/app` | Laravel's default disk, not used by core |
| `s3` | S3, from the `AWS_*` keys | Amazon S3 or another S3-compatible service |
| `r2` | S3, from the `R2_*` keys | Cloudflare R2, with path-style endpoints on by default |

The default is `env('FILESYSTEM_DISK', 'public')`, and `links` maps `public/storage` to `storage/app/public` for `php artisan storage:link` (and `storage:unlink`). The link is needed while media are served from the local `public` disk, and for sitemaps whatever the default disk is.

On either disk, directory names are plural and kebab-case (`products/{id}`, `categories/{id}`, `channels/{id}`, `reviews/{id}`, `attribute-options`, `configurations`, `rmas/{id}`), and a record's files sit under the record, so a product's downloadable files are in `products/{id}/downloadable-links` and `downloadable-samples`. Bagisto 2.4 used singular snake_case names such as `product/{id}` and `attribute_option`; a Bagisto 2.5 migration moves the files and rewrites the stored paths.

### Files That Stay on a Local Disk

Some code names its disk, so these files don't follow the default:

| Files | Disk | Written by |
|---|---|---|
| Import files, validation fragments, downloaded import images, error reports | `private` | `Webkul\DataTransfer\Helpers\Import`, the importer concerns `ValidatesInChunks` and `DownloadsImages`, the CSV, XLS, XLSX and XML sources, and `ImportController` |
| Downloadable product link files, link samples and samples | `private` | `Webkul\Product\Repositories\ProductDownloadableLinkRepository` and `ProductDownloadableSampleRepository`, served by the Shop `DownloadableProductController` and `ProductController::downloadSample()` |
| Return (RMA) photos and conversation attachments | `private` | `Webkul\RMA\Repositories\RMAImageRepository` and the Shop and Admin RMA controllers, streamed by `Webkul\RMA\Helpers\Attachment` |
| Sitemaps | `public` | `Webkul\Sitemap\Jobs\ProcessSitemap` with `writeToDisk('public', …)`, linked under `/storage/` by the Shop `SitemapController` |

The import pipeline reads its files by path, which a remote adapter can't provide. Everything else, including product images and videos, category logos and banners, theme section images, locale logos, search images, review attachments and editor uploads, uses the default disk and moves with it. On more than one server, share `storage/app/private` and `storage/app/public`; see [Configure Load Balancing](../performance/configure-load-balancing.md).

`Webkul\Core\Helpers\StoredFile` finds a stored file on the `private` disk or the default one, preferring `private`, then sends it as a download or for display, moves it or deletes it there, so code that serves these files works whichever disk holds them.

## Choosing the Disk in the Admin

The **File Management** configuration section stores these settings. Bagisto 2.4 has no such section, no `r2` disk and no `league/flysystem-aws-s3-v3` adapter; there, require the adapter yourself and set `FILESYSTEM_DISK=s3` in `.env`.

| Settings | Keys |
|---|---|
| `file_management.general.settings` | `default_driver`: `public` (the default), `s3` or `r2` |
| `file_management.amazon_s3.settings` | `key`, `secret`, `region`, `bucket`, `url`, `endpoint`, `use_path_style_endpoint` |
| `file_management.cloudflare_r2.settings` | `account_id`, `key`, `secret`, `bucket`, `url` |

`Webkul\Core\Filesystem\StorageConfigurator::configure()` runs first in `CoreServiceProvider::boot()`, before anything resolves storage. It reads the `file_management.*` rows straight from `core_config`, because the channel-aware configuration reader isn't available that early, and then:

1. Returns without changing anything when the table can't be read (during installation) or no `default_driver` is stored, so `FILESYSTEM_DISK` stays in charge.
2. Resolves the driver with `Webkul\Core\Enums\SupportedFilesystemEnum`, and returns without changing anything when the driver's adapter class (`League\Flysystem\AwsS3V3\AwsS3V3Adapter`) isn't installed.
3. Copies every non-empty setting onto `filesystems.disks.s3.*` or `filesystems.disks.r2.*`. A setting left empty keeps its `.env` value. For R2 it builds the endpoint from the account id as `https://{account_id}.r2.cloudflarestorage.com`, and always sets the region to `auto` and path-style endpoints on.
4. Sets `filesystems.default` to the driver. Once a driver is stored it wins over `FILESYSTEM_DISK`, even when the stored driver is `public`.

Because this happens at boot, a queue worker keeps the disk it booted with until `php artisan queue:restart`, and an [Octane](../performance/configure-laravel-octane.md) worker until `php artisan octane:reload`.

::: warning Existing Files Don't Move
Switching the default disk changes where new files are written. Files already uploaded stay where they are, and their paths are stored without a disk name, so after a switch to S3 a product image uploaded earlier is looked for on S3 and not found. Copy `storage/app/public` to the bucket before switching, or switch before anything is uploaded.
:::

### Environment Keys

`.env.example` carries the keys for both remote disks:

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

To keep credentials out of the database, set them here and leave the matching admin fields empty; only `default_driver` needs to be stored. The Amazon S3 path-style switch (`use_path_style_endpoint`) is the exception: it's stored whenever the Amazon S3 settings are saved, and from then on overrides `AWS_USE_PATH_STYLE_ENDPOINT`.

::: warning Fill in the URL
Fill in **URL** in the admin, or `AWS_URL` or `R2_URL`, with the bucket's public or CDN address. An empty `AWS_URL=` line still counts as set, so `Storage::url()` returns a bare `/path` on your own host and every file link breaks. On S3 you can instead delete the line, and the adapter builds the bucket's own object URLs.
:::

## URLs on a Remote Disk

- **Resized images.** `image_urls()` always returns `cache/{template}/{path}` URLs, and `Webkul\ImageCache\Http\Controllers\ImageCacheController` reads the file with `Storage::get()` from the default disk before trying the local paths in `config/imagecache.php`. Product, category and swatch images are resized whichever disk holds them. On Bagisto 2.4 a remote disk linked each size to the original file.
- **Theme media.** `bagisto_theme_storage()` returns `Webkul\Theme\ThemeStorage`, which resolves a stored section path when the page renders: `url()` resolves a local disk against the site serving the request, directory included, so a store served from below the document root gets working URLs, and uses `Storage::url($path)` for a remote disk; `resizedUrl()` gives the `cache/` URL. Image fields in `theme_section_translations` are stored bare, without host or `storage/` prefix, and authored markup holds `__media__/…` references, which `mediaReference()` writes and `resolveMarkup()` resolves, so a change of domain or disk doesn't break them. Nothing converts rows stored earlier: `normalize()` drops an old `storage/` prefix, and `resolveMarkup()` also resolves `/storage/…` and `storage/…` URLs in markup, so every spelling a section has recorded is understood as it's read.
- **Other files.** `Storage::url($path)` on the `s3` or `r2` disk builds the URL from the `url` setting whenever it's set, even to an empty string, so point it at your CDN or bucket domain.

## Image Processing

Uploaded images are re-encoded to WebP, at Laravel's default quality of 70, when they're stored, with `image_manager()->fromUpload($file)->toWebp()->toBytes()`:

| Upload | Code |
|---|---|
| Product images (any upload whose MIME type contains `image`) | `Webkul\Product\Repositories\ProductMediaRepository` |
| Category logos and banners | `Webkul\Category\Repositories\CategoryRepository` |
| Theme section images | `Webkul\Theme\Repositories\SectionRepository` |
| Attribute option swatch images | `Webkul\Attribute\Repositories\AttributeOptionRepository` |
| Product images from an import | `Webkul\DataTransfer\Helpers\Importers\Product\Importer` |

Other uploads are stored as sent. `image_manager()` returns Laravel's `Illuminate\Image\ImageManager`, and `config/images.php` chooses the driver with `IMAGE_DRIVER` (`gd` by default, or `imagick`).

Resizing happens at request time, at `/cache/{template}/{path}`, and nothing is written back to a disk, so in production put a CDN or reverse proxy in front of `/cache/`. The templates, the response headers and theme overrides are on [Image Cache](../theme-development/image-cache-templates.md).

## Writing Files from a Package

Store files a store owner may want on object storage on the default disk, and working files that must be read by path on the `private` disk. Pass SVG uploads through `Webkul\Core\Traits\Sanitizer`, whose `sanitizeSVG($path, $mimeType)` cleans an `image/svg` or `image/svg+xml` file in place with `enshrined/svg-sanitize` and removes remote references; core does this for locale logos, search images, review attachments, editor uploads, configuration uploads and product `image` and `file` attribute values. `Webkul\Core\Helpers\MediaFileName` builds the stored names of core's product media, category, channel and swatch uploads; for a file that isn't re-encoded, its `extension()` keeps to an allow-list of image and video extensions and falls back to `bin`, so an upload is never stored under an extension a web server would run.

**File:** `packages/Webkul/Blog/src/Repositories/PostAttachmentRepository.php`

```php
<?php

namespace Webkul\Blog\Repositories;

use Illuminate\Http\UploadedFile;
use Webkul\Blog\Contracts\PostAttachment;
use Webkul\Core\Eloquent\Repository;
use Webkul\Core\Traits\Sanitizer;

class PostAttachmentRepository extends Repository
{
    use Sanitizer;

    /**
     * Specify model class name.
     */
    public function model(): string
    {
        return PostAttachment::class;
    }

    /**
     * Store an uploaded file for a post on the default disk.
     */
    public function upload(UploadedFile $file, int $postId): void
    {
        $path = $file->store('blogs/'.$postId);

        $this->sanitizeSVG($path, $file->getMimeType());

        $this->create([
            'post_id' => $postId,
            'path' => $path,
        ]);
    }
}
```

`store()` without a disk name writes to the default disk. For a file that must stay local, pass `'private'` as the second argument, and don't pass that file to `sanitizeSVG()`, which reads and writes the default disk. Resolve a public URL with `Storage::url($path)`, or build resized URLs with `image_urls($path)`.

## Things to Watch

- **Switching disks strands existing files** until you copy them across.
- **The `private` disk is always local**, so imports, downloadable products and returns need a shared `storage/app/private` on more than one server.
- **Resizing costs a request each time** without a CDN or proxy cache in front of `/cache/`.

## Related Pages

- [Configure Load Balancing](../performance/configure-load-balancing.md#files): the storage directories several web servers must share.
- [Image Cache](../theme-development/image-cache-templates.md): how images are resized and served, and adding templates.

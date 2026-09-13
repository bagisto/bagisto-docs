# Theme Sections

A **section** is one block of the storefront that a merchant edits from
**Appearance → Themes → Customize**: a product carousel, an image slider, the
footer links, and so on. Bagisto ships six section types. A theme can reorder
them, hide some, replace one with its own version, or add entirely new types,
all from `config/themes.php`, without touching the `Theme` or `Admin` packages.

This page covers the developer side: what a section type is, how a theme
declares the types it offers, and what a custom type has to provide so the
editor and the storefront both understand it. The merchant's view of the same
feature is in the user guide under Appearance.

::: info Availability
Per-theme section types (`customize.sections`) ship in both Bagisto 2.4 and the
current development version, and the section type classes on this page work on
both. One helper differs: `bagisto_theme_storage()`, used in the rendering
example, exists only on the current development version; on 2.4 resolve stored
image paths with `Storage::url($path)` instead.
:::

## What a section type is

A section type is a PHP class extending `Webkul\Theme\Sections\SectionType`. It
tells the Appearance editor which fields to draw, how to clean and reshape the
values, and a few flags about placement. It does **not** render anything on the
storefront; rendering is done by Blade views, which the theme also owns (see
[Rendering a custom type](#rendering-a-custom-type-on-the-storefront)).

**File:** `packages/Webkul/Theme/src/Sections/SectionType.php`

| Member | Purpose |
|---|---|
| `protected string $code` | The code the section is stored under. Unique among the types a theme offers. |
| `protected ?string $title` | Translation key of the name shown in the editor. Falls back to `Str::headline($code)`. |
| `protected string $icon` | Icon class drawn on the type's tile. Default `icon-cms`. |
| `protected bool $singleton` | A channel may hold only one section of this type. Once one exists the tile is no longer offered. |
| `protected bool $pinned` | The section is fixed to the bottom of the list rather than dragged into place. |
| `protected bool $layout` | The layout draws the section on every page rather than only the home page. Publishing a change to such a section flushes the whole page cache. |
| `getFields(): array` | The fields the editor draws, described with the `SectionSchema` kinds below. Default `[]`. |
| `sanitize(array $options): array` | Clean the values before they are stored or rendered. |
| `prepareForEditor(array $options): array` | Reshape stored options the way the editor's fields read them. |
| `prepareForStorage(array $options): array` | Reshape what the editor posts the way the storefront reads it. |

The class also offers protected helpers for building option lists:
`categoryOptions()`, `limitOptions()`, `yesNo()`, `label()` (translates an
`admin::app.appearance.sections.edit.*` key), and `sanitizeHtml()` /
`sanitizeCss()`, which strip `script`, `iframe` and `form` elements and anything
that could break out of a style block.

### The core types

| Code | Class | Notable flags |
|---|---|---|
| `image_carousel` | `Webkul\Theme\Sections\ImageCarousel` | repeater of image, title, link |
| `product_carousel` | `Webkul\Theme\Sections\ProductCarousel` | title plus filters (`sort`, `limit`, `category_id`, `featured`, `new`) |
| `category_carousel` | `Webkul\Theme\Sections\CategoryCarousel` | filters (`sort`, `limit`, `parent_id`) |
| `footer_links` | `Webkul\Theme\Sections\FooterLinks` | singleton, pinned, layout; nested repeater of columns and links |
| `static_content` | `Webkul\Theme\Sections\StaticContent` | two `code` fields, `html` and `css`, sanitized on save |
| `services_content` | `Webkul\Theme\Sections\ServicesContent` | layout; repeater of icon, title, description |

Their codes are also the cases of `Webkul\Theme\Enums\SectionTypeEnum`, which is
the form the config file uses to refer to them.

## Declaring the types a theme offers

Everything a theme customizes lives under its `customize` key in
`config/themes.php`. The `sections` list names the types the editor offers for
this theme, **in the order the Add Section tiles show them**:

**File:** `config/themes.php`

```php
use Webkul\Theme\Enums\SectionTypeEnum;

return [
    'shop' => [
        'default' => [
            'name' => 'Default',
            'assets_path' => 'public/themes/shop/default',
            'views_path' => 'resources/themes/default/views',

            // ...

            'customize' => [
                'sections' => [
                    SectionTypeEnum::IMAGE_CAROUSEL,
                    SectionTypeEnum::PRODUCT_CAROUSEL,
                    SectionTypeEnum::CATEGORY_CAROUSEL,
                    SectionTypeEnum::FOOTER_LINKS,
                    SectionTypeEnum::STATIC_CONTENT,
                    SectionTypeEnum::SERVICES_CONTENT,
                ],
            ],
        ],
    ],
];
```

Each entry is one of:

- a `SectionTypeEnum` case, for a core type;
- a class name that extends `Webkul\Theme\Sections\SectionType`, for a theme's
  own type.

The rules, as implemented in `Webkul\Theme\SectionSchema::types()`:

- **Leave the key out** to offer every core type in enum order. This is what a
  theme gets when it has no `customize` key at all.
- **An empty array** offers no section types; the editor shows nothing to add.
- **Order is preserved.** The tiles follow the array.
- **Duplicate codes are resolved first-wins.** Declaring your own class that
  reuses a core code replaces that core type for this theme.
- **An invalid entry is skipped, not fatal.** Anything that is not a
  `SectionType` subclass is reported through `report()` as
  `Webkul\Theme\Exceptions\InvalidSectionType` and dropped, so one bad entry
  cannot take the editor down.

::: warning Sections belong to a theme and a channel
Stored sections are keyed by theme code. Removing a type from a theme's list
does not delete sections already created with it; they can no longer be
added. Renaming a code orphans the existing rows.
:::

## Writing a custom section type

### Step 1: extend the base class

The smallest possible type is a code alone:

**File:** `packages/Webkul/Fashion/src/Sections/Lookbook.php`

```php
<?php

namespace Webkul\Fashion\Sections;

use Webkul\Theme\Sections\SectionType;

class Lookbook extends SectionType
{
    /**
     * Code the section is stored under.
     */
    protected string $code = 'lookbook';

    /**
     * Whether a channel may hold only one section of this type.
     */
    protected bool $singleton = true;
}
```

With no `getFields()` the editor shows the section with the message "This
section has no settings to edit in this theme", which is fine for a block whose
markup is fixed in the theme's views.

### Step 2: describe the fields

`getFields()` returns a list of field descriptors. Each has a `key` (the option
name it is stored under), a `type` (one of the `SectionSchema` constants) and a
`label`. The editor is generic: it draws whatever schema it receives, so a
custom type needs **no Blade or Vue of its own in the admin**.

| `SectionSchema` constant | Editor control | Extra keys |
|---|---|---|
| `TEXT` | Single line input | |
| `TEXTAREA` | Multi-line input | |
| `NUMBER` | Whole number input | |
| `IMAGE` | Upload tile; stored as a disk path | |
| `CODE` | Highlighted editor | `language` (`html` or `css`) |
| `REPEATER` | Repeating group of child fields | `fields` (child descriptors), `add_label`, optional `max` |
| `FILTERS` | Key and value pairs from a fixed key list | `keys` (list of `value`, `label`, `options`, optional `multiple`), `add_label` |

A slider-style type with an image, a heading and a link per slide:

**File:** `packages/Webkul/Fashion/src/Sections/HeroBanner.php`

```php
<?php

namespace Webkul\Fashion\Sections;

use Webkul\Theme\Sections\SectionType;
use Webkul\Theme\SectionSchema;

class HeroBanner extends SectionType
{
    /**
     * Code the section is stored under.
     */
    protected string $code = 'hero_banner';

    /**
     * Translation key of the name the editor shows.
     */
    protected ?string $title = 'fashion::app.sections.hero-banner';

    /**
     * Icon class drawn on the type's tile in the editor.
     */
    protected string $icon = 'icon-image';

    /**
     * One slide per row, each with an image, a heading and a destination.
     */
    public function getFields(): array
    {
        return [
            [
                'key' => 'slides',
                'type' => SectionSchema::REPEATER,
                'label' => trans('fashion::app.sections.slides'),
                'add_label' => trans('fashion::app.sections.add-slide'),
                'fields' => [
                    ['key' => 'image', 'type' => SectionSchema::IMAGE, 'label' => trans('fashion::app.sections.image')],
                    ['key' => 'heading', 'type' => SectionSchema::TEXT, 'label' => trans('fashion::app.sections.heading')],
                    ['key' => 'link', 'type' => SectionSchema::TEXT, 'label' => $this->label('link')],
                ],
            ],
        ];
    }
}
```

`$this->label('link')` reuses a core editor string; your own labels come from
your package's language files as usual.

### Step 3: extend a core type instead, when that is closer

Because the core types are ordinary classes, a theme can subclass one and change
only what differs. `ProductCarousel` exposes its filter list through a
`filterKeys()` method precisely so a theme can add a key its own product API
understands:

**File:** `packages/Webkul/Fashion/src/Sections/DealsCarousel.php`

```php
<?php

namespace Webkul\Fashion\Sections;

use Webkul\Theme\Sections\ProductCarousel;

class DealsCarousel extends ProductCarousel
{
    /**
     * Code the section is stored under.
     */
    protected string $code = 'deals_carousel';

    /**
     * Translation key of the name the editor shows.
     */
    protected ?string $title = 'fashion::app.sections.deals-carousel';

    /**
     * Icon class drawn on the type's tile in the editor.
     */
    protected string $icon = 'icon-sales';

    /**
     * The product filters, plus the one this theme adds.
     */
    protected function filterKeys(): array
    {
        return [
            ...parent::filterKeys(),
            ['value' => 'on_sale', 'label' => trans('fashion::app.sections.on-sale'), 'options' => $this->yesNo()],
        ];
    }
}
```

Keeping the **same** code as a core type (`product_carousel`) instead of a new
one replaces the core type for this theme, and existing sections of that type
pick up the new schema. `FooterLinks` similarly exposes `protected ?int
$maxColumns` for a theme whose footer has room for fewer columns.

### Step 4: register the type on the theme

```php
'customize' => [
    'sections' => [
        \Webkul\Fashion\Sections\HeroBanner::class,
        SectionTypeEnum::PRODUCT_CAROUSEL,
        \Webkul\Fashion\Sections\DealsCarousel::class,
        SectionTypeEnum::FOOTER_LINKS,
        \Webkul\Fashion\Sections\Lookbook::class,
    ],
],
```

Clear the configuration cache and open the editor for a channel running the
theme. The Add Section tiles now follow this list.

### Step 5: clean and reshape values when needed

Three hooks run between the editor and the database:

- **`sanitize()`** runs on save and on render. Use it for anything that ends up
  in the page unescaped. `StaticContent` shows the pattern:

  ```php
  public function sanitize(array $options): array
  {
      if (array_key_exists('html', $options)) {
          $options['html'] = $this->sanitizeHtml($options['html']);
      }

      return $options;
  }
  ```

- **`prepareForEditor()`** and **`prepareForStorage()`** translate between the
  shape the editor's fields expect and the shape stored. `FooterLinks` uses
  them to present stored `column_1`, `column_2`, … keys as one `columns`
  repeater.

## Rendering a custom type on the storefront

The type class decides what the editor shows; **the theme's views decide what
the shopper sees**. The stock storefront draws home-page sections through a
`@switch` on the section's type:

**File:** `packages/Webkul/Shop/src/Resources/views/home/index.blade.php`

```blade
@foreach ($sections as $section)
    @php ($data = $section->options) @endphp

    @switch ($section->type)
        @case (\Webkul\Theme\Enums\SectionTypeEnum::IMAGE_CAROUSEL->value)
            <x-shop::carousel :options="$data" aria-label="{{ trans('shop::app.home.index.image-carousel') }}" />

            @break
        @case (\Webkul\Theme\Enums\SectionTypeEnum::PRODUCT_CAROUSEL->value)
            <x-shop::products.carousel
                :title="$data['title'] ?? ''"
                :src="route('shop.api.products.index', $data['filters'] ?? [])"
                :navigation-link="route('shop.search.index', $data['filters'] ?? [])"
                aria-label="{{ trans('shop::app.home.index.product-carousel') }}"
            />

            @break
    @endswitch
@endforeach
```

A section whose type is not in that switch renders nothing. So a theme that adds
a type must also override `home/index.blade.php` (see
[view resolution](./creating-store-theme.md#how-views-are-resolved)) and add a
case for its code:

```blade
@case ('hero_banner')
    @foreach ($data['slides'] ?? [] as $slide)
        @php ($urls = bagisto_theme_storage()->imageUrls($slide['image'] ?? null))

        <a href="{{ $slide['link'] ?? '#' }}">
            <img
                src="{{ $urls['srcset']['large'] ?? $urls['url'] ?? '' }}"
                alt="{{ $slide['heading'] ?? '' }}"
            >
        </a>
    @endforeach

    @break
```

Two things to keep in mind when writing that view:

- **Image fields store bare disk paths.** Resolve them with
  `bagisto_theme_storage()->url($path)` for the original or
  `bagisto_theme_storage()->imageUrls($path)`, which returns `['url' => ...,
  'srcset' => ['large' => ..., 'medium' => ..., 'small' => ...]]`, the three
  sizes served through the image cache (the `small_image_url` naming belongs to
  the product helper `image_urls()`, not to this one). The paths are stored without a host, so they survive a domain
  change and work on a remote disk.
- **Layout-drawn types read themselves.** The footer and the services strip are
  not part of the home-page loop; they load their own section through
  `SectionRepository::findOneOfType()` and `findAllOfType()` in
  `components/layouts/footer/index.blade.php` and
  `components/layouts/services.blade.php`. A custom type with `$layout = true`
  needs the same treatment in the layout view that draws it.

::: tip Keep the preview working
The editor's live preview loads the storefront with `$preview` set and wraps
each home-page section in a `div` carrying `data-section-id`, which the
`preview-bridge` script uses to scroll and highlight. If you replace
`home/index.blade.php`, keep the `$marks` wrapper and the
`@include('shop::home.preview-bridge')` at the bottom, or the editor will no
longer be able to focus a section in the preview.
:::

## How the pieces connect

| Concern | Where |
|---|---|
| Resolving a theme's list | `Webkul\Theme\SectionSchema::types()`, `type()`, `for()` |
| Section model | `Webkul\Theme\Models\Section`, `getTypeInstance()` |
| Admin editor | `Webkul\Admin\Http\Controllers\Appearance\SectionController`, views under `admin::appearance.sections` and `admin::components.appearance.sections` |
| Routes | `admin.appearance.sections.*` in `packages/Webkul/Admin/src/Routes/appearance-routes.php` |
| ACL | `appearance.sections`, `appearance.sections.create`, `.edit`, `.delete` |
| Drafts and publishing | `Webkul\Theme\Repositories\SectionRepository::publishDrafts()`, `discardDrafts()`, `getDraftedForPreview()` |
| Storefront preview | `shop.appearance.preview` route, gated by the `appearance.sections` permission |
| Page cache | `Webkul\FPC\Listeners\Section` flushes the home page, or everything when the type `rendersInLayout()` |

Events fired by the editor, all with the section as payload, are
`section.create.before/after`, `section.update.before/after`,
`section.delete.before/after`, `section.draft.save.before/after`,
`section.draft.discard.before/after`, `section.media.upload.before/after` and
`section.reorder.before/after`.

## Common mistakes

- **Declaring the type but not rendering it.** The tile appears and the section
  saves, but the storefront stays blank because the home view has no case for
  the code.
- **Reusing a core code by accident.** Two types with the same code collapse to
  the first declared; if yours comes second it silently never appears.
- **Emitting user markup without `sanitize()`.** Anything written with `{!! !!}`
  must go through `sanitizeHtml()` or an equivalent.
- **Building the option list every request.** `categoryOptions()` queries all
  categories; that is acceptable for the editor, which loads the schema once,
  but do not call it from a storefront view.

## Related

- [Creating Store Theme](./creating-store-theme.md) — the `customize` key and view resolution.
- [Image Cache Templates](./image-cache-templates.md) — the other half of the `customize` key.
- [Full Page Cache](../performance/configure-fpc.md) — why layout sections flush everything.

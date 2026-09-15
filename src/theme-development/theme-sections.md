# Theme Sections

A **section** is one block of the storefront that a merchant places and edits in the Appearance section editor, such as a product carousel or the footer links. A theme can reorder Bagisto's six section types, hide some, replace one or add its own, all from `config/themes.php`, with the classes in the `Webkul\CustomTheme` package from [Creating a Custom Theme Package](./creating-custom-theme-package.md). The merchant's side is in the User Guide under [Themes & Sections](https://docs.bagisto.com/appearance/themes) and [Section Types](https://docs.bagisto.com/appearance/section-types).

## What a Section Type Is

A section type is a PHP class extending `Webkul\Theme\Sections\SectionType`. It tells the Appearance editor which fields to draw, how to clean and reshape the values, and where the section may be placed. It does **not** render anything on the storefront; the theme's Blade views do (see [Rendering a custom type](#rendering-a-custom-type-on-the-storefront)).

**File:** `packages/Webkul/Theme/src/Sections/SectionType.php`

| Member | Purpose |
|---|---|
| `protected string $code` | The code the section is stored under. Unique among the types a theme offers. |
| `protected ?string $title` | Translation key of the name shown in the editor. Falls back to `Str::headline($code)`. |
| `protected string $icon` | Icon class drawn on the type's tile. Default `icon-cms`. |
| `protected bool $singleton` | A channel may hold only one section of this type. Once one exists the tile is no longer offered. |
| `protected bool $pinned` | The section is fixed to the bottom of the list rather than dragged into place. |
| `protected bool $layout` | The layout draws the section on every page rather than only the home page. Publishing a change to such a section flushes the whole page cache ([What Invalidates the Cache](../advanced/cache-strategy.md#what-invalidates-the-cache)). |
| `getFields(): array` | The fields the editor draws, described with the `SectionSchema` kinds below. Default `[]`. |
| `sanitize(array $options): array` | Clean the values before they are stored or previewed. |
| `prepareForEditor(array $options): array` | Reshape stored options the way the editor's fields read them. |
| `prepareForStorage(array $options): array` | Reshape what the editor posts the way the storefront reads it. |

Protected helpers build option lists and clean values: `categoryOptions()`, `limitOptions()`, `yesNo()`, `label()` (translates an `admin::app.appearance.sections.edit.*` key), and `sanitizeHtml()` / `sanitizeCss()`, which strip `script`, `iframe` and `form` elements and anything that could break out of a style block.

### The Core Types

| Code | Class | Notable flags |
|---|---|---|
| `image_carousel` | `Webkul\Theme\Sections\ImageCarousel` | repeater of image, title, link |
| `product_carousel` | `Webkul\Theme\Sections\ProductCarousel` | title plus filters (`sort`, `limit`, `category_id`, `featured`, `new`) |
| `category_carousel` | `Webkul\Theme\Sections\CategoryCarousel` | filters (`sort`, `limit`, `parent_id`) |
| `footer_links` | `Webkul\Theme\Sections\FooterLinks` | singleton, pinned, layout; nested repeater of columns and links |
| `static_content` | `Webkul\Theme\Sections\StaticContent` | two `code` fields, `html` and `css`, sanitized on save |
| `services_content` | `Webkul\Theme\Sections\ServicesContent` | layout; repeater of icon, title, description |

Their codes are also the cases of `Webkul\Theme\Enums\SectionTypeEnum`, which the configuration file uses to refer to them.

## Declaring the Types a Theme Offers

The `sections` list under a theme's `customize` key names the types the editor offers for that theme, **in the order the Add Section tiles show them**. The stock `default` theme lists every core type:

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

Each entry is a `SectionTypeEnum` case, for a core type, or a class extending `Webkul\Theme\Sections\SectionType`, for a theme's own type. `Webkul\Theme\SectionSchema::types()` applies these rules:

| Case | Result |
|---|---|
| Key left out, or no `customize` key | Every core type, in enum order |
| Empty array | No section types; the editor shows nothing to add |
| Two entries with the same code | The first wins, so your own class that reuses a core code replaces that core type |
| An entry that isn't a `SectionType` subclass | Reported as `Webkul\Theme\Exceptions\InvalidSectionType` and dropped; the editor still loads |

On Bagisto 2.4 the six types are fixed in `Webkul\Theme\SectionSchema`, and a theme can't add, remove or reorder them.

## Writing a Custom Section Type

### Step 1: Extend the Base Class

The smallest possible type is a code alone:

**File:** `packages/Webkul/CustomTheme/src/Sections/Lookbook.php`

```php
<?php

namespace Webkul\CustomTheme\Sections;

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

With no `getFields()` the editor shows the section with the message "This section has no settings to edit in this theme.", which suits a block whose markup is fixed in the theme's views.

### Step 2: Describe the Fields

`getFields()` returns field descriptors, each with a `key` (the option name it's stored under), a `type` (a `SectionSchema` constant) and a `label`. The editor draws whatever schema it receives, so a custom type needs **no Blade or Vue of its own in the admin**.

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

**File:** `packages/Webkul/CustomTheme/src/Sections/HeroBanner.php`

```php
<?php

namespace Webkul\CustomTheme\Sections;

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
    protected ?string $title = 'custom-theme::app.sections.hero-banner';

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
                'label' => trans('custom-theme::app.sections.slides'),
                'add_label' => trans('custom-theme::app.sections.add-slide'),
                'fields' => [
                    ['key' => 'image', 'type' => SectionSchema::IMAGE, 'label' => trans('custom-theme::app.sections.image')],
                    ['key' => 'heading', 'type' => SectionSchema::TEXT, 'label' => trans('custom-theme::app.sections.heading')],
                    ['key' => 'link', 'type' => SectionSchema::TEXT, 'label' => $this->label('link')],
                ],
            ],
        ];
    }
}
```

`$this->label('link')` reuses a core editor string; the `custom-theme::` labels come from the package's language files ([Add translations](./creating-custom-theme-package.md#step-3-add-translations)). Pick an `$icon` the admin already uses, such as `icon-image`, `icon-product`, `icon-folder` or `icon-cms`: the admin stylesheet only emits icon classes it finds in the Admin package and `packages/Webkul/Theme/src/Sections`.

### Step 3: Extend a Core Type Instead, When That Is Closer

A theme can subclass a core type and change only what differs. `ProductCarousel` exposes its filter list through `filterKeys()` so a theme can add a key its own product API understands:

**File:** `packages/Webkul/CustomTheme/src/Sections/DealsCarousel.php`

```php
<?php

namespace Webkul\CustomTheme\Sections;

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
    protected ?string $title = 'custom-theme::app.sections.deals-carousel';

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
            ['value' => 'on_sale', 'label' => trans('custom-theme::app.sections.on-sale'), 'options' => $this->yesNo()],
        ];
    }
}
```

Keeping the **same** code as the core type (`product_carousel`) replaces it for this theme, and existing sections of that type pick up the new schema. `FooterLinks` similarly exposes `protected ?int $maxColumns` for a footer with room for fewer columns.

### Step 4: Register the Type on the Theme

List the classes under the theme's `customize.sections`, in the order the tiles should show them:

**File:** `config/themes.php`

```php
<?php

use Webkul\CustomTheme\Sections\DealsCarousel;
use Webkul\CustomTheme\Sections\HeroBanner;
use Webkul\CustomTheme\Sections\Lookbook;
use Webkul\Theme\Enums\SectionTypeEnum;

return [
    'shop' => [
        // ...

        'custom-theme' => [
            // ...

            'customize' => [
                'sections' => [
                    HeroBanner::class,
                    SectionTypeEnum::PRODUCT_CAROUSEL,
                    DealsCarousel::class,
                    SectionTypeEnum::FOOTER_LINKS,
                    Lookbook::class,
                ],
            ],
        ],
    ],
];
```

Run `php artisan optimize:clear` and open the section editor for a channel running the theme: the Add Section tiles follow this list. Types left out can't be added, so this theme's merchant can no longer add a services strip. To keep every core type after your own, end the list with `...SectionTypeEnum::cases()`; since the first declaration of a code wins, the enum cases only fill in the types not listed yet.

### Step 5: Clean and Reshape Values When Needed

Three hooks run between the editor and the database. **`sanitize()`** cleans anything that ends up in the page unescaped. `SectionRepository::sanitizeOptions()` calls it through the section's type when a draft is saved, when a draft is published and when the preview renders a draft. `StaticContent` shows the pattern:

**File:** `packages/Webkul/Theme/src/Sections/StaticContent.php`

```php
/**
 * Clean the markup and styles, which are written into the page rather than escaped.
 */
public function sanitize(array $options): array
{
    if (array_key_exists('html', $options)) {
        $options['html'] = $this->sanitizeHtml($options['html']);
    }

    if (array_key_exists('css', $options)) {
        $options['css'] = $this->sanitizeCss($options['css']);
    }

    return $options;
}
```

Guard each key with `array_key_exists()` as it does, so a save never invents a field that wasn't posted. **`prepareForEditor()`** and **`prepareForStorage()`** translate between the shape the editor's fields expect and the shape stored; `FooterLinks` uses them to present stored `column_1`, `column_2`, … keys as one `columns` repeater.

### Test It

1. Open **Appearance** for a channel running `custom-theme` and choose **Add Section**. The tiles show Hero Banner, Product Carousel, Deals Carousel, Footer Links and Lookbook, in that order (Footer Links only while the channel has none, since it's a singleton).
2. Add a Hero Banner with one slide and publish it. With the home view from [Rendering a custom type](#rendering-a-custom-type-on-the-storefront) in place, the storefront home page shows the slide.
3. Add a Lookbook. Its tile is gone afterwards, because the type is a singleton.

## Rendering a Custom Type on the Storefront

The type class decides what the editor shows; **the theme's views decide what the shopper sees**. `HomeController::index()` passes the channel's published sections for its theme, from `SectionRepository::getRenderable()`, to the home page, which draws them through a `@switch` on the section's type:

**File:** `packages/Webkul/Shop/src/Resources/views/home/index.blade.php`

```blade
@foreach ($sections as $section)
    @php ($data = $section->options) @endphp

    @php ($marks = ($preview ?? false) && ! $section->getTypeInstance()?->rendersInLayout())

    @if ($marks)
        <div
            data-section-id="{{ $section->id }}"
            data-section-name="{{ $section->name }}"
        >
    @endif

    @switch ($section->type)
        @case (\Webkul\Theme\Enums\SectionTypeEnum::IMAGE_CAROUSEL->value)
            <x-shop::carousel
                :options="$data"
                aria-label="{{ trans('shop::app.home.index.image-carousel') }}"
            />

            @break

        {{-- ... --}}
    @endswitch

    @if ($marks)
        </div>
    @endif
@endforeach

@if ($preview ?? false)
    @include('shop::home.preview-bridge')
@endif
```

A section whose type isn't in that switch renders nothing, so a theme that adds a type also overrides `home/index.blade.php`. Replace `packages/Webkul/CustomTheme/src/Resources/views/home/index.blade.php`, the static page from the earlier pages, with a copy of the Shop file ([How Views Are Resolved](./creating-store-theme.md#how-views-are-resolved)), and add a case for the new code:

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

- **Keep the preview working.** The editor's live preview renders the same view with `$preview` set; the `$marks` wrapper's `data-section-id` lets the `preview-bridge` script scroll to and highlight a section. Keep the wrapper and the `@include('shop::home.preview-bridge')`.
- **Image fields store bare disk paths**, without a host, so they survive a domain change and work on a remote disk. Resolve them with `bagisto_theme_storage()->url($path)` for the original, or `bagisto_theme_storage()->imageUrls($path)`, which returns `['url' => ..., 'srcset' => ['large' => ..., 'medium' => ..., 'small' => ...]]` through the image cache, or `null` for an empty path.
- **Layout-drawn types read themselves.** The footer and the services strip aren't part of the home-page loop; `components/layouts/footer/index.blade.php` and `components/layouts/services.blade.php` load their section with `SectionRepository::findOneOfType()` and `findAllOfType()`. A custom type with `$layout = true` needs the same in the layout component that draws it, overridden under the theme's `views_path`, and must tolerate a section whose options are still empty.

## Starting Sections for a Theme

Activating a theme copies no sections, so a channel switched to your theme starts with no footer links and no services strip. A theme package that should look complete on first use creates starting sections from a listener on `appearance.theme.activate.after`, fired by `ThemeController::activateOn()` when a theme is activated from the gallery, and `core.channel.create.after`, fired by `ChannelController::store()` when a channel is created with the theme set. Both pass the channel:

**File:** `packages/Webkul/CustomTheme/src/Listeners/StartingSections.php`

```php
<?php

namespace Webkul\CustomTheme\Listeners;

use Illuminate\Support\Facades\Event;
use Webkul\Core\Contracts\Channel;
use Webkul\Theme\Enums\SectionTypeEnum;
use Webkul\Theme\Repositories\SectionRepository;

class StartingSections
{
    /**
     * The theme code the starting sections are created for.
     */
    public const THEME_CODE = 'custom-theme';

    /**
     * Create a new listener instance.
     */
    public function __construct(protected SectionRepository $sectionRepository) {}

    /**
     * Give a channel the theme's starting sections the first time it runs the theme.
     */
    public function handle(Channel $channel): void
    {
        if (
            $channel->theme !== self::THEME_CODE
            || $this->hasSections($channel->id)
        ) {
            return;
        }

        Event::dispatch('section.create.before');

        $section = $this->sectionRepository->create([
            'type' => SectionTypeEnum::SERVICES_CONTENT->value,
            'name' => trans('custom-theme::app.sections.services'),
            'sort_order' => 1,
            'status' => 1,
            'channel_id' => $channel->id,
            'theme_code' => self::THEME_CODE,
            ...$this->translations($channel),
        ]);

        Event::dispatch('section.create.after', $section);
    }

    /**
     * Whether the channel already holds sections for the theme.
     */
    protected function hasSections(int $channelId): bool
    {
        return $this->sectionRepository->findWhere([
            'channel_id' => $channelId,
            'theme_code' => self::THEME_CODE,
        ])->isNotEmpty();
    }

    /**
     * The section's options in every locale the channel serves, keyed by locale code.
     */
    protected function translations(Channel $channel): array
    {
        return $channel->locales
            ->mapWithKeys(fn ($locale) => [
                $locale->code => [
                    'options' => [
                        'services' => [
                            [
                                'service_icon' => 'icon-truck',
                                'title' => trans('custom-theme::app.sections.free-shipping', [], $locale->code),
                                'description' => trans('custom-theme::app.sections.free-shipping-info', [], $locale->code),
                            ],
                        ],
                    ],
                ],
            ])
            ->all();
    }
}
```

Register the listener in the service provider's `boot()` method, importing `Illuminate\Support\Facades\Event` and `Webkul\CustomTheme\Listeners\StartingSections`:

```php
Event::listen(['appearance.theme.activate.after', 'core.channel.create.after'], StartingSections::class);
```

- **Check for existing sections first**, so switching a channel back to the theme doesn't add a second services strip.
- **The sections are live.** With `status` set to `1` they show without being published.
- **Options are stored per locale.** `SectionRepository::create()` takes a translation keyed by each locale code, so write one for every locale the channel serves.
- **Fire the section events**, as `SectionController::store()` does, so the full page cache clears the pages the section appears on.
- **Add a footer the same way.** A `footer_links` section stores its columns as `column_1`, `column_2` and so on, the shape `FooterLinks::prepareForStorage()` writes.

## How the Pieces Connect

| Concern | Where |
|---|---|
| Resolving a theme's list | `Webkul\Theme\SectionSchema::types()`, `type()`, `for()` |
| Section model | `Webkul\Theme\Models\Section`, `getTypeInstance()` |
| Admin editor | `Webkul\Admin\Http\Controllers\Appearance\SectionController`, the view `admin::appearance.sections.index` and the components under `admin::components.appearance.sections` |
| Routes | `admin.appearance.sections.*` in `packages/Webkul/Admin/src/Routes/appearance-routes.php` |
| ACL | `appearance.sections`, `appearance.sections.create`, `.edit`, `.delete` |
| Drafts and publishing | `Webkul\Theme\Repositories\SectionRepository`: `saveDraft()`, `publishDraft()`, `discardDraft()`, `publishDrafts()`, `discardDrafts()`, `getDraftedForPreview()` |
| Storefront preview | `shop.appearance.preview` route (`GET appearance-preview`), gated by the `appearance.sections` permission |
| Page cache | `Webkul\FPC\Listeners\Section` flushes the home page, or everything when the type `rendersInLayout()` |

The editor fires `section.create`, `section.update`, `section.delete`, `section.draft.save`, `section.draft.discard`, `section.media.upload` and `section.reorder` in `before` and `after` pairs; publishing fires `section.update.before` and `.after` for each published section, which is what clears the page cache. What each event passes is listed under [Appearance](../advanced/event-listeners.md#appearance) in Event Listeners.

## Things to Watch

- **Declare and render.** A declared type whose code has no case in the home view saves fine but shows nothing on the storefront.
- **Codes are unique per theme.** Two types with the same code collapse to the first declared; if yours comes second it never appears.
- **Sections belong to a theme and a channel.** Stored sections are keyed by theme code. Removing a type from the list doesn't delete its sections, and renaming a code orphans them.
- **Sanitize user markup.** Anything written with `{!! !!}` must go through `sanitize()` and `sanitizeHtml()` or an equivalent.
- **Use an icon the admin ships**, or the tile shows none.
- **Keep `categoryOptions()` in the editor.** It queries all categories; don't call it from a storefront view.

## Next Step

Next, register the image sizes your theme's views need.

**Continue to:** [Image Cache](./image-cache-templates.md)

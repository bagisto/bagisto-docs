# Blade Components

The Shop and Admin packages ship anonymous Blade components in `packages/Webkul/Shop/src/Resources/views/components/` and `packages/Webkul/Admin/src/Resources/views/components/`, used as `<x-shop::…>` and `<x-admin::…>`. Most wrap a Vue 3 component registered inline, so they work inside the Vue app the layout mounts. Each `components` directory also holds an `example.blade.php` with components in use.

A component that exists in both packages is described once, with the differences noted. In the prop tables, a **Blade** prop is declared with `@props()` and takes a PHP value (`:is-active="true"`); a **Vue** prop is declared on the Vue component and is bound from JavaScript state with a double colon (`::loading="isLoading"`). Defaults are read from the component files.

**On this page**

- **Shop and Admin:** [Accordion](#accordion), [Drawer](#drawer), [Modal](#modal), [Dropdown](#dropdown), [Tabs](#tabs), [Flash Messages and Confirm Modal](#flash-messages-and-confirm-modal), [Form](#form), [Button](#button), [Date Pickers](#date-pickers) (date and date-time; Admin adds time), [Quantity Changer](#quantity-changer), [TinyMCE](#tinymce), [DataGrid](#datagrid), [Table](#table), [Shimmer](#shimmer)
- **Shop only:** [Range Slider](#range-slider), [`media`](#media-uploads), [Breadcrumbs](#breadcrumbs), [Carousel](#carousel), [Image Zoomer](#image-zoomer), [Lazy Image](#lazy-image), [Products, Categories and Ratings](#products-categories-and-ratings)
- **Admin only:** [Date Range Picker](#date-pickers), [`media.images` and `media.videos`](#media-uploads), [Star Rating](#star-rating), [Tree View](#tree-view), [Charts](#charts), [Command Palette](#command-palette), [Product Search](#product-search), [SEO Preview](#seo-preview)

## Overriding a Component

A theme replaces a component with a copy at the same path under its `views_path`, without the `components` segment: `packages/Webkul/Shop/src/Resources/views/components/products/card.blade.php` becomes `resources/themes/custom-theme/views/products/card.blade.php`. Component overrides are only read from `views_path`; see [Creating a Store Theme](./creating-store-theme.md#blade-components). When you edit the copy, keep:

- the `@props` names and defaults and the named slots, which the views that use the component pass;
- the `v-` element name, the `x-template` id and the name given to `app.component()`;
- the events the component emits or listens for, such as `add-flash` and `open-confirm-modal`.

To restyle a component without overriding it, pass classes: the accordion, drawer and modal merge the classes set on the component and on its named slots with their own.

## Overlays and Disclosure

### Accordion

`<x-shop::accordion>`, `<x-admin::accordion>`: a collapsible section, **expanded by default**.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `is-active` | Blade | `true` | Initial state; pass `:is-active="false"` to start collapsed |

Slots: `header` (the clickable header) and `content`.

```blade
<x-shop::accordion class="last:border-b-0">
    <x-slot:header class="py-2.5!">
        Accordion Header
    </x-slot>

    <x-slot:content class="p-0!">
        Accordion Content
    </x-slot>
</x-shop::accordion>
```

### Drawer

`<x-shop::drawer>`, `<x-admin::drawer>`: a panel that slides in from an edge of the screen.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `is-active` | Blade | `false` | Whether the drawer starts open |
| `position` | Blade | `'right'` | `top`, `bottom`, `left` or `right` |
| `width` | Blade | `'500px'` | The drawer's width |

Slots: `toggle` (the element that opens it), `header`, `content` and `footer`, as in the modal below.

### Modal

`<x-shop::modal>`, `<x-admin::modal>`: a dialog that floats above the page.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `is-active` | Blade | `false` | Whether the modal starts open |
| `panel-class` | Vue | `max-w-[595px]` (Shop), `max-w-[568px]` (Admin) | Classes for the dialog panel, such as `panel-class="max-w-192"` for a wider modal |

Slots: `toggle`, `header`, `content` and `footer`.

```blade
<x-shop::modal>
    <x-slot:toggle>
        Modal Toggle
    </x-slot>

    <x-slot:header>
        Modal Header
    </x-slot>

    <x-slot:content>
        Modal Content
    </x-slot>
</x-shop::modal>
```

### Dropdown

`<x-shop::dropdown>`, `<x-admin::dropdown>`: a menu positioned relative to its toggle. Clicking outside it or pressing Escape always closes it.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `position` | Blade | `'bottom-right'` (Shop), `'bottom-left'` (Admin) | `top-left`, `top-right`, `bottom-left` or `bottom-right` |
| `close-on-click` | Vue | `true` | Also close after a click **inside** the menu; bind `::close-on-click="false"` for menus with form controls |
| `fit-toggle` | Blade | `false` | Admin only. Make the menu as wide as the toggle |

Slots: `toggle`, `content` (free content) and `menu` (a list of `dropdown.menu.item` entries).

```blade
<x-shop::dropdown position="bottom-left">
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:menu>
        <x-shop::dropdown.menu.item>
            Menu Item 1
        </x-shop::dropdown.menu.item>

        <x-shop::dropdown.menu.item>
            Menu Item 2
        </x-shop::dropdown.menu.item>
    </x-slot>
</x-shop::dropdown>
```

### Tabs

`<x-shop::tabs>`, `<x-admin::tabs>` hold one `tabs.item` per tab.

| Prop | On | Kind | Default | Description |
|---|---|---|---|---|
| `position` | `tabs` | Blade | `'left'` | Alignment of the tab headers: `left`, `right` or `center` |
| `title` | `tabs.item` | Blade | `''` | The tab's heading |
| `is-selected` | `tabs.item` | Blade | `false` | Whether the tab starts selected |

On the storefront, give each item an `id`; the tab header uses it for its accessibility attributes.

```blade
<x-shop::tabs position="center">
    <x-shop::tabs.item
        id="description-tab"
        class="container mt-15 p-0!"
        :title="trans('shop::app.products.view.description')"
        :is-selected="true"
    >
        <p class="text-lg text-zinc-500">
            {{ $product->description }}
        </p>
    </x-shop::tabs.item>

    <x-shop::tabs.item
        id="information-tab"
        class="container mt-15 p-0!"
        :title="trans('shop::app.products.view.additional-information')"
    >
        <p class="text-lg text-zinc-500">
            {{ $product->short_description }}
        </p>
    </x-shop::tabs.item>
</x-shop::tabs>
```

### Flash Messages and Confirm Modal

The layouts render `<x-shop::flash-group>` and `<x-shop::modal.confirm>` (`<x-admin::flash-group>` and `<x-admin::modal.confirm>` in the admin) once per page. The flash group shows the session's `success`, `warning`, `error` and `info` flash messages as toasts, such as `session()->flash('success', trans('shop::app.home.thanks-for-contact'))` from a controller. From a Vue component, use the event emitter:

```js
this.$emitter.emit('add-flash', { type: 'success', message: response.data.message });

this.$emitter.emit('open-confirm-modal', {
    agree: () => {
        this.remove(productId);
    },
});
```

The confirm modal's `title`, `message` and `options` (`btnAgree`, `btnDisagree`) default to the translated confirmation strings.

## Forms and Inputs

<a id="shop-form"></a>

### Form

`<x-shop::form>`, `<x-admin::form>`: a form wrapper with CSRF protection and method spoofing, built on VeeValidate's form. Without the `as` attribute it's a standard form that posts to `action`; with `as`, it's a Vue form whose submission you handle.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `method` | Blade | `'POST'` | Standard mode only. `GET`, `POST`, `PUT`, `PATCH` or `DELETE` |

```blade
<x-shop::form :action="route('shop.home.contact_us.send_mail')">
    {{-- Form fields --}}

    <button
        type="submit"
        class="primary-button"
    >
        @lang('shop::app.home.contact.submit')
    </button>
</x-shop::form>

<x-shop::form
    v-slot="{ meta, errors, handleSubmit }"
    as="div"
>
    <form @submit="handleSubmit($event, save)">
        {{-- Form fields --}}
    </form>
</x-shop::form>
```

Build the fields with `form.control-group`, `.label`, `.control` and `.error`; the `type` values the control supports are in [Validating a Field](./validation.md#validating-a-field), and how server errors reach the fields in [Showing Server Errors in the Form](./validation.md#showing-server-errors-in-the-form). The admin also has `<x-admin::form.control-group.advance.select>` and `<x-admin::form.control-group.advance.multiselect>`, searchable pickers with the Blade props `name`, `options`, `value`, `placeholder` and `label`.

### Button

`<x-shop::button>`, `<x-admin::button>`: a button with a loading spinner.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `title` | Vue | None | Text on the button |
| `loading` | Vue | `false` | Shows the spinner |
| `button-type` | Vue | None | Intended type (`'button'`, `'submit'`). It isn't bound to the `type` attribute, so pass `type="submit"` as a plain attribute to submit a form |
| `button-class` | Vue | None | Classes applied to the inner `<button>` |

```blade
<x-admin::button
    type="submit"
    class="primary-button"
    button-type="submit"
    :title="trans('admin::app.catalog.products.edit.save-btn')"
    ::loading="isLoading"
    ::disabled="isLoading"
/>
```

`:title` passes a fixed string; `::loading` binds the spinner to Vue state while a request is in flight.

### Date Pickers

`<x-shop::flat-picker.date>`, `<x-shop::flat-picker.datetime>` and the same two in the admin attach a Flatpickr date or date-and-time picker to the input you place inside them.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `name` | Vue | None | Name of the input |
| `value` | Vue | None | Initial value |
| `allow-input` | Vue | `true` | Whether the date can be typed |
| `disable` | Vue | None | Dates that can't be picked |
| `min-date` | Vue | None | Earliest selectable date |
| `max-date` | Vue | None | Latest selectable date |

```blade
<x-shop::flat-picker.date ::allow-input="false">
    <input
        type="date"
        name="date_from"
        class="flex min-h-10 w-full rounded-md border px-3 py-2 text-sm text-gray-600 transition-all hover:border-gray-400 max-sm:py-1.5"
        placeholder="Date"
    />
</x-shop::flat-picker.date>
```

`<x-admin::flat-picker.time>` takes none of these props: it always uses a 24-hour `H:i` format and emits `onChange` with the selected time.

`<x-admin::date-range-picker>` is the preset-driven range picker of the reporting pages (Today, Yesterday, This week, Last month and so on, capped at today). It emits `change` with the new `{ start, end }` pair.

| Prop | Kind | Description |
|---|---|---|
| `start-label` | Blade | Label above the start date input |
| `end-label` | Blade | Label above the end date input |
| `start` | Vue | Selected start date, `Y-m-d` |
| `end` | Vue | Selected end date, `Y-m-d` |

```blade
<x-admin::date-range-picker
    :start-label="trans('admin::app.reporting.view.start-date')"
    :end-label="trans('admin::app.reporting.view.end-date')"
    ::start="filters.start"
    ::end="filters.end"
    @change="applyDateRange"
/>
```

### Quantity Changer

`<x-shop::quantity-changer>`, `<x-admin::quantity-changer>`: minus and plus buttons around a quantity, backed by a hidden input. It emits `change` with the new quantity.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `name` | Blade | `''` | Name of the hidden input |
| `value` | Blade | `1` | Initial quantity |
| `min-value` | Blade | `1` | Shop only. The lowest quantity the minus button allows |
| `removable` | Blade | `false` | Shop only. Decreasing below `min-value` emits `remove` instead of stopping, as the mini cart does |

```blade
<x-shop::quantity-changer
    name="quantity"
    value="1"
    class="gap-x-4 rounded-xl px-7 py-4"
/>
```

### Range Slider

`<x-shop::range-slider>`: a two-handle slider for a numeric range such as a price filter, keeping the handles at least 10% of `default-allowed-max-range` apart. It emits `change-range` when a handle moves. All five props are Vue props with no defaults, so pass every one.

| Prop | Kind | Description |
|---|---|---|
| `default-type` | Vue | `'integer'`, `'float'` or `'price'` |
| `default-allowed-min-range` | Vue | Lowest value on the slider |
| `default-allowed-max-range` | Vue | Highest value on the slider |
| `default-min-range` | Vue | Initial lower handle |
| `default-max-range` | Vue | Initial upper handle |

```blade
<x-shop::range-slider
    default-type="price"
    ::default-allowed-min-range="0"
    ::default-allowed-max-range="500"
    ::default-min-range="0"
    ::default-max-range="500"
    @change-range="handlePriceChange($event)"
/>
```

### Media Uploads

`<x-shop::media>` is the storefront's upload tile, for customer images such as a profile picture or return photos. The form control renders it for `type="image"`.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `width` | Blade | `'200px'` | Tile width |
| `height` | Blade | `'200px'` | Tile height |
| `name` | Vue | `'attachments'` | Input name |
| `is-multiple` | Vue | `false` | Accept several files |
| `rules` | Vue | None | VeeValidate rules |
| `accepted-types` | Vue | `'image/*, video/*,'` | The input's `accept` value |
| `label` | Vue | The translated "Add attachments" | Tile label |
| `src` | Vue | `''` | URL of an image already stored |

```blade
<x-shop::form.control-group.control
    type="image"
    name="images[]"
    :label="trans('shop::app.customers.account.rma.create.images')"
    :is-multiple="true"
    accepted-types="image/*"
/>
```

`<x-admin::media.images>` and `<x-admin::media.videos>` are the admin's upload tiles. All their props are Blade props, forwarded to the Vue component by the Blade file, so pass PHP values (`:uploaded-images="$product->images"`); a `::` binding isn't forwarded. Hovering a tile reveals a delete action and an edit action, which replaces the file, or opens the SEO drawer (alt text, file name, replace) when `enable-seo` is on.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `name` | Blade | `'images'` | The name of the input field. Always pass it: `media.videos` currently falls back to `'images'` |
| `allow-multiple` | Blade | `false` | Allow several files |
| `show-placeholders` | Blade | `false` | Images only. Show the front, back, left and right placeholder tiles of the product form |
| `uploaded-images` | Blade | `[]` | Already stored images, each with `id` and `url`; `uploaded-videos` for videos |
| `width` | Blade | `'120px'` | Tile width; `210px` for videos |
| `height` | Blade | `'120px'` | Tile height |
| `enable-seo` | Blade | `false` | Add the alt-text and title fields beside each tile |
| `meta-name` | Blade | `''` | Input name for that SEO metadata, such as `images[meta]` |

```blade
<x-admin::media.images
    name="images[files]"
    meta-name="images[meta]"
    :allow-multiple="true"
    :show-placeholders="true"
    :enable-seo="true"
    :uploaded-images="$product->images"
/>

<x-admin::media.videos
    name="videos[files]"
    meta-name="videos[meta]"
    :allow-multiple="true"
    :enable-seo="true"
    :uploaded-videos="$product->videos"
/>
```

### TinyMCE

`<x-shop::tinymce>`, `<x-admin::tinymce>` wrap the TinyMCE editor. You rarely mount them directly; the form control renders one for a `textarea` when `:tinymce="true"` is passed.

| Prop | Kind | Description |
|---|---|---|
| `selector` | Vue | CSS selector of the textarea to turn into an editor |
| `field` | Vue | The VeeValidate field object the editor writes back to |
| `prompt` | Vue | Admin only. The prompt pre-filled in the **Magic AI** dialog |

The admin editor adds Generative AI (Magic AI) content generation: its **Magic AI** button shows when `magic_ai.general.settings.enabled` and `magic_ai.admin_features.text_generation.enabled` are both on, and lists the models of the providers in `magic_ai.admin_features.text_generation.providers`. The storefront editor has no Magic AI button.

```blade
<x-admin::form.control-group.control
    type="textarea"
    id="content"
    name="content"
    rules="required"
    :value="old('content')"
    :label="trans('admin::app.cms.create.content')"
    :tinymce="true"
    prompt="Write a short, friendly description for this category."
/>
```

### Star Rating

`<x-admin::star-rating>`: a five-star rating, read-only or editable, such as `<x-admin::star-rating :value="$review->rating" />`.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `name` | Blade | `'rating'` | Hidden field name for form submission |
| `value` | Blade | `0` | Initial rating, 0 to 5 |
| `disabled` | Blade | `true` | Read-only; pass `:disabled="false"` for an input |

### Tree View

`<x-admin::tree.view>`: a hierarchical checkbox or radio tree, with translated labels, hierarchical or individual selection, and collapsible items. Only `input-type` and `selection-type` are Blade props.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `input-type` | Blade | `'checkbox'` | `'checkbox'` or `'radio'` |
| `selection-type` | Blade | `'hierarchical'` | `'individual'` or `'hierarchical'` |
| `name-field` | Vue | `'permissions'` | Field name for form submission |
| `value-field` | Vue | `'value'` | Item field holding the value |
| `id-field` | Vue | `'id'` | Item field holding the unique identifier |
| `label-field` | Vue | `'name'` | Item field holding the label |
| `children-field` | Vue | `'children'` | Item field holding child items |
| `items` | Vue | `[]` | Tree data as a JSON string (`:items="json_encode($items)"`), because it crosses the Blade-to-Vue boundary |
| `value` | Vue | `[]` | Currently selected values |
| `fallback-locale` | Vue | None | Fallback locale for translated labels; pass `config('app.fallback_locale')` |
| `collapse` | Vue | `false` | Whether items start collapsed |
| `searchable` | Vue | `false` | Show a filter box above the tree |
| `search-placeholder` | Vue | `'Search'` | Placeholder for that filter box |

**File:** `packages/Webkul/Admin/src/Resources/views/settings/roles/create.blade.php`

```blade
<x-admin::tree.view
    input-type="checkbox"
    value-field="key"
    id-field="key"
    searchable="true"
    search-placeholder="{{ trans('admin::app.settings.roles.create.search-permissions') }}"
    :items="json_encode(acl()->getItems())"
    :fallback-locale="config('app.fallback_locale')"
/>
```

A single-choice category picker:

```blade
<x-admin::tree.view
    input-type="radio"
    selection-type="individual"
    name-field="category_id"
    value-field="id"
    label-field="name"
    children-field="children"
    :items="json_encode($categories)"
    :value="json_encode([$selectedCategoryId])"
/>
```

## Data Display

### DataGrid

`<x-shop::datagrid>`, `<x-admin::datagrid>` render a DataGrid from its JSON endpoint, with sorting, filtering, pagination and mass actions, such as `<x-admin::datagrid :src="route('admin.catalog.products.index')" />`. The columns live in the DataGrid class. The admin's export button is `<x-admin::datagrid.export :src="…" />`; see [DataGrid](../package-development/datagrid.md).

### Table

`<x-shop::table>`, `<x-admin::table>`: a table built from `table`, `table.thead`, `table.tbody`, `table.th` and `table.td`, styled with classes. The Shop table has one `table.tr` for both head and body rows; the admin table has `table.thead.tr` and `table.tbody.tr`.

```blade
<x-admin::table>
    <x-admin::table.thead>
        <x-admin::table.thead.tr>
            <x-admin::table.th>
                Heading 1
            </x-admin::table.th>
        </x-admin::table.thead.tr>
    </x-admin::table.thead>

    <x-admin::table.tbody>
        <x-admin::table.tbody.tr>
            <x-admin::table.td>
                Column 1
            </x-admin::table.td>
        </x-admin::table.tbody.tr>
    </x-admin::table.tbody>
</x-admin::table>
```

### Shimmer

Placeholder skeletons shown while a grid, form, product list or report loads, under `shimmer/` in both packages, such as `<x-shop::shimmer.datagrid />`.

### Charts

`<x-admin::charts.bar>` and `<x-admin::charts.line>` draw Chart.js charts.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `labels` | Vue | `[]` | Labels for the x-axis |
| `datasets` | Vue | None usable | Chart.js datasets; always pass it |
| `aspect-ratio` | Vue | `3.23` | Width divided by height |

The Chart.js bundle is a separate entry point of the admin build, so load it on the page first, as the reporting pages do:

```blade
@pushOnce('scripts')
    <script
        type="module"
        src="{{ bagisto_asset('js/chart.js') }}"
    ></script>
@endPushOnce

<x-admin::charts.bar
    ::labels="chartLabels"
    ::datasets="chartDatasets"
    ::aspect-ratio="1.41"
/>
```

### Breadcrumbs

`<x-shop::breadcrumbs>` renders the breadcrumb trail registered under a name in `routes/breadcrumbs.php`, such as `<x-shop::breadcrumbs name="addresses.edit" :entity="$address" />`. A name with no registered breadcrumb makes the component fail.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `name` | Blade | `''` | The breadcrumb name |
| `entity` | Blade | `null` | The model or value the breadcrumb callback receives |

## Storefront Media and Catalog

### Carousel

`<x-shop::carousel>`: a full-width image slider with drag and touch support, autoplay and pagination. The home page renders the `image_carousel` section with it: `<x-shop::carousel :options="$data" />`.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `options` | Blade | None | `['images' => [...]]`, each image with a stored `image` path, a `title` and a `link`. Paths are resolved with `bagisto_theme_storage()->imageUrls()` |

### Image Zoomer

`<x-shop::image-zoomer>`: a modal gallery with zoom, drag and scroll for images and videos, used by the product gallery and reviews.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `attachments` | Vue | `[]` | The images and videos to show, each with a `url` |
| `is-image-zooming` | Vue | `false` | Opens and closes the modal |
| `initial-index` | Vue | `0` | The attachment to open on, as a string ending in `_` and the index, such as `media_0` |

```blade
<x-shop::image-zoomer
    ::attachments="attachments"
    ::is-image-zooming="isImageZooming"
    ::initial-index="`media_${activeIndex}`"
/>
```

### Lazy Image

`<x-shop::media.images.lazy>`: an `<img>` wrapper that defers loading until the image scrolls into view and swaps in a fallback when the source fails. Other attributes (`class`, `alt`, `width`, `height`) pass through to the `<img>`.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `lazy` | Vue | `true` | Load the image only when it enters the viewport |
| `src` | Vue | `''` | Image URL, usually bound with `::src` from Vue state |
| `fallback` | Vue | `''` | URL shown when `src` fails to load |

```blade
<x-shop::media.images.lazy
    class="h-[110px] max-w-[110px] rounded-xl max-md:h-20 max-md:max-w-20"
    ::src="item.base_image.small_image_url"
    ::alt="item.name"
    width="110"
    height="110"
    ::key="item.id"
/>
```

### Products, Categories and Ratings

| Component | Props | Purpose |
|---|---|---|
| `x-shop::products.card` | Vue: `product`, `mode` (`grid` or `list`) | One product tile with image, price, wishlist, compare and add-to-cart |
| `x-shop::products.carousel` | Vue: `src` (JSON endpoint returning products), `title`, `navigation-link` | Horizontal product slider fed by an API URL, used by the `product_carousel` section |
| `x-shop::categories.carousel` | Vue: `src`, `title`, `navigation-link` | The same slider for categories, used by the `category_carousel` section |
| `x-shop::products.ratings` | Blade: `average` (`0`), `total` (`0`), `rating` (`true`) | Star row with an average and review count |

## Admin Tools

### Command Palette

`<x-admin::command-palette />` is mounted once by the admin layout and opens with **Ctrl+K** (**⌘K** on macOS). It takes no Blade props; it reads its rows from the `admin.command_palette.index` endpoint and is extended through configuration rather than markup. See [Command Palette](../advanced/command-palette.md).

### Product Search

`<x-admin::products.search>` is the drawer the product form uses to pick linked, grouped and bundled products. Open it through a template ref with `openDrawer()`, and read the chosen products from its `onProductAdded` event.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `added-product-ids` | Vue | `[]` | Ids of products already chosen; they're left out of the results |
| `query-params` | Vue | `{}` | Extra parameters sent with the search request, such as `{type: 'simple'}` |

**File:** `packages/Webkul/Admin/src/Resources/views/catalog/products/edit/links.blade.php`

```blade
<x-admin::products.search
    ref="productSearch"
    ::added-product-ids="addedProductIds"
    @onProductAdded="addSelected($event)"
/>
```

The same view opens it with `$refs.productSearch.openDrawer()`.

### SEO Preview

`<x-admin::seo>` watches a form's meta title, meta description and URL key fields and renders a live search-result preview, such as `<x-admin::seo slug="page" />`.

| Prop | Kind | Default | Description |
|---|---|---|---|
| `meta-title-field` | Vue | `'meta_title'` | Name of the meta title input to watch |
| `meta-description-field` | Vue | `'meta_description'` | Name of the meta description input to watch |
| `url-key-field` | Vue | `'url_key'` | Name of the URL key input to watch |
| `slug` | Vue | `''` | Path prefix shown before the URL key, such as `page` |
| `url-type` | Vue | `'path'` | `path` shows the `slug` and the key after the store URL; `host` shows the key as a host name, as the channel form does |

## Your Own Components

A theme package registers components of its own with `Blade::anonymousComponentPath()` in its service provider, and uses them as `<x-custom-theme::...>`; [A Standalone Layout Component](./understanding-layouts.md#a-standalone-layout-component) shows the registration. Build them from the components above rather than copying their markup, so they pick up Bagisto's fixes.

## Next Step

Next, let the merchant customize the home page with your theme's own section types.

**Continue to:** [Theme Sections](./theme-sections.md)

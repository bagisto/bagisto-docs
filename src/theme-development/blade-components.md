# Blade Components

Comprehensive guide to Bagisto's pre-built Blade components for both shop and admin interfaces. These components provide consistent UI elements with Vue.js integration for enhanced performance and user experience.

::: info What You'll Learn
- Using shop components for customer-facing interfaces
- Implementing admin components for backend functionality
- Component customization and styling options
- Integration with your custom theme packages
- Best practices for component usage
:::

## Introduction

Bagisto provides an extensive collection of reusable Blade components for both **Shop** and **Admin** packages. These components integrate Vue.js functionality within Blade templates to deliver optimal performance and user experience.

**Key Benefits:**
- **Consistent UI**: Unified design across all interfaces
- **Performance**: Vue.js integration for reactive functionality
- **Customization**: Flexible props and slots for customization
- **Accessibility**: Built-in accessibility features
- **Responsive**: Mobile-first responsive design

::: tip Integration with Theme Development
These components work seamlessly with the custom themes covered in our previous guides:
- [Custom Theme Package](./creating-custom-theme-package.md) - Package structure and development
- [Understanding Layouts](./understanding-layouts.md) - Layout integration
- [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) - Asset management with components
:::

::: info Laravel Blade Foundation
For comprehensive details about Blade components and templating, visit the [Laravel Blade documentation](https://laravel.com/docs/blade#introduction).
:::

::: info Where the components live and how props are declared
Every component below is an anonymous Blade component under `packages/Webkul/Shop/src/Resources/views/components/` or `packages/Webkul/Admin/src/Resources/views/components/`, registered on the `shop` and `admin` namespaces; a theme overrides one by placing the same path under its `views_path` (see [Creating Store Theme](./creating-store-theme.md#how-views-are-resolved)). Most components are thin wrappers around a Vue component. A prop listed as a **Blade prop** is declared with `@props()` and takes a PHP value (`:is-active="true"`); a prop listed as a **Vue prop** is declared on the Vue component and is bound from JavaScript state with the double-colon syntax (`::attachments="attachments"`). The defaults below are read from the current component files.
:::

## Shop Components

Shop components are reusable Blade components used to build the shop. They manage product listings, shopping carts, checkout processes, and user interactions, providing a seamless shopping experience for customers.

### Shop Accordion

Bagisto provides a collapsible accordion UI element, allowing users to toggle the visibility of content sections. It is commonly used for organizing and presenting information in a compact and intuitive manner.

| Props           | Type    | Default | Description                                                 |
| --------------- | ------- | ------- | ------------------------------------------------------------|
| **`is-active`** | Boolean | `true`  | Determines the initial state of the accordion. It is **expanded by default**; pass `:is-active="false"` to start collapsed. |

| Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`header`**  | Used to customize the header section of the accordion. |
  | **`content`** | Used to customize the content section of the accordion. |

You can customize the appearance of the accordion `header` and `content` by passing additional CSS classes to the header and content slots, respectively.

Let's assume you want to use the **`accordion`** component, you can call it like this:

```html
<!-- Shop Accordion -->
<x-shop::accordion 
    title="Shop Accordion" 
    class="last:border-b-0"
>
    <x-slot:header class="!py-2.5">
        Accordion Header
    </x-slot>

    <x-slot:content class="!p-0">
        Accordion Content
    </x-slot>
</x-shop::accordion>
```

### Shop Breadcrumbs

The breadcrumbs component generates `breadcrumb` navigation for the application.

| Props       | Type      | Description                                                                 |
| ---------- | --------- | --------------------------------------------------------------------------- |
| **`name`** | `String`  | Specifies the name of the current page or resource.                          |
| **`entity`** | `Mixed`  | Optional. Represents the entity associated with the current page. It could be an object, ID, or other data used to retrieve additional information for breadcrumb customization. |

Let's assume you want to use the **`breadcrumbs`** component. You can call it like this:

```html
<!-- Shop Accordion -->
<x-shop::breadcrumbs
    name="addresses.edit"
    :entity="$address"
/>
```

By using the breadcrumbs component with these props, you can effectively enhance navigation within your shop application, providing users with clear paths to navigate through different sections or resources.

### Shop Button

The `button` component in Bagisto provides a versatile button element that supports loading state with a spinner animation. It offers flexibility in styling and functionality to suit various use cases within your application.

  | Prop            | Type          | Default Value | Description                                                            |
| ---------------   | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`title`**       | `String`      | None          | Vue prop. Title text displayed on the button.                                     |
| **`loading`**     | `Boolean`     | `false`       | Vue prop. Indicates whether the button is in a loading state.                      |
| **`button-type`**  | `String`      | None          | Vue prop. Intended button type (`'button'`, `'submit'`); the component does not bind it to the `type` attribute, so pass `type="submit"` as a plain attribute when the button must submit a form. |
| **`button-class`** | `String`      | None          | Vue prop. Classes applied to the inner `<button>`.                                  |

Let's assume you want to use the **`button`** component. You can call it like this:
 
```html
<!-- Shop Button -->
<x-shop::button
    type="submit"
    class="secondary-button w-full max-w-full max-md:py-3 max-sm:rounded-lg max-sm:py-1.5"
    button-type="submit"
    :title="trans('shop::app.checkout.cart.index.continue-shopping')"
    ::loading="isStoring"
    ::disabled="isStoring"
/>
```

`:title` passes a fixed string, `::loading` binds the spinner to a piece of Vue state so the button shows the spinner while a request is in flight.

### Shop Carousel

The `carousel` component provides a full-screen image carousel with drag/touch support, auto-play, and pagination. It is commonly used for homepage banners and promotional sliders.

| Props           | Type    | Default Value | Description                                                 |
| --------------- | ------- | ------------- | ------------------------------------------------------------|
| **`options`**   | Object  | `{}`          | Configuration object containing an `images` array with slide data (image URL, link, title, etc.). |

Let's assume you want to use the **`carousel`** component. You can call it like this:

```html
<!-- Shop Carousel -->
<x-shop::carousel :options="$sliderData" />
```

### Shop Data Grid

The `datagrid` component in Bagisto applications provides a flexible and customizable data grid interface for displaying tabular data. It includes features such as `sorting`, `filtering`, `pagination`, and `mass actions` to manage data efficiently.

You can customize the appearance of the `DataGrid` by referring to the [DataGrid Customization](/package-development/datagrid).

Let's assume you want to use the **`datagrid`** component. You can call it like this.

```html
<!-- Shop Datagrid -->
<x-shop::datagrid :src="route('shop.customers.account.orders.index')" />
```

### Shop Drawer

The `drawer` component in Bagisto provides a versatile drawer that can be positioned on the top, bottom, left, or right side of the screen. It allows you to create interactive drawers that can contain various content such as headers, body, and footer sections. The drawer can be toggled open or closed, providing a clean and efficient way to display additional information or functionality.

| Props            | Type          | Default Value | Description                                                            |
| --------------  | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`is-active`** | `Boolean`     | `false`       | Determines whether the drawer is initially active.                      |
| **`position`** | `String`      | `'right'`     | Specifies the position of the drawer (`top`, `bottom`, `left`, or `right`). |
| **`width`**    | `String`      | `'500px'`     | Specifies the width of the drawer.                                      |

| Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`toggle`** | Slot for the toggle button or element. |
  | **`header`** | Slot for the header content. |
  | **`content`** | Slot for the main content. |
  | **`footer`** |  Slot for the footer content. |

You can customize the appearance of the Drawer by passing additional CSS.

* To customize the header section, you can target the `header` slot with your own CSS classes or styles.
* Similarly, you can customize the content section using the `content` slot.
* Similarly, you can customize the content section using the `footer` slot.

Let's assume you want to use the **`drawer`** component. You can call it like this.

```html
<!-- Shop Drawer -->
<x-shop::drawer
    position="left"
    width="100%"
>
    <x-slot:toggle>
        Drawer Toggle
    </x-slot>

    <x-slot:header class="bg-red-100"> <!-- Pass your custom css to customize header -->
        Drawer Header
    </x-slot>

    <x-slot:content class="!p-5">
        Drawer Content
    </x-slot>
</x-shop::drawer>
```

### Shop Dropdown

The `dropdown` component in Bagisto provides a customizable dropdown menu that can be positioned at different locations relative to its toggle button. It enables you to create dropdown menus with various content sections such as toggle button, content, and menu items.

| Prop              | Type      | Default Value | Description                                                            |
| ----------------- | --------- | ------------- | ---------------------------------------------------------------------- |
| **`position`**    | `String`  | `'bottom-right'`| Blade prop. Position of the menu relative to the toggle (`top-left`, `top-right`, `bottom-left`, `bottom-right`). |
| **`close-on-click`**| `Boolean` | `true`        | Vue prop. When `true` the menu also closes after a click **inside** it; clicking outside or pressing Escape always closes it. Bind it with `::close-on-click="false"` to keep the menu open while the user interacts with its content. |

  | Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`toggle`** | Slot for the toggle button or element.. |
  | **`content`** | Slot for the main content. |
  | **`menu`** | Slot for the menu items.. |

To customize the content section, you can target the `content` slot with your own CSS classes or styles.

Let's assume you want to use the **`dropdown`** component. You can call it like this.

```html
<!-- Shop Dropdown -->
<x-shop::dropdown position="bottom-left">
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:content class="!m-0">
        Dropdown Content
    </x-slot>

    <x-slot:menu>
        <x-shop::dropdown.menu.item>
            Menu Item 1
            Menu Item 2
        </x-shop::dropdown.menu.item>
    </x-slot>
</x-shop::dropdown>
```

### Shop Flat-Picker

The `datetime-picker` and `date-picker` components provide `date` and `time` picker functionality within Bagisto applications. These components are based on the Flatpickr library and offer customizable options for selecting dates and times.

It can be configured with various props to customize its behavior according to application requirements.

| Prop          | Type             | Default Value | Description                                                             |
| ------------- | ---------------- | ------------- | ----------------------------------------------------------------------- |
| **`name`**    | `String`         | None          | Name attribute for the input field.                                      |
| **`value`**   | `String`         | None          | Initial value of the date picker.                                        |
| **`allow-input`** | `Boolean`      | `true`      | Determines whether manual input is allowed in the input field.           |
| **`disable`** | `Array`          | `[]`          | Array of dates to disable in the date picker.                            |
                                                                                                                              
Let's assume you want to use the **`flat-picker`** component. You can call it like this.

```html
<!-- Shop Date picker -->
<x-shop::flat-picker.date ::allow-input="false">
    <input
        type="date"
        name="date"
        class="mb-4"
        :allowInput="true"
        :disable="disabledDates"
        placeholder="date"
    />
</x-shop::flat-picker.date>
```

### Shop Form

The `form` component provides a flexible form wrapper with CSRF protection and method spoofing support. It supports two modes: traditional server-side forms and custom Vue-based forms using the `as` attribute.

| Props          | Type    | Default Value | Description                                                 |
| -------------- | ------- | ------------- | ------------------------------------------------------------|
| **`method`**   | String  | `'POST'`      | HTTP method for form submission. Supports `GET`, `POST`, `PUT`, `PATCH`, `DELETE`. |

Let's assume you want to use the **`form`** component. You can call it like this:

```html
<!-- Shop Form (Traditional) -->
<x-shop::form method="POST" action="{{ route('shop.customers.account.addresses.store') }}">
    <!-- Form fields -->
    <x-shop::button
        type="submit"
        :title="trans('Submit')"
    />
</x-shop::form>

<!-- Shop Form (Vue-based with validation) -->
<x-shop::form
    v-slot="{ meta, errors, handleSubmit }"
    as="div"
>
    <form @submit="handleSubmit($event, callbackFunction)">
        <!-- Form fields with validation -->
    </form>
</x-shop::form>
```

### Shop Image Zoomer

The `image-zoomer` component provides a modal gallery viewer with zoom, drag, and scroll capabilities for images and videos. It supports thumbnail navigation and keyboard controls.

| Props                | Type    | Default Value | Description                                                 |
| -------------------- | ------- | ------------- | ------------------------------------------------------------|
| **`attachments`**    | Object  | `[]`          | Array of image/video attachments to display.                 |
| **`is-image-zooming`** | Boolean | `false`     | Controls whether the zoom modal is visible.                  |
| **`initial-index`**  | String  | `'0'`         | Index of the initially displayed image.                      |

Let's assume you want to use the **`image-zoomer`** component. You can call it like this:

```html
<!-- Shop Image Zoomer -->
<x-shop::image-zoomer
    ::attachments="attachments"
    ::is-image-zooming="isImageZooming"
    ::initial-index="initialIndex"
/>
```

### Shop Lazy Image

The storefront has no upload component; its media component is `media.images.lazy`, an `<img>` wrapper that defers loading until the image scrolls into view and swaps in a fallback when the source fails.

| Prop           | Type      | Default Value | Description                                                      |
|----------------|-----------|---------------|------------------------------------------------------------------|
| **`lazy`**     | `Boolean` | `true`        | Vue prop. Load the image only when it enters the viewport.        |
| **`src`**      | `String`  | `''`          | Vue prop. Image URL, usually bound with `::src` from Vue state.   |
| **`fallback`** | `String`  | `''`          | Vue prop. URL shown when `src` fails to load.                     |

Any other attribute (`class`, `alt`, `width`, `height`) is passed through to the `<img>` element.

```html
<!-- Shop Lazy Image -->
<x-shop::media.images.lazy
    class="h-[110px] max-w-[110px] rounded-xl max-md:h-20 max-md:max-w-20"
    ::src="item.base_image.small_image_url"
    ::alt="item.name"
    width="110"
    height="110"
    ::key="item.id"
/>
```

### Shop Modal

The `modal` component in Bagisto provides a flexible way to create modal dialogs. It allows you to display content in a layer that floats above the rest of the page.

| Props         | Type      | Default Value | Description                           |
|--------------|-----------|---------------|---------------------------------------|
| `is-active`  | Boolean   | `false`       | Controls the visibility of the modal.  |

| Slot          | Description                                                 |
|---------------|-------------------------------------------------------------|
| **`toggle`**  | Used for the element that toggles the visibility of the modal. |
| **`header`**  | Allows customization of the modal header content.           |
| **`content`** | Provides a slot for the main body content of the modal.      |
| **`footer`**  | Allows customization of the footer content within the modal. |

You can customize the appearance of the Modal by passing additional CSS.

* To customize the header section, you can target the `header` slot with your own CSS classes or styles.
* Similarly, you can customize the content section using the `content` slot.
* Similarly, you can customize the content section using the `footer` slot.

Let's assume you want to use the **`modal`** component, You can call it like this.

```html
<!-- Shop Modal-->
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

### Shop Quantity Changer

The Quantity Changer component, provides a simple interface for users to increase or decrease a quantity value. 

| Props            | Type    | Default Value | Description                       |
| ---------------- | ------- | ------------- | --------------------------------- |
| **`name`**       | String  | `''`          | The name attribute for the hidden input field. |
| **`value`**      | Number  | `1`           | The initial quantity value.       |
| **`min-value`**  | Number  | `1`           | The lowest quantity the minus button allows. |
| **`removable`**  | Boolean | `false`       | When `true`, decreasing below `min-value` emits a remove event instead of stopping (used by the mini cart). |

Let's assume you want to use the **`Quantity Changer`** component on shop. You can call it like this.

```html
<!-- Shop Quantity changer -->
<x-shop::quantity-changer
    name="quantity"
    value="1"
    class="gap-x-4 rounded-xl px-7 py-4"
/>
```

### Shop Range Slider

The `range-slider` component provides a dual-handle range slider for filtering numeric values such as prices. It supports integer, float, and price formatting with a minimum 10% gap between handles.

All five are Vue props with no defaults, so pass every one of them:

| Props                          | Type    | Description                                                 |
| ------------------------------ | ------- | ------------------------------------------------------------|
| **`default-type`**             | String  | Value type: `'integer'`, `'float'`, or `'price'`.            |
| **`default-allowed-min-range`** | Number | Minimum allowed value for the slider.                        |
| **`default-allowed-max-range`** | Number | Maximum allowed value for the slider.                        |
| **`default-min-range`**        | Number  | Initial minimum selected value.                              |
| **`default-max-range`**        | Number  | Initial maximum selected value.                              |

Let's assume you want to use the **`range-slider`** component. You can call it like this:

```html
<!-- Shop Range Slider -->
<x-shop::range-slider
    default-type="price"
    ::default-allowed-min-range="0"
    ::default-allowed-max-range="500"
    ::default-min-range="0"
    ::default-max-range="500"
    @change-range="handlePriceChange($event)"
/>
```

### Shop Shimmer

Prebuilt `shimmer` skeletons are shown while a grid or form loads its data.

Let's assume you want to use the **`shimmer`** You can call it like this.

```html
<!-- Shop shimmer -->
<x-shop::shimmer.datagrid />
```

### Shop Table

The Table component provides a structured way to display tabular data in Bagisto. You can customize the appearance of the table elements using CSS. Below are some common customization options:

| Styling        | Description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **`Table`**    | Apply custom styles to the `table` element to change its appearance, such as borders, padding, and background color. |
| **`Cell`**     | Customize the appearance of `th` and `td` elements using CSS, such as font size, text alignment, and background color. |
| **`Row`**      | Apply styles to `tr` elements to change their appearance, such as background color, hover effects, and borders. |
| **`Header`**   | Customize the appearance of the header cells within the `thead` section using `th` elements. Apply styles such as font weight, text color, and background color. |

The shop table ships `table`, `table.thead`, `table.tbody`, `table.tr`, `table.th` and `table.td`; there is a single `table.tr` used in both the head and the body (the admin table has separate `thead.tr` and `tbody.tr`).

```html
<!-- Shop Table -->
<x-shop::table>
    <x-shop::table.thead>
        <x-shop::table.tr>
            <x-shop::table.th>
                Heading 1
            </x-shop::table.th>

            <x-shop::table.th>
                Heading 2
            </x-shop::table.th>
        </x-shop::table.tr>
    </x-shop::table.thead>

    <x-shop::table.tbody>
        <x-shop::table.tr>
            <x-shop::table.td>
                Column 1
            </x-shop::table.td>

            <x-shop::table.td>
                Column 2
            </x-shop::table.td>
        </x-shop::table.tr>
    </x-shop::table.tbody>
</x-shop::table>
```

### Shop Tabs 

The Tabs component allows users to navigate between different content sections using tabs. It consists of two main parts: the `tabs` component for managing the tabs and the `tab-item` component for defining individual tab items.

| Prop          | Type             | Default Value | Description                                                             |
| ------------- | ---------------- | ------------- | ----------------------------------------------------------------------- |
| **`position`**| `String`         | `'left'`      | Specifies the position of the tabs (`left`, `right`, `center`).         |

#### Tab Item Component Props

The `tab-item` component represents an individual tab within the `tabs` component:

| Prop             | Type          | Default Value | Description                                                            |
| ---------------- | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`title`**      | `String`      | None          | Title of the tab.                                                       |
| **`is-selected`**| `Boolean`     | `false`       | Indicates whether the tab is selected (`true`) or not (`false`). Default is `false`. |

You can customize the tabs and their content as per your requirements. 

Let's assume you want to use the **`tabs`** component on shop. You can call it like this.

```html
<!-- Shop Tab -->
<x-shop::tabs position="center">
    <x-shop::tabs.item
        class="container"
        :title="Tab-1"
        :is-selected="true"
    >
        <div class="container mt-[60px] max-1180:px-5">
            <p class="text-[#6E6E6E] text-lg max-1180:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </x-shop::tabs.item>

    <x-shop::tabs.item
        class="container"
        :title="Tab-2"
    >
        <div class="container mt-[60px] max-1180:px-5">
            <p class="text-[#6E6E6E] text-lg max-1180:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </x-shop::tabs.item>
</x-shop::tabs>
```

### Shop Tinymce

The `tinymce` component wraps the TinyMCE editor. The storefront build has no Magic AI button; that is an admin-only addition.

| Props          | Type    | Description                                                      |
| -------------- | ------- | ---------------------------------------------------------------- |
| **`selector`** | String  | Vue prop. The CSS selector for the textarea element to initialize as TinyMCE. |
| **`field`**    | Object  | Vue prop. The VeeValidate field object the editor writes back to. |

You rarely mount it directly; the form control renders it when `:tinymce="true"` is passed:

### Shop Products, Categories and Ratings

Storefront-only components used by the home page sections and listings:

| Component | Props | Purpose |
|---|---|---|
| `x-shop::products.card` | Vue props `product`, `mode` (`grid` or `list`) | One product tile with image, price, wishlist, compare and add-to-cart |
| `x-shop::products.carousel` | Vue props `src` (JSON endpoint returning products), `title`, `navigation-link` | Horizontal product slider fed by an API URL, used by the "featured" and "new products" sections |
| `x-shop::categories.carousel` | Vue props `src`, `title`, `navigation-link` | The same slider for categories |
| `x-shop::products.ratings` | Blade props `average` (0), `total` (0), `rating` (true) | Star row with an average and review count |
| `x-shop::carousel` | Blade prop `options` (`['images' => [...]]`) | Full-width image slider driven by theme section data |
| `x-shop::flash-group` | none | Renders session flash messages as toasts; included by the layout |
| `x-shop::form.control-group`, `.label`, `.control`, `.error` | see [Validation](./validation.md) | The validated form field triplet |

```html
<!-- Shop Tinymce -->
<x-shop::form.control-group.control
    type="textarea"
    id="content"
    name="content"
    rules="required"
    :value="old('content')"
    :label="content"
    :placeholder="Content"
    :tinymce="true"
/>
```

## Admin Components

Admin components are reusable Blade components used to build the Admin.

### Admin Accordion

Bagisto provides a collapsible accordion UI element, allowing users to toggle the visibility of content sections. It is commonly used for organizing and presenting information in a compact and intuitive manner.

| Props           | Type    | Default | Description                                                 |
| --------------- | ------- | ------- | ------------------------------------------------------------|
| **`is-active`** | Boolean | `true`  | Determines the initial state of the accordion. It is **expanded by default**; pass `:is-active="false"` to start collapsed. |

| Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`header`**  | Used to customize the header section of the accordion. |
  | **`content`** | Used to customize the content section of the accordion. |

You can customize the appearance of the accordion `header` and `content` by passing additional CSS classes to the header and content slots, respectively.

Let's assume you want to use the **`accordion`** component, you can call it like this:

```html
<!-- Admin Accordion -->
<x-admin::accordion 
    title="Admin Accordion" 
    class="px-5"
>
    <x-slot:header class="bg-gray-200">
        Accordion Header
    </x-slot>

    <x-slot:content class="bg-green-200">
        Accordion Content
    </x-slot>
</x-admin::accordion>
```

### Admin Button

The `button` component in Bagisto provides a versatile button element that supports loading state with a spinner animation. It offers flexibility in styling and functionality to suit various use cases within your application.

  | Prop            | Type          | Default Value | Description                                                            |
| ---------------   | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`title`**       | `String`      | None          | Vue prop. Title text displayed on the button.                                     |
| **`loading`**     | `Boolean`     | `false`       | Vue prop. Indicates whether the button is in a loading state.                      |
| **`button-type`**  | `String`      | None          | Vue prop. Not bound to the `type` attribute; pass `type="submit"` as a plain attribute when the button must submit a form. |
| **`button-class`** | `String`      | None          | Vue prop. Classes applied to the inner `<button>`.                                  |

Let's assume you want to use the **`button`** component. You can call it like this:
 
```html
<!-- Admin Button -->
<x-admin::button
    type="submit"
    class="primary-button"
    button-type="submit"
    :title="trans('admin::app.catalog.products.edit.save-btn')"
    ::loading="isLoading"
    ::disabled="isLoading"
/>
```

### Admin Charts

The `charts-bar` and `charts-line` components in Bagisto provide easy-to-use chart components for displaying bar and line charts respectively. These components are based on the Chart.js library and offer customization options for labels, datasets, and aspect ratio to create visually appealing charts in your Bagisto application.

| Prop                | Type          | Default Value | Description                                                            |
| ------------------- | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`labels`**         | `Array`       | `[]`          | Vue prop. An array of labels for the x-axis of the chart.                        |
| **`datasets`**       | `Array`       | None usable   | Vue prop. An array of Chart.js datasets containing data points for the chart; always pass it.             |
| **`aspect-ratio`**    | `Number`      | `3.23`        | Vue prop. Aspect ratio of the chart (width / height).                   |

You can customize the appearance of the bar chart by providing different datasets with colors, labels, and data points. Additionally, you can adjust the aspect ratio of the chart by setting the aspect-ratio prop.

Let's assume you want to use the **`charts`** component. You can call it like this.

```html
<!--
    Chart | Line Chart Component

    Note: To use charts, you need to require the Chart.js library.
-->
<x-admin::charts.line
    ::labels="chartLabels"
    ::datasets="chartDatasets"
/>

<!--
    Chart | Bar Chart Component

    Note: To use charts, you need to require the Chart.js library.
-->
<x-admin::charts.bar
    ::labels="chartLabels"
    ::datasets="chartDatasets"
    ::aspect-ratio="1.41"
/>
```

### Admin Data Grid

The `datagrid` component in Bagisto applications provides a flexible and customizable data grid interface for displaying tabular data. It includes features such as `sorting`, `filtering`, `pagination`, and `mass actions` to manage data efficiently.

You can customize the appearance of the `DataGrid` by referring to the [DataGrid Customization](/package-development/datagrid).

Let's assume you want to use the **`datagrid`** component. You can call it like this.

```html
<!-- Admin Datagrid -->
<x-admin::datagrid :src="route('admin.catalog.products.index')" />
```

### Admin Command Palette

`<x-admin::command-palette />` is mounted once by the admin layout and opens with **Ctrl+K** (**⌘K** on macOS). It takes no props; it reads its rows from the `admin.command_palette.index` endpoint and is extended through configuration rather than markup. See [Command Palette](../advanced/command-palette.md) for the providers, the `command-palette.php` config file and how a package adds its own actions and record searches.

### Admin Date Range Picker

`<x-admin::date-range-picker>` is the preset-driven range picker used by the reporting pages (Today, Yesterday, This week, Last month and so on, capped at today).

| Props             | Type     | Description                                                            |
| ----------------- | -------- | ---------------------------------------------------------------------- |
| **`start-label`** | `String` | Blade prop. Label above the start date input.                          |
| **`end-label`**   | `String` | Blade prop. Label above the end date input.                            |
| **`start`**       | `String` | Vue prop. Selected start date, `Y-m-d`.                                |
| **`end`**         | `String` | Vue prop. Selected end date, `Y-m-d`.                                  |

It emits `change` with the new `{ start, end }` pair:

```html
<x-admin::date-range-picker
    :start-label="trans('admin::app.reporting.view.start-date')"
    :end-label="trans('admin::app.reporting.view.end-date')"
    ::start="filters.start"
    ::end="filters.end"
    @change="applyDateRange"
/>
```

### Admin Drawer

The `drawer` component in Bagisto provides a versatile drawer that can be positioned on the top, bottom, left, or right side of the screen. It allows you to create interactive drawers that can contain various content such as headers, body, and footer sections. The drawer can be toggled open or closed, providing a clean and efficient way to display additional information or functionality.

| Props            | Type          | Default Value | Description                                                            |
| --------------  | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`is-active`** | `Boolean`     | `false`       | Determines whether the drawer is initially active.                      |
| **`position`** | `String`      | `'right'`     | Specifies the position of the drawer (`top`, `bottom`, `left`, or `right`). |
| **`width`**    | `String`      | `'500px'`     | Specifies the width of the drawer.                                      |

| Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`toggle`** | Slot for the toggle button or element. |
  | **`header`** | Slot for the header content. |
  | **`content`** | Slot for the main content. |
  | **`footer`** |  Slot for the footer content. |

You can customize the appearance of the Drawer by passing additional CSS.

* To customize the header section, you can target the `header` slot with your own CSS classes or styles.
* Similarly, you can customize the content section using the `content` slot.
* Similarly, you can customize the content section using the `footer` slot.

Let's assume you want to use the **`drawer`** component. You can call it like this.

```html
<!-- Admin Drawer -->
<x-admin::drawer     
    position="left"
    width="100%"
>
    <x-slot:toggle>
        Drawer Toggle
    </x-slot>

    <x-slot:header class="bg-red-100">  <!-- Pass your custom css to customize header -->
        Drawer Header
    </x-slot>

    <x-slot:content class="!p-5"> <!-- Pass your custom css to customize header -->
        Drawer Content
    </x-slot>
</x-admin::drawer>
```

### Admin Dropdown

The `dropdown` component in Bagisto provides a customizable dropdown menu that can be positioned at different locations relative to its toggle button. It enables you to create dropdown menus with various content sections such as toggle button, content, and menu items.

| Prop              | Type      | Default Value | Description                                                            |
| ----------------- | --------- | ------------- | ---------------------------------------------------------------------- |
| **`position`**    | `String`  | `'bottom-left'`| Blade prop. Position of the menu relative to the toggle (`top-left`, `top-right`, `bottom-left`, `bottom-right`). |
| **`fit-toggle`**  | `Boolean` | `false`       | Blade prop. Make the menu as wide as the toggle element. |
| **`close-on-click`**| `Boolean` | `true`        | Vue prop. When `true` the menu also closes after a click inside it; bind `::close-on-click="false"` for menus with form controls. |

  | Slots           | Description                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`toggle`** | Slot for the toggle button or element.. |
  | **`content`** | Slot for the main content. |
  | **`menu`** | Slot for the menu items.. |

To customize the content section, you can target the `content` slot with your own CSS classes or styles.

Let's assume you want to use the **`dropdown`** component. You can call it like this.

```html
<!-- Admin Dropdown -->
<x-admin::dropdown position="bottom-left"> 
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:content class="!p-0">
        Dropdown Content
    </x-slot>

    <x-slot:menu>
        <x-admin::dropdown.menu.item
            Menu Item 1
            Menu Item 2
        >
        </x-admin::dropdown.menu.item>
    </x-slot>
</x-admin::dropdown>
```

### Admin Flat-Picker

The `datetime-picker` and `date-picker` components provide `date` and `time` picker functionality within Bagisto applications. These components are based on the Flatpickr library and offer customizable options for selecting dates and times.

It can be configured with various props to customize its behavior according to application requirements.

| Prop          | Type             | Default Value | Description                                                             |
| ------------- | ---------------- | ------------- | ----------------------------------------------------------------------- |
| **`name`**    | `String`         | None          | Name attribute for the input field.                                      |
| **`value`**   | `String`         | None          | Initial value of the date picker.                                        |
| **`allow-input`** | `Boolean`      | `true`      | Determines whether manual input is allowed in the input field.           |
| **`disable`** | `Array`          | `[]`          | Array of dates to disable in the date picker.                            |
                                                                                                                              
Let's assume you want to use the **`flat-picker`** component. You can call it like this.

```html
<!-- Admin DateTime Picker -->
<x-admin::flat-picker.date ::allow-input="false">
    <input
        type="datetime"
        name="datetime"
        class="mb-4"
        :value="selectedDateTime"
        :disable="disabledDates"
        placeholder="datetime"
    />
</x-admin::flat-picker.date>
```

### Admin Form

The `form` component provides a flexible form wrapper with CSRF protection and method spoofing support. It supports two modes: traditional server-side forms and custom Vue-based forms using the `as` attribute.

| Props          | Type    | Default Value | Description                                                 |
| -------------- | ------- | ------------- | ------------------------------------------------------------|
| **`method`**   | String  | `'POST'`      | HTTP method for form submission. Supports `GET`, `POST`, `PUT`, `PATCH`, `DELETE`. |

Let's assume you want to use the **`form`** component. You can call it like this:

```html
<!-- Admin Form (Traditional) -->
<x-admin::form method="PUT" :action="route('admin.catalog.products.update', $product->id)">
    <!-- Form fields -->
    <x-admin::button
        type="submit"
        :title="trans('admin::app.catalog.products.edit.save-btn')"
    />
</x-admin::form>

<!-- Admin Form (Vue-based with validation) -->
<x-admin::form
    v-slot="{ meta, errors, handleSubmit }"
    as="div"
>
    <form @submit="handleSubmit($event, callbackFunction)">
        <!-- Form fields with validation -->
    </form>
</x-admin::form>
```

### Admin Media (Image/Video)
 
The Media component in Bagisto provides a user interface for managing and displaying images/videos, allowing users to upload, edit, and delete images.:

`x-admin::media.images` props:

| Props                  | Type        | Default Value | Description                                                      |
|------------------------|-------------|---------------|------------------------------------------------------------------|
| **`name`**             | `String`    | `'images'`    | The name of the input field.                                      |
| **`allow-multiple`**   | `Boolean`   | `false`       | Whether to allow uploading multiple images.                       |
| **`show-placeholders`**| `Boolean`   | `false`       | Show the front/back/left/right placeholder tiles used by the product form. |
| **`uploaded-images`**  | `Array`     | `[]`          | Already stored images, each with `id` and `url`.                  |
| **`width`**            | `String`    | `'120px'`     | Width of each tile.                                               |
| **`height`**           | `String`    | `'120px'`     | Height of each tile.                                              |
| **`enable-seo`**       | `Boolean`   | `false`       | Add the alt-text and title fields beside each tile.               |
| **`meta-name`**        | `String`    | `''`          | Input name for that SEO metadata, for example `images[meta]`.     |

`x-admin::media.videos` takes the same props except `show-placeholders`, with `uploaded-videos` in place of `uploaded-images` and a `210px` × `120px` tile. Hovering a tile reveals a delete action and an edit action; the latter replaces the file directly, or opens the SEO drawer (alt text, file name, replace) when `enable-seo` is on.

```html
<!-- Image Component -->
<x-admin::media.images
    name="images[files]"
    meta-name="images[meta]"
    :allow-multiple="true"
    :show-placeholders="true"
    :enable-seo="true"
    :uploaded-images="$product->images"
/>

<!-- Video Component -->
<x-admin::media.videos
    name="videos[files]"
    meta-name="videos[meta]"
    :allow-multiple="true"
    :enable-seo="true"
    :uploaded-videos="$product->videos"
/>
```

### Admin Modal

The `modal` component in Bagisto provides a flexible way to create modal dialogs. It allows you to display content in a layer that floats above the rest of the page.

| Props         | Type      | Default Value | Description                           |
|--------------|-----------|---------------|---------------------------------------|
| `is-active`  | Boolean   | `false`       | Controls the visibility of the modal.  |

| Slot          | Description                                                 |
|---------------|-------------------------------------------------------------|
| **`toggle`**  | Used for the element that toggles the visibility of the modal. |
| **`header`**  | Allows customization of the modal header content.           |
| **`content`** | Provides a slot for the main body content of the modal.      |
| **`footer`**  | Allows customization of the footer content within the modal. |

You can customize the appearance of the Modal by passing additional CSS.

* To customize the header section, you can target the `header` slot with your own CSS classes or styles.
* Similarly, you can customize the content section using the `content` slot.
* Similarly, you can customize the content section using the `footer` slot.

Let's assume you want to use the **`modal`** component, You can call it like this.

```html
<!-- Admin Modal -->
<x-admin::modal>
    <x-slot:toggle>
        Modal Toggle
    </x-slot>

    <x-slot:header>
        Modal Header
    </x-slot>

    <x-slot:content>
        Modal Content
    </x-slot>
</x-admin::modal>
```

### Admin Quantity Changer

The Quantity Changer component, provides a simple interface for users to increase or decrease a quantity value. 

| Props          | Type    | Default Value | Description                       |
| -------------- | ------- | ------------- | --------------------------------- |
| **`name`**     | String  | `''`          | The name attribute for the hidden input field. |
| **`value`**    | Number  | `1`           | The initial quantity value.       |

Let's assume you want to use the **`Quantity Changer`** component on shop. You can call it like this.

```html
<!-- Admin Quantity changer -->
<x-admin::quantity-changer
    name="quantity"
    value="1"
    class="w-max gap-x-4 rounded-l px-4 py-1"
/>
```

### Admin SEO

The `seo` component, assists in managing SEO-related metadata for your pages. It dynamically updates the meta title and description based on user input and provides a preview of the generated SEO metadata.

All props are Vue props with these defaults; the component watches the named form fields and renders a live search-result preview:

| Props                        | Type    | Default Value        | Description                 |
| ---------------------------- | ------- | -------------------- | --------------------------- |
| **`meta-title-field`**       | String  | `'meta_title'`       | Name of the meta title input to watch. |
| **`meta-description-field`** | String  | `'meta_description'` | Name of the meta description input to watch. |
| **`url-key-field`**          | String  | `'url_key'`          | Name of the URL key input to watch. |
| **`slug`**                   | String  | `''`                 | Path prefix shown before the URL key, for example `page`. |
| **`url-type`**               | String  | `'path'`             | `path` appends the key to the store URL; `query` renders it as a query string. |

```html 
<x-admin::seo slug="page" />
```

### Admin Shimmer

Prebuilt `shimmer` skeletons are shown while a grid or form loads its data.

Let's assume you want to use the **`shimmer`** You can call it like this.

```html
<!-- Admin shimmer -->
<x-admin::shimmer.datagrid />
```

### Admin Star Rating

The `star-rating` component provides an interactive 5-star rating display. It can be used as a read-only display or an interactive input for setting ratings.

| Props          | Type    | Default Value | Description                                                 |
| -------------- | ------- | ------------- | ------------------------------------------------------------|
| **`name`**     | String  | `'rating'`    | Hidden field name for form submission.                       |
| **`value`**    | Number  | `0`           | Initial rating value (0-5).                                  |
| **`disabled`** | Boolean | `true`        | Whether the rating is read-only; pass `:disabled="false"` for an input. |

Let's assume you want to use the **`star-rating`** component. You can call it like this:

```html
<!-- Admin Star Rating (Read-only) -->
<x-admin::star-rating
    :value="$product->averageRating"
    :disabled="true"
/>

<!-- Admin Star Rating (Interactive) -->
<x-admin::star-rating
    name="rating"
    :value="0"
    :disabled="false"
    @change="handleRatingChange"
/>
```

### Admin Table

The Table component provides a structured way to display tabular data in Bagisto. You can customize the appearance of the table elements using CSS. Below are some common customization options:

| Styling        | Description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **`Table`**    | Apply custom styles to the `table` element to change its appearance, such as borders, padding, and background color. |
| **`Cell`**     | Customize the appearance of `th` and `td` elements using CSS, such as font size, text alignment, and background color. |
| **`Row`**      | Apply styles to `tr` elements to change their appearance, such as background color, hover effects, and borders. |
| **`Header`**   | Customize the appearance of the header cells within the `thead` section using `th` elements. Apply styles such as font weight, text color, and background color. |

Let's assume you want to use the **`Table`** component on shop. You can call it like this.

```html
<!-- Admin Table -->
<x-admin::table>
    <x-admin::table.thead>
        <x-admin::table.thead.tr>
            <x-admin::table.th>
                Heading 1
            </x-admin::table.th>

            <x-admin::table.th>
                Heading 2
            </x-admin::table.th>

            <x-admin::table.th>
                Heading 3
            </x-admin::table.th>

            <x-admin::table.th>
                Heading 4
            </x-admin::table.th>
        </x-admin::table.thead.tr>
    </x-admin::table.thead>

    <x-admin::table.tbody>
        <x-admin::table.tbody.tr>
            <x-admin::table.td>
                Column 1
            </x-admin::table.td>

            <x-admin::table.td>
                Column 2
            </x-admin::table.td>

            <x-admin::table.td>
                Column 3
            </x-admin::table.td>

            <x-admin::table.td>
                Column 4
            </x-admin::table.td>
        </x-admin::table.tbody.tr>
    </x-admin::table.tbody>
</x-admin::table>
```

### Admin Tabs 

The Tabs component allows users to navigate between different content sections using tabs. It consists of two main parts: the `tabs` component for managing the tabs and the `tab-item` component for defining individual tab items.

| Prop          | Type             | Default Value | Description                                                             |
| ------------- | ---------------- | ------------- | ----------------------------------------------------------------------- |
| **`position`**| `String`         | `'left'`      | Specifies the position of the tabs (`left`, `right`, `center`).         |

#### Tab Item Component Props

The `tab-item` component represents an individual tab within the `tabs` component:

| Prop             | Type          | Default Value | Description                                                            |
| ---------------- | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`title`**      | `String`      | None          | Title of the tab.                                                       |
| **`is-selected`**| `Boolean`     | `false`       | Indicates whether the tab is selected (`true`) or not (`false`). Default is `false`. |

You can customize the tabs and their content as per your requirements. 

Let's assume you want to use the **`tabs`** component on admin. You can call it like this.

```html
<!-- Admin Tab -->
<x-admin::tabs position="center">
    <x-admin::tabs.item
        class="container"
        :title="Tab-1"
        :is-selected="true"
    >
        <div class="container mt-[60px] max-1180:px-5">
            <p class="text-[#6E6E6E] text-lg max-1180:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </x-admin::tabs.item>

    <x-admin::tabs.item
        class="container"
        :title="Tab-2"
    >
        <div class="container mt-[60px] max-1180:px-5">
            <p class="text-[#6E6E6E] text-lg max-1180:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </x-admin::tabs.item>
</x-admin::tabs>
```

### Admin Tinymce

The `tinymce` component wraps the Tinymce editor and provides additional functionalities like AI content generation.

| Props          | Type    | Default Value | Description                                                      |
| -------------- | ------- | ------------- | ---------------------------------------------------------------- |
| **`selector`** | String  | `''`          | Vue prop. The CSS selector for the textarea element to initialize as TinyMCE. |
| **`field`**    | Object  | `{}`          | Vue prop. The VeeValidate field object the editor writes back to. |
| **`prompt`**   | String  | `''`          | Vue prop. The prompt pre-filled in the **Magic AI** dialog.       |  

The admin editor adds a **Magic AI** button when text generation is enabled under **Configure → Magic AI**; it lists the models of the providers chosen there. You rarely mount it directly; the form control renders it when `:tinymce="true"` is passed:

```html
<!-- Admin Tinymce -->
<x-admin::form.control-group.control
    type="textarea"
    id="content"
    name="content"
    rules="required"
    :value="old('content')"
    :label="Content"
    :placeholder="Content"
    :tinymce="true"
    prompt="Write a short, friendly description for this category."
/>
```

### Admin Tree View

The `tree-view` component provides a hierarchical tree selection interface supporting both checkbox and radio inputs. It handles multilingual labels, supports hierarchical or individual selection modes, and dynamically renders collapsible tree items.

| Props                 | Type            | Default Value    | Description                                                 |
| --------------------- | --------------- | ---------------- | ------------------------------------------------------------|
| **`input-type`**      | String          | `'checkbox'`     | Type of input: `'checkbox'` or `'radio'`.                    |
| **`selection-type`**  | String          | `'hierarchical'` | Selection behavior: `'individual'` or `'hierarchical'`.      |
| **`name-field`**      | String          | `'permissions'`  | Field name for form submission.                              |
| **`value-field`**     | String          | `'value'`        | Field in item data containing the value.                     |
| **`id-field`**        | String          | `'id'`           | Field in item data containing the unique identifier.         |
| **`label-field`**     | String          | `'name'`         | Field in item data containing the display label.             |
| **`children-field`**  | String          | `'children'`     | Field in item data containing child items.                   |
| **`items`**           | JSON string     | `[]`             | Tree data, passed as a JSON string (`:items="json_encode($items)"`) because it crosses the Blade-to-Vue boundary. |
| **`value`**           | Array           | `[]`             | Currently selected values.                                   |
| **`fallback-locale`** | String          | None             | Fallback locale for translated labels; pass `config('app.fallback_locale')`. |
| **`collapse`**        | Boolean         | `false`          | Whether tree items start in collapsed state.                 |
| **`searchable`**      | Boolean         | `false`          | Show a filter box above the tree.                            |
| **`search-placeholder`** | String       | `'Search'`       | Placeholder for that filter box.                             |

Only `input-type` and `selection-type` are Blade props; the rest are Vue props. This is how the role form renders the permission tree:

```html
<!-- Admin Tree View (Checkbox - Hierarchical) -->
<x-admin::tree.view
    input-type="checkbox"
    value-field="key"
    id-field="key"
    searchable="true"
    search-placeholder="{{ trans('admin::app.settings.roles.create.search-permissions') }}"
    :items="json_encode(acl()->getItems())"
    :value="json_encode($role->permissions ?? [])"
    :fallback-locale="config('app.fallback_locale')"
/>

<!-- Admin Tree View (Radio - Individual) -->
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

## Component Integration Best Practices

### Using Components in Custom Themes

When building custom themes with the components covered in our previous guides, these Blade components integrate seamlessly:

**Theme Package Integration:**
```blade
{{-- In your custom theme views --}}
<x-shop::layouts>
    <x-slot:title>Custom Product Page</x-slot>
    
    {{-- Use components within your theme --}}
    <x-shop::accordion>
        <x-slot:header>Product Details</x-slot:header>
        <x-slot:content>
            <!-- Product information -->
        </x-slot:content>
    </x-shop::accordion>
    
    <x-shop::quantity-changer
        name="quantity"
        value="1"
    />
</x-shop::layouts>
```

**Asset Compilation:**
Components automatically work with your theme's compiled assets from the [Vite-Powered Theme Assets](./vite-powered-theme-assets.md) guide.

### Customization Strategies

**1. CSS Customization:**
```blade
<x-shop::button
    class="custom-primary-button hover:bg-blue-600"
    :title="'Custom Styled Button'"
/>
```

**2. Slot Customization:**
```blade
<x-shop::modal>
    <x-slot:header class="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        Custom Header with Gradient
    </x-slot:header>
</x-shop::modal>
```

**3. Component Extension:**
Create your own components that extend Bagisto's components:
```blade
{{-- resources/views/components/custom-product-card.blade.php --}}
<x-shop::accordion>
    <x-slot:header>
        {{ $product->name }}
    </x-slot:header>
    <x-slot:content>
        <!-- Custom product content -->
    </x-slot:content>
</x-shop::accordion>
```

::: tip Performance Considerations
- Components include Vue.js integration for optimal performance
- Use shimmer components during loading states
- Leverage built-in responsive design features
- Components are optimized for accessibility
:::

::: warning Component Compatibility
When using components in custom themes:
- Ensure your theme includes necessary CSS classes
- Test components across different screen sizes
- Verify JavaScript functionality with your asset compilation
- Check compatibility with custom styling approaches
:::

## What's Next?

Congratulations! You've completed the theme development journey. Here are your next steps:

**🛠️ [Package Development →](../package-development/getting-started)**  
Build advanced packages that include custom components and functionality.

**🚀 [Performance Optimization →](../performance/introduction)**  
Learn to optimize your themes for better performance and user experience.

**📚 [Back to Getting Started →](./getting-started.md)**  
Review the complete theme development guide or explore different development paths.
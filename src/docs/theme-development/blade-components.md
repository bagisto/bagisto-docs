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
For comprehensive details about Blade components and templating, visit the [Laravel Blade documentation](https://laravel.com/docs/11.x/blade#introduction).
:::

## Shop Components

Shop components are reusable Blade components used to build the shop. They manage product listings, shopping carts, checkout processes, and user interactions, providing a seamless shopping experience for customers.

### Shop Accordion

Bagisto provides a collapsible accordion UI element, allowing users to toggle the visibility of content sections. It is commonly used for organizing and presenting information in a compact and intuitive manner.

| Props           | Type    | Default | Description                                                 |
| --------------- | ------- | ------- | ------------------------------------------------------------|
| **`is-active`** | Boolean | `false` | Determines the initial state of the accordion. When set to `true`, the accordion section will be expanded by default; otherwise, it will be collapsed. |

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
| **`title`**       | `String`      | None          | Title text displayed on the button.                                     |
| **`loading`**     | `Boolean`     | `false`       | Indicates whether the button is in a loading state.                      |
| **`button-type`**  | `String`      | `'button'`    | Specifies the type of button (`'button'`, `'submit'`, `'reset'`, etc.). |
| **`button-class`** | `String`      | `''`          | Additional classes for custom styling.                                  |

You can customize the appearance of the button by passing additional props `loading`  `buttonType`  `buttonClass` respectively.

Let's assume you want to use the **`button`** component. You can call it like this:
 
```html
<!-- Shop Button -->
<x-shop::button
    type="submit"
    class="secondary-button w-full max-w-full max-md:py-3 max-sm:rounded-lg max-sm:py-1.5"
    button-type="secondary-button"
    :loading="false"
    :title="trans('Button')"
    :disabled="true"
    ::loading="true"
/>
```

### Shop Data Grid

The `datagrid` component in Bagisto applications provides a flexible and customizable data grid interface for displaying tabular data. It includes features such as `sorting`, `filtering`, `pagination`, and `mass actions` to manage data efficiently.

You can customize the appearance of the `DataGrid` by referring to the [DataGrid Customization](/docs/package-development/datagrid).

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
| **`position`** | `String`      | `'left'`      | Specifies the position of the drawer (`top`, `bottom`, `left`, or `right`). |
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
| **`close-on-click`**| `Boolean` | `true`        | Determines whether the dropdown should close when clicking outside the menu. |
| **`position`**    | `String`  | `'bottom-left'`| Specifies the position of the dropdown menu relative to the toggle button (`top-left`, `top-right`, `bottom-left`, `bottom-right`). |

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

### Shop Media (Image)

The Media component in Bagisto provides a user interface for managing and displaying images/videos, allowing users to upload, edit, and delete images.:

| Prop Name         | Type       | Default Value | Description                                                      |
|-------------------|-------------|---------------|------------------------------------------------------------------|
| `name`            | `String`    |               | The name of the input field.                                      |
| `allow-multiple` | `Boolean`   | `false`       | Whether to allow uploading multiple images.                       |
| `show-placeholders` | `Boolean` | `true`        | Whether to show placeholder images when no images are uploaded.   |
| `uploaded-images` | `Array`     | `[]`          | Array of uploaded images.                                         |
| `uploaded-videos` | `Array`     | `[]`          | Array of uploaded videos.                                         |
| `width`         | `String`    | `'100%'`      | Width of the image container.                                     |
| `height`        | `String`    | `'auto'`      | Height of the image container.                                    |

Let's assume you want to use the **`Image/Video`** component, You can call it like this.

```html
<!-- Image Component -->
<x-shop::media.images.lazy
    class="h-[110px] max-w-[110px] rounded-xl max-md:h-20 max-md:max-w-20"
    ::src="item.base_image.small_image_url"
    ::alt="item.name"
    width="110"
    height="110"
    ::key="item.id"
    ::index="item.id"
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

| Props          | Type    | Default Value | Description                       |
| -------------- | ------- | ------------- | --------------------------------- |
| **`name`**     | String  | `''`          | The name attribute for the hidden input field. |
| **`value`**    | Number  | `1`           | The initial quantity value.       |

Let's assume you want to use the **`Quantity Changer`** component on shop. You can call it like this.

```html
<!-- Shop Quantity changer -->
<x-shop::quantity-changer
    name="quantity"
    value="1"
    class="gap-x-4 rounded-xl px-7 py-4"
/>
```

### Shop Shimmer

Prebuilt `shimmer` effects are available in Bagisto. You can easily use them.

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

Let's assume you want to use the **`Table`** component on shop. You can call it like this.

```html
<!-- Shop Table -->
<x-shop::table>
    <x-shop::table.thead>
        <x-shop::table.thead.tr>
            <x-shop::table.th>
                Heading 1
            </x-shop::table.th>

            <x-shop::table.th>
                Heading 2
            </x-shop::table.th>

            <x-shop::table.th>
                Heading 3
            </x-shop::table.th>

            <x-shop::table.th>
                Heading 4
            </x-shop::table.th>
        </x-shop::table.thead.tr>
    </x-shop::table.thead>

    <x-shop::table.tbody>
        <x-shop::table.tbody.tr>
            <x-shop::table.td>
                Column 1
            </x-shop::table.td>

            <x-shop::table.td>
                Column 2
            </x-shop::table.td>

            <x-shop::table.td>
                Column 3
            </x-shop::table.td>

            <x-shop::table.td>
                Column 4
            </x-shop::table.td>
        </x-shop::table.thead.tr>
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

The `tinymce` component wraps the Tinymce editor and provides additional functionalities like AI content generation.

| Props          | Type    | Default Value | Description                                                      |
| -------------- | ------- | ------------- | ---------------------------------------------------------------- |
| **`selector`** | String  | `''`          | The CSS selector for the textarea element to initialize as TinyMCE. |
| **`field`**    | Object  | `{}`          | Vue Formulate field object.                                      |
| **`prompt`**   | String  | `''`          | The prompt to be used for AI content generation.                 |  

Let's assume you want to use the **`tinymce`** component on admin and shop. You can call it like this.

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
| **`is-active`** | Boolean | `false` | Determines the initial state of the accordion. When set to `true`, the accordion section will be expanded by default; otherwise, it will be collapsed. |

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
| **`title`**       | `String`      | None          | Title text displayed on the button.                                     |
| **`loading`**     | `Boolean`     | `false`       | Indicates whether the button is in a loading state.                      |
| **`button-type`**  | `String`      | `'button'`    | Specifies the type of button (`'button'`, `'submit'`, `'reset'`, etc.). |
| **`button-class`** | `String`      | `''`          | Additional classes for custom styling.                                  |

You can customize the appearance of the button by passing additional props `loading`  `buttonType`  `buttonClass` respectively.

Let's assume you want to use the **`button`** component. You can call it like this:
 
```html
<!-- Admin Button -->
<x-admin::button
    type="submit"
    class="secondary-button w-full max-w-full max-md:py-3 max-sm:rounded-lg max-sm:py-1.5"
    button-type="secondary-button"
    :loading="false"
    :title="trans('Button')"
    :disabled="true"
    ::loading="true"
/>
```

### Admin Charts

The `charts-bar` and `charts-line` components in Bagisto provide easy-to-use chart components for displaying bar and line charts respectively. These components are based on the Chart.js library and offer customization options for labels, datasets, and aspect ratio to create visually appealing charts in your Bagisto application.

| Prop                | Type          | Default Value | Description                                                            |
| ------------------- | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`labels`**         | `Array` (required) | None          | An array of labels for the x-axis of the chart.                        |
| **`datasets`**       | `Array` (required) | None          | An array of datasets containing data points for the chart.             |
| **`aspectRatio`**    | `Number`      | `3.23`        | Optional. Aspect ratio of the chart (width / height).                   |

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

You can customize the appearance of the `DataGrid` by referring to the [DataGrid Customization](/docs/package-development/datagrid).

Let's assume you want to use the **`datagrid`** component. You can call it like this.

```html
<!-- Admin Datagrid -->
<x-admin::datagrid :src="route('admin.catalog.products.index')" />
```

### Admin Drawer

The `drawer` component in Bagisto provides a versatile drawer that can be positioned on the top, bottom, left, or right side of the screen. It allows you to create interactive drawers that can contain various content such as headers, body, and footer sections. The drawer can be toggled open or closed, providing a clean and efficient way to display additional information or functionality.

| Props            | Type          | Default Value | Description                                                            |
| --------------  | ------------- | ------------- | ---------------------------------------------------------------------- |
| **`is-active`** | `Boolean`     | `false`       | Determines whether the drawer is initially active.                      |
| **`position`** | `String`      | `'left'`      | Specifies the position of the drawer (`top`, `bottom`, `left`, or `right`). |
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
| **`close-on-click`**| `Boolean` | `true`        | Determines whether the dropdown should close when clicking outside the menu. |
| **`position`**    | `String`  | `'bottom-left'`| Specifies the position of the dropdown menu relative to the toggle button (`top-left`, `top-right`, `bottom-left`, `bottom-right`). |

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

### Admin Media (Image/Video)
 
The Media component in Bagisto provides a user interface for managing and displaying images/videos, allowing users to upload, edit, and delete images.:

| Props               | Type        | Default Value | Description                                                      |
|---------------------|-------------|---------------|------------------------------------------------------------------|
| **`name`**          | `String`    |               | The name of the input field.                                      |
| **`allow-multiple`** | `Boolean`   | `false`       | Whether to allow uploading multiple images.                       |
| **`show-placeholders` | `Boolean` | `true`        | Whether to show placeholder images when no images are uploaded.   |
| **`uploaded-images` | `Array`     | `[]`          | Array of uploaded images.                                         |
| **`uploaded-videos` | `Array`     | `[]`          | Array of uploaded videos.                                         |
| **`width`**         | `String`    | `'100%'`      | Width of the image container.                                     |
| **`height`**        | `String`    | `'auto'`      | Height of the image container.                                    |

Let's assume you want to use the **`Image/Video`** component, You can call it like this.

```html
<!-- Image Component -->
<x-admin::media.images
    name="images"
    allow-multiple="true"
    show-placeholders="true"
    :uploaded-images="$product->images"
/>

<!-- Video Component -->
<x-admin::media.videos
    name="videos[files]"
    :allow-multiple="true"
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

| Props          | Type    | Default Value | Description                 |
| -------------- | ------- | ------------- | --------------------------- |
| **`slug`**     | String  | `''`          | URL slug for the page.      |

Let's assume you want to use the **`seo`** component. You can call it like this, It offers a convenient way to generate and display SEO-friendly content for web pages.

```html 
<x-admin::seo slug="page" />
```

### Admin Shimmer

Prebuilt `shimmer` effects are available in Bagisto. You can easily use them.

Let's assume you want to use the **`shimmer`** You can call it like this.

```html
<!-- Admin shimmer -->
<x-admin::shimmer.datagrid />
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
        </x-admin::table.thead.tr>
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

Let's assume you want to use the **`tabs`** component on shop. You can call it like this.

```html
<!-- Shop Tab -->
<x-admin::tabs position="center">
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
| **`selector`** | String  | `''`          | The CSS selector for the textarea element to initialize as TinyMCE. |
| **`field`**    | Object  | `{}`          | Vue Formulate field object.                                      |
| **`prompt`**   | String  | `''`          | The prompt to be used for AI content generation.                 |  

Let's assume you want to use the **`tinymce`** component on admin and shop. You can call it like this.

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
    :prompt="core()->getConfigData('general.magic_ai.content_generation.category_description_prompt')"
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

**🛠️ [Package Development →](../package-development/)**  
Build advanced packages that include custom components and functionality.

**🚀 [Performance Optimization →](../performance/)**  
Learn to optimize your themes for better performance and user experience.

**📚 [Back to Getting Started →](./getting-started.md)**  
Review the complete theme development guide or explore different development paths.
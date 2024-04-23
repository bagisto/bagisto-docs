# Blade Components

[[TOC]]

To ensure optimal user experience in **Bagisto** we have created several separate Blade components for the Shop and Admin packages. Now in **`Bagisto`** we have also merged the vue.js code inside the blade component to improve application performance.

Additionally, To learn in detail about blade components, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/blade).

- Here are the list of Blade component that is available in **`Bagisto`**.

## Admin Component

  | Component         | Used For                                                       |
  | ------------- | ------------------------------------------------------------------------ |
  | **`accordion`** | This is used for creating the accordion layout. |
  | **`button`** | This is used for creating the button layout. |
  | **`charts`** | This is used for creating the chart layout. |
  | **`datagrid`**  | This is used for creating the DataGrid layout. |
  | **`drawer`** | This is used for creating the drawer layout. |
  | **`dropdown`** | This is used for creating the dropdown layout. |
  | **`flash-group`** | This is used for creating the flash group layout. |
  | **`flat-picker`** | This is used for creating the flat picker layout. |
  | **`form`** | This is used for creating the form layout. |
  | **`media`** | This is used for creating the image/video layout.  |
  | **`modal`** | This is used for creating the modal layout. |
  | **`quantity-changer`**  | This is used for creating the quantity changer layout. |
  | **`seo`** | This is used for creating the seo layout. |
  | **`shimmer`** | This is used for creating the shimmer layout. |
  | **`star-rating`** | This is used for creating the star rating layout. |
  | **`table`** | This is used for creating the table layout. |
  | **`tabs`** | This is used for creating the tabs layout. |
  | **`tinymce`** | This is used for creating the tinymce textarea layout. |
  | **`tree`** | This is used for creating the tree layout. |

## Shop Component

  | Component           | Used For                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`accordion`** | This is used for creating the accordion layout. |
  | **`breadcrumbs`** | This is used for creating the breadcrumbs layout. |
  | **`button`** | This is used for creating the button layout. |
  | **`carousel`** | This is used for creating the carousel layout. |
  | **`categories`** | This is used for creating the categories layout. |
  | **`datagrid`**  | This is used for creating the DataGrid layout. |
  | **`drawer`** | This is used for creating the drawer layout. |
  | **`dropdown`** | This is used for creating the dropdown layout. |
  | **`flash-group`** | This is used for creating the flash group layout. |
  | **`flat-picker`** | This is used for creating the flat picker layout. |
  | **`form`** | This is used for creating the form layout. |
  | **`media`** | This is used for creating the image/video layout.  |
  | **`modal`** | This is used for creating the modal layout. |
  | **`quantity-changer`** | This is used for creating the quantity changer layout. |
  | **`range-slider`**  | This is used for creating the range slider layout. |
  | **`shimmer`** | This is used for creating the shimmer layout. |
  | **`table`** | This is used for creating the table layout. |
  | **`tabs`** | This is used for creating the tabs layout. |
  | **`tinymce`** | This is used for creating the tinymce textarea layout. |

## How To Use

If you want to use the above component in a Blade file, you can use the code snippet provided below. Here are examples of some components.

### Accordion

Let's assume you want to use the **`accordion`** component, you can call it like this:

| Component           | Used For                                                      |
  | ------------- | ------------------------------------------------------------------------ |
  | **`header`** | This is used for creating the accordion layout. |
  | **`content`** | This is used for creating the breadcrumbs layout. |

You can customize the appearance of the accordion `header` and `content` by passing additional CSS classes to the header and `content` slots, respectively.

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

- **Breadcrumbs:** Let's assume you want to use the **`breadcrumbs`** component. You can call it like this:

```html
<!-- Shop Accordion -->
<x-shop::breadcrumbs
    name="addresses.edit"
    :entity="$address"
/>
```

- **Button:** Let's assume you want to use the **`button`** component. You can call it like this:

You can customize the appearance of the button by passing additional props `loading`  `buttonType`  `buttonClass` respectively. 


```html
<!-- Admin Button -->
<x-admin::button
    class="primary-button"
    :title="trans('Button')"
    ::loading="true"
    ::disabled="true"
/>

<!-- Shop Button -->
<x-shop::button
    class="primary-button max-w-none flex-auto rounded-2xl px-11 py-3"
    :title="trans('Button')"
    ::loading="true"
    ::disabled="true"
/>
```

- **Charts:** Let's assume you want to use the **`charts`** component. You can call it like this.

You can customize the appearance of the bar chart by providing different datasets with colors, labels, and data points. Additionally, you can adjust the aspect ratio of the chart by setting the aspect-ratio prop.

**Props:**

***labels*** (array, required): An array of labels for the x-axis of the chart.

***datasets*** (array, required): An array of datasets containing data points for the chart.

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

- **Drawer:** Let's assume you want to use the **`drawer`** component. You can call it like this.

You can customize the appearance of the Drawer by passing additional props `position`  `width`  `isActive` respectively.

* To customize the header section, you can target the `header` slot with your own CSS classes or styles.
* Similarly, you can customize the content section using the `content` slot.

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

<!-- Shop Drawer -->
<x-shop::drawer
    position="left"
    width="100%"
>
    <x-slot:toggle>
        Drawer Toggle
    </x-slot>

    <x-slot:header>
        Drawer Header
    </x-slot>

    <x-slot:content>
        Drawer Content
    </x-slot>
</x-shop::drawer>
```

- **Dropdown:** Let's assume you want to use the **`dropdown`** component. You can call it like this.

It allows you to define the `position` of the dropdown and provides slots for the toggle button, content, and menu items.

To customize the content section, you can target the `content` slot with your own CSS classes or styles.

```html
<!-- Admin Dropdown -->
<x-admin::dropdown position="bottom-left">  <!-- Defines the position of the dropdown menu. Default is "bottom-left" -->
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:content class="!p-0">
        Dropdown Content
    </x-slot>
</x-admin::dropdown>

<!-- Shop Dropdown -->
<x-shop::dropdown position="bottom-left">
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:content class="!m-0">
        Dropdown Content
    </x-slot>
</x-shop::dropdown>
```

- **Flat-Picker:** Let's assume you want to use the **`flat-picker`** component. You can call it like this.
It can be configured with various props to customize its behavior according to application requirements.

***Props***
* name (String): Specifies the name attribute for the input element.
* value (String): Represents the initial value of the date and time picker.
* allowInput (Boolean): Indicates whether manual input of date and time values is allowed.
* disable (Array): An array of dates to be disabled, preventing selection.
* minDate (String): Sets the minimum selectable date.
* maxDate (String): Sets the maximum selectable date.

```html
<!-- Admin flat-picker -->
<x-admin::flat-picker.date ::allow-input="false">
    <input
        type="datetime"
        name="test"
        class="mb-4"
        value="test"
        placeholder="datetime"
    />
</x-admin::flat-picker.date>

<!-- Shop flat-picker -->
<x-shop::flat-picker.date ::allow-input="false">
    <input
        type="date"
        name="test"
        class="mb-4"
        value="test"
        placeholder="date"
    />
</x-shop::flat-picker.date>
```

- **Data Grid:** Let's assume you want to use the **`datagrid`** component. You can call it like this.

You can customize the appearance of the `DataGrid` by referring to the [DataGrid Customization](https://devdocs.bagisto.com/2.x/packages/datagrid.html#datagrid-customization) documentation.


```html
<!-- Admin Datagrid -->
<x-admin::datagrid :src="route('admin.catalog.products.index')" />

<!-- Shop Datagrid -->
<x-shop::datagrid :src="route('shop.customers.account.orders.index')" />
```

- **Tab:** Let's assume you want to use the **`Tab`** component on shop. You can call it like this.
You can customize the tabs and their content as per your requirements.

***props***
* position (String): Specifies the position of the tabs. It accepts values such as 'left', 'right', or 'center'.

***tab-item props***
* title (String): Title of the tab.
* is-selected (Boolean): Indicates whether the tab is selected or not (default is false).

```html
<!-- Shop Tab -->
<x-shop::tabs position="center">
    <x-shop::tabs.item
        class="container"
        :title="Tab-1"
        :is-selected="true"
    >
        <div class="container mt-[60px] max-1180:px-[20px]">
            <p class="text-[#6E6E6E] text-[18px] max-1180:text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </x-shop::tabs.item>

    <x-shop::tabs.item
        class="container"
        :title="Tab-2"
    >
        <div class="container mt-[60px] max-1180:px-[20px]">
            <p class="text-[#6E6E6E] text-[18px] max-1180:text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </x-shop::tabs.item>
</x-shop::tabs>
```

- **Tinymce:** Let's assume you want to use the **`Tinymce`** component on shop. You can call it like this.

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
/>

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

- **Shimmer:** Let's assume you want to use the **`Shimmer`** component on shop. For all components, prebuilt shimmer effects are available in Bagisto. You can easily use them. You can call it like this.

```html
<!-- Admin shimmer -->
<x-admin::shimmer.datagrid />

<!-- Shop shimmer -->
<x-shop::shimmer.datagrid />

```
- **SEO:** Let's assume you want to use the **`SEO`** component. You can call it like this, It offers a convenient way to generate and display SEO-friendly content for web pages.

You can pass `slug (String): URL slug for the page.` as a props .

```html 
<x-admin::seo slug="page" />
```

- **Quantity Changer:** Let's assume you want to use the **`Quantity Changer`** component on shop. You can call it like this.
***props***
* name (String): Name attribute for the hidden input field.
* value (Number): Initial quantity value.

```html
<!-- Shop Quantity changer -->
<x-shop::quantity-changer
    name="quantity"
    value="1"
    class="gap-x-4 rounded-xl px-7 py-4"
/>

<!-- Admin Quantity changer -->
<x-admin::quantity-changer
    name="quantity"
    value="1"
    class="w-max gap-x-4 rounded-l px-4 py-1"
/>
```

- **Table:** Let's assume you want to use the **`Table`** component on shop.

***Customization:-*** You can customize the appearance of these table elements using CSS. Below are some common customization options:

* Table Styling: Apply custom styles to the `table` element to change its appearance, such as borders, padding, and background color.
* Cell Styling: Customize the appearance of `th` and `td` elements using CSS, such as font size, text alignment, and background color.
* Row Styling: Apply styles to `tr` elements to change their appearance, such as background color, hover effects, and borders.
* Header Styling: Customize the appearance of the header cells within the `thead` section using `th` elements. Apply styles such as font weight, text color, and background color.

You can call it like this.

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
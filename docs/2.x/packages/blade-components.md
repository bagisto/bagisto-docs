# Blade Components

[[TOC]]

To ensure optimal user experience in **Bagisto** we have created several separate Blade components for the Shop and Admin packages. Now in **`Bagisto`** we have also merged the vue.js code inside the blade component to improve application performance.

Additionally, To learn in detail about blade components, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/blade).

- Here are the list of Blade component that is available in **`Bagisto`**.

## Admin Component

  | Component         | Used For                                                       |
  | ------------- | ------------------------------------------------------------------------ |
  | **`accordion`** | This is used for creating the accordion layout. |
  | **`charts`** | This is used for creating the chart layout. |
  | **`datagrid`**  | This is used for creating the DataGrid layout. |
  | **`drawer`** | This is used for creating the drawer layout. |
  | **`dropdown`** | This is used for creating the dropdown layout. |
  | **`flash-group`** | This is used for creating the flash group layout. |
  | **`flat-picker`** | This is used for creating the flat picker layout. |
  | **`form`** | This is used for creating the form layout. |
  | **`media`** | This is used for creating the image/video layout.  |
  | **`modal`** | This is used for creating the modal layout. |
  | **`panel`** | This is used for creating the panel layout. |
  | **`range-slider`**  | This is used for creating the range slider layout. |
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
  | **`panel`** | This is used for creating the panel layout. |
  | **`quantity-changer`** | This is used for creating the quantity changer layout. |
  | **`range-slider`**  | This is used for creating the range slider layout. |
  | **`shimmer`** | This is used for creating the shimmer layout. |
  | **`table`** | This is used for creating the table layout. |
  | **`tabs`** | This is used for creating the tabs layout. |
  | **`tinymce`** | This is used for creating the tinymce textarea layout. |

## How To Use

- If you want to use the above component in blade file you can use this something like below. Below are examples of some components.

- ***Accordion:-*** Let's assume you want to use the **`accordion`** component then you can call this something like below.

```html
<!-- Admin Accordion -->
<x-admin::accordion title="Admin Accordion">
    <x-slot:header>
        Accordion Header
    </x-slot>

    <x-slot:content>
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
- ***Breadcrumbs:-*** Let's assume you want to use the **`breadcrumbs`** component then you can call this something like below.

```html
<!-- Shop Accordion -->
<x-shop::breadcrumbs
    name="addresses.edit"
    :entity="$address"
/>
```

- ***Charts:-*** Let's assume you want to use the **`charts`** component then you can call this something like below.

```html
<!-- Admin Charts -->
<x-admin::charts.line
    ::labels="chartLabels"
    ::datasets="chartDatasets"
/>
```
- ***Drawer:-*** Let's assume you want to use the **`drawer`** component then you can call this something like below.

```html
<!-- Admin Drawer -->
<x-admin::drawer     
    position="left"
    width="100%"
>
    <x-slot:toggle>
        Drawer Toggle
    </x-slot>

    <x-slot:header>
        Drawer Header
    </x-slot>

    <x-slot:content class="!p-5">
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
- ***Dropdown:-*** Let's assume you want to use the **`dropdown`** component then you can call this something like below.

```html
<!-- Admin Dropdown -->
<x-admin::dropdown>
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
- ***Flat-Picker:-*** Let's assume you want to use the **`flat-picker`** component then you can call this something like below.

```html
<!-- Admin flat-picker -->
<x-admin::dropdown>
    <x-slot:toggle>
        Dropdown Toggle
    </x-slot>

    <x-slot:content class="!p-0">
        Dropdown Content
    </x-slot>
</x-admin::dropdown>

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

- ***Data Grid:-*** Let's assume you want to use the **`DataGrid`** component then you can call this something like below.

```html
<!-- Admin Datagrid -->
<x-admin::datagrid :src="route('admin.catalog.products.index')"></x-admin::datagrid>

<!-- Shop Datagrid -->
<x-shop::datagrid :src="route('shop.customers.account.orders.index')"></x-shop::datagrid>
```

- ***Tab:-*** Let's assume you want to use the **`Tab`** component on shop then you can call this something like below.

```html
<!-- Shop Tab -->
<x-shop::tabs position="center">
    <x-shop::tabs.item
        class="container"
        :title="trans('shop::app.general.tab-1')"
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
        :title="trans('shop::app.general.tab-2')"
    >
        <div class="container mt-[60px] max-1180:px-[20px]">
            <p class="text-[#6E6E6E] text-[18px] max-1180:text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </x-shop::tabs.item>
</x-shop::tabs>
```

- ***Tinymce:-*** Let's assume you want to use the **`Tinymce`** component on shop then you can call this something like below.

```html
<!-- Admin Tinymce -->
<x-admin::form.control-group.control
    type="textarea"
    id="content"
    name="content"
    rules="required"
    :value="old('content')"
    :label="trans('admin::app.marketing.communications.templates.create.content')"
    :placeholder="trans('admin::app.marketing.communications.templates.create.content')"
    :tinymce="true"
/>

<!-- Shop Tinymce -->
<x-shop::form.control-group.control
    type="textarea"
    id="content"
    name="content"
    rules="required"
    :value="old('content')"
    :label="trans('admin::app.marketing.communications.templates.create.content')"
    :placeholder="trans('admin::app.marketing.communications.templates.create.content')"
    :tinymce="true"
/>
```
- ***Shimmer:-*** Let's assume you want to use the **`Shimmer`** component on shop then you can call this something like below.

```html
<!-- Admin shimmer -->
<x-admin::shimmer.datagrid />

<!-- Shop shimmer -->
<x-shop::shimmer.datagrid />
```
- ***Quantity Changer:-*** Let's assume you want to use the **`Quantity Changer`** component on shop then you can call this something like below.

```html
<x-shop::quantity-changer
    name="quantity"
    value="1"
    class="gap-x-4 rounded-xl px-7 py-4"
/>
```
- ***Table:-*** Let's assume you want to use the **`Table`** component on shop then you can call this something like below.

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
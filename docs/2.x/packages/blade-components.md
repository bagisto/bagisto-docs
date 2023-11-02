# Blade Components

[[TOC]]

To ensure optimal user experience in **Bagisto** we have created several separate Blade components for the Shop and Admin packages. Now in **`Bagisto`** we have also merged the vue.js code inside the blade component to improve application performance.

Additionally, To learn in detail about blade components, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/blade).

- Here are the list of Blade component that is available in **`Bagisto`**.

## Admin Component

  | Component         | Used For                                                       |
  | ------------- | ------------------------------------------------------------------------ |
  | **`accordion`** | This is used for creating the accordion layout. |
  | **`breadcrumbs`** | This is used for creating the breadcrumbs layout. |
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

- Let's assume you want to use the **`DataGrid`** component then you can call this something like below.

```html
<!-- Admin Datagrid -->
<x-admin::datagrid :src="route('admin.catalog.products.index')"></x-admin::datagrid>

<!-- Shop Datagrid -->
<x-shop::datagrid :src="route('shop.customers.account.orders.index')"></x-shop::datagrid>
```

- Let's assume you want to use the **`Tab`** component on shop then you can call this something like below.

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
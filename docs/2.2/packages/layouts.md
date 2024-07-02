# Layouts

[[TOC]]

## Introduction

Layouts in Bagisto are fundamental to structuring your application's views in a consistent and reusable way. They provide a template for rendering HTML across multiple pages, ensuring a unified design and user experience. By defining layouts, you can streamline development, improve maintainability, and enhance the overall aesthetics of your web application.

To learn in detail about Layouts, you can visit the Laravel documentation [here](https://laravel.com/docs/11.x/blade).

## Admin Layout

`<x-admin::layouts>` This component serves as the container for your extended admin layout. It encapsulates the entire layout structure, including the title and content.

To extend the default layout of the Bagisto admin panel, you'll create or modify the `index.blade.php` file located at `packages/Webkul/Blog/src/Resources/views/admin/index.blade.php`. Below is a detailed breakdown of how to integrate and customize the layout:

```html
<x-admin::layouts>
    <!-- Title of the page -->
    <x-slot:title>
        @lang('blog::app.admin.index.page-title')
    </x-slot:title>

    <div class="flex gap-[16px] justify-between max-sm:flex-wrap">
        <p class="py-[11px] text-[20px] text-gray-800 dark:text-white font-bold">
            <!-- Section Title -->
            @lang('blog::app.admin.index.page-title')
        </p> 

        <div class="flex gap-x-[10px] items-center">
            <!-- Action Button -->
        </div>
    </div>
</x-admin::layouts>
```

## Shop Layout

`<x-shop::layouts>` This component serves as the container for your extended admin layout. It encapsulates the entire layout structure, including the title and content.

To extend the shop layout in Bagisto, modify or create the `index.blade.php` file located at `packages/Webkul/Blog/src/Resources/views/shop/default/index.blade.php`. Below is a detailed breakdown of how to integrate and customize the shop layout:

```html
<x-shop::layouts
	:has-header="false"
	:has-feature="false"
	:has-footer="false"
>
    <!-- Title of the page -->
    <x-slot:title>
        @lang('blog::app.shop.blogs.page-title')
    </x-slot:title>

    <div class="flex justify-between items-center">
        <h2 class="text-[26px] font-medium">
            @lang('blog::app.shop.blogs.page-title')
        </h2>
    </div>
</x-shop::layouts.account>
```

| Prop Name   | Description                                                        | Default Value |
|-------------|--------------------------------------------------------------------|---------------|
| **`has-header`** | Determines whether to include a header section in the component.   | `true`        |
| **`has-feature`** | Controls the visibility of a feature section within the component. | `true`        |
| **`has-footer`**  | Specifies whether to display a footer section in the component.    | `true`        |

::: warning
Notice that there are translations used in the blade files, so you will also need to add the corresponding translations in **`lang/app.php`**.
:::

If you don't want to include these layouts, you can create your own master file.
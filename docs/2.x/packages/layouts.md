# Layouts

[[TOC]]

To learn in detail about Layouts, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/blade).

## Extend Admin Layout

Now, let's extend the default layout of the Bagisto admin panel in the file **`packages/Webkul/Blog/src/Resources/views/admin/index.blade.php`**. You can copy the following template to your **`index.blade.php`** file:

```html
<x-admin::layouts>
    <!-- Title of the page -->
    <x-slot:title>
        @lang('blog::app.admin.index.page-title')
    </x-slot:title>

    <!-- Content-->
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

## Extend Shop Layout

Similarly, for the file **`packages/Webkul/Blog/src/Resources/views/shop/default/index.blade.php`**, you can extend the shop layout. You can copy the following template to your **`index.blade.php`** file:

```html
<x-shop::layouts.account>
    <!-- Title of the page -->
    <x-slot:title>
        @lang('blog::app.shop.blogs.page-title')
    </x-slot:title>

    <!-- Content-->
    <div class="flex justify-between items-center">
        <h2 class="text-[26px] font-medium">
            @lang('blog::app.shop.blogs.page-title')
        </h2>
    </div>
</x-shop::layouts.account>
```

::: warning
Notice that there are translations used in the blade files, so you will also need to add the corresponding translations in **`lang/app.php`**.
:::

If you don't want to include these layouts, you can create your own master file.
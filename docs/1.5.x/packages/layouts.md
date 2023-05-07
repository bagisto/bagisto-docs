# Layouts

[[TOC]]

To learn in detail about Layouts you can visit Laravel doc from [here](https://laravel.com/docs/10.x/blade)

## Extend Admin Layout

- Now, We can extend the default layout of Bagisto admin panel by using **`@extends('admin::layouts.master')`** in file **`packages/Webkul/Blog/src/Resources/views/admin/index.blade.php`**. Below is the simple template which you can copy to your **`index.blade.php`** file.

  ```html
  @extends('admin::layouts.master')

  @section('page_title') {{ __('blog::app.admin.index.page-title') }} @stop

  @section('content-wrapper')

    <div class="content full-page dashboard">
        <div class="page-header">
            <div class="page-title">
                <h1>{{ __('blog::app.admin.index.page-title') }}</h1>
            </div>
            <div class="page-action">
            </div>
        </div>
        <div class="page-content">
        </div>
    </div>

  @stop
  ```
  
## Extend Shop Layout

- Same for file in file **`packages/Webkul/Blog/src/Resources/views/shop/velocity/index.blade.php`**. Below is the simple template which you can copy to your **`index.blade.php`**.

 ```html
  @extends('shop::layouts.master')

  @section('page_title') {{ __('blog::app.shop.blogs.page-title') }} @stop

  @section('content-wrapper')

    <div class="content full-page">
        <div class="page-content">
        </div>
    </div>

  @stop
  ```

::: warning
  You can notice translation in the blade file so you also have to add translation in **`lang/app.php`** respectively.
:::

- If you don’t want to include this one then you can create your own master file.
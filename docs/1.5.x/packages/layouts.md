# Layouts

[[TOC]]

To learn in detail about Layouts, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/blade).

## Extend Admin Layout

Now, let's extend the default layout of the Bagisto admin panel by using **`@extends('admin::layouts.master')`** in the file **`packages/Webkul/Blog/src/Resources/views/admin/index.blade.php`**. You can copy the following template to your **`index.blade.php`** file:

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

Similarly, for the file **`packages/Webkul/Blog/src/Resources/views/shop/velocity/index.blade.php`**, you can extend the shop layout by using **`@extends('shop::layouts.master')`**. You can copy the following template to your **`index.blade.php`** file:

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
Notice that there are translations used in the blade files, so you will also need to add the corresponding translations in **`lang/app.php`**.
:::

If you don't want to include these layouts, you can create your own master file.
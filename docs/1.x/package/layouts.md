# Layouts

### Step-1

- Till now, we configured our package `Blog` and now we need to extend the default layout of our admin panel by using `@extends('admin::layouts.master')` in file `packages/Webkul/Blog/src/Resources/views/admin/index.blade.php`. Below is the simple template which you can copy to your `index.blade.php` file.

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

- Same for file in file `packages/Webkul/Blog/src/Resources/views/shop/velocity/index.blade.php`. Below is the simple template which you can copy to your `index.blade.php`.

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
  You can notice translation in the blade file so you also have to add translation in `lang/app.php` respectively.
:::

- If you don’t want to include this one then you can create your own master file which includes your packages CSS & JS.

- Run `php artisan vendor:publish --all --force`. This will move all your publishable assets to their respective directory which you mentioned in the service provider.
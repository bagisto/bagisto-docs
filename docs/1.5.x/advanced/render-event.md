# View Render Event

[[TOC]]

## Introduction

The **`view_render_event()`** function in Bagisto allows you to inject content before or after the main content of a template. This gives you the flexibility to modify the template output as needed.

Here's an example of how you can use **`view_render_event()`** to inject content:

```php
@section('content-wrapper')

    {!! view_render_event('bagisto.shop.home.content.before') !!}

    {!! DbView::make($channel)->field('home_page_content')
    ->with(['sliderData' => $sliderData])->render() !!}

    {!! view_render_event('bagisto.shop.home.content.after') !!}

@endsection
```

In the example above, we use **`view_render_event()`** to inject content before and after the main content of the **`home_page_content`** template.

## Render View

To render content before or after a specific section of a template, follow these steps:

1. Add the event in the blade file where you want to inject the content. For example:

   ```php
   {!! view_render_event('bagisto.shop.test.before') !!}
   ```

   In this example, **`bagisto.shop.test`** is the event name defined in a random blade file of your project.

2. Next, you need to listen to the event in the **`EventServiceProvider.php`** file. Add the following code in the **`boot()`** method:

   ```php
    <?php

    namespace Webkul\Blog\Providers;

    use Illuminate\Support\ServiceProvider;
    use Illuminate\Support\Facades\Event;

    class BlogServiceProvider extends ServiceProvider
    {
        /**
         * Bootstrap any application services.
         *
         * @return void
         */
        public function boot()
        {
            //...
                
            Event::listen('bagisto.shop.test.before', function($viewRenderEventManager) {
                $viewRenderEventManager->addTemplate('template file path to be injected');
            });
        }
    }
   ```

   In the code above, replace **`'template file path to be injected'`** with the actual path to the template file that you want to render.

:::warning
   Make sure that you have registered the **`EventServiceProvider`** in your own service provider.
:::

By following these steps, you can use the **`view_render_event()`** function to dynamically inject content before or after the main content of a template in Bagisto.
# View Render Event

[[TOC]]

## Introduction

The `view_render_event()` function in Bagisto allows developers to inject content dynamically before or after the main content of a template. This functionality is useful for modifying template output without directly altering the template file itself, enhancing flexibility and maintainability in your application.

## Render View

To utilize the `view_render_event()` function effectively, follow these steps:

### Injecting Content in Blade Templates

You can use `view_render_event()` within your Blade templates (*.blade.php) to specify points where content should be injected. Here’s an example:

```php
@section('content-wrapper')

    {!! view_render_event('bagisto.shop.home.content.before') !!}

    {!! DbView::make($channel)->field('home_page_content')
    ->with(['sliderData' => $sliderData])->render() !!}

    {!! view_render_event('bagisto.shop.home.content.after') !!}

@endsection
```

In this example `bagisto.shop.home.content.before` and `bagisto.shop.home.content.after` are custom event names that denote where content should be injected before and after the home_page_content section, respectively.

### Listening to Events

To handle these events and inject content dynamically, you need to listen to them in your application’s event system (typically in the `EventServiceProvider`).

Open your `EventServiceProvider.php` file located in `app/Providers` or similar directory.

In the `boot()` method of your `EventServiceProvider`, add event listeners as follows:

```php
<?php

namespace Webkul\Blog\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Event;

class BlogServiceProvider extends ServiceProvider
{
    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        Event::listen('bagisto.shop.home.content.before', function($viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('path/to/before_content_template.blade.php');
        });

        Event::listen('bagisto.shop.home.content.after', function($viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('path/to/after_content_template.blade.php');
        });
    }
}
```
Replace `'path/to/before_content_template.blade.php'` and `'path/to/after_content_template.blade.php'` with the actual paths to the Blade template files you want to inject.

:::warning
   Make sure that you have registered the **`EventServiceProvider`** in your own service provider.
:::

### Implementation Details

- `$viewRenderEventManager->addTemplate()`: This method adds the specified template file to the rendering queue for the corresponding event. When the event is triggered during template rendering, Bagisto will include the specified template's content at the designated injection point.

- `Event Handling`: Ensure that you properly handle the events within your application’s event flow. This involves registering listeners correctly in EventServiceProvider and ensuring that the templates being injected are structured and formatted according to your application's requirements.

### Considerations

- `Integration`: Integrate this functionality carefully into your Bagisto application to maintain coherence and readability of your codebase

- `Customization`: Customize event names (`'bagisto.shop.home.content.before'`, `'bagisto.shop.home.content.after'`) and template paths according to your specific application needs and structure.

By following these steps, you can effectively leverage the `view_render_event()` function in Bagisto to dynamically inject content into template sections, enhancing flexibility and customization options within your application.
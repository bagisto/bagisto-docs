# View render event
With the help of `view_render_event()`, you can inject anything before or after the content of a template.

```php
    @section('content-wrapper')

        {!! view_render_event('bagisto.shop.home.content.before') !!}

        {!! DbView::make($channel)->field('home_page_content')
        ->with(['sliderData' => $sliderData])->render() !!}

        {!! view_render_event('bagisto.shop.home.content.after') !!}

    @endsection
```

To render any template before or after any function we may use 'view_render_event'.  
You can define any event view_render_event() in the template by following steps:

## Steps to render View

- Create an event in the blade file in which you want to render any content before or after any content of that template:

```php
    { !! view_render_event('bagisto.shop.test.before') !! }
```

As you can see, `bagisto.shop.test` is the event name here that is defined in a random blade file of the project.

- Now you have to listen to the event at **_EventServiceProvider.php_** file and in the boot method like:

```php
    Event::listen('bagisto.shop.test.before', function($viewRenderEventManager) {
        $viewRenderEventManager->addTemplate('template file path that you want to inject);
    });
```

As you can see, you have to add the path of the template that you want to render.
After that, this will automatically fire and your template will be injected before the content.
Make sure that you have registered EventServiceProvider in your ServiceProvider.

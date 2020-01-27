---
title: View render event-Bagisto
layout: default
---

# View Render Event

![](assets/images/icons/Icon-Pencil-Large.svg){:.pencil-icon}
[edit on github](https://github.com/bagisto/bagisto-docs/blob/master/render_event.md){:.edit-github target="\_blank"}


With the help of the view_render_event(), you can inject anything before or after the content of a template.

![View Render Event](assets/images/Bagisto_Docs_Images/render-event/view-render-event.png){: .screenshot-dimension .center}

To render any template before or after any function we may use view_render_event. You can define any event (view_render_event()) in the template by following steps:

### Steps to render View

1. Create an event in the blade file in which you want to render any content before or after any content of that template:

```php
    !! view_render_event('bagisto.shop.test.before') !!
```
As you can see, `bagisto.shop.test` is the event name here that is defined in a random blade file of the project.

2. Now you have to listen to the event at EventServiceProvider file and in the boot method like:

```php
    Event::listen('bagisto.shop.test.before', function($viewRenderEventManager) {
    $viewRenderEventManager->addTemplate('template file path that you want to inject);'
    }
```
As you can see, you have to add the path of the template here that you want to render.

After that, this will automatically fire and your template will be injected before the content.

3. Make sure that you have registered EventServiceProvider in your ServiceProvider’s.
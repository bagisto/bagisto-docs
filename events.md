---
title: Events-Bagisto
layout: default
---

## Events

Events provide a simple observer implementation which allows a user to subscribe and listen to various events triggered in the web application. All the event classes in Bagisto are stored in the `Providers` folder and the listeners are stored in the `Listeners` folder.

#### Manually Registering Events

For the sake of simplicity, in Bagisto, we register events manually in the boot method of your EventServiceProvider as below:

    ```php
    /**
    * Register any other events for your application.
    *
    * @return void
    */
    public function boot()
    {
        parent::boot();

        Event::listen('event.name', 'path-upto-listener@function');
    }
    ```

#### Manually Registering Listeners

As we see above, in registering events we specify listener function to be executed when event is called so on every event a listener function is to be executed


### How we specify events?

In most of repositories's CRUD operation functions. We had fired an event before and after the execution of function.

![Bagisto Root Directory](assets/images/Bagisto_Docs_Images/Events/create-event-before-after.png){: height="50%" width="100%"}



![Bagisto Root Directory](assets/images/Bagisto_Docs_Images/Events/delete-event-before-after.png){: height="50%" width="100%"}

# Full Page Cache

[[TOC]]

## Introduction

Bagisto introduces Full Page Cache support to deliver lightning-fast page loading, improved SEO, scalability, and reduced server load for enhanced eCommerce performance.

Full Page Cache is a mechanism that stores entire HTML pages in the cache. When a request is made for the same page, the cache seamlessly serves the page without the need for re-executing server-side logic. This process allows for faster page load times as the cache provides a quick and efficient way to serve the requested page without the need to run the server-side logic again. This reduces the need for database queries, template rendering, and other resource-intensive tasks, resulting in faster page load times.

We used the [Spatie Laravel Responsecache Package](https://github.com/spatie/laravel-responsecache) in Bagisto 

### How to Enable Full Page Cache In Bagisto

- Go to the .env Configuration file

```php
Set RESPONSE_CACHE_ENABLED=true
```

### How to set Cache duration and other Configuration

- Navigate to  `config/responsecache.php.` this path to adjust cache duration and explore other configuration settings for Full Page Cache in Bagisto. Here, you’ll find all the configurations related to Full Page Cache.

### Full page cache supported pages

- Home Page
- Category Page
- Product Page

### Supported Cache Drivers

- File
- Memcached
- Redis
- DynamoDB

### Clearing  Response Cache with Artisan Commands:

To effortlessly clear your application’s response cache in Bagisto, utilize the following command:

```shell
php artisan responsecache:clear
```

This command clears all cached responses. Optionally, you can provide a `--url` option to clear the cache for a specific URL:

```shell
php artisan responsecache:clear --url=http://example.com
```

Replace `http://example.com` with the actual URL for which you want to clear the cached response.

## Cache invalidation

Here are some common techniques for cache invalidation in Laravel:

#### Create the EventServiceProvider class

Create an EventServiceProvider in the `packages/Webkul/Post/src/Providers/EventServiceProvider.php` directory. This file contains the code for the event service provider, which can be used to register events and their listeners. To register an event and its listener, you can add them to the $listen array in the EventServiceProvider class.

```php
<?php

namespace Webkul\Post\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'post.update.after' => [
            'Webkul\Post\Listeners\Post@afterUpdate',
        ],
    ];
}
```

#### Register the Service in the Post Service Provider

In the `packages/Webkul/Post/src/Providers/PostServiceProvider.php` file, locate the `boot()` method. Add EventServiceProvider within the `boot()` method.

```php
<?php

namespace Webkul\Post\Providers;

use Illuminate\Support\ServiceProvider;

class PostServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->register(EventServiceProvider::class);
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
    }
}
```
#### Handling Events in the Post Controller

In the realm of event-based cache management, consider the event post.update.after triggered from the post controller upon a post update. This integration guarantees swift cache clearance or update, maintaining synchronization with the latest post modifications.

```php
/**
 * Update the specified resource in storage.
 *
 * @return \Illuminate\Http\Response
 */
public function update(int $id)
{
    Event::dispatch('post.update.before', $id);

    $post = $this->postRepository->update(request()->only(['status']), $id);

    Event::dispatch('post.update.after', $post);

    session()->flash('success', trans('shop::app.posts.update-success', ['name' => 'shop::app.posts.post']));

    return redirect()->route('shop.posts.index');
}
```

#### Listener Method for Cache Invalidation

In the directory `packages/Webkul/Post/src/Listeners` you can find the `afterUpdate()` method. This method clears the cache using the `forget()` method when  a post is updated.

```php
/**
 * After post is updated
 *
 * @param  \Webkul\Post\Contracts\Post  $post
 * @return void
 */
public function afterUpdate($post)
{
    ResponseCache::forget('/' .  $post->url_key);
}
```
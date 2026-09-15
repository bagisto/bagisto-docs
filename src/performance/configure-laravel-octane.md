# Configure Laravel Octane

[Laravel Octane](https://laravel.com/docs/octane) boots the application once per worker and keeps it in memory, serving requests through FrankenPHP, RoadRunner or Swoole. `laravel/octane` is already a dependency in Bagisto's `composer.json`, so the `octane:*` commands are available. This page installs and runs a server, and covers what changes for Bagisto code in a long-running worker.

## When You Need It

Use Octane when booting the application is a noticeable part of each response and you can run your store's packages under a long-running worker. Bagisto ships no `config/octane.php` and registers no Octane listeners of its own, and its CI runs the test suites without Octane, so test your store and packages under a worker before relying on it.

## Step 1: Install a Server

```bash
php artisan octane:install --server=frankenphp
```

`--server` takes `frankenphp`, `roadrunner` or `swoole`; without it the command asks, with FrankenPHP as the default. The command writes `config/octane.php`, which your application then owns, and sets `OCTANE_SERVER` in `.env`.

| Server | What to expect |
|---|---|
| FrankenPHP | `octane:install` offers to download the `frankenphp` binary into the project root |
| RoadRunner | `octane:install` asks to require `spiral/roadrunner-http` and `spiral/roadrunner-cli`, then fetches the `rr` binary into the project root |
| Swoole | Needs the Swoole PHP extension; check with `php --ri swoole` |

<a id="repository-cache-tokens"></a>

## Step 2: Refresh Repository Cache Tokens on Each Request

A worker keeps the repository cache tokens it first read, because `Webkul\Core\Helpers\CacheGeneration` holds them in a static property that nothing clears outside the test suite. When another worker writes through one of the six cached repositories, for example by saving configuration, this worker keeps returning what was cached under the old token until it restarts. See [Cache Strategy](../advanced/cache-strategy.md#repository-cache).

Clear the tokens at the start of every request with an Octane listener:

**File:** `app/Listeners/Octane/FlushRepositoryCacheTokens.php`

```php
<?php

namespace App\Listeners\Octane;

use Laravel\Octane\Events\RequestReceived;
use Webkul\Core\Helpers\CacheGeneration;

class FlushRepositoryCacheTokens
{
    /**
     * Forget the repository cache tokens an earlier request on this worker read.
     */
    public function handle(RequestReceived $event): void
    {
        CacheGeneration::flush();
    }
}
```

Add it to the `RequestReceived` listeners in `config/octane.php`, after Octane's own, and import the class at the top of the file:

**File:** `config/octane.php`

```php
'listeners' => [
    // ...

    RequestReceived::class => [
        ...Octane::prepareApplicationForNextOperation(),
        ...Octane::prepareApplicationForNextRequest(),
        FlushRepositoryCacheTokens::class,
    ],

    // ...
],
```

The next read of each cached repository then fetches its current token from the cache store, as a PHP-FPM request does.

## Step 3: Run the Server

```bash
php artisan octane:start --server=frankenphp --host=127.0.0.1 --port=8000 --workers=4 --max-requests=500
```

| Option | Purpose |
|---|---|
| `--workers` | Worker processes that handle requests |
| `--max-requests` | Requests a worker handles before it is replaced, which limits memory growth |
| `--watch` | Reloads workers when files change; for development only |
| `--https` | Serves HTTPS, HTTP/2 and HTTP/3 with automatic certificates (FrankenPHP only) |

In production, keep `octane:start` running under a process manager such as Supervisor or systemd, as the Octane documentation describes. After a deployment or a configuration change, run `php artisan octane:reload`; `octane:stop` stops the server.

## Test It

1. Run `php artisan octane:status` to confirm the server is running.
2. Open the admin's About page through the Octane server. It reports the Octane server only for a request that Octane actually served.

## Things to Watch

- **Settings applied at boot.** A worker keeps the configuration it booted with, and two sets of admin settings are applied then: the **File Management** disk and credentials (`Webkul\Core\Filesystem\StorageConfigurator`, from `CoreServiceProvider::boot()`) and the **Search Engines** connection (`Webkul\Product\Services\Search\SearchEngineConfigurator`, from `ProductServiceProvider::boot()`). After saving either section, run `php artisan octane:reload` on every server.
- **Request state is reset for core, not for your code.** Before each request Octane gives the worker a fresh copy of the application and clears the facade instances it resolved (`Laravel\Octane\CurrentApplication::set()`). `Webkul\Core\Core` isn't bound in the container, and `core()` and `cart()` return the instances their facades cache, so they work out the channel, locale, currency and cart again, and `Webkul\Theme\Themes` initializes its theme from the request when it has none.
- **A static property** that holds the customer, the channel, the cart or any other request data carries it into the next request.
- **A container singleton resolved while the application boots** is shared by every request the worker handles, so don't read the request, the session or `core()`'s current channel in its constructor.

## Related Pages

- [Cache Strategy](../advanced/cache-strategy.md#repository-cache): how the repository cache and its tokens work.
- [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md#running-workers-in-production): the same state concerns in queue workers.
- [Configure Load Balancing](./configure-load-balancing.md): what several Octane servers must share.

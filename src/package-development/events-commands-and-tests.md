# Events, Commands and Tests

The FAQ package now works from the admin to the storefront. On this page you add the three pieces most packages need next, each in the pattern of the core packages: a listener that reacts to the FAQ's events, a console command, and Pest tests.

## Listen to Events

The listener built here keeps the storefront FAQ page current in the full page cache. [Event Listeners](../advanced/event-listeners.md) lists core's event names and more listener patterns.

### Cache the Storefront Page

Let the full page cache store `/faq` by adding the `cache.response` middleware to the storefront route:

**File:** `packages/Webkul/Faq/src/Routes/shop-routes.php`

```php{12}
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Core\Http\Middleware\PreventRequestsDuringMaintenance;
use Webkul\Faq\Http\Controllers\Shop\FaqController;

Route::group([
    'middleware' => ['web', 'shop', PreventRequestsDuringMaintenance::class],
], function () {
    Route::get('faq', [FaqController::class, 'index'])
        ->name('shop.faq.index')
        ->middleware('cache.response');
});
```

While the [full page cache](../performance/configure-fpc.md) is enabled, guests now receive `/faq` from the cache, and would keep seeing a question after an admin edits or deletes it.

### Forget the Page When a Question Changes

**File:** `packages/Webkul/Faq/src/Listeners/Faq.php`

```php
<?php

namespace Webkul\Faq\Listeners;

use Webkul\FPC\Concerns\ForgetsPages;

class Faq
{
    use ForgetsPages;

    /**
     * Drop the storefront FAQ page from the full page cache.
     */
    public function forgetPage(): void
    {
        $this->forgetPages(['/faq']);
    }
}
```

`forgetPages()`, from the trait core's own cache listeners use, removes the given paths from the cache on every channel's host, for every locale and currency. [Invalidating Pages from Your Package](../advanced/cache-strategy.md#invalidating-pages-from-your-package) explains which pages core already clears.

Map the three `after` events to the listener in an event service provider of the package's own:

**File:** `packages/Webkul/Faq/src/Providers/EventServiceProvider.php`

```php
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Webkul\Faq\Listeners\Faq;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the package.
     *
     * @var array
     */
    protected $listen = [
        'faq.create.after' => [
            [Faq::class, 'forgetPage'],
        ],

        'faq.update.after' => [
            [Faq::class, 'forgetPage'],
        ],

        'faq.delete.after' => [
            [Faq::class, 'forgetPage'],
        ],
    ];
}
```

A listener method receives the event's payload as its arguments, but `forgetPage()` needs none. The mass actions fire the same events, so a bulk change clears the page too. The next section registers this provider.

## Add a Console Command

**File:** `packages/Webkul/Faq/src/Console/Commands/FaqSummary.php`

```php
<?php

namespace Webkul\Faq\Console\Commands;

use Illuminate\Console\Command;
use Webkul\Core\Repositories\ChannelRepository;
use Webkul\Faq\Repositories\FaqRepository;

class FaqSummary extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'faq:summary';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Show how many active questions each channel has.';

    /**
     * Execute the console command.
     */
    public function handle(ChannelRepository $channelRepository, FaqRepository $faqRepository): int
    {
        $rows = $channelRepository->all()->map(fn ($channel) => [
            $channel->code,
            $faqRepository->getActiveForChannel($channel->id)->count(),
        ]);

        $this->table(['Channel', 'Active questions'], $rows);

        return self::SUCCESS;
    }
}
```

Register the command from `register()` while the application runs in the console, as `Webkul\Core\Providers\CoreServiceProvider` does, and the event provider from `boot()`. This is the package's finished service provider:

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{6,30,48,51-61}
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\Faq\Console\Commands\FaqSummary;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/admin-menu.php',
            'menu.admin'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/acl.php',
            'acl'
        );

        $this->mergeConfigFrom(
            dirname(__DIR__).'/Config/system.php',
            'core'
        );

        $this->registerCommands();
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');

        $this->loadRoutesFrom(__DIR__.'/../Routes/admin-routes.php');

        $this->loadRoutesFrom(__DIR__.'/../Routes/shop-routes.php');

        $this->loadViewsFrom(__DIR__.'/../Resources/views', 'faq');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'faq');

        $this->app->register(EventServiceProvider::class);
    }

    /**
     * Register the console commands of the package.
     */
    protected function registerCommands(): void
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                FaqSummary::class,
            ]);
        }
    }
}
```

Check both pieces:

```bash
php artisan optimize:clear
```

1. Run the command. It prints a table of channel codes with the number of active questions in each:

   ```bash
   php artisan faq:summary
   ```

2. With the [full page cache](../performance/configure-fpc.md) on, as it is by default, open `/faq` in a private window, change an answer in the admin, and reload the private window. The new answer shows, because the listener forgot the cached page.

To run a command on a schedule, register it from the package's service provider with `callAfterResolving(Schedule::class, …)`; see [Adding Jobs and Scheduled Commands in a Package](../advanced/queue-jobs-scheduling.md#adding-jobs-and-scheduled-commands-in-a-package).

## Test the Package

A package keeps its Pest tests in its own `tests` folder, and the application registers them in `composer.json`, `tests/Pest.php` and `phpunit.xml`. [Writing Tests for a Package](../advanced/testing-with-pest.md#writing-tests-for-a-package) explains each registration; for this package they are:

| Registration | Value |
|---|---|
| Test case | `Webkul\Faq\Tests\FaqTestCase` in `packages/Webkul/Faq/tests/FaqTestCase.php` |
| `autoload-dev.psr-4` in `composer.json` | `"Webkul\\Faq\\Tests\\": "packages/Webkul/Faq/tests"` |
| `tests/Pest.php` | `use Webkul\Faq\Tests\FaqTestCase;` with the other imports, and `uses(FaqTestCase::class)->in('../packages/Webkul/Faq/tests');` with the other bindings |
| `phpunit.xml` | A `Faq Feature Test` suite for `packages/Webkul/Faq/tests/Feature` |

**File:** `packages/Webkul/Faq/tests/FaqTestCase.php`

```php
<?php

namespace Webkul\Faq\Tests;

use Tests\TestCase;
use Webkul\Admin\Tests\Concerns\AdminTestBench;

class FaqTestCase extends TestCase
{
    use AdminTestBench;
}
```

**File:** `packages/Webkul/Faq/tests/Feature/FaqTest.php`

```php
<?php

use Webkul\Faq\Repositories\FaqRepository;

use function Pest\Laravel\get;
use function Pest\Laravel\post;

it('shows the FAQ listing to an admin', function () {
    $this->loginAsAdmin();

    get(route('admin.faq.index'))
        ->assertOk()
        ->assertSeeText(trans('faq::app.admin.index.title'));
});

it('shows the FAQ listing to a role with the faq permission', function () {
    $this->loginAsAdminWithPermissions(['faq']);

    get(route('admin.faq.index'))
        ->assertOk();
});

it('refuses the FAQ listing to a role without the faq permission', function () {
    $this->loginAsAdminWithPermissions(['dashboard']);

    get(route('admin.faq.index'))
        ->assertUnauthorized();
});

it('stores a question', function () {
    $this->loginAsAdmin();

    post(route('admin.faq.store'), [
        'channel_id' => core()->getDefaultChannel()->id,
        'question' => 'Do you ship abroad?',
        'answer' => 'Yes, to most countries.',
        'sort_order' => 1,
        'status' => 1,
    ])->assertRedirect(route('admin.faq.index'));

    $this->assertDatabaseHas('faqs', [
        'question' => 'Do you ship abroad?',
        'status' => true,
    ]);
});

it('lists an active question on the storefront', function () {
    $this->setConfig('faq.settings.general.enabled', 1);

    app(FaqRepository::class)->create([
        'channel_id' => core()->getCurrentChannel()->id,
        'question' => 'Can I change my order?',
        'answer' => 'Yes, until it ships.',
        'sort_order' => 1,
        'status' => true,
    ]);

    get(route('shop.faq.index'))
        ->assertOk()
        ->assertSeeText('Can I change my order?');
});

it('hides the storefront page when it is switched off', function () {
    $this->setConfig('faq.settings.general.enabled', 0);

    get(route('shop.faq.index'))
        ->assertNotFound();
});

it('summarises the active questions per channel', function () {
    $this->artisan('faq:summary')
        ->assertSuccessful();
});
```

- **`loginAsAdmin()`** signs in an admin whose role has every permission; **`loginAsAdminWithPermissions()`** signs in one whose custom role holds only the given keys, which is how you prove the ACL entry works.
- **`setConfig()`**, from `Webkul\Core\Tests\Concerns\ConfiguresSettings`, which `Tests\TestCase` already uses, saves a setting for the channel and locale the test runs in, so the storefront tests don't depend on the store's configuration.

Regenerate the autoloader after adding the `autoload-dev` entry, migrate, then run the suite:

```bash
composer dump-autoload

php artisan migrate

vendor/bin/pest --testsuite="Faq Feature Test"
```

Every test passes. The tests run against the database in `.env`: `Tests\TestCase` rolls each test back but never runs migrations, so the `faqs` table must exist first. Run them on a development store, never on a live one.

## Next Step

The FAQ package is complete, and it uses the extension points most packages need. Next, build a package that plugs into checkout.

**Continue to:** [Shipping Method Development](../shipping-method-development/getting-started.md)

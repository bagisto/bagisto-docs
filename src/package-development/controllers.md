# Controllers

On this page you replace the route closures with controllers: a form request that validates the FAQ form, an admin controller that creates, edits and deletes questions, and a storefront controller that lists them. A package's controllers live in `src/Http/Controllers`, split into `Admin` and `Shop` folders like core's.

<a id="base-controller"></a>

## The Base Controllers

| Base class | For | Provides |
|---|---|---|
| `Webkul\Admin\Http\Controllers\Controller` | Admin controllers | Laravel's `AuthorizesRequests`, `DispatchesJobs` and `ValidatesRequests` traits, and `redirectToLogin()` |
| `Webkul\Shop\Http\Controllers\Controller` | Storefront controllers | `DispatchesJobs` and `ValidatesRequests` |

A package's admin and storefront controllers extend these two, so the package needs no base controller of its own.

## Validate with a Form Request

**File:** `packages/Webkul/Faq/src/Http/Requests/FaqRequest.php`

```php
<?php

namespace Webkul\Faq\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FaqRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'channel_id' => ['required', 'integer', 'exists:channels,id'],
            'question' => ['required', 'string', 'max:255'],
            'answer' => ['required', 'string'],
            'sort_order' => ['required', 'integer', 'min:0'],
            'status' => ['boolean'],
        ];
    }

    /**
     * Treat an unchecked status switch as inactive.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'status' => $this->boolean('status'),
        ]);
    }
}
```

- **`authorize()` returns `true`** because the route's `admin` middleware has already checked the admin's permission against the ACL. A form request whose `authorize()` returns `false` refuses every request with a `403`.
- **`prepareForValidation()`** turns the status switch into a boolean before the rules run. An unchecked switch sends nothing, and without this step the question would take the column's default and stay published.

<a id="creating-controllers"></a>
<a id="admin-controller"></a>

## The Admin Controller

**File:** `packages/Webkul/Faq/src/Http/Controllers/Admin/FaqController.php`

```php
<?php

namespace Webkul\Faq\Http\Controllers\Admin;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Event;
use Illuminate\View\View;
use Webkul\Admin\Http\Controllers\Controller;
use Webkul\Faq\Http\Requests\FaqRequest;
use Webkul\Faq\Repositories\FaqRepository;

class FaqController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(protected FaqRepository $faqRepository) {}

    /**
     * Show the FAQ listing page.
     */
    public function index(): View
    {
        return view('faq::admin.index');
    }

    /**
     * Show the form for creating a question.
     */
    public function create(): View
    {
        return view('faq::admin.create');
    }

    /**
     * Store a new question.
     */
    public function store(FaqRequest $request): RedirectResponse
    {
        Event::dispatch('faq.create.before');

        $faq = $this->faqRepository->create($request->validated());

        Event::dispatch('faq.create.after', $faq);

        session()->flash('success', trans('faq::app.admin.create-success'));

        return redirect()->route('admin.faq.index');
    }

    /**
     * Show the form for editing a question.
     */
    public function edit(int $id): View
    {
        $faq = $this->faqRepository->findOrFail($id);

        return view('faq::admin.edit', compact('faq'));
    }

    /**
     * Update a question.
     */
    public function update(FaqRequest $request, int $id): RedirectResponse
    {
        Event::dispatch('faq.update.before', $id);

        $faq = $this->faqRepository->update($request->validated(), $id);

        Event::dispatch('faq.update.after', $faq);

        session()->flash('success', trans('faq::app.admin.update-success'));

        return redirect()->route('admin.faq.index');
    }

    /**
     * Delete a question.
     */
    public function destroy(int $id): JsonResponse
    {
        $this->faqRepository->findOrFail($id);

        Event::dispatch('faq.delete.before', $id);

        $this->faqRepository->delete($id);

        Event::dispatch('faq.delete.after', $id);

        return new JsonResponse([
            'message' => trans('faq::app.admin.delete-success'),
        ]);
    }
}
```

| Action | Returns | Why |
|---|---|---|
| `index()`, `create()`, `edit()` | A view | [Views](./views.md) creates the templates |
| `store()`, `update()` | A redirect, with a `success` message flashed to the session | The admin layout shows `success`, `warning`, `error` and `info` messages it finds in the session |
| `destroy()` | JSON with a `message` | The DataGrid's delete action calls it with AJAX and shows `message` |

A failed validation redirects back with the errors, which `<x-admin::form>` shows beside each field, and a missing id ends in a `404` from `findOrFail()` or the repository's `update()`. The strings passed to `trans()` come from the language file that [Localization](./localization.md) creates.

### Events Around Every Write

Each write is wrapped in a `before` and an `after` event, as core controllers do. The `before` event receives the id, or nothing on create, and the `after` event receives the model, or the id once the row is gone. The FAQ has a single entity, so its names leave the entity out, as core's `customer.create.after` does. Other packages listen to these names without touching your controller: [Firing Events from Your Package](../advanced/event-listeners.md#firing-events-from-your-package) covers the convention, and [Events, Commands and Tests](./events-commands-and-tests.md) adds a listener.

<a id="shop-controller"></a>

## The Storefront Controller

**File:** `packages/Webkul/Faq/src/Http/Controllers/Shop/FaqController.php`

```php
<?php

namespace Webkul\Faq\Http\Controllers\Shop;

use Illuminate\View\View;
use Webkul\Faq\Repositories\FaqRepository;
use Webkul\Shop\Http\Controllers\Controller;

class FaqController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(protected FaqRepository $faqRepository) {}

    /**
     * Show the active questions of the current channel.
     */
    public function index(): View
    {
        return view('faq::shop.index', [
            'faqs' => $this->faqRepository->getActiveForChannel(core()->getCurrentChannel()->id),
            'title' => trans('faq::app.shop.index.title'),
        ]);
    }
}
```

`core()->getCurrentChannel()` is the channel serving the request, so each storefront shows only its own questions.

<a id="updating-routes-to-use-controllers"></a>

## Point the Routes at the Controllers

Replace the closures from [Routes](./routes.md). The admin file gains the create, edit and delete routes:

**File:** `packages/Webkul/Faq/src/Routes/admin-routes.php`

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Core\Http\Middleware\NoCacheMiddleware;
use Webkul\Faq\Http\Controllers\Admin\FaqController;

Route::group([
    'middleware' => ['web', 'admin', NoCacheMiddleware::class],
    'prefix' => config('app.admin_url'),
], function () {
    Route::controller(FaqController::class)->prefix('faq')->group(function () {
        Route::get('', 'index')->name('admin.faq.index');

        Route::get('create', 'create')->name('admin.faq.create');

        Route::post('create', 'store')->name('admin.faq.store');

        Route::get('edit/{id}', 'edit')->name('admin.faq.edit');

        Route::put('edit/{id}', 'update')->name('admin.faq.update');

        Route::delete('edit/{id}', 'destroy')->name('admin.faq.delete');
    });
});
```

**File:** `packages/Webkul/Faq/src/Routes/shop-routes.php`

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Core\Http\Middleware\PreventRequestsDuringMaintenance;
use Webkul\Faq\Http\Controllers\Shop\FaqController;

Route::group([
    'middleware' => ['web', 'shop', PreventRequestsDuringMaintenance::class],
], function () {
    Route::get('faq', [FaqController::class, 'index'])->name('shop.faq.index');
});
```

The edit, update and delete routes share the path `edit/{id}` and differ by HTTP method, as core's CMS routes do. Like core, the controller takes the id and resolves it through the repository rather than using route model binding.

<a id="testing-your-controllers"></a>

## Test It

1. List the routes. Seven are listed, six admin and one storefront, each with its controller action:

   ```bash
   php artisan route:list --name=faq
   ```

2. Open `/admin/faq`. Until [Views](./views.md) creates the templates, it fails with an error about the missing `faq` view namespace.

## Things to Watch

- **Keep validation in the form request.** Older core controllers call `$this->validate()` inline; a form request keeps the rules in one class a reviewer can read, and mass actions validate too.
- **Scope storefront data to its owner.** The FAQ is public, but a storefront controller that shows customer data filters by `auth()->guard('customer')->id()` in the repository, never by an id from the request alone.
- **Fire both events of a pair.** A listener that needs the row before it changes, such as a cache that must forget a page before the row is deleted, can only use the `before` event.
- **Change a core controller by binding a subclass.** Laravel resolves a route's controller from the container, so binding `Webkul\Shop\Http\Controllers\SearchController` to your subclass in your provider's `register()` changes every route that names it, without editing core.

## Next Step

The controllers render views that don't exist yet. Next, create them.

**Continue to:** [Views](./views.md)

# Views

On this page you create the admin listing header, the create and edit forms, and the storefront FAQ page. A package registers its Blade views under a namespace, so `view('faq::admin.index')` renders `src/Resources/views/admin/index.blade.php`. The pages wrap themselves in the core layouts, `<x-admin::layouts>` and `<x-shop::layouts>`, and reuse the components the Admin and Shop packages register globally.

<a id="registering-views-with-service-provider"></a>

## Register the Views

Add `loadViewsFrom()` to the provider's `boot()` method. Its second argument is the namespace:

**File:** `packages/Webkul/Faq/src/Providers/FaqServiceProvider.php`

```php{25}
<?php

namespace Webkul\Faq\Providers;

use Illuminate\Support\ServiceProvider;

class FaqServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void {}

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');

        $this->loadRoutesFrom(__DIR__.'/../Routes/admin-routes.php');

        $this->loadRoutesFrom(__DIR__.'/../Routes/shop-routes.php');

        $this->loadViewsFrom(__DIR__.'/../Resources/views', 'faq');
    }
}
```

## The Components You Can Use

The Admin package registers the components in `packages/Webkul/Admin/src/Resources/views/components` under `x-admin::`, and the Shop package registers its own under `x-shop::`. The ones an admin page uses most:

| Component | For |
|---|---|
| `<x-admin::layouts>` | The admin page shell with the sidebar, the header and flash messages; `<x-slot:title>` sets the browser title |
| `<x-admin::form>` | A form with the CSRF field and client-side validation; `method="PUT"` adds the method field |
| `<x-admin::form.control-group>` with `.label`, `.control` and `.error` | One labelled field. `.control` takes a `type` of `text`, `email`, `password`, `number`, `price`, `textarea`, `date`, `datetime`, `time`, `select`, `multiselect`, `checkbox`, `radio`, `switch`, `color`, `file`, `image`, `hidden` or `custom` |
| `<x-admin::datagrid>`, `<x-admin::datagrid.export>` | A listing and its export button; see [DataGrid](./datagrid.md) |
| `<x-admin::modal>`, `<x-admin::drawer>`, `<x-admin::accordion>`, `<x-admin::tabs>` | Containers |

`components/example.blade.php` in the Admin package shows them in use.

## The Admin Pages

<a id="creating-admin-listing-view"></a>
<a id="admin-index-view"></a>

### The Listing Page

**File:** `packages/Webkul/Faq/src/Resources/views/admin/index.blade.php`

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('faq::app.admin.index.title')
    </x-slot>

    <div class="flex items-center justify-between gap-4 max-sm:flex-wrap">
        <p class="text-xl font-bold text-gray-800 dark:text-white">
            @lang('faq::app.admin.index.title')
        </p>

        <div class="flex items-center gap-x-2.5">
            @if (bouncer()->hasPermission('faq.create'))
                <a
                    href="{{ route('admin.faq.create') }}"
                    class="primary-button"
                >
                    @lang('faq::app.admin.index.create-btn')
                </a>
            @endif
        </div>
    </div>

    {!! view_render_event('bagisto.admin.faq.list.before') !!}

    {!! view_render_event('bagisto.admin.faq.list.after') !!}
</x-admin::layouts>
```

For now the page shows its title and a create button, which `bouncer()->hasPermission()` hides from roles without the `faq.create` permission that [Access Control List](./access-control-list.md) defines. [DataGrid](./datagrid.md) later puts the listing between the two render events, which let other packages add markup to the page; see [View Render Events](../advanced/view-render-events.md). Put a `before` and an `after` event around each block another package may want to extend, named after the view, as these pages do.

### The Form Fields

The create and edit pages show the same fields, so the fields live in one partial:

**File:** `packages/Webkul/Faq/src/Resources/views/admin/form-fields.blade.php`

```blade
<div class="box-shadow mt-3.5 rounded-sm bg-white p-4 dark:bg-gray-900">
    <p class="mb-4 text-base font-semibold text-gray-800 dark:text-white">
        @lang('faq::app.admin.form.general')
    </p>

    <x-admin::form.control-group>
        <x-admin::form.control-group.label class="required">
            @lang('faq::app.admin.form.question')
        </x-admin::form.control-group.label>

        <x-admin::form.control-group.control
            type="text"
            name="question"
            rules="required|max:255"
            value="{{ old('question', $faq?->question) }}"
            :label="trans('faq::app.admin.form.question')"
        />

        <x-admin::form.control-group.error control-name="question" />
    </x-admin::form.control-group>

    <x-admin::form.control-group>
        <x-admin::form.control-group.label class="required">
            @lang('faq::app.admin.form.answer')
        </x-admin::form.control-group.label>

        <x-admin::form.control-group.control
            type="textarea"
            name="answer"
            rules="required"
            value="{{ old('answer', $faq?->answer) }}"
            :label="trans('faq::app.admin.form.answer')"
        />

        <x-admin::form.control-group.error control-name="answer" />
    </x-admin::form.control-group>

    <x-admin::form.control-group>
        <x-admin::form.control-group.label class="required">
            @lang('faq::app.admin.form.channel')
        </x-admin::form.control-group.label>

        <x-admin::form.control-group.control
            type="select"
            name="channel_id"
            rules="required"
            value="{{ old('channel_id', $faq?->channel_id ?? core()->getDefaultChannel()->id) }}"
            :label="trans('faq::app.admin.form.channel')"
        >
            @foreach (core()->getAllChannels() as $channel)
                <option value="{{ $channel->id }}">
                    {{ $channel->name }}
                </option>
            @endforeach
        </x-admin::form.control-group.control>

        <x-admin::form.control-group.error control-name="channel_id" />
    </x-admin::form.control-group>

    <x-admin::form.control-group>
        <x-admin::form.control-group.label class="required">
            @lang('faq::app.admin.form.sort-order')
        </x-admin::form.control-group.label>

        <x-admin::form.control-group.control
            type="number"
            name="sort_order"
            rules="required|min_value:0"
            value="{{ old('sort_order', $faq?->sort_order ?? 0) }}"
            :label="trans('faq::app.admin.form.sort-order')"
        />

        <x-admin::form.control-group.error control-name="sort_order" />
    </x-admin::form.control-group>

    <x-admin::form.control-group>
        <x-admin::form.control-group.label>
            @lang('faq::app.admin.form.status')
        </x-admin::form.control-group.label>

        <x-admin::form.control-group.control
            type="switch"
            name="status"
            value="1"
            :label="trans('faq::app.admin.form.status')"
            :checked="(bool) old('status', $faq?->status ?? true)"
        />
    </x-admin::form.control-group>
</div>
```

- **`rules`** validates in the browser with VeeValidate's rule names, such as `min_value` for numbers; `FaqRequest` validates again on the server.
- **`old()`** refills a field after a failed validation and falls back to the saved value. On the create page the partial receives `null`, so `$faq?->question` reads nothing.
- **The switch** sends `status=1` when on and nothing when off, which is why `FaqRequest` merges a boolean before validating.

### The Create Page

**File:** `packages/Webkul/Faq/src/Resources/views/admin/create.blade.php`

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('faq::app.admin.create.title')
    </x-slot>

    {!! view_render_event('bagisto.admin.faq.create.before') !!}

    <x-admin::form :action="route('admin.faq.store')">
        <div class="flex items-center justify-between gap-4 max-sm:flex-wrap">
            <p class="text-xl font-bold text-gray-800 dark:text-white">
                @lang('faq::app.admin.create.title')
            </p>

            <div class="flex items-center gap-x-2.5">
                <a
                    href="{{ route('admin.faq.index') }}"
                    class="transparent-button hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
                >
                    @lang('faq::app.admin.form.back-btn')
                </a>

                <button
                    type="submit"
                    class="primary-button"
                >
                    @lang('faq::app.admin.form.save-btn')
                </button>
            </div>
        </div>

        @include('faq::admin.form-fields', ['faq' => null])
    </x-admin::form>

    {!! view_render_event('bagisto.admin.faq.create.after') !!}
</x-admin::layouts>
```

### The Edit Page

**File:** `packages/Webkul/Faq/src/Resources/views/admin/edit.blade.php`

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('faq::app.admin.edit.title')
    </x-slot>

    {!! view_render_event('bagisto.admin.faq.edit.before', ['faq' => $faq]) !!}

    <x-admin::form
        :action="route('admin.faq.update', $faq->id)"
        method="PUT"
    >
        <div class="flex items-center justify-between gap-4 max-sm:flex-wrap">
            <p class="text-xl font-bold text-gray-800 dark:text-white">
                @lang('faq::app.admin.edit.title')
            </p>

            <div class="flex items-center gap-x-2.5">
                <a
                    href="{{ route('admin.faq.index') }}"
                    class="transparent-button hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
                >
                    @lang('faq::app.admin.form.back-btn')
                </a>

                <button
                    type="submit"
                    class="primary-button"
                >
                    @lang('faq::app.admin.form.save-btn')
                </button>
            </div>
        </div>

        @include('faq::admin.form-fields', ['faq' => $faq])
    </x-admin::form>

    {!! view_render_event('bagisto.admin.faq.edit.after', ['faq' => $faq]) !!}
</x-admin::layouts>
```

<a id="creating-shop-views"></a>

## The Storefront Page

**File:** `packages/Webkul/Faq/src/Resources/views/shop/index.blade.php`

```blade
<x-shop::layouts>
    <x-slot:title>
        {{ $title }}
    </x-slot>

    {!! view_render_event('bagisto.shop.faq.index.before') !!}

    <div class="container mt-8 px-15 max-lg:px-8">
        <h1 class="text-3xl font-medium max-sm:text-xl">
            {{ $title }}
        </h1>

        @forelse ($faqs as $faq)
            <details class="mt-6 border-b border-zinc-200 pb-5">
                <summary class="cursor-pointer text-lg font-medium">
                    {{ $faq->question }}
                </summary>

                <p class="mt-3 text-zinc-500">
                    {!! nl2br(e($faq->answer)) !!}
                </p>
            </details>
        @empty
            <p class="mt-6 text-zinc-500">
                @lang('faq::app.shop.index.empty')
            </p>
        @endforelse
    </div>

    {!! view_render_event('bagisto.shop.faq.index.after') !!}
</x-shop::layouts>
```

The answer keeps its line breaks through `{!! nl2br(e($faq->answer)) !!}`, which escapes the text with `e()` before adding `<br>` tags. Never print stored text through `{!! !!}` without escaping it first.

<a id="testing-your-views"></a>

## Test It

Clear the cached views and configuration first:

```bash
php artisan optimize:clear
```

1. Open `/admin/faq/create`, fill in the form and save. You return to `/admin/faq` with a success message.
2. Open `/faq` on the storefront. The current channel's active questions are listed in their sort order.

Until [Localization](./localization.md) registers the language file, every label and message shows its key, `faq::app.admin.create.title` for example.

<a id="blade-components-render-events-and-themes"></a>

## Things to Watch

- **A theme can replace your views.** While a theme is active, Bagisto's view finder looks in the theme's `views_path` before your package, for every namespace, so a store overrides `faq::shop.index` with `resources/themes/<theme>/views/shop/index.blade.php`. See [How Views Are Resolved](../theme-development/creating-store-theme.md#how-views-are-resolved).
- **A Tailwind class used only in your views has no effect.** The admin and storefront stylesheets are compiled from the Admin and Shop packages' own files, so use classes the core views already use, as the samples on this page do. For styles or scripts of your own, register a named Vite build in `config/bagisto-vite.php` and load it with `@bagistoVite([...], 'faq')`; see [Loading Assets Outside the Stock Layout](../theme-development/vite-powered-theme-assets.md#loading-assets-outside-the-stock-layout).
- **`loadViewsFrom()` doesn't register `<x-…>` components.** To ship components of your own, also call `Blade::anonymousComponentPath(__DIR__.'/../Resources/views/components', 'faq')` in `boot()`, with `Illuminate\Support\Facades\Blade` imported, as the Admin and Shop packages do; `components/answer.blade.php` then renders as `<x-faq::answer>`.
- **`:` passes a PHP value, `::` passes a Vue expression.** `:label="trans('…')"` evaluates PHP; `::value="faq.question"` reaches the browser as `:value` for Vue, and works only on `<x-…>` component tags.
- **Every string goes through a key.** Hard-coded text can't be translated and fails Bagisto's translation checks.

## Next Step

The pages render, but every label is a key. Next, give the keys their text.

**Continue to:** [Localization](./localization.md)

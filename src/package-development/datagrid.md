# DataGrid

On this page you build the FAQ listing at `/admin/faq`: search, filters, sorting, edit and delete buttons, bulk delete and status changes, and export. A DataGrid is one class extending `Webkul\DataGrid\DataGrid` that supplies a query and describes its columns and actions. The controller's `index()` returns the grid's data for an AJAX request, and `<x-admin::datagrid>` in the view loads it from that same URL.

<a id="creating-your-first-datagrid"></a>
<a id="creating-the-datagrid-class"></a>

## Create the DataGrid Class

**File:** `packages/Webkul/Faq/src/DataGrids/Admin/FaqDataGrid.php`

```php
<?php

namespace Webkul\Faq\DataGrids\Admin;

use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use Webkul\DataGrid\DataGrid;

class FaqDataGrid extends DataGrid
{
    /**
     * Default sort column of the grid.
     *
     * @var string
     */
    protected $sortColumn = 'sort_order';

    /**
     * Default sort order of the grid.
     *
     * @var string
     */
    protected $sortOrder = 'asc';

    /**
     * Prepare the query builder.
     */
    public function prepareQueryBuilder(): Builder
    {
        $queryBuilder = DB::table('faqs')
            ->leftJoin('channels', 'faqs.channel_id', '=', 'channels.id')
            ->select(
                'faqs.id',
                'faqs.question',
                'faqs.sort_order',
                'faqs.status',
                'channels.code as channel',
            );

        $this->addFilter('id', 'faqs.id');
        $this->addFilter('question', 'faqs.question');
        $this->addFilter('channel', 'channels.code');
        $this->addFilter('sort_order', 'faqs.sort_order');
        $this->addFilter('status', 'faqs.status');

        return $queryBuilder;
    }

    /**
     * Prepare the columns.
     */
    public function prepareColumns(): void
    {
        $this->addColumn([
            'index' => 'id',
            'label' => trans('faq::app.admin.index.datagrid.id'),
            'type' => 'integer',
            'filterable' => true,
            'sortable' => true,
        ]);

        $this->addColumn([
            'index' => 'question',
            'label' => trans('faq::app.admin.index.datagrid.question'),
            'type' => 'string',
            'searchable' => true,
            'filterable' => true,
            'sortable' => true,
        ]);

        $this->addColumn([
            'index' => 'channel',
            'label' => trans('faq::app.admin.index.datagrid.channel'),
            'type' => 'string',
            'filterable' => true,
            'filterable_type' => 'dropdown',
            'filterable_options' => collect(core()->getAllChannels())
                ->map(fn ($channel) => ['label' => $channel->name, 'value' => $channel->code])
                ->values()
                ->toArray(),
            'sortable' => true,
        ]);

        $this->addColumn([
            'index' => 'sort_order',
            'label' => trans('faq::app.admin.index.datagrid.sort-order'),
            'type' => 'integer',
            'filterable' => true,
            'sortable' => true,
        ]);

        $this->addColumn([
            'index' => 'status',
            'label' => trans('faq::app.admin.index.datagrid.status'),
            'type' => 'boolean',
            'filterable' => true,
            'filterable_options' => [
                [
                    'label' => trans('faq::app.admin.index.datagrid.active'),
                    'value' => 1,
                ],
                [
                    'label' => trans('faq::app.admin.index.datagrid.inactive'),
                    'value' => 0,
                ],
            ],
            'sortable' => true,
            'closure' => function ($row) {
                if ($row->status) {
                    return '<span class="label-active">'.trans('faq::app.admin.index.datagrid.active').'</span>';
                }

                return '<span class="label-info">'.trans('faq::app.admin.index.datagrid.inactive').'</span>';
            },
        ]);
    }

    /**
     * Prepare the row actions.
     */
    public function prepareActions(): void
    {
        if (bouncer()->hasPermission('faq.edit')) {
            $this->addAction([
                'index' => 'edit',
                'icon' => 'icon-edit',
                'title' => trans('faq::app.admin.index.datagrid.edit'),
                'method' => 'GET',
                'url' => fn ($row) => route('admin.faq.edit', $row->id),
            ]);
        }

        if (bouncer()->hasPermission('faq.delete')) {
            $this->addAction([
                'index' => 'delete',
                'icon' => 'icon-delete',
                'title' => trans('faq::app.admin.index.datagrid.delete'),
                'method' => 'DELETE',
                'url' => fn ($row) => route('admin.faq.delete', $row->id),
            ]);
        }
    }

    /**
     * Prepare the mass actions.
     */
    public function prepareMassActions(): void
    {
        if (bouncer()->hasPermission('faq.delete')) {
            $this->addMassAction([
                'icon' => 'icon-delete',
                'title' => trans('faq::app.admin.index.datagrid.delete'),
                'method' => 'POST',
                'url' => route('admin.faq.mass_delete'),
            ]);
        }

        if (bouncer()->hasPermission('faq.edit')) {
            $this->addMassAction([
                'title' => trans('faq::app.admin.index.datagrid.update-status'),
                'method' => 'POST',
                'url' => route('admin.faq.mass_update'),
                'options' => [
                    [
                        'label' => trans('faq::app.admin.index.datagrid.active'),
                        'value' => 1,
                    ],
                    [
                        'label' => trans('faq::app.admin.index.datagrid.inactive'),
                        'value' => 0,
                    ],
                ],
            ]);
        }
    }
}
```

<a id="understanding-datagrid-methods"></a>
<a id="preparequerybuilder"></a>

### The Query

`prepareQueryBuilder()` returns a query builder, never results: the grid adds the filters, sorting and paging to it, and export runs it again without paging. It is the one place in Bagisto where `DB::` is expected instead of a repository.

`addFilter()` maps a column index to the SQL the grid filters and sorts on. The mapping is required for an alias (`channel` stands for `channels.code`) and for a column both joined tables have (`id`), and a missing one fails with an SQL error only when someone filters or sorts on that column. `$sortColumn` and `$sortOrder` set the order before the admin clicks a heading.

<a id="column-configuration-options"></a>
<a id="preparecolumns"></a>

### The Columns

| Key | Default | Meaning |
|---|---|---|
| `index` | Required | The column's name in the select list |
| `label` | Required | The heading, always through `trans()` |
| `type` | Required | `string`, `integer`, `decimal`, `boolean`, `date`, `datetime` or `aggregate` |
| `searchable` | `false` | Include the column in the toolbar's search |
| `filterable` | `false` | Give the column a filter |
| `filterable_type` | `null` | `dropdown`, `date_range` or `datetime_range` |
| `filterable_options` | `[]` | `label` and `value` pairs for a dropdown, or a closure that returns them |
| `allow_multiple_values` | `true` | Let a filter take several values; always off for `integer` and `decimal` |
| `sortable` | `false` | Make the heading sort the grid |
| `exportable` | `true` | Include the column in exports |
| `visibility` | `true` | Show the column before the admin changes the column selection |
| `closure` | `null` | A function that receives the row and returns what the cell shows |

A missing `index`, `label` or `type` throws `InvalidColumnException`, and an unknown `type` throws `InvalidColumnTypeException`. Each type shapes its filter:

| Type | Filter |
|---|---|
| `string`, `aggregate` | Text, matched with `LIKE`, or `ILIKE` on PostgreSQL |
| `integer`, `decimal` | A number, an operator and a number (`>= 10`, `< 5`) or a range (`10 - 20`) |
| `boolean` | A dropdown only, with yes and no options when none are given |
| `date`, `datetime` | `date_range` or `datetime_range` only, with presets from today to this year |

A closure runs once per row after the query and changes only what the cell shows: sorting, filtering and export use the raw value. Before any closure runs, the grid strips HTML tags from every string value of the row.

<a id="prepareactions-optional"></a>
<a id="adding-actions"></a>

### Row Actions

Each `addAction()` adds a button to every row:

| Key | Meaning |
|---|---|
| `title` | The tooltip, through `trans()`; required |
| `method` | `GET` opens `url`. `POST`, `PUT`, `PATCH` and `DELETE` ask for confirmation, send the request with AJAX and show the `message` of the JSON response; required |
| `url` | A closure that receives the row, as the query selected it, and returns the URL; required. Select every column the closure reads, as `faqs.id` is here |
| `icon` | An admin icon class such as `icon-edit` or `icon-delete` |
| `index` | A short name for the action |
| `condition` | A closure that receives the row; the action is left off rows for which it returns `false` |

<a id="preparemassactions-optional"></a>
<a id="adding-mass-actions"></a>

### Mass Actions

Each `addMassAction()` adds an entry to the actions menu that appears once rows are ticked. The grid sends `method` to `url` with the selected ids as `indices`. A mass action with `options` shows them as a second choice and sends the chosen `value` as well.

Every action and mass action is wrapped in `bouncer()->hasPermission()`, so a role that may not edit or delete never sees the button.

<a id="integrating-datagrid-with-controller"></a>

## Serve the Grid from the Controller

Add the AJAX branch to `index()` and two methods for the mass actions, `massDestroy()` and `massUpdate()`. The methods elided in the middle are unchanged from [Controllers](./controllers.md):

**File:** `packages/Webkul/Faq/src/Http/Controllers/Admin/FaqController.php`

```php
<?php

namespace Webkul\Faq\Http\Controllers\Admin;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Event;
use Illuminate\View\View;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Webkul\Admin\Http\Controllers\Controller;
use Webkul\Admin\Http\Requests\MassDestroyRequest;
use Webkul\Admin\Http\Requests\MassUpdateRequest;
use Webkul\Faq\DataGrids\Admin\FaqDataGrid;
use Webkul\Faq\Http\Requests\FaqRequest;
use Webkul\Faq\Repositories\FaqRepository;

class FaqController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(protected FaqRepository $faqRepository) {}

    /**
     * Show the FAQ listing page, or the grid's data for an AJAX request.
     */
    public function index(): View|JsonResponse|BinaryFileResponse
    {
        if (request()->ajax()) {
            return datagrid(FaqDataGrid::class)->process();
        }

        return view('faq::admin.index');
    }

    // ...

    /**
     * Delete the selected questions.
     */
    public function massDestroy(MassDestroyRequest $massDestroyRequest): JsonResponse
    {
        $faqs = $this->faqRepository->findWhereIn('id', $massDestroyRequest->input('indices'));

        foreach ($faqs as $faq) {
            Event::dispatch('faq.delete.before', $faq->id);

            $this->faqRepository->delete($faq->id);

            Event::dispatch('faq.delete.after', $faq->id);
        }

        return new JsonResponse([
            'message' => trans('faq::app.admin.index.datagrid.mass-delete-success'),
        ]);
    }

    /**
     * Change the status of the selected questions.
     */
    public function massUpdate(MassUpdateRequest $massUpdateRequest): JsonResponse
    {
        $faqs = $this->faqRepository->findWhereIn('id', $massUpdateRequest->input('indices'));

        foreach ($faqs as $faq) {
            Event::dispatch('faq.update.before', $faq->id);

            $faq = $this->faqRepository->update([
                'status' => $massUpdateRequest->boolean('value'),
            ], $faq->id);

            Event::dispatch('faq.update.after', $faq);
        }

        return new JsonResponse([
            'message' => trans('faq::app.admin.index.datagrid.mass-update-success'),
        ]);
    }
}
```

- **`datagrid()`** resolves the class from the container, so a grid can take repositories in its constructor, and throws `InvalidDataGridException` for a class that doesn't extend `Webkul\DataGrid\DataGrid`.
- **`process()`** returns the grid as JSON, or the export file when the request asks for one, which is why `index()` declares three return types.
- **`MassDestroyRequest` and `MassUpdateRequest`**, from the Admin package, validate `indices` as an array of integers; `MassUpdateRequest` also requires `value`.
- **Both loops fire the single-row events**, so a listener sees a bulk delete like any other delete.

Add the two routes inside the `faq` group:

**File:** `packages/Webkul/Faq/src/Routes/admin-routes.php`

```php{24,26}
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

        Route::post('mass-delete', 'massDestroy')->name('admin.faq.mass_delete');

        Route::post('mass-update', 'massUpdate')->name('admin.faq.mass_update');
    });
});
```

<a id="creating-datagrid-views"></a>

## Show the Grid

Add the export button to the header and the grid between the render events:

**File:** `packages/Webkul/Faq/src/Resources/views/admin/index.blade.php`

```blade{12,27}
<x-admin::layouts>
    <x-slot:title>
        @lang('faq::app.admin.index.title')
    </x-slot>

    <div class="flex items-center justify-between gap-4 max-sm:flex-wrap">
        <p class="text-xl font-bold text-gray-800 dark:text-white">
            @lang('faq::app.admin.index.title')
        </p>

        <div class="flex items-center gap-x-2.5">
            <x-admin::datagrid.export :src="route('admin.faq.index')" />

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

    <x-admin::datagrid :src="route('admin.faq.index')" />

    {!! view_render_event('bagisto.admin.faq.list.after') !!}
</x-admin::layouts>
```

The export button asks the same URL for the grid's current filters and sorting as a CSV, XLS or XLSX file, without paging.

## Add the Labels

Add a `datagrid` group under `admin.index` in the language file, and the same keys in every other locale:

**File:** `packages/Webkul/Faq/src/Resources/lang/en/app.php`

```php
<?php

return [
    'admin' => [
        'index' => [
            'title' => 'FAQ',
            'create-btn' => 'Create FAQ',

            'datagrid' => [
                'id' => 'ID',
                'question' => 'Question',
                'channel' => 'Channel',
                'sort-order' => 'Sort Order',
                'status' => 'Status',
                'active' => 'Active',
                'inactive' => 'Inactive',
                'edit' => 'Edit',
                'delete' => 'Delete',
                'update-status' => 'Update Status',
                'mass-delete-success' => 'Selected questions deleted successfully.',
                'mass-update-success' => 'Selected questions updated successfully.',
            ],
        ],

        // ...
    ],

    // ...
];
```

<a id="testing-your-datagrid"></a>

## Test It

Clear the cached views first:

```bash
php artisan optimize:clear
```

1. Open `/admin/faq`. The questions appear in their sort order, with the search box, a filter for every column, and edit and delete buttons on each row.
2. Tick two rows, choose **Update Status** and a status from the actions menu, and confirm. The grid reloads with the new status and shows the success message.
3. Use the export button. The download holds the rows the filters show.

<a id="datagrid-properties"></a>

## Grid Properties

Override a property only when its default is wrong for the grid:

| Property | Default | Meaning |
|---|---|---|
| `$primaryColumn` | `'id'` | The column that identifies a row; the ids sent as `indices` come from it |
| `$sortColumn` | `null` | The initial sort column; `null` sorts by `$primaryColumn` |
| `$sortOrder` | `'desc'` | The initial sort direction |
| `$itemsPerPage` | `10` | Rows per page |
| `$perPageOptions` | `[10, 20, 30, 40, 50]` | The page sizes the admin can choose |

When the identifier is selected under an alias, set `$primaryColumn` to the alias.

## Extending a DataGrid You Do Not Own

Every grid dispatches events named after its class in snake case, `datagrid.<grid>.<stage>`, so a package can add columns, actions or filters to a core grid without editing it. `Webkul\Admin\DataGrids\Settings\ChannelDataGrid` dispatches `datagrid.channel_data_grid.*`, and the FAQ package could add a question count to it from its provider's `boot()` method:

```php
Event::listen('datagrid.channel_data_grid.columns.prepare.after', function ($datagrid) {
    $datagrid->addColumn([
        'index' => 'faq_count',
        'label' => trans('faq::app.admin.channels.datagrid.faq-count'),
        'type' => 'integer',
        'sortable' => true,
    ]);
});

Event::listen('datagrid.channel_data_grid.query_builder.prepare.after', function ($datagrid) {
    $datagrid->getQueryBuilder()->addSelect([
        'faq_count' => DB::table('faqs')
            ->selectRaw('count(*)')
            ->whereColumn('faqs.channel_id', 'channels.id'),
    ]);
});
```

with `Illuminate\Support\Facades\DB` and `Illuminate\Support\Facades\Event` imported, and the label key added to the language file. The column is added while the columns are prepared and its value while the query is, because the grid prepares the query last. The listener adds to the grid's own query builder, the same exception that lets `prepareQueryBuilder()` use `DB::`; anywhere else, read `faqs` through `FaqRepository`.

A grid dispatches its events in this order. Each listener receives the grid. `columns.add.*`, `actions.add.*` and `mass_actions.add.*` listeners also receive the column, action or mass action, and `filters.add.*` listeners receive the column index and the SQL column it maps to.

| Stage | Events |
|---|---|
| Start | `prepare.before` |
| Columns | `columns.prepare.before`; `columns.add.before` and `columns.add.after` for each column; `columns.prepare.after` |
| Actions, mass actions | The same pattern under `actions` and `mass_actions` |
| Query | `query_builder.prepare.before`; `filters.add.before` and `filters.add.after` for each `addFilter()`; `query_builder.prepare.after` |
| Request | `process_request.before`; `process_request.filters.*`; `process_request.sorting.*`; `process_request.paginated.*` or `process_request.export.*`; `process_request.after` |
| End | `prepare.after` |

A listener on `columns.prepare.after`, `actions.prepare.after` or `mass_actions.prepare.after` can also remove what the grid added: filter `getColumns()`, `getActions()` or `getMassActions()` and pass the result through `array_values()` to `setColumns()`, `setActions()` or `setMassActions()`, because the grid sends them to the browser as JSON arrays and a filtered array with gaps in its keys arrives as an object the admin grid can't read. To change more, such as the query or a column's closure, bind a subclass of the core grid in your provider's `register()`, since `datagrid()` resolves the class from the container. Keep the core class's short name, `ChannelDataGrid` here: the event names are built from it, so a subclass with another name silences every listener on `datagrid.channel_data_grid.*`.

## Things to Watch

- **Return the builder.** Calling `get()` or `paginate()` in `prepareQueryBuilder()` breaks paging, filtering and export, which all add to the query you return.
- **Escape what a closure puts in an attribute.** Cells render as HTML. The grid strips tags from row values first but leaves quotes, so a value placed inside an attribute, such as `style="color: '.$row->color.'"`, can break out of it. Wrap such values in `e()`; a closure that combines `trans()` output with fixed markup, like the status badge above, needs nothing.
- **Keep closures cheap.** A closure runs for every row on the page, so a repository call inside one is a query per row. Join or select the value in `prepareQueryBuilder()` instead.
- **Map every route an action calls in `acl.php`.** Actions gated with `bouncer()->hasPermission()` still need the route's ACL entry, with the same permission key.

## Next Step

The listing works. Next, give it an entry in the admin sidebar.

**Continue to:** [Menu](./menu.md)

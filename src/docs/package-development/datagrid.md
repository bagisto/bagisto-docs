# DataGrid

DataGrid is one of the most powerful features in Bagisto for displaying and managing tabular data in admin interfaces. It provides built-in functionality for sorting, filtering, pagination, and mass actions, transforming your raw database records into professional, interactive data tables.

For our RMA package, we'll create a comprehensive DataGrid that displays return requests with full administrative functionality, demonstrating how to build efficient data management interfaces that scale with your business needs.

::: info Learning Objective
This section demonstrates how to create a fully functional DataGrid for your Bagisto package, including data presentation, filtering capabilities, and administrative actions - essential skills for building professional admin interfaces.
:::

## Understanding Bagisto DataGrid Architecture

Bagisto's DataGrid system is built on Laravel's query builder and provides a powerful abstraction layer for creating data tables:

### Core Components
- **Abstract DataGrid Class**: Base functionality that all custom DataGrids extend
- **Query Builder Integration**: Seamless integration with Laravel's database layer  
- **Column Management**: Flexible column definitions with type-specific handling
- **Action System**: Built-in support for row actions and mass operations

### Key Features
- **Automatic Pagination**: Built-in pagination with customizable page sizes
- **Advanced Filtering**: Column-specific filters with multiple data types
- **Sorting Capabilities**: Multi-column sorting with intelligent defaults
- **Export Functionality**: Built-in CSV/Excel export capabilities
- **Mass Actions**: Bulk operations on selected records

### DataGrid Properties

Understanding the core properties helps you customize DataGrid behavior:

| Property          | Functionality                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **`primaryColumn`**    | Specifies the primary identifier column for the data grid, typically set to `'id'` for unique identification of data entries. |
| **`queryBuilder`**     | Manages the database query operations for fetching data based on configured criteria. |
| **`columns`**          | Array defining the columns to be displayed in the data grid. |
| **`sortColumn`**       | Optional. Specifies the default column used for sorting data in the grid.  |
| **`sortOrder`**        | Specifies the default order ('asc' or 'desc') for sorting data in the grid. |
| **`actions`**          | Array containing configurations for actions that can be performed on individual data grid entries. |
| **`massActions`**      | Array defining actions that can be applied to multiple entries simultaneously in the data grid. |
| **`paginator`**        | Stores an instance of `LengthAwarePaginator` for managing pagination of grid data. |
| **`itemsPerPage`**     | Specifies the default number of items to display per page in the data grid.|
| **`perPageOptions`**   | Array of options allowing users to select different numbers of items per page.  |
| **`exportable`**       | Boolean indicating whether the data grid can exported.  |
| **`exportFile`**       | Stores metadata related to exported data if `exportable` is enabled. |

## Creating Your First DataGrid

Let's create a DataGrid for our RMA package that displays return requests in the admin panel. This will demonstrate the complete process from creation to implementation.

### Directory Structure

Create the DataGrid directory structure in your package:

```bash
mkdir -p packages/Webkul/RMA/src/DataGrids/Admin
```

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── DataGrids
                └── Admin
                    └── ReturnRequestDataGrid.php
```

### Creating the DataGrid Class

Create `packages/Webkul/RMA/src/DataGrids/Admin/ReturnRequestDataGrid.php`:

```php
<?php

namespace Webkul\RMA\DataGrids\Admin;

use Illuminate\Support\Facades\DB;
use Webkul\DataGrid\DataGrid;

class ReturnRequestDataGrid extends DataGrid
{
    /**
     * Prepare query builder.
     */
    public function prepareQueryBuilder()
    {
        $queryBuilder = DB::table('rma_requests')
            ->select('id');

        return $queryBuilder;
    }

    /**
     * Prepare columns.
     */
    public function prepareColumns()
    {
        $this->addColumn([
            'index'      => 'id',
            'label'      => trans('rma::app.admin.return-requests.datagrid.id'),
            'type'       => 'integer',
            'searchable' => false,
            'sortable'   => true,
            'filterable' => false,
        ]);
    }
}
```

::: info Simple DataGrid Explanation
**Query Builder**: Selects only the `id` column from our `rma_requests` table - keeping it simple

**Single Column**: Just the ID column to demonstrate the basic DataGrid concept

**No Actions**: We're focusing on data display first, actions can be added later

**Basic Properties**: Only essential properties - searchable false, sortable true, filterable false

**No Mass Actions**: Keeping it minimal to understand the core concept first
:::

## Adding DataGrid Translations

Create the necessary translation keys for your DataGrid by updating `packages/Webkul/RMA/src/Resources/lang/en/app.php`:

```php{8-11}
<?php

return [
    'admin' => [
        'return-requests' => [
            'title' => 'RMA Listing Title',
            'content' => 'RMA Listing Content',
            
            'datagrid' => [
                'id' => 'ID',
            ],
        ],
    ],
];
```

::: tip Organized Translation Structure
The DataGrid translations are nested under `return-requests` since they're specific to the return requests DataGrid. This keeps translations organized and makes it clear which section they belong to.
:::

## Integrating DataGrid with Controller

Update your admin controller to use the DataGrid:

**Update:** `packages/Webkul/RMA/src/Http/Controllers/Admin/ReturnRequestController.php`

```php{23-26}
<?php

namespace Webkul\RMA\Http\Controllers\Admin;

use Webkul\RMA\Http\Controllers\Controller;
use Webkul\RMA\Repositories\ReturnRequestRepository;
use Webkul\RMA\DataGrids\Admin\ReturnRequestDataGrid;

class ReturnRequestController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected ReturnRequestRepository $returnRequestRepository
    ) {}

    /**
     * Display a listing of return requests.
     */
    public function index()
    {
        if (request()->ajax()) {
            return datagrid(ReturnRequestDataGrid::class)->process();
        }

        return view('rma::admin.return-requests.index');
    }
}
```

::: tip DataGrid Integration
**AJAX Processing**: When the request is AJAX (DataGrid pagination, filtering, sorting), the `datagrid()` helper processes the request and returns JSON data

**View Rendering**: For regular page loads, it renders the Blade view that contains the DataGrid component

This pattern allows the same controller method to handle both initial page loads and subsequent DataGrid operations.
:::

## Creating DataGrid Views

Create the admin view that will display your DataGrid. First, ensure the views directory structure exists:

```bash
mkdir -p packages/Webkul/RMA/src/Resources/views/admin/return-requests
```

**Create:** `packages/Webkul/RMA/src/Resources/views/admin/return-requests/index.blade.php`

```blade{5-6}
<x-admin::layouts>
    <x-slot:title>
        @lang('rma::app.admin.return-requests.title')
    </x-slot:title>

    <x-admin::datagrid :src="route('admin.rma.return-requests.index')" />
</x-admin::layouts>
```

::: info Simple View Explanation
**Layout Component**: Uses Bagisto's admin layout with consistent styling

**Basic Header**: Just shows the page title without additional buttons

**DataGrid Component**: The `<x-admin::datagrid>` component renders the DataGrid interface

**Minimal Structure**: No permissions, no create buttons, no events - just the essential DataGrid display
:::

## Creating Sample Data

Before we can see our DataGrid in action, let's create some simple return request records using Laravel Tinker:

```bash
php artisan tinker
```

```php
// Create simple return requests - we only need basic data for our ID-only DataGrid
DB::table('rma_requests')->insert([
    [
        'customer_id' => 1,
        'order_id' => 1,
        'product_sku' => 'LAPTOP-001',
        'product_name' => 'Gaming Laptop',
        'product_quantity' => 1,
        'reason' => 'Defective screen',
        'status' => 'pending',
        'admin_notes' => null,
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'customer_id' => 2,
        'order_id' => 5,
        'product_sku' => 'PHONE-002',
        'product_name' => 'Smartphone Pro',
        'product_quantity' => 1,
        'reason' => 'Wrong color received',
        'status' => 'approved',
        'admin_notes' => null,
        'created_at' => now()->subDays(2),
        'updated_at' => now()->subDays(1),
    ],
    [
        'customer_id' => 3,
        'order_id' => 8,
        'product_sku' => 'HEADPHONES-003',
        'product_name' => 'Wireless Headphones',
        'product_quantity' => 2,
        'reason' => 'Not as described',
        'status' => 'rejected',
        'admin_notes' => null,
        'created_at' => now()->subDays(5),
        'updated_at' => now()->subDays(3),
    ],
]);

// Verify the data was created
DB::table('rma_requests')->count(); // Should return 3

// Check the IDs were created correctly (this is what our DataGrid will show)
DB::table('rma_requests')->select('id')->get();
```

::: tip Simple Data for Simple DataGrid
**Complete Records**: We still need all the required fields for the database, but our DataGrid will only display the ID

**Focus on IDs**: The main point is to see that our DataGrid can display the ID column from these records

**Three Records**: Just enough to see that the DataGrid is working and displaying multiple rows

**Next Steps**: Once this basic DataGrid works, you can add more columns and features gradually
:::

## Testing Your DataGrid

Now you can test your basic DataGrid functionality:

```bash
# Clear cache and visit the admin route
php artisan optimize:clear

# Visit in browser: http://your-app.com/admin/rma/return-requests
```

**Expected DataGrid Features:**
- **Data Display**: All sample record IDs shown in a simple table
- **Column Sorting**: Click the "ID" column header to sort the records
- **Basic Pagination**: Navigation controls if you have many records
- **Clean Interface**: Simple, professional table showing just the essential data

You should see a clean table with just one column showing the IDs: 1, 2, 3 (or whatever IDs were generated).

::: info Simple DataGrid Testing Checklist
**Core Functionality:**
- ✅ Records display correctly in a table
- ✅ ID column shows the correct values
- ✅ Sorting works when clicking the ID column header
- ✅ Page loads without errors
- ✅ DataGrid displays with proper styling

**What's NOT included (and that's okay!):**
- ❌ Multiple columns - we're keeping it simple
- ❌ Filtering options - not needed for basic concept
- ❌ Search functionality - will add later
- ❌ Actions buttons - focusing on data display first
- ❌ Mass actions - advanced feature for later
:::

::: tip Success Indicators
If you see a table with a single "ID" column showing your record IDs (1, 2, 3), congratulations! Your basic DataGrid is working perfectly. This foundation can now be expanded with additional columns and features as you become more comfortable with the DataGrid system.
:::

## Understanding DataGrid Methods

Now that you've seen your basic DataGrid working, let's understand how the DataGrid methods work and how you can expand them:

### prepareQueryBuilder()

This method defines what data to retrieve from the database. In our simple example:

```php
public function prepareQueryBuilder()
{
    $queryBuilder = DB::table('rma_requests')
        ->select('id'); // We only select ID for our simple DataGrid

    return $queryBuilder;
}
```

For more complex DataGrids, you might select multiple columns:

```php
public function prepareQueryBuilder()
{
    $queryBuilder = DB::table('rma_requests')
        ->select(
            'id',
            'customer_id',
            'product_sku',
            'product_name',
            'status',
            'created_at'
        );

    return $queryBuilder;
}
```

::: tip Query Builder Best Practices
**Select Only What You Need**: Only select columns that will be displayed or used for filtering

**Use Joins Wisely**: Add joins for related data but be mindful of performance

**Apply Default Filters**: Add conditions like `->where('deleted_at', null)` if needed

**Optimize for Large Datasets**: Consider indexing frequently filtered/sorted columns
:::

### prepareColumns()

This method defines how each column should behave. Our simple example:

```php
public function prepareColumns()
{
    $this->addColumn([
        'index'      => 'id',
        'label'      => trans('rma::app.admin.return-requests.datagrid.id'),
        'type'       => 'integer',
        'searchable' => false,
        'sortable'   => true,
        'filterable' => false,
    ]);
}
```

#### Column Configuration Options

| Key                     | Type | Description |
| ----------------------- | ---- | ----------- |
| **`index`**             | String | Database column name or alias |
| **`label`**             | String | Column header text (use translations) |
| **`type`**              | String | Data type: `string`, `integer`, `decimal`, `boolean`, `date`, `datetime` |
| **`searchable`**        | Boolean | Enable text search for this column |
| **`sortable`**          | Boolean | Enable column sorting |
| **`filterable`**        | Boolean | Enable column filtering |
| **`filterable_type`**   | String | Filter type: `dropdown`, `date_range`, `datetime_range` |
| **`filterable_options`** | Array | Options for dropdown filters |
| **`closure`**           | Function | Custom formatting function |

### prepareActions() (Optional)

This method defines row-level actions (like edit, delete buttons). We didn't include this in our basic example:

```php
public function prepareActions()
{
    $this->addAction([
        'index'  => 'edit',
        'icon'   => 'icon-edit',
        'title'  => 'Edit',
        'method' => 'GET',
        'url'    => function ($row) {
            return route('admin.rma.return-requests.edit', $row->id);
        },
    ]);
}
```

### prepareMassActions() (Optional)

This method defines bulk operations. Also not included in our basic example:

```php
public function prepareMassActions()
{
    $this->addMassAction([
        'icon'   => 'icon-delete',
        'title'  => 'Delete Selected',
        'method' => 'POST',
        'url'    => route('admin.rma.return-requests.mass-delete'),
    ]);
}
```

## Expanding Your DataGrid

Once your basic DataGrid is working, you can gradually add more features. Let's walk through each enhancement step-by-step:

### Adding More Columns

Let's add a product name column to make our DataGrid more useful. This requires updating three parts:

#### Step 1: Update the Query Builder

First, modify your `prepareQueryBuilder()` method to select the additional column:

```php{4}
public function prepareQueryBuilder()
{
    $queryBuilder = DB::table('rma_requests')
        ->select('id', 'product_name'); // Add product_name to selection

    return $queryBuilder;
}
```

#### Step 2: Add the Column Definition

Add the new column to your `prepareColumns()` method:

```php{11-19}
public function prepareColumns()
{
    $this->addColumn([
        'index'      => 'id',
        'label'      => trans('rma::app.admin.return-requests.datagrid.id'),
        'type'       => 'integer',
        'searchable' => false,
        'sortable'   => true,
        'filterable' => false,
    ]);

    $this->addColumn([
        'index'      => 'product_name',
        'label'      => trans('rma::app.admin.return-requests.datagrid.product-name'),
        'type'       => 'string',
        'searchable' => true,
        'sortable'   => true,
        'filterable' => false,
    ]);
}
```

#### Step 3: Add Translation Keys

Update your translation file `packages/Webkul/RMA/src/Resources/lang/en/app.php`:

```php{3}
'datagrid' => [
    'id' => 'ID',
    'product-name' => 'Product Name',
],
```

Now your DataGrid will display both ID and Product Name columns with search functionality enabled for the product name.

### Adding Status Column with Dropdown Filter

Let's add a status column that demonstrates filtering capabilities:

#### Step 1: Update Query Builder

```php{4}
public function prepareQueryBuilder()
{
    $queryBuilder = DB::table('rma_requests')
        ->select('id', 'product_name', 'status'); // Add status column

    return $queryBuilder;
}
```

#### Step 2: Add Status Column with Filter

```php{4-27}
public function prepareColumns()
{
    // ...existing columns...

    $this->addColumn([
        'index'              => 'status',
        'label'              => trans('rma::app.admin.return-requests.datagrid.status'),
        'type'               => 'string',
        'searchable'         => false,
        'sortable'           => true,
        'filterable'         => true,
        'filterable_type'    => 'dropdown',
        'filterable_options' => [
            [
                'label' => trans('rma::app.admin.return-requests.datagrid.pending'),
                'value' => 'pending',
            ],
            [
                'label' => trans('rma::app.admin.return-requests.datagrid.approved'),
                'value' => 'approved',
            ],
            [
                'label' => trans('rma::app.admin.return-requests.datagrid.rejected'),
                'value' => 'rejected',
            ],
        ],
    ]);
}
```

#### Step 3: Add Status Translation

```php{4-7}
'datagrid' => [
    'id' => 'ID',
    'product-name' => 'Product Name',
    'status' => 'Status',
    'pending' => 'Pending',
    'approved' => 'Approved',
    'rejected' => 'Rejected',
],
```

### Adding Custom Formatting with Closure

Let's enhance the status column to display status values with styled badges using the `closure` feature:

#### Step 1: Basic Badge Formatting

First, let's add a simple closure that displays all status values with a consistent badge style:

```php{4-30}
public function prepareColumns()
{
    // ...existing columns...

    $this->addColumn([
        'index'              => 'status',
        'label'              => trans('rma::app.admin.return-requests.datagrid.status'),
        'type'               => 'string',
        'searchable'         => false,
        'sortable'           => true,
        'filterable'         => true,
        'filterable_type'    => 'dropdown',
        'filterable_options' => [
            [
                'label' => trans('rma::app.admin.return-requests.datagrid.pending'),
                'value' => 'pending',
            ],
            [
                'label' => trans('rma::app.admin.return-requests.datagrid.approved'),
                'value' => 'approved',
            ],
            [
                'label' => trans('rma::app.admin.return-requests.datagrid.rejected'),
                'value' => 'rejected',
            ],
        ],
        'closure' => function ($row) {
            return "<span class='badge label-info'>" . ucfirst($row->status) . "</span>";
        },
    ]);
}
```

This simple closure transforms plain text like "pending" into a styled badge that displays as "Pending" with consistent styling.

#### Step 2: Understanding Basic Closure

The `closure` parameter allows you to:

- **Transform Data**: Convert raw database values into formatted display
- **Add HTML**: Return HTML elements like badges, links, or formatted text
- **Simple Logic**: Apply basic transformations like capitalization or formatting

#### Step 3: Advanced Conditional Styling (Optional)

Once you're comfortable with basic closures, you can enhance it with conditional styling:

```php{2-22}
'closure' => function ($row) {
    $statusConfig = [
        'pending' => [
            'label' => trans('rma::app.admin.return-requests.datagrid.pending'),
            'class' => 'label-pending'
        ],
        'approved' => [
            'label' => trans('rma::app.admin.return-requests.datagrid.approved'),
            'class' => 'label-active'
        ],
        'rejected' => [
            'label' => trans('rma::app.admin.return-requests.datagrid.rejected'),
            'class' => 'label-canceled'
        ],
    ];

    $config = $statusConfig[$row->status] ?? [
        'label' => ucfirst($row->status),
        'class' => 'label-info'
    ];

    return "<span class='badge {$config['class']}'>{$config['label']}</span>";
},
```

This advanced version provides different colors for each status type, making it easier to quickly identify status at a glance.

- **Custom Formatting**: Transform raw data into formatted display
- **HTML Output**: Return HTML elements like badges, links, or icons
- **Conditional Logic**: Apply different styling based on data values
- **Translation Integration**: Use translation keys for internationalization

#### Step 4: Common Closure Use Cases

Here are simple examples of other closure implementations you might use:

**Basic Date Formatting:**
```php
'closure' => function ($row) {
    return $row->created_at ? date('M d, Y', strtotime($row->created_at)) : '-';
},
```

**Simple Price Formatting:**
```php
'closure' => function ($row) {
    return '$' . number_format($row->price, 2);
},
```

**Basic Boolean Display:**
```php
'closure' => function ($row) {
    return $row->is_active ? 'Yes' : 'No';
},
```

**Text Truncation:**
```php
'closure' => function ($row) {
    return strlen($row->description) > 30 
        ? substr($row->description, 0, 30) . '...'
        : $row->description;
},
```

::: tip Closure Best Practices
**Start Simple**: Begin with basic transformations like capitalization or formatting

**Security**: Always escape user data when outputting HTML to prevent XSS attacks

**Performance**: Keep closure logic simple since it runs for every row

**Consistency**: Use consistent styling classes that match your admin theme

**Progression**: Master basic closures before moving to complex conditional logic
:::

::: info Why Use Closures in DataGrid?
**Better Display**: Transform plain database values into user-friendly formatted text

**Visual Enhancement**: Add styling and formatting without changing underlying data

**Flexibility**: Easy to modify display format without database changes

**User Experience**: Make data more readable and professional-looking

**Maintainability**: Keep formatting logic centralized in the DataGrid definition
:::

Now your status column will display neat badges instead of plain text, making it much easier for administrators to quickly scan the data.

### Adding Actions

When you're ready for user interactions, let's start by adding a simple view action to each row:

#### Step 1: Add Basic View Route

First, add a simple view route in your package's route file `packages/Webkul/RMA/src/Routes/admin-routes.php`:

```php{5-7}
Route::group(['middleware' => ['admin']], function () {
    Route::prefix('admin')->group(function () {
        Route::prefix('rma')->group(function () {
            // ...existing routes...

            Route::get('return-requests/{id}', [ReturnRequestController::class, 'show'])
                ->name('admin.rma.return-requests.show');
        });
    });
});
```

#### Step 2: Add Basic Controller Method

Add the corresponding view method to your controller:

```php{4-13}
class ReturnRequestController extends Controller
{
    // ...existing methods...

    /**
     * Show the specified return request.
     */
    public function show($id)
    {
        $returnRequest = $this->returnRequestRepository->findOrFail($id);
        
        return view('rma::admin.return-requests.show', compact('returnRequest'));
    }
}
```

#### Step 3: Create the View Template

Create the view template for displaying individual return requests:

**Create:** `packages/Webkul/RMA/src/Resources/views/admin/return-requests/show.blade.php`

::: tip Quick Implementation
Don't worry about understanding every part of this view template right now. Simply copy and paste the code below - it's a standard admin detail page that follows Bagisto's design patterns. Focus on understanding how the DataGrid action connects to this view.
:::

```blade
<x-admin::layouts>
    <x-slot:title>
        @lang('rma::app.admin.return-requests.show.title')
    </x-slot:title>

    <div class="flex gap-4 justify-between items-center max-sm:flex-wrap">
        <p class="text-xl text-gray-800 dark:text-white font-bold">
            @lang('rma::app.admin.return-requests.show.title') #{{ $returnRequest->id }}
        </p>
    </div>

    <div class="flex gap-2.5 mt-3.5 max-xl:flex-wrap">
        <div class="flex flex-col gap-2 flex-1 max-xl:flex-auto">
            <div class="p-4 bg-white dark:bg-gray-900 rounded box-shadow">
                <p class="text-base text-gray-800 dark:text-white font-semibold mb-4">
                    @lang('rma::app.admin.return-requests.show.general-info')
                </p>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="text-gray-600 dark:text-gray-300 font-semibold">
                            @lang('rma::app.admin.return-requests.show.product-name'):
                        </p>
                        <p class="text-gray-800 dark:text-white">
                            {{ $returnRequest->product_name }}
                        </p>
                    </div>

                    <div>
                        <p class="text-gray-600 dark:text-gray-300 font-semibold">
                            @lang('rma::app.admin.return-requests.show.status'):
                        </p>
                        <span class="badge label-info">
                            {{ ucfirst($returnRequest->status) }}
                        </span>
                    </div>

                    <div>
                        <p class="text-gray-600 dark:text-gray-300 font-semibold">
                            @lang('rma::app.admin.return-requests.show.reason'):
                        </p>
                        <p class="text-gray-800 dark:text-white">
                            {{ $returnRequest->reason }}
                        </p>
                    </div>

                    <div>
                        <p class="text-gray-600 dark:text-gray-300 font-semibold">
                            @lang('rma::app.admin.return-requests.show.created-at'):
                        </p>
                        <p class="text-gray-800 dark:text-white">
                            {{ $returnRequest->created_at }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-admin::layouts>
```

#### Step 4: Add Simple Action to DataGrid

Now add the `prepareActions()` method to your DataGrid with just the view action:

```php
public function prepareActions()
{
    $this->addAction([
        'icon'   => 'icon-view',
        'title'  => trans('rma::app.admin.return-requests.datagrid.view'),
        'method' => 'GET',
        'url'    => function ($row) {
            return route('admin.rma.return-requests.show', $row->id);
        },
    ]);
}
```

#### Step 5: Add View Translations

Update your translations to include the view page labels:

```php{8,10-18}
'datagrid' => [
    'id' => 'ID',
    'product-name' => 'Product Name',
    'status' => 'Status',
    'pending' => 'Pending',
    'approved' => 'Approved',
    'rejected' => 'Rejected',
    'view' => 'View',
],

'show' => [
    'title' => 'View Return Request',
    'general-info' => 'General Information',
    'product-name' => 'Product Name',
    'status' => 'Status',
    'reason' => 'Reason',
    'created-at' => 'Created At',
],
```

Now your DataGrid will have a simple "View" button on each row that takes administrators to a detail page for that return request.

#### Step 6: Adding More Actions (Optional)

Once you're comfortable with basic actions, you can add edit and delete actions:

```php{11-28}
public function prepareActions()
{
    $this->addAction([
        'icon'   => 'icon-view',
        'title'  => trans('rma::app.admin.return-requests.datagrid.view'),
        'method' => 'GET',
        'url'    => function ($row) {
            return route('admin.rma.return-requests.show', $row->id);
        },
    ]);

    $this->addAction([
        'icon'   => 'icon-edit',
        'title'  => trans('rma::app.admin.return-requests.datagrid.edit'),
        'method' => 'GET',
        'url'    => function ($row) {
            return route('admin.rma.return-requests.edit', $row->id);
        },
    ]);

    $this->addAction([
        'icon'   => 'icon-delete',
        'title'  => trans('rma::app.admin.return-requests.datagrid.delete'),
        'method' => 'DELETE',
        'url'    => function ($row) {
            return route('admin.rma.return-requests.delete', $row->id);
        },
    ]);
}
```

::: warning Important Implementation Note
Remember to add the corresponding routes and controller methods for edit and delete functionality when you're ready to implement them. Without these routes and methods, the action buttons will result in 404 errors when clicked.
:::

### Adding Mass Actions

For bulk operations, add the `prepareMassActions()` method:

#### Step 1: Add Mass Delete Route

```php{5-7}
Route::group(['middleware' => ['admin']], function () {
    Route::prefix('admin')->group(function () {
        Route::prefix('rma')->group(function () {
            // ...existing routes...

            Route::post('return-requests/mass-delete', [ReturnRequestController::class, 'massDestroy'])
                ->name('admin.rma.return-requests.mass-delete');
        });
    });
});
```

#### Step 2: Add Mass Delete Controller Method

```php{4-17}
class ReturnRequestController extends Controller
{
    // ...existing methods...

    /**
     * Mass delete return requests.
     */
    public function massDestroy()
    {
        $indices = request()->input('indices');
        
        foreach ($indices as $index) {
            $this->returnRequestRepository->delete($index);
        }
        
        return response()->json(['message' => 'Selected return requests deleted successfully.']);
    }
}
```

#### Step 3: Add Mass Actions to DataGrid

```php
public function prepareMassActions()
{
    $this->addMassAction([
        'icon'   => 'icon-delete',
        'title'  => trans('rma::app.admin.return-requests.datagrid.mass-delete'),
        'method' => 'POST',
        'url'    => route('admin.rma.return-requests.mass-delete'),
    ]);
}
```

#### Step 4: Add Mass Action Translation

```php{9}
'datagrid' => [
    'id' => 'ID',
    'product-name' => 'Product Name',
    'status' => 'Status',
    'pending' => 'Pending',
    'approved' => 'Approved',
    'rejected' => 'Rejected',
    'view' => 'View',
    'mass-delete' => 'Delete Selected',
],
```

::: tip Gradual Enhancement
Start with just the ID column, then add one feature at a time. This approach helps you understand each DataGrid component without getting overwhelmed by complexity.
:::

## Your Next Step

Congratulations! You've successfully mastered DataGrid development in Bagisto.

Your foundation is solid! You can now build professional admin interfaces with powerful data management capabilities. The next logical step is to make your DataGrid accessible to administrators through proper navigation.

**Continue to:** **[Menu](./menu.md)** - Create admin menu entries so administrators can easily access your DataGrid

With DataGrid and menu integration complete, you'll have a fully functional admin interface that administrators will love to use. Each new concept builds upon what you've already learned, making your Bagisto packages more robust and user-friendly.
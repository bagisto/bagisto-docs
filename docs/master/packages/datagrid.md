# DataGrid

[[TOC]]

## Introduction

A DataGrid is a powerful tool for displaying database records in a tabular format, making it easier to present and manage large amounts of data in an organized manner. In Bagisto, the DataGrid feature enables you to display data efficiently, with built-in functionalities like sorting, filtering, and mass actions. These additional features enhance the basic functionality of DataGrid, allowing you to interact with and manage data seamlessly. Whether you use the pre-built DataGrid or write your own custom implementation, Bagisto’s DataGrid provides a robust solution for data presentation and manipulation.

## Global Properties of DataGrid

The DataGrid in Bagisto has several global properties that enhance its functionality and customization. Below are the key properties and their purposes:

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


## How DataGrid Works

The **`DataGrid`** abstract class is created in the **`Webkul\DataGrid`** package. In the abstract class, a list of properties and methods are declared. To create your own DataGrid, you need to extend the **`Webkul\DataGrid\DataGrid`** abstract class.

In **`Webkul\DataGrid\DataGrid\DataGrid.php`** abstract class, two abstract methods are declared **`prepareQueryBuilder()`** and **`prepareColumns()`**. You can prepare your grid by defining these two methods.

- **`prepareQueryBuilder()`**: In this method, records are retrieved through queries applicable to the database and stored in a collection. When records are retrieved, the **`setQueryBuilder()`** method is called.

    ```php
    public function prepareQueryBuilder()
    {
        $queryBuilder = DB::table('posts')
            ->select('id',
                'title',
                'status',
                'created_at',
                'updated_at'
            );

        return $queryBuilder;
    }
    ```

- **`prepareColumns()`**: In this method, columns are created which are displayed in the grid. The parameter accepts an array in key-value pairs. Some of the essential keys are described below:

    | Key                     | Functionality |
    | ----------------------- | ---------------------------------------------------------------------------------------- |
    | **`index`**             | Specifies the column's index, used to identify the column within the grid. |
    | **`label`**             | Specifies the label of the column, typically used as the column header in the grid.    |
    | **`type`**              | Specifies the type of data contained in the column.      |
    | **`searchable`**        | Accepts boolean values (`true` or `false`) to indicate if the column can be searched.  |
    | **`filterable`**        | Accepts boolean values (`true` or `false`) to indicate if the column can be filtered. |
    | **`filterableType`**    | Specifies the type of filter that can be applied to the column, if filterable. |
    | **`filterableOptions`** | Array of options that can be used to filter the column's data.    |
    | **`allowMultipleValues`** | Accepts boolean values (`true` or `false`) to indicate if the column allows multiple values. |
    | **`sortable`**          | Accepts boolean values (`true` or `false`) to indicate if the column can be sorted.  |
    | **`visibility`**        | Accepts boolean values (`true` or `false`) to indicate if the column is visible.  |
    | **`closure`**           | Used to apply custom actions or conditions to the column's value.    |
    | **`columnName`**        | Specifies the fully qualified table column name associated with the grid column.|

    ```php
    public function prepareColumns()
    {
        $this->addColumn([
            'index'              => 'status',
            'label'              => trans('shop::app.customers.account.orders.status.title'),
            'type'               => 'string',
            'searchable'         => true,
            'filterable'         => true,
            'filterable_type'    => 'dropdown',
            'filterable_options' => [
                [
                    'label'  => trans('shop::app.customers.account.orders.status.options.processing'),
                    'value'  => Order::STATUS_PROCESSING,
                ],
                [
                    'label'  => trans('shop::app.customers.account.orders.status.options.completed'),
                    'value'  => Order::STATUS_COMPLETED,
                ],
                [
                    'label'  => trans('shop::app.customers.account.orders.status.options.canceled'),
                    'value'  => Order::STATUS_CANCELED,
                ],
                [
                    'label'  => trans('shop::app.customers.account.orders.status.options.closed'),
                    'value'  => Order::STATUS_CLOSED,
                ],
                [
                    'label'  => trans('shop::app.customers.account.orders.status.options.pending'),
                    'value'  => Order::STATUS_PENDING,
                ],
                [
                    'label'  => trans('shop::app.customers.account.orders.status.options.pending-payment'),
                    'value'  => Order::STATUS_PENDING_PAYMENT,
                ],
                [
                    'label'  => trans('shop::app.customers.account.orders.status.options.fraud'),
                    'value'  => Order::STATUS_FRAUD,
                ],
            ],
            'sortable'   => true,
            'closure'    => function ($row) {
                switch ($row->status) {
                    case Order::STATUS_PROCESSING:
                        return '<p class="label-processing">'.trans('shop::app.customers.account.orders.status.options.processing').'</p>';

                    case Order::STATUS_COMPLETED:
                        return '<p class="label-active">'.trans('shop::app.customers.account.orders.status.options.completed').'</p>';

                    case Order::STATUS_CANCELED:
                        return '<p class="label-canceled">'.trans('shop::app.customers.account.orders.status.options.canceled').'</p>';

                    case Order::STATUS_CLOSED:
                        return '<p class="label-closed">'.trans('shop::app.customers.account.orders.status.options.closed').'</p>';

                    case Order::STATUS_PENDING:
                        return '<p class="label-pending">'.trans('shop::app.customers.account.orders.status.options.pending').'</p>';

                    case Order::STATUS_PENDING_PAYMENT:
                        return '<p class="label-pending">'.trans('shop::app.customers.account.orders.status.options.pending-payment').'</p>';

                    case Order::STATUS_FRAUD:
                        return '<p class="label-canceled">'.trans('shop::app.customers.account.orders.status.options.fraud').'</p>';
                }
            },
        ]);
    }
    ```

- **`prepareActions()`**: This method is defined when there is a need to perform any action such as edit or delete on the grid. In this method, the **`addAction()`** method is called to define a particular action.

- **`addAction()`**: This method is used for adding actions (like **`edit`**, **`delete`**, etc.) to each row generated by the DataGrid.

  | Key           | Functionality                                                            |
  | ------------- | ------------------------------------------------------------------------ |
  | **`icon`**    | This key accept class of your icon. |
  | **`title`**   | This key accept title of action column.|
  | **`method`**  | This key accept HTTP methods to perform specific action(GET/DELETE).|
  | **`url`**     | This key accepts the route of the specific action.|

    ```php
    public function prepareActions()
    {
        $this->addAction([
            'icon'   => 'icon-edit'
            'title'  => trans('blog::app.admin.datagrid.edit'),
            'method' => 'GET',
            'url'    => function ($row) {
                return route('admin.blog.edit', $row->id);
            },
        ]);
    }
    ```

## Setting Up DataGrid

### Create the DataGrids Folder

First, navigate to the `src` folder of your package. Within this folder, create a new directory called `DataGrids`. Inside this new directory, create a file named `PostDataGrid.php`.

The folder structure should look like this:

```
└── packages
    └── Webkul
        └── Blog
            └── src
                ├── ...
                └── DataGrids
                    └── PostDataGrid.php
```

### Define the PostDataGrid Class

Open the `PostDataGrid.php` file and add the following code to define the `PostDataGrid` class. This class will extend the base DataGrid class provided by Bagisto and set up the necessary configurations for your data grid.

```php
namespace Webkul\Blog\DataGrids;

use Webkul\DataGrid\DataGrid;
use Illuminate\Support\Facades\DB;

class PostDataGrid extends DataGrid
{
    // ...
}
```

### Displaying DataGrid

Open the `Admin/PostController.php` file in your package and locate the index method. In this method, you will use the `toJson()` method from your DataGrid class to return the data grid as JSON when the request is an AJAX call.

```php
use Webkul\Blog\DataGrids\PostDataGrid;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        if (request()->ajax()) {
            return datagrid(PostDataGrid::class)->process();
        }

        return view('blog::admin.index');
    }

    // ...
}
```

### Render DataGrid

Open the view file `views/admin/index.blade.php`. In this view, you will use the `datagrid` Blade component and specify the URL from which it will load the `JSON` data.

Update the index.blade.php file as shown below:

```html
<x-admin::datagrid src="{{ route('admin.blog.index') }}"></x-admin::datagrid>
```

Make sure the route `admin.blog.index` is defined in your `web.php` file, so that it points to the index method of the PostController:

With these steps, your DataGrid is now ready to be used.

::: warning
Make sure to copy the sample code provided below to your own **`PostDataGrid.php`** file, as we have already included all the necessary methods and functions there. This code can be used later as an example for your implementation.
:::

### Sample DataGrid

Here's an improved version of the provided DataGrid sample:

```php
<?php

namespace Webkul\Blog\DataGrids;

use Illuminate\Support\Facades\DB;
use Webkul\DataGrid\DataGrid;

class PostDataGrid extends DataGrid
{
    /**
     * Primary column.
     *
     * @var string
     */
    protected $primaryColumn = 'order_id';

    /**
     * Prepare query builder.
     *
     * @return \Illuminate\Database\Query\Builder
     */
    public function prepareQueryBuilder()
    {
        $queryBuilder = DB::table('posts')
            ->select('id',
                'title',
                'status',
                'created_at',
                'updated_at'
            );

        return $queryBuilder;
    }

    /**
     * Prepare columns.
     *
     * @return void
     */
    public function prepareColumns()
    {
        $this->addColumn([
            'index'      => 'id',
            'label'      => trans('blog::app.admin.datagrid.id'),
            'type'       => 'string',
            'searchable' => false,
            'filterable' => true,
            'sortable'   => true,
        ]);

        $this->addColumn([
            'index'      => 'title',
            'label'      => trans('blog::app.admin.datagrid.title'),
            'type'       => 'string',
            'searchable' => true,
            'sortable'   => true,
            'filterable' => false,
            'closure'    => function ($value) {
                return substr($value->title, 0, 20);
            },
        ]);

        $this->addColumn([
            'index'      => 'status',
            'label'      => trans('blog::app.admin.datagrid.status'),
            'type'       => 'boolean',
            'sortable'   => true,
            'searchable' => false,
            'filterable' => true,
            'closure'    => function ($value) {
                if ($value->status) {
                    return '<p class="label-active">'.trans('blog::app.admin.datagrid.active').'</p>';
                }

                return '<p class="label-info">'.trans('blog::app.admin.datagrid.inactive').'</p>';
            },
        ]);

        $this->addColumn([
            'index'           => 'created_at',
            'label'           => trans('blog::app.admin.datagrid.created_at'),
            'type'            => 'datetime',
            'filterable'      => true,
            'filterable_type' => 'datetime_range',
            'sortable'        => true,
        ]);

        $this->addColumn([
            'index'           => 'updated_at',
            'label'           =>  trans('blog::app.admin.datagrid.updated_at'),
            'type'            => 'datetime',
            'filterable'      => true,
            'filterable_type' => 'datetime_range',
            'sortable'        => true,
        ]);
    }

    /**
     * Prepare actions.
     *
     * @return void
     */
    public function prepareActions()
    {
        $this->addAction([
            'icon'   => 'icon-edit',
            'title'  => trans('blog::app.admin.datagrid.edit'),
            'method' => 'GET',
            'url'    => function ($row) {
                return route('admin.blog.edit', $row->id);
            },
        ]);

        $this->addAction([
            'icon'   => 'icon-delete',
            'title'  => trans('blog::app.admin.datagrid.delete'),
            'method' => 'DELETE',
            'url'    => function ($row) {
                return route('admin.blog.delete', $row->id);
            },
        ]);
    }

    /**
     * Prepare mass actions.
     *
     * @return void
     */
    public function prepareMassActions()
    {
        $this->addMassAction([
            'title'   => trans('blog::app.admin.datagrid.mass-update'),
            'url'     => route('admin.blog.mass_update'),
            'method'  => 'POST',
            'options' => [
                [
                    'label'  => trans('blog::app.admin.datagrid.active'),
                    'value' => 1,
                ], [
                    'label'  => trans('blog::app.admin.datagrid.inactive'),
                    'value' => 0,
                ],
            ],
        ]);

        $this->addMassAction([
            'title'  => trans('blog::app.admin.datagrid.mass-delete'),
            'url'    => route('admin.blog.mass_delete'),
            'method' => 'POST'
        ]);
    }
}
```

## DataGrid Customization

In Bagisto, you can customize the DataGrid to fit your specific needs. This involves extending the DataGrid template and utilizing slots to tailor the layout and functionality. Here’s how to do it:

Use the `DataGrid` component in your Blade view and specify the source URL and other properties like `isMultiRow` if needed. Additionally, use the `#header` and `#body` slots to customize the content.

Here’s an example of how you can extend the DataGrid template:

1. Start by extending the DataGrid template:

```html
<x-admin::datagrid 
    src="{{ route('admin.catalog.products.index') }}" 
    :isMultiRow="true"
>
        <template #header="{
            isLoading,
            available,
            applied,
            selectAll,
            sort,
            performAction
        }">

        <template #body="{
            isLoading,
            available,
            applied,
            selectAll,
            sort,
            performAction
        }">
</x-admin::datagrid>
```

  | Key           | Functionality                                                            |
  | ------------- | ------------------------------------------------------------------------ |
  | **`isLoading`** | This key provides information about whether the DataGrid is currently loading. |
  | **`available`** | This key contains the available records in the DataGrid. |
  | **`applied`**  | An object representing the currently applied filters, pagination, sorting, and mass actions. |
  | **`selectAll`** | A function that selects or deselects all records in the datagrid. |
  | **`sort`** | This is a function used to sort the datagrid based on a specified column. |
  | **`performAction`** | This is a function triggered when an action is performed on a record in the datagrid, such as editing, deleting, or processing. |

You can use these props to customize the appearance and behavior of the datagrid header, including handling loading states, applying filters, sorting data, selecting records, and performing actions on the entire dataset.

Once you've completed this step, all the data within the DataGrid becomes accessible inside the template. At this point, you have the freedom to modify the DataGrid's functionality and its user interface to suit your preferences.

::: tip
By customizing the DataGrid directly in the Blade file, you won't affect your default DataGrid. This means you can display the same DataGrid with various appearances and customize it by writing simple Vue.js code and using Tailwind CSS (since we use it in Bagisto).
:::

## Available Column Types

Bagisto’s DataGrid supports various column types that allow you to store, display, and manage diverse kinds of data. This also includes a searchability feature, allowing users to filter data by specific criteria. Below is a breakdown of key column types: decimal, integer, string, boolean, date, datetime, and aggregate types.

### Integer Column Type

The integer column type is designed for whole numbers without any fractional or decimal parts. This column type is ideal for counting or identification data. Used for IDs, quantities, and numeric fields that don’t require decimal places.


```php
$this->addColumn([
    'index'      => 'id',
    'label'      => trans('blog::app.admin.datagrid.index.id'),
    'type'       => 'integer',
    'searchable' => true,
    'filterable' => true,
    'sortable'   => true,
]);
```

### Decimal Column Type

The decimal column type stores numbers with high precision, allowing fractional parts. It’s ideal for financial or measurement data where exact precision is necessary. Used for columns like product prices, weights, or tax rates that require decimal values.

```php
$this->addColumn([
    'index'      => 'price',
    'label'      => trans('blog::app.admin.datagrid.index.price'),
    'type'       => 'decimal',
    'searchable' => true,
    'filterable' => true,
    'sortable'   => true,
]);
```

::: tip
Bagisto’s Decimal and Integer column types support a variety of filtering operations to help users refine their searches effectively. Here’s an overview of the available filtering options and their input formats:

### Supported Input Formats:

#### Decimal Columns:
    Exact match: "10.5"
    Greater than: ">10.5"
    Less than: "<20.75"
    Greater than or equal to: ">=15.0"
    Less than or equal to: "<25.5"
    Range: "10.5-20.75"

#### Integer Columns:
    Exact match: "10"
    Greater than: ">10"
    Less than: "<20"
    Greater than or equal to: ">=15"
    Less than or equal to: "<25"
    Range: "10-20"

Use these formats to apply precise filters to your Decimal and Integer columns and get the data you need more efficiently!

:::

### String Column Type

The string column type stores text or alphanumeric data. It’s widely used for columns that contain names, descriptions, or any textual information. Typically used for product names, customer names, categories, and descriptions.

```php
$this->addColumn([
    'index'      => 'name',
    'label'      => trans('blog::app.admin.datagrid.index.name'),
    'type'       => 'string',
    'searchable' => true,
    'filterable' => true,
    'sortable'   => true,
]);
```

### Boolean Column Type 

The boolean column type stores binary values such as true or false. It’s useful for indicating the state of a specific condition. Used for status flags like “active/inactive,” “available/unavailable,” or "enabled/disabled."

```php
$this->addColumn([
    'index'      => 'status',
    'label'      => trans('blog::app.admin.datagrid.index.status'),
    'type'       => 'boolean',
    'searchable' => true,
    'filterable' => true,
    'sortable'   => true,
]);
```

### Date Column Type 

The date column type stores dates, but without time information. It is useful when only the calendar date is important, such as in daily reports or event dates. Often used for birth dates, order dates, or specific event dates.

```php
$this->addColumn([
    'index'      => 'created_at',
    'label'      => trans('blog::app.admin.datagrid.index.date'),
    'type'       => 'date',
    'searchable' => true,
    'filterable' => 'date_range',
    'sortable'   => true,
]);
```

### DateTime Column Type 

The datetime column type stores both date and time information. This is important when precise timestamps are needed. Used for tracking exact times for events like order creation, login timestamps, or last updated times.

```php
$this->addColumn([
    'index'      => 'updated_at',
    'label'      => trans('blog::app.admin.datagrid.index.date'),
    'type'       => 'datetime',
    'searchable' => true,
    'filterable' => 'datetime_range',
    'sortable'   => true,
]);
```

### Aggregate Type Column 

The aggregate column type is used for displaying summarized or calculated data, such as totals, averages, or counts derived from other data in the DataGrid. Used to display metrics like total sales, average order value, or product count in categories.

```php
$this->addColumn([
    'index'      => 'total',
    'label'      => trans('blog::app.admin.datagrid.index.total'),
    'type'       => 'aggregate',
    'searchable' => true,
    'filterable' => true,
    'sortable'   => true,
]);
```
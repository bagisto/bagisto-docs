# DataGrid

DataGrid is just a concept of displaying your database records in tabular format. We have implemented this in Bagisto either you can use it to display data in tabular format or write code from scratch to display data in tabular format. In addition to DataGrid, we have implemented additional features such as sorting, filtering, mass action. You may refer to the table below for detailed information about the features.

Let us take a sample of one DataGrid,

~~~php
<?php

namespace Webkul\Admin\DataGrids;

use Illuminate\Support\Facades\DB;
use Webkul\Ui\DataGrid\DataGrid;

class AttributeDataGrid extends DataGrid
{
    /**
     * The column that needs to be treated as an index column.
     */
    protected $index = 'id';

    /**
     * For sorting order. `asc` or `desc`.
     */
    protected $sortOrder = 'desc';

    /**
     * Prepare query builder.
     */
    public function prepareQueryBuilder()
    {
        $queryBuilder = DB::table('attributes')
            ->select('id')
            ->addSelect('id', 'code', 'admin_name', 'type', 'is_required', 'is_unique', 'value_per_locale', 'value_per_channel');

        $this->setQueryBuilder($queryBuilder);
    }

    /**
     * Add columns.
     */
    public function addColumns()
    {
        $this->addColumn([
            'index' => 'id',
            'label' => trans('admin::app.datagrid.id'),
            'type' => 'number',
            'searchable' => false,
            'sortable' => true,
            'filterable' => true
        ]);

        $this->addColumn([
            'index' => 'code',
            'label' => trans('admin::app.datagrid.code'),
            'type' => 'string',
            'searchable' => true,
            'sortable' => true,
            'filterable' => true
        ]);

        $this->addColumn([
            'index' => 'admin_name',
            'label' => trans('admin::app.datagrid.admin-name'),
            'type' => 'string',
            'searchable' => true,
            'sortable' => true,
            'filterable' => true
        ]);

        $this->addColumn([
            'index' => 'type',
            'label' => trans('admin::app.datagrid.type'),
            'type' => 'string',
            'sortable' => true,
            'searchable' => true,
            'filterable' => true
        ]);

        $this->addColumn([
            'index' => 'is_required',
            'label' => trans('admin::app.datagrid.required'),
            'type' => 'boolean',
            'sortable' => true,
            'searchable' => false,
            'wrapper' => function ($value) {
                if ($value->is_required == 1)
                    return 'True';
                else
                    return 'False';
            }
        ]);

        $this->addColumn([
            'index' => 'is_unique',
            'label' => trans('admin::app.datagrid.unique'),
            'type' => 'boolean',
            'sortable' => true,
            'searchable' => false,
            'filterable' => true,
            'wrapper' => function ($value) {
                if ($value->is_unique == 1)
                    return 'True';
                else
                    return 'False';
            }
        ]);

        $this->addColumn([
            'index' => 'value_per_locale',
            'label' => trans('admin::app.datagrid.per-locale'),
            'type' => 'boolean',
            'sortable' => true,
            'searchable' => false,
            'filterable' => true,
            'wrapper' => function ($value) {
                if ($value->value_per_locale == 1)
                    return 'True';
                else
                    return 'False';
            }
        ]);

        $this->addColumn([
            'index' => 'value_per_channel',
            'label' => trans('admin::app.datagrid.per-channel'),
            'type' => 'boolean',
            'sortable' => true,
            'searchable' => false,
            'filterable' => true,
            'wrapper' => function ($value) {
                if ($value->value_per_channel == 1)
                    return 'True';
                else
                    return 'False';
            }
        ]);
    }

    /**
     * Prepare actions.
     */
    public function prepareActions()
    {
        $this->addAction([
            'title' => trans('admin::app.datagrid.edit'),
            'method' => 'GET',
            'route' => 'admin.catalog.attributes.edit',
            'icon' => 'icon pencil-lg-icon'
        ]);

        $this->addAction([
            'title' => trans('admin::app.datagrid.delete'),
            'method' => 'POST',
            'route' => 'admin.catalog.attributes.delete',
            'icon' => 'icon trash-icon'
        ]);
    }

    /**
     * Prepare mass actions.
     */
    public function prepareMassActions()
    {
        $this->addMassAction([
            'type' => 'delete',
            'action' => route('admin.catalog.attributes.massdelete'),
            'label' => 'Delete',
            'method' => 'DELETE'
        ]);
    }
}
~~~

## Global properties of DataGrid

As you see the above sample Datagrid, now let us discuss some properties,

|  Name             | Functionality                                                                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| index             | This property is defined in the grid, and the value assigned to this property must be unique i.e. `id`, so that data will be uniquely identified and operations performed will be based on your index value.   |
| sortOrder         | The `sortOrder` key is used to arrange the results in ascending or descending order, we have to set the sort order variable to `asc` or `desc`.                                                                |
| queryBuilder      | It is used to perform database operations in your application.                                                                                                                                                 |
| enableMassAction  | This accepts boolean values `true` or `false` to enable or disable the mass action in Datagrid.                                                                                                                |
| enableAction      | This accepts boolean values `true` or `false` to enable or disable the action column of Datagrid.                                                                                                              |
| paginate          | While creating your grid file you have to declare paginate property and set it to `true` to allow pagination on your page.                                                                                     |
| itemsPerPage      | The `itemsPerPage` key is used to display the number of items per page.                                                                                                                                        |
| enableFilterMap   | This accepts boolean values `true` or `false` to enable or disable the filter on the basis of columns.                                                                                                         |

## Steps to create DataGrid

You can create a DataGrid in two ways.

1. By using Bagisto Package Generator (**Recommended**)
2. By manually setting up all files (**Expert Level**)

### 1. By using Bagisto Package Generator

This command will create a new data grid class in `packages/ACME/TestPackage/src/Datagrids` directory.,

~~~php
php artisan package:make-datagrid TestDataGrid ACME/TestPackage
~~~

If data grid class already present then you can use force command for overwriting.

~~~php
php artisan package:make-datagrid TestDataGrid ACME/TestPackage --force
~~~

This will generate whole directory structures. You don't need to do manually.

### 2. By manually setting up all files

1. Create a folder **DataGrid** in your package, inside **DataGrid** create a file for your datagrid folder.

2. We have created `DataGrid` abstract class in `UI` package. In the DataGrid file, a list of properties and methods are declared. So, while creating DataGrid only you have to extend the DataGrid abstract class and use it in your datagrid file.

3. In DataGrid abstract class, two abstract methods are declared `prepareQueryBuilder()` and `addColumns()`. We can prepare grid by defining these two methods

    - `prepareQueryBuilder()`: In this method, records are retrieved through queries that is applicable on database and stored in a collection. When records are retrieved, `$this->setQueryBuilder($queryBuilder)` setQueryBuilder method is called.

    - `setQueryBuilder()`: This method is written in DataGrid file of UI package. This is used for setting the `$queryBuilder`.

        ~~~php
        public function prepareQueryBuilder()
        {
            $queryBuilder = DB::table('attributes')
                ->select('id')
                ->addSelect('id', 'code', 'admin_name', 'type', 'is_required', 'is_unique', 'value_per_locale', 'value_per_channel');

            $this->setQueryBuilder($queryBuilder);
        }
        ~~~

    - `addColumns()`: In this method, the columns are created which are displayed in the grid. In this method, the parameter accepts the array in key-value pairs. Some of the essential keys are described below,

        |  Name      | functionality                                                                                                                                                                            |
        | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | index      | This key is defined in the grid, and the value assigned to this key must be unique, so that data will be uniquely identified and operations performed will be based on your index value. |
        | label      | In this key, the name of the column is defined.                                                                                                                                          |
        | type       | This key accepts the type of data in column.                                                                                                                                             |
        | searchable | This accepts boolean values `true` or `false` to make the column searchable.                                                                                                             |
        | sortable   | This accepts boolean values `true` or `false` to make the column sortable.                                                                                                               |
        | filterable | This accepts boolean values `true` or `false` to make the column filterable.                                                                                                             |
        | wrapper    | Perform actions based on condition satisfied or some customization to value.                                                                                                             |

        ~~~php
        public function addColumns()
        {
            $this->addColumn([
                'index' => 'id',
                'label' => trans('admin::app.datagrid.id'),
                'type' => 'number',
                'searchable' => false,
                'sortable' => true,
                'filterable' => true
            ]);

            $this->addColumn([
                'index' => 'code',
                'label' => trans('admin::app.datagrid.code'),
                'type' => 'string',
                'searchable' => true,
                'sortable' => true,
                'filterable' => true
            ]);
        }
        ~~~

    - `prepareActions()`: Additionally, this method is defined when there is a need to perform any action such as edit or delete on the grid. In this method, `addAction()` is called to define particular action.

    - `addAction()`: It is used for adding actions (like `edit`, `delete`, etc) to each row generated by Datagrid.

        |  Name        | Functionality                                                            |
        | ------------ | ------------------------------------------------------------------------ |
        | title        | The text to be displayed in written here.                                |
        | method       | HTTP methods are declared.                                               |
        | route        | This key accepts the route of icon.                                      |
        | icon         | Class of icon to be displayed in action column you may prefer text also. |

        ~~~php
        public function prepareActions()
        {
            $this->addAction([
                'title' => trans('admin::app.datagrid.edit'),
                'method' => 'GET',
                'route' => 'admin.catalog.attributes.edit',
                'icon' => 'icon pencil-lg-icon'
            ]);

            $this->addAction([
                'title' => trans('admin::app.datagrid.delete'),
                'method' => 'POST',
                'route' => 'admin.catalog.attributes.delete',
                'icon' => 'icon trash-icon'
            ]);
        }
        ~~~

::: warning

- Use JavaScript with wrapper property set to true when needed.
- Return static blade files loaded with scripts in it with caution.

:::

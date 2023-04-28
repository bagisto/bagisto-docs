# DataGrid

DataGrid is just a concept of displaying your database records in tabular format. We have implemented this in Bagisto either you can use it to display data in tabular format or write code from scratch to display data in tabular format. In addition to DataGrid, we have implemented additional features such as sorting, filtering, mass action. You may refer to the table below for detailed information about the features.

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

## How DataGrid Works

1. We have created `DataGrid` abstract class in Webkul `Ui` package. In the DataGrid abstract class, a list of properties and methods are declared. So, while creating your own DataGrid you need to only extends the `Webkul\Ui\DataGrid\DataGrid` abstract class.

2. In `Webkul\Ui\DataGrid\DataGrid.php` abstract class, two abstract methods are declared `prepareQueryBuilder()` and `addColumns()`. We can prepare grid by defining these two methods

    - `prepareQueryBuilder()`: In this method, records are retrieved through queries that is applicable on database and stored in a collection. When records are retrieved, `$this->setQueryBuilder($queryBuilder)` setQueryBuilder method is called.

    - `setQueryBuilder()`: This method is written in DataGrid abstract class of Webkul `Ui` package. This is used for setting the `$queryBuilder`.

        ~~~php
        public function prepareQueryBuilder()
        {
            $queryBuilder = DB::table('posts')
                ->select('id', 'title', 'status', 'created_at', 'updated_at')
                ->where('user_id', '=', auth()->guard('admin')->user()->id);

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
                'label' => trans('blog::app.admin.datagrid.id'),
                'type' => 'number',
                'searchable' => false,
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
                'title' => trans('blog::app.admin.datagrid.edit'),
                'method' => 'GET',
                'route' => 'admin.blog.edit',
                'icon' => 'icon pencil-lg-icon'
            ]);
        }
        ~~~

## Multiple DataGrids

As the default Datagrid will handle only a single request at a time which means filtration, sorting and many other operations will get conflicted when you try to implement the multiple DataGrids. To overcome this we have provided a trait `ProvideDataGridPlus` in the namespace `Webkul\Ui\DataGrid\Traits`.

### Step-1

- Create a folder `Datagrids` in your package `src` folder, inside `Datagrids` folder, create a file `PostDataGrid.php` that extends DataGrid class from Webkul `Ui` package.

    ~~~php
    namespace Webkul\Blog\DataGrids;

    class PostDataGrid extends DataGrid
    {
        ...
    }
    ~~~

- Import the `ProvideDataGridPlus` trait in the mentioned class,

    ~~~php
    namespace Webkul\Blog\DataGrids;

    use Webkul\Ui\DataGrid\Traits\ProvideDataGridPlus;

    class PostDataGrid extends DataGrid
    {
        use ProvideDataGridPlus;

        ...
    }
    ~~~

- After that `toJson()` method will be available in the Datagrid instance which will provide data to the component.

### Step-2

- Now go to `AdminController`, there is an index method, just use the `toJson`.

    ~~~php
    use Webkul\Blog\DataGrids\PostDataGrid;

    class AdminController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\View\View
         */
        public function index()
        {
            if (request()->ajax()) {

                return app(PostDataGrid::class)->toJson();
            }

            return view('blog::admin.index');
        }

        ...
    }
    ~~~

### Step-3

- Now, in the view portion `views/admin/index.blade.php` use this component i.e. `datagrid-plus` and add the url from where it will load the json data.

    ~~~php
    <div class="page-content">
        ...

        <datagrid-plus src="{{ route('admin.blog.index') }}"></datagrid-plus>

        ...
    </div>
    ~~~
    
- Done, your datagrid is ready.

::: warning
Now you have to copy the below sample code to your own `PostDataGrid.php`. Because we have already mentioned all the methods and functions there. So, We can use this later in our example. 
:::

## DataGrid Sample

~~~php
<?php

namespace Webkul\Blog\DataGrids;

use Illuminate\Support\Facades\DB;
use Webkul\Ui\DataGrid\DataGrid;
use Webkul\Ui\DataGrid\Traits\ProvideDataGridPlus;

class PostDataGrid extends DataGrid
{
    use ProvideDataGridPlus;

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
        $queryBuilder = DB::table('posts')
            ->select('id', 'title', 'status', 'created_at', 'updated_at')
            ->where('user_id', '=', auth()->guard('admin')->user()->id);

        $this->setQueryBuilder($queryBuilder);
    }

    /**
     * Add columns.
     */
    public function addColumns()
    {
        $this->addColumn([
            'index' => 'id',
            'label' => trans('blog::app.admin.datagrid.id'),
            'type' => 'number',
            'searchable' => false,
            'sortable' => true,
            'filterable' => true
        ]);

        $this->addColumn([
            'index' => 'title',
            'label' => trans('blog::app.admin.datagrid.title'),
            'type' => 'string',
            'searchable' => true,
            'sortable' => true,
            'filterable' => false,
            'wrapper' => function ($value) {
                
                return substr($value->title, 0, 30);
            }
        ]);

        $this->addColumn([
            'index' => 'status',
            'label' => trans('blog::app.admin.datagrid.status'),
            'type' => 'boolean',
            'sortable' => true,
            'searchable' => false,
            'filterable' => true,
            'closure' => function ($value) {
                $html = '';

                if ($value->status) {
                    $html .= '<span class="badge badge-md badge-success">' . trans('blog::app.admin.datagrid.active') . '</span>';
                } else {
                    $html .= '<span class="badge badge-md badge-danger">' . trans('blog::app.admin.datagrid.inactive') . '</span>';
                }

                return $html;
            }
        ]);

        $this->addColumn([
            'index' => 'created_at',
            'label' => trans('blog::app.admin.datagrid.created_at'),
            'type' => 'datetime',
            'searchable' => true,
            'sortable' => true,
            'filterable' => true
        ]);

        $this->addColumn([
            'index' => 'updated_at',
            'label' => trans('blog::app.admin.datagrid.updated_at'),
            'type' => 'datetime',
            'searchable' => true,
            'sortable' => true,
            'filterable' => true
        ]);
    }

    /**
     * Prepare actions.
     */
    public function prepareActions()
    {
        $this->addAction([
            'title' => trans('blog::app.admin.datagrid.edit'),
            'method' => 'GET',
            'route' => 'admin.blog.edit',
            'icon' => 'icon pencil-lg-icon'
        ]);

        $this->addAction([
            'title' => trans('blog::app.admin.datagrid.delete'),
            'method' => 'POST',
            'route' => 'admin.blog.delete',
            'icon' => 'icon trash-icon'
        ]);
    }

    /**
     * Prepare mass actions.
     */
    public function prepareMassActions()
    {
        $this->addMassAction([
            'type' => 'update',
            'action' => route('admin.blog.massupdate'),
            'label' => trans('blog::app.admin.datagrid.massupdate'),
            'method'  => 'POST',
            'options' => [
                trans('blog::app.admin.datagrid.active')    => 1,
                trans('blog::app.admin.datagrid.inactive')  => 0,
            ],
        ]);

        $this->addMassAction([
            'type' => 'delete',
            'action' => route('admin.blog.massdelete'),
            'label' => trans('blog::app.admin.datagrid.massdelete'),
            'method'  => 'POST'
        ]);
    }
}
~~~

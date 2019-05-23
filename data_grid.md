---
title: DataGrid-Bagisto
layout: default
---

## DataGrid<span class="edit-github"><img src="/assets/images/icons/Icon-Pencil-Large.svg"/> <a href="https://github.com/bagisto/bagisto-docs/blob/master/data_grid.md">edit on github</a></span>

DataGrid is just a concept of displaying your database records in tabular format. We have implemented this system in Bagisto either you can use it to display data in tabular format or write code from scratch to display data in tabular format. In addition to datagrid, we have implemented additional features such as - sorting, filter, massAction . You may refer to below table for detailed information about the features.



### Global Properties of DataGrid

|  Name                     | functionality |
| ------------------------------- | ------------- |
|           :---:                 | :---:         |
|    index      | This variable is defined in  grid, and the value assigned to this variable must be unique i.e., id so that data will be uniquely identified and operations  performed will be based on your index variable   |
|    sortOrder      |  sortOrder is used to arrange the order in ascending/descending in the dataGrid file, we have to set sortOrder variable to asc/desc   |
|    queryBuilder      | It can be used to perform most database operations in your application  |
|    enableMassAction      | This accepts boolean values `true/false` to enable/disable the mass action on datagrid  |
|    enableAction      | This accepts boolean values `true/false` to enable/disable the action column of datagrid   |
|    paginate      |  While creating your grid file you have to declare paginate variable and set it to `true` to allow pagination on your page |
|    itemsPerPage      | In itemsPerPage, a numeric value is assigned to `itemsPerPage` variable to display items per page  |
| enableFilterMap |  this accepts boolean values `true/false` to enable/disable the filter on the basis of columns |

## Steps for how to create DataGrid

1. Create a folder 'DataGrid' in your package, inside it create a file for your datagrid folder.

2. We have created `DataGrid` abstract class in  `UI` package. In DataGrid file, a list of properties and methods are declared. So, while creating datagrid only you have to extend the DataGrid abstract class and use it in your datagrid file.

3. In DataGrid abstract class, two abstract methods are declared `prepareQueryBuilder()` and `addColumns()` . We can prepare  grid by defining these two methods

    * **prepareQueryBuilder()** : In this method, records are retrieved through queries that is applicable on database and stored in a array. When records are retrieved,                           `$this->setQueryBuilder($queryBuilder)`
    setQueryBuilder method is called

       * ***setQueryBuilder()*** : This method is written in DataGrid file of UI package. This is used for setting the `$queryBuilder` array


    * **addColumns()** : In this method, the columns are created to be displayed in grid. Inside this method, `addColumn()` is called to create single column. Inside this function, parameter accepts the array in `"key" => "value"` pairs. Some of the essential keys are described below :

    |  Name                     | functionality |
| ------------------------------- | ------------- |
|           :---:                 | :---:         |
|    index      | This variable is defined in  grid, and the value assign to this variable must be unique i.e., id so that data will be uniquely identified and operation  perform will be based on your index variable   |
|    label      |  In this key, the name of column is defined  |
|    type      | This key accepts the type of data in column  |
|    searchable      |  This accepts boolean values `true/false` to make the column searchable |
|    sortable      |  This accepts boolean values `true/false` to make the column sortable |
|    filterable      |  This accepts boolean values `true/false` to make the column filterable  |
|    wrapper      |  |


   * **prepareActions()** : Additionally, this method is defined when there is need to perform any action such as edit or delete on grid. Inside it, `addAction()` is called to define particular action

       * ***addAction()*** : It is defined when you want to add action a number of times for individual action to be performed on grid

    |  Name                     | functionality |
| ------------------------------- | ------------- |
|            :---:                 | :---:         |
|    type      | Edit/delete |
|    method      |  HTTP verbs are written on basis of operation |
|    route      | This key accepts the route of icon |
|    icon      |  class of icon to be displayed in action column you may prefer text also |
|    confirm_text  | A confirm box is open on clicking action icon  if you want the user to verify or accepts something. you can include message here |
|  label  | The text to be displayed in written here, you may use translation also here  |



## ***Warning***

* ***Use JavaScript with wrapper perperty set to true when really needed***

* ***Return static blade files loaded with scripts in it with caution***
---
title: Creating shipping method-Bagisto
layout: default
---

## Shipping Method<span class="edit-github"><img src="/docs/assets/images/Icon-Pencil-Large.svg"/> <a href="https://github.com/bagisto/bagisto-docs/blob/master/create_shipping_method.md">edit on github</a></span>

I hope that you know how to create package, if not(refer ( [Package development](create_module.md)), and I will skip package development step



<!-- ### Step-1

* Inside packages folder of bagisto, create a folder of your company namespace and inside it create a folder with your package name.
Ex – Here namespace is specified as ACME
packages/ACME/HelloWorldPackage

### Step-2
* Inside your package create a file named as package.json and a folder named as 'src', we will use it later.

### Step-3
* Inside ‘src’ folder create a folder named as ‘Providers’ and under it create a file named as ‘PackagenameServiceProvider.php’.

    Ex – HelloWorldServiceProvider.php

    This Service Provider (HelloWorldServiceProvider.php) consist two methods.
    1. boot
    2. register

''' <?php

namespace ACME\HelloWorld\Providers;

use Illuminate\Support\ServiceProvider;

/**
 * HelloWorld service provider
 *
 * @author    Jane Doe <janedoe@gmail.com>
 * @copyright 2018 Webkul Software Pvt Ltd (http://www.webkul.com)
 */
class HelloWorldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

    }
}


### Step-4

* Now you need to register this service provider, for which open ‘app.php’ file inside ‘config’ folder of root & add your service provider inside ‘providers’ array.

    'providers' => [

    //ACME package

    ACME\HelloWorld\Providers\HelloWorldServiceProvider::class,

    ],


### Step-5
 * Now we need to add our package to ‘composer.json’ file of our project root directory for autoloading in psr-4.

    "psr-4": {

        "ACME\\HelloWorld\\": "packages/ACME/HelloWorld"

    }


### Step-6
* Now we are going to add some routing & views to our package.

    1) For route: create a ‘Http’ folder inside ‘src’ folder of your package & inside this folder (Http) create a file name as ‘routes.php’. In this file, we can create routes of our project & route file name can be according to need. For Example: admin-routes.php, shop-routes.php.

Now, we need to register our route file to service provider’s boot method i.e. HelloWorldProvider.php

    public function boot()

    {
        include __DIR__ . '/../Http/routes.php';

    }

To load routes, you can also use ‘loadRoutesFrom’ method.

2) For view: Create a ‘Resources’ folder inside ‘src’ folder of your project.

Inside ‘Resources’ folder create a folder name as ‘views’.

Now, in this ‘views’ folder, we can create a views for our package. We can create multiple folder inside view to distinguish
views according to need.

Right, Now we are going to create a folder ‘helloworld’ inside the views. In this ‘helloworld’ folder we will create a file name as helloworld.blade.php.

Now just like route file, we also need to register our view folder inside serviceprovider to specify path where views are located.

 public function boot()

 {

    $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'helloworld');

 }


### Step-7
* Now, we need to create route & render a view on that route.

Inside routes.php file create a simple route to render view as below.

```<?php

 Route::view('/hello-world', 'helloworld::helloworld.helloworld');

Now, you can append ‘hello-world’ to your local path in the browser's url to see the output.



### Step-8

* Now, we are going to create language file for our package.

For this create a ‘lang’ folder inside ‘Resources’ folder.

Inside this lang folder, you can create a different folder for languages like for English 'en' , Hindi ‘in’ etc. Right now, we will create a folder name ‘en’ & inside
the ‘en’ folder, create a file name as ‘app.php’.

Now, we need to register the language file to our service provider as we did previously.

public function boot()

{

    $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'helloworld');

}

Now we can write translation in app.php like below.

return [
    'hello-world' => [
        'name' => 'Jane Doe'
    ]
];

### Step-9

->Now we will add Database to our package.

Create a ‘Database’ folder inside ‘src’ folder & inside ‘Database’ create ‘Migrations’ & ‘Seeders’ folder.

In Migrations, create table migrations & seeders for your packages in respective folders. Now, we need to add migrations to our service provider to load them.

 public function boot()

 {

     $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');

 }


### Step-11

    Now, it's time to create controllers for our packages. To create controllers, we can create 'Controllers' folder inside 'Http' folder e.g., UserController.php


class UserController extends Controller
{

}


Here, as you can see the controller 'UserController.php' extends the class Controller. Below,is the code for Controller class


`<?php

namespace ACME\HelloWorld\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController

{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

}

## How to Add Menu in Admin/Customer <a id="add-menu"></a>

### Step-12
-> Now, we will show how to add menu in Admin.
For this one we need to create a ‘Config’ folder inside ‘src’.
Inside this src folder, create a file name as 'menu.php'.

`<?php

return [

    [

        'key' => 'helloworld',      // uniquely defined key for menu-icon

        'name' => 'Hello World',    //  name of menu-icon

        'route' => 'helloworld.index',  // the route for your menu-icon

        'sort' => 1,    // Sort number on which your menu-icon should display

        'icon-class' => 'dashboard-icon',   //class of menu-icn

    ]

];

?>

 Here, as we can see these are in 'key' => 'value' pairs where

Now for that route we need to create a controller.

So inside Controllers we will create HelloWorldController.php.

`class HelloWorldController extends Controller

{

    protected $_config;

    public function __construct()

    {

        $this->_config = request('_config');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()

    {

        return view($this->_config['view']);

    }

}

## How to Create routes in Bagisto? <a id="create-routes"></a>

For the route we will create a name route as

    Route::get('hello-dashboard',

    'ACME\HelloWorld\Http\Controllers\HelloWorldController@index')->defaults('_config',

    ['view' => 'helloworld::helloworld.index'

    ])->name('helloworld.index');


After creating controller & route we need to merge this menu.php folder with core menu file.For this purpose we will use method  ‘mergeConfigFrom’ method in our Service Provider register() method.


public function register()

{

    $this->mergeConfigFrom(

          dirname(__DIR__) . '/Config/menu.php', 'menu.admin'

     );

}

## Custom Configuration <a id="custom-configuration"></a>

Creating a custom configuration ease the task for developer or any non-developer person. It lets you option of enable/disable with the dropdown or any input *type* attribute. Generally, in bagisto, you can find it in admin panel **Configuration menu** .

### Steps to create custom configuration

* To create custom configuration for your application, you just need to create system.php file under *config* folder of your package.

* Inside the file, you can include the below code as shown in image

![Custom Configuration file](assets/images/Bagisto_Docs_Images/custom-configuration.png){: height="50%" width="100%"}


### Explanation for the keys:

* **key** : these values provided are unique and nested with '.' (dot) operator. After creation of two nested, other keys written are display in browser in form of accordian {figure needed}

* **name** : these keys accept the value as placeholder of your configuration. Generally, in bagisto, we consider writing it using translation.

* **sort** : these key accept the sort position for the configuration menu.

* **fields** : these key accepts the array for the value of custom configuration.

## Render View for custom menu <a id="view-render-for-menu"></a>

Now, the menu will be added in your menu bar. -->

## Steps to create shipping methods

* User need to create a file named as `carriers.php` at `src/config` path in the package. Here, we are going to specify what to include in your `carriers.php` file.

    ```php
    <?php

    return [
        'FedEx' => [
            'code' => 'fedex',
            'title' => 'FedEx',
            'description' => 'FedEx Shipping',
            'active' => true,
            'type' => 'per_unit',
            'class' => 'ACME\FedEx\Carriers\FedEx',
            ]
    ];
    ```

### Parameters needed for explanation

1. code : unique value used for referring the particular menu

2. title : label/name to display at user interface

3. description : about your shipping method.

4. active : enable/disable option for shipping method

5. type : these field specifies that the shipping method apply as per_unit or
   per_order

6. class : path specified with filename 'namespace\package-name\Carriers-folder\filename'


* And, `Carriers` named folder inside `src` folder. We will now create a file name as our shipping method name for better understandability inside Carriers folder e.g., Fedex.php

    1. File `Fedex.php` will extends AbstractShipping class which is defined at `Webkul\Shipping\Carriers\AbstractShipping`. Inside this file, the methods are defined that you can use while creating shipping method.

    2. Now, you can write all operations needed for your shipping method in `Fedex.php` file

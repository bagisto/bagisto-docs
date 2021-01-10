# Access Control List

[[toc]]

## Introduction
In addition to providing authentication services out of the box, Bagisto also provides a functionality **ACL** (Access Control List).  
With this feature the administrator can allow/disallow other users to access parts of Bagisto.

## Create a new ACL file
Create a new file named as `acl.php` inside your package **config** folder, for example `packages/ACME/HelloWorld/src/Config` and add the following code.

````php
<?php

return [
    [
        'key' => 'helloworld',
        'name' => 'HelloWorld',
        'route' => 'helloworld.admin.index',
        'sort' => 2
    ]
];
````

The array is created for an individual's menu with the parameters (key, name, route, sort). All we need to do is define the menu which we want to include with our ACL.
After that for changes, we need to merge the acl config also just like we have done with menu items,

  ````php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\Facades\Event;
  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
  */
  class HelloWorldServiceProvider extends ServiceProvider
  {
      /**
      * Register services.
      *
      * @return void
      */
      public function register()
      {
          $this->mergeConfigFrom(
              dirname(__DIR__) . '/Config/admin-menu.php', 'menu.admin'
          );

          $this->mergeConfigFrom(
              dirname(__DIR__) . '/Config/acl.php', 'acl'
          );
      }
  }
  ````
::: details Output
![Admin ACL Output](../../assets/images/package-development/admin-acl-output.png)
:::

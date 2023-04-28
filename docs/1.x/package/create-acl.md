# Access control list

In addition to providing authentication services out of the box, Bagisto also provides a functionality **ACL** (Access Control List). With this feature the administrator can allow/disallow other users to access parts of Bagisto.

### Step-1

Create a new file named `acl.php` in your package **Config** folder, for example, `packages/Webkul/Blog/src/Config` and add the following code.

~~~php
<?php

return [
    [
        'key' => 'blog',
        'name' => 'blog',
        'route' => 'blog.admin.index',
        'sort' => 2
    ]
];
~~~

If you check the above code we have created an array for an individual's menu with the parameters (key, name, route & sort).

Just like that, we need to define the menu here which we want to include in our ACL.

### Step-2

After that, we need to merge the ACL config also just like we have done with menu items,

  ~~~php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\Facades\Event;
  use Illuminate\Support\ServiceProvider;

  /**
  * BlogServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
  */
  class BlogServiceProvider extends ServiceProvider
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
  ~~~

After setting up, just run this command `php artisan optimize` to cached the latest changes.

Now check the latest ACL.

![Admin ACL Output](../../assets/images/package-development/admin-acl-output.png)

## Checking roles and permissions

- If you check the `Admin` model in the namespace `Webkul\User\Models`, you will see the relationship binding with the `Role` model in the same namespace. From here you can grab all the permissions of the current user.

- We have provided the `bouncer()` helper, which helps you to check the permissions. Let's check the current user has permission or not,

  ~~~php
  bouncer()->hasPermission($permission)
  ~~~

# Access Control List

[[TOC]]

## Introduction

Bagisto's Access Control List (ACL) feature enhances security by allowing administrators to finely manage user access across different application sections. It enables precise control over permissions, ensuring users only access authorized resources and actions. By defining roles and assigning privileges based on organizational structures or responsibilities, Bagisto's ACL strengthens governance, safeguards sensitive data, and ensures compliance with policies. This capability supports a secure and customizable user experience, adapting permissions dynamically to meet evolving organizational needs, thereby enhancing operational efficiency.

## Directory Structure

To configure Access Control List (ACL) settings in Bagisto, follow these structured steps:

### Create Configuration File

 Begin by creating a new file named `acl.php` within the `Config` directory of your package located at `packages/Webkul/Blog/src/Config`:

```
└── packages
      └── Webkul
         └── Blog
            └── src
                  ├── ...
                  └── Config
                     ├── acl.php
                     └── ...
```

### Define ACL Configuration

Inside `acl.php`, define ACL settings using an array format. Each array element represents a menu item or resource with parameters such as key, `name`, `route`, and `sort`. Here’s an example:
 
Add the following code to `acl.php`:

```php
<?php

return [
      [
         'key'   => 'blog',
         'name'  => 'blog',
         'route' => 'blog.admin.index',
         'sort'  => 2
      ]
];
```

In the above code, we have defined an array for each menu item with the parameters (key, name, route, and sort). You need to define the menus you want to include in the ACL here.

## Merge ACL Configuration

To merge the ACL configuration, follow these steps:

### Modify Service Provider

Navigate to the `BlogServiceProvider` class within the `Webkul\Blog\Providers` namespace.

### Register Method

Inside the `register` method of your service provider, use the mergeConfigFrom method to merge your ACL configuration file:

```php
   <?php

   namespace Webkul\Blog\Providers;

   use Illuminate\Support\ServiceProvider;

   class StripeServiceProvider extends ServiceProvider
   {
      /**
      * Register services.
      *
      * @return void
      */
      public function register()
      {
         //...
         
         $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/acl.php', 'acl'
         );
      }
   }
   ```

Ensure that the path specified in mergeConfigFrom matches the location of your acl.php file.

This will merge the ACL configuration with the existing configuration.

### Clear Configuration Cache

After making changes, clear the configuration cache to apply the latest ACL configuration:

```sh
php artisan optimize
```

### Verify in Admin Panel

Check the updated ACL configuration within the admin panel to confirm that menu items are correctly displayed and sorted according to your configuration.

This will ensure that the latest ACL configuration is used.

## Checking Roles and Permissions

To manage roles and permissions effectively:

### Access Roles

In the Admin model located in `Webkul\User\Models`, utilize the relationship with the Role model to manage `roles` associated with users.

### Permission Checks

Use the `bouncer()` helper function to verify if a user has specific permissions. Example usage:

```php
bouncer()->hasPermission($permission)
```

Replace `$permission` with the actual permission you want to check.

By following these steps, you can seamlessly configure and manage Access Control List (ACL) settings in Bagisto, ensuring secure and controlled access to administrative functionalities.


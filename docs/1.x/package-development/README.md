# Package development

A package is a unit added to your application for enhancement which includes routes, controllers, views, and configuration specifically. Packages are created to manage your large applications into smaller units.

There are two ways to create a package.

1. By using Bagisto Package Generator (**Recommended**)
2. By manually setting up all files (**Expert Level**)

In Bagisto, we have created plenty of packages at path `packages/Webkul/`. You can find a basic tree-structure of the package below:

~~~directory-structure
- Webkul/Blog/
  - publishable/assets
    - css/
    - images/
    - js/
  - src/
    - Config/
      - acl.php
      - admin-menu.php
    - Console/
      - Commands/
    - Contracts/
    - Database/
      - Migrations/
      - Seeders/
    - Events/
    - Http/
      - Controllers/
        - Admin/
          - AdminController.php
        - Shop/
          - ShopController.php
      - Middleware/
      - Requests/
    - Listeners/
    - Mail/
    - Models/
    - Providers/
      - BlogServiceProvider.php
      - ModuleServiceProvider.php
    - Routes
      - admin-routes.php
      - shop-routes.php
    - Repositories/
    - Resources/
      - assets/
        - images/
        - js/
          - app.js
        - sass/
          - admin.scss
          - default.scss
          - velocity.scss
      - lang/
      - views/
        - admin/
          - layouts/
            - style.blade.php
          - index.blade.php
        - shop/
          - default/
            - index.blade.php
          - velocity/
            - index.blade.php
  - package.json
  - webpack.mix.js
~~~

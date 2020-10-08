# Package Development

A package is a unit added to your application for enhancement which includes routes, controllers, views, and configuration specifically. Packages are created to manage your large applications into smaller units.

In Bagisto, we have created plenty of packages at path `packages/Webkul/`. You can find a basic tree-structure of the package below:

~~~
- ACME/HelloWorld/
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
          - HelloWorldController.php
        - Shop/
          - HelloWorldController.php
      - Middleware/
      - Requests/
      - admin-routes.php
      - shop-routes.php
    - Listeners/
    - Mail/
    - Models/
    - Providers/
      - HelloWorldServiceProvider.php
      - ModuleServiceProvider.php
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
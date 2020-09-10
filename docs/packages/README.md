# Package Development

A package is a unit added to your application for enhancement which includes routes, controllers, views, and configuration specifically. Packages are created to manage your large applications into smaller units.  
In the bagisto, we have created plenty of packages at path `packages/Webkul/`. You can find a basic tree-structure of package below:

```php
- module-name/
  - src/
    - Config/
    - Contracts/
    - Database/
    - Events/
    - Helpers/
    - Http/
      - Controllers/
      - Middleware/
      - Routes/
    - Listeners/
    - Models/
    - Providers/
      - ModuleServiceProvider.php
      - EventServiceProvider.php
    - Repositories/
    - Resources/
      - assets/
      - lang/
      - views/
  - package.json
  - webpack.mix.js
```
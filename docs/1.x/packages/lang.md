# Lang

### Step-1

- Now, we are going to create a language file for our package. For this create a `lang` folder in the `packages/Webkul/Blog/src/Resources` path.

- In `lang` folder, you can create a different folder for language translations like for English 'en', Hindi ‘hn’ etc. Moving forward, we will create a folder name `en` (say language code) and in that folder, create a file name as `app.php` to perform language translation.

  ::: details Updated directory structure

  ```
  - packages/
    - Webkul/Blog/
      - src/
        ...
        - Resources/
          ...
          - lang/
            - en/
              - app.php
  ```

  :::

### Step-2

- Now, we need to register the language file to the service provider.

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * BlogServiceProvider
  *
  * @copyright 2023 Webkul Software Pvt. Ltd. (http://www.webkul.com)
  */
  class BlogServiceProvider extends ServiceProvider
  {
      /**
      * Bootstrap services.
      *
      * @return void
      */
      public function boot()
      {
          $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
          
          $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'blog');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'blog');
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
  ```

### Step-3

- Now we can write a translation in `app.php` like below,

  ```php
  <?php

  return [
      'admin' => [
          'name' => 'John Doe'
      ]
  ];
  ```

### Step-4

- Add below code to your blade file.

  ```html
  {{ __('blog::app.admin.name') }}
  ```

  ::: details Admin Output

  ![Translation Output](../../assets/images/package-development/blog-admin-lang-output.png)

  :::

  ::: details Shop Output

  ![Translation Output](../../assets/images/package-development/blog-shop-lang-output.png)

  :::
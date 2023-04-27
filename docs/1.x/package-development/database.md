# Adding Database

### Step-1

- Now we will add Database to our package. Create a `Database` folder in `packages/Webkul/Blog/src` path and inside `Database` folder create `Migrations` and `Seeders` folder.

    ::: details Updated directory structure

    ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Database/
            - Migrations/
            - Seeders/
    ```
    :::

### Step-2

- Now, we need to add migrations to our service provider to load them.

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\Facades\Event;
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
          $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'blog');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'blog');

          $this->publishes([
              __DIR__ . '/../../publishable/assets' => public_path('vendor/webkul/blog/assets'),
          ], 'public');

          Event::listen('bagisto.admin.layout.head', function($viewRenderEventManager) {
              $viewRenderEventManager->addTemplate('blog::admin.layouts.style');
          });

          $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
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

- Now run this command `php artisan make:migration create_posts_table --path=packages/Webkul/Blog/src/Database/Migrations`.

- Now update your migration file `create_posts_table.php`. Add below codes to this file.

  ```php
  <?php

  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;
  use Illuminate\Support\Facades\Schema;

  return new class extends Migration
  {
      /**
       * Run the migrations.
       *
       * @return void
       */
      public function up()
      {
          Schema::create('posts', function (Blueprint $table) {
              $table->id();
              $table->string('title')->nullable();
              $table->longText('description')->nullable();
              $table->integer('user_id');
              $table->tinyInteger('status')->default(1);
              $table->timestamps();
          });
      }

      /**
       * Reverse the migrations.
       *
       * @return void
       */
      public function down()
      {
          Schema::dropIfExists('posts');
      }
  };

  ```

- Now run `php artisan migrate`. Now `posts` table is created inside your database.

::: warning
  Before that provide your database credentials in your `.env` file respectively.
:::



# Adding Assets

### Step-1

- Now we will add CSS, JS and images to our package.

- In `Resources` folder creates a folder name `assets` & create `sass`, `js` and `images` folder.

  - In **sass** folder, add file **_admin.scss_**, **_default.scss_**, and **_velocity.scss_**

  - In **js** folder, add file **app.js**

::: details Updated directory structure

```text
- packages/
    - Webkul/Blog/
      - src/
        ...
        - Resources/
          - assets/
            - sass/
              - admin.scss
              - default.scss
              - velocity.scss
            - js/
              - app.js
            - images/
```
:::

### Step-2

- To add assets, create `package.json` and `webpack.mix.js` file inside the root of your package i.e. `packages/Webkul/Blog`.

- Copy below code to `package.json`,

  ```json
  {
    "scripts": {
        "dev": "npm run development",
        "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
        "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
        "watch-poll": "npm run watch -- --watch-poll",
        "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
        "prod": "npm run production",
        "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
    },
    "devDependencies": {
        "cross-env": "^7.0.2",
        "laravel-mix": "^5.0.1",
        "laravel-mix-merge-manifest": "^0.1.2",
        "sass": "^1.62.0",
        "sass-loader": "^8.0.2",
        "vue-template-compiler": "^2.7.14"
    }
  }

  ```

- Copy below code to `webpack.mix.js`,

  ```javascript
  const mix = require("laravel-mix");

  if (mix == "undefined") {
    const { mix } = require("laravel-mix");
  }

  require("laravel-mix-merge-manifest");

  if (mix.inProduction()) {
    var publicPath = "publishable/assets";
  } else {
    var publicPath = "../../../public/vendor/webkul/blog/assets";
  }

  mix.setPublicPath(publicPath).mergeManifest();

  mix.disableNotifications();

  mix
    .js([__dirname + "/src/Resources/assets/js/app.js"], "js/blog.js")
    .copyDirectory(
        __dirname + "/src/Resources/assets/images",
        publicPath + "/images"
    )
    .sass(
        __dirname + "/src/Resources/assets/sass/app.scss",
        "css/admin.css"
    )
    .sass(
        __dirname + '/src/Resources/assets/sass/default.scss',
        'css/default.css'
    )
    .sass(
        __dirname + '/src/Resources/assets/sass/velocity.scss',
        'css/velocity.css'
    )
    .options({
        processCssUrls: false,
    });

    if (mix.inProduction()) {
        mix.version();
    }
  ```

- After doing this go to the root of your package i.e. `packages/Webkul/Blog` and run `npm install` which will install all dependencies.

- Now, your all `scss` and `js` files is ready to use. Write all your css and js here.

- When you done with your changes, then run `npm run prod` which will compiled all your css, js and images to the publishable folder. Then register your publishable in `BlogServiceProvider`,

  ::: tip

  You can use `npm run watch` also, this will watch all your changes and put all your changes to the public path. When you done with all your changes then run `npm run prod` to compile all your changes and move to publishable folder.

  :::

### Step-3

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
          $this->loadRoutesFrom(__DIR__ . '/../Routes/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Routes/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'blog');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'blog');

          $this->publishes([
              __DIR__ . '/../../publishable/assets' => public_path('vendor/webkul/blog/assets'),
          ], 'public');
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

### Step-4

- After doing this we need to add an event listener so that admin layouts include our CSS. For this we need to add an Event Listener in service provider. But before adding event, let's create a `layouts` folder within `/Resources/views/admin`, `/Resources/views/shop/default`, and `/Resources/views/shop/velocity`. 

::: details Updated directory structure

```text
- packages/
    - Webkul/Blog/
      - src/
        ...
        - Resources/
            ...
          - views
            - admin
              - layouts/
            - shop/
              - default/
                - layouts
              - velocity/
                - layouts
```
:::

- And inside each layouts folder create a file called `style.blade.php` & mention compiled CSS path inside this file.

- Copy below code to `admin/layouts/style.blade.php`

  ```html

  <link rel="stylesheet" href="{{ asset('vendor/webkul/blog/assets/css/admin.css') }}"/>
  ```

- Copy below code to `shop/default/layouts/style.blade.php`

  ```html

  <link rel="stylesheet" href="{{ asset('vendor/webkul/blog/assets/css/default.css') }}"/>
  ```

- Copy below code to `shop/velocity/layouts/style.blade.php`

  ```html

  <link rel="stylesheet" href="{{ asset('vendor/webkul/blog/assets/css/velocity.css') }}"/>
  ```

### Step-5

- **For Event Listener:** Add facade 'Event' into your `BlogServiceProvider.php` file,

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

          Event::listen('bagisto.shop.layout.head', function($viewRenderEventManager) {
              $viewRenderEventManager->addTemplate('blog::shop.default.layouts.style');
          });

          Event::listen('bagisto.shop.layout.head', function($viewRenderEventManager) {
              $viewRenderEventManager->addTemplate('blog::shop.velocity.layouts.style');
          });
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
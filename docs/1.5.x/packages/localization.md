# Localization

[[TOC]]

To learn in detail about Localization, you can visit the Laravel documentation [here](https://laravel.com/docs/10.x/localization).

## Directory Structure

- Now, let's create a language file for our package. Create a **`lang`** folder in the **`packages/Webkul/Blog/src/Resources`** path.

- Inside the **`lang`** folder, you can create different folders for language translations. For example, you can create folders for English ('en'), Hindi ('hi'), etc. For now, let's create a folder named **`en`** (representing the language code). Inside the **`en`** folder, create a file named **`app.php`** for language translation.

  ```
  └── packages
      └── Webkul
          └── Blog
              └── src
                  ├── ...
                  └── Resources
                      ├── ...
                      └── lang
                          └── en
                              └── app.php
  ```

- Now, let's write a translation in **`app.php`** as follows:

  ```php
  <?php

  return [
      'admin' => [
          'name' => 'John Doe'
      ]
  ];
  ```

## Load Translation from Package

- We need to register the language file in the service provider.

  ```php
  <?php

  namespace Webkul\Blog\Providers;

  use Illuminate\Support\ServiceProvider;

  class BlogServiceProvider extends ServiceProvider
  {
     /**
      * Bootstrap services.
      *
      * @return void
      */
      public function boot()
      {
          //... 

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'blog');
      }
  }
  ```

- Add the following code to your Blade file:

  ```html
  {{ __('blog::app.admin.name') }}
  ```

  ::: details Admin Output

  ![Translation Output](../../assets/1.5.x/images/package-development/blog-admin-lang-output.png)

  :::

  ::: details Shop Output

  ![Translation Output](../../assets/1.5.x/images/package-development/blog-shop-lang-output.png)

  :::
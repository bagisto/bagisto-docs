# Store Theme

[[TOC]]

## Configuration

To configure the store theme in Bagisto, follow these steps:

1. Go to your project's root directory and locate the **`config`** folder. Inside the **`config`** folder, you will find a file named **`themes.php`**.

    ```
    - app
    - bin
    - bootstrap
    - config
      ├── ...
      └── themes.php
    - database
    - packages
      └── Webkul
    ```

2. Open the **`themes.php`** file to examine its contents. This file contains all the necessary information for creating a custom theme in Bagisto.

    ```php
    <?php

    return [
        'default' => 'default',

        'themes' => [
            'default' => [
                'views_path' => 'resources/themes/default/views',
                'assets_path' => 'public/themes/default/assets',
                'name' => 'Default'
            ],

            'velocity' => [
                'views_path' => 'resources/themes/velocity/views',
                'assets_path' => 'public/themes/velocity/assets',
                'name' => 'Velocity',
                'parent' => 'default'
            ],
        ],
    ];
    ```

3. Let's go through the parameters defined in the **`themes.php`** file as understanding them will help you in creating a custom theme.

### Explanation of Parameters:

- **default**: This parameter at the top of the file indicates the currently active or default theme in Bagisto. It is set to **`'default'`**, representing the name of the currently active theme.

- **themes**: This parameter allows you to define the configurations for your custom themes. You can create and use multiple themes simultaneously in Bagisto.

    - Inside the **`'themes'`** array, there is another array named **`'default'`**, which represents your currently active theme. It contains several key-value pairs that are explained below:

        - **views_path**: This parameter specifies the path to the views or blade files for your custom theme.

        - **assets_path**: It determines the path to the assets such as images, CSS files, and JavaScript files for your theme.

        - **name**: This parameter defines a global name for your theme inside Bagisto.

        - **parent**: This is an optional parameter that allows you to customize existing themes in Bagisto. By setting the **`'parent'`** parameter to the value of the **`'name'`** parameter listed above, you can inherit the configuration of the parent theme and make further customizations.

4. Once you have defined the paths and names for your custom theme in the **`themes.php`** file, you can start creating your view files. Make sure to cover all the GET routes of the shop package that include a parameter called **`'view'`**. You can find the route file of the shop package located at **`packages/Webkul/Shop/src/Http/routes.php`**.

5. Ensure that the name of your blade file matches the value passed in the GET route file. For example:

    ```php
    // Store front header nav-menu fetch
    Route::get('/categories/{slug}', 'Webkul\Shop\Http\Controllers\CategoryController@index')
    ->defaults('_config', [
        'view' => 'shop::products.index'
    ])->name('shop.categories.index');
    ```

    In this example, the view file should be named **`index.blade.php`** and placed in the appropriate directory within your custom theme.

6. For all the views, check all the GET routes as they include a **`'view'`** parameter with the corresponding value to be used.

By following these steps, you can configure and create custom view files for your store theme in Bagisto. This allows you to personalize the appearance and layout of your storefront to align with your branding and provide an enhanced user experience.
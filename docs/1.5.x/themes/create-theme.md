# Store Theme

[[TOC]]

## Configuration

- Go to your project’s root directory and check for **`config`** folder. Inside **`config`** folder, you will find a file called **_`themes.php`_** like directory below:

    ```
        - app/
        - bin/
        - bootstrap/
        - config/
           ...
           - themes.php
        - database/
        - packages/Webkul
    ```

- Check contents of **_`themes.php`_** file, it holds all necessary information of creating a custom theme.

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

- Let’s go through the parameters of **_themes.php_** file. Because understanding those parameters will help you in creating a custom theme.

### Explanation For Parameters:

- default: Declared at the top signifies the currently active or default theme in Bagisto. It is assigned with the value 'default’. The default(string) indicates the name of the currently active theme.

- themes: This parameter is where you’ve to define all essentials for your own custom theme. Multiple themes can also be created and used at the same time in Bagisto.

    - Inside 'themes’ there is another array by name 'default' which is your currently active theme containing some key-value pairs.

        - **default:** Inside array 'default', it holds few more key-value pairs. such as 'views_path', 'assets_path', 'name’ all those are explained below:

           - **views_path:** It’ll take the path of your views or blade files that you want to put up in your custom theme.

           - **assets_path:** Responsible for your assets i.e. images, CSS and javascript files, etc.

           - **name:** Defines a global name for your theme inside Bagisto.

           - **parent:** This is a magic parameter that you can find in the commented code below the sub-array 'default'. Using            this parameter you can make use of existing themes inside Bagisto and just customize them even further. This        parameter will take the value of the 'name’ parameter listed in the 3rd point above.

- Finally, define your own paths and name of your custom theme inside **_themes.php_** file, and start creating view files. Do not forget to cover all get routes of shop package having a parameter called 'view’. You can get route file of shop package located at `packages/Webkul/Shop/src/Http/routes.php`

- Make sure the name of the blade file should be the same one as passed in this GET route file like this:

    ```php
    //Store front header nav-menu fetch
        Route::get('/categories/{slug}', 'Webkul\Shop\Http\Controllers\CategoryController@index')
        ->defaults('_config', [
            'view' => 'shop::products.index'
        ])->name('shop.categories.index');
    ```

- For all views check all GET routes as they hold a view parameter with the value of view to be used.

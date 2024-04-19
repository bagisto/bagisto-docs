# Admin Theme

[[TOC]]

## Configuration

To configure the admin theme in Bagisto, follow these steps:

1. Locate the **themes.php** file inside the **config** folder located in your project's root directory. Look for the keys **admin-default** and **`admin`**. The configuration will appear as follows:

    ```php
    <?php
    return [
        'admin-default' => 'default',

        'admin' => [
            'default' => [
                'name'        => 'Default',
                'assets_path' => 'public/themes/admin/default',
                'views_path'  => 'resources/admin-themes/default/views',

                'vite'        => [
                    'hot_file'                 => 'admin-default-vite.hot',
                    'build_directory'          => 'themes/admin/default/build',
                    'package_assets_directory' => 'src/Resources/assets',
                ],
            ],
        ],
    ];
    ```

    | Key            | Description                              |
    | -------------- | ---------------------------------------- |
    | admin-default  | Sets the current theme for the admin area |
    | admin          | Stores a list of available themes         |

## Creating a Theme

To create a new admin theme, follow these steps:

**1.** To add a new theme entry to the **admin** array in the **themes.php** file, please follow these steps:

    ```php
    <?php
    return [
        'admin-default' => 'default',

        'admin' => [
            'default' => [
                'name'        => 'Default',
                'assets_path' => 'public/themes/admin/default',
                'views_path'  => 'resources/admin-themes/default/views',

                'vite'        => [
                    'hot_file'                 => 'admin-default-vite.hot',
                    'build_directory'          => 'themes/admin/default/build',
                    'package_assets_directory' => 'src/Resources/assets',
                ],
            ],

            'new-theme' => [
                'name'        => 'new-theme',
                'assets_path' => 'public/themes/admin/new-theme',
                'views_path'  => 'resources/admin-themes/new-theme/views',

                'vite'        => [
                    'hot_file'                 => 'admin-new-theme-vite.hot',
                    'build_directory'          => 'themes/admin/new-theme/build',
                    'package_assets_directory' => 'src/Resources/assets',
                ],
            ],
        ],
    ];
    ```

**2.** In the new theme entry, specify the path to the views and assets folders according to your desired structure. For example:

    - Views structure:

      ```
      - resources
        └── admin-themes
            └── new-theme
                └── views
      ```

    - Assets structure:

      ```
      - public
        └── admin-themes
            └── new-theme
                └── assets
      ```

**3.** To replace the dashboard page with a custom version, create the same directory structure for the dashboard in the **`new-theme`** folder as it exists in the **`default`** folder. For example:

    ```
    - resources
      └── admin-themes
          └── new-theme
              └── views
                  └── dashboard
                      └── index.blade.php
    ```

**4.** In the newly created **`index.blade.php`** file, add the desired content for the dashboard page. For example:

    ```php
    New Theme Sample
    ```

**5.** Finally, activate the new theme by changing the value of the **`admin-default`** key in the **`config/themes.php`** file:

    ```php
    'admin-default' => 'new-theme',
    ```

Now, when you access the dashboard page in the admin area, you should see the customized version provided by the new theme (New Theme).

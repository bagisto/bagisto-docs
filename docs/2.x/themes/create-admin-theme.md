# Admin Theme

[[TOC]]

## Configuration

To configure the admin theme in Bagisto, follow these steps:

1. In the Bagisto root directory, navigate to the **config** folder and open the **`themes.php`** file. Look for the keys **`admin-default`** and **`admin-themes`**. The configuration will appear as follows:

    ```php
    <?php
    return [
        'admin-default' => 'default',

        'admin-themes' => [
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
    | admin-themes   | Stores a list of available themes         |

## Creating a Theme

To create a new admin theme, follow these steps:

1. Add a new theme entry to the **`admin-themes`** array in the **`themes.php`** file:

    ```php
    <?php
    return [
        'admin-default' => 'default',

        'admin-themes' => [
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

            'theme1' => [
                'name'        => 'Theme1',
                'assets_path' => 'public/themes/admin/theme1',
                'views_path'  => 'resources/admin-themes/theme1/views',

                'vite'        => [
                    'hot_file'                 => 'admin-theme1-vite.hot',
                    'build_directory'          => 'themes/admin/theme1/build',
                    'package_assets_directory' => 'src/Resources/assets',
                ],
            ],
        ],
    ];
    ```

2. In the new theme entry, specify the path to the views and assets folders according to your desired structure. For example:

    - Views structure:

      ```
      - resources
        └── admin-themes
            └── theme1
                └── views
      ```

    - Assets structure:

      ```
      - public
        └── admin-themes
            └── theme1
                └── assets
      ```

3. To replace the dashboard page with a custom version, create the same directory structure for the dashboard in the **`theme1`** folder as it exists in the **`default`** folder. For example:

    ```
    - resources
      └── admin-themes
          └── theme1
              └── views
                  └── dashboard
                      └── index.blade.php
    ```

4. In the newly created **`index.blade.php`** file, add the desired content for the dashboard page. For example:

    ```php
    Theme 1 Sample
    ```

5. Finally, activate the new theme by changing the value of the **`admin-default`** key in the **`config/themes.php`** file:

    ```php
    'admin-default' => 'theme1',
    ```

Now, when you access the dashboard page in the admin area, you should see the customized version provided by the new theme (Theme 1).
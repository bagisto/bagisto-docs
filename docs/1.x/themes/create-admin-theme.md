# Admin Theme

- In the Bagisto root directory go to the **config** folder and open `themes.php`. Now search for the keys `admin-default` and `admin-themes`. It will look like this,

  ```php
  <?php
    return [
        'admin-default' => 'default',

        'admin-themes' => [
            'default' => [
                'views_path' => 'resources/admin-themes/default/views',
                'assets_path' => 'public/admin-themes/default/assets',
                'name' => 'Default'
            ]
        ]
    ];
  ```

  | Key | Description|
  | --- | ---------- |
  | admin-default | is used to set the current theme. |
  | admin-themes | is used to store a list of themes |

- Now add one more theme into `admin-themes`.

  ```php
  <?php
    return [
        'admin-default' => 'default',

        'admin-themes' => [
            'default' => [
                'views_path' => 'resources/admin-themes/default/views',
                'assets_path' => 'public/admin-themes/default/assets',
                'name' => 'Default'
            ],

            'theme1' => [
              'views_path' => 'resources/admin-themes/theme1/views',
              'assets_path' => 'public/admin-themes/theme1/assets',
              'name' => 'Theme 1'
            ]
        ]
    ];
  ```

- As you see we have added the view and assets path in the `theme1` array. Now set your views and assets folder according to your mentioned path. The resources structure will look like this

  ::: details Folder Structure
  ~~~php
      - resources
        - admin-themes
          - theme1
            - views
  ~~~
  :::

- Assets structure will look like this,

  ::: details Folder Structure
  ~~~php
      - public
        - admin-themes
          - theme1
            - assets
  ~~~
  :::

- Now lets replace the dashboard page. Just create the exact dashboard's directory structure for `theme1` as present in `default`. So it will look like this,

  ::: details Folder Structure
  ~~~php
      - resources
        - admin-themes
          - theme1
            - views
              - dashboard
                  - index.blade.php
  ~~~
  :::

- Add some lines to the `index.blade.php`,

  ~~~php
      Theme 1 Sample
  ~~~

- Now everything is setup. Just one thing is pending i.e. we need to activate the theme. So, for that we need to change the `admin-default` key in file `config/themes.php`.

  ~~~php
      ...
      'admin-default' => 'theme1',
      ...
  ~~~

- Now check the dashboard page.

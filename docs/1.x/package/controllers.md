# Creating Controller

### Step-1

  - **For Controller**: Create `Http` folder in `packages/Webkul/Blog/src` path. In `Http` folder, create another folder name as `Controllers`. Now, in the `Controllers` folder, we need to create one file `Controller.php` and two folders i.e. `Admin` and `Shop`. Inside `Admin` folder create `AdminController.php`, and within `Shop` folder create `ShopController.php`. So updated structure will look like this.

    ::: details Updated directory structure

    ```
    - packages/
      - Webkul/Blog/
        - src/
          ...
          - Http/
            ...
            - Controllers/
              - Controller.php
              - Admin/
                - AdminController.php
              - Shop
                - ShopController.php
    ```
    :::

    - `Controller`: This is base controller, Add below codes to this file.

      ```php
      <?php

      namespace Webkul\Blog\Http\Controllers;

      use Illuminate\Foundation\Bus\DispatchesJobs;
      use Illuminate\Routing\Controller as BaseController;
      use Illuminate\Foundation\Validation\ValidatesRequests;
      use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

      class Controller extends BaseController
      {
          use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
      }
      ```

    - `AdminController`: This file is for the admin usage. Add below codes to this file.

      ```php
      <?php

      namespace Webkul\Blog\Http\Controllers\Admin;

      use Webkul\Blog\Http\Controllers\Controller;

      class AdminController extends Controller
      {
         
      }
      ```

    - `ShopController`: This file is for the shop usage. Add below codes to this file.

      ```php
      <?php

      namespace Webkul\Blog\Http\Controllers\Shop;

      use Webkul\Blog\Http\Controllers\Controller;

      class ShopController extends Controller
      {
         
      }
      ```
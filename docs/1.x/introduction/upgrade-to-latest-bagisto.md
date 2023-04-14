# Upgrade to the latest version of Bagisto

To upgrade your current version to the latest version of Bagisto, you need to follow some steps,

- First, you need to download the latest version of Bagisto.

- You can download Bagisto from the following links,

  - [Download From Official Bagisto Site](https://bagisto.com/en/download/)
  - [Download From Github](https://github.com/bagisto/bagisto)

- After downloading the Bagisto zip file, you need to extract where you want to deploy it. 
- After extract the file, you need to go to the root folder of the extracted folder and run the below command in the terminal.

  ~~~sh
  composer create-project
  ~~~

- After the command has been executed, now go to your `.env` file, provide your old project database credentials for which you want to upgrade Bagisto, and run the following command,

  ~~~sh
  php artisan optimize

  # -- OR

  php artisan config:cache
  ~~~

- Now, your new changes have been cached and now your project is ready to run the migrate command,

  ~~~sh
  php artisan migrate
  ~~~

  ::: danger
    Here we have not provided you the seeder command because the seeder command always resets all the settings, categories and etc. If some tables need default settings then we advise you to add manually.
  :::

- Now, its time to create a symlink so that public assets can be linked to storage,

  ~~~sh
  php artisan storage:link
  ~~~

- Copy all the content of the previous version's folder (e.g. `old-project/storage/app/public`) to the latest version's folder (e.g. `new-project/storage/app/public`).

  ::: tip
    If your existing project also depends on some local storage, or you have changed some paths, or you want previous logs also then make sure you add all those also.
  :::

- Once this is finished run the following command to publish your new files,

  ~~~sh
  php artisan vendor:publish --all
  ~~~

  ::: warning
    Don't use the `--force` flag, this will reset all your views. Use only when you know what you are doing.
  :::

You are now at the latest version. Still, we want to mention that if you have done a lot of customizations then that portion of compatibility should be handled at your end.

## Bagisto Changes

### These are the changes from the version 1.4.5 to 1.5.0

- Implemented Elasticsearch
- Added count of selected products in Datagrid
- Change the checkbox in dark mode
### These are the changes from the version 1.4.4 to 1.4.5

- Invoice Design is enhanced
- Now there is an option to filter suspended customers

### These are the changes from the version 1.4.3 to 1.4.4

- Preview option in the CMS pages
- Added clear all filters in Datagrid
- Optimized product
- Image icon of user profile image

### These are the changes from the version 1.4.2 to 1.4.3

- Command For Bagisto Publish
- Give option to enable WYSIWYG editor in configuration
- Option to remove all cart items at once
- Improvement on products listing
- Option for a sitemap generator

### These are the changes from the version 1.4.1 to 1.4.2

- Added Back to Top Button
- Process to checkout button is disabled if the product is out of stock

### These are the changes from the version 1.4.0 to 1.4.1

- Option to export selected product
- Colors of checkboxes is now according to the theme

### These are the changes from the version 1.3.3 to 1.4.0

- Now send duplicate invoice to the customer
- Address is in horizontal format
- Now you can Suspend customers
- Rest API Enhancement In Sanctum
- Written All Factories In Laravel 8 Pattern
- Now you can use AWS storage
- Feature to share Wishlist
- API for customers to cancel order

### These are the changes from the version 1.3.3 to 1.4.0

#### Added one composer dependency (High Severity)

- Added `diglactic/laravel-breadcrumbs` for breadcrumbs in the frontend shop. Make sure to run the `composer install`, if you are upgrading the existing project.
- Moved all the old APIs to a separate package i.e. `bagisto/legacy-api`. If you are getting exceptions then just go to `bootstrap/cache` and delete all the files and then run `composer install`. After the installation, run `php artisan optimize`.

#### Changes from the datagrid (High Severity)

- Implemented the ajaxified datagrid, see [#5756](https://github.com/bagisto/bagisto/pull/5756)

#### Revamped admin theme (High Severity)

- Added a new admin theme with features of multi-locale switcher, real time notification for admin upon order creation or updation and dark theme for admin panel.

#### Changes in factories (Medium Severity)

- Dropped laravel legacy factories dependencies and refactored all models to use Laravel 8 class factories. If you have used it in modules try to upgrade or just install the dependency when needed.

#### Changes in routes (Medium Severity)

- In admin, shop and velocity packages, this file `packages/Webkul/<package-name>/src/Http/routes.php` is moved to `packages/Webkul/<package-name>/src/Routes/web.php` this path. So if you are upgrading the existing project just make sure the provider registry is updated.

### These are the changes from the version 1.3.1 to 1.3.2

#### Changes from the web vital (Medium Severity)

- For the velocity theme, the `velocity.js` file is divided into two files i.e. `velocity-core.js` and the `velocity.js` file. In `velocity-core.js`, all core dependencies like jQuery, bootstrap js, Vue js are added and in `velocity.js` all the components are present which is bootstrapped by the `velocity-core.js`.

- All these components are minified now, `quantity-changer`, `mini-cart`, `slider-component`, and `searchbar-component`.

- These components are added `hot-categories`, `popular-categories`, `sidebar-header`, `right-side-header` and `mobile-header`.

- In `velocity.js`, this component `VueToast` has been removed. As no traces were found in the core. If you are using this then make sure you add it to your module dependencies.

- This folder  i.e. `packages/Webkul/Velocity/src/Resources/views/shop/UI` is completely removed. The files inside this folder contain the components which are already minified so not needed. Make sure if you included these files in your modules, use the direct component rather than including the file.

- In this folder i.e. `packages/Webkul/Velocity/src/Resources/views/shop/layouts/particals` three files (`compare.blade.php`, `wishlist.blade.php` and `search-bar.blade.php`) are given. All these files are having individual components. For `compare.blade.php` and `wislist.blade.php`, you can use the `isText` prop to disable the text for mobile.

- Reference PR: [#5020](https://github.com/bagisto/bagisto/pull/5020)

#### Changes from security fixes (High Severity)

- These routes i.e. `address.delete`, `customer.orders.cancel`, `customer.review.delete`, `customer.review.deleteall`, `shop.movetowishlist`, `customer.wishlist.add`, `customer.wishlist.remove` and `customer.wishlist.removeall` methods are changed from `GET` to `DELETE` and `POST` respectively. `GET` is only use for retrieving data.

- Maybe if you forgot to change then surely this will impact your project. Make sure it should be updated and also run `php artisan optimize` command.

- Reference PR: [#4996](https://github.com/bagisto/bagisto/pull/4996), [#4998](https://github.com/bagisto/bagisto/pull/4998) and [#5052](https://github.com/bagisto/bagisto/pull/5052)

#### Downloadable product medias are moved to private disk (Medium Severity)

- If someone facing broken downloadale links, this is because of the privatization of the paid links, in this case move your downloadable links folder to a private disk, and the broken link got fixed.

- If still broken then take a reference from the below PR and adjust the storage data.

- Reference PR: [#4966](https://github.com/bagisto/bagisto/pull/4966)

#### Changes from invoice prefixes (Medium Severity)

- Moved sequencer class from shop package to sales package, as orders and invoices are part of the sales. This will not impact as there is only one key and that one is in the repository.

- Enhanced and scaled the `Sequencer` class.

- As per the existing project perspective, `increment_id` by default is going null, so for displaying portion it will first check `increment_id` if not found then it will give the actual `id`.

- In the core config, moved all the invoice settings to the new tab name `Invoice Settings` so make sure reset the value for the `Invoice Slip Design`.

- Reference PR: [#4956](https://github.com/bagisto/bagisto/pull/4956)

#### Changes from `.env` (Low Severity)

- Just capitalized the  `fixer_api_key` in `.env` to have consistency and `.env` standard.

- If you have this key in your `.env` and you are using this just make sure you capitalize your key also.

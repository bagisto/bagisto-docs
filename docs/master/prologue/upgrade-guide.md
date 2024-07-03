# Upgrade Guide

[[TOC]]

## Upgrade Steps

To upgrade your current version to the latest version of Bagisto, follow these steps:

1. Download the latest version of Bagisto from one of the following links:
   - [Download From Official Bagisto Site](https://bagisto.com/en/download/)
   - [Download From GitHub](https://github.com/bagisto/bagisto)

2. Extract the downloaded Bagisto zip file to the desired deployment location.

3. Open the terminal and navigate to the root folder of the extracted Bagisto folder.

4. Run the following command in the terminal:

   ```sh
   composer create-project
   ```

   This command will install the necessary dependencies for the latest version of Bagisto.

5. Open the **`.env`** file in your project's root folder. Provide the database credentials of your old project, which you want to upgrade using Bagisto.

6. Run one of the following commands to cache the new changes:

   ```sh
   php artisan optimize

   # -- OR --

   php artisan config:cache
   ```

   These commands will cache the configuration files and optimize the project.

7. Now, your project is ready to run the migration command. Execute the following command in the terminal:

   ```sh
   php artisan migrate
   ```

   ::: danger
   Be cautious when using the seeder command as it may reset settings and categories. Add default settings manually if necessary.
   :::

8. Create a symbolic link to link public assets to the storage folder by running the following command:

   ```sh
   php artisan storage:link
   ```

9. Copy the contents of the previous version's folder (e.g., **`old-project/storage/app/public`**) to the corresponding folder in the latest version (e.g., **`new-project/storage/app/public`**).

   ::: tip
   If your existing project depends on local storage, has changed paths, or requires previous logs, ensure to include those as well.
   :::

10. Once the copying is complete, publish the new files by running the following command:

    ```sh
    php artisan vendor:publish --all
    ```

    ::: warning
    Avoid using the **`--force`** flag, as it will reset all your views. Only use it if you understand the consequences.
    :::

11. Congratulations! Your project is now upgraded to the latest version of Bagisto. However, keep in mind that if you have made significant customizations, ensure compatibility with the latest version.


## New Changes

The following changes have been implemented in Bagisto from version 2.1 to 2.2:


For more information, please visit the [Bagisto changelog on GitHub](https://github.com/bagisto/bagisto/blob/v2.2.1/CHANGELOG.md).


#### Changes in the latest release

We are excited to announce the release of version [master](https://github.com/bagisto/bagisto) of Bagisto, which includes numerous enhancements and improvements. To ensure a smooth transition to this latest version, we have prepared a comprehensive upgrade guide.

For the upgrade guide visit [Bagisto UPGRADE.md on GitHub](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md).






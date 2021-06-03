# Upgrade to the latest version of Bagisto

To upgrade your current version to the latest version of Bagisto, you need to follow some steps,

- First, you need to download the latest version of Bagisto.

- You can download Bagisto from the following links,

  - [Download From Official Bagisto Site](https://bagisto.com/en/download/)
  - [Download From Github](https://github.com/bagisto/bagisto)

- After downloading the latest version, run the specified commands in the terminal,

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

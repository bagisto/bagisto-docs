# Create models

- Models typically live in the `app` directory, but you are free to place them anywhere that can be auto-loaded according to your `composer.json` file. All Eloquent models extend `Illuminate\Database\Eloquent\Model` class.

- The simple way to create a model is executing the command `make:model` artisan command,

    `php artisan make:model Post`

- After creating model, to generate database migration, you may append `--migration or -m option` artisan command as stated below,

    `php artisan make:model Post --migration`
    `php artisan make:model Post -m`

::: warning

  We are already made a file for migration so we don't need to make a migration for the `Post` Model. But, If you wish you can make new migration through the above command and you have to copy older migration code to a newer migration file.

:::  
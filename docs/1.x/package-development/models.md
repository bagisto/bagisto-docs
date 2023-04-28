# Create models

- Models typically live in the `app` directory, but you are free to place them anywhere that can be auto-loaded according to your `composer.json` file. All Eloquent models extend `Illuminate\Database\Eloquent\Model` class.

- The simple way to create a model is executing the command `make:model` artisan command,

    `php artisan make:model Post`

::: tip
Do not make a model here. We will make a model later in this tutorial.
:::

- After creating model, to generate database migration, you may append `--migration or -m option` artisan command as stated below,

    `php artisan make:model Post --migration`
    `php artisan make:model Post -m`

::: warning

  We have already created a migration for the `posts` table, so we don't need to create a migration for it. But, if you want you can do another migration through above command.
:::  
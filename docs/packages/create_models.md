# Create Models

## Create model by using Bagisto Package Generator

- This command will create a following files,
  - New model class in `packages/ACME/HelloWorld/src/Models` directory.
  - New model proxy class in `packages/ACME/HelloWorld/src/Models` directory.
  - New model contract in `packages/ACME/HelloWorld/src/Contracts` directory.

  `php artisan package:make-model User ACME/HelloWorld`

## Create model by normal laravel commands

- Models typically live in the `app` directory, but you are free to place them anywhere that can be auto-loaded according to your `composer.json` file. All Eloquent models extend `Illuminate\Database\Eloquent\Model` class.

- The simple way to create a model is executing the command `make:model` artisan command,

    `php artisan make:model User`

- After creating model, to generate database migration, you may append `--migration or -m option` artisan command as stated below,

    `php artisan make:model User --migration`
    `php artisan make:model User -m`
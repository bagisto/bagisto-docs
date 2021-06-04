# Create migrations

You can create migration in two ways,

1. By using Bagisto Package Generator.
2. By normal laravel command and then manually copy to the respective folder.

## By using Bagisto Package Generator

This command will create a new migration class in `packages/ACME/HelloWorld/src/Database/Migrations` directory.

`php artisan package:make-migration CreateUsersTable ACME/HelloWorld`

## By normal laravel command and then manually copy to the respective folder

To create a migration, use the `make:migration` artisan command:

`php artisan make:migration create_users_table`

The new migration will be placed in your `database/migrations` directory. Each migration file name contains a timestamp which allows Laravel to determine the order of the migrations.

The --table and --create options may also be used to indicate the name of the table and whether the migration will be creating a new table.

You may also specify a --path option when creating the migration. The path should be relative to the root directory of your installation:

`php artisan make:migration create_demo_table --path=packages/ACME/HelloWorld/src/Database/Migrations`
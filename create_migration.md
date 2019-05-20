---
title: Bagisto Introduction
layout: default
---

# What is Migration?<a id="what-is-migration"></a><sup><img src="/docs/assets/images/Icon-Pencil-Large.svg" width="19px" height="13px"/> <a class="nav-link" href="https://github.com/bagisto/bagisto-docs">Edit On github</a></sup>

Migrations are like version control for your database, allowing your team to easily modify and share the application's database schema. Migrations are typically paired with Laravel's schema builder to easily build your application's database schema. If you have ever had to tell a teammate to manually add a column to their local database schema, you've faced the problem that database migrations solve.

The Laravel Schema facade provides database agnostic support for creating and manipulating tables across all of Laravel's supported database systems.

# How to create Migrations ?<a id="create-migrations"></a>

To create a migration, use the make:migration Artisan command:

>php artisan make:migration create_users_table

The new migration will be placed in your database/migrations directory. Each migration file name contains a timestamp which allows Laravel to determine the order of the migrations.

The - -table and - -create options may also be used to indicate the name of the table and whether the migration will be creating a new table.

Also, Laravel provides us a option to create migration files at a specified path. The command to create migration file at our HelloWorld package database/migrations directory, we have to append '- -path' in artisan command.

> php artisan make:migration create_demo_table - -path=packages/ACME/HelloWorld/src/Database/Migrations
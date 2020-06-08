---
title: Upgrading To bagisto 1.0.0 from 0.2.2 | Bagisto Web APIs Documentation
layout: default
---

# Upgrading To bagisto 1.0.0 from 0.2.2

If you want to migrate your project to bagisto v1.0.0, then you need to follow the guidelines listed below:

1. Make sure you have added git remote of our project `Bagisto`.

2. Ensure you do not have any changes to be committed, if have, then do the respective commit before executing the commands below.

1. Run command `git reset --hard tag_name`, where  tag_name specifies the tag to which you want your project to be migrated.

2. Delete composer.lock and vendor from root

3. Run command `composer install`

4. Run command `php artisan migrate`

5. Run command `php artisan vendor:publish`

        -> Press 0 and then press enter to publish all assets and configurations.

6. Check for folder `node_modules` in folder `shop`, `UI`, `admin`.

    1. If it exist, then delete the `node_modules` and `package-lock.json`. And then, run command `npm install` and `npm run watch` on folder `shop`, `UI`, `admin`.

    2. If it doesn't exist, then run the command `npm install` and `npm run watch` on folder `shop`, `UI`, `admin`.


**Note**:
* The changes in core packages will be removed, if done.

* Backup of additional modules/packages must be done. And, those modules need to be configure after version migration.
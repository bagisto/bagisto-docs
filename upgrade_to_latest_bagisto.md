---
title: Upgrade to latest Version-Bagisto
layout: default
---

# Upgrade to latest version of Bagisto

To Upgrade your current version to latest version of bagisto, you need to follow some steps

- Firstly, you need to download the latest version of bagisto. You can download from these two provided links

1.  [Download Bagisto](https://bagisto.com/en/download/){: target="\_blank" .link-color}.
2.  [Download from Github](https://github.com/bagisto/bagisto){: target="\_blank" .link-color}.

- Now, after the download has been completed. Run some commands in terminal

1. Run composer create-project

2. After the command has been executed. Within your **.env** file, enter your old project database credentials for which you want to upgrade the bagisto.

3. Run php artisan vendor:publish

   -> Press 0 and then press enter to publish all assets and configurations.

4. Copy storage folder of older version of bagisto to latest downloaded bagisto version. You may find storage folder in project root

5. Run php artisan storage:link

6. Run composer dump-autoload

## Revampment of cart & catalog rule

There is revampment of cart & catalog rule at code level. The user need to upgrade their bagisto version to v0.1.9 for the usage of our cart & catalog rule. To upgrade the module, below points must be followed:

1. Initially, user need to take backup of their project database.

2. Download [Bagisto v0.1.9](https://github.com/bagisto/bagisto/tree/v0.1.9){: target="\_blank" .link-color} zip.

3. Install bagisto v0.1.9 and import the database taken as backup in step 1 .
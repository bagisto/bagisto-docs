---
title: Upgrade to latest Version-Bagisto
---

# Upgrade to the latest version of Bagisto

To upgrade your current version to latest version of Bagisto, you need to follow some steps
First, you need to download the latest version of Bagisto.  

You can download Bagisto from the following links:
- [Download Bagisto](https://bagisto.com/en/download/).
- [Download from Github](https://github.com/bagisto/bagisto)

Now, after the downloading the latest version, run the specified commands in the terminal
```sh
composer create-project
```

After the command has been executed, within your **_.env_** file, enter your old project database credentials for which you want to upgrade bagisto and run the following command
```
php artisan migrate
```

Once this is finished run the following command
```
php artisan vendor:publish
 -> Press 0 and then press enter to publish all assets and configurations.
```

Copy the **storage** folder of an older version of bagisto to the latest downloaded bagisto version.  
You may find the **storage** folder in project root.
```sh
php artisan storage:link
composer dump-autoload
```

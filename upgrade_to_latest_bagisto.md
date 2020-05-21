---
title: Upgrade to latest Version-Bagisto
layout: default
---

# Upgrade to the latest version of Bagisto

To upgrade your current version to latest version of bagisto, you need to follow some steps

- Firstly, you need to download the latest version of bagisto. You can download from these two provided links

1.  [Download Bagisto](https://bagisto.com/en/download/){: target="\_blank" .link-color}.
2.  [Download from Github](https://github.com/bagisto/bagisto){: target="\_blank" .link-color}.

- Now, after the download has been completed. Run some commands in terminal

         composer create-project

- After the command has been executed. Within your **_.env_** file, enter your old project database credentials for which you want to upgrade the bagisto.

         php artisan vendor:publish

        -> Press 0 and then press enter
        to publish all assets and configurations.

- Copy **storage** folder of an older version of bagisto to the latest downloaded bagisto version. You may find **storage** folder in project root.

        php artisan storage:link

        composer dump-autoload

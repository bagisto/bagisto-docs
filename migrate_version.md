---
title: Migrate versions | Bagisto Web APIs Documentation
layout: default
---

# Upgrading To 6.0 From 5.6

If you want to migrate your project to the bagisto v1.0.0, then you need to follow some guidelines as listed below:

1. Initially, the user needs to take a backup of their project database.
2. Delete composer.lock and vendor.
3. Execute command "`composer install`"
4. Install bagisto 1.0.0 (follow [Installation guide](index.md/#installation)).


**Note**: In addtion, you may refer to [Laravel upgrade guide](https://laravel.com/docs/6.x/upgrade){: target="\_blank" .link-color} for migration of your packages.
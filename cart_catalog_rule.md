---
title: Revampment of cart & catalog rule | Bagisto Web APIs Documentation
layout: default
---

## Revampment of Catalog & Cart rule

There is a revamping of cart & catalog rule at the code level. The user needs to upgrade their bagisto version to v0.1.9 for the usage of our cart & catalog rule. To upgrade the module, below points must be followed:

1. Initially, the user needs to take a backup of their project database.

2. Take a pull from [Bagisto v0.1.9](https://github.com/bagisto/bagisto/tree/v0.1.9){: target="\_blank" .link-color}. There may be some conflicts, you need to resolve it by own.

3. Run `php artisan migrate` and `php artisan db:seed` command.

**Note** : The changes in core packages will be removed, if done.
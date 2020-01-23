---
title: Price Helper | Bagisto Web APIs Documentation
layout: default
---

# Price helper

As in the earlier version, there were some static checks of product type. So, in this release, we have taken care of it as a major concern and now check is replace with `$product->getTypeInstance()` which will dynamically check the product types. All the methods defined in price helper class are now defined in package `product/Type/AbstractType.php` file to make it generic for all product types and will be used from `AbstractType.php` file only.


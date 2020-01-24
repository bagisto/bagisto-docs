---
title: Bagisto 1.0.0 backward-incompatible changes | Bagisto Web APIs Documentation
layout: default
---

# Bagisto 1.0.0 backward-incompatible changes

In our latest release, Bagisto 1.0.0, we introduce many major changes that may affect the running functionality of external modules and packages. This topic will be highlighting about the compatibility changes from bagisto v0.2.2 to bagisto 1.0.0

As in the earlier version, there were some static checks of product type. So, in this release, we have taken care of it as a major concern and now those checks are replaced with `$product->getTypeInstance()` which will dynamically check the product types. The `price helper` class is now replaced with `AbstractType.php` file. All the methods defined in the price helper class are now defined in (product package `product/Type/AbstractType.php`) file to make it generic for all product types.

Files Changed

Below are some list of files, where changes are required to avoid compatibility issue

1. packages/Webkul/Admin/src/Listeners/Product.php(removed)

2. packages/Webkul/API/Http/Resources/Catalog/Product.php

3. packages/Webkul/Checkout/src/Cart.php

4. packages/Webkul/Product/src/Helpers/ConfigurableOption.php

5. packages/Webkul/Product/src/Listeners/ProductFlat.php

6. packages/Webkul/Shop/src/Resources/views/products/price.blade.php

7. packages/Webkul/Shop/src/Resources/views/products/review-price.blade.php (Removed)

8. packages/Webkul/Shop/src/Resources/views/products/reviews/index.blade.php

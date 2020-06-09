---
title: Bagisto 1.0.0 backward-incompatible changes | Bagisto Web APIs Documentation
layout: default
---

# Backward incompatible changes

In our latest release, Bagisto 1.0.0, we introduce many major changes that may affect the running functionality of external modules and packages. This topic will highlight the compatibility changes from bagisto v0.2.2 to bagisto 1.0.0

As in the earlier version, there were only two types of products simple and configurable but now we have introduced more than two types i.e., virtual, downloadable, grouped, bundled. Also earlier, the product creation system was too rigid, to overcome this we have use the concept of the abstract class `abstractType.php` file which needs to be extended and will contain all important basic methods related to product and their pricing. In this release, we have fetched all methods related to product and their pricing from abstract class `abstractType.php`. In our previous version, there was the use of price helper now `$product->getTypeInstance()` will be used appended with the method needed.

For example:  to get the minimum price for a product, we can append `getMinimalPrice()` in `$product->getTypeInstance`() as
```php
$product->getTypeInstance()->getMinimalPrice()
```

Below are some list of files, where changes are required to avoid compatibility issue

1. packages/Webkul/Admin/src/Listeners/Product.php (Removed)

2. packages/Webkul/API/Http/Resources/Catalog/Product.php

3. packages/Webkul/Checkout/src/Cart.php

4. packages/Webkul/Product/src/Helpers/ConfigurableOption.php

5. packages/Webkul/Product/src/Listeners/ProductFlat.php

6. packages/Webkul/Shop/src/Resources/views/products/price.blade.php

7. packages/Webkul/Shop/src/Resources/views/products/review-price.blade.php (Removed)

8. packages/Webkul/Shop/src/Resources/views/products/reviews/index.blade.php

9. packages/Webkul/Product/src/Helpers/Price.php (Removed)
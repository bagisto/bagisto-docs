# Understanding Carrier Configuration and Class

The carrier component is the heart of your shipping method, consisting of configuration that defines properties and a class that implements business logic.

::: info What You'll Learn
This section covers:
- Carrier configuration properties and their purposes
- AbstractShipping class methods and their implementations
- Rate calculation logic and best practices
- Error handling and validation techniques
:::

## Understanding the Carrier Configuration

Let's examine the generated `carriers.php` file and understand each configuration option:

**File:** `packages/Webkul/CustomExpressShipping/src/Config/carriers.php`

```php
<?php

return [
    'custom_express_shipping' => [
        'code'         => 'custom_express_shipping',
        'title'        => 'Custom Express Shipping',
        'description'  => 'Fast delivery for urgent orders',
        'active'       => true,
        'default_rate' => '15.00',
        'type'         => 'per_order',
        'class'        => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
    ]
];
```

::: info Configuration Properties Explained
**Essential Properties:**

- **`code`**: Unique identifier for your shipping method (must match class name)
- **`title`**: Display name shown to customers during checkout
- **`description`**: Brief explanation of the shipping method
- **`active`**: Boolean to enable/disable the shipping method
- **`default_rate`**: Base shipping cost (can be overridden by calculation logic)
- **`type`**: Pricing model - `per_unit` (per item) or `per_order` (flat rate)
- **`class`**: Full namespace path to your carrier class
:::

### Customizing Your Configuration

Let's enhance the configuration for a real-world express shipping method:

```php{5-9}
<?php

return [
    'custom_express_shipping' => [
        'code'         => 'custom_express_shipping',
        'title'        => 'Express Delivery (1-2 Days)',
        'description'  => 'Premium express shipping with tracking and insurance',
        'active'       => true,
        'default_rate' => '19.99',
        'type'         => 'per_order',
        'class'        => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
    ]
];
```

## Understanding the Carrier Class

The carrier class contains the business logic for your shipping method. Let's examine the generated file:

**File:** `packages/Webkul/CustomExpressShipping/src/Carriers/CustomExpressShipping.php`

```php
<?php

namespace Webkul\CustomExpressShipping\Carriers;

use Webkul\Shipping\Carriers\AbstractShipping;
use Webkul\Checkout\Models\CartShippingRate;

class CustomExpressShipping extends AbstractShipping
{
    /**
     * Shipping method code.
     */
    protected $code = 'custom_express_shipping';

    /**
     * Calculate shipping rate.
     */
    public function calculate()
    {
        if (! $this->isAvailable()) {
            return false;
        }

        $object = new CartShippingRate;
        $object->carrier = 'custom_express_shipping';
        $object->carrier_title = $this->getConfigData('title');
        $object->method = 'custom_express_shipping_custom_express_shipping';
        $object->method_title = $this->getConfigData('title');
        $object->method_description = $this->getConfigData('description');
        
        // Basic rate calculation
        $object->price = core()->convertPrice($this->getConfigData('default_rate'));
        $object->base_price = $this->getConfigData('default_rate');

        return $object;
    }
}
```

::: info Carrier Class Explained
**Key Components:**

- **`$code`**: Must match the code in your carriers.php configuration
- **`calculate()`**: Main method that returns shipping rates for the current cart
- **`isAvailable()`**: Built-in method that checks if shipping method should be offered
- **`getConfigData()`**: Helper to retrieve configuration values
- **`CartShippingRate`**: Object that contains all shipping rate information
:::

### Enhancing the Calculate Method

Let's add more sophisticated logic for express shipping:

```php{15-35}
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    
    $object = new CartShippingRate;
    $object->carrier = 'custom_express_shipping';
    $object->carrier_title = $this->getConfigData('title');
    $object->method = 'custom_express_shipping_custom_express_shipping';
    $object->method_title = $this->getConfigData('title');
    $object->method_description = $this->getConfigData('description');
    
    // Express shipping logic with weight-based pricing
    $baseRate = $this->getConfigData('default_rate');
    $totalWeight = 0;
    
    foreach ($cart->items as $item) {
        if ($item->product->getTypeInstance()->isStockable()) {
            $weight = $item->product->weight ?? 1; // Default weight if not set
            $totalWeight += $weight * $item->quantity;
        }
    }
    
    // Add weight surcharge for heavy packages
    $weightSurcharge = 0;
    if ($totalWeight > 5) { // 5kg threshold
        $weightSurcharge = ($totalWeight - 5) * 2; // $2 per kg over 5kg
    }
    
    $finalRate = $baseRate + $weightSurcharge;
    
    $object->price = core()->convertPrice($finalRate);
    $object->base_price = $finalRate;

    return $object;
}
```

## Key Takeaways

Understanding carrier configuration and classes is essential for building robust shipping methods:

**Configuration Best Practices:**
- ✅ Use descriptive and unique codes
- ✅ Provide clear titles and descriptions
- ✅ Set sensible default values
- ✅ Match class namespace exactly

**Implementation Best Practices:**
- ✅ Always check `isAvailable()` before calculating rates
- ✅ Use `core()->convertPrice()` for currency conversion
- ✅ Handle edge cases (empty carts, invalid products)
- ✅ Return `false` when shipping is not available

### Continue Learning

**📖 [Understanding System Configuration →](./understanding-system-configuration.md)**
Learn how to create admin interfaces for your shipping method settings.

**📖 [Advanced Rate Calculation Examples →](./advanced-rate-calculation-examples.md)**
Explore sophisticated pricing models and API integrations.


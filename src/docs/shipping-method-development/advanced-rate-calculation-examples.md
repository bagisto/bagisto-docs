# Advanced Rate Calculation Examples

Here are some common shipping rate calculation patterns:

## Free Shipping Threshold

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    $freeShippingAmount = $this->getConfigData('free_shipping_amount');
    
    // Free shipping if cart total exceeds threshold
    if ($freeShippingAmount && $cart->sub_total >= $freeShippingAmount) {
        $rate = 0;
    } else {
        $rate = $this->getConfigData('default_rate');
    }
    
    $object = new CartShippingRate;
    $object->carrier = 'custom_express_shipping';
    $object->carrier_title = $this->getConfigData('title');
    $object->method = 'custom_express_shipping_custom_express_shipping';
    $object->method_title = $this->getConfigData('title');
    $object->method_description = $this->getConfigData('description');
    $object->price = core()->convertPrice($rate);
    $object->base_price = $rate;

    return $object;
}
```

## Distance-Based Pricing

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    $shippingAddress = $cart->shipping_address;
    
    // Calculate distance (you would implement actual distance calculation)
    $distance = $this->calculateDistance($shippingAddress);
    
    $baseRate = $this->getConfigData('default_rate');
    $distanceRate = 0;
    
    if ($distance > 50) { // 50km threshold
        $distanceRate = ($distance - 50) * 0.5; // $0.50 per km over 50km
    }
    
    $finalRate = $baseRate + $distanceRate;
    
    $object = new CartShippingRate;
    // ... rest of the rate object setup
    $object->price = core()->convertPrice($finalRate);
    $object->base_price = $finalRate;

    return $object;
}
```
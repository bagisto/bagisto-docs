# Advanced Rate Calculation Examples

Once you have the basics working, you can implement sophisticated rate calculation logic to meet complex business requirements. This section provides real-world examples of advanced shipping calculations.

::: info What You'll Learn
This section covers:
- Free shipping threshold implementations
- Distance and weight-based pricing
- API integration for real-time rates
- Time-based and conditional pricing
- Error handling and fallback strategies
:::

## Common Rate Calculation Patterns

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

## Weight-Based Pricing with Tiers

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    $totalWeight = 0;
    
    // Calculate total weight
    foreach ($cart->items as $item) {
        if ($item->product->getTypeInstance()->isStockable()) {
            $weight = $item->product->weight ?? 0.5; // Default 0.5kg
            $totalWeight += $weight * $item->quantity;
        }
    }
    
    // Tiered weight pricing
    $rate = $this->getConfigData('base_rate');
    
    if ($totalWeight <= 1) {
        $rate = $this->getConfigData('light_rate'); // Under 1kg
    } elseif ($totalWeight <= 5) {
        $rate = $this->getConfigData('medium_rate'); // 1-5kg
    } elseif ($totalWeight <= 20) {
        $rate = $this->getConfigData('heavy_rate'); // 5-20kg
    } else {
        // Over 20kg - custom calculation
        $rate = $this->getConfigData('heavy_rate') + (($totalWeight - 20) * 2);
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

## API Integration Example

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    
    try {
        // Get real-time rates from shipping API
        $apiRate = $this->getAPIRate($cart);
        
        if ($apiRate === null) {
            // Fallback to configured rate if API fails
            $rate = $this->getConfigData('fallback_rate');
        } else {
            // Add margin to API rate
            $margin = $this->getConfigData('api_margin_percent') ?? 10;
            $rate = $apiRate * (1 + ($margin / 100));
        }
    } catch (\Exception $e) {
        // Log error and use fallback
        \Log::error('Shipping API error: ' . $e->getMessage());
        $rate = $this->getConfigData('fallback_rate');
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

/**
 * Get rate from external shipping API
 */
private function getAPIRate($cart)
{
    $apiUrl = $this->getConfigData('api_url');
    $apiKey = $this->getConfigData('api_key');
    
    if (! $apiUrl || ! $apiKey) {
        return null;
    }
    
    // Prepare API request data
    $requestData = [
        'origin' => $this->getConfigData('origin_postal_code'),
        'destination' => $cart->shipping_address->postcode,
        'weight' => $this->calculateTotalWeight($cart),
        'service_type' => 'express'
    ];
    
    // Make API call (implement according to your shipping provider)
    $response = Http::withHeaders([
        'Authorization' => 'Bearer ' . $apiKey,
        'Content-Type' => 'application/json'
    ])->post($apiUrl, $requestData);
    
    if ($response->successful()) {
        $data = $response->json();
        return $data['rate'] ?? null;
    }
    
    return null;
}
```

## Time-Based and Conditional Pricing

```php
public function calculate()
{
    if (! $this->isAvailable()) {
        return false;
    }

    $cart = Cart::getCart();
    $baseRate = $this->getConfigData('default_rate');
    
    // Weekend surcharge
    $currentDay = date('N'); // 1 (Monday) to 7 (Sunday)
    if ($currentDay >= 6) { // Saturday or Sunday
        $weekendSurcharge = $this->getConfigData('weekend_surcharge') ?? 5;
        $baseRate += $weekendSurcharge;
    }
    
    // Rush order surcharge (orders placed after 2 PM)
    $currentHour = (int) date('H');
    if ($currentHour >= 14) {
        $rushSurcharge = $this->getConfigData('rush_surcharge') ?? 10;
        $baseRate += $rushSurcharge;
    }
    
    // Holiday surcharge (implement your holiday logic)
    if ($this->isHolidayPeriod()) {
        $holidaySurcharge = $this->getConfigData('holiday_surcharge') ?? 15;
        $baseRate += $holidaySurcharge;
    }
    
    // Bulk discount for large orders
    if ($cart->items_count >= 10) {
        $bulkDiscount = $this->getConfigData('bulk_discount') ?? 5;
        $baseRate -= $bulkDiscount;
    }
    
    // Ensure minimum rate
    $minimumRate = $this->getConfigData('minimum_rate') ?? 5;
    $finalRate = max($baseRate, $minimumRate);
    
    $object = new CartShippingRate;
    $object->carrier = 'custom_express_shipping';
    $object->carrier_title = $this->getConfigData('title');
    $object->method = 'custom_express_shipping_custom_express_shipping';
    $object->method_title = $this->getConfigData('title');
    $object->method_description = $this->getConfigData('description');
    $object->price = core()->convertPrice($finalRate);
    $object->base_price = $finalRate;

    return $object;
}

/**
 * Check if current date is in holiday period
 */
private function isHolidayPeriod()
{
    $holidays = $this->getConfigData('holiday_dates'); // Comma-separated dates
    
    if (! $holidays) {
        return false;
    }
    
    $holidayDates = explode(',', $holidays);
    $currentDate = date('Y-m-d');
    
    return in_array($currentDate, $holidayDates);
}
```

## Best Practices for Advanced Calculations

### Error Handling
```php
public function calculate()
{
    try {
        if (! $this->isAvailable()) {
            return false;
        }
        
        // Your calculation logic here
        $rate = $this->performComplexCalculation();
        
        if ($rate === null || $rate < 0) {
            throw new \Exception('Invalid rate calculated');
        }
        
        return $this->createRateObject($rate);
        
    } catch (\Exception $e) {
        // Log the error
        \Log::error('Express Shipping calculation error: ' . $e->getMessage());
        
        // Return fallback rate or false
        $fallbackRate = $this->getConfigData('fallback_rate');
        
        return $fallbackRate ? $this->createRateObject($fallbackRate) : false;
    }
}
```

### Performance Optimization
```php
public function calculate()
{
    // Cache expensive calculations
    $cacheKey = 'express_shipping_' . md5(serialize($this->getCacheKeyData()));
    
    return cache()->remember($cacheKey, 300, function () { // 5 minutes cache
        return $this->performCalculation();
    });
}

private function getCacheKeyData()
{
    $cart = Cart::getCart();
    
    return [
        'cart_id' => $cart->id,
        'items_count' => $cart->items_count,
        'total_weight' => $this->calculateTotalWeight($cart),
        'shipping_address' => $cart->shipping_address->toArray(),
        'config_hash' => md5(serialize($this->getAllConfigData()))
    ];
}
```

## Key Takeaways

Advanced rate calculations enable sophisticated shipping logic:

**Implementation Guidelines:**
- ✅ Always include error handling and fallback options
- ✅ Use caching for expensive calculations (API calls, complex math)
- ✅ Log errors for debugging and monitoring
- ✅ Test edge cases thoroughly

**Business Logic Patterns:**
- ✅ Tiered pricing based on weight, distance, or value
- ✅ Time-based surcharges and discounts
- ✅ API integration with fallback rates
- ✅ Conditional logic for special circumstances

**Performance Considerations:**
- ✅ Cache results when possible
- ✅ Optimize database queries
- ✅ Handle API timeouts gracefully
- ✅ Use async processing for complex calculations

**Congratulations!** You now have the knowledge to implement sophisticated shipping methods that can handle complex business requirements while maintaining performance and reliability.
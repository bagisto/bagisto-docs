# Understanding AbstractType

The `AbstractType` class is the foundation of all product types in Bagisto. Understanding its methods and patterns is crucial for building robust custom product types. This guide covers every aspect of extending AbstractType for your subscription product.

::: info What You'll Master
- Complete AbstractType method reference and usage patterns
- Custom business logic implementation for subscription products
- Cart integration, pricing, and inventory management
- Advanced validation and error handling techniques
:::

## AbstractType Overview

The AbstractType class provides the core functionality that all product types share:

```php
namespace Webkul\Product\Type;

abstract class AbstractType
{
    protected $product;
    protected $skipAttributes = [];
    
    // Core methods that you can override
    public function isSaleable(): bool
    public function haveSufficientQuantity(int $qty): bool  
    public function totalQuantity(): int
    public function isStockable(): bool
    public function showQuantityBox(): bool
    public function prepareForCart(array $data): array
    // ... and many more
}
```

## Essential Methods Reference

### Product Availability Methods

These methods control when and how your product can be purchased:

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Type\AbstractType;

class Subscription extends AbstractType
{
    /**
     * Determine if subscription product is available for purchase.
     * 
     * @return bool
     */
    public function isSaleable(): bool
    {
        // Check subscription-specific availability
        if (! $this->product) {
            return false;
        }

        // Check if product is enabled
        if (! $this->product->status) {
            return false;
        }

        // Check subscription slot availability
        $availableSlots = $this->getAvailableSlots();
        $currentSubscriptions = $this->getCurrentSubscriptionCount();
        
        return $availableSlots > $currentSubscriptions;
    }

    /**
     * Check if enough subscription slots are available.
     * 
     * @param int $qty Requested quantity
     * @return bool
     */
    public function haveSufficientQuantity(int $qty): bool
    {
        // For unlimited subscriptions
        if (! $this->product->manage_stock) {
            return true;
        }

        $availableSlots = $this->getAvailableSlots();
        $currentSubscriptions = $this->getCurrentSubscriptionCount();
        
        return ($currentSubscriptions + $qty) <= $availableSlots;
    }

    /**
     * Get total available subscription slots.
     * 
     * @return int
     */
    public function totalQuantity(): int
    {
        return $this->product->subscription_slots ?? 0;
    }

    /**
     * Subscription products are not traditional inventory items.
     * 
     * @return bool
     */
    public function isStockable(): bool
    {
        return false;
    }

    /**
     * Helper method to get available subscription slots.
     * 
     * @return int
     */
    protected function getAvailableSlots(): int
    {
        return $this->product->subscription_slots ?? 0;
    }

    /**
     * Helper method to get current subscription count.
     * 
     * @return int
     */
    protected function getCurrentSubscriptionCount(): int
    {
        // This would integrate with your subscription management system
        // Example implementation:
        return \DB::table('subscriptions')
            ->where('product_id', $this->product->id)
            ->where('status', 'active')
            ->count();
    }
}
```

### User Interface Control Methods

Control how your product appears in the frontend:

```php
/**
 * Show quantity input box for subscription products.
 * 
 * @return bool
 */
public function showQuantityBox(): bool
{
    // Allow customers to subscribe to multiple slots
    return true;
}

/**
 * Control whether product can be moved from wishlist to cart.
 * 
 * @return bool
 */
public function canBeMovedFromWishlistToCart(): bool
{
    return $this->isSaleable();
}

/**
 * Control whether product can be compared with others.
 * 
 * @return bool
 */
public function canBeCompared(): bool
{
    // Subscriptions might not be comparable with regular products
    return false;
}

/**
 * Define which attributes to skip during product operations.
 * 
 * @return array
 */
public function getSkipAttributes(): array
{
    return array_merge(parent::getSkipAttributes(), [
        'length',
        'width', 
        'height',
        'weight',
        // Skip physical product attributes for subscriptions
    ]);
}
```

## Cart Integration Methods

Handle cart operations with custom logic:

```php
/**
 * Prepare subscription product data for cart addition.
 * 
 * @param array $data Request data from add-to-cart form
 * @return array Processed cart item data
 */
public function prepareForCart(array $data): array
{
    // Start with parent preparation
    $data = parent::prepareForCart($data);

    // Add subscription-specific data
    $data = $this->addSubscriptionData($data);
    $data = $this->calculateSubscriptionPricing($data);
    $data = $this->validateSubscriptionOptions($data);

    return $data;
}

/**
 * Add subscription-specific data to cart item.
 * 
 * @param array $data
 * @return array
 */
protected function addSubscriptionData(array $data): array
{
    // Get subscription frequency from request or product default
    $frequency = request('subscription_frequency', $this->product->subscription_frequency ?? 'monthly');
    
    $data['subscription_data'] = [
        'frequency' => $frequency,
        'billing_cycle' => $this->getBillingCycle($frequency),
        'next_billing_date' => $this->calculateNextBillingDate($frequency),
        'subscription_type' => $this->getSubscriptionType(),
        'trial_period' => $this->getTrialPeriod(),
    ];

    return $data;
}

/**
 * Calculate subscription pricing based on frequency and options.
 * 
 * @param array $data
 * @return array
 */
protected function calculateSubscriptionPricing(array $data): array
{
    $frequency = $data['subscription_data']['frequency'];
    $basePrice = (float) $this->product->subscription_base_price;
    
    // Apply frequency-based pricing
    $data['price'] = $this->getPriceForFrequency($basePrice, $frequency);
    
    // Apply trial period adjustments
    if ($this->hasTrialPeriod()) {
        $data['trial_price'] = $this->getTrialPrice();
        $data['trial_duration'] = $this->getTrialDuration();
    }
    
    // Apply quantity discounts
    if (isset($data['quantity']) && $data['quantity'] > 1) {
        $data['price'] = $this->applyQuantityDiscount($data['price'], $data['quantity']);
    }

    return $data;
}

/**
 * Get pricing for specific billing frequency.
 * 
 * @param float $basePrice
 * @param string $frequency
 * @return float
 */
protected function getPriceForFrequency(float $basePrice, string $frequency): float
{
    $multipliers = [
        'weekly' => 0.95,    // 5% discount
        'monthly' => 1.0,    // Base price
        'quarterly' => 2.85, // 5% discount for 3 months
        'yearly' => 10.8,    // 10% discount for 12 months
    ];

    return $basePrice * ($multipliers[$frequency] ?? 1.0);
}

/**
 * Validate subscription-specific options and data.
 * 
 * @param array $data
 * @return array
 * @throws \Exception If validation fails
 */
protected function validateSubscriptionOptions(array $data): array
{
    // Validate subscription frequency
    $allowedFrequencies = $this->getAllowedFrequencies();
    $frequency = $data['subscription_data']['frequency'];
    
    if (! in_array($frequency, $allowedFrequencies)) {
        throw new \Exception("Invalid subscription frequency: {$frequency}");
    }

    // Validate slot availability
    $requestedQuantity = $data['quantity'] ?? 1;
    if (! $this->haveSufficientQuantity($requestedQuantity)) {
        throw new \Exception('Insufficient subscription slots available');
    }

    // Validate customer eligibility (example: limit one subscription per customer)
    if ($this->customerHasActiveSubscription()) {
        throw new \Exception('Customer already has an active subscription for this product');
    }

    return $data;
}
```

## Advanced Validation Methods

Implement sophisticated validation logic:

```php
/**
 * Validate cart item data before adding to cart.
 * 
 * @param array $data Cart item data
 * @return bool True if valid, false otherwise
 */
public function validateCartItem(array $data): bool
{
    // Parent validation first
    if (! parent::validateCartItem($data)) {
        return false;
    }

    return $this->validateSubscriptionCartItem($data);
}

/**
 * Subscription-specific cart validation.
 * 
 * @param array $data
 * @return bool
 */
protected function validateSubscriptionCartItem(array $data): bool
{
    try {
        // Validate subscription data exists
        if (! isset($data['subscription_data'])) {
            $this->addValidationError('Missing subscription data');
            return false;
        }

        // Validate frequency
        $frequency = $data['subscription_data']['frequency'] ?? '';
        if (! $this->isValidFrequency($frequency)) {
            $this->addValidationError('Invalid subscription frequency');
            return false;
        }

        // Validate quantity
        $quantity = $data['quantity'] ?? 1;
        if (! $this->isValidQuantity($quantity)) {
            $this->addValidationError('Invalid subscription quantity');
            return false;
        }

        // Validate customer eligibility
        if (! $this->isCustomerEligible()) {
            $this->addValidationError('Customer not eligible for subscription');
            return false;
        }

        return true;

    } catch (\Exception $e) {
        $this->addValidationError($e->getMessage());
        return false;
    }
}

/**
 * Check if subscription frequency is valid.
 * 
 * @param string $frequency
 * @return bool
 */
protected function isValidFrequency(string $frequency): bool
{
    return in_array($frequency, $this->getAllowedFrequencies());
}

/**
 * Check if subscription quantity is valid.
 * 
 * @param int $quantity
 * @return bool
 */
protected function isValidQuantity(int $quantity): bool
{
    if ($quantity < 1) {
        return false;
    }

    $maxQuantity = $this->getMaxSubscriptionQuantity();
    return $quantity <= $maxQuantity;
}

/**
 * Check if current customer is eligible for subscription.
 * 
 * @return bool
 */
protected function isCustomerEligible(): bool
{
    $customer = auth()->guard('customer')->user();
    
    if (! $customer) {
        return false; // Require login for subscriptions
    }

    // Check if customer already has this subscription
    if ($this->customerHasActiveSubscription($customer->id)) {
        return false;
    }

    // Check customer account status
    if (! $customer->is_verified) {
        return false;
    }

    return true;
}
```

## Helper Methods Implementation

Build supporting methods for your product type:

```php
/**
 * Get allowed subscription frequencies for this product.
 * 
 * @return array
 */
protected function getAllowedFrequencies(): array
{
    $productFrequencies = $this->product->allowed_frequencies ?? null;
    
    if ($productFrequencies) {
        return json_decode($productFrequencies, true);
    }

    // Default frequencies
    return ['weekly', 'monthly', 'quarterly', 'yearly'];
}

/**
 * Get billing cycle information for frequency.
 * 
 * @param string $frequency
 * @return array
 */
protected function getBillingCycle(string $frequency): array
{
    $cycles = [
        'weekly' => ['interval' => 1, 'period' => 'week'],
        'monthly' => ['interval' => 1, 'period' => 'month'],
        'quarterly' => ['interval' => 3, 'period' => 'month'],
        'yearly' => ['interval' => 1, 'period' => 'year'],
    ];

    return $cycles[$frequency] ?? $cycles['monthly'];
}

/**
 * Calculate next billing date based on frequency.
 * 
 * @param string $frequency
 * @return string
 */
protected function calculateNextBillingDate(string $frequency): string
{
    $cycle = $this->getBillingCycle($frequency);
    
    return now()
        ->add($cycle['interval'], $cycle['period'])
        ->format('Y-m-d H:i:s');
}

/**
 * Check if customer has active subscription for this product.
 * 
 * @param int|null $customerId
 * @return bool
 */
protected function customerHasActiveSubscription(?int $customerId = null): bool
{
    $customerId = $customerId ?? auth()->guard('customer')->id();
    
    if (! $customerId) {
        return false;
    }

    return \DB::table('subscriptions')
        ->where('customer_id', $customerId)
        ->where('product_id', $this->product->id)
        ->where('status', 'active')
        ->exists();
}

/**
 * Get maximum subscription quantity allowed.
 * 
 * @return int
 */
protected function getMaxSubscriptionQuantity(): int
{
    return $this->product->max_subscription_quantity ?? 1;
}

/**
 * Get subscription type (e.g., service, digital, physical).
 * 
 * @return string
 */
protected function getSubscriptionType(): string
{
    return $this->product->subscription_type ?? 'service';
}

/**
 * Check if product has trial period.
 * 
 * @return bool
 */
protected function hasTrialPeriod(): bool
{
    return ! empty($this->product->trial_period_days);
}

/**
 * Get trial period duration in days.
 * 
 * @return int
 */
protected function getTrialDuration(): int
{
    return (int) ($this->product->trial_period_days ?? 0);
}

/**
 * Get trial period price (often $0).
 * 
 * @return float
 */
protected function getTrialPrice(): float
{
    return (float) ($this->product->trial_price ?? 0.0);
}

/**
 * Apply quantity-based discounts.
 * 
 * @param float $price
 * @param int $quantity
 * @return float
 */
protected function applyQuantityDiscount(float $price, int $quantity): float
{
    if ($quantity >= 5) {
        return $price * 0.9; // 10% discount for 5+ subscriptions
    }
    
    if ($quantity >= 3) {
        return $price * 0.95; // 5% discount for 3+ subscriptions
    }
    
    return $price;
}

/**
 * Add validation error message.
 * 
 * @param string $message
 * @return void
 */
protected function addValidationError(string $message): void
{
    session()->flash('error', $message);
}
```

## Testing Your AbstractType Implementation

Create comprehensive tests for your product type:

```php
<?php

namespace Tests\Feature\ProductType;

use Tests\TestCase;
use Webkul\SubscriptionProduct\Type\Subscription;
use Webkul\Product\Models\Product;

class SubscriptionTypeTest extends TestCase
{
    protected Subscription $subscriptionType;
    protected Product $product;

    protected function setUp(): void
    {
        parent::setUp();
        
        $this->product = Product::factory()->subscription()->create();
        $this->subscriptionType = new Subscription();
        $this->subscriptionType->setProduct($this->product);
    }

    /** @test */
    public function it_determines_saleability_correctly(): void
    {
        $this->assertTrue($this->subscriptionType->isSaleable());
        
        // Test with no available slots
        $this->product->update(['subscription_slots' => 0]);
        $this->assertFalse($this->subscriptionType->isSaleable());
    }

    /** @test */
    public function it_validates_cart_data_properly(): void
    {
        $validData = [
            'quantity' => 1,
            'subscription_data' => [
                'frequency' => 'monthly'
            ]
        ];
        
        $this->assertTrue($this->subscriptionType->validateCartItem($validData));
        
        $invalidData = [
            'quantity' => 1,
            'subscription_data' => [
                'frequency' => 'invalid'
            ]
        ];
        
        $this->assertFalse($this->subscriptionType->validateCartItem($invalidData));
    }

    /** @test */
    public function it_prepares_cart_data_correctly(): void
    {
        $inputData = [
            'quantity' => 2,
            'subscription_frequency' => 'quarterly'
        ];
        
        $preparedData = $this->subscriptionType->prepareForCart($inputData);
        
        $this->assertArrayHasKey('subscription_data', $preparedData);
        $this->assertEquals('quarterly', $preparedData['subscription_data']['frequency']);
        $this->assertArrayHasKey('price', $preparedData);
    }
}
```

## Debugging Common Issues

::: warning Common AbstractType Issues

**Method Not Called:**
- Verify product type is properly registered
- Check if parent methods are being called
- Ensure proper method signatures

**Cart Data Missing:**
- Validate `prepareForCart()` returns all required data
- Check array structure and key names
- Verify data persistence through cart operations

**Validation Failures:**
- Add logging to validation methods
- Test with various input combinations
- Check for proper error message handling
:::

## Performance Optimization

Optimize your AbstractType methods for production:

```php
/**
 * Cache expensive operations.
 */
protected function getCurrentSubscriptionCount(): int
{
    $cacheKey = "subscription_count_{$this->product->id}";
    
    return cache()->remember($cacheKey, 300, function () {
        return \DB::table('subscriptions')
            ->where('product_id', $this->product->id)
            ->where('status', 'active')
            ->count();
    });
}

/**
 * Optimize database queries.
 */
protected function getAvailableSlots(): int
{
    // Use product attribute instead of separate query when possible
    return $this->product->subscription_slots ?? 0;
}
```

## What's Next?

Now that you understand AbstractType implementation, explore advanced patterns:

**📖 [Advanced Product Type Examples](./advanced-product-type-examples.md)** - See sophisticated implementations with complex business logic

::: tip AbstractType Best Practices

**Method Implementation:**
- Always call parent methods when appropriate
- Handle edge cases and null values
- Provide meaningful error messages

**Performance:**
- Cache expensive database operations
- Minimize queries in frequently called methods
- Use lazy loading for optional data

**Testing:**
- Test all public methods thoroughly
- Include edge cases and error conditions
- Mock external dependencies properly
:::

Your AbstractType implementation is now robust and production-ready. The advanced examples section will show you how to implement sophisticated features and complex business logic.

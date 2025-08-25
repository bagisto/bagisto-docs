# Advanced Product Type Examples

This guide showcases sophisticated product type implementations with real-world features. You'll learn advanced patterns, complex business logic, and integration techniques that go beyond basic product types.

::: info Advanced Features Covered
- Complex pricing models with dynamic calculations
- Advanced inventory management and slot allocation
- Integration with external services (webhooks, APIs)
- Custom admin interfaces and bulk operations
- Multi-tenant and marketplace considerations
:::

## Advanced Subscription Product Implementation

Let's enhance our subscription product with sophisticated features:

### Enhanced Product Type Class

```php
<?php

namespace Webkul\SubscriptionProduct\Type;

use Webkul\Product\Type\AbstractType;
use Webkul\SubscriptionProduct\Services\BillingService;
use Webkul\SubscriptionProduct\Services\InventoryService;
use Webkul\SubscriptionProduct\Events\SubscriptionCreated;
use Carbon\Carbon;

class AdvancedSubscription extends AbstractType
{
    /**
     * Skip attributes not relevant to subscriptions.
     */
    protected array $skipAttributes = [
        'price', 'cost', 'special_price', 'special_price_from', 'special_price_to',
        'length', 'width', 'height', 'weight', 'manage_stock'
    ];

    public function __construct(
        protected BillingService $billingService,
        protected InventoryService $inventoryService
    ) {}

    /**
     * Advanced saleability check with multiple conditions.
     */
    public function isSaleable(): bool
    {
        if (! parent::isSaleable()) {
            return false;
        }

        // Check subscription-specific conditions
        return $this->checkBusinessHours()
            && $this->checkGeographicAvailability()
            && $this->checkCustomerEligibility()
            && $this->checkInventoryAvailability();
    }

    /**
     * Complex quantity validation with business rules.
     */
    public function haveSufficientQuantity(int $qty): bool
    {
        // Check base availability
        if (! $this->inventoryService->hasAvailableSlots($this->product, $qty)) {
            return false;
        }

        // Check customer-specific limits
        $customer = auth()->guard('customer')->user();
        if ($customer && ! $this->checkCustomerLimits($customer, $qty)) {
            return false;
        }

        // Check time-based restrictions
        return $this->checkTimeBasedRestrictions($qty);
    }

    /**
     * Advanced cart preparation with complex data.
     */
    public function prepareForCart(array $data): array
    {
        $data = parent::prepareForCart($data);

        // Enhance with subscription data
        $data = $this->addSubscriptionMetadata($data);
        $data = $this->calculateAdvancedPricing($data);
        $data = $this->addBillingSchedule($data);
        $data = $this->addCustomizationOptions($data);

        // Validate complete data set
        $this->validateAdvancedCartData($data);

        return $data;
    }

    /**
     * Add comprehensive subscription metadata.
     */
    protected function addSubscriptionMetadata(array $data): array
    {
        $frequency = request('subscription_frequency', 'monthly');
        $planType = request('plan_type', 'standard');
        $addons = request('addons', []);

        $data['subscription_meta'] = [
            'frequency' => $frequency,
            'plan_type' => $planType,
            'addons' => $this->validateAddons($addons),
            'tier' => $this->calculateServiceTier($data['quantity'] ?? 1),
            'billing_cycle' => $this->getBillingCycle($frequency),
            'contract_length' => request('contract_length', 12),
            'auto_renewal' => request('auto_renewal', true),
            'proration_policy' => $this->getProrationPolicy(),
            'cancellation_policy' => $this->getCancellationPolicy(),
        ];

        return $data;
    }

    /**
     * Calculate sophisticated pricing with multiple factors.
     */
    protected function calculateAdvancedPricing(array $data): array
    {
        $basePrice = $this->getBasePrice();
        $metadata = $data['subscription_meta'];
        
        // Calculate base subscription price
        $subscriptionPrice = $this->calculateFrequencyPrice($basePrice, $metadata['frequency']);
        
        // Apply tier-based pricing
        $subscriptionPrice = $this->applyTierPricing($subscriptionPrice, $metadata['tier']);
        
        // Add addon pricing
        $addonPrice = $this->calculateAddonPricing($metadata['addons']);
        
        // Apply contract length discounts
        $discount = $this->getContractDiscount($metadata['contract_length']);
        
        // Calculate taxes and fees
        $taxes = $this->calculateTaxes($subscriptionPrice + $addonPrice);
        $fees = $this->calculateFees($metadata);

        $data['pricing'] = [
            'base_price' => $basePrice,
            'subscription_price' => $subscriptionPrice,
            'addon_price' => $addonPrice,
            'discount_amount' => ($subscriptionPrice + $addonPrice) * $discount,
            'subtotal' => ($subscriptionPrice + $addonPrice) * (1 - $discount),
            'taxes' => $taxes,
            'fees' => $fees,
            'total' => (($subscriptionPrice + $addonPrice) * (1 - $discount)) + $taxes + $fees,
            'currency' => core()->getCurrentCurrencyCode(),
        ];

        // Set final price for cart
        $data['price'] = $data['pricing']['total'];

        return $data;
    }

    /**
     * Create detailed billing schedule.
     */
    protected function addBillingSchedule(array $data): array
    {
        $metadata = $data['subscription_meta'];
        $pricing = $data['pricing'];
        
        $schedule = $this->billingService->generateSchedule([
            'start_date' => $this->getSubscriptionStartDate(),
            'frequency' => $metadata['frequency'],
            'contract_length' => $metadata['contract_length'],
            'amount' => $pricing['total'],
            'auto_renewal' => $metadata['auto_renewal'],
        ]);

        $data['billing_schedule'] = $schedule;
        $data['next_billing_date'] = $schedule['next_billing'];
        $data['contract_end_date'] = $schedule['contract_end'];

        return $data;
    }

    /**
     * Add product customization options.
     */
    protected function addCustomizationOptions(array $data): array
    {
        $customizations = request('customizations', []);
        
        $data['customizations'] = [
            'features' => $this->validateFeatureSelections($customizations['features'] ?? []),
            'integrations' => $this->validateIntegrations($customizations['integrations'] ?? []),
            'support_level' => $customizations['support_level'] ?? 'standard',
            'data_retention' => $customizations['data_retention'] ?? '12_months',
            'custom_branding' => $customizations['custom_branding'] ?? false,
        ];

        return $data;
    }

    /**
     * Comprehensive cart data validation.
     */
    protected function validateAdvancedCartData(array $data): void
    {
        $this->validateSubscriptionMetadata($data['subscription_meta']);
        $this->validatePricingData($data['pricing']);
        $this->validateBillingSchedule($data['billing_schedule']);
        $this->validateCustomizations($data['customizations']);
    }

    // Business Logic Helper Methods

    /**
     * Check if subscription sales are allowed during current business hours.
     */
    protected function checkBusinessHours(): bool
    {
        if (! $this->product->enforce_business_hours) {
            return true;
        }

        $timezone = $this->product->business_timezone ?? config('app.timezone');
        $now = Carbon::now($timezone);
        
        $businessHours = json_decode($this->product->business_hours, true);
        $dayOfWeek = strtolower($now->format('l'));
        
        if (! isset($businessHours[$dayOfWeek])) {
            return false;
        }

        $hours = $businessHours[$dayOfWeek];
        $startTime = Carbon::createFromFormat('H:i', $hours['start'], $timezone);
        $endTime = Carbon::createFromFormat('H:i', $hours['end'], $timezone);

        return $now->between($startTime, $endTime);
    }

    /**
     * Check geographic availability for subscription.
     */
    protected function checkGeographicAvailability(): bool
    {
        $allowedRegions = json_decode($this->product->allowed_regions ?? '[]', true);
        
        if (empty($allowedRegions)) {
            return true; // No restrictions
        }

        $customerRegion = $this->getCustomerRegion();
        return in_array($customerRegion, $allowedRegions);
    }

    /**
     * Check customer eligibility for subscription.
     */
    protected function checkCustomerEligibility(): bool
    {
        $customer = auth()->guard('customer')->user();
        
        if (! $customer) {
            return ! $this->product->require_login;
        }

        // Check customer verification status
        if ($this->product->require_verification && ! $customer->is_verified) {
            return false;
        }

        // Check customer credit rating
        if ($this->product->require_credit_check) {
            return $this->checkCreditRating($customer);
        }

        // Check for existing subscriptions limits
        return $this->checkExistingSubscriptions($customer);
    }

    /**
     * Check inventory availability with complex rules.
     */
    protected function checkInventoryAvailability(): bool
    {
        return $this->inventoryService->checkAvailability($this->product, [
            'check_maintenance_windows' => true,
            'check_capacity_planning' => true,
            'check_resource_allocation' => true,
        ]);
    }

    /**
     * Validate customer quantity limits.
     */
    protected function checkCustomerLimits($customer, int $qty): bool
    {
        $maxSubscriptions = $this->product->max_subscriptions_per_customer ?? 10;
        $currentCount = $this->getCustomerSubscriptionCount($customer);
        
        return ($currentCount + $qty) <= $maxSubscriptions;
    }

    /**
     * Check time-based purchase restrictions.
     */
    protected function checkTimeBasedRestrictions(int $qty): bool
    {
        // Example: Limit purchases during high-demand periods
        if ($this->isHighDemandPeriod()) {
            $maxQty = $this->product->high_demand_max_qty ?? 1;
            return $qty <= $maxQty;
        }

        return true;
    }

    // Pricing Calculation Methods

    /**
     * Calculate base subscription price with frequency adjustments.
     */
    protected function calculateFrequencyPrice(float $basePrice, string $frequency): float
    {
        $multipliers = json_decode($this->product->frequency_multipliers ?? '{}', true);
        
        $defaultMultipliers = [
            'weekly' => 0.95,
            'monthly' => 1.0,
            'quarterly' => 2.85,
            'yearly' => 10.8,
        ];

        $multiplier = $multipliers[$frequency] ?? $defaultMultipliers[$frequency] ?? 1.0;
        return $basePrice * $multiplier;
    }

    /**
     * Apply tier-based pricing discounts.
     */
    protected function applyTierPricing(float $price, string $tier): float
    {
        $tierMultipliers = [
            'basic' => 1.0,
            'standard' => 1.2,
            'premium' => 1.5,
            'enterprise' => 2.0,
        ];

        return $price * ($tierMultipliers[$tier] ?? 1.0);
    }

    /**
     * Calculate addon pricing.
     */
    protected function calculateAddonPricing(array $addons): float
    {
        $total = 0;
        $addonPrices = json_decode($this->product->addon_prices ?? '{}', true);

        foreach ($addons as $addon) {
            $total += $addonPrices[$addon['type']] ?? 0;
        }

        return $total;
    }

    /**
     * Get contract length discount rate.
     */
    protected function getContractDiscount(int $contractLength): float
    {
        if ($contractLength >= 24) {
            return 0.15; // 15% discount for 2+ year contracts
        }
        
        if ($contractLength >= 12) {
            return 0.10; // 10% discount for 1+ year contracts
        }

        return 0.0; // No discount for shorter contracts
    }

    /**
     * Calculate taxes based on customer location.
     */
    protected function calculateTaxes(float $amount): float
    {
        $taxRate = $this->getTaxRate();
        return $amount * $taxRate;
    }

    /**
     * Calculate additional fees.
     */
    protected function calculateFees(array $metadata): float
    {
        $fees = 0;

        // Setup fee for new subscriptions
        if (! $this->isExistingCustomer()) {
            $fees += $this->product->setup_fee ?? 0;
        }

        // Premium support fee
        if ($metadata['support_level'] === 'premium') {
            $fees += $this->product->premium_support_fee ?? 0;
        }

        return $fees;
    }

    // Validation Methods

    /**
     * Validate addon selections.
     */
    protected function validateAddons(array $addons): array
    {
        $validAddons = [];
        $availableAddons = json_decode($this->product->available_addons ?? '[]', true);

        foreach ($addons as $addon) {
            if (in_array($addon['type'], $availableAddons)) {
                $validAddons[] = [
                    'type' => $addon['type'],
                    'quantity' => max(1, (int) ($addon['quantity'] ?? 1)),
                    'options' => $addon['options'] ?? [],
                ];
            }
        }

        return $validAddons;
    }

    /**
     * Calculate service tier based on quantity and features.
     */
    protected function calculateServiceTier(int $quantity): string
    {
        if ($quantity >= 10) {
            return 'enterprise';
        } elseif ($quantity >= 5) {
            return 'premium';
        } elseif ($quantity >= 2) {
            return 'standard';
        }
        
        return 'basic';
    }

    /**
     * Validate feature selections.
     */
    protected function validateFeatureSelections(array $features): array
    {
        $availableFeatures = json_decode($this->product->available_features ?? '[]', true);
        return array_intersect($features, $availableFeatures);
    }

    /**
     * Validate integration selections.
     */
    protected function validateIntegrations(array $integrations): array
    {
        $availableIntegrations = json_decode($this->product->available_integrations ?? '[]', true);
        $validIntegrations = [];

        foreach ($integrations as $integration) {
            if (isset($availableIntegrations[$integration['type']])) {
                $validIntegrations[] = [
                    'type' => $integration['type'],
                    'config' => $integration['config'] ?? [],
                ];
            }
        }

        return $validIntegrations;
    }

    /**
     * Comprehensive subscription metadata validation.
     */
    protected function validateSubscriptionMetadata(array $metadata): void
    {
        $requiredFields = ['frequency', 'plan_type', 'billing_cycle', 'contract_length'];
        
        foreach ($requiredFields as $field) {
            if (! isset($metadata[$field])) {
                throw new \InvalidArgumentException("Missing required field: {$field}");
            }
        }

        // Validate frequency
        $allowedFrequencies = ['weekly', 'monthly', 'quarterly', 'yearly'];
        if (! in_array($metadata['frequency'], $allowedFrequencies)) {
            throw new \InvalidArgumentException("Invalid frequency: {$metadata['frequency']}");
        }

        // Validate contract length
        if ($metadata['contract_length'] < 1 || $metadata['contract_length'] > 60) {
            throw new \InvalidArgumentException("Invalid contract length: {$metadata['contract_length']}");
        }
    }

    /**
     * Validate pricing data integrity.
     */
    protected function validatePricingData(array $pricing): void
    {
        $requiredFields = ['base_price', 'subscription_price', 'subtotal', 'total'];
        
        foreach ($requiredFields as $field) {
            if (! isset($pricing[$field]) || ! is_numeric($pricing[$field])) {
                throw new \InvalidArgumentException("Invalid pricing field: {$field}");
            }
        }

        // Validate pricing logic
        if ($pricing['total'] < $pricing['subtotal']) {
            throw new \InvalidArgumentException("Total price cannot be less than subtotal");
        }
    }

    // Utility Methods

    /**
     * Get subscription start date based on business rules.
     */
    protected function getSubscriptionStartDate(): string
    {
        $startDate = request('start_date');
        
        if ($startDate) {
            $date = Carbon::parse($startDate);
            
            // Ensure start date is not in the past
            if ($date->isPast()) {
                $date = now()->addDay();
            }
            
            return $date->format('Y-m-d');
        }

        // Default to next business day
        return $this->getNextBusinessDay()->format('Y-m-d');
    }

    /**
     * Get next business day for subscription start.
     */
    protected function getNextBusinessDay(): Carbon
    {
        $date = now()->addDay();
        
        while ($date->isWeekend()) {
            $date->addDay();
        }
        
        return $date;
    }

    /**
     * Get customer's geographic region.
     */
    protected function getCustomerRegion(): string
    {
        $customer = auth()->guard('customer')->user();
        
        if ($customer && $customer->defaultAddress) {
            return $customer->defaultAddress->country;
        }

        // Fallback to IP-based detection
        return $this->getRegionFromIP();
    }

    /**
     * Detect region from IP address.
     */
    protected function getRegionFromIP(): string
    {
        // Implement IP-based region detection
        // This could integrate with services like MaxMind GeoIP
        return 'US'; // Default fallback
    }

    /**
     * Check if current period is high-demand.
     */
    protected function isHighDemandPeriod(): bool
    {
        // Example: Black Friday, holiday seasons, etc.
        $highDemandPeriods = json_decode($this->product->high_demand_periods ?? '[]', true);
        $today = now()->format('m-d');
        
        foreach ($highDemandPeriods as $period) {
            if ($today >= $period['start'] && $today <= $period['end']) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get customer's current subscription count.
     */
    protected function getCustomerSubscriptionCount($customer): int
    {
        return \DB::table('subscriptions')
            ->where('customer_id', $customer->id)
            ->where('status', 'active')
            ->count();
    }

    /**
     * Check if customer is existing.
     */
    protected function isExistingCustomer(): bool
    {
        $customer = auth()->guard('customer')->user();
        
        if (! $customer) {
            return false;
        }

        return \DB::table('orders')
            ->where('customer_id', $customer->id)
            ->exists();
    }
}
```

## Integration Services

### Billing Service Implementation

```php
<?php

namespace Webkul\SubscriptionProduct\Services;

use Carbon\Carbon;

class BillingService
{
    /**
     * Generate comprehensive billing schedule.
     */
    public function generateSchedule(array $config): array
    {
        $startDate = Carbon::parse($config['start_date']);
        $frequency = $config['frequency'];
        $contractLength = $config['contract_length'];
        $amount = $config['amount'];

        $schedule = [];
        $currentDate = $startDate->copy();
        $endDate = $this->calculateContractEndDate($startDate, $contractLength);

        while ($currentDate->lte($endDate)) {
            $schedule[] = [
                'billing_date' => $currentDate->format('Y-m-d'),
                'amount' => $amount,
                'status' => 'scheduled',
                'type' => $this->getBillingType($currentDate, $startDate),
            ];

            $currentDate = $this->getNextBillingDate($currentDate, $frequency);
        }

        return [
            'schedule' => $schedule,
            'next_billing' => $schedule[0]['billing_date'] ?? null,
            'contract_end' => $endDate->format('Y-m-d'),
            'total_payments' => count($schedule),
            'total_amount' => $amount * count($schedule),
        ];
    }

    /**
     * Calculate contract end date.
     */
    protected function calculateContractEndDate(Carbon $startDate, int $contractMonths): Carbon
    {
        return $startDate->copy()->addMonths($contractMonths);
    }

    /**
     * Get next billing date based on frequency.
     */
    protected function getNextBillingDate(Carbon $currentDate, string $frequency): Carbon
    {
        return match ($frequency) {
            'weekly' => $currentDate->addWeek(),
            'monthly' => $currentDate->addMonth(),
            'quarterly' => $currentDate->addMonths(3),
            'yearly' => $currentDate->addYear(),
            default => $currentDate->addMonth(),
        };
    }

    /**
     * Determine billing type (trial, regular, etc.).
     */
    protected function getBillingType(Carbon $billingDate, Carbon $startDate): string
    {
        if ($billingDate->eq($startDate)) {
            return 'initial';
        }

        return 'recurring';
    }
}
```

### Inventory Service Implementation

```php
<?php

namespace Webkul\SubscriptionProduct\Services;

use Webkul\Product\Models\Product;

class InventoryService
{
    /**
     * Check complex availability conditions.
     */
    public function checkAvailability(Product $product, array $options = []): bool
    {
        // Check basic slot availability
        if (! $this->hasAvailableSlots($product, 1)) {
            return false;
        }

        // Check maintenance windows
        if ($options['check_maintenance_windows'] ?? false) {
            if ($this->isInMaintenanceWindow($product)) {
                return false;
            }
        }

        // Check capacity planning
        if ($options['check_capacity_planning'] ?? false) {
            if (! $this->hasAdequateCapacity($product)) {
                return false;
            }
        }

        // Check resource allocation
        if ($options['check_resource_allocation'] ?? false) {
            if (! $this->canAllocateResources($product)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Check if subscription slots are available.
     */
    public function hasAvailableSlots(Product $product, int $quantity): bool
    {
        $totalSlots = $product->subscription_slots ?? 0;
        $usedSlots = $this->getUsedSlots($product);
        
        return ($usedSlots + $quantity) <= $totalSlots;
    }

    /**
     * Get currently used subscription slots.
     */
    protected function getUsedSlots(Product $product): int
    {
        return \DB::table('subscriptions')
            ->where('product_id', $product->id)
            ->where('status', 'active')
            ->sum('quantity');
    }

    /**
     * Check if product is in maintenance window.
     */
    protected function isInMaintenanceWindow(Product $product): bool
    {
        $maintenanceWindows = json_decode($product->maintenance_windows ?? '[]', true);
        $now = now();

        foreach ($maintenanceWindows as $window) {
            $start = Carbon::parse($window['start']);
            $end = Carbon::parse($window['end']);
            
            if ($now->between($start, $end)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check system capacity for new subscriptions.
     */
    protected function hasAdequateCapacity(Product $product): bool
    {
        // This would integrate with your capacity monitoring system
        $currentLoad = $this->getCurrentSystemLoad();
        $maxCapacity = $product->max_capacity_threshold ?? 0.8;
        
        return $currentLoad < $maxCapacity;
    }

    /**
     * Check if resources can be allocated.
     */
    protected function canAllocateResources(Product $product): bool
    {
        // This would check resource pools, server capacity, etc.
        $requiredResources = json_decode($product->required_resources ?? '{}', true);
        
        foreach ($requiredResources as $resource => $amount) {
            if (! $this->hasAvailableResource($resource, $amount)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get current system load.
     */
    protected function getCurrentSystemLoad(): float
    {
        // Implement system load monitoring
        return 0.5; // Example: 50% load
    }

    /**
     * Check specific resource availability.
     */
    protected function hasAvailableResource(string $resource, int $amount): bool
    {
        // Implement resource checking logic
        return true; // Simplified for example
    }
}
```

## Event Integration

Create events for subscription lifecycle:

```php
<?php

namespace Webkul\SubscriptionProduct\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SubscriptionCreated
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public $subscription,
        public $customer,
        public $product
    ) {}
}
```

## Testing Advanced Features

```php
<?php

namespace Tests\Feature\SubscriptionProduct;

use Tests\TestCase;
use Webkul\SubscriptionProduct\Type\AdvancedSubscription;

class AdvancedSubscriptionTest extends TestCase
{
    /** @test */
    public function it_calculates_complex_pricing_correctly(): void
    {
        $product = Product::factory()->subscription()->create([
            'subscription_base_price' => 100,
            'frequency_multipliers' => json_encode(['monthly' => 1.0, 'yearly' => 10.8]),
        ]);

        $subscriptionType = new AdvancedSubscription($this->billingService, $this->inventoryService);
        $subscriptionType->setProduct($product);

        $cartData = $subscriptionType->prepareForCart([
            'quantity' => 2,
            'subscription_frequency' => 'yearly',
            'plan_type' => 'premium',
            'contract_length' => 24,
        ]);

        $this->assertArrayHasKey('pricing', $cartData);
        $this->assertArrayHasKey('billing_schedule', $cartData);
        $this->assertTrue($cartData['pricing']['total'] > 0);
    }

    /** @test */
    public function it_validates_business_hours_correctly(): void
    {
        $product = Product::factory()->subscription()->create([
            'enforce_business_hours' => true,
            'business_hours' => json_encode([
                'monday' => ['start' => '09:00', 'end' => '17:00'],
            ]),
        ]);

        $subscriptionType = new AdvancedSubscription($this->billingService, $this->inventoryService);
        $subscriptionType->setProduct($product);

        // Test depends on current time - mock Carbon for consistent testing
        Carbon::setTestNow('2023-12-04 10:00:00'); // Monday 10 AM
        $this->assertTrue($subscriptionType->isSaleable());

        Carbon::setTestNow('2023-12-04 20:00:00'); // Monday 8 PM
        $this->assertFalse($subscriptionType->isSaleable());
    }
}
```

## Performance Considerations

### Caching Strategy

```php
/**
 * Implement comprehensive caching for expensive operations.
 */
protected function getCustomerSubscriptionCount($customer): int
{
    $cacheKey = "customer_subscriptions_{$customer->id}";
    
    return cache()->remember($cacheKey, 300, function () use ($customer) {
        return \DB::table('subscriptions')
            ->where('customer_id', $customer->id)
            ->where('status', 'active')
            ->count();
    });
}

/**
 * Cache pricing calculations.
 */
protected function calculateAdvancedPricing(array $data): array
{
    $cacheKey = $this->getPricingCacheKey($data);
    
    return cache()->remember($cacheKey, 1800, function () use ($data) {
        return $this->performPricingCalculation($data);
    });
}
```

### Database Optimization

```php
/**
 * Optimize database queries with proper indexing.
 */
protected function getUsedSlots(Product $product): int
{
    return \DB::table('subscriptions')
        ->select(\DB::raw('SUM(quantity) as total'))
        ->where('product_id', $product->id)
        ->where('status', 'active')
        ->value('total') ?? 0;
}
```

## What's Next?

You now have a comprehensive understanding of advanced product type development in Bagisto. Consider these next steps:

1. **Integration with External Services**: Connect with payment gateways, CRM systems, or inventory management platforms
2. **Multi-tenant Support**: Adapt your product types for marketplace or multi-vendor scenarios
3. **API Development**: Create REST or GraphQL APIs for your custom product types
4. **Admin Interface Enhancement**: Build custom admin panels for managing your product types

::: tip Advanced Development Tips

**Architecture Patterns:**
- Use service classes for complex business logic
- Implement event-driven architecture for extensibility
- Consider queue processing for heavy operations
- Use design patterns (Strategy, Factory) for flexibility

**Performance Optimization:**
- Profile your product type methods under load
- Implement proper caching strategies
- Optimize database queries and use indexes
- Consider Redis for session and cache storage

**Testing Strategy:**
- Write comprehensive unit and integration tests
- Mock external services and dependencies
- Test edge cases and error conditions
- Use database transactions for test isolation
:::

Your advanced product type implementation is now ready for production use with sophisticated features, robust validation, and excellent performance characteristics.

# Understanding Carrier Configuration

The carrier configuration is the foundation of your shipping method - it defines the basic properties, behavior, and integration points with Bagisto's shipping system. Understanding this configuration deeply will help you build flexible and maintainable shipping solutions.

::: info What You'll Learn
This comprehensive guide covers:
- Complete carrier configuration properties and their purposes
- How configuration affects admin interface and frontend behavior
- Advanced configuration patterns for complex shipping methods
- Best practices for maintainable and extensible configurations
:::

## Carrier Configuration Structure

The carrier configuration file defines all the essential properties of your shipping method. Let's examine each component in detail:

**File:** `packages/Webkul/CustomExpressShipping/src/Config/carriers.php`

```php
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

## Core Configuration Properties

### Essential Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | ✅ | Unique identifier for your shipping method |
| `title` | string | ✅ | Display name shown to customers |
| `description` | string | ❌ | Brief explanation of the shipping service |
| `active` | boolean | ❌ | Whether the method is enabled (default: true) |
| `class` | string | ✅ | Full namespace path to your carrier class |

### Pricing Properties

| Property | Type | Description |
|----------|------|-------------|
| `default_rate` | string/float | Base shipping cost before calculations |
| `type` | string | Pricing model: `per_order` or `per_unit` |

::: details Property Details and Best Practices

**Code Property:**
- Must be unique across all shipping methods
- Use lowercase with underscores (e.g., `custom_express_shipping`)
- Should match your package name for consistency
- Used internally for identification and configuration keys

**Title Property:**
- Customer-facing display name during checkout
- Keep it clear and descriptive (e.g., "Express Delivery (1-2 Days)")
- Can be overridden in admin configuration
- Should indicate delivery speed or special features

**Description Property:**
- Optional but recommended for clarity
- Briefly explains the shipping service benefits
- Shown in admin interface and potentially frontend
- Good for highlighting features like tracking, insurance, etc.

**Class Property:**
- Must point to your actual carrier class
- Include full namespace path
- Bagisto uses this to instantiate your shipping logic
- Case-sensitive and must match exactly
:::

## Advanced Configuration Options

For more sophisticated shipping methods, you can extend the configuration:

```php
<?php

return [
    'custom_express_shipping' => [
        // core properties
        'code'         => 'custom_express_shipping',
        'title'        => 'Express Delivery (1-2 Days)',
        'description'  => 'Premium express shipping with tracking and insurance',
        'active'       => true,
        'class'        => 'Webkul\CustomExpressShipping\Carriers\CustomExpressShipping',
        
        // pricing configuration
        'default_rate'            => '19.99',
        'type'                    => 'per_order',
        'free_shipping_threshold' => '100.00',
        
        // service features
        'supports' => [
            'tracking'           => true,
            'insurance'          => true,
            'signature_required' => false,
            'weekend_delivery'   => true,
        ],
        
        // availability rules
        'availability' => [
            'weight_limit' => 50.0, // kg

            'size_limit' => [
                'length' => 100, // cm
                'width'  => 80,  // cm  
                'height' => 60,  // cm
            ],

            'restricted_postcodes' => ['12345', '67890'],
            'business_days_only'   => false,
        ],
        
        // api configuration (if using external service)
        'api_config' => [
            'endpoint'      => env('EXPRESS_SHIPPING_API_URL'),
            'api_key'       => env('EXPRESS_SHIPPING_API_KEY'),
            'timeout'       => 30,
            'fallback_rate' => '25.00',
        ],
    ]
];
```

::: details Advanced Configuration Benefits
**Structured Approach:**
- All shipping logic parameters in one place
- Easy to modify without touching code
- Environment-specific configurations
- Clear separation of concerns

**Maintainability:**
- Changes don't require code updates
- Easy to add new features
- Configuration validation possibilities
- Better testing and deployment
:::

## Understanding Configuration Flow

### 1. Registration Phase
When Bagisto starts, your service provider merges the carrier configuration:

```php
// in your service provider...
$this->mergeConfigFrom(
    dirname(__DIR__) . '/Config/carriers.php',
    'carriers'
);
```

### 2. Discovery Phase  
Bagisto discovers your shipping method through the merged configuration:

```php
// internally processes...
Config::get('carriers')
```

### 3. Instantiation Phase
When needed, Bagisto creates your carrier instance:

```php
// bagisto uses the 'class' property...
$carrier = new \Webkul\CustomExpressShipping\Carriers\CustomExpressShipping;
```

### 4. Configuration Access
Your carrier class can access configuration values:

```php
// in your carrier class...
$this->getConfigData('default_rate');      // Returns '19.99'
$this->getConfigData('title');             // Returns 'Express Delivery (1-2 Days)'
$this->getConfigData('supports.tracking'); // Returns true
```

## Configuration Best Practices

### 1. Naming Conventions

```php
// ✅ good naming
'premium_express_delivery' => [
    'code'  => 'premium_express_delivery',
    'title' => 'Premium Express (Next Day)',
    'class' => 'Vendor\Package\Carriers\PremiumExpressDelivery',
]

// ❌ avoid
'PED' => [
    'code'  => 'ped',
    'title' => 'PED',
    'class' => 'Vendor\Package\Carriers\PED',
]
```

### 2. Descriptive Titles and Descriptions

```php
// ✅ clear and informative
'title'       => 'Express Delivery (1-2 Business Days)',
'description' => 'Fast shipping with tracking and insurance included',

// ❌ vague
'title'       => 'Fast Shipping',
'description' => 'Quick delivery',
```

### 3. Sensible Defaults

```php
// ✅ production-ready defaults
'active'       => false,       // Start disabled until configured
'default_rate' => '0.00',      // Require explicit rate setting
'type'         => 'per_order', // Most common pricing model

// ❌ risky defaults
'active'       => true,     // Could activate before configuration
'default_rate' => '999.99', // Extremely high fallback
```

### 4. Environment-Aware Configuration

```php
'api_config' => [
    'endpoint'   => env('SHIPPING_API_URL', 'https://api.example.com'),
    'api_key'    => env('SHIPPING_API_KEY'),
    'debug_mode' => env('SHIPPING_DEBUG', false),
    'timeout'    => env('SHIPPING_TIMEOUT', 30),
],
```

## Common Configuration Patterns

Understanding common configuration patterns helps you design shipping methods that are both flexible and maintainable. Here are the most frequently used approaches with detailed explanations and implementation guidance.

### Pattern 1: Multi-Service Carrier

This pattern is ideal when you want to offer multiple shipping speed options from the same carrier company. Each service level has its own configuration while sharing common infrastructure.

```php
return [
    'express_standard' => [
        'code'     => 'express_standard',
        'title'    => 'Express Standard (2-3 Days)',
        'rate'     => '9.99',
        'class'    => 'Vendor\Express\Carriers\ExpressStandard',
        'features' => ['tracking'],
        'days'     => '2-3',
    ],

    'express_priority' => [
        'code'       => 'express_priority', 
        'title'      => 'Express Priority (1-2 Days)',
        'rate'       => '19.99',
        'class'      => 'Vendor\Express\Carriers\ExpressPriority',
        'features'   => ['tracking', 'insurance', 'weekend'],
        'days'       => '1-2',
        'max_weight' => 30.0,
    ],

    'express_overnight' => [
        'code'          => 'express_overnight',
        'title'         => 'Express Overnight',
        'rate'          => '39.99', 
        'class'         => 'Vendor\Express\Carriers\ExpressOvernight',
        'features'      => ['tracking', 'insurance', 'signature'],
        'days'          => '1',
        'max_weight'    => 20.0,
        'business_only' => true,
    ],
];
```

::: details Multi-Service Benefits & Implementation Tips

**Benefits:**
- Customers can choose speed vs. cost
- Clear service differentiation
- Shared backend infrastructure
- Consistent carrier branding

**Implementation Tips:**
- Use shared base class for common functionality
- Differentiate services through configuration, not code
- Implement service-specific validation rules
- Consider cutoff times for same-day processing

**Common Use Cases:**
- FedEx: Ground, 2-Day, Overnight
- UPS: Ground, 3-Day, Next Day
- Custom carrier with multiple speed tiers
:::

### Pattern 2: Feature-Based Configuration

This pattern structures configuration around specific features and services, making it easy to enable/disable capabilities and calculate feature-based pricing.

```php
'premium_shipping' => [
    'code'      => 'premium_shipping',
    'title'     => 'Premium White Glove Service',
    'class'     => 'Vendor\Premium\Carriers\PremiumShipping',
    'base_rate' => '49.99',
    
    'features' => [
        'white_glove' => [
            'fee'       => '25.00',
            'min_value' => 500.00,
        ],

        'assembly' => [
            'fee'   => '75.00',
            'types' => ['furniture', 'equipment'],
        ],

        'appointment' => [
            'fee'   => '15.00',
            'slots' => ['morning', 'afternoon', 'evening'],
        ],

        'packaging' => [
            'fee'      => '12.00',
            'includes' => ['bubble_wrap', 'corner_protection'],
        ],
    ],
    
    'discounts' => [
        'bundle_all'      => 0.25,
        'volume_min'      => 1000.00,
        'volume_discount' => 0.10,
    ],
    
    'availability' => [
        'areas' => ['metro', 'suburban'],
        'hours' => 'weekdays 8-18, saturday 9-15',
    ],
];
```

::: details Feature-Based Benefits & Implementation Tips

**Benefits:**
- Modular feature enabling/disabling
- Clear pricing transparency
- Easy feature expansion
- Customer choice flexibility

**Implementation Tips:**
- Validate feature combinations for compatibility
- Calculate total price by summing enabled features
- Implement feature-specific availability checks
- Provide clear feature descriptions for customers

**Common Use Cases:**
- Furniture delivery with assembly options
- Appliance delivery with installation
- Art/antique shipping with special handling
- Business equipment delivery with setup
:::

### Pattern 3: Region-Specific Configuration

This pattern optimizes shipping for different geographic regions, each with unique pricing, delivery times, and service capabilities.

```php
'international_express' => [
    'code'  => 'international_express',
    'title' => 'International Express Shipping',
    'class' => 'Vendor\International\Carriers\InternationalExpress',
    
    'regions' => [
        'north_america' => [
            'countries'  => ['US', 'CA', 'MX'],
            'rate'       => '29.99',
            'days'       => '3-5',
            'features'   => ['tracking', 'customs_clearance', 'saturday'],
            'max_weight' => 70.0,
            'prohibited' => ['batteries', 'liquids'],
        ],

        'europe' => [
            'countries'   => ['GB', 'DE', 'FR', 'IT', 'ES'],
            'rate'        => '39.99', 
            'days'        => '5-7',
            'features'    => ['tracking', 'customs_clearance'],
            'max_weight'  => 50.0,
            'prohibited'  => ['food', 'plants', 'medicines'],
            'brexit_docs' => true,
        ],

        'asia_pacific' => [
            'countries'   => ['JP', 'AU', 'SG', 'HK'],
            'rate'        => '49.99',
            'days'        => '7-10',
            'max_weight'  => 30.0,
            'prohibited'  => ['electronics', 'food'],
            'local_agent' => true,
        ],
    ],
    
    'currency'      => 'USD',
    'fallback_rate' => '75.00',
];
```

::: details Region-Specific Benefits & Implementation Tips

**Benefits:**
- Accurate regional pricing and delivery estimates
- Compliance with local regulations
- Optimized service levels per region
- Cultural and legal consideration handling

**Implementation Tips:**
- Validate destination countries against region definitions
- Implement currency conversion for international pricing
- Handle customs documentation automatically
- Provide clear restriction information to customers
- Monitor political and security situations for risk assessment

**Common Use Cases:**
- Global e-commerce platforms
- B2B international shipping
- Cross-border marketplace integration
- Compliance-heavy industries (medical, electronics)
:::

### Pattern 4: API-Integrated Configuration

For carriers that integrate with external shipping APIs, this pattern manages API credentials, endpoints, and fallback scenarios.

```php
'fedex_integration' => [
    'code'  => 'fedex_integration',
    'title' => 'FedEx Express',
    'class' => 'Vendor\FedEx\Carriers\FedExIntegration',
    
    'api' => [
        'environment' => env('FEDEX_ENV', 'sandbox'),

        'endpoints'   => [
            'production' => 'https://apis.fedex.com/rate/v1/rates/quotes',
            'sandbox'    => 'https://apis-sandbox.fedex.com/rate/v1/rates/quotes',
        ],

        'credentials' => [
            'api_key' => env('FEDEX_API_KEY'),
            'secret'  => env('FEDEX_SECRET_KEY'),
            'account' => env('FEDEX_ACCOUNT'),
        ],

        'timeout' => 30,
        'retries' => 3,
    ],
    
    'services' => [
        'FEDEX_GROUND'       => 'FedEx Ground',
        'FEDEX_2_DAY'        => 'FedEx 2Day',
        'STANDARD_OVERNIGHT' => 'FedEx Standard Overnight',
        'PRIORITY_OVERNIGHT' => 'FedEx Priority Overnight',
    ],
    
    'cache' => [
        'enabled' => true,
        'ttl'     => 300, // 5 minutes
        'prefix'  => 'fedex_rates_',
    ],
    
    'fallback' => [
        'enabled' => true,

        'rates'   => [
            'ground'    => '8.99',
            'express'   => '24.99',
            'overnight' => '45.99',
        ],

        'message' => 'Estimated shipping cost',
    ],
    
    'features' => [
        'real_time_rates' => true,
        'live_tracking'   => true,
        'insurance'       => true,
        'signature'       => true,
    ],
];
```

::: details API-Integrated Benefits & Implementation Tips

**Benefits:**
- Real-time accurate rates
- Live tracking integration
- Automatic service updates
- Professional carrier integration

**Implementation Tips:**
- Always implement fallback rates for API failures
- Cache responses to reduce API calls and improve performance
- Handle authentication token renewal automatically
- Implement rate limiting to respect API quotas
- Log API interactions for debugging and monitoring

**Common Use Cases:**
- Major carrier integrations (FedEx, UPS, DHL)
- Real-time rate shopping
- Enterprise shipping solutions
- High-volume shipping operations
:::

Each pattern serves different business needs and can be combined or adapted based on your specific requirements. Choose the pattern that best matches your shipping method's complexity and feature requirements.

## What's Next?

Now that you understand carrier configuration, let's explore how to build the business logic:

**📖 [Understanding Carrier Class →](./understanding-carrier-class.md)**
Learn how to implement the business logic and rate calculation methods for your shipping method.

**📖 [Understanding System Configuration →](./understanding-system-configuration.md)**
Learn how to create admin interfaces for your shipping method settings.

**📖 [Advanced Rate Calculation Examples →](./advanced-rate-calculation-examples.md)**
Implement sophisticated pricing models including API integrations and complex business rules.

::: tip Configuration Best Practices Summary

**Structure:**
- Use clear, descriptive property names
- Group related settings logically
- Provide sensible defaults for all optional properties

**Maintainability:**
- Separate configuration from business logic
- Use environment variables for sensitive data
- Validate configuration during application boot

**Testing:**
- Test configuration loading
- Verify class instantiation works
- Validate all configuration branches
:::

Your carrier configuration is now robust and ready for complex shipping scenarios.

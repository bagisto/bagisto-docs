# Understanding Payment Configuration

The payment configuration consists of two main components: payment method configuration that defines basic properties and system configuration that creates the admin interface.

::: info What You'll Learn
This section covers:
- Payment method configuration structure and properties
- System configuration for admin interface
- Field types and validation options
- Multi-channel and environment-specific settings
:::

## Payment Methods Configuration

The payment methods configuration defines the basic properties and metadata for your payment method:

**File:** `packages/Webkul/CustomStripePayment/src/Config/payment_methods.php`

```php
<?php

return [
    'custom_stripe_payment' => [
        'code'        => 'custom_stripe_payment',
        'title'       => 'Credit Card (Stripe)',
        'description' => 'Secure credit card payments powered by Stripe',
        'class'       => 'Webkul\CustomStripePayment\Payment\CustomStripePayment',
        'active'      => true,
        'sort'        => 1,
    ]
];
```

::: info Configuration Properties Explained
**Essential Properties:**

- **`code`**: Unique identifier used throughout Bagisto (must match class property)
- **`title`**: Default display name for customers (can be overridden in admin)
- **`description`**: Default description shown during checkout
- **`class`**: Full namespace path to your payment class
- **`active`**: Default enabled status (can be changed in admin)
- **`sort`**: Display order during checkout (lower numbers appear first)
:::

### Configuration Properties Breakdown

| Property | Type | Required | Description |
| -------- | ---- | -------- | ----------- |
| **`code`** | String | Yes | Unique identifier for payment method |
| **`title`** | String | Yes | Display name in checkout |
| **`description`** | String | No | Brief explanation of payment method |
| **`class`** | String | Yes | Full namespace to payment class |
| **`active`** | Boolean | No | Default enabled state (default: false) |
| **`sort`** | Integer | No | Display order (default: 0) |

## System Configuration Structure

The system configuration creates the admin interface for payment method settings:

**File:** `packages/Webkul/CustomStripePayment/src/Config/system.php`

```php
<?php

return [
    'key'    => 'sales.payment_methods.custom_stripe_payment',
    'name'   => 'Custom Stripe Payment',
    'sort'   => 3,
    'fields' => [
        [
            'name'          => 'title',
            'title'         => 'Method Title',
            'type'          => 'text',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => true
        ],
        [
            'name'          => 'description',
            'title'         => 'Description',
            'type'          => 'textarea',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'publishable_key',
            'title'         => 'Stripe Publishable Key',
            'type'          => 'text',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'secret_key',
            'title'         => 'Stripe Secret Key',
            'type'          => 'password',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'    => 'environment',
            'title'   => 'Environment',
            'type'    => 'select',
            'options' => [
                [
                    'title' => 'Sandbox',
                    'value' => 'sandbox',
                ],
                [
                    'title' => 'Production',
                    'value' => 'production',
                ],
            ],
            'channel_based' => true,
            'locale_based'  => false,
        ],
        [
            'name'          => 'webhook_secret',
            'title'         => 'Webhook Secret',
            'type'          => 'password',
            'info'          => 'Secret key for webhook signature verification',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'capture_mode',
            'title'         => 'Payment Capture',
            'type'          => 'select',
            'options'       => [
                [
                    'title' => 'Automatic',
                    'value' => 'automatic',
                ],
                [
                    'title' => 'Manual',
                    'value' => 'manual',
                ],
            ],
            'channel_based' => true,
            'locale_based'  => false,
        ],
        [
            'name'          => 'sort',
            'title'         => 'Sort Order',
            'type'          => 'text',
            'validation'    => 'numeric|min:0',
            'channel_based' => true,
            'locale_based'  => false
        ],
        [
            'name'          => 'active',
            'title'         => 'Enabled',
            'type'          => 'boolean',
            'validation'    => 'required',
            'channel_based' => true,
            'locale_based'  => false
        ]
    ]
];
```

### Field Types and Properties

#### Text Field
```php
[
    'name'          => 'publishable_key',
    'title'         => 'Stripe Publishable Key',
    'type'          => 'text',
    'validation'    => 'required',
    'channel_based' => true,
    'locale_based'  => false,
    'info'          => 'Your Stripe publishable key from dashboard'
]
```

#### Password Field
```php
[
    'name'          => 'secret_key',
    'title'         => 'Stripe Secret Key',
    'type'          => 'password',
    'validation'    => 'required',
    'channel_based' => true,
    'locale_based'  => false
]
```

#### Select Field
```php
[
    'name'    => 'environment',
    'title'   => 'Environment',
    'type'    => 'select',
    'options' => [
        [
            'title' => 'Sandbox',
            'value' => 'sandbox',
        ],
        [
            'title' => 'Production',
            'value' => 'production',
        ],
    ],
    'channel_based' => true,
    'locale_based'  => false,
]
```

#### Boolean Field
```php
[
    'name'          => 'active',
    'title'         => 'Enabled',
    'type'          => 'boolean',
    'validation'    => 'required',
    'channel_based' => true,
    'locale_based'  => false
]
```

#### Textarea Field
```php
[
    'name'          => 'description',
    'title'         => 'Description',
    'type'          => 'textarea',
    'rows'          => 4,
    'channel_based' => true,
    'locale_based'  => true
]
```

### Advanced Configuration Options

#### Multi-select Field
```php
[
    'name'     => 'allowed_currencies',
    'title'    => 'Allowed Currencies',
    'type'     => 'multiselect',
    'options'  => [
        ['title' => 'US Dollar', 'value' => 'USD'],
        ['title' => 'Euro', 'value' => 'EUR'],
        ['title' => 'British Pound', 'value' => 'GBP'],
    ],
    'channel_based' => true,
    'locale_based'  => false,
]
```

#### Image Upload Field
```php
[
    'name'          => 'logo',
    'title'         => 'Payment Method Logo',
    'type'          => 'image',
    'validation'    => 'mimes:jpeg,jpg,png,gif|max:2048',
    'channel_based' => true,
    'locale_based'  => false
]
```

#### Dependent Fields
```php
[
    'name'       => 'test_mode_settings',
    'title'      => 'Test Mode Settings',
    'type'       => 'text',
    'depends'    => 'environment:sandbox',
    'validation' => 'required_if:environment,sandbox',
    'channel_based' => true,
    'locale_based'  => false
]
```

## Configuration Best Practices

### Field Organization
```php
'fields' => [
    // Basic settings first
    ['name' => 'active', 'title' => 'Enabled', ...],
    ['name' => 'title', 'title' => 'Method Title', ...],
    ['name' => 'description', 'title' => 'Description', ...],
    
    // API credentials
    ['name' => 'environment', 'title' => 'Environment', ...],
    ['name' => 'publishable_key', 'title' => 'Publishable Key', ...],
    ['name' => 'secret_key', 'title' => 'Secret Key', ...],
    
    // Advanced settings
    ['name' => 'webhook_secret', 'title' => 'Webhook Secret', ...],
    ['name' => 'capture_mode', 'title' => 'Payment Capture', ...],
    
    // Display settings last
    ['name' => 'sort', 'title' => 'Sort Order', ...],
]
```

### Validation Guidelines
```php
// Required fields
'validation' => 'required'

// Numeric fields
'validation' => 'numeric|min:0'

// URL fields
'validation' => 'url'

// Email fields
'validation' => 'email'

// Custom validation
'validation' => 'required|regex:/^pk_test_[a-zA-Z0-9]{24}$/'
```

### Security Considerations
```php
// Use password type for sensitive data
'type' => 'password'

// Add helpful information
'info' => 'This key will be encrypted when saved'

// Environment-specific validation
'validation' => 'required_if:environment,production'
```

## Multi-channel and Locale Support

### Channel-based Configuration
```php
'channel_based' => true  // Different values per sales channel
```

### Locale-based Configuration
```php
'locale_based' => true   // Translatable fields
```

### Example Multi-channel Setup
```php
// Different API keys per channel
[
    'name'          => 'secret_key',
    'title'         => 'Secret Key',
    'type'          => 'password',
    'channel_based' => true,  // US store uses different key than EU store
    'locale_based'  => false,
]

// Translatable titles
[
    'name'          => 'title',
    'title'         => 'Method Title',
    'type'          => 'text',
    'channel_based' => true,  // Different per channel
    'locale_based'  => true,  // Translated per language
]
```

## Key Takeaways

Effective payment configuration provides flexibility while maintaining security:

**Configuration Best Practices:**
- ✅ Group related fields logically
- ✅ Use appropriate field types for data
- ✅ Implement proper validation rules
- ✅ Provide helpful descriptions and info text

**Security Guidelines:**
- ✅ Use password fields for sensitive data
- ✅ Never expose API keys in frontend
- ✅ Validate environment-specific requirements
- ✅ Implement proper field dependencies

**Multi-channel Considerations:**
- ✅ Enable channel_based for store-specific settings
- ✅ Enable locale_based for translatable content
- ✅ Test with multiple channel configurations
- ✅ Consider regional compliance requirements

### Continue Learning

**📖 [Understanding Payment Class →](./understanding-payment-class.md)**
Learn how to implement the payment processing logic that uses these configuration values.

**📖 [Advanced Payment Examples →](./advanced-payment-examples.md)**
Explore sophisticated payment features and integration patterns.

**📖 [Back to Getting Started ←](./getting-started.md)**
Return to the main payment method development guide.

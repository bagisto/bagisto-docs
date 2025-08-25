# Getting Started

Creating custom payment methods in Bagisto enables you to offer diverse payment options that cater to your customers' preferences and expand your market reach. Whether you need to integrate with local payment gateways, implement cryptocurrency payments, or create specialized payment flows, custom payment methods provide the flexibility your business requires.

For our tutorial, we'll create a **Custom Stripe Payment** method that demonstrates all the essential concepts you need to build any type of payment solution.

::: info Learning Objectives
By the end of this guide, you'll be able to:
- Understand Bagisto's payment architecture and components
- Create custom payment methods using both generator and manual approaches
- Configure admin interfaces for payment method settings
- Implement secure payment processing with webhooks
- Test and deploy custom payment methods in production
:::

## Understanding Bagisto Payment Architecture

Bagisto's payment system is built around a flexible method-based architecture that separates configuration from business logic:

### Core Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Payment Methods Configuration** | Defines payment method properties and metadata | `Config/payment_methods.php` |
| **Payment Classes** | Contains business logic for payment processing | `Payment/ClassName.php` |
| **System Configuration** | Admin interface forms for method settings | `Config/system.php` |
| **Service Provider** | Registers payment method with Bagisto core | `Providers/ServiceProvider.php` |

### Key Features

- **Flexible Payment Processing**: Support for redirects, APIs, webhooks, or custom payment flows
- **Configuration Management**: Admin-friendly settings interface with validation
- **Multi-channel Support**: Different settings per sales channel
- **Security Ready**: Built-in CSRF protection and secure payment handling
- **Extensible Architecture**: Easy integration with third-party payment gateways

## Development Workflow

The typical workflow for creating a custom payment method follows these steps:

### 1. Setup and Structure
Choose between package generator (quick) or manual setup (educational) to create your payment method foundation.

**📖 Next:** [Creating Your First Payment Method](./create-your-first-payment-method.md)

### 2. Configure Payment Properties
Define your payment method's basic properties, supported features, and availability rules.

**📖 Next:** [Understanding Payment Configuration](./understanding-payment-configuration.md)

### 3. Implement Payment Logic
Build the payment processing class with secure transaction handling and error management.

**📖 Next:** [Understanding Payment Class](./understanding-payment-class.md)

### 4. Add Advanced Features
Implement webhooks, refunds, recurring payments, and complex business rules.

**📖 Next:** [Advanced Payment Examples](./advanced-payment-examples.md)

## Prerequisites

Before you begin, ensure you have:

- **Bagisto Installation**: A working Bagisto development environment
- **PHP Knowledge**: Familiarity with PHP 8.1+ and Laravel concepts
- **Payment Gateway Account**: Access to your chosen payment provider's API
- **Development Tools**: Composer, Git, and a code editor

::: tip Quick Start Path
**New to Bagisto?** Start with the [package generator approach](./create-your-first-payment-method.md#method-1-using-bagisto-package-generator-quick-setup) for your first payment method.

**Want to understand everything?** Follow the [manual setup approach](./create-your-first-payment-method.md#method-2-manual-setup-complete-understanding) for complete control and learning.
:::

## What You'll Build

Throughout this guide, you'll create a **Custom Stripe Payment** method that includes:

### Core Features
- ✅ **Secure Payment Processing**: Tokenized payment handling with Stripe API
- ✅ **Admin Configuration**: Complete settings interface in Bagisto admin
- ✅ **Order Integration**: Seamless integration with Bagisto's order system
- ✅ **Multi-channel Support**: Different API keys per sales channel

### Advanced Features (Optional)
- 🚀 **Webhook Handling**: Real-time payment status updates
- 🚀 **Refund Support**: Programmatic refund processing
- 🚀 **Recurring Payments**: Subscription and recurring payment support
- 🚀 **3D Secure**: Enhanced security for card payments

## Architecture Overview

```text
Custom Stripe Payment Package
├── src/
│   ├── Payment/
│   │   └── CustomStripePayment.php     # Payment processing logic
│   ├── Config/
│   │   ├── payment_methods.php         # Payment method definition
│   │   └── system.php                  # Admin interface configuration
│   └── Providers/
│       └── ServiceProvider.php        # Package registration
├── composer.json                      # Package metadata
└── README.md                          # Documentation
```

::: info Development Time Estimate
- **Basic Implementation**: 2-3 hours (using generator)
- **Custom Logic**: 4-6 hours (manual setup + payment integration)
- **Advanced Features**: 6-12 hours (webhooks, refunds, 3D Secure)
- **Testing & Polish**: 2-4 hours (admin testing, payment flow validation)
:::

## Security Considerations

Payment methods require special attention to security:

### Essential Security Practices
- **Never store sensitive payment data** in your database
- **Use HTTPS** for all payment-related requests
- **Validate webhooks** with signature verification
- **Implement proper error handling** without exposing sensitive information
- **Use environment variables** for API keys and secrets

### Compliance Requirements
- **PCI DSS**: Follow payment card industry data security standards
- **GDPR**: Ensure customer data protection compliance
- **Regional Laws**: Consider local payment regulations

## Ready to Start?

Choose your learning path and begin building your custom payment method:

**🚀 [Create Your First Payment Method →](./create-your-first-payment-method.md)**

This section covers both package generator and manual approaches, helping you understand the foundations while building a working payment method.

# Getting Started

Creating custom payment methods in Bagisto allows you to integrate any payment gateway or processor with your store. Whether you need local payment methods, cryptocurrency payments, or specialized payment flows, custom payment methods provide the flexibility your business requires.

For our tutorial, we'll create a **Custom Stripe Payment** method that demonstrates all the essential concepts you need to build any type of payment solution.

::: info What You'll Learn
By the end of this guide, you'll be able to:
- Understand Bagisto's payment architecture
- Create custom payment methods using generator or manual approaches
- Configure admin interfaces for payment settings
- Implement secure payment processing
:::

## Understanding Bagisto Payment Architecture

Bagisto's payment system is built around a flexible method-based architecture that separates configuration from business logic:

### Core Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Payment Methods Configuration** | Defines payment method properties | `Config/payment_methods.php` |
| **Payment Classes** | Contains payment processing logic | `Payment/ClassName.php` |
| **System Configuration** | Admin interface forms | `Config/system.php` |
| **Service Provider** | Registers payment method | `Providers/ServiceProvider.php` |

### Key Features

- **Flexible Payment Processing**: Support for redirects, APIs, webhooks, or custom flows
- **Configuration Management**: Admin-friendly settings interface
- **Multi-channel Support**: Different settings per sales channel
- **Security Ready**: Built-in CSRF protection and secure handling
- **Extensible Architecture**: Easy integration with third-party gateways

## Development Workflow

The typical workflow for creating a custom payment method follows these steps:

### 1. Create Your Payment Method
Choose between package generator (quick) or manual setup (educational) to create a complete working payment method.

**📖 [Create Your First Payment Method →](./create-your-first-payment-method.md)**

This section shows you how to build a complete working payment method, then the remaining sections help you understand how to customize each component.

### 2. Understand Payment Configuration
Learn how payment configuration works and how to customize payment method properties.

**📖 Next:** [Understanding Payment Configuration](./understanding-payment-configuration.md)

### 3. Understand Payment Logic
Explore how the payment class handles processing and payment method behavior.

**📖 Next:** [Understanding Payment Class](./understanding-payment-class.md)

You'll have a complete working payment method after step 1, and steps 2-3 help you understand how to customize and extend it.

## Prerequisites

Before you begin, ensure you have:

- **Bagisto Installation**: A working Bagisto development environment
- **PHP Knowledge**: Familiarity with PHP 8.1+ and Laravel concepts
- **Package Development**: Basic understanding of Laravel service providers ([Package Development Guide](../package-development/getting-started.md))
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
│       └── ServiceProvider.php         # Package registration
├── composer.json                       # Package metadata
└── README.md                           # Documentation
```

::: info Development Time Estimate
- **Basic Implementation**: 2-3 hours (using generator)
- **Custom Logic**: 4-6 hours (manual setup + payment integration)
- **Testing & Polish**: 2-4 hours (admin testing, payment flow validation)
:::

## Ready to Start?

Choose your learning path and begin building your custom payment method:

**🚀 [Create Your First Payment Method →](./create-your-first-payment-method.md)**

This section covers both package generator and manual approaches, helping you understand the foundations while building a working payment method.

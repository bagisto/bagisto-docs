# Getting Started

Creating custom shipping methods in Bagisto allows you to tailor delivery options to meet your specific business needs. Whether you need special handling for fragile items, express delivery options, or region-specific shipping rules, custom shipping methods provide the flexibility your e-commerce store requires.

For our tutorial, we'll create a **Custom Express Shipping** method that demonstrates all the essential concepts you need to build any type of shipping solution.

::: info Learning Objectives
By the end of this guide, you'll be able to:
- Understand Bagisto's shipping architecture and components
- Create custom shipping methods using both generator and manual approaches
- Configure admin interfaces for shipping method settings
- Implement rate calculation logic
:::

## Understanding Bagisto Shipping Architecture

Bagisto's shipping system is built around a flexible carrier-based architecture that separates configuration from business logic:

### Core Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Carriers Configuration** | Defines shipping method properties and metadata | `Config/carriers.php` |
| **Carrier Classes** | Contains business logic for rate calculation | `Carriers/ClassName.php` |
| **System Configuration** | Admin interface forms for method settings | `Config/system.php` |
| **Service Provider** | Registers shipping method with Bagisto core | `Providers/ServiceProvider.php` |

### Key Features

- **Flexible Rate Calculation**: Support for per-unit, per-order, weight-based, or custom pricing models
- **Configuration Management**: Admin-friendly settings interface with validation
- **Multi-channel Support**: Different rates and settings per sales channel
- **Localization Ready**: Full translation support for international stores
- **Extensible Architecture**: Easy integration with third-party APIs and services

## Development Workflow

The typical workflow for creating a custom shipping method follows these steps:

### 1. Create Your Shipping Method
Choose between package generator (quick) or manual setup (educational) to create a complete working shipping method.

**📖 [Create Your First Shipping Method →](./create-your-first-shipping-method.md)**

This section shows you how to build a complete working shipping method, then the remaining sections help you understand how to customize each component.

### 2. Understand Carrier Configuration
Learn how carrier configuration works and how to customize shipping method properties.

**📖 Next:** [Understanding Carrier Configuration](./understanding-carrier-configuration.md)

### 3. Understand Business Logic
Explore how the carrier class handles rate calculation and shipping method behavior.

**📖 Next:** [Understanding Carrier Class](./understanding-carrier-class.md)

### 4. Understand Admin Interface
Learn how system configuration creates admin forms for managing shipping method settings.

**📖 Next:** [Understanding System Configuration](./understanding-system-configuration.md)

You'll have a complete working shipping method after step 1, and steps 2-4 help you understand how to customize and extend it.

## Prerequisites

Before you begin, ensure you have:

- **Bagisto Installation**: A working Bagisto development environment
- **PHP Knowledge**: Familiarity with PHP 8.1+ and Laravel concepts
- **Package Development**: Basic understanding of [Package Development](../package-development/getting-started.md)
- **Development Tools**: Composer, Git, and a code editor

::: tip Quick Start Path
**New to Bagisto?** Start with the [package generator approach](./create-your-first-shipping-method.md#method-1-using-bagisto-package-generator-quick-setup) for your first shipping method.

**Want to understand everything?** Follow the [manual setup approach](./create-your-first-shipping-method.md#method-2-manual-setup-complete-understanding) for complete control and learning.
:::

## What You'll Build

Throughout this guide, you'll create a **Custom Express Shipping** method that includes:

### Core Features
- ✅ **Dual Pricing Models**: Support for both per-order and per-item pricing
- ✅ **Admin Configuration**: Complete settings interface in Bagisto admin
- ✅ **Rate Calculation**: Dynamic pricing based on cart contents
- ✅ **Multi-channel Support**: Different settings per sales channel

## Architecture Overview

```text
Custom Express Shipping Package
├── src/
│   ├── Carriers/
│   │   └── CustomExpressShipping.php    # Rate calculation logic
│   ├── Config/
│   │   ├── carriers.php                 # Shipping method definition
│   │   └── system.php                   # Admin interface configuration
│   └── Providers/
│       └── ServiceProvider.php          # Package registration
├── composer.json                        # Package metadata
└── README.md                            # Documentation
```

::: info Development Time Estimate
- **Basic Implementation**: 1-2 hours (using generator)
- **Custom Logic**: 2-4 hours (manual setup + customization)
- **Advanced Features**: 4-8 hours (API integration, complex rules)
- **Testing & Polish**: 1-2 hours (admin testing, frontend validation)
:::

## Ready to Start?

Choose your learning path and begin building your custom shipping method:

**🚀 [Create Your First Shipping Method →](./create-your-first-shipping-method.md)**

This section covers both package generator and manual approaches, helping you understand the foundations while building a working shipping method.

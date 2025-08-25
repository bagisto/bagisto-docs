# Getting Started

Creating custom product types in Bagisto allows you to define specialized product behaviors that perfectly match your business needs. Whether you need subscription products, rental items, digital services, or complex product variations, custom product types provide the flexibility to create exactly what your store requires.

For our tutorial, we'll create a **Subscription Product** type that demonstrates all the essential concepts you need to build any type of custom product solution.

::: info Learning Objectives
By the end of this guide, you'll be able to:
- Understand Bagisto's product type architecture and components
- Create custom product types using both generator and manual approaches
- Configure product type properties and behaviors
- Implement custom business logic for specialized products
- Test and deploy custom product types in production
:::

## Understanding Bagisto Product Type Architecture

Bagisto's product system is built around a flexible type-based architecture that separates product behavior from data storage:

### Core Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Product Types Configuration** | Defines product type properties and metadata | `Config/product_types.php` |
| **Product Type Classes** | Contains business logic for product behavior | `Type/ClassName.php` |
| **AbstractType Base Class** | Provides core functionality for all product types | Extended by custom classes |
| **Service Provider** | Registers product type with Bagisto core | `Providers/ServiceProvider.php` |

### Key Features

- **Flexible Product Behavior**: Custom logic for pricing, inventory, cart operations
- **Type-specific Validation**: Different validation rules per product type
- **Custom Attributes**: Type-specific product attributes and fields
- **Extensible Architecture**: Easy integration with existing Bagisto functionality
- **Admin Integration**: Seamless integration with product creation interface

## Development Workflow

The typical workflow for creating a custom product type follows these steps:

### 1. Setup and Structure
Choose between package generator (if available) or manual setup to create your product type foundation.

**📖 Next:** [Creating Your First Product Type](./create-your-first-product-type.md)

### 2. Configure Product Type Properties
Define your product type's basic properties, behavior settings, and availability rules.

**📖 Next:** [Understanding Product Type Configuration](./understanding-product-type-configuration.md)

### 3. Implement Product Logic
Build the product type class with custom business logic, pricing, and inventory management.

**📖 Next:** [Understanding AbstractType](./understanding-abstract-type.md)

### 4. Add Advanced Features
Implement sophisticated features like custom cart behavior, special pricing models, and complex validation.

**📖 Next:** [Advanced Product Type Examples](./advanced-product-type-examples.md)

## Prerequisites

Before you begin, ensure you have:

- **Bagisto Installation**: A working Bagisto development environment
- **PHP Knowledge**: Familiarity with PHP 8.1+ and Laravel concepts
- **Package Development**: Basic understanding of Bagisto package structure
- **Product Understanding**: Knowledge of how Bagisto products work

::: tip Quick Start Path
**New to Bagisto?** Start with the [step-by-step creation guide](./create-your-first-product-type.md) for your first product type.

**Want deep understanding?** Follow the [manual setup approach](./create-your-first-product-type.md#method-2-manual-setup-complete-understanding) to learn every component.
:::

## What You'll Build

Throughout this guide, you'll create a **Subscription Product** type that includes:

### Core Features
- ✅ **Custom Product Behavior**: Subscription-specific logic and validation
- ✅ **Inventory Management**: Service-based products without traditional stock
- ✅ **Pricing Logic**: Recurring pricing calculations and discounts
- ✅ **Cart Integration**: Subscription-specific cart preparation and validation

### Advanced Features (Optional)
- 🚀 **Billing Frequencies**: Monthly, quarterly, yearly subscription options
- 🚀 **Trial Periods**: Free trial handling and conversion logic
- 🚀 **Subscription Limits**: Slot-based availability management
- 🚀 **Custom Attributes**: Subscription-specific product fields

## Architecture Overview

```text
Subscription Product Type Package
├── src/
│   ├── Type/
│   │   └── Subscription.php              # Product type logic
│   ├── Config/
│   │   └── product_types.php             # Product type definition
│   └── Providers/
│       └── ServiceProvider.php          # Package registration
├── composer.json                        # Package metadata
└── README.md                            # Documentation
```

::: info Development Time Estimate
- **Basic Implementation**: 1-2 hours (manual setup)
- **Custom Logic**: 2-4 hours (business logic + validation)
- **Advanced Features**: 4-8 hours (complex behaviors, custom attributes)
- **Testing & Polish**: 1-2 hours (admin testing, cart validation)
:::

## Built-in Product Types Reference

Understanding Bagisto's built-in product types helps you decide what to extend or customize:

### Simple Products
- **Use Case**: Basic products with straightforward pricing and inventory
- **Features**: Standard pricing, inventory tracking, simple cart behavior
- **Best For**: Physical products, digital downloads

### Configurable Products
- **Use Case**: Products with variations (size, color, etc.)
- **Features**: Variant management, attribute-based pricing
- **Best For**: Clothing, electronics with options

### Virtual Products
- **Use Case**: Non-physical products or services
- **Features**: No shipping required, downloadable content
- **Best For**: Software licenses, consultations

### Grouped Products
- **Use Case**: Related products sold together
- **Features**: Bundle pricing, component selection
- **Best For**: Product kits, related item collections

## When to Create Custom Product Types

Consider creating a custom product type when:

- ✅ **Unique Behavior**: Your products need behavior not covered by built-in types
- ✅ **Special Pricing**: Complex pricing models or calculations
- ✅ **Custom Attributes**: Type-specific fields and validation rules
- ✅ **Inventory Logic**: Non-standard inventory management requirements
- ✅ **Business Rules**: Specific business logic for product handling

## Ready to Start?

Choose your learning path and begin building your custom product type:

**🚀 [Create Your First Product Type →](./create-your-first-product-type.md)**

This section covers both package generator and manual approaches, helping you understand the foundations while building a working subscription product type.

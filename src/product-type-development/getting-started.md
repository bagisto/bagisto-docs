# Getting Started

Creating custom product types in Bagisto allows you to define specialized product behaviors that perfectly match your business needs. Whether you need subscription products, rental items, digital services, or complex product variations, custom product types provide the flexibility to create exactly what your store requires.

For our tutorial, we'll create a **Subscription Product** type that demonstrates all the essential concepts you need to build any type of custom product solution.

::: info What You'll Learn
By the end of this guide, you'll be able to:
- Understand Bagisto's product type architecture
- Create custom product types step by step
- Configure product type properties and behaviors
- Implement custom business logic for specialized products
:::

## Understanding Bagisto Product Type Architecture

Bagisto's product system is built around a flexible type-based architecture that separates product behavior from data storage:

### Core Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **Product Types Configuration** | Defines product type properties | `Config/product_types.php` |
| **Product Type Classes** | Contains business logic for product behavior | `Type/ClassName.php` |
| **`AbstractType` Base Class** | Provides core functionality | Extended by custom classes |
| **Service Provider** | Registers product type | `Providers/ServiceProvider.php` |

### Key Features

- **Flexible Product Behavior**: Custom logic for pricing, inventory, cart operations
- **Type-specific Validation**: Different validation rules per product type
- **Custom Attributes**: Type-specific product attributes and fields
- **Admin Integration**: Seamless integration with product creation interface

## Development Workflow

The typical workflow for creating a custom product type follows these steps:

### 1. Create Your Product Type
Build a complete working product type with all essential components.

**📖 [Create Your First Product Type →](./create-your-first-product-type.md)**

This section shows you how to build a complete working product type, then the remaining sections help you understand how to customize each component.

### 2. Understand Product Type Configuration
Learn how product type configuration works and how to customize product type properties.

**📖 Next:** [Understanding Product Type Configuration](./understanding-product-type-configuration.md)

### 3. Understand AbstractType Methods
Master the key methods available for implementing custom product behavior and business logic.

**📖 Next:** [Understanding AbstractType Class](./understanding-abstract-type-class.md)

### 4. Build Complete Implementation
See how to put it all together in a production-ready subscription product type.

**📖 Next:** [Building Your Subscription Product Type](./building-your-subscription-product-type.md)

You'll have a complete working product type after step 1, and steps 2-4 help you understand how to customize and extend it.

## Prerequisites

Before you begin, ensure you have:

- **Bagisto Installation**: A working Bagisto development environment
- **PHP Knowledge**: Familiarity with PHP 8.4 (8.3 on Bagisto 2.4) and Laravel concepts
- **Package Development**: Basic understanding of Laravel service providers ([Package Development Guide](../package-development/getting-started.md))
- **Development Tools**: Composer, Git, and a code editor

::: tip Quick Start Path
**New to Bagisto?** Start with the [step-by-step creation guide](./create-your-first-product-type.md) for your first product type.

**Want to understand everything?** Follow the complete manual setup to learn every component in detail.
:::

## What You'll Build

Throughout this guide, you'll create a **Subscription Product** type that includes:

### Core Features
- ✅ **Basic Product Behavior**: Subscription-specific logic and validation
- ✅ **Inventory Management**: Service-based products without traditional stock
- ✅ **Admin Configuration**: Complete settings interface in Bagisto admin
- ✅ **Cart Integration**: Subscription-specific cart preparation

## Architecture Overview

```text
Subscription Product Type Package
├── src/
│   ├── Type/
│   │   └── Subscription.php              # Product type logic
│   ├── Config/
│   │   └── product_types.php             # Product type definition
│   └── Providers/
│       └── ServiceProvider.php           # Package registration
├── composer.json                         # Package metadata
└── README.md                             # Documentation
```

::: info Development Time Estimate
- **Basic Implementation**: 1-2 hours (manual setup)
- **Custom Logic**: 2-3 hours (business logic + validation)
- **Testing & Polish**: 1-2 hours (admin testing, cart validation)
:::

## Built-in Product Types Reference

Bagisto registers seven types in `packages/Webkul/Product/src/Config/product_types.php`. Each is a class under `Webkul\Product\Type` (the `BookingProduct` package supplies the booking models, admin forms and storefront views, while the type class itself sits with the others) and is the best reference for a custom type that resembles it:

| Type | Class | What it is |
|---|---|---|
| `simple` | `Simple` | A physical item with its own price and stock |
| `configurable` | `Configurable` | A parent whose variants (size, colour) are simple products; the customer picks options on the product page |
| `virtual` | `Virtual` | A non-physical product with no shipping; still has stock |
| `downloadable` | `Downloadable` | A virtual product sold with downloadable links; the customer downloads files from their account |
| `grouped` | `Grouped` | Several simple products shown together, each added to the cart in its own quantity |
| `bundle` | `Bundle` | A kit built from options the customer chooses; priced from the chosen option products |
| `booking` | `Booking` | Appointments, events, rentals and tables, with slots and dates |

Every one of them declares `getPriceIndexer()`, has an admin edit partial under `Admin/src/Resources/views/catalog/products/edit/types/`, and, where the storefront needs extra controls, a partial under `Shop/src/Resources/views/products/view/types/`.

## When to Create Custom Product Types

Consider creating a custom product type when:

- ✅ **Unique Behavior**: Your products need behavior not covered by built-in types
- ✅ **Special Pricing**: Complex pricing models or calculations
- ✅ **Custom Attributes**: Type-specific fields and validation rules
- ✅ **Business Rules**: Specific business logic for product handling

## Ready to Start?

Choose your learning path and begin building your custom product type:

**🚀 [Create Your First Product Type →](./create-your-first-product-type.md)**

This section covers the manual setup approach, helping you understand the foundations while building a working subscription product type.

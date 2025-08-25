# Getting Started

Creating custom shipping methods in Bagisto allows you to tailor delivery options to meet your specific business needs. Whether you need special handling for fragile items, express delivery options, or region-specific shipping rules, custom shipping methods provide the flexibility your e-commerce store requires.

For our tutorial, we'll create a **Custom Express Shipping** method that demonstrates all the essential concepts you need to build any type of shipping solution.

::: info Learning Objective
This section demonstrates how to create a complete custom shipping method from scratch, including configuration options, rate calculation logic, and admin interface integration.
:::

## Understanding Bagisto Shipping Architecture

Bagisto's shipping system is built around a flexible carrier-based architecture:

### Core Components
- **Carriers Configuration**: PHP arrays defining shipping method properties
- **Carrier Classes**: PHP classes containing the business logic for rate calculation
- **System Configuration**: Admin interface forms for method settings
- **Rate Calculation**: Dynamic pricing based on cart contents and shipping rules

### Key Features
- **Flexible Rate Calculation**: Support for per-unit, per-order, or custom pricing models
- **Configuration Management**: Admin-friendly settings interface
- **Multi-channel Support**: Different rates and settings per sales channel
- **Localization Ready**: Translation support for international stores

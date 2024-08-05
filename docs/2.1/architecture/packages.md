# Packages

[[Toc]]

## Introduction

[Laravel](https://laravel.com) packages are the primary way of adding functionality so the following features are distributed into packages to enhance the application and allow developers to follow the standard way of developing custom functionality.

Bagisto comes with a set of powerful default packages that provide essential functionalities out of the box. Below is a list of these default packages along with a brief description of each:

## Available Packages In Bagisto

### Admin

The Admin package in Bagisto is a core component that provides the administrative interface and functionality for managing various aspects of an online store. It offers a comprehensive dashboard and a set of tools for administrators to efficiently manage products, orders, customers, configurations, and other essential elements of the store. Here's a detailed overview of the Admin package in Bagisto:

#### Key Features of the Admin Package

- Dashboard
    - Provides a summary of the store’s performance with key metrics and analytics.

    - Displays widgets for quick insights into sales, orders, customers, and other important data.

- Product Management
    - Allows administrators to add, edit, and delete products.

    - Supports the management of product attributes, categories, and inventories.
 
    - Facilitates the creation of configurable, downloadable, and bundled products.

- Order Management 
    - Enables the management of customer orders, including viewing, updating, and canceling orders.
    
    - Provides functionalities to manage order status, shipments, and invoices.

- Customer Management
    - Allows administrators to manage customer accounts and their details.

    - Facilitates the management of customer groups and segmentation for targeted marketing.

- Configuration and Settings
    - Provides a wide range of configuration options to customize the store’s behavior.

    - Includes settings for payment methods, shipping methods, tax rates, and locales.

    - Allows customization of email templates and other communication settings.

- CMS Management
    - Facilitates the management of static pages, blocks, and sliders to enhance the store’s frontend.

    - Allows for the creation and management of content-rich pages without the need for coding

- Marketing and Promotions 
    - Offers tools to create and manage promotions, discounts, and coupons.       

    - Provides functionalities to set up cart price rules and catalog price rules.

- Reports and Analytics
    - Provides detailed reports on sales, customer activities, and product performance.

    - Offers insights into store performance through various graphical representations and data export options.

### Attribute

All the logic related to Attribute available in this package and it manages product attributes and attribute sets, allowing you to define and organize product information effectively.

The Attribute package in Bagisto manages product attributes and attribute sets, enabling you to define and organize product information effectively. This package is crucial for customizing product data, enhancing search capabilities, and improving product filtering and categorization

#### Key Features of the Attribute Package

- Attribute Management
    - Create, edit, and delete product attributes.

    - Define various attribute types, such as text, textarea, select, multiselect, date, price, and boolean.

    - Set validation rules for attributes to ensure data consistency.

- Attribute Options
    - Manage option values and their sorting order.

- Attribute Family
    - Configure attribute families to group related attributes.

    - Allow products to inherit attributes from attribute families, ensuring consistent product data structure.

### CartRule 

The CartRule package in Bagisto provides all the necessary logic to define conditions and actions for cart-based promotions, enabling you to offer dynamic and targeted discounts to your customers. This package allows you to create flexible discount rules that can be applied to the shopping cart, enhancing your promotional capabilities and driving sales.

#### Key Features of the CartRule Package

- Cart Rule Management 
    - Create, edit, and delete cart rules.

    - Define conditions and actions for each cart rule.

    - Set start and end dates for the promotion period.

    - Enable or disable cart rules as needed.

- Conditions
    - Define conditions based on cart attributes, such as subtotal, total items quantity, shipping method, and payment method.

    - Combine multiple conditions using logical operators (AND, OR) to create complex rules.

- Coupons
    - Create and manage coupon codes associated with cart rules.

    - Set usage limits for each coupon (per customer, total usage).

    - Generate unique coupon codes automatically.

- Validation and Enforcement 
    - Ensure that cart rules are validated and applied correctly based on defined conditions.

    - Enforce the rules during the checkout process to provide accurate discounts.

### CatalogRule

The CatalogRule package in Bagisto provides the logic to define conditions and actions for catalog-based promotions, allowing you to offer dynamic pricing adjustments and discounts on individual products or categories. This package enables you to create flexible pricing rules that can be applied directly to products in the catalog, enhancing your promotional capabilities and optimizing pricing strategies.

#### Key Features of the CatalogRule Package

- Catalog Rule Management 
    - Create, edit, and delete catalog rules.

    - Define conditions and actions for each catalog rule.

    - Set start and end dates for the promotion period.

    - Enable or disable catalog rules as needed.

- Conditions 
    - Define conditions based on product attributes, such as category, SKU, price, and stock status.

    - Combine multiple conditions using logical operators (AND, OR) to create complex rules.

- Validation and Enforcement
    - Ensure that catalog rules are validated and applied correctly based on defined conditions.

    - Enforce the rules during catalog rendering to provide accurate discounts.

### Category

The Category package in Bagisto manages the database logic related to categories. It allows you to define, organize, and manage product categories effectively, facilitating the categorization and hierarchical structuring of products within your store.

#### Key Features of the Category Package

- Category Management
    - Create, edit, and delete categories.

    - Define parent-child relationships to establish a hierarchical category structure.

    - Set category attributes such as name, description, and URL keys.

    - Enable or disable categories as needed.

- SEO and URL Management
    - Define URL keys for categories to enhance SEO.

    - Set meta titles, descriptions, and keywords to improve search engine visibility.

- Multi-Store and Multi-Language Support
    - Support for multiple store views and languages.

    - Define category attributes and settings specific to each store view. 

### Checkout

The Checkout package in Bagisto manages the entire checkout process, encompassing cart management, order processing, payment integration, and shipping methods. It plays a crucial role in facilitating a smooth and efficient transaction experience for customers on your e-commerce platform.

#### Key Components of the Checkout Package

- Cart Management
    - Handles the addition, removal, and updating of products in the shopping cart.

    - Applies discounts and promotions based on cart conditions.

- Order Processing
    - Manages the creation, editing, and processing of orders.

    - Calculates the total amount due for an order, including taxes and shipping.

- Payment Integration
    - Integrates with various payment providers to handle online transactions securely.
 
    - Supports multiple payment options such as credit cards, PayPal, and more.

- Shipping Methods
    - Integrates with shipping carriers to calculate shipping rates and manage delivery options.

    - Applies conditions for free shipping, flat rates, or custom shipping charges.

### CMS

The CMS package in Bagisto empowers store administrators to manage content pages and blocks efficiently, facilitating the creation and maintenance of static content for your e-commerce store.

- Allows creation, editing, and deletion of static pages such as About Us, Contact Us, FAQs, etc.

- Supports custom URL slugs for pages to improve SEO and user-friendly navigation. 

### Core

The Core package in Bagisto serves as the foundation for various functionalities and utilities essential for the operation of the entire e-commerce platform. It encapsulates critical components, settings, configurations, and common helper functions that are integral to the seamless functioning of other packages within Bagisto.

#### Key Features and Components

- Settings and Configurations
    - Manages platform-wide configurations such as site name, logo, currency settings, and default language.

    - Handles environment-specific settings for development, staging, and production environments.

- Common Helper Functions:
    - Includes a range of helper functions for tasks such as data manipulation, string operations, file handling, and date/time formatting.

    - Offers validation functions for input data, ensuring data integrity and adherence to predefined rules.

### Customer

The Customer package in Bagisto is designed to handle all aspects related to customer management, authentication, and customer-centric functionalities essential for e-commerce operations. It provides a comprehensive suite of features to manage customer accounts, streamline registration processes, and enhance user engagement.

#### Key Features and Components

- Customer Account Management
    - Facilitates customer registration with email verification and password management. Supports social login integration for streamlined access.

    - Allows customers to update personal information, manage addresses, and view order history from their account dashboard.

- Authentication and Authorization 
    - Ensures secure login mechanisms with hashing and encryption techniques to protect customer credentials.

- Integration with Sales and Marketing
    - Supports customer segmentation for targeted marketing campaigns and personalized promotions.

- Analytics and Reporting
    - Provides analytics on customer behavior, preferences, and lifetime value to optimize marketing strategies and customer retention efforts.

    - Generates reports on customer registrations, login activities, and transaction histories for business analysis and decision-making.


### Datagrid

The DataGrid package in Bagisto empowers administrators with a versatile solution for displaying and managing tabular data within the admin panel. It incorporates crucial components like models, repositories, and database interactions to streamline data handling and enhance user experience.

#### Dynamic Data Presentation:

- Dynamic Data Presentation
    - Allows administrators to configure columns, filters, sorting options, and pagination settings for displaying data tables.

- Advanced Filtering and Sorting
    - Enables administrators to apply filters based on various criteria to refine data views.

    - Supports sorting functionalities to organize data based on specified attributes.

### DataTransfer

This package contains all the logic related to data transfer. You can follow the given link for the more information about the[DataTransfer](https://bagisto.com/en/how-to-bulk-import-products-in-bagisto-2-1-0/)

### DebugBar

This package includes essential functionalities to monitor, analyze, and debug the application, ensuring optimal performance and quick resolution of issues.

### FPC

This package provides advanced caching mechanisms to store generated pages in memory, reducing server load and improving page load times for your customers. You can follow the given link for the more information about the [FPC](https://bagisto.com/en/optimizing-bagisto-e-commerce-a-deep-dive-into-full-page-cache-implementation/)

### Installer

The Installer package in Bagisto simplifies the setup and installation process of your e-commerce platform, providing a streamlined experience for deploying Bagisto on various environments. This package includes essential functionalities to configure database connections, install dependencies, and initialize the application environment, ensuring a smooth and hassle-free installation process.

### Inventory 

The Inventory package in Bagisto provides comprehensive tools to manage and track product inventory efficiently within your e-commerce store. This package includes essential functionalities to monitor stock levels, track inventory movements, and ensure accurate stock availability for seamless order fulfillment.

### MagicAI 

The MagicAI package in Bagisto integrates advanced artificial intelligence capabilities directly into your e-commerce platform, offering powerful tools to enhance efficiency, customer experience, and decision-making processes. You can follow the given link for the more information about the [MagicAI](https://bagisto.com/en/laravel-bagisto-2-1-0-ai-features/)

### Marketing 

The Marketing package in Bagisto encompasses all functionalities related to marketing strategies and promotions within the e-commerce platform. It includes tools for defining and managing cart rules, catalog rules, promotions, discounts, and other marketing campaigns to enhance customer engagement and drive sales.

### Notification

The Notification package in Bagisto handles all functionalities related to notifications within the e-commerce platform. It provides mechanisms for sending automated alerts, updates, and messages to customers and administrators based on various events and triggers, enhancing communication and user engagement throughout the shopping experience.

### Payment

The Payment package in Bagisto integrates various payment gateways seamlessly into the e-commerce platform. It facilitates secure and reliable processing of customer orders by enabling merchants to configure and manage multiple payment methods. This package ensures smooth transaction flows, enhances checkout experiences, and supports a wide range of payment gateways to meet diverse business needs and customer preferences.

### Paypal 

The PayPal package in Bagisto handles all functionalities related to integrating the PayPal payment gateway into your e-commerce store. This integration allows merchants to offer PayPal as a payment option to their customers, enhancing convenience and trust during the checkout process. Key features of the PayPal package include:

-  Enables merchants to configure PayPal credentials and settings through the Bagisto admin panel.

- Facilitates secure and seamless processing of payments using PayPal's APIs, ensuring transactions are reliable and efficient.

-  Integrates PayPal's transaction data with Bagisto's order management system, providing real-time updates and synchronization.

- Enhances the checkout experience by offering customers the option to pay with PayPal, a widely recognized and trusted payment method.


### Product

The Product package in Bagisto encapsulates comprehensive functionalities related to managing and presenting product information within your e-commerce store. Key aspects and features of the Product package include:

- Stores and manages essential details about each product, including name, description, pricing, and inventory levels.

- Facilitates the creation and management of product attributes and variants, allowing for flexible product configurations and options.

- Supports categorization of products into hierarchical categories, enabling organized navigation and browsing.

- Tracks and updates inventory levels in real-time, ensuring accurate stock availability displayed to customers.

- Defines structured data models and repository patterns for efficient data handling and interaction.

- Allows administrators to create new products, update existing ones, and manage product lifecycles efficiently.

### Sales

The Sales package in Bagisto provides functionalities related to managing and tracking sales within your e-commerce store. It includes features such as order management, invoicing, shipment tracking, and customer communication. With the Sales package, you can efficiently process and fulfill customer orders, ensuring a seamless shopping experience.

- Facilitates the creation, modification, and tracking of customer orders from initiation to fulfillment.

- Defines various order statuses (e.g., pending, processing, completed) to indicate the current stage of each order.

- Generates invoices automatically upon order confirmation, detailing product prices, taxes, and discounts.

- Integrates with various payment gateways to securely process customer payments, ensuring flexibility and convenience.

- Manages refund requests and return processes, tracking the status and processing refunds accordingly.

- Generates reports on sales performance, order trends, revenue analysis, and inventory insights to support decision-making.


### Shipping

The Shipping package in Bagisto provides functionalities to manage and handle shipping methods and rates for customer orders. It includes features such as configuring shipping carriers, defining shipping zones, calculating shipping rates based on various factors like weight, dimensions, and destination, and integrating with third-party shipping APIs for real-time shipping quotes. With the Shipping package, you can ensure smooth and efficient order fulfillment by offering reliable and cost-effective shipping options to your customers.

### Shop

The Shop package in Bagisto provides the frontend functionality for your e-commerce store. It includes features such as displaying products, managing the shopping cart, processing the checkout process, and integrating with various payment gateways for secure and convenient payment processing. With the Shop package, you can create a seamless and user-friendly shopping experience for your customers.

- Product Display and Management
    - Displays products in a structured and organized manner, allowing customers to browse and search for products based on categories, attributes, and filters.

    - Provides detailed product pages with essential information such as product descriptions, specifications, pricing, and availability.

    - Supports product variants (e.g., sizes, colors) and options, enabling customers to select their preferred options directly on the product page.

- Localization and Multi-currency Support
    - Supports multiple languages, allowing you to cater to diverse customer bases and enhance accessibility for international shoppers.

    -  Displays product prices in different currencies, enabling customers to shop and complete transactions in their preferred currency.

- Shopping Cart and Checkout Process
    - Manages customer-selected products, quantities, and total prices, providing a seamless shopping cart experience with features like add to cart, update cart, and remove items.

    - Guides customers through a secure and intuitive checkout process, collecting necessary information such as shipping address, payment method selection, and order review.

### Sitemap

This package manages all the logics related to sitemap. The Sitemap package in Bagisto empowers e-commerce businesses to enhance their SEO efforts by automating the generation and management of XML sitemaps. By leveraging its features, businesses can improve search engine visibility, drive organic traffic growth, and provide a seamless user experience for their customers.

### SocialShare

 This package enables customers to easily share products, categories, and content across various social media platforms, enhancing visibility and engagement.

### SocialLogin

The SocialLogin package in Bagisto empowers e-commerce businesses to enhance user engagement, streamline registration processes, and leverage social media platforms for improved customer acquisition and retention.

### Tax

This package enables businesses to configure and apply taxes accurately based on customer locations, product types, and regulatory requirements, ensuring compliance and seamless transaction processing.

### Theme 

All the logic of the theme customization managed by this package. This package enables businesses to create unique storefronts, enhance brand identity, and deliver tailored shopping experiences to customers.

#### Key features of the Theme package include

- Customization Capabilities
    - Businesses can create custom themes or modify existing ones to reflect their brand identity and visual preferences. This includes customizing colors, typography, layouts, and styles.

- Theme Management
    -  The package facilitates easy installation, activation, and management of themes through configuration files and administrative controls. Themes can be switched seamlessly without affecting site functionality.

### User

This package empowers administrators to efficiently manage user registrations, profiles, roles, and permissions, ensuring secure and personalized customer interactions.

Service provider enables features such as loading [routes](/2.1/packages/routes.html), [migrations](/2.1/packages/create-migrations.html), [languages](/2.1/packages/localization.html) or publishing [views](/2.1/packages/views.html), etc so **Bagisto** is developed considering these aspects.

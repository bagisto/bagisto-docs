# REST API

The Bagisto REST API provides a comprehensive RESTful interface to access all core Bagisto features. Built with Laravel Sanctum authentication, it offers secure and efficient endpoints for building mobile apps, third-party integrations, and custom interfaces.

## 🚀 Quick Start

### Live Demo

Explore our interactive API documentation and test endpoints in real-time:

- 🔧 [**Admin API Demo**](https://demo.bagisto.com/bagisto-api-demo-common/api/admin/documentation#/) - Manage products, orders, customers, and more
- 🛍️ [**Shop API Demo**](https://demo.bagisto.com/bagisto-api-demo-common/api/shop/documentation#/) - Customer-facing shopping functionality

::: tip Try It Now
Both demos include interactive testing tools where you can send real requests and see responses immediately.
:::

## 📦 Installation

### Step 1: Install the Package

Install the REST API package via Composer, choosing the release that matches your Bagisto version (the package README lists the pairs):

```bash
composer require bagisto/rest-api
```

### Step 2: Environment Configuration

Add the following configuration to your `.env` file:

```properties
# Hosts (no scheme, no path) that may use cookie-based, stateful requests
SANCTUM_STATEFUL_DOMAINS=localhost,yourdomain.com
```

::: warning Domain Configuration
Sanctum expects bare host names, comma-separated, and a port when one is used (`localhost:8000`). A value with a scheme or a path never matches. Token-based requests with an `Authorization: Bearer` header work regardless of this setting; it matters only for a browser front end on the same domain.
:::

### Step 3: Run Installation Command

Configure the L5-Swagger documentation:

```bash
php artisan bagisto-rest-api:install
```

This command will:
- Publish API configuration files
- Set up Swagger documentation
- Configure authentication routes

## 📖 Documentation Access

Once installed, access the interactive API documentation under your store's URL:

### Admin API Documentation
```
https://yourdomain.com/api/admin/documentation
```

### Shop API Documentation  
```
https://yourdomain.com/api/shop/documentation
```

::: info Interactive Testing
Both documentation interfaces include built-in testing tools. You can authenticate and test API endpoints directly from the browser.
:::

## 🔐 Authentication

The REST API uses Laravel Sanctum for secure token-based authentication:

### Getting an Access Token

1. **Admin Authentication**: Use admin credentials to get admin-level access
2. **Customer Authentication**: Use customer credentials for shop-level access

### Using Tokens

Include the token in your requests:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN_HERE" \
     -H "Accept: application/json" \
     https://yourdomain.com/api/v1/admin/catalog/products
```

The exact paths, parameters and response shapes are in the Swagger documentation the package generates for your installation; treat the examples below as illustrations of the request style rather than as a reference.

## 🎯 Common Use Cases

### Mobile App Development
Build native iOS/Android apps with full e-commerce functionality:

```javascript
// Example: Fetch products for mobile app
fetch('/api/v1/products', {
  headers: {
    'Authorization': 'Bearer ' + token,
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(products => {
  // Display products in your mobile app
});
```

### Third-party Integration
Connect external systems with your Bagisto store:

```php
// Example: Update a product from an external system
$response = Http::withToken($token)->put("https://yourdomain.com/api/v1/admin/catalog/products/{$productId}", [
    'name'  => 'Product Name',
    'sku'   => 'PROD-001',
    'price' => 99.99,
]);
```

## 🔗 Next Steps

- 📚 Explore the [interactive documentation](https://demo.bagisto.com/bagisto-api-demo-common/api/admin/documentation#/)

::: tip Need GraphQL?
For modern frontend development with flexible queries, consider our [GraphQL API](./graphql-api) instead.
:::

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

Install the REST API package via Composer:

```bash
composer require bagisto/rest-api
```

### Step 2: Environment Configuration

Add the following configuration to your `.env` file:

```properties
# Replace with your actual domain
SANCTUM_STATEFUL_DOMAINS=http://localhost/public
```

::: warning Domain Configuration
Make sure to replace `http://localhost/public` with your actual domain URL. For production, use your live domain (e.g., `https://yourdomain.com`).
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

Once installed, access the interactive API documentation:

### Admin API Documentation
```
http://localhost/public/api/admin/documentation
```

### Shop API Documentation  
```
http://localhost/public/api/shop/documentation
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
     http://localhost/public/api/v1/admin/get
```

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
// Example: Sync product from external system
$response = Http::withToken($token)->post("/api/v1/admin/catalog/products/{$productId}", [
    'name'  => 'Product Name',
    'sku'   => 'PROD-001',
    'price' => 99.99
]);
```

## 🔗 Next Steps

- 📚 Explore the [interactive documentation](https://demo.bagisto.com/bagisto-api-demo-common/api/admin/documentation#/)

::: tip Need GraphQL?
For modern frontend development with flexible queries, consider our [GraphQL API](./graphql-api) instead.
:::

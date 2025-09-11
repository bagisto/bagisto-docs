# Introduction

Bagisto provides comprehensive API solutions to help developers integrate and extend the platform's functionality. Whether you're building mobile apps, third-party integrations, or headless commerce solutions, our APIs offer the flexibility and power you need.

## Available API Types

### REST API

The Bagisto REST API follows RESTful principles and provides complete access to CRUD operations across all Bagisto features. Perfect for:

- **Mobile Applications** - Build native iOS/Android shopping apps
- **Third-party Integrations** - Connect with external systems and services  
- **Progressive Web Apps (PWA)** - Create fast, app-like web experiences
- **Custom Admin Interfaces** - Build specialized admin tools

**Key Features:**
- Full CRUD operations support
- Built-in pagination for performance
- Comprehensive documentation with interactive testing
- Laravel Sanctum authentication

::: tip Getting Started
New to REST APIs? Start with our [REST API Guide](./rest-api) for installation steps and examples.
:::

### GraphQL API  

The Bagisto GraphQL API enables flexible, efficient data fetching with a single endpoint. Ideal for:

- **Headless Commerce** - Power modern frontend frameworks
- **Mobile Apps** - Reduce bandwidth with precise data queries
- **Custom Storefronts** - Build unique shopping experiences
- **Real-time Applications** - Efficient data synchronization

**Key Features:**
- Single endpoint for all operations
- Flexible query structure - fetch exactly what you need
- Real-time subscriptions support
- Built on Laravel Lighthouse
- Type-safe schema with introspection

::: tip Modern Development
GraphQL is perfect for modern frontend frameworks like React, Vue, and React Native. Check out our [GraphQL API Guide](./graphql-api) to get started.
:::

## Authentication

Both APIs use secure authentication methods:

- **REST API**: Laravel Sanctum with token-based authentication
- **GraphQL API**: Session-based authentication with CSRF protection

## What's Next?

Ready to start building? Choose your preferred API approach:

- 📚 [REST API Documentation](./rest-api) - Traditional RESTful endpoints
- ⚡ [GraphQL API Documentation](./graphql-api) - Modern query language

# Introduction

Bagisto provides comprehensive API solutions to help developers integrate and extend the platform's functionality. Whether you're building mobile apps, third-party integrations, or headless commerce solutions, our APIs offer the flexibility and power you need.

::: info Separate packages
Neither API is part of the Bagisto core repository. They are installed as Composer packages, `bagisto/rest-api` and `bagisto/graphql-api`, each with its own release line. Install the release that matches your Bagisto version; the packages' own README files carry the exact version table and any install steps that change between releases, and the commands on the following pages are the ones those packages document.
:::

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
- Interactive Swagger documentation generated from the package
- Laravel Sanctum authentication

::: tip Getting Started
New to REST APIs? Start with our [REST API Guide](./rest-api) for installation steps and examples.
:::

### GraphQL API  

The Bagisto GraphQL API enables flexible, efficient data fetching with a single endpoint. Ideal for:

- **Headless Commerce** - Power modern frontend frameworks
- **Mobile Apps** - Reduce bandwidth with precise data queries
- **Custom Storefronts** - Build unique shopping experiences

**Key Features:**
- Single endpoint for all operations
- Flexible query structure - fetch exactly what you need
- Built on Laravel Lighthouse
- Type-safe schema with introspection and a GraphiQL playground

::: tip Modern Development
GraphQL is perfect for modern frontend frameworks like React, Vue, and React Native. Check out our [GraphQL API Guide](./graphql-api) to get started.
:::

## Authentication

The two packages authenticate differently:

- **REST API**: Laravel Sanctum bearer tokens, issued by the package's admin and customer login endpoints
- **GraphQL API**: JWT bearer tokens for customers and admins, with the session middleware kept on the endpoint so the guest cart works

## Agents in the browser

For an AI agent that acts inside the shopper's browser rather than against an API, the storefront declares its actions as [WebMCP](../ai/webmcp.md) tools. That needs no package and no token.

## What's Next?

Ready to start building? Choose your preferred API approach:

- 📚 [REST API Documentation](./rest-api) - Traditional RESTful endpoints
- ⚡ [GraphQL API Documentation](./graphql-api) - Modern query language

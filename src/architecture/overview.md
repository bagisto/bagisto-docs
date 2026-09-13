# Architecture Overview

This document provides a comprehensive overview of Bagisto's architecture and core principles, designed to help developers understand the framework's structure and implementation approach.

## Technology Stack

Bagisto is built on a modern, robust technology stack leveraging proven [Open Source](https://en.wikipedia.org/wiki/Open_source) technologies:

- **[PHP](https://php.net)** - Server-side programming language
- **[Laravel](https://laravel.com)** - PHP framework for web application development
- **[Vue.js](https://vuejs.org/)** - Progressive JavaScript framework for user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling
- **[Vite](https://vitejs.dev/)** - Asset bundler with hot module replacement

The exact versions depend on the release line you run:

| | Bagisto 2.5 | Bagisto 2.4 |
|---|---|---|
| PHP | 8.4 | 8.3 or 8.4 |
| Laravel | 13 | 12 |
| Vue.js | 3.5 | 3.5 |
| Tailwind CSS | 4 (CSS-first configuration) | 3 (`tailwind.config.js`) |
| Vite | 6 | 6 |
| Test runner | Pest 5 | Pest 3 |
| Databases | MySQL 8, MariaDB 10.11, PostgreSQL 16 | MySQL 8, MariaDB 10.11 |

On Bagisto 2.5 all three databases are first-class and covered by the CI matrix; the [Database Compatibility](../advanced/database-compatibility.md) page explains the `db_grammar()` abstraction that keeps package code portable across them. Bagisto 2.4 supports MySQL and MariaDB only.

## Core Architecture Principles

### Dual Interface Design

Bagisto provides a comprehensive e-commerce solution with two primary interfaces:

- **Customer Frontend** - Public-facing storefront for customer interactions, served by the `Shop` package and skinned by [themes](../theme-development/getting-started.md)
- **Administrative Backend** - Management interface for store administration and configuration, served by the `Admin` package

Both are ordinary Blade applications with Vue components mounted inside them; there is no separate single-page application to build.

### Modular Package Structure

The framework follows a modular architecture where each core functionality is encapsulated in a dedicated Laravel package under `packages/Webkul/`, providing a clean separation of concerns and enabling easy customization and extension. Each package registers a service provider in `bootstrap/providers.php` and, when it has models, a Concord module provider in `config/concord.php`. The [Backend](./backend.md) page lists every package that ships with Bagisto.

### Component-Based Frontend

Bagisto utilizes Vue.js built-in components to create:

- Reusable UI elements, exposed to Blade as the [components](../theme-development/blade-components.md) of the `shop` and `admin` namespaces
- Interactive user interfaces
- Dynamic content rendering
- Seamless user experience

### Event-Driven Architecture

The framework implements a comprehensive event system that:

- Triggers events across application lifecycle ([Event Listeners](../advanced/event-listeners.md))
- Enables custom functionality through event listeners
- Provides hooks for third-party integrations, including [view render events](../advanced/view-render-events.md) for injecting markup into existing templates
- Supports extensibility without core modifications

### Extension points at a glance

| You want to | Read |
|---|---|
| Add a feature with its own tables, admin pages and routes | [Package Development](../package-development/getting-started.md) |
| Change how the storefront looks | [Theme Development](../theme-development/getting-started.md) |
| Add a carrier, a gateway or a product type | [Shipping](../shipping-method-development/getting-started.md), [Payment](../payment-method-development/getting-started.md), [Product Type](../product-type-development/getting-started.md) development |
| React to something the core does | [Event Listeners](../advanced/event-listeners.md) |
| Replace a core model or repository | [Models](../package-development/models.md#overriding-core-models-optional) |
| Talk to the store from outside | [REST and GraphQL APIs](../api/introduction.md), [WebMCP](../ai/webmcp.md) |

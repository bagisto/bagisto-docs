# Architecture Overview

This document provides a comprehensive overview of Bagisto's architecture and core principles, designed to help developers understand the framework's structure and implementation approach.

## Technology Stack

Bagisto is built on a modern, robust technology stack leveraging proven [Open Source](https://en.wikipedia.org/wiki/Open_source) technologies:

- **[PHP](https://php.net)** - Server-side programming language
- **[Laravel](https://laravel.com)** - PHP framework for web application development
- **[Vue.js](https://vuejs.org/)** - Progressive JavaScript framework for user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling

## Core Architecture Principles

### Dual Interface Design

Bagisto provides a comprehensive e-commerce solution with two primary interfaces:

- **Customer Frontend** - Public-facing storefront for customer interactions
- **Administrative Backend** - Management interface for store administration and configuration

### Modular Package Structure

The framework follows a modular architecture where each core functionality is encapsulated in dedicated Laravel packages, providing a clean separation of concerns and enabling easy customization and extension.

### Component-Based Frontend

Bagisto utilizes Vue.js built-in components to create:

- Reusable UI elements
- Interactive user interfaces
- Dynamic content rendering
- Seamless user experience

### Event-Driven Architecture

The framework implements a comprehensive event system that:

- Triggers events across application lifecycle
- Enables custom functionality through event listeners
- Provides hooks for third-party integrations
- Supports extensibility without core modifications

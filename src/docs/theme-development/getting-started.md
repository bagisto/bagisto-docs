# Getting Started

Welcome to Bagisto theme development! This comprehensive guide will take you through the complete journey of creating custom themes, from basic customizations to professional theme packages.

::: info What You'll Learn
- Understanding Bagisto's theme system and configuration
- Creating basic themes using the resources directory
- Building professional theme packages
- Asset management and bundling with Vite
- Best practices for theme development and distribution
:::

## Theme Development Journey

Bagisto offers a flexible and progressive approach to theme development. You can start simple and gradually build more sophisticated themes as your needs grow.

### Our Learning Path

This theme development guide follows a structured progression:

#### 1. **Basic Theme Creation**
Start by creating simple themes using Bagisto's resources directory. This approach allows you to:
- Quickly customize the appearance of your store
- Learn Bagisto's theme structure and conventions
- Test ideas without complex setup
- Focus on design rather than packaging

#### 2. **Professional Theme Packages**
Once you're comfortable with basic themes, advance to creating proper theme packages that:
- Follow Laravel package development best practices
- Include proper service providers and configuration
- Can be easily distributed and installed
- Support version control and dependency management

#### 3. **Advanced Asset Management**
Master modern asset bundling and optimization using:
- Vite for fast development and optimized builds
- SCSS/CSS preprocessing
- JavaScript bundling and optimization
- Image optimization and management

## Understanding Bagisto Themes

Before diving into development, it's important to understand how themes work in Bagisto.

### Theme Structure

Bagisto themes are organized into two main categories:

- **Shop Themes**: Control the customer-facing storefront
- **Admin Themes**: Customize the backend administration interface

### Theme Configuration

All theme settings are managed through the `config/themes.php` file, which defines:

- Active themes for shop and admin
- Theme paths and asset locations
- Vite configuration for asset bundling
- Parent-child theme relationships

### Theme Components

A complete Bagisto theme consists of:

- **Blade Templates**: The view files that render your pages
- **Assets**: CSS, JavaScript, images, and other static files
- **Configuration**: Theme metadata and settings
- **Layouts**: The structural framework for your pages

## Prerequisites

To get the most out of this guide, you should have:

### Essential Knowledge
- **HTML/CSS**: For styling and layout
- **Blade Templating**: Laravel's templating engine used by Bagisto
- **Basic PHP**: Understanding of PHP syntax and Laravel concepts

### Helpful Knowledge
- **Laravel Package Development**: For creating distributable themes
- **SCSS/CSS Preprocessors**: For advanced styling
- **JavaScript**: For interactive frontend features
- **Vite/Webpack**: For asset bundling and optimization

### Development Environment
- Working Bagisto installation
- Code editor (VS Code, PHPStorm, etc.)
- Node.js (for asset compilation)
- Composer (for package management)

## Your Theme Development Path

### Step 1: Start with Basic Themes
Begin your journey by learning the fundamentals:

**📄 [Create Store Theme →](./create-store-theme.md)**  
Learn to create custom shop themes using the resources directory approach.

**📄 [Create Admin Theme →](./create-admin-theme.md)**  
Customize the admin interface with your own admin theme.

### Step 2: Build Professional Packages
Once you're comfortable with basics, advance to professional development:

**📦 [Custom Theme Package →](./custom-theme-package.md)**  
Learn to create proper Laravel packages for your themes with service providers and distribution support.

### Step 3: Master Asset Management
Complete your theme development skills:

**⚡ [Bundling Assets →](./bundling-assets.md)**  
Master Vite configuration for optimized asset compilation and modern development workflows.

## Quick Start

Ready to jump in? Here's what each approach offers:

### Basic Theme Development
- **Pros**: Quick to set up, easy to understand, perfect for learning
- **Cons**: Limited distribution options, harder to maintain across projects
- **Best for**: Learning, prototyping, simple customizations

### Package-Based Development  
- **Pros**: Professional structure, easy distribution, version control friendly
- **Cons**: More initial setup, requires package development knowledge
- **Best for**: Production themes, distribution, team development

### Advanced Asset Management
- **Pros**: Optimized performance, modern development experience, automated workflows
- **Cons**: Additional tooling complexity, requires build process knowledge
- **Best for**: Production sites, performance optimization, complex themes

## Development Tips

::: tip Best Practices

**Start Simple**: Begin with basic themes before advancing to packages

**Follow Conventions**: Use Bagisto's established naming and structure patterns

**Test Thoroughly**: Check themes across different devices and browsers

**Version Control**: Always use Git to track your theme development

**Performance First**: Optimize assets and minimize HTTP requests

:::

::: warning Common Pitfalls

**Don't Skip Basics**: Understanding the resources approach helps with package development

**Avoid Hardcoding**: Use Bagisto's configuration and helper functions

**Theme Conflicts**: Be careful when overriding core templates

**Asset Caching**: Clear caches during development to see changes

:::

## Getting Help

If you encounter issues during theme development:

- **Documentation**: Follow the structured guides in this section
- **Community Forum**: Ask questions on the [Bagisto Community Forum](https://forums.bagisto.com/)
- **GitHub**: Report issues on the [Bagisto GitHub repository](https://github.com/bagisto/bagisto)
- **Discord**: Join real-time discussions in the Bagisto Discord community

Ready to start creating amazing themes for your Bagisto store? Let's begin with basic theme creation!
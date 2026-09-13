# Getting Started

Welcome to Bagisto theme development! This comprehensive guide will take you through the complete journey of creating custom themes, from basic customizations to professional theme packages.

::: info What You'll Learn
- Understanding Bagisto's theme system and configuration
- Creating basic themes using the resources directory
- Building professional theme packages
- Asset management and bundling with Vite
- Best practices for theme development and distribution
:::

## Prerequisites

To get the most out of this guide, you should have:

### Essential Knowledge
- **HTML/CSS**: For styling and layout
- **Blade Templating**: Laravel's templating engine used by Bagisto
- **Basic PHP**: Understanding of PHP syntax and Laravel concepts

### Helpful Knowledge
- **Laravel Package Development**: For creating distributable themes
- **Tailwind CSS**: Bagisto's utility-first CSS framework
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

**🏪 [Creating Store Theme →](./creating-store-theme.md)**  
Learn to create custom shop themes using the resources directory approach.

**💼 [Creating Admin Theme →](./creating-admin-theme.md)**  
Customize the admin interface with your own admin theme.

### Step 2: Build Professional Packages
Once you're comfortable with basics, advance to professional development:

**📦 [Custom Theme Package →](./creating-custom-theme-package.md)**  
Learn to create proper Laravel packages for your themes with service providers and distribution support.

### Step 3: Master Asset Management
Complete your theme development skills:

**⚡ [Vite-Powered Theme Assets →](./vite-powered-theme-assets.md)**  
Master Vite configuration for optimized asset compilation and modern development workflows.

### Step 4: Advanced Techniques
Deepen your understanding with advanced topics:

**📄 [Understanding Layouts →](./understanding-layouts.md)**  
Master Bagisto's layout system and component architecture.

**🧩 [Blade Components →](./blade-components.md)**  
Learn to use and customize Bagisto's pre-built components.

### Step 5: Extend What the Merchant Can Customize
A theme is not only Blade and CSS. From `config/themes.php` it also declares what the Appearance editor offers and which image sizes the storefront can request:

**🧱 [Theme Sections →](./theme-sections.md)**  
Choose, reorder, replace or add the section types a merchant can place on the home page.

**🖼️ [Image Cache Templates →](./image-cache-templates.md)**  
Register your own image sizes and attach them to product, category and swatch image URLs.

## Development Tips

::: tip Best Practices
- **Start Simple**: Begin with the resources directory approach before moving to packages
- **Use Version Control**: Always track your theme changes with Git
- **Test Thoroughly**: Check your themes across different devices and browsers
- **Follow Conventions**: Use Bagisto's naming conventions and file structure
:::

::: warning Common Pitfalls
- **Don't Skip Basics**: Understanding the resources approach helps with package development
- **Avoid Hardcoding**: Use Bagisto's configuration and helper functions
- **Theme Conflicts**: Be careful when overriding core templates; a file only overrides when its path mirrors the package view exactly
- **Asset Caching**: Clear caches during development to see changes
- **Never edit `packages/Webkul/Shop`**: Everything a theme needs is reachable through `config/themes.php` and your own `views_path`; edits to the package are lost on update
:::

## What's Next?

Now that you understand Bagisto's theme development approach, start your journey:

**🏪 [Creating Store Theme →](./creating-store-theme.md)**  
Learn to create your first custom store theme using the resources directory.

**👩‍💼 [Creating Admin Theme →](./creating-admin-theme.md)**  
Discover how to customize the admin panel interface with custom themes.

**📦 [Custom Theme Package →](./creating-custom-theme-package.md)**  
Advance to creating professional theme packages for distribution and better organization.
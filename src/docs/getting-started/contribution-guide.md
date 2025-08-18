# 🤝 Contribution Guide

Welcome to the Bagisto community! We appreciate your interest in contributing to our open-source e-commerce platform.

## 🐛 Bug Reports

We highly value active collaboration among our community members to continually enhance Bagisto's performance and reliability.

### Reporting Guidelines

When filing a bug report, please include:

- **Clear Title**: Descriptive and specific
- **Detailed Description**: Explain the problem thoroughly  
- **Reproduction Steps**: Step-by-step instructions
- **Code Sample**: Minimal code that reproduces the issue
- **Environment Details**: OS, PHP version, Bagisto version

## 💡 Feature Requests

We welcome proposals for new features and enhancements!

### Feature Proposal Process

1. **Check Existing Issues**: Search for similar requests
2. **Create Detailed Proposal**: Include use cases and implementation ideas
3. **Discuss with Community**: Engage in issue discussions
4. **Submit Implementation**: Provide code contribution

## 🌿 Branch Selection

Choose the appropriate branch for your contribution:

::: code-group
```bash [Bug Fixes]
# For general bug fixes (stable branch)
git checkout v2.3
git checkout -b fix/issue-description
```

```bash [Critical Fixes]
# For critical bugs in stable version
git checkout v2.3
git checkout -b hotfix/critical-issue
```

```bash [Breaking Changes]
# For new features and breaking changes
git checkout master
git checkout -b feature/new-functionality
```
:::

### Branch Guidelines

| Type | Target Branch | Description |
|------|--------------|-------------|
| 🐛 **Bug Fixes** | `v2.3` (stable) | General bug fixes for stable release |
| 🚨 **Critical Fixes** | `v2.3` (stable) | Security or critical issues |
| ✨ **Breaking Changes** | `master` | New features with potential breaking changes |

## 🎨 Styling Guidelines

### Tailwind CSS Class Ordering

Maintain consistency in Tailwind CSS class organization following [Tailwind's official sorting guidelines](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted):

**Recommended Class Order**:

```html
<!-- Layout → Flexbox → Spacing → Sizing → Typography → Visual → Misc -->
<div class="flex flex-col justify-center items-center p-4 w-full h-screen text-lg font-bold bg-white border rounded-lg shadow-md hover:shadow-lg">
  Content here
</div>
```

::: info Class Sorting Reference
For detailed information about how classes should be sorted, refer to the [official Tailwind CSS class sorting guide](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted).
:::

## 🧪 Testing

### Running Tests

Ensure all tests pass before submitting your pull request:

**Pest Tests (Unit/Feature Tests):**

To run Pest tests, navigate to your project's root directory and use the following commands:

```bash
# Run the full test suite
php artisan test

# Run specific test files
php artisan test tests/Feature/YourTestFile.php

# Run tests with coverage
php artisan test --coverage
```

**Playwright Tests (End-to-End Tests):**

To run Playwright tests, navigate to the root directory of either the `Shop` or `Admin` package, then execute:

```bash
# Run Playwright tests from the package root
npx playwright test --config=tests/e2e-pw/playwright.config.ts
```

This command will execute all end-to-end tests defined in the Playwright configuration for the selected package.

::: tip Prerequisite
Before running Playwright tests, ensure you have both `npx` and `playwright` installed in your development environment.
:::

**Pint Tests (Code Formatting):**

Pint is a PHP code style fixer that helps maintain consistent formatting across the codebase. It automatically applies standards like PSR-2 and PSR-12, making your code cleaner and easier to review. Before committing, run Pint to ensure your changes follow the project's coding standards.

```bash
# Check code formatting
vendor/bin/pint --test

# Fix code formatting
vendor/bin/pint
```

::: warning Important
All three test types (Pest, Playwright, and Pint) must pass before your PR can be merged. Run tests locally to avoid CI failures.
:::

## 📝 Coding Standards

Bagisto follows established PHP standards for consistency and readability:

### Standards We Follow
- **[PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)** - Coding Style Guide
- **[PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md)** - Autoloading Standard

### PHPDoc Example

```php
/**
 * Register a service with CoreServiceProvider.
 *
 * @param  string|array  $loader
 * @param  \Closure|string|null  $concrete
 * @param  bool  $shared
 * @return void
 */
protected function registerFacades($loader, $concrete = null, $shared = false): void
{
    // Implementation here
}
```

::: tip Automatic Formatting
You can use Pint to automatically format your code according to these standards:
```bash
vendor/bin/pint
```
:::

## 🔒 Security Vulnerabilities

::: danger Security Issues
If you discover a security vulnerability, **DO NOT** create a public issue.
:::

**Contact**: Email [jitendra@webkul.in](mailto:jitendra@webkul.in) immediately

### Security Report Should Include:
- Detailed description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Suggested fix (if available)

Thank you for contributing to Bagisto! 🎉
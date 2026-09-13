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
git checkout 2.4
git checkout -b fix/issue-description
```

```bash [Critical Fixes]
# For critical bugs in stable version
git checkout 2.4
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
| 🐛 **Bug Fixes** | `2.4` (stable) | General bug fixes for the supported release line; they are merged forward into `master` |
| 🚨 **Critical Fixes** | `2.4` (stable) | Security or critical issues |
| ✨ **Breaking Changes** | `master` | New features with potential breaking changes, released as the next minor version |

Add an entry to `CHANGELOG.md` on the branch you target, under the **Unreleased** heading, in the style of the existing entries.

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
vendor/bin/pest

# Run one suite
vendor/bin/pest --testsuite="Admin Feature Test"

# Run specific test files
vendor/bin/pest packages/Webkul/Admin/tests/Feature/Catalog/ProductTest.php
```

CI runs the suite against MySQL, MariaDB and PostgreSQL, so a change that touches SQL should be tried on more than one engine; see [Testing Workflow](../advanced/testing.md).

**Playwright Tests (End-to-End Tests):**

To run Playwright tests, navigate to the root directory of the `Admin`, `Shop` or `Installer` package, then execute:

```bash
npm install && npm run install:browsers
npm run test:e2e
```

Admin and Shop need a running, seeded store at `APP_URL`; Installer runs against an uninstalled application. On Bagisto 2.4, which has no `test:e2e` script, run `npx playwright test --config=tests/e2e-pw/playwright.config.ts` instead.

::: tip Pull requests and Playwright
The Playwright workflow runs on a pull request only when it carries the **Need Playwright Testing** label, because it spans 60 shards across three databases. Pest, Pint and the translation check run on every push.
:::

**Translations:**

Every new English string needs its 21 translations, and CI enforces it:

```bash
php artisan bagisto:translations:check
```

**Pint Tests (Code Formatting):**

Pint is a PHP code style fixer that helps maintain consistent formatting across the codebase. Bagisto uses Pint's `laravel` preset, configured in `pint.json`, which builds on PSR-12. Before committing, run Pint to ensure your changes follow the project's coding standards.

```bash
# Check code formatting
vendor/bin/pint --test

# Fix code formatting
vendor/bin/pint
```

::: warning Important
Pest, Pint and the translation check must pass before your PR can be merged, and Playwright when it is requested. Run them locally to avoid CI failures.
:::

## 📝 Coding Standards

Bagisto follows established PHP standards for consistency and readability:

### Standards We Follow
- **[PSR-12](https://www.php-fig.org/psr/psr-12/)** - Extended Coding Style, applied through Pint's `laravel` preset
- **[PSR-4](https://www.php-fig.org/psr/psr-4/)** - Autoloading Standard

### PHPDoc Example

```php
/**
 * Register a service with CoreServiceProvider.
 *
 * @param  string|array  $loader
 * @param  Closure|string|null  $concrete
 * @param  bool  $shared
 */
protected function registerFacades($loader, $concrete = null, $shared = false): void
{
    // Implementation here
}
```

Two conventions Pint does not enforce and reviewers do: a docblock on every class member and no comments inside method bodies, and a condition with more than one expression split one expression per line with `&&` or `||` leading the next line:

```php
if (
    $user->isActive()
    && $user->hasRole('admin')
) {
    return true;
}
```

The repository's `AGENTS.md` and `CLAUDE.md` describe these conventions in full for contributors and for AI coding tools.

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

**Contact**: Email [support@bagisto.com](mailto:support@bagisto.com) immediately

### Security Report Should Include:
- Detailed description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Suggested fix (if available)

Thank you for contributing to Bagisto! 🎉
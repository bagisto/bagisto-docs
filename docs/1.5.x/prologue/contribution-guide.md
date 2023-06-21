# Contribution Guide

[[Toc]]

## Bug Reports

To encourage active collaboration, Bagisto welcomes both bug reports and pull requests. Instead of just reporting bugs, we encourage you to submit pull requests that include fixes or negative test cases demonstrating the issue. When filing a bug report, please provide a clear title and description of the problem. Include as much relevant information as possible, along with a code sample that reproduces the bug. The goal is to make it easy for everyone to understand and fix the issue.

Bug reports are meant to foster collaboration and find solutions. By reporting bugs, you can engage others in solving the problem and contribute to the project's improvement.

## Projects to Contribute

You can contribute to the following projects:

- Bagisto
- Bagisto docs
- Laravel-aliexpress-dropship
- Laravel-aliexpress-dropship-chrome-extension
- Bagisto-custom-style-extension

## Feature Requests

We welcome proposals for new features and enhancements to the existing Bagisto app. If you have a new feature in mind, please be prepared to contribute some of the code required to implement it.

## Branch Selection

Before submitting a pull request, it's important to consider the following points to help you choose the appropriate branch:

- **Bug Fixes**: If you're fixing a bug, make sure to port the fix to the latest version that supports it (currently v1.5.1).
- **Minor Feature Requests**: For minor features compatible with the current release, push your changes to the latest stable branch (currently v1.5.1).
- **Major Feature Requests**: If your request involves a major new feature with potential breaking changes, send it to the master branch, which corresponds to the upcoming release (v2.0.0).

## Compiled Assets

When submitting a change that includes compiled files, please avoid committing the compiled files directly. Maintainers find it difficult to review compiled files, and they may contain malicious code. To prevent this issue, the Bagisto maintainers will generate and commit the compiled files themselves.

## Security Vulnerabilities

If you discover a security vulnerability within Bagisto, please notify us immediately by sending an email to Jitendra Singh at [jitendra@webkul.in](mailto:jitendra@webkul.in). We take security vulnerabilities seriously and will address them promptly.

## Coding Style

Bagisto follows the [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) coding standard and the [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) autoloading standard. These standards ensure consistency and readability in the codebase, similar to Laravel.

## PHPDoc

Below is an example of a valid Bagisto doc block that follows the coding style:

```php
/**
 * Register a service with CoreServiceProvider.
 *
 * @param string|array             $loader
 * @param \Closure|string|null     $concrete
 * @param bool                     $shared
 * @return void
 * @throws \Exception
 */
protected function registerFacades($loader, $concrete = null, $shared = false)
{
    //
}
```
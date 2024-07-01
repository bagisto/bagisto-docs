# Contribution Guide

[[Toc]]

## Bug Reports

At Bagisto, we highly value active collaboration among our community members to continually enhance our platform's performance and reliability. To facilitate this collaborative effort, we extend a warm invitation to both report bugs and submit pull requests.

Rather than solely reporting bugs, we encourage you to take an active role in resolving issues by submitting pull requests containing fixes or negative test cases that effectively highlight the problem. This approach not only identifies issues but also provides practical solutions for their resolution.

When filing a bug report, we kindly request you to include a clear and descriptive title, along with a detailed description of the encountered problem. Additionally, please provide as much relevant information as possible, including a code sample that can reproduce the bug. Such comprehensive reports significantly expedite the troubleshooting process and enable swift resolution.

It is our collective goal to foster collaboration and find effective solutions to the challenges encountered. By actively participating in bug reporting, you not only engage fellow community members in problem-solving but also contribute significantly to the ongoing enhancement of the Bagisto project.

## Projects to Contribute

You can contribute to the following projects:

- Bagisto
- Bagisto docs
- Bagisto rest-api
- Bgaitso booking-product
- Laravel-aliexpress-dropship
- Laravel-aliexpress-dropship-chrome-extension
- Bagisto-custom-style-extension

## Feature Requests

We welcome proposals for new features and enhancements to the existing Bagisto app. If you have a new feature in mind, please be prepared to contribute some of the code required to implement it.

## Branch Selection

Before submitting a pull request, it's important to consider the following points to help you choose the appropriate branch:

- **Bug Fixes**: If you're fixing a bug, make sure to port the fix to the master version. 
- **Critical Bug Fixes**: If you're fixing a critical bug, make sure to port the fix to the latest stable version that supports it (currently v2.2.1).
- **Feature Requests**: If your request involves a feature with potential breaking changes, send it to the master branch, which corresponds to the upcoming release (v2.x).

## Compiled Assets

To determine the sorting order for Tailwind CSS classes, consult the official Tailwind CSS documentation for guidelines on class organization. Additionally, consider using the Tailwind Raw Reorder extension for VS Code to streamline the sorting process.

## Tailwind Class Reordering

When making changes to blade files that utilize Tailwind CSS classes, it's essential to maintain consistency and organization. Tailwind CSS classes should be ordered according to a predefined structure to enhance readability and maintain a clean codebase.

To determine how Tailwind CSS classes should be sorted, refer to the official Tailwind CSS documentation for guidelines on class ordering. 

[Class Reordering](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)


## Pint Tests

Pint tests are an essential part of ensuring the quality and reliability of code changes in Bagisto. When making changes to the code, ensure that all Pint tests pass before submitting your pull request.Before submitting your changes, run the Pint tests locally to verify that all test cases pass. It is important to confirm that the modifications do not cause any Pint test failures or regressions.

* To run the Pint tests locally, execute the following command in your terminal:
```php
vendor/bin/pint
```

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
 * @param  string|array  $loader
 * @param  \Closure|string|null  $concrete
 * @param  bool  $shared
 */
protected function registerFacades($loader, $concrete = null, $shared = false): void
{
    //
}
```
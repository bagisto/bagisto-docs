# Contribution Guide

[[TOC]]

## Bug Reports

To encourage active collaboration, Bagisto encourages pull requests, not just bug reports. "Bug reports" may also be sent in the form of a pull request containing a negative test.

However, when filing a bug report, your issue should contain a title and a clear description of the issue. You should also include as much relevant information as possible and a code sample that demonstrates the issue. The goal of a bug report is to make it easy for yourself - and others - to replicate the bug and develop a fix.

Remember, bug reports are created in the hope that others with the same problem will collaborate with you on solving it. Creating a bug report serves to help yourself and others start on the path of fixing the problem.

## Project To Contribute

- Bagisto

- Bagisto docs

- Laravel-aliexpress-dropship

- Laravel-aliexpress-dropship-chrome-extension

- Bagisto-custom-style-extension

## Feature Request

You can propose new features and improvements to the existing Bagisto app. If you propose a new feature, please be prepared to contribute some of the code that will be required to complete the feature you propose.

## Branch Selection

There are a few points you should know before making a pull request. Because it is necessary and will help you to choose a branch before giving a pull request.

::: tip Bug fixes
  All bug fixes should be ported to the latest version that supports the bug fix. (currently 1.5.0).
:::

::: tip Minor features request
  Minor features that are compatible with the current release can be pushed to the latest stable branch. (current:- v1.5.0).
:::

::: tip Major features request
  Major new feature requests that may include breaking changes should always be sent to the master branch, which includes the upcoming release.
:::

## Compiled Assets

If you are submitting a change that contains a compiled file, do not commit the compiled files. Because this is very unrealistic to review by the maintainer and may contain malicious code. In order to prevent this problem, all the compiled files will be generated and committed by Bagisto maintainers.

## Security Vulnerabilities

If you discover a security vulnerability within Bagisto, please send an email to Jitendra Singh at [jitendra@webkul.in](mailto:jitendra@webkul.in). All security vulnerabilities will be addressed immediately.

## Coding Style

Like Laravel, Bagisto follows the [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) coding standard and the [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) autoloading standard.

## PHPDoc

Below is an example of a valid Bagisto doc block. Note that the @param attribute is followed by two spaces, the argument type, two more spaces, and finally, the variable name:

~~~ ini
  /**
  * Register a service with CoreServiceProvider.
  *
  * @param  string|array  $loader
  * @param  \Closure|string|null  $concrete
  * @param  bool  $shared
  * @return void
  * @throws \Exception
  */
  protected function registerFacades($loader, $concrete = null, $shared = false)
  {
      //
  }
~~~

# Contribution Guide

Bagisto is developed in the open at [bagisto/bagisto](https://github.com/bagisto/bagisto). This page is for developers who want to report a problem in Bagisto or send a change to it. It says where each kind of report goes and which documentation pages you'll need; the contribution rules themselves are in the repository.

::: tip Read `CONTRIBUTING.md` Before You Start
[`CONTRIBUTING.md`](https://github.com/bagisto/bagisto/blob/master/CONTRIBUTING.md) is the source of truth for contributing to Bagisto: claiming an issue, choosing the branch to target, compiled assets, code style and docblocks, and the checks to run before you open a pull request.
:::

## Ways to Contribute

- **Report a bug.** A pull request with a test that fails because of the bug is a welcome form of report.
- **Propose a feature.** Agree the approach in a feature request before you build it.
- **Fix an issue or build an agreed feature.** Comment on the issue and wait to be assigned before you write code.
- **Improve a translation.** Locale files are in each package's `src/Resources/lang/<locale>/` directory, and every key must exist in all 22 locales.
- **Improve the documentation.** Each page of this site links to its source in [bagisto/bagisto-docs](https://github.com/bagisto/bagisto-docs); the merchant user guide is in [bagisto/user-guide](https://github.com/bagisto/user-guide).

## Reporting a Bug

1. Search the [issues](https://github.com/bagisto/bagisto/issues) for an existing report.
2. Check that the problem is in Bagisto and not in your own setup. Ask for help with your own installation on the [community forum](https://forums.bagisto.com/).
3. [Open an issue](https://github.com/bagisto/bagisto/issues/new/choose) with the bug report form. It asks for the affected version, your environment, the steps to reproduce, and the expected and actual results.

Feature requests use the same page: choose the feature request form.

## Security Vulnerabilities

Don't report a security vulnerability in the public issue tracker, and don't disclose it publicly. Email the details to [support@bagisto.com](mailto:support@bagisto.com), or open a ticket at [Bagisto Support](https://bagisto.uvdesk.com/en/), as the repository's [`SECURITY.md`](https://github.com/bagisto/bagisto/blob/master/SECURITY.md) describes.

## Related Pages

- [Coding Standards](../advanced/coding-standards.md): Pint, the conventions a review checks, and the translations check.
- [Testing Overview](../advanced/testing.md): how Bagisto's Pest tests and Playwright end-to-end tests are organized and run.
- [Package Development](../package-development/getting-started.md): how a Bagisto package is built and registered; every core module is one.
- [Agent Skills](../ai/agent-skills.md): `bagisto-git-workflow` and `bagisto-code-review` give a coding agent Bagisto's branch, commit and review conventions.

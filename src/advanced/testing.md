# Testing Overview

Bagisto has two kinds of automated tests. **Pest tests** check PHP behaviour from inside the application, and **Playwright end-to-end tests** drive a browser through the admin, the storefront and the installer. This page helps you pick one; each has its own page for writing and running it.

## Which Tool for What

| To test | Write | Core example |
|---|---|---|
| A class on its own: a repository, an indexer, a carrier, a tax or DataGrid class, a payment gateway | A Pest test in the package's `tests/Unit` | `packages/Webkul/Shipping/tests/Unit/CarriersTest.php` |
| What a route does: the page, redirect or JSON it returns, its validation and ACL refusals, and the rows, mail and events behind it | A Pest test in the package's `tests/Feature` | `packages/Webkul/Admin/tests/Feature/Catalog` |
| A flow a person clicks through in the admin or the storefront: forms, DataGrids, Vue components, cart and checkout | A Playwright end-to-end test | `packages/Webkul/Shop/tests/e2e-pw/tests/checkout` |
| The web installer | A Playwright end-to-end test | `packages/Webkul/Installer/tests/e2e-pw/tests/installer.spec.ts` |

When a request or a method call can prove the behaviour, write a Pest test: it needs no browser or running server, and it rolls back what it writes. Keep Playwright end-to-end tests for what only a browser shows, such as Vue components, JavaScript and what a person sees on screen.

<a id="test-suites"></a><a id="the-test-database"></a><a id="parallel-runs"></a><a id="running-tests"></a><a id="test-benches"></a><a id="shared-datasets"></a><a id="writing-tests-for-a-package"></a><a id="step-1-create-the-test-case"></a><a id="step-2-autoload-the-test-namespace"></a><a id="step-3-bind-the-test-case"></a><a id="step-4-write-a-test"></a><a id="step-5-add-a-suite"></a><a id="step-6-migrate-and-run-it"></a><a id="things-to-watch"></a>**Pest tests:** the suites, the test database, running tests, the test benches and registering a package's tests are on [Testing with Pest](./testing-with-pest.md).

<a id="end-to-end-tests-with-playwright"></a><a id="running-a-project"></a><a id="configuration"></a><a id="things-to-watch-1"></a>**Playwright end-to-end tests:** the three projects, running them, their configuration and writing a spec are on [Testing with Playwright](./testing-with-playwright.md).

## Where the Tests Live

```text
tests/
├── Pest.php                # binds each package's tests to its test case
├── TestCase.php            # Tests\TestCase
├── Datasets/               # Pest datasets every package can use
├── Unit/                   # cross-package Pest tests that need no database
└── e2e-pw/helpers/         # helpers shared by the Playwright projects

packages/Webkul/<Package>/tests/
├── <Package>TestCase.php   # the package's base test case
├── Concerns/               # test benches: traits that build fixtures
├── Fixtures/               # classes and files the tests load
├── Feature/                # Pest feature tests
├── Unit/                   # Pest unit tests
└── e2e-pw/                 # Admin, Shop and Installer only: the Playwright project
```

## One Database, One Run at a Time

Neither kind of test brings its own store: the Pest tests and the Admin and Shop specs run against an installed one that already holds data, and the Installer spec against an application that isn't installed yet.

- **Pest tests** use the database in `.env` and roll back each test; see [Testing with Pest](./testing-with-pest.md#the-test-database).
- **Playwright end-to-end tests** drive the store served at `APP_URL`, so they write to that store's database and roll back nothing.

In both, assert on the records the test created, never on counts or the first row of a listing. **Don't run Pest tests and Playwright end-to-end tests against the same database at the same time.** The specs change settings and prices that the Pest tests read, and the failures look like broken code.

## What CI Runs

The workflows are in the application's `.github/workflows/`:

| Workflow | Runs on | What it does |
|---|---|---|
| `pest-tests.yml` | Every push and pull request | Installs a fresh store with `APP_ENV=testing` on PHP 8.4, against MySQL 8.0, MariaDB 10.11 and PostgreSQL 16, then runs `vendor/bin/pest` in a single process |
| `playwright-tests.yml` | A pull request labelled **Need Playwright Testing**, a `v*` tag, or a manual run | `installer_gate` runs the Installer spec in English and Arabic on each database. When it passes, `playwright_tests` installs the store with demo samples and runs Admin and Shop in 10 shards on each database. Both serve the store with nginx and PHP-FPM. |
| `pint-tests.yml`, `translation-tests.yml` | Every push and pull request | `pint --test` and `php artisan bagisto:translations:check`; see [Coding Standards](./coding-standards.md) |

Every Playwright job uploads its HTML report, the per-test results and `storage/logs/laravel.log` as an artifact kept for one day. The pull request process, including the checks to run before you open one, is in [`CONTRIBUTING.md`](https://github.com/bagisto/bagisto/blob/master/CONTRIBUTING.md).

## Related Pages

- [Coding Standards](./coding-standards.md): the conventions a reviewer checks, and the other CI checks.
- [Agent Skills](../ai/agent-skills.md): `bagisto-pest-testing` and `bagisto-playwright-testing` carry the full test-writing conventions.

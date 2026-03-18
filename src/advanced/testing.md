# Testing Workflow

Bagisto uses [Pest PHP](https://pestphp.com/) v3 as its primary testing framework, backed by PHPUnit 11. The test suite covers unit tests, feature tests, and browser-level E2E tests via Playwright.

## Test Structure

Tests are organized per-package under each package's `tests/` directory, with a shared bootstrap at the project root:

```
tests/
├── Pest.php              # Global Pest configuration
└── TestCase.php          # Base test case

packages/Webkul/
├── Admin/tests/
│   └── Feature/          # Admin panel feature tests
├── Core/tests/
│   └── Unit/             # Core utility unit tests
├── Customer/tests/
│   └── Unit/             # Customer module unit tests
├── DataGrid/tests/
│   └── Unit/             # DataGrid unit tests
├── Installer/tests/
│   └── Feature/          # Installation wizard tests
├── Payment/tests/        # Payment base tests
├── PayU/tests/
│   ├── Unit/
│   └── Feature/
├── Razorpay/tests/
│   ├── Unit/
│   └── Feature/
├── Shop/tests/
│   └── Feature/          # Storefront feature tests
└── Stripe/tests/
    ├── Unit/
    └── Feature/
```

## Running Tests

### Run All Tests

```bash
php artisan test
```

Or directly with Pest:

```bash
./vendor/bin/pest
```

### Run a Specific Test Suite

The test suites are defined in `phpunit.xml`. For example, to run only admin feature tests:

```bash
./vendor/bin/pest --testsuite="Admin Feature Tests"
```

Available test suites (from `phpunit.xml`):

| Suite Name | Path | Type |
|---|---|---|
| Admin Feature Tests | `packages/Webkul/Admin/tests/Feature` | Feature |
| Core Unit Tests | `packages/Webkul/Core/tests/Unit` | Unit |
| Customer Unit Tests | `packages/Webkul/Customer/tests/Unit` | Unit |
| DataGrid Unit Tests | `packages/Webkul/DataGrid/tests/Unit` | Unit |
| Installer Feature Tests | `packages/Webkul/Installer/tests/Feature` | Feature |
| PayU Unit Tests | `packages/Webkul/PayU/tests/Unit` | Unit |
| PayU Feature Tests | `packages/Webkul/PayU/tests/Feature` | Feature |
| Razorpay Unit Tests | `packages/Webkul/Razorpay/tests/Unit` | Unit |
| Razorpay Feature Tests | `packages/Webkul/Razorpay/tests/Feature` | Feature |
| Shop Feature Tests | `packages/Webkul/Shop/tests/Feature` | Feature |
| Stripe Unit Tests | `packages/Webkul/Stripe/tests/Unit` | Unit |
| Stripe Feature Tests | `packages/Webkul/Stripe/tests/Feature` | Feature |

### Run a Single Test File

```bash
./vendor/bin/pest packages/Webkul/Admin/tests/Feature/ExampleTest.php
```

### Filter by Test Name

```bash
./vendor/bin/pest --filter="it can create a product"
```

## Test Environment

The test environment is configured in `phpunit.xml` with these overrides:

```xml
<env name="APP_ENV" value="testing"/>
<env name="BCRYPT_ROUNDS" value="4"/>
<env name="CACHE_STORE" value="array"/>
<env name="MAIL_MAILER" value="array"/>
<env name="SESSION_DRIVER" value="array"/>
<env name="QUEUE_CONNECTION" value="sync"/>
```

::: tip Performance
`BCRYPT_ROUNDS=4` speeds up tests by reducing password hashing cost. `CACHE_STORE=array` and `SESSION_DRIVER=array` use in-memory drivers for fast, isolated tests.
:::

The test bootstrap in `tests/Pest.php` also sets:

```php
ini_set('memory_limit', '1024M');
```

## Test Configuration (Pest.php)

The global `tests/Pest.php` file configures which base test case each package uses:

```php
uses(Tests\TestCase::class)->in(__DIR__);
uses(Webkul\Admin\Tests\AdminTestCase::class)->in('../packages/Webkul/Admin/tests');
uses(Webkul\Shop\Tests\ShopTestCase::class)->in('../packages/Webkul/Shop/tests');
uses(Webkul\Core\Tests\CoreTestCase::class)->in('../packages/Webkul/Core/tests');
// ... and so on for each package
```

Each package-specific test case extends `Tests\TestCase` and may bootstrap package-specific fixtures, factories, or state.

## Test Factories

Bagisto ships with 40+ model factories in `database/factories/` for generating test data. These follow the standard Laravel factory pattern:

```php
use Webkul\Product\Models\Product;

$product = Product::factory()->create();
```

The `bagisto/laravel-datafaker` dev dependency provides additional data generation utilities specific to e-commerce.

## Browser Tests (Playwright)

Bagisto includes Playwright E2E tests for both the admin panel and storefront. These are configured as GitHub Actions workflows:

- `admin_playwright_tests.yml` — Tests admin panel UI flows
- `shop_playwright_tests.yml` — Tests storefront UI flows

To run Playwright tests locally:

```bash
npx playwright install
npx playwright test
```

::: warning Prerequisites
Playwright tests require a running Bagisto instance with a seeded database. Make sure you have run `php artisan migrate:fresh --seed` before running E2E tests.
:::

## Code Style (Pint)

Bagisto uses [Laravel Pint](https://laravel.com/docs/12.x/pint) for code formatting. The CI runs Pint checks on every push and pull request.

```bash
# Check formatting
./vendor/bin/pint --test

# Fix formatting
./vendor/bin/pint
```

The configuration is in `pint.json` at the project root.

## CI Pipeline

GitHub Actions runs these checks on every push/PR:

| Workflow | What it checks |
|---|---|
| `pest_tests.yml` | All Pest unit and feature tests (MySQL 8.0, PHP 8.3) |
| `pint_tests.yml` | Code style with Laravel Pint |
| `admin_playwright_tests.yml` | Admin panel E2E tests |
| `shop_playwright_tests.yml` | Storefront E2E tests |
| `translation_tests.yml` | Translation file consistency |

## Writing Tests for a Package

When creating tests for a custom package, follow this pattern:

1. Create a `tests/` directory inside your package
2. Add a test case class extending `Tests\TestCase`
3. Register the test namespace in `composer.json` under `autoload-dev`
4. Add a test suite entry in `phpunit.xml`
5. Register the test path in `tests/Pest.php`

```php
// packages/Webkul/YourPackage/tests/Feature/ExampleTest.php

it('can perform expected action', function () {
    // Arrange
    $data = ['key' => 'value'];

    // Act
    $response = $this->post(route('your.route'), $data);

    // Assert
    $response->assertStatus(200);
});
```

::: tip Pest Syntax
Bagisto uses Pest's closure-based syntax (`it()`, `test()`, `expect()`) rather than PHPUnit class-based tests. Follow this convention for consistency.
:::

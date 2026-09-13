# Testing Workflow

Bagisto uses [Pest PHP](https://pestphp.com/) as its primary testing framework, backed by PHPUnit. Bagisto 2.5 runs Pest 5 on PHPUnit 13; Bagisto 2.4 runs Pest 3 on PHPUnit 11. The test suite covers unit tests, feature tests, and browser-level E2E tests via Playwright.

## Test Structure

Tests are organized per-package under each package's `tests/` directory, with a shared bootstrap at the project root:

```text
tests/
├── Pest.php              # Global Pest configuration
├── TestCase.php          # Base test case
├── Datasets/             # Datasets shared by every package (Bagisto 2.5)
└── Unit/                 # Cross-package tests that need no database (Bagisto 2.5)

packages/Webkul/
├── Admin/tests/
│   ├── AdminTestCase.php
│   ├── Concerns/         # AdminTestBench
│   ├── Fixtures/         # Section types used by tests
│   └── Feature/          # Admin panel feature tests
├── Core/tests/
│   ├── Concerns/         # CoreAssertions, ConfiguresSettings
│   └── Unit/
├── Product/tests/
│   ├── Concerns/         # ProductTestBench
│   └── Unit/
├── Sales/tests/
│   ├── Concerns/         # OrderTestBench
│   └── Unit/
├── Shop/tests/
│   ├── Fixtures/         # Image cache templates used by tests
│   └── Feature/          # Storefront feature tests
└── ...
```

## Running Tests

### Run All Tests

```bash
vendor/bin/pest
```

### Run a Specific Test Suite

The test suites are defined in `phpunit.xml`. For example, to run only admin feature tests:

```bash
vendor/bin/pest --testsuite="Admin Feature Test"
```

Suites on Bagisto 2.5:

| Suite Name | Path |
|---|---|
| Unit Test | `tests/Unit` |
| Admin Feature Test | `packages/Webkul/Admin/tests/Feature` |
| Category Unit Test | `packages/Webkul/Category/tests/Unit` |
| Core Unit Test | `packages/Webkul/Core/tests/Unit` |
| Customer Unit Test | `packages/Webkul/Customer/tests/Unit` |
| DataGrid Unit Test | `packages/Webkul/DataGrid/tests/Unit` |
| EUWithdrawal Feature Test | `packages/Webkul/EUWithdrawal/tests/Feature` |
| FPC Unit Test, FPC Feature Test | `packages/Webkul/FPC/tests/Unit`, `…/Feature` |
| Installer Feature Test | `packages/Webkul/Installer/tests/Feature` |
| Omnibus Feature Test | `packages/Webkul/Omnibus/tests/Feature` |
| PayGlocal Unit Test, PayGlocal Feature Test | `packages/Webkul/PayGlocal/tests/…` |
| PayU Unit Test, PayU Feature Test | `packages/Webkul/PayU/tests/…` |
| Product Unit Test | `packages/Webkul/Product/tests/Unit` |
| Razorpay Unit Test, Razorpay Feature Test | `packages/Webkul/Razorpay/tests/…` |
| Rule Unit Test | `packages/Webkul/Rule/tests/Unit` |
| Sales Unit Test | `packages/Webkul/Sales/tests/Unit` |
| Shipping Unit Test | `packages/Webkul/Shipping/tests/Unit` |
| Shop Feature Test | `packages/Webkul/Shop/tests/Feature` |
| Stripe Unit Test, Stripe Feature Test | `packages/Webkul/Stripe/tests/…` |
| Tax Unit Test | `packages/Webkul/Tax/tests/Unit` |

Bagisto 2.4 has the Admin, Core, Customer, DataGrid, EUWithdrawal, FPC, Installer, PayGlocal, PayU, Razorpay, Shop and Stripe suites; the others were added in Bagisto 2.5. Packages without a `tests/` directory (PhonePe, Checkout, RMA, and others) have no suite, and a `<testsuite>` pointing at a path that does not exist makes PHPUnit error, so write the tests first.

### Run a Single Test File

```bash
vendor/bin/pest packages/Webkul/Admin/tests/Feature/Catalog/ProductTest.php
```

### Filter by Test Name

```bash
vendor/bin/pest --filter="it can create a product"
```

### Run in Parallel

```bash
vendor/bin/pest --parallel
```

Parallel runs create one database per process (`{DB_DATABASE}_test_1`, `_test_2`, …) and do **not** re-migrate them. After a schema change the failures look like broken code: drop the `_test_N` databases, run `php artisan bagisto:install --no-interaction` and rerun. CI runs the suite without `--parallel`.

## Test Environment

The test environment is configured in `phpunit.xml` with these overrides:

```xml
<env name="APP_ENV" value="testing"/>
<env name="BCRYPT_ROUNDS" value="4"/>
<env name="CACHE_STORE" value="array"/>
<env name="MAIL_MAILER" value="array"/>
<env name="SESSION_DRIVER" value="array"/>
<env name="QUEUE_CONNECTION" value="sync"/>
<env name="RESPONSE_CACHE_DRIVER" value="array"/>
```

The database is the one your `.env` points at, so the same suite runs against MySQL, MariaDB or PostgreSQL by changing `DB_CONNECTION`; CI runs all three. `tests/TestCase.php` wraps every test in a transaction (`DatabaseTransactions`), so the database is not rebuilt between tests.

The test bootstrap in `tests/Pest.php` also sets:

```php
ini_set('memory_limit', '1024M');
```

## Test Configuration (Pest.php)

The global `tests/Pest.php` file binds each package's tests to its test case:

```php
use Webkul\Admin\Tests\AdminTestCase;
use Webkul\Core\Tests\CoreTestCase;
use Webkul\Shop\Tests\ShopTestCase;

uses(AdminTestCase::class)->in('../packages/Webkul/Admin/tests');
uses(ShopTestCase::class)->in('../packages/Webkul/Shop/tests');
uses(CoreTestCase::class)->in('../packages/Webkul/Core/tests');
// ... and so on for each package
```

Each package-specific test case extends `Tests\TestCase` and mixes in the benches it needs. `AdminTestCase`, for example, uses `AdminTestBench`, `CoreAssertions`, `OrderTestBench` and `ProductTestBench`.

## Shared test infrastructure

These helpers exist on Bagisto 2.5 and are the way to write a test that needs a product, an order or a configuration value:

| Helper | Where | What it gives you |
|---|---|---|
| `setConfig(array|string $settings, $value = null)` | `Webkul\Core\Tests\Concerns\ConfiguresSettings` (used by `Tests\TestCase`) | Writes a `core_config` row for the current channel and locale, replacing any existing row for that code |
| `ProductTestBench` | `packages/Webkul/Product/tests/Concerns` | `createProduct($type, $overrides)`, `createSimpleProduct()`, `createConfigurableProduct([100, 200])`, `createGroupedProduct()`, `createBundleProduct()`, `createDownloadableProduct()`, `createVirtualProduct()`, `setProductStock($product, $qty)`, and `storeAndUpdate*Product()` variants that go through the admin controllers. Products come back indexed |
| `OrderTestBench` | `packages/Webkul/Sales/tests/Concerns` | `createOrder($attributes, $items, $customer)`, `createGuestOrder()`, `invoiceOrder()`, `shipOrder()` |
| `sharedDataset($name, $dataset)` | `tests/Pest.php` | Registers a dataset every package can use with `->with('product types')`. Shipped datasets: `customer groups`, `product types`, `stockable product types`, `non-stockable product types`, `shoppers`, `special price windows` |
| `expect($value)->toBePrice($expected)` | `tests/Pest.php` | Compares money to the current currency's decimals |

```php
it('shows the lowest price for a discounted product', function (string $type) {
    $product = $this->createProduct($type, ['price' => 100, 'special_price' => 80]);

    $this->setConfig('catalog.products.omnibus.is_enabled', 1);

    $this->get(route('shop.product_or_category.index', $product->url_key))
        ->assertOk();
})->with('stockable product types');
```

## Test Factories

Bagisto ships model factories inside the packages, under `src/Database/Factories/`, following the standard Laravel factory pattern:

```php
use Webkul\Product\Models\Product;

$product = Product::factory()->create();
```

The `bagisto/laravel-datafaker` dev dependency provides additional data generation utilities specific to e-commerce. Prefer the test benches above for products and orders; they create the attribute values and index rows a factory alone does not.

## Browser Tests (Playwright)

Three Playwright suites live in the packages, each with its own configuration and page objects under `tests/e2e-pw/`:

| Suite | Directory | Needs |
|---|---|---|
| Admin | `packages/Webkul/Admin` | A running, seeded store |
| Shop | `packages/Webkul/Shop` | A running, seeded store |
| Installer | `packages/Webkul/Installer` | An **uninstalled** application; the specs drive the web installer and are tagged per locale (`@en`, `@ar`) |

```bash
cd packages/Webkul/Admin      # or Shop, or Installer
npm install && npm run install:browsers
npm run test:e2e
```

Append Playwright flags after `--`, for example `npm run test:e2e -- --grep "@en"` or `-- --shard=1/10`. `test:e2e:headed`, `test:e2e:ui`, `test:e2e:debug` and `test:e2e:report` mirror the Playwright options, and `npm run typecheck` runs the TypeScript compiler over the specs.

The base URL comes from `APP_URL`, falling back to `BASE_URL`; the config throws when neither is set. `BAGISTO_ADMIN_EMAIL` and `BAGISTO_ADMIN_PASSWORD` default to the installer's admin, `HEADED=1` shows the browser, and `APP_TIMEZONE` sets the browser time zone. Shared helpers under the repository root `tests/e2e-pw/helpers` are imported as `@shared/*`.

::: info Bagisto 2.4
2.4's packages have no `test:e2e` scripts; run `npx playwright test --config=tests/e2e-pw/playwright.config.ts` from the package directory. Its configuration reads `APP_URL` only, and its page objects are the older inline-selector style.
:::

## Code Style (Pint)

Bagisto uses [Laravel Pint](https://laravel.com/docs/pint) for code formatting. The CI runs Pint checks on every push and pull request.

```bash
# Check formatting
vendor/bin/pint --test

# Fix formatting
vendor/bin/pint
```

The configuration is in `pint.json` at the project root and applies the `laravel` preset with no custom rules. One convention Pint cannot enforce: a condition with more than one expression joined by `&&` or `||` is split one expression per line with the operator leading the next line.

## Translations

```bash
php artisan bagisto:translations:check
```

Compares every locale against English and fails on missing or extra keys; an empty string counts as present. CI runs it on every push.

## CI Pipeline

GitHub Actions runs these checks on every push/PR:

| Workflow | What it checks |
|---|---|
| `pest-tests.yml` | The full Pest suite on PHP 8.4 against MySQL 8.0, MariaDB 10.11 and PostgreSQL 16 (2.4: PHP 8.3, MySQL and MariaDB) |
| `pint-tests.yml` | Code style with Laravel Pint |
| `playwright-tests.yml` | An `installer_gate` job runs the Installer suite for English and Arabic on each database, then `playwright_tests` runs the Admin and Shop suites in 10 shards on each database. Runs on a pull request only when it carries the **Need Playwright Testing** label |
| `translation-tests.yml` | Translation file consistency |
| `docker-publish.yml` | Builds and pushes every server × database production image on a `v*` tag |

## Writing Tests for a Package

When creating tests for a custom package, follow this pattern:

1. Create a `tests/` directory inside your package with a test case class extending `Tests\TestCase`
2. Register the test namespace in `composer.json` under `autoload-dev`
3. Add a `<testsuite>` entry in `phpunit.xml`
4. Bind the test case in `tests/Pest.php` with `uses(...)->in(...)`

```php
// packages/Webkul/YourPackage/tests/Feature/ExampleTest.php

it('can perform expected action', function () {
    $this->loginAsAdmin();

    $response = $this->post(route('your.route'), ['key' => 'value']);

    $response->assertStatus(200);
});
```

::: tip Pest Syntax
Bagisto uses Pest's closure-based syntax (`it()`, `test()`, `expect()`) rather than PHPUnit class-based tests. Follow this convention for consistency, and mix in `ProductTestBench` or `OrderTestBench` rather than building catalog data by hand.
:::

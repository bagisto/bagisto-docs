# Testing with Pest

Pest tests check Bagisto's PHP behaviour from inside the application: a class on its own, or a route with the responses, database rows, mail and events behind it. Bagisto 2.5 uses Pest 5, and 2.4 uses Pest 3. Where the tests live, and when to write a Playwright end-to-end test instead, is on [Testing Overview](./testing.md).

## Test Suites

Tests are Pest closures (`it(...)`), not classes. `tests/Pest.php` binds each package's `tests` directory to that package's test case, for example `uses(AdminTestCase::class)->in('../packages/Webkul/Admin/tests')`, so `$this` inside a test is that test case. It also raises the memory limit to 1024M. Every package test case extends `Tests\TestCase`, which applies `DatabaseTransactions` and `ConfiguresSettings`.

Pest runs on PHPUnit, so the suites are the `<testsuite>` entries in `phpunit.xml`, one per test directory:

| Suite | Directory | Packages |
|---|---|---|
| `<Package> Feature Test` | `packages/Webkul/<Package>/tests/Feature` | Admin, EUWithdrawal, FPC, Installer, Omnibus, PayGlocal, PayU, Razorpay, Shop, Stripe |
| `<Package> Unit Test` | `packages/Webkul/<Package>/tests/Unit` | Category, Core, Customer, DataGrid, FPC, PayGlocal, PayU, Product, Razorpay, Rule, Sales, Shipping, Stripe, Tax |
| `Unit Test` | `tests/Unit` | The cross-package checks |

A package with no `tests/` directory, such as Checkout, PhonePe or RMA, has no suite. A `<testsuite>` whose directory doesn't exist makes PHPUnit error, so create the directory and its first test before you add the entry.

## The Test Database

**File:** `phpunit.xml`

```xml
<php>
    <env name="APP_ENV" value="testing"/>
    <env name="APP_MAINTENANCE_DRIVER" value="file"/>
    <env name="BCRYPT_ROUNDS" value="4"/>
    <env name="CACHE_STORE" value="array"/>
    <env name="MAIL_MAILER" value="array"/>
    <env name="PULSE_ENABLED" value="false"/>
    <env name="QUEUE_CONNECTION" value="sync"/>
    <env name="RESPONSE_CACHE_DRIVER" value="array"/>
    <env name="SESSION_DRIVER" value="array"/>
    <env name="TELESCOPE_ENABLED" value="false"/>
</php>
```

Nothing there sets a `DB_*` value, so the tests use the database in your `.env`: your installed store, with its channel, locales, currencies, customer groups, attribute family and catalog. `DatabaseTransactions` rolls back each test, so nothing a test writes is left behind. Three things follow:

- **Install the store before the first run** (`php artisan bagisto:install`). The tests read the seeded channel, locale, currency, customer groups and default attribute family instead of creating them.
- **Run your package's migrations first** (`php artisan migrate`). A normal run never migrates, so a table your package adds doesn't exist until you do. Only a parallel run migrates, and only its own test databases.
- **Assert only on the records the test created.** See [Testing Overview](./testing.md#one-database-one-run-at-a-time), which also covers Playwright end-to-end tests sharing the database.

Queued jobs run inline, and mail, cache, session and the full page cache stay in memory. To run a suite against another database engine, override every `DB_*` value for that run; see [Database Compatibility](./database-compatibility.md#testing-against-every-database).

### Parallel Runs

```bash
vendor/bin/pest --parallel
```

Each process gets its own database, named after `DB_DATABASE` with `_test_1`, `_test_2` and so on. When a process creates its database, Laravel migrates it and `App\Providers\AppServiceProvider` seeds it with `db:seed`, which runs the installer's seeders. An existing test database is only brought up to date with `migrate`, so a changed seeder, or an edit to a migration that has already run, never reaches it, and the failures look like broken code. Rebuild the test databases when that happens:

```bash
vendor/bin/pest --parallel --recreate-databases
```

CI runs the suite in a single process. When a test fails only under `--parallel`, run it without the flag before debugging it.

## Running Tests

```bash
# Every suite
vendor/bin/pest

# One suite, by its name in phpunit.xml
vendor/bin/pest --testsuite="Shop Feature Test"

# One directory, or one file
vendor/bin/pest packages/Webkul/Admin/tests/Feature/Catalog
vendor/bin/pest packages/Webkul/Admin/tests/Feature/Catalog/Products/ProductTest.php

# Tests whose description matches
vendor/bin/pest --filter="should return the product index page"
```

`php artisan test` takes the same options. `vendor/bin/pest --testsuite="Unit Test"` runs the cross-package checks, which need no database.

## Test Benches

The benches build fixtures the way the application does, so a test never assembles attribute values and index rows by hand. Prefer them to model factories whenever a test needs a product, an order or a setting.

| Helper | Trait | What you get |
|---|---|---|
| `createProduct($type, $overrides)`, `createSimpleProduct($overrides)`, `createVirtualProduct()`, `createConfigurableProduct([100, 200])`, `createGroupedProduct()`, `createBundleProduct()`, `createDownloadableProduct()`, `createProductOfType($type)` | `ProductTestBench` | A product with every attribute of the default family and the default channel, with stock for simple and virtual products, after `catalog.product.update.after` has been dispatched so it is indexed. `createProductOfType()` accepts core type keys only; use `createProduct()` for a custom type |
| `storeAndUpdateSimpleProduct()` and the other `storeAndUpdate…Product()` methods | `ProductTestBench` | A product created through the admin's store and update routes |
| `setProductStock($product, $qty)` | `ProductTestBench` | The product's stock set to that quantity |
| `createOrder($attributes, $items, $customer)`, `createGuestOrder()`, `createOrderItem()`, `invoiceOrder()`, `shipOrder()` | `OrderTestBench` | Orders with a payment, both addresses and items, then invoices and shipments against them |
| `loginAsAdmin()`, `loginAsAdminWithPermissions($permissions)` | `AdminTestBench` | An admin session, optionally with a custom role limited to those permissions |
| `loginAsCustomer()`, `actAsCustomerGroup($id)`, `addProductToCart()`, `applyCoupon()`, `prepareCartForCheckout()`, `placeOrder()`, `createCartRuleForPricing()`, `assertCartDiscount()` | The traits `ShopTestBench` uses | Storefront sessions, carts, checkout and promotions |
| `setConfig('code', $value)` or `setConfig([...])` | `ConfiguresSettings`, on every test case | The setting's `core_config` rows replaced by one for the current channel and locale |
| `assertPrice($expected, $actual)`, `expect($value)->toBePrice($expected)` | `CoreAssertions`, `tests/Pest.php` | Money compared at the current currency's precision |
| `createCartWithItems($paymentMethod)` | `ProvidePaymentHelpers` | A cart ready for a payment gateway |

The traits live in the `tests/Concerns` directories of their packages: Product, Sales, Admin, Shop, Core, Payment, and FPC and Omnibus for their own suites. Bagisto 2.4 has only `AdminTestBench`, `ShopTestBench`, `CoreAssertions`, `FPCTestBench` and `ProvidePaymentHelpers`, and no `tests/Datasets`.

::: details The Benches Each Core Test Case Mixes In
| Test case | Adds |
|---|---|
| `Webkul\Admin\Tests\AdminTestCase` | `AdminTestBench`, `CoreAssertions`, `OrderTestBench`, `ProductTestBench` |
| `Webkul\Shop\Tests\ShopTestCase` | `CoreAssertions` and `ShopTestBench`, which brings the product and order benches and the cart, checkout, pricing, customer and assertion helpers |
| `Webkul\Omnibus\Tests\OmnibusTestCase` | Extends `ShopTestCase` and adds `OmnibusEnablement` |
| `EUWithdrawalTestCase` | `CoreAssertions`, `ShopTestBench` |
| `FPCTestCase` | `CoreAssertions`, `FPCTestBench` |
| `ProductTestCase`, `CategoryTestCase`, `RuleTestCase`, `ShippingTestCase` | `CoreAssertions`, `ProductTestBench` |
| `Webkul\Sales\Tests\SalesTestCase` | `CoreAssertions`, `OrderTestBench`, `ProductTestBench` |
| `CoreTestCase`, `DataGridTestCase`, `TaxTestCase` | `CoreAssertions` |
| `StripeTestCase`, `RazorpayTestCase`, `PayUTestCase`, `PayGlocalTestCase` | `ProvidePaymentHelpers` |
| `CustomerTestCase`, `InstallerTestCase`, `PaymentTestCase` | Nothing |

`AdminTestCase` also overrides `call()` so the theme registry is resolved for each request, and an admin test that renders a storefront page or mail doesn't leave the storefront's themes for the next admin request.
:::

The benches are built on the model factories in each package's `src/Database/Factories/`. A factory on its own creates the `products` row without the attribute values, channel and indexes a request expects. To fill a local store with records instead, use `php artisan bagisto:fake` from the `bagisto/laravel-datafaker` development dependency.

### Shared Datasets

The files in `tests/Datasets/` register datasets with `sharedDataset()`, a function defined in `tests/Pest.php`, so tests anywhere under `packages/` can use them; Pest scopes a plain `dataset()` to its own directory. The shipped datasets are `customer groups`, `product types`, `stockable product types`, `non-stockable product types`, `shoppers` and `special price windows`.

**File:** `packages/Webkul/Shop/tests/Feature/Product/Types/Simple/CartRuleTest.php`

```php
it('should apply a fixed cart rule discount to a simple product', function (array $ruleGroups, ?int $customerGroupId) {
    $product = $this->createSimpleProduct(['price' => ['float_value' => 500]]);

    $this->createCartRuleForPricing(['action_type' => 'by_fixed', 'discount_amount' => 50], $ruleGroups);

    $this->actAsCustomerGroup($customerGroupId);

    $response = $this->addProductToCart($product->id)->assertOk();

    $this->assertCartDiscount($response, 50);
})->with('customer groups');
```

The dataset runs the test four times: for a rule open to every customer group, to guests only, to general customers only and to wholesale customers only, each time shopping as a member of the group the rule allows.

## Writing Tests for a Package

A package in `packages/` registers its tests in the same three application files core uses: `composer.json`, `tests/Pest.php` and `phpunit.xml`. The steps use `Webkul\YourPackage`; replace it with your package's namespace. [Events, Commands and Tests](../package-development/events-commands-and-tests.md#test-the-package) applies them to the FAQ package built in the Package Development guide.

### Step 1: Create the Test Case

The test case gives your tests the benches they need.

**File:** `packages/Webkul/YourPackage/tests/YourPackageTestCase.php`

```php
<?php

namespace Webkul\YourPackage\Tests;

use Tests\TestCase;
use Webkul\Admin\Tests\Concerns\AdminTestBench;
use Webkul\Core\Tests\Concerns\CoreAssertions;
use Webkul\Product\Tests\Concerns\ProductTestBench;

class YourPackageTestCase extends TestCase
{
    use AdminTestBench, CoreAssertions, ProductTestBench;
}
```

Mix in only the benches your tests use.

### Step 2: Autoload the Test Namespace

Add the namespace to `autoload-dev`, in alphabetical order among the other entries, then rebuild the autoloader.

**File:** `composer.json`

```json
"autoload-dev": {
    "psr-4": {
        "Webkul\\YourPackage\\Tests\\": "packages/Webkul/YourPackage/tests"
    }
}
```

```bash
composer dump-autoload
```

### Step 3: Bind the Test Case

Add the import with the others and the binding with the other `uses()` calls, so `$this` in your tests is your test case.

**File:** `tests/Pest.php`

```php
use Webkul\YourPackage\Tests\YourPackageTestCase;

uses(YourPackageTestCase::class)->in('../packages/Webkul/YourPackage/tests');
```

### Step 4: Write a Test

A feature test drives your package through its routes, with the benches building the data.

**File:** `packages/Webkul/YourPackage/tests/Feature/ProductGridTest.php`

```php
<?php

use function Pest\Laravel\getJson;

it('should list a new product in the admin product grid', function () {
    $product = $this->createSimpleProduct();

    $this->loginAsAdmin();

    getJson(route('admin.catalog.products.index', [
        'filters' => ['product_id' => [$product->id]],
    ]), [
        'X-Requested-With' => 'XMLHttpRequest',
    ])
        ->assertOk()
        ->assertJsonPath('records.0.product_id', $product->id);
});
```

The test builds an indexed product, signs in as an admin and asks the product DataGrid for that one product, so it passes on a store that already has a catalog. It's adapted from `packages/Webkul/Admin/tests/Feature/Catalog/Products/ProductTest.php`; point your own tests at your package's routes.

### Step 5: Add a Suite

Add the suite inside `<testsuites>`, now that its directory exists.

**File:** `phpunit.xml`

```xml
<!-- YourPackage package testsuites. -->
<testsuite name="YourPackage Feature Test">
    <directory suffix="Test.php">packages/Webkul/YourPackage/tests/Feature</directory>
</testsuite>
```

### Step 6: Migrate and Run It

```bash
php artisan migrate
vendor/bin/pest --testsuite="YourPackage Feature Test"
```

`migrate` creates your package's tables on the store's database. The test run doesn't migrate anything itself, so a test that touches a new table fails with "table not found" until you have run it.

## Things to Watch

- **The registrations live in the application.** A package installed through Composer carries its tests, but the application that runs them registers them in the same three files.
- **Helper functions in test files are global.** Pest loads every test file in one process, so two files declaring a function with the same name is a fatal error. Search `packages/*/*/tests` before you name one.
- **Pass booleans as `true` and `false`** in `assertDatabaseHas()`. Comparing a boolean column with `1` fails on PostgreSQL.
- **Use `assertOk()`, `assertUnauthorized()` and the other named assertions** rather than `assertStatus()`. An admin without a permission is answered with `401`.
- **A store with Elasticsearch enabled keeps test products.** The product benches dispatch `catalog.product.update.after`, and with the `sync` queue the product is indexed during the test. Rolling back the transaction doesn't remove it from an external search index, so run the tests on a store whose search engine is the database, or against a separate cluster.

## Related Pages

- [Testing Overview](./testing.md): which tool to use, where the tests live and what CI runs.
- [Testing with Playwright](./testing-with-playwright.md): Playwright end-to-end tests for the admin, storefront and installer.
- [Database Compatibility](./database-compatibility.md#testing-against-every-database): running a suite on PostgreSQL.
- [Debugging Tips](./debugging.md): the debug bar, logs and artisan commands for a test that fails without a clear reason.

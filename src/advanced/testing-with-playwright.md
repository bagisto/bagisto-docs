# Testing with Playwright

Playwright end-to-end tests drive Chromium through an installed, running store, the way an admin, a shopper or the person installing Bagisto would. The Admin, Shop and Installer packages each carry an independent Playwright project. When to write a Pest test instead, and the database both kinds of test share, is on [Testing Overview](./testing.md).

## What the End-to-End Tests Cover

| Project | Specs | Needs |
|---|---|---|
| `packages/Webkul/Admin` | Grouped by admin menu: appearance, catalog, CMS, configuration, customers, marketing, sales, settings, plus admin sign-in | An installed, seeded store being served at `APP_URL` |
| `packages/Webkul/Shop` | Grouped by customer journey: auth, cart, checkout, compare, customer, filter, home, product, promotion, review, RMA, search, wishlist | The same |
| `packages/Webkul/Installer` | `installer.spec.ts`, one test per locale, tagged `@en` and `@ar` | An application that isn't installed yet, and a database for the installer to write to |

## Where Specs and Helpers Live

```text
packages/Webkul/<Admin|Shop|Installer>/
├── package.json                 # Playwright, and the test:e2e scripts
└── tests/e2e-pw/
    ├── playwright.config.ts
    ├── setup.ts                 # the adminPage and shopPage fixtures (Admin and Shop)
    ├── tsconfig.json            # the @pages, @utils, @data and @shared aliases
    ├── pages/                   # page objects
    ├── tests/                   # *.spec.ts
    ├── utils/                   # env.ts, paths.ts and the project's own helpers
    └── data/                    # upload fixtures (Admin and Shop)

tests/e2e-pw/helpers/            # env, faker, paths, prices, regex: imported as @shared/*
```

The shared helpers import no packages, not even `@playwright/test`, because CI runs `npm install` in the package directory only; a helper that needs a dependency belongs in the project's `utils/`. The projects share no page objects or fixtures: Admin and Shop each keep page objects for every screen they drive, including the other side's.

## Running a Project

The npm scripts and dependencies belong to each package, so run everything from the package directory:

```bash
cd packages/Webkul/Admin
npm install
npm run install:browsers
npm run test:e2e
```

| Script | Runs |
|---|---|
| `npm run test:e2e` | `playwright test --config=tests/e2e-pw/playwright.config.ts` |
| `npm run test:e2e:headed`, `test:e2e:ui`, `test:e2e:debug` | The same with `--headed`, `--ui` or `--debug` |
| `npm run test:e2e:report` | The HTML report in `tests/e2e-pw/playwright-report` |
| `npm run typecheck` | `tsc --noEmit` over the project |
| `npm run format:check`, `npm run format` | Prettier over `tests/e2e-pw` |
| `npm run install:browsers` | `playwright install --with-deps chromium` |

Pass Playwright's own arguments after `--`:

```bash
# From packages/Webkul/Admin: one spec file, or one shard of ten
npm run test:e2e -- tests/catalog/categories.spec.ts
npm run test:e2e -- --shard=1/10

# From packages/Webkul/Installer: one locale's test
npm run test:e2e -- --grep "@en"
```

Bagisto 2.4 has none of these scripts, no shared helpers and no Installer project; there, `npx playwright test --config=tests/e2e-pw/playwright.config.ts` runs a project, and its configuration reads `APP_URL` from the application's `.env`.

## Configuration

Each project's `utils/env.ts` loads a `tests/e2e-pw/.env` inside the project when one exists, and the application's `.env` otherwise:

| Variable | Used for | Default |
|---|---|---|
| `APP_URL`, then `BASE_URL` | The base URL | None; the run stops with an error |
| `BAGISTO_ADMIN_EMAIL`, `BAGISTO_ADMIN_PASSWORD` | The admin the fixtures sign in as | `admin@example.com`, `admin123` |
| `APP_TIMEZONE` | Node's `TZ` and the browser's time zone | `UTC` |
| `HEADED` | Show the browser (`1`, `true`, `yes` or `on`) | Off |
| `INSTALLER_DB_CONNECTION`, `_HOST`, `_PORT`, `_DATABASE`, `_USERNAME`, `_PASSWORD` | The database the Installer spec installs into | `mysql`, `127.0.0.1`, `3306`, `bagisto`, `root`, `root` |

All three projects run one worker with no retries in Chromium, and keep a screenshot, a video and a trace of every failure under `tests/e2e-pw/test-results/`. A test may take 60 seconds in Admin, 240 seconds in Shop (with a two-hour cap on the whole run) and 300 seconds in Installer, and `expect` waits up to 30 seconds. Give one slow flow more time with `test.setTimeout()` inside that test rather than raising the timeout in `playwright.config.ts`. Open a failure's trace from the package directory:

```bash
npx playwright show-trace tests/e2e-pw/test-results/<test-directory>/trace.zip
```

## Writing a Spec

A spec says what the user does and what must then be true; a page object in `pages/` owns every locator. This spec creates its own currency before each test and deletes what it made afterwards, because nothing is rolled back.

**File:** `packages/Webkul/Admin/tests/e2e-pw/tests/settings/exchange-rates.spec.ts`

```ts
import { test } from "../../setup";
import {
    CurrenciesPage,
    type CurrencyData,
} from "../../pages/admin/settings/CurrenciesPage";
import { ExchangeRatesPage } from "../../pages/admin/settings/ExchangeRatesPage";
import { generateCurrencyCode, uniqueStamp } from "../../utils/faker";

test.describe("exchange rate management", () => {
    let currenciesPage: CurrenciesPage;
    let exchangeRatesPage: ExchangeRatesPage;
    let currency: CurrencyData;

    test.beforeEach(async ({ adminPage }) => {
        currenciesPage = new CurrenciesPage(adminPage);
        exchangeRatesPage = new ExchangeRatesPage(adminPage);
        currency = {
            code: generateCurrencyCode(),
            name: `Rate Currency ${uniqueStamp()}`,
            symbol: "¤",
        };

        await currenciesPage.createCurrency(currency);
    });

    test.afterEach(async () => {
        try {
            await exchangeRatesPage.deleteExchangeRatesIfPresent([currency.name]);
        } finally {
            await currenciesPage.deleteCurrenciesIfPresent([currency.name]);
        }
    });

    test("should create an exchange rate and list it against its currency", async () => {
        await exchangeRatesPage.createExchangeRate(currency.name, "1.25");

        await exchangeRatesPage.expectExchangeRateListed(currency.name, "1.25");
    });
});
```

The file goes on to test a duplicate rate, an update and a delete with the same setup. What to copy from it:

- **Import `test` from the project's `setup.ts`**, not from `@playwright/test`. Otherwise the `adminPage` fixture, a page already signed in to the admin, isn't available.
- **Generate unique data inside `beforeEach`.** Values created at module scope are shared by every test in the file.
- **Keep locators in the page object.** `ExchangeRatesPage` extends `DatagridPage`, declares the grid's path and the form's fields, and offers actions such as `createExchangeRate()`, which checks its own success message, and `expect…()` methods for the spec to assert with.
- **Follow the naming.** Files are lower-kebab (`exchange-rates.spec.ts`), a page object's file is named for its class, and titles are lower case and say what must happen (`should …`).

Each project runs only the specs in its own `tests/` directory. A package of your own can carry its own project in `packages/Webkul/YourPackage/tests/e2e-pw/`: copy `playwright.config.ts`, `setup.ts`, `tsconfig.json` and the `utils/` files they import (`admin.ts`, `env.ts`, `paths.ts`) from the Admin project, and give the package a `package.json` with the same `test:e2e` scripts and the `@playwright/test` and `dotenv` dependencies. The `@shared/*` path in `tsconfig.json` is relative, so it resolves from any `packages/Webkul/<Package>/tests/e2e-pw`.

## Things to Watch

- **Nothing is rolled back, and Pest tests must not use the same database at the same time.** See [Testing Overview](./testing.md#one-database-one-run-at-a-time) for what to assert on.
- **Rebuild assets first.** After changing a view, JavaScript or CSS, run `npm run build` in that package, or the browser loads the previous bundle.
- **The admin session is cached** in `tests/e2e-pw/.state/admin-auth.json` by the `adminPage` fixture in both Admin and Shop, and renewed when it has expired. Delete it after changing `BAGISTO_ADMIN_EMAIL` or the admin's password.
- **Match CI when a spec only fails locally.** CI installs the store with `php artisan bagisto:install --no-interaction --demo-samples` and serves it with `APP_DEBUG=false`, which also keeps the debug bar off.

## Related Pages

- [Testing Overview](./testing.md): which tool to use, where the tests live and what CI runs.
- [Testing with Pest](./testing-with-pest.md): the Pest tests, their suites and the test benches.
- [Agent Skills](../ai/agent-skills.md): `bagisto-playwright-testing` carries the full spec and page object conventions.

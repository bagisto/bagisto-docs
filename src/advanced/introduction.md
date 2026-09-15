# Introduction

This section covers the machinery under the packages, themes, payment methods, shipping methods and product types you build. Each page is a reference for one topic, so start with the one your task needs. The pages assume you can create and register a package, as in [Package Development](../package-development/getting-started.md), and know Laravel's service providers, events and queues.

## Pages in This Section

**Foundations**

- **[Understanding the Core Class](./understanding-core-class.md)**: the `core()` helper for the current channel, locale and currency, price formatting and saved configuration, and the other global helpers.

**Extension Points**

- **[Event Listeners](./event-listeners.md)**: every event core dispatches, what a listener receives, and how a package registers listeners.
- **[View Render Events](./view-render-events.md)**: adding markup to storefront and admin pages without overriding their views.
- **[Command Palette](./command-palette.md)**: adding actions, aliases, record searches and providers to the admin's Ctrl + K palette.

**Commands and Background Work**

- **[Artisan Commands](./artisan-commands.md)**: Bagisto's own commands, their options, and the ones the scheduler runs.
- **[Queues, Jobs and Scheduling](./queue-jobs-scheduling.md)**: what runs on the queue and the scheduler, and how to run workers.

**Caching, Indexing and Search**

- **[Cache Strategy](./cache-strategy.md)**: the caches Bagisto keeps and what clears them.
- **[Understanding Indexers](./understanding-indexers.md)**: the price, inventory, flat, catalog rule and search indexes, what refreshes them, and `indexer:index`.
- **[Search Engines](./search-engines.md)**: the search manager, the database and Elasticsearch engines, and the contracts behind them.

**Data**

- **[Understanding Data Transfer](./understanding-data-transfer.md)**: the queued import pipeline and how to write an importer for your own entity.
- **[File Storage](./file-storage.md)**: the default disk, Amazon S3 and Cloudflare R2, and what switching between them does and doesn't move.
- **[Database Compatibility](./database-compatibility.md)**: writing queries that run on MySQL, MariaDB and PostgreSQL with `db_grammar()`.

**Quality**

- **[Testing Overview](./testing.md)**: which tool to use, where tests live and what CI runs.
- **[Testing with Pest](./testing-with-pest.md)**: the Pest suites, the test database and test benches.
- **[Testing with Playwright](./testing-with-playwright.md)**: the Playwright end-to-end projects and writing a spec.
- **[Coding Standards](./coding-standards.md)**: Pint, the conventions a review checks, and the translations check.

**Troubleshooting**

- **[Debugging Tips](./debugging.md)**: the debug bar, logs, routes, events, queries, queues and caches.
- **[Common Pitfalls](./common-pitfalls.md)**: the problems that come up most and how to get out of them.

Tuning a store for production, such as the full page cache, Elasticsearch, Varnish and Octane, is covered in [Performance](../performance/introduction.md).

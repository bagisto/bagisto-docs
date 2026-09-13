# Digging Deeper

Welcome to the "Digging Deeper" section of Bagisto documentation! This advanced section covers the machinery under the packages, themes and payment or shipping methods you have already built: the core helpers, the indexers, the event system, the console, the queue, the caches and the test suite.

::: info Prerequisites
This section assumes you have:
- Completed the [Package Development](../package-development/getting-started) guides
- Understanding of [Theme Development](../theme-development/getting-started) concepts  
- Solid knowledge of Laravel concepts (events, queues, service providers)
- Experience with PHP and object-oriented programming
:::

## What's in this section

### The core and its data

- **[Understanding Core Class](./understanding-core-class.md)**: the `core()` helper, channels, locales, currencies, configuration, price formatting and the other global helpers.
- **[Understanding Indexers](./understanding-indexers.md)**: how price, inventory, flat and search indexes are built and refreshed, and when to run them.
- **[Understanding Data Transfer](./understanding-data-transfer.md)**: the queued import pipeline and how to write an importer for your own entity.
- **[Database Compatibility](./database-compatibility.md)**: writing queries that run on MySQL, MariaDB and PostgreSQL with `db_grammar()`.
- **[Search Engines](./search-engines.md)**: the database and Elasticsearch engines, the contracts behind them, and how a package adds one.
- **[File Storage](./file-storage.md)**: the public disk, S3 and Cloudflare R2, and what switching between them does and does not move.

### Hooking into the core

- **[Event Listeners](./event-listeners.md)**: the events the core dispatches and how to listen to them.
- **[View Render Events](./view-render-events.md)**: injecting markup into existing pages without overriding views.
- **[Command Palette](./command-palette.md)**: registering pages, actions and record searches in the admin's Ctrl+K palette.

### Operating the application

- **[Artisan Commands](./artisan-commands.md)**: every `bagisto:*`, `indexer:*` and scheduled command.
- **[Queue, Jobs & Scheduling](./queue-jobs-scheduling.md)**: what runs on the queue and the scheduler, and how to run workers.
- **[Cache Strategy](./cache-strategy.md)**: the caches Bagisto keeps, what invalidates them, and the environment keys that move them to Redis.
- **[Testing Workflow](./testing.md)**: the Pest suites, shared datasets and test benches, and the Playwright projects.
- **[Debugging Tips](./debugging.md)** and **[Common Pitfalls](./common-pitfalls.md)**: the problems that come up most and how to get out of them.

## Why These Techniques Matter

Unlike basic package development, these techniques let you:

- **Maintain Upgradability**: extend functionality through events, contracts and configuration rather than by editing core files
- **Build Production-Ready Solutions**: run the queue, the scheduler and the caches the way the core expects
- **Ship on any database and any storage**: keep a package portable across the engines and disks Bagisto supports
- **Handle Complex Business Logic**: solve sophisticated e-commerce requirements

## Learning Path

We recommend following this progression:

1. **Start with the core class**: most helpers you will call from anywhere are on it
2. **Then events**: understanding Bagisto's event system is foundational for the rest
3. **Then the operational pages**: commands, queue and cache explain what happens after a request ends
4. **Then the specialised topics**: indexers, search, storage and the command palette as your package needs them
5. **Finish with testing**: a package without a test suite is one CI run away from breaking

::: tip Integration with Previous Learning
These advanced techniques build upon concepts from:
- [Package Development](../package-development/getting-started) - Service providers, routing, and views
- [Theme Development](../theme-development/getting-started) - Blade templates and asset management
- [Performance Optimization](../performance/introduction) - Efficient coding practices
:::

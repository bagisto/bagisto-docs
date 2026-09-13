# Search Engines

Product search on the storefront, in the admin product grid and in the catalog API is routed through one manager that picks an **engine** per **context**. The database engine is always available; Elasticsearch is the alternative. This page describes the pieces a developer meets: the manager, the contracts, the configuration keys and the indexing jobs. Installing and pointing Bagisto at an Elasticsearch cluster is on [Configure Elasticsearch](../performance/configure-elasticsearch.md).

::: info Two implementations
Bagisto 2.5 has the engine-agnostic design described here (`Webkul\Product\Services\Search`). **Bagisto 2.4** reaches Elasticsearch through `Webkul\Product\Repositories\ElasticSearchRepository`, chooses the engine per call with `ProductRepository::setSearchEngine('elastic')`, and keeps its settings under `catalog.products.search` in the admin plus the `.env` file for the connection. The differences are called out below.
:::

## How a query is routed

`Webkul\Product\Services\Search\SearchEngineManager` holds the decision:

```php
const ENABLED_KEY = 'search_engines.general.settings.enabled';
const ENGINE_KEY = 'search_engines.general.settings.engine';
const ADMIN_MODE_KEY = 'search_engines.general.products.admin_mode';
const STOREFRONT_MODE_KEY = 'search_engines.general.products.storefront_mode';
```

1. If the master switch is off, every context uses the database.
2. Otherwise the master engine is read (`database` or `elastic`).
3. A context may override it: `admin_mode` for the admin product grid and product search, `storefront_mode` for category pages, the search page and the storefront product API. An empty value means "use the default engine".

The two contexts are the cases of `Webkul\Product\Enums\SearchContextEnum` (`STOREFRONT`, `ADMIN`). A caller sets the context on the repository, and everything downstream resolves the engine from it:

```php
$products = $this->productRepository
    ->setSearchContext(SearchContextEnum::STOREFRONT)
    ->getAll($params);
```

`ProductRepository::getAll()` then either queries the database or calls `SearchEngine::search()` for ids and loads those. `findBySlug()` asks the engine first and falls back to the `url_key` attribute.

## Contracts and bindings

| Contract | Methods | Purpose |
|---|---|---|
| `Webkul\Product\Contracts\SearchEngine` | `search(array $params, array $options): array{ids, total}`, `getSuggestions(?string $query): ?string`, `getMaxPrice(array $params = []): float`, `findBySlug(string $slug): ?int` | Answers queries |
| `Webkul\Product\Contracts\SearchIndexer` | `indexBatch(array $products)`, `deleteBatch(array $productIds)`, `reindexFull()` | Keeps the engine's index in step with the catalog |
| `Webkul\Product\Contracts\SearchEngineConnection` | `configure(array $overrides = [])`, `probe(array $overrides = [])`, `describesRecorded(array $overrides): bool` | Applies stored settings and tests reachability |

`ProductServiceProvider` binds the implementations under conventional container names:

```php
$this->app->singleton('product.search.connection.elastic', ElasticConnection::class);
$this->app->singleton('product.search.engine.database', DatabaseEngine::class);
$this->app->singleton('product.search.engine.elastic', ElasticSearchEngine::class);
$this->app->singleton('product.search.indexer.elastic', ElasticSearchIndexer::class);
```

The manager resolves `product.search.engine.{value}` and `product.search.indexer.{value}` where `{value}` is a case of `Webkul\Product\Enums\SearchEngineEnum` (`database`, `elastic`). When no external engine is enabled the indexer is `NullIndexer`, so indexing jobs are safe to dispatch unconditionally.

`DatabaseEngine` is deliberately partial: `search()` returns no ids and `findBySlug()` returns `null`, because with the database engine the repository queries products directly; only `getMaxPrice()` does real work.

::: warning Adding a third engine means editing core
The engine list is a closed enum. `SearchEngineOptions::getEngineOptions()` iterates `SearchEngineEnum::cases()` and the manager type-hints the enum, so a Meilisearch or OpenSearch engine cannot be registered from a package by binding `product.search.engine.meilisearch` alone; a new enum case is needed. The bindings are documented here so that an override of the Elasticsearch engine, or a fork adding a case, knows where to hook in.
:::

## Configuration

All settings are in the **Search Engines** configuration group, stored in `core_config`:

| Key | Purpose |
|---|---|
| `search_engines.general.settings.enabled` | Master switch; off means database everywhere |
| `search_engines.general.settings.engine` | `database` or `elastic` |
| `search_engines.general.products.admin_mode` | Engine for the admin context, or empty to inherit |
| `search_engines.general.products.storefront_mode` | Engine for the storefront context, or empty to inherit |
| `search_engines.elastic.settings.auth_type` | `none`, `basic`, `api_key`, `cloud_api_key`, `cloud_basic` |
| `search_engines.elastic.settings.hosts` | Comma-separated host list |
| `search_engines.elastic.settings.cloud_id` | Elastic Cloud id |
| `search_engines.elastic.settings.username`, `password`, `api_key` | Credentials, shown according to `auth_type` |
| `search_engines.elastic.settings.index_prefix` | Prefixed to every index name so several stores can share a cluster |
| `search_engines.elastic.settings.min_query_length`, `max_query_length` | Query length bounds (defaults 0 and 1000) |

`Webkul\Product\Enums\ElasticAuthEnum` maps each auth type to the `elasticsearch.connections.*` entry it configures (`default`, `api` or `cloud`) and to the settings it reads; the `depends` rules on the admin fields are generated from it.

At boot, `SearchEngineConfigurator` calls `ElasticConnection::configure()`, which copies the stored settings onto `config/elasticsearch.php` and clears credentials the chosen auth type does not use. A setting left empty keeps the value from `.env` (`ELASTICSEARCH_HOST`, `ELASTICSEARCH_USER`, `ELASTICSEARCH_PASS`, `ELASTICSEARCH_API_KEY`, `ELASTICSEARCH_CLOUD_ID`, `ELASTICSEARCH_INDEX_PREFIX`), so a deployment can still keep credentials out of the database.

The migration `2026_08_27_000001_move_search_engine_config_codes` carries the five 2.4 keys under `catalog.products.search` over to the new names and switches `enabled` on wherever an external engine had been chosen; the connection settings themselves are not migrated from `.env`.

### Connection test

`POST admin/configuration/search-engines/{engine}/test-connection` (`admin.configuration.search-engines.test-connection`) probes the engine with the settings currently in the form, whitelisted to `auth_type`, `hosts`, `cloud_id`, `username`, `password`, `api_key` and `index_prefix`. It answers 200 when `Webkul\Product\Enums\SearchEngineStatusEnum::isUsable()` and 422 otherwise, with one of `available`, `unreachable`, `unauthorized`, `incompatible` or `misconfigured`. `SearchEngineAvailability` caches the verdict for five minutes under `search_engines.{engine}.availability`; the About page and the configuration page read that cache.

## Indexing

The Elasticsearch indexer (`Webkul\Product\Helpers\Indexers\ElasticSearch`) writes one index per channel and locale, named by `ElasticSearchEngine::formatIndexName($channelCode, $localeCode)` as `{prefix}products_{channel}_{locale}_index`, and includes a `category_name` field built from the product's categories.

Indexing happens through two queued jobs that delegate to `SearchEngineManager::indexer()`:

| Job | Dispatched by |
|---|---|
| `Webkul\Product\Jobs\Search\IndexProducts` | The product listener: dispatched on its own after create, and as the last link of a `Bus::chain` after the inventory and price index jobs after update; also by the product importer |
| `Webkul\Product\Jobs\Search\DeleteProducts` | The product listener before delete, and the importer |

On 2.4 these are `Jobs\ElasticSearch\UpdateCreateIndex` and `DeleteIndex`, each of which re-checks the engine setting inline.

A full rebuild is done from the console:

```bash
php artisan indexer:index --type=search --mode=full
```

`search` only runs when an external engine is enabled and only in `full` mode; there is no selective search reindex. On 2.4 the type is `elastic`. Run it after enabling Elasticsearch on an existing catalog, after changing `index_prefix`, and after the upgrade to Bagisto 2.5, whose index mapping added `category_name`.

## Related

- [Configure Elasticsearch](../performance/configure-elasticsearch.md) — installing the cluster and pointing Bagisto at it.
- [Understanding Indexers](./understanding-indexers.md) — the flat, price and inventory indexers that feed search.
- [Queue, Jobs & Scheduling](./queue-jobs-scheduling.md) — running the indexing jobs on a worker.

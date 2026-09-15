# Search Engines

Product search in the storefront, the storefront product API and the admin product grid goes through one manager, `Webkul\Product\Services\Search\SearchEngineManager`, which picks an **engine** for each **context**: the database, which is always available, or Elasticsearch, the external engine core ships. This page explains how a query is routed, what each engine searches and how the index keeps up with the catalog; connecting a cluster is on [Configure Elasticsearch](../performance/configure-elasticsearch.md).

The services live in `packages/Webkul/Product/src/Services/Search/`, the contracts in `packages/Webkul/Product/src/Contracts/` and the enums in `packages/Webkul/Product/src/Enums/`.

## How a Query Is Routed

The manager reads four stored settings and applies them in this order:

1. If `search_engines.general.settings.enabled` is off, every context uses the database.
2. Otherwise the default engine is `search_engines.general.settings.engine` (`database` or `elastic`). An empty or unknown value means `database`.
3. When the default is Elasticsearch, a context can move back to the database: `search_engines.general.products.admin_mode` for the admin, `search_engines.general.products.storefront_mode` for the storefront. An empty value means "use the default engine". A context can't pick Elasticsearch while the default is the database.

The contexts are the cases of `Webkul\Product\Enums\SearchContextEnum` (`STOREFRONT`, `ADMIN`). A caller sets the context on the product repository, and every read after that resolves its engine from it:

**File:** `packages/Webkul/Shop/src/Http/Controllers/API/ProductController.php`

```php
return $this->productRepository
    ->setSearchContext(SearchContextEnum::STOREFRONT)
    ->getAll(array_merge(request()->query(), [
        'query' => $query,
        'channel_id' => core()->getCurrentChannel()->id,
        'status' => 1,
        'visible_individually' => 1,
    ]));
```

| Caller | Context |
|---|---|
| `Webkul\Admin\Http\Controllers\Catalog\ProductController::search()` (`admin.catalog.products.search`) | `ADMIN` |
| `Webkul\Admin\DataGrids\Catalog\ProductDataGrid` (asks `resolveDriver()` and queries Elasticsearch directly) | `ADMIN` |
| `Webkul\Admin\Validations\ProductCategoryUniqueSlug` (checking a slug isn't taken) | `STOREFRONT` |
| `Webkul\Shop\Http\Controllers\ProductsCategoriesProxyController` (finding a product by its slug) | `STOREFRONT` |
| `Webkul\Shop\Http\Controllers\SearchController` (the suggestion on the search page) | `STOREFRONT` |
| `Webkul\Shop\Http\Controllers\API\ProductController` and `API\CategoryController` | `STOREFRONT` |

`ProductRepository` then does the following for each read:

| Method | Database engine | External engine |
|---|---|---|
| `getAll($params)` | `searchFromDatabase()` builds the query, filters and pagination in SQL | `searchFromExternalEngine()` asks the engine for one page of ids and the total, then loads those products from the database |
| `findBySlug($slug)` | Looks the product up by its `url_key` attribute | Asks the engine first, then falls back to `url_key` |
| `getSuggestions($query)` | Returns `null` | A term suggestion on `name` |
| `getMaxPrice($params)` | The highest `min_price` in `product_price_indices` for the customer group | A `max` aggregation on the index |

## What Is Searched and Filtered

The search term arrives as the `query` parameter and is copied to `name`. It's expanded with the store's search synonyms (`Webkul\Marketing\Repositories\SearchSynonymRepository::getSynonymsByQuery()`), then matched against the product name only:

- **Database:** the `name` attribute's `text_value` is matched with `%term%` through `db_grammar()->caseInsensitiveLike()`, once per synonym.
- **Elasticsearch:** a `match_phrase_prefix` on `name`, once per synonym.

Every other request parameter that names an attribute code (`color=3,4`, `price=10,50`, `new=1`) becomes a filter. `AttributeRepository::getProductDefaultAttributes()` resolves the codes, and the engine builds a filter by attribute type: boolean, price (a range; `price` itself uses the customer group's price), text, select, checkbox and multiselect. On Elasticsearch a select filter on a configurable attribute also matches the variants' values.

### The Elasticsearch Document

`Webkul\Product\Helpers\Indexers\ElasticSearch::getIndices()` builds one document per product for each channel the product is assigned to and each of that channel's locales:

| Field | Source |
|---|---|
| `id`, `type`, `sku`, `attribute_family_id`, `created_at` | The product row |
| `category_ids`, `category_name` | The product's categories; `category_name` holds each category's path of names in that locale |
| `quantity` | The sum of the product's inventories |
| `name`, `status`, `visible_individually`, `new`, `featured`, `url_key`, `short_description`, `description` | Always indexed |
| Every attribute with `is_filterable` on | Its value for the channel and locale |
| `price_{customer group id}` | The price index for each customer group, or the product type's minimal price |
| `ca_{attribute code}` | Each configurable attribute, holding the variants' values |
| `$product->additional` | Merged into the document |

A document reflects the attributes, categories and customer groups that existed when it was written, so an attribute switched to filterable, a renamed category or a new customer group reaches the index only when the affected products are indexed again. [Build the index](../performance/configure-elasticsearch.md#build-the-index) lists when to run a full reindex.

### Query Length Limits

`search_engines.elastic.settings.min_query_length` (default `0`) and `max_query_length` (default `1000`) are stored on the Elasticsearch settings page, but they apply to the storefront search box whichever engine is active. The header views print them as the input's `minlength` and `maxlength` attributes:

**File:** `packages/Webkul/Shop/src/Resources/views/components/layouts/header/desktop/bottom.blade.php`

```blade
minlength="{{ core()->getConfigData('search_engines.elastic.settings.min_query_length') }}"
maxlength="{{ core()->getConfigData('search_engines.elastic.settings.max_query_length') }}"
```

The mobile header (`header/mobile/index.blade.php`) does the same. Nothing checks the length on the server: `SearchController` only requires `query` to be a string without backslashes, and the product API accepts any length. If your theme replaces the header views, print the two attributes yourself.

## Contracts and Bindings

| Contract | Methods | Purpose |
|---|---|---|
| `Webkul\Product\Contracts\SearchEngine` | `search(array $params, array $options): array`, `getSuggestions(?string $query): ?string`, `getMaxPrice(array $params = []): float`, `findBySlug(string $slug): ?int` | Answers queries; `search()` returns `ids` and `total` |
| `Webkul\Product\Contracts\SearchIndexer` | `indexBatch(array $products): void`, `deleteBatch(array $productIds): void`, `reindexFull(): void` | Keeps an index in step with the catalog |
| `Webkul\Product\Contracts\SearchEngineConnection` | `configure(array $overrides = []): void`, `probe(array $overrides = []): array`, `describesRecorded(array $overrides): bool` | Applies stored settings and tests reachability, for an engine reached over the network |

`ProductServiceProvider` binds the implementations under conventional names:

**File:** `packages/Webkul/Product/src/Providers/ProductServiceProvider.php`

```php
/**
 * Register search engine bindings.
 */
protected function registerSearchBindings(): void
{
    $this->app->singleton(SearchEngineManager::class);

    $this->app->singleton('product.search.connection.elastic', ElasticConnection::class);

    $this->app->singleton('product.search.engine.database', DatabaseEngine::class);

    $this->app->singleton('product.search.engine.elastic', ElasticSearchEngine::class);

    $this->app->singleton('product.search.indexer.elastic', ElasticSearchIndexer::class);
}
```

The manager resolves `product.search.engine.{value}` and `product.search.indexer.{value}`, where `{value}` is a case of `Webkul\Product\Enums\SearchEngineEnum`. When no external engine is enabled, `indexer()` returns `NullIndexer`, so the indexing jobs are safe to dispatch whatever the settings say. `DatabaseEngine::search()` returns no ids and `findBySlug()` returns `null` on purpose: with the database engine the repository queries the tables itself.

### Changing How Elasticsearch Searches

Because the manager resolves engines by name, a package can replace the Elasticsearch engine by binding a subclass under the same name. Register the provider in `bootstrap/providers.php` after `ProductServiceProvider`, so its binding is the one that stays:

**File:** `packages/Webkul/SearchTuning/src/Providers/SearchTuningServiceProvider.php`

```php
<?php

namespace Webkul\SearchTuning\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\SearchTuning\Search\ElasticSearchEngine;

class SearchTuningServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton('product.search.engine.elastic', ElasticSearchEngine::class);
    }
}
```

`Webkul\SearchTuning\Search\ElasticSearchEngine` extends `Webkul\Product\Services\Search\Engines\ElasticSearchEngine` and overrides the public method you want to change, such as `getFilters()` or `getSortOptions()`. To change what goes into a document, bind a subclass of `Webkul\Product\Helpers\Indexers\ElasticSearch` that overrides `getIndices()`; `ElasticSearchIndexer` receives it through its constructor.

::: warning A Third Engine Means Editing Core
The engine list is a closed enum. `SearchEngineOptions` builds the admin selects from `SearchEngineEnum::cases()`, and the manager only resolves names that are enum cases, so an OpenSearch or Meilisearch engine can't be added from a package alone: it needs a new `SearchEngineEnum` case, and an edit to a core package is lost on update.
:::

## Configuration

The settings are stored in `core_config` under the **Search Engines** configuration section:

| Key | Default | Purpose |
|---|---|---|
| `search_engines.general.settings.enabled` | off | Master switch; off means the database everywhere |
| `search_engines.general.settings.engine` | `database` | The default engine |
| `search_engines.general.products.admin_mode` | empty | The admin's engine, empty to use the default |
| `search_engines.general.products.storefront_mode` | empty | The storefront's engine, empty to use the default |
| `search_engines.elastic.settings.auth_type` | `none` | `none`, `basic`, `api_key`, `cloud_api_key` or `cloud_basic` |
| `search_engines.elastic.settings.hosts` | empty | Comma-separated host URLs |
| `search_engines.elastic.settings.cloud_id` | empty | Elastic Cloud ID |
| `search_engines.elastic.settings.username`, `password`, `api_key` | empty | Credentials, shown according to `auth_type` |
| `search_engines.elastic.settings.index_prefix` | empty | Prepended to every index name as typed, so keep it lowercase |
| `search_engines.elastic.settings.min_query_length`, `max_query_length` | `0`, `1000` | The storefront search box limits described above |

`Webkul\Product\Enums\ElasticAuthEnum` maps each authentication type to the `elasticsearch.connections.*` entry it uses (`default`, `api` or `cloud`) and to the settings it reads; the admin fields' `depends` rules come from it.

### Applying the Settings at Boot

`ProductServiceProvider::boot()` calls `SearchEngineConfigurator::configure()`, which calls `configure()` on every bound connection. `ElasticConnection::configure()` reads the `search_engines.elastic.settings.*` rows straight from `core_config` and:

- returns without changing anything when no row exists, so `config/elasticsearch.php` and `.env` stay in charge;
- otherwise sets `elasticsearch.connection` from the stored authentication type. When no type is stored, it infers one from the credentials saved in the admin; credentials that exist only in `.env` don't count, so such a store resolves to `none`. It then sets the credentials that type doesn't read to `null`, and copies every non-empty setting over the configuration values. Empty settings keep the values from `.env`.

Because this runs at boot, a process that boots once, such as a queue worker or an Octane worker, keeps the settings it booted with until it restarts.

### Connection Test

`POST admin/configuration/search-engines/{engine}/test-connection` (`admin.configuration.search-engines.test-connection`) probes the engine with the settings currently on the form, limited to `auth_type`, `hosts`, `cloud_id`, `username`, `password`, `api_key` and `index_prefix`. It answers `200` when the status is usable and `422` otherwise, with a `status` from `Webkul\Product\Enums\SearchEngineStatusEnum`; for what each status means, see [Configure Elasticsearch](../performance/configure-elasticsearch.md#troubleshooting). When the tested values match the saved ones, `SearchEngineAvailability` stores the verdict in the application cache for five minutes under `search_engines.{engine}.availability`, where the settings page and the About page read it.

## Indexing

`Webkul\Product\Helpers\Indexers\ElasticSearch` writes one index per channel and locale, named by `ElasticSearchEngine::formatIndexName($channelCode, $localeCode)`: `{prefix}products_{channel}_{locale}_index`, with the channel and locale codes lowercased. Two queued jobs keep the index current, and both go through `SearchEngineManager::indexer()`:

| Job | Dispatched by |
|---|---|
| `Webkul\Product\Jobs\Search\IndexProducts` | `Webkul\Product\Listeners\Product` after a product is created; after an update, as the last job of a `Bus::chain()` behind the inventory and price index jobs; before a delete, for related products that survive it; and the product importer |
| `Webkul\Product\Jobs\Search\DeleteProducts` | The product listener before a delete (a configurable product's variants included), and the product importer |

Both jobs take the product and its related products: a simple product's configurable, bundle and grouped parents, or a configurable product's variants.

A full rebuild runs with `php artisan indexer:index --type=search --mode=full` ([Build the index](../performance/configure-elasticsearch.md#build-the-index)). `Webkul\Product\Console\Commands\Indexer` runs the `search` type only when an external engine is enabled and only in `full` mode; there is no selective search reindex, and `php artisan indexer:index` without options (selective mode) runs the price and flat indexers and skips both inventory and search. A full run reads products in batches of 100, sends each batch with one bulk request, removes the documents of products no longer assigned to a channel, then scrolls every index and deletes documents whose product no longer exists.

## Things to Watch

- **Prices in the index age.** `IndexProducts` runs on product saves and imports only. The scheduled `indexer:index --type=price` and the catalog rule reindex update the price index tables but not the search documents, so price sorting and price filters on Elasticsearch can lag behind date-bound special prices and catalog rules until the products are indexed again.
- **Filters take attribute codes from the request.** On Elasticsearch a parameter naming an attribute of a type the engine doesn't filter on (a date or textarea attribute, for example) throws `InvalidArgumentException`.
- **Code written for Bagisto 2.4.** There, Elasticsearch is reached through `Webkul\Product\Repositories\ElasticSearchRepository`, a caller picks the engine with `ProductRepository::setSearchEngine('elastic')`, and the settings are stored under `catalog.products.search`; [`UPGRADE.md`](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#search-architecture-refactored-to-engine-agnostic-design) lists the renamed classes, jobs and keys.

## Related Pages

- [Configure Elasticsearch](../performance/configure-elasticsearch.md): connecting the cluster, building the index and troubleshooting.
- [Understanding Indexers](./understanding-indexers.md): the flat, price and inventory indexers.
- [Queues, Jobs and Scheduling](./queue-jobs-scheduling.md): running the indexing jobs on a worker.

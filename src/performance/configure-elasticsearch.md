# Configure Elasticsearch

This guide connects a Bagisto store to an Elasticsearch cluster, builds the product index and checks it before going live. How the engine is chosen for each context, what goes into a document and how the index stays current are explained on [Search Engines](../advanced/search-engines.md).

## When You Need It

Use Elasticsearch when searching and filtering the catalog in the database is too slow for your catalog. You need:

- **Elasticsearch 8.** Bagisto requires the `elasticsearch/elasticsearch` client `^8.10`, and the client refuses a server that fails its product check.
- **The PHP `curl` extension**, which Bagisto's `composer.json` already requires.
- **A queue worker**, so product saves update the index outside the request. See [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md#running-workers-in-production).

## Step 1: Check the Cluster Answers

Run this from the application server. A default Elasticsearch 8 install enables security and TLS:

```bash
curl --cacert /path/to/http_ca.crt -u elastic https://localhost:9200
```

A reachable cluster returns JSON with its `cluster_name` and `version.number`.

## Step 2: Enter the Connection Settings

Bagisto builds its client from `config/elasticsearch.php`, which reads `.env`. Settings saved in the admin are copied over it when the application boots, and any admin setting left empty keeps the `.env` value; see [Search Engines](../advanced/search-engines.md#applying-the-settings-at-boot). On Bagisto 2.4 the connection comes from `.env` and `config/elasticsearch.php` only, and the engine is chosen with the search settings of the catalog configuration.

Enter the settings in the admin, in `.env`, or both; an empty admin field keeps the `.env` value.

### Settings in the Admin

The settings are in the **Search Engines** configuration section.

1. Under **General**, switch on **Enable External Search Engine** (`search_engines.general.settings.enabled`) and set **Default Search Engine** to **Elasticsearch**.
2. Leave **Admin Search Mode** and **Storefront Search Mode** on **Use Default**, or set one of them to **Database** to keep that side of the store on the database.
3. Under **Elasticsearch**, choose the **Authentication** type and fill in the fields it shows:

   | Authentication type | Fields |
   |---|---|
   | `none` | Hosts |
   | `basic` | Hosts, username, password |
   | `api_key` | Hosts, API key |
   | `cloud_api_key` | Cloud ID, API key |
   | `cloud_basic` | Cloud ID, username, password |

   **Hosts** takes one or more comma-separated URLs. Set a lowercase **Index Prefix** when more than one store or environment shares the cluster: the prefix is used as typed, and Elasticsearch rejects index names with uppercase letters.
4. Click **Test Connection**. It tries the values on the form before they're saved.
5. Save the configuration.

### Settings in `.env`

None of these keys is in `.env.example`; add the ones you need:

```properties
ELASTICSEARCH_HOST=https://localhost:9200
ELASTICSEARCH_USER=
ELASTICSEARCH_PASS=
ELASTICSEARCH_API_KEY=
ELASTICSEARCH_CLOUD_ID=
ELASTICSEARCH_INDEX_PREFIX=
```

::: details How the `.env` Keys Map to `config/elasticsearch.php`
| `.env` key | `config/elasticsearch.php` |
|---|---|
| `ELASTICSEARCH_HOST` | `connections.default.hosts` and `connections.api.hosts` (one host) |
| `ELASTICSEARCH_USER`, `ELASTICSEARCH_PASS` | `connections.default.user`, `.pass` and `connections.cloud.user`, `.pass` |
| `ELASTICSEARCH_API_KEY` | `connections.api.key` and `connections.cloud.api_key` |
| `ELASTICSEARCH_CLOUD_ID` | `connections.cloud.id` |
| `ELASTICSEARCH_INDEX_PREFIX` | `index_prefix` |

`config/elasticsearch.php` sets `'connection' => 'default'` with no environment variable, so an API key or a Cloud ID in `.env` is only used once the connection is switched to `api` or `cloud`. To switch it, choose the matching authentication type in the admin and leave its credential fields empty; the credentials still come from `.env`.
:::

`caBundle` (the CA certificate path for a cluster with its own certificate authority) and `retries` have no environment variable, so set them in `config/elasticsearch.php`, which belongs to your application. On a server that caches its configuration, run `php artisan config:cache` again after editing `.env`.

<a id="build-the-index"></a>

## Step 3: Build the Index

With the engine enabled, build every index:

```bash
php artisan indexer:index --type=search --mode=full
```

The command skips `search` unless an external engine is enabled, and does nothing for it without `--mode=full`. On Bagisto 2.4 the type is `elastic`. Run it again whenever what a document holds changes: after changing the index prefix (the store then reads new index names), switching an attribute to filterable, adding a customer group, renaming categories, and upgrading to Bagisto 2.5, whose documents added `category_name`.

After the first build, product saves and imports dispatch `IndexProducts` and `DeleteProducts` to the queue, so keep a worker running; see [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md#running-workers-in-production).

## Test It

1. List the product indices. There is one per channel and locale, named `{prefix}products_{channel}_{locale}_index`, with the channel and locale codes lowercased:

   ```bash
   curl --cacert /path/to/http_ca.crt -u elastic 'https://localhost:9200/_cat/indices/*products_*?v'
   ```

   `docs.count` for an index matches the number of products assigned to that channel.
2. Query one index directly:

   ```bash
   curl --cacert /path/to/http_ca.crt -u elastic 'https://localhost:9200/products_default_en_index/_search?q=name:shirt&size=1'
   ```

3. Open the admin's About page. When the tested values match the saved settings, its search section shows the connection test's verdict and the cluster version for five minutes.

## Troubleshooting

**Test Connection** reports one of these statuses:

| Message (status) | Cause |
|---|---|
| Elasticsearch is available (`available`) | The cluster answered; the response includes the host, cluster name and version |
| Elasticsearch did not answer (`unreachable`) | No node answered, the server returned an error, or the request failed for another reason. Check the host, the port and the network path from the application server |
| Elasticsearch rejected the credentials (`unauthorized`) | The server answered `401` or `403`. The credentials don't match the authentication type |
| The host answered but is not a supported Elasticsearch server (`incompatible`) | The client's product check failed: the host isn't Elasticsearch 8, or something else answers on that address |
| The Elasticsearch connection is not configured (`misconfigured`) | The client couldn't be built from the settings (an `InvalidArgumentException`), for example a missing connection or an unusable value |

Other problems:

| Problem | Fix |
|---|---|
| The storefront still searches the database | **Enable External Search Engine** is off, or **Storefront Search Mode** is set to **Database** |
| Products are missing from results | Run the full reindex; check the queue worker is running and the product is assigned to the channel |
| A filter on a new filterable attribute returns nothing | Documents only carry the attributes that were filterable when they were written; run the full reindex |
| `indexer:index --type=search` finishes instantly | The external engine is disabled, or `--mode=full` is missing |
| Indexing fails with an invalid index name | The index prefix contains uppercase letters; change it to lowercase and reindex |
| An upgraded store lost its connection | See the first item under [Things to Watch](#things-to-watch) |

## Things to Watch

- **Upgrading a store that keeps its credentials in `.env`.** After the Bagisto 2.5 migrations, a cluster behind credentials, an API key or a Cloud ID can become unreachable. Set the authentication type in the admin, re-enter the host and credentials, and test the connection; see [`UPGRADE.md`](https://github.com/bagisto/bagisto/blob/master/UPGRADE.md#elasticsearch-connection-settings-are-now-recorded-in-the-admin).
- **Secure the cluster.** Use `api_key` or `basic` authentication over HTTPS, and set `caBundle` when the cluster's certificate isn't signed by a public authority.
- **Give each environment its own index prefix.** Without one, staging and production on a shared cluster read and write the same `products_*` indices.
- **Don't index on the `sync` queue.** With `QUEUE_CONNECTION=sync` every product save waits for Elasticsearch.
- **Scheduled price changes don't reach the index.** A store that sorts or filters by price on Elasticsearch needs a full search reindex after the daily price and catalog rule reindexes; see [Search Engines](../advanced/search-engines.md#things-to-watch).
- **Restart long-running processes after changing the settings.** They're applied when the application boots, so run `php artisan queue:restart`, and `php artisan octane:reload` on [Octane](./configure-laravel-octane.md).

## Related Pages

- [Search Engines](../advanced/search-engines.md): how queries are routed, the document, the contracts and indexing.
- [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md): running the indexing jobs on a worker.
- [Configure Full Page Cache](./configure-fpc.md): caching the storefront pages that search results appear on.

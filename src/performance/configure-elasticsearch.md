# Configure Elasticsearch

Elasticsearch is a powerful distributed search and analytics engine that enhances Bagisto's search capabilities with fast, scalable product indexing and advanced search features.

::: info What You'll Learn
- How to install and verify Elasticsearch
- Configure Elasticsearch connections in Bagisto
- Index products for improved search performance
- Verify your Elasticsearch setup
:::

This guide covers configuring Elasticsearch for indexing products from your Bagisto database, enabling lightning-fast search functionality for your e-commerce store.

## Environment Setup

Before configuring Elasticsearch with Bagisto, ensure you have [Elasticsearch installed](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html) on your system.

::: warning Prerequisites
- Elasticsearch 8.x (the `elasticsearch/elasticsearch` client Bagisto requires is `^8.10`)
- PHP with the cURL extension
- Sufficient memory allocation (minimum 2GB for Elasticsearch)
:::

::: info Two ways to configure
On Bagisto 2.5 the connection is configured in the admin under **Configure → Search Engines**, with `.env` as a fallback. On Bagisto 2.4 the connection comes from `.env` and `config/elasticsearch.php` only, and the engine is chosen under **Configure → Catalog → Products → Search**. Both are covered below.
:::

### Verify Installation

Elasticsearch runs on port `9200` by default. Test your installation by visiting:

```text
http://localhost:9200
```

**Expected Response:**
```json
{
  "name" : "webkul-pc",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "suPotT8zQjCOlq9dteWKyQ",
  "version" : {
    "number" : "8.17.0",
    "build_flavor" : "default",
    "build_type" : "deb",
    "build_hash" : "2b6a7fed44faa321997703718f07ee0420804b41",
    "build_date" : "2024-12-11T12:08:05.663969764Z",
    "build_snapshot" : false,
    "lucene_version" : "9.12.0",
    "minimum_wire_compatibility_version" : "7.17.0",
    "minimum_index_compatibility_version" : "7.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

**Alternative CLI Check:**
```bash
curl -X GET 'http://localhost:9200'
```

## Configuration Setup

### From the admin (Bagisto 2.5)

Open **Configure → Search Engines**:

1. Under **General → Settings**, switch on **Enable External Search Engine** and choose **Elasticsearch** as the default engine.
2. Under **General → Products**, leave **Admin Search Mode** and **Storefront Search Mode** on **Use Default**, or pick a different engine per context.
3. Under **Elasticsearch → Settings**, pick an authentication type and fill in what it needs:

| Authentication | Fields |
|---|---|
| No authentication | Hosts |
| Username and password | Hosts, Username, Password |
| API key | Hosts, API Key |
| Elastic Cloud with API key | Cloud ID, API Key |
| Elastic Cloud with username and password | Cloud ID, Username, Password |

**Hosts** takes one or more comma-separated URLs such as `http://localhost:9200`. **Index Prefix** is prepended to every index name so several stores can share one cluster. **Min** and **Max Query Length** bound what is sent to the cluster. Any field left empty falls back to the matching `.env` variable below.

4. Click **Test Connection**. The page reports `available` with the host, version and cluster name, or one of `unreachable`, `unauthorized`, `incompatible` (the host answered but is not an Elasticsearch server) or `misconfigured`. The verdict is cached for five minutes and shown again on the About page.

Behind this screen sits `Webkul\Product\Services\Search\SearchEngineManager`, described on [Search Engines](../advanced/search-engines.md).

### From the environment file

Bagisto reads `config/elasticsearch.php`, which is populated from `.env`. On Bagisto 2.5 the admin settings above are copied over these at boot when they are filled in; on Bagisto 2.4 this is the only configuration.

::: code-group

```php [config/elasticsearch.php]
<?php

// config/elasticsearch.php

return [
    /**
     * Here you can specify the connection to use when building a client.
     */
    'connection' => 'default',

    /**
     * These are the available connections parameters that you can use to connect
     */
    'connections' => [
        'default' => [
            'hosts' => [
                env('ELASTICSEARCH_HOST', 'http://localhost:9200'),
            ],

            'user' => env('ELASTICSEARCH_USER', null),
            'pass' => env('ELASTICSEARCH_PASS', null),
        ],

        /**
         * You can connect with API key authentication by setting the `api` key
         * instead of the `user` and `pass` keys.
         */
        'api' => [
            'hosts' => [
                env('ELASTICSEARCH_HOST', null),
            ],

            'key' => env('ELASTICSEARCH_API_KEY', null),
        ],

        /**
         * You can connect to Elastic Cloud with the Cloud ID using the `cloud` key.
         */
        'cloud' => [
            'id' => env('ELASTICSEARCH_CLOUD_ID', null),

            /**
             * If you are authenticating with API KEY then set user and pass as null
             */
            'api_key' => env('ELASTICSEARCH_API_KEY', null),

            /**
             * If you are authenticating with username and password then set api_key as null
             */
            'user' => env('ELASTICSEARCH_USER', null),
            'pass' => env('ELASTICSEARCH_PASS', null),
        ],
    ],

    /**
     * CA Bundle
     *
     * If you have the http_ca.crt certificate copied during the start of Elasticsearch
     * then the path here
     *
     * @see https://www.elastic.co/guide/en/elasticsearch/client/php-api/current/connecting.html#auth-http
     */
    'caBundle' => null,

    /**
     * Retries
     *
     * By default, the client will retry n times, where n = number of nodes in
     * your cluster. If you would like to disable retries, or change the number,
     * you can do so here.
     *
     * @see https://www.elastic.co/guide/en/elasticsearch/client/php-api/current/set-retries.html
     */
    'retries' => null,
];
```

```properties [.env Configuration]
# Basic Elasticsearch Configuration
ELASTICSEARCH_HOST=http://localhost:9200
ELASTICSEARCH_USER=
ELASTICSEARCH_PASS=

# For API Key Authentication
ELASTICSEARCH_API_KEY=your_api_key_here

# For Elasticsearch Cloud
ELASTICSEARCH_CLOUD_ID=your_cloud_id

# Optional prefix shared by every index this store creates
ELASTICSEARCH_INDEX_PREFIX=
```

:::

None of these keys is present in `.env.example`; add the ones you need.

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `hosts` | Elasticsearch server endpoints | `http://localhost:9200` |
| `user/pass` | Basic authentication credentials | `null` |
| `api_key` | API key for authentication | `null` |
| `cloud.id` | Elasticsearch Cloud identifier | `null` |
| `index_prefix` | Prefix for every index name | `''` |
| `caBundle` | SSL certificate bundle path | `null` |
| `retries` | Connection retry attempts | Auto (node count) |

::: tip Authentication Methods
Choose one authentication method:
- **None**: For local development
- **Basic Auth**: Username/password
- **API Key**: Recommended for production
- **Cloud**: For Elasticsearch Service
:::

### Apply Configuration

After updating your `.env` file, clear cache configuration:

```bash
php artisan optimize:clear
```

## Indexing Products

Once configured, Bagisto automatically indexes new products when they're created. For existing products, manual indexing is required.

### Index Existing Products

Run the indexer command in full mode to build the search index:

```bash
php artisan indexer:index --type=search --mode=full
```

On Bagisto 2.4 the type is `elastic`:

```bash
php artisan indexer:index --type=elastic --mode=full
```

The search indexer runs only when an external engine is enabled (Bagisto 2.5) or the engine setting is `elastic` (2.4), so enable the engine first.

::: warning Queue Driver Configuration
If your `QUEUE_CONNECTION` in `.env` is set to `database`, `redis`, or any driver other than `sync`, you must run the queue worker to process indexing jobs:

```bash
php artisan queue:listen
```

Without the queue worker running, products will not be indexed properly.
:::

::: details What happens during indexing?
- Products are read in batches of 100 from the `products` table
- Each product becomes one document per channel and locale, in an index named `{prefix}products_{channel}_{locale}_index`, carrying its attribute values, prices and category names
- Documents are bulk-inserted into the search index
- Search capabilities become available immediately
:::

### Automatic Indexing

New products are automatically indexed when:
- Products are created or updated via admin panel
- Products are imported through Data Transfer
- A variant is deleted (the parent is reindexed) or a product is deleted (it is removed from the index)

::: warning Performance Note
Large product catalogs may take several minutes to index. Consider running indexing during off-peak hours for production stores.
:::

## Verification

### Check Index Status

Verify your products have been indexed successfully:

**Browser Method:**
```text
http://localhost:9200/_cat/indices?v
```

**CLI Method:**
```bash
curl -X GET 'http://localhost:9200/_cat/indices?v'
```

**Expected Output:**
```text
health status index                        uuid                   pri rep docs.count docs.deleted store.size pri.store.size
yellow open   products_default_en_index    AbcDef1234567890       1   1      1500           0      2.5mb          2.5mb
```

### Search Test

Enable Elasticsearch in your Bagisto admin panel and test frontend search:

**Admin Configuration (Bagisto 2.5):**
1. Go to **Configure → Search Engines → General**
2. Switch on **Enable External Search Engine** and set **Default Search Engine** to **Elasticsearch**
3. Save the configuration

**Admin Configuration (Bagisto 2.4):**
1. Go to **Configure → Catalog → Products → Search**
2. Set **Search Engine**, **Admin Search Mode** and **Storefront Search Mode** to **Elasticsearch**
3. Save the configuration

**Frontend Testing:**
- Visit your store's frontend
- Use the search functionality to look for products
- Results should appear faster with improved relevance

**Alternative CLI Test:**
```bash
curl -X GET "localhost:9200/products_default_en_index/_search?q=name:sample"
```

::: tip Success Indicators
- ✅ Index appears in the indices list
- ✅ `docs.count` matches your product count
- ✅ Admin panel search settings saved successfully
- ✅ Frontend search returns faster, more relevant results
:::

## Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| Connection refused | Check if Elasticsearch is running on port 9200; use **Test Connection** on the Search Engines page |
| `unauthorized` from Test Connection | The credentials do not match the chosen authentication type |
| `incompatible` from Test Connection | The host answered but is not an Elasticsearch 8.x server |
| Memory errors | Increase Elasticsearch heap size |
| Missing products | Re-run `php artisan indexer:index --type=search --mode=full` |
| Search still hits the database | The **Enable External Search Engine** switch is off, or the context's search mode overrides the default |

### Performance Tips

- **Memory**: Allocate at least 2GB RAM to Elasticsearch
- **Storage**: Use SSD storage for better performance  
- **Network**: Keep Elasticsearch on the same server as Bagisto
- **Monitoring**: Use Elasticsearch monitoring tools in production

::: warning Production Considerations
- Enable authentication in production environments
- Configure SSL/TLS for secure connections
- Set up regular backup and monitoring
- Consider using Elasticsearch Service for managed hosting
:::

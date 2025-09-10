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
- Elasticsearch 7.0+ (recommended: 8.x)
- PHP 8.2+ with cURL extension
- Sufficient memory allocation (minimum 2GB for Elasticsearch)
:::

### Verify Installation

Elasticsearch runs on port `9200` by default. Test your installation by visiting:

```
http://localhost:9200
```

**Expected Response:**
```json
{
  "name" : "webkul-pc",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "suPotT8zQjCOlq9dteWKyQ",
  "version" : {
    "number" : "8.6.2",
    "build_flavor" : "default",
    "build_type" : "deb",
    "build_hash" : "2d58d0f136141f03239816a4e360a8d17b6d8f29",
    "build_date" : "2023-02-13T09:35:20.314882762Z",
    "build_snapshot" : false,
    "lucene_version" : "9.4.2",
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

Configure Elasticsearch connections in your Bagisto application using the `config/elasticsearch.php` file.

::: code-group

```php [Bagisto 2.1.0+]
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

```env [.env Configuration]
# Basic Elasticsearch Configuration
ELASTICSEARCH_HOST=http://localhost:9200
ELASTICSEARCH_USER=
ELASTICSEARCH_PASS=

# For API Key Authentication
ELASTICSEARCH_API_KEY=your_api_key_here

# For Elasticsearch Cloud
ELASTICSEARCH_CLOUD_ID=your_cloud_id
```

```php [Bagisto 2.0.0]
// config/elasticsearch.php
'hosts' => [
    [
        'host' => env('ELASTICSEARCH_HOST', 'localhost'),
        'port' => env('ELASTICSEARCH_PORT', 9200),
    ]
]
```

```env [.env for 2.0.0]
ELASTICSEARCH_PORT=9200
ELASTICSEARCH_HOST=localhost
```

:::

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `hosts` | Elasticsearch server endpoints | `http://localhost:9200` |
| `user/pass` | Basic authentication credentials | `null` |
| `api_key` | API key for authentication | `null` |
| `cloud.id` | Elasticsearch Cloud identifier | `null` |
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

Run the indexer command to process all existing products:

```bash
php artisan indexer:index
```

::: warning Queue Driver Configuration
If your `QUEUE_CONNECTION` in `.env` is set to `database`, `redis`, or any driver other than `sync`, you must run the queue worker to process indexing jobs:

```bash
php artisan queue:listen
```

Without the queue worker running, products will not be indexed properly.
:::

::: details What happens during indexing?
- Products are read from the `products` table
- Data is transformed into Elasticsearch-compatible format
- Documents are bulk-inserted into the search index
- Search capabilities become available immediately
:::

### Automatic Indexing

New products are automatically indexed when:
- Products are created via admin panel
- Products are imported via CSV
- Product data is updated through API

::: warning Performance Note
Large product catalogs may take several minutes to index. Consider running indexing during off-peak hours for production stores.
:::

## Verification

### Check Index Status

Verify your products have been indexed successfully:

**Browser Method:**
```
http://localhost:9200/_cat/indices?v
```

**CLI Method:**
```bash
curl -X GET 'http://localhost:9200/_cat/indices?v'
```

**Expected Output:**
```
health status index    uuid                   pri rep docs.count docs.deleted store.size pri.store.size
yellow open   products AbcDef1234567890       1   1      1500           0      2.5mb          2.5mb
```

### Search Test

Configure Elasticsearch in your Bagisto admin panel and test frontend search:

**Admin Configuration:**
1. Go to **Admin Panel → Configuration → Catalog → Products**
2. Set the following options to **Elasticsearch**:
   - **Search Engine**
   - **Admin Search Mode** 
   - **Storefront Search Mode**
3. Save the configuration

**Frontend Testing:**
- Visit your store's frontend
- Use the search functionality to look for products
- Results should appear faster with improved relevance

**Alternative CLI Test:**
```bash
curl -X GET "localhost:9200/products/_search?q=product_name:sample"
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
| Connection refused | Check if Elasticsearch is running on port 9200 |
| Memory errors | Increase Elasticsearch heap size |
| Slow indexing | Reduce batch size in indexer configuration |
| Missing products | Re-run `php artisan indexer:index` |

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

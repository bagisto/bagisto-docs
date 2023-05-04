# Elasticsearch Configuration

[[TOC]]

In this section, we will explain the indexing of products from the database to the Elasticsearch engine.

## Setting up environment

- To continue with this make sure you have [Elasticseach](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html) installed on your system. By default, Elasticsearch uses the **`9200`** port. So, we are using the same port.

- Just hit this route **`http://localhost:9200`**, if you see the like below then Elasticsearch is successfully installed on your system,

  ::: details Output
  ```
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
  :::

  ::: tip

  If you want to use curl, you can hit this command,

  ~~~sh
  curl -X GET 'http://localhost:9200'
  ~~~
  :::

- You can use [Kibana](https://www.elastic.co/kibana/) for visualization also, but in this section, we are using only the Elasticsearch engine.

## Setting up config

The most simple way to set up your environment is by just setting the key in the **`.env`** file.

- Now, open the **`.env`** file in your project and this line,

  ~~~env
  ELASTICSEARCH_PORT=9200
  ELASTICSEARCH_HOST=localhost
  ~~~

- After that run below the command.
 
  ```sh
  php artisan config:cache
  ```

- Done! Now you are all set to index your products.

  ::: tip

  If still it is not working, then you can directly set your config in file i.e. **`config/elasticsearch.php`**

    ~~~php
    ...
    'hosts' => [
        [
            'host'              => env('ELASTICSEARCH_HOST', 'localhost'),
            'port'              => env('ELASTICSEARCH_PORT', 9200),
            ...
        ]
    ]
    ...
    ~~~
  :::

## Indexing

Now, after setting up the environment and config, your product gets automatically indexed when you create a new one.

If you want to index the existing products, then you need to run the below command,

~~~sh
php artisan indexer:index
~~~

This command will index all your data from **`product_flat`** table to Elasticsearch index.

## Checking index

Now, let's check our imported index in the Elasticsearch by hitting this URL `http://localhost:9200/_cat/indices?v`,

  ::: details Output
  ![Product Index Info](../../assets/1.5.x/images/advanced-topics/product-index.png)
  :::

::: tip

If you want to use curl, you can hit this command,

~~~sh
curl -X GET 'http://localhost:9200/_cat/indices?v'
~~~

:::

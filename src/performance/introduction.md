# Introduction

This section sets Bagisto up for production: its caches, search, and what changes on more than one server or a long-running PHP server. The pages under **Digging Deeper** explain how each mechanism works. The guides here configure it, each in the same order: when you need it, the setup steps, how to test it, and what to watch.

## What Bagisto Does Out of the Box

| Layer | Shipped default | Guide |
|---|---|---|
| Full page cache | On, for guest storefront pages, stored in the `file` cache store | [Configure Full Page Cache](./configure-fpc.md) |
| Application and repository cache | The `database` store; six core repositories cache their reads | [Cache Strategy](../advanced/cache-strategy.md) |
| Catalog API cache | Guest product and category API responses, for an hour | [Cache Strategy](../advanced/cache-strategy.md#catalog-api-cache) |
| Product search | The database | [Configure Elasticsearch](./configure-elasticsearch.md) |
| Queue | `sync` in `.env.example`: jobs run inside the request | [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md) |
| Media | The local `public` disk | [File Storage](../advanced/file-storage.md) |
| Resized images | Resized on every request, sent with a 30-day `Cache-Control` header | [Cache Strategy](../advanced/cache-strategy.md#image-cache) |

## Tuning Checklist

1. **Move the queue off `sync`** so mail, index updates and imports leave the request.
2. **Put the caches and sessions on Redis** when the database is under load, and give the [full page cache a store of its own](./configure-fpc.md#choose-where-pages-are-stored).
3. **[Use Elasticsearch](./configure-elasticsearch.md)** when database search is too slow for the catalog, and give each environment its own index prefix.
4. **[Serve media from Amazon S3 or Cloudflare R2](../advanced/file-storage.md)**, and put a CDN or reverse proxy in front of `/cache/` so resized images aren't generated for every visitor.

Workers, the scheduler and framework caches are part of every deployment; see [Deployment](../getting-started/deployment.md#production-checklist).

## Pages in This Section

- **[Configure Elasticsearch](./configure-elasticsearch.md)**: connecting a cluster, building the product index, and troubleshooting the connection.
- **[Configure Full Page Cache](./configure-fpc.md)**: the switch and lifetime, a store of its own, checking for cache hits, and clearing.
- **[Configure Varnish](./configure-varnish.md)**: the separate `bagisto/bagisto-varnish` package, which replaces the built-in page cache; read its warning about signed-in pages first.
- **[Configure Laravel Octane](./configure-laravel-octane.md)**: running Bagisto on FrankenPHP, RoadRunner or Swoole, and the state that outlives a request.
- **[Configure Load Balancing](./configure-load-balancing.md)**: what several web servers must share, deploying to them, and an example on AWS.

Test each change on a staging copy of the store with production-like data before rolling it out. Don't use a web server page cache such as Nginx's FastCGI cache; [Configure Full Page Cache](./configure-fpc.md#things-to-watch) explains why.

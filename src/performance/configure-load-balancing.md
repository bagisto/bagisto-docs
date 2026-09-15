# Configure Load Balancing

Bagisto runs on several web servers behind a load balancer when every server shares the state a request can touch: the database, sessions, caches, maintenance mode, queued jobs, files and the search cluster. This page sets up each of those, then deploys, checks the result and outlines the same setup on AWS.

## When You Need It

Use it when one web server is no longer enough, or when the store must keep running if a server fails. This is what the servers must share, with the shipped default and what to use instead:

| Concern | Shipped default | On more than one server |
|---|---|---|
| Database | `DB_HOST` in `.env` | One database server or managed database that every web server connects to |
| Sessions | `SESSION_DRIVER=database` | `database` or `redis`, never `file` |
| Application and repository cache | `CACHE_STORE=database` | `database` or `redis`, never `file` |
| Full page cache | `RESPONSE_CACHE_DRIVER=file` | A shared Redis store of its own |
| Maintenance mode | `APP_MAINTENANCE_DRIVER=file` | `cache`, with `APP_MAINTENANCE_STORE` set to a shared store |
| Queue | `QUEUE_CONNECTION=sync` | `database` or `redis`, with workers |
| Scheduler | None | `schedule:run` on exactly one server |
| Media on the default disk | The `public` disk, `storage/app/public` | Amazon S3 or Cloudflare R2, or a shared volume |
| Files on the local disks | `storage/app/private` and `storage/app/public` | A shared volume |
| Search | The database | One Elasticsearch cluster |

## Step 1: Share Sessions and Caches

Point every server at the same database, and keep sessions and the application cache in the shared database or Redis. Any server can then handle any request, so sticky sessions on the load balancer are optional.

The application cache holds the repository cache's reads and generation tokens, the catalog API responses and their version, the search engine's last connection verdict and the `queue:restart` signal. With a `file` store, a configuration saved on one server bumps the repository cache token on that server only, and the others keep serving the old values until their cached reads expire.

The full page cache defaults to a `file` store too, and its listeners run on the server that handled the change. Give it a shared store of its own; see [Configure Full Page Cache](./configure-fpc.md#choose-where-pages-are-stored).

## Step 2: Share Maintenance Mode

Laravel's maintenance mode is a file on each server by default, so `php artisan down`, `php artisan up` and saving a channel reach only the server that ran them. Saving a channel in the admin switches maintenance mode on or off for the whole application from that channel's maintenance setting (`Webkul\Admin\Http\Controllers\Settings\ChannelController`). Store it in a cache instead:

```properties
APP_MAINTENANCE_DRIVER=cache
APP_MAINTENANCE_STORE=database
```

The flag is kept under `illuminate:foundation:down` in that store, or in the default cache store when `APP_MAINTENANCE_STORE` is empty. `php artisan cache:clear`, `optimize:clear` and **Clear All Cache** flush the default cache store, so they lift maintenance mode when it's kept in the same store. Point `APP_MAINTENANCE_STORE` at a different shared store, such as `database` when `CACHE_STORE=redis`.

The admin stays reachable in maintenance mode: `Webkul\Core\Http\Middleware\PreventRequestsDuringMaintenance` lets requests under the admin URL through.

<a id="queue-and-scheduler"></a>

## Step 3: Run the Queue and the Scheduler

Workers pull jobs from the shared queue, so they can run on any server, or on servers of their own. Run them with `--queue=default,broadcastable`, as described in [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md#running-workers-in-production).

Run the scheduler's cron entry on one server only. Bagisto registers its tasks without `onOneServer()`, so a cron entry on every server runs `invoice:cron`, `campaign:process` and the other tasks once per server.

<a id="files"></a>

## Step 4: Share Files

Product, category and theme media go to the default disk. Switch it to Amazon S3 or Cloudflare R2 before adding servers; see [File Storage](../advanced/file-storage.md). Files already uploaded aren't moved for you.

Some files stay on a local disk whatever the default is, so share those directories between servers:

- **`storage/app/private`**: import files, validation fragments, downloaded import images, import error reports and downloadable product link files. Import jobs read their files by path on the server whose worker runs them.
- **`storage/app/public`**: generated sitemaps, which `Webkul\Sitemap\Jobs\ProcessSitemap` writes to the `public` disk. `SitemapController` lists the files on its own server and links them under `/storage/`, so share the directory and run `php artisan storage:link` on every server, even when media are on S3 or R2.

## Step 5: Set Up the Servers Behind the Load Balancer

- **HTTPS.** `bootstrap/app.php` calls `$middleware->trustProxies(at: '*')`, so Bagisto trusts the `X-Forwarded-*` headers from any address and builds `https://` URLs when the load balancer terminates TLS. Because any address is trusted, let only the load balancer reach the web servers.
- **`APP_URL` and `APP_KEY`.** Set `APP_URL` to the public HTTPS address, and use the same `APP_KEY` on every server, or sessions and encrypted values from one server can't be read on another.
- **Health checks.** `bootstrap/app.php` registers Laravel's health route at `/up`. It carries no route middleware, answers `200` whenever the application boots, even in maintenance mode, and doesn't check the database, cache or queue. Point the load balancer's health check at it rather than at the home page, which the full page cache may answer.

## Step 6: Deploy to Every Server

1. Put the store into maintenance mode once with `php artisan down`.
2. Put the same code, `vendor` directory and built theme assets on every server.
3. Run `php artisan migrate --force` once, from one server.
4. Run `php artisan optimize` on every server, since the configuration, route, event and view caches are files.
5. Run `php artisan queue:restart` once. The restart signal is stored in the shared cache, so every worker picks it up.
6. On [Octane](./configure-laravel-octane.md), run `php artisan octane:reload` on every server.
7. Bring the store back once with `php artisan up`.

## Test It

1. Run `php artisan about` on each server, and confirm the session, cache and queue drivers are the shared ones and that `public/storage` is linked.
2. Request `/up` on each server; it answers `200`.
3. Save a product in the admin, then request its page as a guest through the load balancer several times. Every response shows the change, whichever server answers.

## Example on AWS

The same layout with AWS services:

1. **Database.** Create an Amazon RDS instance running MySQL 8.0, MariaDB 10.11 or PostgreSQL 16, in private subnets, with a security group that admits the web servers only. Set `DB_HOST` to its endpoint.
2. **Redis.** Create an Amazon ElastiCache cluster with a Redis-compatible engine for sessions, the caches and the queue.
3. **Media.** Create an S3 bucket and credentials that can read and write it. Enter them in the Amazon S3 settings of the **File Management** configuration section, fill in the bucket's public or CDN URL, and choose Amazon S3 as the default driver in its **General** settings.
4. **Shared directories.** Create an Amazon EFS file system and mount it on every web server for `storage/app/private` and `storage/app/public`.
5. **Web servers.** Install Bagisto on one EC2 instance, create a launch template from it, and run it in an Auto Scaling group across at least two Availability Zones.
6. **Target group.** Create a target group for the instances on the web server's port, with `/up` as the health check path.
7. **Load balancer.** Create an internet-facing Application Load Balancer with an HTTPS listener on port 443 that uses a certificate from AWS Certificate Manager and forwards to the target group, and an HTTP listener on port 80 that redirects to HTTPS.
8. **DNS.** Point the store's domain at the load balancer's DNS name.
9. **Background work.** Run the scheduler's cron entry on one instance, and queue workers on the web servers or on instances of their own.

## Things to Watch

- **One cron entry.** A second server running the scheduler duplicates every scheduled task.
- **Per-server state.** Any `file` store for sessions, the application cache, the page cache or maintenance mode serves stale or missing data from the other servers.
- **Local directories.** An import started on one server fails on a worker that can't see its file, and a sitemap is only listed by the server that wrote it, unless `storage/app` is shared.
- **Cache Management actions** such as **Rebuild All Cache** write the framework cache files of the server that handled the click only.

## Related Pages

- [Configure Full Page Cache](./configure-fpc.md): a shared store for the page cache.
- [Queues, Jobs and Scheduling](../advanced/queue-jobs-scheduling.md): workers and the scheduler.
- [File Storage](../advanced/file-storage.md): moving media to Amazon S3 or Cloudflare R2.
- [Configure Laravel Octane](./configure-laravel-octane.md): long-running workers on each server.

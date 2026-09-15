# REST API

The REST API of `bagisto/bagisto-api` serves JSON on two surfaces: the Shop API under `/api/shop` and the Admin API under `/api/admin`. It is built from the same API Platform resources as the [GraphQL API](./graphql-api.md), so only the request style differs. Every path, body and response is in the reference at [api-docs.bagisto.com](https://api-docs.bagisto.com/api/rest-api/introduction).

## Prerequisites

Install the package as described in [Installation](./installation.md), and use the key the installer saved as `STOREFRONT_PLAYGROUND_KEY` in `.env`, or one you issued. The examples use `https://your-domain.com` for your store and `pk_storefront_xxxxxxxxxxxxx` for the key.

## Your First Request

A catalog call needs only the storefront key:

```bash
curl "https://your-domain.com/api/shop/products?per_page=2" \
  -H "Accept: application/json" \
  -H "X-STOREFRONT-KEY: pk_storefront_xxxxxxxxxxxxx"
```

The body is a JSON array of products.

## Calls for a Customer

Sign the customer in:

```bash
curl -X POST "https://your-domain.com/api/shop/customer/login" \
  -H "Content-Type: application/json" \
  -H "X-STOREFRONT-KEY: pk_storefront_xxxxxxxxxxxxx" \
  -d '{"email": "john@example.com", "password": "SecurePass@123"}'
```

Send the `token` from the response as a Bearer token, together with the storefront key:

```bash
curl "https://your-domain.com/api/shop/customer-addresses" \
  -H "Accept: application/json" \
  -H "X-STOREFRONT-KEY: pk_storefront_xxxxxxxxxxxxx" \
  -H "Authorization: Bearer 3627|DfkAK11F8qdqtaFVJPvBxlJyNbCSMNl8TFWhWm4G"
```

The sign-in response also has an `apiToken` field, kept for older clients; it doesn't authenticate. There is no refresh token, so when a customer call returns `401`, sign in again.

A guest shops without an account by sending a cart token as the Bearer instead. `POST /api/shop/cart-tokens` creates the cart and returns the token.

## Calls to the Admin API

Admin calls carry an Integration token and no storefront key:

```bash
curl "https://your-domain.com/api/admin/catalog/products?per_page=10" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer <id>|<token>"
```

Admin listings wrap their rows as `{ "data": [...], "meta": {...} }`, with the paging in `meta` (`currentPage`, `perPage`, `lastPage`, `total`). A call that the token's admin role doesn't allow returns `403`.

## Paging and Rate Limits

Ask for a page with `?page=` and `?per_page=`. On Shop listings, `per_page` defaults to `10`, or `30` on `/api/shop/products`, and any value above `50` is treated as `50`. Shop listings report paging in headers:

| Header | Value |
|---|---|
| `X-Total-Count` | Items across all pages |
| `X-Page` | The page returned |
| `X-Per-Page` | Items per page |
| `X-Total-Pages` | Number of pages |

Shop responses also carry rate-limit headers. `X-RateLimit-Remaining` is how many requests the key has left in its current hour, and `X-RateLimit-Reset` is the number of seconds until that hour ends. `X-RateLimit-Limit` reports `STOREFRONT_DEFAULT_RATE_LIMIT`, which isn't necessarily the key's own limit.

## Errors

| Status | Usual cause |
|---|---|
| `401` with `"error": "missing_key"` | A Shop call without `X-STOREFRONT-KEY` |
| `403` with `"error": "invalid_key"` | A wrong, inactive or expired storefront key |
| `401` | A missing or invalid customer, cart or Integration token |
| `403` | The token isn't allowed to act on this resource |
| `404` | The resource doesn't exist, or isn't the caller's |
| `409` | A checkout step taken out of order, or an empty cart |
| `422` | Validation failed, or there isn't enough stock |
| `429` | The rate limit is used up |

Branch on the status, not on the message, which is translated and can change. [Status Codes](https://api-docs.bagisto.com/api/errors) in the reference has the full list.

## Calling It from PHP

Another Laravel application calls the API with Laravel's HTTP client. Keep the store URL and the key in that application's own configuration, for example under `services.bagisto`:

```php
use Illuminate\Support\Facades\Http;

$response = Http::acceptJson()
    ->withHeaders([
        'X-STOREFRONT-KEY' => config('services.bagisto.storefront_key'),
    ])
    ->get(config('services.bagisto.url').'/api/shop/products', [
        'per_page' => 10,
    ])
    ->throw();

$products = $response->json();

$totalPages = (int) $response->header('X-Total-Pages');
```

`throw()` turns a `4xx` or `5xx` response into an `Illuminate\Http\Client\RequestException`.

## Store Context Headers

| Header | Selects | When omitted or unknown |
|---|---|---|
| `X-LOCALE` | Locale of translated fields | The channel's default locale |
| `X-CURRENCY` | Currency of prices | The channel's base currency |
| `X-CHANNEL` | Sales channel | The default channel |

A value the store doesn't have isn't an error: the API quietly uses the default. Locale and currency codes are compared exactly, so a code in a different case than the store defines also falls back to the default.

The package's `Webkul\BagistoApi\Http\Middleware\SetLocaleChannel` middleware applies these headers, from the `routes.middleware` and `graphql.middleware` lists in `config/api-platform.php`. In v2.4.4, the copy the installer publishes on a Composer install leaves the middleware out of both lists. If the headers have no effect, add the class to both lists and run `php artisan bagisto-api-platform:optimize`.

## Exploring the API on Your Store

Swagger UI at `/api/shop` and `/api/admin` lists every operation with a **Try it out** button. On the Shop page the storefront key is a header field on each operation, unless `API_PLAYGROUND_AUTO_INJECT_STOREFRONT_KEY` fills it in. On the Admin page the Integration token goes in **Authorize**.

The OpenAPI documents behind those pages are at `/api/shop/docs` and `/api/admin/docs`. Import one into Postman or a client generator, or write both to files:

```bash
php artisan bagisto-api-platform:export-schema --transport=rest --path=storage/api-schema
```

The package repository also ships ready-made Postman collections in its `collections/` directory.

## Things to Watch

- **Uploads are REST only.** Product images, import files and other binary uploads go through REST multipart requests; the matching GraphQL mutations refuse them.
- **The storefront key is public.** A few writes accept the key alone: the contact form, newsletter subscription, customer registration and cart creation. Put your own abuse protection in front of a client that exposes them.
- **Integration tokens stay on a server.** They carry an admin's permissions.
- **Null fields are included.** A field without a value comes back as `null` rather than being left out.

## Next Step

Query the same data with the [GraphQL API](./graphql-api.md). The reference covers [Authentication](https://api-docs.bagisto.com/api/authentication), [Pagination](https://api-docs.bagisto.com/api/pagination) and the [Swagger UI playground](https://api-docs.bagisto.com/api/rest-api/playground) in more depth.

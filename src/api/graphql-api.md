# GraphQL API

The GraphQL API of `bagisto/bagisto-api` has two endpoints with separate schemas: the Shop schema at `POST /api/graphql` and the Admin schema at `POST /api/admin/graphql`. Both are built from the same API Platform resources, providers and processors as the [REST API](./rest-api.md), so the data and the business rules are the same. Every query and mutation, with its arguments and result fields, is in the reference at [api-docs.bagisto.com](https://api-docs.bagisto.com/api/graphql-api/introduction).

## Prerequisites

Install the package as described in [Installation](./installation.md), and use the key the installer saved as `STOREFRONT_PLAYGROUND_KEY` in `.env`, or one you issued. GraphQL uses the same credentials as REST.

## Your First Query

```bash
curl -X POST "https://your-domain.com/api/graphql" \
  -H "Content-Type: application/json" \
  -H "X-STOREFRONT-KEY: pk_storefront_xxxxxxxxxxxxx" \
  -d '{"query": "query { products(first: 2) { edges { node { _id sku name formattedPrice } } } }"}'
```

The response nests each product under `edges` and `node`:

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "_id": 1,
            "sku": "COASTALBREEZEMENSHOODIE",
            "name": "Coastal Breeze Men's Blue Zipper Hoodie",
            "formattedPrice": "$100.00"
          }
        }
      ]
    }
  }
}
```

## Queries for a Customer

Sign the customer in with the `createCustomerLogin` mutation and select the `token`:

```graphql
mutation {
  createCustomerLogin(
    input: {
      email: "customer@example.com"
      password: "password123"
    }
  ) {
    customerLogin {
      token
      success
      message
    }
  }
}
```

Send the token as `Authorization: Bearer <token>`, together with `X-STOREFRONT-KEY`, on operations that act for a customer. A guest uses a cart token the same way, and `createCartToken` returns one:

```graphql
mutation {
  createCartToken(input: {}) {
    cartToken {
      cartToken
    }
  }
}
```

## Queries to the Admin Schema

The Admin endpoint takes an Integration token and no storefront key. `readAdminProfile` is a quick check that a token works:

```bash
curl -X POST "https://your-domain.com/api/admin/graphql" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <id>|<token>" \
  -d '{"query": "query { readAdminProfile { name email roleName } }"}'
```

## Paging and Rate Limits

Lists are cursor connections. Select items through `edges { node { ... } }`, page with `first` and `after`, and read `pageInfo { hasNextPage endCursor }`. Unlike REST's `per_page`, `first` isn't capped on `products`, so ask for the page size your screen renders.

Shop responses carry `X-RateLimit-Limit`, `X-RateLimit-Remaining` and `X-RateLimit-Reset` for the key's hourly window, as on REST; here `X-RateLimit-Limit` is the key's own limit.

## Errors

A failed operation usually returns HTTP `200` with a `null` field and a message in `errors`, and a response can succeed in part, so check `errors` even when `data` is present.

A Shop operation sent without the storefront key returns no data, and the response names the problem:

```json
{
  "message": "X-STOREFRONT-KEY header is required for this operation",
  "error": "missing_key",
  "header_name": "X-STOREFRONT-KEY",
  "key_type": "shop",
  "errors": [
    {
      "message": "X-STOREFRONT-KEY header is required for this operation",
      "extensions": {
        "code": "UNAUTHENTICATED"
      }
    }
  ]
}
```

## How the Schema Behaves

- **Nodes have two identifiers.** `id` is an IRI string, such as `/api/admin/admin_profiles/4`, and `_id` is the number. Store `_id`, and pass `id` to operations that ask for it.
- **Action mutations return result fields.** Adding to the cart, applying a coupon or placing an order returns fields such as `success`, `message` or `orderId` rather than a node. Select the fields the mutation's reference page lists.
- **Inputs are camelCase** and go inside `input: { ... }`.
- **Files can't be uploaded.** Binary uploads go through the REST endpoints.
- **The store context headers apply here too.** `X-LOCALE`, `X-CURRENCY` and `X-CHANNEL` work on the Shop schema, including the middleware check for Composer installs; see [Store Context Headers](./rest-api.md#store-context-headers).

## Exploring the Schema

GraphiQL runs at `/api/graphiql` for the Shop schema and at `/api/admin/graphiql` for the Admin schema. Introspection queries run without the storefront key, so the Docs panel and autocomplete work before you enter one; executing an operation needs it.

To keep the schemas as files, for code generation or review, export them as SDL:

```bash
php artisan bagisto-api-platform:export-schema --transport=graphql --path=storage/api-schema
```

## Things to Watch

- **The two schemas are separate.** Admin fields such as `adminCatalogProducts` don't exist on `/api/graphql`, and Shop fields such as `products` don't exist on `/api/admin/graphql`.
- **Query size is limited.** `config/api-platform.php` sets `graphql.max_query_complexity` to `400` and `graphql.max_query_depth` to `20`.
- **This isn't the older `bagisto/graphql-api` package.** That package, for Bagisto 2.3, used Lighthouse, JWT tokens and a `/graphql` endpoint, and its setup moved the session middleware in `bootstrap/app.php`. None of that applies to `bagisto/bagisto-api`, and its operation names are different.

## Next Step

Look up the operation you need in the [GraphQL reference](https://api-docs.bagisto.com/api/graphql-api/introduction), which also covers the [GraphiQL playground](https://api-docs.bagisto.com/api/graphql-api/playground), [cursor pagination](https://api-docs.bagisto.com/api/graphql-api/pagination) and [identifiers](https://api-docs.bagisto.com/api/graphql-api/identifiers) in more depth. For AI agents that act in the shopper's browser rather than through the API, see [WebMCP](../ai/webmcp.md).

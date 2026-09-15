# Introduction

Bagisto's REST and GraphQL APIs come from one Composer package, `bagisto/bagisto-api`, built on API Platform for Laravel and kept outside the core repository. Each resource is declared once and served over both transports by the same providers and processors, so the data and the business rules match. This page helps you choose a surface (Shop or Admin) and a transport (REST or GraphQL).

## Choosing the Shop or Admin API

| | Shop API | Admin API |
|---|---|---|
| Built for | Storefronts, mobile shopping apps, headless front ends | Back-office apps and server-to-server integrations |
| REST | `/api/shop/*` | `/api/admin/*` |
| GraphQL | `POST /api/graphql` | `POST /api/admin/graphql` |
| Credential | A storefront key, plus a customer or guest-cart token for account, cart and checkout calls | An Integration token issued for one admin user |
| Where it runs | Anywhere: the storefront key is public by design, and a customer's token scopes account calls to that customer | On a server only: the token carries its admin's permissions |
| Playgrounds | Swagger UI at `/api/shop`, GraphiQL at `/api/graphiql` | Swagger UI at `/api/admin`, GraphiQL at `/api/admin/graphiql` |

The surfaces share neither credentials nor schemas: a Shop operation isn't reachable on the Admin GraphQL endpoint, and the other way round. The Admin API mirrors what the admin can do, and a token never does more than its admin's role allows. An AI agent that acts inside the shopper's browser needs neither surface: the storefront declares its actions as [WebMCP](../ai/webmcp.md) tools, with no package and no token.

## Choosing REST or GraphQL

Both transports reach the same resources, so choose by how your client works:

| Pick | When |
|---|---|
| REST | Each screen reads or changes one resource at a time; you want HTTP status codes, paging headers and GET requests a cache can store; you upload files such as product images or import files, which only REST accepts |
| GraphQL | A screen needs many related fields in one round trip; you want to select only the fields you render; your front end already uses a GraphQL client |

One client can use both with the same key and tokens, for example GraphQL for catalog pages and REST for an upload.

## Packages for Older Releases

Before `bagisto/bagisto-api`, Bagisto's APIs were two separate packages. Their last releases are for Bagisto 2.3:

| Package | Latest release | Built on | Requirement in its README |
|---|---|---|---|
| `bagisto/rest-api` | v2.3.1 | L5-Swagger and Laravel Sanctum | Bagisto 2.3.x |
| `bagisto/graphql-api` | v2.3.2 | Lighthouse and JWT authentication | Bagisto 2.3.0 |

Their endpoints, install commands and authentication differ from `bagisto/bagisto-api`, so instructions written for them don't apply to it.

## Next Step

[Installation](./installation.md) installs the package and issues the credentials each surface needs.

# Why Choose Bagisto?

[Bagisto](https://bagisto.com/) is an open-source e-commerce platform, released under the MIT licence and built as a Laravel application. You install the whole application, then extend it with your own Laravel packages and themes, the same way its own features are built.

## A Stack You Already Know

- Laravel 13 on PHP 8.4, with Vue.js 3, Tailwind CSS 4 and Vite for the admin and the storefront.
- MySQL 8.0, MariaDB 10.11 or PostgreSQL 16.
- Every feature is one of the 42 packages under `packages/Webkul/`, so the code you extend has the same shape as the code you write. See [Architecture Overview](../architecture/overview.md).

## Commerce Features in the Core

- **Catalog:** simple, configurable, grouped, bundle, downloadable, virtual and booking products; attribute families; a category tree; catalog price rules.
- **Selling:** multiple channels, locales and currencies; cart rules and coupons; orders, invoices, shipments and refunds; tax categories and rates.
- **Payments and shipping:** cash on delivery, money transfer, PayPal, Stripe, Razorpay, PayU, PayGlocal and PhonePe; flat rate and free shipping, plus any carrier you add.
- **Customers:** accounts, groups, wishlists, product comparison, reviews, social login, GDPR data requests, returns (RMA) and EU withdrawal requests.
- **Search and SEO:** database or Elasticsearch search, search terms and synonyms, URL rewrites, meta fields, XML sitemaps and a `robots.txt` per channel.
- **Operations:** a full page cache, data import, Amazon S3 and Cloudflare R2 storage, and production Docker images.

The admin and the storefront are translated into 22 locales.

## Generative AI and AI Agent Tools

- [Generative AI (Magic AI)](../ai/magic-ai.md) writes product content, generates images, translates reviews, powers image search and writes personalized checkout messages. It works with OpenAI, Anthropic, Gemini, Groq, Mistral, DeepSeek, xAI or a self-hosted Ollama model.
- [WebMCP](../ai/webmcp.md) declares storefront actions as tools that a browser AI agent can call for the shopper: open a product, add it to the wishlist, or open the wishlist, the cart or the checkout.
- [Agent skills and llms.txt](../ai/introduction.md) teach AI coding agents Bagisto's conventions.

## Built to Be Extended

- Add features as packages, change the storefront with themes, and react to core behaviour through events, without editing core files.
- REST and GraphQL APIs come from the separate `bagisto/bagisto-api` package; see [REST and GraphQL APIs](../api/introduction.md), and the endpoint reference at [api-docs.bagisto.com](https://api-docs.bagisto.com/).
- [Bagisto Visual](https://visual.bagistoplus.com/) is a community-built visual theme editor for Bagisto.

## Next Step

[Before You Start](./before-you-start.md) lists what you need on your machine.

# WebMCP

[WebMCP](https://webmachinelearning.github.io/webmcp/) is a browser proposal that lets a
web page declare **tools** an in-browser AI agent may call, through a
`navigator.modelContext` API. Bagisto's storefront declares its main shopping actions as
WebMCP tools, so a browser agent can search the catalog, open a product, manage the wishlist
and reach the cart or checkout on a shopper's behalf without scraping the page.

The feature is part of the `Shop` package on Bagisto 2.4 and 2.5. It needs no configuration
and is inert in a browser without the API. It is the agentic side of Bagisto's AI: the
generative side, content produced by a model, is [Generative AI (Magic AI)](./magic-ai.md).

## What is declared

The storefront layout includes `<x-shop::layouts.webmcp />`, a hidden block of ordinary HTML
forms, each carrying a `toolname`, a `tooldescription` and, on its inputs, a
`toolparamdescription`. Two more forms in the visible page are tagged the same way. Together
they expose seven tools:

| Tool | Parameters | What happens |
|---|---|---|
| `search_products` | `query` | Submits the header search form to the search page |
| `view_product` | `query` | `GET /webmcp/product`: resolves a product by URL key or name and redirects to its page, or to the search results when nothing matches |
| `add_to_wishlist` | `query` | `GET /webmcp/wishlist/add`: resolves the product and adds it to the logged-in customer's wishlist; a guest is redirected to the login page |
| `view_wishlist` | — | Opens the wishlist |
| `view_cart` | — | Opens the cart |
| `proceed_to_checkout` | — | Opens the one-page checkout |
| `subscribe_to_newsletter` | `email` | Submits the footer newsletter form |

The two `/webmcp/*` routes are in `packages/Webkul/Shop/src/Routes/webmcp-routes.php` and are
loaded ahead of the slug catch-all so they are never mistaken for a product URL. Product
resolution in `WebMcpController` tries the exact URL key, then a slugged version of the query,
then the first visible product a catalog search returns for it.

Every tool ends in a normal page load, so the agent sees the same page the shopper would,
with the same session, flash messages and login requirements. There is no separate API, no
token and no way for an agent to bypass the checkout.

## How the bridge works

The script pushed by the component runs once the DOM is ready:

1. It checks for `navigator.modelContext.provideContext`; if the browser has no WebMCP
   support the script returns and the hidden forms stay unused.
2. It collects every `form[toolname]` on the page, builds a JSON schema from the form's named
   inputs (each a `string`, described by `toolparamdescription` or the input's `aria-label`),
   and creates a tool whose `execute` callback fills those inputs from the agent's arguments
   and calls `form.submit()`.
3. It hands the list to `navigator.modelContext.provideContext({ tools })`.

Because the tools are derived from markup, they respect the current theme: a theme that
renders its own header search form keeps the `search_products` tool only if it keeps the
`toolname` attributes.

## Adding a tool from a theme or package

Any form in the page becomes a tool when it carries the attributes. The `toolautosubmit`
attribute is a marker the bridge ignores today; add it anyway so the markup stays consistent
with the core forms.

```blade
<form
    action="{{ route('shop.compare.index') }}"
    method="GET"
    toolname="view_compare_list"
    tooldescription="{{ trans('mytheme::app.webmcp.view-compare') }}"
    toolautosubmit
>
    <button type="submit" class="hidden" aria-hidden="true"></button>
</form>
```

A tool that needs input declares it as a named field with a description:

```blade
<input
    type="text"
    name="query"
    toolparamdescription="{{ trans('mytheme::app.webmcp.view-compare-query') }}"
>
```

Mark a field `required` and the bridge lists it under the schema's `required` array. Place
such forms inside the hidden `<div class="hidden">` block of the component, or anywhere else in
the layout, and use the `bagisto.shop.layout.webmcp.before` and `.after` render events to
inject them from a package without overriding the component:

```php
Event::listen('bagisto.shop.layout.webmcp.after', function ($viewRenderEventManager) {
    $viewRenderEventManager->addTemplate('mypackage::shop.webmcp-tools');
});
```

To remove or rename the core tools, override `components/layouts/webmcp.blade.php` in your
theme (see [Creating Store Theme](../theme-development/creating-store-theme.md#how-views-are-resolved)).

## Testing it

Browsers are only beginning to ship the API, so the quickest check is to call the bridge's
result yourself in the console of any browser:

```js
navigator.modelContext = { provideContext: (ctx) => console.table(ctx.tools.map(t => t.name)) };
document.dispatchEvent(new Event('DOMContentLoaded'));
```

The table lists the seven tool names. Calling a tool's `execute({ query: 'arctic' })` submits
the corresponding form, which is the same behaviour an agent triggers.

## Relation to other agent features

- **Generative AI** ([Magic AI](./magic-ai.md)) is server-side and produces content for the
  merchant and the shopper; WebMCP is client-side and lets an agent act. They do not depend
  on each other.
- The REST and GraphQL APIs ([Bagisto APIs](../api/introduction.md)) are the right surface for
  an agent that runs outside a browser; WebMCP is for agents that live in the shopper's
  browser session.

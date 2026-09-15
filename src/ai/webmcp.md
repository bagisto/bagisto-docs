# WebMCP

[WebMCP](https://webmachinelearning.github.io/webmcp/) is a browser proposal that lets a web page declare **tools** an AI agent running in the browser may call. Bagisto's storefront declares shopping actions as WebMCP tools, so a browser agent can open a product, add it to the wishlist, or open the wishlist, the cart or the checkout for the shopper without reading the page's markup. It is part of the Shop package, needs no configuration, and does nothing in a browser without `navigator.modelContext.provideContext()`.

| Piece | Where |
|---|---|
| Tool forms and the bridge script | `packages/Webkul/Shop/src/Resources/views/components/layouts/webmcp.blade.php` |
| Where the layout includes it | `<x-shop::layouts.webmcp />` in `components/layouts/index.blade.php`, after `<div id="app">` closes |
| Routes | `packages/Webkul/Shop/src/Routes/webmcp-routes.php` |
| Controller | `Webkul\Shop\Http\Controllers\WebMcpController` |
| Tool descriptions | `shop::app.components.layouts.webmcp.*` in the Shop package's language files |

## The Declared Tools

A tool is an ordinary HTML form with a `toolname` and a `tooldescription`. Its named inputs are the tool's parameters, each described by a `toolparamdescription`. The component's hidden block declares five tools, and two forms elsewhere in the layout carry the same attributes:

| Tool | Parameters | Declared in | What happens |
|---|---|---|---|
| `view_product` | `query` | Hidden block | `GET webmcp/product` opens the matching product's page, or the search results for `query` |
| `add_to_wishlist` | `query` | Hidden block | `GET webmcp/wishlist/add` adds the matching product to the signed-in customer's wishlist and opens it; a guest is sent to the sign-in page |
| `view_wishlist` | none | Hidden block | Opens the wishlist |
| `view_cart` | none | Hidden block | Opens the cart |
| `proceed_to_checkout` | none | Hidden block | Opens the one-page checkout |
| `search_products` | `query` | Desktop header search form | Opens the search results |
| `subscribe_to_newsletter` | `email` | Footer newsletter form, present when newsletter subscription is on | Submits the subscription |

The header search and footer newsletter forms are rendered by Vue after the bridge runs, so in practice a browser agent is offered the five tools of the hidden block; see [Things to Watch](#things-to-watch).

## The Routes

| Method and URI | Name | Action |
|---|---|---|
| `GET webmcp/product` | `shop.webmcp.product` | `WebMcpController@product` |
| `GET webmcp/wishlist/add` | `shop.webmcp.wishlist.add` | `WebMcpController@addToWishlist` |

`Routes/web.php` loads `webmcp-routes.php` before the storefront routes, so the slug catch-all never treats `webmcp/product` as a product or category URL.

Both actions find the product for `query` in `resolveProduct()`:

1. The product whose URL key is `query` or, only when no product has that URL key, the one whose URL key is `Str::slug(query)`. It is kept only if it is available in the current channel.
2. Otherwise, the first active, individually visible product that a catalog search for `query` returns in the current channel.

When `addToWishlist()` finds no product, it flashes a warning and opens the search results. When it finds one that isn't in the wishlist yet, it creates the item between the `customer.wishlist.create.before` and `customer.wishlist.create.after` events.

## How the Bridge Works

The script in the component runs once, when the DOM is ready:

1. It stops at once unless `navigator.modelContext.provideContext` is a function.
2. For every `form[toolname]` in the document it builds a tool. The name comes from `toolname` and the description from `tooldescription`. The input schema has one `string` property per named `input`, `textarea` or `select`, described by its `toolparamdescription`, then its `aria-label`, then its name. Fields with the `required` attribute are listed as required.
3. Each tool's `execute(args)` writes the arguments into the matching fields, calls `form.submit()`, and returns the text `Executed "<name>".`
4. It passes the tools to `navigator.modelContext.provideContext({ tools })`.

The `toolautosubmit` attribute on the core forms isn't read by the script.

## What Stays Under the Shopper's Control

Every tool submits a form in the shopper's own browser session, with no token or separate API, and ends on an ordinary storefront page with the same sign-in requirements, flash messages and validation a click would get. No tool places an order, pays or changes the cart: `proceed_to_checkout` only opens the checkout page, where the shopper completes the order.

## Adding a Tool from a Package

Declare the form in a Blade view of your package and inject it with the `bagisto.shop.layout.webmcp.after` render event, so the core component stays untouched. The example adds a tool that opens the compare page.

**File:** `packages/Webkul/AgentTools/src/Resources/views/shop/webmcp-tools.blade.php`

```blade
<div class="hidden">
    <form
        action="{{ route('shop.compare.index') }}"
        method="GET"
        toolname="view_compare_list"
        tooldescription="{{ trans('agent_tools::app.webmcp.view-compare-list') }}"
    >
        <button
            type="submit"
            class="hidden"
            aria-hidden="true"
        ></button>
    </form>
</div>
```

**File:** `packages/Webkul/AgentTools/src/Resources/lang/en/app.php`

```php
<?php

return [
    'webmcp' => [
        'view-compare-list' => 'Open the compare page to review the products the customer is comparing.',
    ],
];
```

**File:** `packages/Webkul/AgentTools/src/Providers/AgentToolsServiceProvider.php`

```php
<?php

namespace Webkul\AgentTools\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Webkul\Theme\ViewRenderEventManager;

class AgentToolsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__.'/../Resources/views', 'agent_tools');

        $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'agent_tools');

        Event::listen('bagisto.shop.layout.webmcp.after', static function (ViewRenderEventManager $viewRenderEventManager) {
            $viewRenderEventManager->addTemplate('agent_tools::shop.webmcp-tools');
        });
    }
}
```

Register the provider and autoload the namespace as for any package; see [Getting Started](../package-development/getting-started.md). Add the translation key for every locale your store runs.

A tool that takes input declares a named field. Add `required` when the agent must supply it:

```blade
<input
    type="text"
    name="query"
    toolparamdescription="{{ trans('agent_tools::app.webmcp.query') }}"
    required
>
```

## Changing or Removing the Core Tools

- **The wording**: override the `shop::app.components.layouts.webmcp.*` keys in `lang/vendor/shop/<locale>/app.php`; see [Publishing Translations](../package-development/localization.md#publishing-translations-optional). Bagisto's `.gitignore` excludes `/lang/vendor`, so remove that line or force-add the file, or the override never reaches your repository.
- **The set of tools**: override the component in your theme at `<views_path>/layouts/webmcp.blade.php`, keeping the script if you still want tools registered; see [Creating a Store Theme](../theme-development/creating-store-theme.md#blade-components).

Editing `packages/Webkul/Shop` directly works, but the change is lost on the next update.

## Test It

In a browser without `navigator.modelContext`, define a stand-in before the page's scripts run and read what the bridge registers. With Playwright:

```js
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'modelContext', {
            value: { provideContext: (context) => { window.webMcpTools = context.tools; } },
        });
    });

    await page.goto('https://your-domain.com/');

    console.log(await page.evaluate(() => window.webMcpTools.map((tool) => tool.name)));

    await page.evaluate(() => window.webMcpTools.find((tool) => tool.name === 'view_cart').execute({}));

    await page.waitForURL(/\/checkout\/cart/);

    await browser.close();
})();
```

The log lists the tools an agent is offered on that page. Calling `execute()` performs the same form submission an agent triggers, here opening the cart.

## Things to Watch

- **Only forms that exist when the DOM is ready become tools.** The bridge runs once, on `DOMContentLoaded`, before the storefront's Vue app mounts. A `form[toolname]` inside a Vue template, or one rendered by `<x-shop::form>`, doesn't exist yet and isn't registered. Put tool forms in plain Blade outside `<div id="app">`, as the render event above does.
- **Wrap injected forms in `<div class="hidden">`.** The `bagisto.shop.layout.webmcp.before` and `.after` events render outside the component's hidden block.
- **Every parameter is a string.** The generated schema has no numbers, enums or nested objects.
- **Keep changes behind POST.** Use GET forms for tools that navigate. A tool that changes data should submit a POST form with `@csrf`, like the page's own forms. Core's `add_to_wishlist` is a GET route that changes the wishlist; don't copy that for your own tools.
- **The browser API is still changing.** The form attributes follow the proposal's declarative explainer, but the bridge calls `navigator.modelContext.provideContext()`. Neither the draft linked at the top of this page nor its explainers define that call; they use `document.modelContext.registerTool()`. Check what the browser you target exposes before relying on the tools.

## Related Pages

- [REST and GraphQL APIs](../api/introduction.md): the surface for an agent that runs outside the shopper's browser.
- [View Render Events](../advanced/view-render-events.md): the mechanism that injects your tool forms.
- [Generative AI (Magic AI)](./magic-ai.md): content generated on the server, independent of WebMCP.

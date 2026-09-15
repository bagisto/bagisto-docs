# AI in Bagisto

Bagisto has AI in two places in the platform: Generative AI (Magic AI) in core produces content, and WebMCP in the Shop package declares storefront actions as tools for an AI agent in the shopper's browser. For the developers who extend Bagisto, agent skills give coding agents its conventions, and llms.txt gives AI tools this documentation as plain text.

## Generative, Agentic, and the Difference

The terms are used deliberately, because they describe different things:

| Term | Meaning here | Where Bagisto has it |
|---|---|---|
| **Generative AI** | A model produces content: text, translations, keywords, images | [Generative AI (Magic AI)](./magic-ai.md), in core: text in the admin editor, product images in the admin, image-search keywords, review translation, the checkout success message |
| **Agentic AI** | An AI agent performs actions through tools, not only text | [WebMCP](./webmcp.md): storefront tools a browser agent calls; [Agent Skills](./agent-skills.md): the conventions a coding agent follows while it changes your code |
| **Agentic commerce** | Commerce where AI helps produce a store's content and agents act on the storefront for a shopper | The direction the two add up to. Bagisto has no agent of its own that runs a store or shops by itself |

## What Stays with People

- **In the admin**, Generative AI (Magic AI) returns text to a dialog in the editor and images to a dialog in the image uploader. Nothing reaches the product or page until the admin applies the result and saves the form.
- **On the storefront**, a review translation, a checkout success message or the keywords for an image search are shown to the shopper as they come back from the provider, and none of them is saved.
- **A WebMCP tool** fills a storefront form and submits it in the shopper's session, and the result is an ordinary page. No tool places an order or pays: `proceed_to_checkout` opens the checkout page, and `add_to_wishlist` sends a guest to the sign-in page.

## Pages in This Section

<div class="ai-cards__group-title">For Your Store</div>

<div class="ai-cards">
  <a class="ai-card" href="/ai/magic-ai.html">
    <div class="ai-card__title">Generative AI (Magic AI)</div>
    <div class="ai-card__desc">
      Text and image generation in the admin, plus image search, review translation and a
      personalized checkout message on the storefront, on one of eight AI providers.
    </div>
  </a>

  <a class="ai-card" href="/ai/webmcp.html">
    <div class="ai-card__title">WebMCP</div>
    <div class="ai-card__desc">
      Storefront actions declared as tools for browser agents: open a product, add it to the
      wishlist, open the cart or the checkout, always in the shopper's own session.
    </div>
  </a>
</div>

<div class="ai-cards__group-title">For Developers &amp; AI Agents</div>

<div class="ai-cards">
  <a class="ai-card" href="/ai/agent-skills.html">
    <div class="ai-card__title">Agent Skills</div>
    <div class="ai-card__desc">
      Skills that teach coding agents how Bagisto packages, themes, payment and shipping
      methods, tests and the API package are built.
    </div>
  </a>

  <a class="ai-card" href="/ai/llms-txt.html">
    <div class="ai-card__title">llms.txt</div>
    <div class="ai-card__desc">
      This documentation as two plain-text files, an index and the full text, for AI tools
      and assistants.
    </div>
  </a>
</div>

For the REST and GraphQL reference, [Build with AI](https://api-docs.bagisto.com/api/build-with-ai/) describes its own `llms.txt` and an optional MCP server that searches it.

# AI in Bagisto

Bagisto ships with AI built in, on three fronts: **generative AI** that writes, translates
and draws for the merchant and the shopper, **agentic AI** hooks that let an AI agent act on
the storefront, and tooling that makes the coding agents *you* build with fluent in Bagisto.
Together they are Bagisto's path to **agentic commerce**, where an AI assistant can help run
a store and an AI agent can shop it on someone's behalf. This page is the home for all of it.

<div class="ai-cards__group-title">For your store</div>

<div class="ai-cards">
  <a class="ai-card" href="/ai/magic-ai.html">
    <div class="ai-card__title">✨ Magic AI</div>
    <div class="ai-card__desc">
      Generative AI for the store: product content &amp; images, image search, review
      translation and personalised checkout messages, on the AI provider of your choice.
    </div>
  </a>

  <a class="ai-card" href="/ai/webmcp.html">
    <div class="ai-card__title">🤖 WebMCP</div>
    <div class="ai-card__desc">
      Agentic AI on the storefront: tools declared for browser agents, so an agent can search,
      open a product, manage the wishlist and reach checkout on a shopper's behalf.
    </div>
  </a>
</div>

<div class="ai-cards__group-title">For developers &amp; AI agents</div>

<div class="ai-cards">
  <a class="ai-card" href="/ai/agent-skills.html">
    <div class="ai-card__title">🧩 Agent Skills</div>
    <div class="ai-card__desc">
      Pre-built skills that teach AI coding agents (Claude Code, Cursor, Windsurf) Bagisto's
      conventions so they generate correct packages, payment methods and themes.
    </div>
  </a>

  <a class="ai-card" href="/ai/llms-txt.html">
    <div class="ai-card__title">📄 llms.txt</div>
    <div class="ai-card__desc">
      Context files that help LLMs and AI tools understand Bagisto's architecture for more
      accurate, framework-aware suggestions.
    </div>
  </a>
</div>

## Three kinds of AI, and what each one does

The terms are used deliberately, because they describe different things:

| Term | Meaning here | Where Bagisto has it today |
|---|---|---|
| **Generative AI** | A model produces content: text, translations, keywords, images | [Magic AI](/ai/magic-ai): product and page copy, product images, review translation, the keywords behind image search, the checkout message |
| **Agentic AI** | An AI agent performs actions through tools rather than only producing text | [WebMCP](/ai/webmcp): seven storefront actions exposed to browser agents; [Agent Skills](/ai/agent-skills): coding agents that build Bagisto packages and themes |
| **Agentic commerce** | Commerce in which AI assists the merchant and can act for the shopper | The combination of the two above, in the core, with no separate product to install |

What Bagisto does **not** claim: Magic AI does not run your store on its own, and WebMCP does
not complete a purchase without the shopper. Every generated text is applied by an admin, and
every WebMCP tool ends in an ordinary storefront page where the person is still in charge.

## Magic AI — generative AI built into your store

[Magic AI](/ai/magic-ai) is a first-class Bagisto feature. Add an API key for any
supported provider and you can:

- ✍️ **Generate content** — product descriptions, page copy, and more from the admin editor.
- 🖼️ **Generate images** — create product imagery from a text prompt.
- 🔍 **Image search** — let shoppers search your catalog by uploading a photo.
- 🌐 **Translate reviews** — show customer reviews in the shopper's language.
- 🎉 **Checkout messages** — personalised order confirmation messages.

Magic AI works with **OpenAI, Anthropic, Gemini, Groq, xAI, DeepSeek, Mistral, and Ollama**.
Admin features let you choose which providers are offered; storefront features are
configured per channel with a model each.

## WebMCP — agentic AI on the storefront

[WebMCP](/ai/webmcp) is the browser-side counterpart. The storefront layout declares its
search, product, wishlist, cart, checkout and newsletter actions as tools, and registers them
with `navigator.modelContext.provideContext()` when the browser supports it. In every other
browser the markup is inert. It is available on Bagisto 2.4 and the current development
version alike.

## AI for developers

Bagisto also helps the AI tools *you* code with:

- **[Agent Skills](/ai/agent-skills)** — install `bagisto/agent-skills` so your AI agent
  generates Bagisto-correct packages, payment methods, themes, and tests.
- **[llms.txt](/ai/llms-txt)** — point Copilot, Cursor, ChatGPT, or Claude at Bagisto's
  context files for architecture-aware answers.

::: tip Where to start
Building a store? Start with **[Magic AI](/ai/magic-ai)**. Letting agents shop it? Read **[WebMCP](/ai/webmcp)**. Writing code? Install **[Agent Skills](/ai/agent-skills)**.
:::

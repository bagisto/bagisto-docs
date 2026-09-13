# AI in Bagisto

Bagisto ships with AI built in — both **inside your store** and **inside your development
workflow**. This page is the home for everything AI-related: store features powered by AI,
the hooks that let AI agents shop your store, and tools that make the AI agents *you* build
with smarter about Bagisto.

<div class="ai-cards__group-title">For your store</div>

<div class="ai-cards">
  <a class="ai-card" href="/ai/magic-ai.html">
    <div class="ai-card__title">✨ Magic AI</div>
    <div class="ai-card__desc">
      Generate product content &amp; images, image search, review translation and personalised
      checkout messages — powered by your choice of AI provider.
    </div>
  </a>

  <a class="ai-card" href="/ai/webmcp.html">
    <div class="ai-card__title">🤖 WebMCP</div>
    <div class="ai-card__desc">
      Storefront tools declared for browser AI agents, so an agent can search, open a product,
      manage the wishlist and reach checkout on a shopper's behalf.
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

## Agentic commerce

"Agentic commerce" means two things for a store: the merchant's own work is assisted by
AI, and the shopper may be an AI agent acting for a person. Bagisto covers both sides with
features that are already in the core, and this section describes exactly what each one
does rather than what it might grow into.

| Side | Feature | What it does today |
|---|---|---|
| Merchant | [Magic AI](/ai/magic-ai) | Writes and translates content, generates images, answers image searches, personalises the order confirmation |
| Shopper | [WebMCP](/ai/webmcp) | Declares seven storefront actions to browsers that expose the WebMCP `navigator.modelContext` API, so an agent in the browser can act on the page |
| Developer | [Agent Skills](/ai/agent-skills), [llms.txt](/ai/llms-txt) | Give coding agents Bagisto's conventions and architecture |

## Magic AI — built into your store

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

## WebMCP — let agents shop

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

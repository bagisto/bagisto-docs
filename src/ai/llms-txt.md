# llms.txt

Bagisto publishes `llms.txt` files that describe its architecture and conventions in a
format AI tools understand. Pointing tools like GitHub Copilot, Cursor, ChatGPT, or Claude
at these files gives you more accurate, framework-aware suggestions.

## Two Context Files

| File | Content | Best for |
|---|---|---|
| [`llms.txt`](/llms.txt) | Core concepts, keywords, naming patterns | Quick setup, general assistance |
| [`llms-full.txt`](/llms-full.txt) | Detailed architecture and components | Complex, custom development |

Start with `llms.txt`; use `llms-full.txt` when you need deeper context.

## Setup

Download the files to your project root:

```bash
curl -O https://devdocs.bagisto.com/llms.txt
curl -O https://devdocs.bagisto.com/llms-full.txt
```

Then point your AI tool at them:

- **GitHub Copilot** — detects the files automatically.
- **Cursor** — reference with `@Docs llms.txt`.
- **ChatGPT / Claude** — upload or paste the file in your conversation.

::: tip For custom packages
Drop a project- or package-specific `llms.txt` alongside your code so agents pick up your own
conventions too. For task-specific guidance, pair this with [Agent Skills](/ai/agent-skills).
:::

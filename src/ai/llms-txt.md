# llms.txt

This site publishes its documentation as two plain-text files for AI tools, following the [llms.txt](https://llmstxt.org) convention:

| File | Contains | Use it when |
|---|---|---|
| [`llms.txt`](https://devdocs.bagisto.com/llms.txt) | The site's title and summary, then a table of contents that links every page, grouped by section | The tool can follow links, or you want it to find the right page first |
| [`llms-full.txt`](https://devdocs.bagisto.com/llms-full.txt) | The full text of every page, one after another | The tool can't browse, or you are building a search index of the documentation |

Both files describe the same Bagisto release as the site. The links in `llms.txt` are site-relative, such as `/getting-started/installation`, so resolve them against `https://devdocs.bagisto.com`.

## Using Them

- **A tool that reads URLs**: give it `https://devdocs.bagisto.com/llms.txt` and ask it to open the pages it needs.
- **A chat that can't browse**: download a file and attach it. `llms-full.txt` holds the whole site, several hundred kilobytes of text, which can be more than a model's context window takes. Attach `llms.txt` and paste in the pages you need instead.
- **A coding agent in your project**: add a line pointing to `https://devdocs.bagisto.com/llms.txt` to the project's `AGENTS.md` or `CLAUDE.md`. Pair it with the [Agent Skills](./agent-skills.md), which carry the rules an agent follows while it writes code.
- **Your own search index**: split `llms-full.txt` at each page's top-level heading and index the parts.

To keep local copies:

```bash
curl -O https://devdocs.bagisto.com/llms.txt
curl -O https://devdocs.bagisto.com/llms-full.txt
```

Download them again after a Bagisto release, because the files change with the site.

## The API Reference Has Its Own

The REST and GraphQL reference publishes the same pair for the `bagisto/bagisto-api` package. [`api-docs.bagisto.com/llms.txt`](https://api-docs.bagisto.com/llms.txt) lists every Shop and Admin endpoint, and [`api-docs.bagisto.com/llms-full.txt`](https://api-docs.bagisto.com/llms-full.txt) holds every page. An optional MCP server, [`bagisto/mcp`](https://github.com/bagisto/mcp), lets an agent search that reference from the editor; see [Build with AI](https://api-docs.bagisto.com/api/build-with-ai/).

## Related Pages

- [Agent Skills](./agent-skills.md): the conventions a coding agent follows while it writes Bagisto code.
- [AI in Bagisto](./introduction.md): the generative and agentic features, and where to start.

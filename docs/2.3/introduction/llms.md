# LLMs.txt

Enhancing AI understanding of **Bagisto** for smarter code suggestions and developer experience.

## What is `llms.txt`?

Bagisto includes an `llms.txt` file to improve the performance of language models and AI-powered developer tools like GitHub Copilot, ChatGPT, Claude, and Cursor.

This file helps large language models:

* Understand Bagisto’s architecture and conventions
* Provide accurate code completions and structural suggestions
* Recognize framework-specific syntax and patterns
* Improve IDE autocomplete, search, and inline documentation

## Provided Context Files

We offer two context files to support AI tools:

* [`llms.txt`](/llms.txt): A concise summary of core concepts, keywords, and naming patterns in Bagisto
* [`llms-full.txt`](/llms-full.txt): A comprehensive guide covering internal architecture, common usage, components, and terminology

These files are optimized for ingestion by AI assistants and indexing systems.

## How AI Tools Use These Files

### GitHub Copilot / ChatGPT / Claude

When `llms.txt` is present, these tools can:

* Autocomplete Blade and Livewire components correctly
* Follow Bagisto’s layout, naming, and theming conventions
* Suggest valid schema definitions, config options, and UI blocks

### Cursor

Using Cursor? Just include `llms.txt` in your workspace and reference it with the `@Docs` directive. This lets Cursor understand your project’s structure and suggest more relevant completions.

More details: [cursor.sh](https://docs.cursor.com/context/@-symbols/@-docs)

### Other Tools

Any AI platform that supports external context files or RAG pipelines can use `llms.txt` to enable:

* Smarter scaffolding tools
* Accurate component suggestions
* Custom IDE plugins or AI copilots trained on Bagisto

Simply include the files in your theme or project root to get started.

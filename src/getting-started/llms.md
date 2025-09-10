# 🤖 AI Development Setup

Enhance your development experience with AI-powered tools and smart code suggestions for Bagisto.

## What is `llms.txt`?

Bagisto includes `llms.txt` files to improve the performance of language models and AI-powered developer tools like GitHub Copilot, ChatGPT, Claude, and Cursor.

::: info Why Use AI Context Files?
These files help large language models understand Bagisto's architecture, providing better code suggestions and reducing development time.
:::

## Benefits for Developers

AI context files help with:

- 🎯 **Accurate Code Completions** - Better autocomplete for Bagisto-specific patterns
- 🏗️ **Architecture Understanding** - AI learns Bagisto's structure and conventions  
- 🔧 **Framework Recognition** - Proper syntax suggestions for Blade, Livewire, and Laravel
- 📚 **Smart Documentation** - Context-aware help and inline suggestions

## Available Context Files

We provide two levels of AI context:

### Basic Context
**File**: [`llms.txt`](/llms.txt)  
**Content**: Core concepts, keywords, and naming patterns  
**Best for**: Quick setup and general code assistance

### Comprehensive Context  
**File**: [`llms-full.txt`](/llms-full.txt)  
**Content**: Detailed architecture, components, and terminology  
**Best for**: Advanced development and complex integrations

::: tip Getting Started
Start with `llms.txt` for basic AI assistance, then upgrade to `llms-full.txt` for comprehensive support.
:::

## Supported AI Tools

### GitHub Copilot

With `llms.txt` configured, Copilot can:
- Autocomplete Blade and Livewire components correctly
- Follow Bagisto's layout and theming conventions
- Suggest valid schema definitions and config options
- Generate UI blocks following Bagisto patterns

### ChatGPT & Claude

These AI assistants use the context files to:
- Provide accurate Bagisto-specific code examples
- Understand your project structure better
- Offer relevant troubleshooting suggestions
- Generate documentation aligned with Bagisto standards

### Cursor IDE

::: code-group
```bash [Setup]
# Include llms.txt in your workspace
# Reference with @Docs directive in Cursor
@Docs llms.txt
```
:::

Cursor uses the context to:
- Understand project structure automatically
- Provide smarter code completions
- Offer relevant refactoring suggestions

::: info Learn More
For detailed Cursor setup, visit [Cursor Documentation](https://docs.cursor.com/context/@-symbols/@-docs)
:::

### Other AI Platforms

Any AI tool supporting external context or RAG pipelines can use these files for:

- 🛠️ **Smart Scaffolding** - Generate boilerplate code following Bagisto patterns
- 🎨 **Component Suggestions** - Recommend appropriate UI components
- 🔌 **Custom Integrations** - Build IDE plugins with Bagisto awareness

## Setup Instructions

### Quick Setup

1. **Download Context Files**
   ```bash
   # Download to your project root
   curl -O https://devdocs.bagisto.com/llms.txt
   curl -O https://devdocs.bagisto.com/llms-full.txt
   ```

2. **Place in Project**
   ```
   your-bagisto-project/
   ├── llms.txt
   ├── llms-full.txt
   └── ...
   ```

3. **Configure Your AI Tool**
   - **GitHub Copilot**: Automatically detects the files
   - **Cursor**: Reference with `@Docs llms.txt`
   - **ChatGPT/Claude**: Upload or reference the files in conversations

### Advanced Setup

For custom themes or packages, place the files in your package root:

```
packages/your-package/
├── llms.txt
└── src/
    └── ...
```

::: warning File Placement
Ensure the files are in your project root or package directory for AI tools to find them automatically.
:::

## Best Practices

### File Management
- Keep `llms.txt` updated with your custom components
- Use `llms-full.txt` for complex projects with custom architecture
- Include package-specific context for custom extensions

### AI Tool Configuration
- Configure your IDE to recognize the context files
- Regularly update AI tools to benefit from improved context understanding
- Combine multiple context sources for comprehensive assistance

::: tip Pro Tip
Create project-specific context files for custom packages or heavily modified Bagisto installations to get the most accurate AI assistance.
:::

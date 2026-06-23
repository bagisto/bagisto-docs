# Agent Skills

`bagisto/agent-skills` is a collection of Bagisto-specific skills for AI coding agents like
**Claude Code, Cursor, and Windsurf**. They teach your agent Bagisto's conventions so it
generates correct packages, payment methods, themes, and tests.

## Install

Install every skill:

```bash
npx skills add bagisto/agent-skills
```

Or install just the one you need:

```bash
npx skills add bagisto/agent-skills --skill "package-development"
```

## Available Skills

| Skill | Use it for |
|---|---|
| `package-development` | Creating and structuring Bagisto packages |
| `shipping-method-development` | Building custom shipping methods |
| `payment-method-development` | Building payment gateways |
| `product-type-development` | Creating custom product types |
| `shop-theme-development` | Storefront theme development |
| `admin-theme-development` | Admin theme development |
| `pest-testing` | Writing Pest tests with the right patterns |

Swap the `--skill` value for any name above to install it individually.

## Supported Tools

Claude Code · Cursor · Windsurf · any agent that supports the `skills` CLI.

::: tip
Install only the skills relevant to your work, and keep them updated alongside your Bagisto
version. See also [llms.txt](/ai/llms-txt) for broader AI context.
:::

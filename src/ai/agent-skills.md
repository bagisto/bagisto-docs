# Agent Skills

Agent skills are folders of Markdown instructions that a coding agent loads when a task matches them: a `SKILL.md` with a name and a description of when to use it, plus reference files the agent opens only when it needs the detail. Bagisto's skills carry the conventions a reviewer would otherwise send back, from how packages, themes and tests are built to the coding rules Pint doesn't enforce. They are published under `skills/` in the [`bagisto/agent-skills`](https://github.com/bagisto/agent-skills) repository, not as a Composer or npm package, and you install them into your project with one of the tools below.

## The Skills

| Skill | Use it when |
|---|---|
| `bagisto-coding-standards` | Writing or reviewing any Bagisto PHP or Blade |
| `bagisto-package-development` | Creating a package: providers, migrations, models, repositories, routes, menus, ACL, configuration |
| `bagisto-datagrid-development` | Building an admin listing page |
| `bagisto-attribute-development` | Working with attributes, attribute families and EAV values |
| `bagisto-theme-sections` | Working on the Appearance area: theme sections, the editor and its preview |
| `bagisto-data-transfer` | Adding or changing an import |
| `bagisto-payment-method-development` | Building a payment method |
| `bagisto-shipping-method-development` | Building a shipping method |
| `bagisto-product-type-development` | Building a product type |
| `bagisto-shop-theme-development` | Creating a storefront theme |
| `bagisto-admin-theme-development` | Creating an admin theme |
| `bagisto-shop-advance-theme-development` | Building a storefront feature on the advanced theme workflow |
| `bagisto-pest-testing` | Writing Pest tests |
| `bagisto-playwright-testing` | Writing or debugging Playwright end-to-end tests |
| `bagisto-change-verification` | Running the checks before calling a change done |
| `bagisto-code-review` | Reviewing a change or a pull request |
| `bagisto-git-workflow` | Branches, commits, CHANGELOG entries and pull requests |
| `bagisto-documentation` | Writing Bagisto documentation |
| `bagisto-api-develop` | Working inside the `bagisto/bagisto-api` package |
| `bagisto-api-shop` | Building a storefront or customer app on the Shop API |
| `bagisto-api-admin` | Building a back-office app on the Admin API |

The three API skills sit together under `skills/api-platform-development/`. The repository changes often, so the `--list` option of either tool below shows what it holds today.

## AGENTS.md and CLAUDE.md

Bagisto ships three instruction files that coding agents read:

| File | For |
|---|---|
| `AGENTS.md` | Agents that follow the AGENTS.md convention |
| `CLAUDE.md` | Claude Code |
| `.github/copilot-instructions.md` | GitHub Copilot |

`AGENTS.md` and `CLAUDE.md` map each kind of work to the skill to load, and give the repository layout, the test and code style commands, and the PostgreSQL compatibility rules. `AGENTS.md` also lists the files not to edit. Both expect the skills under `.claude/skills/<name>/SKILL.md`. The skills aren't committed with Bagisto, though: its `.gitignore` excludes `.claude/`, `.agents/`, `.cursor/`, `boost.json` and `skills-lock.json`. Install them into your checkout with one of the two tools below.

The `bagisto/agent-skills` repository keeps an `AGENTS.md` of its own as well, which `bin/build-agents.sh` assembles for a Bagisto release line from the fragments in `rules/`. Start there if your team maintains shared agent instructions.

## Installing with the Skills CLI

The [`skills`](https://skills.sh) CLI runs through `npx` and needs Node.js 22.20 or newer. Run it at the root of your Bagisto application, so the skills install for that project:

```bash
npx skills add bagisto/agent-skills --list
npx skills add bagisto/agent-skills --skill bagisto-coding-standards --skill bagisto-package-development
npx skills add bagisto/agent-skills --skill '*' -a claude-code
```

`--list` shows the skills without installing anything, and `--skill` installs the ones you name; `--skill '*'` with `-a` installs every skill for the agent you name. `--all` is short for `--skill '*' --agent '*' -y`: every skill, for every agent the CLI supports, without prompting. The CLI keeps one copy of each skill in `.agents/skills/` and symlinks it into other agents' folders, such as `.claude/skills/`. It records what it installed in `skills-lock.json`.

| Option | Effect |
|---|---|
| `-a, --agent <agent>` | Installs for the named agent, for example `claude-code` or `cursor` |
| `-y, --yes` | Skips the prompts |
| `-g, --global` | Installs into your home directory, for every project |
| `--copy` | Copies the files instead of symlinking them |

Update the installed skills with `npx skills update`, see them with `npx skills list`, and remove one with `npx skills remove <name>`.

## Installing with Laravel Boost

Bagisto requires `laravel/boost` as a development dependency, and Boost can fetch skills from a GitHub repository.

1. Set Boost up once and choose the agents you use:

   ```bash
   php artisan boost:install
   ```

2. Add the skills:

   ```bash
   php artisan boost:add-skill bagisto/agent-skills --skill=bagisto-coding-standards --skill=bagisto-package-development
   ```

`boost:add-skill` first runs a security audit on the selected skills, unless you pass `--skip-audit`, and asks before installing any it rates risky; a non-interactive run installs them without asking. It then downloads each skill into `.ai/skills/<name>` and runs `boost:update`, which writes the skills into the folder of every agent `boost:install` set up. `--list` shows the available skills, `--all` installs all of them, and `--force` replaces skills that are already installed.

## Things to Watch

- **Boost needs `boost:install` first.** Without it, `boost:add-skill` still downloads the skills into `.ai/skills`, but the update that copies them to your agents fails without a message.
- **Boost lists a nested reference as a skill.** It treats every `SKILL.md` in the repository as a skill, so its list also shows `bagisto-theme-testing`, which is a reference inside `bagisto-shop-advance-theme-development`.
- **Bagisto's `.gitignore` doesn't exclude `.ai/`.** Decide whether Boost's copies belong in your repository.
- **Skills aren't pinned to a release.** `npx skills add` takes the repository's default branch, so a Bagisto 2.4 project and a Bagisto 2.5 project get the same text. Where the releases differ, a skill says which release a rule applies to.
- **The API package skill's install steps are older.** `bagisto-api-develop` describes installing `bagisto/bagisto-api` on Bagisto 2.3.8 with pinned API Platform versions. Follow [Installation](../api/installation.md) instead.

## Related Pages

- [llms.txt](./llms-txt.md): this documentation as plain text for AI tools.
- [Build with AI](https://api-docs.bagisto.com/api/build-with-ai/): the REST and GraphQL reference's own `llms.txt` and optional MCP server.
- [`CONTRIBUTING.md`](https://github.com/bagisto/bagisto/blob/master/CONTRIBUTING.md): the contribution rules `bagisto-git-workflow` and `bagisto-code-review` follow.

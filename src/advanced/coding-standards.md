# Coding Standards

Bagisto's PHP is formatted by Laravel Pint and reviewed against a short list of conventions that Pint can't check. Every sample in this documentation follows them, so a package that keeps to them reads like the code it extends. Contributions to Bagisto itself follow them too, with the branch and pull request rules in [`CONTRIBUTING.md`](https://github.com/bagisto/bagisto/blob/master/CONTRIBUTING.md).

## Formatting with Pint

`pint.json` at the application root sets the `laravel` preset and nothing else.

```bash
# Fix every file
vendor/bin/pint

# Fix only the files with uncommitted changes
vendor/bin/pint --dirty

# Report without changing anything; CI runs this
vendor/bin/pint --test

# One package
vendor/bin/pint packages/Webkul/YourPackage
```

Bagisto runs Pint without its `--blade` option, so `.blade.php` files, including the PHP inside an `@php` block, aren't formatted. Apply the same rules there by hand.

## Conventions Pint Does Not Check

### Docblocks Instead of Comments

- **Every method, property and constant has a docblock**, whatever its visibility: one sentence, capitalized and ending in a full stop, two lines at most. Put types in the signature, and add `@param` or `@return` only for what a native type can't say, such as the contents of an array.
- **A class, interface, trait or enum has no docblock.**
- **Nothing is commented inside a method body or an array**, in PHP, JavaScript or Vue. When a line needs explaining, extract a method whose name explains it, and put the reason for a change in the commit message.
- **In Blade markup, a comment is a short Title Case label** for the block below it, such as `<!-- Page Title -->`, not an explanation.

**File:** `packages/Webkul/Core/src/Helpers/SupportedLocales.php`

```php
/**
 * Get the codes of every supported locale.
 *
 * @return string[]
 */
public static function codes(): array
{
    return array_keys(self::ALL);
}
```

### Class Member Order

Constants, then properties, then the constructor, then public, protected and private methods, each visibility in one block. A protected helper that a public method calls still goes in the protected block.

### Conditions with More than One Clause

A condition with two or more clauses joined by `&&` or `||` puts each clause on its own line, with the operator leading the line. A single-clause condition stays on one line.

**File:** `packages/Webkul/DebugBar/src/DataCollector/ModuleCollector.php`

```php
if (
    is_string($binding)
    && ! mb_check_encoding($binding, 'UTF-8')
) {
    $binding = '[BINARY DATA]';
}
```

### Data Access Through Repositories

Controllers, listeners, jobs and services read and write through a repository, never through `DB::` or a model query. If the repository has no method for what you need, add one to it. `DB::transaction()` and `DB::raw()` inside a repository are fine, and the one place the query builder is expected outside one is a DataGrid's `prepareQueryBuilder()`. See [Repositories](../package-development/repositories.md).

### Events as Strings, in Pairs

Bagisto's extension hooks are dot-delimited strings, dispatched as a `before` and `after` pair around the change. Don't add an event class for a new hook. `ProductController::update(ProductForm $request, int $id)` validates with a form request and fires both halves:

**File:** `packages/Webkul/Admin/src/Http/Controllers/Catalog/ProductController.php`

```php
Event::dispatch('catalog.product.update.before', $id);

$product = $this->productRepository->update($request->all(), $id);

Event::dispatch('catalog.product.update.after', $product);
```

A new action that fires only one half leaves listeners, including the indexers and the full page cache, unable to react. See [Event Listeners](./event-listeners.md).

### Configuration

Call `env()` only inside `config/` files. Anywhere else it returns `null` once the configuration is cached, which is how production runs. Read file-based settings with `config()` and the settings saved in the admin with `core()->getConfigData()`.

### Blade Bindings

On a Blade component tag, `:attribute` binds a PHP value and `::attribute` passes a literal `:attribute` through to Vue:

**File:** `packages/Webkul/Shop/src/Resources/views/customers/account/gdpr/index.blade.php`

```blade
<x-shop::button
    class="primary-button max-w-none flex-auto rounded-2xl px-11 py-3 max-md:rounded-lg max-md:py-1.5"
    :title="trans('shop::app.customers.account.gdpr.index.modal.save')"
    ::loading="isStoring"
    ::disabled="isStoring"
/>
```

On a plain element, such as a Vue component written as `<v-order-items-list>`, Blade leaves the attributes alone. Write a single `:` for the Vue binding there; a `::` reaches the browser with both colons, and the prop never arrives:

**File:** `packages/Webkul/Shop/src/Resources/views/customers/account/rma/create.blade.php`

```blade
<v-order-items-list :key="refreshComponent" :order-id="isSelect"></v-order-items-list>
```

### Authorization

Every admin route needs an entry in an `acl.php`; hiding a button isn't access control. See [Access Control List](../package-development/access-control-list.md).

### Database Portability

Code has to run on MySQL, MariaDB and PostgreSQL. Use `db_grammar()` for SQL that differs between them, and cast boolean columns on the model. See [Database Compatibility](./database-compatibility.md).

## Translations

Every user-facing string goes through `trans()` or `@lang`, with its key in every locale folder under the package's `Resources/lang/`; [Localization](../package-development/localization.md#add-the-other-locales) lists the 22 locales.

```bash
# The root lang/ directory and every package
php artisan bagisto:translations:check

# One package and one locale, with the offending keys listed
php artisan bagisto:translations:check --package=Shop --locale=fr --details
```

The checker (`packages/Webkul/Core/src/Console/Commands/TranslationsChecker.php`) treats `en` as canonical and fails on:

- a supported locale folder that doesn't exist;
- a file or key present in `en` and missing from another locale, or the other way round;
- a locale file whose lines don't match the English file line for line: the same number of lines, the same key and indentation on each key line, and the same blank lines and comments.

An empty string counts as a translation, so the checker doesn't catch untranslated values. [Localization](../package-development/localization.md#checking-every-locale) covers adding locales to a package.

## The Checks

| Check | Command | CI workflow |
|---|---|---|
| Code style | `vendor/bin/pint --test` | `pint-tests.yml` |
| Pest tests | `vendor/bin/pest` | `pest-tests.yml` |
| Translations | `php artisan bagisto:translations:check` | `translation-tests.yml` |
| Playwright end-to-end tests, from `packages/Webkul/Admin`, `Shop` or `Installer` | `npm run test:e2e` | `playwright-tests.yml` |
| Playwright spec types and formatting | `npm run typecheck`, `npm run format:check` | None |

There is no static analysis step: `composer.json` has no PHPStan or Larastan, and the suite has no Pest architecture tests. How and when each workflow runs is on [Testing Overview](./testing.md).

## Things to Watch

- **Only `lang/` and the packages directly under `packages/Webkul` are checked.** A package in another vendor directory, or installed into `vendor/`, is never read, and the command still reports success.
- **A package with only an `en` folder fails** with a missing folder for each of the other 21 locales.
- **Insert a new key at the same line in every locale**, or the line-by-line comparison fails even though the key exists everywhere.
- **CI installs the latest Pint**, not the version locked in `composer.lock`. If CI reports a style change your local `vendor/bin/pint --test` doesn't, run the latest Pint the way CI does, with `composer global require laravel/pint` and then that Pint's `pint --test`, without changing `composer.lock`.
- **A green Pint run says nothing about docblocks, member order or comments.** Those are the conventions a reviewer sends back.

## AI Coding Tools

`AGENTS.md` and `CLAUDE.md` at the application root summarize these conventions, the commands and the CI workflows for coding agents, and point them to the Bagisto agent skills, which carry the conventions in full. The skills are installed separately; see [Agent Skills](../ai/agent-skills.md).

## Related Pages

- [Testing Overview](./testing.md): writing and running the tests these checks run.
- [Contribution Guide](../getting-started/contribution-guide.md): where to report bugs and security issues, and how to contribute to Bagisto.
- [Repositories](../package-development/repositories.md): the data access convention in full.

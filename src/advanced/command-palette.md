# Command Palette

The admin command palette (Ctrl + K, or ⌘ K) searches menus, configuration settings, actions and live records from one box, and can be walked level by level from a section to a page to a record to what may be done with it. Everything it shows is filtered by the signed-in admin's ACL. The merchant-facing description is in the user guide; this page is about what the palette indexes and how a package adds to it.

::: info Availability
The command palette is part of Bagisto 2.5. Bagisto 2.4 has the header Mega Search only.
:::

## What is indexed

`Webkul\Admin\CommandPalette\CommandPalette` is a singleton that collects items from registered **providers**, each implementing `Webkul\Admin\CommandPalette\Contracts\Provider`. Three are registered by `AdminServiceProvider`:

| Provider | Source | Category |
|---|---|---|
| `NavigationProvider` | The admin menu, `menu()->getItems(Menu::ADMIN)`, which is already filtered by ACL | `pages` |
| `ConfigurationProvider` | The system configuration tree, `system_config()->getItems()`, when the admin holds the `configuration` permission. Each page is grafted under the Configuration menu node | `configuration` |
| `ActionProvider` | The `command_palette.actions` config key, skipping actions whose permission the admin lacks or whose route does not exist | `actions` |

Live records (products, orders, categories, customers) are not indexed. They are searched on demand through the admin's existing search endpoints, declared under `command_palette.records`.

The built index is cached for 15 minutes under a key made of the role's permission type, its permissions and the locale, so a permission change takes effect at once and two admins with the same role share one index. The palette fetches it once per page load from `admin.command_palette.index`, which is an unrestricted route: the route may be called by any admin, and the payload itself is what is filtered.

## Adding to the palette from a package

Everything a package can add lives in one config file that it merges into the `command_palette` key. Core's own is the reference:

**File:** `packages/Webkul/Admin/src/Config/command-palette.php`

### Actions

Actions are things an operator starts rather than places they go. Pages and settings are discovered from the menu and the configuration tree, so only actions need declaring:

```php
'actions' => [
    [
        'title' => 'rma::app.admin.command-palette.create-reason',
        'parent' => 'sales.rma.reasons',
        'route' => 'admin.sales.rma.reasons.index',
        'permission' => 'sales.rma.reasons.create',
        'icon' => 'icon-add',
        'keywords' => ['return', 'reason'],
    ],
],
```

| Key | Purpose |
|---|---|
| `title` | Translation key for the label |
| `parent` | Menu key the action is grafted under, so it is offered when the operator drills into that section. Falls back to root level when the parent is missing |
| `route` | An existing admin route name reached by a plain `GET`. The palette creates no routes and navigates with `window.location`, so a `POST` route cannot be an action |
| `params` | Route parameters, if any |
| `permission` | ACL key the admin must hold. Omit for an action anyone may start |
| `icon` | Icon class shown against the result |
| `keywords` | Extra terms the action answers to |

### Aliases

Aliases are extra words a menu key or configuration key answers to, for the times an operator searches for a word the codebase does not use. They are keyed by the menu or configuration key:

```php
'aliases' => [
    'sales.rma' => ['return', 'refund request', 'exchange'],
],
```

### Records

A record source turns one of your search endpoints into a palette group:

```php
'records' => [
    [
        'key' => 'rma',
        'node' => 'sales.rma.requests',
        'title' => 'rma::app.admin.command-palette.records',
        'permission' => 'sales.rma.requests',
        'endpoint' => 'admin.sales.rma.requests.search',
        'index' => 'admin.sales.rma.requests.index',
        'link' => 'admin.sales.rma.requests.view',
        'label' => ['increment_id'],
        'prefix' => '#',
        'meta' => 'status',
        'icon' => 'icon-sales',
        'actions' => [
            ['title' => 'admin::app.command-palette.record-actions.view', 'route' => 'admin.sales.rma.requests.view', 'permission' => 'sales.rma.requests.view', 'icon' => 'icon-view'],
        ],
    ],
],
```

| Key | Purpose |
|---|---|
| `key` | Identifies the group |
| `node` | Menu key the collection is offered under, so it can be drilled into as well as searched |
| `endpoint` | An existing route, called with a `query` parameter, returning a JSON list of records |
| `index` | Route opened by the collection entry itself |
| `link` | Route a result opens, given the record id |
| `label` | Record fields joined to form the row label; `prefix` is put before it |
| `meta` | Record field shown beneath the label |
| `permission` | ACL key required for the group to be searched at all |
| `actions` | What a single record opens; only routes reached by a plain visit belong here |

The palette asks the endpoint after two characters, debounced, and shows at most five rows per source in search results and twenty inside a drilled-in collection. A source whose `endpoint` route is not registered is dropped.

### Merging the file

```php
public function register(): void
{
    $this->mergeConfigFrom(dirname(__DIR__).'/Config/command-palette.php', 'command_palette');
}
```

`mergeConfigFrom` is a shallow merge of top-level keys, and core's file already defines `actions`, `aliases` and `records`, so whichever provider registers last wins the whole key rather than appending to it. To add entries without replacing core's, merge the nested arrays yourself:

```php
public function register(): void
{
    $actions = require dirname(__DIR__).'/Config/command-palette.php';

    config([
        'command_palette.actions' => array_merge(config('command_palette.actions', []), $actions['actions']),
    ]);
}
```

Do the same for `aliases` and `records`.

### A provider of your own

For items that are neither menu entries, configuration pages, actions nor records, implement the contract and register it after the palette resolves:

```php
use Webkul\Admin\CommandPalette\CommandPalette;

$this->callAfterResolving(CommandPalette::class, function (CommandPalette $palette) {
    $palette->register(MyProvider::class);
});
```

`items()` must return `Webkul\Admin\CommandPalette\Item` objects, and, as the contract says, only what the admin is permitted to reach may be returned; the palette does not filter afterwards.

## Notes

- Item labels, keywords and trails are matched in tiers (exact label, label prefix, word prefix, contains, keyword, keyword prefix, trail) and a section is offered ahead of its pages. Keep titles short and put synonyms in `keywords` or `aliases`.
- The Mega Search in the header is unchanged and separate; it searches records only. The `Ctrl K` badge beside it is the palette's shortcut hint.
- There are no automated tests for the palette in the checkout; when you add a source, verify it with a role that lacks the permission as well as with a super admin.

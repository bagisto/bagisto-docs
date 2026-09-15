# Command Palette

The admin command palette (Ctrl + K, or ⌘ K) searches menus, configuration settings, actions and live records from one box, filtered by the signed-in admin's permissions. It lives in `packages/Webkul/Admin/src/CommandPalette`, and a package adds to it through configuration merged under `command_palette` or a provider class of its own. Bagisto 2.4 has no command palette.

## What It Searches

`Webkul\Admin\CommandPalette\CommandPalette`, a singleton registered in `AdminServiceProvider::registerCommandPalette()`, builds a tree of `Webkul\Admin\CommandPalette\Item` objects from **providers** that implement `Webkul\Admin\CommandPalette\Contracts\Provider`. Core registers three:

| Provider | Source | Category |
|---|---|---|
| `NavigationProvider` | The admin menu, `Menu::getItems(Menu::ADMIN)`, which is already filtered by permission | `pages` |
| `ConfigurationProvider` | The configuration tree, `system_config()->getItems()`, when the admin holds the `configuration` permission. Each top-level section is grafted under the `configuration` menu node | `configuration` |
| `ActionProvider` | The `command_palette.actions` configuration key, skipping an action whose permission the admin lacks or whose route isn't registered | `actions` |

Live records (products, orders, categories and customers in core) aren't indexed: `Webkul\Admin\CommandPalette\RecordSources` reads the sources declared under `command_palette.records`, and the palette calls each source's search endpoint as the admin types.

The palette loads once per page from `admin.command_palette.index` (`GET` `command-palette` under the admin URL), `CommandPaletteController::index()`, which returns `data`, the item tree, and `sources`, the record sources. The tree is cached for 15 minutes under a key built from the role's permission type, its permissions and the locale, so a permission change takes effect at once and admins with the same role share one tree.

## Adding to the Palette from a Package

Pages and settings reach the palette on their own through the menu and the configuration tree. A package declares **actions**, **aliases** and **record sources** in configuration files, following core's `packages/Webkul/Admin/src/Config/command-palette.php`, and writes a provider for anything else. The examples are for a Blog package with the menu key `blog.posts`, `admin.blog.posts.*` routes, `blog.posts.*` permissions and translations in the `blog` namespace.

### Actions

Actions are things an operator starts rather than places they go:

**File:** `packages/Webkul/Blog/src/Config/command-palette/actions.php`

```php
<?php

return [
    [
        'title' => 'blog::app.admin.command-palette.create-post',
        'parent' => 'blog.posts',
        'route' => 'admin.blog.posts.create',
        'permission' => 'blog.posts.create',
        'icon' => 'icon-cms',
        'keywords' => ['new', 'add', 'post', 'article'],
    ],
];
```

| Key | Purpose |
|---|---|
| `title` | Translation key for the label |
| `parent` | Menu key the action is grafted under, so it is offered when the operator drills into that section. When no item has that key, the action sits at the top level |
| `path` | Translation key for the trail shown under the result. A grafted action without one reads under its parent's trail |
| `route` | An existing admin route name, resolved with `route($route, $params)`. The palette creates no routes and navigates with `window.location.href`, so the route must answer a plain `GET` |
| `params` | Route parameters, if any |
| `permission` | ACL key the admin must hold. Omit it for an action anyone may start |
| `icon` | Icon class shown against the result |
| `keywords` | Extra terms the action answers to |

### Aliases

Aliases are extra words a menu or configuration key answers to. `Webkul\Admin\CommandPalette\Aliases` reads the array whole, because the keys contain dots:

**File:** `packages/Webkul/Blog/src/Config/command-palette/aliases.php`

```php
<?php

return [
    'blog.posts' => ['article', 'news', 'journal'],
];
```

### Record Sources

A record source turns one of your admin search endpoints into a palette group that is searched as the operator types and can be drilled into under its menu node:

**File:** `packages/Webkul/Blog/src/Config/command-palette/records.php`

```php
<?php

return [
    [
        'key' => 'posts',
        'node' => 'blog.posts',
        'title' => 'blog::app.admin.command-palette.posts',
        'permission' => 'blog.posts',
        'endpoint' => 'admin.blog.posts.search',
        'index' => 'admin.blog.posts.index',
        'link' => 'admin.blog.posts.edit',
        'label' => ['title'],
        'meta' => 'slug',
        'icon' => 'icon-cms',
        'actions' => [
            [
                'title' => 'admin::app.command-palette.record-actions.edit',
                'route' => 'admin.blog.posts.edit',
                'permission' => 'blog.posts.edit',
                'icon' => 'icon-edit',
            ],
        ],
    ],
];
```

| Key | Purpose |
|---|---|
| `key` | Identifies the group |
| `node` | Menu key the collection is offered under, so it can be drilled into as well as searched |
| `title` | Translation key for the group heading |
| `permission` | ACL key required for the group to be searched at all |
| `endpoint` | An admin route called with a `query` parameter. Its JSON response must carry a `data` array of records, each with an `id` and the fields named in `label` and `meta`. A source whose endpoint route isn't registered is dropped |
| `index` | Route opened by the collection entry itself |
| `link` | Route a result opens |
| `label` | Record fields joined with spaces to form the row label; defaults to `['name']` |
| `prefix` | Text put before the label, such as `#` for order numbers |
| `meta` | Record field shown beneath the label |
| `icon` | Icon class shown against the group's results |
| `actions` | What a single record opens: `title`, `route`, `permission` and `icon`. An action whose route isn't registered, or whose permission the admin lacks, is dropped |

`link` and each action route are resolved with `':id'` as their only parameter, and the palette replaces `:id` with the record's `id`, so these routes take the record id as their single parameter and must answer a plain `GET`. The palette queries an endpoint once the search is two characters long, debounced, and shows at most five records per source in search results and twenty inside a drilled-in collection.

### Registering the Files

Merge each file into its own nested key, from `boot()`:

- **Nested keys.** `mergeConfigFrom()` is a shallow `array_merge()` in which values already in the configuration win, so a file merged into `command_palette` itself would lose its `actions`, `aliases` and `records` to core's. Merged into `command_palette.actions` and `command_palette.records`, your lists are combined with core's, and new alias keys are added beside core's.
- **`boot()`, not `register()`.** Core merges its file from `AdminServiceProvider::register()`. Merged from `register()`, your lists replace core's whenever your provider registers first, which a package loaded through Composer's package discovery always does. `php artisan config:cache` runs `boot()` too, so the merged values are cached.

**File:** `packages/Webkul/Blog/src/Providers/BlogServiceProvider.php`

```php
<?php

namespace Webkul\Blog\Providers;

use Illuminate\Support\ServiceProvider;

class BlogServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->mergeConfigFrom(dirname(__DIR__).'/Config/command-palette/actions.php', 'command_palette.actions');

        $this->mergeConfigFrom(dirname(__DIR__).'/Config/command-palette/aliases.php', 'command_palette.aliases');

        $this->mergeConfigFrom(dirname(__DIR__).'/Config/command-palette/records.php', 'command_palette.records');
    }
}
```

### A Provider of Your Own

For items that are neither menu entries, configuration pages, actions nor records, implement the contract. `items()` returns `Item` objects, and, as the contract says, only what the admin is permitted to reach; the palette doesn't filter afterwards:

**File:** `packages/Webkul/Blog/src/CommandPalette/DraftPostProvider.php`

```php
<?php

namespace Webkul\Blog\CommandPalette;

use Webkul\Admin\CommandPalette\Contracts\Provider;
use Webkul\Admin\CommandPalette\Item;

class DraftPostProvider implements Provider
{
    /**
     * A shortcut to the draft posts, for admins who may see posts.
     */
    public function items(): array
    {
        if (! bouncer()->hasPermission('blog.posts')) {
            return [];
        }

        return [
            new Item(
                label: trans('blog::app.admin.command-palette.drafts'),
                category: Item::CATEGORY_PAGE,
                url: route('admin.blog.posts.index', ['status' => 'draft']),
                icon: 'icon-cms',
                keywords: ['draft', 'unpublished'],
                parent: 'blog.posts',
            ),
        ];
    }
}
```

Register it from a `register()` method on `BlogServiceProvider`, once the palette is resolved, as `AdminServiceProvider::registerCommandPalette()` registers core's providers:

```php
$this->callAfterResolving(CommandPalette::class, function (CommandPalette $palette) {
    $palette->register(DraftPostProvider::class);
});
```

with `use Webkul\Admin\CommandPalette\CommandPalette;` and `use Webkul\Blog\CommandPalette\DraftPostProvider;` among the provider's imports.

| `Item` argument | Purpose |
|---|---|
| `label` | The text shown and searched |
| `category` | `Item::CATEGORY_PAGE`, `Item::CATEGORY_CONFIGURATION` or `Item::CATEGORY_ACTION` |
| `url`, `path`, `icon`, `keywords`, `children` | Optional: where it goes, the trail shown under it, its icon, extra search terms and child items |
| `key` | Optional: a key other items can be grafted under |
| `parent` | Optional: the key to graft this item under. It must name a keyed item in the tree the providers return without a parent, such as a menu entry; otherwise the item sits at the top level |

## Things to Watch

- **Merge in `boot()`, into nested keys.** Otherwise core's actions, aliases or records are replaced, or yours are.
- **The tree is cached for 15 minutes** per role and locale. After changing actions, aliases or the menu, clear the application cache, and run `php artisan config:clear` too when the configuration is cached.
- **Routes reached from the palette must answer a plain `GET`.** A route behind a form, a confirmation or a `POST` belongs on the page that owns it.
- **Test with a restricted role.** Check a new action or source signed in with a role that lacks its permission as well as with a full-access admin. Keep titles short, and put synonyms in `keywords` or `aliases`.

## Related Pages

- [Access Control List](../package-development/access-control-list.md): the permissions the palette's entries check.
- [Menu](../package-development/menu.md): the admin menu keys actions and record sources graft under.
- [System Configuration](../package-development/system-configuration.md): the configuration tree the palette searches.

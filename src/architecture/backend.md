# Backend Architecture

This page maps Bagisto's server side: how a request travels through the application, the building blocks every package uses, and what each of the 42 core packages holds. Each section links to the guide that explains its topic in full.

## How a Request Is Handled

1. `public/index.php` boots the application from `bootstrap/app.php`. Laravel loads every service provider in `bootstrap/providers.php`, and Concord loads the modules listed in `config/concord.php`.
2. The global middleware added in `bootstrap/app.php` runs: `Webkul\Core\Http\Middleware\SecureHeaders` sets the security headers, and `Webkul\Installer\Http\Middleware\CanInstall` sends every request to `/install` until Bagisto is installed.
3. The route decides which middleware stack applies:

   | Area | Routes | Middleware |
   |---|---|---|
   | Admin | `packages/Webkul/Admin/src/Routes/`, prefixed with `config('app.admin_url')` | `web` and Bagisto's maintenance check; every page except sign-in, password reset and two-factor verification also passes `admin` (the `Bouncer`: sign-in, account status, permissions, two-factor authentication) and `NoCacheMiddleware` |
   | Storefront | `packages/Webkul/Shop/src/Routes/web.php` and `api.php` | `web`, the `shop` group (`Theme`, `Locale`, `Currency`) and the maintenance check; the home, category, product, CMS, search, compare and contact pages add `cache.response` for the full page cache |
   | Payment gateways | `Routes/` in the Stripe, PayU, Razorpay, PhonePe and PayGlocal packages, and `Http/routes.php` in Paypal | Set by each gateway |
   | Web installer | `packages/Webkul/Installer/src/Routes/web.php` | `web`, with the installer's own session and locale middleware |

4. The controller reads and writes data through repositories, which return Concord models. Writes are wrapped in `before` and `after` events. Controllers, repositories, DataGrids and listeners are resolved from the container, so a package can bind a subclass in place of a core one.
5. The response is usually a Blade view. The Theme package resolves `shop::` and `admin::` views against the active theme before the package's own views ([how views are resolved](../theme-development/creating-store-theme.md#how-views-are-resolved)), and `view_render_event()` calls in the templates let other packages add markup.
6. In the browser, the layout loads the Vite bundle and mounts the Vue app; see [Frontend Architecture](./frontend.md).

## Models, Contracts and Proxies

Bagisto uses [Concord](https://github.com/artkonekt/concord) so that one package can replace another package's model without editing it. Every entity has three parts:

| Part | Example | Role |
|---|---|---|
| Contract | `Webkul\Category\Contracts\Category` | An empty interface that names the entity |
| Model | `Webkul\Category\Models\Category` | The Eloquent model, which implements the contract |
| Proxy | `Webkul\Category\Models\CategoryProxy` | Resolves to whichever model is registered for the contract |

A package lists its models in the `$models` array of its `ModuleServiceProvider`, which in most core packages extends `Webkul\Core\Providers\CoreModuleServiceProvider`. Code that crosses packages refers to the contract or the proxy, never the concrete model: a repository's `model()` returns the contract, and a relation uses the proxy, as in `RMAStatusProxy::modelClass()`. See [Models](../package-development/models.md), including [Extending a Core Model](../package-development/models.md#extending-a-core-model).

<a id="repository-pattern-in-bagisto"></a>

## Repositories

All database access goes through repositories. A repository extends `Webkul\Core\Eloquent\Repository`, which extends Prettus's `BaseRepository`, and its `model()` method returns the contract of the model it works with, such as `'Webkul\Attribute\Contracts\AttributeGroup'`.

- On top of Prettus's methods, the base class adds `findOneByField()`, `findOneWhere()`, `findOrFail()`, `sum()`, `avg()` and `getModel()`.
- It caches reads, controlled by `config/repository.php` and invalidated through a per-repository generation token; see [Repository Cache](../advanced/cache-strategy.md#repository-cache).
- Controllers, listeners and jobs receive repositories through constructor injection. The one place allowed to build a query directly is a DataGrid's `prepareQueryBuilder()`.

See [Repositories](../package-development/repositories.md).

## Events and View Render Events

Bagisto's events are dot-delimited strings, usually fired in `before` and `after` pairs around a write:

**File:** `packages/Webkul/Admin/src/Http/Controllers/Catalog/ProductController.php`

```php
Event::dispatch('catalog.product.update.before', $id);

$product = $this->productRepository->update($request->all(), $id);

Event::dispatch('catalog.product.update.after', $product);
```

Each package maps listeners to event names in the `$listen` array of its own `EventServiceProvider`; see [Event Listeners](../advanced/event-listeners.md) for the events core fires.

Core templates also call `view_render_event()` at named points, such as `bagisto.shop.layout.body.after`. A package adds markup there by listening for the event and adding a template to the `Webkul\Theme\ViewRenderEventManager`; see [View Render Events](../advanced/view-render-events.md).

## Menus, Permissions and Configuration

The admin menu, the permissions, the system configuration fields and several registries are PHP arrays that packages merge into shared configuration keys with `mergeConfigFrom()`, in their service provider's `register()` method:

| Config key | Core entries | Used for |
|---|---|---|
| `menu.admin` | `Admin/src/Config/menu.php` | The admin sidebar, read through `menu()` (`Webkul\Core\Menu`), which hides items the admin has no permission for |
| `menu.customer` | `Shop/src/Config/menu.php` | The customer account menu |
| `acl` | `Admin/src/Config/acl.php` | Role permissions, read through `acl()` (`Webkul\Core\Acl`); the `Bouncer` maps each route name to a permission key |
| `core` | `Admin/src/Config/system.php` | System configuration fields, read through `system_config()` (`Webkul\Core\SystemConfig`); saved values come from `core()->getConfigData($field, $channel, $locale)` |
| `payment_methods` | `Config/payment-methods.php` in Payment and each gateway | Payment methods |
| `carriers` | `Shipping/src/Config/carriers.php` | Shipping methods |
| `product_types` | `Product/src/Config/product_types.php` | Product types |
| `importers` | `DataTransfer/src/Config/importers.php` | Import types |

In core, the Admin package defines the menu items, permissions and configuration fields for every package. Your package merges its own files into the same keys; see [Menu](../package-development/menu.md), [Access Control List](../package-development/access-control-list.md) and [System Configuration](../package-development/system-configuration.md). `mergeConfigFrom()` keeps an entry that is already set, so a package changes the class behind a core payment method, carrier, product type or importer from its provider's `boot()` instead; see [Overriding a Core Type](../product-type-development/understanding-product-type-configuration.md#overriding-a-core-type).

## DataGrids

Admin listings extend `Webkul\DataGrid\DataGrid` and implement `prepareQueryBuilder()` and `prepareColumns()`, and optionally `prepareActions()` and `prepareMassActions()`. The controller returns `datagrid(ProductDataGrid::class)->process()` for the listing's AJAX request, and `process()` applies the requested filters, sorting, pagination and export. See [DataGrid](../package-development/datagrid.md).

## Helpers

Packages define global helper functions in their `src/Http/helpers.php`:

| Helper | Returns | Package |
|---|---|---|
| `core()` | `Webkul\Core\Core`: channels, locales, currencies and configuration values | Core |
| `menu()`, `acl()`, `system_config()` | The menu, ACL and system configuration registries | Core |
| `db_grammar()` | SQL fragments for the active database (MySQL, MariaDB or PostgreSQL) | Core |
| `clean_content()` | HTML passed through HTMLPurifier, with Blade syntax removed | Core |
| `bouncer()` | Permission checks for the signed-in admin | User |
| `two_factor_authentication()` | `Webkul\User\TwoFactorAuthentication` | User |
| `cart()` | The current cart (`Webkul\Checkout\Cart`) | Checkout |
| `payment()`, `shipping()` | The payment and shipping method registries | Payment, Shipping |
| `datagrid()` | An instance of the given DataGrid class | DataGrid |
| `themes()` | The theme registry (`Webkul\Theme\Themes`) | Theme |
| `bagisto_asset()` | The URL of a file a theme ships | Theme |
| `bagisto_theme_storage()` | `Webkul\Theme\ThemeStorage`, for media a theme section stores | Theme |
| `view_render_event()` | The rendered output of a view render event | Theme |
| `image_manager()`, `image_urls()` | Laravel's image manager, and the resized URLs of an image | ImageCache |
| `product_image()`, `product_video()`, `product_toolbar()` | Product media and listing toolbar helpers | Product |
| `magic_ai()` | The Generative AI (Magic AI) service | MagicAI |

[Understanding the Core Class](../advanced/understanding-core-class.md) documents `core()` method by method.

<a id="modular-design-in-bagisto"></a>
<a id="available-packages-in-bagisto"></a>

## Packages

Each package is autoloaded from `composer.json`, registers its service provider in `bootstrap/providers.php` and, when it has models, its `ModuleServiceProvider` in `config/concord.php`; [How a Package Is Wired In](./overview.md#how-a-package-is-wired-in) has the details, and [Inside a Package](./overview.md#inside-a-package) its directories. DebugBar, FPC, ImageCache, Installer, MagicAI, PhonePe and SocialShare have no module provider, and Admin, PayGlocal, Payment, Paypal, PayU, Razorpay, Rule, Shipping, Shop and Stripe have one with an empty `$models` list. `bootstrap/providers.php` also lists `Webkul\Core\Providers\EnvValidatorServiceProvider`, which stops the application when `DB_PREFIX` contains anything other than letters, digits and underscores.

| Package | What it holds |
|---|---|
| Admin | The admin: routes, controllers, views, DataGrids, reporting, the command palette, and the menu, ACL and configuration fields |
| Attribute | Attributes, attribute options, groups and families |
| BookingProduct | The booking product type: default, appointment, event, rental and table slots, and bookings |
| CartRule | Cart price rules, coupons and coupon usage |
| CatalogRule | Catalog price rules and their per-product prices |
| Category | The nested-set category tree and its translations |
| Checkout | The cart: items, addresses, payment and shipping rates |
| CMS | CMS pages and their translations |
| Core | Channels, locales, currencies, exchange rates, countries and states, saved configuration and newsletter subscribers; the `core()` helpers, the menu, ACL and configuration registries, the database grammar, the dynamic SMTP mailer and the storage driver |
| Customer | Customers, groups, addresses, notes, wishlists, compare items and the customer captcha |
| DataGrid | The DataGrid base class, column types, saved filters and export |
| DataTransfer | Imports: the importer registry, import batches and queued jobs |
| DebugBar | DebugBar integration, with a collector that groups models, views and queries by package |
| EUWithdrawal | EU right-of-withdrawal requests |
| FPC | The full page cache on `spatie/laravel-responsecache`: cache profile, hasher, replacers and invalidation listeners |
| GDPR | Customer data requests |
| ImageCache | Resized images served at `cache/{template}/{path}`, and the template registry |
| Installer | `bagisto:install`, the web installer and the seeders |
| Inventory | Inventory sources |
| MagicAI | Generative AI (Magic AI) through the Laravel AI SDK |
| Marketing | Campaigns, email templates, events, search terms, search synonyms and URL rewrites |
| Notification | Admin notifications for orders |
| Omnibus | Price snapshots and the 30-day lowest price for the EU Omnibus directive |
| PayGlocal | The PayGlocal payment gateway |
| Payment | The base payment class, cash on delivery, money transfer and the `payment_methods` registry |
| Paypal | PayPal Smart Button and PayPal Standard |
| PayU | The PayU payment gateway |
| PhonePe | The PhonePe payment gateway |
| Product | Products, product types, attribute values, images, videos, reviews, customer group prices, customizable options, inventories, the flat table, and the price, inventory, flat and search indexers |
| Razorpay | The Razorpay payment gateway |
| RMA | Returns: requests, items, reasons, rules, statuses, custom fields and messages |
| Rule | The condition engine that cart rules and catalog rules share |
| Sales | Orders, invoices, shipments, refunds, transactions and purchased downloadable links |
| Shipping | The base carrier class, flat rate and free shipping, and the `carriers` registry |
| Shop | The storefront: routes, controllers, views, Blade components, the customer account, the storefront's JSON API and WebMCP |
| Sitemap | XML sitemaps |
| SocialLogin | Customer sign-in through social accounts |
| SocialShare | Share links for products |
| Stripe | The Stripe payment gateway |
| Tax | Tax categories, tax rates and the mapping between them |
| Theme | The theme registry and view finder, `@bagistoVite`, Appearance sections, theme storage and view render events |
| User | Admins, roles, the `Bouncer` middleware and two-factor authentication |

## Related Pages

- [Architecture Overview](./overview.md): the project structure and the extension points.
- [Frontend Architecture](./frontend.md): how Blade, Vue.js and Vite fit together.
- [Package Development](../package-development/getting-started.md): build a package with these building blocks.
- [Event Listeners](../advanced/event-listeners.md): the events core fires and how to listen for them.

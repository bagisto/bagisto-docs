# Models

In Bagisto, models follow a specific architecture pattern that combines Laravel's Eloquent with additional layers for modularity and flexibility. Unlike standard Laravel applications, Bagisto uses the [konekt/concord](https://packagist.org/packages/konekt/concord) package for modular development and implements the Repository pattern for data access.

## Bagisto's Model Architecture

Bagisto's model architecture consists of several key components:

### 1. **Konekt/Concord Integration**
Concord enables true modular development by allowing packages to define their own models, migrations, and business logic while maintaining loose coupling between modules.

### 2. **Contract-Based Design**
Each model implements a contract (interface) that defines its public API. This allows for easy model swapping and testing without breaking dependent code.

### 3. **Model Proxies**
Proxies act as intermediaries that enable runtime model resolution. This means packages can extend or override existing models without modifying core files.

### 4. **Repository Pattern**
Bagisto uses the Repository pattern to abstract data access logic. Repositories provide a consistent interface for data operations while keeping business logic separate from data persistence concerns.

::: info Why This Architecture?
This layered approach allows Bagisto to be highly modular and extensible. Developers can create packages that integrate seamlessly with the core system while maintaining the ability to customize and extend functionality.
:::

## Creating Models

When creating models in Bagisto, you have two approaches: using the package generator for convenience, or manually creating the components for more control. Models in Bagisto follow Laravel's Eloquent ORM but with additional architectural layers.

Learn more about Laravel Eloquent: https://laravel.com/docs/eloquent

Below, we'll create a `ReturnRequest` model for an RMA package to demonstrate both approaches.

### Using Bagisto Package Generator

The fastest way to create a complete model structure is using Bagisto's package generator. This command creates all three required components in one go:

```bash
php artisan package:make-model ReturnRequest Webkul/RMA
```

::: tip Package Generator Benefits
The generator automatically creates the proper file structure, namespaces, and basic implementations following Bagisto conventions. This saves time and ensures consistency.
:::

#### Generated Files Overview

The package generator creates three interconnected files that work together:

**1. Model Contract** - `packages/Webkul/RMA/src/Contracts/ReturnRequest.php`
```php
<?php

namespace Webkul\RMA\Contracts;

interface ReturnRequest {}
```

**2. Model Proxy** - `packages/Webkul/RMA/src/Models/ReturnRequestProxy.php`
```php
<?php

namespace Webkul\RMA\Models;

use Konekt\Concord\Proxies\ModelProxy;

class ReturnRequestProxy extends ModelProxy {}
```

**3. Base Model** - `packages/Webkul/RMA/src/Models/ReturnRequest.php`
```php
<?php

namespace Webkul\RMA\Models;

use Illuminate\Database\Eloquent\Model;
use Webkul\RMA\Contracts\ReturnRequest as ReturnRequestContract;

class ReturnRequest extends Model implements ReturnRequestContract
{
    protected $fillable = [];
}
```

### Using Laravel Artisan Command (Manual Approach)

If you prefer understanding each component or need more control, you can create each file manually. This approach creates the exact same three files as the package generator, helping you understand how the pieces fit together.

#### Step 1: Create the Contract

**File:** `packages/Webkul/RMA/src/Contracts/ReturnRequest.php`

```bash
mkdir -p packages/Webkul/RMA/src/Contracts
```

```php
<?php

namespace Webkul\RMA\Contracts;

interface ReturnRequest {}
```

#### Step 2: Create the Proxy

**File:** `packages/Webkul/RMA/src/Models/ReturnRequestProxy.php`

```bash
mkdir -p packages/Webkul/RMA/src/Models
```

```php
<?php

namespace Webkul\RMA\Models;

use Konekt\Concord\Proxies\ModelProxy;

class ReturnRequestProxy extends ModelProxy {}
```

#### Step 3: Create the Base Model

**File:** `packages/Webkul/RMA/src/Models/ReturnRequest.php`

```bash
php artisan make:model ReturnRequest
# Move from app/Models to packages/Webkul/RMA/src/Models
```

```php
<?php

namespace Webkul\RMA\Models;

use Illuminate\Database\Eloquent\Model;
use Webkul\RMA\Contracts\ReturnRequest as ReturnRequestContract;

class ReturnRequest extends Model implements ReturnRequestContract
{
    protected $fillable = [];
}
```

::: tip Comparing Approaches
**Package Generator Result = Manual Creation Result**

Both approaches create identical basic files. The manual approach helps you understand the structure, while the package generator saves time. Choose based on your learning preference!
:::

## Completing the Model Implementation

Whether you used the package generator or manual approach, you now have the same basic structure. Next, customize the base model to work with your `rma_requests` migration table:

**Transform your basic model into a fully functional RMA model:**

```php{10-21}
<?php

namespace Webkul\RMA\Models;

use Illuminate\Database\Eloquent\Model;
use Webkul\RMA\Contracts\ReturnRequest as ReturnRequestContract;

class ReturnRequest extends Model implements ReturnRequestContract
{
    protected $table = 'rma_requests';

    protected $fillable = [
        'customer_id',
        'order_id',
        'product_sku',
        'product_name',
        'product_quantity',
        'status',
        'reason',
        'admin_notes',
    ];
}
```

::: info Model Properties Explained
**Table Property Convention:**
- **`protected $table = 'rma_requests';`** - Explicitly defines the table name for this model
- **Why needed?** Laravel would derive `return_requests` from the class name, which is not the table we created. Declare `$table` whenever the two differ, and consider declaring it anyway so the mapping survives a class rename; many core models do, and the rest rely on the convention
- **Best Practice:** Prefix table names with the package name (`blog_posts`, `loyalty_points`) when a bare name could collide with a core Bagisto table or another package

**Contract location is not optional:**
- Concord derives the contract from the model's class name: `Webkul\RMA\Models\ReturnRequest` must implement `Webkul\RMA\Contracts\ReturnRequest`. Put the interface anywhere else and registration fails.

**Casts and relationships:**
- Core models declare `protected $casts` (an array), not a `casts()` method. Boolean columns must be cast, or they read back as `1`/`0` on MySQL and `true`/`false` on PostgreSQL.
- Relationships always point at the proxy, never the concrete class: `$this->belongsTo(OrderProxy::modelClass(), 'order_id')`. That is what keeps a relationship working when another package overrides the related model.

**Fillable Array:**
- **Purpose:** Defines which attributes can be mass-assigned using `create()` or `update()` methods
- **Security:** Protects against mass assignment vulnerabilities by explicitly whitelisting safe attributes
- **Convention:** Include all user-input fields that should be mass-assignable, excluding `id`, `created_at`, `updated_at` (automatically managed)
- **Rule of Thumb:** If a field appears in forms or API requests, it should be in the fillable array

**What's Protected:**
- Primary keys (`id`) are never fillable
- Timestamps (`created_at`, `updated_at`) are automatically managed by Laravel
- Sensitive fields like authentication tokens should use `$guarded` instead
:::

## Registering Models with Concord

Now that your model is complete, you need to register it with Bagisto's modular system. This is where the **ModuleServiceProvider** comes in.

### Why ModuleServiceProvider?

The ModuleServiceProvider serves a crucial purpose in Bagisto's architecture:

- **Model Registration**: Tells Concord about your package's models
- **Proxy Resolution**: Enables runtime model resolution and extensibility
- **Package Discovery**: Allows Bagisto to automatically discover your package components
- **Dependency Management**: Ensures proper loading order of package components

Without this registration, Bagisto won't know about your models and they won't be available for dependency injection or proxy resolution.

### Creating the ModuleServiceProvider

Create `packages/Webkul/RMA/src/Providers/ModuleServiceProvider.php`:

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Providers
                ├── ModuleServiceProvider.php
                └── RMAServiceProvider.php
```

```php
<?php

namespace Webkul\RMA\Providers;

use Konekt\Concord\BaseModuleServiceProvider;
use Webkul\RMA\Models\ReturnRequest;

class ModuleServiceProvider extends BaseModuleServiceProvider
{
    /**
     * Models.
     *
     * @var array
     */
    protected $models = [
        ReturnRequest::class,
    ];
}
```

::: info Understanding the Registration
**What This Does:**

- **`$models` Array**: Lists all models in your package that should be registered with Concord
- **`BaseModuleServiceProvider`**: Provides the functionality to register models, enums, and other components. It also exposes `$enums` and `$requests` arrays for a package that ships enums or form requests it wants resolvable through Concord
- **Automatic Discovery**: Concord uses this list to set up proxies and dependency injection

This registration enables features like model swapping, where other packages can extend or replace your models without modifying your code.

Several core packages extend `Webkul\Core\Providers\CoreModuleServiceProvider` instead. It is a thin subclass that skips Concord's migration publishing step and is otherwise identical; either base class works.
:::

### The manifest file

Bagisto configures Concord with `Webkul\Core\CoreConvention`, which looks for a module manifest at `src/Resources/manifest.php`. Registration works without it; the manifest supplies the name and version that `php artisan concord:modules` lists, and every core package ships one, so add it:

**File:** `packages/Webkul/RMA/src/Resources/manifest.php`

```php
<?php

return [
    'name' => 'Webkul Bagisto RMA',
    'version' => core()->version(),
];
```

### Registering with Concord

Finally, register your ModuleServiceProvider with Bagisto's Concord system by adding it to `config/concord.php`:

- Open the configuration file at `config/concord.php` in your Laravel application.
- Inside the `modules` array, add the `ModuleServiceProvider` class to register it with Concord.

```php{6}
<?php

use Webkul\RMA\Providers\ModuleServiceProvider;

return [
    'modules' => [
        // Other service providers...
        ModuleServiceProvider::class,
    ],
];
```

## Testing Your Complete Setup

Verify everything works together:

```bash
php artisan tinker
```

```php
use Webkul\RMA\Models\ReturnRequest;
use Webkul\RMA\Models\ReturnRequestProxy;

// Test model creation via direct model
ReturnRequest::create([
    'customer_id' => 1,
    'order_id' => 1,
    'product_sku' => 'SAMPLE-001',
    'product_name' => 'Test Product 1',
    'product_quantity' => 1,
    'reason' => 'Defective Item',
]);

// Test model creation via proxy
ReturnRequestProxy::create([
    'customer_id' => 2,
    'order_id' => 2,
    'product_sku' => 'SAMPLE-002',
    'product_name' => 'Test Product 2',
    'product_quantity' => 1,
    'reason' => 'Defective Item',
]);
```

::: info Testing Tips
**Quick Verification Commands:**
- Check if migration ran: `php artisan migrate:status`
- Clear cache if needed: `php artisan optimize:clear`
:::

## Troubleshooting Common Issues

When working with Bagisto models, you might encounter several common issues. Here's how to identify and resolve them:

### 1. Model Proxy Registration Errors

**Error:**
```text
TypeError: Konekt\Concord\Proxies\ModelProxy::targetClass(): Return value must be of type string, null returned.
```

**Cause:** This error occurs when the model is not properly registered with Concord or the ModuleServiceProvider is not loaded.

**Solution:**
1. **Verify ModuleServiceProvider Registration:**
   ```php
   // Check config/concord.php contains your provider
   'modules' => [
       \Webkul\RMA\Providers\ModuleServiceProvider::class,
   ],
   ```

2. **Ensure Model is Listed in ModuleServiceProvider:**
   ```php
   protected $models = [
       \Webkul\RMA\Models\ReturnRequest::class, // Must be the actual model, not proxy
   ];
   ```

3. **Clear Cache:**
   ```bash
   php artisan optimize:clear
   ```

### 2. Table Not Found Errors

**Error:**
```text
SQLSTATE[42S02]: Base table or view not found: 1146 Table 'bagisto.rma_requests' doesn't exist
```

**Solution:**
1. **Run Migrations:**
   ```bash
   php artisan migrate
   ```

2. **Check Migration Status:**
   ```bash
   php artisan migrate:status
   ```

3. **Verify Table Name in Model:**
   ```php
   protected $table = 'rma_requests'; // Must match migration table name
   ```

### 3. Namespace and Autoloading Issues

**Error:**
```text
Class 'Webkul\RMA\Models\ReturnRequest' not found
```

**Solution:**
1. **Verify PSR-4 Autoloading in composer.json:**
   ```json
   "autoload": {
       "psr-4": {
           "Webkul\\RMA\\": "packages/Webkul/RMA/src/"
       }
   }
   ```

2. **Update Composer Autoload:**
   ```bash
   composer dump-autoload
   ```

### 4. Fillable Attribute Errors

**Error:**
```text
Illuminate\Database\Eloquent\MassAssignmentException: customer_id
```

**Solution:**
```php
// Ensure all required fields are in fillable array
protected $fillable = [
    'customer_id',
    'order_id',
    'product_sku',
    'product_name',
    'product_quantity',
    'status',
    'reason',
    'admin_notes',
];
```

### 5. Contract Implementation Issues

**Error:**
```text
Class must implement interface Webkul\RMA\Contracts\ReturnRequest
```

**Solution:**
```php
// Ensure model implements contract
class ReturnRequest extends Model implements ReturnRequestContract
{
    // Model implementation
}
```

## Overriding Core Models (Optional)

Sometimes you need to extend or modify existing Bagisto core models (like Product, Customer, Order) to add custom functionality. Bagisto's Concord architecture makes this possible without modifying core files.

::: info When to Override Models
Model overriding is an **advanced technique** used when you need to:
- Add custom attributes or relationships to core models
- Modify existing model behavior
- Integrate third-party services with core entities
- Create specialized business logic for existing models
:::

### Quick Override Example

Here's how to override the core `Product` model to add custom functionality:

**1. Create Your Extended Model**

Create `packages/Webkul/RMA/src/Models/Product.php`:

```php
<?php

namespace Webkul\RMA\Models;

use Webkul\Product\Models\Product as BaseProduct;

class Product extends BaseProduct
{
    /**
     * Get return requests for this product.
     */
    public function returnRequests()
    {
        return $this->hasMany(ReturnRequestProxy::modelClass(), 'product_sku', 'sku');
    }

    /**
     * Check if product is returnable.
     */
    public function isReturnable(): bool
    {
        return ! in_array($this->type, ['virtual', 'downloadable']);
    }
}
```

The registered product types are `simple`, `configurable`, `grouped`, `bundle`, `downloadable`, `virtual` and `booking` (see `packages/Webkul/Product/src/Config/product_types.php`). Note that `status` is an EAV attribute, not a column on `products`, so it is read through the attribute layer rather than as a plain property.

**2. Register the Override**

Register the override in your package's `ModuleServiceProvider` by keying the `$models` entry with the contract it replaces:

```php{12}
<?php

namespace Webkul\RMA\Providers;

use Konekt\Concord\BaseModuleServiceProvider;
use Webkul\Product\Contracts\Product;
use Webkul\RMA\Models\ReturnRequest;

class ModuleServiceProvider extends BaseModuleServiceProvider
{
    /**
     * Models.
     *
     * @var array
     */
    protected $models = [
        ReturnRequest::class,
        Product::class => \Webkul\RMA\Models\Product::class,
    ];
}
```

::: tip Model Override Registration
A string key in `$models` is treated as the contract and the value as the model that now implements it. When any part of Bagisto requests the Product contract, or calls `ProductProxy::modelClass()`, your extended model is used instead of the core model. Because Concord registers modules in the order of `config/concord.php`, list your module after the one it overrides.
:::

**3. Use Everywhere via Repository**

Following Bagisto's best practices, access your extended model through repositories:

```php
// In controllers, services, etc.
use Webkul\Product\Repositories\ProductRepository;

class SomeController extends Controller
{
    public function __construct(
        protected ProductRepository $productRepository
    ) {}

    public function checkReturnable($productId)
    {
        $product = $this->productRepository->find($productId);

        // This automatically uses your extended model
        return $product->isReturnable();
    }
}
```

::: tip Repository Pattern Benefits
- **Consistent Interface**: All data access goes through repositories
- **Automatic Model Resolution**: Repositories use dependency injection to get the correct model
- **Business Logic**: Repositories can contain query logic and business rules
- **Testability**: Easy to mock repositories for unit testing
:::

**Alternative: Direct Contract Usage (When Needed)**

```php
// For specific cases where you need direct model access
use Webkul\Product\Contracts\Product as ProductContract;

class SpecialService
{
    public function processProduct(ProductContract $product)
    {
        // Direct model usage - automatically gets your extended model
        return $product->isReturnable();
    }
}
```

::: warning Important Notes
- **Always extend the base model**, never replace it entirely
- **Use dependency injection** with contracts for automatic resolution
- **Test thoroughly** as overrides affect the entire application
- **Consider alternatives** like observers or custom services for simple additions
:::

## Your Next Step

With your model complete and registered, you now need to implement Bagisto's Repository pattern. Repositories abstract your data access logic and provide a consistent interface for data operations while keeping business logic separate from data persistence.

**Continue to:** **[Repositories](./repositories.md)** - Implement the Repository pattern for your RMA model

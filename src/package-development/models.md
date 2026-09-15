# Models

On this page you give the `faqs` table a model that any package can replace without editing the code that uses it. Bagisto does this with [konekt/concord](https://github.com/artkonekt/concord): every model comes with a contract and a proxy, and a module provider registers them.

| Part | File | Role |
|---|---|---|
| Contract | `src/Contracts/Faq.php` | The interface other code type-hints and resolves from the container |
| Model | `src/Models/Faq.php` | The Eloquent model, implementing the contract |
| Proxy | `src/Models/FaqProxy.php` | Resolves to whichever model is registered for the contract right now |
| Module provider | `src/Providers/ModuleServiceProvider.php` | Registers the models with Concord; listed in `config/concord.php` |

<a id="creating-models"></a>

## Create the Contract

**File:** `packages/Webkul/Faq/src/Contracts/Faq.php`

```php
<?php

namespace Webkul\Faq\Contracts;

interface Faq {}
```

## Create the Proxy

**File:** `packages/Webkul/Faq/src/Models/FaqProxy.php`

```php
<?php

namespace Webkul\Faq\Models;

use Konekt\Concord\Proxies\ModelProxy;

class FaqProxy extends ModelProxy {}
```

<a id="completing-the-model-implementation"></a>

## Create the Model

**File:** `packages/Webkul/Faq/src/Models/Faq.php`

```php
<?php

namespace Webkul\Faq\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Webkul\Core\Models\ChannelProxy;
use Webkul\Faq\Contracts\Faq as FaqContract;

class Faq extends Model implements FaqContract
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'faqs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'channel_id',
        'question',
        'answer',
        'sort_order',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'sort_order' => 'integer',
        'status' => 'boolean',
    ];

    /**
     * Get the channel the question belongs to.
     */
    public function channel(): BelongsTo
    {
        return $this->belongsTo(ChannelProxy::modelClass());
    }
}
```

The model implements its contract, and `$casts` makes `status` a real boolean on every database. `channel()` points at `ChannelProxy::modelClass()`, never at `Webkul\Core\Models\Channel`, so the relationship follows a package that replaces the channel model.

<a id="registering-models-with-concord"></a>
<a id="creating-the-moduleserviceprovider"></a>
<a id="why-moduleserviceprovider"></a>

## Register the Model with Concord

Create the module provider, listing every model of the package:

**File:** `packages/Webkul/Faq/src/Providers/ModuleServiceProvider.php`

```php
<?php

namespace Webkul\Faq\Providers;

use Webkul\Core\Providers\CoreModuleServiceProvider;
use Webkul\Faq\Models\Faq;

class ModuleServiceProvider extends CoreModuleServiceProvider
{
    /**
     * Models.
     *
     * @var array
     */
    protected $models = [
        Faq::class,
    ];
}
```

Concord derives each contract from its model's class name, one namespace level up: `Webkul\Faq\Models\Faq` implements `Webkul\Faq\Contracts\Faq`, and a contract anywhere else isn't found. Almost every core module extends `Webkul\Core\Providers\CoreModuleServiceProvider`; Concord's own `Konekt\Concord\BaseModuleServiceProvider` works too.

### The Manifest File

`config/concord.php` sets `Webkul\Core\CoreConvention` as Concord's convention, which reads a module's name and version from `src/Resources/manifest.php`. Concord includes the file without checking that it exists, so every module needs one:

**File:** `packages/Webkul/Faq/src/Resources/manifest.php`

```php
<?php

return [
    'name' => 'Webkul Faq',
    'version' => core()->version(),
];
```

<a id="registering-with-concord"></a>

### List the Module

Add the module provider to the `modules` array of `config/concord.php`, after the core modules:

**File:** `config/concord.php`

```php{11}
<?php

use Webkul\Admin\Providers\ModuleServiceProvider;

return [
    // ...

    'modules' => [
        ModuleServiceProvider::class,
        // ...
        Webkul\Faq\Providers\ModuleServiceProvider::class,
    ],
];
```

<a id="testing-your-complete-setup"></a>

## Test It

Clear the cached configuration first:

```bash
php artisan optimize:clear
```

1. List the modules. **Webkul Faq** is listed with the Bagisto version:

   ```bash
   php artisan concord:modules
   ```

2. List the models. The `Faq` contract and model are listed:

   ```bash
   php artisan concord:models
   ```

3. Resolve the proxy. The command prints `"Webkul\Faq\Models\Faq"`:

   ```bash
   php artisan tinker --execute="dump(Webkul\Faq\Models\FaqProxy::modelClass());"
   ```

<a id="quick-override-example"></a>
<a id="overriding-core-models-optional"></a>

## Extending a Core Model

Your package can also add behaviour to a model it doesn't own. Choose the lightest option that works.

**A relationship only.** Register it from your provider's `boot()` method with Eloquent's `resolveRelationUsing()`. A relationship added to the core class also reaches any subclass another package registers in its place:

```php
Channel::resolveRelationUsing('faqs', function ($channel) {
    return $channel->hasMany(FaqProxy::modelClass());
});
```

Here `Channel` is `Webkul\Core\Models\Channel` and `FaqProxy` is `Webkul\Faq\Models\FaqProxy`. `core()->getCurrentChannel()->faqs` then returns the channel's questions.

**Methods, casts or attributes.** Extend the core model and register your class for its contract. A string key in `$models` names the contract being replaced:

```php
protected $models = [
    Faq::class,
    ChannelContract::class => Channel::class,
];
```

Here `ChannelContract` imports `Webkul\Core\Contracts\Channel`, and `Channel` imports your `Webkul\Faq\Models\Channel`, which extends `Webkul\Core\Models\Channel`. Every repository and proxy that resolves the contract now returns your class.

::: warning One Override per Contract
Concord keeps a single model per contract, and the module registered last wins, so keep your module after the one it overrides in `config/concord.php`. Two packages that replace the same model conflict, which is why a relationship added with `resolveRelationUsing()` is the safer choice when it is enough.
:::

<a id="troubleshooting-common-issues"></a>

## Things to Watch

| Error | Cause |
|---|---|
| `ModelProxy::targetClass(): Return value must be of type string, null returned` | The model isn't registered: the module provider is missing from `config/concord.php`, the model is missing from `$models`, or the configuration is cached |
| `Class "Webkul\Faq\Models\Faq" not found` | The `Webkul\\Faq\\` entry is missing from `composer.json`, or `composer dump-autoload` hasn't run since it was added |
| `MassAssignmentException` | A column passed to `create()` or `update()` isn't in `$fillable` |
| `include(…/Resources/manifest.php): Failed to open stream` from `concord:modules` | The module has no `src/Resources/manifest.php` |

## Next Step

The model is registered. Controllers and commands never query it directly; they go through a repository.

**Continue to:** [Repositories](./repositories.md)

# Repositories

On this page you add `FaqRepository`, the one place the package reads and writes FAQ data. Controllers, listeners, commands and seeders call repository methods instead of querying models or tables; the single exception is a DataGrid's `prepareQueryBuilder()`. Every repository extends `Webkul\Core\Eloquent\Repository`, which builds on the [Prettus L5 Repository](https://github.com/andersao/l5-repository) package.

<a id="creating-repositories"></a>
<a id="custom-query-methods"></a>

## Create the Repository

**File:** `packages/Webkul/Faq/src/Repositories/FaqRepository.php`

```php
<?php

namespace Webkul\Faq\Repositories;

use Illuminate\Database\Eloquent\Collection;
use Webkul\Core\Eloquent\Repository;

class FaqRepository extends Repository
{
    /**
     * Specify the model contract class name.
     */
    public function model(): string
    {
        return 'Webkul\Faq\Contracts\Faq';
    }

    /**
     * Get the active questions of a channel, in their sort order.
     */
    public function getActiveForChannel(int $channelId): Collection
    {
        return $this->model
            ->where('channel_id', $channelId)
            ->where('status', true)
            ->orderBy('sort_order')
            ->get();
    }
}
```

`model()` returns the **contract**, not the model class. The repository resolves it from the container, where Concord has bound it to the registered model, so a package that overrides the model changes what the repository returns without touching this file.

`getActiveForChannel()` is the query the storefront page needs. Name custom methods after what they return, so the controller that calls one stays free of query code.

<a id="available-repository-methods"></a>
<a id="basic-crud-operations"></a>
<a id="advanced-query-methods"></a>
<a id="what-the-base-repository-adds"></a>

## The Methods You Get

| Method | Returns |
|---|---|
| `create(array $attributes)` | The new model |
| `update(array $attributes, $id)` | The updated model; a missing id throws `ModelNotFoundException` |
| `delete($id)` | `true`; call `findOrFail()` first, because a missing id fails with an error rather than a not-found exception |
| `find($id)`, `findOrFail($id)` | The model, or `null`, or a not-found exception |
| `findOneByField($field, $value)`, `findOneWhere(array $where)` | The first match, or `null` |
| `findByField($field, $value)`, `findWhere(array $where)`, `findWhereIn($field, array $values)` | A collection |
| `all()`, `paginate($limit)` | A collection, or a paginator of 15 per page by default (`config/repository.php`) |
| `count(array $where = [])`, `sum($column)`, `avg($column)` | An aggregate |
| `with($relations)`, `orderBy($column, $direction)` | The repository, so the next read applies them |
| `getModel()` | The model instance |

`find()`, `findOrFail()`, `findOneByField()`, `findOneWhere()`, `count()`, `sum()`, `avg()` and `getModel()` come from `Webkul\Core\Eloquent\Repository`; the rest are Prettus's.

::: info Caching Is Opt-In
`config/repository.php` ships with caching disabled and enables it only for the repositories listed under `cache.repositories`, so your repository caches nothing unless you add it. See [Caching Your Own Repository](../advanced/cache-strategy.md#caching-your-own-repository).
:::

## Seed Sample Questions

A seeder is optional, but it gives the DataGrid and the storefront page rows to show before you build the forms. Resolve the repository in `run()`:

**File:** `packages/Webkul/Faq/src/Database/Seeders/FaqSeeder.php`

```php
<?php

namespace Webkul\Faq\Database\Seeders;

use Illuminate\Database\Seeder;
use Webkul\Faq\Repositories\FaqRepository;

class FaqSeeder extends Seeder
{
    /**
     * Seed sample questions for the default channel.
     */
    public function run(FaqRepository $faqRepository): void
    {
        $faqs = [
            [
                'question' => 'How long does delivery take?',
                'answer' => 'Most orders arrive within three to five working days.',
            ],
            [
                'question' => 'Can I return an item?',
                'answer' => 'Yes. Contact us within 30 days of delivery to arrange a return.',
            ],
        ];

        foreach ($faqs as $index => $faq) {
            $faqRepository->create([
                ...$faq,
                'channel_id' => core()->getDefaultChannel()->id,
                'sort_order' => $index + 1,
                'status' => true,
            ]);
        }
    }
}
```

Nothing runs a package seeder automatically. Run it by its full class name:

```bash
php artisan db:seed --class="Webkul\Faq\Database\Seeders\FaqSeeder"
```

<a id="testing-your-repository"></a>

## Test It

1. Print the active questions of the default channel. The command prints the two seeded questions:

   ```bash
   php artisan tinker --execute="dump(app(Webkul\Faq\Repositories\FaqRepository::class)->getActiveForChannel(core()->getDefaultChannel()->id)->pluck('question'));"
   ```

## Things to Watch

- **Add a method rather than querying elsewhere.** When a controller needs data the repository can't return, the fix is a new repository method, not `DB::table()` or `Faq::where()` in the controller.
- **Raw SQL goes through `db_grammar()`** so it runs on PostgreSQL as well as MySQL, for example `DB::raw(db_grammar()->concat('first_name', "' '", 'last_name'))`. See [Database Compatibility](../advanced/database-compatibility.md).
- **`with()` and `orderBy()` hold state until the next read.** Call them immediately before the read they belong to; the repository resets them afterwards.
- **Change a core repository by binding a subclass** in your provider's `register()`. Controllers, listeners, jobs and other repositories resolve repositories from the container, so they all receive yours. Caching is switched on by class name, so a subclass of a cached core repository reads uncached until you [list it](../advanced/cache-strategy.md#caching-your-own-repository) as well.

## Next Step

The data layer is complete. Next, give the admin and the storefront URLs to reach it.

**Continue to:** [Routes](./routes.md)

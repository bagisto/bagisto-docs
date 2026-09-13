# Database Compatibility

Bagisto runs on MySQL 8.0, MariaDB 10.11 and PostgreSQL 16, and its continuous integration runs the whole Pest suite and the Playwright suites against all three. A package or customization that only ever ran on MySQL will usually break on PostgreSQL in one of a handful of predictable ways. This page lists the abstractions Bagisto provides so you do not have to write dialect-specific SQL, and the pitfalls those abstractions exist for.

::: info Availability
PostgreSQL support, the `db_grammar()` helper and everything else on this page belong to Bagisto 2.5. **Bagisto 2.4 supports MySQL and MariaDB only** and has no `db_grammar()`; on 2.4 the MySQL syntax shown in the right-hand columns is what you write directly.
:::

## Which database is running

`Webkul\Core\Enums\SupportedDatabaseEnum` names the supported drivers and answers the question at runtime:

```php
use Webkul\Core\Enums\SupportedDatabaseEnum;

SupportedDatabaseEnum::MYSQL;    // 'mysql'
SupportedDatabaseEnum::MARIADB;  // 'mariadb'
SupportedDatabaseEnum::PGSQL;    // 'pgsql'

SupportedDatabaseEnum::isPostgres();   // bool
SupportedDatabaseEnum::isMysql();      // true for MySQL and MariaDB
SupportedDatabaseEnum::currentDriver(); // app('db')->getDriverName()
```

The installer offers the three connections and fills in the default port (3306 or 5432); the `.env` keys are Laravel's usual `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` and `DB_PREFIX`.

::: warning `pdo_pgsql`
`composer.json` requires `ext-pdo_mysql` but not `ext-pdo_pgsql`, and the installer's requirement check does not verify a database driver extension. On a PostgreSQL host make sure `pdo_pgsql` is loaded before installing; CI installs it explicitly.
:::

## The `db_grammar()` helper

Every place Bagisto needs a piece of SQL that differs between dialects goes through `db_grammar()`, which returns an implementation of `Webkul\Core\Contracts\DatabaseGrammar` chosen by the connection driver: `Webkul\Core\Helpers\Database\Grammar\MySqlGrammar` for MySQL and MariaDB, `PgSqlGrammar` for PostgreSQL. It is bound as a singleton in `CoreServiceProvider`.

Every method returns a raw SQL string. Wrap it in `DB::raw()`, `orderByRaw()` or `whereRaw()` yourself, prefix table names with `DB::getTablePrefix()`, and never pass user input into these methods; they interpolate their arguments verbatim. Use bindings for values.

| Method | MySQL / MariaDB | PostgreSQL |
|---|---|---|
| `concat(...$parts)` | `CONCAT(a, b)` | `(COALESCE(a,'') \|\| COALESCE(b,''))` |
| `concatWs($separator, ...$parts)` | `CONCAT_WS(sep, ...)` | `CONCAT_WS(sep, ...)` |
| `groupConcat($column, $separator = ',', $distinct = false, $orderBy = null, $direction = 'ASC')` | `GROUP_CONCAT([DISTINCT] col [ORDER BY …] SEPARATOR sep)` | `STRING_AGG([DISTINCT] NULLIF(col::text,''), sep [ORDER BY …])` |
| `findInSet($needle, $column)` (deprecated, prefer a pivot table) | `FIND_IN_SET(n, col)` | `n = ANY(STRING_TO_ARRAY(col, ','))` |
| `orderByField($column, array $values)` | `FIELD(col, 1, 2, 3)` | `COALESCE(ARRAY_POSITION(ARRAY[1,2,3], col), n+1)` |
| `caseInsensitiveLike()` | `LIKE` | `ILIKE` |
| `caseSensitiveLike()` | `LIKE BINARY` | `LIKE` |
| `castToString($expression, $length = 255)` | `CAST(expr AS CHAR(len))` | `CAST(expr AS VARCHAR(len))` |
| `now()` | `NOW()` | `NOW()` |
| `dateFormat($column, $format)` (MySQL placeholders) | `DATE_FORMAT(col, fmt)` | `TO_CHAR(col, fmt)` with `%Y`, `%m`, `%d`, `%H`, `%i`, `%s` translated |
| `dateDiff($date1, $date2)` | `DATEDIFF(d1, d2)` | `(d1::date - d2::date)` |
| `extractDatePart($part, $column)` | `MONTH(col)`, `YEAR(col)`, … | `EXTRACT(part FROM col)::integer` |
| `monthDay($column)` | `DATE_FORMAT(col, '%m-%d')` | `TO_CHAR(col, 'MM-DD')` |
| `fromUnixtime($column)` | `FROM_UNIXTIME(col)` | `TO_TIMESTAMP(col)` |
| `jsonExtractText($column, $path)` | `json_unquote(json_extract(col, '$.key'))` | `(col::jsonb->>'key')` |
| `jsonExtractNumeric($column, $path)` | `COALESCE(CAST(… AS SIGNED), 0)` | `COALESCE(NULLIF(col::jsonb->>'key','')::bigint, 0)` |

JSON paths are written in MySQL form (`$.key` or `$."key"`) and translated for PostgreSQL.

Examples from core:

**File:** `packages/Webkul/Admin/src/DataGrids/Customers/CustomerDataGrid.php`

```php
$queryBuilder = DB::table('customers')
    ->addSelect(DB::raw(db_grammar()->concat($tablePrefix.'customers.first_name', "' '", $tablePrefix.'customers.last_name').' as full_name'));

$this->addFilter('full_name', DB::raw(db_grammar()->concat($tablePrefix.'customers.first_name', "' '", $tablePrefix.'customers.last_name')));
```

**File:** `packages/Webkul/Product/src/Jobs/Search/IndexProducts.php`

```php
->orderByRaw(db_grammar()->orderByField('id', $this->productIds))
```

**File:** `packages/Webkul/DataTransfer/src/Helpers/Import.php`

```php
DB::raw('SUM('.db_grammar()->jsonExtractNumeric('summary', '$."created"').') AS created')
```

## What breaks on PostgreSQL, and what to do instead

| Pitfall | Why | Do this |
|---|---|---|
| `where('name', 'like', …)` for a search box | `LIKE` is case-sensitive on PostgreSQL | `where('name', db_grammar()->caseInsensitiveLike(), …)`. DataGrid text search already does this through `Column::likeOperator()` |
| `CAST(x AS CHAR)` | On PostgreSQL `CHAR` with no length is one character, so ids become `"1"` | `db_grammar()->castToString('x')` |
| A `CASE` whose branches return different types | PostgreSQL requires one type; MySQL coerces | Cast both branches to the same type |
| `SELECT a, b … GROUP BY a` | PostgreSQL requires every non-aggregated selected column in `GROUP BY` | Group by all of them, as `CustomerDataGrid` does, or aggregate the rest |
| `DISTINCT` combined with `ORDER BY` on an unselected column | Rejected by PostgreSQL | Core's price indexer moved from `distinct()` to `groupBy('products.id')` |
| An empty string saved into a date, integer or boolean column | MySQL coerces `''`; PostgreSQL raises a type error | Add a set mutator on the model that turns `''` into `null` or the default. Do not sanitize in the controller; the value has to be right whichever path writes it |
| Reading a boolean column without a cast | MySQL returns `1`/`0`, PostgreSQL `true`/`false`, so `=== 1` checks fail | Add `'boolean'` to the model's `$casts` |
| Inserting rows with explicit ids, as seeders do | PostgreSQL sequences do not advance past an explicit id, so the next insert collides | Use the `Webkul\Core\Concerns\SyncsPostgresSequences` trait and call `$this->syncPostgresSequences(['categories'])` after the insert; it is a no-op on MySQL |
| Thousands of rows in one `insert()` | PostgreSQL caps a statement at 65 535 bound parameters | Chunk; Omnibus inserts 500 rows per statement |
| `json()` columns queried with `->>` | Works, but `jsonb` is what core migrations now use and what the grammar's JSON methods assume | Prefer `$table->jsonb()` in new migrations |
| Raw MySQL functions in migrations or seeders (`NOW()`, `IF()`, `CONCAT()`) | Not portable | Use the schema builder, or `db_grammar()` for expressions |

## Testing against every database

The parallel test databases are created once and not re-migrated, and CI runs the suite on each engine. Locally, point `DB_CONNECTION` at a PostgreSQL database and run the suite you touched:

```bash
DB_CONNECTION=pgsql DB_PORT=5432 vendor/bin/pest --testsuite="Admin Feature Test"
```

The [Testing Workflow](./testing.md) page has the full setup; the [DataGrid](../package-development/datagrid.md) and [Repositories](../package-development/repositories.md) pages show where the grammar fits in a package.

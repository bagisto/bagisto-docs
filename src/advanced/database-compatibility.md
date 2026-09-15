# Database Compatibility

Bagisto runs on MySQL 8.0, MariaDB 10.11 and PostgreSQL 16, and the Pest and Playwright workflows in `.github/workflows` test all three (the `mysql:8.0`, `mariadb:10.11` and `postgres:16` images). Code that only ever ran on MySQL usually breaks on PostgreSQL in a handful of predictable ways; this page lists the abstractions that keep your SQL portable and the pitfalls they exist for. PostgreSQL support and `db_grammar()` arrived in Bagisto 2.5: on 2.4, which supports MySQL and MariaDB only, write the MySQL form from the `db_grammar()` table below directly.

## Which Database Is Running

`Webkul\Core\Enums\SupportedDatabaseEnum` names the supported drivers and answers the question at runtime:

| Member | Returns |
|---|---|
| `SupportedDatabaseEnum::MYSQL`, `MARIADB`, `PGSQL` | The cases, backed by `mysql`, `mariadb` and `pgsql` |
| `SupportedDatabaseEnum::isPostgres(?string $driver = null)` | `true` on PostgreSQL |
| `SupportedDatabaseEnum::isMysql(?string $driver = null)` | `true` on MySQL or MariaDB |
| `SupportedDatabaseEnum::currentDriver()` | `app('db')->getDriverName()` |
| `$case->defaultPort()` | `3306` for MySQL and MariaDB, `5432` for PostgreSQL |

The installer offers the three connections and fills in the default port. The `.env` keys are Laravel's usual `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`, plus `DB_PREFIX`. MySQL and MariaDB connections default to `utf8mb4` with the `utf8mb4_unicode_ci` collation (`DB_CHARSET`, `DB_COLLATION`).

::: warning `pdo_pgsql`
`composer.json` requires `ext-pdo_mysql` but not `ext-pdo_pgsql`, and the installer's requirement check (`Webkul\Installer\Helpers\ServerRequirements`) checks `pdo` but no database driver. On a PostgreSQL server, make sure `pdo_pgsql` is loaded before installing; the CI workflows install it explicitly.
:::

## The `db_grammar()` Helper

Every piece of SQL that differs between dialects goes through `db_grammar()`. It returns the `Webkul\Core\Contracts\DatabaseGrammar` singleton that `CoreServiceProvider` binds for the connection's driver: `Webkul\Core\Helpers\Database\Grammar\MySqlGrammar` for MySQL and MariaDB, `PgSqlGrammar` for PostgreSQL.

Every method returns a raw SQL string. Wrap it in `DB::raw()`, `orderByRaw()` or `whereRaw()` yourself, and prefix table names with `DB::getTablePrefix()`. The methods put their arguments into the SQL as they are, so never pass request input to them; use bindings for values.

| Method | MySQL and MariaDB | PostgreSQL |
|---|---|---|
| `concat(...$parts)` | `CONCAT(a, b)` | `(COALESCE(a, '') \|\| COALESCE(b, ''))` |
| `concatWs($separator, ...$parts)` | `CONCAT_WS('sep', a, b)` | `CONCAT_WS('sep', a, b)` |
| `groupConcat($column, $separator = ',', $distinct = false, $orderBy = null, $orderDirection = 'ASC')` | `GROUP_CONCAT([DISTINCT] col [ORDER BY …] SEPARATOR 'sep')` | `STRING_AGG([DISTINCT] NULLIF(col::text, ''), 'sep' [ORDER BY …])` |
| `findInSet($needle, $column)`, deprecated in favour of a pivot table | `FIND_IN_SET(n, col)` | `n = ANY(STRING_TO_ARRAY(col, ','))` |
| `orderByField($column, array $values)` | `FIELD(col, 1,2,3)` | `COALESCE(ARRAY_POSITION(ARRAY[1,2,3], col), 4)`, so missing values sort last |
| `caseInsensitiveLike()` | `LIKE` | `ILIKE` |
| `caseSensitiveLike()` | `LIKE BINARY` | `LIKE` |
| `castToString($expression, $length = 255)` | `CAST(expr AS CHAR(255))` | `CAST(expr AS VARCHAR(255))` |
| `now()` | `NOW()` | `NOW()` |
| `dateFormat($column, $format)`, with MySQL placeholders | `DATE_FORMAT(col, 'fmt')` | `TO_CHAR(col, 'fmt')`, translating `%Y`, `%m`, `%d`, `%H`, `%i` and `%s` |
| `dateDiff($date1, $date2)` | `DATEDIFF(d1, d2)` | `(d1::date - d2::date)` |
| `extractDatePart($part, $column)` | `MONTH(col)`, `WEEK(col)`, `DAYOFYEAR(col)`, `YEAR(col)`, `DAY(col)` | `EXTRACT(part FROM col)::integer`, with `DAYOFYEAR` as `DOY` |
| `monthDay($column)` | `DATE_FORMAT(col, '%m-%d')` | `TO_CHAR(col, 'MM-DD')` |
| `fromUnixtime($column)` | `FROM_UNIXTIME(col)` | `TO_TIMESTAMP(col)` |
| `jsonExtractText($column, $path)` | `json_unquote(json_extract(col, '$.key'))` | `(col::jsonb->>'key')` |
| `jsonExtractNumeric($column, $path)` | `COALESCE(CAST(json_unquote(json_extract(col, '$.key')) AS SIGNED), 0)` | `COALESCE(NULLIF(col::jsonb->>'key', '')::bigint, 0)` |

Write JSON paths in the MySQL form (`$.key` or `$."key"`); the PostgreSQL grammar translates them.

Examples from core:

**File:** `packages/Webkul/Admin/src/DataGrids/Customers/CustomerDataGrid.php`

```php
$tablePrefix = DB::getTablePrefix();

$queryBuilder = DB::table('customers')
    // ...
    ->addSelect(DB::raw(db_grammar()->concat($tablePrefix.'customers.first_name', "' '", $tablePrefix.'customers.last_name').' as full_name'))
    ->groupBy(
        // ...
        'customers.first_name',
        'customers.last_name'
    );

// ...

$this->addFilter('full_name', DB::raw(db_grammar()->concat($tablePrefix.'customers.first_name', "' '", $tablePrefix.'customers.last_name')));
```

**File:** `packages/Webkul/Product/src/Jobs/Search/IndexProducts.php`

```php
$products = $productRepository
    ->whereIn('id', $this->productIds)
    ->orderByRaw(db_grammar()->orderByField('id', $this->productIds))
    ->get();
```

**File:** `packages/Webkul/DataTransfer/src/Helpers/Import.php`

```php
DB::raw('SUM('.db_grammar()->jsonExtractNumeric('summary', '$."created"').') AS created')
```

## What Breaks on PostgreSQL, and What to Do Instead

| Pitfall | Why | Do this |
|---|---|---|
| `where('name', 'like', …)` for a search box | `LIKE` is case-sensitive on PostgreSQL | `where('name', db_grammar()->caseInsensitiveLike(), …)`. DataGrid text filters already do this through `Column::likeOperator()` |
| `CAST(x AS CHAR)` | On PostgreSQL `CHAR` without a length is one character, so ids come back as `"1"` | `db_grammar()->castToString('x')` |
| A `CASE` whose branches return different types | PostgreSQL requires one type; MySQL coerces | Cast every branch to the same type |
| `SELECT a, b … GROUP BY a` | PostgreSQL requires every non-aggregated selected column in `GROUP BY` | Group by all of them, as `CustomerDataGrid` does, or aggregate the rest |
| `DISTINCT` with `ORDER BY` on a column that isn't selected | Rejected by PostgreSQL | Select the column, or group instead |
| A `json()` column in `DISTINCT`, `GROUP BY`, `UNION` or an `=` comparison | PostgreSQL's `json` type has no equality operator; `jsonb` has one | Declare new JSON columns with `$table->jsonb()`, which MySQL and MariaDB create as the same `JSON` column. Core's price indexer replaced `distinct()->select('products.*')`, which on Bagisto 2.4 included the `json` `additional` column, with `groupBy('products.id')` |
| An empty string saved into a date, integer or boolean column | MySQL coerces `''`; PostgreSQL raises a type error | Add a set mutator on the model that turns `''` into `null` or the default, so the value is right whichever path writes it |
| Reading a boolean column without a cast | The drivers return different types, so a strict `=== 1` check fails on one of them | Add `'boolean'` to the model's `$casts` |
| `DB::raw()` inside `updateOrCreate()` | The raw expression fails when the call inserts | Compute the value in PHP, or update and insert separately |
| Inserting rows with explicit ids, as seeders do | PostgreSQL sequences don't advance past an explicit id, so the next insert collides | Use the `Webkul\Core\Concerns\SyncsPostgresSequences` trait and call `$this->syncPostgresSequences(['categories'])` after the insert; it does nothing on MySQL |
| Thousands of rows in one `insert()` | PostgreSQL limits one statement to 65,535 bound parameters | Insert in chunks; Omnibus inserts 500 rows per statement |
| Raw MySQL functions in migrations or seeders (`NOW()`, `IF()`, `CONCAT()`) | Not portable | Use the schema builder, or `db_grammar()` for expressions |

## Testing Against Every Database

Pest tests run on the database in `.env`, because `phpunit.xml` sets no `DB_*` variables. To run a suite on PostgreSQL, pass every connection variable, and point them at a PostgreSQL database that already holds an installed store, because a serial run doesn't migrate:

```bash
DB_CONNECTION=pgsql DB_HOST=127.0.0.1 DB_PORT=5432 DB_DATABASE=bagisto_pgsql DB_USERNAME=postgres DB_PASSWORD=secret vendor/bin/pest --testsuite="Admin Feature Test"
```

Run `php artisan config:clear` first if the configuration is cached, since a cached configuration ignores these variables. CI runs the whole suite once per engine.

## Related Pages

- [Repositories](../package-development/repositories.md) and [Migrations](../package-development/migrations.md): where the grammar fits in a package.
- [Testing with Pest](./testing-with-pest.md#parallel-runs): parallel runs and their test databases.

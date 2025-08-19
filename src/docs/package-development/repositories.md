# Repositories

In Bagisto, the Repository pattern is a crucial architectural component that abstracts database operations and promotes cleaner, more maintainable code. Unlike traditional development where application logic is often embedded directly in controllers, Bagisto uses repositories to decouple models from controllers and provide readable names for complex queries.

Repositories provide a consistent interface for data operations while keeping business logic separate from data persistence concerns. This separation enhances code readability, reusability, and adherence to the separation of concerns principle.

::: info Why Repositories in Bagisto?
Bagisto's repository pattern, powered by the [Prettus L5 Repository](https://github.com/andersao/l5-repository) package, provides advanced features like criteria-based filtering, caching, and automatic query optimization that enhance the standard Laravel Eloquent experience.
:::

For our RMA package, we'll create a `ReturnRequestRepository` that works with the `ReturnRequest` model we created earlier.

## Creating Repositories

When creating repositories in Bagisto, you have two approaches: using the package generator for convenience, or manually creating the repository for more control.

### Using Bagisto Package Generator

The fastest way to create a repository is using Bagisto's package generator:

```bash
php artisan package:make-repository ReturnRequestRepository Webkul/RMA
```

**Command Parameters:**
- `ReturnRequestRepository`: The name of the repository class
- `Webkul/RMA`: The package where the repository will be created

This will create a repository file at `packages/Webkul/RMA/src/Repositories/ReturnRequestRepository.php`:

```php
<?php

namespace Webkul\RMA\Repositories;

use Webkul\Core\Eloquent\Repository;

class ReturnRequestRepository extends Repository
{
    /**
     * Specify the Model contract class name.
     */
    public function model(): string
    {
        return 'Webkul\RMA\Contracts\ReturnRequest';
    }
}
```

::: tip Package Generator Benefits
The generator automatically creates the proper file structure, namespaces, and extends the correct base repository class following Bagisto conventions.
:::

### Manual Repository Creation

If you prefer understanding each component or need more control, you can create the repository manually:

#### Step 1: Create Repository Directory

Create a `Repositories` folder within your package:

```bash
mkdir -p packages/Webkul/RMA/src/Repositories
```

#### Step 2: Create Repository File

Create `packages/Webkul/RMA/src/Repositories/ReturnRequestRepository.php`:

```text
packages
└── Webkul
    └── RMA
        └── src
            ├── ...
            └── Repositories
                └── ReturnRequestRepository.php
```

#### Step 3: Implement Repository Class

```php
<?php

namespace Webkul\RMA\Repositories;

use Webkul\Core\Eloquent\Repository;

class ReturnRequestRepository extends Repository
{
    /**
     * Specify the Model contract class name.
     *
     * @return string
     */
    public function model(): string
    {
        return 'Webkul\RMA\Contracts\ReturnRequest';
    }
}
```

::: details Understanding the Repository Structure
**Key Components:**

- **Namespace**: Follows PSR-4 autoloading standards
- **Base Class**: Extends `Webkul\Core\Eloquent\Repository` which provides all repository methods
- **Model Contract**: References the model contract (not the model directly) for better flexibility
- **Return Type**: The `model()` method must return the FQCN of your model contract
:::

## Available Repository Methods

Bagisto repositories leverage the [Prettus L5 Repository](https://github.com/andersao/l5-repository) package, providing a rich set of methods for database operations. Here are the most commonly used methods:

### Basic CRUD Operations

#### Create New Records

```php
// Create a single return request
$returnRequest = $this->returnRequestRepository->create([
    'customer_id' => 1,
    'order_id' => 123,
    'product_sku' => 'SAMPLE-001',
    'product_name' => 'Test Product',
    'product_quantity' => 1,
    'reason' => 'Defective item',
    'status' => 'pending',
]);
```

#### Retrieve Records

```php
// Get all return requests
$allReturns = $this->returnRequestRepository->all();

// Find by ID
$returnRequest = $this->returnRequestRepository->find($id);

// Find by ID or throw exception
$returnRequest = $this->returnRequestRepository->findOrFail($id);

// Get first record matching conditions
$firstPending = $this->returnRequestRepository->findWhere([
    'status' => 'pending'
])->first();
```

#### Update Records

```php
// Update by ID
$returnRequest = $this->returnRequestRepository->update([
    'status' => 'approved',
    'admin_notes' => 'Approved for return'
], $id);
```

#### Delete Records

```php
// Delete by ID
$this->returnRequestRepository->delete($id);
```

### Advanced Query Methods

#### Conditional Queries

```php
// Find records matching specific conditions
$pendingReturns = $this->returnRequestRepository->findWhere([
    'status' => 'pending',
    'customer_id' => 456,
]);

// Find records where field value is in array
$specificReturns = $this->returnRequestRepository->findWhereIn('id', [1, 2, 3, 4, 5]);

// Find records where field value is between two values
$recentReturns = $this->returnRequestRepository->findWhereBetween('created_at', [
    '2024-01-01',
    '2024-12-31'
]);
```

#### Pagination

```php
// Paginate results (15 per page by default)
$paginatedReturns = $this->returnRequestRepository->paginate(15);

// With custom pagination
$returns = $this->returnRequestRepository->paginate($perPage = 20, $columns = ['*'], $method = 'paginate');
```

#### Relationships and Eager Loading

```php
// Eager load relationships (assuming you have defined them in your model)
$returnWithRelations = $this->returnRequestRepository
    ->with(['customer', 'order'])
    ->find($id);

// Multiple relationships
$returns = $this->returnRequestRepository
    ->with(['customer', 'order', 'product'])
    ->paginate(15);
```

### Custom Query Methods

You can add custom methods to your repository for complex business logic:

```php
<?php

namespace Webkul\RMA\Repositories;

use Webkul\Core\Eloquent\Repository;

class ReturnRequestRepository extends Repository
{
    /**
     * Specify the Model contract class name.
     */
    public function model(): string
    {
        return 'Webkul\RMA\Contracts\ReturnRequest';
    }

    /**
     * Get pending return requests for a specific customer.
     */
    public function getPendingForCustomer(int $customerId)
    {
        return $this->findWhere([
            'customer_id' => $customerId,
            'status' => 'pending'
        ]);
    }

    /**
     * Get return requests statistics.
     */
    public function getStats(): array
    {
        return [
            'total' => $this->count(),
            'pending' => $this->findWhere(['status' => 'pending'])->count(),
            'approved' => $this->findWhere(['status' => 'approved'])->count(),
            'rejected' => $this->findWhere(['status' => 'rejected'])->count(),
        ];
    }

    /**
     * Get recent return requests.
     */
    public function getRecent(int $limit = 10)
    {
        return $this->orderBy('created_at', 'desc')
                    ->limit($limit)
                    ->get();
    }
}
```

## Testing Your Repository

Verify your repository works correctly:

```bash
php artisan tinker
```

```php
// Test repository through service container
$repository = app('Webkul\RMA\Repositories\ReturnRequestRepository');

// Create a test record
$return = $repository->create([
    'customer_id' => 1,
    'order_id' => 1,
    'product_sku' => 'TEST-001',
    'product_name' => 'Test Product',
    'product_quantity' => 1,
    'reason' => 'Testing repository',
    'status' => 'pending'
]);

// Test retrieval
$retrieved = $repository->find($return->id);
echo $retrieved->product_name; // Should output: Test Product

// Test update
$updated = $repository->update(['status' => 'approved'], $return->id);
echo $updated->status; // Should output: approved
```

::: info Testing Tips
**Quick Verification Commands:**
- Check if repository resolves: `php artisan tinker` then `app('Webkul\RMA\Repositories\ReturnRequestRepository')`
- Test basic operations: Create, read, update, delete operations
- Verify relationships work if you've defined them in your model
:::

## Your Next Step

With your repository complete, you now have a clean data access layer for your RMA package. The next logical step is to define routes that will connect HTTP requests to your repository operations.

**Continue to:** **[Routes](./routes.md)** - Configure routing for your RMA package

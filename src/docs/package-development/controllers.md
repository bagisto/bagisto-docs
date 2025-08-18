---
title: Controllers
description: Create base and feature controllers for a Bagisto RMA package and wire them with repositories.
outline: deep
---

# Controllers

Controllers handle request logic, coordinate with models/repositories, and return responses or views. They help keep your application organized by grouping related actions in classes.

Learn more: [Laravel Controllers](https://laravel.com/docs/11.x/controllers)

## Create controllers

We’ll build controllers for the RMA package.

### Directory structure

Create the following structure under `packages/Webkul/RMA/src`:

- Navigate to `packages/Webkul/RMA/src`.
- Create `Http/Controllers`.
- Inside `Controllers`, create `Controller.php`, and folders `Admin` and `Shop`.
- Inside both `Admin` and `Shop`, create a `ReturnRequestController.php` file.

```text
packages
└── Webkul
  └── RMA
    └── src
      ├── ...
      └── Http
        └── Controllers
          ├── Controller.php
          ├── Admin
          │   └── ReturnRequestController.php
          └── Shop
            └── ReturnRequestController.php
```

### Create controller files

Now, create the necessary controller files.

#### Base controller (Controller.php)

In `packages/Webkul/RMA/src/Http/Controllers/Controller.php`, define the base controller for your package:

```php
<?php

namespace Webkul\RMA\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
```

#### Admin controller (ReturnRequestController.php)

In `packages/Webkul/RMA/src/Http/Controllers/Admin/ReturnRequestController.php`, define the Admin controller:

```php
<?php

namespace Webkul\RMA\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Webkul\RMA\Http\Controllers\Controller;
use Webkul\RMA\Repository\ReturnRequestRepository;

class ReturnRequestController extends Controller
{
  /**
   * Create a controller instance.
   */
  public function __construct(protected ReturnRequestRepository $returnRequestRepository) {}

  /**
   * List return requests.
   */
  public function index()
  {
    $returns = $this->returnRequestRepository->with(['order', 'customer'])->paginate(20);

    return view('rma::admin.returns.index', compact('returns'));
  }

  /**
   * Show create form.
   */
  public function create()
  {
    return view('rma::admin.returns.create');
  }

  /**
   * Store a new return request.
   */
  public function store(Request $request)
  {
    // validate and create
    // $this->returnRequestRepository->create($request->only([...]))
    return redirect()->route('admin.returns.index');
  }

  /**
   * Update an existing return request.
   */
  public function update(int $id, Request $request)
  {
    // $this->returnRequestRepository->update($request->only([...]), $id)
    return redirect()->back();
  }

  /**
   * Delete a return request.
   */
  public function destroy(int $id)
  {
    // $this->returnRequestRepository->delete($id)
    return redirect()->back();
  }
}
```

#### Shop controller (ReturnRequestController.php)

In `packages/Webkul/RMA/src/Http/Controllers/Shop/ReturnRequestController.php`, define the Shop controller:

```php
<?php

namespace Webkul\RMA\Http\Controllers\Shop;

use Webkul\RMA\Http\Controllers\Controller;
use Webkul\RMA\Repository\ReturnRequestRepository;

class ReturnRequestController extends Controller
{
  /**
   * Create a controller instance.
   */
  public function __construct(protected ReturnRequestRepository $returnRequestRepository) {}

  /**
   * List return requests for the shop.
   */
  public function index()
  {
    $returns = $this->returnRequestRepository->with(['order'])->paginate(10);

    return view('rma::shop.returns.index', compact('returns'));
  }

  /**
   * Show return request details.
   */
  public function view(int $id)
  {
    $return = $this->returnRequestRepository->findOrFail($id);

    return view('rma::shop.returns.view', compact('return'));
  }
}
```
By following these steps, you’ve created the structure and files to handle RMA return requests in both Admin and Shop areas. Add validation, authorization, and business logic as needed.
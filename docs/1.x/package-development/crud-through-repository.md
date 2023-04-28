# CRUD Through Repository

Now, we are very much familiar with your package and we created all the necessary things we needed. So, Let's see the simple crud example. So, let's see the example.

### Step-1

- Update `shop-routes.php`.

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Blog\Http\Controllers\Shop\ShopController;

Route::group(['middleware' => ['web', 'theme', 'locale', 'currency']], function () {

    Route::get('/blogs', [ShopController::class, 'index'])->defaults('_config', [
        'view' => 'blog::shop.index',
    ])->name('shop.blogs');

    Route::get('/blog-details/{id}', [ShopController::class, 'blogDetails'])->defaults('_config', [
        'view' => 'blog::shop.blog-details',
    ])->name('shop.blog.details');
});
```

- Similarly update the `admin-routes.php`.

```php
<?php

use Illuminate\Support\Facades\Route;
use Webkul\Blog\Http\Controllers\Admin\AdminController;

Route::group(['middleware' => ['web', 'admin'], 'prefix' => config('app.admin_url')], function () {

    Route::group(['prefix' => 'blogs'], function () {

        Route::controller(AdminController::class)->group(function () {

            Route::get('/', 'index')->defaults('_config', [
                'view' => 'blog::admin.index',
            ])->name('admin.blog.index');

            Route::get('/create', 'create')->defaults('_config', [
                'view' => 'blog::admin.create',
            ])->name('admin.blog.create');

            Route::post('/save', 'saveOrUpdate')->defaults('_config', [
                'redirect' => 'admin.blog.index',
            ])->name('admin.blog.save');

            Route::get('/edit/{id}', 'edit')->defaults('_config', [
                'view' => 'blog::admin.edit',
            ])->name('admin.blog.edit');

            Route::post('/delete/{id}', 'delete')->name('admin.blog.delete');

            Route::post('/massupdate', 'massupdate')->name('admin.blog.massupdate');

            Route::post('/massdelete', 'massdelete')->name('admin.blog.massdelete');

        });

    });

});
```

### Step-2

- Update `ShopController.php`.

```php
<?php

namespace Webkul\Blog\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Webkul\Blog\Repository\PostRepository;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Webkul\Blog\Repository\PostRepository  $postRepository
     *
     * @var array
     */
    protected $_config;

    public function __construct(protected PostRepository $postRepository)
    {
        $this->_config = request('_config');
    }

    public function index() {

        if (! core()->getConfigData('blog.settings.package.status')) {
            return abort(404);
        }

        if (core()->getConfigData('blog.settings.blog-setting.pagination')) {
            $blogs = $this->postRepository->with(['author'])
                ->paginate(core()->getConfigData('blog.settings.blog-setting.items') ?: 10);
        } else {
            $blogs = $this->postRepository->with(['author'])->all();
        }

        return view($this->_config['view'], ['blogs' => $blogs]);
    }

    public function blogDetails($id) {

        if (! core()->getConfigData('blog.settings.package.status')) {
            return abort(404);
        }

        $blog = $this->postRepository->with(['author'])->find($id);

        return view($this->_config['view'], ['blog' => $blog]);
    }
}
```

- Similarly update `AdminController.php`

```php
<?php

namespace Webkul\Blog\Http\Controllers\Admin;

use Webkul\Blog\Http\Controllers\Controller;
use Webkul\Blog\DataGrids\PostDataGrid;
use Webkul\Blog\Repository\PostRepository;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Webkul\Blog\Repository\PostRepository  $postRepository
     *
     * @var array
     */
    protected $_config;

    public function __construct(protected PostRepository $postRepository)
    {
        $this->_config = request('_config');
    }

    public function index() {

        if (request()->ajax()) {

            return app(PostDataGrid::class)->toJson();
        }

        return view($this->_config['view']);
    }

    public function create() {

        return view($this->_config['view']);
    }

    public function saveOrUpdate() {

        $data = request()->input();

        $this->validate(request(), [
            'title' => 'required|string|max:150',
            'description' => 'required|string',
            'status' => 'required'
        ]);

        if (! empty($data['id'])) {
            $this->postRepository->where('id', $data['id'])->update([
                'title' => $data['title'],
                'description' => $data['description'],
                'user_id' => auth()->guard('admin')->user()->id,
                'status' => $data['status']
            ]);
            session()->flash('success', trans('blog::app.admin.response.update-success'));
        } else {
            $this->postRepository->create([
                'title' => $data['title'],
                'description' => $data['description'],
                'user_id' => auth()->guard('admin')->user()->id,
                'status' => $data['status']
            ]);
            session()->flash('success', trans('blog::app.admin.response.save-success'));
        }

        return redirect()->route($this->_config['redirect']);
    }

    public function edit($id) {

        $data = $this->postRepository->find($id);

        return view($this->_config['view'], ['blog' => $data]);
    }

    public function delete($id) {

        $this->postRepository->delete($id);

        return response()->json([
            'message' => trans('blog::app.admin.response.delete-success')
        ]);
    }

    public function massupdate() {

        $blogIds = explode(',', request()->input('indexes'));

        $this->postRepository->whereIn('id', $blogIds)->update([
            'status' => request()->input('update-options')
        ]);

        session()->flash('success', trans('blog::app.admin.response.update-success'));

        return redirect()->back();
    }

    public function massdelete() {

        $blogIds = explode(',', request()->input('indexes'));

        $this->postRepository->whereIn('id', $blogIds)->delete();

        session()->flash('success', trans('blog::app.admin.response.delete-success'));

        return redirect()->back();
    }
}
```

### Step-3

- Update your blade file `index.blade.php` inside `Resources/views/admin` folder.

```html
@extends('admin::layouts.master')

@section('page_title') {{ __('blog::app.admin.index.page-title') }} @stop

@section('content-wrapper')

    <div class="content full-page dashboard">
        <div class="page-header">
            <div class="page-title">
                <h1>{{ __('blog::app.admin.index.page-title') }}</h1>
            </div>
            <div class="page-action">
                <a href="{{ route('admin.blog.create') }}" class="btn btn-lg btn-primary">
                    {{ __('blog::app.admin.index.add-blog-btn-title') }}
                </a>
            </div>
        </div>
        <div class="page-content">
            <datagrid-plus src="{{ route('admin.blog.index') }}"></datagrid-plus>
        </div>
    </div>

@stop
```

- Now, Create two more files `create.blade.php` and `edit.blade.php` within Resources/views/admin` folder. 

- So, Let's update `create.blade.php`.

```html
@extends('admin::layouts.master')

@section('page_title') {{ __('blog::app.admin.create.page-title') }} @stop
    
@section('content-wrapper')

    <div class="content full-page dashboard">
        <form action="{{ route('admin.blog.save') }}" method="POST">
            @csrf
            <div class="page-header">
                <div class="page-title">
                    <h1>{{ __('blog::app.admin.create.page-title') }}</h1>
                </div>
                <div class="page-action">
                    <button type="submit" value="submit" class="btn btn-lg btn-primary">
                        {{ __('blog::app.admin.create.save-blog-btn-title') }}
                    </button>
                </div>
            </div>
            <div class="page-content">

                <accordian :title="'{{ __('blog::app.admin.create.label_properties') }}'" :active="true">

                    <div slot="body">
                        <div class="control-group">
                            <label for="title" class="required">
                                {{ __('blog::app.admin.create.title') }}
                            </label>
                            <input type="text" class="control" id="title" name="title" value="{{ old('title') }}"/>
                            @if ($errors->has('title'))  
                                <span class="control-error"> {{$errors->first('title')}}</span>
                            @endif
                        </div>

                        <div class="control-group">
                            <label for="description" class="required">
                                {{ __('blog::app.admin.create.description') }}
                            </label>
                            <textarea class="control" name="description" id="description">
                                {{ old('description') }}
                            </textarea>
                            @if ($errors->has('description'))  
                                <span class="control-error"> {{$errors->first('description')}}</span>
                            @endif
                        </div>

                        <div class="control-group">
                            <label for="status" class="required">
                                {{ __('blog::app.admin.create.status') }}
                            </label>
                            <select class="control" name="status" id="status">
                                <option value="1">{{ __('blog::app.admin.create.active') }}</option>
                                <option value="0">{{ __('blog::app.admin.create.inactive') }}</option>
                            </select>
                            @if ($errors->has('status'))  
                                <span class="control-error"> {{$errors->first('status')}}</span>
                            @endif
                        </div>
                    </div>

                </accordian>

            </div>
        </form>
    </div>

@stop
```

- Similarly update `edit.blade.php`.

```html
@extends('admin::layouts.master')

@section('page_title') {{ __('blog::app.admin.edit.page-title') }} @stop 
    
@section('content-wrapper')

    <div class="content full-page dashboard">
        <form action="{{ route('admin.blog.save') }}" method="POST">
            @csrf
            <input type="hidden" name="id" value="{{ $blog->id }}">
            <div class="page-header">
                <div class="page-title">
                    <h1>{{ __('blog::app.admin.edit.page-title') }}</h1>
                </div>
                <div class="page-action">
                    <button type="submit" value="submit" class="btn btn-lg btn-primary">
                        {{ __('blog::app.admin.edit.update-blog-btn-title') }}
                    </button>
                </div>
            </div>
            <div class="page-content">

                <accordian :title="'{{ __('blog::app.admin.edit.label_properties') }}'" :active="true">

                    <div slot="body">
                        <div class="control-group">
                            <label for="title" class="required">
                                {{ __('blog::app.admin.edit.title') }}
                            </label>
                            <input type="text" class="control" id="title" name="title" value="{{ $blog->title }}"/>
                            @if ($errors->has('title'))  
                                <span class="control-error"> {{$errors->first('title')}}</span>
                            @endif
                        </div>

                        <div class="control-group">
                            <label for="description" class="required">
                                {{ __('blog::app.admin.edit.description') }}
                            </label>
                            <textarea class="control" name="description" id="description">
                                {{ $blog->description }}
                            </textarea>
                            @if ($errors->has('description'))  
                                <span class="control-error"> {{$errors->first('description')}}</span>
                            @endif
                        </div>

                        <div class="control-group">
                            @php
                                $selectedOption = old('status') ? old('status') : $blog->status;
                            @endphp
                            <label for="status" class="required">
                                {{ __('blog::app.admin.edit.status') }}
                            </label>
                            <select class="control" name="status" id="status">
                                <option value="1" {{ $selectedOption == 1 ? 'selected' : '' }}>
                                    {{ __('blog::app.admin.edit.active') }}</option>
                                <option value="0" {{ $selectedOption == 0 ? 'selected' : '' }}>
                                    {{ __('blog::app.admin.edit.inactive') }}</option>
                            </select>
                            @if ($errors->has('status'))  
                                <span class="control-error"> {{$errors->first('status')}}</span>
                            @endif
                        </div>
                    </div>

                </accordian>

            </div>
        </form>
    </div>

@stop
```

### Step-4

- Now, Update `index.blade.php` inside `Resources/views/shop/velocity` folder.

```html
@extends('shop::layouts.master')

@section('page_title') {{ __('blog::app.shop.blogs.page-title') }} @stop

@section('content-wrapper')

    <div class="content full-page">
        <div class="page-content">
            <div class="row p-4">
                @foreach ($blogs as $blog)
                    <div class="p-2 col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ substr($blog->title, 0, 30); }}</h5>
                                <p class="card-text">{{ substr($blog->description, 0, 100).' ..'; }}</p>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <a href="{{ route('shop.blog.details', $blog->id) }}" class="btn btn-primary">
                                            {{ __('blog::app.shop.blogs.button-title') }}
                                        </a>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="author-icon"></div>
                                    </div>
                                    <div class="col-sm-6">
                                        <span>Author: {{ substr($blog->author->name, 0, 20); }}</span><br>
                                        <span>Published on: {{ date('d-m-Y', strtotime($blog->created_at) )}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            @if (core()->getConfigData('blog.settings.blog-setting.pagination'))
            <span class="mb-5 float-right">{{ $blogs->links() }}</span>
            @endif
        </div>
    </div>

@stop
```

- At last create one file `blog-details.blade.php` inside `Resources/views/shop/velocity` folder.

- Now, Update your `blog-details.blade.php`

```html
@extends('shop::layouts.master')

@section('page_title') {{ __('blog::app.shop.blog-details.page-title') }} @stop 
    
@section('content-wrapper')

    <div class="content full-page">
        <div class="page-content p-5">
            <div class="jumbotron">
                <h1>{{ $blog->title }}</h1><hr>
                <h6 class="text-justify">{{ $blog->description }}</h6>
                <div class="row mt-5">
                    <div class="col-md-9">
                        <a href="{{ route('shop.blogs') }}" class="btn btn-primary mt-3">
                            {{ __('blog::app.shop.blog-details.button-title') }}
                        </a>
                    </div>
                    <div class="col-md-1">
                        <div class="author-icon"></div>
                    </div>
                    <div class="col-md-2">
                        <span>Author: {{ substr($blog->author->name, 0, 20); }}</span><br>
                        <span>Published on: {{ date('d-m-Y', strtotime($blog->created_at) )}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop
```

- Now all done. But , Before that let's add some `css` to our package.

- Go to `admin.scss` file and add below code to it.

```css
.blog-icon {
    background-image: url("../images/blog.png");
    width: 45px;
    height: 45px;
    opacity: 0.6;
    margin-left: 4px !important;
}

.active {
    .blog-icon {
        opacity: 1;
        background-image: url("../images/blog-active.png");
    }
}

.control-group .control-error {
    display: block;
}
```

- Similarly, Go to `velocity.scss` and add below code to it.

```css
.author-icon {
    height: 42px;
    width: 42px;
    background-size: cover;
    background-image: url("../images/author.png");
}

.card-text {
    height: 10vh;
}
```

- Now everything is up-to-date. So, Go and test your `Blog` package.
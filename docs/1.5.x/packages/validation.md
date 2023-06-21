# Validation

[[TOC]]

## Validation Using Laravel

### Introduction

Laravel provides various approaches to validate incoming data in your application. The most common method is to use the **`validate`** method available on incoming HTTP requests.

For detailed information about validation in Laravel, refer to the [Laravel documentation](https://laravel.com/docs/10.x/validation).

### Usage

To use the **`validate`** method, you can follow this example:

```php
/**
 * Store a new blog post.
 */
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
    ]);
}
```

Alternatively, you can manually create a validator instance using the Validator facade, as shown in this example:

```php
<?php
 
namespace App\Http\Controllers;
    
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
    
class PostController extends Controller
{
    /**
     * Store a new blog post.
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required|max:250',
        ];

        $customMessages = [
            'required' => 'The :attribute field is required.',
        ];

        $this->validate($request, $rules, $customMessages);
    }
}
```

## Validation Using Vue

### Introduction

VeeValidate is a validation library for Vue.js that provides plenty of validation rules out of the box, along with support for custom rules. It is template-based and similar to the HTML5 validation API, making it easy to validate HTML5 inputs as well as custom Vue components. VeeValidate also supports localization with 44 languages maintained by the community.

For detailed information about validation in Vue.js using VeeValidate, refer to the [VeeValidate documentation](https://vee-validate.logaretm.com/v2/guide/).

### Installation

Bagisto already comes with the VeeValidate library, so there is no need to install it separately.

### Configuration

Bagisto includes the configuration for **`vee-validate`**. For example, you can find the configuration in the following path: **`bagisto/packages/Webkul/Admin/src/Resources/assets/js/app.js`**.

```js
import Vue from 'vue';
import VeeValidate from 'vee-validate';

/**
 * Language imports.
*/
import de from 'vee-validate/dist/locale/en';
import de from 'vee-validate/dist/locale/de';
import fa from 'vee-validate/dist/locale/fa';

/**
 * Vue plugins.
*/
Vue.use(VeeValidate, {
    dictionary: {
        en: en,
        de: de,
        fa: fa,
    },
    events: 'input|change|blur'
});
```

### Examples

Here are some examples of Vue validation using VeeValidate:

```html
<input v-validate="'alpha'" type="text" name="username">

<input v-validate="'required|email'" name="email" type="text">

<input v-validate="'required|min:6'" type="password" name="password">
```
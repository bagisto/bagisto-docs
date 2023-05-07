# Validation

[[TOC]]

## Validation Using Laravel

### Introduction

- Laravel provides several different approaches to validate your application's incoming data. It is most common to use the **`validate`** method available on all incoming HTTP requests.

- To learn in detail about validation in Laravel you can visit Laravel doc from [here](https://laravel.com/docs/10.x/validation)

### Usage

- Understanding of the validate method.

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
- If you do not want to use the validate method on the request, you may create a validator instance manually using the Validator facade.

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
        public function store(Request $request): RedirectResponse
        {
            $rules = [
                'name' => 'required',
                'email' => 'required|email',
                'message' => 'required|max:250',
            ];

            $customMessages = [
                'required' => 'The :attribute field is required.'
            ];

            $this->validate($request, $rules, $customMessages);
        }
    }
    ```

## Validation Using Vue

### Introduction

- VeeValidate is a validation library for Vue.js. It has plenty of validation rules out of the box and support for custom ones as well. It is template based so it is similar and familiar with the HTML5 validation API. You can validate HTML5 inputs as well as custom Vue components.

- It is also built with localization in mind, in fact VeeValidate have about 44 languages supported and maintained by the wonderful community members

- To learn in detail about validation in vue.js you can visit Laravel doc from [here](https://vee-validate.logaretm.com/v2/guide/)

### Installation

- Bagisto already come with veeValidate library. So, You don't need to install this.

    ```sh
    npm install vee-validate --save
    ```

### Configuration

- Bagisto already come with **`vee-validate`** configuration. For example, You can verify in path i.e. **`bagisto/packages/Webkul/Admin/src/Resources/assets/js/app.js`**.

    ```js
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';

    /**
     * Lang imports.
    */
    import de from 'vee-validate/dist/locale/de';
    import fa from 'vee-validate/dist/locale/fa';

    /**
     * Vue plugins.
    */
    Vue.use(VeeValidate, {
        dictionary: {
            de: de,
            fa: fa,
        },
        events: 'input|change|blur'
    });
    ```
### Examples

- Some examples of vue validation. 

    ```html
    <input v-validate="'alpha'" type="text" name="username">

    <input v-validate="'required|email'" name="email" type="text">

    <input v-validate="'required|min:6'" type="password" name="password">
    ```
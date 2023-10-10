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

For detailed information about validation in Vue.js using VeeValidate, refer to the [VeeValidate documentation](https://vee-validate.logaretm.com/v4/guide/overview/).

### Installation

Bagisto already comes with the VeeValidate library, so there is no need to install it separately.

### Configuration

Bagisto includes the configuration for **`vee-validate`**. For example, you can find the configuration in the following path: **`bagisto/packages/Webkul/Admin/src/Resources/assets/js/app.js`**.

```js
/**
 * This will track all the images and fonts for publishing.
 */
import.meta.glob(["../images/**", "../fonts/**"]);

/**
 * Main vue bundler.
 */
import { createApp } from "vue/dist/vue.esm-bundler";

/**
 * We are defining all the global rules here and configuring
 * all the `vee-validate` settings.
 */
import { configure, defineRule } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import * as AllRules from '@vee-validate/rules';

/**
 * Registration of all global validators.
 */
Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});

/**
 * This regular expression allows phone numbers with the following conditions:
 * - The phone number can start with an optional "+" sign.
 * - After the "+" sign, there should be one or more digits.
 *
 * This validation is sufficient for global-level phone number validation. If
 * someone wants to customize it, they can override this rule.
 */
defineRule("phone", (value) => {
    if (!value || !value.length) {
        return true;
    }

    if (!/^\+?\d+$/.test(value)) {
        return false;
    }

    return true;
});

defineRule("decimal", (value, { decimals = '*', separator = '.' } = {}) => {
    if (value === null || value === undefined || value === '') {
        return true;
    }

    if (Number(decimals) === 0) {
        return /^-?\d*$/.test(value);
    }

    const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`;
    const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`);

    return regex.test(value);
});

defineRule("required_if", (value, { condition = true } = {}) => {
    if (condition) {
        if (value === null || value === undefined || value === '') {
            return false;
        }
    }

    return true;
});

defineRule("", () => true);

configure({
    /**
     * Built-in error messages and custom error messages are available. Multiple
     * locales can be added in the same way.
     */
    generateMessage: localize({
        en: {
            ...en,
            messages: {
                ...en.messages,
                phone: "This {field} must be a valid phone number",
            },
        },
    }),

    validateOnBlur: true,
    validateOnInput: true,
    validateOnChange: true,
});
```

### Examples

Here are some examples of Vue validation using VeeValidate:

```php
<x-admin::form.control-group class="w-full mb-[10px]">
    <x-admin::form.control-group.label class="required">
        @lang('blog::app.admin.blog.create.title')
    </x-admin::form.control-group.label>

    <x-admin::form.control-group.control
        type="text"
        name="title"
        :value="old('title')"
        rules="required"
        :label="trans('blog::app.admin.blog.create.title')"
        :placeholder="trans('blog::app.admin.blog.create.title')"
    >
    </x-admin::form.control-group.control>

    <x-admin::form.control-group.error
        control-name="title"
    >
    </x-admin::form.control-group.error>
</x-admin::form.control-group>
```
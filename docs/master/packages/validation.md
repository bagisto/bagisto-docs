# Validation

[[TOC]]

## Validation Using Laravel

### Introduction

Laravel offers multiple approaches to validate incoming data in your application, ensuring that your data is accurate and meets the specified requirements before it is processed. The most common method is to use the validate method available on incoming HTTP requests.

This method is easy to use and integrates seamlessly with Laravel's request lifecycle. By leveraging Laravel's built-in validation rules and custom validation logic, you can ensure your application handles data validation efficiently and effectively.

For detailed information about validation in Laravel, refer to the [Laravel documentation](https://laravel.com/docs/11.x/validation).

### Usage

Laravel provides multiple ways to handle validation in your application, ensuring your data meets specified criteria before processing it. Here are the two most common methods:

### Using the validate Method on Request

The simplest and most common way to validate incoming data is to use the `validate` method available on incoming HTTP requests. Here’s an example of how you can use this method to validate data in a controller method:

```php
/**
 * Store a new blog post.
 */
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|unique:posts|max:255',
        'body'  => 'required',
    ]);
}
```

In this example, the validate method takes an array of validation rules. If the validation fails, a ValidationException is thrown, and the user is redirected back to the previous page with error messages.

### Using the Validator Facade

For more complex validation scenarios, you can manually create a validator instance using the `Validator` facade. This approach gives you more control over the validation process and is useful for custom validation messages and handling errors in a more customized way.

Here’s an example of how to use the Validator facade:

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
            'name'    => 'required',
            'email'   => 'required|email',
            'message' => 'required|max:250',
        ];

        $customMessages = [
            'required' => 'The :attribute field is required.',
        ];

        $this->validate($request, $rules, $customMessages);
    }
}
```

- `Defining Rules` The $rules array contains the validation rules for each field.
- `Custom Messages` The $customMessages array allows you to define custom validation messages.
- `Creating Validator` The Validator::make method creates a validator instance.
- `Handling Failure` If validation fails, the user is redirected back with the validation errors and input data.

Both methods provide a robust way to ensure data integrity and user input validation in your Laravel application.

## Validation Using Vue

### Introduction

VeeValidate is a powerful validation library for Vue.js that provides an extensive set of validation rules out of the box, along with support for custom rules. It is template-based, making it easy to validate HTML5 inputs as well as custom Vue components. VeeValidate also supports localization with 44 languages maintained by the community.

For detailed information about validation in Vue.js using VeeValidate v4, refer to the [VeeValidate documentation](https://vee-validate.logaretm.com/v4/guide/overview/).

### Installation

Bagisto already includes the VeeValidate v4 library, so there is no need to install it separately.

### Configuration

Bagisto comes with pre-configured settings for `vee-validate`. You can find the configuration in the following path: `bagisto/packages/Webkul/Admin/src/Resources/assets/js/app.js`.

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
import { all } from '@vee-validate/rules';

/**
 * Registration of all global validators.
 */
Object.entries(all).forEach(([name, rule]) => defineRule(name, rule));

/**
 * This regular expression allows phone numbers with the following conditions:
 * - The phone number can start with an optional "+" sign.
 * - After the "+" sign, there should be one or more digits.
 *
 * This validation is sufficient for global-level phone number validation. If
 * someone wants to customize it, they can override this rule.
 */
defineRule("phone", (value) => {
    if (! value || ! value.length) {
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

Below are examples of how to use VeeValidate for validation in Vue components within Bagisto:

```html
<x-admin::form.control-group class="w-full mb-2.5">
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

### Available Custom Validation in bagisto 

- `phone` The phone validation rule is designed to ensure that the input is a valid phone number.

```javascript
defineRule("phone", (value) => {
    if (! value || ! value.length) {
        return true;
    }

    if (!/^\+?\d+$/.test(value)) {
        return false;
    }

    return true;
});
```
- `address` The address validation rule typically ensures that an address field is not left empty and may include additional logic to check for valid address formats. 

```javascript
defineRule("address", (value) => {
    if (! value || ! value.length) {
        return true;
    }

    if (
        !/^[a-zA-Z0-9\s.\/*'\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF\u0D80-\u0DFF\u3400-\u4DBF\u2000-\u2A6D\u00C0-\u017F\u0980-\u09FF\u0900-\u097F\u4E00-\u9FFF,\(\)-]{1,60}$/iu.test(
            value
        )
    ) {
        return false;
    }

    return true;
});
```

- `postcode` The postcode validation rule is designed to ensure that the input is a valid post code. 

```javascript
defineRule("postcode", (value) => {
    if (! value || ! value.length) {
        return true;
    }

    if (! /^[a-zA-Z0-9][a-zA-Z0-9\s-]*[a-zA-Z0-9]$/.test(value)) {
        return false;
    }

    return true;
});
```

- `decimal` The decimal validation rule ensures that the input is a valid decimal number. This rule allows specifying the number of decimal places and the decimal separator. By default, it accepts any number of decimal places and uses the period (".") as the separator.

```javascript
defineRule(
    "decimal",
    (value, { decimals = "*", separator = "." } = {}) => {
        if (value === null || value === undefined || value === "") {
            return true;
        }

        if (Number(decimals) === 0) {
            return /^-?\d*$/.test(value);
        }

        const regexPart = decimals === "*" ? "+" : `{1,${decimals}}`;
        const regex = new RegExp(
            `^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`
        );

        return regex.test(value);
    }
);
```

- `required_if` The required_if validation rule ensures that a value is required based on a given condition. If the specified condition evaluates to true, the input must not be null, undefined, or an empty string. If the condition is false, the validation passes regardless of the input value.

```javascript
defineRule("required_if", (value, { condition = true } = {}) => {
    if (condition) {
        if (value === null || value === undefined || value === '') {
            return false;
        }
    }

    return true;
});
```
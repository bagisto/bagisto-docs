# Validation

Form validation is a crucial aspect of theme development, ensuring data integrity and providing a smooth user experience. This guide covers both server-side (Laravel) and client-side (Vue.js) validation techniques used in Bagisto themes, building on the concepts from previous theme development sections.

## Understanding Validation in Themes

Validation in Bagisto themes works on two levels:

- **Client-side validation** using VeeValidate for Vue.js components
- **Server-side validation** using Laravel's validation system

This dual approach ensures data integrity while providing immediate feedback to users, creating a seamless experience that aligns with your theme's design.

::: tip Theme Integration
Validation styling and error messages should match your theme's design language. Custom validation can be integrated into your theme components as covered in [Blade Components](/docs/theme-development/blade-components).
:::

## Client-Side Validation with Vue.js

Bagisto uses VeeValidate v4 for client-side validation, providing immediate feedback to users and improving the overall user experience in your theme.

### VeeValidate Configuration in Themes

Bagisto comes pre-configured with VeeValidate through dedicated plugins. The configuration is located in:

**Admin Package:**
`packages/Webkul/Admin/src/Resources/assets/js/plugins/vee-validate.js`

**Shop Package:**
`packages/Webkul/Shop/src/Resources/assets/js/plugins/vee-validate.js`

```js
...

export default {
    install: (app) => {
        /**
         * Global components registration
         */
        app.component("VForm", Form);
        app.component("VField", Field);
        app.component("VErrorMessage", ErrorMessage);

        ...

        /**
         * Registration of all global validators
         */
        Object.entries(all).forEach(([name, rule]) => defineRule(name, rule));

        ...
    },
};
```

::: tip Multi-Language Support
Bagisto's VeeValidate plugin includes comprehensive multi-language support with over 20 locales including Arabic, Bengali, Chinese, French, German, Hindi, Japanese, Russian, and many more. The validation messages automatically adapt to your store's configured language.
:::

::: info Plugin Structure
The VeeValidate configuration is implemented as a Vue plugin that registers global components (`VForm`, `VField`, `VErrorMessage`), defines custom validation rules, and configures localization. This plugin is automatically loaded in both admin and shop packages.
:::

### Custom Validation Rules for Themes

Define custom validation rules specific to your theme needs:

```js
defineRule("strong_password", (value) => {
    if (!value) return true; // Optional field
    
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumbers = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isLongEnough = value.length >= 8;
    
    // Return true if all conditions are met
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && isLongEnough;
});
```

**Usage in your theme forms:**

```blade{9}
<x-shop::form.control-group class="mb-4">
    <x-shop::form.control-group.label class="required">
        Password
    </x-shop::form.control-group.label>
    
    <x-shop::form.control-group.control
        type="password"
        name="password"
        rules="required|strong_password"
        label="Password"
        placeholder="Enter a strong password"
    />
    
    <x-shop::form.control-group.error control-name="password" />
</x-shop::form.control-group>
```

::: tip Custom Rule Best Practices
- **Return `true` for empty values** if the field is optional
- **Use descriptive rule names** that clearly indicate their purpose
- **Combine with built-in rules** using pipe syntax (e.g., `"required|strong_password"`)
- **Add helpful user guidance** near the form field to explain requirements
:::

::: info Adding Custom Error Messages
To add custom error messages for your rules, include them in the VeeValidate plugin configuration:

```js
generateMessage: localize({
    en: {
        messages: {
            strong_password: "Password must be at least 8 characters with uppercase, lowercase, number, and special character"
        }
    }
})
```
:::

## Server-Side Validation with Laravel

Laravel provides robust validation capabilities that integrate seamlessly with your Bagisto theme development. When building custom forms or extending existing functionality, server-side validation ensures data integrity and security.

### Basic Request Validation

The most common approach is using the `validate` method on HTTP requests. This method works well for simple forms in your theme:

```php{11-16}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Process the validated data
        // This could be saving to database, sending email, etc.
        
        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
```

### Advanced Validation with Custom Messages

For more complex validation scenarios, you can use the `validate` method with custom messages. This approach gives you more control over the validation process and is useful for custom validation messages that match your theme's brand voice.

Here's an example of how to use validation with custom messages:

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
        
        // Process the validated data
        return redirect()->back()->with('success', 'Post created successfully!');
    }
}
```

**Key Points:**
- **Defining Rules**: The `$rules` array contains the validation rules for each field
- **Custom Messages**: The `$customMessages` array allows you to define custom validation messages  
- **Using validate()**: The `$this->validate()` method validates the request and automatically redirects back with errors if validation fails
- **Handling Success**: If validation passes, you can process the validated data and return a response

This method provides a clean way to handle validation with custom messages while maintaining Laravel's automatic error handling.

::: tip Advanced Laravel Validation
As this is Laravel, you can explore more advanced validation techniques including Form Request validation, custom validation rules, and conditional validation. For comprehensive coverage of Laravel validation features, refer to the [Laravel Validation Documentation](https://laravel.com/docs/validation).
:::

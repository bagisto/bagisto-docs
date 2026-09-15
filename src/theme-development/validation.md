# Validation

Bagisto validates a form twice: in the browser with VeeValidate, so the shopper sees an error as they type, and on the server with a Laravel form request, which decides what is accepted. A theme restyles and extends the first; the second stays in the controller that receives the form.

## Client-Side Validation

### Where It Is Configured

VeeValidate 4 is installed as a Vue plugin by each package's `app.js`, from `packages/Webkul/Shop/src/Resources/assets/js/plugins/vee-validate.js` and `packages/Webkul/Admin/src/Resources/assets/js/plugins/vee-validate.js`. The plugin:

- registers the `VForm`, `VField` and `VErrorMessage` components;
- registers every rule from `@vee-validate/rules`, such as `required`, `email`, `min`, `max`, `numeric`, `confirmed` and `regex`, trimming string values before a rule runs;
- adds Bagisto's own rules: `phone`, `address`, `postcode` and `decimal` in both packages, and `comma_separated_integer`, `regex_pattern`, `date_format` and `required_if` in the admin;
- loads messages for 22 locales and picks one from the page's `lang` attribute;
- validates on blur, input and change;
- assigns `defineRule` to `window`, so a view can add a rule without rebuilding the bundle.

### Validating a Field

Forms are built from the `form.control-group` components, which wrap VeeValidate's field. The `rules` attribute takes VeeValidate's pipe syntax, `label` names the field in the message, and the error component's `control-name` must match the field's `name`. The contact page's phone field:

**File:** `packages/Webkul/Shop/src/Resources/views/home/contact-us.blade.php`

```blade
<x-shop::form.control-group>
    <x-shop::form.control-group.label>
        @lang('shop::app.home.contact.phone-number')
    </x-shop::form.control-group.label>

    <x-shop::form.control-group.control
        type="text"
        class="px-6 py-5 max-md:py-3 max-sm:py-3.5"
        name="contact"
        rules="phone"
        :value="old('contact')"
        :label="trans('shop::app.home.contact.phone-number')"
        :placeholder="trans('shop::app.home.contact.phone-number')"
        :aria-label="trans('shop::app.home.contact.phone-number')"
    />

    <x-shop::form.control-group.error control-name="contact" />
</x-shop::form.control-group>
```

The control component renders a different input for each `type`:

| Package | Types |
|---|---|
| Shop | `hidden`, `text`, `email`, `number`, `password`, `file`, `color`, `textarea`, `date`, `datetime`, `select`, `multiselect`, `checkbox`, `radio`, `switch`, `image`, `custom` |
| Admin | `hidden`, `text`, `email`, `password`, `number`, `price`, `file`, `color`, `textarea`, `date`, `datetime`, `time`, `select`, `multiselect`, `checkbox`, `radio`, `switch`, `image`, `custom` |

The `form` component that wraps the fields is described in [Blade Components](./blade-components.md#form).

### Adding a Rule

Register a rule from a module script pushed onto the `scripts` stack of the view that renders the form, such as your theme's copy of it. The app bundle has assigned `window.defineRule` before the script runs, and the rule exists before the Vue app mounts, as in the booking view `packages/Webkul/Shop/src/Resources/views/products/view/types/booking/rental.blade.php`.

```blade
@pushOnce('scripts')
    <script type="module">
        defineRule('strong_password', (value) => {
            if (! value) {
                return true;
            }

            if (
                value.length >= 8
                && /[A-Z]/.test(value)
                && /[a-z]/.test(value)
                && /\d/.test(value)
            ) {
                return true;
            }

            return @json(trans('custom-theme::app.validation.strong-password'));
        });
    </script>
@endPushOnce
```

- Return `true` for an empty value, and let `required` decide whether the field may be empty.
- Return a string to show it as the error message. `@json()` writes the translation as an escaped JavaScript string, so quotes in it can't break the script. The key comes from your package's language files; see [Add translations](./creating-custom-theme-package.md#step-3-add-translations).

Then use the rule like any other:

```blade
<x-shop::form.control-group.control
    type="password"
    name="password"
    rules="required|strong_password"
    :label="trans('custom-theme::app.validation.password')"
/>
```

A theme with its own build ([Vite-Powered Theme Assets](./vite-powered-theme-assets.md)) can instead add the rule, with a message for each locale under `generateMessage`, to its copy of `js/plugins/vee-validate.js`.

## Server-Side Validation

The controller that receives a form validates it with a form request. The contact form's request uses a core rule class that matches the browser's `phone` rule:

**File:** `packages/Webkul/Shop/src/Http/Requests/ContactRequest.php`

```php
<?php

namespace Webkul\Shop\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Webkul\Core\Rules\PhoneNumber;
use Webkul\Customer\Facades\Captcha;

class ContactRequest extends FormRequest
{
    // ...

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return Captcha::getValidations([
            'name' => 'string|required',
            'email' => 'string|required',
            'contact' => new PhoneNumber,
            'message' => 'required',
        ]);
    }

    // ...
}
```

`HomeController::sendContactUsMail(ContactRequest $contactRequest)` type-hints it, so an invalid request is sent back before the method body runs. Validate your own package's forms the same way, with a form request in its `src/Http/Requests` directory. Laravel resolves a type-hinted form request from the container, so a theme package changes a core form's server rules by binding a subclass of its request, such as `ContactRequest`, in its provider's `register()`.

`packages/Webkul/Core/src/Rules` holds the rule classes Bagisto uses on the server:

| Class | Matching browser rule |
|---|---|
| `Webkul\Core\Rules\PhoneNumber` | `phone` |
| `Webkul\Core\Rules\Address` | `address` |
| `Webkul\Core\Rules\PostCode` | `postcode` |
| `Webkul\Core\Rules\Decimal` | `decimal` |
| `Webkul\Core\Rules\CommaSeparatedInteger` | `comma_separated_integer`, admin only |
| `Webkul\Core\Rules\Regex` | `regex_pattern`, admin only |
| `Webkul\Core\Rules\Code`, `Slug`, `StateBelongsToCountry` | None |

### Showing Server Errors in the Form

**A standard form.** `<x-shop::form>` without the `as` attribute posts normally. When validation fails, Laravel redirects back with the errors, and the form component hands `$errors->getMessages()` to VeeValidate as `initial-errors`, so each `form.control-group.error` shows the server's message under its field. Pass `:value="old('...')"` so the input keeps what was typed.

**An Ajax form.** For a failed JSON request, Laravel answers with status 422 and an `errors` object. VeeValidate's `handleSubmit` hands your submit method a `setErrors` action; pass the errors to it:

**File:** `packages/Webkul/Shop/src/Resources/views/customers/account/rma/create.blade.php`

```js
async rmaSubmit(params, { resetForm, setErrors }) {
    let formData = new FormData(this.$refs.rmaSubmit);

    this.rmaFormSubmit = false;

    try {
        const response = await this.$axios.post("{{ route('shop.customers.account.rma.store') }}", formData);

        this.$emitter.emit('add-flash', { type: 'success', message: response.data.messages });

        setTimeout(() => {
            window.location.href = response.data.redirect;
        }, 1000);
    } catch (error) {
        this.rmaFormSubmit = true;

        if (error.response.status == 422) {
            setErrors(error.response.data.errors);
        }
    }
},
```

## Things to Watch

- **The browser isn't a boundary.** Anyone can post to the route directly, so every rule in a `rules` attribute needs a counterpart in the form request.
- **Names must match exactly**, array suffixes included: `control-name="images[]"` for `name="images[]"`.
- **A rule name is global.** `defineRule()` with an existing name replaces that rule on every form on the page, core rules included.

## Next Step

Next, apply the same theming mechanism to the admin.

**Continue to:** [Creating an Admin Theme](./creating-admin-theme.md)

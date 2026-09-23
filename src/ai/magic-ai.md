# Generative AI (Magic AI)

Generative AI (Magic AI) is the core package `packages/Webkul/MagicAI`. It generates text and images for the admin, and powers image search, review translation and the checkout success message on the storefront. It is built on the [Laravel AI SDK](https://laravel.com/docs/ai) (`laravel/ai`) and picks the provider for each call from the model it is given; this page is the developer's side, and the user guide covers the admin screens.

| Piece | Where |
|---|---|
| Service class | `Webkul\MagicAI\MagicAI`, in `src/MagicAI.php` |
| Facade | `Webkul\MagicAI\Facades\MagicAI` |
| Helper | `magic_ai()`, in `src/Http/helpers.php` |
| Provider and model registry | `Webkul\MagicAI\AiProvider`, in `src/AiProvider.php` |
| One model enum per provider | `Webkul\MagicAI\Enums\Models\*`, each implementing `Webkul\MagicAI\Enums\Contracts\AiModelContract` |
| Service provider | `Webkul\MagicAI\Providers\MagicAIServiceProvider`, which only loads the helper |
| Configuration fields | `packages/Webkul/Admin/src/Config/system.php`, under `magic_ai` |

The package has no models, migrations or Concord module.

## Providers and Models

`AiProvider` registers eight providers. Each is a case of the SDK's `Laravel\Ai\Enums\Lab` enum and has a model enum whose case values are the model identifiers you pass:

| Provider | Model enum | Example text models | Image models | Default text model |
|---|---|---|---|---|
| `anthropic` | `AnthropicModel` | `claude-fable-5-1`, `claude-opus-5`, `claude-sonnet-5`, `claude-haiku-4-5-20251001` | none | `claude-sonnet-5` |
| `deepseek` | `DeepSeekModel` | `deepseek-v4-pro`, `deepseek-flash` | none | `deepseek-flash` |
| `gemini` | `GeminiModel` | `gemini-3.8-flash`, `gemini-3.7-flash`, `gemini-3.5-flash-lite`, `gemini-3.1-pro-preview` | `gemini-3-pro-image`, `gemini-3.1-flash-image`, `gemini-3.1-flash-lite-image` | `gemini-3.8-flash` |
| `groq` | `GroqModel` | `openai/gpt-oss-120b`, `openai/gpt-oss-20b` | none | `openai/gpt-oss-20b` |
| `mistral` | `MistralModel` | `mistral-large-latest`, `mistral-small-latest`, `mistral-large-2512`, `mistral-medium-3-5` | none | `mistral-small-latest` |
| `ollama` | `OllamaModel` | `gemma4:26b`, `qwen3.8:27b`, `gpt-oss:120b`, `llama4:scout` | none | `llama3.2:3b` |
| `openai` | `OpenAiModel` | `gpt-6-astra`, `gpt-5.6-sol`, `gpt-5.6-terra`, `gpt-4.1` | `gpt-image-2.5-sunburst`, `gpt-image-2.5-flare`, `gpt-image-2` | `gpt-5.6-terra` |
| `xai` | `XAiModel` | `grok-4.7`, `grok-4.6`, `grok-4.5`, `grok-4.3` | `grok-imagine-image-2.0`, `grok-imagine-image` | `grok-4.3` |

The enum cases in `packages/Webkul/MagicAI/src/Enums/Models` are the complete list.

## Configuration

Every setting is a system configuration field, read with `core()->getConfigData()`. The storefront fields are channel-based.

| Key | Type | Used for |
|---|---|---|
| `magic_ai.general.settings.enabled` | boolean | Master switch, checked together with each feature's own switch |
| `magic_ai.providers.<provider>.api_key` | password | API key, one per provider |
| `magic_ai.providers.ollama.url` | text | Ollama server URL, default `http://localhost:11434` |
| `magic_ai.admin_features.text_generation.enabled` | boolean | Text generation in the admin's TinyMCE editors |
| `magic_ai.admin_features.text_generation.providers` | multiselect | Providers whose text models the editor offers |
| `magic_ai.admin_features.image_generation.enabled` | boolean | Image generation in the admin image uploader |
| `magic_ai.admin_features.image_generation.providers` | multiselect | Providers whose image models the uploader offers |
| `magic_ai.storefront_features.image_search.enabled` | boolean | Image search keywords from AI. The storefront shows the image upload only while `catalog.products.settings.image_search`, on by default, is also on |
| `magic_ai.storefront_features.image_search.model` | select | Model for `analyzeImage()` |
| `magic_ai.storefront_features.review_translation.enabled` | boolean | Translation of reviews |
| `magic_ai.storefront_features.review_translation.model` | select | Model for `translate()` |
| `magic_ai.storefront_features.checkout_message.enabled` | boolean | The generated message on the order success page |
| `magic_ai.storefront_features.checkout_message.model` | select | Model for `checkoutMessage()` |

API keys are saved as configuration values in the database. On each call, Magic AI copies the key of the model's provider into the SDK's `ai.providers.<provider>.key` configuration, and for Ollama the URL into `ai.providers.ollama.url`. When a provider's field is empty it copies nothing, and the SDK's own key from `.env` applies, as read in `config/ai.php` (for example `OPENAI_API_KEY`).

## Calling It

The helper and the facade both give you the `Webkul\MagicAI\MagicAI` service:

| Method | Returns | Model used |
|---|---|---|
| `generateContent(string $prompt, ?string $model = null): string` | The generated text, trimmed | The one you pass |
| `generateImage(string $prompt, array $options = [], ?string $model = null): array` | A list of `['url' => 'data:<mime>;base64,...']` items | The one you pass |
| `analyzeImage(string $imagePath): string` | Comma-separated search keywords for the product in a local image file | `magic_ai.storefront_features.image_search.model` |
| `translate(string $content, string $locale): string` | The content translated into `$locale` | `magic_ai.storefront_features.review_translation.model` |
| `checkoutMessage(mixed $order): string` | Plain text built from the order's items, the customer's name, the current locale and the channel name | `magic_ai.storefront_features.checkout_message.model` |

The last three read their model for the current channel. When none is saved, or when the saved model is no longer one the store offers, they use `gpt-5.6-terra`, the default text model of `AiProvider::defaultTextProvider()` (`openai`), which needs an OpenAI key even when the store configured another provider.

A model the registry doesn't know throws a `RuntimeException` naming it, rather than falling through to the SDK's own default provider.

```php
use Webkul\MagicAI\Facades\MagicAI;

$description = magic_ai()->generateContent(
    'Write a two-sentence description of a brown leather wallet.',
    'gpt-4.1',
);

$summary = MagicAI::generateContent('Summarise our returns policy in one line.', 'claude-haiku-4-5-20251001');
```

### Images

`generateImage()` takes up to three options:

| Option | Values | Default |
|---|---|---|
| `n` | Number of images | `1` |
| `size` | `1:1`, `3:2` or `2:3` | `1:1` |
| `quality` | `high`, `medium` or `low` | Not sent |

```php
$images = magic_ai()->generateImage('A running shoe on a plain white background', [
    'n' => 2,
    'size' => '3:2',
    'quality' => 'high',
], 'gpt-image-2.5-flare');

$firstImageUrl = $images[0]['url'];
```

Each image is a separate request to the provider. Every provider receives the size and quality as SDK options; for providers other than OpenAI and Gemini they are also written into the prompt.

## How the Core Features Call It

The admin controller is `packages/Webkul/Admin/src/Http/Controllers/MagicAIController.php`; the storefront controllers are in `packages/Webkul/Shop/src/Http/Controllers/`.

| Feature | Entry point | What it does |
|---|---|---|
| Admin text | `MagicAIController::content()`, route `admin.magic_ai.content` | Validates `prompt` and an optional `model`, and returns `{ "content": ... }`, or a `500` carrying the provider's own message, extracted by `Webkul\MagicAI\ProviderError` |
| Admin images | `MagicAIController::image()`, route `admin.magic_ai.image` | Validates `prompt`, `model`, `n` (1 to 10), `size` and `quality`, and returns `{ "images": [...] }` |
| Image search | `SearchController::upload()`, route `shop.search.upload` | Stores the uploaded image and, when both switches are on, returns keywords from `analyzeImage()` with `engine` set to `ai`. Otherwise, or when the call throws, `engine` is `tensorflow` and the page classifies the image in the browser with TensorFlow.js |
| Review translation | `API\ReviewController::translate()`, route `shop.api.products.reviews.translate` | Translates an approved review into the current locale's name |
| Checkout message | `OnepageController::success()` | When both switches are on, sets `$order->checkout_message` for `shop::checkout.success`; if the call throws, the message is left out |

The admin's `tinymce` and `media/images` components show their generate option when the master switch and the feature's `enabled` are both on, and list the models of the feature's `providers` through `AiProvider::modelsForProviders()`. The storefront's `products/view/reviews.blade.php` shows the translate link when `review_translation.enabled` is on.

## Using It from Your Package

A package that generates content should let the merchant choose the model, respect the master switch and cope with a failed call. The example is a package that writes a one-sentence product summary. First, a configuration field offers every text model. [System Configuration](../package-development/system-configuration.md) covers registering the file and its translations:

**File:** `packages/Webkul/ProductSummary/src/Config/system.php`

```php
<?php

use Webkul\MagicAI\AiProvider;

return [
    [
        'key' => 'product_summary',
        'name' => 'product_summary::app.configuration.title',
        'info' => 'product_summary::app.configuration.info',
        'sort' => 10,
    ], [
        'key' => 'product_summary.general',
        'name' => 'product_summary::app.configuration.general.title',
        'info' => 'product_summary::app.configuration.general.info',
        'icon' => 'settings/settings.svg',
        'sort' => 1,
    ], [
        'key' => 'product_summary.general.settings',
        'name' => 'product_summary::app.configuration.general.settings.title',
        'info' => 'product_summary::app.configuration.general.settings.info',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'model',
                'title' => 'product_summary::app.configuration.general.settings.model',
                'type' => 'select',
                'channel_based' => true,
                'options' => AiProvider::textModelOptions(),
            ],
        ],
    ],
];
```

Then a class calls Magic AI with the saved model:

**File:** `packages/Webkul/ProductSummary/src/Services/SummaryWriter.php`

```php
<?php

namespace Webkul\ProductSummary\Services;

use Exception;

class SummaryWriter
{
    /**
     * Summarise a product description in one sentence, or return null when that isn't possible.
     */
    public function summarise(string $description): ?string
    {
        if (! core()->getConfigData('magic_ai.general.settings.enabled')) {
            return null;
        }

        $model = core()->getConfigData('product_summary.general.settings.model');

        if (! $model) {
            return null;
        }

        try {
            return magic_ai()->generateContent(
                "Summarise this product description in one sentence:\n\n{$description}",
                $model,
            );
        } catch (Exception $e) {
            report($e);

            return null;
        }
    }
}
```

Resolve `SummaryWriter` from the container in a controller, a listener or a queued job. Each call waits for the provider, so generate in a queued job when you work through many products.

### Listing Models in Your Own Interface

`AiProvider`'s static methods return what the admin forms use:

| Method | Returns |
|---|---|
| `textModelOptions()`, `imageModelOptions()` | Every text or image model as `['title' => 'OpenAI: GPT-4.1', 'value' => 'gpt-4.1']` |
| `textProviderOptions()`, `imageProviderOptions()` | The providers with at least one text or image model, in the same shape |
| `modelsForProviders(array $enabledProviders, string $type = 'text')` | The `text` or `image` models of the given providers, in the same shape |
| `resolveModel(string $model): ?AiModelContract` | The enum case for a model value, or `null` |
| `defaultTextModel(string $provider)`, `defaultImageModel(string $provider)` | A provider's recommended model case, or `null` |
| `isProviderSupported(string $provider): bool` | Whether the provider is registered |
| `label(string $provider): string` | The provider's display name |

## Changing a Prompt

The facade and the helper resolve `Webkul\MagicAI\MagicAI` from the service container, so a package can bind a subclass instead of editing core. The methods that build prompts are `protected`:

**File:** `packages/Webkul/ProductSummary/src/MagicAI/ShortCheckoutMessage.php`

```php
<?php

namespace Webkul\ProductSummary\MagicAI;

use Webkul\MagicAI\MagicAI;

class ShortCheckoutMessage extends MagicAI
{
    /**
     * Build a shorter checkout success prompt.
     */
    protected function buildCheckoutPrompt(mixed $order): string
    {
        return implode("\n\n", [
            'Write a two-sentence thank-you message for this order. Return plain text only.',
            "Customer: {$order->customer_full_name}",
            'Store: '.core()->getCurrentChannel()->name,
        ]);
    }
}
```

Bind the subclass in the `register()` method of your package's existing service provider. The sample shows only the binding, so keep whatever else that method already does, such as merging `Config/system.php`:

**File:** `packages/Webkul/ProductSummary/src/Providers/ProductSummaryServiceProvider.php`

```php
<?php

namespace Webkul\ProductSummary\Providers;

use Illuminate\Support\ServiceProvider;
use Webkul\MagicAI\MagicAI;
use Webkul\ProductSummary\MagicAI\ShortCheckoutMessage;

class ProductSummaryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(MagicAI::class, ShortCheckoutMessage::class);
    }
}
```

A protected method isn't a stable interface, so compare your override with `packages/Webkul/MagicAI/src/MagicAI.php` after each upgrade.

There is no extension point for adding a provider or a model. `AiProvider::$providers` is `private static` and the model enums are core files, so anything added there is lost on the next update.

## Testing Code That Calls It

The Laravel AI SDK ships fakes, so a test never reaches a provider. `generateContent()`, `translate()`, `analyzeImage()` and `checkoutMessage()` prompt an anonymous agent through the SDK's `agent()` helper, which `Laravel\Ai\AnonymousAgent::fake()` answers. `generateImage()` goes through `Laravel\Ai\Image`, which `Image::fake()` answers with placeholder images:

**File:** `packages/Webkul/ProductSummary/tests/Feature/MagicAITest.php`

```php
<?php

use Laravel\Ai\AnonymousAgent;
use Laravel\Ai\Image;

it('generates text without calling the provider', function () {
    AnonymousAgent::fake(['A slim brown leather wallet.']);

    expect(magic_ai()->generateContent('Describe a wallet.', 'gpt-4.1'))
        ->toBe('A slim brown leather wallet.');

    AnonymousAgent::assertPrompted('Describe a wallet.');
});

it('generates images without calling the provider', function () {
    Image::fake();

    $images = magic_ai()->generateImage('A running shoe', ['n' => 2], 'gpt-image-2.5-flare');

    expect($images)->toHaveCount(2);

    Image::assertGenerated(fn ($prompt) => str_contains($prompt->prompt, 'A running shoe'));
});
```

The tests need a booted application with a database, because Magic AI reads the provider key from configuration; [Writing Tests for a Package](../advanced/testing-with-pest.md#writing-tests-for-a-package) sets up the test case and the suite. `assertPrompted()` with a string compares the whole prompt, so for the storefront methods, whose prompts Magic AI builds around your text, pass a closure that inspects `$prompt->prompt` instead.

## Things to Watch

- **Always pass a model from the enums.** With no model, or a value no enum contains, Magic AI resolves no provider and copies no key. The SDK then uses its defaults from `config/ai.php`: `ai.default` (`openai`, with `OPENAI_API_KEY`) for text, and `ai.default_for_images` (`gemini`, with `GEMINI_API_KEY`) for images.
- **Image search needs a model that accepts images.** `analyzeImage()` sends the photo as an attachment, but the model field lists every text model. When the call fails, `SearchController` reports the exception and the storefront falls back to TensorFlow.js.
- **Check the switches in your own endpoints.** If your package exposes a route that calls Magic AI, check `magic_ai.general.settings.enabled` and your feature's setting in the controller, not only in the view that shows the button.
- **Any signed-in admin can call the core generate routes.** `admin.magic_ai.content` and `admin.magic_ai.image` are in the unrestricted list of `packages/Webkul/User/src/Http/Middleware/Bouncer.php`, whatever the admin's role.
- **Calls run inside the request.** The response waits for the provider, including on the checkout success page.
- **`laravel/ai` is pre-1.0.** Bagisto 2.5 requires `^0.7.0` where Bagisto 2.4 required `^0.2.2`. Magic AI's own code didn't change between them, but code of yours that calls `Laravel\Ai` directly should be checked again on each upgrade.

## Related Pages

- [WebMCP](./webmcp.md): storefront tools that a browser agent calls, a separate feature that doesn't use Magic AI.
- [System Configuration](../package-development/system-configuration.md): registering the configuration fields your package reads.
- [Testing with Pest](../advanced/testing-with-pest.md): the test case and suites for package tests.
- [AI in Bagisto](./introduction.md): how the generative and agentic features fit together.

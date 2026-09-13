# Magic AI

Magic AI is Bagisto's built-in generative AI engine. It powers content and image generation
in the admin panel and AI features on the storefront, using whichever AI provider you
configure. It is the merchant-facing half of Bagisto's [agentic commerce](./introduction.md)
story; the shopper-facing half, agents acting on the storefront, is [WebMCP](./webmcp.md).

It is built on the [Laravel AI](https://laravel.com/docs/ai) SDK, so a single configuration
works across every supported provider. The package is the same on Bagisto 2.4 and the current
development version; only the SDK version underneath differs.

## Supported Providers

Magic AI supports eight providers out of the box:

**OpenAI** · **Anthropic** · **Gemini** · **Groq** · **xAI** · **DeepSeek** · **Mistral** · **Ollama**

The provider is derived from the **model**: every model Magic AI knows is a case of a
per-provider enum (`Webkul\MagicAI\Enums\Models\OpenAiModel`, `GeminiModel`, and so on), and
the registry in `Webkul\MagicAI\AiProvider` maps each enum to its Laravel AI provider. A model
string that is not in an enum skips the provider lookup and the API-key injection and is passed
as-is to the SDK's default provider, which usually fails, so pick values from the enums; a few
examples:

| Provider | Text models | Image models |
|---|---|---|
| OpenAI | `gpt-5.2`, `gpt-5.1`, `gpt-5`, `gpt-5-mini`, `gpt-5-nano`, `gpt-4.1`, `gpt-4.1-mini`, `gpt-4.1-nano` | `gpt-image-1.5`, `gpt-image-1` |
| Gemini | `gemini-3.1-pro-preview`, `gemini-3-flash-preview`, `gemini-2.5-pro`, `gemini-2.5-flash`, `gemini-2.5-flash-lite` | `imagen-4.0-generate-001`, `imagen-4.0-ultra-generate-001`, `imagen-4.0-fast-generate-001`, `imagen-3.0-generate-002` |
| Anthropic | `claude-opus-4-6`, `claude-sonnet-4-6`, `claude-haiku-4-5-20251001` and earlier 4.x releases | — |
| Ollama | `llama4:scout`, `llama3.3:70b`, `deepseek-r1:8b`, `qwen3:8b` and others | — |

The recommended defaults are `gpt-4.1` for text and Gemini's `imagen-4.0-generate-001` for
images; the storefront features fall back to `gpt-4.1` when no model has been saved.

::: tip Run models locally
Ollama lets you run open-source models on your own server with no per-request cost. Set its
URL (default `http://localhost:11434`) in the provider settings.
:::

## Configuration

Everything is configured from the admin panel under **Configure → Magic AI**. There are four groups:

### 1. General

Enable or disable Magic AI globally (`magic_ai.general.settings.enabled`).

### 2. Providers

Add the **API key** for each provider you want to use (Ollama also takes a base **URL**).
You only need to configure the providers you actually plan to use. The key is read at call
time and injected into the Laravel AI configuration, so nothing goes into `.env`.

### 3. Admin Features

| Feature | Description |
|---|---|
| **Text Generation** | The **Magic AI** button in every TinyMCE editor in the admin (product and category descriptions, CMS pages, email templates). |
| **Image Generation** | Create images from a text prompt inside the admin product image uploader. |

For each, toggle it on and choose which **providers** are available to admins. The editor
then lists the text or image models of those providers and the admin picks one per request.
The two endpoints, `admin.magic_ai.content` and `admin.magic_ai.image`, are available to
every logged-in admin; they carry no ACL permission of their own.

### 4. Storefront Features

These are **channel-based** — configure them per store channel, each with its own model:

| Feature | Description |
|---|---|
| **Image Search** | Shoppers upload a photo; Magic AI extracts keywords to search the catalog. When the feature is off, the storefront falls back to an in-browser TensorFlow.js classifier. |
| **Review Translation** | A **Translate** link under each review translates it into the shopper's locale. |
| **Checkout Message** | A personalised success message is generated after an order is placed. |

::: warning API keys
Provider API keys are stored as secure (password) config values. Never commit them to your
repository — add them through the admin panel.
:::

## Using Magic AI in Code

Magic AI is available through the `magic_ai()` helper or the `Webkul\MagicAI\Facades\MagicAI`
facade. The provider is resolved automatically from the model name, and the stored API key is
injected for you.

```php
use Webkul\MagicAI\Facades\MagicAI;

// Generate text (uses the SDK's default model when none is passed)
$text = magic_ai()->generateContent('Write a product description for a leather wallet.');

// Generate text with a specific model
$text = MagicAI::generateContent('Summarize this policy in one line.', 'gpt-4.1');
```

### Generating Images

```php
$images = magic_ai()->generateImage('A minimalist running shoe on a white background', [
    'n' => 1,
    'size' => '1:1',
    'quality' => 'high',
], 'gpt-image-1');

$src = $images[0]['url'];
```

The options are `n` (how many images), `size` (`1:1` square, `3:2` landscape or `2:3`
portrait) and `quality` (`high`, `medium` or `low`). Each returned item is an array with a
`url` key holding a `data:image/png;base64,…` URL.

Providers whose API has no size or quality parameters (xAI, for one) get those requirements
written into the prompt instead.

### Storefront Helpers

These read the model from your channel's storefront configuration automatically:

```php
// Analyze an uploaded image → comma-separated search keywords
$keywords = magic_ai()->analyzeImage($absoluteImagePath);

// Translate any text into a locale
$translated = magic_ai()->translate($review->comment, 'fr');

// Build a personalised checkout success message for an order
$message = magic_ai()->checkoutMessage($order);
```

### Reading Config in Code

All settings are readable via `core()->getConfigData()`:

```php
if (core()->getConfigData('magic_ai.general.settings.enabled')) {
    $model = core()->getConfigData('magic_ai.storefront_features.review_translation.model');
}
```

### Listing models for a UI

`AiProvider` also serves the admin forms, and a package can reuse it:

```php
use Webkul\MagicAI\AiProvider;

AiProvider::textModelOptions();                       // every text model, grouped for a select
AiProvider::modelsForProviders(['openai'], 'image');  // image models of the given providers
AiProvider::resolveModel('gpt-4.1')?->provider();     // Lab::OpenAI
```

::: tip Extending Magic AI
Magic AI lives in the `packages/Webkul/MagicAI` package. Provider support is driven by a single
registry (`AiProvider::$providers`) plus one model enum per provider implementing
`AiModelContract`; adding a provider the Laravel AI SDK supports means adding one registry
entry and one enum.
:::

# Magic AI

Magic AI is Bagisto's built-in AI engine. It powers content and image generation in the
admin panel and AI features on the storefront, using whichever AI provider you configure.

It is built on the [Laravel AI](https://laravel.com/docs/ai) SDK, so a single configuration
works across every supported provider.

## Supported Providers

Magic AI supports eight providers out of the box:

**OpenAI** · **Anthropic** · **Gemini** · **Groq** · **xAI** · **DeepSeek** · **Mistral** · **Ollama**

You pick the **model per feature**, so you can mix providers — for example, OpenAI for text and Gemini for images.

::: tip Run models locally
Ollama lets you run open-source models on your own server with no per-request cost. Set its
URL (default `http://localhost:11434`) in the provider settings.
:::

## Configuration

Everything is configured from the admin panel under **Configure → Magic AI**. There are four groups:

### 1. General

Enable or disable Magic AI globally.

### 2. Providers

Add the **API key** for each provider you want to use (Ollama also takes a base **URL**).
You only need to configure the providers you actually plan to use.

### 3. Admin Features

| Feature | Description |
|---|---|
| **Text Generation** | AI writing assistant in admin editors (product descriptions, CMS pages, etc.). |
| **Image Generation** | Create images from a text prompt inside the admin. |

For each, toggle it on and choose which **providers** are available to admins.

### 4. Storefront Features

These are **channel-based** — configure them per store channel, each with its own model:

| Feature | Description |
|---|---|
| **Image Search** | Shoppers upload a photo; Magic AI extracts keywords to search the catalog. |
| **Review Translation** | Customer reviews are translated into the shopper's locale. |
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

// Generate text (uses the configured default model when none is passed)
$text = magic_ai()->generateContent('Write a product description for a leather wallet.');

// Generate text with a specific model
$text = MagicAI::generateContent('Summarize this policy in one line.', 'gpt-4o');
```

### Generating Images

```php
$images = magic_ai()->generateImage('A minimalist running shoe on a white background', [
    'n'       => 1,           // number of images
    'size'    => '1:1',       // 1:1 (square), 3:2 (landscape), 2:3 (portrait)
    'quality' => 'high',      // high, medium, low
]);

// Each item is a data URL: ['url' => 'data:image/png;base64,...']
$src = $images[0]['url'];
```

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

::: tip Extending Magic AI
Magic AI lives in the `packages/Webkul/MagicAI` package. Provider support is driven by a single
registry (`AiProvider`) plus a model enum per provider — adding a provider means adding one
registry entry and one enum.
:::

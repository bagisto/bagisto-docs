# Image Search

[[TOC]]

## Introduction

In this section, we will guide you on integrating image search with your new theme. Our **`Default Theme`** utilize [TensorFlow.js](https://www.tensorflow.org/js) and load the **`TensorFlow`** MobileNet model.

The **`TensorFlow`** JS model doesn't require any machine learning expertise. You simply need to pass browser-based image elements, such as **`<img>`**, and it will return an array containing the best predictions along with their confidences.

## Usage

Ensure that all your scripts are loaded in the footer. If you examine the **`default theme`** you will notice that we use the **`yielding`** feature. You can also use the same approach by including a **`scripts`** yield in your main layouts.

Let's begin by loading the library and model:

```html
@pushOnce('scripts')
  <script type="module">
        app.component('v-image-search', {
            template: '#v-image-search-template',

            data() {
                return {
                    uploadedImageUrl: '',

                    isSearching: false,
                };
            },

            methods: {
                loadLibrary() {
                    this.$shop.loadDynamicScript(
                        'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js', () => {
                            this.$shop.loadDynamicScript(
                                'https://cdn.jsdelivr.net/npm/tensorflow-models-mobilenet-patch@2.1.1/dist/mobilenet.min.js', () => {
                                    this.analyzeImage();
                                }
                            );
                        }
                    );
                },

                //
            },
        });
    </script>
@endpush
```

Since the **`TensorFlow`** model only requires an image element, we will use a sample image element:

```html
  <input
      type="file"
      class="hidden"
      ref="imageSearchInput"
      id="v-image-search"
      @change="loadLibrary()"
  />

  <img
      id="uploaded-image-url"
      class="hidden"
      :src="uploadedImageUrl"
      alt="uploaded image url"
      width="20"
      height="20"
  />
```

For better understanding, please visit the [Bagisto on GitHub](https://github.com/bagisto/bagisto/blob/master/packages/Webkul/Shop/src/Resources/views/search/images/index.blade.php).

::: tip
Create a query string from the predictions and redirect to the search route.
:::

## Conclusion

By following the entire flow, you can see that we pass an image element to the **`TensorFlow`** model. In return, we receive an array of predictions. From these predictions, we can generate query strings and redirect to the search route.
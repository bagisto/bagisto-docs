# Image Search

[[TOC]]

## Introduction

In this section, we will guide you on integrating image search with your new theme. Our **`Default Theme`** and **`Velocity Theme`** utilize [TensorFlow.js](https://www.tensorflow.org/js) and load the **`TensorFlow`** MobileNet model.

The **`TensorFlow`** JS model doesn't require any machine learning expertise. You simply need to pass browser-based image elements, such as **`<img>`**, and it will return an array containing the best predictions along with their confidences.

## Usage

Ensure that all your scripts are loaded in the footer. If you examine the **`default theme`** and **`velocity theme`**, you will notice that we use the `yielding` feature. You can also use the same approach by including a `scripts` yield in your main layouts.

Let's begin by loading the library and model:

```php
@push('scripts')
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet" defer></script>
@endpush
```

Since the **`TensorFlow`** model only requires an image element, we will use a sample image element:

```php
@push('scripts')
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet" defer></script>

  <img id="imageElement" src="random-image.jpg"></img>
@endpush
```

::: tip
This is a sample image element. You can add a file input to allow users to select an image.
:::

Now, for the main part, pass your image element to the model:

```php
@push('scripts')
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet" defer></script>

  <img id="imageElement" src="random-image.jpg"></img>

  <script>
    /* Get the image element */
    const imageElement = document.getElementById('imageElement');

    /* Load the model */
    mobilenet.load().then(model => {
      /* Classify the image */
      model.classify(imageElement).then(predictions => {
        /* Use the predictions according to your needs */
        console.log(predictions);
      });
    });
  </script>
@endpush
```

Now you have all the predictions. Simply pass your predictions to your search input.

::: tip
Create a query string from the predictions and redirect to the search route.
:::

## Conclusion

By following the entire flow, you can see that we pass an image element to the **`TensorFlow`** model. In return, we receive an array of predictions. From these predictions, we can generate query strings and redirect to the search route.
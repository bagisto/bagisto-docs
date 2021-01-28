# Integrate image search in theme

In this section, we will show you how you can integrate image search with your new theme. If you check our **default theme** and **velocity theme**, you will come to know that we are using the [Tensorflow](https://www.tensorflow.org/js) JS and loading the model named **Tensorflow** MobileNet.

The **Tensorflow** JS model does not need any knowledge for machine learning. You just need to pass any browser-based image elements `<img>` and it will return an array that is best suited according to their predictions and their confidences.

## Usage

Make sure all your scripts are loaded in the footer, if you check the **default theme** and **velocity theme** we are using the yielding. So you can also use the same yielding. So we are assuming that you have added `scripts` yield in your main layouts.

- Let's start with the loading of the library and model,

  ~~~php
  @push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet" defer></script>
  @endpush
  ~~~

- As **Tensorflow** model only need the image element. So, we are just taking the sample image element.

  ~~~php
  @push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet" defer></script>

    <img id="imageElement" src="random-image.jpg"></img>
  @endpush
  ~~~

  ::: tip

  This is the sample image element, you can add file input to get the image from the user.

  :::

- Now, the main part just pass your image element to the model,

  ~~~php
  @push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet" defer></script>

    <img id="imageElement" src="random-image.jpg"></img>

    <script>
      /* getting image element */
      const imageElement = document.getElementById('imageElement');

      /* loading model */
      mobilenet.load().then(model => {
        /* classifying the image */
        model.classify(imageElement).then(predictions => {
          /* use predictions according to your need */
          console.log(predictions);
        });
      });
    </script>
  @endpush
  ~~~

- Now you have all the predictions. Just pass all your predictions to your search input.

  ::: tip

  Make query string from the predictions and redirect to the search route.

  :::

## Conclusion

If you check the whole flow, you will come to know that we are passing an image element to **Tensorflow**'s model in return we are getting the array of predictions and from that predictions, we are making the query strings and redirecting to the search route.

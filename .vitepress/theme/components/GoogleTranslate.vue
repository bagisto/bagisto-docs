<template>
  <div class="google-translate-container">
    <div id="google_translate_element"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initGoogleTranslate();
  },

  methods: {
    initGoogleTranslate() {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false },
            'google_translate_element'
          );
        };
      }

      if (!document.querySelector('script[src*="translate_a/element.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.defer = true;
        document.body.appendChild(script);
      }
    },
  }
};
</script>

<style scoped>
.google-translate-container {
  display: inline-block;
  margin: 2px;
  width: 20px;
  max-height: 20px;
  line-height: 1 !important;
}

:deep(.goog-te-gadget-simple) {
  padding: 0 !important;
  background: none !important;
  border: none !important;
  width: 20px !important;
  height: 20px !important;
  overflow: hidden !important;
}

:deep(.goog-te-gadget-simple span) {
  display: none !important;
}

:deep(.goog-te-banner-frame) {
  display: none !important;
}

:deep(.no-pointer-events) {
  pointer-events: none;
}
</style>

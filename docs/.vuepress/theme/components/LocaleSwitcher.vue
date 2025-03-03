<template>
  <div class="locale-switcher-container">
    <!-- Google Translate Element -->
    <div id="google_translate_element"></div>
  </div>
</template>

<script>
  export default {
    name: 'LocaleSwitcher',
    
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
            this.observeTranslateMenu();
          };
        }

        if (!document.querySelector('script[src*="translate_a/element.js"]')) {
          const script = document.createElement('script');
          script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          script.defer = true;
          document.body.appendChild(script);
        }
      },
      observeTranslateMenu() {
        const menuObserver = new MutationObserver(() => {
          const menuFrame = document.querySelector('.goog-te-menu-frame.skiptranslate');
          const gadget = document.querySelector('.skiptranslate.goog-te-gadget');
          if (menuFrame?.style.visibility === 'visible') {
            gadget?.classList.add('no-pointer-events');
          } else {
            gadget?.classList.remove('no-pointer-events');
          }
        });

        menuObserver.observe(document.body, { childList: true, subtree: true });
      }
    }
  };
</script>

<style scoped>
  .locale-switcher-container {
    display: inline-block;
    max-height: 28px; 
    line-height: 1 !important;
  }

  .goog-te-gadget-simple {
    display: flex;
    align-items: center;
    padding: 2px !important; 
    height: 24px;
    line-height: 24px; 
  }

  .goog-te-gadget-simple .goog-te-menu-value span {
    color: #333 !important;
    text-decoration: none !important;
    font-size: 12px;
  }

  .goog-te-gadget-icon {
    margin-right: 0 !important;
    height: 18px; 
    width: 18px;
  }

  .no-pointer-events {
    pointer-events: none;
  }
</style>
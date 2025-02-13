<template>
  <div class="gtranslate_select_box notranslate">
    <div id="google_translate_element"></div>
    <div class="gtranslate_btn" 
      :data-lang="selectedLang" 
      @click="toggleDropdown"
    >
      <span class="globe-icon">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="black" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20"></path>
        </svg>
        {{ selectedLang.toUpperCase() }}
      </span>
    </div>
    <div class="gtranslate_dropdown" :class="{ toggle: isDropdownOpen }">
      <div 
        v-for="language in languages" 
        :key="language.code"
        class="option" 
        :class="{ selected: selectedLang === language.code }"
        :data-lang="language.code" 
        @click="handleLanguageSwitch(language.code)"
      >
        {{ language.name }}
        <svg 
          v-if="selectedLang === language.code" 
          class="check-icon" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M20 6L9 17L4 12" 
            stroke="#0041FF" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleTranslate',
  data() {
    return {
      selectedLang: 'en',
      isDropdownOpen: false,
      languages: [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'Arabic' },
        { code: 'es', name: 'Spanish' },
        { code: 'pt', name: 'Portuguese' }
      ],
    };
  },
  mounted() {
    this.initializeFromCookie();
    this.loadGoogleTranslate();
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    loadGoogleTranslate() {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', includedLanguages: 'en,ar,es,pt', autoDisplay: false },
            'google_translate_element'
          );
          setTimeout(this.syncWithGoogleTranslate, 1000);
        };

        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    },
    syncWithGoogleTranslate() {
      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        googleCombo.value = this.selectedLang;
        googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
        if (window.jQuery) window.jQuery(googleCombo).trigger('change');
      }
      this.updateCookies();
    },
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleLanguageSwitch(langCode) {
      if (this.selectedLang !== langCode) {
        this.selectedLang = langCode;
        this.syncWithGoogleTranslate();
      }
      this.isDropdownOpen = false;
    },
    updateCookies() {
      document.cookie = `googtrans=/auto/${this.selectedLang}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    },
    handleClickOutside(event) {
      if (!event.target.closest('.gtranslate_select_box')) {
        this.isDropdownOpen = false;
      }
    },
    initializeFromCookie() {
      const match = document.cookie.match(/googtrans=\/auto\/(\w+)/);
      if (match && this.languages.some(lang => lang.code === match[1])) {
        this.selectedLang = match[1];
      }
    }
  }
};
</script>

<style scoped>
#google_translate_element {
  display: none;
}

.gtranslate_select_box {
  position: relative;
}

.gtranslate_btn {
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 1.5rem;
}

.globe-icon {
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 4px;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
}

.gtranslate_dropdown {
  display: none;
  position: absolute;
  right: 0;
  top: 50px;
  width: 170px;
  padding: 22px 16px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.08);
  z-index: 1000;
}

.gtranslate_dropdown.toggle {
  display: block;
}

.gtranslate_dropdown::before {
  content: '';
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  transform: rotate(45deg);
  position: absolute;
  top: -8px;
  right: 14px;
  box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.04);
}

.option {
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  line-height: normal;
}

.option:hover {
  background: #f8f8f8;
}

</style>

<style>
  iframe.skiptranslate {
    display: none !important;
  }
</style>
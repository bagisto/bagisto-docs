<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="top-section"> 
      <TopNav v-if="showTopNav" />

      <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
      />
    </div>

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import TopNav from '@theme/components/TopNav.vue';
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    TopNav,
  },

  data () {
    return {
      isSidebarOpen: false,

      showTopNav: false,
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || themeConfig.contactUs
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.updateTopNavStyles();

    this.$router.afterEach(() => {
      this.isSidebarOpen = false;

      this.updateTopNavStyles();
    });

    function setPageMarginTop() {
      const topSection = document.querySelector('.top-section');
      const page = document.querySelector('.page');
      const sidebar = document.querySelector('.custom-sidebar-top-height');
      if (sidebar && topSection) {
        sidebar.style.top = `${topSection.clientHeight}px`;
      }

      if (topSection && page) {
        page.style.marginTop = `${topSection.clientHeight}px`;
      }
    }

    window.addEventListener('resize', setPageMarginTop);
    window.addEventListener('load', setPageMarginTop);

    setPageMarginTop();

    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', setPageMarginTop);
      window.removeEventListener('load', setPageMarginTop);
    });
  },

  methods: {
    updateTopNavStyles() {
      let currentPath = this.$route.path.split('/');

      let version = currentPath[1];

      if (version) {
        if ([`master`, `2.3`, `2.2`, '2.1', '2.0', '2.x', '1.5.x', '1.x'].includes(version)) {
          this.showTopNav = true;

          this.applyTopNavCustomStyles();
        }
      } else {
        this.showTopNav = false;
      }
    },

    applyTopNavCustomStyles() {
      setTimeout(() => {
        document.querySelectorAll('.navbar').forEach(element => element.classList.add('custom-navbar-top-height'));
        document.querySelectorAll('.sidebar').forEach(element => element.classList.add('custom-sidebar-top-height'));
        document.querySelectorAll('.theme-default-content').forEach(element => element.classList.add('custom-wrapper'));
        document.querySelectorAll('.top-nav').forEach(element => element.classList.remove('no-custom-navbar'));
      }, 0);
    },

    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

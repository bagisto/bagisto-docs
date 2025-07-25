<template>
  <nav
    v-if="userLinks.length || repoLink"
    class="nav-links"
  >
    <!-- user links -->
    <div
      v-for="item in userLinks"
      :key="item.link"
      class="nav-item"
    >
      <DropdownLink
        v-if="item.type === 'links'"
        :item="item"
      />
      <NavLink
        v-else
        :item="item"
      />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ repoLabel }}
      <OutboundLink />
    </a>

    <a
      :href="contactUs.link"
      class="nav-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ contactUs.text }}
      <OutboundLink />
    </a>

    <div 
      class="nav-item" 
      v-if="$route.path.split('/')[1] !== ''"
    >
      <select 
        v-model="version" 
        @change="changeVersion"
      >
        <option value="master">Master</option>

        <option value="2.3">2.3</option>

        <option value="2.2">2.2</option>

        <option value="2.1">2.1</option>

        <option value="2.0">2.0</option>

        <option value="1.5.x">1.5.x</option>
        
        <option value="1.x">1.x</option>
      </select>
    </div>

    <LocaleSwitcher class="nav-item" />
  </nav>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import { resolveNavLinkItem } from '../util'
import NavLink from '@theme/components/NavLink.vue'
import LocaleSwitcher from '@theme/components/LocaleSwitcher.vue'

export default {
  name: 'NavLinks',

  components: {
    NavLink,
    DropdownLink,
    LocaleSwitcher
  },

  data() {
    return {
      version: '2.3',
    };
  },
  
  mounted() {
    let currentPath = this.$route.path.split('/');

    this.version = currentPath[1] || '2.3';

    this.currentVersion();
  },

  watch: {
    $route() {
      this.currentVersion();
    }
  },

  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },

    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
      return null
    },

    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    },

    contactUs () {
      const { contactUs } = this.$site.themeConfig;

      return contactUs;
    },
  },

  methods: {
    changeVersion() {
      let currentPath = this.$route.path.split('/');

      currentPath[1] = this.version;

      this.$router.push(currentPath.join('/'));
    },

    currentVersion() {
      this.version = this.$route.path.split('/')[1] || '2.3';
    }
  },
}
</script>

<style lang="stylus">
.nav-links
  display: flex
  align-items: center
  gap: 1rem
  a
    line-height 1.4rem
    color inherit
    &:hover, &.router-link-active
      color $accentColor
  .nav-item
    position relative
    display inline-block
    line-height 2rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $textColor
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>

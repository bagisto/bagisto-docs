import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Bagisto",
  description: "Bagisto Developer Documentation",

  vite: {
    server: {
      host: '0.0.0.0'
    }
  },

  srcDir: './src',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,

    logo: {
      light: 'logo.png',
      dark: 'logo.png'
    },

    nav: [
      { text: 'User Guide', link: 'https://docs.bagisto.com/' },
      { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
      { text: 'Community Forum', link: 'https://forums.bagisto.com/' },
      { text: 'Contact Us', link: 'https://bagisto.com/en/contacts/' }
    ],

    editLink: {
      pattern: 'https://github.com/bagisto/bagisto-docs/edit/master/docs/:path',
      text: 'Help us improve this page on Github.'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'full'
      }
    },

    sidebar: [
      {
        text: 'Getting Started with Bagisto',
        items: [
          { text: 'Why Choose Bagisto?', link: '/docs/getting-started/why-choose-bagisto' },
          { text: 'Before You Start', link: '/docs/getting-started/before-you-start' },
          { text: 'Installation', link: '/docs/getting-started/installation' },
          { text: 'Upgrade Guide', link: '/docs/getting-started/upgrade-guide' },
          { text: 'Contribution Guide', link: '/docs/getting-started/contribution-guide' },
          { text: 'LLMs.txt', link: '/docs/getting-started/llms' }
        ]
      },
      {
        text: 'Architecture Concepts',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/docs/architecture/overview' },
          { text: 'Backend', link: '/docs/architecture/backend' },
          { text: 'Frontend', link: '/docs/architecture/frontend' },
        ]
      },
      {
        text: 'Package Development',
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/docs/package-development/getting-started' },
          { text: 'Migrations', link: '/docs/package-development/migrations' },
          { text: 'Models', link: '/docs/package-development/models' },
          { text: 'Repositories', link: '/docs/package-development/repositories' },
          { text: 'Routes', link: '/docs/package-development/routes' },
          { text: 'Controllers', link: '/docs/package-development/controllers' },
          { text: 'Views', link: '/docs/package-development/views' },
          { text: 'Localization', link: '/docs/package-development/localization' },
          { text: 'DataGrid', link: '/docs/package-development/datagrid' },
          { text: 'Menu', link: '/docs/package-development/menu' },
          { text: 'Access Control List', link: '/docs/package-development/access-control-list' },
          { text: 'System Configuration', link: '/docs/package-development/system-configuration' }
        ]
      },
      {
        text: 'Digging Deeper',
        collapsed: true,
        items: [
          { text: 'Shipping Method', link: '/docs/advanced/create-shipping-method' },
          { text: 'Payment Method', link: '/docs/advanced/create-payment-method' },
          { text: 'Product Type', link: '/docs/advanced/create-product-type' },
          { text: 'Events Listeners', link: '/docs/advanced/events' },
          { text: 'Helpers', link: '/docs/advanced/helpers' },
          { text: 'Override Core Models', link: '/docs/advanced/override-core-model' },
          { text: 'View Render Event', link: '/docs/advanced/render-event' },
          { text: 'Email Template', link: '/docs/advanced/change-email-template' },
          { text: 'Configure Elasticsearch', link: '/docs/advanced/indexing-products-to-elasticsearch' },
          { text: 'Best Security Practices', link: '/docs/advanced/security-practice' },
          { text: 'Data Transfer', link: '/docs/advanced/create-data-import' },
          { text: 'Blade Components', link: '/docs/package-development/blade-components' },
          { text: 'Layouts', link: '/docs/package-development/layouts' },
          { text: 'Bundling Assets', link: '/docs/package-development/bundling-assets' },
          { text: 'Validation', link: '/docs/package-development/validation' },
        ]
      },
      {
        text: 'Themes',
        collapsed: true,
        items: [
          { text: 'Store Theme', link: '/docs/themes/create-store-theme' },
          { text: 'Admin Theme', link: '/docs/themes/create-admin-theme' },
          { text: 'Custom Theme Package', link: '/docs/themes/custom-theme-package' }
        ]
      },
      {
        text: 'Performance',
        collapsed: true,
        items: [
          { text: 'Indexing', link: '/docs/performance/indexing' },
          { text: 'Full Page Cache', link: '/docs/performance/fpc' },
          { text: 'Laravel Octane', link: '/docs/performance/octane' },
          { text: 'Load Balancing', link: '/docs/performance/loadbalancing' }
        ]
      },
      {
        text: 'Bagisto APIs',
        collapsed: true,
        items: [
          { text: 'Rest API', link: '/docs/api/rest-api' },
          { text: 'GraphQL API', link: '/docs/api/graphql-api' }
        ]
      }
    ],

    footer: {
      message: 'Released under the <a href="https://opensource.org/licenses/mit" target="_blank" class="mit-license">MIT License</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} Webkul`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bagisto/bagisto' }
    ],

    search: {
      provider: 'local'
    }
  }
})

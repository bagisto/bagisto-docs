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
        collapsed: false,
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
        collapsed: false,
        items: [
          { text: 'Overview', link: '/docs/architecture/overview' },
          { text: 'Backend', link: '/docs/architecture/backend' },
          { text: 'Frontend', link: '/docs/architecture/frontend' },
        ]
      },
      {
        text: 'Package Development',
        collapsed: false,
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
        text: 'Shipping Method Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/docs/shipping-method-development/getting-started' },
          { text: 'Creating Your First Shipping Method', link: '/docs/shipping-method-development/create-your-first-shipping-method' },
          { text: 'Understanding Carrier Configuration', link: '/docs/shipping-method-development/understanding-carrier-configuration' },
          { text: 'Understanding Carrier Class', link: '/docs/shipping-method-development/understanding-carrier-class' },
          { text: 'Understanding System Configuration', link: '/docs/shipping-method-development/understanding-system-configuration' },
        ]
      },
      {
        text: 'Payment Method Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/docs/payment-method-development/getting-started' },
          { text: 'Creating Your First Payment Method', link: '/docs/payment-method-development/create-your-first-payment-method' },
          { text: 'Understanding Payment Configuration', link: '/docs/payment-method-development/understanding-payment-configuration' },
          { text: 'Understanding Payment Class', link: '/docs/payment-method-development/understanding-payment-class' }
        ]
      },
      {
        text: 'Product Type Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/docs/product-type-development/getting-started' },
          { text: 'Creating Your First Product Type', link: '/docs/product-type-development/create-your-first-product-type' },
          { text: 'Understanding Product Type Configuration', link: '/docs/product-type-development/understanding-product-type-configuration' },
          { text: 'Understanding Abstract Type Class', link: '/docs/product-type-development/understanding-abstract-type-class' },
          { text: 'Building Your Subscription Product Type', link: '/docs/product-type-development/building-your-subscription-product-type' },
        ]
      },
      {
        text: 'Theme Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/docs/theme-development/getting-started' },
          { text: 'Creating Store Theme', link: '/docs/theme-development/creating-store-theme' },
          { text: 'Creating Admin Theme', link: '/docs/theme-development/creating-admin-theme' },
          { text: 'Creating Custom Theme Package', link: '/docs/theme-development/creating-custom-theme-package' },
          { text: 'Vite-Powered Theme Assets', link: '/docs/theme-development/vite-powered-theme-assets' },
          { text: 'Understanding Layouts', link: '/docs/theme-development/understanding-layouts' },
          { text: 'Blade Components', link: '/docs/theme-development/blade-components' },
        ]
      },
      {
        text: 'Performance',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/docs/performance/introduction' },
          { text: 'Understanding Indexers', link: '/docs/performance/understanding-indexers' },
          { text: 'Configure Elasticsearch', link: '/docs/performance/configure-elasticsearch' },
          { text: 'Configure Full Page Cache', link: '/docs/performance/configure-fpc' },
          { text: 'Configure Varnish', link: '/docs/performance/configure-varnish' },
          { text: 'Configure Laravel Octane', link: '/docs/performance/configure-laravel-octane' },
          { text: 'Configure Load Balancing', link: '/docs/performance/configure-load-balancing' }
        ]
      },
      {
        text: 'Digging Deeper',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/docs/advanced/introduction' },
          { text: 'Event Listeners', link: '/docs/advanced/event-listeners' },
          { text: 'Helpers', link: '/docs/advanced/helpers' },
          { text: 'View Render Event', link: '/docs/advanced/render-event' },
          { text: 'Email Template', link: '/docs/advanced/change-email-template' },
          { text: 'Best Security Practices', link: '/docs/advanced/security-practice' },
          { text: 'Data Transfer', link: '/docs/advanced/create-data-import' },
          { text: 'Validation', link: '/docs/advanced/validation' },
        ]
      },
      {
        text: 'Bagisto APIs',
        collapsed: false,
        items: [
          { text: 'Rest API', link: '/docs/api/rest-api' },
          { text: 'GraphQL API', link: '/docs/api/graphql-api' }
        ]
      }
    ],

    outline: {
      level: 'deep'
    },

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

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
      light: '/logo.png',
      dark: '/logo.png',
    },

    nav: [
      { text: 'User Guide', link: 'https://docs.bagisto.com/' },
      { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
      { text: 'Community Forum', link: 'https://forums.bagisto.com/' },
      { text: 'Contact Us', link: 'https://bagisto.com/en/contacts/' }
    ],

    editLink: {
      pattern: 'https://github.com/bagisto/bagisto-docs/edit/master/:path',
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
          { text: 'Why Choose Bagisto?', link: '/getting-started/why-choose-bagisto' },
          { text: 'Before You Start', link: '/getting-started/before-you-start' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Upgrade Guide', link: '/getting-started/upgrade-guide' },
          { text: 'Contribution Guide', link: '/getting-started/contribution-guide' },
          { text: 'Best Security Practices', link: '/getting-started/best-security-practice' },
          { text: 'Deployment', link: '/getting-started/deployment' },
          { text: 'LLMs.txt', link: '/getting-started/llms' }
        ]
      },
      {
        text: 'Architecture Concepts',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/architecture/overview' },
          { text: 'Backend', link: '/architecture/backend' },
          { text: 'Frontend', link: '/architecture/frontend' },
        ]
      },
      {
        text: 'Package Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/package-development/getting-started' },
          { text: 'Migrations', link: '/package-development/migrations' },
          { text: 'Models', link: '/package-development/models' },
          { text: 'Repositories', link: '/package-development/repositories' },
          { text: 'Routes', link: '/package-development/routes' },
          { text: 'Controllers', link: '/package-development/controllers' },
          { text: 'Views', link: '/package-development/views' },
          { text: 'Localization', link: '/package-development/localization' },
          { text: 'DataGrid', link: '/package-development/datagrid' },
          { text: 'Menu', link: '/package-development/menu' },
          { text: 'Access Control List', link: '/package-development/access-control-list' },
          { text: 'System Configuration', link: '/package-development/system-configuration' }
        ]
      },
      {
        text: 'Shipping Method Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/shipping-method-development/getting-started' },
          { text: 'Creating Your First Shipping Method', link: '/shipping-method-development/create-your-first-shipping-method' },
          { text: 'Understanding Carrier Configuration', link: '/shipping-method-development/understanding-carrier-configuration' },
          { text: 'Understanding Carrier Class', link: '/shipping-method-development/understanding-carrier-class' },
          { text: 'Understanding System Configuration', link: '/shipping-method-development/understanding-system-configuration' },
        ]
      },
      {
        text: 'Payment Method Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/payment-method-development/getting-started' },
          { text: 'Creating Your First Payment Method', link: '/payment-method-development/create-your-first-payment-method' },
          { text: 'Understanding Payment Configuration', link: '/payment-method-development/understanding-payment-configuration' },
          { text: 'Understanding Payment Class', link: '/payment-method-development/understanding-payment-class' }
        ]
      },
      {
        text: 'Product Type Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/product-type-development/getting-started' },
          { text: 'Creating Your First Product Type', link: '/product-type-development/create-your-first-product-type' },
          { text: 'Understanding Product Type Configuration', link: '/product-type-development/understanding-product-type-configuration' },
          { text: 'Understanding Abstract Type Class', link: '/product-type-development/understanding-abstract-type-class' },
          { text: 'Building Your Subscription Product Type', link: '/product-type-development/building-your-subscription-product-type' },
        ]
      },
      {
        text: 'Theme Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/theme-development/getting-started' },
          { text: 'Creating Store Theme', link: '/theme-development/creating-store-theme' },
          { text: 'Creating Admin Theme', link: '/theme-development/creating-admin-theme' },
          { text: 'Creating Custom Theme Package', link: '/theme-development/creating-custom-theme-package' },
          { text: 'Vite-Powered Theme Assets', link: '/theme-development/vite-powered-theme-assets' },
          { text: 'Understanding Layouts', link: '/theme-development/understanding-layouts' },
          { text: 'Blade Components', link: '/theme-development/blade-components' },
          { text: 'Email Template', link: '/theme-development/email-template' },
          { text: 'Validation', link: '/theme-development/validation' }
        ]
      },
      {
        text: 'Performance',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/performance/introduction' },
          { text: 'Configure Elasticsearch', link: '/performance/configure-elasticsearch' },
          { text: 'Configure Full Page Cache', link: '/performance/configure-fpc' },
          { text: 'Configure Varnish', link: '/performance/configure-varnish' },
          { text: 'Configure Laravel Octane', link: '/performance/configure-laravel-octane' },
          { text: 'Configure Load Balancing', link: '/performance/configure-load-balancing' }
        ]
      },
      {
        text: 'Digging Deeper',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/advanced/introduction' },
          { text: 'Understanding Core Class', link: '/advanced/understanding-core-class' },
          { text: 'Understanding Indexers', link: '/advanced/understanding-indexers' },
          { text: 'Understanding Data Transfer', link: '/advanced/understanding-data-transfer' },
          { text: 'Event Listeners', link: '/advanced/event-listeners' },
          { text: 'View Render Events', link: '/advanced/view-render-events' }
        ]
      },
      {
        text: 'Bagisto APIs',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/api/introduction' },
          { text: 'Rest API', link: '/api/rest-api' },
          { text: 'GraphQL API', link: '/api/graphql-api' }
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

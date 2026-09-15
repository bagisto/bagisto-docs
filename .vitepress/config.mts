import { defineConfig } from 'vitepress'
import { redirects, makeRedirectHtml } from './_redirects'
import fs from 'fs'
import path from 'path'

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
    siteTitle: false,

    logo: {
      light: '/logo.png',
      dark: '/logo.png',
    },

    nav: [
      {
        text: 'AI',
        items: [
          {
            text: 'Overview',
            items: [
              { text: 'AI in Bagisto', link: '/ai/introduction' },
            ],
          },
          {
            text: 'For Your Store',
            items: [
              { text: 'Generative AI (Magic AI)', link: '/ai/magic-ai' },
              { text: 'WebMCP', link: '/ai/webmcp' },
            ],
          },
          {
            text: 'For Developers & AI Agents',
            items: [
              { text: 'Agent Skills', link: '/ai/agent-skills' },
              { text: 'llms.txt', link: '/ai/llms-txt' },
            ],
          },
        ],
      },
      { text: 'User Guide', link: 'https://docs.bagisto.com/' },
      { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
      { text: 'Community Forum', link: 'https://forums.bagisto.com/' },
      { text: 'Contact Us', link: 'https://bagisto.com/en/contacts/' }
    ],

    editLink: {
      pattern: 'https://github.com/bagisto/bagisto-docs/edit/master/src/:path',
      text: 'Help us improve this page on GitHub.'
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
          { text: 'Deployment', link: '/getting-started/deployment' },
          { text: 'Best Security Practices', link: '/getting-started/best-security-practice' },
          { text: 'Upgrade Guide', link: '/getting-started/upgrade-guide' },
          { text: 'Contribution Guide', link: '/getting-started/contribution-guide' }
        ]
      },
      {
        text: 'AI',
        collapsed: false,
        items: [
          { text: 'AI in Bagisto', link: '/ai/introduction' },
          { text: 'Generative AI (Magic AI)', link: '/ai/magic-ai' },
          { text: 'WebMCP', link: '/ai/webmcp' },
          { text: 'Agent Skills', link: '/ai/agent-skills' },
          { text: 'llms.txt', link: '/ai/llms-txt' }
        ]
      },
      {
        text: 'Architecture Concepts',
        collapsed: false,
        items: [
          { text: 'Architecture Overview', link: '/architecture/overview' },
          { text: 'Backend Architecture', link: '/architecture/backend' },
          { text: 'Frontend Architecture', link: '/architecture/frontend' },
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
          { text: 'System Configuration', link: '/package-development/system-configuration' },
          { text: 'Events, Commands and Tests', link: '/package-development/events-commands-and-tests' }
        ]
      },
      {
        text: 'Shipping Method Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/shipping-method-development/getting-started' },
          { text: 'Creating Your First Shipping Method', link: '/shipping-method-development/create-your-first-shipping-method' },
          { text: 'Understanding Carrier Configuration', link: '/shipping-method-development/understanding-carrier-configuration' },
          { text: 'Understanding the Carrier Class', link: '/shipping-method-development/understanding-carrier-class' },
        ]
      },
      {
        text: 'Payment Method Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/payment-method-development/getting-started' },
          { text: 'Creating Your First Payment Method', link: '/payment-method-development/create-your-first-payment-method' },
          { text: 'Understanding Payment Configuration', link: '/payment-method-development/understanding-payment-configuration' },
          { text: 'Understanding the Payment Class', link: '/payment-method-development/understanding-payment-class' }
        ]
      },
      {
        text: 'Product Type Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/product-type-development/getting-started' },
          { text: 'Creating Your First Product Type', link: '/product-type-development/create-your-first-product-type' },
          { text: 'Understanding Product Type Configuration', link: '/product-type-development/understanding-product-type-configuration' },
          { text: 'Understanding the AbstractType Class', link: '/product-type-development/understanding-abstract-type-class' },
          { text: 'Building Your Subscription Product Type', link: '/product-type-development/building-your-subscription-product-type' },
        ]
      },
      {
        text: 'Theme Development',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/theme-development/getting-started' },
          { text: 'Creating a Store Theme', link: '/theme-development/creating-store-theme' },
          { text: 'Creating a Custom Theme Package', link: '/theme-development/creating-custom-theme-package' },
          { text: 'Vite-Powered Theme Assets', link: '/theme-development/vite-powered-theme-assets' },
          { text: 'Understanding Layouts', link: '/theme-development/understanding-layouts' },
          { text: 'Blade Components', link: '/theme-development/blade-components' },
          { text: 'Theme Sections', link: '/theme-development/theme-sections' },
          { text: 'Image Cache', link: '/theme-development/image-cache-templates' },
          { text: 'Email Template', link: '/theme-development/email-template' },
          { text: 'Validation', link: '/theme-development/validation' },
          { text: 'Creating an Admin Theme', link: '/theme-development/creating-admin-theme' }
        ]
      },
      {
        text: 'Tools',
        collapsed: false,
        items: [
          { text: 'Package Generator', link: '/tools/package-generator' },
          { text: 'Blade Tracer', link: '/tools/blade-tracer' }
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
          { text: 'Understanding the Core Class', link: '/advanced/understanding-core-class' },
          { text: 'Event Listeners', link: '/advanced/event-listeners' },
          { text: 'View Render Events', link: '/advanced/view-render-events' },
          { text: 'Command Palette', link: '/advanced/command-palette' },
          { text: 'Artisan Commands', link: '/advanced/artisan-commands' },
          { text: 'Queues, Jobs and Scheduling', link: '/advanced/queue-jobs-scheduling' },
          { text: 'Cache Strategy', link: '/advanced/cache-strategy' },
          { text: 'Understanding Indexers', link: '/advanced/understanding-indexers' },
          { text: 'Search Engines', link: '/advanced/search-engines' },
          { text: 'Understanding Data Transfer', link: '/advanced/understanding-data-transfer' },
          { text: 'File Storage', link: '/advanced/file-storage' },
          { text: 'Database Compatibility', link: '/advanced/database-compatibility' },
          {
            text: 'Testing',
            collapsed: false,
            items: [
              { text: 'Testing Overview', link: '/advanced/testing' },
              { text: 'Testing with Pest', link: '/advanced/testing-with-pest' },
              { text: 'Testing with Playwright', link: '/advanced/testing-with-playwright' },
            ]
          },
          { text: 'Coding Standards', link: '/advanced/coding-standards' },
          { text: 'Debugging Tips', link: '/advanced/debugging' },
          { text: 'Common Pitfalls', link: '/advanced/common-pitfalls' },
        ]
      },
      {
        text: 'Bagisto APIs',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/api/introduction' },
          { text: 'Installation', link: '/api/installation' },
          { text: 'REST API', link: '/api/rest-api' },
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
  },

  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir

    Object.entries(redirects).forEach(([from, to]) => {
      if (from.includes('*')) {
        console.warn(`⚠️ Skipping wildcard redirect: ${from} -> ${to}`)
        return
      }

      let filePath

      if (from.endsWith('.html')) {
        filePath = path.join(outDir, from)
      } else {
        filePath = path.join(outDir, from, 'index.html')
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true })
      fs.writeFileSync(filePath, makeRedirectHtml(to), 'utf-8')
      console.log(`✅ Redirect created: ${from} -> ${to}`)
    })
  }
})

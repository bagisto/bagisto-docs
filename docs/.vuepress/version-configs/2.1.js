/* set version */
let version = '2.1';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = [
    {
        title: 'Prologue',
        path: setVersionPrefix('prologue'),
        collapsable: true,
        children: setVersionPrefix([
            ['prologue/upgrade-guide', 'Upgrade Guide'],
            ['prologue/contribution-guide', ' Contribution Guide']
        ])
    },
    {
        title: 'Introduction',
        path: setVersionPrefix('introduction'),
        collapsable: true,
        children: setVersionPrefix([
            ['introduction/requirements', 'Requirements'],
            ['introduction/installation', 'Installation'],
            ['introduction/docker', 'Docker']
        ])
    },
    {
        title: 'Architecture concepts',
        path: setVersionPrefix('architecture'),
        collapsable: true,
        children: setVersionPrefix([
            ['architecture/packages', 'Packages'],
            ['architecture/frontend', 'Frontend'],
            ['architecture/theme', 'Theme'],
            ['architecture/repository-pattern', 'Repository Pattern'],
            ['architecture/modular-design', 'Modular Design']
        ])
    },
    {
        title: 'Package Development',
        path: setVersionPrefix('packages'),
        collapsable: true,
        children: setVersionPrefix([
            ['packages/create-package', 'Getting Started'],
            ['packages/create-migrations', 'Migrations'],
            ['packages/create-models', 'Models'],
            ['packages/store-data-through-repositories', 'Repositories'],
            ['packages/routes', 'Routes'],
            ['packages/controllers', 'Controllers'],
            ['packages/views', 'Views'],
            ['packages/localization', 'Localization'],
            ['packages/blade-components', 'Blade Components'],
            ['packages/layouts', 'Layouts'],
            ['packages/bundling-assets', 'Bundling Assets'],
            ['packages/add-menu-in-admin', 'Admin Menu'],
            ['packages/validation', 'Validation'],
            ['packages/datagrid', 'DataGrid'],
            ['packages/create-acl', 'Access Control List'],
            ['packages/create-system-configuration', 'System Configuration']
        ])
    },
    {
        title: 'Digging Deeper',
        path: setVersionPrefix('advanced'),
        collapsable: true,
        children: setVersionPrefix([
            ['advanced/create-shipping-method', 'Shipping Method'],
            ['advanced/create-payment-method', 'Payment Method'],
            ['advanced/create-product-type', 'Product Type'],
            ['advanced/events', 'Events Listeners'],
            ['advanced/helpers', 'Helpers'],
            ['advanced/override-core-model', 'Override Core Models'],
            ['advanced/render-event', 'View Render Event'],
            ['advanced/change-email-template.md', 'Email Template'],
            ['advanced/indexing-products-to-elasticsearch.md', 'Configure Elasticsearch'],
            ['advanced/security-practice', 'Best Security Practices'],
            ['advanced/create-data-import', 'Data Transfer']
        ])
    },
    {
        title: 'Themes',
        path: setVersionPrefix('themes'),
        collapsable: true,
        children: setVersionPrefix([
            ['themes/create-store-theme', 'Store Theme'],
            ['themes/create-admin-theme', 'Admin Theme'],
        ])
    },
    {
        title: 'Performance',
        path: setVersionPrefix('performance'),
        collapsable: true,
        children: setVersionPrefix([
            ['performance/indexing', 'Indexing'],
            ['performance/fpc', 'Full Page Cache'],
            ['performance/octane', 'Laravel Octane'],
            ['performance/loadbalancing', 'Load Balancing'],
        ])
    },
    {
        title: 'Bagisto APIs',
        path: setVersionPrefix('api'),
        collapsable: true,
        children: setVersionPrefix([
            ['api/getting-started-with-the-api', 'Rest API'],
        ])
    },
]

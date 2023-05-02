/* set version */
let version = '1.x';

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
        title: 'Package Development',
        path: setVersionPrefix('packages'),
        collapsable: true,
        children: setVersionPrefix([
            ['packages/create-package', 'Getting Started'],
            ['packages/create-migrations', 'Migrations'],
            ['packages/create-models', 'Models'],
            ['packages/store-data-through-repositories', 'Repository'],
            ['packages/routes', 'Routes'],
            ['packages/controllers', 'Controllers'],
            ['packages/add-menu-in-admin', 'Admin Menu'],
            ['packages/views', 'Views'],
            ['packages/lang', 'Lang'],
            ['packages/datagrid', 'DataGrid'],
            ['packages/assets', 'Assets'],
            ['packages/layouts', 'Layouts'],
            ['packages/create-acl', 'Access Control List'],
            ['packages/create-custom-configuration', 'Custom Configuration'],
            ['packages/crud-through-repository', 'CRUD Through Repository'],
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
            ['advanced/indexing-products-to-elasticsearch.md', 'Indexing Products To Elasticsearch'],
            ['advanced/security-practice', 'Best Security Practices'],
        ])
    },
    {
        title: 'Themes',
        path: setVersionPrefix('themes'),
        collapsable: true,
        children: setVersionPrefix([
            ['themes/tracer', 'Blade File Tracer'],
            ['themes/create-theme', 'Store Theme'],
            ['themes/create-admin-theme', 'Admin Theme'],
            ['themes/notification', 'Real Time Notification'],
            ['themes/change-email-template.md', 'Email Template'],
            ['themes/customize-hompepage-menu.md', 'Homepage Menu'],
            ['themes/integrate-image-search-in-theme', 'Image Search']
        ])
    },{
        title: 'Translations',
        path: setVersionPrefix('translations/translation-based-on-locale'),
        collapsable: true,
        children: setVersionPrefix([
            ['translations/translation-based-on-locale', 'Translation based on locale'],
            ['translations/change-the-language-of-error-validations-on-your-store', 'Change the language of error validations on your store']
        ])
    },
    {
        title: 'Bagisto GraphQL Admin API',
        path: setVersionPrefix('graphql-admin-api'),
        collapsable: true,
        children: setVersionPrefix([
            ['graphql-admin-api/installation', 'Installation'],
            ['graphql-admin-api/getting-started-with-the-api.md', 'Authentication'],
            ['graphql-admin-api/settings.md', 'Settings'],
            ['graphql-admin-api/cms.md', 'CMS'],
            ['graphql-admin-api/velocity.md', 'Velocity'],
            ['graphql-admin-api/customers.md', 'Customers'],
            ['graphql-admin-api/promotions.md', 'Promotions'],
            ['graphql-admin-api/products.md', 'Products'],
            ['graphql-admin-api/categories.md', 'Categories'],
            ['graphql-admin-api/attributes.md', 'Attributes'],
            ['graphql-admin-api/attribute-groups.md', 'Attribute Groups'],
            ['graphql-admin-api/attribute-families.md', 'Attribute Families'],
            ['graphql-admin-api/sales.md', 'Sales'],
        ])
    },
    {
        title: 'Bagisto GraphQL Shop API',
        path: setVersionPrefix('graphql-shop-api'),
        collapsable: true,
        children: setVersionPrefix([
            ['graphql-admin-api/installation', 'Installation'],
            ['graphql-shop-api/getting-started-with-the-api.md', 'Authentication'],
            ['graphql-shop-api/addresses.md', 'Addresses'],
            ['graphql-shop-api/orders.md', 'Orders'],
            ['graphql-shop-api/reviews.md', 'Reviews'],
            ['graphql-shop-api/wishlists.md', 'Wishlists'],
            ['graphql-shop-api/compare.md', 'Compare'],
            ['graphql-shop-api/downloadable-links.md', 'Downloadable Links'],
            ['graphql-shop-api/cart.md', 'Cart'],
            ['graphql-shop-api/checkout.md', 'Checkout Process'],
            ['graphql-shop-api/homepage.md', 'Home Page'],
        ])
    },
]

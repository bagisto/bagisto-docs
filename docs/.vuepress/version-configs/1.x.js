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
        title: 'Getting Started',
        path: setVersionPrefix('getting-started'),
        collapsable: true,
        children: setVersionPrefix([
            ['getting-started/requirements', 'Requirements'],
            ['getting-started/installation', 'Installation'],
            ['getting-started/docker', 'Docker']
        ])
    },
    {
        title: 'Package Development',
        path: setVersionPrefix('package-development'),
        collapsable: true,
        children: setVersionPrefix([
            ['package-development/initial-setup', 'Initial Setup'],
            ['package-development/routes', 'Routes'],
            ['package-development/controllers', 'Controllers'],
            ['package-development/views', 'Views'],
            ['package-development/lang', 'Lang'],
            ['package-development/assets', 'Assets'],
            ['package-development/layouts', 'Layouts'],
            ['package-development/database', 'Database'],
            ['package-development/admin-menu', 'Admin Menu'],
            ['package-development/acl', 'Access Control List'],
            ['package-development/custom-configuration', 'Custom Configuration'],
            ['package-development/models', 'Models'],
            ['package-development/store-data-through-repositories', 'Store Data Through Repositories'],
        ])
    },
    {
        title: 'Advanced Topics',
        path: setVersionPrefix('advanced'),
        collapsable: true,
        children: setVersionPrefix([
            ['advanced/create-shipping-method', 'Create a shipping method'],
            ['advanced/create-payment-method', 'Create a payment method'],
            ['advanced/create-product-type', 'Create your own product type'],
            ['advanced/datagrid', 'DataGrid'],
            ['advanced/events', 'Events'],
            ['advanced/helpers', 'Helpers'],
            ['advanced/override-core-model', 'Override core models'],
            ['advanced/render-event', 'View render event'],
            ['advanced/indexing-products-to-elasticsearch.md', 'Indexing products to Elasticsearch'],
            ['advanced/security-practice', 'Best Security Practices'],
        ])
    },
    {
        title: 'Themes',
        path: setVersionPrefix('themes'),
        collapsable: true,
        children: setVersionPrefix([
            ['themes/tracer', 'Blade file tracer'],
            ['themes/create-theme', 'Create a store theme'],
            ['themes/create-admin-theme', 'Create an admin theme'],
            ['themes/change-email-template.md', 'Change email template'],
            ['themes/customize-hompepage-menu.md', 'Customize homepage menu'],
            ['themes/integrate-image-search-in-theme', 'Integrate image search in theme']
        ])
    },{
        title: 'Admin Theme',
        path: setVersionPrefix('admin-theme'),
        collapsable: true,
        children: setVersionPrefix([
            ['admin-theme/notification', 'Enable real time notification'],
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
        title: 'User Guides',
        path: setVersionPrefix('user-guides'),
        collapsable: true,
        children: setVersionPrefix([
            ['user-guides/tax-rates', 'Tax Rates'],
            ['user-guides/cart-rule', 'Cart rules'],
            ['user-guides/social-auth', 'Social Authentication']
        ])
    },
    {
        title: 'Bagisto Web API',
        path: setVersionPrefix('api'),
        collapsable: true,
        children: setVersionPrefix([
            ['api/getting-started-with-the-api', 'Authentication'],
            ['api/customers', 'Customers'],
            ['api/locales', 'Locales'],
            ['api/addresses', 'Addresses'],
            ['api/products', 'Products'],
            ['api/categories', 'Categories'],
            ['api/attributes', 'Attributes'],
            ['api/attribute-families', 'Attribute Families'],
            ['api/cart', 'Shopping Cart'],
            ['api/orders', 'Orders'],
            ['api/invoices', 'Invoices'],
            ['api/shipments', 'Shipments'],
            ['api/transactions', 'Transactions'],
            ['api/reviews', 'Reviews'],
            ['api/wishlists', 'Wishlists'],
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
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
        title: 'Introduction',
        path: setVersionPrefix('introduction'),
        collapsable: true,
        children: setVersionPrefix([
            ['introduction/requirements', 'Requirements'],
            ['introduction/installation', 'Installation'],
            ['introduction/upgrade-to-latest-bagisto', 'Upgrade Bagisto'],
            ['introduction/docker', 'Docker']
            
        ])
    },
    {
        title: 'Package Development',
        path: setVersionPrefix('packages'),
        collapsable: true,
        children: setVersionPrefix([
            ['packages/create-package', 'Create a new package'],
            ['packages/create-migrations', 'Create migrations'],
            ['packages/add-menu-in-admin', 'Add menu in admin'],
            ['packages/create-acl', 'Access control list'],
            ['packages/create-custom-configuration', 'Create custom configuration'],
            ['packages/create-models', 'Create models'],
            ['packages/store-data-through-repositories', 'Store data through repositories'],
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
    },
    {
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
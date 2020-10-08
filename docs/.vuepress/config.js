module.exports = {
    base: '/',
    title: 'Documentation',
    description: 'Bagisto Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'bagisto/bagisto',
        repoLabel: 'Contribute to Bagisto',
        docsRepo: 'bagisto/bagisto-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: '../logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
            { text: 'Community Forum', link: 'https://forums.bagisto.com/' }
        ],
        sidebar: [
            "/",
            {
                title: "Introduction",
                path: "/introduction/",
                collapsable: true,
                children: [
                    ["introduction/requirements", "Requirements"],
                    ["introduction/installation", "Installation"],
                    ["introduction/upgrade_to_latest_bagisto", "Upgrade Bagisto"],
                    ["introduction/folders", "Directory structure"]
                ]
            },
            {
                title: "Package Development",
                path: "/packages/",
                collapsable: true,
                children: [
                    ["packages/create_package", "Create a new package"],
                    ["packages/create_migrations", "Create migrations"],
                    ["packages/add_menu_in_admin", "Add menu in admin"],
                    ["packages/create_acl", "Create ACL"],
                    ["packages/create_custom_configuration", "Create Custom Configuration"],
                    ["packages/create_models", "Create models"],
                    ["packages/store_data_through_repositories", "Store data through repositories"],
                ]
            },
            {
                title: "Advanced topics",
                path: "/advanced/",
                collapsable: true,
                children: [
                    ["advanced/create_shipping_method", "Create a shipping method"],
                    ["advanced/create_payment_method", "Create a payment method"],
                    ["advanced/datagrid", "Data grid"],
                    ["advanced/events", "Events"],
                    ["advanced/override-core-model", "Override core models"],
                    ["advanced/security_practice", "Best Security Practices"],
                    ["advanced/render_event", "View render event"]
                ]
            },           
            {
                title: "Themes",
                path: "/themes/",
                collapsable: true,
                children: [
                    ["themes/create_theme", "Create a store theme"],
                    ["themes/create_admin_theme", "Create a admin theme"]
                ]
            },
            {
                title: "Translations",
                path: "/translations/translation_based_on_locale",
                collapsable: true,
                children: [
                    ["translations/translation_based_on_locale", "Translation based on locale"],
                    ["translations/change_the_language_of_error_validations_on_your_store", "Change the language of error validations on your store"]
                ]
            },
            {
                title: "User guides",
                path: "/user_guides/",
                collapsable: true,
                children: [
                    ["/user_guides/cart_rule", "Cart rules"],
                ]
            }, 
            {
                title: "Bagisto Web API",
                path: "/api/",
                collapsable: true,
                children: [
                    ["api/customers", "Customers"],
                    ["api/addresses", "Addresses"],
                    ["api/wishlists", "Wishlists"],
                    ["api/categories", "Categories"],
                    ["api/products", "Products"],
                    ["api/cart", "Shopping Cart"],
                    ["api/orders", "Orders"],
                    ["api/invoices", "Invoices"],
                    ["api/shipments", "Shipments"],
                    ["api/reviews", "Reviews"]
                ]
            },
        ]
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};

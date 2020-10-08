let version = '1.x';

module.exports = [
    {
        title: "Introduction",
        path: `/${version}/introduction`,
        collapsable: true,
        children: [
            [`/${version}/introduction/requirements`, "Requirements"],
            [`/${version}/introduction/installation`, "Installation"],
            [`/${version}/introduction/upgrade_to_latest_bagisto`, "Upgrade Bagisto"],
            [`/${version}/introduction/folders`, "Directory structure"]
        ]
    },
    {
        title: "Package Development",
        path: `/${version}/packages`,
        collapsable: true,
        children: [
            [`/${version}/packages/create_package`, "Create a new package"],
            [`/${version}/packages/create_migrations`, "Create migrations"],
            [`/${version}/packages/add_menu_in_admin`, "Add menu in admin"],
            [`/${version}/packages/create_acl`, "Create ACL"],
            [`/${version}/packages/create_custom_configuration`, "Create Custom Configuration"],
            [`/${version}/packages/create_models`, "Create models"],
            [`/${version}/packages/store_data_through_repositories`, "Store data through repositories"],
        ]
    },
    {
        title: "Advanced topics",
        path: `/${version}/advanced`,
        collapsable: true,
        children: [
            [`/${version}/advanced/create_shipping_method`, "Create a shipping method"],
            [`/${version}/advanced/create_payment_method`, "Create a payment method"],
            [`/${version}/advanced/datagrid`, "Data grid"],
            [`/${version}/advanced/events`, "Events"],
            [`/${version}/advanced/override-core-model`, "Override core models"],
            [`/${version}/advanced/security_practice`, "Best Security Practices"],
            [`/${version}/advanced/render_event`, "View render event"]
        ]
    },           
    {
        title: "Themes",
        path: `/${version}/themes`,
        collapsable: true,
        children: [
            [`/${version}/themes/create_theme`, "Create a store theme"],
            [`/${version}/themes/create_admin_theme`, "Create a admin theme"]
        ]
    },
    {
        title: "Translations",
        path: `translations/translation_based_on_locale`,
        collapsable: true,
        children: [
            [`/${version}/translations/translation_based_on_locale`, "Translation based on locale"],
            [`/${version}/translations/change_the_language_of_error_validations_on_your_store`, "Change the language of error validations on your store"]
        ]
    },
    {
        title: "User guides",
        path: `/${version}/user_guides`,
        collapsable: true,
        children: [
            [`/${version}/user_guides/cart_rule`, "Cart rules"],
        ]
    }, 
    {
        title: "Bagisto Web API",
        path: `/${version}/api`,
        collapsable: true,
        children: [
            [`/${version}/api/customers`, "Customers"],
            [`/${version}/api/addresses`, "Addresses"],
            [`/${version}/api/wishlists`, "Wishlists"],
            [`/${version}/api/categories`, "Categories"],
            [`/${version}/api/products`, "Products"],
            [`/${version}/api/cart`, "Shopping Cart"],
            [`/${version}/api/orders`, "Orders"],
            [`/${version}/api/invoices`, "Invoices"],
            [`/${version}/api/shipments`, "Shipments"],
            [`/${version}/api/reviews`, "Reviews"]
        ]
    },
]
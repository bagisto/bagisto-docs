export const redirects = {
    /**
     * Version 2.3 Redirects
     * 
     * Note: These redirects are for the legacy 2.3 documentation.
     */

    // Prologue
    '/2.3/prologue/upgrade-guide.html': '/getting-started/upgrade-guide',
    '/2.3/prologue/contribution-guide.html': '/getting-started/contribution-guide',

    // Introduction
    '/2.3/introduction/requirements.html': '/getting-started/before-you-start.html#system-requirements',
    '/2.3/introduction/installation.html': '/getting-started/installation',
    '/2.3/introduction/docker.html': '/getting-started/installation.html#🐳-docker-installation',
    '/2.3/introduction/sail.html': '/getting-started/installation.html#⛵-laravel-sail-installation',
    '/2.3/introduction/llms.html': '/getting-started/llms',

    // Architecture Concepts
    '/2.3/architecture/packages': '/architecture/backend',
    '/2.3/architecture/packages.html': '/architecture/backend',
    '/2.3/architecture/frontend.html': '/architecture/frontend',
    '/2.3/architecture/theme.html': '/architecture/frontend',
    '/2.3/architecture/repository-pattern.html': '/architecture/backend.html#repository-pattern-in-bagisto',
    '/2.3/architecture/modular-design.html': '/architecture/backend.html#modular-design-in-bagisto',

    // Package Development
    '/2.3/packages': '/package-development/getting-started',
    '/2.3/packages/create-package.html': '/package-development/getting-started',
    '/2.3/packages/create-migrations.html': '/package-development/migrations',
    '/2.3/packages/create-models.html': '/package-development/models',
    '/2.3/packages/store-data-through-repositories.html': '/package-development/repositories',
    '/2.3/packages/routes.html': '/package-development/routes',
    '/2.3/packages/controllers.html': '/package-development/controllers',
    '/2.3/packages/views.html': '/package-development/views',
    '/2.3/packages/localization.html': '/package-development/localization',
    '/2.3/packages/blade-components.html': '/theme-development/blade-components',
    '/2.3/packages/layouts.html': '/theme-development/understanding-layouts',
    '/2.3/packages/bundling-assets.html': '/theme-development/vite-powered-theme-assets',
    '/2.3/packages/add-menu-in-admin.html': '/package-development/menu',
    '/2.3/packages/validation.html': '/theme-development/validation',
    '/2.3/packages/datagrid.html': '/package-development/datagrid',
    '/2.3/packages/create-acl.html': '/package-development/access-control-list',
    '/2.3/packages/create-system-configuration.html': '/package-development/system-configuration',

    // Digging Deeper
    '/2.3/advanced/create-shipping-method.html': '/shipping-method-development/create-your-first-shipping-method',
    '/2.3/advanced/create-payment-method.html': '/payment-method-development/create-your-first-payment-method',
    '/2.3/advanced/create-product-type.html': '/product-type-development/create-your-first-product-type',
    '/2.3/advanced/events.html': '/advanced/event-listeners',
    '/2.3/advanced/helpers.html': '/advanced/understanding-core-class',
    '/2.3/advanced/override-core-model.html': '/package-development/models.html#overriding-core-models-optional',
    '/2.3/advanced/render-event.html': '/advanced/view-render-events',
    '/2.3/advanced/change-email-template.md.html': '/theme-development/email-template',
    '/2.3/advanced/indexing-products-to-elasticsearch.md.html': '/performance/configure-elasticsearch',
    '/2.3/advanced/security-practice.html': '/getting-started/best-security-practice',
    '/2.3/advanced/create-data-import.html': '/advanced/understanding-data-transfer',

    // Themes
    '/2.3/themes': '/theme-development/getting-started',
    '/2.3/themes/create-store-theme.html': '/theme-development/creating-store-theme',
    '/2.3/themes/create-admin-theme.html': '/theme-development/creating-admin-theme',
    '/2.3/themes/custom-theme-package.html': '/theme-development/creating-custom-theme-package',

    // Performance
    '/2.3/performance/indexing.html': '/advanced/understanding-indexers',
    '/2.3/performance/fpc.html': '/performance/configure-fpc',
    '/2.3/performance/octane.html': '/performance/configure-laravel-octane',
    '/2.3/performance/loadbalancing.html': '/performance/configure-load-balancing',

    // Bagisto APIs
    '/2.3/api/rest-api.html': '/api/rest-api',
    '/2.3/api/graphql-api.html': '/api/graphql-api',

    /**
     * Version 2.2 Redirects
     * 
     * Note: These redirects are for the legacy 2.2 documentation.
     */

    // Prologue
    '/2.2/prologue/upgrade-guide.html': '/getting-started/upgrade-guide',
    '/2.2/prologue/contribution-guide.html': '/getting-started/contribution-guide',

    // Introduction
    '/2.2/introduction/requirements.html': '/getting-started/before-you-start.html#system-requirements',
    '/2.2/introduction/installation.html': '/getting-started/installation',
    '/2.2/introduction/docker.html': '/getting-started/installation.html#🐳-docker-installation',

    // Architecture Concepts
    '/2.2/architecture/packages': '/architecture/backend',
    '/2.2/architecture/packages.html': '/architecture/backend',
    '/2.2/architecture/frontend.html': '/architecture/frontend',
    '/2.2/architecture/theme.html': '/architecture/frontend',
    '/2.2/architecture/repository-pattern.html': '/architecture/backend.html#repository-pattern-in-bagisto',
    '/2.2/architecture/modular-design.html': '/architecture/backend.html#modular-design-in-bagisto',

    // Package Development
    '/2.2/packages': '/package-development/getting-started',
    '/2.2/packages/create-package.html': '/package-development/getting-started',
    '/2.2/packages/create-migrations.html': '/package-development/migrations',
    '/2.2/packages/create-models.html': '/package-development/models',
    '/2.2/packages/store-data-through-repositories.html': '/package-development/repositories',
    '/2.2/packages/routes.html': '/package-development/routes',
    '/2.2/packages/controllers.html': '/package-development/controllers',
    '/2.2/packages/views.html': '/package-development/views',
    '/2.2/packages/localization.html': '/package-development/localization',
    '/2.2/packages/blade-components.html': '/theme-development/blade-components',
    '/2.2/packages/layouts.html': '/theme-development/understanding-layouts',
    '/2.2/packages/bundling-assets.html': '/theme-development/vite-powered-theme-assets',
    '/2.2/packages/add-menu-in-admin.html': '/package-development/menu',
    '/2.2/packages/validation.html': '/theme-development/validation',
    '/2.2/packages/datagrid.html': '/package-development/datagrid',
    '/2.2/packages/create-acl.html': '/package-development/access-control-list',
    '/2.2/packages/create-system-configuration.html': '/package-development/system-configuration',

    // Digging Deeper
    '/2.2/advanced/create-shipping-method.html': '/shipping-method-development/create-your-first-shipping-method',
    '/2.2/advanced/create-payment-method.html': '/payment-method-development/create-your-first-payment-method',
    '/2.2/advanced/create-product-type.html': '/product-type-development/create-your-first-product-type',
    '/2.2/advanced/events.html': '/advanced/event-listeners',
    '/2.2/advanced/helpers.html': '/advanced/understanding-core-class',
    '/2.2/advanced/override-core-model.html': '/package-development/models.html#overriding-core-models-optional',
    '/2.2/advanced/render-event.html': '/advanced/view-render-events',
    '/2.2/advanced/change-email-template.md.html': '/theme-development/email-template',
    '/2.2/advanced/indexing-products-to-elasticsearch.md.html': '/performance/configure-elasticsearch',
    '/2.2/advanced/security-practice.html': '/getting-started/best-security-practice',
    '/2.2/advanced/create-data-import.html': '/advanced/understanding-data-transfer',

    // Themes
    '/2.2/themes': '/theme-development/getting-started',
    '/2.2/themes/create-store-theme.html': '/theme-development/creating-store-theme',
    '/2.2/themes/create-admin-theme.html': '/theme-development/creating-admin-theme',

    // Performance
    '/2.2/performance/indexing.html': '/advanced/understanding-indexers',
    '/2.2/performance/fpc.html': '/performance/configure-fpc',
    '/2.2/performance/octane.html': '/performance/configure-laravel-octane',
    '/2.2/performance/loadbalancing.html': '/performance/configure-load-balancing',

    // Bagisto APIs
    '/2.2/api/rest-api.html': '/api/rest-api',
    '/2.2/api/graphql-api.html': '/api/graphql-api',

    /**
     * Version 2.1 Redirects
     * 
     * Note: These redirects are for the legacy 2.1 documentation.
     */

    // Prologue
    '/2.1/prologue/upgrade-guide.html': '/getting-started/upgrade-guide',
    '/2.1/prologue/contribution-guide.html': '/getting-started/contribution-guide',

    // Introduction
    '/2.1/introduction/requirements.html': '/getting-started/before-you-start.html#system-requirements',
    '/2.1/introduction/installation.html': '/getting-started/installation',
    '/2.1/introduction/docker.html': '/getting-started/installation.html#🐳-docker-installation',

    // Architecture Concepts
    '/2.1/architecture/packages': '/architecture/backend',
    '/2.1/architecture/packages.html': '/architecture/backend',
    '/2.1/architecture/frontend.html': '/architecture/frontend',
    '/2.1/architecture/theme.html': '/architecture/frontend',
    '/2.1/architecture/repository-pattern.html': '/architecture/backend.html#repository-pattern-in-bagisto',
    '/2.1/architecture/modular-design.html': '/architecture/backend.html#modular-design-in-bagisto',

    // Package Development
    '/2.1/packages': '/package-development/getting-started',
    '/2.1/packages/create-package.html': '/package-development/getting-started',
    '/2.1/packages/create-migrations.html': '/package-development/migrations',
    '/2.1/packages/create-models.html': '/package-development/models',
    '/2.1/packages/store-data-through-repositories.html': '/package-development/repositories',
    '/2.1/packages/routes.html': '/package-development/routes',
    '/2.1/packages/controllers.html': '/package-development/controllers',
    '/2.1/packages/views.html': '/package-development/views',
    '/2.1/packages/localization.html': '/package-development/localization',
    '/2.1/packages/blade-components.html': '/theme-development/blade-components',
    '/2.1/packages/layouts.html': '/theme-development/understanding-layouts',
    '/2.1/packages/bundling-assets.html': '/theme-development/vite-powered-theme-assets',
    '/2.1/packages/add-menu-in-admin.html': '/package-development/menu',
    '/2.1/packages/validation.html': '/theme-development/validation',
    '/2.1/packages/datagrid.html': '/package-development/datagrid',
    '/2.1/packages/create-acl.html': '/package-development/access-control-list',
    '/2.1/packages/create-system-configuration.html': '/package-development/system-configuration',

    // Digging Deeper
    '/2.1/advanced/create-shipping-method.html': '/shipping-method-development/create-your-first-shipping-method',
    '/2.1/advanced/create-payment-method.html': '/payment-method-development/create-your-first-payment-method',
    '/2.1/advanced/create-product-type.html': '/product-type-development/create-your-first-product-type',
    '/2.1/advanced/events.html': '/advanced/event-listeners',
    '/2.1/advanced/helpers.html': '/advanced/understanding-core-class',
    '/2.1/advanced/override-core-model.html': '/package-development/models.html#overriding-core-models-optional',
    '/2.1/advanced/render-event.html': '/advanced/view-render-events',
    '/2.1/advanced/change-email-template.md.html': '/theme-development/email-template',
    '/2.1/advanced/indexing-products-to-elasticsearch.md.html': '/performance/configure-elasticsearch',
    '/2.1/advanced/security-practice.html': '/getting-started/best-security-practice',
    '/2.1/advanced/create-data-import.html': '/advanced/understanding-data-transfer',

    // Themes
    '/2.1/themes': '/theme-development/getting-started',
    '/2.1/themes/create-store-theme.html': '/theme-development/creating-store-theme',
    '/2.1/themes/create-admin-theme.html': '/theme-development/creating-admin-theme',

    // Performance
    '/2.1/performance/indexing.html': '/advanced/understanding-indexers',
    '/2.1/performance/fpc.html': '/performance/configure-fpc',
    '/2.1/performance/octane.html': '/performance/configure-laravel-octane',
    '/2.1/performance/loadbalancing.html': '/performance/configure-load-balancing',

    // Bagisto APIs
    '/2.1/api/getting-started-with-the-api.html': '/api/rest-api',

    /**
     * Version 2.0 Redirects
     * 
     * Note: These redirects are for the legacy 2.0 documentation.
     */

    // Prologue
    '/2.0/prologue/upgrade-guide.html': '/getting-started/upgrade-guide',
    '/2.0/prologue/contribution-guide.html': '/getting-started/contribution-guide',

    // Introduction
    '/2.0/introduction/requirements.html': '/getting-started/before-you-start.html#system-requirements',
    '/2.0/introduction/installation.html': '/getting-started/installation',
    '/2.0/introduction/docker.html': '/getting-started/installation.html#🐳-docker-installation',

    // Architecture Concepts
    '/2.0/architecture/packages': '/architecture/backend',
    '/2.0/architecture/packages.html': '/architecture/backend',
    '/2.0/architecture/frontend.html': '/architecture/frontend',
    '/2.0/architecture/theme.html': '/architecture/frontend',
    '/2.0/architecture/repository-pattern.html': '/architecture/backend.html#repository-pattern-in-bagisto',
    '/2.0/architecture/modular-design.html': '/architecture/backend.html#modular-design-in-bagisto',

    // Package Development
    '/2.0/packages': '/package-development/getting-started',
    '/2.0/packages/create-package.html': '/package-development/getting-started',
    '/2.0/packages/create-migrations.html': '/package-development/migrations',
    '/2.0/packages/create-models.html': '/package-development/models',
    '/2.0/packages/store-data-through-repositories.html': '/package-development/repositories',
    '/2.0/packages/routes.html': '/package-development/routes',
    '/2.0/packages/controllers.html': '/package-development/controllers',
    '/2.0/packages/views.html': '/package-development/views',
    '/2.0/packages/localization.html': '/package-development/localization',
    '/2.0/packages/blade-components.html': '/theme-development/blade-components',
    '/2.0/packages/layouts.html': '/theme-development/understanding-layouts',
    '/2.0/packages/bundling-assets.html': '/theme-development/vite-powered-theme-assets',
    '/2.0/packages/add-menu-in-admin.html': '/package-development/menu',
    '/2.0/packages/validation.html': '/theme-development/validation',
    '/2.0/packages/datagrid.html': '/package-development/datagrid',
    '/2.0/packages/create-acl.html': '/package-development/access-control-list',
    '/2.0/packages/create-system-configuration.html': '/package-development/system-configuration',

    // Digging Deeper
    '/2.0/advanced/create-shipping-method.html': '/shipping-method-development/create-your-first-shipping-method',
    '/2.0/advanced/create-payment-method.html': '/payment-method-development/create-your-first-payment-method',
    '/2.0/advanced/create-product-type.html': '/product-type-development/create-your-first-product-type',
    '/2.0/advanced/events.html': '/advanced/event-listeners',
    '/2.0/advanced/helpers.html': '/advanced/understanding-core-class',
    '/2.0/advanced/override-core-model.html': '/package-development/models.html#overriding-core-models-optional',
    '/2.0/advanced/render-event.html': '/advanced/view-render-events',
    '/2.0/advanced/change-email-template.md.html': '/theme-development/email-template',
    '/2.0/advanced/indexing-products-to-elasticsearch.md.html': '/performance/configure-elasticsearch',
    '/2.0/advanced/security-practice.html': '/getting-started/best-security-practice',
    '/2.0/advanced/create-data-import.html': '/advanced/understanding-data-transfer',

    // Themes
    '/2.0/themes': '/theme-development/getting-started',
    '/2.0/themes/create-store-theme.html': '/theme-development/creating-store-theme',
    '/2.0/themes/create-admin-theme.html': '/theme-development/creating-admin-theme',

    // Performance
    '/2.0/performance/indexing.html': '/advanced/understanding-indexers',
    '/2.0/performance/fpc.html': '/performance/configure-fpc',
    '/2.0/performance/octane.html': '/performance/configure-laravel-octane',
    '/2.0/performance/loadbalancing.html': '/performance/configure-load-balancing',

    // Bagisto APIs
    '/2.0/api/getting-started-with-the-api.html': '/api/rest-api',

    /**
     * Version 2.x Redirects
     * 
     * Note: These redirects are for the legacy 2.x documentation.
     */

    // Prologue
    '/2.x/prologue/upgrade-guide.html': '/getting-started/upgrade-guide',
    '/2.x/prologue/contribution-guide.html': '/getting-started/contribution-guide',

    // Introduction
    '/2.x/introduction/requirements.html': '/getting-started/before-you-start.html#system-requirements',
    '/2.x/introduction/installation.html': '/getting-started/installation',
    '/2.x/introduction/docker.html': '/getting-started/installation.html#🐳-docker-installation',

    // Architecture Concepts
    '/2.x/architecture/packages': '/architecture/backend',
    '/2.x/architecture/packages.html': '/architecture/backend',
    '/2.x/architecture/frontend.html': '/architecture/frontend',
    '/2.x/architecture/theme.html': '/architecture/frontend',
    '/2.x/architecture/performance.html': '/performance/introduction',
    '/2.x/architecture/repository-pattern.html': '/architecture/backend.html#repository-pattern-in-bagisto',
    '/2.x/architecture/modular-design.html': '/architecture/backend.html#modular-design-in-bagisto',

    // Package Development
    '/2.x/packages': '/package-development/getting-started',
    '/2.x/packages/create-package.html': '/package-development/getting-started',
    '/2.x/packages/create-migrations.html': '/package-development/migrations',
    '/2.x/packages/create-models.html': '/package-development/models',
    '/2.x/packages/store-data-through-repositories.html': '/package-development/repositories',
    '/2.x/packages/routes.html': '/package-development/routes',
    '/2.x/packages/controllers.html': '/package-development/controllers',
    '/2.x/packages/views.html': '/package-development/views',
    '/2.x/packages/localization.html': '/package-development/localization',
    '/2.x/packages/blade-components.html': '/theme-development/blade-components',
    '/2.x/packages/layouts.html': '/theme-development/understanding-layouts',
    '/2.x/packages/bundling-assets.html': '/theme-development/vite-powered-theme-assets',
    '/2.x/packages/add-menu-in-admin.html': '/package-development/menu',
    '/2.x/packages/validation.html': '/theme-development/validation',
    '/2.x/packages/datagrid.html': '/package-development/datagrid',
    '/2.x/packages/create-acl.html': '/package-development/access-control-list',
    '/2.x/packages/create-system-configuration.html': '/package-development/system-configuration',

    // Digging Deeper
    '/2.x/advanced/create-shipping-method.html': '/shipping-method-development/create-your-first-shipping-method',
    '/2.x/advanced/create-payment-method.html': '/payment-method-development/create-your-first-payment-method',
    '/2.x/advanced/create-product-type.html': '/product-type-development/create-your-first-product-type',
    '/2.x/advanced/events.html': '/advanced/event-listeners',
    '/2.x/advanced/helpers.html': '/advanced/understanding-core-class',
    '/2.x/advanced/override-core-model.html': '/package-development/models.html#overriding-core-models-optional',
    '/2.x/advanced/render-event.html': '/advanced/view-render-events',
    '/2.x/advanced/change-email-template.md.html': '/theme-development/email-template',
    '/2.x/advanced/indexing-products-to-elasticsearch.md.html': '/performance/configure-elasticsearch',
    '/2.x/advanced/security-practice.html': '/getting-started/best-security-practice',
    '/2.x/advanced/create-data-import.html': '/advanced/understanding-data-transfer',

    // Themes
    '/2.x/themes': '/theme-development/getting-started',
    '/2.x/themes/create-store-theme.html': '/theme-development/creating-store-theme',
    '/2.x/themes/create-admin-theme.html': '/theme-development/creating-admin-theme',

    // Bagisto APIs
    '/2.x/api/getting-started-with-the-api.html': '/api/rest-api',

    /**
     * Version 1.5.x Redirects
     * 
     * Note: These redirects are for the legacy 1.5.x documentation.
     */

    // Prologue
    '/1.5.x/prologue/upgrade-guide.html': '/getting-started/upgrade-guide',
    '/1.5.x/prologue/contribution-guide.html': '/getting-started/contribution-guide',

    // Introduction
    '/1.5.x/introduction/requirements.html': '/getting-started/before-you-start.html#system-requirements',
    '/1.5.x/introduction/installation.html': '/getting-started/installation',
    '/1.5.x/introduction/docker.html': '/getting-started/installation.html#🐳-docker-installation',

    // Architecture Concepts
    '/1.5.x/architecture/packages': '/architecture/backend',
    '/1.5.x/architecture/packages.html': '/architecture/backend',
    '/1.5.x/architecture/frontend.html': '/architecture/frontend',
    '/1.5.x/architecture/theme.html': '/architecture/frontend',
    '/1.5.x/architecture/performance.html': '/performance/introduction',
    '/1.5.x/architecture/repository-pattern.html': '/architecture/backend.html#repository-pattern-in-bagisto',
    '/1.5.x/architecture/modular-design.html': '/architecture/backend.html#modular-design-in-bagisto',

    // Package Development
    '/1.5.x/packages': '/package-development/getting-started',
    '/1.5.x/packages/create-package.html': '/package-development/getting-started',
    '/1.5.x/packages/create-migrations.html': '/package-development/migrations',
    '/1.5.x/packages/create-models.html': '/package-development/models',
    '/1.5.x/packages/store-data-through-repositories.html': '/package-development/repositories',
    '/1.5.x/packages/routes.html': '/package-development/routes',
    '/1.5.x/packages/controllers.html': '/package-development/controllers',
    '/1.5.x/packages/views.html': '/package-development/views',
    '/1.5.x/packages/localization.html': '/package-development/localization',
    '/1.5.x/packages/layouts.html': '/theme-development/understanding-layouts',
    '/1.5.x/packages/assets.html': '/theme-development/vite-powered-theme-assets',
    '/1.5.x/packages/add-menu-in-admin.html': '/package-development/menu',
    '/1.5.x/packages/customize-hompepage-menu.md.html': '/package-development/menu',
    '/1.5.x/packages/validation.html': '/theme-development/validation',
    '/1.5.x/packages/datagrid.html': '/package-development/datagrid',
    '/1.5.x/packages/create-acl.html': '/package-development/access-control-list',
    '/1.5.x/packages/create-system-configuration.html': '/package-development/system-configuration',

    // Digging Deeper
    '/1.5.x/advanced/create-shipping-method.html': '/shipping-method-development/create-your-first-shipping-method',
    '/1.5.x/advanced/create-payment-method.html': '/payment-method-development/create-your-first-payment-method',
    '/1.5.x/advanced/create-product-type.html': '/product-type-development/create-your-first-product-type',
    '/1.5.x/advanced/events.html': '/advanced/event-listeners',
    '/1.5.x/advanced/helpers.html': '/advanced/understanding-core-class',
    '/1.5.x/advanced/override-core-model.html': '/package-development/models.html#overriding-core-models-optional',
    '/1.5.x/advanced/render-event.html': '/advanced/view-render-events',
    '/1.5.x/advanced/change-email-template.md.html': '/theme-development/email-template',
    '/1.5.x/advanced/indexing-products-to-elasticsearch.md.html': '/performance/configure-elasticsearch',
    '/1.5.x/advanced/security-practice.html': '/getting-started/best-security-practice',

    // Themes
    '/1.5.x/themes': '/theme-development/getting-started',
    '/1.5.x/themes/create-store-theme.html': '/theme-development/creating-store-theme',
    '/1.5.x/themes/create-admin-theme.html': '/theme-development/creating-admin-theme',
    '/1.5.x/themes/notification.html': '/advanced/event-listeners',
    '/1.5.x/themes/integrate-image-search-in-theme.html': '/theme-development/creating-store-theme',

    /**
     * Version 1.x Redirects
     * 
     * Note: These redirects are for the legacy 1.x documentation.
     */

    // Introduction
    '/1.x/introduction/requirements.html': '/getting-started/before-you-start.html#system-requirements',
    '/1.x/introduction/installation.html': '/getting-started/installation',
    '/1.x/introduction/upgrade-to-latest-bagisto.html': '/getting-started/upgrade-guide',
    '/1.x/introduction/docker.html': '/getting-started/installation.html#🐳-docker-installation',

    // Package Development
    '/1.x/packages': '/package-development/getting-started',
    '/1.x/packages/create-package.html': '/package-development/getting-started',
    '/1.x/packages/create-migrations.html': '/package-development/migrations',
    '/1.x/packages/add-menu-in-admin.html': '/package-development/menu',
    '/1.x/packages/create-acl.html': '/package-development/access-control-list',
    '/1.x/packages/create-system-configuration.html': '/package-development/system-configuration',
    '/1.x/packages/create-models.html': '/package-development/models',
    '/1.x/packages/store-data-through-repositories.html': '/package-development/repositories',

    // Advanced Topics
    '/1.x/advanced/create-shipping-method.html': '/shipping-method-development/create-your-first-shipping-method',
    '/1.x/advanced/create-payment-method.html': '/payment-method-development/create-your-first-payment-method',
    '/1.x/advanced/create-product-type.html': '/product-type-development/create-your-first-product-type',
    '/1.x/advanced/datagrid.html': '/package-development/datagrid',
    '/1.x/advanced/events.html': '/advanced/event-listeners',
    '/1.x/advanced/helpers.html': '/advanced/understanding-core-class',
    '/1.x/advanced/override-core-model.html': '/package-development/models.html#overriding-core-models-optional',
    '/1.x/advanced/render-event.html': '/advanced/view-render-events',
    '/1.x/advanced/indexing-products-to-elasticsearch.md.html': '/performance/configure-elasticsearch',
    '/1.x/advanced/security-practice.html': '/getting-started/best-security-practice',

    // Themes
    '/1.x/themes': '/theme-development/getting-started',
    '/1.x/themes/tracer.html': '/theme-development/getting-started',
    '/1.x/themes/create-store-theme.html': '/theme-development/creating-store-theme',
    '/1.x/themes/create-admin-theme.html': '/theme-development/creating-admin-theme',
    '/1.x/themes/change-email-template.md.html': '/theme-development/email-template',
    '/1.x/themes/customize-hompepage-menu.md.html': '/package-development/menu',
    '/1.x/themes/integrate-image-search-in-theme.html': '/theme-development/creating-store-theme',

    // Admin Theme
    '/1.x/admin-theme': '/theme-development/creating-admin-theme',
    '/1.x/admin-theme/notification.html': '/advanced/event-listeners',

    // Translations
    '/1.x/translations/translation-based-on-locale.html': '/package-development/localization',
    '/1.x/translations/change-the-language-of-error-validations-on-your-store.html': '/package-development/localization',

    // User Guides
    '/1.x/user-guides/tax-rates.html': '/getting-started/before-you-start',
    '/1.x/user-guides/cart-rule.html': '/getting-started/before-you-start',
    '/1.x/user-guides/social-auth.html': '/getting-started/before-you-start',

    // Bagisto Web API
    '/1.x/api/getting-started-with-the-api.html': '/api/rest-api',
    '/1.x/api/customers.html': '/api/rest-api',
    '/1.x/api/locales.html': '/api/rest-api',
    '/1.x/api/addresses.html': '/api/rest-api',
    '/1.x/api/products.html': '/api/rest-api',
    '/1.x/api/categories.html': '/api/rest-api',
    '/1.x/api/attributes.html': '/api/rest-api',
    '/1.x/api/attribute-families.html': '/api/rest-api',
    '/1.x/api/cart.html': '/api/rest-api',
    '/1.x/api/orders.html': '/api/rest-api',
    '/1.x/api/invoices.html': '/api/rest-api',
    '/1.x/api/shipments.html': '/api/rest-api',
    '/1.x/api/transactions.html': '/api/rest-api',
    '/1.x/api/reviews.html': '/api/rest-api',
    '/1.x/api/wishlists.html': '/api/rest-api',

    // Bagisto GraphQL Admin API
    '/1.x/graphql-admin-api/installation.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/getting-started-with-the-api.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/settings.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/cms.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/velocity.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/customers.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/promotions.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/products.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/categories.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/attributes.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/attribute-groups.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/attribute-families.md.html': '/api/graphql-api',
    '/1.x/graphql-admin-api/sales.md.html': '/api/graphql-api',

    // Bagisto GraphQL Shop API
    '/1.x/graphql-shop-api/getting-started-with-the-api.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/addresses.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/orders.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/reviews.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/wishlists.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/compare.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/downloadable-links.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/cart.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/checkout.md.html': '/api/graphql-api',
    '/1.x/graphql-shop-api/homepage.md.html': '/api/graphql-api',
}

export function makeRedirectHtml(to: string) {
    return `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="${to}" />
    <script>window.location.replace("${to}");</script>
  </head>
  <body>
    <p>Redirecting to <a href="${to}">${to}</a>…</p>
  </body>
</html>`
}
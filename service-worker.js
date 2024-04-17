/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.5.x/advanced/change-email-template.html",
    "revision": "f30f4429166a2e67918f02092fdce322"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "def38f47113999617a19fb95b724a137"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "c2de9c7fef543964ac12bb90402d7ea0"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "cce10da6d49b1f17b055a89a11e03093"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "a8f3387b8b8cf80b06fbcc67311293b3"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "ed550579516543bf03c3f45eae2996af"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "f4fc8fb235b24773d33ee62d70132115"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d5b782e309a1be8a3433791b1bf1a3f8"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "c301a58694b9d22fc154e4ba841acdee"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "211f7e03a0afb9a8b149eb3a9a1c5391"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "69ba2d2bc91781a9a549a296e595a4bf"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "72b5c5c67d0e41e4fd53123b89becdff"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3f609f10fcf4ceffeaf52539f29a9ef3"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "4c1d72fa90611294ad4106a18a50b7a4"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "ddddcc26587dc64187f8abbae9922520"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "608b1bef74acdf5e89e020cf47921139"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "70973dc5c572ddcc26731b71c1ada2b2"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "b358afaa18e788a93167f4243cc9e921"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a35d336d97097c737507be9f574012e4"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "d4403d0eda963e4bb4760952cc16b548"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "4507538c6cfa26d500d2d81b31cbb548"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "8c8063248e7472eda3628a8fc754ed07"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "2d4002f3498b475ae2f8e97040e162d9"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "2077d190d84a53472ec849d4d3867cde"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "c590678fdbdc58e5cc7138efd9c866c3"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "ce6b3a2c912472192e5c0270a2e476ad"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "cb35a84b61526293f69018cac7767858"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "f8022731dfb77e47bc90fcccec79af3c"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "24d386470123c081fdea6083ef37d0ca"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "d949836f008027cefb1e3efbbc8fbecd"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "7750751a938b712449f78dbd386d5368"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "c7dddb36cbe05dbb5edfed8781917de3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "97f89b7333da1ca5c34762c36ac5e458"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "73323968d1b37b5fe241e4f34218a21e"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "a90e59d4c8fb50105e9ed38f5bff93fb"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "8d3bd6a91b01dcc809d46fbf7bf5ea91"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "279a438074b3cb8d56827be7bf4e1781"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "85c80eaacce92fd8b43117924d13114d"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "e8b26d27d9995420b9ca1ebd031d3201"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "c1c20faa36a1e61c1142f3a714e1c2e7"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "1923c8114597a98e0091fa458c2d1ae3"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "cff50509624225e4065b97a2a7b716d9"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "4b7332a2f381c620ddefa74c5773ac0b"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "b2215dbfb5886a987d295948d7a733ac"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "e453a499bc077cc2ac9a88aed40f8c1b"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "75b691843204d7417d8849e1e49368cb"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e51bd75c9d566e6b37fec92ba06d5b76"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "2c05f15d7e51f7d02d0b39fac2c66b7c"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "ac68e8c3e3e3b7418112b32ba331c3de"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "1d4ba60d84c7f1800af26ff16b9c90d8"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "2585c5f2747b3267d3bdad6838395458"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "69525f590b36b28800b458bd4990148f"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "2ffb4505a2e6d9c8d435e3720a04866a"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "f84455967c9dfe438d22144ddf793868"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "e67a6b15fdc7a498b43fef988e022e4a"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "9d5f58ba89b3367bfc084ab5071bb993"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "7511877b307cd97c82b9d9a9e219a136"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "015814010206dba8e3afbff35627bf9c"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "8003f4586f7263d9fbb9823926dab59e"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "b24835fac4f72807baaf8daadfaab8c3"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "fb330ba2f10f1872c8490051374b5621"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "b287fd8c3a97ee0d452f26a1b2a4914d"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "5e578cdb95fbbf3f9dd7989107173de3"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "c185d2845962a4a194c31d5cdf3ba926"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "85f10791ebdb67c44aa030cfb30a3a5d"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "d59ccd3fa15e48450e3f9eec7d696a79"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "12595e25470494b5786787cde88cf3ce"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "5f33335b6c66f7b6e5d644d98615d1d1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "2c1a1e736125e9ffa84ddc0cd632ea68"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "9e624815a7639776e6d32a0cd864ede1"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "98957e3bbcc18eb481575c821e1c39e3"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "fb2663909868a8c0a22da4cdbe13969c"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "1409b9158de805c281744a29ed540432"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "7bd8ad0144731bd8d1fbaf3c3f8bcad8"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "1b093f85b56bf6ab1fc3cda1b64f746c"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "e73adb476807e94bfa533c66bd1e2bc9"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "5dfca8e2cac7d531c5126197a421256a"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "31c5e1a47ee1e088f29fdc125f53d355"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "334164e82e9765a49225757a20008966"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "19db18468559fbe34fbe4ee58e285440"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "708467884316b8321ab46d85c5d58b5a"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "502a4c27115a79882439ec7d2430f208"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "9b4d9aaecdb1e8e22f15265a09f2dbee"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "0c028e8ca52a7761d1d0fa96955bd384"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "8977419e71e07d02b91d3d6e1abe6f11"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "548e5f48407e84fe66d74b1f48f64c97"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "0aab491dcff5ad92b0497a403aaebde7"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "edf7ade20299a24a46bd8ea1e28c3c13"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "183c9df3cc9a492cf3865fdf35d028b4"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "96db7650d635c16dc09903e549f4aa50"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "75d0df02291175772db6394f6e03bccd"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "167ca3537edf39fd75f6f296b2b11960"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "38dd83c69c290c2f1b15f3713a2245b6"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "bd6b0d6da4349e03cf5d2adf9e35aad6"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "3a4b2fbfb621dc14f3fea29913f46c27"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "0ff92e453553e70889e8245fb1fff224"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "62fea34046346b1ebf70743d88f8a25f"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c924a3500a1418ebb4c5eb924f042bb3"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "16e354dee205df43f2d288d1bc73a30b"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "44f6ab991e7b08084bcecadf3d2e138e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "45b15f98d2335d6a4d2f833d209e7dd1"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "bdebbc44e651b3ab53ce718d176236eb"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "ae7aaf0de8d239c716f2bfab80256210"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "af1dfa49fdbe2cbd1a8d1cc2960b94e4"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "0bf04aee8fd64acc96dbca909ce27edd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "99b423ef3a0fb305cb1802ba9a711de6"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "25f54a535ee2127c069b67099268b696"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "453fa959383470f05818993c55eaddca"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "6a6a45743a92d3c3d30150f3416cbd36"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1e9644797df0d863c39b8d03d83e376c"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "5dc62282da46ada60196b486da92d932"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "1cca60deff514603a6b0b238f1c57a3f"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "be7fc9c990db99de21332be3075e99b4"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "8f4bba51ef5911bd280cfe9a524d1e3c"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "662a4327c52c5b2049480340c13a76a2"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "eaed0b905bb47016502fde9e3ab4210e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "eb9e00a343e44436fb2cc2501aa5c7e8"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "945b97937d07dc46916f93cdcdc3c5e7"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "0f823edf1ed5808146920ea76e105649"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "82aa777c18e691a4fe720ec862cc78d3"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "bbbdd4d3e920bdab0c1375b1f35af52f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "9122ff2d74f52af272684ec810d1f509"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "41d9d3ad76389ee8482da5d902e082a8"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "844d07d7e298fbc0d83e61809a762de1"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "fd19b8ce5e815b47aed70b1044c889c8"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "5e30f1a8e1aabad4815c48657585090b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "5a3582f0dea280f76a584a4e12c0d1f1"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "6f57df04fe3c9ce54d8b4d96105c4ae0"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "27ab03d2057e22fdfc12140ac0a4322e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "8c1805684c45450670db7324c5529ad3"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "7a31d83481ad788befef31ea9bfabebb"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "315550400ef38dd911e6017314f2f152"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "8ef323d9f9f7a95dc43941cd33ff6582"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "fa6a3eb6211842780f9920fa4be44d02"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "b74351213ea6a53e9f3db1cccac8268d"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "257f49bf2e50e7ef2d34bf61c00a9be8"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "4462b4eedda45cbbf39cf2dccab68744"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "4e1866369725a8ec05dfaa1b279c2ef4"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "12bea6edfa0c2a7ff7d744fcb5c83ff5"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "882ad53d2e43851c8bb9d94279500f4a"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "41773d93ddd37e5f916bd96932c5ec45"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "336c61a23ea9a563145bf9f70ef19472"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "ac7f7e4a3e712774c438e548f76fe903"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "e68995318d36f5d2b4704eb8c08eae4c"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "5e304fc13ad19323db25547b341ef66a"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "38589621b8a32dd5221b30b65802dd14"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "ebb162ca2c6a115749f89f7217fd872c"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "c7369580fddb5742cc772a8966973fd0"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "4fdad32a53ee5c701e0d06d6aa0023e5"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "ce41a19c2bf4060937cb65de62529721"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "ea19d24a0b49f7c05b3852051dd48a32"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "c038ef51aaee00a3acb9558741ba8e02"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "a25fdb3b92dc665b824f252f0126e512"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "4452a0c22a4e3f86e3364e6083f981a5"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "17a38ebed2158b60cf285c3969b8743f"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "e59105f8bf92d4c460aad13fdc38dccf"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "7827659b976f06f88688b39cc17e7643"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "69df2c1689941d0ca38c7f31ad7e05b8"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "8a2c98feb0fd0e5cce9ba1341b7505d9"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "876d373eff65646c49fdf981513203b5"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "f2f9590d4ae9c7736657219bb85b3fd8"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "94d50605e75046842f35185244a6b463"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "60e056b3a000d11ef9647091c4b2e26a"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "8d69fcd460a3cf9c13f94dd6d5d80315"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "c30e9f7bc5d0a67ddcd70441a399cb9f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "5012f803385e728f25439eda369079a9"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "7e70521b29021547bdfbff340f756996"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "ce152cb8413524f849fd4293ae87f9c5"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "bcf86667d55b8b31a3dcc9cce5179305"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "9e26bff36a24a3b9164f3162778851fd"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "7d72557e1d3a88a3c2c79ffe20fe53fc"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "8cd5eeb8ece2291efc9cb0843218432c"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "1bccf2957cc897f6ca9533bcf8de96a8"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "7de3262c084dad91d7e11d75d3c7224b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "94acf76297c302abbc8cd1c702dfdc5c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "72c99c7203b3600d1a5a93d4033d5190"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "517b33c734250bb9de9f363d987279e1"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c27f2faa7932c6cd4ca7cffd27874285"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "3b6222614045631c5c4c4a01c9d7aa48"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "899dad3c081b94507e50a032a405c1d1"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "46066025b5b7b7c38814d0d02a603ce6"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "2af58f5ace4959b6b8ae80a96ae390fd"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "08aa48412a2382a72e0c123affc276cf"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "0b752d815103e026302a9b5db3bafa98"
  },
  {
    "url": "404.html",
    "revision": "07e90b91ea666a0d2945b3bd39248b13"
  },
  {
    "url": "assets/css/0.styles.96c1d9de.css",
    "revision": "d0078f913e24effeffa73299ae9081c5"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin_social_auth.1f906bf7.png",
    "revision": "1f906bf7aaadd3d1ffa9d1f2a1ecb564"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-acl-output.b7cd765b.png",
    "revision": "b7cd765baa91a55b5ff4ade2c59b7e02"
  },
  {
    "url": "assets/img/admin-acl-output.b9cf7d8a.png",
    "revision": "b9cf7d8af9f9610def53593fc0d1fb27"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.1be77665.png",
    "revision": "1be776656f2461337df0f451f917bfb2"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/admin-menu-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/blog-admin-output.1118ea56.png",
    "revision": "1118ea56b8def41f82b192a76763d2c3"
  },
  {
    "url": "assets/img/blog-package-output.4aced6a8.png",
    "revision": "4aced6a8f0a5f4af90cb3cf52c8ebf2c"
  },
  {
    "url": "assets/img/blog-package-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/custom-config-output-1.c07d16b0.png",
    "revision": "c07d16b059ed84790741caf02577a696"
  },
  {
    "url": "assets/img/custom-config-output-2.0848dc68.png",
    "revision": "0848dc686b4c4767b613f18d95de60bd"
  },
  {
    "url": "assets/img/custom-config-output.8aeb3cff.png",
    "revision": "8aeb3cffe1edc680a288ca3792782d50"
  },
  {
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/github-OAuth-step1.e74d8be1.png",
    "revision": "e74d8be18d45562391def8eabc3f9f05"
  },
  {
    "url": "assets/img/github-OAuth-step3.1c5347e7.png",
    "revision": "1c5347e798d2d4e9f232e821b30a0d71"
  },
  {
    "url": "assets/img/google-OAuth-step1.cdeb34e7.png",
    "revision": "cdeb34e75d4109dc8c732cb2a41f7149"
  },
  {
    "url": "assets/img/google-OAuth-step10.7cf440b2.png",
    "revision": "7cf440b27afcc28b91d0569d0e0574dd"
  },
  {
    "url": "assets/img/google-OAuth-step2.33d3b5d7.png",
    "revision": "33d3b5d7d306652f9ad8145885649684"
  },
  {
    "url": "assets/img/google-OAuth-step3.7cfab527.png",
    "revision": "7cfab527afc801407b13bb1c0080502c"
  },
  {
    "url": "assets/img/google-OAuth-step4.58f07d86.png",
    "revision": "58f07d861b92fdf12e966ef8ec0a2f7d"
  },
  {
    "url": "assets/img/google-OAuth-step6.feabd47b.png",
    "revision": "feabd47b9a5af05843c2bb60b8226e37"
  },
  {
    "url": "assets/img/google-OAuth-step7.21f7d9f6.png",
    "revision": "21f7d9f6ff6babc41c0e032cf963356c"
  },
  {
    "url": "assets/img/google-OAuth-step8.c2178472.png",
    "revision": "c21784723f5897170c0780d4307dbbb1"
  },
  {
    "url": "assets/img/google-OAuth-step9.83e7862b.png",
    "revision": "83e7862bd3d9aa050b4dbd2bded3fec7"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/installed-elastic-info.46e47fde.png",
    "revision": "46e47fde533d4982324a07b091943503"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/mail-sample.6aa3d730.png",
    "revision": "6aa3d7304bd852564b76860b7117bdb7"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/product-index.a45ce729.png",
    "revision": "a45ce7297692b3170774154331aa5911"
  },
  {
    "url": "assets/img/product-index.bc0a70c6.png",
    "revision": "bc0a70c6b1ba1b0cd4cd31f3c7f8dfa5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.224dc450.js",
    "revision": "b669407d61192d680d3d7b94121ef16c"
  },
  {
    "url": "assets/js/100.58ceb946.js",
    "revision": "35bbb38fe607569f0fb2d1e5006bb531"
  },
  {
    "url": "assets/js/101.b15a86ee.js",
    "revision": "897e7ed5dd5174e66fc74c230e698a9a"
  },
  {
    "url": "assets/js/102.77ac4b3e.js",
    "revision": "d257ecfb34bf9283711d61aa7dd31b14"
  },
  {
    "url": "assets/js/103.7255c531.js",
    "revision": "9a99b2c7511240f9a26b3065cd4cd3cf"
  },
  {
    "url": "assets/js/104.6cc6e7fe.js",
    "revision": "d4c994eb29684220f00c91500fede588"
  },
  {
    "url": "assets/js/105.93c515c3.js",
    "revision": "6f521aa74f16c1df6ca3f0bd76dfb26b"
  },
  {
    "url": "assets/js/106.27c43693.js",
    "revision": "51a82f81f8dd38c4e703dda294576b31"
  },
  {
    "url": "assets/js/107.50c91c52.js",
    "revision": "aaf6463f115de78d3e571191c609abe0"
  },
  {
    "url": "assets/js/108.b700b315.js",
    "revision": "33486e9d830399ed158999cf21d9d694"
  },
  {
    "url": "assets/js/109.7706116c.js",
    "revision": "faed0760682c0e71f573fa93289b4907"
  },
  {
    "url": "assets/js/11.5b20f745.js",
    "revision": "fa8eeaa67d94f2f77530549331db72b0"
  },
  {
    "url": "assets/js/110.5d9a7c9a.js",
    "revision": "286874afdb5fcd0caaf44ee9db51e809"
  },
  {
    "url": "assets/js/111.130b1734.js",
    "revision": "4721bdb507ad7e26aa725cb6af4572b2"
  },
  {
    "url": "assets/js/112.030e0791.js",
    "revision": "de87930d0a0c5664f37139d55b154419"
  },
  {
    "url": "assets/js/113.326bdc81.js",
    "revision": "f87c5dcca4881f2f7da4b5fda01e0c23"
  },
  {
    "url": "assets/js/114.cc7d4a8e.js",
    "revision": "51d9f350dd361fa559f8135406ae3919"
  },
  {
    "url": "assets/js/115.e8f7a18d.js",
    "revision": "9eacc11e85b0dc6095dd8c07a6720b84"
  },
  {
    "url": "assets/js/116.1e7408fc.js",
    "revision": "2da4fd4e67bde8b78d16aa2e343f1c12"
  },
  {
    "url": "assets/js/117.54112a9e.js",
    "revision": "5063d4f8dec32817e2c9628fb3286982"
  },
  {
    "url": "assets/js/118.42849bb8.js",
    "revision": "dd1ecba79803f3a62ca529633a559642"
  },
  {
    "url": "assets/js/119.afc1f3e2.js",
    "revision": "f086521ade32b9468293bf1cdeb11669"
  },
  {
    "url": "assets/js/12.345fcda2.js",
    "revision": "caa64bc06972ff0c29a08983d57a49b0"
  },
  {
    "url": "assets/js/120.43a43410.js",
    "revision": "c0b07056f9c60cd8ff922dae258e9af8"
  },
  {
    "url": "assets/js/121.aa6373fb.js",
    "revision": "1cd663603da994c7c159c5c00893f572"
  },
  {
    "url": "assets/js/122.b4b13649.js",
    "revision": "0fb67128652f2258fd12a209274defb9"
  },
  {
    "url": "assets/js/123.4ca615b5.js",
    "revision": "59e36881c9b475431048f720f1de42ac"
  },
  {
    "url": "assets/js/124.0c5510c9.js",
    "revision": "3b7beafc1a62c8272e718657ab7041ef"
  },
  {
    "url": "assets/js/125.e1d76194.js",
    "revision": "528d8c6cf9945eae7d673c47bab6a18b"
  },
  {
    "url": "assets/js/126.6bf02690.js",
    "revision": "545d9674ee608319c273f99aaa564d11"
  },
  {
    "url": "assets/js/127.90b4bfa8.js",
    "revision": "304dfd69c1dcec2807b93d6652571333"
  },
  {
    "url": "assets/js/128.d64bbde2.js",
    "revision": "0a651f57b2eb998665a1dc64e41bd6a9"
  },
  {
    "url": "assets/js/129.4dfd121f.js",
    "revision": "ef17714f7560cd8fc734fc73a3930aaa"
  },
  {
    "url": "assets/js/13.ef17fbf5.js",
    "revision": "274a5d1e0d7ad3b2dbed2a0caeb08b85"
  },
  {
    "url": "assets/js/130.fb0f4236.js",
    "revision": "69583f8d628aba38fde9380264f087e5"
  },
  {
    "url": "assets/js/131.665ae0dd.js",
    "revision": "d5a547020ca3d560412a41bfee36d33d"
  },
  {
    "url": "assets/js/132.5294f802.js",
    "revision": "0e577383864b7f515c45b2d78e981ee0"
  },
  {
    "url": "assets/js/133.14a1c610.js",
    "revision": "5bd0db453231d83980fda8f7f8c893f4"
  },
  {
    "url": "assets/js/134.f12dbd03.js",
    "revision": "599e8dd8831ef3ee2a3013a47dfb894f"
  },
  {
    "url": "assets/js/135.31cdbfac.js",
    "revision": "aa14782ab8a938eceff7946f39f6c948"
  },
  {
    "url": "assets/js/136.de5cf9c8.js",
    "revision": "dc1fac8783acb7347efc8ec3cf981eab"
  },
  {
    "url": "assets/js/137.9eb4a138.js",
    "revision": "8604ee6f030beef6e6e4d54c43800ae4"
  },
  {
    "url": "assets/js/138.7a45da48.js",
    "revision": "f323380c3198976753b24f7bfa8fed88"
  },
  {
    "url": "assets/js/139.fbf7a44e.js",
    "revision": "b7e3e81f252a7c67f88260b11ff99d33"
  },
  {
    "url": "assets/js/14.483a97a9.js",
    "revision": "685ab061d07553584b30b17a93a560bf"
  },
  {
    "url": "assets/js/140.bab69686.js",
    "revision": "0c1feedd3f3982dc1506d39e16f6d3d7"
  },
  {
    "url": "assets/js/141.7f0cf1a0.js",
    "revision": "240ea33a30d2f130c8ad0968b7dc8fbd"
  },
  {
    "url": "assets/js/142.d30741cb.js",
    "revision": "5089c3943b67a56706bc205e2dfc2049"
  },
  {
    "url": "assets/js/143.1e2503a4.js",
    "revision": "4036d3fe41031e311533e6102666785c"
  },
  {
    "url": "assets/js/144.07ba2792.js",
    "revision": "22a99fd3369b74887143321b3154e791"
  },
  {
    "url": "assets/js/145.272fc4eb.js",
    "revision": "fa5c3a5776e229c2970b800681474d1a"
  },
  {
    "url": "assets/js/146.1f56f76b.js",
    "revision": "739cfc48760a8bae5a3b4ff60da7a6a3"
  },
  {
    "url": "assets/js/147.cec11958.js",
    "revision": "4540c96c4c4fbe4d6c72270b84fb0f6f"
  },
  {
    "url": "assets/js/148.89839286.js",
    "revision": "04a69eb572eaef173f7d14fda53e76f5"
  },
  {
    "url": "assets/js/149.d5eb0988.js",
    "revision": "cad0f30df82364dd6e6ecfd5be602ed7"
  },
  {
    "url": "assets/js/15.6a8760ad.js",
    "revision": "b9450905984285347296e47abfecd4dc"
  },
  {
    "url": "assets/js/150.640b2b67.js",
    "revision": "b150ed3bac959d54063f3211958fd884"
  },
  {
    "url": "assets/js/151.0e213038.js",
    "revision": "b1728092b636972f68c7b2f7484e9de3"
  },
  {
    "url": "assets/js/152.9da4400b.js",
    "revision": "fbc2469ab8519293ae572344ed62592b"
  },
  {
    "url": "assets/js/153.5db31b46.js",
    "revision": "87b3cd3a306adae8995df65eb0abe37b"
  },
  {
    "url": "assets/js/154.78e52de5.js",
    "revision": "894f0b29e91a333d6d4a6c0f4e630524"
  },
  {
    "url": "assets/js/155.0c7022c7.js",
    "revision": "32f1705572acf6f16bda0abac6b97761"
  },
  {
    "url": "assets/js/156.eb87ad98.js",
    "revision": "54dd6ac1bd5a9ce1c1b76f6807269fe4"
  },
  {
    "url": "assets/js/157.2924078c.js",
    "revision": "b9d42b177febd5e26760ef141703854f"
  },
  {
    "url": "assets/js/158.52621dcc.js",
    "revision": "2198b133d6b9f8da2f44be8ca4d343da"
  },
  {
    "url": "assets/js/159.e009edae.js",
    "revision": "4abdf0dc8f07aae6943ef7f1ffb1e023"
  },
  {
    "url": "assets/js/16.2596ef9d.js",
    "revision": "80d61671d23c77c7726cec96639e09b5"
  },
  {
    "url": "assets/js/160.cb259433.js",
    "revision": "1438a8a05f20894d64e78f81942849f0"
  },
  {
    "url": "assets/js/161.8f55dbf7.js",
    "revision": "0780221d03601d10c4bc1a3661d28271"
  },
  {
    "url": "assets/js/162.04f6be0a.js",
    "revision": "58d05296dc12b192d62eeb832112edd4"
  },
  {
    "url": "assets/js/163.358c6543.js",
    "revision": "6dd874ba54d8023fd0c0e7971f835ef3"
  },
  {
    "url": "assets/js/164.61a5daa8.js",
    "revision": "94c993af455a1f3b9603387486d6e121"
  },
  {
    "url": "assets/js/165.1456bd6e.js",
    "revision": "b627c21dfb58c81f2d3fd48fd0c4c1d0"
  },
  {
    "url": "assets/js/166.fd621227.js",
    "revision": "8f7c2e3280646064ceee5f0656d2d2c8"
  },
  {
    "url": "assets/js/167.898d8822.js",
    "revision": "5d85f9dd35d32ba7bcb3b2b73a59f6ad"
  },
  {
    "url": "assets/js/168.f65c907a.js",
    "revision": "1f70eef50cabdc6a41ca6ef109fbc57d"
  },
  {
    "url": "assets/js/169.4630051e.js",
    "revision": "0caa7cc8f3ca503dc87696528b561801"
  },
  {
    "url": "assets/js/17.3d6f7e0a.js",
    "revision": "dbbc4bcd386a3173115b73ce0947db4c"
  },
  {
    "url": "assets/js/170.2f6fcdf7.js",
    "revision": "efc12bf749e0a404c035ddda191cb23c"
  },
  {
    "url": "assets/js/171.8f275154.js",
    "revision": "90225af1aba9d6f4977b813ba1411064"
  },
  {
    "url": "assets/js/172.1d3a9f70.js",
    "revision": "a7b358d905dab7effe9e96642124162d"
  },
  {
    "url": "assets/js/173.e0784f4d.js",
    "revision": "46f00a8e1cc8c8c41a62cd239a623301"
  },
  {
    "url": "assets/js/174.10126f36.js",
    "revision": "404324781b964983700f214445e59bfb"
  },
  {
    "url": "assets/js/175.c5b83f0e.js",
    "revision": "2155dde2a91cf295e4af6a88b822c481"
  },
  {
    "url": "assets/js/176.ab1be73d.js",
    "revision": "b6b459c709e5a715434d683e7c5f2910"
  },
  {
    "url": "assets/js/177.1cf72f18.js",
    "revision": "adbf0ac713cbad4197083c84fd3bdbe0"
  },
  {
    "url": "assets/js/178.51867ffd.js",
    "revision": "90c404fa3722fc426d41efc5f0562212"
  },
  {
    "url": "assets/js/179.a6b867dc.js",
    "revision": "44889c337315140a4160e4540cfee4df"
  },
  {
    "url": "assets/js/18.ea01ef76.js",
    "revision": "5dfe7dde826d98801d2cd71735a37d76"
  },
  {
    "url": "assets/js/180.2a4cdf17.js",
    "revision": "6e226e663e9dda04c40e104398af0e79"
  },
  {
    "url": "assets/js/181.e66b420d.js",
    "revision": "45f6b831e785ac28a7f821feb0980b19"
  },
  {
    "url": "assets/js/182.b383f6c0.js",
    "revision": "eca19d9b8daac66913a7fb7d32fe5d6d"
  },
  {
    "url": "assets/js/183.7c55a659.js",
    "revision": "921e9cd15f39cc6c12691e135f54afbd"
  },
  {
    "url": "assets/js/184.782d19a9.js",
    "revision": "7ac83e26ce5fa41fadf2f4a7fcd4f005"
  },
  {
    "url": "assets/js/185.39aa03fd.js",
    "revision": "659186f26a7471609038c85e6559088f"
  },
  {
    "url": "assets/js/186.f234a050.js",
    "revision": "48e33d1bf88cc05878871431f2b32e42"
  },
  {
    "url": "assets/js/187.1c6bbe25.js",
    "revision": "09ef430abac435616061eaa6f213f2c3"
  },
  {
    "url": "assets/js/188.3cbf1c37.js",
    "revision": "acf1d44d0f22a0123c777eff0a9b7e96"
  },
  {
    "url": "assets/js/189.3f0f3736.js",
    "revision": "0c29ce5b95546a2bd876d3ac021072ea"
  },
  {
    "url": "assets/js/19.281a5a15.js",
    "revision": "9a29f5b36006921e306fab3b7e8d6b7f"
  },
  {
    "url": "assets/js/190.88f0f1d5.js",
    "revision": "7e3fd1e2ff2bdedf18ff36a9ba800c83"
  },
  {
    "url": "assets/js/2.765ba0d3.js",
    "revision": "7dd3859d268b0d05f19cb401ff313faa"
  },
  {
    "url": "assets/js/20.45f70a3f.js",
    "revision": "033580cc821158cb86257fa6918cd504"
  },
  {
    "url": "assets/js/21.8656a1bf.js",
    "revision": "7bae44c6068da927f3b579af47ee7818"
  },
  {
    "url": "assets/js/22.d2da7e4c.js",
    "revision": "f80b2641237bbeb8a4b322bc5f208c74"
  },
  {
    "url": "assets/js/23.f5422324.js",
    "revision": "c86977555ba4d928d267767299b197ba"
  },
  {
    "url": "assets/js/24.ba9ce457.js",
    "revision": "e8b7679be48af8ceddf31a2e141f7a37"
  },
  {
    "url": "assets/js/25.7b5ed4aa.js",
    "revision": "79e97b8d966397d5c329e04842b0d41d"
  },
  {
    "url": "assets/js/26.6a4dce6e.js",
    "revision": "0832a735a1b56a84b77eac2138a837db"
  },
  {
    "url": "assets/js/27.1d78b190.js",
    "revision": "9d9de6da7660b789b7e8f7c81dcba5b4"
  },
  {
    "url": "assets/js/28.670b5213.js",
    "revision": "8b1710770a175d80cf70f111236dfeee"
  },
  {
    "url": "assets/js/29.db6792f6.js",
    "revision": "74b2c28285ccf4b3ce0d01d171f50d18"
  },
  {
    "url": "assets/js/3.f4960555.js",
    "revision": "baf93ec35f9aefbd9cd808f65bad2667"
  },
  {
    "url": "assets/js/30.0a18e878.js",
    "revision": "b7cade800ee83f17b66fc341a1540758"
  },
  {
    "url": "assets/js/31.d8cc01b1.js",
    "revision": "9fd015a9e0784c21f9061b3cd0e6d96d"
  },
  {
    "url": "assets/js/32.40b46edf.js",
    "revision": "dacb38fb5452fc19cd80bdfedfb668b8"
  },
  {
    "url": "assets/js/33.7eeb5ec0.js",
    "revision": "9f621297a6355e0c7cd95c4d45ea9890"
  },
  {
    "url": "assets/js/34.6bde2c7d.js",
    "revision": "53e13b64e90e423cbea0eb601664f582"
  },
  {
    "url": "assets/js/35.eb711243.js",
    "revision": "c821b4d635da50d7cdcfc10050ecfdbb"
  },
  {
    "url": "assets/js/36.0a2ca373.js",
    "revision": "21c49b9790c65f8859531da480d9d4c5"
  },
  {
    "url": "assets/js/37.b75834cc.js",
    "revision": "6aa7eb6de3ac0dbb5bd54f0e689e4588"
  },
  {
    "url": "assets/js/38.1b7bf0a6.js",
    "revision": "9b5c9b1aa536e1f87573fee4fe3f036e"
  },
  {
    "url": "assets/js/39.36091e3a.js",
    "revision": "8b01fdaa20630390961638139a579dba"
  },
  {
    "url": "assets/js/4.8ae0114a.js",
    "revision": "95e81bcfbc849915f31bb4d8ca94ac78"
  },
  {
    "url": "assets/js/40.0bd567bb.js",
    "revision": "9c01e8dc9e74dce355a573d472f35ae9"
  },
  {
    "url": "assets/js/41.d3220145.js",
    "revision": "714667654ba673cb3c1b26099b0fda46"
  },
  {
    "url": "assets/js/42.1b5951b2.js",
    "revision": "2c326cdad495d57f89a302270dcb17fb"
  },
  {
    "url": "assets/js/43.1d00d0fb.js",
    "revision": "63ab7e569e28473c3b6c0bf798e8b515"
  },
  {
    "url": "assets/js/44.98c2681c.js",
    "revision": "83b872b4f6ff32fff83953f64c47f232"
  },
  {
    "url": "assets/js/45.d592fbdc.js",
    "revision": "69aa761d9f2715978a0b0a1f34418d68"
  },
  {
    "url": "assets/js/46.51eb3558.js",
    "revision": "97c8dd67cf647bfd462b92c6096f7b63"
  },
  {
    "url": "assets/js/47.c58c0e53.js",
    "revision": "b08f7f8843a54f9b9da5465e853b0e9f"
  },
  {
    "url": "assets/js/48.eae7600d.js",
    "revision": "f0e46f858f0344506c87c955fccbc296"
  },
  {
    "url": "assets/js/49.bc461903.js",
    "revision": "ea417449633ea9e586ef129d5295acac"
  },
  {
    "url": "assets/js/5.f4cbf86b.js",
    "revision": "075b0c376297d560ebdff648aee87474"
  },
  {
    "url": "assets/js/50.663ef778.js",
    "revision": "121c6b9dab3aa13d96a5861f3fc75e70"
  },
  {
    "url": "assets/js/51.4664927b.js",
    "revision": "79fd4095b4528dfd391185a2628d1d62"
  },
  {
    "url": "assets/js/52.0a961909.js",
    "revision": "ec4664f0727fa25508bb2205150edead"
  },
  {
    "url": "assets/js/53.f8126425.js",
    "revision": "b7e7f5fa342e97b751f491168a1427e6"
  },
  {
    "url": "assets/js/54.21391662.js",
    "revision": "33b5cca926f4361a8a0068b6cc90bcbd"
  },
  {
    "url": "assets/js/55.96b6e897.js",
    "revision": "948b7c88895e31384370dce297a7bfc6"
  },
  {
    "url": "assets/js/56.64bca037.js",
    "revision": "5a605598189f69ca90df770e33ca640f"
  },
  {
    "url": "assets/js/57.05542d5a.js",
    "revision": "65333c4351f988d28cd74ffda97abd77"
  },
  {
    "url": "assets/js/58.73331914.js",
    "revision": "e81760019c0a6ecfe5c5fb434007a5f5"
  },
  {
    "url": "assets/js/59.bb05f998.js",
    "revision": "b327491ca40b5ccaaa9e8ce286d59cd0"
  },
  {
    "url": "assets/js/6.b0d77070.js",
    "revision": "205fa66b7a04e7e4058f67727c6e4f3f"
  },
  {
    "url": "assets/js/60.e00b04d6.js",
    "revision": "2ed035fd628ca90008c463e860568e1f"
  },
  {
    "url": "assets/js/61.8520f3bf.js",
    "revision": "bb391d9dd7e6b661140a7dbf4108a663"
  },
  {
    "url": "assets/js/62.51d9780d.js",
    "revision": "e051c790ac674edd4aad5c606c72ec72"
  },
  {
    "url": "assets/js/63.eba1d03f.js",
    "revision": "c6a7a18a7b59602bab04203d0464015d"
  },
  {
    "url": "assets/js/64.0c6fef81.js",
    "revision": "0f20eb4ed611e1edab87f66d9ec8ccdb"
  },
  {
    "url": "assets/js/65.4fcd9107.js",
    "revision": "bd8a0fe4eceddc96fc73fc94c5bc6160"
  },
  {
    "url": "assets/js/66.9a0e20d6.js",
    "revision": "3bd4afed386507e84150c392756235e3"
  },
  {
    "url": "assets/js/67.395825cd.js",
    "revision": "4e878138dd0ee84b8f6ef8779cbc62c9"
  },
  {
    "url": "assets/js/68.c03bfcfc.js",
    "revision": "b7b8dc7c5f6ed586d691812a9b422d45"
  },
  {
    "url": "assets/js/69.da2267ae.js",
    "revision": "2fe8224922bf90bc41e2e90bdf5c2274"
  },
  {
    "url": "assets/js/7.57f93c4b.js",
    "revision": "9db7fb0c656c9c9398dfaf70d2e435ea"
  },
  {
    "url": "assets/js/70.d91e1b93.js",
    "revision": "cebb7f0c3b4ec8de00bf03ec36b26795"
  },
  {
    "url": "assets/js/71.19677b04.js",
    "revision": "b72c62a5a456e229d324489af0e1cee7"
  },
  {
    "url": "assets/js/72.401e5885.js",
    "revision": "3e2b20beab8df569633434675a6f92e2"
  },
  {
    "url": "assets/js/73.0211a9ca.js",
    "revision": "b9364b1faa6e83a6e30e9d9892611d8d"
  },
  {
    "url": "assets/js/74.86f12f12.js",
    "revision": "25731ed7e520ae03a88196bef0192629"
  },
  {
    "url": "assets/js/75.80d62916.js",
    "revision": "c0b8afa2815788338347b447153b163b"
  },
  {
    "url": "assets/js/76.df9ed00d.js",
    "revision": "9cfece70a98dacffb20927f36ef7cd80"
  },
  {
    "url": "assets/js/77.9f56a594.js",
    "revision": "6bbb0269620540ee2e54d807f8cec2ee"
  },
  {
    "url": "assets/js/78.e168b2f6.js",
    "revision": "7d1cd505d8e369f03d89faded8b1f7c4"
  },
  {
    "url": "assets/js/79.d18077d5.js",
    "revision": "8e00387824260a094d1caf1cf87ca2cf"
  },
  {
    "url": "assets/js/8.ae173cf9.js",
    "revision": "766fc274dcc9bc7c61a3d0bdd1ad6427"
  },
  {
    "url": "assets/js/80.931db494.js",
    "revision": "5c78540057c0188bfc4025a12ab2da74"
  },
  {
    "url": "assets/js/81.1f9cc8d1.js",
    "revision": "1d5dd7e7d42a6e50c0715c4da5bf6cf8"
  },
  {
    "url": "assets/js/82.b1711667.js",
    "revision": "508cddcd6f1e9843475b8f438e52aaec"
  },
  {
    "url": "assets/js/83.7dd63861.js",
    "revision": "3e57fcb0d47cb85f5a9c68041248c2ca"
  },
  {
    "url": "assets/js/84.d1bc7b90.js",
    "revision": "406ccefd6c7c678872dd25a0bde1e688"
  },
  {
    "url": "assets/js/85.a83c673a.js",
    "revision": "5c99fd8475a333b73c80e1bfba08ab58"
  },
  {
    "url": "assets/js/86.55eb5c5a.js",
    "revision": "9e8b01f4ff7d463e072c6908a5fcb643"
  },
  {
    "url": "assets/js/87.495d05b8.js",
    "revision": "ae9bdf029bc47858963ffa6c238d1ed8"
  },
  {
    "url": "assets/js/88.670f0df6.js",
    "revision": "e6db5131d51d2cd722cd357264d00270"
  },
  {
    "url": "assets/js/89.0d7d7af3.js",
    "revision": "cf9e18e0de4431bf3620ef271256bd48"
  },
  {
    "url": "assets/js/9.b832aade.js",
    "revision": "c1ab8143de580d2b47ea33fa1b65aa2e"
  },
  {
    "url": "assets/js/90.7c1b8a3a.js",
    "revision": "65958e7c9c72f37a27a9caaa64ad61b8"
  },
  {
    "url": "assets/js/91.4909e9f9.js",
    "revision": "38909834ead041ac933c26ab1f4d9b47"
  },
  {
    "url": "assets/js/92.b47e56a4.js",
    "revision": "214869786217c71394fe00fa37f58afe"
  },
  {
    "url": "assets/js/93.adc83092.js",
    "revision": "7d0b871f9210d42261316965d2f56f22"
  },
  {
    "url": "assets/js/94.7a4af4b5.js",
    "revision": "e186c9ae4da93775b84746623f4aa50e"
  },
  {
    "url": "assets/js/95.5a2b1da4.js",
    "revision": "a0174e1acb019455856f94f7d873f500"
  },
  {
    "url": "assets/js/96.f3481f61.js",
    "revision": "44629d90f78e087e874b2dcd7fef3834"
  },
  {
    "url": "assets/js/97.ba4663b9.js",
    "revision": "07c727b619dab54bfc08b7ca689f1cc1"
  },
  {
    "url": "assets/js/98.d14c1935.js",
    "revision": "e54ad384257aa5d0b24aec94d6692e0f"
  },
  {
    "url": "assets/js/99.d0c92f3c.js",
    "revision": "49b25ceff37781bd0e08b3ed6831bd76"
  },
  {
    "url": "assets/js/app.0194f055.js",
    "revision": "993297f8cd7f8e4460c3e36dfa1f3e41"
  },
  {
    "url": "index.html",
    "revision": "cf8af443cbdd641ea320e6768a1d956b"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

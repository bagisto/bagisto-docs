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
    "revision": "c2d1eebe8e4814866cab42a18aff7f22"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "223b577a3bef0d5f9624eabb68eaad9f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "230c08069100d59a3f9abb5a82546f2d"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "b1bc6c722c3ce05587d24a6431fb13a9"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "1d1f36de3371446b8dbc8d263c83ed10"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "11c48a8b79912c0a99f0ffa7da451fbc"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "39afb74d5a5cdb078ddf670ef9299be9"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ed2cfcef3e2c7091fbbcb9c1c7142487"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "667797c7c5e896599484ffd46e64ecda"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "1892b5c46e69a8a6cf75f6dabb443bb9"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "f50686e9d8fc2fab262a0bd423d6b203"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "c306ef0d46cae7c248ea09bada97e4f6"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3a4f1bbcf1f840b1b108bea0e6746598"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "d1b150781857af1fce5abf28de6c841d"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "8130c4716d1855885642e32c5d7a6694"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "c8fe82103d0147290dd7cee3bdc5e006"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "b676bd4dd972d8c334c2053c9ff4ab9d"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "69fe006b780844626f9c35219e87a9fd"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "6891fc68bd1176ead55b8875a3f0af7a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "102b4e2e2c1b50339723098b2e7b8c9e"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "6884129c0208d759548b8acb554e8465"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "abc042efb171245dff865da85fbdd296"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "c275ba3eb7781f05edd9765084da7d8e"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "ddda6375cc4af834f8d8e0f76c9b48b1"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "686afb99e01d37675a15cc7a8efcc030"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "afae7556901aa2f9517e8591dfbc7875"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "f3f315fd57f1b4d1ba46e6f29ffdda4e"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "d90c242be648d999b5493a8087256c3e"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "ab770f00775744a67c98becb418f2a13"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "6fc2994486e51af8d7e0a9ea886345dc"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "6f69946b3385212d3b477d6b2fafed00"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "4ebe2b65fbe34423f7c4a6356f920b38"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "162cf02c560536479400b67b4a924a34"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "7c7c1939ea48c714d5d932feee0f0dc4"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "e5a1b7164023b331dc0e35b4dca21328"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "71855d638cd8b16f0c6637b73036a207"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "9fcc776dbf7a8adc0ffcf5be7436121f"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "271f5507a6b146fcea6fa0565f6a2066"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "82bcca3705069b9c5b8ad248fec7728e"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "5a7d1a813c6c6b453e4dc9d5db5548a4"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "466b543777a4289b4e71e5675e0e2cd7"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "61f01788301170a75a5e9c378458c661"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "513b47e8ec76ceafa869c18010b2f8e3"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "61d18bae6e63ceb2676dd94f8f0b3fd5"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "3787f096cae0d138e9236faf243f9aa0"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "ce28ebefd13911118096c0cd0b050678"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "4b31d55d898d08a38e431130bb3bf358"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "190dc324ea71c4a38da6d48438a78c4b"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "6ce46af61c054e5355fece9e305c026d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "020c0175d9e626bd8d925d006361a2cf"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "16410a2b1f1e0979f2e380d60df883bf"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "42062a3636a60f0fc8a4037a9b021f2f"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "25e4505cc7f12dedfacd6634eed362db"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "328fd41a035f2a52c5fc49b68ece32c2"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "d4399f89c1f3b3af70cea7bfa0c29ae7"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "8e2211777daede61626dca952b9cc59e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "823add3872b3ddda932038ee7bcaf219"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "80076cad7f5d5ffd74dd1ffed9ca6b52"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "b708bf9ef3aea94ba56180f4eed7ab8c"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a6a4600ffcc67a317cce744482480620"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "eb7c56e3480a7b3d904a3a3a011c45f5"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "4047684f358ab9f1135a50752e57ed79"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "92fc5fa750d9c97638d7329e41fafca6"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "721b918d0ac573d971a678bae50f561b"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "bd404f49dcae04bff002bd6c257d51ff"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "d9b02acac39341a23e5045cbed6df57c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "34846d8c2a6b4b0f3fad18155b0124a9"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8f29603b1c0cdb2d59c22e15248532fe"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "c38297825c5be22076b67e002cc7d587"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8851bb5cb1c4f6714ae41382021c67fd"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a695de2e1eb037211ddb3e924d9d7584"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "fe82ad85ada8a34e79d699571c43f8f5"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "4892c963b084ca9d0686c98acd80672a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "3472b7770c93ad4160aea9d92979ef71"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "f26a4f6296950955d7c8c52a40b85d21"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "23683b4610496dc382a15cda40106d4d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "56c6d25259e7addfb6999aaa15460e07"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "1360463e65361c9d67fa9687af2b4bd9"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a25aab96c89f7a38a13590cda914b077"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "6e577b3a3f48f562717407c9c9a01200"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "4a3b73444ebe2d2099104f6fb2dd4df6"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "61b078a92a724f1413d0f176eabe92a8"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "60dc544f0ef5890111fac0f9c0948ebc"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "04fc921d64b85a213f9bc866eccd594e"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "1365a161cd146f14d8e37f3fe3e2fb40"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5a8b60761c1507ff265e56adda59eede"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "85510d583a06bd39c9bdb9453a3994ef"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "1a988622cd7ea69a8d905bfb65f82bf7"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "3ec15e46cbb5fc86305b3b8def3bec8f"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "86eab79e0d795be775553665c6c18685"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "e012e7248c261295465c64f240d47b49"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "719069e8576a26f6528ca87e005ce71f"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "c75eedbabd5c605811a1713a38f35fb8"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "51f828fc485bc019cefea2ff4850556b"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b60ac38ae9ab2892e5f40030efdd6f5a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "e835aad6f389622990323c96a2ce59c1"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "ddff57b78b191ff7ecbabe96548306c2"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "cda5b8c3b5bdb4de8c67c79d2b640a1c"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "adf7f7358621ca52d2e182d97c8ba973"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "1225ed11cb17b3dccb59dd033487187e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "9a990daa1df68c472a3a2f14ad0ec5c8"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "11d112aa11241c4435359cecd8e7f3c1"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "713873246c9facdaf5b2e3e05de85a91"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "d9879fdf66186c57124cb75e9cdec6d3"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "aa571f8569f29b8533f6bf57a9bf2c07"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "a3194bdf1f5c6d9fb9aca67b8d710e00"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8387df418beef3f3a0dec34d29cf7971"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "3e736bd4175321c150f4ad83810f5d12"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "48bd047ed94cc4ad8e9e82017f16ba49"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "c6e7916a1f85b91b433d7e57837cb3b0"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "6a6db4efd7e97bcf332282f8ead462f0"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "88a0693d680e26785ae3cb63b76f944d"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "a048ec86da2293cd63b67a440c3fdab0"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "9eee0e7b33a88968960d9959add8fd70"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "aeeea42abd2c6b8ba823056a6d64474f"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "74c9ba7dc93a897f7f826dcfc0c356cd"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "0a415f06f127e34cb20a21a0345a6bda"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "cb564dc80cd59321f1f9d2773083bb94"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "20913e17114d1688f43bc089c65a4105"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "42f06410dfc3b7bf2d121db707289bbf"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "b1bb3ea7ea91e230f201e1b3ee468d62"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "e43d26137bc7acf19d26c37d6bf65714"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "1c4009a80a933f24dde8370aa6d42f9d"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "eecd29c80fa767bf466eea0a2af6d0a4"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "59b89c279f880939d4a7c5f7ca48da58"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "5f6af672b0b78d28e5c41dfbcd364d80"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "062d905ebe11a48354f1d5d39a3a3ce8"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d0e5ee176eadef72240354e6b1b8e6d8"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "798b17af9df818a1269156f1403e4f0b"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "c79e4b2e87e72fce693bfd21f3cb26f6"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "83fbba2d2629bf16f893a4952fb81d10"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "dda74932af836e7499d1dd46aea00697"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "3e4060d8c4d10f1001a4c89f3cbd84a4"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "76a43b895791339a04b1d591f47d359e"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "50262839d7981be471731196a7f34321"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "07902f807e669aab0b78609dcc09aad0"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "09cc7bdd75ce3d86172b1e447c116619"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "81a94fafb37a0a36c58f973ce38a5f26"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "126f364e706e1f492219f92a0784cfd5"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "fceab6e6f5f5516841c4029478b64838"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "accedda42d29dcddc6a6f1ce0df6f00e"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "2d90cd80ae42eab1027a7a2fc789a3a5"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "c0ba1258fa53fec176ed476d603023cf"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "9f903323d812ea92c8103af5a6f189bb"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "bdf07516c5288d94235f422f5760a270"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "90f0a3b92b90538abe0c969186d81f88"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "48cbfdba8d5fa77d0fe532c170f16a39"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "173be7b4b95fc17c1a37baf2da5a4331"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "ea1fbd9ab9783fe21619ad10f8585e51"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "1a05029f31519e46e532d43a9139b27b"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "500f293aba7b9a624f6c552c1c4df27f"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "3aed1644f4708c04fbd0e115063c607c"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "a07226bc101a1c6183e918473d476c3a"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "7490e054550b7bfd46ad02d62e8584aa"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "eb837e0b624bc49655362e94ffbcdf16"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f9531c8e213c0c8fd4b849c579b31ee5"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "6ee6b35c7eb19d4d26915c41250ddec4"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "cea0ef0c7552fdc8b910dd6846ceb2f5"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "01810974ad9342789b0e639abd0669b7"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "0fa2b19d0b2f2400188bae3489bdac3e"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "bcb48aab7bcccc8bd2a675280bfa7cfe"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "b0659406e4e1f86e0a75bfc5301901b1"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "12c1b1b04bb2d1422c776e5d19fa32c3"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e292de49b72f9f97d6b140a9e6cb9c94"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "34f6f86358cba0cf4cf5a6e1b6a2bbae"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "56e07deddd498f8c3c5c55d3ab68f526"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "09326567b919e6e7c3b6be0cbe58c07a"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "ad76f7a9175d9ac99a9b1498155437d4"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "4ca6fdf608f91ec0fe37c949829e3461"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "39bf8d5332b143084a59f5d3ba1ad6c1"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "db7388225e9e837a61e923d48a292e70"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "8a3bee91371a70bb5752a45461bf9bc7"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "7b67f8de6a505f58208e95624d4f75a0"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "ac45f996c8fb8a14d2549a7a30cafbeb"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "703d28f74771170dfc62d53d14546322"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "f2c960e6f6a5f60e90a1b021c53cca0e"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "55997ae57a80e7f63765bd942ff2be6b"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "4a31f75e54357402ffc06a7ec34c5e7c"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "881b6df4f25ae630dd6fef508aed93f9"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "846ad7341865b46c686456e8aba17cb0"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "0d3c610ec1d55ba19bcdf882877e00a1"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "4fec04086ddfd570b2a6a53593411167"
  },
  {
    "url": "404.html",
    "revision": "f70e5b80e161a2e38f2c50368b87cff7"
  },
  {
    "url": "assets/css/0.styles.3c367bfe.css",
    "revision": "3a1ebc21b86291251328834c0d5063c2"
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
    "url": "assets/js/10.b32e5ec9.js",
    "revision": "38ce60db99f655c4f0e5a88d114783bf"
  },
  {
    "url": "assets/js/100.a44c1c9e.js",
    "revision": "f8e771267baca7a383793d285f1da667"
  },
  {
    "url": "assets/js/101.b019a552.js",
    "revision": "9afdd94e5c8ff7937195e4b5eca4bfce"
  },
  {
    "url": "assets/js/102.70e2c7af.js",
    "revision": "b409d2b1535349878f47870c0ddb0ea8"
  },
  {
    "url": "assets/js/103.e7404bf8.js",
    "revision": "bfc7a07ab0b73437435e3488c273fb8f"
  },
  {
    "url": "assets/js/104.a216dc4e.js",
    "revision": "14607024f240d9b0f220395f142636e7"
  },
  {
    "url": "assets/js/105.0a085bc0.js",
    "revision": "bb8894a4a1951316636fd1fe77a5698e"
  },
  {
    "url": "assets/js/106.07c142cf.js",
    "revision": "8799e0c2095373d170edbe7ca45e9e81"
  },
  {
    "url": "assets/js/107.1f70b9c7.js",
    "revision": "20bf5a9162db3d0aadfb6d6d0b22452f"
  },
  {
    "url": "assets/js/108.6aafb3d7.js",
    "revision": "65d6135155c419e5df07cb62ac9c9e37"
  },
  {
    "url": "assets/js/109.db73fb7c.js",
    "revision": "3bfd1c4c0a92864540810304cab2312d"
  },
  {
    "url": "assets/js/11.74e014db.js",
    "revision": "21b1aa27daec398a7cfe1dc804b60572"
  },
  {
    "url": "assets/js/110.befd8c63.js",
    "revision": "742ba69823dac7c236b424002a8467fb"
  },
  {
    "url": "assets/js/111.52cd1d00.js",
    "revision": "28dacfbdad001fd8043400ca316696a3"
  },
  {
    "url": "assets/js/112.cfb99d0a.js",
    "revision": "f4de5a3daa9b8ea0dec854c80022b157"
  },
  {
    "url": "assets/js/113.53a9e427.js",
    "revision": "62cc459ee9c720b8e1ec42d7bf6d0c6b"
  },
  {
    "url": "assets/js/114.8f2ac39f.js",
    "revision": "d0c1574cb1b12c2cf217fa2909584827"
  },
  {
    "url": "assets/js/115.9cb4d2ef.js",
    "revision": "0ff4e23de805533675c54dc70a3ccb42"
  },
  {
    "url": "assets/js/116.2b8679ca.js",
    "revision": "9d1e089d06b89dbc5eb97692bef18a96"
  },
  {
    "url": "assets/js/117.69c4f4b4.js",
    "revision": "e72137e60dca6f098dede3eb8e07c258"
  },
  {
    "url": "assets/js/118.8dfb113f.js",
    "revision": "23bf33a81ef66c3fabb3464278752f2e"
  },
  {
    "url": "assets/js/119.767c90a9.js",
    "revision": "e5e16634d6df5cf0b02594b5cb8ec4b3"
  },
  {
    "url": "assets/js/12.48d66047.js",
    "revision": "da782fc3c5d813f910aec60af974ff1f"
  },
  {
    "url": "assets/js/120.871d1d83.js",
    "revision": "2551249018210649a6002e7bc4467a74"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.ef50c9bb.js",
    "revision": "d96c455d7552b614d1153d5a45cab8ae"
  },
  {
    "url": "assets/js/123.159be8de.js",
    "revision": "3732e5517bd1010e0ee563a91b8d8448"
  },
  {
    "url": "assets/js/124.d639f86f.js",
    "revision": "6bbacf5d3deafbdafabd6183d98fc0dd"
  },
  {
    "url": "assets/js/125.dedf3340.js",
    "revision": "9c6458a8de2e5aaad79e8a4ded0a6c3a"
  },
  {
    "url": "assets/js/126.23bb501e.js",
    "revision": "d5be1a88cedab83187fbbf60f848d72a"
  },
  {
    "url": "assets/js/127.92e532c6.js",
    "revision": "4a090025f5fef22eb300dd9294ce8e21"
  },
  {
    "url": "assets/js/128.a89c6824.js",
    "revision": "febf1f3341a38f3b7b00a4e4361a39f8"
  },
  {
    "url": "assets/js/129.e7333e5e.js",
    "revision": "8f894a61da198e610a5582729788a221"
  },
  {
    "url": "assets/js/13.e2d65956.js",
    "revision": "818376197472471477eb8ef4a5c7a1fa"
  },
  {
    "url": "assets/js/130.4102a012.js",
    "revision": "c87928ef0205732769653480bf2a2c09"
  },
  {
    "url": "assets/js/131.c6cf68eb.js",
    "revision": "0ac4053bbe1cf24db2ae710a46deddd5"
  },
  {
    "url": "assets/js/132.5294f802.js",
    "revision": "0e577383864b7f515c45b2d78e981ee0"
  },
  {
    "url": "assets/js/133.ac6e6ef0.js",
    "revision": "f987cdc5ea3962772dad9e7bc2f47eb4"
  },
  {
    "url": "assets/js/134.88c8e148.js",
    "revision": "7e7e26b9d70745c169c6a19f3f886ec0"
  },
  {
    "url": "assets/js/135.822ca34a.js",
    "revision": "ea32c758419f3fc4073424cbd605e4eb"
  },
  {
    "url": "assets/js/136.477ffdc8.js",
    "revision": "9ab3dfbde407fa3fcc919442c2363d74"
  },
  {
    "url": "assets/js/137.9eaca89c.js",
    "revision": "1affa9297237f615e21bf8c396c15f4b"
  },
  {
    "url": "assets/js/138.b5ea8543.js",
    "revision": "1e44b10fed52d81212973ad608ebb93a"
  },
  {
    "url": "assets/js/139.0eba23f1.js",
    "revision": "afa90d6a5c2c02131d377083795c8279"
  },
  {
    "url": "assets/js/14.c046b265.js",
    "revision": "d0ff3937126a1f784f3a41a05b8967b9"
  },
  {
    "url": "assets/js/140.41761276.js",
    "revision": "9ecb4512fdcd71fe0f262fe03ffefb2b"
  },
  {
    "url": "assets/js/141.c07cf8e6.js",
    "revision": "71cfa2ca2e38c25ae5e9c02e02e33875"
  },
  {
    "url": "assets/js/142.ac71760d.js",
    "revision": "ae42901c00b6f3d33c01b87934edfc5a"
  },
  {
    "url": "assets/js/143.5843ae1b.js",
    "revision": "619641dc05a927ffbd9e8650f7917423"
  },
  {
    "url": "assets/js/144.f91a79d9.js",
    "revision": "a678c19ff41815cbdbab1a5b80d14e66"
  },
  {
    "url": "assets/js/145.f410a057.js",
    "revision": "39e74a6ef607c16ba80d10776b16c72a"
  },
  {
    "url": "assets/js/146.3aa6c615.js",
    "revision": "8cdfe17a0328686a310d7685729d30cb"
  },
  {
    "url": "assets/js/147.ffe29692.js",
    "revision": "40e8047071b08359f7c80f3343ecd41e"
  },
  {
    "url": "assets/js/148.2892d8c3.js",
    "revision": "d34794f942363837e4a124d81b24825d"
  },
  {
    "url": "assets/js/149.f8132532.js",
    "revision": "426bc22ed31b1f1dca1bd7584427cf90"
  },
  {
    "url": "assets/js/15.e857db80.js",
    "revision": "ea2e240d1c10243d2952dc258f2afa0f"
  },
  {
    "url": "assets/js/150.cd8fcf55.js",
    "revision": "a4022b69327254e2beffbd38d4b70ec6"
  },
  {
    "url": "assets/js/151.ae7688af.js",
    "revision": "0c83506027d2a15d14b2ba71c5610e0a"
  },
  {
    "url": "assets/js/152.da51ac44.js",
    "revision": "61c6bbb41093e996b0ec88df65259d9e"
  },
  {
    "url": "assets/js/153.c85aaa61.js",
    "revision": "d43acb25582170a5ca2097ae4ae1cabd"
  },
  {
    "url": "assets/js/154.d5afc9ea.js",
    "revision": "aa158b39d4b12b94613adbb6b9d74284"
  },
  {
    "url": "assets/js/155.b25a638c.js",
    "revision": "d4ff23ca484d38ca12b1c69bbbd80eb6"
  },
  {
    "url": "assets/js/156.2e67b49e.js",
    "revision": "91db2a9cae6871c97b510d4aed4e6823"
  },
  {
    "url": "assets/js/157.f1bd9ee6.js",
    "revision": "1bf717ed3ad93f9c1531dcbaa12cb5af"
  },
  {
    "url": "assets/js/158.daad4c7f.js",
    "revision": "afad5789088c0b622020f3d33006bde0"
  },
  {
    "url": "assets/js/159.037f8709.js",
    "revision": "3a115d9dc034e9dd06177a4c7532334e"
  },
  {
    "url": "assets/js/16.5c0be8ec.js",
    "revision": "1b540d943fb2d3743c0cd26da3b8516c"
  },
  {
    "url": "assets/js/160.b047fb52.js",
    "revision": "7e5c35a18f25f5bb0dbdb3ff7d62f9c2"
  },
  {
    "url": "assets/js/161.e7b563eb.js",
    "revision": "f8b69e5f28aae053ffbf9e1003f627d2"
  },
  {
    "url": "assets/js/162.a0a9f5c7.js",
    "revision": "65a80fd48fbe0819881dee7c3c702ed4"
  },
  {
    "url": "assets/js/163.e58ddc07.js",
    "revision": "b1abaa0cb1d5f3439f1f84181fe5b797"
  },
  {
    "url": "assets/js/164.e8c008a0.js",
    "revision": "5df505ddcdf078fcb8efc8c807e9af9f"
  },
  {
    "url": "assets/js/165.a1d46f32.js",
    "revision": "4367c7a44ea24211bd07f3fbc8589447"
  },
  {
    "url": "assets/js/166.4f36cb99.js",
    "revision": "f794cbe3160cc4b8a2537c067460fadc"
  },
  {
    "url": "assets/js/167.a0a81318.js",
    "revision": "c4461208081b74e616cc6674345a7133"
  },
  {
    "url": "assets/js/168.f4bc72b7.js",
    "revision": "3ce6992351638043732599e442bd0225"
  },
  {
    "url": "assets/js/169.650b0c10.js",
    "revision": "ff906c377076d58aa5317304e813f284"
  },
  {
    "url": "assets/js/17.dfa10068.js",
    "revision": "23e2cbe065258a9008488f79458fce7d"
  },
  {
    "url": "assets/js/170.d50e7bc2.js",
    "revision": "c4caac825bd9b726ef18146d189fe8fa"
  },
  {
    "url": "assets/js/171.904a128f.js",
    "revision": "fb01d682acb9244f89d7b68fccf1f89d"
  },
  {
    "url": "assets/js/172.f0c5b274.js",
    "revision": "64a7421910759bfc855e01d2d017568e"
  },
  {
    "url": "assets/js/173.1f4ac6bb.js",
    "revision": "3aeb9e397dab08ec1f98a79851ec48c9"
  },
  {
    "url": "assets/js/174.5347a142.js",
    "revision": "9f4902a1a5ecc1aff6e5305fb2d497bd"
  },
  {
    "url": "assets/js/175.529250fd.js",
    "revision": "87788537c70f72ad3922e7027843860e"
  },
  {
    "url": "assets/js/176.9974f2ac.js",
    "revision": "a5bbcecfb4ef47685e030e8197996083"
  },
  {
    "url": "assets/js/177.f77c969a.js",
    "revision": "cdf71935b5cb5309b3b46fa580eb8ff3"
  },
  {
    "url": "assets/js/178.c80f5ef6.js",
    "revision": "eea0db62f912d58dd2d7a7d25e460f0c"
  },
  {
    "url": "assets/js/179.01922563.js",
    "revision": "8625a4d7ac7b775fa86f59845524745a"
  },
  {
    "url": "assets/js/18.1f136b1c.js",
    "revision": "426be27d9b9860322da7d9ee463a6cc2"
  },
  {
    "url": "assets/js/180.1bc92b56.js",
    "revision": "e515e4101efeb82034df5a8bfd2a7553"
  },
  {
    "url": "assets/js/181.6ba43c32.js",
    "revision": "beaec6a59219e232beb932f5ab9930c0"
  },
  {
    "url": "assets/js/182.fe927302.js",
    "revision": "98ec67b4e69b58cdb3b2e15dacc71cb6"
  },
  {
    "url": "assets/js/183.14e2ea9e.js",
    "revision": "63c05e2cb9ac8036a32d04c8d52694f0"
  },
  {
    "url": "assets/js/184.c47bb00a.js",
    "revision": "aad7353a001d54defb88d006a8a88a6f"
  },
  {
    "url": "assets/js/185.6604d0e4.js",
    "revision": "26d08b38d17080ed77a2b19bb05090d1"
  },
  {
    "url": "assets/js/186.ffaa50fb.js",
    "revision": "ee926182d1261af3aeb4e0a608fc3b72"
  },
  {
    "url": "assets/js/187.fdb2abb0.js",
    "revision": "f23b6f0a68e849b2a43693975f1003e0"
  },
  {
    "url": "assets/js/188.bbc8175d.js",
    "revision": "f014c784eaf60f30efc2e65979427ce4"
  },
  {
    "url": "assets/js/19.a448ec1c.js",
    "revision": "9016d923a2f1c47ac25af6cffcc5bb7a"
  },
  {
    "url": "assets/js/2.0f0bea8e.js",
    "revision": "fd08ab50995a6aaccb93bf495275c2b0"
  },
  {
    "url": "assets/js/20.3a760c28.js",
    "revision": "617f1d64c54327ec2ff33c78b89eb664"
  },
  {
    "url": "assets/js/21.ca7c24e1.js",
    "revision": "ae6db68da485475125a14905d645d932"
  },
  {
    "url": "assets/js/22.71593b75.js",
    "revision": "3d446e1127fe3dc464b528b9b08fdbe6"
  },
  {
    "url": "assets/js/23.c73a584b.js",
    "revision": "a2633ddd615ea6944e93647332a6b2f9"
  },
  {
    "url": "assets/js/24.1f98e74c.js",
    "revision": "8a1edaafc1b9caf70de29cf1e18d1033"
  },
  {
    "url": "assets/js/25.3aab45f1.js",
    "revision": "df9969e23ba06087757a2f48b51badad"
  },
  {
    "url": "assets/js/26.c38a1e2c.js",
    "revision": "23ef24c28db4d9830a79f353c8b18837"
  },
  {
    "url": "assets/js/27.f9022922.js",
    "revision": "de38c858891b7b733a3f895f71e4fa08"
  },
  {
    "url": "assets/js/28.c1e1cee3.js",
    "revision": "2506f76d78472e54175acdb4c6131571"
  },
  {
    "url": "assets/js/29.c498fdbd.js",
    "revision": "343931a24cf01582f178f609478df223"
  },
  {
    "url": "assets/js/3.cdfd214b.js",
    "revision": "6c4ac43eeb196ba991b5916e8389b451"
  },
  {
    "url": "assets/js/30.df65d88a.js",
    "revision": "a2812a86302bfa8dc52d5aa98b5c9372"
  },
  {
    "url": "assets/js/31.1ac7b760.js",
    "revision": "b35daf1719baf2feac763b997f204374"
  },
  {
    "url": "assets/js/32.3460574f.js",
    "revision": "acb71dc66baa77f84bd8e50bec5520ec"
  },
  {
    "url": "assets/js/33.54e79561.js",
    "revision": "07538c6f5617d95dc48a69d875f6ce8d"
  },
  {
    "url": "assets/js/34.a89b92f9.js",
    "revision": "4337e48a9eee0a395a5a63d2c8faaba1"
  },
  {
    "url": "assets/js/35.b9af76b8.js",
    "revision": "3215cbda57b6bea0f449559a8f0a835b"
  },
  {
    "url": "assets/js/36.6ea1f3b1.js",
    "revision": "0df25d0dbf04da15e077e84608e9fa45"
  },
  {
    "url": "assets/js/37.fb33cc7a.js",
    "revision": "f3063b67357505ea14d373cc4bf8a66d"
  },
  {
    "url": "assets/js/38.58e1c360.js",
    "revision": "d646b56f2afaac1147434bf0983dc7f9"
  },
  {
    "url": "assets/js/39.9d124fa2.js",
    "revision": "b64eebdd84b7603c12890bee07c05093"
  },
  {
    "url": "assets/js/4.24d64937.js",
    "revision": "ded97f471939c958ca3ba46758f4b298"
  },
  {
    "url": "assets/js/40.9221c9e7.js",
    "revision": "01c90539091b71946b906873a7182843"
  },
  {
    "url": "assets/js/41.2a2bcf63.js",
    "revision": "762d5bf833d003b375c6fd99fda27054"
  },
  {
    "url": "assets/js/42.09864af6.js",
    "revision": "d98bf2affde52e71f7bbe0b43ed6e9a8"
  },
  {
    "url": "assets/js/43.12cb5053.js",
    "revision": "4502b53159c016e3a5e3429896765696"
  },
  {
    "url": "assets/js/44.a90be45e.js",
    "revision": "4d7c9c7fc5049091e1f850c3abda157e"
  },
  {
    "url": "assets/js/45.a5213829.js",
    "revision": "67367997cf87255a61c95acc01ee15d2"
  },
  {
    "url": "assets/js/46.3ab955f1.js",
    "revision": "a9726c9bf3ac127c9e8767958ea4afb7"
  },
  {
    "url": "assets/js/47.fa1c7363.js",
    "revision": "b70921bd94e9bbac88fc91bf8b8401c3"
  },
  {
    "url": "assets/js/48.a8849bca.js",
    "revision": "acc0a592916c5593b15531501975590f"
  },
  {
    "url": "assets/js/49.29d47d40.js",
    "revision": "5b6f251ab4b271b1b0e16642b7efa148"
  },
  {
    "url": "assets/js/5.9c77cbe0.js",
    "revision": "37b86e6ffc379e1e9007423eb2dabdc6"
  },
  {
    "url": "assets/js/50.0ab2d331.js",
    "revision": "a2ee164d36f4bc96c5fb3933c382d475"
  },
  {
    "url": "assets/js/51.ff76aed3.js",
    "revision": "67657181b1aeada49a5eff97e19d6857"
  },
  {
    "url": "assets/js/52.76c298f7.js",
    "revision": "b3d880c1a6ea1356ee75d1c5090d247f"
  },
  {
    "url": "assets/js/53.a5c41b9e.js",
    "revision": "cb1b86cecf118a3ed638ab6d60cc8a1f"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
  },
  {
    "url": "assets/js/55.c60a980a.js",
    "revision": "19063956f9f77b7975cfa437a085e481"
  },
  {
    "url": "assets/js/56.fb1df89f.js",
    "revision": "07f992a609c32b95e4eb1decdd6e013d"
  },
  {
    "url": "assets/js/57.1c095848.js",
    "revision": "12eea5dea1b17a975e4404bb91f0d24d"
  },
  {
    "url": "assets/js/58.a3049512.js",
    "revision": "4995646127e5d143bf62d5bd26ad7d50"
  },
  {
    "url": "assets/js/59.02f4ba36.js",
    "revision": "8cda3dc20429eca5aca52362f39fb0b1"
  },
  {
    "url": "assets/js/6.7785ba45.js",
    "revision": "ec126c70f76de5f38a85ef622a33fbad"
  },
  {
    "url": "assets/js/60.d153507e.js",
    "revision": "37cebde4958a5d9f0c0ec900df29d153"
  },
  {
    "url": "assets/js/61.55c62e15.js",
    "revision": "b06151d1d39c482f3e03d82af9628431"
  },
  {
    "url": "assets/js/62.4878b1b4.js",
    "revision": "8bdbc3bc4d1d14343c5b7c29adfbfc8e"
  },
  {
    "url": "assets/js/63.99cbcf99.js",
    "revision": "fdce9cf87d5c20fcd69882c0335d0d8c"
  },
  {
    "url": "assets/js/64.34339715.js",
    "revision": "38cd698d3564e6d2c1d4e83a9239ad61"
  },
  {
    "url": "assets/js/65.74803268.js",
    "revision": "fd60b4f3b47d400e672b8edeb599e5ce"
  },
  {
    "url": "assets/js/66.72c63692.js",
    "revision": "c134348ff922b102a87e942daf89d2b3"
  },
  {
    "url": "assets/js/67.0848951a.js",
    "revision": "8aedb64e115616e7a6c20428b7044532"
  },
  {
    "url": "assets/js/68.dbd5a167.js",
    "revision": "2f82c54021c367c917974937ea908d36"
  },
  {
    "url": "assets/js/69.0f18e61b.js",
    "revision": "4ab904b58ccfd6f2ec2e0a658d36ccf1"
  },
  {
    "url": "assets/js/7.52ec965f.js",
    "revision": "14a98af739a509ea8a643bb5eff04585"
  },
  {
    "url": "assets/js/70.c79dfc8b.js",
    "revision": "6582b0275c1cc33c4f3e8b9880da9bdb"
  },
  {
    "url": "assets/js/71.0bebded4.js",
    "revision": "54394d35a7fc79c61c5c44b337d3d87d"
  },
  {
    "url": "assets/js/72.da5b925d.js",
    "revision": "f8597e992d4705561411d53c4784edbc"
  },
  {
    "url": "assets/js/73.227ff668.js",
    "revision": "a9e72fc8252262fde63d0cee9bc76fee"
  },
  {
    "url": "assets/js/74.c46b9418.js",
    "revision": "0730b08a093758804515fc5cfc37a1b9"
  },
  {
    "url": "assets/js/75.b361803e.js",
    "revision": "4c546b953e875215bad61940820e9d72"
  },
  {
    "url": "assets/js/76.1a08f8b2.js",
    "revision": "ada7904d0b95d02360847873d735b07a"
  },
  {
    "url": "assets/js/77.55629553.js",
    "revision": "9a07c86c6746385d26378b7b2a402778"
  },
  {
    "url": "assets/js/78.07bce5f1.js",
    "revision": "045c263de150bc5ab73bd9862e995593"
  },
  {
    "url": "assets/js/79.feba0fdc.js",
    "revision": "09ce11ed114492335e74cb15af4a815d"
  },
  {
    "url": "assets/js/8.d6b4d976.js",
    "revision": "97722a30b6b07f1aab6fcde28fded114"
  },
  {
    "url": "assets/js/80.044fcba7.js",
    "revision": "850a8fc8b13e03fd5608386696c3a0b2"
  },
  {
    "url": "assets/js/81.63ba1b79.js",
    "revision": "6ffb990709f5c434610b1d2dec108a16"
  },
  {
    "url": "assets/js/82.1563bd0d.js",
    "revision": "b7ab7a15203fc69c19ef9f10a1ff28b3"
  },
  {
    "url": "assets/js/83.f283b59f.js",
    "revision": "f2f6ef0baa23eccd9584d7977df42772"
  },
  {
    "url": "assets/js/84.dc4bff5b.js",
    "revision": "3c65bb856b520df45ce91acca044f949"
  },
  {
    "url": "assets/js/85.10ef0be0.js",
    "revision": "a4afc53a564dd39fb80667d82ce65078"
  },
  {
    "url": "assets/js/86.9502716d.js",
    "revision": "64eb51450b355c19a345e6b489111a45"
  },
  {
    "url": "assets/js/87.cb7019a1.js",
    "revision": "72452f8fd876eeed067b26b62e73e118"
  },
  {
    "url": "assets/js/88.0784aebb.js",
    "revision": "69cd69c14cfff2eea38b073697be96ff"
  },
  {
    "url": "assets/js/89.f472d76f.js",
    "revision": "bde59c11dcb6b27aae9b3abf692519e9"
  },
  {
    "url": "assets/js/9.f1137371.js",
    "revision": "4e69556fd6942360b68a07646c88badc"
  },
  {
    "url": "assets/js/90.4ad6827a.js",
    "revision": "3343ee2b0f4bde894580d9bf0a9d8c2e"
  },
  {
    "url": "assets/js/91.0802d655.js",
    "revision": "f3902dbf03d38bff967876e1442aec47"
  },
  {
    "url": "assets/js/92.9bc227a8.js",
    "revision": "7375e019cdb780d474ac5be29d0e7a2c"
  },
  {
    "url": "assets/js/93.52253ed2.js",
    "revision": "ad606a349923c3dd92bcfcf7923e2a18"
  },
  {
    "url": "assets/js/94.b38a4933.js",
    "revision": "6186c433cbb927c805fbc80a830055db"
  },
  {
    "url": "assets/js/95.6f0e5117.js",
    "revision": "1a4a873eac9fc932279d4bb0cec266c3"
  },
  {
    "url": "assets/js/96.0a534bcb.js",
    "revision": "2926a4183a848721a3f586034893d90c"
  },
  {
    "url": "assets/js/97.1ed8d73d.js",
    "revision": "147107bd941f0d676824112328f8d6e8"
  },
  {
    "url": "assets/js/98.958af27a.js",
    "revision": "9878a73f7ff01eb03188e0a51b0ed3de"
  },
  {
    "url": "assets/js/99.1c923e50.js",
    "revision": "7bae88802b86d9d26c4a39d36a0c8acc"
  },
  {
    "url": "assets/js/app.cf2d4fe4.js",
    "revision": "90faed90d3de3bd42b059cd21210c3d8"
  },
  {
    "url": "index.html",
    "revision": "e8369ab183980741e1487b5bc879e56f"
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

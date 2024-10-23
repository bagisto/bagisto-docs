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
    "revision": "51d54016aa6b3085a6111e79581b3c4d"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "99d9dbb6c4752ae1a33c4734b0d4811f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "0ab85701836cc4c72f7d8b38cb9de24a"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "22b8bd45818427aeab7043167d0e8588"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "805f2e38697680acba4d36b32fc1f5e7"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "0438405a97aeb6f1a2eb590f7148f03a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "02e2b9ccc51d946ca1cdd095eacb3425"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "772c509ff9baeea8ec7997a0c0621327"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "2ffd91b54f86b2f0d1ffb5a8a38956e1"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "d3ada6c1d53abff42cde729a8d4c6de4"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "4ca45187bec5c87e188c4ee7230b17b8"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "dbd569df96bc6fc67101d41528396772"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3f257dd81f17d1dc3b279ceb729a9bb7"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "ab357d20444b78b2b6c513a1439987f1"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "a1db81b3e098386ea1ed65dbacf7a8d8"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "6519f3517d4237bd28176a5bc69ae061"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "5018f9224b0a7fe477cdb770fdf94573"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "e92a54d474c68af46daac69ba633790c"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "bd67330af5ca6f885f9311be970a711c"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "225e4a1d7700ba7e927d762c503eae29"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "eb050551cff73d0f1109d5835196347b"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "e7392f605c5489f1d3bfef34b50dc8c4"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "52fad62ee1c5cd64cee75ccd7752aa23"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "75deb100fd7acf303db107e875cd97d4"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "3f0201ea4f4ba55d9c03e1c4b4ce71ce"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "7b58affcfccfce2a611eefb325a7d8d2"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "ca1ea37987a3494ba01f1fbbb804e834"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "6eb4222417bb7e876c75cc5bff089b86"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "e25eeb9bbb73f9553a74161e246c3bbf"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "d4dd1525c408a869cf012710c9335f07"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "a42972e2e14ab25e74e691e409e1948a"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "0e20681fb66ea0a37fec9aaccbca1b7a"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "7d6316c34137a55c0bc0439553acbe37"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "0958c5b503f6d74795acece24a618b29"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "a5117b43f24372685299334a6eb1f9b7"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "1e9503d57f1cfade1385552e61fd152f"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "12f3c5d2ae5acae03e2e877301c11eed"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "98bb0b70656990c41d66efb93dac5378"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "476618f9690a1932c19b8201e9364dcb"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "48abbe3999b692caca997a86d738ea6f"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "9cf28d917d40f41d9c0406af2194b79a"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "6dbdffdbee9b3e85517cd673811e9b8e"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "11d8852bc935c1fc1c2666e2565b79c5"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "9392b48c70224e355cfea2798c220c5b"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "fd111ab4a91e2e2c96f3476675d7158b"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "d856ca5a370657beed13d5238640ce4d"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "c73e3653a085bd0f4d9cab757ce2a784"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "7419c1a3a28a4bfd01f2ea65973294a3"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "cd12bfb64ea5d38f72c7f88f7d3f4964"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "54c9f203e566b5bc92477631b9382ab0"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "5bdb504608203bd1255b713d4ca04ec3"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "a2c92a77bd554077e17a69bd6467227c"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "97c86e4937192c22c2994a2b47588380"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "32916831054cbac7f0416a062cf1db8e"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "b0ddfa3629267bb7c66f1d48a537a1a7"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "cf59d500bf20056274f0812ffc5c563f"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c1e0fcdaf11cf23346b2aed51857fe03"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f99fd40df9e8d3cfda9f4a30d0f69af6"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "334f890e6aac304e00f51d63897b8243"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "710408babe0d977f6c0fd2bf8af9196d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "963c84e82d9c09fc36a64605d3bf064c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "844e1bbb6e8e2afdecdf4b8143ae8ca3"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7582e973e03ff2832fa3982954377de3"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "95eabc6f109a78ef40913b486e4962b5"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "bb28379d53c6565bfa20cc9ff4585d9b"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "d02a02bb5c80c491e660fcc5fc935579"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "551075f22365afd32bcac935cd17e403"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "ffc524e86fac5108113a7307c45aaee6"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ad986cc9b90235214ba55bfca4b87aa9"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "0d84384632b069cf0cb6e1138238bdcd"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "9ee9b8b700ce73eeb64d00a6d1a4819d"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "ece3bbcc1c0deb2b4b7f6af7e4378e2c"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "5364b9145191b57c9c4b5d253769842d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8ecfb1ba08c2e6640f8164dd10230dc3"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "cdf33fee937cbfb0ee45b22baa641e85"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "0313f6acb3786437396396e85290239a"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "39be71fc1b4c47704468be8bf1a51b86"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "1732bc237dd67e320980b579885e5ae6"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "853caf19be46dae5e971b5d568ae2c77"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "c08bc98bd51157b22271d80e286409fe"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "d9ebb5cf2313dd7f0b99fa61a2a6a777"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "7a6efaa92c843f6923593f948fd33afa"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "c4bee09268b2418882bfcce3febc52de"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "677e6be74f6110edec5a84b83c59edee"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "2c73da08030d00aa9a32aa1155e5e5bc"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "695343bba03aa301b500b5eb0716ac8c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "e2575f604b6428cfc85d63c5e37a57ec"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "f20ff44845be86da6341451b7465ac94"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "d4cc2678adab9ab1b4c6c3ce09ee0a5e"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "78a6124d402d3f1b762b7fec982cbd9f"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "24f15beaa5d18009cf90a760946183e7"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "5189a93ec1ef59177e5c18fd7f7646cd"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "4c4218afbecdfa51479c028b2be5ec1d"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "df607c80f9e84c5469c2dce38222d72e"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "a829b92b99eec386bffa0c6344e2c150"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "53f24e5ff5f36da1898ddd47ad71946f"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "90f86fca08508840fd21ef62eb9a367b"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "38d2dba7867fe82d94f1b32b56934c76"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "4699ac2de286185033bdc423e06cb85c"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "918e3c2d61a072903e00a461127a7d02"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "626718036d96779cb7e9e354fb27095f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "c0673b8725222cbb25fc1482707aecc0"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "c0a049660c36e3bde495ac87fc753319"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "56817effa2ee36a245e6c9316c39175a"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "e2ecb2690edb2554d87702a357fda0bb"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e639746f14f76f14adc47f6fa0c1914c"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "966471f502da2aba04f93ae777e50c8c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "66bc68da192159aeb2916270d6cad6b9"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "d0be8572cc738e9eeeeaa03351446308"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1ec065c1914a7b5e5e9736c19dc98623"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c98eac049a0d19f93a4d5505887234ae"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "c3f10e52d257a9e8ea33e654921c9b11"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b910bec7b69f5f19032fe36bb8b520ee"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f1d78537dd266c5710783d8c84b1fb2c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "079761bf6712e88a242c24fb9389a720"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "4a8de1668d37f53e70786f09e1686d2e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "0d1012b350e75c3cb840aab2ed15404d"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "842ef07898e759e039ce3b348a1a0122"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "e10a2ddf3e9ab314b376481d1b173f9c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b8315d89e0107abe1c0ed2e0a229b70e"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "9d8e88114a7234f5a1b266592815c99f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "78896e5d61906d0a31a7d6aa4bf8dff1"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "26b2232a4b8c945057a7250215bf1fec"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "928fece07f5680744713c1ff3151134e"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "2c06ce2117feea8af4a900b18cf75bec"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "107b67c2b6066739e5a0cb9b9b00852d"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "c8cf06497cd12bdd4e9874b952c45757"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "46afd179f0d9b401cb0e4cee0738a9fe"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "60a9f06af79099df2b4e1b363dfe6aab"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "e1ecebe82f065ce7571ac1742ff6818c"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "088fffcb13685e745eaed630aab87c2a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "3baf84519005a40b4e449ff7f908a7cf"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "f924d1f22723a2a7b36edc30b899ae5f"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "7e3f7e18a39b49fc80b2a71331f1cbab"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "228f69e346041ed6c0704e4d7faffdd0"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "1626c1b8e9bca4986d4f3915caf63937"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "3e4e4eed09342bf84d76e21cc69ddbcc"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "31c61ae190efeeff848d87f17d60de0e"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "b59bf7ae78f06a8667be697de54e1767"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "3940ee78aad84cabcc7738e3b5ee6982"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "775e2400d9f2248126a7c929bf7d578e"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6d8148f67ee1c374e213371b7ebbbed4"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "df0ff4f33689dfa88d1497cc04edd8f4"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "35ace0d527331229a786117814f33a5d"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "4e4282a0df562d6131e7fe6a5f465623"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "fd0f2429c16e872dcfc08b311b0005da"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "4ba6e35e9db49b1436ea2345e5ee6463"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "4a3c94e642d8003ac67d1a0a2c86f787"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "120b593507c4d1e88a6d0f01812ece75"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "fbdd377211ba1c5a770b79f434cd0858"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "502ad2b92482de29781dd5ccece31acf"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "450b1807a40c8f02c6988ee4ab0f22dd"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "40ecc5d5ad803f0e608a7a6c4cbfd47d"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "1087168dcc99fd662ee443dca0b102d2"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "561a12d08b83f38fe28b998f598cb548"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "9b2212f01e1e0e99fc4b7574c9cc055b"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "d64d027f03be8e8ba6656e18a911fbdc"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "9038e790e1b7e3f15e5b2357537d0b83"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "f3d8404c1c1bda2f35fefeba7e1eabd1"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "2953021ba410204673d82f9a047d9248"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "181454c5e51740d90235c4a40d614d72"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "9b2b7f943617d0e0ad184ea1bf3075bf"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "f2e9b6f754d710ef99e18409af5dd250"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "e437bf7f2cc9bd0d65cf2ceb95007f89"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "c4ca7c3c9e553c9566c9e9c3f4adf793"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "187478b989c40b9e8abd282870246e88"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "5035c0a3c773ab5be84e6aafecd390c6"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "2c85d03e824457685970f0010f93a317"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "04b6143b856378541bf9f1bca0058d45"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "0f7aedc602d8c4b9b27bc8ae6dd1cc3b"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "3a727184cd0ec31b8d1cc7cc78482582"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "0cff26d334e30d2747d9883213a5321c"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "8c91c0abb42df2e5137525c91af7f61e"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "671a1c2585dc4694b4d08f7b6cbc0749"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "fe311d28c7cb7b7f6161595ffa397a6e"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "8e118258a0d6804e8d4de3d83cc8e2fd"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "26e36f5e163221181cf31d4d8734c297"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "e8c261abd2546f8336b1001dd19763ef"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "b46318c78e944d1147e3077150f4e616"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "2ad6a7d6562d88faaaec6b37327334b5"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "f37dea1d3e05cab8b85199a32e3e32e9"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "53b7378b8268a19dd7432acb4aa09ef4"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "5122210de96a6f7b762dc73e86561e1c"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "20bc411500540d02af54025f8afefd06"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "c52b925c84bb7c2e3844d0000513d6d0"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "9e18b6b92270f43e80b190b3a91bf9ec"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "d30f2d36eac973d824834ca92348e79c"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "c85f3876ff4ff7e4e500d1af951ffe9a"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "4c9e5c628c662db8f3787e530d6ecbc0"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "7264d0dc472a0ee8b8f5cae385b86b75"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1f21d62eb5e984b53d34c005613712c3"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "56a5260a6865149d51dc7c34708cb1b7"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "fac75d62c0a99e79b5aab84f653c3dac"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "54762142314ea9a70f2a6caf310a99a6"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "efbcf02d679459cadb5810abb01635d7"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "4dfcf59d3f327259d1ced20c9a2f056e"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "603a3bc4ce619e0c63e64417110b0d88"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "be50ed3aee49a846ce08e8beac4b03c0"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "fd11ed72f98045536a9d6ebfad188eec"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "6929ec0b99f2cda6b88bb6b5828a9f06"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "c83fd605a7f8b3e2604e57a5673180ec"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "01d0e1a6c55675ab55d64c9aacef4ac1"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "79347520712f3b6ad625671db751bd10"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "368ec64cde95f3b1bcb2fb8e83624118"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "a95d23bae9a2ee2eef45e5968a38de2a"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "763b3f91325107c59a4edd00e1f07452"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "1b0b1cd0da7766c26342b7c63cb56dd6"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "1c16b616a3e5b5a09a7b25f61a0f2318"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "23de14550de01982cf584ce6831119db"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "d4cbaf6a641d97dddad44e2a0b25de7d"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "3d5987090ac2fa6560fd4432ee83837e"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "adbf6ffca11c84ac4079aeabdc978ab2"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "fb742fd7fa57a3e2aa139fbf9e260a19"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "410b24d13aa0f01e46e842f4095b4500"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "61d4bcafb24e43c27db3d824d3e88ec0"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "31df741e2ef1d770c30b6081553c2ea4"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "cc110ed441228a55392b73090465dd87"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "3e1c8b3277f7cb43efd9087266c888a7"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "03d94bd62272af13a8a80fec7fff34bf"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "58284241b816755142b65e04acb42ca0"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "d0484ad5b1eb72a72089d5403d6d3ac1"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "09aac0b969324bd9277a5e8b4168d001"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "8fb7a675a2f26aa613d86d7152b12f7e"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "bf6885db701f5c5fd240a980b3f19664"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "2c44410ddc7b75377200979a3cfb9ace"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "3d68d45e88b41bbade47b6d45ed7ca33"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "015ccf83d8e2afd349d1c33bf5f19014"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "848c4af12ae5a61d5ad46a8be68316fc"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "3f60c1e21ba557e565e5552efad735da"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "d285b6fd6bf16fe887e0be3d9149ee83"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "fd50aa1c76588df0b3664f128e5eedff"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "d3d68315bd61bcd15d398cb14629a0f2"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "f92ab5707a1675b5920452fc6e79eb02"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "3cb52e26bdd2d64d81cb58e221048e31"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "522ddd32ab89aa178e198572fd2191c7"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "de2e021f6f0c696fc9c7fe015710ad95"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "22c372e51eeb092b86305cd016ad6764"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "afcc5ce060ee1ccb4a19725f58d380b1"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "93f853e4b596944fadb8373662728626"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "deb6b13c3514a9220496277e268aa2ed"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "fb0ccb3c347f6552c6d2782250dcb013"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "f54159fde931ce7177f77fddf403d383"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "eba3faae2ab591a57c705abd47678a5e"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "4d6e30c53f7e8266740746a6ff2ba3f1"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "fe3c59c1d88b1edc4f206d42d62c594e"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "f0a4ce0fa24be66b8b9a5f10b59689e6"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "8a7a195af76fe432cd395efcd29c0b46"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "7e0dbd9bc3d3384e871b18a1500ee3ea"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "1f1771a4d121a4a0d2d84038daed5c1e"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "4204cb95c6c706e181559b130032f0e0"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "58850033616a8a7f1352d1e05cfa60b8"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "e2bddd76abfd97840f7b99e6b34f3e49"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "f6f1e3cca378b1457894aca7eb78c5a8"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "3955c6c2ef1470cd351499a1fc6957f1"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "b7d7aa85c9a06cf3a1e24e92215fd70b"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "b21ea911629fc9a467f9b2a84e61ecd0"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "95ec934e26ef66157ccac3a47dcf6040"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "fb2930a00a6aab2206df3fb4e0d3608e"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "be383021bc7bd949fb9745a40181a861"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "9c9bc257e744e94757fcdfc9962b4b29"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "9fa80c3b2fdd7d62580d7c335df9b49a"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "817e2fa581c828091712a04776a063ed"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "ae02cb149c5a53873d7bd3f960898626"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "98a74919731188f9aaaf1b24cc2cf672"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "acab9e9b5a7804eb030328e12d4104b7"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "6f6d7976d599dca4f2492fbba65f72de"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "4ba00186de0297f18abe4cc4e40daf4d"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "745ac37e0b0389fe818bcca5efbf59f7"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "ede1ad0f8b9bdcdf3deb6402e618c958"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "fe8a885da72260f7a25190118053d5db"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "c0d904ed3840eb00a21c9f96d3ff99d4"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "5cf47c9419b8218d5b3a5e19af045d8f"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "eb67ef3cdfb162f2c42ed745e167a1cb"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "6ba4867c23eaf546767cbf4fc0e0d2f3"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "29353402055eb3581f0d17c30d8b66af"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "4620d0299c7d42b15df95e595c2e5137"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "f42a76431efd2ea10c447b4ee66519fd"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "779f3dca4525cf66e93b7b517f6b49db"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "204bf0402a6d551066dbbdf53125cb31"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "fafde4ea5e7cc3cbd5dfbcda4cb47432"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "e21f3c9b143222dca31fe09634fdc597"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "09c006935ba9ef728c8f442a0bd034bd"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "89df36231bae1ec9a10833211be61db7"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "cb05f8d009ec89c9334684c600fd455f"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "19159bda10470dc60d9b794bd1d53dfb"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "af81d93d0af8a231fde5fa74b359dd60"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "3635d6fadbe2dad54bbc57574a1091c1"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "7283e21ca9c9adf359ba9642f0684a9f"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "330e0031f73f7874c6470235ae76e9ae"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d4592ac77f9c77b094c0948304ad000b"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "f0c3a2010fa638d60067c6df17337226"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "1d6d24edcfe06a8531c36613e0799519"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "21aa92b740b2bafb3c4f898d3b6ebfe6"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "32c743d5e60b966ff0c0ae847eb67cb6"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "a9b9b0060a9baf84c4dd0d9bcfcc46a9"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "c9b9808a5d86c0fc8eb151bb5cd2eab9"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "388cafa9278c951eeab6d84938d2f617"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "fcaa7f80ed71a4530fe8c2de94186f11"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "50cdb283b23d97568edb11c2007e5362"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "7a1407219ae23a4c372c63a04c3201eb"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "2da12dcb1f24769f34d9da065d577a70"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "6936f1b27833325ac67ec2de1c3ce762"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "aa528c2cc6bc95217ae6e1a1b38c6871"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "757f8fafa73a635ac8a10109b0fe5237"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "141342f7652169afd23389a94fd418eb"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "c6571e0fe81809492771cf3e51718a13"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f8483e4107e1369abd0a3bd5cb604559"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "b57e902391072826c2e386d84580a23d"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "396ec4a057ca77d59e39d6d7f5baf910"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "03a1b9df1e8dd7560def134a430d7b86"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "69a27e34043981670450b089af89d0cd"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "47103bbf9cc50ba4d9a918d5e8be5597"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "e2e9e5aaf404905a6fcf3d3a8ea2614a"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "66321d894b5e2e61d7ac5bd9bc53a51a"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "ab2f4ce6e21292a2a5ea586eb2858823"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "0eb4e390fb9d6ec4739d68ab5bac634e"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "ba84d59c5972a5f80ff2f1e3bff2ce1d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "36e9aac0a8dc39b7ab1a90395380256e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "b37b8f588d3df3834336991d81b440b4"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "48f0ff226158031bc20ffbe879f507b6"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "bb2ec125d97a9856e88d9ab1277ae8d2"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "7c8d3ceb0ccd7109b063a0ea82efebf5"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "105630823ae994dbaa4806fe4790109b"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "8d89876f296edefc98963c050a0c1755"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "a0ecb2b2be78d7c0529f25f8b7ed21b7"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "a26e6e005b0b7fd048f55eadfe514f22"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "42d7de45e795d366f07c006da8e40a9a"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "cf6f2c59070238d5d48a8181fd8145ca"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "2eaf321c90550c7818796ca98c69596a"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "317136ce98272297b3e1973bf6a36c70"
  },
  {
    "url": "404.html",
    "revision": "d2820576580635fed036a51bd0cb1305"
  },
  {
    "url": "assets/css/0.styles.0fa56194.css",
    "revision": "6a2ad87a030128a651f6f2397f9e3afa"
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
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
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
    "url": "assets/img/new-theme-added.f06bacb5.png",
    "revision": "f06bacb59a4605f705122a98189fee90"
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
    "url": "assets/js/1.72f1e422.js",
    "revision": "bc8155637c6dc68a5277da9c1cdaec33"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.031a5896.js",
    "revision": "4c0d953fa45f654e9d41950a43e16c83"
  },
  {
    "url": "assets/js/101.0e865dde.js",
    "revision": "1c26147f9512ed4fd608280f4ccec371"
  },
  {
    "url": "assets/js/102.d468772c.js",
    "revision": "8b7ea1a6ccd2b3ccfce9328b4a05cfa1"
  },
  {
    "url": "assets/js/103.59e73842.js",
    "revision": "914b3c4c3324cf249a7b4cf2789cdf7a"
  },
  {
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
  },
  {
    "url": "assets/js/105.b0197c01.js",
    "revision": "33eb9187e2d0762a0453121133b091fe"
  },
  {
    "url": "assets/js/106.fc5ed400.js",
    "revision": "1dea36dcdf1161d59d00f435bb857803"
  },
  {
    "url": "assets/js/107.6b5b4082.js",
    "revision": "1fcd041d6f7d1f7aae75d5414f52b43c"
  },
  {
    "url": "assets/js/108.d89ee50f.js",
    "revision": "5e60318094cbde0679609396474931d0"
  },
  {
    "url": "assets/js/109.4fce3fa3.js",
    "revision": "f50251b52d394643fee5b871631014d8"
  },
  {
    "url": "assets/js/11.46652605.js",
    "revision": "e2dc83ddec90f48019b9e53e5d7f3d21"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
  },
  {
    "url": "assets/js/111.754a2cd9.js",
    "revision": "434e2180cb02024048385763e301459d"
  },
  {
    "url": "assets/js/112.7ed2342e.js",
    "revision": "146dad5bdc4a29e0065a09b479225ab3"
  },
  {
    "url": "assets/js/113.caf50036.js",
    "revision": "e384084b449a1295c22cd92d791b694d"
  },
  {
    "url": "assets/js/114.465177c3.js",
    "revision": "64c048d9b4a39c92d93414a7a023c10a"
  },
  {
    "url": "assets/js/115.aee6e343.js",
    "revision": "85ff15e06aa896a24ffa3cee021b1801"
  },
  {
    "url": "assets/js/116.8ecb74df.js",
    "revision": "b9c4dff963ebe50fdbc0850062dc0d76"
  },
  {
    "url": "assets/js/117.c2d7ce24.js",
    "revision": "39ea6741bddc7dd626884ef0b5dbfb13"
  },
  {
    "url": "assets/js/118.1995ec71.js",
    "revision": "cd712ef059ea5c798d381315006c01f5"
  },
  {
    "url": "assets/js/119.cbaab0a9.js",
    "revision": "a3518a7d95a8a45d7a4174dd3f458316"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.351209cb.js",
    "revision": "6efb529ad1da4b02730b02df8f3a8ce0"
  },
  {
    "url": "assets/js/121.8ac26daa.js",
    "revision": "2b4614fcf81292545db4c8c8a948fe98"
  },
  {
    "url": "assets/js/122.fe671a70.js",
    "revision": "8bfe723f8103c03da3dd5ae2e43652b3"
  },
  {
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.1acbc4f0.js",
    "revision": "f64d5f5ca970c7f696517851ae38fd3d"
  },
  {
    "url": "assets/js/125.5fb1d62a.js",
    "revision": "d7620be8fe1285396f4536c139653fcf"
  },
  {
    "url": "assets/js/126.abb88bc7.js",
    "revision": "c0131c0e1cc7dc05efea99c3bd344939"
  },
  {
    "url": "assets/js/127.f9f1a195.js",
    "revision": "8739037f1ed07f0b1aff9b239d34b5e1"
  },
  {
    "url": "assets/js/128.0ca499ae.js",
    "revision": "b68a49934a319f3719d2a18393f384e5"
  },
  {
    "url": "assets/js/129.22a256b7.js",
    "revision": "5eff25156b06c67d2be2d04a29067efe"
  },
  {
    "url": "assets/js/13.4a774b3a.js",
    "revision": "4872c9bb194969c98b9627ff178495c1"
  },
  {
    "url": "assets/js/130.f3b3fc93.js",
    "revision": "476087781f3b7af01db72a8658b8a237"
  },
  {
    "url": "assets/js/131.18e33c46.js",
    "revision": "45e027c998b5736b23b09296833d666e"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.9bdfb38f.js",
    "revision": "11dcf4c86bdc142e9ed7c7220b1d23b6"
  },
  {
    "url": "assets/js/134.dfa88bfa.js",
    "revision": "f8640948ca07ac95d863223142440fc5"
  },
  {
    "url": "assets/js/135.3a6094ab.js",
    "revision": "8c2ae43bae873db764f2fd8ad64d79fc"
  },
  {
    "url": "assets/js/136.878ebc68.js",
    "revision": "e19e8516877a670e326e21c075936d58"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.de183c1b.js",
    "revision": "a64530eedbaa03af3c40b2272b317f7c"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.fc486f9d.js",
    "revision": "814d0c9a7f10d73d850725dd6c6e0640"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.5ce799ba.js",
    "revision": "3a0da07594ebee763f90d840a6f968bc"
  },
  {
    "url": "assets/js/142.e6bcef07.js",
    "revision": "36bf5b460554a06f4664e3c026fddbe8"
  },
  {
    "url": "assets/js/143.35651099.js",
    "revision": "962d0bb47645f4104026f021a8a85a25"
  },
  {
    "url": "assets/js/144.4a14f685.js",
    "revision": "db8603384b1b7e16aafe819b63f55bfc"
  },
  {
    "url": "assets/js/145.b7afacb0.js",
    "revision": "1da649e58e03fa31e7c01ca830a9230d"
  },
  {
    "url": "assets/js/146.7a2b5871.js",
    "revision": "4265cd260bc5f86b3a3ec0cbce502d31"
  },
  {
    "url": "assets/js/147.4aa524b3.js",
    "revision": "d8f1f1fe6900214fc324d2103493e947"
  },
  {
    "url": "assets/js/148.95d4d59f.js",
    "revision": "a4a0a2247e38ef078e3c99a2d8fd58af"
  },
  {
    "url": "assets/js/149.97fa4a1e.js",
    "revision": "89fe2d341ebfbb556bda6ecdce4bf15a"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.ab536088.js",
    "revision": "b7afdf777ec0b71f33d2772727dbc234"
  },
  {
    "url": "assets/js/151.cab486ce.js",
    "revision": "51cfbd9a8503241cbcace60557281c9e"
  },
  {
    "url": "assets/js/152.4d11478a.js",
    "revision": "e6f02d47480331cc8e6029853178f799"
  },
  {
    "url": "assets/js/153.9857c66c.js",
    "revision": "06f132bb50ce503b0e28601a1cb191b0"
  },
  {
    "url": "assets/js/154.5e2b3e71.js",
    "revision": "95f82a99e568207083ef42a1749e29fc"
  },
  {
    "url": "assets/js/155.20dc79e4.js",
    "revision": "8233cfda184954d04e4f3ae03e0286d2"
  },
  {
    "url": "assets/js/156.d2faeb2b.js",
    "revision": "872ac82ec674db6639a0391bbd17a120"
  },
  {
    "url": "assets/js/157.33f61009.js",
    "revision": "b6fbd34551008e52b4f8160921a81f1c"
  },
  {
    "url": "assets/js/158.8185b9bc.js",
    "revision": "6166a0a28cc2b31e2ce7a764ea8be232"
  },
  {
    "url": "assets/js/159.570f378b.js",
    "revision": "8b1865ea419f155fb2487f803f62a8f0"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.bafa777e.js",
    "revision": "4bbac1987179d220bd5d25f4590c2250"
  },
  {
    "url": "assets/js/161.62ed7457.js",
    "revision": "b831b7df619c0724ad1715325aa4c493"
  },
  {
    "url": "assets/js/162.848581c0.js",
    "revision": "68227ee2ab2c1cc015683b241611b914"
  },
  {
    "url": "assets/js/163.e1f8e6f7.js",
    "revision": "7f764277e5bc2976a2d9411fdcfbdc22"
  },
  {
    "url": "assets/js/164.e8c3d4ff.js",
    "revision": "eafcbfc3727d37da9e2c1a8d750d43ec"
  },
  {
    "url": "assets/js/165.8e0f13ba.js",
    "revision": "e55db322534b09260963ec52ceec91eb"
  },
  {
    "url": "assets/js/166.38d25b39.js",
    "revision": "f54fd8b702b78aa6d04ff65b1b266029"
  },
  {
    "url": "assets/js/167.8dc58614.js",
    "revision": "3685b006f6c52885f9d331c31bb6eceb"
  },
  {
    "url": "assets/js/168.5a75c6a9.js",
    "revision": "81b2d2a6f2252cedbaf6f2d7d83fb3aa"
  },
  {
    "url": "assets/js/169.b4c41fa6.js",
    "revision": "588f68e58fe1a46ab8017700c25c1d10"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.2eecec6a.js",
    "revision": "2ebbe613485432e6f627823bc8c80c0e"
  },
  {
    "url": "assets/js/171.19af290d.js",
    "revision": "e1c5783d3b5f0539ae84659e4fb17d1d"
  },
  {
    "url": "assets/js/172.c608ec58.js",
    "revision": "8bae9ff0fc70c36a5a96ab2c8235546c"
  },
  {
    "url": "assets/js/173.e0e3779c.js",
    "revision": "99bc2bd50587d4cab6411bd2279dbdaf"
  },
  {
    "url": "assets/js/174.c07387f5.js",
    "revision": "05f931ec84fda0c268e83468b2f93315"
  },
  {
    "url": "assets/js/175.a049439e.js",
    "revision": "e9889ae72871b050b5d383b6b77cc85d"
  },
  {
    "url": "assets/js/176.dc65ca54.js",
    "revision": "4b462b75ad5aff2371c838522702b89b"
  },
  {
    "url": "assets/js/177.ba483307.js",
    "revision": "32c77803c5e6d4783c27e000558b2d4d"
  },
  {
    "url": "assets/js/178.c8ea6152.js",
    "revision": "1b38eb3177aa4b092cae45b265061e1f"
  },
  {
    "url": "assets/js/179.9d76f832.js",
    "revision": "b50879560a9967e40c1d323a0d987191"
  },
  {
    "url": "assets/js/18.cda7511e.js",
    "revision": "7edce51b8dcfd0cf651bf6b33ea7b136"
  },
  {
    "url": "assets/js/180.126c536b.js",
    "revision": "df29333f18e53180d97f195671b9447f"
  },
  {
    "url": "assets/js/181.0b6bc242.js",
    "revision": "60340fcd969ef57d6c6184aaae0159df"
  },
  {
    "url": "assets/js/182.cbae6dd5.js",
    "revision": "8c006f87f438bb309dea8f9672916305"
  },
  {
    "url": "assets/js/183.09816acf.js",
    "revision": "d3868cfeae04fc1326c58fcbb52397a8"
  },
  {
    "url": "assets/js/184.9b0a00fb.js",
    "revision": "e86fabc516b8dc0bcd8a6a6e2a063b43"
  },
  {
    "url": "assets/js/185.3d976157.js",
    "revision": "99542f6fd0aa598b8be201a4bffa9f49"
  },
  {
    "url": "assets/js/186.b2f1ee6d.js",
    "revision": "ff5af21e1f71b76c0752ce8581ded8dc"
  },
  {
    "url": "assets/js/187.b22c4caa.js",
    "revision": "9a9ab3359a4af8a5fe18c6b6f06858c8"
  },
  {
    "url": "assets/js/188.a935294b.js",
    "revision": "42a220fe6a2f27dfbcb047ad05071529"
  },
  {
    "url": "assets/js/189.4715f2a5.js",
    "revision": "202535dbcf1f376c2cceeafc708eae71"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.bc8d2ea9.js",
    "revision": "219ae1bb3b222e510da6162775b2bc01"
  },
  {
    "url": "assets/js/191.fac77b20.js",
    "revision": "f8a58bff70ca49a001e9502215dd7474"
  },
  {
    "url": "assets/js/192.343688c4.js",
    "revision": "3a5d73ff519d2fc827c596946ca9ade5"
  },
  {
    "url": "assets/js/193.cf2886c3.js",
    "revision": "86dcd8c8408cb99e9f42ceb00c674cbb"
  },
  {
    "url": "assets/js/194.1fecd46e.js",
    "revision": "ee12348dd777d03731b6ef5631cfe740"
  },
  {
    "url": "assets/js/195.eb48805d.js",
    "revision": "65d661836810d2f70bce4b117f468fec"
  },
  {
    "url": "assets/js/196.236a1a5e.js",
    "revision": "98802826253471ddfb0a253988006917"
  },
  {
    "url": "assets/js/197.8e29dae3.js",
    "revision": "5781a2a108d9eeab34b17777db5b0cfe"
  },
  {
    "url": "assets/js/198.db422c28.js",
    "revision": "7ab63007878e886e7a71482e876f8d61"
  },
  {
    "url": "assets/js/199.84d4d90d.js",
    "revision": "a8b9c7a3291d24b3165839e723f562e2"
  },
  {
    "url": "assets/js/2.d5bfc3c0.js",
    "revision": "3e5ef052f56826e20570e2953cceb199"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.c0b57e96.js",
    "revision": "6a8263b6ce56d79a7fa010da9e599e5f"
  },
  {
    "url": "assets/js/201.ee4b6f60.js",
    "revision": "58355ade8ebd1d16d7e747722f7b98c1"
  },
  {
    "url": "assets/js/202.e16471fd.js",
    "revision": "7bc3ca0e201682d7912dfdad2e3d38cd"
  },
  {
    "url": "assets/js/203.da4ab6eb.js",
    "revision": "3cf6087c4c616e8d69668f6cb1a1eb6c"
  },
  {
    "url": "assets/js/204.a5828fcb.js",
    "revision": "7627698323cbbe03d4dda09b87896448"
  },
  {
    "url": "assets/js/205.ad39b0b6.js",
    "revision": "f68f420b37d48162d4e948203059a1f1"
  },
  {
    "url": "assets/js/206.2c633f0e.js",
    "revision": "181efd57accfbdf55d037b71eaeddebc"
  },
  {
    "url": "assets/js/207.ce1f5975.js",
    "revision": "8a98242f65b22fc8418bff9eb5c9cdad"
  },
  {
    "url": "assets/js/208.ae25c583.js",
    "revision": "993a99e9db09d4affbef9784e0aba66c"
  },
  {
    "url": "assets/js/209.527f4eb5.js",
    "revision": "3c2a6ec76ac63a41f582e0fae37e4004"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.8b8881fd.js",
    "revision": "2b105b685f01cbb4eb65b356ecc8cac4"
  },
  {
    "url": "assets/js/211.f67942b3.js",
    "revision": "d98c303416d86420338ab84d93804dd9"
  },
  {
    "url": "assets/js/212.42016fe9.js",
    "revision": "504ea6ffa607881fbcc15dc5e2a5b8a5"
  },
  {
    "url": "assets/js/213.68337e4e.js",
    "revision": "22f0eb4401735102a454855bdbf0503d"
  },
  {
    "url": "assets/js/214.8fcd17f2.js",
    "revision": "681530daa0d7be2dc01c6d3ee3016faf"
  },
  {
    "url": "assets/js/215.a6505192.js",
    "revision": "19833c59fd041878ce448fa4a6f89a26"
  },
  {
    "url": "assets/js/216.03a9ba70.js",
    "revision": "35a47c46b540291a76efbe061a5f320e"
  },
  {
    "url": "assets/js/217.1df47131.js",
    "revision": "65c8931396116f3e6b8e00d931c21ad7"
  },
  {
    "url": "assets/js/218.74f5cacb.js",
    "revision": "8753aa277b02f7c872dfa31361719db4"
  },
  {
    "url": "assets/js/219.9ff6665f.js",
    "revision": "4fc41067e336decde34aa3cdbb44d8e1"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.4e769659.js",
    "revision": "776beb90f7c866976cab58ad499e3d40"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.50b7c4ee.js",
    "revision": "029b880ac0331826c6047ec0bf4935e6"
  },
  {
    "url": "assets/js/223.23a19ff1.js",
    "revision": "4630da8b58cc88a3fd4f82a84e21cf5e"
  },
  {
    "url": "assets/js/224.63bc8a53.js",
    "revision": "00cecab2817f93b87981bbba68f2dae9"
  },
  {
    "url": "assets/js/225.2ef324e8.js",
    "revision": "b5cb8a9864568a13eca3d407c5d1b760"
  },
  {
    "url": "assets/js/226.b3360b95.js",
    "revision": "25405364d4f19596abe0dd73e4e56154"
  },
  {
    "url": "assets/js/227.57b62ec5.js",
    "revision": "7cad279f00f73b0e9ea07984d5ad019d"
  },
  {
    "url": "assets/js/228.cb5ed249.js",
    "revision": "b042732cf668be013f5f71b82a45d8cd"
  },
  {
    "url": "assets/js/229.6205ce7a.js",
    "revision": "329ce95c4bdfcadcdec27aec6b64fabd"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.38a89a0a.js",
    "revision": "b0ed9e2b7d70a7d4cc687ab25637330a"
  },
  {
    "url": "assets/js/231.71345118.js",
    "revision": "2c46315fa073967aef60d8d032fe5e72"
  },
  {
    "url": "assets/js/232.6422e246.js",
    "revision": "2aab04059af4af252aa1a96918c4b182"
  },
  {
    "url": "assets/js/233.2b15590b.js",
    "revision": "1338f9030f183f7108c8de811a399571"
  },
  {
    "url": "assets/js/234.a008b14b.js",
    "revision": "9572889018b03b3988a57169a5bee5ec"
  },
  {
    "url": "assets/js/235.def638e9.js",
    "revision": "555d17e2ad8752d0b95c951fd3022377"
  },
  {
    "url": "assets/js/236.4cb631b9.js",
    "revision": "17ded79af3f7aa9d5639d8a692fca2e2"
  },
  {
    "url": "assets/js/237.f5e19acf.js",
    "revision": "dc665cc00f64b1c2e3b4dcc5edd8b2c6"
  },
  {
    "url": "assets/js/238.a4f01c11.js",
    "revision": "31efe0b699f27aa87766599029c94e7b"
  },
  {
    "url": "assets/js/239.27b59e9f.js",
    "revision": "6c8db9e2275c99f33377e011afee182a"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.5417807e.js",
    "revision": "1d8fe16ebd0b7d886fe469d5735aa831"
  },
  {
    "url": "assets/js/241.a68e83d4.js",
    "revision": "a9bf5ab35683ed64d6d0a251d3b14f40"
  },
  {
    "url": "assets/js/242.989f13b3.js",
    "revision": "a5991c78081a69683e15bfa2daf4877d"
  },
  {
    "url": "assets/js/243.cf953b9e.js",
    "revision": "69d4898820b093ec4123e58c8949acda"
  },
  {
    "url": "assets/js/244.404fbf67.js",
    "revision": "672181a395296af1fcf84136c2e8a015"
  },
  {
    "url": "assets/js/245.684035ca.js",
    "revision": "8581a90cdab216e7f4d4259bb6f49238"
  },
  {
    "url": "assets/js/246.60e47c1d.js",
    "revision": "6e3f7102d86ac790aeade9958d7104e8"
  },
  {
    "url": "assets/js/247.a6a2e176.js",
    "revision": "4bfcd68292240b43330e82c91b8b002d"
  },
  {
    "url": "assets/js/248.f3ad498d.js",
    "revision": "70086fdd0d7b371cbe24f46c9bfc7d70"
  },
  {
    "url": "assets/js/249.42de761e.js",
    "revision": "29bb76bb110f4f0d954f6b47c03afcf7"
  },
  {
    "url": "assets/js/25.a20030e0.js",
    "revision": "53e2c5fdb97be8d22e0cf6e846dbc3d7"
  },
  {
    "url": "assets/js/250.d199dd1f.js",
    "revision": "5dbd184f53f9c70f82b4587a5ffcb924"
  },
  {
    "url": "assets/js/251.a27bf773.js",
    "revision": "c0e02ff3f896890c6a05f08fe3011a43"
  },
  {
    "url": "assets/js/252.1ce83f61.js",
    "revision": "523de023664f77d338ccd25145423773"
  },
  {
    "url": "assets/js/253.91a3a85c.js",
    "revision": "96bf63a2d6bee6dc22854b5350fe9198"
  },
  {
    "url": "assets/js/254.f2752ba3.js",
    "revision": "997309ae212089205e5b0d265f21a60b"
  },
  {
    "url": "assets/js/255.0f838b97.js",
    "revision": "49bb3f26d09772a9f4a98786a148ca69"
  },
  {
    "url": "assets/js/256.57f86de0.js",
    "revision": "1085c37df3a1c78e63b588aa562490bd"
  },
  {
    "url": "assets/js/257.f3fe5f9b.js",
    "revision": "d6e51e5ecce3cce5aa72747d138107f7"
  },
  {
    "url": "assets/js/258.9f52a755.js",
    "revision": "1a934b511f20f9baa9821ad37ab6290f"
  },
  {
    "url": "assets/js/259.25bed776.js",
    "revision": "4b8150eef1823fb06b4ab660136a80c5"
  },
  {
    "url": "assets/js/26.02b99abc.js",
    "revision": "6ceb6772e2f3feefa4a6684d1064b6ba"
  },
  {
    "url": "assets/js/260.7a9b1c49.js",
    "revision": "97c2b756da1fbfdd3ed7bd277353401b"
  },
  {
    "url": "assets/js/261.700a7d37.js",
    "revision": "ef6531ee59f9d173fd07cb5660ec1f76"
  },
  {
    "url": "assets/js/262.f22e2142.js",
    "revision": "1b5d4158c040803b9220ba0f8f24c463"
  },
  {
    "url": "assets/js/263.3808d0a8.js",
    "revision": "0436914a2531bdd7b41c893134115f45"
  },
  {
    "url": "assets/js/264.fb109969.js",
    "revision": "53bb02d64637a57f1ba000bc903479f6"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.f1418674.js",
    "revision": "17e8304999c52a6f9bfe7a512d71cb95"
  },
  {
    "url": "assets/js/267.a555ba06.js",
    "revision": "7d5e04cf289bc289563de476deee4680"
  },
  {
    "url": "assets/js/268.9b7ebd71.js",
    "revision": "907e26aa63586d6f970f88a986aad80d"
  },
  {
    "url": "assets/js/269.a21c5abd.js",
    "revision": "f66c9be8735f61b438bd185ec73381ec"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.af9550e1.js",
    "revision": "192f1abddcdc1040fff831538f9bfe33"
  },
  {
    "url": "assets/js/271.6b6ffeb9.js",
    "revision": "93675edbb54d16558aec39e32dfd53e7"
  },
  {
    "url": "assets/js/272.179a398e.js",
    "revision": "f2dc98961908bbbdc8487ff46f9ce09b"
  },
  {
    "url": "assets/js/273.64763498.js",
    "revision": "8fa6381db8f85a257939d7aaf29bdc3c"
  },
  {
    "url": "assets/js/274.4998eeb9.js",
    "revision": "e81dacaff36333f5429f1f6c4ea4cdb5"
  },
  {
    "url": "assets/js/275.afb3444f.js",
    "revision": "74487809ad28166a762e9a011709d08b"
  },
  {
    "url": "assets/js/276.b084ec03.js",
    "revision": "d8890efb8de2c010a5361a3548a36add"
  },
  {
    "url": "assets/js/277.98b8b2ec.js",
    "revision": "5b65b3eb7a4fd51f58cf25a9951c5829"
  },
  {
    "url": "assets/js/278.c42a075c.js",
    "revision": "7b78ae57fa2d0b1b136dedb87298fc63"
  },
  {
    "url": "assets/js/279.d7277bdc.js",
    "revision": "4932498c927cbb9de8da0ffb681c1de1"
  },
  {
    "url": "assets/js/28.d4ed8751.js",
    "revision": "b23bdb42b59955507f62d77bc21b39ee"
  },
  {
    "url": "assets/js/280.8108fc97.js",
    "revision": "e18bc8e261e337243a31931e3081940b"
  },
  {
    "url": "assets/js/281.029fa49d.js",
    "revision": "6a6724c461daab17af148c755dd47518"
  },
  {
    "url": "assets/js/282.2ba96404.js",
    "revision": "df5c593fac65258ee749c124b300f417"
  },
  {
    "url": "assets/js/283.e0d1c975.js",
    "revision": "92874f7f6048ba432737e990ef441d0b"
  },
  {
    "url": "assets/js/284.3f7a0653.js",
    "revision": "30ca83a64034ea72fd50d4cc05ca4ea9"
  },
  {
    "url": "assets/js/285.b567d880.js",
    "revision": "8dd48ef74b97f34ff1b4059902db2fbc"
  },
  {
    "url": "assets/js/286.3a138203.js",
    "revision": "620714943a66a6684240aa64d821c983"
  },
  {
    "url": "assets/js/287.1c3ded73.js",
    "revision": "9cf2d466d903e77ffd8e584837e7b1d8"
  },
  {
    "url": "assets/js/288.3235c247.js",
    "revision": "a57feebf588b07149ef5cb428dbee83c"
  },
  {
    "url": "assets/js/289.c7866b6b.js",
    "revision": "a89b8ab7783991592c1ccbc72c777dbf"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.037ceed5.js",
    "revision": "f9f6ca5e495ed206d9c09aaf94273d6a"
  },
  {
    "url": "assets/js/291.e5ad4f79.js",
    "revision": "88766146bf99941712d9b68cdcfd09c2"
  },
  {
    "url": "assets/js/292.d5aadd0a.js",
    "revision": "60861bb86f2bf367ef0e835b902397ae"
  },
  {
    "url": "assets/js/293.08d04c7d.js",
    "revision": "3cf75bec98ab0a398d2afb19ff1cdb2e"
  },
  {
    "url": "assets/js/294.61422d28.js",
    "revision": "754c6275f0b44204c5e03218987def6b"
  },
  {
    "url": "assets/js/295.13b35c09.js",
    "revision": "dc7ff9739b7f49be055b4ef68696abfa"
  },
  {
    "url": "assets/js/296.0afe4138.js",
    "revision": "2d437c599334c24bba90cea2e33f0835"
  },
  {
    "url": "assets/js/297.5717a3fb.js",
    "revision": "8d1934f78cd1cca4ed0efb75ab6040cb"
  },
  {
    "url": "assets/js/298.f6b2fd32.js",
    "revision": "df000239b0f303b9cc3490dad15f2672"
  },
  {
    "url": "assets/js/299.5d9d3e25.js",
    "revision": "8e8394f293fb8845478c7beda5674a6c"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.dd276ea5.js",
    "revision": "77a506ee1ff5c2e0ede539b6d85b7531"
  },
  {
    "url": "assets/js/300.22b8da42.js",
    "revision": "fa849590d50dbd49439b34e07872108e"
  },
  {
    "url": "assets/js/301.07982c55.js",
    "revision": "0f7b7e6157ecafdbe0375a75f4c549a9"
  },
  {
    "url": "assets/js/302.ba86b1e0.js",
    "revision": "43ed70778fbbf25dda0a34fdd706fa4b"
  },
  {
    "url": "assets/js/303.8f1d947c.js",
    "revision": "ccf48a9eb277c4a2b69ac8096855e062"
  },
  {
    "url": "assets/js/304.5e35c738.js",
    "revision": "ae0c9f4541e52f9d6edde270ede8bdb2"
  },
  {
    "url": "assets/js/305.9cf1492f.js",
    "revision": "35e4361764285950451cd1eee467b3ed"
  },
  {
    "url": "assets/js/306.89ce57ca.js",
    "revision": "a5e62c8b73247dd40058ac14b94d2c79"
  },
  {
    "url": "assets/js/307.e3d4f977.js",
    "revision": "7c61204fe3df92a3a62f85ff1b9948ee"
  },
  {
    "url": "assets/js/308.0e00eda1.js",
    "revision": "11495870f735337e4cec79ae1dea1c46"
  },
  {
    "url": "assets/js/309.2c12a4ff.js",
    "revision": "696cc92a5a91764511989d8078cccd19"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.ec2f6b78.js",
    "revision": "3e4ef7bc3b362ab220d135b5c13add76"
  },
  {
    "url": "assets/js/311.174c41fb.js",
    "revision": "4805a540a5250b9208e51b7c59cbd3ca"
  },
  {
    "url": "assets/js/312.8eb14b4c.js",
    "revision": "d17b5a48bc13c4ba5d543f818ffddb73"
  },
  {
    "url": "assets/js/313.3658df42.js",
    "revision": "babae8fb1a29b4cf97118d663fddb6de"
  },
  {
    "url": "assets/js/314.3570dac5.js",
    "revision": "9c0c46b524b25546679b014af57b6cdc"
  },
  {
    "url": "assets/js/315.311bb333.js",
    "revision": "6ee84c1b6384410947358f91a60cff41"
  },
  {
    "url": "assets/js/316.3c3ae67f.js",
    "revision": "4b4790663cf95ffcae9405d6f33a1104"
  },
  {
    "url": "assets/js/317.47841aef.js",
    "revision": "6ac59e4b7a7e2d603996ddc6d6d329d0"
  },
  {
    "url": "assets/js/318.4523b53a.js",
    "revision": "95c5dccd28f9036c3bf77274bcace1c5"
  },
  {
    "url": "assets/js/319.b1e24fd1.js",
    "revision": "13c02b2f05c6abc896e96236e9e8a7b7"
  },
  {
    "url": "assets/js/32.aeaf4cfe.js",
    "revision": "cb880c72f64355c35e5ac0b03f2f82e6"
  },
  {
    "url": "assets/js/320.a9818375.js",
    "revision": "81f8ebb031e62103c04e79d98fb7de91"
  },
  {
    "url": "assets/js/321.95f37609.js",
    "revision": "e1d74fcaf244d0205ac7f498d00c256b"
  },
  {
    "url": "assets/js/322.b8152af3.js",
    "revision": "923bbbd22f057aa3bb26458444726957"
  },
  {
    "url": "assets/js/323.a1717bf0.js",
    "revision": "b15ce1969df0e28bd22950600a4a8188"
  },
  {
    "url": "assets/js/324.84141b0a.js",
    "revision": "c8e13b213bd2f5880219800e0165515a"
  },
  {
    "url": "assets/js/325.264359c3.js",
    "revision": "16f493aba0b1435c26b7ae64acf7da63"
  },
  {
    "url": "assets/js/326.8d9198da.js",
    "revision": "7bdbea8a28b65c0fe88b9401b1f63bf8"
  },
  {
    "url": "assets/js/327.32cb920b.js",
    "revision": "f980dbaefa5fafff1de9c5effdafdda4"
  },
  {
    "url": "assets/js/328.d43145a5.js",
    "revision": "194260c892a8cd62fc008fa203dc26b1"
  },
  {
    "url": "assets/js/329.eecd76de.js",
    "revision": "f9b77ee23de885afdef4f6c0be71efb9"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.aab70c1d.js",
    "revision": "c0db000965f377e09f57ec1630f72f81"
  },
  {
    "url": "assets/js/331.db9d7e96.js",
    "revision": "54062a1af87ebdee17a260f43bc21620"
  },
  {
    "url": "assets/js/332.61174b2a.js",
    "revision": "5a4ff5e20e4a7fdee457acc3e8628a37"
  },
  {
    "url": "assets/js/333.52dd4a13.js",
    "revision": "3963b33194328eaf1c2de16deb096c45"
  },
  {
    "url": "assets/js/334.cd1a9ddf.js",
    "revision": "cbbae4b2c2988f9e11d01fe283973fe0"
  },
  {
    "url": "assets/js/335.735229fd.js",
    "revision": "3f051066b937390a1254a0ed0edcc828"
  },
  {
    "url": "assets/js/336.e2992dd8.js",
    "revision": "51f680b1a1f35d3cdd2ea78480cb7d54"
  },
  {
    "url": "assets/js/337.76455f24.js",
    "revision": "a9a066623d895fc8bac284a56623116f"
  },
  {
    "url": "assets/js/338.dcf64d64.js",
    "revision": "76ad3cf6f1b7c16082b8bf1bc061ac93"
  },
  {
    "url": "assets/js/339.f794a33e.js",
    "revision": "9ffa22bfc28d301dfe0eef2229ec14cd"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.e5c3cea7.js",
    "revision": "9aab280f2e68224500698aa6db93effb"
  },
  {
    "url": "assets/js/341.27f5da91.js",
    "revision": "b12a0a2f478cc61f7f76646d3dbbbaa1"
  },
  {
    "url": "assets/js/342.795ab3aa.js",
    "revision": "1e9d88f5ec63e018a47ff131965d16d4"
  },
  {
    "url": "assets/js/343.1b7e80d9.js",
    "revision": "7ec32f9e578be5675f00dc015b22d0a1"
  },
  {
    "url": "assets/js/344.bcd5ccdd.js",
    "revision": "0cc7b0cde9757b42766b1f80b10ad953"
  },
  {
    "url": "assets/js/345.29e98487.js",
    "revision": "1b874c1562a88e09e0363c0500b65155"
  },
  {
    "url": "assets/js/346.76324f72.js",
    "revision": "7ff32f0921f98b59ad41fb845d90faa3"
  },
  {
    "url": "assets/js/347.7735c47c.js",
    "revision": "d14bbc8cabdd48d25573e83d85b6fe06"
  },
  {
    "url": "assets/js/348.19debac9.js",
    "revision": "421a7fe5c9475cb7c04ed5b085fdd46b"
  },
  {
    "url": "assets/js/349.a830a7b1.js",
    "revision": "440d97ed59e34b9f221e924b6e88caa2"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.3c4a3747.js",
    "revision": "d1a1d8d939929edb060a194057a9fad7"
  },
  {
    "url": "assets/js/351.b14746f6.js",
    "revision": "07f0439cba8b9074f548cae85e280e9c"
  },
  {
    "url": "assets/js/352.92b6b6d1.js",
    "revision": "57ca8cf877eb4593f907a625e62b3a47"
  },
  {
    "url": "assets/js/353.260a4cd7.js",
    "revision": "1455875b2283d8d4cf478c78b105a3e3"
  },
  {
    "url": "assets/js/354.89737d7f.js",
    "revision": "f92143f839e1b07b36944cf34695ff6f"
  },
  {
    "url": "assets/js/355.c34a26c6.js",
    "revision": "dbeecf9241a2fe6862a5ee3c2b71cba5"
  },
  {
    "url": "assets/js/356.bf8d4427.js",
    "revision": "a407d1d02cf694c1a61a1cc38c5193ab"
  },
  {
    "url": "assets/js/357.4bc90028.js",
    "revision": "86fffd50217a0c4809c1fcc7d5a12f02"
  },
  {
    "url": "assets/js/358.af7d804b.js",
    "revision": "6136c21a30104da8013afe395eac1c9a"
  },
  {
    "url": "assets/js/359.7673d084.js",
    "revision": "7916875272621ecc8e889bc7f0c83f34"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.0e13ac9c.js",
    "revision": "bcc6ea9005cd8cabefc4ae4169c69184"
  },
  {
    "url": "assets/js/361.66532dcb.js",
    "revision": "fe1285c91819d243e918aebc8acc84b8"
  },
  {
    "url": "assets/js/362.65f2b457.js",
    "revision": "e7b0b918822eb010d85c08a81f6baffb"
  },
  {
    "url": "assets/js/363.fe683d75.js",
    "revision": "6693be4b323f33f3baf27d62a29239ad"
  },
  {
    "url": "assets/js/364.13b15700.js",
    "revision": "30b5aba9919169b0bc50e409fb584857"
  },
  {
    "url": "assets/js/365.9e220da1.js",
    "revision": "dc9806d5f1ff582f33f4dda46e6921ad"
  },
  {
    "url": "assets/js/366.02d90408.js",
    "revision": "51fcdf12f2f521cf701779bab677aea4"
  },
  {
    "url": "assets/js/367.a7db95cc.js",
    "revision": "b3e7862c4d2ff50ba85e381b6ee30c91"
  },
  {
    "url": "assets/js/368.55fd4a19.js",
    "revision": "e59bed16102c7e98e7d05ff47b944a43"
  },
  {
    "url": "assets/js/369.10f87487.js",
    "revision": "6c3a715babcdb6403a62e36fc53b7e58"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.ffea4c8d.js",
    "revision": "d8414dc475d48624a6283ef417bcbb96"
  },
  {
    "url": "assets/js/371.d07da25b.js",
    "revision": "2dc02a0c64c74c692ad2bbba415778d7"
  },
  {
    "url": "assets/js/372.ad1ad612.js",
    "revision": "8df1b240e3903f7419f27d06bce9f729"
  },
  {
    "url": "assets/js/373.c1a36989.js",
    "revision": "68f4f91acc58a0fcda9af2740ac03779"
  },
  {
    "url": "assets/js/374.d6b74c61.js",
    "revision": "3543e86d2cc485bd8727cfea8563e559"
  },
  {
    "url": "assets/js/375.5c02f164.js",
    "revision": "a7b4275bf72d5248c875426621a61723"
  },
  {
    "url": "assets/js/376.8aa31a99.js",
    "revision": "7782ac7ea236bfb94cf3a1f6088a2a2c"
  },
  {
    "url": "assets/js/377.89c35a8d.js",
    "revision": "1db0924356fa199dd168099b31789d07"
  },
  {
    "url": "assets/js/378.79ee8a73.js",
    "revision": "fd8c5fc843e6dfee697776d98b16a1ad"
  },
  {
    "url": "assets/js/379.55a944a5.js",
    "revision": "36ef0df48e371ac7ce209a21579c160d"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.cc4069e1.js",
    "revision": "2a33dcc7c013a20f09aed393d98a396b"
  },
  {
    "url": "assets/js/381.bdfaa306.js",
    "revision": "29159f617f7dc32d4846dcbd508a31b8"
  },
  {
    "url": "assets/js/382.3dd22b66.js",
    "revision": "0b6a59e7c1384280bf9042e84315470d"
  },
  {
    "url": "assets/js/383.dbd58101.js",
    "revision": "bd0f228695b76888eb25e2efdddd98e4"
  },
  {
    "url": "assets/js/384.eec926b7.js",
    "revision": "a3355f1a75bbf289f96f380d613fe4be"
  },
  {
    "url": "assets/js/385.2066c04c.js",
    "revision": "503cdd3cde20a86dab584d33703a02dd"
  },
  {
    "url": "assets/js/386.4f7d59fb.js",
    "revision": "be2194c478ff3625bc4703a72eb91b05"
  },
  {
    "url": "assets/js/387.7de532b4.js",
    "revision": "4bcf361dd85e87a2ba4b5678fd7f565c"
  },
  {
    "url": "assets/js/388.9560d86c.js",
    "revision": "ee48ed422698a5cddc29280ff9fe9433"
  },
  {
    "url": "assets/js/389.9c1c16b3.js",
    "revision": "d1a8acfdd62a758bd1c4b28cf3595cd9"
  },
  {
    "url": "assets/js/39.92ebce3d.js",
    "revision": "7491a30d7f6e47c34adf40ad571ea644"
  },
  {
    "url": "assets/js/390.cd1aeffe.js",
    "revision": "79623db904b21eb70b1ca22370ebf289"
  },
  {
    "url": "assets/js/391.8ca86723.js",
    "revision": "d66117b30df2fa7e4d8bafc53dd0abc7"
  },
  {
    "url": "assets/js/392.9f913153.js",
    "revision": "0dce2b4f723b353cede59c3c330ceed0"
  },
  {
    "url": "assets/js/393.159fd864.js",
    "revision": "8128ddf7d7bf92482e69d85afb5ae75a"
  },
  {
    "url": "assets/js/394.b7213842.js",
    "revision": "2b7c4ee23334d4449cce3bd62c975660"
  },
  {
    "url": "assets/js/395.605dac53.js",
    "revision": "f3e49322d77c44682b7626b0ce3986b0"
  },
  {
    "url": "assets/js/396.b07d239c.js",
    "revision": "7df191cd14ad87d712cb24214f67f4ac"
  },
  {
    "url": "assets/js/397.d29e33bc.js",
    "revision": "5eb788ede7c36755e53a391ddabd8216"
  },
  {
    "url": "assets/js/398.bb4b06e9.js",
    "revision": "586f39db012b1b4d5a28b73135e3bd29"
  },
  {
    "url": "assets/js/399.96dd1c11.js",
    "revision": "744d73a815fdae93e9ac5c479ef7fcfe"
  },
  {
    "url": "assets/js/4.c5bcd50c.js",
    "revision": "57a1784a4380954506435b3501ded8ad"
  },
  {
    "url": "assets/js/40.f0cfe08a.js",
    "revision": "4c8f9c35e50b9036195320c6d1dfc40f"
  },
  {
    "url": "assets/js/400.c0c0717c.js",
    "revision": "f82d897f252c90d7a8014ff632c04089"
  },
  {
    "url": "assets/js/401.960d190e.js",
    "revision": "67720a15b42c802a86074e02ba0503e6"
  },
  {
    "url": "assets/js/41.84b21597.js",
    "revision": "a95530509fd275b335dd97c972957dd9"
  },
  {
    "url": "assets/js/42.c550169f.js",
    "revision": "72c0bf351cc90f53df4d5cfca5068b09"
  },
  {
    "url": "assets/js/43.4db73f0e.js",
    "revision": "fa4c99427b3fcba20bdc688478a23b91"
  },
  {
    "url": "assets/js/44.0bdbb0e7.js",
    "revision": "04f29b134be081772ef59da9ff03f3cd"
  },
  {
    "url": "assets/js/45.dddfc427.js",
    "revision": "d4dc74b2773a6d6c7ac4d4ff27c532f7"
  },
  {
    "url": "assets/js/46.765a06b3.js",
    "revision": "ae3f3b64496987ee9f021f47bbbea4a7"
  },
  {
    "url": "assets/js/47.2399a425.js",
    "revision": "9469eb4cc77292cc138fcf3152585578"
  },
  {
    "url": "assets/js/48.fccc1c97.js",
    "revision": "3c405a625a73be9a691cfe0198ddc4a2"
  },
  {
    "url": "assets/js/49.8e917ac6.js",
    "revision": "76af7d1b151c7700cc764cb28f8c52cd"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.d31a3c87.js",
    "revision": "4c2ba85a635d1e0c3aed579dd349aecf"
  },
  {
    "url": "assets/js/51.34ee273f.js",
    "revision": "5e6bd7dc9c29a8c10209db8bf64f7555"
  },
  {
    "url": "assets/js/52.0f85d616.js",
    "revision": "e498ffa4c194db5f9c22181a888befe4"
  },
  {
    "url": "assets/js/53.7ff228e3.js",
    "revision": "be5e503b8a4b439ffd54475797e9b723"
  },
  {
    "url": "assets/js/54.0e515f35.js",
    "revision": "bc8b42d0696cef2c6d5c4e09b261d61f"
  },
  {
    "url": "assets/js/55.d86f3ad5.js",
    "revision": "3ed22107ec2dce7988cf4bab14a0c413"
  },
  {
    "url": "assets/js/56.c1f23aee.js",
    "revision": "f3ca792a59ef9b59cdfc1fc1984514d8"
  },
  {
    "url": "assets/js/57.edb13cce.js",
    "revision": "10296323be09f318b7402a7336a05bce"
  },
  {
    "url": "assets/js/58.66e60b5a.js",
    "revision": "e4700d19cd3311a9f135193cc2901eb0"
  },
  {
    "url": "assets/js/59.9236f2fa.js",
    "revision": "109d1628d2263fb12a90d483d62267ab"
  },
  {
    "url": "assets/js/60.d79bdf8a.js",
    "revision": "03f60b0ab546685437ee018a8c122908"
  },
  {
    "url": "assets/js/61.aff66bd3.js",
    "revision": "358554befe50721d6f490a09fdd2d04b"
  },
  {
    "url": "assets/js/62.a0ebe015.js",
    "revision": "f85bba42ba361f5587dd606b29269bec"
  },
  {
    "url": "assets/js/63.56e57fbf.js",
    "revision": "fa68f9bcae7064787b2ba13dfa39bdee"
  },
  {
    "url": "assets/js/64.2f574911.js",
    "revision": "288acfe329fa9fd56731ff4eb716d07a"
  },
  {
    "url": "assets/js/65.9ba8db52.js",
    "revision": "9d5e5920e7a6671840700123cb0230e0"
  },
  {
    "url": "assets/js/66.db3c85f4.js",
    "revision": "05309198a3f290b5f694e3a4a04a05fa"
  },
  {
    "url": "assets/js/67.b5725a2d.js",
    "revision": "9b8238663961f5ae8ee85de56cd206b7"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
  },
  {
    "url": "assets/js/69.14572cb4.js",
    "revision": "cd0b33cf8da5f089a942de16cb8176ef"
  },
  {
    "url": "assets/js/70.2b42eb69.js",
    "revision": "6319abd2f69e95dd6432c31da66e4eb1"
  },
  {
    "url": "assets/js/71.4b845b3a.js",
    "revision": "5182c149d992d175ff18e020b21cac17"
  },
  {
    "url": "assets/js/72.23a0e58b.js",
    "revision": "6512ad0d2ba323925d3fe505a8ade228"
  },
  {
    "url": "assets/js/73.a2504b6f.js",
    "revision": "6069c13f71503581f69ddba9511f26aa"
  },
  {
    "url": "assets/js/74.fef97ae8.js",
    "revision": "49512bdab67e7c3b68eb2d3222b20cdc"
  },
  {
    "url": "assets/js/75.36eaa40a.js",
    "revision": "d6785154926b55f3acb4857cf4cdd67a"
  },
  {
    "url": "assets/js/76.1dcb71e0.js",
    "revision": "17ba62c3d2d7b2bcabed67550afce999"
  },
  {
    "url": "assets/js/77.0e733ebe.js",
    "revision": "efc6d5b9a2601de16ea0972358db5c17"
  },
  {
    "url": "assets/js/78.168c4bfa.js",
    "revision": "f497203fb7e52fb6536c8d20afbaa16b"
  },
  {
    "url": "assets/js/79.975598fc.js",
    "revision": "6eee875f842dfdad288feadd1b05900e"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.f81b865d.js",
    "revision": "b6fc0d5ba9e40272ac3a266242bd9140"
  },
  {
    "url": "assets/js/81.025684e4.js",
    "revision": "c2e76b379112d22e493257f52ed07614"
  },
  {
    "url": "assets/js/82.c5b79991.js",
    "revision": "cc16e0f0ff71298924458df8b814e86d"
  },
  {
    "url": "assets/js/83.7ff7f679.js",
    "revision": "ca8a838d67055a6ccbe993c7ed9c4108"
  },
  {
    "url": "assets/js/84.e7600b20.js",
    "revision": "1148f4d887405ed6b969d6b52ff1c9d9"
  },
  {
    "url": "assets/js/85.c0171591.js",
    "revision": "120b26c8ac0d2a3156b87ac1f428e82a"
  },
  {
    "url": "assets/js/86.2066fd35.js",
    "revision": "5659d9627c8fcb7756ea8ef3201046ac"
  },
  {
    "url": "assets/js/87.18e84ac8.js",
    "revision": "777cb2cb3fab029bc0a20a3603221a9d"
  },
  {
    "url": "assets/js/88.34803ff2.js",
    "revision": "bfc05738d9fc62680138c2e84ae22b8d"
  },
  {
    "url": "assets/js/89.898fb65e.js",
    "revision": "a9563c9b62c95035e46420b3aba898f6"
  },
  {
    "url": "assets/js/9.d393fc5c.js",
    "revision": "ad51d5f8ce79b519c54785745f662b7c"
  },
  {
    "url": "assets/js/90.5800dbe8.js",
    "revision": "c96d107cd326d4dd4bd479bf642c53ca"
  },
  {
    "url": "assets/js/91.ef0d5e97.js",
    "revision": "b455f90c9e76d0164e05b18bdfeb80b2"
  },
  {
    "url": "assets/js/92.d32d01b1.js",
    "revision": "97e3ff7744949aa6898c7230c1eb9ef8"
  },
  {
    "url": "assets/js/93.64315ffa.js",
    "revision": "7866fa35aba59ed04f49e1f22e9a1442"
  },
  {
    "url": "assets/js/94.e62ca9fe.js",
    "revision": "3268fcbf420b15cdce3f3d268a6a94e7"
  },
  {
    "url": "assets/js/95.aab53072.js",
    "revision": "9c6b09a30f7cd54a264bc93192f97fe7"
  },
  {
    "url": "assets/js/96.2abe4e10.js",
    "revision": "649524f4758dff4e075dd7b3b559bc58"
  },
  {
    "url": "assets/js/97.79f84fc3.js",
    "revision": "447d5e141668f4aa9f8a7d66b8d521fb"
  },
  {
    "url": "assets/js/98.00790181.js",
    "revision": "eba536902a8fd2c3ca4cdce99a5f2817"
  },
  {
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.b898608c.js",
    "revision": "cb50cfa86bf196fa2b9a2184bb84104e"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "1edb53022d57aedbbb8ba37cd45d9a11"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "6eb7204c71928108e4a704cfeac5e1fc"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "fb9d84bb755208c54de9e3ac6cfcdddd"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "4780da174bf54d5c5803babc61b7ca0b"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "c6d22cfa2a10343ec9cd3a4432c5ea93"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "11d924eb5e9ee9e0c76b154638005a10"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "70c131d21a7948ed15e62d74e8dd391e"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "4e7bed9e206e31729a2eb99d2f77bb88"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "3d1b8012e6b3c3bb6ccb78f6da5f64d4"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0ff0ca33f28629e57c07c7d3d20d46e4"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "d17fbc8832771c0cc43c396765901ca2"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "25d898fe7b69d1511bba53c9e9c30108"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "fd3ccaa75f9ba42e0a2f1583b5eb04b7"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "9072a3ba56ac86f1dc76261357869bc9"
  },
  {
    "url": "master/api/index.html",
    "revision": "6d62bc9f3245f3f873b808482cfb2cd8"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "493f2d3ffdcce106b3c10fb834be5f71"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "bd47ad4b114bee580f8bed2d73af8384"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "126b2b9e70f7f2e0c8a9d2581e6eb27b"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "9e6d2a629f668ce64ae6063e2f4245ec"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "d2f68cd21c39d5f1281b01a356b0c0de"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "01881de92df3e2a06425fd049790206e"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "b630385e30c5817f85d72e4fc474643d"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "766b39e1e41cfa3c0046f34df040ad40"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "68be68cd03e5045a589a3594850e59a2"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "5d0f51153d5cc43b2e4c96c1ed7115b7"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "b221134c3dc8f146746669146ce5b739"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "0e2a29f81c04eb61b2f162caba340b9f"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "c2dcf30411a39912ff1b1fcf41988f80"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "604553b3ad986a8899945970c511b11e"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "8c25cd42b4c6b6f2b32b87e7bc6a1750"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "33e33cc38805a9f4ef2ce78fb535d148"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "63f28717ba94553303c0f59af3b21ac3"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "8ae08f80b33159ae75bbb0d175b1acb6"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "0140992d05b1e2adc2513f654038d933"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "71c3f9866cd6c17306c617c02facc639"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "ea61e6793a9b4e7398332e690a3ba4bf"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "023cc4f54061a8562c37a1f616d90c83"
  },
  {
    "url": "master/packages/index.html",
    "revision": "b78cbcc6a45c308989992d6a561a7eca"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "b70a3700ed5b64637dee0194e7dc807c"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "b75adcdb4051593394983cd0b992ff62"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "f7766b06879495c6d3c2456451a5c135"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "b2678a22387bc4c88fed5a05ddde1d99"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "e54a1e396b10022041980abafa4c49d5"
  },
  {
    "url": "master/packages/views.html",
    "revision": "a521b10e391347b04fdb2aeb1e7af6e9"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "b26e7256c81ce9ddc392858d4b79c919"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "2c5a273d59f6603d94ae3e04e9c74cdd"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "dfdd1fa3a9e8ec3ec2b38a0d4028879a"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "e038c13555d140bc04daeeed068b0793"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "f1d80744f7c1a23813a2ca83f5bc6e7a"
  },
  {
    "url": "master/themes/index.html",
    "revision": "bb27eebff2d4c67ab729c21cb30d74c3"
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

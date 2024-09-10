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
    "revision": "40743a564b3200b9588bdb65fb8f35e2"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "b5a6ce20d2f44adea61788e11e81911f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "429bb2c1e4801a8bb75b74758dbd5b3a"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "6ba71aa6a0d35d399d847a1e709c81cc"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "698d99fdf89fa41ff2a0a966ed73f6a8"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "ff6ac74dfdb0e896a43b458dacf529e9"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "fe113770181de86ad900d5d271bbd77a"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2dcab5d2ee5ec03d6d127c56d2c5bb37"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "92e5cd9fa6f0202046541273a2a305da"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "34384ad1b519ba23e9dda5f4bea229a3"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "6ec79de852f995de0048996a08b84188"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "f0c29dc23a3b6704d801c4b939a5b8f7"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "61d9fc737b02704fb03bb6333a692fc1"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "1093d2be383715238252a531998bf197"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "51f41e1dbf538858c1e682dbf0a97722"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "608a6db38b1e8f0c2fc5a5ec0ebbce8c"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "ba4acf88cd8fb283f6aad131e18cee09"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "c256a645875e18ecba3f0aee07b0a62a"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "e3d3fa65efc7dc81a3f5c22ffb471c9d"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "e9bace50f3bdd23d261e336cce21e613"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "69b3fbe2b43876ccae680676cf1d1db1"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "a443f4d087d9297fd90a41e3508373ea"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "0e79753eff9e048998270f4f5f32b1d2"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5cab4167a4aad6cf98dc2ab47a083063"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "49a9ce0fb7e1e94729b44aba78c5290c"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "22acd8c4320c8c999a49f0b732731946"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "8ddecfde3f274815ce6e372046816c00"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "50a15b3e161cb58886ba8e08ca291b65"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "8f529a2bef2ab313e60401eab842a90b"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "4722875b5b3ce732828a6ff974f2c915"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "de925763df390308eb98304d0ba1a89e"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "4d07f1ed85596eb06c08b4d5c0c5f3c6"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "2c094f004932a2b50ed419861d001ba4"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "fdf1b60c142a2b4955fc8256e0424c84"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "940d5cb4768a3c13dca282af32bc8e6a"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "7316bc020dbff14c99f3a905571e2c92"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "be8c69a9f2ada4c1cfdd22442d6d79ab"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "3e0d7b4409b83404e3cebb332bec9ac2"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "8c670e832e506c8a2550444a720b8d8b"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "7d8ca9a0dce5a1038bf844841eb11eec"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "d8a4b693fad49a5ab330461303510db9"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "2394a098611475ed17ec849437b5b05a"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "f2555bbd3c073617b23ca817b499cf94"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "65c4dc68fed0e51ba75719d8acd9c318"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "d2999d690f1013983907c66d4d47785e"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "8318e69c40fb204ebd62a75244280e7e"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "53062e0d89baf94eff6849bf06c24529"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "bcdcf743c0e3dab2ab5e8335af56d322"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "f4d31ba4ff437b65c7526ee2d00aac99"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "d763cd4600f92558dc07a57c3a0f991e"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "0da29927c6ff8d662025df073cb4cb8b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "c396d1d090ba3bee7730e5901b45d3b7"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "a086c9a7b6ae3a58df0ec8384a5495b6"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0dda00b0cca1518d325ed0b4a91e4fec"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "073900112ee2d42b3859a199cec6b265"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "d3d42502cc529573200c2ecd583bbafd"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "0140cc99a365874caf412e4c208a6432"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5ccb040aa2cac13d7d20e9cc276bb064"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "23dde4f123796ad8ad75b1778608318d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "62ba62c7f582205f1f3c823e4d6eb0dd"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "3231dd8e9cf6a0f32f9d20d918c10498"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "56e5dbb75340320b77dc2e7a51d15c50"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "16f2c42a69ede896be8d09d2d9a22a80"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "0f92d8c88493dd8c16516240cda2eebe"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "355ff9003c5240e8a07a6687bdd28a8c"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "1c79f065f1d9587c87dcfc7e090cd120"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "1a8364f8c2167ac2f77c026fb00d8ed1"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "db7ef4cb2c9e5fc50616edd67fa8ab67"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "8fa7252887e146a37d400f217ad08394"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8395293de2347c48765f9e1e93af1a65"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "cf401ed30518e61e102b0ac75b128394"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "989518379b8dec8447865c3272bdcf49"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "9eb24fff68937c6ba60c7da203dd07fb"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "831e9dd4eb3635812b41b6a29536e3cf"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "2152e3ae172aaa73ab03d44b5553e7f8"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "857d3d4ad81f5b4bbfbc8713f78d15c6"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "aeb4ef8b8e180e63a8c120fca1e5fd3b"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "6a8da1b788b54f124459578100f52176"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "872228a9a8f48c39034f6f17c3aead79"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "c4579df83facf020be7e8b094141c50f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "09fc378f341e4899fd88a5196b8ecb45"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "53c34a80741f7ea84c871d925b1a8843"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a7bd1b91d2f45fba541309f88a6fc676"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "232f5d3bb6ff8551d4e555ef594ea4dd"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "44477b01831ea8df210976547b2b7ccf"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "6ef5a93a880706145a5e9f2d8e428479"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "d5f256d483cad054be401a5eb4d2b7ea"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "67ca1eab57d623fe693e0a46af7029a4"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "fc64b880d5d0c689d08e85ec7f18f26f"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "5827e58e46dd6fe22f1a7c9e9ec8512c"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "2b7cbd338b056839b020f39defe9927b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "33fd948803d03a1322c2f73d02847ef8"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "77db75291eef3fa223585d669224c53e"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "be34f380305772280093c844902c49ba"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "3f841fdd6247df1a483fbccd009ec95d"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "ccae6f5afd879b2d446ea4d657954eba"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "8703620845e10ba756cfedd895811a01"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "6837f239e75f44cbbec5d59d64a53ccf"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "21735fb9c0a13e2056501cd92bc2481d"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "40f0d97458008c914f9551e7c22917c7"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "75bc1e134856aa8bb498e48465466f32"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "6972b3fbf40e84df9892bd47ef85d4cb"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "60464f82c7a86bb9233233e9ed18f359"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "475365f072bccebf646c3145f156f47b"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "9c6182ec0c88856c128049aa924a13dd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5b4d4e7381fe24f34f96705f982fb55e"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e9aefbdeef78402a2d6691aeca14b4dd"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "e36f37e7c215b6bb12919a5aac4150d6"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c256872b2be87133813467d6d22a4b36"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "104aad5cd37375fbb86f7f0bb7cdb7bb"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c651f426d4d6536559749e9c6191b6ea"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "fdda223116f0be8ed5e8dba4800cab25"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "43079ab9bb74d8c7dc97034b4a9adf40"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "96582f4aeceb7efef97d53082ca54baa"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "580718f1ddd8a7ef03aa1f01e422b168"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "6c730a4d563dd25582100d942491a6b5"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9aa8e21ab5d4f4e1730fa3b920772066"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "849b0a822f9fd68bfc418863c85a4933"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "5fe07702d9e35430c971247d2103afc7"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "28fe5115160fdcc3df99110efa207ca5"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "5450b8e95a6006c0deb62f7018b2bf6d"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "b4b3b79ef61c666ef0e89d9382bb9b42"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "5ca16bb864a8995395ae7d5cdcccd1f8"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "4fc79319b561049e1edb7147f5818699"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "fb2579b7dc4df2ecd3425208fd8fce1b"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c958469d24cc978f75e9c07feb51afff"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "d3110248db1f10d29f0e83fc52a4458a"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "a2be162cb9d53bea962f806a8ee385d2"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "3d8c05e43b5a900a253d951de2d9fbbf"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "ec3202814d81b5d2f5d56e34baf64d7e"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "1fd551119b92142ade3df419df59dd5d"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "70befb199fa30042412add59053d8f60"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "f19b2c5ce4e7c30f9d22693c9ca6f916"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "eb76e036383dd36e634d25c507e8382c"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "888d4661b7058382acf2960850ae2dc1"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "2adb6356bad3ca726bf980cd3ee0ff3b"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "b4b3ef4fff634cf7289027c7bc861a20"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "b619f6b280effd0277d97ff3fb460acb"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "23673e21c7db1aa0b114c60b4abb5dc2"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "4e2ec6efb2f7128b4e139c4db1ce4ea5"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "555af71c6fccf4d77136c0822e1518bb"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ef9cf04e5f40bd684f80904656075a22"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "712d5249e2614f65b71ff73b37457fc5"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "22e80a4481bda710f0aca54125b418e6"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "a9f4e77f262b7109b2b250bbac447a73"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "59502e9741cb440b0f7dba8c0697efca"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "52b4124999d0eb1aab95f5b91be2182a"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "fcedd91e8297481e20ef01015dc4cc64"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "092ae8c7962834ef4de2ac9d75bacc7a"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "a4fba35d4caf875efa86b64707f28e92"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "b96b5137aef7755af0f0068eaf9aec60"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "672eb08b55e7337b0b908e070228739b"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "dee3925f14a598824655360855ba1b76"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "cc8d23201b3561bf98db902658263b1e"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "5297b1ca463cc85078bf49b54331b5d4"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "1bdaa3046dc5b7855542ec6b5b4a4eb3"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "d4b077621b82366b862dce5753b93dbd"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "78f91b387f4df8dc371083bcd1b1ced4"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "d3b80ae932b5460886460b23be9908a9"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "9125742cd67b5a77f708212da4ac36c0"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "6ced13466b080c2303be787aef430e45"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "01ecf952d7a83827786b94e47a1a5b8d"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "cee54f95fdfdb11e21f24958fda62700"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "812da4b659f520523e073de051de658f"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "86329c95e6dd4c17f3146ece6f0fcc0a"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "a3a855a90f5e001f5185921a5adc1de7"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "926fc659d323ddaace5930684f08e29d"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "1a6d3e93ac00d1829fc82e95b5685bdb"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "1891ff74b33dd9b3a2c3cac9d1fff1a7"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "6edf0410caaa39f0c7e50cc24aafecb2"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "f19f7536fbe3b92186bf4f098d68db71"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "b3e44138481d254e118591b8b97647bf"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "b30fb5e47c37e2ae14f9fdb0a65bc957"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "fabaae9d62b89713d4de72691539419c"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "00cd84b3e1775c01dd501a39a22186aa"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "5a790e99e9ef85977050a62e9052e7e5"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "5977a316b7189e8ee44ddc2dc362319b"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "c54a7dcc5ced3b84fb018676ce33fb67"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "be2b9a23e8e186ba1e19aa3cc4091b27"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "db242c8f78403c3257a6a66b0c1bb6a3"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "66f63166d3999520f336efa1d523460f"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "763c0a0cc73d99435d5b54f5cd96b43c"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "d56449964e66571466532be32bf234fc"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "495e66d80dc955b9e2d0cb30dec23a84"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "55cdccc183408ee5893996de8988a6d2"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "865221bda1bef70113aa9a108a1cb000"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "ccb5027dfed0880e1f1eb33302c5418a"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "8bef5a9df14309293543ff751b588c07"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "0d37afb51661eaf6b22abe905a247719"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "d997622d07ca09d8275ea758fffe84ee"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f1c7e738d98484a8ac76438499349976"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "57c6f9c122e58438ee8961554edf95bb"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "1064b5a1ecee139a0b0b0e5e7ba15929"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "4421ab9f6f20038626c8f82b1645fe90"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "19a16df07b35e1f42ce497f642760423"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "5b1382fd2eb15151ab4056c783c569d6"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "0569332261f8fa61bf35c3a749b04b60"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "4f89c36223f0ec459620b9d0bb11ec09"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "2e9c6abb6921cfe46fd26077d84ef089"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "e731f5984a7acd2597aa6478c694657b"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "59edeee6577cb924c062848cb059f568"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "95d30753107e095313bbd205f72916f1"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "3ead1b5ebdc898330a05c4338f803860"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "0682222514eba3d1bd6934f0f268617b"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "a9c77c2d39fe03e22629aa82dd6eea2e"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "3e98517a0790d27794c9cda526e786bc"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "e46fef005bc2b4443a989dea16f3a7cb"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "49a9d67095d35f648c94897df06ea6da"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "7e215e0899b27782151d09249860d3b0"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "4f59bec8c47ee0658635ba0e80528e10"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "7b0e33985899eecc2bd10c90d805373e"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "6e745e6f18225b6f6bf492f361565ee5"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "cce9d32bbc184831a7ebdf7922224bad"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "b47de70afdd9e53052f6f2ac26c86258"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "5f4dae7e2c2dee3058ee918be8a8fb46"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "b40a3d79a7803334be7b1cdf70c947f0"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "0127e4ff4253195da5aeaabf7a63cade"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "39c16cb60960c974804cf14640eb72a0"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "004d02e00f01c65db223897a1bf200bd"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "c17ee1e7961782dd8c0d1f1b695bca92"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "fd459e008e50b339d6ddc0e0c012831e"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "73ad2e1fd45e8cc3f1bb90b7ac45a08e"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "a836a99517d44126dcca76a0997f201a"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "5b142d3acf9c00ff9958c85d2e6cbc63"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "c059b157009d0c3de730bbaeb21023b0"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "7265f3a604e07545eaf0ea0cc620f82c"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "a0787d9aa84b83a34a1d0ebca1516fe1"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "593f064ee4a7077d7e70c26495d95f9b"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "6f2554dc17594cee088d012f16917af1"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "ee7dd58fcfdfea963f7c6ffcf1d1a00f"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "106c2b63ea5b62dc2d45592ec713a92d"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "39cfda1781ba4bfd33d3ecf5805243bc"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "a8d98026bb62a1fd5a22143827e4c0da"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "2f53eac44b6f6a67a023641939735283"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "f81a77cfba7d9e6d85a7de6f97dcdad7"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "0ce56a997a828abc3628d50b28dfd80e"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "b7484ad5e5e52f55d196bad2b33b0fc4"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "12b37c0dc7f16fc40aa3b683b0f0954b"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "c064b2fff0f22653fb21b056bfcc8372"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "28b684062cd43f5e26ddc2d5f583c954"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "0b6c0fe60d9aa4d0337d08ae24b0d305"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "288b46ffaba02aacdab611661cc778c7"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "b53ef54f81771a42bdddb51f5f867f0a"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "da0a9b39605639ff1f7d4e2d4bd440a6"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "80e70eb5b8f73f283f8b9d4c8867db54"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "6658a25092092c5984d8aaf780c87c86"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "e982061c06403f830f590122486b854f"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "4be52de4bbb06978558ef9ba8ce94218"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "ceaf9e51c5628d3700bbf5cbed65c0ff"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "27362b5e69052c61f110650f8474f382"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "07c96f0d4ce0f0ad3ab5cf387c9afa15"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "b6a4df3621340d4b9f2a87d899382eef"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "3d40c1364392eeb760967b3b05ae0e30"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "a08becc02d249675d008b9f5bad317b8"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "60426abe40ec1481881e8b49c4b2db27"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "248c27148b2395a5900e4592ebc17c85"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "6f8f3b31dd558ea155911b58f74943c2"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "7f4ce19b52a922b928f5a1e43e747956"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "3ba69cea3d9bf39ea96d570346c4040d"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "5f5fc8a74e82595465625738c52e27b0"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "704ff1302b516960442e00ea1f92eb85"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "40333f155aa32ace02d8bd8d7f4787bc"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "d5197a3c4f52a3d196e0a2008c600583"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "a1ca3986d2fca2b8e38d7b2809d56add"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "f39ed23de4a42b557a7d06c0e2f17f49"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "4ea1d2a3b771a631b8ccb2120587b213"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "6e321d17dca6c649560627ec7108f844"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "9fba40c11c99c10304a7dade928171ff"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "370d70a1ca5057e23aa81b40f42253c6"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "2ab0f0fa8d5e066d73cf322b5806c83e"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "b0146fa4327ecc37ea7d5731ffda0a43"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "5d5fa755ffc1658e0b29491af7058cf9"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "399581e43e5004d650b6c14b73e0e607"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "5a1a634392fd4342c9952f4a6e166aa8"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "761b0acf73ab4d931565518a56c37f73"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "18af93568ca32e532bcd1d5fbbf37cf6"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "b7175bdd2f30b9b9ddb4a32b0b76765a"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "98e429be746de9a9f15733d57045f93a"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "0ba8c6971e5a0c0b3928c707b57861dd"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "3f89044e5c47165e8a69d9d84d9e6136"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "26025dfc561cf1157867230141346fe4"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "43d7dcea6d643d56cc69e7f5b2c008c6"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "1fdbd87f30d7076cb8b30b31dbf8fd68"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "15d21c8834ff4813f31adac16efc6437"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "88eb8ae41588818b40fdb93ffd2b36bd"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "98da4baffb6f7f86883f265351ed860a"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "95a963c29b461fef6848bc54a21d6940"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "13df3579ac0ce65283abd133a7c48672"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3a2ad3848ba254b8a6b7b71860f9f379"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "59bd58dc6fb4664213fd739dec55b6bf"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "854acb9fb09bb8337c6c224f5d2bc689"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "cd9e26295c1a61aba4bae2691e596d79"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "2aab5359c64767a1d5e6f11f90c6fc9c"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "347d21ef9de1745a5617e736e1b8ea9b"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "1ebde5ad67ca3baed76683f9024fcd96"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "8d20a8aca229bed8892cb97b5a320547"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "37bb4f326206c6b1d0847ab67bbfdd55"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "3a3970b552467c03d91f415b6c961f0f"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "5cf1493470166cb0739cf314a6a287ff"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "433cc42d35fbb8b187858a55b022706d"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "b7183f1ebcd5d6a1984b2f6c23290c30"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "5c36a7fe8652ba8ff3978ec3c282cfdb"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "27f237ed34296c7765cfced9d67c46a2"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "25e45b414ae7c1664053eeb7f50c0f8b"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "27009e84dd75619b29444468be81a703"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "402e51a2a3add46092b3666f56a083fa"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "24caae2ef3fc7f5e66f0974653e6347b"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "e16a375ed794952566fbe1f35648f937"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "d22d5f842fd4a219317ab4afbd783941"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "905883fc8fa073b9166f337020061396"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "ee90a03a4c36712a5c0ca6962c9d40e5"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "3f3e2fc66065c4be3f7f23c7b79311dc"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "0cd42bb5408021620dbae76e0da3f819"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "a135bd269dbcacf4e3596f023014fe2e"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "b310191c32e0a015c87893e5e905ecc7"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "57199d5636d0369bc884b34241449028"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "7151d184ac641cee03af38616944d962"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "59778e0790f0d87b4d3172105dfcaf00"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "cd7707e1631d9c879839a16ca3192795"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "36689f1d3533bedfb22651f79d992d6a"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "ba0e28e88d2481e9c4a42f299485ebbc"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "192393830e49ebcbb2a17375edb4c01a"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "6617f16083341b2cf844d9b0859730ce"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "7f1ac7e06c45d6a174d1897d543006b3"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "0c90ff3b1c5119dc29754a29b4233487"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "3eb25f9c27ff4c82be3b7110aee4ae44"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "44115f0fa3188be9e905e2e5995f3405"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "373c13160d71426b87c723f239110b38"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "85e45913236d04f0e598fe4754116997"
  },
  {
    "url": "404.html",
    "revision": "66dbfaf2bc0d042a2a0671ff8e5af4ad"
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
    "url": "assets/js/1.76c5f4d8.js",
    "revision": "f3d6f94921dad4464a365ca7890b1799"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.70b894fa.js",
    "revision": "b1d096bd5c3105fb95595330c840f264"
  },
  {
    "url": "assets/js/101.73d1763b.js",
    "revision": "cb47b8c6384fe36a27ea968cff463d23"
  },
  {
    "url": "assets/js/102.9adda319.js",
    "revision": "5a128d45d1d931b8da99ea7f5e2b09f2"
  },
  {
    "url": "assets/js/103.068e3af0.js",
    "revision": "5cf9839fc8e8ddf38e2d9111bac256ad"
  },
  {
    "url": "assets/js/104.77f9e28e.js",
    "revision": "bcba924644505868e9b6e8e5bbaf5535"
  },
  {
    "url": "assets/js/105.2b011b89.js",
    "revision": "6c6be1b3d46585753adc4960ae7c5260"
  },
  {
    "url": "assets/js/106.0e8f1bef.js",
    "revision": "2a8451653fd147b447ed38967ed5c3a1"
  },
  {
    "url": "assets/js/107.d0057514.js",
    "revision": "09db44f0e5255b7d072b282b2fdd6704"
  },
  {
    "url": "assets/js/108.6e9d7378.js",
    "revision": "b004f8defbe3ee7be4cfc2272c4af0fc"
  },
  {
    "url": "assets/js/109.14bba74c.js",
    "revision": "f9103fb0540083336fc21065aee28bcc"
  },
  {
    "url": "assets/js/11.589caf18.js",
    "revision": "b30a8573a21bf4c5cb36554520719e8a"
  },
  {
    "url": "assets/js/110.2a13443f.js",
    "revision": "9b1ad30065054b579d8b995937cbccff"
  },
  {
    "url": "assets/js/111.17e79cbe.js",
    "revision": "da9f366dffc3752e3882478c8f71596b"
  },
  {
    "url": "assets/js/112.f91b84a0.js",
    "revision": "9d9268c8e928451655284afc21ba4d4d"
  },
  {
    "url": "assets/js/113.7d3a17f4.js",
    "revision": "aaa64f4cd30b9cc3d2be3f294678fed6"
  },
  {
    "url": "assets/js/114.37585659.js",
    "revision": "d55b51ca0beaf5cb3c35d6bf7f3da105"
  },
  {
    "url": "assets/js/115.942dc607.js",
    "revision": "898f775c86cf7a5422ec7e06bfc5bf55"
  },
  {
    "url": "assets/js/116.8268caa8.js",
    "revision": "4b88de0833c40d3bf74b2e499d72fd67"
  },
  {
    "url": "assets/js/117.5e2303c4.js",
    "revision": "6628b5b1a168c54647a246454193468c"
  },
  {
    "url": "assets/js/118.466d9bc1.js",
    "revision": "b6f4ae602999e2508fabaa432f69ddde"
  },
  {
    "url": "assets/js/119.ff0dcd70.js",
    "revision": "fc7b04f5a2278491d0868b7b9b22bdc5"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.2091d6a7.js",
    "revision": "3bd72235370f4a5a3b59dd6f9e3ea8ac"
  },
  {
    "url": "assets/js/121.566ae4d0.js",
    "revision": "359a3e13ebbf7aaccf1032b2dc547416"
  },
  {
    "url": "assets/js/122.76163310.js",
    "revision": "9dc16d6f6eddbac3db6ded21d4796a93"
  },
  {
    "url": "assets/js/123.fcd88043.js",
    "revision": "9d599df9625dc6a3cf25fee5551d5172"
  },
  {
    "url": "assets/js/124.941a18cb.js",
    "revision": "ef0198c9ae3d4f408c877d8ef57be1b9"
  },
  {
    "url": "assets/js/125.c7a0282f.js",
    "revision": "625681b5f66ebd7879d1a856b0fc04b8"
  },
  {
    "url": "assets/js/126.be36beb6.js",
    "revision": "398c68d3824969c55dd3720b80ac4648"
  },
  {
    "url": "assets/js/127.c998ddbb.js",
    "revision": "4dbac44d4aa639f8aabcd726a2a9aa27"
  },
  {
    "url": "assets/js/128.1e388921.js",
    "revision": "719d7a5b63350109f11fa16fe3e1e9ce"
  },
  {
    "url": "assets/js/129.44872891.js",
    "revision": "b9f4793d8078592f4331387775b62f57"
  },
  {
    "url": "assets/js/13.09bf5a2a.js",
    "revision": "94ba81ce4c1af436357e7f8a7c5d99f5"
  },
  {
    "url": "assets/js/130.b06b6c73.js",
    "revision": "698a9e9e98add51f26d7edb09d446a36"
  },
  {
    "url": "assets/js/131.554db9e2.js",
    "revision": "1065b3f230057a6fb8aff5e95c09a3d3"
  },
  {
    "url": "assets/js/132.8ee0acd7.js",
    "revision": "3b3327b56d5eac55905c60d426856ff5"
  },
  {
    "url": "assets/js/133.f5156d62.js",
    "revision": "b0c994698ea0d6c8bc06dcd66dbde67a"
  },
  {
    "url": "assets/js/134.d4a1857a.js",
    "revision": "ec6c7ab88e3fc26ab8d2f1b68c897d09"
  },
  {
    "url": "assets/js/135.11d2ed7d.js",
    "revision": "dfa151d4621c8fb0fa946fc7a3c48087"
  },
  {
    "url": "assets/js/136.d016efb5.js",
    "revision": "443abce0a89f043130a854d0f644b9c7"
  },
  {
    "url": "assets/js/137.0bdb0e21.js",
    "revision": "2e8c4e87e6bb696d5694afb292cf1c27"
  },
  {
    "url": "assets/js/138.bf05be98.js",
    "revision": "1cbb5570b392e0980f0031ba0b2adde7"
  },
  {
    "url": "assets/js/139.aec31e05.js",
    "revision": "c1653bd69868517c1b91bd124fec79d7"
  },
  {
    "url": "assets/js/14.6108c098.js",
    "revision": "60de395906d6d7820b561d09ced9f2c5"
  },
  {
    "url": "assets/js/140.c3535fbe.js",
    "revision": "1695d57dbab755821138f560ffef5bfc"
  },
  {
    "url": "assets/js/141.db4b2b15.js",
    "revision": "9a15db3aefc8f5bc6fa9b35fd6b60796"
  },
  {
    "url": "assets/js/142.335aed12.js",
    "revision": "4c36f0d7fc1b46e0a4bb52d6d836969e"
  },
  {
    "url": "assets/js/143.ff139a64.js",
    "revision": "1b02993ad2101fbe93ffec78916ec572"
  },
  {
    "url": "assets/js/144.e63d0424.js",
    "revision": "82815c038c1ef2491923132f4e1a8a58"
  },
  {
    "url": "assets/js/145.aff5befa.js",
    "revision": "49bd44bb2a3f1c82df7e432cd8cc4d04"
  },
  {
    "url": "assets/js/146.1f8c1d94.js",
    "revision": "cf40a59cf655c352002b5123c17e3471"
  },
  {
    "url": "assets/js/147.12184441.js",
    "revision": "76abf22e89d3bc19cf4d3871fa215eeb"
  },
  {
    "url": "assets/js/148.2a22d05e.js",
    "revision": "3868f9749f5548925166303257fb407f"
  },
  {
    "url": "assets/js/149.fcb8d976.js",
    "revision": "17ef6106342604646f70c9ad692902e6"
  },
  {
    "url": "assets/js/15.330d5c7b.js",
    "revision": "ae5b12a65ee1f68fc643fb54bb99e479"
  },
  {
    "url": "assets/js/150.78e1e2c7.js",
    "revision": "275075dd0b01a5b04bbb10d5daaaca4e"
  },
  {
    "url": "assets/js/151.45089048.js",
    "revision": "96f680b255ca3b81aa6a91d2b8f31304"
  },
  {
    "url": "assets/js/152.574472a9.js",
    "revision": "73b712662d44fe686ea62c78c4c8a6e7"
  },
  {
    "url": "assets/js/153.bd57b9ca.js",
    "revision": "ad47a408408d3a94e95e0a2773a48b1e"
  },
  {
    "url": "assets/js/154.1e932244.js",
    "revision": "2f8a018e65466fcdfa70031e45bc639d"
  },
  {
    "url": "assets/js/155.4de0047c.js",
    "revision": "eef3b82dfcb7d0a7acd594114a4b95f0"
  },
  {
    "url": "assets/js/156.1fe72699.js",
    "revision": "de827a100bf72eb0fda483c5216fd892"
  },
  {
    "url": "assets/js/157.23c6c6f8.js",
    "revision": "4393f81a19167b16960ca437451b3989"
  },
  {
    "url": "assets/js/158.d1b18e44.js",
    "revision": "3779fdb8674f90c257ac023fd916064b"
  },
  {
    "url": "assets/js/159.31326d3d.js",
    "revision": "6309147147c742d032a4a64f5fd80d58"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.ace8fc6a.js",
    "revision": "a61a0c480d0931843a3a0456726db1f9"
  },
  {
    "url": "assets/js/161.430043a9.js",
    "revision": "09b12538ebc09758510c9ddafaad3254"
  },
  {
    "url": "assets/js/162.a1cb6180.js",
    "revision": "35ab960748a4752e9287d01dc931074d"
  },
  {
    "url": "assets/js/163.f5d8b90e.js",
    "revision": "eafbf9d2a0b17b21f8d696f1377c28e7"
  },
  {
    "url": "assets/js/164.b1f7b241.js",
    "revision": "3a59394ea1cddb0d4c7e95d9ca881b57"
  },
  {
    "url": "assets/js/165.bcbcf1d5.js",
    "revision": "5ff09607b254017eba26ea6dd86d30d4"
  },
  {
    "url": "assets/js/166.b31284c9.js",
    "revision": "301f114d5f300bc118214fb4cb4170d8"
  },
  {
    "url": "assets/js/167.7a05895b.js",
    "revision": "f339085a82d15402e4a153d348348932"
  },
  {
    "url": "assets/js/168.5b567bf5.js",
    "revision": "00606bb73cf0d667198f4db5a437e20b"
  },
  {
    "url": "assets/js/169.19c5d365.js",
    "revision": "ec3062eec43bfc9712bcbf020be2d8d1"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.802ca6a3.js",
    "revision": "9280583b5f4559889b851216f9da39de"
  },
  {
    "url": "assets/js/171.3fba7db7.js",
    "revision": "e3a0281c8dc1aa1b677c286addab4634"
  },
  {
    "url": "assets/js/172.2451685f.js",
    "revision": "8f9ce083a5a07097ab121f7d9f5a1066"
  },
  {
    "url": "assets/js/173.a2e98e61.js",
    "revision": "a470bf861e52bc11ce35d227d903d155"
  },
  {
    "url": "assets/js/174.3bc9e113.js",
    "revision": "7c23cd001e3bc635e5f46d48d59dc70d"
  },
  {
    "url": "assets/js/175.cb0bcd81.js",
    "revision": "525edfdc8bcababe842797ac7f9adb3e"
  },
  {
    "url": "assets/js/176.0b59c7cf.js",
    "revision": "ce66e9d8778ec426059db14c195ba2cf"
  },
  {
    "url": "assets/js/177.8a488a08.js",
    "revision": "8c8f490cd32dee58ba186197f5564306"
  },
  {
    "url": "assets/js/178.5aeb5c1d.js",
    "revision": "5c4365387f96a9d7192ec091e9fec8ee"
  },
  {
    "url": "assets/js/179.94027166.js",
    "revision": "b4c55850a1e7a27ebe9f174b8ba46bac"
  },
  {
    "url": "assets/js/18.a69246e5.js",
    "revision": "11934cd66385c1cafde48e7ff9b1f987"
  },
  {
    "url": "assets/js/180.7ab7ba2d.js",
    "revision": "4ac4d598281fc8c7c426c42e95c6cdd8"
  },
  {
    "url": "assets/js/181.0d4d238d.js",
    "revision": "1cb4b5bc515c6d8122b1a9d5d6348370"
  },
  {
    "url": "assets/js/182.14b98314.js",
    "revision": "03c7487c2e9ad9c3acb4534f51e5341e"
  },
  {
    "url": "assets/js/183.73fed18e.js",
    "revision": "9800dbb042b7aa38a466aeee70663a42"
  },
  {
    "url": "assets/js/184.66ebc78b.js",
    "revision": "f0e11bc9fddf0c4b49a374ed4405053e"
  },
  {
    "url": "assets/js/185.78b8eb53.js",
    "revision": "e780d54e6ebadc3269a9fe274b85d96f"
  },
  {
    "url": "assets/js/186.88d4e6ba.js",
    "revision": "207693038dcf57bd6e74b04a4bb8de5e"
  },
  {
    "url": "assets/js/187.9056ab2d.js",
    "revision": "e407b5a54064e82f980700e661d11a43"
  },
  {
    "url": "assets/js/188.dda6a4e0.js",
    "revision": "707bfb3c68e1aadf3d0c7506f80f8dc1"
  },
  {
    "url": "assets/js/189.fe100b8f.js",
    "revision": "7955598afd2d3a64993e1d48f02f013b"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.4e2f63f2.js",
    "revision": "68ffa437bbed06a38a3639d0ffbeb67a"
  },
  {
    "url": "assets/js/191.523aa391.js",
    "revision": "09cba31f0bf74902454de38aeee6470d"
  },
  {
    "url": "assets/js/192.60e32a22.js",
    "revision": "189e2d6b2b975ac34b2723b73c541f0e"
  },
  {
    "url": "assets/js/193.bb32fc77.js",
    "revision": "e3470ee6b6e0dde185f67ff702e0f080"
  },
  {
    "url": "assets/js/194.f9c98edb.js",
    "revision": "67c8f0a89568fb83c9cf3f17ef6359b0"
  },
  {
    "url": "assets/js/195.c31e5f79.js",
    "revision": "e08b6474c3a438a432d1b63129169f81"
  },
  {
    "url": "assets/js/196.80d02a63.js",
    "revision": "40e2ff0517f9eb4c3662d8fec5043f5b"
  },
  {
    "url": "assets/js/197.5af69102.js",
    "revision": "d3d0ef95a62cfdd10b63e671febb1370"
  },
  {
    "url": "assets/js/198.72af57e6.js",
    "revision": "0ad08f617bd81b08b34895eb1028853e"
  },
  {
    "url": "assets/js/199.3ff88344.js",
    "revision": "d52a55f414aa170e114153104e62bf0d"
  },
  {
    "url": "assets/js/2.9c86865d.js",
    "revision": "c156fb4d631612aff795cfc2d42ac513"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.d8373a9d.js",
    "revision": "8e69d72c936dcef42250433763ec716d"
  },
  {
    "url": "assets/js/201.e024971c.js",
    "revision": "e1b3d19a8a492ed3bfb0eabdacb8a743"
  },
  {
    "url": "assets/js/202.c67d4365.js",
    "revision": "e65941619f3e61b8b064ce142a472a68"
  },
  {
    "url": "assets/js/203.cc9bbfe1.js",
    "revision": "2459eb331fdf6489429bdbcdd4076b71"
  },
  {
    "url": "assets/js/204.6931cbe1.js",
    "revision": "8d57fcc95a67bea7bafa0348ea83b80a"
  },
  {
    "url": "assets/js/205.4f4b54a2.js",
    "revision": "cf027163d42ec5fbbfb0c6570ecfae82"
  },
  {
    "url": "assets/js/206.1f0a186a.js",
    "revision": "fa57ccbcb6ffe314128b8900048044cd"
  },
  {
    "url": "assets/js/207.d34c5408.js",
    "revision": "6679cd81fff68c693f8aed4a5daf8878"
  },
  {
    "url": "assets/js/208.e6250b05.js",
    "revision": "3f7713bba90a803da3c0c64b3d2755d9"
  },
  {
    "url": "assets/js/209.9bd66743.js",
    "revision": "2705dd65014fcd05f721dda3c3b1403f"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.fd59ed28.js",
    "revision": "87dd9ef3ad4104d786be954bcf4cbcda"
  },
  {
    "url": "assets/js/211.80a2de04.js",
    "revision": "63f83fba0968e6ac4223a9a8cc48d70c"
  },
  {
    "url": "assets/js/212.d48ac123.js",
    "revision": "2a8ebac03075731d76d6f086c53d715a"
  },
  {
    "url": "assets/js/213.6ccc8b14.js",
    "revision": "af7a6f84ca92011538ddf0cefc52710c"
  },
  {
    "url": "assets/js/214.6101d2be.js",
    "revision": "16fadfb5c072aa637e6ec5acb319ed75"
  },
  {
    "url": "assets/js/215.fc1b27c1.js",
    "revision": "66a6a18180e438b893b5acc243ab7451"
  },
  {
    "url": "assets/js/216.29617587.js",
    "revision": "fb583f62274ac006209066e2815f0e76"
  },
  {
    "url": "assets/js/217.0341d291.js",
    "revision": "d8d811703581a3314230b9ba6ec34946"
  },
  {
    "url": "assets/js/218.2fa5278b.js",
    "revision": "fe46d5e8093e655abd438ceb942f7b97"
  },
  {
    "url": "assets/js/219.cff12022.js",
    "revision": "80be2959c46bace608608c6dace9238f"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.cbd202be.js",
    "revision": "7ce0d6fd15facf7f1b2099d35afb26ce"
  },
  {
    "url": "assets/js/221.b0e6e2b9.js",
    "revision": "d6df49903acd755b22e0a33a4e7832a6"
  },
  {
    "url": "assets/js/222.7c7de0f4.js",
    "revision": "05806afa97a1a95650495c320f01a33e"
  },
  {
    "url": "assets/js/223.89742502.js",
    "revision": "3e7298c5d60b8bf143b315df80375281"
  },
  {
    "url": "assets/js/224.7bb7039b.js",
    "revision": "dace2b45d451d04987217d69e4917b12"
  },
  {
    "url": "assets/js/225.d599c2ae.js",
    "revision": "9b31a965f55924dccf92f0dec098d500"
  },
  {
    "url": "assets/js/226.60189b00.js",
    "revision": "3521a6b1f5be16b8fadd0eaa9dc4e9a5"
  },
  {
    "url": "assets/js/227.ab4b82cd.js",
    "revision": "9eb0bad590cd473b5c17a2fb416798b7"
  },
  {
    "url": "assets/js/228.235732b7.js",
    "revision": "0cfd6120123a2e53185586bf15a3af6b"
  },
  {
    "url": "assets/js/229.ecf092fc.js",
    "revision": "4ceedcb7ef97316a60a39cabbea5374f"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.bac764d6.js",
    "revision": "641b2afaf6c2b12632141c798e8d5f03"
  },
  {
    "url": "assets/js/231.bbe42610.js",
    "revision": "40e492c74cf0a70774aa1fced5d1f7aa"
  },
  {
    "url": "assets/js/232.37ad2836.js",
    "revision": "e4d5d8ec1c44ff74ada6f9e7f747e8a7"
  },
  {
    "url": "assets/js/233.aba0cee9.js",
    "revision": "c2f6cbf2bdc47b82b668e380c7ba7188"
  },
  {
    "url": "assets/js/234.d382a799.js",
    "revision": "57044066a0f2c3c90b2fd6a9286c4103"
  },
  {
    "url": "assets/js/235.a5f28357.js",
    "revision": "b95cc5e0b3133d19302ebf1739532c2e"
  },
  {
    "url": "assets/js/236.6525c006.js",
    "revision": "917578bfea04a89b291f307c641972b4"
  },
  {
    "url": "assets/js/237.55142dea.js",
    "revision": "fdc3ca92b13dcbfee5bd05fc0245b4a4"
  },
  {
    "url": "assets/js/238.8ba313b3.js",
    "revision": "55e68fe4e02c00e5678334cd0c413636"
  },
  {
    "url": "assets/js/239.ca827395.js",
    "revision": "dcc25d2da2008c2ed8ef528dace27182"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.cd335329.js",
    "revision": "5b5cdc8746f31dec6cb12593c32be127"
  },
  {
    "url": "assets/js/241.cd2d5791.js",
    "revision": "74523ec54f6c7a136560520f8da43cb4"
  },
  {
    "url": "assets/js/242.ec7f433f.js",
    "revision": "7a023a5cd3969b20cef340c6b2f01346"
  },
  {
    "url": "assets/js/243.98f26d9b.js",
    "revision": "59006c375944690514110c32450204f7"
  },
  {
    "url": "assets/js/244.92902994.js",
    "revision": "9acde9152559ca9c73fe7bb7aa312ed7"
  },
  {
    "url": "assets/js/245.21a309dc.js",
    "revision": "a08b18a4dd21a29b8b99d412b153855c"
  },
  {
    "url": "assets/js/246.cf8a887e.js",
    "revision": "19c8da1045857b8f8d6fb7d8bf3beb90"
  },
  {
    "url": "assets/js/247.2b9ff76b.js",
    "revision": "83415faee96a6c1913a46db91cfea9fe"
  },
  {
    "url": "assets/js/248.141a6bf2.js",
    "revision": "aea4450e163b2cdd3bad7f8672f4747f"
  },
  {
    "url": "assets/js/249.234bbf7d.js",
    "revision": "0e25b893adf23b11fc1307e8606f22bf"
  },
  {
    "url": "assets/js/25.6c2742ab.js",
    "revision": "bbda7bc66f63b24c442f3b7cdfe17ac2"
  },
  {
    "url": "assets/js/250.9e0fdb5e.js",
    "revision": "dc42998a786f549c32111c6a70333751"
  },
  {
    "url": "assets/js/251.a930d57e.js",
    "revision": "d308a573a9f3612f1878fa08a3098ab4"
  },
  {
    "url": "assets/js/252.d7533401.js",
    "revision": "9a1a101051e82c19ac99dffc9bf49094"
  },
  {
    "url": "assets/js/253.bca3066e.js",
    "revision": "7936ebcc8d0a3c6c74707f801557aa07"
  },
  {
    "url": "assets/js/254.96763e1a.js",
    "revision": "2d61552c5fb0605585ea576680bb5ad1"
  },
  {
    "url": "assets/js/255.5849ee29.js",
    "revision": "d0cab282fac4e4b1ddad098bd4aa83ac"
  },
  {
    "url": "assets/js/256.0f9826f1.js",
    "revision": "3a48e4bf8aaeca12a4fe3ded89785f8b"
  },
  {
    "url": "assets/js/257.d2e44b9b.js",
    "revision": "257716adc54b98810585ba90f144f6cc"
  },
  {
    "url": "assets/js/258.eab50749.js",
    "revision": "f94eb590a244001b5341f9b25be655ef"
  },
  {
    "url": "assets/js/259.033c0290.js",
    "revision": "5e0a76061f9bb7b780a7554cc5faec3c"
  },
  {
    "url": "assets/js/26.983925d2.js",
    "revision": "c774f1a563d9c533a584bf4ee36a1d5b"
  },
  {
    "url": "assets/js/260.906d9861.js",
    "revision": "9788ce26da111c7cece35b613ac3d093"
  },
  {
    "url": "assets/js/261.73d651b0.js",
    "revision": "080b735b25154019340d1ce54e831911"
  },
  {
    "url": "assets/js/262.588348cd.js",
    "revision": "3f7ef70ea335afae7ce7feb6d2a5615d"
  },
  {
    "url": "assets/js/263.9e406ad8.js",
    "revision": "618eabc95ccb5b1afc7d03518f45cf15"
  },
  {
    "url": "assets/js/264.be2d545b.js",
    "revision": "9951cbfee7b5468e5013d947c2652ba4"
  },
  {
    "url": "assets/js/265.d75bfa6a.js",
    "revision": "3281d9057bee29c7518d5bc7ab2239d5"
  },
  {
    "url": "assets/js/266.6d958fde.js",
    "revision": "4d1a7486dbee9ea0a09120909a2545f5"
  },
  {
    "url": "assets/js/267.eaf513dd.js",
    "revision": "81a8dd0ef770e759c75eb67bf5bf3d2a"
  },
  {
    "url": "assets/js/268.8d22ce24.js",
    "revision": "67f574310c53e1577407b0cb8b1f505a"
  },
  {
    "url": "assets/js/269.a2242b74.js",
    "revision": "9c6be010203af6e15e1b0940dde28383"
  },
  {
    "url": "assets/js/27.b11ead76.js",
    "revision": "cad92440ec564e8ebb19d6b23bbad8c9"
  },
  {
    "url": "assets/js/270.48d90c33.js",
    "revision": "d9f5d3ae39f6f038786e255748021948"
  },
  {
    "url": "assets/js/271.8de6fbf3.js",
    "revision": "2b62b3fbfba385f238753871836a1a44"
  },
  {
    "url": "assets/js/272.1de46918.js",
    "revision": "df136c5bc8c5b42202f5ad0c06e767ce"
  },
  {
    "url": "assets/js/273.5fb81fd0.js",
    "revision": "ec4988d922ae19c46e60ef73236b009a"
  },
  {
    "url": "assets/js/274.3c0763b5.js",
    "revision": "8036cad6fadfca7cf1ca1121f475ac3b"
  },
  {
    "url": "assets/js/275.294206f6.js",
    "revision": "3b6feebecd8b174bdc2b83b0294a401a"
  },
  {
    "url": "assets/js/276.bb2310d0.js",
    "revision": "c8a6ae832280b0acb08506b17ee5d06c"
  },
  {
    "url": "assets/js/277.f9b1c0f5.js",
    "revision": "51d38b0021349ecb3e9c35b018e71f16"
  },
  {
    "url": "assets/js/278.12bdfaf4.js",
    "revision": "327efb4cbf22a1b34916290f3c9a3202"
  },
  {
    "url": "assets/js/279.b5c77e94.js",
    "revision": "ebd4e5e4fdc4ee95ea4dacd7f1821072"
  },
  {
    "url": "assets/js/28.8bab9e74.js",
    "revision": "b6b1a8c39d7c4a2c0f2324c6f4ceeb2e"
  },
  {
    "url": "assets/js/280.90a8f84a.js",
    "revision": "0223f9b7f8af3be30a53064ee3e1cfc4"
  },
  {
    "url": "assets/js/281.f49d6b8e.js",
    "revision": "ad768ec0acf65702444d524eb5186003"
  },
  {
    "url": "assets/js/282.2ad1de57.js",
    "revision": "ec8673f5bed0adfb43a5550cd681763c"
  },
  {
    "url": "assets/js/283.f9dd9036.js",
    "revision": "8e3d7ac5a13a441b02f1fe7572147a4e"
  },
  {
    "url": "assets/js/284.4c91815b.js",
    "revision": "e1beeb3a8bebdbc631f43ad2c2f3b4a4"
  },
  {
    "url": "assets/js/285.27838cfe.js",
    "revision": "48330247de44c0c0ffad2fe77a1e343e"
  },
  {
    "url": "assets/js/286.003c4311.js",
    "revision": "4557fbd42f2f02164425112c17973283"
  },
  {
    "url": "assets/js/287.25f10514.js",
    "revision": "5412a738a0bc7cc4bda234aca3f12e61"
  },
  {
    "url": "assets/js/288.34a59434.js",
    "revision": "7c3eeaec788179aa01e869d9cfadc5af"
  },
  {
    "url": "assets/js/289.0ebccaac.js",
    "revision": "e24b85fc570fa13e1c56f6e4ff25a726"
  },
  {
    "url": "assets/js/29.d2ced168.js",
    "revision": "9f5aca589ce78b823669016f7e9df17c"
  },
  {
    "url": "assets/js/290.0707d643.js",
    "revision": "9f27cb01935157cb3a939317a2cc0429"
  },
  {
    "url": "assets/js/291.a0e55fa2.js",
    "revision": "871319ac58a85ccb62171a5d89b7915a"
  },
  {
    "url": "assets/js/292.63e58e76.js",
    "revision": "cf538b58d8a6e751053021224e5fd897"
  },
  {
    "url": "assets/js/293.e39b6508.js",
    "revision": "c8c7fdf41af9cb3364c7a5a5f5e4e6e7"
  },
  {
    "url": "assets/js/294.842a4b4a.js",
    "revision": "17676898b3e76a13f87a6928fd746e12"
  },
  {
    "url": "assets/js/295.bcc9db58.js",
    "revision": "98aed2199fa59e316d6fc48b101227ea"
  },
  {
    "url": "assets/js/296.403f8254.js",
    "revision": "0c105650721fafab6e8accf3c51224d6"
  },
  {
    "url": "assets/js/297.5fce278c.js",
    "revision": "6c3c69c1a3ddd27813567f66953bd0c3"
  },
  {
    "url": "assets/js/298.a8fb34c2.js",
    "revision": "d6f8df4f1b6c7d7bf090c535224c5ef9"
  },
  {
    "url": "assets/js/299.b88cb020.js",
    "revision": "45993ca5c5a8d44ecb34f990d9b86a4a"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.9516b4ba.js",
    "revision": "d7dca7d7e9a900810d206bde04195ec5"
  },
  {
    "url": "assets/js/300.40daacd7.js",
    "revision": "9462d0879a845045ae0aae0ac905f1f1"
  },
  {
    "url": "assets/js/301.eb4561c0.js",
    "revision": "318e9fd028b6a15b2f9e7c2248095cef"
  },
  {
    "url": "assets/js/302.9fd87884.js",
    "revision": "41bd3353c3fb17c9085a017130632859"
  },
  {
    "url": "assets/js/303.0f13392a.js",
    "revision": "96b869ec7a1ebf6b7c0c036cb1e2314b"
  },
  {
    "url": "assets/js/304.c04b79e5.js",
    "revision": "511b51407ac5765631536deb1e764b78"
  },
  {
    "url": "assets/js/305.ce8a7d85.js",
    "revision": "6a6b1502c1304377b13196ed928c8af2"
  },
  {
    "url": "assets/js/306.d4f8e14d.js",
    "revision": "dcdf4760af3df0d3403d82d64358bbd3"
  },
  {
    "url": "assets/js/307.16c3103d.js",
    "revision": "a8ee3b75babab65ccdcaf3acd45c56b9"
  },
  {
    "url": "assets/js/308.03519414.js",
    "revision": "d9c9cd5775d7501dec39b10d7b2da837"
  },
  {
    "url": "assets/js/309.e473e8e0.js",
    "revision": "475d37f01e7078ffa402ad84663d8cc9"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.5617ef28.js",
    "revision": "50e5bfacc259ac3f892f570388fa56a7"
  },
  {
    "url": "assets/js/311.fd73c30f.js",
    "revision": "49d7846055da77f75fadedaf04c65392"
  },
  {
    "url": "assets/js/312.f19bca84.js",
    "revision": "24d8840f78f5b1f89c82a975917e5ecc"
  },
  {
    "url": "assets/js/313.ebc2f236.js",
    "revision": "697441b2a8edc2e32f7f6677ade46f95"
  },
  {
    "url": "assets/js/314.0e860cca.js",
    "revision": "a74ec920639841dd79797dfcb78b7f55"
  },
  {
    "url": "assets/js/315.67d8308c.js",
    "revision": "456293e692d0d92b35abebd619ea553b"
  },
  {
    "url": "assets/js/316.802288d8.js",
    "revision": "81c147fad7cb971df58b858724eb27e1"
  },
  {
    "url": "assets/js/317.62a4d304.js",
    "revision": "98fa8b2d6a2cc06b7e55143077cbf9bd"
  },
  {
    "url": "assets/js/318.e08a8510.js",
    "revision": "ebc7b004f9a155296c47c315de4512bb"
  },
  {
    "url": "assets/js/319.0f720d24.js",
    "revision": "920e15d678dc2a9590cd8df97f12899c"
  },
  {
    "url": "assets/js/32.a41b5f2b.js",
    "revision": "8d24c4c8ce8ca4be9abaa6be7e9bb290"
  },
  {
    "url": "assets/js/320.87a69c46.js",
    "revision": "219f321c93819bcd9a604a3f7c97909d"
  },
  {
    "url": "assets/js/321.44d904ab.js",
    "revision": "833718383cda0be05167ec55082906a2"
  },
  {
    "url": "assets/js/322.e425d58d.js",
    "revision": "a0ec2dd4ebc3e5c8e71324018215c8d1"
  },
  {
    "url": "assets/js/323.c08614bc.js",
    "revision": "d26fca703c3083744a3c29037e62524e"
  },
  {
    "url": "assets/js/324.23daaa9a.js",
    "revision": "e8bb6f722aba349ca2fb631a25ea77ab"
  },
  {
    "url": "assets/js/325.c4fc77ec.js",
    "revision": "5ccabff4b4d6d91ef91830f5f010ba5b"
  },
  {
    "url": "assets/js/326.31eb1df8.js",
    "revision": "dbe575f4a9d52dce38c48da9d3bc70be"
  },
  {
    "url": "assets/js/327.3c552c0e.js",
    "revision": "f96dc9f251ccb04ff2ee027dccabe5fa"
  },
  {
    "url": "assets/js/328.a5ae6ddf.js",
    "revision": "8183b24cf87c392f22d331f56c124257"
  },
  {
    "url": "assets/js/329.25179e79.js",
    "revision": "ba472eba97bc00e9e6645d8869b12110"
  },
  {
    "url": "assets/js/33.f22fa451.js",
    "revision": "348c067f373ab60c1101d5e5dd8de199"
  },
  {
    "url": "assets/js/330.5858c564.js",
    "revision": "922a9d1b06db6b7854f279918438c19c"
  },
  {
    "url": "assets/js/331.63bd1fc5.js",
    "revision": "003e8fb8e98ed9f266e71273f0e51de1"
  },
  {
    "url": "assets/js/332.820869b8.js",
    "revision": "fa48870bdad6796ee3ffe336a807e925"
  },
  {
    "url": "assets/js/333.71c6e94f.js",
    "revision": "7a7c92e8ab935e731da751effdb14c2a"
  },
  {
    "url": "assets/js/334.a5457111.js",
    "revision": "27676e37367431e28975a542711cffd1"
  },
  {
    "url": "assets/js/335.96fd1bf3.js",
    "revision": "88944dbfb8d12535a9f76dcbea0ad235"
  },
  {
    "url": "assets/js/336.09c9b2dc.js",
    "revision": "ab3e2c469f48e235e815d7c2048cbbad"
  },
  {
    "url": "assets/js/337.90d268a8.js",
    "revision": "a6f93e3191106f473b092d2322c3789b"
  },
  {
    "url": "assets/js/338.6e9540cb.js",
    "revision": "8697f16b7dcd03d12ace9c608e07512e"
  },
  {
    "url": "assets/js/339.7b52faa1.js",
    "revision": "e648fc691bd93af34a9b3af3d240435a"
  },
  {
    "url": "assets/js/34.8b9c2e6a.js",
    "revision": "6abe209947af16b247402d011fa40790"
  },
  {
    "url": "assets/js/340.b3e8ea67.js",
    "revision": "61236e948f414e9778ca95bf5b02379b"
  },
  {
    "url": "assets/js/341.f849181d.js",
    "revision": "f1b7f7df28dd1015855f781ecb224f83"
  },
  {
    "url": "assets/js/342.aaccd99d.js",
    "revision": "9c30ad1bc5916ef67b8cf66f8117f5da"
  },
  {
    "url": "assets/js/343.b1c6c81a.js",
    "revision": "799817bce81fcaaf0ebf38becbc81aa9"
  },
  {
    "url": "assets/js/344.346ac516.js",
    "revision": "4c72ef69e1e513688ec5e6a2a2109fd2"
  },
  {
    "url": "assets/js/345.49402a0f.js",
    "revision": "1eeb903fa422a7faef43aa21fe5fa97a"
  },
  {
    "url": "assets/js/346.3efa51a3.js",
    "revision": "37ae1b3680cf968fe8c30a9daa7e8371"
  },
  {
    "url": "assets/js/347.34c09686.js",
    "revision": "568508335c3a4745b73383f16c691fff"
  },
  {
    "url": "assets/js/348.f0d4335d.js",
    "revision": "d019e3696737ee09fa1ba2eab68f02b6"
  },
  {
    "url": "assets/js/349.0730465d.js",
    "revision": "9fd92d0a79305d6c3d10793f3e07c386"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.2084ccd6.js",
    "revision": "2eae51abd8a25a781ee9a63069832450"
  },
  {
    "url": "assets/js/351.907ea7a5.js",
    "revision": "ecb5f94ede041f6a9fcb87673b49ef9c"
  },
  {
    "url": "assets/js/352.47e66bf9.js",
    "revision": "3cbf52cc5ae56206c1a0539dcf329161"
  },
  {
    "url": "assets/js/353.d6456cff.js",
    "revision": "69e7d4c13ba9527be1ae15ea5435f593"
  },
  {
    "url": "assets/js/354.d1293a75.js",
    "revision": "1fe2f1e84043301d95abb58abf6b536b"
  },
  {
    "url": "assets/js/355.f0138630.js",
    "revision": "a840347cb1ae63a897f070a03075773d"
  },
  {
    "url": "assets/js/356.e15ae8fd.js",
    "revision": "65510dc081a298c6ec70ab132c3c7d3a"
  },
  {
    "url": "assets/js/357.53037a76.js",
    "revision": "3f12c19a6cd67797d28a7ab8b3d364ca"
  },
  {
    "url": "assets/js/358.c4482809.js",
    "revision": "ca36cad9ba2a72fae66e742f79e223c3"
  },
  {
    "url": "assets/js/359.3910012c.js",
    "revision": "b0b4b28920bc46520d1338f4ba09ae73"
  },
  {
    "url": "assets/js/36.76a09993.js",
    "revision": "0694d651183fae5182ed2d490b9b2b9d"
  },
  {
    "url": "assets/js/360.050464ef.js",
    "revision": "d8d979d89b020783f4a69e020d08ba57"
  },
  {
    "url": "assets/js/361.a79b4587.js",
    "revision": "461a8d06ff6fd38e48b9132dd60ebeb5"
  },
  {
    "url": "assets/js/362.1e4fa684.js",
    "revision": "6a7f48873ae787d11e5a53be07d3806f"
  },
  {
    "url": "assets/js/363.d25b6ff4.js",
    "revision": "a3eccc576f6cf95b2983e6d724a20616"
  },
  {
    "url": "assets/js/364.fc945a5b.js",
    "revision": "d2615f4e78dc7cf8bfdc5ac874897b80"
  },
  {
    "url": "assets/js/365.cf2c5b54.js",
    "revision": "6749710924cddb1d7cc836d0a481d41c"
  },
  {
    "url": "assets/js/366.14bbd2f8.js",
    "revision": "1d874ac4c139d4d26a468439060f1bad"
  },
  {
    "url": "assets/js/367.7bfa6e5b.js",
    "revision": "be1293badabdfa904a3d51514ff8c7b5"
  },
  {
    "url": "assets/js/368.a52016a7.js",
    "revision": "af54966dc12300a42c1d2be33e3a1bda"
  },
  {
    "url": "assets/js/369.00a2751d.js",
    "revision": "8fdeabe4c1437503f7f06050d53a7f59"
  },
  {
    "url": "assets/js/37.4e502ea7.js",
    "revision": "9494028651cc1d5c156909376dde2967"
  },
  {
    "url": "assets/js/370.d011b0ce.js",
    "revision": "41b2e27d0534250c12aa7c369c09bb52"
  },
  {
    "url": "assets/js/371.adb8a52a.js",
    "revision": "36c1e0c1f99c386025929090656187e5"
  },
  {
    "url": "assets/js/372.50fdb02f.js",
    "revision": "076aa9aee1099decefd8bafff5d3ff64"
  },
  {
    "url": "assets/js/373.69ef99ae.js",
    "revision": "5252d9f19eb3339b4c95d00eb3f62ddc"
  },
  {
    "url": "assets/js/374.64ac794c.js",
    "revision": "10f13012cd340cd3803e5a3431c6bab9"
  },
  {
    "url": "assets/js/375.135d3e2e.js",
    "revision": "691855de8b35c09372d81d7db6efb662"
  },
  {
    "url": "assets/js/376.e1bb33f2.js",
    "revision": "53be0a18798ce4eeee0719dc854cb778"
  },
  {
    "url": "assets/js/377.95d23647.js",
    "revision": "f801dec35d691d8219c557021a7fc006"
  },
  {
    "url": "assets/js/378.cd600b8e.js",
    "revision": "2f9821cc91f0754376e412a5795a1b3e"
  },
  {
    "url": "assets/js/379.38bb4e37.js",
    "revision": "4e637212c9de3e6b2018824b71f5a91c"
  },
  {
    "url": "assets/js/38.075464cc.js",
    "revision": "a586cc2a247893bf0b3a7ee3b3db2de2"
  },
  {
    "url": "assets/js/380.00f2cbc5.js",
    "revision": "c5856cdfe8d1d59da79adce5c5fb73f4"
  },
  {
    "url": "assets/js/381.226e1520.js",
    "revision": "7f300c15348ade0ec22740745d7ad77e"
  },
  {
    "url": "assets/js/382.c8544921.js",
    "revision": "182ddeb98198fa700b43ed6ead409e58"
  },
  {
    "url": "assets/js/383.e999f213.js",
    "revision": "55e8964e30ffb4bf6029c4364af7a7c1"
  },
  {
    "url": "assets/js/384.e4b1f116.js",
    "revision": "6c840b5f8d6439cc92d57ed9a2597d77"
  },
  {
    "url": "assets/js/385.03de4e2b.js",
    "revision": "8287e930268193d31991182fd0a162d6"
  },
  {
    "url": "assets/js/386.4a9d131a.js",
    "revision": "16a793d36ce34909186d4233accaf43f"
  },
  {
    "url": "assets/js/387.a443fe9b.js",
    "revision": "b678e43c754ea6e1b5911584e3c074eb"
  },
  {
    "url": "assets/js/388.1c3eb107.js",
    "revision": "3e02d0fdb85c4fafb58e2d37548eb625"
  },
  {
    "url": "assets/js/389.09b1b053.js",
    "revision": "0bb2ef31a061adf71e9457e752c8904c"
  },
  {
    "url": "assets/js/39.7e58d005.js",
    "revision": "eda2a205af7fd4ec141fc582b9c24c00"
  },
  {
    "url": "assets/js/390.8d2f5831.js",
    "revision": "89859e1f660475b2c8e6823f90e6a4b3"
  },
  {
    "url": "assets/js/391.41cafbb2.js",
    "revision": "ee1f3b3744895bad3f5112563007a65d"
  },
  {
    "url": "assets/js/392.ff455b5b.js",
    "revision": "3258687f61e1462ff370435707646275"
  },
  {
    "url": "assets/js/393.889f4f65.js",
    "revision": "1896bbd8de70835de2a921b7fbec9cb4"
  },
  {
    "url": "assets/js/394.0fb12ad5.js",
    "revision": "ff42c52a5ca67748570521856fbb6cca"
  },
  {
    "url": "assets/js/395.dce45bf5.js",
    "revision": "1e5c253748d5c775121fa261492ec44c"
  },
  {
    "url": "assets/js/396.fb7ef532.js",
    "revision": "700480ea00eb75ebcdf688a8cafac4cd"
  },
  {
    "url": "assets/js/397.523d25ee.js",
    "revision": "1cf321789fef0570aebce1f8679126e4"
  },
  {
    "url": "assets/js/398.506685ce.js",
    "revision": "274c1283aae00eb142dc1723dd7b2c09"
  },
  {
    "url": "assets/js/399.e3436b9e.js",
    "revision": "89b77f5d8f59e81d39a1dc0b33cd6ed7"
  },
  {
    "url": "assets/js/4.886cf4a6.js",
    "revision": "56591bbfa62878a85b7910820edabb7b"
  },
  {
    "url": "assets/js/40.93f895bc.js",
    "revision": "65f862984ec569cdc1d041593f35c976"
  },
  {
    "url": "assets/js/400.4cb31f82.js",
    "revision": "dd385052b8c945c1b210a61357ccdfa6"
  },
  {
    "url": "assets/js/41.11b28f19.js",
    "revision": "02005ba956cd0d9a8256cce1a44082e9"
  },
  {
    "url": "assets/js/42.abbdf04f.js",
    "revision": "9b79b8008d7c4ef08448773afa054ea7"
  },
  {
    "url": "assets/js/43.a91f96d7.js",
    "revision": "c535098c8f743a30414313025e55e21c"
  },
  {
    "url": "assets/js/44.6c498ee4.js",
    "revision": "9075f303843f45b20e215de3f87e6186"
  },
  {
    "url": "assets/js/45.bc2e99ac.js",
    "revision": "29f4bda12b0bfa538ca721bb29287297"
  },
  {
    "url": "assets/js/46.69e0db9e.js",
    "revision": "8fb5fdca59e723ddd893af533169f69d"
  },
  {
    "url": "assets/js/47.2399a425.js",
    "revision": "9469eb4cc77292cc138fcf3152585578"
  },
  {
    "url": "assets/js/48.1344d82d.js",
    "revision": "548a27112b8a18863b736dbbfeb00b83"
  },
  {
    "url": "assets/js/49.6c712694.js",
    "revision": "0b4079c4a204ac9beadbfecb03c37cc6"
  },
  {
    "url": "assets/js/5.1102b4f1.js",
    "revision": "705cec1fe76c7c2a2db9ccbd07850cef"
  },
  {
    "url": "assets/js/50.f6bee82e.js",
    "revision": "ec7f5fabe469e17def639ab7bc6dc2f9"
  },
  {
    "url": "assets/js/51.c1b82382.js",
    "revision": "7d86737a5d2f09e78e5cbe3f7a8a4953"
  },
  {
    "url": "assets/js/52.4c324ffa.js",
    "revision": "f96c1630abbb227bd02ed4d1bd838690"
  },
  {
    "url": "assets/js/53.fcea1360.js",
    "revision": "d6f969fa60c7ef6099f9ccdf51bbc981"
  },
  {
    "url": "assets/js/54.ace2477e.js",
    "revision": "d15828d91b8fe9ff9a4ca8a043efc3e5"
  },
  {
    "url": "assets/js/55.00caa86b.js",
    "revision": "1ef2a9217b28c7c6b6f26e5f89727413"
  },
  {
    "url": "assets/js/56.0c194c53.js",
    "revision": "27a771648db1e4b8da6d914b4ed550cb"
  },
  {
    "url": "assets/js/57.38c2299c.js",
    "revision": "f6968f42ac758ae44da47a7bf5b3f0b7"
  },
  {
    "url": "assets/js/58.2556f97f.js",
    "revision": "7e8704e95d1b465e33877ffc9e2586f0"
  },
  {
    "url": "assets/js/59.e2b1c854.js",
    "revision": "7ae00feaa04e72fd721e21e19b0b2ec1"
  },
  {
    "url": "assets/js/60.ac2ed6d9.js",
    "revision": "4d3ece69c3dcca6e9fdd6516897f4151"
  },
  {
    "url": "assets/js/61.86c9c4e5.js",
    "revision": "1778a6c200f205be18d0cb35c0ac346f"
  },
  {
    "url": "assets/js/62.8d978949.js",
    "revision": "77464e18b80d7266f575c2ece43d78f7"
  },
  {
    "url": "assets/js/63.10159ffb.js",
    "revision": "ab8277a2cd12a60da3e4a37ec4ca37e5"
  },
  {
    "url": "assets/js/64.37995d1a.js",
    "revision": "2abe95040282bd701011365cf14aa9ea"
  },
  {
    "url": "assets/js/65.a6f1b750.js",
    "revision": "a32cbc0bee16bd808a3d82a71457e600"
  },
  {
    "url": "assets/js/66.75b5b592.js",
    "revision": "1a1154fb625219a5780499f2cc361789"
  },
  {
    "url": "assets/js/67.91d15c4b.js",
    "revision": "ae186a6945d0e03b51350cdd864f2513"
  },
  {
    "url": "assets/js/68.c3e30ef7.js",
    "revision": "3ac012e8f3ee031c36f64447b2dd14ad"
  },
  {
    "url": "assets/js/69.44585444.js",
    "revision": "661b4afdf308e5c0c8726ac85c9f979c"
  },
  {
    "url": "assets/js/70.029828f3.js",
    "revision": "e3f71f1ff743c1dcd54beca0af43c978"
  },
  {
    "url": "assets/js/71.3b797d4d.js",
    "revision": "66af3409798ad39776415c4ba32476d9"
  },
  {
    "url": "assets/js/72.dfdae3b7.js",
    "revision": "9b9e86e882773b57f73bd5809740d84a"
  },
  {
    "url": "assets/js/73.f818f8bc.js",
    "revision": "d75b5740053d5eb66fb47a2b7da2efde"
  },
  {
    "url": "assets/js/74.ae6615a9.js",
    "revision": "a5aaf5105c92fe7a53d1d400e97930f8"
  },
  {
    "url": "assets/js/75.cdde54e5.js",
    "revision": "db239b6cb731b2493f4e666e102986f1"
  },
  {
    "url": "assets/js/76.0bfa9355.js",
    "revision": "e7dffd630e49db17673c3db4943d7172"
  },
  {
    "url": "assets/js/77.2b82d61b.js",
    "revision": "6b3474665ff89b0b70ad56487139d44a"
  },
  {
    "url": "assets/js/78.6b109531.js",
    "revision": "45f5b0ccc227f80255e617edffd46d6b"
  },
  {
    "url": "assets/js/79.ad1f9bb4.js",
    "revision": "20be0429798c81926545cab5b513121a"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.ae171c56.js",
    "revision": "7361d737c0dd18e4f72010dfc6dfd013"
  },
  {
    "url": "assets/js/81.36fb0fa3.js",
    "revision": "379c6f0d0e5af3eab68a0b2603d45656"
  },
  {
    "url": "assets/js/82.7559a7c5.js",
    "revision": "7ded240ec0933a55eb7eca0e2f5c9af2"
  },
  {
    "url": "assets/js/83.5f62e24a.js",
    "revision": "553a0b13d67f9a242e3a75b16d08752f"
  },
  {
    "url": "assets/js/84.5e699b45.js",
    "revision": "84cef01f7cd4974b003dab3895454571"
  },
  {
    "url": "assets/js/85.09d0e39b.js",
    "revision": "8f2b57d8fcd5deb5085e932b452f867b"
  },
  {
    "url": "assets/js/86.d29bb238.js",
    "revision": "2990c4ccea70358003d03fbec6bdb288"
  },
  {
    "url": "assets/js/87.b9cd026d.js",
    "revision": "838b0ec81c5dbcd6bea3c891b0209d1d"
  },
  {
    "url": "assets/js/88.85adfa68.js",
    "revision": "3b28681d437f0e15d61f388b81a2eacb"
  },
  {
    "url": "assets/js/89.c245f83b.js",
    "revision": "b1a6edb4c3f40ab256ef210e7c4c4d08"
  },
  {
    "url": "assets/js/9.d2e7facb.js",
    "revision": "818854a1b14ded7a18c83fdd8dd809b4"
  },
  {
    "url": "assets/js/90.5c0ee752.js",
    "revision": "f99f6240d9d3db70f6d14eaedb604be5"
  },
  {
    "url": "assets/js/91.28f83ff4.js",
    "revision": "1326c0ae2b079f56a6533a1f2e514306"
  },
  {
    "url": "assets/js/92.7e084e61.js",
    "revision": "8a2480cbdf2b7e126a1f0dc6d0d3ff57"
  },
  {
    "url": "assets/js/93.fd153e26.js",
    "revision": "1580988bf400478a78914dc096bab48d"
  },
  {
    "url": "assets/js/94.dbc9ca36.js",
    "revision": "60d375317c0204553baed5c7ff1f0121"
  },
  {
    "url": "assets/js/95.e9c1b0ae.js",
    "revision": "246ea54973715fb0684d9d68cee7ba8e"
  },
  {
    "url": "assets/js/96.fca66f05.js",
    "revision": "13455a58eaa632d9d4f0ceedf9543530"
  },
  {
    "url": "assets/js/97.b5464031.js",
    "revision": "0c5f6b40695de28bf7bdfa7c78da33d3"
  },
  {
    "url": "assets/js/98.e66e64ea.js",
    "revision": "05a9d65cb1065379f66cccf33631a72c"
  },
  {
    "url": "assets/js/99.88024fae.js",
    "revision": "40b7e617b28586e62e1a2a048395a4f4"
  },
  {
    "url": "assets/js/app.f37471ab.js",
    "revision": "dbb9e28498e08c79dc064958ec14539e"
  },
  {
    "url": "assets/js/vendors~docsearch.cf08ccb4.js",
    "revision": "ec97fd871053e8b03a4c067b66f5abb5"
  },
  {
    "url": "index.html",
    "revision": "795456b9ca884710a0a3dc49ac4082fe"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "b3992e1202037f0ae45574b91ada833a"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "b073c12ac577465730970339ea0c192c"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "7b6ce951490f8512c0dad575774cd42a"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "384f2db451c166843be75c737a59c256"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "610407609a97cc7e05966e1996b02c25"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "614cd13de4d2565eab71e6dc50e06af2"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "901825dbf42a3793ada8ff9bbee589f3"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "b8f37ae82880910727d9aa80cb344f6b"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "747e8f39d394c0eaed3ae815e884d587"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "e7624ab2a13f8a3b33590bd3f70875a9"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "4e18274fdb62bc981e28bd520bff5615"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "e7b73b3d8f16d24b18e0c0da7a79393e"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "b39a05daa7e5c2478b246933c5b5f3e1"
  },
  {
    "url": "master/api/index.html",
    "revision": "4047ea917676f8df39280ef210ba9666"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "04c7aed1b4ee4a289353bbf9bf21c08e"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "312c6c3dc953b28e6b29fb0368d99607"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "2a5118b3986cbfa20a91c617758d3774"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "75a196a18314a38c99ae16a57370e043"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "b849b622b9420923b515ea4a8d6aec3a"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "7a662cf41718aac68a0e91aaedd98076"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "41d5d329b6664c510b2a9a151b79cf50"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "a0e25a8f47193701b739d56f1119b410"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "b5dc2909180b50ebcacd6a229ae19c8b"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "3f50ef257b8b448fda4957b4255b59b9"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "c52538fc2e44d44f0d5002eaf0959bc0"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "78c6d4c98d5563511b03f87b86a14f8b"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "4146b5fb309bd6db24e84e773438400e"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "f696cfc57f36b9da867afeb384f80f1c"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "360b06183822ccfa250dc1181b4f62e9"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "720b3c219fe47a907d7bb5609dd6ab6e"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "91a294bf64c20a8fafc1118eee891ed7"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "1a2c3a83ef2a3b8915000d5535e72f0e"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "10fff9b81520009164943f9e68648d8b"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "d722f59df64a0b93b7beb857afb8bdaa"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "75922de409e64a4001f98a24b51e2744"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "aca517bea7f7688cfc1ebd4616e1a6db"
  },
  {
    "url": "master/packages/index.html",
    "revision": "3a7481391df307191b2c2db7a8d11ede"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "aa1010b020681b79d2d0d596fb4c6472"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "596379a52b257b0a5889bb7c132979e3"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "dd800d1a48cc5d9f24700e4f329cb0ba"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "9715121a0b946977b167e3bd04ed5d24"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "c7ac1c2f485ed349906ec11649e8a3ed"
  },
  {
    "url": "master/packages/views.html",
    "revision": "9d4d2ad75e6998dbeb64e87fe75a6583"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "769bdae31b3cc8e793b749ef23d88ee4"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "326e59dd7eebfdc80c156135f2ddb698"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "f9edb56c5cc37ed5a39fb618e779478d"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "528fc28113271cd2a6c2138435f66894"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "54bc332becd44e07896c84237f1cd591"
  },
  {
    "url": "master/themes/index.html",
    "revision": "dfd51ab3e482bd5c0c0422a131c98404"
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

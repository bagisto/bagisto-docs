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
    "revision": "5f850ab6b94762a51f51fc3721e1fdee"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "d464de77e5d50bfd39f0811c1148374c"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "e038cb09a6f9bbe4d31fb80d74c71f31"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "43bd92d05efe85bd20d0d34ce7b7998c"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "b674c750037f8f2441e6905a89dc3c32"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "f01b2d2b5143d944c2f54e6ae45b07f9"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "1bc68d25c307e4021117760e4566d6ae"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bb24fb11ef5de74ea46dc40979f9431b"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "08b99c4bff3ca7ad9135556ae732c9e2"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "9316bb8304650b02c153008f28920cb4"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "c192ec561ac3406040bbea715589f18c"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "222b4a63bfb6dabd810b74ea3352ba29"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "4881e45f7b9e22e8bf9776b73ace700d"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "affa267f82b76605271680545f5b7281"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "013f64b4b25bc3909547481348055db6"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "e01adaedbfa5f66b00d05a676cce612e"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "1728299653f61765c13afc2c95310b47"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "b95b2030b7b46bf8449abf5cc557b523"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "be688add9c34d3eaa7f767a963136a5a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "e55b8160482d0feffec619cea6408cf1"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "e51cc8790c3028b069afa8717386a2be"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "739a81bf889f1016aa555a234a55663d"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "9c7519e93e07822d04fb2a4db8090be5"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "57e80c12c837d0a0698ec669f8cf31e8"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "016b2dfe95e3a0bffc11305635cd3c37"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "75b088114899708d19c24430ccb77136"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "1c4d3d3a716248be64cf576f355b4590"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "569c495d370ac5b2451d2c9b53b6a7e2"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "be1f2904162cc9c29a06123e21588291"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ab5cbfe0652fedd51637be52656db0bc"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "e6592ccf10726ffa6f7208fdae6043ed"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "9018c1ef836e4ec7c8d1ca9cdb9ce584"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "f7cf48fa54ff6bc62c0fad3a285c60b2"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "1f2ab28611a3ad62e8c3ce4306a99f53"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "499dbb9a7896f17402e8ce80fa86c11f"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "f9aec500c5892a87c6f349fa27c713d2"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "6684e83c1d96a021ff539621c19e286c"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "a4196a243c8bb3dea9c4ab4976dd4a43"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "228febfd591316b8e1752c59b22563bb"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "f0a28799e4ba3aff55678aa0eba30c13"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "d34ae3cf1f1eb6e7d98277150bf71d03"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "b807b80c7dff7b71d456fef2f90bd00c"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "ee4be6d15e68157d1279b37a102fbd89"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d189b29ea0a920ad8902b9498843c326"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "76ae4b0af8981b0e430742855e1e3d77"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "06376ebb6317aaef464f9617c63149f0"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "af6e5211b8153ba664b9365ef00cc48b"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "b967d1f99afab2b90137b0d2b2ceb879"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "2719074899f5aa848cb52bf44bb9457c"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "396f50d6c9919a56d33c0fb7209ae8d8"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "2fb170fb5da11b87bc4abfaf3cfccaf7"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "ae4930cbfc0bbbfcbe3999ce36bfd2a0"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "27a05842044e7cfdc89c4e596aac1514"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "f73eee123bda624c68985fc379b1ac14"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "bd9509e3e913ca255a0e77ea02c6492c"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "b507b27de570ce97be102b774408b747"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "6f7d3c57235dc32212c9a0cb49fd7e8d"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "76e1856777b6bfe5e5ffad88655d9f97"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "9550874214942ce09a78af0f5f0e64f2"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "f9370f0a8d6a88ccfd6586cd401812bf"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "ca5a7c19f71072dc6a8cd3444b64d201"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "70ab4eed36965c2973c5e08bebb85609"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "f4ac71941d4807b5d0cc17a09d77b4c0"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "2d7ec8c99c39dc3428ddda4fd3578acb"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "dcd26be151a9d062be1914811c626944"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "2f002fbf667802858a03f127717bb2f9"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "cf4ff6d43941f5175f67a1dcd7c6980b"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "86bf3b7da5f7a878284896fdb02bf6ba"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "61607c95af72f7e2ec9b41f4c98034e4"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "72e5292c2c47e2b5072c34bbac6cd7cb"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "170eb7836c07c8e6b74cf71811e04e7a"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7e034ed79315ae471b63c6faf188555e"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "6356c6f317cd69bb1b7ca8ab86bd9125"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "d6e1c120ed3aa76f52516731716b155f"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "d9c96e6526425fba1ac071867a8dd3fd"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "266789409b6a4d3b75baf9f85e3673cf"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "22fbfbb7d31ee1eb39e3a3d004ea0075"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "cce929415bd49236604037f84cdc420b"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "3db6732b91f8749c30b554cb25eda546"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "66780630000142f67f9ed26d16c42a7e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "027040ffd53ae8a5dcfeeed12e15fa2b"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "e3610af3170d37949ac7eea5658c0eb0"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a8a05535870c6384923bde2c48fa0264"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "e143bfc8afa97de4ec10e94e725cee48"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "8a1a1a8d8c825dedb775226219073502"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "533756cb2c6a651073c3de63c0d6e91e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "282a2d1e1c6c7f03119db3db31354dfd"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "6ff9965068617ff273b2bea44afa0341"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "4bd23c1ab6fc84ee76dcff240bfe4842"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "3c0ab63905a8fe7a2895bf78b1da88b0"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "c744504d7c4300eb2718225c57851606"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "14df06391ea4b8b1c6a212b52f29d54d"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "79a3a16d56d422bcac67546c511ff5d9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "f0b2649941f2b4545f3426ca5c16e089"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b011a7b996186ba20afc4acd3a3d322d"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "c1a8a84830e33f52b1fcee80c9d55201"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "c581ab8c64040d7c3c052aa69ccc8e05"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "8e006d3ed41a1098c20a577453bd99f5"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "40571d1c4c9c6a1f507856ee53f50100"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "381f82c2682de121d37ef6d6ecc6ed5e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "92b0df509e3502508e242c191ec36b77"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "6b7d8e204b08e24d7642175e50ce3e9f"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "5718331f4614a7330e93b103e62851b4"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "b39b8696a8fb4408bade93e2c3845c49"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "5fd36ab0a2a9a9ed186a835ea363c6c8"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "b6e722513de8a44769d273bd222260f7"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "72017bd0c62230dd32c07058d9ee7017"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "72d53b60204c6f666550f026849fded4"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2fadddbf018ff371f130bfa4a99794c1"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "4bfffd85d9d9358e3647b6d125044efb"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "b3c850e5cba9d5dc991a145b9ba09bb2"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "7894715a625c6f71d672f5eb946cdd48"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "28137bef62a018b0766cfc18d8a370dc"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "d38220c4652f61b2dd93fde1af5b5da9"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "bf322484ba0bbb1ba617200b966da0de"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "f8d1dc5f39cdb204a837620700e318bc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d199a4d2887a22594e83188650c1f80b"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "d8b7fb0fabf7e35838e71eab16538ac8"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "190a8381c7cd49461ae4d4c8fbd43130"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "6dcc05a517d65e00b92dff77bde5ee7b"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "9e4a3c4c85c91ead185ea77aaf54019f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "8f724ef64c1156ffba7a4e019a243a0b"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "1891e495f4ab28701a67e7443dbddcdf"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0db7a1fa24dca5480824acdbd4d87494"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "09ca66d7d4a3664a2e4e1c50c3078414"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c6bd5281885444c884d88859686b1e0c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "a94216f2e5c2615e68d47d58c17e5b73"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "05aa65f94cf974da5e3bcceb27da41c2"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "1533c4452176e97b7c8c6cc1e47b169a"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "cdd31ac4e27ae4738e7706f88228fc88"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ed5bc8a30006d50c410ed436826e6673"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "2f52dddd75c2ac5922721762ab5b30bf"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "3bd0642196463eae9d24005e1b75f37d"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "8f0a18bacb652acf01e9e4b365b64645"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "91a639e3e5a8a0a8482d863e7a33398b"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "fb2826f3b778eceebc781371d9579431"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "c00254450aa4c965efd7cfd2a1299746"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "cb1577a0283b292b340a5ed27ec0656a"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "b350e4815146fc324e973ac5f24f84ae"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "2f6fe20923031645d429b05ced3cbbbf"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "e210dd9068a76718931ce037fb10e1bc"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d674522eea15a57cdfd683daa7b8067b"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "a8200d8b1b2e72d56082cb60591c8516"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "c53537005476558a790297236f0ba20b"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "9702c432cea51bf75b17ccf251d04eca"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "2c4cf5639fd378ff8e2686c31fe39acc"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "c187eb73ae8f3fec040234ca049807dd"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "308476f053560cfe4a6ab3e9edb788e0"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "4c4328729d16b3b415c654f1b77ea8aa"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "61ce1a9ff458ad15827549f5fd04746f"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "36dd5dde99a9d1acb760510b81668cbf"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "1df333cc7e0273aa30cfb94dad97bb70"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "1d181986918301adb3f9fbd5fe6914de"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "7a6b0d15fb6e08d01706e927406bd39e"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "b1e7e6b4dd4d23b3444c2e963c12777e"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "b0cfa313289a7147fdf172eeb5be3546"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "6b9e6a539c95cbe99a73606aee1349c6"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "cda5a052331d79c31a481601fc2c782f"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "64e34bc87fb82c738a39711c9d6ea978"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "7b6d328b0e19381a1a5e05c2d2624ffc"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "772a8099265b35c0306966d6f37aa42d"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "88a97575228541e4aeec2bab0cfe4c46"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "bebfb095bc378e16d4636d253b96d365"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "9c1bd68530134734acc385ea540ae6d0"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "d8ed773ff902a318acecabc62454560e"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "632ab7aad0bb89cac3293a434b05086a"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "bbdf7172b4f329486e4fecc5f482439b"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "dec9f0b2e1618bee67bb214273c87900"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "346658d45c65f1f3045b33ace0fc5c44"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "a4cb14f9e69b66ee0c8ed26e63593ed5"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "b1bf151b280eac460cfec3b46344122b"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "1855b8a61bf53767f62b16a21e9a6bc4"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "f40ce37d4b78ac31c2d8f500d2c6a07c"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "7ce618038850ef7478d3f4804b7752fe"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "ac1c31a04ad0f9887d0541b3cef8d448"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "234e588d0c89d4d059edc11653c58ad8"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "cf1c52a287cbd10e7445ada0c06e73e5"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "c0f94eda042ca3e13c4ab9b93904b5c7"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "d77516ea13a6a95026e45af5bd4c16ab"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "b90ec21479f887a41f3be22b10706f39"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "06ebe9c5e81326a068c3224d48717fcf"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "4c3d5fd6583c0686207dc49a28690ba8"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "c05f7c39571c06132108f9b76f7490f3"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "5b8493709d2cb46f7da0e326089f9179"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "3f0eae5070d58181e9ad9ac89313b377"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "ff2565d948fd5d316270915a921e5170"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "9f3d943e2bf40dda9867dada5eff8f9a"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "5d1d1e11159f597d73c7cf8902b917e4"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "1355dba2f59863f1856a6219a5673e73"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "1b7dfa9da1da322c41778656df391931"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "02acc43a2eaf82eac99498a059c8f7b7"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "c5a0b3adf7d47514fce6d86f0119a88e"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f5f6a833f50568a230e96e40bea5a860"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "cee358e9becc507e0362937140e483f5"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "c3f96136ef7d407d7e11be4bbfd0492c"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "a30bced3e09d93a5aa85cab1b74ff430"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "942ddd366caf620e5d8f6ed735126344"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "9120368458c3197e731f01d04e0010c8"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "e3dd7306bc1331319849921fb831e2f9"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "dc323faaa4d9c16a50814f992e00f24c"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "0cec0be421244c797e9331df744f81ae"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "1f47197632cecafb15a14c8e100c497b"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "7bf8a0ce3a43ab4d125b3a91044012bb"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "f2b578fd9339d0d7cd7ffc8494bc0ed8"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "f3a3273392235b81c647df7fc8e8ca5e"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "010da2d9f1c359244bc218c2ab7a217f"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "89dc70c8c4162f62576d0733005a8374"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "12d0703eb49c9aa2e41609050712be81"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "78c5209befc499ca684e9be2ba750f88"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "de1eb7321771a4103909280165d992c0"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "cd97bafce4a0e18e27cccca04964d881"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "2828e5cbf366796bf06c65642231a3d5"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "96d645c18879797980c02c6f27fea6d4"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "e3a31e3cd0e6736be3c08ae9459ea6d4"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "09cd8893b13cfc505150f19b45304a46"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "697c61ed04b22d36083c1597d066216b"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "77aa3e359a16705dcba2eba54ffd34bf"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "650d00501bc0ebf7006a629c389a7b56"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "0b05853288bbdf265b83feee7505b149"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "2b04e822203efedf00eb1030ce7a6f4e"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "93f2dd9dc3f2bb0525eca51ee25e0d84"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "a85171ab163fb532cde2b21c995cc5fd"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "2e156c11848b5645b6bb022a558a48d2"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "7581fc78eb3a0e6d3d2f7ccb150bb4a6"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "9cb68b285672309c9f61558e7d32519f"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "d95b53cd7dfdf3ec4ab5ae4e5e1f1733"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "cacab13da158ae16df003c1d565cf2f9"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "079a08c34441e2fb660512a263a061c8"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "f0c8ffa9ff2f287eac57a64c3ae28868"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "45d6fd4ce8cca711878e74b71bc7d723"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "11b917d4df2c56f1b91b283811337c06"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "75c724c7e8fc5df0f1f2a52c9f694f07"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "6ce5500d6dfe677528386698a4d4628f"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "b5b993c75c15b778d348fbce52043523"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "93c648eaf40df23e9a641452eda2a7da"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "dff82a6b99ce2ee0aa5f9a4a876aea02"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "b0348e549364e34026f4b35842bfda9f"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "b78e15e7e2685e22faf3bd89fd0ff248"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "372cd010a25bf153e68cc14deba1d848"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "9213a0ded97175b7ca447c53b1c26081"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "852a6f38ef3dc69cac476eb5717fe5f8"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "e4780644df3f6a8a760614cadf52f84d"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "f8a5a28ae3df8dab2ff12edf4a5dc8c3"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0c732f10f31d0f12664b4b4dd35ebbf6"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "05dd908e9a1389bfcf193ef0ab7b9b86"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "5671c632dd186bef0999b8d6e31e42a4"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "235f5ef746dd564f5465e7b0afd45902"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "8b20f59d050b8410a4f9afba3ce2dfb6"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "6857352a29634fb96fb2aabc7c047857"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "a30d97a4a189242cbc6f435eceb30d57"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "c45455e79fe2a9b85a95b21be6e6a648"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "8555d8cc8430589ea1d240977382d6d0"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "aa686ba2e61b48b850cb3f1ccb0ba695"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "ebd0ed0ed495afa88897a9bf82e2713b"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "6dfdebbb79f51043918b7557f517f641"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "89d1f1380c78c080956af6ec4bf5f439"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "fdec218fbe0837c3a54cad1e8cb3f86f"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "517c0ad66240b66e6751e966626f36dd"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "9c169a92966fd34121e15ecfa068c629"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "0e33e2be49af0f0f11bfa7076a508650"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "9bb155dfb44ec2e3830cb6e66c67b603"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "4c6471d1ae957912caa2513e05686a2e"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "86fee31dd071a38bd9cfa7e6118cd6eb"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "edbb6fa5413b96f2c055906baa80a316"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "693ad0b4e7c8f84d231b9fba189d8fe5"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "b84f20e2d1d0219d4287185df52b2b58"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "97eb58e2dcf2bf4558da3d93e0202b94"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "5e219e3ad4f67d47a10e119747c972a8"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "5744e185fd00978ad669473a0d863fd7"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "e504c3e272e3c5583274d5df65947816"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "d24f06917946c1809837940362653ad5"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "9eb2f7bfa7084b14abb98f6236c101cd"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "fa30ace52bce392f3f032ddfae53b1f0"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "3442919c8693b8cc98da4bcb0ebcf8e9"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "6dd6019cb320d245c21b5ca9f9a89b80"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "203c5244c5ac47d7444387338db2105e"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "eeea7e3ea36d17b40bb9bc9cd65f1639"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "ce2d7db8920773fcf3dc4929340b4878"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "32d9598d1c7581abb75c2fdd36f70a4c"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "840af6c5d66cd5c5e409e3fb4f81d265"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "e8e7c2c5f8a29bfd6639d6ababbed432"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "c2ef50863478ff9aa1373983ab2d6dc7"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "aaadac58b15377a3e309e5600733e5e1"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "f2c2d82dc5d912399c413066941c9576"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "4c040f05e0e23ed59858101e40f8f582"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "8e6a65511902b1e96c3a344ec26506dd"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "355e0852e1ae14a398555ddeeff198c6"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "955b2fe0d8fe409ca1f4c8234051dc1b"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "0a9dec8046a0c44774915f70e5e9a812"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "8fad9045f664d53ff7b9cb04381fabb5"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "3f7da0dce79f0797ffdb3c370a7da95e"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "db52fec10330d0fee9c558a78e64d6c2"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "4883d2f25b2cc25b9633257ab300b2bc"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "69d0618a7f40de7e4b1b0190ea141a8c"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "b57d7e8d1967246d6b4cf8a6e406fef4"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "63577c142d688e240a4913633b1fe584"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "3a3c74b397d64654a56391e929a452ed"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "7bda86c2e191ed39dfc8cd8900b66262"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "434d5aaa8b4805b9806d66e252d423a4"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "d3187e72ca308b63d7de37b21f77e41c"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "4b38582d48e9748a71dab7a95a166a39"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "382e9169cb92b2d3cb28d9bbcb0fd484"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "caa09370e79aea6412caa14d83f2790b"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "d0d94fe426b82256a324f85df7f3ec79"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "18b0e09ec46021801be24fd4a52ecff6"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "0a38ea6ed091bde2939f66e0803cc02a"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "8b892c77bcf9f0075fd2e94515663c83"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "15bca8a5003a50f6b96a05e3a9be7615"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "9c173b5a584273e6260d4c2da526690c"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "29282586d9092222be0cca875a8693ab"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "2bc05a3608412c48bace57af20678872"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "8346e7e08f1129e1e0f521639c09ea5f"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "cab585f9ef4ceda007c363820effb38f"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "17d946be1e6ec7a10af30c75f717645a"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "db07351664d76a061f8ddd79e562aa36"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "2eeb2050531aa29ceea8a84a189bfe8f"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "6010cec3ddedc2c50779ab8cb9fe6d7d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "56eafbd3100ddcfe351af910f78d3ba2"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "b5f9779b40350a9310a7e93927ab904f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "8c9ddb684bfa22eb24e83bffbfe9bd04"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "00c81d46edbe42ed7917acb03f2f44e8"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "3a9c0d0f34a15e65a7d4c3efeaa805cd"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "4deb379abbb90020c73cb64ccecb0bb0"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "931a81770c93195ac956de7f1cdd3727"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "d02228073d45b0ddef0fb6e7b4be9157"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "898cec31a8482a0103f99e0b73699c41"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "edd80c057af23ab8fcb17708a8cd5caa"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "5b5acc41298173b1c5dc30c8a85c804a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "4dd17a0594cfdb57f2b0653089db815e"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "12d84af9af29a88477b9291c926589f2"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "93f9e5026e0a3aec1e2741ac17652a1d"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "a1f113d75221639b8c039a4ede0494c9"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "0710900e3d1983ba7e386f6443bf7f60"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "4251b58e1dc49efd5c145ea9645722c4"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "f0f182d8a2036ff79a72cfa4bede3730"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "ea01c8a281c409845f806d154a1cac2d"
  },
  {
    "url": "404.html",
    "revision": "bf3369c1adc16ddb95eb31eeb8c1e1e2"
  },
  {
    "url": "assets/css/0.styles.0d3d3e7d.css",
    "revision": "9e164653950b881a187d429847cb030b"
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
    "url": "assets/img/create-image-ec2.8b5ede7a.png",
    "revision": "8b5ede7a87d660433e1301892da28295"
  },
  {
    "url": "assets/img/create-loadbalancer.1f352060.png",
    "revision": "1f35206006fd0dcf30a50b21582a08ae"
  },
  {
    "url": "assets/img/create-target-group.9b7b3385.png",
    "revision": "9b7b33854370a1b37ca92c0b713ba640"
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
    "url": "assets/img/loadbalancer-port-80.540ede6d.png",
    "revision": "540ede6d9f0353c0a9ce724fbd1494c4"
  },
  {
    "url": "assets/img/loadbalancer-port.9e77b96d.png",
    "revision": "9e77b96d743d9f3c9ce1d39ecb4079a8"
  },
  {
    "url": "assets/img/loadbalancer-result.9c0b7fbd.png",
    "revision": "9c0b7fbdc2ef530fe8ccb450d9051156"
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
    "url": "assets/img/target-group.98f7415d.png",
    "revision": "98f7415d43e154592baea6c7eaffe426"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/1.9d1d6014.js",
    "revision": "70c9f11f2722a60008448795b90fc6c3"
  },
  {
    "url": "assets/js/10.6a6b8f35.js",
    "revision": "e733a8135cae1b158a806af6d19a8cd6"
  },
  {
    "url": "assets/js/100.e3347408.js",
    "revision": "153abc6aa4a7fd81d407624acd6202a5"
  },
  {
    "url": "assets/js/101.070dca7c.js",
    "revision": "9d6eef255b41e87c11178fb9d4c98be8"
  },
  {
    "url": "assets/js/102.36d2050d.js",
    "revision": "0952bf86988e753c5dcc470d1883944f"
  },
  {
    "url": "assets/js/103.ed13c17f.js",
    "revision": "e85112f7f1a5f37386cc0ed7c7e2d773"
  },
  {
    "url": "assets/js/104.069d269b.js",
    "revision": "0e6dfaf4e86ff6ca90f9f9db85490817"
  },
  {
    "url": "assets/js/105.e47ab765.js",
    "revision": "468d45808e241fdd90ef82bbf5c519a8"
  },
  {
    "url": "assets/js/106.279d5d44.js",
    "revision": "895aa6736b7302337f892b41ff74e764"
  },
  {
    "url": "assets/js/107.cc0154e6.js",
    "revision": "3a6ddb207866ebfc973173cffe1cc63d"
  },
  {
    "url": "assets/js/108.20fff7e7.js",
    "revision": "33ce01a3a2dbab03ab21f7cb64e66f3b"
  },
  {
    "url": "assets/js/109.f9a5aca8.js",
    "revision": "58174f1c562cba37565f01f07ac2814f"
  },
  {
    "url": "assets/js/11.8b954949.js",
    "revision": "4b1e7de1975649ecf40a26f2b4e0c301"
  },
  {
    "url": "assets/js/110.cafd1b55.js",
    "revision": "67660b3d2503a25ede537d7209bf1fe1"
  },
  {
    "url": "assets/js/111.5333766c.js",
    "revision": "02782dd77f4ff9ccd047cbbdd076dbd5"
  },
  {
    "url": "assets/js/112.366b28bb.js",
    "revision": "7602f233edafa4f4217a7e93b022966e"
  },
  {
    "url": "assets/js/113.465dd1f6.js",
    "revision": "ca387b03b3635466ab15956a8823da39"
  },
  {
    "url": "assets/js/114.698865a3.js",
    "revision": "9e17c35bd2592f2d8678bc6c3490233a"
  },
  {
    "url": "assets/js/115.bb31c748.js",
    "revision": "b6cdcc91a5041dc28bc8cc1c96909d27"
  },
  {
    "url": "assets/js/116.561174c0.js",
    "revision": "91b90a13620b1a9a2548ffa6f29db6cd"
  },
  {
    "url": "assets/js/117.74191023.js",
    "revision": "06fd16f59945c6ccfce94ac3215c082a"
  },
  {
    "url": "assets/js/118.4a8826fe.js",
    "revision": "7f24d8093e0a0a2cc0d1813f3283c92e"
  },
  {
    "url": "assets/js/119.a8d045d1.js",
    "revision": "ace0a8ccf05e82e2084c0f790377c97a"
  },
  {
    "url": "assets/js/12.db523a6a.js",
    "revision": "e756b7317ad43362114b1185cea053ad"
  },
  {
    "url": "assets/js/120.f1172aeb.js",
    "revision": "06ff66ca29c3b4475c7c0ed908dbec7d"
  },
  {
    "url": "assets/js/121.f2231bbb.js",
    "revision": "6304c2117887f60144abd240113d772a"
  },
  {
    "url": "assets/js/122.7a230d26.js",
    "revision": "2869751d4f387f2aaedd3722607ce217"
  },
  {
    "url": "assets/js/123.3b0058df.js",
    "revision": "a5c49446e1a965ddcd38ecb99ff1c85a"
  },
  {
    "url": "assets/js/124.39b0f6e6.js",
    "revision": "e08ed7d1a9b4cfb5d6202c484d8d717c"
  },
  {
    "url": "assets/js/125.8f49469c.js",
    "revision": "42eba43ab35cd14098a2ad599e64592d"
  },
  {
    "url": "assets/js/126.6ecd69ec.js",
    "revision": "7b5b54e60d87e7186df339c840133f15"
  },
  {
    "url": "assets/js/127.6bceee9e.js",
    "revision": "55daf04c351df5e5bb6bb9aa5be8b7fc"
  },
  {
    "url": "assets/js/128.9f930aa2.js",
    "revision": "8eb0ec15f2f2648145102cfc7bd20ef4"
  },
  {
    "url": "assets/js/129.f8ae5884.js",
    "revision": "a506007cd1b07b1d75611705cc269b82"
  },
  {
    "url": "assets/js/13.4ea53a21.js",
    "revision": "624ef7e2930cf051769872152b0b4790"
  },
  {
    "url": "assets/js/130.444706a3.js",
    "revision": "a90a7822ff2ab6ae1568fa55e34ec179"
  },
  {
    "url": "assets/js/131.c3a0667a.js",
    "revision": "fad9a87bde4720651ab88ae78d2de533"
  },
  {
    "url": "assets/js/132.87cee678.js",
    "revision": "f6c0c6fc0001153a9166597eace94db4"
  },
  {
    "url": "assets/js/133.d68a08b3.js",
    "revision": "5b133536c6d61f7f3cb1a310a2030249"
  },
  {
    "url": "assets/js/134.ff0ec979.js",
    "revision": "372e828248a6c3d410be317c1acd12f4"
  },
  {
    "url": "assets/js/135.be8ee34b.js",
    "revision": "bcf9e2560a331de74ad247c1087f766c"
  },
  {
    "url": "assets/js/136.034a7739.js",
    "revision": "d69a661fe8bc85e89687a4c498593110"
  },
  {
    "url": "assets/js/137.88179901.js",
    "revision": "5ad4bb4f0002bc8a842032bab728160d"
  },
  {
    "url": "assets/js/138.e66a1b37.js",
    "revision": "0c9a2e355232a45087d39ecb5b7bd44a"
  },
  {
    "url": "assets/js/139.35a3bbbf.js",
    "revision": "6776674aad9b565358e26bdf6d47b792"
  },
  {
    "url": "assets/js/14.8225a7a9.js",
    "revision": "fdd94bc85f24f3e2178d43dcfd3630dd"
  },
  {
    "url": "assets/js/140.04bab051.js",
    "revision": "5d8239bd677c5c74aaffc00dc5565405"
  },
  {
    "url": "assets/js/141.08b521cd.js",
    "revision": "465d568037a1ef5f4da4c91ddff356b9"
  },
  {
    "url": "assets/js/142.ca53e1d7.js",
    "revision": "575f1eb6cbe092a65d3ffc564d0aaaf9"
  },
  {
    "url": "assets/js/143.e2165c89.js",
    "revision": "686d299285074644b45984e7c6b50cec"
  },
  {
    "url": "assets/js/144.041d67c5.js",
    "revision": "966673a069f665089006102a423c4a30"
  },
  {
    "url": "assets/js/145.5a1f4740.js",
    "revision": "c9277926fa5301dc707309b9d40413be"
  },
  {
    "url": "assets/js/146.cb6de9c3.js",
    "revision": "2500313b4973598a9003f248e84595db"
  },
  {
    "url": "assets/js/147.62bcd966.js",
    "revision": "d3c8369f858ceb6a259a8ae6b52c1b0d"
  },
  {
    "url": "assets/js/148.bd98ce0d.js",
    "revision": "329d27f007df6f1fa6b3536450295b0d"
  },
  {
    "url": "assets/js/149.76bbca4a.js",
    "revision": "5daa67bdc52216c27d9dc4aa8ade4f97"
  },
  {
    "url": "assets/js/15.2ad49f9b.js",
    "revision": "9266939c5fefb9bd863336abcd37448a"
  },
  {
    "url": "assets/js/150.57805f68.js",
    "revision": "e0899e6bb19333a67387099506e1c752"
  },
  {
    "url": "assets/js/151.43f40354.js",
    "revision": "5f389055e76276e11de99ee366383a2d"
  },
  {
    "url": "assets/js/152.b498f3a1.js",
    "revision": "6c7a0f12b14d0831195f33e16db02891"
  },
  {
    "url": "assets/js/153.852e2adc.js",
    "revision": "3549c380c4fc63bf6d6473b63bb83519"
  },
  {
    "url": "assets/js/154.d1f76cc3.js",
    "revision": "02c05f1025103e2d8acfd199a02b16b4"
  },
  {
    "url": "assets/js/155.1e864257.js",
    "revision": "86dcac1d925d5ca9d5071a3a5e65eeda"
  },
  {
    "url": "assets/js/156.a1a442db.js",
    "revision": "468f4b2966d91ead0187409f4141aa4b"
  },
  {
    "url": "assets/js/157.f89d2372.js",
    "revision": "c75c6b355667c1af5ef3792060a4ced0"
  },
  {
    "url": "assets/js/158.13c6261a.js",
    "revision": "e1abd64603d620d6ea91cac22958ef36"
  },
  {
    "url": "assets/js/159.aeb04f5f.js",
    "revision": "45d9e0c6625351f4e37c6812033ab898"
  },
  {
    "url": "assets/js/16.5d41ee2c.js",
    "revision": "63e170c8419edb3577959c0ba640ce57"
  },
  {
    "url": "assets/js/160.ef768c92.js",
    "revision": "6eeb5a22fb1a07e8d88bb511e9c52924"
  },
  {
    "url": "assets/js/161.821c308a.js",
    "revision": "b0686fbd80a3fe5f01789619c476009b"
  },
  {
    "url": "assets/js/162.0119428a.js",
    "revision": "1bd95d357ad0d095d0bed34e902d1ccc"
  },
  {
    "url": "assets/js/163.5e6a832b.js",
    "revision": "055a65f9fd9692bab59966fd6632b5a2"
  },
  {
    "url": "assets/js/164.cd93cb56.js",
    "revision": "6f2666beb444c046287e0a346814237f"
  },
  {
    "url": "assets/js/165.366f09c6.js",
    "revision": "69c639735b780a07265d827babd551d4"
  },
  {
    "url": "assets/js/166.a2776bf0.js",
    "revision": "d54a8f13c1b390c93c532aeef4c45648"
  },
  {
    "url": "assets/js/167.25f24829.js",
    "revision": "4232c847f9702d11fc0c221791b841d1"
  },
  {
    "url": "assets/js/168.5f3c0c83.js",
    "revision": "213301dfe39868a869ccb30397d095df"
  },
  {
    "url": "assets/js/169.47579fef.js",
    "revision": "ce0d3315a5ad30cecd9aefe5dba137fe"
  },
  {
    "url": "assets/js/17.b9d8a529.js",
    "revision": "9616363ade858840ca3f44d6b41b76ca"
  },
  {
    "url": "assets/js/170.d3364cd3.js",
    "revision": "4c83d4e25525ffab07b7c27eed27bf76"
  },
  {
    "url": "assets/js/171.71f373e2.js",
    "revision": "bf5f092f6b5a1c734946527bbe0e54a5"
  },
  {
    "url": "assets/js/172.b39fd4e6.js",
    "revision": "3c100947741d9925aa45c4bbd359af2e"
  },
  {
    "url": "assets/js/173.7475882e.js",
    "revision": "f472b8f797a7c0512eba2f17759a93dc"
  },
  {
    "url": "assets/js/174.99d44f67.js",
    "revision": "111069b4d46beb21d8215e91d7e67328"
  },
  {
    "url": "assets/js/175.61472f58.js",
    "revision": "ff78d1e93f3ae619f026bf72485f7cea"
  },
  {
    "url": "assets/js/176.6939f650.js",
    "revision": "c97ea8af706d6dc7d73221ee7396a968"
  },
  {
    "url": "assets/js/177.1f216ad1.js",
    "revision": "848a29f545205c71b31c0fff3f0e2138"
  },
  {
    "url": "assets/js/178.f649599f.js",
    "revision": "9c6eb6cea9572bf62a9a74b3dcb6ef82"
  },
  {
    "url": "assets/js/179.1a997702.js",
    "revision": "f10f1d130d0b7964951bfbb420ed7a3b"
  },
  {
    "url": "assets/js/18.fcdbad9c.js",
    "revision": "5c3b01a022ec972b29ddefd56e9b3679"
  },
  {
    "url": "assets/js/180.d38263e7.js",
    "revision": "f6f2d48f2e7bc95e075cc90150f63950"
  },
  {
    "url": "assets/js/181.274bdbd8.js",
    "revision": "c9d19fa0bc161587babec50bd2a2ba8d"
  },
  {
    "url": "assets/js/182.672fbdae.js",
    "revision": "a30e523b78f1a8be8041f8d8f81168d6"
  },
  {
    "url": "assets/js/183.ef14fc42.js",
    "revision": "4368c17c2a203dec65d1abed407f0284"
  },
  {
    "url": "assets/js/184.5f84213b.js",
    "revision": "0db2280be020bab2ae87a52440dcad49"
  },
  {
    "url": "assets/js/185.8184ab09.js",
    "revision": "a56015f6c1940a9a8f2d441f58bbac75"
  },
  {
    "url": "assets/js/186.7221f853.js",
    "revision": "6d154c7119570f9591a4aff9fe765d9f"
  },
  {
    "url": "assets/js/187.61f846e4.js",
    "revision": "cbfdae35b808d0ff48445808d9707466"
  },
  {
    "url": "assets/js/188.726d933e.js",
    "revision": "bc925088d1cdd7efd6921ccaa4cb9ec5"
  },
  {
    "url": "assets/js/189.0d00871e.js",
    "revision": "505356183c3e4cdce7efc690b1053815"
  },
  {
    "url": "assets/js/19.1b6966a5.js",
    "revision": "79fa583346b2d7706dde9e0cd5c9300e"
  },
  {
    "url": "assets/js/190.37603c95.js",
    "revision": "3a1c1af3d00ad341456af88c79e4373f"
  },
  {
    "url": "assets/js/191.4768967d.js",
    "revision": "8e42036ee784309fdc538f5effeb5604"
  },
  {
    "url": "assets/js/192.e8ed7d2b.js",
    "revision": "c6940a36582a16fbe9a62619c5c18b29"
  },
  {
    "url": "assets/js/193.c2ee6d6a.js",
    "revision": "b812b7bb9b0050906ce0c5d1ee78be66"
  },
  {
    "url": "assets/js/194.0ed705bb.js",
    "revision": "5e36d452480e6ee742aa21c206bf8d7a"
  },
  {
    "url": "assets/js/195.15dc3185.js",
    "revision": "6e84797188ceb3ab9b1890f4daa2602d"
  },
  {
    "url": "assets/js/196.dad34c66.js",
    "revision": "c8ff5df0f1bf43acb1ec3e7c8aacd36e"
  },
  {
    "url": "assets/js/197.df6d596e.js",
    "revision": "e827fa7a831ec6542065cfb9b0628e08"
  },
  {
    "url": "assets/js/198.79052641.js",
    "revision": "091ca8bd7721808e1287813b24755534"
  },
  {
    "url": "assets/js/199.91bc9f39.js",
    "revision": "97f78765a511beb844409d3d3ba63de6"
  },
  {
    "url": "assets/js/2.f60fb795.js",
    "revision": "64570ce90e9ca32b0ae88584c1831a23"
  },
  {
    "url": "assets/js/20.09fdc544.js",
    "revision": "a0de66e6659d97e4760f1555e796f1f6"
  },
  {
    "url": "assets/js/200.c3adc0de.js",
    "revision": "3c894382ca11fe6c7c2cae18c846b59d"
  },
  {
    "url": "assets/js/201.9439ffdb.js",
    "revision": "d48814ef13c43c1db7d283d62d2f453f"
  },
  {
    "url": "assets/js/202.0daa629e.js",
    "revision": "ec0ac8bd0f61962bfe4519ad1452ca5e"
  },
  {
    "url": "assets/js/203.1e4eb965.js",
    "revision": "dfb26b4443972421aa20aafcca960481"
  },
  {
    "url": "assets/js/204.86e56c9a.js",
    "revision": "1e23ab548f6e1282d71aee3da9652c14"
  },
  {
    "url": "assets/js/205.437c7d3e.js",
    "revision": "0b9c78aedf3e386c4153b7aff4af4b62"
  },
  {
    "url": "assets/js/206.c9056ce7.js",
    "revision": "12713048c129624686892c8d55bc07f9"
  },
  {
    "url": "assets/js/207.5551ac44.js",
    "revision": "167b43ac1c83c272d0e25dcfbe048e2a"
  },
  {
    "url": "assets/js/208.abad23b7.js",
    "revision": "9a4139f8f54c669656490de7f225920d"
  },
  {
    "url": "assets/js/209.cae20ea4.js",
    "revision": "ce1d969cdbe4f82484926190de30f0c5"
  },
  {
    "url": "assets/js/21.18e1f8b6.js",
    "revision": "dc4f6ede97769240f5f329c48b00372f"
  },
  {
    "url": "assets/js/210.f666e1cc.js",
    "revision": "5af0ce49d4a8f41ee308e52d53fc6de7"
  },
  {
    "url": "assets/js/211.4d273a1e.js",
    "revision": "3051aefb8b26341d342e175c05c38e8d"
  },
  {
    "url": "assets/js/212.2975c57d.js",
    "revision": "a32230ae6ad649223e72eb6be655780f"
  },
  {
    "url": "assets/js/213.68cefd0f.js",
    "revision": "83a2921879fa3c59be644b5f1707a5b8"
  },
  {
    "url": "assets/js/214.e22710cb.js",
    "revision": "d0c3f03342f8c713bda14b35d8540a2a"
  },
  {
    "url": "assets/js/215.0b199dc8.js",
    "revision": "7e17bd64499ea780b9f70b57aa8e8674"
  },
  {
    "url": "assets/js/216.347c7191.js",
    "revision": "290f7c5aca1466ea6fc321234fe49300"
  },
  {
    "url": "assets/js/217.299a8ce8.js",
    "revision": "4cfc2c0e5b2dfb2538edc5bb1ad4b1fd"
  },
  {
    "url": "assets/js/218.7c3a20dc.js",
    "revision": "79ff4d9c8ec2b13c33864c219ab137c1"
  },
  {
    "url": "assets/js/219.cf9fed1e.js",
    "revision": "5ec41bda278f0a229fcd9c4dcd31d6ed"
  },
  {
    "url": "assets/js/22.54e9474d.js",
    "revision": "ef1debb3371d49dba86a7295d3d3b518"
  },
  {
    "url": "assets/js/220.5926463b.js",
    "revision": "cc87bdfc970426ad4df22f5393d5054d"
  },
  {
    "url": "assets/js/221.ea80e3dd.js",
    "revision": "a53683f95cff0f52e5a3df32a626815f"
  },
  {
    "url": "assets/js/222.6667ef7a.js",
    "revision": "d5f6c73d223517801d3ac6eb633c7a8f"
  },
  {
    "url": "assets/js/223.7ace628a.js",
    "revision": "645e1692f3f229ab3e75a10b167a129e"
  },
  {
    "url": "assets/js/224.2d44f046.js",
    "revision": "8f136ea27bac27b8c63c83e97654ff4a"
  },
  {
    "url": "assets/js/225.80c9a1fe.js",
    "revision": "8680a383d9b247c5a7a096b1ab592cb0"
  },
  {
    "url": "assets/js/226.4d6e1807.js",
    "revision": "628cc9b8db9cdcd84a73bfb65cd21ba4"
  },
  {
    "url": "assets/js/227.d8e1708b.js",
    "revision": "2b03544ded8a972ae41b9093cc21aa38"
  },
  {
    "url": "assets/js/228.0400d1ca.js",
    "revision": "8e2b2a7b9673e733f1a0629444a46cfe"
  },
  {
    "url": "assets/js/229.1bd93c4c.js",
    "revision": "5758fe887080a983321499726fab75ec"
  },
  {
    "url": "assets/js/23.35bf827d.js",
    "revision": "a6237424347020dc04196dedb49c39b4"
  },
  {
    "url": "assets/js/230.167cafd9.js",
    "revision": "a607888d8eb233904009b88524ff511c"
  },
  {
    "url": "assets/js/231.698b8d7b.js",
    "revision": "b444723e9312c1d1a62d25638475e7b8"
  },
  {
    "url": "assets/js/232.4a679dc6.js",
    "revision": "290d4c6c979c0227422126292cb04ebf"
  },
  {
    "url": "assets/js/233.2a9370c3.js",
    "revision": "8cfc3e85240a2a91abd778ccaf2d86de"
  },
  {
    "url": "assets/js/234.de1c3255.js",
    "revision": "c10f05e17c6e993f5003db50f811a87b"
  },
  {
    "url": "assets/js/235.8feea0d8.js",
    "revision": "6516a9107d003d1ee112701f7bda2d0f"
  },
  {
    "url": "assets/js/236.76124afc.js",
    "revision": "05a5183514d3cff688628f0edfd9c617"
  },
  {
    "url": "assets/js/237.ff101761.js",
    "revision": "b1fb797d56129d8ce9a2025a8d69c523"
  },
  {
    "url": "assets/js/238.0cabbbc0.js",
    "revision": "8300bd4438360720a4861ce6dfeacbf1"
  },
  {
    "url": "assets/js/239.edb58bf9.js",
    "revision": "ae0ddde70fc245cf30833ea3d2635c8e"
  },
  {
    "url": "assets/js/24.78de70a6.js",
    "revision": "203b069d3a2f431e051e87f69e6b61bf"
  },
  {
    "url": "assets/js/240.ecca66bf.js",
    "revision": "7a693da5fce9bd5cfe218e3e1b26ff58"
  },
  {
    "url": "assets/js/241.6eb64459.js",
    "revision": "a89029d3325ab1db83b64b6778a5d6c7"
  },
  {
    "url": "assets/js/242.af574f3d.js",
    "revision": "dbf3aa6158e183477e28135454005a34"
  },
  {
    "url": "assets/js/243.849b3523.js",
    "revision": "19cf17180f9960ac94076492cba4bce0"
  },
  {
    "url": "assets/js/244.19707128.js",
    "revision": "d05b6563b793554f64080746a270a571"
  },
  {
    "url": "assets/js/245.d0c6c188.js",
    "revision": "fb0bf545696b92dc143c0b161c2713d8"
  },
  {
    "url": "assets/js/246.f553cdac.js",
    "revision": "d8d20d8ac85b69cd58561d4e12fb7748"
  },
  {
    "url": "assets/js/247.4f260d90.js",
    "revision": "d6a8b7077ac6be0f7e3e488cc7c2a8d9"
  },
  {
    "url": "assets/js/248.22f8b57c.js",
    "revision": "570ec10e97809fde43e5de1c35a87747"
  },
  {
    "url": "assets/js/249.e04265a6.js",
    "revision": "e9aa18b8ac43d515b269db83720b8474"
  },
  {
    "url": "assets/js/25.7c1612ef.js",
    "revision": "7b761fe8a33712542f86bdf366da746c"
  },
  {
    "url": "assets/js/250.6b74530e.js",
    "revision": "e1c6e7d726850dc86efd40c903718a29"
  },
  {
    "url": "assets/js/251.a21a322f.js",
    "revision": "560988d3550f4bd36caed7fdcdba06aa"
  },
  {
    "url": "assets/js/252.f886ba7e.js",
    "revision": "bb029f4a30daa9e262f0866798929097"
  },
  {
    "url": "assets/js/253.ec58e108.js",
    "revision": "398b7d6beec661d71d002b5343d31a25"
  },
  {
    "url": "assets/js/254.ad80f1dc.js",
    "revision": "1e870a436553b91114ebe11231160553"
  },
  {
    "url": "assets/js/255.9bad36c9.js",
    "revision": "eacb2b8eb16a15b079db7e944446274e"
  },
  {
    "url": "assets/js/256.81cec226.js",
    "revision": "a18f70a86cb6cfec0778d5cd26fe2947"
  },
  {
    "url": "assets/js/257.9075bdbb.js",
    "revision": "707e91f5f14f39890ec97fb2ceda756a"
  },
  {
    "url": "assets/js/258.dba0c648.js",
    "revision": "7af9d7a3591a31be6481ca9470de1386"
  },
  {
    "url": "assets/js/259.d79625c5.js",
    "revision": "baeb3ced94cec35c579d255d338162d8"
  },
  {
    "url": "assets/js/26.3957fc57.js",
    "revision": "8565308f823b64167cac3c0623628b50"
  },
  {
    "url": "assets/js/260.44191a27.js",
    "revision": "54e45bfa75ed054642ee9e8b9aca58d1"
  },
  {
    "url": "assets/js/261.d15c6ea3.js",
    "revision": "340472aab89c75f70a1c87af69a015af"
  },
  {
    "url": "assets/js/262.e2cf297d.js",
    "revision": "884b8bf72b585f9ac1554a27b7f49d8d"
  },
  {
    "url": "assets/js/263.7713d45c.js",
    "revision": "faceac813b6409059d36f5c022953c1a"
  },
  {
    "url": "assets/js/264.02a5377e.js",
    "revision": "2abebe78d0e96c11d4204969ce46b530"
  },
  {
    "url": "assets/js/265.1ffc4a47.js",
    "revision": "b4d2d88be2e80db1e3963a4ad732d904"
  },
  {
    "url": "assets/js/266.8317f70f.js",
    "revision": "d8c2c36b2cab785cd5ee56c4ba478a52"
  },
  {
    "url": "assets/js/267.b7385204.js",
    "revision": "bdac2c36c83f4b3d1931abac9e73312d"
  },
  {
    "url": "assets/js/268.76db94b0.js",
    "revision": "f8b3e2514d53dbe4b6bc08443ff7a375"
  },
  {
    "url": "assets/js/269.9fb70d4d.js",
    "revision": "7b604f346b1e961b0b9b3bc329c9a515"
  },
  {
    "url": "assets/js/27.2b8266d6.js",
    "revision": "3ef7252e75a3a184542806a7a9b34f3f"
  },
  {
    "url": "assets/js/270.0ceb1261.js",
    "revision": "ca5ece88bbafa6cffdf18aa3ceb05813"
  },
  {
    "url": "assets/js/271.d63ff9b0.js",
    "revision": "ec19b52514969dad9526e8546ddc586b"
  },
  {
    "url": "assets/js/272.9db1aea5.js",
    "revision": "ff948f84b513134a1a39acc8af565a5b"
  },
  {
    "url": "assets/js/273.1e483e3b.js",
    "revision": "f7dcf1b1368b58ea6155c38b60b2ea09"
  },
  {
    "url": "assets/js/274.c99f9282.js",
    "revision": "39dae96287e5c4b7d314992090914abd"
  },
  {
    "url": "assets/js/275.f17c0bb6.js",
    "revision": "8fd985d78fb70691faf87ccf5f3fece9"
  },
  {
    "url": "assets/js/276.810b91d1.js",
    "revision": "f54e69bd349a5e7c98141cd3759fd121"
  },
  {
    "url": "assets/js/277.4a2de70d.js",
    "revision": "f2b3ab54ece57aa2542d83f666f6c160"
  },
  {
    "url": "assets/js/278.a97201b0.js",
    "revision": "ea1f18fbac247a698d570230b2b1a995"
  },
  {
    "url": "assets/js/279.90a7a90a.js",
    "revision": "4456bf4af3d9d3eaad8d9a70e7a50d9d"
  },
  {
    "url": "assets/js/28.95d5f6c0.js",
    "revision": "ef1cdee21a78063770b725f5b1d626cc"
  },
  {
    "url": "assets/js/280.765992b3.js",
    "revision": "1a5023b90ea616233346c2823ac577ea"
  },
  {
    "url": "assets/js/281.28c4ede3.js",
    "revision": "e4ba7b50e27385aafa1877b83e8017e3"
  },
  {
    "url": "assets/js/282.11c63887.js",
    "revision": "6de9a4db9d197cf82c4607e97dfe2aea"
  },
  {
    "url": "assets/js/283.c0bfb791.js",
    "revision": "933c8fae5d3968369fe61ab4d70cdf20"
  },
  {
    "url": "assets/js/284.240b785a.js",
    "revision": "7c481712ba07dc43af00c6bad4ff56ab"
  },
  {
    "url": "assets/js/285.cc83cab8.js",
    "revision": "0248a781bb18aa670edea6368e8df07b"
  },
  {
    "url": "assets/js/286.11d76e72.js",
    "revision": "86e633a829a387e649e06acfcc52bab0"
  },
  {
    "url": "assets/js/287.bcb43612.js",
    "revision": "e5a67b481ac173a92c5244e214f47bba"
  },
  {
    "url": "assets/js/288.17f690e6.js",
    "revision": "898b8ed9e62a0e25d5845787845d2637"
  },
  {
    "url": "assets/js/289.7ad2e12c.js",
    "revision": "e13979a641ad328358c7e518806c1836"
  },
  {
    "url": "assets/js/29.cd622e96.js",
    "revision": "2c4cff71d3f642919afa86b7d716ef6a"
  },
  {
    "url": "assets/js/290.ad4b1d2c.js",
    "revision": "3db2bf9a5b84228a076352e187bf5458"
  },
  {
    "url": "assets/js/291.2c023d7a.js",
    "revision": "965466a5b9a49da35214400b1ab6ab1e"
  },
  {
    "url": "assets/js/292.741499a4.js",
    "revision": "5af5258ebe47e0ae81def65a9b126ef5"
  },
  {
    "url": "assets/js/293.f7d2687b.js",
    "revision": "386d70f10b6f4f3b7513b7fe550c2aa4"
  },
  {
    "url": "assets/js/294.c181e779.js",
    "revision": "cbb21680424ef8ecfaa55f838a68f276"
  },
  {
    "url": "assets/js/295.6fc3c5d2.js",
    "revision": "3790116c5c4549b29267ec0d2062a330"
  },
  {
    "url": "assets/js/296.08426d20.js",
    "revision": "f11f87ae78afc8c8ce5684b65ca3b16a"
  },
  {
    "url": "assets/js/297.df1a913f.js",
    "revision": "379e39b3b3d3e9e38af45619f14f8d86"
  },
  {
    "url": "assets/js/298.3c666ace.js",
    "revision": "6dfe6d0e27c23a67dea4888c39ce28fa"
  },
  {
    "url": "assets/js/299.90cc4986.js",
    "revision": "4a848937696a01b10482254ec42d472a"
  },
  {
    "url": "assets/js/3.38524212.js",
    "revision": "c527a98b7c8ea60616770d87411fcc60"
  },
  {
    "url": "assets/js/30.76112fda.js",
    "revision": "79e0ca239a0bea906e92eb8769f30d0c"
  },
  {
    "url": "assets/js/300.cc42e361.js",
    "revision": "c0ddf209c3c5a423af6aa70eac192c38"
  },
  {
    "url": "assets/js/301.83decfd6.js",
    "revision": "d894e3c7d5e378dd72091df045401ade"
  },
  {
    "url": "assets/js/302.37d8f415.js",
    "revision": "03f154e75d5666ef9eee288e5439e009"
  },
  {
    "url": "assets/js/303.dcda3dc8.js",
    "revision": "41f26f8e0a44ee14a1159508020edf14"
  },
  {
    "url": "assets/js/304.f1a32ce7.js",
    "revision": "55eb1d6e236355a549e6f3787a820aad"
  },
  {
    "url": "assets/js/305.7d60f813.js",
    "revision": "3a7161b0cc21c04d71827514d58c0bcc"
  },
  {
    "url": "assets/js/306.415ccc37.js",
    "revision": "3bc278293bf50b87e8a9e28eb2ed0ebd"
  },
  {
    "url": "assets/js/307.fc5b4529.js",
    "revision": "a13ca6cde3870b88b0973f05c458119c"
  },
  {
    "url": "assets/js/308.5bcd50d1.js",
    "revision": "da96b185b8fedc5c7db9ac2e93f4bb74"
  },
  {
    "url": "assets/js/309.637f18d1.js",
    "revision": "700b36f88a718e209b151be9ae3d30b8"
  },
  {
    "url": "assets/js/31.8ed34412.js",
    "revision": "31706a77c8d956143d7193a42c2889dd"
  },
  {
    "url": "assets/js/310.880b7cce.js",
    "revision": "58c09c5ffb31387238510c89da3e3883"
  },
  {
    "url": "assets/js/311.a69abfea.js",
    "revision": "1739cfe9b3efc57d92d1b9eafd5c6674"
  },
  {
    "url": "assets/js/312.2f492988.js",
    "revision": "c425848658472c10d1749c1ef2a3141f"
  },
  {
    "url": "assets/js/313.ed92bdb1.js",
    "revision": "612bf897553c5295cc8a49dd83a6e30c"
  },
  {
    "url": "assets/js/314.d7e22eef.js",
    "revision": "a5367133272edb43dc11b81bca09e71d"
  },
  {
    "url": "assets/js/315.73454446.js",
    "revision": "cf1b9479793ebd2b19fde4d93f088253"
  },
  {
    "url": "assets/js/316.945fb777.js",
    "revision": "23bd5924f8cb126e3bfeb774a14fb79a"
  },
  {
    "url": "assets/js/317.864de08c.js",
    "revision": "c9b58f184533bcc8c80067158204d082"
  },
  {
    "url": "assets/js/318.9ebe2a4a.js",
    "revision": "2ace7ecb59d4b36235e1a0f841a325b6"
  },
  {
    "url": "assets/js/319.afcbcf5e.js",
    "revision": "d241944fade72c7edf81a0690c68449e"
  },
  {
    "url": "assets/js/32.bb0bb275.js",
    "revision": "3c8554b6c3b2c2abd81dad73c770c100"
  },
  {
    "url": "assets/js/320.c6d27e53.js",
    "revision": "e69056af75f45e0787f50df42281d052"
  },
  {
    "url": "assets/js/321.69693383.js",
    "revision": "01c085c5650de11a1d3952ff062d77b1"
  },
  {
    "url": "assets/js/322.24733d44.js",
    "revision": "2f6b86438747a7efcddd7c2e836b6c12"
  },
  {
    "url": "assets/js/323.64c2cf2e.js",
    "revision": "ccdd24c524638bd3f43b672e02b092aa"
  },
  {
    "url": "assets/js/324.c9fcd861.js",
    "revision": "b2c13e865ac9da9c46e813b8efd54827"
  },
  {
    "url": "assets/js/325.27337658.js",
    "revision": "119f6f7cadffc1fae8e0aa53f251b4b3"
  },
  {
    "url": "assets/js/326.20ab883a.js",
    "revision": "8fe60412e683fbb87eaa48b962c231b1"
  },
  {
    "url": "assets/js/327.3abd0684.js",
    "revision": "21973abcbed4ad1bdbb600f6669bdb3a"
  },
  {
    "url": "assets/js/328.8ac462f5.js",
    "revision": "add2e73d063e52b3440a696b99d8393c"
  },
  {
    "url": "assets/js/329.272cf730.js",
    "revision": "def7ab9a0cc78a7050356489e1180e33"
  },
  {
    "url": "assets/js/33.e08f5e82.js",
    "revision": "13e75464dcc9482624da06c2ec69d579"
  },
  {
    "url": "assets/js/330.75492ac5.js",
    "revision": "c88b85207603dcbde7fe17debc7a1436"
  },
  {
    "url": "assets/js/331.76edcd74.js",
    "revision": "75dd522a90f35de6273b3f893f5c4bc9"
  },
  {
    "url": "assets/js/332.53be1d84.js",
    "revision": "f242209deb743201fd8ce4f1c4e8ea65"
  },
  {
    "url": "assets/js/333.15406102.js",
    "revision": "aaa1f8dd2d012c9e0ae0102a455e497f"
  },
  {
    "url": "assets/js/334.62438698.js",
    "revision": "2f03e11d5e6c9d0222fb2e143c9bb128"
  },
  {
    "url": "assets/js/335.6105d3e0.js",
    "revision": "7bfd21dbb1ab5c77223527ae0e156ffe"
  },
  {
    "url": "assets/js/336.bda72d8e.js",
    "revision": "32bd2c4d097a9a2811a92d4e51481524"
  },
  {
    "url": "assets/js/337.653f7128.js",
    "revision": "259691cc3cb91635270b5c11b4ebc731"
  },
  {
    "url": "assets/js/338.8e93d720.js",
    "revision": "84c7e49b0ec2263fbaed41839c0b92bc"
  },
  {
    "url": "assets/js/339.6a9686e3.js",
    "revision": "25097f69632c6a1e52cb03670a4462fa"
  },
  {
    "url": "assets/js/34.cf2ad804.js",
    "revision": "c852e215c1a5e247c0fe23819c4859f1"
  },
  {
    "url": "assets/js/340.78c4d188.js",
    "revision": "377bd8ec73905ee91f79c8a9f4a3f26c"
  },
  {
    "url": "assets/js/341.0999342e.js",
    "revision": "9ff1a003d9ef14729f33bef2268f2d3e"
  },
  {
    "url": "assets/js/342.061421a2.js",
    "revision": "040354fd78d8b501c48b7029d4b72577"
  },
  {
    "url": "assets/js/343.b8f4a16a.js",
    "revision": "ed8ca29d0ddccfcef8b489a416f4a381"
  },
  {
    "url": "assets/js/344.0522e8c3.js",
    "revision": "d3dd16c1a3fe079d47e76d827a415947"
  },
  {
    "url": "assets/js/345.c456a0f7.js",
    "revision": "dc7d1b1db30979829a26862581547186"
  },
  {
    "url": "assets/js/346.657ec504.js",
    "revision": "abeff20dd3bb4d7431cff6f5283d6b61"
  },
  {
    "url": "assets/js/347.3c25c62d.js",
    "revision": "cf93da74b6a6e9c7dd9533e8e14222a1"
  },
  {
    "url": "assets/js/348.a95bbdf9.js",
    "revision": "14ef796bfe29c06cb0a4dfccb08ec584"
  },
  {
    "url": "assets/js/349.039bc57f.js",
    "revision": "8429cbf6b61f0e4d1c0b21514a3f3591"
  },
  {
    "url": "assets/js/35.d9744d6e.js",
    "revision": "1eb3964b8111c5a1026dc0c980bf1676"
  },
  {
    "url": "assets/js/350.207626ac.js",
    "revision": "888dc9f3e297df3299300f185a95562c"
  },
  {
    "url": "assets/js/351.b6653ece.js",
    "revision": "3c80b274a444078875c2e5b69f90e1ad"
  },
  {
    "url": "assets/js/352.b522bc3c.js",
    "revision": "146df785b63ac5fc1c1cd9b8cf3471d9"
  },
  {
    "url": "assets/js/353.881621b9.js",
    "revision": "eb5e6c9baa382361d7092457d8bdba27"
  },
  {
    "url": "assets/js/354.48fcc527.js",
    "revision": "8259fafefe8e222a693e9acce355223e"
  },
  {
    "url": "assets/js/355.6317bbf5.js",
    "revision": "1d88985466b6e2eafeabd8f0879ed103"
  },
  {
    "url": "assets/js/356.dd9ce21e.js",
    "revision": "0b1e53afe6af9b88813455f3031c898a"
  },
  {
    "url": "assets/js/357.6d9e16b2.js",
    "revision": "1322f45ac6ff291ecb92c1c9b54ac29f"
  },
  {
    "url": "assets/js/358.40c32946.js",
    "revision": "4497ef09de95164ae040b7b98f22b338"
  },
  {
    "url": "assets/js/359.5f910f05.js",
    "revision": "86365b8d14d9dffa354146a983d99190"
  },
  {
    "url": "assets/js/36.da893917.js",
    "revision": "ca8c80456fb05ae45ab63b42cdb5932a"
  },
  {
    "url": "assets/js/360.9c0521f5.js",
    "revision": "7155d08d426644f0b80788390ba76d29"
  },
  {
    "url": "assets/js/361.68264c60.js",
    "revision": "e3cd18827da15df42b6e7077b21e1c89"
  },
  {
    "url": "assets/js/362.2a803cdc.js",
    "revision": "671ef5f314c903add581bf69cbf4148d"
  },
  {
    "url": "assets/js/363.3ecd684c.js",
    "revision": "0626ba9a675a5c4721bd836a5b25bbb8"
  },
  {
    "url": "assets/js/364.c31fd489.js",
    "revision": "b6dc22e8559824bf9aa681aaba5160d3"
  },
  {
    "url": "assets/js/365.b7147176.js",
    "revision": "078b5c338487c493cb786b033fa30622"
  },
  {
    "url": "assets/js/366.f5502552.js",
    "revision": "5d022227f98c44b48ac4b4ce16f1a391"
  },
  {
    "url": "assets/js/367.f67cabf3.js",
    "revision": "b0fd16d2d1b758d7fab5cc050925dacc"
  },
  {
    "url": "assets/js/368.2c681863.js",
    "revision": "7cb1786e39b12ff9ad2c0400dad76216"
  },
  {
    "url": "assets/js/369.24f82310.js",
    "revision": "7c8685cdb8fe1ff9ee7c6e012a911216"
  },
  {
    "url": "assets/js/37.7ab32842.js",
    "revision": "785d1b0b35cc4e4c1afa21acf7f892f8"
  },
  {
    "url": "assets/js/370.f82bac1f.js",
    "revision": "18a7eb40725493b0ae5c9e9167e45087"
  },
  {
    "url": "assets/js/371.c814d320.js",
    "revision": "d7fa4c524313685f3bf71e0138b9de03"
  },
  {
    "url": "assets/js/372.6a62b647.js",
    "revision": "846c459657161182d7760bb0faa18649"
  },
  {
    "url": "assets/js/373.b1dc1e0d.js",
    "revision": "bed79d33141d3170747d27b73a11df03"
  },
  {
    "url": "assets/js/374.7324cff9.js",
    "revision": "9ce3730311dc79d39017665d42605459"
  },
  {
    "url": "assets/js/375.2f7181d2.js",
    "revision": "cdfcfd257ffba744a33717eb367ffa74"
  },
  {
    "url": "assets/js/376.15001a25.js",
    "revision": "4cdc37c0f1998fa1c2e1d5ea8d5a77d4"
  },
  {
    "url": "assets/js/377.7812921a.js",
    "revision": "6dee8f90d6745a7259e1a1a1074be22c"
  },
  {
    "url": "assets/js/378.0527d8ef.js",
    "revision": "77e40f6b9656f19d852c72ee513b5f98"
  },
  {
    "url": "assets/js/379.49c50fd1.js",
    "revision": "3849b8e6aa64b7d0ddce3cc9bde762cb"
  },
  {
    "url": "assets/js/38.a6b8ce23.js",
    "revision": "5fa5fd81271cc29ddf601cacfe6f04ac"
  },
  {
    "url": "assets/js/380.314a715e.js",
    "revision": "aa378a40c6972fd572dfff5598469e34"
  },
  {
    "url": "assets/js/381.d8eca05e.js",
    "revision": "d251c45119b0b5bf1670dd3c7427c26f"
  },
  {
    "url": "assets/js/382.c4748f2e.js",
    "revision": "780d8c54b27a289787e8622d918b5ae0"
  },
  {
    "url": "assets/js/383.0f5cb2bd.js",
    "revision": "5cf04da53778616be4a448dc1d3b4af4"
  },
  {
    "url": "assets/js/384.dc2661a3.js",
    "revision": "d8b11d50ee2c6598addfcf0e265a3bfb"
  },
  {
    "url": "assets/js/385.95e4bb23.js",
    "revision": "844dc6f25ad6673be4ae1e1f25f8f014"
  },
  {
    "url": "assets/js/386.c0f0b56f.js",
    "revision": "73096926bb36d81e5689118a4b6053d7"
  },
  {
    "url": "assets/js/387.cff7b46f.js",
    "revision": "e7630d4f35d370996ac10f2bade5b912"
  },
  {
    "url": "assets/js/388.6a050025.js",
    "revision": "cbeb97adfcfb7e9abb9d0621574dd655"
  },
  {
    "url": "assets/js/389.6853840b.js",
    "revision": "305253fc5d94dec26f8d4a9390194a72"
  },
  {
    "url": "assets/js/39.8d3df8ce.js",
    "revision": "91adb275ed6d8bb20f910f4e130fc638"
  },
  {
    "url": "assets/js/390.50a570cb.js",
    "revision": "71826fb1c6408478d27ec5a746be2faa"
  },
  {
    "url": "assets/js/391.832d5c73.js",
    "revision": "389e5de6e68c3062dd7fcb0bf313f40c"
  },
  {
    "url": "assets/js/392.43514cb2.js",
    "revision": "f999bdc207fbc4d0bb0e17d8d93e16e7"
  },
  {
    "url": "assets/js/393.9858a70c.js",
    "revision": "dc0559b351d04f309de1ffa3eecc229e"
  },
  {
    "url": "assets/js/394.8e572258.js",
    "revision": "ab6aba15d518d51cbeba4ba34cbf8e66"
  },
  {
    "url": "assets/js/395.e88fe73e.js",
    "revision": "226f91d218f250e1925ae5bf7136caa5"
  },
  {
    "url": "assets/js/396.f42162dd.js",
    "revision": "7f5540282a31e31e84341e6bc62b1fc7"
  },
  {
    "url": "assets/js/397.0a18d7a2.js",
    "revision": "325fea96c02e7fb7edafe07873bae7db"
  },
  {
    "url": "assets/js/398.f4c9f07a.js",
    "revision": "e69115abc24b68c15b80c3616ce36b8a"
  },
  {
    "url": "assets/js/399.7ce4cd5f.js",
    "revision": "4c82f29dcd8b721bf4ac1f093bf0d45a"
  },
  {
    "url": "assets/js/4.a85727f4.js",
    "revision": "bd5f15e972de8a60fa9da59c48ed9d00"
  },
  {
    "url": "assets/js/40.e0522198.js",
    "revision": "5c4d0b02bed6a166f36b23c3a02e6af5"
  },
  {
    "url": "assets/js/400.bb0fbb04.js",
    "revision": "67fe985a91b1b34d61790693e62440a4"
  },
  {
    "url": "assets/js/401.7239c3d9.js",
    "revision": "ce6260816b2e026a1df45110bd604c3e"
  },
  {
    "url": "assets/js/402.e805d245.js",
    "revision": "afb7104368346e7fa47a35a1437da2cb"
  },
  {
    "url": "assets/js/403.aa4a1d77.js",
    "revision": "e5b1046afbb475e1410fee260ea48764"
  },
  {
    "url": "assets/js/404.6f92f515.js",
    "revision": "4eaaade1fe7463e7c8478f9e195ae490"
  },
  {
    "url": "assets/js/405.7c1ba4d4.js",
    "revision": "eb3d357f78d6e269cd4b35ebc38436c3"
  },
  {
    "url": "assets/js/406.c78d47de.js",
    "revision": "848881ab267bb62905ede185af57b1c8"
  },
  {
    "url": "assets/js/407.6228fad0.js",
    "revision": "7543de592b09c41c5b55a61d0b15f57d"
  },
  {
    "url": "assets/js/408.80ac6962.js",
    "revision": "b2056b12d79cc151700b960ac83d0b54"
  },
  {
    "url": "assets/js/409.a3a0af48.js",
    "revision": "a58d00f9fd692ed48784a3e7d44c6d77"
  },
  {
    "url": "assets/js/41.fd18c0d6.js",
    "revision": "f1353365429d98dfca16f3db9244f967"
  },
  {
    "url": "assets/js/410.aa424f81.js",
    "revision": "1e30b4b554fa9ecf533acd256ecabd71"
  },
  {
    "url": "assets/js/411.52a1598c.js",
    "revision": "296c3126934ffc2b37f37320f9c908bc"
  },
  {
    "url": "assets/js/42.f149b4a3.js",
    "revision": "b07d82757fdea03ade4a03210c2e6fa4"
  },
  {
    "url": "assets/js/43.713a4e6b.js",
    "revision": "053d9fe081b35186ef67838a3b36b6a1"
  },
  {
    "url": "assets/js/44.aa8365b9.js",
    "revision": "eccfa476b8834c7c62b9199d4f531ce8"
  },
  {
    "url": "assets/js/45.bf9eca5b.js",
    "revision": "747cb7f799663336d0e097a8fd4674d0"
  },
  {
    "url": "assets/js/46.7c97c194.js",
    "revision": "cada65815f0232304aa688b2735334f9"
  },
  {
    "url": "assets/js/47.32c65bc7.js",
    "revision": "7341785aab6d9572b3ebfb79eccb1fec"
  },
  {
    "url": "assets/js/48.7391a1ef.js",
    "revision": "9fe7742e118783e332dfef08805b0691"
  },
  {
    "url": "assets/js/49.2bab9a9d.js",
    "revision": "d7acea1ef269dd279b31e7848b3b0891"
  },
  {
    "url": "assets/js/5.34a45051.js",
    "revision": "bd7b1d4aba8586b8cd2f07e9f38e5abe"
  },
  {
    "url": "assets/js/50.7312fb2a.js",
    "revision": "fd95ff39c3903c91e9e42d6736c774a2"
  },
  {
    "url": "assets/js/51.16e1473f.js",
    "revision": "d4981243a394fcc85cec7a792266acf2"
  },
  {
    "url": "assets/js/52.cd60e7b6.js",
    "revision": "1c6d74f0f445c8c50ff0927c52ab9b28"
  },
  {
    "url": "assets/js/53.2db89cf0.js",
    "revision": "7bf5a51ecc13de7aafcff4930eb270fa"
  },
  {
    "url": "assets/js/54.7cc21f55.js",
    "revision": "d775abc987ded351ae9b27f110682497"
  },
  {
    "url": "assets/js/55.ee5b3cb1.js",
    "revision": "2518531e615b183f8e5616199f68f4a3"
  },
  {
    "url": "assets/js/56.f4749c75.js",
    "revision": "0eea6e1bc282829f93f9fd37cb7780fa"
  },
  {
    "url": "assets/js/57.4eba7d2d.js",
    "revision": "38bf2b480baa1fdc0a5bbeb4b72e6f88"
  },
  {
    "url": "assets/js/58.fde9831f.js",
    "revision": "a5675863e6eefb2cd71f6ee85998f74b"
  },
  {
    "url": "assets/js/59.9f562975.js",
    "revision": "aaa15fc819d99f4b8dcac043397a3187"
  },
  {
    "url": "assets/js/60.dc4b605a.js",
    "revision": "656d2cbdcef305f25f45649e2ed9dd60"
  },
  {
    "url": "assets/js/61.1fcaa390.js",
    "revision": "298ea352101d1a87e56103e66ff79a54"
  },
  {
    "url": "assets/js/62.b9a38620.js",
    "revision": "d2ee3234c063eb0f4951ee881ad15446"
  },
  {
    "url": "assets/js/63.02e538f6.js",
    "revision": "ed9e3917b42ba2bea7a785a6fd6665b4"
  },
  {
    "url": "assets/js/64.ba6412c7.js",
    "revision": "2e55c18e4228df32b8c48219efc8da60"
  },
  {
    "url": "assets/js/65.43a2f558.js",
    "revision": "b28039d7cfe9ec2debd40ef12cc60f11"
  },
  {
    "url": "assets/js/66.4a052fa2.js",
    "revision": "ebe6527ac30d1468b9b8a7b0a034e5ec"
  },
  {
    "url": "assets/js/67.a6368c14.js",
    "revision": "d3d40b6cbcbc1ed71a13f284397476b4"
  },
  {
    "url": "assets/js/68.c31a335d.js",
    "revision": "511681d69f61f8fe6e63038a3fc9422e"
  },
  {
    "url": "assets/js/69.0629d78b.js",
    "revision": "fb16448ea7a7ec365726ad8fd78f9674"
  },
  {
    "url": "assets/js/70.9b0729cb.js",
    "revision": "f483a7e5b84b23fec470aa9485abe580"
  },
  {
    "url": "assets/js/71.99a4fd49.js",
    "revision": "d5641524427292321c1b2d2c650e7c4e"
  },
  {
    "url": "assets/js/72.b4427d96.js",
    "revision": "6000f13b743ee4c40237def02ffa30e9"
  },
  {
    "url": "assets/js/73.d438693e.js",
    "revision": "be3a742cd1d014bce509cc848d823dd6"
  },
  {
    "url": "assets/js/74.dc79d991.js",
    "revision": "0b0725b94a5c514ea3cd0d2e51187c3b"
  },
  {
    "url": "assets/js/75.b7c0bf23.js",
    "revision": "3228cd0699d4b550043ebd868832a833"
  },
  {
    "url": "assets/js/76.91882ac6.js",
    "revision": "c15a45c15dbecbf91e4e4fa69f47865a"
  },
  {
    "url": "assets/js/77.593433bd.js",
    "revision": "dc4f318b33467d52305bbcdca91d29e2"
  },
  {
    "url": "assets/js/78.56e62e5e.js",
    "revision": "4241147744bb1633ba7ba8b4d2352c20"
  },
  {
    "url": "assets/js/79.3851e858.js",
    "revision": "8f7cbbc0d9ca9ca86e8bce48ec1b6a88"
  },
  {
    "url": "assets/js/8.043b476a.js",
    "revision": "44b2217217074a5c545ad4c78d199edc"
  },
  {
    "url": "assets/js/80.71d52d6e.js",
    "revision": "9569aedbf297d89a5b6b6244d361b5d7"
  },
  {
    "url": "assets/js/81.5149c6b8.js",
    "revision": "18d8db35fac1bee4e5198eb29e2d0db4"
  },
  {
    "url": "assets/js/82.7ec33ef2.js",
    "revision": "c87984f7b97f5ff7b53a6124c19f5c4f"
  },
  {
    "url": "assets/js/83.52d10d46.js",
    "revision": "4c023765d3fc451c5c8263adf1b87258"
  },
  {
    "url": "assets/js/84.25042566.js",
    "revision": "20dfb90362b868f532042d5078a79942"
  },
  {
    "url": "assets/js/85.7d7013e5.js",
    "revision": "9ba1cb559d40acdeb49d82153a2bf886"
  },
  {
    "url": "assets/js/86.c2097731.js",
    "revision": "8e5cfeb847ce2283c3e82f81aeeffdcb"
  },
  {
    "url": "assets/js/87.0f1316d6.js",
    "revision": "551d69116b1226a02556eac8856b31e0"
  },
  {
    "url": "assets/js/88.da733437.js",
    "revision": "38811c773ac969347549cde429f1289d"
  },
  {
    "url": "assets/js/89.f6d67937.js",
    "revision": "e4cb4e184c94757802af78cb4cdabe99"
  },
  {
    "url": "assets/js/9.8b163532.js",
    "revision": "5e4097e7cce85cd00879b317931e519e"
  },
  {
    "url": "assets/js/90.cff14b5e.js",
    "revision": "235b00d1b4abbe282080ef79ba172713"
  },
  {
    "url": "assets/js/91.d9720dcf.js",
    "revision": "e19b4e0a7cf5be4291f6a4de032c68b2"
  },
  {
    "url": "assets/js/92.59881622.js",
    "revision": "e02f7f2cbdcba365b4b58ab6a61392d0"
  },
  {
    "url": "assets/js/93.2b8a6f8c.js",
    "revision": "4bae8d96d272d75668125451322ee072"
  },
  {
    "url": "assets/js/94.d71ddf5f.js",
    "revision": "a3b6fdfec78e35c36e13f3788c1855e9"
  },
  {
    "url": "assets/js/95.b85ef31d.js",
    "revision": "1002ffe33af6bdf6e5dd97096dc53d81"
  },
  {
    "url": "assets/js/96.d50a233d.js",
    "revision": "a1ee85fbe1bb82ea64607f82f8a60993"
  },
  {
    "url": "assets/js/97.554ada3c.js",
    "revision": "62fbc07752678e822b70a7ff00a43dcb"
  },
  {
    "url": "assets/js/98.ed82f3e5.js",
    "revision": "c011a9193a04efdab8eb7fd6f487ba69"
  },
  {
    "url": "assets/js/99.41795172.js",
    "revision": "cde0c262d08699de8d55228ac3ddddfc"
  },
  {
    "url": "assets/js/app.a8939599.js",
    "revision": "5b4bec2087d714bf5844b0777d992511"
  },
  {
    "url": "assets/js/vendors~docsearch.a4198619.js",
    "revision": "d66481b8b9070e66a0d61d98e5f0db85"
  },
  {
    "url": "index.html",
    "revision": "f7570257bf92896987ea7b4a7b7b91ee"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "191c5fd8e6a85e8ecb00f1862f65aa9c"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "ddfeab1afb0b9a6d1d9d6d28b5bed479"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "5fd1b244f87244f595d5ebe8d2276143"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "f81550cd75193e37c63c8fcfddf2dcc9"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "13746b2b1afc15134ca22473326cf347"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "5a176ed6c410cb582f14dad649889422"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "145ed0636b112d7c206e7af73a63944a"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "e556cc0149cf054d52d7261ab93b333f"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "de06695bf2f36bff90f0a49ca0f13cc1"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "78cdbb240cafd9dd0b43c3f0459989ba"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "0e52dabef674cc0614b3d78ce648a27f"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "8fb97dc923911969df1ccd239713b305"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "4f956856210f61e66d68737489ae16f3"
  },
  {
    "url": "master/api/index.html",
    "revision": "70eb71ae2b0739ecdb5adcf54480ca9e"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "d1c939179902db37d4d046d5416be599"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "ea5fdcb4d499e75e4de2bfc684e9914e"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "355ba22c51e84eb502f24e708f8620c5"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "45108ab217622150998f67c6552adc09"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "297c9822e87f95a28e776cafaf09b7c6"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "89478ebdf65e765a9b6c8472eaa3f341"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "52c59fecfa9affcc85ca13539f3afbe0"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "b5480c79a61f8c1d27f6079cb5b29eef"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "786f21580e3e728405a5d6c3e7bdf41a"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "9f317112e00a85d8ab974c8ac4b7b849"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "7b0ea255dc1d0ac6ee4d6c4deb503a31"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "3f3cb7debbfa1647d1056e666498fbbf"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "46d136898f8a9ba0d9570924d6b1355a"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "346f0e9b4892a90d37709279bb0640d1"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "f251fe7cb4635090fd85ce821baf88da"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "deb8c592e6eeb2d4c553de35ec6da062"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "3e471aa4874addb5f77a86c8fac22413"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "af28dcf8a7399f72fdf34f0a35a0d44c"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "7f3510b9ff128000b60c71d2c93bf242"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "9a69a9214ac4e62d2c4feb294cd9692c"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "d26c6c2fb308b6e1600ffffff49527a5"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "1884a1d7ea95648ecb8bfd21809c26ae"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "f101c0afc37cd44473bb3a0ae50d00d6"
  },
  {
    "url": "master/packages/index.html",
    "revision": "44c08a1e4048ba661bc2883b8c36e210"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "24512d5c7be3ea3289cd8a6abaa70933"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "fb2a36727dddd625154ee240d9e1eeb3"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "89820ba99589517894e30650ea72fe3a"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "5a14f3baeccb44c6f751183d2de42981"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "4980d03d93babf8a109f26ee3512a2d3"
  },
  {
    "url": "master/packages/views.html",
    "revision": "b140d66205f2cf769743fdc91f01d4d5"
  },
  {
    "url": "master/performance/index.html",
    "revision": "72b39c0380561182f04cc0d027665818"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "c6a30d014c13d1d51a7da3e09fc595d3"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "e171627e1dbb89d95b742a91919754dd"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "9c4010b194d9bf97a0d4a97641f5086c"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "053a4a87ad6797f9703e42089a44cc11"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "39ea5f42161eaa7cf4d6fe6c64fc2f74"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "34b2acc48043cc2012f625ecc4fcb4e0"
  },
  {
    "url": "master/themes/index.html",
    "revision": "fbcb500350f1b237904ef9a470cc41d3"
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

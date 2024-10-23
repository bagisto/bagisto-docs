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
    "revision": "a4fd44a534d0af69ea3ae62a5d400f1e"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "5dd7780541fe0c043dd791d1d8599c47"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "0f5bbbc5928bd02b8089948dd4fc8c06"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "2d327b7ca3ae2bcc7272ab9a91ada090"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "42416e7e131debb0e9363f7bf63e544c"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "4fd0780420845e3087f8cde7c01ccd24"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "a865dfd11501fff0b4e16034e05a12fa"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "245f5daa9651dcbcd4159c105458cdae"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "5eabd2b61b3eed6ba1034319360f4dd5"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "b769df240cd8475c5bd030618f53e0bc"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "001214664f95854f2113d2dcf4b50a28"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "c10c6c354115b7fe549117506de12d17"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "bb8f193dd7a812cc3b100102374c5ee0"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "751e8d4dd1bf166f31be43cf2263c39a"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "0fb49dbfd7ebae816de2b8f9bf3f5377"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "2390f4600eb08e25d0bf27f3f8108099"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "8af7ceb44c50e4905b6a547dbbe71293"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "fd656e1905b67a29bcd2c3114895c39f"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "b04476788d2e781b93d60e4b4dda927a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "42e7fd72b458188ec3351952e890f679"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "af7682128bfdb25ccfff01568c8124e3"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "a75cff711e25619854245df54b3575a8"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "fdaa09527eebeddb077bc470be21aeb5"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "56265c5af4f86271bb7f30abcc34bac1"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "eb8e55413359c872a821238429254b8b"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "4fc7fd777b7cd11cdca84bcd7801c56b"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "e2e6298dc8762016249fee4e9a2a94cd"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "6d4fe7094f3b896efd4a04627f7e87b8"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "d3be2550e7e476a19a4b360a67c2cafa"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "7cd0e045f874919b3a0cec51265e267a"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "4a199898937bcbdc666c0a73d80c64ac"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "f1f0950eae4a41723d83da70674c411c"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "9cb5723abdb2c1ea5790d2666ca7ea95"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "fb170b4f390a9fd03aafec6d7d84b1d0"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "80c1092273118c29c2d0158daef24e12"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "ee4a5b6d0dce4af9acc86c928175ea22"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "9fecb5d75f16825499635cf5bdaaf564"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "55aa38cff1c8ffde6625a7124b4a6137"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "4e23e768a439ffca72e1441eb814e98f"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "bf937ef909a0776a5906b21b2b5c9796"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "17829b67555e37715100316cab5bf1b7"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "acb6a95d4a8d70d18ab81f65df29f53a"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "2ef79a19d90fe9b55b51d6da814e5fc0"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "49e681ed7d2421aee885d3df6fd8ad8c"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "1386049ed463c8311ec4e61f09ebe932"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "34d62b6e4d2b5648c08b2a1cdc4ff699"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "b22f8cc1980f1db96e1c3d3979d2a204"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "112ac8adac96c4f3d9d40c5460c96591"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "bf9c881def53b34ad29742b223b71419"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "3dbd63db958734da07a417d3b46ef41e"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "287df2733ff6fac7df4dfa6e40f1417b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "6df06b24bdb34348baaf7fb3acff5f12"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "7bbb8b6eaaaeed48313b0991ca6312a6"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "37de7b061221d414e77e7317c2719469"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "559ac849764d82c3c6b0c537ba39e492"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "7a29dd36ef2e9355234c38f487c47906"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "07cc2d44d54fa1c621fabd6f0ab5b0fa"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "612dd59acc2abff86ff0a79e4acf5a3e"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "f07c9674409d19bc228c6b8c3e57fc51"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "365e9f8d3eba8e3bb0b51f81ba15f6fa"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "970ef0d0175702a9dfd9feeb9fb80a70"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d68787fa33572dbbda05aa1ad5a201cf"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "d0769e358fe531b68bf40577283563fc"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "491c6aa03d65869f745d5dcb00e0bf32"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "ef84bb86b10fa3aa74abd2f1d167e7f9"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "71f945a39102e10ec30f3cff4292cc99"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "db850c40d47ac8269dd7601864f8eb2a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "1ae5cd8490d673108f9139b5477ac408"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "68ff8f3e7c7583c1b17e3d5ba4033981"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "6a95498e4011cefffab9ee2f4640c82f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "2b00934bb573deb9d071a808d90f6166"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "3b83f2475b56d9bfb434aa172a692137"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "61ad4289918b898ee807ee75ebb9cc70"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "19940040f55de83e344a72007c7cae84"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ef9fd9c5f642c2c6ca788d3c6988f3f6"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "366aa4cd372d57713acf55e1b5afb29e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "404557535732b3a2fb922403d509ac6d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "3376c5f5cd1ac26e9a40d029c42d03fd"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5411f7dad93025a3f1bf79e0828e2028"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "c470f21cd28afc19a86bf76141d0260c"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "594b8728bf95c32496bf7bf9521f00cb"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "24c30249f9fdf8684aad00bbd8c1bb30"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "e57d0f07810b2a21bee92b2d0eeec0bb"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "993612732bb388337f505af1d4b0fb29"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "942b571df4e0a17952873043b3759082"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "26788cf1511230a53ec5355e00517859"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "c87a361263fd909ea2b92e51cedf5a6c"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "b9970311b444c5d1ed414c2c92ad97e8"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "f503c6a96faa9bae049de8f879ea5b64"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "db7262d96520901fcd7670973e7b6a68"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "fa56a11cfd691e5d06960f2a4dbd021e"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "a3725d2211352610e6d3e5916d950498"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "3de98da40916478cf4fd7f56a40ba88a"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "8c365f29b16efa3841035aba3e84cc7a"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "91f10f62cab609dd170ead0ef537bb03"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "aad331943c192bb78ab5290707efc581"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "d9818f06e992fa8ce82449523c14f8f0"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "edb9f40c38a30bb3a76b715b7cdfe812"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "fd36a4d0e354411caa05df818f58e30d"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "86c5fa1b0136fa7dd41852019e23defb"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "4ea4853a8eb903f6fc0f47267f41b75e"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "033e44a3e122807a2986c89622c8765d"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "42eef11b57b5ac8f7b1059dbb3f51d74"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "a9a24f41140e72da6008006fc1944468"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "66accb0b746b4078804727b81e3c991b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "04bf359450d44a5bd062bde06ce9582b"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "172017e1aba93f8535b914725ee29e52"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "79b4ea0959db6395e3ff21444af99172"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "19a466b4dc98d4acfda848f79e7efcb6"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "910a2dada07128bc1170b2f8bf3318a3"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "242010d12a6787bf6cbb42ed40feede3"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "feb65c707bbad4294660adaea72d71f0"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "4748b28f7fd1bfe8519b436131dd7c64"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "abb2b7eef83f99c5180b551f829b3f5d"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ad52661c5bc506e79debc1897a6efc41"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "2795cf1da1756d8b30173113da6c1dd8"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "6514189e18ca17f2149cccc85afd37a4"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "1ec4bce58d1a59ec41df683318420bab"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "5dae19af15f472c04275c1801b7ad0ef"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "6db0fb504aa928e1e218bbcee6bd9eaf"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "e53d7a87175f0a7b5b7791eb3bfb4272"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "385f28f2537eb9f3777cf7a0695f9a9e"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "acb57a1e9c856df040e4989dcc9c377c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "cad53bdaf1281468a432f10c7c2a399e"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "c8ce5b41b7b01ec7e04abfea03213da3"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "82791a025e262e19fe623a49fffcccda"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "cc3cf566b66b189855b5a8ca81038f51"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "1b86f2ca3e2a536756a45084ba521ebb"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "1402b6d2078965b065c92b8c64942e7b"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "03f3de306dee15b30fc0c3271fb2dc9a"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "2b526f6f80397e38fa854acec4e8d8cd"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "508ff30e67da91aed6fce2e392624cce"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "0123c2f52dd109719b0838877d616596"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "5c87460fd5cc03c262d99234f5deb758"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "4312bf8febb52be96b6f92d62207c092"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "70022b8c2f75642b2c9f89e6f02ac1ba"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "95e24978a64cf4c1ab8294369527584a"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "491891f4809ccb3e10573b751dadd5be"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "3165095101c51523a56b27b851cf6148"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "b65d63e477a6ef7288d2a74bcf427d57"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "f68aa59512797c2b1320b7f5fdb4f238"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "df33247af2fb4a097290c7c8af6081c2"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "b5885d51cbba20df7afd2fd576526f90"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "c066c26b2be87ef4c4690fa2b669ec34"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "f7e6d6388bbc029c4ee120b55a949525"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "124e2ae96f789b95f2f6fc14dca182c2"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "c0b69c2977426df53576238447d71ed5"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "9c6e3c9c780ad982408e26856c2f0a53"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "ac773b822e119413ddb65dc35ac286f4"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "275a38e48a262c2b05ac19c73e26b05a"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "7f2dc132937f82792dcdd77ae034e15f"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "29050e8d7204f1545b6a7410d562d20f"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "d9622d8e264682636f39daae533f9aa3"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "6b62ce38d96799bc1797ca9fe9a641b1"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "ed575ff2a9965ee529cd9a6bddddb5cb"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "4121ee157ae4fd78e2897254d5f9caa8"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "f8e085477865d2236a0682d8eb102542"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "96e03f38a63d3c0612e9dca37c1e038a"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "153bd0792b4eb08cd943368102708368"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "76e4a26b35d46ff2273c52f709b88aef"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "e1d6ee508919f24f91d83da6e90232fd"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "01ebbfb770ec890c927e022d92d3b284"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "81347c2b401dbe15dfb1a3aa34d7fd29"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "b9698623558fffc98473777e90f1074b"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "9c03bb849211e48789211c65c5a7c19a"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "800ff9401685b28bfdd83cf7692456ec"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "d41a318d1c31897594c786576058b743"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "0b367ac7c0034650d77ce6fae5fe2b3c"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "92f936490a867c652fc1fb4a12f03f06"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "f87d5a02413acf1f0699daa79ef6ca39"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "65990f0172a994559cd9b8a7b7ff2d36"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "2b4d1d1ef3b2f970bf09503df2372db9"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "eae7b8e6749039f1f71ad3243284f699"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "46823c1af0b184621fde6190b2367a5b"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "74c8925722b841a33c80eaf667d67d6c"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "696299f323845e13c36507d5e6eaffab"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "ce83bc9382908d0312ba32f6c9da0ddb"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "ac5d1c4e9339f3e86f58cad31206176f"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "03c3eba941b0597cf6b88d6ff1d1a26a"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "ac22aa46502413443a99ee1040a1f4b7"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "921c8a667eb292b2882658f3b0a3bdd4"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "900346939fc20696d876b2c445a5ead6"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "a7c41ec38b691c9558ec57fa0038366c"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "c0b70dd0f822af5fba8b567b5427605b"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "cda7e7d4dc4158e06cdd1031ba1b9f96"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "510a3ac4ee258b25aa287be1bc36ad41"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "c2f49035b6e6115f229f5dbd5a6c7390"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "7eee35e04498f9fa3ae3324ab48dfc35"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "6415341a4833b3ea4b14d82a86997729"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "f5bf6e3a207245753eb502583de65772"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "46ddbb448c7599543a2b6598d904b247"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "f462d34572c31c417d56bd63d0b1bd32"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "02ad3780051fd8f9994f38ed3e04e561"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "2b1984feb4826740d425a8a1e9b30cc7"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "91cd90f42dc277fd1b834c9369242879"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "dc1e937224a8d16d6c34b0c9d928699a"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "f8da5971ccddf42cc6fe3157fac1874f"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "426dd0f3532a64d78d20439e3cf9e2fa"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "3a6bce33704f9ace77ef65971ddbafb6"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "94a1b5860592d8c33dd2984684cf7715"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "374939105d5bca41c81747b5a2034456"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "6e01f30abf2c6e8e23311f62ba565b46"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "c3d5ee42da3d137e6e1f3cdda4b58045"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "e61d752158a9a4589f326403f70b128a"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "f2349fa96c1f9dbe6e20bb0f2fa54c38"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "b7cd653d24112a15493734544bea524a"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "8cac8da907f2e23ed491ba824139ee4b"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "0952335ec1227acadfabd8a2e5773185"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "d28373901e8a98c207d21c827851ac96"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "92f6ab5f33c1504f6477a8970bfb6189"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "bc37702a5eb93f4eace71551ab6cb1b3"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "b5d823490e3fa90e1e36bee2294cc2ee"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "2334ab2bf032673215c4c7b1132bb3bc"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "b4a691fb631293fb099f722ad8b29026"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "abd84ad85dc1b0bf7a333f74b638fc58"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "e1f39e7b1736792b129eebb6847b22ee"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "6a823af8183ef00b2ab2b0d08061ceeb"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "165b0949a4b5f24002a58aa3f2f74e7e"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "ff9509a464d0e70b58253062e9a66e50"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "1ae72d5a48044450caaa3643f18a8497"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "9ae1c95c8e3d6b1b74c576ea8de2e41f"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "feca83fc6a2a509753bc3347939111bd"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "949cb9ce783b9776db8f3be03d62dbb9"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "06c86de3dad2a484e228096f03a195f6"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "c4dbc640501002645faba799359e4b33"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "ee755812d20cd3dcf17a9fd23db1ef8d"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "cdc5edf2477b39126782fec9d0c89a7d"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "604c6ef79559bed734ddbee54664c756"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "b76e26d86d026d135078c837624e469c"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "55b0dee79b383167bad343f2563a9838"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "ef653003f7c14493d1412a6e189be46c"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "97fc755f7c2c96bd269fdba220aa3b43"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "a1fd7e47f54ddb69c799d1e1b3b649af"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "0ccfc2844e973d9a8142b011d4855c04"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "5d0de8a71679f996b8d4f052e2b21f27"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "6ea90321fa26e7d52fe53189700dde1c"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "11584d5c67004044ef75f362afd4dd56"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "5fca00600e2b321f11260fa653129cc2"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "58fad1bdd342ecbd8d22da627214ee9f"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9539235fff1a476ae07d8cb027d2525f"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "9e05714b96dcf5c1c9f5cd113f222300"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "99974c884f8c987683c6f0dab302bfe3"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "816d8d0be7f819d061e394447b236c86"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "8f5daff78d21c94d1a8c7bdba4d0a26c"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "123b506e1698ecc4c3d59af5bac3e022"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "3b9bedd4be55b890e8b037c0e2286e1e"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "8afb9b2df11d5fd9675611a3d20c0793"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "c5098693ea6445824c4594f27159c9bd"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "300d5aa09b7cde34add450eb418bc063"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "030b359876893d72f83a4ab2218dc295"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "42ecd1c1d61dc0795827aa5aaa97bab1"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "2d99034fbf3559450d0b385d1d117bc3"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "493a5d3ac5e480e9b7d64b4458c9cc56"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "c1c4abcd8ed98a09f32230a404ce5e48"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "ca96a8e2407415ac03873c54b1a80578"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "4588fa2cf77af51f25658563791e228e"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "3360edd986de57d3f73b2645233e86df"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "9e29b156a73ee11a4d1edd3269539041"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "fd0b97df5d499bfa7c4a0b8f66102ef9"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "3553488b8242de2f0d6658f6e23115bb"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "b1f31df3d28de3116d99c12d2ba4c545"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "0e148e2c17677d53ecf53473aa2507fc"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "3482fd541b2e92da7922565ac3d3c077"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "5090271411ab275aaec164e9477f8b68"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "85cfbb7c7f5c9a487080d9f1bd3e0867"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "180e2c40adf71e39d607785cc212ca81"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "0e9e999c1d2710e730c794fcf3b4fd88"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "a64b8f665f5a1f3057d3645d30d93623"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "128ffffbbafc37e573b3e37b82d7b912"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "612aeb96af8519ccca7a0eab91a79f1c"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "bf2346e1e36e42e54a956bdc70b861bc"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "637f34bad61dc17290e32424b0946765"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "78748c788589bf693a0b6674efbb1b8f"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "08ad71aed3e5f230d4f171a631a3413d"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "af50c2147becd50e2386b9256b588e60"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "456fad6dd347855bf6d348c487363d35"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "31c50bf9948317d2a6ba580f59065f59"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "d2ef1fb9f0ce8f3c4612eb0fc333362e"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "572c728212e83adad2c9df15de4d4325"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "5a853e60e55236454fd385945ea43c11"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "626b6bd8835734bd53b4f4581814b448"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "1fa87c930e05e6ce29022c254f0f377e"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "ff1a18668ead04a75cf08a2170bc3557"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "3ee5687588a80987101405ff5748a67b"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "329cee21ac5f7876bd0fd757b78014f9"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "99312bd14365d5354a46d16da8dd8f34"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "0eb6001eea98a5fd26760bdb1032ec26"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "436260bf17671be96bd9be3ab112268c"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "134b38f0b4c90fad25d897ea81a1fe99"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "fa8022ed128d3fc748996b5e409d058c"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "9bdf9153966710da429e7bb2f124f577"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "b324c8b4e8d23f38637efa0bd7f0bd50"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "e49302ded85d322bd8825a1c3086795d"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "5acf3fbbcbdba92c838683a858eec563"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "3ac92f19d439d9a1bcf3d4db467e696a"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "8e30f1772f75da269b0e4ce603206828"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "0a49fb6097fe75f6608c95256971f283"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "1686e4ae1f01a31be637e1d6309c4d9a"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "4508d0283d944311d642c05f36cdc7bd"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "e212954a5b95ec66528a3ce783dba661"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "c3233fb82a62acfe6e88c3fed7ebe4ba"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "9445e9802461ae33471ef844d4120b58"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "ee5300d79d4fbd43bed212ba133a71dd"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "290d63115844518cae3a45e633e0bed4"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "2fd20e1da9ca5c089eb7cc13e7a325a7"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "219f948e0e449446996205fd8a777b5f"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "ecc76d0bf9915d2e211c582118df11a6"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "9fa3986112072ac3cbdb7e6322748610"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "324c5d0cf5c46b9041ecf1371342b787"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "b83c47eecd334cc846da0be91563bf2d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "3426bbd6257a304860db990c331ee14a"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "4c9a0e2cd08f7e790bd9d0b32b99c7f7"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "0f37969149da7828b0da55253b785512"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "8b4afdad524f8a766401af575e9911ca"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "c9c4dfc359cc35355c5d98f2a52f6494"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "189c47a876b9ebbf75674487f53623f9"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "3442c0fdf31fdc29f09d0328e65290e7"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "7880c150739980f1c141f0ac7e76f411"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "86a6a2342bb308ce7f31c40d040a7fdf"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "aff9c29d9d0a86780a6448a297a5acf1"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "90a4a0df679f97040aaf3bde921bcdfd"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "bd5f0238c12e6c1e61e226f7e510406f"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "aebe1f840b54844b6bc00f73d2c45bd0"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "2f767b49dc69d7ae365c39ac6d02a4bf"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "24bcf5c257152d12d002983b5719f638"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "2f446b045c9e1b30bcf6e36581641a0f"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "635f20b2e8b8547ec6df1e720bdf232e"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "117a9856d2c46f81d4b1bcb0e75480a9"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "6426fd2fc9c2000faba83c84bf4099f4"
  },
  {
    "url": "404.html",
    "revision": "e30c314d992460b7e0c344b514af7e9c"
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
    "url": "assets/js/100.bf663e68.js",
    "revision": "37bda28eae8b72c61e63677d7504c5b4"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
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
    "url": "assets/js/106.f8da0760.js",
    "revision": "3bd828a93ff55746c2f740007b42f9bf"
  },
  {
    "url": "assets/js/107.ee8630dc.js",
    "revision": "aa28805fd75ef67cf9015d659be98c27"
  },
  {
    "url": "assets/js/108.8aa12172.js",
    "revision": "636a77cfe260b51b0fb032ac3a42f865"
  },
  {
    "url": "assets/js/109.56a0ee82.js",
    "revision": "4840a6dedfe7e6ddf41b8ccbd89b55b3"
  },
  {
    "url": "assets/js/11.b7206ec7.js",
    "revision": "b9fceafb37f3e146850a52dd018e2898"
  },
  {
    "url": "assets/js/110.022deffe.js",
    "revision": "efdb4c079364f30b41be1ffd39303aa9"
  },
  {
    "url": "assets/js/111.a6145704.js",
    "revision": "d2c5a5a0e188d4aeb6cd9befbd1be5f2"
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
    "url": "assets/js/114.91e0833d.js",
    "revision": "bf7abdf198c63cde40c4a5781158b75b"
  },
  {
    "url": "assets/js/115.2a994a20.js",
    "revision": "c734006ecf3c580284a2416f2c7e3cbe"
  },
  {
    "url": "assets/js/116.ab93e486.js",
    "revision": "437a30762c842a43983140d58a6c204b"
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
    "url": "assets/js/120.f7957dcf.js",
    "revision": "f7c92f53340e4261dbc1e3574f872a5a"
  },
  {
    "url": "assets/js/121.62ad709e.js",
    "revision": "3679146969e25300895671f1d5e02988"
  },
  {
    "url": "assets/js/122.486ff504.js",
    "revision": "38d3a8aee37c726de6a86c7bdfbbeac6"
  },
  {
    "url": "assets/js/123.b977b17e.js",
    "revision": "cd120e8c972a8882950ae1fa79ccb78a"
  },
  {
    "url": "assets/js/124.90f11753.js",
    "revision": "ef261c3cc651a66a1b7fabe010dba456"
  },
  {
    "url": "assets/js/125.e0c09998.js",
    "revision": "1e1fd0953570e8d93c4ca19925ea896b"
  },
  {
    "url": "assets/js/126.69400522.js",
    "revision": "9161c48ffce7f8714e540aa53237e187"
  },
  {
    "url": "assets/js/127.9b65318f.js",
    "revision": "41c2d09d347d223281120fcac828fb6a"
  },
  {
    "url": "assets/js/128.0ca499ae.js",
    "revision": "b68a49934a319f3719d2a18393f384e5"
  },
  {
    "url": "assets/js/129.f952fe85.js",
    "revision": "78886b841fd01e832825f6c1e9cd431a"
  },
  {
    "url": "assets/js/13.db31692c.js",
    "revision": "e70c41c80785ce1f8cfba51f65462343"
  },
  {
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
  },
  {
    "url": "assets/js/131.18e33c46.js",
    "revision": "45e027c998b5736b23b09296833d666e"
  },
  {
    "url": "assets/js/132.63a96d74.js",
    "revision": "bd24a5d4edb7527977814edbc837c606"
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
    "url": "assets/js/135.a8df44ab.js",
    "revision": "460e69940edfc0763dc60aa5ff3dac6f"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.1215bc1a.js",
    "revision": "3acb49fd3ada4bfa889b83d9d4c799b4"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.8c161f1f.js",
    "revision": "5f202c7d732c18a5a87f2fbeefdc36dd"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.4fbcdc31.js",
    "revision": "95c18a86264863861be1435b71c6feeb"
  },
  {
    "url": "assets/js/142.78e9515b.js",
    "revision": "bb106faf0f92b5e2f82111868801a301"
  },
  {
    "url": "assets/js/143.fa7420bb.js",
    "revision": "578d240d1a48ae7634717d643c6bc61e"
  },
  {
    "url": "assets/js/144.6ac64a80.js",
    "revision": "2867b00dcc483225cf42f6d58c0e7e50"
  },
  {
    "url": "assets/js/145.b7afacb0.js",
    "revision": "1da649e58e03fa31e7c01ca830a9230d"
  },
  {
    "url": "assets/js/146.cf40c98d.js",
    "revision": "c9c9a3d2abc32bd92102db87933dd25d"
  },
  {
    "url": "assets/js/147.be334db5.js",
    "revision": "2eb22999ed19d3c97b0bca8b5d737c61"
  },
  {
    "url": "assets/js/148.4aa40664.js",
    "revision": "b537a88f43c306f7f742300f88b60670"
  },
  {
    "url": "assets/js/149.adab3b63.js",
    "revision": "b240be57f044476d4f78bccd79df9184"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.6dd2bae4.js",
    "revision": "a9f6c37b88ab7f4d423c94997460bea2"
  },
  {
    "url": "assets/js/151.0844e9c8.js",
    "revision": "7d25f4ea72ffd3ae5dbd7a87b365734b"
  },
  {
    "url": "assets/js/152.4d11478a.js",
    "revision": "e6f02d47480331cc8e6029853178f799"
  },
  {
    "url": "assets/js/153.cdd9dfa3.js",
    "revision": "651ea4c39aa906279252a82f24e201fc"
  },
  {
    "url": "assets/js/154.5e2b3e71.js",
    "revision": "95f82a99e568207083ef42a1749e29fc"
  },
  {
    "url": "assets/js/155.9adbf59e.js",
    "revision": "c7fac4a3ecdc4dd3ebd30039e5c5674c"
  },
  {
    "url": "assets/js/156.15417dc6.js",
    "revision": "b03e0ef9b691b0287e3d70e2ad210993"
  },
  {
    "url": "assets/js/157.fc4884bd.js",
    "revision": "efaac614d1cf941f9f954f791e23ff17"
  },
  {
    "url": "assets/js/158.043ca37a.js",
    "revision": "d5f0d1e9c51859556e82086c9048b549"
  },
  {
    "url": "assets/js/159.2687e6bc.js",
    "revision": "639f862171f02a05f641c03d39b6ff35"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.193af005.js",
    "revision": "f3a7fcd17544574a426cd7fef600fd61"
  },
  {
    "url": "assets/js/161.62ed7457.js",
    "revision": "b831b7df619c0724ad1715325aa4c493"
  },
  {
    "url": "assets/js/162.efbd9fe9.js",
    "revision": "1b2c8d631e18c566a0292ab08cf38069"
  },
  {
    "url": "assets/js/163.c133d293.js",
    "revision": "3015cdc24bb3a11ec3df279adf3ff0f5"
  },
  {
    "url": "assets/js/164.77a36066.js",
    "revision": "d5678d209bbcd9395b22603dfd2daa3d"
  },
  {
    "url": "assets/js/165.9028fd32.js",
    "revision": "886bd063c76269d15b3db70498362a47"
  },
  {
    "url": "assets/js/166.e21eb529.js",
    "revision": "93e77a184b81e15b51cfeb740784420e"
  },
  {
    "url": "assets/js/167.8dc58614.js",
    "revision": "3685b006f6c52885f9d331c31bb6eceb"
  },
  {
    "url": "assets/js/168.d6cc71f1.js",
    "revision": "cafd656e0c051078b59a4db9f26e3693"
  },
  {
    "url": "assets/js/169.06691c7a.js",
    "revision": "e8507d76114cd6fd02396924f5dd7543"
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
    "url": "assets/js/171.ef6b2c36.js",
    "revision": "e58e15693177096e85e34bc222f28eb5"
  },
  {
    "url": "assets/js/172.2964329e.js",
    "revision": "82175ddd703ba3b05f5e86c3aa5a1f1d"
  },
  {
    "url": "assets/js/173.e0e3779c.js",
    "revision": "99bc2bd50587d4cab6411bd2279dbdaf"
  },
  {
    "url": "assets/js/174.728dfad8.js",
    "revision": "00cd8020016f0cc884b3bc242d601403"
  },
  {
    "url": "assets/js/175.35890577.js",
    "revision": "2f01135a8b3e795059feb4fde164a8e7"
  },
  {
    "url": "assets/js/176.ea7fd02e.js",
    "revision": "66544807c779a96103d012594fc649db"
  },
  {
    "url": "assets/js/177.54c5b157.js",
    "revision": "4429f4cb857654de3703aa2ea414a706"
  },
  {
    "url": "assets/js/178.72980b1a.js",
    "revision": "2e27d432931c212853f11f00e5cf476d"
  },
  {
    "url": "assets/js/179.76892c62.js",
    "revision": "6da8b7d51b18b833b6e748af1b5296eb"
  },
  {
    "url": "assets/js/18.9258674f.js",
    "revision": "5288863685993cd679d9b89ce68a2710"
  },
  {
    "url": "assets/js/180.3f4a744b.js",
    "revision": "60ca9de0c722da0e523f02d4620a577a"
  },
  {
    "url": "assets/js/181.501640db.js",
    "revision": "a7773615484e7983205529d2324deec0"
  },
  {
    "url": "assets/js/182.ed443d1a.js",
    "revision": "3abb81801f2f5e22e2e0a237efa6d4d4"
  },
  {
    "url": "assets/js/183.ab9c933f.js",
    "revision": "1ba193bdaf691231e0056b923cd4f254"
  },
  {
    "url": "assets/js/184.9b0a00fb.js",
    "revision": "e86fabc516b8dc0bcd8a6a6e2a063b43"
  },
  {
    "url": "assets/js/185.447237a3.js",
    "revision": "c437a61ff9cd5d17871c3ef45852cca3"
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
    "url": "assets/js/188.34efcdc3.js",
    "revision": "3ef0cb0b0b0f8d47c03695afc8530304"
  },
  {
    "url": "assets/js/189.bc1f6825.js",
    "revision": "269bb42a978d27b7a768c6fe20baf0f3"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.a2f50006.js",
    "revision": "0fd92a4cfa916ee29aeca1287a5e996f"
  },
  {
    "url": "assets/js/191.455bae58.js",
    "revision": "79f1b4fd994895c5c8a9cf1ec63379f8"
  },
  {
    "url": "assets/js/192.2ea788f5.js",
    "revision": "c987efe22922e799f7aea21474ddbec3"
  },
  {
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.dd8283dd.js",
    "revision": "e17a528386fad36321f7947f3f72e23b"
  },
  {
    "url": "assets/js/195.d1fe82f1.js",
    "revision": "b6e017ca6a54ed331825978bfcc7da55"
  },
  {
    "url": "assets/js/196.a5f84907.js",
    "revision": "283bf122c08b1ba946b5e629ebc978c6"
  },
  {
    "url": "assets/js/197.8e29dae3.js",
    "revision": "5781a2a108d9eeab34b17777db5b0cfe"
  },
  {
    "url": "assets/js/198.fbdf6ec2.js",
    "revision": "baf7bc034a881f50b30dc3a32a9705d5"
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
    "url": "assets/js/200.fd71ddaf.js",
    "revision": "6398dedf004e125ebd9e6779007d1bda"
  },
  {
    "url": "assets/js/201.a0dbe0fb.js",
    "revision": "d1ff6f9875a806944c32a02e1ddcf355"
  },
  {
    "url": "assets/js/202.c27c0212.js",
    "revision": "b4cae8d72194cf81e597787ade485d5b"
  },
  {
    "url": "assets/js/203.da4ab6eb.js",
    "revision": "3cf6087c4c616e8d69668f6cb1a1eb6c"
  },
  {
    "url": "assets/js/204.d1e18d2f.js",
    "revision": "88790b8bf0262c6a1472c108873152d7"
  },
  {
    "url": "assets/js/205.6bcb7703.js",
    "revision": "df22d73d4259e31bea4aacebd3d9ecef"
  },
  {
    "url": "assets/js/206.2c633f0e.js",
    "revision": "181efd57accfbdf55d037b71eaeddebc"
  },
  {
    "url": "assets/js/207.4da94bab.js",
    "revision": "ddd88333ae7bd9208a87648f23886e6e"
  },
  {
    "url": "assets/js/208.25f866ab.js",
    "revision": "d8c47a321a326ed87a304b9f89d06699"
  },
  {
    "url": "assets/js/209.b24b2ffa.js",
    "revision": "c100bc160c41a87b115bad611dcdb0c8"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.335504cb.js",
    "revision": "5810088f5aa4f1f558136026d00b5bfb"
  },
  {
    "url": "assets/js/211.c1df8eb8.js",
    "revision": "cca2134bcfc72459943fbe0d02ccf14d"
  },
  {
    "url": "assets/js/212.ce1b24bd.js",
    "revision": "81c8c0ebe005be84eced32ef9fc078d2"
  },
  {
    "url": "assets/js/213.6f09a403.js",
    "revision": "7afa679ca1036b8415b265ec758a69c0"
  },
  {
    "url": "assets/js/214.2de75553.js",
    "revision": "e99a0810ab47dbd89c446961c868549c"
  },
  {
    "url": "assets/js/215.a6505192.js",
    "revision": "19833c59fd041878ce448fa4a6f89a26"
  },
  {
    "url": "assets/js/216.77c29208.js",
    "revision": "dee62b23365a26c208104782303e44e9"
  },
  {
    "url": "assets/js/217.a56375d6.js",
    "revision": "e589871002493ac7c35e7b8875ef5b43"
  },
  {
    "url": "assets/js/218.e6c242d0.js",
    "revision": "2341a7853984818da6ae8a787681d947"
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
    "url": "assets/js/221.1259f097.js",
    "revision": "94305f35878a1a40bf913c76ae32d73f"
  },
  {
    "url": "assets/js/222.b8e5e60a.js",
    "revision": "316eae84b9185535d0aca694e6fa1929"
  },
  {
    "url": "assets/js/223.6f44bfe4.js",
    "revision": "1ae2b23f0528e2a1c583801b1bb31ddb"
  },
  {
    "url": "assets/js/224.031150f5.js",
    "revision": "1674af67e18d8f75d6d4884941f1eb5d"
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
    "url": "assets/js/228.47b26ea2.js",
    "revision": "b578f75ceab7309f6dafa158f67a8abf"
  },
  {
    "url": "assets/js/229.6130aa09.js",
    "revision": "7f5e020e0e3aacfde458529c6b28058a"
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
    "url": "assets/js/231.61fce1ef.js",
    "revision": "cc0468771993d829c4ec298de96a2fcf"
  },
  {
    "url": "assets/js/232.6422e246.js",
    "revision": "2aab04059af4af252aa1a96918c4b182"
  },
  {
    "url": "assets/js/233.0a436ee6.js",
    "revision": "a3c8a6caa7c76d595aad47df236e2292"
  },
  {
    "url": "assets/js/234.43659f5b.js",
    "revision": "a9a7897132b0554d0ede87b0a6fbc90d"
  },
  {
    "url": "assets/js/235.f69273ac.js",
    "revision": "3d2a79a599d4647c7c3863f47d0ca3f0"
  },
  {
    "url": "assets/js/236.d1d871c3.js",
    "revision": "5bf3c0de518d2af95d2b2a37fdb16101"
  },
  {
    "url": "assets/js/237.fadac5e1.js",
    "revision": "54fae50476ce3d1039a74f68ea437450"
  },
  {
    "url": "assets/js/238.3ddc13ed.js",
    "revision": "6313fcbf1d46b96211d096a52bfde00f"
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
    "url": "assets/js/241.4b5665d4.js",
    "revision": "d983ce10ffdd6eea3dc342fbec073c90"
  },
  {
    "url": "assets/js/242.989f13b3.js",
    "revision": "a5991c78081a69683e15bfa2daf4877d"
  },
  {
    "url": "assets/js/243.d0baa1f1.js",
    "revision": "4ff8b35d5df7d4553b4256a90a00dc5a"
  },
  {
    "url": "assets/js/244.fc437d09.js",
    "revision": "1084bb2751e25156758661e00e3ca72d"
  },
  {
    "url": "assets/js/245.92321c8b.js",
    "revision": "793e7e7825fffe3f6583520070ab2530"
  },
  {
    "url": "assets/js/246.30577e9e.js",
    "revision": "61fe378c93fdbe82573dc3689b780720"
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
    "url": "assets/js/250.256656af.js",
    "revision": "a005fcf30b111aa3009f02a11cdcc7f7"
  },
  {
    "url": "assets/js/251.c70b9eba.js",
    "revision": "ac96173f5ec843fb16dd51032a5fdc5c"
  },
  {
    "url": "assets/js/252.36842f47.js",
    "revision": "d2ab6fb22a090ba8e60cc6153efa449a"
  },
  {
    "url": "assets/js/253.d5358fb8.js",
    "revision": "ba3485aeb4c985522b15a0fdbab3d6d3"
  },
  {
    "url": "assets/js/254.c426d3d3.js",
    "revision": "852265b1ddee99329654cede6f51d6a8"
  },
  {
    "url": "assets/js/255.22c30c46.js",
    "revision": "431837078f21815c29a19515f98aeed3"
  },
  {
    "url": "assets/js/256.1387f530.js",
    "revision": "7819fee5388da7228b65ca73ad63cd40"
  },
  {
    "url": "assets/js/257.f3fe5f9b.js",
    "revision": "d6e51e5ecce3cce5aa72747d138107f7"
  },
  {
    "url": "assets/js/258.4c4c2116.js",
    "revision": "e7b06ff75519640fef463c4fb77f0a90"
  },
  {
    "url": "assets/js/259.25bed776.js",
    "revision": "4b8150eef1823fb06b4ab660136a80c5"
  },
  {
    "url": "assets/js/26.4bef914a.js",
    "revision": "4ce8cbe0d74c3a704ff2ff99c68c41bf"
  },
  {
    "url": "assets/js/260.cc2c0d48.js",
    "revision": "119ce154dbdb61a7eae6c84619df53bb"
  },
  {
    "url": "assets/js/261.1f93a44c.js",
    "revision": "aceaabe458c82c5505a8d322e2fbd1ff"
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
    "url": "assets/js/264.a2a1ded9.js",
    "revision": "a3e37f9e43f4192718c10c4bcb0d6d5d"
  },
  {
    "url": "assets/js/265.6b0233a5.js",
    "revision": "0a79b181ee21642017af897365f4ddc3"
  },
  {
    "url": "assets/js/266.1828efad.js",
    "revision": "f5806f6ecebb3ab2e896ab9c124f643d"
  },
  {
    "url": "assets/js/267.e7dd34ac.js",
    "revision": "3fb646ab491763bad53b733526fb9b54"
  },
  {
    "url": "assets/js/268.743579dd.js",
    "revision": "70a254fdd660ddcdd2bf08e4dd926ceb"
  },
  {
    "url": "assets/js/269.61cbb922.js",
    "revision": "f6baa1da885cc5b05abae20b989f9d5a"
  },
  {
    "url": "assets/js/27.4dbe6d9b.js",
    "revision": "42d2911e44e44dbeb4f46ee782dfd08a"
  },
  {
    "url": "assets/js/270.024894af.js",
    "revision": "ea6eccf4cad5cfac7ab805134ceae4a4"
  },
  {
    "url": "assets/js/271.6e3aa9b1.js",
    "revision": "ad0a3caf5c04c5e63a8d6a06b64b3a8d"
  },
  {
    "url": "assets/js/272.ccc68601.js",
    "revision": "6f261f0ac70ddce7fdb4ec1d0efee791"
  },
  {
    "url": "assets/js/273.2583422d.js",
    "revision": "bbee0a67bcbb0bbaf50fd9b9c3cf1810"
  },
  {
    "url": "assets/js/274.8afa0e30.js",
    "revision": "5374cba6b831ad50e26e4599db48332a"
  },
  {
    "url": "assets/js/275.b51f6a4c.js",
    "revision": "88f2be3fbc746550196b6b15863517f9"
  },
  {
    "url": "assets/js/276.f5b0be3c.js",
    "revision": "1aa0b7a540d7bd9406b4f105eb1114a7"
  },
  {
    "url": "assets/js/277.fa60aabc.js",
    "revision": "cabeb5d1c1a754de2291ab452fb1d985"
  },
  {
    "url": "assets/js/278.a7d61f2b.js",
    "revision": "9ff9cbd3f2078f5ab6047c5e1ff00a47"
  },
  {
    "url": "assets/js/279.9b3d772f.js",
    "revision": "4eaf84e3f8ecdc44f68f3aff8d7887c8"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.8d73138d.js",
    "revision": "6fe2d9837bb1399bea399ec2480f93a0"
  },
  {
    "url": "assets/js/281.fcea624c.js",
    "revision": "4e8782df47d4001b99427fb397e9a5d8"
  },
  {
    "url": "assets/js/282.2ca14bed.js",
    "revision": "9ab6f8a36bf1b1f88c983f610f0d1aae"
  },
  {
    "url": "assets/js/283.8b8c6b5d.js",
    "revision": "2dfeb369064b0efb9e367177fe467d66"
  },
  {
    "url": "assets/js/284.c351136a.js",
    "revision": "f7a8f97b68f680e00259a93d1e1bfe45"
  },
  {
    "url": "assets/js/285.fcfa659a.js",
    "revision": "fbe61a94ab525550011dea11ac3b17ce"
  },
  {
    "url": "assets/js/286.ffb9fe97.js",
    "revision": "a42eedafc833bc14b8cb376f60f8b1b5"
  },
  {
    "url": "assets/js/287.86eab1c7.js",
    "revision": "a602101ba504c4c298271aa82fc25578"
  },
  {
    "url": "assets/js/288.281e1ec6.js",
    "revision": "14d79a405cb86e6f571d883f13bcfdbd"
  },
  {
    "url": "assets/js/289.0443ccef.js",
    "revision": "25188439d63a9f0e1d626e8e7c01ee0b"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.a15285f3.js",
    "revision": "aea3d4a967bad98802fe9d1fe67e89dd"
  },
  {
    "url": "assets/js/291.7ef55216.js",
    "revision": "4bca01c138bc8ef6f977ed21bd833ad9"
  },
  {
    "url": "assets/js/292.f4084009.js",
    "revision": "f874898ab4c00331820983b23eadd276"
  },
  {
    "url": "assets/js/293.3cd0d3d8.js",
    "revision": "72d4e39d9ea9fbb3b5ad49cf2a9b5abb"
  },
  {
    "url": "assets/js/294.91f74cb8.js",
    "revision": "1b96300bb8ec915a074a4dd54306f475"
  },
  {
    "url": "assets/js/295.0fdf2899.js",
    "revision": "5d7629d44115530eb1ee30e7af6db257"
  },
  {
    "url": "assets/js/296.310fd8e9.js",
    "revision": "d623f14d3fbbfd1f92228093029ca303"
  },
  {
    "url": "assets/js/297.0fec3806.js",
    "revision": "d976c16cb9fd0b130178426e19f22966"
  },
  {
    "url": "assets/js/298.268971ee.js",
    "revision": "47ab4e54a5e61c4029e4726de7c0c81e"
  },
  {
    "url": "assets/js/299.13654663.js",
    "revision": "1d7522828485efff3d66e6faed8f2177"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.a3d0b802.js",
    "revision": "3a26b95be4961e6b4c5b381b447af674"
  },
  {
    "url": "assets/js/300.d3cd0dfc.js",
    "revision": "b26dc22267a02be127e63fbed3fc6937"
  },
  {
    "url": "assets/js/301.157b5250.js",
    "revision": "58003845c21fc76d9a4c4efd91735489"
  },
  {
    "url": "assets/js/302.2eb446f7.js",
    "revision": "e3309599d5719848bf2add434c0c8b64"
  },
  {
    "url": "assets/js/303.8501af21.js",
    "revision": "a3754ee4742ed628bf8f50e5cbb7bdd6"
  },
  {
    "url": "assets/js/304.d9d5f57e.js",
    "revision": "de2252e9b194bf285eaa69c13048a5b1"
  },
  {
    "url": "assets/js/305.598ae0b6.js",
    "revision": "3fc57bf582e61fbd1846f105be4af6b3"
  },
  {
    "url": "assets/js/306.272bbdf2.js",
    "revision": "a45b8fe5cb8979d6902f70c98c8a9550"
  },
  {
    "url": "assets/js/307.9b717481.js",
    "revision": "933d4d0df4c83639e28665e27c2fc3f5"
  },
  {
    "url": "assets/js/308.4ca84ac9.js",
    "revision": "0e0268bb818bfba2a03f74e3b6d33d4e"
  },
  {
    "url": "assets/js/309.7f91d812.js",
    "revision": "d3c198c550bbf4f660ab0fa10a63443e"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.822798fa.js",
    "revision": "da6bf8b02681d7ac1395902fa00210f4"
  },
  {
    "url": "assets/js/311.d5baf6a3.js",
    "revision": "005d2824f5212e1d82844accb753c5b2"
  },
  {
    "url": "assets/js/312.904d87fb.js",
    "revision": "8746ed31ad7f5b607d728193801aa089"
  },
  {
    "url": "assets/js/313.42999294.js",
    "revision": "6d8dfa02e60d362e3ec81650d435b2bf"
  },
  {
    "url": "assets/js/314.1e88d309.js",
    "revision": "bfe7b6d51aa529ba9dc05e07a02299dc"
  },
  {
    "url": "assets/js/315.8e111c26.js",
    "revision": "70d7853988baef6735272f4283890949"
  },
  {
    "url": "assets/js/316.23b48c07.js",
    "revision": "8e2fe8f8089063e0e9f3ab36e21415a2"
  },
  {
    "url": "assets/js/317.f2671878.js",
    "revision": "1084c6b7959d452de769441ce594317b"
  },
  {
    "url": "assets/js/318.060c19b9.js",
    "revision": "bd8f62c7a629647a03e34a104a12f840"
  },
  {
    "url": "assets/js/319.6795ff61.js",
    "revision": "fdfe43f3e82f74edf68266532520ecbd"
  },
  {
    "url": "assets/js/32.aeaf4cfe.js",
    "revision": "cb880c72f64355c35e5ac0b03f2f82e6"
  },
  {
    "url": "assets/js/320.dbe0e732.js",
    "revision": "ac1f4b0547b74380c6724bc853db75cd"
  },
  {
    "url": "assets/js/321.873d8e5a.js",
    "revision": "263b783e158487702425c0e962cf5ac2"
  },
  {
    "url": "assets/js/322.37a6bbcd.js",
    "revision": "c21a51085334fd61bb9ee6c0ccba7bc9"
  },
  {
    "url": "assets/js/323.2bde815c.js",
    "revision": "da11aaf8657fe80e89798b0ac335576b"
  },
  {
    "url": "assets/js/324.07ee1b49.js",
    "revision": "0e9090e7553ffbfd64d08aa82b92ff91"
  },
  {
    "url": "assets/js/325.bf10754d.js",
    "revision": "4abb1ffd8b853e719cf3fffb7662dc94"
  },
  {
    "url": "assets/js/326.aae5894b.js",
    "revision": "20268fc22950c8b83d0f268ed3047eb9"
  },
  {
    "url": "assets/js/327.a329d11b.js",
    "revision": "9be9a4fd2f488f9bfb6151df87898303"
  },
  {
    "url": "assets/js/328.cb63ac4a.js",
    "revision": "1ec62d52b9f9c426d5d933fc2f8a2ed9"
  },
  {
    "url": "assets/js/329.2cc4d92e.js",
    "revision": "74c52de8deb8b74f4f79f00151ad7b85"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.4b382083.js",
    "revision": "e231d01cd8251a6569b339c37efff9b1"
  },
  {
    "url": "assets/js/331.13f98cd4.js",
    "revision": "d1f4ef3bbdbea021b5edc1f01519ce56"
  },
  {
    "url": "assets/js/332.835236c2.js",
    "revision": "870a5b79084b1403d6bfcac9f89e2faf"
  },
  {
    "url": "assets/js/333.d2797f6e.js",
    "revision": "63372f8046858c9c8ecb362c3bf4fa48"
  },
  {
    "url": "assets/js/334.60d93244.js",
    "revision": "34eab8087fd5189ba37742888ea55eac"
  },
  {
    "url": "assets/js/335.3bc06186.js",
    "revision": "b4f0bbd5992040e5b65f705496e5713f"
  },
  {
    "url": "assets/js/336.46a31362.js",
    "revision": "183ef1fecef6a76400296ab5cef04e35"
  },
  {
    "url": "assets/js/337.058fad6f.js",
    "revision": "99c376d0b9bb2fec41285f09c0b57ea4"
  },
  {
    "url": "assets/js/338.d18d8d0f.js",
    "revision": "43ac4e9a3f98c75a64cf8d59868ba670"
  },
  {
    "url": "assets/js/339.462db77e.js",
    "revision": "1e1c93536185e06383dc5fb25e315e5f"
  },
  {
    "url": "assets/js/34.8b9c2e6a.js",
    "revision": "6abe209947af16b247402d011fa40790"
  },
  {
    "url": "assets/js/340.03e27793.js",
    "revision": "cc2c8275e1cbbd0a7b22b4cd4700f70a"
  },
  {
    "url": "assets/js/341.ee0f393a.js",
    "revision": "29d271cf87b1f2753820a16fa666ba3c"
  },
  {
    "url": "assets/js/342.6f375071.js",
    "revision": "04eac53231816216e26e2d47eb609313"
  },
  {
    "url": "assets/js/343.59331f3f.js",
    "revision": "089be06fce7ed7d636d4ec07a61d2ab2"
  },
  {
    "url": "assets/js/344.a0b575dc.js",
    "revision": "f8132f820ada14d5c818c7ac9135894a"
  },
  {
    "url": "assets/js/345.38a43438.js",
    "revision": "bb1d5486d945b1b465b3b50225a825ed"
  },
  {
    "url": "assets/js/346.1608fbcd.js",
    "revision": "bedc2da97e928e7746bb36755cfc2776"
  },
  {
    "url": "assets/js/347.34ab7b52.js",
    "revision": "e3bcb3bb011243286cd9727f42163bdf"
  },
  {
    "url": "assets/js/348.7f2082de.js",
    "revision": "f6962b12b99dfa91f21d168f1850fca6"
  },
  {
    "url": "assets/js/349.1eaabc6b.js",
    "revision": "e00f863704b59a434a36337b3aedbd24"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.d08cd820.js",
    "revision": "06d8f96f80460a14710c28b1b2a68c93"
  },
  {
    "url": "assets/js/351.135b1350.js",
    "revision": "ac9e5a607899049519402b73652d46a2"
  },
  {
    "url": "assets/js/352.a8423400.js",
    "revision": "4c99054d4330f009e138430302386a37"
  },
  {
    "url": "assets/js/353.34a4b4d2.js",
    "revision": "03906537b657f4f9dba7f5f26e462b11"
  },
  {
    "url": "assets/js/354.9b71b3c2.js",
    "revision": "44ef57a3d5c262a9a80329d014a1e623"
  },
  {
    "url": "assets/js/355.bd20acb2.js",
    "revision": "23bfd89c74297d3078d1ec4243445bd9"
  },
  {
    "url": "assets/js/356.817883a5.js",
    "revision": "02046eb88cb4b2f95803f78a71d75b13"
  },
  {
    "url": "assets/js/357.875b946f.js",
    "revision": "6f10f508e369905683dedc47a88fd3d1"
  },
  {
    "url": "assets/js/358.5f512247.js",
    "revision": "f1592507b7471149b182b43d84688a7b"
  },
  {
    "url": "assets/js/359.d95adeb1.js",
    "revision": "8196d1021373cbb6cc89d3dd6a826419"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.f4631d5d.js",
    "revision": "c1dda0825b573670237103169eb55783"
  },
  {
    "url": "assets/js/361.f6d5eba4.js",
    "revision": "c6fda7d36f511fd0f28427e0e7e792c5"
  },
  {
    "url": "assets/js/362.220c2bc7.js",
    "revision": "170d963cd49d15f846b091f59948e265"
  },
  {
    "url": "assets/js/363.f6b78ff8.js",
    "revision": "09d65364d7e3f3e14302b4b124df1592"
  },
  {
    "url": "assets/js/364.5ca0448a.js",
    "revision": "4ae3ed35159217143b846693990ebfa8"
  },
  {
    "url": "assets/js/365.1f5e5f72.js",
    "revision": "9088f76b66dc6924c8fc849a44c92522"
  },
  {
    "url": "assets/js/366.21a9878c.js",
    "revision": "a825480dc3ffc09a0a3177232889a283"
  },
  {
    "url": "assets/js/367.faed2081.js",
    "revision": "a545962dc62a29043208c2f2ccbbac4f"
  },
  {
    "url": "assets/js/368.7fb5cfa3.js",
    "revision": "e26490050efc04b4d28e9eb911053b32"
  },
  {
    "url": "assets/js/369.c22adbd6.js",
    "revision": "fd7e2a311b90a70cae524ab6ea55194d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.c66b17d6.js",
    "revision": "fcc4911826adc8b1ff7be479150828cd"
  },
  {
    "url": "assets/js/371.5b9c6e0b.js",
    "revision": "f8391d07fe024344c9bc1bdd9114e830"
  },
  {
    "url": "assets/js/372.e491b81f.js",
    "revision": "71446669caa34722a3500e1d7df3abd8"
  },
  {
    "url": "assets/js/373.f146f0a9.js",
    "revision": "2454a298a21a254d2695e976b3d5728f"
  },
  {
    "url": "assets/js/374.4e83daf6.js",
    "revision": "375e5ae680a7a9d828c41f10c798246f"
  },
  {
    "url": "assets/js/375.2b4366b2.js",
    "revision": "2223de549b1a2687028dd164073c4af7"
  },
  {
    "url": "assets/js/376.2fc91eb6.js",
    "revision": "f761dfd65d69ff9ac3270597df14b7e4"
  },
  {
    "url": "assets/js/377.326a068c.js",
    "revision": "c34bd348211c5e224f70281a49124b7b"
  },
  {
    "url": "assets/js/378.d2a2838c.js",
    "revision": "bb6ba2d636830c9cf388790dbf330be2"
  },
  {
    "url": "assets/js/379.569ed1e8.js",
    "revision": "79e39e513b7f884ba6e4990b6d925f59"
  },
  {
    "url": "assets/js/38.b3248d12.js",
    "revision": "d9431e029846f26a0abd43c80bf7213f"
  },
  {
    "url": "assets/js/380.b64b5f23.js",
    "revision": "21a8c309d789d6d48b0f03ffecaca4d4"
  },
  {
    "url": "assets/js/381.b28a5d11.js",
    "revision": "13f15c980b05262bfbfc3a350bdcb8af"
  },
  {
    "url": "assets/js/382.0b4db7ae.js",
    "revision": "792753f406bbba53f2ffaa0db2e8c52f"
  },
  {
    "url": "assets/js/383.36b0e4be.js",
    "revision": "8701063de128cb167dedd5bede7d095a"
  },
  {
    "url": "assets/js/384.8717758a.js",
    "revision": "da9e7105ea63fe7cb17cc7678a294679"
  },
  {
    "url": "assets/js/385.eeb6ae56.js",
    "revision": "239697fb7371f6520f38e09a5fd5c0ab"
  },
  {
    "url": "assets/js/386.640579f1.js",
    "revision": "19ac6698cf45a8767b5c7ee46d2686c1"
  },
  {
    "url": "assets/js/387.b40599a6.js",
    "revision": "788012465d56ca0c7afa73a91f89be7b"
  },
  {
    "url": "assets/js/388.0bee39f0.js",
    "revision": "d1b48e975533fd4c2d0b1ba6fd79ba1a"
  },
  {
    "url": "assets/js/389.f59c4f1c.js",
    "revision": "7e5ac026c616569a0d33993ad65e794a"
  },
  {
    "url": "assets/js/39.075d474a.js",
    "revision": "7dbdf2399bedfd8922ab81cc7ed8924c"
  },
  {
    "url": "assets/js/390.6dbebeab.js",
    "revision": "b42fea9fe4203d747823dd57ba7e0993"
  },
  {
    "url": "assets/js/391.bf889434.js",
    "revision": "af17cc17b0e2c9b4712fcd41e29b9c1f"
  },
  {
    "url": "assets/js/392.1b3b913d.js",
    "revision": "3341195020c4d652eb331cff80208194"
  },
  {
    "url": "assets/js/393.9eb38b84.js",
    "revision": "edb93c3a6e9f14a9a0409bdf4bcbd277"
  },
  {
    "url": "assets/js/394.bd041b5f.js",
    "revision": "da059c503db19e82334af21d1cf73b0e"
  },
  {
    "url": "assets/js/395.84f65d70.js",
    "revision": "85f366edcc67fda216439e95342b5fb3"
  },
  {
    "url": "assets/js/396.b2b0a081.js",
    "revision": "57e22b90a340532444cff757bc421c33"
  },
  {
    "url": "assets/js/397.62ba9fb9.js",
    "revision": "0ce98f9967a15baad8313285e6209f00"
  },
  {
    "url": "assets/js/398.9175ee1f.js",
    "revision": "02faf63ff1c6138efa7b3d31bfe79741"
  },
  {
    "url": "assets/js/399.85076e82.js",
    "revision": "10744e12acdf28ebb18bc005e7107f38"
  },
  {
    "url": "assets/js/4.645b31fe.js",
    "revision": "83f736a9c571e791e27cc81280b1d266"
  },
  {
    "url": "assets/js/40.f0cfe08a.js",
    "revision": "4c8f9c35e50b9036195320c6d1dfc40f"
  },
  {
    "url": "assets/js/400.59df523f.js",
    "revision": "709e9e88c1ba26d92896723a11dd6127"
  },
  {
    "url": "assets/js/41.fe4b3327.js",
    "revision": "ac357cd663b6d91cd48d2ef3d9194ed8"
  },
  {
    "url": "assets/js/42.d9bba00f.js",
    "revision": "0e58bad4a4988c87b196224c2b9a3edc"
  },
  {
    "url": "assets/js/43.e6ba968d.js",
    "revision": "6581d44019fdc3f8f9ca2793c18a8b2e"
  },
  {
    "url": "assets/js/44.eb32ac9a.js",
    "revision": "637bb88b5bbe9923b1af9310caac8605"
  },
  {
    "url": "assets/js/45.a438a0c1.js",
    "revision": "84bb1fae7ae56b4a9972ef8f7f5bb1d1"
  },
  {
    "url": "assets/js/46.859f06bb.js",
    "revision": "cd1f281c820d08f2cfbb5aa075e5a2c3"
  },
  {
    "url": "assets/js/47.6221a11f.js",
    "revision": "e1fc7be2740edcbe544bcc439726a30a"
  },
  {
    "url": "assets/js/48.07929a0c.js",
    "revision": "3ed56a4a828bcbd309718c5dcf7583bf"
  },
  {
    "url": "assets/js/49.022727cb.js",
    "revision": "b4c27d497b21b54a29723ad8126fb18b"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.8dcb2188.js",
    "revision": "3d6cc4be05276178edcc17640f8a54d0"
  },
  {
    "url": "assets/js/51.bc88767f.js",
    "revision": "7f0d85604a2b4435454f380243879d5d"
  },
  {
    "url": "assets/js/52.0f85d616.js",
    "revision": "e498ffa4c194db5f9c22181a888befe4"
  },
  {
    "url": "assets/js/53.04cc9409.js",
    "revision": "f43a214ba20fea8077b1672136be7c4b"
  },
  {
    "url": "assets/js/54.c6ce44bf.js",
    "revision": "f1f34f22d3677e1ed5e6e2690c01cd40"
  },
  {
    "url": "assets/js/55.55864510.js",
    "revision": "8613993e1060bf538606e6ecc34e5a06"
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
    "url": "assets/js/59.71007cca.js",
    "revision": "632da3486a14e30380143575ea5fdde9"
  },
  {
    "url": "assets/js/60.f18ed3b4.js",
    "revision": "603df73f22b758cb6b6aa9d963404c09"
  },
  {
    "url": "assets/js/61.ac7f284f.js",
    "revision": "872042efc6f111e024bc16fe59307ae6"
  },
  {
    "url": "assets/js/62.7cdf5dba.js",
    "revision": "80aa8e07ec1067b8351d99f99a71bf7b"
  },
  {
    "url": "assets/js/63.2cc4ae33.js",
    "revision": "88fdd640524e55c5503c885d3edf4a0f"
  },
  {
    "url": "assets/js/64.fb474d3d.js",
    "revision": "77935f0a3321a1c6aa213924dc3f6e63"
  },
  {
    "url": "assets/js/65.7f504c38.js",
    "revision": "0da626b434ec069a89a1c2546ac226cd"
  },
  {
    "url": "assets/js/66.db3c85f4.js",
    "revision": "05309198a3f290b5f694e3a4a04a05fa"
  },
  {
    "url": "assets/js/67.0e247d57.js",
    "revision": "9011db8ff42b706f22a4b15a92ce3a34"
  },
  {
    "url": "assets/js/68.2f5285c2.js",
    "revision": "90495f6963ae3fffca3cb5a18104b043"
  },
  {
    "url": "assets/js/69.af908571.js",
    "revision": "a153d897548d0453985371459ddf153f"
  },
  {
    "url": "assets/js/70.aabef992.js",
    "revision": "cb3d3f24d9192001612fbbff1e3d4d81"
  },
  {
    "url": "assets/js/71.0041680a.js",
    "revision": "21c737bf5b63bb8e2a1061fc06daccfd"
  },
  {
    "url": "assets/js/72.23a0e58b.js",
    "revision": "6512ad0d2ba323925d3fe505a8ade228"
  },
  {
    "url": "assets/js/73.4e9309c8.js",
    "revision": "341358ef097c56650dcff3359378d64d"
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
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.beabf95a.js",
    "revision": "853fd3b11d02883747fe7ba1ee9b72af"
  },
  {
    "url": "assets/js/81.62742b8c.js",
    "revision": "2a0d06d5096c4f4e85495e787513705e"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7e287636.js",
    "revision": "0d97f6c15d3ee66e1a3f80291e8c1252"
  },
  {
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.9f70be58.js",
    "revision": "f03fe93abb6790655062119cd2b79949"
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
    "url": "assets/js/89.eb94f076.js",
    "revision": "9950c8e764eef4e608002d086da2b49b"
  },
  {
    "url": "assets/js/9.1a586271.js",
    "revision": "0194e8493a51e0b918bd8d84184b21c9"
  },
  {
    "url": "assets/js/90.061b2143.js",
    "revision": "efbcf4c7dabefbfa80456c79a140a415"
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
    "url": "assets/js/93.4de36706.js",
    "revision": "eb06e793c55d9f150f0b7e10555c8635"
  },
  {
    "url": "assets/js/94.a0ffa677.js",
    "revision": "4fe1ebc1bc5309a1f5cf74a31f9a3343"
  },
  {
    "url": "assets/js/95.b19244b9.js",
    "revision": "0e6f7a39ffe1f437b424f0fdaf08ac5f"
  },
  {
    "url": "assets/js/96.a2295a49.js",
    "revision": "2373bcd406a20d0a79081fcd38a9332f"
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
    "url": "assets/js/app.ef525e90.js",
    "revision": "6b9926ebb18876d3ff958ed8de4df705"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "861b498b6738c1d55fd31b6199038cf1"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "8ffa54cc9be751be2857763f664273ab"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "0f05d90329bb104002549d7dd11ab1ee"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "0b814ac8b675f6bfe34030f5d2dde6af"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "16035c3f7a975503c209ccd8d6e654a4"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "529b185bd639ffcd4b1733c4cc7b58a6"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "a8e7b5a7143484ca7f505194e7674604"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "0ffe21b2fe8b1e9f461639951fc4a937"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "eeb559d3a021c629591de5043869ce8a"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f2d6fc9c00574bcf0a07f4eeb03f1121"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "c1fc843680906513485904808e7678d4"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "0da41b998ef861854eb3c8ecb7d7f82c"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "1700c87507db0e9bd361717d4461921d"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "7b74f56d72e1f6275cf8b495f4d68c61"
  },
  {
    "url": "master/api/index.html",
    "revision": "1d77fb11fa17762b461f4e5108c097b3"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "7f85d6ca8a99d175c101bca49b6e4c83"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "05dca8638e2337f72a38a73c90f91e36"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "beb210b872d8e0d385dca2f6f134a089"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "45f59f4849ab932321c68fc6556025f0"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "bc6d575784df0455fba89213a71f299c"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "1aa9a7e2286f3672bb6c5eb6660b7eed"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "b26970c24297c71a9fbe54b5f0128c53"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "9248cfb37fe7975db51c0144248a06e8"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "6f447c91e41cbba7a75811472ef1cf43"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "ff9c72ca86a61d4bba49b0c3f6a480e8"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "cf7f26b05ba7476f57ac8c04a3296e87"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "33e69eb3c52d0f75fba96a780038b418"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "c62035d29d42143cdcc55f13a0dfd3c8"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "cfbd9811d564df78b68cc002d4680df1"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "e1a3a7e87b9b31788d28a01df1fcd1d2"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "5217d59f8a058228325b2999fff3967e"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "f1bb78b998879cf739cdc393ad8ae82b"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "18524f0e16c2e5b03b631f28da0eae21"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "24f0f83468e81cf74199eaefc682ae9a"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "137f05e705ae3440a90dc0450ae686e2"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "1e8bac52ee3568b50595f4727046d95d"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "4907e4271d6de6463de83de8cfd1c4d0"
  },
  {
    "url": "master/packages/index.html",
    "revision": "80c36226b7361b29f2783533cc9994b1"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "b8ee76a37f3f3f930f676e26b09fb8e8"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "72021212d45dc16ab36ff327657e6fe0"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "84d3ecb4c23e4bd4a0bde960eab18489"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "205fbb39ff049cc5d7086d622da29980"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "7072ab36ce27a81ba614350841654ead"
  },
  {
    "url": "master/packages/views.html",
    "revision": "cc0ca9e3ff40cd619ce4c8dd46f1d7e1"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "189a43fafd6b76012bcc2d7c65e10b51"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "a98d808c130216a5bba5eef159dbc800"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "797810002c2bfadba34e49c4eb1a1d76"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "1f50c003629b67bf21ac815480122bc0"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "51cd85cd343c39a5ae2bfd518aa9719a"
  },
  {
    "url": "master/themes/index.html",
    "revision": "ecd50d3049b0cafba97835ebdce237cb"
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

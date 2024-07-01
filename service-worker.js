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
    "revision": "5305cb3feaa4d4af69ba290ce4eae6ad"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "fe1bdaa50ab8966c1ce8fe1d194aa991"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "5c7acad98709022583d61c83c4531941"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "701e230ad5b8c7cf6057c43394135a4f"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "4e90e4b8483a462675f6d460994dcf63"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "ceedef69df4d39fac509c732cf635757"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "89d5d1686f43dc9bd0129cecd231b55e"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dd9ad876b62be7aa90bb15ea5d8a36ce"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "8c99b88eb50049629f7506b4a3bdbfb9"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "e5831ab07552b2952e697be73b8842f5"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "624c302a6bbc35241a2e489df7c63c96"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "72073029723d34543b55eee0ac2c7b81"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "84ef32defa8bc87eed44d24d426b4950"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "88666b247919282f00adb921f37e225c"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "603185ca7d1a1696bc6dbecce33fa69a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "590fdd29c8e426e28d0476ab66565f96"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "59e5afd24dc23353cdf19288ff98231c"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "e7035ab3b682f3105e0a62a42c8dc00c"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "fd3511af689dcce979864a836cbe7120"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "3a1d7c654e539d5e8706103c846c2438"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "b47e74fcd85a2331ef6fcebd7bdff909"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "debfb31f7772a033867445e84731c772"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "e19d18dab8ee0d7865679921da240dbd"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "739a88a4ff553acfb45d7e7fd3923a42"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "0401fc16dbaf1b57117157559525d934"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "50f4a98476d03dd896c317719106312b"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "92e01c85593c68bf6f528bb4c3d4e06d"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "45fbbcc36fea9e9346e7dd4b9a3f3a93"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c2a843e6eaf68d612e72171db0691dfb"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "c49f7487e942666d5167f6b060878fd5"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "f9de54e248f01b1ddf33f94f05171baa"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "63fa345ac2b3bb0c9b815298c3e2dbe0"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "d869a218daca01f5c8b8a06d47a03f16"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "acbb572d249e0f9ef52a2eed8ee31c31"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "20f8bc12a86b531e359d0efeb35d6acd"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "c2b681700971f7f7a264bf10e8d8e2e8"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "d56bc34ec44c45bd61acd29d8205a90c"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "80418602d67e71c0efb820c159fd159f"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "ac828ff7d32d67dbfbd151d3033636d6"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "1b0a2f795261632d5da69daf122da2ee"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "5ec84e732d17a627827a77ce139df18c"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "671ea1eab1c744fd78cad749d66e5130"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "69efdac58bb7c0abaa4db699521776ec"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "e7110cfaa2fcd0a77ef043e99db26d18"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "933d5034626fcbd67481f381665e942d"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "744e321ac387741f47bb1ac313b1a07c"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "8d08236363a7be25d6dd0f2f17ad531a"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "9b9bf4ebba0f706e380f1878b767ba66"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "102081ee631e874dc667cc158c36ffae"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "6d54b9d4d285ce58fd3d95bd65a9ee6e"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "217359df7d56c17046b9569a20e59e53"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "5c7678163b24d7479b155b1c7e5b8bfd"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "6ddc2e74b0db7afa79e20d36715b4a35"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "4a1cc255f124d9730363c0fa668d1dfc"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fe2e2b5024a6418d7f9fc21a78685b01"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "6b8888137edfe11da47a1bdc77d281e2"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "4efc0944b3a339aeb0db47c13aa6e7d6"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ed073a6b7946e44f83b672878dc54b51"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "5dfe134359994fc61699660765718cf3"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "89fe1516ed84d2f1b75727345991f14b"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "dde6026eb0126ba924274e5bcb8cf4d2"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "9960daf53f1342c406de369caa9e748c"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "524be4bb10f8845431e23211d3270c1f"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "9b7b99b3742d7634b5280da0fab96566"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "15787116c725ccaafdd37a49be3e9518"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "57729d7dcb53f1cdfb696debce5b43f5"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "3deee62bac2d126ac5ca7212af1d919a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "3ffe547fd7e2188ec3a24f82a8640ee5"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "8cd71e064f79cef72021193e91bd23b7"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c95bf4d12869382ab0bf9c5e442f3efb"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "fdfd58d5f60cb4acedf85babe10c3a5d"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "fca022e989439aff4efc8dbe865d39ee"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "380d312a76ec135936ed6d48b55c4862"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c73922dbc2a5777c41a1a951e3f0f8a9"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "b05def0d32d3a64a77c00dc45da5e2e4"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "1162aa4dee8ab9a3a3e5957e1e4ac92b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "8985050dcab42b5db95784a2850579b9"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "6d7dd127d1e678bd8a43f9cc592fb95a"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "4c8765a8da5b83f6e05eb99a3fc5d6ce"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "9224bffa39447b5a5a6d9a51375fd5ea"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c1add2c80e86dac382c80896b1ea8ea4"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "c39d08a89f8cdd69295a7443f5de28e2"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "212d15793fd7b7e6e15dd598fed45b30"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "cef44a89dbff316cab90425249302aaa"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "183a6ae8ce4320587ee3c85caa6363e3"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "a156b06b8e11b6041b2687aeb04726ae"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "07bdd6f065a2d7c95189090a56aa6d4b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "26b7d5f1698c4deb32eacb73ed860f40"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "e550907488ae27ea24aabd1c479fbc18"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "1cee881c132c8c3e03193da09b8e8571"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "b4941f22598f50df27112f167f2efd52"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "8ac17ca8774567e41a319e1a0be10806"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "cdd1e0279f465e0c2141eb5a2f76bdc4"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b296ef8d34766e4ad7cb737328e94328"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "6e4a9b8201138e89afe544f69bd5a714"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "d852bc8ec5c4485620d2047d86434326"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "fb03f3569999932370a46e0ea294acb2"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "8703f7219a248cd21518c8412da17562"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "3f0b1767130d35342f28c930bed5f6c9"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5d6a79f7ba260b304333de99ce83c0a2"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "4ceebf9a152dec41e820885b99476b44"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "c38b8092b210fe4987ef21b7f2125e9c"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "da9fadd18add883d773929a664b86202"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "ef3c4a6ffcda3d9dbe53d058e22c6426"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "d3e54f47b82b72f44f88fcb9e878d424"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "2572a1805981690519b1b9d634f5c1ad"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "76ba3af5a358a49f068956c3f1f6acd2"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "5e9d51ee9bcd96cc9b324b79221febf1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "ee7ac38358861f47bd99eab9630887b5"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "f3d05a0ac80e983bfcd62b206e653ab4"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "7429c6e1cd564ad805b65aa244859186"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "08e445b1aa398c80158b928e7a0c90f7"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "916e721e7808cb21a6f2d31a15b64669"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "fb9da9175561787c2b7aba1579860f53"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "acbd1c5fe9393908b7f42a237f3ddd44"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "57c17899b1c50960120087f2e873fe70"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8450a178d059090bcdde4e9f01bc0fbe"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4ed23b1b5bfa143a12b9c45f1ce44f93"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "3c4e296aece34c286c99e40304e3917c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e1257f8f094df92d6bc9eb175d8e8ea7"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "15d34287d56c3005804682396f093c0d"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "508cf5283d73ae024a2c2a2c998b5bbe"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "de9a6f68029beff07dd3bdeeff93aa3f"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "1526237e840752685ab882e054f51e79"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "431937800ad4482b7e6800ef81f809c6"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "18881b7e89158f065c102b58295576d2"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "09473204c2c8b1eeb9a632c1d8d07c5b"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "2aeec55bf71d061158daee407e4ce382"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "9346309dbd04fc4cd2576be7c376afaf"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "1eefb6da1b9dcac3616aa0e4e12b3b79"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "4020669de6ea32b55b9b1d0b2c3b0cee"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "ca7b9f85bbe0c0086fb484e9d4cb0c98"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "ceb271e3592e5c5585a49f52c425c4d9"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "0894ca83aa8207c0c1b520ecd8d29aac"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "df9a9c795e86a41b5d1ea5f0e0fa38d7"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "194daaa9d4d8ba05ee492e856029cb7f"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "a7405ed218e60896a34949cc4db1c9d6"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "ae47ba9a3e508dd4f22f1cdf7512de72"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "ae85def490577c381af124af6bf48306"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "76c593d562141b6226d6cdc4635a7ad4"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "04c80e4e2b0fc5381e9be14cfd7aa09b"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "566b6f849795e2eaf2f98a83ef018175"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "defb1361ae49abfd35bc7eb5ad895910"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "f8ebabadf43aa21857a35cc78afb86af"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "88f66f0df2751695eaeff8c710586fb1"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "84709b303423824bd732e91b28b70427"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "65f4f4d3bd4384883e61b2976f3caae3"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "b20a51e9a5587c24d89660f7e5aa06ad"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "2234e8dde2f675ca047ead4bbc1e2eff"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "decb14b3ba08a615f96c431caa980cae"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "c10f7b16a090e35558b7c99d0116c9bc"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "27fe8545dae0f5e78667f2c9fd3cd9bc"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "38ceecbef94fd2a529848142b349abd6"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "582ead3c6b6d0d81b56ea785fa091fa5"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "9c14d157a98d9d51be0aef0541a04bf1"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "eafa1fc8115bb0f12bb89068181c188c"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "28ab356ce6d7b851bd02e94a82b6b599"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "8491c600e21e8e708ea1181a3df7db35"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f59e462d7d752aaa3c468144736fe948"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "948c15d216770da299d9f7c6853b4f42"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "863fdaa752e96d98cad8a2e40c360f03"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "52b82de189ed73bd5baa776d69e87d7e"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "3d8fdfdfe9d234301f07e973b028a857"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "9a4808cb1cf4a4d67ff02dd47cf5971f"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "12fee648d6edc49cc8b6833be27173e8"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "56e09400de67b08cf2198c4b0147efed"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "932787048c5141c447f3d0bc3ab8af01"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "e0971d7b7cad50565a2edac9403e6a61"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "287385d23931c22fb0840bd23523e85c"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "7cf484812804c18f53922f010880e522"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "f1318c4cd79af0e0d566bf0dcf1047ed"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "0e8db86d05e8d104dab8590f589006b4"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "e8dbe8bc30a7b68e48ac360323515430"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "3cfb8371c56c69e6168ec6f082e83ffe"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "143daefabad5f68a27c345f45963e3c5"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "19f840d4e0ebec9eca657def487734ea"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "326f2409809a8e6045ff33249852ba6e"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "96f55e0ba4a93195d7c19a303fb0b586"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "08ab16e3750e204f441fe8249358af46"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "bd8ac004bd0d88a265c88eb6e53d7fdc"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "f2fc2b697ef60ef38764c6d4a8bdf9c6"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "fc3a0440bde797976d93e12b0b6193db"
  },
  {
    "url": "404.html",
    "revision": "1f86bb14007a3018e24d097c61e061b1"
  },
  {
    "url": "assets/css/0.styles.b729bcda.css",
    "revision": "0bee541eb1404ee573bceccece39cc00"
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
    "url": "assets/js/1.c48088d9.js",
    "revision": "799ac862bd1800f58c59308c21bda6bf"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.b7e1acd2.js",
    "revision": "f26917a96356a68f1e99292ad20392db"
  },
  {
    "url": "assets/js/101.bdaac78c.js",
    "revision": "d49361b5af4bc368d57f9deb843152d3"
  },
  {
    "url": "assets/js/102.d7158fd0.js",
    "revision": "b3dacbbe348aea8964cb837fd8ae5667"
  },
  {
    "url": "assets/js/103.508bda88.js",
    "revision": "7f8e7257087bd375beb89127eb6faf7c"
  },
  {
    "url": "assets/js/104.0f257b3e.js",
    "revision": "5afc03243bbe51259b62ca3674ab7547"
  },
  {
    "url": "assets/js/105.2ad5dd30.js",
    "revision": "baef7705c22f4fe47428b370a9024d1a"
  },
  {
    "url": "assets/js/106.5c41231a.js",
    "revision": "c530d0f1b7939df20de0f883c0c51fc0"
  },
  {
    "url": "assets/js/107.ae9505ec.js",
    "revision": "7ed52b9c32ab3acc45a15faf30f6a48a"
  },
  {
    "url": "assets/js/108.57daac8d.js",
    "revision": "1e329912c3d1ae9419eb2431f4d48c5d"
  },
  {
    "url": "assets/js/109.4fd775f5.js",
    "revision": "2a7fd069938fb80b08e5e2ece1d5933b"
  },
  {
    "url": "assets/js/11.1c629ebf.js",
    "revision": "05dce75981a7e5828a97eb4b08c3211e"
  },
  {
    "url": "assets/js/110.0eedb1d3.js",
    "revision": "9962e167c418a3bd4ee7ebd40c7f3bfd"
  },
  {
    "url": "assets/js/111.b51ff047.js",
    "revision": "ebae0b2090343f263a7760a0c0aa4823"
  },
  {
    "url": "assets/js/112.55afdb7a.js",
    "revision": "969df0c29f938b6994af2244b574397d"
  },
  {
    "url": "assets/js/113.7fd8a1cc.js",
    "revision": "115f8493c5051cc3c9fd3bcc13416110"
  },
  {
    "url": "assets/js/114.d9c1e909.js",
    "revision": "07d56d1be1ec2262880f776662608875"
  },
  {
    "url": "assets/js/115.7a02ad47.js",
    "revision": "d700cca9610dd3427f521f9c301c9d57"
  },
  {
    "url": "assets/js/116.bc0351ee.js",
    "revision": "559c9cfb988a8fb9116efaf8dcc4d50f"
  },
  {
    "url": "assets/js/117.e09142ab.js",
    "revision": "e198488faffa95999e73cec6e398bb52"
  },
  {
    "url": "assets/js/118.d194afd1.js",
    "revision": "05b76bceb79cb70efb21aad1c19a21e1"
  },
  {
    "url": "assets/js/119.6dcf0a4e.js",
    "revision": "14ffef47ba383ebee4baddf3764216db"
  },
  {
    "url": "assets/js/12.88d886d7.js",
    "revision": "803e6bc7b06b92530c20e692f07216df"
  },
  {
    "url": "assets/js/120.d59d9c36.js",
    "revision": "2758a4a0265074c00e9b077745020202"
  },
  {
    "url": "assets/js/121.61391c46.js",
    "revision": "3eff865aadc838a56bf8bc32562811e6"
  },
  {
    "url": "assets/js/122.16ed85ec.js",
    "revision": "26aa708f79c1441ae3ff6b9f5d4e1753"
  },
  {
    "url": "assets/js/123.804459eb.js",
    "revision": "f81cb18b545f11481f489537880e8ebb"
  },
  {
    "url": "assets/js/124.b8a26c12.js",
    "revision": "630e74540aef86876a837b6f72f292ad"
  },
  {
    "url": "assets/js/125.4e43043b.js",
    "revision": "3903a9fe7972bfc95b7b386b82a2cf86"
  },
  {
    "url": "assets/js/126.9600e2ea.js",
    "revision": "5878fdf216be55be7fc437b950b45f79"
  },
  {
    "url": "assets/js/127.6497df13.js",
    "revision": "21b25bd55c866a79654d06558d9af8d6"
  },
  {
    "url": "assets/js/128.356dfbe2.js",
    "revision": "8e768c7b7a1bb32ee3cc6819f82d27d3"
  },
  {
    "url": "assets/js/129.daf2df02.js",
    "revision": "da93d3860d124457f929eaa448ee9c22"
  },
  {
    "url": "assets/js/13.4c1b2220.js",
    "revision": "b5602dece2dbfa9271091abce58fd9b0"
  },
  {
    "url": "assets/js/130.fe939fcf.js",
    "revision": "04e1a6194fecb090ee7d9bb22d37c0bd"
  },
  {
    "url": "assets/js/131.95793048.js",
    "revision": "8dfbcd1337a1802fe3ec07ec87804bcc"
  },
  {
    "url": "assets/js/132.1c5e0b25.js",
    "revision": "aa9f2d40acdf568a0f145d93f6955417"
  },
  {
    "url": "assets/js/133.8e15ed05.js",
    "revision": "40816a9875efc63219fa5d815be3ccea"
  },
  {
    "url": "assets/js/134.2c3dc71a.js",
    "revision": "236c6ca75538be697ffc31678ac090aa"
  },
  {
    "url": "assets/js/135.a889e638.js",
    "revision": "9d2b133645a0061be5bff66f2511cc09"
  },
  {
    "url": "assets/js/136.bb91e04e.js",
    "revision": "a05ef7fd2bd1c4400b133ff8cba739d3"
  },
  {
    "url": "assets/js/137.3f7c294c.js",
    "revision": "bedd1bf862920aed0a7cdf113ce32b80"
  },
  {
    "url": "assets/js/138.0d0c93a8.js",
    "revision": "b375cda1e1e11c639aa14835cef69fbf"
  },
  {
    "url": "assets/js/139.11777bc3.js",
    "revision": "f5759f9caf50392cd802baf51fd57351"
  },
  {
    "url": "assets/js/14.b748362d.js",
    "revision": "9219fb1f4bbe156a3eb25dfcb5438048"
  },
  {
    "url": "assets/js/140.fbe0d507.js",
    "revision": "d13828fae859e69b417d28094af1fa01"
  },
  {
    "url": "assets/js/141.eec8608e.js",
    "revision": "3e84461a0d340f626f6a15c2a429bfb3"
  },
  {
    "url": "assets/js/142.639f341b.js",
    "revision": "04959d4fac365b1ffcda06e519d08954"
  },
  {
    "url": "assets/js/143.912560de.js",
    "revision": "add75c7a42c382992e11a87b2a52b216"
  },
  {
    "url": "assets/js/144.7f5c997b.js",
    "revision": "c20e2b032e51812fe78f8f093ebb3718"
  },
  {
    "url": "assets/js/145.7bb44702.js",
    "revision": "a9901f48af6ef0dd503732843e7ec817"
  },
  {
    "url": "assets/js/146.6508c0da.js",
    "revision": "37d2b5c1a9a4af09d68ba0aba7dbd37f"
  },
  {
    "url": "assets/js/147.e8e8455f.js",
    "revision": "4ae73f7fdd8bf036eb39a78ca9d1bdfc"
  },
  {
    "url": "assets/js/148.cfa24f22.js",
    "revision": "a92795035fc4e6f7cc60df9f3935caa7"
  },
  {
    "url": "assets/js/149.93bcf7ff.js",
    "revision": "515e9e5fec75fa9fc677e679a471bf1d"
  },
  {
    "url": "assets/js/15.04747bd0.js",
    "revision": "045e4f40223e91edf3df7e139a82b77d"
  },
  {
    "url": "assets/js/150.953dc685.js",
    "revision": "82b9bfcc0c9ccc85befe7f9fbd1f0799"
  },
  {
    "url": "assets/js/151.76530edf.js",
    "revision": "4f427ee6f0e5695288765d97ef400459"
  },
  {
    "url": "assets/js/152.1b4ace88.js",
    "revision": "d0b41faa97d539e192c8075e453c13f3"
  },
  {
    "url": "assets/js/153.032e19e3.js",
    "revision": "ad8cff08b92fba17a688df3565428cab"
  },
  {
    "url": "assets/js/154.600a8df9.js",
    "revision": "b3bf397f697b9accd0b28edb9875dc63"
  },
  {
    "url": "assets/js/155.4313129a.js",
    "revision": "94bcabde53c198e483f33fff17f330fc"
  },
  {
    "url": "assets/js/156.f66e7646.js",
    "revision": "11c8e26ab5fafb8ccc1020d8d8be1387"
  },
  {
    "url": "assets/js/157.4d8da020.js",
    "revision": "33dc8604a72f2ef70c19b286a50746dd"
  },
  {
    "url": "assets/js/158.da2bc4df.js",
    "revision": "4f01a5cb5f68b553e7869ee61cee9a44"
  },
  {
    "url": "assets/js/159.b36afd28.js",
    "revision": "fff1a368f8ce03ac319b7df0d9b08ce2"
  },
  {
    "url": "assets/js/16.cf64637f.js",
    "revision": "75dfd2f7393e62a95964319ffae70b35"
  },
  {
    "url": "assets/js/160.06e13824.js",
    "revision": "3109bff586e5ca40a8bb261f4006f9d5"
  },
  {
    "url": "assets/js/161.89613a20.js",
    "revision": "8ab3eb60f6e01dbc902971d1cf619abe"
  },
  {
    "url": "assets/js/162.8bcfbe8c.js",
    "revision": "af785423f69c69d546c3494d279a2b5a"
  },
  {
    "url": "assets/js/163.a16d23a3.js",
    "revision": "f3eab9c2123b312761de076cfe7bed0b"
  },
  {
    "url": "assets/js/164.ce20519b.js",
    "revision": "78184fc468df3f9de5d150a5822669cb"
  },
  {
    "url": "assets/js/165.46deb724.js",
    "revision": "72c06b4a41087683aa40f0e444eb50d6"
  },
  {
    "url": "assets/js/166.06579bff.js",
    "revision": "4d7c0b3c5fd63f3d8a254e4ddccce3d5"
  },
  {
    "url": "assets/js/167.25e9a6bb.js",
    "revision": "efe3e72477432ff23882179611aa3ec5"
  },
  {
    "url": "assets/js/168.504fd37a.js",
    "revision": "ffe42e1ed0b7433dd20bfbcb6a95a9f1"
  },
  {
    "url": "assets/js/169.8014259f.js",
    "revision": "65883ada027c16579e4f51c557c35a19"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.23217c49.js",
    "revision": "f907a37f82d00011400e7e5f87675d60"
  },
  {
    "url": "assets/js/171.a0bc505e.js",
    "revision": "f5e51ca620a8559f59d9c9fc96c3f69b"
  },
  {
    "url": "assets/js/172.019970da.js",
    "revision": "16cb1b4a6ea77ca4a17afa60fa160635"
  },
  {
    "url": "assets/js/173.b326516f.js",
    "revision": "70044bbef0c6796728f2d98c9baddecd"
  },
  {
    "url": "assets/js/174.9c146b17.js",
    "revision": "512166abe65d2e657cd28a1cdf296f48"
  },
  {
    "url": "assets/js/175.1e45b42d.js",
    "revision": "36b2492d4a2ed5fe4308ca6951ba6602"
  },
  {
    "url": "assets/js/176.fbf257f2.js",
    "revision": "0ef683f207d7fca9db92163dd6013992"
  },
  {
    "url": "assets/js/177.9007699b.js",
    "revision": "3c09011396d9eb8212a4ed0f772b0979"
  },
  {
    "url": "assets/js/178.d669575b.js",
    "revision": "d0cb4a24603d80c81729c09e3bc43ec1"
  },
  {
    "url": "assets/js/179.be1576ce.js",
    "revision": "b937c95fe6fcc3afeb1e3f446c41c40f"
  },
  {
    "url": "assets/js/18.87c6f261.js",
    "revision": "5ef1701f3f783c9e43f53d18e3071a15"
  },
  {
    "url": "assets/js/180.af7c4b5d.js",
    "revision": "9bda88f4c9f9d14a37d7416b6113f58c"
  },
  {
    "url": "assets/js/181.ae9e0517.js",
    "revision": "4a785f47f76ce45740e65fd668651a86"
  },
  {
    "url": "assets/js/182.1d9d011a.js",
    "revision": "d19778f0ebc46c32c62c05215e294ccf"
  },
  {
    "url": "assets/js/183.22f08d73.js",
    "revision": "6dce3603d9fbc81d4b05e6fae65dd6d6"
  },
  {
    "url": "assets/js/184.06d9f7ec.js",
    "revision": "e7d854f1696494ee96aba206e69652a7"
  },
  {
    "url": "assets/js/185.fd563cab.js",
    "revision": "aaea79090405de54fc606d261456a776"
  },
  {
    "url": "assets/js/186.f3a19a3c.js",
    "revision": "8d96e2ba1df0f8e3332a3d9e7845f9e7"
  },
  {
    "url": "assets/js/187.ef99953a.js",
    "revision": "bda6e7d9293e162a6667d371d7b3ad32"
  },
  {
    "url": "assets/js/188.6b9ac0bc.js",
    "revision": "7dcb313dba640cffa7b13066d9451056"
  },
  {
    "url": "assets/js/189.49bef577.js",
    "revision": "b8b93124f2c0b10a90793456007f36be"
  },
  {
    "url": "assets/js/19.fc6e108a.js",
    "revision": "4482333fb06b3d9dacb4666df58b7bf6"
  },
  {
    "url": "assets/js/190.63c77d7b.js",
    "revision": "6eee98fffc284d36234a90609f689ac1"
  },
  {
    "url": "assets/js/191.86df1e24.js",
    "revision": "cbec92386c5c104a7f5d91c8365c9860"
  },
  {
    "url": "assets/js/192.1740b0a6.js",
    "revision": "74d90c7f1d3991d6ee9e74fe8d3fa376"
  },
  {
    "url": "assets/js/193.2f0a53ae.js",
    "revision": "0302b6c1db538db023ff5ffb149df260"
  },
  {
    "url": "assets/js/194.8578076b.js",
    "revision": "3a32f69c8fbf628bfa41f29c7bb183f7"
  },
  {
    "url": "assets/js/195.5959c3c6.js",
    "revision": "3be42b0784bd73f89c3b183dbbc19899"
  },
  {
    "url": "assets/js/196.2793e1ce.js",
    "revision": "d74aedd2de814fcc71a8d1b0fec4c345"
  },
  {
    "url": "assets/js/197.93a3e703.js",
    "revision": "b0d88bc10f85e192925dab143e9dec3e"
  },
  {
    "url": "assets/js/198.8f94c5b7.js",
    "revision": "b3aa9c02e1cae9d0a9def399c0730e24"
  },
  {
    "url": "assets/js/199.dbd4e81e.js",
    "revision": "bf0a4c5f306a5a924cb5c18e9b414805"
  },
  {
    "url": "assets/js/2.b4216d11.js",
    "revision": "c91caa0cbb51d4eeb4b47314079d6d6d"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.4edb52bf.js",
    "revision": "18af6c6f395c619ba8632a52e7afaba5"
  },
  {
    "url": "assets/js/201.8ae93256.js",
    "revision": "6df206a924afb71a99c4b4a27ca32089"
  },
  {
    "url": "assets/js/202.19434983.js",
    "revision": "de9c5ca1810a82f79bfd9e8bda031258"
  },
  {
    "url": "assets/js/203.457e6e19.js",
    "revision": "90e2d17864d74d5ceaac4521bb5deeea"
  },
  {
    "url": "assets/js/204.854a4c8e.js",
    "revision": "5e666c78259091b2088c046d8e939d02"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/23.c92235eb.js",
    "revision": "6c18d72fae9fc129a751d92ea5365496"
  },
  {
    "url": "assets/js/24.aafbb075.js",
    "revision": "f1a668ee840cd12eb4ab7931564ed522"
  },
  {
    "url": "assets/js/25.8958a6a6.js",
    "revision": "eac93e5060001ea20fd3c88d8c274965"
  },
  {
    "url": "assets/js/26.924f33da.js",
    "revision": "eb4815169ffe99ebbc0ef07404ebbaa9"
  },
  {
    "url": "assets/js/27.61da10d5.js",
    "revision": "e61ccdb093da0187208bd991374d7cb9"
  },
  {
    "url": "assets/js/28.33528d39.js",
    "revision": "e25b796b2326beb9cde308a28204cd2a"
  },
  {
    "url": "assets/js/29.db803b88.js",
    "revision": "d0b5d5c8f4e7ef398bfeec84b100a60a"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.54196864.js",
    "revision": "2466a42ec3554b18733bc641b16eecb7"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/32.7795063b.js",
    "revision": "1529bd26f73dd5fc1835661f4e8b59f5"
  },
  {
    "url": "assets/js/33.de5ed0dc.js",
    "revision": "b97901d98adb6723dad3578e54db4a11"
  },
  {
    "url": "assets/js/34.32728a24.js",
    "revision": "1142b2720ecea4e2a68d47bc9ec088ec"
  },
  {
    "url": "assets/js/35.ed37c9d2.js",
    "revision": "76157146416110e4373ac3d80b704f82"
  },
  {
    "url": "assets/js/36.7c1c4339.js",
    "revision": "a7af91c9e1036e9b2800336657182b60"
  },
  {
    "url": "assets/js/37.4f9716b7.js",
    "revision": "3a48ae376f078800f796b86ac136fdec"
  },
  {
    "url": "assets/js/38.0455efe3.js",
    "revision": "61da5fdc1b88f55c6b3dab9ce2f6c377"
  },
  {
    "url": "assets/js/39.07789c24.js",
    "revision": "8fe9745d1f9fd134b44f5b86c892612c"
  },
  {
    "url": "assets/js/4.13ace995.js",
    "revision": "7b831806d7411338e9ebc9a65375aacb"
  },
  {
    "url": "assets/js/40.d479923c.js",
    "revision": "517bf9c5fe71291fc7b8c59abd6feb1e"
  },
  {
    "url": "assets/js/41.3b3f074c.js",
    "revision": "9f17a4caafab3c752f6fd106ec1dc6b0"
  },
  {
    "url": "assets/js/42.4ce004d6.js",
    "revision": "b5f1b03cb91c84ba04ac7b99f769d361"
  },
  {
    "url": "assets/js/43.74af7666.js",
    "revision": "24e7f0629f5d8712d392ba84188b765c"
  },
  {
    "url": "assets/js/44.2d074d1d.js",
    "revision": "9592c3293fbe7645d505c13d7857077c"
  },
  {
    "url": "assets/js/45.580ab0f8.js",
    "revision": "0a1f91144d2ce9e9cbe3b6699b81ed43"
  },
  {
    "url": "assets/js/46.60c5b7b5.js",
    "revision": "7c2c781c8920b2bea92a29bc4117a020"
  },
  {
    "url": "assets/js/47.327cbc30.js",
    "revision": "744bdc218522b8f2945cdd47c4810b72"
  },
  {
    "url": "assets/js/48.b0a06e3a.js",
    "revision": "dc6c4b62ab8e3e44228db50e7d546dba"
  },
  {
    "url": "assets/js/49.75e0aca7.js",
    "revision": "2048dad59649bbd2575ee6bb5400b942"
  },
  {
    "url": "assets/js/5.d8f051dc.js",
    "revision": "e2bd7a7ced3a9192740000ba1e9180d4"
  },
  {
    "url": "assets/js/50.1920ff74.js",
    "revision": "669a9a25b95e5c44eeb1f76cdeb19045"
  },
  {
    "url": "assets/js/51.3c714e04.js",
    "revision": "ea8c01dcc1d38c487f81b0ba78448922"
  },
  {
    "url": "assets/js/52.504207d5.js",
    "revision": "78618be10ba164a0cdbe56369b347b7e"
  },
  {
    "url": "assets/js/53.29d1366a.js",
    "revision": "9381c9ba747f827304d8b1ab7a6f8e95"
  },
  {
    "url": "assets/js/54.42c1d591.js",
    "revision": "ce162b7a1100760ee2d408d8efa01b18"
  },
  {
    "url": "assets/js/55.c3d694f4.js",
    "revision": "9bef0b856ca65230ce25973d4510d727"
  },
  {
    "url": "assets/js/56.18ba67f5.js",
    "revision": "f5ed3fb6cef0ee550ef5ea56628bfaa7"
  },
  {
    "url": "assets/js/57.303741f1.js",
    "revision": "11d6338b6f2a3b3aaed7e8dda5ac0f05"
  },
  {
    "url": "assets/js/58.b1455cb1.js",
    "revision": "aaf18c2079b06cb9bc337f115b57fb60"
  },
  {
    "url": "assets/js/59.b632ce98.js",
    "revision": "229ec87de0d263e70359626a7864f4c3"
  },
  {
    "url": "assets/js/60.24332760.js",
    "revision": "2be32760bebdeb08d4329a2816e16c43"
  },
  {
    "url": "assets/js/61.48ff03a9.js",
    "revision": "8924d54737c3f09df6019a731be123f8"
  },
  {
    "url": "assets/js/62.4c15f7d8.js",
    "revision": "f1b48c5d988e9cae364af287b2ab0d16"
  },
  {
    "url": "assets/js/63.a9b27e98.js",
    "revision": "8de311a0e6b10069d239b0bf18cd1529"
  },
  {
    "url": "assets/js/64.f88807ef.js",
    "revision": "93fa7bce97a35b257f9a9e1c3658920b"
  },
  {
    "url": "assets/js/65.9a5047d0.js",
    "revision": "dfc4a16ec42f03c97f9593ed199cee84"
  },
  {
    "url": "assets/js/66.e6a49e3d.js",
    "revision": "483df886654a71d91aef88f01a6767f8"
  },
  {
    "url": "assets/js/67.e4d5d3d6.js",
    "revision": "a056e811071a91374ed2c6fe9541dae7"
  },
  {
    "url": "assets/js/68.02e0931c.js",
    "revision": "5e5e19bba9540be2dddbfecb93aaa06d"
  },
  {
    "url": "assets/js/69.48d11a23.js",
    "revision": "344e80d25b34d4128dfe54bedb32c6a1"
  },
  {
    "url": "assets/js/70.60fd5252.js",
    "revision": "6ee0c66a81eb0ae407506702d0129ae4"
  },
  {
    "url": "assets/js/71.02714f53.js",
    "revision": "ebbb0e80ecca0a832a7b7840f502e6e4"
  },
  {
    "url": "assets/js/72.6862f4c4.js",
    "revision": "c04d928d34098411d3c683c13f2e957e"
  },
  {
    "url": "assets/js/73.24ea9611.js",
    "revision": "c49faac140369611d7f6a4574f772762"
  },
  {
    "url": "assets/js/74.09578aa3.js",
    "revision": "ba64127656a5b4163a1d3dd9c07c7a82"
  },
  {
    "url": "assets/js/75.4ceb5309.js",
    "revision": "907433b003d5e3078e7061592f82cc5d"
  },
  {
    "url": "assets/js/76.ada5bef8.js",
    "revision": "c1b67f83758f48d22a347d97fb21a91d"
  },
  {
    "url": "assets/js/77.9f414a05.js",
    "revision": "e369b18ed70f194be5ae71b5133c657a"
  },
  {
    "url": "assets/js/78.f5ebfdc2.js",
    "revision": "ca43c62a36c39e63505c660f160b1f6b"
  },
  {
    "url": "assets/js/79.e95ed2fe.js",
    "revision": "9a35fff96823b88fb1582427b809ec74"
  },
  {
    "url": "assets/js/8.e217d416.js",
    "revision": "0ccc49133f7a26693890c62d634b41ed"
  },
  {
    "url": "assets/js/80.3d745235.js",
    "revision": "38b5e9ed51f63e59cf258a713066c8b3"
  },
  {
    "url": "assets/js/81.66d5ae6b.js",
    "revision": "fb28092c79b597aa07c78296bcfe0f61"
  },
  {
    "url": "assets/js/82.add95bf4.js",
    "revision": "d99b0e719777213ff8a4bcbcd519a834"
  },
  {
    "url": "assets/js/83.5cfbd502.js",
    "revision": "af9cf7181d739b3ed2158cc3e87689e1"
  },
  {
    "url": "assets/js/84.eeb10ca4.js",
    "revision": "af4bb14e31b990e9b5974782ace3fd37"
  },
  {
    "url": "assets/js/85.1473a1c7.js",
    "revision": "bc4d13873dce17753e6c3720effef77b"
  },
  {
    "url": "assets/js/86.022aee2f.js",
    "revision": "48cc99d138acfc63c685163962e2402c"
  },
  {
    "url": "assets/js/87.f7c87e17.js",
    "revision": "8131d7a1a1dc8249c87cf5bfab100b47"
  },
  {
    "url": "assets/js/88.91cded87.js",
    "revision": "70ba31a61f1dfa99ee59b344fc26f9cd"
  },
  {
    "url": "assets/js/89.1f90c24a.js",
    "revision": "1b4c79eaffc066a64883334907ecace4"
  },
  {
    "url": "assets/js/9.66cb064a.js",
    "revision": "38edcaed33579d560e7a32484d06589f"
  },
  {
    "url": "assets/js/90.76b36aba.js",
    "revision": "6dcb7f1d64fcf536e4da5b0aa822a6d9"
  },
  {
    "url": "assets/js/91.14684f2d.js",
    "revision": "9a00d0e88e7ece64badcadca1296575a"
  },
  {
    "url": "assets/js/92.d137c818.js",
    "revision": "4086e7bdaf7ae772b0d3c62a47d1789b"
  },
  {
    "url": "assets/js/93.fb1fbacb.js",
    "revision": "13b921b48ee50c5a0c6580b48b31885f"
  },
  {
    "url": "assets/js/94.160de434.js",
    "revision": "fae21906ec7367250bb228ab4d47e9ef"
  },
  {
    "url": "assets/js/95.fb59d156.js",
    "revision": "613baf21291897ce9cb399ec3cad2dc0"
  },
  {
    "url": "assets/js/96.f9c4098c.js",
    "revision": "b8af25bed34f0776b0d9852874afe4cc"
  },
  {
    "url": "assets/js/97.de67fde1.js",
    "revision": "e9f4e609ae07581d0720074ce1b580b0"
  },
  {
    "url": "assets/js/98.6a3e323d.js",
    "revision": "b11ab370dca2e1e82828cd2e75975ab4"
  },
  {
    "url": "assets/js/99.5ee08bdb.js",
    "revision": "e04445e7b9b2827784eaca9368c66d2a"
  },
  {
    "url": "assets/js/app.3635c592.js",
    "revision": "08b9553bb7e34adfeba16f3782af09b5"
  },
  {
    "url": "assets/js/vendors~docsearch.7730cb75.js",
    "revision": "ef37085eea030bf9b8cdc23f7ddb4c3d"
  },
  {
    "url": "index.html",
    "revision": "a038ea9484549dfe1f9bcc2104ddf976"
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

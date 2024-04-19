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
    "revision": "ae5a4db0ac2748b1961738318018c012"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a4d974d27cf8f468f412ad072f1018ae"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "819401a2be93db6a9f6ec0c6f13b7cf5"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "822d56339c969b0d0f818f08047244c3"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "0e411e278f8df36114724ce1ecc60a3c"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "577d4ad759e923c3c1b70911cc55ce36"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "caa26cbf587f911d62fd70e89a90ba75"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "471109bbba9461be4a4048f91582dde6"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "49149844f5485a0e586a0fa68d94688e"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "ce416e8501d3957c8caa47ac09112899"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "52ea899efb42e8fff5bdea9cf5556af3"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "11c7c9eeb8dfd6017f7a4be0d05f56cf"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5e78738b0a9fe71fbd1a9794f075ef5c"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "fc26965b24ad23a8633dc4f0b48307c6"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "f6a1e8b8213cb03f490dcbad731fe046"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "d9f36d92d359440900a95d667c50807f"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "6a34c2b8f61f8b13cefbfe92272115c4"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "e97fb844b7e964caca880ba41ae5db98"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "3a7ca649b709d158721bbf52b7def94a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "2ef5c416fc298a513ad8b78aaa16d5c0"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "4133b4c275c1f351a50be389abf7dcab"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "da2693511cf9602b031d7f1fcab23f61"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "99616c754acb8038ef92353cc14a5fc4"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "e2541bdc7b60d722f3cdad7f7da6f922"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "697e5f147d983c299ac29c58d35c2455"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "8acada0743b5719f05201f58cd953382"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "e924381a89c8b84fdb5cc656adb1a19d"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "1e560d266532d320d56d1e06a7405823"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "1658781961cce589e661ee9b00062f18"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "631276063abcc9b6873ef34a6a36e2ec"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "10b5c2b4f8b676f66d61ec97ee034b61"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "57510b82b1094691d9f24cb52c274036"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "2b173b5678e4c72040e9e42ad32f13c2"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "39e1bfe22fe06f537f98e6565b35c8a3"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "11bb25eb8aa8f893836c7def1bb85ba0"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "1aaed717cc9a243494fef2d34a2bd1ac"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b13d5b2dfc0d45d8061abfdafedbe6ab"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "6fb5a5238b75854cd9a56767e7b68fbb"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "429738b56136c317d7a033aba9c35acc"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "b2925aeb6041758bcd9c9e2d6c2b61c5"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "1ee28128f6dd019e75df5634dca361ce"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "63a5aeb1eab346c592223041f6d50fcd"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "40370d4b7ba4c08089125f607982f5fc"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "108489a8f89cbc9b1e2c9e58b06cab64"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "91577c8e18bc23acb7f7be2c657542c4"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f7533dd6a40b3d99307061c8cedfc3d0"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "1b20efbb399e5cdebd1260a14575b50a"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "9edd10648e4873379495e609075eebba"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "4402a46f2f6a2537144a1676a98c0dcc"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "f29fbd4caa483cdc9d7f7d8c5beb2d17"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "42db0f0d31ff26223510c99e990ac5d5"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "3670f5050071d37db65790ea054d42dc"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "6b3d69695aee66f8db5279e7a33e5d51"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "5faff7a5e5a103ff21d071a62dc94fa1"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "a621bf20f9dbe54a293b90d2a84b0371"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "131c622d1bce783cb079b64107456e8a"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "9cbd1a5294111d106b06190a22882f97"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "93085e03a20cb2be168dfa1f656cefcc"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "cbaada1322b9a5ac5d06f0ea45236e35"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "664622ebbc3dcf9df64d372db7d36582"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d86c5322c8a70136b1616254a3dbc213"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "5f36832dea841b8bc441983b1de497ff"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "9f5475b82c7fe5158d6a3e28685e0719"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a28e0ad9920da0339b4084cb71c8a460"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "91f1b670c1094aea066d7022953b7ec0"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "99f8d0f7038cd4cd88d004c555892187"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "7c90f827719025cfaf441672944f142d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "767ee7bc99c60bdab127d7b096c29890"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ccf189f419c51b4115edb3dcf06a36f8"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "b11c0586594a9751b3c2701564c0352c"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "17bdad75d7eedffdbb42698376972344"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "fff766ba8dd55e5bc90e5a480d61aa0f"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "33e2b9f43732382ebfa6ee595bc1b594"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "ed7a3ce8ec084c13d7da7089a2eff304"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "b07692dcc2aa6be316ccb021e1ffd405"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "34994fddc9c20af139ffb33c8f0f8bf2"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "dd4ecbdd997c4192e9904e243e600afc"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "a5de9570bb083b9c189a8bc21d9b8061"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "76c91ab80261c22d09933bf7271ce20a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "2c22387a6787fa18c941d24e9769393d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "47a21b0f9e4b357aaa60946bb9f6b130"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "cfb9ae02cffd1d781274aef6d62cf524"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "2e637f8f0630ac76574000dee4d8295e"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "6cd473a214ddb6b35366f8b86bfd34e7"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4b638769c92823d8aae14b14c5217c2e"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "0116f395b043c1792ee89cb3322018d2"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "626c6780ec186fc1366bdcaec0e931ae"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "78a9379517e4c9dd56e5b16f190d7bde"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "b617d80c2ef4d71770f86085dd77d004"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "09c8410bb7e6e821ba17ed5068f97c50"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "1198f3f1bdd210d438ff4da3aaad3cc4"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "2d45a859a66bad2bde946ddbbfb31102"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "85541c4baf40330e1ef6c74f1563d9d9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "7cc035ad3fa5ab5d5b29195b9482ba50"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "c43fc67e9df0bf24b4a8760e4ecba604"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "02f0fcd9a58f6078551e845a1ed3392e"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "24570fbad5b465f6478867614971fbf7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "557b3dab803af46e0364deeab24bc909"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "c8b4fd06bcf8601867e45535c698fdb7"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "9445ee0b01c43d33e1ef918b23ad0b2c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "919893c7b6f11ac9961589b00d78dbd3"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "b029f3ef81a442860a48aeced9796765"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "144413725a8e4f8dea9d3726bbf41984"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "3742ffc629dc26f436bd9807efaefcb0"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "b43422deb1f400e07a2a11b1620fe872"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "f449f8b601078235762a6d5b6b09e7b7"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8d1b8ae5a8446e7513ba123ae4353d39"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "28cbd7eb6c37723f7c18d4a6c08eb9f6"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "82bc228c56ba381370774761c15b1572"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "afa732fd0bb49e3344fbf30ef9f8ef01"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "8b7568fde6d486de5292f095017bc837"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b1065b98a3d5ed54c0b67ffcaacad111"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "120614beb9c416f50f0503c11f0df7af"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "35f138677bd737afa1ff911669b9519b"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "10bd1e6aa06f46af28510d8bf56dca7b"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "8b7f5927c4effac50417e7fd939d4b1e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "2c19707b7c2c5ee767a2f2aa72347203"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0b4e9410580d2bc38b3ad002bdec77b6"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "ce43b121ad5d78f4e9d070dde305ce71"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "2eb27716fce718c438b186471b2b62eb"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "8f933f3aaaa6dac4e16aaffce6ca97fb"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "f9974f587f48d3cbedf1f0c0b353fe86"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "c90129d0c04ba4bb6328d7f600132cca"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "db49e1a7d53b4964d257c34ab9f20070"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "627efce2ceb52bca07dab42a129436a8"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "e6246d444e2f96cd0c3a60cad938760a"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "9a1c9e572d9ea1aa51a40fb404e71095"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "7fe6b6fc9c7362e5790c63cea53759fb"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f513f5975f48034e1f2f4e1ff849a38e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "fbe14d4d6ac84fbd6c1e54f730028219"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "5676375908152f4ce310563778d91288"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "0c1960f424c08b9de5ca863e178605ab"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "10f6033197d9236bec7ca4e802f6b174"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "9a7681a67f5ce1a84b8617024ef9f6ac"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "3af898ba92fa172d5340d90d8c0041f8"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "ce2b65f92a59ae19c6eec66bb4bb4bd3"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "d5d3207d9d2f6a0002ef06b120b0534d"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "0fab57e9f83dbc9138a8fbb32817cbc6"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "dda81b2119a321b4d9222ef6e48ff729"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "cf8ed3c888393b381e7623580e9184dc"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8fede0421c27572016b07159ca11d800"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "70773024936ecc06122d0e36a377bb04"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "799c7a42d9cfd11f5a4c3e45c5dc89f7"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "ee6fbfa3faa59b0e7debadfd3410cdd0"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "70590a2d30d81c34ffffe5ad05faa1a2"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "23e05d2a21c8e9cce891eb2c103c0f8d"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "6c5236efcfec2b068a99413af13e74f5"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "76eee942498242bcb9021171ecb30f01"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "1d6be323776e85640ec8ad3b3f51dc10"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "c1983bc8baaa43dd0ec5e0c14b910f4d"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "7532c77bce31c11dd87b2e2ad414be41"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "1fcb7e6d43e74564f0bdbee0b70c0db4"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "05f1ad003388600795090eb68ce2c3ec"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "5ddc63cf8787ffc892593c16d2556c53"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "714b8eec62cbcf2491c240546c45bddd"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "dba92002bb4b6b39decfef49750a5df8"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "12275531efc315f0e8be1b655be11dc3"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "7e462d9f8e4d88c92a6df15cd5711d23"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "7bb666515b8f9c8e9dec2c9f55581689"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "65ef1133cc6e00f8748b54c0ac468898"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "923fb8e11e292da7d970fb18aace5e40"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "c784d72526e3313af8416012057c21d3"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "0576c0d52963d273371a0c58f9ab8372"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "63598235f4b482e5f7b2b2d1b3f89eee"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "6a66f14b1fedc9907f4653d4041e3807"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "f13cee49cf00d6a38d594534435ca061"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "9a9a22ddb3a60be913080b12afa7b839"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "ee47abb3dfb3a627fb9f8a7f836ebb59"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "ae740ff4dac24b86e4cec7f5c135d55a"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "88298035c45128c0778af388a31e8462"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "df0b7d17d5c4d98a3cd75234749823ba"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "2e4605ebeba36f17fbb38d74a20817d7"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "594f9675b60466a51de268ba040e2ffc"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "78d1b059a799f3dfdb8ef07c7cd58fca"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "10759ff2b07e69e2dfd6bbd70f55383d"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "b4375e5f4daa16507fd87d290d7e16b2"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "a9d794d79fb86080c7f093c26b95629b"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "07ad8c8ce53ac15c9312d64e53434781"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "0bee72636527bdc91ed3231dcd346724"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "1ef13ffb8100fbc3b9132c0cdf6765ad"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "df4fb1643d0c0213e47fc58d8534876e"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "f689bf2df100307c0efbadad0f58792e"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "9c62f7b075d63dc831372ec6c014d9c7"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "0daffa606d8d6fd1b2049bcf0307e9a6"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "50a8c604aaf126c78260737569e0b9c6"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "fdde94fa4df718d3c2732bb1b69c8976"
  },
  {
    "url": "404.html",
    "revision": "7609e0ae6c8376a58de6602fc3e992f8"
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
    "url": "assets/js/1.6dd4f8a7.js",
    "revision": "fb1a346597e13e37b55030d372772710"
  },
  {
    "url": "assets/js/10.552b3bcc.js",
    "revision": "f5d53005c2a7e3b392a2a4a92619e951"
  },
  {
    "url": "assets/js/100.a9ddc511.js",
    "revision": "af8fecc79e9bbab472605194f0d0cb3d"
  },
  {
    "url": "assets/js/101.e44a22cd.js",
    "revision": "dae5021cc8a2355e79cd72db94faf835"
  },
  {
    "url": "assets/js/102.52292839.js",
    "revision": "ba73dc28f8210a26be2c302c16fea7c2"
  },
  {
    "url": "assets/js/103.c7984f8e.js",
    "revision": "ca5c6742c91dff7c7db221a95aec9f7c"
  },
  {
    "url": "assets/js/104.6ad45901.js",
    "revision": "9cc7268a655061f188f05649602d3871"
  },
  {
    "url": "assets/js/105.f4960f9b.js",
    "revision": "5cdf4faadae205db95dd86baeb7bdd93"
  },
  {
    "url": "assets/js/106.d4a2b4c3.js",
    "revision": "7c31fa06f62d6f4f71262929c58f403e"
  },
  {
    "url": "assets/js/107.86dca3b8.js",
    "revision": "1994488c20c92f4722646049727f75e9"
  },
  {
    "url": "assets/js/108.97059133.js",
    "revision": "2ba28e3e4e0d39f9e10680b9b86e9140"
  },
  {
    "url": "assets/js/109.95d9b057.js",
    "revision": "01a36d76a58d8d19a6886b7f6d299cdf"
  },
  {
    "url": "assets/js/11.32231a79.js",
    "revision": "3c4e10ecd975cf2f5e332bff6c302844"
  },
  {
    "url": "assets/js/110.f5f63cef.js",
    "revision": "1e6415cc38ed677b798297bc590d6ae6"
  },
  {
    "url": "assets/js/111.7ecbdb62.js",
    "revision": "7508de357aeab899ff57359b6d167b78"
  },
  {
    "url": "assets/js/112.83373594.js",
    "revision": "60b918ca42c64226a9983c994f196dc4"
  },
  {
    "url": "assets/js/113.477c90db.js",
    "revision": "4495264b11fe401698d0a0c42eb42d33"
  },
  {
    "url": "assets/js/114.4757c281.js",
    "revision": "f2decfebb9d1de436eb03dd35d172501"
  },
  {
    "url": "assets/js/115.08ec3f27.js",
    "revision": "91aafb43caeda06a73d4d07c6b588a7b"
  },
  {
    "url": "assets/js/116.f2c6e75f.js",
    "revision": "e141fc694e1c33b4b20fa4c1cf29ae4c"
  },
  {
    "url": "assets/js/117.557ec92f.js",
    "revision": "ae4ecdb1dbf04ac630f0e4e402b7d086"
  },
  {
    "url": "assets/js/118.a2409b3b.js",
    "revision": "41185a18cd1acf77e5ae5562a2659b1c"
  },
  {
    "url": "assets/js/119.f0e1693d.js",
    "revision": "a1a9f7fd884ff7698eb1e8403c13c04b"
  },
  {
    "url": "assets/js/12.20029f38.js",
    "revision": "99d3523fd907ab63246343665007212c"
  },
  {
    "url": "assets/js/120.54cba225.js",
    "revision": "a27c549898f8ad2625b66b9c486b413b"
  },
  {
    "url": "assets/js/121.99dc5522.js",
    "revision": "e5a650eb0a32b22c7793448357c49074"
  },
  {
    "url": "assets/js/122.7c886423.js",
    "revision": "dad9b2660e886fb728c4455a30addaf6"
  },
  {
    "url": "assets/js/123.e2d51994.js",
    "revision": "ca5750da9dd43541407b56eadca63411"
  },
  {
    "url": "assets/js/124.f3d6e49c.js",
    "revision": "825b95a6953362f951f00ee0661f0355"
  },
  {
    "url": "assets/js/125.08af82b3.js",
    "revision": "1c2c1742ab8a2e46d988bff8ae0d5c87"
  },
  {
    "url": "assets/js/126.8b50d96f.js",
    "revision": "8a96f2f8c68ba7f9c2411030e746225c"
  },
  {
    "url": "assets/js/127.02c30baa.js",
    "revision": "583f7e489d348bed442610f91dbbf75e"
  },
  {
    "url": "assets/js/128.1ae334e9.js",
    "revision": "1d981e8bc810691265daba78ec3c7aa4"
  },
  {
    "url": "assets/js/129.52f14dcb.js",
    "revision": "ebbbd07d491f3970dd3e2bd50e1210a9"
  },
  {
    "url": "assets/js/13.3ce53542.js",
    "revision": "5a314d02468eea868afb0048a841e5b5"
  },
  {
    "url": "assets/js/130.a2738384.js",
    "revision": "cf33070a33de4059a6ba3ef8e237ef7b"
  },
  {
    "url": "assets/js/131.8461d5d4.js",
    "revision": "09a47687d00585897eadf45a5444f6c9"
  },
  {
    "url": "assets/js/132.250529ba.js",
    "revision": "631e2d2e4aaefa7b583ccd9ea8928cdc"
  },
  {
    "url": "assets/js/133.06ec56ee.js",
    "revision": "6138cf41483519165f6b9d77d2d2926a"
  },
  {
    "url": "assets/js/134.4a5435d6.js",
    "revision": "77a3ddee18def44c4b8fde554e62119b"
  },
  {
    "url": "assets/js/135.2024aad7.js",
    "revision": "00ba13ea2b993081243e59555bafae35"
  },
  {
    "url": "assets/js/136.e3e94b2a.js",
    "revision": "9f83880884122371a7b364ca7dbf62e2"
  },
  {
    "url": "assets/js/137.1de9f34d.js",
    "revision": "fa8da2a9c674e1d70fa2d357beeb278e"
  },
  {
    "url": "assets/js/138.112a8ace.js",
    "revision": "f9a3f215b5c1e1fcd0a18656c1efd8ee"
  },
  {
    "url": "assets/js/139.d1682096.js",
    "revision": "64e7e644a50f3bb737329df0a1e2aa12"
  },
  {
    "url": "assets/js/14.417b7909.js",
    "revision": "37d4a82516d95d570dcf01411ffe14c9"
  },
  {
    "url": "assets/js/140.3d8225d5.js",
    "revision": "9b9e8319b6758f43bf18013b64778d8a"
  },
  {
    "url": "assets/js/141.62ac0611.js",
    "revision": "1caa347c1e61bd451486ac12014871bf"
  },
  {
    "url": "assets/js/142.160c2e90.js",
    "revision": "f23f6b5ae3932b4448f4b5fce365f45d"
  },
  {
    "url": "assets/js/143.3e4e3656.js",
    "revision": "ed4363b16f30ff5bae027720fc0c4da0"
  },
  {
    "url": "assets/js/144.2ec65353.js",
    "revision": "e7979e5aba0dd77cb4e6d05082006871"
  },
  {
    "url": "assets/js/145.2afd431a.js",
    "revision": "4092002a73617d096ad945f07a832ed3"
  },
  {
    "url": "assets/js/146.07460c11.js",
    "revision": "a3b130e9ff7f91ac4ac5bfac51b976c7"
  },
  {
    "url": "assets/js/147.00dfbeba.js",
    "revision": "d63ac540eedfa6069536d1c1267d0c12"
  },
  {
    "url": "assets/js/148.6dfa45bf.js",
    "revision": "e566f4c5ed99be9571b52740a9f35635"
  },
  {
    "url": "assets/js/149.0a169202.js",
    "revision": "c0782049880a5ec494999c9b7f5a08f7"
  },
  {
    "url": "assets/js/15.2296da08.js",
    "revision": "fc19334e38725c2fb1182d6f58667359"
  },
  {
    "url": "assets/js/150.57568846.js",
    "revision": "eed98d7edf4a3020f734f9a4e4d529b2"
  },
  {
    "url": "assets/js/151.15b75046.js",
    "revision": "432d85e80acc7435c632ccf5722c03a6"
  },
  {
    "url": "assets/js/152.fe868daa.js",
    "revision": "05366826e467337cf4d0bc0b843cb74a"
  },
  {
    "url": "assets/js/153.4defb077.js",
    "revision": "2518e4035fc8b4f3b63f8b6f622e61c7"
  },
  {
    "url": "assets/js/154.5a3eeffb.js",
    "revision": "1069ad72eb819fb384fbc41a32474c5a"
  },
  {
    "url": "assets/js/155.e394a9b3.js",
    "revision": "5b19d08ea645aca200c7d120f1cee558"
  },
  {
    "url": "assets/js/156.7b7c16d2.js",
    "revision": "34d755b561ff041474b0a99d624c3ec3"
  },
  {
    "url": "assets/js/157.be7cf548.js",
    "revision": "de0e9e43c24210a2a3d73c96b3ab3c15"
  },
  {
    "url": "assets/js/158.4ac778e8.js",
    "revision": "619605809b3388bfad840457fd729ea6"
  },
  {
    "url": "assets/js/159.01af7b7d.js",
    "revision": "7d42542c12edc96fcbfa338ba0801d8c"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.d504781c.js",
    "revision": "442c6ad36481914ae386b85ca74256d1"
  },
  {
    "url": "assets/js/161.a3e0f04e.js",
    "revision": "aa7b8922c98907ab40723bb7be522f86"
  },
  {
    "url": "assets/js/162.f53003f9.js",
    "revision": "88441509be5ec49dc21606aa19b6331e"
  },
  {
    "url": "assets/js/163.8e74851e.js",
    "revision": "4bd5d5674ab22bded9375618dda98716"
  },
  {
    "url": "assets/js/164.d8cdfd26.js",
    "revision": "8bdd6fb3c5b031fae01ef89ac469a371"
  },
  {
    "url": "assets/js/165.9f0c5d68.js",
    "revision": "5ad585932074f295282c3b36dfb079ae"
  },
  {
    "url": "assets/js/166.445933ad.js",
    "revision": "37f2b38318e30733295f56f26391c2cc"
  },
  {
    "url": "assets/js/167.7cae4f53.js",
    "revision": "8fc14bd4358ca3bf485fbbbc1d7e6fa8"
  },
  {
    "url": "assets/js/168.ff971372.js",
    "revision": "0ae28449d5ecf13faedde6cd858a81cc"
  },
  {
    "url": "assets/js/169.827ecaff.js",
    "revision": "090e5fb068ff1c792a844575142d469b"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.9803c10b.js",
    "revision": "b240e3468b695cb5ec7611b146f7e5c2"
  },
  {
    "url": "assets/js/171.fe0a4df6.js",
    "revision": "48e10f33cf20ecf10cd7c5617757c0d5"
  },
  {
    "url": "assets/js/172.78d4c85d.js",
    "revision": "0c292ae8678dec7f780bae83d858cba3"
  },
  {
    "url": "assets/js/173.e083ee9c.js",
    "revision": "be4da26be30f8d9b59e4a997f3c9835b"
  },
  {
    "url": "assets/js/174.b9afc572.js",
    "revision": "11f253ca8a75a5ee0a4241d9a6bf7084"
  },
  {
    "url": "assets/js/175.2e416a6a.js",
    "revision": "541bcfe460486cce3fdd7706d34cc7a5"
  },
  {
    "url": "assets/js/176.8e4f64bc.js",
    "revision": "e3f81bc6dde32d07e663be9a3d27c9eb"
  },
  {
    "url": "assets/js/177.27436e53.js",
    "revision": "d14a604217cd1c768337890e134072f7"
  },
  {
    "url": "assets/js/178.a8b00933.js",
    "revision": "bf314a9421460e6244ec091533d87b04"
  },
  {
    "url": "assets/js/179.d87202fd.js",
    "revision": "87480459a5d1dec5f2eb8301fd4ad197"
  },
  {
    "url": "assets/js/18.75af64e3.js",
    "revision": "9a35d637f80da1a67712e3faf32d1ee9"
  },
  {
    "url": "assets/js/180.5ffbd623.js",
    "revision": "5a9364d057654747de5c17d466fa4cda"
  },
  {
    "url": "assets/js/181.55f50c6d.js",
    "revision": "55099ce138bf35d8a75ed366b01f0d33"
  },
  {
    "url": "assets/js/182.a9365abe.js",
    "revision": "336f2d62f114410a88848cba43a09fb8"
  },
  {
    "url": "assets/js/183.e6e32f2e.js",
    "revision": "b68f535171f688e78ce24f20be5f3a15"
  },
  {
    "url": "assets/js/184.bfc7102b.js",
    "revision": "398f7f3d2fcc6c9e73befca0b9d49f82"
  },
  {
    "url": "assets/js/185.e58e70c6.js",
    "revision": "dbcb0eefb536fa044191960a0cc4bc10"
  },
  {
    "url": "assets/js/186.02a88cb4.js",
    "revision": "c2d0d4439f4b6c5fb5ec1a358d319b60"
  },
  {
    "url": "assets/js/187.d6ee6763.js",
    "revision": "cc245cd3f4a29b95e1abef335e5fa715"
  },
  {
    "url": "assets/js/188.d03f5662.js",
    "revision": "c91d13db1a91ba18eea5008d63d46ec8"
  },
  {
    "url": "assets/js/189.0efc84c6.js",
    "revision": "360216854d0de03eb4b6b3a2709ead38"
  },
  {
    "url": "assets/js/19.adf9b905.js",
    "revision": "db3407784a9143e05fce1d347d3bb5b9"
  },
  {
    "url": "assets/js/190.8e7ee790.js",
    "revision": "08e333d78a9529663fdd92d679601deb"
  },
  {
    "url": "assets/js/191.92f9c499.js",
    "revision": "f9cb6448fe68a950a7e0c4ff22383379"
  },
  {
    "url": "assets/js/192.966c95ec.js",
    "revision": "d0ef2efc22e9748e9d4f951f9ea7e0cb"
  },
  {
    "url": "assets/js/193.2faeb93f.js",
    "revision": "0de55e01c291968f814b8edfd45f843f"
  },
  {
    "url": "assets/js/194.8137e6f4.js",
    "revision": "a0f6dbbd3e968be35513fce953f6db08"
  },
  {
    "url": "assets/js/195.c177244c.js",
    "revision": "cc1d7ff2f70b0f09f6ab32d6913cdf95"
  },
  {
    "url": "assets/js/196.aa36d74f.js",
    "revision": "7d4cf0dbb9fe53b552060aa2c7261c57"
  },
  {
    "url": "assets/js/197.e8b6d3ff.js",
    "revision": "f408c2ce22b9b70bc3522441f1ad992e"
  },
  {
    "url": "assets/js/198.e11cc989.js",
    "revision": "f4f3dd40fa5e23b867c055621158620a"
  },
  {
    "url": "assets/js/199.fddd54ab.js",
    "revision": "6c98d42e756dbc04ff5aa38b8378b350"
  },
  {
    "url": "assets/js/2.f6140c89.js",
    "revision": "545c298639f03711be7877a4884063b3"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.f8368d5e.js",
    "revision": "bdbb4534fb040a715f9236e137f7ac4f"
  },
  {
    "url": "assets/js/201.bc55336c.js",
    "revision": "f6c6d9255f5342a079b76b3414149e45"
  },
  {
    "url": "assets/js/202.6c9b8776.js",
    "revision": "4e28f025fa003ee21fdae81127e979a6"
  },
  {
    "url": "assets/js/203.6228f363.js",
    "revision": "dd885b15273bd382a667443d5cd2aab5"
  },
  {
    "url": "assets/js/204.ff977461.js",
    "revision": "d1d15c2ee5bbfe635153b18e31fe3ff7"
  },
  {
    "url": "assets/js/205.789d734c.js",
    "revision": "a57d5c49a5c053a2d1c90c19afed736e"
  },
  {
    "url": "assets/js/206.97dee798.js",
    "revision": "92eb1afbbd677c2ee491a8688b82d0a3"
  },
  {
    "url": "assets/js/207.1df77c96.js",
    "revision": "9a01e46e3b2f9aec7f5d9fe2829eb068"
  },
  {
    "url": "assets/js/208.7d80c584.js",
    "revision": "e4b6c06a718a7c9da6d34d589ae12b1c"
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
    "url": "assets/js/23.086f54d5.js",
    "revision": "f97be441322eae661d7ff383e25fd372"
  },
  {
    "url": "assets/js/24.71c8156e.js",
    "revision": "f48070543d853e5d22e81ded7ef472bd"
  },
  {
    "url": "assets/js/25.f848abf3.js",
    "revision": "f2d21f8719821f015a043545c8f09898"
  },
  {
    "url": "assets/js/26.c9857e4a.js",
    "revision": "dd4e0a6f1f579c6d33b9802f94376a0e"
  },
  {
    "url": "assets/js/27.607e82cd.js",
    "revision": "b2fdeb7f57b137ad6e512a91fd88b556"
  },
  {
    "url": "assets/js/28.bc3260ea.js",
    "revision": "43237cdfef96395162f49ca57bb4a5e9"
  },
  {
    "url": "assets/js/29.82f49fa2.js",
    "revision": "c689afdc728776f6f20ccb0a00d68808"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.047a72d3.js",
    "revision": "fb5f5966f2e3fd9234cc49ab82c063e6"
  },
  {
    "url": "assets/js/31.b9d8d5ff.js",
    "revision": "340b2ae7020ebe7ba2a0167df7d6bf1a"
  },
  {
    "url": "assets/js/32.82e49c0d.js",
    "revision": "d224bdd82606b3a6e7eaa4bc74940449"
  },
  {
    "url": "assets/js/33.529cf7d9.js",
    "revision": "28a3432262e706a89d2e2d3f22349211"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.2e3262cd.js",
    "revision": "5bac3ebaa657a65d9d162f6ca1d8e11c"
  },
  {
    "url": "assets/js/36.05d08f3d.js",
    "revision": "5d69e91f0e4d436d52495d39031ae561"
  },
  {
    "url": "assets/js/37.51ed2ef8.js",
    "revision": "8da780200f842c2af903250304d90c16"
  },
  {
    "url": "assets/js/38.28567f1d.js",
    "revision": "6045761a41a709e1a2f2efe3cdd83759"
  },
  {
    "url": "assets/js/39.741f029d.js",
    "revision": "57b9caf860798edb2c38ac6964f81b11"
  },
  {
    "url": "assets/js/4.59fc6872.js",
    "revision": "99f4420391c28e81f0421158f69f8cf8"
  },
  {
    "url": "assets/js/40.a06039ee.js",
    "revision": "6bee71d16592aa242ec069cda8d1f997"
  },
  {
    "url": "assets/js/41.5dfdaed6.js",
    "revision": "1a5787311dcd165d2197b05d1ae02211"
  },
  {
    "url": "assets/js/42.f6b2e14c.js",
    "revision": "8593fe7eb31b08f6bb2fd4f8f2c10d49"
  },
  {
    "url": "assets/js/43.2ca766b6.js",
    "revision": "f336e39c1ea9a449dfb09384238f3429"
  },
  {
    "url": "assets/js/44.792a05ea.js",
    "revision": "554ced0f56d36604bc2d66bd6fe4fb9d"
  },
  {
    "url": "assets/js/45.3b0deae6.js",
    "revision": "370c4a8a08503ac2fea6cd1a62c1f059"
  },
  {
    "url": "assets/js/46.d7d34f03.js",
    "revision": "7443d0c9f5accb7cb2a0103dacbd7ac7"
  },
  {
    "url": "assets/js/47.f6883d60.js",
    "revision": "d15e0d79647eefc890ddb1b717a01f36"
  },
  {
    "url": "assets/js/48.9747ce64.js",
    "revision": "a7ca31a7a447e557eeb19361fcfa3e3b"
  },
  {
    "url": "assets/js/49.b9534cfc.js",
    "revision": "ada4be4f9e121dcde85e86e5c52f841a"
  },
  {
    "url": "assets/js/5.ef1926b9.js",
    "revision": "9b080f84114dc3bc552f574a78fdc52d"
  },
  {
    "url": "assets/js/50.8bab96c6.js",
    "revision": "54448b4b0e5b9fd365f0ad7694ca6582"
  },
  {
    "url": "assets/js/51.004ce04f.js",
    "revision": "e377d3212027ad4f47beb5ed73aba69e"
  },
  {
    "url": "assets/js/52.d2f16b6a.js",
    "revision": "d014e155332befdc7fdb14e8815eba78"
  },
  {
    "url": "assets/js/53.44b15fe7.js",
    "revision": "44e17523ac486c39a4524de8586bda89"
  },
  {
    "url": "assets/js/54.4e3522c7.js",
    "revision": "e8eb8c9d142e8e91f74cd151b6c23488"
  },
  {
    "url": "assets/js/55.18ed7d80.js",
    "revision": "2a13f95ddf45433a9ee01acb1404ddad"
  },
  {
    "url": "assets/js/56.c65d8879.js",
    "revision": "b51c47bdc220dee6d9d0c71d243cd3ea"
  },
  {
    "url": "assets/js/57.112a1416.js",
    "revision": "79396b3093db7e6f792b476546c971fe"
  },
  {
    "url": "assets/js/58.f16c7192.js",
    "revision": "dfb91fa92cc8069d7b26b527860c76f0"
  },
  {
    "url": "assets/js/59.1f8b636e.js",
    "revision": "5b833f136bf66a48ce43697b2021b34c"
  },
  {
    "url": "assets/js/60.426d246c.js",
    "revision": "bf91682529464dbd2230cf6032c61dbc"
  },
  {
    "url": "assets/js/61.1cf80e8e.js",
    "revision": "991adc6df20e75fe1590691464719c41"
  },
  {
    "url": "assets/js/62.d6d136ae.js",
    "revision": "f68d7d5c9926031a187d16bdda17d723"
  },
  {
    "url": "assets/js/63.a5a98586.js",
    "revision": "1afdb54dd342feb795268f41012a4b4f"
  },
  {
    "url": "assets/js/64.d9c11311.js",
    "revision": "71723cadfa9ecada8f256f3b33e244a5"
  },
  {
    "url": "assets/js/65.ac14caaf.js",
    "revision": "5358ccf9ca443f3c39a1a5d1aa6f3ead"
  },
  {
    "url": "assets/js/66.a0e5066f.js",
    "revision": "872bf1a0b81f880022c1dc83de23891e"
  },
  {
    "url": "assets/js/67.a847601a.js",
    "revision": "a47e25939974949c6db19e39da20123a"
  },
  {
    "url": "assets/js/68.a395e9e3.js",
    "revision": "adf741065f2177ea33426e4fb7370007"
  },
  {
    "url": "assets/js/69.3d8d724e.js",
    "revision": "c00e528ee1faaee2e807a472f0ee938f"
  },
  {
    "url": "assets/js/70.2fb1db62.js",
    "revision": "f7b215c697b89867a0af6629c8c2d9e7"
  },
  {
    "url": "assets/js/71.8056347e.js",
    "revision": "6fb210dcb541e5d28518be72bc7f3c36"
  },
  {
    "url": "assets/js/72.3629bb4a.js",
    "revision": "620f4321c1f81e1c54be9eea3d886e0e"
  },
  {
    "url": "assets/js/73.8c3f59ce.js",
    "revision": "bcb04274a9fd8463048473104374360d"
  },
  {
    "url": "assets/js/74.efbfb4cf.js",
    "revision": "bc412c0e48baf6a3a4142591d38b0c13"
  },
  {
    "url": "assets/js/75.39931299.js",
    "revision": "8e3a1b1cfab247ac673387b04baade9b"
  },
  {
    "url": "assets/js/76.f93ab6d0.js",
    "revision": "46d1471df95856763dd71cc5c2a41ace"
  },
  {
    "url": "assets/js/77.80155364.js",
    "revision": "dced7392011b466b8c9c81c432f3e435"
  },
  {
    "url": "assets/js/78.0da34dfe.js",
    "revision": "d5daaf43916dd063b597c9d95e43774a"
  },
  {
    "url": "assets/js/79.c854552b.js",
    "revision": "0ac4050a15d07beb82132833239d9839"
  },
  {
    "url": "assets/js/8.1432828c.js",
    "revision": "7c313c64bcbfd5af6e24f63ea1131eaf"
  },
  {
    "url": "assets/js/80.422261b6.js",
    "revision": "e7de2ca1b0bd96884d3aa67e7da9dca7"
  },
  {
    "url": "assets/js/81.f6d9361e.js",
    "revision": "a7c6d3992f36e33357d6715ee133dd63"
  },
  {
    "url": "assets/js/82.c342b153.js",
    "revision": "c17c417da52b218461f25a80be8f2043"
  },
  {
    "url": "assets/js/83.a4bdbc61.js",
    "revision": "3df3d12dfe23a13a24864a1f17bc81fd"
  },
  {
    "url": "assets/js/84.d931bcf3.js",
    "revision": "2851df041fcdcb4719862335ae508563"
  },
  {
    "url": "assets/js/85.abcac79c.js",
    "revision": "e78caa8df247f90e8235824d6c782da9"
  },
  {
    "url": "assets/js/86.496c9162.js",
    "revision": "b270fdba70c3102d29600a0a467bbf0f"
  },
  {
    "url": "assets/js/87.4d76f29d.js",
    "revision": "ba47a79c0fbd524be5981fb1453072ae"
  },
  {
    "url": "assets/js/88.859d02b9.js",
    "revision": "70566b571bfad160ea06d5ce04908a21"
  },
  {
    "url": "assets/js/89.23a48a00.js",
    "revision": "798604d592b0ee3115971527e152f1b8"
  },
  {
    "url": "assets/js/9.28739585.js",
    "revision": "195ecf5423444ce721157af372eae52f"
  },
  {
    "url": "assets/js/90.9bb80dd6.js",
    "revision": "40fa7b02c9542a98e23557a243fc85aa"
  },
  {
    "url": "assets/js/91.34a35554.js",
    "revision": "6014f45c364cd297e1b7e1d37ff5a051"
  },
  {
    "url": "assets/js/92.8b333e92.js",
    "revision": "fd818680c2da4c830f17662415fe7683"
  },
  {
    "url": "assets/js/93.0b8725e6.js",
    "revision": "40d845d3f11af41cd948d78efbc94f2c"
  },
  {
    "url": "assets/js/94.5d69653f.js",
    "revision": "b28383bddaea3d0104e8b419aaf23e35"
  },
  {
    "url": "assets/js/95.0cdbfaa8.js",
    "revision": "0ce4405ac17f172c9a40611ebe1d15a9"
  },
  {
    "url": "assets/js/96.19554a69.js",
    "revision": "5ea98657af53ff72d0ad4a00b97e6c8f"
  },
  {
    "url": "assets/js/97.1916df46.js",
    "revision": "f5c7d7d9d6e5502e64ca736a614019b9"
  },
  {
    "url": "assets/js/98.5e43edcc.js",
    "revision": "1307a566b06d1f149b2af981a1eda588"
  },
  {
    "url": "assets/js/99.ff62f699.js",
    "revision": "486690ea9998a1f7def7e56057eb7a4a"
  },
  {
    "url": "assets/js/app.0f992ba4.js",
    "revision": "922fe0c2dc3e9e76abf83fe2067ee896"
  },
  {
    "url": "assets/js/vendors~docsearch.31b40087.js",
    "revision": "01fa9fd5944a871b5ff6158ef543b0dd"
  },
  {
    "url": "index.html",
    "revision": "8d477045064afe5dda22c9830b1a7bb0"
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

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
    "revision": "bf27bdd71461e802ecfc29feeb41d8be"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "13d91b45240ca404d6ce83cae31836bc"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "61faa6ee945d3e95bbfb1e605d04f632"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "f12080a505fac4b63048e1c952f3b275"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "c1ecb7dbd6af1bf06cdb098bd49e432a"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "ea7b138791bb322ca9edd64ed19786eb"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "32a1d0e84b741e8e9b561ce411434946"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8c1f36b87f244e5be28ceaa25bc8a4c1"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "2ff62d85eba9488b15c7dbf28568b06e"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "27b0c7db939b7522fd1ca166d1b4da0f"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "03dc79638ca43533fd55d5b750ce7f20"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "27d926097082d7b2c23217b7e8580407"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "546a9ce9932f97f4a6819bf9a822985c"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "c1502be5d182e14051137899d67a27f5"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "64238f98f513c7c2b58bc774de635926"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "c49358bdb990cfae63d6317b0f71c410"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "743946bb8986bc054f93ea51e5cf3fe1"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "da8d264046a3b66ae5c2d79ffd3fd4d9"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "0b49ee71b19c666b045e37dcb57a108a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "2f4642713f4c9c0ef127b527a2d73754"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "cfd39220eb32b0cfc974c81fb960a7b6"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "ea667a05a84cdd1bc4a0152ced94d6d7"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "df242f470345c80fc6e89fe2da93546d"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "ab7c3327554db9ed55d8c0f2afc5212a"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "ad8b8aa2c0a96aea5abe49b7d5896333"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "e76f87d6849c804054da981a2913dfe1"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "d19e57845591f2ad3c8db3c7c8d61e03"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "4c9605895182acbb869e2b197656a3bf"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "ba0f31a8ea98dc4a640a5c8e04dda561"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "317129ad6f1ae197478e67a9547de78f"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "5af790237fe5ea29bb6ec1d6ed5a0f63"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "828b23de1a0a6d38bac2377c2421238a"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "01e4a43290b68c813ab8080c8d8db23a"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "51f7f2ca50f4c40b1501b1665835f16b"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "91116c0297d66ea5e0af7d9a8d427def"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "41c056fcb41872fdfa56ee7ad08957c9"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "44f34bb1a2b5bf143d2b9697c3caeae9"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "268d1732677df3c3fdf9a1e3c0c080a8"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "ff25ca56d1d42f9374992e6ef03f4044"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "b5a20b4a3c87f5ff22366a1b1efa1aa0"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "b43df56fc6747ad6bf23c7a507702f73"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "1d612af8605f1980d16b563eb1c3a5d4"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "f873e6fbda8b2848a13ae12f56e15985"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "87ad98f4c21e2efdcc99a0e9d8e1dd4e"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "4f6d8834f9383f9356afe0c5a95daebe"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "ec644f363a7a9b92bad46af2f22d118b"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "4dfbb33d7a7c305d09a19ae7d1ec4b96"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "982ad9f29fe83db071c98e8aa31e052e"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "1178521b0f025fe048db68a6c3e1f348"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "3e9cf0e9d357938ffd2249a015cfa885"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "db28000d926723a03580bf97badd1820"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "867b67776261b1d556d3000710356e90"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "9e48589d07fd3b1b2e6dd229026378a4"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "1de033b96d47e6ff2f082ddd8ae8457f"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "208685f5188263c12c6908ee51fabf94"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "c9e1275feb0230a11f726c0f087d2d6c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8fd1793a2be08e279bb210f26d0bc18a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a4ce79c9b15794d95ffe48735236cc6a"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "8d5c0ea462ac3167cdeb793b4ac55ebe"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "15710b2754f8ef79efd05dfe44066b7f"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "6df1104e69d29eaa4b7ff49b32120e86"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "ca4955c1d6e82d6d89cd99beaa62dab5"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "44487407e51d1227a95b6f38f4a7e4d5"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "16d81c0a6bd277a4f6abb80367f0de04"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "210d07172b4e8ad1f2fdf99066234dd2"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "28ae1a31818a6ada4574f981e7be698e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "e798bbe0ac9edcb11f1b400b0d59456d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "64b3886c14c9349bc2e407d10fc539fc"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "09e6e338f6a44c1b8aa74b4c9d689033"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "9d3a85f88999a0d44a323da4888e65b9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "30849ccd1f82b9d9a00848c58093dee0"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "39ba4256a6f40a59ee06eefcd50a6fb1"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "4a349b2415fa9c783413bf252bff5831"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "128b66dedf4e379629d96e1be33800a1"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "a769e79db5ff0d000ca7f8947bf13a31"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "6c31d464c6113e14f6e910a41f1db679"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "42705f5c0033dfaca1e6ba015e8378e7"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "74bc71f967729089327a482a4ad72456"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "e1642f05bd7d0a0d4db644532591ef49"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "e1dc44348cdc17af0a4110f60f77d82b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "46373ea3143e16609beb3ab1a43a2741"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "79c258414c5bcea35a3245d82309050a"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "145c93ff148e276dd2261804d47c1556"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "3b17649d607fc8f9ca3a35617efcab26"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "3df02c107c78a8b8a3f5467a856b3eca"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "a14dc1ff6aaba9979f603a187bbab335"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "efa02d642ef47bb5c45a6b9a573a76f6"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "20241f571fada34917978907ebc4206e"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "63aaefd819f8f5cc09633420511b9f99"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "e36252c680a22c500b3cb4f121bc8638"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "67a1b41c3aa201b5312f398865acfacc"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "6f0e37e22377c037325e786e3d2385c6"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "0d0226b94db8992be0fa9a6d5b335b72"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "85a1c7efa2b025ec72c8ba2d39f35238"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "6493a002d109cc3c408a460ba9ad6122"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "27481b70be18d9c698f544739f5118c3"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "32ed4f5b27068111b3db542b40533944"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "960b4d62497106d8e99050acedea2a87"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "6ba10983e13b213221f3e39c2d4a0419"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "32175bf0f0e2865835f85330bb89f10b"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "b035ab124f29d6cfac5c8d1fedf6d82f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "93081494b2b1b73a8d38ac6f55e34b11"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f445afe12cf7b96de6789c086a0fd953"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "0e021edae4853294be28705b1d45f1ce"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "c1250b51972b00069b7f4f1d3b251ef1"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "bf40816aad49d76aa5f22d467ed5da07"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "292ac020a60e9b0607b1a03db6418892"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "235b69009b2281c3401e5bdd40341c40"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "78b30b9506d5eeb260b14f20b454d9a8"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "f4c06d1a40470e7bd8231128344c1cce"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "350cd9e7f2b99d4e3bc41ab01fb86a97"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "f73945cf07a496d68e9b520a6de3f70c"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "2c33c106112f7d314f0e107c639062ae"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "3e37502d2bc098247917777a749e65e9"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "a2ff8922ac8b32990d5c094d19f3afc6"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "1e1f04a54bf46f1b0bc32d1c1bc8dac6"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "6ba3122c2b22d4359a7b91be5b57d0e4"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4efa136088c448413c2b7e6aa35dcb07"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "94a98d2b89daafc0dbac362ab7a0463d"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "a376de2654b5048bcbd11a11407531a4"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "d922aa971c11aeff15dbde6903e5d1f6"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "d328624227136f1942f134279712d8e5"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "16a048e560213a5c328c036374ebb81e"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "493e93f1fe72aaa83713f7bc72db60f1"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "892280d5abe273b0050c8345d37188d3"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "693bc4472480641daca5fd04e8540c42"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "65873ba38a85a9be70db63ce3a35ecd2"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "566804f0874d4c098680cb7aa0399b4b"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "83212abf2096afaa29a061d9c84185b7"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "a3f6fa35aec358d35f2c1a4c5df421ac"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "379efb6168cf9ec7fc369f545001be73"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "376345353422a60d2d6cd79cf582a122"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "5d2736831f3c21b8860d329bbd2fcb6d"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "c3c0b225b27677457ffc2ff47f0f4e4e"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "d2051b83d0b114c6dec50a5dd1570dd6"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "82ecc60aa1ecaa3298a9007c272af4af"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "08a1f146cd5904ca927463ae0ec39e74"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "bc4c581eae715c167427d9ebc314fbb8"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "22b58da6e8973e63d21ddc882ec812f1"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "ba7eab0905dea714b9623c35257e72e1"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "a465d447c645eadf3a68291fb467361d"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c953b5cb02dc6bbd6c4821e0220624f8"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "2ef5134d539f69179f99816595bc86fe"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "163accba7c8c1d8e73823b46e5a59f5f"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "96c76931c3566282fea1f7401e0e517c"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "22d11a7c45d6f9bebcf99f3c390d07ae"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "b2ff91086677efcc4fec40d2d71c77b2"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "e985e937304f23dffba36d0cc6bf126e"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "3494e3666cbff4f6354e3cdd566ecf69"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "ee202ebd037593d4f2abada95d40b4b7"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "7d1b07f01187888ade02ab737fa307a5"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "821c5a4267e90ffaf21f055638470062"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "bd06dc0f95aae1f2b5393529f718b10f"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "04f07957c7b3cc02457b8aef612e9281"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "1c00e8f8aff229fd7399193bcc152a2b"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "27cee064d68bc5f3b8b90e4285900b57"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "42ec120955a6ddff20ebc1240349d271"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "910f0a138de08d23f3cd50b30e01755c"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "464a5e465a240d35fae8e72a1ae5db20"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "14e5210af26372f303f6c35fc6f3f761"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "bcb5d4d558e6bd05aa44892606fa29f3"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "b983b0d7ef5058d34d0a7de2e5b318a0"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "2fd8da703c6fa4da54a473be94f437de"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "1a571c9d8192c4e95755426d208b262f"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "b37a00c0dc6fda1c0b9ab6e0849e76e0"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "f40d80a6f8b051b18e8c82be5e5a0f0c"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "7fabfe5d2fc065937ce55f341527f9f2"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "baf4672e297cc9cd9bbc3dbcd3925a3d"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "2e913c6fe29e9c98efb673cf771d3557"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "246d304d76a4d902d67558816d4742f8"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "7a8ad329217df3eed9a6bd2a08f934a4"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "d343bc72f64b1d962a5a8090ac712146"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "e14b0aef88a1dc1f5eb3288b173df6bc"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "a2e83d8b69f94f9565d902147c2dac4e"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "a4192e041eb503c8c9a08028df4547ce"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "6b2e8ab2f98535ef579b556bd04d3a59"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "b50d767a76ec9c511d5676b8a43cc0ef"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "dc826afb54a786aa0a22182055d4bf83"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "7f2d12200934511781173d7f5c77f4dc"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "7c9b40cbd0c25064f84b78e5db0321a8"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "c90e23f21d84507a7f627939780c9d3a"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "b14fdcf46b4464aec95176aa2a781913"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "ea1159df1467a480cc949bca5455e1a4"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "90d0a5264f085332d43a502af6f07b11"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "3d4bdcbbd4d42e30ef1745065a51a72d"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "cbe393a083cf862abf96c82d802b4e1b"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "402d075cfb6e15c9c3fa375eb61d924f"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "e9aaef2581ec136ae8658c3a92203c2e"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "2377064f4080daff23db856c147f15fb"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "a44b63b2bc7e03a13cfe37be463050ff"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "317f6607aece0a1edc93c7c3ee0c2a73"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "140abc7d2d6983844a0cf1ecdac7562d"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "b2cf509383ba0c1b7d19da38b596dc1b"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "a476a0cba53179f5b219756cf5c0aec5"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "1a6d9a2d6f3c5c1887f7157c6c28f12b"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "8fadb9ba6f37523f3db76e05e9898550"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "463479a088da465a944ad36ba34f4b58"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "ca091635a4c6cb9502fd7f73c355b0be"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "89bbe88e65e736c5700b9fcb02f965d9"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "3e86ed5b902575c19de2d548adc23d79"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "1877e4ec817dbb0b626f1d6eec99cee0"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "1c08c990505dca00fceb2856cf56c72d"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "87ec40ef51f0b078e2577efb37d3031e"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "ea611f20a0229546179d1545eefd6c0e"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "df1b897aeefd29cb2c2e5c2b7ed69fee"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "384783850279ba3966e5094b1409ff5a"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "9d58e418197da162e6e014244ae71e8c"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "4e469e5738d5e9cf046dd4ddc93a7d65"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "af7850302db9ffbe0bd88e5415813a29"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "aa1e0a3b550047cdf043fb9aadc6e588"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "ad39730a7f1770904f68b2c58b683a5b"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "2ce1eaf596fe60abfd989a2fa43606a3"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "fe79a8398d6de9c5da7bfcae89f02043"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "75560963e19622192806c750e0a904e5"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "e7640961d5991a7c1f52d668c06ee240"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "1810a19da823e6b7dc26b9b59b7f98b7"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "e9574d6e6bd4347009d44ef6390015f5"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "172b716a1137b29c21b83dc3655890f8"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "26619b262dbca40f281799543c0766c8"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "6242fe7afde3c57eaba5d307b7498001"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "7d60434c4f112901d8cefc16227ecfde"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "c48168cfdd595a76db93b647c872b557"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "c11ea747deae27209f7ff055cc9d9dd0"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "b4d5e9f54c97f14a559cbc77b36b0936"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "e33f5970e758e184b9475af38a137312"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "196a5eb4f8d29aced4dd8b5e71cfb2e5"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "6aa2bd844b18720c35c315c001eea5c7"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "05bc1fc2ebaa29544486e75dee4a04d9"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "656b4a5ffca4c41108d1901aa8e0be52"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "c48350cb8fb290a4d7fc2ee94b1f0ea1"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "897dce6b9f5d1011a340c9d76e1bde1f"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "6f11e877b63d1de3e1b22a4a6ac5d058"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "78652483fa0ab8f3b688cdd57445b5dc"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "b69352c572c27e5ded01159852c1cfdb"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "e226afb756fbe5ff3c0654726eaba66b"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "91978a28a7c2a9171a7dff0dc30aac10"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "fae62578d5a247da6c20602448767400"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "b67a3e773eb2f875e4ca25e33cf016a9"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "c38bca7a772806c06e7f522749fb7ac6"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8bfc2c78f0031ec1b817cab0bdb64f00"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "022964ae8def9eec1eac85c310256462"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "f6266c6948ea9a00a9293a5103a28231"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "a17aa37e01f85944519621d4b3f4b77d"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "78f4a4b464bd1048bf7884d0669fe28f"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "2273d32981c39fc64a286de65571b11e"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "c74436b80da9d194368bec213075f44d"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "ad12a4b3d414296c9f5c00c0ea80e820"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "c1a2694c00d1e0616ec977293ec8ad7c"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "d59e82c132beea0ca3e695fa769eb286"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "aee86edb8e1562d8765c153d32bb0110"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "c91d6bf105e39ac4a3341f2234013ca3"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "977a85c4f4afb315c9533562b318e3e9"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "84c0b07f06ed9036dcaee9022008db65"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "e2c01996c55ddb06d58f3246a101c262"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "4c45f101f93bc1a493187144906096f9"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "5a2f5d19ece489c46c30aee4e18e25af"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "28eaa1e4e7975b2b979015f11dcfb3e7"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "1a30c7e5f6949e55e3b8b801fd1f7790"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "c7f35ec2a542268fcee039cbaeb4da0a"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "4e6857d7b872a7cfd3d9456a06d6cf3d"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "65141f2ce8225f40b84ec24a734adcfd"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "5aac3946a1d2022802159f7c0b67dfb3"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "fc6058ad7e779b3a312540b9693a6fab"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "7ec17e84a22fe64c91b7237398008ff0"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "4a619acd40bbb6d60450f3ed9f4dd8b3"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "8e31906c9b65263fde9f7762b60a9843"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "d26dea4258ccee2f97e51b684feb395b"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "1947ded7e24a1dad4e97d74ce6458c10"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "5f9499f726d5fb520228773821e6aa9a"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "9266dcf43118f9e82777c2efc2cd2a71"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "a18e3f5a9b759d751c2c6ffd4ed9121d"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "ae631c70f34f9953533ad64d01a23cd0"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "cf7bd7fc3df8aea12ec4e21fac966e31"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "7c494ff77fb94f31284b350c73559000"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "a93279c2c249f1026c99a9e40743136c"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "002db22612f32cc268ecc75553beecd8"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "61c2256e95553582e77c30e8b7eb7750"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "ea3a0aa0639f853527f333968e4e3bd5"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "f0933a12f44207465dd22a39dd907ca0"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "58177f2d41d55b64eb8318dd9d470528"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "e03c84d208c67d2373d0e19a685676c4"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "02038729b4bdf91e1bd08b3da278f999"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "0a74ed65546d4b77ac8984447a626c93"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "30af9d992bdba6bc45ffac2eef179d41"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "ddd259e1944e9629eb1e6931845b8399"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "af2372927f84b35e3a8841b438c47f3e"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "e955440ae777adbbcedd026e6e451717"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "7af90a2ee88b41c45ad84c0caf2127b5"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "85f64f84751422c3b783398c4a76917c"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0b3d9e511812457672d0017d550e4706"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "ddb21e30c25df6a76f843ec92944ce75"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "872e86c3f317c7ccc1ab2e06835142f6"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "2d644b373462f4bd2bef267105a7b299"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "9cce72f19cc7edbd3475c6392f653a43"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "a7f8504421beb3388d9d07e79a1fae86"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "4c1a391d823db3428b8a4775da2affcb"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "25f0fb24e63036f01701d3a1b87dd3d3"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "4c252475f769c2f9a8aa146b4fd28d76"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "fea56b3174f2b0d63d55fb762cd45a51"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "edca6d771da06b9835ad9b251fff3f48"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "4ccda9cab2ae3d9c89e4e90f330d2047"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "56077a5512b92bbeb84a6cd86adca048"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "e13248467639206f80933a082f8fde81"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "3a6526d46759d7b9d7d20826b2dec8cb"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "49ba3630cb7e5f0bca5a63c136b5b08a"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "e3ab4b8e3065ebe42d351b0ed716a756"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "5167f95fa7b28023d91a86634e4101d8"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "fdf6bd019b219a1f8afef9f04a7be6ee"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "d262072200a2cc813c36ae7439d18f60"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "c5d92cb6019641bc7e1c4687edbe74c2"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "c336e7dd06fdd3dc908171fdbfca8b63"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "1f11935402eaadf01ee2fe388145e465"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "d5b1c210f148352e0596777ccd308f41"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "af743322cfc5261016b0c99c43b962e2"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "e84684c52e16f7ef97c1194628d62c8d"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "4a58e632582ed430e6f149f76102dc99"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "91226d9a5da4d40b1db71c04c393bc08"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "4d0a2cd7fa87a0d88be0447d496a25f1"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "51816cceaad69114d1c2ef8ea1416282"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "9ed7be2c40891a69f757522e7b8ac39e"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "39c92009b2e5e23c7df5ee9517ecb1c7"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "22e13b7f903ada5168d203d9d67dd9ab"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "ad097b35b25b7fc06dec0f8415e6c62b"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "59ecb29891f73a18f357f92c5e2702ae"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "d27e2f8833b38cd33c869e3c0a1f4340"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "4dbaa8f547f6646ca534655eda6eef9f"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "7739f66d11015d3572654cd196403367"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "669f0e679970411eaaedd92b0ee6c6fb"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "54a6893f618a15e6e5567d60d9912831"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "350ee333aa27922cff96d655358d6f2b"
  },
  {
    "url": "404.html",
    "revision": "83797a95ee8f9c84698f07f9d64ceaf1"
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
    "url": "assets/js/100.2a065a32.js",
    "revision": "1b6e4811c3ad2826964a8507977fe7b3"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
  },
  {
    "url": "assets/js/102.4b25a071.js",
    "revision": "93b8b366a73ddb35288cdea9dbe456e0"
  },
  {
    "url": "assets/js/103.7d749b9e.js",
    "revision": "b88ce408e6d4d701878cffabffbce678"
  },
  {
    "url": "assets/js/104.02079c2e.js",
    "revision": "4646eff9b742f24356a1b59bb0c1377e"
  },
  {
    "url": "assets/js/105.b0197c01.js",
    "revision": "33eb9187e2d0762a0453121133b091fe"
  },
  {
    "url": "assets/js/106.db28e7b1.js",
    "revision": "dc802c230bb58ad1340a37adc68b22f1"
  },
  {
    "url": "assets/js/107.ee8630dc.js",
    "revision": "aa28805fd75ef67cf9015d659be98c27"
  },
  {
    "url": "assets/js/108.d89ee50f.js",
    "revision": "5e60318094cbde0679609396474931d0"
  },
  {
    "url": "assets/js/109.a86ec105.js",
    "revision": "1cfb055d4009d0c93c0763f8258d7c6a"
  },
  {
    "url": "assets/js/11.defd2531.js",
    "revision": "e1f90184757c0f8486a42ec2f31cd1ef"
  },
  {
    "url": "assets/js/110.022deffe.js",
    "revision": "efdb4c079364f30b41be1ffd39303aa9"
  },
  {
    "url": "assets/js/111.754a2cd9.js",
    "revision": "434e2180cb02024048385763e301459d"
  },
  {
    "url": "assets/js/112.7206e7ae.js",
    "revision": "b441fdd1e75f906d22460cb3e492622e"
  },
  {
    "url": "assets/js/113.f9961dab.js",
    "revision": "04c5e8dd1ce800109ad0e3b6d4349345"
  },
  {
    "url": "assets/js/114.b635a4f9.js",
    "revision": "6fd6f04a391ef1213fd1eb8fc26b947c"
  },
  {
    "url": "assets/js/115.ace92a31.js",
    "revision": "5339db492c64ee88c96eefb0593d011a"
  },
  {
    "url": "assets/js/116.ec5e70f2.js",
    "revision": "a6713637db22ad06c06be7a85d665f5b"
  },
  {
    "url": "assets/js/117.c2d7ce24.js",
    "revision": "39ea6741bddc7dd626884ef0b5dbfb13"
  },
  {
    "url": "assets/js/118.11e889cb.js",
    "revision": "57dd8da05974223d6d52560f02b04668"
  },
  {
    "url": "assets/js/119.0d073662.js",
    "revision": "1a5c70bb9e0177e3a3a30c02bd749ba2"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.7dd18ad6.js",
    "revision": "8675e524104bc3e7e5ef83c04e007ec1"
  },
  {
    "url": "assets/js/121.8ac26daa.js",
    "revision": "2b4614fcf81292545db4c8c8a948fe98"
  },
  {
    "url": "assets/js/122.81ed40d4.js",
    "revision": "c8076ffd3367b1d9802e94b7ea531f45"
  },
  {
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.13b28ddb.js",
    "revision": "34884cfa201f4d92be4a87bd018dc66b"
  },
  {
    "url": "assets/js/125.5fb1d62a.js",
    "revision": "d7620be8fe1285396f4536c139653fcf"
  },
  {
    "url": "assets/js/126.589928d8.js",
    "revision": "952ea85d7c876ff1cb3c8f89d33350a8"
  },
  {
    "url": "assets/js/127.f9f1a195.js",
    "revision": "8739037f1ed07f0b1aff9b239d34b5e1"
  },
  {
    "url": "assets/js/128.a0d30036.js",
    "revision": "636648639491cfe32633b47cebeb2063"
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
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
  },
  {
    "url": "assets/js/131.5e887ebc.js",
    "revision": "cf840c0a7accac559768662ff92011e4"
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
    "url": "assets/js/134.e5160d2a.js",
    "revision": "93dd572f9a78332cba7ca7df1f4597db"
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
    "url": "assets/js/137.461abf78.js",
    "revision": "6c48cac07d5e46ff42924ec5aad06fb0"
  },
  {
    "url": "assets/js/138.1215bc1a.js",
    "revision": "3acb49fd3ada4bfa889b83d9d4c799b4"
  },
  {
    "url": "assets/js/139.d9063e1d.js",
    "revision": "169c869eda320086d270bc4f2c14df59"
  },
  {
    "url": "assets/js/14.8c161f1f.js",
    "revision": "5f202c7d732c18a5a87f2fbeefdc36dd"
  },
  {
    "url": "assets/js/140.81b74f94.js",
    "revision": "b858278766e93e2e9d1d9de324841377"
  },
  {
    "url": "assets/js/141.5ce799ba.js",
    "revision": "3a0da07594ebee763f90d840a6f968bc"
  },
  {
    "url": "assets/js/142.f885dd0f.js",
    "revision": "0701b585feda727760f88ad11a97642b"
  },
  {
    "url": "assets/js/143.73a59bf7.js",
    "revision": "ce9b211429dcaa99bb95f3d50d705ed5"
  },
  {
    "url": "assets/js/144.b1d46a34.js",
    "revision": "955a378b09abfffa2e00a90c63ccf176"
  },
  {
    "url": "assets/js/145.07fa4a11.js",
    "revision": "531b9aa5dee107b8d41805d4c2506729"
  },
  {
    "url": "assets/js/146.1b0e0d4a.js",
    "revision": "474e7644aac4af9145df9fcaadf12fa3"
  },
  {
    "url": "assets/js/147.256578bf.js",
    "revision": "5e4ad6960712d36cac2ae3714873fe9a"
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
    "url": "assets/js/150.e1538371.js",
    "revision": "ce37a1ed84b8d5cc2579b4c98f42de0f"
  },
  {
    "url": "assets/js/151.6b40abe9.js",
    "revision": "27728b318f48f2e578880865345a2764"
  },
  {
    "url": "assets/js/152.0562421e.js",
    "revision": "7f9184b107c8db1c3a10307a63d2f775"
  },
  {
    "url": "assets/js/153.7868c2b1.js",
    "revision": "aefe44b88440025c275f5d704621284c"
  },
  {
    "url": "assets/js/154.5e2b3e71.js",
    "revision": "95f82a99e568207083ef42a1749e29fc"
  },
  {
    "url": "assets/js/155.6309f2d2.js",
    "revision": "02353148972ffdc8cff4d96562bad5e4"
  },
  {
    "url": "assets/js/156.0866a124.js",
    "revision": "094c6cd6eebcf852de0d42b93cc230cf"
  },
  {
    "url": "assets/js/157.aa69cb10.js",
    "revision": "01a96c0300f74b48b5453da92e2eeaef"
  },
  {
    "url": "assets/js/158.9a2eb8ec.js",
    "revision": "2f4c8d178c5115beabefbd1f1fe8bcc2"
  },
  {
    "url": "assets/js/159.6a568888.js",
    "revision": "7ef6c969df22d627ca7800b186877f5b"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.c3dd0862.js",
    "revision": "4a028e9f5db384b3c71b10af786b9039"
  },
  {
    "url": "assets/js/161.7467f7f3.js",
    "revision": "3c52594d6453071d24f1bc677fd6e296"
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
    "url": "assets/js/164.a5bcf745.js",
    "revision": "065ff9c374a18a2f846697a0c56eec83"
  },
  {
    "url": "assets/js/165.80fe025b.js",
    "revision": "ebf056adbf2fc93091a701f10f378874"
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
    "url": "assets/js/169.37beff22.js",
    "revision": "80b5276b7c447cc9474e048e550b2bfa"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.d508c3ac.js",
    "revision": "3cb34fd99c34f963ba5aae9978c5ac4c"
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
    "url": "assets/js/173.4227ec6d.js",
    "revision": "7487f2066c9c633ea710592e7e89499a"
  },
  {
    "url": "assets/js/174.728dfad8.js",
    "revision": "00cd8020016f0cc884b3bc242d601403"
  },
  {
    "url": "assets/js/175.a049439e.js",
    "revision": "e9889ae72871b050b5d383b6b77cc85d"
  },
  {
    "url": "assets/js/176.dcaa5cc1.js",
    "revision": "6d10257bff2e72fd9d4be4afbeb791a2"
  },
  {
    "url": "assets/js/177.6b1dffe7.js",
    "revision": "d3c5867d8b821a77c76e6b0a63044f74"
  },
  {
    "url": "assets/js/178.11ad38bf.js",
    "revision": "69fbadd72eb916c6e1d818172f5ba1b1"
  },
  {
    "url": "assets/js/179.e8648438.js",
    "revision": "46a0c5a65124a0a8da29b271e3046fc5"
  },
  {
    "url": "assets/js/18.a1ffb1bf.js",
    "revision": "0aa7ce875ab020e5ae2ef2681efd580a"
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
    "url": "assets/js/182.cbae6dd5.js",
    "revision": "8c006f87f438bb309dea8f9672916305"
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
    "url": "assets/js/185.22f6446f.js",
    "revision": "f8ae610584909878280e5969ee903137"
  },
  {
    "url": "assets/js/186.0a59efb7.js",
    "revision": "21e3166afd87f338a1d3b1ef17883bc5"
  },
  {
    "url": "assets/js/187.4d3d7021.js",
    "revision": "a566102ca2a25aaf9fc0e074103012be"
  },
  {
    "url": "assets/js/188.4376a892.js",
    "revision": "c35bf3dbdce546b6279d2b7dbc25d9de"
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
    "url": "assets/js/190.640683b0.js",
    "revision": "1da7cd3bd5e3e05d94325d45f19b7564"
  },
  {
    "url": "assets/js/191.d5b72feb.js",
    "revision": "1ec34cecb26aeff2a55924bd115cf8f5"
  },
  {
    "url": "assets/js/192.e6d4e2d8.js",
    "revision": "a049bf4961ad0acfc71c0444f4d88fb4"
  },
  {
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.81c39ddb.js",
    "revision": "31c002d5e463d349d8e2c70a823b90f2"
  },
  {
    "url": "assets/js/195.bd06880d.js",
    "revision": "85938193aa4516e3e77ffb500c2e3fce"
  },
  {
    "url": "assets/js/196.a5f84907.js",
    "revision": "283bf122c08b1ba946b5e629ebc978c6"
  },
  {
    "url": "assets/js/197.bed5f73e.js",
    "revision": "b9c42bb511943489b46a650b0e06f554"
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
    "url": "assets/js/200.a05d7fb0.js",
    "revision": "89975121d41c1c4ef0159db9ce5ace89"
  },
  {
    "url": "assets/js/201.a0dbe0fb.js",
    "revision": "d1ff6f9875a806944c32a02e1ddcf355"
  },
  {
    "url": "assets/js/202.e16471fd.js",
    "revision": "7bc3ca0e201682d7912dfdad2e3d38cd"
  },
  {
    "url": "assets/js/203.f6cde389.js",
    "revision": "1ce32228c238ca920b96be388117b3be"
  },
  {
    "url": "assets/js/204.c231e73e.js",
    "revision": "b4385fa875e182dd8b52864c2061cb86"
  },
  {
    "url": "assets/js/205.724444d9.js",
    "revision": "13894dd937dd9af190763b0057d9e3fc"
  },
  {
    "url": "assets/js/206.328819b1.js",
    "revision": "9cab5095c31095584c76ee870726796c"
  },
  {
    "url": "assets/js/207.8ca3c140.js",
    "revision": "a79b8ded25ed7e39ed25032cd603ba61"
  },
  {
    "url": "assets/js/208.5ec1d710.js",
    "revision": "15fd9031df70937ecc63ff7629d7324b"
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
    "url": "assets/js/213.bdb9e73c.js",
    "revision": "7cfab1bc8137c04de243b84540d9e1d8"
  },
  {
    "url": "assets/js/214.8fcd17f2.js",
    "revision": "681530daa0d7be2dc01c6d3ee3016faf"
  },
  {
    "url": "assets/js/215.d810dcf1.js",
    "revision": "c91e8b3b6a4ef7700a25feee817b64bc"
  },
  {
    "url": "assets/js/216.574261c2.js",
    "revision": "4e6192a2ccedc3be08abefd50782e7da"
  },
  {
    "url": "assets/js/217.32df6f28.js",
    "revision": "ab9eb4bb0a3f2435203c456789e9de90"
  },
  {
    "url": "assets/js/218.735dc6fd.js",
    "revision": "23ad4347539fc96e7bec62ba05c02691"
  },
  {
    "url": "assets/js/219.2c5aa42c.js",
    "revision": "f1169f6cd6534dab61d05b304b60acae"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.9abec3c1.js",
    "revision": "152b69a121bfd0b0f6d03e6383512f36"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.811a0022.js",
    "revision": "619570da2a4aae21ef1b91d4bd8deed3"
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
    "url": "assets/js/225.ced8da37.js",
    "revision": "edc108144ad928dc77a0dbfeae1f9b02"
  },
  {
    "url": "assets/js/226.2dca5ed6.js",
    "revision": "54bd24dc69086fb0d07a8f79c6c16c62"
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
    "url": "assets/js/233.2b0f603a.js",
    "revision": "0605ed920c7424d8747a556426b6bd62"
  },
  {
    "url": "assets/js/234.743fe962.js",
    "revision": "2f20aa02af59d398d54143c9e3a52a54"
  },
  {
    "url": "assets/js/235.f69273ac.js",
    "revision": "3d2a79a599d4647c7c3863f47d0ca3f0"
  },
  {
    "url": "assets/js/236.bd165f92.js",
    "revision": "7f17b7fd77c6cae6f422dca395e26756"
  },
  {
    "url": "assets/js/237.fadac5e1.js",
    "revision": "54fae50476ce3d1039a74f68ea437450"
  },
  {
    "url": "assets/js/238.a39f992e.js",
    "revision": "6f50e2d5c6fca85422da33274e3a9773"
  },
  {
    "url": "assets/js/239.67d6eeaf.js",
    "revision": "34ad4bce7655e650af8b9998c2e5fe15"
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
    "url": "assets/js/243.cf953b9e.js",
    "revision": "69d4898820b093ec4123e58c8949acda"
  },
  {
    "url": "assets/js/244.421e2da4.js",
    "revision": "8b38269665a051b9d6ec5752e3f3e7a1"
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
    "url": "assets/js/247.c85821e1.js",
    "revision": "7842cd2c2c8269b4e30b82b56579012d"
  },
  {
    "url": "assets/js/248.2c719838.js",
    "revision": "14378e1c8e39b00a87d8abe156250c4f"
  },
  {
    "url": "assets/js/249.43228c49.js",
    "revision": "2410ce6b04d30f1bb5ef24c99489c090"
  },
  {
    "url": "assets/js/25.d7d76e30.js",
    "revision": "b7ca5469f74a433a46d983bbbae72bb5"
  },
  {
    "url": "assets/js/250.e76e7f80.js",
    "revision": "2462f50161651b75fd1f6bedddf520b7"
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
    "url": "assets/js/254.c426d3d3.js",
    "revision": "852265b1ddee99329654cede6f51d6a8"
  },
  {
    "url": "assets/js/255.1c48f36d.js",
    "revision": "95662747cb0dcb68083712b9c181885b"
  },
  {
    "url": "assets/js/256.8ae52ec1.js",
    "revision": "8452188dbfc69fc0b3f3b67b0bf7f458"
  },
  {
    "url": "assets/js/257.c338bd75.js",
    "revision": "11cd17fb418ddd8827eef8ff84c15904"
  },
  {
    "url": "assets/js/258.4c4c2116.js",
    "revision": "e7b06ff75519640fef463c4fb77f0a90"
  },
  {
    "url": "assets/js/259.6c75f750.js",
    "revision": "8dd2e604bf7020062993ffad09107d5a"
  },
  {
    "url": "assets/js/26.4bef914a.js",
    "revision": "4ce8cbe0d74c3a704ff2ff99c68c41bf"
  },
  {
    "url": "assets/js/260.479eb3d4.js",
    "revision": "1c098013404b96dfbc74ed776cde280c"
  },
  {
    "url": "assets/js/261.700a7d37.js",
    "revision": "ef6531ee59f9d173fd07cb5660ec1f76"
  },
  {
    "url": "assets/js/262.bf927f20.js",
    "revision": "fc5d2ed6ce2e8f4d9cfa634f414dda0c"
  },
  {
    "url": "assets/js/263.29e8940f.js",
    "revision": "87cd14bf03914a21e63d6c4327ae15cd"
  },
  {
    "url": "assets/js/264.04379cb6.js",
    "revision": "d441b9fda3570b4075c49639ee000fa5"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.0dfebe55.js",
    "revision": "329354f03938e2a0aed659bd91131901"
  },
  {
    "url": "assets/js/267.e7dd34ac.js",
    "revision": "3fb646ab491763bad53b733526fb9b54"
  },
  {
    "url": "assets/js/268.75c93b25.js",
    "revision": "5c90b619303a20a1118d55ed4210309e"
  },
  {
    "url": "assets/js/269.e0a36a95.js",
    "revision": "a448cf69a7aea70b7e146e942c6ba9d9"
  },
  {
    "url": "assets/js/27.b11ead76.js",
    "revision": "cad92440ec564e8ebb19d6b23bbad8c9"
  },
  {
    "url": "assets/js/270.af9550e1.js",
    "revision": "192f1abddcdc1040fff831538f9bfe33"
  },
  {
    "url": "assets/js/271.6e3aa9b1.js",
    "revision": "ad0a3caf5c04c5e63a8d6a06b64b3a8d"
  },
  {
    "url": "assets/js/272.26616036.js",
    "revision": "25c85f5dc888d9f184a6d6d032a3a3f7"
  },
  {
    "url": "assets/js/273.54bb77ff.js",
    "revision": "f720c8bbeeaddfeae75350ce902e3348"
  },
  {
    "url": "assets/js/274.f83a7a29.js",
    "revision": "a9a0a6a575bf3530aed140232e8da5eb"
  },
  {
    "url": "assets/js/275.e028f251.js",
    "revision": "956c932fa5357c16b25fd3a1db62408b"
  },
  {
    "url": "assets/js/276.07c780d0.js",
    "revision": "76f04386ed8774a21510dbcd86841476"
  },
  {
    "url": "assets/js/277.33cdbc3e.js",
    "revision": "8c2361639092388ed49096945a924418"
  },
  {
    "url": "assets/js/278.f42d771a.js",
    "revision": "661c28905df9f6e2c036eda3c2e13a5a"
  },
  {
    "url": "assets/js/279.f6c3e46b.js",
    "revision": "975f986c491d66c367546b3d4b3827b1"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.13a1a431.js",
    "revision": "2f5cdc9ca5266d19f11fecdc3ad1a3b7"
  },
  {
    "url": "assets/js/281.cb3383e8.js",
    "revision": "5d885c8a84485c752d696ab4793d82be"
  },
  {
    "url": "assets/js/282.87b86e8a.js",
    "revision": "d10f2e88bf13b752f8380725ba498257"
  },
  {
    "url": "assets/js/283.22e6d0df.js",
    "revision": "088781619f867d271aef72cb4092d5bc"
  },
  {
    "url": "assets/js/284.79291a32.js",
    "revision": "abe6d931d4d42e4fc6d66f7757b66402"
  },
  {
    "url": "assets/js/285.54a14726.js",
    "revision": "1726cdebb186a0cb409ea36413a1a15b"
  },
  {
    "url": "assets/js/286.ebfb5f8b.js",
    "revision": "a415dcc48b51cdf644c6fd085eb85013"
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
    "url": "assets/js/289.6090c531.js",
    "revision": "c6456a04842dff7dbd15b3eb803cf3c3"
  },
  {
    "url": "assets/js/29.786e850a.js",
    "revision": "e4a05eab3a08dbe4e84fc89587145c4c"
  },
  {
    "url": "assets/js/290.44dcab04.js",
    "revision": "abc11d063ae708c9ac0f95381ff36ace"
  },
  {
    "url": "assets/js/291.e5ad4f79.js",
    "revision": "88766146bf99941712d9b68cdcfd09c2"
  },
  {
    "url": "assets/js/292.9480fee2.js",
    "revision": "a5be7619734aed6169e3c36fa6e99f1e"
  },
  {
    "url": "assets/js/293.c1bf85a5.js",
    "revision": "bf950f2d3ca0fe0b41bd6e88c122dee3"
  },
  {
    "url": "assets/js/294.5752a9bb.js",
    "revision": "0eabcaecdd930bfd73996d9cbb1e38b2"
  },
  {
    "url": "assets/js/295.719ea88f.js",
    "revision": "da5254c7c67faea861fa945f4c97a42b"
  },
  {
    "url": "assets/js/296.67b685bb.js",
    "revision": "26a8f0bc0955471b01bf048bce86c72a"
  },
  {
    "url": "assets/js/297.5717a3fb.js",
    "revision": "8d1934f78cd1cca4ed0efb75ab6040cb"
  },
  {
    "url": "assets/js/298.231daa12.js",
    "revision": "0e0dda6cd523f5800defb9ae2e755018"
  },
  {
    "url": "assets/js/299.c60c6e40.js",
    "revision": "d430fd8e7d2c95daf5cd8c8ca164af1f"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.dbd09be1.js",
    "revision": "6ed6e972713ff96fd717256abf923d5b"
  },
  {
    "url": "assets/js/300.892dfa9b.js",
    "revision": "a5436c118ec4eb547185b0e37981cdaa"
  },
  {
    "url": "assets/js/301.0e11bc77.js",
    "revision": "5401cf8257dcc4a14a36984d1b0e8ba9"
  },
  {
    "url": "assets/js/302.eb6206f6.js",
    "revision": "37d4fbdcbcd1544d60f21a8c37cc8b93"
  },
  {
    "url": "assets/js/303.6b7f1f5f.js",
    "revision": "93fafd4275a7575662882b2ae5ddaddd"
  },
  {
    "url": "assets/js/304.a8a2ffb7.js",
    "revision": "6cf0c9d3fb44d45de34c90aa0e81ce50"
  },
  {
    "url": "assets/js/305.6ac1fb97.js",
    "revision": "ee2adaaa2f7183a7ac7f604058e7a681"
  },
  {
    "url": "assets/js/306.89ce57ca.js",
    "revision": "a5e62c8b73247dd40058ac14b94d2c79"
  },
  {
    "url": "assets/js/307.fc093614.js",
    "revision": "e5da6c9a7f49bd0afb217715c3f4f237"
  },
  {
    "url": "assets/js/308.08595318.js",
    "revision": "7b9c378054ba81913fd1de66049a5757"
  },
  {
    "url": "assets/js/309.0f95e2e1.js",
    "revision": "ea69a379c2734c6a5571fabc38b84b47"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.7cd287d8.js",
    "revision": "5d3ee3dd68193b6c4b3e0cc273d8aa9c"
  },
  {
    "url": "assets/js/311.fe828c63.js",
    "revision": "b79c0bb03e814ce115c54de287639b5d"
  },
  {
    "url": "assets/js/312.3e5e8c07.js",
    "revision": "b3bb60623c422a7c227f9ffde1930f92"
  },
  {
    "url": "assets/js/313.2702785f.js",
    "revision": "802aa8ba6829c9639bc06a9474244c04"
  },
  {
    "url": "assets/js/314.3570dac5.js",
    "revision": "9c0c46b524b25546679b014af57b6cdc"
  },
  {
    "url": "assets/js/315.f3e4f17a.js",
    "revision": "cf412d17e9bacd63cb980993deedc622"
  },
  {
    "url": "assets/js/316.38551491.js",
    "revision": "ac02f84ec45f60d0e55e1a38db56f367"
  },
  {
    "url": "assets/js/317.60c745f8.js",
    "revision": "27793321efb0b0b3a615de30df5468d2"
  },
  {
    "url": "assets/js/318.ab06aefa.js",
    "revision": "d9f6f5a9ab3937159cbb95ae90ac24b9"
  },
  {
    "url": "assets/js/319.d42e7720.js",
    "revision": "752567d1237fbdaffb12721e0343a0a4"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.beca9566.js",
    "revision": "8416226871ba0078ff1de7ff18f9667e"
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
    "url": "assets/js/323.eb47bc63.js",
    "revision": "abf262798275457ef7d603fb88976ed0"
  },
  {
    "url": "assets/js/324.ddf71906.js",
    "revision": "a1c3372a9ba528b1a418c02ccd89ac56"
  },
  {
    "url": "assets/js/325.43dc7651.js",
    "revision": "416859dbaa6a17343b9d2c26f3647670"
  },
  {
    "url": "assets/js/326.8d9198da.js",
    "revision": "7bdbea8a28b65c0fe88b9401b1f63bf8"
  },
  {
    "url": "assets/js/327.b30070f3.js",
    "revision": "bd1090ece2abd6a1aaa3592501c463ed"
  },
  {
    "url": "assets/js/328.d7dfc16a.js",
    "revision": "c625f36c7617e91f524746ea68f6003a"
  },
  {
    "url": "assets/js/329.0b0d2e61.js",
    "revision": "02403399ce862c9fb6c6686c1e94d60e"
  },
  {
    "url": "assets/js/33.61b5a872.js",
    "revision": "bd7e4d18c54436a9b8747bb48127c593"
  },
  {
    "url": "assets/js/330.c374cfb8.js",
    "revision": "4ff2bd1782979d0ed8550343817fc46b"
  },
  {
    "url": "assets/js/331.80e6c54c.js",
    "revision": "e79a3125731fb7fb39facb0e38e997ff"
  },
  {
    "url": "assets/js/332.2e23293e.js",
    "revision": "d8c36366ce44948cd6a35b43e64f1e08"
  },
  {
    "url": "assets/js/333.52dd4a13.js",
    "revision": "3963b33194328eaf1c2de16deb096c45"
  },
  {
    "url": "assets/js/334.a235ec58.js",
    "revision": "58a0d51e69acd000d908143e71c8c301"
  },
  {
    "url": "assets/js/335.3bd292bc.js",
    "revision": "736a518c10b16b6bd90f47121138bb68"
  },
  {
    "url": "assets/js/336.fe70e465.js",
    "revision": "07b1619ce1ca1c2c38a7fe6db4821d30"
  },
  {
    "url": "assets/js/337.99ac963f.js",
    "revision": "f6786f4784a5544b991b0318c82549ce"
  },
  {
    "url": "assets/js/338.95a9369a.js",
    "revision": "952d51a9dbd36bb9335c1029b158428d"
  },
  {
    "url": "assets/js/339.7f06f466.js",
    "revision": "9a4cea7ec9185313302518db0ef46514"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.9db2fe65.js",
    "revision": "1879d13cbd2e8dd795a97016e9ce5d79"
  },
  {
    "url": "assets/js/341.baec67c4.js",
    "revision": "1f2b19215dcebc713e82521a8bdb5f87"
  },
  {
    "url": "assets/js/342.aaa96dbb.js",
    "revision": "47d0d0fed49f751459aae4038a1a2ebe"
  },
  {
    "url": "assets/js/343.494f94bf.js",
    "revision": "c465a5ec806d92895094621a10f2461f"
  },
  {
    "url": "assets/js/344.58a1dc46.js",
    "revision": "3a7a472ce2c410db63caf7999e2f7dc5"
  },
  {
    "url": "assets/js/345.9164c5e7.js",
    "revision": "9c79b6736230e9cf541738e88b444726"
  },
  {
    "url": "assets/js/346.05371d9e.js",
    "revision": "543e0f91364fa93950f3c4b360e9b343"
  },
  {
    "url": "assets/js/347.cf15a897.js",
    "revision": "2b9b6c814f7c7c9e4e1dbc005829aa95"
  },
  {
    "url": "assets/js/348.3c754863.js",
    "revision": "fb3fd8868dee23dc4b7b8c89c5d3888c"
  },
  {
    "url": "assets/js/349.cbc64ac0.js",
    "revision": "2f24196a3e1cb37b1ed71dd1440e66d8"
  },
  {
    "url": "assets/js/35.d0376060.js",
    "revision": "6948a5d1c61e116d103898c6ac2743fd"
  },
  {
    "url": "assets/js/350.a7023e6f.js",
    "revision": "17d659a10761f2c9b785f06d924c693d"
  },
  {
    "url": "assets/js/351.012d5c3b.js",
    "revision": "81a5b00ad5fac31e34ad059852fda65d"
  },
  {
    "url": "assets/js/352.adfb96ed.js",
    "revision": "b028464affc105c5e9c796ebf938836a"
  },
  {
    "url": "assets/js/353.791ef73b.js",
    "revision": "4220a1e6e9afe0c61ced022386a15453"
  },
  {
    "url": "assets/js/354.1c50de7f.js",
    "revision": "153d847775aa2dffd3cede5cb86b280a"
  },
  {
    "url": "assets/js/355.c34a26c6.js",
    "revision": "dbeecf9241a2fe6862a5ee3c2b71cba5"
  },
  {
    "url": "assets/js/356.39836c0b.js",
    "revision": "22fb2743be58f1b5c3a200c929aa4c23"
  },
  {
    "url": "assets/js/357.72bed9a9.js",
    "revision": "dbf9880ba428d81c9da4f718f77bf743"
  },
  {
    "url": "assets/js/358.607caa38.js",
    "revision": "8838c1f53c48e931baec7d7d40fcfad9"
  },
  {
    "url": "assets/js/359.6f5e738b.js",
    "revision": "a9e92485cf8342b77e3ee82272f906b6"
  },
  {
    "url": "assets/js/36.c5c87d2f.js",
    "revision": "949e4489e9ec1052b10ae69969f4ffda"
  },
  {
    "url": "assets/js/360.040d393c.js",
    "revision": "921bcfb4c51b9a57d946c7934649588d"
  },
  {
    "url": "assets/js/361.4b0aeb9a.js",
    "revision": "82903a02fd890eb01e80ad3198c623bd"
  },
  {
    "url": "assets/js/362.f37fd0c0.js",
    "revision": "ff597b1ee76eb2dd09b66d359efb188a"
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
    "url": "assets/js/365.99aa6e77.js",
    "revision": "fe4b367f4984cbb0f3ca76ab760814af"
  },
  {
    "url": "assets/js/366.64648f19.js",
    "revision": "e198677b4ab8b77ca1d0787135b814ff"
  },
  {
    "url": "assets/js/367.c596021e.js",
    "revision": "1bc1f279fd7339286959591fd6ba74a8"
  },
  {
    "url": "assets/js/368.46847f5e.js",
    "revision": "ccb623f8e903958039c3c64852f53efc"
  },
  {
    "url": "assets/js/369.f73517ed.js",
    "revision": "e45652a25b2a654bac460928ab1f84c4"
  },
  {
    "url": "assets/js/37.d441b96d.js",
    "revision": "c24b7a625f02cc7e192a667398cd40f5"
  },
  {
    "url": "assets/js/370.6c03a695.js",
    "revision": "9a6f4d1cf5e4fd43a63c42de147f3239"
  },
  {
    "url": "assets/js/371.d07da25b.js",
    "revision": "2dc02a0c64c74c692ad2bbba415778d7"
  },
  {
    "url": "assets/js/372.8edbac09.js",
    "revision": "dddef0eb6df8c35433b0ca4a6a7e061e"
  },
  {
    "url": "assets/js/373.ec6e8702.js",
    "revision": "d5e7b79fc243516d40206124874ec1c2"
  },
  {
    "url": "assets/js/374.2cd12ce9.js",
    "revision": "c4a4345025a3b2e03b67d2d1ee12f3a6"
  },
  {
    "url": "assets/js/375.5a8f90e2.js",
    "revision": "460262ac8577f65373ff11afe92e45ee"
  },
  {
    "url": "assets/js/376.8571700b.js",
    "revision": "58014f0cc07655c23c0a18ee638c7bf1"
  },
  {
    "url": "assets/js/377.88eccb22.js",
    "revision": "2d7b96ac2d27544e1616c65ac34a2885"
  },
  {
    "url": "assets/js/378.93c7ea69.js",
    "revision": "3a53466eddc66b7dd87cd9c601468f88"
  },
  {
    "url": "assets/js/379.ad84f943.js",
    "revision": "eb2a574f17faf17575bcf289630cf6af"
  },
  {
    "url": "assets/js/38.a422d943.js",
    "revision": "c9eafd9d9d023f9dcff8a34ca2e5b93a"
  },
  {
    "url": "assets/js/380.1a5a1bf4.js",
    "revision": "fd513c056ccd3eb9fb6cbf7714d3df46"
  },
  {
    "url": "assets/js/381.963e348d.js",
    "revision": "5fd45d4a1969fde3430181e486abee57"
  },
  {
    "url": "assets/js/382.9c2d2861.js",
    "revision": "f6b47e685d2e25bf7e144d9a8edf6b9d"
  },
  {
    "url": "assets/js/383.7790e50c.js",
    "revision": "8604923aa215e952ce5853f01fadda66"
  },
  {
    "url": "assets/js/384.1fd9189b.js",
    "revision": "e3c3fdc6b92755404281fd39ff13b241"
  },
  {
    "url": "assets/js/385.846a915c.js",
    "revision": "f031b33eef9f258e964844087dd21ba3"
  },
  {
    "url": "assets/js/386.ce0faea6.js",
    "revision": "80e57b3c687aa7d1d1c1a645f6e1b17a"
  },
  {
    "url": "assets/js/387.56173377.js",
    "revision": "53f258434cb985d1090bdf4eaeb1dc9a"
  },
  {
    "url": "assets/js/388.08e949dd.js",
    "revision": "d5824f6a89c1b8e1bdfef4641316f907"
  },
  {
    "url": "assets/js/389.93ea4f57.js",
    "revision": "1bbbd529393cf292f9670233dac27738"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.392f1d6b.js",
    "revision": "74c7fdf215af315668c837ccd381fdd9"
  },
  {
    "url": "assets/js/391.507b11eb.js",
    "revision": "538d52adc0bdf9218fff98dd1205fe8e"
  },
  {
    "url": "assets/js/392.b078d4bd.js",
    "revision": "41efa464e0921976694e0b9e94f3dae6"
  },
  {
    "url": "assets/js/393.b894d3ae.js",
    "revision": "dacdde9ae9198ae1045f5c04fe6cce9c"
  },
  {
    "url": "assets/js/394.b7213842.js",
    "revision": "2b7c4ee23334d4449cce3bd62c975660"
  },
  {
    "url": "assets/js/395.60f362df.js",
    "revision": "8b2f20b24d40682f08e33a760a9b613d"
  },
  {
    "url": "assets/js/396.5fa5bfe7.js",
    "revision": "cbc63f828becd0212b52ddda8a6e16e2"
  },
  {
    "url": "assets/js/397.bcbce5a6.js",
    "revision": "c6ce8d231f105e57fa4716a9fa7421c5"
  },
  {
    "url": "assets/js/398.d0cbeef0.js",
    "revision": "31af7dd8ab9a45ba30d1deab965ec490"
  },
  {
    "url": "assets/js/399.f5d50a50.js",
    "revision": "7e16b7ae609dd35d632e4f3eab396265"
  },
  {
    "url": "assets/js/4.c5bcd50c.js",
    "revision": "57a1784a4380954506435b3501ded8ad"
  },
  {
    "url": "assets/js/40.6214d2e7.js",
    "revision": "47cfc7833e968c64ebd92f9b0eda1797"
  },
  {
    "url": "assets/js/400.99905d46.js",
    "revision": "d6800caeb1632161606aa746b8df4284"
  },
  {
    "url": "assets/js/401.960d190e.js",
    "revision": "67720a15b42c802a86074e02ba0503e6"
  },
  {
    "url": "assets/js/41.8caa3613.js",
    "revision": "6568f84623386e98e4e3fd6684b0952c"
  },
  {
    "url": "assets/js/42.bd77c3ae.js",
    "revision": "6c81d17f4a7b76fb8cfdcceb990610d7"
  },
  {
    "url": "assets/js/43.1c75ed15.js",
    "revision": "04fbe904b3c2e0526816f540ac06955f"
  },
  {
    "url": "assets/js/44.534f8efd.js",
    "revision": "067d9a7448ea5c7351eff6de689fbb3c"
  },
  {
    "url": "assets/js/45.bc5ad395.js",
    "revision": "4507ed55641a81f9f769d094a4a14731"
  },
  {
    "url": "assets/js/46.c6e251ba.js",
    "revision": "bd2ba9473047fc35d5350453a3f8319f"
  },
  {
    "url": "assets/js/47.2399a425.js",
    "revision": "9469eb4cc77292cc138fcf3152585578"
  },
  {
    "url": "assets/js/48.cd4ed5d5.js",
    "revision": "cd7d6d7ceec12d8a4691dbaf2595e903"
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
    "url": "assets/js/50.81cf1355.js",
    "revision": "db4cd758dc12fd120a492bf58fbc7b7b"
  },
  {
    "url": "assets/js/51.cc8aca9d.js",
    "revision": "b0d0a6a5e6b16e9a9187c8d1d02dd0ad"
  },
  {
    "url": "assets/js/52.86009824.js",
    "revision": "274cca1aefbafa22ff931c535fa3920a"
  },
  {
    "url": "assets/js/53.7ff228e3.js",
    "revision": "be5e503b8a4b439ffd54475797e9b723"
  },
  {
    "url": "assets/js/54.c6ce44bf.js",
    "revision": "f1f34f22d3677e1ed5e6e2690c01cd40"
  },
  {
    "url": "assets/js/55.28c71071.js",
    "revision": "64c9c60a2bd3c0a461e06ce9080c8ef0"
  },
  {
    "url": "assets/js/56.41450bcc.js",
    "revision": "e99071246da26198885622aada262253"
  },
  {
    "url": "assets/js/57.7d1a10c1.js",
    "revision": "8d3e924cf2f0ca134a255bc9696b0ab0"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
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
    "url": "assets/js/62.7cdf5dba.js",
    "revision": "80aa8e07ec1067b8351d99f99a71bf7b"
  },
  {
    "url": "assets/js/63.2cc4ae33.js",
    "revision": "88fdd640524e55c5503c885d3edf4a0f"
  },
  {
    "url": "assets/js/64.c524218d.js",
    "revision": "85dbd9c2607236f820bc26e0f9638cf2"
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
    "url": "assets/js/67.0e247d57.js",
    "revision": "9011db8ff42b706f22a4b15a92ce3a34"
  },
  {
    "url": "assets/js/68.2f5285c2.js",
    "revision": "90495f6963ae3fffca3cb5a18104b043"
  },
  {
    "url": "assets/js/69.28b887aa.js",
    "revision": "1dddf0fd0c6790df0e653e3ea9495802"
  },
  {
    "url": "assets/js/70.db6eb1ea.js",
    "revision": "6c10dd39136ed4af658a4251ddee22bc"
  },
  {
    "url": "assets/js/71.0041680a.js",
    "revision": "21c737bf5b63bb8e2a1061fc06daccfd"
  },
  {
    "url": "assets/js/72.5013ac5e.js",
    "revision": "ee7f8b8d93f9f26e9886d244b9faa2a0"
  },
  {
    "url": "assets/js/73.19f9e469.js",
    "revision": "14438cdf13b86425bd34d5195063e158"
  },
  {
    "url": "assets/js/74.6355bc3e.js",
    "revision": "3b1664acbfa9a1a85f133a5dfc3be724"
  },
  {
    "url": "assets/js/75.790c1d3d.js",
    "revision": "cd23095b15a696b6ad4cf978b9c2f951"
  },
  {
    "url": "assets/js/76.288a3e46.js",
    "revision": "99db64ea047423afd5b169066c4b07cd"
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
    "url": "assets/js/79.09ce61a0.js",
    "revision": "205edf8bd7897b180c443d519e1244fe"
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
    "url": "assets/js/81.62742b8c.js",
    "revision": "2a0d06d5096c4f4e85495e787513705e"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7ff7f679.js",
    "revision": "ca8a838d67055a6ccbe993c7ed9c4108"
  },
  {
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.ee1721fb.js",
    "revision": "fd9fba8752234603b493c0790455a7c5"
  },
  {
    "url": "assets/js/86.bee2e56e.js",
    "revision": "6d492707997c81bc985f791d0de4d516"
  },
  {
    "url": "assets/js/87.82dfccfc.js",
    "revision": "82087d75257e9ef82663781ef600682d"
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
    "url": "assets/js/90.98c23455.js",
    "revision": "ae922836b6482a40b4e95c52d042cf8b"
  },
  {
    "url": "assets/js/91.301a7fb2.js",
    "revision": "836d4c21f26bba7728f2dbb49c7aebd7"
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
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.aab53072.js",
    "revision": "9c6b09a30f7cd54a264bc93192f97fe7"
  },
  {
    "url": "assets/js/96.0313d3cf.js",
    "revision": "68e4a3c38e43466be1258da78e9b3e35"
  },
  {
    "url": "assets/js/97.a26e301d.js",
    "revision": "f30a932d607df925850dfd7556114e21"
  },
  {
    "url": "assets/js/98.10cf74cb.js",
    "revision": "e93449db78e7ecad06bc9080aa134c5e"
  },
  {
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.fadbeeff.js",
    "revision": "d2a5ea2f07352e0856aaf516542733e9"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "ce28a137e2c7ca6c362142d81910449c"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "bfd8ee1ce757306eac58ba2845cd42b6"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "b500f3db97cfc5f150cf85d4d0d5d5f2"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "24d96f6c1e744f8d67618bf4f7487486"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "6332f1d555f460577cba674c3492e3ed"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "c58d39faff56487b5f05bc939177b1ce"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "4291a34bf86fd0174119bc547ec8d2ac"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "8d135944c6b797002a6a4c6c4c249da7"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "4313f3629868ac4f8c9b002d3929dfaa"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4dfb84dcb3fc31fc4a92f86e9dfd2770"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "af942aa945228be7f601268bca454f7b"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "ece12995ff304cdc8953b721e4e4481c"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "122c2bb083e019cc88eff9e041a287d5"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "b5c88ed0e661a44cdb9e9e69c3719932"
  },
  {
    "url": "master/api/index.html",
    "revision": "f4b381ca467ab35a98da079c63f10c13"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "15ebd0b214f4d9a72db9aca401560b44"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "3b5dc0648be8ae862643638f6dadcc6d"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "92858a05a62b8bec1ab50fa85ee8ff58"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "05d3fbf2f4abd7cfbc2a7fc83e874d0b"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "20771588021963104e01ce2390ea05e0"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "eea66737e23697ad102c7de7b9d8a395"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "66996d64b4d9939e9b6ed52e90102709"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "c977c877184b971a0050f8c9f188c934"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "f79e80455a93a28ac7f3d6b46e48f1f8"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "8356cf0b47b77daa7417ca223988db56"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "cbd1de6db5a321525069d7d2129384a8"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "b0b20a42e44f99de7b204008dc43c5d9"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "51af4e7154ddfd6d4c5d6f28570ec554"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "1f40da0493fa564fa418f0c4d9e408f4"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "20cbb20d3e55bb4abd26d689052f1490"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "64616d45500dec350aac9c250f2ab990"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "0f7c3b50e9c21ce50b6c1df412a5a145"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "a4b9e725b08880d8d32b5563906278bd"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "215cb7f1a83972789c9f82e85cfdc135"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "2975ae15bc929205a8daf2a3f23900b0"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "ba1bd9c175cd6bf363de3f069b903435"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "18b2e0ebb2113c5493741b5e8c05cc18"
  },
  {
    "url": "master/packages/index.html",
    "revision": "6a090a0261b5874bb27cdf8c35c80aad"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "d85272d924150ebe8b5b91e9851e269d"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "028c3ee399ab622bb634a333b3aab3ee"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "729162c7b6f71d19fbc8233f0b8f9a05"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "f8e2454b48e7d93029c4fccac031f127"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "a2d9165df6ed77f04d3a79b71e069d21"
  },
  {
    "url": "master/packages/views.html",
    "revision": "d64395b28e1dbdd42d936b9e58e0c005"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "dcf8e6d44ffecdcec31f042b10428b1e"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "ae4cf9c31db98329ad7a00ada7d93ab7"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "6d196f4f5c46d0a851466e3bc4e87c61"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "401802386d59cef9293cf7e9d415f7d3"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "0e263fa23bf08b2b38b2a6ae77a01a9f"
  },
  {
    "url": "master/themes/index.html",
    "revision": "dbf31ceb086db24a39204f3e436d7804"
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

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
    "revision": "489db956c5991fd1fa2669c24081ba41"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "bfacc80422875834ffb6af02b347e56e"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a2aade3d2b89c9cec7b5f05b41253da9"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "9adeb8d822186e6140d1f425b2fd9810"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "aa6da2a873493a8175e226479ebe0183"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "41a951639c9959b02880352f529012a1"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "5397e4ca1f50cb8bf75dcf9519d229e2"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cdc7f098284dccd14feb6aa1def0991d"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "536b07324e603de261352d614ceb09c7"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "a07e2371537b3b9177323dfbedc3b9b8"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "f93cec61c715d9512a1a0a181db49266"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "b0868ff15ad27330ad7b752cc054c6da"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "986e676c854a54c1ce0f43354fef645d"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "f51d28aba565e8086dc885a742753650"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "cac5fb535e285c1aa5e6853c54cbd4b2"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "c1a5116cae662a1ab561ae368e0584bf"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "ca034b7babb81b7cd6af500134a74d45"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "50f2adb954363c7198ce4bed0c7b8db3"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a54d680097d9d7a775879f73e0029bd9"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "93ae38ef39aa958da6906d81117bdb2d"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "e19e59d90c6956d4e82f3132106c4f81"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "49611c4137f38e84e7874f4944992583"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "4a2b7c8b652bb20ec510d35a4636cabb"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "ec5208695056543b806f4df630bd3703"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "e1305e26895a3d97bafc19886b3199de"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "f11f2a2493968ae3380f3c73343dbf13"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "1d0d249d4c856594b1afcf018c353f66"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "63d1486b20c7f8b70cf9b9ce0b128da7"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "ed3d7c430a958ef97508a628e3974290"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "f165a4196e440e3b50fb56521ea16bad"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "309a7eb32e8f92ce80325f87b202b76b"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "9f14a264b5de911e26659e9c448ee92f"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "caa8536d516bf1bd61f3dc84a9371370"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "26e190c54a19e57f7d9b1868d0cc80f8"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "2f48d0e10a420fe089b60d7a825f20fc"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "13abcb38cc9ac6470a492c0683868da1"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b97ce1ff60466cf70edbec74a6d02352"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "0795528a44a6c26f3395210d2d321ac2"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "bb5a5ef94435534cd2da53624205b3e0"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "454e205aec7998a32b9ecb0de7471e2c"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "d53354917037301dae89330b55e3248e"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "ec248535c73267bba2befedba4749edc"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "42798d6b94f377f4cdce142f1225dba5"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "3bbdefe489458ef980e53b411d849532"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "c5797c16d86bcbcf50823f797062cf6b"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "cb740263ff5504ff0c91373463d8dec9"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "b7d4c9b8a9b98aacfb9f94f2dad163dd"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "f39188898f86f1435cba1e04defe925f"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "e87ab394ea5923b675c8c187e3773686"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "a98a2f8c81091b87fa35d297c2670d9f"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "39c47ad90cdecd401926cc52b7aae74d"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "834a3f51b39d4aae2dedbc506ffaa657"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "62164de17c40050478fde032ade30893"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "22aad116a920113dbb39e75821e1ce8d"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "644d9777b96edac388e5c3175071d22c"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "21bce147be55f076479656a76aa4bc19"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ff07bc9cbad6a8877783434641a4829a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "873cb809c3daeb7a1a61d06895d031e1"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "8f6415a76b843f27affa715024282215"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "d57d4e01fdfbbb6e833b0c6be9ba063c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "0d912dec64a79a944dd689050bbe422f"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "920c8cd931f7680690ce7d3cdb2073e7"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "c2246fcde44b42c79ff7e696fb7f4666"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "565ffd76150a9a0731470fef0d86bc2d"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "4edb72fb1634973e9565e5ae01f3b636"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4293bf79ab9ff01586e7b86ebb905032"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "31f6d3fd04a13d76904c445558f555d2"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "16e5bc8825e2444373553c70fba230c4"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "0b9a4fa763568a4f69096f32c17729a4"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c45b9ebd70b8cc651352eede238fed29"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "942305e5ad43850cb23c322d86fda960"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "4cf1600330275b5d966cc85a6f9f13ad"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "21edd18f0d21bb6fd8e757879f0e34e3"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "4ef17976a749054363bf656dce895ec8"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "3c51e927b070ebe1bb780122d3dd8522"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "d7caadfd7bcd9e90bc07ce209f748761"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "0b7fcf43fb0a65102a4885298f66c3c9"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "798301fdcfd25466126952dc4fd7ba94"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "bf64ada357f258eb4f69873dcf695e6a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "01458cc11cd1433bda7f0c5c83630ef0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "bf5ec6275fe7ff859b1cbc3e2f196f91"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "8c26d4b98b7a7bd8490b8d4f5c767cd0"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "0b2af642d3d05b7b5039934ff3732612"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "7f39b5b829f35e45ee6f766855544c4f"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "363e72924674dca1ea395a7adfaf77eb"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "918eb61b8004f42a812ec08c39aae1f5"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "77032e32daf2aacf8f787e1b90a3de6e"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "c9405a39868b7af7dc66bb8de57acd0a"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "475ecdc4df18bf52173e3fae49c54468"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "f1cef63324f33ab71a60e56745261f26"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "44107860c31970d9e2cb6a62a65595f9"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "edb013a4790d6d460d323b814f819d63"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "0ffc49e9c312d9a71ffd2ef50eb56733"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "834a364a63c2c89b85092e2dd6b72d3a"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "2a511059c44a587e34a16173d0a2a84e"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "4dc85d476ba5946a9cd3ed5a42c980e7"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "b4a9139540653fa2d9b0c725e5ddc95c"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "8a6ec262e0aeac87f0f5547ac9cde3d6"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "0c2442656b6ff9950d40eb0d169dba28"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "3c915ba2949beee675d25cc4f9e1e641"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "c5d2f14b506fd3225e5bbf80bf601971"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "429a0bf96f8afc2e874a4f4bdf0f672b"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b2a2a031c83b2e36609b30b3d3912674"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "611f58f3ebd750abc900462b8434d2ce"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "83c21a363ac3e23b95c9f42f233a76b0"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "dee4e6958f565bf55176a18ac4d2d3d3"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "c51fc665b5ca6904a7b450b69d5c0c54"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d6257492d60e42c70b3e1ba7a97a84b5"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "58267b8d24f66d0827fd680b89356f5a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "aef17a6fa80b696fb0ced65829bba613"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "79aee8ab9c9c210fd9946ff2d682fb5e"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "ff06964c8c34b4e4002df977e9d95ff2"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d19065a3fe09443e83cc2a3eba4af98a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "503805304edc39113286573573ae93d1"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "c48f230feceec3fb3ff25972a9b83cec"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "0e4874c69740e77c919413610d6feb8f"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "face706b38d96ded6e717fc324b94b6a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "6ef439ee88195b94b8597293f757eb69"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "8958a0f7b31a225cd4e063952e4eb23a"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "f444326c911695c5665cee31f3de1358"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "63993068554b45aa95ced8df01bb78ff"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "a33e77210d5487f0774572f19d0539f7"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "90e14756a767f8fe13417cec70498bdc"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "985536a2054021537bbe0903101f7cbc"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "6fac336c918eed2befb151e8f07846ea"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "48eb74bb726edc38b849ef2301a98613"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "19fd37e5ccc55fd9a9a1e3779fbb067f"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "1761b5665f1c7971c080a49ea043e35c"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "7e107ccff14f2fbcff06a703364d2873"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "34121a070fa6b9bc45dc3a7cc30ccfac"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "002bc357939b098bb789d58773fe501e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "b5f44af1f3dfd8d35a4d86c35d145a28"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "91b2cd3f48b67e7f44bdc039eac4737f"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "d828d64cba20a7378d2cecd6a970f620"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "fa795ba79b5c7d00a38a21a648b93a9a"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "dc70a04ef37b2eb46f28419907a6fad1"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "348b8dfa2920337d276ff47bbdcd5a60"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "e3449f06ac23c79eaeeffcf4ad1a1f7b"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "64468c3925b9baeb8f50f8e00de24329"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "5754d3304133e8b2dc7d00c2525ad935"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "9465eeee33a20c2bfefe41e4757ac8a5"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0dc0f21bae4c8873ba4b4ccf2107ad67"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "213862e89f9a391ef4493b112a43f56d"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "ae3fc2df12c7d0b9f960666acccfa643"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "ffe51f5ab72a6c419e1332d4e4782aec"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "48799d31bf922dda57789a9da49352ca"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "032e9dd14670586f4218a663943ddc4d"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "ee11fc64f5baa7d9e4595cf0cde9a8c2"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "ec3902d539213753d90c91e46605b7f9"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "a5f62df09942f165a2f569491d4bbd39"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "916800a8ae9d33d0ec03f5d6d1d9cb3c"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "308d0eafddd3162d7dc299edc7be0b55"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "120902536853ce86f5895e0f2d9b5971"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "041d00f1bed7c3469d5fb6fef12cc24c"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "a8739327ec76bca579e418187744a15d"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "32635b783b4bf074ce9311eb0b69256b"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "3194f4d3cc93ea5cd4ec67b3eb85ec6b"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "25d8efaeb404d70440c5c10dd8246309"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "74aa4259c10b8b44c0d04257d9808bbc"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "12fd70d8709930e9f27ea03b06e7d411"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "06c7f9c7381522d22371fbf13cc842d8"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "8ac52cdad8c2e1198d84cb98b61e3f74"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "2b78f1e6c58ff89ecc40b72369b7b083"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "ce3fba167a8390397e993ed29a3ed245"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "922000ecc775871159ee29a296a3382a"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "49e56e1f6b89d673630ac3c802eac2c3"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "884a64fa4439985199dd9da85390090e"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "67f42408ed6dc1987fb68a5cbc2a9ba3"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "a72a0261d6f0bceb1dd6f93a78794d94"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "77d743808818d1e431a24943ac3d6057"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "e56e819b81659ca116b3f72b2e3f387f"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "c1e32508db4536e2261b4632b01f9c99"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "b5e29e170f651ca3579a93e85166e362"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "6b8f34eda9ecad5cd0f0117311079c5b"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "330f4634f19e61e36adc1b282ee91d85"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "837eeea64b5aab8590492bc1b327a740"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "0123d47da8e6b55df65bd9f4b0ca7f74"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "a44a06e9419aef021e7fce5dfb1c97b0"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "0beb7502e98077971ecaaaea8869e73b"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "1e1c912fe07ae62d66fb52a685de4107"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "3f444a060853a37d5b2eae2645877402"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "7bca6f816aa9d456166d351ab6917e63"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "14e9d97b269193075a980955d3c9819a"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "c29c95d8213fa65a976d0380353540ed"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "681c1c25604a32f985725691d9b7e188"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "dda02b296c26355074e43a08db700e80"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "8e202d24a95389865b06a443c7dfb577"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "393affd5ebee251f65346583341069cf"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "39edf254d6688d98160b6c8915023293"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "fd857c069cc87432062edb89dd781dc5"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "830f86890e34a8d8b8b5485e5359d0bd"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "4ceed7c1a6cd0a8090572c591de267a8"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7b8a2858b2a3236ce6d1ddb6cafb54c6"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "8a41064cccd8d3e0b99729cfc49dcd5e"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "fdfe6f284007477867823144dca094d0"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "3c8983926d47be14a10f1f79291456ae"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "e68e72ee1ca49a5c029996e9beb0f0ed"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "4e500cd1c4df93f6e964fef4ab0344cb"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "939120bfaf68a67146096abe3aa8ac33"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "60ffe3419932e862d6aa4c9fbcb842ee"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "72abfcc493ba7f76c750c5403da7a726"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "6ca0cfe0091e9a7016a66c3c6703e4f4"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "c5501120f704ce772613cc2a121c9365"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "ac92d4dd488268c644f187f14d9ca908"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "5c849e71d9ea3490f98fee5b63c3e651"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "9367234d6fb1340403fb961147de7ff1"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "ed730d45aea6d616a70dedf68f5c243a"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "2ec8c2a01299ccf61d675cdf729e366e"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "e40212331e184b83505f2d472534e22b"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "e801062948aab89c2e781067e9130797"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "d94e00637730816d2260c3bcd1f588d6"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "e7fe2fb59fd596644aae3ac2abcd1a54"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "97182826e3fec2ae1e500f780721e9be"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "d2e873d33138b665c091544172b28721"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "f567354d42547f7dc46074b8a3818c4f"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "0b0393f62dd62128ffee8be481b95cab"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "3ac0f0c79fb81aefe6eb26b5ff4b7de8"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "324f2ca84af062cf379b19fce0a07965"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "b8c27b9b8a78b960f10152a03d113430"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "1ba46f10eff18a872a208eeed2ef4e47"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "c6f5a72221b29cb35b05462634df7c2c"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "577aebb9ee0be9389ece5b4cb87c04e7"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "4cb5370949d4810e70060f5851882ec4"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "161dc4a225f012c3b6eaeef2bbb97949"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "23dfd0a12362c192f869c273673167cf"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "5573264d4103fe6aed956684b3ee83c8"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "c0f98cce5b862c70402160b000d1843c"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "9d32fb36ec542b618e4043a26b57932a"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "5b8714236563c87320a07e6dd181e836"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "9b32a28d842592c692df794c6ed347b2"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "89fb693693bf884e54831bd13782e41c"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "7b8c2c50622fe9b20ec1b38942196182"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "e614dd35c3c4bbbcec461febecfff615"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "df4ecf42586809218c6cf55678bc4e64"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "4d2958c5cf5ddf59d808d5de441a2b36"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "8ff396b81aa8d9a26a27bb951cb30b5c"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "da55a7f5d0f9d32bfba9d59aa4e7c058"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "361d66fa3bb3cfb6d19a50ddce0c198e"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "a3236e7ae742a0f2feb07b67918ae859"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "83af680ab8ad074baa9b097b9ef8eb48"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "7617ed7116047d7acdd11635b51ee340"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "a4f4cfa2fcd3b557416f85d2466d0449"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "893784b121626af2340fed5fe2c76f14"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f560783da9ec1eefcc552e99b173e885"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "c7d7898b9e2d90c50af400f189a47599"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "ec26bd5b2802fd2a87a5bec2c253009c"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "19b01a409c5777db4b56e63c5eadf25c"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "ff6ee26d89bee4f72b8fef82362da39a"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "0e636f3b79274fb71b7c3a2a6a9106a7"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "638c0c91993bf8d563b1061e98ac0486"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "290df637dc7fccba3946b8d8fe019efd"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "3070f4bac36cbae87d96cbb0ce9532c4"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "a5ba094ee4aadaea4d97cf6e267e255f"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "0ad4fd062eca84f90b992025f444e1d0"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "23272f1f9b5d4a319acdf72c8bd0fcaf"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "24d2cb684f0c64cddaa7e1b1bb6dae02"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "276f39bf13d65b5388fdc25d3a9026e4"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "f5a427424573763380dd3c99d90e49f9"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "dd3eba15736199b40db051d56526339e"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "59b3ec205f9d0eca904666c04ebdda0b"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "cc76240764d759942d67c9673666ee11"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "c6c4056b1801b66c98ce84bcf87b859c"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "59e39f9ab514aee9ff8335d4ac88bb81"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "10bba181a220b97a33bcd0c724f93f63"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "0e7e81c8e18f0c9957679f3e57ab3e40"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "1861de6bafbb4cc6ac7b6a063bed9274"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "4f9678f928704c226fbc534a7e19a90e"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "ddc93d26857e958c374b42574fc5d8ce"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "d29ccf4fdf5589b85c6f0513ca63a5c2"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "507cf0e49786487f1df7e54f07203259"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "ec64346a724c3a6080e652840a92df88"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "99faf44c5ad081d0bcfd2ba739819e3d"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "aefa6286e72fa68644c09372de07a628"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "b1ae389e52c969680eddd386863b1467"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "3c1f36cb6c1441b4e9b227322b1fac22"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "9055f048061f8cb67abddaf1aad54121"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "cdb02c475d93e842d7225cd18ff52198"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "b1a9ebff8262e8a7787ae4b875d5bb39"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "b9fd19b80dbc6d110279901139b9e651"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "6a79f223d616fb2188a7bcf7412424bb"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "c00a67d31f42270877ff6bd2b052e93d"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "5482b86207622939db117b4052170044"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "4ea22400158dd8a7bd6aa753104a87ea"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "96924e0d433bdc5cca0ecf30f1c5698e"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "11d438ab5d99cc13d1e58ea28800090f"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "906c73b8cd4c226a446d2a0845c4fa1e"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "64b0071c1e0472db28acc0741fab577e"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "034f0a3b901a59dfcc29101a8620d1ef"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "a6a360b7c2cb4717c4e303d579f70a5e"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "394013eb651fceafa15fa13f5b2603c6"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "1aea059d0150aa3e43fd22c1fe0556c3"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "ea861e7ebce9a6af4abb7c6011ec4a02"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "cc35379722330bf55c5c622ddea6d380"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "9e72684e6a6fd336b2aa222f7ad22440"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "7b2f9647ee46aaae8d9b92b488901658"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "95df1f080d6ce332fb851e8d19148e8c"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "2efaadf6ceeb4bbb2b9d2f412a18056f"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "28f314f2e340e2534bd7889d14a51abe"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "e0a74f0a87005ea40c83a65ffe435d0a"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "1667af25016cf9acacd0eb1de9764998"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "7bd0498a394c0b0e16231ba2d7f73d68"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "4579b024523000e07fcf8c244a3f71f5"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "e17cc7664e0da0695f27806450e252e5"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "a25c4b133fbb2a57af9bca5c3817d19f"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "04535fd0db370a0acaab5c7804d988f9"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "37629b45850077776daab409bff29431"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "d17e931be6d39cf2302021ade25d7c4e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "2b1653bd141f02990e39a706e5c473b1"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "b457247aa60074a46d7d3c6651bd75ec"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "928ecbe440980460e21a17cdeb6ac69b"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "71705a921929e11200c87346a18cf64b"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "b2d17287146dbb4090c480730023c520"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "8b732c2b6b0438685639c65834a180f7"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "3195aa1ffa80bc1769a32aaf7aa5330f"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "c881ee9215d25670c07d9aee7c194a0f"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "2ab929a11ed8a073064ec992761f0870"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "0f029b8597b78a60e73e92bf4c44546f"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "2ba9e997bfb0abb2846debf48d3c8abb"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "1eb7a79f4d73cecbeb96158069640272"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e9c1bb35ddfc870c1f66941efa4dfd80"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "98607080f2a35c5497ef57f412b16eb7"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "6166d1fd59be30790fc1dd0ed22f0b38"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "85c41627720f73c586cc96fc02edc472"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "026fb7e19cb2fb0a3c98d0eec04f3ee7"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "e36018cb7482a2ddec045f061785b8b1"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "e950f525aed9a6ae58d2a5bddd88acfc"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "e7842fd70cb3ff18826bf3b8ed895218"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "f8be9cae1ff76c9eede1909a82b1e863"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "9b0543202b6333e50d6adb21e6ea3bc8"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "1d2bd0d0daef1959bf071b1a3ac5eecc"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "52b58d74f5d6310e42577f3e2975b43c"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "39dad8dc720959e45fe2a6c9eb43ba16"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "f5cf03cc2a7ad201732e189f15b0ac43"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "b3b0a238d0f8909efa8026a99fbbd282"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "e3946bfe03282d2c4b73f5276166478e"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "8cc4d4edaad36e07d9ede834b4558103"
  },
  {
    "url": "404.html",
    "revision": "2ec7a784204a24caad57a9ee40fd3af5"
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
    "url": "assets/js/101.26a0955d.js",
    "revision": "be483eee39a67a79407b66867a211fae"
  },
  {
    "url": "assets/js/102.36d2050d.js",
    "revision": "0952bf86988e753c5dcc470d1883944f"
  },
  {
    "url": "assets/js/103.440a1a7b.js",
    "revision": "b08a09d8e6fdc51fb8df700b62375119"
  },
  {
    "url": "assets/js/104.eb0dd0c4.js",
    "revision": "102b96e4aaecd62ce6f9500fb48ff64d"
  },
  {
    "url": "assets/js/105.e47ab765.js",
    "revision": "468d45808e241fdd90ef82bbf5c519a8"
  },
  {
    "url": "assets/js/106.5d63a84c.js",
    "revision": "3312c23212db2d559a64e016920c809c"
  },
  {
    "url": "assets/js/107.1d197d03.js",
    "revision": "8d9e4f4c00da607d039968bfa5aede92"
  },
  {
    "url": "assets/js/108.41c1b1a2.js",
    "revision": "a9a4681f8acd612859d759b35379852f"
  },
  {
    "url": "assets/js/109.6a8bec0d.js",
    "revision": "0d1291a958c7af10924e2638fab0f23b"
  },
  {
    "url": "assets/js/11.8b954949.js",
    "revision": "4b1e7de1975649ecf40a26f2b4e0c301"
  },
  {
    "url": "assets/js/110.1119b585.js",
    "revision": "715383996623a28d80be3311eff76f21"
  },
  {
    "url": "assets/js/111.5333766c.js",
    "revision": "02782dd77f4ff9ccd047cbbdd076dbd5"
  },
  {
    "url": "assets/js/112.7dc2ec56.js",
    "revision": "ecd1b8381acc976ea8813bc435e91971"
  },
  {
    "url": "assets/js/113.465dd1f6.js",
    "revision": "ca387b03b3635466ab15956a8823da39"
  },
  {
    "url": "assets/js/114.bb237ccc.js",
    "revision": "95bb44623d4b27d0ab8428b39b8d2b50"
  },
  {
    "url": "assets/js/115.bb31c748.js",
    "revision": "b6cdcc91a5041dc28bc8cc1c96909d27"
  },
  {
    "url": "assets/js/116.a859c32b.js",
    "revision": "68cde81c0a205ae90b273d4e4a2eb2dd"
  },
  {
    "url": "assets/js/117.74191023.js",
    "revision": "06fd16f59945c6ccfce94ac3215c082a"
  },
  {
    "url": "assets/js/118.bede2e12.js",
    "revision": "a1f01f4c60c5b02d08da351cb0ca7b1e"
  },
  {
    "url": "assets/js/119.aaa5b1cb.js",
    "revision": "c6912a79d2d5476bdcb17d2896763d09"
  },
  {
    "url": "assets/js/12.db523a6a.js",
    "revision": "e756b7317ad43362114b1185cea053ad"
  },
  {
    "url": "assets/js/120.24c8a527.js",
    "revision": "12ca5d47ab68e2027f6e48cf1f52f04a"
  },
  {
    "url": "assets/js/121.8ca729f1.js",
    "revision": "35593c60d21c0d5cda260858ab0520ff"
  },
  {
    "url": "assets/js/122.e1381c94.js",
    "revision": "6b1931383e9b45337b07f92b2648cbbd"
  },
  {
    "url": "assets/js/123.3b0058df.js",
    "revision": "a5c49446e1a965ddcd38ecb99ff1c85a"
  },
  {
    "url": "assets/js/124.adac9ec8.js",
    "revision": "1230fe8db7beffaed3679e7e1f3c02ba"
  },
  {
    "url": "assets/js/125.2acc1f4f.js",
    "revision": "3aca4a8b3a3a27c9ac66eab00a4c57de"
  },
  {
    "url": "assets/js/126.16137289.js",
    "revision": "be018f43900875a2e842f86141f60a5e"
  },
  {
    "url": "assets/js/127.4125c808.js",
    "revision": "1bc10fd59568d284bdb2de1388b09d9c"
  },
  {
    "url": "assets/js/128.001b2a5c.js",
    "revision": "5495a46bfeee28eee7b090cfa47d8144"
  },
  {
    "url": "assets/js/129.05fbffaa.js",
    "revision": "a49ae5d9d26c38e312beda31df80c27c"
  },
  {
    "url": "assets/js/13.5e70a3ab.js",
    "revision": "2305a4fb1a0e3e86b0f946e551a81c8f"
  },
  {
    "url": "assets/js/130.74f5ba6b.js",
    "revision": "a8840b3afd8faa8aea2d800d300139c2"
  },
  {
    "url": "assets/js/131.c896a63a.js",
    "revision": "12c71902c01a70ab7fc74b7116503d02"
  },
  {
    "url": "assets/js/132.e38a453d.js",
    "revision": "34e822540671ea570d8838f295dbaadc"
  },
  {
    "url": "assets/js/133.b834216f.js",
    "revision": "cd047af526246604f47cc714ae4886c5"
  },
  {
    "url": "assets/js/134.85e9d243.js",
    "revision": "29851cb15cfc3f10df20c76105beb152"
  },
  {
    "url": "assets/js/135.68e46a6e.js",
    "revision": "147cf55bfd543d67b302bf2138a37f9a"
  },
  {
    "url": "assets/js/136.eccf7906.js",
    "revision": "fd2d6110aad96932dc74582b4d70ab0f"
  },
  {
    "url": "assets/js/137.aa07dfb5.js",
    "revision": "8476d966cc564505995351517e3b1bd8"
  },
  {
    "url": "assets/js/138.e66a1b37.js",
    "revision": "0c9a2e355232a45087d39ecb5b7bd44a"
  },
  {
    "url": "assets/js/139.b7aa35fe.js",
    "revision": "da4a8afe7931ff2de7c8883aea9de577"
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
    "url": "assets/js/142.894f5733.js",
    "revision": "bfd2df9f271a9be0755685284116c7b3"
  },
  {
    "url": "assets/js/143.f6909121.js",
    "revision": "61563d4c9a893ea79a296d445365a94e"
  },
  {
    "url": "assets/js/144.ee30c537.js",
    "revision": "2947521099baab07c028afee42f1c48a"
  },
  {
    "url": "assets/js/145.6647f343.js",
    "revision": "94d719bf9451927b26bdb8dfa2e7dc45"
  },
  {
    "url": "assets/js/146.6687bedc.js",
    "revision": "96bc1282968072fff60d198027599d82"
  },
  {
    "url": "assets/js/147.ae7bc50e.js",
    "revision": "63fed7e4725974d87579f7e32d6770cf"
  },
  {
    "url": "assets/js/148.7bed58fd.js",
    "revision": "b6e1bd44608d77661686709cd6ea8500"
  },
  {
    "url": "assets/js/149.c09f8a15.js",
    "revision": "795285bb961d55574c62c73e9e9beadd"
  },
  {
    "url": "assets/js/15.2ad49f9b.js",
    "revision": "9266939c5fefb9bd863336abcd37448a"
  },
  {
    "url": "assets/js/150.ee5c1c8b.js",
    "revision": "eb3b1f179be66affe5ea6730bb323456"
  },
  {
    "url": "assets/js/151.52d91f3f.js",
    "revision": "de6fc82f1bdc92a0f8c0014559dd0d0a"
  },
  {
    "url": "assets/js/152.a8879fb0.js",
    "revision": "b0b8e73d0344c8a477a49d5b004cd10c"
  },
  {
    "url": "assets/js/153.932571be.js",
    "revision": "385de709590cfc5365cee66558c0d05d"
  },
  {
    "url": "assets/js/154.c56cb681.js",
    "revision": "569b09e3b037a322001847061ea930c1"
  },
  {
    "url": "assets/js/155.51e2eb33.js",
    "revision": "71bcfcde16296a3aa3e91bde286ce4c1"
  },
  {
    "url": "assets/js/156.c692396b.js",
    "revision": "d4af885d9a30a0b37644b32911b3d389"
  },
  {
    "url": "assets/js/157.129f4090.js",
    "revision": "ede0c375838225912841e564f462cf34"
  },
  {
    "url": "assets/js/158.7a9b9972.js",
    "revision": "ae08a94824296e6dde988b84c28513d3"
  },
  {
    "url": "assets/js/159.befc70c0.js",
    "revision": "59b1db72408eaf35e165629fb13653fd"
  },
  {
    "url": "assets/js/16.5d41ee2c.js",
    "revision": "63e170c8419edb3577959c0ba640ce57"
  },
  {
    "url": "assets/js/160.d1dc880d.js",
    "revision": "25e84319e3b2b73900df2823d2cfb641"
  },
  {
    "url": "assets/js/161.e3895a09.js",
    "revision": "fb85072f9c50edd3777d5f577141fd36"
  },
  {
    "url": "assets/js/162.5d8c121e.js",
    "revision": "355601b98a632ed99738504ec0145ed0"
  },
  {
    "url": "assets/js/163.3562e7ab.js",
    "revision": "bd73c430b252b9f20297429d15a101bc"
  },
  {
    "url": "assets/js/164.655c8389.js",
    "revision": "8797f6f2db4dbfe1245707140b76e251"
  },
  {
    "url": "assets/js/165.edf09bdf.js",
    "revision": "4c0cddd910b920af174429f5b97fbfea"
  },
  {
    "url": "assets/js/166.667bd119.js",
    "revision": "bcaa60ca7ba4870056470d1d2e3dc6a4"
  },
  {
    "url": "assets/js/167.aa75f4a2.js",
    "revision": "8ccbf716aba93993cb4287f034546fe5"
  },
  {
    "url": "assets/js/168.5f3c0c83.js",
    "revision": "213301dfe39868a869ccb30397d095df"
  },
  {
    "url": "assets/js/169.22e1fd3a.js",
    "revision": "b4b461e3c0b5336e4d469aaebfa2d723"
  },
  {
    "url": "assets/js/17.d2d5f43e.js",
    "revision": "03203dab5f01f558e77243d559e89a7e"
  },
  {
    "url": "assets/js/170.6f524dd6.js",
    "revision": "62def771bb14882d7c44ec5f2a5983dd"
  },
  {
    "url": "assets/js/171.09a0fc2d.js",
    "revision": "32c4aa7a098b32439cd699611603fdde"
  },
  {
    "url": "assets/js/172.b39fd4e6.js",
    "revision": "3c100947741d9925aa45c4bbd359af2e"
  },
  {
    "url": "assets/js/173.85a26d7b.js",
    "revision": "b332eff809beea3f3a0bd55a2b7ad491"
  },
  {
    "url": "assets/js/174.2285982b.js",
    "revision": "d24399878dac847a8cec0b408fd9200c"
  },
  {
    "url": "assets/js/175.33d2bf80.js",
    "revision": "7a295678527ddeca1be6f66176091c18"
  },
  {
    "url": "assets/js/176.7a8838d3.js",
    "revision": "18e2c59eca87b5cccfef0876dd2f4fbf"
  },
  {
    "url": "assets/js/177.0ac9f848.js",
    "revision": "1b62e6e26bcb1fc6903dba818966ab6c"
  },
  {
    "url": "assets/js/178.f649599f.js",
    "revision": "9c6eb6cea9572bf62a9a74b3dcb6ef82"
  },
  {
    "url": "assets/js/179.73a0aae4.js",
    "revision": "def4dd13d1df10deff03446fbaef2c57"
  },
  {
    "url": "assets/js/18.0d308363.js",
    "revision": "b1374d5baea8dd1711ee32d79d177505"
  },
  {
    "url": "assets/js/180.c64196b7.js",
    "revision": "e9555d44632db0b521c29c248f1d9732"
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
    "url": "assets/js/187.55f97e7d.js",
    "revision": "2d126f75875115c759fc7295c2b38261"
  },
  {
    "url": "assets/js/188.7355cf74.js",
    "revision": "dbe54f442904d3edbe00a6a621d60d17"
  },
  {
    "url": "assets/js/189.0d00871e.js",
    "revision": "505356183c3e4cdce7efc690b1053815"
  },
  {
    "url": "assets/js/19.a2d80c5e.js",
    "revision": "1b20f20073978070a3c17cb681f60a26"
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
    "url": "assets/js/195.0e977e85.js",
    "revision": "2d02f415cebcbc73a3fccda2b61cfca6"
  },
  {
    "url": "assets/js/196.67a71a60.js",
    "revision": "31a87aeb995e4bddc9476bcab4829072"
  },
  {
    "url": "assets/js/197.7a98f83a.js",
    "revision": "27f9f0e651a4dcbda6552e952416d650"
  },
  {
    "url": "assets/js/198.79052641.js",
    "revision": "091ca8bd7721808e1287813b24755534"
  },
  {
    "url": "assets/js/199.7518db2b.js",
    "revision": "b45b93422e13eb38cebe8789a9959282"
  },
  {
    "url": "assets/js/2.f60fb795.js",
    "revision": "64570ce90e9ca32b0ae88584c1831a23"
  },
  {
    "url": "assets/js/20.dd1405a1.js",
    "revision": "8095472972b8a2651f7e14a68784663d"
  },
  {
    "url": "assets/js/200.c3adc0de.js",
    "revision": "3c894382ca11fe6c7c2cae18c846b59d"
  },
  {
    "url": "assets/js/201.eb89fbad.js",
    "revision": "3b03d00c8fe45578bb859173160f223b"
  },
  {
    "url": "assets/js/202.9cd3502d.js",
    "revision": "1e1d994e2d0218f702367116e8518afd"
  },
  {
    "url": "assets/js/203.3b0b8cb0.js",
    "revision": "632b5d78f2f2a4038de26fc8b2cc3b02"
  },
  {
    "url": "assets/js/204.86e56c9a.js",
    "revision": "1e23ab548f6e1282d71aee3da9652c14"
  },
  {
    "url": "assets/js/205.9bb24f45.js",
    "revision": "6abedc0adf54242abc0ed37b7b89a726"
  },
  {
    "url": "assets/js/206.d2ee5fcb.js",
    "revision": "68606fdbbbd2296b32ee3f1f438fb4d4"
  },
  {
    "url": "assets/js/207.fad02ed6.js",
    "revision": "8d3cd915bb7759c3e4db0dbb619f1ad5"
  },
  {
    "url": "assets/js/208.c3319469.js",
    "revision": "05824201f08b9aaf5bc40322d7fa3e7f"
  },
  {
    "url": "assets/js/209.cae20ea4.js",
    "revision": "ce1d969cdbe4f82484926190de30f0c5"
  },
  {
    "url": "assets/js/21.1f5e0518.js",
    "revision": "f05448f6ecfccd3273edb82b51a753b6"
  },
  {
    "url": "assets/js/210.97bd2493.js",
    "revision": "d2bdc1bec2d0594fff4d1a486292851c"
  },
  {
    "url": "assets/js/211.79a126dd.js",
    "revision": "a6307719351cde3d3d5a914ba3929a2a"
  },
  {
    "url": "assets/js/212.234ab6a3.js",
    "revision": "d54f7c80b621f882219d9c92297a03e0"
  },
  {
    "url": "assets/js/213.2cf5b662.js",
    "revision": "5f2ea24f5e8afe912300c690038815b5"
  },
  {
    "url": "assets/js/214.b16eeabe.js",
    "revision": "4292eb96c9136d1731a1cae63a5c5d71"
  },
  {
    "url": "assets/js/215.287f4228.js",
    "revision": "a4ffa574a383f793e6c0635b313b9f13"
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
    "url": "assets/js/221.f5223dde.js",
    "revision": "6363310488153a6ec5b593744dda0823"
  },
  {
    "url": "assets/js/222.f50dbd91.js",
    "revision": "67774edc09f7e3179d66c2d0579fc6b6"
  },
  {
    "url": "assets/js/223.db865265.js",
    "revision": "24b15a27abe31d7bb30a920a028f3237"
  },
  {
    "url": "assets/js/224.98238ecb.js",
    "revision": "ceabac16c25d3ef1d47919cce1f6a624"
  },
  {
    "url": "assets/js/225.fd912f37.js",
    "revision": "3f195f96649adf16046e57e2e6c569ed"
  },
  {
    "url": "assets/js/226.f1e6927e.js",
    "revision": "801be3e74a04b94d8dcd17ee457af44c"
  },
  {
    "url": "assets/js/227.9fbd2efc.js",
    "revision": "147dbb3333b175d9cb7f41313c925c8c"
  },
  {
    "url": "assets/js/228.55daf5ea.js",
    "revision": "ba084cd9c084ce81a75d4bc28854ae7c"
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
    "url": "assets/js/230.1442f69b.js",
    "revision": "5c65ee705069ffee9090090894488b92"
  },
  {
    "url": "assets/js/231.94558bc4.js",
    "revision": "072bd87e166c158fb53031c1e692a95e"
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
    "url": "assets/js/235.8fee6089.js",
    "revision": "a19a539cf03c9da0f8ff74b86cc4fcbe"
  },
  {
    "url": "assets/js/236.41c3b9e6.js",
    "revision": "6bd3fce3cd4dcf2bda4477f2457ca234"
  },
  {
    "url": "assets/js/237.b945f1b4.js",
    "revision": "f8c792163eb172c870dba4a56cf02b95"
  },
  {
    "url": "assets/js/238.5652d6a7.js",
    "revision": "9a941fe4729e7df01ecf75b5e9472fd6"
  },
  {
    "url": "assets/js/239.339d26ff.js",
    "revision": "8f9288595a6e042b89da54d750a81b44"
  },
  {
    "url": "assets/js/24.78de70a6.js",
    "revision": "203b069d3a2f431e051e87f69e6b61bf"
  },
  {
    "url": "assets/js/240.e24c5e5f.js",
    "revision": "c649efa31f7211041083941867983a43"
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
    "url": "assets/js/245.5f02437d.js",
    "revision": "693a7e5e92d051c528dd01712ce5dacf"
  },
  {
    "url": "assets/js/246.f273c058.js",
    "revision": "54134739a09184ab0f11c024d7b35bdf"
  },
  {
    "url": "assets/js/247.4f260d90.js",
    "revision": "d6a8b7077ac6be0f7e3e488cc7c2a8d9"
  },
  {
    "url": "assets/js/248.601e1f92.js",
    "revision": "30c7088ede21cb9bc6c9c6da007c645f"
  },
  {
    "url": "assets/js/249.aa952188.js",
    "revision": "fcfadcdc40a59a442b1467b6390b8070"
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
    "url": "assets/js/252.adbdc2d2.js",
    "revision": "47d15137048d3104142cb6879094bd27"
  },
  {
    "url": "assets/js/253.4c89c007.js",
    "revision": "e57973c4be43f0973698119360fcee1e"
  },
  {
    "url": "assets/js/254.510f9944.js",
    "revision": "8d519052b46ec32ed0279d3cc8c1db2e"
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
    "url": "assets/js/258.0732353a.js",
    "revision": "d17131ac98b904b7108c304a21fd4117"
  },
  {
    "url": "assets/js/259.df245564.js",
    "revision": "e2e86ac1fd7f31902d4e5f855e749e9c"
  },
  {
    "url": "assets/js/26.3957fc57.js",
    "revision": "8565308f823b64167cac3c0623628b50"
  },
  {
    "url": "assets/js/260.c26c10bd.js",
    "revision": "2acc525c28c290d0d62f69890e00f8e9"
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
    "url": "assets/js/263.ca2b393d.js",
    "revision": "bc7116c151ffc8a85a34ff27194a6252"
  },
  {
    "url": "assets/js/264.cea777ac.js",
    "revision": "d0b95706a617d0d45b1e30877a0deb10"
  },
  {
    "url": "assets/js/265.7f7bf87f.js",
    "revision": "e751f1657962c1569fe16d7f30d39b80"
  },
  {
    "url": "assets/js/266.1710707b.js",
    "revision": "3bd05d4d0af11cf962a73cf9666e05a1"
  },
  {
    "url": "assets/js/267.48811b63.js",
    "revision": "d3cecd54dac602662d359b1711549b1d"
  },
  {
    "url": "assets/js/268.da6015ec.js",
    "revision": "f67ab763219b95151756b8c2975b32c8"
  },
  {
    "url": "assets/js/269.7faf226b.js",
    "revision": "ab8cf231d681986e756c329905a93ff9"
  },
  {
    "url": "assets/js/27.2b8266d6.js",
    "revision": "3ef7252e75a3a184542806a7a9b34f3f"
  },
  {
    "url": "assets/js/270.e7ebf8c2.js",
    "revision": "d8f294151006e8a52ca96498928582ab"
  },
  {
    "url": "assets/js/271.12bcd1e3.js",
    "revision": "4b5068e7fc1badf024411182ed8e23e3"
  },
  {
    "url": "assets/js/272.59ad4808.js",
    "revision": "03416a6c2409473ec3e697550236237a"
  },
  {
    "url": "assets/js/273.9d74b01c.js",
    "revision": "f460b8a4379561e63505a9b640114a84"
  },
  {
    "url": "assets/js/274.3ebe8cda.js",
    "revision": "a60e6862bbacd82c7412a4dee7d17862"
  },
  {
    "url": "assets/js/275.4700838c.js",
    "revision": "ea8aa4384b25193ab232f6f6b6099553"
  },
  {
    "url": "assets/js/276.c41c511c.js",
    "revision": "8d75f779818a3751e4b6ab60f742e82e"
  },
  {
    "url": "assets/js/277.c98ce500.js",
    "revision": "fa08f39049ce5deb5680770c82bb06a8"
  },
  {
    "url": "assets/js/278.a59e172e.js",
    "revision": "0ffe1dc4711afcb3c01daef9f775f707"
  },
  {
    "url": "assets/js/279.6e18b7a2.js",
    "revision": "9d06e4bb84b112ca51d7bcce2d2aeace"
  },
  {
    "url": "assets/js/28.95d5f6c0.js",
    "revision": "ef1cdee21a78063770b725f5b1d626cc"
  },
  {
    "url": "assets/js/280.6d014f5d.js",
    "revision": "00c047058684471561c8431a1ce846bb"
  },
  {
    "url": "assets/js/281.497ee733.js",
    "revision": "0eb1ff6e336d324a36812d2ab9595ce9"
  },
  {
    "url": "assets/js/282.eec7580d.js",
    "revision": "3055f510eb4ed585769e0adf8929c849"
  },
  {
    "url": "assets/js/283.c0bfb791.js",
    "revision": "933c8fae5d3968369fe61ab4d70cdf20"
  },
  {
    "url": "assets/js/284.2383d499.js",
    "revision": "edd635ea2d103bae20b621f0675cad98"
  },
  {
    "url": "assets/js/285.b1bba65a.js",
    "revision": "cbda72ba9076f780e1bf304adb7137f5"
  },
  {
    "url": "assets/js/286.a289f091.js",
    "revision": "2b003fd7e0aa29473e6489af1c28e6dd"
  },
  {
    "url": "assets/js/287.58494614.js",
    "revision": "91fe00c57cc680aa07a220db2ae13110"
  },
  {
    "url": "assets/js/288.641a254f.js",
    "revision": "4c675c50318da7370bf6183e7e55982f"
  },
  {
    "url": "assets/js/289.13e0e0d8.js",
    "revision": "79e0e2c117a1a697f1a1e10c4a10be15"
  },
  {
    "url": "assets/js/29.cd622e96.js",
    "revision": "2c4cff71d3f642919afa86b7d716ef6a"
  },
  {
    "url": "assets/js/290.77523642.js",
    "revision": "fec8a8be9a168508a543c56f31f9b0dc"
  },
  {
    "url": "assets/js/291.29dd90e1.js",
    "revision": "37b3f7e461d14d50fd2664df6f1de3f8"
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
    "url": "assets/js/294.fca785c3.js",
    "revision": "db5271fa40da72d0102cbc52358bb2cd"
  },
  {
    "url": "assets/js/295.f997630a.js",
    "revision": "d3d4006207f29d2ca0dfe850b571e2f2"
  },
  {
    "url": "assets/js/296.802570fa.js",
    "revision": "ed8d83ef7d72a33b8156a6f978db11b1"
  },
  {
    "url": "assets/js/297.4f4c0874.js",
    "revision": "e624b7ad892937a3ad976feea3f746d7"
  },
  {
    "url": "assets/js/298.d6c6cf2d.js",
    "revision": "af2a9e374a2ab51e50c781319eeaa8a8"
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
    "url": "assets/js/300.c182f583.js",
    "revision": "a830cc4c635747343f8d06600be1cf8a"
  },
  {
    "url": "assets/js/301.710ec844.js",
    "revision": "cb21f6a35d82a2642582257741f9b717"
  },
  {
    "url": "assets/js/302.1144146d.js",
    "revision": "fe39dff90417f31b856f80908eeb13f3"
  },
  {
    "url": "assets/js/303.79c7bc9a.js",
    "revision": "c8b41aeb6a03d493a6cc73cb82b27aba"
  },
  {
    "url": "assets/js/304.afd62b7d.js",
    "revision": "93c54a4ccbfe214753cd889151e62107"
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
    "url": "assets/js/307.8dcf860e.js",
    "revision": "2341bc294a2a847d688a949846dd8b16"
  },
  {
    "url": "assets/js/308.5bcd50d1.js",
    "revision": "da96b185b8fedc5c7db9ac2e93f4bb74"
  },
  {
    "url": "assets/js/309.f80a0627.js",
    "revision": "141a861e1c386ecb1fa0446dff576c08"
  },
  {
    "url": "assets/js/31.8ed34412.js",
    "revision": "31706a77c8d956143d7193a42c2889dd"
  },
  {
    "url": "assets/js/310.639df01d.js",
    "revision": "130c9946152f0ae5b6c38cf320d17358"
  },
  {
    "url": "assets/js/311.bb0756bc.js",
    "revision": "295e500db4eb6b7d0279d86728228ef0"
  },
  {
    "url": "assets/js/312.f56b9352.js",
    "revision": "ceb25882d09afbbe4c726846a923c6ed"
  },
  {
    "url": "assets/js/313.ed92bdb1.js",
    "revision": "612bf897553c5295cc8a49dd83a6e30c"
  },
  {
    "url": "assets/js/314.bddc9a91.js",
    "revision": "62f20f4e89c2f5802f9165c0fe54449d"
  },
  {
    "url": "assets/js/315.aeac7edb.js",
    "revision": "97b2e447dbee21441ed92115e1ac2092"
  },
  {
    "url": "assets/js/316.945fb777.js",
    "revision": "23bd5924f8cb126e3bfeb774a14fb79a"
  },
  {
    "url": "assets/js/317.cdea1974.js",
    "revision": "c76d38b8848b11fe8d526366215258c7"
  },
  {
    "url": "assets/js/318.a3138ad7.js",
    "revision": "44dc46feb4e81d63bcacfbcf7ca80b63"
  },
  {
    "url": "assets/js/319.50e8450a.js",
    "revision": "d12dbbaae723f54ce1a49c68f7082829"
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
    "url": "assets/js/321.21f974eb.js",
    "revision": "c1af96ff4751bfeb21846f03da658f7f"
  },
  {
    "url": "assets/js/322.df1c97e7.js",
    "revision": "58116c0c9bebb7fe81aaed7710fbde58"
  },
  {
    "url": "assets/js/323.05025a5d.js",
    "revision": "343e853ca74bcd768d2fd9b64482c070"
  },
  {
    "url": "assets/js/324.d40c7bc9.js",
    "revision": "c40c664541852946d9bfc76ff69091e5"
  },
  {
    "url": "assets/js/325.714cfc63.js",
    "revision": "dff968b5b276e991e4965007ef40622b"
  },
  {
    "url": "assets/js/326.4dc749e6.js",
    "revision": "67819baf91e2d2e90d7306893ea21a5f"
  },
  {
    "url": "assets/js/327.46e0db96.js",
    "revision": "6e456afa16fc73283964048fd14dbc97"
  },
  {
    "url": "assets/js/328.154ff196.js",
    "revision": "7f970f3dba0b864ae6e4d7c27485de4e"
  },
  {
    "url": "assets/js/329.9490bb46.js",
    "revision": "2e576640e4e86692b735579893fcd0ce"
  },
  {
    "url": "assets/js/33.5540e48d.js",
    "revision": "c2f10aa177c11ac0fb616d0b0e3175a4"
  },
  {
    "url": "assets/js/330.3856b36d.js",
    "revision": "24af9ab5f27e0f56297a0c29d7d296de"
  },
  {
    "url": "assets/js/331.ae6bec70.js",
    "revision": "f786bf7d382155b4b1e2a3ad0546fca0"
  },
  {
    "url": "assets/js/332.c9945fc0.js",
    "revision": "b9ed605eb3ad630f964e821edb3066c1"
  },
  {
    "url": "assets/js/333.e7881157.js",
    "revision": "214a0e4f637ae4d344cf73ac480acce9"
  },
  {
    "url": "assets/js/334.4b4e1ba5.js",
    "revision": "d6b70766060cde8af5c9df0d6d450508"
  },
  {
    "url": "assets/js/335.6105d3e0.js",
    "revision": "7bfd21dbb1ab5c77223527ae0e156ffe"
  },
  {
    "url": "assets/js/336.25b2de72.js",
    "revision": "a5a8edf8f1363b9f0a9478827bf5d262"
  },
  {
    "url": "assets/js/337.c90f64ad.js",
    "revision": "405389e47c5e22fdff4b54e49379daaa"
  },
  {
    "url": "assets/js/338.d74d2c03.js",
    "revision": "74e0335993f6e2dc3b008638f3da0607"
  },
  {
    "url": "assets/js/339.6a9686e3.js",
    "revision": "25097f69632c6a1e52cb03670a4462fa"
  },
  {
    "url": "assets/js/34.7a9a43d4.js",
    "revision": "1f555669ba69bccad562e899993d2415"
  },
  {
    "url": "assets/js/340.9dd2bf8c.js",
    "revision": "9f39827f023cb50dbc624af7d5664818"
  },
  {
    "url": "assets/js/341.0999342e.js",
    "revision": "9ff1a003d9ef14729f33bef2268f2d3e"
  },
  {
    "url": "assets/js/342.606f921c.js",
    "revision": "c4cb55383483c18b09f38ff82ce95188"
  },
  {
    "url": "assets/js/343.725847c5.js",
    "revision": "faff05aaad6c9cdae9737122153eaeb4"
  },
  {
    "url": "assets/js/344.a9fe76c6.js",
    "revision": "b72c14544a522359ef4375b2af211351"
  },
  {
    "url": "assets/js/345.19cc50d9.js",
    "revision": "2791ab7790e736f12ad49c09b2181f62"
  },
  {
    "url": "assets/js/346.2b012920.js",
    "revision": "d269cc7ef1d036bee4e582f8cd20e727"
  },
  {
    "url": "assets/js/347.c7766451.js",
    "revision": "86062bfc5b744d8cd8a7f1b3dd7264a0"
  },
  {
    "url": "assets/js/348.066cba5f.js",
    "revision": "b3e297d447b5127a8db11faf09df856b"
  },
  {
    "url": "assets/js/349.9ab55d14.js",
    "revision": "e834a8eb604cf51c21c95a8f8cd33986"
  },
  {
    "url": "assets/js/35.ef0f867d.js",
    "revision": "cfafb31aa541ec4caca057ed666edbfb"
  },
  {
    "url": "assets/js/350.207626ac.js",
    "revision": "888dc9f3e297df3299300f185a95562c"
  },
  {
    "url": "assets/js/351.53daf851.js",
    "revision": "c9d3b2979d0283436094ec43d3b5b103"
  },
  {
    "url": "assets/js/352.e10718fb.js",
    "revision": "2dc83e56c68eb4359e6c7ee493019688"
  },
  {
    "url": "assets/js/353.3c701dfb.js",
    "revision": "809d84187f954e30d0a211d28bba760b"
  },
  {
    "url": "assets/js/354.acf84c84.js",
    "revision": "5dfcd728020955ca14457c5a632b97ff"
  },
  {
    "url": "assets/js/355.6177dacb.js",
    "revision": "900a8efa2e7c2bf20a0b2347d2fe23e2"
  },
  {
    "url": "assets/js/356.82a2b81f.js",
    "revision": "cf0a66afd70b4ecf819c036cf18f7b13"
  },
  {
    "url": "assets/js/357.0a2b415c.js",
    "revision": "86c669d925494ba5681a429f4284a9d8"
  },
  {
    "url": "assets/js/358.ce3018a5.js",
    "revision": "d9a1cf8a11ba5de2d19d50f7213d741c"
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
    "url": "assets/js/360.1a5e3076.js",
    "revision": "3ca848ecbe8b84694128797998430973"
  },
  {
    "url": "assets/js/361.44b660c7.js",
    "revision": "4639a7a91876ab8f43292f04609886cc"
  },
  {
    "url": "assets/js/362.1a0393ee.js",
    "revision": "08432386773bf10fffa0034b99d70d3a"
  },
  {
    "url": "assets/js/363.650d778a.js",
    "revision": "a9fadc03ef009dc200312f8b6bda34e5"
  },
  {
    "url": "assets/js/364.723b2660.js",
    "revision": "81e41293a1c55b98459c777b0cb55ca3"
  },
  {
    "url": "assets/js/365.9fb7020b.js",
    "revision": "57494d0ada702c19a8327c04d7e70daf"
  },
  {
    "url": "assets/js/366.a88bbd19.js",
    "revision": "bcb9761238963018c69e0901fd2971b5"
  },
  {
    "url": "assets/js/367.ddaac428.js",
    "revision": "280e7c67aa8f7b20799fdfb13125db2e"
  },
  {
    "url": "assets/js/368.83926200.js",
    "revision": "6c2f173f929e094c38b49d658e4c608a"
  },
  {
    "url": "assets/js/369.05456a35.js",
    "revision": "ec5a44a691182bb7742d364647766fb6"
  },
  {
    "url": "assets/js/37.703edd0b.js",
    "revision": "23fa579ee2dcfdd6e1b172f7a7c774c7"
  },
  {
    "url": "assets/js/370.db4c1b60.js",
    "revision": "ef3075fc08f42be327f492e34bb92b94"
  },
  {
    "url": "assets/js/371.2383ae85.js",
    "revision": "5a97467af7a8e7f8c5241c27a2d706f9"
  },
  {
    "url": "assets/js/372.602b80ef.js",
    "revision": "4384fa0fc8417e809e5f26fa8fa4e94b"
  },
  {
    "url": "assets/js/373.b1dc1e0d.js",
    "revision": "bed79d33141d3170747d27b73a11df03"
  },
  {
    "url": "assets/js/374.d7d63844.js",
    "revision": "1600f771b719863ca30a97a69207b018"
  },
  {
    "url": "assets/js/375.2f7181d2.js",
    "revision": "cdfcfd257ffba744a33717eb367ffa74"
  },
  {
    "url": "assets/js/376.5d44edad.js",
    "revision": "8719ce02b3fa17b040be947649cf4093"
  },
  {
    "url": "assets/js/377.34d04b05.js",
    "revision": "d37933b839f62b49cb0587891de2bb5a"
  },
  {
    "url": "assets/js/378.ff7cd8c5.js",
    "revision": "1a3749955592c8770d30a6189a71fa8b"
  },
  {
    "url": "assets/js/379.49c50fd1.js",
    "revision": "3849b8e6aa64b7d0ddce3cc9bde762cb"
  },
  {
    "url": "assets/js/38.37d54fc0.js",
    "revision": "b1eb8e5493b2413a0dc8e7f2b6484ff4"
  },
  {
    "url": "assets/js/380.18f6877a.js",
    "revision": "4addc8cfed20e97a6f1436de2d5c3480"
  },
  {
    "url": "assets/js/381.ece71b9c.js",
    "revision": "8ef5304ced5fca91f50eda2ef07182d2"
  },
  {
    "url": "assets/js/382.9cc92c7d.js",
    "revision": "fbb4d985cf35ca1dcfe47635c0cf355f"
  },
  {
    "url": "assets/js/383.3eef9f8b.js",
    "revision": "61eb3a0e002e1beb027f6653a4ddb687"
  },
  {
    "url": "assets/js/384.726f9ad8.js",
    "revision": "2ef5222670923cbfdba1b47745f6b9af"
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
    "url": "assets/js/388.85ac15ef.js",
    "revision": "9c95a5add2f184455c222ab131f87acb"
  },
  {
    "url": "assets/js/389.cff7710a.js",
    "revision": "218b77c842389a267dc661752b4b231f"
  },
  {
    "url": "assets/js/39.8d3df8ce.js",
    "revision": "91adb275ed6d8bb20f910f4e130fc638"
  },
  {
    "url": "assets/js/390.deb59648.js",
    "revision": "4382ee2536290a3199a712aa627c3d9c"
  },
  {
    "url": "assets/js/391.7961fdeb.js",
    "revision": "2a8cc190a7979b805afa2ac631deed3b"
  },
  {
    "url": "assets/js/392.67638e03.js",
    "revision": "7eda14be919881cb98398b9e8344eb47"
  },
  {
    "url": "assets/js/393.42b025eb.js",
    "revision": "03baf09fe92e46d8e01e4baa98264002"
  },
  {
    "url": "assets/js/394.c47b46c5.js",
    "revision": "32787c660f72faeec5c468551adb6dad"
  },
  {
    "url": "assets/js/395.feefbb43.js",
    "revision": "ce0cf67ca6c93d80cac802c3effe6f99"
  },
  {
    "url": "assets/js/396.4b0b2db7.js",
    "revision": "888bbb22e9841b97d90b091985a511e4"
  },
  {
    "url": "assets/js/397.c4ba3d8c.js",
    "revision": "de1af671efac08ce655b3d3d7b58b3db"
  },
  {
    "url": "assets/js/398.76fd0a1c.js",
    "revision": "e1bd0d47829a25d1b49240e8a51814a6"
  },
  {
    "url": "assets/js/399.3bf45f1d.js",
    "revision": "884ed21abf577f258cde4fa28b49c114"
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
    "url": "assets/js/404.df15795a.js",
    "revision": "343955307ee981381fa4836a175a2f8f"
  },
  {
    "url": "assets/js/405.4aff29b8.js",
    "revision": "b4a5387b9ce27b2e0ec67f38ce4dbdbe"
  },
  {
    "url": "assets/js/406.4c87bce1.js",
    "revision": "e693266d806f082efbb50010767836bf"
  },
  {
    "url": "assets/js/407.c935d117.js",
    "revision": "b35dc37a75bdcbdf41fa330de17af641"
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
    "url": "assets/js/41.33d3a21b.js",
    "revision": "36602f5077e076e4a70cd5bd66172dd2"
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
    "url": "assets/js/43.40b922ca.js",
    "revision": "ce59031cb5489b3615abda9279a4fbd1"
  },
  {
    "url": "assets/js/44.647b348e.js",
    "revision": "fc5defe3844281fc52f879ac1a1a39ef"
  },
  {
    "url": "assets/js/45.4a4da04a.js",
    "revision": "43c2ee46d571a3cb16c220718659fe4b"
  },
  {
    "url": "assets/js/46.c932728e.js",
    "revision": "fa0ce30be40cfb9765170f0d424b0575"
  },
  {
    "url": "assets/js/47.72bace1a.js",
    "revision": "d6f6b768c80597a44a1f36fcb7e23405"
  },
  {
    "url": "assets/js/48.eddd4ae1.js",
    "revision": "a3adb6ed4179765bcefbdbbf69fecaca"
  },
  {
    "url": "assets/js/49.c96dfbc4.js",
    "revision": "bec945004f1d8b47bdfc0338ac1cbaa5"
  },
  {
    "url": "assets/js/5.34a45051.js",
    "revision": "bd7b1d4aba8586b8cd2f07e9f38e5abe"
  },
  {
    "url": "assets/js/50.6bda6f3f.js",
    "revision": "7d30502288f4953b6c5966b303ce54a5"
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
    "url": "assets/js/53.304d5783.js",
    "revision": "4b2cfc3c00ff6ad88192d5b749e3acfd"
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
    "url": "assets/js/56.8b1dba27.js",
    "revision": "ee37e93c51f3fcb3a5dd480ddf6ed84e"
  },
  {
    "url": "assets/js/57.4eba7d2d.js",
    "revision": "38bf2b480baa1fdc0a5bbeb4b72e6f88"
  },
  {
    "url": "assets/js/58.79a9b71a.js",
    "revision": "7661f94cff75c2470e4352e598d06cf8"
  },
  {
    "url": "assets/js/59.4d15ff31.js",
    "revision": "db9f75545d01643220526b131bc3d2ba"
  },
  {
    "url": "assets/js/60.7c4935a0.js",
    "revision": "51128ecca46114472d5b0848046d182a"
  },
  {
    "url": "assets/js/61.124a4d55.js",
    "revision": "9814c7f089c4d9340bfe8e0b54325e75"
  },
  {
    "url": "assets/js/62.b9a38620.js",
    "revision": "d2ee3234c063eb0f4951ee881ad15446"
  },
  {
    "url": "assets/js/63.22876f0b.js",
    "revision": "f129e55d2a9ead3839ecff01a1c755e7"
  },
  {
    "url": "assets/js/64.6334dfd6.js",
    "revision": "2deecb2af8eb434619e6e7ec180266ee"
  },
  {
    "url": "assets/js/65.7f95a9f2.js",
    "revision": "312103d5cba566a2e1a7e1ac14b2af86"
  },
  {
    "url": "assets/js/66.696d6c0d.js",
    "revision": "4c8f40f421a398408017bdea05190d29"
  },
  {
    "url": "assets/js/67.82ab82f2.js",
    "revision": "9fda0a032b1b096b2e3b86cbac980e06"
  },
  {
    "url": "assets/js/68.c31a335d.js",
    "revision": "511681d69f61f8fe6e63038a3fc9422e"
  },
  {
    "url": "assets/js/69.3496a6eb.js",
    "revision": "9807cae75c49a146333e893b9b6ab680"
  },
  {
    "url": "assets/js/70.b819c977.js",
    "revision": "0b32d62a1461f340100ab129bc69dd75"
  },
  {
    "url": "assets/js/71.292422f2.js",
    "revision": "37630d382222d4f1d9e8a9323af15305"
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
    "url": "assets/js/74.0595cd39.js",
    "revision": "f430032926b5a777b34c2ee907bf1a72"
  },
  {
    "url": "assets/js/75.3ae6a6e1.js",
    "revision": "0d5e7e720147ba7c882c9991aaa54fdd"
  },
  {
    "url": "assets/js/76.01095d87.js",
    "revision": "1cc040b4494aeb855074e75ead1fcc25"
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
    "url": "assets/js/8.084d3998.js",
    "revision": "1b4aeaef7517342317360e0307bbb580"
  },
  {
    "url": "assets/js/80.78e2fa96.js",
    "revision": "2c950579f90e271a2d9a337921a77ef6"
  },
  {
    "url": "assets/js/81.7c54b612.js",
    "revision": "cf0d97dd7f1b016c8fef5bfc7b8537c6"
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
    "url": "assets/js/84.f8fbde98.js",
    "revision": "b4de60f601bd8904f98a6d0e5894c964"
  },
  {
    "url": "assets/js/85.d91f6bce.js",
    "revision": "ccd54982fdf984f88dc034264edd2321"
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
    "url": "assets/js/88.b389949f.js",
    "revision": "438eae9c461e7ec52a25cef73a71dc82"
  },
  {
    "url": "assets/js/89.8cf4e0bb.js",
    "revision": "abe4c0a6078e8ea416c45512c00006d9"
  },
  {
    "url": "assets/js/9.da5b5ac9.js",
    "revision": "026e9f59de93bec835e6122ae2e061d8"
  },
  {
    "url": "assets/js/90.d0f1c662.js",
    "revision": "8e8b1e3d00d0195cad74e636969cdb47"
  },
  {
    "url": "assets/js/91.dfb67e91.js",
    "revision": "2826d3ed2a850fe3ec1b0bfdf31f3f79"
  },
  {
    "url": "assets/js/92.d8b53a59.js",
    "revision": "e6c86ddd4ce69a02d9a20cee8bcc0b0a"
  },
  {
    "url": "assets/js/93.2b8a6f8c.js",
    "revision": "4bae8d96d272d75668125451322ee072"
  },
  {
    "url": "assets/js/94.e896922c.js",
    "revision": "f9ca911902d21f24a48f0a6a5761c8f7"
  },
  {
    "url": "assets/js/95.5b81cd81.js",
    "revision": "62af093b7b71ccb2f113e080c59dd8e0"
  },
  {
    "url": "assets/js/96.0c9b3431.js",
    "revision": "593080cb1569886af57823b3ce0b7ff0"
  },
  {
    "url": "assets/js/97.554ada3c.js",
    "revision": "62fbc07752678e822b70a7ff00a43dcb"
  },
  {
    "url": "assets/js/98.1b81b497.js",
    "revision": "3eafd75e4cb50344fb0b3eef8db68b1d"
  },
  {
    "url": "assets/js/99.09e3d9bc.js",
    "revision": "d5bc9098229cf243b6d717616c685450"
  },
  {
    "url": "assets/js/app.2f892414.js",
    "revision": "64845ce5aea694ea2d859a26f34be287"
  },
  {
    "url": "assets/js/vendors~docsearch.a4198619.js",
    "revision": "d66481b8b9070e66a0d61d98e5f0db85"
  },
  {
    "url": "index.html",
    "revision": "8419f20b01fb58581525d69290cd8edf"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "3b26b844c5d4ca1584a5577d1425efe5"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "17574d3654b80279ac24d2bb4ac5ebd4"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "9683a564df8f08d0f5cbaf17ad077f37"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "92c2bb8681b2910e49a05e4c8fc4aee8"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "c75a3adf21edb7aba7b73bc2d907429c"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "1cbb714104efbb9c8d2d6a4cd6e768bb"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "4dd1057f986a5c44fe69398594bebaa8"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "e010fdd3a8981f08039fbf71997ed6b4"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "07b6afd34e155d87491d9b6c82d18d98"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "b67306099e6948adddad3d2d560c1ddd"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "d83329442db1a70a2e24073cc60c55e3"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "95f9dc9173d547879a143510f378e7e6"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "c80a89cc4730f1034dcd48b95fedf26a"
  },
  {
    "url": "master/api/index.html",
    "revision": "5c1a379d6879156b4c49ebee72d0b5d2"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "5b89796be3edb8905c639ce21fd13700"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "2b19d79f8a07841f0bff82dca6692797"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "fd49edf3e5eb34dad89d21929d983aba"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "e3325e08a03453537eba8fa250236373"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "51971680fee7571ab79cc003ce80e937"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "a46d813e0b9bcbf67baa060909e0b080"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "7dc4eacf834e46711b8a590b2a1514b2"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "819be39b664333a7859d49b23c2c97d7"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "b40370edcaaa12ad7fd26ebb96a47055"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "f165c7cf71270380a9c1e062f49e6888"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "5c203bc13deb80cc303b663aca2447ed"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "90c606f5496038db3c1b1bd27e363311"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "557f326dfd550b4961e0bcf732cd5467"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "8108f14b20c1273397ecf22ff1a726b2"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "1da7f67570969e7729b4df0c77936c7b"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "f2d75b31b8caa51f292a28986f668d98"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "dc0d85c3ab764139b3fc6f1c593f1ff2"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "c8a7fa6dd3b3824463738a6c77c36f75"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "39405e39218dcdf310c0f3f27dfb6e0e"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "7e5cda56830a88fdbde1880e6fe93a1d"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "1a73888c5db655ba242633511b37ab07"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "6928be06f92987f6ffc3ccce7d6adf4f"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "68ec6bacf9f4f4792a120fae9c2ff229"
  },
  {
    "url": "master/packages/index.html",
    "revision": "fe0c3c5c595b2f5a999816909404121d"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "1870f41b02b55d8e51d04252ab3cccfa"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "d13feb6acd3b3be17a540c01a2a1b35d"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "9ec620f56626c8d2331f9858104d3e8b"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "991c2e435fd5a81d34ad33b2ac363d2e"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "3abc68d0110c0716e318c04f8cbda256"
  },
  {
    "url": "master/packages/views.html",
    "revision": "4724ffef7a9c8900a4af85ceacb735a3"
  },
  {
    "url": "master/performance/index.html",
    "revision": "ef5a9e8ffbc199262b28193eef546ea1"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "6732fa7505fb510e94d6681f41e3ef3a"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "ca92d30d038840d41cd378bf1928a11d"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "c0a6ca6d3f5f171fb4227fabd18fc9ee"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "0f4e7dbfc0c5ed17f937a9fac5b72acc"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "893c6546d96d39cd8a10d8b7dc5154b4"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "0307778b6cf64133acd3c4dd7e8c69d9"
  },
  {
    "url": "master/themes/index.html",
    "revision": "71619d0b300cb97b59742f9454420441"
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

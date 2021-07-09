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
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "0f7ae10e246ed1509480b78bab9bd495"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "c9cb5b5a3ab9c3fc0049e8d2b964c74e"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "cb76d76b5c3db08a8cd1dac7ff467b91"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "5d12e5a352eebe95b357bcc6c83ca3bc"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "f48088a53ed3462c8d2d5138e2dc28cc"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "6f61d240f93e749cb9e0b536bfe212a7"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f8466e3c1b5cc3726e22536a78d0bac2"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "198262eb0d6150c8284d31ffa0b953fb"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "60f3daaa62b14841661781f372abc6cf"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d63d24ce56218797f362d5039c4de554"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8561dc2974c2a41479f69c4d1c47967f"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "8091750523159cf9e577f1b99c8b1a7a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "35d04c24e92b47ea52583dc85ca74ed5"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "b5763e637cbdba4cd78a5c6bfea81d56"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "cd01989e66c27a55e09e7462410285ff"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "e40582403a20aeda4a49fc5fd30ff78c"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "248478c2ca03cc94aa4b55dbb8718edf"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "8cecba21aea73afccbf16b5090ae5dba"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "e85bf894897e45c217f7614d3f5dd1ca"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "93cbc071f53b02a9571aacc139b38a82"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "b2799455c6863eb15ddf0dfed77f0f16"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "c62c2a5af54bc442399e4870c276a1f3"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "7870b8492cd69616c2efa51c5fb81339"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "e29dd530096bf60e3068dde686ed4272"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2f7fac3a4a3322003020791eed4ffe03"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "f674b92891021bc03b931da79bd07d28"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "78f5aeefe27ee878e6c6864913a2937a"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "3ae02d4cc2aca48c80767292961b1d8e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "b3c2aea34ebb5244797bfaa23ef4934c"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "83dc3a7a20bbd4874ac44ded94442cce"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "5968e2cfaf0fe4dd058765b2403d9048"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "34a2bbd213ce62809e7db5bf5b8f7216"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "87e43a4e1a692a4b8d7e6f0386fad754"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "2655fcb7907d42a42800a43015ca2745"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "8661096660cd767fd3cf5dd13631b6b9"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "adf3727bab5960558ed3600926f4afee"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "1408063a237a099eabcf3390d5c6a6d5"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "ed94a01e32cbda982766c4a3c2108611"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "0f2e541c09be9ee81ffcd6c32a05ca2a"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "ad94fee67569038f03c4e79c473a8e08"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "d1743ca6ca4e1fcf525d2faad17b1161"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b1f8226c059b23463bbe8a1570a41bef"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "c8bc989f00b67af83be471e75910fa14"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "a0bfa5d32221b39824ccff2c135549b7"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "b07fd277c2bf9c25861a2bb74a429afc"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "64b27fcac88d9d96d48e67616a386ddb"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "fcb9fcbe3a88e5d6fe47dddcb8049f30"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "64c04526b3de6dbc4b77c0ba32dc4568"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ab409a24715d2783c6f6b4abad3ab30d"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "4ada13ecc30e2acc3d48c5e03dac2a24"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "7eb595637ce632bd524a1bf5dd6d5c68"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "fe2653505ad434156c7abd3572fff3b9"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "09a65fae90fc9c11a8a0273acf0aac56"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5c3bc15beb6b38df1f3856857565ed30"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "9c83d17638c7a27d88d96292d1fbdf6d"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "9fa8fcedccf0cf93130fac825d996374"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "cc498b2824cd35c3551520db825570f3"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3f1434a1a126a7930e430fd9e4df737a"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "382a3adace674ba5d48ca6fba9dc3596"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "212f4b54358db727cac94185316b15b8"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "f3d90ce7816c00ab930fd4b1f2fd7a28"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "e9c7b352a2eb9552f547a8cad99fe2e7"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9495eee1786cf4e6f453c05177e47f0f"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "440507cfbe11e0094fe6fc8ef188e30f"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "b1aebda36d5bcf6605d888853539d64d"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "9ee2e6486321c4997a4a3fcc13b24621"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "ffde484335069d1346c47e46bd29574c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "89ed5e89ef3ded9ced53e8084739b612"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "eca9efef2cab164bcec85b949f3fbfc3"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "7ff3ed5ea66ce3fe0cb5e0eba9acb9e8"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "2ce7c96cff1a124b44ba5bc4ccde8cac"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "7ab3d02bfa5a0130ea9f5d5912722dff"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "2ae985bb297e3409b1949d86f2b5b794"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "82d4bcc6eeb434fc36d763dccd6e6109"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "1abfab6078bdfa550d554f54da2422c1"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "578320dab650a2cffd71f7e07b35fcb8"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "20aef4fd119db7aadf46cbe8da494a26"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "9fa26dc869f33f237c7ddbd62a9449e2"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ee61414961d5f6815c6710d1b5d8bacd"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "271d97830ef914ae91352bd1ff78c64d"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "fbf504e51bb647eeca808712f55f638e"
  },
  {
    "url": "404.html",
    "revision": "9c4120efb5ebb81a1d3d84e51b59a82c"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "229436dddc5541cc57d9d271908e7d30"
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
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
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
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.7dcc5b47.js",
    "revision": "37b57ad288c764c09246003833dd5746"
  },
  {
    "url": "assets/js/11.1cdf604e.js",
    "revision": "bb203076b46c76dde5ac40393a43ba7a"
  },
  {
    "url": "assets/js/12.7f9a66c5.js",
    "revision": "f57a21c7b1bdeebeca4acc2620e1a622"
  },
  {
    "url": "assets/js/13.9c2459f0.js",
    "revision": "187af649d689d9062254f47b1642bfa6"
  },
  {
    "url": "assets/js/14.f1f6e33e.js",
    "revision": "fc6fd62b2fd662e2e7e19cfca2cb811c"
  },
  {
    "url": "assets/js/15.319ec07f.js",
    "revision": "4254641a7681b6d9235e810f0c0df679"
  },
  {
    "url": "assets/js/16.70590044.js",
    "revision": "94242b46c5c37a12eeeb15a22de0723a"
  },
  {
    "url": "assets/js/17.fa4983b1.js",
    "revision": "767c534ad97d7775e153ba36ef6a685a"
  },
  {
    "url": "assets/js/18.46d3613f.js",
    "revision": "806ba36d4643e586b186af3e0d083195"
  },
  {
    "url": "assets/js/19.fcaa2cfc.js",
    "revision": "a2f7f2082bffb59b811f17d039e99fac"
  },
  {
    "url": "assets/js/2.7f066290.js",
    "revision": "10f0794982f89da1a31ebbbce7b5ecbc"
  },
  {
    "url": "assets/js/20.038f829b.js",
    "revision": "3fd44851d9a518476c2dd83af3627076"
  },
  {
    "url": "assets/js/21.9e54701a.js",
    "revision": "949ef418e30404187a1b59fe6afc8b8b"
  },
  {
    "url": "assets/js/22.4382ec7d.js",
    "revision": "d262607c250f572d0389501ea6c843cf"
  },
  {
    "url": "assets/js/23.c901ac0d.js",
    "revision": "6132fa3360f0503b9838eac5a6ece57f"
  },
  {
    "url": "assets/js/24.449c595c.js",
    "revision": "40096c412aa25e075d4238667f106fe0"
  },
  {
    "url": "assets/js/25.f6001253.js",
    "revision": "6aaadf0f0e5be51f0b08d4d2acae5ae2"
  },
  {
    "url": "assets/js/26.4b7e4065.js",
    "revision": "09c0af6d0602a1d354adb6f5f7c9a23f"
  },
  {
    "url": "assets/js/27.bc57f75a.js",
    "revision": "4bc713d87d0e1ba8fa86de8f5f18344f"
  },
  {
    "url": "assets/js/28.f70227bd.js",
    "revision": "160dd91b81c24be1a62c68593689af67"
  },
  {
    "url": "assets/js/29.f7d7bbfb.js",
    "revision": "5969e1b2572bf123a8031d73fe3be7cd"
  },
  {
    "url": "assets/js/3.e24f2e4b.js",
    "revision": "2d852947621a5213fd0b65464e5ced79"
  },
  {
    "url": "assets/js/30.1e6af34e.js",
    "revision": "b36a0963df5d385900830e19c2ab1fb1"
  },
  {
    "url": "assets/js/31.f35f2aa3.js",
    "revision": "567e64f1e76f83fddd018d4d383b4eea"
  },
  {
    "url": "assets/js/32.132f3208.js",
    "revision": "441a765670658e86acd2ec9f8a51b8ed"
  },
  {
    "url": "assets/js/33.6e66b10d.js",
    "revision": "a7b75b2f5711ba01d2e6bdc84b5db13d"
  },
  {
    "url": "assets/js/34.1b67b6c2.js",
    "revision": "f7fb57818608fe338b532ac47df1c75d"
  },
  {
    "url": "assets/js/35.dec8a573.js",
    "revision": "5942a0efd9d82f4ef128e7e70e7dbaf2"
  },
  {
    "url": "assets/js/36.6a76435d.js",
    "revision": "3937cdc42b05a6a3ec49ce7cfc5dd072"
  },
  {
    "url": "assets/js/37.06f01b18.js",
    "revision": "0888ea5f89a6ddd6c5b42ba6e4c43892"
  },
  {
    "url": "assets/js/38.573fa497.js",
    "revision": "f9f3fad0c5bb47de07f610eb0a0484a9"
  },
  {
    "url": "assets/js/39.f3e1f10e.js",
    "revision": "7d36555adbf42ded45f211810437b931"
  },
  {
    "url": "assets/js/4.c2f5df46.js",
    "revision": "a247591e9c385818bee302f1109b2e30"
  },
  {
    "url": "assets/js/40.f6126885.js",
    "revision": "201e71715ebdc098957bcf526bc3b80b"
  },
  {
    "url": "assets/js/41.e9c4260c.js",
    "revision": "7d67fdf514e5cb7627cc0e217471c61b"
  },
  {
    "url": "assets/js/42.06b60635.js",
    "revision": "2cf06d9ab857052124a6db3e6be6a047"
  },
  {
    "url": "assets/js/43.8abcce28.js",
    "revision": "9581b76269cb6fb8f9f891cde0fca7f5"
  },
  {
    "url": "assets/js/44.374cd2e2.js",
    "revision": "de1b4806f3954657059f2f6c5aeadd49"
  },
  {
    "url": "assets/js/45.75ab8282.js",
    "revision": "b180806736c29e1a522df15a6bb28cda"
  },
  {
    "url": "assets/js/46.1f522a1e.js",
    "revision": "fd722b4c0c017453aea7c76210a3828c"
  },
  {
    "url": "assets/js/47.695b3274.js",
    "revision": "6b5c7496b8fab1e5d910f76525b471dc"
  },
  {
    "url": "assets/js/48.68e8fefc.js",
    "revision": "8b7ef001eeb4426641b42d4d862167df"
  },
  {
    "url": "assets/js/49.029e9aff.js",
    "revision": "67e79cd111d49530c2cb96472a6dbb06"
  },
  {
    "url": "assets/js/5.06f6917e.js",
    "revision": "e20eca1921bd8af68f1e7344a99f5c9b"
  },
  {
    "url": "assets/js/50.8ca02e17.js",
    "revision": "cb578a89c3ccd8b9c4b0c79415846624"
  },
  {
    "url": "assets/js/51.48480778.js",
    "revision": "6fd8575e7978c460a0ac3f9a7dc6b82c"
  },
  {
    "url": "assets/js/52.b7a6fff8.js",
    "revision": "2204fc69c7f62e06e169031749268a4e"
  },
  {
    "url": "assets/js/53.f597282e.js",
    "revision": "2bc5b7e972f4b16a7d4b02c76c606383"
  },
  {
    "url": "assets/js/54.10bc587f.js",
    "revision": "bf480804a62b031d51a1ed6b40ca3c70"
  },
  {
    "url": "assets/js/55.7aff4aa1.js",
    "revision": "8510ddbc7a32e815605c8961be931856"
  },
  {
    "url": "assets/js/56.3e2a90fb.js",
    "revision": "4449098cd4518fb29622c159a6725519"
  },
  {
    "url": "assets/js/57.6720e23f.js",
    "revision": "190c307c5625818ec51e4c0bb69aba14"
  },
  {
    "url": "assets/js/58.f2c354c3.js",
    "revision": "b6a9fa161bb905e3afaae37cbc0a6c9c"
  },
  {
    "url": "assets/js/59.15d19841.js",
    "revision": "64c5ea7c708456fb6aa0e014781d02e2"
  },
  {
    "url": "assets/js/6.5c9f72aa.js",
    "revision": "396bde4b7568dac0adce6396e165eec5"
  },
  {
    "url": "assets/js/60.fc3ccd24.js",
    "revision": "26af37d29a4845405fae43ab2bb4f8b8"
  },
  {
    "url": "assets/js/61.5dc6fb25.js",
    "revision": "c892916eebbe09cfb99b98a8d454a885"
  },
  {
    "url": "assets/js/62.9047b57f.js",
    "revision": "6aa493595f4b9fbb8758d9596cc00412"
  },
  {
    "url": "assets/js/63.8ef41104.js",
    "revision": "3d9fb7f9845006da8cb2a0917582ff2f"
  },
  {
    "url": "assets/js/64.54991bba.js",
    "revision": "95a237505a2db7d3fbe5488b79ff2181"
  },
  {
    "url": "assets/js/65.be685fac.js",
    "revision": "224917dd34a8053da9ae8c93fc7e9a06"
  },
  {
    "url": "assets/js/66.567cc65b.js",
    "revision": "09f0be5fe6236a52e53c6f1c2282427f"
  },
  {
    "url": "assets/js/67.c5650f42.js",
    "revision": "383711473b5a34126764f19e8c23de30"
  },
  {
    "url": "assets/js/68.8ffc250c.js",
    "revision": "81f16dfeea65d773b9c964950d41f989"
  },
  {
    "url": "assets/js/69.4f3eba7b.js",
    "revision": "a3ebab81f882a13c5efbe683084ef323"
  },
  {
    "url": "assets/js/7.2fe3bb02.js",
    "revision": "2b29cda2826659bd87a106e9bac5d33a"
  },
  {
    "url": "assets/js/70.7001dade.js",
    "revision": "574ba51894389d51def7c75afc43a2a3"
  },
  {
    "url": "assets/js/71.24b0a30d.js",
    "revision": "a9d2ca906e29870326ee0bcb6526471b"
  },
  {
    "url": "assets/js/72.1af7ef0d.js",
    "revision": "8ac57a69b3e4f25bb7e83e1bb2987017"
  },
  {
    "url": "assets/js/73.45319e43.js",
    "revision": "12453ff4858a175e738ba670b2f614d7"
  },
  {
    "url": "assets/js/74.81ac65e4.js",
    "revision": "459df5daf14e22c9fa7b03de1be28e3c"
  },
  {
    "url": "assets/js/75.53680175.js",
    "revision": "57fc53a7b591ce7e4bfc5359566c6ba6"
  },
  {
    "url": "assets/js/76.5ac56754.js",
    "revision": "0cafa26e95cbe8b4e345540634af984a"
  },
  {
    "url": "assets/js/77.0a08e6c1.js",
    "revision": "d098bc6dbebe2665ba59b36eab39ceae"
  },
  {
    "url": "assets/js/78.72f3dd6e.js",
    "revision": "69e7c1dab2b1f2602aa46775fb3de5f1"
  },
  {
    "url": "assets/js/79.569a9924.js",
    "revision": "d86677cf9f5b6803a1a1eab7c37d821c"
  },
  {
    "url": "assets/js/8.e773b0b6.js",
    "revision": "d506843bd5b515f5c42a36e93e85086f"
  },
  {
    "url": "assets/js/80.e6246cf8.js",
    "revision": "0391d12420b93f50bb61ff7632a9fefc"
  },
  {
    "url": "assets/js/81.028e2e8d.js",
    "revision": "c03ac0709278ebc268a0f0cd84366ed9"
  },
  {
    "url": "assets/js/82.4040738e.js",
    "revision": "c06070ad72317af6959247e9ea664c01"
  },
  {
    "url": "assets/js/83.382fe0aa.js",
    "revision": "e7aa0933dffbce6a74d154b917e84127"
  },
  {
    "url": "assets/js/84.b152ea0c.js",
    "revision": "a85ad5af79951752ea313d77489dab95"
  },
  {
    "url": "assets/js/85.a77934a1.js",
    "revision": "fc4becc511a753c639c704d1f6d3a60d"
  },
  {
    "url": "assets/js/86.255f4e2c.js",
    "revision": "7019e5fb3e6f93d3395890716d212ba8"
  },
  {
    "url": "assets/js/87.ce7e86b9.js",
    "revision": "a673c597c072b53dca21d640653d80e3"
  },
  {
    "url": "assets/js/9.bbedbaa2.js",
    "revision": "bf23b3715f0cadeb17f516e09e522128"
  },
  {
    "url": "assets/js/app.19897aa0.js",
    "revision": "f0045ede883a63605f16bc582864e6f9"
  },
  {
    "url": "index.html",
    "revision": "36a2247167c22b53063d25f69c2badae"
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

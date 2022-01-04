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
    "revision": "72a1866f21f8b0548dd9ed279d170bc5"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b791df5a5971599ebb7b0d1a7a441661"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "f407c66938fca0eeb02df2b9fa45608f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "52352513d579d8e0526d58eb3db51475"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "9de5ac6e5d7f536963f7f4cdcc36d773"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "8476875d85b42ddfeb761f8dec76fb82"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "33836f59790be005e9052ee7ca120535"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e066ea67a29e5ff6edf69cab45cf4a43"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "22253ba3ff3ceff8e8cf8033b53eb1bd"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "6958390d8f0decbb750e6ce7c906f5d7"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "252cbd6bf42c0f7ecbbfb272d0d0b602"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "9add9fbe17d64b15b9b3557d0825c602"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "f04a0f4e1f76e4f9ca4a7dd6418e4a9b"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "cf6e68e9fe28079e260ef0f6e07691c1"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "2c524386f909730c912ae3174aeaecf0"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4a43156a3f0a182919906e28813ec3d1"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "1806887376f3578759cfe2de6eff9b90"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "9ea46e09b6b9f248ac21783da779245c"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "000e36f197493a5c410154b12d3bdc28"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "a564be5ca5bd7ea61b8a51c95dfb6974"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "89190c223921f51b3df0f57cc74bcf47"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "76419910b46d0fbbceae724acd039f60"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "2a355578bb58b2ffd0b71ad4f5c05dbf"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6cae12bdaf65f7e1bffa814210e38dd4"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "5581b94ae18a7643bc0c2878d401a3b2"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f276cf08b9dae449c82c5fdab2cb139e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "4e6993595a132ca80bc9b2a060c962d9"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "2c5c84a38fd2dd2804661234d1b3f178"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "86c162f210c733aa98685b1fab95bd25"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "7ad6bb4c976a436b67bf150271a02d7d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "67580fffb25425ac1180a6fa164726b8"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ff20c79294136f08f7b6fb5b55525571"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "07cfe987553fa45dd0fc3bfc0da19862"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "89907211c3c37cd8d62a52aa3806d9d9"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "8234423c287c9071122db3614bdb962d"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "3d59f6ba79f8d89fb47c76e94c245d87"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "a08906d8be1d85db1e4ffe6434fa5093"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "93b3efc0c1f6557534eafaf76972f544"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8ab1182bcf0c2056b8f01f4b9d4600e1"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "f0e1df5e5df831d0f83849c3342e2f94"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "1817a919369e0d0447e086d7f4642b75"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "28a497e67f8cc5c02b4e752bcac0956b"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "bdd82305a3065c7207008cbbd8d44588"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "34481830e6d4a6a5cd4923b2f68178d5"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "36543055138a81c3d86b80954ef5a162"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "11463032556b112e1df0f796bef4d4dc"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "34b5f345b0809c1184dd65695cf3eee7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "eded1bf93291d6c29ad22cd33c1901ee"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "f7eb3c99735bb5d8e23d18398083aade"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "3c41623de724d83f168829cf8d3a4e28"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "3d4cca471416dd1e9113122e1c756766"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "2bae021256dd19803164c15d822e136e"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "bc99b5af436c7d11934fd684c32c8319"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "a3595839044de6015c3409f367bb11b8"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "f0259e5ea88eb1a3a5f1d41a122f15c9"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "6f6746c7b59f36f660e94ec6b7b802fb"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "f285b9f26e1bb69407353687b1953b4c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "bac9ecf752184db849b4d1ce506565e0"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "e3b9b3dbec3ca464ef91c5f004885fdf"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "289c043ee18d47c756be492cf9278052"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c66916ed2207d062f22359899831b9ea"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "8637d38eb1e388f8c2927ec4ea594dba"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "c18c61b51f4c76cac47483a6d64e3acc"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "29b7799861fbeaeef5399cbab372061c"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "e45e7fa294f0013df8071e475f9f2b95"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "112a7ec52f1366286bd3dabfc9eefb8d"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "ac8930e83caba482360d31298f1ad264"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "6977a2fa9ba137b6fc512b2628263fcf"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "24fa0e00d0f6df37bf16b1bde3e3c8ac"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "710cb11790a48698459c5b4e3a48631f"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "e8087d2b45d3ff106c67a4bc703136b8"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "3b3ca105041ec02ad520575ab86987b8"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "6e67a52da746c17f10fd8a483973cd53"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "f53ee62ae99ecfaac22b74d249abf4ae"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "342164a7d8355e12a7418404b960f333"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "13683ab5011bc7594837ec82b59c7744"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "6a9e3ee732e9f33a03238bb03fe2c4c9"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d45cea2ddd5b9026a80d97e5432bd002"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "4342a948b0852f3d81e322b9d672a32a"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "f339e98cf1d80e2f2f36ec3867eca29b"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "82de4d6c1cb96216b424f0cf821c3fdc"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "afd7de45e190194bf37505e85c65edf5"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "68f83c891aee7ce22eca98cede7684a1"
  },
  {
    "url": "404.html",
    "revision": "1b853e4ee91cc267d1861bb71509dd27"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "0e21ce67186e610f5bda9a9fadded9d7"
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
    "url": "assets/js/10.50a5c549.js",
    "revision": "9c25ab9595cefab21ff57c213257f559"
  },
  {
    "url": "assets/js/11.e7e65149.js",
    "revision": "8f028e8e1a2467c8abbcba4e9c0d596c"
  },
  {
    "url": "assets/js/12.976ddd2f.js",
    "revision": "55031fcec70997070ae053a18151bf3e"
  },
  {
    "url": "assets/js/13.4c0080fc.js",
    "revision": "8c0c489abace693f1b94a4f6d4901a32"
  },
  {
    "url": "assets/js/14.86ed2001.js",
    "revision": "a5c40c855a80c0d9e969b2c433e1adf5"
  },
  {
    "url": "assets/js/15.30bc4b0f.js",
    "revision": "55e535b8153b477be3d7c8b58f6aef88"
  },
  {
    "url": "assets/js/16.6e033a0e.js",
    "revision": "d0d34a88ccdf675270e81436f2dd4196"
  },
  {
    "url": "assets/js/17.09a67b45.js",
    "revision": "dcedbdd0a6af97e1b15adf3e1140d295"
  },
  {
    "url": "assets/js/18.89d146cb.js",
    "revision": "f39bdeaffb6bca7ebd94424eb0dd25c8"
  },
  {
    "url": "assets/js/19.38e05591.js",
    "revision": "6d4cbab2dee1a65a70ae6219fd73c4fa"
  },
  {
    "url": "assets/js/2.c632e24b.js",
    "revision": "b5f03c7139e287fec1b4d4557c51bbcd"
  },
  {
    "url": "assets/js/20.7799c16d.js",
    "revision": "fe38bcbcf3a439e7c1972ed5771c4324"
  },
  {
    "url": "assets/js/21.b4b4e608.js",
    "revision": "a2461b9cf6853acc3c01575e1c406f1e"
  },
  {
    "url": "assets/js/22.bef0e034.js",
    "revision": "c736b21454a1f4448a69638f2e16913c"
  },
  {
    "url": "assets/js/23.b728c087.js",
    "revision": "f7ecfe0cb68fc9cf4ba37c5e02df9a5b"
  },
  {
    "url": "assets/js/24.e8ee4d40.js",
    "revision": "90a66a55d7e576b8864e23203b868623"
  },
  {
    "url": "assets/js/25.ff8f0161.js",
    "revision": "2ed8e1e30c67a58908ecaceebfe310fd"
  },
  {
    "url": "assets/js/26.a5c34563.js",
    "revision": "c40930ea344418c53062a2fb7247f8f9"
  },
  {
    "url": "assets/js/27.78d94058.js",
    "revision": "aabf969f88d27f4f0ff4314597f88c43"
  },
  {
    "url": "assets/js/28.948f3086.js",
    "revision": "5091725335397186633fa4b8257ad3ff"
  },
  {
    "url": "assets/js/29.e384e6e1.js",
    "revision": "e4e02a34066c9b79942613475a26ca95"
  },
  {
    "url": "assets/js/3.0abd1b0c.js",
    "revision": "b4fd16da7e316c9f9c156bfc224ad85c"
  },
  {
    "url": "assets/js/30.a1e05aa4.js",
    "revision": "f4f505363d1d6aacab3e0bfa79b945b5"
  },
  {
    "url": "assets/js/31.d8794216.js",
    "revision": "d8a7e403cc3d978e91f6a84fd4d8a0b9"
  },
  {
    "url": "assets/js/32.4b0abd3a.js",
    "revision": "2804e3c5a2a1364472fd5efd816f2b0d"
  },
  {
    "url": "assets/js/33.a235c262.js",
    "revision": "6426fa77ed11c63a7f538575fd0be61b"
  },
  {
    "url": "assets/js/34.292c45e3.js",
    "revision": "339c1f4498ff4971bce936f98b05d268"
  },
  {
    "url": "assets/js/35.2cc724c0.js",
    "revision": "4a95a59fcf8b7068e57c8371b85c07a1"
  },
  {
    "url": "assets/js/36.58c05e36.js",
    "revision": "45b1d7a697a4e9d62d7161c7b2cd01fc"
  },
  {
    "url": "assets/js/37.5fee0d83.js",
    "revision": "415e3e9bb49782c3a15eb095b311101e"
  },
  {
    "url": "assets/js/38.7ae6c3ef.js",
    "revision": "b98ddfc36940cb6924a875fb5eeef863"
  },
  {
    "url": "assets/js/39.14f92134.js",
    "revision": "c49db3001de6e0cc8b775aa86c490ae2"
  },
  {
    "url": "assets/js/4.b8b1e4ef.js",
    "revision": "f0cdcae6ec893d2f1f3c8beb5a4a4f34"
  },
  {
    "url": "assets/js/40.79b0fc46.js",
    "revision": "dcfe4b2be333aec0d5d9194e304bb9c3"
  },
  {
    "url": "assets/js/41.33e847e0.js",
    "revision": "ddb6eb9be89a07860e93b9aca90fac3c"
  },
  {
    "url": "assets/js/42.eb762c9b.js",
    "revision": "53c99d50ef66569f4e6a1c78e7f1cfea"
  },
  {
    "url": "assets/js/43.01f56a6a.js",
    "revision": "5c709abb2e4fdfcb50cf9e3527579170"
  },
  {
    "url": "assets/js/44.2da3fc52.js",
    "revision": "2ba75428a7b3ef5571989240606b1200"
  },
  {
    "url": "assets/js/45.d2d8b441.js",
    "revision": "25fd491977b3549b9f3ddb96be28e35d"
  },
  {
    "url": "assets/js/46.d8ed30ff.js",
    "revision": "2aad0dc18c6f748f0941cac5fc26cfcb"
  },
  {
    "url": "assets/js/47.5720eca7.js",
    "revision": "bc4c25ea857a17d91e33d86a47b9e13d"
  },
  {
    "url": "assets/js/48.f1e43222.js",
    "revision": "4f853122d69c92575637bac5822f4aab"
  },
  {
    "url": "assets/js/49.87d7dbe1.js",
    "revision": "8c70989dc7c54685e82198179104873c"
  },
  {
    "url": "assets/js/5.545e765b.js",
    "revision": "3d98477f303de355a69e1de394c35da5"
  },
  {
    "url": "assets/js/50.bf0fc331.js",
    "revision": "7a13e59b5bbe7f1e7560146c531d40f7"
  },
  {
    "url": "assets/js/51.b809cf7c.js",
    "revision": "c8fbd59dfa246abcd1e5bb6a67bec9f0"
  },
  {
    "url": "assets/js/52.2ef45697.js",
    "revision": "97c236e78b0619c717e5c4a726848748"
  },
  {
    "url": "assets/js/53.e480fbd9.js",
    "revision": "f82b889e1f3ed1792eb843d2f49677de"
  },
  {
    "url": "assets/js/54.757c8e51.js",
    "revision": "376ec7bbdadbd74c384b0aecaf819984"
  },
  {
    "url": "assets/js/55.e3c1e8da.js",
    "revision": "ed7401881f7e2d601402198cca17051a"
  },
  {
    "url": "assets/js/56.5dac5f73.js",
    "revision": "7852fd498a023b093c10e25c1805d570"
  },
  {
    "url": "assets/js/57.1821765c.js",
    "revision": "fcb45f5a777716844a98f0766f92e384"
  },
  {
    "url": "assets/js/58.97295058.js",
    "revision": "02a3a15395df6edd09927634f57f03b8"
  },
  {
    "url": "assets/js/59.93f42920.js",
    "revision": "ddf9c7bdfa64083e5e5637cf9da53ab1"
  },
  {
    "url": "assets/js/6.c06010f5.js",
    "revision": "a5850f7cb7de13793030c593b513e78a"
  },
  {
    "url": "assets/js/60.361ecd0b.js",
    "revision": "3edcb1a2af55f437f41a8154d0a12069"
  },
  {
    "url": "assets/js/61.ac839a68.js",
    "revision": "66dde3a31a20065711b0bfe30e0b2380"
  },
  {
    "url": "assets/js/62.fe6affc4.js",
    "revision": "fd593ce3a5eeed8ad6542ae5ee234ed1"
  },
  {
    "url": "assets/js/63.5e5500fe.js",
    "revision": "8161e7a446379d20164d49cc58bd1f6b"
  },
  {
    "url": "assets/js/64.9308db41.js",
    "revision": "e39036983e063744b904a7adf850fd0e"
  },
  {
    "url": "assets/js/65.eb36721f.js",
    "revision": "158d4b8c667f6033255f2bfc6a2479a9"
  },
  {
    "url": "assets/js/66.be5b2fc2.js",
    "revision": "a7be66f9563d82306189a7cfc709db3b"
  },
  {
    "url": "assets/js/67.db03f900.js",
    "revision": "6040bf440b3c905ab667b3b7e5e79e5e"
  },
  {
    "url": "assets/js/68.859c3266.js",
    "revision": "944b0cbb5cd9bba1fbfcd18b37d48618"
  },
  {
    "url": "assets/js/69.ff6ce3c4.js",
    "revision": "337be963dd5ea4033b4b2a3cf1ae4bbe"
  },
  {
    "url": "assets/js/7.f6581774.js",
    "revision": "0450e0a952dde10d2c89a6853b7ab5bd"
  },
  {
    "url": "assets/js/70.9c684d20.js",
    "revision": "b427a2e9ba0e32c77020645397c35618"
  },
  {
    "url": "assets/js/71.252b1cd4.js",
    "revision": "cdca030dc626e7680f35053fe5b87cd4"
  },
  {
    "url": "assets/js/72.44e0bebe.js",
    "revision": "b7867267f259631061affb1569bd4e1a"
  },
  {
    "url": "assets/js/73.ab8e3ebf.js",
    "revision": "0c3f2159171fb81ff11d50e8183104e9"
  },
  {
    "url": "assets/js/74.57ee1b59.js",
    "revision": "8faa17ff33da916a2498c47ce8482f90"
  },
  {
    "url": "assets/js/75.32836a75.js",
    "revision": "0df1284f2a8cd0efddfa2dffd0396a11"
  },
  {
    "url": "assets/js/76.756959b1.js",
    "revision": "6e1ba8ab7b2bc83c166aa925f1e32480"
  },
  {
    "url": "assets/js/77.db9a4348.js",
    "revision": "e822f2f2e02396030dc0dbbfc616fc89"
  },
  {
    "url": "assets/js/78.9e729c80.js",
    "revision": "9f7fbc5bb7ea9b12741feac25113d97c"
  },
  {
    "url": "assets/js/79.774ab318.js",
    "revision": "f6666c501de8c971425c270b120b659d"
  },
  {
    "url": "assets/js/8.c87ac0b4.js",
    "revision": "488047a7c7535c98a4cc19b7e2bed462"
  },
  {
    "url": "assets/js/80.2b0af538.js",
    "revision": "fcd6e64411d4837eddc8c19f0c173fe5"
  },
  {
    "url": "assets/js/81.aa4b10d4.js",
    "revision": "14c2a32369ad06ea68756115745b0e70"
  },
  {
    "url": "assets/js/82.020c6cf6.js",
    "revision": "33ee59d3c55a288fdc7ea51bd8febc79"
  },
  {
    "url": "assets/js/83.1ac77e58.js",
    "revision": "8b347879f08147696505403c7d57790e"
  },
  {
    "url": "assets/js/84.dfff7e26.js",
    "revision": "c536df25cef60a734544bbbc730c0f98"
  },
  {
    "url": "assets/js/85.2409957e.js",
    "revision": "ef6fe194ecc747e22010785872323955"
  },
  {
    "url": "assets/js/86.86ada0b0.js",
    "revision": "b11f8691e62ef504f2024d9c15c89ebb"
  },
  {
    "url": "assets/js/87.2315d550.js",
    "revision": "697b66f0bb7f23e53ebaed80bcfa8c2d"
  },
  {
    "url": "assets/js/88.df45bf3b.js",
    "revision": "5f3d72bc130d49abb5ac764d5dd0cac0"
  },
  {
    "url": "assets/js/89.c352b3f8.js",
    "revision": "d6c2d2880af2538f556c95f1203c74ed"
  },
  {
    "url": "assets/js/9.ae7f2b99.js",
    "revision": "5425b38b6408dfbec9060ee7ded83830"
  },
  {
    "url": "assets/js/90.b6950466.js",
    "revision": "dbbca41fbdb5e6a008bf7631c25e6559"
  },
  {
    "url": "assets/js/app.71ac0652.js",
    "revision": "965e4629fbbaf46bc6624782fd30ad9e"
  },
  {
    "url": "index.html",
    "revision": "bb27c490662528d8928189ff579d7a38"
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

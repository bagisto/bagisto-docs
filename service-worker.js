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
    "url": "1.x/advanced/create_payment_method.html",
    "revision": "b40ab5c1a076dcf33ac3f0621a4f86c5"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "28fd0b4d0d6e076556f61b204aa96504"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "7eabb27fae2d512466fb55b43d53756e"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "35c776d53c28732c6b7080a26b8cde9d"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "935d36847585663c25ede097e747f2ca"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c01ab9acac4711e849c1031755e8c90b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c21d55b1c6461a8ebb29a558004d2d67"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "1400f2f1c7c763e46077c64315ea7726"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "518fcca7f46fe8e00cc27f25e130a81c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "254efebe07d07b959ef04b346bd1b83c"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "cb2c8f2d086ef800eee17b88d02c9f47"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "36b4e5d7d8d0ea9da39cb3b5e3860fbe"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "6a2130945f597225692225f7c36bb013"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "eac6197d60bfc276ba050dd40a24a685"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "35bc074c3cad8884e35b91a3f98bf642"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "e9287cf3da909378f0d62839baa2aa02"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "aea60379aac50a5575a6dd0d80177ea8"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b04c0653fb0c56d961618de439749a6a"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ed3cd6ff034c30500f4938f1a1f5fd84"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "58463a76a0a58e3f48f5eab6a60ae0f8"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0f2693b920b60c167cd41d3cd059c721"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "bc0d7768963bbfc509bac8d9152780b3"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "0da6079ef8196116c0e10b5509d88d7b"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "89e9a66efc000834f98f284d87f87e00"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "916332ca838e0dc02c0cd8eb17343e24"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "03e8425511b40213ab03f5898dbcf01a"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "57c7be1067bfa5fa5d78b8eff37ec5af"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "e8fe2977376ce41bba1edacd83e0eade"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "21790081c6e25b336245c0c01aaa4e82"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "aac0015f46aa94df05e546d2ebce9fb6"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "64759035c0e58839465b4c23841097dd"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "8b3e08d292542f37d94e243ce0d40889"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "896791ac868e33879562b80f6a663b18"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "081fbeab2cafd68f7112400e4be4e611"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "1d19109a0b8eef82ab76e3f92b93b92e"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "c69e9851123336a41184c0acf2177076"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "01794175c54c4b421e4330b4e6265ac4"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "5b6120d2548cc975d8b72491c6d456de"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "5397e8e69fba2996389ea19429b5c513"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "b729866cfd6ff694447c65a20eabd80d"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "24fe7979d68bcd8c8b176ce974f7466b"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "7dc65ce459ca622c443c6bacac9caf44"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "dd91e7037b996bfb6f95157bb4669502"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "4a80d0df4e46074753e5982434fe0b7f"
  },
  {
    "url": "404.html",
    "revision": "cea658a428a7a9ec475700a36e1e2fd0"
  },
  {
    "url": "assets/css/0.styles.ff275ce7.css",
    "revision": "7ea9fde45d437e7486fd997d53659249"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
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
    "url": "assets/img/demo_products.86acc2d1.jpg",
    "revision": "86acc2d17a24f156e867f75404f9e121"
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
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
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
    "url": "assets/js/10.659b3753.js",
    "revision": "dd48afb990e5eb2a53232d9d0be661ab"
  },
  {
    "url": "assets/js/11.a060e227.js",
    "revision": "6eef835d7201a786611679868c09903a"
  },
  {
    "url": "assets/js/12.518acb9a.js",
    "revision": "08176504450bb58acd044fd18cbdb819"
  },
  {
    "url": "assets/js/13.695ae2cc.js",
    "revision": "a2ffa968437a1fb817cbab1761f944a0"
  },
  {
    "url": "assets/js/14.d2c8b194.js",
    "revision": "52ee7ca78f99683dfc1e973fa1f78d8d"
  },
  {
    "url": "assets/js/15.f0f59029.js",
    "revision": "28ba8737b6add43d6b5b2cfd6abb6cbd"
  },
  {
    "url": "assets/js/16.a37820f5.js",
    "revision": "83be7538e0363abf2224f4942483db9c"
  },
  {
    "url": "assets/js/17.3bf8dc6d.js",
    "revision": "344106a3ad7a4cdd6520486b7a184f8d"
  },
  {
    "url": "assets/js/18.e37e66d9.js",
    "revision": "751017bd9a60e0b8d91fe5dc24961dba"
  },
  {
    "url": "assets/js/19.0ed6d12e.js",
    "revision": "004d8d890ab82071ee6d4d6230897a36"
  },
  {
    "url": "assets/js/2.a667fdc9.js",
    "revision": "68b064d6f19ca05ca1e23b95d7fe11eb"
  },
  {
    "url": "assets/js/20.e672ae7f.js",
    "revision": "ba4389fc7a3b2a23b4f0f7e88921ec0e"
  },
  {
    "url": "assets/js/21.f2336fe7.js",
    "revision": "93bad473656c5360b2877185615f9793"
  },
  {
    "url": "assets/js/22.fc40fd17.js",
    "revision": "acc0afc2b9867adeddb5ba477f32fd63"
  },
  {
    "url": "assets/js/23.26abe7e3.js",
    "revision": "89607288d15abde9b5b7fdbc7d2f054c"
  },
  {
    "url": "assets/js/24.70784aee.js",
    "revision": "f392e2d588be331334af8f503296273e"
  },
  {
    "url": "assets/js/25.067ef646.js",
    "revision": "4120a1c0e9968a239100c5720eeb0c3a"
  },
  {
    "url": "assets/js/26.7c38629c.js",
    "revision": "6fb345977798698a12ddd96e8b1be88a"
  },
  {
    "url": "assets/js/27.8213228e.js",
    "revision": "533552650a04cfa6a1b65018ab549f75"
  },
  {
    "url": "assets/js/28.43501bd7.js",
    "revision": "a50018b607b51e29d91d825cc26d7050"
  },
  {
    "url": "assets/js/29.df3cde7b.js",
    "revision": "a9e4c82c6fb5e53e020f09e8a74ca402"
  },
  {
    "url": "assets/js/3.5a0c1ff9.js",
    "revision": "b192ebe433dca3bdec96a8fe208b74aa"
  },
  {
    "url": "assets/js/30.8ae76254.js",
    "revision": "58aaf972947efb5aae520bcf474458f9"
  },
  {
    "url": "assets/js/31.7e2e3bd5.js",
    "revision": "a606ca63ef62a2df1b042465bd94edd0"
  },
  {
    "url": "assets/js/32.b10d9b6e.js",
    "revision": "654a201a99cecfa856d40b8e4dc714d6"
  },
  {
    "url": "assets/js/33.336f5735.js",
    "revision": "c078e034b803272ecb97bde73ec4b3ed"
  },
  {
    "url": "assets/js/34.e27fbdf4.js",
    "revision": "bb017b2ea76de75e146bc6dea79daf05"
  },
  {
    "url": "assets/js/35.25fde782.js",
    "revision": "bc702ed99b5b3daf341529c4c88651c4"
  },
  {
    "url": "assets/js/36.99f94532.js",
    "revision": "982aed39cc17317e5694fee41ed45946"
  },
  {
    "url": "assets/js/37.e7e8e814.js",
    "revision": "5c9db5d3155cf864880200d9867b25e3"
  },
  {
    "url": "assets/js/38.b41573d2.js",
    "revision": "e715059ec41eac22b24438a242cd56c0"
  },
  {
    "url": "assets/js/39.2fabd71a.js",
    "revision": "48eb53713a199e1698e76b051c140f7f"
  },
  {
    "url": "assets/js/4.54fe4688.js",
    "revision": "6f2ea6ab596746f9ea811c222f917ee7"
  },
  {
    "url": "assets/js/40.22c43a48.js",
    "revision": "2f2c628ece8c824700382f9b4183e541"
  },
  {
    "url": "assets/js/41.f18744d0.js",
    "revision": "12aa15da74dda5a233c3fee4bc6c1747"
  },
  {
    "url": "assets/js/42.35e3ad00.js",
    "revision": "12ae386fd61fd5d32fb9baf2ab9ab5f1"
  },
  {
    "url": "assets/js/43.034c2dff.js",
    "revision": "187613beed17b25c1b528ea577657945"
  },
  {
    "url": "assets/js/44.b748dc66.js",
    "revision": "817011655bdc36f89c130dd49aecc98f"
  },
  {
    "url": "assets/js/45.12eedb05.js",
    "revision": "72006b9e49ac646e2b3cb045fcf5c384"
  },
  {
    "url": "assets/js/46.277142d6.js",
    "revision": "71506b0019c75a8580904abfd7e37462"
  },
  {
    "url": "assets/js/47.6eda548f.js",
    "revision": "629e38830986ebb11163f9ca609e44dd"
  },
  {
    "url": "assets/js/48.d13845e3.js",
    "revision": "1292a3a7103ee08bbfe0bf0d6a1b54c1"
  },
  {
    "url": "assets/js/49.8cf3caf2.js",
    "revision": "1a1289afe390a6202e4cd42ff239c04f"
  },
  {
    "url": "assets/js/5.718d42b6.js",
    "revision": "5c036cfa2d8452723afd9c7ca74fc1a9"
  },
  {
    "url": "assets/js/50.02db3f45.js",
    "revision": "e00ed22e476c26e2766199607dfbc098"
  },
  {
    "url": "assets/js/6.9536758a.js",
    "revision": "d1d9f5188698825441d8155666cd8b28"
  },
  {
    "url": "assets/js/7.d07b907c.js",
    "revision": "63739f8a42525954008afbe478187de0"
  },
  {
    "url": "assets/js/8.b613b7d6.js",
    "revision": "9c5a86f88374a7115ca3ff38bdf9d667"
  },
  {
    "url": "assets/js/9.edc10067.js",
    "revision": "80ec8735772e19ee80198e79435b58c8"
  },
  {
    "url": "assets/js/app.cae414dd.js",
    "revision": "df91b5f6842636ab79bbef409eec4c8c"
  },
  {
    "url": "index.html",
    "revision": "2829631934ddb6ff861339a15cfdd177"
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

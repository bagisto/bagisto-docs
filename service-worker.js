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
    "revision": "dbb87cec362a14b84b68fef290b6db4e"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "d996a6656e12658039893da0164486ae"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "8b742e2d6cee444a74ddd8af31b6841e"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "625359c3605602a5880b0c5ccecf978c"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "5e7aca4f47a6594d5ea9773546fe8240"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "67ca6ba6b78093004bb4864c036d4a94"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "00f42e1f5d6dd63920352b1807cb97d8"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "bc73a6e38f8009e2677720c0fd28ccc3"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "0ae651b251f9d1def517c6d4ace7f2a6"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "0df562b7af19af4200700617f05eb167"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "a32776e937bb95bf3d2b96d6657e8d40"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "c7ceb3e68a4ead5a57effcf8a684676e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "db6054311db47221bf02a1c3d30e207b"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "cbc0970419e0b301185a8adb724d4b74"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "da2c35e00c64b1ec7d31f7bbcf12f936"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4b0a8ba9f28df944076bb16b5aab090c"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "5ebb46342791166ef6a22c5026dbec3c"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "221e3b6a13a0d0d04ae6ed8b3be8019c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "3d05a77992334441e540ebce01225859"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "27b585debe4ebe6a3344c96b1ace7d6f"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "e7ee195f9efe2a1e00824649a0018a63"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "7d6e5359f5e7516e0b29cb22dc11e8fd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "84ed695270ea9d1f066eb4013a005b80"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "253cb5fa53dbeb343c1b19bd37f1a082"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "c3a20f3891a2d8dc5947aab4277b5254"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "cd5717a8c6d980c30345eaefae1e27b3"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "22145c3c705d14ce3febf3b1be55049f"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "4eba9afb2e6c4d702c282eff211811b7"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "3dac292a484fbfc1037bab63b6dbfb10"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "4360a0cb1e95f0e1559ba6c22336fb5c"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "738cc492517516030449e0aabfebf3a2"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "ea15003e370f7a8f734b543e260312f3"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "63ba88c5a6ce04e5fecc343c4e32a3da"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "3c7bd35a2c0ba513a4f775b1aa689718"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a965d57861f3f032337b26c4d2a950f6"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "a1f5e60fdfab8f547a909a1a48d40a5e"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "3d492c04212c41137f658962f38f5d38"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "17ca14eeaaea02451bb63a7c1ef29e94"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "2483f424fb36a81b68092c8009e038e6"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "6ee805b882757a80b3a2ce8503a2899c"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "09e56781d6c27ed06a811ad846daa3cd"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "1e54f65db9614357f3df6829aa4d2058"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "09c31f709f3b747759aebdd4ae0dff28"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "2ca1740502d398ba0b861ff4559191d2"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "aa5f0fe0b3fdaf8e3aa3a64ef0b4d7e4"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "63a8702383c1a19ceb354cf6872d90d3"
  },
  {
    "url": "404.html",
    "revision": "bc75081eb78c120534e9cc6ee2d2791e"
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
    "url": "assets/js/13.405377e4.js",
    "revision": "6662693085ec26e697e55efe3d4080eb"
  },
  {
    "url": "assets/js/14.a2254493.js",
    "revision": "fd6a7d35f0db3d378d005e23e9cbbae3"
  },
  {
    "url": "assets/js/15.58491c77.js",
    "revision": "c56f6df1bb141b65b9b9744e62f83292"
  },
  {
    "url": "assets/js/16.90855e04.js",
    "revision": "0b611b21b31fe641a9c0cc203f86eaea"
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
    "url": "assets/js/3.15ccf006.js",
    "revision": "fc53f2720ff8f4491c6079eb9dd3111f"
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
    "url": "assets/js/34.b691dc14.js",
    "revision": "e9539bf82850d9cecf39d796a4b70b3c"
  },
  {
    "url": "assets/js/35.4fb979a7.js",
    "revision": "4283874c75e085d4d7b3518ed55cbe9b"
  },
  {
    "url": "assets/js/36.38ee2353.js",
    "revision": "50f7d775651fd56b13b65a8dc392288c"
  },
  {
    "url": "assets/js/37.7eacfad9.js",
    "revision": "3c415c31445a076320f55371f81eacc4"
  },
  {
    "url": "assets/js/38.2594f828.js",
    "revision": "919b49062440940e200ccc1e37011a5a"
  },
  {
    "url": "assets/js/39.cb8866c2.js",
    "revision": "17e0321d879736dce9a2eaa2261086af"
  },
  {
    "url": "assets/js/4.54fe4688.js",
    "revision": "6f2ea6ab596746f9ea811c222f917ee7"
  },
  {
    "url": "assets/js/40.d427d0a4.js",
    "revision": "00509ea161506a502e8f08e955479e0c"
  },
  {
    "url": "assets/js/41.6951eb34.js",
    "revision": "3a03f06e4c1c5c4b83a22190897995ff"
  },
  {
    "url": "assets/js/42.6aa4d541.js",
    "revision": "cd8ab8fb593f78ab69af5b142d46d7f4"
  },
  {
    "url": "assets/js/43.609507b0.js",
    "revision": "07b1f4b37054cac87a5b9a87d32639a3"
  },
  {
    "url": "assets/js/44.c07b3fe7.js",
    "revision": "9d995ce31acbf2ed2bc06ac1e3440166"
  },
  {
    "url": "assets/js/45.eedfaa5d.js",
    "revision": "27202faab2f9e54c07271d92b2580a12"
  },
  {
    "url": "assets/js/46.e8339a36.js",
    "revision": "5fd6eb41904f215987bed2eba23dc16f"
  },
  {
    "url": "assets/js/47.55d5bbca.js",
    "revision": "30a523ab48f0961c2c8a77845d9fc8f9"
  },
  {
    "url": "assets/js/48.c34e6d06.js",
    "revision": "8be0368aeb399eb641e2fdb18e47754a"
  },
  {
    "url": "assets/js/49.0ee1ecd9.js",
    "revision": "8a2fe87641ecbeba7a352e2e53eb44a8"
  },
  {
    "url": "assets/js/5.718d42b6.js",
    "revision": "5c036cfa2d8452723afd9c7ca74fc1a9"
  },
  {
    "url": "assets/js/50.11d87c92.js",
    "revision": "c0329c037e5aa5cf8fc76ca3ff31094d"
  },
  {
    "url": "assets/js/51.a678a3d6.js",
    "revision": "9dfa1346ec7198d6defa2b742b5ed8d9"
  },
  {
    "url": "assets/js/52.9e305b81.js",
    "revision": "d183b1a601c920d9dbbbff3b6479f730"
  },
  {
    "url": "assets/js/6.bf75d312.js",
    "revision": "d0cee2c8285a7ae185dd72437a47a26a"
  },
  {
    "url": "assets/js/7.86ce3384.js",
    "revision": "1aa8b1ac06924f91c15426e8e37e6e03"
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
    "url": "assets/js/app.9cf0f776.js",
    "revision": "232fb2dccd21f4fd8a7455e906742f0b"
  },
  {
    "url": "index.html",
    "revision": "d73d0141498c64c99aae4f0eb2447566"
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

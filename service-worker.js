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
    "revision": "8a53ee482ce8959e9dee73852276f8d8"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "e942458019df90953787170b69e57d2c"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "4e25009dd5d59a3ed3f5ee1dd2662e67"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "cfd6d2837301bf9740d6161453b3eea2"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "bc2dca3771439acf099f2a1c26966f1e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "a851a83082ccf4821dff6bd50037460b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d0af1827faf59d48a2d56df391148477"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "7fe431192912d51bf92467fb4dd8d17f"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "33f86e0091e02e6210844d753dbd1cd1"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "58f35e6c5acf447b36c99042ed660f12"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "478537faff9e37a15117f7b5320112cb"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "28ad12fe99dd056e389829af5d961e90"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "65f71889862ad8ec861a185fc17aca8b"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "98e6fb64cf77543d2fc81e6de81b8545"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "d53b264a4d1dc168281744de8b7a4fb4"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "1290807987cba377ffa6a2b5856527a4"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "3493944c8ead7d5bd906cde6e976ee8e"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "2ea432b8b486c9866a9fb046381aaec0"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "7c009d534dae34bee6aa9cb87bc93830"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2b6a77eeaffa0a00a8414aca49734c8d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "bda109700a51efc39aa26e480b8c31b3"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1c127d1d2997dd0d2fbc9d5ec13ed00f"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "f71a97ab50d3f83b1543aa091eaf9e37"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "13933927fd34ad77716cd841465600b9"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1580a8dcf491e01ff7cb36c91098cea6"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "04f3bb09c0a08e33d5e7d34281ee14b9"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "cd23b6a42f67d812443e0c475c95dd25"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "5680f05c6dd1c99e78a5b858d90aac8b"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "a336a68e45175fbc9ca6decbbd21e516"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "dae93a6c06fe0f0e98fa7511396cd280"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "8dc27dcf16e987a569e9216c63df9433"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "83442d54f3be8283bad12ac50cc95c57"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "7628d529defae107332ccd2f5898a998"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "4fc499472df1a1fc78ff5fd5bdcee7c1"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "08f7a29d706936e42d5d946e79d784ce"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "1c7500336767335a4c254c1dcaaff1b4"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "1841c96398b1449ad75c4cfae9a79ce1"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "12df3364fc3e55882a000d98d5f5cd7d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "3a3e86f86311b8bd30b071b7a9ccced1"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "81f842e6cc220426dbfa57f7cc3dac13"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "21b3a984a1ff0f9e8c4ddb59ca7dec86"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "fac0ba13ac7568a49a8a3afc56a97431"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "dbba586cf2f30868759b817b24929a8a"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "b12f53b2f442b78b5626be91bf48f001"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "1d33fcf3387bd23a619f87a7f1861f75"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "6cbfda2bb719019675eb47c15375df00"
  },
  {
    "url": "404.html",
    "revision": "6b21c80e583974ebfdc1245c0be3916d"
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
    "url": "assets/js/14.8a5abe72.js",
    "revision": "359aca3a65fd8e363ac741177e7aea52"
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
    "url": "assets/js/33.957158ca.js",
    "revision": "e51f24fcb7423e1edf0031da685e8d5d"
  },
  {
    "url": "assets/js/34.06fbc5b8.js",
    "revision": "ec7e9ae15600da181d03c1812f71e5ae"
  },
  {
    "url": "assets/js/35.c37ed1f2.js",
    "revision": "1c6f6ed561a5b5dcd3f214cb087601fb"
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
    "url": "assets/js/46.b86c3a15.js",
    "revision": "7beccd71c7c77060041fbabbc1b490c4"
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
    "url": "assets/js/app.1b7841b2.js",
    "revision": "e975f2cc0ca5feb7ea368b4e2938c0c1"
  },
  {
    "url": "index.html",
    "revision": "3a1b8f8e6f2c4be3649c9e06b54fe26a"
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

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
    "revision": "3cdd96edd98762865aac53042fd9d2a3"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "5e5033cb741c616995463d5bf94d681f"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "bdcfd452110c94d0aef512bd5baebea9"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a991f9a8e5ced72b24daaee9aa665948"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "3f2edd0c49ef811d42381dce23acda5d"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "7e41ceef356e81557c1eb8e2c8574969"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0e074cde3c9f7adb1c39d4d3f5d28c9a"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "bd132150916bb0adfd78e96d699d29cb"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "cd3b711ec587c3cd1ec3083622c3e55b"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "c90f7b947062f89ef75fc9ebe39ca6c0"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "f378bb4b011d7522e2c9559729c360c0"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "64d2c0c666fafa2115b9ccfe81980376"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "ddcf494ed0c9e6556a6d52c6cf129323"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "eca838c19a9e960c24d54696647902f7"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "382c32fe776aac7a071c11e630c91568"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "dc317b86cd012aa3097e2700627e6603"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "eecdc175424c9bcf27cf234298bc62e9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "e93e40e0122c74f6c6fb3cd3f839adb1"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "2a71a5dde0be2b9e49c6c820d9488b06"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "94ce5530b53fe68f027ff3dc10274221"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b71ece08abe3ecefb910c0c87f0363a8"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "e807c2f70731e0979706a3cda95d2440"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "d05a582836e3c7ddb53b2fce0990f09f"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "f0d5d418f5b185aef2393963f25ea8f0"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "7d8e0a68f85fa3936a0cd2954641c68e"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5f75f1e9f07a296b0a2b46c031dab8c4"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "804921bbd6f030ecb9825a8aa93adeb4"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "dccde8f7f5953d7c469b0dc13eb40fb1"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1f21cfa6bb56cfdb4dca2bc6685ca70f"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "85fd96dcb2e6b00dd10aec770a9d81a2"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "bdb9254ee824871e4936da3d78948c5e"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "7977ba4c7508c9a42a7d37c24bdde921"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "3f08d0752a5221b33740fca1ea4933fc"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "686ae9a3bcf6d546321b81d4ea0b07f9"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "097a571237a5fbae5bba6bf42ee4fbc8"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "68aba6789acd0175809d055dcd38cd86"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "273bd981baad5ccaf1a74ad6ea31fee4"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "8e6ab7cdcea949f663423ee89a1f9ffd"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "760e8597e07efa45b91bfabd3cafa28a"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "14c3d1b87367933e0ed63ed24aa3fc80"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "e08c6b76023c11ebec4c362257d28d10"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "75d539b6268bd133492752d50141adb2"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "5074fe39defc69f8ce79bbd12a0d5477"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "f78976082f770daf0e2f968f5040ade6"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "88c9ad7c283c9d90c515bd838951663a"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "5bdb3b5218ac974531330ad713a91fce"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "487aaa5747f95e02cd55e9912de7bb4a"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "d829bd07db5163cab821d339c9f5cd89"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "6fdf8f20df7547f450ef536d899d1731"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "30723f1b410cfb7cd9024580f2ed8a35"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "ddd4a980e083b67e64bee31f7121cfc8"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "ea2692983cf17e75d7d50a7784aa5fae"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "510808421ed5f9e58549f5cd0f8e2039"
  },
  {
    "url": "404.html",
    "revision": "238855ce0a90859e5beb2580ec3532d6"
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
    "url": "assets/js/10.d4948a65.js",
    "revision": "6d34df8c268b7a538aa4620d8bdc6fb6"
  },
  {
    "url": "assets/js/11.d9f8e831.js",
    "revision": "a1918da60ffa97784f6becfee8272d81"
  },
  {
    "url": "assets/js/12.262b35d9.js",
    "revision": "7ba99f72c190616f92c3ad9ba999c15f"
  },
  {
    "url": "assets/js/13.6a6bd034.js",
    "revision": "0603f42802e8890355249c938ae7596c"
  },
  {
    "url": "assets/js/14.e2b8117b.js",
    "revision": "ddd87bbc7ac06831acc2f08b9af3e77b"
  },
  {
    "url": "assets/js/15.d7f76a5a.js",
    "revision": "85715d31b90356c91e0f5b3a85342da4"
  },
  {
    "url": "assets/js/16.99bf1882.js",
    "revision": "250355cde0fa6273f4a68cee083ca323"
  },
  {
    "url": "assets/js/17.bd8ec2b2.js",
    "revision": "fdd00edec92c5afb63f6fdb0ec538104"
  },
  {
    "url": "assets/js/18.a1bcd1db.js",
    "revision": "a1801b27598368a3e36e96465c4886cc"
  },
  {
    "url": "assets/js/19.d470993f.js",
    "revision": "084ef1814633afae23dfb3f0ce918ab7"
  },
  {
    "url": "assets/js/2.fc7b0454.js",
    "revision": "2844a598ab3a92e2c2e987c31efdd2d9"
  },
  {
    "url": "assets/js/20.87c40c0d.js",
    "revision": "c0077bd93f7c6b24e21bfcb87f11ac25"
  },
  {
    "url": "assets/js/21.f0f4d939.js",
    "revision": "ae0646b1d27a6356f0b349209d302510"
  },
  {
    "url": "assets/js/22.b94e8881.js",
    "revision": "ac46d9a85225e7a0183e457fab9ada9b"
  },
  {
    "url": "assets/js/23.f9cdb12e.js",
    "revision": "2ebb4732d7d422003a4b1873148e1668"
  },
  {
    "url": "assets/js/24.8c723973.js",
    "revision": "d3b90a0f518da3bb06551d009c7774bc"
  },
  {
    "url": "assets/js/25.4ffc8fd3.js",
    "revision": "65874af79d2b6dc14a54d1f1a5b93bf5"
  },
  {
    "url": "assets/js/26.fc480b25.js",
    "revision": "0e199997a4080cd63d3500c2b7ded49a"
  },
  {
    "url": "assets/js/27.6ca7e954.js",
    "revision": "8cdd7478adb2b63c8924f194e384b187"
  },
  {
    "url": "assets/js/28.9cb8fe8b.js",
    "revision": "04e251e52cf465622d9d17cb16b8d07c"
  },
  {
    "url": "assets/js/29.8a9ef8c9.js",
    "revision": "49275fada0e3422a99c3fbe636e30cfe"
  },
  {
    "url": "assets/js/3.7477722e.js",
    "revision": "e441d4db76d1655363ba940a46821532"
  },
  {
    "url": "assets/js/30.b128e323.js",
    "revision": "c03d72d51b43e0a729711247563d093b"
  },
  {
    "url": "assets/js/31.64a1081c.js",
    "revision": "9de1ea596ecc69dd2418d69cc33277d6"
  },
  {
    "url": "assets/js/32.c12e1595.js",
    "revision": "0e9173b726ad2da1458b09071d00b750"
  },
  {
    "url": "assets/js/33.ca1b1f2b.js",
    "revision": "3566c56f10dc182aba3c1a918cdc3ec1"
  },
  {
    "url": "assets/js/34.791f73b1.js",
    "revision": "a1ca99fe60267359550007173b862e79"
  },
  {
    "url": "assets/js/35.154f28a2.js",
    "revision": "608df3bf893a51b77f66199aba49561a"
  },
  {
    "url": "assets/js/36.81c09f9e.js",
    "revision": "b8bd41e84d00bb720df2652436a9d1ed"
  },
  {
    "url": "assets/js/37.fba5a4d0.js",
    "revision": "d915b9357c8b64befa9cbabae130708c"
  },
  {
    "url": "assets/js/38.ad5f695e.js",
    "revision": "3486ba623591e02f7deed12afdaa8c29"
  },
  {
    "url": "assets/js/39.4bf88f55.js",
    "revision": "02d9df83f1c5643d2d1b59dd44da035e"
  },
  {
    "url": "assets/js/4.f24e97b2.js",
    "revision": "313c7e6dd755ab22858b4836455b8e35"
  },
  {
    "url": "assets/js/40.c9cdadd2.js",
    "revision": "f108c30b072d56ab275fd8e8f453b44c"
  },
  {
    "url": "assets/js/41.440da8ab.js",
    "revision": "ee8a5cadb42ee0627c29d542b5f3d924"
  },
  {
    "url": "assets/js/42.0e4e6e51.js",
    "revision": "a521772f4015cb12dd456d93587a2d87"
  },
  {
    "url": "assets/js/43.25ec7106.js",
    "revision": "a2d0204b1e908540d4633c23adc40653"
  },
  {
    "url": "assets/js/44.4887a745.js",
    "revision": "9dcf94f619bb50ac64345c489f44c3df"
  },
  {
    "url": "assets/js/45.d36b20f9.js",
    "revision": "af3fe5de7632bf64f49d5c9b661b7006"
  },
  {
    "url": "assets/js/46.ee92c312.js",
    "revision": "cc5c11b91116526806a322b66fc001a0"
  },
  {
    "url": "assets/js/47.e9aff137.js",
    "revision": "5b8ff2807659295fef73398d2491bb5f"
  },
  {
    "url": "assets/js/48.66df27e2.js",
    "revision": "64eebf49d7a482cd8d355f09080c911b"
  },
  {
    "url": "assets/js/49.03034e91.js",
    "revision": "17d4246e8f2c08049cab108a0c8a6e99"
  },
  {
    "url": "assets/js/5.19bacd9f.js",
    "revision": "97438eada3d9c487d1cc418f3e293044"
  },
  {
    "url": "assets/js/50.4d0abd8c.js",
    "revision": "b49757d62a63d98a470429b5987e956c"
  },
  {
    "url": "assets/js/51.032a7270.js",
    "revision": "6435bc2cd5e9704afeb5b937e39f5bdb"
  },
  {
    "url": "assets/js/52.f174a23c.js",
    "revision": "2f0ca09746748899143e9ff75178c953"
  },
  {
    "url": "assets/js/53.1186a41b.js",
    "revision": "e54258ce9a4094ebfdfd01d01f96178f"
  },
  {
    "url": "assets/js/54.7aa5af75.js",
    "revision": "fb7322eb77b9d372a43f168d9464a6d2"
  },
  {
    "url": "assets/js/55.96947836.js",
    "revision": "5ee5843576be71b883b248915146311a"
  },
  {
    "url": "assets/js/56.332e6f4d.js",
    "revision": "bae147d45ccefb86d82f4987593aa17c"
  },
  {
    "url": "assets/js/57.e88e3a7e.js",
    "revision": "d4cf32b5c1808b60d85b95c1d1cfa22c"
  },
  {
    "url": "assets/js/58.869e83a4.js",
    "revision": "e6d793d7c2198ab5dcb2f51582cc54d0"
  },
  {
    "url": "assets/js/59.cff58515.js",
    "revision": "2b7d97797fca12e673dae12f1b30f553"
  },
  {
    "url": "assets/js/6.5f661d1e.js",
    "revision": "b3c07c6c700c1e5f7906105ff163a844"
  },
  {
    "url": "assets/js/7.b6e53df8.js",
    "revision": "92ee277f4f90f12241d35ad74801cf00"
  },
  {
    "url": "assets/js/8.8228e8c6.js",
    "revision": "480ee1356fe9e0b5f44326ec31f353d6"
  },
  {
    "url": "assets/js/9.c18c17af.js",
    "revision": "803125def44645d8e75b6a6062ae4a9b"
  },
  {
    "url": "assets/js/app.90429726.js",
    "revision": "ed19622ab5f88ad53d234ee1c51b531b"
  },
  {
    "url": "index.html",
    "revision": "419c722a93bbcb1c77ca97a1579b200b"
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

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
    "revision": "13f6a653863870bb1cc7a8d80ab4ca06"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "b986014acdb8f6cc36f68a5830cd9017"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "46c3d49d84a3e153b3507b964a13b062"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "8d0b81d06b15a04873d777cbf59eafa9"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "1c776abaedc294523c7e6961e967d1ef"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "49b0fd4a23b5dbdf88e4476fd7cbe56f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "9ed74d6e9f37788ccd5e6d3e40caa4fc"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "6a89da0fb8c628f4aaf29986712aa514"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "86435683728edfa2b7f2816b00471550"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "24ac733c41c0265e3ad82baec1da2bf9"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "f975fcbe95be6e0b0daa1943612e1963"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "ab251da6be2dbf997026e5ab4ba497aa"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "1c925e5a6681cd0cb55f495bd1d603d7"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "73596fd811e2b2f8028e1e0db38c51da"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "4881e754943e680059b3467aedab7dd2"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "fd2dc19446ac57189c3f11f951d080c6"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8d27adabcb24716f361afba71f935a37"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c2ee47954fcf0a7d53771ce554c40c52"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "0b10a61616941ee5753b13ddf3632617"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "a80dfc95b2e2b7ce9231b5e9a7258092"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "93f6734e0b254813cab2d95f989e6445"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "099ac47f8adbf448742395619688b8c6"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "4933a8dab72a30daeb9cf73a5781e362"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "2737812a10d2d5a158ba9dcd788e5726"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b06332488ed5b598a36771baee990969"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5f133846223e874c377bc4da234855e7"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "6e9be804b1c1be37fb0db1068d0c475d"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "b6f4dec86f7aa549c29464c2500a22ee"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "fa609f6dcd9fe700f874482d4bb6ee7a"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "c56a9ce71183ef1891feb5dc459e0289"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "c7601183cd3bfd4c12e0766d3bc63a91"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "a67ea8fd98d5613442a022340fb8d220"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "4cc6ce32d76e890aa772fb61d73e7ac9"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "4f7e9bf2a705e3ad877766927991a08a"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "fed8b3afc93ae522201ecfc28764e99f"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "130ee21429038726c1f13ad67697536d"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "f6e38c4c2ab89c171564e1a9400e32d8"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "422034d4a777a6d6717628daec479a86"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "279da21ef039be2cfc57a7a7e960e163"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "df1458cdeceb18e63f861a4f9cde9ff3"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "61fcd74e78163be6fbef5c5235d95e26"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "9c1ff47f38d3fce82f935c61228cdf41"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "d4e5029ed840e98b02997d57edf5efcc"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "3666ebbca3294bdb6de79a7d8723b7ff"
  },
  {
    "url": "404.html",
    "revision": "8d7e882bfe61c523675862ef7e7edae7"
  },
  {
    "url": "assets/css/0.styles.b2960123.css",
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
    "url": "assets/js/10.4d4ef3c6.js",
    "revision": "75500365f4c224aeafaa6ab09b818371"
  },
  {
    "url": "assets/js/11.b4254489.js",
    "revision": "5b632981318d4eaea2b44bbeae5abbf1"
  },
  {
    "url": "assets/js/12.4e4534ed.js",
    "revision": "762e29245b87113e0a81c3fd9719a110"
  },
  {
    "url": "assets/js/13.712b5fd1.js",
    "revision": "8acbb1f3d5dda341370d4f98e65cf3fb"
  },
  {
    "url": "assets/js/14.84e3caff.js",
    "revision": "775ec4f272fe4650d8cd11e9b0968d06"
  },
  {
    "url": "assets/js/15.da9ea645.js",
    "revision": "895ae3544aa9012b7828c8ca1bb3922c"
  },
  {
    "url": "assets/js/16.53cb3bbf.js",
    "revision": "31456d30a830571e77e8dd7c13925c4a"
  },
  {
    "url": "assets/js/17.cded7bac.js",
    "revision": "a2c31d0dba82998cf0f1d0eb6b857629"
  },
  {
    "url": "assets/js/18.0cb783c2.js",
    "revision": "d2218ea1856d5fe2b1bc63dda5a7a05c"
  },
  {
    "url": "assets/js/19.0aaaacdb.js",
    "revision": "b6fb70bfc45c42e102d82232481d3a93"
  },
  {
    "url": "assets/js/2.797601cd.js",
    "revision": "d0ab65ba01d0c691ce37227d0fb14c7a"
  },
  {
    "url": "assets/js/20.462ae2e1.js",
    "revision": "4745abe52be6c9c77e5ed63a117ffb7c"
  },
  {
    "url": "assets/js/21.78811647.js",
    "revision": "f0467486525d7dd14946e12bf56fd647"
  },
  {
    "url": "assets/js/22.2bd166f6.js",
    "revision": "ffd56d5ab8918fff2965ad77c3b9a13b"
  },
  {
    "url": "assets/js/23.6064bec7.js",
    "revision": "6c864e8b81584252f5fbfd4c583ac6f2"
  },
  {
    "url": "assets/js/24.cb9f0c29.js",
    "revision": "1ac0375eb453b72b84546aabadf19520"
  },
  {
    "url": "assets/js/25.d00d0727.js",
    "revision": "2a941995fea064d7c8b79e3074cdde07"
  },
  {
    "url": "assets/js/26.d47967c9.js",
    "revision": "674e8cdda5dabcf2da09dcad2a468399"
  },
  {
    "url": "assets/js/27.35ef9737.js",
    "revision": "8e1377d3a0aa33c12f5c0e999ed7d5dc"
  },
  {
    "url": "assets/js/28.6ff4244e.js",
    "revision": "ae824e087937afd9052df58e5fd87180"
  },
  {
    "url": "assets/js/29.441138c6.js",
    "revision": "772edcf9bafb7b8c8d5a0cdbab7b893a"
  },
  {
    "url": "assets/js/3.4f67b71c.js",
    "revision": "efaaac82e89bdb99f99866b1cc8c6f70"
  },
  {
    "url": "assets/js/30.b785e144.js",
    "revision": "b6a798198360fa46df2e202abfe5ab30"
  },
  {
    "url": "assets/js/31.446b9e7d.js",
    "revision": "dfc9acbe30d831e69c7064d0922aa58d"
  },
  {
    "url": "assets/js/32.ad0599be.js",
    "revision": "166f909cdd1f51dbe8f9f152c6d43bac"
  },
  {
    "url": "assets/js/33.5010ae72.js",
    "revision": "338718e7afd34a72bc0239860b3a1bc7"
  },
  {
    "url": "assets/js/34.464b49a9.js",
    "revision": "d56bd5c9127ee0824dcc89d473349705"
  },
  {
    "url": "assets/js/35.f7be71fa.js",
    "revision": "b340df2e1fef8f4fa79e5823c72e83cd"
  },
  {
    "url": "assets/js/36.5e0cbf6c.js",
    "revision": "5f83ca397a3ffb0b81cd3068f9f72736"
  },
  {
    "url": "assets/js/37.f6ef3a1f.js",
    "revision": "5645e48ae4c6ae7a200322444b49a034"
  },
  {
    "url": "assets/js/38.6c4bb64a.js",
    "revision": "facf426bdf3edc57cde2ded8f291b3a3"
  },
  {
    "url": "assets/js/39.bb2def1e.js",
    "revision": "209e78fd90a0568df6c1286d3ed7c365"
  },
  {
    "url": "assets/js/4.ff3b1e5a.js",
    "revision": "2e3c2c271741e46c6c36a382cf797b54"
  },
  {
    "url": "assets/js/40.d9403f80.js",
    "revision": "74419d058a4b6bede37ff5cadb8ed81f"
  },
  {
    "url": "assets/js/41.a518d1c9.js",
    "revision": "64c902a8817eea3f0bf13faaf1a5dab9"
  },
  {
    "url": "assets/js/42.b356d0cf.js",
    "revision": "ed62c24650fc0584cf3ffb2602628e6f"
  },
  {
    "url": "assets/js/43.e4177ff4.js",
    "revision": "99981a3d465d252f96623e1cbc3d3d5d"
  },
  {
    "url": "assets/js/44.ba315395.js",
    "revision": "d39fad0f5739f0cd00d32528f2821a1c"
  },
  {
    "url": "assets/js/45.68eade7f.js",
    "revision": "abe32b91345435b2c4e3a54d44d4d81a"
  },
  {
    "url": "assets/js/46.6e161011.js",
    "revision": "10765d50fcb74439a0e8819782dc1687"
  },
  {
    "url": "assets/js/47.b43a492f.js",
    "revision": "69fc26a5ef41460fc4313c1c0392aff5"
  },
  {
    "url": "assets/js/48.89e42677.js",
    "revision": "7d3fb6fada70fc6f34f7dd90b22246f2"
  },
  {
    "url": "assets/js/49.30c48286.js",
    "revision": "ded5539f686ceebccf85403d1f06dcba"
  },
  {
    "url": "assets/js/5.cb48accb.js",
    "revision": "692cf1abeff034be313b6b6862252890"
  },
  {
    "url": "assets/js/50.55863127.js",
    "revision": "4c430824cc065509ab6bde25f8618971"
  },
  {
    "url": "assets/js/6.0771e554.js",
    "revision": "208d71c12e9dc9d889355c3228bd6e03"
  },
  {
    "url": "assets/js/7.bedfc436.js",
    "revision": "9b5a13cd64d2c5d11d95c55f6fa505a6"
  },
  {
    "url": "assets/js/8.473ba25d.js",
    "revision": "84758752a2296ef00bdec2c2e44eb29d"
  },
  {
    "url": "assets/js/9.509301cd.js",
    "revision": "b2e6dd8876b45e6f12e528c53a25ce05"
  },
  {
    "url": "assets/js/app.7be3d853.js",
    "revision": "f5d800f22cbb2727375b6a7c5a794b76"
  },
  {
    "url": "index.html",
    "revision": "e69a285c7a853086f6243ba29364b923"
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

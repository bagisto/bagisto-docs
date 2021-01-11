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
    "revision": "d3b0fd615ca5625ad831006143d3875d"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "0141aabb916e725ff0688774c2a2bb8a"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "82097afc6cd4ccc09a0b7a9d5bf2d641"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "fdec461214f3a18a7d101c1c2d442a4f"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "e903299b76bc4f9ba1bc60634bcb7623"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "bef466946a1e1a7c2c18409cb914f0ab"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "83b2327d0d4a20a0ce71d196abf08e28"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "7918622d8cae48e0013515940222079a"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "268b9fff00da7341b29ffb784e697bc1"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "cdf959c9e1e87b056fb1496c64b6756a"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "31826c21d4700cc1be38d037f778dd21"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "ec52325bbd01369b3c15cf2224954179"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "9110f1b0dbbbcb2632aa851f181223a6"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7cb2e9c0ae7e9ee56dbb171dc5720175"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "913205390387a0ccc26e4934236bab9a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4ae14861c90e41681d7acb37326b3069"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "1158b8f995445f081edc76a6aa2d3f3f"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "61abb13a1129f83b962f54fc77e6b5da"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "366951bd6fc450ca3619b1b23d93778a"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "e5501a3551009d645c14c8a9be1cde4a"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "4934183222077e63d05bae2b60d339e1"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a12b6f4b8d8d04ce1bfbb4e770d722df"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "1ceb2bea8d64eb01287dc3790f644d05"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "841e17512d2965d26b66fdcb7a9f4ed1"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "72018fb0f0200fa009bb6d404364aa20"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "fd84493a531ee4aa499ca6dd18a8e4e9"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2f9eecd51ccef3a0bfc68640a01b5d20"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "d9c75778fdbfb7d0f2ef2bbce873aa3d"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "32d0cb600623d41deff08749e9743195"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "b1720d8b284cc3f43c65a08ec20acbb9"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "0d1c9e95c94a0ff024dcb397f2628279"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "14c7525fe77e2326385f7aa6a4641f02"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "b22344cbc3836c6d0c701854e2d72e91"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "821cffbfab1589ef2abc657adef0fbd0"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "5365fdb95a23970c3f484653675c3402"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "f8666d9165fa08890dbaa9613d10bf6b"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "dd20822d8e55cc65bd753b2f89247aae"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "626ed3dbcbbcb8dc734441e32d9c8f39"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d71f6c06d2b947dd0a9b1cba64c55983"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "0bd382ee3e74d0f0cdd5a5dc2f3371a1"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "6d2c26074df835eae696e782e51d0a08"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "b1612d1a16e6407bce1c2f4523c28eaa"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "4ba26a4d6de6eac3de8693bbc5751fed"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "57539f244e91f9bba36b1322a45e6cfa"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "3eef09845cb3aabb3110aadb816e18a9"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "a7795c93cfef9c4c5d6d4b5de959adda"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "1164c7fddcdf51303c628514c81292b7"
  },
  {
    "url": "404.html",
    "revision": "991be8241c03bd417c539445f2591723"
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
    "url": "assets/js/10.35642027.js",
    "revision": "cfab9fff1ffa684bc5719d601a20e098"
  },
  {
    "url": "assets/js/11.77243b6b.js",
    "revision": "8f527ec62cea34a2c8bea4afaed0706a"
  },
  {
    "url": "assets/js/12.df1ba055.js",
    "revision": "5d9b2202e96327323eeb28faadffe85d"
  },
  {
    "url": "assets/js/13.74fc7b6e.js",
    "revision": "7af9659e112e37565a7089fb946283ed"
  },
  {
    "url": "assets/js/14.451942fe.js",
    "revision": "6e1f87cee15063b4c708b4c74d1989b3"
  },
  {
    "url": "assets/js/15.bac8b592.js",
    "revision": "b3ad4822d3f375cf165349679e2c8543"
  },
  {
    "url": "assets/js/16.09857f11.js",
    "revision": "c33191af568f5cfb80edc5207802951d"
  },
  {
    "url": "assets/js/17.34670ca3.js",
    "revision": "014c4c2cd20ba11f42552998828af0d5"
  },
  {
    "url": "assets/js/18.287bb091.js",
    "revision": "9bd0c9e65c859db442a2df131c47104c"
  },
  {
    "url": "assets/js/19.e7e9039f.js",
    "revision": "04b03e7c02ca518f0c3fafd2b08f4eb1"
  },
  {
    "url": "assets/js/2.d04fb316.js",
    "revision": "28e2a12ee45a53644205e2f7c95d5068"
  },
  {
    "url": "assets/js/20.7bdf62f4.js",
    "revision": "4c764e6a63fcf4c2bebf3825a09d269e"
  },
  {
    "url": "assets/js/21.f43391a3.js",
    "revision": "d3c06a6bbf90c761c8ad2bf74c12585a"
  },
  {
    "url": "assets/js/22.0d3f85b5.js",
    "revision": "13121e5218d84cdaa67dc3ad2325d3ac"
  },
  {
    "url": "assets/js/23.10fa529c.js",
    "revision": "7d2e7bcbf34ee49228b141af169f01b4"
  },
  {
    "url": "assets/js/24.d61675aa.js",
    "revision": "e1802cab95f32800e9877276caef64eb"
  },
  {
    "url": "assets/js/25.378f2a76.js",
    "revision": "dc3e82af99a811f5a2007a403fd2d51a"
  },
  {
    "url": "assets/js/26.1c4db522.js",
    "revision": "baab302522137ff79b3d1f9d397e9a66"
  },
  {
    "url": "assets/js/27.3933a070.js",
    "revision": "03f84dd7aef2f1029e5eeeb3658c6c2f"
  },
  {
    "url": "assets/js/28.f2d417d5.js",
    "revision": "5a58079e7ca9a539d1a93d6d167d219c"
  },
  {
    "url": "assets/js/29.c2ac721c.js",
    "revision": "042fad21589c64111fdd50bbf51c8665"
  },
  {
    "url": "assets/js/3.627f8597.js",
    "revision": "f538248a168e9fd1946cadb5cf20ea64"
  },
  {
    "url": "assets/js/30.4a5b3240.js",
    "revision": "8d26f334c20b1b7aa47b409ba4d7ac16"
  },
  {
    "url": "assets/js/31.8db1a0fc.js",
    "revision": "612b615d0438c30fb493da9575754852"
  },
  {
    "url": "assets/js/32.c439dcc7.js",
    "revision": "8f96ecfecafe197cfb7fb2f9fdb481ac"
  },
  {
    "url": "assets/js/33.07dd496b.js",
    "revision": "f31b92aff5b0a3f13cf72eb8cd60fb66"
  },
  {
    "url": "assets/js/34.dbe8e9c7.js",
    "revision": "0aa2a9fed4949931da26be6ec954cb5b"
  },
  {
    "url": "assets/js/35.bbb5d311.js",
    "revision": "5c10d1de267ef87a03b707d2ea04c101"
  },
  {
    "url": "assets/js/36.570f1e04.js",
    "revision": "de795618a7e528b089875e2cfbde41e0"
  },
  {
    "url": "assets/js/37.97bb746b.js",
    "revision": "c65763972a7b32d432cf12d180672d9f"
  },
  {
    "url": "assets/js/38.390612db.js",
    "revision": "60fa80215a0107c4436bdd486a807690"
  },
  {
    "url": "assets/js/39.b6a0f1bb.js",
    "revision": "62675d836cf9d08d1138ee3f2ae39875"
  },
  {
    "url": "assets/js/4.a75ae2bf.js",
    "revision": "4eebfb2dc81df6b8961807bcc149a0d5"
  },
  {
    "url": "assets/js/40.7a728bdb.js",
    "revision": "49af783d379cee28d0d7fba60a788488"
  },
  {
    "url": "assets/js/41.51cca5e8.js",
    "revision": "49013286abb92c9396d68ee13716c8f7"
  },
  {
    "url": "assets/js/42.19310a1d.js",
    "revision": "9b10368384623276aec75d5dd123eb9d"
  },
  {
    "url": "assets/js/43.fa35d1fd.js",
    "revision": "6d3f3825a189c060b3cbd43fe4fc7761"
  },
  {
    "url": "assets/js/44.2c28149f.js",
    "revision": "a6e2dba2a3cae74efa3ae43abd033d17"
  },
  {
    "url": "assets/js/45.04c3894d.js",
    "revision": "81b104e4d90f18a87479d25cbab62476"
  },
  {
    "url": "assets/js/46.6d5bc663.js",
    "revision": "5f090138a190005308b15da07dbfd389"
  },
  {
    "url": "assets/js/47.88158b15.js",
    "revision": "2b59c24bc9bc935c34e1f1b48948931d"
  },
  {
    "url": "assets/js/48.9a928b32.js",
    "revision": "60c768a8dd9298a7523deb5322188c86"
  },
  {
    "url": "assets/js/49.110ee6f9.js",
    "revision": "cb47edcc093ea488a803e75d454ac41c"
  },
  {
    "url": "assets/js/5.66793a8c.js",
    "revision": "0089a61e4072a78fa1fb8e5f1a8c1505"
  },
  {
    "url": "assets/js/50.779d7ce1.js",
    "revision": "d45e5eac48c57bc91e79a67da6a11dc7"
  },
  {
    "url": "assets/js/51.d058a0f3.js",
    "revision": "f779c6a3d71ad743927ff35845c088b4"
  },
  {
    "url": "assets/js/52.22980841.js",
    "revision": "894e6405e173ec0d3f90ac8cb1afd519"
  },
  {
    "url": "assets/js/53.3f6b2953.js",
    "revision": "bda248713685d5ac013475731dcb14eb"
  },
  {
    "url": "assets/js/6.2ad3ade9.js",
    "revision": "db797321f03ba30b3facbbc4c79749a1"
  },
  {
    "url": "assets/js/7.4dd2f525.js",
    "revision": "fe6e6a339a1b2b6ac205ccc2aafc24ce"
  },
  {
    "url": "assets/js/8.405f49ec.js",
    "revision": "4a4de6ac2ba85fb09e34b7c2ab89b245"
  },
  {
    "url": "assets/js/9.b7d8abe6.js",
    "revision": "8c71a47cb52c338323a8245d45f6fd4a"
  },
  {
    "url": "assets/js/app.6c4eeda0.js",
    "revision": "c23514f25ba9b3aefdc9230f10c6744b"
  },
  {
    "url": "index.html",
    "revision": "081f91fca4281105e253d38eb66d7eff"
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

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
    "revision": "bca7c3bcb2ec338e5dd7dc5b0d2e92a6"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "1f37151107b51921fef8a0a66b706b48"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "24d2d4b922580e077de4d2bcd4de33f2"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a0a03285831667b4d45681838834b6e9"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "820017aedd997089607c9400cf97cbe2"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ddf7cd8cbe0ab797c703e077ec9d1e94"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2383af723814e5e8a872ee9a19efc359"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "120290ddbfaa682bfb5e0ff40e93ec05"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "6d9788c40d8e5fc03a042bbdecbf2cc8"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "92ca170c50dcc2f1377b08adbd9154fd"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "7eff0279a2fa8c94d59f94ff0abed53a"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "2c9f9c26d9b2c0756e13fe70cc1e1db3"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "b7d5099db5af659fa5555cb3cb8f8674"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "f8f5e336500dab750e16153c3c380785"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "b97739fa0f85c8847ba19884662aadf3"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "b9859b8819b98ab90a7928dbdbe2f12e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "0ca834095ea9c08a55be3a96cb3f17b5"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "d63dac4a53f85b4d2ea7fa4f1ec80669"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "54efa23f1ed2ceb78af9d564f4d129ae"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "1328aaadd0632a9d3ba52d4b6c13898e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "fe6dc1505a7e1ec1412d8cf3a756217e"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "64573acac4d7c459d2185cccf51b1021"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0c08dcace326cb473dfec6838c33dc66"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "6fed299c3363ec53acf30f6121c9d214"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "9adf0275649c729dc5458d586d591ada"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "d22c5e065f641d971c16376bc476c3d4"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "f56aed721b5f31a06c47864a3a265a40"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "9b64025fbb0365de2b203b5f48913d11"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "ea88f90e32b5116b60eef6636b9be3df"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "205007d6ba5b2cee3177148091fedf95"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "02384e1259d27dbf38779cb156613ff8"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "23f979e9ee4faa444c7524b2647c3d87"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "a53fdadccb8a4fe9a027c7307c250d0d"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "8767c89f68d13c75fc25dff93b7d76fd"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "46d3cc71e4f4ec6b665707f00755964a"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "10010e221f433b3dc69be0482529120f"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "11c52f2cee9adb656773fc84de5adecf"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "811b5b993be69d835408664267de0cdd"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "84a9e131f09b2249031bd08eac00b3bf"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "2737e044ea4828bc89d5281dc4f926b2"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "bb5c3d5f8de08f367a87d7952a6737af"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "70503f4c2f370a89d61191eabf6970bd"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "93be4ab7a90badd6c16f0b0293a43f8c"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "c92b3ba7475b2969c5498d4833f000cb"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "e3c05b3c6d85d1b68da6b3516900dee8"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "7952cbe8364d74eced436883d6109b12"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "9e5a458f0ae031f7779d69a8f9254d2a"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "1fad51ac33bfb537f412b66c3d4c7e27"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "04a4384c67728d9c6aa827d44f513a42"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "8cbcbd3468d7ac1dc0f68e55021d28a2"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "d012289eee852406dc663baa85bcf964"
  },
  {
    "url": "404.html",
    "revision": "c78f86ab3646ede0592f5d711b8bdcfe"
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
    "url": "assets/js/10.1ecbbb3f.js",
    "revision": "94381f1750d892ba082f8623c4315433"
  },
  {
    "url": "assets/js/11.cf548b1c.js",
    "revision": "636d84f5993228ccaf74984eb619a35d"
  },
  {
    "url": "assets/js/12.262b35d9.js",
    "revision": "7ba99f72c190616f92c3ad9ba999c15f"
  },
  {
    "url": "assets/js/13.f1defb9d.js",
    "revision": "f5909056a0146b2252bf6db3cd06621c"
  },
  {
    "url": "assets/js/14.0a66fb6d.js",
    "revision": "3f69b62b50a4aa7db6399921d1c6c753"
  },
  {
    "url": "assets/js/15.a4af0f18.js",
    "revision": "705ffc077b92578db215bc9ffbd52dac"
  },
  {
    "url": "assets/js/16.149f2cf6.js",
    "revision": "fe6e3bd839a95a937d3adf7aeb9369c5"
  },
  {
    "url": "assets/js/17.7f573fa8.js",
    "revision": "351f8428c34a631f418bf2269195f476"
  },
  {
    "url": "assets/js/18.9af3d286.js",
    "revision": "4efbd56ab23179e5d679c1af6037db8b"
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
    "url": "assets/js/21.9ab960c1.js",
    "revision": "2ab0df4a57786cfaa7b9be0b17dd03f7"
  },
  {
    "url": "assets/js/22.88390488.js",
    "revision": "33cec39793e5a450f622a5a6a031625f"
  },
  {
    "url": "assets/js/23.497af839.js",
    "revision": "0dacbff8b62133aede886880db8e13d8"
  },
  {
    "url": "assets/js/24.b9076e16.js",
    "revision": "1671164e52a39c52269aad347ac2a262"
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
    "url": "assets/js/3.d3947043.js",
    "revision": "db7c5cae3a75028afa0ba0336b094349"
  },
  {
    "url": "assets/js/30.b8af5789.js",
    "revision": "af635b463da1449fa1aa476426222f9d"
  },
  {
    "url": "assets/js/31.00655cb9.js",
    "revision": "8eb8c16e14bc11553848fccaee5a69cd"
  },
  {
    "url": "assets/js/32.f9784162.js",
    "revision": "a589070a7e66128b6c8fe593a3adac74"
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
    "url": "assets/js/35.94a57b77.js",
    "revision": "6f0e7f738a76bab202faf999061b2ee0"
  },
  {
    "url": "assets/js/36.5740f1c6.js",
    "revision": "8c91ae7dbea4a8745537532af7591459"
  },
  {
    "url": "assets/js/37.cedc16fa.js",
    "revision": "f4824e2ebefb0546fbe24cd89861bd52"
  },
  {
    "url": "assets/js/38.028dec5a.js",
    "revision": "066c18662b9accff28d9f4d15494956c"
  },
  {
    "url": "assets/js/39.a6e13862.js",
    "revision": "c410035445aff1f6fc9667baddb73c2a"
  },
  {
    "url": "assets/js/4.57df6da0.js",
    "revision": "027d164ece454d9f4f29fc8a40c5ad80"
  },
  {
    "url": "assets/js/40.2e0d7f1e.js",
    "revision": "0b6673a21a77ff1bf50167731f8e2aaf"
  },
  {
    "url": "assets/js/41.c7b2ab73.js",
    "revision": "1cb8d7de0c8f88f1d7f3fc5dc57eeb8e"
  },
  {
    "url": "assets/js/42.421c026f.js",
    "revision": "98ebc12ed64d7c8322ac5dd8eeb40c98"
  },
  {
    "url": "assets/js/43.49883ace.js",
    "revision": "079f858de3165c09d5004521942b87d8"
  },
  {
    "url": "assets/js/44.e5a45cc5.js",
    "revision": "72c9642abf70eadbdbc4bb7f9d204a3b"
  },
  {
    "url": "assets/js/45.a32e55b1.js",
    "revision": "8d543a6d9123d87b73b47bf72cc12bf7"
  },
  {
    "url": "assets/js/46.084d7670.js",
    "revision": "6abce7aea5ba4ab64628378c328b353f"
  },
  {
    "url": "assets/js/47.c90d9527.js",
    "revision": "d78543777d6d39f6bda2b8dcc4f62477"
  },
  {
    "url": "assets/js/48.7ea13b5d.js",
    "revision": "c7482f78d805230d9460170f7e654d13"
  },
  {
    "url": "assets/js/49.2f7d3e4d.js",
    "revision": "6a3d31b1ef25beae601249eff2c2b69c"
  },
  {
    "url": "assets/js/5.8ed1aa40.js",
    "revision": "f4b68857955162e1e77ad4899879fbd5"
  },
  {
    "url": "assets/js/50.0be05e77.js",
    "revision": "32813264bd549ea87c092cb7c9c22ccd"
  },
  {
    "url": "assets/js/51.93bff7b5.js",
    "revision": "9746368c843dc3d08a52c11373f3242c"
  },
  {
    "url": "assets/js/52.9b30740a.js",
    "revision": "e15107c6bbfe78504bb33d1349176eca"
  },
  {
    "url": "assets/js/53.302c0e20.js",
    "revision": "26d54c146d3fdc0de736c976e7543245"
  },
  {
    "url": "assets/js/54.e7a9b05c.js",
    "revision": "d97175b98777a107d0614c9bc78841df"
  },
  {
    "url": "assets/js/55.b19d9a79.js",
    "revision": "14b485e1ff8f76ca2b3a73cea7f76892"
  },
  {
    "url": "assets/js/56.033c1935.js",
    "revision": "39ab27b132166cad5e5e83465221a9b5"
  },
  {
    "url": "assets/js/57.9d005024.js",
    "revision": "77256e9afeb76c8d27d7d5192a563a80"
  },
  {
    "url": "assets/js/6.ad8dcbfe.js",
    "revision": "bac19c27d3157756dfcbe4cdc058c7bb"
  },
  {
    "url": "assets/js/7.9a8e00ac.js",
    "revision": "0e75c710b9d70821275703d2969795b6"
  },
  {
    "url": "assets/js/8.f5ee9aa5.js",
    "revision": "49b4327f2d0fee44f2804a7da5105c8d"
  },
  {
    "url": "assets/js/9.c18c17af.js",
    "revision": "803125def44645d8e75b6a6062ae4a9b"
  },
  {
    "url": "assets/js/app.685dfd9b.js",
    "revision": "30a2b31ea899bfa5eb827ce4386ed894"
  },
  {
    "url": "index.html",
    "revision": "6448e88c8cadb56b3293d0e30c354d13"
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

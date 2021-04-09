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
    "revision": "dae5785604726c9df9bada926bfcf6a5"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "2e6bc6d422c9cc26d1b7ca77db555c8c"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "10e554a6d3beb57ecc26d9085eba6a31"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "511044b1e5cf2799a32068d001d392cd"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "237f4e613b4a9acad80242f81d38a4f2"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "a162c087b2e5a97600c2bd56163ab6b4"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "42b17a6f600c1d339c5a275c80db69be"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "e2722a97d1613b56a77d015abef7ae7c"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "02b41dbc9408fd760d269f1fad38da20"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "7401a542503383f9c836831d1946d377"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "432dcb2f4620295ca7bd2a9dbdffe7d0"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "1fe0a34c6b118eeda43f84c9ed735679"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "0d8335b96b603bdf1abb79a7a312666b"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ae0400bc319b67507795a5e5e8c2e80c"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "bb140fd6fd2b1b8717b91f88287938b0"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "8f62e42ad0c0517ae103a83a642016ed"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "6b89c34ecee036daadd45e6d7ba730bd"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "d85bd86a8b051d19081ada761ba4ea72"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "92157736bb0e18f920a262e73f01630f"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "9d4afc70445d3740ac7019a72e84f0d2"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "50424a5ce76c15636681b9bb89bf4b7d"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "27189c0e4393ced303f2d0c66a658a52"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "1165fbc584713b88db9dc9ac51d9b81d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b0c6874b3e8b2e885640f265d1400206"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "358a7d3b9ac7775c052c5e35ef348934"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "23f67701f43d4c014b75bddbdd4bb54a"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "c632562fa44fa6827316509fb1e643a6"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "426397cb503e43a19e96e723ee53a1b7"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "6977afd6e542f4aac5edceeec063ea86"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "e5a0f09570c0bf346a16df1298eb5b62"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "0efea10e921e94e4390b47a314cd7745"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "ded4c3a51fea40de0b9ef04f324658b4"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "c7f6b8bb43be799096b3f132a19e8859"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "08dc9c9674d3fa2ddacf2499019f9c7b"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "32ebb506cc52b1533a5c1429a27e37a1"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "1a617024fe539fa00fd73a3f10033b93"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "d1113f017e503fc5ab2ed13e53fb237b"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "488ccce92a382f84c69274baa214ae41"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "4264cc7158f9932c4aa4af0e7883ac53"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "4d9f13e0cbbc58f8e0fae8de087be68e"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "55e0f63dd6cd950fd136f0cc4b2d7b09"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "8e88bab56c94602bc42492e8ec36df1d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "67297cd05f0db8e922cc5e5eff041fcc"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0f3ea6566cba0bc736fbabe4f509d93f"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "0aa7e659eed7b23ef4e0fdb7cea805d6"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "98137ffe4230a30d5179a5131ee40256"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "1dcd1544d7dfc1e7b6e434d8f7dca3d5"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "96517758cd2fb47a8bb729cdc51eb94f"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "f6614f0785b14401986f2ede50869a13"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "8b22d5a8a4e820d00d97f7f60040ae8d"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "3ee903ca3e9600afe445f50e5b5d34ed"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "b4b914fd8ff826ff5786ab73972a6d88"
  },
  {
    "url": "404.html",
    "revision": "e6747d28723176f882ab5ff5907f626e"
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
    "url": "assets/js/13.b3fc6bf3.js",
    "revision": "0789a4fc9d2d3d1f687b1fa423a34b23"
  },
  {
    "url": "assets/js/14.d4e05835.js",
    "revision": "660108d813a335f27cb9415a5eeb316c"
  },
  {
    "url": "assets/js/15.49f440d6.js",
    "revision": "85c333df4c0baacf76c4177f9468d17e"
  },
  {
    "url": "assets/js/16.ca1459d1.js",
    "revision": "8d27b6999af658fdffbfaaae2facdd6c"
  },
  {
    "url": "assets/js/17.9d1f225e.js",
    "revision": "a97f6699a9952dc2ebad484f4c59b8ec"
  },
  {
    "url": "assets/js/18.debb6e03.js",
    "revision": "5ef4ca553708ac11e8d2c5863925c26e"
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
    "url": "assets/js/22.43dc28de.js",
    "revision": "0e750f4ba30053745557fdf84f37da03"
  },
  {
    "url": "assets/js/23.497af839.js",
    "revision": "0dacbff8b62133aede886880db8e13d8"
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
    "url": "assets/js/3.b6d742c4.js",
    "revision": "df4eb509fb505d2acd0dde4584de1596"
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
    "url": "assets/js/35.94a57b77.js",
    "revision": "6f0e7f738a76bab202faf999061b2ee0"
  },
  {
    "url": "assets/js/36.49ca3d01.js",
    "revision": "4bd55b26d1f99b29d9daa1ee58c99db4"
  },
  {
    "url": "assets/js/37.ac40d7aa.js",
    "revision": "3584d33f6774247f0ae3d4ac506eb46f"
  },
  {
    "url": "assets/js/38.d3446397.js",
    "revision": "b1593e2e3e3b095d071cfcf44bc7a23e"
  },
  {
    "url": "assets/js/39.b6baa0a5.js",
    "revision": "76b53e16967549ceaf2c2c483a86836c"
  },
  {
    "url": "assets/js/4.def5ab8e.js",
    "revision": "3d6300d8cfa4741cf3f7f31b1f4bd421"
  },
  {
    "url": "assets/js/40.d7e93312.js",
    "revision": "a9901308fb8447dc70c1bd505701947b"
  },
  {
    "url": "assets/js/41.03bfe0e2.js",
    "revision": "472c3ba5a47b2acbac257dbd590f5659"
  },
  {
    "url": "assets/js/42.a1265e2b.js",
    "revision": "ab3aeabc2d6791cc1f650b5c6395206f"
  },
  {
    "url": "assets/js/43.948c3fbd.js",
    "revision": "b92f632a60d6944b344bc06339f6bb12"
  },
  {
    "url": "assets/js/44.2bb86228.js",
    "revision": "dd908ea6576c74d96b39c1290dd20e2a"
  },
  {
    "url": "assets/js/45.00a51dd9.js",
    "revision": "bebc1a485effc7f41d4eec627a73bf87"
  },
  {
    "url": "assets/js/46.18a7678f.js",
    "revision": "2e6bfd136ec1b7a33d9c9965f6553739"
  },
  {
    "url": "assets/js/47.5db285aa.js",
    "revision": "ed189bba71c74479dd6dbc1414fccfde"
  },
  {
    "url": "assets/js/48.1c1fe76a.js",
    "revision": "90d8c9fcc71e6531460249bce9c1fd4b"
  },
  {
    "url": "assets/js/49.92083e5d.js",
    "revision": "8f7ffa3bd0a02a9be165f3081f8a2bf9"
  },
  {
    "url": "assets/js/5.19bacd9f.js",
    "revision": "97438eada3d9c487d1cc418f3e293044"
  },
  {
    "url": "assets/js/50.8d82f2c9.js",
    "revision": "8f72eef1db65375717f00414f4b9ebf4"
  },
  {
    "url": "assets/js/51.e46d5360.js",
    "revision": "93349caa61eb2b943fe119a599bbfae8"
  },
  {
    "url": "assets/js/52.d51618d0.js",
    "revision": "12739e70aa6645e6a10b7e024f6a6d44"
  },
  {
    "url": "assets/js/53.ebfc18e8.js",
    "revision": "41a8b8af53110371f2edade3515b6d47"
  },
  {
    "url": "assets/js/54.f4d1129f.js",
    "revision": "0471d09cc3b87973fd1beedfbe6721f4"
  },
  {
    "url": "assets/js/55.2ce5ed33.js",
    "revision": "e48ed5ef02750461213e3100bf2ad74f"
  },
  {
    "url": "assets/js/56.6b61fa9f.js",
    "revision": "7a7d90c7caa10a5271947bbf44312b5f"
  },
  {
    "url": "assets/js/57.6ee99dc2.js",
    "revision": "f78c1fdcebf9d4ee0e2c32ddab98ff89"
  },
  {
    "url": "assets/js/58.b416c05f.js",
    "revision": "78d4e2632a7c7b6e30d413bfffc7bcb3"
  },
  {
    "url": "assets/js/6.ad8dcbfe.js",
    "revision": "bac19c27d3157756dfcbe4cdc058c7bb"
  },
  {
    "url": "assets/js/7.14841425.js",
    "revision": "0ca19951cf90667e8ba18b90ecb31375"
  },
  {
    "url": "assets/js/8.805b34e3.js",
    "revision": "71c694538464032aa2fed68a24fa4d28"
  },
  {
    "url": "assets/js/9.c18c17af.js",
    "revision": "803125def44645d8e75b6a6062ae4a9b"
  },
  {
    "url": "assets/js/app.11e110cb.js",
    "revision": "5e31b5f5740d184c3e662080e37ac2f6"
  },
  {
    "url": "index.html",
    "revision": "5b7bbe9b24cca9822781a05224d0c8ac"
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

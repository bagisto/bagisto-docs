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
    "revision": "9f20ee4563d59999baa8bdbfe3ca49ee"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "25e0f58478e5a3d48c4a0d1bc8bb9e69"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "52c248ab05691405d5c2f5ae059c07c0"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "7bd3c4f13095056a8bd7149951d41b0d"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "81de408197bd85be99d1863add9e111f"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "9dd54b3deadc0aa8f445d036dec34a0a"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "5423172fe892341493390aa22ebac909"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "ec2ba33a71253a6adb1639913cbd0328"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "d2fd0fc45d211038a8e0ddc06875c1d3"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "191a798f3d023e0d655d80fba73d3e6f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "0a69c695a50f174851694f69d8ca2013"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "892bf102a01939fa32b7c50a90ad56e8"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ba17fd2cfe4d0fd65254645617689efe"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "b8c946ae449bee778c0d675b462eda17"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "55b936d6ce233851aea0503353c6bcd7"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "decd4c999e84cf045a47601539748dd9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "3a712a0fe9d28dd31a309aeaf5fc3c16"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "474f77ac2c942ba1201540cbf65f7ca2"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "5165eb8aab32ac1bb55056d84e950041"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "94deb2b0f71120080efd0dffd7d8dbb4"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "ee9dc1b93c2bf4e575e2a804b5269434"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "f89709648662564c6abd3e23f6f25e83"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "32c306cd7a33a840be6f0fd02622105f"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "3c49fa3214019e58a13faef69cade002"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "692303be5529b6fa8fa8732f9a819ad0"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "838bc890b57e034dc832eaaef972a609"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "5204d21a70cfdd68862f98313ea01a03"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "d095afeb96b5e8d8455af732a18d1eb6"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "330b423c908bb01f0e813d1af48d18f9"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "bd509e43004785fb568938bce2a90af0"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "89ad78745af8dbe79a5383ec28ce7a3e"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "968093414091611cc7da1957fa8c0fe3"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "b06221fd93b41ac62b323c5d1515b5e9"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "df25be503c7da9730780cd050aca4217"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "c8968e7413a222e0012a16997ca0f6b8"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "653559164b83eb2e9e8e271f07c217e9"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "6e7cfa6f9a2badc0e0d9f3369296639a"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "af40b51daeb26898adeff2aba87a626c"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "4c9d729324e26ee6c831125daa232a0b"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d7cc4153e492355251a7af913408c41f"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "38e446227e199fc935a0b9c114c22dcf"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "cbcea68d21e39af970b4e4dd53b6a90e"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "be77632487ad2e5b4b9fc21ade3cd493"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "cb1c9f50410fd01619df5e10bc6d3bbc"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "a8b06046b93c11a43133c2118418f353"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "b0179cd35ef02d8720b857054134648d"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "c4ec04bfa94bb99b18a53f06c8970480"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "6a0e4e88c912844f3db0a16b4d557ddb"
  },
  {
    "url": "404.html",
    "revision": "4d325a656747f7d5b770a111d3bce7f9"
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
    "url": "assets/js/10.5244008a.js",
    "revision": "e62f501fbcbe6b87152f4048410f9d8d"
  },
  {
    "url": "assets/js/11.42969baf.js",
    "revision": "f25c79c41997bff6d132c96771484d77"
  },
  {
    "url": "assets/js/12.0bd8dfaf.js",
    "revision": "3828721a6f9feabf92bdb86343801b38"
  },
  {
    "url": "assets/js/13.cac4a452.js",
    "revision": "33c50c46ba6b913684ec4786778c1431"
  },
  {
    "url": "assets/js/14.8c2f252d.js",
    "revision": "110accc07dcd154eb55b5ae92b502f94"
  },
  {
    "url": "assets/js/15.27bda123.js",
    "revision": "c6faa0dbf4d4a018d64a8fc10a47de59"
  },
  {
    "url": "assets/js/16.03651442.js",
    "revision": "a6ec260dde3793c25dad66e816b21235"
  },
  {
    "url": "assets/js/17.3ceb6deb.js",
    "revision": "6d02d693247d00df8c00aefc91eca095"
  },
  {
    "url": "assets/js/18.2b113f52.js",
    "revision": "d1fd8aceade9a2dff8a9372c19234152"
  },
  {
    "url": "assets/js/19.1d4d418a.js",
    "revision": "daa1dd991ea36efeacade36e3a44ea79"
  },
  {
    "url": "assets/js/2.0190bd9b.js",
    "revision": "08e06718444029ceb94d12fa5862f01e"
  },
  {
    "url": "assets/js/20.867d37e1.js",
    "revision": "2c3823d5a9fbb69ca8a0c7f827f90c72"
  },
  {
    "url": "assets/js/21.d18ea91d.js",
    "revision": "4ac9f1b0275d9e0f664989304329c77d"
  },
  {
    "url": "assets/js/22.31a02f74.js",
    "revision": "5e43d9acc38a9aa43ddbd7872cb6ae49"
  },
  {
    "url": "assets/js/23.be5e1d8c.js",
    "revision": "3ad4438c1a708c30106bed07fbf89403"
  },
  {
    "url": "assets/js/24.705ea442.js",
    "revision": "c6721a09998ea91a86658a8b69b46202"
  },
  {
    "url": "assets/js/25.79d39ec0.js",
    "revision": "8592b86dd38fb21dc05d65223369c0a5"
  },
  {
    "url": "assets/js/26.93ebbc12.js",
    "revision": "0f733583059482f42bcdcaf501201537"
  },
  {
    "url": "assets/js/27.d0e875af.js",
    "revision": "d3f60f5f3adcfa55abc62e0cf340bf59"
  },
  {
    "url": "assets/js/28.4949e805.js",
    "revision": "e61b71e536f99db691f3124cce57593e"
  },
  {
    "url": "assets/js/29.7001033a.js",
    "revision": "a58d391a079d38f9f80059779a9cef75"
  },
  {
    "url": "assets/js/3.128d4047.js",
    "revision": "f6a95cb966615bef6a1a825673384f9a"
  },
  {
    "url": "assets/js/30.22ed2e07.js",
    "revision": "56da21e639f5ce271aed1cef0f890a3a"
  },
  {
    "url": "assets/js/31.f0582bc2.js",
    "revision": "34df315e716f90f7a24cf2f2edea3ff0"
  },
  {
    "url": "assets/js/32.34d8c5a2.js",
    "revision": "844c4b419b9e0cae09bed7be0afaff9b"
  },
  {
    "url": "assets/js/33.46627303.js",
    "revision": "ba3d35007c610170560272c06a7a1a7c"
  },
  {
    "url": "assets/js/34.a02e5563.js",
    "revision": "fee42c06303ce6243bb071b003f566a7"
  },
  {
    "url": "assets/js/35.8d434079.js",
    "revision": "ac723d9c4f1a532410becbcf113ba8ff"
  },
  {
    "url": "assets/js/36.5255bc70.js",
    "revision": "33c122133e875127f7232cc6b877bef0"
  },
  {
    "url": "assets/js/37.f6a29708.js",
    "revision": "d18dcb7848b581ac55dfca728306d999"
  },
  {
    "url": "assets/js/38.7f62da5f.js",
    "revision": "01be402327c5efc53c3fdd2ba4e4fd5d"
  },
  {
    "url": "assets/js/39.aa59a074.js",
    "revision": "808f3e9dff5d824b8b7fadb94c118940"
  },
  {
    "url": "assets/js/4.3b539bac.js",
    "revision": "d39d626c7f262d21dba05005066451b7"
  },
  {
    "url": "assets/js/40.7c51bd98.js",
    "revision": "8d37956231afa8c8630ea9230531f3e2"
  },
  {
    "url": "assets/js/41.7e0ff554.js",
    "revision": "12c09357b55a727890173f37f035dc97"
  },
  {
    "url": "assets/js/42.fefca02f.js",
    "revision": "d3e220b5eabc70b61b97fc1c3e9d2ec5"
  },
  {
    "url": "assets/js/43.19424d76.js",
    "revision": "d069338038b4c0fcecaf047b7f05dab8"
  },
  {
    "url": "assets/js/44.91b9c253.js",
    "revision": "7535909c6605d71cbcaadf6388cbd877"
  },
  {
    "url": "assets/js/45.9c554436.js",
    "revision": "79b0f6ccf0ca738be4a449f4b4042e29"
  },
  {
    "url": "assets/js/46.0550fe51.js",
    "revision": "bf94566afee83853705d67f8febe3a5e"
  },
  {
    "url": "assets/js/47.9c5d66a0.js",
    "revision": "06c45d7e5c7b97a1f720667efd6946c0"
  },
  {
    "url": "assets/js/48.ae38d9dd.js",
    "revision": "f963f03bc66dd732de6fc1bad7b9135d"
  },
  {
    "url": "assets/js/49.aa71d56e.js",
    "revision": "3087e7c4392c754607848ce7446b92b0"
  },
  {
    "url": "assets/js/5.259d856d.js",
    "revision": "32acb951c0ba1f53908ade2f52ff141c"
  },
  {
    "url": "assets/js/50.8b01ae67.js",
    "revision": "7b8b8200e320533212264e6bed7e9f62"
  },
  {
    "url": "assets/js/51.00acba2b.js",
    "revision": "0485f3cdc3ba4d067d432159510e609b"
  },
  {
    "url": "assets/js/52.97e57a1c.js",
    "revision": "9f3c1a90b29d568a5d732a0e52b498f4"
  },
  {
    "url": "assets/js/53.1a29b899.js",
    "revision": "41a8b8af53110371f2edade3515b6d47"
  },
  {
    "url": "assets/js/54.943a46f2.js",
    "revision": "6698fe28a0a630e405f331cae4cfed3a"
  },
  {
    "url": "assets/js/6.f6ba448f.js",
    "revision": "f6f5d13f44ec206b5c1e9c7d0faf6e38"
  },
  {
    "url": "assets/js/7.2efc1770.js",
    "revision": "e15ed985ef68d1d500a50c531b6ed7fd"
  },
  {
    "url": "assets/js/8.ca62266e.js",
    "revision": "ae3ccb17d9ab6e5b3f24b4bee7f1ed1d"
  },
  {
    "url": "assets/js/9.eb9d0612.js",
    "revision": "280c50e0f1a7642d03435365217e3ffe"
  },
  {
    "url": "assets/js/app.a3e43636.js",
    "revision": "844e12bf590fad8922bf05791192bc21"
  },
  {
    "url": "index.html",
    "revision": "2244ff54ea59977f7b847cd2aa9235db"
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

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
    "revision": "234f371690c31d79c1e96e33699541a0"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "b48854315fd364469e33bbca7f342646"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "7871375b2dbec7ce4ff1853ae1b18e6c"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a530c408c132babc0d2d5db8f9034685"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4f2e973a25d0d797de2e9ca5d3061342"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c8651051d4467fe0ad49ffc9b47641ad"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3dfb14718b541a1c9bd050aaf8f33a5d"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "1733a239172dd56e1cf38874c93df449"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "250eb263c1660d85e2a9316893af1af0"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "476b23507c7fab7fd6314f590f30b216"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "3b20a09307b92fc7e05224cefbea8384"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "0206625cf5e027530b9219e1f9ff2360"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "a816f0a2e3473298af1071915150ab0d"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "4b98b11b4efab346fd986e314260d592"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "04ffe15955389dede0bc6b107f70aba7"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "903139f19f39f433060f0f3fb287483e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "ce97d79de7b97c6a8cfff3849f8b95a8"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "bb78032da7a02d060ec6f2ebe8685097"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7ccb520c5e83d149f968f9ce9702dec2"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "58a95688f891847ce9ca8cff95aab342"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "25534dfa17a1f562adc3f44d253dc94e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "8149d2114b57c5f492dbfa112cf85c39"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "09abb2108dc5e40b9e87c9b0d3c006ce"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "3798d8d3d4d892209adbdb2142ea1fa1"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "c7e0532c4b480eee3b99411ac2dc2f17"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "90883a5934b84937badb58910b675cdc"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "840ced023e176d9ad5d3a0bfd737571b"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "751965b7bb04640a7e5a965346cbbf5a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "ebd70b9250ba87b616a50ac7d3d4cce1"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "87b2dacf45a3bc3da13e4244c0b05843"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "10611a8beb784ed5b1823a02dff66a41"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "047d5b105c47f5395bc1ef01d2668940"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "ea730aca53b7d2a32e7d1a468733f46f"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "0f25d23217a53bacf49de162c9f8a6de"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "f718d9d0ae24b8867cec06f95b69b2f1"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "31b4ee2e76fea934db64e99a00934400"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "22fe60f2fde38557b5f4ea4640467e99"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "c89259b95ac190d139714f0672c791cd"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "e07fe2bc5617ea0beaca2b167d22e606"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "9331bbffe44264d90eb152393bbaeac3"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "c53804174e02b1e87a84be7da1ac3988"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "4f99d8f678a4062f6d536e979467f7ef"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "e4ac83402e5476dbab0589535136e09e"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "edeb1644e4b9ff8982946668655f7ce2"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "a91772a2e35dddf97338494c187b7a88"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "7893e5d4c6aafa8cf4ada9d2c004f6c4"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "0e2b99263d5125bb3f479c919fad769a"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "e46be9f4a0eee506f05c6b5a8ff6b2a5"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "fa120508035fe46208e3c7a56b753faa"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "046331544544b549820821ac43cd9472"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "b80a1e286a28ade13bb126447f064437"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "a4f8058c74e56739a0d8eb009428d44c"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "fea5db048675693515c620db1812af57"
  },
  {
    "url": "404.html",
    "revision": "4f1e26bfbfc7990dfffde0a89981ec27"
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
    "url": "assets/js/10.2394ec98.js",
    "revision": "8676d221c21744d5e89ee91aa06f24d0"
  },
  {
    "url": "assets/js/11.fdc14220.js",
    "revision": "731438b7db76b3c24bdae8ffdcd76d83"
  },
  {
    "url": "assets/js/12.ce092e93.js",
    "revision": "7321eb4f493b1c485138d7c031672a2b"
  },
  {
    "url": "assets/js/13.33aa6849.js",
    "revision": "bd4b24bb4143b94a1ebc51f8c4d2d6da"
  },
  {
    "url": "assets/js/14.8efc13c0.js",
    "revision": "70938af5f0235c8660c0a0ea5a0d7dc2"
  },
  {
    "url": "assets/js/15.bb9da966.js",
    "revision": "b0e035ec28488b6747c901caf7e9deb7"
  },
  {
    "url": "assets/js/16.92e35360.js",
    "revision": "ba074cb3f36ea76f3aca3809c6fa94df"
  },
  {
    "url": "assets/js/17.a85853bd.js",
    "revision": "70c1f9873089dfc4210daa7cdcd0435e"
  },
  {
    "url": "assets/js/18.823b7ec0.js",
    "revision": "96f96f2f023fa8c5c23ad086062d98dd"
  },
  {
    "url": "assets/js/19.a3e8b6fa.js",
    "revision": "51bf3df10a21d66205b20988b5fc9c58"
  },
  {
    "url": "assets/js/2.ce2ab776.js",
    "revision": "7f2e8f53e0898474f8ba04cbbe9bc5be"
  },
  {
    "url": "assets/js/20.c4839a59.js",
    "revision": "a0a47e35d57a17d1d7926b6c264160b6"
  },
  {
    "url": "assets/js/21.37ad4627.js",
    "revision": "8c35d0e87df760adc7cb2591252bace4"
  },
  {
    "url": "assets/js/22.7a62bbc1.js",
    "revision": "33cec39793e5a450f622a5a6a031625f"
  },
  {
    "url": "assets/js/23.c0e0815a.js",
    "revision": "0dacbff8b62133aede886880db8e13d8"
  },
  {
    "url": "assets/js/24.ca9c0c1b.js",
    "revision": "1671164e52a39c52269aad347ac2a262"
  },
  {
    "url": "assets/js/25.87a4413a.js",
    "revision": "a3ac198e2acf52ac0b95fbda5846c32d"
  },
  {
    "url": "assets/js/26.43b097db.js",
    "revision": "5c3b849a8af3533f61d1492c904c6e1e"
  },
  {
    "url": "assets/js/27.273b6775.js",
    "revision": "5f73644889bf07e686575971e7a95d14"
  },
  {
    "url": "assets/js/28.e89694ed.js",
    "revision": "7f2d14b0511956563634f3b2ed6cba5a"
  },
  {
    "url": "assets/js/29.4a804333.js",
    "revision": "63aba35a23754e7ce58af18cb88c6f3f"
  },
  {
    "url": "assets/js/3.1e2aac76.js",
    "revision": "674c359adfdbb70385a73735fa1b7381"
  },
  {
    "url": "assets/js/30.64c50e31.js",
    "revision": "af635b463da1449fa1aa476426222f9d"
  },
  {
    "url": "assets/js/31.ea9e58eb.js",
    "revision": "8eb8c16e14bc11553848fccaee5a69cd"
  },
  {
    "url": "assets/js/32.25d92949.js",
    "revision": "a589070a7e66128b6c8fe593a3adac74"
  },
  {
    "url": "assets/js/33.882aae9b.js",
    "revision": "bcda8efcee4d5828834cb917cec50e9a"
  },
  {
    "url": "assets/js/34.3d22953f.js",
    "revision": "2cd09d432fc146219d86db8c163f4344"
  },
  {
    "url": "assets/js/35.d73aaf66.js",
    "revision": "8ce4386572e45a5bf44fe7831922af52"
  },
  {
    "url": "assets/js/36.e71df176.js",
    "revision": "6ee77e6aafc4786a653a9006fb9fbafd"
  },
  {
    "url": "assets/js/37.bdd3d095.js",
    "revision": "fe2e6403f4e22a77e2c93cba1839b8be"
  },
  {
    "url": "assets/js/38.8b464316.js",
    "revision": "df711a62e538a4c2cba300259cfc2d84"
  },
  {
    "url": "assets/js/39.6fe1e20c.js",
    "revision": "c72d79b6083dbd09019b933a17e9528c"
  },
  {
    "url": "assets/js/4.8e19ab71.js",
    "revision": "f28e05f6a9e31f599b818b916c8a8ffe"
  },
  {
    "url": "assets/js/40.6c23711a.js",
    "revision": "2cb178b0b63271dcea27585d76050c84"
  },
  {
    "url": "assets/js/41.fe586d66.js",
    "revision": "68e5b659fb8c926b788bbe331d491e7e"
  },
  {
    "url": "assets/js/42.d00317b5.js",
    "revision": "319db55f68fe138390df24edf28dfef5"
  },
  {
    "url": "assets/js/43.2f1dc5e0.js",
    "revision": "0b3d0bdeb3361e3d918eb1b91a3f8e8c"
  },
  {
    "url": "assets/js/44.d4be8fb0.js",
    "revision": "8fa53c8f2c287dfbce6eab800b879cc6"
  },
  {
    "url": "assets/js/45.d24c804e.js",
    "revision": "2c982ff27606e9d4c9ab3cf76138dc48"
  },
  {
    "url": "assets/js/46.e51f1c11.js",
    "revision": "613737d59b45c323c7c0ef5bf5760a00"
  },
  {
    "url": "assets/js/47.70baca33.js",
    "revision": "7e282c6403b543c78500f79e26728211"
  },
  {
    "url": "assets/js/48.1481dd1e.js",
    "revision": "e4be44983cfe5f284b10ae01cd246bea"
  },
  {
    "url": "assets/js/49.ee489a48.js",
    "revision": "d508219e57804c07ae2d31838a1f7a4b"
  },
  {
    "url": "assets/js/5.6517a11e.js",
    "revision": "0ee49568d6f837c540d61f62f13a3a09"
  },
  {
    "url": "assets/js/50.b194f9a8.js",
    "revision": "80269ad0219a5fe8e28f8ed687dd514f"
  },
  {
    "url": "assets/js/51.234149fc.js",
    "revision": "5809158c8c1d198a6db0e6df63ed9a44"
  },
  {
    "url": "assets/js/52.b472d37c.js",
    "revision": "e0eba056f3ffe5a18edd11073acccb1e"
  },
  {
    "url": "assets/js/53.95891e35.js",
    "revision": "7a183c7bc265b09bf1fc9849cdb05a39"
  },
  {
    "url": "assets/js/54.f8c8325d.js",
    "revision": "10a52506dcc27dd727fefa89ba90eb05"
  },
  {
    "url": "assets/js/55.35c73816.js",
    "revision": "04e8cd0cd748fd8bc20ca6cb2da09543"
  },
  {
    "url": "assets/js/56.e7c735b5.js",
    "revision": "a193e2dc440e14612c0d985fce14e4dc"
  },
  {
    "url": "assets/js/57.dd16b7c8.js",
    "revision": "b67a9c8e34ee280ebc4fe231e0b4ecec"
  },
  {
    "url": "assets/js/58.56994b01.js",
    "revision": "85c28f9f9ee69f85ad256f76b8136ec4"
  },
  {
    "url": "assets/js/59.879d446e.js",
    "revision": "20aeacc17c74e99f3b307c21b78ac984"
  },
  {
    "url": "assets/js/6.e79e2c93.js",
    "revision": "42285aae8d02549e4a29e2ff53bce8a7"
  },
  {
    "url": "assets/js/7.5af2b9ef.js",
    "revision": "f10c49bfec41739becab9441bedbe1c5"
  },
  {
    "url": "assets/js/8.85cd3664.js",
    "revision": "dd302754e0559e9cdae8ed13a190f7aa"
  },
  {
    "url": "assets/js/9.1131fcd6.js",
    "revision": "d03cfcbeed2ed158189782f39e2dac76"
  },
  {
    "url": "assets/js/app.5722677b.js",
    "revision": "44eaf1842ae030ed136119861cf4372d"
  },
  {
    "url": "index.html",
    "revision": "ab0ff9f46aef9afe011665543a399f61"
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

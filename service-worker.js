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
    "url": "1.x/admin-theme/index.html",
    "revision": "b132dc34648f0b9f9b95c6c2ca333184"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "17c076d5ad4136ec591d1404919bc78a"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "49a7f7454b011bdce691a639e59b2d75"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "fdc9b9e4290f272ba1780f1dee2e832d"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "73f2c2a4014c41a1e527e8ce53178d32"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "bdb097368f8a91c7aacf70decacfa243"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "cedfddcdaf65cab0fe02173cfe96a5d6"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "03fb88c754bcd8b1586282380ac555cd"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "4fa34f0a0bea8ff710fab6c7f034dbac"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8620657f3ececa375783cd3707505425"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "aa1f253e1f3935b892bd228f5fcfcae5"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "fbe3c0c793c6bd7506dafee0b32b6a8e"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "b13aac1254f1b2e4b6daf7cd03e6fb91"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "531e55b5196b9f45eeb093a828ee08d3"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "70d414d51ff540e5ff67b39d7b36e4f6"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "c8b31049af408db1c6f0c68bf1d7ad55"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "7e2045ec1526e90d85f863630f2e9368"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "37b9b88edb7a1b658fb65099855f913e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "96457c327691b38abc63229f99ea9a3d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "d924211b84d36fb8b36aa8b00b8ec2c5"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "f8e3422df9f3ae56278c199a75e788be"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "288e222203395e14b477aadf340637dd"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "2aa1b1a46b77a7d38616156590c52101"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "9e1b26595456386d0bea63c3bb913e28"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "d866959fdf6cfa0f06228ea472258e78"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "650a0fe072fb0d33e3ed195c8d9a6f09"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "6f8b5efd74a2f334650d1f3ba053c8f0"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "04af47e467855d54c3d733024eb396ca"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "df710a550eae9be93fca77da6c3b5df6"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "29f9d8f85c7a645d7b49d26016b35663"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "dc607c2665f88790d3f9c89c27b3453b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d18985e57b10b23ff0ad703c662da568"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "343d227f5a623a5a466d8036bd093f66"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "dbcb3d1216011389e0ffdfd18f7a539e"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a2d524f0d100ed739e634f2f405dbebc"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "dfd85554348a9e7a26fca27c49422999"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "9c831481079eaee6396ff448a45e37e3"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "e53f7e33f38c843c4cb5357fc704e4ee"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "37f1584d45b7f6db426c7576edb5e4d8"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "5c6d3aee411cf2c0b8b22f4fb2a461c3"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "6b3bcb399402dfa4c7b9bc716995a5d3"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "e09e3b01c6237462d658855d60d820aa"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "2fa93b4c5e8307522a79d1a302a2c604"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "bc7869ff7f77ba99a2214e1df7fc5af2"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "46313232f0a09e91d3fc981e722dc5ec"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "19398f92135494cc9f13aa8d3b49a57d"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "507b75d8eaf7e080d3c48a483d099845"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "bfee9501dac490bffc3fa46f6b0ccef9"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "0d060184f9545b3635d82d63ded66302"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "91d670e5a26fe664be8f71a33bfd70da"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "cea413db06b54eca042592f55576cc5e"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "05a3d740c3c4b91d9cc8d52199fa2170"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "1bb9b57a42e0fd8f311f8e91176e148f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "789b0e7f75105af1318b4dc036c4fcff"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "fa68e2dbd4ae1768f79ffc0cefeaaacd"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "a53c61551e753f42d7a66c5f338045b4"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "4581bf3be502f1db8024f45f513106ca"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "77302fe15f19602df9775e66ed3fadca"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "fa5398991acee90d5c672eef2a6185d8"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f6cea9656c926ba1cc63e9dc05ae0439"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "0f4b660093325b774b3c9e00aa8d5b48"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "9ec541ec6b5c69733bd88241b6169ddb"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "a456c9328bb95a437de8986d73103fd4"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "1d8cba82365c82aa8c545631ef273031"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "adb740db0ed775a9bd9344b3ff2320b6"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d7232eadfe779dda6824bb6dafeef7e8"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "b5cae6ad9b585b94568aa779a09fba59"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "31d84b5e615303db570ffe17ec82b7bc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9c8ddc7a6002c5ac1b7f9bab18bad74a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "6c86f30d9e1390a2b9d1fdb1b9f8176a"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f3a01b3fe0d80bbc166049b2a48b8d78"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "6651e8db88a711037ed1c86fa210df6c"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "904898daea5b063dabe4e383a349991c"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "c24b7afea71000799b6ec2f8d1c8542a"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d3577b72332aef71764fc9f781aaa4b1"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "739cb0a4c30c1c94cafc0cf6aadb6d76"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "469f1ed15d0d608ad4c193f7bc8161eb"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "8414086662ce4e43b2d55e50f6d78476"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "edf094c164c4823c1ad40201e3c84995"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "96963284e1c5a7cb704ed77cfe13f7af"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "05629740770fb37c3ffd14aa4bf23011"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "c64623a1a1a3191930388c0bd7a27f18"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "afee7fc917b8276ad5fbe0d0158dad6e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "4edc4245e2e861d4951ae0b656090701"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "d72bdece22daaf60d0d5fb955e4af743"
  },
  {
    "url": "404.html",
    "revision": "f7de5d2bc649674d60b5f307f9876d25"
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
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
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
    "url": "assets/js/10.8bccaf67.js",
    "revision": "410703b50c080f5fcf340797b6bffbc2"
  },
  {
    "url": "assets/js/11.1aaf4be5.js",
    "revision": "c63a25ad776cb5ff0aedf0289756f663"
  },
  {
    "url": "assets/js/12.f82adfc8.js",
    "revision": "cbd49de0d73815898e813cd800ffac91"
  },
  {
    "url": "assets/js/13.280b1cbb.js",
    "revision": "5abacfae769aed5e1463284c074a8e0f"
  },
  {
    "url": "assets/js/14.9cca923e.js",
    "revision": "ba2d28324a9b4b67eefc7a4f1f98a717"
  },
  {
    "url": "assets/js/15.dbe0935d.js",
    "revision": "784921d90f65f77639b586249a378794"
  },
  {
    "url": "assets/js/16.d00d1d2d.js",
    "revision": "1173d60d8ba1fccbfc37a84dfacaaea0"
  },
  {
    "url": "assets/js/17.b5ff1cf4.js",
    "revision": "c4a9ecd83edf6d01bd06e675d7efbe1e"
  },
  {
    "url": "assets/js/18.916dcd08.js",
    "revision": "f529b121080bed4e7e8c98d2eac9297b"
  },
  {
    "url": "assets/js/19.8ce8587f.js",
    "revision": "1ce396b36b776c04116ceb5991172d5c"
  },
  {
    "url": "assets/js/2.c632e24b.js",
    "revision": "b5f03c7139e287fec1b4d4557c51bbcd"
  },
  {
    "url": "assets/js/20.a04493fe.js",
    "revision": "2ee8f7b3361131a3fba3c95f543f09ef"
  },
  {
    "url": "assets/js/21.b4b4e608.js",
    "revision": "a2461b9cf6853acc3c01575e1c406f1e"
  },
  {
    "url": "assets/js/22.d0c9b070.js",
    "revision": "0d6c3930373b2fcfbc451c0a5bbbb519"
  },
  {
    "url": "assets/js/23.b0f1e19d.js",
    "revision": "7d3865f3e9c0dd0d7cbce667bf354143"
  },
  {
    "url": "assets/js/24.1b4d404b.js",
    "revision": "77b67f1da1854382332c7b305064d3dd"
  },
  {
    "url": "assets/js/25.8cec9f6b.js",
    "revision": "9178cd1a2be1d18087b9d4423997eb8d"
  },
  {
    "url": "assets/js/26.3b7036b8.js",
    "revision": "390d488ebb761fc64c2a91f36cad6780"
  },
  {
    "url": "assets/js/27.56666979.js",
    "revision": "f64f96974187673ef8242ffe1a018549"
  },
  {
    "url": "assets/js/28.f02fe6e7.js",
    "revision": "533e05093ae6ffe4a6b02b1a71f91088"
  },
  {
    "url": "assets/js/29.255d23bc.js",
    "revision": "d7e00785d1b8a6d87bac7ea52c4cbce9"
  },
  {
    "url": "assets/js/3.0abd1b0c.js",
    "revision": "b4fd16da7e316c9f9c156bfc224ad85c"
  },
  {
    "url": "assets/js/30.5a902a70.js",
    "revision": "9f7da007354e2b6ff3703469caa2262e"
  },
  {
    "url": "assets/js/31.5f4384c8.js",
    "revision": "fd3edc6b20601ca01d763ec4ff3765c1"
  },
  {
    "url": "assets/js/32.f5cc93d8.js",
    "revision": "e55ed81ea07432b0d88aad7d68708711"
  },
  {
    "url": "assets/js/33.5fc8de21.js",
    "revision": "0303b54c720b75ad86054eb27089d417"
  },
  {
    "url": "assets/js/34.24808107.js",
    "revision": "a97c5fda79ec6d6d49dfa665ddae3c43"
  },
  {
    "url": "assets/js/35.7a725b4c.js",
    "revision": "810c0d1aaf518756da4cd3bc07b20125"
  },
  {
    "url": "assets/js/36.8be468d1.js",
    "revision": "11049f4c2343120af296aaf0087c577c"
  },
  {
    "url": "assets/js/37.f7271bda.js",
    "revision": "18c3644b78f9fddca64f3b17d71c8298"
  },
  {
    "url": "assets/js/38.ecfe20f0.js",
    "revision": "4bc36519c99d92742bf66ce459fa7a04"
  },
  {
    "url": "assets/js/39.181dad84.js",
    "revision": "7c831241e6954ebf6e9cf0a23a784228"
  },
  {
    "url": "assets/js/4.ecad2750.js",
    "revision": "663d958d33f1226615336690e4d8a4f9"
  },
  {
    "url": "assets/js/40.d92f8c1f.js",
    "revision": "b049013e8541e815de72d08922cc6ace"
  },
  {
    "url": "assets/js/41.c606ac61.js",
    "revision": "0becf2b2b3ff32cf6a4755835c240d7d"
  },
  {
    "url": "assets/js/42.23e9bbe5.js",
    "revision": "f77f93cf7571e9c135df174d1c9a540c"
  },
  {
    "url": "assets/js/43.59b759c4.js",
    "revision": "8158e6ba51d63836ed08ee3356217a2e"
  },
  {
    "url": "assets/js/44.cf26e435.js",
    "revision": "beb16eb5ab950c55e8947733543cd672"
  },
  {
    "url": "assets/js/45.b9efc7b8.js",
    "revision": "89be511f5483372d9bcb8bfd8f859908"
  },
  {
    "url": "assets/js/46.1cbc9a84.js",
    "revision": "8d418b30326684354b7e1746dd0edf41"
  },
  {
    "url": "assets/js/47.44a5f358.js",
    "revision": "64f3e4fd8753a7e4ba3f0b1a22b6ae34"
  },
  {
    "url": "assets/js/48.10c9efa5.js",
    "revision": "d3598857be2b29d7ea80f7ab538b4450"
  },
  {
    "url": "assets/js/49.8100ead6.js",
    "revision": "877d06853e74b11aab8b8ca5d2a68640"
  },
  {
    "url": "assets/js/5.ca08822d.js",
    "revision": "58535d4daf455c8759539afe6d8bee2e"
  },
  {
    "url": "assets/js/50.6fe54a85.js",
    "revision": "8dcd93f42abf8703784470f9613d4449"
  },
  {
    "url": "assets/js/51.9c1b53cc.js",
    "revision": "66d2a8d00170a6ab549ecee86d1a2364"
  },
  {
    "url": "assets/js/52.8fc1c8ba.js",
    "revision": "724f004eaa5d0ae566e8a6da5a9e00b5"
  },
  {
    "url": "assets/js/53.700bd897.js",
    "revision": "603321a67004a27418b4b24325fd3e69"
  },
  {
    "url": "assets/js/54.b6c894c8.js",
    "revision": "f1733d40d539da75d93d0787e75b307a"
  },
  {
    "url": "assets/js/55.b2a2032e.js",
    "revision": "515464403b45ebbd0de4915a56e8e9d4"
  },
  {
    "url": "assets/js/56.9b6f57d6.js",
    "revision": "e3a59f906547f4a99db7d6a7a9121e6a"
  },
  {
    "url": "assets/js/57.69fdc385.js",
    "revision": "a8622fd8f4ab65134a7d91f5e086077f"
  },
  {
    "url": "assets/js/58.312be3b9.js",
    "revision": "215d50a57346f5e68c7db8e5cd72b0af"
  },
  {
    "url": "assets/js/59.d5efdd9c.js",
    "revision": "ffdfe721c5ae812071a4bbf5ff100e74"
  },
  {
    "url": "assets/js/6.dddbb3df.js",
    "revision": "76c3c4ed59bd7823e4d3f9cc598ec4e1"
  },
  {
    "url": "assets/js/60.24c32e1f.js",
    "revision": "f2e77513f10a355d138c7a704716e9e6"
  },
  {
    "url": "assets/js/61.d5ec9f00.js",
    "revision": "6f7363ff7ebf23553a6fc363f59f4475"
  },
  {
    "url": "assets/js/62.800a7a3e.js",
    "revision": "aae764caf6535485c03bb7d32a39c8f0"
  },
  {
    "url": "assets/js/63.2381e94e.js",
    "revision": "d9e7c63e4cc703871b6d17fb24f22faf"
  },
  {
    "url": "assets/js/64.f1bf3993.js",
    "revision": "56ce7de02a558cee54f3bb3866ce5703"
  },
  {
    "url": "assets/js/65.26c3d184.js",
    "revision": "35fb92e15d8817778a95f53ef40a412e"
  },
  {
    "url": "assets/js/66.28d1bad4.js",
    "revision": "40c3763b41967ac0ffebbd41d9c2918a"
  },
  {
    "url": "assets/js/67.f7f2b8e2.js",
    "revision": "263f583624de8b01becb07aec185a324"
  },
  {
    "url": "assets/js/68.85769cd5.js",
    "revision": "6444ea47b74af4a62a4a82129fde9ace"
  },
  {
    "url": "assets/js/69.8126cb02.js",
    "revision": "17b1e774fb20a596b0bcce238af500f2"
  },
  {
    "url": "assets/js/7.ee58f38e.js",
    "revision": "afa65188725e98e85e488f4a4830e3b9"
  },
  {
    "url": "assets/js/70.49503c23.js",
    "revision": "f4f7b57135da535fecd62a52e168c230"
  },
  {
    "url": "assets/js/71.e168ca29.js",
    "revision": "b52f38ce941b82f789769a8d5c52d150"
  },
  {
    "url": "assets/js/72.1c9804f2.js",
    "revision": "7c2a776601a9fe6aba77fc52888aec5c"
  },
  {
    "url": "assets/js/73.565a7d96.js",
    "revision": "efc0ab002042efae6a9982791a1399f2"
  },
  {
    "url": "assets/js/74.5bd24e53.js",
    "revision": "297c0f14059b98449f039b2c1c82bd26"
  },
  {
    "url": "assets/js/75.eec6ccc0.js",
    "revision": "6894b877463e74fe0e29a671f3c46a91"
  },
  {
    "url": "assets/js/76.3dbf1044.js",
    "revision": "710797e34a481f1d40087bcea13f4682"
  },
  {
    "url": "assets/js/77.67799b05.js",
    "revision": "3f065ad9b0454c3226e5156573d63079"
  },
  {
    "url": "assets/js/78.7200baa2.js",
    "revision": "163aa761945bdce1e3df3bc93dd3fdd7"
  },
  {
    "url": "assets/js/79.d377f878.js",
    "revision": "7fae7fcd3afe722f5a8efc7fdbe2fde5"
  },
  {
    "url": "assets/js/8.d0ba3ce6.js",
    "revision": "d6ce397cc975a6b077f0ea37a1eeb518"
  },
  {
    "url": "assets/js/80.ab1c7fe7.js",
    "revision": "51f86c722a67a5dc55d051a6ac21e985"
  },
  {
    "url": "assets/js/81.016e7feb.js",
    "revision": "6bed4e8115304199879a747839c9536f"
  },
  {
    "url": "assets/js/82.b12ce600.js",
    "revision": "221b5fead3e7fe6a69a303398ee833c7"
  },
  {
    "url": "assets/js/83.a846ed7f.js",
    "revision": "81c49f0c1468c7b0c245b126e72bedae"
  },
  {
    "url": "assets/js/84.f07dff8c.js",
    "revision": "21d888a7abe20ec62f17d9284b645f2c"
  },
  {
    "url": "assets/js/85.693f5286.js",
    "revision": "55a674b1510b3bb8e8aa5a98d1d096f3"
  },
  {
    "url": "assets/js/86.7e5c7484.js",
    "revision": "4156dc8334798a91ff4d4fe8d8d45ff5"
  },
  {
    "url": "assets/js/87.67c2bcfc.js",
    "revision": "c939f514d1a9de135841ecfadb0404d3"
  },
  {
    "url": "assets/js/88.9dac998d.js",
    "revision": "ea5eacccc883bc3ad4011176cf23636f"
  },
  {
    "url": "assets/js/89.0e21714f.js",
    "revision": "b1618a5a81eff19cfe96189caa1fe890"
  },
  {
    "url": "assets/js/9.731b34d1.js",
    "revision": "04f664cb911b65677acc34c41bf022c7"
  },
  {
    "url": "assets/js/90.61c8f13d.js",
    "revision": "8b9fb94f314f6bb8147752c093c76eae"
  },
  {
    "url": "assets/js/91.6b1b7819.js",
    "revision": "32ad3942689a89eb934d27a2ebc04fc4"
  },
  {
    "url": "assets/js/92.00379b74.js",
    "revision": "e7f4436b48ecb45d2c89fb23641a26ca"
  },
  {
    "url": "assets/js/app.a26c6434.js",
    "revision": "ee7a3318b6874a6815156a98cc488c17"
  },
  {
    "url": "index.html",
    "revision": "521f8962a69fd028996214227b9905fd"
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

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
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "bab74645750df1c4562c680aa8a94bc2"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "67cfe405cb17e82b42c6c0db44088be1"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e2c4ada8fb3919ecf0ba910aac0d88a1"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0da15345e9d8e53e9333fb4004dffbc9"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "18dea2fa83a28423bfa11a92510eb109"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "5cdd25acae43f321b1811384e8f14906"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "40abd0cb2d3e8a81812f4ff2f1840054"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "85f5537939a8ad8be2134a7d3e8264f7"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "dff88121e121a69a0cb5630ae4553ca4"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "8784b73381d7820be85a066457cc3a3c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "65afd7c644321854ac9d4a3e85203c7c"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "4b1c823c2cdc5f62d4f686832eeb0c8b"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3282aef886c4edb0d3f78311063b5f63"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "7ace2967d3a41b72f6fb82e4f6629d39"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "5172678080fe736f3d91c4e9d2def68e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "1ec51638774007c9313f1f9ded7ba781"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "2bb6c352c3a1adafaa62321dffe85491"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "dbd299067865a999c6c7254d3cfd3a72"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "0b02637018e16787e04a880ada7901f9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a99face391de52f24cc93a18282bad8b"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "0f3f526f6c5e610d5a0933db131ba015"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "3e4473249bf4804d044347fd09f4492d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "2a6b64018c1ca124787cec301e4a85b2"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "dd44f4424e20ec7b2d5493e449d44dc4"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "1340bd6fe57c7eec9874b59adbfadf46"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "92186bd4d3d981dc406ec75eeec6dadd"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "23addf9741db7253c7ac100876f1b572"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "e83279b7b97c047734d20877518b8591"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "99450c5ea84e9d2b57c805f2c4c8a8f4"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "21b0ce0759c2ad5fccc48f2fb7bc31c5"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "b1e494aef4d768187ba4a4b89e69e617"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "7cda9f85a55ed64b7c33b953f04c0468"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "948d6c82e37bb2e2d1b7f5d9dc3087cf"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "dd580d6b9f81afa258d4917e1e71592d"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5e33c0e809d326662eb85f72bf8447ab"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "0d0f7676d17593c4bb7e64633f8d7933"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "9a129f0ee6920b0d08abec82363239c3"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "3ceec935f56709696165877f230d476b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "61486f5b521f6af679c9fc7f16277145"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "2d153e5bb30d4965f69ca65acb85ac97"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "babb7865f13ceb70ea9effe6350d4a92"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "4cfc2abbfd113f83a67044b01bf305ad"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "bdb2624bb7def14b68703aa3d6e74a46"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "677b896d40ece774d1bcbc80c473ab9f"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "e78631a580278dbc9da1d287df4446ac"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "3077c13b00d804742e37363795728448"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "37a7c72f37bc6244dc88f3bf649de6b8"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "902511e935ac9252e8bf84d6da767c1c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "35481e5afbe4e5701a38f1fb660f84dc"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "89e6eda6cf8524dd2c8b51a9bcfbf4a3"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "ffe9eaf461cac5b5e8d1da106ceaa596"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "01a065058a36cc19993c8e73a77c1457"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "8c1c2deb95afe164d4c2590191dbe19a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "f5777248467a44e1903574d307d62c62"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "cf75f9bc2913bf70633f848f2ff68ba3"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f027d1e59a52afec152a03a688aa335d"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "a5ac5ca6114fb216b9f3332131403794"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1d9323971762678b607ec23694d7e5aa"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4be71050875f7a3ce867b0a6b5d545ef"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "747388c30c289a6d22cd07e4eac7c423"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "fc63179915f20e673d7571c08f5e90d3"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "017c3c5acb756357141f32fa6fc01a53"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "7ce1421c63604695a7058710fedb22c4"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "68b8e3d3e297c89d242a6154803b0579"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "5a3ea48677eb2def8407dd40f188a0a1"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "3538a3b13c6f58ea46fd431a6f82b5b1"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "9c96d4e505f9bcf2d831ff7c43ca766b"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "758f8dc7a88e8d085ed6024f21b93853"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "7e299203320b68c17cfef985410985b3"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "486254a77105e92b2a256ed8af413b3b"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "6e77198d53cbc405b28dd42e0d96708f"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "b5510a84c45ac46e23398162e5867122"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "e95d32e48905a6a64b6255476f11cc3e"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "9c6a4a2d7a82851609341550452f7226"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "f9d0e51afdc315614a5fc6de8db426c0"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "e965630c68c7f8edc52708206d099027"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "706e051e99453116676c69b4acd9d279"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "4d5279e0eed6379594082a87ecface4f"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "427242ffb6fd8e3d0b72d26ecb81fde9"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "05187077fa98224cb50bd3537d99e4f9"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "626f25d02f7a63de1e43e239fcedd9ae"
  },
  {
    "url": "404.html",
    "revision": "da8c4e9f26ea376726e39ae93189106e"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "229436dddc5541cc57d9d271908e7d30"
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
    "url": "assets/js/10.7dcc5b47.js",
    "revision": "37b57ad288c764c09246003833dd5746"
  },
  {
    "url": "assets/js/11.4e8f6db7.js",
    "revision": "7e5a2e76dc636627e60b8c28e7e7b44f"
  },
  {
    "url": "assets/js/12.7f9a66c5.js",
    "revision": "f57a21c7b1bdeebeca4acc2620e1a622"
  },
  {
    "url": "assets/js/13.3469992e.js",
    "revision": "48f401f2586102ca67943be453dd7a29"
  },
  {
    "url": "assets/js/14.f1f6e33e.js",
    "revision": "fc6fd62b2fd662e2e7e19cfca2cb811c"
  },
  {
    "url": "assets/js/15.319ec07f.js",
    "revision": "4254641a7681b6d9235e810f0c0df679"
  },
  {
    "url": "assets/js/16.70590044.js",
    "revision": "94242b46c5c37a12eeeb15a22de0723a"
  },
  {
    "url": "assets/js/17.fa4983b1.js",
    "revision": "767c534ad97d7775e153ba36ef6a685a"
  },
  {
    "url": "assets/js/18.46d3613f.js",
    "revision": "806ba36d4643e586b186af3e0d083195"
  },
  {
    "url": "assets/js/19.fcaa2cfc.js",
    "revision": "a2f7f2082bffb59b811f17d039e99fac"
  },
  {
    "url": "assets/js/2.7f066290.js",
    "revision": "10f0794982f89da1a31ebbbce7b5ecbc"
  },
  {
    "url": "assets/js/20.038f829b.js",
    "revision": "3fd44851d9a518476c2dd83af3627076"
  },
  {
    "url": "assets/js/21.9e54701a.js",
    "revision": "949ef418e30404187a1b59fe6afc8b8b"
  },
  {
    "url": "assets/js/22.4382ec7d.js",
    "revision": "d262607c250f572d0389501ea6c843cf"
  },
  {
    "url": "assets/js/23.5118c78e.js",
    "revision": "ea316fcdb93c32bdd96891d2491d9c79"
  },
  {
    "url": "assets/js/24.8f6a5ef1.js",
    "revision": "c6e78f22f8f1221de5f837e43a85f040"
  },
  {
    "url": "assets/js/25.23b0f761.js",
    "revision": "3aed1b77a373da035c167a35d916d849"
  },
  {
    "url": "assets/js/26.b946d6e3.js",
    "revision": "6b5cb197d025d9c3fef229f3e21bb3ee"
  },
  {
    "url": "assets/js/27.26b29fb4.js",
    "revision": "dcd68aeb4b4b44adb1d02dfff0d365d4"
  },
  {
    "url": "assets/js/28.c95b835b.js",
    "revision": "8f5145d8f0762c35b32714528a05e888"
  },
  {
    "url": "assets/js/29.66d0a0de.js",
    "revision": "c0a7bafd10a5c03493d23fb55cc4db6f"
  },
  {
    "url": "assets/js/3.e24f2e4b.js",
    "revision": "2d852947621a5213fd0b65464e5ced79"
  },
  {
    "url": "assets/js/30.3b6d298f.js",
    "revision": "0224b0aeff1f1507e6bb651586feca09"
  },
  {
    "url": "assets/js/31.f5871a99.js",
    "revision": "741eb589f359f145038e928c3f9dca14"
  },
  {
    "url": "assets/js/32.b03e59fa.js",
    "revision": "aeb3997f6b12203b0fe86743f3d7d7c0"
  },
  {
    "url": "assets/js/33.2b25bd15.js",
    "revision": "98170082889763399cc2a28dcac28fe5"
  },
  {
    "url": "assets/js/34.86376ae0.js",
    "revision": "f98bebd6442a6baf3cdf2b3a4f0c81dd"
  },
  {
    "url": "assets/js/35.080b5557.js",
    "revision": "ab5c48deb3dcf4c3420458b4a2cbf573"
  },
  {
    "url": "assets/js/36.6a76435d.js",
    "revision": "3937cdc42b05a6a3ec49ce7cfc5dd072"
  },
  {
    "url": "assets/js/37.06f01b18.js",
    "revision": "0888ea5f89a6ddd6c5b42ba6e4c43892"
  },
  {
    "url": "assets/js/38.573fa497.js",
    "revision": "f9f3fad0c5bb47de07f610eb0a0484a9"
  },
  {
    "url": "assets/js/39.52cbd3c8.js",
    "revision": "0e90d632883e4bf43da9a795d4f6b562"
  },
  {
    "url": "assets/js/4.c2f5df46.js",
    "revision": "a247591e9c385818bee302f1109b2e30"
  },
  {
    "url": "assets/js/40.8569b183.js",
    "revision": "ce6868d9c63379aa610d530ce039ee2f"
  },
  {
    "url": "assets/js/41.e9c4260c.js",
    "revision": "7d67fdf514e5cb7627cc0e217471c61b"
  },
  {
    "url": "assets/js/42.06b60635.js",
    "revision": "2cf06d9ab857052124a6db3e6be6a047"
  },
  {
    "url": "assets/js/43.8abcce28.js",
    "revision": "9581b76269cb6fb8f9f891cde0fca7f5"
  },
  {
    "url": "assets/js/44.374cd2e2.js",
    "revision": "de1b4806f3954657059f2f6c5aeadd49"
  },
  {
    "url": "assets/js/45.75ab8282.js",
    "revision": "b180806736c29e1a522df15a6bb28cda"
  },
  {
    "url": "assets/js/46.1f522a1e.js",
    "revision": "fd722b4c0c017453aea7c76210a3828c"
  },
  {
    "url": "assets/js/47.695b3274.js",
    "revision": "6b5c7496b8fab1e5d910f76525b471dc"
  },
  {
    "url": "assets/js/48.68e8fefc.js",
    "revision": "8b7ef001eeb4426641b42d4d862167df"
  },
  {
    "url": "assets/js/49.029e9aff.js",
    "revision": "67e79cd111d49530c2cb96472a6dbb06"
  },
  {
    "url": "assets/js/5.4e69e79c.js",
    "revision": "24a1b0a9fdb5df1e6a6b1448fbf3d9fd"
  },
  {
    "url": "assets/js/50.8ca02e17.js",
    "revision": "cb578a89c3ccd8b9c4b0c79415846624"
  },
  {
    "url": "assets/js/51.48480778.js",
    "revision": "6fd8575e7978c460a0ac3f9a7dc6b82c"
  },
  {
    "url": "assets/js/52.b7a6fff8.js",
    "revision": "2204fc69c7f62e06e169031749268a4e"
  },
  {
    "url": "assets/js/53.f597282e.js",
    "revision": "2bc5b7e972f4b16a7d4b02c76c606383"
  },
  {
    "url": "assets/js/54.10bc587f.js",
    "revision": "bf480804a62b031d51a1ed6b40ca3c70"
  },
  {
    "url": "assets/js/55.7aff4aa1.js",
    "revision": "8510ddbc7a32e815605c8961be931856"
  },
  {
    "url": "assets/js/56.3e2a90fb.js",
    "revision": "4449098cd4518fb29622c159a6725519"
  },
  {
    "url": "assets/js/57.6720e23f.js",
    "revision": "190c307c5625818ec51e4c0bb69aba14"
  },
  {
    "url": "assets/js/58.f2c354c3.js",
    "revision": "b6a9fa161bb905e3afaae37cbc0a6c9c"
  },
  {
    "url": "assets/js/59.15d19841.js",
    "revision": "64c5ea7c708456fb6aa0e014781d02e2"
  },
  {
    "url": "assets/js/6.5c9f72aa.js",
    "revision": "396bde4b7568dac0adce6396e165eec5"
  },
  {
    "url": "assets/js/60.fc3ccd24.js",
    "revision": "26af37d29a4845405fae43ab2bb4f8b8"
  },
  {
    "url": "assets/js/61.5dc6fb25.js",
    "revision": "c892916eebbe09cfb99b98a8d454a885"
  },
  {
    "url": "assets/js/62.9047b57f.js",
    "revision": "6aa493595f4b9fbb8758d9596cc00412"
  },
  {
    "url": "assets/js/63.8ef41104.js",
    "revision": "3d9fb7f9845006da8cb2a0917582ff2f"
  },
  {
    "url": "assets/js/64.54991bba.js",
    "revision": "95a237505a2db7d3fbe5488b79ff2181"
  },
  {
    "url": "assets/js/65.be685fac.js",
    "revision": "224917dd34a8053da9ae8c93fc7e9a06"
  },
  {
    "url": "assets/js/66.567cc65b.js",
    "revision": "09f0be5fe6236a52e53c6f1c2282427f"
  },
  {
    "url": "assets/js/67.c5650f42.js",
    "revision": "383711473b5a34126764f19e8c23de30"
  },
  {
    "url": "assets/js/68.8ffc250c.js",
    "revision": "81f16dfeea65d773b9c964950d41f989"
  },
  {
    "url": "assets/js/69.93653d17.js",
    "revision": "09402d01c72609543ee3f7e4be7b4e5f"
  },
  {
    "url": "assets/js/7.2fe3bb02.js",
    "revision": "2b29cda2826659bd87a106e9bac5d33a"
  },
  {
    "url": "assets/js/70.7001dade.js",
    "revision": "574ba51894389d51def7c75afc43a2a3"
  },
  {
    "url": "assets/js/71.24b0a30d.js",
    "revision": "a9d2ca906e29870326ee0bcb6526471b"
  },
  {
    "url": "assets/js/72.1af7ef0d.js",
    "revision": "8ac57a69b3e4f25bb7e83e1bb2987017"
  },
  {
    "url": "assets/js/73.45319e43.js",
    "revision": "12453ff4858a175e738ba670b2f614d7"
  },
  {
    "url": "assets/js/74.81ac65e4.js",
    "revision": "459df5daf14e22c9fa7b03de1be28e3c"
  },
  {
    "url": "assets/js/75.53680175.js",
    "revision": "57fc53a7b591ce7e4bfc5359566c6ba6"
  },
  {
    "url": "assets/js/76.5ac56754.js",
    "revision": "0cafa26e95cbe8b4e345540634af984a"
  },
  {
    "url": "assets/js/77.0a08e6c1.js",
    "revision": "d098bc6dbebe2665ba59b36eab39ceae"
  },
  {
    "url": "assets/js/78.72f3dd6e.js",
    "revision": "69e7c1dab2b1f2602aa46775fb3de5f1"
  },
  {
    "url": "assets/js/79.569a9924.js",
    "revision": "d86677cf9f5b6803a1a1eab7c37d821c"
  },
  {
    "url": "assets/js/8.e773b0b6.js",
    "revision": "d506843bd5b515f5c42a36e93e85086f"
  },
  {
    "url": "assets/js/80.e6246cf8.js",
    "revision": "0391d12420b93f50bb61ff7632a9fefc"
  },
  {
    "url": "assets/js/81.028e2e8d.js",
    "revision": "c03ac0709278ebc268a0f0cd84366ed9"
  },
  {
    "url": "assets/js/82.4040738e.js",
    "revision": "c06070ad72317af6959247e9ea664c01"
  },
  {
    "url": "assets/js/83.382fe0aa.js",
    "revision": "e7aa0933dffbce6a74d154b917e84127"
  },
  {
    "url": "assets/js/84.b152ea0c.js",
    "revision": "a85ad5af79951752ea313d77489dab95"
  },
  {
    "url": "assets/js/85.a77934a1.js",
    "revision": "fc4becc511a753c639c704d1f6d3a60d"
  },
  {
    "url": "assets/js/86.255f4e2c.js",
    "revision": "7019e5fb3e6f93d3395890716d212ba8"
  },
  {
    "url": "assets/js/87.ce7e86b9.js",
    "revision": "a673c597c072b53dca21d640653d80e3"
  },
  {
    "url": "assets/js/9.d9b6d482.js",
    "revision": "a736ab9167407563a547666486563685"
  },
  {
    "url": "assets/js/app.6dd1b12a.js",
    "revision": "3739cedf639f76f027e888fef65942fb"
  },
  {
    "url": "index.html",
    "revision": "ca7ff65fb041620622802901a98e9587"
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

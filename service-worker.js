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
    "revision": "f241739409343ff0cfa949f328a07c62"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "c4d513660898d4df5c7b3c2f25af783b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "a9eba23883dbb9b2ddaedd419fdd77ab"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "e5574008cc5df32ca138ae2c48be90e7"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "b4b1aee27f667dbff737331b71fefc48"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "b916de4e85a79195e39c90ddb50d3baf"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "7fadb73b24051286e901fc362898c22a"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "48f1f6695e8ed6b009641f98e45cb16b"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "600a6f561161f1569366e9342f5b63c0"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cda1cab2053107420db094f12ae368dd"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "06fa48bf448f210b45574dd944bce4f8"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "455b0ec6c837149c98ed0ab1ac61dda2"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "208c11d3fe06485a30890120e891146e"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8a259575b2a5823efa1ab0ad8aa4496a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "75183e47b2c71094351e653ea0cad107"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "80c1f3cda9864522cd83653c0c52d6f1"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "80170a6bbfcf535489404e492bd1bf7b"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "a66978176eb5ddae873ec8635597b97c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "9d71debf6bb0e017e1c3b80910cfccef"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7c0cf90c271dacb2e5a3d41d653f2cc6"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "d6b21e32ed409968d9f2b867109c9db2"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c30097e0f64224ff49c947d6e25f5512"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "ab3ee0c9c95ab3f8666443fcebb4e3c4"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "fd39803ae165ea38a6efe55575b98639"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "bd3a45ba6833200bedfea4e5a200a5b5"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b1fbdec7b1da66c6a8df49d385b26c7b"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "92c687e69d32612f0aeb2e89fd0ab4ed"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "c0cb1f971b84a1c24893c754866db3b6"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "9fdcc9047d9dce47229d3ffb6518622e"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "635ae6aa222b321ebd9f63c54ba62991"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "eb6020307bb3620b5883677480a9c9ba"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "47222934dfdd08100aef93e99171c7e6"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "9c0569ce9aa40959d01bfefea2039e28"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ad2503b12bc2e85e037292dcd5d5efec"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "1b1731b84a869437a4303739981fba8f"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "51f3b91ca9d812ab75e4a7f95760598e"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "2f511f5dffecf4d7c8a4401cadd7bcfd"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "cb91eeb8d522ab9a475d39788c952e72"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "9fc97fb86ff3ad7c1df9412113085a69"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "20bd67363c5424dbb366001e7817abdb"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "73145f55419ac4a48fd16047122a1967"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "166e0e868ddfcd5ff5cfd3ca53657a2c"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "014fc8fb50c94b261306425cc9d6b351"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "b866bc89777f02450bd569bae36ef51a"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "c3b210a34aca1ada81b70d6e931c528b"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a2975e1a8d4b6824286e59823b67a303"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "015a40f659271f4c6d8b0fd33c3e7883"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "a5fc251ecb9674444fe47b3ec7e3e863"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "6afab01fb6bb0fc6d372d1e3a245444d"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "ed22d787d233764145c01cc1a89d04c1"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "147b070a4618ceb1c2bfae6b1dafbe5c"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "1e45354067de82403e327943f4f96e80"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "54c135575c6218258c544394a66864e0"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "dc4ae4ce7163de2f4b4877b5f3c5bd2b"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "0900f475f5e1ca11ef8657767222fd49"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "3c17265272ef4a18ca8dc747f620031e"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "b92f153e8fdf56b810387d51174a16e3"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "b7f99dc9dde79d7c8f69d2d3088a0f72"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "f73451433c6f7d42625d50e48d14f576"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "588f6cdc31fb4c2d655995451f672b57"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "26c205bb12f5b9f55ca1ea716dd2bb4e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "bb50144ccd8fd0b86954e63889de3f58"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "8dacf022ead6ccbfde4e70852998265a"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "5b77572ee440d5a513b80c9f271fa9fd"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "f11fd1f02816b0231540ef5b31df2e1e"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "6c24ac293b3d94ac7e1a19d754b273d5"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "4477deb31c170345f37d64a43f1d6020"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "d9cece013e4003545265117d1d151ebf"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "41318492e035f99188bf5ae9b46859bb"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "a2b0bcd2c881159015a4989c15325eb9"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "50c13a8aabc524dbb6883ce59fed81a6"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "bd9f61da8c3c419b8b2dd63593a1b097"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "2a8b304e3473c461a57b594d812db832"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "f3a8bdefd548c85cbdf8200c581950f9"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "0f6f0b57fbc2fb6a2ec7c2f6bf840b6e"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "f9ce157ea7ddf910324ce68c7e8f3240"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "e437dc463914112f8055e1265668e2e6"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "85b33797fa9f5768415fd952135a19df"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "850b01fea4426062d1dee8e2ccbe7616"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d730d65f9947b86a04ef44084c99722b"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "dacf80a0fe6c5a1563268619b67d2c39"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "edededd0dcdb8467ac9912be9defaaa3"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "4560d39aacf1a2372391922d4274aa92"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "800359c108d3c8f6b5ff693204dbf1b6"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "a5585341b3bd4bc819a44fb519a7044d"
  },
  {
    "url": "404.html",
    "revision": "520d21a96e7107fb097f611b45062f1c"
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
    "url": "assets/js/25.490611ea.js",
    "revision": "03bc839f57b996f3242133fe15997c8d"
  },
  {
    "url": "assets/js/26.0fa43980.js",
    "revision": "dc83020731c8e703bd4ff730832e43d4"
  },
  {
    "url": "assets/js/27.07bc4906.js",
    "revision": "1946cfd1e5e297cb4e5187db3dd42f0e"
  },
  {
    "url": "assets/js/28.907dbedb.js",
    "revision": "a38c488879247b0c4785fb0f60f930a8"
  },
  {
    "url": "assets/js/29.5c5c14e8.js",
    "revision": "6d56c6f2c208eb06836c5786395b1284"
  },
  {
    "url": "assets/js/3.0abd1b0c.js",
    "revision": "b4fd16da7e316c9f9c156bfc224ad85c"
  },
  {
    "url": "assets/js/30.e6ac4b3c.js",
    "revision": "b9fd6241a29370a3cf3e864bfe566212"
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
    "url": "assets/js/app.4ef68992.js",
    "revision": "6b1276bd136b681ddff2291127b85f7a"
  },
  {
    "url": "index.html",
    "revision": "6c375fd6ceb499d97fb0c49685bc5746"
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

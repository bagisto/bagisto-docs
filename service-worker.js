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
    "revision": "1bdad49cbd43bfa639fb55009847934d"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "92c5f49dcf966947152498195d43d597"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "98a94f6dad167a8fd79c237957aa2ad1"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "3456d0d40e28eee3438eeba785fc5d86"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "93e62b1f8f50574b93417373b765eaea"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "f6b7c490a65888adc66dc2d90a9551dc"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "92b4fec80f25361873b480859cd18b3b"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4d590004ceca26a1da977ea901176ea3"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "ad5cc8efcc83a20efd3c637530da9f3d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "891821b910f3674b3a417c2d2d283160"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "f61330387b549974fbac06be40d837e1"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "07a156165723470508056a5a7c7b9a00"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "8ba94756294d79a2d8841c14c9040ede"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "d97ca3614df9407633408c12376c5b2d"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "8696f341e52dce16fbeee399b53c1f9f"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "06c962574e8050d581d1f10cdbb3385b"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "688140964f1ec5f9012d25b1cc4936ba"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "5c42851e043a61bc9f96c2ca02841e30"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "6523b3ef7e223fafaf42d4adb3121a29"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "7332f7849d8101eb022e1746407474da"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "3920388b38c152d22ec26553db2092dc"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "07867743b1af200bfbbb0129144ff797"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "edee2f871b09cd93392516a2ff24c77f"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "654ca8cedf5a45961b8e15098a391b97"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "8fbf3b1c961217565c31171265e5fddb"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "d7f1a74357bc8d5bdf9b874b4af94b3a"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "f68d668519c452fb0fe2c776567abee4"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "9266e830daeda3d6903bb87c02d3a545"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a3e190d0dad7ed9228c013a92825d277"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4435d206dfcc9d6389835d912f5adc9e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "f3b06ed075172c997b3dec152c27157c"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "3f12543bc32c07a5732181bd5f82d314"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "fc346d326aebf442f8e0e9fe0eeab69c"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "34144a1b046d646fb9648e98ae1bd1b7"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "6ce0a88ddf50288f900fe7868eca7c19"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "aad4cbdfd1abd258784fbb0c507733b2"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "1c1067c554012c2a1455dbd63525549b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "ad923ed0269cd0fe0bf9bb08d085234b"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "bfc9a321e1a80f14b87a27987513093d"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "e01a8fa08239ef12de2ae4078845ce0b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "f9a1443d8d0d6b6ceed5a04103ec1977"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "d4204777f133ea7510f1777040e01bc8"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "74518b72acb534bba0a8a863009f7ae1"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b4c5656bb7186e0ed4b2898e869575e4"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "1bf20e2fa6939b97860141f06dcbd96c"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "de078df8d264199bb8b7247626ddea2f"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "aa2342f5dff0b3872d1abb97ffc3dab3"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c47f06bf7e42d6c0f7096344e45bc35d"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "4246915eaab9c3d83e45f68444c4a43f"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "80b698ebcab4c3b84cec96c845b9c474"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "c656a055e5e5dcaed157c0adff0681f0"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "54a3c94d65cf58fc6745c88a57a9ebc1"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "5cee5a9c16c2f25edfb69bf4fed69c62"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "bec8e04c4d5194b83ce4e04a6a773a4e"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "3027f63879daa5b84e5134c33d4c1ac5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "847e17e15942ffadf8323faa631e607e"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "36373c7df1aaa5d086e58bcd4732bf4a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "3d85dbbe249a58fbd3f56cd13fa140c1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "1ce689c45e6b0cae231bfb3145d4d34b"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1f7dbb3eea2922343e1d3fc131491bd2"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "821ba60488fe09d7d0b8394a71c9bd1d"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "9f15120d2c0c57c4b4cc97d0ef959ada"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "476ef6a2d19fec62319bffda9d3f9ea8"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7443b0078e6c1ae0cbbbe0b3373abe86"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "bef4df70b1891cfe15be3a268f0bdc44"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "a03bf89f011b268badb03c3d83435afc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "6f5a4a9027a4369883e1e7c0f226b421"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "8ee60ffd8a48452ac21899bc77ba56ac"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a94f683772f42ddb397dfb9bd9441553"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "c66124b0db0c9bbed0c5203cc5755d7e"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "d9949c219ecca660e33e775b1e82d322"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "644ace3369ad23944ff4eaa4ceb0edfd"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "f2eb82488002334649ae191b4bfe1c23"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "4c9324bfd6b4a5073ceaa576bb5aa1c8"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "5bb61dd376c266e242f26ba51d8eac56"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c9aea63e0ee446340c9c89a01b1306b1"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "7b42f0e56a7bc0ce51fac47b09fd0ec2"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "559813b892ecf537f62d9a81be8a1c48"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "79e9269818e39467c81ceea1143a5553"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "0193fd8f30aca65a19715e0627da491b"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "dbad558674c71011eb3ce3bdb10ca005"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "ea873baa3cdaec4d7a6d6da6d66a6e5a"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "1f384abe23adfd85acac4570f9fd65f0"
  },
  {
    "url": "404.html",
    "revision": "3343f0bb3c6ee7b8721949fe13395fc7"
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
    "url": "assets/js/10.50a5c549.js",
    "revision": "9c25ab9595cefab21ff57c213257f559"
  },
  {
    "url": "assets/js/11.e7e65149.js",
    "revision": "8f028e8e1a2467c8abbcba4e9c0d596c"
  },
  {
    "url": "assets/js/12.976ddd2f.js",
    "revision": "55031fcec70997070ae053a18151bf3e"
  },
  {
    "url": "assets/js/13.4c0080fc.js",
    "revision": "8c0c489abace693f1b94a4f6d4901a32"
  },
  {
    "url": "assets/js/14.86ed2001.js",
    "revision": "a5c40c855a80c0d9e969b2c433e1adf5"
  },
  {
    "url": "assets/js/15.30bc4b0f.js",
    "revision": "55e535b8153b477be3d7c8b58f6aef88"
  },
  {
    "url": "assets/js/16.6e033a0e.js",
    "revision": "d0d34a88ccdf675270e81436f2dd4196"
  },
  {
    "url": "assets/js/17.09a67b45.js",
    "revision": "dcedbdd0a6af97e1b15adf3e1140d295"
  },
  {
    "url": "assets/js/18.89d146cb.js",
    "revision": "f39bdeaffb6bca7ebd94424eb0dd25c8"
  },
  {
    "url": "assets/js/19.38e05591.js",
    "revision": "6d4cbab2dee1a65a70ae6219fd73c4fa"
  },
  {
    "url": "assets/js/2.c632e24b.js",
    "revision": "b5f03c7139e287fec1b4d4557c51bbcd"
  },
  {
    "url": "assets/js/20.7799c16d.js",
    "revision": "fe38bcbcf3a439e7c1972ed5771c4324"
  },
  {
    "url": "assets/js/21.b4b4e608.js",
    "revision": "a2461b9cf6853acc3c01575e1c406f1e"
  },
  {
    "url": "assets/js/22.bef0e034.js",
    "revision": "c736b21454a1f4448a69638f2e16913c"
  },
  {
    "url": "assets/js/23.b728c087.js",
    "revision": "f7ecfe0cb68fc9cf4ba37c5e02df9a5b"
  },
  {
    "url": "assets/js/24.e8ee4d40.js",
    "revision": "90a66a55d7e576b8864e23203b868623"
  },
  {
    "url": "assets/js/25.ff8f0161.js",
    "revision": "2ed8e1e30c67a58908ecaceebfe310fd"
  },
  {
    "url": "assets/js/26.a5c34563.js",
    "revision": "c40930ea344418c53062a2fb7247f8f9"
  },
  {
    "url": "assets/js/27.78d94058.js",
    "revision": "aabf969f88d27f4f0ff4314597f88c43"
  },
  {
    "url": "assets/js/28.948f3086.js",
    "revision": "5091725335397186633fa4b8257ad3ff"
  },
  {
    "url": "assets/js/29.e384e6e1.js",
    "revision": "e4e02a34066c9b79942613475a26ca95"
  },
  {
    "url": "assets/js/3.0abd1b0c.js",
    "revision": "b4fd16da7e316c9f9c156bfc224ad85c"
  },
  {
    "url": "assets/js/30.a1e05aa4.js",
    "revision": "f4f505363d1d6aacab3e0bfa79b945b5"
  },
  {
    "url": "assets/js/31.d8794216.js",
    "revision": "d8a7e403cc3d978e91f6a84fd4d8a0b9"
  },
  {
    "url": "assets/js/32.4b0abd3a.js",
    "revision": "2804e3c5a2a1364472fd5efd816f2b0d"
  },
  {
    "url": "assets/js/33.a235c262.js",
    "revision": "6426fa77ed11c63a7f538575fd0be61b"
  },
  {
    "url": "assets/js/34.292c45e3.js",
    "revision": "339c1f4498ff4971bce936f98b05d268"
  },
  {
    "url": "assets/js/35.2cc724c0.js",
    "revision": "4a95a59fcf8b7068e57c8371b85c07a1"
  },
  {
    "url": "assets/js/36.58c05e36.js",
    "revision": "45b1d7a697a4e9d62d7161c7b2cd01fc"
  },
  {
    "url": "assets/js/37.5fee0d83.js",
    "revision": "415e3e9bb49782c3a15eb095b311101e"
  },
  {
    "url": "assets/js/38.7ae6c3ef.js",
    "revision": "b98ddfc36940cb6924a875fb5eeef863"
  },
  {
    "url": "assets/js/39.14f92134.js",
    "revision": "c49db3001de6e0cc8b775aa86c490ae2"
  },
  {
    "url": "assets/js/4.b8b1e4ef.js",
    "revision": "f0cdcae6ec893d2f1f3c8beb5a4a4f34"
  },
  {
    "url": "assets/js/40.79b0fc46.js",
    "revision": "dcfe4b2be333aec0d5d9194e304bb9c3"
  },
  {
    "url": "assets/js/41.33e847e0.js",
    "revision": "ddb6eb9be89a07860e93b9aca90fac3c"
  },
  {
    "url": "assets/js/42.eb762c9b.js",
    "revision": "53c99d50ef66569f4e6a1c78e7f1cfea"
  },
  {
    "url": "assets/js/43.01f56a6a.js",
    "revision": "5c709abb2e4fdfcb50cf9e3527579170"
  },
  {
    "url": "assets/js/44.2da3fc52.js",
    "revision": "2ba75428a7b3ef5571989240606b1200"
  },
  {
    "url": "assets/js/45.d2d8b441.js",
    "revision": "25fd491977b3549b9f3ddb96be28e35d"
  },
  {
    "url": "assets/js/46.d8ed30ff.js",
    "revision": "2aad0dc18c6f748f0941cac5fc26cfcb"
  },
  {
    "url": "assets/js/47.5720eca7.js",
    "revision": "bc4c25ea857a17d91e33d86a47b9e13d"
  },
  {
    "url": "assets/js/48.f1e43222.js",
    "revision": "4f853122d69c92575637bac5822f4aab"
  },
  {
    "url": "assets/js/49.87d7dbe1.js",
    "revision": "8c70989dc7c54685e82198179104873c"
  },
  {
    "url": "assets/js/5.545e765b.js",
    "revision": "3d98477f303de355a69e1de394c35da5"
  },
  {
    "url": "assets/js/50.bf0fc331.js",
    "revision": "7a13e59b5bbe7f1e7560146c531d40f7"
  },
  {
    "url": "assets/js/51.b809cf7c.js",
    "revision": "c8fbd59dfa246abcd1e5bb6a67bec9f0"
  },
  {
    "url": "assets/js/52.2ef45697.js",
    "revision": "97c236e78b0619c717e5c4a726848748"
  },
  {
    "url": "assets/js/53.e480fbd9.js",
    "revision": "f82b889e1f3ed1792eb843d2f49677de"
  },
  {
    "url": "assets/js/54.757c8e51.js",
    "revision": "376ec7bbdadbd74c384b0aecaf819984"
  },
  {
    "url": "assets/js/55.e3c1e8da.js",
    "revision": "ed7401881f7e2d601402198cca17051a"
  },
  {
    "url": "assets/js/56.5dac5f73.js",
    "revision": "7852fd498a023b093c10e25c1805d570"
  },
  {
    "url": "assets/js/57.1821765c.js",
    "revision": "fcb45f5a777716844a98f0766f92e384"
  },
  {
    "url": "assets/js/58.97295058.js",
    "revision": "02a3a15395df6edd09927634f57f03b8"
  },
  {
    "url": "assets/js/59.93f42920.js",
    "revision": "ddf9c7bdfa64083e5e5637cf9da53ab1"
  },
  {
    "url": "assets/js/6.c06010f5.js",
    "revision": "a5850f7cb7de13793030c593b513e78a"
  },
  {
    "url": "assets/js/60.361ecd0b.js",
    "revision": "3edcb1a2af55f437f41a8154d0a12069"
  },
  {
    "url": "assets/js/61.ac839a68.js",
    "revision": "66dde3a31a20065711b0bfe30e0b2380"
  },
  {
    "url": "assets/js/62.fe6affc4.js",
    "revision": "fd593ce3a5eeed8ad6542ae5ee234ed1"
  },
  {
    "url": "assets/js/63.5e5500fe.js",
    "revision": "8161e7a446379d20164d49cc58bd1f6b"
  },
  {
    "url": "assets/js/64.9308db41.js",
    "revision": "e39036983e063744b904a7adf850fd0e"
  },
  {
    "url": "assets/js/65.eb36721f.js",
    "revision": "158d4b8c667f6033255f2bfc6a2479a9"
  },
  {
    "url": "assets/js/66.be5b2fc2.js",
    "revision": "a7be66f9563d82306189a7cfc709db3b"
  },
  {
    "url": "assets/js/67.db03f900.js",
    "revision": "6040bf440b3c905ab667b3b7e5e79e5e"
  },
  {
    "url": "assets/js/68.859c3266.js",
    "revision": "944b0cbb5cd9bba1fbfcd18b37d48618"
  },
  {
    "url": "assets/js/69.ff6ce3c4.js",
    "revision": "337be963dd5ea4033b4b2a3cf1ae4bbe"
  },
  {
    "url": "assets/js/7.f6581774.js",
    "revision": "0450e0a952dde10d2c89a6853b7ab5bd"
  },
  {
    "url": "assets/js/70.9c684d20.js",
    "revision": "b427a2e9ba0e32c77020645397c35618"
  },
  {
    "url": "assets/js/71.252b1cd4.js",
    "revision": "cdca030dc626e7680f35053fe5b87cd4"
  },
  {
    "url": "assets/js/72.44e0bebe.js",
    "revision": "b7867267f259631061affb1569bd4e1a"
  },
  {
    "url": "assets/js/73.ab8e3ebf.js",
    "revision": "0c3f2159171fb81ff11d50e8183104e9"
  },
  {
    "url": "assets/js/74.57ee1b59.js",
    "revision": "8faa17ff33da916a2498c47ce8482f90"
  },
  {
    "url": "assets/js/75.32836a75.js",
    "revision": "0df1284f2a8cd0efddfa2dffd0396a11"
  },
  {
    "url": "assets/js/76.756959b1.js",
    "revision": "6e1ba8ab7b2bc83c166aa925f1e32480"
  },
  {
    "url": "assets/js/77.db9a4348.js",
    "revision": "e822f2f2e02396030dc0dbbfc616fc89"
  },
  {
    "url": "assets/js/78.9e729c80.js",
    "revision": "9f7fbc5bb7ea9b12741feac25113d97c"
  },
  {
    "url": "assets/js/79.774ab318.js",
    "revision": "f6666c501de8c971425c270b120b659d"
  },
  {
    "url": "assets/js/8.c87ac0b4.js",
    "revision": "488047a7c7535c98a4cc19b7e2bed462"
  },
  {
    "url": "assets/js/80.2b0af538.js",
    "revision": "fcd6e64411d4837eddc8c19f0c173fe5"
  },
  {
    "url": "assets/js/81.aa4b10d4.js",
    "revision": "14c2a32369ad06ea68756115745b0e70"
  },
  {
    "url": "assets/js/82.020c6cf6.js",
    "revision": "33ee59d3c55a288fdc7ea51bd8febc79"
  },
  {
    "url": "assets/js/83.1ac77e58.js",
    "revision": "8b347879f08147696505403c7d57790e"
  },
  {
    "url": "assets/js/84.dfff7e26.js",
    "revision": "c536df25cef60a734544bbbc730c0f98"
  },
  {
    "url": "assets/js/85.2409957e.js",
    "revision": "ef6fe194ecc747e22010785872323955"
  },
  {
    "url": "assets/js/86.86ada0b0.js",
    "revision": "b11f8691e62ef504f2024d9c15c89ebb"
  },
  {
    "url": "assets/js/87.2315d550.js",
    "revision": "697b66f0bb7f23e53ebaed80bcfa8c2d"
  },
  {
    "url": "assets/js/88.df45bf3b.js",
    "revision": "5f3d72bc130d49abb5ac764d5dd0cac0"
  },
  {
    "url": "assets/js/89.c352b3f8.js",
    "revision": "d6c2d2880af2538f556c95f1203c74ed"
  },
  {
    "url": "assets/js/9.ae7f2b99.js",
    "revision": "5425b38b6408dfbec9060ee7ded83830"
  },
  {
    "url": "assets/js/90.b6950466.js",
    "revision": "dbbca41fbdb5e6a008bf7631c25e6559"
  },
  {
    "url": "assets/js/app.21dd959e.js",
    "revision": "0c2336ad9506c6dea7ac679224dd1be2"
  },
  {
    "url": "index.html",
    "revision": "2db4a4bb462c11520f0e504aa3dbe724"
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

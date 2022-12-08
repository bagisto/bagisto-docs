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
    "revision": "00843dc668b424da79208565fedc4745"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "f0cf127b195a36a998c1020119e640d7"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "bad9e2467c06f25ef7ceb4212c9dd2cb"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "563e8baf5002dc10ca1ee3b93ea54d07"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e7749d65e0973ae84297f0d7178789e9"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "8a57c0ea29fff00b60d4dc846921a281"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "2b292d1d1e43e343ac436cc2f8ac8b70"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "0624117d0332e07fe8b5b30108f3bd9c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ec1b881a48698be1e5d129b0bcec5153"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ec569c13d0bcdf9f26b29e831ff6308b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "139e67d6497102507b0335cdf460e4a4"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e3810601ba6e58105b11fecd979a6932"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "96028757d8336ecbdac12cf5e9e64b17"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a0ca6e08b1d89109781294aba303facd"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "167a8fee3907b5fb4a8831d2428c8f41"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "789f7e8cff99e0f6906b3d2ec432849f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "07293d66000a564a9d279f5e03e4a7a7"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f18059085f8b98c6ca326767f01109f8"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "22075f50e6fcca349dd6d674e7f1a25e"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "d9c0224171d2f85d8d12ef10101bc0f1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "c6403ecb369cb12b94e752d30485114a"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "b64f599fbc488f179f69e1747b20b05f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "e6be0110f49e801884204f858e8eb8b8"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "9815a77dea13299333a379c177fddb6b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "5c6f13e5cc4a30b5446f7560b4a9738b"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "033506cce18e6a09e6c2888bd0b0b43e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "77fbefc4f39f8a861b1fb58ce01cb10e"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "7f3f2ca8865e9e8575609aab989c09f3"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "1fe9126b051821513b7295bf09de59b3"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "254bee33912f81dd9f9b4b85ff35d3b4"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "c2fa726abe683b2854ac6a3fd3380f82"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "66bfb940a250457997954b6b81815157"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "a3e23123996c7209a854328c5f3cf50b"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "a5250a9e5d9549c37a91cc8834716b43"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "ef74d66b209b877dcc3539305f3dcb93"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "4ed20b9a8348a10b5ca7227c88c6c789"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "73bd6933a275674b023d69aef3cd414b"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "450a4d18ea19256bbdd4d6a2b94559ec"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "bcd884959b8358e8c72a8afd3c601931"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "e138b7928e1410006c7636d08e7d58df"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "89bdef5d02761b5ab6cb81b01ce436d6"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "3ee7366d69dfc6f47c6f6ccafaee6648"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "1f455f63646576831f6e10af0b30c014"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "8ec0af3d63025becd87b8e01189c8a97"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "5249f8a1c049a4bdfc3b4d7520c0d90f"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "5765921ce98fe7f7ade6d8ed633ceef5"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "91b9b1a325c4c30d417756e9bef7890a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "89c14582ed4ee1d8c90854c7b7613165"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "30b1f64a6a78e8e6b97f752a9e411dd8"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "1235774237cc8a817f2a139e941cb25b"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "54aaae9e1d65b4129518fc0ef437e060"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "d6b02e968b70c2b95a22f1bf5baa1ceb"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "9cec49c915ee96b1e7108dc0d1961ef5"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "7fcedbd88cdf278efd30efb827641ace"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f9a6a59a4c1509878fbd2a680fed9e8e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "5a3925a70ce8ba2ff8373ea364248462"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "f290fc4fc8d818f311bc5a8132381d76"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5ab9c2b1d53435ce16786490397d9c83"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1c81e823b4928ca7fa8177324814c9a1"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "0ccbfc2384eba60c18e1b07b59d9ebd3"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "4676f60987c8865f6e1e3ee6b834dc27"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "f5f7b3da1dc43029ef6666cb32887be9"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "36d5e54e41a5c7ff176e52577d92ec97"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "9521f0167fe5ea753261808758234813"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "c1c1bbcd030c1266d7ff6cca4c96a8fc"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "cb47477adcbac3e62690514bb63bcf93"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "a9e6a714a0e0043f365f0acd59a29bd4"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "197e432482875e83304beea0af55182b"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1f517af826fc7a717f9d3dd4abbf1af3"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "49f10d4a3a29a6f13c125f1264ba2048"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "4f3ebee4c9de8aec7b0c2a7be4d48674"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "840c14335678bb00f7dcae8e7fea9fe2"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "50fd618a11057ad40cd207c5daf0e100"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "519ab84f1b380fed1869b6181302e894"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "718245479a4d503f0515f40bd99168c5"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "cef288615bde2a6666bba7dc88c745f1"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ca6f3c627e4824637bb22d779def91d6"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "8c085366581b34796bad735eadff5c92"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "d4373a0982b2af1b82239f6b017d3548"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "b70e7c4cb6834b47203ad17c5d97dd87"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "5130a74836b22b8be76df680f5d53395"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "949957b4bfe129ed41e68e7765027b76"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "427d4339e8349e43bf58dbc5602f0245"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "3de016a3f23787b4687256693910cbf0"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "5d89771a67f667898d3a365d1b0fa95f"
  },
  {
    "url": "404.html",
    "revision": "77e91d26727562cbb34466d690dd61cb"
  },
  {
    "url": "assets/css/0.styles.3b61c1dd.css",
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
    "url": "assets/js/10.7134e609.js",
    "revision": "410703b50c080f5fcf340797b6bffbc2"
  },
  {
    "url": "assets/js/11.fd6bebea.js",
    "revision": "c63a25ad776cb5ff0aedf0289756f663"
  },
  {
    "url": "assets/js/12.658a18ad.js",
    "revision": "cbd49de0d73815898e813cd800ffac91"
  },
  {
    "url": "assets/js/13.52a5ac81.js",
    "revision": "5abacfae769aed5e1463284c074a8e0f"
  },
  {
    "url": "assets/js/14.b7b287dc.js",
    "revision": "ba2d28324a9b4b67eefc7a4f1f98a717"
  },
  {
    "url": "assets/js/15.b46e6a08.js",
    "revision": "784921d90f65f77639b586249a378794"
  },
  {
    "url": "assets/js/16.562cafb6.js",
    "revision": "1173d60d8ba1fccbfc37a84dfacaaea0"
  },
  {
    "url": "assets/js/17.1b197e19.js",
    "revision": "c4a9ecd83edf6d01bd06e675d7efbe1e"
  },
  {
    "url": "assets/js/18.60a0964f.js",
    "revision": "f529b121080bed4e7e8c98d2eac9297b"
  },
  {
    "url": "assets/js/19.f4b43e51.js",
    "revision": "1ce396b36b776c04116ceb5991172d5c"
  },
  {
    "url": "assets/js/2.a7111b13.js",
    "revision": "b5f03c7139e287fec1b4d4557c51bbcd"
  },
  {
    "url": "assets/js/20.f358eaf2.js",
    "revision": "2ee8f7b3361131a3fba3c95f543f09ef"
  },
  {
    "url": "assets/js/21.a624ebd4.js",
    "revision": "a2461b9cf6853acc3c01575e1c406f1e"
  },
  {
    "url": "assets/js/22.f7efbdfe.js",
    "revision": "0d6c3930373b2fcfbc451c0a5bbbb519"
  },
  {
    "url": "assets/js/23.967a27de.js",
    "revision": "7d3865f3e9c0dd0d7cbce667bf354143"
  },
  {
    "url": "assets/js/24.8635337e.js",
    "revision": "77b67f1da1854382332c7b305064d3dd"
  },
  {
    "url": "assets/js/25.9f13a79c.js",
    "revision": "9178cd1a2be1d18087b9d4423997eb8d"
  },
  {
    "url": "assets/js/26.6b394a0b.js",
    "revision": "390d488ebb761fc64c2a91f36cad6780"
  },
  {
    "url": "assets/js/27.776b035c.js",
    "revision": "f64f96974187673ef8242ffe1a018549"
  },
  {
    "url": "assets/js/28.1811024b.js",
    "revision": "533e05093ae6ffe4a6b02b1a71f91088"
  },
  {
    "url": "assets/js/29.f3868aa3.js",
    "revision": "d7e00785d1b8a6d87bac7ea52c4cbce9"
  },
  {
    "url": "assets/js/3.9d582fea.js",
    "revision": "b4fd16da7e316c9f9c156bfc224ad85c"
  },
  {
    "url": "assets/js/30.c08035a6.js",
    "revision": "9f7da007354e2b6ff3703469caa2262e"
  },
  {
    "url": "assets/js/31.a74c51e0.js",
    "revision": "fd3edc6b20601ca01d763ec4ff3765c1"
  },
  {
    "url": "assets/js/32.2355d23f.js",
    "revision": "e55ed81ea07432b0d88aad7d68708711"
  },
  {
    "url": "assets/js/33.4e4bc4d3.js",
    "revision": "0303b54c720b75ad86054eb27089d417"
  },
  {
    "url": "assets/js/34.b46ab38f.js",
    "revision": "a97c5fda79ec6d6d49dfa665ddae3c43"
  },
  {
    "url": "assets/js/35.f61b4122.js",
    "revision": "810c0d1aaf518756da4cd3bc07b20125"
  },
  {
    "url": "assets/js/36.049327a8.js",
    "revision": "11049f4c2343120af296aaf0087c577c"
  },
  {
    "url": "assets/js/37.f09afe58.js",
    "revision": "18c3644b78f9fddca64f3b17d71c8298"
  },
  {
    "url": "assets/js/38.08696038.js",
    "revision": "4bc36519c99d92742bf66ce459fa7a04"
  },
  {
    "url": "assets/js/39.099df64b.js",
    "revision": "7c831241e6954ebf6e9cf0a23a784228"
  },
  {
    "url": "assets/js/4.f21ec833.js",
    "revision": "663d958d33f1226615336690e4d8a4f9"
  },
  {
    "url": "assets/js/40.34cdb297.js",
    "revision": "b049013e8541e815de72d08922cc6ace"
  },
  {
    "url": "assets/js/41.dc6a1248.js",
    "revision": "0becf2b2b3ff32cf6a4755835c240d7d"
  },
  {
    "url": "assets/js/42.99b5c017.js",
    "revision": "f77f93cf7571e9c135df174d1c9a540c"
  },
  {
    "url": "assets/js/43.9602851f.js",
    "revision": "8158e6ba51d63836ed08ee3356217a2e"
  },
  {
    "url": "assets/js/44.c7bff0a7.js",
    "revision": "beb16eb5ab950c55e8947733543cd672"
  },
  {
    "url": "assets/js/45.d10df9ea.js",
    "revision": "89be511f5483372d9bcb8bfd8f859908"
  },
  {
    "url": "assets/js/46.ca0f342e.js",
    "revision": "8d418b30326684354b7e1746dd0edf41"
  },
  {
    "url": "assets/js/47.e5cc1642.js",
    "revision": "64f3e4fd8753a7e4ba3f0b1a22b6ae34"
  },
  {
    "url": "assets/js/48.dc942ac5.js",
    "revision": "d3598857be2b29d7ea80f7ab538b4450"
  },
  {
    "url": "assets/js/49.7b5110c1.js",
    "revision": "877d06853e74b11aab8b8ca5d2a68640"
  },
  {
    "url": "assets/js/5.a3a4f5db.js",
    "revision": "58535d4daf455c8759539afe6d8bee2e"
  },
  {
    "url": "assets/js/50.8d08442b.js",
    "revision": "8dcd93f42abf8703784470f9613d4449"
  },
  {
    "url": "assets/js/51.6ac503f0.js",
    "revision": "66d2a8d00170a6ab549ecee86d1a2364"
  },
  {
    "url": "assets/js/52.105376a1.js",
    "revision": "724f004eaa5d0ae566e8a6da5a9e00b5"
  },
  {
    "url": "assets/js/53.f307c592.js",
    "revision": "603321a67004a27418b4b24325fd3e69"
  },
  {
    "url": "assets/js/54.36be939e.js",
    "revision": "f1733d40d539da75d93d0787e75b307a"
  },
  {
    "url": "assets/js/55.4ef7cb8b.js",
    "revision": "515464403b45ebbd0de4915a56e8e9d4"
  },
  {
    "url": "assets/js/56.6c2428e5.js",
    "revision": "e3a59f906547f4a99db7d6a7a9121e6a"
  },
  {
    "url": "assets/js/57.8c549ddf.js",
    "revision": "a8622fd8f4ab65134a7d91f5e086077f"
  },
  {
    "url": "assets/js/58.3044eec2.js",
    "revision": "215d50a57346f5e68c7db8e5cd72b0af"
  },
  {
    "url": "assets/js/59.66b3e11e.js",
    "revision": "ffdfe721c5ae812071a4bbf5ff100e74"
  },
  {
    "url": "assets/js/6.dc1c22be.js",
    "revision": "76c3c4ed59bd7823e4d3f9cc598ec4e1"
  },
  {
    "url": "assets/js/60.c34287b3.js",
    "revision": "f2e77513f10a355d138c7a704716e9e6"
  },
  {
    "url": "assets/js/61.7285c82a.js",
    "revision": "6f7363ff7ebf23553a6fc363f59f4475"
  },
  {
    "url": "assets/js/62.2f81c043.js",
    "revision": "aae764caf6535485c03bb7d32a39c8f0"
  },
  {
    "url": "assets/js/63.3a1d6c84.js",
    "revision": "d9e7c63e4cc703871b6d17fb24f22faf"
  },
  {
    "url": "assets/js/64.69d4cdd9.js",
    "revision": "56ce7de02a558cee54f3bb3866ce5703"
  },
  {
    "url": "assets/js/65.4e71bda7.js",
    "revision": "35fb92e15d8817778a95f53ef40a412e"
  },
  {
    "url": "assets/js/66.2611a519.js",
    "revision": "40c3763b41967ac0ffebbd41d9c2918a"
  },
  {
    "url": "assets/js/67.3a0a792b.js",
    "revision": "263f583624de8b01becb07aec185a324"
  },
  {
    "url": "assets/js/68.45f24989.js",
    "revision": "6444ea47b74af4a62a4a82129fde9ace"
  },
  {
    "url": "assets/js/69.0f64a05c.js",
    "revision": "17b1e774fb20a596b0bcce238af500f2"
  },
  {
    "url": "assets/js/7.5d3fe3c7.js",
    "revision": "afa65188725e98e85e488f4a4830e3b9"
  },
  {
    "url": "assets/js/70.b605aa6c.js",
    "revision": "f4f7b57135da535fecd62a52e168c230"
  },
  {
    "url": "assets/js/71.33358f10.js",
    "revision": "b52f38ce941b82f789769a8d5c52d150"
  },
  {
    "url": "assets/js/72.2273f620.js",
    "revision": "7c2a776601a9fe6aba77fc52888aec5c"
  },
  {
    "url": "assets/js/73.9ce18e4e.js",
    "revision": "efc0ab002042efae6a9982791a1399f2"
  },
  {
    "url": "assets/js/74.b08a8799.js",
    "revision": "297c0f14059b98449f039b2c1c82bd26"
  },
  {
    "url": "assets/js/75.0c9d1035.js",
    "revision": "6894b877463e74fe0e29a671f3c46a91"
  },
  {
    "url": "assets/js/76.3b261de2.js",
    "revision": "710797e34a481f1d40087bcea13f4682"
  },
  {
    "url": "assets/js/77.b1efa7cb.js",
    "revision": "3f065ad9b0454c3226e5156573d63079"
  },
  {
    "url": "assets/js/78.5eb4c867.js",
    "revision": "163aa761945bdce1e3df3bc93dd3fdd7"
  },
  {
    "url": "assets/js/79.ddb856b0.js",
    "revision": "7fae7fcd3afe722f5a8efc7fdbe2fde5"
  },
  {
    "url": "assets/js/8.f9f23403.js",
    "revision": "d6ce397cc975a6b077f0ea37a1eeb518"
  },
  {
    "url": "assets/js/80.8f46cb58.js",
    "revision": "51f86c722a67a5dc55d051a6ac21e985"
  },
  {
    "url": "assets/js/81.9a3b0bcd.js",
    "revision": "6bed4e8115304199879a747839c9536f"
  },
  {
    "url": "assets/js/82.36e889a2.js",
    "revision": "221b5fead3e7fe6a69a303398ee833c7"
  },
  {
    "url": "assets/js/83.62e07017.js",
    "revision": "81c49f0c1468c7b0c245b126e72bedae"
  },
  {
    "url": "assets/js/84.3b3f667e.js",
    "revision": "21d888a7abe20ec62f17d9284b645f2c"
  },
  {
    "url": "assets/js/85.f95586b3.js",
    "revision": "55a674b1510b3bb8e8aa5a98d1d096f3"
  },
  {
    "url": "assets/js/86.36be945b.js",
    "revision": "4156dc8334798a91ff4d4fe8d8d45ff5"
  },
  {
    "url": "assets/js/87.3b303a2a.js",
    "revision": "c939f514d1a9de135841ecfadb0404d3"
  },
  {
    "url": "assets/js/88.ef70681b.js",
    "revision": "ea5eacccc883bc3ad4011176cf23636f"
  },
  {
    "url": "assets/js/89.ec16a26e.js",
    "revision": "b1618a5a81eff19cfe96189caa1fe890"
  },
  {
    "url": "assets/js/9.be600d99.js",
    "revision": "04f664cb911b65677acc34c41bf022c7"
  },
  {
    "url": "assets/js/90.b4d928ea.js",
    "revision": "8b9fb94f314f6bb8147752c093c76eae"
  },
  {
    "url": "assets/js/91.0de888e8.js",
    "revision": "32ad3942689a89eb934d27a2ebc04fc4"
  },
  {
    "url": "assets/js/92.0ffa9732.js",
    "revision": "e7f4436b48ecb45d2c89fb23641a26ca"
  },
  {
    "url": "assets/js/app.ca1ea251.js",
    "revision": "290cb44b267cb3e416962a58240412d6"
  },
  {
    "url": "index.html",
    "revision": "6740e2c2e63d85994e943ba3aaa86154"
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

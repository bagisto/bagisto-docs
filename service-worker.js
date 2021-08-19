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
    "revision": "a354294fc71aaf75174501519b9053a9"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "4040a6ead27a94da21d8af71ca7d760f"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "5d897f0d40323718cc2b4f97f58c3558"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "7f25eadb04f4a2589913b95060b91b4b"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "56e8f464bbe1967e0131fd7afed02782"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "aa8e1423fb09b4b0dd9da8ffcbec794d"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "88b46dd764c42b3be464f2e27885e016"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b52fddbfec0f3f09fe3be8bf33947ed8"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "846d881df72f5d94a63cbdce9a65e08f"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "ee39fe60ddd44a1cfb5b0f32eb3140f0"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "a110aca7bc661a0c2141f1c28ff7cc40"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "60ae733e2bfd181fdeaeff6f9b5ec7e4"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "3756f55695326e5888d88e54e1db5f80"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "74e2ce9f92a031ccb4ce06d77dca0caf"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "13fe715fe8a6ac6fbe1db81299debe98"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "06a6b1664e50151e7176b60b3239b40b"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "67fa55c18be3d9637d2d35de023c9746"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "bc5a475ccc2943556c00738e4eb21bf2"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "17cba4c80c41dc6e14ec7943a9e325b6"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "65a9de68cdbec142a336bf2dc3c8c13e"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "eff7add9d08822c6f30cbbe74214913c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "814d65622e21041aea9feab61468e563"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "5ed8bf066c6e6524fb99cc5ad73d15fe"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "545c3a8c3a5e922669fcafb84820f49b"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "5123a04b63776bb7400a0a743435dbab"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f9256008ee0ccc1dc38763f6d244b958"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "7e434fdf45ae8c77671f4b5f19a9ed01"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b3f414e9e6e5e54b7ac86ad8f5f6436e"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "b442d3c8ebf07aae5ec00ca49200bc8f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "e26b67b8c4cec771f8b5edea5b8f18ff"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c460513851c2d905e647648d5d6fe219"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "5eed4ed6484561e66e3aa29589520678"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "f857ffdc300520fe82b97d80b95c4e58"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "771e39bd5a5f69c8947412fad1d9663d"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "8507ef7c9521e59f809d68b0f80947c4"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "2d7fb7e5a680ef08c3aa7c7f6e96cf03"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "348df09cc1896e89c3bfda0efcc0a1bd"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "967a9b8d15f4ba98de6f52ae887bf5fd"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "907ceb17afae17f60bce53582d3b6fff"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "429b3d293f991844da73c7ae6c27019c"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "5a00eda1f0e1f33761dd648145e27ad5"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "3e00ffe58a6e0cfeed413e0e938f59fd"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "46e1acf7f95f709404964ad0ef0273d9"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "11d751123e7a445b10818afcb58cdc57"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "0e6d33e7cf3c8d6aa848e0d4e09345dd"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "bc4a0547641adf884317bb6da13e8992"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "b226c25ca119cf51b96abd91b5d10fc1"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "b866dd9470335c85660fb1fe5c9c8fe7"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "a8f86cc104f0497301e3b189fc962aad"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "196382fd313fdfcde82554df205f058f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "16ee5713895cfc00601bf529c07e658a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "558dc7052def7ad5a5c11064e0fd2d74"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "47a791995fdb1b39f2e59a0e365a12ed"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "e9688b289043d52c4976379341a53ab1"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "1c785d8b6e924a9145e59a9318a6d223"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "5399b5d750beb26caece7659d9821765"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d67cca0766f2d2249cb761d47d9daf2b"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "6ce7e3689002203580fdfa80bce3c892"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "fea080126c752bf163c8b4184f1909a0"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "1673eac3594134e8a94c5051025f7b08"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "ee3202bd9b28650f276de26099d8271a"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "eb7d04fff773e680997d59a0a2292203"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "15077c214e0a40edadfd0109f7a84a1f"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f3068c8b79f3d286f981d116e106294c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ad857f38d5e4dc907d8ab9b142a1bcff"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "6c068408a859b43efdba76d5b17e8f48"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "ef073cb78397c3fd238e48ca05245361"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f2233bb197389f105a3da385a5a1b656"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "597420f6c55bada5976c1f1020df0b81"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "109106e6c2107cdd80720162baa1182d"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "309912f312da9f534b5c1f14a5c39196"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "0b1fca267fc862ada7b7e9e22d5f3ff2"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "11843998a23f3b9a8403213b55044c5a"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "c0ce01525afcaf1f08e3ff98139899fe"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "f94f26643c91e2356abefd23705768ff"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "18454b0a207007f8ac66b58cc4212b28"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "f95895544181ba27394daa6423e52ef3"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ea564bc63a78d509d5e990d1c10bb52e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "0735dca5046d5b751eab5b6b5c876d4d"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "e83825e3f1d3aab3c512449ae754c3e1"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "4e2da0d0b1a292397255b5d16a5c8bf3"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "9800dfdd3e876a1bf06a629d89c0601c"
  },
  {
    "url": "404.html",
    "revision": "9e2364d4f8617d35f6c49dbc16755085"
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
    "url": "assets/js/10.106ba694.js",
    "revision": "3b8fe4d3a2494b45ad78e78d9051dae6"
  },
  {
    "url": "assets/js/11.3bd30a2d.js",
    "revision": "8cbf66f399b8c16b0811eb2d87e0fb40"
  },
  {
    "url": "assets/js/12.725aecc7.js",
    "revision": "22cf95661aef8b5b74ddef1a70fd0f4f"
  },
  {
    "url": "assets/js/13.9c2459f0.js",
    "revision": "187af649d689d9062254f47b1642bfa6"
  },
  {
    "url": "assets/js/14.568c8f4e.js",
    "revision": "4a74f749ed36321a6cc0d990bdf2dce5"
  },
  {
    "url": "assets/js/15.ab06a7e9.js",
    "revision": "22fc2d824ba27a182b54bfc5323afe2e"
  },
  {
    "url": "assets/js/16.aaa7ccb0.js",
    "revision": "a63892b0973fadee14c30ff5f5e178f3"
  },
  {
    "url": "assets/js/17.eddb4305.js",
    "revision": "7b927d979fc0c29545256fb0761cf5f5"
  },
  {
    "url": "assets/js/18.560bab16.js",
    "revision": "d3dda4754be4516a4036dabfd035f265"
  },
  {
    "url": "assets/js/19.61fa59a6.js",
    "revision": "a8ed98f98bd57ac376a06d29e0e8ca78"
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
    "url": "assets/js/23.c901ac0d.js",
    "revision": "6132fa3360f0503b9838eac5a6ece57f"
  },
  {
    "url": "assets/js/24.06b2f516.js",
    "revision": "cd69fc92c94ad32fbe234888cbd30ede"
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
    "url": "assets/js/27.fba0487b.js",
    "revision": "dff1edd6bb06f493639666c03e7ed0a7"
  },
  {
    "url": "assets/js/28.542790cb.js",
    "revision": "e452b0b04a6b4e984b4f36c1fae8ed52"
  },
  {
    "url": "assets/js/29.5484072c.js",
    "revision": "a526084f4003aff88b007704406718cb"
  },
  {
    "url": "assets/js/3.6b9ddb7e.js",
    "revision": "198444060e411e6c4efe97aa2e0f0e53"
  },
  {
    "url": "assets/js/30.a044b07d.js",
    "revision": "0574bd811043118b256aae7e7401fa32"
  },
  {
    "url": "assets/js/31.feb889ab.js",
    "revision": "0dfaa8046adb441b0a572c25ebd80471"
  },
  {
    "url": "assets/js/32.1732bf34.js",
    "revision": "d2bec26f65aee80e6470b92539b338a3"
  },
  {
    "url": "assets/js/33.c73aadfc.js",
    "revision": "29f9c1e3caffe6eca49faf5371934fea"
  },
  {
    "url": "assets/js/34.0f27557e.js",
    "revision": "3f73ca3c636e0d98ab6600438f03c943"
  },
  {
    "url": "assets/js/35.037d631a.js",
    "revision": "c5545cd7b246a1b17a1423e6a9f7fd23"
  },
  {
    "url": "assets/js/36.46ab5055.js",
    "revision": "9bcf8c8a747b9f8bd4473ec0d165807a"
  },
  {
    "url": "assets/js/37.359d4525.js",
    "revision": "9c5526f9e99997f143668935474abe78"
  },
  {
    "url": "assets/js/38.7e23cec2.js",
    "revision": "d90294e7af1da9a11212e1eda54e6bab"
  },
  {
    "url": "assets/js/39.314a3567.js",
    "revision": "a41e098113b6d89135def59f6266aae3"
  },
  {
    "url": "assets/js/4.4fd2a5e4.js",
    "revision": "4f4b24159f1db06ad819f04e91197d02"
  },
  {
    "url": "assets/js/40.766e4bee.js",
    "revision": "a7a2688942e0bc640b8145a22c05290a"
  },
  {
    "url": "assets/js/41.aec6f8a8.js",
    "revision": "f09f919cd530006bf0130144152f104d"
  },
  {
    "url": "assets/js/42.73c9d221.js",
    "revision": "7ee4e0f1551f069b5d51b0294e8d4669"
  },
  {
    "url": "assets/js/43.f2245ecc.js",
    "revision": "68edb73fe838fe98eee4778028486104"
  },
  {
    "url": "assets/js/44.58b78326.js",
    "revision": "2beb5e434190dff449d490e9bf5f0136"
  },
  {
    "url": "assets/js/45.e72ce948.js",
    "revision": "5349c24f575cf2f03e525d9d17089088"
  },
  {
    "url": "assets/js/46.e09d3b27.js",
    "revision": "712ec94e4a9ec402b21a602586499d9b"
  },
  {
    "url": "assets/js/47.3ee989f0.js",
    "revision": "1026ba38af5f409b4c8f39bd6cffd4dd"
  },
  {
    "url": "assets/js/48.e3017bb0.js",
    "revision": "5fe7ef4906c961c7f1086ba3dd87ef21"
  },
  {
    "url": "assets/js/49.d20a676e.js",
    "revision": "7c02c217e41eb6c7b65afb3ad813ad12"
  },
  {
    "url": "assets/js/5.7a7fe544.js",
    "revision": "9e656e4bf7e24a7a490727511641ef48"
  },
  {
    "url": "assets/js/50.0f922e1a.js",
    "revision": "da7265bd138120fcbe147bbeb1874f9d"
  },
  {
    "url": "assets/js/51.54469e87.js",
    "revision": "6c81f9789f8393b53488e932d24767ed"
  },
  {
    "url": "assets/js/52.0ed4ca5c.js",
    "revision": "a4d98ace26dbdfb6fff6d962bcab68d6"
  },
  {
    "url": "assets/js/53.9268368a.js",
    "revision": "e997bab1a9acaa812b3e7c9496864490"
  },
  {
    "url": "assets/js/54.66a393b1.js",
    "revision": "0d6717ca78a3c538578e8a441d37fa4a"
  },
  {
    "url": "assets/js/55.6b903550.js",
    "revision": "b971cdf340799b8be8139e3609b590ab"
  },
  {
    "url": "assets/js/56.fba2aba4.js",
    "revision": "3a76b7c2acaaa49d26806d561f1a2a03"
  },
  {
    "url": "assets/js/57.2edf7477.js",
    "revision": "1a45217fc5befcaa5afbfa6051fe7311"
  },
  {
    "url": "assets/js/58.eab64b20.js",
    "revision": "af247523a391a72b6f5c8ca66808051b"
  },
  {
    "url": "assets/js/59.a2d20230.js",
    "revision": "a1b2649e141d715051a1d99ac07a7650"
  },
  {
    "url": "assets/js/6.1edd5b21.js",
    "revision": "6043facd9e9b0d2ff09193e94b6fd552"
  },
  {
    "url": "assets/js/60.c490ef1d.js",
    "revision": "223fa686fdac14f4657a3f4e474088be"
  },
  {
    "url": "assets/js/61.ecc2c1ad.js",
    "revision": "da51a60464bf875dd8854c3a0e90d340"
  },
  {
    "url": "assets/js/62.766f5cde.js",
    "revision": "81d68a37c57f039ee63900758620330c"
  },
  {
    "url": "assets/js/63.5bf1ab45.js",
    "revision": "d28a4fd376a7ca14c25376091bddd425"
  },
  {
    "url": "assets/js/64.d1345275.js",
    "revision": "7751fd393cd6e5b28d95f16ec0b71161"
  },
  {
    "url": "assets/js/65.53e9180a.js",
    "revision": "576b8c6fd4c07c7efbe2b3c79a2b3ac7"
  },
  {
    "url": "assets/js/66.5922c033.js",
    "revision": "dd1309dd5d2a24cd5abd2001ec1a29a1"
  },
  {
    "url": "assets/js/67.a68707bf.js",
    "revision": "3b39410d5624016259bede98a0331777"
  },
  {
    "url": "assets/js/68.289eeef2.js",
    "revision": "7f215b2e4276de2a94e378a0dc209e18"
  },
  {
    "url": "assets/js/69.ebebefdc.js",
    "revision": "0917666955df1c37a26742e040989f2e"
  },
  {
    "url": "assets/js/7.85f4ba4b.js",
    "revision": "b3d093dc83b68502386f9fe0efd663ce"
  },
  {
    "url": "assets/js/70.a52a7443.js",
    "revision": "ebd4d21d80990a91fb6ada1e09cf23f7"
  },
  {
    "url": "assets/js/71.4e226ce8.js",
    "revision": "840155c2e5af6f61cd8cfd48b6be250e"
  },
  {
    "url": "assets/js/72.bd07b6b8.js",
    "revision": "c8fc5dbc2d76e480c4abe125ed792796"
  },
  {
    "url": "assets/js/73.a00a2c03.js",
    "revision": "b477fb5d10f7781a7b081b4d9aacd88b"
  },
  {
    "url": "assets/js/74.5ce0ac12.js",
    "revision": "ffa16d4d629859a39671e7a1eb90c03f"
  },
  {
    "url": "assets/js/75.423a6c45.js",
    "revision": "69dda8d49b150e05bb70d884316d5ec2"
  },
  {
    "url": "assets/js/76.cb2125e2.js",
    "revision": "ef2730c00113cd7638f9d9dcd57911b7"
  },
  {
    "url": "assets/js/77.329c870e.js",
    "revision": "1b54f5a42ac899b302d357a33b078fce"
  },
  {
    "url": "assets/js/78.0f66c4ee.js",
    "revision": "d4a2eeea8ab4692992ace4686ad1eef0"
  },
  {
    "url": "assets/js/79.5262bb36.js",
    "revision": "3d6b5d48c4cbd48055ffa00a7af71b18"
  },
  {
    "url": "assets/js/8.a5b8b3b3.js",
    "revision": "e59d1e58d5536135e5b5e786ce526468"
  },
  {
    "url": "assets/js/80.66367cee.js",
    "revision": "95f2faca0c46f50a248c4359c2266ab8"
  },
  {
    "url": "assets/js/81.88bbed15.js",
    "revision": "56c6688d4b7625bb2cca71de5600d1f1"
  },
  {
    "url": "assets/js/82.dab89e1f.js",
    "revision": "6cfe349fc05bfcbfe5ebeb91e2f21a14"
  },
  {
    "url": "assets/js/83.b0bc9908.js",
    "revision": "dd2791204d8b29fddf202d9325edfafd"
  },
  {
    "url": "assets/js/84.51d2c1bd.js",
    "revision": "4113d3f3149d9eef796adcaebd96640e"
  },
  {
    "url": "assets/js/85.6de69533.js",
    "revision": "25d26ee9129ccdf0962d68c6f3094fb5"
  },
  {
    "url": "assets/js/86.79e08647.js",
    "revision": "992762e6db184395fb20e679465f989f"
  },
  {
    "url": "assets/js/87.c22295d8.js",
    "revision": "c8b8eb30e7868073c35bb3604f97fd11"
  },
  {
    "url": "assets/js/88.bcea6ffc.js",
    "revision": "fc732e9e9ec0797bef60e04e25fc6d40"
  },
  {
    "url": "assets/js/9.bbedbaa2.js",
    "revision": "bf23b3715f0cadeb17f516e09e522128"
  },
  {
    "url": "assets/js/app.8d82bf27.js",
    "revision": "f5ccf67bdb6f05ab80c3a6df60c8ed1a"
  },
  {
    "url": "index.html",
    "revision": "b6a7eaa548635a9860420038b6ebbb25"
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

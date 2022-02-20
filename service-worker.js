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
    "revision": "0a93aa513a5bb5d2901257dd6e381485"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b928a629583d766ae376784d899426d8"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "1f42690d913880cb5a94bfcf9de77905"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0156e57bbe437c389266aa7c8e08483f"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "a976e17cdb8dc7efe9087802ddef55fc"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "7617c01008c37cbbac86d2faf4106fcf"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "f8ef31e3284a0081d6affaa718154478"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d12a4b1298661a99ed54663037abdbc8"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "f8fb0f3c422de806ae0819cf41e23ea5"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "9e905ab6abadb2f803df9a2afb2af5dd"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "4f4a630c48e904e625efad04544cbb9e"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d82603e59a8ca44de929671e2746ff1a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "44be1eae03a2a7a2f76e3b746203db11"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "1115fd606ceb37aec3427db33598dbaf"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3b47426e1cd70b41949053b7af1d83d4"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "9496a485940250fe4fb7b99437017ae1"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "9091f24904d4f8f61998dab927b7cf55"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "4d27c38dab87318008dd836aba74569a"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "b09cd84e9697845054dcaccf71d4b5b8"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "7d197d41de71af1a04dbd5c4eeb9e6d2"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f13176cc89f03d928b37bf517fad8ce0"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "0bb945f2892f556ac09389445ddbc10f"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "a060f2de14454cc3c19fa792b8c60a68"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "d1fe34ce3db337e79f6277373a8409af"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "eb3bda8f1430f83100173afd1b380ce0"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2c2b16b45b2dd24870d1e02b55da82cb"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "d2abb678e720b4b4e9518825ddfd49df"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "663c45201cc5e4299f9077c764bf145d"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1f5feaaa51786954a2f855418f0e4c40"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "3e669e71894fbb47abef9346af99337c"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "27c9a4f09b20949238a2c428fe2dc9c3"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "9c2f05bce58a79e6359cc4c09a868999"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "8df803f14d212b4b7c9365ae02665eaf"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "9297473738f7512ec50f370824a279bc"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "7a79dd1a025e9acf9c05a98980be4e75"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "15e1b950047ef2de8645faaecea77041"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "f00c037255479a6814745114c889469d"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "a5be20b00e3f7d959464c4e3cc8a3fc3"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "aa220ec14c3c7549e6d6e9f1a1f9e000"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "526b4506bbcf4a03e6d5f0fe8375d248"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "65d7827cfa1f39c61d27b0f751ef0d4e"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "ce976a0425f2bc6361477f9e10788264"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "653e123e41ae484c5300fb70e80fd2f5"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "eceabe22b581bd239524776980a072cd"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "c680911f8495b491aeec5190dd1ac91d"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "2638cdbf67c12419d253813fa2b0556d"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "c53f02d329a21fa5f17e3c7e668e16f1"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "6be3156df40dcdda00237ab0c55d1634"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "2b257d5372c2f121e708b64751f1a5b4"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "90dcc8206eec4918d7dc4c2822faee28"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "6f38a89bb9ded9467d91e03344731192"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "62792b215c5a7e169abb678ea5ad2929"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "2e43dc8bf652e8122256b7b38ab2201a"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "abeb5820cadb5253195731f2a5fcef15"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "f587843738c94937c7c8a551e952c8dd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "0eba58add62fdf51834ef12eedde3f95"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1886013a4a00cf083c19ccd49ebe9fb0"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "e9ebdcf339a76beffce0ed1d4e76bcd6"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "d8cdd75ca4e1243863de5571bd0a3645"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "6d169a4da335e65b330d07cbb88d5ad4"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "b086d389d0bf64356c39ffbd25d4c547"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b44ed0c3c70bbc39a96160de11d9b79c"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "f60187ef2424fb32a65a41eb73395ef9"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d95fa317b2fd70e9b5df0b593ae13356"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "fd9fa1988da821a81c9b5d925b7ba550"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "c12124793e6e5e203bc25ea089af8a3a"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "35801a07049b0cb2030341991987010f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "0941751e9b888f6df90c5a4fe1af5bd3"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "4aefd33fd9cbfbb3c1c0ae1c34275001"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b686817547270a3d4bfe67e087709482"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "6d56c1812177ca453c5f14f550bc3807"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "466afa48ffe82d87c31d596ac227077d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "ff31b8542cd3ba0fceaf661663000f3f"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "3973c02cdc38dcaf9f4959b6d90aada3"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "064918d00169516cd2bab409ae69543d"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c5ef23f63ab304d804a392106ea6f044"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "0bff7b9ab82d7b8bb3aafcb8fba65cdb"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "04cf07b9b2e4f515c6a79fa5d82caf81"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "89fd37a64a0d4eca90b314f4aff15413"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "8fe75e00386310b89076366b4d822c91"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "7e056681f4c0005333709bb09ad53cdd"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "6abd38a259a2c5ec79e79caea9744632"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "270e0c531333647db68ad009fcb8a97b"
  },
  {
    "url": "404.html",
    "revision": "2a2c2059ea4a3f4c2697cded24dd2dc4"
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
    "url": "assets/js/4.4fad542c.js",
    "revision": "ee4305a1f604c01831ec04851fb35d34"
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
    "url": "assets/js/46.95fd2835.js",
    "revision": "6a59f738dc5c04d36dee09be36fc2100"
  },
  {
    "url": "assets/js/47.9a4c8d20.js",
    "revision": "a5eb6c8eb81ffc2885145b3d2e713046"
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
    "url": "assets/js/59.85906151.js",
    "revision": "dffb360ddca5740ce75d4082df723f45"
  },
  {
    "url": "assets/js/6.c06010f5.js",
    "revision": "a5850f7cb7de13793030c593b513e78a"
  },
  {
    "url": "assets/js/60.d915b640.js",
    "revision": "7bacd6823cc1701e3b169d6f269b157d"
  },
  {
    "url": "assets/js/61.e02d02e7.js",
    "revision": "47fe600163b33eff3b42ef1daee767ff"
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
    "url": "assets/js/66.f6ff71ab.js",
    "revision": "9ddceb3dd4ef70d5c7347df129171d9c"
  },
  {
    "url": "assets/js/67.e14528ae.js",
    "revision": "3e8f75878100146ca3ab8c723e46c556"
  },
  {
    "url": "assets/js/68.1041e08d.js",
    "revision": "9b6ecb51b3fb6337a75aa46d646df1b7"
  },
  {
    "url": "assets/js/69.12f75ca5.js",
    "revision": "7a696ee14e6bafa1fc456f42b44cc34b"
  },
  {
    "url": "assets/js/7.f6581774.js",
    "revision": "0450e0a952dde10d2c89a6853b7ab5bd"
  },
  {
    "url": "assets/js/70.46a33110.js",
    "revision": "d34d65bc789e40bc22e59855106916f2"
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
    "url": "assets/js/76.a922234a.js",
    "revision": "b7f88359a6ce66f20e6f8fe8b63bd628"
  },
  {
    "url": "assets/js/77.0a50843e.js",
    "revision": "5f79bc7792546455df6460de6bbd3de6"
  },
  {
    "url": "assets/js/78.e5b871f9.js",
    "revision": "fcf7216f3e5e88a30abeee53698e133b"
  },
  {
    "url": "assets/js/79.93eddd5c.js",
    "revision": "a6b539f0336bbc3e9aa45a765abc681d"
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
    "url": "assets/js/88.e8b46969.js",
    "revision": "b5c260a90cab82ddae965e0946e941b4"
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
    "url": "assets/js/app.61418776.js",
    "revision": "0c66b146ee4f1681893a1401e6a1a907"
  },
  {
    "url": "index.html",
    "revision": "85605e4db70c3eeffcbbdf4de294999d"
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

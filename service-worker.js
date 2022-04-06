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
    "revision": "a473532e05e32a4ec51e033be4bbc9ce"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "fabf994c008983b5a1c6603d2d092c59"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "c6d444edb612e5e3f5b1f7c085b66187"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "8979ffd94761d18d01c7e62aa9f0220a"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "696d3cdb8ea2ee8017ab63d59c319e0f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "ae00fe057419fd3a89358bb452f5e393"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "3e571eff30176026c860ab083f605de4"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "0b6427547f5caffb29266231a569c451"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "03e54e31b29a33e4eff6dcbab0581882"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6910afbba1b334a13a7312b0ad7102b5"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "aefedf6d718cccd1ada9fc7fd2f5caa2"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "7b8d29b0e42509fd728d221bc9391fe7"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "40dff88bbf3a1947c4b56796e746f215"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "bef25f37e4272c171b191da8a6c2bf51"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "c78436ff33efe90ab841412c328fc427"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f74363a6ac19ca011a4ad25405fa0971"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3296a7a1bfa7e5cd086b53ff3eaad6f3"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "848e70f7f05b35854ddaddb46a82bd53"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "3c0d04464c9e9216d6a0b79445187edd"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "092d9afa8506cc48a5ca8ac38cb3bf3d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "25bc822b97662a07aedbdd972522cdcd"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "97c7c540951ee3c47e0a7a24d8ea521f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "deb4a82300ddbcccdfeb438468a98bbc"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "defd56092ea5e1c98c53a62d5fcb2b60"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "baa55859427920d6b2f3ba21d5a4653e"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c44f70be9bf54caae429f4e33a665fd2"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "b166ab90fbaf4b73df119f1aae35e51f"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "8b32910333fe1f25fa78d5b36689b758"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "3fa60d2da0027fe4e96ee90979d5cbb7"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "bc7030fa974a820d3b625963cffd47ee"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "83b449a420b5e48309bb2f980209e809"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "693bf7d5fec6de5b00689605ae7f4cb9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "f0d3aac831b982dd792b61b1e77e9e01"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "df6b71a47f69ea50f0f2127f8b64000c"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "5b08a739ab69dced7baa9081d2cd09ba"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f541fcc082b8d3a6777128108c4cbd4f"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "dd7979b2e758a01287fcfdf42421ee6a"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "7df46ff49820ad2b27ebb95f5bf92a8e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "5d8297e26f3b15d5f64b878e32304bdf"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "812f35bf35384c12edf25026d849e98c"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "752cddb648755a5a3e800e70b82f6d18"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "d10ebef5df328da07bc94b5f98046374"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "29cdf1c157adcac97fdc33f07cf4ff73"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "25967880b6e5d2b1201d31ce2c0fcb87"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "bd5decbe431db5482f69ef7461848521"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "41d1292dc2640a38b5f0b79eb3a0ac1c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "376a4467ebdcabf225579091f038c339"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "713eb2b36c92f29b596f2b62d92c24ce"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "aea164b1fab2911421936b5eb7d7a466"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "a04601be97c3de84f7038cbcd4caff9b"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "f34b8cbdcde0405ca80b8361eecf0db7"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "f52d46a1e549f7f2f8c534f17c7041cf"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "0712ef58da79a920dc141353b330d80d"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "aae38538d8412b52598068c72b96f08c"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "813ece2fb9c1b0fd99c03071e8dc54bf"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "b2b9f721f91a6af50b0e0af27e64e220"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "c55879eb0ac1949a437414f0922655dd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "8eceaff2c3494cfee0efba9974f0e5b7"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "369ce5570eea2388d7918f285bc02e57"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b0a0a59a487a2c83ab457b58197a2564"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2fce54cbd20c4661e50e7d2871854c6e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "32bf2c32a2ad66936d84b592f6263f83"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "dc53741ddfb6d2f27ae4de228b06104b"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "5544e1c75f83376a6cbabecca8398354"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "01984b177726abe26d619d2c47abf7d8"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "59920a3e4c7937394bec7f6b075ea7b4"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "581db7fef9d131b6f8b1c78bae82f373"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e2abd784a2ab79a9ae335f539a36a57a"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "67816e1cd8b3321a98b40cc69ae6225c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "1eff97e831f7132ee1561324c3ae2808"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "bfbf6944f092ab9dc2598d4c4cbcb0f4"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "0f2a390179eae6a715c26e20c2042cb9"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "d0949f64403fda0b467435cdc92b2fb0"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "15f0ef5c056b422cc2010916b0f31068"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "c1488edef22cb4abd590af4fda0d70c2"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "6d03e7edd6f82aaf07e15a4a706dea86"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "5c68f581eeb9bd19462dfbd8ebd8b510"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "d96d756127ad5eb5984d64452dc08f2e"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "40777b780fbafaf0b6028399c1f4ce64"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "f885024237dee524e76a572c3612ccd5"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "bad58364439640bb382433bd5a362aff"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "5b9ef7d061bcbb30d06a619df3023125"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "25ef8718135fc13a55d49d93edad41d4"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "1c181f9742c73b7080af2b551fe84891"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "f88cc69110760cccff311329903cafe5"
  },
  {
    "url": "404.html",
    "revision": "426b87af61bea8993ff35c60487ed68e"
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
    "url": "assets/js/25.0f3d6a7a.js",
    "revision": "ee823d7b2dc5867e963b4ec8d549ef96"
  },
  {
    "url": "assets/js/26.c28d65be.js",
    "revision": "3552b993200a5f973a1a0599fae09e00"
  },
  {
    "url": "assets/js/27.5414247d.js",
    "revision": "f07facf664ceda38688a830e4180d307"
  },
  {
    "url": "assets/js/28.45e7cc44.js",
    "revision": "2094ab6c453ee12d572303b28b121864"
  },
  {
    "url": "assets/js/29.0a7a0114.js",
    "revision": "b37604043c56f00bfb794e62b9f4314d"
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
    "url": "assets/js/32.def5e9ba.js",
    "revision": "edf61a3348b108d9cd7aa6473605021d"
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
    "url": "assets/js/5.9f4c5659.js",
    "revision": "0e65243f4b7cfa95629c884a8fc9c295"
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
    "url": "assets/js/74.cd2cc637.js",
    "revision": "8fa4297cee0e6d18f3aeea14b360c762"
  },
  {
    "url": "assets/js/75.eec6ccc0.js",
    "revision": "6894b877463e74fe0e29a671f3c46a91"
  },
  {
    "url": "assets/js/76.7428691b.js",
    "revision": "ae1db4d63198037898a555ccc0a7faac"
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
    "url": "assets/js/8.25d16136.js",
    "revision": "7b4f905fad0ba3d58ec9e648866a198d"
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
    "url": "assets/js/app.671bdf58.js",
    "revision": "08b6c8d4d24cad2611aab98871b39b81"
  },
  {
    "url": "index.html",
    "revision": "bd8e0250b7a9bd3e60f137bda60324c1"
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

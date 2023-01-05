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
    "revision": "84777b137b6590c70683352a61e0cdca"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "4d38281b58cf7f90d546d92b751d9885"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "874dc7ac457685a60545580a042cc9d0"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "fd6197aa2fcf15e763eaf9f71490288b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "7a6221496cf16bca2ec60501dd4bf39f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "fd4388b8064f3e1ae50194d6f729150e"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "c122daef0691d7bc595f68b0b3a86c9a"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "0774a6ebef5d058a7497fe23211e1df3"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ea4d56e7e6faf4b95b69f4d8c8fa0789"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "daef3c0abb5b3d8210c195f26c8a3562"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "47ab7b43f03194556c1a808f49d7d0d6"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "51373935a99007341e3f41797f1d9fc8"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "048a1bbe99d05c1069a2ffdd7dbe37e5"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "c3f19fb284ada0dabaf83faa5adac1c3"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "3b579ffe78e301482d2193a7b7f283fc"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "05ed49b291e24a94a82c378ec0df9388"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "14ba6719bebdd716f5f16bcdcb296d65"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f581f0e7deb7722d76115aca00cbdcb2"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "0c20717823b46b584e7482d50ea29c13"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "d43eb166a4e2fb427a13d7f296596f60"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "3e9427ed26294135f0f2e01919d8f25e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "3572e4818a89dfd8a21b75f8c326b3fe"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f268f41d55c8e82586b87f7db685387c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "5fd5775687b7b504c7c125b10dec694b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "a5c2aab3ed6aa0694b5a58446fec4714"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "f9ada7c9e6decb96770e20f4ecd6ec4e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "863dc35743df79c6f30e85e4cbba6d51"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "422d377d5b5624fcdbbe22e11ce1c7a7"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "c1c7a86069ce006b057127afcda8d69a"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "9f9ad8f8f1e078fc0d48323787140f35"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "688ef4fed118b7a7f4b957f9eb1432e0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "354d804db29655379f434471a5f30b5a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "5c9705e6e018ac7bb20e733a8f6fe9b6"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "7d6958a4951b8504a2badeba2dd6dd5c"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "2f7e579a2fe802022f550799cef7bfba"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "587a06854a20e59aa016e9de7bef14fe"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "63bb64c0eddab3ad2d91151a40690185"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "9895655b9fc6ed13e170d4b3a805921a"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "3b453dc4b5c87460660ef9e347e8c83b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "15f6a08f77f30a3c00ef7714dcc9f05d"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "18bc5db03d35314120fe9596842023fc"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "8ae70499a71f6f93dca5709a114feed3"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "f5ce372680cde48295cdc06cc0bbed09"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "9aa9e1c30649fa9aa64a9b3bdea63541"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "101bc67bf6c3199ba9b77c242c281d83"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "d778c14191a9a3b6a41f5db6b19ffcb5"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "8c896581f0fa8740fc97428c4099120f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "e8e1455953185d33807bdf4ecf7517a6"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "be9073cf121755dbc45b0e7e4e5f3d49"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "def888db52835a0bc92caaf3c85ebd44"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ee59a5e1ce2b0cab00e61be3f5b0beff"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "3d5c584b7093c1f445899fa58746405a"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ede0303adb1eb73d8af2c9e6f98dc11d"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "7c6bf39828e2df1f3ad4829e7b7514d6"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "83a2e12591b98dfb9f814066fdd49684"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "e12da52d28b7222e4ab257d9c9d1c1b3"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "b7404303f7b7964cd6655a380a5ef83b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5200fbfd1cfc03364c8fffe098139389"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1a348150571ed33229cf641b01913c80"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "464e5b3e6a3c3cf7822af3e74e7b1e05"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "1fe7491b2280ecdae35e7d2dcf7231d0"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "e7929b61d643a1402e9c8b37d80d97ae"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4dbb820b3da0633f0e1c9403e78afedd"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "57f390e5b158121ddd5169eb303cb5d6"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "15cd455fe2f587af13f94a1cb2e3e9a5"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "53c50169b446f24f7aad098bccf186b3"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "0676820fa8e24eb3dc1c1a4c5f8cdc3d"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "f7fe153a66981a1a6f2febc863f7a3d2"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "85d47c5cdec0f9da3a481c34ff95aae5"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "b5e372820f0657917b57c1620aedc774"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "77b716c97be7011c3bfe217e4bcf6035"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "a6955f5dd17d8ff033461f5a1dab11d1"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "c96a6f6dafb8186174810ec95ddc83b9"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "7c58a246db8fa33e1995f29902faa746"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "4a1c7c089e625bf6024e0c96ac104cfb"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "7bbdcfca9db95f23a556c934cc1a82c7"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "c8ed9a11700137d7d6af6257221eb4a0"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "93bc1b59e9b87966e3a53640f1d52d19"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "ac58681a2f58e6634ece636989971acb"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "c5308d3ee840a1091dbf1c100e85930c"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "9a5a92261d8a7a074506caadad1958a6"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "54a2952b7efac901698d43180e4a0173"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "d5ec9a628cbd145439ffe7636a2434df"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "8f7716815ed5ea968a02231c6b2307db"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "b421c75d4fcc41e3827446f1985f8b23"
  },
  {
    "url": "404.html",
    "revision": "9449c0179a6128b77c6c7250a6c164bc"
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
    "url": "assets/js/14.1c96334f.js",
    "revision": "2665109b931beed84d853820cb20f7b1"
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
    "url": "assets/js/app.0f9fa8a0.js",
    "revision": "81fc7ee799bfdbb088128610ac79ba96"
  },
  {
    "url": "index.html",
    "revision": "0d855989ab2a1e3010f0aeb7762c0b79"
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

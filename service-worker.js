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
    "revision": "478ed457bc81e74a73b85ebed1afdd74"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "11779d943c5f0a1149a8c484d26a2703"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "17b5d01eeacc15b8466b12024ce384d4"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "85ccf9467d1b3bf484720e9a0218e27a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "e677dc418b8077a89ba47eadc1b28f35"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "afccbe4bcb2453c8c1bb1669fee797af"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "795afeafd578d38fff10a9114d04c439"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bcf47ffa717b743c94f812f3b370818f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "aeb0876a3d4e59f00684934a94b245ab"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "c2bda953cb838f872935c0f2432a29f1"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "228537f87daf938bea531f5abdcf69c7"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a5b0c06effe0c36e9a03e85ca9e4944f"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "450b2d8f69b778e2bfb767a3c57876c6"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "239d16d4cdb7eb088dc7bc47b58376d5"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "5feb2c4865e4333f19394c54d9042cdc"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "2cccad57a75766322ba13e94cbfec884"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ef1a1b0a252247f4f95be6b0ea9ca804"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "d4fc01ccbf20071b8f2484feb0fecb3d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "b260cd1630f9f47ec64ec67bbca1ad0c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c48b4b88debe6441f487a6f3a17441ba"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f6f2169dc7e56ff7b5610429d40d3c46"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "d6d8fbfa8f17cc7d97d9f5a6d4584980"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "51fd8afecff4ca739742265a396d8681"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "5d8c2f2948e450ecf78a00b29a9de51a"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "dcc38c023b387867d66459c37eae0ddc"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "042a225cfc05e58be420df394598307b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "5c1ac5f00d04f6f448e65286454b414a"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "87be1399362be62069eb8a7a8520392c"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "2b14077f2199ad3232796c106cf59822"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4220ea33c33e7f120cfa557f69d53ab0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "47442d1b3ee9518cb78dbef877f8584d"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "def6b061b75107c6c483b667c30ddfa6"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "796bfba11aad35e64c0769ff198d267e"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "995fcb25e905d722a0b5e025c62c988f"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "3a374fc401d631fdbcc560c8a55afd2f"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "574e7122186e08b77c0742b4e610a4ec"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "849e914e7428876636da54af7e372dac"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "d9cfb80adb6450907f75813158c59c2b"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "7cef0c0ef2ad01fbcc5ad4a5626df119"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "fd2b057734b70cb7822fe4bcd30cd2a4"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "f88c99487184e6524f0fdaad7fc07b7d"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "68cb14854179351c474d23fa3d93711c"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "d6693545f7fefad13ff13cf364827f5b"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b2a313e92040ae8bf5f543ee906496ab"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "74864afb75d2af84d936105d1b0721b6"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5673c0e0c968aaa3ba3cc0db43a8d2ab"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "34b8c5454c3de1eca97bf7eddc4801bd"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "46f0d0a77f0ec6a64a14585e047e3f7f"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "31208613940e1a7df9008c0e04582ec0"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "d4559c7fa5b710494cc8518cc867d5bd"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "b081cd098c875516c6972f6bd8bef8f6"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "b7ea8a8faf1c3a19adec6c087b67790a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "832a0bf2840fb354805e64219228bd81"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "a01a3a5452372c14ac757bdcf33a567b"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "cc3d3a051b6a20077b5104c673c462de"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "bf3ee5c609984db882186ac9be35334f"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "77eeb34ea1136b163e8b7c69530ad3c9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "3915ca2a1bbf2cf87fceb92fd2307542"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "66701fa56a7833bb273c1e7737636458"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "30bea12d853fb53cc57fe0adc683b7d6"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "bf411ec0941bd97a9a562ad17a5f3f09"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b4c46d3bb4207c1d1ec058b87d19d5fc"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "ae7ac9445d93b5c5dfe5b72bc6f956b4"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "fca4ba2fc4787fdbf3802b6abe9d38d2"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "bed7a28fb4d1be74dd79712bce25c72a"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "b378f6659526a3f18e85232c8b21cc03"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "2864b19fc56f2ca555553bbb26097f6c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "74d28238051fade44463e99d570629cc"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a82507629f307207861421171ed2133c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b17716acca61f5a57a057ac50a6acb6f"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "3ccf1b8d769953eca6a9728c8542f7e8"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "9ed03cfcd2aa6f48aba90041ed49d4b3"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "52fc56f1e2781408a3e82f420277aa24"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0736edaca319166f776aa6b0a4decafe"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "27b4b57cf62de5af2189bc22aa6e025d"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "3f11aea01dd08ca936e3c2d210289818"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "75ce94b5271f3b15f9a36794c2c25baf"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "c1e473c9a8bc5d7ec7d766206d5516f3"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "3e07a2fd09851fa17c6b8254e74dac7a"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "63af9bd2cb9057f68e5c7e5641afaf26"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "1839a05cfa63421bf07091e3d56e0123"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "de136c950769ffe5aee4da9b8058dc8d"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "fdc3ea0256d9926f0dec55c0b943fd3d"
  },
  {
    "url": "404.html",
    "revision": "1440aa4279d80602570e4f4b17a7670f"
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
    "url": "assets/js/13.0738701f.js",
    "revision": "2c9d330927ff9d91d205a56c60b833b3"
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
    "url": "assets/js/20.9b07d55b.js",
    "revision": "c52cb9bd5fa6bf10cf7e00f146762d99"
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
    "url": "assets/js/5.f005eaad.js",
    "revision": "47f2d37c2c1e9a1eb0ab9d5fdf89b977"
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
    "url": "assets/js/82.ac4246ef.js",
    "revision": "9f59334b1cd1ea188812098320c0b1e5"
  },
  {
    "url": "assets/js/83.9fd47085.js",
    "revision": "eb62ae5153f2437a241b81ad03fec4cf"
  },
  {
    "url": "assets/js/84.cdedf27d.js",
    "revision": "25aee4754ea1b67cc41b9cfbb844c356"
  },
  {
    "url": "assets/js/85.76303ac5.js",
    "revision": "00e965ea3bfdd67e6a80fa06005b2deb"
  },
  {
    "url": "assets/js/86.c6dcce72.js",
    "revision": "51131ea1b490ff4259d21396c9ca28fa"
  },
  {
    "url": "assets/js/87.a1fdcd4c.js",
    "revision": "9170ec33714aeed42a4a014fd90d515d"
  },
  {
    "url": "assets/js/88.58b22ec5.js",
    "revision": "46972e209ab732bdf05863b009d83b21"
  },
  {
    "url": "assets/js/89.81a23331.js",
    "revision": "1e045ba2a2a1993267fc16f4719ce49b"
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
    "url": "assets/js/app.4db93de6.js",
    "revision": "717c592a87cfa6c0510955eda8835f96"
  },
  {
    "url": "index.html",
    "revision": "669a6b3428009afc484dbfe1eab2e1e3"
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

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
    "revision": "8576fe5214fd749307858ca8c576a8c2"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "32d550b770d5fa4487d7f263dc10d01d"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "97b425932427bf5371f1fabfb7c83c38"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a8bc3b0719731c2a6b43d23573a4d4ef"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "1063c956ba31d03809f70575ac05ebf1"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "f2c192b550b16f326f100c7889a9caa0"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "51f5a5da0febd2434c3494728280b43f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "3c8e3e2f8e0260ff12c7e80fa3cb79d4"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "9881b599bbd2bd5c442b1bb77b587d34"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "57cf5d473dcf60723ce4fec2f0d93728"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "2b25f02ae431a1553cf0c2fea2fbff2a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "3f3176dd25224eb2edc627834d25a2ed"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "91f33a41a755820e0d6f3786573f48bb"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "20b9bf280b3434e3ec307770bdcd5294"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "327d53440f428df456e628e1e3306c08"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "5cc21961b90bd9416d306a76bc7d6508"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "97aef74337a689fd697c32c3789c19a8"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "aa5fdbd7580ee0c5bddef183594d93fd"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "d4145c81ea04f9dc092693f7b847d865"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "b6e4fc79edb92c55a455b46c6f94dd5b"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "d86093eceac96910305dbe310eec97d5"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "79b87badee9a4e5f0187de17127ab68d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "598fb98b16837df1c38ec184603ca2c6"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "9b9721c2414434184754c6910e78840f"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "9b39b9db1ff67326c2d12460a7bca798"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "babbc187fc38cd6d6e367518d51afe4d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "595e4557508a4a57980be41cdcc45526"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "c5cef78b57c6f98b915cf57bf1d94077"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "18f2dcab20bb4de9de521afc66c55982"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "744d454176f9fd5bf0d620c21a09f5b0"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "22dc1020a651bd9468671174da4d76c4"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "91550a601a591234096b20d31f4f3061"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "00c6de51555b60c2e729efeceee13c90"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "806714b2f616cfcaecbb3d53f7200186"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "3141eab3603e646ed88825a197514fd6"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "e6e4c1f59f897889a0419456371001be"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "7f7ef27540dd0fcbc2690667c71f3b75"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "871b788837a312151295e2d086235b1e"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8ec2b1d9dc7efcaa1569fc699b92ff23"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "6bf19cd1334611fe6952604f29b1d22e"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f7b858329f7fe3deb1cf54116ddb22c9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "12bdd50e09bae7cebd40468b3ce16f83"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "e0c7dfb7968a027c49d6cbdbbe6df2b5"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5a7fd7ba3d5a6670f9867e4ea7c59b1f"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "1200c540c4841e5483bb7552b22f0227"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "593b57ed995551b2f91f5a1b2ed34299"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "68c44073602f9b07551a56e560007501"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "da54b3bbf5dba93b9c7bddafb2fc9ce3"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "adb293a52c65de06de9f67161da83431"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "6cc2aade6a1e48400b341698e59af388"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "04cdc1dddfedb93e837e454192e662bf"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "f3c9d6c6822034d98582ddbde09d5a9b"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ff2cd73962716366d40ccf6576d0ea35"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "923bb1945b6b6a254e3fe617ade229e3"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "30c867d3a41cd3684466b53e9832a7da"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "4c24d9e4ecf2649d6523e711193d3281"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "a654a68b368a0123d1e020ca94c674d1"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ee17fa707067253597ce7b7476ae18ee"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "da127659e1590222386dbaac41291585"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "bc719a5d9e1fa269aeec61ab503c21ac"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "53587d15be996b498a508dbf2d03a6ec"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "eb9878ee14b10afa380dba90771d8f74"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "830dc41f3c6e563fd43335c1a0779653"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ea0d70a57018777e464c540cc93ab6df"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "4bcb8735d32e197011e0467c96b91928"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "2610153f358b274d97cdc56a429c7a7a"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "47c2f9c9660ad93e3d9c7431f89025a8"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "d7640c2a9841a3ade75d43469b054a0f"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "a4cafc38e38f6a543ba43242256244f1"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "effcf9825876bf02a438fcff55496674"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "a2010d2597febfe20823de9b61fe32e5"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "9980bf119c67ffc5c75a185b2647cdee"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "9867346654e5b40d47223bf1286db891"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "632539676e07fe635bf215b7c67cb28c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "fb9528a85119e7cce29579cb87552f4c"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "71a878fec63f7616eca6dc8a2fd443fa"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "532ced49db34998bc89755081e9e375c"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "387f1330d9964d111360c8f3a411a34e"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "6721051e2c733d02bdafb48ad44e9fcd"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "8c99c4e1731a4f06a3d756e2fe6dd251"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "5639e1c67bb135f8a9020595fc838998"
  },
  {
    "url": "404.html",
    "revision": "3dccaffbb4341ecf1d26dcf549124029"
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
    "url": "assets/js/11.1cdf604e.js",
    "revision": "bb203076b46c76dde5ac40393a43ba7a"
  },
  {
    "url": "assets/js/12.7f9a66c5.js",
    "revision": "f57a21c7b1bdeebeca4acc2620e1a622"
  },
  {
    "url": "assets/js/13.9c2459f0.js",
    "revision": "187af649d689d9062254f47b1642bfa6"
  },
  {
    "url": "assets/js/14.f1f6e33e.js",
    "revision": "fc6fd62b2fd662e2e7e19cfca2cb811c"
  },
  {
    "url": "assets/js/15.ad18ad2a.js",
    "revision": "6405ec57006627b48be7d12fd6af12ce"
  },
  {
    "url": "assets/js/16.bc7f6093.js",
    "revision": "75f546c220aa6a7545694bfebc67d3b3"
  },
  {
    "url": "assets/js/17.31afef30.js",
    "revision": "5a83a641483831e120a17f7a7e3c55ba"
  },
  {
    "url": "assets/js/18.03689130.js",
    "revision": "1e201aaa1a700183f2402c1c77e24e3c"
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
    "url": "assets/js/22.b2c46fe0.js",
    "revision": "8122f37d2373677d1918109be0e24346"
  },
  {
    "url": "assets/js/23.c901ac0d.js",
    "revision": "6132fa3360f0503b9838eac5a6ece57f"
  },
  {
    "url": "assets/js/24.45bf2f80.js",
    "revision": "a686397ce556dbbe42385394ba0fbc88"
  },
  {
    "url": "assets/js/25.d3364793.js",
    "revision": "c4d9e19793143b9ec2f33bd165d4cea8"
  },
  {
    "url": "assets/js/26.a0a2fa74.js",
    "revision": "ef3ba651ea67003b32f04b5a85a8c437"
  },
  {
    "url": "assets/js/27.9dd20b05.js",
    "revision": "24a293967ac7a567dab64a3a145a942f"
  },
  {
    "url": "assets/js/28.f70227bd.js",
    "revision": "160dd91b81c24be1a62c68593689af67"
  },
  {
    "url": "assets/js/29.f7d7bbfb.js",
    "revision": "5969e1b2572bf123a8031d73fe3be7cd"
  },
  {
    "url": "assets/js/3.e24f2e4b.js",
    "revision": "2d852947621a5213fd0b65464e5ced79"
  },
  {
    "url": "assets/js/30.1e6af34e.js",
    "revision": "b36a0963df5d385900830e19c2ab1fb1"
  },
  {
    "url": "assets/js/31.f35f2aa3.js",
    "revision": "567e64f1e76f83fddd018d4d383b4eea"
  },
  {
    "url": "assets/js/32.132f3208.js",
    "revision": "441a765670658e86acd2ec9f8a51b8ed"
  },
  {
    "url": "assets/js/33.6e66b10d.js",
    "revision": "a7b75b2f5711ba01d2e6bdc84b5db13d"
  },
  {
    "url": "assets/js/34.1b67b6c2.js",
    "revision": "f7fb57818608fe338b532ac47df1c75d"
  },
  {
    "url": "assets/js/35.dec8a573.js",
    "revision": "5942a0efd9d82f4ef128e7e70e7dbaf2"
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
    "url": "assets/js/39.f3e1f10e.js",
    "revision": "7d36555adbf42ded45f211810437b931"
  },
  {
    "url": "assets/js/4.c2f5df46.js",
    "revision": "a247591e9c385818bee302f1109b2e30"
  },
  {
    "url": "assets/js/40.f6126885.js",
    "revision": "201e71715ebdc098957bcf526bc3b80b"
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
    "url": "assets/js/5.a2a29f10.js",
    "revision": "ee75f9e32c7e49ea8cc17e28d46542b8"
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
    "url": "assets/js/67.b79af734.js",
    "revision": "a46f70450afd389dbe90b58458b2b7ae"
  },
  {
    "url": "assets/js/68.8ffc250c.js",
    "revision": "81f16dfeea65d773b9c964950d41f989"
  },
  {
    "url": "assets/js/69.78bdb199.js",
    "revision": "171dd5be5dbbe893e7cd17bed0ba62df"
  },
  {
    "url": "assets/js/7.f6589dfc.js",
    "revision": "8e94db7d280778fa0869235a9725b607"
  },
  {
    "url": "assets/js/70.0bad5ab4.js",
    "revision": "a34665c448984edfe7fb6d7e8e110644"
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
    "url": "assets/js/75.fb49bf49.js",
    "revision": "83b6a7486630220edcb413454f338964"
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
    "url": "assets/js/80.b3076d76.js",
    "revision": "a0871b1b21d39e5a79f9ba9bdc40a71d"
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
    "url": "assets/js/9.8bd0dfbf.js",
    "revision": "bbf2a13a34655b7e65071b7d8dc15709"
  },
  {
    "url": "assets/js/app.e58e4a16.js",
    "revision": "c8be2b90e31d3eade9f339221d52c917"
  },
  {
    "url": "index.html",
    "revision": "e9d79a55623f1a90a4e08cc865e3c2f0"
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

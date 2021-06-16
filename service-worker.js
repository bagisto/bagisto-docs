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
    "revision": "e5ff5303d3b5da171698d8b8e613da7c"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "3355f26ab3c76d4179d600f18b46f6d4"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "286a5060ecc31b38d9efdc7f90cda803"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "e178c6ca13e4a6db9852e446eb6c9b47"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "0308132fbca4fce54ae757400ca14cef"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "43ff60f73428d9949527331313c8106e"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d83836ede0369128d19f90669575da00"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "366f9ecb27c9e907db53c9ad30f4b523"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a3ae11aa35743879f25b25d4162dc254"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "32dd4fa481dba9f27ab23fdde9fed259"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "36e3edfc886d9f7d7048a532c6f8285e"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "31ad21c3a1f3421e659883750e892690"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "d06dcc3ca42a791d687e32f7b279faa4"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "497a7baee0d396b83a9fb9dfdfb05857"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "27a9c50fdb93b156b1f1e9982bc6b7df"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "896621eabe724a36bce51dd717fed27c"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "1a60a1ca349f20b76789171e9457a963"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ba53b6547cdcda425e0a97209868d708"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c53255d58f287f9473cfd228f48b659d"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "dc3963dbd4ca4ef2121e6093e814d3b7"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "26a1ab456f828f5537552ebe3cf55a0d"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "f955019dd6dab11933e82e02bcb6a780"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "0dbfa0a9686529e82d51f95c9911a106"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "9f5aee6cba221b21968c6a273f9b06c4"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "7ee6d7526e5e790b893d225ea815d1c5"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "adc28819edddc6f9624c943c1362e854"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "2eae66b9159199a3468213e9392ecc6e"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a31d021b59d0bf48d114ba6d9fd32ac3"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "a72f54c35cd402812ce2643aa4626811"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "bd8c377b80022b71dae4543cd5d9362e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "346e199f2ae054f5d32fb7413d206966"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "1758e0885f2af7916914f1e9f429479c"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "7ae79e7d5496c9a36e9537b1a26b644d"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "41c8208c96f49d916314df9a8a0e4e42"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "18b370eec3351d79068cf10063b6fbd8"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "dc01ca30c308933e4cd42a777e741901"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "021edb074d527685ac16ef80aaef9802"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "04b5ffad7127e0cb31f1ebd7b2e1756a"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "07ff1bdb27f0576c603a85cd0be478cc"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "5ac9e9832a5aa9dd318f5a7d07f0403a"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "1ca26ea53d1115e0eebc639c8d4f62a0"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "1060b390ce053b5aea4bd0bf5a7dc072"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "22529e3124b9128a174071afd8f9c1db"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "80951c28fda77a260b3bb07f4d61a224"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "a33fdfe44a8bb9b64bceea719803ec22"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "093390df772947363eb9e62ed43fa860"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "4f073dfd24dbd90f00afde1c3deb533a"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "0bf62ddf8fa172ccba23a8a02790d82b"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "366e3630734a4f5db88856eaac2996af"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "e909ec8deb3845884560358682110d0a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "6ca7f774e5c589553893a0e2de6876c5"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "03fcd405de88aa5ff8a1b67d8b225a95"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "1aebba0185b966de4dde4101f649c8d2"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "7c39088edf883521fbbb76e84dcddc00"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "4575bc4cc67ce3753748d63e85db9299"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "261491b763a4a5240bc5cbcdafbab7d8"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "fdbba07fb9f27736e57aed6c7135a357"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "c1166ac502d94499635b58365ac9e3ad"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4205f80e74ec7ca970693bcc56e156e2"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b0d9abb33d1b44ca140d695bfcdfd11f"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "67bb0e52373a41fa71daf003d7c61e6e"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "6ff1103ad74f5c45e84d815d2664aeb2"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "127d542a67f4f9ae8c94fcd70df9fc8c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "eb96f62599c5338ae7e4edbc800db99d"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "f0beb5d6f63f669d90fd9832b14350ba"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "e8db8a16175512148c3242c5b38af6cf"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "90fed9b906b69aebc43d77dfe517c710"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "a2a69bf116627b04ca6ca9a3694ad1e4"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "90ebdd69577d15c2f8ee6748a4397f14"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "29a62d6c81eb9f0e1db098732d50173d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "b65e036789dd336a6bd2ad61fc605398"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "8cd11ac15465df15bad4b16286dcbe17"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "7e38c2ce54442a959ed5bd52552ca168"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "36ad53f5653da3ee783458b9d9318f0d"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "5656edcefd8c9fb291999b696648f4f4"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "5da6d4954437363121990d2e77583e9b"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ac63a1688e290c9b62498a29fc5df690"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "4d332652f85505fbf83309345cce5969"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "1cd581636ac29bbcaeefe761b1372a8a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5bc10bb98b304be9d18bf2588a909cd2"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "fcfda576b214e8ccfa7f38eab770b6cb"
  },
  {
    "url": "404.html",
    "revision": "b2510d0aea7260bbc0da249b65ca878a"
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
    "url": "assets/js/13.3469992e.js",
    "revision": "48f401f2586102ca67943be453dd7a29"
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
    "url": "assets/js/23.38efbf6a.js",
    "revision": "8245ab85da0136ecdd027ea7bf850029"
  },
  {
    "url": "assets/js/24.81a8880a.js",
    "revision": "e75e8ba7fdc409490dc0ea28be58a099"
  },
  {
    "url": "assets/js/25.94551f63.js",
    "revision": "0772f47334c444134e4fa5845247dc19"
  },
  {
    "url": "assets/js/26.29015b0d.js",
    "revision": "d9b5e33bd5839d5149942b4adedc768e"
  },
  {
    "url": "assets/js/27.dba21923.js",
    "revision": "daa0089a26237a71b8b4175cb111a1f6"
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
    "url": "assets/js/67.c5650f42.js",
    "revision": "383711473b5a34126764f19e8c23de30"
  },
  {
    "url": "assets/js/68.8ffc250c.js",
    "revision": "81f16dfeea65d773b9c964950d41f989"
  },
  {
    "url": "assets/js/69.de3646d2.js",
    "revision": "eade45ba3cf21498069879e8bd1e8731"
  },
  {
    "url": "assets/js/7.f6589dfc.js",
    "revision": "8e94db7d280778fa0869235a9725b607"
  },
  {
    "url": "assets/js/70.7ea751e4.js",
    "revision": "454ed4655e4ea722f0cdc8a524aacc10"
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
    "url": "assets/js/9.25cf0c1b.js",
    "revision": "cef3c1aea05e3fcda8708d4503a38611"
  },
  {
    "url": "assets/js/app.7ab7daec.js",
    "revision": "2b6344d805eb72d6f26eac56919c1594"
  },
  {
    "url": "index.html",
    "revision": "f80bb754f511687e9c8c27674a3667d8"
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

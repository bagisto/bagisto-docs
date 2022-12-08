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
    "revision": "b771bb3db38b8c0ec2678cc39e7669bf"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "89115a132eb8a1de8ab26e2de569ce6a"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "873264747fd889087d43721945678b98"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "3defee074cc6e67b9086edd2477faf6e"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "adc6dd2e38c87f5244952eb17cfcf185"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "36ebc72813519ff2906e2cb3c3c2eb0c"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "099152e01e96162305402f69a848b0df"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "827ec51311e7ac5e3dd64ad50bba1af0"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d8a40240b07c0b8faa729f7ec1f20bfc"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a8f1e79a038f88d5c7c5ff4211c8e885"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "1ab9729d41ab20109126e19714c1d099"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "61095d1b58f8508e5aafd501ce7d5219"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "993078ea3d39ddda4d1f02f3be8cd7ee"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "e79ea4a259f1f0e9f97e538edf596043"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "30bb494406e0ff6887f684b9ad89c1c9"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3a0bbb01a57a2faac776ad8ad14b51ea"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "be2946a924c98ffe27a872021149fba7"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "734de4852bedf7d9d7d81f3e9115c583"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "d1879a942674e96bb982cd1e9b488fcd"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7bd28342da35f2a9266a595004ed1a54"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "acfcdaf60aab00049512005f1bca88e6"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "4a855e7e3f49160f1d3a3ea193364c91"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "7180f2659ea203e6373f3ae8d35766ea"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "8cdf7ad2fc86af1b86a9e2d0a0a0dc47"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "689b90bc167825bb99dd3ed49157570e"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6143488ff0c71e153fe4f6ab77e18ec9"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ec85bff4d258a5e0214090de9c6ad1e0"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "bb290a60553fcbd742bd23349baaf09b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "e626121190a6264e4a4bbd29c090aef5"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0b241ac2371ce9e3b33efdae1d270f98"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5485c45f16d4e228a03d8f3cead4984a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "cb8db055bd1ec712c96a9fd5830d739b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "d957fe60207a9c841602ce69976cee47"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "5adec0494ef3a4f0f7cf5986647b6373"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a3c0b1f25f0564b86ff241763b27c525"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "a339a5c40526e9971b2e0634fa1d75e5"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "77123d296434d84ec81352eca0a90734"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "93520fea9a575b7ddaa83fdbbccfd20c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "98659f952423fef729c8c615f5ba6406"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "08d05412962229ac59ac92791ae3963c"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "4357eb46a92bf70f064e0f981b1d8eda"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "226a62d5e9af2f80bf90a903e9b4db0d"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "6231b1ee9e93670eb91255db0e5ab908"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "cd25254fdcce04135798fb4ff1c2b8de"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "0bc74183f47028bd8b44d67a5d67d5e3"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "1cb88f9713e4f6f7277234def4469b06"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "004268226c8dd8e69973f50228ded79a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "2d6f12d18245734cc49022142b04cb64"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "e94bb24fe2bb2ed408308bef3dd2909f"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "9002239b2068e515e74f0d3ba0a6de81"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "35e3fe3748eb683e6ae618f35faa96d6"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "f8ec4009e7a3d8d788e34990cef090dd"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f449a8bf64decb6fd76dc7b248ee9725"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "7043cc9f24289f7b9e0dddf44e794ca1"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f20bcd314e73857962a59228016c0667"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "5e4ddac47aa948f57375d637b01959b2"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "7db962942d98a6c80f527060aa90fa1b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "4f77ffc69b306fd5e5f1ece79cd68b2f"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e08151d5e55ef252b1108216bf20843a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d1fbeccabb06c5aa839b47387b02fe66"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "afc3cc29931990d22ce34482ea7284e2"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3aa1c30cf2762ddf22d34bdeb6f5825c"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "709492359bc9a6f92a20843f76430546"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "cb1eeb5567907ddb9d88fc0b8b56cf96"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "d1cd25dfdeb0834b537e9c6e240181d5"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "da7f79314bbcd99cd481ea611d4d520a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "c9177286ca015bb51bae4872e9087ad7"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "a066077f90eb2265d8f3cc0ab07678be"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "7470930e041f4bbbeda0e5f230f280cc"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4d1635fe7bbb8c41553b1284ddf3648b"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "73eb9bb48074c1d37de27842fa278174"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "4497f3bed068f3aaaef4bbd3b3b0e445"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "8932c96b77ad9344446e32c324374a56"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "d0e774fb7a6a3f0049b5b9c6d8ff7f99"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d364bdf75ff63c05ac9fab6164832d2c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "a25e7c633c3dfb3c2c801c763318bf1f"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "79ede7af3e9fa8660b57cbbb0689d4d4"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c24264b0314fb3e304adc042fa98208d"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "39f608b21551bba23c96faedd857924e"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "be4a36d572966a552068f5cd696ef7c7"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "d54f4d017edb646c9f988d74ca7320f7"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "84a0bfd3ed124d870b475310a4658d52"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "967be5b4f6835fc9d4adc390bfdd9179"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "d9e2306e6bc24e84ed3fe63711ea282c"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "0e0c35029d993d8b28a1e15548ffa9ce"
  },
  {
    "url": "404.html",
    "revision": "d6a202c04428ad27276119e5fb223306"
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
    "url": "assets/js/11.c9f8a6d7.js",
    "revision": "6c8d76a62c82c1cc1ba676a2a68aa28d"
  },
  {
    "url": "assets/js/12.4390de9f.js",
    "revision": "5c1939e1ea2e52c2a32719b3eba1448b"
  },
  {
    "url": "assets/js/13.00027278.js",
    "revision": "9b24e1849c36b65379ac3aa0a233150f"
  },
  {
    "url": "assets/js/14.9cca923e.js",
    "revision": "ba2d28324a9b4b67eefc7a4f1f98a717"
  },
  {
    "url": "assets/js/15.e8be6623.js",
    "revision": "72cc66ca09edcf1de4130516c1a276bf"
  },
  {
    "url": "assets/js/16.6ae76f40.js",
    "revision": "0513f841f09d1bccd9ac5547cd40f0a7"
  },
  {
    "url": "assets/js/17.10540207.js",
    "revision": "3b9ac9bd6769147bbe3439b6076a6211"
  },
  {
    "url": "assets/js/18.c0e3152a.js",
    "revision": "80c3314bffd8ea27acb18ef4653dc02e"
  },
  {
    "url": "assets/js/19.07b9ccb5.js",
    "revision": "6f17dbe80f9adedd0f986934de5891e3"
  },
  {
    "url": "assets/js/2.c632e24b.js",
    "revision": "b5f03c7139e287fec1b4d4557c51bbcd"
  },
  {
    "url": "assets/js/20.759da8c5.js",
    "revision": "0ee345dacccf32defac65f50c2ff1cc6"
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
    "url": "assets/js/24.d6cc34ea.js",
    "revision": "fc53d889f2d6f493c6985123fa8e2d59"
  },
  {
    "url": "assets/js/25.4396bafe.js",
    "revision": "239ac02fe8bc1c7c427a414f7e5075cf"
  },
  {
    "url": "assets/js/26.7cf28d33.js",
    "revision": "14ab8fb50adf996742a337f6098ce011"
  },
  {
    "url": "assets/js/27.42e902ae.js",
    "revision": "a603e3d0d37e295b4b4ba49001360666"
  },
  {
    "url": "assets/js/28.b249b315.js",
    "revision": "2e608e18a06fb5e087d24f490b76c1f1"
  },
  {
    "url": "assets/js/29.a6d8ad25.js",
    "revision": "8f0db028994505b5a23beda341937d18"
  },
  {
    "url": "assets/js/3.0abd1b0c.js",
    "revision": "b4fd16da7e316c9f9c156bfc224ad85c"
  },
  {
    "url": "assets/js/30.8c57078d.js",
    "revision": "3b76deaeef320600936f15c231cb03e8"
  },
  {
    "url": "assets/js/31.a544d1ea.js",
    "revision": "f3f4f8b0384a7c377c2a69de9d3d3554"
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
    "url": "assets/js/37.3aa5d552.js",
    "revision": "f50107806056b697f9a0c34afcc9f6be"
  },
  {
    "url": "assets/js/38.463c4b75.js",
    "revision": "fb853ac88d238ee3873c8c3feb7ed4c5"
  },
  {
    "url": "assets/js/39.0a5b284a.js",
    "revision": "d27c72164e9d49dacc2fe91cac549eed"
  },
  {
    "url": "assets/js/4.6f15c954.js",
    "revision": "54aa33102a5faf397a3a3836b5e3233e"
  },
  {
    "url": "assets/js/40.b7f69028.js",
    "revision": "2c07dbe51a8465a014e17fadfe3606b5"
  },
  {
    "url": "assets/js/41.858bad95.js",
    "revision": "5e26b9693cb68f24650a0d59f446d7ff"
  },
  {
    "url": "assets/js/42.c80bfa00.js",
    "revision": "acd17669a7c1ebad58e9071e48e5375b"
  },
  {
    "url": "assets/js/43.08c10383.js",
    "revision": "2fbac8caad3d3672affd20256a610c1d"
  },
  {
    "url": "assets/js/44.23a6b30f.js",
    "revision": "c146ca690f881bed1a6c8910449e5cff"
  },
  {
    "url": "assets/js/45.d4a2540f.js",
    "revision": "d4685843508411b02f34cd462019fdee"
  },
  {
    "url": "assets/js/46.c05e0127.js",
    "revision": "5af06a2ed894237e7ebed7d838683892"
  },
  {
    "url": "assets/js/47.8a514baa.js",
    "revision": "71f20fb6592440806c53a62f99eca73f"
  },
  {
    "url": "assets/js/48.538ca55d.js",
    "revision": "9dd619ec7773362da84a9dad5033c2af"
  },
  {
    "url": "assets/js/49.6c28b91c.js",
    "revision": "ac49e06078fbc7f846623a2848d45ff9"
  },
  {
    "url": "assets/js/5.8d7a7382.js",
    "revision": "7d3904585cc00e1ca0f127d888bcdd51"
  },
  {
    "url": "assets/js/50.7f4f29a0.js",
    "revision": "b42491e27413ee7b106b31d62c8e9810"
  },
  {
    "url": "assets/js/51.01705dd7.js",
    "revision": "14b46e13d9e9c81debaa7928257ab254"
  },
  {
    "url": "assets/js/52.70f185f9.js",
    "revision": "b20179a064ff7c2d35d7e5f8a4594f94"
  },
  {
    "url": "assets/js/53.d4409ff2.js",
    "revision": "f5631114503d7e68bd6b752cebb3a9d3"
  },
  {
    "url": "assets/js/54.bfa7eb9a.js",
    "revision": "ef1ad239976711ffc76f1672ae8151ce"
  },
  {
    "url": "assets/js/55.1628c20c.js",
    "revision": "2cacaff59cfe93801cadd6a64f150a28"
  },
  {
    "url": "assets/js/56.c0bbdc49.js",
    "revision": "f472a176a09995e8318e076259ed847b"
  },
  {
    "url": "assets/js/57.d1acc314.js",
    "revision": "750ba8d98ea26e260d5ed3c77cd155b1"
  },
  {
    "url": "assets/js/58.23f3d58b.js",
    "revision": "1b6b0c1b6005e1cd4a068daed1b171da"
  },
  {
    "url": "assets/js/59.0f1700f1.js",
    "revision": "75590663ee19e0b716a7216f41925189"
  },
  {
    "url": "assets/js/6.435966f7.js",
    "revision": "9879efe1e08788b2ae9f29d42553d753"
  },
  {
    "url": "assets/js/60.98271f32.js",
    "revision": "601cff84377ab113e5bb8779588c36f7"
  },
  {
    "url": "assets/js/61.5a277608.js",
    "revision": "76a0d1d9692c4e1ea1e55b0ae31b7b36"
  },
  {
    "url": "assets/js/62.1e2c1635.js",
    "revision": "a6253cb800f3b813ba81c281ea04e2cc"
  },
  {
    "url": "assets/js/63.d1f48414.js",
    "revision": "e39d843f058cf4d079c5f7a730fdc959"
  },
  {
    "url": "assets/js/64.5e611340.js",
    "revision": "a93d1876151347f66ae5512f8a2ade5b"
  },
  {
    "url": "assets/js/65.7ecfe900.js",
    "revision": "778af2b072b27346bfc489c59eb279b5"
  },
  {
    "url": "assets/js/66.067c580f.js",
    "revision": "215f6e0cfdba48ff9fe1c931b0854e0c"
  },
  {
    "url": "assets/js/67.bb8c3c89.js",
    "revision": "9b115c99a303f71b86f4a8f0cf09b887"
  },
  {
    "url": "assets/js/68.8a29ce71.js",
    "revision": "eeb71c61eb11ad459bb7e07909a30c6f"
  },
  {
    "url": "assets/js/69.46d98d62.js",
    "revision": "4469674bb0f3db3b3a953f5aeafd3398"
  },
  {
    "url": "assets/js/7.cd276a71.js",
    "revision": "9f2b05a70e3429c83f6953adc715ec07"
  },
  {
    "url": "assets/js/70.4a5ae88e.js",
    "revision": "ebc1cd4c79981dc53bd86159aa659450"
  },
  {
    "url": "assets/js/71.ca211d18.js",
    "revision": "fdfdaa7cf42aef69b0ecfc7932ba2e7b"
  },
  {
    "url": "assets/js/72.742acaba.js",
    "revision": "03f8f764c9a1879e303ebebd810de5f3"
  },
  {
    "url": "assets/js/73.8cc511a0.js",
    "revision": "c65efb07fb89a8a50b60a7844d13ae2c"
  },
  {
    "url": "assets/js/74.79e53c70.js",
    "revision": "16e627d4fcdec4215f7453c40bf38831"
  },
  {
    "url": "assets/js/75.8459f4b9.js",
    "revision": "ab2b0b77fa34c3b883240f85895630be"
  },
  {
    "url": "assets/js/76.a43d8053.js",
    "revision": "d98618409752d402fe56c846038a4a8a"
  },
  {
    "url": "assets/js/77.0d9a90aa.js",
    "revision": "6f63f6da3fc8fd38adc3e37a8f45ffe8"
  },
  {
    "url": "assets/js/78.06e8d0c4.js",
    "revision": "0de376d3fffef97e0ae192020a92ca0b"
  },
  {
    "url": "assets/js/79.f50eb9da.js",
    "revision": "5fdeb9f73b30671cac726d1f52de74a8"
  },
  {
    "url": "assets/js/8.22c039e2.js",
    "revision": "ef2d6bd42bfb38301fd431e1b396c9a3"
  },
  {
    "url": "assets/js/80.5bfc38ae.js",
    "revision": "a22b87edf21a76d7e1e90e9807756da3"
  },
  {
    "url": "assets/js/81.02081219.js",
    "revision": "cf50733eada2a23a0b54966f3b65e5da"
  },
  {
    "url": "assets/js/82.35e30e8c.js",
    "revision": "b8299c5ecb3e4ca9dbfe890008f7ec08"
  },
  {
    "url": "assets/js/83.75f37ab8.js",
    "revision": "8a33a62dfdc7d54e6da775dc739a38fa"
  },
  {
    "url": "assets/js/84.70a99e7b.js",
    "revision": "4bc7c4ea8e4705e858e9f5328a29f93a"
  },
  {
    "url": "assets/js/85.f3be5988.js",
    "revision": "4a098a506459ccc38ca03ac67868b6f0"
  },
  {
    "url": "assets/js/86.a0c7d3ce.js",
    "revision": "3dbf87143628571d47c2d3bb268c9a2a"
  },
  {
    "url": "assets/js/87.7c77840b.js",
    "revision": "093060da04e77040baf638283ee3ebc4"
  },
  {
    "url": "assets/js/88.aeb0bcc5.js",
    "revision": "236ca3aa2204077bd9c3b462e557453a"
  },
  {
    "url": "assets/js/89.54abb088.js",
    "revision": "4b83fc62dfb15b41748e956a6ba586b7"
  },
  {
    "url": "assets/js/9.731b34d1.js",
    "revision": "04f664cb911b65677acc34c41bf022c7"
  },
  {
    "url": "assets/js/90.04dee5b2.js",
    "revision": "0d1c4cef7a0734f6ebd2203557b8c7dc"
  },
  {
    "url": "assets/js/91.38f46bae.js",
    "revision": "2737138ff4acad66fef91e8faae9942a"
  },
  {
    "url": "assets/js/92.00379b74.js",
    "revision": "e7f4436b48ecb45d2c89fb23641a26ca"
  },
  {
    "url": "assets/js/app.757d66be.js",
    "revision": "cecdcd1238424856442bdf7bd5918324"
  },
  {
    "url": "index.html",
    "revision": "f1326a60d2bbf0a563e48f14acf893f8"
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

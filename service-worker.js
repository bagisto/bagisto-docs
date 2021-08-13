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
    "revision": "6748f89619ac0483d689f621d7b77a81"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b2a464064fd2e0ca1d9584583437ada8"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "32c3f473cddb625e3da1fe50a512185b"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "2ec2e71f21072064f16f6fbd43d2c264"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "c0cb2fef8d19243d05b605c1b3bbd124"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "52b31ba04d70dcc33c93940e4a91c88c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "157f81ac3ad16f11af00aba51c06e899"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "84ab9c240becd9599acac97974ee878f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "08a6b7c3e88bbe30b36a41b51b1f2203"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "965aaa9a781fdf0d5285faf1b388d664"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "aebf324917fc0a7dc8aa58cff318c93b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "534d39bd48020b30ddecaa34883c3cd7"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "62fe8cdb5611128595c08a57b9f35397"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "13b5d4ef5f312a256df33b653c2efbeb"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "fc20b04e51cf59f84c98c0e5fcbfeab1"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "eceab71d6b2af5e85178dfd4b3a8ea31"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "f7175ba5021c184ef2fe591bc8a48155"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "f57181e9f334517c4a2515b85ce6328a"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ed402b95fecda4b10f76df7f7ee29697"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "a65e62cffcc6e4bceae259b83d01da6f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4a19807cf2e19511a4cea37f0a45f3e3"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "ec8c9d3e711148a7def2127ba65bf1a0"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "d68825d4767743e2a39f1853416a8f4e"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "2a9e2c501edbc759c5f903333a149a59"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "3c3e8df9b12c81364ff7562677b6558c"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "5282d33b4737bb4a6f193a1efa09e6c9"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "4694cd8aac9475d974b23085a6f4418f"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "d0ac54c428473efed7fee910acc3e612"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "530f8adc37eb3409290f603c3873f169"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d11f9f6df434f83f815da0d5417d0720"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "175e20c811e4e7f0401484c77c7cd187"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "69254d6ff34fec53ed7f62d6827ff8af"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "d718966bc7065a0870ca55e2c16b687c"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "b65cecf30c87399b52bca32bbc54b994"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "89a929e9d9b5d2d6ec07cc0816e44396"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "99a46a7a2059bb282a34edb33fc0b52c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "507dc883dc22516ff6de7e275f5026d4"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "bb2c9aadf901ec555971fd4ba2884be6"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "b92ad8018a5c519a68f5d1a8d65e493b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "0fb930fc86fa891f89a3632bcc171209"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "7d7a454a24812d8973b580e574633982"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "b27cff0f12dab17b2940c9bc254bcdb6"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "30fed92958600ed579c87be12aab294a"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "9094e9801a29f962e625a11db0fdafbd"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "70db48d1db382675141d23f49613ac88"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "82695e645892669105c5202c23026653"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "ba68bed53476a95ce4951a8492c7373a"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "98e9989dfd30369818b2418fef818af4"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "fb12c9eea17dc068f4be7cf134e52f4e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f9c4e5bb9e8b920e621ba47194a0d151"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "b60550434802aeb0a523bc463c8c965d"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f9484d57b6a2c61192576c21f7fe9752"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "a2c69ebd0fa1cf4723e0cd123883a20a"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "62bbd7de32ea927332cfea80b5edf9ba"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "b22c93f97951a89bcdb7873a635dc4ba"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "5697b5b42eeaa3ffb232ba2a451fe053"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "573a6c2c6d477b106077fbefc5f23099"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "423960072d35c39b8a8cdbce0cffebfa"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "83b8e9a0584db4d0c119201213a14183"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "fff1826df25dc895e2d0b104232ac89b"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "1fb5221a7ede8e0604bf90e20db8259b"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "3a8f303a1f78368285bff21f8948536f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "6edbfc3b5358c340a542d97089887dc9"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "ea5eda0dfeec5330295839878adce460"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "320c627a1f237df7d57f8f7032d5eb97"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d5994a3820bedcd70d32a33137f97ab6"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "8c360170bc1e6d33bea0d046c14162a4"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "85174022f01de902d3b6529bcde7465e"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "4b752aac3206ad2bed7c87af6dbd9ca6"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "6ceb31fb9e27c52cca38d70b46201416"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "aad18c256762d1df7c737ec464ffb5d5"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "b78cef91069231257f8177fd453068fa"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "623d3b8e399831af97510af548933f37"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "28311c83806b1777848482f450464026"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "8334469737632e6de7b9be8cba4b2198"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "ccd478a213c661d065ab4c02bc3df8f5"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "09c21a5171d7b8772c7b53f611b96d70"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "be70b638bc96f7cbe3c7c78cace449f4"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "e78667739a9f014af75bbd9d5fde4b8b"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "a354cf6d52a2479b1ecd2dc66a511703"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "957b62f33c72cf03ae4807956c35d282"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "87b28e8c13b0a4a7feb65beaef7fcdc0"
  },
  {
    "url": "404.html",
    "revision": "0e0489188349f12101d6687f588bb278"
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
    "url": "assets/js/13.258edf0d.js",
    "revision": "aac01fdffb9d728996365a086fc60a13"
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
    "url": "assets/js/24.449c595c.js",
    "revision": "40096c412aa25e075d4238667f106fe0"
  },
  {
    "url": "assets/js/25.f6001253.js",
    "revision": "6aaadf0f0e5be51f0b08d4d2acae5ae2"
  },
  {
    "url": "assets/js/26.4b7e4065.js",
    "revision": "09c0af6d0602a1d354adb6f5f7c9a23f"
  },
  {
    "url": "assets/js/27.90c24241.js",
    "revision": "93da05bbb71d664602b5abbc8a02eeec"
  },
  {
    "url": "assets/js/28.f48d8d6f.js",
    "revision": "f393313ae03ecd1e42badd36063606c7"
  },
  {
    "url": "assets/js/29.aa6cb77c.js",
    "revision": "156f4a508668ffa0a56b41c097f7e3f1"
  },
  {
    "url": "assets/js/3.6b9ddb7e.js",
    "revision": "198444060e411e6c4efe97aa2e0f0e53"
  },
  {
    "url": "assets/js/30.6e315b5d.js",
    "revision": "64af57cd16853e3c980dd23ef1862521"
  },
  {
    "url": "assets/js/31.5e58770d.js",
    "revision": "c322ce258e23ef5ffcbc78e46bfdb43b"
  },
  {
    "url": "assets/js/32.9b76271b.js",
    "revision": "0fe4ead0ba0dfee41bdcf8dc17cc9e89"
  },
  {
    "url": "assets/js/33.42e71bcd.js",
    "revision": "d474a258bc09f0fd38039b67ee17dc6e"
  },
  {
    "url": "assets/js/34.1dcad91b.js",
    "revision": "8a81d9ec0e1bca7f8075971b00061cdd"
  },
  {
    "url": "assets/js/35.9e004946.js",
    "revision": "f72a7c7621281ea9e6cf4567443f0847"
  },
  {
    "url": "assets/js/36.56bf2d86.js",
    "revision": "2b6d673cfca7876cca99da30a3af2a6e"
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
    "url": "assets/js/70.801305ff.js",
    "revision": "c3b67dfb6e9f2e18897447c673361e4d"
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
    "url": "assets/js/9.9eb72064.js",
    "revision": "5361e53717247452d6558bb1b0d90099"
  },
  {
    "url": "assets/js/app.437ea672.js",
    "revision": "8ebcfd61f553a76caa658a68eaf6f3fe"
  },
  {
    "url": "index.html",
    "revision": "c6cdd7bc851da925dc45875ae3dca447"
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

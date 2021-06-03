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
    "url": "1.x/advanced/create_payment_method.html",
    "revision": "ab04a5bad11dca8df597aa6be5d4f5e3"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "2e63cc90d111d83bbdeb9d9054a8aa8d"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "20123228bb87adaa0fd7a5f84084cda2"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "8430c67ef0cc7034369619a8cce1fb34"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "0a8d1ee10755922c7c32df9217214be2"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "4b8e442abe4eda86516d23c7f95a3768"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4e2310596f137b09b3962e0c28754775"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "a55cbf8fa430fa375aa1226212dac281"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "fdd49aac0d26351ad83daf0242048d49"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "8199a47c346a5c975e70825c69c17a24"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8d105101245f227ccc23ebd1430bc40c"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "f9c1f5d8785b818056ea4b08b5aaacc7"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "5415c4a2da4522439cefb9c6a1246877"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "becc0e002f79c394c2871077f04cf360"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "80a9307f573688450718cff066219d6d"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "ab301a90f26694c4f4884867ee1e6692"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "33e12e23f670be4bef24ee4c11663ea3"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "245e185ef32b8f2e609e856325f234f2"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "bbd39d9073db41e8ed3c1e18e4b1ffd7"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "ccef5e1fbe7244d051d2c5b412b2d511"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7df0eb13d1a80990f89832f4f0712dcf"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8e1625de605a874104107d5bd0386889"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "f4f38209146792bd0a3518c89f436e73"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "0fb32b6c69fed7da317ea05f6aa2f046"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "62cc9625b5a1b48506ded0b6108e9aeb"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "0a6f38c6fd36ba23d598ce6e7766ee59"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "bed59d93c871f2ed2ec197bc04646d96"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "ae3442b0ea523bd7db4b0119538fcabe"
  },
  {
    "url": "1.x/graphql_admin_api/attribute_families.html",
    "revision": "c566cf155f7dd9559efa581a4289f935"
  },
  {
    "url": "1.x/graphql_admin_api/attribute_groups.html",
    "revision": "7efe561baf1d0b3f9af2e2d4944a7eb3"
  },
  {
    "url": "1.x/graphql_admin_api/attributes.html",
    "revision": "538c2de7916885b4bfe4135569dce159"
  },
  {
    "url": "1.x/graphql_admin_api/categories.html",
    "revision": "510c9d9f1267f8ed68f5bbaa5749fb19"
  },
  {
    "url": "1.x/graphql_admin_api/cms.html",
    "revision": "5f5bc6ae554a35a42026cccbcd51c98c"
  },
  {
    "url": "1.x/graphql_admin_api/customers.html",
    "revision": "e3235780ab335b2c91f5036f84ace80b"
  },
  {
    "url": "1.x/graphql_admin_api/explanation.html",
    "revision": "541611f62a632a68524e36971436441a"
  },
  {
    "url": "1.x/graphql_admin_api/getting-started-with-the-api.html",
    "revision": "6e08f9d0e7f5ce469eec6e698dcfd8ce"
  },
  {
    "url": "1.x/graphql_admin_api/index.html",
    "revision": "0ca2632b2f05a5c8036b071b0613d987"
  },
  {
    "url": "1.x/graphql_admin_api/products.html",
    "revision": "c10fb3384394b1636a68f24ff1988128"
  },
  {
    "url": "1.x/graphql_admin_api/promotions.html",
    "revision": "752a9ca9224bee952a59a39387dfce29"
  },
  {
    "url": "1.x/graphql_admin_api/sales.html",
    "revision": "ce4a2b5fd5274478494f5aaae120788f"
  },
  {
    "url": "1.x/graphql_admin_api/settings.html",
    "revision": "39a89fa058c34de6dfa200381c6e2629"
  },
  {
    "url": "1.x/graphql_admin_api/velocity.html",
    "revision": "94c95ea04252255833257ed5f3f0fef0"
  },
  {
    "url": "1.x/graphql_shop_api/addresses.html",
    "revision": "8e3e738733db60a0e7fe165c4ae63451"
  },
  {
    "url": "1.x/graphql_shop_api/cart.html",
    "revision": "a1095ae9a00d03d642c265a745887aaf"
  },
  {
    "url": "1.x/graphql_shop_api/checkout.html",
    "revision": "ebe87b24db86271a748089813f6398b9"
  },
  {
    "url": "1.x/graphql_shop_api/compare.html",
    "revision": "69d3412136397ecada73118c4f028b87"
  },
  {
    "url": "1.x/graphql_shop_api/downloadable_links.html",
    "revision": "e6f9d071acfc283a0f10e567b311da57"
  },
  {
    "url": "1.x/graphql_shop_api/getting-started-with-the-api.html",
    "revision": "e2aecd675ce4f18c31b2fc4e65268cf6"
  },
  {
    "url": "1.x/graphql_shop_api/homepage.html",
    "revision": "a3da792ab3a956599d98424bbb7c0f91"
  },
  {
    "url": "1.x/graphql_shop_api/index.html",
    "revision": "d9895cd1800800f4d1a6508e78ccaab4"
  },
  {
    "url": "1.x/graphql_shop_api/orders.html",
    "revision": "faff211d8e314ed4db6db467ba706273"
  },
  {
    "url": "1.x/graphql_shop_api/reviews.html",
    "revision": "778dde6bb4ec516476e2e7088e0f0150"
  },
  {
    "url": "1.x/graphql_shop_api/wishlists.html",
    "revision": "324f80a2c7e22403da0a6239ae60eadd"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "00608728d761bb16d807c682f44b1dc4"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "68613d560fb8e2a9a331c1a509d09626"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "74a6785946c37448aa40cdf3fc954034"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "4bfac033ad596c0e9e5d065dcd18b4d9"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "311718999fef7583c08829c5e2e67b42"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "eb7edfa704bc07184034eb6e5897d788"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "8f0536bb1085cb394d5c354e2e37b524"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "652b6931c107ddeb28630ad34c8c4d8c"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "81bd183818c65fb8a34e5460cb197747"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "5a74fdc9058bba5bc611f8a6bc28c41b"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "5dbfd8fc536456d35a027d2054edd642"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "3d9be4fd5324c6d603c012a8047a0f52"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "418ea475142bff99378daceebc251ebc"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "124ce77f6b891c9bf8257e7ec5f1684e"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "a1e11d3d3e1e482433cceec6848a08b5"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "eef593aabd12eb87624cf5b733cb3269"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "eccbf685780db7798bd7788e44dffadc"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "61c00872917e34de858f5aec3ff96aae"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "5ec29b2917052b8503655f412fe8e21c"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "710e0db77f31de7dc55cacaec60db0d3"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "9f123ce599b230b5a5ccf85ab9d2ac3c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "01cfbefc59d27a42454c0bfd6aa20567"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "80571d2a41c2f2ed0ef0a6993992ca45"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "332d976079785a35aab94c07fb31e1d1"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "4ffce625b11bcb1a80097182a2fec28d"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "0ce51cdb669bdd8571f81c9541010f82"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "4d506a278151d5e5273a77a1589c9054"
  },
  {
    "url": "1.x/user_guides/tax-rates.html",
    "revision": "294c1fb0093f083949c91c6a5fc757cd"
  },
  {
    "url": "404.html",
    "revision": "d1293e4dbecde718b744223247dc3d7d"
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
    "url": "assets/js/12.c2ca3a23.js",
    "revision": "f57a21c7b1bdeebeca4acc2620e1a622"
  },
  {
    "url": "assets/js/13.49f9b701.js",
    "revision": "187af649d689d9062254f47b1642bfa6"
  },
  {
    "url": "assets/js/14.f1f6e33e.js",
    "revision": "fc6fd62b2fd662e2e7e19cfca2cb811c"
  },
  {
    "url": "assets/js/15.0b5899a2.js",
    "revision": "6405ec57006627b48be7d12fd6af12ce"
  },
  {
    "url": "assets/js/16.fda14407.js",
    "revision": "75f546c220aa6a7545694bfebc67d3b3"
  },
  {
    "url": "assets/js/17.f62e11c5.js",
    "revision": "5a83a641483831e120a17f7a7e3c55ba"
  },
  {
    "url": "assets/js/18.03689130.js",
    "revision": "1e201aaa1a700183f2402c1c77e24e3c"
  },
  {
    "url": "assets/js/19.33d9a757.js",
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
    "url": "assets/js/21.96984446.js",
    "revision": "82da66d08d03e34141d0d876b54a370a"
  },
  {
    "url": "assets/js/22.3992ac86.js",
    "revision": "8122f37d2373677d1918109be0e24346"
  },
  {
    "url": "assets/js/23.d7a7feb9.js",
    "revision": "6132fa3360f0503b9838eac5a6ece57f"
  },
  {
    "url": "assets/js/24.363e76bb.js",
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
    "url": "assets/js/28.740482ff.js",
    "revision": "160dd91b81c24be1a62c68593689af67"
  },
  {
    "url": "assets/js/29.f7d7bbfb.js",
    "revision": "5969e1b2572bf123a8031d73fe3be7cd"
  },
  {
    "url": "assets/js/3.28556c79.js",
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
    "url": "assets/js/4.3c423543.js",
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
    "url": "assets/js/42.47b4ee52.js",
    "revision": "2cf06d9ab857052124a6db3e6be6a047"
  },
  {
    "url": "assets/js/43.6c428170.js",
    "revision": "9581b76269cb6fb8f9f891cde0fca7f5"
  },
  {
    "url": "assets/js/44.9872edea.js",
    "revision": "de1b4806f3954657059f2f6c5aeadd49"
  },
  {
    "url": "assets/js/45.afe166e3.js",
    "revision": "b180806736c29e1a522df15a6bb28cda"
  },
  {
    "url": "assets/js/46.9a73443f.js",
    "revision": "fd722b4c0c017453aea7c76210a3828c"
  },
  {
    "url": "assets/js/47.c5fa158f.js",
    "revision": "6b5c7496b8fab1e5d910f76525b471dc"
  },
  {
    "url": "assets/js/48.8b673e35.js",
    "revision": "8b7ef001eeb4426641b42d4d862167df"
  },
  {
    "url": "assets/js/49.fe78d2a0.js",
    "revision": "67e79cd111d49530c2cb96472a6dbb06"
  },
  {
    "url": "assets/js/5.a2a29f10.js",
    "revision": "ee75f9e32c7e49ea8cc17e28d46542b8"
  },
  {
    "url": "assets/js/50.ddcec30c.js",
    "revision": "cb578a89c3ccd8b9c4b0c79415846624"
  },
  {
    "url": "assets/js/51.e29fb764.js",
    "revision": "6fd8575e7978c460a0ac3f9a7dc6b82c"
  },
  {
    "url": "assets/js/52.dd40a7e1.js",
    "revision": "2204fc69c7f62e06e169031749268a4e"
  },
  {
    "url": "assets/js/53.160f6767.js",
    "revision": "2bc5b7e972f4b16a7d4b02c76c606383"
  },
  {
    "url": "assets/js/54.e566deab.js",
    "revision": "bf480804a62b031d51a1ed6b40ca3c70"
  },
  {
    "url": "assets/js/55.d5680944.js",
    "revision": "8510ddbc7a32e815605c8961be931856"
  },
  {
    "url": "assets/js/56.abb190ab.js",
    "revision": "4449098cd4518fb29622c159a6725519"
  },
  {
    "url": "assets/js/57.9f0dfe69.js",
    "revision": "190c307c5625818ec51e4c0bb69aba14"
  },
  {
    "url": "assets/js/58.aa58679f.js",
    "revision": "b6a9fa161bb905e3afaae37cbc0a6c9c"
  },
  {
    "url": "assets/js/59.d9e37c82.js",
    "revision": "64c5ea7c708456fb6aa0e014781d02e2"
  },
  {
    "url": "assets/js/6.5c9f72aa.js",
    "revision": "396bde4b7568dac0adce6396e165eec5"
  },
  {
    "url": "assets/js/60.24966490.js",
    "revision": "26af37d29a4845405fae43ab2bb4f8b8"
  },
  {
    "url": "assets/js/61.08997299.js",
    "revision": "c892916eebbe09cfb99b98a8d454a885"
  },
  {
    "url": "assets/js/62.56d4a065.js",
    "revision": "6aa493595f4b9fbb8758d9596cc00412"
  },
  {
    "url": "assets/js/63.c4d8694a.js",
    "revision": "3d9fb7f9845006da8cb2a0917582ff2f"
  },
  {
    "url": "assets/js/64.83f15304.js",
    "revision": "95a237505a2db7d3fbe5488b79ff2181"
  },
  {
    "url": "assets/js/65.57d07f73.js",
    "revision": "224917dd34a8053da9ae8c93fc7e9a06"
  },
  {
    "url": "assets/js/66.ae9a5e2e.js",
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
    "url": "assets/js/7.33a413af.js",
    "revision": "8e94db7d280778fa0869235a9725b607"
  },
  {
    "url": "assets/js/70.0bad5ab4.js",
    "revision": "a34665c448984edfe7fb6d7e8e110644"
  },
  {
    "url": "assets/js/71.db780bb5.js",
    "revision": "a9d2ca906e29870326ee0bcb6526471b"
  },
  {
    "url": "assets/js/72.1af7ef0d.js",
    "revision": "8ac57a69b3e4f25bb7e83e1bb2987017"
  },
  {
    "url": "assets/js/73.04f5f59a.js",
    "revision": "12453ff4858a175e738ba670b2f614d7"
  },
  {
    "url": "assets/js/74.4c83478f.js",
    "revision": "459df5daf14e22c9fa7b03de1be28e3c"
  },
  {
    "url": "assets/js/75.172e2d4b.js",
    "revision": "83b6a7486630220edcb413454f338964"
  },
  {
    "url": "assets/js/76.8679166b.js",
    "revision": "b5e72093a52c0e2ab847912185b860d4"
  },
  {
    "url": "assets/js/77.e1d43bf6.js",
    "revision": "d098bc6dbebe2665ba59b36eab39ceae"
  },
  {
    "url": "assets/js/78.097d968f.js",
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
    "url": "assets/js/83.7cfc0d90.js",
    "revision": "e7aa0933dffbce6a74d154b917e84127"
  },
  {
    "url": "assets/js/84.06504032.js",
    "revision": "a85ad5af79951752ea313d77489dab95"
  },
  {
    "url": "assets/js/85.7f6292bd.js",
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
    "url": "assets/js/app.9eddf018.js",
    "revision": "db6d196549b79685b8ab285b4a5c1dd3"
  },
  {
    "url": "index.html",
    "revision": "a1dbe248094a490dae49ae143556c049"
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

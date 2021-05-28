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
    "revision": "f81fc1a6db4beade17e13aa7ec53ed41"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "ef08d202d5499eafb0c9e222f157f411"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "a9b6ca8ab9de0e9e20ab6cdc88b62fde"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "717717944b08c0c4d39aaf77d69e3364"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "92c77acd9d6eb778b3227673d7ca25e4"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "5cf9b1804956728c6df65f0349af505c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "29cb700b49e7d42687faf0142e830cbc"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "cf9944c56b9b03c84f2d0d3b0d298242"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "d6e3c1e7fb2e6f68cc8f02bb66d2b9c9"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "9df8c71c161d82e5ae59aad17aa748ab"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "3bede76319252ad82ed03004d9d4cbb2"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "17d5ac8c0b844a5b249692fdfac9ddd5"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a5c8ebbc7d45362e898a06e7f83e49ca"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "214f0d62fde0692eb45bdf031e05eb07"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4fcdc38f31e0721db0a8eaad1de82584"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "21b82dd5209a6771fb1b534eadc35050"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "103db8517662fe85ba64bc505ef78934"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "0fea484114b9ba3dfcd8d6c95385c4e3"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "d4bf151e307f6d8e4918749e85ed7130"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "b0875c0bf40969ed2f8ad853b77ec34e"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "107ab4e85efc4cfa9511470001311641"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "84cf08fd1cbf60cbc14681979aeca43a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "928f2a64fece15e2783630c592ab7153"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "46c4f89ce5788958ee57e4d9507a18af"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "197ff9902b81d0d81688f6516cbd7e2e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "6ea188d111df82b9547bc8c0ae9cf53d"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b61f4cab6adb8adeef5f1a8e5acb56a7"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9e9fb891791c1634de1f7d2d75921c7c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "60b01540557730276471ac83b02312ce"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "821b9751b0618026a5ecac9e305bcb20"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "77b02f1e3056b2e6511e46db5a591308"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "a5f82ed518c29eb3433dda2c46d302b4"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c68790511c7f7ab6ce2b3f07e265925b"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "9954e1475f98cf6343ea45b5a2139f98"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "62309964cc1ec3c58ce0485444f6a377"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "99418dbc5c234311edb79a9849e7ad03"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "4cbdee5c3a64c6c34e69f2619a7b94a7"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "f543c295b2bcab107fdbb41e85a0b845"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "b7b21118d2c4078b332ec8aee2720b75"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "c024d34aadb4d1e6267bdd467b755469"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "35c48b6a0c29c0875da2ab567d97f090"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "503cc32e00bb20c5ab1795a9873fc657"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "7ce2e3a0922cf91f287a958afeb7de3c"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "9d9e0eb86aff8a3f0227679acebc86b6"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "7f9236d3b2779dfe4d4ea74e2451e45a"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "237fcb8c2e7d3640c13e84da0fae018c"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "cfabe33d7e3a3e7ed3fd9b5b8d6629ed"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "9dc88ab6983ff6955a179cb61d90dbf2"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "1119f14bf8719d3cd02a4355a55f6e61"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "ca7c47cb0fa3fc1ecc9d350c5db133d3"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "57d5ced67b2ce5894a97846035149c7e"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "ebc2cf2c8f4dcada3a13d15fb8a2a725"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "37c314580a1b0fa29aecd109b6d190c5"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "c52f40d3bf39c83e566769ca70268a4e"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "060b860ffeed970125ff2199d9c7d079"
  },
  {
    "url": "1.x/user_guides/social_auth.html",
    "revision": "9bafbd21d4a6b9d727b1c6d9128edefa"
  },
  {
    "url": "404.html",
    "revision": "fd6a2298dc67a67f2ab2e08611a3b1d2"
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
    "url": "assets/js/10.9464a983.js",
    "revision": "a5b5e4d370ad23197a6ccf1fcddde017"
  },
  {
    "url": "assets/js/11.11a2c63f.js",
    "revision": "5f780c1c3eefcb5cf4456b25c916e7ac"
  },
  {
    "url": "assets/js/12.ce092e93.js",
    "revision": "7321eb4f493b1c485138d7c031672a2b"
  },
  {
    "url": "assets/js/13.39a6e017.js",
    "revision": "703b489bfaf8f130d902b7dabe49a604"
  },
  {
    "url": "assets/js/14.8e7bb86c.js",
    "revision": "d1a8454355aa3ab3adbf3a5df36096c2"
  },
  {
    "url": "assets/js/15.afc3ceb5.js",
    "revision": "b47815c3e6e0d9ee352184e5e70f5134"
  },
  {
    "url": "assets/js/16.f053c9fe.js",
    "revision": "ddfd70178e40e5318ed6904f5f680244"
  },
  {
    "url": "assets/js/17.525d7ab3.js",
    "revision": "54921229839edeeb474388b44b9811a2"
  },
  {
    "url": "assets/js/18.adf4c9ed.js",
    "revision": "379d6ca73e6abbb11d5798848a693ed1"
  },
  {
    "url": "assets/js/19.a3e8b6fa.js",
    "revision": "51bf3df10a21d66205b20988b5fc9c58"
  },
  {
    "url": "assets/js/2.ce2ab776.js",
    "revision": "7f2e8f53e0898474f8ba04cbbe9bc5be"
  },
  {
    "url": "assets/js/20.c4839a59.js",
    "revision": "a0a47e35d57a17d1d7926b6c264160b6"
  },
  {
    "url": "assets/js/21.37ad4627.js",
    "revision": "8c35d0e87df760adc7cb2591252bace4"
  },
  {
    "url": "assets/js/22.7a62bbc1.js",
    "revision": "33cec39793e5a450f622a5a6a031625f"
  },
  {
    "url": "assets/js/23.593a626e.js",
    "revision": "3e3698447a439915fbe9b717a829c085"
  },
  {
    "url": "assets/js/24.237c91c3.js",
    "revision": "a0871d7007e6e4ce31238b0ce8b2d46f"
  },
  {
    "url": "assets/js/25.87a4413a.js",
    "revision": "a3ac198e2acf52ac0b95fbda5846c32d"
  },
  {
    "url": "assets/js/26.43b097db.js",
    "revision": "5c3b849a8af3533f61d1492c904c6e1e"
  },
  {
    "url": "assets/js/27.e4a10271.js",
    "revision": "31f4f87210e796ed8b2149b70f886199"
  },
  {
    "url": "assets/js/28.e89694ed.js",
    "revision": "7f2d14b0511956563634f3b2ed6cba5a"
  },
  {
    "url": "assets/js/29.4a804333.js",
    "revision": "63aba35a23754e7ce58af18cb88c6f3f"
  },
  {
    "url": "assets/js/3.171c5ea9.js",
    "revision": "22b7af781ef5c4c41a962923c19a530a"
  },
  {
    "url": "assets/js/30.0235185b.js",
    "revision": "d0594f31611ff1d052bdbbb47f733687"
  },
  {
    "url": "assets/js/31.2d86726e.js",
    "revision": "f1a7b8b2cc935fbf4a2e8f9b6353c8d8"
  },
  {
    "url": "assets/js/32.8cfbb582.js",
    "revision": "baafc3cf37ce39265ccaf87c6f6455e1"
  },
  {
    "url": "assets/js/33.c9004e34.js",
    "revision": "141844ffe7ae1fead0713f3ef26853bb"
  },
  {
    "url": "assets/js/34.98407d11.js",
    "revision": "73421dc6c56a552eece93917bbefef49"
  },
  {
    "url": "assets/js/35.debf6f53.js",
    "revision": "2d2f5b172869d3e35fbeedd24a38ea9d"
  },
  {
    "url": "assets/js/36.8a8f858e.js",
    "revision": "7f49392529053ad8ec171af7432b9985"
  },
  {
    "url": "assets/js/37.ca020662.js",
    "revision": "08311f2d287a645506efb38cc7253d35"
  },
  {
    "url": "assets/js/38.3f5e8f73.js",
    "revision": "90a639eae5ce34ae06f8c8986907b295"
  },
  {
    "url": "assets/js/39.dce1222b.js",
    "revision": "aff3bc50214d3717a118b4db72541bad"
  },
  {
    "url": "assets/js/4.09f8bb28.js",
    "revision": "8a35e18a0a1edf6012d708f3738e2f35"
  },
  {
    "url": "assets/js/40.aa1653cd.js",
    "revision": "309da1e333517b53e6817742560d0a3e"
  },
  {
    "url": "assets/js/41.c3d998b5.js",
    "revision": "b3179c11998d3feeafcd221b939163c3"
  },
  {
    "url": "assets/js/42.9d78ccea.js",
    "revision": "fe7924235e4607c58d686d0990b1db18"
  },
  {
    "url": "assets/js/43.1c0aeddf.js",
    "revision": "4f06839d601be6bb4b1ac1eb22ab112e"
  },
  {
    "url": "assets/js/44.e5431f16.js",
    "revision": "5abc9e1c2129b0898871fd3c948a953f"
  },
  {
    "url": "assets/js/45.22c5b640.js",
    "revision": "54baeab6b77b1e7a09f9a0e7a2585714"
  },
  {
    "url": "assets/js/46.654cb69e.js",
    "revision": "e029301a3a42c77671a73cc4ff551e59"
  },
  {
    "url": "assets/js/47.bbd33f3f.js",
    "revision": "a178a6ed03d463da9d73c312887c2c64"
  },
  {
    "url": "assets/js/48.402b586e.js",
    "revision": "c4397845ad0afcf98bf8ab1a1f7982d9"
  },
  {
    "url": "assets/js/49.ce7f400d.js",
    "revision": "ab3295584a228d73e06d53e0f6e5d823"
  },
  {
    "url": "assets/js/5.c1e14efe.js",
    "revision": "a5f3d972d7a96ac45d1f43c12ea74b63"
  },
  {
    "url": "assets/js/50.b51d3d40.js",
    "revision": "f5a30049b27ceef64ab7706d74d88814"
  },
  {
    "url": "assets/js/51.42aa5635.js",
    "revision": "55cee4065e3900b0d848ff5208ed83de"
  },
  {
    "url": "assets/js/52.ec71a4f8.js",
    "revision": "0351e0ca7d476e0bf2b117229d38304d"
  },
  {
    "url": "assets/js/53.6ead7259.js",
    "revision": "1ad679acfed722f0722d65918ada6db1"
  },
  {
    "url": "assets/js/54.cd92aba2.js",
    "revision": "8d832ce0c1c302350bcd632032c83df3"
  },
  {
    "url": "assets/js/55.90465cf3.js",
    "revision": "e1d1ac545a9333c4fff3706de0f1ba4f"
  },
  {
    "url": "assets/js/56.870ccf3c.js",
    "revision": "e605465537fc5a6cbcfff07cbfe41ce4"
  },
  {
    "url": "assets/js/57.2c24d42d.js",
    "revision": "296f90c73f9422b9c6848dee28afd606"
  },
  {
    "url": "assets/js/58.3cdc503e.js",
    "revision": "9671519f01969fd73d623951a54e349c"
  },
  {
    "url": "assets/js/59.e5c520e2.js",
    "revision": "8b745dda3d669765a8b448ffc2bdcedf"
  },
  {
    "url": "assets/js/6.d75f2872.js",
    "revision": "50fe05e29fbe98860b7b83d41b4ff051"
  },
  {
    "url": "assets/js/60.17ebad2f.js",
    "revision": "a7d00aa81ffecf97d944be964cb3eaad"
  },
  {
    "url": "assets/js/61.2ba87356.js",
    "revision": "41b7e8b2c042c4cd5ad32ba3c0c09781"
  },
  {
    "url": "assets/js/62.97bdb1ae.js",
    "revision": "11ab910b1172337d973b0cad5987c0bd"
  },
  {
    "url": "assets/js/7.133ad72e.js",
    "revision": "947577114ad9881b492dadeec2915627"
  },
  {
    "url": "assets/js/8.83f55af1.js",
    "revision": "8cdde3d5a42eacd9e96dccf0597b81ba"
  },
  {
    "url": "assets/js/9.1131fcd6.js",
    "revision": "d03cfcbeed2ed158189782f39e2dac76"
  },
  {
    "url": "assets/js/app.12f60703.js",
    "revision": "7888935d56713aebff092e85c922da8e"
  },
  {
    "url": "index.html",
    "revision": "31f1fa98e8da3f263023c04a67f8312b"
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

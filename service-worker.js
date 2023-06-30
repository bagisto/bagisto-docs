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
    "url": "1.5.x/advanced/change-email-template.html",
    "revision": "bf87d72c4ea8172b689066eaca01798f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "d24bfc6713ec1b43c69baa9b7f7947fb"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "13a9ea0f00912a58f4b3b7533360cc38"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "a32b5aff47882579522b7cc36452ae48"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "2016d8e053b1e74f8e28dd90d77b6d40"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "9431aa62f4521e454ead47be7cfb0164"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "d027f25d18de19658d67f798cfa3d639"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "21ebd8d80f9cb946285cea7a31e02667"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "68aa9317270022047f5d94a3649f0245"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "0b4ce172ba2b94c20f16673ea4650120"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "6ddadd28c660077ac78ebc15220024bf"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "119a3cb1e5bfa41f5fa1ba5f292cb1df"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5ecd0271e25f3a622723d25c16e93e4a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "bd32ffa5126070929af62facb8480326"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "b0ba3cdf36a0943a61bfb6403704b1ed"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "bba8fa7c6446447faae39fdfacbd049a"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "f9aace3c897a3982b369ebcaa986ceab"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "61d71c52a29926f34664eb2265caf35d"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "49e31e41a45e2ad3a4977d1d67dee019"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "946df9c533c8458adce3c686735e5bc6"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ff5b951c5ab33af10e2b82ff610b5727"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "0d60e6b214191ca6e482def8f56f151a"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "8249c95dba3d5f303011676d20f6ebca"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "f7ed38d9aa06b02db7740d4e3b399cd4"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "ad1c6066426fa184e92b62d066c64c21"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "8581b5198a47db494883dd0ee7dbd049"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "b13d525c77c5eb7b206cb75aba5bf60b"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "a40f62a0bcded3a45357c82064bbacb1"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "5bcb2c958e8c93581f3fb90395bdcaf6"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "9f43871ed5f972c62108dda5f08b18f6"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "7476a27b0de6233310cb95e1b3d7395b"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "7435eb968debed42242ba31db29a2e4b"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "4075d8a0ee44d9bfb8d32a00495190da"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "16a8ca655527b2bac988dadf2e8b06c6"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "24bcece26019c2b2516e975fe58ea290"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "a0abfd6d28fcbbfe12fa6160d99e42f6"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "39dd8139c5cb3d63d975b1e25825ae54"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "1ca96877600c2a8776e3e39e7a1faec1"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "cc8a63966099f699e83f8945d800f09c"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "8f415ea521f2546cc64934d8f9f6ea22"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "d6ad400829d013e38402112c70827711"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "b99010b5d722d004e3f02585d0a1c3c3"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "d363689be87bd22e49677ec8268e5ab4"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "79c57ae97843c3d4c281bad89dc0824c"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "e9f23ade775a372f2dc98aad70398c64"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "71ea80184d9976573321028eaeed62e4"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "b113476954f54603123fad5c3d5a7ac5"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "0e09938946786d0c60ef910523599048"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "dd543586f2ba77c83c983fee3016c09b"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "274b030504b549a05b3cec4532843e78"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "f591bed551e906a54a99141eb485c127"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "03dd6f22132d0604d90a10c00ea8b08b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "18ab897b50d2d20557e5a3558a2fcf84"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "fe141d5a1d01708fd0d255a48dfa8254"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "70bb09229c3428297176df555438a608"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "4281e512fd836a18f1be99891175723f"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "52b9576abc0dba968fc5075823721e28"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4caa37364723c4a83bbfde8798bd2b06"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "70814a04ed8cb1ff760d25de2fdaeca7"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "ae0601207020f6d465ccfdd4d6de4ce3"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "350654ad22762fe363e7bdce98ac54fe"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "cf7eb1d91aee740703e39f4cbdf4270f"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "3e296f7bdaf6c49cf8620d250ce5d2fc"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "e8b12f22753d28a3055d75f1130896e6"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3ca84d340a9646eec60f947151ce5187"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "06724ae2235bd5b7e8cdb100c32eaf12"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "720fafb731305db98e6888b335913eb5"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "f9954f0a5c4d4b2d65ffd1b749afd9fc"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "394c9bd5570ddf593fa388ccef995c74"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "88610444e65d23ac1bfaaa684c78da80"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "3d77f2bf9ecf9bafb8510fef88e78e53"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "feac96fd46dd629011bea4af591514c6"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8c26c61095f19acaf98f4e45511c8be7"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b9885d30e329a574de604488d6e2f7f9"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "b79662faa2aa00dbc479fe689cde0483"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "028dfa623484c1f36db39b5950ef832c"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "b5619a3c7d36a3b2184717afb7cecfda"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "1f3b944d0f7177f024346bbeba3fc139"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "361d70f2966ae51347540f3940036025"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "c159264b3f196baa513b5478e6f0a39f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "f79d0fc345efc2324680040d06340280"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "6570d6d01765873b47bec117eb4d21a1"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "a1de90c1cb7db10f4571798af2dde31b"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "a755f91d11f8e8f3b7747cd6f4f74b6e"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "5064fd8cf01331e4c4e5f4c62febab23"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "04f052617a1efd146c87c0c01ea718bb"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "33c6f576ead5699a26be96da5d4eba08"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "6189155beaca233469e31ae7d34d1444"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "721da4a95eebb3d725fb3b8ea00f161f"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "8b5a2eeef782a81921fe965f307ddc90"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "fb058deecfa68bd311026b84a856f1a9"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "31f9bce9ee3e365bfd9bf05d844ff3da"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "61b32e4a3cd8a23fae33ee46b61c376f"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b3abfe4d0795a4211310bdcb105cf47a"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "d20da164a0a6be67f732703cf0f99a81"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "48ab9d3efe84c34bb3c57597b8e37141"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "7cfd758b28e621c5b92434b84c3dcbcc"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "e21f600d34a7d26a1436d799b00795e8"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "a98e3a6630fb236ca299675181b798b9"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "3a9d7eb86bb64adc12670b39fabfe41a"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "e296908482d0ddea7ca274b44ac9ef0b"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "3a8ee90a362a9977a9b29f2620e8b6d3"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "ab2bb4d89439382432263137146aaa9f"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "e73dbbaa926f1dcf163fc0af4b41358b"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "c9380ab2d0f9d0ba4715f34eaf3fc2f4"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "18994d9bb71c004c85c9a3d99431836c"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "26ae8f94f2b01b9ac03fdbe3b725da87"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d7cd4891950ceb096a1f0ee9e76bade9"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c3a03c31c981433ca2ba15dcff7fb8f0"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "6f0e7eab3f85d7dad17aa305030d4f8c"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "d8fd7eb4a996a5298dffb4d9fb34c7cf"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "fe4ea0a368d8107fe9e978b573165d4c"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "2c2b2ff0218e51c860499661017268b4"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "d8528d016d8251b7ef1e9ab9d7019889"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "7bebdee039c14c7ea5d753ae3e3f0d00"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "485db4df9641f6add87775e970bffd95"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "392f0f166cf62ac5afa46abfb8119b4a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "3b066aa8ac4c6645386bfe5e5fd6adcf"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "84785bc5f64368189ebf58a92d99678c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "ecd1733dad740e6ccdbc016cad0c0241"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "5d633417b6037dc6c98f076a39e11676"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "79a0feb0cfc724130bbce67455764bac"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "9bfe6bf486efe2d340f7c0b138c08d99"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "36138add7ba068f08a52ef8f59715645"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "f695df13f7e00a4ec59dc2ddce60238b"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "ba5bd6001658b3a8477e03f7baab0b26"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "816c7fd818f42a1812f0c408ec1f70bc"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d9fa60a8471488d1d2d8d3dae20deb3a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "270689f7c038e83ce9c5e26713700183"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "0e7e0eff3f9252b084f2eee4d2ee6267"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ee3074276f6da01448e09a06a71efaa4"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "c132f1eb92c3f35370c5e2bf6a7b6beb"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "24b762328015926508958133269c3c69"
  },
  {
    "url": "404.html",
    "revision": "1914faeb5ff7f75ad31522d19a2d0003"
  },
  {
    "url": "assets/css/0.styles.fbbe2a77.css",
    "revision": "66ff016f7409fa70fbeac58e867b4144"
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
    "url": "assets/img/admin-acl-output.b7cd765b.png",
    "revision": "b7cd765baa91a55b5ff4ade2c59b7e02"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.1be77665.png",
    "revision": "1be776656f2461337df0f451f917bfb2"
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
    "url": "assets/img/blog-admin-output.1118ea56.png",
    "revision": "1118ea56b8def41f82b192a76763d2c3"
  },
  {
    "url": "assets/img/blog-package-output.4aced6a8.png",
    "revision": "4aced6a8f0a5f4af90cb3cf52c8ebf2c"
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
    "url": "assets/img/custom-config-output.8aeb3cff.png",
    "revision": "8aeb3cffe1edc680a288ca3792782d50"
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
    "url": "assets/img/product-index.bc0a70c6.png",
    "revision": "bc0a70c6b1ba1b0cd4cd31f3c7f8dfa5"
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
    "url": "assets/js/10.35857dd9.js",
    "revision": "d8926842eae3f5215a8bbb0acaf6d131"
  },
  {
    "url": "assets/js/100.8f44e0a5.js",
    "revision": "aa1fd304e6083f3c7c8291493e4b2816"
  },
  {
    "url": "assets/js/101.b2dda452.js",
    "revision": "661c415058f2ab0c10d00bba37a471de"
  },
  {
    "url": "assets/js/102.39b97480.js",
    "revision": "f463125bc489c171f0169aae14bace47"
  },
  {
    "url": "assets/js/103.54b28125.js",
    "revision": "d56e9095d9c5b474917b9f7f6c986623"
  },
  {
    "url": "assets/js/104.d10a2619.js",
    "revision": "2844eb335acaf56cafcd92cf945bf5ac"
  },
  {
    "url": "assets/js/105.60dbd0f1.js",
    "revision": "a99bdb30058d5da391e9213e2a86cc02"
  },
  {
    "url": "assets/js/106.0b9fb3e7.js",
    "revision": "a6642ce17362f250e593663a2d61df7b"
  },
  {
    "url": "assets/js/107.a91103d9.js",
    "revision": "0f036b3541c8ed64dfef38b2af237de9"
  },
  {
    "url": "assets/js/108.34eadfa4.js",
    "revision": "e09abdd4a35a1bab492c8b102f94b327"
  },
  {
    "url": "assets/js/109.09230eb9.js",
    "revision": "0e3be7acddc8382f202f3a1bbec0e930"
  },
  {
    "url": "assets/js/11.844d878e.js",
    "revision": "a8fcb410d9fa2dfba8279c97ba4a938a"
  },
  {
    "url": "assets/js/110.16c59fb6.js",
    "revision": "f735cd47b81f9d4f3f6278a6e73a74fd"
  },
  {
    "url": "assets/js/111.20238ba4.js",
    "revision": "b5e6e445d1b12932cdca5db3cdf4b85f"
  },
  {
    "url": "assets/js/112.00ee18ac.js",
    "revision": "cd9f34d65f5b0abf19f6ec3eae6f3cea"
  },
  {
    "url": "assets/js/113.bfb95327.js",
    "revision": "73d2b9db1c48b8a6a71c6f5621613629"
  },
  {
    "url": "assets/js/114.5d4d006f.js",
    "revision": "b0a97c39bf50caf825ab5b931f95bd38"
  },
  {
    "url": "assets/js/115.ad49df57.js",
    "revision": "ee93a2551465f294fdc32f31c03fb666"
  },
  {
    "url": "assets/js/116.c8f59c5b.js",
    "revision": "bba4bd2d145833ac5cc6a6d0266b6964"
  },
  {
    "url": "assets/js/117.4522973c.js",
    "revision": "52a550ffc49b2aab41d7b3ca493118a7"
  },
  {
    "url": "assets/js/118.9ec622d4.js",
    "revision": "9337fa2ab70db098260b5dc6b5965b99"
  },
  {
    "url": "assets/js/119.5f83e1db.js",
    "revision": "a9f946943f053f212e90658afe90a9f8"
  },
  {
    "url": "assets/js/12.b524b462.js",
    "revision": "f5e62d2a46e8e94b3665d931bc07ba53"
  },
  {
    "url": "assets/js/120.eac437dc.js",
    "revision": "0240c190085732e766e0e45ee1c5cbb6"
  },
  {
    "url": "assets/js/121.1d9468c6.js",
    "revision": "54d02ac7cf614eba78dc5a0bb22db384"
  },
  {
    "url": "assets/js/122.8bdd023d.js",
    "revision": "25cc0e150363fca2de38d31b223d9186"
  },
  {
    "url": "assets/js/123.27c8add1.js",
    "revision": "9df5de95a5f4b1c3e1da93fccb1076f6"
  },
  {
    "url": "assets/js/124.bd3e82b3.js",
    "revision": "da3a5ca7f252df990d3c7575e7ed9583"
  },
  {
    "url": "assets/js/125.5d1aebf6.js",
    "revision": "700cb9ea3ee6aca1078b1a0ff028b292"
  },
  {
    "url": "assets/js/126.b6c0a43b.js",
    "revision": "35d3cd64dc03120bed82a3703c2df549"
  },
  {
    "url": "assets/js/127.7d788e70.js",
    "revision": "ef447b237ea69012c33fd7e5f2bc9548"
  },
  {
    "url": "assets/js/128.397daf1c.js",
    "revision": "9f9e2160b7355bb0fdd54f5d26859983"
  },
  {
    "url": "assets/js/129.41094fd6.js",
    "revision": "8c72e1123ef0ebc8972b32b2c5ec1260"
  },
  {
    "url": "assets/js/13.9b26e67c.js",
    "revision": "248fcd3c51062a4ec33edf0111707c96"
  },
  {
    "url": "assets/js/130.b5f0ae77.js",
    "revision": "76d9ce1bf58fae6596f41fbb2a58a2d9"
  },
  {
    "url": "assets/js/131.638cd64d.js",
    "revision": "525f520b62fae3c9bed1045a05602d0c"
  },
  {
    "url": "assets/js/132.ba5be34b.js",
    "revision": "f2b8e9779943c721ca2179a083151015"
  },
  {
    "url": "assets/js/133.d76f69e7.js",
    "revision": "dfb406b0d88384974a0ab0b3385f9f7a"
  },
  {
    "url": "assets/js/134.d00e08b8.js",
    "revision": "143d1999e02069bb81b2cdaaba849333"
  },
  {
    "url": "assets/js/135.e8192cae.js",
    "revision": "15d9d73f6b5fb13b39dfc353688a966a"
  },
  {
    "url": "assets/js/136.2198d49a.js",
    "revision": "894d8ea54261a5bdaf04d954c9c6f089"
  },
  {
    "url": "assets/js/137.e98ba6b8.js",
    "revision": "db82179545011c34ed2263fd4160a7f0"
  },
  {
    "url": "assets/js/138.f17c4e3e.js",
    "revision": "fa663be490408b8f0f0a40444aa0de73"
  },
  {
    "url": "assets/js/139.51ea954d.js",
    "revision": "e0323edbaac949ab3f6a72d52a30b0b9"
  },
  {
    "url": "assets/js/14.1a8861b1.js",
    "revision": "41f7510b2c0a08d98bc967735271eac0"
  },
  {
    "url": "assets/js/15.70d5b891.js",
    "revision": "30ec4c9bf57bad9ddc1d27b252934412"
  },
  {
    "url": "assets/js/16.3fe29d7d.js",
    "revision": "8806574dcfc78874df126c1239ee4215"
  },
  {
    "url": "assets/js/17.de0c9697.js",
    "revision": "2a34f32c27d3c02d3b0ac1409ea612fb"
  },
  {
    "url": "assets/js/18.5db46c1e.js",
    "revision": "188f972c9377736c8ecbf21a7d7a17df"
  },
  {
    "url": "assets/js/19.aa2b7f24.js",
    "revision": "9915f667fb50c05eb38e37e89bbda1c7"
  },
  {
    "url": "assets/js/2.6b409cae.js",
    "revision": "17329bbd323d46c0f0c86da7d465cb71"
  },
  {
    "url": "assets/js/20.2e89e8a5.js",
    "revision": "80c2bb9df27f081b57a3168be7877613"
  },
  {
    "url": "assets/js/21.e492622b.js",
    "revision": "94d966668858cb8797f6c0bc5fb87126"
  },
  {
    "url": "assets/js/22.3ffce076.js",
    "revision": "cae589fa5d70a6734c64da8946f61a92"
  },
  {
    "url": "assets/js/23.ca17aa44.js",
    "revision": "184d52989ae853caa98ac2fb6604eaab"
  },
  {
    "url": "assets/js/24.443b0590.js",
    "revision": "7239c817fea82b773f7d47760b1e9537"
  },
  {
    "url": "assets/js/25.05a20a27.js",
    "revision": "fb836deca6f91e0881a05fa781bf4efa"
  },
  {
    "url": "assets/js/26.d664182f.js",
    "revision": "69a19eb2aedbedf942e0eb9ec7c448e7"
  },
  {
    "url": "assets/js/27.e3a99fe5.js",
    "revision": "24db20cfa422de9f8940a4caa1b82d7c"
  },
  {
    "url": "assets/js/28.11863062.js",
    "revision": "29c61b6308fefb8cf41fed52b4261e5b"
  },
  {
    "url": "assets/js/29.2c642c91.js",
    "revision": "cdd04be53984ffa2d82feb664f7b56ed"
  },
  {
    "url": "assets/js/3.0ac12ace.js",
    "revision": "c15bcf0279b33c0973453ea2f4cc1781"
  },
  {
    "url": "assets/js/30.d4ea4077.js",
    "revision": "328b20e7feb06ab26bcb9ccf218744c2"
  },
  {
    "url": "assets/js/31.2fca18da.js",
    "revision": "aed3be91b8c692b74e3da31f9cbb3ec5"
  },
  {
    "url": "assets/js/32.4e227cba.js",
    "revision": "af50fd45457a1ae144481f570b87ad9d"
  },
  {
    "url": "assets/js/33.eac14764.js",
    "revision": "aeab27d0d593ab5fb7c21653da3e1792"
  },
  {
    "url": "assets/js/34.d9f75b35.js",
    "revision": "362e95b84a69c8a89775e24af5f4e7c2"
  },
  {
    "url": "assets/js/35.d802dc58.js",
    "revision": "3dee9dd36eee59d849d14c0af0cdef0e"
  },
  {
    "url": "assets/js/36.21ee0ad1.js",
    "revision": "04cf035fd7941d5bfaab34616882b561"
  },
  {
    "url": "assets/js/37.4e62905e.js",
    "revision": "02ec089f10a1b04ad76ad785f46f0e05"
  },
  {
    "url": "assets/js/38.9786ae09.js",
    "revision": "c6de6eac75f96b8d67a45c20d7c728c2"
  },
  {
    "url": "assets/js/39.e49ef9b8.js",
    "revision": "7dfcf46c05a83653c3c59f47780ea760"
  },
  {
    "url": "assets/js/4.fe706f26.js",
    "revision": "c0cb92bc1ce14ce6edd0ab23cb7980d6"
  },
  {
    "url": "assets/js/40.0dcbe372.js",
    "revision": "b33775eed14797a322f6641366a93a32"
  },
  {
    "url": "assets/js/41.14cb9e7d.js",
    "revision": "ac6fd52e487920e46077ca666efa2b26"
  },
  {
    "url": "assets/js/42.029317a9.js",
    "revision": "70b870d905a0f3ef25becc3b9009d97a"
  },
  {
    "url": "assets/js/43.22419c5c.js",
    "revision": "8cfe5ced4d8b9529a7d2aeb94b8da706"
  },
  {
    "url": "assets/js/44.70d14f9c.js",
    "revision": "ec0dbc5e947fe7beb056a86fc6ba4cf7"
  },
  {
    "url": "assets/js/45.0366dca4.js",
    "revision": "34481c5a445d972df9e689c4e723192f"
  },
  {
    "url": "assets/js/46.3bfffe01.js",
    "revision": "068e6d85acb4dcfe7c1ffb5f6a268415"
  },
  {
    "url": "assets/js/47.1a7739c4.js",
    "revision": "602c05ebeb6f878d7165d500cb75d2d7"
  },
  {
    "url": "assets/js/48.8b0e0f21.js",
    "revision": "73751326037798da806668642104612f"
  },
  {
    "url": "assets/js/49.12a98ecb.js",
    "revision": "bb422d892388153435b6f9a9685dfae4"
  },
  {
    "url": "assets/js/5.ce99a332.js",
    "revision": "ef7f8760c7a4d3e5e63b328d7a253548"
  },
  {
    "url": "assets/js/50.447687b8.js",
    "revision": "3b6ee8797e518f731742056ba7e87a6c"
  },
  {
    "url": "assets/js/51.e2bb9210.js",
    "revision": "19761ad5ee888300ea9a7fc5eeac3660"
  },
  {
    "url": "assets/js/52.a228f13b.js",
    "revision": "232befdb6b1d81b18ab79115e440abbe"
  },
  {
    "url": "assets/js/53.54edd495.js",
    "revision": "8165ebf9cb0abc258b8f270d95abad6b"
  },
  {
    "url": "assets/js/54.23f25432.js",
    "revision": "0799448220981d0024027afea62a23a7"
  },
  {
    "url": "assets/js/55.41ee9575.js",
    "revision": "60087dd37ef9576b86346bb67ace2d93"
  },
  {
    "url": "assets/js/56.461a5af1.js",
    "revision": "352c8fd2f56a767699e85b39065e4d5c"
  },
  {
    "url": "assets/js/57.c0023bfc.js",
    "revision": "076928f76aae7a6e386b502376aa7906"
  },
  {
    "url": "assets/js/58.f948b044.js",
    "revision": "122ab10bc87ecb6c18a93e5c5f1ce15a"
  },
  {
    "url": "assets/js/59.c9e007d9.js",
    "revision": "0dfffc292c769ca30a9cfbb03064542e"
  },
  {
    "url": "assets/js/6.52bc9ee1.js",
    "revision": "7c963830775e78a0a3534d451db4210e"
  },
  {
    "url": "assets/js/60.412ddca0.js",
    "revision": "99ab0022857d5d29cd4ea40a734fe797"
  },
  {
    "url": "assets/js/61.9fb68905.js",
    "revision": "764cace0e2f5cc6462121b9d349d03b9"
  },
  {
    "url": "assets/js/62.e7d12712.js",
    "revision": "deb3d5e889e281486eea6b6ffbc27950"
  },
  {
    "url": "assets/js/63.cda3f00b.js",
    "revision": "19ff55e6391b2a2683ef35fa998e8b49"
  },
  {
    "url": "assets/js/64.e25778d8.js",
    "revision": "9e344c994bc04959bf14098042511b69"
  },
  {
    "url": "assets/js/65.01e1b8d9.js",
    "revision": "a7faf3d0dfa917744bb90edb8a10d407"
  },
  {
    "url": "assets/js/66.a0dbc271.js",
    "revision": "390eaf0affbee40714b1dbdf33282f20"
  },
  {
    "url": "assets/js/67.ae39f307.js",
    "revision": "d90c21fe5a6ae119e14b83a54271c2ad"
  },
  {
    "url": "assets/js/68.5b11bdc2.js",
    "revision": "d638ce181504c21d6aece752ff1e2e56"
  },
  {
    "url": "assets/js/69.eee9ef7a.js",
    "revision": "975152695c11ef424f8f2aabee1d1f6e"
  },
  {
    "url": "assets/js/7.018c1700.js",
    "revision": "293871bacb17245d6d8376011a5523c0"
  },
  {
    "url": "assets/js/70.28aedd34.js",
    "revision": "6c331c1d7095a578b2bc0e57f4614593"
  },
  {
    "url": "assets/js/71.f451a366.js",
    "revision": "979ff2e29d7c0640f8c477e55e811c54"
  },
  {
    "url": "assets/js/72.706a1926.js",
    "revision": "b79110e05a6f1bfa6dd0fec0577ad9b9"
  },
  {
    "url": "assets/js/73.116eb797.js",
    "revision": "75e7583241c2551d581e78ea7e2f3f0e"
  },
  {
    "url": "assets/js/74.a7f96947.js",
    "revision": "14fc1a1f548e801c73c79b397bde3a37"
  },
  {
    "url": "assets/js/75.af625e48.js",
    "revision": "c98f365f22dad6ecff6bf4f40f241860"
  },
  {
    "url": "assets/js/76.9fdc214e.js",
    "revision": "f45f1ca631d1f7f15e7758ce278580d2"
  },
  {
    "url": "assets/js/77.3ca8abc2.js",
    "revision": "236ef6eedd5fdd6d4cb87db5968742a0"
  },
  {
    "url": "assets/js/78.8abf6fd7.js",
    "revision": "924e96ae04788d5f845966ddc24f0360"
  },
  {
    "url": "assets/js/79.eba31189.js",
    "revision": "0bcc88e78c271d0664c3ab0bd14d85db"
  },
  {
    "url": "assets/js/8.a94751b0.js",
    "revision": "05594de372452af5cdb2ede58ed6ef6b"
  },
  {
    "url": "assets/js/80.848515a3.js",
    "revision": "b718648ccf1c86b7de087aedae9e508b"
  },
  {
    "url": "assets/js/81.a716e0d0.js",
    "revision": "ea3792c33d8ea9f0a2c14d5c1b5d88fb"
  },
  {
    "url": "assets/js/82.938f8db2.js",
    "revision": "e273ed81ce4f822b9445430fb5463dc3"
  },
  {
    "url": "assets/js/83.373815c5.js",
    "revision": "26633e98729cda9e2cdf7e2a57c64d06"
  },
  {
    "url": "assets/js/84.0e7cdbf5.js",
    "revision": "f8e5feb8eb29a63397790a17617bd062"
  },
  {
    "url": "assets/js/85.a83c28b2.js",
    "revision": "03a833cdf949673a5f067d98e837afea"
  },
  {
    "url": "assets/js/86.062967f4.js",
    "revision": "7540fc8447f886392df8d77ff7dc306b"
  },
  {
    "url": "assets/js/87.92f301ea.js",
    "revision": "2964ae79093cf427d1f20a7293a14c62"
  },
  {
    "url": "assets/js/88.da72158b.js",
    "revision": "d150f051ea68acd1bc0fe4e71510f476"
  },
  {
    "url": "assets/js/89.408af7ab.js",
    "revision": "505e67c68df313b0b5d7e72384455513"
  },
  {
    "url": "assets/js/9.067a2bd1.js",
    "revision": "c47c4bafb7bffd279df450f9fbc3192b"
  },
  {
    "url": "assets/js/90.2b841437.js",
    "revision": "57a8e07d2a29ff0527a71616e27b16fe"
  },
  {
    "url": "assets/js/91.2aeddb2c.js",
    "revision": "d217b8f7a07c45ce99e7ee990c5b9b94"
  },
  {
    "url": "assets/js/92.cf96e6fb.js",
    "revision": "9d1222a0b362adab9397579bb83e9155"
  },
  {
    "url": "assets/js/93.8fbc5682.js",
    "revision": "68eb3a303e0d2891fa64667a1c5c8fc7"
  },
  {
    "url": "assets/js/94.42b8ae3b.js",
    "revision": "534c2dbdb4c7e135611d83edf67f7564"
  },
  {
    "url": "assets/js/95.7fa40ac2.js",
    "revision": "9c73b02d1a8f97535efd1cda2ef9dfe0"
  },
  {
    "url": "assets/js/96.2135c6ed.js",
    "revision": "0329d8ffa4a788a13eb913c94d9fa0fb"
  },
  {
    "url": "assets/js/97.33738d35.js",
    "revision": "10bbb1c04598ca2d24d79cff404edec4"
  },
  {
    "url": "assets/js/98.5fcb71d8.js",
    "revision": "23c1bd03a2efd3632e389faecb583dff"
  },
  {
    "url": "assets/js/99.10c6eae6.js",
    "revision": "804dae50ca19b331da2bf63c5a3b5d98"
  },
  {
    "url": "assets/js/app.1337bc62.js",
    "revision": "a3a89fe0de7724880c001be26905d6fb"
  },
  {
    "url": "index.html",
    "revision": "cb3f4258c22b7938cfb305e690f9be50"
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

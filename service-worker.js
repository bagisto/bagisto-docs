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
    "revision": "b403cd7cc33c76ca6c1acb1eb4cee48f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "d9a26f3692fbe9853dd13a8623c37b6b"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "2292b1305bedcafa66af23502ed5f3d0"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "c1de30d5370c589cb64515324299eda4"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "537587d1370e7df4eafa83877313c709"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "e221caadc78175186e95997a8630a467"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "bd68cf0c6734e2bc98bbdd8c063999c5"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fb7473f97bcaf7fd3e810be5c929fe2d"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "9ee0de86e09ceea9eefffedc644b99c8"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "38f55f48e3e23f18f7d161fbb3dfb2f7"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "357dfe22bb484581314c2712f2fc5f83"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "75aa60dd56247047e1f058e989f405ca"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "8c8a410e754883760751c7518a3bf76b"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "e6e9b1596c286dbbd6cba3413fae8561"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "fecbf97a98ee687f437acfd269de7469"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "3b0847ef03f522ac47b1d577306a6d04"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "98aa871e92b2cd83234c0d5f6ba451c4"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "0ada7db0d94985fe1477e36839ecc96a"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "36d0ae02efa00f2b2ec894658498694b"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "64df856a8c9ac11a4c655e716ebc5919"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "b82511026da34805e984e11c5a31605e"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "95b371948afdf78b00775dafe64106d4"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "91f958c6b9b53bd79797fd718fd33533"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "e32a50c99aa4dd3a76d7187e088ef3ba"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "2ca1ee6c8a2943ed329c20c02c2baf58"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "8b399a3b742c77e4a35b243b15c8b671"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "b657395e4f9bf50c2f3b40c702bd4641"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "a9022b6e74fabe30e85091b21b9d0c94"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "d7cdf2b18147ea1ec87eccd6244b8923"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "8784b40eff5b55ae2a1c8386c3871b3b"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "84d622697652c45e9ffac1e5c58c53f5"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "e4a3303cd88812e8717334c8d5c17ebb"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "cc29b43679b056191b716f0a82cb3f03"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "7955030b01613c7a1bc5c601d6515d89"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "eeed27c61a75127f4ab874102e970fe9"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "110c95da76b48569b6a825c5b011b1f1"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "f626bbb55601a8a3c67072affb79b1a5"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "1c109616df5efd39b64c10d5d5728f92"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "6cc6803b3a45e794c61d09f8c6f076ac"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "4d3dbd07158ad42235ad134600fce17b"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "ae95e17f5dea2c0d1d616e0aef1a941b"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "225c10492c199b493d96cb2b32ce6c74"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "a4b5a1e259497a0d15628379b460b134"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "821fc050b070f66a07c2250f1b7d9419"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "91fd7366e63a1364152cefc88302e58d"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "5f14f64909f3762698d3534d97637ec2"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e886bd832636af417cbbd844579cd551"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "c3752ab80d14f13b31a2fa89d3bcbf41"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "63eb044b75fad0676030631da68d056a"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "898b07254da6802a6eee623aa2ee964a"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "cb287944fe5f77804dff827939bdf532"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "f5bbda1f8c0e1b31b0392e8ed8e0fdf4"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "3193ad2bac6707cf0c02d5f6542cd3ad"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "510a6438a41346fdf4ccf5823153dfc6"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "1b69b8befd24c54c8995e0ed745ce997"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "be1592b3be0993f93aaf6e21873af219"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "a5501e3ccd404edaa71c884024c3f574"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cc3c81eb8c2a16847c64c92bc4d48f40"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "ccde695d63da5f7be33af8dabbfe501c"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "48c4d7fab27c8c492dcd2e5ef397cb5e"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "bc50bf45cb89c6d0eb71066d716d562b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "bcce3f4b11e77e534443c0c0920e20e3"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "16e5968815a1f5448a9c0c0d517fa2c6"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "81f5b818e40982b84dd996973f7d0a7a"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3cf2a660db5730f30c84c2db28ae1dcc"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4782816405353fa50c2ec463aa839062"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "5a287053b5439afe484520e9b9411f95"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "843743d35646e7fe2cba017faa2c1d68"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "c1ea9f7b3250d12fae802b4d4ace7d93"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "409e493b83c7642e44f1f9a3d47ac6f9"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "274829a541053baf88ce36cd4a3aab32"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "548487c749d3136516db38f65183ca77"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "0eba7d820939731c7b986d9225b9f427"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b2e2bf23c6abbbec6737504f2fc8a76e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "9fe3ba5025ee8bc84f57b2b6082814bd"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "84886117a88416ce0e9b6176cfdc004e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "eb6b77b18b313b4433ac49c4d984f3b5"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "c8970cfe4881929d5c3c6cd76a3d3c41"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "2ec55c4ab4b6c691d2ed63f7c0c10283"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d5b6561663e299fb515615d90f9b1d84"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "dd5a266459cb6a3f90cce6ab63bac91e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "e6c80afa27b1a72e5cfe7ae0b1c0634b"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "86a0b2ae5fe2d73b77115b860ad7578d"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "240c3bea4dbc440ce0e824d0107a808a"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "93a6b47de4540be16a1e4f4c159ffbd1"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "cdcb0d9dc99e0b7673e3bc35d6df4109"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "543f6390a0418a46908641e27e41f447"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "44ae2eaf0677150f63e0115267e44b22"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "781985b356a465cc7f30639a6dbe61a7"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "dc7d8d7a1df79447b8e0b26f9f6b31e4"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "d72dc4057e11c571797ca5b7cbe97699"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c1e8599c0f5eaf55400c4ebd300b9a85"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "aa3191e9b9e9182758362050dbeceefd"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a866d4e930e28a4f854d445bf72035a2"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "4498bbbf637e5e2ff8d8bebd45057282"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "7e2cffc23c6c8b3dd2904b74db3a2fb4"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "c615fc72c68bbdb517f74c30d86e5ab3"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "cdf1c4f61dc68c378c373e88f2a89fe1"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "e783e895c197b9cc737fb3e51482a44b"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8820eff7804d42f5cdde7367334dd6c4"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "1061354c800fd3a9c7a71a556c312105"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "5e14abfc07df87bc807c9d6fd0270788"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "459d4efe3e54d3b423c923001b6ef9ea"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "9698fdfbc32717be7548b378ca35a71d"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "bc05bcd1ca671d8e0b9edcb309d380f3"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "553e38b22eacc0c5d611eeedc1fdf897"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "42439414e0cdfdf106f4ce1831a42182"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "cdb01983e5d5e708a28e85170172d294"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "86bbc29842895dc4bd9f4fe43a4a7b1a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1426e1246cdc5ce9800094208ed86796"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "720c4c60717a75c5c492491f37afbbc6"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "7e16c4e4a0bfca52cf314eaffdd6d00d"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "e8fdd776d19cf387e0429d787264ccf7"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "655c2179fc61ac31f66dd213635c808b"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "b017403c0531fc0945cfd5d7993e90b3"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "c40a4aa0292654a0bb9bc75c31eca118"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "52eec03ece4fbf39eea90b1e1f970aed"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "72736ddf1b5ded716cfff55fe6c8cbf8"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "aafc851f187185e3daacd007d67aea9d"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "152475ce8a2ef26be206668098c74d63"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "6b64d9ab8424f91bcc6c8a1328e5ad5e"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "0114046c0997417e9d2a6e472db23929"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "439c1d39662d20ca7a08c6fee5a1d13b"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "88456bf761fb63d3a10ab65f4fa181bc"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "11b416c463e66a82f07d151df8e2927a"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "0f9ab1392badf4127caec285c857ae51"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "6d672a22cdfcaa8261131dcd2725ab02"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "83067c4d57a6fd2a58b3a1e823f9b1d2"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "7c45266149cf896a5efa53d550b70fbd"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "cbc3a57b268e7897abefe5f478834642"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "cb7f46679d80137bb73a89b3e95380ac"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "b3d2fe860c66e3ab60cebea625b7e74b"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "507ead4130e5659ed398dddbc30a4f66"
  },
  {
    "url": "404.html",
    "revision": "a3acc541c5b90001a8f48afad28b386b"
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
    "url": "assets/js/10.37567a8f.js",
    "revision": "73d4f5a5831dc5dc6c4dd534855d1a7f"
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
    "url": "assets/js/122.e56cb48c.js",
    "revision": "facbf24c679e8dd61b4c669f9192816c"
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
    "url": "assets/js/14.7628eca3.js",
    "revision": "017ba794fc6329291188bbbf4de1d286"
  },
  {
    "url": "assets/js/15.fd91b63a.js",
    "revision": "779be853a1e32f94af29f615c39d05f7"
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
    "url": "assets/js/2.a30a3103.js",
    "revision": "2f06fca1e787d9c9c630ee04c8bf3bef"
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
    "url": "assets/js/22.56de1525.js",
    "revision": "5d0d252016bd3783364593e16cb14446"
  },
  {
    "url": "assets/js/23.ca17aa44.js",
    "revision": "184d52989ae853caa98ac2fb6604eaab"
  },
  {
    "url": "assets/js/24.a0ab210d.js",
    "revision": "a3e331eb3b5c7faadae5cdd86c35ff0c"
  },
  {
    "url": "assets/js/25.412a25f5.js",
    "revision": "3534430e578f67bc013b9bbe35fe5862"
  },
  {
    "url": "assets/js/26.fa5e707f.js",
    "revision": "ece3f82f5d0b1f887c21f5fea27afa9a"
  },
  {
    "url": "assets/js/27.e61805d9.js",
    "revision": "776f64bf452983300e7d1690676928e2"
  },
  {
    "url": "assets/js/28.f1afb74d.js",
    "revision": "b32e9c90dea4f57671778e6552b39387"
  },
  {
    "url": "assets/js/29.2c642c91.js",
    "revision": "cdd04be53984ffa2d82feb664f7b56ed"
  },
  {
    "url": "assets/js/3.dfe0ff5b.js",
    "revision": "53164525c23476780843740853e8033e"
  },
  {
    "url": "assets/js/30.d4ea4077.js",
    "revision": "328b20e7feb06ab26bcb9ccf218744c2"
  },
  {
    "url": "assets/js/31.c5f758d9.js",
    "revision": "06ae9415e610639daa153961e8d0b590"
  },
  {
    "url": "assets/js/32.cb852df9.js",
    "revision": "38fbb18049c56224f228363ac6d2fed4"
  },
  {
    "url": "assets/js/33.cced6ff4.js",
    "revision": "94ff631478fb2f49697a0a270a90465b"
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
    "url": "assets/js/4.113b7809.js",
    "revision": "e2f20ba9efbb7ee0f3c1d1ffe96a7ddb"
  },
  {
    "url": "assets/js/40.0dcbe372.js",
    "revision": "b33775eed14797a322f6641366a93a32"
  },
  {
    "url": "assets/js/41.6593db50.js",
    "revision": "3aa7cc3c5d46244f4224f415bcbe635c"
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
    "url": "assets/js/51.92cc6fd4.js",
    "revision": "f5a100450ca627e02aee30cdd660740b"
  },
  {
    "url": "assets/js/52.70c32fe2.js",
    "revision": "4f49e7c0830020ab29180d72f166453e"
  },
  {
    "url": "assets/js/53.b16955a0.js",
    "revision": "9c44f7ec82b38a2f96f874bb8189470e"
  },
  {
    "url": "assets/js/54.1eb9bea4.js",
    "revision": "75890d2cf0d1c9c8a5d02764ca31774c"
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
    "url": "assets/js/62.5cb68fa7.js",
    "revision": "d219c209b78871e60828e588c8f4f81c"
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
    "url": "assets/js/7.9049a077.js",
    "revision": "53834182605b48b573632d362e937dc1"
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
    "url": "assets/js/80.19e386c5.js",
    "revision": "b20e37beb39726b6fe1b946c87c1f0e7"
  },
  {
    "url": "assets/js/81.d0a34d39.js",
    "revision": "2739fe318bc169627ff8f89def6783f4"
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
    "url": "assets/js/9.c45f55ac.js",
    "revision": "6343eb6d0a27c7cff176cc6d2fef4bb5"
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
    "url": "assets/js/app.0d6bd759.js",
    "revision": "918ddaf27b31cfd21e726359ef8e9824"
  },
  {
    "url": "index.html",
    "revision": "dc792f1653178ee553ba785de1abeff8"
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

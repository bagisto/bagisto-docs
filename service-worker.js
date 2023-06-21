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
    "revision": "f1802a1c7f19b639f92ed3a30d3d575f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "6e310daeb914d1849d477b5699df3c4f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a7ce66571ffe5c78a86a88c7c3a2415e"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "60d7284c29025a6c362bf155ad971d10"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "40b91078b6e0ef32eefe48ecad676b8b"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "cb969fc388a9ec3aade2259af20857d5"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "bb86f6041c6ec0e5e27f61a1af233baf"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0db9fd8071c50edaa3bdaf21d6a59e0c"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "5a97fa5120210d7e1cea24339d7e2541"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "95874c4fc4e3a4f812b9832df78cac49"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "237d1516df560be83e2a3e83b3e91371"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "ccff0cbf11d2c493a3a69f183ddea1ee"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "552ddb598942dc9cd45dfc677448e204"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "a5b5de755a50832a23fab3a9cc96980b"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "20d450eeba65b08467f1c111cba4c6cd"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "23f228d2e4a60b309c837629c05705cc"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "292b1981bcfc3608b43f1064192fa818"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "f22ba478326a22860f94b011d281a74c"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "7f55bc7992152392a752ec57a548c853"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "77baf81ecff8688e52e790b3c49143b2"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "4e8a8e593f3aff6c922501d9060fefda"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "a4c93d5208c99348dacb82885a33d0b1"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "817161914ca998a49245f563b8771525"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "699ce02784b4220d94f2c2731e6b4cdb"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "cfdab221e453f19fb64901a4a27d7e32"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "609625ab7c72b13084cc1cd16303eebf"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "8b1db641eea2d0e14ded6d44c4ba18bd"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "e4c61ed10f4ddd3bd5b4ba3599c657f0"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "fbdaeddf56c987d9ffad8c6de448534f"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "e3be0816aaf59a4af823db70762f05aa"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "b70becc0076c97499d8d34e94eb4a881"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "ec65275427c3c3ec44930ff9966ad881"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "e38779b4c997f6156758ccd413755672"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "b03c77b9de4f626fcdb786aa90430b87"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "7886a4990f7583caca498924a70a1aa8"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "8b2eb1b77ddcaabf4bf6e6f3beb797a7"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "068bb50fec1f860fb9a42846f9c45e42"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "8aadb9984ba44bccf1fb2c65ce60a2d8"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "997b398cfcc079f9a4fcc94e2b84d7eb"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "266a35c09ea8c0a899880b086c7759fb"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "46b5c13417ae3b13697d9a7800dc0197"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "ee2038f76b72dbe89ad4afb56b9fbcca"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "ef16128e9a2bad8905374a8e59f7f82f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d00f8fd6ccea2bfccc79bcc461a006e9"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "e8e0d05c203fa1b8edb97a6112eba40c"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "0ed7eda1d81bd55139f717460212e48a"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "421dd395388030a5635f522f19e5a0d3"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "1c34e35a5a3cde93a56d2347787d6aa0"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "0e421ae3689b02ceb6f91fb53b23a7b2"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "cc8f234ab2041b9773482103ba02f4f6"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "24ec1ba5b3c84b734c87e6be61e556d0"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "2c4d9f9b5dc91bbc91073ca5edf5d8f5"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "afcd5f6cc4b7129c75e9955536dd3fa9"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "9e3a587f1037d79b76d344bf3edc0bc9"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "2cc3fe6a49d655c1e3f7bae125026204"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "d206e6a7483af5630f6f9309e3d61914"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8d2ebe2c9c8fccba1d2c9f13bc1c07d3"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4ee4bc1823046c7825af832c156e9360"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "1eb052eeb4fef9b01c13a24a00f0caef"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "f5c3b3debac06ffdbcefd07c814eab10"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "91832f2e332d23ebb7a1b1a4d4167252"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "1cd5372f67e167985f6760c719dceaff"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "df5e60fdeaeee5a90d5d2e9f4df11f4e"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "69aa81c1e8cf85371558a9fd28079dfd"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d5511cd3a24a3e00ee8841dea6c2e2ba"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "40cc5e406480c0b9ad7d976ede276ec4"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "555bd9726f5fc8f408ae30fd10b95a93"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8d8c42cea837f5f983bac5897b7f708d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "1e10775f89bd1a5c279012f35732cf55"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8a1cf1ae29ae1b1ff922ede4bd76031a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "c8838c63991bbeab42657c36c5738d7b"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "92d21e3b018700edfac54f993940e57f"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "690cbd6a64d1f0c8ee52d90bec19f2a2"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "e1119bf227fb4b889f39e66db737e450"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "c8bf035be1ae4713110fe6d7aaafcfee"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "fed0f8d294986b059bb2d03903153143"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "85265584abd5145e1a73eef38b4266a2"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "ff023b93134b5048cd1323feb9f440ff"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "8f950ce40cfb48bbd256ba6de4029f12"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d9114a0cb1a93469574ccf30b6a9a37b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "4d9f9eee097f9b620a4fcb741f193865"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ffd14e9954cac0b8c9dd5c5d0efe1f0d"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "79f1265669072beb3aef7fd062663af9"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "731ddce8fd9d480270159ee8b98a30a8"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "3d8cbc5f8fb41d1d1c1100082d58faf8"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "d2c36ad2fe170c1dad20856813182de6"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "f46424b0a4338f9332de33782baf5897"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "d64af52453d7db7acd29c34d12930265"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "3a0c965101587287f559eab2cc49096b"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "768d7ba30a40cc102144e717da94e789"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "e41351717f830bf612ceeaac76e601da"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "a01e16e27428e8d43e1dccfcd53060a4"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "74a3fcbe8ad12b40b489d308ee5fdbb6"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "cdd37e17a5bb80222930aef11c9cfe9c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "4b0daa4a6b79faa4078b78de88b98b81"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "7fde22030e8bd654d9e4890f9c3907d7"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "0dd9a675a30b0ee3469dd56ceb39b8f8"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "b5d78f2e0a63d6288b66112104240814"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "0b6be3021520be00923e83fc4e2874fc"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "f8a2266d23f71afe75a2b873ee974b0f"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "9ccf8ec2f4bd3065bd4d474657494c21"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "73d7d7d09a7e93bd4b2c6522ab442082"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "7503dd37d94f9340906b5c3021033dcb"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "9efc7d7f213443378a6a81193f9a8625"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "0474ce76213f05d324f5ae1e97c78bd5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e2c601beada5d27eaab84aa4aef80d1b"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "70f2d9be9bc52de838b6c4c68b474f26"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "33bdcc7a437487de2d77565e154fe4bf"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "b7bbbafa2eee6838224bc517973202a6"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3ed0fb25defaa659c02c1b9c4fad020e"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "ca9c3b6cbd081eaa30cffa0c8565b9ed"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "a8e9fd5ce22c72ed00cf6df870633c84"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "95ca32cb51c930796a138f26274f1ad0"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b51f312fb4ee47e2b8673f7f4aebea51"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "480a639b7853406b800232fb2037ee58"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "27aeb2d11b2f0c35e8f0c7b6dc2d3530"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "afcae2e604e5048313399e6fa1d4844b"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "9112c27d1b787e4aea6a12b7b28159f6"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a6cf45b84c79e6bf8835979a3fb077c8"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "2be68c9f5f5ba4ec51e5dae432272dc1"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "cd982658c90cac595015e0ad21e2b885"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "a46fc2cf13aed10bac92e3553a0d72d5"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "7683e9caf16181de21733e2de99889cb"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "68f2ca8c5815956159be3ec3d9635ede"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "b2d7b6478256732583d8c38ea80e8741"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "4b8c05ce9004cac0e584e37f64fee8e3"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "23261d7042d7a2ee28c385169fce9619"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "0977c11c4788033286e07449e831bf5a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "226fb9a3dde11f981822f345dbebbd55"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "b8097e8a84f3bda766c1baa81d68357e"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "fa77697a4c15401fc7e491644709ea12"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "19ed0ae8748e9f9ee7008500b1089ecf"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "85356a9fbb028da6e8dc88f635af1b47"
  },
  {
    "url": "404.html",
    "revision": "f071ae9f77a7b8c3484024a784998de1"
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
    "url": "assets/js/app.b0bc81a7.js",
    "revision": "37433dd426ad0d85e5594d9b3b972830"
  },
  {
    "url": "index.html",
    "revision": "efe53ca0d89127d501abe4a622b873b6"
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

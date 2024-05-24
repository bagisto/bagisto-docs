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
    "revision": "aae9562910eade145cc664e2c7962f4f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "373b7985004128ec91af7ff387833fa3"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "5caabc3c10e448e8991f2b7f2a5dc91d"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "a41a8aec14de07a358a84d86b14e93f4"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "c2fc3261aff38bed559561888cd9765e"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "1fa1986d8636a91676e8af8ef5378120"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "89e2511bb7173bd6e82ab1f788652ce4"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1b3401e48cf2ac348bc21b7909ebcb03"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "0645681ede6244e58f60912016c027b6"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "263f7ad398c899ef4d8fe8563dead96e"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "f7777d227497c7f08e91d550c76d50b5"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "093e4458cdd7fca58d8f0c3e194fe60a"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "07de6ac1786e0ea89b3f618630ac3424"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "47836d06b4ab00db852fe874e504d1af"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "65253607bc7bbeed1cb859d1821f2ff4"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "fee3e7eda59e78727f82657598e40931"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "a42f51643f2e76a8afe97436bdf1f712"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "62239c39958b4ae5a79c09a9fe52fe78"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "42bbb0633a9499fe321ca920115a8f68"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "f02269c188c785060c3c524eba95bbc6"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ab04ad8a7a9b4f5a4046a72996ae062f"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "63477ffcfadc0c7a0c057f7b4fc2c563"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "8d55234c5ed407308dbe4d4af524e383"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "4bbfb3353a543d05a1dfec1db747322e"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "2a0b366bf373dec8737b52544f7b562b"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "4e9b7d332365cf2b71a7009b56dc3ede"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "a5c5b3fb5a1e1441819ec7a74003dfc9"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "4ee57de1eccec5ec6365f97eb6dfd7f9"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "75d60c6b438624c75ad03da7927dd142"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "558d4eee73e6c92d55902ddf15f8a6cd"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "eb0cdb8dbefca02ad0f7f10978074df8"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "e77550cc1fb1828ed288228b8d53167c"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "1545799d5f4b87d0442aed4af710e135"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "f2a8a42cc0cc48d60d21e76fc1b70bff"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "701a38dc07d1664b7c971363d172a0a4"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "f5d2c50b8012bf2893e10679e50b703f"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "a62b3fdd2a374a40d3929a4c3ab0a5f2"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "7570b81c4f5760f80bbee8dad2300304"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "6d54eab6153cd38967afced9665fb3e9"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "35b304583507d6ed15efadca6d6b73ac"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "c49cab1171a3ac660b93db4c898055c4"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "3cc3f81e3cf820824dab949ae3bacabc"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "577fc36afb0ea5b0ed9111340a56c90f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "988cd9b1d5bd7ec39e8c17a76557e9f9"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "956011224e838a9957998d4bf8df44dc"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "0f2d1a10c115891bc0fb825eaa4f9ea1"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "4fe6fd6782f1826fc85c25c9ed77e8ff"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "c06f73427cdd79c2f4894c0b98066a9e"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "0ba11142409b0241ace35ca7c76f156c"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "6e397d18e4866748a4c48c81e9091ff9"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "bf6ef3d7c31d6597905656edd1c88fb9"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "fa83b95db46c7d9170b0ad09978d1f55"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "b0d0eb12bd3422f37f145a9cd44c9873"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "bb83f44dcfe81ce451a4dc548f28d01e"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "8d93e9eddc8429144066daa3283eb307"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "fc8ad2ac27b067ff880b3f8f2983432e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "a065ed0efd94bbe7e437fcc9a61a9112"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7e71a69730196f63d1fa13f8dc0dc65f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d85ff303fe4958e71e46f674b70b8691"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "326cb4ad55b34d7ecaa106f52bf31a69"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "c496826d21e05210d8c6b16289056191"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "45d9a4c61ff2a6ef18b19f3e79027036"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "e2b69e3e7e514d72e35df928f34a4b2d"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "80c46132b05a8072d34cf252fa22adaf"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "8a910c79cc87cff870bd9e172f0764e6"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "0d2c47e53102d2a526a85b05c3055eb7"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "62de50ad8cd5f43d28f1a0422d4e7002"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "48ffb769a619c32f3b5591154d8aa429"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "99d448e38db8cda0e9dfb3bd7184169a"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "7f720167d8e007789d85d897b7d18ce7"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "29c809b16ad8a837a9b1f9f24568712a"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "d299464c4a9d7da795526ea20e3c606b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "86940e5091f29b8a86333b7e7a3a47ea"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "74de24abe4d3f12f547eac51ed129fdc"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "b80f868e06550c979381279301819394"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "c7902b98c2919e4dc14ee958a03a8bcc"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "f0c75e9764637d152ecf1ee15539e70b"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0fce0136e567ab0e0986cbb7c9706264"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9686caada60d7bea020fcc95aff577eb"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "90ef306d3494cc073b3030d18ae1bbec"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "ecca80f2c1f64faf24f39ce0afb54b66"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "e4ebf8694c5aaf2024a397549ce81f82"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "3446fc3fb9ae2e389cf0b8545f1f7d5a"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "fe03a4bd7cc29609829c2a1b60c2658a"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "f626fd7aaa95d56bce4314bbd2548a4a"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "3b7c4338e9ed1807529596ef4c816c0d"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "41d1135c1c056f26c419c4dc7efd6ceb"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "56608daf8344fe31c335d23db70ece88"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "11fabd116357f5e28a5b00262e6cea1b"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "318b50ae6694480a6354b9fde6085c10"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "b54524981f4a52dd4ed5628963cc2a38"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "d88e09ef654d6dc5e19d26c444fc7b4e"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "fc7d132f0539348d972039deaffdf661"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "9e04c6636e9bc11fb69bf1e04cf36a8c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "d4a84d0f2817e55d8e5ea88dacf7b322"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "74b27778b97548c8060c902d49988243"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "34dc62017dfbff5e55daf36b0c89afb2"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "b4f28f226179f7856df87d1b67376df5"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "915ddd800d6d549bc808d4e43fa8d525"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "41601c33e9a9c2f97efe07b706c26507"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "455c23334a4b5f69a6a51b11cfcbf2ad"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "8d9e5d426d7a2227d06d8e900ce2b0c1"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "383d0922a844f05da59d16382c697cab"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "d0052d88e2fd12a1a6e8f3d78e641508"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "553a779bfd9bd016b8a4c49587b4dc11"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "220461e7ab75ac37a511e770d9c6a3ee"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "59bbac8e14ddd0703e9dc48990b2d5e4"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "1d86b1f062ea575389b81bbec8e8c2f2"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "8fdb03230d52de384159e50bc11479fd"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "d5a7f9b72d6a20e91697cc7c5df34e72"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "bca0abe29faec79755562044c2f7a0aa"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "fae87f97a13b18dcb8c55e61d13b57a9"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "b94a1918a4b65046abc8a4ae6f0ae965"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a4fef4c760561cf544362d4724c0d43e"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "0ca4182890599b62e75cb929df7acb28"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "9fc7c2d73dadc7334a3e6dc462cc6a9f"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "169d56ebba1efe03c2470bcecc573095"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "8d86fb56217df9b323bb9d8083e15759"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "fc047450ead7f12b5d4095bdfaff74f8"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "15c2fff9d8070810f50a1b22807d8af2"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "d3df8015c912b06c5754080f74956501"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "371f80250cb98bf37df3eb9981029459"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "48ddc6c77b2f42bcc798da6d697f100c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "cdbba3458985ed84fb985fd4dc83152d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "5072e004982b5fce045f3ea5fe3b7f3a"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "0826a80510878867d815bcee8f9f202b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "655f67623f70e326bbce658aec5d4583"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "760e865906be37fb0eb2ed356706394f"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "26b81bfb4de4526aee47cb76fde160ff"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "1470ba398990d4286f13a5706bb95628"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "487ff64ac1166e1c8b24125ec277c104"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "647104dfc5145d3b65585727c4812aa4"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "d123b4580d21b95a2b33378c656ce698"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "0414503f83cf90210af33bc3e22687c4"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "265a14dc5b51430bb71a808175c5099b"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "f92aea3766b9013959c448688c039e23"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "23a752ee4a88ebbb805b5f7285c67265"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "c1361a057c1e52a918ea12743c368410"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "a6272ceee281a3da4a3fb58cc272a8c7"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "de7d6d54683d85737c7f619f11010331"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "39d8e3c20f24383c5eb113c704c17a66"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "b818ea35c40a0755cf0f363e864c3dfe"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "d5d9eb611e4b7515c03d6f734192e6be"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "e2b2aada39fac2bf4faa02bfbf8312c5"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "1810cc287742e3e1be5dbe95de14701f"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "5399cf4bb23959fe000876c194135aa8"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "f5a920a75d36424b6f34d8a1516feaf1"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "b36a223cf8b0fa6b445553171d837a00"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "21c8ee4f22ba258d503c07d3c225300b"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "97663d13f13539462f649856e9cf1901"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "d15f25a17404d6d8c4417987d5a7c387"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "c0de9e04bfbc09ec053be3eaef890935"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "0325f18cf890db8f4bd18e0f7b475d3d"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "4c0f7d9f182c1cd0c7c2ea4c4172cbf7"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "ad45107dbd11f2987f81b1fbe72dc5a3"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "371105ee3dc7487f457f9f093639f1f6"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "b3896f033247ced588283027d02ed814"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "d75b78fa5e6c485c4aa721a72d5d05c5"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a21cbeac8859973a474ee165c8245c00"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "2a3a6ca81119038fe2ab48acf9003692"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f722e96729780d39b8e149eba61c134e"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "af3ab86e331514050b3a54e290e402a3"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "7c38276bb9c9b8d60174f4d16ed99604"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "8f6599f4d08abd2be48e7259e781db25"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "0169d5ec5600ef722bdd309b8ca13091"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "fe1d33f2f830f1d0ad40bf5eea285b5b"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "2123abaa462f3ec57c90eba3ba693e66"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "8a91b94d3d6d8c534a9afacf8971f1b1"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "23b5026a48adc635a62162a6187db081"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "20931b8cffb9dfbfdf80c143bb1acbd4"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "40f1b1c23f21057bd6140ed8d03aad4b"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "c6b320c6d8b20a37b5d747f2a1e83d70"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "715131a3af4bc8393855ff26d098e9a0"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "3cfa89967c2894354af8333013619d53"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "7edd5912d86dbe3a38f4e1cba1631da3"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "0892ba535d73e81c5adbe5f7afab6d5a"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "fed6ca356ad8d2f6cd3bacfa839fc9fb"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "745df030b01896393c6cc4ad9fb43f35"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "241d019eff922069a21941d136b639b3"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "2b07645557f0665231f1a646078700a1"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "a2bd8b61b839c9be8ff3470f45dcd9ce"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c85416b7d3d0124b66a9b021d5ee73b7"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "39d95e9f41fae94e98df25b292452277"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "4154fb0e37e21cedc21ccbe2eee538d8"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "21be637803d061e6445419c01f6ebfa2"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "10926c8ea058ae04dec9eca5563e428d"
  },
  {
    "url": "404.html",
    "revision": "9d1e3c7e456d83241a429d9d94fb0f29"
  },
  {
    "url": "assets/css/0.styles.b729bcda.css",
    "revision": "0bee541eb1404ee573bceccece39cc00"
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
    "url": "assets/img/admin-acl-output.b9cf7d8a.png",
    "revision": "b9cf7d8af9f9610def53593fc0d1fb27"
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
    "url": "assets/img/admin-menu-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
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
    "url": "assets/img/custom-config-output-1.c07d16b0.png",
    "revision": "c07d16b059ed84790741caf02577a696"
  },
  {
    "url": "assets/img/custom-config-output-2.0848dc68.png",
    "revision": "0848dc686b4c4767b613f18d95de60bd"
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
    "url": "assets/js/1.e76529c8.js",
    "revision": "25e1b9f4c7e89f6fd6e7d1824b4a43b5"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.81c90bf3.js",
    "revision": "8366c7a6ad941aae483d7752adef34eb"
  },
  {
    "url": "assets/js/101.6a6198e0.js",
    "revision": "911b3f58b73bbf1c67e81b6c933e63f2"
  },
  {
    "url": "assets/js/102.9ab64c3c.js",
    "revision": "2a1fd9ec6f9b8169544fe7edf6631179"
  },
  {
    "url": "assets/js/103.a6632799.js",
    "revision": "4b9f528b78b82d25ee2685a062618d0a"
  },
  {
    "url": "assets/js/104.11d8d115.js",
    "revision": "3c4d2983d8110a63e713d9c4d92869db"
  },
  {
    "url": "assets/js/105.c0cfa61c.js",
    "revision": "7c935a7771c1052f6187af94e35c7b75"
  },
  {
    "url": "assets/js/106.e84cd147.js",
    "revision": "8106c0a0990a07704a72c9f177417457"
  },
  {
    "url": "assets/js/107.01b2c2ab.js",
    "revision": "ece68042354ee42147df63484c915abc"
  },
  {
    "url": "assets/js/108.4000da30.js",
    "revision": "60ccf8f736e9d5802ccddbf5ff224264"
  },
  {
    "url": "assets/js/109.76241778.js",
    "revision": "983adb725bb242012f3c7e0aff875215"
  },
  {
    "url": "assets/js/11.436c3084.js",
    "revision": "210096d72ab159f46a00cab023d6918d"
  },
  {
    "url": "assets/js/110.8ba731fc.js",
    "revision": "94ad712402dc3967d01f76fa89b68e0b"
  },
  {
    "url": "assets/js/111.180ef911.js",
    "revision": "564947815477692cc148b92ebe682209"
  },
  {
    "url": "assets/js/112.024ada58.js",
    "revision": "513ae05b080dfa726cbd605924a48e0c"
  },
  {
    "url": "assets/js/113.31eadb21.js",
    "revision": "4d0083d4f150c22457d495987e5c5468"
  },
  {
    "url": "assets/js/114.31e9c8a2.js",
    "revision": "2f789a60ecef7d481a46b482e2f776f1"
  },
  {
    "url": "assets/js/115.03642dd8.js",
    "revision": "ba0ca12174566193311e6370418ae19a"
  },
  {
    "url": "assets/js/116.c6e1c705.js",
    "revision": "91aa2942fa650db186f2016ae75a39e6"
  },
  {
    "url": "assets/js/117.cbbe5bc1.js",
    "revision": "610e289d63185e6901bc2892419efd45"
  },
  {
    "url": "assets/js/118.16a64ad5.js",
    "revision": "be1f31e8805dc6a3daf7400859b15d33"
  },
  {
    "url": "assets/js/119.5552a03f.js",
    "revision": "51573c31fdbacbb9a88005ed87356a53"
  },
  {
    "url": "assets/js/12.9b51fee5.js",
    "revision": "9fbfba627a1b6806363c7e86da5cf350"
  },
  {
    "url": "assets/js/120.8551a7c1.js",
    "revision": "2acd38316f9e28df788daac51786851c"
  },
  {
    "url": "assets/js/121.93b93350.js",
    "revision": "df6d441bfacc4c4be8b20229bfba6a80"
  },
  {
    "url": "assets/js/122.f1372d5e.js",
    "revision": "be32f2aa9ad1a05085239b5565f22be0"
  },
  {
    "url": "assets/js/123.5a1db59c.js",
    "revision": "2cdf51ecc90a608bf612fdffb5b9aeab"
  },
  {
    "url": "assets/js/124.79331dc8.js",
    "revision": "1fc3fbd27697bfe5e26cac52b5831ca9"
  },
  {
    "url": "assets/js/125.a611e275.js",
    "revision": "dcc0a0319f040819bf0abaab1dc71056"
  },
  {
    "url": "assets/js/126.1a7ec03d.js",
    "revision": "2f8b6bf97cdc20c00892f10173159e4e"
  },
  {
    "url": "assets/js/127.dcb6d71f.js",
    "revision": "d94ebeab4efff71e045fe460ce1530ff"
  },
  {
    "url": "assets/js/128.29f82f93.js",
    "revision": "dc70a797739d9e5803df09e6063f073d"
  },
  {
    "url": "assets/js/129.54f52d33.js",
    "revision": "f23d6f2929a4511a6ca21a3b457c6a3f"
  },
  {
    "url": "assets/js/13.d0b481c3.js",
    "revision": "3e15c416a5da5b23c4eb5c0529fc97f0"
  },
  {
    "url": "assets/js/130.2d6e1f1a.js",
    "revision": "676e88c93308418cf9c1d7ef3c5fbc2e"
  },
  {
    "url": "assets/js/131.86a62b0c.js",
    "revision": "e54a26cd84e61e8f26e05744b069c190"
  },
  {
    "url": "assets/js/132.06173240.js",
    "revision": "97eacd3e9064a9919d02ae33315a52ec"
  },
  {
    "url": "assets/js/133.360eb7bb.js",
    "revision": "344e737e023aa32db304fca7e57a6a91"
  },
  {
    "url": "assets/js/134.658a8956.js",
    "revision": "eeb0c37434a88ad6491771bee0be4024"
  },
  {
    "url": "assets/js/135.bd2e7982.js",
    "revision": "3cdb6c7da746d0a07bf847296574ce13"
  },
  {
    "url": "assets/js/136.d754cb4e.js",
    "revision": "78e2a8dd02ad1674cc0f445e1621fb4b"
  },
  {
    "url": "assets/js/137.e2be7e19.js",
    "revision": "113c3a6c724924e12f5dbbbda90891b7"
  },
  {
    "url": "assets/js/138.5f5c61dd.js",
    "revision": "272960f843efb3ecc2e31b42e4b69223"
  },
  {
    "url": "assets/js/139.0417e1ed.js",
    "revision": "91ed956bf7cee4da37f67df722cd8231"
  },
  {
    "url": "assets/js/14.1cbb58a4.js",
    "revision": "2babba03a2984e03af15b1bddf87564c"
  },
  {
    "url": "assets/js/140.78f3c041.js",
    "revision": "a1f5b01c9b1eb0028cef6c401bb6f8f3"
  },
  {
    "url": "assets/js/141.60208cda.js",
    "revision": "fcd8bcbd048644cf7b8cb00f36e17116"
  },
  {
    "url": "assets/js/142.a8fd691a.js",
    "revision": "542e40ff613e4a081966fe3366cbaf8c"
  },
  {
    "url": "assets/js/143.b4b19c7f.js",
    "revision": "08352aec936d85b818babb07f8e0a546"
  },
  {
    "url": "assets/js/144.ec2a569b.js",
    "revision": "e8ac030062c09c0a029dc02fdefc3b50"
  },
  {
    "url": "assets/js/145.87356af1.js",
    "revision": "368fcf97ec55481b0bbbc14e280fdedb"
  },
  {
    "url": "assets/js/146.6731c76f.js",
    "revision": "f1091e6ab7075e5fb3ab632a6abf9cdb"
  },
  {
    "url": "assets/js/147.82aae408.js",
    "revision": "956795efedd5ad80099ca88776507c0d"
  },
  {
    "url": "assets/js/148.c161037d.js",
    "revision": "ae03c731e53ca3dddfde37b5f0473ad9"
  },
  {
    "url": "assets/js/149.641a59c1.js",
    "revision": "c60b86976bb60ea7ac4804f77b6a7fb4"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.f46f4049.js",
    "revision": "df568f8eea62afca55ef78cca7700dc3"
  },
  {
    "url": "assets/js/151.67973ed2.js",
    "revision": "b80badbc2c6d304ab0d577ba4316635e"
  },
  {
    "url": "assets/js/152.d793208f.js",
    "revision": "bff9e271a091c175f352642685ba7f0c"
  },
  {
    "url": "assets/js/153.2b592c58.js",
    "revision": "6fc41ca96072733a7e6a3e8b21256319"
  },
  {
    "url": "assets/js/154.df56766b.js",
    "revision": "2eabfde8a08f8214d29d213c9ab9cb8e"
  },
  {
    "url": "assets/js/155.d5f867f5.js",
    "revision": "01a6b1779dd9b085af263f186ed4e13d"
  },
  {
    "url": "assets/js/156.9bf5955d.js",
    "revision": "eb34315301389a51e709009585a41106"
  },
  {
    "url": "assets/js/157.192dd846.js",
    "revision": "71bb6053b823f74c2e49fa0f73aee39a"
  },
  {
    "url": "assets/js/158.e638573c.js",
    "revision": "9da8cdeb84d0633c563b1207aa41ed11"
  },
  {
    "url": "assets/js/159.eb6d72e6.js",
    "revision": "d93e6afaab0a9e11297c39fa5ea92ed0"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.4ca11d28.js",
    "revision": "9dec21a62229e08218cb099c1654a732"
  },
  {
    "url": "assets/js/161.952fcdfd.js",
    "revision": "c3938c1fabda1261f406b1a4af5cb753"
  },
  {
    "url": "assets/js/162.4d9cafa3.js",
    "revision": "067ecc2a5e34fea92c7f6fe9bedbc66d"
  },
  {
    "url": "assets/js/163.76c32401.js",
    "revision": "fd2f3d1405376e41f0f81835b5500125"
  },
  {
    "url": "assets/js/164.980691d6.js",
    "revision": "b171f625520172a6ce410da46d4aee75"
  },
  {
    "url": "assets/js/165.2561794f.js",
    "revision": "d2c32435bdb424a61984099b2669bdbe"
  },
  {
    "url": "assets/js/166.ec29c7c5.js",
    "revision": "81fbb194a2025e8e245175065aa89646"
  },
  {
    "url": "assets/js/167.16ff9d0c.js",
    "revision": "61426712495b9013babe6acd5e32a680"
  },
  {
    "url": "assets/js/168.d249c0c3.js",
    "revision": "f27e4019be4231a46e4ba6d180088097"
  },
  {
    "url": "assets/js/169.3862f5c4.js",
    "revision": "7d883c99a7ff94a4845ea2dbc3e6adac"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.a74bef61.js",
    "revision": "ff828b900eb9e0cf8bed6464356a693c"
  },
  {
    "url": "assets/js/171.4f0b69d9.js",
    "revision": "82e96e8063c70107fab86716888206c4"
  },
  {
    "url": "assets/js/172.ecea7cfc.js",
    "revision": "4d1eb295b5b5ad251f89463ce57d9552"
  },
  {
    "url": "assets/js/173.21109e67.js",
    "revision": "b7db98c52075fa765f871e4f22e129ef"
  },
  {
    "url": "assets/js/174.4f42b1ab.js",
    "revision": "dd1f8756e8f02e043bfafeb80a421917"
  },
  {
    "url": "assets/js/175.3eb292c2.js",
    "revision": "efeea3b7b671dac6ddc8bcf6e343d6f9"
  },
  {
    "url": "assets/js/176.e5822288.js",
    "revision": "82e0778c48cbdb6dc576de3f0a79e897"
  },
  {
    "url": "assets/js/177.65a96dd1.js",
    "revision": "029616ade4dd19d5af4fd7735fb8768f"
  },
  {
    "url": "assets/js/178.7b8a6f1e.js",
    "revision": "8c4efa87f64390093e7143d8b19afd59"
  },
  {
    "url": "assets/js/179.0a9bd361.js",
    "revision": "cb416c7a610e023cd5d35ac8ffc4dde6"
  },
  {
    "url": "assets/js/18.7b137de3.js",
    "revision": "754354beafefbf44e476ab39efdf51e6"
  },
  {
    "url": "assets/js/180.0a972ee8.js",
    "revision": "1cee06ab21af3eb6ef7840beb5b1242a"
  },
  {
    "url": "assets/js/181.aea332d1.js",
    "revision": "db4c96ce628f3821b32bc4f1b899a64d"
  },
  {
    "url": "assets/js/182.c450c823.js",
    "revision": "0a4650a7d4faee1ffa0bc79b8c7f8fde"
  },
  {
    "url": "assets/js/183.a6871b4c.js",
    "revision": "a1f129ce521b5bec8a0da60c4d183b87"
  },
  {
    "url": "assets/js/184.f0f4e915.js",
    "revision": "e56b83ef047635d1eef164de39c64d48"
  },
  {
    "url": "assets/js/185.c1aabc4f.js",
    "revision": "30931664ec1d9dd49aa1dd3cd6cb3175"
  },
  {
    "url": "assets/js/186.b05bb639.js",
    "revision": "1781d1edd8050318b3982d79106bcbdb"
  },
  {
    "url": "assets/js/187.843ae654.js",
    "revision": "a61b3afd2cbced8515b6983343655254"
  },
  {
    "url": "assets/js/188.3a3b83dd.js",
    "revision": "98d2aae8c3d3d69d4336d8dbaa5347b2"
  },
  {
    "url": "assets/js/189.253b3c12.js",
    "revision": "a935ee6707a2e5372696fdf5bd650531"
  },
  {
    "url": "assets/js/19.fd820c2d.js",
    "revision": "1fab7e2d650d2c9490cee7e4887edcb7"
  },
  {
    "url": "assets/js/190.dc820767.js",
    "revision": "f5eb5fc5a6f91955d7f8c926d4d2abdc"
  },
  {
    "url": "assets/js/191.b1181c7d.js",
    "revision": "97d7aef2918fd09d69ea67166df748dc"
  },
  {
    "url": "assets/js/192.0d140c1e.js",
    "revision": "ae41a626402a84818f30d3f4835476d3"
  },
  {
    "url": "assets/js/193.0d766e2a.js",
    "revision": "06d0f0c7a064fb1fa962856ac70157a0"
  },
  {
    "url": "assets/js/194.9a6fb1ca.js",
    "revision": "4c3500ff0a56e37ff06e251dbb0efbd1"
  },
  {
    "url": "assets/js/195.989fe801.js",
    "revision": "13260f21a3cdf488098226277175bc97"
  },
  {
    "url": "assets/js/196.49c41eb1.js",
    "revision": "0447245466d80940406bc4b696b3b469"
  },
  {
    "url": "assets/js/197.331075be.js",
    "revision": "a53f9c63c220979f3f596c9a5974b6cb"
  },
  {
    "url": "assets/js/198.d04b345a.js",
    "revision": "a786ac8d2e0960dcda4d0b76261b4615"
  },
  {
    "url": "assets/js/199.bf47c095.js",
    "revision": "131fed39f87e0fe924650b438c52716d"
  },
  {
    "url": "assets/js/2.3b6b1f5c.js",
    "revision": "660aa01f55de14205f9f2d58f1532df8"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.ff191d14.js",
    "revision": "d3b2a4ac3ddcdf631b001441c8b800aa"
  },
  {
    "url": "assets/js/201.77b64a66.js",
    "revision": "954e69f7c9992d862c65b39efd9d8d8e"
  },
  {
    "url": "assets/js/202.1c648841.js",
    "revision": "284822e420962013bfc5366f5d81f54c"
  },
  {
    "url": "assets/js/203.ce0f2c90.js",
    "revision": "119e91a90695a0cb951e3c1bb0e45d1b"
  },
  {
    "url": "assets/js/204.fa98c0c0.js",
    "revision": "d4cf0240fa895156b2a4569106b0d0d7"
  },
  {
    "url": "assets/js/205.d5c85ed9.js",
    "revision": "9e4f3433575781b56bc73b13da154e6e"
  },
  {
    "url": "assets/js/206.9a8e9907.js",
    "revision": "48e77744075fc63ff2c096f8d01190cf"
  },
  {
    "url": "assets/js/207.e86e9d09.js",
    "revision": "42cb55315e197452b6a67be732c6dc59"
  },
  {
    "url": "assets/js/208.571b338c.js",
    "revision": "211315ac3d397a02a2357764c0fc37b9"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/23.c92235eb.js",
    "revision": "6c18d72fae9fc129a751d92ea5365496"
  },
  {
    "url": "assets/js/24.aafbb075.js",
    "revision": "f1a668ee840cd12eb4ab7931564ed522"
  },
  {
    "url": "assets/js/25.4ff25889.js",
    "revision": "3d824cb4b57f7de0aab8179cb089d85a"
  },
  {
    "url": "assets/js/26.20f2fd84.js",
    "revision": "f6dc25d7f9ba145d6bae066463a62e00"
  },
  {
    "url": "assets/js/27.449d00b1.js",
    "revision": "5fc69ec8c30b5a3fdba8595627712fd3"
  },
  {
    "url": "assets/js/28.9589c169.js",
    "revision": "f0ce0b2e21bfc8f4d033e4515a03437a"
  },
  {
    "url": "assets/js/29.d0071091.js",
    "revision": "5627640913b5559270a2d3038e693fcc"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.4e5b2595.js",
    "revision": "ad23d4c6ba926c876d4d50252a322404"
  },
  {
    "url": "assets/js/31.90732a05.js",
    "revision": "4c6d37818827d973e9d0400a3e950a8f"
  },
  {
    "url": "assets/js/32.bc717ed1.js",
    "revision": "550b3c92c06e952ec738c9e939a28619"
  },
  {
    "url": "assets/js/33.0848d820.js",
    "revision": "261f9d01a92747bb7a81b9f40285da4b"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.d9998842.js",
    "revision": "40e22f0689489b57fe70f2ff88222931"
  },
  {
    "url": "assets/js/36.bd9144b6.js",
    "revision": "ebc1bf2ba304561d8ac1442b616e4d44"
  },
  {
    "url": "assets/js/37.479f809b.js",
    "revision": "84f96dae0b32d6c989ad17a3b69989fe"
  },
  {
    "url": "assets/js/38.3854acc9.js",
    "revision": "48ff93f2ef6e145c91ce76010fecfa80"
  },
  {
    "url": "assets/js/39.f24d794f.js",
    "revision": "e3d91df591cde109a8421aeaf78cbd9a"
  },
  {
    "url": "assets/js/4.753e95bc.js",
    "revision": "99666e0539fc9e584f7022931c128f8a"
  },
  {
    "url": "assets/js/40.6870e565.js",
    "revision": "c730507001ac0490bea5e360924df588"
  },
  {
    "url": "assets/js/41.6a13d5b5.js",
    "revision": "96aecffcb8ad1fbf396bc93ece5f2c19"
  },
  {
    "url": "assets/js/42.7da817d5.js",
    "revision": "ce6c1b87500f465e7c0c5ac44efe5bad"
  },
  {
    "url": "assets/js/43.12bdd92c.js",
    "revision": "6d72d9271bb5860ce962a8bd1fd9678c"
  },
  {
    "url": "assets/js/44.1d5af142.js",
    "revision": "52e60ddef4315f3278c7196a9625e85c"
  },
  {
    "url": "assets/js/45.6824b115.js",
    "revision": "8b8b541d01ce41a691b89dbeb2640b23"
  },
  {
    "url": "assets/js/46.bea7a0b4.js",
    "revision": "2c08520831c3d55e30cd8e90cf39313c"
  },
  {
    "url": "assets/js/47.bc66fe08.js",
    "revision": "c2c362b7d923ba067108c5e4de760474"
  },
  {
    "url": "assets/js/48.47c1d808.js",
    "revision": "f7efec8812133400c60fb911984f5e6f"
  },
  {
    "url": "assets/js/49.6de331f2.js",
    "revision": "d42a3d70cf4102a1dcf94f49046f7f1c"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.39b1be23.js",
    "revision": "0a9fed46da2549a8d349ba79191e7bc4"
  },
  {
    "url": "assets/js/51.4859aef0.js",
    "revision": "efad4669a06be3ae3c7cf444873c4581"
  },
  {
    "url": "assets/js/52.cebda4d9.js",
    "revision": "91bd65ebf8715fcc9ddc4bda92ab8c7c"
  },
  {
    "url": "assets/js/53.a4f3201f.js",
    "revision": "3879e2c2f89ffdb222977be3b8c662d1"
  },
  {
    "url": "assets/js/54.79306bdd.js",
    "revision": "4d4063c3092003e84992862a56241c17"
  },
  {
    "url": "assets/js/55.f4ac7717.js",
    "revision": "3b811e837abdab69bdc465286f14950f"
  },
  {
    "url": "assets/js/56.10db94e7.js",
    "revision": "1ca5e112503832126a288d2e1d9f37d9"
  },
  {
    "url": "assets/js/57.f79061f6.js",
    "revision": "7920044ccebec77367141da6edda4d55"
  },
  {
    "url": "assets/js/58.797a8eb4.js",
    "revision": "6e611b3c097f3f1ca36b836bb7c65dde"
  },
  {
    "url": "assets/js/59.deb7bb65.js",
    "revision": "ded51797d75a49395730f8b07f83d1e6"
  },
  {
    "url": "assets/js/60.50884343.js",
    "revision": "7cc4b4a1f75de886b3e0323c84560bed"
  },
  {
    "url": "assets/js/61.fb99ae47.js",
    "revision": "e8c25661ef1530e041abbd3b0a9b37bc"
  },
  {
    "url": "assets/js/62.9529d0c0.js",
    "revision": "cc2a5969481562902a15dca10b6cc927"
  },
  {
    "url": "assets/js/63.50db7efa.js",
    "revision": "b389cfb5d5ca915609b00d8b2dfc6b93"
  },
  {
    "url": "assets/js/64.649a3b32.js",
    "revision": "451a21035c9645167d2b46f975ed42fb"
  },
  {
    "url": "assets/js/65.459b2561.js",
    "revision": "9a743e7df161a8e7e5c42ce06e56c37e"
  },
  {
    "url": "assets/js/66.6ec62469.js",
    "revision": "eb877cecdf529f708f560ba9a0e8910b"
  },
  {
    "url": "assets/js/67.bec75fdf.js",
    "revision": "dde56fe722bbc1845aa44bec42314849"
  },
  {
    "url": "assets/js/68.5648b517.js",
    "revision": "104a8bf6c11707a6f0f5fea39ab49d37"
  },
  {
    "url": "assets/js/69.d377fbeb.js",
    "revision": "1c8633686260fee1788f6b1c13b22ec1"
  },
  {
    "url": "assets/js/70.884e29bd.js",
    "revision": "997a33709cdf48a0f998600efc99a6c1"
  },
  {
    "url": "assets/js/71.0a17be75.js",
    "revision": "0c03838fd13bbe720099bdc346895939"
  },
  {
    "url": "assets/js/72.99de9661.js",
    "revision": "fbe315a5bfd7d89e189a6cf1aed1ab84"
  },
  {
    "url": "assets/js/73.70a44f71.js",
    "revision": "f5efda17fd29e48516a92f4bba225f45"
  },
  {
    "url": "assets/js/74.cf39ee12.js",
    "revision": "a30dadd99875c5403d63921681432c40"
  },
  {
    "url": "assets/js/75.de66f7b9.js",
    "revision": "f8be1add3ef5afd6426b0b3e56d9ef03"
  },
  {
    "url": "assets/js/76.936f0d3b.js",
    "revision": "76ee5baf8a1636c50f5dd35186a16554"
  },
  {
    "url": "assets/js/77.ced340bc.js",
    "revision": "fd9e8055e66957ab6a9fc5b0b708cb46"
  },
  {
    "url": "assets/js/78.f96ebb19.js",
    "revision": "dd9e6e01306befa32e17d2190ed8f5d8"
  },
  {
    "url": "assets/js/79.d652408b.js",
    "revision": "0ff8bc3031351b370e42cf443b5907e0"
  },
  {
    "url": "assets/js/8.84ff08af.js",
    "revision": "5298da8ee81d8525093ec9048b0e44c3"
  },
  {
    "url": "assets/js/80.8f2eccc4.js",
    "revision": "29f00e2f3fbcb010c5e5574de1133fec"
  },
  {
    "url": "assets/js/81.bf17fe53.js",
    "revision": "5fc5a8ad9ec396862ec14e814eb0476f"
  },
  {
    "url": "assets/js/82.cc63f2ae.js",
    "revision": "2d291b09e1566cc4b5e4b4ed1db0aa80"
  },
  {
    "url": "assets/js/83.9fdc0404.js",
    "revision": "ccbc2c6e351d039b88bbaef49c648df9"
  },
  {
    "url": "assets/js/84.45f53f68.js",
    "revision": "e99fef9f8cfef85720b3416305758d09"
  },
  {
    "url": "assets/js/85.702a2e79.js",
    "revision": "58d761b712f78ab62781ba8ec4d43141"
  },
  {
    "url": "assets/js/86.5946d2a1.js",
    "revision": "5babeeef81d404ecae18c4fb0b917cab"
  },
  {
    "url": "assets/js/87.b722f582.js",
    "revision": "670df6bf5f519a348f001d4ff5210ac9"
  },
  {
    "url": "assets/js/88.ae16e87e.js",
    "revision": "41130154e668ad393f60cfa31125a148"
  },
  {
    "url": "assets/js/89.1ef0f0bf.js",
    "revision": "a5505afed80360d2bf05cc53368adb30"
  },
  {
    "url": "assets/js/9.c0356d6c.js",
    "revision": "d6df33bcf67ab750d1fb8df9f464d4a9"
  },
  {
    "url": "assets/js/90.d102a620.js",
    "revision": "33e0ffb69be64974d95e934131ff08b5"
  },
  {
    "url": "assets/js/91.22e71b7c.js",
    "revision": "339a926d6419161776f520d764899141"
  },
  {
    "url": "assets/js/92.f23ba5fa.js",
    "revision": "04dd8613520504c004eea346d696ff76"
  },
  {
    "url": "assets/js/93.2414730c.js",
    "revision": "1341c5e36480dfa39bf0e98dad229279"
  },
  {
    "url": "assets/js/94.4eec34e4.js",
    "revision": "e222e3d78ea020829781a884773248ec"
  },
  {
    "url": "assets/js/95.fb546e06.js",
    "revision": "99d3ab9dea46cfe6f1f354ef18869cfd"
  },
  {
    "url": "assets/js/96.ad7f60ff.js",
    "revision": "82881270cf8e5cba2797ee4a6519ee14"
  },
  {
    "url": "assets/js/97.2866aa8c.js",
    "revision": "58521d5f8d40f628f97545a0157fea5b"
  },
  {
    "url": "assets/js/98.15765cc7.js",
    "revision": "89b517472b5814f5bcc6ed92ed5c4a75"
  },
  {
    "url": "assets/js/99.f9f6cb42.js",
    "revision": "75ca12330e9af677e65eab4f9f47e889"
  },
  {
    "url": "assets/js/app.f09f0e9d.js",
    "revision": "f02d38423ccd67b8edee4a4bba8240f8"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "487516b2f86577d93586d8a63e5a300f"
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

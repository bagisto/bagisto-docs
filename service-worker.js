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
    "revision": "3216af03b43c88efe38412a3d3f572c4"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "4800361dd1dfa2abbb62df55f0d7b7b4"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a154450a666c768ba5867220d2ea7cce"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "4390b7fee7e100f9317180f35799f331"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "e64ffaf0da06d3b173c6a00c31ad4b10"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "cb8189a93ae62e6c4a60bde9cad2af1d"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "bf24d7f3486afef65438e13c0b2028d0"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d70e046409600d977b694f398a9711b6"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "a0e096b93cf9026aad2ff07c2ffae9ff"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "d92fed2a624275978ffaeb12c103c607"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "eb3bea086f792748f4950fabfd5ac632"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "baa3e5ded18ca0aea987a751ce077783"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "8b63f97342e38091cb7094b81b4602ba"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "e06b7df7cf8d58f965160f4a0d31cec3"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "2fee6f3dd93ed482f2ad73005b1d6896"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "925e8ff0450a352ac4b52552de5c159a"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "fc6c3d40499ef3c8fe8b7b04597d2cad"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "b9ed2275e44a1dcd0d17f07bbf213954"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "be963ebf947105e3ae23323a8bcaf00a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "bccc1dbee179fe3b95305413308006cd"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ee3173009d35acd7830d976166943ba7"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "f749d945cd01f65837d33ba48e0925ee"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "fa2c7309dcc730882e776fc17873a11e"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "0777e19e928186e36f122fd46d9f6c30"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "8e769fc2666e1dc36afb3820cf76a418"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "e86332c0e5a800a0bf643c7a5ff14f50"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "c1dacaa95eb8052cc1ea5643300d15bb"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "e3b58a163c7dfada7981d7bcd838221d"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "6802a2a4ea5515e096a17e93a0353b29"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "d606220dabf4359b4363c506ad4302a0"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "cacda5a87da259ebb694407cd34ef72e"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "c371258e1ba94de50710d9c4002b1ec6"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "079d6d2ca194c22cf42c21b0417e6a33"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "922dc3ae405aff47f53f97b225b7812b"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "0009cbeaec8def54049c85c46485eb5f"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "c79648222505782f5c52e18cb0d48f1b"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "478a7d6f09007f1b40a95b7e9bd93f20"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "3f455635ef8de2a01b5a81c39426469e"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "c48f34964272aca866a67028387b0c06"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "7a5d87a8ff36cfcbdb085aa29eeb2121"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "93c9b22c39b7dd7a3132bc69db449cb9"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "6eec672f314c9c68f8c1793c366075bb"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "f485a61b1db71b8f7eefbe746f98898a"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "5cb6cbfa2316fd2c9f0632d6c9f18001"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "c0ea1ce5d84bbb8667f4b315a9df0dc8"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "ea2a0d1fb953ed5e211939c6fb4c36f4"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "9565ee856a08ec36a7b3f4c81527b8e6"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "4cdbb10102fc57d5cf3b03129e996e9c"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "65ac5ff5fe621f37ca3913862ec8db49"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "956b2fe2f7ec8e9f2ab5209d430e1d22"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "55375fb37a2ed7dec26c4af8e527f9e0"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "32142c3eaa36622f420ccabd833c8ba6"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "b0ce5a2b894088b1d6f7bc6b966fd366"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "9236bd2bb939e0240ecccdcb92f62567"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "6de923bf75dd262f6b22b3c32f133209"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "d8b5036163ea06329dc26a89561d4d8f"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d232123e44d53e38c0a55e31e8967c6c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2e6a981d154b75f07dc445780362aa1a"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "117f94deae6e96e5033ba627e897f549"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "b5ed7b0e6971b4374207e3d7cc7b6d64"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "5c9196be26dfd0fd69214d039c9c1d2d"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "13c31fcec854abf6114498096e947bc7"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "0c3189ac090df2ff43bf01ba1ff0076c"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "9eb29a5dc9793d96252a92d73ecb31c0"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "6db0589cf793ad878643145b2ff92954"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "6743cb982d29399c44f6d56643500b55"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "64b59063a2dc63d76d1e35c474099328"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "ab0089b3beaee3185767581e7d0634ea"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "8f07cf96f9fd6ee4cd42fa5fb5361596"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8f86f23574bfa6942f9424e271d4d84a"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "d5aa970a45dd30b0ee8385903046bf66"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "f76d9f6bccc7a09154439a579502edc2"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "aae2adeee682252c4ec848d163b460c0"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6a8afc4383bc5d3df247a9cf9efe996c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "f2441cabe72db4d35a34f04018ea485b"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f2e75dbc5a6011b27f0f1beab71fc96b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "4b9d92bb05f2f11bce896f2f6aa63471"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "abd37f7748623f6b75393483716f5133"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "8d9505e8320d9c2859b2c623c6b7897c"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "93e63dd70cb2fa30686e91b750bcb0f7"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "a59ee54f6960309084576cc21a6de9bb"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "592f720e146e54a4719e9ef7816609f4"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "4c1b24889c2dde98bc4f2fb3170797b6"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "0e2b4f14104c7a7cb5eb16dbcd351862"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "43925cd18295ed0b5d38fb98d9140843"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5618833e4732b47b8cda9967c7493c34"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "ea7ac8d559fd028368c7281d2f16cde3"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "7799453029d354119abcf9ebb6186027"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "b60ef4ea2cb4f779bfc531b8f18f8006"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "f8461929cb1d0d27db0bc5236f623db6"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "39d3dc41e748d1cbd840d1f21b3cf0d4"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "9f7aa6c38deb772b958b64f0170dc1ec"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "62d345a2a2b414ce7eff4b65dc4cd56b"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "28acb34345c4ffa350bf7e89520fe642"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "ba8385e23d5484b1cb086818e0f86010"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "7422e602866abae07dfa8230e3ffe89c"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "7850308538e68cf6757b68b87bf24b42"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "ed7a12e4216cf7b9271ec759b117290e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "775246eecb66faaaf3207810941d6f19"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "962c558f53888ee1cf17b7440b68c037"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ea0515ada16d56fab7401cc5a0f461bd"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "8e34f99df05ce87b4de1b1afea378a26"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "e59ae0ce868ae0c80a56036c7be08d52"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "adbd326284532d41bdffb14e0a1277ae"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "030f44684480c2ff4842dbe07001bd67"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "d03962cee9f89b9eb1327a2e125dabbd"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "19794a65318106ffb47a2d5b59cee3a1"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "e185057f25c891e75cd8d6976c92304c"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "90538e25fc5a7e93a151b4e0ae469d1d"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "e6495bcba2372b7d5f4de3721e78fc37"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "8949c16430c08a1ff7e6c9ae291c7d65"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "9a85f989b0be38dc85f9fc802d9d7796"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "2ce4def4e0bd2e43421b04f857019f17"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "4bcd653a022ec9c78e37806c332a92ad"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "6b9a340f93150ccf164a0eb748ae8950"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e10de0fd44bc96387ce43f826e133c1e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "81a2da7f16e61c8ebfdc711e2a95d959"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "34a249b50d9dabf47678809cd36787c7"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "5d15255562d95094b3b454c94d443612"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "5af91569d192d4286357c6d611be0dfe"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "2cac84b151c1421899cc16302d1c6e69"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "293aa8fc353b6d1e6745647b008d1547"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "b5477e461dffaa7d384cb3a4d4a031d6"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "80d3c7180243fa10aeac4e5b6f3a058e"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "78e5b0bf856ca44c1cf7a4fab5478946"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "793a426de79880fb6338afb23f1355b8"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "03360301d61332e6a1847335b22d2678"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "28d8c31629b8a5a9b0f71c246e52630d"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "adeb6663eacb9390af0d3485f9048c9c"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "7f47581e8bfa8624f646f6259f746da7"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "3c31bbd4b2062ef0be61142f5dc993e2"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "49bd49c05671cca8bca809e96fb610ff"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "e4ebafb8f358feb60c63f3a7b6dd5236"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "47b928d9a80aac6ddb3ca91812bc371b"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "77604906cdf27cdd32b169acfc642e8e"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "7dc9056d2f6f931a0512eabb43751a0a"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "e64e3296609fd1aa03be36bf7482e3ab"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "3ccb55c155c8bb724cf894212f08d6a6"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "777c88e7eda1dd29ebf8ee578ff768c8"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "91d2766fa861b11559fdc22ccb593507"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "db364a77984faea6133d7ffe806dbf88"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "8b9126ab9f67260abae6a8fc90755001"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "19f5d065efd834be12edc8e1817b6621"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "5eebef80464dd2bc626a0165dc14bfa5"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "684a3cef9d98ae48899266aa98c8854e"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "df109a6dcdfcef8f508128311153f5da"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "f978447da6aa03c865b64b04df955ff9"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "195a1a6e29b8e3777ea2f84471f7c76a"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "a79604352dbc412b333cda49d6984d11"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a3e03907ee576031da427e7dbd19902d"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "b17bca6c36f53acc87614ad081b6a4c5"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "609238ac44a0402b368fe00f843414bf"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "ff5f65f1274ad77d229cc5320ad7561c"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "ee2a396ccf92f960b7747751db3b90a6"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "cca6b9df163678ec57a889e9bb59a753"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "1dd188cd86f8215d653a1d4b0e34b814"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "11022f29cb987faa2e7e0fdd00b7708d"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "01913a9d9500bc4d5c0c53eb1992ad86"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "dbe66f4a2a520cd609799de6248ec6ca"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "5af2b86b84195e0fb3d8478d352c454a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "4b660e676bb021942b848e4d5a962dd8"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "a99dab269ff3ad9561bea35d3b03b48c"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "20e95dfec1a40dedc10770df5e5b2ea9"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "049129fcce0d60cd1bf8577bad363fe1"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "9590c3ba382171f034623d27c2d8d444"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "904f202b711300de8216c3056cb2bb0c"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "70fd2ca67521b046d59b6ee505e35913"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "c0a66af7c6ca65507dc263723269064e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "2da040d951fe50b1a9df5c9ba88ffe8d"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "1cc5599d5f59f5a0ceb8f45e5ccfbee3"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "84a78954a47cbbde2d8fefc7aff7e480"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "fbb249625c5c51736d27489237cb244f"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "88333ec1a29d2064992054a74c2dfa0c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "fd111f7d0f71b0a385ce516ce06b9953"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "62631b2d3e9dcb1b1b615c3d7da61636"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "4aad6c413f81488e532f9d1d9509e78e"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "68d613423b9290d74a8c4c285e58db38"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "dbe5afb8fdc31699bd1c38eafd5aac66"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "12b646e76a23b247c54905b9dec78c4e"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "376d09576c103c90de9e76460b53116b"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "31226d20eeac16f9d8c75c353c6b5685"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "5b0439a1d7019e4cca0d6c0205968130"
  },
  {
    "url": "404.html",
    "revision": "04a117618c8e28cec895c858f91128c1"
  },
  {
    "url": "assets/css/0.styles.74cf57b0.css",
    "revision": "3940e9ec40b59a4daa7a4d21e3df65d0"
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
    "url": "assets/img/blog-package-output.e3a46672.png",
    "revision": "e3a46672e908470e27c372a14cce3d59"
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
    "url": "assets/js/10.9a76d433.js",
    "revision": "83be9c2674a21b757738874ea4f64dc4"
  },
  {
    "url": "assets/js/100.0e433e64.js",
    "revision": "221a2bc4c4f93268b21e8b10e6260c09"
  },
  {
    "url": "assets/js/101.a791a516.js",
    "revision": "e303103fb73058688ed9b875c4e9ad13"
  },
  {
    "url": "assets/js/102.1936973f.js",
    "revision": "f88f53b34bba28708e991c0d0b435e0f"
  },
  {
    "url": "assets/js/103.23556c8c.js",
    "revision": "40875310e90d21f32a6021effdaaf77f"
  },
  {
    "url": "assets/js/104.a216dc4e.js",
    "revision": "14607024f240d9b0f220395f142636e7"
  },
  {
    "url": "assets/js/105.516742eb.js",
    "revision": "83544141139ab20319cfba1049b2eb55"
  },
  {
    "url": "assets/js/106.e9c288a0.js",
    "revision": "1844dc3d210266947840e9c87adb6692"
  },
  {
    "url": "assets/js/107.2766b0e4.js",
    "revision": "a804aa200221b0daa7b6f9ae6dc77891"
  },
  {
    "url": "assets/js/108.6aafb3d7.js",
    "revision": "65d6135155c419e5df07cb62ac9c9e37"
  },
  {
    "url": "assets/js/109.3fe8f0bc.js",
    "revision": "53d32d8bfb0d6e6647636012c1b684d6"
  },
  {
    "url": "assets/js/11.c33b8c6d.js",
    "revision": "0765ac0970b76b53c2346a2a4d5e2997"
  },
  {
    "url": "assets/js/110.a6159f9f.js",
    "revision": "6d04e37bb14d3edcbe119202f3d3255a"
  },
  {
    "url": "assets/js/111.096979e9.js",
    "revision": "25ba2d873710d422859c01c5cb83b2b9"
  },
  {
    "url": "assets/js/112.99b25baf.js",
    "revision": "c6a5d0ecd4d0bc05a15b24debc77bcb9"
  },
  {
    "url": "assets/js/113.620cd926.js",
    "revision": "432b8af4abe49580d544ac985f7f1bd2"
  },
  {
    "url": "assets/js/114.e335f75f.js",
    "revision": "33339e64178ef53d88a90e1a38d4a6b0"
  },
  {
    "url": "assets/js/115.386fc380.js",
    "revision": "70a9079e1425e93d63f08484e6b0c6d4"
  },
  {
    "url": "assets/js/116.fd16dc3d.js",
    "revision": "979da465e3efd194b73eb3731f8fc916"
  },
  {
    "url": "assets/js/117.d44b4b9c.js",
    "revision": "0440f0a582d238dbdb681500650bbd19"
  },
  {
    "url": "assets/js/118.87f42b06.js",
    "revision": "a1e6a93b08c668546d8aeda9134687f1"
  },
  {
    "url": "assets/js/119.2129091b.js",
    "revision": "b927ebe1eaf50d763703b4669077731f"
  },
  {
    "url": "assets/js/12.78473208.js",
    "revision": "58bbc7a32092ed32d122f83faf4422b4"
  },
  {
    "url": "assets/js/120.c9056b04.js",
    "revision": "2605ce4a4f95d5710e81421dd9547960"
  },
  {
    "url": "assets/js/121.bf5a9319.js",
    "revision": "c02e291391940ed260b57084703d5d56"
  },
  {
    "url": "assets/js/122.1702c8b2.js",
    "revision": "37d90dcb0c0650c3ca10e9d8017c94c2"
  },
  {
    "url": "assets/js/123.80a7ba65.js",
    "revision": "311cc9af3443f856bb0c0c1669abe91b"
  },
  {
    "url": "assets/js/124.6191c9e2.js",
    "revision": "84c086f5785a1460a23fe072a3665e8b"
  },
  {
    "url": "assets/js/125.1c32552a.js",
    "revision": "22b3e36c80206418c779775f37f85b08"
  },
  {
    "url": "assets/js/126.5e6375e5.js",
    "revision": "08c206d43c6035753c82772893f2e355"
  },
  {
    "url": "assets/js/127.661318c1.js",
    "revision": "869f3c2a117ec53e6142ed1c092e9550"
  },
  {
    "url": "assets/js/128.faac4047.js",
    "revision": "011f7fca0c3830552f0e2118689d23a4"
  },
  {
    "url": "assets/js/129.5120f627.js",
    "revision": "f9fdda65d55a17d81e7fe1a137c26365"
  },
  {
    "url": "assets/js/13.31a0560d.js",
    "revision": "ea6e92214fa52736f15523075918fc6d"
  },
  {
    "url": "assets/js/130.96612ca5.js",
    "revision": "f1be4dcbf59c389091075b2c9395f2b3"
  },
  {
    "url": "assets/js/131.220603b7.js",
    "revision": "9bd819903c517c2641328820fff32ba0"
  },
  {
    "url": "assets/js/132.6f4f383a.js",
    "revision": "ee9ef9039e33e6af30be2b002d360df7"
  },
  {
    "url": "assets/js/133.5976e079.js",
    "revision": "f83793ff1f51dc6b701ee025ec67dfd7"
  },
  {
    "url": "assets/js/134.a119a757.js",
    "revision": "fb60082753ac3ad38761ad0cb1b0792c"
  },
  {
    "url": "assets/js/135.9c13c886.js",
    "revision": "df4540d648f2c0be90b6ce5042d09e6b"
  },
  {
    "url": "assets/js/136.03311d00.js",
    "revision": "694dea87b2b12149dffb537de2a83629"
  },
  {
    "url": "assets/js/137.f309ccf3.js",
    "revision": "c8b8dc40cf165452d08abbd191f2dff9"
  },
  {
    "url": "assets/js/138.0bd567c1.js",
    "revision": "83273b6d97b1f5627e9f249116cc4cf3"
  },
  {
    "url": "assets/js/139.eb575b7b.js",
    "revision": "087697c2c422bf3d8b9599980bf5e750"
  },
  {
    "url": "assets/js/14.9be467f9.js",
    "revision": "fc6793eb2292d2f036ad333bbec469a4"
  },
  {
    "url": "assets/js/140.7f6cbd18.js",
    "revision": "e21041d5071b31c718490ec0862a4915"
  },
  {
    "url": "assets/js/141.c07cf8e6.js",
    "revision": "71cfa2ca2e38c25ae5e9c02e02e33875"
  },
  {
    "url": "assets/js/142.017b7061.js",
    "revision": "7ce13b858d07b6a3f689aedae682aa30"
  },
  {
    "url": "assets/js/143.d9392e0d.js",
    "revision": "3d5f3072af3e27d98868fb73f872eb09"
  },
  {
    "url": "assets/js/144.f91a79d9.js",
    "revision": "a678c19ff41815cbdbab1a5b80d14e66"
  },
  {
    "url": "assets/js/145.f410a057.js",
    "revision": "39e74a6ef607c16ba80d10776b16c72a"
  },
  {
    "url": "assets/js/146.6062f7f5.js",
    "revision": "d2db81cd64c40f6a7b818af8c0bfea1c"
  },
  {
    "url": "assets/js/147.d8cf0b0a.js",
    "revision": "2a849d7d89003cc702b7728fcc9ac10c"
  },
  {
    "url": "assets/js/148.4726551a.js",
    "revision": "e6447e1a27751d0f96e9d8fba1479567"
  },
  {
    "url": "assets/js/149.19582a3f.js",
    "revision": "a9385d908791e2b2178d94b4ea28ebe9"
  },
  {
    "url": "assets/js/15.c2b3f84f.js",
    "revision": "34c0cbd321457d9083d3bddff388c273"
  },
  {
    "url": "assets/js/150.06a664ac.js",
    "revision": "fd5fc6551e4a2a3279851e7ced9b4a80"
  },
  {
    "url": "assets/js/151.5e27360e.js",
    "revision": "2f1903072082f8e3b88bcef600abf31a"
  },
  {
    "url": "assets/js/152.c5794d1e.js",
    "revision": "6cb8e10b4d04f826c76de969e4a8052e"
  },
  {
    "url": "assets/js/153.9ba45c86.js",
    "revision": "ccb7ff38c4ddceff2ceca5e7ad390b5e"
  },
  {
    "url": "assets/js/154.85dd6886.js",
    "revision": "c9b42cbb9c7f6892ffdbd19681749ddc"
  },
  {
    "url": "assets/js/155.7294003f.js",
    "revision": "f8c6033d886f1d81511e6728f1353348"
  },
  {
    "url": "assets/js/156.2e67b49e.js",
    "revision": "91db2a9cae6871c97b510d4aed4e6823"
  },
  {
    "url": "assets/js/157.930f754f.js",
    "revision": "5cd6a0f9ea05fee477fb0c0f08431509"
  },
  {
    "url": "assets/js/158.4b90fa69.js",
    "revision": "673cf800cd3d718bd57ed875e407b7f3"
  },
  {
    "url": "assets/js/159.d3167d79.js",
    "revision": "5fba2024b6a2df2e0bc431c134bbef68"
  },
  {
    "url": "assets/js/16.5c0be8ec.js",
    "revision": "1b540d943fb2d3743c0cd26da3b8516c"
  },
  {
    "url": "assets/js/160.54566587.js",
    "revision": "8e57f20406221f062346c374daccbbf0"
  },
  {
    "url": "assets/js/161.e7b563eb.js",
    "revision": "f8b69e5f28aae053ffbf9e1003f627d2"
  },
  {
    "url": "assets/js/162.121eaaab.js",
    "revision": "664f9bd9f6fcee9b77e73cfeca1305f9"
  },
  {
    "url": "assets/js/163.4f897157.js",
    "revision": "3ae96573a1d1f6c188ad1699138bb064"
  },
  {
    "url": "assets/js/164.e8c008a0.js",
    "revision": "5df505ddcdf078fcb8efc8c807e9af9f"
  },
  {
    "url": "assets/js/165.c5bd84e2.js",
    "revision": "8916c031391a5d3abf98e10d081aa26e"
  },
  {
    "url": "assets/js/166.fe5d061a.js",
    "revision": "e6b614c2512187255f8ce4a744ddd8bb"
  },
  {
    "url": "assets/js/167.a0a81318.js",
    "revision": "c4461208081b74e616cc6674345a7133"
  },
  {
    "url": "assets/js/168.a08101ea.js",
    "revision": "2bd5e30c6cb6a7cb165896b74dc21449"
  },
  {
    "url": "assets/js/169.650b0c10.js",
    "revision": "ff906c377076d58aa5317304e813f284"
  },
  {
    "url": "assets/js/17.f38f881e.js",
    "revision": "807aa4101329b577e019f4aa1f9f15ab"
  },
  {
    "url": "assets/js/170.e521398e.js",
    "revision": "094997807be34e636751cb4c33b0b33d"
  },
  {
    "url": "assets/js/171.904a128f.js",
    "revision": "fb01d682acb9244f89d7b68fccf1f89d"
  },
  {
    "url": "assets/js/172.b7a9afa2.js",
    "revision": "973df688b083c09873150ea4b23e3f24"
  },
  {
    "url": "assets/js/173.73ab585b.js",
    "revision": "97a11cc852badefa53e37d5d9e41e656"
  },
  {
    "url": "assets/js/174.5347a142.js",
    "revision": "9f4902a1a5ecc1aff6e5305fb2d497bd"
  },
  {
    "url": "assets/js/175.f730edc0.js",
    "revision": "29e82d5bfc07789705c10a91cb506c0c"
  },
  {
    "url": "assets/js/176.df7af1df.js",
    "revision": "bfadec7a5101309c6630dfdf3dbca852"
  },
  {
    "url": "assets/js/177.32aba25c.js",
    "revision": "6a62d48bfe5931655fa8408767c9347f"
  },
  {
    "url": "assets/js/178.c80f5ef6.js",
    "revision": "eea0db62f912d58dd2d7a7d25e460f0c"
  },
  {
    "url": "assets/js/179.3521cf81.js",
    "revision": "98e9ab79b05a2d237465ce7939d91eb7"
  },
  {
    "url": "assets/js/18.b61ab550.js",
    "revision": "3097bfcc3ff5f0e8b7add001ae65ef4a"
  },
  {
    "url": "assets/js/180.149675ca.js",
    "revision": "63911b22925a434c7e6a643de555e37f"
  },
  {
    "url": "assets/js/181.6ba43c32.js",
    "revision": "beaec6a59219e232beb932f5ab9930c0"
  },
  {
    "url": "assets/js/182.46887041.js",
    "revision": "d28814862c904404e1202e8d74c76aa8"
  },
  {
    "url": "assets/js/183.4d394d0e.js",
    "revision": "d17725354eee744d482b8b1008edce96"
  },
  {
    "url": "assets/js/184.fc5f849d.js",
    "revision": "63134049489f301d38fa6944c8a70598"
  },
  {
    "url": "assets/js/185.3625cda8.js",
    "revision": "1d61dfa2b7323bb29cc1fb044a645851"
  },
  {
    "url": "assets/js/186.130752a4.js",
    "revision": "f7cfbd4089ec69b624c9f0edecdf984f"
  },
  {
    "url": "assets/js/187.e05d5821.js",
    "revision": "94129e9ef12e09021bf3f562ee75700c"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.df2867fc.js",
    "revision": "e5634229324ae4f21b1fb72c8a098d8f"
  },
  {
    "url": "assets/js/2.6b6ad87c.js",
    "revision": "b688a1d0fb147cd70752b0b4b3fd066b"
  },
  {
    "url": "assets/js/20.c45c4087.js",
    "revision": "a66fd37edcbad0ee1cc209dce5cd65f1"
  },
  {
    "url": "assets/js/21.85c1b68a.js",
    "revision": "ed1b514ae3b7cd7a691013230975f874"
  },
  {
    "url": "assets/js/22.fb1e565a.js",
    "revision": "a5482c41ed83f56c642fa506753329e6"
  },
  {
    "url": "assets/js/23.c3503fc9.js",
    "revision": "8eb739d46253e6cc0265da3fde21fc28"
  },
  {
    "url": "assets/js/24.a2489586.js",
    "revision": "4cf6ceaf46f2670dd73c860e65b7c486"
  },
  {
    "url": "assets/js/25.4293cda6.js",
    "revision": "8e765c6ab2bf223f31f26e66698147f0"
  },
  {
    "url": "assets/js/26.28beaf2d.js",
    "revision": "36d3f1cda1f32e4f6652c5db8ea72cb6"
  },
  {
    "url": "assets/js/27.b87e2e27.js",
    "revision": "f9ddb8e524f683ecce65e13f28e3416e"
  },
  {
    "url": "assets/js/28.c0fb3896.js",
    "revision": "3a4b8ba90a3a0a7b4987f0a551028f08"
  },
  {
    "url": "assets/js/29.0cb4dc47.js",
    "revision": "3b8c68dda6920f93b0d4c7fefcb92a59"
  },
  {
    "url": "assets/js/3.ac25d610.js",
    "revision": "aa80ffe4a7b946bb9d93969d5a17d6fe"
  },
  {
    "url": "assets/js/30.7d951b75.js",
    "revision": "27b6d395e92912df3269c8d7c70daa0e"
  },
  {
    "url": "assets/js/31.a63acf0c.js",
    "revision": "c7520d71584517e7edabb8af59228c7e"
  },
  {
    "url": "assets/js/32.2f7c0bfc.js",
    "revision": "31db4fd8427a373fdc6d7d754699047e"
  },
  {
    "url": "assets/js/33.fb6918ea.js",
    "revision": "4f1623d8c045496ee3da1c6b7cd1c725"
  },
  {
    "url": "assets/js/34.9b3ac84c.js",
    "revision": "b1e256220aca857cc20e0e1dede756db"
  },
  {
    "url": "assets/js/35.6adfb06f.js",
    "revision": "d94fe08d7b0e72a0257258f4ca9af46c"
  },
  {
    "url": "assets/js/36.30bcd9ef.js",
    "revision": "d142e2ce7931afe9247f2eefea63079d"
  },
  {
    "url": "assets/js/37.d2d7f74d.js",
    "revision": "5c301d1624ef2e7107670b8f9e761802"
  },
  {
    "url": "assets/js/38.9e54fcf2.js",
    "revision": "0b0267782964ab5bedce65250d2bf5a5"
  },
  {
    "url": "assets/js/39.58b561a4.js",
    "revision": "3d1bc1f0d2b38dea569dd75a6deb6587"
  },
  {
    "url": "assets/js/4.37e95573.js",
    "revision": "2d3d0e39bd2446d0dbf15807a08ce7b2"
  },
  {
    "url": "assets/js/40.9cba55d1.js",
    "revision": "b5eeef2979061707229024cd0d4de68d"
  },
  {
    "url": "assets/js/41.daf4d33b.js",
    "revision": "0cadcaa334b2e7cbe69f4f1b816826cd"
  },
  {
    "url": "assets/js/42.34096dc5.js",
    "revision": "25bed1d6bf5b30678fda678351e74dbd"
  },
  {
    "url": "assets/js/43.2f1c937d.js",
    "revision": "abae80eb278517130a3ade429ca493d3"
  },
  {
    "url": "assets/js/44.56cc7446.js",
    "revision": "352f6818c90aee66e05784f801a6d4a9"
  },
  {
    "url": "assets/js/45.85109c4d.js",
    "revision": "6f3615e1ec658829c5658254d7f8cb7b"
  },
  {
    "url": "assets/js/46.24576ca3.js",
    "revision": "5569a3f741172f4ef0b9233700be1bd5"
  },
  {
    "url": "assets/js/47.3226eedf.js",
    "revision": "11df10f1946a71fca38f68634852e0ea"
  },
  {
    "url": "assets/js/48.f1ae40c8.js",
    "revision": "a83c06f8a986fb6b438055b8fe518b8d"
  },
  {
    "url": "assets/js/49.1d6cbda9.js",
    "revision": "8a2b34924f78a411a4e1a99bee90869a"
  },
  {
    "url": "assets/js/5.66fd9d37.js",
    "revision": "25b7acca5a3a031f4b127083fb63fbc2"
  },
  {
    "url": "assets/js/50.c6a78d0c.js",
    "revision": "da0e6d1bfcbf309d9854962b168fa382"
  },
  {
    "url": "assets/js/51.dccc502e.js",
    "revision": "9ed228dbab88b2eeb10d4f0eba358527"
  },
  {
    "url": "assets/js/52.0a1e0fe7.js",
    "revision": "7f37d23511d3d3babdc062781e969310"
  },
  {
    "url": "assets/js/53.37b145fb.js",
    "revision": "4ea9b4e544e99689cb9298f5833650f7"
  },
  {
    "url": "assets/js/54.94e0e9d3.js",
    "revision": "13087e10079ca5ac3b9640f60b330497"
  },
  {
    "url": "assets/js/55.bdc365d3.js",
    "revision": "13fbf5ffe13b8cc41fbb7a1c94e461ea"
  },
  {
    "url": "assets/js/56.ddd788e4.js",
    "revision": "6168caf397502a6200cb96cd057b4ed9"
  },
  {
    "url": "assets/js/57.08bbbe36.js",
    "revision": "23f61a8e4691a24c32339970f5a63a1c"
  },
  {
    "url": "assets/js/58.d22e663e.js",
    "revision": "aa7acebf4fa9775575c22a4caca76763"
  },
  {
    "url": "assets/js/59.ea1abc6c.js",
    "revision": "8ce3f80980603636fe4a6263f4122f99"
  },
  {
    "url": "assets/js/6.2747f039.js",
    "revision": "728e686995652dd62de3863f7c91c7ed"
  },
  {
    "url": "assets/js/60.b34e6339.js",
    "revision": "80c46268b8d15f0a4e7fcf8f9a8101ed"
  },
  {
    "url": "assets/js/61.c5b5f355.js",
    "revision": "4596a8f9b80b4632586863b889c2d0b1"
  },
  {
    "url": "assets/js/62.f47193e6.js",
    "revision": "939b1e3252304b1fd75b469993241fe1"
  },
  {
    "url": "assets/js/63.64f6dcac.js",
    "revision": "b66c4f4465e04decf1ec2d118e0a906b"
  },
  {
    "url": "assets/js/64.ccffe906.js",
    "revision": "643fdfe72479dd5732e8c9d4aa0c5849"
  },
  {
    "url": "assets/js/65.dc0e6f5f.js",
    "revision": "898e0ec78bb9e430200039e6dbc4238f"
  },
  {
    "url": "assets/js/66.61419441.js",
    "revision": "f00cd18688e694e916c76aa3716d945d"
  },
  {
    "url": "assets/js/67.6309a3ff.js",
    "revision": "34f11dc9865eec731d4da402695c0294"
  },
  {
    "url": "assets/js/68.dbd5a167.js",
    "revision": "2f82c54021c367c917974937ea908d36"
  },
  {
    "url": "assets/js/69.28cff7b2.js",
    "revision": "b6b5bbbfe7275966d18f4a93420b46d3"
  },
  {
    "url": "assets/js/7.a8bef65a.js",
    "revision": "b491197053fc08b9f28bb00576669997"
  },
  {
    "url": "assets/js/70.7cac1002.js",
    "revision": "600e9227ec872a996a853a4a0d6773c0"
  },
  {
    "url": "assets/js/71.fc0a25f0.js",
    "revision": "ddafcf74514d7f2bc7a5931d39236aed"
  },
  {
    "url": "assets/js/72.e3e56d8a.js",
    "revision": "43bee5350b2a9531bf6572d99e23a279"
  },
  {
    "url": "assets/js/73.6dac5b5f.js",
    "revision": "f236cba11a4991ec8451dc55aed4c408"
  },
  {
    "url": "assets/js/74.aad526e1.js",
    "revision": "a4fe7a7615650181de14c29cdbaf9f0a"
  },
  {
    "url": "assets/js/75.3270b7b7.js",
    "revision": "a2c7be278ac49c344df84abafce75889"
  },
  {
    "url": "assets/js/76.1e47cf9e.js",
    "revision": "224dcdb7fc9f1a6c26c1a1bff5f863f6"
  },
  {
    "url": "assets/js/77.b7a82fbb.js",
    "revision": "ccf0858d2bbae295fb3262d78ce7142a"
  },
  {
    "url": "assets/js/78.67a40c14.js",
    "revision": "b756a617162d171f622898e8b43c8398"
  },
  {
    "url": "assets/js/79.feba0fdc.js",
    "revision": "09ce11ed114492335e74cb15af4a815d"
  },
  {
    "url": "assets/js/8.434b2a7a.js",
    "revision": "9660ab3403e61840204ebe69ea59a276"
  },
  {
    "url": "assets/js/80.582ddf8f.js",
    "revision": "991df0fa3a500322120fca264a69c507"
  },
  {
    "url": "assets/js/81.63ba1b79.js",
    "revision": "6ffb990709f5c434610b1d2dec108a16"
  },
  {
    "url": "assets/js/82.c03f17f5.js",
    "revision": "c9d3b08594c2fb96d3f06abb6f0b536c"
  },
  {
    "url": "assets/js/83.895b86e8.js",
    "revision": "66dcc7c98515d94e1f60f0fb3d023d79"
  },
  {
    "url": "assets/js/84.4c3847a7.js",
    "revision": "71d196a6c793358fadf5e20293931a0d"
  },
  {
    "url": "assets/js/85.869a04e8.js",
    "revision": "c0e2abfba411e3c30c652a38d61c1ae8"
  },
  {
    "url": "assets/js/86.490ce686.js",
    "revision": "3f4c601b6fa128e8ff09c84aa28d4415"
  },
  {
    "url": "assets/js/87.1e0b50ea.js",
    "revision": "621dc8126375338f8b7e57417b85c66c"
  },
  {
    "url": "assets/js/88.728991dd.js",
    "revision": "2c86e57c2826c3d023ce7fbf7e43f75a"
  },
  {
    "url": "assets/js/89.cc169b69.js",
    "revision": "b9988f97e9b286e037a7888d37aa62d5"
  },
  {
    "url": "assets/js/9.df19c560.js",
    "revision": "ba8d1f14e2da71e11efd7479fb865a1c"
  },
  {
    "url": "assets/js/90.f6efdaaa.js",
    "revision": "9d1be4a70e6b593b544922893ca0857c"
  },
  {
    "url": "assets/js/91.a2895f7a.js",
    "revision": "075c23438a89a8e557f24aa813c66825"
  },
  {
    "url": "assets/js/92.20b1d082.js",
    "revision": "5c99d3208a5220600f125252e9a86eff"
  },
  {
    "url": "assets/js/93.81a25cc1.js",
    "revision": "7d07f030f7f16bd2a2b597972fa43c65"
  },
  {
    "url": "assets/js/94.cd96ac16.js",
    "revision": "241461a045001c0c88e06578a830b6bf"
  },
  {
    "url": "assets/js/95.d2f3016a.js",
    "revision": "03971e01d6bda5d66d2b0d0b16ad556c"
  },
  {
    "url": "assets/js/96.ab3ad32e.js",
    "revision": "35f687bb7412407951d54493fd9c182e"
  },
  {
    "url": "assets/js/97.52079f1d.js",
    "revision": "18cb8217fc52a6b382ed81f7301c6e72"
  },
  {
    "url": "assets/js/98.f5047f58.js",
    "revision": "959ab170f5935861fa5cfec22e615ad1"
  },
  {
    "url": "assets/js/99.1add29d1.js",
    "revision": "706f15d02c417df15b8aa2e05c162a27"
  },
  {
    "url": "assets/js/app.c72bfe08.js",
    "revision": "6e3910098e192770546a49e3bb0b1b47"
  },
  {
    "url": "index.html",
    "revision": "8edd1cebd5dc6d6f4bbdf5ab4385f42a"
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

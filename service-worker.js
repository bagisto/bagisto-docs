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
    "revision": "bd238bd9b2abb237639b42effaa848ea"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "1c02f78dda671cf1f3c4915f286e9dfc"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "d41d7fcd63d3be908307fbc580b26c03"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "06f68fcfdd125c183ad817114d9bfc47"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "d77f4de2e97f24fd1a09dc181d0f93f9"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "21453b5e760fe74d993a2eb21a46a5a8"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "ac7baf69f38bd3e099486ebffbf4eccd"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8cba6c40793b512b09d31930eb911310"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "c645ab34a619772e8265c266b80faaee"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "62f7d46217af8cba101b4deed8fdc3d5"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "08419f0e524e8c85548dbe814ce98489"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "517290230057095a4b1e78d2249fab9b"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "c960e2f0658d6c2979caa41b63083518"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "17bcb3cc5eacd59ce074317665937ca8"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "0a1be71ec0e63c2af1fabcab5ea5b3ce"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "968951eef36b12c15649131b69c2a560"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "da842aea6d82316ae4e8d96d9561eeca"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "40081e42c13047b62d2d3865c5508fb2"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "9d65f45b5ebc804bcca8c3379197a03e"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "495ecfa99fd2462a75c9412ae6b393e5"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "9d4880344a0576b7034aa1b39ddd010a"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "c10d8e69a007a2a339fac930fe733724"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "7fe676e8f6410ff377e99fd3dc8d2862"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "c0108542f01c40f90045bd17c9f7579a"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "8caeed1473a8f84dda2d67e2c1f0b2e5"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "451012d7dc9f3684479d022cd1cc8690"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "e231a84cc4687d8ceb09ac629d4b43be"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "89ac6a2ab33a3e968425f2b06013ebdb"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "6550376190b7cb8088e74037ee081e79"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "9168a4bcc757d6d1f6de27b262ee13f2"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "a6cda06fda7c1289dabef4fb6b0a82c7"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "0884ccf1942a105fb7f7d44a7579a22d"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "7e7a899ac86a9b7697e4ecb9c63178a3"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "0bdd05e2a14dbaeca185aa56dd68ed1b"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "738913ff058411ad81c7f560fe974622"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "9ddfd48ba0ae30c5be3c29de9cbd932a"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "3dee07f217b3e014c227fdd8da9e7aba"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "0d54a8358941c5ec6296fdabe9503c67"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "65ca685589bb4363b3e4f5331c0c07b2"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "0f9a2f01315596f1d99927f164eaedd3"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "80be1002ef95612dd2a71718a57da4e5"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "2816bb5d72bdcd595fb5e7923438ff38"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "fdf6482155a8dc34413034f72cf44d75"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "c6e40499f770c7d16d15223a52afe54e"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "d69bbf4a1defdcfdccc326bd029bffef"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "5bbdbee51aeb8d044d3af107b408682a"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "a9ad405645941d7900ab54e119fb2745"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "81a3958c9994330c4d81b9bfe4605087"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "21bd4f6c73154ef7bc40dd66c3f8efbc"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "de6cc9534b4e546e99bdd627397c6c73"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "2d8c31e6f8816dd2adb11a91df4f02d4"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "bc800565efdea0d9c8d0293a096ffd7e"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "41d69b55602cb71fef0152e115caeb31"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "6542da92e843c16f38f6f43c52201657"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "b3d823458189e9214d21925a3cbf990d"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "4ab64c8ba5adf36bdd15e8cde31119d0"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "686f29fbd2600ec9d1d887029bc2c325"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9cfd828677349c93cd579eafa74f39a3"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "2ac90f5f42e42ac15df356e69e29507d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "fc441a3d995aec6e8a92ba2a894c56b1"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d8cab5e84765e993f5d29ebc7f7a6772"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "73ff7a8b9709e00d1bfc5adc27a97bb4"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7893250675e3cd6c8d3b9dfc6e41304f"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "10573e34551236760bf0c3ee5fd3b314"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "a5489a94c342ffa0233652e41bad7aa6"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "3bf4eec68ec08a32744cc4870d2b56b1"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "bba98d2f9cfc3edfc7e0da23f279c190"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "6bf2d8ebc8e74b51477f6f160cd2bb18"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "a06501d48b276fd5a9232472a04d1c9d"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1e0090b5b88813ba6f5ef2b0baf47274"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "78ad65d86807ec0b435ddde5a505bb83"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "cab91cc84fb36e6ab70717910dd47414"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "ca6a54cc620f5dade0d5bdc9440a3317"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b17b436a7d7864253a3bed2a185bb4fb"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "9dbb4ef3dbcaa018316b3330a0cd5bcc"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "e81d1ec9ab88215814dd949cea992b31"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "5fb59fa1b5d3503583db8cd674c33436"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "2961296124478715480f8bfbec6dd831"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "c18a9d206be00a1bd0e2f968c7668dcf"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "59ee668b59433844ad63ae95bbe68d06"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "807d26f9c76c90b07baf83a539b534b2"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "81fa7fe15c58b5294ba3ed74c19f33c1"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "8746e4942bb6027ec55d17bf1f3a3d1f"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "55feec9b010cf579cacb39e3dc4e3615"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "e5145d4b65d375b584d5833b8cc34874"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "67f1a3940eaeb1078b5c1ecc949a872b"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "39c456882de0b147870242e52da9d020"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "77fc7c0cab29d5d0b74e3f0a052e7ed4"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "a738b4146bf73a04ef8fca72df34e9ac"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "0fd3a3cecc31d74cd5cf319a3cfa3240"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8f7210c31371d59195e9117e788598ab"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "8dafb18ac54286d0b9c8bde29eb7fd10"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "4d0ffdd2cd2b21556fbaa7c5b7f474f9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "9ae1b5d0835399e4804380b7b77865b9"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "423041fe48380bcb3eea85475c292f90"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "54cb9a17d8146dc5c1b57b03b45a256b"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "5ad7da94e7dccfcc63643bc4832fc5fb"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "1ba3cc2ad6699c246bc4f8973ef669c1"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "0083f517942b15d8c21a8592d2abb720"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "aeb63c9a3226f2c6dee4086695e05b3f"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "925c6c59adadff63c969c0f6caa14ef2"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "4880360e1098620ea3174823f9bc18a4"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b1421a437275ed21e6b624600f8de2d6"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "677f4caee22c77f56d0337785da5e841"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "b55808735915f7cc325b29d3ac98ffa5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "8b8ba7a9b716314bf2a38d36665d2925"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "1de54ad58aab1ef484bb501941bdcfbe"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "20c233cb8433d30c0ffaaae9c7b57435"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "506ba69600938fbc9e6b96fbe8300e7f"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "d69b8d3c58dd22bb714b747aa8eab3bf"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "bde634aa9835b96790594bd7602773fe"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "6a03bb532783c4c7cc5d013e9ab6b58e"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "bff65e6c6265147be0df07303dd7a9d3"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "8da763f7e6986e56161e35e7c0764c3f"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "5e7a5892388a79df9321845b5583a720"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "d71ab4bf0de6c1858e5b3e1f558ac357"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "61a02aa9365c04546bf4fa34b999ef47"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "9038c68a71911033cef6b9841d05b034"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "236e9cf5a8c0303d04c3014638fcf02d"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "6014d41e2d8b96314f5aafb0b6f3778e"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "2beb79be5c5a21df63e93d7074c1f0bd"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "19adbe27381fe150a809988ac34ead81"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "9771e47f1fb1a13332f56c3cb5499df0"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "b6fd4dd89da95bc6bad1fff121d2200f"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "a779a3c7d3ec01b79f8be5338d2590a1"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "a9381cdf9b72f7676c0b2b6bc0f89505"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "573e733ab89ccafbd1b9ab9e4c829d31"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "8c0e465067b9af58c7575b3363208a28"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "beaaeebf715fc07eb3068b0446e078f9"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "a82bae45199e350264cd5e7d1a1cd78e"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "4a15885262f32592351c41e5250aba7c"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "efd8116001bb9d1ae1607acfc4902af9"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "bd926d378cb799ec36d2c4a338cd5b51"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "feb0919c524e88020c3b3fef623d0070"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "ebbf16d46a393989f20bdd77e8bd38a3"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "035c62bfe4bf8e285b8232aa881af7f9"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "628b0322b75844ec24bb47d6d4ec5f90"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "9d451204f9e3a88862422991eed5a6bf"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "98cac9d5f40f128f2bc749cf11dd3e5c"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "a5bdd3722a8ee43fdbf0a026b8102357"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "21898daffbcbb98f7494896741911d5a"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "cbffda32647a2dde125fae9c3cfa8a56"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "f6346556b47caaca7f3f4434067ce27a"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "7b0157a76f43d85f42a6b4b919b2b5c9"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "3729420244bd5eaa33ddaf069a7ccf2b"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "35a3fde9bd77e6d6ec1dd0f2f8f9596f"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "84b6780a0485404621282a0ad96781f6"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "384f8892fe78a17644647c9fabe7ad18"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "43701d7f9b09c75ce01059ebeae6f755"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "93d09f143b26a20013e7dc7d8905374f"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "146b66ff74a5351e2a0f12fb6f40393e"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "cfb7a1358c75426c419f65d7fdae1018"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "0ba585d64835daa8a2388ad99211deb5"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "be1d027ac570d30b89ac21f33f17c22b"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "4909b8f42269c6dc4c5231760c38847b"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "7d2b4f64fc21da2b5e399666265e581b"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "f518f6341e5b89fc3d9c76b6e50ae9f9"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "82608fb1b36e3982e90c6637a02480b7"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "03c9c6d4966b9f523d8a4b5692c7ef4a"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "602f971125be9f689f6412a1bea1e80b"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "57f8e6ca8e90fe4a400b20e6c9deb394"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "eae287e6474a616c863ad5c06de5f480"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "facb9b2fa15c59ab6ab00bffe2437669"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "7ce4f0f9096fdd094df3b76450aabb1c"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "d593db786adaafa7c774e561ebae7599"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "723395f499389c952eaec4351a57062f"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "fbee7f29a781125fe4ac2bdbb709aa7d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "b37b2de95bd8aa9f878eb0dea9ae0d7e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "c252666a9115f5567dca5214e268dd4c"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "c624f4b6cdbf7fb23a943f82366f015b"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "be96f37a709f4618edb4216f58d00757"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "6e9b3590ccffb38213244bd175b8bb6c"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "3653fe7d68d334ee931d732cecf0f6a5"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "d7c5bbf1319ff7c1cc41cf44ab08a8b5"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "d6fd9feffe0187f8111d76d1662912b9"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "43ac0295a988896ea34f1a3b5c756537"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "1893adff52afd4d5f031c534f397c671"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "b8c8e8e5c9a9eeb5990de7510554c9dc"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "077852db016a799ca15db5751ea220aa"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "cf8c7e97d7cc3130d048eb26bdfcff2b"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "5e81ef047e1475afc2c91e28b4e72d3a"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "c8eefa3c0ab3bf69757f4054c3a7e46b"
  },
  {
    "url": "404.html",
    "revision": "286aac943829a95273f6b647c6a73e3b"
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
    "url": "assets/js/10.47abe10b.js",
    "revision": "884531af452a9656cd6f437b85c02adf"
  },
  {
    "url": "assets/js/100.a92838c0.js",
    "revision": "9e92aa8061b54d5885e9b40ac384578d"
  },
  {
    "url": "assets/js/101.a791a516.js",
    "revision": "e303103fb73058688ed9b875c4e9ad13"
  },
  {
    "url": "assets/js/102.927c7efa.js",
    "revision": "5edafaff32d076eb63ee99d076848b78"
  },
  {
    "url": "assets/js/103.28e648b8.js",
    "revision": "c2ec4c4641906a378bb0091634fedb01"
  },
  {
    "url": "assets/js/104.a216dc4e.js",
    "revision": "14607024f240d9b0f220395f142636e7"
  },
  {
    "url": "assets/js/105.c2d48f06.js",
    "revision": "a31ad79f2eafcde5c2dbfc548254d91b"
  },
  {
    "url": "assets/js/106.204b6521.js",
    "revision": "c67ae2d7d8916dc38a22c639c9802eb7"
  },
  {
    "url": "assets/js/107.1c6a9332.js",
    "revision": "0b92ea322f6f7a8a64d216ddcb74d0c1"
  },
  {
    "url": "assets/js/108.3df828cc.js",
    "revision": "ab4ff446ecc30a0df891b2a5f9627335"
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
    "url": "assets/js/110.bba8adbf.js",
    "revision": "45635ef761da4b0f0866355899599ee0"
  },
  {
    "url": "assets/js/111.7f4a4976.js",
    "revision": "b35bf7aeb6c49b5116c26d07a6aaf308"
  },
  {
    "url": "assets/js/112.6c99145e.js",
    "revision": "bc5818686eb632ed709c880d8b990da7"
  },
  {
    "url": "assets/js/113.5cd70541.js",
    "revision": "31bb7ac36906757a22f1a2c9a23f6a5c"
  },
  {
    "url": "assets/js/114.a0b63035.js",
    "revision": "6116e4e1f9af16b0cfc4b84a12043903"
  },
  {
    "url": "assets/js/115.e5ecc078.js",
    "revision": "0075104e6a574a599d51fec766043616"
  },
  {
    "url": "assets/js/116.883ffde7.js",
    "revision": "d840bc408f436c1a5a27453dd47cf28d"
  },
  {
    "url": "assets/js/117.76704abd.js",
    "revision": "9aec4b56d5b6def697c3fee58b09a27c"
  },
  {
    "url": "assets/js/118.c5341320.js",
    "revision": "380c449c8b2db09b6a4853d45975b624"
  },
  {
    "url": "assets/js/119.a2182bbe.js",
    "revision": "db1a088c7344aa2ef09a0f048542a55e"
  },
  {
    "url": "assets/js/12.78473208.js",
    "revision": "58bbc7a32092ed32d122f83faf4422b4"
  },
  {
    "url": "assets/js/120.e0625086.js",
    "revision": "e0a03ba7c33f853106f00d9f98865374"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.e6c44f27.js",
    "revision": "5aebe31ba833792887169c1fc41db779"
  },
  {
    "url": "assets/js/123.8ec469de.js",
    "revision": "b2e8d8e46e881a711b83e395c6ab8f65"
  },
  {
    "url": "assets/js/124.bfb0e4d9.js",
    "revision": "7799d7f25ec1465b9987bd5214e2b2c0"
  },
  {
    "url": "assets/js/125.8a2bdc96.js",
    "revision": "dc6f7796cc5c274de0a05229f1ad01c0"
  },
  {
    "url": "assets/js/126.1cb5602b.js",
    "revision": "13ce3f5ee2761432141f51598bb80b22"
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
    "url": "assets/js/130.3dfa57da.js",
    "revision": "7015443ca8a7d0491174842577b4086c"
  },
  {
    "url": "assets/js/131.c08cb3fc.js",
    "revision": "01769955bc39e5660a60019583ada628"
  },
  {
    "url": "assets/js/132.0f9169ce.js",
    "revision": "d17e9a8b8286bd1591f95198b37f328c"
  },
  {
    "url": "assets/js/133.99da6a15.js",
    "revision": "44d23c34de381b3f25f3722251c22aff"
  },
  {
    "url": "assets/js/134.e9d55699.js",
    "revision": "7cfc96911dd89ba3ee194a688c8c5a27"
  },
  {
    "url": "assets/js/135.9c13c886.js",
    "revision": "df4540d648f2c0be90b6ce5042d09e6b"
  },
  {
    "url": "assets/js/136.477ffdc8.js",
    "revision": "9ab3dfbde407fa3fcc919442c2363d74"
  },
  {
    "url": "assets/js/137.76f957e1.js",
    "revision": "4d6b151b0ebc3888860a6687fe39788d"
  },
  {
    "url": "assets/js/138.b5ea8543.js",
    "revision": "1e44b10fed52d81212973ad608ebb93a"
  },
  {
    "url": "assets/js/139.93fc5682.js",
    "revision": "04e58e82a87f10c2cdeea26d08399810"
  },
  {
    "url": "assets/js/14.49a3e4b6.js",
    "revision": "9a5391d6998afb88e9dfb60bc0c19120"
  },
  {
    "url": "assets/js/140.41761276.js",
    "revision": "9ecb4512fdcd71fe0f262fe03ffefb2b"
  },
  {
    "url": "assets/js/141.24e22b80.js",
    "revision": "12ea66b6d25dd07bb282dd63ce5e86c6"
  },
  {
    "url": "assets/js/142.ac71760d.js",
    "revision": "ae42901c00b6f3d33c01b87934edfc5a"
  },
  {
    "url": "assets/js/143.0813860a.js",
    "revision": "c9c63a022dad9ff638c1402f3a236595"
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
    "url": "assets/js/146.262fb1bb.js",
    "revision": "2e1b56c76a9b849b80055540a90e3aa6"
  },
  {
    "url": "assets/js/147.9b906f2d.js",
    "revision": "90d7dd96b44b7042494e4bb97469bb26"
  },
  {
    "url": "assets/js/148.4726551a.js",
    "revision": "e6447e1a27751d0f96e9d8fba1479567"
  },
  {
    "url": "assets/js/149.f8132532.js",
    "revision": "426bc22ed31b1f1dca1bd7584427cf90"
  },
  {
    "url": "assets/js/15.c2b3f84f.js",
    "revision": "34c0cbd321457d9083d3bddff388c273"
  },
  {
    "url": "assets/js/150.691fa739.js",
    "revision": "b92c8d68c3588dd2c8d409810127d445"
  },
  {
    "url": "assets/js/151.06a78359.js",
    "revision": "59584a15ca4fb819cc7347363dca5daf"
  },
  {
    "url": "assets/js/152.cb9a4621.js",
    "revision": "a3310e5aac422730f5a27d2555f5d0b6"
  },
  {
    "url": "assets/js/153.8bc83551.js",
    "revision": "52a87534e907ef44cf63af74200c9320"
  },
  {
    "url": "assets/js/154.d5afc9ea.js",
    "revision": "aa158b39d4b12b94613adbb6b9d74284"
  },
  {
    "url": "assets/js/155.360582eb.js",
    "revision": "820a992f49c37ab0c0232c20f61fac4e"
  },
  {
    "url": "assets/js/156.01bc80b1.js",
    "revision": "704e829b31527aeaaf352e4a4d90c28c"
  },
  {
    "url": "assets/js/157.1ef27c2f.js",
    "revision": "c4785293b1efecbbc6b568d7f2235fde"
  },
  {
    "url": "assets/js/158.769a4208.js",
    "revision": "df6635448fd5192756bc341c7d639cde"
  },
  {
    "url": "assets/js/159.8c7832bd.js",
    "revision": "f13d0d599275300f1c921a5cf9abe3b3"
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
    "url": "assets/js/161.7220705a.js",
    "revision": "fea04026635425a11237946e3338205e"
  },
  {
    "url": "assets/js/162.a0a9f5c7.js",
    "revision": "65a80fd48fbe0819881dee7c3c702ed4"
  },
  {
    "url": "assets/js/163.e58ddc07.js",
    "revision": "b1abaa0cb1d5f3439f1f84181fe5b797"
  },
  {
    "url": "assets/js/164.bc0f16ac.js",
    "revision": "93ad5ceafe75947babadfed75884a591"
  },
  {
    "url": "assets/js/165.0ed619d1.js",
    "revision": "98b266cf53356f1905718598826bd0ee"
  },
  {
    "url": "assets/js/166.371c9bb7.js",
    "revision": "7ab7202a7a1e89d64fc8d107528fdfbc"
  },
  {
    "url": "assets/js/167.edf5d29c.js",
    "revision": "90ce547a1cd6a5815c88da95319784e4"
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
    "url": "assets/js/17.5774822e.js",
    "revision": "60a6b49e978d46b8a3373a74ae4448db"
  },
  {
    "url": "assets/js/170.2916032a.js",
    "revision": "6bdfe5c956a7f27b139d616cfe8bd747"
  },
  {
    "url": "assets/js/171.cbe8a674.js",
    "revision": "18df66757b9fb09e24d445d72a4564cc"
  },
  {
    "url": "assets/js/172.f0c5b274.js",
    "revision": "64a7421910759bfc855e01d2d017568e"
  },
  {
    "url": "assets/js/173.b637ccc9.js",
    "revision": "be43890372ec4a41602a40980afc1a6b"
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
    "url": "assets/js/176.7070f8cc.js",
    "revision": "76aacfe49448a6a02a2cc12699319dbf"
  },
  {
    "url": "assets/js/177.91e1c738.js",
    "revision": "ca62a57ca05127c03c8c28dca3ab864f"
  },
  {
    "url": "assets/js/178.724ffd2b.js",
    "revision": "b2c11518e19c20fbd2e7d6668ca30ee6"
  },
  {
    "url": "assets/js/179.5753a577.js",
    "revision": "4fcfc2eb65da936e8215fd335aa9f064"
  },
  {
    "url": "assets/js/18.ff51f212.js",
    "revision": "092264dcd664539e2a66e92705aef76b"
  },
  {
    "url": "assets/js/180.1bc92b56.js",
    "revision": "e515e4101efeb82034df5a8bfd2a7553"
  },
  {
    "url": "assets/js/181.524f3dbc.js",
    "revision": "4375c2043faba9a010ace9811f08cc43"
  },
  {
    "url": "assets/js/182.6487d5d3.js",
    "revision": "9f8a951ea898167a7d99b0791441de14"
  },
  {
    "url": "assets/js/183.bc51e3b1.js",
    "revision": "9cfa189ca6d078ce3820835f28c5558c"
  },
  {
    "url": "assets/js/184.c47bb00a.js",
    "revision": "aad7353a001d54defb88d006a8a88a6f"
  },
  {
    "url": "assets/js/185.4b3b7f83.js",
    "revision": "4ab878ab87018ccbfce58c7747885630"
  },
  {
    "url": "assets/js/186.ffaa50fb.js",
    "revision": "ee926182d1261af3aeb4e0a608fc3b72"
  },
  {
    "url": "assets/js/187.4817db8a.js",
    "revision": "6ef5cc23f67a7281f431e6fd967a4bd0"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.9989e114.js",
    "revision": "9cace5de2eb1c4f5632446145b6c7a6f"
  },
  {
    "url": "assets/js/2.6b6ad87c.js",
    "revision": "b688a1d0fb147cd70752b0b4b3fd066b"
  },
  {
    "url": "assets/js/20.93a2577b.js",
    "revision": "8a0f1b5317991cefff82bb00fa73af9e"
  },
  {
    "url": "assets/js/21.9d5a46c5.js",
    "revision": "a1e09d50fa64304da7202a613f6bcd8b"
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
    "url": "assets/js/24.f647471f.js",
    "revision": "a520aecb4b40406dbf187251df771772"
  },
  {
    "url": "assets/js/25.4293cda6.js",
    "revision": "8e765c6ab2bf223f31f26e66698147f0"
  },
  {
    "url": "assets/js/26.97e87380.js",
    "revision": "9f2eef5db79f6bba6f864ecd5f3fbec4"
  },
  {
    "url": "assets/js/27.bbc8f00c.js",
    "revision": "a3156fc01e978f5186a28db8aeedf39e"
  },
  {
    "url": "assets/js/28.7e87af8c.js",
    "revision": "36383fe2cb8405b8cbf9085364c4326b"
  },
  {
    "url": "assets/js/29.904aef2e.js",
    "revision": "348c159b1c147ddb9308812d716bdce3"
  },
  {
    "url": "assets/js/3.00b32b76.js",
    "revision": "1a35951fd65de2998c14ec8412d1429b"
  },
  {
    "url": "assets/js/30.b29471f3.js",
    "revision": "eecd368c220c8eb124051f54da11d70c"
  },
  {
    "url": "assets/js/31.2886209d.js",
    "revision": "dc35725788bdd5364eafe81269086a7d"
  },
  {
    "url": "assets/js/32.04a76eea.js",
    "revision": "189e8bbdb4d9d0af98838fd361f9fd7f"
  },
  {
    "url": "assets/js/33.4368b47d.js",
    "revision": "244621a7d435140e4fefcc6fa0897683"
  },
  {
    "url": "assets/js/34.6f3acf8c.js",
    "revision": "7c3d645acf2cafbcae87183f77a4c05c"
  },
  {
    "url": "assets/js/35.3744b6d7.js",
    "revision": "08690d9fb7196848ae8c8ffd466ace70"
  },
  {
    "url": "assets/js/36.da857de3.js",
    "revision": "60fc33fabcecf2c0760cda845e8d348e"
  },
  {
    "url": "assets/js/37.48ee16c3.js",
    "revision": "b7d3e48abda68e7ba74781956ee1497b"
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
    "url": "assets/js/4.25b70f0b.js",
    "revision": "2a3432dca59547b087f403e6e291cd43"
  },
  {
    "url": "assets/js/40.86ce1428.js",
    "revision": "b15ec4d54be6974ce25097f325120bae"
  },
  {
    "url": "assets/js/41.2a2bcf63.js",
    "revision": "762d5bf833d003b375c6fd99fda27054"
  },
  {
    "url": "assets/js/42.6c0d6a92.js",
    "revision": "dd2e0c459f27ddbb50d76b59611b9033"
  },
  {
    "url": "assets/js/43.50a6353a.js",
    "revision": "8da4fdc8340cde9282cea4793a875473"
  },
  {
    "url": "assets/js/44.56cc7446.js",
    "revision": "352f6818c90aee66e05784f801a6d4a9"
  },
  {
    "url": "assets/js/45.fe4f4dbb.js",
    "revision": "8ce90ec8af03efb19617c6c449eee153"
  },
  {
    "url": "assets/js/46.3ab955f1.js",
    "revision": "a9726c9bf3ac127c9e8767958ea4afb7"
  },
  {
    "url": "assets/js/47.7bc9282c.js",
    "revision": "c8ff1df97dcf115fbaa14507b7cca6b1"
  },
  {
    "url": "assets/js/48.f1ae40c8.js",
    "revision": "a83c06f8a986fb6b438055b8fe518b8d"
  },
  {
    "url": "assets/js/49.91235418.js",
    "revision": "122394d17413c37f9fefb5d207b7c6b3"
  },
  {
    "url": "assets/js/5.66fd9d37.js",
    "revision": "25b7acca5a3a031f4b127083fb63fbc2"
  },
  {
    "url": "assets/js/50.83aab505.js",
    "revision": "086b36e5eba7a6ce67278fc5c1549167"
  },
  {
    "url": "assets/js/51.eef46805.js",
    "revision": "7c2c51fd67fdbe1da705cdc70a2a7982"
  },
  {
    "url": "assets/js/52.76c298f7.js",
    "revision": "b3d880c1a6ea1356ee75d1c5090d247f"
  },
  {
    "url": "assets/js/53.c9ab87b7.js",
    "revision": "26706b40137b94e8feb80d6558d23176"
  },
  {
    "url": "assets/js/54.67882011.js",
    "revision": "ca9772163972904094d58645520e6579"
  },
  {
    "url": "assets/js/55.e9e4661f.js",
    "revision": "c53468c5ecae6e9f1dbc1f16b6afec7d"
  },
  {
    "url": "assets/js/56.fcbf14b6.js",
    "revision": "a67531e626fd6e050058e15185c03e0b"
  },
  {
    "url": "assets/js/57.5e82402d.js",
    "revision": "c56316c3bb06b172d23c2edc4c9746c7"
  },
  {
    "url": "assets/js/58.2f7bc410.js",
    "revision": "40a89a82b8ae52de59ba731c55a8f2b9"
  },
  {
    "url": "assets/js/59.710fe114.js",
    "revision": "116d1123506abb3b1fe18c4cfaa82dd5"
  },
  {
    "url": "assets/js/6.3ec98cad.js",
    "revision": "f5da373cbd6861c0ef990056e011233c"
  },
  {
    "url": "assets/js/60.02e51a3b.js",
    "revision": "cbbbfc964c6e652fd3d3efb9e0857aae"
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
    "url": "assets/js/63.af570ecf.js",
    "revision": "1ee0710d0f794cc8bbd67f466723a1fa"
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
    "url": "assets/js/67.ab5b2cf0.js",
    "revision": "d9f747114fa5ac4f4f05ec5b7d00e3a7"
  },
  {
    "url": "assets/js/68.eaa321b6.js",
    "revision": "e4f20f420392c200f724256fd2ac2a06"
  },
  {
    "url": "assets/js/69.bace815e.js",
    "revision": "a2bdd16c1b3b4d32d13804a5d5afa487"
  },
  {
    "url": "assets/js/7.6c73c10f.js",
    "revision": "3e7f4e41dfa6555a424f0324f05eb701"
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
    "url": "assets/js/74.62879d15.js",
    "revision": "343f5349fc4f903be2bcd43632ba9afb"
  },
  {
    "url": "assets/js/75.378edbce.js",
    "revision": "2f1197c1391b4894d5fa7a4e80172132"
  },
  {
    "url": "assets/js/76.1e47cf9e.js",
    "revision": "224dcdb7fc9f1a6c26c1a1bff5f863f6"
  },
  {
    "url": "assets/js/77.e853b924.js",
    "revision": "c92d15667c43476e37712acf6ae32629"
  },
  {
    "url": "assets/js/78.eee90cd0.js",
    "revision": "f60ad1175d04b999f8a55f9c7a5c9e2a"
  },
  {
    "url": "assets/js/79.d233442d.js",
    "revision": "a6a4ce9e7f1be30628de91c5c61da734"
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
    "url": "assets/js/81.e37f93b3.js",
    "revision": "ae65d83d5d4bad34dc4fa61970d7cc70"
  },
  {
    "url": "assets/js/82.8dcf6ba8.js",
    "revision": "a2e49544ed4466c3a6ce0e76b08d29c9"
  },
  {
    "url": "assets/js/83.895b86e8.js",
    "revision": "66dcc7c98515d94e1f60f0fb3d023d79"
  },
  {
    "url": "assets/js/84.dc4bff5b.js",
    "revision": "3c65bb856b520df45ce91acca044f949"
  },
  {
    "url": "assets/js/85.e446c956.js",
    "revision": "e08fd1f521fd2d510263d2662235213d"
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
    "url": "assets/js/91.fd42b5e5.js",
    "revision": "54897f58070e87962734fd78757cfdc2"
  },
  {
    "url": "assets/js/92.2312da92.js",
    "revision": "f637bfbfe1204de33c6fa7aa6a6b7baf"
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
    "url": "assets/js/99.c4f086d5.js",
    "revision": "ffa54d9e11827f7f43584bf4b0c0b7bd"
  },
  {
    "url": "assets/js/app.77890af5.js",
    "revision": "69d89837981cdd1fa807f79245c3bc50"
  },
  {
    "url": "index.html",
    "revision": "ea79360c7ca57e3f425a119baaf3de2c"
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

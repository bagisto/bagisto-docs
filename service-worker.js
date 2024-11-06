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
    "revision": "8b01b4ca35320a12f44c26031f55de64"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "7723765921f7d26d44ccc05e77c8abcf"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "e57d67a564520f4fcd6e7def7bbe4970"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "5c89fe3c6ccdbf41e2ebf4582bb1b190"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f280b7996e1cd3b870fc0c18a55f2ddc"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "9bb653e3dd906492290f36018ff339ae"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "7a1477ce8257c398474e4ea71dc34a9e"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c0a728e92560542ce87ab3c1bb21dac5"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "f81024d59f5dd9f91d1767f81d2fe6a4"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "d575e99fb52bed4963afba6fcab2e76f"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "7b943e41df1533f73529d6cdaa33521c"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "d26b30ea2a571bd8007c8e92b6757e09"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "65cb0c437311865ee16f1503082188b8"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "d6c914084245a9f5f38bbd964777ce42"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "d7cfd45cc2ec20a696121110253dc77f"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "9b2f323a681ebedfa17d0ed35cf735b1"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "57921892ef23feca1042e36aff990c48"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "59a372b899380fdbac9bfce50b5fb089"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "2955837c0ce867a594a06bbec3c16cc4"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "749ba1f0f6a7a3b6e2c5d764c7c49a08"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "d5b5105fe0a2581e7658d1be3be3e3d0"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "52eae9ddf5f86913c4d7100ad44fdece"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "9e9b7eeaead5ae24637fb1db7a5e35cd"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5e5bdede90dc1427aee6cf3a7884fe36"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "cdb44770cfe756e76578239d0e11b340"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "c105e80465b905ad14979bc4ee7817dd"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "1013f0523958057b3fd29347010ed5ba"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "1340b733ae3bbc72bbd2a1f894605c15"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "804e7255a9dc623338ef0b6e8fa84dc8"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "48513f472cd675a58b8b02febba4581f"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "2e81dc6c47f9fccae40926a64156499e"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "2792a77208444a492304a61cb728cc15"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "41d6b71128d6231100d45f43d1a82979"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "6ffedb51e2af6f71febc47ddd8ac251a"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "40adc779f37bc278c77537ef3b2d35ec"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "f9850114b2ebccc356deece01134e905"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "1bd2166b5e52144c6eda8d53ff49dd2a"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "576c09f6e010ab672c3c4d9cec32b914"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "0a7e04a94498b3430743a1e95a41d122"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "1a86188b1e8ddcd467d3033dabbd3a48"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "2aed39abfb87fc9f05550e7b1a478a73"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "303bc8506eddcb816622f16b5409c691"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "8562ede980686b21351b76da698f8f00"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "eed2b7f12616b2a5663734fab84a43d5"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "68e5a41a3d4fc234f5f22ec924c65854"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "1ceb7fe91c798a094e2942ab6ae8fc28"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "01eaed0eaf8fdc7ccd0df14e83eaf60a"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "82422000268a1f45a7e44843999a3538"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "b9cd6a3c1094e6971123ed6639df58f5"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "353cbc7e4d9e2cab5d1b9ca5aa7f7b9a"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "8482b71a94dcaabe5d1ebc30ecf513be"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "d6d3f9a0fa0707ce674bb2ed6ac1728b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "9edb593166073ccf12b6d3fcff4a449f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "585222fdccfa13a20e43095b28eb180a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "3c9956c4900a2c39e60529138235eb92"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "1509b1a496316369b4a36edeeff395cb"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c14ccd963cf34cfb502abc7cd45ef223"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1b01a3c9d194f67d16369aaf99ec19a6"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d5e9afb5261a0cbe6099da6fd8337e63"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "465995df56863c23687fcc205271609b"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "dddbcb7a9b94b41bee0378da4f597ed0"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d1079ec93ff046ddfe252d00001004c5"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "92f1baa3b11f1a79606cb2dca8a474e8"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "6316148f59e6cea828d4ee25370b51fa"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "13f1d0ebed4d15c4f27ae4808b75e09c"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "5ed72e1ea47e2eba1da9e2bdcf574318"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "c1c0182cac4d5f4a39da058083fa647c"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "49e3b9e294e6e1e720afe71f857d173a"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "003c4b65760cf1425b9ba25fad409121"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1ccb67711acea8b815f0c1ecdcb8063b"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "33852f0449026554b37acd25ba1cfde8"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "b5654583b7403287585d05dc2d375a42"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "ec9832543f3733196d8f8d43ed5624e7"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "1c8707a1412f047543882776345a546a"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "19cdda0a69558f75a1f874698fe8dafd"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "b9d6adab528f52e0489ee285dce12408"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "e52c20067af90dfa2d3b986285af962c"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "ee5cc9eb68e255e474bb21c02e4713f9"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "d21f41650874cbcb63b4b752cab169f9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "c801fc935c5067493a3e04dce8de0216"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "e51cf102ca3217dac021ad6649c5e4f1"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "592bf6bab497b74af6c5701b53a0016d"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "fa814ce2f7e4f3c1488264c2dcc2e88b"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "2f7973da6e013f69b10f1d67b918edde"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "df5bfe19ee78778d1ffa359f9ec23eb9"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "79bb685707211008797784b2840342b9"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "3719d78fb041682e3d4620184cea94cc"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "58f9152893cc92c6677916442c67d758"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "11d7b108297e9e56315136c7a4be507b"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "5e8b284e2ee359072598e2ac3348f0da"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "d8c44942b9afceb45994d3cf57e5ae23"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "060e2aaa87f185b2335a0c5435e43589"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "043b13be675626f333dae61ddc224191"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "3877b937c235c2306bd2b1055e1c6cdc"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "3801a08af8fe1f26bca5d55f01d5f6da"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "59d9e8a5b462e2fb96076e83a83f90d2"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "b582011462c39e229bd611c1747cd8d9"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "ead02ed8aa5ac60e1da538b9e4d9012e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "2339a9bafa98930ee922bfb5d8efb447"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "2b8e9a39af01e127e7986a4347611eb8"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "cd5ca3dc90204dfc5cf49bc8c428ff9e"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "d3224399a84584f15dc124c5b4c8cb80"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b296e8dbf5257eb649de77590745e833"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "747ad495f25716e2ddb1ac3c80d77262"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "5de949e22c998127a297d1316b4c78c5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "b9e0e672b75281ea7569fe8c64b40625"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "3bc7f917b01b02b50662a0433f6c9e0a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "9695d1ae7e10e066935b333b747bc5b2"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "41ea97102e11ab3b93ec275d8c6970e2"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "fb3fe8713956114365f4a29d9e874cee"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "d23397e1d00977f9d6654ea1bd0bcefb"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "f0cdfef4206492f6737c91c5703f6f43"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "f47f163ee5e4ecb7da4395e9b04ca1fb"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "c9ff278cf30555fd874eaaf86e4a2275"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "fda6c24ac020b587c6c4071744097063"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "4097daee9018d382e11196dcc5300304"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "a6c6d956e6d22895ef540e34fd83862c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "d4421d598bcf5587401d2dff2722f4ed"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "6043287ded1191d255b6b9edd93c3830"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "2c9488b935474985cfddd4b22c194cda"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "b8c490f47a2b8807ffecce84ec24bb1f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "4972209920fb1b59cf5913f980fceb6d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "75e85f8c0837f760d4ffcc5aecb89e84"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "590c0ad596657164140832ccfc1a0002"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "899084dd7724ae36dc02822c54806586"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "0b71ccb79555dc8247aecf8d9516f576"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "cff663b4b5580b31675b1e73761302eb"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "e27cb1f0d26583c96151cceaa5bd6aa0"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "71e36886ea7cd4a7d84a18f2d5f4867e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "0eb0b58e6e8c0b3024f06b4e8f931251"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "0045f20b6818d98e9bf7449b62276355"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "687060b83c110619d4e75bde24d3c139"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "3c85fe6f14f15aedd751ffedd09eeb67"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "a8256d55a662b419988b712556304b4d"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "9f4b5e3872583650e223ee5a712033e4"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "63e046cb13afd1d0e340a8742cd07a0b"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "3c4f74e19a357e7e1283346d4fc7c514"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "0fc9f91fc6f39f01271cb6b48dd28d5e"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "18190c48d1f341c7859e77434ee446fc"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "a8bd4647b8dca04ee0925eedc5848d88"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "19adfe694609ec5889320647d444adeb"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1b76dd8e9753ab94ff2b75b3ec44f844"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "bacc093c7848b102357636aef6c24e9d"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "3cf4417a928ed52f307cb1afd49d87cf"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "671f478ba06247f3b2abfc19231e7094"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "4262eeea1fd12329e69a5a68804bbcdc"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "4021816ae49e798ccd3bd5343dd1a472"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "a0d1990c197d3e9247df3cf80e697b8a"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "a9215f9b7c3f7df00afa5a19ecad13a9"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "ba5f3685580aae04512c1afab30b5d39"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "58d64087e4e50c24cb87ba2add3de364"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "071ee094385f3f8399205713afd47f7a"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "6426b736c78090b3ff41c5815cec3fd5"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "462c017f68a7f61f289dae88f38ae34d"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "37ebd4e1a03be2ad8948ea58f1c16862"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "0a4b3181a7c2ebb821d2a481ee3cf02e"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "350b5f978f2578f3b6675b52a324d11d"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "d145671e72d6bde2686b71aa2f9f8e71"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "6fd378a1932aaa58bc8cc86be68e8c6d"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "7fac6e38534ea34690dae600a92a0105"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "2392256503b525d28faa8301858cba16"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "784d5ea83fd4d4fc8d0be5a8261a8eba"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "bf5c3a4912f83c6bd31aacd54ba311d0"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "c3aebe2caca44f06844bcbfc62371848"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "7fda6161d10ef2e05b4b06a7dd976234"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "75e30df2aca37c6c0eb5b72a224ca413"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "26709b891ac2a4bef1cd2b84fd2b87f8"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "abbf8435812d52593c5ea6e402068a11"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "2eefd98c2301fdf355f5b7a4f710c556"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "8a27af0e43ccfab4e83ca692c341eb46"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "3a7c34fb6b10848689557cf860d8c69b"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "69bc63cd7b9730a6cf4e3604ec80c7fa"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "8f31aa3619ea020115b8407a59c31d1b"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "f4e2bb607ef17ea783d5ae1cc864b430"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "6c78ca84c9fadd8e8a8f31553fc7d943"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "04a2c00492243930c7c9d79f76246267"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "6e7dd089aa56af83a054c765b5f113cd"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "39e6647442f978c6f428987dfa7f6c08"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "e92592ce8607df7474dbdf0bba7e94e2"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "89420b7a6af7c0b62769e4701ee94a37"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "48175e5a1f10b4db914c0b3c74575807"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "851b3c8c2c8160c905fd18e4609f7d92"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "74de380e93071cd477ce7e7a3960a4c4"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "037c2f714b6acbd9698a0eb3567836c9"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "2d8f83f177b2ac434ac172b26e26e176"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "14f67964f280e824f80b212790b8f9cf"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "d7bb5674c8add8c4a40b4784159b6167"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "d64ef3d208d4f6a3678cc9e03a7c20e1"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "f9ca08b0232f956e1687cfa403ea8b3f"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "64d50e2f13228574e0ab8124ccb697f8"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "76c7e35f64f1924c2516386a22be00f9"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "3e142f2c3864a72794e942b70578715b"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "30f7705b88a3b4309806437d6cc9862d"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "cb1da45f97f0abc752e149df4ef8aafd"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "c839900119ab6a94bffc00f46f7bc4d1"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "09e4da2a4f86b0ba11728d685f166579"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "a360db9befa173353a9c1274a9108f3a"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "bea58b3ae1da995d8d8535021acdbd24"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "48949950d7dda5f4fabace657b28af98"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "f8186c702a23f83f1a63736d6ff459cc"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "73f34248c134bbc7872c3d523dec1399"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "55970ff18030eb3a65ec5f8fcca0382b"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "73f3d2cd3e153250661161e1eff8282a"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "4a54add34837747e12268806e03f6f29"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "5e67b9f79e846cd4a96ea2ffe197a89f"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "612f8e2123b4aa28649851414d9f09e1"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "7abc38c99455341b3ac20cf87974f712"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "35b18114977836b86bf9ea48fb2a3c27"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "5271d9014fbd9536548bcf86132a8484"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "27ec739694c8bfb563aa2d11e9a420a9"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "c5ed5e84b74ece1f324e5aa873467b3b"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "6d5e59cbf575ca479373ac3059d74f02"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "e78d51d11ed8fc37a248609a0d67b0c8"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "2dd5298559a175c4f53e689382d8a916"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "c4efb5e764ee969d28bb9d5abc52b89d"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "34f2b7893a89a6e3bb30e3faee7169ad"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "3fd622134bb3fbcdd19f2ab946c6495e"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "80b259db4aeadaa2dc05f438a4643c5f"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "cacc72f6658c858d491175d8703bf498"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "baef847ecb754a70b6b2471920b23b7c"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "d45d02442c4bc0a4e22f30b936eeb21d"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "ca8ba3a69d23b599a54a1c58637e4bb0"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "f32a326f981ddb7b6ad7d92bc4fe75a3"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "bff1ee25bd3827da950d9ff03df70e1d"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "2d9f4fcb4ae193fd42c0eba6b1ad3c83"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "27513b576a43b61a694a823cf0fa6a3d"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "6c71054273834643cbcedf09c3fab386"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "4277d717472c9b6d0bbce6d2398d86ae"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "ae2afa0a5468310869d613ca07ef73cb"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "d4ea0e82b54129d88a57cd25a6453a08"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "25edc135923884b784267c7645c40dfc"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "0bef7e16dbee3ae60d2dc4e0e0fb0142"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "71f18b99bfb751b1ccec6eced745fde6"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "47ff951c24ebc5d3bb7318bbdd514248"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "0fdaf3cdcbe68eb7f7d038201cfe15ea"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "7c7dde0045a1db923fd6c935fa78ffce"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "22c6bd1bcbe7c9b840e61821c26d72ba"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "40c12b2ff99b8c8abf998a46f7f28fe7"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "886e93e787fc1015fa449d681e180ece"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3a0dbfedddd611a0c4f8929eee09c41c"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "7755452999e9e53082b4cb7e602c475c"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "346639aea587edca8835be53f093445c"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "d4bf027aae94ff715e771e91b9beac70"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "102e693fe9ffd17be496b1f533f6bf7c"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "1b1ec58b21451914aaee1681595af8f3"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "abefbd48ae6e439b88fb50c5962fbcc7"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "a3adaeb5045483008258bc5c9bce3cd0"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "f81d46c5ff42a8cbfa869dc916da8925"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "c04da298b61279e6a0707010d1d4a890"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "e79bdd4aaade3e2676e69d21e8ffac4d"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "75bec1a19bf8cee33d978605743cc03c"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "f0fad8d2450b69635a29a4e9c253354f"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "578c250c053660d3f7cf4aedd3ef53ae"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "6c435959dedb3573e485f80dacb9dcfc"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "4a09641b4723fd7d31a5a6172462859a"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "5618024ead5c384d819cf0d2006e6c34"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "93234da054a573be6f8bf22b0680058d"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "08500de5b2756372fa8f63661e1bad09"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "4e20f88d84da1533b666947a0396a820"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "d33b1e2cffc56f1f392f5ef865c72088"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "53d75d2ec4d3ada87107ef85de1d0431"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "7b7c040baf33168f3e57badf9ec9cb5c"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "637f0d386345eea3f22e19e6384e341c"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "09173392a21d52f5f717187aa22e90de"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "d7eadaa3ea39f06a21f8a268e5609b56"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "1e131e04cbf9636edcd2aad0885549fa"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "2d1d199c3c324a5937c640c8e4315e48"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "828639892cc9fa21a98ea7853be33833"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "fd4b2e5f169b73a023f58b8fb583a969"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "174ebe4b1bc6e5ce8101693f4621fbb1"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "a3fab76621f1e6cf61d71214b0c58984"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "1a2e7d4e99c18c5decc1aff2aff693aa"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "2ba75b446e45be0b699eda2dc1da2a4f"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "d4851b971fa07b120408133760172d3d"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "fc81227465a803d0fddb4050d469b12b"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "57275878312dd8ec07f74e28269569b0"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "fdae400e80c9418179c78b38971a345e"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "b1a0e26207be7ca63be300aeb104bc40"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "2558f415783f7ec9c1340aa5beb4b89b"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "d5295edeb756904e7e1a6544e2121e56"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "71b74887bbac5feb96aa2892257ecc46"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "0a05d3b563031e129a4ead82a652516f"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "b183b728e0845f3e3dbf3459febe6e14"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "cf9a787af9d8310191e7b7a930f16baf"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "ef4bc2c7e96e94f78171b242f45c438e"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "ce3fb9930c3d9a49299415ecb1d578d2"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "afdae441747ead9899328f2eebcb269c"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "87f3acd39f61509c794079177e281308"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "4285951e7e31064f2c048e2d970c5e16"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3f6424f89c9d85ffdaa8c4879d1a0100"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "dfd5ed22a34d3e625c427123000d4af8"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "349f6c2c7443b89bd9c1917a69749df4"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "d5abb1e0ea26d9527b9fba439b34e867"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "901468e399ef3023748182c2f52498a2"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "915dd19e3b572d4d0434870b50f4e2bd"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "46a3d32019f2efe2884b643dc9692969"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "6bdcf2abce7cd9394ce37d8fc96885d9"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "0ba5088d51554e601b3aa554cdf46551"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "fcddf025c8f0d91f529b16f176ccf55a"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "440a9b6b660b6e5ccf8310ad67509a8e"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "ec2b84257180ce8c696f259669e163b0"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "d91a7193872d308e42649153dd79e0f1"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "25a583ee251d3f340ca74a0065b83d91"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "5bbc4312298061d5fb2457f5084919ca"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "440392159d4311c00f64b13a950ab76f"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "5d86b90cfb9e95c993c71d949104deca"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "d365dab5bd146ed6a7fac9de62f0b05d"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "428ad612ceadbb4cf24580ab69b0702e"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "a226c122308376395cbdd71c4b79a23a"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "96c635ea96a0ec8acf38835bf9924cdb"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "ed508c96b64c17734da9a469dc11aac0"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "5edf09ef4a4e796b2da0ef463e29cd5b"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "a8ae26746f9f0462b6b1bf835d36dbc7"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "f8541bb175d0a370c940c97c61c6085d"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "11bffe86bebfd8aec63622e994ea2ca3"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "cff4227bb93b34b19ef1f233b512b883"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "abfb5af5ce43675bf938979b8ff514b7"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "84cb44fd3b3b992dda9b2a4078d852fc"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "4f39a260bc327039824bd78f181080cc"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "440a33cf90b79713d573ad8b9df53cf3"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "a805c80529ac77be92e021ba0b4f4288"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "93d54fa86987c94d94bedf10caf74f7b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "5198e62dec722332054d809bf985512b"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "8cc16b6948f9b1486155063cbee49a54"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "0e6efdc36fd24ccfa776078ec0a1ec32"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "185ba75afbdc97ba323f8d6a69fbc5e3"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "c76ba9fbf6a842f488ba0691dc281ecb"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "f485e4219c01cdad06180b94d6b0f2fb"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "6bc2360ab77ce88587a36dd8c522e77b"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "9c96476aada5eaecb330ff4e5f4a4e34"
  },
  {
    "url": "404.html",
    "revision": "ab2ac86af31d586680b8f045e9364a13"
  },
  {
    "url": "assets/css/0.styles.0fa56194.css",
    "revision": "6a2ad87a030128a651f6f2397f9e3afa"
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
    "url": "assets/img/new-theme-added.f06bacb5.png",
    "revision": "f06bacb59a4605f705122a98189fee90"
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
    "url": "assets/js/1.c221fa01.js",
    "revision": "629eda5394e941a87bce0fe900b1b47b"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.98fac64b.js",
    "revision": "40607203702bb1b83a3ec3b89a850074"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
  },
  {
    "url": "assets/js/102.d468772c.js",
    "revision": "8b7ea1a6ccd2b3ccfce9328b4a05cfa1"
  },
  {
    "url": "assets/js/103.59e73842.js",
    "revision": "914b3c4c3324cf249a7b4cf2789cdf7a"
  },
  {
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
  },
  {
    "url": "assets/js/105.b0197c01.js",
    "revision": "33eb9187e2d0762a0453121133b091fe"
  },
  {
    "url": "assets/js/106.d8ef2e03.js",
    "revision": "eec5f7d873979903f160eaead0dab93b"
  },
  {
    "url": "assets/js/107.6b5b4082.js",
    "revision": "1fcd041d6f7d1f7aae75d5414f52b43c"
  },
  {
    "url": "assets/js/108.8aa12172.js",
    "revision": "636a77cfe260b51b0fb032ac3a42f865"
  },
  {
    "url": "assets/js/109.b27d066a.js",
    "revision": "67d59863fe0219fef4f5ab123db5bde0"
  },
  {
    "url": "assets/js/11.b7206ec7.js",
    "revision": "b9fceafb37f3e146850a52dd018e2898"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
  },
  {
    "url": "assets/js/111.22d8e9c6.js",
    "revision": "d4f7edd187ef74b4ea9adcf8457b3d41"
  },
  {
    "url": "assets/js/112.87f39dfb.js",
    "revision": "9571abe6c91af776b2e1288fad9e3c26"
  },
  {
    "url": "assets/js/113.caf50036.js",
    "revision": "e384084b449a1295c22cd92d791b694d"
  },
  {
    "url": "assets/js/114.91e0833d.js",
    "revision": "bf7abdf198c63cde40c4a5781158b75b"
  },
  {
    "url": "assets/js/115.2a994a20.js",
    "revision": "c734006ecf3c580284a2416f2c7e3cbe"
  },
  {
    "url": "assets/js/116.ab93e486.js",
    "revision": "437a30762c842a43983140d58a6c204b"
  },
  {
    "url": "assets/js/117.c2d7ce24.js",
    "revision": "39ea6741bddc7dd626884ef0b5dbfb13"
  },
  {
    "url": "assets/js/118.1995ec71.js",
    "revision": "cd712ef059ea5c798d381315006c01f5"
  },
  {
    "url": "assets/js/119.0d073662.js",
    "revision": "1a5c70bb9e0177e3a3a30c02bd749ba2"
  },
  {
    "url": "assets/js/12.ffb79c3c.js",
    "revision": "116ca60d4b24eb41276c2f4870f75771"
  },
  {
    "url": "assets/js/120.7dd18ad6.js",
    "revision": "8675e524104bc3e7e5ef83c04e007ec1"
  },
  {
    "url": "assets/js/121.8ac26daa.js",
    "revision": "2b4614fcf81292545db4c8c8a948fe98"
  },
  {
    "url": "assets/js/122.904c5559.js",
    "revision": "877fbc955d2d6f9aa306a4039e81000d"
  },
  {
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.1acbc4f0.js",
    "revision": "f64d5f5ca970c7f696517851ae38fd3d"
  },
  {
    "url": "assets/js/125.e0c09998.js",
    "revision": "1e1fd0953570e8d93c4ca19925ea896b"
  },
  {
    "url": "assets/js/126.69400522.js",
    "revision": "9161c48ffce7f8714e540aa53237e187"
  },
  {
    "url": "assets/js/127.9b65318f.js",
    "revision": "41c2d09d347d223281120fcac828fb6a"
  },
  {
    "url": "assets/js/128.7d4b722a.js",
    "revision": "f120367ab796a51b355b0329ece88da5"
  },
  {
    "url": "assets/js/129.42b432c0.js",
    "revision": "190e07a3508c32d3e3223d188ab0ab39"
  },
  {
    "url": "assets/js/13.5a6645d4.js",
    "revision": "17d137d5e89cae820089229f051bab46"
  },
  {
    "url": "assets/js/130.a71466e4.js",
    "revision": "12e8c245881b0b8f80477443e9fd5089"
  },
  {
    "url": "assets/js/131.02e9d86f.js",
    "revision": "a634b05d3f85caede7cd211f386af475"
  },
  {
    "url": "assets/js/132.1eead4f1.js",
    "revision": "78c9461a3ba9478820712e2a06acf054"
  },
  {
    "url": "assets/js/133.a89599ac.js",
    "revision": "1235c3cb19e44882b7993ef4d9f09642"
  },
  {
    "url": "assets/js/134.dfa88bfa.js",
    "revision": "f8640948ca07ac95d863223142440fc5"
  },
  {
    "url": "assets/js/135.a8df44ab.js",
    "revision": "460e69940edfc0763dc60aa5ff3dac6f"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.4102e4f4.js",
    "revision": "9f5c7810e3cd9b2e895c23b694fdb702"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.52b7c015.js",
    "revision": "286bfdab9719ac984aef635da411edee"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.5ce799ba.js",
    "revision": "3a0da07594ebee763f90d840a6f968bc"
  },
  {
    "url": "assets/js/142.f885dd0f.js",
    "revision": "0701b585feda727760f88ad11a97642b"
  },
  {
    "url": "assets/js/143.73a59bf7.js",
    "revision": "ce9b211429dcaa99bb95f3d50d705ed5"
  },
  {
    "url": "assets/js/144.a957adf0.js",
    "revision": "9d94434a478ac41e37237e5f079b9a65"
  },
  {
    "url": "assets/js/145.83ceb845.js",
    "revision": "f3070f69bcced095846f814f77646041"
  },
  {
    "url": "assets/js/146.08c25ac8.js",
    "revision": "4c0577f024ddec7cf5a55c77c9d214af"
  },
  {
    "url": "assets/js/147.4aa524b3.js",
    "revision": "d8f1f1fe6900214fc324d2103493e947"
  },
  {
    "url": "assets/js/148.cfb15dda.js",
    "revision": "b701e82424306d793b30971094e43c9a"
  },
  {
    "url": "assets/js/149.adab3b63.js",
    "revision": "b240be57f044476d4f78bccd79df9184"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.5d258c0d.js",
    "revision": "c9044f09259a6952ff59893a375cfc66"
  },
  {
    "url": "assets/js/151.40f7e977.js",
    "revision": "ac23f7ab8a308c3a873e950d5714cf3b"
  },
  {
    "url": "assets/js/152.4ae756e4.js",
    "revision": "97c21f80f981a0e9dd4e7963c862c818"
  },
  {
    "url": "assets/js/153.50db48cc.js",
    "revision": "a35a401f737ae5dbc67abfe5dd711c20"
  },
  {
    "url": "assets/js/154.7457d3ef.js",
    "revision": "f551c7139f4c4560ff91d47950b76aad"
  },
  {
    "url": "assets/js/155.b21fa2c1.js",
    "revision": "83082e8999966391ac17f0d88ae62e64"
  },
  {
    "url": "assets/js/156.41a425a2.js",
    "revision": "1469a5c61544cb8384f106ac3862c3d4"
  },
  {
    "url": "assets/js/157.33f61009.js",
    "revision": "b6fbd34551008e52b4f8160921a81f1c"
  },
  {
    "url": "assets/js/158.4499656c.js",
    "revision": "07027b9493e1c57efac70e7881090715"
  },
  {
    "url": "assets/js/159.d6b91f4d.js",
    "revision": "c2c40c1b292b20c6c82230b07bc42085"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.bafa777e.js",
    "revision": "4bbac1987179d220bd5d25f4590c2250"
  },
  {
    "url": "assets/js/161.a63f5d60.js",
    "revision": "9d220f564575a7bf9e81d99f48dc0a86"
  },
  {
    "url": "assets/js/162.efbd9fe9.js",
    "revision": "1b2c8d631e18c566a0292ab08cf38069"
  },
  {
    "url": "assets/js/163.f0010129.js",
    "revision": "65a13873d99abd0335bc3e6b1cd49043"
  },
  {
    "url": "assets/js/164.a5bcf745.js",
    "revision": "065ff9c374a18a2f846697a0c56eec83"
  },
  {
    "url": "assets/js/165.9028fd32.js",
    "revision": "886bd063c76269d15b3db70498362a47"
  },
  {
    "url": "assets/js/166.e21eb529.js",
    "revision": "93e77a184b81e15b51cfeb740784420e"
  },
  {
    "url": "assets/js/167.fc78d58d.js",
    "revision": "9bb79a8bb4c0b68876f58ba57bc6aded"
  },
  {
    "url": "assets/js/168.d6cc71f1.js",
    "revision": "cafd656e0c051078b59a4db9f26e3693"
  },
  {
    "url": "assets/js/169.d2818f95.js",
    "revision": "a368d20f5e23fa6650e31db48c12dfbd"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.acff38ac.js",
    "revision": "94d9377779b6992c237168585703e2fc"
  },
  {
    "url": "assets/js/171.19af290d.js",
    "revision": "e1c5783d3b5f0539ae84659e4fb17d1d"
  },
  {
    "url": "assets/js/172.c608ec58.js",
    "revision": "8bae9ff0fc70c36a5a96ab2c8235546c"
  },
  {
    "url": "assets/js/173.c6559e14.js",
    "revision": "8516edbbfb64a5d36ee2c87bab869c0f"
  },
  {
    "url": "assets/js/174.728dfad8.js",
    "revision": "00cd8020016f0cc884b3bc242d601403"
  },
  {
    "url": "assets/js/175.ca6dbd93.js",
    "revision": "ba63c3717f97b17d71a4db4deaea2055"
  },
  {
    "url": "assets/js/176.80517dbb.js",
    "revision": "b22a849a2e932047f6df9b55f081e9a7"
  },
  {
    "url": "assets/js/177.ba483307.js",
    "revision": "32c77803c5e6d4783c27e000558b2d4d"
  },
  {
    "url": "assets/js/178.11ad38bf.js",
    "revision": "69fbadd72eb916c6e1d818172f5ba1b1"
  },
  {
    "url": "assets/js/179.9d76f832.js",
    "revision": "b50879560a9967e40c1d323a0d987191"
  },
  {
    "url": "assets/js/18.b5542db7.js",
    "revision": "e0b8d59e4b1ef2e6cbcdbd41e6e6ba9b"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.205a00d5.js",
    "revision": "c80687cb23f13b7ce0ea9aae41dbd301"
  },
  {
    "url": "assets/js/182.cbae6dd5.js",
    "revision": "8c006f87f438bb309dea8f9672916305"
  },
  {
    "url": "assets/js/183.09816acf.js",
    "revision": "d3868cfeae04fc1326c58fcbb52397a8"
  },
  {
    "url": "assets/js/184.ff625438.js",
    "revision": "d7f69e6afbfca884c059c298002a2be9"
  },
  {
    "url": "assets/js/185.447237a3.js",
    "revision": "c437a61ff9cd5d17871c3ef45852cca3"
  },
  {
    "url": "assets/js/186.b2f1ee6d.js",
    "revision": "ff5af21e1f71b76c0752ce8581ded8dc"
  },
  {
    "url": "assets/js/187.4d3d7021.js",
    "revision": "a566102ca2a25aaf9fc0e074103012be"
  },
  {
    "url": "assets/js/188.ba0d8903.js",
    "revision": "27209613a74304edea3feb22db61fc68"
  },
  {
    "url": "assets/js/189.bc1f6825.js",
    "revision": "269bb42a978d27b7a768c6fe20baf0f3"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.293693be.js",
    "revision": "6853cef578ab20690f6cd391c47d4035"
  },
  {
    "url": "assets/js/191.455bae58.js",
    "revision": "79f1b4fd994895c5c8a9cf1ec63379f8"
  },
  {
    "url": "assets/js/192.e6d4e2d8.js",
    "revision": "a049bf4961ad0acfc71c0444f4d88fb4"
  },
  {
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.81c39ddb.js",
    "revision": "31c002d5e463d349d8e2c70a823b90f2"
  },
  {
    "url": "assets/js/195.eb48805d.js",
    "revision": "65d661836810d2f70bce4b117f468fec"
  },
  {
    "url": "assets/js/196.4ed1a3b8.js",
    "revision": "7d2fac119addf32bf49b1c507a695389"
  },
  {
    "url": "assets/js/197.bed5f73e.js",
    "revision": "b9c42bb511943489b46a650b0e06f554"
  },
  {
    "url": "assets/js/198.fbdf6ec2.js",
    "revision": "baf7bc034a881f50b30dc3a32a9705d5"
  },
  {
    "url": "assets/js/199.84d4d90d.js",
    "revision": "a8b9c7a3291d24b3165839e723f562e2"
  },
  {
    "url": "assets/js/2.d5bfc3c0.js",
    "revision": "3e5ef052f56826e20570e2953cceb199"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.c0b57e96.js",
    "revision": "6a8263b6ce56d79a7fa010da9e599e5f"
  },
  {
    "url": "assets/js/201.ee4b6f60.js",
    "revision": "58355ade8ebd1d16d7e747722f7b98c1"
  },
  {
    "url": "assets/js/202.e16471fd.js",
    "revision": "7bc3ca0e201682d7912dfdad2e3d38cd"
  },
  {
    "url": "assets/js/203.da4ab6eb.js",
    "revision": "3cf6087c4c616e8d69668f6cb1a1eb6c"
  },
  {
    "url": "assets/js/204.a5828fcb.js",
    "revision": "7627698323cbbe03d4dda09b87896448"
  },
  {
    "url": "assets/js/205.808e0d49.js",
    "revision": "b26dd38c5176e5a63f9b239ae643b864"
  },
  {
    "url": "assets/js/206.6e42a2de.js",
    "revision": "2ccd80c16825ba77ca8538af00312115"
  },
  {
    "url": "assets/js/207.8ca3c140.js",
    "revision": "a79b8ded25ed7e39ed25032cd603ba61"
  },
  {
    "url": "assets/js/208.ae25c583.js",
    "revision": "993a99e9db09d4affbef9784e0aba66c"
  },
  {
    "url": "assets/js/209.2bc62a7e.js",
    "revision": "f73d49e7c3dce453fe626a1218f9c4c2"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.335504cb.js",
    "revision": "5810088f5aa4f1f558136026d00b5bfb"
  },
  {
    "url": "assets/js/211.40da6204.js",
    "revision": "7b0cc403c45b4c24d2d499394f0db448"
  },
  {
    "url": "assets/js/212.ce1b24bd.js",
    "revision": "81c8c0ebe005be84eced32ef9fc078d2"
  },
  {
    "url": "assets/js/213.bdb9e73c.js",
    "revision": "7cfab1bc8137c04de243b84540d9e1d8"
  },
  {
    "url": "assets/js/214.8fcd17f2.js",
    "revision": "681530daa0d7be2dc01c6d3ee3016faf"
  },
  {
    "url": "assets/js/215.4cc56f4f.js",
    "revision": "60352b5e1930c39cdf0892d8154352f1"
  },
  {
    "url": "assets/js/216.8d27f6a0.js",
    "revision": "45d2fba764cf1fc35c157bf65542a0ed"
  },
  {
    "url": "assets/js/217.a56375d6.js",
    "revision": "e589871002493ac7c35e7b8875ef5b43"
  },
  {
    "url": "assets/js/218.74f5cacb.js",
    "revision": "8753aa277b02f7c872dfa31361719db4"
  },
  {
    "url": "assets/js/219.71b9ce06.js",
    "revision": "a38dd5c7caf46156a66245df29bf3125"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.0e9425bd.js",
    "revision": "581867bcb1b9c208e409b207f27d4976"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.50b7c4ee.js",
    "revision": "029b880ac0331826c6047ec0bf4935e6"
  },
  {
    "url": "assets/js/223.23a19ff1.js",
    "revision": "4630da8b58cc88a3fd4f82a84e21cf5e"
  },
  {
    "url": "assets/js/224.a560f6bb.js",
    "revision": "20b6a08f1ceffd7ec73bece7e7d453e6"
  },
  {
    "url": "assets/js/225.2ef324e8.js",
    "revision": "b5cb8a9864568a13eca3d407c5d1b760"
  },
  {
    "url": "assets/js/226.a74e12d4.js",
    "revision": "3a06aa5fb8a72f21b3f3e0951b96b2fa"
  },
  {
    "url": "assets/js/227.18bbe3b0.js",
    "revision": "097b03d3897497fb145fd6c7a585b263"
  },
  {
    "url": "assets/js/228.47b26ea2.js",
    "revision": "b578f75ceab7309f6dafa158f67a8abf"
  },
  {
    "url": "assets/js/229.6130aa09.js",
    "revision": "7f5e020e0e3aacfde458529c6b28058a"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.38a89a0a.js",
    "revision": "b0ed9e2b7d70a7d4cc687ab25637330a"
  },
  {
    "url": "assets/js/231.61fce1ef.js",
    "revision": "cc0468771993d829c4ec298de96a2fcf"
  },
  {
    "url": "assets/js/232.8419a5ad.js",
    "revision": "f0f5fe30d2ed1708763425ff6260e607"
  },
  {
    "url": "assets/js/233.ab5f45f0.js",
    "revision": "4d6da73955cfee870e3a6e1d33c6986b"
  },
  {
    "url": "assets/js/234.743fe962.js",
    "revision": "2f20aa02af59d398d54143c9e3a52a54"
  },
  {
    "url": "assets/js/235.353faffe.js",
    "revision": "08ba49318b4be267be6cbd992794527f"
  },
  {
    "url": "assets/js/236.c652352f.js",
    "revision": "8e688b0882960db0db968f05943ab75d"
  },
  {
    "url": "assets/js/237.fadac5e1.js",
    "revision": "54fae50476ce3d1039a74f68ea437450"
  },
  {
    "url": "assets/js/238.a39f992e.js",
    "revision": "6f50e2d5c6fca85422da33274e3a9773"
  },
  {
    "url": "assets/js/239.67d6eeaf.js",
    "revision": "34ad4bce7655e650af8b9998c2e5fe15"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.5417807e.js",
    "revision": "1d8fe16ebd0b7d886fe469d5735aa831"
  },
  {
    "url": "assets/js/241.4b5665d4.js",
    "revision": "d983ce10ffdd6eea3dc342fbec073c90"
  },
  {
    "url": "assets/js/242.989f13b3.js",
    "revision": "a5991c78081a69683e15bfa2daf4877d"
  },
  {
    "url": "assets/js/243.d0baa1f1.js",
    "revision": "4ff8b35d5df7d4553b4256a90a00dc5a"
  },
  {
    "url": "assets/js/244.8feeea6c.js",
    "revision": "15fc810f8b20421a44eb4a808e5acdc0"
  },
  {
    "url": "assets/js/245.32d05108.js",
    "revision": "94b631ed8e27da393b27dad5600761ab"
  },
  {
    "url": "assets/js/246.60e47c1d.js",
    "revision": "6e3f7102d86ac790aeade9958d7104e8"
  },
  {
    "url": "assets/js/247.f2f006ae.js",
    "revision": "2798434c9f658465bbc45e511051376f"
  },
  {
    "url": "assets/js/248.745c97cb.js",
    "revision": "b347751a8b6f23e2f07906a34dcf5b98"
  },
  {
    "url": "assets/js/249.42de761e.js",
    "revision": "29bb76bb110f4f0d954f6b47c03afcf7"
  },
  {
    "url": "assets/js/25.811676f3.js",
    "revision": "92e7a8cbcc4937d2e08b59ba12a5fba7"
  },
  {
    "url": "assets/js/250.256656af.js",
    "revision": "a005fcf30b111aa3009f02a11cdcc7f7"
  },
  {
    "url": "assets/js/251.b2534066.js",
    "revision": "bd12c78dec51fde473c076236303290c"
  },
  {
    "url": "assets/js/252.8c6b6f7d.js",
    "revision": "b51993efebdc2c9249e0a734b362074f"
  },
  {
    "url": "assets/js/253.d5358fb8.js",
    "revision": "ba3485aeb4c985522b15a0fdbab3d6d3"
  },
  {
    "url": "assets/js/254.f2752ba3.js",
    "revision": "997309ae212089205e5b0d265f21a60b"
  },
  {
    "url": "assets/js/255.0f838b97.js",
    "revision": "49bb3f26d09772a9f4a98786a148ca69"
  },
  {
    "url": "assets/js/256.698f9f42.js",
    "revision": "a3d3f24044923c3f67c15529dfcc04b0"
  },
  {
    "url": "assets/js/257.578f1af2.js",
    "revision": "babea62560b1195c0d85f6a4e53d32af"
  },
  {
    "url": "assets/js/258.aba68591.js",
    "revision": "bbf450a1482ac0c4545ea57d7e365211"
  },
  {
    "url": "assets/js/259.da960a47.js",
    "revision": "6090e752a8b9a84f3dd9cbe75dc93ce2"
  },
  {
    "url": "assets/js/26.983925d2.js",
    "revision": "c774f1a563d9c533a584bf4ee36a1d5b"
  },
  {
    "url": "assets/js/260.539a627b.js",
    "revision": "120dfafb22f6405097fdb8bbe8be7b78"
  },
  {
    "url": "assets/js/261.1f93a44c.js",
    "revision": "aceaabe458c82c5505a8d322e2fbd1ff"
  },
  {
    "url": "assets/js/262.f22e2142.js",
    "revision": "1b5d4158c040803b9220ba0f8f24c463"
  },
  {
    "url": "assets/js/263.3808d0a8.js",
    "revision": "0436914a2531bdd7b41c893134115f45"
  },
  {
    "url": "assets/js/264.fb109969.js",
    "revision": "53bb02d64637a57f1ba000bc903479f6"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.f1418674.js",
    "revision": "17e8304999c52a6f9bfe7a512d71cb95"
  },
  {
    "url": "assets/js/267.bec5e63e.js",
    "revision": "b8c6653895b5f2f8adb7c094e27504e6"
  },
  {
    "url": "assets/js/268.9b7ebd71.js",
    "revision": "907e26aa63586d6f970f88a986aad80d"
  },
  {
    "url": "assets/js/269.aa6af161.js",
    "revision": "213849a3e4cef331f69958524fa8bc4f"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.b96cc168.js",
    "revision": "de9b84b94a78a2b1154035d1ab406796"
  },
  {
    "url": "assets/js/271.6b6ffeb9.js",
    "revision": "93675edbb54d16558aec39e32dfd53e7"
  },
  {
    "url": "assets/js/272.26616036.js",
    "revision": "25c85f5dc888d9f184a6d6d032a3a3f7"
  },
  {
    "url": "assets/js/273.64763498.js",
    "revision": "8fa6381db8f85a257939d7aaf29bdc3c"
  },
  {
    "url": "assets/js/274.f1e1efe9.js",
    "revision": "eff00b8aff0b1167052c42266f9c9d2c"
  },
  {
    "url": "assets/js/275.98d1c3ac.js",
    "revision": "07c477f77d2b69c3f314537e6677f201"
  },
  {
    "url": "assets/js/276.1bd6217b.js",
    "revision": "27dd3c7864694a10dfc79235bae1c376"
  },
  {
    "url": "assets/js/277.93c8e27a.js",
    "revision": "952e3d2782b6fa7c883b93467cd91b4a"
  },
  {
    "url": "assets/js/278.098140ac.js",
    "revision": "e76d3e19985d28121f5b95b42cfb0043"
  },
  {
    "url": "assets/js/279.f6c3e46b.js",
    "revision": "975f986c491d66c367546b3d4b3827b1"
  },
  {
    "url": "assets/js/28.d4ed8751.js",
    "revision": "b23bdb42b59955507f62d77bc21b39ee"
  },
  {
    "url": "assets/js/280.2c2b840f.js",
    "revision": "2532f3fee220c75cbfe1f0c5ecf1c315"
  },
  {
    "url": "assets/js/281.8a22dc1e.js",
    "revision": "5f83ca9e3b10eb269d0e2d753e1e2ab5"
  },
  {
    "url": "assets/js/282.47abddbd.js",
    "revision": "99d5ac8c13c6ab3c40e74357e98c7538"
  },
  {
    "url": "assets/js/283.49276513.js",
    "revision": "c4b7a8021dcfc2e7e87dfc2024caaf30"
  },
  {
    "url": "assets/js/284.17211842.js",
    "revision": "c632cfa15315193095acf4b055d043e7"
  },
  {
    "url": "assets/js/285.65b059f2.js",
    "revision": "740a4b2e1d409ed9ad7011feb466c263"
  },
  {
    "url": "assets/js/286.458441d2.js",
    "revision": "ca0a3a078146755f7ee3746d053dc4b0"
  },
  {
    "url": "assets/js/287.7a81a7de.js",
    "revision": "9abaa14b23295021fc9b81db7c29b75b"
  },
  {
    "url": "assets/js/288.6910cf2c.js",
    "revision": "1608377118771c992857ebb8f8ffc353"
  },
  {
    "url": "assets/js/289.c7866b6b.js",
    "revision": "a89b8ab7783991592c1ccbc72c777dbf"
  },
  {
    "url": "assets/js/29.eae9a378.js",
    "revision": "7a7eff65354cebbaf7403f4951518bf4"
  },
  {
    "url": "assets/js/290.037ceed5.js",
    "revision": "f9f6ca5e495ed206d9c09aaf94273d6a"
  },
  {
    "url": "assets/js/291.e5ad4f79.js",
    "revision": "88766146bf99941712d9b68cdcfd09c2"
  },
  {
    "url": "assets/js/292.4965e398.js",
    "revision": "2c47ebeb5ae0f010f7d0a8d833f5293e"
  },
  {
    "url": "assets/js/293.5e7c162d.js",
    "revision": "c1867d22a9c9abf6674a260c32b5d023"
  },
  {
    "url": "assets/js/294.a70c5b38.js",
    "revision": "83335de0154139e76376fb7e35ee9527"
  },
  {
    "url": "assets/js/295.719ea88f.js",
    "revision": "da5254c7c67faea861fa945f4c97a42b"
  },
  {
    "url": "assets/js/296.ec6438f3.js",
    "revision": "90c46e15609cb1a5ea7aac38b9aa5bce"
  },
  {
    "url": "assets/js/297.038cf132.js",
    "revision": "b9b6d13ceedc15bc2c9c2fc43c845259"
  },
  {
    "url": "assets/js/298.2c1845e6.js",
    "revision": "d84622cc265265e6f325e972c3b69977"
  },
  {
    "url": "assets/js/299.c60c6e40.js",
    "revision": "d430fd8e7d2c95daf5cd8c8ca164af1f"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.a3d0b802.js",
    "revision": "3a26b95be4961e6b4c5b381b447af674"
  },
  {
    "url": "assets/js/300.892dfa9b.js",
    "revision": "a5436c118ec4eb547185b0e37981cdaa"
  },
  {
    "url": "assets/js/301.6d357f12.js",
    "revision": "dda5950550dfd9f37ec4c6ebb529a677"
  },
  {
    "url": "assets/js/302.d3e6c392.js",
    "revision": "b356f5c1ef21cbd9de4c07446fa74dd9"
  },
  {
    "url": "assets/js/303.3530f547.js",
    "revision": "16578e115c5ec6051d2aeb75c772b6ce"
  },
  {
    "url": "assets/js/304.a8a2ffb7.js",
    "revision": "6cf0c9d3fb44d45de34c90aa0e81ce50"
  },
  {
    "url": "assets/js/305.3ba62f56.js",
    "revision": "0ee86a4b3a7d83aba506abce657b6955"
  },
  {
    "url": "assets/js/306.74f6adb1.js",
    "revision": "ce10dca9ce56c67b1f41980f23011773"
  },
  {
    "url": "assets/js/307.fc093614.js",
    "revision": "e5da6c9a7f49bd0afb217715c3f4f237"
  },
  {
    "url": "assets/js/308.b0b6e726.js",
    "revision": "ee1d4acb753a509a0f336adb773ef5f5"
  },
  {
    "url": "assets/js/309.9cbffbf1.js",
    "revision": "09e22291d75f2742ed5669ee30e62c35"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.ec2f6b78.js",
    "revision": "3e4ef7bc3b362ab220d135b5c13add76"
  },
  {
    "url": "assets/js/311.8a25a8d0.js",
    "revision": "9de4f859c50c0977a085fa3b4a93e7fe"
  },
  {
    "url": "assets/js/312.047d307e.js",
    "revision": "0f195355bf8c7590c5751ae63236863f"
  },
  {
    "url": "assets/js/313.ff6a743d.js",
    "revision": "7835d85d839ce50a262d9da1d94620b3"
  },
  {
    "url": "assets/js/314.2b104388.js",
    "revision": "a656946f1755585f3e71e123e86f780f"
  },
  {
    "url": "assets/js/315.f3e4f17a.js",
    "revision": "cf412d17e9bacd63cb980993deedc622"
  },
  {
    "url": "assets/js/316.0fb2ccd5.js",
    "revision": "477fb10ec08e88c2f49b12762b38468b"
  },
  {
    "url": "assets/js/317.25a2d9ae.js",
    "revision": "0f4585a24764a9e21a0c419b9aae6ad5"
  },
  {
    "url": "assets/js/318.4523b53a.js",
    "revision": "95c5dccd28f9036c3bf77274bcace1c5"
  },
  {
    "url": "assets/js/319.679e20a1.js",
    "revision": "472a9472673edf488f88d8652af12164"
  },
  {
    "url": "assets/js/32.2dbc11ef.js",
    "revision": "96953d1c495aab3dac76ddf9bb151fd7"
  },
  {
    "url": "assets/js/320.28c266b7.js",
    "revision": "a24c62d0e4163a9427e062a6c84a0757"
  },
  {
    "url": "assets/js/321.1a0a1ea2.js",
    "revision": "29fa6e254ce956031167f8fdec215a5f"
  },
  {
    "url": "assets/js/322.5567a74b.js",
    "revision": "63ed9cd0b659412b117d075c7ca4f2b9"
  },
  {
    "url": "assets/js/323.eb47bc63.js",
    "revision": "abf262798275457ef7d603fb88976ed0"
  },
  {
    "url": "assets/js/324.ddf71906.js",
    "revision": "a1c3372a9ba528b1a418c02ccd89ac56"
  },
  {
    "url": "assets/js/325.6b2c2b45.js",
    "revision": "ebabc267a55e7c080ce22fbd108860af"
  },
  {
    "url": "assets/js/326.57d50319.js",
    "revision": "b5423b1ad64ecbd516613bcdd2c22df8"
  },
  {
    "url": "assets/js/327.b30070f3.js",
    "revision": "bd1090ece2abd6a1aaa3592501c463ed"
  },
  {
    "url": "assets/js/328.9cabcc19.js",
    "revision": "ff6f0d21396277eedfd0846a993af390"
  },
  {
    "url": "assets/js/329.7f663d22.js",
    "revision": "2cc53a36a116db498828dbedda82e8d6"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.da0bf1cc.js",
    "revision": "e9f9ada7c1842f250a9a728fb11f6035"
  },
  {
    "url": "assets/js/331.87d65dc7.js",
    "revision": "c789a95e4f36e656e9e786ae92a246f7"
  },
  {
    "url": "assets/js/332.2e23293e.js",
    "revision": "d8c36366ce44948cd6a35b43e64f1e08"
  },
  {
    "url": "assets/js/333.cdfd4210.js",
    "revision": "b8c88ae14701a4c7bbaaf362cb3f2356"
  },
  {
    "url": "assets/js/334.6aab50d4.js",
    "revision": "a7d04b932485a9294bc77e595b309931"
  },
  {
    "url": "assets/js/335.3bd292bc.js",
    "revision": "736a518c10b16b6bd90f47121138bb68"
  },
  {
    "url": "assets/js/336.7316be8d.js",
    "revision": "5305bf791061ff917bdee62ec52ff687"
  },
  {
    "url": "assets/js/337.3cccd722.js",
    "revision": "3c4a80242ab0042c48a8c16c564df748"
  },
  {
    "url": "assets/js/338.d7060fc6.js",
    "revision": "fcd5ad7b13926f3f63e40bbc59e4f826"
  },
  {
    "url": "assets/js/339.7f06f466.js",
    "revision": "9a4cea7ec9185313302518db0ef46514"
  },
  {
    "url": "assets/js/34.2c29924f.js",
    "revision": "b5126cdf92efb7c084b57af669f20950"
  },
  {
    "url": "assets/js/340.9db2fe65.js",
    "revision": "1879d13cbd2e8dd795a97016e9ce5d79"
  },
  {
    "url": "assets/js/341.baec67c4.js",
    "revision": "1f2b19215dcebc713e82521a8bdb5f87"
  },
  {
    "url": "assets/js/342.66ffa560.js",
    "revision": "24956e21dbd9aa02dad1d83e4fe27976"
  },
  {
    "url": "assets/js/343.494f94bf.js",
    "revision": "c465a5ec806d92895094621a10f2461f"
  },
  {
    "url": "assets/js/344.6d9f505a.js",
    "revision": "60595e1e8c0abd34df47aae9d889d840"
  },
  {
    "url": "assets/js/345.9164c5e7.js",
    "revision": "9c79b6736230e9cf541738e88b444726"
  },
  {
    "url": "assets/js/346.76324f72.js",
    "revision": "7ff32f0921f98b59ad41fb845d90faa3"
  },
  {
    "url": "assets/js/347.dc229385.js",
    "revision": "1122f7c8723f47e919e6be984468ef3c"
  },
  {
    "url": "assets/js/348.f8809df2.js",
    "revision": "158dc95a10c5462b73e94e3ae1d8540e"
  },
  {
    "url": "assets/js/349.cbc64ac0.js",
    "revision": "2f24196a3e1cb37b1ed71dd1440e66d8"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.78915a8d.js",
    "revision": "6e1f2165dd46f617c37e53dce5d9feb7"
  },
  {
    "url": "assets/js/351.012d5c3b.js",
    "revision": "81a5b00ad5fac31e34ad059852fda65d"
  },
  {
    "url": "assets/js/352.92b6b6d1.js",
    "revision": "57ca8cf877eb4593f907a625e62b3a47"
  },
  {
    "url": "assets/js/353.791ef73b.js",
    "revision": "4220a1e6e9afe0c61ced022386a15453"
  },
  {
    "url": "assets/js/354.1c50de7f.js",
    "revision": "153d847775aa2dffd3cede5cb86b280a"
  },
  {
    "url": "assets/js/355.6d023b0a.js",
    "revision": "9a46d91f5c0c4e9e7ff0708299a4d3d7"
  },
  {
    "url": "assets/js/356.ed27d6cb.js",
    "revision": "c2e80d886ac8836a3f565acdcb2aefd9"
  },
  {
    "url": "assets/js/357.c83b1482.js",
    "revision": "a9bfcd96070bbc1d1a9c6426fcc9063a"
  },
  {
    "url": "assets/js/358.6891c0fc.js",
    "revision": "0b7143ef27711cbcf2ab548e6b7c8f3b"
  },
  {
    "url": "assets/js/359.7673d084.js",
    "revision": "7916875272621ecc8e889bc7f0c83f34"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.0e13ac9c.js",
    "revision": "bcc6ea9005cd8cabefc4ae4169c69184"
  },
  {
    "url": "assets/js/361.00c63af5.js",
    "revision": "4caa113759ff19e2ea4c8ab8c4ef7e53"
  },
  {
    "url": "assets/js/362.65f2b457.js",
    "revision": "e7b0b918822eb010d85c08a81f6baffb"
  },
  {
    "url": "assets/js/363.61ddb93f.js",
    "revision": "3107c1ff0ad8b3cb8af6494e81dc77c6"
  },
  {
    "url": "assets/js/364.3542e765.js",
    "revision": "0fd83a5e88a73b59fa9e1d9b15ca8a46"
  },
  {
    "url": "assets/js/365.9e220da1.js",
    "revision": "dc9806d5f1ff582f33f4dda46e6921ad"
  },
  {
    "url": "assets/js/366.60142ed4.js",
    "revision": "fd32560f65d21440d3a5de852d048aca"
  },
  {
    "url": "assets/js/367.a7db95cc.js",
    "revision": "b3e7862c4d2ff50ba85e381b6ee30c91"
  },
  {
    "url": "assets/js/368.43f07ce3.js",
    "revision": "1ac7552e45d54c751a38e127f0d1dee3"
  },
  {
    "url": "assets/js/369.f73517ed.js",
    "revision": "e45652a25b2a654bac460928ab1f84c4"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.e11d23f9.js",
    "revision": "5034f00a4543e9c3c100a8dd5992bf1c"
  },
  {
    "url": "assets/js/371.3df03011.js",
    "revision": "441e94befc875cbe6bd992e114f9e0b2"
  },
  {
    "url": "assets/js/372.10991ff2.js",
    "revision": "c891b2b25bba2d9b7b94eb11f7b88689"
  },
  {
    "url": "assets/js/373.ec6e8702.js",
    "revision": "d5e7b79fc243516d40206124874ec1c2"
  },
  {
    "url": "assets/js/374.ce82e647.js",
    "revision": "efad0f5fe61dd88bf6da74744f273499"
  },
  {
    "url": "assets/js/375.5a8f90e2.js",
    "revision": "460262ac8577f65373ff11afe92e45ee"
  },
  {
    "url": "assets/js/376.027f34e2.js",
    "revision": "d2c614066ba826fbc9ef6f83da52655f"
  },
  {
    "url": "assets/js/377.64d1f976.js",
    "revision": "877d0fb7669bb139567aeeb8b230cf41"
  },
  {
    "url": "assets/js/378.2391abbf.js",
    "revision": "ef6372b2ba46fbe868ebcf9530a8c18d"
  },
  {
    "url": "assets/js/379.4dd8115c.js",
    "revision": "14cf6f40923c0084570383cc6a240e32"
  },
  {
    "url": "assets/js/38.8b15e400.js",
    "revision": "951a3328e85a7ff6d2c827c7ad629320"
  },
  {
    "url": "assets/js/380.37ac924e.js",
    "revision": "42c5b5ff16dca1fe775392dcab22b75d"
  },
  {
    "url": "assets/js/381.208c9e91.js",
    "revision": "b4c2a2ad860c196a9c15dbe5e427ec5c"
  },
  {
    "url": "assets/js/382.33dea46e.js",
    "revision": "d3f719680f7c8b20d4c4750a1a4d36b5"
  },
  {
    "url": "assets/js/383.cdcbc778.js",
    "revision": "15145ef3251a023f7a33af670303eaea"
  },
  {
    "url": "assets/js/384.e6e85984.js",
    "revision": "5b51029810af5817a4351be5463d0964"
  },
  {
    "url": "assets/js/385.96acee27.js",
    "revision": "e45775a28e6ad642cc4535b82f668f0f"
  },
  {
    "url": "assets/js/386.c24d7b8d.js",
    "revision": "dd9605959c32651375b497d0fa1665a6"
  },
  {
    "url": "assets/js/387.abaeea09.js",
    "revision": "72997142c8644c0e89433fa0875d05d3"
  },
  {
    "url": "assets/js/388.efc5da0a.js",
    "revision": "4bbd74a8e32fc78fd40ef82bf3381457"
  },
  {
    "url": "assets/js/389.10ba123b.js",
    "revision": "bda581adf4a5a918b0eb7ad161d5ca1d"
  },
  {
    "url": "assets/js/39.e3f823e3.js",
    "revision": "8bf2d2e890157369ea1bb891c061bc2a"
  },
  {
    "url": "assets/js/390.8fb9f712.js",
    "revision": "12e2d1a22bb3d02ad8be58cd841bf830"
  },
  {
    "url": "assets/js/391.cc134d55.js",
    "revision": "ca4b09c4d11abe4f799a122ef7152c4f"
  },
  {
    "url": "assets/js/392.e4d0f982.js",
    "revision": "e6c848b46254a4840bb29669f180b006"
  },
  {
    "url": "assets/js/393.65bf0af3.js",
    "revision": "b2cee50137b7e87524341564925e84c6"
  },
  {
    "url": "assets/js/394.e75a87d0.js",
    "revision": "41ef76fbbc7519a9b9b0672b2d41da90"
  },
  {
    "url": "assets/js/395.9f81f4f2.js",
    "revision": "db728ffd51056c0bab2dfb77f008931e"
  },
  {
    "url": "assets/js/396.371607bf.js",
    "revision": "5cb63eac34009ae8c1e6d2d96f5023b1"
  },
  {
    "url": "assets/js/397.00d009ed.js",
    "revision": "a68c33a09e06fdb0c0ec35ffd1803afd"
  },
  {
    "url": "assets/js/398.f704dde6.js",
    "revision": "3333b5fc691920b693b742ca4935fada"
  },
  {
    "url": "assets/js/399.542371b7.js",
    "revision": "9d84fa1c7ed172ddef335bcd8b6ebb9b"
  },
  {
    "url": "assets/js/4.b1372804.js",
    "revision": "6a3bd0a2aa0211666ad5e408c38dea92"
  },
  {
    "url": "assets/js/40.6214d2e7.js",
    "revision": "47cfc7833e968c64ebd92f9b0eda1797"
  },
  {
    "url": "assets/js/400.2702cba6.js",
    "revision": "a0d2dcada0945540ef767aeeb3871971"
  },
  {
    "url": "assets/js/401.84e63a2d.js",
    "revision": "53d48d083aab2a6f2d053791539d3247"
  },
  {
    "url": "assets/js/402.df1ef83b.js",
    "revision": "4e4afb166a9ab0ae1e42229b58eaeb79"
  },
  {
    "url": "assets/js/41.824a7c9e.js",
    "revision": "7c6692443101d54057baedfee86135cc"
  },
  {
    "url": "assets/js/42.5daf74d6.js",
    "revision": "557d70fa14566986f614f48102b65891"
  },
  {
    "url": "assets/js/43.dd93d268.js",
    "revision": "e40e793c8286fb7ea7e2a7b77e505cb9"
  },
  {
    "url": "assets/js/44.b293b91d.js",
    "revision": "d17de66aaf3c6f0e0f3c114fd2206152"
  },
  {
    "url": "assets/js/45.a438a0c1.js",
    "revision": "84bb1fae7ae56b4a9972ef8f7f5bb1d1"
  },
  {
    "url": "assets/js/46.4c849de2.js",
    "revision": "59a041c800277af3c0dbe2d2a8019a80"
  },
  {
    "url": "assets/js/47.7ce90f2e.js",
    "revision": "2dd117bf46809b79da28cc691f232de4"
  },
  {
    "url": "assets/js/48.fccc1c97.js",
    "revision": "3c405a625a73be9a691cfe0198ddc4a2"
  },
  {
    "url": "assets/js/49.8e917ac6.js",
    "revision": "76af7d1b151c7700cc764cb28f8c52cd"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.fd836bd7.js",
    "revision": "3827e6d5cf126618127861f9ef4f43c7"
  },
  {
    "url": "assets/js/51.6b575d6c.js",
    "revision": "8a6fa127e2d024430badafd3c58eec08"
  },
  {
    "url": "assets/js/52.0f85d616.js",
    "revision": "e498ffa4c194db5f9c22181a888befe4"
  },
  {
    "url": "assets/js/53.04cc9409.js",
    "revision": "f43a214ba20fea8077b1672136be7c4b"
  },
  {
    "url": "assets/js/54.1d7ae6fd.js",
    "revision": "b4099d878aaee26c38c219cfd4c629a7"
  },
  {
    "url": "assets/js/55.55864510.js",
    "revision": "8613993e1060bf538606e6ecc34e5a06"
  },
  {
    "url": "assets/js/56.66599fb7.js",
    "revision": "d8b03c3e4b43a95dc0e3dc3104a4aaf3"
  },
  {
    "url": "assets/js/57.5732de98.js",
    "revision": "e88ab52329e48589d602ca6bf56c8ca8"
  },
  {
    "url": "assets/js/58.2a22ddfd.js",
    "revision": "5ec2b9c18b7cfc75f66e67d1610fa615"
  },
  {
    "url": "assets/js/59.b35aa3b2.js",
    "revision": "8c7ed0a1d44f18a6c31935ae4d290f75"
  },
  {
    "url": "assets/js/60.72db62c1.js",
    "revision": "b12fd54069bc071e50ee8a902d7a39a2"
  },
  {
    "url": "assets/js/61.ac7f284f.js",
    "revision": "872042efc6f111e024bc16fe59307ae6"
  },
  {
    "url": "assets/js/62.7cdf5dba.js",
    "revision": "80aa8e07ec1067b8351d99f99a71bf7b"
  },
  {
    "url": "assets/js/63.2cc4ae33.js",
    "revision": "88fdd640524e55c5503c885d3edf4a0f"
  },
  {
    "url": "assets/js/64.2f574911.js",
    "revision": "288acfe329fa9fd56731ff4eb716d07a"
  },
  {
    "url": "assets/js/65.7f504c38.js",
    "revision": "0da626b434ec069a89a1c2546ac226cd"
  },
  {
    "url": "assets/js/66.3f808829.js",
    "revision": "6fb24f97234b8509cee606532609ee2f"
  },
  {
    "url": "assets/js/67.b5725a2d.js",
    "revision": "9b8238663961f5ae8ee85de56cd206b7"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
  },
  {
    "url": "assets/js/69.72306453.js",
    "revision": "1499f0e155b3ffffb0b7987138542d4f"
  },
  {
    "url": "assets/js/70.aabef992.js",
    "revision": "cb3d3f24d9192001612fbbff1e3d4d81"
  },
  {
    "url": "assets/js/71.0041680a.js",
    "revision": "21c737bf5b63bb8e2a1061fc06daccfd"
  },
  {
    "url": "assets/js/72.5013ac5e.js",
    "revision": "ee7f8b8d93f9f26e9886d244b9faa2a0"
  },
  {
    "url": "assets/js/73.6931c73e.js",
    "revision": "aef7edeadd72f0b9449b5088be754e1d"
  },
  {
    "url": "assets/js/74.002040b6.js",
    "revision": "548d60f48d2b313bbf27528d3332de23"
  },
  {
    "url": "assets/js/75.25dc3fdf.js",
    "revision": "6064256acb0f919e93def6ceb4b17be9"
  },
  {
    "url": "assets/js/76.1dcb71e0.js",
    "revision": "17ba62c3d2d7b2bcabed67550afce999"
  },
  {
    "url": "assets/js/77.0e733ebe.js",
    "revision": "efc6d5b9a2601de16ea0972358db5c17"
  },
  {
    "url": "assets/js/78.168c4bfa.js",
    "revision": "f497203fb7e52fb6536c8d20afbaa16b"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.fc5dd4d1.js",
    "revision": "ada3e0fcd7c9635ed0ce898dad4cb8dc"
  },
  {
    "url": "assets/js/80.beabf95a.js",
    "revision": "853fd3b11d02883747fe7ba1ee9b72af"
  },
  {
    "url": "assets/js/81.62742b8c.js",
    "revision": "2a0d06d5096c4f4e85495e787513705e"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7e287636.js",
    "revision": "0d97f6c15d3ee66e1a3f80291e8c1252"
  },
  {
    "url": "assets/js/84.6841e809.js",
    "revision": "953220cb79b34800064dfba63f245b67"
  },
  {
    "url": "assets/js/85.c0171591.js",
    "revision": "120b26c8ac0d2a3156b87ac1f428e82a"
  },
  {
    "url": "assets/js/86.2066fd35.js",
    "revision": "5659d9627c8fcb7756ea8ef3201046ac"
  },
  {
    "url": "assets/js/87.18e84ac8.js",
    "revision": "777cb2cb3fab029bc0a20a3603221a9d"
  },
  {
    "url": "assets/js/88.34803ff2.js",
    "revision": "bfc05738d9fc62680138c2e84ae22b8d"
  },
  {
    "url": "assets/js/89.898fb65e.js",
    "revision": "a9563c9b62c95035e46420b3aba898f6"
  },
  {
    "url": "assets/js/9.d393fc5c.js",
    "revision": "ad51d5f8ce79b519c54785745f662b7c"
  },
  {
    "url": "assets/js/90.98c23455.js",
    "revision": "ae922836b6482a40b4e95c52d042cf8b"
  },
  {
    "url": "assets/js/91.301a7fb2.js",
    "revision": "836d4c21f26bba7728f2dbb49c7aebd7"
  },
  {
    "url": "assets/js/92.d32d01b1.js",
    "revision": "97e3ff7744949aa6898c7230c1eb9ef8"
  },
  {
    "url": "assets/js/93.4de36706.js",
    "revision": "eb06e793c55d9f150f0b7e10555c8635"
  },
  {
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.61b68720.js",
    "revision": "e5de64e69567ae13ced39561ad5d7e91"
  },
  {
    "url": "assets/js/96.a2295a49.js",
    "revision": "2373bcd406a20d0a79081fcd38a9332f"
  },
  {
    "url": "assets/js/97.a9d77f55.js",
    "revision": "1da8d85f5cd5d966422d86ef10232d0a"
  },
  {
    "url": "assets/js/98.00790181.js",
    "revision": "eba536902a8fd2c3ca4cdce99a5f2817"
  },
  {
    "url": "assets/js/99.7e6e6b6f.js",
    "revision": "df3112f7108953c8ffcdfb38aa0739d1"
  },
  {
    "url": "assets/js/app.6196e80f.js",
    "revision": "c31f92639fb22b292369108e46d2b908"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "55249e5a973f8de8c99807ffe6a6789a"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "b52106f74508cb32f22c5e20fd2bf053"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "881fa001de49554e4eb9fc7e5a6d4ba4"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "37de8b2aec5a10a27b08ecfc991992a0"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "b50d2538f4aeae6e8a197e98b39636d1"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "0915abba92819fde9134f8f53ae22e08"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "b2074050f5f01322545c3f9410b0575a"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "36378e35dd20575cc767b0a412f97e6f"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "84c996f53a58e491146459087b32af1a"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "88b580fc4379e02fec3dccc6ee88c753"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "782578397769fb1f77d8786cd2e9e04a"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "b6f561ee59760afff08741c946b473b8"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "55b6407b3986aa0d3fc198842621317b"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "66568c427961570bbfbede06b13ac3b1"
  },
  {
    "url": "master/api/index.html",
    "revision": "c448a03265fbe9f3f791b211bd873c1d"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "8a4ff5895b8089e6b17b64b8c71395a4"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "233406c004151ef64bd7e9cc65ea909f"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "db8a072c5078d79eb309d1596537c8f0"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "fbb47d5fd465e3c694bbc3b1eeb50f13"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "98d11fd5436ac80b5419d887b729aa5c"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "c44f4f1740614ce340c1db55040bf8cf"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "914d5de3e994cce60c8321db784294e4"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "9d206bdb83b6afd028b48660b87b01c7"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "17a5409b3159b56c5b6c961c25c8302d"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "23a540bbf2f75fcb79562f2d76181226"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "0890040e4e88107c28f099545e7cce93"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "fd5a13b356994fccf90f7adca0258031"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "3a264801e7e385edf8cf8fd62d5b8b82"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "d6725369f68c790cc90b2bad3085ccdc"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "a6452373901e246e181b806e147cd6f5"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "179113d84e4b185782c3185b8e29a15d"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "da5a61e92fb7ba50f29cfd0f0788672e"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "4731b60ac8acbe87dfa6272c2987ac39"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "fbc7aa8b1c143320a8598744f0d3a9e8"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "c0fa84b13668642394390ebdf1b7c646"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "31f266f719aab856f9f279dabd029861"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "b585f232ac2d17b373facc5067141bde"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "e530096ccd4aa03c23507ba7da2b42ed"
  },
  {
    "url": "master/packages/index.html",
    "revision": "3763a375d69c819b358bb0034a8a0066"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "b09296dbff0d2373442933110a2d9b72"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "fc98426aa2b159619a27c34fc1abf304"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "39370bd82b122e381443a9dd1d81c5d5"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "c7188ea6c23fce37245936e01fbbe50f"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "49fbf114f6d84d7a4255d29e9496b907"
  },
  {
    "url": "master/packages/views.html",
    "revision": "4a93a2ccf2953e2b8f5424847856a334"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "3ebb4748adbbe68238ddc89c5949382b"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "bdcb1be51c49cd597e034f4f7caf4bd0"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "cafbc08fca364e043037099690bfa34f"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "a5f8b81ffe008f53a42195d624db1031"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "951bc1745ecdab05e53181b1643b3c1e"
  },
  {
    "url": "master/themes/index.html",
    "revision": "4fcc03608db8c1299dea1ae16a7e6c7d"
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

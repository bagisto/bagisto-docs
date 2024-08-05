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
    "revision": "13eb7696bb5805abd4050c00d1de7fac"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "e3c16af8f3a6381fb6d9058d182381ce"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "b29d3babe1694d192b4ae35bc3f7c546"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "a3613699c36e5a202087aa7cbbee7e33"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "324c40613d4212684d513fbeeb5b89da"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "91242589a9a9a0109185d171d6930e16"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "3af345afb1f33c05643b0ac9b4a870ab"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d7781db1796998f35078592642fc8ae7"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "3ca539db43e8d823dfa19ad03f2b2ce4"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "04abdf627f25f725d71eb31260471b45"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "33b10dbcb6552b263d0c92285b172905"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "e18b13fb55cc5fdced193e048b4c52bf"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "fedfdb521fda0a9a1478728a06739b3d"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "cb15e6a4cb4aca9b68dc9f46f83dd7f2"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "12bbbe6b79316e3ed9fe3947b64930c9"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "f27a1a93cd31eb3c376a1e3fe4849cae"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "f1af6ccc23f0d89c51078162385ca032"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "0558f866035b65e7d6558658527710c1"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "7682e8c3f99cf5f717d0fb26c22b5d86"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "664c9c510df7d304555826d3240eb962"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "88fabc14f969075a329e2d5c48ae8ef9"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "bdef37625a8f858d8ddd609f1ae852b6"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "60b61851e2ee80efb304ef8bd408dc62"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "515112c207f459cfd3e368c24a3f59fd"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "03b330b999ce3541bae824762ec06aa1"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "b61b2341cebbebfe54f1027600757692"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "6eeb73381f27f5127fa45f55f6e08353"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "cc040022405ae50a7efcfa91237cad78"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "98a1eb45b02555d52493c6f99a213721"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "35732d5fc207dc29777a8a323a29839e"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "0925533c8c308c35e76a654cfdc11831"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "fba4fbc61f2845ea26a79d1b8f054273"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "fa542aca083b7131ffd3451f5c981eac"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "80b9b94b86e9d3fdc46f2391564e1294"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "fb5ca1e52ceae32cbf78b59c73e4e558"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "fdcdb907b9892adf880ccd7a68a3d0a2"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "e8df523512101993f28ddb18972cf664"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "2988625e69a5570c58ff6807c3f15e31"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "89ab95afcbc25bd8ea843c3706494c55"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "a547b406f4460955a92a277424cae723"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "6828d011671fe3c10ab27bce7b2993a8"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "c92055c11ad01b64a603b04828904eda"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "2338c3f1d8239e96a405750b4a9fa420"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "6ce8b09486abb5ffc97639bceeb6f691"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "32a06a5c530964e445d15f16d5e6a010"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f4dc2db38e60e7ae18e24caae64722cc"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "8328069688a9343ed8cbe30bb0aceb6b"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "268e30a352e874c58753d844bc49b0da"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "c37d97a0ccff18699b0af25396bac5c4"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "eed1ee35f5e29c81289f8a79dee5b136"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "b544541b352164c8b57eab742e93c3ba"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "2feb7f0f98780ef661449bb2c6f90594"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "da08dea8574b2beeaf2564e3438d754c"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "189423a6b74fce1f0b9f2f5e15c91716"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "edcdfc8cfc5397ded67751e1c0dea408"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "8b47a8e4c639c090daa72e56c11f7496"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "5de388c6f636770d8139e09b36243e8a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "032d6e7c007ba752822ec773165b6b6c"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "32e8d31c800540f72a20ec6dc203b6c0"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "4010cd75f086494545a3abcd79d3ca62"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "3e2562fa50df925c700bb8f0fac4bd8c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "50b69d717a910031490715c244dd8701"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "92482b8b4eef9293046f34d3c0689eaf"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "216ebec745df47958ff2218247cf2f16"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "121deba6466b7d1a9952d4032a4b1512"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "15da56379cf96d010bdc428c9fa93999"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "e80f5fc5b783162a319218d1f97e6fb3"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "33458fd9e4c3a05df1b4fb7c33805972"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "5cfd7af07781c28e5c68cc255a2c7a7e"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "c17fa9a48f9044f215ac3cc3e5bbd97b"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "113c783b19ef1f2090a0e25aca86402c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7625f70bb4cd886483b200a2de238cc7"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "76fe16f85e2360c6b3a6a3f74f360847"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "2a847a333e1900ffbe9a6ac0b91c4c2c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "a45d7795531ac6944f0dd1bdb9f93fb0"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "5dbc9babde7f87a4746b4c1486ea7f00"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "2227349845e4cf46f1e851c1bfb0f4cf"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "760812d669ee915ab1b80da34db57072"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "6d716c2e5c49661f16bab121652da6d4"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "aa55e4585bbae004c5f5e8073ffe8597"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "8b5bc3264cf48fbcfb1decb4bf874be4"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "be542a12a242a720141563c3ef5b1faa"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "6f0990613e547436fd2c91296b10d9b6"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "4bf5ea0af46843e1bfd485e9ec2b1519"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "b73cc212ded70eaaed4733c41477dab1"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "8540ca797ac048489a6c810e6d9fcf7e"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "256c7a35d15ce83be5702074e796929a"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "bad1c7b6787da9555165be566d3ec2ad"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "30582a4a79240488f2359b8b5c34b602"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "8593e55be6b1b64f4182f0fbed965657"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "73c0e220c14567f038b386f5cf7a5502"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "138b016db590933fb785390a619576b6"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "c02ab50fd6b1dd40c6ab864a908d2010"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "fcb3e3e709ec54033e974d401064a709"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "6f9f59f036f45f6982c950ac75a7489f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "ec3f84d917e519e32ca71d31af745a32"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "37a7b4ee04b9202a863847240acf4aae"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "712dff4642391500d51fb9d5c3cc5d75"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "7108538e46521e5fc212ed65deb295a2"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "ff3917b5c20f2eb60e96705d962106ac"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "eebb8296ab56f988daee57a512ad7bee"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "b2c28c28a09f6d60a5e96391112f54b6"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "a1b4564ab6fc23db87c8d19dad27bbef"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "910cf74ca0c74384bab6908e723ccc2c"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "7be9344aeb8b30df12c6fcad7895d407"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "1f5aef0577b4465b7c21b7ccd64f4f85"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "6be47d9c6122f505d1a74ceb81c83058"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "3245a3e339033633d68d0c07239c44a1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "86d0be4bf0663f4bd15d4d3775b5e6f1"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "4723bcfa595945f3965fff75805906a4"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c20cb41ec46478e4fb7edfbef23b0ea7"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "0216b9eadaba6b81ee93cde464b8a1c1"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a77438cfe3875008e53216a5b3ab7479"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "8df952891862f95728bc9533ede5031c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "40f8bb222fd9d97b8c2a83e0d40617cc"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "da2b6c76f9fbd106fe086483dda5acaf"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "2c8540e9227944a077bb254212279e6c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "22be587ebbe696a7a8eaa1e7e76dce3a"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "8d4b63bafa01b104cb5eeac10c9d2998"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "113b2ade674a826eb74f89fb13134ef4"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "b40f4ebafaa1557c0a34ded1ab6b4dcc"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "8a3443639e4987de74946d221b0baf0d"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "ed2818efd4685c4b4d99d3972b561942"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "5e7e32e83007d836f0b67e3364bca8a7"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "e50a38f518cd66165a4e9e4f6745a785"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "9fc213ef914e69f772a4c13e9d165829"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "07cde62fcebc81f600e70c26853d0d99"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "85e24f395bceb0d4c9f7db6432e06220"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "a98500158fa6d807e3cc3a4ff907e15f"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "dab43858ecdbadc8cb4b199e25a74727"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "1c8ce106dc1c42c9c58b1c0d2b349482"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "dc5c3503aeffc5b76d8c75869657f7fb"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "561486965f411ac07392c95fc915b3d5"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "7290777ef12cc8a90a4cfe0dc823464c"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "4351c04916c64a93bfb7f3cdaf86509c"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "699663e6367656b5f4ae099089aaa353"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "26fd07c1479113dba3c52a043eebe964"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "f7432700736043d6184fc7dfee68ba55"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "7e38d8fe359389bf3e1b56ff0ea90669"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "f5e36ca2853d83c71f89718621aeb395"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "5fd549522fe1ac10653d585d8581b1a0"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9e1081d8f55a33b5bd2acfc6638c06e8"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "57f16aff0af9d18f08c2b90e932a110a"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "fbda6dcbaf5ac575009c7473885cce83"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "eec3f2ec34a4237c8006740a73f1e147"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "564755a9f80a1d7cf9b342d893b774e1"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "2fde1a6926141288cc4c7eb75977ec85"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "f3a0452e0dd18ea64eafd396324db45b"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "e8ba05f5016cfafac0b7b2c86a294310"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "2d0ed8d38958b59b720b17b1b93895f5"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "4f1f5fdf8bcf31ecd8ec0c7f091f2801"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "730c71aa901075024db6e162118dd4dd"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "2157382e36c423a6159ebc14f5349386"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "71bdfd521843574d29b24512bd10475e"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "02a99ac40e9fbbd581a22fc5fc09fa06"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "f27ef4d874fd5bb2871d1e05edd130c7"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "56a0b5d0b92caa253674ba2ce5e9b5fc"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "f5f6c2023606ee3456fa9c63c6ff0e2c"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "a95f05137f0769cfa2e9e05d162838b8"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "23694a82022bde5a04b6fc846541bf25"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "2e0191d5b36186fe7fdaf03cb0cfae6c"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "da0169d051376191824d0c130524d8d7"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "7e4ac812f2259200078b95a7cc7d0f11"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "b7a2c504ccaed501e196345dc7d3fdc8"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "03613d0a292c96e9239278dab61bc985"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "9a1da3dd248cb2d1e73752a159076b53"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "440a9a0c1dfa900481a9d6568ee0f63d"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "26bdcca540ec5d38f6d347cb6aa30499"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "20cf9cfb90ad7cc90b658c916fee9fb3"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "27ca4140997cd9544c03edc2b35d697e"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "f991619da9281aec185dd4e0dcf48a8b"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "b9f3c61e76484376e6df767e144d7e87"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "0fe4923f7bd3418249e099c83b0cddac"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "7adffb685d54d11227e2ec7aed46d03f"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "7d615c7da6b8533453f8aadde0b001eb"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "41dca71721af611ff55789400a87cb29"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "480bf2a051e8b42dbb5f1f963443f4ae"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "0aeddedc11907d5f78e652bb9c863ef2"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "ed5ec3ebc7028896dfe59fd75e840834"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "274114a5b9565c000eff6d74bd384816"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "974e8570119a5d4a950186e11f411b15"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "4545bdb294b39f11eabe633ecc14cf23"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "28383ac65b6cbbded6797a78aa41d59c"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "ffcb7493e8a568fa7d581013e2b7c499"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "8a0db323656101a00b97bb7176271e4f"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "555c600ceb45caca723a3a8ab048eb02"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "9267d144f9443c39b66de0182d00ed3b"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "df0508a349ca795a80d05f54eef50eb9"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "38c847db441ba1c5eb759b895b1e4fd2"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "980b90dd95dd28739b2d49b905549399"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4e7925b4617cf99b99237b0d41fa02b6"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "9e6743c26ee226471880be32d8adda36"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "d3091dfa2457c33db64178f66f688d0b"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "c979c7f784c354fa8eb15b5c58abfa68"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "27d5c6744c02a7d8e2c8d38c439fd874"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "5e1def38352e539eab8ad73922fb3d7e"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "de311c3a27948e6f4402721e6313273a"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "be8556f46cbf0c0be994502eabd91e80"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "8d446d5bc4d32f14798db767cfb74ffe"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "380dec6229a0a309337b4dd25f91b8c5"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "9e9da9b5fded2a5fdcc272c0ba301e6c"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "b4d7dfa012386ddf79ecd0c7aeb60190"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "38ec351c51b136aafaf31d4dca7fd849"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "ea721ad04fe20e316db49ca5b71c20b8"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "f4a48e7455d57f9324bcaccd433bd2e3"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "ef15905cc0c0515da0c7deebb74d9c5b"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "8014d82822301aca4b1fa6d52a5b718f"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "8586cae61a4f31d318882086b90ff0b5"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "95779831444e1a668e2860de977ede2e"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "b7cff467ff032d14a5ad2c8ce0f431c7"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "d61a05b987a3cb44d8b1eb744c6d57b9"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "11db538ec5bfc76211df558876354b70"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "f1dca29e40e547de8087ebd841b4b45e"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "f8c2e8a99db679be1966fadbe37f17a3"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "4c0ed69714b1538597b67980182c6457"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "95960d1aa403cc0729a73e660b3066e0"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "a6ccd229e1c71205b45c9880686b7a36"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "514e32d8628f0fa15a31380250793b6c"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "d48843fc61c6ddaf5425755cc2057785"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "83623e9fd232c031e0c76ee9de8b1547"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "bc2e20412379263628a34b1d09b4a441"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "203c6745f6bcff2966ba022931a65e97"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "237bd0bfaaec6013a530ce1108a0eaa1"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "2f3105af4d83e3590042c3bc054e91e7"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "eaf136d1cd775153519a8743c7466a7d"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "5267d215cf5561512500bad50f644d04"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "7110c6e22d2dc54f58dde56e4177c0c6"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "f777896541471ca966e0a7e18577e53d"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "432a373e08208efe6a6afb606a43b9a2"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "681b22d97754ad7a6a90e60bd811995f"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "6cba73325844f6b8c8aabae8dcfa79ce"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "3a2a3650dd6566122b24b423a786ce4f"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "6273d5f22077491eddfd4e39e83f989a"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "9cff2122c2e3906949c08167e22c089f"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "a65485c7bc6917237306f9aed154b376"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "a1bb73ff165787b439a3522268d67ff9"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "5b0f93c4afe04fb404f1c4a35a2ab8e7"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "fa20a6a020614e5cc5c6f45f7270de7b"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "f866b36a0748967ab36b2e57d2ba8935"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e401bab342b0712e2ec2b4d9199dd825"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "bcbf2c0ad1a59ec0628c9983a186e88e"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "d44ca10c44682783fb417e40f281f34b"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "243d022aaf290b82ebcf006d7a3a7a7a"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "eb884e222eccaa250f041d7f234b3a9b"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "31c1d4c62893ff817d9e83a857fb4012"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "5f3a8b6153c19e3caa5c656bd228146b"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "b7b6731ac6946bd88e007e5211f8ce73"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "a130439c15463ba833a94bfc73859cf0"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "2401c7b577c5a00b0bba98f47006491d"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "66ea076f6371464922f78f994da731b4"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "d92167d804f5dfdaca776d9ffb7d24e8"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "f3cf148b9abb01f394d85291353937c2"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "06503a4e86d9c7c33f672c19defd8300"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "fa000c36f78d2c50fc36bbf69911ed58"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "ca65abefb0011fc7c315b95bb10d5b7b"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "0e6d85c30a9f26fc813695e82b47381b"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "5b166bbbdc5e87d9ef1d6b8aa2da8e32"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "06c9fe6ebaebf64ae0bac3b35f804df2"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "21592a0835cfa35919452f9221328d9b"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "ae87dd278f936db7764e4a8a257abe41"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "2f94973719badb9de6d6b13e656e313b"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "23435c4ffc1f06d4e75ffe0482da328e"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "93d1f71c3f3014a5450a44b7ad3ac5de"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "7f1112e871c8ba49b369bd2d93f5e1d3"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "4f3b4c77dc56635eb8aead0507d1fb38"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "40f5a0347b0da4fddf09414be67bfb82"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "ceaca00df16ec58c5e6590867aa4b8d4"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "bfcd0d18a8731b8200e33dd4bc417d34"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "2f58641b938c7673995ca6c6f53fa0a0"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "6377cb456de88a44063a8069e9097ac7"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "00d303cd8c9a4b3e13cf766381c57103"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "3f04ba3653c1a0f4ec25fa62e4b42389"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "c641bac888eb9387ca0b14e9c5302c86"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "c3365df6b4be47bb86c87cb02e347be5"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "b3eb7e3d4c2d6f58e5fc5e30dbd9d50f"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "cb1c4a0138556d61f766f913c43a84af"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "814019bea4905012e58097a2fc7d1838"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "8ef0494051e08567fe44e2bd1d3c405f"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "469f070055932ef61c11001f921d147d"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "c00d1806c1125b2c8effdecd2f967399"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "42bd183f9311ca2326b5f72bc65fe6e9"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "95cb758f48a079f5128dd5f32e78ccb5"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "d969fb74b75624a471e726b45baf7b36"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "652fd8215f752f583b25950ca8be457b"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "a09753bc0b23a1a1b36677d00f9d0abc"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "a4068d9f3306288adbcfdffcf489487b"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "c0432dfb21d8704c92b116e0ef9a84b1"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "2e9bab6f795e3ec1ae8418090eb8a0c8"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b8e819f95f51e21e48e5d1a351d31491"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "228c23d31d2ffec2fdcd8495a7f00ad0"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "5114cc6d4681c80d155c54cabb181d69"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "b154f401593ba6347849296d2d486eba"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "604799b7153a6ad78cee437bbf4c9a0f"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "eb3afd92adae7fa5bf5c8b86eb0a15a3"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "2710cba5c1fa8eb84f0c78c4438c5976"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "249676ed479350e78c021bd999f7e088"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "01bccda90c633d1e8c543f5d08d7f6bc"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "cfe59ea2a05615a6802dd4727b33806f"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "cf70360ead3e8a33f20b87ce5f6ea924"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "9842f9d393f29be41bb43095a33bc6f4"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "7e60ecf40d2f18da928a1ff573eaca71"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "7d97ebddafc4f3fb32366d4e5be94051"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "11397c2ebb9c2fa8c3f62baefa7d95b9"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a7913fe81bf30a82268884fd60fcc5d6"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "48c48af9ab2252620689dd9a665ad045"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "af6304e2b546a105cd89fb0a3c63891c"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "c3c953fce1194c86b93c6f48e180ff0e"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "2522e4eeaab5c3685a5bdecd2c101bdc"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "c8140d002055e7a7cc9020d3128139bf"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "67044f8e388e191205a716d7864f3bfd"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "ed372d2e3eb7135e7d8bb4cee920c64a"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "f12963281c359b2b0fc37ec263d378c4"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "364e110eed7b5530f75ad474cbef225a"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "4808b4ebe7bdc4888193860e415ed46f"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "98d02d5640f98c1eb81160dd38ec0490"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "1fa5235ee95bb2f4882e3377d3b1b2bc"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "ce5c737b7bf4e24588ddf614e1894b25"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "85be7e8231703484c0aa5c13e4572aec"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "e3e8313efe35c5f360a518c1540775b5"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "05f53dd434f88cb9dfb5630fb73e11f3"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "ff425444388e86552f221a8b318afe3e"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "088abf37d0eac075755eb627e374ab3c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "bc4349421aafad3cadbc12b43b4d04f3"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "15b402996e7920824685c15f8a2559ca"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "16be5b6f9650b9299ea84635e91a922e"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "f540ff589342b4ec0d5677df4ad72038"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "9c94f0896cd1387be38af2569e27c7fd"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "8f4dab4c24283eb267ba2fa9b4345013"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "17cda13e592706767444593d63cba9e5"
  },
  {
    "url": "404.html",
    "revision": "f51c80994450c53072d433150d1d0c87"
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
    "url": "assets/js/1.32a4a03f.js",
    "revision": "ea1d95853346ebd4d0b944a34cca1da6"
  },
  {
    "url": "assets/js/10.c2f9ce88.js",
    "revision": "f308f64b99681cd0eef8b53b30b523fd"
  },
  {
    "url": "assets/js/100.1f823db8.js",
    "revision": "e77ac9c19b36601c898022dab7aed565"
  },
  {
    "url": "assets/js/101.03108768.js",
    "revision": "85d91e6a7d64b137321ce248ffbe63a6"
  },
  {
    "url": "assets/js/102.cfc6a39e.js",
    "revision": "eb31314195beceea9cae56fb0f11dfab"
  },
  {
    "url": "assets/js/103.b1c8b709.js",
    "revision": "b9a3f1f0092b5fd1b73e096264c275f8"
  },
  {
    "url": "assets/js/104.7c175f77.js",
    "revision": "f7e79250aa8342b7bb92a09f57227ad1"
  },
  {
    "url": "assets/js/105.8a27f445.js",
    "revision": "1e9bf2a44dd0c50d7857ed4307f900ad"
  },
  {
    "url": "assets/js/106.692f927e.js",
    "revision": "2bf144ff7a55e05495b46543c84d99bc"
  },
  {
    "url": "assets/js/107.1fb782ba.js",
    "revision": "afabbf7758f819d7d9a0527c668e5e3c"
  },
  {
    "url": "assets/js/108.0c88d036.js",
    "revision": "1d30b1c64aa121e438f00013c2b1a6ed"
  },
  {
    "url": "assets/js/109.7bf6fe3b.js",
    "revision": "e89d469e77181912af3ce95226020e4e"
  },
  {
    "url": "assets/js/11.259ce328.js",
    "revision": "88dbc306acdf7c663c94d880310be42f"
  },
  {
    "url": "assets/js/110.b359980c.js",
    "revision": "fedacdbc5da089e810daa04ed15d8bc3"
  },
  {
    "url": "assets/js/111.28e23872.js",
    "revision": "8247091c5040f8951c9af3786daa51b7"
  },
  {
    "url": "assets/js/112.9c1a2b18.js",
    "revision": "55141cd064cfaa3eb490992b38e324de"
  },
  {
    "url": "assets/js/113.55873ddb.js",
    "revision": "4ef5520936a9b5e1c45334c53072db41"
  },
  {
    "url": "assets/js/114.ce8657df.js",
    "revision": "c40b464f6e73e1963522a6d8fa19d254"
  },
  {
    "url": "assets/js/115.942dc607.js",
    "revision": "898f775c86cf7a5422ec7e06bfc5bf55"
  },
  {
    "url": "assets/js/116.182f8087.js",
    "revision": "70ca9f841c175ae2d2deef847ac8d166"
  },
  {
    "url": "assets/js/117.9b00253b.js",
    "revision": "2065a2201067933565fe538863f3d1c8"
  },
  {
    "url": "assets/js/118.8a548c2d.js",
    "revision": "f6fa5b2a46c0df804f8fa648bdde2747"
  },
  {
    "url": "assets/js/119.fbc66bb1.js",
    "revision": "a4ad986cc5edb01833fa136b403a2f79"
  },
  {
    "url": "assets/js/12.9cdb6b75.js",
    "revision": "ff61a87accda47e17a9c3df0cdb35dd5"
  },
  {
    "url": "assets/js/120.2c7e6792.js",
    "revision": "1ecd2cc33c0067ded9384534e6d299c2"
  },
  {
    "url": "assets/js/121.7661d950.js",
    "revision": "2a26e9b22993101753b1eac5578f8521"
  },
  {
    "url": "assets/js/122.76163310.js",
    "revision": "9dc16d6f6eddbac3db6ded21d4796a93"
  },
  {
    "url": "assets/js/123.c1b29b6f.js",
    "revision": "9d7ca7591773e4aa4238dfa6c042b8ee"
  },
  {
    "url": "assets/js/124.941a18cb.js",
    "revision": "ef0198c9ae3d4f408c877d8ef57be1b9"
  },
  {
    "url": "assets/js/125.1cce9c2e.js",
    "revision": "4defd1ccc297d657cb7c4ac3176eeb2f"
  },
  {
    "url": "assets/js/126.8d7cd8b2.js",
    "revision": "b2527b2613cf9c121a14eb427c06bcee"
  },
  {
    "url": "assets/js/127.cf787e37.js",
    "revision": "77fb63d7f3f1ca91e090f89f6c693224"
  },
  {
    "url": "assets/js/128.e066c6fc.js",
    "revision": "7c72e7bdd68db82d75a8ac033f6f183c"
  },
  {
    "url": "assets/js/129.1940ad69.js",
    "revision": "99194b65b24e5940f8bf4c8ac312562a"
  },
  {
    "url": "assets/js/13.451f8827.js",
    "revision": "76b40642cfbdc529c9b486a644908d18"
  },
  {
    "url": "assets/js/130.92095470.js",
    "revision": "27dbf213ba2182214d09af74415357f5"
  },
  {
    "url": "assets/js/131.554db9e2.js",
    "revision": "1065b3f230057a6fb8aff5e95c09a3d3"
  },
  {
    "url": "assets/js/132.8ee0acd7.js",
    "revision": "3b3327b56d5eac55905c60d426856ff5"
  },
  {
    "url": "assets/js/133.2c16be10.js",
    "revision": "9781d2322cbf102d54aff54b14eb572d"
  },
  {
    "url": "assets/js/134.9a260eeb.js",
    "revision": "34c8bdb580c8e8509cf4c27e3f65482f"
  },
  {
    "url": "assets/js/135.f68e6886.js",
    "revision": "afa5868e6a1f4ad9b38409e6dd8b4611"
  },
  {
    "url": "assets/js/136.111f4388.js",
    "revision": "8e67053f2df61c14e6d5dafcea4b6e35"
  },
  {
    "url": "assets/js/137.fba626f9.js",
    "revision": "00c7a22f1994ef52e5de5e216551877d"
  },
  {
    "url": "assets/js/138.b2820ebd.js",
    "revision": "77de4afe32bd41e2d7c359faaf15b161"
  },
  {
    "url": "assets/js/139.dd1d4fe9.js",
    "revision": "5df9a60cd044a99fe829039d2af43ce7"
  },
  {
    "url": "assets/js/14.2552a06a.js",
    "revision": "5ecbfb3ee1a6d3acc1d26de98cb015f4"
  },
  {
    "url": "assets/js/140.4c6b921a.js",
    "revision": "10668da430b06b7b73dc934c601a7d10"
  },
  {
    "url": "assets/js/141.db4b2b15.js",
    "revision": "9a15db3aefc8f5bc6fa9b35fd6b60796"
  },
  {
    "url": "assets/js/142.d37dd220.js",
    "revision": "fd159ffbac26633135c629e8c3f37f68"
  },
  {
    "url": "assets/js/143.ff139a64.js",
    "revision": "1b02993ad2101fbe93ffec78916ec572"
  },
  {
    "url": "assets/js/144.e63d0424.js",
    "revision": "82815c038c1ef2491923132f4e1a8a58"
  },
  {
    "url": "assets/js/145.aff5befa.js",
    "revision": "49bd44bb2a3f1c82df7e432cd8cc4d04"
  },
  {
    "url": "assets/js/146.9369697a.js",
    "revision": "2081c089c6ade5f1efc4f1ce9cbd7b74"
  },
  {
    "url": "assets/js/147.9ebaea3f.js",
    "revision": "87efa4512a9cf6d510499acaafff6e99"
  },
  {
    "url": "assets/js/148.2849e124.js",
    "revision": "b7de27481ce1fda911f0b9f599dace89"
  },
  {
    "url": "assets/js/149.5f8876af.js",
    "revision": "7b00c259f37e555da4c0e8e426d7ee8c"
  },
  {
    "url": "assets/js/15.60ec94d9.js",
    "revision": "c6c427754b43a2187ea56bf98d9ff608"
  },
  {
    "url": "assets/js/150.41db3b88.js",
    "revision": "17499afa59cd5285433a869b1e9550f8"
  },
  {
    "url": "assets/js/151.925970fc.js",
    "revision": "bb537ed1321734894d92f936974baf65"
  },
  {
    "url": "assets/js/152.0c63d372.js",
    "revision": "f1452cbc52fd2dc25608e54f4b079f0e"
  },
  {
    "url": "assets/js/153.bd57b9ca.js",
    "revision": "ad47a408408d3a94e95e0a2773a48b1e"
  },
  {
    "url": "assets/js/154.1797be3b.js",
    "revision": "9802fd835485ed92f5bf6f95ab61ebbd"
  },
  {
    "url": "assets/js/155.985577e0.js",
    "revision": "33671eccf13bba08ab152e48b5d12b0e"
  },
  {
    "url": "assets/js/156.acd2f9a5.js",
    "revision": "76251b461ca857c43fb2b409a08826d8"
  },
  {
    "url": "assets/js/157.4e68df56.js",
    "revision": "7ab81838ab7a164a655070cad312fde3"
  },
  {
    "url": "assets/js/158.a67521cf.js",
    "revision": "6446113ef5e0ab40a0a4e9189dbde467"
  },
  {
    "url": "assets/js/159.47a0efbb.js",
    "revision": "209088ed7e9ffb3ecdd0904f8392ad30"
  },
  {
    "url": "assets/js/16.cf64637f.js",
    "revision": "75dfd2f7393e62a95964319ffae70b35"
  },
  {
    "url": "assets/js/160.577150f5.js",
    "revision": "05abc02bf144264fe061c4d275592908"
  },
  {
    "url": "assets/js/161.37bbc2b6.js",
    "revision": "74741b86498131ef8463a2bfa32647a4"
  },
  {
    "url": "assets/js/162.31c0f2b0.js",
    "revision": "4d6049c1a2db72f4c81388c038b59da3"
  },
  {
    "url": "assets/js/163.4746912f.js",
    "revision": "b8897e536093b93380e55e8e397f7407"
  },
  {
    "url": "assets/js/164.4f2da450.js",
    "revision": "7ae1b7d5b66694556560849909b188cf"
  },
  {
    "url": "assets/js/165.e8abc610.js",
    "revision": "83a89bc7d536c227f6f27d4f1b67bcda"
  },
  {
    "url": "assets/js/166.9698604c.js",
    "revision": "2c8b5a371bd8c77626ed679eb6b757b2"
  },
  {
    "url": "assets/js/167.9bb27f99.js",
    "revision": "cb09d469035b099f3075f80234e80115"
  },
  {
    "url": "assets/js/168.6327f10f.js",
    "revision": "3eb16cf91731a25735ed04c6bde2c73f"
  },
  {
    "url": "assets/js/169.d62552ec.js",
    "revision": "a8993033b789d79c7ce1ffabd7bdf991"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.07794020.js",
    "revision": "b2fac4c5a339777e1f5cac9ab9a8e420"
  },
  {
    "url": "assets/js/171.38d3468d.js",
    "revision": "fe7a1a80e82e3416225ef51f03b5e400"
  },
  {
    "url": "assets/js/172.c60965bc.js",
    "revision": "c53ecfd5437cc59cee41d9f4dd92d8ef"
  },
  {
    "url": "assets/js/173.7c9f75a2.js",
    "revision": "626b50ceb3c88913affd69efda3f91ab"
  },
  {
    "url": "assets/js/174.ff68acc0.js",
    "revision": "6989e16b64e4eff1fae17174d947c89c"
  },
  {
    "url": "assets/js/175.4da1e720.js",
    "revision": "fdf0c4592891bf28dca6558558a20f50"
  },
  {
    "url": "assets/js/176.c37ac5f4.js",
    "revision": "a464f0d6eb2660713b2c0246387af5c8"
  },
  {
    "url": "assets/js/177.93c6dad3.js",
    "revision": "eba95d9ad1ffdb3b4515aa146f3773c7"
  },
  {
    "url": "assets/js/178.ceadd44a.js",
    "revision": "1f8f8126d1ad015c7e0ae52e1eb4fb06"
  },
  {
    "url": "assets/js/179.94027166.js",
    "revision": "b4c55850a1e7a27ebe9f174b8ba46bac"
  },
  {
    "url": "assets/js/18.f909eac5.js",
    "revision": "b55e08f2bf7319ab365166ffb536c77f"
  },
  {
    "url": "assets/js/180.e9fe5aec.js",
    "revision": "d5a4eeec3de6c7a8214b7d692ecf14f1"
  },
  {
    "url": "assets/js/181.e36e5bed.js",
    "revision": "f11bc10acc37e69d6e6701dbf95e4d89"
  },
  {
    "url": "assets/js/182.bcd050d8.js",
    "revision": "1e887a66026f18049062ba1f96beab4d"
  },
  {
    "url": "assets/js/183.41bc6e0b.js",
    "revision": "cb4a51509f84218fa5831055e2889274"
  },
  {
    "url": "assets/js/184.87ea0b78.js",
    "revision": "f8439cf0574f2c26d3d0389f5f095fca"
  },
  {
    "url": "assets/js/185.f1013321.js",
    "revision": "fd776ed8e7d45f6d10689c69a1a57948"
  },
  {
    "url": "assets/js/186.9e0cf957.js",
    "revision": "7d54291322b99f8ddde7d5f9eb79afb3"
  },
  {
    "url": "assets/js/187.16f32c06.js",
    "revision": "4dd51a52012f7dd769493a62d63f0e29"
  },
  {
    "url": "assets/js/188.830c417e.js",
    "revision": "01c9bd3dc82f43fff0fc24c008c655e1"
  },
  {
    "url": "assets/js/189.35d7e927.js",
    "revision": "92aca6b458e7493bf99e9264ad7307b0"
  },
  {
    "url": "assets/js/19.f11ba04f.js",
    "revision": "f4b2254362681b4b76aaeaf484b53424"
  },
  {
    "url": "assets/js/190.58fe20cb.js",
    "revision": "460569255ad30d5d05eeefa4da76a638"
  },
  {
    "url": "assets/js/191.2e64d418.js",
    "revision": "50652199a67999aae2abb82432592cec"
  },
  {
    "url": "assets/js/192.875e77d2.js",
    "revision": "d58a315a283fe005fd1110c1b268721f"
  },
  {
    "url": "assets/js/193.8b3b9dda.js",
    "revision": "e3189a70e623e664d0a7cce1938f3c60"
  },
  {
    "url": "assets/js/194.d3dd9912.js",
    "revision": "85c26eccde98bdfa6050a7e513625441"
  },
  {
    "url": "assets/js/195.22e97f45.js",
    "revision": "153259d79c12047f84d9bbe4443daa15"
  },
  {
    "url": "assets/js/196.00ab52ae.js",
    "revision": "bd1a22ee3bd1f4eb3259f76f01875037"
  },
  {
    "url": "assets/js/197.3b457321.js",
    "revision": "c8a6a0fe1a3cea40abe346c8ebe45a93"
  },
  {
    "url": "assets/js/198.25a1035b.js",
    "revision": "c84acce56084d7b0ea5749de610c9d9c"
  },
  {
    "url": "assets/js/199.935bffe3.js",
    "revision": "93bdbf146c7b4b63fd66788b8ee32498"
  },
  {
    "url": "assets/js/2.ccfbf4f4.js",
    "revision": "705d5a4a214f6e046edb22e84b6b2b8f"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.33bc497e.js",
    "revision": "810f9be2612fd95550793003c11fcdc0"
  },
  {
    "url": "assets/js/201.1c0af667.js",
    "revision": "fa23731bbaee41460060de87eefc0503"
  },
  {
    "url": "assets/js/202.28b2e181.js",
    "revision": "fbe76a7ca76ef6bdff6b405ccb356a2c"
  },
  {
    "url": "assets/js/203.117d9639.js",
    "revision": "8ea7e1c7e11eae87bbb5998ad4202b97"
  },
  {
    "url": "assets/js/204.05567764.js",
    "revision": "bb47a362a1e535bf61c6130efc341ddd"
  },
  {
    "url": "assets/js/205.2930435c.js",
    "revision": "dceebd8c440f2fcb411980d9af86ef81"
  },
  {
    "url": "assets/js/206.9e3e1c8a.js",
    "revision": "d944f50a510ab9e1e10d0f43745c53e7"
  },
  {
    "url": "assets/js/207.8799ea59.js",
    "revision": "30f94df3f56ee3c276e35930d08ac2b9"
  },
  {
    "url": "assets/js/208.165fa141.js",
    "revision": "b1f04c3e728b054659814a32b14068ea"
  },
  {
    "url": "assets/js/209.c15644c0.js",
    "revision": "7163404b52b6e5c741610984a6dedf3d"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/210.9190e265.js",
    "revision": "69c632ef05db3dc6f486a8e7ca03c00a"
  },
  {
    "url": "assets/js/211.1d7654dc.js",
    "revision": "1e402abe357a343a654f087a0b0d9cde"
  },
  {
    "url": "assets/js/212.0ab22105.js",
    "revision": "32b7cb5834a442203608c1f40ef8bce4"
  },
  {
    "url": "assets/js/213.2485b477.js",
    "revision": "e94873a183ceba9e63358a17d44e19f9"
  },
  {
    "url": "assets/js/214.93e622d4.js",
    "revision": "af6653fca7f0d0ca35ea4dde93df187e"
  },
  {
    "url": "assets/js/215.8fa88de8.js",
    "revision": "9a13b2b499ecc36147063cb0b319eb0c"
  },
  {
    "url": "assets/js/216.701f21f4.js",
    "revision": "eeb77c9d3a94b2c6105f5369a9691bf3"
  },
  {
    "url": "assets/js/217.c5f2d7bb.js",
    "revision": "2991f60ff1c766e80ad7e7b6ba05d5c2"
  },
  {
    "url": "assets/js/218.8bb971e9.js",
    "revision": "d017959ed81716986d05d9455c76b084"
  },
  {
    "url": "assets/js/219.41fb5915.js",
    "revision": "75253a5e2d0758504e6b9a69a03d30b7"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/220.c5749561.js",
    "revision": "62d89670575acbc45736c808c8a8a00b"
  },
  {
    "url": "assets/js/221.16502f5d.js",
    "revision": "3f93a061c9f2fefa8517a609d48d83f0"
  },
  {
    "url": "assets/js/222.24866adf.js",
    "revision": "9f0c5d2ac557727a0a3695abd759000f"
  },
  {
    "url": "assets/js/223.fa839ac0.js",
    "revision": "5e5088ea37e72435a3fcc36a7a47a76f"
  },
  {
    "url": "assets/js/224.6e42564c.js",
    "revision": "7ba79b17fcf9ef6e22db667f5cddbcd1"
  },
  {
    "url": "assets/js/225.c47ab4ce.js",
    "revision": "3759229b9a4d1a54c6ebd289bfcdc17a"
  },
  {
    "url": "assets/js/226.2c279a2e.js",
    "revision": "a86ba92d96c7e59fa9506534945a2288"
  },
  {
    "url": "assets/js/227.8db8fd68.js",
    "revision": "b6fbf597bf5116de334eb31a08d1db7e"
  },
  {
    "url": "assets/js/228.9600718c.js",
    "revision": "295e01c9b125961765b6c764a5af45e7"
  },
  {
    "url": "assets/js/229.99e38a64.js",
    "revision": "e4ec6df36fff07edeafc556c8fd4fbdd"
  },
  {
    "url": "assets/js/23.d517fdb6.js",
    "revision": "41d2ce4a3f295900d7fb0f8ce32dda11"
  },
  {
    "url": "assets/js/230.928d5558.js",
    "revision": "2dbe626ba60b8b6558db73bbd91e9e90"
  },
  {
    "url": "assets/js/231.bbe42610.js",
    "revision": "40e492c74cf0a70774aa1fced5d1f7aa"
  },
  {
    "url": "assets/js/232.78fe250b.js",
    "revision": "d16de4f81c3e397b7b23c5507df38a2a"
  },
  {
    "url": "assets/js/233.481c8518.js",
    "revision": "00a2740695eb61f4c1978a2581629138"
  },
  {
    "url": "assets/js/234.bebe87d6.js",
    "revision": "d0bfb8e884a5bbd98955f878a037c8a7"
  },
  {
    "url": "assets/js/235.9a3f3a37.js",
    "revision": "c261764a40cebbb231fe81fc0c76ac90"
  },
  {
    "url": "assets/js/236.f1f88b92.js",
    "revision": "25e9105c4536b28a5f4173069849cad7"
  },
  {
    "url": "assets/js/237.8a3feea8.js",
    "revision": "1c933a5dd0c31e3eacd1e3ea91b1e82e"
  },
  {
    "url": "assets/js/238.1e319f84.js",
    "revision": "8c2732f380c6026edf72af3f5afbb45f"
  },
  {
    "url": "assets/js/239.7aa801bf.js",
    "revision": "9febf590f6ab17ee4fd04d4f97ae5f12"
  },
  {
    "url": "assets/js/24.b85d52e3.js",
    "revision": "cfb244bae4b8cb7807367837d095fb49"
  },
  {
    "url": "assets/js/240.987f9d2d.js",
    "revision": "b4f28fa991683e24bd7dfadaaf057109"
  },
  {
    "url": "assets/js/241.a7d7e0ac.js",
    "revision": "6debc76187d7b06c6cffc8f5f3ed256c"
  },
  {
    "url": "assets/js/242.e57a4db9.js",
    "revision": "6d492be70f97b1bc80e5b263d60a8544"
  },
  {
    "url": "assets/js/243.a0acd7e4.js",
    "revision": "23fa38d573ba54f04debe78dac81a674"
  },
  {
    "url": "assets/js/244.36d3998c.js",
    "revision": "8010942347bf0059236940816f5945d9"
  },
  {
    "url": "assets/js/245.581f3ff2.js",
    "revision": "2f72ac019f79daa0623be68e1520b0b9"
  },
  {
    "url": "assets/js/246.bdec146c.js",
    "revision": "760d4439a4b42c4a685c4957919ef073"
  },
  {
    "url": "assets/js/247.e1c98c8c.js",
    "revision": "2cbee0898fc17529b7f5a288b5afdf67"
  },
  {
    "url": "assets/js/248.2a4118f9.js",
    "revision": "5a02eaede008e1f22318e944de0e98ac"
  },
  {
    "url": "assets/js/249.cd40451a.js",
    "revision": "66a33c9ee9f0f46ca3ffa8cdba7cfc2a"
  },
  {
    "url": "assets/js/25.77d39222.js",
    "revision": "f435f10ad1a52c164613a3bd469f0255"
  },
  {
    "url": "assets/js/250.6b7af074.js",
    "revision": "153f48ea23848b6fb24aba8daf0259c8"
  },
  {
    "url": "assets/js/251.175ce20e.js",
    "revision": "b97534946b7f0c053bc6c3b406dcb3e7"
  },
  {
    "url": "assets/js/252.320e9dc6.js",
    "revision": "b2b73f2ec35e3c5b3f8a1f8ae64a05b0"
  },
  {
    "url": "assets/js/253.64bdda30.js",
    "revision": "5d1fdfcafd244688626a0307fb82e754"
  },
  {
    "url": "assets/js/254.feac4349.js",
    "revision": "e0c9230377fad72b3d77c6cf3bd90b94"
  },
  {
    "url": "assets/js/255.e318315d.js",
    "revision": "d432932448eae78b1f2ec93f669336dd"
  },
  {
    "url": "assets/js/256.2d297fab.js",
    "revision": "c7c5d90503cc64d33d2a3eed88d46e3f"
  },
  {
    "url": "assets/js/257.d2e44b9b.js",
    "revision": "257716adc54b98810585ba90f144f6cc"
  },
  {
    "url": "assets/js/258.2bf8095b.js",
    "revision": "ed562160c50e3d209bb207acdf022d84"
  },
  {
    "url": "assets/js/259.57ccdaf0.js",
    "revision": "077377135d46c387bc719f6c88dda6d3"
  },
  {
    "url": "assets/js/26.5051cc3c.js",
    "revision": "f4bd5983389e92f3113fa681061ce2ef"
  },
  {
    "url": "assets/js/260.c4811b7b.js",
    "revision": "f1431de1d2355000fbdd2a840cbeb9ce"
  },
  {
    "url": "assets/js/261.7cdc7687.js",
    "revision": "ef7bf85334170dabf8e3c20f3eb5035a"
  },
  {
    "url": "assets/js/262.69c2880e.js",
    "revision": "3cca28123809272a91f012bc478fb549"
  },
  {
    "url": "assets/js/263.9e406ad8.js",
    "revision": "618eabc95ccb5b1afc7d03518f45cf15"
  },
  {
    "url": "assets/js/264.782979aa.js",
    "revision": "dd71fc87451f3e6e63dcf28289ec5144"
  },
  {
    "url": "assets/js/265.8ad3d8ab.js",
    "revision": "1976b3207b31e4b3e97b477b0b6e259a"
  },
  {
    "url": "assets/js/266.67681d17.js",
    "revision": "c11e0c64f503abbc17edcb16b34403cb"
  },
  {
    "url": "assets/js/267.70e34f88.js",
    "revision": "333395b2c94b1120606b49ce0ba37b1b"
  },
  {
    "url": "assets/js/268.a096ab4f.js",
    "revision": "4044ad3fc03abc7fb469f2fdd6318155"
  },
  {
    "url": "assets/js/269.573fd480.js",
    "revision": "1bc615cc711e9fa9fd9205b9fe5fb064"
  },
  {
    "url": "assets/js/27.e8cc4b38.js",
    "revision": "b8c2f991f4f5021b898378847e6d9bed"
  },
  {
    "url": "assets/js/270.0572c255.js",
    "revision": "e7fda6b21fb6e4ef998e694259195d64"
  },
  {
    "url": "assets/js/271.a036a2d9.js",
    "revision": "17e6ce09e8e3dd9f4517d1833065eae7"
  },
  {
    "url": "assets/js/272.e6d4e1bb.js",
    "revision": "077145b09d225633feb07bbacc6ed5bb"
  },
  {
    "url": "assets/js/273.41e4f105.js",
    "revision": "22f3df5bc79d9760890f025c9f40ca5e"
  },
  {
    "url": "assets/js/274.fd5d3253.js",
    "revision": "ffa0ae956166d006548f429a1b518d99"
  },
  {
    "url": "assets/js/275.6c03b8cb.js",
    "revision": "d74805af9affc489024730a0d7cbe8a6"
  },
  {
    "url": "assets/js/276.69c4126b.js",
    "revision": "fcab2bdce81d944cee35f9b6634f7be1"
  },
  {
    "url": "assets/js/277.011fddd7.js",
    "revision": "c9a6a7dc6762f3673036ca77e1daec95"
  },
  {
    "url": "assets/js/278.12bdfaf4.js",
    "revision": "327efb4cbf22a1b34916290f3c9a3202"
  },
  {
    "url": "assets/js/279.5b674e31.js",
    "revision": "96959c80d7f2c549c8de83b719902e8d"
  },
  {
    "url": "assets/js/28.f81d6c09.js",
    "revision": "7a46199e1eadf487894c723b31c08458"
  },
  {
    "url": "assets/js/280.1de6b2f6.js",
    "revision": "5b93220b26f49169f8f0448fa16f51f1"
  },
  {
    "url": "assets/js/281.9a371bf5.js",
    "revision": "5f6015aee70fa081d9936cf7a5a39a95"
  },
  {
    "url": "assets/js/282.ac0e21b9.js",
    "revision": "126443b954c95a9e58ec44eace37c0a9"
  },
  {
    "url": "assets/js/283.b1882719.js",
    "revision": "560b34ccae1bc40874fd780d949bcba2"
  },
  {
    "url": "assets/js/284.dcdb582a.js",
    "revision": "87e956c05f402ed60172d039b58874f5"
  },
  {
    "url": "assets/js/285.bf5b9872.js",
    "revision": "62a06d4781ac8741bbe7e7d5fb002182"
  },
  {
    "url": "assets/js/286.4056a854.js",
    "revision": "0ff5f0d9bd958bf01d3007d8cb4aa04b"
  },
  {
    "url": "assets/js/287.32ac035c.js",
    "revision": "70286f89da335339bb9425bb276817ff"
  },
  {
    "url": "assets/js/288.5266fd37.js",
    "revision": "92846cbc97e7b260f8bf2a15f336b2d5"
  },
  {
    "url": "assets/js/289.0ebccaac.js",
    "revision": "e24b85fc570fa13e1c56f6e4ff25a726"
  },
  {
    "url": "assets/js/29.a5416a73.js",
    "revision": "92bb299710efebda6940fd515a03a238"
  },
  {
    "url": "assets/js/290.c8a69795.js",
    "revision": "546e52ca8e334073254492b38562da32"
  },
  {
    "url": "assets/js/291.08f02729.js",
    "revision": "77936d7f36b4212466ed4ddb2d37e00e"
  },
  {
    "url": "assets/js/292.4472dab9.js",
    "revision": "b7493b6e664316fc073ca36dc59eccd6"
  },
  {
    "url": "assets/js/293.f6ed185d.js",
    "revision": "b6e9f11953a7c4412ac1c867109f2be0"
  },
  {
    "url": "assets/js/294.d48dc0e9.js",
    "revision": "a5c7324539d616c01b631533fe4bde0a"
  },
  {
    "url": "assets/js/295.bcc9db58.js",
    "revision": "98aed2199fa59e316d6fc48b101227ea"
  },
  {
    "url": "assets/js/296.1ff79d11.js",
    "revision": "c6437fcf40868874b373476e72389f1a"
  },
  {
    "url": "assets/js/297.5fce278c.js",
    "revision": "6c3c69c1a3ddd27813567f66953bd0c3"
  },
  {
    "url": "assets/js/298.5bd38e68.js",
    "revision": "e1619089148414d7ffa6e185d65fa01f"
  },
  {
    "url": "assets/js/299.9d5daecc.js",
    "revision": "a44b15a3abd98322fbd04b465b8b1d4c"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.48cbd019.js",
    "revision": "96deb6dd0e1ee2fceca135fe0a10f372"
  },
  {
    "url": "assets/js/300.5d0de77f.js",
    "revision": "112f63713a2ad7a9cd5c92c25f02ec40"
  },
  {
    "url": "assets/js/301.99cfca3f.js",
    "revision": "dd9b8a68733e30166ae2c889ac49b885"
  },
  {
    "url": "assets/js/302.9fd87884.js",
    "revision": "41bd3353c3fb17c9085a017130632859"
  },
  {
    "url": "assets/js/303.56584daf.js",
    "revision": "7e748001a410d3c1b808b9948306ed91"
  },
  {
    "url": "assets/js/304.6be0aff0.js",
    "revision": "1e1f6bc89c5fe33bd4b0c61d52f39d2e"
  },
  {
    "url": "assets/js/305.107c1348.js",
    "revision": "8234654aeef828999884b5b00dfa57ce"
  },
  {
    "url": "assets/js/306.d4f8e14d.js",
    "revision": "dcdf4760af3df0d3403d82d64358bbd3"
  },
  {
    "url": "assets/js/307.9f72bc9a.js",
    "revision": "d02d70ed5f55b80f3b2349435eefea00"
  },
  {
    "url": "assets/js/308.ce74581f.js",
    "revision": "4ef92f7e20491e124ecb1d217b001fa4"
  },
  {
    "url": "assets/js/309.cb9df6d8.js",
    "revision": "df4b954b54e7581f54470ba51537e3bd"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/310.5617ef28.js",
    "revision": "50e5bfacc259ac3f892f570388fa56a7"
  },
  {
    "url": "assets/js/311.224f5350.js",
    "revision": "4c4ada7850eb1dc5c44d8ecb60de427b"
  },
  {
    "url": "assets/js/312.ab4aa5c1.js",
    "revision": "0807a5f1fb5544c375b3c5fa0f8fe701"
  },
  {
    "url": "assets/js/313.c91e0cf7.js",
    "revision": "7b2ff4b7551fad27fe6588ef1d1af409"
  },
  {
    "url": "assets/js/314.a4e369c4.js",
    "revision": "d7d25a47b707f924c26c59938faf2470"
  },
  {
    "url": "assets/js/315.67d8308c.js",
    "revision": "456293e692d0d92b35abebd619ea553b"
  },
  {
    "url": "assets/js/316.ab895bb6.js",
    "revision": "66a70594ef832a6e053e245a47a72d51"
  },
  {
    "url": "assets/js/317.0bfaa60c.js",
    "revision": "4759213229d8b8003faa48a5d391391a"
  },
  {
    "url": "assets/js/318.e08a8510.js",
    "revision": "ebc7b004f9a155296c47c315de4512bb"
  },
  {
    "url": "assets/js/319.08320497.js",
    "revision": "e7671a203dc595cb78070df10f0dc0dc"
  },
  {
    "url": "assets/js/32.52301937.js",
    "revision": "14399075e36a34993b2c0b9e45b4a26f"
  },
  {
    "url": "assets/js/320.73519c8e.js",
    "revision": "cf76011dc8451968f0cd0da3b6a95356"
  },
  {
    "url": "assets/js/321.b286ca85.js",
    "revision": "b88dcff8bd9273a68ea8c2f39770f137"
  },
  {
    "url": "assets/js/322.c71f4df4.js",
    "revision": "aae1206e6676cf597d0cbdce08b25886"
  },
  {
    "url": "assets/js/323.9332e672.js",
    "revision": "4866ba8fecbb46363539beb122423ed6"
  },
  {
    "url": "assets/js/324.ab5d2f58.js",
    "revision": "b0320ca34017db25faa559db9bdcfe04"
  },
  {
    "url": "assets/js/325.1e12568b.js",
    "revision": "59c655de305d2d9607d087f803bba335"
  },
  {
    "url": "assets/js/326.31eb1df8.js",
    "revision": "dbe575f4a9d52dce38c48da9d3bc70be"
  },
  {
    "url": "assets/js/327.a48e6b9c.js",
    "revision": "b8b53de18205b83f3fe47bc23b543793"
  },
  {
    "url": "assets/js/328.a5ae6ddf.js",
    "revision": "8183b24cf87c392f22d331f56c124257"
  },
  {
    "url": "assets/js/329.a693ed1b.js",
    "revision": "a2c137f04bc79cb14b0920f3d7527d0e"
  },
  {
    "url": "assets/js/33.22aced39.js",
    "revision": "a2f3d5f6f62b5d665763abf7beee5f8b"
  },
  {
    "url": "assets/js/330.62705787.js",
    "revision": "7e8f5b9f0a9e52f50faea618f5d41e35"
  },
  {
    "url": "assets/js/331.b801af8a.js",
    "revision": "22277425571658cef59a51f9c3da9ba3"
  },
  {
    "url": "assets/js/332.84d5b04d.js",
    "revision": "505afe5ade75b84a0c6309523a30fa3e"
  },
  {
    "url": "assets/js/333.b0faf742.js",
    "revision": "38b40578ed0015e2d4773271a38872ce"
  },
  {
    "url": "assets/js/334.a7c0cc93.js",
    "revision": "5b5cbb5b27a06c85092825b79a593402"
  },
  {
    "url": "assets/js/335.b0da52c9.js",
    "revision": "18efdd23c0058deaef33f011c6d65046"
  },
  {
    "url": "assets/js/336.325eca1a.js",
    "revision": "802b8c9c5571acc780fd30e7fbe48739"
  },
  {
    "url": "assets/js/337.78974e30.js",
    "revision": "5418f2a8088c0a661d299a5f636817b3"
  },
  {
    "url": "assets/js/338.6e9540cb.js",
    "revision": "8697f16b7dcd03d12ace9c608e07512e"
  },
  {
    "url": "assets/js/339.0c42fd96.js",
    "revision": "fad9e2f0259ae429777708b9f2114403"
  },
  {
    "url": "assets/js/34.5c013fa2.js",
    "revision": "fbb99e8c49c973b3173b7d929ba1f50c"
  },
  {
    "url": "assets/js/340.038be3c3.js",
    "revision": "e9d60e32cf7677023b3fc1534c0ccf0e"
  },
  {
    "url": "assets/js/341.6c3df024.js",
    "revision": "f40042082d64b1fd07a557c3a28ea4e0"
  },
  {
    "url": "assets/js/342.88edfc3e.js",
    "revision": "6cce64c73fc9e1b17c48e3507d0a6daa"
  },
  {
    "url": "assets/js/343.34a40019.js",
    "revision": "c77df162f4d8581281cbe12ca52c4a8d"
  },
  {
    "url": "assets/js/344.0233b940.js",
    "revision": "300027dafa47ad4f176d360e262af8ca"
  },
  {
    "url": "assets/js/345.cab7e116.js",
    "revision": "743150513eb1a59053e438b9391d1d3a"
  },
  {
    "url": "assets/js/346.4aa34f5f.js",
    "revision": "445ad35abf198100afad020b964160e2"
  },
  {
    "url": "assets/js/347.1570301a.js",
    "revision": "39d262bdddb1b1257ffdf7fa14991dd3"
  },
  {
    "url": "assets/js/348.f0d4335d.js",
    "revision": "d019e3696737ee09fa1ba2eab68f02b6"
  },
  {
    "url": "assets/js/349.df9a2f8d.js",
    "revision": "709efac6b9de1b45a505e148c330f308"
  },
  {
    "url": "assets/js/35.9a5a612a.js",
    "revision": "dbd7e5bd229d9603f9ca9384db537354"
  },
  {
    "url": "assets/js/350.2084ccd6.js",
    "revision": "2eae51abd8a25a781ee9a63069832450"
  },
  {
    "url": "assets/js/351.e3cfbbb3.js",
    "revision": "83b743f71ce2fb4ef8dff41138424de0"
  },
  {
    "url": "assets/js/352.1530d1c1.js",
    "revision": "6731bf9e923ff7fa55d2d7cbad50d840"
  },
  {
    "url": "assets/js/353.55a3f918.js",
    "revision": "7683b1e1b29e1bb823565ba1ca2b8290"
  },
  {
    "url": "assets/js/354.b71d27bb.js",
    "revision": "db4093104c901c5e3098bcc2207e60e2"
  },
  {
    "url": "assets/js/355.f0138630.js",
    "revision": "a840347cb1ae63a897f070a03075773d"
  },
  {
    "url": "assets/js/356.8a83eecb.js",
    "revision": "04f03e0cdc6a125bb051e82dba7bbf5c"
  },
  {
    "url": "assets/js/357.05d1f225.js",
    "revision": "5f7bdddc73c430335d092fab33b67d5c"
  },
  {
    "url": "assets/js/358.c4482809.js",
    "revision": "ca36cad9ba2a72fae66e742f79e223c3"
  },
  {
    "url": "assets/js/359.e0aaf104.js",
    "revision": "2341ecbca21447d984ec80ef36dac1e1"
  },
  {
    "url": "assets/js/36.357de891.js",
    "revision": "740a9a5da287b122fc844eebee4352fd"
  },
  {
    "url": "assets/js/360.68a49f06.js",
    "revision": "cd8786b75a252606ce112c04a8d0f6dd"
  },
  {
    "url": "assets/js/361.56fe2db8.js",
    "revision": "e539a2e53aeda75dddd85f3a7666c47a"
  },
  {
    "url": "assets/js/362.f5761a24.js",
    "revision": "03920277ae83e07db144f7db7dc43980"
  },
  {
    "url": "assets/js/363.3a50c4c8.js",
    "revision": "5976ff6aa578665325752f92f79dd7bb"
  },
  {
    "url": "assets/js/364.fc945a5b.js",
    "revision": "d2615f4e78dc7cf8bfdc5ac874897b80"
  },
  {
    "url": "assets/js/365.cf2c5b54.js",
    "revision": "6749710924cddb1d7cc836d0a481d41c"
  },
  {
    "url": "assets/js/366.14bbd2f8.js",
    "revision": "1d874ac4c139d4d26a468439060f1bad"
  },
  {
    "url": "assets/js/367.c6da35c2.js",
    "revision": "6a2866234f23d86e5557baf0012df27b"
  },
  {
    "url": "assets/js/368.f0aee092.js",
    "revision": "039120c0c57f88d5bdc8a7f2587ca7e3"
  },
  {
    "url": "assets/js/369.00a2751d.js",
    "revision": "8fdeabe4c1437503f7f06050d53a7f59"
  },
  {
    "url": "assets/js/37.58413da2.js",
    "revision": "b330e237818e79613ae3274e5c3aeeb4"
  },
  {
    "url": "assets/js/370.87ce1ad5.js",
    "revision": "8efdb72fd2bd5fc817752d836e954c7e"
  },
  {
    "url": "assets/js/371.f199b642.js",
    "revision": "9a1920bc2351b96dc5cc692dcd66dedd"
  },
  {
    "url": "assets/js/372.50fdb02f.js",
    "revision": "076aa9aee1099decefd8bafff5d3ff64"
  },
  {
    "url": "assets/js/373.a99c0ee5.js",
    "revision": "555bbc1f1308ccfd3cad0742f196613f"
  },
  {
    "url": "assets/js/374.63ba0293.js",
    "revision": "3298293d3af0f9aa015fc33cce22f371"
  },
  {
    "url": "assets/js/375.1c7bbd2b.js",
    "revision": "3f13830d1ebf2b18efe24ea3d901e1f5"
  },
  {
    "url": "assets/js/376.b1148737.js",
    "revision": "0280029662e45dbcf41438d5e7a7f180"
  },
  {
    "url": "assets/js/377.118a6e26.js",
    "revision": "c3a1f04a74548201f494a871eb0c8848"
  },
  {
    "url": "assets/js/378.e111dce5.js",
    "revision": "56262411b0791362f8383f817ec2c700"
  },
  {
    "url": "assets/js/379.03b9ffee.js",
    "revision": "83288413d47420cc0f4dfd2981dc6a79"
  },
  {
    "url": "assets/js/38.057fafdd.js",
    "revision": "42c1c42185f59ef3b36e585f02b6d89e"
  },
  {
    "url": "assets/js/380.62355f5d.js",
    "revision": "339bf23eeb61e611e92e199a79b451ee"
  },
  {
    "url": "assets/js/381.226e1520.js",
    "revision": "7f300c15348ade0ec22740745d7ad77e"
  },
  {
    "url": "assets/js/382.35096a71.js",
    "revision": "93606308f44d3601873bcce1b4f69e5a"
  },
  {
    "url": "assets/js/383.40253203.js",
    "revision": "ccfcf2320516e0015fc123a793883218"
  },
  {
    "url": "assets/js/384.e4b1f116.js",
    "revision": "6c840b5f8d6439cc92d57ed9a2597d77"
  },
  {
    "url": "assets/js/385.357ebbe1.js",
    "revision": "4d325c38240c2df3e1331517fb8163d4"
  },
  {
    "url": "assets/js/386.5f377672.js",
    "revision": "ae1a15a43b3ce1aae8d806c79c9141c8"
  },
  {
    "url": "assets/js/387.87001614.js",
    "revision": "a729876ed2ccbaaaa69399a138f201c2"
  },
  {
    "url": "assets/js/388.a06c3ba0.js",
    "revision": "4673e8f2804893f0c4fc47f3dd17438b"
  },
  {
    "url": "assets/js/389.09b1b053.js",
    "revision": "0bb2ef31a061adf71e9457e752c8904c"
  },
  {
    "url": "assets/js/39.98c80121.js",
    "revision": "f3b33f3dcc48ce131a852a035efe5177"
  },
  {
    "url": "assets/js/390.6833ae31.js",
    "revision": "ca5507333b358743ae9346b229d58f50"
  },
  {
    "url": "assets/js/391.05ebf217.js",
    "revision": "fe884c789346494fe04c6147b09468d0"
  },
  {
    "url": "assets/js/392.e4b835fd.js",
    "revision": "6e35ab6f05d013fce723d19a885ebc52"
  },
  {
    "url": "assets/js/393.96b6d14a.js",
    "revision": "c2c50c23d29f11385b167a56197de3bd"
  },
  {
    "url": "assets/js/394.1cdf7df5.js",
    "revision": "31dbbd4680b4d518ea5ae92e2c5b3788"
  },
  {
    "url": "assets/js/395.83c13add.js",
    "revision": "7aed3e5cd501b6e3d75acd0e50ae12fc"
  },
  {
    "url": "assets/js/396.fb7ef532.js",
    "revision": "700480ea00eb75ebcdf688a8cafac4cd"
  },
  {
    "url": "assets/js/397.523d25ee.js",
    "revision": "1cf321789fef0570aebce1f8679126e4"
  },
  {
    "url": "assets/js/398.9225939b.js",
    "revision": "5c4faa15ca241a867a8a133a91e64c01"
  },
  {
    "url": "assets/js/399.e3436b9e.js",
    "revision": "89b77f5d8f59e81d39a1dc0b33cd6ed7"
  },
  {
    "url": "assets/js/4.d09ff0cd.js",
    "revision": "2ef18ddbdd4ca54593d8703be907e6fe"
  },
  {
    "url": "assets/js/40.1b733d27.js",
    "revision": "668f6da93093c3c1c5c21dfe71e4103f"
  },
  {
    "url": "assets/js/400.29b6e18a.js",
    "revision": "f6a07a323c8ed2686b2d68e0c5939e51"
  },
  {
    "url": "assets/js/41.34f4a974.js",
    "revision": "abde1520847b98a97d63c22f7ab1a61e"
  },
  {
    "url": "assets/js/42.95227aa1.js",
    "revision": "0464db93c5ab6b878cfb6121f67457e5"
  },
  {
    "url": "assets/js/43.98ef295e.js",
    "revision": "a6b30a2d45a97c329547ed6c58910c29"
  },
  {
    "url": "assets/js/44.a53f7982.js",
    "revision": "dbed22cc00105679621ef15aba4c44bd"
  },
  {
    "url": "assets/js/45.3c9fdbbe.js",
    "revision": "7dbf0bbaf72de1e5c26750803a09f152"
  },
  {
    "url": "assets/js/46.4a69de1e.js",
    "revision": "b46cac54d21e9b80b32c28479a5155bf"
  },
  {
    "url": "assets/js/47.286dd3b8.js",
    "revision": "a6ab54c749bac34973b8bb9d7855e2ed"
  },
  {
    "url": "assets/js/48.40fa99ec.js",
    "revision": "40cc0a9a1738734f9e229a60a0cda6c3"
  },
  {
    "url": "assets/js/49.32682b71.js",
    "revision": "23f2de859925568390f527dd90a944bd"
  },
  {
    "url": "assets/js/5.89fce094.js",
    "revision": "3898fca4ad57ab3fa962d1dac8327705"
  },
  {
    "url": "assets/js/50.79699988.js",
    "revision": "edde8d8e467b068e8d6e8382e534c6c5"
  },
  {
    "url": "assets/js/51.a8477b1e.js",
    "revision": "8e54882a63df05670e221794dff75cdb"
  },
  {
    "url": "assets/js/52.1c7534b4.js",
    "revision": "59e6a37c132374cae6074361ceed5737"
  },
  {
    "url": "assets/js/53.16e6ab2a.js",
    "revision": "49158315b61b7987bc1bb4e2de5a3d33"
  },
  {
    "url": "assets/js/54.e3a381b9.js",
    "revision": "fd9b80d592226a1549c90b1ff0159dcc"
  },
  {
    "url": "assets/js/55.d4ebfb33.js",
    "revision": "218f32250fb278962f67299d92f24e68"
  },
  {
    "url": "assets/js/56.938da6ce.js",
    "revision": "1eed5dc6e897e0128ae984804ef67ca5"
  },
  {
    "url": "assets/js/57.7b98c3e0.js",
    "revision": "265a21018b6a3141dddd1350a8670afe"
  },
  {
    "url": "assets/js/58.97583494.js",
    "revision": "04610e1ae58c533e908cc29815fb6f77"
  },
  {
    "url": "assets/js/59.6c08c197.js",
    "revision": "cf3e3bcccceda4d5d79e3e707ceac24c"
  },
  {
    "url": "assets/js/60.92e8b8a0.js",
    "revision": "735bfa58588eaa519bb91bf5aee22a31"
  },
  {
    "url": "assets/js/61.3ce35764.js",
    "revision": "a254b05328677714b1d8448c99bd91ff"
  },
  {
    "url": "assets/js/62.22bbc01c.js",
    "revision": "b9bf2c59dd9a55dfb8efada369e537f6"
  },
  {
    "url": "assets/js/63.8f8f9751.js",
    "revision": "457b31fb083d59d3d37af8a3c3fa7ed4"
  },
  {
    "url": "assets/js/64.88c50073.js",
    "revision": "24066af66ef344b483e6666c7bae41fa"
  },
  {
    "url": "assets/js/65.b6f772b4.js",
    "revision": "84f6be3e21915b071aeb49c0141fc9a3"
  },
  {
    "url": "assets/js/66.03fe269d.js",
    "revision": "84f909d2c9d2034ae40e2a0ad0ba71f1"
  },
  {
    "url": "assets/js/67.d77574bd.js",
    "revision": "60794eabefa1f1ab9c4af28811e6b4cc"
  },
  {
    "url": "assets/js/68.920273f9.js",
    "revision": "60bdc32937e286eae4118e74673e37e0"
  },
  {
    "url": "assets/js/69.b1ba5b6d.js",
    "revision": "6d52e0d9c2c2bacb8ed29f24a5bd47f4"
  },
  {
    "url": "assets/js/70.2de642d8.js",
    "revision": "2be52a2135ce9b955f930473fa51ce9c"
  },
  {
    "url": "assets/js/71.3288cf67.js",
    "revision": "cabefc139289592cb28497ef8188b6a4"
  },
  {
    "url": "assets/js/72.2b693f4f.js",
    "revision": "9a60c18adba520c17117acb98c7b40e2"
  },
  {
    "url": "assets/js/73.54c37321.js",
    "revision": "12ef53871cdf0c09f1dc2a2fd59b2ceb"
  },
  {
    "url": "assets/js/74.b9ee5ccc.js",
    "revision": "b7de4c9ad762eb249275b460cef7bf5d"
  },
  {
    "url": "assets/js/75.cdde54e5.js",
    "revision": "db239b6cb731b2493f4e666e102986f1"
  },
  {
    "url": "assets/js/76.57867d69.js",
    "revision": "66717180ad9304c9ce143837148478f7"
  },
  {
    "url": "assets/js/77.932f6d77.js",
    "revision": "b6ebbb929c6a0967c799935cc3de51cf"
  },
  {
    "url": "assets/js/78.be4a8ab3.js",
    "revision": "3505ccc753999119f6928420f46064a7"
  },
  {
    "url": "assets/js/79.515d3753.js",
    "revision": "198081b1e9a3a4bc3a37d1df1f1c0c4b"
  },
  {
    "url": "assets/js/8.5707c9b8.js",
    "revision": "0ede7d1bc48fa42136d4ce20a496109d"
  },
  {
    "url": "assets/js/80.7997ec62.js",
    "revision": "5b02f391ffcf1d18444716f18006d43e"
  },
  {
    "url": "assets/js/81.f196d06f.js",
    "revision": "306e4bab3b167e1337a33f7f6984e1ad"
  },
  {
    "url": "assets/js/82.d53f4298.js",
    "revision": "eddea36d966db2b3e31d266f53cd6f72"
  },
  {
    "url": "assets/js/83.290eeb7d.js",
    "revision": "4e52b9cf54fda5013e5eec15be447c05"
  },
  {
    "url": "assets/js/84.0469a329.js",
    "revision": "f05d443b8373064cc379d867d12c20dd"
  },
  {
    "url": "assets/js/85.cb1800a6.js",
    "revision": "137a646a299ebfd689bd832ebbf25f1b"
  },
  {
    "url": "assets/js/86.5ec9539d.js",
    "revision": "79a61d77aa35ee57a681208d43ef339a"
  },
  {
    "url": "assets/js/87.e1aa0cfc.js",
    "revision": "ce392f139d893a715a126cb95c4dcbbb"
  },
  {
    "url": "assets/js/88.0a7dbdab.js",
    "revision": "2f6550507c3e2b948a1828c64a5f57fa"
  },
  {
    "url": "assets/js/89.37a98c9a.js",
    "revision": "55a24a6b1075b91e22799f8527deb74b"
  },
  {
    "url": "assets/js/9.7f6fd95e.js",
    "revision": "bfc541d7d02f6bbb9348777a071744fc"
  },
  {
    "url": "assets/js/90.5c0ee752.js",
    "revision": "f99f6240d9d3db70f6d14eaedb604be5"
  },
  {
    "url": "assets/js/91.dc99fa64.js",
    "revision": "d2b72b00566f34ecfbd1b9c216f2cd86"
  },
  {
    "url": "assets/js/92.a5933c35.js",
    "revision": "1cac76ee91436e71b75d206d86697102"
  },
  {
    "url": "assets/js/93.9675fa1b.js",
    "revision": "09ca343aae1c649e445b85622a7bc024"
  },
  {
    "url": "assets/js/94.10435e32.js",
    "revision": "8a3106529cf372d9ef113cfae28a3707"
  },
  {
    "url": "assets/js/95.8c9048a7.js",
    "revision": "1ece427758f8b1823aec0eb51a9df3a7"
  },
  {
    "url": "assets/js/96.34368bf8.js",
    "revision": "4aaf3b0cfabaebf4011e56b15234aac9"
  },
  {
    "url": "assets/js/97.a633b333.js",
    "revision": "cdf3f0b65000e5299cd722b328d42baa"
  },
  {
    "url": "assets/js/98.97d8c6b7.js",
    "revision": "c3a4eb5ee98f4d2d2ea3dc9f7650bdcb"
  },
  {
    "url": "assets/js/99.0a1ccd7a.js",
    "revision": "cfe90b866afaf01a7a3effe23b1df0c8"
  },
  {
    "url": "assets/js/app.c0265dd4.js",
    "revision": "f8cb6dfe147412f0bdacaf917bc3cbbf"
  },
  {
    "url": "assets/js/vendors~docsearch.ccaccf87.js",
    "revision": "f339321af1d8ffc7aa334bd24ffa8864"
  },
  {
    "url": "index.html",
    "revision": "7a0a9fb6ebe1a2741672e6fdfa0e2d50"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "7d48618eedf1aebbd74b4d6f10919579"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "8562eaf39021770b389264f2df1b19bc"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "f65889d65aac68f28ea8da64cb0fee39"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "8d2c6ad5515855f8fcf27a5f58eaacfe"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "ac215f66fe6368227a10e489272b1924"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "2ff833b2b4fdbcb9d23f104c6368ef5a"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "855ea33dd26459f58331d525384e5c07"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "07c2e9c8522722285b75cb215a68525c"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3e2ce1c7187313e363f897a5ffc3afda"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "94482f3d32b88e0877d95110b7ba724e"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "8e629d2b7b477c2bd5b30cacc8a8a24d"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "3cb72d51ba42125035732275b1425403"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "c773c410c50e47c0ec0da2b8f724637a"
  },
  {
    "url": "master/api/index.html",
    "revision": "be1d7e256ae81f9e856eb496c7bbb560"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "1bbaf5e0e8dadbd7b774a09622e63189"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "15d59ae9ce687d952d92652fd975f2d7"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "02e12e596a52d1c4cf6c8e17618178c1"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "294219f746ca5812eb3882fcedf6702a"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "b154bbc1711fcb522bf7917161ca8567"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "efd7acb637f25c629e1abc0cec85377d"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "9fe951d7838224b5109d1b06d735d360"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "4f1aaa1c8825bc445c002628a6a499a3"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "4991f3bf960df893a350461dc6ecae79"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "13562c9378e0e5c3969fcb032bae6d52"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "69da3d3ea1dfa4dfb8eceac3bbf70fd2"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "03fc500c72572f837958bbd9c2564448"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "491ac15feb3951ad727dc94a03c59db7"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "73bd547b3b6d1457cee688acc4147839"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "5312423ca835c87d41c256ff27c0aee3"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "4b62144eebac0cbb5ea0299f2afd569f"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "88f53f272ab840157ce2c6ceba53fdcb"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "eb4f6ac4d69c124f2a13258992979584"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "9c3cac21eae3b1a64ffc590824458b89"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "bfd457b17add1242737f22f2dfbaac04"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "ef57233589db2e9b649615359998669f"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "b88ea60361f0f4c6ab502a35690d73a4"
  },
  {
    "url": "master/packages/index.html",
    "revision": "70ec07e89397df7637b88976558fd9cb"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "35bab6aefa6c9bd7840dac78f7d590c4"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "af3d7fb125049826f5028b69d8e50eb1"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "cce4d5010a236048cc03bcfc948034cf"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "506776d74ab1ce838dc8a01c84ce14c4"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "742c832ed0b470af3bc50a2476a72bdf"
  },
  {
    "url": "master/packages/views.html",
    "revision": "47ecbdf66652cbc371b2ee36a89195e1"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "426733b8a9448422d57e1c6a598841a4"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "19d6077b08e7e465ccbbe422a69501ae"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "656dd2eb54fe5d223ba9d9f289e14d87"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "033501acdca9e3d4142a669a948124e5"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "bf3c5e69faa473bbd7522740bbd5945f"
  },
  {
    "url": "master/themes/index.html",
    "revision": "5bb295fccf90104c9280461aab9db9e1"
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

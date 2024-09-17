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
    "revision": "b321df4876fc7d855666d921d4071223"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "1879ed6043f283c8e1ee035dfb93d642"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "f5a25541767edbff51cd67d0cd2db869"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "588dfe5fe1b0c2e6eb0ebd196ef9382d"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "184592d07d74218b31103be618fc5cad"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "374a000c54409190dd98b2954c3059a0"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "da491fa7e9dc729ace34e2ae565b690f"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ea6da8f3157261b009cee7532e369242"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "4b27694f6d3bad554c4979c427c7ea4c"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "7274b5aab4eaffeb72643f6142501634"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "3cd03b2caac67ed0355af9056545b94f"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "ce2efba2b0d050bf6d0f46aae552db8d"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "b41f1f5948a891cfe12ec22de4f2a093"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "26552c33fae75b4aa7d24893930519f5"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "be302dc807006351b16b27fbe1673d15"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "1aab3897484895fb51cc9083fed47bcd"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "ebea6f168238cfd28ae0e60071216e59"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "7f057f4410abe6e617bc3a4c37e39055"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "645141098eb4234ccf7a0a417924c9c1"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "81095480d94ed66e9448bacdf413f5f0"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "7b1b9bbd1ae7d28c37f2b37176b64ee7"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "98cb5f7fe9b3bed6974c466dcabaad83"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "9f7f713a3a2a8fce8371726b03bb4520"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "f817704265c4906eb2af719cc0f2da7b"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "4c08a8b6d27a1ccd801428ea6c985ec6"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "eeeee66883d4fcb25b155c662c19e21a"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "87dd2e6d94b3a90ebe463afb19e54d84"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "c7f9b75ef6216a5a3e8b7f3cb7e59b57"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "4f38f51ede142d59e6d13147b05b5dad"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "a551b4d31a8675a80a725f4bb12188df"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "98c093b9fbee99fdb208c9e3d2828f93"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "a09107882537bd1e9b269948e49db025"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "c7f82b7500df13d003501a3c1e82ddc6"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "0fd1264d49aa77f37a6b029c30a96f5c"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "34eb30961498879756f873a34ee02c4c"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "d291680a4f8d3d2397566783e1bac868"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "8be4e3379d3ee00766eda10dfa2f93b8"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "bce3203fdc671a8a7d10af6d11a74ad6"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "6c6f622dd9424071481c12980b0f22cf"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "81f2a5a1e3aa7659540fdcb3a72eafdb"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "81cb10d6385d3ea9828a4c01225fdf90"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "5a812914d50ab3b3519aa5d7160cd3d5"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "ffe6c2eaf4a1f95bd2714e8fd7b83dba"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "ae97df412735f8016509e1ad89e5fba6"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "5b3e6adaa5b9d9538ecb62ad7833635b"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "229ebf4011587aa18370241b9a37b1a9"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "8c0946dabb80b8889c92953da788401c"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "53324d9ed3f015d0f51be642424433a0"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "42663d9796458a7f1398b6c207174b9d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "dcb385485a86305012b79d16b017ef41"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "da4f6ae1ec882a0438ca89f7ed2825ba"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "e66471dc7d81ea94d8e5b1575e75605f"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "2b119336f431b4102ac36a342f6fc2cf"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "4cf652418663c3b00491de09657a2cce"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "b81eb696b8ed219360acab8e526639d7"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "616dc39b7c1db7595858fa1efb420a96"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "bf186758dbb0be81c9283f7b49760cf1"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c7de903c866997476f1ea9ca15c85bff"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "0bbe346dec02a56543bfb0c2f2b6e142"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e731d3584d4a793bb0cad72bb8a23e52"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "4ac9afa8dfbddc2c4a5f90c63c1c4d23"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "fd4a65d521d18655e3401f3a8516821a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "e7b4ef9c4a09af07d04cb2cbeda70743"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "c42f1a35a5611d46e49383e2dbf109d6"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "71bcb63235a3a371cd2fbac15a7d3191"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "b936c415646a702251ab9aa649bb6b11"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "940e33390cdf7602f060206821581cf9"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7205beffb2517e02f1edca5c021e4945"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "948f987b7beeaca4a6b9e4f19ca74b2c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "b27fc9aa009c7d550c42f30c461697b6"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "856691a09c9c41fc1d19dc91bceddbff"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "b0deb073ccfa8ec608f5da1de14ce615"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "75c01384c90861787fc4c37c83cc46a3"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "cc14e35ae4e4b1b51a740a66b10048cc"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "a0db58f0ac6cba1bff5e89bc89d8ab0b"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2ec4b2352cac054e232314d74fecb336"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "7b66a86ff025145147f6bffb8503e8bc"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "3d57209f36d59cf4a3929542f9445c12"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "ed6068960c265e8d4e1a469f76536391"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "0a4a5736783fb1c288382c80957ade8b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "08974545d01920500f00147a1338c5ea"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "f3ac56ac87a2b1aa790e02f93753ded4"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "47021fe16ca24b9519097c2b9b7b0836"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "4e23fffb1dbc85e536a36eb1a8cc33e9"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "50d54f6d5e0ef0c9f91cae2533ce3452"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "3cbe4dd82a6b49b7d04ce94722024c81"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "d81eea769fd2f15e744008f153b0a37c"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "c2cfffb5d765108ac840e6329f24a9e4"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "f1f66e063ce07289bcf8132de62d66de"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "0d6a47e1cf26bcf8cf460c8402652d10"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "7cf28499bc3ddd95257674f41c146f94"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "652cb2e4dbc668390aa7a3c0797e6af5"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "473d5bd8102526a33db163c70856e4d2"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "601e99ed8d02f277c39cf000c810ae32"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "4062465e3b35bbb4dc6b33943aaa304a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "3cde2b09454d283d721e4b28100053b1"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "3da4c59c013c30be652fb7dd769913d0"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "12e1413fd7145b52636319631a7f1128"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "e2478940f0562ce479ffb47b903c8ff5"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "5b01d5756249369eea95edbb8126544c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "930583d3b260cf92ba3cddc062dbf1c5"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "ee657cd6f8d8daeafefe1ba1dc816d9a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "d989801719f7f88f4ed63bb24383790c"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "0d17b0a3587ec86e4a79faaeb4317304"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "fab6107f4688f0c8b61d7bd3e2889f2d"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "1ce4b6776a09e5ea03f97faeeb2adf93"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "454e3e0eca63ec4d1f945a262ac9bf6c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "8b55e0104d1dced02324362d6e18dca8"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "b5ccaac058e3e50f30712fb2f66b9492"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ae0b162698c6d27e6f325b3621e8ad07"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "8fbe4c671935da74f18c7d47e2afaf3d"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "1d10805276099fc880256eaad8c14e91"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "949a6fc6c3c55920ab9a7567aa14f25d"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "d064a91db81e1ad7e966980ab1a42c4d"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "4992c1a6c8384524b58c7f397199c926"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "6ad438f6dbaf1d2ecaeb392ca2259065"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "972ad77561d831a2d56596cd1b701624"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "15378b8f37480c6da57d0fb76f862c78"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f1054d4318fce137bf7fcf2ced7eccb0"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "bd3c0613f6e2c9b7acdf4667643d094f"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "56a02f34922ec083cfc7161859bfb65a"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "444fa044a089e33849550ee40529df83"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "cb3b959c2186888b35829544f08df5ad"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "4088e0957f1147d69ba883b3ed54290d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "05bb6f5135e82765c49b723788d3b1f0"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "91a1e5db0e8950b18c2e712e690290a0"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "b2b0743434d9a403c19ae276a1b9d8f2"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "bc9d6b730631481424ed8a18326a84e0"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "be21c4fc7c7482fcc8d0f1fea519ec64"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "84da735f35eced4f588ca2ce15282140"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "8ae4cd2c329dd4f3e67e4be1f6803a4f"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "ca911f95408f2715ec29200db9a5b070"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "b8b6c1e715e0c9ef98bccb882e27613a"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "277691d0be6ef5ea3cc882d8c6289773"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "9353af108e9806d986f1419e25b65fca"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "52ef1fdd9be0d89568d23cf5426e019a"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "1064d05f488ba47d8b6572624a9d3e71"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "e24e871052b43245a47324c14cfdb9ee"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "ac23f453b3ac494ef8639b4af75b0171"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "213dd14f0466d26eeef8d31a0dbe54a8"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "677d3fdb42824e5534b53c90e48bf62b"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "626d90f06ec1639f1784f7dd8d6bc2be"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "a4903ae0675d245a5a830eebad4e74c7"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "c801fce81eda5c57b8d1f19bcd89bcf1"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "e468a3c2f16f1d552ef360076787c2c1"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "f48d578a2d416ccaad8c8465630155b3"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "2fc34885c335aa2034727f800ebf4c91"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "b33c593007bd84abdf0f58ea7d9ad7ab"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "f0d48bdfdcca9b793b702a515d4cdc03"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "e519a8bb4ab9bfa7bdb75c4be1b19bfc"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "8bb2247641248c0beae38a8834ca45fa"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "4781340c6ed9dae6d0ca3d867f76b500"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "31858bec9648e2a5dc105777c0ed7f84"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "b74472bd76ddacfb3972cb9e3a0bea8f"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "f703771515a5601d3b8b87b8d86a56de"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "c2a457744d1c912614e5ed362363d33a"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "820c32615576b905edded1a887649e82"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "76ecd2845b1785988d0f7552deda0277"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "d166db82397253d4492f5c481017c1fc"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "2e07637ba1c87c024b5cbcd5f357eae5"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "756f2829c8a0895bd996e4f0f79c98ab"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "10eeb4c3dbe85fc7103bc03753fb0c62"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "88ac03fc4fbf07352c87bf0fa9c5046a"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "6bf78f22fc42cde12bfc1e4f324582cd"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "f4c06db3cb6c9aad1be552c09fb4aa8a"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "4d10c65b59951fa169cc8d030fba5a0c"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "8c8cf86a5454bc865adb7fcc50c89cc7"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "db094b26dd5376b210aafd002d5fee8a"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "93962b5ed149b7081eb9191c0ee1bccf"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "51c4266a0dec4813510684c31624609a"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "af05a2ba319e95cef211abdf50bb8d3e"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "f755f1fe00904542ec57286d1ed98b77"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "f203f103c646c3f2e58472a488456cdf"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "63ec1cc6568be3bb034bd3d7121da8eb"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "f04300f6a3c4cafa6c9c2fd3d5fecedd"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "e8e080eeea157997cabafe6b32865b77"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "635650af2f15134d8515fecbde4a987a"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "fc66992800925c994b70f0fe39dbf323"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "01ea70df26cc0fdfae4790f63055e09e"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "970d85cf850589bf9e7b38bbadcda97f"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "8fe0f78a3ebcdaeba481e91f4c674229"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "ee0d2453b00714b58041ac8e8f71aa8f"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "d23ac8a354bbfcfcccf6af4acb9daafb"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "158a30287bb392df4a8868237409e4a8"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "363b6c0b794b48cc0f302ae4b3b7a16f"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "a29c8512ff27ef8fd7ea50a9fda4c555"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "6e90d6777237d7b49a69ed57d6746698"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "b8c58f3677fed6a941787278653841ae"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "b62e528d924d054bb636a460770ec963"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "b6aed4f0c981929444dee979fcd1de24"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7bf42342399fdbaa75838dde11a44247"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "767d4de8de50cd1673cd7df9d56368c1"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "67d296d01ab66101c1419c760f63d5a3"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "6753d4995b1c15fe24d238cd8e20ed81"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "d22efcc31cf5cba9c3990101127b2ba3"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "24c359ec9b422ee4ad3bacc325695fe4"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "4a13c5f392c74b3cf7e21a08d989dda1"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "23a12d7d964716087ae75f8bdd9f3904"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "5fef3e14fde785c704c991e6ddd24545"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "03bfbede81644e05edd7604563b8e0af"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "ef5eef8a3ca475fa4fb891aff42d4cc6"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "218ebddd53b9a3c489719c8796f434b6"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "1d3918c9f93f29fd80011a1ded0d83e0"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "4e5cce7e35145099504f828cc8e66f8b"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "178b5b1776c82a9f3e927c382004197a"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "e60cab6999fd46fed6a5106744b93640"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "8b699e200613cac64636d857c10dbbc6"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "43cf67582eaf5e75e107356f4b38b4f4"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "d50c0222423124f9425b781536cbdfff"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "a6f78b09f89bc53954dbf8d3848c3c07"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "5aaf451f5a316b2267667ac3ba4138fc"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "da05bee3150a47417d95259469def9b2"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "066dcb4d86b2ce8c36ed8dcd9b84efba"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "7af772407e69c5361420be4aa90934db"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "81bd10f27a8cee7b6f8a22eaaae55e1e"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "0dcf25dd4568bfbbe95cc12343197b7b"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "4140b8350acb68fec7727ce9f7dfb17d"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "0ee40603ae7def799983a95942ab1b1b"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "0f50cec08e077f6b1032901d154c2379"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "0c2b36248df089176b095af9ad63aef3"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "a46cbfcfa3c8526129a9cc61d2ace3d0"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "6de5a3569810685614ae0ee06963f1c9"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "74bef594eee7abb91dcfff6ec4dff7a1"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "eb901e2a903ca47a1899766cb546ab4d"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "65ac3f5b2b0ad7068aee37aa6416e80a"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "0c9f8bfc2c11a05d3b6651419b96eb69"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "c6b48059db739c7a029b56510d656021"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "3828937acb8efaadad21229b1013171a"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "9daeded9bf6dea8a3cae3a28014debb9"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "ecc8500ba6b1422707c5e5ed0de6793e"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "6c872b67ececdaf800d37b093e247311"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "2a3924fb185600d0e7b3dd3aa994f1c3"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "f42a261540bef87b83ae95dce1e86617"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "c1eee38977d6d77f49f2d261658c8fba"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "fafd0f6ce689bdbe644720bdb7e85b22"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "b6347e0099829f4546c590fa638f60f9"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "0665be2381dce2ed92634929f7fc2c0f"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "ac4c1c956be6c7fbfe7d2a02d624d63e"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "d63090eefded1c7edaca6127d9ea6811"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c8186227ffb9e429916f640437407910"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "1c6c6d041d06aeefaef798843ebdc161"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "fd0cf9914a4b2dc8c568a3411c42585b"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "9a9829949729264d80e7aed1562cd620"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "669a4353f369ceb8920f7c05c55a4ecc"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "b0976de34ff82eba86b7875c42147d11"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "85c6d412fb6cd142b4445f8fb437b55a"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "bb381a291a6aa67d73d92bbadbec6baa"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "ce60237a4740146edba65c898dabfb80"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "078d7da274d868390d92d735778b2b6e"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "14d174497619dc185b260d708d68cbad"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "e1c7f10b55f0123cb1705c1464ffa9f3"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "0971748d6f0ad6332afe2d6233951624"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "86e899f356dfb1ada3a1b1829c750ddd"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "61bb43ed791a70cdcbe159af7f169c8a"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "66350175b363c32ad318287e6faa6f56"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "2c30c7fce7a8b8277e971d79df0099ae"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "e1955988a288893ab41b0949f06ab1ab"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "ca26a5820a4d8b6405c05512005b48fa"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "ad9166cbb9da24c4599a94d90954ac41"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "c14978c75cf6cac60d22592dd9c4af24"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "f2dda6e66de3ce13a5639f89c6f9fbf9"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "435a211cb738087f03f55333a33a98e8"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "0e8bc74015bc685f7b9d3cd36e2921bb"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "73d1750cd3ee1dbbe6e67515b440f3a8"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "5f5bba618665d060e622c488edb41824"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "9099768037b82322b287ccd6d76ba6c8"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "2fd617699e18e7b0237e7f2fe9878942"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "ef1cad046d2479f9e77697c7d8324c69"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "45c59d346adb02da4a4bc6d930ee967c"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "0e467cc2691b2b167873e45b489c1488"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "f22b3641db7c826e4fb2bfed83d07ca1"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "bed61c3ff095fee2775a998fc42098b6"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "cb9fa6da28e0ac6c140ac93d71f0c405"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "650967fcc337380b511e8e0f2049394a"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "8a67921fc99bc50360119e941766c645"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "c7a387a41aac5db9fa84597474b3eb71"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "755213fbf9c9cddb196269c89b8c1258"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "1088b85088fcd3bcfb6a676f7aa8253b"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "714e2c1bac93b61c5081d854ac986be4"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "dfd029ce1997c7af21ada4ceed822509"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "bbb3e217d7b63a6650f31381f3debf0b"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "44c15f7403981724c42d069b98d1ffa1"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "af4c91ba5633c513ce76aee9335b1624"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "0fb6530d170e7c8a81758ed0b8c0e52f"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "167dff3f105a6ea93dd7d3f0bfb88e7a"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "bd4b9cdd76384939e8d1ddb2d3bec09d"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "9da8dd6b863c097a6bee246b17f36f20"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "b6f874f2409bdb434224896b254b0d3d"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8cd4175fd6ae3d1b36f0e2c70be2c11a"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "094338d1fe8405211dd3b07bafd08913"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "fa32bf6257db7fa511794b7a42071d5f"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "c810f0a3850a9467cb92a562da0f46cb"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "0c77fdde82c218c81873dd820969009c"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "2d37af4bccf1bfdb2e07c5546451e07a"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "776f661212f4d097846aabfae384ceee"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "cbaf745b9e61105cb39eb6c607e67502"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "22bf030feeebc157a8a1f34b9bbea00c"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "93d1cf70d9903ad2f3d20f2eb46ad159"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "583a846414625954d3b45439b1381a5b"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "6290c729d0258fe452e8c1c41b6aec8f"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "765833114fd54b067040b87e4ae25e30"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "a3de1c30b43f6c606c1e1d179325afc9"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "9e2a0953e2f0aba535f9224a69fb2633"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "e16972fcbc71242b7c17bc18fb7d86e5"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "9a073cd58fcb14b9996fb0477750e0a4"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "e1a6f660cbb5440ca8b7ffb38a4fc1f7"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "0eb68e5d456304003e2c2b8ce01cc989"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "360478275c4c90349bf2330918a31177"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "a87321f8b620b417a445036970d02ca1"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "4f55e55b0a6de025a92b69a32222ad80"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "4ae34ba58e5ee9ce798f23c85709464a"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "7a3c1a6afc2856027af8d1bcf8b3eedf"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e4389b2bf02f600bb245f3989d5ea8fd"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "5773580246468f43810e3236c44c92ee"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "51491793c8fd81aff4b2f51f9ae4f2a1"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "bc34feb2c44c6983dec29db1aa3650e1"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "afd837bc1239721c242f6c771cbee550"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "f4c602fe6d92adb9f07aeac2b136a17b"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "ab34ed9f3331994ee0dc807f1470056c"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "dde191037cc49472d51243890d03e28c"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "80a51e5386ae671751df1989ee84d4d6"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "9df644e703090a2133f94feab528400e"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "35729f13283b59abc1f6cce229771d46"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "6a9ef597b16445a6826ea3644ddaa0c4"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "3f070fe63d6192415afdfd434ec9dfe2"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "41b39621ca56eb0a075992b5eb1dc5d3"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "e6673a49d01416fdb836efd2d17ed459"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "b046aa245a66fd9e37e8c082388ee735"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "7b8aec5345695f86c9d3afd9d9744cb1"
  },
  {
    "url": "404.html",
    "revision": "8a6c01cd7eb10dff17823fe6c3acd1de"
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
    "url": "assets/js/1.76c5f4d8.js",
    "revision": "f3d6f94921dad4464a365ca7890b1799"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.1a305c35.js",
    "revision": "977aa30c85f837e6d72e3fbd27046e3e"
  },
  {
    "url": "assets/js/101.73d1763b.js",
    "revision": "cb47b8c6384fe36a27ea968cff463d23"
  },
  {
    "url": "assets/js/102.ceab2d75.js",
    "revision": "b1f57fe51312fc1c3351c6c6de1e4708"
  },
  {
    "url": "assets/js/103.838dddef.js",
    "revision": "b7fe8f8bde6c79036ddc85818197e968"
  },
  {
    "url": "assets/js/104.152e9cce.js",
    "revision": "f2d45de082902c0209f62595901876b0"
  },
  {
    "url": "assets/js/105.cd470b82.js",
    "revision": "3d2e7a9582f5ceec574f4c8f95a0d017"
  },
  {
    "url": "assets/js/106.692f927e.js",
    "revision": "2bf144ff7a55e05495b46543c84d99bc"
  },
  {
    "url": "assets/js/107.d0057514.js",
    "revision": "09db44f0e5255b7d072b282b2fdd6704"
  },
  {
    "url": "assets/js/108.6e9d7378.js",
    "revision": "b004f8defbe3ee7be4cfc2272c4af0fc"
  },
  {
    "url": "assets/js/109.14bba74c.js",
    "revision": "f9103fb0540083336fc21065aee28bcc"
  },
  {
    "url": "assets/js/11.589caf18.js",
    "revision": "b30a8573a21bf4c5cb36554520719e8a"
  },
  {
    "url": "assets/js/110.2a13443f.js",
    "revision": "9b1ad30065054b579d8b995937cbccff"
  },
  {
    "url": "assets/js/111.17e79cbe.js",
    "revision": "da9f366dffc3752e3882478c8f71596b"
  },
  {
    "url": "assets/js/112.f91b84a0.js",
    "revision": "9d9268c8e928451655284afc21ba4d4d"
  },
  {
    "url": "assets/js/113.b26bcd2f.js",
    "revision": "0362a1057fe56d5a13cb42b037391f65"
  },
  {
    "url": "assets/js/114.18034cf5.js",
    "revision": "a2944b365afdcb85edcb329b83a31995"
  },
  {
    "url": "assets/js/115.59528f8d.js",
    "revision": "317a920a8fded6f779b605a71468b469"
  },
  {
    "url": "assets/js/116.8268caa8.js",
    "revision": "4b88de0833c40d3bf74b2e499d72fd67"
  },
  {
    "url": "assets/js/117.5e2303c4.js",
    "revision": "6628b5b1a168c54647a246454193468c"
  },
  {
    "url": "assets/js/118.466d9bc1.js",
    "revision": "b6f4ae602999e2508fabaa432f69ddde"
  },
  {
    "url": "assets/js/119.ff0dcd70.js",
    "revision": "fc7b04f5a2278491d0868b7b9b22bdc5"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.77b609f2.js",
    "revision": "edb3967696a7f9a7e9ec124fb9e2a8ec"
  },
  {
    "url": "assets/js/121.77eb6930.js",
    "revision": "b2e83977a7d40fb76ad17e074061d332"
  },
  {
    "url": "assets/js/122.6f5b60b7.js",
    "revision": "4fa32e92c9175fcba8279b1785e9c662"
  },
  {
    "url": "assets/js/123.c6c268ef.js",
    "revision": "dfe779523506b03ffe9d8139a8182396"
  },
  {
    "url": "assets/js/124.9fba2201.js",
    "revision": "f91c8e86876c00adb14e84758a54e142"
  },
  {
    "url": "assets/js/125.7db8baec.js",
    "revision": "c887a9aad571d61b0d1fc8cf1592b498"
  },
  {
    "url": "assets/js/126.f2f73a1a.js",
    "revision": "066ad1d6758040f4e43eab63d11e97c1"
  },
  {
    "url": "assets/js/127.3ee798d5.js",
    "revision": "a9255d490f328926ec5952cd650292ff"
  },
  {
    "url": "assets/js/128.2b78b236.js",
    "revision": "ec234df58bb3ae18df8f1695050ede7d"
  },
  {
    "url": "assets/js/129.1940ad69.js",
    "revision": "99194b65b24e5940f8bf4c8ac312562a"
  },
  {
    "url": "assets/js/13.09bf5a2a.js",
    "revision": "94ba81ce4c1af436357e7f8a7c5d99f5"
  },
  {
    "url": "assets/js/130.92095470.js",
    "revision": "27dbf213ba2182214d09af74415357f5"
  },
  {
    "url": "assets/js/131.deacd05b.js",
    "revision": "1967246d393cfde2afa4979ee51a57f5"
  },
  {
    "url": "assets/js/132.c3bbcb47.js",
    "revision": "e0a88419320d1ff90bc1bfc625a8cf09"
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
    "url": "assets/js/136.a8b08fb3.js",
    "revision": "7f7b83de5c14aa111600ddd89e674a67"
  },
  {
    "url": "assets/js/137.05a8a5eb.js",
    "revision": "fe71db99eff5f0de9247f8e51a6c2ea8"
  },
  {
    "url": "assets/js/138.b2820ebd.js",
    "revision": "77de4afe32bd41e2d7c359faaf15b161"
  },
  {
    "url": "assets/js/139.6ca3f056.js",
    "revision": "93b7e4cbb393cddf2017f18426337b43"
  },
  {
    "url": "assets/js/14.6108c098.js",
    "revision": "60de395906d6d7820b561d09ced9f2c5"
  },
  {
    "url": "assets/js/140.4c6b921a.js",
    "revision": "10668da430b06b7b73dc934c601a7d10"
  },
  {
    "url": "assets/js/141.c9dc9d09.js",
    "revision": "bdb83011bc6a8a816d0e149ac27ce307"
  },
  {
    "url": "assets/js/142.685cb1b6.js",
    "revision": "21bf15b761670efa1b21e669864afb63"
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
    "url": "assets/js/148.9df2b871.js",
    "revision": "5a92ae5f0c6ddb10f7766e9c2518742c"
  },
  {
    "url": "assets/js/149.7424fdb5.js",
    "revision": "c897133a3ef258df64457c49d54cf514"
  },
  {
    "url": "assets/js/15.330d5c7b.js",
    "revision": "ae5b12a65ee1f68fc643fb54bb99e479"
  },
  {
    "url": "assets/js/150.260aa8fd.js",
    "revision": "8130d17e6f6c5914df6d1f3454437007"
  },
  {
    "url": "assets/js/151.41abf1a2.js",
    "revision": "61762645425db594e0a0f7a36734f37c"
  },
  {
    "url": "assets/js/152.e99310c1.js",
    "revision": "b5f841657e937a8ac7defbf0c9d367a2"
  },
  {
    "url": "assets/js/153.287e194a.js",
    "revision": "113d0eedc76f42feb30c94dff1ab4c21"
  },
  {
    "url": "assets/js/154.e945fcdc.js",
    "revision": "6ca9686f8eeae2aea924d35e7ccdc107"
  },
  {
    "url": "assets/js/155.534c9020.js",
    "revision": "13ffba54551877bddf40cb8b69361d18"
  },
  {
    "url": "assets/js/156.8d58fb5b.js",
    "revision": "d9d2b86e09bc7b951678e166f847fb50"
  },
  {
    "url": "assets/js/157.e073d5b1.js",
    "revision": "f93d4e6932960b57c709de6a99f66055"
  },
  {
    "url": "assets/js/158.5492238a.js",
    "revision": "b825a25f7a130b5cb2d7ce528f0556c1"
  },
  {
    "url": "assets/js/159.f8db5a1d.js",
    "revision": "f2479967ba836fb6ff334510d3e09cf7"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.ae0dd659.js",
    "revision": "93d29c83dc523d47a444b79941ac36dc"
  },
  {
    "url": "assets/js/161.3ec9cfdf.js",
    "revision": "b8b12698c3e65de35f15a0e06f16f224"
  },
  {
    "url": "assets/js/162.af226457.js",
    "revision": "69139100fc5ab10170d43259ce39e78e"
  },
  {
    "url": "assets/js/163.4746912f.js",
    "revision": "b8897e536093b93380e55e8e397f7407"
  },
  {
    "url": "assets/js/164.8262e78d.js",
    "revision": "a860a4468d0bd35a6283a03f063d3b98"
  },
  {
    "url": "assets/js/165.a2ddd7d8.js",
    "revision": "445ec93f7e7ba8b0973020a2fcf6c60b"
  },
  {
    "url": "assets/js/166.7ad53dcf.js",
    "revision": "0656f63155c00095f76ddff8719fe63e"
  },
  {
    "url": "assets/js/167.2d4d42b3.js",
    "revision": "280ad09b82f001e41f88aa8b35758e4d"
  },
  {
    "url": "assets/js/168.6327f10f.js",
    "revision": "3eb16cf91731a25735ed04c6bde2c73f"
  },
  {
    "url": "assets/js/169.4669c87b.js",
    "revision": "5646af2da3090b4ed480a5f68ed11e33"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.15190beb.js",
    "revision": "c6c46d9e3a5f45860dcbe325728e4694"
  },
  {
    "url": "assets/js/171.14995a72.js",
    "revision": "ce1eb38a5ae63bd5720231650f7c7894"
  },
  {
    "url": "assets/js/172.0a25b75b.js",
    "revision": "acc67ead719e477e836a3141a62f0cc8"
  },
  {
    "url": "assets/js/173.01407e76.js",
    "revision": "1e029a5735165f8357312791188c015a"
  },
  {
    "url": "assets/js/174.3bc9e113.js",
    "revision": "7c23cd001e3bc635e5f46d48d59dc70d"
  },
  {
    "url": "assets/js/175.983ec142.js",
    "revision": "9cb69aa8b715d33ae8cd42971f279349"
  },
  {
    "url": "assets/js/176.8cf649a8.js",
    "revision": "cd3bb79a2c807a4ac8edcf1488630fc3"
  },
  {
    "url": "assets/js/177.2ece612a.js",
    "revision": "9ef970a317d247fbf78901d33ee50abd"
  },
  {
    "url": "assets/js/178.5aeb5c1d.js",
    "revision": "5c4365387f96a9d7192ec091e9fec8ee"
  },
  {
    "url": "assets/js/179.563799cf.js",
    "revision": "d66ac2481c60816e0f7472fd8a92fbe6"
  },
  {
    "url": "assets/js/18.566e4cf6.js",
    "revision": "ec20304394d5a34cb4d8aba229da6a42"
  },
  {
    "url": "assets/js/180.66a02757.js",
    "revision": "95d3c86eb11d9b74c78005cc03c7d732"
  },
  {
    "url": "assets/js/181.649b49b7.js",
    "revision": "e7303fc90ff0f5de2977a5ea9a4027c9"
  },
  {
    "url": "assets/js/182.14b98314.js",
    "revision": "03c7487c2e9ad9c3acb4534f51e5341e"
  },
  {
    "url": "assets/js/183.73fed18e.js",
    "revision": "9800dbb042b7aa38a466aeee70663a42"
  },
  {
    "url": "assets/js/184.87ea0b78.js",
    "revision": "f8439cf0574f2c26d3d0389f5f095fca"
  },
  {
    "url": "assets/js/185.a1ce0527.js",
    "revision": "dba54c08a5b5ed844d88cea9e5f3f315"
  },
  {
    "url": "assets/js/186.1859f1c4.js",
    "revision": "726691d9a5801d23668cee6c285495ec"
  },
  {
    "url": "assets/js/187.ae02d3ae.js",
    "revision": "4e98876c7827805a9edf31dfdbb67a8b"
  },
  {
    "url": "assets/js/188.b9181031.js",
    "revision": "f95faafc3a358fff9b3e49351d7974c2"
  },
  {
    "url": "assets/js/189.4ebd0fa6.js",
    "revision": "05f42a05c4fe4cba300a387614d2aa75"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.07c66552.js",
    "revision": "4499fa2b3a33d35d643ca5e23cde6c18"
  },
  {
    "url": "assets/js/191.4a01ffe4.js",
    "revision": "40d4b80b6d19983afdbca4abf91ee10b"
  },
  {
    "url": "assets/js/192.3fd52f41.js",
    "revision": "dd41b3ffb58aa685459040ccea51f4cf"
  },
  {
    "url": "assets/js/193.6d7eada2.js",
    "revision": "0d8fa25e3e41159cc4fe211e61647217"
  },
  {
    "url": "assets/js/194.2331c611.js",
    "revision": "52b1f0d70e5d48c90e8939790a79562a"
  },
  {
    "url": "assets/js/195.1de2c8f3.js",
    "revision": "13e417cf458072285c739c9f1036babe"
  },
  {
    "url": "assets/js/196.8591c3c6.js",
    "revision": "5fb2215edd92e584188049f15ce22f3b"
  },
  {
    "url": "assets/js/197.0802bc50.js",
    "revision": "af21950f4d7d73c707c0c0b588cd80bc"
  },
  {
    "url": "assets/js/198.25a1035b.js",
    "revision": "c84acce56084d7b0ea5749de610c9d9c"
  },
  {
    "url": "assets/js/199.56c49cb3.js",
    "revision": "bc92a8b81ad077f6a485b4c1ec92e8a7"
  },
  {
    "url": "assets/js/2.9c86865d.js",
    "revision": "c156fb4d631612aff795cfc2d42ac513"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.7b691d6d.js",
    "revision": "08f0b7b8da2e631bb180140ff4e8301d"
  },
  {
    "url": "assets/js/201.b54a0d41.js",
    "revision": "a37f02c19b2c8b57584c941ca2f56440"
  },
  {
    "url": "assets/js/202.23a17892.js",
    "revision": "f2931e8e6fca6030ebe579f546a338a3"
  },
  {
    "url": "assets/js/203.70a54679.js",
    "revision": "75163bfb0756df4a59c8ade49c2d81b8"
  },
  {
    "url": "assets/js/204.6931cbe1.js",
    "revision": "8d57fcc95a67bea7bafa0348ea83b80a"
  },
  {
    "url": "assets/js/205.5189bd37.js",
    "revision": "235a47793840c41bab30df3a3379d0d2"
  },
  {
    "url": "assets/js/206.fc06b838.js",
    "revision": "e249f8863312bfbd174be5ad1be3f8d5"
  },
  {
    "url": "assets/js/207.bc34dd03.js",
    "revision": "8f6009a552dcecf8e696b75ae77ca9b8"
  },
  {
    "url": "assets/js/208.165fa141.js",
    "revision": "b1f04c3e728b054659814a32b14068ea"
  },
  {
    "url": "assets/js/209.1ef5d018.js",
    "revision": "3356c5f8e163b36a09d3c7d058c957b8"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.d6a3f0aa.js",
    "revision": "210a906cbbaa58a495d6f83bdcbf243e"
  },
  {
    "url": "assets/js/211.3a8053cf.js",
    "revision": "668d2c75b1a6a7a19e48b338e0ff7f5a"
  },
  {
    "url": "assets/js/212.0f7b9b77.js",
    "revision": "6e036022c0fec2387857b6d46b01284e"
  },
  {
    "url": "assets/js/213.8fcb187b.js",
    "revision": "3106a9cf7cd22b22d8987a0bce65bcbe"
  },
  {
    "url": "assets/js/214.4bd94591.js",
    "revision": "3ae9c5a04d332b41ebec75a0f70f6e1c"
  },
  {
    "url": "assets/js/215.d32a355c.js",
    "revision": "2371abeb21b6c85bc17ae160f237d129"
  },
  {
    "url": "assets/js/216.efabdc9a.js",
    "revision": "2b4d9ef0365390212127b897847551a5"
  },
  {
    "url": "assets/js/217.36031604.js",
    "revision": "911e425f32df78259fc480c04007b0e4"
  },
  {
    "url": "assets/js/218.d1ff0125.js",
    "revision": "ada4c29265125de79321a84f2f78948b"
  },
  {
    "url": "assets/js/219.daefa40c.js",
    "revision": "3f44b9bef8cecdde58f7e7c60879e62e"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.c0b4b352.js",
    "revision": "d2316ef3841254c537decc971fdf6134"
  },
  {
    "url": "assets/js/221.70213cb8.js",
    "revision": "8c368119f789b379897f4de282c77ed6"
  },
  {
    "url": "assets/js/222.57e42f6e.js",
    "revision": "e63119e2c74fd210db8a4f5299185c8f"
  },
  {
    "url": "assets/js/223.59eef101.js",
    "revision": "06dd4e6207fbd2988f9130d1013b82bc"
  },
  {
    "url": "assets/js/224.9bc85e31.js",
    "revision": "d4f38269b5dcd48d388b0924b029fd20"
  },
  {
    "url": "assets/js/225.253e88ad.js",
    "revision": "869060ff46378f77f3f90781b9aab86c"
  },
  {
    "url": "assets/js/226.c5d17eb1.js",
    "revision": "e622efaae0e062ecf8012ba442ccf24d"
  },
  {
    "url": "assets/js/227.85acea17.js",
    "revision": "8016c8ec3475d90147ea5154531da942"
  },
  {
    "url": "assets/js/228.235732b7.js",
    "revision": "0cfd6120123a2e53185586bf15a3af6b"
  },
  {
    "url": "assets/js/229.b73d2b75.js",
    "revision": "b739bf5f7d5c4a69af761d027d661cb2"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
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
    "url": "assets/js/232.c6942b8a.js",
    "revision": "189a12aed2528434376470e03510041b"
  },
  {
    "url": "assets/js/233.ddbacebd.js",
    "revision": "a06f43f536cfa6f302f67a25baf8c82a"
  },
  {
    "url": "assets/js/234.4b943303.js",
    "revision": "31fc59968ea82cfd7e0bcd42091d979b"
  },
  {
    "url": "assets/js/235.38f651ea.js",
    "revision": "9a18b436c82fbbaae6931b66be6f5c10"
  },
  {
    "url": "assets/js/236.a0f72509.js",
    "revision": "960c90d3d5016b6e0821ae755fec1f39"
  },
  {
    "url": "assets/js/237.bb5af9e8.js",
    "revision": "bb4058462e650cfa8fa0f02c7d0ad789"
  },
  {
    "url": "assets/js/238.a0e5e4c0.js",
    "revision": "51700e07d56bf70e61cb3f6e218969cf"
  },
  {
    "url": "assets/js/239.99ab98e8.js",
    "revision": "6e13f53ade157288878bd3fb6640c995"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.f59ff16d.js",
    "revision": "a130ca2dd83408d6caf0444109c14948"
  },
  {
    "url": "assets/js/241.b262f8af.js",
    "revision": "6965f5d0a87abaa827d649c83107b12c"
  },
  {
    "url": "assets/js/242.82e565cc.js",
    "revision": "b8824deba6c53ab440df1db9e6b1cc15"
  },
  {
    "url": "assets/js/243.a8320882.js",
    "revision": "85b41471bc930e9cb948ac3eb3eb408c"
  },
  {
    "url": "assets/js/244.5ab20dbf.js",
    "revision": "b01fb6ef7ea26fc1c10dcb3a380d58cb"
  },
  {
    "url": "assets/js/245.3fdb729f.js",
    "revision": "8e66bacb16c9816e0d15f9207c762e5b"
  },
  {
    "url": "assets/js/246.4bfc4eee.js",
    "revision": "f67c48ddf9194c7c024f074d99e95fa6"
  },
  {
    "url": "assets/js/247.f17c07be.js",
    "revision": "f2c4612a41883894e273bc6abfdb1383"
  },
  {
    "url": "assets/js/248.da77c28d.js",
    "revision": "d0f4b41873d565694b8b4c6a1fe5b4c5"
  },
  {
    "url": "assets/js/249.77b42b8a.js",
    "revision": "5e56a716693769f566fb8bfffec94e3b"
  },
  {
    "url": "assets/js/25.6c2742ab.js",
    "revision": "bbda7bc66f63b24c442f3b7cdfe17ac2"
  },
  {
    "url": "assets/js/250.9e0fdb5e.js",
    "revision": "dc42998a786f549c32111c6a70333751"
  },
  {
    "url": "assets/js/251.a2c80a0a.js",
    "revision": "611c6ed2dee7ed180893bd983f45fc70"
  },
  {
    "url": "assets/js/252.08268146.js",
    "revision": "faf62e93d6ecb232f2433cf176c992c6"
  },
  {
    "url": "assets/js/253.7f88bf7f.js",
    "revision": "70c98f39cca8e7448e049bb1d1975915"
  },
  {
    "url": "assets/js/254.8f62a394.js",
    "revision": "12e8e177125de8b0c2e0785046721062"
  },
  {
    "url": "assets/js/255.0aa798c2.js",
    "revision": "9ada97e56654f678c0cc0bceb16f00a2"
  },
  {
    "url": "assets/js/256.17073312.js",
    "revision": "429bee11953a64867c1c9f4a5f493526"
  },
  {
    "url": "assets/js/257.8046fd58.js",
    "revision": "c2afb2eeb1bb714b4da19428b2e7b6d2"
  },
  {
    "url": "assets/js/258.f687a594.js",
    "revision": "6cbbabcf4070f6e806c56c321a06ecb7"
  },
  {
    "url": "assets/js/259.033c0290.js",
    "revision": "5e0a76061f9bb7b780a7554cc5faec3c"
  },
  {
    "url": "assets/js/26.2123a81e.js",
    "revision": "1d0e8e15ba0d8d45612fee2e1149617f"
  },
  {
    "url": "assets/js/260.906d9861.js",
    "revision": "9788ce26da111c7cece35b613ac3d093"
  },
  {
    "url": "assets/js/261.73d651b0.js",
    "revision": "080b735b25154019340d1ce54e831911"
  },
  {
    "url": "assets/js/262.588348cd.js",
    "revision": "3f7ef70ea335afae7ce7feb6d2a5615d"
  },
  {
    "url": "assets/js/263.9e406ad8.js",
    "revision": "618eabc95ccb5b1afc7d03518f45cf15"
  },
  {
    "url": "assets/js/264.77d364d5.js",
    "revision": "9a10a9f76ff7013ca7aa862e9d77aa9e"
  },
  {
    "url": "assets/js/265.17fe16ed.js",
    "revision": "9068ce0d83c53bf34c064176b626b4f5"
  },
  {
    "url": "assets/js/266.6d958fde.js",
    "revision": "4d1a7486dbee9ea0a09120909a2545f5"
  },
  {
    "url": "assets/js/267.a418493a.js",
    "revision": "669493920e83cab25db04649a4a7c7d8"
  },
  {
    "url": "assets/js/268.a43d7f3e.js",
    "revision": "a4ede588c9dc324c585c041e23780970"
  },
  {
    "url": "assets/js/269.a2242b74.js",
    "revision": "9c6be010203af6e15e1b0940dde28383"
  },
  {
    "url": "assets/js/27.245e0933.js",
    "revision": "408a327aaf59f67bbddd7e0e3c59d719"
  },
  {
    "url": "assets/js/270.48d90c33.js",
    "revision": "d9f5d3ae39f6f038786e255748021948"
  },
  {
    "url": "assets/js/271.cdce3280.js",
    "revision": "af99cb5b7a7c8117820904cff42ee03d"
  },
  {
    "url": "assets/js/272.8cfe0041.js",
    "revision": "4689af228e336da1340586a3eb6afb32"
  },
  {
    "url": "assets/js/273.5fb81fd0.js",
    "revision": "ec4988d922ae19c46e60ef73236b009a"
  },
  {
    "url": "assets/js/274.dcef5e3a.js",
    "revision": "b392a3326c1a7021464f4a94f267cbeb"
  },
  {
    "url": "assets/js/275.e001505a.js",
    "revision": "02e5060e1bbe21a3d72669212019b5c2"
  },
  {
    "url": "assets/js/276.bb2310d0.js",
    "revision": "c8a6ae832280b0acb08506b17ee5d06c"
  },
  {
    "url": "assets/js/277.aea2ae90.js",
    "revision": "7bffaf3227d2df9817b445332c057aeb"
  },
  {
    "url": "assets/js/278.379d58b9.js",
    "revision": "e39b2ff152e42a2a5c3c3f3418284119"
  },
  {
    "url": "assets/js/279.b5c77e94.js",
    "revision": "ebd4e5e4fdc4ee95ea4dacd7f1821072"
  },
  {
    "url": "assets/js/28.8bab9e74.js",
    "revision": "b6b1a8c39d7c4a2c0f2324c6f4ceeb2e"
  },
  {
    "url": "assets/js/280.c4db44c6.js",
    "revision": "553bc9d02292dc0f84ffba3a0b4310b4"
  },
  {
    "url": "assets/js/281.f49d6b8e.js",
    "revision": "ad768ec0acf65702444d524eb5186003"
  },
  {
    "url": "assets/js/282.2ad1de57.js",
    "revision": "ec8673f5bed0adfb43a5550cd681763c"
  },
  {
    "url": "assets/js/283.4d569fa3.js",
    "revision": "a4ce0905c5774f8e9e054530b1672923"
  },
  {
    "url": "assets/js/284.4e946fe3.js",
    "revision": "a9bd400f8d415fea433359c1382f620b"
  },
  {
    "url": "assets/js/285.27838cfe.js",
    "revision": "48330247de44c0c0ffad2fe77a1e343e"
  },
  {
    "url": "assets/js/286.cdb89431.js",
    "revision": "1b6e3c1d87b8b48883f9b1e733ffd351"
  },
  {
    "url": "assets/js/287.ac81ca3f.js",
    "revision": "a0e6fafb702775ee4e6c823fe3c675ce"
  },
  {
    "url": "assets/js/288.61934e3b.js",
    "revision": "3dda3518299a26be878204b71aae7f70"
  },
  {
    "url": "assets/js/289.d9a62096.js",
    "revision": "c06d608f7a56f9a8d4ff544281e13b8f"
  },
  {
    "url": "assets/js/29.d2ced168.js",
    "revision": "9f5aca589ce78b823669016f7e9df17c"
  },
  {
    "url": "assets/js/290.0707d643.js",
    "revision": "9f27cb01935157cb3a939317a2cc0429"
  },
  {
    "url": "assets/js/291.b58bc5d3.js",
    "revision": "34df2002facf7823e10cd025f625364a"
  },
  {
    "url": "assets/js/292.63e58e76.js",
    "revision": "cf538b58d8a6e751053021224e5fd897"
  },
  {
    "url": "assets/js/293.05902eac.js",
    "revision": "b27ace935ba7baa46b38a091136f89a4"
  },
  {
    "url": "assets/js/294.0ddc140a.js",
    "revision": "25ec1c3612acc30b58fd42202bf84dc9"
  },
  {
    "url": "assets/js/295.9bfaad0b.js",
    "revision": "daf18e61adff8356783101f130910cdd"
  },
  {
    "url": "assets/js/296.350237d8.js",
    "revision": "900227419c1f129d62a8acaaaab50a92"
  },
  {
    "url": "assets/js/297.c27eff8d.js",
    "revision": "b4a1e4bb6701912f556ea81d779dc240"
  },
  {
    "url": "assets/js/298.5bd38e68.js",
    "revision": "e1619089148414d7ffa6e185d65fa01f"
  },
  {
    "url": "assets/js/299.b88cb020.js",
    "revision": "45993ca5c5a8d44ecb34f990d9b86a4a"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.61cbc5a7.js",
    "revision": "6d17fb1f7aead449966473e5f1faff4d"
  },
  {
    "url": "assets/js/300.26ef8241.js",
    "revision": "f8bb21adbb68dd6011610ddb64fa031b"
  },
  {
    "url": "assets/js/301.898757c1.js",
    "revision": "3b2e193073402c76d4d8f075c4fd205f"
  },
  {
    "url": "assets/js/302.6264d283.js",
    "revision": "9beac68091087aa23e4cda5b3aec3d29"
  },
  {
    "url": "assets/js/303.5ae04050.js",
    "revision": "e001775bf79578ba473603c3e95471cd"
  },
  {
    "url": "assets/js/304.7b236062.js",
    "revision": "d5a727d3a245240c426c7a72de0d80b9"
  },
  {
    "url": "assets/js/305.6075d2fc.js",
    "revision": "32e11d79eda05eae6632c8f1d6542379"
  },
  {
    "url": "assets/js/306.d4f8e14d.js",
    "revision": "dcdf4760af3df0d3403d82d64358bbd3"
  },
  {
    "url": "assets/js/307.6a36a4bb.js",
    "revision": "bd9035257dcb10a801288858269c60e1"
  },
  {
    "url": "assets/js/308.03519414.js",
    "revision": "d9c9cd5775d7501dec39b10d7b2da837"
  },
  {
    "url": "assets/js/309.1720068e.js",
    "revision": "5c48c854333727066306d464d2bc1729"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.45e21a9e.js",
    "revision": "231a18515d9b6cc1d18e1a76b121b4eb"
  },
  {
    "url": "assets/js/311.fd73c30f.js",
    "revision": "49d7846055da77f75fadedaf04c65392"
  },
  {
    "url": "assets/js/312.ff93130c.js",
    "revision": "103f516aaef66b3a5ab8f41b4cc09624"
  },
  {
    "url": "assets/js/313.fea6f592.js",
    "revision": "99a926d621746403a1fee36f8adc7e77"
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
    "url": "assets/js/317.62a4d304.js",
    "revision": "98fa8b2d6a2cc06b7e55143077cbf9bd"
  },
  {
    "url": "assets/js/318.813defb2.js",
    "revision": "7bad2b3f3938010cd53ab259df84c9f9"
  },
  {
    "url": "assets/js/319.95605a8c.js",
    "revision": "f89d13bcf32631e7ee34461f89304606"
  },
  {
    "url": "assets/js/32.a41b5f2b.js",
    "revision": "8d24c4c8ce8ca4be9abaa6be7e9bb290"
  },
  {
    "url": "assets/js/320.8df3def1.js",
    "revision": "562f8306bf786cac1ae0d6502c04d6c3"
  },
  {
    "url": "assets/js/321.b286ca85.js",
    "revision": "b88dcff8bd9273a68ea8c2f39770f137"
  },
  {
    "url": "assets/js/322.ae95727b.js",
    "revision": "887f5f1cce4daeb32bd99fbc12f32d20"
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
    "url": "assets/js/327.3c552c0e.js",
    "revision": "f96dc9f251ccb04ff2ee027dccabe5fa"
  },
  {
    "url": "assets/js/328.9b95c37b.js",
    "revision": "0b8a24aa85b17fd836ebe97a39a8f8a5"
  },
  {
    "url": "assets/js/329.25179e79.js",
    "revision": "ba472eba97bc00e9e6645d8869b12110"
  },
  {
    "url": "assets/js/33.f22fa451.js",
    "revision": "348c067f373ab60c1101d5e5dd8de199"
  },
  {
    "url": "assets/js/330.8cf5b667.js",
    "revision": "f0f30cb333754cbfcee2211dad54a7a6"
  },
  {
    "url": "assets/js/331.be5b5174.js",
    "revision": "ebb32627f28a382c0f052d3f25282747"
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
    "url": "assets/js/336.09c9b2dc.js",
    "revision": "ab3e2c469f48e235e815d7c2048cbbad"
  },
  {
    "url": "assets/js/337.95f42057.js",
    "revision": "cae34fe0c80e04009085ee289b48db2a"
  },
  {
    "url": "assets/js/338.07ec2f4f.js",
    "revision": "938180478109a114c845b6b88e954315"
  },
  {
    "url": "assets/js/339.cf13b7ee.js",
    "revision": "3f47411fb674e3c0f1502eddae2f8139"
  },
  {
    "url": "assets/js/34.8b9c2e6a.js",
    "revision": "6abe209947af16b247402d011fa40790"
  },
  {
    "url": "assets/js/340.01c204bf.js",
    "revision": "263152c64c4ac4d3a5fd1cf90736ce35"
  },
  {
    "url": "assets/js/341.1c4430e2.js",
    "revision": "013468889ff6af36cc35f11e9712567d"
  },
  {
    "url": "assets/js/342.5d4191fd.js",
    "revision": "4c20c1d4319568f1504172619fd62c80"
  },
  {
    "url": "assets/js/343.34a40019.js",
    "revision": "c77df162f4d8581281cbe12ca52c4a8d"
  },
  {
    "url": "assets/js/344.346ac516.js",
    "revision": "4c72ef69e1e513688ec5e6a2a2109fd2"
  },
  {
    "url": "assets/js/345.9db244cf.js",
    "revision": "cb00f48c9217ab302fcc82a78923ba17"
  },
  {
    "url": "assets/js/346.4aa34f5f.js",
    "revision": "445ad35abf198100afad020b964160e2"
  },
  {
    "url": "assets/js/347.ba198476.js",
    "revision": "b8c7f44650f43569b6c5023491f83671"
  },
  {
    "url": "assets/js/348.f0d4335d.js",
    "revision": "d019e3696737ee09fa1ba2eab68f02b6"
  },
  {
    "url": "assets/js/349.bad831d8.js",
    "revision": "271b3beadf133a27378e46dd06bb9191"
  },
  {
    "url": "assets/js/35.bacc2ab2.js",
    "revision": "71c74b45de0f8497eda911be58dcba35"
  },
  {
    "url": "assets/js/350.b0d70685.js",
    "revision": "f6a3cbab697af2ac5c2976211a983eac"
  },
  {
    "url": "assets/js/351.bec7a0e2.js",
    "revision": "bf581f6a39e9a3799ae4aba6415e03db"
  },
  {
    "url": "assets/js/352.1530d1c1.js",
    "revision": "6731bf9e923ff7fa55d2d7cbad50d840"
  },
  {
    "url": "assets/js/353.64d862ce.js",
    "revision": "cbfc945ee4b5e34b9d35ff1d7bd2d6bb"
  },
  {
    "url": "assets/js/354.d2028a00.js",
    "revision": "c7d2a4f7aea249ececf1769482190cad"
  },
  {
    "url": "assets/js/355.f54515b9.js",
    "revision": "2c593b139abdc799cf44fdf4211114ad"
  },
  {
    "url": "assets/js/356.8a83eecb.js",
    "revision": "04f03e0cdc6a125bb051e82dba7bbf5c"
  },
  {
    "url": "assets/js/357.282f81c3.js",
    "revision": "3e1f4cd6be6ae0313e99ae74e6b3acb7"
  },
  {
    "url": "assets/js/358.ac6b39c7.js",
    "revision": "9272bc2268eeafaa9c83a2fe1d395f23"
  },
  {
    "url": "assets/js/359.e0aaf104.js",
    "revision": "2341ecbca21447d984ec80ef36dac1e1"
  },
  {
    "url": "assets/js/36.103e9eb3.js",
    "revision": "0f90b4550e14ef2e16a2991dbbcab69f"
  },
  {
    "url": "assets/js/360.33e4489d.js",
    "revision": "20cf9d97b989a3703f5c671f4f81e6af"
  },
  {
    "url": "assets/js/361.6b75ba36.js",
    "revision": "87c84575fe6444cf8b836ad3580cc5e6"
  },
  {
    "url": "assets/js/362.f5761a24.js",
    "revision": "03920277ae83e07db144f7db7dc43980"
  },
  {
    "url": "assets/js/363.40058701.js",
    "revision": "fd35e02ae2278926aecea5a96d316cab"
  },
  {
    "url": "assets/js/364.a499f715.js",
    "revision": "104579b7f078a02cdb80a892e5f27770"
  },
  {
    "url": "assets/js/365.cf2c5b54.js",
    "revision": "6749710924cddb1d7cc836d0a481d41c"
  },
  {
    "url": "assets/js/366.7ab384a9.js",
    "revision": "278c1d74ca16f76635d3426b2922e969"
  },
  {
    "url": "assets/js/367.c6da35c2.js",
    "revision": "6a2866234f23d86e5557baf0012df27b"
  },
  {
    "url": "assets/js/368.86c36b01.js",
    "revision": "92810491d97dae00d95156e2877f4e46"
  },
  {
    "url": "assets/js/369.ab12e956.js",
    "revision": "cda714c574f6ffedd2ab914db5096f76"
  },
  {
    "url": "assets/js/37.eb1bbb2c.js",
    "revision": "85f43aeb7402a5d962e3a652ef9c5be1"
  },
  {
    "url": "assets/js/370.f7567c60.js",
    "revision": "42c56cef783e054cda89e7969a46ccef"
  },
  {
    "url": "assets/js/371.adb8a52a.js",
    "revision": "36c1e0c1f99c386025929090656187e5"
  },
  {
    "url": "assets/js/372.7ebec7e4.js",
    "revision": "4ace865463bf37e792f7b5f0de4d9894"
  },
  {
    "url": "assets/js/373.a99c0ee5.js",
    "revision": "555bbc1f1308ccfd3cad0742f196613f"
  },
  {
    "url": "assets/js/374.447414b1.js",
    "revision": "168b4a26b07825ce8f20174913e3845f"
  },
  {
    "url": "assets/js/375.1c7bbd2b.js",
    "revision": "3f13830d1ebf2b18efe24ea3d901e1f5"
  },
  {
    "url": "assets/js/376.4295f5f8.js",
    "revision": "6eda429e3247fc2ba3275e1a6cf762c1"
  },
  {
    "url": "assets/js/377.95d23647.js",
    "revision": "f801dec35d691d8219c557021a7fc006"
  },
  {
    "url": "assets/js/378.79f79dd4.js",
    "revision": "25dcb3a5470022afcaae7728449d9caf"
  },
  {
    "url": "assets/js/379.689d8b43.js",
    "revision": "ba8f7d4de0796d4c0fe5061dd1dda349"
  },
  {
    "url": "assets/js/38.96d74a59.js",
    "revision": "9312a1cef3ed9dcea7ab6719f2236294"
  },
  {
    "url": "assets/js/380.9ca8589e.js",
    "revision": "73d35fb3d2ede0e3f52bdd2583036656"
  },
  {
    "url": "assets/js/381.280e6291.js",
    "revision": "d6ae2ed0eed792ec14a1b65c7a78a79a"
  },
  {
    "url": "assets/js/382.d6a968d4.js",
    "revision": "724d1c3e74dd4ee7142022d1dc91b061"
  },
  {
    "url": "assets/js/383.7d15e424.js",
    "revision": "a80b47eb2323adec0213ec53f9457e56"
  },
  {
    "url": "assets/js/384.372a968b.js",
    "revision": "92da64dfe4bc95c0ea62229c19ca7de7"
  },
  {
    "url": "assets/js/385.00cc3c73.js",
    "revision": "d652b03b54513493ec45c71e23f30d60"
  },
  {
    "url": "assets/js/386.179dd051.js",
    "revision": "6b4d897fd70c62c8d60a91456f44e108"
  },
  {
    "url": "assets/js/387.adb0fc4d.js",
    "revision": "dde893aa45e29aaa6e0fa2754d29436d"
  },
  {
    "url": "assets/js/388.fc83786f.js",
    "revision": "305bd9eaea04903df9e2d6db216d329a"
  },
  {
    "url": "assets/js/389.fe668f44.js",
    "revision": "0fc953a8cf6c7b6978dd82e0ae405a5f"
  },
  {
    "url": "assets/js/39.92ebce3d.js",
    "revision": "7491a30d7f6e47c34adf40ad571ea644"
  },
  {
    "url": "assets/js/390.c9842ac0.js",
    "revision": "ebf18d8de133c3caeab98f3426c5e07c"
  },
  {
    "url": "assets/js/391.33c20884.js",
    "revision": "bbf1a57b44b59823d767752fde0f129a"
  },
  {
    "url": "assets/js/392.39e26924.js",
    "revision": "a51018594bc555db4ee6ed13461e76a8"
  },
  {
    "url": "assets/js/393.c24f35aa.js",
    "revision": "bd5d01742510b01e1dd1dba087e5ffe7"
  },
  {
    "url": "assets/js/394.e8809ba6.js",
    "revision": "fa6076238ad32b440663412b71584058"
  },
  {
    "url": "assets/js/395.d883584c.js",
    "revision": "8856d83fa7c3e4efa7e0db23fd4eaddc"
  },
  {
    "url": "assets/js/396.f4fbf670.js",
    "revision": "757cab47187b39854677cc187d0c4c5f"
  },
  {
    "url": "assets/js/397.abd03c8b.js",
    "revision": "2a667731846d975b6a74d6db44c1f476"
  },
  {
    "url": "assets/js/398.90e0b408.js",
    "revision": "8017141faea3f8e3a49b7393024255c7"
  },
  {
    "url": "assets/js/399.e3436b9e.js",
    "revision": "89b77f5d8f59e81d39a1dc0b33cd6ed7"
  },
  {
    "url": "assets/js/4.886cf4a6.js",
    "revision": "56591bbfa62878a85b7910820edabb7b"
  },
  {
    "url": "assets/js/40.93f895bc.js",
    "revision": "65f862984ec569cdc1d041593f35c976"
  },
  {
    "url": "assets/js/400.4cb31f82.js",
    "revision": "dd385052b8c945c1b210a61357ccdfa6"
  },
  {
    "url": "assets/js/41.886cd7e0.js",
    "revision": "705819df273f0859943e42b30d7a5ac5"
  },
  {
    "url": "assets/js/42.94e244c5.js",
    "revision": "3c4d815b3306848f466eff4404017fed"
  },
  {
    "url": "assets/js/43.9bcd6473.js",
    "revision": "e709ba7109e7096dc5df24f777315663"
  },
  {
    "url": "assets/js/44.a5499a21.js",
    "revision": "80547a44da852f764d98434281cabe3e"
  },
  {
    "url": "assets/js/45.cc9a80a2.js",
    "revision": "136162dc7a31ee3a380d047a67636622"
  },
  {
    "url": "assets/js/46.69e0db9e.js",
    "revision": "8fb5fdca59e723ddd893af533169f69d"
  },
  {
    "url": "assets/js/47.724b1b32.js",
    "revision": "66dd08f841647e57f54f98f8ee815bed"
  },
  {
    "url": "assets/js/48.1107473a.js",
    "revision": "50a1e543747df0537fca34b1483d5c95"
  },
  {
    "url": "assets/js/49.b304ce27.js",
    "revision": "5407d057a7761da36c3a5adbece52ab9"
  },
  {
    "url": "assets/js/5.1102b4f1.js",
    "revision": "705cec1fe76c7c2a2db9ccbd07850cef"
  },
  {
    "url": "assets/js/50.f6bee82e.js",
    "revision": "ec7f5fabe469e17def639ab7bc6dc2f9"
  },
  {
    "url": "assets/js/51.e0e12201.js",
    "revision": "4411617b29f73e0970b82db9344b7584"
  },
  {
    "url": "assets/js/52.95aac27b.js",
    "revision": "0c9b6d8c5ae9c1b8347fdf78393f2abb"
  },
  {
    "url": "assets/js/53.20ad8b8f.js",
    "revision": "b3b1ddfb9cdc14b734883a40f219eecf"
  },
  {
    "url": "assets/js/54.c98ab58b.js",
    "revision": "20d32e369829e4c9cd7c128204bf1225"
  },
  {
    "url": "assets/js/55.836f7265.js",
    "revision": "eba9e1c65397529fe998845bedd69b04"
  },
  {
    "url": "assets/js/56.0c194c53.js",
    "revision": "27a771648db1e4b8da6d914b4ed550cb"
  },
  {
    "url": "assets/js/57.38c2299c.js",
    "revision": "f6968f42ac758ae44da47a7bf5b3f0b7"
  },
  {
    "url": "assets/js/58.76a92879.js",
    "revision": "962e902e60cd1a241c053bc0657a1903"
  },
  {
    "url": "assets/js/59.6c08c197.js",
    "revision": "cf3e3bcccceda4d5d79e3e707ceac24c"
  },
  {
    "url": "assets/js/60.ac2ed6d9.js",
    "revision": "4d3ece69c3dcca6e9fdd6516897f4151"
  },
  {
    "url": "assets/js/61.86c9c4e5.js",
    "revision": "1778a6c200f205be18d0cb35c0ac346f"
  },
  {
    "url": "assets/js/62.8d978949.js",
    "revision": "77464e18b80d7266f575c2ece43d78f7"
  },
  {
    "url": "assets/js/63.10159ffb.js",
    "revision": "ab8277a2cd12a60da3e4a37ec4ca37e5"
  },
  {
    "url": "assets/js/64.37995d1a.js",
    "revision": "2abe95040282bd701011365cf14aa9ea"
  },
  {
    "url": "assets/js/65.a6f1b750.js",
    "revision": "a32cbc0bee16bd808a3d82a71457e600"
  },
  {
    "url": "assets/js/66.f3eb295e.js",
    "revision": "40a50a60eb3913091d8e6125901f5590"
  },
  {
    "url": "assets/js/67.e43b6a78.js",
    "revision": "2e47e2639013d66adac36edf43e8286b"
  },
  {
    "url": "assets/js/68.96576c99.js",
    "revision": "e36abde3e23b23a3e471df439f09fe25"
  },
  {
    "url": "assets/js/69.44585444.js",
    "revision": "661b4afdf308e5c0c8726ac85c9f979c"
  },
  {
    "url": "assets/js/70.98340477.js",
    "revision": "460447e3903f03896c4c42e76f6fb195"
  },
  {
    "url": "assets/js/71.9eef3439.js",
    "revision": "1467ae56c128d51bb84ee653d3f29838"
  },
  {
    "url": "assets/js/72.dfdae3b7.js",
    "revision": "9b9e86e882773b57f73bd5809740d84a"
  },
  {
    "url": "assets/js/73.3aa5015e.js",
    "revision": "613b7817f392d5d3180178ea72af370b"
  },
  {
    "url": "assets/js/74.00af4075.js",
    "revision": "5b2dacaf3a90a6d016008fcb565999ac"
  },
  {
    "url": "assets/js/75.900fda03.js",
    "revision": "822c12bc16f4ab43479ddd8b6abed20b"
  },
  {
    "url": "assets/js/76.0bfa9355.js",
    "revision": "e7dffd630e49db17673c3db4943d7172"
  },
  {
    "url": "assets/js/77.ed2a3c20.js",
    "revision": "a9ce5335d7b78e4bda7126726165c3c3"
  },
  {
    "url": "assets/js/78.5ec9d2bd.js",
    "revision": "d16f4baea2d4f5270b388fce568c9c13"
  },
  {
    "url": "assets/js/79.ad1f9bb4.js",
    "revision": "20be0429798c81926545cab5b513121a"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.8be11f71.js",
    "revision": "e1e7b7902b1d1f8d6760c4f5d6ffdfb0"
  },
  {
    "url": "assets/js/81.f8950208.js",
    "revision": "4b16954a78d986d7ffbdda8eaed941fe"
  },
  {
    "url": "assets/js/82.53fc2e70.js",
    "revision": "645051e9bfa1712d26ff0b5c18b36735"
  },
  {
    "url": "assets/js/83.d87c61f0.js",
    "revision": "22044a6ab10d7d2d6d83638f0c3aded1"
  },
  {
    "url": "assets/js/84.5e699b45.js",
    "revision": "84cef01f7cd4974b003dab3895454571"
  },
  {
    "url": "assets/js/85.09d0e39b.js",
    "revision": "8f2b57d8fcd5deb5085e932b452f867b"
  },
  {
    "url": "assets/js/86.2ede0dce.js",
    "revision": "5eb7babc7d30ce36072a4cbc55326e2c"
  },
  {
    "url": "assets/js/87.b2dc6eda.js",
    "revision": "57587446921004ee47b5cdb2f3febee2"
  },
  {
    "url": "assets/js/88.d88a08b1.js",
    "revision": "73368a2e46e410cf0844ea0d9948dd0d"
  },
  {
    "url": "assets/js/89.a610ec41.js",
    "revision": "baeab2df43cda867078d3343394aa720"
  },
  {
    "url": "assets/js/9.88e11209.js",
    "revision": "67dd4bd604eafb3342794be916d5c16e"
  },
  {
    "url": "assets/js/90.279e1772.js",
    "revision": "40cdafade1a6fc9fa6f27cf688088b60"
  },
  {
    "url": "assets/js/91.28f83ff4.js",
    "revision": "1326c0ae2b079f56a6533a1f2e514306"
  },
  {
    "url": "assets/js/92.7e084e61.js",
    "revision": "8a2480cbdf2b7e126a1f0dc6d0d3ff57"
  },
  {
    "url": "assets/js/93.fd153e26.js",
    "revision": "1580988bf400478a78914dc096bab48d"
  },
  {
    "url": "assets/js/94.dbc9ca36.js",
    "revision": "60d375317c0204553baed5c7ff1f0121"
  },
  {
    "url": "assets/js/95.e9c1b0ae.js",
    "revision": "246ea54973715fb0684d9d68cee7ba8e"
  },
  {
    "url": "assets/js/96.fca66f05.js",
    "revision": "13455a58eaa632d9d4f0ceedf9543530"
  },
  {
    "url": "assets/js/97.e6483488.js",
    "revision": "8276f13de04a9261fe8c052caa7695c9"
  },
  {
    "url": "assets/js/98.c019dd05.js",
    "revision": "f61d5849e8e508b85190473cb642b55e"
  },
  {
    "url": "assets/js/99.3bcfb5f6.js",
    "revision": "3680fd31007823fe5c5cb8561e2ca683"
  },
  {
    "url": "assets/js/app.7f8b121d.js",
    "revision": "0bb25c19285c24756e2547a555596c2a"
  },
  {
    "url": "assets/js/vendors~docsearch.cf08ccb4.js",
    "revision": "ec97fd871053e8b03a4c067b66f5abb5"
  },
  {
    "url": "index.html",
    "revision": "fd2d1d77eb4aefe2ec6aa89af93e0c90"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "388042abc5e41eddd56f12238b6d26fb"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "7fd3bad3f3941fcd18d05c8e2ee6a1ef"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "6175f05f6f0101341130f9ac22a1bac4"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "606247cb80d4e2d410b5930c49f1b57e"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "b3edb25e2ee45adeff29e3706751e53c"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "c4568e84b73a3cd01380f2666e415ac6"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "1d3558c62abc4a7af610206fec500bbe"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "58a594a8ef2a35cb2d299d64abbad442"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "846d99ad0704501324fb148b7a0fe213"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "f118ef40602f901acefd345804a0fa7a"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "21fffc3da595815fc7c6aa12957c5a99"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "aaadde4203ea0018a3fba42b1b04d07d"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "afacea604dac6ee5c89f8e2779a67515"
  },
  {
    "url": "master/api/index.html",
    "revision": "e580dc11814e0324606f3dfff65a71b0"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "d339bd42337d4c2f6364d8c6c7e0e43f"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "0aace14d245865fc4e9b258fa1f25902"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "13318f411fedc0290bff95cd2aab000b"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "6ccbba00da58d39e86a8f5b58caadec6"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "4f80d3e54ce838d578ad8df924a13e71"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "abb962361ab6f17966a1d0da18d9328d"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "84dd3c1bf46bdcde3b0f55fe2040d6d3"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "ffb55b75ef73e10a97db9212a34cb271"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "7aa187146307de8b33d90514797d7158"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "c70912e05aae7bab5fddad35389a356e"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "1faeec547f63a535eadea9faf6196a46"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "b1d5edf1818b3f5b280685ff27706663"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "e164d89b96faad095ecb414221c15276"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "30d5b344c7e091640d38a4e7a09058e1"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "05d1fec351615345677989b7f5585654"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "fa255cbe2c1748b8c56c0d8098f60644"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "ab819321f2e082be89c6fa94503fbf75"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "c284868a1e5801743d6166bbd87999ea"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "4f7f074fec4c67bdda605aa85b5fac85"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "55b98809e8b45b8f8b6112c8ecde1f1b"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "da0c16866a9093a11fe1945104386e5d"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "b0dfe78c80ca27d64c276a4adaa78d76"
  },
  {
    "url": "master/packages/index.html",
    "revision": "6c21c00a3fd7fe1024d6d2917b348add"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "f9ef6348ceaa20e309b547192f793582"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "a605abdce8a93213ff49d548d4e1e86f"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "0358f21690fd478bf00903b9c6730ce8"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "a2df53b5d750aad9cd0a40ba6f437eed"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "26930608c5d4eb47aa7b5a139fedb4ba"
  },
  {
    "url": "master/packages/views.html",
    "revision": "200a62a0ac5d6c68c74aed21c7265cdd"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "6cfa9ce93c081847db6562886fff13e5"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "48784f925f6ed1e69bdf0323aa8f64ec"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "ab29fbaf8aa6ec2ca1f772184bb72d0b"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "4790beb076bd63b9c6ae049db6cd10ca"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "d4e2d78c7528a485f41b154e0922be5c"
  },
  {
    "url": "master/themes/index.html",
    "revision": "fe779bdd595f99ce41c84ee60aaed84c"
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

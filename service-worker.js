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
    "revision": "859e89eaca57930b694ddee8895015b3"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "6eebadc81eca5b139dbbf90ce0316bb4"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "c924e9b5ef61cc3c3e391c5733841dc2"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "76460800e90ff79f8d34c9021e087516"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f89ca7a7a97a4c27ebf7f438ee916b39"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "05b3b2d17527399f68893ed8b72f6c92"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "5ec10057915b6dff70aa4846f4eb1763"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b62c81ae48465dd536782924b9afec3b"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "0228ee2f278b9339652894b753c29599"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "612b1f74dfce6253a5ac508b45664f4e"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "39d89e0d3a9ee91bb729e45876b94840"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "806a155dbda4e2d3914e2144f3190d59"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3b813d69079c3797ff9a081a8365d497"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "7c52148a72bb999a43238362ef2cf81c"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "e9e9fe047573a0a6576a074239d775ff"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "0c2c4a2adcf9d2685235b0794ac3006e"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "5b737ada3fbfaa6a274208baf1c36281"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "57a320aa7de80eb22836348cbafa3518"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "b916f109a197076531274e2ea46af6fc"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "ee05241719bea4a68711756ec95ff455"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "714512f75eed2f27fa5f600887b71065"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "90171edc19b789aa2f125720f2121092"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "94c27d861b8c46712ac215ff11e03bdc"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5c121cb9d629de17676e4c3001f3d926"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "2e9c78d40d0097161a66df06fa98ae33"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "9bac21f23df1bc6db7c1495dd48350f6"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "b7f6ddd0cfa9c85011dda6e7018682f1"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "cba337c95861a3ef0ff8454f8b32bb4e"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "a8a509b5512b23fda3c3d10dbaaf1d51"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "4607d48b70f782f865d14e8384e2dbb3"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "3e3b3d83bcadf3d402f354fc139ff57a"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "6d6316cff1ad0a0e458eac0249ef105b"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "c71756fcb134927eb4521e3e1c42632c"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "c2e1794b566928dce043c620daf291b3"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "79fe1f569117b09dec54bd805920902f"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "b1d59d877908abb67235b9a5dd09b16f"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "ddfe95afe34b7aa92c91f128a99ec573"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "d738afdd1f39f3d7da7b79abc80a5bcd"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "0933c62d2a2bdfe881b4ccc81f2f4ace"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "194178caa7efc3ae25ccd329b8a064a2"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "b73b08538212968d8b596df910cd0f7d"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "e4603f0b8b446b0c7fbcae4b3f614777"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "2e9b860953aa9bcb4d5d65bd3ce74398"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "955be8e7b4bd0a62a05e30be61fa209c"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "89784510b845112a1d7f11499b98f9ae"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "2de05bdde546d08c4207375ce5611d25"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "4124b0e4893b01d693c3ddec620549c4"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "3a68f9c5f3fd1359ad241e5204c5c219"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "cc1f3e3e4adb405d3aacd0c526362941"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "5544cec6eea66878cc3577db10ea0983"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "ea40f134015b3b6844bbe676aca10783"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "82457a1077fc1cbdf1dcbef1c97f870c"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "c072a5d9ff0ed647cde4ff9d43ec0d3f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "747a91421ec5567cbfe25d126d505222"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "cf933073ec515aab4057f7c457055514"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "57d2f21568261e385e7e40caccb87540"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "fb5fb833910d2e308a9734e23d1a792f"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4b402609d7aca33f07b83a5f88b3a44b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "8082f7198bca877ffd17d7da2d22eefe"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "d7070b0554851aa0410bb0e96425b8cb"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "37b7cafb5c8b0a4249c6bcd347d2a277"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "4b0fb1242abc106d4118700d15dd54cc"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "98bea0473405642c5c9668f52838ab85"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "bb23eab42968e028ae26c7217a7fce79"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "65a1ef36a45ac8d530d87cf18f92f1ae"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "c34c20f7c356c8866b95862655faa10c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "d39c40ab7a8b984d0ebefb4107944616"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "29ab4b332dd9b58b723ca6db27666524"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "d63789c4464cd776035e6aa241a81a33"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "5093bcabc0d688d7c3c24777541a3a5f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4357810cd3433643fb942b598382dddd"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c3ba425f0853692db5e97dea2fcf5b51"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "0df7a96947492bc8a49565887cef70a6"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "ebc585b51e72aa18afca394836ed7682"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "f0a3490f877ca57f44703bc57c3174bb"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f70dfd5fa200a96eb2ac54ade962183a"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "07864a5618dcf38c2a8e3ae20d1aeaa4"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "c0517658028fdb8ea26e48f7f942e92d"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "fb79054c2417c16c0fd6d95440dad6ba"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "82afe9776bbc5e402f5df281eba6389a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "2ea091895fd95718348dc4117c9d05c9"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "d5c17e5f75444c5d3c3ba22716041708"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "23d2a6df4270543fde0a3ff08e299930"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "9186529618f7826867f6ce8b4cd1142c"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "31a0b0693370828818f00b7ff8ccfb33"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "a7a6cd090423311d7ff3ea175407506d"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "9987ea1586a906432beed1a855c8bae2"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "5d83bf429a1f0c85761407a39135cdcf"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8bbb03290c47608039b66741cccba20c"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "c639136a6c25b874dbc4d54b68fffebc"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "9f9efb31e67cc34e34ebd8521e8edd92"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "49b71a85eb72b6f8e52b2e7a6fe3e6a8"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "91efb542e2c4958ca1daca40804381eb"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "fa59447b25c70a4775ca4218c7347580"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "d8df2101e074eb273618dc94e40c753e"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "02365e3c403656b03a3b1e3ca1318e92"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "bd008c894f3eac9475f35c32370587b7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "5836f27236e793eb6279da0f4a6a4f7c"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "a937991a799dc9401204ec2a74c37a42"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "77569609a2b6dfaba3237d15f6219a69"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "7f1e7cc24393e55b070a4271c1024b48"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "e57a07f9912c53d737ae76e17e8b0219"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "022d467d6fbbf258a9e24a199a79a6da"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "379c1ad585c777782cdd46e17faf7d53"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "2fa2ae67adc1f5d86a8e696e52a0efd5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "d3f41cfd5a57acddc214cd16b5b35339"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "6505e4df98f5b97b83f18f6eda5db727"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "80085f5f56564c8f11ab205046aed816"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "4ac6208abd31ee77550167cfa4f7bf6a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "6e153d60ff41ba4f829cf3b8dd50c2b7"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "cd9b22e5426f3cd1461098c8d308c885"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "09169d27f760d068880d8767c75b0392"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "d9f3261de882b879dad38a13db942fb7"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7ccacedd62752df9b6c237dc7f37f48b"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "0b0621108fa67a03b5e0663edf1a0a77"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "277cbf68a382a1e46d05855dc36bd69e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "31548a335a4471e33fb9212ac916e2c3"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "b22ec6ea2db5b48caaad10161f60aa53"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "49a098a78060f6bf0678f69a93b8e8f5"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e6e7baa47c5c0085440364fdbfea9e73"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "417a7bfc53f59ce70c457e555d315dd1"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "ee8031554351b20e11edd7469a9f0cd2"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "23a42c2592a4985114d2f496241d6947"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "827b9c5a6deea9a91c4bc8a0146b0ee5"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ae5fc38c4f3e3fee503f8fcc4c6eaf3f"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "245ca0a6844b6bc904a1d8981f265d9c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "7c0791b73cb1e7f6f2144036d2223c3d"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "787332b1745ce26fc5a9d16c0398c7c6"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "293f7ef8c5c55cd6f7b58be6a6d116f6"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "82732c7d96865bdf3b677dc15b778883"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "33ff57a6fda35165ecd42510df59e51e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "e5bc949a9f37a52dee555f09c7e90267"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "cf6a1e3d44e1e3771aeb9c5235260cc2"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "3696b1bd2b6fcc7dbca58f70b0261737"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "e02f114e2560b8bd5c5abefeea6312a8"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "9670f988cf75490e14bf4cae16e7efbf"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "4e334f2db83e8eb8d0617042d30208d0"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "2e579cbe0fd6ea237a83b1a472b35bbe"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "ff6707fb957fbe347c83d34219a6aefc"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "25b265f6b4155107116211bf8ed4632e"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e3ba7bdf1784383b35e38c4cb3a94171"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "653ec5e5c8a7d442a9bd752b0ccc143c"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "6b4f82627de682ad958dee30dc2a07ec"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "1a088ac00842d01285c0fa9384a459ce"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "4f1e0e9e8e90b025cc9e6d6721777a9e"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "80b8046eef86bba5748d3bdcf33992d6"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "99cc5381a36e67ee24dce512442a8dba"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "401aabe43e1bc35cf96c51453333dbae"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "cf1af1546d6582b1eb6fe8dc8bbd7b32"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "fdf17e2177059f90f1c8dad719cec9d6"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "ca95b018fa99311d4992d20aeef18a2b"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "f3058eca80031b5a18f86df7f9334e0d"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "64a2ca143fbb7a02270ebac7e31cded2"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "04d1a54719d174d65af40284edb2f3e2"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "0c07a6cd5bf7ae32e8f49deecc1992ac"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "c14cd624626ef9afb7e88a490f0fc89a"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "28738b59e084f6b4c510ff3568dee73a"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "1cc0ecdaffb53672ab7785ce428ea17a"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "bf345745ae74e180d841b9ff0a34ccca"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "889493220a7e7b97582d1b98312726b5"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "4ec8c9768273a40b51abcaeff30383a6"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "5d536cb7aaa911cef4db9f183d992452"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "d9fcd40a622f39a67ef3b6e7faf670c8"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "bf266f78da40b3dbeec9f50fb47bd90e"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "46bf602180fd915f3f515eeccbf35411"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "277f0b081b0659948e57e9a4a6b27425"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "d661b3a3d609bedf9035c4fb0ac70f09"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "0195978f5566216fe5c83d843ae5f201"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "c85f53f8b776c3a6f0c37b8d5b93e631"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "c7999d9b6809cd343d77dd73a0c914e9"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "4ff51ce54a00b6c8dd0645d439248a70"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "082f09a66e1e81615ed7ac0e1e6185b3"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "786d1d8e79193bc8cc730ca1a052bd39"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "6049aaef79f292c6666f4012927e2707"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "8a3c8f53423c84673a083f4bd9fd95f0"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "3a4bbeda892239a47a65f3d8716c2414"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "76b061b4fd4f663eb117e0dfbfec78b1"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c1d8e943b7d06cd487dd49d8831c8afb"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "2e76700b56078058497fc4bb960a3350"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "47f84bfccf38ad8987bf407462925ff3"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "705ee77b41144d3ad5351913d58c3840"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "6b63f687e0435296d79d14b93fdccfef"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "e9bbe6bd40320959d41f7383ee7d3978"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "376989fa1b5358ec2ad783fd82b5b2da"
  },
  {
    "url": "404.html",
    "revision": "bb622f87e8f84dcc8552aa147ac0bff3"
  },
  {
    "url": "assets/css/0.styles.96c1d9de.css",
    "revision": "d0078f913e24effeffa73299ae9081c5"
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
    "url": "assets/js/10.592a2da4.js",
    "revision": "be874686f34c177e59f6ab77855a0e7d"
  },
  {
    "url": "assets/js/100.54471ada.js",
    "revision": "1f29e877bc10667aa4e7634d28529ae3"
  },
  {
    "url": "assets/js/101.9502ad6c.js",
    "revision": "108c0bec30260c19845093d85c2e8045"
  },
  {
    "url": "assets/js/102.1c4c011e.js",
    "revision": "42e67a837638311daa00bd03d46f67c6"
  },
  {
    "url": "assets/js/103.e7404bf8.js",
    "revision": "bfc7a07ab0b73437435e3488c273fb8f"
  },
  {
    "url": "assets/js/104.05ee1b9c.js",
    "revision": "9249e7d92f4bc01fb87ee77f8816f6aa"
  },
  {
    "url": "assets/js/105.b8c03599.js",
    "revision": "3dc231d3482d6df939021a475fe155b2"
  },
  {
    "url": "assets/js/106.2176a062.js",
    "revision": "6c95a9e6b710545dadd54a28ef7366b0"
  },
  {
    "url": "assets/js/107.f76e7742.js",
    "revision": "cb0f6be4da2b8ca37388af952fe56c53"
  },
  {
    "url": "assets/js/108.37dadba1.js",
    "revision": "5314768ae9bfbee058f4a37bbb4b08c2"
  },
  {
    "url": "assets/js/109.d7c55e7a.js",
    "revision": "160670e72bdd736611f5876109c7ba82"
  },
  {
    "url": "assets/js/11.705873d9.js",
    "revision": "14e63431182d33c8efacd6592db71120"
  },
  {
    "url": "assets/js/110.3567e3c4.js",
    "revision": "efb6c0249146188b325dabb55945dd76"
  },
  {
    "url": "assets/js/111.8e3bdae3.js",
    "revision": "5d95caccb538bde14d014e35f9d05d0b"
  },
  {
    "url": "assets/js/112.1f35539d.js",
    "revision": "1a52c5256528a8411bb123593797d43b"
  },
  {
    "url": "assets/js/113.41727398.js",
    "revision": "082323e1d0ac7ead5c2f8cb09d65795c"
  },
  {
    "url": "assets/js/114.20b9ea12.js",
    "revision": "a16da3f0fb462133a7e39e69ab63bb0b"
  },
  {
    "url": "assets/js/115.9b5f6301.js",
    "revision": "c2724798f44a1aba261eaef529bff264"
  },
  {
    "url": "assets/js/116.0bd26f17.js",
    "revision": "239f71ae2461b22b840e0e4ba299dd49"
  },
  {
    "url": "assets/js/117.8896d4f0.js",
    "revision": "207ab8c6219dc894574e72c261aaddee"
  },
  {
    "url": "assets/js/118.0b090745.js",
    "revision": "2f41832816a4dce2c894e5612b0ab6c3"
  },
  {
    "url": "assets/js/119.b8b212e5.js",
    "revision": "11c1ba6c23b6b2d36acd84bc250a99e8"
  },
  {
    "url": "assets/js/12.6965f2c4.js",
    "revision": "188a84793e8c8df3c44a1faaeed1e84a"
  },
  {
    "url": "assets/js/120.6b051fc0.js",
    "revision": "08d9fae9879eed4474632fb638fdd335"
  },
  {
    "url": "assets/js/121.4e33b273.js",
    "revision": "1a58a080d22f5c6c92e7d392cc24d1df"
  },
  {
    "url": "assets/js/122.18998b5d.js",
    "revision": "0e02fff3b6cfeb94de990b8083f82db6"
  },
  {
    "url": "assets/js/123.f657dfe2.js",
    "revision": "7f8eeae8c9faad0648669b5a01df3cc3"
  },
  {
    "url": "assets/js/124.31f0c009.js",
    "revision": "2900f052b4a84c5911742733ad974953"
  },
  {
    "url": "assets/js/125.8a2bdc96.js",
    "revision": "dc6f7796cc5c274de0a05229f1ad01c0"
  },
  {
    "url": "assets/js/126.6bf02690.js",
    "revision": "545d9674ee608319c273f99aaa564d11"
  },
  {
    "url": "assets/js/127.4e3909af.js",
    "revision": "5e5f06ea3b6ef1b68c508ff2acfe2bfc"
  },
  {
    "url": "assets/js/128.80ce20c6.js",
    "revision": "7fc467199449bef4806d2149294c854b"
  },
  {
    "url": "assets/js/129.38ce6886.js",
    "revision": "5eea4e05c2ebdcb1b6e8990b1dfbc2a5"
  },
  {
    "url": "assets/js/13.dea5eb87.js",
    "revision": "ce67cabcd45cd1690ae6e46aa21a7904"
  },
  {
    "url": "assets/js/130.755a651d.js",
    "revision": "0dbc08bcacfdcde6dac7dd3324eeab7f"
  },
  {
    "url": "assets/js/131.138102a5.js",
    "revision": "6932bbdc7212015b660a1786de73b253"
  },
  {
    "url": "assets/js/132.c01acd44.js",
    "revision": "5e42ecdd7a158bb7d4271b4a382fd199"
  },
  {
    "url": "assets/js/133.e905630c.js",
    "revision": "ca256c2f042ad601467c2a49c5d54f96"
  },
  {
    "url": "assets/js/134.d164ab25.js",
    "revision": "706e3a8c8556b89b7e6d1de538d5ca46"
  },
  {
    "url": "assets/js/135.c7b77c7f.js",
    "revision": "4fa51255e56fadf7b88f4ab7bfa5d0c8"
  },
  {
    "url": "assets/js/136.70a46bd1.js",
    "revision": "1a37ede954cfc6015e15922ddad8a365"
  },
  {
    "url": "assets/js/137.979eb466.js",
    "revision": "b4f7f293d1a9bcc62066dc0180365da1"
  },
  {
    "url": "assets/js/138.f860b57d.js",
    "revision": "c04f03d78f5658629a403202c5d7b737"
  },
  {
    "url": "assets/js/139.1537b789.js",
    "revision": "11c41003799abc62012e768c55d8018e"
  },
  {
    "url": "assets/js/14.2cd0d386.js",
    "revision": "96e47c991cfed950104c9e46e1df51e2"
  },
  {
    "url": "assets/js/140.2745da2b.js",
    "revision": "6932378ed0631962e038803c9827815a"
  },
  {
    "url": "assets/js/141.7f0cf1a0.js",
    "revision": "240ea33a30d2f130c8ad0968b7dc8fbd"
  },
  {
    "url": "assets/js/142.125d1519.js",
    "revision": "d4a57ce3f7025299a69a432cb2d01e63"
  },
  {
    "url": "assets/js/143.d8d53784.js",
    "revision": "a4af6f8ec4e7ec7fc4d05d3f5a14fd17"
  },
  {
    "url": "assets/js/144.b76ffb0e.js",
    "revision": "ae211e73e8a66eaf0fe49574c08f632f"
  },
  {
    "url": "assets/js/145.f5f42961.js",
    "revision": "203498247c8998df2bebbfbc34c9b2ea"
  },
  {
    "url": "assets/js/146.1f56f76b.js",
    "revision": "739cfc48760a8bae5a3b4ff60da7a6a3"
  },
  {
    "url": "assets/js/147.b6a23ed8.js",
    "revision": "56f5352439115facf717e6a1cb217baf"
  },
  {
    "url": "assets/js/148.89839286.js",
    "revision": "04a69eb572eaef173f7d14fda53e76f5"
  },
  {
    "url": "assets/js/149.fbf81d1f.js",
    "revision": "f37fcd96674717e53bc4003e662af0d2"
  },
  {
    "url": "assets/js/15.2da0722c.js",
    "revision": "994d0638a4699fd7c3e346c546694198"
  },
  {
    "url": "assets/js/150.446fc805.js",
    "revision": "33005ecded2d94b843b920c804884566"
  },
  {
    "url": "assets/js/151.f774c377.js",
    "revision": "68d0a737ac12a6375533d83b2662f1fb"
  },
  {
    "url": "assets/js/152.3214f475.js",
    "revision": "5901885e22b4c59808f9ca07b84648bd"
  },
  {
    "url": "assets/js/153.e9cc5828.js",
    "revision": "934e01c9a446dfdb84c457da57560567"
  },
  {
    "url": "assets/js/154.efeaf337.js",
    "revision": "26b62b94718b4ff74d81121124d1498c"
  },
  {
    "url": "assets/js/155.224a97ea.js",
    "revision": "c1df20c39c64d663dfcbbbbf10370132"
  },
  {
    "url": "assets/js/156.6e17c93a.js",
    "revision": "7ed18994ea3e42ed777bcbd1dfde491b"
  },
  {
    "url": "assets/js/157.f0e6558d.js",
    "revision": "a19c23c6c654af399ef68cb0cab86862"
  },
  {
    "url": "assets/js/158.fddc17dc.js",
    "revision": "ca0690685939400e4a4c13e2c89128e2"
  },
  {
    "url": "assets/js/159.f51f908d.js",
    "revision": "3b18c2bb1736aa5043ef827634484606"
  },
  {
    "url": "assets/js/16.14cf2eb3.js",
    "revision": "54e283d9c222e5cd7050fc0cd8163166"
  },
  {
    "url": "assets/js/160.2eaf0aa0.js",
    "revision": "a0a2bf6837b0a7d393c41306b2a1dc60"
  },
  {
    "url": "assets/js/161.0f4c3657.js",
    "revision": "f501f9b3c280eb3df375e80624134a03"
  },
  {
    "url": "assets/js/162.22348aff.js",
    "revision": "f906858b7a61cb87a38a364652f34b55"
  },
  {
    "url": "assets/js/163.678cc928.js",
    "revision": "75741ce220c1752eb1f1357458c22a82"
  },
  {
    "url": "assets/js/164.1947f60d.js",
    "revision": "a7fcfa2c2e5eca8c7d34e29939adb8fb"
  },
  {
    "url": "assets/js/165.45afb084.js",
    "revision": "273cc169d2b0693c596b3c487de223e0"
  },
  {
    "url": "assets/js/166.7892736e.js",
    "revision": "227858b5283b93135c2e8aebd89cb2e6"
  },
  {
    "url": "assets/js/167.58ae2240.js",
    "revision": "94f32237bb879f56dffa29157eb59c64"
  },
  {
    "url": "assets/js/168.e57ca1f2.js",
    "revision": "8642fc50bb9ed0dbc9da0d581f3406cc"
  },
  {
    "url": "assets/js/169.e839b80d.js",
    "revision": "a52f5c4713a8adcc67e7bbbb1a1ff269"
  },
  {
    "url": "assets/js/17.f9ce2c33.js",
    "revision": "9b08d3ff1212b70209506abcac9a02eb"
  },
  {
    "url": "assets/js/170.76cf018d.js",
    "revision": "f3434e15443a93a3c2fb658b0b876510"
  },
  {
    "url": "assets/js/171.b937e8a5.js",
    "revision": "29283331f367d1aab630f6887e2c018f"
  },
  {
    "url": "assets/js/172.188aefb7.js",
    "revision": "d5a97f6067bdeffb4a53f08936341fd9"
  },
  {
    "url": "assets/js/173.34c7133b.js",
    "revision": "b0ad2f4cbe8f7b7f507a1e900ee2e5d7"
  },
  {
    "url": "assets/js/174.43b4336d.js",
    "revision": "33775f6805d322aa0460c98933ec09b9"
  },
  {
    "url": "assets/js/175.60d93699.js",
    "revision": "8101ba578b80f8650d7f941218197db3"
  },
  {
    "url": "assets/js/176.40a77dbb.js",
    "revision": "7053669a7bd73b346f25c288dc17800b"
  },
  {
    "url": "assets/js/177.36732fc3.js",
    "revision": "c323e4621d2df9efd95427d99da0c9bd"
  },
  {
    "url": "assets/js/178.4517c7b0.js",
    "revision": "b213dbce4c045c7b815b51b2fe50cefb"
  },
  {
    "url": "assets/js/179.5af41c3e.js",
    "revision": "ca45b1737b511e01bf81f8b5f51f3235"
  },
  {
    "url": "assets/js/18.c2d1facd.js",
    "revision": "3f31c1f6c55498ee174a3816ca2f20a9"
  },
  {
    "url": "assets/js/180.c733e33a.js",
    "revision": "5ef776e8d27cf762a147cc816dd3041c"
  },
  {
    "url": "assets/js/181.a2a00b81.js",
    "revision": "0058f4c6700257485e3a9fde47a988c6"
  },
  {
    "url": "assets/js/182.02cc6ae5.js",
    "revision": "de18d23e771aedd1fbb7d9a00ef60752"
  },
  {
    "url": "assets/js/183.7c55a659.js",
    "revision": "921e9cd15f39cc6c12691e135f54afbd"
  },
  {
    "url": "assets/js/184.399b06ec.js",
    "revision": "fb1710f2a1c4b598c861490c4682ec28"
  },
  {
    "url": "assets/js/185.ce8f23d8.js",
    "revision": "f1d8bbcec299bb122c34c66026c8f345"
  },
  {
    "url": "assets/js/186.f234a050.js",
    "revision": "48e33d1bf88cc05878871431f2b32e42"
  },
  {
    "url": "assets/js/187.76108a33.js",
    "revision": "030cffd3ddb4f8d1cc2b6a901bb2cda8"
  },
  {
    "url": "assets/js/188.3b72a635.js",
    "revision": "166cf4075920dd99527cdd312b069ba0"
  },
  {
    "url": "assets/js/189.fb1a72cc.js",
    "revision": "954e740956934d0b53b1b1ed54847aa3"
  },
  {
    "url": "assets/js/19.8a689b22.js",
    "revision": "83f9fac0b37aee619c3104457e023068"
  },
  {
    "url": "assets/js/190.88f0f1d5.js",
    "revision": "7e3fd1e2ff2bdedf18ff36a9ba800c83"
  },
  {
    "url": "assets/js/2.765ba0d3.js",
    "revision": "7dd3859d268b0d05f19cb401ff313faa"
  },
  {
    "url": "assets/js/20.21582e9a.js",
    "revision": "5524047d6d8125a25bffdc2b87ea7af9"
  },
  {
    "url": "assets/js/21.cbba55f0.js",
    "revision": "3ef2994c166e7332413fab10ade8cbeb"
  },
  {
    "url": "assets/js/22.5d129b6a.js",
    "revision": "c062f5b526d61126957b0f038f7e9e7e"
  },
  {
    "url": "assets/js/23.8aa483ad.js",
    "revision": "e2457cbc1464ad390a22064aebb394f4"
  },
  {
    "url": "assets/js/24.6ad47a93.js",
    "revision": "03c500ca78eb420399b875450afe294c"
  },
  {
    "url": "assets/js/25.3377b8ea.js",
    "revision": "ce47d1f4d9d596bd6aa6a3b9e04eeb51"
  },
  {
    "url": "assets/js/26.a5c21c53.js",
    "revision": "fdaa8cc904596e1fdb4c6291de8357c8"
  },
  {
    "url": "assets/js/27.f77f9f83.js",
    "revision": "48ea2866b1007478de7e7606e9c805e5"
  },
  {
    "url": "assets/js/28.3f5c6e3d.js",
    "revision": "4737c4a0f5473da25c6f7421a45f4114"
  },
  {
    "url": "assets/js/29.d915bec3.js",
    "revision": "7280873f4a42d9408fb4bde9b33fd3db"
  },
  {
    "url": "assets/js/3.b3c66d1e.js",
    "revision": "2e08defe94f71049dd1bdcd7ecfd0141"
  },
  {
    "url": "assets/js/30.2c6c207b.js",
    "revision": "7b2d5c9b50ae157c58c5255907fff1b2"
  },
  {
    "url": "assets/js/31.b2572ffc.js",
    "revision": "7b25d5430528d2b602998efc44068588"
  },
  {
    "url": "assets/js/32.84fd4c54.js",
    "revision": "f524cf9811991db2a18c421fc5a9b953"
  },
  {
    "url": "assets/js/33.add459e8.js",
    "revision": "8b4795591357c27a8064a8ba1024c3fb"
  },
  {
    "url": "assets/js/34.b8cf517a.js",
    "revision": "d2d3df22907ed6e1ae62a1a90ca47af5"
  },
  {
    "url": "assets/js/35.772464de.js",
    "revision": "f0cae945ee7ed82f0407394433ff04c4"
  },
  {
    "url": "assets/js/36.3c7ee974.js",
    "revision": "7d3cd5332e4c0cd113842f191162936b"
  },
  {
    "url": "assets/js/37.a666aba2.js",
    "revision": "2aff0cdc65603dba734071e1a365d683"
  },
  {
    "url": "assets/js/38.51b34475.js",
    "revision": "525ce7d5d8f68d512ec3f375b7b485cc"
  },
  {
    "url": "assets/js/39.cb589aa8.js",
    "revision": "84d4e6ffa0bcb5cb31701e6216b49ae4"
  },
  {
    "url": "assets/js/4.8d491dc2.js",
    "revision": "d719c9f4b458a8a7bceb2c9c3a58a438"
  },
  {
    "url": "assets/js/40.512595b0.js",
    "revision": "c89bd8127b19b8eb24191a3f7599c864"
  },
  {
    "url": "assets/js/41.d0471142.js",
    "revision": "5c02baa07fc15e84f7dca35ead6febab"
  },
  {
    "url": "assets/js/42.f49a6ecd.js",
    "revision": "8bc700da965571ee70669a127138c779"
  },
  {
    "url": "assets/js/43.6c9c217f.js",
    "revision": "2c62329e5d2717220180f98cc5c966b3"
  },
  {
    "url": "assets/js/44.64ab773f.js",
    "revision": "f7fe8963e75617b14667c5ed31d93e37"
  },
  {
    "url": "assets/js/45.a5253be7.js",
    "revision": "29b636c8c7cd80322c97af6c934040f9"
  },
  {
    "url": "assets/js/46.47a78601.js",
    "revision": "625301348132365ec1037ae4dcd65f7d"
  },
  {
    "url": "assets/js/47.0471cc41.js",
    "revision": "ae673877d1565452ea61fec2e258e99f"
  },
  {
    "url": "assets/js/48.eae7600d.js",
    "revision": "f0e46f858f0344506c87c955fccbc296"
  },
  {
    "url": "assets/js/49.bc461903.js",
    "revision": "ea417449633ea9e586ef129d5295acac"
  },
  {
    "url": "assets/js/5.38c2a46a.js",
    "revision": "c0bff5e170426b899621199ee43c9e9f"
  },
  {
    "url": "assets/js/50.663ef778.js",
    "revision": "121c6b9dab3aa13d96a5861f3fc75e70"
  },
  {
    "url": "assets/js/51.f465bb09.js",
    "revision": "ad91f874d4ad331b469a2d28c4a831e1"
  },
  {
    "url": "assets/js/52.3884de18.js",
    "revision": "14fef4e1e98281b83db690aad462d572"
  },
  {
    "url": "assets/js/53.f8126425.js",
    "revision": "b7e7f5fa342e97b751f491168a1427e6"
  },
  {
    "url": "assets/js/54.21391662.js",
    "revision": "33b5cca926f4361a8a0068b6cc90bcbd"
  },
  {
    "url": "assets/js/55.96b6e897.js",
    "revision": "948b7c88895e31384370dce297a7bfc6"
  },
  {
    "url": "assets/js/56.f1b8aa9d.js",
    "revision": "156f937f1a87849a39073cdb1aadb59c"
  },
  {
    "url": "assets/js/57.80d48017.js",
    "revision": "aecd63d8ebef8e94474fef8c8eddc02e"
  },
  {
    "url": "assets/js/58.bff1edad.js",
    "revision": "1cecc7b03e22e9957ff828e3d60b39ae"
  },
  {
    "url": "assets/js/59.9941cae5.js",
    "revision": "058300d5ad54e7186a3402143119b7f8"
  },
  {
    "url": "assets/js/6.d358323b.js",
    "revision": "9db5635c86df6f0a4337cecde72ce2ea"
  },
  {
    "url": "assets/js/60.a84147a9.js",
    "revision": "7e7a88fd19d774d5087db1ed9fb656ac"
  },
  {
    "url": "assets/js/61.946699f4.js",
    "revision": "ee47f221e449160d4c0b7d732883c8e5"
  },
  {
    "url": "assets/js/62.d3509768.js",
    "revision": "dd56e7b109a20111b635932280735859"
  },
  {
    "url": "assets/js/63.d83cc5ef.js",
    "revision": "217ef4ad46e69faa5b0f7545abc2188b"
  },
  {
    "url": "assets/js/64.03dc0d33.js",
    "revision": "55b3bca7b121858342f511712c31a250"
  },
  {
    "url": "assets/js/65.38d38d82.js",
    "revision": "7422f07291ffd71577fef61f3a3d021e"
  },
  {
    "url": "assets/js/66.e8f41d70.js",
    "revision": "ce0e578f289dc131af65a7ce389aaf5d"
  },
  {
    "url": "assets/js/67.71e7985f.js",
    "revision": "16809202e7ccf08087fbef68042c4061"
  },
  {
    "url": "assets/js/68.451df372.js",
    "revision": "6c2b8b439bc9f933f5ad6109a5638816"
  },
  {
    "url": "assets/js/69.4ed3fbc3.js",
    "revision": "3e943d33710917b13a2d5cea9b764025"
  },
  {
    "url": "assets/js/7.57f93c4b.js",
    "revision": "9db7fb0c656c9c9398dfaf70d2e435ea"
  },
  {
    "url": "assets/js/70.6f4d856d.js",
    "revision": "9a34e58224b0740b0f4b706d5e99204f"
  },
  {
    "url": "assets/js/71.313d2fa7.js",
    "revision": "e0affb96334868b54caa2d1ae4a3611e"
  },
  {
    "url": "assets/js/72.aa7c6250.js",
    "revision": "da57f10bc1436fb36493899d5a096d8a"
  },
  {
    "url": "assets/js/73.98d8e79f.js",
    "revision": "740e991624183559fe7a723f574bddbc"
  },
  {
    "url": "assets/js/74.a0239f81.js",
    "revision": "3e77c34c43e31b3bf460bc07e69220f2"
  },
  {
    "url": "assets/js/75.aead22dc.js",
    "revision": "f9836456f66ab604c36dc5baf9d0184f"
  },
  {
    "url": "assets/js/76.dc46f4d7.js",
    "revision": "5436b23e9dcb7ca662d897e8fe1c02eb"
  },
  {
    "url": "assets/js/77.9951424c.js",
    "revision": "687ed811564c0767345d22d164829788"
  },
  {
    "url": "assets/js/78.2b651576.js",
    "revision": "243429823c442c9a7f511778bb265a46"
  },
  {
    "url": "assets/js/79.77a3aa9b.js",
    "revision": "b448e64e0f087764bc8c8a94d7d66f33"
  },
  {
    "url": "assets/js/8.1739442e.js",
    "revision": "c62b5123b1513f09df2b1a86bdfe27c9"
  },
  {
    "url": "assets/js/80.044fcba7.js",
    "revision": "850a8fc8b13e03fd5608386696c3a0b2"
  },
  {
    "url": "assets/js/81.1f9cc8d1.js",
    "revision": "1d5dd7e7d42a6e50c0715c4da5bf6cf8"
  },
  {
    "url": "assets/js/82.80b00f91.js",
    "revision": "755632ce433e1c876443fbd43d59bea4"
  },
  {
    "url": "assets/js/83.2262884f.js",
    "revision": "eac9db8969f901175b569c5b4ce12a69"
  },
  {
    "url": "assets/js/84.347e4af5.js",
    "revision": "f5ca81931343bbfd8998ae6dc95073e2"
  },
  {
    "url": "assets/js/85.14f3dcec.js",
    "revision": "0db854e663e50cb4e9566fd7d03759b2"
  },
  {
    "url": "assets/js/86.3bbf8c94.js",
    "revision": "6fd69adf18e31418921469b2b0feda84"
  },
  {
    "url": "assets/js/87.793a2d3f.js",
    "revision": "9e90c53606380399a9adcf357710df95"
  },
  {
    "url": "assets/js/88.2926c9ab.js",
    "revision": "f8c9cd6766aa84ad35868ee7c5c051ea"
  },
  {
    "url": "assets/js/89.41bf1dd9.js",
    "revision": "e0e990027d134d88fa13e06d8e9c92a3"
  },
  {
    "url": "assets/js/9.b832aade.js",
    "revision": "c1ab8143de580d2b47ea33fa1b65aa2e"
  },
  {
    "url": "assets/js/90.05dfa8e2.js",
    "revision": "106b5ea7dfa3f40962b176df71771c59"
  },
  {
    "url": "assets/js/91.e49a2fff.js",
    "revision": "299bdaad380217b527ccff6a67120a84"
  },
  {
    "url": "assets/js/92.4ce6b690.js",
    "revision": "dadf9f16f8aa0ec74a8f754c8d89e908"
  },
  {
    "url": "assets/js/93.7d4d81b5.js",
    "revision": "a15235c9d73dec3beb0a113e7494f1d6"
  },
  {
    "url": "assets/js/94.7a4af4b5.js",
    "revision": "e186c9ae4da93775b84746623f4aa50e"
  },
  {
    "url": "assets/js/95.fdf59d12.js",
    "revision": "a845f294aa25a72857a8dd7c0f61f85c"
  },
  {
    "url": "assets/js/96.7cc9caf1.js",
    "revision": "1f367e3eb79f89fb86e5faf31d1a4ee4"
  },
  {
    "url": "assets/js/97.80896468.js",
    "revision": "24e9c62a4a7dc8bc015aa685660db7fd"
  },
  {
    "url": "assets/js/98.396990ad.js",
    "revision": "ce433e03567df916223c9ae762453652"
  },
  {
    "url": "assets/js/99.47cc3017.js",
    "revision": "d76710b1a622e984d17767280616bad3"
  },
  {
    "url": "assets/js/app.600acc26.js",
    "revision": "cc1b2be88c18bcc0d18364628a4a0686"
  },
  {
    "url": "index.html",
    "revision": "358f127bbe5c1c628a1e31d3e08dcb85"
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

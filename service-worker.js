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
    "revision": "7992e0734dabd169d3bb9c01d162212e"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "59dfcd7533babfe637e9409956e6c13b"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "af504b2292666ae8eec477d9e6637d21"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "77acc66de43ad1057024c29be1594a9f"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f7c44dc7c2f626e711a2337e3f6878fb"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "f9e4f21184fc2b52f0aeb083d68254f5"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "ae0858433705bc11c2039a2aa73862b2"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2ae55bf0ff08ddd680a56d490eeed70c"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "cc16c0b3a54bead7011336e361bdf131"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "39fa5c2a5598f196b4ea2c8d032ebf57"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "13f7c24ec3527422bab56cbb5aed12ea"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "6f9681497f540285990a235f3e3b072b"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "d5ed751065ee65a1ebff0b40231c4675"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "3584b0bf71d783fded266ee18fbd74f5"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "996d8a4847c2f2bbd7921f4af8b1d175"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "9c279e4256a762a6bba15e66598c29fd"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "36c98b0aca51f4b9f01ca3562672be75"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "107c98b02bac402afe87292a61f6e809"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "2675ea841fe7c6c165faac35ac4fa59b"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "414aad62e3c4f60784ffad6b8c300ae5"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "ce099502e2fb6519ff203d09c79ff0eb"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "1929333801e0ad13229894c84bd368e7"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b9ee14cb357abaf73418ea3e3bd97297"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "62b077f07689ae91c3eea2ed840b944e"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "f2645e946f3dd8c17dc1a40328f593ca"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "939e50d8039251e781cd6a30f07cc9f6"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "96d2632421a412d5c23cc0b874ae38ca"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "a21ff3a6cb07350ac0cf95514e6f7c22"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "05fefdabb18ef38f94066ac59390eabf"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ba05c228ec85aacf5c7932f0c5b20004"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "981b28b57aad312335e2db5409872bff"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "a2bd2579d8f206f823d414dd47cd79b9"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "c00cebe5dc8ca1ea0741a6f0b024f2ec"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "11c13d8c7f2c66e1bd3a18271a5b4b1d"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "251f71525b8fb910b6349f4469cb4ae4"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "deedbea22b7e7c6c0e190aae2be1bab4"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "067ede9529c1cfe3222ea2091fbbfa00"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "be231eb123955297573206a8293ee604"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "3666a4a07dc725312b884080a0c9df3a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "48bf52038196d1168a66984dae29b0f7"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "cc630b599830fc756c5825c80a10f4f7"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "e88a0a76ea96b6a93fb3b64edc6c98d9"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "e088fe4533c814e7fdefee1e1208a93f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "4336cfaa2be1bf2edc72d63761b48347"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "3339f9310ea837b883be0f5baa9f8897"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "ff20a6489a82864fa119137201350378"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "d4f8a67499b737b32d137dab1d011067"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "fc563d1c841c31ff2b15a09fe9eee468"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "926db5f054e40aff461ece866b46af7e"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "fdd20a9ecd469a3e909c1f1c4bc84ac9"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "85c57cdcca43261bf9577577ccff4666"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "7335bbefa83f7176fcf24bb7ebac7d78"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "8687061977cea9cb39f0b914cf3b2c01"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "eef6f6a7be65de88d33b90f7af7fd25d"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fc5cac9b5bbe70a83134f19dbd5a3bf2"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "82e5e1a0bdbfb0be00b89a451b3cadc4"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "20794c948dde676571a1729dda0f804c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6d2f1235b6ec32ef14a6ba3f93105852"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "24dc4f17cb2cfc8a9fde785b94e42a08"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "03dcdd788acb57b406edaf43fd853a0b"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "213c416de9769c5716751f9a2e13abd8"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "56edb111114b3a8134c8af21abbd664b"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "e2b9401997b320ad4dbd1dd4a55b2186"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "71ffc14d68e8053044262db3f255d2ec"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "0efd20aef8ed51597a6175a1f241330a"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "445ec8c61a17cc17c95d38f37939e647"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "c67c48208c114201115e2b8b7428b07d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "b5e4ee25aafde3dc3812da6ab530f8d1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "1bd6f2c4c3c3253f47ea35b5b034c537"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "aa7673d05868a8022edd4ebdc5d3f65e"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "016023461ab75b3805d44d568c12cae0"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "6a263c656d8cb868d84efbae90ee8761"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "5ad47be8d96a18ea348528adaac09f6c"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "35bd9bb5660a441f36d4a58624676f8a"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "4b9afa31f75ea5c4ced3f60406c08b93"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f1dbe84e233e0852d4afd601fc94260b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "a31888227261546b198b3bf3ec644e3b"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0d5e19c30d093445a874f5642cd733ba"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "8dffdc32fe0037f62b5cd753d8af8480"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "c845143aa5ed906c353e5fe9098ede7a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "816441d029d26eec8a5da46823bfa2af"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ef59b123d1b1378debad494e434cd34e"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "28d58ce689bd20674844c79c743162e3"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f71ddec8d01b179515f503f3ddaee323"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "e3b5e6413747a78fdc0b317d13dd88df"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "2e06dbe35d0a90cba1c60f9d16e4983b"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "47d89b2fb26cd8f3599dff158b38ac95"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "da61315b4b1560d1431d08be783e779c"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "cfc6ad909135793d7d4db60c75d6e589"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "b4e654ada2aa0c03fda3ba773402281a"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "519a70860aa6550747067e5d2180a744"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "965c21d3648168750db9fa05a2fb6964"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "997cb767800e042530b93974fbf15f0c"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "d64ecde3dbae3e6e3493a9380debba04"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "9cb8118ff4fa3be833729c065705bf69"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "c658e33154d030caf0635a622a36db62"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "3c125277e7fdeb0d3b8f657cad1abf32"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "5b2af4acfb3c72854832d49d0ffad1f8"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "c048f467668cffa0f0cfad697b4e97f4"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "4cdff9845e21ddc5c6371dbaae94a23a"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "9486c548931a8dbc2c3e0aa693fca262"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "5bb8f97fc455d69255a1fe601870ee40"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "6f7933352a4d13c679b00105a349807c"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "bbd0566e9f6ed34a080a0043d2328dea"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "67c2a18da7114f48f9edcf34dfc9785a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "9983ac0059c94d774c34d80160a3f1db"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "78df4de103cabce35c8401d77f635b26"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "88dd0f5d1d73683e29296678c1ff0598"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2750e1fcbdddca81a010007d4b5d8a1b"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "27ff401d5966f3ef8bfbd33241c02549"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "165cdf6ac13f01d8a874e0e2bc66d011"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "6416f9cdc6862708c653317c41692e0f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "1dac416655bfcc67d1316af7bdffa159"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "25bc6a993051cfe06b1269da3588994a"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e454fe07872a9fd8d8e16a01199e2187"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "255322be3cd15e047b5519dcc097e601"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "4dc589945e38d3dd6fbf8daaeae09c9e"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4076bc4f1a631d9e246514c38cbcf547"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "2029dafc8449f5a3208743a7145d08fc"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "15e05db3b152a226ccf09f143bf7714e"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "323829720983f83b5ae4a7bd20269f04"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "ed7d74a7f637936bc88a892aca3c0b76"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "41a21f8c5ab938139a899bce86ffb5da"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "299caf482afe2364eb0ead8571cbe327"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "4ea0efd2993c06e24bf025681fcc3d2a"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "ed83470898c98d69fcf109ed88a15b0f"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "4a2cb90aa47d89b674e815f22d8e6caf"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "89b5f9cf5b2c5eb65625b71414b09010"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "b3e7c21c962a87dabb03437429d4b430"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "7f88e0f7a42515b1fa2967fb60c9ff94"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "5533efbf15c5401bf235c5ef9ee03860"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "68f08eda8739c20762a7399f94274eb8"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "16ccd0a456e0f84dc95c5816ca8eb0d1"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "839ed06dc86415de1b84f4d39201af27"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "02839d1ef6b433637ed0fbf390cb9769"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "b4b8a43e0bd6c3f6f149e83bdcd97a7c"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "74a081283b19c15f968ed12747b2ce7d"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "0e1e1d4954e37a7966b28e48983a4b7f"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "50169161affc808a884eaa12a5fa59d0"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "d18bebca28f3be6480c1fde219dc6b4c"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "f496e5556b2090f2886894966a96d3f5"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fb69ae428ad26bc8b012f54f7bbf1d0a"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "83ebb72a26f403d949ee32d6bcbbb071"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "aa9ff979e065148ac109f8c96d078633"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "074acf27463e30123d2dd1aa337a8897"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "f865df3284235d315f0499347572f698"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "ee9e26cedff427b83828aeb6f57090d0"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "00c391708e992482aed4c103161cb30d"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "2a50bf63739c67cf510e6e68e9bdcda0"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "75a35ac38a9acdcc8eedb2759183356b"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "d3905ac25a8ea15948da974bb79922f4"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "54315292bd2edb751b0ca74b443dc562"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "393add0ad521ad2b020c012ced854c21"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "40597ecfb6b1576613cd2b03197f83ad"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "a19970394643dcf40083d3dd2b8a10a7"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "c368688879d7d64506f30a5d2b1d44b8"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "35dd0c2e004ef6671a22c974b1b350f8"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "f946d7c816a2e4563adab1326fe1a384"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "28b56a2baa81423ebe521971648c2137"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "6febdadc4891411af95f8be6b1a869f4"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "584720e2304eb9855310c8458dc0acaf"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "1eab2b60424a4d95c0781a5f58867390"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "b4933457afa7667b549e890333ed45d3"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "3dedc0d5b2ef53f8d9c4d74a586fd9cf"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "6c6e2ebca82b30ba2307a4387820fd11"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "5041785b7c89716ad4b27fc760b0675a"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "3c1f4211f80010803fe79473763e3c75"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "8cb250e29e402da54c63c4101e27c717"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "e0c73f4117b6ae4db44b83496cc1d062"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "bc4e311ef7edbfec1e546c35d4a6e80e"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "69bde77bcaeb94e6781e31de198f006d"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "e01c526ec83be89c4cbfc1e250f18012"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "c1b5fb4369cd59cc16467456b322e88a"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "ebb44c651382b336fa119cf2be4c984e"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "75969582da3c7db0674a31d8b2edba1d"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "67b01231327d79159df8d1eb08ed25f3"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "2bc477e7907be124c7635ffac19184be"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "338feb3897676b6ae05c4e55c9c61002"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "964e36c248209cf6523203becae8cf2b"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "569cf050c47e326cd105b3a03fbb9cbb"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "228d2ff09e530b8ea26352c921c428f4"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "fbca3c79e79510a00ddbcca51cdd0b11"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "8257529e2b76472faf40dd62c4e203f1"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "702d6dbea728f2e6009981a3656cdb9a"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "4fe5d87d4805a834b4fd4abd29cc156a"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "e4bcf7f60b60544cde0368b5c7f7ee5d"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "67c46e04e44bca59b63776b865781a2d"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "626aa5cbd31cf3caa365cfa209c381d1"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "69b62e94c6703b87b1174e18861f9251"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "ce189a508255842a975325d6a3a986be"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "b9a4a6753ad53fb1fb1dbcde02f59358"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "e8e4d446a1f2390e655c94391f9f9c32"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "22cc03b33f1ec515e2f02275a5a563a0"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "5e28ef0c1de91694304e8a4ec73b58c6"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "96f80472fa03296e88541249d3604c21"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "af39bc14b6e2e39ac5dde0f3f018409e"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "d0fca50bc58bbaef4fa0a04df586e117"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "cc533a44edc718b50006694a619e8311"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "f2f3a12de8477dbbc7ffc13e520cdbb9"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "9b933f234c3dafbe3d0dbc6143d32e2a"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "57dedc92223af1ce59007921af02fd6d"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "c17c0847c6ea3fe1697d96bff70a93f0"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "1fe55846bf9ff55bc00654142938367d"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "f641947a324ebb04318738afad9e38a0"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "b19ffac1271bd832432fbd7872ec573d"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "c23ed408762c3c7bf8cf1662c6968689"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "18a86517aa946f6efad7f6bb96d6a690"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "e5a5164487e890e17a26cb20120618ab"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "9c03efcd5f93e1aed9adac3290736a00"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "7533ef80e48617609982ad47b23059c0"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "5a1e175259ef9811072a8251dde12dac"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "cdc0f5c453cdebfa4e1d4503f684c457"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "6ed9f6be2713f3e42691fd8281a93bee"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "06aa798199481575638190b94506a675"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "2fe725b02fbbd9a827a174d49b2d964a"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "190e9ca2e156077c96bbc9cfbb5418e5"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "13aed0e124f18894ad6bf042eb59e474"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "b3eb999f34c9900350a38478b0038cf4"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "6c7865b58a9f8c8ae4b972d1a4a4ccdc"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "31f32e619aba9e4e054a3a34725424c7"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "ddbaf7c97e9a707d1a9204b6c0362e7a"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "7fefc58bdc93af03d1cb813c39718a35"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "c9a667eecfe7f974b8f55ba64511198f"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "697e62d6a603ebb47e4b19b5b6c8a0b4"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "bb277c8d5d8b4cd0824b5cb5fb1859ea"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "c0559859fa27d8ea4040b399c5be7497"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "2e39d4d4c74cde363cb93d79f4f5fb08"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "db96a92f918a66749f68127297712643"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "717389901c34f2a9972bdc8d440fbc16"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "52b9dfc432117a3a00d55521cb61e2a0"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "800c6fc1f0715c61bd3da2d64592e996"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "ef7625e90fb4400a00d537cc3d694d0a"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "b3d8f54b9e31d45bad0473a0327482db"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "6407092460346674f1995551b691e30f"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "e855d9f091e3541f8079b049d56c336e"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "3add3ebdc9131dfcd350644c5ac1a105"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "060c24e7283b9fb6ccaf31d8e4663418"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "90378ee05d467466f9265ca99e4388ac"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "8fe1362ce26093ede23099a86a996e0d"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "c107335c045594cc29282eec8fa21ec0"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "d4801cd841935903caa202625f091dcc"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "5fba77afe50e106b31ca30e650c43fb0"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "9be84f01174d1d3b11ed350f5ee2090d"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4c388eff54c3cccce198acdec6d9fc31"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "48eff95de5c4488a87cc1c5d46a1145e"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "1eccf4f2a132401083fc2a6e74fd8e08"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "ade27445e017e60d183c2cfc71c1b240"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "1375fc7e1ed1f788bff4800a0bd455e4"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "42aba51e7ddda1ae81d1d814bdf201df"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "640a3a3a77afac576224f4cf9de4e405"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "200f56dc35843e6d3e15c845d09fea94"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "6d0892ee40dbbf9d3ae635c4c942be8d"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "50b3937fde41a0cea168e8023a992c7c"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "bc7d8804644e020823095d8e2fc7bb7b"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "0204e0a51f98ac73eeda91da0e1ec12a"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "320632837dfd6443aa8d12a8bec7e4ec"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "ce4a7e9652017dd4eaeda47297a14b8b"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "e89ceff2992ce2de533b2bde77133a90"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "28ebce29ac8326238366a7df59ee9f4c"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "e735a321bde5409918e55afab42a384a"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "bb1584e6c3926941a139bc68744fac19"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "556c8ff3a05b30faa99ae13d17d9fbfe"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "683914438e204f624fe8ad895b6b1ea2"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "dfa274c347121c0462abec7c8a1aae22"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "1669abf28f0f6455d74cbad8c4745b7a"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "323e9ae8c83cd8a88a13b7daacf59a41"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "481b56943a42bfd568daa0176b6f232c"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "3140ed3e611b838dc363893efa3f794a"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "3a537b16b90ac6f7c71ba03a2b5e7d82"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "d91521e9c109e1151591ded58990ef11"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "69954752fda8d6b3b552255883d42cc0"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "f87500ebed6bb2360599edd3f4962a37"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "6d920429a31a4d25642c627d42b0ef11"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "1e3dbe9aeee3af135d283b421f54b5a4"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "dece3f22b13b7c01e55a27d59a2303cd"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "f04e167303991d2bf75d7608c3a23fac"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "7e57b701cd1472dfe50dce4a320dca8f"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "d6897d784c610f4acaeb27642266498e"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "fe054725589f4ba7a0b0ba6ea03c5d2c"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "e209c4c782ab536784b156510e481125"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "338273b2d5b8bc6dd092d18d2f83e553"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "b04cffb3322400106125b341fde50495"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "16d777c933d89e76ae25815e775413ec"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "66a01bc5eb5ffc752236de63d6738563"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "9bd8850920769409d9a00dfbeb255e8b"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "8c9316a852604e7fb458a7c61ad9f260"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "08cd3cd98ac99eab630da45c6027ab52"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "8bc80e6636644c3f4886ae3bce6fa003"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "b4ddacc3ec9e5ea852fd853a53a4bd98"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "e823bf14cc57d664ae0e42412442f9b9"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "c6b882ae0c248f5685ad3dc899dba625"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "f6e2a88e17a890525f5e78a3713d5f19"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "38cc1b36265e8bdf8e80761f84c2d949"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "bded04be10a1e4eabcea93c26265a267"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "263405710f35bfdddd1a4881332dccfd"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "126346dd645bf7a3eb58a77b0ca593f2"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "2a299224d5e5534ab9acc8b701b99ab6"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "58acd0e16d9f1356c9087e7d7b5ccd89"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "cdb6310f103b046c388b5534815406da"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "7dfcb04c8d4fffae4000f52fd4acdf51"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "2001e021e5de06f1c48093f762202f0b"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "4151e148318ca52be764fd371fd1a473"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "f2a1264da2eb5aff535bb73358f31236"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "cf480e3a5678e639318fb0fc3676bc9e"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "455419990e471096336e1fdca9170014"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "ba9239d7e770b9e77091640d5c885a40"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "707a900c8512c138333fb114e6512059"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "14c2c9615e6fffda98c0a91c320bd4ae"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "2c802085d5eb89885b43b5c1b60c34e4"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "24e71aa24915c553c06c4a4876cba4ed"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "bbc80e2a99a65874e94fb2566cfe0d89"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "f91bbc7e2fd68ad300fa3d396a459588"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f973ba7a4005a1e2085e7b36141da940"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "cb7071994233275c0b9f2d0c47c81315"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "da44a72f17bc5366e82a7fdeed3b1d4a"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "a985664036a6801aa406b0ede00e3909"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "e14e5ca8435b198c14fd5f06531d31f4"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "c3906221c13adaceee1bf8284508d8ef"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "60390e4c8a1999285aeed8a06bc50cc6"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "7f5ee70054c7cbf1999697ab2cb16eb3"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "10f7022235cb82887751ef0721820fb5"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "db36fc0c834414b36be825bc84d4195b"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "face0bfc3b60d19e7339d2aa4258e25e"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "b90d9145a7dd0d143ddb7f9ac13b969c"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "820cfe65e961bd5fb61ebaf9b8895d7f"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "2864745154408496e5ab3b72f4e5710f"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "6bf14947b2bc6a34ccacde27ed563364"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "8847aebdc865ae62800c01fbaeba919a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "843a207acfa293bb903017ae5fc438fd"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "134f3556cf2c09454a7cc623066aa702"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "2e4d1669ced0e6a690fa79dc2b72f7b1"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "d72117267f20df357a8ba0787f4a0b9e"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "b78ecd5b016c04f2aec2ad88477695b5"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "a050eb9099c829d2664c3261e099ea1b"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "e1b53d76261d6c3d95c0b6bfb7c50eed"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "79cd51e41e94c1955d355e12b3824d6b"
  },
  {
    "url": "404.html",
    "revision": "3e68d9e220adc02e5bb28cb56158ca91"
  },
  {
    "url": "assets/css/0.styles.3d1d61bc.css",
    "revision": "baf1cc885fa1c46377c9ed839e36ea27"
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
    "url": "assets/img/create-image-ec2.8b5ede7a.png",
    "revision": "8b5ede7a87d660433e1301892da28295"
  },
  {
    "url": "assets/img/create-loadbalancer.1f352060.png",
    "revision": "1f35206006fd0dcf30a50b21582a08ae"
  },
  {
    "url": "assets/img/create-target-group.9b7b3385.png",
    "revision": "9b7b33854370a1b37ca92c0b713ba640"
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
    "url": "assets/img/loadbalancer-port-80.540ede6d.png",
    "revision": "540ede6d9f0353c0a9ce724fbd1494c4"
  },
  {
    "url": "assets/img/loadbalancer-port.9e77b96d.png",
    "revision": "9e77b96d743d9f3c9ce1d39ecb4079a8"
  },
  {
    "url": "assets/img/loadbalancer-result.9c0b7fbd.png",
    "revision": "9c0b7fbdc2ef530fe8ccb450d9051156"
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
    "url": "assets/img/target-group.98f7415d.png",
    "revision": "98f7415d43e154592baea6c7eaffe426"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/1.021e46c0.js",
    "revision": "e5c22b390b8f5e5779a225d7c5301cae"
  },
  {
    "url": "assets/js/10.67471ae9.js",
    "revision": "d02041e69b3a45ffb05623f17c813027"
  },
  {
    "url": "assets/js/100.00858843.js",
    "revision": "1677c8dc7f910d00af641ea86dc26f2e"
  },
  {
    "url": "assets/js/101.6ff048da.js",
    "revision": "fa24277d2c22cb3ac2e2b000a7717b57"
  },
  {
    "url": "assets/js/102.1938b81c.js",
    "revision": "d8d71fdc8508bf063d7846363520768e"
  },
  {
    "url": "assets/js/103.ea9a1d67.js",
    "revision": "c423abb1db7a899c728acaee8d01e05c"
  },
  {
    "url": "assets/js/104.8eb8c729.js",
    "revision": "4c84fcc9db679a488719c4c22c5cd780"
  },
  {
    "url": "assets/js/105.ba084a03.js",
    "revision": "71b20e5d992b1d0deea0f9b9b155a98b"
  },
  {
    "url": "assets/js/106.db72eefb.js",
    "revision": "abe91c1d01b024381fee61180eacccf9"
  },
  {
    "url": "assets/js/107.8ce420a0.js",
    "revision": "fcbf8da5b95b9fe0d9b25f5266b877f2"
  },
  {
    "url": "assets/js/108.aff480e9.js",
    "revision": "1ea7ddf66f2d36603391307281c40a90"
  },
  {
    "url": "assets/js/109.ddd7d22c.js",
    "revision": "107581e750278140b95a158c3637e99f"
  },
  {
    "url": "assets/js/11.f5133473.js",
    "revision": "0dcd94ccd4d3b2005840404512f0926a"
  },
  {
    "url": "assets/js/110.9be0480f.js",
    "revision": "74302d38c49e2c9cac978119eede9d66"
  },
  {
    "url": "assets/js/111.7174a0ed.js",
    "revision": "bd5a424e330479e1dc16adf760178fc1"
  },
  {
    "url": "assets/js/112.7afc4672.js",
    "revision": "48f20d8f7f10d10923159666c99de64d"
  },
  {
    "url": "assets/js/113.f50d184b.js",
    "revision": "90d154f5526c5a3cb9042f1eb5a3758f"
  },
  {
    "url": "assets/js/114.f252281a.js",
    "revision": "c048ebc2bd8309f34c18ed5f950dcaf9"
  },
  {
    "url": "assets/js/115.1a502c9f.js",
    "revision": "21df063eaae957a7d130d24fbf9c7bd8"
  },
  {
    "url": "assets/js/116.7b823a87.js",
    "revision": "742d62a97a2b126fccd2324703cdda8c"
  },
  {
    "url": "assets/js/117.b338062d.js",
    "revision": "01da7bd01711ca207d982dbadff0bb5f"
  },
  {
    "url": "assets/js/118.612065ca.js",
    "revision": "413748784665378c6536b7d5292912a4"
  },
  {
    "url": "assets/js/119.5d9895f7.js",
    "revision": "0ef2513f2ee6271108f3c8a09ac6001e"
  },
  {
    "url": "assets/js/12.be9d797c.js",
    "revision": "f683223f8f8ba53fcf96a2c3af9edeee"
  },
  {
    "url": "assets/js/120.387f1f66.js",
    "revision": "ca2bc8c90090b1e33cd1a90d063dd146"
  },
  {
    "url": "assets/js/121.28308ddf.js",
    "revision": "0aaa1b99ab4a3e9e45bbaf66719ae974"
  },
  {
    "url": "assets/js/122.f7bd6f9d.js",
    "revision": "26210c3fdbf795ba4d019373a5edb4f4"
  },
  {
    "url": "assets/js/123.f9215f40.js",
    "revision": "cdf0011952669a2ba558a372dc80dc75"
  },
  {
    "url": "assets/js/124.d4aba2da.js",
    "revision": "ca5965770b4679cc41e4203b7e1d3d55"
  },
  {
    "url": "assets/js/125.13e7819d.js",
    "revision": "a278197bbd67f38392642a53700ea783"
  },
  {
    "url": "assets/js/126.509fd869.js",
    "revision": "691850ef386ba375066d76e62274bd8b"
  },
  {
    "url": "assets/js/127.df72b121.js",
    "revision": "f26fc99222d386a75efa7f9c15915f0a"
  },
  {
    "url": "assets/js/128.001b2a5c.js",
    "revision": "5495a46bfeee28eee7b090cfa47d8144"
  },
  {
    "url": "assets/js/129.37430fee.js",
    "revision": "320ef9989905ec902ca6288971e3aa8d"
  },
  {
    "url": "assets/js/13.02914fdd.js",
    "revision": "4dfd80f59d8cc4213d97f9781ed8e94a"
  },
  {
    "url": "assets/js/130.df391d85.js",
    "revision": "3b6e9c14023ab31cdf846027d895b4eb"
  },
  {
    "url": "assets/js/131.c896a63a.js",
    "revision": "12c71902c01a70ab7fc74b7116503d02"
  },
  {
    "url": "assets/js/132.8fc043b6.js",
    "revision": "ad427d196a387b15903e415d6acc72e7"
  },
  {
    "url": "assets/js/133.b2b71727.js",
    "revision": "8d52297baade97088f4314d5c9d53582"
  },
  {
    "url": "assets/js/134.e6ea54b0.js",
    "revision": "509c490e92689934d114298f8540bbfe"
  },
  {
    "url": "assets/js/135.af91bd1e.js",
    "revision": "a86e6cc566da2dbff13da16ce393e1aa"
  },
  {
    "url": "assets/js/136.7a966648.js",
    "revision": "4eda2ea166812b94f0e248f92a13ed23"
  },
  {
    "url": "assets/js/137.5725d40b.js",
    "revision": "dd73effaa51962973cae7c31f32e6ce9"
  },
  {
    "url": "assets/js/138.8cad9def.js",
    "revision": "4d4212e36b14094440f99a16cdf4cfbf"
  },
  {
    "url": "assets/js/139.cd377282.js",
    "revision": "38687a08f595177140a5ebcfcec7190f"
  },
  {
    "url": "assets/js/14.50e7d9ac.js",
    "revision": "49efd7e27fce3043a4f04fd7808a1c8a"
  },
  {
    "url": "assets/js/140.cc0c23ae.js",
    "revision": "8d638da1961d5ff45b4242dbc4c482dc"
  },
  {
    "url": "assets/js/141.7146dbbe.js",
    "revision": "95579c8ccfd907488b6280d45b940fc7"
  },
  {
    "url": "assets/js/142.870d7cc3.js",
    "revision": "8d11b2ba63fdb95965ae3a4f3934299f"
  },
  {
    "url": "assets/js/143.746ce501.js",
    "revision": "b4c6e4c7955c8af7bdb1575a7dc32729"
  },
  {
    "url": "assets/js/144.eaab7a28.js",
    "revision": "3b011ed2fe87a5af96a6f4a17fef8237"
  },
  {
    "url": "assets/js/145.ec624a61.js",
    "revision": "b603f233b725495cd16370f0dcc3ad06"
  },
  {
    "url": "assets/js/146.2730a6ca.js",
    "revision": "db3d8b1efcff51d4e1d1e12ce3e7ebfb"
  },
  {
    "url": "assets/js/147.08ddfa39.js",
    "revision": "fdca225291b366c276faaa3bf4cc2198"
  },
  {
    "url": "assets/js/148.6cccf99c.js",
    "revision": "b6377b7fc26251f7e8aeb16f393961cd"
  },
  {
    "url": "assets/js/149.55bdc6e2.js",
    "revision": "8e89b5128a51dff28e033787db194fa7"
  },
  {
    "url": "assets/js/15.bb9e7c58.js",
    "revision": "73532e52ac5f782453b31e458c194f4a"
  },
  {
    "url": "assets/js/150.57d72039.js",
    "revision": "d8cfdc14f18365a684624527e7bb7e96"
  },
  {
    "url": "assets/js/151.b884e3ed.js",
    "revision": "23b56087acfc5f286529fe24e92be738"
  },
  {
    "url": "assets/js/152.ed46b5f5.js",
    "revision": "1cd928e3c4023216c1fe8d86b78b3d9d"
  },
  {
    "url": "assets/js/153.b3e57144.js",
    "revision": "cf8f26aeb3b251caec3abd76e7f6142e"
  },
  {
    "url": "assets/js/154.3b4bc135.js",
    "revision": "45659739eb78fe673c2fbd03ceb0c289"
  },
  {
    "url": "assets/js/155.07a069f0.js",
    "revision": "c29b7577a109f0d6713fd3f761798d70"
  },
  {
    "url": "assets/js/156.a1a442db.js",
    "revision": "468f4b2966d91ead0187409f4141aa4b"
  },
  {
    "url": "assets/js/157.eb06516a.js",
    "revision": "ab1ffa7aed5241169b71760a4d403ae6"
  },
  {
    "url": "assets/js/158.04120712.js",
    "revision": "ad46c2d914cb86af208c44090ddd96a5"
  },
  {
    "url": "assets/js/159.0b1fc6e5.js",
    "revision": "41c1803c5c308d319c687af285ba6048"
  },
  {
    "url": "assets/js/16.c165c27d.js",
    "revision": "1f7e4ca4688f96d8d24c6bbf94cf3da3"
  },
  {
    "url": "assets/js/160.ef768c92.js",
    "revision": "6eeb5a22fb1a07e8d88bb511e9c52924"
  },
  {
    "url": "assets/js/161.2cd3c48c.js",
    "revision": "5ae3ca202db8297b058782e0f42e2433"
  },
  {
    "url": "assets/js/162.fd5bbe50.js",
    "revision": "46dd266297b9891aa0588f88fef8d3fe"
  },
  {
    "url": "assets/js/163.a31051b2.js",
    "revision": "12b78e417cd55474f99e400cab244613"
  },
  {
    "url": "assets/js/164.0eb7d796.js",
    "revision": "6c9a50cb6461301ca13c8919e770aa85"
  },
  {
    "url": "assets/js/165.fed36ad3.js",
    "revision": "b4e9deb32eec483f2481d6aa28f5b7cb"
  },
  {
    "url": "assets/js/166.2839638d.js",
    "revision": "f92aad3681a8955de08843f3bdaaf3f5"
  },
  {
    "url": "assets/js/167.019f414d.js",
    "revision": "31f52f4e0b09e10f464e2260d2247632"
  },
  {
    "url": "assets/js/168.44a4f6cb.js",
    "revision": "0f669c4d5c444f4328eb1ba9339a52e2"
  },
  {
    "url": "assets/js/169.fc201eff.js",
    "revision": "877a4b3d81a545a8ff74b551118ec9ca"
  },
  {
    "url": "assets/js/17.3b85552e.js",
    "revision": "dfb1f031c92b6a3769a80c06ab0940c3"
  },
  {
    "url": "assets/js/170.4ebbbbd7.js",
    "revision": "8911508973581c3bf4aac54997ed10e7"
  },
  {
    "url": "assets/js/171.845f33f2.js",
    "revision": "442619c62629f8754bc98d1f44fe5b33"
  },
  {
    "url": "assets/js/172.c3827b36.js",
    "revision": "93e189c0a32cdc3c6f95913041eeee11"
  },
  {
    "url": "assets/js/173.8c4476ed.js",
    "revision": "7475756d8d1e12949a40311325068dff"
  },
  {
    "url": "assets/js/174.409e49b0.js",
    "revision": "bb841c48eebf623a06f7384828fb0d78"
  },
  {
    "url": "assets/js/175.9bef41fd.js",
    "revision": "e880bdc34e5793f35fde08e0f8738252"
  },
  {
    "url": "assets/js/176.de76a474.js",
    "revision": "20f04cc36dcb84cd7dc68891fa86dd43"
  },
  {
    "url": "assets/js/177.124d0d0a.js",
    "revision": "d973f84764d9ab184a398dafbeb5989b"
  },
  {
    "url": "assets/js/178.f74e2d02.js",
    "revision": "cfd9eceaef5aa710be2dc73248e4e43f"
  },
  {
    "url": "assets/js/179.8c2dea3a.js",
    "revision": "1d19c9bcfd5330506a23499bbef99783"
  },
  {
    "url": "assets/js/18.ed9e8e5b.js",
    "revision": "03835470e1a1a15aad763ad531dac24e"
  },
  {
    "url": "assets/js/180.b96ad5b8.js",
    "revision": "2aa4f5ecae4da9452e75fdaa4a23e15d"
  },
  {
    "url": "assets/js/181.05d7c4e4.js",
    "revision": "6ab4572ea88cbb8950badef46dec0a55"
  },
  {
    "url": "assets/js/182.f6675795.js",
    "revision": "fbb4cfb68a843ce15858fea38891b375"
  },
  {
    "url": "assets/js/183.e6d28726.js",
    "revision": "dfbd9cfbbae911f8339c20d78b1e770f"
  },
  {
    "url": "assets/js/184.84b44c44.js",
    "revision": "5128e0b59eb211fcab2bb2b623f91b1f"
  },
  {
    "url": "assets/js/185.17093df6.js",
    "revision": "a7c0721e9855fa8e84a64eda9e68034c"
  },
  {
    "url": "assets/js/186.bc9c7518.js",
    "revision": "84ffc98cb68a52e821ca1e78abfcd77f"
  },
  {
    "url": "assets/js/187.6984c1ba.js",
    "revision": "69a974a449482bb4b92c661cf58cc3d5"
  },
  {
    "url": "assets/js/188.4ff64282.js",
    "revision": "ef30f61650a24f1df5e3c4aa4309c3fb"
  },
  {
    "url": "assets/js/189.0d2ea26b.js",
    "revision": "e13f4ba579dd7088c6e91fbc6e55d8ab"
  },
  {
    "url": "assets/js/19.88713929.js",
    "revision": "af94bb75f203d2151b1fb099e4d027c7"
  },
  {
    "url": "assets/js/190.6fe0a495.js",
    "revision": "840c36376f90ab1b1ff8cc7c7ecbd1f4"
  },
  {
    "url": "assets/js/191.caf94b10.js",
    "revision": "eb8473829d712dd79281f6f31748a35a"
  },
  {
    "url": "assets/js/192.e8c4a91d.js",
    "revision": "76c5d9981e760700c723d7dae9b484f9"
  },
  {
    "url": "assets/js/193.a029bb18.js",
    "revision": "22e5699a137b29beb42559eba438cb3a"
  },
  {
    "url": "assets/js/194.d55d2ed4.js",
    "revision": "5ad35d80fa10a628676078a3c7c4a273"
  },
  {
    "url": "assets/js/195.48318b45.js",
    "revision": "b04c01a7a4177994535f1d0ffda46639"
  },
  {
    "url": "assets/js/196.799bb0dd.js",
    "revision": "3fc402295ca7c50cce7631bffefbfbf4"
  },
  {
    "url": "assets/js/197.10a662a1.js",
    "revision": "9fd808356d4562daae47c7121d53d6ac"
  },
  {
    "url": "assets/js/198.f222b61a.js",
    "revision": "479efbddf0fc83d0dbf9011701487e53"
  },
  {
    "url": "assets/js/199.9695e412.js",
    "revision": "93d8ac5535930ff20366b5005a685f40"
  },
  {
    "url": "assets/js/2.f7936bec.js",
    "revision": "f7d4dc902790b5387acf43ef0144e949"
  },
  {
    "url": "assets/js/20.7a2f3303.js",
    "revision": "39edbda6cba54963f546ab58f85ae101"
  },
  {
    "url": "assets/js/200.c3adc0de.js",
    "revision": "3c894382ca11fe6c7c2cae18c846b59d"
  },
  {
    "url": "assets/js/201.061afad9.js",
    "revision": "ad490c84f2b164b24c5fccdecf4b156e"
  },
  {
    "url": "assets/js/202.d16c7256.js",
    "revision": "761b0f9245ec53bf401481da7cd9ae8c"
  },
  {
    "url": "assets/js/203.3b0b8cb0.js",
    "revision": "632b5d78f2f2a4038de26fc8b2cc3b02"
  },
  {
    "url": "assets/js/204.2106bd8c.js",
    "revision": "0143758291fd495ab801665b8157430c"
  },
  {
    "url": "assets/js/205.af8e0479.js",
    "revision": "3e5257e0384d4801f42019a1a903353b"
  },
  {
    "url": "assets/js/206.86e4a283.js",
    "revision": "903c53e18694d533edb9ef9fae90cf31"
  },
  {
    "url": "assets/js/207.93ecd9c8.js",
    "revision": "efeab88937d1103ec3b030c5a9bffc19"
  },
  {
    "url": "assets/js/208.fcbc000a.js",
    "revision": "9a33f4726f95804e013d78b8513f5078"
  },
  {
    "url": "assets/js/209.5d5c3067.js",
    "revision": "546839df08a111fc7f96a731b1ed483b"
  },
  {
    "url": "assets/js/21.3b8a6e88.js",
    "revision": "85b734848cb0c36487a8a60b20942076"
  },
  {
    "url": "assets/js/210.50c7df3e.js",
    "revision": "8c9da46e711e19c5a0fdc0d87f1d3287"
  },
  {
    "url": "assets/js/211.cb7ab4ea.js",
    "revision": "fe7bde5de440bfc92d9ab4b3c074ebbe"
  },
  {
    "url": "assets/js/212.b1808b8a.js",
    "revision": "94914f421bc30f7bac9fda96ff00f70c"
  },
  {
    "url": "assets/js/213.78c642cb.js",
    "revision": "af02b682e627b8d81260bbee7069b8e3"
  },
  {
    "url": "assets/js/214.b16eeabe.js",
    "revision": "4292eb96c9136d1731a1cae63a5c5d71"
  },
  {
    "url": "assets/js/215.847628a9.js",
    "revision": "c1611a7bbc1ce4fd55bd3d5fc0695cfa"
  },
  {
    "url": "assets/js/216.8c9be820.js",
    "revision": "4f0072e3681a66af9046ca4c3b584f86"
  },
  {
    "url": "assets/js/217.645b4fb2.js",
    "revision": "9f9184860f9289da2acb46bbd1dbd840"
  },
  {
    "url": "assets/js/218.145a6a5a.js",
    "revision": "41303f071d52f4a0bfe06a3a6f0e5424"
  },
  {
    "url": "assets/js/219.1a4c228b.js",
    "revision": "ee26bf4ee2aa15a98505f4a0345c0c0d"
  },
  {
    "url": "assets/js/22.22786b8e.js",
    "revision": "007d4d456df22e94d842bdc858d40ae6"
  },
  {
    "url": "assets/js/220.b593e798.js",
    "revision": "2def8301f5cd964fb314a6a93c69cde1"
  },
  {
    "url": "assets/js/221.5137d19c.js",
    "revision": "217e71d400cbfcaa11692a9cf9c8f84d"
  },
  {
    "url": "assets/js/222.200a67fe.js",
    "revision": "126f40c111738c00a8e8f51ebb9a82d1"
  },
  {
    "url": "assets/js/223.07ae5259.js",
    "revision": "5b93f36c06f31f1c52e90d66f7b2082f"
  },
  {
    "url": "assets/js/224.bef2032e.js",
    "revision": "87ec27b36c86e71adaffe46ad2899009"
  },
  {
    "url": "assets/js/225.0c9085f3.js",
    "revision": "39bdfdf1dcf7db48a2916f59e487d10e"
  },
  {
    "url": "assets/js/226.01656e25.js",
    "revision": "839fe94a6d7da17159f061ca5d21c16b"
  },
  {
    "url": "assets/js/227.5821a2f3.js",
    "revision": "24b98fb57fd1d0c33c3903f37b47834a"
  },
  {
    "url": "assets/js/228.72d6bb27.js",
    "revision": "151c3b5260073e226916e8e791b0d51a"
  },
  {
    "url": "assets/js/229.5f7d1a2d.js",
    "revision": "474e6ab12a169049ec6adb497a745b57"
  },
  {
    "url": "assets/js/23.5cf3f4cc.js",
    "revision": "aa1add24a9e47c1545ab5307afeafbf1"
  },
  {
    "url": "assets/js/230.7f8287a9.js",
    "revision": "8e145a8695cc5b656f121e01d0f30846"
  },
  {
    "url": "assets/js/231.dbce3172.js",
    "revision": "fd602b8a7890c46cea394243f00e8a5f"
  },
  {
    "url": "assets/js/232.47a6e5ab.js",
    "revision": "2268426f075f4f36b1738a297a7e2d03"
  },
  {
    "url": "assets/js/233.45b85e64.js",
    "revision": "c371e3bd913254172b9fe4a8caba6661"
  },
  {
    "url": "assets/js/234.3197e4d6.js",
    "revision": "b86b617f08c80ec5898e96261a5e43f7"
  },
  {
    "url": "assets/js/235.69b44b06.js",
    "revision": "4ae1b235cb14c31f00efc2f7670b65ef"
  },
  {
    "url": "assets/js/236.f77c3703.js",
    "revision": "1cf2899af800f145abddf90993147390"
  },
  {
    "url": "assets/js/237.ec1d6d7b.js",
    "revision": "db7f1be84746f6847029f5ecf98673b1"
  },
  {
    "url": "assets/js/238.60c49c3a.js",
    "revision": "41667970b33cce0b4c9423838ff6907d"
  },
  {
    "url": "assets/js/239.a5c178f5.js",
    "revision": "f107bc656b5aa543cdca5e92ebec4805"
  },
  {
    "url": "assets/js/24.a1475623.js",
    "revision": "db154183cb5e5a0b886bb2d18004f2a6"
  },
  {
    "url": "assets/js/240.d29567dd.js",
    "revision": "3a8fb53e29f533d9ad60bd8de5a95c75"
  },
  {
    "url": "assets/js/241.94533800.js",
    "revision": "63ee2e6f7047eb1130a8d8012a2d435e"
  },
  {
    "url": "assets/js/242.37e45a3c.js",
    "revision": "3a8eb1b35ac51124ece1fcfa45abb443"
  },
  {
    "url": "assets/js/243.1f8efeae.js",
    "revision": "4d4345260318eeb763bcbbdcb80c4643"
  },
  {
    "url": "assets/js/244.c17a4e83.js",
    "revision": "6b11ae5acd7075a7602d93208a217e3a"
  },
  {
    "url": "assets/js/245.1040f491.js",
    "revision": "d45d27a7adde933b0bc4bef4c68088df"
  },
  {
    "url": "assets/js/246.10362ce3.js",
    "revision": "0d25edf15d088ea54d6fbdb69e5236db"
  },
  {
    "url": "assets/js/247.b3ef4102.js",
    "revision": "5f013c5b40d6732b8f1a75b30840e3f9"
  },
  {
    "url": "assets/js/248.025b0ff8.js",
    "revision": "e0e683456c8ea69d6ae900d3e15bd413"
  },
  {
    "url": "assets/js/249.5dfc1bb1.js",
    "revision": "c65f6afabe58b18dc56afb1ec614f4d7"
  },
  {
    "url": "assets/js/25.6434c65b.js",
    "revision": "c392571cd9758ae5904e26155f66bcd2"
  },
  {
    "url": "assets/js/250.dece075c.js",
    "revision": "c97213b313a598c8e17e0fb7d6462d8c"
  },
  {
    "url": "assets/js/251.3b18f24f.js",
    "revision": "4b02f837977307af618151fdbd24aaf7"
  },
  {
    "url": "assets/js/252.f886ba7e.js",
    "revision": "bb029f4a30daa9e262f0866798929097"
  },
  {
    "url": "assets/js/253.3472f172.js",
    "revision": "e3e03098188486a90647952f3406b94e"
  },
  {
    "url": "assets/js/254.991cb3d3.js",
    "revision": "943df159c3554b2020bd72deeab05341"
  },
  {
    "url": "assets/js/255.793a2a28.js",
    "revision": "eefd99687307408cf69d88bb56154673"
  },
  {
    "url": "assets/js/256.84cc6fc5.js",
    "revision": "25dd3ce298a8cfc7c7cdd54c77e06b62"
  },
  {
    "url": "assets/js/257.d923b4d1.js",
    "revision": "3e5cc133b71810492b080c50cf5fdd59"
  },
  {
    "url": "assets/js/258.d1050bd3.js",
    "revision": "639fd0c9f7758c8fd3b8210e8087f4ba"
  },
  {
    "url": "assets/js/259.5c211e5b.js",
    "revision": "f1f2479e8f3ca11f7aa47b6c2cd30f03"
  },
  {
    "url": "assets/js/26.68b58c10.js",
    "revision": "c9d70f516e90cc39d79204b49b9c9699"
  },
  {
    "url": "assets/js/260.c5194600.js",
    "revision": "8dd874322dfe0360e5fa87baa85a2dd3"
  },
  {
    "url": "assets/js/261.1a7c8aaf.js",
    "revision": "04ed567088554fe2f728a01f9653bf17"
  },
  {
    "url": "assets/js/262.161b2ab4.js",
    "revision": "faf479999519c0dd4b51998f784c7f40"
  },
  {
    "url": "assets/js/263.c2b52583.js",
    "revision": "094deb87950c2533519df9e861ef92aa"
  },
  {
    "url": "assets/js/264.6847f350.js",
    "revision": "02f7ca278c93321e7ec826d25765f213"
  },
  {
    "url": "assets/js/265.ee9ef96a.js",
    "revision": "cea545c20392d9d3a73caeeb89151327"
  },
  {
    "url": "assets/js/266.a2b3bbde.js",
    "revision": "6a8cf09921cf0634c6c28d3847425a7f"
  },
  {
    "url": "assets/js/267.e9b147e1.js",
    "revision": "4e21405d501a7e58f58d3df1a5ac87c6"
  },
  {
    "url": "assets/js/268.27912df4.js",
    "revision": "aece73f87770b7242bd112791f375c6b"
  },
  {
    "url": "assets/js/269.a35eb2f1.js",
    "revision": "666bd96cb41e2b3744eea6b25fb67a32"
  },
  {
    "url": "assets/js/27.8c94e1ca.js",
    "revision": "4682f4818db8fba5347d9158327b2dba"
  },
  {
    "url": "assets/js/270.db43b57d.js",
    "revision": "2047baa4ef868a397a800773ef0a9cfe"
  },
  {
    "url": "assets/js/271.713a326b.js",
    "revision": "1f42604386494aebfdd6619b0549eb80"
  },
  {
    "url": "assets/js/272.55a252e5.js",
    "revision": "7909206bfa03488f725826a38ff0ff8b"
  },
  {
    "url": "assets/js/273.f573d881.js",
    "revision": "b4edb64b7054c9e8a8f25f6ae9d2b6be"
  },
  {
    "url": "assets/js/274.93ed4976.js",
    "revision": "1d988381ceda94c8c73a657e3e77af56"
  },
  {
    "url": "assets/js/275.e9e86c92.js",
    "revision": "53b1e9d50a994349c5b1e8890506eeb2"
  },
  {
    "url": "assets/js/276.26767928.js",
    "revision": "977398f37905d6dd6ed39bdd4edc2c60"
  },
  {
    "url": "assets/js/277.c98ce500.js",
    "revision": "fa08f39049ce5deb5680770c82bb06a8"
  },
  {
    "url": "assets/js/278.a59e172e.js",
    "revision": "0ffe1dc4711afcb3c01daef9f775f707"
  },
  {
    "url": "assets/js/279.d5377012.js",
    "revision": "bbad53e2975f03713cb2c75b159fb2f2"
  },
  {
    "url": "assets/js/28.eea55e31.js",
    "revision": "719e7ae35ea21fd39ae541b367d8bc34"
  },
  {
    "url": "assets/js/280.abe9a1e9.js",
    "revision": "b9aaef2ffb35f344fa5e8b2d6fd6d9fc"
  },
  {
    "url": "assets/js/281.261485c6.js",
    "revision": "1b711256b8cc2075498cb664e0ca3816"
  },
  {
    "url": "assets/js/282.f330fca5.js",
    "revision": "a58a0e66efbd7203d121ef2d0f6cc200"
  },
  {
    "url": "assets/js/283.de934984.js",
    "revision": "7ec9b5274f2b6b354647a59e18b309c2"
  },
  {
    "url": "assets/js/284.1f30dd25.js",
    "revision": "1d6ce64a12ec1a0664bbd93f4bca5548"
  },
  {
    "url": "assets/js/285.7db9db8e.js",
    "revision": "ffdd27d86f80527e4acf7e1a7fa312ed"
  },
  {
    "url": "assets/js/286.07bfcca8.js",
    "revision": "96bc45e65d90e603dabf6a5514b84329"
  },
  {
    "url": "assets/js/287.2a3c5061.js",
    "revision": "5e62d3fdad23fd4d5518c4840b994099"
  },
  {
    "url": "assets/js/288.71d48e82.js",
    "revision": "3c63d74b4ee36ae5a76a122b0b87ffac"
  },
  {
    "url": "assets/js/289.f93b2a50.js",
    "revision": "6b8a74d0c89ce96e0ef77209aa541173"
  },
  {
    "url": "assets/js/29.8b96d9f8.js",
    "revision": "f0852648a1fba3c725627155ced1c870"
  },
  {
    "url": "assets/js/290.03ad5cce.js",
    "revision": "8c21e2af131d62f36301047571883c49"
  },
  {
    "url": "assets/js/291.0ecb5251.js",
    "revision": "2d3060b1eb3055cc48b13748390acefe"
  },
  {
    "url": "assets/js/292.1bb4d4e3.js",
    "revision": "129f082c0f026022c273758c7981cfd1"
  },
  {
    "url": "assets/js/293.183aaf01.js",
    "revision": "cf5865b9649b9ca9475ff027a866a69d"
  },
  {
    "url": "assets/js/294.6bcf50c8.js",
    "revision": "2b7bd9d99e559323556d7d73f81c08a2"
  },
  {
    "url": "assets/js/295.85d32843.js",
    "revision": "d22c2dd2aee05b4fe374dc72cb49c7b6"
  },
  {
    "url": "assets/js/296.38a7deca.js",
    "revision": "6d2e1f594252f5eb530e12234fd2a539"
  },
  {
    "url": "assets/js/297.1aebf85a.js",
    "revision": "111e141377ef90d58266abcf47e895f4"
  },
  {
    "url": "assets/js/298.3198c287.js",
    "revision": "bc212562cc8e5d680f30d5793232936f"
  },
  {
    "url": "assets/js/299.78cf8e8f.js",
    "revision": "148647a3ea8f9c0ea2e1bef66309f0eb"
  },
  {
    "url": "assets/js/3.8a5391bf.js",
    "revision": "c92b2f23759adcd5ac423d0b58d9bd75"
  },
  {
    "url": "assets/js/30.1cb0e410.js",
    "revision": "07e7b2f0a682a96bcbad4e51799476b8"
  },
  {
    "url": "assets/js/300.0b9805d1.js",
    "revision": "90028925fd0123b64349df13443ac82d"
  },
  {
    "url": "assets/js/301.bc88c497.js",
    "revision": "5de1ccac21e1e6fbd7141491389c08a5"
  },
  {
    "url": "assets/js/302.9d024e25.js",
    "revision": "ea4dc9c756d0d8b77bef5bb930f22b97"
  },
  {
    "url": "assets/js/303.d4586624.js",
    "revision": "cfe003fbda68344254a6dd27f641a049"
  },
  {
    "url": "assets/js/304.75ad0736.js",
    "revision": "93cd61e7c51e53f86f0a227dea6979e2"
  },
  {
    "url": "assets/js/305.9e0afc6a.js",
    "revision": "67596828de2fcf39b8bb6ab3ad8ea6c0"
  },
  {
    "url": "assets/js/306.688d8703.js",
    "revision": "cbf658b8bad9fe4976b06d8aeb2f093b"
  },
  {
    "url": "assets/js/307.663a00d7.js",
    "revision": "f5886ca625238c2152dabe298e76564d"
  },
  {
    "url": "assets/js/308.9dc056da.js",
    "revision": "580fb8f637aa227b128dc0ac49b9b0ac"
  },
  {
    "url": "assets/js/309.ee1a214d.js",
    "revision": "f5d2a8f355052d1d6d9f08e0d53fce8a"
  },
  {
    "url": "assets/js/31.bceca06c.js",
    "revision": "463cb363662c8a5025259c7083620ca1"
  },
  {
    "url": "assets/js/310.12a00fa7.js",
    "revision": "0d6647e117a43bf47f3b37a59e4259a4"
  },
  {
    "url": "assets/js/311.6ffaad02.js",
    "revision": "f487ac0c59d4cb4e224d9165e84781c1"
  },
  {
    "url": "assets/js/312.bbf0e1bf.js",
    "revision": "c280e549c6504ec2c19a174e75b05360"
  },
  {
    "url": "assets/js/313.2fad5b00.js",
    "revision": "c2838a95ec2b89cae98f598c849048bf"
  },
  {
    "url": "assets/js/314.dbd32cc2.js",
    "revision": "2e488ef2abdfe57d50eb59b76aababdd"
  },
  {
    "url": "assets/js/315.871296af.js",
    "revision": "9933ab6590c9f0068a665440d611f689"
  },
  {
    "url": "assets/js/316.edfc6c9d.js",
    "revision": "f0c8bde7448e2b53fa3a667078b72965"
  },
  {
    "url": "assets/js/317.24ab9d13.js",
    "revision": "2adfcc23e8505eb99e136522d2c4662c"
  },
  {
    "url": "assets/js/318.8fa699e9.js",
    "revision": "f6ef769b1bf9cd3613a4314caf32db0c"
  },
  {
    "url": "assets/js/319.386d9056.js",
    "revision": "5ded0a77f5798cdb08ae48722bc9fdba"
  },
  {
    "url": "assets/js/32.4e6fb8ac.js",
    "revision": "d2ac3eaca8e7a4fac717ed54773814f5"
  },
  {
    "url": "assets/js/320.ce5087b1.js",
    "revision": "fc76fbdcea40fcefec4224a237a6bed0"
  },
  {
    "url": "assets/js/321.a4e470c0.js",
    "revision": "ee825d553867d4ec23b66ab82739aa1c"
  },
  {
    "url": "assets/js/322.df1c97e7.js",
    "revision": "58116c0c9bebb7fe81aaed7710fbde58"
  },
  {
    "url": "assets/js/323.4756516f.js",
    "revision": "29850951d838691c92325f9b1801e66f"
  },
  {
    "url": "assets/js/324.b0f4048d.js",
    "revision": "3bf3365c3bad871cea36cda9190c09f7"
  },
  {
    "url": "assets/js/325.b88b710a.js",
    "revision": "0f5f591ceb6fc78aec2e6f0aa6cb29b6"
  },
  {
    "url": "assets/js/326.d94d4b9f.js",
    "revision": "56b209ad8dc21c6de3b246d53f4cb28b"
  },
  {
    "url": "assets/js/327.fd55cc3b.js",
    "revision": "da07357942a5e625e0a48fae0ea1cab5"
  },
  {
    "url": "assets/js/328.79fe6a0b.js",
    "revision": "bcda656562ccf099539de9a12c75b083"
  },
  {
    "url": "assets/js/329.4462f899.js",
    "revision": "85378227672c33a60a3248ff01b53570"
  },
  {
    "url": "assets/js/33.d0c985db.js",
    "revision": "0a0f8873c104200b85b3d613a05cb5e8"
  },
  {
    "url": "assets/js/330.cbb747bb.js",
    "revision": "9ec89573270750df66109b64db15da79"
  },
  {
    "url": "assets/js/331.6268d3c0.js",
    "revision": "525b344a73e01483a19a62cdc261a754"
  },
  {
    "url": "assets/js/332.6bd59e9f.js",
    "revision": "ae66fd7b1c716c0a31e6a4ca7f22a600"
  },
  {
    "url": "assets/js/333.8bdba9e7.js",
    "revision": "3cedbf2430a2e0f70f2cc2ead01a2918"
  },
  {
    "url": "assets/js/334.945a020d.js",
    "revision": "16341477a16b7851447ac61467f8a57e"
  },
  {
    "url": "assets/js/335.975735a5.js",
    "revision": "d50676968798e617cadf6f931cad3069"
  },
  {
    "url": "assets/js/336.49ad5777.js",
    "revision": "be336b57af13f3ee2f7aaf41c3dbd9aa"
  },
  {
    "url": "assets/js/337.c2d9f19e.js",
    "revision": "7e046e4ce0cd9eebd2260bd5867796d1"
  },
  {
    "url": "assets/js/338.4fe0531f.js",
    "revision": "3b2401e6217bc2387d9bb323f0784e8e"
  },
  {
    "url": "assets/js/339.c7554189.js",
    "revision": "c23ba239cc0ffff7a712063f43347a70"
  },
  {
    "url": "assets/js/34.a8896dc1.js",
    "revision": "c8f83792112dc4e0a70c32cf13d5e1c0"
  },
  {
    "url": "assets/js/340.8290dabc.js",
    "revision": "982890d32f4577e01dd82f6b2a59502d"
  },
  {
    "url": "assets/js/341.d6011aa7.js",
    "revision": "e78874bff8412cb74115c56b43e432ec"
  },
  {
    "url": "assets/js/342.606f921c.js",
    "revision": "c4cb55383483c18b09f38ff82ce95188"
  },
  {
    "url": "assets/js/343.349c73b5.js",
    "revision": "fe419c1af283e4573fb1d2eec57e987c"
  },
  {
    "url": "assets/js/344.b06b250f.js",
    "revision": "5f99d1c1eb0fa3dadb692711c86d1c9a"
  },
  {
    "url": "assets/js/345.858a2be3.js",
    "revision": "31005886f3bc91cec8518bf10c533998"
  },
  {
    "url": "assets/js/346.cb7505a9.js",
    "revision": "7587347cd30159cc61a144fb9f5fe905"
  },
  {
    "url": "assets/js/347.57e0dc76.js",
    "revision": "558a8a885498ac0c185bd54e7c3d9fcd"
  },
  {
    "url": "assets/js/348.9a12789e.js",
    "revision": "87b4e46ff7adb4942ad1c2075f64bc7d"
  },
  {
    "url": "assets/js/349.924de45d.js",
    "revision": "e4e3cfe09d97ccbbf3f589f56a57822e"
  },
  {
    "url": "assets/js/35.f2a37aa7.js",
    "revision": "2b74c34ddf02cace15db4dfe86b9e18e"
  },
  {
    "url": "assets/js/350.9b030bb6.js",
    "revision": "982a8ac86afd95f3fc44ffc15355983d"
  },
  {
    "url": "assets/js/351.44be1bd5.js",
    "revision": "c1a1726cb6da3427d95685195d215234"
  },
  {
    "url": "assets/js/352.0737150f.js",
    "revision": "a0375c9ecc561366a539f3aa10a2e51f"
  },
  {
    "url": "assets/js/353.0bf85baa.js",
    "revision": "b11505a99fb8417e5b36b3d4012c9001"
  },
  {
    "url": "assets/js/354.5833ad42.js",
    "revision": "9d98862c9314af4309e9bbc6ab3c06f8"
  },
  {
    "url": "assets/js/355.ac487ef3.js",
    "revision": "86f0c34fb7e482b2661c8f4a1b650f03"
  },
  {
    "url": "assets/js/356.b8ac99bb.js",
    "revision": "12c952330bf167ee1aa53739d4f3f665"
  },
  {
    "url": "assets/js/357.fbb35b95.js",
    "revision": "1a9e2eb89ce12f796604e8c0eecf60ee"
  },
  {
    "url": "assets/js/358.391f7271.js",
    "revision": "54860396dc8d59dde870d8bb1a6d9254"
  },
  {
    "url": "assets/js/359.288ec56f.js",
    "revision": "5dac09cc8e79fe13fae68ab8ea6520d1"
  },
  {
    "url": "assets/js/36.ec9d485f.js",
    "revision": "bd3e4a03c2b4a063cd88c89edbfd4e81"
  },
  {
    "url": "assets/js/360.1a5e3076.js",
    "revision": "3ca848ecbe8b84694128797998430973"
  },
  {
    "url": "assets/js/361.1493ca94.js",
    "revision": "913c2fe58214e311f708fd55b3827d83"
  },
  {
    "url": "assets/js/362.5ef0e0ee.js",
    "revision": "64b775cc15827678084ed26d34e9d8a5"
  },
  {
    "url": "assets/js/363.b392452a.js",
    "revision": "3c3f2eb20b196f808a096d2ae02f8c3e"
  },
  {
    "url": "assets/js/364.29f9b0ac.js",
    "revision": "c81f21dab6259bb63365745999264eb3"
  },
  {
    "url": "assets/js/365.2fcb2b46.js",
    "revision": "924e76fe51cd31128269ba49fb5ccc9f"
  },
  {
    "url": "assets/js/366.310309c9.js",
    "revision": "5f586bcbbd0c498b4be1e3d55a251b27"
  },
  {
    "url": "assets/js/367.3a2ef9bd.js",
    "revision": "a7f751cf930c0fa539b0962c53afc778"
  },
  {
    "url": "assets/js/368.6a262e55.js",
    "revision": "c9360a812bb0fe97f57d5be47ae8461d"
  },
  {
    "url": "assets/js/369.8a149c5d.js",
    "revision": "4be15aba9ffa5f0d5586234d9c5fc825"
  },
  {
    "url": "assets/js/37.c8d4dfde.js",
    "revision": "052d8765896f5d5e2718744479bd024a"
  },
  {
    "url": "assets/js/370.c9c6207b.js",
    "revision": "2148283c0388dfa43203f9e63fdf6199"
  },
  {
    "url": "assets/js/371.0ea741e9.js",
    "revision": "55d626a60290d7d86cb37467447c2473"
  },
  {
    "url": "assets/js/372.eb2128c1.js",
    "revision": "800f4ea0037347537bcddefe2f2cfbfd"
  },
  {
    "url": "assets/js/373.5f7c46eb.js",
    "revision": "184e7105a21a606167da3ff30200cde4"
  },
  {
    "url": "assets/js/374.2e767738.js",
    "revision": "b2f9acd15eacd5cca3e5611b2b54e4e3"
  },
  {
    "url": "assets/js/375.435ccaec.js",
    "revision": "d175edac930609acc4bd87191283009f"
  },
  {
    "url": "assets/js/376.f03b7b13.js",
    "revision": "704112d9c0f2360f06b2eab941c8ec6f"
  },
  {
    "url": "assets/js/377.ef51073c.js",
    "revision": "a62b04b26df635dbe398d037ef67a6cc"
  },
  {
    "url": "assets/js/378.df9433c7.js",
    "revision": "4aff18d4d4eea3d40776bd111af0598a"
  },
  {
    "url": "assets/js/379.b4b49404.js",
    "revision": "843a60d014760baf8940eb38942f0203"
  },
  {
    "url": "assets/js/38.11a9932d.js",
    "revision": "d25e8663bd8b86c7a50199bcadd680aa"
  },
  {
    "url": "assets/js/380.cacb0ae4.js",
    "revision": "b8077f7a6e9fa104abab0db6309c5242"
  },
  {
    "url": "assets/js/381.07a7f5fe.js",
    "revision": "5f41c847457e09ca4dadcfc042724f13"
  },
  {
    "url": "assets/js/382.43ed93b6.js",
    "revision": "cd0833edcddd3f7d6b84b161a60213ff"
  },
  {
    "url": "assets/js/383.9103fd6b.js",
    "revision": "4ca1c1cd94907ce43fe88e3e250ecf41"
  },
  {
    "url": "assets/js/384.b0149da9.js",
    "revision": "5f44d72880f0f63edee216c12168084a"
  },
  {
    "url": "assets/js/385.de45f3dd.js",
    "revision": "b048b011b4596b8b2d8595cc105f803b"
  },
  {
    "url": "assets/js/386.a09e6a80.js",
    "revision": "100f2c97effa9d89f5948544d04ce22d"
  },
  {
    "url": "assets/js/387.e35888ca.js",
    "revision": "e0e687d098949af9be360a81ccef748d"
  },
  {
    "url": "assets/js/388.5972beba.js",
    "revision": "d7de4b1a4ed1f5a7b980f0c29560d22a"
  },
  {
    "url": "assets/js/389.e533c031.js",
    "revision": "3ebe5d2eee20a6d187a81ae11523736a"
  },
  {
    "url": "assets/js/39.39794cf7.js",
    "revision": "b0e522602db66ea9239501b5c80a121e"
  },
  {
    "url": "assets/js/390.59e6f8e4.js",
    "revision": "b6f54a98f7535a634dca7a384bbbab4c"
  },
  {
    "url": "assets/js/391.bf1a1d20.js",
    "revision": "3589727d7c727f025dab745cb02c2eca"
  },
  {
    "url": "assets/js/392.877f6eb9.js",
    "revision": "37f1b7e13a0fac4b9f52e340ad313657"
  },
  {
    "url": "assets/js/393.8ebd6faf.js",
    "revision": "3d98db0aabe09916a9c76708dbda9885"
  },
  {
    "url": "assets/js/394.6b677210.js",
    "revision": "37a4f9d6d64ba58000204c4bf9a9c6b6"
  },
  {
    "url": "assets/js/395.da303b13.js",
    "revision": "119f5dfa11f206c357d0792245c54161"
  },
  {
    "url": "assets/js/396.3548de07.js",
    "revision": "99ef320d30302f12e95ccb5998886304"
  },
  {
    "url": "assets/js/397.86961a0e.js",
    "revision": "957b7c5849c8ad443d4d0506152429c8"
  },
  {
    "url": "assets/js/398.cef0f13b.js",
    "revision": "3504bd14be500185e11f92f14b8b863a"
  },
  {
    "url": "assets/js/399.95f7dde5.js",
    "revision": "6819fe640f390ee9f9ae4f7b41313fc8"
  },
  {
    "url": "assets/js/4.1ec4c7d5.js",
    "revision": "14482516d6bc5dbdaac547af3d6e48b1"
  },
  {
    "url": "assets/js/40.deafe9be.js",
    "revision": "f74fbd89591bff755f049f957fc8395e"
  },
  {
    "url": "assets/js/400.953208bf.js",
    "revision": "3b3dd1093eee0601b72f8824082f288a"
  },
  {
    "url": "assets/js/401.55bc66c4.js",
    "revision": "71dd9479c97d31d7a75c9ed856de7e76"
  },
  {
    "url": "assets/js/402.34c6975c.js",
    "revision": "786d703e548464436fd5d896e9d0219c"
  },
  {
    "url": "assets/js/403.8607adc3.js",
    "revision": "61b07e2dca346bb0a921974cd4c6f30a"
  },
  {
    "url": "assets/js/404.4e67785b.js",
    "revision": "6324fed052d16a8699e9de62afd67909"
  },
  {
    "url": "assets/js/405.ad24ab0e.js",
    "revision": "b95bfe2eeb2e3806023365d456b1dd0d"
  },
  {
    "url": "assets/js/406.d5a2ed3e.js",
    "revision": "da534f0c65ca1b10a9bbecf0ebdf6ca9"
  },
  {
    "url": "assets/js/407.f14b7fe5.js",
    "revision": "3d5ad6db2e96f08979d7c4794c95bf1d"
  },
  {
    "url": "assets/js/408.8a4c9046.js",
    "revision": "15b65e58b45a03069f610742b099fe0e"
  },
  {
    "url": "assets/js/409.40cd7920.js",
    "revision": "c46ed99aa405316abb81da15de036106"
  },
  {
    "url": "assets/js/41.4849fdca.js",
    "revision": "91c7fbf87d58c1e4a752bdcfc10cc6e8"
  },
  {
    "url": "assets/js/410.1d17ee42.js",
    "revision": "642594b2247224f58ab0378cdefa60d4"
  },
  {
    "url": "assets/js/411.98bf8f23.js",
    "revision": "3f9f86fa5b464540809e564109045e5b"
  },
  {
    "url": "assets/js/42.88a682c4.js",
    "revision": "a44f3f21fd3d78d0c440b90f60008364"
  },
  {
    "url": "assets/js/43.ff1237a1.js",
    "revision": "52217ada3f00a8ecc2ad5c8f86c092f2"
  },
  {
    "url": "assets/js/44.abca70ea.js",
    "revision": "60b8901553c911965e6ea4f3dec73be0"
  },
  {
    "url": "assets/js/45.437ed206.js",
    "revision": "3d0db953ecd14c78682e19a1eeddd948"
  },
  {
    "url": "assets/js/46.b99a41b7.js",
    "revision": "442d9b8dc2c76172bc53497e55d03879"
  },
  {
    "url": "assets/js/47.f6ed6e49.js",
    "revision": "bfbdbabee60bf805aa7aed4dfdf47c49"
  },
  {
    "url": "assets/js/48.1727c742.js",
    "revision": "c8bafa868f0bbdbc4a671325cc3e956f"
  },
  {
    "url": "assets/js/49.afa11aba.js",
    "revision": "55fbed397650d413558a22c03b837790"
  },
  {
    "url": "assets/js/5.30877ee0.js",
    "revision": "aa36a45f9e4c9f6546ed5a0eeaccd149"
  },
  {
    "url": "assets/js/50.54cbcf51.js",
    "revision": "13732d1684c37732f402b944997b2895"
  },
  {
    "url": "assets/js/51.b1da9037.js",
    "revision": "fd9a26542966572d7bfc0b70ac2a8578"
  },
  {
    "url": "assets/js/52.a5d927dc.js",
    "revision": "fd372d603dfff8e9552bf5b2edb61359"
  },
  {
    "url": "assets/js/53.f0eaa9f2.js",
    "revision": "b4f2a8806224383926d8a188420a87ab"
  },
  {
    "url": "assets/js/54.706d1689.js",
    "revision": "91e675bffe34ec57e3104e23a7f355f0"
  },
  {
    "url": "assets/js/55.f3e737d5.js",
    "revision": "77c88cc770c76bc256404defc6b73eb3"
  },
  {
    "url": "assets/js/56.13e87ec8.js",
    "revision": "3e378eafd8cde22b4ec2818d7389ba93"
  },
  {
    "url": "assets/js/57.97dbc099.js",
    "revision": "3bae8f7912b33eacd682bca77ab0ce05"
  },
  {
    "url": "assets/js/58.91b95c3a.js",
    "revision": "b71ceaa7197ecfc09b7598a6ea8e0bd8"
  },
  {
    "url": "assets/js/59.1a6305b6.js",
    "revision": "e448ba0c3d35a9ca931286c2c095d835"
  },
  {
    "url": "assets/js/60.5fc3c98d.js",
    "revision": "b9d8d54cb04823649a2f1ad8978bc2d1"
  },
  {
    "url": "assets/js/61.c66c6486.js",
    "revision": "29d8f8e4272f9d33e72af315d85728bb"
  },
  {
    "url": "assets/js/62.350d39ca.js",
    "revision": "2bcf820584f8790ce7f39112fe8d401b"
  },
  {
    "url": "assets/js/63.c6b21a96.js",
    "revision": "22c76afb62a14d3f89dabc98463dca53"
  },
  {
    "url": "assets/js/64.9efc5f88.js",
    "revision": "3dc20c8468d2e671a72ef5e6e8032db7"
  },
  {
    "url": "assets/js/65.c224a011.js",
    "revision": "b6afc11e7e31a12a2416358d6a7aaee8"
  },
  {
    "url": "assets/js/66.c42cdbfb.js",
    "revision": "a7a34688e023f48b0c14057d07552a7c"
  },
  {
    "url": "assets/js/67.d39d4fa3.js",
    "revision": "82e23778a4accedb322e62daa847c50c"
  },
  {
    "url": "assets/js/68.183b9d87.js",
    "revision": "232a13fd016dd697e6bc87f59dc00dbf"
  },
  {
    "url": "assets/js/69.811da5fe.js",
    "revision": "9531355258c4cc1945633e74d32d0cbb"
  },
  {
    "url": "assets/js/70.c926b0c7.js",
    "revision": "2ce7a152b890d78d905275ed8314448d"
  },
  {
    "url": "assets/js/71.bdef0e74.js",
    "revision": "738b303a5eeb3130912a41bd85227c40"
  },
  {
    "url": "assets/js/72.ad94126d.js",
    "revision": "0cca3b43b875bfc63c5538b549a9a283"
  },
  {
    "url": "assets/js/73.d43304f5.js",
    "revision": "ef0c74fda58b886a6c82bc58e68a8c05"
  },
  {
    "url": "assets/js/74.0595cd39.js",
    "revision": "f430032926b5a777b34c2ee907bf1a72"
  },
  {
    "url": "assets/js/75.52b45613.js",
    "revision": "b5cb96f2d0f9a267b7debf4e313d15ba"
  },
  {
    "url": "assets/js/76.f6c10412.js",
    "revision": "e1d0562ea88f27684ce93040a5d1f52f"
  },
  {
    "url": "assets/js/77.9556d1a7.js",
    "revision": "471d25351686180f8b61b290161a70de"
  },
  {
    "url": "assets/js/78.8a528c56.js",
    "revision": "241357f47c0441e4ab11ca6dfad63028"
  },
  {
    "url": "assets/js/79.5b0d523a.js",
    "revision": "7e5137c377930c19cbc6ba438141038c"
  },
  {
    "url": "assets/js/8.f27d7bdb.js",
    "revision": "ff76fe8b76ac0a3cc48809b145706703"
  },
  {
    "url": "assets/js/80.d674f5a0.js",
    "revision": "57cef62ea286de7e169a14bdcc8fff6f"
  },
  {
    "url": "assets/js/81.63489b2c.js",
    "revision": "4590f5843a052b094a7a4f65a7e02276"
  },
  {
    "url": "assets/js/82.a7d31894.js",
    "revision": "4a4ecb78f2886611871d0a472b94ad1f"
  },
  {
    "url": "assets/js/83.11cc3153.js",
    "revision": "987c13b0c82448e952385ba43ccd9096"
  },
  {
    "url": "assets/js/84.c8f49ab2.js",
    "revision": "9c5140d85865d73019040a4abe2c102b"
  },
  {
    "url": "assets/js/85.390f6e28.js",
    "revision": "28980cd431739f5808162858a3c32430"
  },
  {
    "url": "assets/js/86.18339ce0.js",
    "revision": "da471e690db0be7260ae81f766ed4400"
  },
  {
    "url": "assets/js/87.998c07c9.js",
    "revision": "85931434c92da48d5aa691f13de1f085"
  },
  {
    "url": "assets/js/88.0a716f4a.js",
    "revision": "f9697621c42f02b145021eb7f05b322f"
  },
  {
    "url": "assets/js/89.78d82178.js",
    "revision": "ec173f61d710d744db5e5a0e97ca063f"
  },
  {
    "url": "assets/js/9.89a86b21.js",
    "revision": "6942160a736eb237e4c88e1d8c3f0990"
  },
  {
    "url": "assets/js/90.d5424c49.js",
    "revision": "7bedeffa0196de7fbf2adecaf51a6e84"
  },
  {
    "url": "assets/js/91.42538063.js",
    "revision": "f5c728c60d7b6bcbd84c83d23e795331"
  },
  {
    "url": "assets/js/92.2ef92a00.js",
    "revision": "83010f165fdb00defbe89961ac58c08a"
  },
  {
    "url": "assets/js/93.9a8c6d4f.js",
    "revision": "ca8cf75fa38c2e1dd71a6c9876b8b652"
  },
  {
    "url": "assets/js/94.e896922c.js",
    "revision": "f9ca911902d21f24a48f0a6a5761c8f7"
  },
  {
    "url": "assets/js/95.f137a5cb.js",
    "revision": "45bdc9a90e53e3829dcd8c687fc66a2b"
  },
  {
    "url": "assets/js/96.01b997e8.js",
    "revision": "bed2ed05c41f9377ecb5bba7dccecec3"
  },
  {
    "url": "assets/js/97.2482c69f.js",
    "revision": "dc142c74e1acf0efee0a3237ba529f82"
  },
  {
    "url": "assets/js/98.5a3ba9ab.js",
    "revision": "9d79ba1760d0670ad06fa1fc1f134886"
  },
  {
    "url": "assets/js/99.c32fb603.js",
    "revision": "77e50a30ed4f5855090bff91b84fc627"
  },
  {
    "url": "assets/js/app.fb885af8.js",
    "revision": "60b7909bb5a077a38cb43bfb8ec96f0d"
  },
  {
    "url": "assets/js/vendors~docsearch.51e44f3d.js",
    "revision": "150743b403bd253b45fc1cfe1d790bf6"
  },
  {
    "url": "index.html",
    "revision": "c0faaa4cf4ed6b6c84858c3f9562da51"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "f0349e21cb4da5370646dc49bb4b6417"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "538f1db3cec9f42c2a153a6697b46ee2"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "07814c7aea88bd952618855cc9c743c3"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "148e2196fc50daaba6e0eb229f09dfdf"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "dc4b8e50d5e4ebc62f3665e0d2ab481a"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "b10c1ad6d1f1c992c7f773972c02bd96"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "8caaffd8a72c8b1ceadb4188933068f7"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "fa95ef2371f417cae36a01580e8e5ef9"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e9d04c4edbf57d0684881cfc6948d6c1"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "d6e061633974367ef5fbaca0a493d77d"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "5e771f91bc20b9a1be5e14e24b23f150"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "2a3484622e617371a8d027ebdf72e980"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "c3b66795c17963f28de935c286041e0c"
  },
  {
    "url": "master/api/index.html",
    "revision": "541b6f916068d8191694068dccf8f47b"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "b5e440309c59c40659313d6c91f4e097"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "a65782413a4790e045e5582793d65e7f"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "99feb37f0b6356eda7ba9f4330aea1b5"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "0c22efb17cda3c73894ae32bdfe40de7"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "28d171a110847a34d32d81d69f333a67"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "83bc3307fa311b3580a213fcc0c13e1b"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "3008fb9f6ae12e988c3e38e0af237a3a"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "ef1d1948f32ead83afe05109c4856b71"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "447a8c1677383d091befec93b95a6fc1"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "0399619930be0fcf360821c6dede2b4f"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "b5d89226f56ad2d2e85dbd38912bce72"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "120b8abcca34c6f7c317ddaf38ee2f44"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "9688d90010f072281b33004e33e03939"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "a54e1c7f317d9c5fb03f252b1915e530"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "ca6c59169aa5396d051770c7491d7cbf"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "71688a5eefcd93e68ce954150e91046e"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "650b7f124d33681f12a09f14e20c546c"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "b73f25f5f1cdeaa46f2dd7c01382d022"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "cff2f38f7acda65a87b787983fa169f5"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "553452ceb0be79950ec2966ceef1a824"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "7e6e13b14319b7eb2bad08ac3708bd8c"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "619cc039d3c2e340a2cab1ee364ef2c4"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "8e1c72a9565e8bb55bb3f8cc8fea5b25"
  },
  {
    "url": "master/packages/index.html",
    "revision": "c9dfb583c47056e77ae5406aa41dea27"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "7a1b11b9f9e0d178ea5507b45e7a223f"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "c9984d736a897e948a0d631fd9b1a52e"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "aebba49c2ae9f7d68d857420ba47a7dd"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "776aa6f515469477dfde8ed282f10866"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "ad40caf5276ba4f2091582d26f6e2806"
  },
  {
    "url": "master/packages/views.html",
    "revision": "78626a105b214144e8842f4482951ce0"
  },
  {
    "url": "master/performance/index.html",
    "revision": "94348ff61f2e93abfaef0508a5cb831d"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "1373abf437851b4a77d5c30978292a1e"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "8cd3e628a557be7b08c2f89714294803"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "b461c074b028a2ca4e9c976b872922ff"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "4738c9262e4fb83b59dd4736b0a239c1"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "3d6b53b42e5bc1b2885577d001b00a03"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "7128007126aba1cfd562e92d51019a3f"
  },
  {
    "url": "master/themes/index.html",
    "revision": "c007cca5233cdf38feb235a1c34a83d0"
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

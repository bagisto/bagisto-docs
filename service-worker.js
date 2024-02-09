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
    "revision": "3c72bb260ff299bbdc52fdc182c495b1"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "61d35f7fa068b7757ceffb395cac6c6f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "92e5581af7c791f690db56705125b96e"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "79986ae6fe5817810c4133b44b86bcc1"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "01c2b283d65f2d5e8b5ae6027cc49401"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "04988065c19ec21c878bbac810e1ea53"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "e7f2013e12d170ee7f81d6b66d82fac0"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "acb514b7c4f3b6cb6ebf9da71a830d86"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "650995430bdb89049ee79a863ce07e9c"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "8f089a18cf4e8c2c3fac76a3403c4a42"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "5fec4eca15ff53a1e9b3f68620287584"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "db83fe56c1f68dca41f944053f38c3c6"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "45db62004bfa61531daac5dcb314f10f"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "3697a87d2452ee1cb52ef149251bc6d2"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "86ed4576a45fae539de8c8a5caa1b419"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "4c5f9448389027be277ebfb3b0a4d3c8"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "ee17e820d04ea42d47f4f6083df71b7e"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "c681e72983906ce505f33ec275aa3adb"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "52c374419dbabeafbb0b9a1ddda606ad"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "913070d7045b4a3a78299fb76a146da6"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "66db54f652e19313ab51814bd6b51a3b"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "5d19b8f2c7e5b069ab36fc5658ecf839"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "c282b6c95a6c14aa2a3957475652a5e2"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "ee2ee4ce3ae0e598f5f75f9ca1846c0d"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "209ea3234047553ad43ae1b465e737f4"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "e591d24995ddd2b95594eea0f2e8fed3"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "8ac0fa37e67dbc1347ca4b9cf80a35ae"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "dd335619c8aa5cfe7899760aff3316fe"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "0b01da1f845291de4d3da2948a31bdae"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c63a929f73b41d08749b0352b82c4947"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "727607f328806e078c59ad307a2bf180"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "6ce57142a0883a814c7ed40cb838161a"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "714ecb746c9b571410c5b342e0508162"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "44ad80a9f1e04ac2b73b284db87db1f7"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "0223a60c95a6e0c279f7b4425524cdc9"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "76f96b516de811241444208e018dbc13"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "808051f3d685cebfa6e64fe2e76ee05d"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "34e576c68776ac07d010c0c588b1f7d4"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "5d5bfccea2a2ad8ee0758b3b30277b74"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "4f296aa31e8db17a19f5c67ff69fc21d"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "33b4e4836bd6014bee81bfe8d2734e82"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "a8a00b3b9d46abd8a3e701d741dfbb87"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "d81e188419d4d79b38dd078b83b5ad7a"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "e5da1533baba6eaf53f4db842f687fd8"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "e31b553522c93122557f2c0ba7b126c4"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "613083e18337e91254f3b0b4e5d28033"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "811ff7dceac6200dea4d5fc7adbb33c0"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "1368353d85c46abc9cc5bc5ca65d7bc3"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "30ef85be4bfe2d75f4d8a8e55eb76140"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "fb9a90a5ffd65d8f12346fc594579d68"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "f26de31b6189605c8df7060c1b19e1ab"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "af6dccf15c4681f17cb4c390b49b1411"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e7b469bf2635f084608607cd3d69159a"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "548ca4530d6ed80c9f8c40a648feecb9"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "cc3c2dad7558d53ac744f30f0f6c3cc3"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "afb725f27a6f637667e87f3e4c4457a3"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "663ab8f4a0a048bdfe33f6c9a8473abf"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5c5a350212037e0eac35620393c1cbeb"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "4e71f7af61e94c2723e36daa6ce3708f"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "22216af6fc7df436a0810312ce7079b8"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "334a6953f98a886607c973b0e02301ba"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "15f32e1caa07a3b5cd1b33a918dbf927"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "34abfbba1af3b40bf89e0c04b56a3b9a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "fac9680f40c505ea56bfa5cdc5e91eb3"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3f5467df89b8184cf74a75d55a133a6e"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "d97a93d703f9b8af92c5db08b33f5806"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "e7a168497126f9fb85ed55139eb9e83d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "59a0ec34d99e58a5dc71eb0cf2d9589a"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "07ced21817ab66fb2f84e76f51fc5cf6"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "32f0bd40dd5549c133383e7f0c039f87"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "9d73059b0a1ba38222c3cecfd92d92a1"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "9759b5f4fa63150b4ead15a5a22058c6"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "61c2dc29e8caa85fdd1cd8998ad2cebc"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "669e8ca95cf8e2c764b12888a3afe1bc"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "e1d595dbde9149e10bd09791ba8c17b2"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "3de305abe681d7fb725189bafb8549eb"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "2c65ed2762c3c03829db03e41019e8f5"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "ed02cfd5c0c388950f28c37d236ac664"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "121af42adab1a290c7e1f60a98f4328e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "f6ec30023fe7c684b652c5715efa19da"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "edc90a988eb1fe0d37429835631434e6"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "594e2968c8d25767ab3d1b8e8d289fec"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "1be8a69fc35e4431f020ebb86bbc8f93"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "bb3aec4a19b31b54ac70133169a875dd"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "e5556304c1dad741074cb7abe5f4b8c8"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "28de7d23b9878fe320fb9ada2e0fb2f5"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "2c6e1407080a154f7f6353fd2ab1293d"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "3cc07d630fad2df7ef23308935766b63"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "7824806126eb77ea1a6217abb6784204"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "b2dd24ce61fa3cbc3eb0b892cbd97cca"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "432db9148b679ba85c425d89bdf1e7d1"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "b23c5697ab118bedaa369184f7357a1e"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f0eb7544e6fb5ac553cbb7fc3635dd32"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a07faac9a44256f43a7544f6ddea15de"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "9ef0979d4abb149babdc52ed38d7b918"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "310a13eb739f632563b652e0ca212a7b"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "0e498ab033c81cb88cb65566bdc5cbf2"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "4f05c455374bdf7f11accbbe5e3508ba"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "4642ab51c08f08f71efb4d70e00c7c3a"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "339bc029cf31a0a4ef322e53260e0b10"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "06fe60f6a8d42a82309c079f457757e1"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "be0cb7eff75db01ce1806d47a7bcde86"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f02ae977fa6ec9b5e26f8bbff8799741"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "8aca6e4e5751ae62f0569d344eb7e115"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "87fa1011dc477830c345b0339ae67ef0"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "abfa7138ac3501384f42b053ae714d06"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8bab2dcebf47da14cbab252fbd02dd29"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "d1167b0cd75b27473649c8a8c911a2a1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "3ac134a66a33e21d9447dfa4108c1a75"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "a8f16249b91539b69d08fc7fe7833385"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "d98a89125930ff9c655e8c9690099255"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b96e3e8683b4b9bdead3c1676b7b7b27"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "e34c0ff9d7924bafedc42a46572d593b"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "56b742dee9d605c42c650e1d19e1574e"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "ebf5f31d336a08e5a744f36f5f44f84c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e2945acb27f0e43c3bb712899ffde16e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d15722d3243b01eb99126ed0376e9aa6"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4def60376f39038ca4c94ffa882ef91d"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "1491a16b977e1ab12bf76aab0a8bfe75"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "55b3f8f6af5448160bc3e433c7331b92"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "ab0291d9eaa6894c48f7cc11bb4ae9d8"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "bc6fcb56a8025be18427d545ba6ddfa7"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "dceb62c1e6b0c3214a9277796af4718a"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "98cb05642315e460bf7d2a1b26604a85"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "fe38e3666fcedcd32c44d140658a009e"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "3982e37228e32f782082b8b92274644d"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "62bab71ae4f9022e0f180b40b1648777"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "c906ede06529a27f852beb2e6b6598f5"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "8d7b5b2722c14cdb72e88aad3f47f963"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "d825caa292a51534183e2bb2c65547f3"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "5725ea92d24fa37d8e77b0fb0a900e58"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "61b224d620352e71bf4a4ebf8bb1ff71"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "b73aa0b6b3c5d3bcdc1feb74d7072881"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "e40f32f0ee8d39a208ea037f587d1dee"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "c3edc3a912473f0e4fa049a76aa192f0"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "6d7dc17b72b95026b323707071ddd4d8"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "2b91ef1d61c56d387d1beb7a5b8e4140"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "8a7370349fc10157b610ea0e30dcd841"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "a3eb625e8b51e1180b631cfe77b7dbd2"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "a8aa899c44bf1a39647cbe84f9603ac6"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ca06edcfbfba26556cd45403e6f3d52a"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "38c391bdf5a224a72b70d188eb079971"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "91ce4ea9e7b3d1ab2874c782c4453c56"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "568dc3bf8aed3fb490f9624f8b042421"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "deb95575de737ceaeac0702f3bc7681a"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "f378a6a1473f7c312053413d22dea057"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "b3352dde83ff9890c01785f2440517c7"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "25b0570375c7f75f1ae6d9075c1396c2"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "056d3f125103e1bb6d39f06ae56ae1a4"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "3a9f9790decff6263781762922639b3a"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "e8bcf4269c10d420e2ec99ddafd70b5f"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "e2a2882f5c51a5cc138f2dce6c3957bc"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "6223ee75d6bbb6946b08d2925602c783"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "43e7446529dd58df83ecae798c73d730"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "176090b0b7c895c3272ce0c9a80539de"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "10a0829f48d33a98ec2558db342f3447"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "45745c2f52c1ee2840959c2e1f7db8d2"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "26e363be7854732039c0af430518db79"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "701710d691694c70e83ed6aca5bde868"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "22d58d1aa5b757b939b59c09b143b37c"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "dec38236174adab7f106ebf614a758f1"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "30a392cf45467ab3cbf6bd9d435c561f"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "fe0b6372e5af519e6bcb9fa4cee382ad"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "f7eca654ef42b45f26425004a534bb3f"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "8a83a7b24bb2135fbf17c333385178d9"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "8f21ab5ef377dd70aafc12b43c979e49"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "0f43e1d85fec9353040e8cccd744573e"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "5a5392fe99a306f4153489ca7d43a968"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "a7d2e2feadeb5de28d78d17ebd7f3c74"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "eebc9e624ac7acfeefdbe9daca0134cf"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "01cbe97d7d4b0b4660f8e38db8f78e0a"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "cb102aa519d8b6647c0003cfad5bab19"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "8adcef1f223a71900d59a8fddce8c8e9"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "bf0dc810f5b3f7ecfd6960dd9f620da6"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "c8eed62d432ae811bde2e09280d254f8"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "9342f0fc7c9301b302ab7e75c6bb6c26"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "a53a9c5673b9e24d9b05eb5e1349cd92"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "260f7295ea949fe398ad094d5483c53b"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "c9540fb91ac013be7c1d514d602d183e"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "b5fda39f658276f8e866048711c24a0f"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "d736f1a506d9b87ce957533a1d8bba04"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "3357a8887e418cdcf15835459809e437"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "5e20aa4e199cd59d6dff6903e4ac5634"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "9d0dabd0b464b2e9d23fd47d239fd234"
  },
  {
    "url": "404.html",
    "revision": "33df63f4798252264841e28aaeea2717"
  },
  {
    "url": "assets/css/0.styles.290b4c2a.css",
    "revision": "0280422672bda03460a71f496b67c6cc"
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
    "url": "assets/js/10.c7ee7149.js",
    "revision": "a995b118e7d26e5cc00718ef45f01d7a"
  },
  {
    "url": "assets/js/100.eb2c1958.js",
    "revision": "5632a8ad8bd0de51c3f4c373f7a0f6e0"
  },
  {
    "url": "assets/js/101.16a1b543.js",
    "revision": "bc557f90caa9d6c62bab7bdfe9f8b4f9"
  },
  {
    "url": "assets/js/102.1ed4aad2.js",
    "revision": "58d8f634a9416ff135dfeea3de082839"
  },
  {
    "url": "assets/js/103.6d1256d1.js",
    "revision": "49ced826400ed66f00583b5f009eb5e4"
  },
  {
    "url": "assets/js/104.cee52a1d.js",
    "revision": "a3e336bf29e0274b1112f8d7479799b9"
  },
  {
    "url": "assets/js/105.c4780576.js",
    "revision": "9ed8a184b541acca10b698609143c0cb"
  },
  {
    "url": "assets/js/106.3b496805.js",
    "revision": "23a8eb753ad0b42ba1cfe99f960fb6fc"
  },
  {
    "url": "assets/js/107.1f70b9c7.js",
    "revision": "20bf5a9162db3d0aadfb6d6d0b22452f"
  },
  {
    "url": "assets/js/108.e0173c35.js",
    "revision": "f171ef224f2a4790fe7eb96050d0c7ad"
  },
  {
    "url": "assets/js/109.0406bfbd.js",
    "revision": "9c1d21af4848e13d8a965a6ee6b88239"
  },
  {
    "url": "assets/js/11.acea9cf4.js",
    "revision": "78932af6081332a05913f6738b691d37"
  },
  {
    "url": "assets/js/110.252b5405.js",
    "revision": "ad3a16975b704a0165ff9b733d125e1e"
  },
  {
    "url": "assets/js/111.ba57cfa3.js",
    "revision": "2f3523162fa2b1e5f0abfcc61087c315"
  },
  {
    "url": "assets/js/112.a8c82598.js",
    "revision": "d96a292ac13b7a2ae5c2e4a42986ca72"
  },
  {
    "url": "assets/js/113.c194288f.js",
    "revision": "cd2f34b87668f25f9da0678375711015"
  },
  {
    "url": "assets/js/114.9801d35d.js",
    "revision": "7121d607e36190bc4a8c489b82f74cf7"
  },
  {
    "url": "assets/js/115.e8f7a18d.js",
    "revision": "9eacc11e85b0dc6095dd8c07a6720b84"
  },
  {
    "url": "assets/js/116.2b8679ca.js",
    "revision": "9d1e089d06b89dbc5eb97692bef18a96"
  },
  {
    "url": "assets/js/117.d5d7a001.js",
    "revision": "d2b4081d57ce11176f51f6dde42b2986"
  },
  {
    "url": "assets/js/118.b2deab59.js",
    "revision": "619874b618c550939b9346b85023bdfc"
  },
  {
    "url": "assets/js/119.216b094e.js",
    "revision": "b5d74e3efc64ac632cdfe1b235da9544"
  },
  {
    "url": "assets/js/12.6dc663c6.js",
    "revision": "94023bbc3d8efd5554b8f723e8f9cae4"
  },
  {
    "url": "assets/js/120.48aea012.js",
    "revision": "4efb8ef24036a077cd975835226b2189"
  },
  {
    "url": "assets/js/121.97738e9c.js",
    "revision": "85cdb021eb9813f5e06de3ba3bab40cd"
  },
  {
    "url": "assets/js/122.545d5fe1.js",
    "revision": "fba04180091d6e980a4143658c64c2a6"
  },
  {
    "url": "assets/js/123.80fef121.js",
    "revision": "5a90c0efe6edaec487c516444037d081"
  },
  {
    "url": "assets/js/124.cfd3e690.js",
    "revision": "4666a1917935e938bf88fec8c2fbf3cf"
  },
  {
    "url": "assets/js/125.c2a62e4e.js",
    "revision": "1a6e7e55a465e51381305ed5d581f001"
  },
  {
    "url": "assets/js/126.1f350578.js",
    "revision": "bcfd6801d5177acdd88999628aca68d5"
  },
  {
    "url": "assets/js/127.78dc0a6f.js",
    "revision": "043e97d42fab0e425b05a1ff8761bf7e"
  },
  {
    "url": "assets/js/128.e55b6335.js",
    "revision": "d761cbaac0ed26228b9ca24dec9bba21"
  },
  {
    "url": "assets/js/129.e7333e5e.js",
    "revision": "8f894a61da198e610a5582729788a221"
  },
  {
    "url": "assets/js/13.473d3459.js",
    "revision": "6867c5e79b5f670569a9553314887b2e"
  },
  {
    "url": "assets/js/130.fb0f4236.js",
    "revision": "69583f8d628aba38fde9380264f087e5"
  },
  {
    "url": "assets/js/131.4560accd.js",
    "revision": "190bf1fc473e14f48fce26bf00461cf9"
  },
  {
    "url": "assets/js/132.bcc74523.js",
    "revision": "107d962c8992888b39d48c8cb7af2bc5"
  },
  {
    "url": "assets/js/133.ac6e6ef0.js",
    "revision": "f987cdc5ea3962772dad9e7bc2f47eb4"
  },
  {
    "url": "assets/js/134.01dc988a.js",
    "revision": "6ff5394e9367923f3ccee63c48ad0ea0"
  },
  {
    "url": "assets/js/135.1f8a84be.js",
    "revision": "b7634481d56e76e21f7fd76cb9c07684"
  },
  {
    "url": "assets/js/136.de5cf9c8.js",
    "revision": "dc1fac8783acb7347efc8ec3cf981eab"
  },
  {
    "url": "assets/js/137.b64d304f.js",
    "revision": "f2ef469a7101ae72753f01a0e7055f38"
  },
  {
    "url": "assets/js/138.004817f5.js",
    "revision": "b88cee768c937b94fd2ab804a50b4419"
  },
  {
    "url": "assets/js/139.ce8ead6e.js",
    "revision": "5e687d85d0253a741daa5307545e58e7"
  },
  {
    "url": "assets/js/14.eee0f82f.js",
    "revision": "813d712fae54d014631b6f53fa1804e8"
  },
  {
    "url": "assets/js/140.f856901b.js",
    "revision": "229cee94807e4a03fe9baea9e27c9cbc"
  },
  {
    "url": "assets/js/141.9198fde9.js",
    "revision": "9cce95195b1f75f7083d148133a7450f"
  },
  {
    "url": "assets/js/142.d30741cb.js",
    "revision": "5089c3943b67a56706bc205e2dfc2049"
  },
  {
    "url": "assets/js/143.c0b6fc76.js",
    "revision": "7424a5b44449327a379a231e4c230a8d"
  },
  {
    "url": "assets/js/144.68ea79d1.js",
    "revision": "5b0a6856a527c1f9e24fe28c2f097be3"
  },
  {
    "url": "assets/js/145.beb6f2d7.js",
    "revision": "2ef271e9c6fcbcc3ac5299c25510f405"
  },
  {
    "url": "assets/js/146.07998e6d.js",
    "revision": "699689e0952895fed4a1a35823e18adf"
  },
  {
    "url": "assets/js/147.b438b611.js",
    "revision": "7eb0b8fdad836923813cafbc0bba46d3"
  },
  {
    "url": "assets/js/148.36a9e661.js",
    "revision": "b01775b7293a0cdff65f2a21bf315048"
  },
  {
    "url": "assets/js/149.8d6fb79e.js",
    "revision": "80319603da87dc59c022ac65dd294aff"
  },
  {
    "url": "assets/js/15.a06eb435.js",
    "revision": "ec82093fdea2994accb459cc0d3f3bc4"
  },
  {
    "url": "assets/js/150.5b51cdf0.js",
    "revision": "7d3b10f57bb0d7980ad8627b92866b81"
  },
  {
    "url": "assets/js/151.b6e07312.js",
    "revision": "280789bcac964b26eaefbf1e08d13b58"
  },
  {
    "url": "assets/js/152.f5cff590.js",
    "revision": "ed464b5eded292e25bd2863f49ff7413"
  },
  {
    "url": "assets/js/153.9ca384f3.js",
    "revision": "92985d81d49012178bdfb7a8944cd2e7"
  },
  {
    "url": "assets/js/154.75efd8b9.js",
    "revision": "b43b36c1711962f1cad27aa9f9462762"
  },
  {
    "url": "assets/js/155.e23aa9bc.js",
    "revision": "261bfc6b2aa56c398357398b110ef860"
  },
  {
    "url": "assets/js/156.099f3737.js",
    "revision": "e0ecf621e313f415e71d96be7770a420"
  },
  {
    "url": "assets/js/157.2924078c.js",
    "revision": "b9d42b177febd5e26760ef141703854f"
  },
  {
    "url": "assets/js/158.79002ece.js",
    "revision": "b9b8c257786d3c00ac8eddc3adfc5573"
  },
  {
    "url": "assets/js/159.3e9a9c3e.js",
    "revision": "5dd05ec815413d8315b5566cea492f07"
  },
  {
    "url": "assets/js/16.08518162.js",
    "revision": "627b440452af231490aa9a53eed43a0a"
  },
  {
    "url": "assets/js/160.275830a9.js",
    "revision": "e0264b71e324bbc944817d19a3f69f05"
  },
  {
    "url": "assets/js/161.9faa9cc4.js",
    "revision": "3ed177a95dc5d4e6a6049cfe52884829"
  },
  {
    "url": "assets/js/162.1abde942.js",
    "revision": "22f1c894a7a68f6e163f5c032914ccef"
  },
  {
    "url": "assets/js/163.1553e8e0.js",
    "revision": "8e366412fdfe0a3a13c9e31cfd856dbf"
  },
  {
    "url": "assets/js/164.f005d114.js",
    "revision": "ac6068e35fd2ad94d0b6829fc099e51f"
  },
  {
    "url": "assets/js/165.a6be43c1.js",
    "revision": "2603eb8cef2d9385dba9d732a4279281"
  },
  {
    "url": "assets/js/166.9f9c2cfd.js",
    "revision": "39687da9be90df2213fc41de645f6333"
  },
  {
    "url": "assets/js/167.3758468d.js",
    "revision": "6fd5bcf734a3ed730d26f782483b23db"
  },
  {
    "url": "assets/js/168.f65c907a.js",
    "revision": "1f70eef50cabdc6a41ca6ef109fbc57d"
  },
  {
    "url": "assets/js/169.07dc6c1f.js",
    "revision": "117525e58db871aaf3ff20eb59d4dbc1"
  },
  {
    "url": "assets/js/17.8383d146.js",
    "revision": "26707e68fd20dcdf89f244e4617e77c7"
  },
  {
    "url": "assets/js/170.cd3837ff.js",
    "revision": "aac5545332333a3c4a12114a72ce9b98"
  },
  {
    "url": "assets/js/171.e0e6eea2.js",
    "revision": "dd382a0a4a1e91870c58a3ae583bca91"
  },
  {
    "url": "assets/js/172.2f0903d7.js",
    "revision": "af9c9a006adfa92b18964da279616852"
  },
  {
    "url": "assets/js/173.6b0a8be5.js",
    "revision": "d894c90c70b5d8f94728b270bd6c9f7a"
  },
  {
    "url": "assets/js/174.ec0eeb68.js",
    "revision": "060925870c5eb859f46adc839494f7ef"
  },
  {
    "url": "assets/js/175.a2cdb6cb.js",
    "revision": "5c637adfae5d45c7ee9f0f5bc44acd34"
  },
  {
    "url": "assets/js/176.349c71d2.js",
    "revision": "15c6781a60a25a5332a1f2741440d4bc"
  },
  {
    "url": "assets/js/177.a3adca21.js",
    "revision": "78914d8e6b09329590ad115b541d8f59"
  },
  {
    "url": "assets/js/178.69d67c1b.js",
    "revision": "ea8b1acd146e368b053fc0c41351222d"
  },
  {
    "url": "assets/js/179.342bc359.js",
    "revision": "26a672bc76789d687bc31f7539c9e7e6"
  },
  {
    "url": "assets/js/18.93c5bd79.js",
    "revision": "7149f6d3dc7a747ee223d6a2115edc8f"
  },
  {
    "url": "assets/js/180.b87fbed4.js",
    "revision": "1fa5511dc12acd5171b6891e5aeb44e3"
  },
  {
    "url": "assets/js/181.bf0f2d51.js",
    "revision": "113184ab22fc61e70a472f10eb9497e2"
  },
  {
    "url": "assets/js/182.4cc65053.js",
    "revision": "95f4add144657c880851809233957af1"
  },
  {
    "url": "assets/js/183.68093bce.js",
    "revision": "b556cbdc78e3d61053b4cb835158ee05"
  },
  {
    "url": "assets/js/184.69fce9b2.js",
    "revision": "6cf8aa06e54637aeaed723e9abc0033f"
  },
  {
    "url": "assets/js/185.39aa03fd.js",
    "revision": "659186f26a7471609038c85e6559088f"
  },
  {
    "url": "assets/js/186.968e1c64.js",
    "revision": "e10822ddb293e88485dc4feb209421fe"
  },
  {
    "url": "assets/js/187.1c6bbe25.js",
    "revision": "09ef430abac435616061eaa6f213f2c3"
  },
  {
    "url": "assets/js/188.538400ad.js",
    "revision": "6cd65a5cd6f72c5aaf6a71e0898de5a3"
  },
  {
    "url": "assets/js/189.d5cdb00a.js",
    "revision": "0ff3eeb603b6ca2c982bc36a8c2bb66f"
  },
  {
    "url": "assets/js/19.9883756b.js",
    "revision": "e0a46004f46fd43dcc78ed5dda93f02c"
  },
  {
    "url": "assets/js/190.9e17a0a5.js",
    "revision": "e22a7b6667c5939d8f867a5acfe044d2"
  },
  {
    "url": "assets/js/2.93fdda48.js",
    "revision": "c3f8636516f88f7fd1ccb93e0e155ba9"
  },
  {
    "url": "assets/js/20.0e56133e.js",
    "revision": "9bf72e0895812ff162d8d6aabe68ba51"
  },
  {
    "url": "assets/js/21.27486584.js",
    "revision": "20abc1056945a25d0cbc5d44e4aea501"
  },
  {
    "url": "assets/js/22.d56ddbe1.js",
    "revision": "39c6dce626eae40a8a218f6847627475"
  },
  {
    "url": "assets/js/23.757bdc9d.js",
    "revision": "a55f17f1bb2a726e217d47fc8742171f"
  },
  {
    "url": "assets/js/24.26826d9c.js",
    "revision": "0cbf0c635c8e982cd9edf84f16430b9d"
  },
  {
    "url": "assets/js/25.11796cd7.js",
    "revision": "147da05174c5cc5d1bdcc3eaaefa9b28"
  },
  {
    "url": "assets/js/26.c5350758.js",
    "revision": "040397e4c721ec5411d7dd5a4112ac0b"
  },
  {
    "url": "assets/js/27.5187bb86.js",
    "revision": "24f355be124816ec62230587c4a6832c"
  },
  {
    "url": "assets/js/28.abb92af0.js",
    "revision": "a88609c1777e1f20ff53b8c8f46f097c"
  },
  {
    "url": "assets/js/29.25c9241d.js",
    "revision": "224e7eb24b230ddfa85e9139d28681c4"
  },
  {
    "url": "assets/js/3.a702b1f7.js",
    "revision": "7c616d9b8c96c2cf4fb59f9c2b016552"
  },
  {
    "url": "assets/js/30.a35ba7c0.js",
    "revision": "3d44b06fc34b7872b6325f169bb00a02"
  },
  {
    "url": "assets/js/31.ac938129.js",
    "revision": "da04130e5e0f4e3666cb6ccd50b98cc7"
  },
  {
    "url": "assets/js/32.b87e1c01.js",
    "revision": "772996a9eb0d7bdf3c7159479c372598"
  },
  {
    "url": "assets/js/33.236a9cdc.js",
    "revision": "e4f5f38a5ebd447f1ad7b40b4efa8034"
  },
  {
    "url": "assets/js/34.d23fd109.js",
    "revision": "56dcce690557a74593791dc88ebf01ea"
  },
  {
    "url": "assets/js/35.e67fab1e.js",
    "revision": "d19868784f0b9762b4fd945d4825cdfe"
  },
  {
    "url": "assets/js/36.732a0ff1.js",
    "revision": "34a465a570bb46f3382a20a01f15f6b3"
  },
  {
    "url": "assets/js/37.688abb62.js",
    "revision": "d0a476bd2d8382165bfdd59378ab083d"
  },
  {
    "url": "assets/js/38.8506db21.js",
    "revision": "acbee997224cac9453685246152b17f7"
  },
  {
    "url": "assets/js/39.9b6a1a01.js",
    "revision": "8802500a34d35d8fe37e8650be8aec9a"
  },
  {
    "url": "assets/js/4.53803f8f.js",
    "revision": "df48fa373cba8efc406af7759cd77b9f"
  },
  {
    "url": "assets/js/40.9221c9e7.js",
    "revision": "01c90539091b71946b906873a7182843"
  },
  {
    "url": "assets/js/41.b0e72f76.js",
    "revision": "086be5c5813f8aefde22984ebed4da53"
  },
  {
    "url": "assets/js/42.09864af6.js",
    "revision": "d98bf2affde52e71f7bbe0b43ed6e9a8"
  },
  {
    "url": "assets/js/43.431bd6a5.js",
    "revision": "84ce563a9b658d7af9892fc2b034b602"
  },
  {
    "url": "assets/js/44.98c2681c.js",
    "revision": "83b872b4f6ff32fff83953f64c47f232"
  },
  {
    "url": "assets/js/45.431fe3dc.js",
    "revision": "da4c99236b4c19b6df335b38da1d10a2"
  },
  {
    "url": "assets/js/46.fa442179.js",
    "revision": "af01b490ea001091cf89bd6fb814e2c4"
  },
  {
    "url": "assets/js/47.0ee5a201.js",
    "revision": "0ac3b6b39bc14793b08b86e1e581aad0"
  },
  {
    "url": "assets/js/48.0a64f85a.js",
    "revision": "7a01576ff990b833601f9bf65c210080"
  },
  {
    "url": "assets/js/49.2ae1094d.js",
    "revision": "395bf88b39988684804a3b49da895c6f"
  },
  {
    "url": "assets/js/5.17da0945.js",
    "revision": "7111c6abe4573af902c511132315e57f"
  },
  {
    "url": "assets/js/50.0a203e95.js",
    "revision": "2ca17ff84befe01bc7118a1e9efd6c51"
  },
  {
    "url": "assets/js/51.ff76aed3.js",
    "revision": "67657181b1aeada49a5eff97e19d6857"
  },
  {
    "url": "assets/js/52.d2b2f9e2.js",
    "revision": "f156d7423a86f482e0807e8632ce7fd0"
  },
  {
    "url": "assets/js/53.64753fc1.js",
    "revision": "e7a7dd396291e38899cb16b1d41541e4"
  },
  {
    "url": "assets/js/54.7939e53c.js",
    "revision": "ccdbb7eddb12cb8bcfa0be44e649fce3"
  },
  {
    "url": "assets/js/55.84a0dfa7.js",
    "revision": "f461d09afd6aadecbdbb2f0152c9bffc"
  },
  {
    "url": "assets/js/56.53acdbff.js",
    "revision": "c1b244cd7ae035ecbdf3ee1a36e89a86"
  },
  {
    "url": "assets/js/57.04a15b16.js",
    "revision": "209b509e589779852f1e040b8e4a4459"
  },
  {
    "url": "assets/js/58.90ecb06e.js",
    "revision": "6947d6e619c7159777cf6b2fc9aa069c"
  },
  {
    "url": "assets/js/59.aa698d8a.js",
    "revision": "7f39f5cf175ff3135562b8c1a4878e2a"
  },
  {
    "url": "assets/js/6.4de8e8f0.js",
    "revision": "5090f8784688189f759040c9c231e701"
  },
  {
    "url": "assets/js/60.d153507e.js",
    "revision": "37cebde4958a5d9f0c0ec900df29d153"
  },
  {
    "url": "assets/js/61.83490ea6.js",
    "revision": "b3fffb5b2b927fc863c1ee5cd9e6b2f4"
  },
  {
    "url": "assets/js/62.d7f4d89d.js",
    "revision": "2984535aaa214c892ef824d5d95a0be4"
  },
  {
    "url": "assets/js/63.85248506.js",
    "revision": "97640a422c07f1d7acf43e2728a00240"
  },
  {
    "url": "assets/js/64.ca854f77.js",
    "revision": "5eb350861c7ce378545c381046eeb833"
  },
  {
    "url": "assets/js/65.3d9c4f4c.js",
    "revision": "aaf555560575442e2ebe9f4f2a593c96"
  },
  {
    "url": "assets/js/66.65eefce6.js",
    "revision": "9e95468e9c10c8dd077f21f937c971da"
  },
  {
    "url": "assets/js/67.c28fc234.js",
    "revision": "1376c508fa50e050c62b8e407aa34aae"
  },
  {
    "url": "assets/js/68.0bcab92d.js",
    "revision": "4ff1f634371fde6db31de4ec5ad0154f"
  },
  {
    "url": "assets/js/69.d967b2c1.js",
    "revision": "32b7accc14197d033375554438ad5764"
  },
  {
    "url": "assets/js/7.30918fc7.js",
    "revision": "c63c3834febedda4791123645d076d54"
  },
  {
    "url": "assets/js/70.20503e83.js",
    "revision": "b9543121af8c9f54842d52a85d345cd2"
  },
  {
    "url": "assets/js/71.33b8561a.js",
    "revision": "05ff1bd2220ce2e220579dd4bb663984"
  },
  {
    "url": "assets/js/72.aa7c6250.js",
    "revision": "da57f10bc1436fb36493899d5a096d8a"
  },
  {
    "url": "assets/js/73.dd8069f3.js",
    "revision": "12f3e7ebaf2c42cd5b3f56cc39d3477e"
  },
  {
    "url": "assets/js/74.57cf3167.js",
    "revision": "f02bba20d2d32cd168c807902ec29de4"
  },
  {
    "url": "assets/js/75.b361803e.js",
    "revision": "4c546b953e875215bad61940820e9d72"
  },
  {
    "url": "assets/js/76.1a08f8b2.js",
    "revision": "ada7904d0b95d02360847873d735b07a"
  },
  {
    "url": "assets/js/77.e853b924.js",
    "revision": "c92d15667c43476e37712acf6ae32629"
  },
  {
    "url": "assets/js/78.e168b2f6.js",
    "revision": "7d1cd505d8e369f03d89faded8b1f7c4"
  },
  {
    "url": "assets/js/79.b3d5a645.js",
    "revision": "0bc583fb5bdc40980fc5ba159eab4452"
  },
  {
    "url": "assets/js/8.994694d1.js",
    "revision": "a99ead99f2da1d19b7694b80579b404a"
  },
  {
    "url": "assets/js/80.19e6e511.js",
    "revision": "1d98806eeebfab31b43d9e6b76b7a86b"
  },
  {
    "url": "assets/js/81.eb6d17a0.js",
    "revision": "b6351dc6e7c87ec814f2d3174756ba3f"
  },
  {
    "url": "assets/js/82.8801bf45.js",
    "revision": "b1d121b01001c8216f644658f272d71a"
  },
  {
    "url": "assets/js/83.a3a3746c.js",
    "revision": "3c492b23e94aab4cbb89f1ceb578a3fb"
  },
  {
    "url": "assets/js/84.347e4af5.js",
    "revision": "f5ca81931343bbfd8998ae6dc95073e2"
  },
  {
    "url": "assets/js/85.283461c9.js",
    "revision": "5e39dbd07e9bc3c8859203a2bee14193"
  },
  {
    "url": "assets/js/86.e7d0fa0f.js",
    "revision": "2679b9810e748e42b37c26c72be2ffd0"
  },
  {
    "url": "assets/js/87.03db2424.js",
    "revision": "534966799d5fa21406229740de529263"
  },
  {
    "url": "assets/js/88.e29f0064.js",
    "revision": "d4618ecc4fe7c41f435b79672eec419d"
  },
  {
    "url": "assets/js/89.36c291b3.js",
    "revision": "2690886df1ee8dfd1950aa50dca76f04"
  },
  {
    "url": "assets/js/9.1ddd5114.js",
    "revision": "7ba5c134a8f3626631f0db8852f97fa4"
  },
  {
    "url": "assets/js/90.3caa9f3a.js",
    "revision": "ee8b1b59aabb6c55abb3a928ab6c5e6f"
  },
  {
    "url": "assets/js/91.473346c5.js",
    "revision": "7d69f9ae41700e5b42b17dd502cc11ac"
  },
  {
    "url": "assets/js/92.1b9fdab2.js",
    "revision": "7ac18c6538503938c083b62f7b767621"
  },
  {
    "url": "assets/js/93.5b73b31c.js",
    "revision": "cb6428e9c010fbcb6088a6459307e81f"
  },
  {
    "url": "assets/js/94.f251ca4d.js",
    "revision": "730fbf4ded5a9b050e32d2039e4d6485"
  },
  {
    "url": "assets/js/95.559712c2.js",
    "revision": "ff2477cb8d46b5c55331c2195eb21b31"
  },
  {
    "url": "assets/js/96.e333fc35.js",
    "revision": "0dec8eedd94eea53f27b7aa73ff07b0e"
  },
  {
    "url": "assets/js/97.c45317b4.js",
    "revision": "95921ca6afa7104e4d09d474013150a7"
  },
  {
    "url": "assets/js/98.f6932ac2.js",
    "revision": "fe4ffe81f92772e781cdd60c702cbbef"
  },
  {
    "url": "assets/js/99.f27157cc.js",
    "revision": "44f1c3678d7535f108c6c439545dcbd6"
  },
  {
    "url": "assets/js/app.b7c57937.js",
    "revision": "4f78209710f05ce84b749268d23e3351"
  },
  {
    "url": "index.html",
    "revision": "8d861a3b56e2f8264c61a45dfe89b87b"
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

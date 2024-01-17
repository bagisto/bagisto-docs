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
    "revision": "8be659b68b339fd29d8bdb3fa7f392de"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "94ab391807db51e84ba34173b43e9037"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "cd51b621cb7a0eb50c8db03cefbfb1c5"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "1c10ad893375b9c55b48aa5aec06f506"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "86344264c8b5d349f6107abc15f07eca"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "5ac394529a202c182216418cf4f50772"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "6d719f6a1ba35b9d56c1d93f06151b80"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "31d0165d2a6f3824f372759a961062f9"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "6f4ea84b4a67cc7325d27e836562a2e0"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "6fb9dbf61cd46ab7816b4d838811f642"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "7949ea151550133841a798b7ce712936"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "6f2541aff5d89b4bd6bdb6927a574308"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "7fd0d996ec43354e517bd06263385c2a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "c85bfc72dfb907ec014195338cbd9ed1"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "17525edd2de2c2e698bf9137b706edfa"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "723b65ffb254e5c573955b01b4128136"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "17b19e335cd3f5efa2de18d03ecc29ea"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "c2ff1cc75a5335bf5aa361602c9514cb"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "aa6d44075b1a7f5d2c8a4776c21d2492"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "a0a26f008a143f8fd1742c27abccdcb0"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "0d6a123fde3991c0c2f91d04020f4c2c"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "cee08614121aa89e207e9a0d354fd5f4"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "d97e4a14ea2455bd4fa3dffaab0ce790"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "65dfa498a4e53645f98c6a0207d49fff"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "27a26292026d7a18cbb73806a101e190"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "5ed009ad801a83400b390f4d8b4f556a"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "81e36aa6885a8edb04d308f6dee59e04"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "db9ee551218806214570564cf2e110f1"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "4f8b8da6c24813a0a0d52ff79be22a0c"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "20d779377bf2580a7ce8fd7fa4f960c3"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "a07a660f7bffbee8dd7ff53623c2427e"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "2eb6fc2d664f62c5731d616ddbfc00e1"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "cee59d295dc695a8f44df228282134e2"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "82257dda7de33b237c75f1bb0e229968"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "f7af08dca5f18561a161f29b90eba479"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "6dbd5691e90c7c46284272b7e5f98eff"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "519c3f25ae7af6660313683e53cb6f40"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "6f8614a12a29ace8ea30d2b05cc6e924"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "2db7af3a4762e654d940657a10217b45"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "7b3a80daafdc6619e69a1b29082e7aa3"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "c91f311045ac267c562cfaa91fc9e8da"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "f08a2c88dc1e92d64f3107ed88eaa73f"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "2c0f5f4363ddda734ccfa88cbd2015a4"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d877f8bb26fdac5a6afe9f9cab7747db"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "0b0b7087b5d4e0d101a60178c800c3d7"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "8a9969e2bf26e3868b01d9aa0265dde5"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "8d5695da88d523631cbea326e83e371b"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "9709724f60d2058b2bae4ca77c6b4240"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "3d0a8f17f46ac3c661edd38923fc8a29"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "5ad04d5995f0a0d9c576097affcdc08b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "30f0ca1c13a7f15b9dbfff3233d9be11"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "7524a80b2b5f63bd129472cbecd331bd"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "c44b6924cf4da27eebdf68d9c57304e0"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "84d3ccea47987d82ee637a4d34fc4072"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fc1d8b506d9aa38f4bd0fcc6b517878d"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "48857c24da2186e0f48295c1a9f95256"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "b89aeb45aa0cb5a50727efbab98f167c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f9faf7c351f8935009dac659c1922ec0"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "dfbdd1c2ea3215c82c905dc95dc875d3"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "f906cfb7ebee02c30b0ff890b2c2b915"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "aed1ed8c6a107edf260fc3e5beeda19f"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "b10eff97e865c31858540ea8622e1b95"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "d46da91bd54c8db1d0c6d78db871a521"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "4830c9811c284db81bebdd01066f4c97"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "142de7c5b266a8772a7ac3036fdb5618"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4575dcf3d702d87aa978eb4954d59bbc"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "2b6363f0bf07431a6c674730080a33ba"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "50d1870c0b0be3547b76eef7687d63c1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "1d962688b77ebf4d4268363b8317a771"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "64f0b73b7e03baf664532faa0db5bb08"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "8226703bcd124cc7c9a89c782ea02f8e"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "98f08fd4a9c8962c9b5f594f585cfcc9"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "f4b3a3d892e23985edecf89e6a8bfc0d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "bd6d5da69552a99d78606de104d8df8b"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "137aef5fafb1ba17e15b74773dce66e9"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "7bff0264bed9ddb087ec5a5dd86efb74"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "c4ba396df479c44aa7121e7e454fc1fa"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "42c57afc14988884dc390a586cfde399"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "30969acf718e62e9520fd334033a88bf"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4bf68f49906e8013e7aee0f6ad8ea061"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "e4672b71b6c8f9f424149419d82859fb"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "60f2bf25195288b79d72d6de42512b17"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "efa670be22736c8e49ee85b3eb488ef5"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "2d3f0943c20d7cd7cf954689ddb45c66"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "b295985a8c21b33e897a7c3547eb5325"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "89c835f52887204df2ae56f205d3f649"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "41a90902d1266e76b2cd3b320f2fdb45"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "4f651037c8acc3bb47b4d25140b55c28"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "d71f7d55181c3d6696b0c602d873f010"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "41212d90f888d6aa4f855d4742d04714"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "18c362f9c5801372e9cfcc0e9b314674"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "b82f053f5384b562a45535cd06a797e7"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "7e82dfb23460d05b6af3b3cf5cb15fb9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "f7c695daca02fbafb9be6912d2bb5945"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "7ab1c871ae931ff65f652654db46dcb7"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "126790e8620419ad9147a1a743272345"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "d615b6750ef8282ac6c8eda136a21ffe"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "28f28e10ca34ccc928a98fe5de2b7bc5"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "89bb5cdebc734ebd36b4bbb82a4fba17"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "4ecc0007afcbe258d070c471ac11cf22"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "d654cf0022abff4dd0e29688824dcdac"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "b9cce3bd2089abf52aba5ed84df7cda2"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "bd39c116d3130e3e5c5ddd2dc846c313"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "f2dc17ad140b27eca934a7b4a86ffa1b"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "77dc8e7df5d2b830a4b4f3393462f2da"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "f138f370eecb4d33e274eddf92b1e792"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "fd310f18109e159d158593afd13422a7"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "1ef0f38c722ab285626322657748fdae"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "3ec75f4614715011517257f7c11b098e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "0fa1f33017c59f460e7ea51753122ed5"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "4665538573f8e0541447896f99dfdc1a"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "563e2536f430f90d52514ed17e430e0f"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "66a4915afe75badbf9223e33187e4c59"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "38a150f4ebd19e6a37e54b257651fe87"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9f8c307f2d3eb41f1fca210fdbe00416"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "8f4303b617510793dc30a3f5f6b3217c"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "84fd8748132115408f844c5cd525314a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "3d73af99435f43d809fe9e48e2fbdbd8"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "6ea861a68758c5b3e77212f1f6ebf4b8"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "cbe0c6407015700934f181c9659531f9"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "b8611e60d2b9a51f232d0df5e706fa09"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "9f939178d26473b690109ce726420157"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "49c1b10cf2c6c5a068fb6ab12ad4ddd1"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "6b06e4cf39e6462542f46f2e2cf6c80b"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "b22eb9765b6ce06acfd60de7d01aa60c"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "9158e45e7af1b4e5433858c9e39542ac"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "257fc3c1c570d4a89d7a3a340b4f70d5"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "e49759074da4bfe95bc726b207cb07ec"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "28b2f5a9b2fbde788f1952c750608d4d"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "7d0abb9d6d31c5ba59ecef12b57fcd56"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "7ac7d972f9b10ee022eeefb3ed475b96"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "13ae0362423c72331b449819db8de7b3"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "daea770ef7a42177d9eb692e7d0a91f2"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "4ca908078fb68eabbee8f59998b6d07d"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "402c000475c74c23aef20f3b057c9000"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "6597706a57399fede74880eae3259a1e"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "d62f83897953cdf789029a20ad229f31"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "3dd546cd48be47f929f372fc45dee577"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "9e6166dbfde46ff6ec58cf640d45adf4"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "f6a3cf1eddfd96c003a703933d5a3b2e"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a8c3aa104eafe36ade8c9de47d3388cd"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "75b41e8a03f23073974120184b04b96c"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "3d9f01e56809b1e041c728e30e3cbce3"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "d81cb781d746ee5b7a0bfbfe06c7f2f9"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "b856a6c359dafa787f1f6a2f05906d42"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "cf4d0526dcd1dbf0a84b45a73216a1dd"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "da61ee7142cda39623ad5a57f2b7b092"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "a046517c4043742a4d7d682ce582172b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "960881d9ed18e1468ef60ca048e33545"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "71fa2a46d004c6bea3e498af7bcbb81e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "37647af89c8f17132d8fee6ac875bef2"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "a5b4e41901a0f8cd8faaa94a2c610a33"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "bb4cb96284d7f5f4fb9263207c8cf2f4"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "6d86652e0c0a4b318b1baf4b51e259e4"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "b9cf3f487145f798aea169ed2acfa629"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "fbcf3af30222afe3673a1f304be4e54f"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "4dafbb16b4bf8c379c3fd1d93c29b333"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "7a10e6fbe58489f7b524ceec9afd2c2f"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "c2fbbbe3d04c265b9ac8e5eba4782916"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "2d6fe728284b67e6e2db739df4af4aa7"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "60894b420e33b70e620950f28938a581"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "b5d06078e3c7c66436e21165164b29bc"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "be1dcf89cb2231a1b1ff0d93c5cd84cd"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "8cebc48f90e6f9a4aa890d1859747e91"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "b055ffef06200e405c42bcf0c8854688"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "23a6fc441deb379fcdd176d55054fa41"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "d2cfc7f3819c85c0dbcfda9684afefbc"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "eb58a254eec8e0e4b6732c925fa18059"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "1a0b6a9719e7170c07cccf880182283c"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "be47c7b2b957f70c65596d3e93813de5"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "0d079c7bf2bbc17391dd0ddef146cf5a"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "ca362f63e2b4eb0625d526fa66d7c95c"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "00557ba5c077441177333c5bead8a905"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "ac09bb3f369e2a598ada155fa07da29e"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "b0a1be7372caa3cb2678746e0fe6a5b5"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "044c8d292e7f1b3926f5e242435e4c1d"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "5d77aa58b3fd5f39eba5d57e5748eb99"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "10c4c32aa4c1173650c6b5ec99a9705b"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "640c5b01a5be765e9a649b5c505fc9c0"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "9917eb9803a057a7dbca0b37bccba989"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "ce7b67973b0c855caf63252001a5971a"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "adef347bb13b62b8f5d1da1be3255e69"
  },
  {
    "url": "404.html",
    "revision": "46e4a3622d8e03a92928b568815e84c8"
  },
  {
    "url": "assets/css/0.styles.3c367bfe.css",
    "revision": "3a1ebc21b86291251328834c0d5063c2"
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
    "url": "assets/js/10.b32e5ec9.js",
    "revision": "38ce60db99f655c4f0e5a88d114783bf"
  },
  {
    "url": "assets/js/100.47a0a494.js",
    "revision": "d925decb50a85c244a895a82de1d057a"
  },
  {
    "url": "assets/js/101.2388cfc9.js",
    "revision": "bc0d3be4a856dd36daee63b1e9f6fb91"
  },
  {
    "url": "assets/js/102.8cbb1f15.js",
    "revision": "46af919072850773782f37808ceb87ba"
  },
  {
    "url": "assets/js/103.5a6d6a2d.js",
    "revision": "8f73ba330c027cd4e39053c6ae508b0a"
  },
  {
    "url": "assets/js/104.c72317b7.js",
    "revision": "bed935081a317520aa375d8a29746033"
  },
  {
    "url": "assets/js/105.8584d4df.js",
    "revision": "043b1355a6414acb32c4ee6fe6588496"
  },
  {
    "url": "assets/js/106.07c142cf.js",
    "revision": "8799e0c2095373d170edbe7ca45e9e81"
  },
  {
    "url": "assets/js/107.3e0f469a.js",
    "revision": "da09c14cedf19958dcec123dcbc64820"
  },
  {
    "url": "assets/js/108.a21bf0d8.js",
    "revision": "7b73d57904f8344ff475f4656f4d9971"
  },
  {
    "url": "assets/js/109.db73fb7c.js",
    "revision": "3bfd1c4c0a92864540810304cab2312d"
  },
  {
    "url": "assets/js/11.74e014db.js",
    "revision": "21b1aa27daec398a7cfe1dc804b60572"
  },
  {
    "url": "assets/js/110.03225ad3.js",
    "revision": "90c90c5df40921ef92e6add8599b8388"
  },
  {
    "url": "assets/js/111.63e378e0.js",
    "revision": "f5bdc7465e15ea8e6db8f4331babd477"
  },
  {
    "url": "assets/js/112.19f78db7.js",
    "revision": "ce52e0f9e966d518116c34bfc2c75ef4"
  },
  {
    "url": "assets/js/113.4d162bfa.js",
    "revision": "65174af5d686b5dba76f255fb994c1ba"
  },
  {
    "url": "assets/js/114.80095f89.js",
    "revision": "5cb63fe77b8e2fb17541835b60fded05"
  },
  {
    "url": "assets/js/115.483bbb07.js",
    "revision": "e99c90bf59873ed6ad7d32b12e95940d"
  },
  {
    "url": "assets/js/116.5aea00d7.js",
    "revision": "ff14caeface9e63cb7f06d338db49afc"
  },
  {
    "url": "assets/js/117.76704abd.js",
    "revision": "9aec4b56d5b6def697c3fee58b09a27c"
  },
  {
    "url": "assets/js/118.8dfb113f.js",
    "revision": "23bf33a81ef66c3fabb3464278752f2e"
  },
  {
    "url": "assets/js/119.a2182bbe.js",
    "revision": "db1a088c7344aa2ef09a0f048542a55e"
  },
  {
    "url": "assets/js/12.b88ec625.js",
    "revision": "23e332b4ff52ca8d25b4ed489f799c24"
  },
  {
    "url": "assets/js/120.e57223aa.js",
    "revision": "70f2a45ef31d775c400e923bd97b71f9"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.1702c8b2.js",
    "revision": "37d90dcb0c0650c3ca10e9d8017c94c2"
  },
  {
    "url": "assets/js/123.14708e61.js",
    "revision": "639d67b3717f996858e4a6ce11ab7d24"
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
    "url": "assets/js/126.00756d01.js",
    "revision": "bf42e8900d76cd25d4b1a2b039590634"
  },
  {
    "url": "assets/js/127.c29e808c.js",
    "revision": "740b2352394a7be64124d36d3ffa7835"
  },
  {
    "url": "assets/js/128.a544aa2b.js",
    "revision": "9c17a9bbfc3ed520b8e2c64aa9621465"
  },
  {
    "url": "assets/js/129.d349f696.js",
    "revision": "272aa78bb4d17ba8b0beb71f7a15c11d"
  },
  {
    "url": "assets/js/13.e2d65956.js",
    "revision": "818376197472471477eb8ef4a5c7a1fa"
  },
  {
    "url": "assets/js/130.54b31ba4.js",
    "revision": "050769f43b831c38d19e7d7667f4b9bd"
  },
  {
    "url": "assets/js/131.7a4f8e6a.js",
    "revision": "7e2eecb506697999dab28e509f2aa85a"
  },
  {
    "url": "assets/js/132.0f9169ce.js",
    "revision": "d17e9a8b8286bd1591f95198b37f328c"
  },
  {
    "url": "assets/js/133.9f283471.js",
    "revision": "f11e2d57be95a5c0fc1c9f50eef4853b"
  },
  {
    "url": "assets/js/134.6385b50e.js",
    "revision": "ba6d0fb3710fa6b7b1f8db59a74de049"
  },
  {
    "url": "assets/js/135.9c13c886.js",
    "revision": "df4540d648f2c0be90b6ce5042d09e6b"
  },
  {
    "url": "assets/js/136.c1841743.js",
    "revision": "a1767ae7bb1a9a6a71f20426b8dfbf82"
  },
  {
    "url": "assets/js/137.9eaca89c.js",
    "revision": "1affa9297237f615e21bf8c396c15f4b"
  },
  {
    "url": "assets/js/138.7a45da48.js",
    "revision": "f323380c3198976753b24f7bfa8fed88"
  },
  {
    "url": "assets/js/139.471254ee.js",
    "revision": "3f36314562a20becc59c300049b3bdf3"
  },
  {
    "url": "assets/js/14.c046b265.js",
    "revision": "d0ff3937126a1f784f3a41a05b8967b9"
  },
  {
    "url": "assets/js/140.7f6cbd18.js",
    "revision": "e21041d5071b31c718490ec0862a4915"
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
    "url": "assets/js/143.5843ae1b.js",
    "revision": "619641dc05a927ffbd9e8650f7917423"
  },
  {
    "url": "assets/js/144.166a903f.js",
    "revision": "50e72b667b4c96e5340bd97d3b83cf73"
  },
  {
    "url": "assets/js/145.733bbed1.js",
    "revision": "2ae8e1d09eafc56b0171e720eb074118"
  },
  {
    "url": "assets/js/146.6062f7f5.js",
    "revision": "d2db81cd64c40f6a7b818af8c0bfea1c"
  },
  {
    "url": "assets/js/147.ffe29692.js",
    "revision": "40e8047071b08359f7c80f3343ecd41e"
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
    "url": "assets/js/15.f44c198d.js",
    "revision": "e7b17ad39b34e3a9fd1e643e22af6fec"
  },
  {
    "url": "assets/js/150.06a664ac.js",
    "revision": "fd5fc6551e4a2a3279851e7ced9b4a80"
  },
  {
    "url": "assets/js/151.80bb8258.js",
    "revision": "7f72978270723530cfad3dcc4370f6dd"
  },
  {
    "url": "assets/js/152.c5794d1e.js",
    "revision": "6cb8e10b4d04f826c76de969e4a8052e"
  },
  {
    "url": "assets/js/153.8bc83551.js",
    "revision": "52a87534e907ef44cf63af74200c9320"
  },
  {
    "url": "assets/js/154.263bca67.js",
    "revision": "86887eff22ee6955d700a45f765bacd9"
  },
  {
    "url": "assets/js/155.fdda82e6.js",
    "revision": "66189e96d92bd43317cd672606a5cbd2"
  },
  {
    "url": "assets/js/156.01bc80b1.js",
    "revision": "704e829b31527aeaaf352e4a4d90c28c"
  },
  {
    "url": "assets/js/157.f1bd9ee6.js",
    "revision": "1bf717ed3ad93f9c1531dcbaa12cb5af"
  },
  {
    "url": "assets/js/158.ea910e56.js",
    "revision": "5cfbf8262fe1d2ff0f1a0d42cdff7de1"
  },
  {
    "url": "assets/js/159.037f8709.js",
    "revision": "3a115d9dc034e9dd06177a4c7532334e"
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
    "url": "assets/js/161.09ec0fd6.js",
    "revision": "4d35bbaa3f16cb7cbab3f8d704d2995d"
  },
  {
    "url": "assets/js/162.121eaaab.js",
    "revision": "664f9bd9f6fcee9b77e73cfeca1305f9"
  },
  {
    "url": "assets/js/163.e58ddc07.js",
    "revision": "b1abaa0cb1d5f3439f1f84181fe5b797"
  },
  {
    "url": "assets/js/164.e8c008a0.js",
    "revision": "5df505ddcdf078fcb8efc8c807e9af9f"
  },
  {
    "url": "assets/js/165.6d831a83.js",
    "revision": "1995d90447531d8ce0ba4599f1ce7727"
  },
  {
    "url": "assets/js/166.4f36cb99.js",
    "revision": "f794cbe3160cc4b8a2537c067460fadc"
  },
  {
    "url": "assets/js/167.a0a81318.js",
    "revision": "c4461208081b74e616cc6674345a7133"
  },
  {
    "url": "assets/js/168.f678d1de.js",
    "revision": "decee745ede51f396fd500942f85363e"
  },
  {
    "url": "assets/js/169.218dcae0.js",
    "revision": "d88aa1ddf906932dde2509257ca1275a"
  },
  {
    "url": "assets/js/17.dfa10068.js",
    "revision": "23e2cbe065258a9008488f79458fce7d"
  },
  {
    "url": "assets/js/170.2457ff59.js",
    "revision": "abb42182f19778315ecf93a07a7db45b"
  },
  {
    "url": "assets/js/171.904a128f.js",
    "revision": "fb01d682acb9244f89d7b68fccf1f89d"
  },
  {
    "url": "assets/js/172.fe059344.js",
    "revision": "932c129757eed1186f813c9e48fed293"
  },
  {
    "url": "assets/js/173.1f4ac6bb.js",
    "revision": "3aeb9e397dab08ec1f98a79851ec48c9"
  },
  {
    "url": "assets/js/174.5347a142.js",
    "revision": "9f4902a1a5ecc1aff6e5305fb2d497bd"
  },
  {
    "url": "assets/js/175.529250fd.js",
    "revision": "87788537c70f72ad3922e7027843860e"
  },
  {
    "url": "assets/js/176.9974f2ac.js",
    "revision": "a5bbcecfb4ef47685e030e8197996083"
  },
  {
    "url": "assets/js/177.f77c969a.js",
    "revision": "cdf71935b5cb5309b3b46fa580eb8ff3"
  },
  {
    "url": "assets/js/178.c80f5ef6.js",
    "revision": "eea0db62f912d58dd2d7a7d25e460f0c"
  },
  {
    "url": "assets/js/179.01308265.js",
    "revision": "3bd4d015cc278acccaceb6b62d6639bb"
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
    "url": "assets/js/182.f4a7444b.js",
    "revision": "ccad05abbe01ffe495b5f51def16fbe1"
  },
  {
    "url": "assets/js/183.bc51e3b1.js",
    "revision": "9cfa189ca6d078ce3820835f28c5558c"
  },
  {
    "url": "assets/js/184.1240a0d9.js",
    "revision": "97466d998cf099e6c39d990d84ac5141"
  },
  {
    "url": "assets/js/185.6604d0e4.js",
    "revision": "26d08b38d17080ed77a2b19bb05090d1"
  },
  {
    "url": "assets/js/186.12b2a19a.js",
    "revision": "f7f2cfd0050eb57dbc7f5323d3d3410e"
  },
  {
    "url": "assets/js/187.596d10ca.js",
    "revision": "3cf723ef8355a57703c38018ddfb9289"
  },
  {
    "url": "assets/js/188.bbc8175d.js",
    "revision": "f014c784eaf60f30efc2e65979427ce4"
  },
  {
    "url": "assets/js/19.a448ec1c.js",
    "revision": "9016d923a2f1c47ac25af6cffcc5bb7a"
  },
  {
    "url": "assets/js/2.0f0bea8e.js",
    "revision": "fd08ab50995a6aaccb93bf495275c2b0"
  },
  {
    "url": "assets/js/20.3a760c28.js",
    "revision": "617f1d64c54327ec2ff33c78b89eb664"
  },
  {
    "url": "assets/js/21.ca7c24e1.js",
    "revision": "ae6db68da485475125a14905d645d932"
  },
  {
    "url": "assets/js/22.fce6d927.js",
    "revision": "a61698d2b266b1d89c6c22860ed85b6a"
  },
  {
    "url": "assets/js/23.55dffdb1.js",
    "revision": "48e77c7758017a91d0ea4cce8f7114a1"
  },
  {
    "url": "assets/js/24.1f98e74c.js",
    "revision": "8a1edaafc1b9caf70de29cf1e18d1033"
  },
  {
    "url": "assets/js/25.92dbd84c.js",
    "revision": "ee8e2cc29cd115d161a37150d0908285"
  },
  {
    "url": "assets/js/26.4c832084.js",
    "revision": "6bbade2a2fd97082b05a19a94665614b"
  },
  {
    "url": "assets/js/27.f6f96728.js",
    "revision": "5d328d84fdd1ecfba8e2f4acc6b9188d"
  },
  {
    "url": "assets/js/28.2d376017.js",
    "revision": "b8028ae024c0a26fb05ac2999a239895"
  },
  {
    "url": "assets/js/29.dacfd205.js",
    "revision": "629801518d069ba5e66cfe0ea15fcafc"
  },
  {
    "url": "assets/js/3.c7be380e.js",
    "revision": "47a333828ae175ebf6a9ccf39faf1de0"
  },
  {
    "url": "assets/js/30.d8ce4f88.js",
    "revision": "7b2ac078c6062cc4008e266008b4e1e2"
  },
  {
    "url": "assets/js/31.1ac7b760.js",
    "revision": "b35daf1719baf2feac763b997f204374"
  },
  {
    "url": "assets/js/32.2ea2ba09.js",
    "revision": "a0c1cec1029b14d8c80babe1bbe6549a"
  },
  {
    "url": "assets/js/33.fb6918ea.js",
    "revision": "4f1623d8c045496ee3da1c6b7cd1c725"
  },
  {
    "url": "assets/js/34.a89b92f9.js",
    "revision": "4337e48a9eee0a395a5a63d2c8faaba1"
  },
  {
    "url": "assets/js/35.b9af76b8.js",
    "revision": "3215cbda57b6bea0f449559a8f0a835b"
  },
  {
    "url": "assets/js/36.dd159ddf.js",
    "revision": "95a49a7ba61d55089134418defe0c453"
  },
  {
    "url": "assets/js/37.c4d07f12.js",
    "revision": "b3136b3e65fd05f97f6b5b2ba88ab498"
  },
  {
    "url": "assets/js/38.58e1c360.js",
    "revision": "d646b56f2afaac1147434bf0983dc7f9"
  },
  {
    "url": "assets/js/39.9b6a1a01.js",
    "revision": "8802500a34d35d8fe37e8650be8aec9a"
  },
  {
    "url": "assets/js/4.d218abd9.js",
    "revision": "b0ad698473879a57d11241be49ed8875"
  },
  {
    "url": "assets/js/40.9cba55d1.js",
    "revision": "b5eeef2979061707229024cd0d4de68d"
  },
  {
    "url": "assets/js/41.b0e72f76.js",
    "revision": "086be5c5813f8aefde22984ebed4da53"
  },
  {
    "url": "assets/js/42.6c0d6a92.js",
    "revision": "dd2e0c459f27ddbb50d76b59611b9033"
  },
  {
    "url": "assets/js/43.b73c845f.js",
    "revision": "4bd6e8401554375066adf9508c776e99"
  },
  {
    "url": "assets/js/44.56cc7446.js",
    "revision": "352f6818c90aee66e05784f801a6d4a9"
  },
  {
    "url": "assets/js/45.a5213829.js",
    "revision": "67367997cf87255a61c95acc01ee15d2"
  },
  {
    "url": "assets/js/46.3ab955f1.js",
    "revision": "a9726c9bf3ac127c9e8767958ea4afb7"
  },
  {
    "url": "assets/js/47.fa1c7363.js",
    "revision": "b70921bd94e9bbac88fc91bf8b8401c3"
  },
  {
    "url": "assets/js/48.4ec68ebe.js",
    "revision": "f5ec4b0ca9d7332ac6b5ad5d79f4ddb2"
  },
  {
    "url": "assets/js/49.bd574f10.js",
    "revision": "739345ad7fc1c0ed332d74389a48074b"
  },
  {
    "url": "assets/js/5.94dc272b.js",
    "revision": "619a2fbf5840b8183f2bce0e8c1d27d2"
  },
  {
    "url": "assets/js/50.e660e583.js",
    "revision": "09859bc2d55c48e5c6519b7e627366a0"
  },
  {
    "url": "assets/js/51.46e1e138.js",
    "revision": "953a22e63d97780cec5df9295c441ea9"
  },
  {
    "url": "assets/js/52.65c730c5.js",
    "revision": "82851ed543bc464ac058cc1c4fa6bd47"
  },
  {
    "url": "assets/js/53.d0ebe33d.js",
    "revision": "8b7f34caf622fe629b67ba5dd98bc269"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
  },
  {
    "url": "assets/js/55.c60a980a.js",
    "revision": "19063956f9f77b7975cfa437a085e481"
  },
  {
    "url": "assets/js/56.fb1df89f.js",
    "revision": "07f992a609c32b95e4eb1decdd6e013d"
  },
  {
    "url": "assets/js/57.04a15b16.js",
    "revision": "209b509e589779852f1e040b8e4a4459"
  },
  {
    "url": "assets/js/58.d0379086.js",
    "revision": "5bbceb0aa60e214ebb9bbf0389e615c4"
  },
  {
    "url": "assets/js/59.02f4ba36.js",
    "revision": "8cda3dc20429eca5aca52362f39fb0b1"
  },
  {
    "url": "assets/js/6.2747f039.js",
    "revision": "728e686995652dd62de3863f7c91c7ed"
  },
  {
    "url": "assets/js/60.d1ee0ee4.js",
    "revision": "ac22fbcc53ab1f8325c3c779d4f75064"
  },
  {
    "url": "assets/js/61.55c62e15.js",
    "revision": "b06151d1d39c482f3e03d82af9628431"
  },
  {
    "url": "assets/js/62.0a0c7925.js",
    "revision": "b12d82951f40c262c827716752c2b35d"
  },
  {
    "url": "assets/js/63.64f6dcac.js",
    "revision": "b66c4f4465e04decf1ec2d118e0a906b"
  },
  {
    "url": "assets/js/64.34339715.js",
    "revision": "38cd698d3564e6d2c1d4e83a9239ad61"
  },
  {
    "url": "assets/js/65.6d589329.js",
    "revision": "e40a9853e9ced3224f2ba8a93d5b282d"
  },
  {
    "url": "assets/js/66.2d3431e6.js",
    "revision": "b89a57b244fd5b88ff6e53d055569502"
  },
  {
    "url": "assets/js/67.5731bcb5.js",
    "revision": "f1fc76e231fbfc706938ef50945c49ca"
  },
  {
    "url": "assets/js/68.5e5fcbff.js",
    "revision": "2557a514185895c8938f27ec7b2addff"
  },
  {
    "url": "assets/js/69.0f18e61b.js",
    "revision": "4ab904b58ccfd6f2ec2e0a658d36ccf1"
  },
  {
    "url": "assets/js/7.699c1cf4.js",
    "revision": "936a2af292fa20582660fc746c461049"
  },
  {
    "url": "assets/js/70.2b38e83b.js",
    "revision": "8a4499cf9068edeca99a9bca0c109bad"
  },
  {
    "url": "assets/js/71.959df5e3.js",
    "revision": "35f4a02e60bcf5a9ffb51d92eaa4f89a"
  },
  {
    "url": "assets/js/72.67ce8ff4.js",
    "revision": "326213030fe8e063662f0564a75fff95"
  },
  {
    "url": "assets/js/73.227ff668.js",
    "revision": "a9e72fc8252262fde63d0cee9bc76fee"
  },
  {
    "url": "assets/js/74.c46b9418.js",
    "revision": "0730b08a093758804515fc5cfc37a1b9"
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
    "url": "assets/js/78.07bce5f1.js",
    "revision": "045c263de150bc5ab73bd9862e995593"
  },
  {
    "url": "assets/js/79.b3d5a645.js",
    "revision": "0bc583fb5bdc40980fc5ba159eab4452"
  },
  {
    "url": "assets/js/8.d6b4d976.js",
    "revision": "97722a30b6b07f1aab6fcde28fded114"
  },
  {
    "url": "assets/js/80.19e6e511.js",
    "revision": "1d98806eeebfab31b43d9e6b76b7a86b"
  },
  {
    "url": "assets/js/81.63ba1b79.js",
    "revision": "6ffb990709f5c434610b1d2dec108a16"
  },
  {
    "url": "assets/js/82.1563bd0d.js",
    "revision": "b7ab7a15203fc69c19ef9f10a1ff28b3"
  },
  {
    "url": "assets/js/83.80338452.js",
    "revision": "87813ca3b5d239b57f2ce22986d2d0d5"
  },
  {
    "url": "assets/js/84.f88bdc56.js",
    "revision": "80ef1db1293dd42671378a1dca9f11c7"
  },
  {
    "url": "assets/js/85.283461c9.js",
    "revision": "5e39dbd07e9bc3c8859203a2bee14193"
  },
  {
    "url": "assets/js/86.9502716d.js",
    "revision": "64eb51450b355c19a345e6b489111a45"
  },
  {
    "url": "assets/js/87.89f6956c.js",
    "revision": "d5680fdb2bc2a7d965557bc39641e200"
  },
  {
    "url": "assets/js/88.5ad45bb6.js",
    "revision": "a7e34b43d7d446782f4f3d63a5cf42d6"
  },
  {
    "url": "assets/js/89.36c291b3.js",
    "revision": "2690886df1ee8dfd1950aa50dca76f04"
  },
  {
    "url": "assets/js/9.eaeab872.js",
    "revision": "80cc0a8604fecec36a5940914fdd2dad"
  },
  {
    "url": "assets/js/90.3caa9f3a.js",
    "revision": "ee8b1b59aabb6c55abb3a928ab6c5e6f"
  },
  {
    "url": "assets/js/91.fd42b5e5.js",
    "revision": "54897f58070e87962734fd78757cfdc2"
  },
  {
    "url": "assets/js/92.9bc227a8.js",
    "revision": "7375e019cdb780d474ac5be29d0e7a2c"
  },
  {
    "url": "assets/js/93.c23fd431.js",
    "revision": "649f3673d184231e30377989bc726c81"
  },
  {
    "url": "assets/js/94.1ea654d5.js",
    "revision": "e508d36762d1878246ade40732064e1c"
  },
  {
    "url": "assets/js/95.7b366bf9.js",
    "revision": "4657f02b014883207e636e707c91407b"
  },
  {
    "url": "assets/js/96.2b00c280.js",
    "revision": "ee9163c8c0c1125dcdda55aa79758b5e"
  },
  {
    "url": "assets/js/97.53d0a4e5.js",
    "revision": "3ce821fd2a1564dd6209eb52831a141e"
  },
  {
    "url": "assets/js/98.958af27a.js",
    "revision": "9878a73f7ff01eb03188e0a51b0ed3de"
  },
  {
    "url": "assets/js/99.4d46ddd8.js",
    "revision": "e9a3d86dced7d2a897fd6c077c1bc193"
  },
  {
    "url": "assets/js/app.0cfdd944.js",
    "revision": "f9c07e135dccfa55169c64b6486919b9"
  },
  {
    "url": "index.html",
    "revision": "8a80b6ec19620a9bdfab161610b961c5"
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

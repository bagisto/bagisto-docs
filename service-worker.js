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
    "revision": "1fe5170bb8cf226b593e532b3d5ef953"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a5f783bde5c06433c1649f9b4d13102d"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "fd7fd2c12ecc20a94d9ce32118c66516"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "c2925e8b66b5ef405bcb8f3d8de59491"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "e780c2eb859dbb66c4d76de808a2779c"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "e1c5e58ddc10c51816c91e3f064670cd"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "aa485da6e90994e209e6e8a34adc47dc"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7b9ee2ab3c7d2472d83978dc6d7ae153"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "7b4a77354bf56020affa085980e17cb8"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "fef770c77298ca9e00c0dbe32f42b07a"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "2087d5ad3b939c176f0afac48e175912"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "51fda871b66f51872c47107abaed06f7"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3282cbf36b544713569ae23a998ed950"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "38c605a60063bdaa3b016a346887fb67"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "7b2d9a318f1334b8e68677b0f86761ff"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "27a305ca3da4f36c003a9126e3c3c7fa"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "6375184c86e0c25872807b1b221061f7"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "8a6f3b7633b207ad1ace51cb77d596b4"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "e1c11a2f5a9ccddf2f184889dda43ae2"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "c54dd2292feef4656abefcb988962ca6"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "72cb8ac8ce3525fd96aa7eff5851629a"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "d76827736724877f8aa78cabdd1fd554"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b548f66776eefb709819d50170e3812f"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5079ff0e33c2a8e238c7ac168b324941"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "4c0f190672f0807cac0963c63e31c413"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "52c5d3ac3c1c0978172bdfd592c5decc"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "2b59329a9b1f0ff2e5fbd6a0bee441cb"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "0ef7106f736b15f3d22fe3feeca57e4e"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "9c371411781b98d29157a81b32d08fd4"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c534efe0dffb5917725bf4dff1c60389"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "4ccd50560609879e43238a3b61369e29"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "d2e6696a4d9fcaa5ed9dd509fec672bb"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "a0b0a6003648be10266987a8f164c56d"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "4e806eb828fc61c946e14524deda7e13"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "a733f951334a312b410b15639374c8e4"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "423e6070f24ddd8d5b6d43e66aeaed12"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "1f7fb35a767b7f9ccb4efc6c0f414279"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "b5cf8847f4f4e935d38e763b5b802566"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "bda1cfd1dddb4bd6949c6a2753677f1d"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "b7b6cbf6a3f4eba23874b0abf871578b"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "7875978545a813feb64610bf8c53a7c8"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "05e3cd4ed3347c0e2e374ebda6a28f78"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "2559206196505a01a6ac14c2aee7fae0"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "aacb61835e45e5e5a2347eb6cfbb1843"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "87229d35e4bbdc736c523e0fa1f11e81"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "d40d412be46f457f1227a29069decbba"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "b56f3ff4927935a1a4cc457f658c1d4a"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "1c6a5a54e5ef1f9c17d8b6212ee9e446"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "e2606b721bf20c029347eb0315b6f520"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "544cfd6b1c953a0f3f992ba21b2785b5"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "20b95b09914efe8bc2e065f844ffc225"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "a09542be1b4e0439128ddabeeaee0ed4"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "7b54e0dd9d612fadd8d9f551839aeba2"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "4ac4400762169f46cdc142d3a76a3454"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "aa0a5286cb0567440fe1cfdef7f124aa"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "f1afe42d749eba1ea4b9a892594eafa4"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "f69f330a0a2fcf000d2535f5b1dfd107"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6b20a4da364877c8e54658f0dee76fd7"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c24d5d5d2e8774ae0451d78b84ebd666"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "9a63ccb200b10eeee206011c00409a96"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "c22d694ea97b75c04d1aa753c19dbd59"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "330650f5e45724bdbd58d337029f3e19"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "81cc1df0869a9f98504c7bc31a60132f"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "64f8d9da8ae762a07c960683cb503631"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "95c0f5c91e78c1df3c75f3c8fb1c7485"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f984e99e190a34fd3d728779134e5da1"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "cff839c6fb48de12b1095c93b5a73bca"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8d19bcec3be5119766cb3beb0052ff7e"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "70caf83202f7e570bdc1961f2c69b5d8"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "0f307a634d776c3cb482db6e53f78bd3"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "959050b4bf385cec8514d491fa156bab"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "fba7fbe36740ff6beeaf1242119fcbc2"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "35a38deff82a7a8b12c3f652408a4113"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8f8d75fbc59e838bd7c379e1c2bea707"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "a7599765d947a7d6c0b10502cd3a0f30"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "4ce054bfa44488c2005659d9e0bfb723"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "9cf837695f504dceb39df77a74fa280f"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "7f7845b873a7bca2da8c7fa0526bf255"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9a4bbc2f36a1384ef965a8d3eee2a53a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "1b65855ce1945511d4f04ca0ac1728e5"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "69c9a3de25fd4b7e402ae3bab11d3b4f"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "b49c545c05d370eafc7e9ab83cbc393d"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "379df4321e079ebfd0147fb375542ca9"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "239db9fdb53690d570f6fac81ec06b1c"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "a5a8c9c9e5a77bb0dccf504ed36d9a3d"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "e5696d95b7ca19d43c594a506d9fc8e7"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "55a209483ef1ed9c7c7cde34b045cf6a"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "bd20b09abea5d50b9438bc9f6ab72e68"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "226dee74b972dc1deb6cad83a9f98d92"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "0f3c54a9e6018045273d77d595eb37e9"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8c9074e6f5a59dbde4901df022d7ac09"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c8ac09710b39f44d4e654ae05505d67b"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "eee005adb0c6d6ad0af7abc3b5bf79e1"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "57b039892924a345675911f4b15931ab"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "160686a9889f7589a9b8b161a539fddb"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "b59b2196b810a7b9dd50fbee22639932"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "283bab4b700b5275b6d1dcb4d6bbf646"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "f4e94163aeb4cd8a663a3990a28063cc"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "763bd3cf3df240e8a7d2b07bb96499c9"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "64f40bb38c72c29c004a156fa355fec5"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "bd1e65614957f0d5c6eba36dc145edbf"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "347eb3d520603df265e1ee3860c09f37"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "0c1d9f1e179997b9e605b35123283a8a"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "58bfd5786523fc555014e20967804f3a"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "2cd9755d5b0b98997e343a1d3725c13a"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "a3b5352847f0ccc13f081c4e966d901a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "998a382c4f8edd095246ba38faf88fa9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "22d75b56457603ef3e5ba4e81b9df0e8"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "3173dc198b83a1113413cae7e8271d9c"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "78d8ca7ebfa2b48084e8138725fcc5dc"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "f58b98035e2d37844f7997919ac41661"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "0a11cb9d0999645d7bbbd39b56551aff"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "83be597859d73272f1228a158c6d5add"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "879a08b1b35f7e776585bd29cfea723a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "11eb33e1e765e5ab5bc900d1eef59a9d"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "5d4a5744f5ad3f48548c6ab8ea226afd"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "da7c4ab517c35a3cfb64fd09e7446ef6"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "4ad7e4afafb79cdaf980d00bdf89c73f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "1f22586b190a7744a948ed263942207e"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "8d3859818adaf4cf37ca2f7cc1ce1a0b"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "2eaa7134d1b0e06447750c844c852b00"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "45c392fe840dab876cdfecaee96b3a72"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "0e19f081cd4780010e5cfed1aa2412e0"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "f8bc7427be629e4c8baa3f7d7467b45a"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "4a5ee0387dfd8736e84712143de17c87"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "73dd1f3bd2d14f5eea72c59369e2230d"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "f5967458fc667d016a4c92933eaa26d0"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "216837ad05dfd954f866a1fa8c3daf51"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "785bc446763f8cd15a66c0aa7e90d018"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "a37f5cb4943da801ae53bcf85c611109"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "0f442c107b2aba7ec78c9dc1184a6c7f"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5a4a25ec9351e7a0693049af4a0f4270"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "690ce3a34c8efac04aa42a6d3f7dce64"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "62bfbf4bf3c7b7e06840dda05d6e227a"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "5294a1393607828a7541a99a3436a0bd"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "a542d75f324ba367eeaea640ad9859aa"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "e15db7cec2e8f4f301ebf09c78e0f048"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "1f42909dd1a06950f5c722abc6c67557"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "94826fbca8c27a6a4a0de78f8d288ce7"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "2a57ccfe686f40dae8c1ee88f4a2b9a8"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fd345dff608b47c3cc9557661cd87df6"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "8af296b078fa1ee12db73df1be7eeb86"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "926930c7c211ad4f2d01f88c739a609e"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "393e9654623334100e6e8184ef323380"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "b1c6328f3f80a447c156ae42033d046a"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "f66ab610505487760867bfa21e780a3c"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "ff731ba37fd8cce8008ac40fd5fd85ea"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "cbf81ef56424c2c44c2e1e5cbd21e484"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "96088fe25a8b3eab25339de5d360f9f7"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "4d688d05d02762ea20739ca1adcd5417"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "1c242ecd799a73a3c2fd9ee0b27cb24d"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "8e0d1a99711c12994cd70755518b5fac"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "e213369ffdd13c7db3d2a8c8768ce335"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "83210b713f848dad31d2e952cc23cb18"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "4f12ad6c544d55ec5225c31e93b235ab"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "3bfd2fb7dadd0b9508b26e2c2b19db01"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "60353346efc59f5503e68e793d6429bf"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "1c37f82fb43035e6bef56c2ebff6ea18"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "b054034cf1e1b58c7d02d888addffd1b"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "56d4e377014a506fb8c6c34ca36b7b7f"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "6220178f6677c9c403d75e94731aa9e8"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "84206c65a54f41ca07c8b98ff3936d94"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "f43f39989fdddeda528127cabfc7d94d"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "4e7227aa4dc7f7e87a7018a120d8f461"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "d425d511c6a6a462fc6467ae8d8a3406"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "22e949c9d90a738b934168aadb2fe854"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "ec32bbd9fef27e171d0bef651ad3fff2"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "c1362b65193511700dc50431f1e5ec66"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "0c80227e8e9bfa39646f3a25b0b15847"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "9da54427509de14211bb789dbcf35dd3"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "f67cf6a8e712f43dbbdbc5ca82baee30"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "f9e4c365129e6bf4de7fd6498d8fe3ee"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "0eee26a13ae898361a0d2ad72c766965"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "c8eab2da6bf8c42cd8f91387f9f1494a"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "0867006c79387a4ccad5f782ee8af06e"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "09bc8e430445112ba213b5b2afaf7881"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "37a42926b2b3fe45ae729f140a3e435d"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "41c82fc0c9647f13891c5ad17dc0b047"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "e2f723340f5b3f63544d76140427b80d"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "b968a08cfd0446b7ec9090cf368d89c6"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "75de11f5dc8f8b921c55ccba38ebbbba"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "bb5f13208dc6061f31db2e605d8898ab"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "4df041a9ba282fbe4b8d8bdca6f8bdda"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "f700f3f87c87be6276c9640d7bca0b38"
  },
  {
    "url": "404.html",
    "revision": "701d372704c8913f4b25ad57f8cca494"
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
    "url": "assets/js/10.bea1de31.js",
    "revision": "727d45924a25da3e52654ab0e8ba5a8b"
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
    "url": "assets/js/103.a7bce9cb.js",
    "revision": "5d35c83c8d85573ba0c00e9fe8f7abdb"
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
    "url": "assets/js/106.27c43693.js",
    "revision": "51a82f81f8dd38c4e703dda294576b31"
  },
  {
    "url": "assets/js/107.355e8159.js",
    "revision": "e27fda12939087fbf8b29b6b35f42c98"
  },
  {
    "url": "assets/js/108.b700b315.js",
    "revision": "33486e9d830399ed158999cf21d9d694"
  },
  {
    "url": "assets/js/109.13ac575b.js",
    "revision": "b5c38fe3512fa31bd85f4943e0d3d397"
  },
  {
    "url": "assets/js/11.85d44f79.js",
    "revision": "78f9f95e377a5f76386005e877451a8a"
  },
  {
    "url": "assets/js/110.df98cc33.js",
    "revision": "c1236fa59162cf2dd3e36c64e7e559dd"
  },
  {
    "url": "assets/js/111.98015f6b.js",
    "revision": "bb736e5852deab33abdf6defa21e6569"
  },
  {
    "url": "assets/js/112.06ea84c6.js",
    "revision": "dad274d8366296042d63d92c2eec448d"
  },
  {
    "url": "assets/js/113.1ee924d5.js",
    "revision": "4e9f5e728fe1c229658efdeda5c0d5b4"
  },
  {
    "url": "assets/js/114.20b9ea12.js",
    "revision": "a16da3f0fb462133a7e39e69ab63bb0b"
  },
  {
    "url": "assets/js/115.cc3bdc3d.js",
    "revision": "39f55e0756a06ab7ddee4c365f4857e4"
  },
  {
    "url": "assets/js/116.8d3eb0ca.js",
    "revision": "562345fd45e09880d6f88b8bb4f5dc4a"
  },
  {
    "url": "assets/js/117.e19949eb.js",
    "revision": "a4d6b9f9e982ccc3abff0297b5331eb3"
  },
  {
    "url": "assets/js/118.42849bb8.js",
    "revision": "dd1ecba79803f3a62ca529633a559642"
  },
  {
    "url": "assets/js/119.a2182bbe.js",
    "revision": "db1a088c7344aa2ef09a0f048542a55e"
  },
  {
    "url": "assets/js/12.5e56d1b3.js",
    "revision": "411ce3c707eadbb5860651071808f391"
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
    "url": "assets/js/122.f819986d.js",
    "revision": "05be84edc26200ac0dae681f1b9c55d7"
  },
  {
    "url": "assets/js/123.f657dfe2.js",
    "revision": "7f8eeae8c9faad0648669b5a01df3cc3"
  },
  {
    "url": "assets/js/124.2faaf232.js",
    "revision": "c2c5ec766bd99a3dae32d06176fa423f"
  },
  {
    "url": "assets/js/125.e8f3a5ee.js",
    "revision": "7ec138bbe18b457e69fc215464b7bf57"
  },
  {
    "url": "assets/js/126.929fb829.js",
    "revision": "9d1fb530449498739af1d3069485e5af"
  },
  {
    "url": "assets/js/127.c9dadae4.js",
    "revision": "745577d8f29f3275148ac0c28834483b"
  },
  {
    "url": "assets/js/128.3f39ba4a.js",
    "revision": "2d3f25e5bfc17eacf3e8e86a466c0d5c"
  },
  {
    "url": "assets/js/129.a365d437.js",
    "revision": "ee9e14d3cf9ec6ccf726d1dd47cdf1f1"
  },
  {
    "url": "assets/js/13.a092f219.js",
    "revision": "5d95d15be8cba44f92b720408600ab80"
  },
  {
    "url": "assets/js/130.ecba22ec.js",
    "revision": "a604d2099b2eb394895cd187e295bdbe"
  },
  {
    "url": "assets/js/131.665ae0dd.js",
    "revision": "d5a547020ca3d560412a41bfee36d33d"
  },
  {
    "url": "assets/js/132.c01acd44.js",
    "revision": "5e42ecdd7a158bb7d4271b4a382fd199"
  },
  {
    "url": "assets/js/133.c3f6c3b3.js",
    "revision": "0f8d15beabaa958a842416bf9e2df61a"
  },
  {
    "url": "assets/js/134.a7e97aca.js",
    "revision": "be0278db7ae7debdbf5982ec4a63ea09"
  },
  {
    "url": "assets/js/135.c7b77c7f.js",
    "revision": "4fa51255e56fadf7b88f4ab7bfa5d0c8"
  },
  {
    "url": "assets/js/136.dd5005a9.js",
    "revision": "494f2d3978f527c38f24315dac0d2ad5"
  },
  {
    "url": "assets/js/137.1cafafcc.js",
    "revision": "402159dc3b9abc7c960ff5e236356ec1"
  },
  {
    "url": "assets/js/138.f860b57d.js",
    "revision": "c04f03d78f5658629a403202c5d7b737"
  },
  {
    "url": "assets/js/139.fbf7a44e.js",
    "revision": "b7e3e81f252a7c67f88260b11ff99d33"
  },
  {
    "url": "assets/js/14.2cd0d386.js",
    "revision": "96e47c991cfed950104c9e46e1df51e2"
  },
  {
    "url": "assets/js/140.9ad65f7f.js",
    "revision": "5ecdd7c68f1eb8d1141db7e567864503"
  },
  {
    "url": "assets/js/141.fc5856d6.js",
    "revision": "eed56aa4e7a4ef51cb1bba16c52cffd7"
  },
  {
    "url": "assets/js/142.d30741cb.js",
    "revision": "5089c3943b67a56706bc205e2dfc2049"
  },
  {
    "url": "assets/js/143.1e2503a4.js",
    "revision": "4036d3fe41031e311533e6102666785c"
  },
  {
    "url": "assets/js/144.07ba2792.js",
    "revision": "22a99fd3369b74887143321b3154e791"
  },
  {
    "url": "assets/js/145.974ce46d.js",
    "revision": "24d6d18fce2e17ba6c6c6c6b17f9d09f"
  },
  {
    "url": "assets/js/146.b9254a4f.js",
    "revision": "fc9f8a2c40039d23cb149b6540f8055a"
  },
  {
    "url": "assets/js/147.ebdb520e.js",
    "revision": "a9888c769919c768eb7ef9b61f6741b5"
  },
  {
    "url": "assets/js/148.3312aa3b.js",
    "revision": "b79160009147bc04f3fde2e5312ed7a4"
  },
  {
    "url": "assets/js/149.fbf81d1f.js",
    "revision": "f37fcd96674717e53bc4003e662af0d2"
  },
  {
    "url": "assets/js/15.1d6eb6e5.js",
    "revision": "cb5a73a4d83c03300a67a2f3d71f22a0"
  },
  {
    "url": "assets/js/150.f52fe2b1.js",
    "revision": "10a8ae4982df2838424b7c820f9686c0"
  },
  {
    "url": "assets/js/151.b16710dc.js",
    "revision": "e0443b182eeca89fc2b6e61e8a316b3a"
  },
  {
    "url": "assets/js/152.671c61d2.js",
    "revision": "29c11df95fc1a5087de2fab6a8d50fd1"
  },
  {
    "url": "assets/js/153.eb44f69a.js",
    "revision": "be57309b0988fe67e467d38dd392aa59"
  },
  {
    "url": "assets/js/154.7c08ab0c.js",
    "revision": "6fd59fb859cfe6aeda2d94a852b21b43"
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
    "url": "assets/js/157.a050e4c3.js",
    "revision": "4890dd2b5956612d3e167438851b2122"
  },
  {
    "url": "assets/js/158.698eaf4b.js",
    "revision": "88b629a45fe0f5693e2fa605f76254e0"
  },
  {
    "url": "assets/js/159.f51f908d.js",
    "revision": "3b18c2bb1736aa5043ef827634484606"
  },
  {
    "url": "assets/js/16.4446b328.js",
    "revision": "831aa09e17d289927f7f57497b15e947"
  },
  {
    "url": "assets/js/160.d3ef90b1.js",
    "revision": "80308e9ed88a60f50c19d4c1d1527943"
  },
  {
    "url": "assets/js/161.ff642522.js",
    "revision": "e91366664b2059899039eb6cbbbb5ff3"
  },
  {
    "url": "assets/js/162.af39ed02.js",
    "revision": "57648a060093ae4383512abf67d2b5ae"
  },
  {
    "url": "assets/js/163.50ea9735.js",
    "revision": "88bf861dcc5a859e12c7945790c821cc"
  },
  {
    "url": "assets/js/164.439f470d.js",
    "revision": "be1cf14e4d1abfd7cc28f8410313622f"
  },
  {
    "url": "assets/js/165.0e4db513.js",
    "revision": "f71d9b8762f16b439c0aa3176da23de5"
  },
  {
    "url": "assets/js/166.a620e296.js",
    "revision": "2907d96b9c19045db869e32bda45dbb3"
  },
  {
    "url": "assets/js/167.d7dc4d96.js",
    "revision": "0504cbb2c7733470b96fb307fab9dea2"
  },
  {
    "url": "assets/js/168.a5c1835b.js",
    "revision": "b5ce6afbfd69b41f4b7a74a30e7d1b43"
  },
  {
    "url": "assets/js/169.76bbcdbf.js",
    "revision": "959a638079bc3b95033806a18bea80b1"
  },
  {
    "url": "assets/js/17.d4d238f3.js",
    "revision": "d151eddc8c853ef24b1de7aad3cf7da1"
  },
  {
    "url": "assets/js/170.b6789255.js",
    "revision": "b1cb52e8f3f0e5d3d4ad409aea38c7bc"
  },
  {
    "url": "assets/js/171.2ef4c771.js",
    "revision": "a17d9f18b6c44847aa56e0f5499c4cfa"
  },
  {
    "url": "assets/js/172.1d3a9f70.js",
    "revision": "a7b358d905dab7effe9e96642124162d"
  },
  {
    "url": "assets/js/173.93266e49.js",
    "revision": "551ae2e8186427e1b8503f8fbdd9d54d"
  },
  {
    "url": "assets/js/174.4a963415.js",
    "revision": "b79b1e0f9f5439f2bf4c615ebff08c9d"
  },
  {
    "url": "assets/js/175.cf2264ca.js",
    "revision": "c9c37ea8c42d02c992f2bea045fab59a"
  },
  {
    "url": "assets/js/176.330ee59a.js",
    "revision": "d2913ef027701d05fe3477aa7ce0b0ed"
  },
  {
    "url": "assets/js/177.36732fc3.js",
    "revision": "c323e4621d2df9efd95427d99da0c9bd"
  },
  {
    "url": "assets/js/178.6f471e89.js",
    "revision": "dcb302f98aee3de4c9df93ac28ae81e5"
  },
  {
    "url": "assets/js/179.95f6acf5.js",
    "revision": "949c6d8dae37f4cece08e02de2876419"
  },
  {
    "url": "assets/js/18.371a0fd1.js",
    "revision": "c3948850b6eb95ba35e3bd8429127cb5"
  },
  {
    "url": "assets/js/180.80278ae0.js",
    "revision": "e4d1a808c1c118b254f00afdb763748d"
  },
  {
    "url": "assets/js/181.bf0f2d51.js",
    "revision": "113184ab22fc61e70a472f10eb9497e2"
  },
  {
    "url": "assets/js/182.b82e3af5.js",
    "revision": "d2010bae9f3866f23c150bce34f24585"
  },
  {
    "url": "assets/js/183.179a622b.js",
    "revision": "71342917bf02a8607e67a2dde5af72f7"
  },
  {
    "url": "assets/js/184.782d19a9.js",
    "revision": "7ac83e26ce5fa41fadf2f4a7fcd4f005"
  },
  {
    "url": "assets/js/185.fa05bb34.js",
    "revision": "ad8e889171b6d0bf6efe466fa6b9fd2d"
  },
  {
    "url": "assets/js/186.a8f45f5a.js",
    "revision": "01c64ff3c1e72c1b12de843bd51ebf98"
  },
  {
    "url": "assets/js/187.58843f8d.js",
    "revision": "d5764876683667f6f8a704c566f4bd74"
  },
  {
    "url": "assets/js/188.538400ad.js",
    "revision": "6cd65a5cd6f72c5aaf6a71e0898de5a3"
  },
  {
    "url": "assets/js/189.fb1a72cc.js",
    "revision": "954e740956934d0b53b1b1ed54847aa3"
  },
  {
    "url": "assets/js/19.9883756b.js",
    "revision": "e0a46004f46fd43dcc78ed5dda93f02c"
  },
  {
    "url": "assets/js/190.88f0f1d5.js",
    "revision": "7e3fd1e2ff2bdedf18ff36a9ba800c83"
  },
  {
    "url": "assets/js/2.dacac6fc.js",
    "revision": "f3778cbb829958f3570dcc91095b0299"
  },
  {
    "url": "assets/js/20.21582e9a.js",
    "revision": "5524047d6d8125a25bffdc2b87ea7af9"
  },
  {
    "url": "assets/js/21.097ec1ec.js",
    "revision": "89849592210e1d9329ef259d5447efa1"
  },
  {
    "url": "assets/js/22.5d129b6a.js",
    "revision": "c062f5b526d61126957b0f038f7e9e7e"
  },
  {
    "url": "assets/js/23.78426e48.js",
    "revision": "f4e565c9524f1d7bea82526e343101d5"
  },
  {
    "url": "assets/js/24.e3552a85.js",
    "revision": "f6caade3b33405d079ddf91ee89c6ae0"
  },
  {
    "url": "assets/js/25.b0bc440c.js",
    "revision": "91c32f67bb5b8b661d591e9ae30d64ce"
  },
  {
    "url": "assets/js/26.70318b83.js",
    "revision": "71deb21afecf8049a912f05ee55f3ee4"
  },
  {
    "url": "assets/js/27.f77f9f83.js",
    "revision": "48ea2866b1007478de7e7606e9c805e5"
  },
  {
    "url": "assets/js/28.d08faf27.js",
    "revision": "6f8b8b7a9e6bfb9c7c4f9cf59eaaa255"
  },
  {
    "url": "assets/js/29.6a013b4d.js",
    "revision": "429e3f83de9c57d57b372501946a77c4"
  },
  {
    "url": "assets/js/3.9e99095d.js",
    "revision": "a90c3d456262e1ed4ebfefe62074eec1"
  },
  {
    "url": "assets/js/30.61e0a944.js",
    "revision": "1bb180abb91a8d21d8fee7c7872685a4"
  },
  {
    "url": "assets/js/31.465f24fb.js",
    "revision": "a20d3b469c767ffc8be9f97a74546356"
  },
  {
    "url": "assets/js/32.fca80ea8.js",
    "revision": "7f7a8edc609096bdebc74a31768da65e"
  },
  {
    "url": "assets/js/33.7eeb5ec0.js",
    "revision": "9f621297a6355e0c7cd95c4d45ea9890"
  },
  {
    "url": "assets/js/34.000e2781.js",
    "revision": "809a79b121a6fc6afb94cdcc221cccd6"
  },
  {
    "url": "assets/js/35.3ac4cd65.js",
    "revision": "915ab9f6bf3eba15bc5f9ceb538d5cdc"
  },
  {
    "url": "assets/js/36.135fbfa1.js",
    "revision": "4d9973c6c1536cdcb1279df325470cce"
  },
  {
    "url": "assets/js/37.edcd1862.js",
    "revision": "31476eaa70fd531ac1ff77a15cc28aef"
  },
  {
    "url": "assets/js/38.c46f4429.js",
    "revision": "042389af386bbf51c4b908fd67252f42"
  },
  {
    "url": "assets/js/39.36091e3a.js",
    "revision": "8b01fdaa20630390961638139a579dba"
  },
  {
    "url": "assets/js/4.8ae0114a.js",
    "revision": "95e81bcfbc849915f31bb4d8ca94ac78"
  },
  {
    "url": "assets/js/40.25b9bbf5.js",
    "revision": "67da8e85052d945b6d4568ab0a369d6e"
  },
  {
    "url": "assets/js/41.a48df20a.js",
    "revision": "a75aac9fb547d3b3a14d8c041d2005f4"
  },
  {
    "url": "assets/js/42.cee645fb.js",
    "revision": "a0a33c3fb4bc30675524ded74d9c998b"
  },
  {
    "url": "assets/js/43.1d00d0fb.js",
    "revision": "63ab7e569e28473c3b6c0bf798e8b515"
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
    "url": "assets/js/46.95497de1.js",
    "revision": "c5a9847588674507d297f6642f88827e"
  },
  {
    "url": "assets/js/47.85878e22.js",
    "revision": "06e5e70c3eb184b06151b160298ffa98"
  },
  {
    "url": "assets/js/48.d94ca3a6.js",
    "revision": "75074c73d2d6b336c4873495df17ad0b"
  },
  {
    "url": "assets/js/49.05d89346.js",
    "revision": "7b8b48b83e741ec945f7fc6ab806a842"
  },
  {
    "url": "assets/js/5.a93771e1.js",
    "revision": "3af081a687d2c40d395240ff37c4f2c3"
  },
  {
    "url": "assets/js/50.663ef778.js",
    "revision": "121c6b9dab3aa13d96a5861f3fc75e70"
  },
  {
    "url": "assets/js/51.9d76d4bf.js",
    "revision": "40fb0d53e9792b1ecce898884215fd12"
  },
  {
    "url": "assets/js/52.0a961909.js",
    "revision": "ec4664f0727fa25508bb2205150edead"
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
    "url": "assets/js/59.2d26dde8.js",
    "revision": "52350c1cfae029c0b179df2cfdfcf6e5"
  },
  {
    "url": "assets/js/6.306de04c.js",
    "revision": "2af94fabb5bea7cdaee8e67cbc93f8e6"
  },
  {
    "url": "assets/js/60.7d641cc3.js",
    "revision": "61f8c36c9d0ca51a908d594c2e4c8919"
  },
  {
    "url": "assets/js/61.cc1a4831.js",
    "revision": "38f30a4a72201ac122ec4dd2a4988a20"
  },
  {
    "url": "assets/js/62.ce2470ee.js",
    "revision": "6edc64e68e258010a4762f360dd8f500"
  },
  {
    "url": "assets/js/63.c314da4a.js",
    "revision": "e63f428a4d2639f1df3e394c9b9b197c"
  },
  {
    "url": "assets/js/64.ea907d84.js",
    "revision": "cb5d8d305962aca8782ca9f81016e9e7"
  },
  {
    "url": "assets/js/65.b54faa45.js",
    "revision": "c3ae8d7a2ade5cc8a3fceda7415227a6"
  },
  {
    "url": "assets/js/66.d77a58dd.js",
    "revision": "8302ab593ffe70cedd4e1d70e70f8add"
  },
  {
    "url": "assets/js/67.6a210e29.js",
    "revision": "e28735b6c2ff1867ed901a497d6c5374"
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
    "url": "assets/js/70.e8f269e0.js",
    "revision": "d4d1152f530ba64d6546cf723145892b"
  },
  {
    "url": "assets/js/71.8ba5431d.js",
    "revision": "4ddad263e0b91461cd0b0b6939407b46"
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
    "url": "assets/js/78.95b9c3f2.js",
    "revision": "8e4e2f42f8f48df9733ac7c99a2d2c47"
  },
  {
    "url": "assets/js/79.fc0c35fb.js",
    "revision": "7067a2c5d675c0326407b14a8e1756d9"
  },
  {
    "url": "assets/js/8.e35a9f2a.js",
    "revision": "3582b86d6aab9c2ea039d6f59d186eaa"
  },
  {
    "url": "assets/js/80.2666e915.js",
    "revision": "9524713de566c54d121d753baf68650f"
  },
  {
    "url": "assets/js/81.4c75ee9f.js",
    "revision": "de2fc097f43980fb67aa976f0ec2fced"
  },
  {
    "url": "assets/js/82.af933ca8.js",
    "revision": "dd3e7f1f57ff9767ca43c16f85db4dae"
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
    "url": "assets/js/85.dc1c9000.js",
    "revision": "fd502442ffac70b85ccfce3421711fe8"
  },
  {
    "url": "assets/js/86.3bbf8c94.js",
    "revision": "6fd69adf18e31418921469b2b0feda84"
  },
  {
    "url": "assets/js/87.a30c80d2.js",
    "revision": "0ed7ea7b05b0562dd14826e5f200b087"
  },
  {
    "url": "assets/js/88.da88907e.js",
    "revision": "f5fc254fd00e342568628190f17ca56e"
  },
  {
    "url": "assets/js/89.a6aa54b0.js",
    "revision": "c579b50fb4a31eeea0a46db56a42a334"
  },
  {
    "url": "assets/js/9.b832aade.js",
    "revision": "c1ab8143de580d2b47ea33fa1b65aa2e"
  },
  {
    "url": "assets/js/90.7c1b8a3a.js",
    "revision": "65958e7c9c72f37a27a9caaa64ad61b8"
  },
  {
    "url": "assets/js/91.147fe762.js",
    "revision": "e454451f67c5792bca6234edd05d3895"
  },
  {
    "url": "assets/js/92.b47e56a4.js",
    "revision": "214869786217c71394fe00fa37f58afe"
  },
  {
    "url": "assets/js/93.d64fdd74.js",
    "revision": "9580e406e91980da33e56d281b02783a"
  },
  {
    "url": "assets/js/94.655c5773.js",
    "revision": "258da16d47706844f1a8852c942e1e9a"
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
    "url": "assets/js/app.9a83cb42.js",
    "revision": "a38c85c44e17fbd554943731b5f23415"
  },
  {
    "url": "index.html",
    "revision": "b93b3c82e806929f7a83b7fec0019133"
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

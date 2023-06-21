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
    "revision": "24bdc842d2cbf3c1bc0dc57b37f1da12"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "27b271a399f2962a503c32c1d3efc03f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "11154e77401199d4421b72059a9a1679"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "a729990ef4c86e6ad535344c967e4103"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "c7827ebc26d1dbdab4bf4da4169c4776"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "235ceec04e899643539d6ea708f6dd70"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "06bb54b9e6be02e560e84add1ac57ea6"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a5f4a94d0ce803f91eb5a5ae3a35ab42"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "909cd6711ea2a59c0cf18b9e955a5f29"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "c0d245501168f4a1a4dc91ee55c40f01"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "d1075c303227039172f29c697a3bc0a8"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "20cd1c7d69bc71bccbbabe2a7fe17214"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "499f5283c79102bec420b4dd094175e3"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "bfc1793d44969e356d5650c639148eb3"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "6520c594cd83192a7d86c436fc0da014"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "410bea101d25613f0519ca0b7e8a9832"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "7903adf4104e727b26e724f4f5f59682"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "fb3774a90b96df4a5a6fc5925a5fc49d"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "2562a2a6665ae3fc2f5f11768f1bdb17"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "1ac1bd267da1384ffda2b846bf13aba1"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "451a1dbd8e9776f3b9aa65673106e67f"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "d4d8936ca291261ea496f4e3a3a417f9"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "effcce5097d4c781020b5ee4b275d648"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "7de6f631ab5a75559de743500bcbeaf7"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "5a2a02023e54b44127dc318a740fb3b8"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "d50d101b5c3f522589a85369e7d44ee5"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "504086adb92ce33413ba190591c63d93"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "5cc4b3175d53b747dc1ad82bfe72b73b"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "8153cb9ca76e31953da97407846c4bff"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "b9e087088fdfef700d5d0593aa44849e"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "5220e2e54cf18e3de13d99c33c84fe27"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "53f6f4a8f278fc81391e7a7c3c7bf96e"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ab82cc3c829deeb201564a014862e86a"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "54db844c9789f17ced7d6e8c1acabedf"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "6b846b089241ade1ea2a8fa7ce811f65"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "8efdb65b26b8a9e6c6e03aff898266ff"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b2e589645b2d8cf30733dfda2a807df8"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "bda440ec36b431c0e81db13bc636bb5a"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "9135e6ea865e2ccca51fd27688c78ec6"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "d333d62b6a99cf1435dd649aead1a95d"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "b23450f77f987f601560d743096a4b30"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "2a31a9e1749f4e1aa703fc0584587ad3"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "c6ab636ea5276f28203397d19ea2da1f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "fcb529bb38735e85a7f4e9fb04aa4541"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "ea25da6d2e25e43550ab3779a15a9456"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "2fc8d28d82b1c9d600212875a62507c9"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e7ba169bb7a443e9095bcbdddfeaabdf"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "302815fcf4b631fb409aaab7c2fd0ce4"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "a76e290b9b48394944aaa90066b9bd69"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "c6d5f94783c26cf44c8e5b90e45dc99c"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "080fae5fd12ffec1ff63c102c6c26dc2"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "af08c306308e6e76dcc28093c3264179"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "c47fc99fdc3ca1755da696addfe98342"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "d9957e1c3486187e930c4bc89b2129df"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "28f82b3478a7e03af0563fbacf51bd72"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "50b5ce2c80240e0f9e40c701c59a4545"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "fba6025b19b1275181e6000c0041b3b5"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7c124374c61c0b4b51ec2e7ceed07651"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "3fc97f76704c619911570c400ccda0bc"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "0bdb1c059658236a768767ea3ee4a278"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "5043919b11386990ebe5e0ed7be1acf2"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "80341386bb6dcd021f5eaa704867d95d"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "139b429ad6ba5a8377557b877dcd851a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "e44f3fc71d589db039390f8c9059878b"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "1bf34e52f129db97108a2e8f33c6b281"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "541765628786cd4d5617dab7b86783fe"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "5a278d509e645f15100e0a7216eca8de"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "4c400f9a6a7c9ce81456ed3e949b0045"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "0f9b196e6dada8c25456a24be70682b8"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "66f9e7667ff9f92c437ef82a593a4c82"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "7251b137984838d0da8426b043920082"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "e5c475321a9ad465c46ac9b9129c08be"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "a420b7e306185c04d9cbbe8cf58b10a5"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "ce9aa4042a4ad8c16529687d31a9d98c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "c5458d705990c241e8c6cca49394bce6"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "be53c35bd4515d1af42596282ad29e4d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "05216fc3277bfd4d983169ebd76f4a29"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "18c9aa85b50cc98652cf45b625e61126"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "7e42c14c52dc1fc9fdd597897ec83d8d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "f2274a9cfb3ffeeca77702134a68a590"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "be2b0f787b2203158fc529c993383d62"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "f02dcbe9f30f7bab6665f19826953aaa"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "de5a50f510d23833e3d43be705a6192d"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "7d23fc467141cb3098ed5d2c7d69aebb"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "db368710d96f2c1888485ea436a70a54"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "487f36102b717647a284111923de6ad9"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "967231a4b1bbafdca4f4bc87333a476b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "99f7d935671cd2f67e55e98b6cd63167"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "6a0ba4cd142401dc7db8101a740a93d9"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "ddcdc1e460a7adfe0e7d1aed86bc4332"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "acecb833134a8151fb18c4b93b1e82a5"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "24a1d7f3276f8955babb2ab0ab896c59"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "ece436434be4fd388ea83e34467654e6"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "38d46650ae5e7b4153ab9dedadf513dc"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "262a346a596ca98af7f241d04e214509"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "2a0913b118a457e6dcff84f4c715f27e"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "7a0698136f96d568ace65ad44955e17e"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c9487ca7d7fcbdb8694a9670d0ca8bff"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "5c407bc8d7a67f3742ab7211b48d766a"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "665ca3f8fda98d149adb98d9439b3fb8"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "62e2bd962d7cfe2d491fbf937ee0d526"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "63bcc65bcd1a61703e9013b115c9ed04"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "fadd137a273d679720158f224a862b63"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "6b5eca6137f2708a0bfdf4a7a3bcf438"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "2de3c2af708a5cfd9ad3d9ab75d8508f"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "7850472bb57c8d4e420b944690eddfc4"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "72606aaef6bc460630b0fe9e54d6f754"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "3cbeea3564daabb08b34e36dc3d7fb88"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2335bfbd0bf14d11c6aa5ea37ae85786"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "581c4cbc92e07d4ba865ac70ba91e662"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "2a34d2323deff5c3bdec49b29c37bb63"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "dc6c69567d5d586dfae235248d5e00a0"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "827cac51d37212749e269078671194e8"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "3cf8d01c2f511363bb772b622a2ffe0e"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "ef6c1e59d0aadec442f03b30b7ecdba4"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "577aaefb837a6ca7bedcdde4f0bb83f9"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "39ca5fcd6316c242f8f5a7598c67bdff"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "3b76d5a5d39bf9dc99b6fc8a4f67021a"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f9025490bdaa3e4764b67d9b5bf4550e"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e048ce1588eaad07f4b129ac7ed07598"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "12276719d90e8a58ee9023249ac1756c"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "e55d04648ba7ccaf4efe07de5c2f61f1"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "b3ec14e37bca8c76b29d48bc4e537ad6"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "c7e21eaa3d62ec295a59bedbf02fb1af"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "4f92d5a8265d53901e3c9ea3e83cc81b"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "5801a60c1c4037a7125aa40ea17377f7"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "dcc5853177ae5ee9148084ddd5d2ead2"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "476ba4cfead73adafadb921444608f32"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "14d5566bfbeae0e9800bf3c28768dca4"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "d4598fc12cdec97a2acae76ae1ea8f48"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "45443ce2df81fbe36dc3ccece0f1cd4c"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "c1edffa62ef2f630af874bbaaa5d8c96"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "135eae9f78f011438c80f49d1e66df3b"
  },
  {
    "url": "404.html",
    "revision": "825e3b9c83b1bc0a26e05806d45edd3a"
  },
  {
    "url": "assets/css/0.styles.fbbe2a77.css",
    "revision": "66ff016f7409fa70fbeac58e867b4144"
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
    "url": "assets/js/10.37567a8f.js",
    "revision": "73d4f5a5831dc5dc6c4dd534855d1a7f"
  },
  {
    "url": "assets/js/100.8f44e0a5.js",
    "revision": "aa1fd304e6083f3c7c8291493e4b2816"
  },
  {
    "url": "assets/js/101.b2dda452.js",
    "revision": "661c415058f2ab0c10d00bba37a471de"
  },
  {
    "url": "assets/js/102.39b97480.js",
    "revision": "f463125bc489c171f0169aae14bace47"
  },
  {
    "url": "assets/js/103.54b28125.js",
    "revision": "d56e9095d9c5b474917b9f7f6c986623"
  },
  {
    "url": "assets/js/104.d10a2619.js",
    "revision": "2844eb335acaf56cafcd92cf945bf5ac"
  },
  {
    "url": "assets/js/105.60dbd0f1.js",
    "revision": "a99bdb30058d5da391e9213e2a86cc02"
  },
  {
    "url": "assets/js/106.0b9fb3e7.js",
    "revision": "a6642ce17362f250e593663a2d61df7b"
  },
  {
    "url": "assets/js/107.a91103d9.js",
    "revision": "0f036b3541c8ed64dfef38b2af237de9"
  },
  {
    "url": "assets/js/108.34eadfa4.js",
    "revision": "e09abdd4a35a1bab492c8b102f94b327"
  },
  {
    "url": "assets/js/109.09230eb9.js",
    "revision": "0e3be7acddc8382f202f3a1bbec0e930"
  },
  {
    "url": "assets/js/11.844d878e.js",
    "revision": "a8fcb410d9fa2dfba8279c97ba4a938a"
  },
  {
    "url": "assets/js/110.16c59fb6.js",
    "revision": "f735cd47b81f9d4f3f6278a6e73a74fd"
  },
  {
    "url": "assets/js/111.20238ba4.js",
    "revision": "b5e6e445d1b12932cdca5db3cdf4b85f"
  },
  {
    "url": "assets/js/112.00ee18ac.js",
    "revision": "cd9f34d65f5b0abf19f6ec3eae6f3cea"
  },
  {
    "url": "assets/js/113.bfb95327.js",
    "revision": "73d2b9db1c48b8a6a71c6f5621613629"
  },
  {
    "url": "assets/js/114.5d4d006f.js",
    "revision": "b0a97c39bf50caf825ab5b931f95bd38"
  },
  {
    "url": "assets/js/115.ad49df57.js",
    "revision": "ee93a2551465f294fdc32f31c03fb666"
  },
  {
    "url": "assets/js/116.c8f59c5b.js",
    "revision": "bba4bd2d145833ac5cc6a6d0266b6964"
  },
  {
    "url": "assets/js/117.4522973c.js",
    "revision": "52a550ffc49b2aab41d7b3ca493118a7"
  },
  {
    "url": "assets/js/118.9ec622d4.js",
    "revision": "9337fa2ab70db098260b5dc6b5965b99"
  },
  {
    "url": "assets/js/119.5f83e1db.js",
    "revision": "a9f946943f053f212e90658afe90a9f8"
  },
  {
    "url": "assets/js/12.b524b462.js",
    "revision": "f5e62d2a46e8e94b3665d931bc07ba53"
  },
  {
    "url": "assets/js/120.eac437dc.js",
    "revision": "0240c190085732e766e0e45ee1c5cbb6"
  },
  {
    "url": "assets/js/121.1d9468c6.js",
    "revision": "54d02ac7cf614eba78dc5a0bb22db384"
  },
  {
    "url": "assets/js/122.6bb8bb33.js",
    "revision": "f1cd83c3f186c1037ab2517e6796b092"
  },
  {
    "url": "assets/js/123.98208e2d.js",
    "revision": "5d30a7e713013943f3161f79bd96f008"
  },
  {
    "url": "assets/js/124.d46a6ff1.js",
    "revision": "35915afec1700c1c53a596a40a9795e0"
  },
  {
    "url": "assets/js/125.8f9208f6.js",
    "revision": "7367bf77ee91764a7251ced69bf3ad6d"
  },
  {
    "url": "assets/js/126.415bf01c.js",
    "revision": "b6f3e582469a08de75659d6149c9e67d"
  },
  {
    "url": "assets/js/127.82632c74.js",
    "revision": "35ef4693ed10cfd2971253abc1c1953b"
  },
  {
    "url": "assets/js/128.f090f902.js",
    "revision": "6f9112d59e5654473e78d70b4a943b97"
  },
  {
    "url": "assets/js/129.a0d4fe37.js",
    "revision": "b79c561b553cc60016a2e4763f5d8487"
  },
  {
    "url": "assets/js/13.9b26e67c.js",
    "revision": "248fcd3c51062a4ec33edf0111707c96"
  },
  {
    "url": "assets/js/130.fd57f335.js",
    "revision": "cc310a8767a2b485e966a69c3f28aff9"
  },
  {
    "url": "assets/js/131.ba12149a.js",
    "revision": "bd32480412ea6cf961d21c32016ebaa8"
  },
  {
    "url": "assets/js/132.534037ec.js",
    "revision": "9cb04f22815803ff099ff923e63c27ab"
  },
  {
    "url": "assets/js/133.ae852c09.js",
    "revision": "445e783e740074cf6a31ee0696d5a55e"
  },
  {
    "url": "assets/js/134.90a93106.js",
    "revision": "4af980799eb755f3d2e4ac55ea93887b"
  },
  {
    "url": "assets/js/135.8efdfac9.js",
    "revision": "dc77648543476f8903cf40bbdc3b9390"
  },
  {
    "url": "assets/js/136.2198d49a.js",
    "revision": "894d8ea54261a5bdaf04d954c9c6f089"
  },
  {
    "url": "assets/js/137.1e344da0.js",
    "revision": "1c5f49dd450fd1d962cb87eb3971dd8e"
  },
  {
    "url": "assets/js/138.014968fc.js",
    "revision": "de914070e885a2b4c18eb643399d3059"
  },
  {
    "url": "assets/js/139.51ea954d.js",
    "revision": "e0323edbaac949ab3f6a72d52a30b0b9"
  },
  {
    "url": "assets/js/14.0b237680.js",
    "revision": "2405cd3a72782abf532a8c8b037f4893"
  },
  {
    "url": "assets/js/15.fd91b63a.js",
    "revision": "779be853a1e32f94af29f615c39d05f7"
  },
  {
    "url": "assets/js/16.3fe29d7d.js",
    "revision": "8806574dcfc78874df126c1239ee4215"
  },
  {
    "url": "assets/js/17.de0c9697.js",
    "revision": "2a34f32c27d3c02d3b0ac1409ea612fb"
  },
  {
    "url": "assets/js/18.5db46c1e.js",
    "revision": "188f972c9377736c8ecbf21a7d7a17df"
  },
  {
    "url": "assets/js/19.aa2b7f24.js",
    "revision": "9915f667fb50c05eb38e37e89bbda1c7"
  },
  {
    "url": "assets/js/2.a30a3103.js",
    "revision": "2f06fca1e787d9c9c630ee04c8bf3bef"
  },
  {
    "url": "assets/js/20.2e89e8a5.js",
    "revision": "80c2bb9df27f081b57a3168be7877613"
  },
  {
    "url": "assets/js/21.e492622b.js",
    "revision": "94d966668858cb8797f6c0bc5fb87126"
  },
  {
    "url": "assets/js/22.3ffce076.js",
    "revision": "cae589fa5d70a6734c64da8946f61a92"
  },
  {
    "url": "assets/js/23.71cf3e4d.js",
    "revision": "182f9cdcb32e182f53b4b8e1373cd73a"
  },
  {
    "url": "assets/js/24.443b0590.js",
    "revision": "7239c817fea82b773f7d47760b1e9537"
  },
  {
    "url": "assets/js/25.05a20a27.js",
    "revision": "fb836deca6f91e0881a05fa781bf4efa"
  },
  {
    "url": "assets/js/26.65e912a7.js",
    "revision": "d99d4041bf39cd268de21d034c825d9a"
  },
  {
    "url": "assets/js/27.a4144a04.js",
    "revision": "0550d4f20dfbcc1dfb81144cc14c7ec9"
  },
  {
    "url": "assets/js/28.79b1931f.js",
    "revision": "0d0cffc13ef616ff71158fd9314c70ac"
  },
  {
    "url": "assets/js/29.2c642c91.js",
    "revision": "cdd04be53984ffa2d82feb664f7b56ed"
  },
  {
    "url": "assets/js/3.e4c67461.js",
    "revision": "a8328f082a9d9c0fec0a0e3b77501c28"
  },
  {
    "url": "assets/js/30.d4ea4077.js",
    "revision": "328b20e7feb06ab26bcb9ccf218744c2"
  },
  {
    "url": "assets/js/31.c5f758d9.js",
    "revision": "06ae9415e610639daa153961e8d0b590"
  },
  {
    "url": "assets/js/32.cb852df9.js",
    "revision": "38fbb18049c56224f228363ac6d2fed4"
  },
  {
    "url": "assets/js/33.cced6ff4.js",
    "revision": "94ff631478fb2f49697a0a270a90465b"
  },
  {
    "url": "assets/js/34.d9f75b35.js",
    "revision": "362e95b84a69c8a89775e24af5f4e7c2"
  },
  {
    "url": "assets/js/35.d802dc58.js",
    "revision": "3dee9dd36eee59d849d14c0af0cdef0e"
  },
  {
    "url": "assets/js/36.21ee0ad1.js",
    "revision": "04cf035fd7941d5bfaab34616882b561"
  },
  {
    "url": "assets/js/37.4e62905e.js",
    "revision": "02ec089f10a1b04ad76ad785f46f0e05"
  },
  {
    "url": "assets/js/38.9786ae09.js",
    "revision": "c6de6eac75f96b8d67a45c20d7c728c2"
  },
  {
    "url": "assets/js/39.e49ef9b8.js",
    "revision": "7dfcf46c05a83653c3c59f47780ea760"
  },
  {
    "url": "assets/js/4.2ad8811e.js",
    "revision": "f7509e0b8bb09979143c931d7832d541"
  },
  {
    "url": "assets/js/40.0dcbe372.js",
    "revision": "b33775eed14797a322f6641366a93a32"
  },
  {
    "url": "assets/js/41.db3c78b2.js",
    "revision": "ec094ab58682bd795bd00bb1fef8920d"
  },
  {
    "url": "assets/js/42.22cff793.js",
    "revision": "81d8efeb57f4c21ade8d1a76501f3a53"
  },
  {
    "url": "assets/js/43.54c55414.js",
    "revision": "6a5d9bccad3cdb191f70217ed0f505bc"
  },
  {
    "url": "assets/js/44.50431b89.js",
    "revision": "ca1c581762c99a7fd666329efdf9e276"
  },
  {
    "url": "assets/js/45.0366dca4.js",
    "revision": "34481c5a445d972df9e689c4e723192f"
  },
  {
    "url": "assets/js/46.3bfffe01.js",
    "revision": "068e6d85acb4dcfe7c1ffb5f6a268415"
  },
  {
    "url": "assets/js/47.1a7739c4.js",
    "revision": "602c05ebeb6f878d7165d500cb75d2d7"
  },
  {
    "url": "assets/js/48.8b0e0f21.js",
    "revision": "73751326037798da806668642104612f"
  },
  {
    "url": "assets/js/49.12a98ecb.js",
    "revision": "bb422d892388153435b6f9a9685dfae4"
  },
  {
    "url": "assets/js/5.ce99a332.js",
    "revision": "ef7f8760c7a4d3e5e63b328d7a253548"
  },
  {
    "url": "assets/js/50.447687b8.js",
    "revision": "3b6ee8797e518f731742056ba7e87a6c"
  },
  {
    "url": "assets/js/51.92cc6fd4.js",
    "revision": "f5a100450ca627e02aee30cdd660740b"
  },
  {
    "url": "assets/js/52.70c32fe2.js",
    "revision": "4f49e7c0830020ab29180d72f166453e"
  },
  {
    "url": "assets/js/53.b16955a0.js",
    "revision": "9c44f7ec82b38a2f96f874bb8189470e"
  },
  {
    "url": "assets/js/54.1eb9bea4.js",
    "revision": "75890d2cf0d1c9c8a5d02764ca31774c"
  },
  {
    "url": "assets/js/55.41ee9575.js",
    "revision": "60087dd37ef9576b86346bb67ace2d93"
  },
  {
    "url": "assets/js/56.461a5af1.js",
    "revision": "352c8fd2f56a767699e85b39065e4d5c"
  },
  {
    "url": "assets/js/57.c0023bfc.js",
    "revision": "076928f76aae7a6e386b502376aa7906"
  },
  {
    "url": "assets/js/58.f948b044.js",
    "revision": "122ab10bc87ecb6c18a93e5c5f1ce15a"
  },
  {
    "url": "assets/js/59.c9e007d9.js",
    "revision": "0dfffc292c769ca30a9cfbb03064542e"
  },
  {
    "url": "assets/js/6.52bc9ee1.js",
    "revision": "7c963830775e78a0a3534d451db4210e"
  },
  {
    "url": "assets/js/60.412ddca0.js",
    "revision": "99ab0022857d5d29cd4ea40a734fe797"
  },
  {
    "url": "assets/js/61.9fb68905.js",
    "revision": "764cace0e2f5cc6462121b9d349d03b9"
  },
  {
    "url": "assets/js/62.e7d12712.js",
    "revision": "deb3d5e889e281486eea6b6ffbc27950"
  },
  {
    "url": "assets/js/63.cda3f00b.js",
    "revision": "19ff55e6391b2a2683ef35fa998e8b49"
  },
  {
    "url": "assets/js/64.e25778d8.js",
    "revision": "9e344c994bc04959bf14098042511b69"
  },
  {
    "url": "assets/js/65.01e1b8d9.js",
    "revision": "a7faf3d0dfa917744bb90edb8a10d407"
  },
  {
    "url": "assets/js/66.a0dbc271.js",
    "revision": "390eaf0affbee40714b1dbdf33282f20"
  },
  {
    "url": "assets/js/67.ae39f307.js",
    "revision": "d90c21fe5a6ae119e14b83a54271c2ad"
  },
  {
    "url": "assets/js/68.8e6f5e69.js",
    "revision": "ff46d57140d56528dce0ee72cdbfbca6"
  },
  {
    "url": "assets/js/69.b84e3b9e.js",
    "revision": "bc70fa9cd90bc0b0713c4cb58dd0ea3d"
  },
  {
    "url": "assets/js/7.ec81e09f.js",
    "revision": "67e6c549b7175151f518316bb47bd49f"
  },
  {
    "url": "assets/js/70.28aedd34.js",
    "revision": "6c331c1d7095a578b2bc0e57f4614593"
  },
  {
    "url": "assets/js/71.f451a366.js",
    "revision": "979ff2e29d7c0640f8c477e55e811c54"
  },
  {
    "url": "assets/js/72.706a1926.js",
    "revision": "b79110e05a6f1bfa6dd0fec0577ad9b9"
  },
  {
    "url": "assets/js/73.116eb797.js",
    "revision": "75e7583241c2551d581e78ea7e2f3f0e"
  },
  {
    "url": "assets/js/74.a7f96947.js",
    "revision": "14fc1a1f548e801c73c79b397bde3a37"
  },
  {
    "url": "assets/js/75.af625e48.js",
    "revision": "c98f365f22dad6ecff6bf4f40f241860"
  },
  {
    "url": "assets/js/76.9fdc214e.js",
    "revision": "f45f1ca631d1f7f15e7758ce278580d2"
  },
  {
    "url": "assets/js/77.3ca8abc2.js",
    "revision": "236ef6eedd5fdd6d4cb87db5968742a0"
  },
  {
    "url": "assets/js/78.8abf6fd7.js",
    "revision": "924e96ae04788d5f845966ddc24f0360"
  },
  {
    "url": "assets/js/79.eba31189.js",
    "revision": "0bcc88e78c271d0664c3ab0bd14d85db"
  },
  {
    "url": "assets/js/8.a94751b0.js",
    "revision": "05594de372452af5cdb2ede58ed6ef6b"
  },
  {
    "url": "assets/js/80.848515a3.js",
    "revision": "b718648ccf1c86b7de087aedae9e508b"
  },
  {
    "url": "assets/js/81.a716e0d0.js",
    "revision": "ea3792c33d8ea9f0a2c14d5c1b5d88fb"
  },
  {
    "url": "assets/js/82.938f8db2.js",
    "revision": "e273ed81ce4f822b9445430fb5463dc3"
  },
  {
    "url": "assets/js/83.373815c5.js",
    "revision": "26633e98729cda9e2cdf7e2a57c64d06"
  },
  {
    "url": "assets/js/84.0e7cdbf5.js",
    "revision": "f8e5feb8eb29a63397790a17617bd062"
  },
  {
    "url": "assets/js/85.a83c28b2.js",
    "revision": "03a833cdf949673a5f067d98e837afea"
  },
  {
    "url": "assets/js/86.062967f4.js",
    "revision": "7540fc8447f886392df8d77ff7dc306b"
  },
  {
    "url": "assets/js/87.92f301ea.js",
    "revision": "2964ae79093cf427d1f20a7293a14c62"
  },
  {
    "url": "assets/js/88.da72158b.js",
    "revision": "d150f051ea68acd1bc0fe4e71510f476"
  },
  {
    "url": "assets/js/89.408af7ab.js",
    "revision": "505e67c68df313b0b5d7e72384455513"
  },
  {
    "url": "assets/js/9.c45f55ac.js",
    "revision": "6343eb6d0a27c7cff176cc6d2fef4bb5"
  },
  {
    "url": "assets/js/90.2b841437.js",
    "revision": "57a8e07d2a29ff0527a71616e27b16fe"
  },
  {
    "url": "assets/js/91.460ea94c.js",
    "revision": "d57e7320d19f491a68cd705aaf938a0d"
  },
  {
    "url": "assets/js/92.cf96e6fb.js",
    "revision": "9d1222a0b362adab9397579bb83e9155"
  },
  {
    "url": "assets/js/93.8fbc5682.js",
    "revision": "68eb3a303e0d2891fa64667a1c5c8fc7"
  },
  {
    "url": "assets/js/94.42b8ae3b.js",
    "revision": "534c2dbdb4c7e135611d83edf67f7564"
  },
  {
    "url": "assets/js/95.7fa40ac2.js",
    "revision": "9c73b02d1a8f97535efd1cda2ef9dfe0"
  },
  {
    "url": "assets/js/96.2135c6ed.js",
    "revision": "0329d8ffa4a788a13eb913c94d9fa0fb"
  },
  {
    "url": "assets/js/97.33738d35.js",
    "revision": "10bbb1c04598ca2d24d79cff404edec4"
  },
  {
    "url": "assets/js/98.5fcb71d8.js",
    "revision": "23c1bd03a2efd3632e389faecb583dff"
  },
  {
    "url": "assets/js/99.10c6eae6.js",
    "revision": "804dae50ca19b331da2bf63c5a3b5d98"
  },
  {
    "url": "assets/js/app.3bac7783.js",
    "revision": "5d18947165581f218509ce35f131b9b5"
  },
  {
    "url": "index.html",
    "revision": "ce0b0897b9e09576c771e21def721561"
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

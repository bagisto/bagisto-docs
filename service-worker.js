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
    "revision": "cfffc57c4c455d0338435f99a3c3e88c"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "2737b1590b903579818e7b773efdd371"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "28f9f383abf3e4c5a9307622d0a21a46"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "a1697b2f9bb8b7e9bd202018a4879fa0"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "a866ef5ac902912e8431fefc83170fec"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "fb1e219d18078f2d65ce7775bd5f15fc"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "bd51c2c5efaabf6f339ff7b4822e9f6e"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b02047eeaddc4f7db8759c5c66a5ca73"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "b021d04f54c7c8eca6419e3982d3e3c4"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "3154738dbbd2b50f5fe911095e67c43c"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "bba619a1cfb3323402c17076a086e310"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "7deeca42fd7a7da75ee91ee85ac2549f"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "ec788ee6d14afed896917c0c99102fd2"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "0806f8d76fa686293ba88e65bb3bc341"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "27adb230d83fb5a0bf06c3f47dba8e40"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "7a3570471cb37eeb419e49d972c2e2ef"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "e5b9cf6cf4924e81fb891f26798a9606"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "9a6eff8994538be535ff92891e4c8522"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "bbf0ed7705c75662cb06b9c6cc3594aa"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "e65b2956fc39a0823c016e959f1f8ea1"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "20992f4c9223aadbe349a97c33721a9e"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "19ac8e09455fe8d0341f16df7833fed3"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "9c91652873836bb99dc749028999208d"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "1431b54af76841ad2d3fcc7df4f6fa63"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b7b8eb8e76fe00bc1a5c7d051677b6b5"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "db3497eb80f4686138e5f3aab2418e2d"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "a4251025e03e7cf5ba752490c134bcfd"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "22209c48d798c085c1715246b274aa72"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "30a225f0e320d5f405e355eab41e9066"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "5798d8fc69cf88d59d628b482f332a81"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "8c2ef3b3c061b4fe0a5a0d40c98ffd8b"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "3c8e8ac8191d74c91f935136252f58f9"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "adccb2a4f3b80597ec0d6f698be4cba2"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "5dc770e71f9604326b8f03f003e9f71d"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "c81ea31f8292dda8969bdc8a02aed4b1"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "dd85be53c8bd0c88e80d006e95fa2792"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "d72eb97146292bd2677030f7749f1139"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "b1ae3f22df1b6fbfdd355678046f076b"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "d1f969857152d9a035b81f26b12a19fb"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "5f4e5ce2c20e67be943cc37507942b68"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "01c183e4984d4db3e60a546cba08e4cc"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "3e64016f2ff3fba7e74dd9be4da402ef"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "ecc17b3d031508b5cfb9a5ef01a40e82"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "5505bae50a88fd296821f270dd168277"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "15a66d5f5e4744d235ba8f9e1360ffa2"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f92b47e1e5bb5dc6acfd3cc7c531e40d"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "cd6e117ea35381ff93a5999bd5f9460b"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "ad80fb133ccda45bcff18b0140e67a01"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "3eb2f378d33e177dc68a76d6e73a4a62"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "ae4f45ae74dde1b7cf3b7cac32bef194"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "c9233e0b790a2946812a05fc4f0ac7f5"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "41f5c092afbb1e35c1d6f47dd8a4305b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "2229ac0eaff7a4a82fd2407433fb54f2"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "5ca54daa9bdae79f2e833f1faa54261a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "d9303306037a100de77edafdf60b97d8"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "af243bb8331dd1a2ebabb7713bda729c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "e4b3cf749b4eee706bddf28da8304a5c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b4c60151a34c41ffffe6d7fb3005efbf"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "a918864045f01fc22cd80b8ba6f71d46"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "78a2f7b20c983ce222143e064db3d218"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "baaf2dea8f518fc00836dcbea993aadd"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "e08c7498dec53eb1d03383ec63f49ff3"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "0e87c5a173a63d9241a718a737bac2d9"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "c17129baea6f6995b684fe80e7929c32"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "94abdeed527bde2326a287795fb31634"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "e5fa8344d2194c94d0df7882242b3ea3"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "24c767b2d0977bb643ece4cfe321e58c"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "f0a272a9d321954a3d73e40eb5991eee"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "39df31468c93db12e7718f3d9176dfd5"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "2c8d3029d93ee8c2ed7048410ce06eb2"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "fd81fd1f0a671c7491c8d67930b57baa"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "d21e7f8ae76370938a8d1653b598c60d"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "50444b80330a75f062a692c52d3c254a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c9266cc3419f0b1a25594f88c2097195"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "616572fbe825a94a00d2657b3cbf0432"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "b4474bf640a456434d3bfbf20c5cf4c6"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ba5291654645e6acf9770419397c9d08"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "9a9ae3a3f15194e7b588bcf853c7f2c9"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "cac63510896df5057776bb69ae9debdd"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "5603de50b0ecaa33cd5565892cb3f536"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "eacd5bfdf7cd2e3fa43f99ce3aa5cfdb"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "679bf4d09714b753a12ae76a0a8f47b5"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "d0b77f26ac4edde23f3e7b368513571d"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "6d899e631384604a784a7dce090b483a"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4e3fbdefaeebb0c58866ea777e73c8e1"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "785738a9864dd2e7558001e4937b036b"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "8ed09bb90e63ea7b20df7ec712c0fd73"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "4ab3e7ae1e5af29178fbd9f1e03c9362"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "0f575158a96dc5e1112d16d3876749e6"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "c06c26bdec8f7e4e35157b804a5b9d0d"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "4804b254cd48a59b97054c488b456e35"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "db62039215d3d0a684d43bf4a1511f0f"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "aee562d026ec6d9e12979e325ec3d034"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "f41a3bd3df23fefe50b8aefd1bed9587"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "566614392c48947e5b510fa49bf2f5cb"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "9b06cc9955fe92ce40b652cd3a614022"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "212a366eee8737fd11b9df9350db0ef7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "e64e40e9b31e3d25efd680f2998c5221"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "11906dd28f4d5cf4117f115789b99b9a"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "3c87d7691724e4c57338c5586b6ac3f3"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "b4fd0e62df0329d0c689128d3b32843f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "491e80afa41fa5fc082e1d885684edbf"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "37d7a8fde764920f8d077258d9ee104e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "019e4c80e785961c293ceb5234134424"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "43bd0191b6f17b074d89a6e5c506a29b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "0136f9a080c76fa53474a75868a36594"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e8961d7bdb4f2062cd660ab830aa4513"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "99db24831c0838631c5d307f353d50f1"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "09d4097656ebdbcf5c38cbcc90b28815"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "e0e19027505519fd125894998b93fd29"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "a466d10f9eb969dd053d2865b7683d6f"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "08da95e76fd7e63f321106a4e4cf2178"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "4cbbf6b49c21cea0878ca070e6ae5e57"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "0791d4fe127f923cae775d57b08c85cd"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "68dac8aa52bf10d03cbf894291771692"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "dec26d4c59add26d8b603801c3a73fa4"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9539a46f392df4f96d236699ec00c198"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "30673009d85a50b27075ae100c66980f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "c98904278a913285214199d3bc36c35c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b9b4121d2b44d8d072f6651731060932"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "4eb7593d4a8620fa8efab657cd8ce4a5"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "8df69d166fcef21a127df93bd38f3fd4"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "4539f7c5d8deaa773b2617af9bec83e5"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "e4cfcbd90687f526a083cbe8420032b4"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "f3d0430fa301778bd109cd66d0d4f631"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "d6de54eba4da451c4b7d82d783f79ac9"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "09881c869d1cb6c085ab89244a647813"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d2596da5808a64667033f9e4c513673d"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "53d8155808f0468d661d2eb3b65d504c"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "d03450756538e51c06a3e77775618658"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ccc3fd459a1d3be9c59b4b4df39a188e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "edaf7c89f0f8c8654d8a1d73ad6f7b24"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "9f02ad9e819a5cd7db80035f115bc9ff"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "98c856e0bec85154eae530a076963db9"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "7bb3ff05fd61c6393bd97d37c9185967"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "94467617d08608a66c182157f3b84984"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "cb3600004e29bdb409a33549aa043aad"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "4de534de6d8ddbcf7af8c7f02ed9fb87"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "864425320f7f6eb65a73d170e4b0bbd7"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "75cdd970ba479a1ecf690b974e67eeac"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "669085c622d4b92da47cf9303a9cec5c"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "7829fdce466ffead833442e875bcbf77"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "0aa5f76fccb3948bec9a122af728f845"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "d2123077b3b60b4b930dac42c4dee042"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "7b634d41c5d79b04c2298d9e941a34d0"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "48e8f416e74e6b969664cbac1f4169e7"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "e433e66041f4d24abeff431137cf3d5b"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "df7909497cfa2f3b5e13b88b28f8ba59"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "4d7e3b82aa0e93f23ee57b5e7d819a42"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "05fea70d9289b05ae37dfa25d468772c"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "661647f526f1eb360f7b6f7f6f76bc87"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "4c36e6ef69cbb05b1c40031659281f40"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "d8d755e898fff7cb9928a7a8872af5ec"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "31474dab18a54367003ea130c4e82e59"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "33396ce9f56c5b0eff6a76ba73665c47"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "1e03e8bbf3de847927d5dd02df48d607"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "4adb5ac5b5805ed300001909ff792540"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "a643217cdbe47970826b3ddc0038d2b2"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "09ac2339012aab5f4c0d3fbc0153ce94"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "fc9528f1b771461257a3c947e36feb4b"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "776909a8d46a4fcb2f65d1b09be78406"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "9ba5b03da02b7a005ba696ed454c9d00"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "d50c47db7a8afc1a6f30565a0f799547"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "62d6131540f31c3ff32a2c0bfaa6f977"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "627c7337591cdc97cba26c3896114e61"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "a40aaaeb6469482c8e3d74ae5786abf3"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "bd7b5633931c1f93024254bd1316a581"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "8673f5f652be273527ecd366974c67c2"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "8a4cae9e4806eee0ebcc1607067f80d2"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "cb74ac3f1e59a3df5b38ce2b7e7d67bb"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "46e4efadf69968f23762b4a0af910b74"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d0142ebc7aa9d2a8f6c13278ae4b1ea9"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "0cb532bf2cce79bce50be24ef0121369"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "96e4ca757cdd3ac182093c66896bb4cb"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "8c3c17049a8bed33d23078c51e96f9d4"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "19bc0991e7ccc8eea2215b1f0786a2c4"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "3752ff65ec3fc63470a09fe99fb5f31b"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "bc7ab96896c4e4deb4c42aa5ea74cae4"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "914b7eeb4bcd02ce769be4a357dfd4ce"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "c4cd1a4d41d6361678b163ecb7e2a42b"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "0990debec96ffb575cd08fdc0b095c56"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "dde6a2c1f08b9c451a4573aa288165a3"
  },
  {
    "url": "404.html",
    "revision": "fda3545b4833d9697e7684deab1f340f"
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
    "url": "assets/js/100.0e433e64.js",
    "revision": "221a2bc4c4f93268b21e8b10e6260c09"
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
    "url": "assets/js/103.c86443af.js",
    "revision": "ba106caf3447582819e0074f176af8f3"
  },
  {
    "url": "assets/js/104.510b6898.js",
    "revision": "8863d03b84d26965b47259de2bc8b00a"
  },
  {
    "url": "assets/js/105.8584d4df.js",
    "revision": "043b1355a6414acb32c4ee6fe6588496"
  },
  {
    "url": "assets/js/106.e9c288a0.js",
    "revision": "1844dc3d210266947840e9c87adb6692"
  },
  {
    "url": "assets/js/107.2766b0e4.js",
    "revision": "a804aa200221b0daa7b6f9ae6dc77891"
  },
  {
    "url": "assets/js/108.6aafb3d7.js",
    "revision": "65d6135155c419e5df07cb62ac9c9e37"
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
    "url": "assets/js/110.a6159f9f.js",
    "revision": "6d04e37bb14d3edcbe119202f3d3255a"
  },
  {
    "url": "assets/js/111.16c98f67.js",
    "revision": "68eb05d72be212dae69a8b68898513c2"
  },
  {
    "url": "assets/js/112.def833e7.js",
    "revision": "491650715cfc52ed96dd4e2569ae7290"
  },
  {
    "url": "assets/js/113.4a5f0824.js",
    "revision": "a8c2de38ad6ef10e68d55108b1ed896c"
  },
  {
    "url": "assets/js/114.80095f89.js",
    "revision": "5cb63fe77b8e2fb17541835b60fded05"
  },
  {
    "url": "assets/js/115.5ae57ec5.js",
    "revision": "56eff444f1e643d250ca9e09a5f90f04"
  },
  {
    "url": "assets/js/116.5aea00d7.js",
    "revision": "ff14caeface9e63cb7f06d338db49afc"
  },
  {
    "url": "assets/js/117.69c4f4b4.js",
    "revision": "e72137e60dca6f098dede3eb8e07c258"
  },
  {
    "url": "assets/js/118.8dfb113f.js",
    "revision": "23bf33a81ef66c3fabb3464278752f2e"
  },
  {
    "url": "assets/js/119.6eaa6b4f.js",
    "revision": "62621f4f354a45c394b4b3c3b17fa013"
  },
  {
    "url": "assets/js/12.78473208.js",
    "revision": "58bbc7a32092ed32d122f83faf4422b4"
  },
  {
    "url": "assets/js/120.871d1d83.js",
    "revision": "2551249018210649a6002e7bc4467a74"
  },
  {
    "url": "assets/js/121.5ff21b57.js",
    "revision": "5c230fc8ac7c5971ec427b103993fdfc"
  },
  {
    "url": "assets/js/122.47a5a45f.js",
    "revision": "9508ca6e6a6ca0f3fa79e82bae99920a"
  },
  {
    "url": "assets/js/123.14708e61.js",
    "revision": "639d67b3717f996858e4a6ce11ab7d24"
  },
  {
    "url": "assets/js/124.d639f86f.js",
    "revision": "6bbacf5d3deafbdafabd6183d98fc0dd"
  },
  {
    "url": "assets/js/125.dedf3340.js",
    "revision": "9c6458a8de2e5aaad79e8a4ded0a6c3a"
  },
  {
    "url": "assets/js/126.23bb501e.js",
    "revision": "d5be1a88cedab83187fbbf60f848d72a"
  },
  {
    "url": "assets/js/127.92e532c6.js",
    "revision": "4a090025f5fef22eb300dd9294ce8e21"
  },
  {
    "url": "assets/js/128.a89c6824.js",
    "revision": "febf1f3341a38f3b7b00a4e4361a39f8"
  },
  {
    "url": "assets/js/129.e7333e5e.js",
    "revision": "8f894a61da198e610a5582729788a221"
  },
  {
    "url": "assets/js/13.31a0560d.js",
    "revision": "ea6e92214fa52736f15523075918fc6d"
  },
  {
    "url": "assets/js/130.a737fe59.js",
    "revision": "e63cf43830a74faafe30b3c1d1cce270"
  },
  {
    "url": "assets/js/131.8c4c755e.js",
    "revision": "07f44e600c63d971e86743cf8b753d33"
  },
  {
    "url": "assets/js/132.3790f36b.js",
    "revision": "c7a5a044fbaff4380255b065802f4d01"
  },
  {
    "url": "assets/js/133.99da6a15.js",
    "revision": "44d23c34de381b3f25f3722251c22aff"
  },
  {
    "url": "assets/js/134.6c7411fd.js",
    "revision": "d25caa69041ebde95c1ab5dfa7678803"
  },
  {
    "url": "assets/js/135.822ca34a.js",
    "revision": "ea32c758419f3fc4073424cbd605e4eb"
  },
  {
    "url": "assets/js/136.c1841743.js",
    "revision": "a1767ae7bb1a9a6a71f20426b8dfbf82"
  },
  {
    "url": "assets/js/137.f309ccf3.js",
    "revision": "c8b8dc40cf165452d08abbd191f2dff9"
  },
  {
    "url": "assets/js/138.9a3913af.js",
    "revision": "d49a6bbebcd3870ea2ba2df2da9a7c25"
  },
  {
    "url": "assets/js/139.eb575b7b.js",
    "revision": "087697c2c422bf3d8b9599980bf5e750"
  },
  {
    "url": "assets/js/14.453cf302.js",
    "revision": "37d2d93a0a511ba11f293e98e5727682"
  },
  {
    "url": "assets/js/140.56225edf.js",
    "revision": "b3670a71a58fc3097bb8997dd88a7478"
  },
  {
    "url": "assets/js/141.b467f394.js",
    "revision": "02d215e952f49fecc46ed01e19237c8d"
  },
  {
    "url": "assets/js/142.fa6b74ca.js",
    "revision": "97a7a64f9fc9707d6783341501b42236"
  },
  {
    "url": "assets/js/143.0813860a.js",
    "revision": "c9c63a022dad9ff638c1402f3a236595"
  },
  {
    "url": "assets/js/144.2c6350b5.js",
    "revision": "c8b9dffb05d4af639039d2a3fd78d5b6"
  },
  {
    "url": "assets/js/145.ba584e22.js",
    "revision": "2a713968f2a0b303def5742a9c930c7f"
  },
  {
    "url": "assets/js/146.2d5cc8ce.js",
    "revision": "fed844b8f05ad87c49acb55340c072e4"
  },
  {
    "url": "assets/js/147.0b3575b0.js",
    "revision": "afa2e8b871496a77c4df4c7fbb750f5b"
  },
  {
    "url": "assets/js/148.8ca583f6.js",
    "revision": "9d047fd7882127a3e32567ed4dd42cc5"
  },
  {
    "url": "assets/js/149.cad4d822.js",
    "revision": "d9974040bd7e91f233ac3104d355e052"
  },
  {
    "url": "assets/js/15.75b16833.js",
    "revision": "dbc21d4d76d271c879b577f4a56eb603"
  },
  {
    "url": "assets/js/150.8fe97810.js",
    "revision": "4fe1815a7b4f0f610190e0525633cf48"
  },
  {
    "url": "assets/js/151.d5512906.js",
    "revision": "20c4c0453605f6c086b59650d9b7694c"
  },
  {
    "url": "assets/js/152.48bb3e07.js",
    "revision": "d006b4d3584d3c42e2b312919bcb8077"
  },
  {
    "url": "assets/js/153.9ba45c86.js",
    "revision": "ccb7ff38c4ddceff2ceca5e7ad390b5e"
  },
  {
    "url": "assets/js/154.85dd6886.js",
    "revision": "c9b42cbb9c7f6892ffdbd19681749ddc"
  },
  {
    "url": "assets/js/155.44cdb06a.js",
    "revision": "263c090793bb0a5d12f97636e0dfa9a9"
  },
  {
    "url": "assets/js/156.38f4eb7d.js",
    "revision": "a668df29d619aa2784c0bfffdde8020c"
  },
  {
    "url": "assets/js/157.e6f11567.js",
    "revision": "1cbce95c4220745855a8ad3305244315"
  },
  {
    "url": "assets/js/158.47c6254b.js",
    "revision": "2eaadafafdc68a32893040f726a35237"
  },
  {
    "url": "assets/js/159.8e57d666.js",
    "revision": "48b40be34ee4abfd44968182b37986da"
  },
  {
    "url": "assets/js/16.522081ac.js",
    "revision": "7b63cb185d27ba9552de0bec37260bcb"
  },
  {
    "url": "assets/js/160.ff7d55a4.js",
    "revision": "73ee18d0d5fe1d2b05781230c48182d4"
  },
  {
    "url": "assets/js/161.7220705a.js",
    "revision": "fea04026635425a11237946e3338205e"
  },
  {
    "url": "assets/js/162.0c9fb613.js",
    "revision": "2b8d180c9bbe64cf194bb0cd188b8143"
  },
  {
    "url": "assets/js/163.c844d89b.js",
    "revision": "18337b4e01e04c3f1ec4917c8b2094c4"
  },
  {
    "url": "assets/js/164.99755de0.js",
    "revision": "a3ccb573477cde79f58daa421a3efb28"
  },
  {
    "url": "assets/js/165.0ed619d1.js",
    "revision": "98b266cf53356f1905718598826bd0ee"
  },
  {
    "url": "assets/js/166.912bb6b7.js",
    "revision": "70b383ff94ebede4d570b709ff64a1c9"
  },
  {
    "url": "assets/js/167.d69bb2cf.js",
    "revision": "819509cb471e5a5afa628b32fb996628"
  },
  {
    "url": "assets/js/168.d49d7376.js",
    "revision": "c51f92b684a4bd532f34708968031754"
  },
  {
    "url": "assets/js/169.c565777a.js",
    "revision": "a6d09f18456111d6452e805bd83b0f98"
  },
  {
    "url": "assets/js/17.89de57eb.js",
    "revision": "0c74db8191d836bde1bdfd32c8688940"
  },
  {
    "url": "assets/js/170.b0b6457f.js",
    "revision": "6220be18ef0e55056e9703c9f28b9c1c"
  },
  {
    "url": "assets/js/171.cbe8a674.js",
    "revision": "18df66757b9fb09e24d445d72a4564cc"
  },
  {
    "url": "assets/js/172.e8d26e9c.js",
    "revision": "a513aa6d3797b2f05aedd1b2f150d24a"
  },
  {
    "url": "assets/js/173.c44be12e.js",
    "revision": "3bbb739760d43b778532d2ab97f3c354"
  },
  {
    "url": "assets/js/174.61397165.js",
    "revision": "1da765015be64794e051a1a73a9896eb"
  },
  {
    "url": "assets/js/175.e7cf9733.js",
    "revision": "dbc5e91a718f7f48c50b7af126b9ac9f"
  },
  {
    "url": "assets/js/176.d4ab8942.js",
    "revision": "1295063fab86bf4e6a81a1a1d28a8938"
  },
  {
    "url": "assets/js/177.27d21101.js",
    "revision": "e5d4c91ea7c7602d021f5fb7d7ef069f"
  },
  {
    "url": "assets/js/178.724ffd2b.js",
    "revision": "b2c11518e19c20fbd2e7d6668ca30ee6"
  },
  {
    "url": "assets/js/179.3521cf81.js",
    "revision": "98e9ab79b05a2d237465ce7939d91eb7"
  },
  {
    "url": "assets/js/18.b61ab550.js",
    "revision": "3097bfcc3ff5f0e8b7add001ae65ef4a"
  },
  {
    "url": "assets/js/180.3c98858f.js",
    "revision": "29c9114eae40c5d71f634ff0328dae51"
  },
  {
    "url": "assets/js/181.c2d4262c.js",
    "revision": "5104a854fe058183c438fbfd1862ec4c"
  },
  {
    "url": "assets/js/182.65abc13b.js",
    "revision": "3ae15ee611a85231068ffa7f06efde77"
  },
  {
    "url": "assets/js/183.e66c29f0.js",
    "revision": "420097d57611566f34e2e662269f6ea3"
  },
  {
    "url": "assets/js/184.fc5f849d.js",
    "revision": "63134049489f301d38fa6944c8a70598"
  },
  {
    "url": "assets/js/185.3625cda8.js",
    "revision": "1d61dfa2b7323bb29cc1fb044a645851"
  },
  {
    "url": "assets/js/186.5800caa6.js",
    "revision": "c12b27c4733e5950e6c396a032fc157e"
  },
  {
    "url": "assets/js/187.e05d5821.js",
    "revision": "94129e9ef12e09021bf3f562ee75700c"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.df2867fc.js",
    "revision": "e5634229324ae4f21b1fb72c8a098d8f"
  },
  {
    "url": "assets/js/2.fedcb7f2.js",
    "revision": "8cfc5729fdfc3aeb28d25156f1286f49"
  },
  {
    "url": "assets/js/20.c45c4087.js",
    "revision": "a66fd37edcbad0ee1cc209dce5cd65f1"
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
    "url": "assets/js/26.58d0e7bc.js",
    "revision": "d0c033767c5ccfc302d974112e8d522f"
  },
  {
    "url": "assets/js/27.b87e2e27.js",
    "revision": "f9ddb8e524f683ecce65e13f28e3416e"
  },
  {
    "url": "assets/js/28.17f79b11.js",
    "revision": "32febaf03ddea403c9fc60dbe5cbe5ba"
  },
  {
    "url": "assets/js/29.7ee78a56.js",
    "revision": "21b810e4c680516b9c0ed836a5099996"
  },
  {
    "url": "assets/js/3.00b32b76.js",
    "revision": "1a35951fd65de2998c14ec8412d1429b"
  },
  {
    "url": "assets/js/30.8574d85a.js",
    "revision": "5dc1a556ed333e75b3fc5ed9af84a8cb"
  },
  {
    "url": "assets/js/31.7bed18ff.js",
    "revision": "9e1914c578bc3257ceaf7cc8eac87233"
  },
  {
    "url": "assets/js/32.2f7c0bfc.js",
    "revision": "31db4fd8427a373fdc6d7d754699047e"
  },
  {
    "url": "assets/js/33.41866f3c.js",
    "revision": "3300911036abb586ad036b748ea212cf"
  },
  {
    "url": "assets/js/34.dbd1b593.js",
    "revision": "68700232f0b0624611b31f288e6d6772"
  },
  {
    "url": "assets/js/35.9823d1db.js",
    "revision": "131ea7a0107b556b17bdd37ac6cd500e"
  },
  {
    "url": "assets/js/36.351c4900.js",
    "revision": "5f0ece2611b704bd2e02a6fb2bad113d"
  },
  {
    "url": "assets/js/37.06055d44.js",
    "revision": "480f1c19e5683271f079391c35e31251"
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
    "url": "assets/js/4.0526c43c.js",
    "revision": "6181d38875a0dcb0cd315ec82c4d654a"
  },
  {
    "url": "assets/js/40.4b33ac9d.js",
    "revision": "d240cd037769f8239893f9c9c8ee9de1"
  },
  {
    "url": "assets/js/41.2a2bcf63.js",
    "revision": "762d5bf833d003b375c6fd99fda27054"
  },
  {
    "url": "assets/js/42.34096dc5.js",
    "revision": "25bed1d6bf5b30678fda678351e74dbd"
  },
  {
    "url": "assets/js/43.2f1c937d.js",
    "revision": "abae80eb278517130a3ade429ca493d3"
  },
  {
    "url": "assets/js/44.56cc7446.js",
    "revision": "352f6818c90aee66e05784f801a6d4a9"
  },
  {
    "url": "assets/js/45.f1807bff.js",
    "revision": "c029eaf99e8ce74c94cde30a47a0b129"
  },
  {
    "url": "assets/js/46.9a6f1351.js",
    "revision": "cf81607f6ac54ea81136ff0f785916eb"
  },
  {
    "url": "assets/js/47.3226eedf.js",
    "revision": "11df10f1946a71fca38f68634852e0ea"
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
    "url": "assets/js/52.79355e6d.js",
    "revision": "f0686728fc65f25f6d8d19cc5dc9e2b9"
  },
  {
    "url": "assets/js/53.37b145fb.js",
    "revision": "4ea9b4e544e99689cb9298f5833650f7"
  },
  {
    "url": "assets/js/54.94e0e9d3.js",
    "revision": "13087e10079ca5ac3b9640f60b330497"
  },
  {
    "url": "assets/js/55.2a0f92ca.js",
    "revision": "11f2bf22979d4238ab1e0bd47de901a5"
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
    "url": "assets/js/67.6309a3ff.js",
    "revision": "34f11dc9865eec731d4da402695c0294"
  },
  {
    "url": "assets/js/68.6c58381f.js",
    "revision": "cbda7aa441c2f59226553ad50383a528"
  },
  {
    "url": "assets/js/69.bace815e.js",
    "revision": "a2bdd16c1b3b4d32d13804a5d5afa487"
  },
  {
    "url": "assets/js/7.0214b9c1.js",
    "revision": "f913bc10371e18c0abf71fdcaa628381"
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
    "url": "assets/js/74.aad526e1.js",
    "revision": "a4fe7a7615650181de14c29cdbaf9f0a"
  },
  {
    "url": "assets/js/75.3270b7b7.js",
    "revision": "a2c7be278ac49c344df84abafce75889"
  },
  {
    "url": "assets/js/76.1e47cf9e.js",
    "revision": "224dcdb7fc9f1a6c26c1a1bff5f863f6"
  },
  {
    "url": "assets/js/77.b7a82fbb.js",
    "revision": "ccf0858d2bbae295fb3262d78ce7142a"
  },
  {
    "url": "assets/js/78.67a40c14.js",
    "revision": "b756a617162d171f622898e8b43c8398"
  },
  {
    "url": "assets/js/79.feba0fdc.js",
    "revision": "09ce11ed114492335e74cb15af4a815d"
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
    "url": "assets/js/84.4c3847a7.js",
    "revision": "71d196a6c793358fadf5e20293931a0d"
  },
  {
    "url": "assets/js/85.869a04e8.js",
    "revision": "c0e2abfba411e3c30c652a38d61c1ae8"
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
    "url": "assets/js/app.9d0ec758.js",
    "revision": "32d11ad9a274c6aad31aff3fbbb6d5f4"
  },
  {
    "url": "index.html",
    "revision": "6c02a70a380ea8719cc97328fcfb01e2"
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

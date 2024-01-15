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
    "revision": "a0697b32abb2b33aa98b6346a5d03163"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "412598aa45959c5bb389e24d676d92d3"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "14038f3d1f9ebe698ec8ff75c0f6d797"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "df8a40a52115591b92dae0c5915440f3"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "c65a52059ca1043b3085f64d2b597286"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "823a45da8c3b0ad20b4a920060014fcd"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "8d8fe53346c3387a0240f42da0e0f035"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2491584838556f38ad9a066aac4089ab"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "a02838908a29f6358f98228c610f40fd"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "b97526802b9e1f9f003b3ba08d050d7c"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "cfa9058d31994eff00382fe2b59fdeee"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "68e41250fbc8384de239ab2a91dda87f"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "c7677ff96bc7e500fec364d0a2ecfec6"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "cc9d14da0ca1d015ae633bc53dfb6970"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "1171946167626d2f81229e9010152278"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "197e0549a81f0d3936efb49d8501509f"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "4cdec6748b200a6f873f61d76e128cdc"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "f4a512d27a3513d29b12674bab29ede5"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "18d23d32ab874dce73957c4056dabc3f"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "5df696a0af723a90556e27da20a13405"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "becf29ef3b9deaca4be5405b56f5f761"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "16b4261facb99713dc976d1097e13ec4"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b5cc93f9c0664b3c788ed4ed4920f7ff"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5b6620d562b810f2f36333bb0a70d2b4"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "c383532f9ab80399ec92adc315de70b8"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "3866601f3615e548a0cec15421bb3f1b"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "e72b2fcb4174f12864ad8052830f12db"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "3b426f8f0566ae455894d44b77e8a148"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "2d1c753b765a910e010eb0d4788b0baa"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "05890dd3fe9bb2182801a2c302c9a1fa"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "04e31742c3052ec1d27106568cdbcab6"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "4101796c1c11f18ff73d35fd020002d3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ae9a024a8626273f2f970345e6d98533"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "5cab927e0d3f4d9c7559b3ff486737a5"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "8bb5c16c4aceb8a8c3f574709dc99ac9"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "dfb1d0bdb584cd35946b82aab261d4fd"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "20fcfc76be99721f63e6d50d8f5aa65a"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "3ff68cae0b2805304bc6bbdfa4045007"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "69f28c620cfe0a61ebac5ac328fccc7a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "85f7482656655973c29362d7e3fda5d9"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "2b3dc576223c8c59c5f5f7be4bb51ef6"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "96e6626b875603be04ee55122347614f"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "698a81e0733461c3b5052ac0ecb15c7b"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d5fd19aa266c03ac79b8af32a8644a0b"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "165d7d372f02d77083720bf88e32d731"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "ecf8da54f2e21b89deb057bf7db61f33"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "ad0f62bea1babe700f87b5c5180fe57b"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "78d2fff2360eb6542c5233eaaeed9107"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "c941a4f446aad5ca8a0341908a48b3b1"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "06075788e8e94dea1a3c86fe6450fd81"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "7f87227937ba131ac964c2f812ec6cbf"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "fdb3b9519e623f6d0258d56258163566"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "75c6029d2ca85d029157af1a4c6a09ba"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "555746d4a682ff9c2868161e77590409"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "0601ceec0a59c725a9ee727c6b0ea4d7"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "89b56509784befd2050fb32f36287cfd"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "f6b8747c82bf3203eaa0b16b7f37cc10"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6e34cdb49babb8a6750c25fd7ab1f7f1"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "b09484ec04255ffb94da0b4304d8945e"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "c6bbd4c92cd08ca392aead4d3f0f354e"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "0a9b0720aed33c7e77a0be9b0d39434d"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a55e9d6fbe4f60827f11d411f744b33f"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "f668537ebf568230d78a5bb12578a112"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "5901ca5b5478fae41387b4275c50333d"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "395bb86a471aa24ac5f8e88dc70d13dc"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "aaef3581dda9af8708535e1841b46015"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "6f74321bc6d7e371e4c38b9f09ae4ab1"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "73942a2ce9d46d603db2c734b9710bd8"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "977edb3e7386aa99ddc7fac818881174"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f8b5a560ff9fca83077ec201ef8b985f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "1a05d4dcb1eda55479d123c60aee5bb3"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "db4c2b0e6ce1d3e8697431ecd9199d0d"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "17ee6c996404b8afa704e17253cfe646"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "44fc1919de50d257dd122de0dabcf6df"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "302b1456c370e702f331a59a7c575983"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "6110ea51ff3da21bcdc32c91c178b798"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ec1e2ea5969ba8f3257795441e61b0d5"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "22f8dedd60f6b3906b46c3f945435815"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "770debe71b2f40992707af23e3181214"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "6cd8b4c8480aefb68b484239797b6322"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "bc2d9794ccc78747db7b7431501ba4b8"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "1d4ce7a56099427452c3484183deff76"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "bdc203ccb5844d90ca19f8bdd1555d29"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "cfda0a05b904a641376d954653f7df59"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "a87e9c1b990c9f99cf1a519780585256"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "2e25b3d43b0b8f6f9e279d3a5a95bf11"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "233c535473d0adfd20881f300d9e6127"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "6dc11390618e3ac6d5961da2e2ab9607"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "cb1ac2091a552347cffd36720f24d4c5"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "7e674f737a5698fd8744bd61f5f5ecda"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "a58ca8b35a557282cfb6e1f14d7f8776"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "ee7c4eede36927a647693309dc70e127"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "fcfcab20201f46e738048122f8f45496"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "1def24ecbd9ee5491f8d257367b622b9"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "3fea28a28ee4bc5726b606346226e989"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "1ef0a1990aa96faf8c8c1ba9d499d15a"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "360beb81d8d0ea8b6334256a483df8e4"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "364d22028c69d9fcbe5de697aa9c6243"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ce7d56083f499b3ea5b06acd4d684929"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8a39e91e4d4eb1b6bdcb0a5d926d9f90"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "78bc3d57284d15aedfde9681901a9bad"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "879edae42eacc8bf8bd31a7979d67c27"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "1d84e3f682d058a0ff7e28f82750ea7d"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "29f1570d8586d74d5f511f89d19f9d41"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "90432e034f312964c001a888b9cf0e1b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "66b37ed9b6ebe030b509e1b38b861bd8"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8bda047093a3aa562d0f63ff40ad127b"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f951e360ab16bfc321834a262d3607cb"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "d26a4839eba20231f3b246625f80cffc"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "07487d0365e5d0077ff560ce93503798"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "9bbd61942b37857ba5a87d41566e4ec6"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "eed60288d2cd42da0438341e2a025881"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "f68f4d7c1bf6d33278c930998f93219a"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7ea52c63270879ea9054440c55421a65"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "caa8782bb87b44aa59a34c52d972b9e5"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "fbec54056d767633df029322f1fc5249"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "7add106a93552e363093edf66c3e5b51"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "ad096a3216971b05184ffa6f4fbc9911"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "c95cd9078c83c9fc719b41de73b8e68a"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "20490d19fb85dee0f484787492190ac2"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "e8254ee6951008168352855289bc484b"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "1ec99d656deacefa5349c689d884126e"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "43343c201a8a5b01bc5ea74ccb4693d8"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "ffca827d55a07e1ec48b9984564f4e30"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "c6b6ebaa847f326912fc1aa065dbd2eb"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "4be005bf17f4b67127728ccd9bf8de43"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "9488b5b5f5b1b33ca7b3a33457b7349d"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "555d4abac8752667898c66d15ea0bb2c"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "15c5920ed375cec2b09351be108e3b57"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "74ecfa8af337a29c4efca5a13fbbca76"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "4d0f65e9d6cc34dd79b0c98eda050bca"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "54b4bd2dbb5976083e5dad5fc040e3a2"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "c758349801c88ac308c87ba536940d82"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "475af29bc2e7a30a22f9d5c3235094ca"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "d90a6d77b84a872e93df802d65c71251"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "29a5c821c48444a1aef1d00312b197a4"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "170a20d49cadf363fe32364ac432d024"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "fedc07aec3299b6270f5ec0f310d2166"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "7ed35a5ccb3e727109d2e74f76876102"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "e3f1cd48813bb59451ce79e62d929e48"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "877651d1be560e18627af6d06bc00c8b"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "8b93f83891e821d348f7675c7a1381a0"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "ed212441ba258d464ef72cfe5944fec1"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "e435feeced243eeda163da22c12bc4f9"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "863f8e2c3bc0140cf9ebb7aba6ab9a98"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "dc6bce56d6f2a487b82b5c0134181707"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "2920e47b0b4f9a570f6927ae16295705"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "4cc88cf47fc8c0f481289c37a3f7eb18"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "4191fc7f240b4b390bf3da603da2103e"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "ffcb7fc9cd51a78842dabc27f89cbc31"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "63b1d16bb377b62b1de5afe5202d8695"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "e814cab93489f824d53190f5eed83d3f"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "3d98d16d69170d03d164556519afea90"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "8d01dc9fc3839f1658edb39f9f7b9936"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "e9d79c8862637e16a64713b078526580"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "a7049cd6cda8ed5321afc4015773d6b8"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "197bd172810c49ce9953ca8e6bf7a4f2"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "917b34b065ea53102b06532b0b7a81ad"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "33f911f28771c0c56560a59cfc892419"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "bad2cf23f4fd4d6b9a9b3a5468428e3d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "532615813785d8352b12f3e333e23ce9"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "0e19b597fc93c83c6d859835885aef5b"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "7c56dea086170734f2ff16f8002eabb0"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "a9726f20c3bc8a0716775d1e0077c36b"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "1421e3ea2f5969293e4e732a71f791d0"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "4730e185848bd41131f0ac0e84e1ee9d"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "ddfd2ad68ea361f73a782af754d62359"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "1483451ed59671987fca56fe226caba4"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "85bb90d7d1ee605ee601f27630f6c52c"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "c680ae6556f6612cf1916d9e85a1b281"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "933e40ffb368ebaf87a312dcfe52d8aa"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "855818a4742fb3244f9406a243323853"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "5ae2cee3793e360a9d7b81aa16a30a25"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "315cde2f91a39d8784ffcd09416d385f"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "ab43ac09fba25dd11848ddc386e88ee8"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "b6085b3e637dccd9d3ef499f0f31a67e"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "c50d2f9acc57d42f53e3ac9432bee313"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "245bffc940a42ffc9f5fdcf4df18769c"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "81fba3fa9eb74fac5a750192fd7962c9"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "d747c33d2aa67b1a8d11833d6aed1de6"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "90cdaf9f851f5b53687b07fe9c24e895"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "a8c4308a4a8e05821558b47161995b65"
  },
  {
    "url": "404.html",
    "revision": "a93d9e422abddd3c4851ac2a04ff0f02"
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
    "url": "assets/js/100.a44c1c9e.js",
    "revision": "f8e771267baca7a383793d285f1da667"
  },
  {
    "url": "assets/js/101.b019a552.js",
    "revision": "9afdd94e5c8ff7937195e4b5eca4bfce"
  },
  {
    "url": "assets/js/102.70e2c7af.js",
    "revision": "b409d2b1535349878f47870c0ddb0ea8"
  },
  {
    "url": "assets/js/103.cd067644.js",
    "revision": "a4e53b12c5f005006af1e234ed4d5b5e"
  },
  {
    "url": "assets/js/104.a216dc4e.js",
    "revision": "14607024f240d9b0f220395f142636e7"
  },
  {
    "url": "assets/js/105.e7322bd3.js",
    "revision": "7c31e056772ffcb965a6301e2fd9c71d"
  },
  {
    "url": "assets/js/106.3b496805.js",
    "revision": "23a8eb753ad0b42ba1cfe99f960fb6fc"
  },
  {
    "url": "assets/js/107.4c8eb08a.js",
    "revision": "5942306cb89e960db623a8ebbac96eb6"
  },
  {
    "url": "assets/js/108.26b2acf9.js",
    "revision": "b861c7446a6e3796d6794e1b61bc007e"
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
    "url": "assets/js/110.df1a5bf8.js",
    "revision": "f2e48977499f312cdfd2fc4c1fabac49"
  },
  {
    "url": "assets/js/111.63e378e0.js",
    "revision": "f5bdc7465e15ea8e6db8f4331babd477"
  },
  {
    "url": "assets/js/112.a8c82598.js",
    "revision": "d96a292ac13b7a2ae5c2e4a42986ca72"
  },
  {
    "url": "assets/js/113.53a9e427.js",
    "revision": "62cc459ee9c720b8e1ec42d7bf6d0c6b"
  },
  {
    "url": "assets/js/114.8b528527.js",
    "revision": "64c0e1ef333498bd17fb710c67a64da5"
  },
  {
    "url": "assets/js/115.386fc380.js",
    "revision": "70a9079e1425e93d63f08484e6b0c6d4"
  },
  {
    "url": "assets/js/116.cc92d03c.js",
    "revision": "614886471226909435d81e61c301974f"
  },
  {
    "url": "assets/js/117.3b2e20dc.js",
    "revision": "0efcd439b011eee6a7fee38820e4ef43"
  },
  {
    "url": "assets/js/118.78d76382.js",
    "revision": "a6c953418632da56f3620cb10e5866bc"
  },
  {
    "url": "assets/js/119.0c15f6ab.js",
    "revision": "5ea2e945b0bfe8b5aec081a0b81bd055"
  },
  {
    "url": "assets/js/12.0da45694.js",
    "revision": "ee1c53126e71b5d592e4e0d6ff12152f"
  },
  {
    "url": "assets/js/120.e57223aa.js",
    "revision": "70f2a45ef31d775c400e923bd97b71f9"
  },
  {
    "url": "assets/js/121.dfb110cc.js",
    "revision": "aea03a435b438e960e44c59a128208bf"
  },
  {
    "url": "assets/js/122.855601c9.js",
    "revision": "98073d15043aa9996b51a6f8bcfc5d67"
  },
  {
    "url": "assets/js/123.159be8de.js",
    "revision": "3732e5517bd1010e0ee563a91b8d8448"
  },
  {
    "url": "assets/js/124.bfb0e4d9.js",
    "revision": "7799d7f25ec1465b9987bd5214e2b2c0"
  },
  {
    "url": "assets/js/125.1c32552a.js",
    "revision": "22b3e36c80206418c779775f37f85b08"
  },
  {
    "url": "assets/js/126.670d0820.js",
    "revision": "8c6e3cbd15a20eff8fb7773279f668b3"
  },
  {
    "url": "assets/js/127.c29e808c.js",
    "revision": "740b2352394a7be64124d36d3ffa7835"
  },
  {
    "url": "assets/js/128.a89c6824.js",
    "revision": "febf1f3341a38f3b7b00a4e4361a39f8"
  },
  {
    "url": "assets/js/129.57877b8f.js",
    "revision": "da44041a0c77483cf25931731f8d1d6f"
  },
  {
    "url": "assets/js/13.a674d20d.js",
    "revision": "422d03e1bacd787ae4e128053c363dba"
  },
  {
    "url": "assets/js/130.4102a012.js",
    "revision": "c87928ef0205732769653480bf2a2c09"
  },
  {
    "url": "assets/js/131.caa3a8ed.js",
    "revision": "475288522252c8cca83ba27e6e3c2945"
  },
  {
    "url": "assets/js/132.9d8b2cf4.js",
    "revision": "895fff020f2da228efdcf6088fc1f34a"
  },
  {
    "url": "assets/js/133.c3f6c3b3.js",
    "revision": "0f8d15beabaa958a842416bf9e2df61a"
  },
  {
    "url": "assets/js/134.a119a757.js",
    "revision": "fb60082753ac3ad38761ad0cb1b0792c"
  },
  {
    "url": "assets/js/135.9c13c886.js",
    "revision": "df4540d648f2c0be90b6ce5042d09e6b"
  },
  {
    "url": "assets/js/136.03311d00.js",
    "revision": "694dea87b2b12149dffb537de2a83629"
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
    "url": "assets/js/139.4d3a3e54.js",
    "revision": "e630f686cfce712389e96becaae34d47"
  },
  {
    "url": "assets/js/14.2c0f86dc.js",
    "revision": "4b7e9f2dd8698e1a4948a652cb1a7b48"
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
    "url": "assets/js/144.68ea79d1.js",
    "revision": "5b0a6856a527c1f9e24fe28c2f097be3"
  },
  {
    "url": "assets/js/145.f410a057.js",
    "revision": "39e74a6ef607c16ba80d10776b16c72a"
  },
  {
    "url": "assets/js/146.3aa6c615.js",
    "revision": "8cdfe17a0328686a310d7685729d30cb"
  },
  {
    "url": "assets/js/147.87951906.js",
    "revision": "50b88bb2f454728056d309ef5c3ed314"
  },
  {
    "url": "assets/js/148.2892d8c3.js",
    "revision": "d34794f942363837e4a124d81b24825d"
  },
  {
    "url": "assets/js/149.dcce7006.js",
    "revision": "fc7e43f8a015fd5849488520e6956226"
  },
  {
    "url": "assets/js/15.600b128b.js",
    "revision": "bbb761c1bc65f02ce81155b426cfeb7d"
  },
  {
    "url": "assets/js/150.e9a822d3.js",
    "revision": "0ef367d2b2f45cf88594693ff67b093f"
  },
  {
    "url": "assets/js/151.5e66b5a2.js",
    "revision": "df9e45774d759f4707b4868b2db81498"
  },
  {
    "url": "assets/js/152.da51ac44.js",
    "revision": "61c6bbb41093e996b0ec88df65259d9e"
  },
  {
    "url": "assets/js/153.3151baa6.js",
    "revision": "8a5645a5c3a9223a8a81e723369313d2"
  },
  {
    "url": "assets/js/154.b72c4115.js",
    "revision": "69118009e7c2943bcce7723a4bdcd8fd"
  },
  {
    "url": "assets/js/155.fdda82e6.js",
    "revision": "66189e96d92bd43317cd672606a5cbd2"
  },
  {
    "url": "assets/js/156.09fe6839.js",
    "revision": "c423a4b6aa8e82531a7429956cbc0786"
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
    "url": "assets/js/159.4992dddf.js",
    "revision": "bc7b8ee99c5a38ff8ba4a0567f4e1b21"
  },
  {
    "url": "assets/js/16.c3848914.js",
    "revision": "1bbec836d7c4c7dc7fd8753b350e1397"
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
    "url": "assets/js/162.b372afa9.js",
    "revision": "2528b9adea0a643ccf4c8b0decb72dfc"
  },
  {
    "url": "assets/js/163.76dad7d9.js",
    "revision": "b0e1efc2cdee4aa8cef7c2bbc6973189"
  },
  {
    "url": "assets/js/164.bc0f16ac.js",
    "revision": "93ad5ceafe75947babadfed75884a591"
  },
  {
    "url": "assets/js/165.06884a9f.js",
    "revision": "39b0c4d2f96b6e29daaa7a46be14e833"
  },
  {
    "url": "assets/js/166.df21d9e8.js",
    "revision": "510a0389062a4b16f2ea4deafb5f7eff"
  },
  {
    "url": "assets/js/167.c6333d1e.js",
    "revision": "c141fd65c9cce6e134f1fd518d2671e0"
  },
  {
    "url": "assets/js/168.dfd1f8c9.js",
    "revision": "35a287721b9d5768822e68c6990a8125"
  },
  {
    "url": "assets/js/169.6fec3e86.js",
    "revision": "e6e434fac5291a4d804421765e70d45b"
  },
  {
    "url": "assets/js/17.10ffbc52.js",
    "revision": "9c1f90f52e0666243aae13d7a7395a5c"
  },
  {
    "url": "assets/js/170.d50e7bc2.js",
    "revision": "c4caac825bd9b726ef18146d189fe8fa"
  },
  {
    "url": "assets/js/171.4dbf0329.js",
    "revision": "dfce69a06d10d791ff5feb5522f4455e"
  },
  {
    "url": "assets/js/172.e69a009c.js",
    "revision": "9f8623ab190ede2780e87d77a8a5e80f"
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
    "url": "assets/js/176.7070f8cc.js",
    "revision": "76aacfe49448a6a02a2cc12699319dbf"
  },
  {
    "url": "assets/js/177.32aba25c.js",
    "revision": "6a62d48bfe5931655fa8408767c9347f"
  },
  {
    "url": "assets/js/178.c80f5ef6.js",
    "revision": "eea0db62f912d58dd2d7a7d25e460f0c"
  },
  {
    "url": "assets/js/179.d5f20078.js",
    "revision": "7384329b2005e4069480b638bb298c8c"
  },
  {
    "url": "assets/js/18.efc0bb7d.js",
    "revision": "63b4ce651ec9f502b618d5c7dc16051c"
  },
  {
    "url": "assets/js/180.5a27f652.js",
    "revision": "7a9d2d33405fb2026a07bdfabf16ed9f"
  },
  {
    "url": "assets/js/181.fc37db2b.js",
    "revision": "6b589961f61d003d2c2ad3921746ae89"
  },
  {
    "url": "assets/js/182.f4a7444b.js",
    "revision": "ccad05abbe01ffe495b5f51def16fbe1"
  },
  {
    "url": "assets/js/183.14e2ea9e.js",
    "revision": "63c05e2cb9ac8036a32d04c8d52694f0"
  },
  {
    "url": "assets/js/184.6ff0b57c.js",
    "revision": "87358bb944860a5c791f1cd3558699b3"
  },
  {
    "url": "assets/js/185.67a7e08c.js",
    "revision": "0acffdd144c05594b787dd8cce91ec35"
  },
  {
    "url": "assets/js/186.12b2a19a.js",
    "revision": "f7f2cfd0050eb57dbc7f5323d3d3410e"
  },
  {
    "url": "assets/js/187.7c0b5832.js",
    "revision": "1194a271afa552340b8d7e3cc9434965"
  },
  {
    "url": "assets/js/188.bbc8175d.js",
    "revision": "f014c784eaf60f30efc2e65979427ce4"
  },
  {
    "url": "assets/js/19.36b005a1.js",
    "revision": "0bf08c8aa387331e9c61db2b578b35cf"
  },
  {
    "url": "assets/js/2.0f0bea8e.js",
    "revision": "fd08ab50995a6aaccb93bf495275c2b0"
  },
  {
    "url": "assets/js/20.aca6995f.js",
    "revision": "7480e7e6605454d01ea7619f872f48f6"
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
    "url": "assets/js/23.c73a584b.js",
    "revision": "a2633ddd615ea6944e93647332a6b2f9"
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
    "url": "assets/js/26.c38a1e2c.js",
    "revision": "23ef24c28db4d9830a79f353c8b18837"
  },
  {
    "url": "assets/js/27.01be5958.js",
    "revision": "e6c23b3d7f1a7efb98d0276ce1789a0c"
  },
  {
    "url": "assets/js/28.1aaf3087.js",
    "revision": "f382941fd36402a4194fc7ecc4828aa9"
  },
  {
    "url": "assets/js/29.d92f7ef5.js",
    "revision": "712cb5ec0c24029a5ccad888cb40b9a4"
  },
  {
    "url": "assets/js/3.975a3cc6.js",
    "revision": "95f308fde31f8c15b10708d217822514"
  },
  {
    "url": "assets/js/30.36cb8a6f.js",
    "revision": "67e40fa0989793f11041436669fffa56"
  },
  {
    "url": "assets/js/31.1ac7b760.js",
    "revision": "b35daf1719baf2feac763b997f204374"
  },
  {
    "url": "assets/js/32.31ae7def.js",
    "revision": "7269318a6c65951ddd5073b9c37ef7bb"
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
    "url": "assets/js/35.b89121c0.js",
    "revision": "a759d4531d929646c907afe650657d70"
  },
  {
    "url": "assets/js/36.948d8908.js",
    "revision": "48b0bb13df613ffd5ccf7457ac68374c"
  },
  {
    "url": "assets/js/37.fb33cc7a.js",
    "revision": "f3063b67357505ea14d373cc4bf8a66d"
  },
  {
    "url": "assets/js/38.58e1c360.js",
    "revision": "d646b56f2afaac1147434bf0983dc7f9"
  },
  {
    "url": "assets/js/39.9d124fa2.js",
    "revision": "b64eebdd84b7603c12890bee07c05093"
  },
  {
    "url": "assets/js/4.d218abd9.js",
    "revision": "b0ad698473879a57d11241be49ed8875"
  },
  {
    "url": "assets/js/40.46003d7f.js",
    "revision": "81ab705e37a257b7aca52cb33aac71ba"
  },
  {
    "url": "assets/js/41.d515f8f0.js",
    "revision": "83ad5594cc6955320bf57b00b0aa45c1"
  },
  {
    "url": "assets/js/42.f6e3a448.js",
    "revision": "38d9ba5fe2f3ed8053929c33f8e9c5b4"
  },
  {
    "url": "assets/js/43.5445fcfd.js",
    "revision": "77405b23ebd49a52df2a3f5c2ce519c0"
  },
  {
    "url": "assets/js/44.a90be45e.js",
    "revision": "4d7c9c7fc5049091e1f850c3abda157e"
  },
  {
    "url": "assets/js/45.85109c4d.js",
    "revision": "6f3615e1ec658829c5658254d7f8cb7b"
  },
  {
    "url": "assets/js/46.4125e054.js",
    "revision": "80e22d5f1dd59fad2787057ce1e2210a"
  },
  {
    "url": "assets/js/47.63e31ae7.js",
    "revision": "758f849c04a8fc9420fd5cf4f1aa3508"
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
    "url": "assets/js/5.9c77cbe0.js",
    "revision": "37b86e6ffc379e1e9007423eb2dabdc6"
  },
  {
    "url": "assets/js/50.ce779d50.js",
    "revision": "c23e819d8a1dcdc0d9be90674886d3d0"
  },
  {
    "url": "assets/js/51.46e1e138.js",
    "revision": "953a22e63d97780cec5df9295c441ea9"
  },
  {
    "url": "assets/js/52.76c298f7.js",
    "revision": "b3d880c1a6ea1356ee75d1c5090d247f"
  },
  {
    "url": "assets/js/53.a5c41b9e.js",
    "revision": "cb1b86cecf118a3ed638ab6d60cc8a1f"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
  },
  {
    "url": "assets/js/55.84a0dfa7.js",
    "revision": "f461d09afd6aadecbdbb2f0152c9bffc"
  },
  {
    "url": "assets/js/56.faa85996.js",
    "revision": "7e7b1232a469cdb9a0fab20b5a18615e"
  },
  {
    "url": "assets/js/57.1c095848.js",
    "revision": "12eea5dea1b17a975e4404bb91f0d24d"
  },
  {
    "url": "assets/js/58.a3049512.js",
    "revision": "4995646127e5d143bf62d5bd26ad7d50"
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
    "url": "assets/js/62.4878b1b4.js",
    "revision": "8bdbc3bc4d1d14343c5b7c29adfbfc8e"
  },
  {
    "url": "assets/js/63.99cbcf99.js",
    "revision": "fdce9cf87d5c20fcd69882c0335d0d8c"
  },
  {
    "url": "assets/js/64.480803be.js",
    "revision": "2d0bcde1af8448b6a8cd05b4267029f2"
  },
  {
    "url": "assets/js/65.9d905810.js",
    "revision": "f5039777ed57a976f40e09cb6f00f856"
  },
  {
    "url": "assets/js/66.7101cc5a.js",
    "revision": "11717757185c042be217a2ec18ea4825"
  },
  {
    "url": "assets/js/67.0848951a.js",
    "revision": "8aedb64e115616e7a6c20428b7044532"
  },
  {
    "url": "assets/js/68.dbd5a167.js",
    "revision": "2f82c54021c367c917974937ea908d36"
  },
  {
    "url": "assets/js/69.0f18e61b.js",
    "revision": "4ab904b58ccfd6f2ec2e0a658d36ccf1"
  },
  {
    "url": "assets/js/7.bceb550a.js",
    "revision": "f9112d8d605e272d0d6ac6195b75d7d7"
  },
  {
    "url": "assets/js/70.2b38e83b.js",
    "revision": "8a4499cf9068edeca99a9bca0c109bad"
  },
  {
    "url": "assets/js/71.34fcec0b.js",
    "revision": "682d920511338866aac151e53647f7a7"
  },
  {
    "url": "assets/js/72.da5b925d.js",
    "revision": "f8597e992d4705561411d53c4784edbc"
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
    "url": "assets/js/80.a2262882.js",
    "revision": "02ee5046abad426f2220539d4f602835"
  },
  {
    "url": "assets/js/81.eb6d17a0.js",
    "revision": "b6351dc6e7c87ec814f2d3174756ba3f"
  },
  {
    "url": "assets/js/82.e6c68a33.js",
    "revision": "be9cd13caa2d8ef73ca50060b91df3aa"
  },
  {
    "url": "assets/js/83.1453b2b2.js",
    "revision": "03754f4e8f618141027ce29cbfac94aa"
  },
  {
    "url": "assets/js/84.f88bdc56.js",
    "revision": "80ef1db1293dd42671378a1dca9f11c7"
  },
  {
    "url": "assets/js/85.dfd99d85.js",
    "revision": "b0549c0ba2561fe44ea24bc3cec76cd5"
  },
  {
    "url": "assets/js/86.a70182b6.js",
    "revision": "5a948b1b13b5385800f92eec6041623e"
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
    "url": "assets/js/89.5f0f0685.js",
    "revision": "1b7d4382cb903bbf216b26c1c9768a30"
  },
  {
    "url": "assets/js/9.eaeab872.js",
    "revision": "80cc0a8604fecec36a5940914fdd2dad"
  },
  {
    "url": "assets/js/90.4ad6827a.js",
    "revision": "3343ee2b0f4bde894580d9bf0a9d8c2e"
  },
  {
    "url": "assets/js/91.0802d655.js",
    "revision": "f3902dbf03d38bff967876e1442aec47"
  },
  {
    "url": "assets/js/92.9bc227a8.js",
    "revision": "7375e019cdb780d474ac5be29d0e7a2c"
  },
  {
    "url": "assets/js/93.52253ed2.js",
    "revision": "ad606a349923c3dd92bcfcf7923e2a18"
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
    "url": "assets/js/99.6d6f7703.js",
    "revision": "b957c3a45bfc2e003e7357b3731b1c62"
  },
  {
    "url": "assets/js/app.99bf665d.js",
    "revision": "0a91b9054a85a020647295154c42b3b9"
  },
  {
    "url": "index.html",
    "revision": "8722e6de0b48d1e98ba0e12262a7aa48"
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

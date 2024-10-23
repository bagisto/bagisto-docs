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
    "revision": "a2130b8b7516367b0c5de26ecc94a54d"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "486f3bad5213014907d4c86740ad6215"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "ed68012b6142a455c17b63e3a7bf2028"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "cdd4e592c478f4ba55df051bd6d4e1b4"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "a17a14a917a0ef7d59e64728645bd4f3"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "69e3ebcda091c1b7299fb6a73a048840"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "dcd71a0d24c37657fe6f8fa9a9670d8f"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fdd84dcb7f77564f65e2146723a19962"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "db1baa9f79d517bbe7bf185329a2b462"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "4c26661df91866df23ff15397f84f075"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "4b93c8d2d505ca8a319c1738afef58c0"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "59945b7b08f8739886a83a180bfa42d4"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "68f6140dc1ecb208c7a7fae027f237db"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "fb70b87622416992684b64e8579d4b2f"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "bb039cfb573200f2872f3d0238cc9ba0"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "eaed9e653ba52c7ce514e6b9f411242a"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "3b23edd9a7f6c4d7d91dd0a738eb4afe"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "949a568290bcc9954e50180c4c2a643f"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "c08057defad88c3f7690927a5275dc18"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "6bd32e39602d27706786709fa4805886"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "e64a1bccc5fd29d2e6729e585e461a33"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "d6e518dbaca0330099df2c9e37e145e3"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "f6cf6377bfbb324107caf026a03b8814"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "15a79f0638ab9356b680bffb8fe70c86"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "dd9bc51f216833ec5a7a83717fa8b9d1"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "feb5ee9b5a4e49f8bf2478e1986fe778"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "f25b6901ab0b847c456595109bd529b0"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "a0aace9a0bb84ca294a975432f8c0f0e"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "2a7ab5170c2524cb638195680c0ead22"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "6f23007fb5b06dd9735cf40d70148571"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "2239155e6aa72af32704ccdd7b95c940"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "6cb51e316a3a802b06fa988173b5ff55"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "2c5ce5a657651b030ad0a39c1dbe05df"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "b2b5096404800439e05cf23ffd401d44"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "969d7078278a8864ce81fc8fe245a1d2"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "05a1fe54c5fe2f9d58fa729ebe0fe8dd"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "f3aa7d8a33a9a465e00121f80d8824e2"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "f4c39c823c0d89344f541ccde75beddf"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "5506269b74892fa8cade2293c554c5b7"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "dd9e86a70ec0c95171f19d4b2432ad6c"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "aa9d1fbf2ee8eed4b3731a51b9629109"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "95eedf3d7547725f5c572d45c9a3bead"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "7e54873f19a6b5d429171dcd9d1ac241"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "7fee427085f8667d59bbbf449a5f12f6"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "6a0564ea51d363e2904f14b780786f80"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "adf3882e1c263b6aafb938bfa57f1598"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "28a6f9dd7bb91b96f0a759e6c3642888"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "d5c011f2765dc6a4a5e40921da27d4bd"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "0b8de87c6bfeda55441fd102a758f282"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "0e2d5a4e56e8c1ea807a068e40315e88"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "c69c4be42198c4f270aa8466eed7dd96"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "f50b14dd156e94c5bff673c78c819bba"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "3f0d63f9c31c57b6036ecde03ba0cc29"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "55aa703f0e6f9abe537caf978c1b063d"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "e58d7ea3a52331c42f7354d8a775977f"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "efb4de30728f6d259b91e56582b7cb5e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d0e566a159e754f062077d6155266ccd"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a5373cdce4402c300a326da974bd6173"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "11d596e413cfec17aa618c10a8818a86"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "517527ed7d85a513586f0c331f93db20"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "52cd1d88d824cf2365b711dc6fa67f95"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "5ae4d141491a9970a9e11b28e6bc9af7"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "75d5ea2a53807cf47ca38f069aac379c"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "c6be6d6723951be7daad3e5d87b6c7ee"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "85c809de25b4a2e9788535b053f9ea34"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "a236749e07c39ea2d9dc9fd46d527891"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "3c599d5c53a084009d20871bd1c6399a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "354e51bd81303035a17ec489eb7ef63f"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "09c2fd29423b8314493214eeffcb2258"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "fb4e1dd59ea851fa201bf2070b2d2fca"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "154910749a79fbf8c997555d9661f7c5"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7de14a695a7d7a97cad5fbc3109c1576"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "249bf0989d5e03faf9088eede7ddea6b"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "2c975e49daf90b0f4bd72a801831efaa"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "f5773e6f5d58e5c2caf369d805283743"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "688d93c947201754b951212999b367cb"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "450913fba789ea42f49b515cbfb49bb9"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "8fcaeea7df6eb61a2ca32a8dfda1dd7b"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "36e002f3185034489dc9d4ee91e857a9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "9397bd139f4c7247f03084016f5704a6"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "0ff548d07ef70364983d90ae0d1ae9c5"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "c5729ce2fb6348b54626539f790d965f"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "51f5625ac1e1b8efd76b2e5f96c1f296"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "346634a10a66331e9453bc3b1d30dc6c"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "fcca1fe24a2796f36a060a6485cc1fb3"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "4f5e235db24a410751ae5659ccc40148"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "d39e54698ac078d686ffc0dea16cb037"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "2118e07d550864f8ab89512b4b07a237"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "389f33d447749dd9be8ed56208f54f2f"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "e4fc34710bd22e5abb097ca0991bed24"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "e70c528d85558b8daf54f9206d958cec"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "3c8a3ad427fa675c12d5b631a74b231d"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "55eda057b9119b5a1cb189d97bbfd98e"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "7ee6b3d9a9ba2807d15b653fd483f06b"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "a7dfe8a8188897093523399730e7adce"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5a2f813ee62d90355b85a3a3aafda622"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "ae41249d21afc6bf93d4ae75bf23310a"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "38cdabddd4be8e9df0206d09a0277a84"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ca7de691dd327a0c60b1183986687a43"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "09e9bf2e62b18404bfd7f7b52834808a"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "b80702b0e48a7553ee5f866749c8668d"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "addd032332a6244cf0d0001443b8e5d9"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "55301fd861104e7d145143b86a2a4111"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "176abfdaf7227630d2a7ad2885d07b20"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "9e190aba966a720d51ea0efae8930e2c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "027b31cce0504370ee39268ea12dee7a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "35b48bf424bd2111c1e2f6d7210ab231"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "cb7f0a9539eb9a918b2325b3700b11e7"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "662812c709eaf5de60c8f16f6159440c"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "8a121fdb38c9d281a7a22361eeb5949f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "37bcaee6d3a38c8e5f35f22ccc9249cd"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "2ddb54956754d4a1e80d555a9e10e753"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "3ed2b617c66d26db0d0c98553d5ec988"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f301c9344036c7365f7271a1d7d8919c"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e3eb5856556bb71a8890617a42cbb3a7"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "4e7913d74c4628bee32df4e61f664084"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "e77bd8fa3a079a1089c5c149be08340a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "a6f1111d081771e4391e7495d0961384"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "70f552721e21aaeaf80bf84b166b4e4f"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "fc402150e203ca56f40427501181320b"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "f23a3933e9e5c9dd9154854f799dc061"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "38fc062f6b1463af8fe1e99f550095dc"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "650a0ef9817da12f3d645f511d0b11f7"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "983efc2732a9fdf16e7f4b4b3ff71f08"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "b3c16a8c89c7795b43d4a436fcfb9a3f"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "85717726d2d23f9fc9e5c07ddde11c3e"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "0f1010ab2db19770104ef50666848f3c"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "5c475b1245035463cea754bebd1f5240"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "dc22f1d65e7a2703e21ee9a63ea38b4b"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "bfac6da3bb0a3728979b366086de6ac4"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ef1e7f9068bd8a841f425e48959c859e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "be31c3e1596566db1f9c5467a2d3b162"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "03cd4b969a1425d07db0af503baa5867"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "5251df3b67c6fef696425cd0e76e9d84"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "8b980c45a49256d66679d1d388dcba0a"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "3cea8df5283b6cc9efcd7c96ac70cd72"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "f65138e43ba5d91713735d48c505856a"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "2cf0ca6808b8beddf9594ae313016d8b"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "a095bcdc067d3372d551d1b432f0474a"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "27b5ef6c3e608904cec5cb366efe14a5"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "ac4d47f350974777e05b9e9449e9ce1a"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c7622fd07b0cc34a4265918e4ad572e4"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "fa0d1cc7715597e81dca24ee9ace39b4"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "6411e3362a76ff915146ea4fa882bb09"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "f7f5f7c7599c6ec687002d71f7b57c0a"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "7716608c9f8b8cd838fe1b3e56b7370b"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "0c244850d8c7ec30aabce67dc6f58462"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "20dcee4d643b3586cb4d80ae5c203b25"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "a787b41dc8143e8115a965640ee8f8ba"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "927387d0114f7c4dc7c72dc26a479fe1"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "583ee145152c49d16111ab8828496b11"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "def1a1cedb7a34e74d0700bffce32261"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "0e865a4d26353749a7484c0e2b33e649"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "376f956354cc4cdace007454a379eb87"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "bd549f0214ebd7c29089e3f32e9f609c"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "fdaa8abe2d2a62489171eebb9fdfd6a4"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "17e7d77c5c8fbbcfd614c7fc2c8c0a42"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "2404fd9d76c365299660c0a120e62024"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "43f71b672bd9454d2c7c2789c4f0fb32"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "cf6c03eb85a94defaa62a97c74bd091d"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "201812d126024418a2095506841d32ec"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "b87046603480f387436536e22f575d01"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "222572ff0ffa334ebcaebaf83cddad2e"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "2cae763bc358872b05c464b3abba2090"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "2b86c8658f92b8c8645e4b12f1919ae7"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "9e12790ed428a933ee3cdedf907b68bc"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "8682f1ba3698bd6ff6fe508cdb591d2a"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "074f1fd646f63a3303c76e12a0b3ca20"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "61968c342f5319c373902f883729026d"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "43f63217d876b6b1c5ec931b4497c46c"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "0695a9c65bf24c2da7caf4ed799ef4b6"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "428f1157481106b48ab03edd1765b4da"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "b826d640358954feb904280dd9b089f0"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "8ea6500e9619d291b273311c458e594e"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "711636496e66503387d0965ad9d576a7"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "97c5bf1265937bc244f1da04da1ec20b"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "d44b85e921769773b8098bfef4d80e4e"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "e6f9ab81e2a41242a9b8f39117f2e2f3"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "4e3c7030fa6f3048f11f669025ec3f8a"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "e9e54810ffd67465cb7bf5a429670c73"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "3d92c05e1ac9be9885f0e2532e0ff6b1"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "9f276cf7665e438409370f5f1eb93096"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "90c40a858a1b33b7562172a4a779531d"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "9a47e1c7bbfa8ab9b039768dcc06a281"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "f939fdf8a03d60bb034d739519c8d6ac"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "04cb09c9a535b22434c95ca64f3c6d61"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "c965fedf0a77ca9c22b48ad876a3bc04"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "43e3bff89c65413bd361c6a454fb4c67"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "ac827f4aa424f9ab69989ea8e8c2a1b0"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "56fb8b8e47062f3914a36f6c12878d3b"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2ae545b6e5c0e42498cec59361a80bf0"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "17db1025c673d55c1b5936bf49450834"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "a27f3789af742778adaf144973ae85cd"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "37ba8ef2147c30a14b1b7481b0fd66ca"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "9fa4b619177142d3bcd781bc026c3b98"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "d093eb787e0f80b7891fc42d766f3397"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "fddce5b180c2d9a5962e02e2e5950bf8"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "f97e0075000ff5f311b882eb9b01ebd7"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "0bf607919c01591299c5dfd899fd214e"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "c57d77d474caae8fa978438cee6c18bf"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "d25cf030d572348e5e138a4f638e425f"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "5a510dba74e78e9d7a9a8577499fbe99"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "467b11a7909263f6f3f12744453ca1f7"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "350fd13bbbbd7aa2931bfbe717356269"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "3896b643664e7a7c21ce9a54857fa75d"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "4f31392aeb2d21b06e5fd668ce47aa57"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "378f9d38aca93ee8d587af93f4959dc1"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "e1cf7fb574c8a0ba8f96cef902dc9c0e"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "4df41a7540a1657b04fd133db0475180"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "033e86b7b814a12304c3cae8cf4a65da"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "01c4a0220a4ce1c0da9a25a081c7e49f"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "a406d1dbb786d6d003a960e4efeac214"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "b97130cda903abe8bde318babda8eba9"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "3dd5a582f0f07e7c2d857762c2fe1458"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "3f1af73c9e10be27dd310d1238caa929"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "06b95036fb327f56e0c103d49a18a227"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "c29e8f2cfdcf802b01035108f0db2a50"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "2149d7fce95e4196cf2e01d0ca00f545"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "e9cdcdf80913666bad3bd17b1a3b0705"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "bbe2f44ee048475a6a9641411c6038eb"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "4640e4d3c95c26a11946ba9d6fb4a0c1"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "c9dedf09f19d88c61c90c60c30435501"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "c00fa85ebec948fd281566841241537d"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "47cf2865a5f539b8c5471ba9a177f0c1"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "24341773eb9b1f0b0e815eade136d8b7"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "eb08573f12ca0dec61d3959832cef5f8"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "f1f6980d240744c436745222e368b447"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "998b844fa7011ea1eb209748f9e73f2f"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "3e90adcf20ae0c1a413bfc4b3a092fe3"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "51fab7729586fe4f7f44c265a797c068"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "14992fd9064dc424f949a8e64a568153"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "92391cee9312e315cb0f536c666d34b7"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "654ae3b48849a4e7cae0bc32951786db"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "b8f84cbfa88e4fbe7a4902cd4374a79d"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "056ecec5b54d2ee0e6863368f63535cc"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "a7246266815b068c6657f0ae7a1da3da"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "dbc24d1e57890cc8266ef72f744cb229"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "bcbba44a2138e0104ef103d7a0453b86"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "c7b4de967e01e40177268d4ce9f608a6"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d4cb1e9dcca5b34fcd80a4465badf761"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "ae7968a6dc120a6ad2f87352f99b033d"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "7230f23b948b41a8fb78dbfd7349f993"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "20350455aa07a6d348bf42acd04afa90"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "3d1591908b522741b4cb01b28ab6cb6a"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "7f379422c496cf36ea4209a78bb3a29b"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "815852d896d711ef9dd07ce4001543f0"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "df1e3d8d9df3fdb9231881c5552378da"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "acfbf7ec7cd13a0fe519a17688f9393f"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "81713cac4d073fc657aff9743bda1e91"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "484ccaa97a83ada3092267ab3527c9ff"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "69d67fc00d8875039f292e4aab1263ad"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "20c3003f71cdee74d5ec45c01199f1d1"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "9d07082e565dcdeec8d73719a3a8787a"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "1f2b2d706971281354ec24574778b2a0"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "06535a79d5d24d6ecc691e1f25163dd4"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "abe109a41137ba10c7d0fafc6b29d4d6"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "efa490bcce3d4a2dc0343f8ecec4b697"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "a5f8b4a8f9fb271131b506073ef2869a"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "08876315f754fa2c795275666ad0f92d"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "8b7c5f7613e474c6b6ab27ed977a1248"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "c0b0e8e16451e541fca6dc1e035b3ab0"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "22f91df61cbade32b048d71fd5ec8fc3"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "29deee0aa2d5f486915a6655b07bf724"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "26dea6f6f3916d7d5ff8eabf3e0b0337"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "a42b41941823b41a1cb4b36bb1447a51"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "9cf70587aac5f9de029e5e98e1a604a6"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "802ec0137dfae1ba6532d24c9415196a"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "6b5abc9597a385ad97395c841a03b579"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "a7fb5fba6676e4498da9d160dde2860a"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "faa45a15a699f6595f37ff9d0d3e1605"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "82277f054e679b2de9b777fecd69643c"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "25a539833503250ef89aa97bbc2a4bda"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "dd6355162973b1cbb8564c9ba20fbf33"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "9c0faa916e81275489efd3822ebf41a4"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "05ae8228cd88521fab21b841ab5c51c6"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "a0cf8fdcab919e4fbd263fe0c0f2a74e"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "6794b2906b6ff8913c27cc421f431f3e"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "b8c18630b76165b2ec06025c1b57d04b"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "30a01e40dfbb13eea55ea3f663da4ee2"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "e908cf746c64f74575de4ee2439bc205"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "5c0bcb075f58cb8f2eed6c7c8da844d6"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "0b70e13b375d1d7fd0ad43f842caa5ed"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "e46c32594a35c5e7f6bec0e7a04f043a"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "25a6ecee3e906d9047eaeeaf9bc893c9"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "30e81fbe6d40c8798e47123f09332aac"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "a895f8f7ff3984492755706d12bd1add"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "ef17fb2d90ae3f738c9dcc09530cdfd6"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "345e322ed80a76976667be429791782a"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5013b85b43f240cdea99053683901f8e"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "197ad2a7a7dd16b9abbc75a9762916eb"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "648aef647cdda6aaba58a070b461d917"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "ec8409b8e1fb4d11ad68030a555759f6"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "54207f3911e2d3d80675742ac71c9d97"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "1dbc52b79b8e1b8fd35c4314f6b965ca"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "f61ad935272fd9b2e57f4deb4a7fac09"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "da69b55f74ba2cfbf7d8ec55d42e073c"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "7dfcbd8e77fca83a65bb3c4e8c062c31"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "f98fad658e55c4f981d57de44633d981"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "d7e773d2a1b27aec71479fe85ba3b6f4"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "62b9a62d76850559c8199c35002ac2cc"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "4d9ed5e9b64764f68362b08b7f83c01b"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "3582d171ccd1ab106ad126cee54f1336"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "fe4a5c9101daa53390c421679ef5495c"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "734860afb7574253c577327d2bd742ea"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "15afc4f6e6847ec01ab5c0a6d3ef5cf1"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "78a8983b8934c28df4bd60da2592b32a"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "d2d60a5c7eea3faf4ef0d5782b05a514"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "d77d90aeeb45a4fec3aa4a1436072faa"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "b85d52920eefb512951fc2a5a04fa090"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "7c0ba25f552d2bad92d4b595e594fde6"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "04456b6b7265ecd8d1699ccf8c7955a8"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "2e77101fe2e04252d70174d6f09f1ec2"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "5e0ce452f753f9586ecccd61504e967c"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "d44af63624420d7aca49d2a8717c521b"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "adb07c5fa555522bb934152869a3f08b"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "86755fb5357a68655d74d851da2d9182"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "8bff840dfb4b066c287672a5b155abc3"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "ac7dc0f185b06299e98d3eb25f2b7ce4"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "523048d411aceb9e1ec4ee83d534314f"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "dc29d5e016396669b7e06f586bce2848"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "c2d696ee667d8a4d32571683e43980ff"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "a03ef1564ccd606a77a1e6a74443407d"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "6b3e1e3364fef6a90e906f41261a410f"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "3a6d23e45c13dfb126eabd16de79cf3f"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "e9f88ca346c5cc9c4388de66cce603c6"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "184e8e467946a854739aeb696f4092ad"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "d8ea92c0fe3732679ccd35417a98ff91"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "a969520d661ec411648b49558a900ef1"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "b9077631047deffee3c9bd7ab6dc63e0"
  },
  {
    "url": "404.html",
    "revision": "ce24e2a13e2078589d0589cff099c947"
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
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/1.72f1e422.js",
    "revision": "bc8155637c6dc68a5277da9c1cdaec33"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.98fac64b.js",
    "revision": "40607203702bb1b83a3ec3b89a850074"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
  },
  {
    "url": "assets/js/102.d468772c.js",
    "revision": "8b7ea1a6ccd2b3ccfce9328b4a05cfa1"
  },
  {
    "url": "assets/js/103.04819593.js",
    "revision": "105658a2e7742811cd8c1ef6f845c8bc"
  },
  {
    "url": "assets/js/104.2bcaf08e.js",
    "revision": "09a06c982bde8ce96cce2e0559479de9"
  },
  {
    "url": "assets/js/105.1ea7e793.js",
    "revision": "56b6d853ac0047ef70a2af3ea4f2cc85"
  },
  {
    "url": "assets/js/106.f8da0760.js",
    "revision": "3bd828a93ff55746c2f740007b42f9bf"
  },
  {
    "url": "assets/js/107.ee8630dc.js",
    "revision": "aa28805fd75ef67cf9015d659be98c27"
  },
  {
    "url": "assets/js/108.d89ee50f.js",
    "revision": "5e60318094cbde0679609396474931d0"
  },
  {
    "url": "assets/js/109.4fce3fa3.js",
    "revision": "f50251b52d394643fee5b871631014d8"
  },
  {
    "url": "assets/js/11.0627d0e6.js",
    "revision": "b315ec642b4e6f0d74640f34df313087"
  },
  {
    "url": "assets/js/110.19b4bb0e.js",
    "revision": "3f815ed9e42685592e8d9d913b915934"
  },
  {
    "url": "assets/js/111.a6145704.js",
    "revision": "d2c5a5a0e188d4aeb6cd9befbd1be5f2"
  },
  {
    "url": "assets/js/112.7ed2342e.js",
    "revision": "146dad5bdc4a29e0065a09b479225ab3"
  },
  {
    "url": "assets/js/113.a61f0cec.js",
    "revision": "4d84eec3b7cba650c78afeabbfa1746d"
  },
  {
    "url": "assets/js/114.b635a4f9.js",
    "revision": "6fd6f04a391ef1213fd1eb8fc26b947c"
  },
  {
    "url": "assets/js/115.2a994a20.js",
    "revision": "c734006ecf3c580284a2416f2c7e3cbe"
  },
  {
    "url": "assets/js/116.01db7408.js",
    "revision": "b3b7f742f2e93bd3619fb6277676727e"
  },
  {
    "url": "assets/js/117.75bd656d.js",
    "revision": "159a7c74e0b788879d12940460eecddc"
  },
  {
    "url": "assets/js/118.1995ec71.js",
    "revision": "cd712ef059ea5c798d381315006c01f5"
  },
  {
    "url": "assets/js/119.a6a4c979.js",
    "revision": "49c5ed9db630a655881a8873ea995690"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.f7957dcf.js",
    "revision": "f7c92f53340e4261dbc1e3574f872a5a"
  },
  {
    "url": "assets/js/121.62ad709e.js",
    "revision": "3679146969e25300895671f1d5e02988"
  },
  {
    "url": "assets/js/122.f8a751ac.js",
    "revision": "4d16d12c119a748696c23cd3240d28b3"
  },
  {
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.6e66ad78.js",
    "revision": "618daa22134c82c2d768395e3395c516"
  },
  {
    "url": "assets/js/125.a66636e8.js",
    "revision": "dfb72e3e5ebc820dc07b3de560da539b"
  },
  {
    "url": "assets/js/126.abb88bc7.js",
    "revision": "c0131c0e1cc7dc05efea99c3bd344939"
  },
  {
    "url": "assets/js/127.f9f1a195.js",
    "revision": "8739037f1ed07f0b1aff9b239d34b5e1"
  },
  {
    "url": "assets/js/128.0ca499ae.js",
    "revision": "b68a49934a319f3719d2a18393f384e5"
  },
  {
    "url": "assets/js/129.22a256b7.js",
    "revision": "5eff25156b06c67d2be2d04a29067efe"
  },
  {
    "url": "assets/js/13.db31692c.js",
    "revision": "e70c41c80785ce1f8cfba51f65462343"
  },
  {
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
  },
  {
    "url": "assets/js/131.e9cb6f36.js",
    "revision": "651df35e364ceb8ce00544d6d7c9d686"
  },
  {
    "url": "assets/js/132.ba0008a6.js",
    "revision": "544547e75f33f8d0f420efcd14b40525"
  },
  {
    "url": "assets/js/133.a89599ac.js",
    "revision": "1235c3cb19e44882b7993ef4d9f09642"
  },
  {
    "url": "assets/js/134.882aa6b4.js",
    "revision": "0413a103a24ae6ef2efc81c19e298f82"
  },
  {
    "url": "assets/js/135.a8df44ab.js",
    "revision": "460e69940edfc0763dc60aa5ff3dac6f"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.461abf78.js",
    "revision": "6c48cac07d5e46ff42924ec5aad06fb0"
  },
  {
    "url": "assets/js/138.87631849.js",
    "revision": "963b0e655d8e84c8cf840e2ecb458597"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.6108c098.js",
    "revision": "60de395906d6d7820b561d09ced9f2c5"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.4fbcdc31.js",
    "revision": "95c18a86264863861be1435b71c6feeb"
  },
  {
    "url": "assets/js/142.78e9515b.js",
    "revision": "bb106faf0f92b5e2f82111868801a301"
  },
  {
    "url": "assets/js/143.fa7420bb.js",
    "revision": "578d240d1a48ae7634717d643c6bc61e"
  },
  {
    "url": "assets/js/144.b1d46a34.js",
    "revision": "955a378b09abfffa2e00a90c63ccf176"
  },
  {
    "url": "assets/js/145.83ceb845.js",
    "revision": "f3070f69bcced095846f814f77646041"
  },
  {
    "url": "assets/js/146.47102848.js",
    "revision": "38351577a2eabcd2c795315c89014519"
  },
  {
    "url": "assets/js/147.be334db5.js",
    "revision": "2eb22999ed19d3c97b0bca8b5d737c61"
  },
  {
    "url": "assets/js/148.7023835f.js",
    "revision": "a38b72bfda34cce25f1bca752d32f153"
  },
  {
    "url": "assets/js/149.adab3b63.js",
    "revision": "b240be57f044476d4f78bccd79df9184"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.ab536088.js",
    "revision": "b7afdf777ec0b71f33d2772727dbc234"
  },
  {
    "url": "assets/js/151.d3cc4e10.js",
    "revision": "d13dbea8ec280d1568644e4f2d9f78bf"
  },
  {
    "url": "assets/js/152.4d11478a.js",
    "revision": "e6f02d47480331cc8e6029853178f799"
  },
  {
    "url": "assets/js/153.f0fb9244.js",
    "revision": "eafc9ab61c44ad470e4e79b800b6753d"
  },
  {
    "url": "assets/js/154.7457d3ef.js",
    "revision": "f551c7139f4c4560ff91d47950b76aad"
  },
  {
    "url": "assets/js/155.e7b805e0.js",
    "revision": "849e63b8d758f46192f78b0c2ce17240"
  },
  {
    "url": "assets/js/156.15417dc6.js",
    "revision": "b03e0ef9b691b0287e3d70e2ad210993"
  },
  {
    "url": "assets/js/157.7818768a.js",
    "revision": "43b5d0b02b7305a0d0296bb8783fe85e"
  },
  {
    "url": "assets/js/158.3b203f16.js",
    "revision": "4c69df09fe3aa1ccb5dd4fbe30be616b"
  },
  {
    "url": "assets/js/159.b2554ab9.js",
    "revision": "423324b284c0ef07cf5fadf9a1e44963"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.bafa777e.js",
    "revision": "4bbac1987179d220bd5d25f4590c2250"
  },
  {
    "url": "assets/js/161.a63f5d60.js",
    "revision": "9d220f564575a7bf9e81d99f48dc0a86"
  },
  {
    "url": "assets/js/162.efbd9fe9.js",
    "revision": "1b2c8d631e18c566a0292ab08cf38069"
  },
  {
    "url": "assets/js/163.1e7a0022.js",
    "revision": "ce6967b8bbaf46c8c57978a96c72f0e5"
  },
  {
    "url": "assets/js/164.a5bcf745.js",
    "revision": "065ff9c374a18a2f846697a0c56eec83"
  },
  {
    "url": "assets/js/165.222fd72f.js",
    "revision": "cc46554acb2080abc9ad117e6b5ff120"
  },
  {
    "url": "assets/js/166.6e9d8bf2.js",
    "revision": "8ff5c19b25edd51aac300e78cbca0b39"
  },
  {
    "url": "assets/js/167.f9d5b81e.js",
    "revision": "8af1e7660f88edaeae243fb52a180de7"
  },
  {
    "url": "assets/js/168.c24b740c.js",
    "revision": "34d7ec87266a59ce75323f968cc9d01b"
  },
  {
    "url": "assets/js/169.3d939af5.js",
    "revision": "f96f5e730ad1921e35f63e5ee78ac6d1"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.47ad855d.js",
    "revision": "c1004397f8b68a11c131eea9d087e8ac"
  },
  {
    "url": "assets/js/171.19af290d.js",
    "revision": "e1c5783d3b5f0539ae84659e4fb17d1d"
  },
  {
    "url": "assets/js/172.7d655829.js",
    "revision": "2956c7e555cbf24ff5ef5e5ce1e969c5"
  },
  {
    "url": "assets/js/173.c6559e14.js",
    "revision": "8516edbbfb64a5d36ee2c87bab869c0f"
  },
  {
    "url": "assets/js/174.728dfad8.js",
    "revision": "00cd8020016f0cc884b3bc242d601403"
  },
  {
    "url": "assets/js/175.35890577.js",
    "revision": "2f01135a8b3e795059feb4fde164a8e7"
  },
  {
    "url": "assets/js/176.ea7fd02e.js",
    "revision": "66544807c779a96103d012594fc649db"
  },
  {
    "url": "assets/js/177.fc0aa887.js",
    "revision": "c109632e8565de018ca02ceca8ffa27a"
  },
  {
    "url": "assets/js/178.a6cbcdb2.js",
    "revision": "b18b027f8e59d04d373946ca5d91752d"
  },
  {
    "url": "assets/js/179.22041374.js",
    "revision": "2e28d8a47995f6144273d3fc3972b893"
  },
  {
    "url": "assets/js/18.566e4cf6.js",
    "revision": "ec20304394d5a34cb4d8aba229da6a42"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.3d2c6830.js",
    "revision": "ead9ffa792e1daccf24800307151ccb1"
  },
  {
    "url": "assets/js/182.2f062ac9.js",
    "revision": "46205dca7a74b4863f973dedf62bdd66"
  },
  {
    "url": "assets/js/183.520270d4.js",
    "revision": "9f0396fe6ec3fb86ea74e979a3deb7d8"
  },
  {
    "url": "assets/js/184.630b2d11.js",
    "revision": "6ddc2060ff7b9fd14373bff44d4a7a41"
  },
  {
    "url": "assets/js/185.506de468.js",
    "revision": "fdae0192fd561091bd7272cb6570d341"
  },
  {
    "url": "assets/js/186.0a59efb7.js",
    "revision": "21e3166afd87f338a1d3b1ef17883bc5"
  },
  {
    "url": "assets/js/187.12609101.js",
    "revision": "812475b25520b3993195fa40acb5abc5"
  },
  {
    "url": "assets/js/188.34efcdc3.js",
    "revision": "3ef0cb0b0b0f8d47c03695afc8530304"
  },
  {
    "url": "assets/js/189.0eaaa1be.js",
    "revision": "7e872100b3aed47c7b3c86cc4fbaebb6"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.41fd395f.js",
    "revision": "90f37c725f597faf1c9c1d8a0d72ccfe"
  },
  {
    "url": "assets/js/191.455bae58.js",
    "revision": "79f1b4fd994895c5c8a9cf1ec63379f8"
  },
  {
    "url": "assets/js/192.e6d4e2d8.js",
    "revision": "a049bf4961ad0acfc71c0444f4d88fb4"
  },
  {
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.ccd76fb8.js",
    "revision": "d7e00c8fd6c5b9a6722059831ee03d5a"
  },
  {
    "url": "assets/js/195.eb48805d.js",
    "revision": "65d661836810d2f70bce4b117f468fec"
  },
  {
    "url": "assets/js/196.88b21837.js",
    "revision": "21f2520a245d534575246a63c44f684e"
  },
  {
    "url": "assets/js/197.81201893.js",
    "revision": "8da7b2a49efbf4ee7c553242e4830127"
  },
  {
    "url": "assets/js/198.db422c28.js",
    "revision": "7ab63007878e886e7a71482e876f8d61"
  },
  {
    "url": "assets/js/199.84d4d90d.js",
    "revision": "a8b9c7a3291d24b3165839e723f562e2"
  },
  {
    "url": "assets/js/2.d5bfc3c0.js",
    "revision": "3e5ef052f56826e20570e2953cceb199"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.2c8d218a.js",
    "revision": "c1d555c4e8623b4d90b9e9a3048aa9d8"
  },
  {
    "url": "assets/js/201.ee4b6f60.js",
    "revision": "58355ade8ebd1d16d7e747722f7b98c1"
  },
  {
    "url": "assets/js/202.e16471fd.js",
    "revision": "7bc3ca0e201682d7912dfdad2e3d38cd"
  },
  {
    "url": "assets/js/203.090001e2.js",
    "revision": "8857a8107f08c99b094e0b8e3cdac374"
  },
  {
    "url": "assets/js/204.f5e16eba.js",
    "revision": "356ec1c0efcc92f767536bbb6e700b99"
  },
  {
    "url": "assets/js/205.bce1d76f.js",
    "revision": "2ede47426de9d44869d496ebdd03b3c5"
  },
  {
    "url": "assets/js/206.2c633f0e.js",
    "revision": "181efd57accfbdf55d037b71eaeddebc"
  },
  {
    "url": "assets/js/207.8ca3c140.js",
    "revision": "a79b8ded25ed7e39ed25032cd603ba61"
  },
  {
    "url": "assets/js/208.ae25c583.js",
    "revision": "993a99e9db09d4affbef9784e0aba66c"
  },
  {
    "url": "assets/js/209.2bc62a7e.js",
    "revision": "f73d49e7c3dce453fe626a1218f9c4c2"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.335504cb.js",
    "revision": "5810088f5aa4f1f558136026d00b5bfb"
  },
  {
    "url": "assets/js/211.f67942b3.js",
    "revision": "d98c303416d86420338ab84d93804dd9"
  },
  {
    "url": "assets/js/212.c00e154e.js",
    "revision": "6832f7743b828c722f9aee7e11663a41"
  },
  {
    "url": "assets/js/213.49891273.js",
    "revision": "e007f268ae563ba6cd170823dca61327"
  },
  {
    "url": "assets/js/214.c7c3044b.js",
    "revision": "c2baf3d495e40eb7834e78123c6ab688"
  },
  {
    "url": "assets/js/215.aa286267.js",
    "revision": "971ee74f9ca69f8b94de06ed811ca735"
  },
  {
    "url": "assets/js/216.574261c2.js",
    "revision": "4e6192a2ccedc3be08abefd50782e7da"
  },
  {
    "url": "assets/js/217.f69091b7.js",
    "revision": "4a26ba4bb254644c6f4a3fa19dc2d8b5"
  },
  {
    "url": "assets/js/218.735dc6fd.js",
    "revision": "23ad4347539fc96e7bec62ba05c02691"
  },
  {
    "url": "assets/js/219.71b9ce06.js",
    "revision": "a38dd5c7caf46156a66245df29bf3125"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.0e9425bd.js",
    "revision": "581867bcb1b9c208e409b207f27d4976"
  },
  {
    "url": "assets/js/221.ba3702d8.js",
    "revision": "c83e03842ffcc4605f413f5bfc291c5e"
  },
  {
    "url": "assets/js/222.afc09fa0.js",
    "revision": "047b74cfe6fcf3fedea7f4778f702e1b"
  },
  {
    "url": "assets/js/223.c1a8e675.js",
    "revision": "f6ad56f28ad5fed371b424d13d9ca000"
  },
  {
    "url": "assets/js/224.63bc8a53.js",
    "revision": "00cecab2817f93b87981bbba68f2dae9"
  },
  {
    "url": "assets/js/225.2ef324e8.js",
    "revision": "b5cb8a9864568a13eca3d407c5d1b760"
  },
  {
    "url": "assets/js/226.b3360b95.js",
    "revision": "25405364d4f19596abe0dd73e4e56154"
  },
  {
    "url": "assets/js/227.9734fed2.js",
    "revision": "f5cf66c0111cb70626cdc138813ac8bf"
  },
  {
    "url": "assets/js/228.32cb9930.js",
    "revision": "087eb0c04175808f97023170eec57bb7"
  },
  {
    "url": "assets/js/229.6205ce7a.js",
    "revision": "329ce95c4bdfcadcdec27aec6b64fabd"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.53e0900c.js",
    "revision": "92dd283cdcc0df47a51d03094b9843a3"
  },
  {
    "url": "assets/js/231.61fce1ef.js",
    "revision": "cc0468771993d829c4ec298de96a2fcf"
  },
  {
    "url": "assets/js/232.6422e246.js",
    "revision": "2aab04059af4af252aa1a96918c4b182"
  },
  {
    "url": "assets/js/233.2b15590b.js",
    "revision": "1338f9030f183f7108c8de811a399571"
  },
  {
    "url": "assets/js/234.743fe962.js",
    "revision": "2f20aa02af59d398d54143c9e3a52a54"
  },
  {
    "url": "assets/js/235.f69273ac.js",
    "revision": "3d2a79a599d4647c7c3863f47d0ca3f0"
  },
  {
    "url": "assets/js/236.d1d871c3.js",
    "revision": "5bf3c0de518d2af95d2b2a37fdb16101"
  },
  {
    "url": "assets/js/237.68e523a4.js",
    "revision": "012480c00bb58719dbade5bfb5444a14"
  },
  {
    "url": "assets/js/238.c1cb4f92.js",
    "revision": "bd18ed3d56632b21d2759cb1f1d073ba"
  },
  {
    "url": "assets/js/239.67d6eeaf.js",
    "revision": "34ad4bce7655e650af8b9998c2e5fe15"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.5417807e.js",
    "revision": "1d8fe16ebd0b7d886fe469d5735aa831"
  },
  {
    "url": "assets/js/241.0cf98306.js",
    "revision": "5541d6064169f423cb3a4d3d8d75abee"
  },
  {
    "url": "assets/js/242.577871f9.js",
    "revision": "3118bb77ea22f9254197913a0d7352bd"
  },
  {
    "url": "assets/js/243.d0baa1f1.js",
    "revision": "4ff8b35d5df7d4553b4256a90a00dc5a"
  },
  {
    "url": "assets/js/244.404fbf67.js",
    "revision": "672181a395296af1fcf84136c2e8a015"
  },
  {
    "url": "assets/js/245.684035ca.js",
    "revision": "8581a90cdab216e7f4d4259bb6f49238"
  },
  {
    "url": "assets/js/246.60e47c1d.js",
    "revision": "6e3f7102d86ac790aeade9958d7104e8"
  },
  {
    "url": "assets/js/247.f2f006ae.js",
    "revision": "2798434c9f658465bbc45e511051376f"
  },
  {
    "url": "assets/js/248.745c97cb.js",
    "revision": "b347751a8b6f23e2f07906a34dcf5b98"
  },
  {
    "url": "assets/js/249.f44ad030.js",
    "revision": "5ef745ebee2087e05b9178352a6de648"
  },
  {
    "url": "assets/js/25.a20030e0.js",
    "revision": "53e2c5fdb97be8d22e0cf6e846dbc3d7"
  },
  {
    "url": "assets/js/250.79170478.js",
    "revision": "a4648440ec53e7c8e00ac56ba57288c7"
  },
  {
    "url": "assets/js/251.b2534066.js",
    "revision": "bd12c78dec51fde473c076236303290c"
  },
  {
    "url": "assets/js/252.8c6b6f7d.js",
    "revision": "b51993efebdc2c9249e0a734b362074f"
  },
  {
    "url": "assets/js/253.51ad0c4a.js",
    "revision": "e29a2e744be44029ce2ad9326f15f166"
  },
  {
    "url": "assets/js/254.0bca1c96.js",
    "revision": "d72f2aaa3d15678efcf29bca57e47449"
  },
  {
    "url": "assets/js/255.448c6d24.js",
    "revision": "755efbbeef9e1018194d1545b5245ec1"
  },
  {
    "url": "assets/js/256.7789061b.js",
    "revision": "2843f4fe863176496d1cd6ccf65256bb"
  },
  {
    "url": "assets/js/257.aed1ccc0.js",
    "revision": "a4a63b0a175ab5ef7b38324f4335825b"
  },
  {
    "url": "assets/js/258.fd8e25d3.js",
    "revision": "2f161180090ad25f7174274d5642fd0c"
  },
  {
    "url": "assets/js/259.56c599b1.js",
    "revision": "9c7cf55b13f21b1fd1ea0177432a9b45"
  },
  {
    "url": "assets/js/26.4bef914a.js",
    "revision": "4ce8cbe0d74c3a704ff2ff99c68c41bf"
  },
  {
    "url": "assets/js/260.cc2c0d48.js",
    "revision": "119ce154dbdb61a7eae6c84619df53bb"
  },
  {
    "url": "assets/js/261.7f624bb1.js",
    "revision": "3d1c7a5a86556b8441db0402f3e0fb3d"
  },
  {
    "url": "assets/js/262.5ca85ceb.js",
    "revision": "16ece2d01e1cba9e3762b1aa45b13b5f"
  },
  {
    "url": "assets/js/263.794b4ade.js",
    "revision": "6d150d2bb48f51c21be763ab75e2f435"
  },
  {
    "url": "assets/js/264.fb109969.js",
    "revision": "53bb02d64637a57f1ba000bc903479f6"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.1828efad.js",
    "revision": "f5806f6ecebb3ab2e896ab9c124f643d"
  },
  {
    "url": "assets/js/267.db3c65ac.js",
    "revision": "04d09a1055fc480d1eb72d4d5bd7f0b0"
  },
  {
    "url": "assets/js/268.fe9443fa.js",
    "revision": "bf4d6fc3bcecf184bfe63689efa3b05f"
  },
  {
    "url": "assets/js/269.a21c5abd.js",
    "revision": "f66c9be8735f61b438bd185ec73381ec"
  },
  {
    "url": "assets/js/27.245e0933.js",
    "revision": "408a327aaf59f67bbddd7e0e3c59d719"
  },
  {
    "url": "assets/js/270.b2262146.js",
    "revision": "eb596f04582aee76b9f7516ece362d14"
  },
  {
    "url": "assets/js/271.965ef2db.js",
    "revision": "128a12cc8cdab4d443f65beb892f681d"
  },
  {
    "url": "assets/js/272.157b7aee.js",
    "revision": "e80cc945b9e9c2e087f5339eaef007fb"
  },
  {
    "url": "assets/js/273.2583422d.js",
    "revision": "bbee0a67bcbb0bbaf50fd9b9c3cf1810"
  },
  {
    "url": "assets/js/274.8afa0e30.js",
    "revision": "5374cba6b831ad50e26e4599db48332a"
  },
  {
    "url": "assets/js/275.fe2bb150.js",
    "revision": "8a08b1dd55239712d9fdeec1c3d1037e"
  },
  {
    "url": "assets/js/276.fd64594c.js",
    "revision": "ab436e3b5273c0d6f3cd4f59acd25714"
  },
  {
    "url": "assets/js/277.168df992.js",
    "revision": "3b08c792498d7fac279875b85cd53db4"
  },
  {
    "url": "assets/js/278.cadf0106.js",
    "revision": "fe7f851ce8ab9afabdc69707eda74c34"
  },
  {
    "url": "assets/js/279.9b3d772f.js",
    "revision": "4eaf84e3f8ecdc44f68f3aff8d7887c8"
  },
  {
    "url": "assets/js/28.8bab9e74.js",
    "revision": "b6b1a8c39d7c4a2c0f2324c6f4ceeb2e"
  },
  {
    "url": "assets/js/280.6b97a7fd.js",
    "revision": "a3fa8a2f9bc05d52656e7f6dfde59a98"
  },
  {
    "url": "assets/js/281.8c64e8ac.js",
    "revision": "32e7218208fdc83af90d9355c2bd75e9"
  },
  {
    "url": "assets/js/282.a3d4a725.js",
    "revision": "ad1dd52ae972745e485ab907a04167b4"
  },
  {
    "url": "assets/js/283.07e00f3c.js",
    "revision": "5b3034a781c30367804703d80a9fe6d4"
  },
  {
    "url": "assets/js/284.f4f495e3.js",
    "revision": "38ae2c29c715581edd5740e64f933991"
  },
  {
    "url": "assets/js/285.b13e6a26.js",
    "revision": "dc1bf25c1ff5b23a9eb9d8f5fb0b8af1"
  },
  {
    "url": "assets/js/286.a04444fe.js",
    "revision": "bb89139baa1294d764ad6d8533453159"
  },
  {
    "url": "assets/js/287.47207722.js",
    "revision": "50154b99904c297c5d28c36e393c5e0f"
  },
  {
    "url": "assets/js/288.144695f6.js",
    "revision": "3eeed1f3d711f8ef2faecad729daa895"
  },
  {
    "url": "assets/js/289.4056a1e8.js",
    "revision": "5fad48776abc3315e72a2d2065eb0cb9"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.fa7c35db.js",
    "revision": "5b5669e2eae2499b55637e068b308585"
  },
  {
    "url": "assets/js/291.7e8852bb.js",
    "revision": "91c20c0eb1724517cda40f43277980ca"
  },
  {
    "url": "assets/js/292.90f2c806.js",
    "revision": "6f783111e091007b1fbd6cff400f171b"
  },
  {
    "url": "assets/js/293.dccc88f5.js",
    "revision": "b58724cea686f7eb69c9cbe8b74b3e89"
  },
  {
    "url": "assets/js/294.2bc8546b.js",
    "revision": "7d65576ae54b69e9ca68ecaa7b7dd05d"
  },
  {
    "url": "assets/js/295.0fdf2899.js",
    "revision": "5d7629d44115530eb1ee30e7af6db257"
  },
  {
    "url": "assets/js/296.541cb30d.js",
    "revision": "32d0c99015feba21c8f4a1db0392f012"
  },
  {
    "url": "assets/js/297.9b6c5857.js",
    "revision": "97ce872860ff080ef3b7b04ba8351594"
  },
  {
    "url": "assets/js/298.77d614ce.js",
    "revision": "cd24c509ad98bffacd9db92e24e7383b"
  },
  {
    "url": "assets/js/299.4a0293b5.js",
    "revision": "c41062d4723f501a9b51a4b4fdbf5f65"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.df842c8f.js",
    "revision": "a21c5f4f49fa6b33f88976beea7efbde"
  },
  {
    "url": "assets/js/300.da97d5b0.js",
    "revision": "fdbc478fa3e82f5a43e027742c0b73c5"
  },
  {
    "url": "assets/js/301.6368ada2.js",
    "revision": "244fa99304801f356ac841106c041cbf"
  },
  {
    "url": "assets/js/302.5eb783da.js",
    "revision": "ed2799d15a0908d535bd8eb70ebc9721"
  },
  {
    "url": "assets/js/303.8501af21.js",
    "revision": "a3754ee4742ed628bf8f50e5cbb7bdd6"
  },
  {
    "url": "assets/js/304.7276137b.js",
    "revision": "646f259a30aa21f7510f42b1b6f23f57"
  },
  {
    "url": "assets/js/305.d982acf8.js",
    "revision": "0a042691e07dd40ee472edcc655ca256"
  },
  {
    "url": "assets/js/306.3f74a918.js",
    "revision": "df6a3e4d91da3f2d358755d0fef010e2"
  },
  {
    "url": "assets/js/307.332efab1.js",
    "revision": "eaa4cba2d86ece7b5497e822dd29c59d"
  },
  {
    "url": "assets/js/308.5a438bba.js",
    "revision": "cabb9871386787a6b778d9a0f3a3582f"
  },
  {
    "url": "assets/js/309.7da6106f.js",
    "revision": "fac3e7c0260e747db36bf5c57b590472"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.822798fa.js",
    "revision": "da6bf8b02681d7ac1395902fa00210f4"
  },
  {
    "url": "assets/js/311.6ca26f3a.js",
    "revision": "68a89573a1545ed42be72fcd5cb80773"
  },
  {
    "url": "assets/js/312.1e582e20.js",
    "revision": "f480618c46a758da924779fb151a4b06"
  },
  {
    "url": "assets/js/313.3d916846.js",
    "revision": "24e2b93234027a616647211606260a00"
  },
  {
    "url": "assets/js/314.fcf15115.js",
    "revision": "46e0f37e3b6e3478e395424e504c2fc8"
  },
  {
    "url": "assets/js/315.4622d544.js",
    "revision": "55b5e1c2394af18a24e8a0765d907973"
  },
  {
    "url": "assets/js/316.a72c7d1c.js",
    "revision": "73d17a31b240e7f0ba57e5223b5e1346"
  },
  {
    "url": "assets/js/317.8abd1218.js",
    "revision": "cd1762f8470ace1aa16540cbf79caf5a"
  },
  {
    "url": "assets/js/318.ce4f88bf.js",
    "revision": "0eedc8810f95b6de95594b6f777950d6"
  },
  {
    "url": "assets/js/319.6795ff61.js",
    "revision": "fdfe43f3e82f74edf68266532520ecbd"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.afa8c73d.js",
    "revision": "cf1009dea260b1d36d0d98d3552ffd06"
  },
  {
    "url": "assets/js/321.4cd70acf.js",
    "revision": "38de4f2868426961a0a8b54734698f45"
  },
  {
    "url": "assets/js/322.b42b2921.js",
    "revision": "aca5894c294da5bdbc1d832b6e3651ce"
  },
  {
    "url": "assets/js/323.d1bee7b5.js",
    "revision": "9ebfda823d15ace1dc931cb8c37850cd"
  },
  {
    "url": "assets/js/324.efe79655.js",
    "revision": "677df60558091ad8c2cae33014749dbb"
  },
  {
    "url": "assets/js/325.bf10754d.js",
    "revision": "4abb1ffd8b853e719cf3fffb7662dc94"
  },
  {
    "url": "assets/js/326.4275cce8.js",
    "revision": "9d6a3b1f9feed18dbaf95295de9e921f"
  },
  {
    "url": "assets/js/327.6ca5c496.js",
    "revision": "18620e507a158165cab48ec9c9b33404"
  },
  {
    "url": "assets/js/328.fba3e0ea.js",
    "revision": "3c30ec3982a2d86ba0f9cdd9050f6dd5"
  },
  {
    "url": "assets/js/329.d407bddd.js",
    "revision": "1baa7ff58d4f3a3229e0c68e4d9f33e9"
  },
  {
    "url": "assets/js/33.30f381d4.js",
    "revision": "66f4ebb3d1f513dea3b18f794041a792"
  },
  {
    "url": "assets/js/330.6c264916.js",
    "revision": "85df9a481903845859c98f790c6b406b"
  },
  {
    "url": "assets/js/331.13f98cd4.js",
    "revision": "d1f4ef3bbdbea021b5edc1f01519ce56"
  },
  {
    "url": "assets/js/332.04c0fc9c.js",
    "revision": "2f0f57d7eda54722eb6c752cb1751ad6"
  },
  {
    "url": "assets/js/333.d2797f6e.js",
    "revision": "63372f8046858c9c8ecb362c3bf4fa48"
  },
  {
    "url": "assets/js/334.1b339c9b.js",
    "revision": "3811a32a5a058396ae2d223f17479d99"
  },
  {
    "url": "assets/js/335.1ac88f2f.js",
    "revision": "df455c779e5c7c27088b50648e5ecdae"
  },
  {
    "url": "assets/js/336.46a31362.js",
    "revision": "183ef1fecef6a76400296ab5cef04e35"
  },
  {
    "url": "assets/js/337.058fad6f.js",
    "revision": "99c376d0b9bb2fec41285f09c0b57ea4"
  },
  {
    "url": "assets/js/338.2d94b8b8.js",
    "revision": "5f4d18430d73fa9d3f220f87996a909a"
  },
  {
    "url": "assets/js/339.1ba9a078.js",
    "revision": "d6e1240dabcd614dee93aade8e426f1d"
  },
  {
    "url": "assets/js/34.51c5df11.js",
    "revision": "52d97a98135f3875a6f7d5025fabaede"
  },
  {
    "url": "assets/js/340.a434750b.js",
    "revision": "44c17e5b98d9e71a451872782542fe66"
  },
  {
    "url": "assets/js/341.b4c49aa3.js",
    "revision": "abce3b138bfc135d220634d611096091"
  },
  {
    "url": "assets/js/342.2f38ec8d.js",
    "revision": "1445fabe41e403cead2129aa4ea49a6c"
  },
  {
    "url": "assets/js/343.59331f3f.js",
    "revision": "089be06fce7ed7d636d4ec07a61d2ab2"
  },
  {
    "url": "assets/js/344.e10ed771.js",
    "revision": "1bea0ac3c5b4a3227f86d29528313dbd"
  },
  {
    "url": "assets/js/345.e92c5a74.js",
    "revision": "e22549b9e9582b5dfabcf3a991352516"
  },
  {
    "url": "assets/js/346.3f38ddde.js",
    "revision": "7a7decdca703191f737bd5109b7d89a4"
  },
  {
    "url": "assets/js/347.cbfe7d43.js",
    "revision": "88b062164189766810b0ae863910aebd"
  },
  {
    "url": "assets/js/348.e09f480b.js",
    "revision": "d435f91925e960b23aae1a70eb27da86"
  },
  {
    "url": "assets/js/349.1972c646.js",
    "revision": "536b886b98f6ad43faee7d1c6ebb904f"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.552745cf.js",
    "revision": "3134839200e90756232df7af4820d58e"
  },
  {
    "url": "assets/js/351.135b1350.js",
    "revision": "ac9e5a607899049519402b73652d46a2"
  },
  {
    "url": "assets/js/352.0d9caa2d.js",
    "revision": "cd9b38957e015e044da27bbcdfcede6d"
  },
  {
    "url": "assets/js/353.34a4b4d2.js",
    "revision": "03906537b657f4f9dba7f5f26e462b11"
  },
  {
    "url": "assets/js/354.d96b50d3.js",
    "revision": "fe2a2ef1122fc3b1bb831806963ec1af"
  },
  {
    "url": "assets/js/355.073a934c.js",
    "revision": "8ab2a5a72ecbf3a3edbcddee47165bff"
  },
  {
    "url": "assets/js/356.eeba4e15.js",
    "revision": "e381cf1981aa50045081eb4088e8feb2"
  },
  {
    "url": "assets/js/357.875b946f.js",
    "revision": "6f10f508e369905683dedc47a88fd3d1"
  },
  {
    "url": "assets/js/358.cbcc1038.js",
    "revision": "b57b04a41ce5b5666b9e3f0bec0c9cdd"
  },
  {
    "url": "assets/js/359.d21540a1.js",
    "revision": "e57ca124482d00dcd7087f33981e2e7d"
  },
  {
    "url": "assets/js/36.545a178b.js",
    "revision": "278cea85509f8e4f16f79bd3e343ab79"
  },
  {
    "url": "assets/js/360.561d4f2d.js",
    "revision": "ac293294ea3a887b3bd32575aa2d4a13"
  },
  {
    "url": "assets/js/361.c8cfe559.js",
    "revision": "54d8b5d460b881d6a4218ad7f64027c3"
  },
  {
    "url": "assets/js/362.29f09703.js",
    "revision": "b3aa5b440b84b041fcbc4aaff18af83e"
  },
  {
    "url": "assets/js/363.f718dd39.js",
    "revision": "e3156754ba6432e00155bbb5f757cb83"
  },
  {
    "url": "assets/js/364.7bad4cd8.js",
    "revision": "edcb60abae90608908a1b0a5c71c0715"
  },
  {
    "url": "assets/js/365.1f5e5f72.js",
    "revision": "9088f76b66dc6924c8fc849a44c92522"
  },
  {
    "url": "assets/js/366.39994888.js",
    "revision": "2577fcb3bb1f07489d8c608d60295675"
  },
  {
    "url": "assets/js/367.1058a9db.js",
    "revision": "64ad4df0ab5c09228ef12bc74cca69c8"
  },
  {
    "url": "assets/js/368.17d0abaa.js",
    "revision": "9a169c471e9e1cfa2f44e0f896adcc6f"
  },
  {
    "url": "assets/js/369.61bd062d.js",
    "revision": "33965d23fcf7123f7a714f317f16de46"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.9d86943c.js",
    "revision": "c62fcde10dfe86f057fca67ac07afbb7"
  },
  {
    "url": "assets/js/371.b4039c29.js",
    "revision": "2d0be1f62887d483436cffca551b4876"
  },
  {
    "url": "assets/js/372.57cccf47.js",
    "revision": "158d5222c1dab3786a4200e68bb31a48"
  },
  {
    "url": "assets/js/373.0e6808f2.js",
    "revision": "f3843cbe3934c764e8334aef282d5bad"
  },
  {
    "url": "assets/js/374.7b556875.js",
    "revision": "9622594159119981af735f72006b8583"
  },
  {
    "url": "assets/js/375.386dab0b.js",
    "revision": "1dd710eb2d55308556678dd31d17c711"
  },
  {
    "url": "assets/js/376.98e4b13f.js",
    "revision": "50913190d27a27b4d98c01c55c5cab65"
  },
  {
    "url": "assets/js/377.afbf522e.js",
    "revision": "878ee6f40cbad544c8b50fb19a17ba5b"
  },
  {
    "url": "assets/js/378.9f9179a9.js",
    "revision": "7197fe88a89871f5affc15f3bcc48ae3"
  },
  {
    "url": "assets/js/379.f27a4212.js",
    "revision": "b0c9a6c98a2665f8c66f3e8a9574010d"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.f3396cac.js",
    "revision": "1f136aa87f21417e4300bde46e4e3bbd"
  },
  {
    "url": "assets/js/381.b28a5d11.js",
    "revision": "13f15c980b05262bfbfc3a350bdcb8af"
  },
  {
    "url": "assets/js/382.0b4db7ae.js",
    "revision": "792753f406bbba53f2ffaa0db2e8c52f"
  },
  {
    "url": "assets/js/383.0bb40cc3.js",
    "revision": "ee38ce3c800f49d9e135c0c07b891902"
  },
  {
    "url": "assets/js/384.901af367.js",
    "revision": "947faa85a7d4d89021b378b536dc0efc"
  },
  {
    "url": "assets/js/385.96a0e933.js",
    "revision": "fd52379483d1829e3968f387764ec478"
  },
  {
    "url": "assets/js/386.34dfef62.js",
    "revision": "aa1c6f8502cd04f5a9db48265f7f7018"
  },
  {
    "url": "assets/js/387.cb443fff.js",
    "revision": "1399b9e7e32a0c61fe5690f431be36d6"
  },
  {
    "url": "assets/js/388.0bee39f0.js",
    "revision": "d1b48e975533fd4c2d0b1ba6fd79ba1a"
  },
  {
    "url": "assets/js/389.403217fe.js",
    "revision": "04af296c3318db23f700247a00377f90"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.c405ea00.js",
    "revision": "ce9013ce3b6c79c224001a2c2672ea58"
  },
  {
    "url": "assets/js/391.bf889434.js",
    "revision": "af17cc17b0e2c9b4712fcd41e29b9c1f"
  },
  {
    "url": "assets/js/392.49f9c53d.js",
    "revision": "532c06f04a827275ab569c7878e3e017"
  },
  {
    "url": "assets/js/393.b0e8dfed.js",
    "revision": "7c2220beccf76c7b89d96cd1b827df03"
  },
  {
    "url": "assets/js/394.73b02f43.js",
    "revision": "20d332a35094f789119edda7bdaf5c3f"
  },
  {
    "url": "assets/js/395.84f65d70.js",
    "revision": "85f366edcc67fda216439e95342b5fb3"
  },
  {
    "url": "assets/js/396.f207957a.js",
    "revision": "e6ababd9700ee1c2d69b3f627730b5af"
  },
  {
    "url": "assets/js/397.08a2de4b.js",
    "revision": "234ff674b1a0123b9852c8cb6a66be1e"
  },
  {
    "url": "assets/js/398.9175ee1f.js",
    "revision": "02faf63ff1c6138efa7b3d31bfe79741"
  },
  {
    "url": "assets/js/399.85076e82.js",
    "revision": "10744e12acdf28ebb18bc005e7107f38"
  },
  {
    "url": "assets/js/4.645b31fe.js",
    "revision": "83f736a9c571e791e27cc81280b1d266"
  },
  {
    "url": "assets/js/40.6fbb3d02.js",
    "revision": "4b1d3a5d284756d4b9ead12520a2665f"
  },
  {
    "url": "assets/js/400.59df523f.js",
    "revision": "709e9e88c1ba26d92896723a11dd6127"
  },
  {
    "url": "assets/js/41.8caa3613.js",
    "revision": "6568f84623386e98e4e3fd6684b0952c"
  },
  {
    "url": "assets/js/42.a9556851.js",
    "revision": "c1e3b548d881e4e5132839eb94242d0e"
  },
  {
    "url": "assets/js/43.fba50a5e.js",
    "revision": "93b3f2b3501dae722b8dff6e964cd738"
  },
  {
    "url": "assets/js/44.0bdbb0e7.js",
    "revision": "04f29b134be081772ef59da9ff03f3cd"
  },
  {
    "url": "assets/js/45.71b59f65.js",
    "revision": "7a78de669fdaf5c124b3d4f4eed58a5b"
  },
  {
    "url": "assets/js/46.c6e251ba.js",
    "revision": "bd2ba9473047fc35d5350453a3f8319f"
  },
  {
    "url": "assets/js/47.99cc6253.js",
    "revision": "d000c45fd21718c33ea377791e2a06fa"
  },
  {
    "url": "assets/js/48.fccc1c97.js",
    "revision": "3c405a625a73be9a691cfe0198ddc4a2"
  },
  {
    "url": "assets/js/49.022727cb.js",
    "revision": "b4c27d497b21b54a29723ad8126fb18b"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.f6bee82e.js",
    "revision": "ec7f5fabe469e17def639ab7bc6dc2f9"
  },
  {
    "url": "assets/js/51.bc88767f.js",
    "revision": "7f0d85604a2b4435454f380243879d5d"
  },
  {
    "url": "assets/js/52.7fc69f13.js",
    "revision": "0adfdba2392dbf57bba1ff509f0f2c7c"
  },
  {
    "url": "assets/js/53.38a18517.js",
    "revision": "078286c215e8ae3a03957a48e38df334"
  },
  {
    "url": "assets/js/54.de4dabe4.js",
    "revision": "84c1ee593bc7858a01a03e41e417a1bf"
  },
  {
    "url": "assets/js/55.a7843922.js",
    "revision": "14d5ebe362b7c87833c35f09a17bca41"
  },
  {
    "url": "assets/js/56.4138ae24.js",
    "revision": "30dbdd04298883453be24d82e92a1890"
  },
  {
    "url": "assets/js/57.298afb3a.js",
    "revision": "95d6b1906e369db4d3d448fed0cd6a48"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
  },
  {
    "url": "assets/js/59.9236f2fa.js",
    "revision": "109d1628d2263fb12a90d483d62267ab"
  },
  {
    "url": "assets/js/60.d79bdf8a.js",
    "revision": "03f60b0ab546685437ee018a8c122908"
  },
  {
    "url": "assets/js/61.aff66bd3.js",
    "revision": "358554befe50721d6f490a09fdd2d04b"
  },
  {
    "url": "assets/js/62.7cdf5dba.js",
    "revision": "80aa8e07ec1067b8351d99f99a71bf7b"
  },
  {
    "url": "assets/js/63.9e71a80e.js",
    "revision": "b79c8ac39b25309bd6e857fc0f62cfea"
  },
  {
    "url": "assets/js/64.c524218d.js",
    "revision": "85dbd9c2607236f820bc26e0f9638cf2"
  },
  {
    "url": "assets/js/65.7f504c38.js",
    "revision": "0da626b434ec069a89a1c2546ac226cd"
  },
  {
    "url": "assets/js/66.037c02d3.js",
    "revision": "99066bfdc7ec99adb7cf6d762c86cd1f"
  },
  {
    "url": "assets/js/67.934b0fc5.js",
    "revision": "997740c97e30de1daea54ecb2c9aa145"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
  },
  {
    "url": "assets/js/69.28b887aa.js",
    "revision": "1dddf0fd0c6790df0e653e3ea9495802"
  },
  {
    "url": "assets/js/70.2b42eb69.js",
    "revision": "6319abd2f69e95dd6432c31da66e4eb1"
  },
  {
    "url": "assets/js/71.0041680a.js",
    "revision": "21c737bf5b63bb8e2a1061fc06daccfd"
  },
  {
    "url": "assets/js/72.5013ac5e.js",
    "revision": "ee7f8b8d93f9f26e9886d244b9faa2a0"
  },
  {
    "url": "assets/js/73.19f9e469.js",
    "revision": "14438cdf13b86425bd34d5195063e158"
  },
  {
    "url": "assets/js/74.6355bc3e.js",
    "revision": "3b1664acbfa9a1a85f133a5dfc3be724"
  },
  {
    "url": "assets/js/75.790c1d3d.js",
    "revision": "cd23095b15a696b6ad4cf978b9c2f951"
  },
  {
    "url": "assets/js/76.288a3e46.js",
    "revision": "99db64ea047423afd5b169066c4b07cd"
  },
  {
    "url": "assets/js/77.ba010e02.js",
    "revision": "f2625f630a250fd62c36f9856331ecfe"
  },
  {
    "url": "assets/js/78.ddd569f1.js",
    "revision": "d7ed4570993f882b7f090330faec4702"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.beabf95a.js",
    "revision": "853fd3b11d02883747fe7ba1ee9b72af"
  },
  {
    "url": "assets/js/81.fa46da8a.js",
    "revision": "84b6634b8931b1dccb1dfae2c751a830"
  },
  {
    "url": "assets/js/82.c5b79991.js",
    "revision": "cc16e0f0ff71298924458df8b814e86d"
  },
  {
    "url": "assets/js/83.1724c8ab.js",
    "revision": "b29ac1ea6ba679fff4d12538aee5c50a"
  },
  {
    "url": "assets/js/84.6841e809.js",
    "revision": "953220cb79b34800064dfba63f245b67"
  },
  {
    "url": "assets/js/85.c0171591.js",
    "revision": "120b26c8ac0d2a3156b87ac1f428e82a"
  },
  {
    "url": "assets/js/86.2066fd35.js",
    "revision": "5659d9627c8fcb7756ea8ef3201046ac"
  },
  {
    "url": "assets/js/87.c76b88ea.js",
    "revision": "42d117137843db6c5986c030e9111217"
  },
  {
    "url": "assets/js/88.1a7bff99.js",
    "revision": "ce68698aec6de51af7390b23f8756199"
  },
  {
    "url": "assets/js/89.eb94f076.js",
    "revision": "9950c8e764eef4e608002d086da2b49b"
  },
  {
    "url": "assets/js/9.bde9dd31.js",
    "revision": "c689e2cfa02d0647534c4ced3f73ee94"
  },
  {
    "url": "assets/js/90.07b75fd1.js",
    "revision": "d0d1adc9242e811c6518908e732c9f3a"
  },
  {
    "url": "assets/js/91.301a7fb2.js",
    "revision": "836d4c21f26bba7728f2dbb49c7aebd7"
  },
  {
    "url": "assets/js/92.0839728b.js",
    "revision": "a362eaba1ee99f5099dcf0c4bb1d7056"
  },
  {
    "url": "assets/js/93.4de36706.js",
    "revision": "eb06e793c55d9f150f0b7e10555c8635"
  },
  {
    "url": "assets/js/94.a0464e64.js",
    "revision": "acd9c380fba82ff1bc5f18f2e8a0dba0"
  },
  {
    "url": "assets/js/95.b19244b9.js",
    "revision": "0e6f7a39ffe1f437b424f0fdaf08ac5f"
  },
  {
    "url": "assets/js/96.a2295a49.js",
    "revision": "2373bcd406a20d0a79081fcd38a9332f"
  },
  {
    "url": "assets/js/97.a9d77f55.js",
    "revision": "1da8d85f5cd5d966422d86ef10232d0a"
  },
  {
    "url": "assets/js/98.1e3c7194.js",
    "revision": "6b16d1d7376491208e04eec2172dfee2"
  },
  {
    "url": "assets/js/99.9927c6e4.js",
    "revision": "206a2b96103deba7fa5d16060ea5fc13"
  },
  {
    "url": "assets/js/app.0e21f857.js",
    "revision": "f4a460abd9046fb7a481995b56007fa6"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "63cbc9412811509516bbe474b2f69664"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "512ac79037052842350f850bfcc1aa04"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "8538c7c2bb7111a03335f5d84cdc108b"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "30cc9bedff5fd7e38fff85034e8ccc08"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "47d3650c574748abac0e13f9a8ee4224"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "2d322dc7512718cc667d4da449f9229b"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "6563a7a42d057ebe793d108738d0ca05"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "e882edce05dac1dc1b0ab240ef6114fd"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "623a88868fc711c18323af94a808dc94"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "de5b4e6d0151cfe4cb796e4539cc333b"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "264c6face6a3d52171ad91ea56f75547"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "0a83498e3f91436693ea86fb5338686a"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "183e12fa7f9fff81e59fab0872208c00"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "1ff58d5dcac30529adfb46b570ee7e9a"
  },
  {
    "url": "master/api/index.html",
    "revision": "1b97ef255aa5ded73c255fab791677c2"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "f93d7926342410772a56b86b001ad688"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "ecbc6fd216567639843a522cac08a004"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "da2658268397cc27f2829593cfc06029"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "1016e7ab248317aafc4fc36d0395a1ac"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "a2f670eef39e29a1974de17de12d54be"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "53e9a0f267d15599ed23f7794db08e7e"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "c7eb0cfeded12fddb3b1d8807f281ca2"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "ccb5e1b663413af829edd68b1fb6852f"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "a03f493fde41953516fb19b1dd08b02a"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "18644ddc02cc45297915701e66ee97fc"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "56ec721094fd5b5259688f40f1755078"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "095ef92591e25a63e96502bf100f2b46"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "1e48ccb024eeadd6b4183675b69524b6"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "87214c3f1923ef3b594378ca09812fb8"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "767a1aefcc48a1912ed454b1e5d0ccf5"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "e5e4898097174a4ee0a9823c7072c100"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "de99da83b5be52b9e354b1b2b4eb6f5a"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "fa0591aa3bc1f6be49ed1cc514636863"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "815956e2f615766be41864571eab30a7"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "b34a4e69c6545701124605c9db690e36"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "4a51a9ca96e21728ce9382cec908f243"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "4189d05f85003a2d6f03710c0f0cb13f"
  },
  {
    "url": "master/packages/index.html",
    "revision": "7a6f82c4afa2efc727c7bfe7dabb5590"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "f42e93fd6083426d756785b3f020f122"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "0b39cbe101e761754af52d597aae40ad"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "de049c749d94971a91ed111b07f3c175"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "b55c130e667ff50bfbf488c477a57a97"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "8f52edd660cda2423edf09e421aa75fb"
  },
  {
    "url": "master/packages/views.html",
    "revision": "27e27261fb5173238f43c840ece529f5"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "025f53691ffabcc69ff0cfbb959b27c0"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "16448be076ad4f040b0372c7dad379b0"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "4c5c89c08dfede266ac17e8064555ae7"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "05b79433c54519d830e15478609dccc8"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "dab5464d7f42987b12d7cc211bc6cc60"
  },
  {
    "url": "master/themes/index.html",
    "revision": "9cbd99bdbde113d1e7f1046e17845307"
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

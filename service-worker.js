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
    "revision": "a7793eccd357f6b079a79e128bf17d0b"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "33eda796f7dee797861e3c45ed87e83c"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "d56f22daf8645b1852ee1e48b01f7929"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "9d29f35592e52e6d2adbc503a0d49771"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "8eeab66705c0287a9daf6fd7edfcb067"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "1a62f7ab98aa8bc5a47a75856efd30ab"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "f690b58ec68dd1c9ede8eee6c08e874f"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cd1e71fe1a218d41776990bd6f13e26a"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "9acdf71bfdcaa0f7e4f923753fb346c0"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "701a61f02cbf9c3be64d987a1ce62f51"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "1eba53c2aeeb7e700de42895e28fe66b"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "22381082a6f0c0f00453506aee374648"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "c484ca4c23bdf655e7662c287b13626a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "98161ce83e8af0cacac27f30a333542d"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "cd2c30dc8c3f0270ea488207b9973086"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "de6e93992a59fc119ce6c4d5b8d3a2ba"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "c4da5e72d45322bcb12013c0a9b356d6"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "741ebc44fbea20dbd7744538b6b1b354"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "2a8025a45f0550d4924f6e4dfacbeff0"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "9f8d1d99dc917dd7e8e5b69ecfc00d15"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "565d6ed41d6d8c1a1890381891307b23"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "ef7355e180a9e3d29194a29e4810a921"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "dada5436c18f6c9c49b3d8012d947a3f"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "3c643b7ecb0881a50ceb8be53a1f13dc"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "0865894bd1122b7a1b9b2265b0832302"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "8fa39c6a4d9f891056baddcaf11a738f"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "bc9cfe053f17cebf1d10a6822ee59863"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "b665233a377d683437e1c034d8c10fc0"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "cbc94f306fbe5bdd03c7776c436ab5d4"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "474f9af615202e1016fe4db75cde8287"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "ef25278448e19cfdbdc5a691ad41da8d"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "6c9d3d7adb46603c737c012b0d111655"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "450d71f6ead10f888d72308f1413975b"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "129ade579527d261f8d2a0bb4013c2ec"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "e27a0c526dbbdd9dd3e5035ba3079a00"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "56755bc68bd9de2ca6dcf46eebc9209b"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "86de42397b00cb98d12e278d06d59c87"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "b6bab73ca02157fae95d4dcd459222d2"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "165c74bfd34f5198c0cdc44982a939be"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "df44fc646c367829373614b09c872255"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "cd19a5bab2ff5621265e82f74796faae"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "4a79965ace091ef34e52a69388de3554"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "51c74064ca69442168818c8ef73cacb7"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d22afa4f817494d8123348d5d1084105"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "cfa1c1a92e821e9923915b81607ddb15"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "3b6e07c50b31322cf99614ea6bb1025c"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "81e2ff4068d31b0db5b3ddc280950986"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "32ec4731794b389ab6f54ab7a3167525"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "dd6cb1171d56bedbba155cddb6b9c383"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "44c600ae99622b33ff687e77cb14f89b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "1c2c7571fe168d34e4ceb2e89dbd0e2b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "5457cec8456da36c69ed47a81c51565f"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "915e53013a1d877f53f448b49125ca26"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "ee89339e62968569638de35525119353"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "1b0548f670913cb17fbd5ab78f257d5b"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "c4988c27e466c6c5fd92ae186058ecd7"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "281637eac2ca5ec4acf3f71a6eba4de3"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2f164fe96d358beb1c5307402f90419b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "460779194477cf0fd1011349ae94cf61"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "93c4d4368cb660d378d9c122c5adf6ca"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "e6c90ce46280de1addda24d8f896903c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "b1d564b898f8a8b7f5a1c16921bbf40a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "be6f6f38dfd6a58c0f55bce20bd822f8"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "edd7321807398c17327bb3ad133f9075"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "cf6bd78c137de729614030f280917bc4"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "6dbda30ca03a2ff92238a2cd8cb5004a"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "7e653bf915fa921da4c105fd47b8db9c"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "dee7461c8d009e05bb8184b75708561f"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "a510ed1bdbaf9f77269c2e13dd74f8ed"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "7234ec7c1d590be9005736af1376a3bf"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "4bc212474f3fced7343483080996dccb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "315271963c25344caf282fb3ecc0df64"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "1b531f98074fefb11e866cf212515663"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "da1aee09883266439c3a023f92e52cc8"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "03eeae51e3937f34aa4d80a198daf2e7"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "da3e2261d5cc3fb421f3da6d327ea1bf"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "174d457ae6ecf7e6103a22c0e5b12246"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "985a6b5e50dc571363adeb3f09e49409"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "0cb7c6873399d04232ccbd952a5e0357"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "5e850714aec91dd9c140e9c1bac5b049"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "11bc2ffd5a52c30bd19474608b81755e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "5f550fce3d3661d56cf478df945986a9"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "8fcb9890fb005e9e6b3524d55ae0b091"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f6eeebee02f1a7f94dbb70a616f0ef5b"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "681ffe283e8c4ff2078938b85e35438b"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "c4f207b27197f5ddba66ab74ea8d9d0b"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "365aa045f9e080119fe817caa8e1dc3f"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "f45bd8deb6e53df002dbcd1d863f6416"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8f98cb974827830a6c64b34f4cfe939b"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "03124291aca62f7d5a5a999d88dc7cc3"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "58d8136577271ba363a1253173791bef"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "27be43a3b21166fc2e4e61aaeab37569"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "6071d861780e9e0dfe8e8d456df0b0d6"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "c01e2884863dbf628803e5107cf34c60"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "b228dab919efff1a8f4c8afc7838098a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "b97bea01735ee6fb465725ca3367ae92"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "0dd78d40b4b73144069742735967c5ff"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "531f8145f0d9f9b56922fb0a44781f2b"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "38a7a4a212f9bbe9e2e0b29ecc84e200"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "b05fbfc33e4a519cd2e5a5cfe113a9df"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "91baf020bdd0ad86bfbd8663baeaf57b"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "78569e8b88ba67a2b9be245a60ec456a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "5869e1380d2fe07998e3a9734d803c6d"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "f11113824afcff58b9220d4598e8ac8c"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "6a09865ac07182a100cdf1cf3d948bd8"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "270762a2b4fdcd6195064bd8f62e1ed3"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "c130ab56fbb64a7b2bc4477c5d3ed212"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "28b8c4fd145b8af035cfd7ef873b7d28"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2ff6fb8bb836af3cd8dfd464dc3e4d2b"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "bb6b12479f091768aa0bfc5f987fb336"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "78113365744e1cf9c5b349de8ef6c4c2"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "36b96043705bfbef089703b591e7499c"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "ddd3b20826f0b913978dcdfaa7f5d419"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "cf3118429c6d7ac945872f639a95351f"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "640566214d1200ce1f52a3115b236025"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "b8731028fbcc52248181740202cc3efc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "862dc03eabbf9c19171474ce645f7ffb"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "2e6d2e786de7112f90470eea6063b16a"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "52b04a68f93f7d1dc4a04b24e93083d1"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "f22d3cd94352bf35ff7ed5bede00f905"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "b6b9b0b9d3e45823ebfecf1428c4ae78"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "00c4e0def3a33564b922a90675d30a89"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "732b18f34f8d5225f199f189f79b9d9f"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "a0edfaaf1833c853e2583ff0d1e33e77"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "0d1168e23e32bb1ee7149be523e29888"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "185d4c1f1d40b85a7ed0d87996d5f118"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "bd6b4778490f5a3ff9e5667b7fdb5bee"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "cdf856f35c138cd6847ae3acf62f22c2"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "1ec93e10048be073b595f184cc17b4fe"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "14c9b42c6c909d5515b330711fecd4f6"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "c8c13430fbf023e59ca4e002d2e52194"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "67433303c2d69b4405b729e4c99752bc"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "0e5e191332a70727dd7051d88d8e2375"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "618f4f44661262a3d48cb98eb03f6f23"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "e1750fd6c6498f56fa9380c23fad7c9a"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "b2e9ff2cf704414a6bf68b0418cd2834"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "e5323da95cb3a253c3374124bc8b9be0"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "4e063ee5621275a9acab5fa3afee4b44"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "fe6d1a9521255fd18bd79929a6f1c870"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "5a9ca72259256443d23562db9b4fac61"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "7050faf015da949eb68d96a688277e39"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4c6f7fb7f3bb4018157a5bf74e7fae8b"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "36179765d56af304e0211fa01f24dff8"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "4ec9f3ee385ef9c72b2005b22e2b1fef"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "e4351fdc0f2697dfb61981f429fd32e7"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "7f9f24e3ead5b1eb2f4510ac9a63ef13"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "3638401f5d74a92dede2d07ae6e52bb8"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "2ebd6529374f3cc751ce741fd7ac527d"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "ae4b43729f90754f152ebdf3da93135a"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "b1d33b6d1a72596ff4369b691595c9fa"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "967408004a1c1d1effc6a985de5ddc91"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "7de9065ea036816f16d0f1d8f2ababab"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "59f60edd5d96b61f97d4159fe323f183"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "cc634b08f0951c8a95ba1c9784c3b168"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "f6d9163e251e9ba05b7b4f867f231218"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "328576fa5fdb76d29162f0f01bddba25"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "3ad731263fe907a522aac3dfa4aa8dde"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "ffd4afd4887401d0765e0f5d58f70304"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "7371247006c9a543390d1a92f20d25b5"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "6b8b0254c85a7c870357c4e21ae9bd0a"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "bd831af9cde5fba658652316691c61f2"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "6e6ca02871f955db8d61dbe5c41fc413"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "9dd5b86ba9dbfe1ec3c7543cbc326c6a"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "173340a8a1c4603fd991235c9df17663"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "cc47aa7a7e4887da5a0ac2ec6a974290"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "27cf1eb4e1735b168f8bce78a658e8fd"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "8b4692c3d1271d309b7a46d2bc1c0008"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "ed3157113657a425631e982ad03eb0df"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "aef4d25cf384ab5d1c686d299db433f2"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "35cb2322f22aad3c612ff67f86daed50"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "6d0cc2d7e8f5d161af2aec1117b953af"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "fb7ede5195af813240bbd96c9074664f"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "4a792088b48228f3af7836418bdc3a0a"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "eab7148c6d91b3633a7989d237143408"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "8ec3d02d7a8527b43d4d0691592983e8"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "7ff953edc1e79c5481b8ed806ce7857b"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "014ab00d1d6a94bf53a8f1308f0dc322"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "2edcc0e4b961cb08bc4b30b4650a2606"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "f533636fb7388be2bfe5ab311c9817d8"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "5dd51999585ec19c5f423c02e7be60d3"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "d1d930c7b8e4e614fa343dc96035b524"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "b0b059a8f40a4ef853bb2e19eaaf0495"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "cc81c0c0b8d3369ec120fb86ef33289d"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "e12a189d90650293317d81eaf33b7e47"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "ec30573fb63906cdbce8472fa5dbbde5"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "74278953891d1b652466377ab79e34fd"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "36acb52609b1c62f07b5edfa739a7939"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "8fb35ca0f9e8bd65d11745d72f534074"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "a5e73f28f4e0293d098e62bcc3f3c6e1"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "4cbf5753e56dd96cca980effa06ef73f"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "aa66974a5696556ce2782d661b55ae73"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "a9c1fc8341068f143def28387dd5d2ec"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "6e140b15fcf07e6349abdd765ab1026a"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "488f3741609c9b9689cfbc887126eb45"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "b6263dfce9394affffdabc34a1bbd9ee"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "7a34f2d3b98d1c390c24ea5f63276173"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "56ca046bfb7bec4ed58a998914c6e77d"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "7701b05ac0bc6dc0217fcf5188e469e3"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "aafa32012b5799a99228244fac76b943"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "55fc9f917524bf93ef624c74f45ac924"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "5184af615a07c74bca79222e12740fe9"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "ad24aefbe27174b092142de74802ecd4"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "46f251e25165b290b38dd83e05ecfc1d"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "51f3b4da4ecbef8ba7dc9d19a46dfa4f"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "af0bfd21d32fd88733601a3684566591"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "07a7a0e7e7f1a1561256bf30769c0ba0"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "4757f0f738d41d42d0c06298123f32f9"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "723464397946dd458096b3a086f2648a"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "8a9714c1b36aa4445deba4fbbf61a4d9"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "efeed9491ea8d783bb6ee55f529d5221"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "fd39fbd3ae27735a0e786a39bdc96951"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "9a120e821082a2ecec090ea1f910b9cc"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "345703e660eb469c5f5bedf4020eb800"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "9658690a7024ae6476e80c3100464bc1"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "3a213b97c0af7a03567859cb89f8088e"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "b288c3bc66d48ffcca0de7b7ca34edca"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "549957a468b9f549c223ef50df53f59d"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "35007377571919e84cbb07810aa7907d"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "7b3b17573e46d11281d801fe60ceb702"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "22100fe8afaabcf393191d28cea7d461"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "4fdaf2540664c4021b3ea30d0dab0ca1"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "4f51393ea12f67e8651f3112ce09fbba"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "4669344b800af307182582e65e48a990"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "8e036ecbb4a99bed8f292af0e9b61988"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "7188635f768ec4ebe968ddff287810cb"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "a93d0f13208588cec819bf1c30aa9d2e"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "27ac458b6cf9ecadea131205a884681c"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "fe4390946c892bf112086259e5ed421c"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "12de3c4d0c3d03024741a543224599c6"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "c0d7e8896f0c07136e6bf888f8696f6b"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "0cde42d662b807e346d12fea503a08b9"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "54b1e97537af12ea984abde3f3f1ee60"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "3830ee1facb3a91979368d9bf90089d8"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "1059cdcfe710713e6943fa679ef414b1"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "e45a5e95eb27ae99d821b1660ddc0951"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "aea057bda97b2f9abc29b4c8ac060589"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "5fd72110823f761b7c31e922f23e08ef"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "f6c07450cf62634110b7287222721320"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "30423359abf358adc9cb7108adeed6f0"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ff72961c69adb1e11b33a9a25ea5bfb1"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "166e0dd47a8f629d1004ce0dd7a2e387"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "45218ed79a582b00bdd564735b189fee"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "d884bcb4e42850f06f915e0b4ba8aab0"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "e092071bc7c18d2f4b6667457d9cb7c2"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "d5980d4b7b62b071abacc262a087c695"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "73c633b09ec7312f8d44e08433a5ba68"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "f1a30089962b5bb27f6109eb65ceaa97"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "7eb0c39e72a099053b5ea289d2594145"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "5ff0e7145ab7f3bed9f025cebfa8ba9d"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "7196be444de6a6f820abc31efb9a89db"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "ddf1ada2ebe440f264dc94c30243e5d8"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "85e68961669efc7bb1b3b08ece100454"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "5aae1a0c68815a26ffb838b83fc2c2f9"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "a586e1297d279d21b43bc574abf90068"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "bc03311fdf610107687cbb67b7cc1cdc"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "41900484a0690fba7a7ad71cf152685f"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "41b1ba07743661fb0bc0af9b142063e9"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "650f97ac66b4b2f883807ffa312dfa87"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "eaae00b136a2e7d2177a5df886165cd9"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "3ebb3cebed3c590f026a0a14e30a0a16"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "312dfe3ae2e7c24c118d112bdb40ba87"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "36ac44f8858340d57699e1f5434ca43d"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "54ee4ebcdcfb052f231ce31c46be049c"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "a219aa739d423b7524e6eb368fb6dba9"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "286ef9eedb11a285f89162b6b68d4a9e"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "fc51a6692fb474d78cbfd58d0594e311"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "cb0b45c466c6174798a9906e925fac15"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "939edee67458a9fd7bcdffa275a267e4"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "dc4aabc13047d647b4e7fd5994149f4b"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "90859850ee7c88bb72ce5a766b88f602"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "06655e8d49fba382664b701d53dad546"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "3a31af117c452bd75cdfa10e48972f10"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "8203449c0ed3647bd354771b643a130b"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "6050072cf6eb364c26efda2ca8046dba"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "ad372c7bbfe12eb52ad6fa6ea738ad03"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "c3c2fdab546d123046b1f61c1d84a81d"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "14b25bfd72d386e3694e2736ee01fc7f"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "976064e60bc01ddd6c350da2754451e9"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "84124ba44cf37a3bf004464a16e9557b"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "68e9be515208eccc2202518115d28264"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "b85e728e4c074aa779cf7c34ebcf0f32"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "18507cd720e7ac71987bfebf48973c6b"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "5d0a7c2043e9907109a5fdb8cb160f38"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "7d7c7af1fb866f2fd90d14489dcf901a"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "b546f20426d0374e8ced4f89bfe4be9b"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "750e3c4ec9af9a600b4b5fe0f299d8e7"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "6476c553527fb5f5276a9c8dc9d057ad"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "c83ea3e59a2382c8624cb02365376883"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "42c59a70b2ff21a01c544857c1ad4619"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "2f772e3fd1222788b741d4eb088f2dfa"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "8f4c52b00bde051d90d1e0694de1ac4f"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7b2d26d46030b55ab0f2e3835cf26e73"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "8231f1c4abf7f24f7d201eb114a1a198"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "fc73846a8536b2663a016e338c10bb10"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "d9cc68e8191ec722963b0c4814b2f2c6"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "e7e27791b4e3beb8409609b0d7f95d1a"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "e429cdb50bb389e8ed9df03394690ea3"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "a6f68c7b280b582c59e82c966fc27577"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "474c38dbe1f893b0ed8878a6970d5527"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "fff7996d7c6e1ef5b4fb5a8919e7328f"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "324f89ea5d1a9122a12bd223038ddf9f"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "54e625b796028970c96d8596b889e5ac"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "75ecdb21b4020e6ce1fc15f64bc56e3c"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "e2c423f303e12dd650f2e113380c39e3"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "3e0143c8c937c90951f2af81edfecae1"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "26831f4972af8ec9bf6abced0cf1bd6c"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "91cb6f6cdb623b5b6342fd495ed5d40a"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "ce90a8deb3cd004df01e348726a9383b"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "21122a30e918d7a3e4ace2164c77d26b"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "122d27348c2f35cd2f1f8de9fdcab528"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "32f54af8d8c683f34c70a65f0449f721"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "423485b7056f5a239916382dcc5af679"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "de396a6278c4e31b11031ac622508b79"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "9151a348250a18fcecd1da52b7e8d27f"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "d3e083ef9854215e78fec8f8634fce87"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "04b3ee8352a4981dce35335f0e25e056"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "2e42824cf020b622d310539f02e92a1b"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "4d11ecf38a31b483aa638b99bad3bf54"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "88fca74a61cb92d0769220b3f0171fdb"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "30fa5f4ec3fb0f1aa014800b923a10d5"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "89d9639da3aacd26e986f4a5aab722f8"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "ad406beb191421e336392b58593d5eed"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "9c9c2bdf0d550092e11f76db8a3e473c"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "4d5003cdc78879c86a1199a223b8ebc2"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "c1498a8f5c35d04eb629285a340f0505"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "208173e6e90786168fc256023a4a93bf"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "08b3b242c2c82357f75a752b2b9345bd"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "432f44bc88b7d18a55ff520815bb142e"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "32fe3b02651bad30210d819106aa4cd3"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "6a3c660d7f303bc8c11ae264781fb455"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "24ba91d1038fde0a16b697ee326ebe27"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "22b0eac869c33285adc6cd4a24f14f7d"
  },
  {
    "url": "404.html",
    "revision": "0a76f603c6069b571f392b732a5d8eff"
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
    "url": "assets/js/1.4392f29c.js",
    "revision": "4b682befa470544ecff9b9b30db26c71"
  },
  {
    "url": "assets/js/10.f9029f9e.js",
    "revision": "5c8b71f065a049e42a2ad43220303eed"
  },
  {
    "url": "assets/js/100.29daf547.js",
    "revision": "fafcd330a3d23dc8c60f55a101eeb65f"
  },
  {
    "url": "assets/js/101.cd4265bc.js",
    "revision": "4d7732219e45fb28afe2ec89b8202a75"
  },
  {
    "url": "assets/js/102.11f2aa3b.js",
    "revision": "f9ed8a305d9e2d2de227c5136c1f0c0e"
  },
  {
    "url": "assets/js/103.784b6bb2.js",
    "revision": "8ba9e0f8eb9d772feb410ea067191165"
  },
  {
    "url": "assets/js/104.adf2c97b.js",
    "revision": "c1183ed2ece4e30d88de5eb34298ff36"
  },
  {
    "url": "assets/js/105.58b0ec1e.js",
    "revision": "e8a48aabfcd0d1e839bc6c94b2715baf"
  },
  {
    "url": "assets/js/106.f9c01f7a.js",
    "revision": "a580abddf04be6a0b455b55d4209d49a"
  },
  {
    "url": "assets/js/107.2979454d.js",
    "revision": "31b0e0de939e05fd71aa68b29dee9368"
  },
  {
    "url": "assets/js/108.62ba93a6.js",
    "revision": "25786cdb220aca0b90bf2b00ee8ff580"
  },
  {
    "url": "assets/js/109.e27626a2.js",
    "revision": "30d57b0bf4c2d7fe48ff4938d71c5dd3"
  },
  {
    "url": "assets/js/11.7959a958.js",
    "revision": "cd6f45624628c859bc7461edfa5ae8b1"
  },
  {
    "url": "assets/js/110.18702238.js",
    "revision": "b50b03bc2854a4cc4f8501fcce1a4fc9"
  },
  {
    "url": "assets/js/111.39378618.js",
    "revision": "59200ab0d6ebd5cd2424bef26ad854d2"
  },
  {
    "url": "assets/js/112.f2fac389.js",
    "revision": "32a0bbee3e5d9640a3c3459bad07790b"
  },
  {
    "url": "assets/js/113.27867761.js",
    "revision": "cec3043741c73f616a148984bec77430"
  },
  {
    "url": "assets/js/114.68125512.js",
    "revision": "922835809ef496b702d3b7cbba617b23"
  },
  {
    "url": "assets/js/115.733b2d01.js",
    "revision": "2fe89d892dc64363700eecfaa1151dd7"
  },
  {
    "url": "assets/js/116.1a80f1d4.js",
    "revision": "3e692f265dfa6161a672042257c6c352"
  },
  {
    "url": "assets/js/117.1676cc06.js",
    "revision": "e691cc4a15f55a01e9cc0ca7be864547"
  },
  {
    "url": "assets/js/118.e34f03ee.js",
    "revision": "1bf59bc07f0fd9c7084b893f2cfbc1c1"
  },
  {
    "url": "assets/js/119.894a5223.js",
    "revision": "f01caf6a257f67c113f3ca9be6b6c353"
  },
  {
    "url": "assets/js/12.9d48d357.js",
    "revision": "bf319848f666b737f162147412055f82"
  },
  {
    "url": "assets/js/120.5ad51a35.js",
    "revision": "4bf1d45163853fa3875c9fd63adceef3"
  },
  {
    "url": "assets/js/121.e8677929.js",
    "revision": "84dec65fc8019d73532eb7137d354a19"
  },
  {
    "url": "assets/js/122.ca01e88e.js",
    "revision": "f102dceb2dc157b7eb8419980d6c33cc"
  },
  {
    "url": "assets/js/123.fb9979be.js",
    "revision": "c56478f5d0989949134ff11e149d02ed"
  },
  {
    "url": "assets/js/124.50c5895b.js",
    "revision": "f0a0f99504c7a853dcbfeb0d712b1d65"
  },
  {
    "url": "assets/js/125.3d467cdc.js",
    "revision": "932b73abd0f4287f13dddc1af17186bd"
  },
  {
    "url": "assets/js/126.9b865e5c.js",
    "revision": "7079f8a65ca581b18ba3e7192b74fa58"
  },
  {
    "url": "assets/js/127.4bc6acee.js",
    "revision": "aa9bb6e3d9f9ee9a56b7fce227518a42"
  },
  {
    "url": "assets/js/128.7d1caa54.js",
    "revision": "2a72aba3e6b89d66e64e087f29a10631"
  },
  {
    "url": "assets/js/129.68ecdef5.js",
    "revision": "fde3eeed0c27adb42780368e257e9119"
  },
  {
    "url": "assets/js/13.4d64843a.js",
    "revision": "1863e382fd964ff4b3c88c0922efefb3"
  },
  {
    "url": "assets/js/130.2d4e1065.js",
    "revision": "8c089c0978d73393124b42ab3055b945"
  },
  {
    "url": "assets/js/131.5d021eea.js",
    "revision": "b4f881ce6c5a758e3c81a9e0f93449dd"
  },
  {
    "url": "assets/js/132.5b024d29.js",
    "revision": "082563143a367620273c1758ddf65725"
  },
  {
    "url": "assets/js/133.71056d64.js",
    "revision": "efe4b08b27d6a092a3236228d63fb586"
  },
  {
    "url": "assets/js/134.9e8d0944.js",
    "revision": "890ec5ea1b1da4ab7e54eebed72c2344"
  },
  {
    "url": "assets/js/135.00ff45e7.js",
    "revision": "537188566ad83c1309ea1f1274ec8f5d"
  },
  {
    "url": "assets/js/136.167ef846.js",
    "revision": "afb188609d8faa3d5574588183727246"
  },
  {
    "url": "assets/js/137.b5b5adb1.js",
    "revision": "9668bb5cc20834a29e322bf4449a0e86"
  },
  {
    "url": "assets/js/138.55c7b33c.js",
    "revision": "cb07df546b798df5093f7211689cdffe"
  },
  {
    "url": "assets/js/139.541279c7.js",
    "revision": "d35d0771117a48528368613a81a3baf1"
  },
  {
    "url": "assets/js/14.2bddcb63.js",
    "revision": "9006e79c05bd1d73bce6b20e14dc8907"
  },
  {
    "url": "assets/js/140.ce429419.js",
    "revision": "ef6d7a9acb871367af7818e9b4919e05"
  },
  {
    "url": "assets/js/141.4b042915.js",
    "revision": "71296c6143d756e5d81694fb8a1ad7f3"
  },
  {
    "url": "assets/js/142.3d6a57c3.js",
    "revision": "a43c3193cb73527f253620f5f2cdf5e7"
  },
  {
    "url": "assets/js/143.df7bc5e1.js",
    "revision": "080d8d2013d2786ef0ce17c7d4e977ac"
  },
  {
    "url": "assets/js/144.1a8a4a5e.js",
    "revision": "a2e59d0564e0f5a5f0f837fc59f69afe"
  },
  {
    "url": "assets/js/145.b13300bb.js",
    "revision": "e6b9e69c9cc200bb041827e07a771d4f"
  },
  {
    "url": "assets/js/146.3a6974d5.js",
    "revision": "ec3c172d391594b7c6b3fc587662aa93"
  },
  {
    "url": "assets/js/147.969d3cbc.js",
    "revision": "10eedfa24100541756876a53a6a886b1"
  },
  {
    "url": "assets/js/148.5ca51bc0.js",
    "revision": "cd80a4c5fa154841de653d2b8e0a5ea7"
  },
  {
    "url": "assets/js/149.5a1abd2a.js",
    "revision": "7eaf7a37760a576870c6624be4803de0"
  },
  {
    "url": "assets/js/15.c76491bb.js",
    "revision": "98b369a48c1e7faa0705bd16fd02dda4"
  },
  {
    "url": "assets/js/150.7078438a.js",
    "revision": "addda906399b8b3da2e79105999ed0b3"
  },
  {
    "url": "assets/js/151.8130ade5.js",
    "revision": "937a0eccfa62a2cba26310b7f96ce3f6"
  },
  {
    "url": "assets/js/152.693a2f2b.js",
    "revision": "a1cbafe940bf0d849d526650bc36b8a7"
  },
  {
    "url": "assets/js/153.efa7fed1.js",
    "revision": "ffb4e9eb0fafd895d0aeae6b817e4665"
  },
  {
    "url": "assets/js/154.826beca5.js",
    "revision": "72ff0fe76eacf17ca94f3c9e08dc9b74"
  },
  {
    "url": "assets/js/155.21c83d27.js",
    "revision": "f855bcbf771ac8492425ba704f4294c5"
  },
  {
    "url": "assets/js/156.e504e0ec.js",
    "revision": "948c5518644b8da2fdefbf3bf0fa9531"
  },
  {
    "url": "assets/js/157.66f09c57.js",
    "revision": "c0b8ab177508cd09544b4affc710d7b7"
  },
  {
    "url": "assets/js/158.48122fe2.js",
    "revision": "d1678fc0c6ec4bee3a0e3d7830ff4ec4"
  },
  {
    "url": "assets/js/159.2611278f.js",
    "revision": "ca1f0c1b5d3c8f5f2b00775f1466dc54"
  },
  {
    "url": "assets/js/16.37c62368.js",
    "revision": "2bf897de04fe438c8f028a2780d61756"
  },
  {
    "url": "assets/js/160.6b211a7c.js",
    "revision": "77690fc77604e3feeb6e0ef299307463"
  },
  {
    "url": "assets/js/161.5ad7e9a2.js",
    "revision": "57bd1698a284bbf615dc9032268169af"
  },
  {
    "url": "assets/js/162.7f7425d4.js",
    "revision": "53d5ae8baa64653e8b3cac66d9e48646"
  },
  {
    "url": "assets/js/163.50b232b1.js",
    "revision": "b6608db425997241822beab335832927"
  },
  {
    "url": "assets/js/164.544384da.js",
    "revision": "76dc72f3153ffad1dbe19039299f9237"
  },
  {
    "url": "assets/js/165.3e72b0a8.js",
    "revision": "85d2257d9ef3eec2a13245f49556af21"
  },
  {
    "url": "assets/js/166.3bda4ddd.js",
    "revision": "6f6664442e8207f63bfca67633f237f4"
  },
  {
    "url": "assets/js/167.f3fc53cc.js",
    "revision": "18b18c17656c6f9138638255543923da"
  },
  {
    "url": "assets/js/168.b8c2173f.js",
    "revision": "18b522b9a307f36f64e0a500f49b9ec9"
  },
  {
    "url": "assets/js/169.36ee61d2.js",
    "revision": "965cca31abefd05bb6c0ba8486bd0d4d"
  },
  {
    "url": "assets/js/17.fb06eda4.js",
    "revision": "c0c6341ea8eaf25ff7083fd004f9d177"
  },
  {
    "url": "assets/js/170.3582cda0.js",
    "revision": "0f625d9e7f277fee84f0f4befb35b442"
  },
  {
    "url": "assets/js/171.974bfb49.js",
    "revision": "841c862c5c6d5771fc8c408407a626bd"
  },
  {
    "url": "assets/js/172.b8781ccf.js",
    "revision": "d34fca423a5a81b78954956d2f28c610"
  },
  {
    "url": "assets/js/173.fa490af1.js",
    "revision": "4f467d109572a9a30286813b474a210f"
  },
  {
    "url": "assets/js/174.4082b008.js",
    "revision": "c8610ea19f7e9ae1d0ac7e061c265e0e"
  },
  {
    "url": "assets/js/175.c0f6c858.js",
    "revision": "38617054586cf895e59cf95db715959b"
  },
  {
    "url": "assets/js/176.63694e27.js",
    "revision": "a7c80d28b2f0e26202587a1ad55991fb"
  },
  {
    "url": "assets/js/177.b4fec5ae.js",
    "revision": "249718b7dde3f748398de385e601482f"
  },
  {
    "url": "assets/js/178.5479945b.js",
    "revision": "6626e39eb8c39bff54a4ee24afe084da"
  },
  {
    "url": "assets/js/179.7b123558.js",
    "revision": "9bf1d848e49af047ae42d6bccfc3a27c"
  },
  {
    "url": "assets/js/18.ae841710.js",
    "revision": "426fee642e9e74581f080200d52be148"
  },
  {
    "url": "assets/js/180.fc9c1fd1.js",
    "revision": "d8cf8894d906a54ab14fc8b49ec92581"
  },
  {
    "url": "assets/js/181.1471a37a.js",
    "revision": "8c1c68b97b032788c1a0dcbbed39d630"
  },
  {
    "url": "assets/js/182.fd6da21f.js",
    "revision": "637196566884ef701dc5de1b85d9c8d3"
  },
  {
    "url": "assets/js/183.0cbcb3ed.js",
    "revision": "5af3199dcfd6aa7e5f0af1411209e3ba"
  },
  {
    "url": "assets/js/184.351505af.js",
    "revision": "51e7a0d7bbd5c67b3661ababb9923669"
  },
  {
    "url": "assets/js/185.97dff840.js",
    "revision": "284752d88a8ad8a388c3917bda5a6a7d"
  },
  {
    "url": "assets/js/186.1ebce021.js",
    "revision": "94f721c239dedf0c2c5d553d33c075f4"
  },
  {
    "url": "assets/js/187.48163b39.js",
    "revision": "c1c9eea0c0f816f22e7a90796060a369"
  },
  {
    "url": "assets/js/188.b889ae8d.js",
    "revision": "c045f6ec8310652bbee1729a17b66e34"
  },
  {
    "url": "assets/js/189.6514f660.js",
    "revision": "ec43c9afc29e8adcbb08c51cba1a0b9c"
  },
  {
    "url": "assets/js/19.2f450cee.js",
    "revision": "2dd126723b3d1547830a37515907b2f3"
  },
  {
    "url": "assets/js/190.b46a04c2.js",
    "revision": "97fc8ed026c6051e384bd3c0af696ccb"
  },
  {
    "url": "assets/js/191.6c8b2986.js",
    "revision": "f26f56efbceaa04c863fd715ce2c3231"
  },
  {
    "url": "assets/js/192.8aa4d025.js",
    "revision": "f6b0d862ba0c1f379bbc560730ce4ea4"
  },
  {
    "url": "assets/js/193.aa608059.js",
    "revision": "9e0f78ab83fc58948c3a0cbb9c241a3f"
  },
  {
    "url": "assets/js/194.a4d9f353.js",
    "revision": "6ac8d0d06d040100102f738cdc5c1a45"
  },
  {
    "url": "assets/js/195.676d0801.js",
    "revision": "2986bbaa04b0c8a2c0494fdaa0e32474"
  },
  {
    "url": "assets/js/196.0778ce49.js",
    "revision": "b9019a13d2dbbfd8dea72d6414c2cf77"
  },
  {
    "url": "assets/js/197.8a1cf3d3.js",
    "revision": "69ef085458374369a94ccbcb7a73900a"
  },
  {
    "url": "assets/js/198.3d807cb2.js",
    "revision": "591efd9a613c78464f22891ac54fbff5"
  },
  {
    "url": "assets/js/199.1df603c4.js",
    "revision": "9123c3e71b033ee9bc8c6e6ab8a8720a"
  },
  {
    "url": "assets/js/2.1fed2c7a.js",
    "revision": "d4754b5fb376a44c4e4f0447f4f19277"
  },
  {
    "url": "assets/js/20.8cb67973.js",
    "revision": "863905f2c0208e16a50559e247f653b2"
  },
  {
    "url": "assets/js/200.99a7415c.js",
    "revision": "9a7746a92d85c63428110ea953a36c8b"
  },
  {
    "url": "assets/js/201.13914ca6.js",
    "revision": "ede70ff95eb740b8fe4d7019f9b68414"
  },
  {
    "url": "assets/js/202.5e35e62b.js",
    "revision": "7d5428df2401fa7521dfe49cda9b3668"
  },
  {
    "url": "assets/js/203.25faf6bb.js",
    "revision": "fb4afee09f7ff969d6c4e89ea041e9f5"
  },
  {
    "url": "assets/js/204.63467039.js",
    "revision": "1feca365ae72ad752a80e46674c2d109"
  },
  {
    "url": "assets/js/205.be39cfb8.js",
    "revision": "12cc1a37d5985bdcfeacf54a094d65a8"
  },
  {
    "url": "assets/js/206.a3b7f347.js",
    "revision": "b70506b484d3fb42619ba5124ac28c59"
  },
  {
    "url": "assets/js/207.1fedae68.js",
    "revision": "5cca09e2f6a8ed40161cf353bd65d743"
  },
  {
    "url": "assets/js/208.e5b4f2fa.js",
    "revision": "0ea7b6d6d333e28586ecacf3d59d4c5f"
  },
  {
    "url": "assets/js/209.572f001c.js",
    "revision": "10d946a48324207b4894160d472a4564"
  },
  {
    "url": "assets/js/21.92fe68b1.js",
    "revision": "083333177ec594eb0c203d22014acad7"
  },
  {
    "url": "assets/js/210.7694372c.js",
    "revision": "f47aa399fd0a869b984b58d96f6d39f7"
  },
  {
    "url": "assets/js/211.b217747d.js",
    "revision": "a5cb70f823bf190018f297c6c5b68851"
  },
  {
    "url": "assets/js/212.f743fce0.js",
    "revision": "d128333cec231f369d7668a8b817fc5b"
  },
  {
    "url": "assets/js/213.530b7706.js",
    "revision": "caf3832d05dae189e1c89c553afd868c"
  },
  {
    "url": "assets/js/214.f955fd7e.js",
    "revision": "c4586329f93db1e9944c0d9d846abe0d"
  },
  {
    "url": "assets/js/215.2af9d692.js",
    "revision": "1d561c38d8f709010f5922dfc7e9edd5"
  },
  {
    "url": "assets/js/216.5e5ef060.js",
    "revision": "c567ea6600115eb496d2776bd01e2bd7"
  },
  {
    "url": "assets/js/217.a118043d.js",
    "revision": "bde61122d8ac54f6b7819698d22b4400"
  },
  {
    "url": "assets/js/218.dcbe3dcb.js",
    "revision": "37105890cc2733b2eb36a9081987412b"
  },
  {
    "url": "assets/js/219.b0cbdffd.js",
    "revision": "11c960ba7f61836de30c7c56ce9fd61b"
  },
  {
    "url": "assets/js/22.531b3bbc.js",
    "revision": "74ecb5998f6dddc2ca2d26f4b31db8e4"
  },
  {
    "url": "assets/js/220.1161f556.js",
    "revision": "5802c85d3a6d77f9e5face13ff8156bd"
  },
  {
    "url": "assets/js/221.00367964.js",
    "revision": "51d4328db1cc87af77080bcc9cdd7438"
  },
  {
    "url": "assets/js/222.bfbe1f29.js",
    "revision": "85b367f0ce3163e7d02ab0929f6c3307"
  },
  {
    "url": "assets/js/223.30d6d935.js",
    "revision": "1fe9e1ae0b014ee85ce17ea039d22ec3"
  },
  {
    "url": "assets/js/224.27bfc11e.js",
    "revision": "aed095a5837bf6937ef2499c970b6762"
  },
  {
    "url": "assets/js/225.b8c3b871.js",
    "revision": "9269b019ecdf132bcfcbda573c53ecac"
  },
  {
    "url": "assets/js/226.2e5ca8ac.js",
    "revision": "50a4a848b94bf2029c44224f904a87d6"
  },
  {
    "url": "assets/js/227.74ff2a07.js",
    "revision": "53b1e7dd9725e9214552ef1e1c0c65e0"
  },
  {
    "url": "assets/js/228.390fc95a.js",
    "revision": "37088472191ed8fddeec7b4fe43c6537"
  },
  {
    "url": "assets/js/229.97d11f0b.js",
    "revision": "72c46653f7c08e5628be9fca43941a2e"
  },
  {
    "url": "assets/js/23.e46788c2.js",
    "revision": "3e3bd1368f283358cb5816688263e18b"
  },
  {
    "url": "assets/js/230.5a14040d.js",
    "revision": "5d15251c2a56d139775f1e9629e2d2c8"
  },
  {
    "url": "assets/js/231.b386be29.js",
    "revision": "598610b200fcb94a5682aa0dd7ca7c10"
  },
  {
    "url": "assets/js/232.e383c1d3.js",
    "revision": "54ff0a7abdd2078d7f866e6782783091"
  },
  {
    "url": "assets/js/233.5da3f8d2.js",
    "revision": "554c30eb7547bf7131aaa43b23ac7e39"
  },
  {
    "url": "assets/js/234.d95de535.js",
    "revision": "efb0dc10c0f24eeb64b1a9919b20249c"
  },
  {
    "url": "assets/js/235.255bed37.js",
    "revision": "1c4d4a275a665d0e87ab50f91ea8b876"
  },
  {
    "url": "assets/js/236.34c1ae39.js",
    "revision": "9044f019645f885cbe77855d857081e3"
  },
  {
    "url": "assets/js/237.211c74c9.js",
    "revision": "dbc5d5fcfab442ec5ea2192d9cd3ab3a"
  },
  {
    "url": "assets/js/238.c83894d0.js",
    "revision": "51b960791ee14a7e76e3b7fcba305222"
  },
  {
    "url": "assets/js/239.2d21b682.js",
    "revision": "e806f24d47c3a00320f546ed97c21c61"
  },
  {
    "url": "assets/js/24.60661419.js",
    "revision": "86593a9796dd4b263ee0c5b7cb2e5fb2"
  },
  {
    "url": "assets/js/240.f49b322e.js",
    "revision": "1b48767cbf5d4100840d0ef162e03e28"
  },
  {
    "url": "assets/js/241.ea9d4e23.js",
    "revision": "8e331be85828dc9e46c60a527929b58b"
  },
  {
    "url": "assets/js/242.6cc0fe92.js",
    "revision": "f905c44de4886038931e8915657d68e2"
  },
  {
    "url": "assets/js/243.b74e329a.js",
    "revision": "27ee562b3f79b7825f6cc9886b7e09fe"
  },
  {
    "url": "assets/js/244.65cec6d6.js",
    "revision": "4408e4b4ec997d783c039d04206c153c"
  },
  {
    "url": "assets/js/245.d09598f4.js",
    "revision": "5d5ab6743f1ec0fc8b18d2419d7f47ad"
  },
  {
    "url": "assets/js/246.44c85d67.js",
    "revision": "cb34d7c561240bf5158473aa9300d2e0"
  },
  {
    "url": "assets/js/247.a0d317bc.js",
    "revision": "c70e32ced55677c25d374895414b7c81"
  },
  {
    "url": "assets/js/248.11ffd499.js",
    "revision": "eb1e9ad8c0e48c81db85574ea4874f84"
  },
  {
    "url": "assets/js/249.20e507d2.js",
    "revision": "b602d5d3ca50f56b50d361e8da2d3402"
  },
  {
    "url": "assets/js/25.68502f1c.js",
    "revision": "e1922aa80a27ed273fad14f40c7580f8"
  },
  {
    "url": "assets/js/250.e1e0406e.js",
    "revision": "cbc40119ae134b9069965b9f50f93ec9"
  },
  {
    "url": "assets/js/251.db781b1d.js",
    "revision": "6c2bdeae1fffebd98aeecb16080e7830"
  },
  {
    "url": "assets/js/252.2617acd2.js",
    "revision": "8b9dae01a549bcc8958ac764bc755123"
  },
  {
    "url": "assets/js/253.bbf3dbce.js",
    "revision": "bb914e4214670526de99e5a7683a794a"
  },
  {
    "url": "assets/js/254.273fe770.js",
    "revision": "9b7fda43fdcafd442060f4edc83bc66d"
  },
  {
    "url": "assets/js/255.5c26a9c2.js",
    "revision": "bc4cb0d9f991886f803e182359219fe1"
  },
  {
    "url": "assets/js/256.2971332e.js",
    "revision": "899f7dba812802d23f664eb38f5856af"
  },
  {
    "url": "assets/js/257.15c700e7.js",
    "revision": "428627d0f0e1b79947311bf459e3e1c3"
  },
  {
    "url": "assets/js/258.2f9695fc.js",
    "revision": "359eb3c6b9201bf4706fd5b1e35e8605"
  },
  {
    "url": "assets/js/259.ca875936.js",
    "revision": "c6e5bd76c306003bb17c5ba9ac6e4041"
  },
  {
    "url": "assets/js/26.b34804d7.js",
    "revision": "d550f27379b435c9402262f0c425469c"
  },
  {
    "url": "assets/js/260.ba9a36fc.js",
    "revision": "30e38bcdf19079fd7e85072c469548db"
  },
  {
    "url": "assets/js/261.f8b6fc63.js",
    "revision": "0db5d2d3ef0a5de446ac382183ec554a"
  },
  {
    "url": "assets/js/262.d4b13cbe.js",
    "revision": "a5dcb220bb3a13b6da1072ab73161379"
  },
  {
    "url": "assets/js/263.816aef66.js",
    "revision": "a7e730de41b4d48ba0c935c42b2f8f78"
  },
  {
    "url": "assets/js/264.33f414e9.js",
    "revision": "f43357472acf5667633af962bc230cde"
  },
  {
    "url": "assets/js/265.d5f7d092.js",
    "revision": "e977f3e7716f4ceb1620238630cd5201"
  },
  {
    "url": "assets/js/266.368bb2ea.js",
    "revision": "4f3d31d2001e3acaa38f3fa40a939515"
  },
  {
    "url": "assets/js/267.99e115af.js",
    "revision": "72aa145ab4d5a9e3588ef8f3a35ba6d7"
  },
  {
    "url": "assets/js/268.25a3697a.js",
    "revision": "0c78d7fcf0a2efdaee5542afbb24420b"
  },
  {
    "url": "assets/js/269.507c6cd6.js",
    "revision": "775c4a199d98b6fed6c890ddc4ef02fe"
  },
  {
    "url": "assets/js/27.68f8d93e.js",
    "revision": "8cc2f3de1577b79b28ced89e886c1704"
  },
  {
    "url": "assets/js/270.223112d0.js",
    "revision": "6339fbb81192617fbc7733aa87eb6d94"
  },
  {
    "url": "assets/js/271.8da7f799.js",
    "revision": "1424b7ee642d2c761fbfafc5dba2e5d0"
  },
  {
    "url": "assets/js/272.b0e97cbd.js",
    "revision": "3f09d7f8dbf105f337769f5fc398eb99"
  },
  {
    "url": "assets/js/273.f086ce75.js",
    "revision": "76e624d0342c62e0e6b5109f8f440187"
  },
  {
    "url": "assets/js/274.728f7942.js",
    "revision": "831539b33d6d34a1188d7e921942c2d3"
  },
  {
    "url": "assets/js/275.2c542cef.js",
    "revision": "0d217e7f92b7cc9cf128d50691004787"
  },
  {
    "url": "assets/js/276.94be5771.js",
    "revision": "589b32b33e32f84f0035034b6e7edd6b"
  },
  {
    "url": "assets/js/277.9c767f8b.js",
    "revision": "43ba8ecab091aaa4f02dbb6a936b3d5f"
  },
  {
    "url": "assets/js/278.c25e2f2e.js",
    "revision": "9de0d11f4f55a92b80d5759a6cc12f85"
  },
  {
    "url": "assets/js/279.af5818ae.js",
    "revision": "b462c640a24ce8e419b3f97ce928a4aa"
  },
  {
    "url": "assets/js/28.cf5064ba.js",
    "revision": "aba090ed822bc65c1bc585821cb4744c"
  },
  {
    "url": "assets/js/280.5142d1c5.js",
    "revision": "79add0e80b7f2f84724c279087969ade"
  },
  {
    "url": "assets/js/281.a836e3f6.js",
    "revision": "10f929657f780e2052691744c96d244b"
  },
  {
    "url": "assets/js/282.56c65da7.js",
    "revision": "a75536692a232ab51d726a9ddc098142"
  },
  {
    "url": "assets/js/283.8e67b045.js",
    "revision": "230012a50ab32414f50c496581bdf2bb"
  },
  {
    "url": "assets/js/284.efbc748c.js",
    "revision": "44e2d6ee5e6d902fbce56412cf885ef5"
  },
  {
    "url": "assets/js/285.87b99be6.js",
    "revision": "0fc17fdf5ab28baf86804897b5e390e0"
  },
  {
    "url": "assets/js/286.057d6243.js",
    "revision": "2be314e4a61ba78d704cf90466910071"
  },
  {
    "url": "assets/js/287.09b361c9.js",
    "revision": "3d29ec5176d0af582d80394562192a02"
  },
  {
    "url": "assets/js/288.92ebb47d.js",
    "revision": "609d3bbbe911ef45594aa3d0aeff8658"
  },
  {
    "url": "assets/js/289.a1353900.js",
    "revision": "95fdd68ab63372401cc00dcdd2168f3a"
  },
  {
    "url": "assets/js/29.791d5724.js",
    "revision": "c7f92962d1c4fdad4fa9b8d360abc55b"
  },
  {
    "url": "assets/js/290.93e0b4e7.js",
    "revision": "c15b5d51e9c9323c53061c43bf6311c3"
  },
  {
    "url": "assets/js/291.c5ab4ef9.js",
    "revision": "aebf25231a480a8532f29b90a9f85f7c"
  },
  {
    "url": "assets/js/292.6e2ba215.js",
    "revision": "b1c495dce7b8a1489a1e13acaf647676"
  },
  {
    "url": "assets/js/293.c8ea6156.js",
    "revision": "258ee94925dfeba556390acb4b4b1d46"
  },
  {
    "url": "assets/js/294.a564bbc3.js",
    "revision": "4cb94ed49162b1a2b381ade8e14ed059"
  },
  {
    "url": "assets/js/295.024b4e7a.js",
    "revision": "9c6e885d632f645cb15639d879d106fb"
  },
  {
    "url": "assets/js/296.54a0a5fc.js",
    "revision": "9c2a7039390e351ae2104e3aee2197b7"
  },
  {
    "url": "assets/js/297.e80fc43f.js",
    "revision": "35824bba735d6bf0085077e28670bdfb"
  },
  {
    "url": "assets/js/298.e4b6812d.js",
    "revision": "5cd777a33dfcf729979b07b7b6ec19cf"
  },
  {
    "url": "assets/js/299.c332d86a.js",
    "revision": "ba7c91cd9802c58754a8c5737bba6ee0"
  },
  {
    "url": "assets/js/3.b12564c0.js",
    "revision": "a8b732c5e66aa361e072f7f7d7e3e174"
  },
  {
    "url": "assets/js/30.a6e00b2d.js",
    "revision": "c621e85b2b70ccb9a9a701d9aabd61ad"
  },
  {
    "url": "assets/js/300.856d0928.js",
    "revision": "d4b1d2d6b412bd25667bd6248834eb6b"
  },
  {
    "url": "assets/js/301.7c240b3e.js",
    "revision": "22946c5d24b5e2cb43ebf1c169e97103"
  },
  {
    "url": "assets/js/302.96a95e18.js",
    "revision": "7fedb3888dee9304fedccf4e7841b126"
  },
  {
    "url": "assets/js/303.5630df75.js",
    "revision": "c418ce8f93a261c39928a59201ab9543"
  },
  {
    "url": "assets/js/304.6d704635.js",
    "revision": "be81017b5a7a429f5c19259fce8ba32e"
  },
  {
    "url": "assets/js/305.b756f5ea.js",
    "revision": "0a91c5facccf1bf57fc1b87d617a7059"
  },
  {
    "url": "assets/js/306.606a1b22.js",
    "revision": "d8cfce035715e46af295ea95c34b30d5"
  },
  {
    "url": "assets/js/307.eba06f31.js",
    "revision": "b9eb81c39753678616ac08f9b96a4c24"
  },
  {
    "url": "assets/js/308.e6177c27.js",
    "revision": "f0c6eabd26b5a6e862156b287491bb35"
  },
  {
    "url": "assets/js/309.999df6f1.js",
    "revision": "84c9f4e1b1e4890ddf5ec3eb733a920a"
  },
  {
    "url": "assets/js/31.a97977ef.js",
    "revision": "c6f80f1450b448956500b3864f93db75"
  },
  {
    "url": "assets/js/310.79581fd3.js",
    "revision": "4a4bf4e5d12c14bd3e2dabe95b37d211"
  },
  {
    "url": "assets/js/311.40471233.js",
    "revision": "0a7315cf8656b757b8cb75e002d7dacd"
  },
  {
    "url": "assets/js/312.a2df7038.js",
    "revision": "05f931187c6bd9e13c7dc24323e6cdba"
  },
  {
    "url": "assets/js/313.7eeacda3.js",
    "revision": "0698d080236d48ece478c8e77696e1f2"
  },
  {
    "url": "assets/js/314.efb9ff22.js",
    "revision": "34b81997d5272aa72d3a3b0841241dae"
  },
  {
    "url": "assets/js/315.d11aec6b.js",
    "revision": "e890f09bcf30851bfdb976de0550b150"
  },
  {
    "url": "assets/js/316.11f231aa.js",
    "revision": "e4e3a42022b48abcc06d7992e2de34a6"
  },
  {
    "url": "assets/js/317.41296b04.js",
    "revision": "ca69c67e301ff99bf87748d8ac04d5f7"
  },
  {
    "url": "assets/js/318.64904d65.js",
    "revision": "37b69e66cf9af41d1257bc12c6eb1620"
  },
  {
    "url": "assets/js/319.8f606642.js",
    "revision": "510abf2520705cda325642abcad49d02"
  },
  {
    "url": "assets/js/32.8f949f04.js",
    "revision": "1b61c12359aafa14de39506f51f2a568"
  },
  {
    "url": "assets/js/320.6ff60b6c.js",
    "revision": "36f60c32f75d27dbad4c29ad58a40b67"
  },
  {
    "url": "assets/js/321.e7eaee8c.js",
    "revision": "19494ce30a74ea07f0ac79bc8abeace0"
  },
  {
    "url": "assets/js/322.9e492a72.js",
    "revision": "49d825e30c8d8c54c725fdb93b6ae160"
  },
  {
    "url": "assets/js/323.a4acd04a.js",
    "revision": "90301705655d978bb36b8fa34155fde8"
  },
  {
    "url": "assets/js/324.56b7253f.js",
    "revision": "0dc33185343355f464fe85b8126637dd"
  },
  {
    "url": "assets/js/325.d52e94aa.js",
    "revision": "e8533678a2dd1921c9c943d6ea505545"
  },
  {
    "url": "assets/js/326.fe8c409d.js",
    "revision": "1f80cdfbc3cb39357ba601af838e0e84"
  },
  {
    "url": "assets/js/327.7ea3cd83.js",
    "revision": "05eb1b685e5c0930ef86970aa27a4cd2"
  },
  {
    "url": "assets/js/328.f2a93c98.js",
    "revision": "5467a9768c14606869f4a4e2be1d6a40"
  },
  {
    "url": "assets/js/329.81a01a89.js",
    "revision": "7889e69ae5fd0cf27597259c3f83d3e4"
  },
  {
    "url": "assets/js/33.0b4e8494.js",
    "revision": "d6d9317f57a352dd92155f2cd2c2e383"
  },
  {
    "url": "assets/js/330.da84ff93.js",
    "revision": "91773472f4a2b3ebfcb58477fabceb8f"
  },
  {
    "url": "assets/js/331.a3a24d36.js",
    "revision": "539aae101e9df4ecd0b2469dc3adc0ba"
  },
  {
    "url": "assets/js/332.9da83a1d.js",
    "revision": "610f72168d518a429564fc90ad1d9bd0"
  },
  {
    "url": "assets/js/333.fc5ed929.js",
    "revision": "1974f50b0cb4fcb3e2b1fcc52e4f3e62"
  },
  {
    "url": "assets/js/334.c823496a.js",
    "revision": "ca6379d68944c433d895839ec7220807"
  },
  {
    "url": "assets/js/335.1d899860.js",
    "revision": "a319b011f96e957365d4d217a9ea3429"
  },
  {
    "url": "assets/js/336.d514ac8f.js",
    "revision": "bca2c44c53ab3017750fa1d819b48d28"
  },
  {
    "url": "assets/js/337.a826da3b.js",
    "revision": "63c167220f43731a67bc95366f3aa233"
  },
  {
    "url": "assets/js/338.5984711e.js",
    "revision": "1513c9f918d80cddef4af6173fbdc887"
  },
  {
    "url": "assets/js/339.c96266bc.js",
    "revision": "f688eb7ed1f4e9e1c931f91607109350"
  },
  {
    "url": "assets/js/34.6691983d.js",
    "revision": "608d7a6742e287772f0bbc0e42487f8b"
  },
  {
    "url": "assets/js/340.c85181e2.js",
    "revision": "69b8faf50528e196600bba28d1e59e1e"
  },
  {
    "url": "assets/js/341.6f6e8249.js",
    "revision": "516a76834d373b5717b5b50be61c83cf"
  },
  {
    "url": "assets/js/342.44284e35.js",
    "revision": "9349f7fa937ffd3c81f9ccf7403c136c"
  },
  {
    "url": "assets/js/343.d547a759.js",
    "revision": "293073a55ce40f6e0a8591d7e8dee23d"
  },
  {
    "url": "assets/js/344.ce864824.js",
    "revision": "5dc4ef00d166a6a6be1e37ac314dbab9"
  },
  {
    "url": "assets/js/345.f3bdb245.js",
    "revision": "2aa7a264c2660fc00b63bd3320815a33"
  },
  {
    "url": "assets/js/346.4f7d24e6.js",
    "revision": "663d4abeba622f2c909ec409d3e2b363"
  },
  {
    "url": "assets/js/347.8c5d5465.js",
    "revision": "7d8ba7477d86adb35a90916fc84dc7d3"
  },
  {
    "url": "assets/js/348.4d86c418.js",
    "revision": "619c223bd233fe7b4515905a5827ae2e"
  },
  {
    "url": "assets/js/349.eb97cb11.js",
    "revision": "f1d2c63e03f9e7978c0b2b139b9ae54b"
  },
  {
    "url": "assets/js/35.065e17a9.js",
    "revision": "9eab2bdf3f33730c6bc41bca00552596"
  },
  {
    "url": "assets/js/350.13055899.js",
    "revision": "66e869d9726861ee2adf926d49df0513"
  },
  {
    "url": "assets/js/351.bb0d8c85.js",
    "revision": "fdd51999c3152cc559c2c9cc8f9346c5"
  },
  {
    "url": "assets/js/352.c2e4dd34.js",
    "revision": "919431f315c4829e6bcd548fa3791439"
  },
  {
    "url": "assets/js/353.026a4d49.js",
    "revision": "7dda2c8d2e89845607a61d79d3f12a05"
  },
  {
    "url": "assets/js/354.0a1c745c.js",
    "revision": "0d1ee047e2afe8ccd114eb0140b3417e"
  },
  {
    "url": "assets/js/355.c7a50fda.js",
    "revision": "798ae358aafe28b42486a4434b3e4d6e"
  },
  {
    "url": "assets/js/356.42edb6fb.js",
    "revision": "7f487f4e95098b642d89d6a407749574"
  },
  {
    "url": "assets/js/357.34853409.js",
    "revision": "11e1932b5412789db4feb019e095405c"
  },
  {
    "url": "assets/js/358.f8629959.js",
    "revision": "34ccb474e658ea9186ceb89129663bfb"
  },
  {
    "url": "assets/js/359.233dc943.js",
    "revision": "a0548d0a8754ad9d4f7352956b24f014"
  },
  {
    "url": "assets/js/36.073a19fe.js",
    "revision": "dc350265cc1edc07c98dd9b8631035c5"
  },
  {
    "url": "assets/js/360.a99bc0bf.js",
    "revision": "921885a8c50b57b9b8435305abd5119a"
  },
  {
    "url": "assets/js/361.39d3a693.js",
    "revision": "579c22ba81035d3f89562b778d775a5f"
  },
  {
    "url": "assets/js/362.1f212e8b.js",
    "revision": "195431d8b6490b730e8ad9fb0e58fa52"
  },
  {
    "url": "assets/js/363.86f70846.js",
    "revision": "4ae4566bf5191dc75ec7b860aa76827d"
  },
  {
    "url": "assets/js/364.2a88a9ea.js",
    "revision": "289e6576929df0cf48c70a677f61faf0"
  },
  {
    "url": "assets/js/365.2c71f455.js",
    "revision": "73e3e6e5325c8ba79e0ebb13fe171aee"
  },
  {
    "url": "assets/js/366.dd4a5d04.js",
    "revision": "6db1212bd4fc4b1b00bd10cb2ba641f4"
  },
  {
    "url": "assets/js/367.46fa3339.js",
    "revision": "c0d42f0019a98e903162d7673023362d"
  },
  {
    "url": "assets/js/368.e75a719e.js",
    "revision": "281330bcba721f610c0ce8bafd21078f"
  },
  {
    "url": "assets/js/369.9b32122c.js",
    "revision": "3f0f78db6e0162402758f64dfdd2ef5b"
  },
  {
    "url": "assets/js/37.a178ef3d.js",
    "revision": "3ad5e093a9877941a4d733afeb9ad13d"
  },
  {
    "url": "assets/js/370.bd55d635.js",
    "revision": "79b14fd423216c0b3764b730167eb090"
  },
  {
    "url": "assets/js/371.5f3bb1b0.js",
    "revision": "a26eb50db0e23476aaa00e37c424e1f2"
  },
  {
    "url": "assets/js/372.79f9d8f3.js",
    "revision": "7c8060e9f60c4f0cda5b8e40c03e907c"
  },
  {
    "url": "assets/js/373.ad4a4c4c.js",
    "revision": "52e206549fb71d4daed0d961ca2f3d40"
  },
  {
    "url": "assets/js/374.114b1cf3.js",
    "revision": "22c258f6391aac9100342fc952b371a9"
  },
  {
    "url": "assets/js/375.019bec90.js",
    "revision": "1b6f2f649746c39a05a71260b7ff511c"
  },
  {
    "url": "assets/js/376.035466bc.js",
    "revision": "2a666c15f9fb33901bbd3712088224cc"
  },
  {
    "url": "assets/js/377.93300725.js",
    "revision": "9ef5cee8ae01a5eafa56a59fa84781f8"
  },
  {
    "url": "assets/js/378.53f864b3.js",
    "revision": "e8213ae73b4eb301922a9084f40f1a3d"
  },
  {
    "url": "assets/js/379.647459bf.js",
    "revision": "6fa095d2f221b130927625d65a382673"
  },
  {
    "url": "assets/js/38.2ef28003.js",
    "revision": "fb5a873266865d8e8cbe29c630c5eb82"
  },
  {
    "url": "assets/js/380.6c2f7df0.js",
    "revision": "ac544915b41b22e7e30547fa5f51c246"
  },
  {
    "url": "assets/js/381.b2f3c15d.js",
    "revision": "66aedd4459e9270067c6cd88901839a1"
  },
  {
    "url": "assets/js/382.90d1e43f.js",
    "revision": "5d65156565dc6ade8126f63bdcae7936"
  },
  {
    "url": "assets/js/383.01dce651.js",
    "revision": "dfebfce74df06cfe22221696d35b0ef9"
  },
  {
    "url": "assets/js/384.f25286c1.js",
    "revision": "02c5729786f22b3af30958a9b93a74f7"
  },
  {
    "url": "assets/js/385.ec7bc079.js",
    "revision": "ccd9f4659795eeb049e827fc08689a40"
  },
  {
    "url": "assets/js/386.52db8f65.js",
    "revision": "b1d5b5409a37ad40a83c1b12e0f4c251"
  },
  {
    "url": "assets/js/387.71c7d0e7.js",
    "revision": "99346cbf2d65fd02cbfd8e35fce3dff0"
  },
  {
    "url": "assets/js/388.a723db2a.js",
    "revision": "cc904f9f64db51353f2841ab5dcfe3ad"
  },
  {
    "url": "assets/js/389.607f3ab5.js",
    "revision": "23bfcf3fd61288c741fa5b983eab71e3"
  },
  {
    "url": "assets/js/39.3c71bde3.js",
    "revision": "44b58519d4de43f9ea59dc0afc48f7ed"
  },
  {
    "url": "assets/js/390.64699ee0.js",
    "revision": "0fe6d28dd5af5484f5ea606ff45a2a53"
  },
  {
    "url": "assets/js/391.3f9ccac4.js",
    "revision": "40889a2972b7d54259b2b315b60a6b9f"
  },
  {
    "url": "assets/js/392.44e544fd.js",
    "revision": "7c8b06ea8bae47084ca17e41b946eeed"
  },
  {
    "url": "assets/js/393.c356437c.js",
    "revision": "5d0509cd918b8d8e8732017608f1624f"
  },
  {
    "url": "assets/js/394.28f810ce.js",
    "revision": "ea3dbfe8be73d024f7af03a19db15497"
  },
  {
    "url": "assets/js/395.d75fb7ea.js",
    "revision": "f292627731ada1df07f01f301497e283"
  },
  {
    "url": "assets/js/396.e92123fb.js",
    "revision": "c49809a9f7a0c58e57aaff1c124d81bb"
  },
  {
    "url": "assets/js/397.64144fe7.js",
    "revision": "6365bd131bc5a3201f82eaa59d377ba9"
  },
  {
    "url": "assets/js/398.fffd04b1.js",
    "revision": "9d478af01dc7c2d7528ba24db8043196"
  },
  {
    "url": "assets/js/399.93a226a5.js",
    "revision": "9e88e53caf690ecade90b470a60a7d32"
  },
  {
    "url": "assets/js/4.1dd95669.js",
    "revision": "f5c985bdeafebba96c7f80314b38952b"
  },
  {
    "url": "assets/js/40.71bd215a.js",
    "revision": "02821b5b9b1a394ab561f7c6ff6b9551"
  },
  {
    "url": "assets/js/400.a8203adf.js",
    "revision": "9debb9457499033c105d485b227bb7e5"
  },
  {
    "url": "assets/js/401.ac2c1954.js",
    "revision": "c40dd50a2fe7e75fd838e5c3170b638b"
  },
  {
    "url": "assets/js/402.dbf6469a.js",
    "revision": "e479d01928c271b6f54f86edc1e8e526"
  },
  {
    "url": "assets/js/403.56997208.js",
    "revision": "6236e0d4961d0a783d0f42bb80ccd48c"
  },
  {
    "url": "assets/js/404.3cbfa136.js",
    "revision": "6fd95c5d5ec16a343928ce800dd041d1"
  },
  {
    "url": "assets/js/405.1e20db79.js",
    "revision": "8471133b3c600d064d708bfdbbc37d4a"
  },
  {
    "url": "assets/js/406.3f369709.js",
    "revision": "4718c83b90a46bd1762d7fe303cb3d48"
  },
  {
    "url": "assets/js/41.a4fc4914.js",
    "revision": "a5c63dd1c35b6fdd306a051209aa2926"
  },
  {
    "url": "assets/js/42.6a4a56f3.js",
    "revision": "ceac0cbd6357726411eb955abc4ecd55"
  },
  {
    "url": "assets/js/43.fa2ec22a.js",
    "revision": "04b7d432a7cfe4954f3851798453cc21"
  },
  {
    "url": "assets/js/44.12526b15.js",
    "revision": "fc831794a76d2949164831f131e75ba4"
  },
  {
    "url": "assets/js/45.26d960bc.js",
    "revision": "df872dfc052f382a19c0a827ca8295ac"
  },
  {
    "url": "assets/js/46.a0ebb687.js",
    "revision": "c08d0f5fc316feaf9a422e910a06c209"
  },
  {
    "url": "assets/js/47.c92f37b9.js",
    "revision": "96a28c2aa8f56315f3af8fdc13569a71"
  },
  {
    "url": "assets/js/48.8aecabe9.js",
    "revision": "8da39e0c3796c369276bcb6f149f36a3"
  },
  {
    "url": "assets/js/49.fcf1ec9e.js",
    "revision": "13be5a1a95a56608968bcf8292301942"
  },
  {
    "url": "assets/js/5.98c7ee6e.js",
    "revision": "4defaca421667458cd4b693ea63ac294"
  },
  {
    "url": "assets/js/50.205feedd.js",
    "revision": "e3046922d0e085111935591f0f492b18"
  },
  {
    "url": "assets/js/51.f2777d93.js",
    "revision": "89fe6c1c5d2bdfa1969848bc39353305"
  },
  {
    "url": "assets/js/52.53e38961.js",
    "revision": "df46c3ffc5afc03f29d39b8b8dd1ecca"
  },
  {
    "url": "assets/js/53.0610a0a8.js",
    "revision": "4ecf5f1e6af9702c520bc0046feb2619"
  },
  {
    "url": "assets/js/54.d77e3c0d.js",
    "revision": "bd2843bf88067cc529393258ce52c95a"
  },
  {
    "url": "assets/js/55.df04e0ea.js",
    "revision": "ce07c332e390239abf0b1b4ed901accc"
  },
  {
    "url": "assets/js/56.b6c3b376.js",
    "revision": "5d1992c1419e6a405d3be94e1889f472"
  },
  {
    "url": "assets/js/57.f3ef6375.js",
    "revision": "195962469bd71e18896c516851dadfca"
  },
  {
    "url": "assets/js/58.a5d685a8.js",
    "revision": "becd446b632c6833919be6be3ce6bc36"
  },
  {
    "url": "assets/js/59.e7267a44.js",
    "revision": "60a109eaf6c1b44586c04b75e129a811"
  },
  {
    "url": "assets/js/60.d8a973f5.js",
    "revision": "c6e19faae91669e8a81196c631453f7c"
  },
  {
    "url": "assets/js/61.2ddf12dd.js",
    "revision": "7de2d154e20e0eb3534fe31c5cf246e5"
  },
  {
    "url": "assets/js/62.610e55a4.js",
    "revision": "eb09c9e0d72ddeee51262a398b57a750"
  },
  {
    "url": "assets/js/63.6b842ec7.js",
    "revision": "179f709d206262a2316f309bf42f87aa"
  },
  {
    "url": "assets/js/64.c95f9bb9.js",
    "revision": "b47d36cf72dd20b9a9390185213f8686"
  },
  {
    "url": "assets/js/65.a4719dc0.js",
    "revision": "212276a8ef30b63e97be2406f6a2ad11"
  },
  {
    "url": "assets/js/66.881125f0.js",
    "revision": "50f746cabb9b3bfd1fac1bc40c59cec3"
  },
  {
    "url": "assets/js/67.b7990b05.js",
    "revision": "d097b1fdc4023adefde39bd1919049ab"
  },
  {
    "url": "assets/js/68.4e2acaeb.js",
    "revision": "e3c127b8d7c2291ed42c8d41f5970b0b"
  },
  {
    "url": "assets/js/69.4d4a5a01.js",
    "revision": "328cccd6ee5aa56de80811a2cf00df36"
  },
  {
    "url": "assets/js/70.2ec3826f.js",
    "revision": "3407f58a41d7b27640c9b2fc67206f92"
  },
  {
    "url": "assets/js/71.dd71ce6c.js",
    "revision": "bbd3300839e6036792e70877df8e7f22"
  },
  {
    "url": "assets/js/72.d4c56018.js",
    "revision": "9f71881b84fe72d62d29974e4a82f77b"
  },
  {
    "url": "assets/js/73.5de5e2b3.js",
    "revision": "e985b393a41281230505539ea718ac7d"
  },
  {
    "url": "assets/js/74.9e860042.js",
    "revision": "6b1e634f56147bf72444fad1539e8b73"
  },
  {
    "url": "assets/js/75.4a4c6ff7.js",
    "revision": "7a5943efe6d030d43c747c3c0663c389"
  },
  {
    "url": "assets/js/76.008785c1.js",
    "revision": "5a7b9918292684914fbf5fcfde9ac36b"
  },
  {
    "url": "assets/js/77.a7f266b7.js",
    "revision": "774170947e06fb70314c1db4b8730140"
  },
  {
    "url": "assets/js/78.424db593.js",
    "revision": "932fab8d3d937f5a96d5fe709b8ac342"
  },
  {
    "url": "assets/js/79.858bf391.js",
    "revision": "da679fdc749728688a980325036aa0ce"
  },
  {
    "url": "assets/js/8.b00e59ed.js",
    "revision": "2b919bc9a5dec4460194d87a2d90ecb4"
  },
  {
    "url": "assets/js/80.ea72237b.js",
    "revision": "43faa928785341d58d522a622dcb75f5"
  },
  {
    "url": "assets/js/81.acd0cbfa.js",
    "revision": "15f3d4ada83aaa01f6c7d28f710c2946"
  },
  {
    "url": "assets/js/82.585d3f8b.js",
    "revision": "73da2b7df6a363a831d62f0c27b2563f"
  },
  {
    "url": "assets/js/83.08f9273d.js",
    "revision": "ad95f56c1bdd12c7b343c04a54f1c9ff"
  },
  {
    "url": "assets/js/84.b078face.js",
    "revision": "f95506c99d952f7d39576b456ae30fac"
  },
  {
    "url": "assets/js/85.6706191f.js",
    "revision": "893ac597b07306e1a3c001b036d9716e"
  },
  {
    "url": "assets/js/86.0e13d806.js",
    "revision": "f3a2171ea1e83bbe7922c12053aa7db5"
  },
  {
    "url": "assets/js/87.cf09b7e6.js",
    "revision": "e3ec401e5f1e935f52cefb3d25f0609f"
  },
  {
    "url": "assets/js/88.4656015f.js",
    "revision": "2b9c8f3ce6c9e0e02e05ccb260401e26"
  },
  {
    "url": "assets/js/89.b9b983c8.js",
    "revision": "dc913dbef6f27a9b3e7750af44a6341f"
  },
  {
    "url": "assets/js/9.2b849020.js",
    "revision": "7ee0cf5dfadfd30d5652c16a481b6e4a"
  },
  {
    "url": "assets/js/90.328c660f.js",
    "revision": "cfafcb55215e2a92984ca3fcdec04546"
  },
  {
    "url": "assets/js/91.ebc24672.js",
    "revision": "548449b2a60b0fe94cdf9060285ab503"
  },
  {
    "url": "assets/js/92.158789e2.js",
    "revision": "b3ed7ba210623e60a2f7572c4a708c08"
  },
  {
    "url": "assets/js/93.692b62d9.js",
    "revision": "14391d3f292b4fb3f60be03e2e050b43"
  },
  {
    "url": "assets/js/94.1cb9fb41.js",
    "revision": "b4586c0b833b9ca01d8dc693079e4362"
  },
  {
    "url": "assets/js/95.0ae35522.js",
    "revision": "aa3b8512ff432211ff55666a4317dcd2"
  },
  {
    "url": "assets/js/96.6464b63c.js",
    "revision": "92aefaae15b5bf124d52a7a83e3aff92"
  },
  {
    "url": "assets/js/97.e238ef78.js",
    "revision": "bb98143fd5a86bbc0f3b9f2a155cf00a"
  },
  {
    "url": "assets/js/98.711ac16c.js",
    "revision": "8fee336c6e929d7fc2fd9a2f772d789c"
  },
  {
    "url": "assets/js/99.271e193f.js",
    "revision": "03b42fdb20d8fee476c94336f2e06afb"
  },
  {
    "url": "assets/js/app.ebd8e8a1.js",
    "revision": "994d60d16972c645e78e45f2e79edd85"
  },
  {
    "url": "assets/js/vendors~docsearch.a2297aec.js",
    "revision": "a2fc8d020eda77fa4e08ab3bdd10ef92"
  },
  {
    "url": "index.html",
    "revision": "992a2ddc3769f1e5f8e62ff1ecf5bccb"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "51d257ef86c09ee1b6740891bda82a65"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "09020b5033403b5930ae91f1b9a0abeb"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "0d64b78399b25fe6cb26ae9cd89fb922"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "edfaa6c39fb78863427152286cf33f14"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "528a9646d3ffdf49832848947139814e"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "784f9b57dc589bda05c51835818ce364"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "8f96cf553fa973aa6239630c59560c78"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "307417cc3dab8e0b6ff1f253b55514e1"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e8b48d24f597ddd1604afa87cbebdd18"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "0d757bd1842ffaa503a2796e5d719be7"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "16c363d04fd0b67742a69fad0ffb0fd9"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "d4d6521880b0610bee587f0b62390b11"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "d96cce5b22580526a6092d82d208e868"
  },
  {
    "url": "master/api/index.html",
    "revision": "56adfd6b7c0e8e47837c80c09bec944f"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "999f82ae16a3fc40814013535dcd01a8"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "6f83a856a3bdfe55cb4a58b59e7dc687"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "1fd53b11acbe45f0b80e39c187d547c8"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "42f5c82bf54656ee6fd9b044cb0a0338"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "3ede5a24362efbbf1b8dcb9c16388598"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "3b5180b5e4cc2b311406e45bbbea4a6f"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "44ccfd6136859f2a73230fe0e7554f22"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "da97e0cd9af06826f2d672c4300f591c"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "30287c74280c981fa8385837f4821da9"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "05c589941a0fd249df83d1b51e424d76"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "1d18f2ab3472dfb6cd39f674e0d53fc7"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "b85f0f4a95952f77b813d9612bea8cc8"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "8ea1577160b85b933ecd947392a190f4"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "4fa38c90e04fedec270edb7c13d90da4"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "a3bc3e7fb413191dc20113d13a67ff12"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "3744a0d8185abe1710ab07a1714c8cab"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "1eef974396fefe8bf2fb9db829d4db5a"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "f13dd04da2af71f5d8f09a7008058466"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "77e2adc23446332087bb3067985f91a0"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "2419272b73665632053c7c324b46ace6"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "f7c84aebb80c8345f543d84cba9dee94"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "1fca7342ce96e7e978f6eaf0293d8f5d"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "3448c55951447da8dc83461102deb87c"
  },
  {
    "url": "master/packages/index.html",
    "revision": "9e2974daa4b3e2e891210dc662dfd7a4"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "058b2a9ecb5f0b86c420260364b0406e"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "28547f31b026aec3a950f3b7ef7b162b"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "0a7b6b8dc75b69c10c54e47e1ccde730"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "b663cf5b55137b87e77b5854fd50c326"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "bc71ec0e0500cd2152eba2de4c6cef6c"
  },
  {
    "url": "master/packages/views.html",
    "revision": "46441499f91924f73f2545c93ea70547"
  },
  {
    "url": "master/performance/index.html",
    "revision": "9706d4ed10b08235c49e83ef4c8727c6"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "43a7dcf3492525528c9f1d0db0f8fb16"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "a22f71f6cb3be3efd304a577a2f1ddc6"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "f735d274eb13c36c19c2c10feb76cb49"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "6eab61ebec96347f73a265a7ff483338"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "976d7dd3267d08e3e95635ac39d59067"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "240dbd4a705f578de7c81b1c3a8b2009"
  },
  {
    "url": "master/themes/index.html",
    "revision": "9d6cd17169401ccc03a66048d9bdd856"
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

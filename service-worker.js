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
    "revision": "675c9cd6df60b8ff0206a89a37d2a1e3"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "76e6ad1b946c635af54e9bef47a69f39"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a8bc8aec15c9c41aa84bd331da52cfe1"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "368240ce34d8566465907c7c27948c2e"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "9c0646246bdc05c84735ed87c04c48b3"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "2fb1e40fca4a4dcf5d4a3ba9f047bf28"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "03c20531703718091ddc5938cf265a9a"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f38835b27100c2781de6a51718f02b27"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "845d22c87df399861cc6e56c1ebdd99f"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "18d9df0dad7441eff813a32cb9209a2f"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "850c8aef58d4decfb0cb51186cc916e8"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "31ac684d5b6fd7dabe08e73c568931dc"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "63920e62a00de8e3bb4fe55cbcd7c32c"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "8886aed52bc6022dc9e3b4673ab59515"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "b45b5c15420ce8a7cd907826ac0b23d2"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "a5239c572ed2b96fcf7c5ebd372f8dc1"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "346995c2015d8c508223ed4fc9ed6b48"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "237c315ef28770fedb24744f152c3ee0"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "b94569dfb1aae56d4dfd8bced3ca09b6"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "cfd196aec4dbea6b2b7bb9b89d3d6c59"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "a21ec8dbe4922197a4e71fcb3e1932eb"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "3a0f573412a726f4d16ab0bd18c7cf1f"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "15922087f1b5363d5d921bf02a9c7d20"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "c8000d8e0180410527d09e7c23ed8f6f"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b58a4485a9968658995a00cc16b22247"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "479cde31f601dd5eebd3413bbd048720"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "785cd8ecc04d3e4debb790d2b8000e2a"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "231cdb0288cce420d70915b26ee32840"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "437542113f331af24ed202f181499b1b"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "562e39a58e00700d298f873387858faf"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "ee74be220e33afcb5438fb34c18460e6"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "3e1eff9cb6306c1516104637ecdd8f97"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "a5bd1bdb78ae5888bd4c80c839391473"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "ce4c379676235d93fa8fb6400cae0097"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "f67421d6d2fa642917ffa52a7995e233"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "22dc5bb061f8fcc894f89db3633fb871"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "9b1c1a0823d4b5fa3ed7231ab94e61d1"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "50ce5019b3be930df0a12af9e21fe8da"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "0fffb7b500ef8f3f4e09b209e9ef0915"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "38df670d8b5929961b3f9acb16eecdf6"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "4e0aa3308b350d2d898611d109b5e03b"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "e7bd8cd6e2a1db12f81cb9e79b317d00"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "889454f275947405009772878d5eef04"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "58909ac10b152e0cedf873d508ed289b"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "56e4c08631a01a5a34e258073ad7d183"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "cda91851c232fff86c2623d1a6fc42ea"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "3c6e29f7309bbe43a90dd7bb2564006f"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "9f5c94dd7f14bf074673aab973b964ec"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "06793d9e5acc966a219fab4a2ea2b938"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "7ac5fa8461ca7c8223ab390dfc0cc3c8"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "da19165e808a57ad2e161280a584529d"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "6f7cffa843ad87a1db8cbdfba635e104"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "7ee799e6f2c849e3c0603b5c920951da"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "ce0a7851cb0c88875d28082c10d865b2"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "003dd15aab16b5bc0e2a042bd683ee38"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "9b3b2477830defc953ca41abfbf2b812"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "65435548216ee0a774d765e043a346af"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "274a81d154478918bdbf9859da34f217"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "9632fa8ad0e77688e863729b4755932a"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "0ae7c2f1e3441285e977b95fd303c77c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "994763336d13aff7dd06aeb7ef7840b0"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "c3df68ddc3763fd958bcb90e822d5045"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7837afc876670e202e6fff84f76684ac"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "dc9a9b52b076c4f1ae808a989d3bb0f1"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "56f1abf6a6c3433d7f149ec9059c5ec2"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "5cd6792e26c63258b480c6cd10affe74"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "43c471c4133fbaa5ea24ac7b62853e3e"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "d0b1195cfca2625ae7515010d7f52c5e"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "792e223407818a953952552bbc90fb2f"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "48c2b4469405d328376c130f6ef37218"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "bdbcaccfbb5417063464a37b9e169340"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "bdb105799db0f53f49f2db76ddab7f03"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8d6f97802cc8c4b37960e11d40b7a21a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "3ff65714b432989dffc4a44d8493da21"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "29fe945bb1fd4309a4156b062740b378"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "b3296053fffaee183d7afbd30cd27355"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "b22b2ca2ae8ad44d6eb0921f3c023e68"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0a9dd0b304ebc5853a5eac892a93b578"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "1aae2dc7282595a3aa4b5386bc1f43f9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "6e32da531d1a1dc16b72cee9f0e42f5a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "e41b3e19b6657de3d2516127c19f33f2"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "01968347563a92829eead2920e976bd6"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "d9dd7237c82cbe9f53f0812d282af06a"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f4061b2215d4852b1cbc094f46212540"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "a58353ac64f19a383ee582a2003b3399"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "c802eec52a90dcb23e1824903e63c8fb"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "439fe10ef3453b934dddcc60b70ec8b9"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "b8357b3e5c5e919f968a5e409188bd5b"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "81c5bf522e62b99fb830631e83b9338f"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "0f922c456b5e685e3cd42e74aded1f11"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "b6f8ef579d1ac88f723d80abc3798f86"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "f989276ccfa4fd81bbdadedc6653236f"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "e543c994d78f39c774f460187247bf3a"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "e729b4a1fafe4d892bce008fa1dfbe6b"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "1d2a8d3ef2c2f8978707cfcdfac5007a"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "b2a89e796b39b4c9bb226aaff0c11ac3"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "39d8b2de5ce2af9491d6febd09d5a6c7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "e5e5d471ad2679ca3cc3c8e5b61917c5"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "bbcb264adc78c14256e38038196c9aaf"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "ee5fd827596a47f58339a4bb47f5b6ae"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ec9878eec0fccffd8a905bcf0b9db890"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "e4504c383f8d74273aa35f79e4d4d414"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "cb11e4dd096ef80dfdadc9ce98f9d8fc"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "ce585cfafe1540151aa71d5ca1d6365f"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ae422890d16da2458ca345937c2d4f8b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "ee4b124e6b608ad77135fc7807ce3905"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "78a6dc4ad6a6fbb35cd949620c806eaa"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "ed50197cbe24bacb563b76fddfa30a91"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "465e08a60025e36e46f3d5b30bfaa823"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3ead94d033ba5aa2316c44e1c05c688f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "f07e3ed6b9c9eb7fdb19cea91255e542"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "fbd683ce3a55cb2d28f99a937f2bec28"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "950303c24c99ce85b68c9e87cd2eacd4"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "2ee9265c1fa2b074d64d12d18e4bd244"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "3487ec4f27a5c305def29c614bec8818"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "d3852488c904ac9e6e9d5902aba88006"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "60941a02a005d88cdda343e45155a87c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "40483872b52d7735db9a60196e02e9c8"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a996b2637c6cef36e073b6057776a717"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "faf68f02d0e5f5fc63dba4a44ce5bcf6"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "14f113af002fa66f52cd6761c1df4453"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "333a2666006a86e53c23443596886d6c"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "0843baa05137951fe102ee9aab258554"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "b8f33bd14877c73547991c496e494f2d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "3aa9faa1ce6e9e12efbb92c19e680114"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "6abb6a4281dee780416cf4467358d858"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "90c35765a503a425b6115fe831887f42"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "52ed4485ae04871bb8443d6194881c51"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "7d66371a6592dcdccfb84f36c721894c"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "813f599eb7820ba9e453cdf05300afc4"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "7fefa0ca35dc4c049374ab5c939d4ca4"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "e0bf9a59117e541d7525dea53c01dd3d"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "e503a324281fe28bebaa7a3bd3f727b0"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "87e68e9a77ee8788770c0322f74d0241"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "27a457e60eb96fabf352c6e754e54684"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "5c3ffe3b033580e8689412ec7c4775ac"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "0c241b6ef85256d9804334bdcc8c3395"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "74e82db6f159c613ad49083d263168bf"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "e9e8b7e52e9d94f236eb979388e8c217"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "3832a5a376977007039f4e1288e228ff"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "9d8f02ad273687ee0847d447f5fc9bc2"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3cade659d0366854c572b4ab32bac582"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "560b2e7facbf0867ab442812f2fff363"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "bd229f7b6590a7dbed31dad0044e61d2"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "9ff15c20e2169f2194bb84f0ea2ad517"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "7e94e6cfbed5158d318563375714fa72"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "f59046655e65547ef83b2fadb8ecbedd"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "e1d519cac4a5c67cf78732a357bdc399"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "c74d1e5f9ae99d29dd67cb722acc95ee"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "7557ef62658990164c9706fa282f60fe"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "630cdb92e5e64870361a1bab637ecfa4"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "030a882cf4e540ed9dd433e74438a058"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "a57fda4d93043b2b248bc781a8666545"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "1744f7fb1ed5f840133ca16108999ea2"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "ae9712f4740d6520acf120b102c4e8d7"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "66b037986babbe25d816d3cdf42c4c66"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "be2da17755e55ca1d6d8ace959e1851d"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "b36a568137df096a898c4d46d321372e"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "899f7dae86e703f7d6db7311d2529a6f"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "0aa2eaad801eb7ebd2c0282072401935"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "7d710e639151028cb8c78892ca8964cd"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "e48ef985e133a159ca8999ca7d9a4531"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "d4020aa7b8bf6b4f516051dec2906c0c"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "98e82bf39e01f2bfaa8c90f3e3338c3c"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "84775433cd37ebad1c5660e07fb760ba"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "e5af32c78e52690ee1d9632433f9766b"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "677a9a59300ee0b272fa48464f117122"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "f32f0c5fadfbae10b80d86a1ac373fda"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "1449d19a2021f7a805b874e0173ca629"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "f2397d71febad44a71e6fa40893db6e4"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "e44fe4dda0917b3b12ed4396d8da8c06"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "8a7eed9c3fa3d9b7b7eb85833842b671"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "533d83e606bb4e2e2100a49552cdc39e"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "e96d138af953e4440db7184bb3972f25"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "1a37d4a2b9b9bddcfbd19045841b9174"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "86c79c635b00cc1b2fa7ef567d36a56d"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "f4570a0e01163738af45b762b816853b"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "0208ccbbf810d1eb28c0eee5283c6d86"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "db1d849b234330047bd4ed80e8ca7c1a"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "9e8568853a9791ff52a353f712cd187a"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "6a087538ea9440ad206fdee2fbffac98"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "e3dfac030d0551c18c5aed6881a592b5"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "d96848e22e7eb1cfd1b1f5a9ce4da88e"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "6277a89a2f3272e1a5722863b6bd7f89"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "75f13e5efa85ae9c5bbf347f5531b4f0"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "2bd59234e191c178b049c26dba362b5a"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "c8a054129df97973318453c8d59db318"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "7931898add2a1d90918fd079fc4563d2"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "54f36b3144406c4e1973ed3245fd3b7f"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "0f874cfa8a7c9ed30234020c12a17b47"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0b6963b1d3fa123e9b74c31e989c92f7"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "23632622eb39b0dcf5a5a468946e30b1"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "7f2e8ad3546772001a4d300f8f06b84b"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "64f53aff51f7725a79d1489c277a3ca4"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "027975c37fbb7cf8e9bf3b5d8d48c373"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "c7599be69a44e798804d7160595ef6e9"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "d4a2b1e5441502f5a7a1b3fab31c6778"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "36d1e33d64cafadf8d1b68222b974359"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "a66c3f3065f108cefdd0391f229bf234"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "013ec870eb92f5c32f60ee9d445a765e"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "b950d20ba0044e0a31c25a9cd80defa8"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "da2226ad8a055fe7bfaba4624d7d01d0"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "74caa4fcce45b737c9cecae3ba8ebf99"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "0a870cb26abcbb8a1e0c002fcf9e5b61"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "6422a70b9c2b55b871e4d922dd4624be"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "3998720488ed3598dff88aa299d4b3c3"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "531d7303524261ae69fd4a4d21727f50"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "2013f1fc8b61d1605371fe8f4fc71544"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "f91433b3438e6eecbe7c02ee971b80bf"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "5a7e589b1b8c438399dde3b23f82d7ca"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "d414732a5179044bc0761b832c8ed955"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "c67f76bb68c8d8938d583ebb983a2978"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "bdcb54fdfa5279c5569f992bbd8217cf"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "3242ef73618323f45c9494b4b032fd5c"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "b46b55d12c09deb4878ac708ba6380c1"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "9dd2fa683c27d6212897e28500efdda9"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "98a9fca04032e88ca3c611511fe4ada6"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "6eacdd5a97962ed29346a32727d1e71d"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "e1d27226444c4661cd8b67242daf99fe"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "3da004e66f5730184df0aae22ac178fc"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "8659daa7df409029d6ecb6197e6bc539"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "466ac08ed5ab505a1cc39ed74ebca93d"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "cf0f3f649b44f013072d2cf7266c3ba6"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "28d8a38bcd52b7561e8a089b5850c8cc"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "f31c7f3c886f1f0d3587ad34dc5876b8"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "3e060b1bf37e67366f7ee42c958ebfda"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "d96610730e0339a73bd2a76ab37b0372"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "65e8adad98713da82eff195b64e63a6c"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "e16e1fee513e49cc3a1be2973dcb759a"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "00107eaeb73273e9fe55e6a56229723e"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "390778e313c9710ec14d4cf8a7a9fbd4"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "9298a93d04e54614c1993365b6f535ef"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "6128dcd0db8e980aa6e29e096a221668"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "b44437581e33fcc8f9ddccf03acc3533"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "5c7dd1881a4e354222d84efd0a5ba166"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "c98ea282ac4ef58cc2f50096ea61f5ca"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "02b27f898b3cfa4f1a414308140d4e20"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "b90d7db6256f790a6347af838f5c8385"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "511e4d6b2e8ccafb8fc64fd2b5e81f96"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e36169c36369560323c5c3371d4c6655"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "eefe8cc4986ccb2aa769df311fa93373"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "ebdbd19a01ec92bac9d699b0dca5903c"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "a50e2e28c6d83cfd25b9e4a12f1172e0"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "5675f0d28f6ee7cdf3041b47ae0809a7"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "ce3b0ac89edae8f8201ffd182160f615"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "fd410df8fde56bf5c8636c1f3053b4f8"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "3ab056d3d287a904cc18545cf7cd7118"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "8c171ec002d9a49b94a735fa7607258e"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "1d6666b4f59eb4fed34a1f30f471a1be"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "e95197f3e9d798985ee809ac005c5a35"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "d8b09642f200a1749acddef978033523"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "9e2cc8e55a90b959af3d705a4283fd14"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "036e78760056bfcb2bc30dfaef2982f1"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "375d03b5a119a5d70ed753a6a2c3012a"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "ca5f8494730c6fc7a3ad67a2fdb9a77d"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "59d6f67183931fb4c02982d8fde4e1df"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "0349bca0ffcc7b993b29f81b3d86ae28"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "1e09c558827e72c530a0075ca20a7698"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "4df08251196ba1779afbb5a06d46fb42"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "823d0c76fb2922184c5cdbea472432cb"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "85a0e12f4cf9a461650ddb724b773dc2"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "b55d28a296c1979d2b5ce6c375e3e8a5"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "720d74a2a05acd034e18e42be0416e0a"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "35da6a677a2f4ef0d616d3e59fa84fa1"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "f49295802392a65a923d7b327d3bc1bf"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "a5154863a9368f23a52d6e452322085f"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "b8d0d2907048fec2ac597acd38712e1a"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "45ee8fc19bf86cc2dad42c3f4987dc2b"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "526c857cebb3de4d011b28ffbb1f03a0"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "aa1c5139d9e70a8ed22df8ef9eac1ab9"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "a9a635c9c67203d4a9bb7cfd274bf892"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "e3b9c308719bc98dbb7f6e111d4cbb7e"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "044ad2dc2f8a5aae88613aeb9290c236"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "096f9003ee4b8226da7cd6be353aa976"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "7d3a7f188987770ff059b11188f01ed2"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "c3df1e575e561aca6a433977aec078c2"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "83add56376179dd2d4acc5ad8c5195b2"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "b2833d0f616a41ec0f7c5842deae74a9"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "11d04f717014242ca9b4739680016439"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "defe166e72bca93f552688129436214b"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "b47fc9f30bdc76ea8941034216d52e4f"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "01eb96d0012a7da1728f5ea24b8510db"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "a13b2631614c3cacff117ec5141a93cd"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "1c0bf7debf823625163d92e78464cfea"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "b3d2fe00763fb3fb4aad41709ea6bde1"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "66ad810a308faf431d54a5d042e5c0e9"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "1ef5fa401bdb97696bfbdf40bf059c05"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "e8956e3ed8cd2eb1e9b03bbfe10f7937"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "934ce68cf852f25fa852e3351778e86a"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "581422ebb585a4f3ab84ef1deafd202e"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "e845715d39e31aca70e8df7f58a2d89a"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "3ee70be2e0d0be36917a34c7280fad4f"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "0856dbeac1dc0826c114d6f836a7f616"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "f9096fab521f119d5f53a8e37cda64e5"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "d50ce533cabb86d7e7ad52242a828750"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "139c0f18f9b469f15f4a65d8284b7244"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "0e1121771303c5c26ac3ea48c3c86d6c"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "62e5d75cb149e29cc5daaede1c63716b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "43b317464e19af0884fb21af147387bd"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "3b82bdb3b51641cceaa5dba2c9134ac5"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "cdd56ff446980297601694760c47d67d"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "b35192c14360d3cb2fc58f8a09870a71"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "399f9baf89adedb5114d8789dafb6636"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "c7ace347b794af61db91acf9f90b3da4"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "d83406f5ebe1e9271cfe09a6cc0cfeea"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "d02174fcbc411015311cd9701e52e48b"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "f8c542122e7141d0a6ba65a36e8dc7b5"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "eaede6f0704166a9ebe978e0c6904ed7"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "75bf6f652dc26904ac41c36224da3714"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "1740faf5db8555789eb3064b1a201a6a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "b2071b79bbbc949c4fddefd0cf809c24"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "2bdf90983f5d37546a444aef3b307cdc"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "26721183a22e1f1d23f9382d74fd9997"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "b20e960587b9809f102ec0f197652508"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "89c11ee623089ee2d6e1f6f6b7764ba4"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "8d1ceb506439cb90a69640652faa6e3a"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "ac173fcf2a958e9a1d1f726b17b52c0f"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "a9662238b3cd2ab2643796a6a3f6fb7f"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "e6468751342eedd330e17e533d674635"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "21731c949bf2b20fbd369c946f5c055b"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "81848ad83fa39f01b360878430dc1e93"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "40afc3cc1b0e6d267bcba67f8e25a3e6"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "059cd93105314208532cf94d27fb8295"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "8c7c2347cf9faa4760d6ec84368e88ea"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "3e2ea898c26829b26187cdda95d3648c"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "6a0562751b46b5b846206986a495f61b"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "7bacdf324d014d846f853b6a091e0bfa"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "482283da600cc71ce891c6dad2538ca6"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "319bbfe2150235aab753bbf54b5689cb"
  },
  {
    "url": "404.html",
    "revision": "02cf77b91d9ff8f344bd8e20ee1ba4f8"
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
    "url": "assets/js/100.bf663e68.js",
    "revision": "37bda28eae8b72c61e63677d7504c5b4"
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
    "url": "assets/js/104.22e077bf.js",
    "revision": "2c45e5e4d704133bedba7c2a2aca5cc0"
  },
  {
    "url": "assets/js/105.b0197c01.js",
    "revision": "33eb9187e2d0762a0453121133b091fe"
  },
  {
    "url": "assets/js/106.f8da0760.js",
    "revision": "3bd828a93ff55746c2f740007b42f9bf"
  },
  {
    "url": "assets/js/107.a6aae5a0.js",
    "revision": "44a5912a0f69c3a032268863ff3b4523"
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
    "url": "assets/js/110.abdda4af.js",
    "revision": "931c558af7115cc94cfb2bf2ae47af9d"
  },
  {
    "url": "assets/js/111.a6145704.js",
    "revision": "d2c5a5a0e188d4aeb6cd9befbd1be5f2"
  },
  {
    "url": "assets/js/112.87f39dfb.js",
    "revision": "9571abe6c91af776b2e1288fad9e3c26"
  },
  {
    "url": "assets/js/113.f9961dab.js",
    "revision": "04c5e8dd1ce800109ad0e3b6d4349345"
  },
  {
    "url": "assets/js/114.91e0833d.js",
    "revision": "bf7abdf198c63cde40c4a5781158b75b"
  },
  {
    "url": "assets/js/115.b1a64faf.js",
    "revision": "a987d1cb1b855f93c4a46e1b8280730f"
  },
  {
    "url": "assets/js/116.01db7408.js",
    "revision": "b3b7f742f2e93bd3619fb6277676727e"
  },
  {
    "url": "assets/js/117.b43e51c0.js",
    "revision": "75dcd7da8cf1a7939fb24cdedc5e975f"
  },
  {
    "url": "assets/js/118.1995ec71.js",
    "revision": "cd712ef059ea5c798d381315006c01f5"
  },
  {
    "url": "assets/js/119.cbaab0a9.js",
    "revision": "a3518a7d95a8a45d7a4174dd3f458316"
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
    "url": "assets/js/122.70ddf07a.js",
    "revision": "0f3f47bb6599a4a8ccf73a51bc7633c8"
  },
  {
    "url": "assets/js/123.0120fb8e.js",
    "revision": "e79355002ab58cb9a2857ebbeba794fa"
  },
  {
    "url": "assets/js/124.1acbc4f0.js",
    "revision": "f64d5f5ca970c7f696517851ae38fd3d"
  },
  {
    "url": "assets/js/125.5fb1d62a.js",
    "revision": "d7620be8fe1285396f4536c139653fcf"
  },
  {
    "url": "assets/js/126.589928d8.js",
    "revision": "952ea85d7c876ff1cb3c8f89d33350a8"
  },
  {
    "url": "assets/js/127.67f1c731.js",
    "revision": "d63f6eeda32b9ddc1caefa54c6f77e54"
  },
  {
    "url": "assets/js/128.123f6d17.js",
    "revision": "adcd09aba133c07c0b6d2e0e6e73918a"
  },
  {
    "url": "assets/js/129.d2fed830.js",
    "revision": "ea1963ef98b1cc0982bd2fe4796a8079"
  },
  {
    "url": "assets/js/13.4a774b3a.js",
    "revision": "4872c9bb194969c98b9627ff178495c1"
  },
  {
    "url": "assets/js/130.577500e4.js",
    "revision": "7b9ded840a45910e1dafa2705e2dbdd6"
  },
  {
    "url": "assets/js/131.943908d7.js",
    "revision": "49edd649fec7016a8e7c6d9c9d500923"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.9bdfb38f.js",
    "revision": "11dcf4c86bdc142e9ed7c7220b1d23b6"
  },
  {
    "url": "assets/js/134.afed9891.js",
    "revision": "3eaf2d1f7f4b167e7991da1d7904eaf5"
  },
  {
    "url": "assets/js/135.3a6094ab.js",
    "revision": "8c2ae43bae873db764f2fd8ad64d79fc"
  },
  {
    "url": "assets/js/136.9ac67cd5.js",
    "revision": "5dd45c46854071c066bf8ae5fc23dd16"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.22292f17.js",
    "revision": "6d1ed2f779fe977513c9b03342361b60"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.a3928b1f.js",
    "revision": "cd18cb3e9a0e987a40548cf73c357c5b"
  },
  {
    "url": "assets/js/140.831a2868.js",
    "revision": "0a369431dddd2cdccfd5fac1649417a1"
  },
  {
    "url": "assets/js/141.4fbcdc31.js",
    "revision": "95c18a86264863861be1435b71c6feeb"
  },
  {
    "url": "assets/js/142.0d77cea0.js",
    "revision": "2b666b6a1102d1d8e8c1c0ecd3c4a24f"
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
    "url": "assets/js/146.224f041a.js",
    "revision": "52e43b0a9e5e51cd0f6599d95a6e9026"
  },
  {
    "url": "assets/js/147.848d0645.js",
    "revision": "6b9460282b8b8e6ade377446393b58af"
  },
  {
    "url": "assets/js/148.5ead846a.js",
    "revision": "197d067f55b072e65df9e42d1cb9d373"
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
    "url": "assets/js/150.9f5dcec3.js",
    "revision": "22c64b6042f33193656a7448b58ca255"
  },
  {
    "url": "assets/js/151.40f7e977.js",
    "revision": "ac23f7ab8a308c3a873e950d5714cf3b"
  },
  {
    "url": "assets/js/152.e6b52115.js",
    "revision": "ece2e4f3681fd69b036bee2b445775f4"
  },
  {
    "url": "assets/js/153.38c2880c.js",
    "revision": "af370343c9e3356141548714e480ba5a"
  },
  {
    "url": "assets/js/154.73aa2e41.js",
    "revision": "db528ab0330f497c1dc307b5f620329a"
  },
  {
    "url": "assets/js/155.6309f2d2.js",
    "revision": "02353148972ffdc8cff4d96562bad5e4"
  },
  {
    "url": "assets/js/156.d2faeb2b.js",
    "revision": "872ac82ec674db6639a0391bbd17a120"
  },
  {
    "url": "assets/js/157.7818768a.js",
    "revision": "43b5d0b02b7305a0d0296bb8783fe85e"
  },
  {
    "url": "assets/js/158.9a2eb8ec.js",
    "revision": "2f4c8d178c5115beabefbd1f1fe8bcc2"
  },
  {
    "url": "assets/js/159.6a568888.js",
    "revision": "7ef6c969df22d627ca7800b186877f5b"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.c3dd0862.js",
    "revision": "4a028e9f5db384b3c71b10af786b9039"
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
    "url": "assets/js/163.e1f8e6f7.js",
    "revision": "7f764277e5bc2976a2d9411fdcfbdc22"
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
    "url": "assets/js/166.38d25b39.js",
    "revision": "f54fd8b702b78aa6d04ff65b1b266029"
  },
  {
    "url": "assets/js/167.8dc58614.js",
    "revision": "3685b006f6c52885f9d331c31bb6eceb"
  },
  {
    "url": "assets/js/168.d6cc71f1.js",
    "revision": "cafd656e0c051078b59a4db9f26e3693"
  },
  {
    "url": "assets/js/169.aac08262.js",
    "revision": "628d28a0f230726b153d6d99e8786156"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.d508c3ac.js",
    "revision": "3cb34fd99c34f963ba5aae9978c5ac4c"
  },
  {
    "url": "assets/js/171.ef6b2c36.js",
    "revision": "e58e15693177096e85e34bc222f28eb5"
  },
  {
    "url": "assets/js/172.91cf57b7.js",
    "revision": "dd822f9853345800def1d553c57e9a48"
  },
  {
    "url": "assets/js/173.4227ec6d.js",
    "revision": "7487f2066c9c633ea710592e7e89499a"
  },
  {
    "url": "assets/js/174.728dfad8.js",
    "revision": "00cd8020016f0cc884b3bc242d601403"
  },
  {
    "url": "assets/js/175.718f1356.js",
    "revision": "db8df8d06c3b647220404f7e9a5654f5"
  },
  {
    "url": "assets/js/176.dcaa5cc1.js",
    "revision": "6d10257bff2e72fd9d4be4afbeb791a2"
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
    "url": "assets/js/18.9258674f.js",
    "revision": "5288863685993cd679d9b89ce68a2710"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.501640db.js",
    "revision": "a7773615484e7983205529d2324deec0"
  },
  {
    "url": "assets/js/182.cbae6dd5.js",
    "revision": "8c006f87f438bb309dea8f9672916305"
  },
  {
    "url": "assets/js/183.520270d4.js",
    "revision": "9f0396fe6ec3fb86ea74e979a3deb7d8"
  },
  {
    "url": "assets/js/184.ff625438.js",
    "revision": "d7f69e6afbfca884c059c298002a2be9"
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
    "url": "assets/js/187.791c97e5.js",
    "revision": "fe2433e743d2a76d0d27b878bd209b54"
  },
  {
    "url": "assets/js/188.bfc9bdc0.js",
    "revision": "1533b77c9236156e0270966704598962"
  },
  {
    "url": "assets/js/189.4715f2a5.js",
    "revision": "202535dbcf1f376c2cceeafc708eae71"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.293693be.js",
    "revision": "6853cef578ab20690f6cd391c47d4035"
  },
  {
    "url": "assets/js/191.fac77b20.js",
    "revision": "f8a58bff70ca49a001e9502215dd7474"
  },
  {
    "url": "assets/js/192.46a4cfa3.js",
    "revision": "6f392065e31af96c245ae48a6fc79dce"
  },
  {
    "url": "assets/js/193.cf2886c3.js",
    "revision": "86dcd8c8408cb99e9f42ceb00c674cbb"
  },
  {
    "url": "assets/js/194.dd8283dd.js",
    "revision": "e17a528386fad36321f7947f3f72e23b"
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
    "url": "assets/js/197.bed5f73e.js",
    "revision": "b9c42bb511943489b46a650b0e06f554"
  },
  {
    "url": "assets/js/198.fbdf6ec2.js",
    "revision": "baf7bc034a881f50b30dc3a32a9705d5"
  },
  {
    "url": "assets/js/199.c7737572.js",
    "revision": "26697b958e3c07333115116fbfaea1b5"
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
    "url": "assets/js/200.fd71ddaf.js",
    "revision": "6398dedf004e125ebd9e6779007d1bda"
  },
  {
    "url": "assets/js/201.ee4b6f60.js",
    "revision": "58355ade8ebd1d16d7e747722f7b98c1"
  },
  {
    "url": "assets/js/202.7f446319.js",
    "revision": "6b51a7b3b1de6a8658c4e7f93ff0220c"
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
    "url": "assets/js/207.5da9ed5d.js",
    "revision": "6c4cf0a614432a44b2e40d403ef04155"
  },
  {
    "url": "assets/js/208.ae25c583.js",
    "revision": "993a99e9db09d4affbef9784e0aba66c"
  },
  {
    "url": "assets/js/209.5e633625.js",
    "revision": "a7cd8f86b1f27c62ea6d5f286d925083"
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
    "url": "assets/js/211.feaebf6b.js",
    "revision": "ded7657530d78b703dfdc36e64a0ede1"
  },
  {
    "url": "assets/js/212.c4a5ff2e.js",
    "revision": "f81f00f8f70e1bfcf7935f8cf72a0c2d"
  },
  {
    "url": "assets/js/213.49891273.js",
    "revision": "e007f268ae563ba6cd170823dca61327"
  },
  {
    "url": "assets/js/214.56e4de65.js",
    "revision": "70c1267b20d14953c3564a95e8f1bf69"
  },
  {
    "url": "assets/js/215.4cc56f4f.js",
    "revision": "60352b5e1930c39cdf0892d8154352f1"
  },
  {
    "url": "assets/js/216.03a9ba70.js",
    "revision": "35a47c46b540291a76efbe061a5f320e"
  },
  {
    "url": "assets/js/217.f69091b7.js",
    "revision": "4a26ba4bb254644c6f4a3fa19dc2d8b5"
  },
  {
    "url": "assets/js/218.e6c242d0.js",
    "revision": "2341a7853984818da6ae8a787681d947"
  },
  {
    "url": "assets/js/219.9ff6665f.js",
    "revision": "4fc41067e336decde34aa3cdbb44d8e1"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.7c858923.js",
    "revision": "ec1ea30fb1450f1e75ad5521752816e3"
  },
  {
    "url": "assets/js/221.f98b2cb5.js",
    "revision": "96765f132610a56cfb609c11ffd15ea6"
  },
  {
    "url": "assets/js/222.b8e5e60a.js",
    "revision": "316eae84b9185535d0aca694e6fa1929"
  },
  {
    "url": "assets/js/223.d660ec66.js",
    "revision": "7330210886a12387da40e5e06fd13900"
  },
  {
    "url": "assets/js/224.031150f5.js",
    "revision": "1674af67e18d8f75d6d4884941f1eb5d"
  },
  {
    "url": "assets/js/225.d64bb920.js",
    "revision": "21e199c6982e07f5a3f1e6b3bf23c033"
  },
  {
    "url": "assets/js/226.b3360b95.js",
    "revision": "25405364d4f19596abe0dd73e4e56154"
  },
  {
    "url": "assets/js/227.36554fa8.js",
    "revision": "d4eca9d51a325da82526a9d1ea5368df"
  },
  {
    "url": "assets/js/228.95009891.js",
    "revision": "608a61d4b2ab9b8397cc5afd081411b1"
  },
  {
    "url": "assets/js/229.30e4462e.js",
    "revision": "32649b9ec392b04630407c169dd8e45d"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.477703eb.js",
    "revision": "185cc5fcb5cc6799e45c7a8bd4e6c743"
  },
  {
    "url": "assets/js/231.61fce1ef.js",
    "revision": "cc0468771993d829c4ec298de96a2fcf"
  },
  {
    "url": "assets/js/232.e9ef3f02.js",
    "revision": "fea3d04e6848ce4ec55cd190622762fe"
  },
  {
    "url": "assets/js/233.2b15590b.js",
    "revision": "1338f9030f183f7108c8de811a399571"
  },
  {
    "url": "assets/js/234.75515073.js",
    "revision": "28f288a122c65c6c529580a7d8e1373b"
  },
  {
    "url": "assets/js/235.f894fb72.js",
    "revision": "450b2aefde7b831cf16af199b0689d0e"
  },
  {
    "url": "assets/js/236.c652352f.js",
    "revision": "8e688b0882960db0db968f05943ab75d"
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
    "url": "assets/js/242.febda471.js",
    "revision": "3905d59a705f7bcff04626f00e093717"
  },
  {
    "url": "assets/js/243.6cd805ec.js",
    "revision": "060d48d789ea224b0c89cf225497dba4"
  },
  {
    "url": "assets/js/244.fc437d09.js",
    "revision": "1084bb2751e25156758661e00e3ca72d"
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
    "url": "assets/js/249.42de761e.js",
    "revision": "29bb76bb110f4f0d954f6b47c03afcf7"
  },
  {
    "url": "assets/js/25.d7d76e30.js",
    "revision": "b7ca5469f74a433a46d983bbbae72bb5"
  },
  {
    "url": "assets/js/250.d199dd1f.js",
    "revision": "5dbd184f53f9c70f82b4587a5ffcb924"
  },
  {
    "url": "assets/js/251.361ae95f.js",
    "revision": "d6a7e179551b6066e72c9e98942f310b"
  },
  {
    "url": "assets/js/252.66a56e26.js",
    "revision": "a3e2a8dd1d93392f7149b64571d5e19a"
  },
  {
    "url": "assets/js/253.91a3a85c.js",
    "revision": "96bf63a2d6bee6dc22854b5350fe9198"
  },
  {
    "url": "assets/js/254.c426d3d3.js",
    "revision": "852265b1ddee99329654cede6f51d6a8"
  },
  {
    "url": "assets/js/255.448c6d24.js",
    "revision": "755efbbeef9e1018194d1545b5245ec1"
  },
  {
    "url": "assets/js/256.698f9f42.js",
    "revision": "a3d3f24044923c3f67c15529dfcc04b0"
  },
  {
    "url": "assets/js/257.578f1af2.js",
    "revision": "babea62560b1195c0d85f6a4e53d32af"
  },
  {
    "url": "assets/js/258.9f52a755.js",
    "revision": "1a934b511f20f9baa9821ad37ab6290f"
  },
  {
    "url": "assets/js/259.25bed776.js",
    "revision": "4b8150eef1823fb06b4ab660136a80c5"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.cc2c0d48.js",
    "revision": "119ce154dbdb61a7eae6c84619df53bb"
  },
  {
    "url": "assets/js/261.1f93a44c.js",
    "revision": "aceaabe458c82c5505a8d322e2fbd1ff"
  },
  {
    "url": "assets/js/262.bf927f20.js",
    "revision": "fc5d2ed6ce2e8f4d9cfa634f414dda0c"
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
    "url": "assets/js/266.9f0f04fa.js",
    "revision": "a3058bef50caf099b05cf5bd5ad48c0c"
  },
  {
    "url": "assets/js/267.7eab4281.js",
    "revision": "de780d0a111565c063b1c3e9355af4a4"
  },
  {
    "url": "assets/js/268.8fb888dd.js",
    "revision": "fbe6506bdf65a4e6553b0de8afea31d6"
  },
  {
    "url": "assets/js/269.73df8505.js",
    "revision": "0ce8b2e891c3a663704deb74565d6282"
  },
  {
    "url": "assets/js/27.4dbe6d9b.js",
    "revision": "42d2911e44e44dbeb4f46ee782dfd08a"
  },
  {
    "url": "assets/js/270.fc7e740c.js",
    "revision": "ffb1aabaa91c367037549cd65d74649e"
  },
  {
    "url": "assets/js/271.6e3aa9b1.js",
    "revision": "ad0a3caf5c04c5e63a8d6a06b64b3a8d"
  },
  {
    "url": "assets/js/272.6ecb51f8.js",
    "revision": "ab1cfee485ba5702a0d3a0d451d25962"
  },
  {
    "url": "assets/js/273.d7086cf8.js",
    "revision": "880526107aa37d3011c1264f37e9938e"
  },
  {
    "url": "assets/js/274.f5a0bacb.js",
    "revision": "4f273855eb17af9bc2e8e3b59ad22643"
  },
  {
    "url": "assets/js/275.32f6baa0.js",
    "revision": "ea046ebef6ef4631c76d1c423b72355f"
  },
  {
    "url": "assets/js/276.f5b0be3c.js",
    "revision": "1aa0b7a540d7bd9406b4f105eb1114a7"
  },
  {
    "url": "assets/js/277.a095b62d.js",
    "revision": "b72a1ef5c61e57b5df8a1bc9d2616b5f"
  },
  {
    "url": "assets/js/278.d0dfce40.js",
    "revision": "24641a7520645c4073dec56b3c12c2e9"
  },
  {
    "url": "assets/js/279.eceac818.js",
    "revision": "1e19b26c96b1ea569931487f9a236710"
  },
  {
    "url": "assets/js/28.54bde104.js",
    "revision": "003cb04a62d3eddc71a07fe3ae9b6a5a"
  },
  {
    "url": "assets/js/280.8d73138d.js",
    "revision": "6fe2d9837bb1399bea399ec2480f93a0"
  },
  {
    "url": "assets/js/281.049647b2.js",
    "revision": "4374e371c569c5f9857c888fc2322eb6"
  },
  {
    "url": "assets/js/282.541c66b8.js",
    "revision": "eab194001b6b03f03b1394ab5b4ba211"
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
    "url": "assets/js/285.5d33d174.js",
    "revision": "43bc43aa439e3e6c7803bc72d0a90905"
  },
  {
    "url": "assets/js/286.0a1ea211.js",
    "revision": "0a05e031cc8579dcba48d95d9e5ca5ea"
  },
  {
    "url": "assets/js/287.86eab1c7.js",
    "revision": "a602101ba504c4c298271aa82fc25578"
  },
  {
    "url": "assets/js/288.48222a09.js",
    "revision": "ffbc640d0380793a5461048c9ff3e1d5"
  },
  {
    "url": "assets/js/289.6e00efa6.js",
    "revision": "f7f614dcbd2412749db7876af5732cda"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.84f922c8.js",
    "revision": "3003dcf6587f77937fd826061a74a645"
  },
  {
    "url": "assets/js/291.dc84db72.js",
    "revision": "600084b9a46ae4be6b57cfd3d9ba80b6"
  },
  {
    "url": "assets/js/292.c310db03.js",
    "revision": "a75211903046cf6fb4b154824b612685"
  },
  {
    "url": "assets/js/293.3cd0d3d8.js",
    "revision": "72d4e39d9ea9fbb3b5ad49cf2a9b5abb"
  },
  {
    "url": "assets/js/294.519968ea.js",
    "revision": "cb54a77fea6a5e8441c9ba6f22d7db85"
  },
  {
    "url": "assets/js/295.bc6d3890.js",
    "revision": "62961a9d17dc7d2a9268e906df54bef8"
  },
  {
    "url": "assets/js/296.24e61c59.js",
    "revision": "b66795adac5e361bbd6270d93dcf862f"
  },
  {
    "url": "assets/js/297.f2019dbc.js",
    "revision": "b3be751bd6ece9be8fd11f9eefedaf22"
  },
  {
    "url": "assets/js/298.f3ec9a27.js",
    "revision": "d656bee55f622e96ae988f018b43e6e1"
  },
  {
    "url": "assets/js/299.13654663.js",
    "revision": "1d7522828485efff3d66e6faed8f2177"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.609f3ca2.js",
    "revision": "d394e9d4d822aab44cd318f726378480"
  },
  {
    "url": "assets/js/300.38860578.js",
    "revision": "6f4cc7480af6fb1bdb2b6da146cb840a"
  },
  {
    "url": "assets/js/301.3a3d20ea.js",
    "revision": "a94b1401721882392d82c12cface105a"
  },
  {
    "url": "assets/js/302.25bfd458.js",
    "revision": "1410f64a65e275a78513da4d12558d99"
  },
  {
    "url": "assets/js/303.368ffae1.js",
    "revision": "8c47d90613c65783ed509f9f3dad0ac6"
  },
  {
    "url": "assets/js/304.fb295dfe.js",
    "revision": "1858ab23331d3a68231edb433fa6b9ba"
  },
  {
    "url": "assets/js/305.d982acf8.js",
    "revision": "0a042691e07dd40ee472edcc655ca256"
  },
  {
    "url": "assets/js/306.36dd087b.js",
    "revision": "33e6c24cdb364e3a5784739fc6aac0f0"
  },
  {
    "url": "assets/js/307.de295a8a.js",
    "revision": "a19e70e3ba2b6682485bf4891b9dfa07"
  },
  {
    "url": "assets/js/308.f76508db.js",
    "revision": "5ec2b6d114331b43b9630f7f5253fc0e"
  },
  {
    "url": "assets/js/309.7f91d812.js",
    "revision": "d3c198c550bbf4f660ab0fa10a63443e"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.58c72c9d.js",
    "revision": "27fbd94a92fc9264d3a0dd82e8725764"
  },
  {
    "url": "assets/js/311.d5baf6a3.js",
    "revision": "005d2824f5212e1d82844accb753c5b2"
  },
  {
    "url": "assets/js/312.ba469153.js",
    "revision": "73d23181058e8d54e31d61e52d58040d"
  },
  {
    "url": "assets/js/313.dc9699f1.js",
    "revision": "cd8eae27461c14bb51832ebac9d491f8"
  },
  {
    "url": "assets/js/314.1e88d309.js",
    "revision": "bfe7b6d51aa529ba9dc05e07a02299dc"
  },
  {
    "url": "assets/js/315.3b2a59db.js",
    "revision": "deeed55680352b73b802e5d39cba4bcf"
  },
  {
    "url": "assets/js/316.3fe8a648.js",
    "revision": "3906ae029f305716a9c9f64971aed6a3"
  },
  {
    "url": "assets/js/317.dbc61fea.js",
    "revision": "58d5da23b425037cfeabcbc89ef6db44"
  },
  {
    "url": "assets/js/318.c9203d39.js",
    "revision": "fb8c611ad3c7b79d27f058cc4d2a0282"
  },
  {
    "url": "assets/js/319.6a29632a.js",
    "revision": "6156fdba4961a2248eb777f799df3a19"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.ea40f343.js",
    "revision": "31ca12b7070a3adfaa1bfabc35ebf56f"
  },
  {
    "url": "assets/js/321.4cd70acf.js",
    "revision": "38de4f2868426961a0a8b54734698f45"
  },
  {
    "url": "assets/js/322.dd19edf2.js",
    "revision": "57356c99fbf503dc2c597f386e317364"
  },
  {
    "url": "assets/js/323.d1bee7b5.js",
    "revision": "9ebfda823d15ace1dc931cb8c37850cd"
  },
  {
    "url": "assets/js/324.07ee1b49.js",
    "revision": "0e9090e7553ffbfd64d08aa82b92ff91"
  },
  {
    "url": "assets/js/325.8cbfc74f.js",
    "revision": "7f2184b3fcefb746be93a5024042636c"
  },
  {
    "url": "assets/js/326.4275cce8.js",
    "revision": "9d6a3b1f9feed18dbaf95295de9e921f"
  },
  {
    "url": "assets/js/327.5762f5d0.js",
    "revision": "9c03f128604a1bceb545450052e59472"
  },
  {
    "url": "assets/js/328.0e3003ca.js",
    "revision": "9ab4d6a2f70b5703b118fbd23f29bc1e"
  },
  {
    "url": "assets/js/329.ac97c481.js",
    "revision": "e366e95d373d54956a03322d639f1618"
  },
  {
    "url": "assets/js/33.10c9721d.js",
    "revision": "2803db775067cd531f0236d52fb62e7a"
  },
  {
    "url": "assets/js/330.6c264916.js",
    "revision": "85df9a481903845859c98f790c6b406b"
  },
  {
    "url": "assets/js/331.0b16c16f.js",
    "revision": "cc15bd5d794656bb40531064975665f0"
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
    "url": "assets/js/334.44fb31c1.js",
    "revision": "8a343c27f797799bf320fe0497737b32"
  },
  {
    "url": "assets/js/335.1ac88f2f.js",
    "revision": "df455c779e5c7c27088b50648e5ecdae"
  },
  {
    "url": "assets/js/336.8666d2d3.js",
    "revision": "daf82bb3cb03a88375f5869373c6eb6c"
  },
  {
    "url": "assets/js/337.058fad6f.js",
    "revision": "99c376d0b9bb2fec41285f09c0b57ea4"
  },
  {
    "url": "assets/js/338.a598e4d6.js",
    "revision": "394adb88018d28ea374f1f119e92c6c1"
  },
  {
    "url": "assets/js/339.4c34c0df.js",
    "revision": "c31187e08961988ee16c776de43d8a6e"
  },
  {
    "url": "assets/js/34.2c29924f.js",
    "revision": "b5126cdf92efb7c084b57af669f20950"
  },
  {
    "url": "assets/js/340.a434750b.js",
    "revision": "44c17e5b98d9e71a451872782542fe66"
  },
  {
    "url": "assets/js/341.78e001d7.js",
    "revision": "65dd9854e7aac2b1b9e12bd3541a389e"
  },
  {
    "url": "assets/js/342.38e6b612.js",
    "revision": "9ad4bc884d782c75ea132973bb8f30ee"
  },
  {
    "url": "assets/js/343.f1b3b340.js",
    "revision": "e7a05b7edb4e87521cbd3239244813a8"
  },
  {
    "url": "assets/js/344.a0b575dc.js",
    "revision": "f8132f820ada14d5c818c7ac9135894a"
  },
  {
    "url": "assets/js/345.38a43438.js",
    "revision": "bb1d5486d945b1b465b3b50225a825ed"
  },
  {
    "url": "assets/js/346.88bcee36.js",
    "revision": "77ea7ab69bebb14231f732a295403d58"
  },
  {
    "url": "assets/js/347.08f71406.js",
    "revision": "7bcc61a0449ef94bcd40d344a5583d62"
  },
  {
    "url": "assets/js/348.ba6a1eff.js",
    "revision": "383de7951295e4517dfda56457009a71"
  },
  {
    "url": "assets/js/349.1eaabc6b.js",
    "revision": "e00f863704b59a434a36337b3aedbd24"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.d08cd820.js",
    "revision": "06d8f96f80460a14710c28b1b2a68c93"
  },
  {
    "url": "assets/js/351.e93b5bf5.js",
    "revision": "f1ce681e3d47e406ff582f39d120e6ab"
  },
  {
    "url": "assets/js/352.cd817971.js",
    "revision": "7becf5c325f89fc44ef75126600f171d"
  },
  {
    "url": "assets/js/353.24537128.js",
    "revision": "2674b5789654337f5dc810e8659090d3"
  },
  {
    "url": "assets/js/354.9b71b3c2.js",
    "revision": "44ef57a3d5c262a9a80329d014a1e623"
  },
  {
    "url": "assets/js/355.bd20acb2.js",
    "revision": "23bfd89c74297d3078d1ec4243445bd9"
  },
  {
    "url": "assets/js/356.5b1a5f49.js",
    "revision": "e1161b3c4d70b503bc4231816450743b"
  },
  {
    "url": "assets/js/357.875b946f.js",
    "revision": "6f10f508e369905683dedc47a88fd3d1"
  },
  {
    "url": "assets/js/358.4150d71b.js",
    "revision": "e9120714c049c14b3b94980ae3413cfb"
  },
  {
    "url": "assets/js/359.ea243618.js",
    "revision": "b70a0109bb642e4bb2042a4e0d38c5d1"
  },
  {
    "url": "assets/js/36.08cfec20.js",
    "revision": "657646ac0c5a7eee8cdf3bd4b90c5d48"
  },
  {
    "url": "assets/js/360.a83f0535.js",
    "revision": "346d333b1e41ad35b9db9cd4c8b1618d"
  },
  {
    "url": "assets/js/361.786fc91d.js",
    "revision": "b77af7eb0d0eae7eaf8ee166fc756a35"
  },
  {
    "url": "assets/js/362.1afd73ee.js",
    "revision": "555eb9ce0f21f71b872c547819b632ee"
  },
  {
    "url": "assets/js/363.f6b78ff8.js",
    "revision": "09d65364d7e3f3e14302b4b124df1592"
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
    "url": "assets/js/369.c22adbd6.js",
    "revision": "fd7e2a311b90a70cae524ab6ea55194d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.503e637e.js",
    "revision": "f3f811ac61adea744ed4ce3d66f75144"
  },
  {
    "url": "assets/js/371.5b9c6e0b.js",
    "revision": "f8391d07fe024344c9bc1bdd9114e830"
  },
  {
    "url": "assets/js/372.4fd8c5f7.js",
    "revision": "57d33cbed34af07f8ba05934b74232f6"
  },
  {
    "url": "assets/js/373.0e6808f2.js",
    "revision": "f3843cbe3934c764e8334aef282d5bad"
  },
  {
    "url": "assets/js/374.4e83daf6.js",
    "revision": "375e5ae680a7a9d828c41f10c798246f"
  },
  {
    "url": "assets/js/375.d0f1a5cb.js",
    "revision": "d1e09378c470ce11fd085ffe57f3c4d4"
  },
  {
    "url": "assets/js/376.e5f211b0.js",
    "revision": "77ca336d6cab0055783e3fccfd3c517e"
  },
  {
    "url": "assets/js/377.afbf522e.js",
    "revision": "878ee6f40cbad544c8b50fb19a17ba5b"
  },
  {
    "url": "assets/js/378.c0328f5f.js",
    "revision": "9b55b6faa49ba7c7eee5d166a3cf6b4e"
  },
  {
    "url": "assets/js/379.569ed1e8.js",
    "revision": "79e39e513b7f884ba6e4990b6d925f59"
  },
  {
    "url": "assets/js/38.b3248d12.js",
    "revision": "d9431e029846f26a0abd43c80bf7213f"
  },
  {
    "url": "assets/js/380.b64b5f23.js",
    "revision": "21a8c309d789d6d48b0f03ffecaca4d4"
  },
  {
    "url": "assets/js/381.77c9a125.js",
    "revision": "780326cd423501a683136083420a51a8"
  },
  {
    "url": "assets/js/382.3064c4ee.js",
    "revision": "d40c8b5b185208b4c0fabea99cccc8b3"
  },
  {
    "url": "assets/js/383.e094cde6.js",
    "revision": "18067e753cfc28be64549344850a9d88"
  },
  {
    "url": "assets/js/384.901af367.js",
    "revision": "947faa85a7d4d89021b378b536dc0efc"
  },
  {
    "url": "assets/js/385.3b79e32b.js",
    "revision": "23b916bc266603a15b1941f834840b22"
  },
  {
    "url": "assets/js/386.640579f1.js",
    "revision": "19ac6698cf45a8767b5c7ee46d2686c1"
  },
  {
    "url": "assets/js/387.b40599a6.js",
    "revision": "788012465d56ca0c7afa73a91f89be7b"
  },
  {
    "url": "assets/js/388.dd0581de.js",
    "revision": "6c825704b9b1b9dd23a088c08812a98f"
  },
  {
    "url": "assets/js/389.f59c4f1c.js",
    "revision": "7e5ac026c616569a0d33993ad65e794a"
  },
  {
    "url": "assets/js/39.92ebce3d.js",
    "revision": "7491a30d7f6e47c34adf40ad571ea644"
  },
  {
    "url": "assets/js/390.9a203b80.js",
    "revision": "04d3801a8a3cde07209b1d778484d254"
  },
  {
    "url": "assets/js/391.bf889434.js",
    "revision": "af17cc17b0e2c9b4712fcd41e29b9c1f"
  },
  {
    "url": "assets/js/392.80bbb351.js",
    "revision": "77f6553322892653570988f8564d7e96"
  },
  {
    "url": "assets/js/393.b0e8dfed.js",
    "revision": "7c2220beccf76c7b89d96cd1b827df03"
  },
  {
    "url": "assets/js/394.bd041b5f.js",
    "revision": "da059c503db19e82334af21d1cf73b0e"
  },
  {
    "url": "assets/js/395.be8c5ea1.js",
    "revision": "ba1aa69249c31f9d5ea68e78867a753a"
  },
  {
    "url": "assets/js/396.b2b0a081.js",
    "revision": "57e22b90a340532444cff757bc421c33"
  },
  {
    "url": "assets/js/397.b3d33c3a.js",
    "revision": "d3ffeff21a51737d0fe6b46bb9bbede9"
  },
  {
    "url": "assets/js/398.410f45c0.js",
    "revision": "ab6c70e90789214c76c84894b83041aa"
  },
  {
    "url": "assets/js/399.d48748e9.js",
    "revision": "2ea5b9b5b89d0484e43175403e2bac57"
  },
  {
    "url": "assets/js/4.ec446020.js",
    "revision": "13a7efc36488d805c012edb0a2c31c8e"
  },
  {
    "url": "assets/js/40.f0cfe08a.js",
    "revision": "4c8f9c35e50b9036195320c6d1dfc40f"
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
    "url": "assets/js/42.46f02b13.js",
    "revision": "77d15585e8505eae8030b792874f5156"
  },
  {
    "url": "assets/js/43.e0c0cf8b.js",
    "revision": "340bd7049002b30dcc5ab2443e980713"
  },
  {
    "url": "assets/js/44.54518cac.js",
    "revision": "ca917fac36860e657f2fd2e926be1cd5"
  },
  {
    "url": "assets/js/45.6aba5d33.js",
    "revision": "64456d2503469a20f2500a71515e7ab2"
  },
  {
    "url": "assets/js/46.765a06b3.js",
    "revision": "ae3f3b64496987ee9f021f47bbbea4a7"
  },
  {
    "url": "assets/js/47.0aee6c62.js",
    "revision": "44747642ec63ee99be4e1421a4e394ac"
  },
  {
    "url": "assets/js/48.891367e3.js",
    "revision": "fdc4bac363095f1b347d900b73e595cc"
  },
  {
    "url": "assets/js/49.c823794e.js",
    "revision": "279e4b4c7b81cc05a976efdf71bf8060"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.c883457a.js",
    "revision": "4fbdb5f4d1825164e16f10def8a488b9"
  },
  {
    "url": "assets/js/51.cc8aca9d.js",
    "revision": "b0d0a6a5e6b16e9a9187c8d1d02dd0ad"
  },
  {
    "url": "assets/js/52.5af54a0b.js",
    "revision": "e3f1221b1eba1c89d9fe85118ed40185"
  },
  {
    "url": "assets/js/53.04cc9409.js",
    "revision": "f43a214ba20fea8077b1672136be7c4b"
  },
  {
    "url": "assets/js/54.c6ce44bf.js",
    "revision": "f1f34f22d3677e1ed5e6e2690c01cd40"
  },
  {
    "url": "assets/js/55.c0b90272.js",
    "revision": "7b55449e0b86965fda8e1702612b9c66"
  },
  {
    "url": "assets/js/56.4138ae24.js",
    "revision": "30dbdd04298883453be24d82e92a1890"
  },
  {
    "url": "assets/js/57.edb13cce.js",
    "revision": "10296323be09f318b7402a7336a05bce"
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
    "url": "assets/js/60.4b56ff10.js",
    "revision": "de95f30f9548948c40c2eb790ca2e019"
  },
  {
    "url": "assets/js/61.f7aeb089.js",
    "revision": "832b664738e03c148bd2a1c48b78c08e"
  },
  {
    "url": "assets/js/62.278a0db5.js",
    "revision": "0595190fc90cc7d328cdc4e890d7fe3a"
  },
  {
    "url": "assets/js/63.2cc4ae33.js",
    "revision": "88fdd640524e55c5503c885d3edf4a0f"
  },
  {
    "url": "assets/js/64.2f574911.js",
    "revision": "288acfe329fa9fd56731ff4eb716d07a"
  },
  {
    "url": "assets/js/65.9ba8db52.js",
    "revision": "9d5e5920e7a6671840700123cb0230e0"
  },
  {
    "url": "assets/js/66.26611af6.js",
    "revision": "5ffd25bf9a8040f6e83694af6cfb7378"
  },
  {
    "url": "assets/js/67.b622285f.js",
    "revision": "715b53968b74522b490e7aba9bce6c5a"
  },
  {
    "url": "assets/js/68.2f5285c2.js",
    "revision": "90495f6963ae3fffca3cb5a18104b043"
  },
  {
    "url": "assets/js/69.72306453.js",
    "revision": "1499f0e155b3ffffb0b7987138542d4f"
  },
  {
    "url": "assets/js/70.585ea37a.js",
    "revision": "19eba770378e233b6512b21275fe73a9"
  },
  {
    "url": "assets/js/71.4b845b3a.js",
    "revision": "5182c149d992d175ff18e020b21cac17"
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
    "url": "assets/js/74.fef97ae8.js",
    "revision": "49512bdab67e7c3b68eb2d3222b20cdc"
  },
  {
    "url": "assets/js/75.f8b787e8.js",
    "revision": "ddbf7edac692a84e8ccb70c288cfb494"
  },
  {
    "url": "assets/js/76.1dcb71e0.js",
    "revision": "17ba62c3d2d7b2bcabed67550afce999"
  },
  {
    "url": "assets/js/77.0e733ebe.js",
    "revision": "efc6d5b9a2601de16ea0972358db5c17"
  },
  {
    "url": "assets/js/78.168c4bfa.js",
    "revision": "f497203fb7e52fb6536c8d20afbaa16b"
  },
  {
    "url": "assets/js/79.975598fc.js",
    "revision": "6eee875f842dfdad288feadd1b05900e"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.f81b865d.js",
    "revision": "b6fc0d5ba9e40272ac3a266242bd9140"
  },
  {
    "url": "assets/js/81.fa46da8a.js",
    "revision": "84b6634b8931b1dccb1dfae2c751a830"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7e287636.js",
    "revision": "0d97f6c15d3ee66e1a3f80291e8c1252"
  },
  {
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.9f70be58.js",
    "revision": "f03fe93abb6790655062119cd2b79949"
  },
  {
    "url": "assets/js/86.4c1c445a.js",
    "revision": "0757dc465c33502d7b1d3039d2535802"
  },
  {
    "url": "assets/js/87.82dfccfc.js",
    "revision": "82087d75257e9ef82663781ef600682d"
  },
  {
    "url": "assets/js/88.14e03688.js",
    "revision": "a3e77b83234f812792ed9647fbad5e4d"
  },
  {
    "url": "assets/js/89.898fb65e.js",
    "revision": "a9563c9b62c95035e46420b3aba898f6"
  },
  {
    "url": "assets/js/9.6f65949f.js",
    "revision": "ee857a4d62cc6e3cdee3cd04bbae7d3a"
  },
  {
    "url": "assets/js/90.061b2143.js",
    "revision": "efbcf4c7dabefbfa80456c79a140a415"
  },
  {
    "url": "assets/js/91.9d5a2518.js",
    "revision": "ff96701a0ad77e752bb5ced43e827f7c"
  },
  {
    "url": "assets/js/92.0839728b.js",
    "revision": "a362eaba1ee99f5099dcf0c4bb1d7056"
  },
  {
    "url": "assets/js/93.c2db35e8.js",
    "revision": "0c2a186a1041860622e5902dfa87ac6b"
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
    "url": "assets/js/96.7ec9b030.js",
    "revision": "72023d5693444e9009bd53bd1337a292"
  },
  {
    "url": "assets/js/97.7200eced.js",
    "revision": "8f0329b3d7f4233e9d34548db28b4e6d"
  },
  {
    "url": "assets/js/98.10cf74cb.js",
    "revision": "e93449db78e7ecad06bc9080aa134c5e"
  },
  {
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.43e2cde9.js",
    "revision": "b97a2e338bba7528f4a5864006ca4917"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "e7382cf57c6a467ba2ea35ceea235b40"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "ccc0ad37700f51443c8b1b5ed37e29cf"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "a9985371656a6a8ceb8660275800f893"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "4ab6803ea2cc355dba1b5f741e07dfdb"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "3418a4dac6c0004bf172160a0d4c91fc"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "8aff58c547eaedd7e2625f2fba11d358"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "cbab09685d826653f2fc92166d7a4dce"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "1c62e0b5175d0a8a64141563d8efee1a"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "b30e86a07e4dca8b6c4c1e663cf07148"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "63a478ee6d9892180dab1d3138f7c432"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "108ca16c01bf12795f028ea6597189e7"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "3dfd2f60bfeb181945a3ca7ae7a2b8e4"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "f3004bebc0d259220bc6d5d50c629f08"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "5d28d66b339188f0351874383f053aaf"
  },
  {
    "url": "master/api/index.html",
    "revision": "da80d077474b69aa96e03d1a7b005da8"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "8018cbdfebe2acab363447b5618246f3"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "d3c2157006d994e62e605e272c331d4f"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "25492a9a4a2508ec0d6029ed1c7fcecf"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "8f718a2f921a1edf5a916dd187a4b028"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "99d872998fac90fd73cff2fd5acb2da7"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "f1d9eaf7d6fee4865292cbda8d33dd5d"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "cf9dd3a3fe15c5085f2490c0973e974a"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "52d3786da58caf044922840cfb077bd7"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "bb897b3c8efadfa22da93d57138d46c2"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "79890f620491cd2e36f43cc8806f3767"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "dc498d79b82455ee79e511096c51de96"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "e91d17e5f45066659930cc6b3d8aab2d"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "cde8bb180d1ec9a1f848ccb03c5162d9"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "6c5e7d1d66b9a36637a0dc71f7c60c69"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "4e4cc12d8698d4f87fd4d2e7ef20e163"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "06b2daf2ac9f6585feaa4096976b4caa"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "c4b5e910c9f61b95a243ce027330046f"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "2e5fa2e43ddb0cf2eea3a8541a7cc876"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "3170296d8e9f28fa0fe80949bdb6f232"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "452b336daa932aaa607d8776d0748fc0"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "1489f399c78c07d091e4e12f69c3a568"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "a2d19d27b1fdf37e4a6e66ed8a6802a1"
  },
  {
    "url": "master/packages/index.html",
    "revision": "0b7f7ee4265f7fbf861e40e902e6a2cc"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "e9aba5f98998561175bc5d7d333fba2c"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "a20f9207145ce211ad047f0124ad4a51"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "c9eb28ce378e8f4e0d99ba8db320f313"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "7fdcc55240c0dba8c4f6474d55003bd7"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "bcc962743bbccd6d1e5d3fa886c7aff2"
  },
  {
    "url": "master/packages/views.html",
    "revision": "a254e8f398d603ec4096a20115e698cd"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "dd1d3f743ddd17a089db3a8c19327aa2"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "1b3eb3e629cd63e81447c639dae7b059"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "235f7209fb98bc8dc6ea5f79c06511f0"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "3d60b955774e386612ad6428483437fc"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "406b5e89bd5a28de2b4491b249c30311"
  },
  {
    "url": "master/themes/index.html",
    "revision": "ffcbf1041da349af20f464aad6196470"
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

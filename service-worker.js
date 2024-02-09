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
    "revision": "a4ef406a3f6cbf1d7b169f34d8ae1d6f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "edf75181ed28ecab7977f043d66bf0fe"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "b07fb8e680fa49d65e80dec33d69f11e"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "b0c045021b0ef2383e7e2bf4bb0ae0fa"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "0a68ddd7c9a0effe36ad8f87203b45b0"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "5254b36798dc31d29d670b5fd1e6599b"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "738eba068eaacb2a60524b4cb09d78e3"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b6f7871c96b361472d6b9ee6efe5e7d5"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "170865353b5cffde820ebb99066dea98"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "74959e88b1b6fad2003fe386c95a231c"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "57e7dfbaf59fda8bd3bb67b9b1b4bc98"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "fecbde848fdce18dba66e3fae76dd246"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "eda6db3d89f2dece66c58a32050de926"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "fe58fcab6b0397defb340c2b157fdd0f"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "408743d3e0b1fdcde855c25d6c4a71d7"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "ca1ab388ddc19985f3fa28d52ee7b283"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "5eff3b5b436e2e3e157b9023e47538a5"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "af05b2c8b08848db036ec4ccee500979"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "fc46bd57c0a22e6257de8593e7e9e782"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "0deb23585b8735da6728251c032446ea"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "c21539baf89b1e1d4d788f0dd9e3cf38"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "c17f136f7c1efd0facb60a0815832150"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "70737c70e2fb19dc376e2764dabc78d1"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "ad662566e03b1ec0905b0032ab7190fd"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "f21a8d9a4f5b16b02ab2807e8c36198a"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "97b2cd3a4c58b1188f9933595c576bd9"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "552c0855272397af0d3f61bf44c8d56b"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "f73f610bfff43b13b99bea2d4faa42a4"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "44e012ba0b3ea2d9237af1ba1bb80899"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "776ef3893d5866b6fdb7cff272192047"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "5e019d63f82715f620895c49d61d7742"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "8336773b58c0d2c6ec8c8f6658f063a3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "e7e5d46766d29024bf4852caa861ae6b"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "f269123a589ad3ea863330375b475635"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "4c0224ba6a1b45e7cf5a982303ae7f0d"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "ecace823c6e3228a0b84c2ff9f1a4d15"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "cd34695c9f54ee2b87029d7ded97629c"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "0dd563e53058f646f1b225e0784382a5"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "e57f1d3e6088f074c17cfcd5231d229c"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "02d622aee98a8868d1ffe161902b332d"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "aaa3285278a13e8424a3942880d5b5ab"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "2642a383ff895c2017ec646edde9b787"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "e804da99efcc6759fb94b5100287c0f6"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "237977085d8b687ee8a06ad95f1c832a"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "2a455f70d339ac5fbac37711808b1aa5"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "5a4c82fb4ae56dfc1e83e0d8244f58d3"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "67c2e587414dd4db914c2d6e0e79e0b0"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "007ecb1432ed107837c33546b9ee0019"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "194a0bd1fd27824d98341532808ab3aa"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "3eea780b8ed8c1d3e7a6edd4e2651e2e"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "5c5e19e83f0d5454cf10bef613e9d748"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "cce206943d532519fbfd7cc5b41b1050"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "f3b0e876cfc260fda4171341e7775d3c"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "512e87625a63fcc2f3c6d633c77c84d6"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fcc04a533901c51a1c4b270cef51daea"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "927db394a0c76ce1b44c09893d6a484c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c19f3d96505f66a5a0559e84a0738266"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "af30cade0db208c220b280e4413fa880"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "bac408d1b58d8e5e1eb5d2d86b6066f4"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "4b54cf8446e051fb6b31706eb0409213"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "57300e7dbf7a5382a77c030c66ec553d"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "45e0b19040b128d17e999dbda7c40bde"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "f81a69f911a317d2141d1b0be130b54a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "949765bcd8b940319e42f4f3714d311e"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "437712c52ef38754555c75bd2e3a8bfc"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f7f537a0aae428b477367a8ee0503d7c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "e3b8a1c75e28ae27f956d602b6618bf9"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "65724c3c8bd1be30b4ef342fde3b9ec2"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "058c7b4e729f8848850a0ab4beb5ff4c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "9f3da168c4ba19e6f2020581a3d9b56f"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "c0767ee4f15eee62e091d596b2c27964"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "5df6d152c7ace595ef98a4191ecccd83"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "3af1ae4ceb9c96f8f2586ee37fea307b"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "d2f1a96041ca26789e5bac872b6c55c6"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "d4ac868086554fc46b62e9142eece7ae"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "a45903dfd5590fed72f7c6df6a365d54"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "b07f8a4752d93f34295046c191762167"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "220de1796c8cf3625e1cfd64d8f36975"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a816b3f40b5d4502d87bd5c0490222b9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "3280882b17fad233499d2cf0cb27ce00"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "89f50a3e928a074ae0250d3879eb4150"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "3aeb7778c8b6d4f2a0f0f54fa144188f"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "1cecf394c63784316be54b167776611d"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "e787161186a5346794a62f54dc726129"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "0cdc79a1874d0e2c3fbde0ee6777eafe"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "a7c5e170a6e637d183652493c19195f9"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "f8f237b43173800b0e94daeba8265d39"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "ef031158d8ded5cbfed458ecd72288ee"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "77f28d61f5093763c895fba5bd0cffdd"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "08475b5e387c8ed62324de51495d4865"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "37a31cb5d98e3dcbc18179ba3503eba8"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "1b05aa5aa127b798b7eea6ec463d2f16"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "d7418d363e34fde5d3b17841f852f102"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "74909fc1b548cdac3c71d3d3a1028495"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "f3dccb7821b4923a9e8d9adbdf13b4a2"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "3485c6bd49ad2231cd89c62a7d4960c4"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "6fcc49bc69cc97867e7501059550bac7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "368a5bf718b89a33fc445f55a626600e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "db6ce6d1e7b4e424e31c55ade8746b41"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "c6cc5015fd3c960852ffa40e602365b0"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "fc34610fd04f12ce78d35b1d342b55f0"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "90fe07aa08645eab493dd963de267bc9"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "563dd20f7f8f874ec3e28cff8d21f25f"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "9f138bdddbf9ddcc94ce8950940984a6"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "6e8f63c40c9feb82f1c4eb84dfb79ac1"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "27a74a126476fe4f7507ff3cfcaf0871"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "d4b6f4ad218afacdac98f49384d51583"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "cbdf5869f7d389c516d4c2a665f9d225"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "50f84a0fae7f4be49b1b7f12c0a4164c"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "39eb8734560edd10ed650397c93812bc"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "b3d76bd11760f855570bdbee11a3cb51"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "d63b9e2f27ec6082df75898f1f2a324e"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "413bbef2b559c34505e4c4f5c378c303"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a798210815013f93aef2b8da88fd2e83"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f431b72978faa7d0ac0d915cda6e3503"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "c0577bc6c2d684e83bf5c7e8e45cd883"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "802aa301e62dc9ff85599f637e67c42c"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "15cfce2b8770f2f45b8901a585f5a583"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "d7a8b1f5ea27ad333c68555f1314454c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "053a9b22d873b757241690581e96921a"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "4c93a15b075bfd4cee66ecbdcebdf4ca"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "2a13c606b43828ac121b2b250d10ddab"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "1d9f683436eadd8a91c551ecdb477d87"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "4f0c4a2467f732f4a117d17828a5250c"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "60031b61ac1beaf7e9ea4f0130805410"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "d6610a1a0b4864db13c5c320e60d9c99"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "5de4dfa8501658165d2f37f92391d875"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "9df7049c9d6cdb09923d5bc5717350e2"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ad5f4f7a1c9d52643c79f0dbecbe2ad2"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "e9da44d217e49c5eabdaca68b685c3a6"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "7efa6506b062cdd173b1403890cd5e2b"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "539049e7a63a1032c70b1853d39d2854"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "1a6f8778b8064dcfacf287b73ce2f60b"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "553c4f4f079259502e036b0e77ca7d2c"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "069c7df31cb26147b1ca342e0bf4612c"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "64e7d9e86159166287410a5bf1923b7d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "0b39a340f85d9999780339f41e9d86d5"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "7cffb88a0432671ffa67ffda2f3ff867"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "10ebfe45f102bdb4d354d66d71c00581"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "82f96a33f04047845c8002550f63a7a7"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1b0e283feaf3f2a1aa34a4d8682c48b8"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "e9c906a228faa41e6044af7eae1b8099"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "113e62bc17a1e415d7c8d59093228f37"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "22186be88918f609e1deb38690df3a19"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "22f84d9794bff179799ff5126ad5f349"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "740fb1479f83a233f684199e677385ed"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "7177520bc0bdcf84830d34510aa2cd86"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "0f45507c524df18bb200f210d1d3c45e"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "b57fea9fac1e5fdb171c1e9ff9a24120"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "d639f3b1c73edc9a8d4ecd5f87430116"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "ea2b571bdefb24a9d43e94ec99d07623"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "da61a959039106c1cdcb095c19ca5ccb"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "8f9bf949b672955d17f2430381101245"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "2772a59d6facb29c5398a718f7ac279e"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "52bdf6e3698f599cee90237e6d05cbb4"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "de2fe0ac602560309c68e549b1e1d35d"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "84af5c904e910afb7e1e20cf114065d1"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "d0c1b3f80623cee1224dfc8b51d530c4"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "81a60bfac358e2b0da7a86fd7c5dacf8"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "3f0c8b528639671dd63f1db6409cb9e6"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "9782688bb79196ae9cc4e4d79abbe1b2"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "6e9cbb1610a434691dffe34dab415c8a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "143138ebff8fecb3445fd2b3e73788e1"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "45ad5185d70f19217b38f0ede0207ed7"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "34cb8009ca1f977c4b8609a15e646f5b"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "0c3a755ed1040f56146d945c931dde0d"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "ddf6ba20cc444da14a23dbc19ba47e45"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "2d98424e4fa03561c15abd8b5fe1a0c6"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "ea07b178cd87ac4da2e3f6fbc9ea1e4c"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "083b88128c35ef03b9e3ada284eee8f3"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "01288b50ec142d47b1026c8e9150b3f7"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "a4659595dca5cc4feb79b4448cd5d80f"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "adb6ec0520713a4d0d7cb8a3c008d8e4"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "7cce0b33fbe3977c7110eff7ba4b372b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "ddde8e21f3316f4e001a333db55caf2a"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "30367e77b0abb0a1081ed05f7041d21e"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "75833ba1f90b400fa350c33282456cb2"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "3f8d8c5b2e2c79d8fb856d0b9667ae81"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "91b15e883cd09d9f9fb7e104b344ae07"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "95a76e535736dec240058313538f3aa5"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "dfd596ebb8ac92e742b9b6b367fdba5d"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "849a1b16c5b91d7befc1df898f45642e"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "183965b026a57dfa2d7035d39b496ba5"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "34ed4c02450550c0708ec69cbc80fc09"
  },
  {
    "url": "404.html",
    "revision": "0410104ce3be4077737975660028c12c"
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
    "url": "assets/js/10.28c9dc08.js",
    "revision": "02c6f1cde484482413709d120a6ab31e"
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
    "url": "assets/js/103.a7bce9cb.js",
    "revision": "5d35c83c8d85573ba0c00e9fe8f7abdb"
  },
  {
    "url": "assets/js/104.4b66afd4.js",
    "revision": "6352bbe0d41c0320132b27dc355c1c3e"
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
    "url": "assets/js/107.4c8eb08a.js",
    "revision": "5942306cb89e960db623a8ebbac96eb6"
  },
  {
    "url": "assets/js/108.e0173c35.js",
    "revision": "f171ef224f2a4790fe7eb96050d0c7ad"
  },
  {
    "url": "assets/js/109.96dc203f.js",
    "revision": "5c36289321a8eaa04ac1e03fac95f361"
  },
  {
    "url": "assets/js/11.17fb33c1.js",
    "revision": "d3ae54a1fd80ef43cf93ade15b38fd4b"
  },
  {
    "url": "assets/js/110.252b5405.js",
    "revision": "ad3a16975b704a0165ff9b733d125e1e"
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
    "url": "assets/js/113.9bb607e7.js",
    "revision": "b7661985da6ad984be19785cfc98a548"
  },
  {
    "url": "assets/js/114.cc7d4a8e.js",
    "revision": "51d9f350dd361fa559f8135406ae3919"
  },
  {
    "url": "assets/js/115.e8f7a18d.js",
    "revision": "9eacc11e85b0dc6095dd8c07a6720b84"
  },
  {
    "url": "assets/js/116.883ffde7.js",
    "revision": "d840bc408f436c1a5a27453dd47cf28d"
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
    "url": "assets/js/119.89f677f8.js",
    "revision": "a9ffad7fe5e9ffb414b9dfcb6b2ec804"
  },
  {
    "url": "assets/js/12.b060af13.js",
    "revision": "00e441de76f8353a44b74d3ed975e1e6"
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
    "url": "assets/js/123.0fe3e22c.js",
    "revision": "5d14ed16f587a5d3c10fad4f821df0ba"
  },
  {
    "url": "assets/js/124.618d9e12.js",
    "revision": "ed664be3cfccfecdc78b1fbef24952c0"
  },
  {
    "url": "assets/js/125.5983bd57.js",
    "revision": "281c2b42b95bd902752e5beed4290684"
  },
  {
    "url": "assets/js/126.1f350578.js",
    "revision": "bcfd6801d5177acdd88999628aca68d5"
  },
  {
    "url": "assets/js/127.10d85536.js",
    "revision": "08a03ea2ed0ff4ccea4233835ad094cc"
  },
  {
    "url": "assets/js/128.e55b6335.js",
    "revision": "d761cbaac0ed26228b9ca24dec9bba21"
  },
  {
    "url": "assets/js/129.cd40760f.js",
    "revision": "5d9655e9ed25827a48d82f74bd0d7fce"
  },
  {
    "url": "assets/js/13.c2f8d40e.js",
    "revision": "af2cb30fec6f08555c8730d61dc8df66"
  },
  {
    "url": "assets/js/130.6d1a6a9b.js",
    "revision": "2fe951277fa300664b4dd12da89b8698"
  },
  {
    "url": "assets/js/131.c1a4c4ff.js",
    "revision": "24c253e192b56ee7936b84fbc2688eda"
  },
  {
    "url": "assets/js/132.6f4f383a.js",
    "revision": "ee9ef9039e33e6af30be2b002d360df7"
  },
  {
    "url": "assets/js/133.fc7c913d.js",
    "revision": "1e027856bae6cf2d9d92baae43ff9055"
  },
  {
    "url": "assets/js/134.88c8e148.js",
    "revision": "7e7e26b9d70745c169c6a19f3f886ec0"
  },
  {
    "url": "assets/js/135.31cdbfac.js",
    "revision": "aa14782ab8a938eceff7946f39f6c948"
  },
  {
    "url": "assets/js/136.af9da85c.js",
    "revision": "8fa59ef3f5d1a316a1cb8ff12e12d308"
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
    "url": "assets/js/141.960be897.js",
    "revision": "e212c6dc3999c8c0dc13aa71ca407a9f"
  },
  {
    "url": "assets/js/142.1f35e749.js",
    "revision": "beec901444f02de1ff363c1b32fa94cb"
  },
  {
    "url": "assets/js/143.c364bf9d.js",
    "revision": "2ea13d6c9264c9df2f1e1d36fa793ab0"
  },
  {
    "url": "assets/js/144.037aa3d2.js",
    "revision": "f721b3ff59d0e56d50f08c66de43c4c5"
  },
  {
    "url": "assets/js/145.45ff70c6.js",
    "revision": "812118556ae8715bdde6a2c8e4ee4ec5"
  },
  {
    "url": "assets/js/146.e93a954b.js",
    "revision": "cbe65d967312ca00ebfb138a00c59bc6"
  },
  {
    "url": "assets/js/147.b438b611.js",
    "revision": "7eb0b8fdad836923813cafbc0bba46d3"
  },
  {
    "url": "assets/js/148.eb915527.js",
    "revision": "a171bb3ff4ae31d57ee3a9fef41bce14"
  },
  {
    "url": "assets/js/149.d5eb0988.js",
    "revision": "cad0f30df82364dd6e6ecfd5be602ed7"
  },
  {
    "url": "assets/js/15.a06eb435.js",
    "revision": "ec82093fdea2994accb459cc0d3f3bc4"
  },
  {
    "url": "assets/js/150.15843c55.js",
    "revision": "f8244fcdb1525096c481b8da5e95996d"
  },
  {
    "url": "assets/js/151.4a4d5826.js",
    "revision": "4a450f0c846d908a877f09808537803f"
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
    "url": "assets/js/155.0c7022c7.js",
    "revision": "32f1705572acf6f16bda0abac6b97761"
  },
  {
    "url": "assets/js/156.eb87ad98.js",
    "revision": "54dd6ac1bd5a9ce1c1b76f6807269fe4"
  },
  {
    "url": "assets/js/157.a050e4c3.js",
    "revision": "4890dd2b5956612d3e167438851b2122"
  },
  {
    "url": "assets/js/158.53d7df97.js",
    "revision": "8b50636431f464bfb88eafc0f24ad153"
  },
  {
    "url": "assets/js/159.975a48dd.js",
    "revision": "b386223b6c0643acb84423c6f148fc02"
  },
  {
    "url": "assets/js/16.f2f9ad5e.js",
    "revision": "734a27cefbb2be2c2cbf746b895e814d"
  },
  {
    "url": "assets/js/160.95b77be3.js",
    "revision": "49dc97fe3e3ea1fa494fb8e0edae6464"
  },
  {
    "url": "assets/js/161.c8878baa.js",
    "revision": "9a6bc952707b056ba7524fa161c0c058"
  },
  {
    "url": "assets/js/162.b3c85e54.js",
    "revision": "dcfbfb1d39b09f4abdf9201ac97dc4f4"
  },
  {
    "url": "assets/js/163.5994fc32.js",
    "revision": "1e0706831a30f781c5590704ad707fc0"
  },
  {
    "url": "assets/js/164.c5b02917.js",
    "revision": "c100061b2f370cda3bb27a4ef83cd0a9"
  },
  {
    "url": "assets/js/165.1793e292.js",
    "revision": "2d0b1f647209607e35764f8213afb4fc"
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
    "url": "assets/js/168.32ffaf48.js",
    "revision": "8032cb82631cf1a69d599003d7c702e8"
  },
  {
    "url": "assets/js/169.5d761fc2.js",
    "revision": "8d56abd6aa269d402479512da7b7dd85"
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
    "url": "assets/js/171.844a841a.js",
    "revision": "2eaccf6c6bbcd555d395241fb77e4a59"
  },
  {
    "url": "assets/js/172.7541f9c4.js",
    "revision": "bad95a6d28b6fb12744ad8fc82ce3280"
  },
  {
    "url": "assets/js/173.528f908f.js",
    "revision": "5e5588c96129f0c2cb89fddbe0537a9e"
  },
  {
    "url": "assets/js/174.dd5b201e.js",
    "revision": "46b5b51217c6dd949b3edb775e0cf261"
  },
  {
    "url": "assets/js/175.c5b83f0e.js",
    "revision": "2155dde2a91cf295e4af6a88b822c481"
  },
  {
    "url": "assets/js/176.b5a67573.js",
    "revision": "d951262934f92201f2f437f89b411842"
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
    "url": "assets/js/179.a6b867dc.js",
    "revision": "44889c337315140a4160e4540cfee4df"
  },
  {
    "url": "assets/js/18.0879c197.js",
    "revision": "7feafcea694bc1e0b8ffc58517484bb3"
  },
  {
    "url": "assets/js/180.2a4cdf17.js",
    "revision": "6e226e663e9dda04c40e104398af0e79"
  },
  {
    "url": "assets/js/181.1ab194d8.js",
    "revision": "ea9eb1c8bd98ff240464accf20f48ed0"
  },
  {
    "url": "assets/js/182.b82e3af5.js",
    "revision": "d2010bae9f3866f23c150bce34f24585"
  },
  {
    "url": "assets/js/183.f7df1e37.js",
    "revision": "a8864742c046b2b35467dc4f9665ed0e"
  },
  {
    "url": "assets/js/184.2336cace.js",
    "revision": "4013716a3f857c9e02cecf1915652055"
  },
  {
    "url": "assets/js/185.678f7fea.js",
    "revision": "994ce74c77d2937a9757f3160c2e90c7"
  },
  {
    "url": "assets/js/186.cdd3161b.js",
    "revision": "6a3f4cd8fe4dca15333652a430c8589a"
  },
  {
    "url": "assets/js/187.f26dfc36.js",
    "revision": "c526d96f4d6fdee26546da663f801b2a"
  },
  {
    "url": "assets/js/188.538400ad.js",
    "revision": "6cd65a5cd6f72c5aaf6a71e0898de5a3"
  },
  {
    "url": "assets/js/189.80140e9d.js",
    "revision": "158565e71479fec35e4b53c1d146c290"
  },
  {
    "url": "assets/js/19.bab986c3.js",
    "revision": "6adfd69952c3f8c838437dd6e33686c5"
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
    "url": "assets/js/20.45f70a3f.js",
    "revision": "033580cc821158cb86257fa6918cd504"
  },
  {
    "url": "assets/js/21.8656a1bf.js",
    "revision": "7bae44c6068da927f3b579af47ee7818"
  },
  {
    "url": "assets/js/22.d56ddbe1.js",
    "revision": "39c6dce626eae40a8a218f6847627475"
  },
  {
    "url": "assets/js/23.47dfb6dc.js",
    "revision": "d17c9be520b5d51fac9605dd893ffe4b"
  },
  {
    "url": "assets/js/24.26826d9c.js",
    "revision": "0cbf0c635c8e982cd9edf84f16430b9d"
  },
  {
    "url": "assets/js/25.471a97bd.js",
    "revision": "7d37b03ad40abc9f01f0b8ebff3aaba1"
  },
  {
    "url": "assets/js/26.8995ef0f.js",
    "revision": "126165c2308bb78c1cdfdd33028bda8a"
  },
  {
    "url": "assets/js/27.5187bb86.js",
    "revision": "24f355be124816ec62230587c4a6832c"
  },
  {
    "url": "assets/js/28.bfc4a689.js",
    "revision": "2708984268476d2bfc91898025fb3bed"
  },
  {
    "url": "assets/js/29.a32261fa.js",
    "revision": "dd4ddc95745fd35f89290abb3fa16242"
  },
  {
    "url": "assets/js/3.a702b1f7.js",
    "revision": "7c616d9b8c96c2cf4fb59f9c2b016552"
  },
  {
    "url": "assets/js/30.7fdd47a5.js",
    "revision": "f8229b26af20bb5f2d6491e933cda8f7"
  },
  {
    "url": "assets/js/31.ac938129.js",
    "revision": "da04130e5e0f4e3666cb6ccd50b98cc7"
  },
  {
    "url": "assets/js/32.a70c5f34.js",
    "revision": "44e95a734bdfdd9a28d93c6109d882f8"
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
    "url": "assets/js/36.967f3e04.js",
    "revision": "5efe9eb761218b648126016cdb611b70"
  },
  {
    "url": "assets/js/37.afe6f029.js",
    "revision": "9b20eb75f84e3b8f2298e114d8d926d3"
  },
  {
    "url": "assets/js/38.6326ad19.js",
    "revision": "a173ad1d4c2dd7864cffcd9204b37c69"
  },
  {
    "url": "assets/js/39.9b6a1a01.js",
    "revision": "8802500a34d35d8fe37e8650be8aec9a"
  },
  {
    "url": "assets/js/4.c838de4b.js",
    "revision": "a87434c78889295355aec48818c25f03"
  },
  {
    "url": "assets/js/40.4b7eb587.js",
    "revision": "42a693b468c987bb6061c5d71d6f85b9"
  },
  {
    "url": "assets/js/41.b0e72f76.js",
    "revision": "086be5c5813f8aefde22984ebed4da53"
  },
  {
    "url": "assets/js/42.1b5951b2.js",
    "revision": "2c326cdad495d57f89a302270dcb17fb"
  },
  {
    "url": "assets/js/43.4392c6dc.js",
    "revision": "24a0dc5aea874060dd806558b7ea82de"
  },
  {
    "url": "assets/js/44.c23ac79f.js",
    "revision": "cfdf6e508f5bad504b108d7dd47d7e82"
  },
  {
    "url": "assets/js/45.9eb2fc7a.js",
    "revision": "a88ee81374b6b7e8d59a1e371caf1b3d"
  },
  {
    "url": "assets/js/46.fa442179.js",
    "revision": "af01b490ea001091cf89bd6fb814e2c4"
  },
  {
    "url": "assets/js/47.71f8faa6.js",
    "revision": "2c53cd5e8362373677b20b8d255aef22"
  },
  {
    "url": "assets/js/48.8fca1871.js",
    "revision": "b5fb5d07f87068e39c28106504e5c421"
  },
  {
    "url": "assets/js/49.5d21f860.js",
    "revision": "9673fa69c16b212c6131579de8c098ed"
  },
  {
    "url": "assets/js/5.17da0945.js",
    "revision": "7111c6abe4573af902c511132315e57f"
  },
  {
    "url": "assets/js/50.e660e583.js",
    "revision": "09859bc2d55c48e5c6519b7e627366a0"
  },
  {
    "url": "assets/js/51.ff76aed3.js",
    "revision": "67657181b1aeada49a5eff97e19d6857"
  },
  {
    "url": "assets/js/52.8291553b.js",
    "revision": "7c911ff3e817ffa325157e0e341a0847"
  },
  {
    "url": "assets/js/53.12847b7f.js",
    "revision": "64067ac545a2b2242fc7a3f942cfaf6d"
  },
  {
    "url": "assets/js/54.f11e1996.js",
    "revision": "b495b9c75774636a88d1dc2ead2f30ce"
  },
  {
    "url": "assets/js/55.c4c2dca2.js",
    "revision": "27a06f066e236b04b31f0e26dba82871"
  },
  {
    "url": "assets/js/56.9b6579a1.js",
    "revision": "bf0149d062b0c6db15ab5bc61a0a4f0c"
  },
  {
    "url": "assets/js/57.dde61ad5.js",
    "revision": "82704e087e6ef1b7c06e28e3126297e3"
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
    "url": "assets/js/61.9270cfb3.js",
    "revision": "600f9fd7ba939193d3c22f6b1021c64d"
  },
  {
    "url": "assets/js/62.9d6df6ba.js",
    "revision": "071092460610e4f347240af7a803cee8"
  },
  {
    "url": "assets/js/63.eba1d03f.js",
    "revision": "c6a7a18a7b59602bab04203d0464015d"
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
    "url": "assets/js/66.64f1bb24.js",
    "revision": "77e0f2e2da84125ed822344ea80b4967"
  },
  {
    "url": "assets/js/67.c28fc234.js",
    "revision": "1376c508fa50e050c62b8e407aa34aae"
  },
  {
    "url": "assets/js/68.c03bfcfc.js",
    "revision": "b7b8dc7c5f6ed586d691812a9b422d45"
  },
  {
    "url": "assets/js/69.e9edfaff.js",
    "revision": "392c47cd9ffdb7fbe4aa6ee42899e6a9"
  },
  {
    "url": "assets/js/7.f9009fb7.js",
    "revision": "01e9adc5664f2116dfe727b7243b3a10"
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
    "url": "assets/js/72.296ffed0.js",
    "revision": "328a5f9d20c725c50587ba3c233e83bd"
  },
  {
    "url": "assets/js/73.0211a9ca.js",
    "revision": "b9364b1faa6e83a6e30e9d9892611d8d"
  },
  {
    "url": "assets/js/74.86f12f12.js",
    "revision": "25731ed7e520ae03a88196bef0192629"
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
    "url": "assets/js/77.55629553.js",
    "revision": "9a07c86c6746385d26378b7b2a402778"
  },
  {
    "url": "assets/js/78.ef2dcc57.js",
    "revision": "756a8153b5d9743ec591822daab9021e"
  },
  {
    "url": "assets/js/79.e12f1534.js",
    "revision": "cb49e31fa2ef5f2959a1b849803abb41"
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
    "url": "assets/js/81.4c75ee9f.js",
    "revision": "de2fc097f43980fb67aa976f0ec2fced"
  },
  {
    "url": "assets/js/82.c70fbe09.js",
    "revision": "5e229e8691a41956e442fa04954883fc"
  },
  {
    "url": "assets/js/83.a3a3746c.js",
    "revision": "3c492b23e94aab4cbb89f1ceb578a3fb"
  },
  {
    "url": "assets/js/84.7d0a0bc1.js",
    "revision": "9616f553241714d77e5c9978d83543b9"
  },
  {
    "url": "assets/js/85.dfd99d85.js",
    "revision": "b0549c0ba2561fe44ea24bc3cec76cd5"
  },
  {
    "url": "assets/js/86.4bdc47e4.js",
    "revision": "78f60f1cb0048edb538845f735bca4a2"
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
    "url": "assets/js/89.3001768a.js",
    "revision": "998e2c1ab886d39977f26c95ab7ba8e1"
  },
  {
    "url": "assets/js/9.1ddd5114.js",
    "revision": "7ba5c134a8f3626631f0db8852f97fa4"
  },
  {
    "url": "assets/js/90.df553b89.js",
    "revision": "02f987ec66c0af27b9e0c0e4c7098975"
  },
  {
    "url": "assets/js/91.0b139999.js",
    "revision": "1f3c4f1fb452ce824e092573fa6c575d"
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
    "url": "assets/js/94.044c3ab0.js",
    "revision": "a3d0cf740f3b337614b19ceb9bb08561"
  },
  {
    "url": "assets/js/95.9f68f12c.js",
    "revision": "bf6d5195b23c7240edaba269d5962bb9"
  },
  {
    "url": "assets/js/96.ec7bafd3.js",
    "revision": "cb3fa98d00088246262296f3a5691f1b"
  },
  {
    "url": "assets/js/97.c039809f.js",
    "revision": "1dec845dac9e95f0cefc35b4376afb56"
  },
  {
    "url": "assets/js/98.d14c1935.js",
    "revision": "e54ad384257aa5d0b24aec94d6692e0f"
  },
  {
    "url": "assets/js/99.f27157cc.js",
    "revision": "44f1c3678d7535f108c6c439545dcbd6"
  },
  {
    "url": "assets/js/app.3eef968b.js",
    "revision": "916d9152b7d020483bc3f0fe9c2a7cba"
  },
  {
    "url": "index.html",
    "revision": "29106a59588b3f668ca8791adb66fdb9"
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

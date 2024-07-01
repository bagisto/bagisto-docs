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
    "revision": "7ae33b8794b0d100957dbceccb812bba"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "b81038f5152bce6e48043ed2b3de4aee"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "952000e9abd6c27f9d5d6537d199de4e"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "fc2ebb81ae83811a6d87c227705dfe02"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "0a863b8d255e98ed7c0d22248aab7e2a"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "220520861a0443dc8e2cdbf77822d60e"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "a666a47bfd53360dd742669af1038119"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "101960083b4ac5890cb97437a10a114b"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "39e3ec4f7561277a367b1f0da5e43b9a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "786f6b5f1106d0ad769c33a89bb88830"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "11487f1216556eb02c7aff31f83ec7e1"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "b36cb58d2290065925ecc84f71897293"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "84f9c6c730f0131859b2868226cc023d"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "0b0b192026f57f9dd458312b1dd98b33"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "f6bce7facbecd83a677799ceaf22cb06"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "ff9851ee629c74638c1791e48ba0f50b"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "efc8bac17a6f4dbff10679283218bb41"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "a3543ab093a1a4e1d6d539c620d46d19"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a799923faa5b26300d2078ba465fbb1c"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "7ddec3b1842e900869ce1391c04a8d52"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "95ac25fd0ea988a153e701758e296c60"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "e85a09004ce96738117e8d8814da48be"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "71e80d1bf2fe39e0d05fcbe2fc24ef85"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "337503de8b0afb86ab1be82d020de225"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "e8484394957688c8c35e25af1ee52437"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "14df586e6a5a250946c9a1f0f437887e"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "2f3ec4bb808dc11bb2b7835241d59cb8"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "bd982add33e84cc53fea8cb26be41241"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "6a985f5dbd0a3e36a4866d9bd5dc6dd4"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "8ed9b8d791e6ac68c39ae6e7b04ed830"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "807fec4ebe75554b1f1d101933e2b02b"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "fc6e520fa894d87b4a04123cd3fdd187"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "596ba94791d932b5512ea887281abbec"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "3ef91f4067453bd29f0ddbf87013c40c"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "b860bdbb526874ec2dfec62bffd646f9"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "c2f64f5f97515900f580ed1a8d86fe9d"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "e1ec431a7e3a2504c5c6eb6b96588672"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "9d47cc617ef984964e9ec2bb9cb4b93e"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "a50622b090d1c8b44999af83614c110e"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "0401ecb0ffbf59f8b0d49ed7adf9b8d8"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "50d2a14d43c5115cecfad9d8b1267bef"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "f22beb49bf679b623ac13efba119fdf1"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "1fa6fd77b117b417a2cb29783739b76b"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "3047efb389bfec2f66df3bca1904165d"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "1332290725f86fdf8d1a25b3eaaf95c8"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "5a5afece9e060c05feb895fa9f11135a"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "27994b6cdac1c290070d6f8863ee5c86"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "18ee7d066a9ae75d4202c5377468cdcc"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "f95ec666c195a88ec8c28b7ede78767f"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "6a10407b9011526e7bb00d9b7de37e58"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "3e29631707e200966abe47f02c03b2d3"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "346b7393d0353ae744936c1f2c841003"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "4debaec39b08db659ecaa98b31691465"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "b04669f45afb294c5bfc74d611ce56b1"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "c66135b5bb7d8d642e871c4b1a73b223"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "40c8d779906ebb895bd36e03cf912e6e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "9aff1ed39b85d204e920f0e8512de7a9"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dd33fe7e1cb35a3be98c7128f66cbd9e"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "37d6237423e5992cea76721e4c8e0326"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "b35f031fa2289c0422b50b625c6b0550"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "f8311c98d14879cb368c08b8bbdd97b8"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "662dd6a5aa4c2accee34740067b82d54"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "ea7f3e9ee33829983b35deffe751d300"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "8923ade2e5c76ffcfd444648427c37d4"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "b3a6fd0a0f01169eddd4642718074ee0"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "0e4e1b9532a3ded84c0e1d4549e4230c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "96b50afcd3bf3748e888b2bb03a150d7"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "846c41837e0163b2338b246aa3b82f3f"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "d498dc07768e0137a0d32ac0e8db9b3d"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "d6f98f44647cba90895123e1423bc6bc"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "104b2fc948e04c2523bb53c3d726c632"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "5f856cbeed1c41e532600684035354a9"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "c3f03681fb8eaafbc73ca37d082e2234"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "b9c50c75ae821cba312bbe960c4b654c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "cca16f77c7e5ef905369d19a65eace0e"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "9c272db4deedd15449efb520baeb9b87"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "903623e319ab540cccdf05f3a8395126"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "0af584265eed503a51e778ed85bd900f"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "a58d63dba9442f5d4859a02af14c3cad"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "7fcb486491685a26e884d6cd42e6ba0b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "343fe9c9780d4a1519a921b897582f35"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "6be64b2921b3f3a93a562a85caaf4197"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "57ef059ce78bd6bbefe4fa23ea802bb0"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "a755c7ba33a1bb09deaf186c92c96414"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "f0fdce4699c1b4139e8513a6274c6176"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "2ead46b975595d9955efc9da3428c998"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "211097f54a98698140459bc2c993f547"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "3c52c1aca66a642eb2ed318dd172c8fa"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "2b4f16c1ef18a1f757cb933d84420b31"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "4000650be90a80231de41383b60c21b8"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "ce7c6602d6ae216a908d09ff1a98b94f"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "33ca74ec49a7d4c81c67eeea5370bb4b"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "0f2fcb77ebb964345977b3edc8328a3f"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "a234c6dba8acdf4f54dcfe9c351cde5c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "cd42432a13c2863018be7a2798183f54"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "1eb26d37122bb161d29a75b4a7b445ee"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "5fc85b099e797f168b543cf7a880ec79"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "9bcc3b0014b372621e0b0d5002ac4563"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "8039ed1e6098e994001b66ab4e3b3a08"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "13054ccc6542b84247729fbe2cd71d49"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "3dd95654b9a7e32c57b0d22feabb9d53"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "46b182dc94b38c248fe38c27aa96a55b"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b791caefede4f82a56b8efe42ba2d636"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "33e87cd740d1bdeb4ca4eea10c021a3a"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "3614c241c75308a60c520e628333dc61"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "a5debf1d6abb8e40023c3aaa32b4fc70"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "d458cf8f29378568c5408ce934af70e3"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "5b9f4e9629a9a2fa0a962b868396319d"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "dd7b20b76b8a0daa90bee2568750b44f"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "9c419e792ae31bea1bcd0898c48fd2ae"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "27b5e450465fff690deaca32218b4548"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "ade685660f5b70b3570fe31fa3785d2d"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "aad5c2f0d664db580fcf4cf706b56ae7"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9196682fdfd83dc6f93c310c6346cfe6"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "3f7e9c3f8b3e311844c9dbcadb862923"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "649e9bc47e1c2e64a6e3609b3f3baf23"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "04a15e7599ae64c47ddd4d4aab9b775f"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "17db795cb724968a8ac28911e29d7742"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "ea0260dc560ac5fb4d8cd48361da98a4"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "1b3afea389e1b0001197769153f8265c"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "daec934d92ffc7d03df2828c402de3e3"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "8f1da3da65fd027b1d1301a032f422e5"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d110529731d8dd9bffda9a8d816e904e"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "84f0a9a6548e0aba32a42c517646d3de"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "cb196e683e502b6149f73dc2d8ffd24d"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "371f4ff5754a90223355b918c1bc10ed"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "b9156f77eed1151aabf87b4a678dfa7b"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "367a763f36c9c5d64c93abe153e14028"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f2b17a741ff15760c18671b3ec79f51e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "c0feefce532cb1d7726d980f5d8e0340"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "5e89966593eb0f0a08a27c2552bdfb38"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5368d7a2c5f686faab72f0841ba8e13d"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "ab0c0398976ea9fecf479653600be057"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "33c78726a38cade59352597aee13ed73"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "93852e7993314531c77220d87b71b57c"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "4ebdb82fcadb5fbe5ce85aede70331d9"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "11e1ca8fa6de4216799ce48baa155fee"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "de0f599d0bd67addba9473f52fcedb3e"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "f474820efa93375f6a1519a03760b4d5"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "4374c3b548f2ff21fc5f7c466d04eb0b"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "41b245ad11ca55c0d809e4c92cc72d99"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6ab7c8a5cbe473422822f74e68504a8c"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "a0d40d5766897b20578b7bb5d073fd84"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "2575f77e45f1d8401ce7ce61d3c6cba6"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "d64eaa7eb7b4f5fa1fd7f5535be694a6"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "6987c1902010e0e2bbd9ba7cd9f41fd5"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "0624147ac18fa9bdc12710e78e83c160"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "e1202aa6e02dcc1148f7b9faf408993a"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "9ffc005779abf4923a6aa45796c952ef"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "bc70b63d05cb37e198418fcea0bd1e27"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "00af96d899e95db56cef2ee389fef11b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "74f2c3078cb99839100aa293cac40da9"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a8fddbd5dd8e959e13606b07e3c56ef5"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "5ec4ccc7967f24cee8592c7a983b834b"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "5efc47648d892e764de14aea9f8ff827"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "beab0d78f2de64a9208054e67151d131"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "3ab77ee68105800c3c2433c08d83a4d1"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "5bbd5fc9633b07bc1414cf37deab39b1"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "021efca09ff2380812da3d6cff087297"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "fa1fcbb648e00c0a57c47a8052ddfd85"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "9124cadf77b3742bc874b8aaca3de54b"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "ff6671a6c3c861a48b72af2ec3736507"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "5bd65423533db67d34de3cfa936d064b"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "61495d925a350cab20f37e90f1cc72ae"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "2a1f00dd528264199932b24dd5e5a2bb"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "5473542b26f298f258ea98ba6daa3016"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "7303ab2913c9472e4a9700099f4cb558"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "e0ea6b5ad8ec6fb8c3d2352a410b17dd"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "8f41c66015525e36422a7a2d2c3af279"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "1fcc31968f3fd0afab93ea537e8de2aa"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "3c8eec4852c36262e254deebdb3a6e19"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "97c2c00bab6ac092127f225febcda19a"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "89789cf6b438d4a96555738a5937a540"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "1958ed724314b3d7203c8fca387532cd"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "c686fa9333a93f7fb17f0f1fdcd90888"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "c7f8a6bfd0aa4c82b4073400aef06861"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "1caa4df6f42ae9d49a961c16166f4573"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "2dcd64901e320232cffbab52e1f429ed"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "f515c0c6a335c20df8d911e324406f33"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "f67ae57d236de49012503cc77736b437"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "9db538d9ba56817cadde5539b3970e05"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "504f4790347bc9703c8b9134d5a328fa"
  },
  {
    "url": "404.html",
    "revision": "f014b60ba57491e3f4bed5e4ce70f08d"
  },
  {
    "url": "assets/css/0.styles.b729bcda.css",
    "revision": "0bee541eb1404ee573bceccece39cc00"
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
    "url": "assets/js/1.c48088d9.js",
    "revision": "799ac862bd1800f58c59308c21bda6bf"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.2356a255.js",
    "revision": "2109308f8f2520e36ca711b76561c2a4"
  },
  {
    "url": "assets/js/101.bdaac78c.js",
    "revision": "d49361b5af4bc368d57f9deb843152d3"
  },
  {
    "url": "assets/js/102.0b51140e.js",
    "revision": "bf43420244a199d9e65f1d12fb0e9e38"
  },
  {
    "url": "assets/js/103.2e968ed2.js",
    "revision": "ccfec635885615c1eb7a0f3c1fcc51ef"
  },
  {
    "url": "assets/js/104.0f257b3e.js",
    "revision": "5afc03243bbe51259b62ca3674ab7547"
  },
  {
    "url": "assets/js/105.2ad5dd30.js",
    "revision": "baef7705c22f4fe47428b370a9024d1a"
  },
  {
    "url": "assets/js/106.5c41231a.js",
    "revision": "c530d0f1b7939df20de0f883c0c51fc0"
  },
  {
    "url": "assets/js/107.ae9505ec.js",
    "revision": "7ed52b9c32ab3acc45a15faf30f6a48a"
  },
  {
    "url": "assets/js/108.9aa01f65.js",
    "revision": "ed895819339d3e22eab55b49bee96620"
  },
  {
    "url": "assets/js/109.4fd775f5.js",
    "revision": "2a7fd069938fb80b08e5e2ece1d5933b"
  },
  {
    "url": "assets/js/11.65b3f8eb.js",
    "revision": "278f9b179b6a66e0ff7738331825ecca"
  },
  {
    "url": "assets/js/110.b6d5d3a4.js",
    "revision": "b2c33afb50e74ed7a8a5d895219bf383"
  },
  {
    "url": "assets/js/111.b51ff047.js",
    "revision": "ebae0b2090343f263a7760a0c0aa4823"
  },
  {
    "url": "assets/js/112.697e3530.js",
    "revision": "5ce52035af84bf5f7375e9d014068c69"
  },
  {
    "url": "assets/js/113.675f5689.js",
    "revision": "85ef8574cc55349152db3468576f282b"
  },
  {
    "url": "assets/js/114.1ac9dd77.js",
    "revision": "cb96ed94e34c1ed6f5f53a27c788b2db"
  },
  {
    "url": "assets/js/115.7a02ad47.js",
    "revision": "d700cca9610dd3427f521f9c301c9d57"
  },
  {
    "url": "assets/js/116.ca4b4ff4.js",
    "revision": "25a13fc272cfba362bd41d8e907a791d"
  },
  {
    "url": "assets/js/117.d54eaddc.js",
    "revision": "ee979f3c7d953ea71d439f2748eee7eb"
  },
  {
    "url": "assets/js/118.acefd203.js",
    "revision": "2c28ef1d2a0c7a82bb88902ca960e656"
  },
  {
    "url": "assets/js/119.34274f6d.js",
    "revision": "a6558c961ff7944626bc61c122483c47"
  },
  {
    "url": "assets/js/12.88d886d7.js",
    "revision": "803e6bc7b06b92530c20e692f07216df"
  },
  {
    "url": "assets/js/120.ee66ac05.js",
    "revision": "5ae57d660615b9d0bbd937b051f63716"
  },
  {
    "url": "assets/js/121.517a29ba.js",
    "revision": "bdf3907f3d4fdd899eb01f3c300f575b"
  },
  {
    "url": "assets/js/122.687e93d9.js",
    "revision": "da0595cbf3705a670d99a4ac53d0ddf2"
  },
  {
    "url": "assets/js/123.3f2744bc.js",
    "revision": "0d615ee0c1a07520d6c9a7c79a7f9333"
  },
  {
    "url": "assets/js/124.47850a7b.js",
    "revision": "1a7efee2a7e58f04f20076e77183654a"
  },
  {
    "url": "assets/js/125.c8dc9ac0.js",
    "revision": "2b2b1c7d1c3b2ae6017e21a7f53f9d92"
  },
  {
    "url": "assets/js/126.71902b60.js",
    "revision": "081a6d5f4e15e66cffc444585b1190af"
  },
  {
    "url": "assets/js/127.ca253a38.js",
    "revision": "d63c073158c76f3415045b73871c4b11"
  },
  {
    "url": "assets/js/128.7d0b7546.js",
    "revision": "5a684089fe19de3808d1afad090abb98"
  },
  {
    "url": "assets/js/129.daf2df02.js",
    "revision": "da93d3860d124457f929eaa448ee9c22"
  },
  {
    "url": "assets/js/13.4c1b2220.js",
    "revision": "b5602dece2dbfa9271091abce58fd9b0"
  },
  {
    "url": "assets/js/130.73b93a51.js",
    "revision": "545adb19e2f8af90d3c905d42b712e97"
  },
  {
    "url": "assets/js/131.0b7c036c.js",
    "revision": "af53c4f83ba2f911585123e017e58906"
  },
  {
    "url": "assets/js/132.2a6e14ed.js",
    "revision": "ee6837abfab3cdf58aa78c02428eb2c4"
  },
  {
    "url": "assets/js/133.25256bc7.js",
    "revision": "5820fb45bc391e2820b1754e82bb5e17"
  },
  {
    "url": "assets/js/134.8c15d17c.js",
    "revision": "b33e19a093ce99d37dc7bb80c535daa9"
  },
  {
    "url": "assets/js/135.5b4d9265.js",
    "revision": "588d04b5df59f9777647b6e5a6c4b7d1"
  },
  {
    "url": "assets/js/136.d052d4bc.js",
    "revision": "c7aea8737c3abc5b1ed6e410b62700b7"
  },
  {
    "url": "assets/js/137.c22ead61.js",
    "revision": "7a8d045eceb80bcee3ef801c6e60acf6"
  },
  {
    "url": "assets/js/138.0d0c93a8.js",
    "revision": "b375cda1e1e11c639aa14835cef69fbf"
  },
  {
    "url": "assets/js/139.deea70cd.js",
    "revision": "a7c3b5f1e238f991471060e5e252802b"
  },
  {
    "url": "assets/js/14.cc85eb64.js",
    "revision": "3b2de6bca461597aa3ff1e4fc9a6c6f3"
  },
  {
    "url": "assets/js/140.fdd3da07.js",
    "revision": "20cfbb694404b9be989dc0000f1e8361"
  },
  {
    "url": "assets/js/141.632f1a1c.js",
    "revision": "4cb02952178eebaed0abb7d08e6edb4b"
  },
  {
    "url": "assets/js/142.c4a956e5.js",
    "revision": "3368c458d0a71da3778b9a623f7edc85"
  },
  {
    "url": "assets/js/143.10909895.js",
    "revision": "e41172f2f6292f8c3d2b2d221c96f7b4"
  },
  {
    "url": "assets/js/144.932b6ceb.js",
    "revision": "6d96122ed09f0dc4ea46045e6b553937"
  },
  {
    "url": "assets/js/145.e6f3b4d1.js",
    "revision": "346c0df7ce7da7394092c0adc09a24f7"
  },
  {
    "url": "assets/js/146.5cad1229.js",
    "revision": "ccf7fa793d19212caee68501195a1589"
  },
  {
    "url": "assets/js/147.94ee8f6e.js",
    "revision": "9b2bc42d4f94a4276169cdaf71f208e4"
  },
  {
    "url": "assets/js/148.8218fd0b.js",
    "revision": "c1ec8fbf9419e21b6c1ae397c53417c0"
  },
  {
    "url": "assets/js/149.15b593f7.js",
    "revision": "ef2ad7d10dfb81efff437c9cd39f80a0"
  },
  {
    "url": "assets/js/15.04747bd0.js",
    "revision": "045e4f40223e91edf3df7e139a82b77d"
  },
  {
    "url": "assets/js/150.953dc685.js",
    "revision": "82b9bfcc0c9ccc85befe7f9fbd1f0799"
  },
  {
    "url": "assets/js/151.f0c13f7f.js",
    "revision": "ec4e4de0c913c8d9a8da646a9f6afdee"
  },
  {
    "url": "assets/js/152.1b4ace88.js",
    "revision": "d0b41faa97d539e192c8075e453c13f3"
  },
  {
    "url": "assets/js/153.032e19e3.js",
    "revision": "ad8cff08b92fba17a688df3565428cab"
  },
  {
    "url": "assets/js/154.7efb2883.js",
    "revision": "6091f4ede353b1afa6f557d271e43308"
  },
  {
    "url": "assets/js/155.4313129a.js",
    "revision": "94bcabde53c198e483f33fff17f330fc"
  },
  {
    "url": "assets/js/156.41ecde26.js",
    "revision": "587029656f51c10282b1421a74bdf987"
  },
  {
    "url": "assets/js/157.4f0bce1c.js",
    "revision": "984b7fb5696633a4310e55086781e2cd"
  },
  {
    "url": "assets/js/158.f8ebc242.js",
    "revision": "0b882fd6d4ea396cc91eaff0dfaaf9c0"
  },
  {
    "url": "assets/js/159.91cc295a.js",
    "revision": "3f85b06b761e8af9a8f5d60c69c2046d"
  },
  {
    "url": "assets/js/16.cf64637f.js",
    "revision": "75dfd2f7393e62a95964319ffae70b35"
  },
  {
    "url": "assets/js/160.06e13824.js",
    "revision": "3109bff586e5ca40a8bb261f4006f9d5"
  },
  {
    "url": "assets/js/161.89613a20.js",
    "revision": "8ab3eb60f6e01dbc902971d1cf619abe"
  },
  {
    "url": "assets/js/162.85b0e748.js",
    "revision": "4fef6e5182c408351c4ccff34e743442"
  },
  {
    "url": "assets/js/163.8dfe3b79.js",
    "revision": "81909b127af6d97685d5e772683ffc95"
  },
  {
    "url": "assets/js/164.ba4968d9.js",
    "revision": "e83b4105d9a9e0a1cdd01b07284773ca"
  },
  {
    "url": "assets/js/165.71442f73.js",
    "revision": "2ea5069ef5855b64ad146a630254903b"
  },
  {
    "url": "assets/js/166.f9a900d7.js",
    "revision": "804b12b96d425ac467a0e845333341e6"
  },
  {
    "url": "assets/js/167.25e9a6bb.js",
    "revision": "efe3e72477432ff23882179611aa3ec5"
  },
  {
    "url": "assets/js/168.06ad77e2.js",
    "revision": "43486a0721c5195678b9c4b2d123f751"
  },
  {
    "url": "assets/js/169.8014259f.js",
    "revision": "65883ada027c16579e4f51c557c35a19"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.06f93fe9.js",
    "revision": "b5cce300c7c63fcc96331de18955d2d9"
  },
  {
    "url": "assets/js/171.d294123a.js",
    "revision": "040de057dde49a113edd555adcc06b79"
  },
  {
    "url": "assets/js/172.019970da.js",
    "revision": "16cb1b4a6ea77ca4a17afa60fa160635"
  },
  {
    "url": "assets/js/173.b326516f.js",
    "revision": "70044bbef0c6796728f2d98c9baddecd"
  },
  {
    "url": "assets/js/174.a490e134.js",
    "revision": "6f0718cdab858fd0c453cf6f75377474"
  },
  {
    "url": "assets/js/175.57a5f639.js",
    "revision": "6aa0aa413318c7da834fe5f18bb9f163"
  },
  {
    "url": "assets/js/176.fbf257f2.js",
    "revision": "0ef683f207d7fca9db92163dd6013992"
  },
  {
    "url": "assets/js/177.f2e2876b.js",
    "revision": "f8cf7b7023aac6bd9cb60753793c6a3a"
  },
  {
    "url": "assets/js/178.a5d7a46f.js",
    "revision": "d5e1253b98337e1081a3d38964b09792"
  },
  {
    "url": "assets/js/179.78667a8b.js",
    "revision": "300ffcbccef709a702ceb1d11ef5d721"
  },
  {
    "url": "assets/js/18.af3071f2.js",
    "revision": "6a0756760c525cb08157629dee20c6b8"
  },
  {
    "url": "assets/js/180.af7c4b5d.js",
    "revision": "9bda88f4c9f9d14a37d7416b6113f58c"
  },
  {
    "url": "assets/js/181.7f6028da.js",
    "revision": "bc3a1d327aa22a1753f7ba6cc69c82b4"
  },
  {
    "url": "assets/js/182.1d9d011a.js",
    "revision": "d19778f0ebc46c32c62c05215e294ccf"
  },
  {
    "url": "assets/js/183.02588941.js",
    "revision": "3a965f9a98cab9ece91042c5c58adaa7"
  },
  {
    "url": "assets/js/184.61c12e8d.js",
    "revision": "14f15b47f0de5ccab84b73d9705b4604"
  },
  {
    "url": "assets/js/185.4ee44615.js",
    "revision": "f041633d8d2e6ddc33b1e42a0e53ec41"
  },
  {
    "url": "assets/js/186.7a635172.js",
    "revision": "401017d6c92bb1aa10ee6764ece31e55"
  },
  {
    "url": "assets/js/187.1206ef4d.js",
    "revision": "afb790dda88856a45e3ab27e57f16da5"
  },
  {
    "url": "assets/js/188.2d8377ab.js",
    "revision": "428fbf1ff5fd1cc24665d56f3be0677c"
  },
  {
    "url": "assets/js/189.0e4a673a.js",
    "revision": "be16948a37c7dd66afdfb5c45f078886"
  },
  {
    "url": "assets/js/19.fc6e108a.js",
    "revision": "4482333fb06b3d9dacb4666df58b7bf6"
  },
  {
    "url": "assets/js/190.63c77d7b.js",
    "revision": "6eee98fffc284d36234a90609f689ac1"
  },
  {
    "url": "assets/js/191.dc25c3f7.js",
    "revision": "fa985f05a1b2f4c9218da7328d34a747"
  },
  {
    "url": "assets/js/192.52154e78.js",
    "revision": "16d091c19d8737b4cbfcb69085f5a4e8"
  },
  {
    "url": "assets/js/193.2f0a53ae.js",
    "revision": "0302b6c1db538db023ff5ffb149df260"
  },
  {
    "url": "assets/js/194.b9d2f5ef.js",
    "revision": "7624dc9c919c3e6e6409c7db4b9cab40"
  },
  {
    "url": "assets/js/195.0eb31683.js",
    "revision": "bcfa0160b3bc10df262253fa2ee25d1f"
  },
  {
    "url": "assets/js/196.ab32b668.js",
    "revision": "9af2a1329d2599ba8f0036878a56b4e3"
  },
  {
    "url": "assets/js/197.98b49e1b.js",
    "revision": "8a436b0c9f7a765eaef8ea1093c3d483"
  },
  {
    "url": "assets/js/198.722ea656.js",
    "revision": "7483adebd04e31f29167e695b95cc334"
  },
  {
    "url": "assets/js/199.bd4c38c4.js",
    "revision": "dd69305b05ba23e01b19a5b413345b75"
  },
  {
    "url": "assets/js/2.b4216d11.js",
    "revision": "c91caa0cbb51d4eeb4b47314079d6d6d"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.d280cd17.js",
    "revision": "72c1dee9f3cd4498060702b83fc9d373"
  },
  {
    "url": "assets/js/201.8ae93256.js",
    "revision": "6df206a924afb71a99c4b4a27ca32089"
  },
  {
    "url": "assets/js/202.9e620fee.js",
    "revision": "4f5cc7a1e908bfc21a9843232bd211e4"
  },
  {
    "url": "assets/js/203.1533c930.js",
    "revision": "82dc1c1127654d2256eb6cfc4febce3b"
  },
  {
    "url": "assets/js/204.854a4c8e.js",
    "revision": "5e666c78259091b2088c046d8e939d02"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/23.c92235eb.js",
    "revision": "6c18d72fae9fc129a751d92ea5365496"
  },
  {
    "url": "assets/js/24.aafbb075.js",
    "revision": "f1a668ee840cd12eb4ab7931564ed522"
  },
  {
    "url": "assets/js/25.a14d92ff.js",
    "revision": "83b286adb80677b508f7489abd924c5c"
  },
  {
    "url": "assets/js/26.3937201d.js",
    "revision": "c779f4319654f1033cc3ac0786d8d77a"
  },
  {
    "url": "assets/js/27.109b45f9.js",
    "revision": "8bb3af960c8ae8b213225f63b43e9ac2"
  },
  {
    "url": "assets/js/28.33528d39.js",
    "revision": "e25b796b2326beb9cde308a28204cd2a"
  },
  {
    "url": "assets/js/29.db803b88.js",
    "revision": "d0b5d5c8f4e7ef398bfeec84b100a60a"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.c098d519.js",
    "revision": "73b07d6615c2faaa8d633e75123077cb"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/32.7795063b.js",
    "revision": "1529bd26f73dd5fc1835661f4e8b59f5"
  },
  {
    "url": "assets/js/33.50724876.js",
    "revision": "99006b3d91f1204d9f4e8c72eba6b9e2"
  },
  {
    "url": "assets/js/34.978d0037.js",
    "revision": "a58b6a28003c5f7f834db7154be02363"
  },
  {
    "url": "assets/js/35.ed37c9d2.js",
    "revision": "76157146416110e4373ac3d80b704f82"
  },
  {
    "url": "assets/js/36.7c1c4339.js",
    "revision": "a7af91c9e1036e9b2800336657182b60"
  },
  {
    "url": "assets/js/37.4f9716b7.js",
    "revision": "3a48ae376f078800f796b86ac136fdec"
  },
  {
    "url": "assets/js/38.09848161.js",
    "revision": "8a4947239ca8b1ac424cf549a2f4db32"
  },
  {
    "url": "assets/js/39.527aea6a.js",
    "revision": "0ba22d1000947e24a83be7d668b6282b"
  },
  {
    "url": "assets/js/4.13ace995.js",
    "revision": "7b831806d7411338e9ebc9a65375aacb"
  },
  {
    "url": "assets/js/40.c744cd02.js",
    "revision": "2b76efa3498792fffa6849e1c02fbbee"
  },
  {
    "url": "assets/js/41.0275d84f.js",
    "revision": "c3f62488b6c477560d32db4a2d876a47"
  },
  {
    "url": "assets/js/42.2ba1278b.js",
    "revision": "f9aa36343fc11294c9c6045add58b762"
  },
  {
    "url": "assets/js/43.e1b49821.js",
    "revision": "91d8b0f931bab91da081a5974059ba35"
  },
  {
    "url": "assets/js/44.eb3d7273.js",
    "revision": "e077bfe481cba427f0225bb9caaf98c3"
  },
  {
    "url": "assets/js/45.a0114d1b.js",
    "revision": "f8259c9636feb93b41e826b0ba6d112a"
  },
  {
    "url": "assets/js/46.bee3e556.js",
    "revision": "ae580aa5fd1d52404b147c11be42a00f"
  },
  {
    "url": "assets/js/47.cb093a90.js",
    "revision": "fbb3626601b52fb1045a7a40f39e2cac"
  },
  {
    "url": "assets/js/48.b0a06e3a.js",
    "revision": "dc6c4b62ab8e3e44228db50e7d546dba"
  },
  {
    "url": "assets/js/49.75e0aca7.js",
    "revision": "2048dad59649bbd2575ee6bb5400b942"
  },
  {
    "url": "assets/js/5.d8f051dc.js",
    "revision": "e2bd7a7ced3a9192740000ba1e9180d4"
  },
  {
    "url": "assets/js/50.1920ff74.js",
    "revision": "669a9a25b95e5c44eeb1f76cdeb19045"
  },
  {
    "url": "assets/js/51.3c714e04.js",
    "revision": "ea8c01dcc1d38c487f81b0ba78448922"
  },
  {
    "url": "assets/js/52.504207d5.js",
    "revision": "78618be10ba164a0cdbe56369b347b7e"
  },
  {
    "url": "assets/js/53.5da6b84a.js",
    "revision": "e1fe60d95aec003f0b105c5a934bd020"
  },
  {
    "url": "assets/js/54.42c1d591.js",
    "revision": "ce162b7a1100760ee2d408d8efa01b18"
  },
  {
    "url": "assets/js/55.c3d694f4.js",
    "revision": "9bef0b856ca65230ce25973d4510d727"
  },
  {
    "url": "assets/js/56.18ba67f5.js",
    "revision": "f5ed3fb6cef0ee550ef5ea56628bfaa7"
  },
  {
    "url": "assets/js/57.e68515de.js",
    "revision": "d69ba020892104dae45d010827e7f919"
  },
  {
    "url": "assets/js/58.245ba79d.js",
    "revision": "edbe17f2e4c60955938f7b755fd1a1cf"
  },
  {
    "url": "assets/js/59.b01fea4e.js",
    "revision": "bbd2bd78068c8d2dbfa2826c18fdee09"
  },
  {
    "url": "assets/js/60.7b7b0562.js",
    "revision": "c07b4c752af536ba6189ef8c4cc9b4e2"
  },
  {
    "url": "assets/js/61.48ff03a9.js",
    "revision": "8924d54737c3f09df6019a731be123f8"
  },
  {
    "url": "assets/js/62.4c15f7d8.js",
    "revision": "f1b48c5d988e9cae364af287b2ab0d16"
  },
  {
    "url": "assets/js/63.af5fd1d1.js",
    "revision": "0c914eb3f7725fc19538aed4ce592dbe"
  },
  {
    "url": "assets/js/64.5fbb3850.js",
    "revision": "044449a74b9061b9548a5520264c7652"
  },
  {
    "url": "assets/js/65.f38e4c1d.js",
    "revision": "84804c012ff27a65b46bb683c294d6a3"
  },
  {
    "url": "assets/js/66.f2758b05.js",
    "revision": "71e81fe2844731a210e414b1fd222731"
  },
  {
    "url": "assets/js/67.e4d5d3d6.js",
    "revision": "a056e811071a91374ed2c6fe9541dae7"
  },
  {
    "url": "assets/js/68.02e0931c.js",
    "revision": "5e5e19bba9540be2dddbfecb93aaa06d"
  },
  {
    "url": "assets/js/69.48d11a23.js",
    "revision": "344e80d25b34d4128dfe54bedb32c6a1"
  },
  {
    "url": "assets/js/70.60fd5252.js",
    "revision": "6ee0c66a81eb0ae407506702d0129ae4"
  },
  {
    "url": "assets/js/71.02714f53.js",
    "revision": "ebbb0e80ecca0a832a7b7840f502e6e4"
  },
  {
    "url": "assets/js/72.6862f4c4.js",
    "revision": "c04d928d34098411d3c683c13f2e957e"
  },
  {
    "url": "assets/js/73.98f81499.js",
    "revision": "cde64ac709aea6ade364ecbd57df58d6"
  },
  {
    "url": "assets/js/74.09578aa3.js",
    "revision": "ba64127656a5b4163a1d3dd9c07c7a82"
  },
  {
    "url": "assets/js/75.4ceb5309.js",
    "revision": "907433b003d5e3078e7061592f82cc5d"
  },
  {
    "url": "assets/js/76.b21609d5.js",
    "revision": "fcac2da27b014a691cfbc12803691846"
  },
  {
    "url": "assets/js/77.d9eddc66.js",
    "revision": "a90b0074a0659c7f7f405309ce747edf"
  },
  {
    "url": "assets/js/78.6ee4602a.js",
    "revision": "efc43d97d665509c4756c3afb3c5ee7f"
  },
  {
    "url": "assets/js/79.2b8d1c14.js",
    "revision": "fc48b902080d34e7510836b938439bcc"
  },
  {
    "url": "assets/js/8.e217d416.js",
    "revision": "0ccc49133f7a26693890c62d634b41ed"
  },
  {
    "url": "assets/js/80.3d745235.js",
    "revision": "38b5e9ed51f63e59cf258a713066c8b3"
  },
  {
    "url": "assets/js/81.79a88305.js",
    "revision": "8fd72892e08d030572f645e69bfd700e"
  },
  {
    "url": "assets/js/82.add95bf4.js",
    "revision": "d99b0e719777213ff8a4bcbcd519a834"
  },
  {
    "url": "assets/js/83.5cfbd502.js",
    "revision": "af9cf7181d739b3ed2158cc3e87689e1"
  },
  {
    "url": "assets/js/84.eeb10ca4.js",
    "revision": "af4bb14e31b990e9b5974782ace3fd37"
  },
  {
    "url": "assets/js/85.e4602efe.js",
    "revision": "a7503c75085df391494dce5d8a2f883d"
  },
  {
    "url": "assets/js/86.022aee2f.js",
    "revision": "48cc99d138acfc63c685163962e2402c"
  },
  {
    "url": "assets/js/87.9d4605e7.js",
    "revision": "81f2a6670e20e66b5df67faab076da6e"
  },
  {
    "url": "assets/js/88.f30cd4b0.js",
    "revision": "2d8d5de7d52eec589225af24895981fd"
  },
  {
    "url": "assets/js/89.655e097a.js",
    "revision": "79920423c36b936790019f7e1bd78b37"
  },
  {
    "url": "assets/js/9.53672626.js",
    "revision": "102776cc90f3d3d2c28c2b23ed475951"
  },
  {
    "url": "assets/js/90.c175676c.js",
    "revision": "7c009a9ab2821dda689e1fc95048755b"
  },
  {
    "url": "assets/js/91.14684f2d.js",
    "revision": "9a00d0e88e7ece64badcadca1296575a"
  },
  {
    "url": "assets/js/92.d137c818.js",
    "revision": "4086e7bdaf7ae772b0d3c62a47d1789b"
  },
  {
    "url": "assets/js/93.3ad270a0.js",
    "revision": "3f8692a7feb1154e0f80d8c3e23ffea4"
  },
  {
    "url": "assets/js/94.018cf00d.js",
    "revision": "4d03c6883cfc014658ac13937c033735"
  },
  {
    "url": "assets/js/95.cc4aa7b6.js",
    "revision": "e212e0b616da2ad6f9b65fc1a97aa0db"
  },
  {
    "url": "assets/js/96.f9c4098c.js",
    "revision": "b8af25bed34f0776b0d9852874afe4cc"
  },
  {
    "url": "assets/js/97.dfa9e15e.js",
    "revision": "7536ce6616f0e9be33d888a7b65d1be4"
  },
  {
    "url": "assets/js/98.62a198c7.js",
    "revision": "55672bb7a916b6679cd84d0f005291bc"
  },
  {
    "url": "assets/js/99.c7d1be63.js",
    "revision": "a325e4ac87e0767f173f1b75a14a6c70"
  },
  {
    "url": "assets/js/app.2ab515ca.js",
    "revision": "a59b5cc01d3e3c90ec3d2879175f51fa"
  },
  {
    "url": "assets/js/vendors~docsearch.7730cb75.js",
    "revision": "ef37085eea030bf9b8cdc23f7ddb4c3d"
  },
  {
    "url": "index.html",
    "revision": "d0f91b3bb2ebf96c54c9d162034ed516"
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

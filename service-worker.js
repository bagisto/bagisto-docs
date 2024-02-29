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
    "revision": "8fb8e11844d862774cc9a5710adb36ac"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "39fe464d09afafe36fae53bea860de9e"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "a9260b86a28b782c1fbfe8f275421d74"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "d4c73897b1246bc105fd7f5b3845ac28"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "5df56e100ae2588331a16005bb5f9e8b"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "abbbbdb6d9db4ec6c070989a16ec980a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "8ca2a3262d0a90b1f02fca71979e5047"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "607d82d9a28c4dae73baa3fdf86ec765"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "6c8ae55edcfe10a6842a4660ec2e1abc"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "2b4c4a18d6094e92decd30be67eb5199"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "a94544811c3c33a4362312887c798c36"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "43b0a2a56d1c5464ca71cdb00051478d"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "2b70d443553d4dc1fcd11eb2ed1642b6"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "ebf0f004461285e7a38d7359d5f56a85"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "30b90265ee91804288bf370b4a4299c3"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "aa9f529cd439a1bc37233d99bfacc1a9"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "e97ea44365d9d0499f9fdb4fd1c6040e"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "890cb73a294fb8bb8839dc3a88727739"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "6df64378466539bd304df631350ebd1a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "21e7e8d7839be4bcd86875efad788af7"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "398e8b350b6a5aa21524c13b48189e82"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "85ed4bf47321073a718f7be3714fdabf"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "d9552a3f22cf14432313de3b89a05c42"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "fc74e29b484750afb13b0d1c9ca7e1c6"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "fb1dfef5738d5b6ba1c97d78318f015c"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "44f1d1de26d4952fced4fb1f9b3ab0f5"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "1758fa1d03930d4266c24a6e6c40ed82"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "6c6b7261531660a7a9a558f3534574e3"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "ed2832cf92a59f26e1299a8e56ae57c8"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "a59a42636a4a663e920e6aabeb7e8942"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "d3043a7bab7dfe0b3e12a8a1bf32a9ce"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "c782853cc1de89eed40e5bca8c9973a0"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "60cd3a85ea10a2194eb575fb2890352e"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "92d274000c396ccad45b047df17c8489"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "4de353453e40c395407aff7100785ef5"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "2d3a90afbcdcadcfdcfcebcb54e7cc79"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "24905197b453c620b7b44db0422f4341"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "96e1ba2ba1c6700f8434bdfe0ab86921"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "3bef0d33c3c8002a26629e40dce3ec08"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "398fefd667b951431bee2f80df60377a"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "0643921498af330606db2cf19cbc0ad5"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "46fc3a0cc08ec9d4a36ec76b4641c482"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "1c82f01bb12b23606aa8ebe684d603d8"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "b8d2e7feab45d870fc3a7acc4de674ea"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "542937f666cf3352b05e4c87090158a9"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "38996c1ef07b563ea6cca582eb1e90de"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "1511a43b62c5c1d1ab5304c5c1411c02"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "4adb8e4574654e9cee061533b929606a"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "8b5ea16958b48a047ad63c657388c521"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "e9f62e86640763aa88626387e7d37871"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "b2d04588e2731c1a48afc502429fc74b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "141b599e13fd22fbc7dddb6ec035bfb5"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "a88d924021b5472dd84825f53fd0c84e"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0d1424270876901eb1b7ba4574e39079"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "632d0ed638ec4ff6988575f660f2cc6d"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "dff5423dfb2b5be0dbb9caf9691f5ca8"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "21be06f70441211e0aefec2cfee48cae"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cd3218a1c8e289eb073109c31b1fd16d"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d3bbc519ac50ad62cc2215bfae0259b0"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "4edecc850bb16833bffc34e4cdeca921"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "db9f45e5714d000cdb02e0474e65d59e"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "fc3727f161a20f7b692c52e3281de02a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "3d8a09fdc6dfd48a98ed66797203ccd6"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "5d162c7634ccd3269098941bb8606c46"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "42efc77cd5c808745f0f23153be12f32"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "fecf5b0681d0db370c8664fc96230bee"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "c978bf2433ac1943904d5b0629210a95"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8d9d69bafc2925c8fb7abc2f5cf0af41"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "a9e83226682e7e2e4191a9ed78fc5918"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "d27552fba376449c28e2cd5342b1943c"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "46723c57320fee920dc0561d4e6dbc51"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "e6adc52a911a7937635388ceca66dbad"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "4d2278f649808f078e87fd1f1b7217af"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8ad43a11e0608f15a985abcf3136e7b5"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "24ada469029e361d6b175e73570b2f0b"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "029b7b0d6727b7a5bc1466425c7d570d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "5d4c9ffa24b2b983db334d54b6ad2e57"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "93afb93bd2a8889e2392d78843f4b5f9"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "8173315b49d45be51802f26251f70796"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "7f306c51d821958a06e8daaa982f01da"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "35abb73fae503a60f8678f1b041c7306"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ace67ca945213bc093d6752320f281a2"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "2ccd3c592aac3632d6bf3c842bb384f8"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "01cd80725d6d945f44144facdd611fc8"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "2a4aec137a9d57b1564802fa736cd4b2"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "350678bfe054ffd52fda9a1989f749b0"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "c7514eb6b4b3726c26ca5c73e991acdf"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "93a67c87f520923b2a5424f442a3b899"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "4be3d51f5a78ee8274a7fec0f2d4e185"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "66257c935d801a2b9e97c3178869758e"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "9c535aa0cd2196f47c7d8bf0b6ae0231"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c960372ead838ac107723b2d52f18147"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "bf79830d8f95775566d4edb75543af1b"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "1f4ecbc6dc61187b1377f73e878213a4"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "73f5d65d6d8139183c433db0dad3888f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "67cddbc6d62b3a10576d47858e9c0563"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "2c4ad63d67c43cf2f959672b61d602ef"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "77d6c10ec1a29b0ff08d83a92413c09e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "1273b31732444549a50aff7f2804c78a"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "2017b4eb2a64dc022cbd2b06665e23a4"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f3c3701939d3293e9d316a05e4d9dd9e"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "ca9b224d03907a39da0426cb1a35d709"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "9baa34130dcdc297a28e1068d423b0b6"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "a6fcfa4a8b2a9a5c01e3c0a21155b941"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "acb58a02578119e029a49c6da7616654"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "3de8b79278966bb072d7182314c2c855"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "bf0c9e613a84a02a24a661ce9f26b408"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "a6de24bda21fa4ea2a46065feaabbef7"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "4a94fc44f6190df88485187f6c1f329e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "0ca08876c640468a5dfe29e94ce23e8f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "2bca53f05962595eb63a077efab19530"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "a7f5691d5f8debaa4c24d769da61dc2f"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "0bb1d292e0b012dc111c8c127184d475"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "efa4e323c435af58c7067699409dad27"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "89fe5510733a102600e3e6b72e786587"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ae038674e28259ec2d76bb57088b1533"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9b18c50c1368a9babe5592c88efd8ff5"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "c3715fb61007baef5741f9690851efa7"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "bfa8821e91c4cabacfdc2eb26df64755"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "5749e6d4fc0ed55c6380b7b27a7a5906"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "c58ee277db452400e993984d506c358e"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "d2f508b6cdcf999a0c75290b49b3b7fe"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "9129175b13955b81280a476fb8265da1"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "740849623fc9c9afea31beb92b362628"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "2b1b7e5e1333489c4a637a46a93997c5"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "59f381b2ae701fd2e073a74ad0b75eab"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "e885b48bd72ddadce8c335981ae50e25"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "67f821de9863a4bd03ac9730124081f1"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "557bac76d676fe3ccfe028ae60b0e696"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "16b7818dfaebd63c2f65e03073bda1e3"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "1ae29eb3bc411c4f385dffe8f0d7814b"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "7cdceb9bd30cfa8f506e6a5a015cbede"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "4b17f313a6c065543b42bc76011b5753"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "99bb2d107c819fcbf122306164b15076"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "b7cde7b9322ecd2aa9ddc1d168b205ba"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "7ed1e0b1109d716a727177d3b3841925"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "2042d7fefb5d509c37f485fff1411304"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "b6a4697cfb7b59a72804fbafc73b6d0b"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "c65eb842b4603113efc75cc2d1dd9889"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "0f9e563cfd2f291a419ea65e5597620e"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "4567f7c1a08d0eeab7c1af532eadc4ff"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "b2984f9e56ec742845ef409c1132a17b"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "7ca2e402da10358f6ff9e4451ae03337"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "cd42a9fe5d48c5f8684f8d055d245a63"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "29b6a08c32973ca1fd60a0cbea14eff1"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "545229ead4cd7e392d2c591512871c31"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "0f5385dc99a2e916e93781bb3e19882c"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "d8a70158415ee7f2d227f1b30d4f2fef"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "c226bf6ce7a3eba24cecc2c95870aa70"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "f9838857b953c71043e560c0e4ce5a28"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "8fbb1174c38cdf1eb8007c90a7263e90"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "2e8ecf49edc4d38f800a7ff2aca4b6f3"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "aa74928e6a0e24cb0c1891d3cb7daa73"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "590cf5483e69675073777b217a560562"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "939fa586f5dedf74ebc4660ef50e7716"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "2abea53d62067403de081d216546abe9"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "2e154f78143bf8779de74d709a53c0e1"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "189b212515aa463d41fd15f2d042af65"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "68c4875999e08b501928cf2064b7ae83"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "0aca7de4f5636bcaea217de35fb5b5e3"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "112eac845e63811225d5d8264f03b90d"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "d91c22aebc2518fc2679cf54d154286e"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "ec64ccc82f7211778fca75661ff21eed"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "34313ca76e1cda4dbc7ca772d28786ff"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "66e4979b3675340ca38c0a5a081b2c1f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "47dd0e8badb6e08a9ee2865e2cbce27d"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "f9458c7c03358c38a840dbd10cc7525c"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "39e4080991ad450e812f98350eaaac27"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "9fd4f99b1c0741b93c74508d21fa4962"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "d2cf40f558049aa70506c766740d3de3"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "2558d5eea51e4d8da1ca9fc733491c88"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "6f73884455c58d91a3ad73bfdb5b1585"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "ee5129bc708999acbafdac3647d578c0"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d9dd8c6010ab69da94e49cf5d4a6ea52"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "94516894531078b1d6f72750f65e8e27"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "63591a4c1df9e8bbbc5fb3dbe42059fb"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "bc2b0b854a706e8791212c55401dbf00"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "20b812eed7d90b30fb48c0451e215d55"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "eb93d19df6af25f6d2b109cc23beb482"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "82f908f715c10cf80d39cc2366fd2a6c"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "ee5a660fa9d9ce0b4351745bfa1ba4bb"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "6aefe373f4b71eae79f75aa266a5c54a"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "a91f986d7825746bf42d23479611e16a"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "83ecbd34b143760046590fa984be9835"
  },
  {
    "url": "404.html",
    "revision": "ef1d2e8cf5b4f523a34a231322780f68"
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
    "url": "assets/js/100.3242cd21.js",
    "revision": "40a0dd0d8b5235b54f1cb883f70ae7c7"
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
    "url": "assets/js/103.a1d77007.js",
    "revision": "55061b68eb80ef106d87a1162172afbd"
  },
  {
    "url": "assets/js/104.6cc6e7fe.js",
    "revision": "d4c994eb29684220f00c91500fede588"
  },
  {
    "url": "assets/js/105.e7322bd3.js",
    "revision": "7c31e056772ffcb965a6301e2fd9c71d"
  },
  {
    "url": "assets/js/106.f771c04c.js",
    "revision": "2e17356c1b3f0a6e6604df316415f29d"
  },
  {
    "url": "assets/js/107.3e0f469a.js",
    "revision": "da09c14cedf19958dcec123dcbc64820"
  },
  {
    "url": "assets/js/108.26b2acf9.js",
    "revision": "b861c7446a6e3796d6794e1b61bc007e"
  },
  {
    "url": "assets/js/109.0406bfbd.js",
    "revision": "9c1d21af4848e13d8a965a6ee6b88239"
  },
  {
    "url": "assets/js/11.17fb33c1.js",
    "revision": "d3ae54a1fd80ef43cf93ade15b38fd4b"
  },
  {
    "url": "assets/js/110.df1a5bf8.js",
    "revision": "f2e48977499f312cdfd2fc4c1fabac49"
  },
  {
    "url": "assets/js/111.6767c025.js",
    "revision": "638a45cbb8f86e68831a87b1d148b248"
  },
  {
    "url": "assets/js/112.ca3f152f.js",
    "revision": "adac14a0920299ed6b2c3ad158fb208c"
  },
  {
    "url": "assets/js/113.9bb607e7.js",
    "revision": "b7661985da6ad984be19785cfc98a548"
  },
  {
    "url": "assets/js/114.a5ea4b8e.js",
    "revision": "fad8dd048a68de2fe35b9f526754ee3a"
  },
  {
    "url": "assets/js/115.386fc380.js",
    "revision": "70a9079e1425e93d63f08484e6b0c6d4"
  },
  {
    "url": "assets/js/116.2b8679ca.js",
    "revision": "9d1e089d06b89dbc5eb97692bef18a96"
  },
  {
    "url": "assets/js/117.e34852ac.js",
    "revision": "03b2a9a435c10f258607efcfb78fa898"
  },
  {
    "url": "assets/js/118.cc6fd9a7.js",
    "revision": "a4c352934b3a74beac05b36edab8d3a9"
  },
  {
    "url": "assets/js/119.8378edde.js",
    "revision": "9903cfd1916c59a2f95dcf3517e06bc9"
  },
  {
    "url": "assets/js/12.a46ae2de.js",
    "revision": "06af9cce6fa031f83866bde8b6ffeb5f"
  },
  {
    "url": "assets/js/120.53c4b8aa.js",
    "revision": "4085da4570ec1efc36044a389f08733e"
  },
  {
    "url": "assets/js/121.b8930f63.js",
    "revision": "1c07bd56bb30f65e4f7f146d41222ab7"
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
    "url": "assets/js/125.670d6056.js",
    "revision": "0b3f4cfcd93336d8e33522df7f7592b9"
  },
  {
    "url": "assets/js/126.c3de45c8.js",
    "revision": "00e6718ee415a481754d4ef53a86701b"
  },
  {
    "url": "assets/js/127.90b4bfa8.js",
    "revision": "304dfd69c1dcec2807b93d6652571333"
  },
  {
    "url": "assets/js/128.d64bbde2.js",
    "revision": "0a651f57b2eb998665a1dc64e41bd6a9"
  },
  {
    "url": "assets/js/129.4dfd121f.js",
    "revision": "ef17714f7560cd8fc734fc73a3930aaa"
  },
  {
    "url": "assets/js/13.473d3459.js",
    "revision": "6867c5e79b5f670569a9553314887b2e"
  },
  {
    "url": "assets/js/130.302161b5.js",
    "revision": "fc87e7c08a796d0f012955434ff1528f"
  },
  {
    "url": "assets/js/131.31c0e30b.js",
    "revision": "90a319d1051e1dc49682365821bc8813"
  },
  {
    "url": "assets/js/132.cef9d393.js",
    "revision": "e030fd779d656ed301cf072d38420a06"
  },
  {
    "url": "assets/js/133.5976e079.js",
    "revision": "f83793ff1f51dc6b701ee025ec67dfd7"
  },
  {
    "url": "assets/js/134.f12dbd03.js",
    "revision": "599e8dd8831ef3ee2a3013a47dfb894f"
  },
  {
    "url": "assets/js/135.31cdbfac.js",
    "revision": "aa14782ab8a938eceff7946f39f6c948"
  },
  {
    "url": "assets/js/136.7107a1b2.js",
    "revision": "c25348ccdd1afb8ff8769fc396645d05"
  },
  {
    "url": "assets/js/137.b64d304f.js",
    "revision": "f2ef469a7101ae72753f01a0e7055f38"
  },
  {
    "url": "assets/js/138.7a45da48.js",
    "revision": "f323380c3198976753b24f7bfa8fed88"
  },
  {
    "url": "assets/js/139.ce8ead6e.js",
    "revision": "5e687d85d0253a741daa5307545e58e7"
  },
  {
    "url": "assets/js/14.a34a008c.js",
    "revision": "4db68f5740c5f40f3e31bcd90b22baf8"
  },
  {
    "url": "assets/js/140.42c47a27.js",
    "revision": "80f882e3064fce92a4310b9d9e6b981f"
  },
  {
    "url": "assets/js/141.6f62d37c.js",
    "revision": "1f5e92b1d5c25af080efcf6ef360a9b5"
  },
  {
    "url": "assets/js/142.2383d919.js",
    "revision": "85e25196521335dff404cd9ff575e716"
  },
  {
    "url": "assets/js/143.9278a0bc.js",
    "revision": "3bb017f9cc50348e5216ad82ebd93f4b"
  },
  {
    "url": "assets/js/144.aeeb346e.js",
    "revision": "7648b8edd20c3af29e7fd932ada31ee2"
  },
  {
    "url": "assets/js/145.733bbed1.js",
    "revision": "2ae8e1d09eafc56b0171e720eb074118"
  },
  {
    "url": "assets/js/146.07998e6d.js",
    "revision": "699689e0952895fed4a1a35823e18adf"
  },
  {
    "url": "assets/js/147.ac51778f.js",
    "revision": "37a38f95493be1a344b6a09e0f48c397"
  },
  {
    "url": "assets/js/148.2ad6f67d.js",
    "revision": "71e8b3ad83f177e90f818e230b6a8532"
  },
  {
    "url": "assets/js/149.8d6fb79e.js",
    "revision": "80319603da87dc59c022ac65dd294aff"
  },
  {
    "url": "assets/js/15.9a7f9e68.js",
    "revision": "9ad5e3b504651760f54562a1f424720b"
  },
  {
    "url": "assets/js/150.a152f19d.js",
    "revision": "d2964509c57b092a38e917e27fa4983e"
  },
  {
    "url": "assets/js/151.4a4d5826.js",
    "revision": "4a450f0c846d908a877f09808537803f"
  },
  {
    "url": "assets/js/152.72854f7b.js",
    "revision": "a1b48dc225a60ac5a74288b7eaa328b3"
  },
  {
    "url": "assets/js/153.9e613354.js",
    "revision": "2333001a6fb578450d12199b219c9a16"
  },
  {
    "url": "assets/js/154.b72c4115.js",
    "revision": "69118009e7c2943bcce7723a4bdcd8fd"
  },
  {
    "url": "assets/js/155.07522de1.js",
    "revision": "ec3644e72cf70b79d790a5c754e1bd27"
  },
  {
    "url": "assets/js/156.099f3737.js",
    "revision": "e0ecf621e313f415e71d96be7770a420"
  },
  {
    "url": "assets/js/157.257a744e.js",
    "revision": "b456ee409ee9f05e97a327756df321a5"
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
    "url": "assets/js/16.9aaf896f.js",
    "revision": "cd6bbfbad32270d82fb1afdcf164bac2"
  },
  {
    "url": "assets/js/160.95b77be3.js",
    "revision": "49dc97fe3e3ea1fa494fb8e0edae6464"
  },
  {
    "url": "assets/js/161.e8891402.js",
    "revision": "f5f88568d341365f823094cbd86f60ca"
  },
  {
    "url": "assets/js/162.04f6be0a.js",
    "revision": "58d05296dc12b192d62eeb832112edd4"
  },
  {
    "url": "assets/js/163.5994fc32.js",
    "revision": "1e0706831a30f781c5590704ad707fc0"
  },
  {
    "url": "assets/js/164.c24d5c9f.js",
    "revision": "ff63fec955a940c69923b96ea6c213e0"
  },
  {
    "url": "assets/js/165.dee23832.js",
    "revision": "277507f490fe1283997a7f3eda09ca8a"
  },
  {
    "url": "assets/js/166.9f9c2cfd.js",
    "revision": "39687da9be90df2213fc41de645f6333"
  },
  {
    "url": "assets/js/167.897ff868.js",
    "revision": "b76511dabce8428ecb057b64bd5fa735"
  },
  {
    "url": "assets/js/168.32ffaf48.js",
    "revision": "8032cb82631cf1a69d599003d7c702e8"
  },
  {
    "url": "assets/js/169.cced0bed.js",
    "revision": "d62ce35caea27227ae2cb45fd212b83c"
  },
  {
    "url": "assets/js/17.94441c15.js",
    "revision": "2d1dc702128212960525f0a80bcc07c3"
  },
  {
    "url": "assets/js/170.88f8429d.js",
    "revision": "e307a868881dbc99a6085098a6947c5a"
  },
  {
    "url": "assets/js/171.e99187b2.js",
    "revision": "3805e5d9bed30d8ea8b5d9464dd0954b"
  },
  {
    "url": "assets/js/172.7541f9c4.js",
    "revision": "bad95a6d28b6fb12744ad8fc82ce3280"
  },
  {
    "url": "assets/js/173.58dbdcaf.js",
    "revision": "1fe9c8d66d397f2f5630540eee9fe975"
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
    "url": "assets/js/176.7d0730dd.js",
    "revision": "98aee32a16d017abef931880e8eab951"
  },
  {
    "url": "assets/js/177.7d4f5785.js",
    "revision": "a3593ba535f21b7adc0dfc60158d5275"
  },
  {
    "url": "assets/js/178.a6cc1a2a.js",
    "revision": "2677b6ebffdaf10d2951418f3bfc893b"
  },
  {
    "url": "assets/js/179.d3ae8deb.js",
    "revision": "c5c50c5b9ae2805c37d53c229d33aae6"
  },
  {
    "url": "assets/js/18.71d2cd67.js",
    "revision": "631c9de761d4ee04b93593831baa824b"
  },
  {
    "url": "assets/js/180.05276fa5.js",
    "revision": "a110b0be97dcd56167437d0899650ec6"
  },
  {
    "url": "assets/js/181.1ab194d8.js",
    "revision": "ea9eb1c8bd98ff240464accf20f48ed0"
  },
  {
    "url": "assets/js/182.f2b801b1.js",
    "revision": "360ca1efa89014ee698f46da3ec20a08"
  },
  {
    "url": "assets/js/183.0c6d640d.js",
    "revision": "0946198b483547126e9eccd8beef23c7"
  },
  {
    "url": "assets/js/184.3289e1cc.js",
    "revision": "d9a7167ccae25bd3aee5e2525eadd850"
  },
  {
    "url": "assets/js/185.d01816f0.js",
    "revision": "9eec0473d3f7b6e156358349eda2bfa1"
  },
  {
    "url": "assets/js/186.8e94f63c.js",
    "revision": "69e6e8b0b9384e4bf0d81bb1255008a4"
  },
  {
    "url": "assets/js/187.8024956c.js",
    "revision": "67bb733277dc2fcb352c60cb59239128"
  },
  {
    "url": "assets/js/188.85adc76c.js",
    "revision": "52deec4d6c55fac7b83d8adef6be84bf"
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
    "url": "assets/js/20.cfbc8ba4.js",
    "revision": "6b95f8833e7fcb5e887ba9cad3384aef"
  },
  {
    "url": "assets/js/21.27486584.js",
    "revision": "20abc1056945a25d0cbc5d44e4aea501"
  },
  {
    "url": "assets/js/22.7c1a1ab6.js",
    "revision": "7d096ad7276b7e9bee035ad6edd5d7b2"
  },
  {
    "url": "assets/js/23.4c8b3d64.js",
    "revision": "15232dc3e714673dae9b6b9bdf284d03"
  },
  {
    "url": "assets/js/24.05064d3b.js",
    "revision": "e3476f8c6058b937c9727c3b6453db53"
  },
  {
    "url": "assets/js/25.11796cd7.js",
    "revision": "147da05174c5cc5d1bdcc3eaaefa9b28"
  },
  {
    "url": "assets/js/26.aa8244f8.js",
    "revision": "a554ca49c4e70a39b116bbf8516e94a1"
  },
  {
    "url": "assets/js/27.ed67330d.js",
    "revision": "4006cb0388e3bcbc93b3240a32be5b0f"
  },
  {
    "url": "assets/js/28.4b648d96.js",
    "revision": "5fd75066c899e035bff7f8eb16d8965f"
  },
  {
    "url": "assets/js/29.94276ba0.js",
    "revision": "4a71e902ee44b2bad822d64726d4848c"
  },
  {
    "url": "assets/js/3.b67cbe68.js",
    "revision": "7fe7f6c98de61f9b58013385385fe0ba"
  },
  {
    "url": "assets/js/30.7221037c.js",
    "revision": "1c20d3a796d4eba3daf7925cc4934d72"
  },
  {
    "url": "assets/js/31.3867b6dc.js",
    "revision": "c39f0cabf841ee0f1f8dbd2a267b78d7"
  },
  {
    "url": "assets/js/32.f1610d2f.js",
    "revision": "9be60acd5a2b5724ffb1de161bee4434"
  },
  {
    "url": "assets/js/33.236a9cdc.js",
    "revision": "e4f5f38a5ebd447f1ad7b40b4efa8034"
  },
  {
    "url": "assets/js/34.e87b6321.js",
    "revision": "329e684a33a216668748021d50dbede6"
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
    "url": "assets/js/37.4e0c4d3b.js",
    "revision": "d0cdaec7c1891694a20b9e16369e8c1b"
  },
  {
    "url": "assets/js/38.8506db21.js",
    "revision": "acbee997224cac9453685246152b17f7"
  },
  {
    "url": "assets/js/39.9b6a1a01.js",
    "revision": "8802500a34d35d8fe37e8650be8aec9a"
  },
  {
    "url": "assets/js/4.5b6bb610.js",
    "revision": "66444ead3aeb6d5dccdb8de4cb3d77e7"
  },
  {
    "url": "assets/js/40.4b7eb587.js",
    "revision": "42a693b468c987bb6061c5d71d6f85b9"
  },
  {
    "url": "assets/js/41.078bf5dd.js",
    "revision": "1cbbf1b39e20a196f74f9c4ec5569e91"
  },
  {
    "url": "assets/js/42.f6e3a448.js",
    "revision": "38d9ba5fe2f3ed8053929c33f8e9c5b4"
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
    "url": "assets/js/45.431fe3dc.js",
    "revision": "da4c99236b4c19b6df335b38da1d10a2"
  },
  {
    "url": "assets/js/46.fa442179.js",
    "revision": "af01b490ea001091cf89bd6fb814e2c4"
  },
  {
    "url": "assets/js/47.0ee5a201.js",
    "revision": "0ac3b6b39bc14793b08b86e1e581aad0"
  },
  {
    "url": "assets/js/48.0a64f85a.js",
    "revision": "7a01576ff990b833601f9bf65c210080"
  },
  {
    "url": "assets/js/49.2ae1094d.js",
    "revision": "395bf88b39988684804a3b49da895c6f"
  },
  {
    "url": "assets/js/5.36c55e86.js",
    "revision": "88fb9e64e339313d750cfca23e9bfeec"
  },
  {
    "url": "assets/js/50.0a203e95.js",
    "revision": "2ca17ff84befe01bc7118a1e9efd6c51"
  },
  {
    "url": "assets/js/51.ff76aed3.js",
    "revision": "67657181b1aeada49a5eff97e19d6857"
  },
  {
    "url": "assets/js/52.d2b2f9e2.js",
    "revision": "f156d7423a86f482e0807e8632ce7fd0"
  },
  {
    "url": "assets/js/53.64753fc1.js",
    "revision": "e7a7dd396291e38899cb16b1d41541e4"
  },
  {
    "url": "assets/js/54.ad3bee3f.js",
    "revision": "dea66e8c745f628dd43d8893d2b84ae2"
  },
  {
    "url": "assets/js/55.87400960.js",
    "revision": "26e37898058f26b5b78928aa8abe061b"
  },
  {
    "url": "assets/js/56.53acdbff.js",
    "revision": "c1b244cd7ae035ecbdf3ee1a36e89a86"
  },
  {
    "url": "assets/js/57.04a15b16.js",
    "revision": "209b509e589779852f1e040b8e4a4459"
  },
  {
    "url": "assets/js/58.90ecb06e.js",
    "revision": "6947d6e619c7159777cf6b2fc9aa069c"
  },
  {
    "url": "assets/js/59.b0f2d238.js",
    "revision": "44ad6bb4915e2e5d95237f5c7bf9ec77"
  },
  {
    "url": "assets/js/6.4de8e8f0.js",
    "revision": "5090f8784688189f759040c9c231e701"
  },
  {
    "url": "assets/js/60.d1ee0ee4.js",
    "revision": "ac22fbcc53ab1f8325c3c779d4f75064"
  },
  {
    "url": "assets/js/61.9270cfb3.js",
    "revision": "600f9fd7ba939193d3c22f6b1021c64d"
  },
  {
    "url": "assets/js/62.f81a3129.js",
    "revision": "d3d6d6f3a46c96289b0ae0dc187005ab"
  },
  {
    "url": "assets/js/63.85248506.js",
    "revision": "97640a422c07f1d7acf43e2728a00240"
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
    "url": "assets/js/68.0bcab92d.js",
    "revision": "4ff1f634371fde6db31de4ec5ad0154f"
  },
  {
    "url": "assets/js/69.2954c71a.js",
    "revision": "193ea5633e8a9ce3437b0b144875eacd"
  },
  {
    "url": "assets/js/7.8874c1fc.js",
    "revision": "f9fd318cf017f6998fd50cfa1f147a48"
  },
  {
    "url": "assets/js/70.f8c2faf4.js",
    "revision": "db95c146bc6e1b553b13994328d1004d"
  },
  {
    "url": "assets/js/71.959df5e3.js",
    "revision": "35f4a02e60bcf5a9ffb51d92eaa4f89a"
  },
  {
    "url": "assets/js/72.c9ab4024.js",
    "revision": "5dbb3ae2c9bdf266067a30c12b772ab7"
  },
  {
    "url": "assets/js/73.dd8069f3.js",
    "revision": "12f3e7ebaf2c42cd5b3f56cc39d3477e"
  },
  {
    "url": "assets/js/74.86f12f12.js",
    "revision": "25731ed7e520ae03a88196bef0192629"
  },
  {
    "url": "assets/js/75.670c21f6.js",
    "revision": "b665a831f058e3feeb7e2c7c76fb6879"
  },
  {
    "url": "assets/js/76.b9a639d6.js",
    "revision": "d6a23fc54e649882bf72eb9249782e81"
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
    "url": "assets/js/81.eb6d17a0.js",
    "revision": "b6351dc6e7c87ec814f2d3174756ba3f"
  },
  {
    "url": "assets/js/82.74d827ef.js",
    "revision": "58f8016c0ba22ef8dd5ab9da91b296a3"
  },
  {
    "url": "assets/js/83.f2a5923f.js",
    "revision": "974c678530df9e8a25faf0c77f925b23"
  },
  {
    "url": "assets/js/84.d85dcb46.js",
    "revision": "3a607c2a2db12739e9b0d36ddebecfc5"
  },
  {
    "url": "assets/js/85.dfd99d85.js",
    "revision": "b0549c0ba2561fe44ea24bc3cec76cd5"
  },
  {
    "url": "assets/js/86.55eb5c5a.js",
    "revision": "9e8b01f4ff7d463e072c6908a5fcb643"
  },
  {
    "url": "assets/js/87.03db2424.js",
    "revision": "534966799d5fa21406229740de529263"
  },
  {
    "url": "assets/js/88.670f0df6.js",
    "revision": "e6db5131d51d2cd722cd357264d00270"
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
    "url": "assets/js/93.29065bc3.js",
    "revision": "3f234cb50186162fbd2fe76fa1de41cb"
  },
  {
    "url": "assets/js/94.b38a4933.js",
    "revision": "6186c433cbb927c805fbc80a830055db"
  },
  {
    "url": "assets/js/95.559712c2.js",
    "revision": "ff2477cb8d46b5c55331c2195eb21b31"
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
    "url": "assets/js/98.f6932ac2.js",
    "revision": "fe4ffe81f92772e781cdd60c702cbbef"
  },
  {
    "url": "assets/js/99.75585f1a.js",
    "revision": "ea105a43f1d3f1580cb4952c482c59a6"
  },
  {
    "url": "assets/js/app.42ff41b8.js",
    "revision": "fdfa6599473ec0f49e9ac117f69e67b8"
  },
  {
    "url": "index.html",
    "revision": "a215e71d9e901aa839fa3a1ac1c73169"
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

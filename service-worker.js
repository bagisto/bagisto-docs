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
    "revision": "879235b5061667d558ce73a8530cf5e5"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "79964781432a012116a5c080bc2cf6ca"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "ddc6c147f60dbd77ba54accb315046f3"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "acb8d55609e373289d0a435045fe0b5a"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "4f10bd49bbddef01874494bda2c382d3"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "9f465af4b0f30bfa3ea5e67131f855e3"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "71148e66ac055df88c74ca09ce17629e"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b769f9af1c4e9e934624c2aca6958031"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "834d1ac7c9250de60d2bb84d1b3b0fec"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "8523908698d71b71ba1108aa132b40ad"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "2925111edbfa945a54b7e353acbfeccb"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "4650f849df04af3f6bf7a9f88cae8061"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "cf669adfcfffdd366041724c3542784a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "49475901e811d1771308522bacad3227"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "ded5cb92c012d19a7d417764a3e94158"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "1474c23a6cdbe49569789b35e04d9945"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "64cd95ff1b59af4d3b8fab485add0ee0"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "41477f136f60e01bf6d5aacfb4a537a4"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a4ad39b1c2101481272ea2bef41c1d58"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "3db01910222fc26ecfdaff827c1426d9"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "b23c75db8aba8e9c4ce6ad45699608e8"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "1dcbc216414a24d02aeb314edc2bfedc"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "b1ee0ad5c41ad67093c2965e98ed1c94"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "861c181673a7a8ceafad5593106ffa1c"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "e4f7a97e08a16c912721a29d71f6f014"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "0e127a5e366ee9f2915cdf50a15dd11e"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "2ed9337edf0063bd0c3b8fd8a949ac3b"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "7bedc8a9b3abca419c287d8906e19f49"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "e71aa3f876dc2e58cb67ac32b6ad0272"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "2e89399466c7f42ec24e69748f443cdc"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "876718d31802fe2e83a67dc93408e6a9"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "629f42b625b8f1591c9c35c8abbd6114"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "f4d6ca4699ce5729626312e7032dbd7b"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "f8b64f0fed1e65d0d8db65d875db3543"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "424755cb3610692ae99fb3e1b2de215d"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "ef7c46d4983086c45bb882fba23398f4"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "0a16a95ec36ed9d261f0f2cf289590a4"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "23d25cdbb25e52a69e3a1976ef06cc6d"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "2e6b6d87799ad274b119f0c8d9aab460"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "ab3f1cdf4cdad818c0f08d4e40192d80"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "82eef4c97455c9c82fe9e307bd9752b5"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "bf503d45ea276429a153e719cef97b9f"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "8eab4ac8133fe3ce9e3965be3bc30b6a"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "21f23e4ef4d524fd41ca126de6dba209"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "c8a1ab230d5aca5e124e5e204dc93da6"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "36ec9518b6d90f5402dccf6ee7f42c1d"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "76b4436fb16070903f938337b6fb8e70"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "ed94aaa55db36e4e5d5aaa96c6b7b133"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "63fbda54de186bf0c0797d202f926419"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "111869f9c1b8c8b87f3cfad525012c52"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "d3907d6bc36434027f2474028b9afdfc"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "56970a89faf1df7f2dc86f6e0bed27b1"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "4a3b2b297fe3e7f96aeb18e6f540722f"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "49ede063c895d14ecfc7ee4fe3f7d254"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4fa5b1b97570a22571a7e90ca5d24005"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "518d6ace1e62a393862fdeadbd9f1ba2"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "86aa9f6e4ed29bec21e5ae2e461a656b"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "10ca6770a27d542781b1e18abfea62c0"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "eb037049e33c3ebadcbedc7cfe7a508e"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "96b1fcc2491d2c51ebccef2f6ff825d4"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "792464e9fb95935e129972fb3c19ee1f"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "d2c70d5b14317d46113f87932e469462"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "18b21da5b147a629d0166f3a3888207e"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "b1ad58249de0e7315086f2104c91540d"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "1369350cfb5778276278bd602a0d4b8c"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "51125c62606bd46169f01c540ef4896f"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "f7b9da74265396048794379b89973872"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "d7ebc8fd10f64f3ef22d84ffa3a7a6a5"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "d010e06ad1615b3f669914f93d72830b"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "3e161fd7b8a4972fa60f58c9c3150ad0"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "16dccd4b8fb5bec66f71b00de8f9e2d0"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "01cabbf2a4a09d3e476cfdf5b64535ab"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "cfb6e8c091d7b7611eb8504ddab77d4f"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "221371a3d3fc94c9f24febbd874a7427"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "9b5c03930b2eb5b83fb97e998bd81e44"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "3eb13560c37b4d00248fd7e20a53ed7f"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "639b194ba7c941e51c7e2b8ee1d24cc6"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "444aefbc834892cd0f9eb8a7e5572544"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "4ee0503a6b4a83f3db445ed41b5109d2"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "cc1a56dc35783e36e5971d4ed2d0f06f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c6657b42fa639926af2644042983f15e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "a136e745b91c26e1afd776d08ccc1708"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "401739fe30da027823fc896f17e0802b"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "b951407ccc41bff83d3fa1904ba55ebc"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "c8b20e5a59f0ed2b91e92a3ececaee2e"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5b02f7874e3e37a035d6bb44fb5be7a5"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "b9a8583dd15d22cb018c49b92b68c558"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "168f6c4a6e8d519b7a2fd54c4ba42c37"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "a0257664e413219c4497e5ee14487ace"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "93250a48c2cd8253988c6742a22828cb"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8f82bf467a9f213d763f995694fa7667"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "264d5df449234fb47fe86b5adfea76aa"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f56cd1f6056322e63a0c1fe83ce9dbc4"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "06666bd25215345420fa241959589d42"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "cd29c1b0382dd907571c7bcea90f4c30"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5c95c35b9527601b4240838ee0703a93"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "fa6dcec1d84efcba7e84fdae6ffd96da"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "76f1b2960163513c8ae6084ffe38aa4e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "e6ba38e8038ec4a941029387da694960"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "6d15884f2abe2d45934d382912c13fff"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "84fb1a6fc20ad225ac3fcc69d42d37f4"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "19cf8251a4f58531b773bbc9a214bd90"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "80e69324293b70d45bd7c8c90d92c275"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "7bbf58ae5da73264af0813c7996fae7e"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "ab064e46821a3b68bb406dc54dc778c2"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5b359a1c0c7379723761b00e7e00517c"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "11500aadbcd19165089e434bffcb8e96"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "dc4e773a808aaba8b605162267ebf81f"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "d8ee40cb00c237292547a90958392669"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "1708a4289d5642f25ba20972aa927727"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "aa4d0e162ca9a0d596c0eb14123cd4cd"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "ae81d45145a4621fa33483fc5b3ef26f"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "2e091090bd0183279a02a911b57e85d2"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a850a6236e3645e3c9ac3567b1a56f38"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "0ba305ad7df55d3e1550f7453391850f"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e3f8207aa52777deb59ac49a2482daa7"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "887084eae244fe4ea25d3cf116c19aea"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "a40c3dac33b6dcbb19e70a60913874c2"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "9fd1a11c91d1ab0cb07c06e34aaf243c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "9c14bf446ae799f83d4a90951398e063"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "0b42a161efa180f84e7ad71c18824aa8"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "fd2e3c362495231251e08d6552dcefd9"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "b96fb81648f4c777eeaafd8fbe02cdc4"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "62137af68266edb663da25848ed1e85d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "2280710e7f1b8324b7b419aff96cbdbd"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "96430ec1aaef6eff1eb565a768b1f34f"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "7c03fb87c619e0673f902b0fef7f6309"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "7e303d47052dbcafe8dd8b231250284c"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "8076d4a0130b14f7ee5dce004bf9b252"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "03f70be0b5b39a75c7fa44716e462b75"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "8369b8070cfa07f2082bf2245a8debd4"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "7d0131a4d5285ad4c823a118a00cf66c"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "acb324868e3ab1fe88f9b85fa83a7e0b"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "1fe9cce3ff27295aa8e39dfcc7b904e3"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "ef62b66c25cffd44d46c670b7e33f981"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "278db46f383e59c1093cd1e69f3d5a3d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "f043141536fbfb8d8058f7751fc135fc"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "a508d035a0c3f351ce1a44023f1f2e79"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "ea2222cc4cfceb0a875a010fb2b888d8"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "57ca930408f528296f0686bece237daa"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c175404a79c8600be0d90e638a6674a0"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "1e4c5e1244fd58e9ffa13683da8ba6e6"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "f3fae66e2c7ebdc7d2fa54d6c3d8f072"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "45414c60aca631e3e2cb123398f897f1"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "2823b79d2bee8ea36fc956da06320f3c"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "2c71591f2dc22e1d2ad1966da27259e6"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "4a148d20a8f92b67b6f7a39a2c7c2897"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "e5945054e0473abdd9ed05aea52089fc"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "05d6d4c990bb410f4ff9590dd82370ef"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "0b34b0479dd07f7eb00860a45976c1f4"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "6a1ba2d55bb18a5abc878892133e2562"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "2528ec8c0c3abbb65e63b77ffb31fdff"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "177b1a54ea1cb1a5920b85ebf7d15b16"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "586465663d3644bc0ec3730579e8a1b1"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "7a24650aeb61a9827af7f8f2f0ddf863"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "b6a7b3e669ce79a6381cf3fbb59d79c8"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "72068445aeb82b05e1578b0e9a4e21a0"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "b3b16daab9616be092406977d5a83e99"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "363a1daf20b4e2e5ec3e0121d1d30c86"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "4041e0134fbfc53447258272d3555b13"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "d1cf6629d5ab189a91ada490f0435702"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "73908ef5c433c31101aaaf32d6741121"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "fc3b4428c6cfd7b1c08488585c9f9b7e"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "c95c75918592910007e44e561a78c7f2"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "c5da931e9bcc6d01d3a509314f8fc12a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "65dc9e35419cfed1b8afc3a144cf7fa6"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "85d76b157a25cad880314d7298d733d0"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "b5b0059282f14bf35d933f6eb5ac44f8"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "ca2f17d2bf6fe433933bda5dfeeca366"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "a3007f4c7bd3fe34674f0c2b36e5984c"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "30c011833d80d6b5479138d79f54806a"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "1e24611aa5990e6abadcc6d0f50cd510"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "289555917c83168983663ce44684754f"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "e20bdd502092ccc209806e2fb20d8468"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "3ce55fd8bf739ba70cf55529871ccd09"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "df5b60a115a37e022dc116ab1c932938"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "762c522d011b0bebc97ce1e960f090e1"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "1a7d3df281f5e090549322e0540cfa09"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "dc873b4d63a0fd7a6e882764082a0703"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "cfd8597d30719bb0975ac582e4601067"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "f92ee9d4073cca817c0c0dea2971c65c"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "b79cd3fcda31f474e4eb69d9ddd6c485"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "1d944ca614d5f5c4b35dfca43b5ec635"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "d7bbff4f62f902b0ce5868bb0864a706"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "52a9c2dc3b71e952241b3800a39e4ea3"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "ed3aebae0d1f5a76293d27ab9ad393d3"
  },
  {
    "url": "404.html",
    "revision": "e9532ec99a46febeae4da9d764872b80"
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
    "url": "assets/js/1.e76529c8.js",
    "revision": "25e1b9f4c7e89f6fd6e7d1824b4a43b5"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.84621082.js",
    "revision": "bce02bb1d8360c99536e2e332fb63cd7"
  },
  {
    "url": "assets/js/101.13b8b7f5.js",
    "revision": "d76fd23df80687be74990a4c875437c5"
  },
  {
    "url": "assets/js/102.bc2deabe.js",
    "revision": "7749df16daaa5fe9df60d862512a9612"
  },
  {
    "url": "assets/js/103.d9a79d8a.js",
    "revision": "8fd82f61d423a7f544fbc84851f40d2d"
  },
  {
    "url": "assets/js/104.114b8b35.js",
    "revision": "46cde2b500c2e820bd8e9b8d3b21d6a7"
  },
  {
    "url": "assets/js/105.c8c06753.js",
    "revision": "78c481989de95c767a36b02d1d698b03"
  },
  {
    "url": "assets/js/106.e84cd147.js",
    "revision": "8106c0a0990a07704a72c9f177417457"
  },
  {
    "url": "assets/js/107.01b2c2ab.js",
    "revision": "ece68042354ee42147df63484c915abc"
  },
  {
    "url": "assets/js/108.df445554.js",
    "revision": "1991c94d8bf6ace5de8e5dc2da264440"
  },
  {
    "url": "assets/js/109.55c9a2c7.js",
    "revision": "82472b9d320a1d180633679f654884e3"
  },
  {
    "url": "assets/js/11.4d1c43d9.js",
    "revision": "f0024c46457b384a5ca7495530708e2e"
  },
  {
    "url": "assets/js/110.8ba731fc.js",
    "revision": "94ad712402dc3967d01f76fa89b68e0b"
  },
  {
    "url": "assets/js/111.3fdd861b.js",
    "revision": "3457a4ee65a59f669f20be8b62ef1632"
  },
  {
    "url": "assets/js/112.024ada58.js",
    "revision": "513ae05b080dfa726cbd605924a48e0c"
  },
  {
    "url": "assets/js/113.31eadb21.js",
    "revision": "4d0083d4f150c22457d495987e5c5468"
  },
  {
    "url": "assets/js/114.a8a5df9d.js",
    "revision": "3fbf8f96ae9021067470f518fd843c2b"
  },
  {
    "url": "assets/js/115.03642dd8.js",
    "revision": "ba0ca12174566193311e6370418ae19a"
  },
  {
    "url": "assets/js/116.c6e1c705.js",
    "revision": "91aa2942fa650db186f2016ae75a39e6"
  },
  {
    "url": "assets/js/117.cbbe5bc1.js",
    "revision": "610e289d63185e6901bc2892419efd45"
  },
  {
    "url": "assets/js/118.c8d70cb9.js",
    "revision": "322f96b90d43d991b317aef085952f5e"
  },
  {
    "url": "assets/js/119.860c23cd.js",
    "revision": "472df81be9a2c53c89efac39da502542"
  },
  {
    "url": "assets/js/12.9b51fee5.js",
    "revision": "9fbfba627a1b6806363c7e86da5cf350"
  },
  {
    "url": "assets/js/120.ee97ae87.js",
    "revision": "3f74a6038c1bdfc722899b322d090dc4"
  },
  {
    "url": "assets/js/121.3ff6f469.js",
    "revision": "9d93c21e75064ee4fae1f45e523bb312"
  },
  {
    "url": "assets/js/122.3933c67c.js",
    "revision": "1fe9e7bc080c5ee48bea68d302946d3d"
  },
  {
    "url": "assets/js/123.c9034e76.js",
    "revision": "03fc033a47d7902579dacd2502b68209"
  },
  {
    "url": "assets/js/124.79331dc8.js",
    "revision": "1fc3fbd27697bfe5e26cac52b5831ca9"
  },
  {
    "url": "assets/js/125.02dfc716.js",
    "revision": "f7ab232a762f8a439a340a236867a0c1"
  },
  {
    "url": "assets/js/126.1402aa22.js",
    "revision": "40d23e9dc2d72f280c16a55f87fbaf21"
  },
  {
    "url": "assets/js/127.c4b41542.js",
    "revision": "a8bf6c203103ee9b68c4b317b7951211"
  },
  {
    "url": "assets/js/128.7a842135.js",
    "revision": "a888dadac0948580eb48da3d11501d48"
  },
  {
    "url": "assets/js/129.54f52d33.js",
    "revision": "f23d6f2929a4511a6ca21a3b457c6a3f"
  },
  {
    "url": "assets/js/13.d0b481c3.js",
    "revision": "3e15c416a5da5b23c4eb5c0529fc97f0"
  },
  {
    "url": "assets/js/130.71432bbe.js",
    "revision": "604bfaac5d4b50b239e1ebe2e3b4349a"
  },
  {
    "url": "assets/js/131.3789ebf8.js",
    "revision": "ffad2551420ab765e2204d4c88876fee"
  },
  {
    "url": "assets/js/132.ff5aff9a.js",
    "revision": "ae70b54f2a81c0b3631f781dcf1fc203"
  },
  {
    "url": "assets/js/133.360eb7bb.js",
    "revision": "344e737e023aa32db304fca7e57a6a91"
  },
  {
    "url": "assets/js/134.b3bc9183.js",
    "revision": "9a58af64e2c7a77dce270dd52df8b02f"
  },
  {
    "url": "assets/js/135.d1a87f2f.js",
    "revision": "e39c5e62b48df035a2334de5e81d5994"
  },
  {
    "url": "assets/js/136.f09f03a7.js",
    "revision": "c02b685e8b7ca27251750f6894e95487"
  },
  {
    "url": "assets/js/137.11b09d79.js",
    "revision": "a10d4b96f2580ba0b894dd0b66da5cf4"
  },
  {
    "url": "assets/js/138.5f5c61dd.js",
    "revision": "272960f843efb3ecc2e31b42e4b69223"
  },
  {
    "url": "assets/js/139.c1f9f179.js",
    "revision": "30f8257ef3fc5b73b138059e27cc2c3b"
  },
  {
    "url": "assets/js/14.1cbb58a4.js",
    "revision": "2babba03a2984e03af15b1bddf87564c"
  },
  {
    "url": "assets/js/140.78f3c041.js",
    "revision": "a1f5b01c9b1eb0028cef6c401bb6f8f3"
  },
  {
    "url": "assets/js/141.5b70f206.js",
    "revision": "539b91d876ca1453e754b52d76d0c804"
  },
  {
    "url": "assets/js/142.a8fd691a.js",
    "revision": "542e40ff613e4a081966fe3366cbaf8c"
  },
  {
    "url": "assets/js/143.b4b19c7f.js",
    "revision": "08352aec936d85b818babb07f8e0a546"
  },
  {
    "url": "assets/js/144.ec2a569b.js",
    "revision": "e8ac030062c09c0a029dc02fdefc3b50"
  },
  {
    "url": "assets/js/145.87356af1.js",
    "revision": "368fcf97ec55481b0bbbc14e280fdedb"
  },
  {
    "url": "assets/js/146.6e064899.js",
    "revision": "58596c28ac8369dacb2c2abbca4863e5"
  },
  {
    "url": "assets/js/147.c7a75d41.js",
    "revision": "f5f664f59193057f7922c71901ff787b"
  },
  {
    "url": "assets/js/148.d0684295.js",
    "revision": "18f84b9ec4c9a80c8ba94d590708bb93"
  },
  {
    "url": "assets/js/149.4f900341.js",
    "revision": "7ee3a14b070aaf260a9b685fe8281be0"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.8f0d2b83.js",
    "revision": "d4bc3452539d6d41dbe5a2fdc5c2070d"
  },
  {
    "url": "assets/js/151.67973ed2.js",
    "revision": "b80badbc2c6d304ab0d577ba4316635e"
  },
  {
    "url": "assets/js/152.0eb5506e.js",
    "revision": "4326b1ef887cbed50915290b72bd2aa0"
  },
  {
    "url": "assets/js/153.2b592c58.js",
    "revision": "6fc41ca96072733a7e6a3e8b21256319"
  },
  {
    "url": "assets/js/154.20bf6f7b.js",
    "revision": "ecb0d5744e6f60d02891f0f5b829e816"
  },
  {
    "url": "assets/js/155.80f3c3be.js",
    "revision": "172619fedb8f2b923e4e44923bd68901"
  },
  {
    "url": "assets/js/156.9486ebce.js",
    "revision": "07fa533b68e339fee04f1f01135df490"
  },
  {
    "url": "assets/js/157.192dd846.js",
    "revision": "71bb6053b823f74c2e49fa0f73aee39a"
  },
  {
    "url": "assets/js/158.90014c0d.js",
    "revision": "648e33bc5ad115375a844d604f602672"
  },
  {
    "url": "assets/js/159.48035d1e.js",
    "revision": "9a8108c7e53e6cff6327d8194508cfca"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.80226bb2.js",
    "revision": "62bd7e46f44217871864b4555e09d510"
  },
  {
    "url": "assets/js/161.65b36eb4.js",
    "revision": "e7a1de97405942c86e4976238635a072"
  },
  {
    "url": "assets/js/162.6e561f52.js",
    "revision": "1fc28a768943b856d988d9279101b7cc"
  },
  {
    "url": "assets/js/163.76c32401.js",
    "revision": "fd2f3d1405376e41f0f81835b5500125"
  },
  {
    "url": "assets/js/164.128e9e11.js",
    "revision": "42f589fe187b16915768f6b3ff8e1c28"
  },
  {
    "url": "assets/js/165.2b6c48b8.js",
    "revision": "85f39ae66c2eeab808c6d5bfc375e604"
  },
  {
    "url": "assets/js/166.d2e1db6a.js",
    "revision": "dd4726fe641e6dd057fc82942eada95a"
  },
  {
    "url": "assets/js/167.c93630d4.js",
    "revision": "095840cc9c2f73ef366fc6ca6b5aeda2"
  },
  {
    "url": "assets/js/168.19373adb.js",
    "revision": "4efb6660b059d139a755beca44e94936"
  },
  {
    "url": "assets/js/169.3862f5c4.js",
    "revision": "7d883c99a7ff94a4845ea2dbc3e6adac"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.ca0494bc.js",
    "revision": "532e4ecaa532ab93589429729855f819"
  },
  {
    "url": "assets/js/171.4f0b69d9.js",
    "revision": "82e96e8063c70107fab86716888206c4"
  },
  {
    "url": "assets/js/172.d40f1d32.js",
    "revision": "0e2e50f93fbb5da56f41734abd0a8d58"
  },
  {
    "url": "assets/js/173.555936cc.js",
    "revision": "37c098b0323e5d1f932a6902487cb616"
  },
  {
    "url": "assets/js/174.4f42b1ab.js",
    "revision": "dd1f8756e8f02e043bfafeb80a421917"
  },
  {
    "url": "assets/js/175.3eb292c2.js",
    "revision": "efeea3b7b671dac6ddc8bcf6e343d6f9"
  },
  {
    "url": "assets/js/176.d28797e0.js",
    "revision": "40b44c1c4fe92625ae4d1b271da46484"
  },
  {
    "url": "assets/js/177.458999f8.js",
    "revision": "e04fbbb3ab095611f9c7d5f628236e50"
  },
  {
    "url": "assets/js/178.6ebb2938.js",
    "revision": "07fb33ad07fb756985e9665151065e32"
  },
  {
    "url": "assets/js/179.958a7965.js",
    "revision": "2d038537358de510be77c315747725be"
  },
  {
    "url": "assets/js/18.a6c2c274.js",
    "revision": "fc69ca1a53b011793d059cef2f2a9293"
  },
  {
    "url": "assets/js/180.5929e1f6.js",
    "revision": "7144f818a79ff3986c7ff529d916fbad"
  },
  {
    "url": "assets/js/181.5f922752.js",
    "revision": "6b8b14ac8478f1d4f1f238937e16b779"
  },
  {
    "url": "assets/js/182.69475a0d.js",
    "revision": "9a4aee8d8ba89c01af04ff61b7677072"
  },
  {
    "url": "assets/js/183.e8357302.js",
    "revision": "684de312aac1d9c04f7a419a865ab2bb"
  },
  {
    "url": "assets/js/184.f0f4e915.js",
    "revision": "e56b83ef047635d1eef164de39c64d48"
  },
  {
    "url": "assets/js/185.332ee46a.js",
    "revision": "7b9046e1b57ac59fe1a054065743599b"
  },
  {
    "url": "assets/js/186.c76f92b3.js",
    "revision": "614eb74b85937a525ae94482f7deea6d"
  },
  {
    "url": "assets/js/187.8e398f3b.js",
    "revision": "0ac0991193f63db8a0d21d31bf22df06"
  },
  {
    "url": "assets/js/188.976d0c40.js",
    "revision": "ce2f06ba62f9930d992363b5fd1c2502"
  },
  {
    "url": "assets/js/189.d3f04a41.js",
    "revision": "22b37dbd09b04fd179aa2c565c303373"
  },
  {
    "url": "assets/js/19.fd820c2d.js",
    "revision": "1fab7e2d650d2c9490cee7e4887edcb7"
  },
  {
    "url": "assets/js/190.fddbed12.js",
    "revision": "11ee8d70c3e48830d1d7cdd824ba0d12"
  },
  {
    "url": "assets/js/191.d8ba9279.js",
    "revision": "851639ff39b67600a86083805b43d6b7"
  },
  {
    "url": "assets/js/192.2ac898c0.js",
    "revision": "bd8a65f45e1a4032a67a67653e83f056"
  },
  {
    "url": "assets/js/193.8011b88f.js",
    "revision": "75ab3acb5f51da4fd4f14a3eb767c04d"
  },
  {
    "url": "assets/js/194.1a1d5070.js",
    "revision": "df8aa5e74721e7adf92aa0bd0178f54e"
  },
  {
    "url": "assets/js/195.51a80b76.js",
    "revision": "a5256671ef5217792574fd8a8545686d"
  },
  {
    "url": "assets/js/196.49c41eb1.js",
    "revision": "0447245466d80940406bc4b696b3b469"
  },
  {
    "url": "assets/js/197.35a19707.js",
    "revision": "399ff97c49812c0470fce9096e112270"
  },
  {
    "url": "assets/js/198.e4d8a4fc.js",
    "revision": "0d4d53fca1fbb604829c2ad6843719e7"
  },
  {
    "url": "assets/js/199.62be38f4.js",
    "revision": "a78dcdbe6d1ffcf8b06dfc3c7a8e92ca"
  },
  {
    "url": "assets/js/2.3b6b1f5c.js",
    "revision": "660aa01f55de14205f9f2d58f1532df8"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.afe72f1b.js",
    "revision": "2d8535f8b3fa5dbc9336bbebb1057e1b"
  },
  {
    "url": "assets/js/201.77b64a66.js",
    "revision": "954e69f7c9992d862c65b39efd9d8d8e"
  },
  {
    "url": "assets/js/202.c2c4787e.js",
    "revision": "2bf94e9392ad7a0adb6e3566264a57ed"
  },
  {
    "url": "assets/js/203.95bd05a4.js",
    "revision": "39f75b965ad62f60cbd5f74de8f5114b"
  },
  {
    "url": "assets/js/204.e7155795.js",
    "revision": "f77ff4635eba01b6ed808d5b026d4511"
  },
  {
    "url": "assets/js/205.6ae3c39b.js",
    "revision": "47fb5b53cacbc3e7f8dd0d97e908992a"
  },
  {
    "url": "assets/js/206.9a8e9907.js",
    "revision": "48e77744075fc63ff2c096f8d01190cf"
  },
  {
    "url": "assets/js/207.c8ec1151.js",
    "revision": "3ff75aeca0e752a50f3311029a0ed931"
  },
  {
    "url": "assets/js/208.571b338c.js",
    "revision": "211315ac3d397a02a2357764c0fc37b9"
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
    "url": "assets/js/25.423d83f5.js",
    "revision": "ee5a8f8ae21cfc904b719a0b55551378"
  },
  {
    "url": "assets/js/26.7a1ae14e.js",
    "revision": "e0020e7b8421d8e7d020bdacc4c1d229"
  },
  {
    "url": "assets/js/27.7531562d.js",
    "revision": "5ccaf91ba670e66f3ab779b3fb0b9d41"
  },
  {
    "url": "assets/js/28.9589c169.js",
    "revision": "f0ce0b2e21bfc8f4d033e4515a03437a"
  },
  {
    "url": "assets/js/29.c9d0845e.js",
    "revision": "c295b0226cde7efeddaf1249f5b9d0de"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.34fa29dd.js",
    "revision": "b08d0c4c28f1a4afa50bc948f05bf8e1"
  },
  {
    "url": "assets/js/31.90732a05.js",
    "revision": "4c6d37818827d973e9d0400a3e950a8f"
  },
  {
    "url": "assets/js/32.2a0779af.js",
    "revision": "25319aa5d04e1151b7973b9f9c55b69a"
  },
  {
    "url": "assets/js/33.f9ab1817.js",
    "revision": "5c9bcf08fb34cde98c625cc028208567"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.55c66615.js",
    "revision": "658880fec667d73685f94b051e4242e6"
  },
  {
    "url": "assets/js/36.eb48a076.js",
    "revision": "abed2f558fa0d82eff6db488cb6dacdb"
  },
  {
    "url": "assets/js/37.9d4aae5a.js",
    "revision": "b13860114fb0d5f42b41c1aebd4e44e2"
  },
  {
    "url": "assets/js/38.3854acc9.js",
    "revision": "48ff93f2ef6e145c91ce76010fecfa80"
  },
  {
    "url": "assets/js/39.27afe970.js",
    "revision": "1bd782ed34f7f46ab43e8f76f661e11f"
  },
  {
    "url": "assets/js/4.753e95bc.js",
    "revision": "99666e0539fc9e584f7022931c128f8a"
  },
  {
    "url": "assets/js/40.6870e565.js",
    "revision": "c730507001ac0490bea5e360924df588"
  },
  {
    "url": "assets/js/41.6a13d5b5.js",
    "revision": "96aecffcb8ad1fbf396bc93ece5f2c19"
  },
  {
    "url": "assets/js/42.25327571.js",
    "revision": "4df88bdeb541e1c10ebf68559d83f47e"
  },
  {
    "url": "assets/js/43.12bdd92c.js",
    "revision": "6d72d9271bb5860ce962a8bd1fd9678c"
  },
  {
    "url": "assets/js/44.73ae229d.js",
    "revision": "3f66f09ab6551902ac1ce2c957a673b4"
  },
  {
    "url": "assets/js/45.9173c07e.js",
    "revision": "972732c36c3a9ef94cbdb760b27aa010"
  },
  {
    "url": "assets/js/46.fd090ffa.js",
    "revision": "f0aee20964082c6854b1b22083660e1e"
  },
  {
    "url": "assets/js/47.bc66fe08.js",
    "revision": "c2c362b7d923ba067108c5e4de760474"
  },
  {
    "url": "assets/js/48.9910da72.js",
    "revision": "2ca606c3e58404f5316ee70155fef9e6"
  },
  {
    "url": "assets/js/49.6de331f2.js",
    "revision": "d42a3d70cf4102a1dcf94f49046f7f1c"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.e08c0896.js",
    "revision": "cdd325a02ab7323f456f76d608c6ecef"
  },
  {
    "url": "assets/js/51.70f201c7.js",
    "revision": "218ba64d5e221d9855958207052ab2ea"
  },
  {
    "url": "assets/js/52.a9462fcb.js",
    "revision": "71c05ca4d2a706676565aa4446801315"
  },
  {
    "url": "assets/js/53.9163cbdb.js",
    "revision": "01289cf3e77bd679760777f23a911274"
  },
  {
    "url": "assets/js/54.8be396ec.js",
    "revision": "bf34c118cbfae558eaf3fcf9f3ebf7e2"
  },
  {
    "url": "assets/js/55.ddd8b650.js",
    "revision": "7698a8be9674a1c135b161dfdb55658e"
  },
  {
    "url": "assets/js/56.10db94e7.js",
    "revision": "1ca5e112503832126a288d2e1d9f37d9"
  },
  {
    "url": "assets/js/57.a6552204.js",
    "revision": "1760cbb7d5636506be0520bf936c528b"
  },
  {
    "url": "assets/js/58.797a8eb4.js",
    "revision": "6e611b3c097f3f1ca36b836bb7c65dde"
  },
  {
    "url": "assets/js/59.3e13380d.js",
    "revision": "a3b18c56dead36284206aa87e362cad2"
  },
  {
    "url": "assets/js/60.50884343.js",
    "revision": "7cc4b4a1f75de886b3e0323c84560bed"
  },
  {
    "url": "assets/js/61.fb99ae47.js",
    "revision": "e8c25661ef1530e041abbd3b0a9b37bc"
  },
  {
    "url": "assets/js/62.1f33a4a1.js",
    "revision": "dc080d5ad66446022fd7948c921633e2"
  },
  {
    "url": "assets/js/63.50db7efa.js",
    "revision": "b389cfb5d5ca915609b00d8b2dfc6b93"
  },
  {
    "url": "assets/js/64.649a3b32.js",
    "revision": "451a21035c9645167d2b46f975ed42fb"
  },
  {
    "url": "assets/js/65.459b2561.js",
    "revision": "9a743e7df161a8e7e5c42ce06e56c37e"
  },
  {
    "url": "assets/js/66.6ec62469.js",
    "revision": "eb877cecdf529f708f560ba9a0e8910b"
  },
  {
    "url": "assets/js/67.aef703f1.js",
    "revision": "7c0afa7bda1e00531ddea2f0d235e0f6"
  },
  {
    "url": "assets/js/68.218ae460.js",
    "revision": "38ceef5f22c2fc152321014eef7714b6"
  },
  {
    "url": "assets/js/69.d377fbeb.js",
    "revision": "1c8633686260fee1788f6b1c13b22ec1"
  },
  {
    "url": "assets/js/70.7aae6de3.js",
    "revision": "afefc4c8075386db8193db89fc4b7a66"
  },
  {
    "url": "assets/js/71.06ed3219.js",
    "revision": "ef8cb6d6851d6806dbb7b586f1fe8ace"
  },
  {
    "url": "assets/js/72.ffc76067.js",
    "revision": "369a75fbf5d6e517a5340d9963f0a954"
  },
  {
    "url": "assets/js/73.70a44f71.js",
    "revision": "f5efda17fd29e48516a92f4bba225f45"
  },
  {
    "url": "assets/js/74.cf39ee12.js",
    "revision": "a30dadd99875c5403d63921681432c40"
  },
  {
    "url": "assets/js/75.de66f7b9.js",
    "revision": "f8be1add3ef5afd6426b0b3e56d9ef03"
  },
  {
    "url": "assets/js/76.115c789a.js",
    "revision": "6923588cea315603a4fc5e6bbdb19f8e"
  },
  {
    "url": "assets/js/77.ced340bc.js",
    "revision": "fd9e8055e66957ab6a9fc5b0b708cb46"
  },
  {
    "url": "assets/js/78.f96ebb19.js",
    "revision": "dd9e6e01306befa32e17d2190ed8f5d8"
  },
  {
    "url": "assets/js/79.d652408b.js",
    "revision": "0ff8bc3031351b370e42cf443b5907e0"
  },
  {
    "url": "assets/js/8.84ff08af.js",
    "revision": "5298da8ee81d8525093ec9048b0e44c3"
  },
  {
    "url": "assets/js/80.8f2eccc4.js",
    "revision": "29f00e2f3fbcb010c5e5574de1133fec"
  },
  {
    "url": "assets/js/81.bf17fe53.js",
    "revision": "5fc5a8ad9ec396862ec14e814eb0476f"
  },
  {
    "url": "assets/js/82.26bc0f2d.js",
    "revision": "95408f93bb230fc65e4c665f52d13c32"
  },
  {
    "url": "assets/js/83.1749b505.js",
    "revision": "f96227785302b67f65056bbdf822841a"
  },
  {
    "url": "assets/js/84.27caf2b0.js",
    "revision": "d062314a9e680f1c55cadfc1d60e0d9b"
  },
  {
    "url": "assets/js/85.c29a306e.js",
    "revision": "40ca7f1622f64b893f6adf87273276c7"
  },
  {
    "url": "assets/js/86.cda20bd6.js",
    "revision": "876d12847e61c71305b2cec3661d2f49"
  },
  {
    "url": "assets/js/87.53d5630a.js",
    "revision": "726b6dea4318f780274876c861803446"
  },
  {
    "url": "assets/js/88.ae16e87e.js",
    "revision": "41130154e668ad393f60cfa31125a148"
  },
  {
    "url": "assets/js/89.1ef0f0bf.js",
    "revision": "a5505afed80360d2bf05cc53368adb30"
  },
  {
    "url": "assets/js/9.cc335231.js",
    "revision": "635766b5133a5a65c8231dd4b179bc04"
  },
  {
    "url": "assets/js/90.ceb041e7.js",
    "revision": "f1066070965dcd84a3e3f9ac79297b39"
  },
  {
    "url": "assets/js/91.08f07888.js",
    "revision": "e17bdd7ff5986439a762194fa23b7eb7"
  },
  {
    "url": "assets/js/92.f23ba5fa.js",
    "revision": "04dd8613520504c004eea346d696ff76"
  },
  {
    "url": "assets/js/93.cefcf663.js",
    "revision": "c6660e37f266b30b5e6de637c73ab3dc"
  },
  {
    "url": "assets/js/94.bd289818.js",
    "revision": "6b5bee1cb9521ee272b51b7332c0ed41"
  },
  {
    "url": "assets/js/95.fb546e06.js",
    "revision": "99d3ab9dea46cfe6f1f354ef18869cfd"
  },
  {
    "url": "assets/js/96.ad7f60ff.js",
    "revision": "82881270cf8e5cba2797ee4a6519ee14"
  },
  {
    "url": "assets/js/97.2866aa8c.js",
    "revision": "58521d5f8d40f628f97545a0157fea5b"
  },
  {
    "url": "assets/js/98.15765cc7.js",
    "revision": "89b517472b5814f5bcc6ed92ed5c4a75"
  },
  {
    "url": "assets/js/99.f9f6cb42.js",
    "revision": "75ca12330e9af677e65eab4f9f47e889"
  },
  {
    "url": "assets/js/app.4bf66618.js",
    "revision": "fa65925b1cc037aeb629cb02d75f44e2"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "f0809d6a30991c49809d278a5de0d60a"
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

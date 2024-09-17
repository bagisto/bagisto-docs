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
    "revision": "269e20af1ffea52756c14c4f124efe58"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "eb9f383fb362f99efe6e7ad2514a89d5"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "3db98269e6e0e1f6315325abec18fcf9"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "2713526752788bf8c0babea3b0d1c7ab"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "b61406734cf143c4bd06e4f9021fc08d"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "139c32b9773afa2a8885cecd60f78f21"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "18784efa5f5a03200b1c75779c21280f"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "230d63e15333476e2ae621d913a927c8"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "ba63153bb1d02c7ec4f426d355b76d50"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "9b567f833ac69547493878ed964a8945"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "0be3e98c42416dd193b416c4566f7ab5"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "e42e15921aa7a25050f49d18bd393b29"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "325d518168318790f10d1fce889a20e8"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "46c8c204bae2c286ac7ca837344e6678"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "c212433943b66e4cd9f83bb2ede54ce8"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "9e8b20c49d232d7a4a8ae6add7791ecf"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "52f52ce22931e6e3232114337127c3fc"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "229a3f48080c449bc28a53811b8f26ae"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "e2fd246711e6c31371c5f02aacefd2d1"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "18c743e10620895903aa5f263774eaea"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "3a5a44438a12c497c10d7c0f01ececc2"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "0ab4bf3044f3f3d831d41b1ad0bc9ed8"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "5f02e0a556da24aa7c438c68247d97a8"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "2286f85618037730014609e7fb93056e"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b08c7f444f0d5f1a44d61c4f7414e88a"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "ca72eff9f3a862490e2ba72c7977bcab"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "34598c0ed75c8c38deae5c49c49d7dad"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "aa6ef1791e7511155814ff53ecb7f200"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "9826ca6362e4f709283d72f997fb392b"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "aa6edf6717db6398238ba5beae26c27b"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "55a269751d1467551690677ececca025"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "0f4add681509a8375e57e8b32243e3fb"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "5edfc6305cdb99d8d78ed09a6e941900"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "c7873446f60b21c55c382b2aa64a490a"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "fafca63f28c06b193751c738b53b5875"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "97df32e262620f51b5e92a44ec3a55b1"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "8a0053124e27c38d8d173cf700971e91"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "241f86122faadfc4e7c894ee8d791377"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "f169645d127aa3855dc839a12249283a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "75308d5aaf4e2f44eb93dcd0efe280a9"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "9f2f028c9f3c3696b7f89689b9dc8b79"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "1cb77fdbb0d7d3b3cca48bd23846c4ad"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "952a6efaa93b7d2384efc33997153357"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "9208fa957751385ad8c90795334f1d41"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "d03e3dced6d8d7162e00894eb6b536c9"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "fe18b81f7f4338209aed71700f8cb067"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "d0150aa15a114553e1298f7f8b454d93"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "91eaf610a6bf997560fd7a313c1cddf4"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "6bd0ca01a8b72e2c157768cdbd970e92"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "c238d872720b83a948135a2539b46774"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "b3a7bbca4f5a0000ed4cd59478eafb9a"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "82c7e46c1b3ba7cb6ce56033328b5df3"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "d6a258d58020f667f373404c9d4c25de"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "8e64482617f8fd35775065097e4f271c"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "03faa94ee7a6b5c8a6ea7d754f88b2f3"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "f5c3f79a18dc6937b3e70193f70e2468"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8bff665af94ec00680d0cab46be8b40c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bb072c68c1ab1d79a7b3d01a4e50313f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "15f98cdb5aa8f8f2a90a7ca2c1cc4300"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "5f87ff17582f52818e41c0f3421ed701"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "8269bdd870cb6394c330a605dda01544"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "97fc9d12d2753494b566f7e22ad53cf2"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "ee37bf5706250bba97c314c52b4630e5"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "1621ec849d45e4eae4a12f8aa0db5c2f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "5deaded318b7b2c349566762fe5a3b1c"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "7bec733c9cba5c04a267ed32b4823ef8"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "8987733e2f46503d556a830b44fb81a9"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "0f0b9009874210a15f15ff6a8da33d38"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "9f6817f15cd0114576be52ad1cc75582"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f4cec3c402fd20658f41ad90cdf60a6d"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "5caee222769b08716f0deef253d6a3b4"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "5336ed7aa0043fcb9b50247fd617b2d0"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "caf64225d52b0b57dda51a03f99e3cc9"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8dd22fe69782a8ef54a301cffa6079b0"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "80ba27df9913c9026425c446df460f74"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "b4118f92f551499dc3fcd61284cbe6b3"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "2b9afd97ead1309fd3dea860b650577e"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "7cb19ed42c17c29ea2f1dfebd5f809be"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "dc490e5b8d2447ab26cf4203062d21f9"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "52848b09c03ac10b30be7b80d492af13"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "35f940785d633fa1ad0a91a06e879fc7"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "90dfefdfca14a6d19de4a9ba7ecd6f24"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "11c900dad7dfcc66339101fea1a22b33"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "c5f27c69c26165e3e91e73f76a1ecaf9"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "d1d42912a191d03e179e7480a0573968"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "631f9f2c5143af86ba2d7fbc4abc77f7"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "02f99218a741d15f52adb20e086f90b9"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "bbd2eb6539fe68ab4b65f39ebbc024e3"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "2078fd2ec21bc685cf1aa29e502be917"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "17f7a5653374579831ebecfc94bd6200"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "484a85ef6079cf3a998a9da1cb3c6983"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "034657d181fa01ab5b4f4ec4243e2e08"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "1faedf85c17079aee146f53bb7d6b266"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "d60ad700f210d83d6359137738590350"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "dc22e60ee00005999be6a66a39e35265"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "f61cab47a806b854db2d5a7b6a4e60c7"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "f8d49739b86d9f594ecb2df2374920a0"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "4e80e7b0764516846424835afb1a340f"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "b14f37846db67783d5b80787d9166448"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "14b9d8df8a61a099a635b19835864e3b"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "dead729068b809ebcdcb0cffcb509c33"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "118f4443eb17264a8609cca1fb24cc6a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "deed1dc71c9e9541306a61f9b6f18980"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "f7760c753e046f0442d43189d3dbc5ae"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "f055cf9277cb5b86561da1e14c8f0e69"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "9dad66c475d05465ea506512baeb6e42"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "764175a2af6e6a7898a2eec7e1ec7df6"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "64821c358e1be343c7c6047738ae28b0"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "2aaf0db2e04cbb815962a22434e21695"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "b053e3706b1fe7cdc3d8a9d360b6a51a"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "9981bd7d18ca7193627910c13d740294"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "bdf0fbd1db974d426d4ec210b99af519"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "e118b213695c6f55c5ca11fa78dcd291"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "c284aed3fc7785f9cfae1d1186738137"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "c746ef9b58819abbd496c2da9c779804"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "efd124a4aa36c74161ac7a2bef80d089"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8bbe28cf6058c9f60458edc2346847c6"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "62b7caeb7ee5a30da79c7a71e248e66f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "0281627c21742337d78b0e83fcd7ada1"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "9dc7dd88e538e3494b83a85d37dad4ec"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "39f647cbb0ed88fee8e8ea415fd33a34"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "0dd513ecb7b94339f507de5dea9df2b7"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "377bf932dc49aad7839bf622b85d6cf9"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "ed98288e652005190f12416604db4104"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "83e6b174b9183bf2c5be3068eb2fe5c2"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "262aa410439fbb241f2386a44768c249"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "89a7a848bb8a75ee24f30da20ce6841c"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "c0253177d9646fea0fe48ecb819aef08"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "b27fb82ce6f667fac15e387046c5e1d1"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "cc240ba33f5f65d5717624a96a59e3bf"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "f2197a7ba83218cddd7200f36cd041f4"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "09ae8ac46dc9387037a70cec8de7fcb2"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "2eb32e162753ebed1dfdf80444c4cae0"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "80aaf9ac1558c0bcb0cfd1cc6f9b4941"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "439a9da4f95cd034d6426e17ccf74a71"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "673ba1a2553bcaba275cb7323a3686fc"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "81e916d3ae426c4fbbeb72c29bacb30a"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "53be5ffca4f61cf8694b78dffebc7162"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "00304fb8f9102d7a7131bc608b979bdb"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "371763849ed81734e1881a174cc34b83"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "e2ebe392ca6051e156313ae2192d0ab9"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f12056f9181fc7f378544d5ccccc78f1"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "1fee1a08e2bf2b668a92fccbfbc57356"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "d4814cc14de861864e7f9b2d1fb1a7d5"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "61120f426ef3d5573a88ae798cfef47f"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "646ad3eb421895c1dc53291a30381f7a"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "e112b786941e8aebc1ec58a16d713c66"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "177be37d5cb3468231b0b627568cbc8f"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "ecb2fcbe7d177a8b5e67f768b69a7360"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "3c9b5ab058ced7eb8698645e51e1a7a9"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "ade92bcf956513f113cff509a05d0123"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "655108ad1a11c3bed62d343705b899e5"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "36dfda9fbade17ab610e843fd3b7722f"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "4858436f19a13944d046a450d8f0f22f"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "e7034a2452cc687dd9e2ebe01cd7911a"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "cab05c953c7b6da5cbcb1ea1090043ff"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "fc834c704963806862d44ea110675792"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "7406fafcca393567a339a080b8c65b59"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "4595e74a3e6999d299163844d943519b"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "bcb86778a7940393892ef4ffe28f5926"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "1f93075ac20fd96bf19a660c943980b2"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "1b96c016d5e3873605e3bfbee5f3a51c"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "a06dcd5f1629d996f69cfe0d90273328"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "15bfe4650f648f4de86fc35aff3e534b"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "c3f6e61ef83e43b7df8126501ca1bf15"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "69ec8fb5908cd9970ab1ef568caf34b1"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "40583d6a6a82918c48f59787a39098f4"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "6924053d1c386e9a6a496ce91d1f609c"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "78ab109a94d155802473f8e3f38f88e1"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "f480c0804bfd531788bff04c608b90fe"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "2aee9afa650c02a617cfbe6f8a48a570"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "e26d5b9aecadee300543c053dcfab6d0"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "2a528c7689b933822e5eeea858a7e6b7"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "31eaa8661752a5d7c598857dac14318e"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "e0f3f2347e55ee1942ead72d6da877ff"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "69deeca43be20ccce89849b65626cdd9"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "5cc4721d15cf5e3c09f8c40bb85742f8"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "9fa3374a713bf239aba6c8544fccdb43"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "84661090c1602a53f3edbed7cd9495d0"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "5195d1d4eff5dd12851b0ad761144a47"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "d2819d86195d5f3c4499865ef1b233e1"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "cf0979a5ce8df0d17c23ff22d87e3b25"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "1a81914c5836b7b8a75966a5d47ee5c9"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "507be4e62784dcd81e57fa6e521a00f3"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "1465abf70c568707a51ee55ef2ca6bc2"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "119e483a9fb0497050085eac6f70143f"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "a1d57f4adb59240cbb7b0000e44f8c0f"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "657117b792e64473b61cc7900019f954"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "3a45ce49cf4e93dd303ec1ab9d578781"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "ba093a5447dfb3cfbb3cb0ece78d70f5"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "1b7203965261efc96e17c2e0d4ab2221"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "548ac42781c35e47f43c81bf662f5a25"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "72c42b52b1e62ab4cd1b6bedad5df08d"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "11827b3758c25b4a5b7d41fb26eec0a4"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "bcfa71641329b5dc562cd23e5a5beab9"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "42a658f84ab01dd78792204c93383942"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "ea8526367e4809078eba1146c42c06e5"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "a05995e12c06d33357698fb4d916cd51"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "62651d44eaa5de7e73eacaed5e04d0fa"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "e490f4462df3ef5f2ce093aefb9f8b59"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "02f03328d097ba2b77dcc83e9486e335"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "ff3c3ed3b1869e7cc102408294d0bf73"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "04eefac039db59c03438343d52592964"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "48d7c6f0e471fe14febfe804c140f45e"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "ec97ffedab0afeb3ab86ba8d91aebcbd"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "48e782ccd989977908414e9ef3578731"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "66fcc11f237e2a6e9dace50003829000"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "b0763631783767106a7e50f74cd67ba5"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "5751c8661942f8fdff86d275842a5b75"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "18c1f2f7dae11548c608f36e06141a21"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "7405e230e69b84d849f8247bbefa17b1"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "f92699c4913d76a5ace85bf758a7a7d7"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "17d05e9193eadc8f5460e1781060fc4c"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "7dbe1e71608926edd09000d9c7a05efd"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "266a409c18a8983ac8046c2f34994769"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "c4498b64bc375a946350ab0814d7a727"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "bf11b3c0becd1626e58be658f857fba7"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "2cf6c7ab1e482c8a5d3681d436d30860"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "17b74d22dd60b3d55fd429fb4dcc6a98"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "a9a4fe8148b5f5028fbca0b77df0e318"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "02a8fe086bbdaec6c5e214038dc5ec73"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "a4e0b61f7426dfa090eec5e220d9e345"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "9bc047d34f67974bae54ce9a23f334d9"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "7c85302f389ac97065a928734629dbff"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "aa952119ee7aaa9f3102fc7dad3a6eb6"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "52c5a3319db02cddaa6ed89235106d25"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "6fc337b47af865a374ee51b7977937a6"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "06df515b0797017f34014f34f859f671"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "5feffc6cb0406a42013cb9732a9adfad"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "a4e019ffe3fbc45c25b21556b9eaa37a"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "88be318ae09e1ca072031d35a15d8627"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "7efd852253a01cba794f929a6e355289"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "e68625f3dd9914711f3c43e83b5880b5"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "eb406d349e0072614d6b9034f2134796"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "3361efe702301d9fcb4a91560778d88d"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "2e21d0dedba24ab52bf21e54fb0ecccf"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "b3bea08cfa0bbc1b8db4eb38fbc07307"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "d98a5bcf5dd9819f8d3d84c24bfb711b"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "983ce9cee246a9099e19bd3d56e2f4a4"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a93367a04a4ab6820108c11c1f9e9bd3"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "cea7fbf75855da87bd143a7ebd760ca2"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "149dd621f347f00ee6abdc0eec4af153"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "2edc226b89de64406db5473f95dafa12"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "2fdf0ab0777dd3e8130753a04d1d73db"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "d3abd2ae2b7f506cf9f20e9353bddf13"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "2e243c96e6c7298a4cedbd91924534f1"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "12b8b36c037500a79e0cf4b9398eadd4"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "26c84e13b38aea728d6d2a998952fec1"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "c4c1bec5a97c86b0737dcdd909cae0f3"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "6630fd9c9ff2290ae40d5c1585f96799"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "de4f9c91b63347718508e1e820f7e575"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "0bf6f445d0114d30d46d92dfdc384e1c"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "cd1442304198ec799ad445f3e59147fc"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "d0e4aa73901bf98936a16bdb80292e66"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "55f9aa41a06716f2a14f4e99f81e9eaa"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "3d97f741f7f001f82d091289c2786516"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "719a7a1a421b3e295a41048a041fd62a"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "eb74537f2cea726b3875b381a5f00c53"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "b65f5829f6b15cab62f0cdedb6ab103c"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "b0b1e377bcff31c7496098c5f57c03ae"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "9922a69ecc4aa0a2f070fedf82a1b9d8"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "d37540d5ab0507451fb0fce56043112c"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "93f44524243ae642fb61657167c5fef2"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "22555c18463cbd2f029accc6cc1505ce"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "0fd9f6cbda8226a4399866ec0eee5487"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "cfb0545f5742d10fb9eec84564104aea"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "d2bb0f65e53df9f8c132d2f27dd1f390"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "53f100a891ee8809b9a06c362c398fdf"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "b3855cbf3ada7e4e081873e2599fc7d7"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "297417bba8dc21bc0012135b1abb73c6"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "0a2ee67f09bcc921dd46c3c1e958f054"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "6f455c3ff22d0c54087fa5833feb4956"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "68c9fd687501152974a365bac678bfec"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "e167de1305004bda37ad44c36e6fb216"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "93ce170eb3945119e390136ce7afcdae"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "6593876c557ebda2b32c0e4fd5728e53"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "246ca81b4d364c78ac5fdc539b10233c"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "e874173d4b0494c133e57dbbc587079f"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "80e021c7ab6d6e065563f0d0a49f4d16"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "b67ce3ad48f2c23ba163f704806de490"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "4f3d005311de4cf224f3e39fe8b9fe5c"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "2be40d844ae9a0f142629e93e07178ce"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "8a37bcc5a94691e1258ec43589e57091"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "478b018fb6fd905843e7605bfe023c4d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "7ae6a92192089ddc5da6e47d7a75fec7"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "049a0ea27c5a9a04f9744e8db069699b"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "eb9f9c62d78d1b11ecc005a069b43404"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "9e77a23911de78d09c524ee11725cfbc"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "62c16dbc1174855faf3838b317882d90"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "3d71ca2c7f683391c94e2f4954f7c788"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "25d18a1f7ba5acc059b8df9f56f51d04"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "97b2f1ebd6e3608b1d4bba3f1c1d7ff3"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "546da26e41c8633ec07e475dcd222c8b"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "b2c7c956de6796c91cb744ce175d575b"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "a433746928c5bc7bb8f56a45829e7bce"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "cf27638e468936894898ae3e18df7ed1"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "b8a99d5553f42b19d7fac334c86b99ae"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "cc9ef85621a7b085d2f7dd0f417bf841"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "28e3f9873e20c159494bc38dd6e8ffc8"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "8a685f012c7199cd925df60deed36646"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "d432564bc8c80b3c7c6baa4a4959978f"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "c6c9ad683643b975e4c2fc6cb473bf4a"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "c48b922f22f50cf069a160288ea0e24d"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "076863e930eb51fb86125e1cd1cd54e4"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "135cad78ad1b591d1d50d6c0f6de493c"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "67b8751da0b34279dc646a74c4404b94"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "1f1ab6184b64fde8745e67d1dba70b1b"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "298ea7f3b5a52a261152a45af81848ed"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "98783a674300c5506fbe62aab557d15d"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "f0b132ac5cc5a96baf4ecb9f33cb1466"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "33b68968c447b9bed4f8e3d15473914b"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "1f6d311bae95f4b856d76ddf0f243be3"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "7be5d990f18bc0a5fee72478a8de994c"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "8dbe24c37a83b47ca1baae63ad2dd537"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "345068cc50614e591a51f7ffc427b4cc"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "1f26f5b75b3aea866c7d60db9c17bd27"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "275a47e0a19619cb228bf6b8170755aa"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "95e95c59fc1a97308486031b9b9b365a"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "d5be2d5e54b55eec78b47b03e9a19df4"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "6a47a8889883fae9e125303a8186e33d"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d112c889a4ee17775e637b896f4bb545"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "e8a422d1900b26dce1a0458ff959006d"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "a527a18a1515b987c03ae82f118c3d2a"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "bb1587a45021f455bde79e8a018b9caa"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "df0d7be7ec7f94f3676f231cc00b389b"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "6a110b10862604d57e98824c30c10c2e"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "d21df4ab13f36e9bb9c7ff250ea41335"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "2dc6e7ad33bb0c720703a309cf5c747f"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "768c33675024663c25b49a36f10f788b"
  },
  {
    "url": "404.html",
    "revision": "92d27eabeb1d712a18c86e5d5307b6a0"
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
    "url": "assets/js/100.1a16696a.js",
    "revision": "8d3dd23dd0b08753439a1e0287f0537e"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
  },
  {
    "url": "assets/js/102.4b25a071.js",
    "revision": "93b8b366a73ddb35288cdea9dbe456e0"
  },
  {
    "url": "assets/js/103.59e73842.js",
    "revision": "914b3c4c3324cf249a7b4cf2789cdf7a"
  },
  {
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
  },
  {
    "url": "assets/js/105.86252d99.js",
    "revision": "5263930e32b33981fb74ff9c121d4b06"
  },
  {
    "url": "assets/js/106.d8ef2e03.js",
    "revision": "eec5f7d873979903f160eaead0dab93b"
  },
  {
    "url": "assets/js/107.6b5b4082.js",
    "revision": "1fcd041d6f7d1f7aae75d5414f52b43c"
  },
  {
    "url": "assets/js/108.d89ee50f.js",
    "revision": "5e60318094cbde0679609396474931d0"
  },
  {
    "url": "assets/js/109.a86ec105.js",
    "revision": "1cfb055d4009d0c93c0763f8258d7c6a"
  },
  {
    "url": "assets/js/11.d885a811.js",
    "revision": "3337881f3f107778f3274c470bdcd296"
  },
  {
    "url": "assets/js/110.022deffe.js",
    "revision": "efdb4c079364f30b41be1ffd39303aa9"
  },
  {
    "url": "assets/js/111.754a2cd9.js",
    "revision": "434e2180cb02024048385763e301459d"
  },
  {
    "url": "assets/js/112.7ed2342e.js",
    "revision": "146dad5bdc4a29e0065a09b479225ab3"
  },
  {
    "url": "assets/js/113.caf50036.js",
    "revision": "e384084b449a1295c22cd92d791b694d"
  },
  {
    "url": "assets/js/114.91e0833d.js",
    "revision": "bf7abdf198c63cde40c4a5781158b75b"
  },
  {
    "url": "assets/js/115.2a994a20.js",
    "revision": "c734006ecf3c580284a2416f2c7e3cbe"
  },
  {
    "url": "assets/js/116.7c2f4757.js",
    "revision": "0b922aab33e4e2004f392456e4f704ac"
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
    "url": "assets/js/122.fe671a70.js",
    "revision": "8bfe723f8103c03da3dd5ae2e43652b3"
  },
  {
    "url": "assets/js/123.b977b17e.js",
    "revision": "cd120e8c972a8882950ae1fa79ccb78a"
  },
  {
    "url": "assets/js/124.6e66ad78.js",
    "revision": "618daa22134c82c2d768395e3395c516"
  },
  {
    "url": "assets/js/125.fdeb6d0a.js",
    "revision": "12ea5c8a86ff6d3cb68491124537765b"
  },
  {
    "url": "assets/js/126.abb88bc7.js",
    "revision": "c0131c0e1cc7dc05efea99c3bd344939"
  },
  {
    "url": "assets/js/127.9b65318f.js",
    "revision": "41c2d09d347d223281120fcac828fb6a"
  },
  {
    "url": "assets/js/128.7d4b722a.js",
    "revision": "f120367ab796a51b355b0329ece88da5"
  },
  {
    "url": "assets/js/129.6aab2d9e.js",
    "revision": "3b2c518910fa308243a4be198a090b01"
  },
  {
    "url": "assets/js/13.4a774b3a.js",
    "revision": "4872c9bb194969c98b9627ff178495c1"
  },
  {
    "url": "assets/js/130.a71466e4.js",
    "revision": "12e8c245881b0b8f80477443e9fd5089"
  },
  {
    "url": "assets/js/131.124a7c56.js",
    "revision": "1a22a36e66d259835ec947a7072026e5"
  },
  {
    "url": "assets/js/132.1eead4f1.js",
    "revision": "78c9461a3ba9478820712e2a06acf054"
  },
  {
    "url": "assets/js/133.a89599ac.js",
    "revision": "1235c3cb19e44882b7993ef4d9f09642"
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
    "url": "assets/js/136.9fcb8de7.js",
    "revision": "b91e1cb64083738535b61f23596bcad5"
  },
  {
    "url": "assets/js/137.461abf78.js",
    "revision": "6c48cac07d5e46ff42924ec5aad06fb0"
  },
  {
    "url": "assets/js/138.72a0465e.js",
    "revision": "e389b4cb225d63bc4d8e149d080dee28"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.8c161f1f.js",
    "revision": "5f202c7d732c18a5a87f2fbeefdc36dd"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.5ce799ba.js",
    "revision": "3a0da07594ebee763f90d840a6f968bc"
  },
  {
    "url": "assets/js/142.61201fd8.js",
    "revision": "816b8c17886c6868617f6eaceffb3d3c"
  },
  {
    "url": "assets/js/143.73a59bf7.js",
    "revision": "ce9b211429dcaa99bb95f3d50d705ed5"
  },
  {
    "url": "assets/js/144.4a14f685.js",
    "revision": "db8603384b1b7e16aafe819b63f55bfc"
  },
  {
    "url": "assets/js/145.b7afacb0.js",
    "revision": "1da649e58e03fa31e7c01ca830a9230d"
  },
  {
    "url": "assets/js/146.cf40c98d.js",
    "revision": "c9c9a3d2abc32bd92102db87933dd25d"
  },
  {
    "url": "assets/js/147.be334db5.js",
    "revision": "2eb22999ed19d3c97b0bca8b5d737c61"
  },
  {
    "url": "assets/js/148.4bd4d65c.js",
    "revision": "151609ea841232d288d80118b2bff9f4"
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
    "url": "assets/js/150.6dd2bae4.js",
    "revision": "a9f6c37b88ab7f4d423c94997460bea2"
  },
  {
    "url": "assets/js/151.9af42afd.js",
    "revision": "7821937c9342410cbff49a2649c59ebb"
  },
  {
    "url": "assets/js/152.a8fd9af8.js",
    "revision": "973eb1a5e772922e449488d8e2f013e3"
  },
  {
    "url": "assets/js/153.7868c2b1.js",
    "revision": "aefe44b88440025c275f5d704621284c"
  },
  {
    "url": "assets/js/154.5e2b3e71.js",
    "revision": "95f82a99e568207083ef42a1749e29fc"
  },
  {
    "url": "assets/js/155.b21fa2c1.js",
    "revision": "83082e8999966391ac17f0d88ae62e64"
  },
  {
    "url": "assets/js/156.0866a124.js",
    "revision": "094c6cd6eebcf852de0d42b93cc230cf"
  },
  {
    "url": "assets/js/157.e07c1257.js",
    "revision": "5183954cd6e8541530bb13ed001976e6"
  },
  {
    "url": "assets/js/158.8185b9bc.js",
    "revision": "6166a0a28cc2b31e2ce7a764ea8be232"
  },
  {
    "url": "assets/js/159.570f378b.js",
    "revision": "8b1865ea419f155fb2487f803f62a8f0"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.bb3fd589.js",
    "revision": "cf9619d8ed6fe7f06d37eb794ccd8396"
  },
  {
    "url": "assets/js/161.744e65da.js",
    "revision": "2b1744ec515f49cd699d571f0edb7607"
  },
  {
    "url": "assets/js/162.848581c0.js",
    "revision": "68227ee2ab2c1cc015683b241611b914"
  },
  {
    "url": "assets/js/163.11e7021b.js",
    "revision": "c0b638a160ebe406d6c0399a92e0ed38"
  },
  {
    "url": "assets/js/164.5e764e28.js",
    "revision": "ebd0d0c61297209c2d27879adf68db86"
  },
  {
    "url": "assets/js/165.8e0f13ba.js",
    "revision": "e55db322534b09260963ec52ceec91eb"
  },
  {
    "url": "assets/js/166.6e9d8bf2.js",
    "revision": "8ff5c19b25edd51aac300e78cbca0b39"
  },
  {
    "url": "assets/js/167.fb27e17e.js",
    "revision": "9fe533dc61cee429c9a0a0e2fadbacc7"
  },
  {
    "url": "assets/js/168.5a75c6a9.js",
    "revision": "81b2d2a6f2252cedbaf6f2d7d83fb3aa"
  },
  {
    "url": "assets/js/169.d2818f95.js",
    "revision": "a368d20f5e23fa6650e31db48c12dfbd"
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
    "url": "assets/js/171.778daf70.js",
    "revision": "248f0fd2402e63fa49b71634341d6d9d"
  },
  {
    "url": "assets/js/172.2964329e.js",
    "revision": "82175ddd703ba3b05f5e86c3aa5a1f1d"
  },
  {
    "url": "assets/js/173.e0e3779c.js",
    "revision": "99bc2bd50587d4cab6411bd2279dbdaf"
  },
  {
    "url": "assets/js/174.ce43584f.js",
    "revision": "634cae7e688b39f93579c02d3e783bae"
  },
  {
    "url": "assets/js/175.35890577.js",
    "revision": "2f01135a8b3e795059feb4fde164a8e7"
  },
  {
    "url": "assets/js/176.a5d88faf.js",
    "revision": "5617695f3216345cff739f132053e1ea"
  },
  {
    "url": "assets/js/177.54c5b157.js",
    "revision": "4429f4cb857654de3703aa2ea414a706"
  },
  {
    "url": "assets/js/178.72980b1a.js",
    "revision": "2e27d432931c212853f11f00e5cf476d"
  },
  {
    "url": "assets/js/179.2e6e796b.js",
    "revision": "372c068d08fec09599102db2b1c8268a"
  },
  {
    "url": "assets/js/18.fe9a8fde.js",
    "revision": "5fd075cca7a2202b15494071d83b6517"
  },
  {
    "url": "assets/js/180.3f4a744b.js",
    "revision": "60ca9de0c722da0e523f02d4620a577a"
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
    "url": "assets/js/183.63fc1079.js",
    "revision": "f0125c6aaf3129ad0dfd606616f41ccc"
  },
  {
    "url": "assets/js/184.630b2d11.js",
    "revision": "6ddc2060ff7b9fd14373bff44d4a7a41"
  },
  {
    "url": "assets/js/185.90e29939.js",
    "revision": "69423cb2315d672dc69664e4d894cfad"
  },
  {
    "url": "assets/js/186.0a59efb7.js",
    "revision": "21e3166afd87f338a1d3b1ef17883bc5"
  },
  {
    "url": "assets/js/187.ade8e104.js",
    "revision": "b32fc2185dda114f3d002a57e43b3402"
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
    "url": "assets/js/190.ce24896d.js",
    "revision": "bb9441e458e0db900d3f677657d4a25b"
  },
  {
    "url": "assets/js/191.0392ac8a.js",
    "revision": "e7d187a88e17c714549fe1c40703ddf8"
  },
  {
    "url": "assets/js/192.b91764a0.js",
    "revision": "f1b433c755ad1c4947c79694afc61847"
  },
  {
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.1c2f7dc2.js",
    "revision": "26a3ca6f1b70be0b74cd28df51d81944"
  },
  {
    "url": "assets/js/195.bd06880d.js",
    "revision": "85938193aa4516e3e77ffb500c2e3fce"
  },
  {
    "url": "assets/js/196.a5f84907.js",
    "revision": "283bf122c08b1ba946b5e629ebc978c6"
  },
  {
    "url": "assets/js/197.8e29dae3.js",
    "revision": "5781a2a108d9eeab34b17777db5b0cfe"
  },
  {
    "url": "assets/js/198.db422c28.js",
    "revision": "7ab63007878e886e7a71482e876f8d61"
  },
  {
    "url": "assets/js/199.76cbe7a1.js",
    "revision": "b528c888af981f08cf7b73b723843175"
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
    "url": "assets/js/200.c9db94fe.js",
    "revision": "8cf7e7c30c8f98bcaa22b65c78e9bf68"
  },
  {
    "url": "assets/js/201.a470c89f.js",
    "revision": "cc6400f3dce0051f953d45a254e99118"
  },
  {
    "url": "assets/js/202.c27c0212.js",
    "revision": "b4cae8d72194cf81e597787ade485d5b"
  },
  {
    "url": "assets/js/203.be70b315.js",
    "revision": "fe921b956f645d1f66afe50e1c510297"
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
    "url": "assets/js/206.328819b1.js",
    "revision": "9cab5095c31095584c76ee870726796c"
  },
  {
    "url": "assets/js/207.b63ace35.js",
    "revision": "05960f7272114bd172263c7171ee34b1"
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
    "url": "assets/js/211.a20edde6.js",
    "revision": "c8ae68ab83e9fb6381e8a21757fdadeb"
  },
  {
    "url": "assets/js/212.ce1b24bd.js",
    "revision": "81c8c0ebe005be84eced32ef9fc078d2"
  },
  {
    "url": "assets/js/213.6f09a403.js",
    "revision": "7afa679ca1036b8415b265ec758a69c0"
  },
  {
    "url": "assets/js/214.2de75553.js",
    "revision": "e99a0810ab47dbd89c446961c868549c"
  },
  {
    "url": "assets/js/215.a6505192.js",
    "revision": "19833c59fd041878ce448fa4a6f89a26"
  },
  {
    "url": "assets/js/216.77c29208.js",
    "revision": "dee62b23365a26c208104782303e44e9"
  },
  {
    "url": "assets/js/217.894f1494.js",
    "revision": "a004926a2799eb50bf263b23d5dc889a"
  },
  {
    "url": "assets/js/218.3f4e6ad1.js",
    "revision": "fd6f4e64c31c4c7ab4678df7e45c9272"
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
    "url": "assets/js/220.224f6f03.js",
    "revision": "7218121fb9180cace5d867d45b1bf860"
  },
  {
    "url": "assets/js/221.e87c2e30.js",
    "revision": "1fb5a7e84fea6defb5abbaa4e911ae49"
  },
  {
    "url": "assets/js/222.afc09fa0.js",
    "revision": "047b74cfe6fcf3fedea7f4778f702e1b"
  },
  {
    "url": "assets/js/223.23a19ff1.js",
    "revision": "4630da8b58cc88a3fd4f82a84e21cf5e"
  },
  {
    "url": "assets/js/224.63bc8a53.js",
    "revision": "00cecab2817f93b87981bbba68f2dae9"
  },
  {
    "url": "assets/js/225.e9d947dd.js",
    "revision": "5d99ea0ceaacc2d82950f37ca923b67d"
  },
  {
    "url": "assets/js/226.2dca5ed6.js",
    "revision": "54bd24dc69086fb0d07a8f79c6c16c62"
  },
  {
    "url": "assets/js/227.86ee97f4.js",
    "revision": "595ce7e73e7c32d6946bb27dda2c23cf"
  },
  {
    "url": "assets/js/228.d1b7cac2.js",
    "revision": "c9b668a063c84c89915085982ac049cd"
  },
  {
    "url": "assets/js/229.a4ed9cfd.js",
    "revision": "b12fae463adbf2f4538696ae0585cd77"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.f6aeeddf.js",
    "revision": "7d1cb5e64bea0322cfb4d7c984b3f01b"
  },
  {
    "url": "assets/js/231.60aa2626.js",
    "revision": "a1f0fa15e3524dea9be1f25c9ed72ea9"
  },
  {
    "url": "assets/js/232.29d9a5b5.js",
    "revision": "e260b48bf0673818339a67a8ecaf66d4"
  },
  {
    "url": "assets/js/233.da73ad46.js",
    "revision": "9c0f30a88b608c6cc809608dc5ddc748"
  },
  {
    "url": "assets/js/234.7a252bbd.js",
    "revision": "aac6c5baffe4033592357d364e73ccbf"
  },
  {
    "url": "assets/js/235.def638e9.js",
    "revision": "555d17e2ad8752d0b95c951fd3022377"
  },
  {
    "url": "assets/js/236.bd165f92.js",
    "revision": "7f17b7fd77c6cae6f422dca395e26756"
  },
  {
    "url": "assets/js/237.05956415.js",
    "revision": "6b560c89603abf03d3fb6a6b216f322d"
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
    "url": "assets/js/240.6cc78fb4.js",
    "revision": "d875a3e1e00d9b383fdaf3173eed953e"
  },
  {
    "url": "assets/js/241.91243411.js",
    "revision": "3fbdea6da4d969e9bf4e7cae1096ac73"
  },
  {
    "url": "assets/js/242.577871f9.js",
    "revision": "3118bb77ea22f9254197913a0d7352bd"
  },
  {
    "url": "assets/js/243.6cd805ec.js",
    "revision": "060d48d789ea224b0c89cf225497dba4"
  },
  {
    "url": "assets/js/244.06fe3eb2.js",
    "revision": "358bac4a39637917a35a567d6fb3e3de"
  },
  {
    "url": "assets/js/245.c6daa72a.js",
    "revision": "57b4167982446f36b8bdd7bd919c339f"
  },
  {
    "url": "assets/js/246.086b91cc.js",
    "revision": "30a70eea144bf2482d589e880ad85948"
  },
  {
    "url": "assets/js/247.66138624.js",
    "revision": "62258c9bcea1acac117e8a60ec96a7ff"
  },
  {
    "url": "assets/js/248.40039e63.js",
    "revision": "c03636b4ac3b45af145ef98a81aad40e"
  },
  {
    "url": "assets/js/249.7602d5d8.js",
    "revision": "6fe529a99518fbe5a1a0a82adebc4100"
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
    "url": "assets/js/252.1ce83f61.js",
    "revision": "523de023664f77d338ccd25145423773"
  },
  {
    "url": "assets/js/253.f48ae3d4.js",
    "revision": "0e3c9bb2ef8ea128c4814eab0496eac7"
  },
  {
    "url": "assets/js/254.f2752ba3.js",
    "revision": "997309ae212089205e5b0d265f21a60b"
  },
  {
    "url": "assets/js/255.8370a1e7.js",
    "revision": "cb454d0c924ee2541e6eab2acfee002d"
  },
  {
    "url": "assets/js/256.7789061b.js",
    "revision": "2843f4fe863176496d1cd6ccf65256bb"
  },
  {
    "url": "assets/js/257.f3fe5f9b.js",
    "revision": "d6e51e5ecce3cce5aa72747d138107f7"
  },
  {
    "url": "assets/js/258.4c4c2116.js",
    "revision": "e7b06ff75519640fef463c4fb77f0a90"
  },
  {
    "url": "assets/js/259.b2d6a237.js",
    "revision": "0f02438d6bc9253b2f746654562b59e3"
  },
  {
    "url": "assets/js/26.4bef914a.js",
    "revision": "4ce8cbe0d74c3a704ff2ff99c68c41bf"
  },
  {
    "url": "assets/js/260.574f31ed.js",
    "revision": "8b6c4cf459cd34c7bd2c46cac4c71ccb"
  },
  {
    "url": "assets/js/261.7f624bb1.js",
    "revision": "3d1c7a5a86556b8441db0402f3e0fb3d"
  },
  {
    "url": "assets/js/262.cc611618.js",
    "revision": "7871a97a47af2e560f545ceb7c4ba01d"
  },
  {
    "url": "assets/js/263.458c17e9.js",
    "revision": "8b628fcf13841f9b80ed73f54d6c37dd"
  },
  {
    "url": "assets/js/264.04379cb6.js",
    "revision": "d441b9fda3570b4075c49639ee000fa5"
  },
  {
    "url": "assets/js/265.64e1cba8.js",
    "revision": "d6570894330c6835e1203bf7bf11ce32"
  },
  {
    "url": "assets/js/266.db874b82.js",
    "revision": "6fd3d3401ae5c578ca6cf9b11062b732"
  },
  {
    "url": "assets/js/267.09d12e7c.js",
    "revision": "9b95d8942cbbbab3a36c476b8b01bf24"
  },
  {
    "url": "assets/js/268.6176e382.js",
    "revision": "94946f2252ca9048bd6a9f14bd3ed52f"
  },
  {
    "url": "assets/js/269.9a21612e.js",
    "revision": "78c941778f39d8218d76145ba0cc5c1d"
  },
  {
    "url": "assets/js/27.245e0933.js",
    "revision": "408a327aaf59f67bbddd7e0e3c59d719"
  },
  {
    "url": "assets/js/270.673eb0c7.js",
    "revision": "611f52a4fc5414efc6586b31f7e48500"
  },
  {
    "url": "assets/js/271.feef3b6d.js",
    "revision": "a5f99045233fe056c43d112cfdc3f461"
  },
  {
    "url": "assets/js/272.6ecb51f8.js",
    "revision": "ab1cfee485ba5702a0d3a0d451d25962"
  },
  {
    "url": "assets/js/273.f1b927fa.js",
    "revision": "d7dabb5bafef4f327ffc22aeef03c608"
  },
  {
    "url": "assets/js/274.8afa0e30.js",
    "revision": "5374cba6b831ad50e26e4599db48332a"
  },
  {
    "url": "assets/js/275.5ec242ff.js",
    "revision": "bde752b7ebd79420ffb593e8d8223972"
  },
  {
    "url": "assets/js/276.f5b0be3c.js",
    "revision": "1aa0b7a540d7bd9406b4f105eb1114a7"
  },
  {
    "url": "assets/js/277.a95f2fc9.js",
    "revision": "1c2e3b4b92207f46456d571f456bfb9f"
  },
  {
    "url": "assets/js/278.245b1195.js",
    "revision": "ac70aa1eddc9c9f5f7324e09aabb2c85"
  },
  {
    "url": "assets/js/279.9b3d772f.js",
    "revision": "4eaf84e3f8ecdc44f68f3aff8d7887c8"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.6b97a7fd.js",
    "revision": "a3fa8a2f9bc05d52656e7f6dfde59a98"
  },
  {
    "url": "assets/js/281.b542eda3.js",
    "revision": "36d34ca320c059d1818af8d17896e67d"
  },
  {
    "url": "assets/js/282.0fb3eee7.js",
    "revision": "827da69b40bb46fd0b2b364177d700e6"
  },
  {
    "url": "assets/js/283.e2767090.js",
    "revision": "36ca4474314ba812b9faa7f0238f6dc7"
  },
  {
    "url": "assets/js/284.51f65cb7.js",
    "revision": "ab91efb7141d31238109072dbaa2581f"
  },
  {
    "url": "assets/js/285.b13e6a26.js",
    "revision": "dc1bf25c1ff5b23a9eb9d8f5fb0b8af1"
  },
  {
    "url": "assets/js/286.b52ae99b.js",
    "revision": "5e6081f421e484e86e85d0e7975e6c08"
  },
  {
    "url": "assets/js/287.db24a5cf.js",
    "revision": "43e207b9dc2a5524f83859ae5e17816e"
  },
  {
    "url": "assets/js/288.144695f6.js",
    "revision": "3eeed1f3d711f8ef2faecad729daa895"
  },
  {
    "url": "assets/js/289.b6754f82.js",
    "revision": "6e6ba73d75494cfe759443409bf5dca6"
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
    "url": "assets/js/292.8def4b84.js",
    "revision": "0cf11aad82b77c4639dac4ff5463bcaa"
  },
  {
    "url": "assets/js/293.072361a0.js",
    "revision": "81b4a61e28d5c97212f1703213334024"
  },
  {
    "url": "assets/js/294.7e9e41c8.js",
    "revision": "4a3d6b24609d00b9f5a148bab6fc3e0c"
  },
  {
    "url": "assets/js/295.bc6d3890.js",
    "revision": "62961a9d17dc7d2a9268e906df54bef8"
  },
  {
    "url": "assets/js/296.ce283280.js",
    "revision": "c764dbaa37444aa1c1760959f326e58d"
  },
  {
    "url": "assets/js/297.0fec3806.js",
    "revision": "d976c16cb9fd0b130178426e19f22966"
  },
  {
    "url": "assets/js/298.77d614ce.js",
    "revision": "cd24c509ad98bffacd9db92e24e7383b"
  },
  {
    "url": "assets/js/299.d21eb270.js",
    "revision": "dd1aabe5909345c3eb58c552ae593372"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.dbd09be1.js",
    "revision": "6ed6e972713ff96fd717256abf923d5b"
  },
  {
    "url": "assets/js/300.99a49cb6.js",
    "revision": "bcd88081a0bfda411f4348adc57b1849"
  },
  {
    "url": "assets/js/301.157b5250.js",
    "revision": "58003845c21fc76d9a4c4efd91735489"
  },
  {
    "url": "assets/js/302.5eb783da.js",
    "revision": "ed2799d15a0908d535bd8eb70ebc9721"
  },
  {
    "url": "assets/js/303.08bf5b1e.js",
    "revision": "8fd41d5411d8a990a2e61a37e2965655"
  },
  {
    "url": "assets/js/304.1a4db12c.js",
    "revision": "4c8f03f1e84f4a9c887b14a0191b955f"
  },
  {
    "url": "assets/js/305.2a482e61.js",
    "revision": "bd7c26ec71fb71deb1b754aea467c847"
  },
  {
    "url": "assets/js/306.3f74a918.js",
    "revision": "df6a3e4d91da3f2d358755d0fef010e2"
  },
  {
    "url": "assets/js/307.8259a16f.js",
    "revision": "9e271c6166856b8ef1d2f46e4a170c45"
  },
  {
    "url": "assets/js/308.5a438bba.js",
    "revision": "cabb9871386787a6b778d9a0f3a3582f"
  },
  {
    "url": "assets/js/309.5feb03a8.js",
    "revision": "f639e56849cdf46a082576beeaedf609"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.c4387205.js",
    "revision": "d03dae6d69e10ab0f34ce743ccffe6ff"
  },
  {
    "url": "assets/js/311.6ca26f3a.js",
    "revision": "68a89573a1545ed42be72fcd5cb80773"
  },
  {
    "url": "assets/js/312.b39ea6ba.js",
    "revision": "8b604f66eeb45e186742ddaa5c357701"
  },
  {
    "url": "assets/js/313.a93f74a6.js",
    "revision": "9eda9de227ff9e08ce3d11dcb714c04b"
  },
  {
    "url": "assets/js/314.75250113.js",
    "revision": "32c5595df90c9c779cf603ea22b90c55"
  },
  {
    "url": "assets/js/315.3b2a59db.js",
    "revision": "deeed55680352b73b802e5d39cba4bcf"
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
    "url": "assets/js/319.f6e67c87.js",
    "revision": "84cdbd0776f57082ff4cd2b3c1f24ef8"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.dad9fcc8.js",
    "revision": "09dc2c511b99d76e0db1357a9ea1812d"
  },
  {
    "url": "assets/js/321.67e8a01e.js",
    "revision": "2616939e31f0ee4547368455042c63ec"
  },
  {
    "url": "assets/js/322.daa349ce.js",
    "revision": "6c5f5247a3d1d1f69ae563446d904ffc"
  },
  {
    "url": "assets/js/323.a52e7c6e.js",
    "revision": "691837b333d1d6b7312c4c02134590cd"
  },
  {
    "url": "assets/js/324.efe79655.js",
    "revision": "677df60558091ad8c2cae33014749dbb"
  },
  {
    "url": "assets/js/325.04a86006.js",
    "revision": "f3b8b19ad46a897c34fee5a144504121"
  },
  {
    "url": "assets/js/326.aad5e922.js",
    "revision": "26f25e8928d0495f723a1e7b52082174"
  },
  {
    "url": "assets/js/327.2cc63cb9.js",
    "revision": "99b417fe4b9941573dec064d8def4e0a"
  },
  {
    "url": "assets/js/328.fba3e0ea.js",
    "revision": "3c30ec3982a2d86ba0f9cdd9050f6dd5"
  },
  {
    "url": "assets/js/329.fb1d1816.js",
    "revision": "956291ad5ec3b72c356df1b8676320a6"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.4b382083.js",
    "revision": "e231d01cd8251a6569b339c37efff9b1"
  },
  {
    "url": "assets/js/331.7e1389be.js",
    "revision": "ba24975c86975377c090b9029eed5266"
  },
  {
    "url": "assets/js/332.d7cff761.js",
    "revision": "a7a2a1f242dec6b776bfde64e28e26f1"
  },
  {
    "url": "assets/js/333.4bb06175.js",
    "revision": "b3b33fae7d64e08163cd0e088b62b226"
  },
  {
    "url": "assets/js/334.44fb31c1.js",
    "revision": "8a343c27f797799bf320fe0497737b32"
  },
  {
    "url": "assets/js/335.8d135037.js",
    "revision": "99b0598897713eb135349110f6ef77bb"
  },
  {
    "url": "assets/js/336.2101cd71.js",
    "revision": "4c64edd70b57f233a7300b11866e9fb5"
  },
  {
    "url": "assets/js/337.69b42904.js",
    "revision": "a35db027dd86e120730880267d3e7813"
  },
  {
    "url": "assets/js/338.2d94b8b8.js",
    "revision": "5f4d18430d73fa9d3f220f87996a909a"
  },
  {
    "url": "assets/js/339.b9250c86.js",
    "revision": "8a2cb845cab7b3a05efae1bb8f7aa2d2"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.a434750b.js",
    "revision": "44c17e5b98d9e71a451872782542fe66"
  },
  {
    "url": "assets/js/341.ee0f393a.js",
    "revision": "29d271cf87b1f2753820a16fa666ba3c"
  },
  {
    "url": "assets/js/342.f975108b.js",
    "revision": "08ca55eda1e24bda9f7f68b18874413b"
  },
  {
    "url": "assets/js/343.1bd23578.js",
    "revision": "fce66e7def0051820c4cddaf36250082"
  },
  {
    "url": "assets/js/344.3d4e08a8.js",
    "revision": "610c3639d75af5afa77a5bd15fa44f73"
  },
  {
    "url": "assets/js/345.e92c5a74.js",
    "revision": "e22549b9e9582b5dfabcf3a991352516"
  },
  {
    "url": "assets/js/346.fdbae821.js",
    "revision": "c680857a62baf0bb2268a63c9c11c399"
  },
  {
    "url": "assets/js/347.390a39ac.js",
    "revision": "e5d9e4f6c8bb8fa70d11eb8c6636f363"
  },
  {
    "url": "assets/js/348.7f2082de.js",
    "revision": "f6962b12b99dfa91f21d168f1850fca6"
  },
  {
    "url": "assets/js/349.6fe9c0fe.js",
    "revision": "c9e35a855fb89ece742fbb88d18d39ec"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.6af023ea.js",
    "revision": "dedba898fefaa379f9b815d49457be71"
  },
  {
    "url": "assets/js/351.6c94bbe0.js",
    "revision": "fbfbb717d0de263bd0e72d888224ba4a"
  },
  {
    "url": "assets/js/352.0d9caa2d.js",
    "revision": "cd9b38957e015e044da27bbcdfcede6d"
  },
  {
    "url": "assets/js/353.51a3f5f3.js",
    "revision": "1f6a33f1373d387df14c79eb5753d1aa"
  },
  {
    "url": "assets/js/354.678ad751.js",
    "revision": "5e68fd9ca5ba3ed0e17db657ea302c00"
  },
  {
    "url": "assets/js/355.ee8f807d.js",
    "revision": "fcb305036660da9586c727519434598f"
  },
  {
    "url": "assets/js/356.a3669127.js",
    "revision": "101fee8e35ef427cdefc21c710555ec7"
  },
  {
    "url": "assets/js/357.17785061.js",
    "revision": "a1452e07818e5ead5cd29ec9ed6b2b24"
  },
  {
    "url": "assets/js/358.4150d71b.js",
    "revision": "e9120714c049c14b3b94980ae3413cfb"
  },
  {
    "url": "assets/js/359.c0af716d.js",
    "revision": "4d1af7215d462f669de1e9777dfcd87f"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.f4631d5d.js",
    "revision": "c1dda0825b573670237103169eb55783"
  },
  {
    "url": "assets/js/361.c8cfe559.js",
    "revision": "54d8b5d460b881d6a4218ad7f64027c3"
  },
  {
    "url": "assets/js/362.220c2bc7.js",
    "revision": "170d963cd49d15f846b091f59948e265"
  },
  {
    "url": "assets/js/363.676d4d28.js",
    "revision": "79efebe8586c7ab40d6c197c2a551749"
  },
  {
    "url": "assets/js/364.20d9abde.js",
    "revision": "63b7d97c16434d3ea6414dbf169b12e0"
  },
  {
    "url": "assets/js/365.01704662.js",
    "revision": "93a78abdf534dc16d809f62e99a5eeca"
  },
  {
    "url": "assets/js/366.21a9878c.js",
    "revision": "a825480dc3ffc09a0a3177232889a283"
  },
  {
    "url": "assets/js/367.2bc1de22.js",
    "revision": "9dc3eda13e97a64428263009fccb0ed9"
  },
  {
    "url": "assets/js/368.228469df.js",
    "revision": "293f6730bd59fef54bfb418cfbd44407"
  },
  {
    "url": "assets/js/369.c22adbd6.js",
    "revision": "fd7e2a311b90a70cae524ab6ea55194d"
  },
  {
    "url": "assets/js/37.cb44a25d.js",
    "revision": "e5136953dbbe8c85a4c95dab41146baa"
  },
  {
    "url": "assets/js/370.a1674be3.js",
    "revision": "704f3e5a7e5f6bccc3400a2de660dd78"
  },
  {
    "url": "assets/js/371.59895c63.js",
    "revision": "925bf4095e2f046271b310d518024ea2"
  },
  {
    "url": "assets/js/372.64738df7.js",
    "revision": "226b50e9740505cc13891b9c9c77bb87"
  },
  {
    "url": "assets/js/373.30ac541f.js",
    "revision": "d2dbea8737e8cbfa3c09f73d79b6a748"
  },
  {
    "url": "assets/js/374.07f60996.js",
    "revision": "55f40b9b48ba2f0371318c527f76da51"
  },
  {
    "url": "assets/js/375.d0f1a5cb.js",
    "revision": "d1e09378c470ce11fd085ffe57f3c4d4"
  },
  {
    "url": "assets/js/376.d9527362.js",
    "revision": "4f08988f837dbcb7997fa8e6d6a41d9d"
  },
  {
    "url": "assets/js/377.315e75c7.js",
    "revision": "a5dd894ac4d7f35cad383db890a2729c"
  },
  {
    "url": "assets/js/378.a84f24df.js",
    "revision": "3c4f9ee86baa1417defa9c47ac400c6b"
  },
  {
    "url": "assets/js/379.b61c3ebf.js",
    "revision": "986ff59e147e1c12886c3fec3e1cea07"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.d25fd95b.js",
    "revision": "c6e10e03a36b103c7c8d15e7a882dcb7"
  },
  {
    "url": "assets/js/381.b255ccf2.js",
    "revision": "53a84d0eaf5a6fd444cdf152dc18e4b7"
  },
  {
    "url": "assets/js/382.9a8b8c1a.js",
    "revision": "bdf93b91b9c42c76147cc078ee6dd336"
  },
  {
    "url": "assets/js/383.e094cde6.js",
    "revision": "18067e753cfc28be64549344850a9d88"
  },
  {
    "url": "assets/js/384.f07a1f7f.js",
    "revision": "19a7c7d800ff299d996fd8ec375c2459"
  },
  {
    "url": "assets/js/385.0193710a.js",
    "revision": "5aa0aa12443c6a89a2a8ad27f392e421"
  },
  {
    "url": "assets/js/386.640579f1.js",
    "revision": "19ac6698cf45a8767b5c7ee46d2686c1"
  },
  {
    "url": "assets/js/387.763a7709.js",
    "revision": "67e7234f08b94d8c38602dcdf93f6ce2"
  },
  {
    "url": "assets/js/388.489a6e8d.js",
    "revision": "163290a98f975248e0465a91ec535ca9"
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
    "url": "assets/js/390.9a203b80.js",
    "revision": "04d3801a8a3cde07209b1d778484d254"
  },
  {
    "url": "assets/js/391.bf889434.js",
    "revision": "af17cc17b0e2c9b4712fcd41e29b9c1f"
  },
  {
    "url": "assets/js/392.1b3b913d.js",
    "revision": "3341195020c4d652eb331cff80208194"
  },
  {
    "url": "assets/js/393.13c69d10.js",
    "revision": "8339993375bae7a4144e9c318255dd3d"
  },
  {
    "url": "assets/js/394.4eef72ee.js",
    "revision": "a0ce88b922fb732d50d238a32adf6340"
  },
  {
    "url": "assets/js/395.be8c5ea1.js",
    "revision": "ba1aa69249c31f9d5ea68e78867a753a"
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
    "url": "assets/js/398.cf3a26ff.js",
    "revision": "511bdfbef81029e8ca234d93ea780f50"
  },
  {
    "url": "assets/js/399.85076e82.js",
    "revision": "10744e12acdf28ebb18bc005e7107f38"
  },
  {
    "url": "assets/js/4.ec446020.js",
    "revision": "13a7efc36488d805c012edb0a2c31c8e"
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
    "url": "assets/js/41.ddbb183f.js",
    "revision": "41d40c23f1437db2becf8757abe385f4"
  },
  {
    "url": "assets/js/42.bd77c3ae.js",
    "revision": "6c81d17f4a7b76fb8cfdcceb990610d7"
  },
  {
    "url": "assets/js/43.4db73f0e.js",
    "revision": "fa4c99427b3fcba20bdc688478a23b91"
  },
  {
    "url": "assets/js/44.731e2f92.js",
    "revision": "cbc60d9bd8ec03e83eb963a25ba10c6f"
  },
  {
    "url": "assets/js/45.bc5ad395.js",
    "revision": "4507ed55641a81f9f769d094a4a14731"
  },
  {
    "url": "assets/js/46.859f06bb.js",
    "revision": "cd1f281c820d08f2cfbb5aa075e5a2c3"
  },
  {
    "url": "assets/js/47.f6c7dc37.js",
    "revision": "c605fbcd0c343da83cd84356c66f0bc9"
  },
  {
    "url": "assets/js/48.1344d82d.js",
    "revision": "548a27112b8a18863b736dbbfeb00b83"
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
    "url": "assets/js/50.c883457a.js",
    "revision": "4fbdb5f4d1825164e16f10def8a488b9"
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
    "url": "assets/js/53.04cc9409.js",
    "revision": "f43a214ba20fea8077b1672136be7c4b"
  },
  {
    "url": "assets/js/54.020a3938.js",
    "revision": "876256817fbd61ca480f333844ca6a35"
  },
  {
    "url": "assets/js/55.a7843922.js",
    "revision": "14d5ebe362b7c87833c35f09a17bca41"
  },
  {
    "url": "assets/js/56.c1f23aee.js",
    "revision": "f3ca792a59ef9b59cdfc1fc1984514d8"
  },
  {
    "url": "assets/js/57.51ca6399.js",
    "revision": "83dad115592d60b802fa8f4cfa699747"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
  },
  {
    "url": "assets/js/59.fadca3ab.js",
    "revision": "17838b1792fffe9746fa46cc1a78a7cb"
  },
  {
    "url": "assets/js/60.f18ed3b4.js",
    "revision": "603df73f22b758cb6b6aa9d963404c09"
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
    "url": "assets/js/66.db3c85f4.js",
    "revision": "05309198a3f290b5f694e3a4a04a05fa"
  },
  {
    "url": "assets/js/67.b5725a2d.js",
    "revision": "9b8238663961f5ae8ee85de56cd206b7"
  },
  {
    "url": "assets/js/68.79df14e2.js",
    "revision": "3a0373ad3b4e28237990d8fa4a50a8f3"
  },
  {
    "url": "assets/js/69.af908571.js",
    "revision": "a153d897548d0453985371459ddf153f"
  },
  {
    "url": "assets/js/70.2b42eb69.js",
    "revision": "6319abd2f69e95dd6432c31da66e4eb1"
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
    "url": "assets/js/73.6931c73e.js",
    "revision": "aef7edeadd72f0b9449b5088be754e1d"
  },
  {
    "url": "assets/js/74.efe1e833.js",
    "revision": "b9a87d98a112541feb6a7830ab9ba17c"
  },
  {
    "url": "assets/js/75.a11c8851.js",
    "revision": "d94eece54663fbed362f752fa10f39c0"
  },
  {
    "url": "assets/js/76.288a3e46.js",
    "revision": "99db64ea047423afd5b169066c4b07cd"
  },
  {
    "url": "assets/js/77.0f90da4e.js",
    "revision": "eb22f71bb01cf5053c481efc7ef9f2d1"
  },
  {
    "url": "assets/js/78.ddd569f1.js",
    "revision": "d7ed4570993f882b7f090330faec4702"
  },
  {
    "url": "assets/js/79.09ce61a0.js",
    "revision": "205edf8bd7897b180c443d519e1244fe"
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
    "url": "assets/js/81.bed12f7b.js",
    "revision": "fd3c39c9e224651dd48cfb36e5232267"
  },
  {
    "url": "assets/js/82.c5b79991.js",
    "revision": "cc16e0f0ff71298924458df8b814e86d"
  },
  {
    "url": "assets/js/83.c064f57e.js",
    "revision": "7733e17c0e9ebfabf05e103a5398318b"
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
    "url": "assets/js/86.bee2e56e.js",
    "revision": "6d492707997c81bc985f791d0de4d516"
  },
  {
    "url": "assets/js/87.82dfccfc.js",
    "revision": "82087d75257e9ef82663781ef600682d"
  },
  {
    "url": "assets/js/88.34803ff2.js",
    "revision": "bfc05738d9fc62680138c2e84ae22b8d"
  },
  {
    "url": "assets/js/89.eb94f076.js",
    "revision": "9950c8e764eef4e608002d086da2b49b"
  },
  {
    "url": "assets/js/9.1b9e3953.js",
    "revision": "35bc5ed367332c5c5e0af8e829a1767b"
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
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.61b68720.js",
    "revision": "e5de64e69567ae13ced39561ad5d7e91"
  },
  {
    "url": "assets/js/96.a2295a49.js",
    "revision": "2373bcd406a20d0a79081fcd38a9332f"
  },
  {
    "url": "assets/js/97.a26e301d.js",
    "revision": "f30a932d607df925850dfd7556114e21"
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
    "url": "assets/js/app.eb413834.js",
    "revision": "8ccab709ccecff326a2e0d1ef6915fae"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "01913569b2f9088782df11fb7dfe7c4c"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "e86ad2cc1615612d8d3305827ccf81af"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "4dfa0f69baea12d0f47f5f6b19907352"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "9bc95249f0caaccb699397b6baa53cdd"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "3f7923d38d711d8f5fc51bd494bed76c"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "f762b2db7e96e61585a3259e5d2d5980"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "4ae2882e9a31bd3538c596163aae2f99"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "50502dfa5b53e34a6ede2fb61919336c"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "c71b8f836a3560a290c4b533baf6dd04"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "67b847ce678f70b7c77d8da58d131f0c"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "a27e1b6720623e7c52f6c435aa788acd"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "22c0cd71ba5020bb5af8cada4f44a1bf"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "5b26d55d8449be32fa1f3406a8d43d96"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "d5eb94ccaf4f42cf085dbb5f4ed4b024"
  },
  {
    "url": "master/api/index.html",
    "revision": "9948e7bedde90f7762d5472a17008cbb"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "1bad5c4d0e157e419a649189ebaa4c60"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "08b812555ddca6eab70d714110292ecd"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "1334eb581ec6916992b79848d6aad3be"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "c8ece994a30f0377591a489d592cb3ba"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "6e6b7ad92854629fc01097d9a58e50f7"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "2e19401dd957ebc8bb18a3ed3c0fa4ec"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "14ee13f1e3461b69bc3af4478cc28606"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "9d02f549205c7f2b3ad28cca74e84698"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "fafc808a76199da95073221abf920515"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "518f0c68d6770ad51ecbd2a1c26d9d5a"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "b315009f1429895193a46504c4b1322c"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "432eb54f9d54b35a499839e8a91df6e4"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "58136fa7cdae0a7cbe4dc3bfee999f5d"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "ae93b8a43bc82853b2b7d1649d5dd34a"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "6ab1f2462aa995d5b6ca7e38790af4ae"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "90863f1db9223af6bcd79af76454c5d1"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "528babb9f0d30513a49c5e8062aca436"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "b01633a7c9b41ff533fed2e23687ceab"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "266bbcc43fecf657cc7e4a0ed0b3f4d7"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "8f6945bd69fa1ee2b2e221bc852fc719"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "5237e9c072a85607f162c45cdbc7bdd3"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "018855d694c78e8705aae19db0c14c04"
  },
  {
    "url": "master/packages/index.html",
    "revision": "9ab987896fb0a89d188d177c9828784a"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "39a570cc11ad2b680dde36872014767c"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "a82b074f1d6d85c8ad5e8ab2f29b9db8"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "b63ca8b97e1aadcf574e55aac59780de"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "ab603cbfa7f093023b3609ba3e0ad392"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "db2cca3b7440fc25d9822fbd9cb46e5d"
  },
  {
    "url": "master/packages/views.html",
    "revision": "d543f4a5acc5c3982e0fa6fb44f62435"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "a444236152e6c451e6d0307bf9ef68f5"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "5b1cad466f7896dca828ff3e55d63437"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "4d789753d699df93aab61bda316816bb"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "f69c900c47f67b14b0f88bb7370548cd"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "24459b5a6df07abe931e177779ec7f62"
  },
  {
    "url": "master/themes/index.html",
    "revision": "7fbf7d4d87f8255bc35385abcb076f2e"
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

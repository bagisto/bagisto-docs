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
    "revision": "72bffbf194016a320e7a5850f956375f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "038b693e79280d0330fd87ed70e19dfa"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "fd709cef8752ca1cc18b4d5668110496"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "e7287df054ad5c22be5955c7a6972c6e"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "7d8cf7e199277ff85afe664de40197e1"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "86adc3eb6eaa96dc0ea2a318d5fc8a6f"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "b61e89ddc64dd891d7a38779decbb508"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cd9f4a74a3e77a9fad1a90a6f6ca2545"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "8faaa97f2419e967f49bd386dc0d6644"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "0264731f6be9566decf2a78fb24a39e1"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "47f6d74f74ee646b26021886f766ef9c"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "6cbf4689e351523c991c0053093755a5"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "4d249333d9b0351edf9d1cb9d7854a50"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "dff60b15a995d7eda5f130c0741a2df5"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "7cc2ed6b971e3540d93927d1cc66d5ab"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "24ba544525d421e64d3280d00bdfc846"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "e4e8681da793ea5d1869563e892fabb3"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "a1be9e42677c0fb214b95976e735ea0b"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "bf8547d2957311dd115a3d400d7a9d63"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "928d1c64fec0673ce5e2678b4bfb7b56"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "10805cf3dcc9be417bf218d637eaf165"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "f611e033c281acc5d2f5d51e3248bf90"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "ae56c179c243f8eed03caaaf205e5579"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5bf967c84a7a5077ade4563229aebd4f"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b15b27a7181fd2d544d4484893ae711f"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "3dc078dcf4a54d6942fb1865191bee88"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "9f692bd7ceb48d23ab05a414fe1e8bc3"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "a2c0ecce931a20312bd36c67f2c44d58"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c81de049548a83392330823bf1716586"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "f85efbbea05c52e11a24d8cfe9dc7891"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "1285057c710673d986927e8fe9a21663"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "7da3fcc6fcc9dbd237a738f3f573ea8d"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "334c070950543e187b2df0d173bcfef0"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "60728e5aba415d4d9b648686e4c50ff5"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "dbbfb96827990daa50525983e41d08ad"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "c27aea385740939e6cd399bebd292bc8"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "16ecad049fd8457e29467b659b0f6ddf"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "3479622723dfbf792f24f67bde322f43"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "33d4b8eb899ba3bda8854983388be310"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "00efb5c3a985f5fe68bcae6a77494db7"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "cfb40cf66f439914e60c6e76e8d3faee"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "1f998f9c324a09d07f82723049640591"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "da8ba8de853aeadf0cff9194d7f5eac4"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "054c9c1b69e8b09cca53a7c4232d7fbb"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "d29b4f9c5e0a6b086e1a6e4902b51eff"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "6fb27ed0186ca5a2d109013b49378bcb"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "06990fc78df02156cd0e419abefd5534"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "92d2dc28c283e363fb6a47e45cb7b0ec"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "0fe1c5cf5e78b0e4afbe5ced0605c46a"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "946feef9a9d806fcceea5302252b3db1"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "ae873c007d0925932a035ce2b980edb3"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "820a16472fd30f7ed3506acb202930df"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "c1ca53c2903532ed5d266cfcbb46b337"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a11da9ccf695f1152705f4ebb1de185f"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "cf34cda40218bd2bb04d46172803ea9c"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "d43a30c985fb425f1315e9a733b18a2c"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "507ea3d11c054f80b03049f740aa5584"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "91401cc2638634d479c630a59b20e407"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "4f65db5041a57d5c09095b941e377459"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "3c4179c2c3cfcd5cad711d59396236c7"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "d4299b8f8ea7299c246946ed725fa22b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8d4e6be3ba9a5b4721416f76a86e39b8"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "ee1350d5769e6b6e02ac3db787e28a0a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "9ef123736e928f5fa6d584a915ca89f6"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "aa9084e823dfd6934e8a41ddffb4ed13"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "c0c455afe8cea74cf187a19a7fc18567"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "3053769c88438620579e97c83c44bce4"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "29df12460c382b6db23e8d9640ac8122"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ce3762aa20d212f4f0d8b659c1e554bf"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "48eaeedd42a71af0bd79d4d49ae98eb7"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "f94466254b0d15534afa64d64f027c59"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "e7fa706ce5011f9d52f35dd1700a9e61"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "fd6b2078f324395c66c04a3f3d195b3c"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c8a3602dcc35fd87bf63db1dbf755575"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "cf0beb769dfd36a05e763540550fab73"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "9c309354b8e4ed933d11e3e9e1595de6"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "0538dad0b5bcecad1c7e193412254925"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "f923746a614227cc8018d546e748d159"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "b9ae093c34f0898a04d8e3923fba0fad"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "146082959583e1628505c1b78b9d3aee"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c3f1c79f936fbfd28e79378200d305d4"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "5ac1af887920c4d964da91f57a07250b"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "26391506391047e44861c641e007ba71"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "3c8507e74a845b0dbd855498838fb2db"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "faeee2ebaac530ad80f77c69b31ca410"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "844f2458ebeb717dc0cad95770acc17c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "a6ff022a444771dbdb257f162f6c0934"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "bc437c900aa19435404e61e8ff3203ef"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "6d238aff78149960417e5c43f6c57745"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "97b4e05b7180b021ec63c2826bd67661"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "16c51363b3a0020b00e1b52fa8efd8f7"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c7e1f13e72cd4ff05352ea861ea42706"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "53cb68943db2487b924a809d5df89cd9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "3d773492b13b96dadcbe705332570476"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "53a8613457c69327a0286b05583f7963"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "063fabe041c15e20be8ffd5a2e7c46e8"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "3cf4f13c5d2bcc6701eeffbcd6d214bb"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c3d85fcb40aa072ae963d40569736cb9"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "b94cbd720b4682e9006a9a3d579077d7"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "d897357e6602fcc2494c3ad9450ab3b7"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "874c9efc280c11ff9356297d837d4020"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "504e3b16ebc23ad84b20075b7e0d7f7a"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "7a583f326767679144936fda4a6e6c0e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "1ac6bb214593561d9980ea3d61d930ed"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "9e9fc355314111f521cc44037c2f6885"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "7710233a6865975e4a9224fef3b780dc"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "c115fad67be209153722d5a6952ad648"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "acbae22c6e3e219d2358581cbc9cf050"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "88c41af9f6c0ef970d39491f6be582c8"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "b349c78ef54a6834346fd27e975a0c0e"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "2a07bbffbe286bd1685e7eac046acbd8"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "8e772eb343525ff4a6ac61d2c2aa11e9"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "468d55ad5ec80df07c4c0cd5f43785fc"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "06a28945a186eb62dfbfb4c76e0f0c9e"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "6beef1c137ed4c222ac677a3ebcb83c3"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "08d91c08920e544f1f532589317bea84"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "1956c694aa4b41e355706ef576ffaa83"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "a11848a06cb8207bfc8bb33b396f08f0"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "c7be219d229baecde1088fee9d5a643a"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e1a21fcb7a5a83add86db4940d90e67d"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "96c4458918b51b2a3e8a6918f0ea4e37"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "1e6bcf09de4e996b148ca6623594829a"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "eb9dc171c787950d0df5362f551ebd44"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "defaa2bb27007633d1a52c4c78601f82"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "c8edd3cb3a15e317b1c9643c02bbadbb"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "d97574422e55e896fb5e6033166bf6e4"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "2e93c707388a3c6d0bccd2e5ac5fe4e1"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "81ada3f0f99da609b3876cb611d70237"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "6a989a1c0798cb4dbfccdd5add06925b"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "7919ca624ae412cd07167f82cfa469c9"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "4a337075a3b759ebcd3db2b2002cb9fe"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "12d2e19dfb4b2b4bc98f7f732fa50806"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "2476c21fa121e367cb3f70f34f361954"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "26e4e92dc9d3999e55e180838d7a4dd0"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "bbdf739340916df0d571345604e5b4c4"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "462ad2347a6da38be7a703e3b236d78c"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "1082eb6bd8c8b8ad1a9d4b9646d79b7d"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "f836a6034eaa683fb79daf5bf6d87430"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "a34a91c9dbf7e9027b1588f1e76125de"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "2536b0648d61178261edd4d2f47bda21"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "38f4f859ccfb24aa6349501a73172cc7"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8c0184bedafb2dd4508b1966ed428066"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "2efb27a6ff0e5eeab62c1af79039f5e6"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "c62aea78650806589640fc3c1e902f48"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "acac730792647f1a5521e0014c916e85"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "7c3f2f009b1fe9e4320bf9d11c23d478"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "8da3888d1ac68d54a122ccee21423d0e"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "d0c255f45118daf08dd1fd2ac95abb85"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "ad36cd865dc68745c15ccbd6c39a7c78"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "7c0514d7f4fd9bdd1fb62b7e0d2ff611"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "89a52ec30e0a5b198ebf88c51a390ecb"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "d1cf1a821f808b9d336ba23e19a63f39"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "b8efc88dff93c8cbf8df659ce854d12f"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "5f051bd6f388b170949053a07923bb58"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "d36a3e9ab537f9fbd99cbc3c8586c12e"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "c2bef14fc04c82d3ee0579acf06c077f"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "8442aceae29238e2b3ea0f4da18b23c0"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "0a7ba0b6b63c824f3e16e2a9b7baf47f"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "a7ecd526037a536c3435c7bee27de12f"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "b038f7a9258df6d1ab32897ede8030fc"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "c03e01b4c2389c1664c5cfc7057410ef"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "d255b3dc1f0dcb643e471964a3588e45"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "dda7dd487e20db17e1f868a33f2d5dcc"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "212298876b4fb9fb4902ef021e649c92"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "f7f79dd30dc3fc78d77df4a3d273846c"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "d4cc59624c95aeaf9202f6891a1d2616"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "c475b365e79f3ccbff96d5ea4ddd3301"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "12c01b45224779816e3509684b3cfe42"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "84b315c64881fe8e7695950c6c9b1a38"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "c5cf7cd2a4cbdf961e5c55749438780e"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "c3abc2a08eb0a409f6720e17368f1b6d"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "975980aa444fc8d432cb9fa36f2c0ecb"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "b3eec03a13a377aecc5a3be423de9f0d"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "f6cb42a30b8efc61018fffa7d30f9060"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "dcd84064c4eb626e2c3e862f37e37b60"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "38b724ea3deab3e8b596b76412d1a16c"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "104547fc235dc5b3b49410b43974e30b"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "dcdaa77630eb3be7e0ec3fc8731cd9e1"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "b51a92bb42d5d01e978393df8836cf53"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "b9b45d47092131fd8a3f15c589415c7c"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "a3d5f538eca9ae37b4289689776684c7"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "8d8ac508b2b293d0d86d445c8caa4ee0"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "3e4304fe709ffff06efe72d17f0880d2"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "30102f294fc69449e61e9d588c612d88"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "f725bb8d448a6dd4b8d0fecf1d5bcf87"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "a62e72b07f06aed7500e065468b5eadc"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "3e9c4647222d014b8734ccf38d2f76a5"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "2481716c5738eb96a0978ddd30192e62"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "3fa43e5f5beb42195921a3dba49572a8"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "3c877dcd6c891d6017db9031f498f128"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "906d87fac18d96c4ea9adb8bd82517c5"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "368b7b85d859743302680c8d96e7196f"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "1725c67547935f335b340d8980fc9559"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "b79f6281203125830a67554a093421bd"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "8a97ab9b939c5f98c90c37ad9dd9614b"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "0f0835463fd20a5f2225dff797e7ffd1"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "438c4bcc69e6ec5e68b60e67802d553e"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "e893d79dace30b9541919888da3a130b"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "ea182b659e8fff6be0316f95530c7a0b"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "685d92ecef6d93ae845820b7e967fe00"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "9f1cdd3e1ef0729f1d519b0b90147112"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "93acbaf5f2771b7269ef5f3e27320dd9"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "07fb193b5cb0e28c007e3155f81ad4a4"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "dc8cdc6f0bf622d917766807ee4de278"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "08cafcd367fa0df30492ee0ac4a4f00f"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "a3ba1d0d5ccbba3026d9af86eb28bb6e"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "e4902dddb580fc838d7860f611900f89"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "5e9eba351f8e66dee81e022b2a88695a"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "aa077f06fa6586d94d8ef37f5bfa858d"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "b665a8eb03c1168333d5d0738b3caea7"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "7be8e95c45f01cf28cc31da590504b79"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "533579e2513607b045a4bdd9481bffde"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "48c5d9da46dc1f2bd55da96361cb50c1"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "f784562f6e30baa40630c8f58d893cc8"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "ceedef2713a9d26a19e47ed107cb7b90"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "f1ef20a4329b5a950de9f75b7f690a6d"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "313c185ded628d5a37257df2e72bf722"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "16492275c907478a6c43596ecb88aff7"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "f14359b55bf4718f149e6c70ebcc0e02"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "b1910f4b93de1e9123b11f7f298d5e29"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "2628323f4bfd4c1c41d2e2f4115e4798"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "c9086d1168df7a0cfb31819a5f3755a3"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "df0e428c6aa24d715b2d5d709fffc626"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "dd5db64581bde0899d6eba9cbd983cd9"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "3640957949035f8aeba8d02a46456771"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "058b0e1ccbfc093172e52405da32997c"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "d9fa0263b0fd67be8fafb385906a170b"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "1332ffda064578f6c55061da8b3e4ed8"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "8619d1631ddf4611ea79c0601145c36c"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "f4630e7d0e15c70176a7b12f7a284938"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "15ed37675e96678b02bb755285a433f1"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "8409143c03309aab4688619330f297be"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "802a555e9dc5858dc8e070014c92d595"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "6cd936ba7419c9c1417c94169bb4e275"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "e6f6f7e42460625b1700675c046479c9"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "27cdd35f075f657c696e1093157f0d7f"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "b61df9c899ef71e06eccbad8edc5c20f"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "ad7066c94f668a835da7895f8b676523"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "39a33cc001d776a305efc6d239f55eb1"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "516cc5ef26e16c8967b3efd048ad97bd"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "e0692c56c2c4a8c61cc17b76989d45e6"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "d2d69a3e31dd413cf8a903f23c579610"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "3ce1e20e2838fc0bb98e8bcd676ee008"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "fd3e21fa0452ddf2681111f66e987a09"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "fa6961a48dd314a0bf69654c1f5a93f2"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "7fc0fc19c88241ccf76c38e0c6123370"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "29f96cfdfe43fbc5af53e13ccde73303"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "11c99af99b0cc0606d4a9237bd05995b"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "a8a875243dae45260f0df92a2e570373"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "99e410ff4a16739dafe99d0cfa3f200b"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "8133e6510fc161c0b75e82a5c161ca73"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "eb57ff10f7d3caf6f240740de109dd7b"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "56fd8ff1380382b194850a11a7852661"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "5b85322963f4ab64f8576d84f23bfe9e"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "69008519c7b332d042460a935b4b55bb"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "2b39e618aaec0867af50488b30faf39a"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "2ac91af5adac1b3616ba0ad729bba285"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "7ae79c96be9169ae9ec033e857fc2cf9"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "ff56c675e045d60d2a8580e1c48a124b"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "de18124353b4f4e1106aff814a98b6b0"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "2b08821465aa8c186f2a6859b0d83d93"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "8b2d43ab7078b4fed486577574b33510"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "b127e4dbc0ea88c0fa2dd6c497f1518a"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "f9502cc64c9cf34c727a70867adfef71"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "bba5a3fb53e1ef9284e3dd5a3691ee19"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "4a1194aa89e85e05110dcae135c68562"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "5d59f42adeffa6ae48bc7a09762d8ea2"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "ad8054003ba9134c67c0d1ddc4bc9099"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "4ffc4ad465e8265c591353e39d33f548"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "edb91aa192d532cbb8553b2411c91d69"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "0c146befaf37224e0fddad3182013dc3"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "0fbe007c5bc0b00bb079b0f49f0e73a5"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "147a47771ced111ff60a4e08f54d8b03"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "16496bf741314b592b9dde7ebd4dbfd8"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "573daea209859be79fedda2c90059700"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "15ad92de594180baf731d7bcd41dbc7b"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "da4819ad1ac833979115a18e38b7f6af"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "ee69b31c082f31dad063e20323642fda"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "1c492159d3eb2570970fa8bfb2f7c465"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "82b798c9c849040329bc0b1c0448bdb6"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "b2fc47a40f3584ad860e8105b1f3b052"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "dd2425da00e51f8f687e5e1ab88ab76f"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "a5768c291a9baa18f84fb1f69afe4f64"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "b1007887f2cc03d62c72c20996d98db0"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "20aadbc05a69c04d955f9de21f61ea80"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "4e936b6632590e95ac3b596bf55566c0"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "bb9e4d6206a5466618b937c6aa85964e"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "9693d8fb642c4f6ba978cfecb67cfce2"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a0276c19f0147829bef3558df9cfeee2"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "89fe3b3b708ddbe1de191dc93953b35e"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "cef4836a23d4a41873f25aba954c188c"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "90b0e298f1a5241ab84c28fad50f7b05"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "3dc0f8777ebbe26fbcc479a1a9ea32a6"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "aa1ec3e00eb843240b3d9822e07c346d"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "2b4c710f5063a13b7ed990a7f3820ec7"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "f5eb89e54144deca85ee0230f4462547"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "2f081af0bc2746c372b80f2e063c3656"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "0d183e5cab9168085c438dd81e26f07b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "9da7d312564d8ef8d115349fc38cc3d9"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "23ea8785e8474b3ea136688aaf94ac1a"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "5c5cbfb7c50a0c1a318b1872dfbb3884"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "3f0dc193b1b81f8c91022aadf32cfc14"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "7dc5c37641ef8e72a708991a2e96b3aa"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "60b5d80960f1d14afaf130e5e3670fd9"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "afc0151932584248c360be73209a9443"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "28841eee06e78c663980ae8948aaa433"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "0ae638cc8b22c817501d85219bb5bff1"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "52c9ba92d184523553b45c66516f3aa9"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "c4e444189dd005c6c248422b765e55aa"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "e197dd6450679e5b9bc6684171850ea3"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "b3ad0aaf4a59839eb91958514ed2064d"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "352fd92cf35b0e64481bf8d4de4e8bc8"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "78ab3b9dceeef39be529ddadcf35150d"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "6d7518140f26acb1480bfe9e782d29ca"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "2cf92263f10cf566565247c73828a5cf"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "ef0aef0038237afb575d3f4b2b371a59"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "e8fce06fb203cafdb256bb7a4b22f947"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "1f2853d1c3e13d34122be387990b89c3"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "0cf1413ff0484275a373352368f0098d"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "d03e704f798b0bb6128f0142660e92f4"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "bd131e00235c65a773da6e03cb8d2bd9"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "6ffb8126d9e441b7a10eb80d50ab51c7"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "63de4baca139b78a7d6f57c510091b7c"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "b11d9441fac454d48f89abac184413fa"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "8db7b8bcb0e68658f8c59a636febfbbf"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "9166166174c767f67f363ceec2e3aced"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "e080e154efbac38df309b14cca414259"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "26073d7b0978caf6ccb76f8af5463fad"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "e07f1eebb2d930abce727d5e97f512b8"
  },
  {
    "url": "404.html",
    "revision": "fd86e732544af35d97e29be4b2364375"
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
    "url": "assets/js/1.32a4a03f.js",
    "revision": "ea1d95853346ebd4d0b944a34cca1da6"
  },
  {
    "url": "assets/js/10.c2f9ce88.js",
    "revision": "f308f64b99681cd0eef8b53b30b523fd"
  },
  {
    "url": "assets/js/100.70b894fa.js",
    "revision": "b1d096bd5c3105fb95595330c840f264"
  },
  {
    "url": "assets/js/101.378d4e1d.js",
    "revision": "f704925beb93c89186983602b3f19e26"
  },
  {
    "url": "assets/js/102.825d5e62.js",
    "revision": "c5f81eb7504fd125f96e827c6a0f4138"
  },
  {
    "url": "assets/js/103.f610fefe.js",
    "revision": "b051e134c095827597c64f857e6bf61b"
  },
  {
    "url": "assets/js/104.152e9cce.js",
    "revision": "f2d45de082902c0209f62595901876b0"
  },
  {
    "url": "assets/js/105.8a27f445.js",
    "revision": "1e9bf2a44dd0c50d7857ed4307f900ad"
  },
  {
    "url": "assets/js/106.0e8f1bef.js",
    "revision": "2a8451653fd147b447ed38967ed5c3a1"
  },
  {
    "url": "assets/js/107.5d466673.js",
    "revision": "f806b90bd9e1bf432aaacc8bedaa1a4f"
  },
  {
    "url": "assets/js/108.05420239.js",
    "revision": "b18d0caf7d8dd05c2cf9f45af106aaf6"
  },
  {
    "url": "assets/js/109.8816e4ea.js",
    "revision": "dd8ecf5ba645da1c3ab702567116e499"
  },
  {
    "url": "assets/js/11.908adb5c.js",
    "revision": "ba9206ae70db3a18c46e4b9f206c42ca"
  },
  {
    "url": "assets/js/110.f9c78488.js",
    "revision": "f036463a13262d0289b6002f4e2f011f"
  },
  {
    "url": "assets/js/111.3b2e0d52.js",
    "revision": "99b3b4a91b31f5fbbc2ab4c7dd7b9bb8"
  },
  {
    "url": "assets/js/112.f859f43f.js",
    "revision": "04a7c927dc210a89b1aca8ba2afb9c9f"
  },
  {
    "url": "assets/js/113.c37bfd31.js",
    "revision": "3b11e25c6b1309db6a7c2fd1899a4b58"
  },
  {
    "url": "assets/js/114.37585659.js",
    "revision": "d55b51ca0beaf5cb3c35d6bf7f3da105"
  },
  {
    "url": "assets/js/115.942dc607.js",
    "revision": "898f775c86cf7a5422ec7e06bfc5bf55"
  },
  {
    "url": "assets/js/116.8268caa8.js",
    "revision": "4b88de0833c40d3bf74b2e499d72fd67"
  },
  {
    "url": "assets/js/117.5e2303c4.js",
    "revision": "6628b5b1a168c54647a246454193468c"
  },
  {
    "url": "assets/js/118.466d9bc1.js",
    "revision": "b6f4ae602999e2508fabaa432f69ddde"
  },
  {
    "url": "assets/js/119.cfbdc1c6.js",
    "revision": "04975b168a5e40e4298e9f1518426797"
  },
  {
    "url": "assets/js/12.9cdb6b75.js",
    "revision": "ff61a87accda47e17a9c3df0cdb35dd5"
  },
  {
    "url": "assets/js/120.916aedf7.js",
    "revision": "44bbd72446640c0c36cd060fb39411d1"
  },
  {
    "url": "assets/js/121.363806c0.js",
    "revision": "e7e715422ab1db246894b6f8118346bc"
  },
  {
    "url": "assets/js/122.76163310.js",
    "revision": "9dc16d6f6eddbac3db6ded21d4796a93"
  },
  {
    "url": "assets/js/123.c1b29b6f.js",
    "revision": "9d7ca7591773e4aa4238dfa6c042b8ee"
  },
  {
    "url": "assets/js/124.8ee9487b.js",
    "revision": "df256aca172dbd5d2c283d588bdf3f9e"
  },
  {
    "url": "assets/js/125.1cce9c2e.js",
    "revision": "4defd1ccc297d657cb7c4ac3176eeb2f"
  },
  {
    "url": "assets/js/126.8d7cd8b2.js",
    "revision": "b2527b2613cf9c121a14eb427c06bcee"
  },
  {
    "url": "assets/js/127.3ee798d5.js",
    "revision": "a9255d490f328926ec5952cd650292ff"
  },
  {
    "url": "assets/js/128.1e388921.js",
    "revision": "719d7a5b63350109f11fa16fe3e1e9ce"
  },
  {
    "url": "assets/js/129.62d57813.js",
    "revision": "a397ba0b012a0cafb7a558bcbaa50309"
  },
  {
    "url": "assets/js/13.a21d1525.js",
    "revision": "0985ee813e01c3adeec2a8ac1c8993e3"
  },
  {
    "url": "assets/js/130.1983016c.js",
    "revision": "30f75688fb41ca516dc9a132326aa6d4"
  },
  {
    "url": "assets/js/131.deacd05b.js",
    "revision": "1967246d393cfde2afa4979ee51a57f5"
  },
  {
    "url": "assets/js/132.607b61b8.js",
    "revision": "43c98e791e5d11534446422f1bc5f850"
  },
  {
    "url": "assets/js/133.2c16be10.js",
    "revision": "9781d2322cbf102d54aff54b14eb572d"
  },
  {
    "url": "assets/js/134.9a260eeb.js",
    "revision": "34c8bdb580c8e8509cf4c27e3f65482f"
  },
  {
    "url": "assets/js/135.f68e6886.js",
    "revision": "afa5868e6a1f4ad9b38409e6dd8b4611"
  },
  {
    "url": "assets/js/136.214bc31c.js",
    "revision": "fd85aa8fdc282b7ebce593d3c5e73dfb"
  },
  {
    "url": "assets/js/137.4c454536.js",
    "revision": "cc2e4232035111eca01f057fba3bb97f"
  },
  {
    "url": "assets/js/138.a87b0ea9.js",
    "revision": "0ffc4beba5d5fc144cd6136f65ba075a"
  },
  {
    "url": "assets/js/139.6ca3f056.js",
    "revision": "93b7e4cbb393cddf2017f18426337b43"
  },
  {
    "url": "assets/js/14.2552a06a.js",
    "revision": "5ecbfb3ee1a6d3acc1d26de98cb015f4"
  },
  {
    "url": "assets/js/140.8dfe05b4.js",
    "revision": "ef0f33330fb9989a808be53621b0ccbc"
  },
  {
    "url": "assets/js/141.e6c6d2f0.js",
    "revision": "b783a98b65b7aa6e4c4d55889078a64e"
  },
  {
    "url": "assets/js/142.4a1cb001.js",
    "revision": "475a2545cc5b2f48d37b8517f6e0eb38"
  },
  {
    "url": "assets/js/143.6784cb9b.js",
    "revision": "53d3e97377966502dc568bb63949be62"
  },
  {
    "url": "assets/js/144.08fa8926.js",
    "revision": "a33c1cf59b378f4bdc645e6dd86a120b"
  },
  {
    "url": "assets/js/145.aff5befa.js",
    "revision": "49bd44bb2a3f1c82df7e432cd8cc4d04"
  },
  {
    "url": "assets/js/146.054fa67b.js",
    "revision": "b6879a3be5abf25ae253c4dd300c7bfc"
  },
  {
    "url": "assets/js/147.31a8d396.js",
    "revision": "025f37c6bba41badd357c05b361f2ef8"
  },
  {
    "url": "assets/js/148.9df2b871.js",
    "revision": "5a92ae5f0c6ddb10f7766e9c2518742c"
  },
  {
    "url": "assets/js/149.5f8876af.js",
    "revision": "7b00c259f37e555da4c0e8e426d7ee8c"
  },
  {
    "url": "assets/js/15.60ec94d9.js",
    "revision": "c6c427754b43a2187ea56bf98d9ff608"
  },
  {
    "url": "assets/js/150.dea7750c.js",
    "revision": "8e6c815703e1ac63fdd73225866b1898"
  },
  {
    "url": "assets/js/151.48e94fa7.js",
    "revision": "cd44018f10ffb93f84e249cc6e6dc41a"
  },
  {
    "url": "assets/js/152.574472a9.js",
    "revision": "73b712662d44fe686ea62c78c4c8a6e7"
  },
  {
    "url": "assets/js/153.f1b8735f.js",
    "revision": "ee96ffc2bb3098a522f4dc2f3ca44226"
  },
  {
    "url": "assets/js/154.cdbb3c25.js",
    "revision": "94546185ad074c3afd7130cd95737f2f"
  },
  {
    "url": "assets/js/155.15a3ee1d.js",
    "revision": "f3917c7657010528ef93f4d4ebb147f8"
  },
  {
    "url": "assets/js/156.8d58fb5b.js",
    "revision": "d9d2b86e09bc7b951678e166f847fb50"
  },
  {
    "url": "assets/js/157.4e68df56.js",
    "revision": "7ab81838ab7a164a655070cad312fde3"
  },
  {
    "url": "assets/js/158.5492238a.js",
    "revision": "b825a25f7a130b5cb2d7ce528f0556c1"
  },
  {
    "url": "assets/js/159.47a0efbb.js",
    "revision": "209088ed7e9ffb3ecdd0904f8392ad30"
  },
  {
    "url": "assets/js/16.cf64637f.js",
    "revision": "75dfd2f7393e62a95964319ffae70b35"
  },
  {
    "url": "assets/js/160.577150f5.js",
    "revision": "05abc02bf144264fe061c4d275592908"
  },
  {
    "url": "assets/js/161.3ec9cfdf.js",
    "revision": "b8b12698c3e65de35f15a0e06f16f224"
  },
  {
    "url": "assets/js/162.e90e35d1.js",
    "revision": "02e350237c167e182556c2dfc0b5bc2a"
  },
  {
    "url": "assets/js/163.9e725a82.js",
    "revision": "8f5947a512981d822d473a049ea42d2a"
  },
  {
    "url": "assets/js/164.8e49bcb9.js",
    "revision": "29ebe86d03982486776794d6affb01d7"
  },
  {
    "url": "assets/js/165.e8abc610.js",
    "revision": "83a89bc7d536c227f6f27d4f1b67bcda"
  },
  {
    "url": "assets/js/166.1a87684e.js",
    "revision": "79e3ccc4a05b93dc4da923a32207859e"
  },
  {
    "url": "assets/js/167.9bb27f99.js",
    "revision": "cb09d469035b099f3075f80234e80115"
  },
  {
    "url": "assets/js/168.fd433a54.js",
    "revision": "cf08b1474c8d07497699dba011358ada"
  },
  {
    "url": "assets/js/169.fadc7ded.js",
    "revision": "27e6f0aa280472498d3ba46e940ac758"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.0f3e9e3e.js",
    "revision": "43c4af8a36a697df8a1c53f5ba2a88fa"
  },
  {
    "url": "assets/js/171.4d44ede2.js",
    "revision": "caa55792bf84b8ee43506503ae765b70"
  },
  {
    "url": "assets/js/172.c60965bc.js",
    "revision": "c53ecfd5437cc59cee41d9f4dd92d8ef"
  },
  {
    "url": "assets/js/173.0f7ea27f.js",
    "revision": "f727b92fe40667f30bb15b1e407ccd2c"
  },
  {
    "url": "assets/js/174.129f4f52.js",
    "revision": "2a48fb0569ff5c2f891343969fa5b3e6"
  },
  {
    "url": "assets/js/175.48e3d4f7.js",
    "revision": "309ee3de3e70958f46d4f5d5e1a5668f"
  },
  {
    "url": "assets/js/176.2a46e06a.js",
    "revision": "c3c38087bfbde69f0eaf540ea4f12c3f"
  },
  {
    "url": "assets/js/177.9a1b3d9a.js",
    "revision": "bc55b171959fb4ba057fc907ea3fdb6c"
  },
  {
    "url": "assets/js/178.ceadd44a.js",
    "revision": "1f8f8126d1ad015c7e0ae52e1eb4fb06"
  },
  {
    "url": "assets/js/179.93ac6227.js",
    "revision": "6240586acee188c42db11faa7a7c3442"
  },
  {
    "url": "assets/js/18.a69246e5.js",
    "revision": "11934cd66385c1cafde48e7ff9b1f987"
  },
  {
    "url": "assets/js/180.0b1f6a9c.js",
    "revision": "9d0479a5fc9714e670b353c030c426f8"
  },
  {
    "url": "assets/js/181.649b49b7.js",
    "revision": "e7303fc90ff0f5de2977a5ea9a4027c9"
  },
  {
    "url": "assets/js/182.50087108.js",
    "revision": "ce7c70c5a0f487345d223f8985265f33"
  },
  {
    "url": "assets/js/183.b25fc6b5.js",
    "revision": "f37fa1689ee11c112541a4ec5e8cba93"
  },
  {
    "url": "assets/js/184.22c4d6d8.js",
    "revision": "b43d777d5d1497c3f79059e9b6015a19"
  },
  {
    "url": "assets/js/185.8fab400b.js",
    "revision": "fe1c5b27da6174af469eeca98699fbad"
  },
  {
    "url": "assets/js/186.e60aa453.js",
    "revision": "1c2025582f42b3b58b61782880bea524"
  },
  {
    "url": "assets/js/187.16f32c06.js",
    "revision": "4dd51a52012f7dd769493a62d63f0e29"
  },
  {
    "url": "assets/js/188.fcd80cc3.js",
    "revision": "38c6024870500575f4c43e0ca834ca31"
  },
  {
    "url": "assets/js/189.31dfaba8.js",
    "revision": "1f98c6a7ccb763ca533f6f6b9f132002"
  },
  {
    "url": "assets/js/19.f11ba04f.js",
    "revision": "f4b2254362681b4b76aaeaf484b53424"
  },
  {
    "url": "assets/js/190.93300342.js",
    "revision": "353d879afd268fd9c00b3237dda60d8d"
  },
  {
    "url": "assets/js/191.4a01ffe4.js",
    "revision": "40d4b80b6d19983afdbca4abf91ee10b"
  },
  {
    "url": "assets/js/192.bf6c725c.js",
    "revision": "4d20b29867cd37b4cf5064a5e4934e68"
  },
  {
    "url": "assets/js/193.a3779dd6.js",
    "revision": "23b9f76cfb98aa7e011820f6c2528173"
  },
  {
    "url": "assets/js/194.7fa74845.js",
    "revision": "e1420b72ada46868ced36b59c59b66a5"
  },
  {
    "url": "assets/js/195.1de2c8f3.js",
    "revision": "13e417cf458072285c739c9f1036babe"
  },
  {
    "url": "assets/js/196.d465dc38.js",
    "revision": "939cad9eddc0d73b36b7d5269be31493"
  },
  {
    "url": "assets/js/197.3b457321.js",
    "revision": "c8a6a0fe1a3cea40abe346c8ebe45a93"
  },
  {
    "url": "assets/js/198.25a1035b.js",
    "revision": "c84acce56084d7b0ea5749de610c9d9c"
  },
  {
    "url": "assets/js/199.b9be31d1.js",
    "revision": "dc1e4b7330c4b79616c2a5e17d76a7d9"
  },
  {
    "url": "assets/js/2.ccfbf4f4.js",
    "revision": "705d5a4a214f6e046edb22e84b6b2b8f"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.33bc497e.js",
    "revision": "810f9be2612fd95550793003c11fcdc0"
  },
  {
    "url": "assets/js/201.bfee85b3.js",
    "revision": "718d39ecc79a8cddb0a95a1778772453"
  },
  {
    "url": "assets/js/202.23a17892.js",
    "revision": "f2931e8e6fca6030ebe579f546a338a3"
  },
  {
    "url": "assets/js/203.70a54679.js",
    "revision": "75163bfb0756df4a59c8ade49c2d81b8"
  },
  {
    "url": "assets/js/204.6931cbe1.js",
    "revision": "8d57fcc95a67bea7bafa0348ea83b80a"
  },
  {
    "url": "assets/js/205.72175769.js",
    "revision": "ed9a2a9563b549258e3c78dfea69418b"
  },
  {
    "url": "assets/js/206.fbcc09e8.js",
    "revision": "f190afc889e8b48cca078cdfbca0054a"
  },
  {
    "url": "assets/js/207.619477c5.js",
    "revision": "2016eb6b80983dbff6599d0f3c27ff40"
  },
  {
    "url": "assets/js/208.273dcfcb.js",
    "revision": "2d4df93cae393ccaa86f6719a7aa8ece"
  },
  {
    "url": "assets/js/209.1f7c8d1f.js",
    "revision": "2588269ae1837264f2c0ff2a6eb8a832"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/210.d6a3f0aa.js",
    "revision": "210a906cbbaa58a495d6f83bdcbf243e"
  },
  {
    "url": "assets/js/211.3a8053cf.js",
    "revision": "668d2c75b1a6a7a19e48b338e0ff7f5a"
  },
  {
    "url": "assets/js/212.0f7b9b77.js",
    "revision": "6e036022c0fec2387857b6d46b01284e"
  },
  {
    "url": "assets/js/213.2bed323e.js",
    "revision": "988a5b59c18ffd486f5e1b542a259b84"
  },
  {
    "url": "assets/js/214.61f6853b.js",
    "revision": "f8ba9e821c899a9fffd44d41fe9fa240"
  },
  {
    "url": "assets/js/215.d32a355c.js",
    "revision": "2371abeb21b6c85bc17ae160f237d129"
  },
  {
    "url": "assets/js/216.0ba03267.js",
    "revision": "b220d2ef96b0553e30432fffdd9854de"
  },
  {
    "url": "assets/js/217.e8d370be.js",
    "revision": "46504a2805bc5e68d2c69ee1ebc9a159"
  },
  {
    "url": "assets/js/218.e358accf.js",
    "revision": "d691e337bfd9a11f13b1a5cc180760b4"
  },
  {
    "url": "assets/js/219.41fb5915.js",
    "revision": "75253a5e2d0758504e6b9a69a03d30b7"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/220.7b657947.js",
    "revision": "aaccbfbe0ab69f2d8082b6eb1e563571"
  },
  {
    "url": "assets/js/221.9c44e8c4.js",
    "revision": "78929fa57bc43d7e5236250fb2cbc1ca"
  },
  {
    "url": "assets/js/222.ea968d4c.js",
    "revision": "a6cd7d7bd53b80a328c80b0665bb1223"
  },
  {
    "url": "assets/js/223.fa839ac0.js",
    "revision": "5e5088ea37e72435a3fcc36a7a47a76f"
  },
  {
    "url": "assets/js/224.7bb7039b.js",
    "revision": "dace2b45d451d04987217d69e4917b12"
  },
  {
    "url": "assets/js/225.138f825f.js",
    "revision": "e6c4533555e5bdab6add3f69acd1f8eb"
  },
  {
    "url": "assets/js/226.5c6b126b.js",
    "revision": "7d88daabee7b84ae9314d89fd39d02ea"
  },
  {
    "url": "assets/js/227.4a57231d.js",
    "revision": "a8a137a3a756a57e2630353f22330f19"
  },
  {
    "url": "assets/js/228.bddf0e4f.js",
    "revision": "3cf8400f56d958759aee9d851944a312"
  },
  {
    "url": "assets/js/229.5779cf18.js",
    "revision": "16b15018899e1a0e5d5b1f168c71b20e"
  },
  {
    "url": "assets/js/23.d517fdb6.js",
    "revision": "41d2ce4a3f295900d7fb0f8ce32dda11"
  },
  {
    "url": "assets/js/230.056a8c7a.js",
    "revision": "9a0dc301f294f672a59f3496310b8d3b"
  },
  {
    "url": "assets/js/231.c5e8dc38.js",
    "revision": "6913694dfe3879ed1dc625030d4146dd"
  },
  {
    "url": "assets/js/232.8c966f53.js",
    "revision": "9a2db1b008fe9924e893393a8707abca"
  },
  {
    "url": "assets/js/233.e3dfe0a9.js",
    "revision": "aa1b4d30fbdc5458195c87c90b179e18"
  },
  {
    "url": "assets/js/234.d382a799.js",
    "revision": "57044066a0f2c3c90b2fd6a9286c4103"
  },
  {
    "url": "assets/js/235.b8398d6c.js",
    "revision": "61807ab06f3c557b7a8c91c5d3c82ae0"
  },
  {
    "url": "assets/js/236.c8b30ecb.js",
    "revision": "9631f79f8a1f77354851a31a7d3f05a2"
  },
  {
    "url": "assets/js/237.e90511a5.js",
    "revision": "6b363ccd7cba6970af093a957cf1c2ad"
  },
  {
    "url": "assets/js/238.1e319f84.js",
    "revision": "8c2732f380c6026edf72af3f5afbb45f"
  },
  {
    "url": "assets/js/239.57806268.js",
    "revision": "529fb336af2ed72242dc1c0925965f86"
  },
  {
    "url": "assets/js/24.b85d52e3.js",
    "revision": "cfb244bae4b8cb7807367837d095fb49"
  },
  {
    "url": "assets/js/240.9d79d975.js",
    "revision": "c6745e173a3ef26c76365e25eb50e75d"
  },
  {
    "url": "assets/js/241.706cebd8.js",
    "revision": "e9d2aab6270b71a3e3e1a56ec5a1799f"
  },
  {
    "url": "assets/js/242.232bfe2c.js",
    "revision": "f46b2dc110756dc30318c2f2a1315872"
  },
  {
    "url": "assets/js/243.ab6ffffa.js",
    "revision": "b16b8ba7b7326ffa8eb3f579adb6cc1f"
  },
  {
    "url": "assets/js/244.1306cbe7.js",
    "revision": "0e82547e2ef22dd56ee0b018b6a8cb9a"
  },
  {
    "url": "assets/js/245.f1d62a19.js",
    "revision": "2325309a28c785664ff2a22ee0ce617f"
  },
  {
    "url": "assets/js/246.a2f02457.js",
    "revision": "19f69d73434d26fadef973d37cd9c8dd"
  },
  {
    "url": "assets/js/247.f17c07be.js",
    "revision": "f2c4612a41883894e273bc6abfdb1383"
  },
  {
    "url": "assets/js/248.92e66385.js",
    "revision": "a8773b6b34a8072a805da779b97b4ec1"
  },
  {
    "url": "assets/js/249.bf58ac78.js",
    "revision": "99f21724a6d1b323cde9d98db25e5d75"
  },
  {
    "url": "assets/js/25.61351133.js",
    "revision": "4ef44c763cdcab50a3cda22c5f5936a7"
  },
  {
    "url": "assets/js/250.1366d807.js",
    "revision": "d5af890a1080e0ac858ca325d6743260"
  },
  {
    "url": "assets/js/251.a2c80a0a.js",
    "revision": "611c6ed2dee7ed180893bd983f45fc70"
  },
  {
    "url": "assets/js/252.320e9dc6.js",
    "revision": "b2b73f2ec35e3c5b3f8a1f8ae64a05b0"
  },
  {
    "url": "assets/js/253.75eb29c9.js",
    "revision": "1db4fc83690aa8271723a495f8c1397a"
  },
  {
    "url": "assets/js/254.9af0882c.js",
    "revision": "50efffae53f9e9a960205cdd98d9519d"
  },
  {
    "url": "assets/js/255.ce54ffae.js",
    "revision": "f27255bdb17d210ca34fe82bc0b90cac"
  },
  {
    "url": "assets/js/256.2d297fab.js",
    "revision": "c7c5d90503cc64d33d2a3eed88d46e3f"
  },
  {
    "url": "assets/js/257.8afb94f0.js",
    "revision": "e5fdbd1fb1b1f7766fb1a8126f050c32"
  },
  {
    "url": "assets/js/258.1d4758c8.js",
    "revision": "7af4aac2deeed76863b04205c31cfd90"
  },
  {
    "url": "assets/js/259.40226cd6.js",
    "revision": "4a0429f5c66f2ae8237d1de04b01af64"
  },
  {
    "url": "assets/js/26.5bef7522.js",
    "revision": "fc32c2d6a59aa893c5c5f198ad56cb96"
  },
  {
    "url": "assets/js/260.e73f4f60.js",
    "revision": "72f3f585930cfac7020095b8bc3e6731"
  },
  {
    "url": "assets/js/261.0653a98d.js",
    "revision": "7ad4ccb47517a029a912c831abffce03"
  },
  {
    "url": "assets/js/262.69c2880e.js",
    "revision": "3cca28123809272a91f012bc478fb549"
  },
  {
    "url": "assets/js/263.2c0ad00d.js",
    "revision": "ca923e4bea9be8be9b0dfeab6389a8c2"
  },
  {
    "url": "assets/js/264.3450a711.js",
    "revision": "6037195dec73d165c40d739c97ab5842"
  },
  {
    "url": "assets/js/265.28c49a12.js",
    "revision": "e50b1e9b3910a998a2ebb037f139f39d"
  },
  {
    "url": "assets/js/266.f22cabe6.js",
    "revision": "56715fdfa74f66d756eb0ab32ecd4b29"
  },
  {
    "url": "assets/js/267.70e34f88.js",
    "revision": "333395b2c94b1120606b49ce0ba37b1b"
  },
  {
    "url": "assets/js/268.a43d7f3e.js",
    "revision": "a4ede588c9dc324c585c041e23780970"
  },
  {
    "url": "assets/js/269.573fd480.js",
    "revision": "1bc615cc711e9fa9fd9205b9fe5fb064"
  },
  {
    "url": "assets/js/27.f50a7a37.js",
    "revision": "f1d00aac38777ca0b125330ab0ff0533"
  },
  {
    "url": "assets/js/270.48d90c33.js",
    "revision": "d9f5d3ae39f6f038786e255748021948"
  },
  {
    "url": "assets/js/271.cdce3280.js",
    "revision": "af99cb5b7a7c8117820904cff42ee03d"
  },
  {
    "url": "assets/js/272.8cfe0041.js",
    "revision": "4689af228e336da1340586a3eb6afb32"
  },
  {
    "url": "assets/js/273.561fc003.js",
    "revision": "c942561bca68c150574e2f113dea0ec6"
  },
  {
    "url": "assets/js/274.fd5d3253.js",
    "revision": "ffa0ae956166d006548f429a1b518d99"
  },
  {
    "url": "assets/js/275.6c03b8cb.js",
    "revision": "d74805af9affc489024730a0d7cbe8a6"
  },
  {
    "url": "assets/js/276.69c4126b.js",
    "revision": "fcab2bdce81d944cee35f9b6634f7be1"
  },
  {
    "url": "assets/js/277.011fddd7.js",
    "revision": "c9a6a7dc6762f3673036ca77e1daec95"
  },
  {
    "url": "assets/js/278.72148862.js",
    "revision": "c32f11a70f672343a2ba10c24f2ceaa6"
  },
  {
    "url": "assets/js/279.6bbf0de8.js",
    "revision": "5195656bb3472dfd17647737f94ed95f"
  },
  {
    "url": "assets/js/28.5250e7e7.js",
    "revision": "2f4e3776a2bbb79faba69394d0a40963"
  },
  {
    "url": "assets/js/280.1de6b2f6.js",
    "revision": "5b93220b26f49169f8f0448fa16f51f1"
  },
  {
    "url": "assets/js/281.f49d6b8e.js",
    "revision": "ad768ec0acf65702444d524eb5186003"
  },
  {
    "url": "assets/js/282.2ad1de57.js",
    "revision": "ec8673f5bed0adfb43a5550cd681763c"
  },
  {
    "url": "assets/js/283.4d569fa3.js",
    "revision": "a4ce0905c5774f8e9e054530b1672923"
  },
  {
    "url": "assets/js/284.4e946fe3.js",
    "revision": "a9bd400f8d415fea433359c1382f620b"
  },
  {
    "url": "assets/js/285.c3617d61.js",
    "revision": "f4eb6a7a67458f2aaba6decf0575e58e"
  },
  {
    "url": "assets/js/286.003c4311.js",
    "revision": "4557fbd42f2f02164425112c17973283"
  },
  {
    "url": "assets/js/287.8afd5977.js",
    "revision": "038e85af1fe9a7fcad2706616f389f90"
  },
  {
    "url": "assets/js/288.f9670798.js",
    "revision": "3fc4dccce84680ba8f0807820e442205"
  },
  {
    "url": "assets/js/289.d9a62096.js",
    "revision": "c06d608f7a56f9a8d4ff544281e13b8f"
  },
  {
    "url": "assets/js/29.83aaecdc.js",
    "revision": "f5342400bae414711b0f680d7fccbb34"
  },
  {
    "url": "assets/js/290.2e49ee68.js",
    "revision": "1074b7584aff5c938d820878aa9c918a"
  },
  {
    "url": "assets/js/291.6cf96b76.js",
    "revision": "113eb08337a4789733c91499eeeadaad"
  },
  {
    "url": "assets/js/292.63e58e76.js",
    "revision": "cf538b58d8a6e751053021224e5fd897"
  },
  {
    "url": "assets/js/293.e39b6508.js",
    "revision": "c8c7fdf41af9cb3364c7a5a5f5e4e6e7"
  },
  {
    "url": "assets/js/294.842a4b4a.js",
    "revision": "17676898b3e76a13f87a6928fd746e12"
  },
  {
    "url": "assets/js/295.3a9b9658.js",
    "revision": "3506f50ead637670443ae8f01a881325"
  },
  {
    "url": "assets/js/296.549be047.js",
    "revision": "b814ce21e9a7ad31c09d6fcf0ec4efce"
  },
  {
    "url": "assets/js/297.c27eff8d.js",
    "revision": "b4a1e4bb6701912f556ea81d779dc240"
  },
  {
    "url": "assets/js/298.5bd38e68.js",
    "revision": "e1619089148414d7ffa6e185d65fa01f"
  },
  {
    "url": "assets/js/299.9d5daecc.js",
    "revision": "a44b15a3abd98322fbd04b465b8b1d4c"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.027ba069.js",
    "revision": "d0cd7f277fe524f6c2247a32443813bb"
  },
  {
    "url": "assets/js/300.5d0de77f.js",
    "revision": "112f63713a2ad7a9cd5c92c25f02ec40"
  },
  {
    "url": "assets/js/301.99cfca3f.js",
    "revision": "dd9b8a68733e30166ae2c889ac49b885"
  },
  {
    "url": "assets/js/302.9fd87884.js",
    "revision": "41bd3353c3fb17c9085a017130632859"
  },
  {
    "url": "assets/js/303.1caa586e.js",
    "revision": "c2ba34fe8bb3ac62171b114c6dd8b455"
  },
  {
    "url": "assets/js/304.78fe3af0.js",
    "revision": "ba005538306074f812f441be8cebd73e"
  },
  {
    "url": "assets/js/305.35f63e12.js",
    "revision": "0b5cfce2b046e576f97f4fb19f88bf07"
  },
  {
    "url": "assets/js/306.4be7a938.js",
    "revision": "9cfb7b326ec2b4bc4e270d9197c8c077"
  },
  {
    "url": "assets/js/307.9f72bc9a.js",
    "revision": "d02d70ed5f55b80f3b2349435eefea00"
  },
  {
    "url": "assets/js/308.ce74581f.js",
    "revision": "4ef92f7e20491e124ecb1d217b001fa4"
  },
  {
    "url": "assets/js/309.cb9df6d8.js",
    "revision": "df4b954b54e7581f54470ba51537e3bd"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/310.87621d6d.js",
    "revision": "987a313f6cf35b99aafea779707c5d9a"
  },
  {
    "url": "assets/js/311.ea416b32.js",
    "revision": "4efac216374f39b3436089b0840df458"
  },
  {
    "url": "assets/js/312.f19bca84.js",
    "revision": "24d8840f78f5b1f89c82a975917e5ecc"
  },
  {
    "url": "assets/js/313.fea6f592.js",
    "revision": "99a926d621746403a1fee36f8adc7e77"
  },
  {
    "url": "assets/js/314.a4e369c4.js",
    "revision": "d7d25a47b707f924c26c59938faf2470"
  },
  {
    "url": "assets/js/315.67d8308c.js",
    "revision": "456293e692d0d92b35abebd619ea553b"
  },
  {
    "url": "assets/js/316.ab895bb6.js",
    "revision": "66a70594ef832a6e053e245a47a72d51"
  },
  {
    "url": "assets/js/317.62a4d304.js",
    "revision": "98fa8b2d6a2cc06b7e55143077cbf9bd"
  },
  {
    "url": "assets/js/318.813defb2.js",
    "revision": "7bad2b3f3938010cd53ab259df84c9f9"
  },
  {
    "url": "assets/js/319.95605a8c.js",
    "revision": "f89d13bcf32631e7ee34461f89304606"
  },
  {
    "url": "assets/js/32.52301937.js",
    "revision": "14399075e36a34993b2c0b9e45b4a26f"
  },
  {
    "url": "assets/js/320.87a69c46.js",
    "revision": "219f321c93819bcd9a604a3f7c97909d"
  },
  {
    "url": "assets/js/321.194ef586.js",
    "revision": "f9900583628f658ed1d23a66608f6147"
  },
  {
    "url": "assets/js/322.c71f4df4.js",
    "revision": "aae1206e6676cf597d0cbdce08b25886"
  },
  {
    "url": "assets/js/323.9332e672.js",
    "revision": "4866ba8fecbb46363539beb122423ed6"
  },
  {
    "url": "assets/js/324.ab5d2f58.js",
    "revision": "b0320ca34017db25faa559db9bdcfe04"
  },
  {
    "url": "assets/js/325.4d7c4f95.js",
    "revision": "bb50a5ba99776443ae09fff4254476f0"
  },
  {
    "url": "assets/js/326.fd1d4039.js",
    "revision": "7f022c133769ebdeaecc979c6fa0e846"
  },
  {
    "url": "assets/js/327.a8c0e2ee.js",
    "revision": "4567c5e1f972810d6283125492dec433"
  },
  {
    "url": "assets/js/328.9b95c37b.js",
    "revision": "0b8a24aa85b17fd836ebe97a39a8f8a5"
  },
  {
    "url": "assets/js/329.e257ebc0.js",
    "revision": "f6940b9b3f84a46f60ba58ff7f032282"
  },
  {
    "url": "assets/js/33.bccd2edb.js",
    "revision": "8d43494be51219770c25a3bd4634a5f7"
  },
  {
    "url": "assets/js/330.618a9d64.js",
    "revision": "d05d94210abba42c245bc7ecec225534"
  },
  {
    "url": "assets/js/331.ae6827d5.js",
    "revision": "aeb1f11c3c0d2f1b939b24b7976e368d"
  },
  {
    "url": "assets/js/332.820869b8.js",
    "revision": "fa48870bdad6796ee3ffe336a807e925"
  },
  {
    "url": "assets/js/333.b0faf742.js",
    "revision": "38b40578ed0015e2d4773271a38872ce"
  },
  {
    "url": "assets/js/334.a7c0cc93.js",
    "revision": "5b5cbb5b27a06c85092825b79a593402"
  },
  {
    "url": "assets/js/335.96fd1bf3.js",
    "revision": "88944dbfb8d12535a9f76dcbea0ad235"
  },
  {
    "url": "assets/js/336.e3cbd015.js",
    "revision": "5f2d783390162e54e4ab985d4edce7f2"
  },
  {
    "url": "assets/js/337.78974e30.js",
    "revision": "5418f2a8088c0a661d299a5f636817b3"
  },
  {
    "url": "assets/js/338.6e9540cb.js",
    "revision": "8697f16b7dcd03d12ace9c608e07512e"
  },
  {
    "url": "assets/js/339.0c42fd96.js",
    "revision": "fad9e2f0259ae429777708b9f2114403"
  },
  {
    "url": "assets/js/34.9d3a912a.js",
    "revision": "9c30a0ac6d0429214a60c1cadeeae239"
  },
  {
    "url": "assets/js/340.b3e8ea67.js",
    "revision": "61236e948f414e9778ca95bf5b02379b"
  },
  {
    "url": "assets/js/341.6c3df024.js",
    "revision": "f40042082d64b1fd07a557c3a28ea4e0"
  },
  {
    "url": "assets/js/342.14c9fc91.js",
    "revision": "e2b24644de7ca976a8cda59e50059766"
  },
  {
    "url": "assets/js/343.b1c6c81a.js",
    "revision": "799817bce81fcaaf0ebf38becbc81aa9"
  },
  {
    "url": "assets/js/344.30faf3b0.js",
    "revision": "63a8fade11d017afcd11672f3b9a58dd"
  },
  {
    "url": "assets/js/345.cab7e116.js",
    "revision": "743150513eb1a59053e438b9391d1d3a"
  },
  {
    "url": "assets/js/346.3efa51a3.js",
    "revision": "37ae1b3680cf968fe8c30a9daa7e8371"
  },
  {
    "url": "assets/js/347.b91ef4c2.js",
    "revision": "90c0c8f0140bbb8886776cb4dc40b9a9"
  },
  {
    "url": "assets/js/348.f0d4335d.js",
    "revision": "d019e3696737ee09fa1ba2eab68f02b6"
  },
  {
    "url": "assets/js/349.df9a2f8d.js",
    "revision": "709efac6b9de1b45a505e148c330f308"
  },
  {
    "url": "assets/js/35.d065d6b5.js",
    "revision": "1f76c07cc544a26287a3944d7853a258"
  },
  {
    "url": "assets/js/350.c7cb56fe.js",
    "revision": "7f6166973ca977e9366b460f78c6e008"
  },
  {
    "url": "assets/js/351.e331f47f.js",
    "revision": "3eba3eea1639d4cb43c625ed2a977da8"
  },
  {
    "url": "assets/js/352.47e66bf9.js",
    "revision": "3cbf52cc5ae56206c1a0539dcf329161"
  },
  {
    "url": "assets/js/353.d6456cff.js",
    "revision": "69e7d4c13ba9527be1ae15ea5435f593"
  },
  {
    "url": "assets/js/354.1c9dcbf9.js",
    "revision": "4116c80b2115018d8241b11d0dc775f2"
  },
  {
    "url": "assets/js/355.3c9f0a1e.js",
    "revision": "9b85db9d1778f61057d216052f0bc296"
  },
  {
    "url": "assets/js/356.2cd60c50.js",
    "revision": "936fc269ce55ed2b8333645e7f579fa3"
  },
  {
    "url": "assets/js/357.d671c536.js",
    "revision": "99795c508324bf9f07455913c8d78f7d"
  },
  {
    "url": "assets/js/358.ac6b39c7.js",
    "revision": "9272bc2268eeafaa9c83a2fe1d395f23"
  },
  {
    "url": "assets/js/359.3910012c.js",
    "revision": "b0b4b28920bc46520d1338f4ba09ae73"
  },
  {
    "url": "assets/js/36.cfd57fb0.js",
    "revision": "e65b4560caacda12b8fddd915583ae76"
  },
  {
    "url": "assets/js/360.050464ef.js",
    "revision": "d8d979d89b020783f4a69e020d08ba57"
  },
  {
    "url": "assets/js/361.56fe2db8.js",
    "revision": "e539a2e53aeda75dddd85f3a7666c47a"
  },
  {
    "url": "assets/js/362.617ec8d5.js",
    "revision": "7ceca92e06c2ce06ba9ab1611d3947b3"
  },
  {
    "url": "assets/js/363.85b5e08d.js",
    "revision": "fafe9e5a265677f9d9055d8fdf7b51f7"
  },
  {
    "url": "assets/js/364.fc945a5b.js",
    "revision": "d2615f4e78dc7cf8bfdc5ac874897b80"
  },
  {
    "url": "assets/js/365.9c61bd63.js",
    "revision": "43d7364e1da224121bc51bf6e7554e52"
  },
  {
    "url": "assets/js/366.e0c2ae04.js",
    "revision": "42dfc1733712218400c7a8a07cbbc860"
  },
  {
    "url": "assets/js/367.c2d2e99b.js",
    "revision": "7968570d817640c1818a834674ac9c9b"
  },
  {
    "url": "assets/js/368.a52016a7.js",
    "revision": "af54966dc12300a42c1d2be33e3a1bda"
  },
  {
    "url": "assets/js/369.00a2751d.js",
    "revision": "8fdeabe4c1437503f7f06050d53a7f59"
  },
  {
    "url": "assets/js/37.ce4865fb.js",
    "revision": "f94e1d09823202ea63e02ef34248e031"
  },
  {
    "url": "assets/js/370.d6f5fa38.js",
    "revision": "84e045cb8703382175b7c14e935e2c16"
  },
  {
    "url": "assets/js/371.adb8a52a.js",
    "revision": "36c1e0c1f99c386025929090656187e5"
  },
  {
    "url": "assets/js/372.22978e5b.js",
    "revision": "c1840040c9c9b273915749196b4fa092"
  },
  {
    "url": "assets/js/373.ffc9b33e.js",
    "revision": "f24125bb26e0b9369b68222388016f71"
  },
  {
    "url": "assets/js/374.ac7c3ab4.js",
    "revision": "0e5ec1623f44f942244a51a4e679cde9"
  },
  {
    "url": "assets/js/375.cdafb81f.js",
    "revision": "557a00f4f5ddf2ecbab23dc7951c0431"
  },
  {
    "url": "assets/js/376.4295f5f8.js",
    "revision": "6eda429e3247fc2ba3275e1a6cf762c1"
  },
  {
    "url": "assets/js/377.45d51757.js",
    "revision": "ed721d4772b32e79de8c9758cda02026"
  },
  {
    "url": "assets/js/378.1bdbcef8.js",
    "revision": "54cdb735e2dfeb737f9b7fee327eccd0"
  },
  {
    "url": "assets/js/379.476f7fdf.js",
    "revision": "eb41e79a5539a0e30b66ec7df37f4551"
  },
  {
    "url": "assets/js/38.075464cc.js",
    "revision": "a586cc2a247893bf0b3a7ee3b3db2de2"
  },
  {
    "url": "assets/js/380.62355f5d.js",
    "revision": "339bf23eeb61e611e92e199a79b451ee"
  },
  {
    "url": "assets/js/381.3c74847a.js",
    "revision": "1fa1887b83dea16bd09f6dfa2e5b74f0"
  },
  {
    "url": "assets/js/382.d6a968d4.js",
    "revision": "724d1c3e74dd4ee7142022d1dc91b061"
  },
  {
    "url": "assets/js/383.15a46b53.js",
    "revision": "faa10135fac1421dc181e59d092701c8"
  },
  {
    "url": "assets/js/384.5a659580.js",
    "revision": "68a22311777e3b126e85ee20091be9e0"
  },
  {
    "url": "assets/js/385.357ebbe1.js",
    "revision": "4d325c38240c2df3e1331517fb8163d4"
  },
  {
    "url": "assets/js/386.4a9d131a.js",
    "revision": "16a793d36ce34909186d4233accaf43f"
  },
  {
    "url": "assets/js/387.820c818a.js",
    "revision": "8f1e9800e4e7724153064e1843099339"
  },
  {
    "url": "assets/js/388.a06c3ba0.js",
    "revision": "4673e8f2804893f0c4fc47f3dd17438b"
  },
  {
    "url": "assets/js/389.09b1b053.js",
    "revision": "0bb2ef31a061adf71e9457e752c8904c"
  },
  {
    "url": "assets/js/39.2215aee7.js",
    "revision": "97684651b4a9d3e3d0c355420730713c"
  },
  {
    "url": "assets/js/390.8d2f5831.js",
    "revision": "89859e1f660475b2c8e6823f90e6a4b3"
  },
  {
    "url": "assets/js/391.41cafbb2.js",
    "revision": "ee1f3b3744895bad3f5112563007a65d"
  },
  {
    "url": "assets/js/392.e4b835fd.js",
    "revision": "6e35ab6f05d013fce723d19a885ebc52"
  },
  {
    "url": "assets/js/393.889f4f65.js",
    "revision": "1896bbd8de70835de2a921b7fbec9cb4"
  },
  {
    "url": "assets/js/394.7fc12731.js",
    "revision": "c74746524acca57bac16cad5182f098d"
  },
  {
    "url": "assets/js/395.42dd062e.js",
    "revision": "3f0e24bf90ea27a8ddab217da94094d9"
  },
  {
    "url": "assets/js/396.49aa909d.js",
    "revision": "b77bd3f6af1a38812b9c09c7110d8cba"
  },
  {
    "url": "assets/js/397.523d25ee.js",
    "revision": "1cf321789fef0570aebce1f8679126e4"
  },
  {
    "url": "assets/js/398.9225939b.js",
    "revision": "5c4faa15ca241a867a8a133a91e64c01"
  },
  {
    "url": "assets/js/399.e3436b9e.js",
    "revision": "89b77f5d8f59e81d39a1dc0b33cd6ed7"
  },
  {
    "url": "assets/js/4.d09ff0cd.js",
    "revision": "2ef18ddbdd4ca54593d8703be907e6fe"
  },
  {
    "url": "assets/js/40.52a7dd21.js",
    "revision": "4fc15103e4b6be0887b187304d13c950"
  },
  {
    "url": "assets/js/400.29b6e18a.js",
    "revision": "f6a07a323c8ed2686b2d68e0c5939e51"
  },
  {
    "url": "assets/js/41.17679801.js",
    "revision": "eb36d41228f058258e68e57c9e959cea"
  },
  {
    "url": "assets/js/42.c550169f.js",
    "revision": "72c0bf351cc90f53df4d5cfca5068b09"
  },
  {
    "url": "assets/js/43.c068bc5c.js",
    "revision": "d4f951823e05f233f09153fd4c95aaed"
  },
  {
    "url": "assets/js/44.55e89fd5.js",
    "revision": "5d3e803bab59c9649a279174158ba678"
  },
  {
    "url": "assets/js/45.4ff9f1e2.js",
    "revision": "d408e1070378a20cecf221cfb3b02630"
  },
  {
    "url": "assets/js/46.0ddecbc5.js",
    "revision": "d78ec72d0fd0a2e11d6429d84b3db0c0"
  },
  {
    "url": "assets/js/47.d97c39b5.js",
    "revision": "ed71e6a7165508fe59627a17d4a803b1"
  },
  {
    "url": "assets/js/48.55d6ded2.js",
    "revision": "f78fc38726c400ff91d2c28fa695428a"
  },
  {
    "url": "assets/js/49.9f3926fd.js",
    "revision": "ac751cf89665ae829cc504e4cccdc6b4"
  },
  {
    "url": "assets/js/5.89fce094.js",
    "revision": "3898fca4ad57ab3fa962d1dac8327705"
  },
  {
    "url": "assets/js/50.69fa0fff.js",
    "revision": "87b465d8585cc31ea11d7556a395ab9c"
  },
  {
    "url": "assets/js/51.a8477b1e.js",
    "revision": "8e54882a63df05670e221794dff75cdb"
  },
  {
    "url": "assets/js/52.6e11f5b6.js",
    "revision": "42253da25dcea76e382aeeee7a935dc5"
  },
  {
    "url": "assets/js/53.16e6ab2a.js",
    "revision": "49158315b61b7987bc1bb4e2de5a3d33"
  },
  {
    "url": "assets/js/54.815db2cd.js",
    "revision": "d20c305e74f103d470b71531c50dd4c9"
  },
  {
    "url": "assets/js/55.d4ebfb33.js",
    "revision": "218f32250fb278962f67299d92f24e68"
  },
  {
    "url": "assets/js/56.938da6ce.js",
    "revision": "1eed5dc6e897e0128ae984804ef67ca5"
  },
  {
    "url": "assets/js/57.7b98c3e0.js",
    "revision": "265a21018b6a3141dddd1350a8670afe"
  },
  {
    "url": "assets/js/58.76a92879.js",
    "revision": "962e902e60cd1a241c053bc0657a1903"
  },
  {
    "url": "assets/js/59.2f59fe3d.js",
    "revision": "20b00fb0d75ce8a91e689c44067cf87e"
  },
  {
    "url": "assets/js/60.427d8077.js",
    "revision": "d67dfb124727e04181be9f896f5d23f6"
  },
  {
    "url": "assets/js/61.3ce35764.js",
    "revision": "a254b05328677714b1d8448c99bd91ff"
  },
  {
    "url": "assets/js/62.1f469aa0.js",
    "revision": "d41ad2fde58a52dbe239b3a03671a06b"
  },
  {
    "url": "assets/js/63.04bb76b1.js",
    "revision": "86652f0122e007a4d6608149da341432"
  },
  {
    "url": "assets/js/64.d3094752.js",
    "revision": "55acad6ef0468281bc05be25f0b57618"
  },
  {
    "url": "assets/js/65.faa07792.js",
    "revision": "3561ec6988827e38b729c23ef30e1fcf"
  },
  {
    "url": "assets/js/66.7fd4ce8c.js",
    "revision": "d6a1d3a9ca1c9af5eeb2c8fe79a1c701"
  },
  {
    "url": "assets/js/67.91d15c4b.js",
    "revision": "ae186a6945d0e03b51350cdd864f2513"
  },
  {
    "url": "assets/js/68.9abdbb14.js",
    "revision": "7fbfecc5aaeb6a172992d86a46bfb05c"
  },
  {
    "url": "assets/js/69.44585444.js",
    "revision": "661b4afdf308e5c0c8726ac85c9f979c"
  },
  {
    "url": "assets/js/70.2de642d8.js",
    "revision": "2be52a2135ce9b955f930473fa51ce9c"
  },
  {
    "url": "assets/js/71.3b797d4d.js",
    "revision": "66af3409798ad39776415c4ba32476d9"
  },
  {
    "url": "assets/js/72.d72a9704.js",
    "revision": "bc2c55cfb761e1eff2412ec678b7dbb4"
  },
  {
    "url": "assets/js/73.96cebcc4.js",
    "revision": "afa66ae8c0a1be02d57e3c948395d49b"
  },
  {
    "url": "assets/js/74.c155d639.js",
    "revision": "a0d9c59839cd1ca4022fceb2770ee3c2"
  },
  {
    "url": "assets/js/75.5bfa514b.js",
    "revision": "40feed895fe5cf8a377e32d5e614f8ea"
  },
  {
    "url": "assets/js/76.1dff3232.js",
    "revision": "0fc0653c113c2b36d0a39b517df12174"
  },
  {
    "url": "assets/js/77.2b82d61b.js",
    "revision": "6b3474665ff89b0b70ad56487139d44a"
  },
  {
    "url": "assets/js/78.491c0d13.js",
    "revision": "a117fecc6cf52940d4796e2fd3b2f257"
  },
  {
    "url": "assets/js/79.ada70191.js",
    "revision": "2d51a6c7e74d868b6e473655d05a4668"
  },
  {
    "url": "assets/js/8.5707c9b8.js",
    "revision": "0ede7d1bc48fa42136d4ce20a496109d"
  },
  {
    "url": "assets/js/80.93696882.js",
    "revision": "acc359b60c685a9e286304605900c552"
  },
  {
    "url": "assets/js/81.36fb0fa3.js",
    "revision": "379c6f0d0e5af3eab68a0b2603d45656"
  },
  {
    "url": "assets/js/82.7559a7c5.js",
    "revision": "7ded240ec0933a55eb7eca0e2f5c9af2"
  },
  {
    "url": "assets/js/83.290eeb7d.js",
    "revision": "4e52b9cf54fda5013e5eec15be447c05"
  },
  {
    "url": "assets/js/84.362a1e19.js",
    "revision": "e3aaff6a607b855a7a6966a3aab5420f"
  },
  {
    "url": "assets/js/85.aa2f4422.js",
    "revision": "d337a217563d48b26f218672d4e0f5e5"
  },
  {
    "url": "assets/js/86.cabae93a.js",
    "revision": "ef66c5589e745f67db187141921d72d5"
  },
  {
    "url": "assets/js/87.b9cd026d.js",
    "revision": "838b0ec81c5dbcd6bea3c891b0209d1d"
  },
  {
    "url": "assets/js/88.85adfa68.js",
    "revision": "3b28681d437f0e15d61f388b81a2eacb"
  },
  {
    "url": "assets/js/89.ee20a6ef.js",
    "revision": "fa482a450e9d92caaa199db4ea5734df"
  },
  {
    "url": "assets/js/9.d393fc5c.js",
    "revision": "ad51d5f8ce79b519c54785745f662b7c"
  },
  {
    "url": "assets/js/90.d424d930.js",
    "revision": "297bf25660d174f5866969c48e517dd7"
  },
  {
    "url": "assets/js/91.786d22d9.js",
    "revision": "6535e6f7f2d868985e5e11dc12f0967a"
  },
  {
    "url": "assets/js/92.ade8a224.js",
    "revision": "a5e17c4c1b6845d584caf71bfc70325b"
  },
  {
    "url": "assets/js/93.ea5a253a.js",
    "revision": "a172ecc0e29c3eb0cdcca55c66fde17b"
  },
  {
    "url": "assets/js/94.dbc9ca36.js",
    "revision": "60d375317c0204553baed5c7ff1f0121"
  },
  {
    "url": "assets/js/95.e9c1b0ae.js",
    "revision": "246ea54973715fb0684d9d68cee7ba8e"
  },
  {
    "url": "assets/js/96.fca66f05.js",
    "revision": "13455a58eaa632d9d4f0ceedf9543530"
  },
  {
    "url": "assets/js/97.c21b30f6.js",
    "revision": "56ef59fc02db8fd4d60891ecb49cc381"
  },
  {
    "url": "assets/js/98.338863b5.js",
    "revision": "a7e1375709c74197206b3c8148b98521"
  },
  {
    "url": "assets/js/99.c000c207.js",
    "revision": "616841c0d755c5f989a6cf9374b10a68"
  },
  {
    "url": "assets/js/app.deeb7967.js",
    "revision": "ed2f9256724babe6b2c4f5c4f3c2028b"
  },
  {
    "url": "assets/js/vendors~docsearch.ccaccf87.js",
    "revision": "f339321af1d8ffc7aa334bd24ffa8864"
  },
  {
    "url": "index.html",
    "revision": "a069c9aea705cb171846672dfb0fc589"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "2e82f867d5da26fc7128a12ba9b15285"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "9b441811683d2673af41f7cdc5d3dc5f"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "0d8980d4f4c17720549a27f3ebccbfd7"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "4f48ddb718a36034edf4eb7533efbadc"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "7712fb7a8516ad3d07cf8ef78cf302c9"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "ee8e024b1ed6065a15759d2ab82b9f91"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "5bf4201e245d3a46758fceb0bcbe402a"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "a9d3dfc6bfdf4af9ee271ee00f5bdf99"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f43f8f097158c04dd69c489133902fa8"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "af4cb2555d3274e44c47c5e694512040"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "c745ee2aec1233c83e9069a581ed4675"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "b29ee2d2af885a31ee99d1517b185776"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "03f3b32456eac825a25b1d4758e849ae"
  },
  {
    "url": "master/api/index.html",
    "revision": "cea78ef544a954daa2ee7d38ea86f68e"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "d2cb39214404404a5e623bacca84d05c"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "28beddcdc98a1f088543a6923d55e078"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "5d1a6f762e7b65dad37b21e8a9c2fdca"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "10e492421fa31120fd38fbb9398ea7bf"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "44ea3458a88d81036b9e7446fd8f53d5"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "b82c22d080c40af16cc99a3ed58e3efe"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "dc43c72f9ebc1f52213da0831458424e"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "bcee99f6968e9bb915f2ac77334a51e7"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "7fca3053a769eb501c57ab387891cf28"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "f467d44923166f56cd0c72adafaf2469"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "770c4a2efa4dfa33bd0862285177f557"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "bacef13c49015b22ddd9cb08750eb809"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "43ead3b6e3c2a350f367ceb00ae12888"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "025b1b4bddb8d3e4453aba0974f2192f"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "ad253954e55bbcaa5454ae4651a407b6"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "88e8ae7506934353597d0c2616931784"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "4e1ad74a2fac0a63a46d5d356a1b0753"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "cee2be75f04b91b6099f2fc1896182f9"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "ecccb53d9912d351215da8b6107dc030"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "6557d902e89e852c527f93d7be4331cf"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "d0d98007329a5069ac0a73f80ca890db"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "2f4d7a085eda1b4488ceb70bb0c7db11"
  },
  {
    "url": "master/packages/index.html",
    "revision": "e4beccd46fa1afcd805128dd0039488e"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "027d335e51bee7cf28af0029e2962d74"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "61aabef9dd31f0996f83e6f59fa307db"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "89df10e0c6f83ecfef6a277bc6f4dcf3"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "80750ab1bc4d9f8da6b1837f6ca44145"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "cd2fc983e3d4aa13988a2805c085ed16"
  },
  {
    "url": "master/packages/views.html",
    "revision": "d0e2835e923e65878ea75fabc53d4aa0"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "3107ac80de58a45180a5fe7dc59afae4"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "0ee07f024cefa0944389c2e9667916d4"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "6372493b7faf96aa44e903b972f0f10c"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "70d980821cb45306a3a02fc8936f02d8"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "31a3b0c48a71034d8efbab8e07b18d94"
  },
  {
    "url": "master/themes/index.html",
    "revision": "f3f6721cdc7960373457eddb7245544a"
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

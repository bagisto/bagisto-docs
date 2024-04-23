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
    "revision": "49eade18727b819f8447ad8b24b91297"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "d0774fa5ea2333a1ba1ea6ce47944ecd"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "5773ae388e30bbd3426a55841137883c"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "63259750e490bbdb07baa4ce3996de7e"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "50a2022c37169fd2dd3a68633c00f628"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "c9c80dc58c46153169a18cf3df308156"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "142f83f90d85bd8f72eccee9dccd774d"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "528ecf8cfd5b1495204b831655a139ae"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "60fe16ef6f7c4014653c7debabc5fd1e"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "6902267ad481551fcd1f8b603bde9138"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "4f3d2b7d93e05bab21e2e0a7e64904b4"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "65cad82e36dd6010fc24a90d8f59609e"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "e203e13551d7517f83d1e07843f07388"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "ad35c254cafe1660638c3e09fb977659"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "42e891b910fca69dc38739edf84e6358"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "73bc55e501505c4f9e809fba96e2b1da"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "adea74d1dc4d30b7a03510e341b4eb1c"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "cea3eaa379d52710b2e3fe3b9d6e8bae"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "9c4cc527dfeed8e10d7b6b4cc6ad2a12"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "e4cfc9e8d429cb477288cb4f05263b43"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "8356134c8abaa7cfae8847cc85857c01"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "486217f4d3877d83dc82a599170b0b93"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "59631698f91294fdc66553a8410f65fe"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "7e66845d50a31b21011496ad7d9bf669"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "e464f975ccec0d14970e6f514f3896a8"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "9e3c96c343780353e86e19f1f8046c16"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "4a0cde0d1e5f0b09082ee61901648eb2"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "ed405bcac012818e7ad8f84c00acb246"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "e653056be60e7a976c16eb227f4d1c74"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "e33f7d77b69103f5c8c06bb9bab06a35"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "b205a7b16d3ba401b39181f8cdde589b"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "16a15e8cbd49bffe75e170513abe5c94"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "a8751328fc9c986e559f683577e999cf"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "183c69b0874a95dfc2d64d7433ab5651"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "744012b1a7df1a03d8c7bdb082d4e46d"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "52dd52a42217f0eb1114904a3c876a2a"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "084c11795b6581aaf17f1d3a630d0817"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "009a474fa4eddec97bbf012a66e3ac09"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "54f0e5dcfaba44ee8f88966ed143f859"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "9614f33561d0c27cee47133003a79c95"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "26aaa46f2cd72421bbdaac3964fc571c"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "2823c6ccbd95a547a120e6fb5325cbe7"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "15653895534c960fc9d774009304c88a"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "1925d82d7635a0405a532ad05ede2ff7"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "bc331289a59bc52df39b45d4e6bd4a23"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "7e26e9098902154ed70a8cd595b7ecc0"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "66a06e8a3d6c9cf688f4b752aa71c221"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "4605a106b48134002556afdf33c74f00"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "ac168c942cd33286569668483e7a8b0d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "a95eaac72c21312fe7e3c84c1c9e1d51"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "077dd24a93f24e09d24ebeccf68e41ce"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "05f7d2773118cc119416cb4d18fecd69"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "fb5f771b304d3a22a4aba94f52d25259"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "d2ba3d5d8c4ad5963cd0a3f15d9a58d5"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "178f55112ba6801fe93eb4c206852f7e"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "c40f04641866dc7ae9ad9627dd727c2d"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "c837f7bfc5125b190a13744f3ec11b42"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0d22ec61aed8ac838b992a306539ecb1"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "8a1ecff4d5042b5ee586ea501d8c02a3"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "7591d3d3767aa0d6c720a7e16bd00c5b"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "64c6ad5c2fbaedd0a0d2e557191def5b"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8f898ab85cc812518ad6fc9cd1075537"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "c378a6da67a7becfb35cdf3dcdbadfe7"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "42ad4599bcdfc656011aa445bad16112"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "51da5c098b28f2023ed681ed23f7adfb"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "9c5433ce09f5a8f144df6c0853ec955f"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "4d857e629f9576b4633cd48496cec231"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "641912a07d3a10dc6f3bc691e6209f35"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "2a72e90667cfe702a0929d9f04489682"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "7f55b73a54467bb770268415c8a3a536"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "5598c131e2ac8a08983a1fdace29de00"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c619bf5e4c26dc2c7e79ed2492bce010"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "6af026ce8107643fa735b93f7d3593ca"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "5bce35f9ed54e14dccf626b7d25e4712"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "face4a916e4971aef43abcbf5d726ae5"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "fc93521061eb995669ee593fd5b4724f"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "3fd64450cbf424060c3c21450bb63996"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "654cdccbaedbb12e40271b7d524c5546"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "29ed59af4668782f306b0735b545c295"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "a3afca74fb1c3229471a0ba6fb128026"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "6380ec10859fc15eaf3c2616b51ef826"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "7f78837ad16d93eb60839e4bd2d064a9"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "1e2c6d772d86774a5bb7cbd298e90466"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "908e492288856518dbb755ced317c766"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4b896a7a1bb5c3b8b8b558721b420854"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "b18f0bcb606fe91ec78ab8e9db3703ec"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "a9136d6de00e3eeeb7aa9a3472210373"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "b707c980ada80d6f80aabb34367e15cc"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "f676b1ee36406fa10887ac12be657ebe"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "1c222ce5e8ece7213b4f28f57364b261"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "e383a6ad1d0ec559daa024d2b67b2473"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "7d0418dc6e790d1e93f47099b5cb96e2"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "b34e0ebc350a2bc93347dfabc214a048"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "f226c32d3ffb3d9c10b99fbf37b068f7"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "eae2737a9256677523f6dc6bc37e4c64"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "0fc675c1f053cc62194153e3851f9362"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "b29004f8aa4f56ab2ec3cbce02b293f1"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "0b128f0c7b92a379bd7f1056aeb33440"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "851b666aaa6e86ac05a5a38cae217d57"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "6dc513c23136b64c8e38dd0c0d5fb30c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "268c046cf99185d4af7611c8e63db0b7"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "64f85001bd1a5015e9ccb21219367542"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "36075d5d06e070cd3af9bacac628638a"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "4df65f562a9a85d7e94302f357c6ad56"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "15ad4340304fce3cbc90b243ec1a7155"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "d45010681108bf3c8f43bd791fde0cd6"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "9bf2e6f4a047695ce1b09ef28b9ca02b"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "5a9826615b274e3530453233d2f63301"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "988151115160fb46ffdec1bfa6f7a897"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "b6eefe10e3974589bbaf6af755458e68"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "7631ff59a69276c5698bca7dd4c1e146"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "c3614972e11fa1c4ac37fabbb531e6e1"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "57a05b98c4d213ec29330a574fdf6566"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "8df7278d27c155d4977a95c27be27569"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "562d87236cfbc9b029f89f37d0904e2a"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "b91e109f6ce53062119a1cb467a7be9b"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "22e5e64d9b0768619066d923f973cedf"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "7f298825ba2aa3e2555b7c256c367807"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "38549eea237d036776220db7e34a910c"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "4df2f28bdfee55c64d78a113b2a66dd6"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "23a010aea483f778a3f8c502d43ec29f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "71aa9f160b9853ce6844f750492220be"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "31951eddf11d1161c8c453b4cda9fa8b"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "cd1d559ff7e1c1c220909b6b2318e24c"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "7195ac37cca3170028dee769abbf99a1"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "87928528ca17e2b6a0daaf794f29f3c0"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "b385e9fd09f455ac0ae9048e09a74743"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "9fd666e1ca2cede8fa4094655d93793a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "cdbf9959731498bdd292ef42a4415a62"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "772409fdc3c642b096ecc03fe2ba9f28"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "f6d9ebb7116a0bf2d9ae55011c0a52d1"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "a2c633cbf89ad2d655996098a838207a"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "91dcb4f83ebf12cad3c2b66eb98c4f45"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "5e2e3cbc94c1b8bb12da6968b3ae1a25"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "038e2bb3fb481cededd83202f7f7d2c2"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "75e39bb8158d46cf0d4031db39c22fa4"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "3ff3b340f029968a48bbfea6974df00c"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "ff73729a04bba2922932f4e8d2a1af1e"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "566d37e4a6e0367fbfb01ef251dbe1c1"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "186408e7eb4f0a01886bd12e05d4b3cc"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0e62c869bd7a0a232a613f266fda6f31"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "47342bd803ecc28d55419ea77d1bdea6"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "fb8037c04eb2c7e2d86204765cfeab85"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "946852712be894b3744b443833a50ba0"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "f13fcb0490aa7de5d3bf285f10000f36"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "d1e59ff3d54c1e4aca563076af42fb4f"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "ab9bc7043b9e6e16434b4b45b01ca1ed"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "c846c482fda63e3643f96db74219c4bb"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "fadac1a44226279e44ad5666741dcad1"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "550e9ae52b25ade7d193f90a7dc4f7e3"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "571deb403cdf1b273595dddbd21ec88a"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "7df60bd40746b6f9575d90be9ca6e92e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "10a08c472b6b7e45e948216eb649937f"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "77a1e76157265795d13dff2f5d51673e"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "64b5d078acc97a51467316c3b9dcfb47"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "b7dea1af2f1c0f4c87e5a4ddfd792fd2"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "9857b94f373ca9031e6842201c7be663"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "e4b4b6bc5e8d412a7ba785a4db7a7856"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "98e4b1528a841490a237b5a2045b3090"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "8b486823ae16addf158147fd03dd6efd"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "a9177b0b04522d52fb7385e50651524b"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "4f60d73a9b4421a560ef0aa7109bdb14"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "c6b52b6d8e8ab7c2ec680f251c8fc0a0"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "9585fc4aed19f387846bcff88b244cbb"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "c8e80036df38209b40d6a9a34b8e8bd1"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "8394aa7c58694f80c81d1bd01505ce86"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "750632dc3ca91579b6d2120960ef6f6c"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "cc83931119ca32faf819cd507a774e81"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "d18d3db236b737794d46543fb8aae947"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e05e9a0d998a109a13c778762cc6dd65"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "6a8daffabe75dec92719af01c9bc95fc"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "814d27c3a95d4c75cc4dcf7891bcdca3"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "e4d8064f6083af320dd2dfb2b00da93a"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "1b0b9de1d68c37fec5c33373345c1527"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "eb41df0b76381fa14a3f09c1961cdbfb"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "0e3bc5f427909866ae18babed215e7c9"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "8b38471104f99cd0b0f3e5ee7ee38e54"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "ce903af449710cc3cb0fc3a9ef00a7f5"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "527a3647ca455f23bf65914f003a779f"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "fe44a753206e003eebcb232a779e29b3"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "307b0853598bdd0c315c6058eac2bc1d"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "a4dff3c7d06bd55cb9b46e49d1eebffe"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "8bae6112e1310423602e3693d1714626"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "71b15b641a1ac1d75d45856e17a493a4"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "c697ebb2fd390fb081a7f860d091f21f"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "9c817e6997c0b9603b1877040e665504"
  },
  {
    "url": "404.html",
    "revision": "aa99783f9a3cd4d2c6ac739f4d2f573a"
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
    "url": "assets/js/1.6dd4f8a7.js",
    "revision": "fb1a346597e13e37b55030d372772710"
  },
  {
    "url": "assets/js/10.552b3bcc.js",
    "revision": "f5d53005c2a7e3b392a2a4a92619e951"
  },
  {
    "url": "assets/js/100.bdd90f9a.js",
    "revision": "51a0aa504994d12f055ca7e5b45670f2"
  },
  {
    "url": "assets/js/101.b89ad18f.js",
    "revision": "f09692687327c9b5240e6e34f5a65f0e"
  },
  {
    "url": "assets/js/102.52292839.js",
    "revision": "ba73dc28f8210a26be2c302c16fea7c2"
  },
  {
    "url": "assets/js/103.abf4dd35.js",
    "revision": "b966a346669eacf3962af089aea9ba9c"
  },
  {
    "url": "assets/js/104.6ad45901.js",
    "revision": "9cc7268a655061f188f05649602d3871"
  },
  {
    "url": "assets/js/105.07cf108e.js",
    "revision": "2634f98b3842fa4b97ba6672c7ed422c"
  },
  {
    "url": "assets/js/106.1ce6acf8.js",
    "revision": "314663fb94ee9d699a803add2e416b39"
  },
  {
    "url": "assets/js/107.86dca3b8.js",
    "revision": "1994488c20c92f4722646049727f75e9"
  },
  {
    "url": "assets/js/108.dbbab42a.js",
    "revision": "22a8ce772aa891d13d00f1310a24b9ec"
  },
  {
    "url": "assets/js/109.95d9b057.js",
    "revision": "01a36d76a58d8d19a6886b7f6d299cdf"
  },
  {
    "url": "assets/js/11.b125821e.js",
    "revision": "d27643bba0d75f18ec4bc184db7af955"
  },
  {
    "url": "assets/js/110.f5f63cef.js",
    "revision": "1e6415cc38ed677b798297bc590d6ae6"
  },
  {
    "url": "assets/js/111.7ecbdb62.js",
    "revision": "7508de357aeab899ff57359b6d167b78"
  },
  {
    "url": "assets/js/112.e873efac.js",
    "revision": "db1554c9c6d9fa069ff9999a997d8c87"
  },
  {
    "url": "assets/js/113.3b5b573a.js",
    "revision": "1db37a75381c52a77b04cbff92290269"
  },
  {
    "url": "assets/js/114.c37baf25.js",
    "revision": "2c947de7b6a264eebeece583cc02f90a"
  },
  {
    "url": "assets/js/115.08ec3f27.js",
    "revision": "91aafb43caeda06a73d4d07c6b588a7b"
  },
  {
    "url": "assets/js/116.f2c6e75f.js",
    "revision": "e141fc694e1c33b4b20fa4c1cf29ae4c"
  },
  {
    "url": "assets/js/117.c4b5f0d7.js",
    "revision": "2dfa07e98aa2917cbf49f3106be69fd8"
  },
  {
    "url": "assets/js/118.66792cdd.js",
    "revision": "0556d85034c8a14512bcafe8fa3e4816"
  },
  {
    "url": "assets/js/119.bbd9894c.js",
    "revision": "29b6eebface9d7a1125ec1f528a1e050"
  },
  {
    "url": "assets/js/12.20029f38.js",
    "revision": "99d3523fd907ab63246343665007212c"
  },
  {
    "url": "assets/js/120.9d12c116.js",
    "revision": "4b3db0a52338d4a82e8ed882db1e6a18"
  },
  {
    "url": "assets/js/121.44bba9f9.js",
    "revision": "732a21d831514241b70d5ad787a20288"
  },
  {
    "url": "assets/js/122.4c53e8ee.js",
    "revision": "4aa0ffd0806f7dcc763959188ecc26e9"
  },
  {
    "url": "assets/js/123.71321d76.js",
    "revision": "bc9c4d0f067b165d27535fdb54397497"
  },
  {
    "url": "assets/js/124.c8230b38.js",
    "revision": "5fdd570b7be08cdd7381cc744278c466"
  },
  {
    "url": "assets/js/125.08af82b3.js",
    "revision": "1c2c1742ab8a2e46d988bff8ae0d5c87"
  },
  {
    "url": "assets/js/126.d594e7c3.js",
    "revision": "7363290ad50660fc5a6f479a4c24ed2c"
  },
  {
    "url": "assets/js/127.7e716221.js",
    "revision": "4371511552dfff4b77a9dd10637d0111"
  },
  {
    "url": "assets/js/128.bc36ea04.js",
    "revision": "463d9d34ce4aaedd73e4b3e72c5061ec"
  },
  {
    "url": "assets/js/129.52f14dcb.js",
    "revision": "ebbbd07d491f3970dd3e2bd50e1210a9"
  },
  {
    "url": "assets/js/13.0c6addab.js",
    "revision": "013f3888a051d4a3bc24aea6e70fef16"
  },
  {
    "url": "assets/js/130.84557197.js",
    "revision": "b72f364ea132cb2e5766b9dba7cf405b"
  },
  {
    "url": "assets/js/131.38488703.js",
    "revision": "169e4a0f95ee46c14d00e13456457e2b"
  },
  {
    "url": "assets/js/132.250529ba.js",
    "revision": "631e2d2e4aaefa7b583ccd9ea8928cdc"
  },
  {
    "url": "assets/js/133.03f20321.js",
    "revision": "87141740ef5f158e9dafb73e78e52e59"
  },
  {
    "url": "assets/js/134.e462b941.js",
    "revision": "e46ffbf7da1bb4aadd1112c228cd931a"
  },
  {
    "url": "assets/js/135.2024aad7.js",
    "revision": "00ba13ea2b993081243e59555bafae35"
  },
  {
    "url": "assets/js/136.e3e94b2a.js",
    "revision": "9f83880884122371a7b364ca7dbf62e2"
  },
  {
    "url": "assets/js/137.1de9f34d.js",
    "revision": "fa8da2a9c674e1d70fa2d357beeb278e"
  },
  {
    "url": "assets/js/138.cae04588.js",
    "revision": "54c6a0dbfb1d54d0958a2edc5fc5f5a0"
  },
  {
    "url": "assets/js/139.bd6bc898.js",
    "revision": "a3890944b97ef24d67bc145426c299b1"
  },
  {
    "url": "assets/js/14.f80c4203.js",
    "revision": "bb7d02611769afc387a78cc0e50265b9"
  },
  {
    "url": "assets/js/140.084cd777.js",
    "revision": "2481ca758dc103a0e93f3415d22a7f54"
  },
  {
    "url": "assets/js/141.62ac0611.js",
    "revision": "1caa347c1e61bd451486ac12014871bf"
  },
  {
    "url": "assets/js/142.2d10ead5.js",
    "revision": "221fe22f7fbc2ff43ec71fadce9a0992"
  },
  {
    "url": "assets/js/143.aafd2950.js",
    "revision": "4778477efccb4a46c638487385cf00d3"
  },
  {
    "url": "assets/js/144.2ec65353.js",
    "revision": "e7979e5aba0dd77cb4e6d05082006871"
  },
  {
    "url": "assets/js/145.bf60ebba.js",
    "revision": "2df6a751bb6940d63b6fd8f53212a0c3"
  },
  {
    "url": "assets/js/146.e7840a59.js",
    "revision": "e053427743b7797776ec3fefc98f7f09"
  },
  {
    "url": "assets/js/147.00dfbeba.js",
    "revision": "d63ac540eedfa6069536d1c1267d0c12"
  },
  {
    "url": "assets/js/148.98dfdba9.js",
    "revision": "0eeb2b7f69aeefc469db226cb66ad471"
  },
  {
    "url": "assets/js/149.aae06cd3.js",
    "revision": "200576371e279952729b3edc382c10f5"
  },
  {
    "url": "assets/js/15.2296da08.js",
    "revision": "fc19334e38725c2fb1182d6f58667359"
  },
  {
    "url": "assets/js/150.57568846.js",
    "revision": "eed98d7edf4a3020f734f9a4e4d529b2"
  },
  {
    "url": "assets/js/151.15b75046.js",
    "revision": "432d85e80acc7435c632ccf5722c03a6"
  },
  {
    "url": "assets/js/152.5a902157.js",
    "revision": "f010cde4c4ef1c5302d4e17fcbd5a69e"
  },
  {
    "url": "assets/js/153.676f8e5c.js",
    "revision": "c3c8fc3097daebdada0af7bd4da0ea06"
  },
  {
    "url": "assets/js/154.5a3eeffb.js",
    "revision": "1069ad72eb819fb384fbc41a32474c5a"
  },
  {
    "url": "assets/js/155.384337c0.js",
    "revision": "3105f7ea69455b45336635a6ee70fa04"
  },
  {
    "url": "assets/js/156.fa05f239.js",
    "revision": "7de95ffce93ea4c28c9baaee5cee7097"
  },
  {
    "url": "assets/js/157.d9444ad5.js",
    "revision": "5253b2fdf5adcd6eae070901876bc519"
  },
  {
    "url": "assets/js/158.59f811d0.js",
    "revision": "159b392022928eb7218c2e486683b30c"
  },
  {
    "url": "assets/js/159.29f85d11.js",
    "revision": "d1511442764bf855be1885e47c3dca49"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.d504781c.js",
    "revision": "442c6ad36481914ae386b85ca74256d1"
  },
  {
    "url": "assets/js/161.6beaf180.js",
    "revision": "e1bacb04a8681b0605b1d1c21e6c9785"
  },
  {
    "url": "assets/js/162.c5b39ccc.js",
    "revision": "64a13b01dea5e3ad06aa689bc4577b6f"
  },
  {
    "url": "assets/js/163.baf5e5b0.js",
    "revision": "0d1f974badae129aac6cc72cee0ccee3"
  },
  {
    "url": "assets/js/164.e0daf473.js",
    "revision": "3f7ca256a2c6bbc62a4bdadd666997a7"
  },
  {
    "url": "assets/js/165.163a570b.js",
    "revision": "fdbf355f6e7311abb93eeac537997431"
  },
  {
    "url": "assets/js/166.8b3ac352.js",
    "revision": "7c919148af6b1c30372b55348fc28c75"
  },
  {
    "url": "assets/js/167.7cae4f53.js",
    "revision": "8fc14bd4358ca3bf485fbbbc1d7e6fa8"
  },
  {
    "url": "assets/js/168.ff971372.js",
    "revision": "0ae28449d5ecf13faedde6cd858a81cc"
  },
  {
    "url": "assets/js/169.8feb1727.js",
    "revision": "7067369b65d8610ba3d20bbe63722d9b"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.9803c10b.js",
    "revision": "b240e3468b695cb5ec7611b146f7e5c2"
  },
  {
    "url": "assets/js/171.26a873fe.js",
    "revision": "8626dbd296f73014f025c1077bdac588"
  },
  {
    "url": "assets/js/172.78d4c85d.js",
    "revision": "0c292ae8678dec7f780bae83d858cba3"
  },
  {
    "url": "assets/js/173.e083ee9c.js",
    "revision": "be4da26be30f8d9b59e4a997f3c9835b"
  },
  {
    "url": "assets/js/174.ad1c434e.js",
    "revision": "01b1281be729c5dbce4a2aacc2812578"
  },
  {
    "url": "assets/js/175.7e6cdf16.js",
    "revision": "a54d95bf14a5f6058a9ab0ccd546732f"
  },
  {
    "url": "assets/js/176.8e4f64bc.js",
    "revision": "e3f81bc6dde32d07e663be9a3d27c9eb"
  },
  {
    "url": "assets/js/177.17cdc538.js",
    "revision": "0922b288fa4482862584ff288e769f02"
  },
  {
    "url": "assets/js/178.d304d162.js",
    "revision": "990776c693ddbd6604dc3e73089134ab"
  },
  {
    "url": "assets/js/179.d87202fd.js",
    "revision": "87480459a5d1dec5f2eb8301fd4ad197"
  },
  {
    "url": "assets/js/18.11879ab8.js",
    "revision": "ecc9d64fb22b48ed3b69b68d19b1fe3d"
  },
  {
    "url": "assets/js/180.5ffbd623.js",
    "revision": "5a9364d057654747de5c17d466fa4cda"
  },
  {
    "url": "assets/js/181.a0a543e2.js",
    "revision": "220a6c9e25d7e2cd03d253824e20a056"
  },
  {
    "url": "assets/js/182.f7af3ac6.js",
    "revision": "f0b890d1fc03e452934b24584c236fef"
  },
  {
    "url": "assets/js/183.e6e32f2e.js",
    "revision": "b68f535171f688e78ce24f20be5f3a15"
  },
  {
    "url": "assets/js/184.bfc7102b.js",
    "revision": "398f7f3d2fcc6c9e73befca0b9d49f82"
  },
  {
    "url": "assets/js/185.5c197bea.js",
    "revision": "f21b005064f7724e59006e26c1f95e7a"
  },
  {
    "url": "assets/js/186.abdc87ea.js",
    "revision": "f8c42fa76f283e5e6d92735b2e9839af"
  },
  {
    "url": "assets/js/187.6145a238.js",
    "revision": "33fe7111bc17d030a81c2fbaa4c50459"
  },
  {
    "url": "assets/js/188.d03f5662.js",
    "revision": "c91d13db1a91ba18eea5008d63d46ec8"
  },
  {
    "url": "assets/js/189.5ba690b1.js",
    "revision": "db94640acb4fd5bd2b43030b3c436a88"
  },
  {
    "url": "assets/js/19.adf9b905.js",
    "revision": "db3407784a9143e05fce1d347d3bb5b9"
  },
  {
    "url": "assets/js/190.8e7ee790.js",
    "revision": "08e333d78a9529663fdd92d679601deb"
  },
  {
    "url": "assets/js/191.89444f08.js",
    "revision": "5e9eb2e5d18903cf1c7eae9a73be9576"
  },
  {
    "url": "assets/js/192.8947b9cd.js",
    "revision": "d72b3db243ebc2c2f9cf9c8affe0dcc0"
  },
  {
    "url": "assets/js/193.2b681115.js",
    "revision": "b68eb3bfec52f7b22d35e31348282938"
  },
  {
    "url": "assets/js/194.44541ba3.js",
    "revision": "cc50eca6853990c6cb192e3d023093a6"
  },
  {
    "url": "assets/js/195.c177244c.js",
    "revision": "cc1d7ff2f70b0f09f6ab32d6913cdf95"
  },
  {
    "url": "assets/js/196.aa36d74f.js",
    "revision": "7d4cf0dbb9fe53b552060aa2c7261c57"
  },
  {
    "url": "assets/js/197.ccb45ac3.js",
    "revision": "60c8db55b1e274ab1f79ec1bc7cb0d84"
  },
  {
    "url": "assets/js/198.e11cc989.js",
    "revision": "f4f3dd40fa5e23b867c055621158620a"
  },
  {
    "url": "assets/js/199.c3758c98.js",
    "revision": "850780cf81f286882de85389fc3457ca"
  },
  {
    "url": "assets/js/2.f6140c89.js",
    "revision": "545c298639f03711be7877a4884063b3"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.61da63cf.js",
    "revision": "2a49521973bc39fea87745e626beff74"
  },
  {
    "url": "assets/js/201.5ca181ba.js",
    "revision": "c33224d4a3ede2b341dafaa4ed75fe27"
  },
  {
    "url": "assets/js/202.fe05721b.js",
    "revision": "4bbc99b911b8eae9466ddf6aef605c02"
  },
  {
    "url": "assets/js/203.e9a4bc50.js",
    "revision": "4afdd9c7759bba42194dd13aa2e0edbb"
  },
  {
    "url": "assets/js/204.891b8bad.js",
    "revision": "74ea3951eb1be3e92174952c74abbd87"
  },
  {
    "url": "assets/js/205.789d734c.js",
    "revision": "a57d5c49a5c053a2d1c90c19afed736e"
  },
  {
    "url": "assets/js/206.4597a4cc.js",
    "revision": "09285e4167a2b253f82dd9e6229f731e"
  },
  {
    "url": "assets/js/207.a65f33fa.js",
    "revision": "062276ea66484efdb7092468b6d471bc"
  },
  {
    "url": "assets/js/208.7d80c584.js",
    "revision": "e4b6c06a718a7c9da6d34d589ae12b1c"
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
    "url": "assets/js/23.086f54d5.js",
    "revision": "f97be441322eae661d7ff383e25fd372"
  },
  {
    "url": "assets/js/24.71c8156e.js",
    "revision": "f48070543d853e5d22e81ded7ef472bd"
  },
  {
    "url": "assets/js/25.95614231.js",
    "revision": "c9a2492445cfb91602bb5c0a6aaff7ab"
  },
  {
    "url": "assets/js/26.c9857e4a.js",
    "revision": "dd4e0a6f1f579c6d33b9802f94376a0e"
  },
  {
    "url": "assets/js/27.607e82cd.js",
    "revision": "b2fdeb7f57b137ad6e512a91fd88b556"
  },
  {
    "url": "assets/js/28.b162cd2e.js",
    "revision": "5ecd8204e4f7d8c26501ae3110d05ac6"
  },
  {
    "url": "assets/js/29.82f49fa2.js",
    "revision": "c689afdc728776f6f20ccb0a00d68808"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.06430d55.js",
    "revision": "79db131047fb5dc7b0f4a926fe754f50"
  },
  {
    "url": "assets/js/31.47a85c87.js",
    "revision": "7c19cd95a8f5cb4dfb3e908834bfa467"
  },
  {
    "url": "assets/js/32.82e49c0d.js",
    "revision": "d224bdd82606b3a6e7eaa4bc74940449"
  },
  {
    "url": "assets/js/33.2abbaec8.js",
    "revision": "b205557625192551dd8b7f154aa380bc"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.2e3262cd.js",
    "revision": "5bac3ebaa657a65d9d162f6ca1d8e11c"
  },
  {
    "url": "assets/js/36.05d08f3d.js",
    "revision": "5d69e91f0e4d436d52495d39031ae561"
  },
  {
    "url": "assets/js/37.d19e632a.js",
    "revision": "a23883a34b3a4b77f649f9ce8780a918"
  },
  {
    "url": "assets/js/38.3e52d466.js",
    "revision": "81a8bbf7807a824dbe6c1a3736982ae6"
  },
  {
    "url": "assets/js/39.6b7524df.js",
    "revision": "46b4ddf71c2b6284558b753406ce3d14"
  },
  {
    "url": "assets/js/4.59fc6872.js",
    "revision": "99f4420391c28e81f0421158f69f8cf8"
  },
  {
    "url": "assets/js/40.24adc795.js",
    "revision": "2b8d60b0a8826e10156722aac73c856b"
  },
  {
    "url": "assets/js/41.95e6a651.js",
    "revision": "40ec00db14a23cd4af30010de862174e"
  },
  {
    "url": "assets/js/42.436a9fd2.js",
    "revision": "f3df89e6d07b6c2c6a8c09ca6b16ac3c"
  },
  {
    "url": "assets/js/43.2ca766b6.js",
    "revision": "f336e39c1ea9a449dfb09384238f3429"
  },
  {
    "url": "assets/js/44.88de813c.js",
    "revision": "c322a0cad10ce7b74b42f54ae344ef92"
  },
  {
    "url": "assets/js/45.394a9308.js",
    "revision": "98a207724d686cf74bd46d107f34277d"
  },
  {
    "url": "assets/js/46.f278c1ec.js",
    "revision": "7ac58d0f366fb062816f50737a4b914b"
  },
  {
    "url": "assets/js/47.13cafa53.js",
    "revision": "8ea8c4b846904a8b7e7411569ff41806"
  },
  {
    "url": "assets/js/48.aed48441.js",
    "revision": "4942ae11c047e4d0d0f3d4c5e242ffe6"
  },
  {
    "url": "assets/js/49.5f9d3571.js",
    "revision": "f652233d2c968f63ea7776d31e4124a2"
  },
  {
    "url": "assets/js/5.ef1926b9.js",
    "revision": "9b080f84114dc3bc552f574a78fdc52d"
  },
  {
    "url": "assets/js/50.8bab96c6.js",
    "revision": "54448b4b0e5b9fd365f0ad7694ca6582"
  },
  {
    "url": "assets/js/51.bcc6cf06.js",
    "revision": "4223f5b6b0bfe2ca1b4c25599f948b6b"
  },
  {
    "url": "assets/js/52.15e21d67.js",
    "revision": "ef17f09546eda0f41a8661baa2282f01"
  },
  {
    "url": "assets/js/53.92cc97fc.js",
    "revision": "73cbb130aafd0038e73b84edcde12785"
  },
  {
    "url": "assets/js/54.4e3522c7.js",
    "revision": "e8eb8c9d142e8e91f74cd151b6c23488"
  },
  {
    "url": "assets/js/55.04977644.js",
    "revision": "95a179d4b7d85c6aea7532d5742ae3ed"
  },
  {
    "url": "assets/js/56.0d7464bb.js",
    "revision": "b5560de1b5be3e57d46db235e8002dc1"
  },
  {
    "url": "assets/js/57.112a1416.js",
    "revision": "79396b3093db7e6f792b476546c971fe"
  },
  {
    "url": "assets/js/58.812ff61d.js",
    "revision": "5412c9a3f7a382ad713674468feeb76d"
  },
  {
    "url": "assets/js/59.75da252f.js",
    "revision": "62dc812c4c518e90591fb3dc9a98869d"
  },
  {
    "url": "assets/js/60.426d246c.js",
    "revision": "bf91682529464dbd2230cf6032c61dbc"
  },
  {
    "url": "assets/js/61.1cf80e8e.js",
    "revision": "991adc6df20e75fe1590691464719c41"
  },
  {
    "url": "assets/js/62.0c1050d8.js",
    "revision": "d05b3a4675f3b53117025e4daa1fa9a6"
  },
  {
    "url": "assets/js/63.a5a98586.js",
    "revision": "1afdb54dd342feb795268f41012a4b4f"
  },
  {
    "url": "assets/js/64.d9c11311.js",
    "revision": "71723cadfa9ecada8f256f3b33e244a5"
  },
  {
    "url": "assets/js/65.5ff00b84.js",
    "revision": "e378d895736ab852e96c10917678aedb"
  },
  {
    "url": "assets/js/66.acd4a62a.js",
    "revision": "25e5747b5cee54e3ac4dee2f3b118327"
  },
  {
    "url": "assets/js/67.7d9c2046.js",
    "revision": "2391c6b792c9aa0f756797d2307e8199"
  },
  {
    "url": "assets/js/68.a395e9e3.js",
    "revision": "adf741065f2177ea33426e4fb7370007"
  },
  {
    "url": "assets/js/69.ee93f041.js",
    "revision": "17118598f010c3435efd61caa7394026"
  },
  {
    "url": "assets/js/70.2fb1db62.js",
    "revision": "f7b215c697b89867a0af6629c8c2d9e7"
  },
  {
    "url": "assets/js/71.4bf17d5e.js",
    "revision": "fc2fc380209dd177fe2a363c6f2d613d"
  },
  {
    "url": "assets/js/72.d400b9fd.js",
    "revision": "6830769cfc53382e7e2aa91ed65da62c"
  },
  {
    "url": "assets/js/73.59848ee0.js",
    "revision": "b07636dac02dcab315d8e201dfae3a0b"
  },
  {
    "url": "assets/js/74.efbfb4cf.js",
    "revision": "bc412c0e48baf6a3a4142591d38b0c13"
  },
  {
    "url": "assets/js/75.98898394.js",
    "revision": "09f9b63509dcb999561a2d6c5d4339b4"
  },
  {
    "url": "assets/js/76.7c4f998d.js",
    "revision": "55d1bfff64e0dc7484a618d8435791d5"
  },
  {
    "url": "assets/js/77.158661a0.js",
    "revision": "ccce876ff9137440be8357057b3c020e"
  },
  {
    "url": "assets/js/78.c00896e6.js",
    "revision": "91b352dfc2660ee47baf1230ff4410bb"
  },
  {
    "url": "assets/js/79.b515d01f.js",
    "revision": "24d89f53391c52270432d628097413e8"
  },
  {
    "url": "assets/js/8.1432828c.js",
    "revision": "7c313c64bcbfd5af6e24f63ea1131eaf"
  },
  {
    "url": "assets/js/80.2b3edbde.js",
    "revision": "9e60963c6e23fbb083fcadfe465c8c37"
  },
  {
    "url": "assets/js/81.eac9e13a.js",
    "revision": "32ca3fec08c73c0248154fee5451029c"
  },
  {
    "url": "assets/js/82.c342b153.js",
    "revision": "c17c417da52b218461f25a80be8f2043"
  },
  {
    "url": "assets/js/83.a4bdbc61.js",
    "revision": "3df3d12dfe23a13a24864a1f17bc81fd"
  },
  {
    "url": "assets/js/84.d931bcf3.js",
    "revision": "2851df041fcdcb4719862335ae508563"
  },
  {
    "url": "assets/js/85.abcac79c.js",
    "revision": "e78caa8df247f90e8235824d6c782da9"
  },
  {
    "url": "assets/js/86.496c9162.js",
    "revision": "b270fdba70c3102d29600a0a467bbf0f"
  },
  {
    "url": "assets/js/87.89094592.js",
    "revision": "68c391cfe70a4ebff5e62934cd1a7a3d"
  },
  {
    "url": "assets/js/88.c89c10c3.js",
    "revision": "7ddf14d07222e5cd19add8f50b3106d6"
  },
  {
    "url": "assets/js/89.23a48a00.js",
    "revision": "798604d592b0ee3115971527e152f1b8"
  },
  {
    "url": "assets/js/9.4e221773.js",
    "revision": "d0c83214e067dcc60c4876398d9bb1cd"
  },
  {
    "url": "assets/js/90.9bb80dd6.js",
    "revision": "40fa7b02c9542a98e23557a243fc85aa"
  },
  {
    "url": "assets/js/91.34a35554.js",
    "revision": "6014f45c364cd297e1b7e1d37ff5a051"
  },
  {
    "url": "assets/js/92.8b333e92.js",
    "revision": "fd818680c2da4c830f17662415fe7683"
  },
  {
    "url": "assets/js/93.42f4ba5c.js",
    "revision": "988d32d665114b5013959aeadc629e80"
  },
  {
    "url": "assets/js/94.9dfd5490.js",
    "revision": "b9a18c831264b8cdf903cb1ef975594c"
  },
  {
    "url": "assets/js/95.0cdbfaa8.js",
    "revision": "0ce4405ac17f172c9a40611ebe1d15a9"
  },
  {
    "url": "assets/js/96.bba263a4.js",
    "revision": "d0790868a4f6e9f302186b02d7535cb1"
  },
  {
    "url": "assets/js/97.ef45a441.js",
    "revision": "abd1f4645f335ef343766cbeda89733d"
  },
  {
    "url": "assets/js/98.0e001acf.js",
    "revision": "78576eb9f1d9a98bb13623b19e5104b1"
  },
  {
    "url": "assets/js/99.ff62f699.js",
    "revision": "486690ea9998a1f7def7e56057eb7a4a"
  },
  {
    "url": "assets/js/app.1c37f8ef.js",
    "revision": "47bac58135d7de4d307bbecc8d633341"
  },
  {
    "url": "assets/js/vendors~docsearch.31b40087.js",
    "revision": "01fa9fd5944a871b5ff6158ef543b0dd"
  },
  {
    "url": "index.html",
    "revision": "f89bd2a8d3916167818a40b32d8196ab"
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

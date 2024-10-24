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
    "revision": "7b377bffaac49d9faf4ba257e82db3d0"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "641db978b78c77edd49f79a3a4e8fb19"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "7d0e5682d642f9b946b147f19bf8c850"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "8d3ddd4bc3b5d211ab27f36047b683a4"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "258adb26c5208ce41c6bfa3e0429a019"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "62ebe7b0d4b933dd533061187b17ef26"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "48fc98c1979bfacf1ccd2ad517329e05"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "86b6320cebcc90aff3f908d00e8e58c9"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "68baaffef0870f62a03d5ace25f4f56d"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "a117604ec588013a13995a63b92f1af5"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "5d883f0fb63824fc6b0855f08d360e32"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "8c9650d36eb0e484aac06c5e440eff86"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "15ba0df208a83b6f218dc010105f327e"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "7afdb7c8754cbcc8fd34e71d9e30dfaf"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "6d03cab155ca7b99c67b4e45413feee5"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "c8d9cd37500fc7916dad0296725c0d2e"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "d3b6e44126e461726e64d68fc7c5c49b"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "f73afb99a0b34abbfc396fef28a19f8d"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "05f072d5a53a2855a02d79e7416335e3"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "d1bc783342923f3acb22434c05f37e54"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "7624f6df1b2bf1da03a7d0bb205508de"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "4617f644528e481ebe2456d6143a3a3a"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "61789cf83ecba6cb222542856d6552e7"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "04f993e3ad4d4dd16e3b3562a0c29af8"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "49b0f9f8b38d62dd8121d09c3379634b"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "b2006708f99a48cd87f990afbabb8e14"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "b8393a440c7777c2551bbb3f358afc99"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "db7789bc6dd43a0a84f4ca9753d47a66"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "a6b777a305fcd17077103b981ba87614"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "701f4e0b6c34d3c811901bca91af8bad"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "cfb88344f6b245d7f20dd0be61a15c13"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "0e4f33b4d9a0f078d6f4c6b3e2edfc0e"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "7d5bf347221bc66110839304695f6a74"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "e65e61d05e4e201f88fcad9c7c34895f"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "b7f2ca9e9c79d4e97abbba0ab80520cb"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "9e63bdc10c8748c19ec4ad89a9ecd79e"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "03e945cc61fed082a03d4d0d2fdf68fd"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "c5599326ab92f45d1797c23d482d825e"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "8cdd0e50815b48cea52db83a8e3211bc"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "4baa3607a724dc5ab1b76f62f6d3b8bd"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "8110ac208d6c1650b3d085fa37f54a94"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "5db2f8ec72440fc584475460f1643251"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "b16d3788c643f1e9880ba87cb1903da1"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "cd8e2bde85cb6b5d538fd20ff372b347"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "4fed292e8f5f65fee1ed4cb4c3038ba4"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "e0463eae3eb80fbd9e9065f7c3602110"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "beb9df78f78f82216b533b41e2ba95a2"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "af783af86f8d9d93044a7ef316887bd8"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "8f547599e1f2c9a5babb0dc821e3636c"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "ed788ac7a86642db1875ce39dec3823b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "bd96a9d4bc470bd0a15be3024ffb302d"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "fa2677a095a384e4a51a95c69445322b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "ff63470eb12184194b6e3c1372a3c444"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "664d417af5bc91bf6b24c9aa9aac79e0"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "ae349db450037758cc9779916b9f542c"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "d264667fbcee7abc829f851fbf19b9bb"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "db24aca55ed2f724a37afadfa4fe90fc"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5babc310e46cf2d312d363bfe975a969"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c994dcec88c3eb2f35b0b018337a15cb"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a3b9471cccabddabe755b23e2295317d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "82bbe217d1896470f89b8ef36b6e0e90"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "c9ae0a80f69810f74807fba8973b0650"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "4ceb54d7409503e512504547f78e2d66"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "01296f96fd26842b7989ef81ef3c987e"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "556d23f9d9abb8fa46e1c5fd58696905"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "2f31767a89b765adadc1fc496e9653c1"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "6614e72395bc9a5532976f4931be8ce5"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "4430f91bed89e064018b5187bd07ea84"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "6e3ec93f67b58f1e24ce98bcf87f4580"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "20f620076a9c0d7e7909debcff397a39"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a47dfa94215d2470f6cbe509ae38f984"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "290b3ae05ce975cc4083ac46aa4d9201"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "1b844cef7d824d4c82d9c23035344c43"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "c583a4200ebf47f50f6339153387d498"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "3ac7215f263467757bd392b6397d95bb"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "95414562ccecf98e72ef2503534ad72d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "d44271ac19f031094b174c41cd7b27b7"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "7de1ef778e47e73e59bfeb5386778511"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "88185a0eeb7d63c406bce762ff6f103b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "fd33190ee6926389cc95fa47860423d8"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "540ec778b59bbf7926922fd47d514cd9"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "55a89ce1ededc5f87f728c5a15928aae"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "12705d7ed1b2e94bcf3368d9cd8fd06c"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "55f488f1f596eb209cc2873a91bf3ec4"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "1876161957ba12e7e0f2c2e0c500e484"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "41ec63c62bad51939ca53b10e19dd682"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "3c74025c9c61ef85ae86e211e1ec48b8"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "0adff76b32a6a88563deaf99c00a4b5b"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "8e4e02a52c9d5f74c5cb2bc14e241de8"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "36648f8ea91dec8005402282a3be1578"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "2ca6610cbf9b564eb1436e521cc7d8da"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "6f75ab79aaf05fadda16ca133cfb64ae"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "31ed6d7e37040d0187899c7e1ad5d88b"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "76e5ef69f02a801f6a664371a31da4cb"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "1d8e3a6ebd248f33ba8b1748bc85f38c"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "6d508644f78648be805b6b42cf3551a3"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "521dc24bc0e8b3f0a057675a2238aca2"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "69c52eb4347b722826d96bd4bccf6b11"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ca497042e26d841e3dc3cbe821f362b6"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "4c563f323afe7b566b3821297ca18612"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "e8289f2fa95e7bd53b240b9b9f36221f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "925661165ad0ac6f7ed42cdba572991d"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "b1bf7c01728d488627240ce871c3677f"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "634018486fb769ab8eb46f30f15535e2"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "8553cd76c0f27a883bdc76f077780e15"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "aed81849466fb54ccba799cd8b82b452"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "e399ebda83768e7e0d1fb5ed3896dc97"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "e8a5bca2bbbc52f82e739a30a13cf4f9"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "987ef154d8bb725c6cd7a33c8ca70064"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ce4cca4a3ff3ed6d28db43d7c52b1bf5"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "a9332b7dbdce3e5be185c7df381bc2ed"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "4c5d0dc2c84375fb156034897659da91"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b9adca29b12f2fe740b3248f8ea160ed"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "3301a36d1b0b651f0be148af32187329"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "53d23e0f145356151db422488d94d5a7"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "716cbaeda6155c0d2c2ea7b8fbd0bb3a"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "62d22353e9ac58c060303f0f00fee40a"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "7ef0473e6759722db5c54b9073c0d6d6"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "741f2b8a1a190d9c6365fea3322ea915"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e7fe4ef733a5cc1f97c791b90477b6ee"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "9bad3ed91aaadf3b7aae69bed2fc3954"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "2eac01af15b55a92f9b6cc777238a029"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "68e7f796ec38342247ae3b8217168a86"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "50a108e26bb104e3c1c0df2d39c98fb8"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "586f0c148b5e7f62dc9943a1803a708c"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "c866cbd019e769f8c63d8b5164e0ee73"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "623a920f05b2fdc459723f3b53c7ccf4"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "9590d8ce725316029cbdc10806bc5ccf"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f6f88e1933cc41d6b10f27c99bcbd60c"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "5d78e6b1e4a690be81ca132918980ab3"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "e4684e26bdbaea7e9f62fb0802c8f3a8"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "54f71d7ae69d3b24a5228a999ff7633d"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "487e8bef3541db60f6768b842834c222"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "2c9671f0cd9cb242a4c0f85a41bc606b"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "91a2d3c0129a54d4e884b15dd0da369e"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "011d3c32fcf485445c6289866259b89c"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "be57a0d73467eb15644eb197ccad4637"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "87244b14efcb043cc579f735d27e867f"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "c877ed115017e3072dc8e96fe3da8f41"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "47ec3797cf7a692eba8a8dc2ade770b3"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "f46484448ec7fa1d422bff6f6ef43398"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5e99f1b58957a8d04fa81174c899451c"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "f8693d8044337dc3120b22a7646ec1d6"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "e6f3588fd7d559d2bc0ae209bf2ac2a0"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "beb71c30bd4536448ad940b45e0ce7c2"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "0031b62b7ebdf8975fdfc7bf69487837"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "fb554e8e0f0eb6363717da9c08ad6e9f"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "d3bd58a9aa136ebffcbc61c56f24b335"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "363aad619541950db6485251f48eac80"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "fa47bd174f0e73b1b555dfbf82e459e3"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "1ad3304a05d0cadc17162398f1f17d28"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "c9967bf17904da9dcf68da7c256bc6eb"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "175b25991a60a25465e08b714da4b3b9"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "f3436244aaa42b84314b4e52371b751a"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "b49f56da6f8012442de6b89624ba6e9f"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "4e624226f76736c545d774a0f30bffd9"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "6785ecc043804b28b3ab8d7b870dbd31"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "a611ff4741ff5700d0623da2c4a13d69"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "d4048b1dfd41d8a35c7f578bef34bfcb"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "881d1ce3d9074153f41b27aaa2e333c5"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "24cfb7365363bd52ad5dd56cb41b7e12"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "95ea9e89c6ae1c548a56d543a9008e55"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "a7ccea60badc39560d59bc2e7b03be67"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "86729ad301e31592917b8d7d8a993f11"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "6fee3ce32bbd5070c34f70bdda801e99"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "897d48fbcbb84428a79aa59e1c5709e2"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "6f05db33e6175d5c1578a1e32502732d"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "b921596d39ef0061618f03790679171c"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "02f5210091e265df04aeaa99aa48b393"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "f9d9c84b02d047fa24fa212f4e84d09f"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "c02fe5c08bb60213df3ea70f9d3697b4"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "c25592fa31f319f0adfdfbae5ad8f26c"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "375bf1bca9471b165e262ed60cd85c44"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "ea3466bb5c506191ff164c34cde0f9c5"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "0eb0815be4014c531a63729180dc0648"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "6b3237f6b6d168cc330a2540cb6cda60"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "db035b7fb285f3d50b071f5ca43554c2"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "255091f2cb0829593e63255451a88800"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "5231d03a6a99328dcced2302b6535115"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "0dd18936f790f1ea539d5f5f9eeb9511"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "b864cc9f209727f6ceabf7d6ff7dc78b"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "8249d0cd186bbb9b4780d6939ee5ad32"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "de36ed01f325598d76c93cb949adf6e3"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "c318ab86f36d06a3f251b8e8e2e10ba5"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "d9eec00eb3a2c00e83cd9d72746e21ee"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "8138810e3a22c2ca313857fcb738ce89"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "4ebeb0dfa5f3d95a64d98261d694233a"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "a096db28861673cf49851f8573b6aeb9"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "f5cd64ba5210a0a102c2093358fec367"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "8b267f611ee4086e0c5b032ff86e8e3b"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "233cebf7c4a2f988d2f5983518b3c02e"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "4a5594719e7e32f07c72a847ee22961f"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "c0e77a92c6ea3d13ff5ee022ba1cce78"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "a1288f175e747e622677e5302ba9f8b1"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "14682327ef7ab2e649f1af9be78738a8"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "ee4ebbc712bfa6a0e9f3d45de1352c36"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "338f086743acebee27f094a3512085b6"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "138779b1e89c537c43d77d9ea944a028"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "814b8824aafc51703390b21fd39284a7"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "e918de6fc83c9698fa5a3e462ef65d54"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "dcee3557c7a3aee5c6da60fdd1aae945"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "0fcfd82fad49c4c7c9d7d3bf9e8cda01"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "ca6fa488624b5966efb4559c84dac71b"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "2953bf59fbb15aac1d3f5976992df540"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "b70218d449ce4d7995dbb0bd46befa0a"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "686a47405073d11b7e288e4773b68637"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "063897ca4e077dacf583fb8d8a0d1894"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "d1998e8ee30e874c84f4428c4099e3f3"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "3a18bc9fcd88267fc98127ee34d443e3"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "c46d191e328613a67fe9da0f4b5ca9a9"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "8596294991d05e81b5197846ce0d492a"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "14f088af667bc68d3d77e613a764ceb8"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "0f27dee13ef47829c9e887e503aad5ce"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "9678543165802297c2f1f0abdd1ec3d7"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "4f534cb79636367a422950b795db5ed0"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "dab72c6947bbcc7d15f659b089848aa6"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "d151311f8d5d2f05e84cfba921ae8280"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "8a28c49bcb88eafcc5e97e7aabf62c29"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "ca3161f7124518dd04eb1e3641c8ab85"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "26eb807cddf69d0c65cfc6811121232a"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "d80b3a1da8513c554b4ee472c73bfb79"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "fffd7584004070956408f26d4da535d3"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "496f5707f9f08655f64112ae2235189a"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "578907c11daf1f2929f8d458379f4e43"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "3a57020ee5e85d739fe6ea1c7341e60c"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "19d99001701a9b7bee348fefdd84f1a1"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "570033a9c694773b8b613395401c24ce"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "19b9bcd06dcb9d6bf978af3e3ba7a0ac"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "86f2d0708ff003385b1580b0a9a55190"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "49ff76e81bd00cd8c9a6f2eddf6aca7d"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "8778117e629318239a232876f7dd99fe"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "b5008959a661c0b87fdc0fededfd3e72"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "72348b26ef6702ebedb151419f9ba75c"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "b22f71d2343b6e78daac7a47b722da8f"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "009d9a03a6d7319afa0786f94e33a45b"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "0d6cfddc6ed88b898006fd3b667f0a4b"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "505a3a6ec76b42660de02e98dae5ce9b"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "de446e1d8614a0365fecce9a58bc5aa2"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "e81ee5202bccfd559bca40ed61c2c922"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0d5c50e2f4e68433014f3059643aa8e8"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "1ea585aafa7338d6f4a010893ccc6dba"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "fef531343729791c48ef891b62c2bd8a"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "a15a16d6ca6ef9efc84b14cb73e2b8e1"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "d92e0205a0bd50e1865c6360d6083280"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "5416509d409f18623ac6d27305c99ef3"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "247ef63de2406f82b18c8fc5808b69b1"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "acfc5e3db979f3e2d46e28a1d1fffb9a"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "404297d7d2ae2e2eba83640aa2da91fc"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "4eba96938821ebbabc73e877f439032e"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "ac17a19581035b910ad7ef2409dc4b9e"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "f9aae46d39717ab644398f0a2e441c11"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "3198068d2fac8f31af36fad92751da29"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "f03787b2a0a26c2a18272c6672b19a47"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "46853e5dab4f16ce3f0c190a2e271713"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "19dcdc6e93e20c792e4e52d13b5d771e"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "f3e0bfc9a01db36f4eacd85e77b9cb72"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "1bde1d21aea2aa57782739920366cfb4"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "7d370237acf3e0cc3c14e61310fbdd14"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "32d7928bafd3585eda17b014c8dc2f4d"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "c7b6eb382e3d344dd5e3b6e689acdbc0"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "4a41607bec47632563dbd853796ca7e6"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "e207e275f89b97313fb465f9cc6afa44"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "dd272d27d43d1e6cd1041ec2a44eae43"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "dfffb07f96e55e4f339eeda9001a620e"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "6ef24377b9c6dc3c8c15a9070240e5b4"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "d746060726ee760f2922fe778ff962ca"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "fb1e26a81d006aa21c07b1c108e1cf30"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "cdf2afab98d5486b40af61b7a2bc67aa"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "cddc4ac16114eed02c6dac5d7499d21d"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "f6f212d6ed77d51423a07af326f2e951"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "37236c49c63ab891a66424b8fd9ac303"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "d266a36067c6fe1617f2e39b6106c1e5"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "ec26c42f09e9295073fc3f56c5a85ed7"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "0e2189f58095ff0c616a218aa3fa0fe9"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "85a0387a284d42db5848aded819220b1"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "e0d23a0f0033bd05a37093ca4b6837af"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "d63e3ef18114bf30fe1d06e875f94db7"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "5b8a2c53cb765ee897fb6d923468c76f"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "c3f2e50d0d4731f421ce8835354e877f"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "1b4364e0ef190114d8151e795f8d6a28"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "2e5f104aa8ad69a0eeecbea8bda4eafd"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "ad699370a7a9039c8c78ea251c143741"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "a431feb197b3fb63342cbf527f3f4f17"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "c73cc5375bbdb6bb88da3ea0a75f7141"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "b330b4272d4bf4c84c1b6a8f2f670b3c"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "8e3e1adb52db39315d759100ced0e00f"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "3656c6a5bb78b2ce57b43c22f1d97843"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "1d9edb035251a0f03ef18609c8cfb7fd"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "a2763873820a4e90298023219ccd3867"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ffce14e293285c76da042e2e23990ce4"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "a656ce08d4d93ab0d78abd1fe99630fb"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "03b39a8afcde6f5eb2eb00498733678c"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "f6a339da45e91deb776f64a6c770e497"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "e965f7a795032faa66d2be2d733e7c38"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "d20c807ce64cce1bb71bc13a8c7e71dd"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "475dd756cf3fc6215ac4d7bb6344baa5"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "9e1d8e9d66084dd1e067cbe2f2143fd7"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "190218d1ae311c8a06e1b5e2f5403db3"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "64f01b3e09752da2f3752719608808ea"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "3149a89a042c7af79185d54b8a7488a6"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "3ead2ed77201bad054d654484e7b9872"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "f41701d4ea8d03b012f0b990c1526b45"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "f6c1883f68cd247b621f38bafb940655"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "8d8151abb4650ecf0ef65a8f56f27369"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "8af379a0fb7b9dd1cbe537702225c19e"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "d6f438fcac67e1c2c9a84e59775d5bbe"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "c8bf47ea2e52ff8256022d6cfe4cc15f"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "375e0859638beb5d9cceaedd2b0be090"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "93a8e27e965490d5ab54761029b05918"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "4cd46e51e92c89f478ed4185eb488a17"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "bb3c1f2895b40a4a2534693648e47380"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "7dd56c2593efe55a11e23e5af18d40af"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "a7a8761d6bd15ec8e43d0bf036851fe5"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "37751c3e82555f18b3e07ffc222c8661"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "fb8837122add08b2d0decefcfae3fba0"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "77ae22c290aa73d19e154ad70b06e575"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "bfaa0ed5344945f7e56e751033fdf360"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "99554aad72550278d01686c9c87c51c2"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "e2028de74a22d343600daf64d1682996"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "2efc48de5ca9671aab60f54d2b0825fe"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "8cb377283375b41b6723a077b30747d1"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "b3c3ace221217e744424f4b6a06a6cfc"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "7ee65d75f10b8211caedb65648bdcb57"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "cd31d77f0bcff26840f122a5e4c20b00"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "dab7389a7569e2ca896292b7c3bec79b"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "c9be9e7b425f819f3acb81e852bbfb52"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "9c2cde707430f803ef071d72317b8414"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "5c34cab29408ef6ab75205f842d812e0"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "93c2fd9c4b633310c200d2fc5550c8ec"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "d585df7ae2861dcc5614fcd08d8d5b44"
  },
  {
    "url": "404.html",
    "revision": "65c0586547a325d7fb752accf7ab51e5"
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
    "url": "assets/js/102.c16d7455.js",
    "revision": "7894c70152da8d15634eb1e2ed043986"
  },
  {
    "url": "assets/js/103.7d749b9e.js",
    "revision": "b88ce408e6d4d701878cffabffbce678"
  },
  {
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
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
    "url": "assets/js/11.46652605.js",
    "revision": "e2dc83ddec90f48019b9e53e5d7f3d21"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
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
    "url": "assets/js/114.465177c3.js",
    "revision": "64c048d9b4a39c92d93414a7a023c10a"
  },
  {
    "url": "assets/js/115.a23b9006.js",
    "revision": "16130061a0a622e8066d27e06e14bcf5"
  },
  {
    "url": "assets/js/116.ab93e486.js",
    "revision": "437a30762c842a43983140d58a6c204b"
  },
  {
    "url": "assets/js/117.c2d7ce24.js",
    "revision": "39ea6741bddc7dd626884ef0b5dbfb13"
  },
  {
    "url": "assets/js/118.6aaf5404.js",
    "revision": "a1eb400022e51711f03a6628ee8f4001"
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
    "url": "assets/js/122.fe671a70.js",
    "revision": "8bfe723f8103c03da3dd5ae2e43652b3"
  },
  {
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.1acbc4f0.js",
    "revision": "f64d5f5ca970c7f696517851ae38fd3d"
  },
  {
    "url": "assets/js/125.e0c09998.js",
    "revision": "1e1fd0953570e8d93c4ca19925ea896b"
  },
  {
    "url": "assets/js/126.69400522.js",
    "revision": "9161c48ffce7f8714e540aa53237e187"
  },
  {
    "url": "assets/js/127.9b65318f.js",
    "revision": "41c2d09d347d223281120fcac828fb6a"
  },
  {
    "url": "assets/js/128.0ca499ae.js",
    "revision": "b68a49934a319f3719d2a18393f384e5"
  },
  {
    "url": "assets/js/129.f952fe85.js",
    "revision": "78886b841fd01e832825f6c1e9cd431a"
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
    "url": "assets/js/131.9c68d6d7.js",
    "revision": "001b5f8f6dccf4c3369a1b13b991a71a"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.f90da093.js",
    "revision": "43c8de1d74ee4789e096fd1c669eb199"
  },
  {
    "url": "assets/js/134.882aa6b4.js",
    "revision": "0413a103a24ae6ef2efc81c19e298f82"
  },
  {
    "url": "assets/js/135.0f552e74.js",
    "revision": "6ed8026cde1663300314e75a66c61efc"
  },
  {
    "url": "assets/js/136.de589c3a.js",
    "revision": "7dec81ecfacc448b05aacfe63d3d47c3"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.72a0465e.js",
    "revision": "e389b4cb225d63bc4d8e149d080dee28"
  },
  {
    "url": "assets/js/139.d9063e1d.js",
    "revision": "169c869eda320086d270bc4f2c14df59"
  },
  {
    "url": "assets/js/14.52b7c015.js",
    "revision": "286bfdab9719ac984aef635da411edee"
  },
  {
    "url": "assets/js/140.f93c48bc.js",
    "revision": "60865fc0af18ec66a13ec56f93e1d314"
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
    "url": "assets/js/144.828a0a88.js",
    "revision": "837a72d21cd30cb37b37f3ae9f818e87"
  },
  {
    "url": "assets/js/145.961f1029.js",
    "revision": "c27c2db487b80715772b599ec2997535"
  },
  {
    "url": "assets/js/146.08c25ac8.js",
    "revision": "4c0577f024ddec7cf5a55c77c9d214af"
  },
  {
    "url": "assets/js/147.be334db5.js",
    "revision": "2eb22999ed19d3c97b0bca8b5d737c61"
  },
  {
    "url": "assets/js/148.7a4fe52d.js",
    "revision": "9b465880f8f2c128b4d1efaf78f61e8b"
  },
  {
    "url": "assets/js/149.ee7b5cdc.js",
    "revision": "82f9afdc8ad946337f4c3e8896aeb18a"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.beca4ce9.js",
    "revision": "58f34fefa4e54737ccf6bda2b99c9293"
  },
  {
    "url": "assets/js/151.9af42afd.js",
    "revision": "7821937c9342410cbff49a2649c59ebb"
  },
  {
    "url": "assets/js/152.a8f32f04.js",
    "revision": "da71cd0ec14b19b5b5c1bfd371102101"
  },
  {
    "url": "assets/js/153.7868c2b1.js",
    "revision": "aefe44b88440025c275f5d704621284c"
  },
  {
    "url": "assets/js/154.337a4a30.js",
    "revision": "353dc9af415e6de4ba764c76a53cec39"
  },
  {
    "url": "assets/js/155.b21fa2c1.js",
    "revision": "83082e8999966391ac17f0d88ae62e64"
  },
  {
    "url": "assets/js/156.d2faeb2b.js",
    "revision": "872ac82ec674db6639a0391bbd17a120"
  },
  {
    "url": "assets/js/157.33f61009.js",
    "revision": "b6fbd34551008e52b4f8160921a81f1c"
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
    "url": "assets/js/162.a64b4dc2.js",
    "revision": "b94b754a25a4eb59ecdc66f7bbf0e88b"
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
    "url": "assets/js/165.80fe025b.js",
    "revision": "ebf056adbf2fc93091a701f10f378874"
  },
  {
    "url": "assets/js/166.7390ca14.js",
    "revision": "950be4f96f2e7b6ad94ef312adc3ea2c"
  },
  {
    "url": "assets/js/167.f9d5b81e.js",
    "revision": "8af1e7660f88edaeae243fb52a180de7"
  },
  {
    "url": "assets/js/168.f03cc50a.js",
    "revision": "01cfec4be4c9744be3e6d10b82dceb9a"
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
    "url": "assets/js/170.beb9e920.js",
    "revision": "78e3712a702a003ac57904c13b8c7fb4"
  },
  {
    "url": "assets/js/171.19af290d.js",
    "revision": "e1c5783d3b5f0539ae84659e4fb17d1d"
  },
  {
    "url": "assets/js/172.c608ec58.js",
    "revision": "8bae9ff0fc70c36a5a96ab2c8235546c"
  },
  {
    "url": "assets/js/173.4227ec6d.js",
    "revision": "7487f2066c9c633ea710592e7e89499a"
  },
  {
    "url": "assets/js/174.e133e165.js",
    "revision": "a5e76a16c875230755b73f96b6afdd89"
  },
  {
    "url": "assets/js/175.a049439e.js",
    "revision": "e9889ae72871b050b5d383b6b77cc85d"
  },
  {
    "url": "assets/js/176.2df4bfdd.js",
    "revision": "b7aa1052cbe8b2914633d0a3231e5465"
  },
  {
    "url": "assets/js/177.54c5b157.js",
    "revision": "4429f4cb857654de3703aa2ea414a706"
  },
  {
    "url": "assets/js/178.a6cbcdb2.js",
    "revision": "b18b027f8e59d04d373946ca5d91752d"
  },
  {
    "url": "assets/js/179.4dd1d482.js",
    "revision": "6500eb7f72eddaa460419f68c66aa83a"
  },
  {
    "url": "assets/js/18.b5542db7.js",
    "revision": "e0b8d59e4b1ef2e6cbcdbd41e6e6ba9b"
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
    "url": "assets/js/182.ed443d1a.js",
    "revision": "3abb81801f2f5e22e2e0a237efa6d4d4"
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
    "url": "assets/js/185.447237a3.js",
    "revision": "c437a61ff9cd5d17871c3ef45852cca3"
  },
  {
    "url": "assets/js/186.b94c0ca2.js",
    "revision": "d43c357caf4d261ec8b5479b55c4070c"
  },
  {
    "url": "assets/js/187.5bee7456.js",
    "revision": "573bfb0fc4d3c004a914b1b5e55ad8ee"
  },
  {
    "url": "assets/js/188.c463a603.js",
    "revision": "0802b2de7b39e53777e9c4f9bb43d89d"
  },
  {
    "url": "assets/js/189.7bc3025c.js",
    "revision": "52853d24a7caad8f1f1f8c75af7cd045"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.bc8d2ea9.js",
    "revision": "219ae1bb3b222e510da6162775b2bc01"
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
    "url": "assets/js/193.cf2886c3.js",
    "revision": "86dcd8c8408cb99e9f42ceb00c674cbb"
  },
  {
    "url": "assets/js/194.dd8283dd.js",
    "revision": "e17a528386fad36321f7947f3f72e23b"
  },
  {
    "url": "assets/js/195.7bf3bb3a.js",
    "revision": "24d1f2a1a7c3f9aaadd7d47fc9737f7e"
  },
  {
    "url": "assets/js/196.90c28467.js",
    "revision": "95581c7a2d7df2a8a742fbfe937fb883"
  },
  {
    "url": "assets/js/197.b662b50c.js",
    "revision": "3d8b132e06f7a95c4e05084cb955f81f"
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
    "url": "assets/js/200.6ed96aa1.js",
    "revision": "8cbbb2d58d1553dbe1e83921cdb55c30"
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
    "url": "assets/js/208.25f866ab.js",
    "revision": "d8c47a321a326ed87a304b9f89d06699"
  },
  {
    "url": "assets/js/209.b24b2ffa.js",
    "revision": "c100bc160c41a87b115bad611dcdb0c8"
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
    "url": "assets/js/214.ba063ac0.js",
    "revision": "8c28484719678451aa9c0a696dc33057"
  },
  {
    "url": "assets/js/215.b2e1395c.js",
    "revision": "2454b89fc7d2f7c431a5ea207def88d1"
  },
  {
    "url": "assets/js/216.22d85d43.js",
    "revision": "c6676a2c8165df9c7592ed6ab9c916ee"
  },
  {
    "url": "assets/js/217.d2b1fd07.js",
    "revision": "a98b5665eae7aeda07b95cfa25d28281"
  },
  {
    "url": "assets/js/218.e6c242d0.js",
    "revision": "2341a7853984818da6ae8a787681d947"
  },
  {
    "url": "assets/js/219.29a624b7.js",
    "revision": "e3129cee20240fcc7cfc342446bf5734"
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
    "url": "assets/js/221.1259f097.js",
    "revision": "94305f35878a1a40bf913c76ae32d73f"
  },
  {
    "url": "assets/js/222.1d2e14f3.js",
    "revision": "3b3c34462916615070ece973e224c9af"
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
    "url": "assets/js/225.2ef324e8.js",
    "revision": "b5cb8a9864568a13eca3d407c5d1b760"
  },
  {
    "url": "assets/js/226.d8ccae80.js",
    "revision": "9b3ffda41d91b28ecada32ade06395a6"
  },
  {
    "url": "assets/js/227.18bbe3b0.js",
    "revision": "097b03d3897497fb145fd6c7a585b263"
  },
  {
    "url": "assets/js/228.95009891.js",
    "revision": "608a61d4b2ab9b8397cc5afd081411b1"
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
    "url": "assets/js/230.38a89a0a.js",
    "revision": "b0ed9e2b7d70a7d4cc687ab25637330a"
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
    "url": "assets/js/234.917ba950.js",
    "revision": "dbfa9a0d6b560fc3d716c70bb96d87db"
  },
  {
    "url": "assets/js/235.def638e9.js",
    "revision": "555d17e2ad8752d0b95c951fd3022377"
  },
  {
    "url": "assets/js/236.c652352f.js",
    "revision": "8e688b0882960db0db968f05943ab75d"
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
    "url": "assets/js/239.27b59e9f.js",
    "revision": "6c8db9e2275c99f33377e011afee182a"
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
    "url": "assets/js/241.001cdedd.js",
    "revision": "0bcad0269d34e3d115abf3a0407868a0"
  },
  {
    "url": "assets/js/242.dfdba9dc.js",
    "revision": "0920bac067bf802a120986d8a9194028"
  },
  {
    "url": "assets/js/243.0318154c.js",
    "revision": "7e2f8676d7e76bd5a6e406cdf229983a"
  },
  {
    "url": "assets/js/244.421e2da4.js",
    "revision": "8b38269665a051b9d6ec5752e3f3e7a1"
  },
  {
    "url": "assets/js/245.32d05108.js",
    "revision": "94b631ed8e27da393b27dad5600761ab"
  },
  {
    "url": "assets/js/246.30577e9e.js",
    "revision": "61fe378c93fdbe82573dc3689b780720"
  },
  {
    "url": "assets/js/247.f2f006ae.js",
    "revision": "2798434c9f658465bbc45e511051376f"
  },
  {
    "url": "assets/js/248.d0eca37c.js",
    "revision": "415174e4c7ddaf0edd08cdc5d871f07b"
  },
  {
    "url": "assets/js/249.7602d5d8.js",
    "revision": "6fe529a99518fbe5a1a0a82adebc4100"
  },
  {
    "url": "assets/js/25.6c2742ab.js",
    "revision": "bbda7bc66f63b24c442f3b7cdfe17ac2"
  },
  {
    "url": "assets/js/250.d199dd1f.js",
    "revision": "5dbd184f53f9c70f82b4587a5ffcb924"
  },
  {
    "url": "assets/js/251.a37d5c46.js",
    "revision": "1178bb78c53701634cb03fc5956a3396"
  },
  {
    "url": "assets/js/252.66a56e26.js",
    "revision": "a3e2a8dd1d93392f7149b64571d5e19a"
  },
  {
    "url": "assets/js/253.d5358fb8.js",
    "revision": "ba3485aeb4c985522b15a0fdbab3d6d3"
  },
  {
    "url": "assets/js/254.bdffea87.js",
    "revision": "4f58438e258f36596074ad0eb7392078"
  },
  {
    "url": "assets/js/255.22c30c46.js",
    "revision": "431837078f21815c29a19515f98aeed3"
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
    "url": "assets/js/258.aba68591.js",
    "revision": "bbf450a1482ac0c4545ea57d7e365211"
  },
  {
    "url": "assets/js/259.56c599b1.js",
    "revision": "9c7cf55b13f21b1fd1ea0177432a9b45"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.539a627b.js",
    "revision": "120dfafb22f6405097fdb8bbe8be7b78"
  },
  {
    "url": "assets/js/261.700a7d37.js",
    "revision": "ef6531ee59f9d173fd07cb5660ec1f76"
  },
  {
    "url": "assets/js/262.aebc1fed.js",
    "revision": "af019183f119184c020b85f97edeb25d"
  },
  {
    "url": "assets/js/263.794b4ade.js",
    "revision": "6d150d2bb48f51c21be763ab75e2f435"
  },
  {
    "url": "assets/js/264.42ff4322.js",
    "revision": "9a801f750d0d3a30aa4a68ec361f77bc"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.f1418674.js",
    "revision": "17e8304999c52a6f9bfe7a512d71cb95"
  },
  {
    "url": "assets/js/267.a555ba06.js",
    "revision": "7d5e04cf289bc289563de476deee4680"
  },
  {
    "url": "assets/js/268.9b7ebd71.js",
    "revision": "907e26aa63586d6f970f88a986aad80d"
  },
  {
    "url": "assets/js/269.a21c5abd.js",
    "revision": "f66c9be8735f61b438bd185ec73381ec"
  },
  {
    "url": "assets/js/27.4dbe6d9b.js",
    "revision": "42d2911e44e44dbeb4f46ee782dfd08a"
  },
  {
    "url": "assets/js/270.af9550e1.js",
    "revision": "192f1abddcdc1040fff831538f9bfe33"
  },
  {
    "url": "assets/js/271.965ef2db.js",
    "revision": "128a12cc8cdab4d443f65beb892f681d"
  },
  {
    "url": "assets/js/272.dc01c622.js",
    "revision": "f026e37a334bc7556901a8f80a15451c"
  },
  {
    "url": "assets/js/273.64763498.js",
    "revision": "8fa6381db8f85a257939d7aaf29bdc3c"
  },
  {
    "url": "assets/js/274.f83a7a29.js",
    "revision": "a9a0a6a575bf3530aed140232e8da5eb"
  },
  {
    "url": "assets/js/275.98d1c3ac.js",
    "revision": "07c477f77d2b69c3f314537e6677f201"
  },
  {
    "url": "assets/js/276.c6e70ddf.js",
    "revision": "3f950398bfd73b6a108c7c358f8e5fce"
  },
  {
    "url": "assets/js/277.98b8b2ec.js",
    "revision": "5b65b3eb7a4fd51f58cf25a9951c5829"
  },
  {
    "url": "assets/js/278.098140ac.js",
    "revision": "e76d3e19985d28121f5b95b42cfb0043"
  },
  {
    "url": "assets/js/279.f6c3e46b.js",
    "revision": "975f986c491d66c367546b3d4b3827b1"
  },
  {
    "url": "assets/js/28.2a9393a5.js",
    "revision": "83bd8a24287aaf99c135759a9f17b1a8"
  },
  {
    "url": "assets/js/280.13a1a431.js",
    "revision": "2f5cdc9ca5266d19f11fecdc3ad1a3b7"
  },
  {
    "url": "assets/js/281.029fa49d.js",
    "revision": "6a6724c461daab17af148c755dd47518"
  },
  {
    "url": "assets/js/282.84240ef9.js",
    "revision": "3390adb117b7a6a36638eda67501998e"
  },
  {
    "url": "assets/js/283.e7e9c66c.js",
    "revision": "4b93a7581d4c1b11e99dc0f9d7e74238"
  },
  {
    "url": "assets/js/284.76b4bc57.js",
    "revision": "7aaca21e0bb278fb238c78eb8c5f01d4"
  },
  {
    "url": "assets/js/285.65b059f2.js",
    "revision": "740a4b2e1d409ed9ad7011feb466c263"
  },
  {
    "url": "assets/js/286.be651dea.js",
    "revision": "893b1029a9ffb80b7664dd01851a1f28"
  },
  {
    "url": "assets/js/287.ffa311a0.js",
    "revision": "3261e2cbd46160d9d4e3df689aa96a85"
  },
  {
    "url": "assets/js/288.6f9c0355.js",
    "revision": "10be28125f894f96cad89a288295c8a4"
  },
  {
    "url": "assets/js/289.ba973681.js",
    "revision": "5d05db1b154f7fa33e10ae1b39e616a3"
  },
  {
    "url": "assets/js/29.06492348.js",
    "revision": "f391e00d2a375b27e661031f5a9d33fb"
  },
  {
    "url": "assets/js/290.3b1e4bf3.js",
    "revision": "caa33288d2241172725aca1b3356a876"
  },
  {
    "url": "assets/js/291.4377f1bb.js",
    "revision": "5035dce4034f9b71939d561506b25f75"
  },
  {
    "url": "assets/js/292.4965e398.js",
    "revision": "2c47ebeb5ae0f010f7d0a8d833f5293e"
  },
  {
    "url": "assets/js/293.8baf93b0.js",
    "revision": "d565da5990b7fc71c33d8c2f5e268314"
  },
  {
    "url": "assets/js/294.a70c5b38.js",
    "revision": "83335de0154139e76376fb7e35ee9527"
  },
  {
    "url": "assets/js/295.13b35c09.js",
    "revision": "dc7ff9739b7f49be055b4ef68696abfa"
  },
  {
    "url": "assets/js/296.8196f202.js",
    "revision": "710be5f991ac7518fcc8384657627cbe"
  },
  {
    "url": "assets/js/297.d3500f9f.js",
    "revision": "2cc198cc912c9acdfeb076ec403a58e3"
  },
  {
    "url": "assets/js/298.f6b2fd32.js",
    "revision": "df000239b0f303b9cc3490dad15f2672"
  },
  {
    "url": "assets/js/299.5d9d3e25.js",
    "revision": "8e8394f293fb8845478c7beda5674a6c"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.05e91407.js",
    "revision": "d5e7f3d07dbdd7b47e979eda6842ebd6"
  },
  {
    "url": "assets/js/300.22b8da42.js",
    "revision": "fa849590d50dbd49439b34e07872108e"
  },
  {
    "url": "assets/js/301.07982c55.js",
    "revision": "0f7b7e6157ecafdbe0375a75f4c549a9"
  },
  {
    "url": "assets/js/302.e59d7dca.js",
    "revision": "5b0d8e3fd3b3604343739e128327282a"
  },
  {
    "url": "assets/js/303.3530f547.js",
    "revision": "16578e115c5ec6051d2aeb75c772b6ce"
  },
  {
    "url": "assets/js/304.df02e722.js",
    "revision": "27680387cc8af2aed381583188ef8460"
  },
  {
    "url": "assets/js/305.3ba62f56.js",
    "revision": "0ee86a4b3a7d83aba506abce657b6955"
  },
  {
    "url": "assets/js/306.89ce57ca.js",
    "revision": "a5e62c8b73247dd40058ac14b94d2c79"
  },
  {
    "url": "assets/js/307.e3d4f977.js",
    "revision": "7c61204fe3df92a3a62f85ff1b9948ee"
  },
  {
    "url": "assets/js/308.cdfea3b6.js",
    "revision": "b981e8241a0ae12141424dcc46dac8aa"
  },
  {
    "url": "assets/js/309.d5938935.js",
    "revision": "6a7b6dc0f5de66c831da55478ceac797"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.a5a40518.js",
    "revision": "565f26e49111529baf7b5a8a13254035"
  },
  {
    "url": "assets/js/311.6349061c.js",
    "revision": "fd3658b8cea2559c0e8d64329ab24f80"
  },
  {
    "url": "assets/js/312.8eb14b4c.js",
    "revision": "d17b5a48bc13c4ba5d543f818ffddb73"
  },
  {
    "url": "assets/js/313.ff6a743d.js",
    "revision": "7835d85d839ce50a262d9da1d94620b3"
  },
  {
    "url": "assets/js/314.12ea87aa.js",
    "revision": "b166ae27e3d81a52fe18686d970b16f0"
  },
  {
    "url": "assets/js/315.1023440e.js",
    "revision": "f45608552873be3f5310674b85084b52"
  },
  {
    "url": "assets/js/316.3c3ae67f.js",
    "revision": "4b4790663cf95ffcae9405d6f33a1104"
  },
  {
    "url": "assets/js/317.80d65d01.js",
    "revision": "af37c8afa5bd984ad9b1768a3b9e8ea4"
  },
  {
    "url": "assets/js/318.4f8b0476.js",
    "revision": "ba89d3cce1ecee46d202d49ff47146c4"
  },
  {
    "url": "assets/js/319.d42e7720.js",
    "revision": "752567d1237fbdaffb12721e0343a0a4"
  },
  {
    "url": "assets/js/32.2dbc11ef.js",
    "revision": "96953d1c495aab3dac76ddf9bb151fd7"
  },
  {
    "url": "assets/js/320.beca9566.js",
    "revision": "8416226871ba0078ff1de7ff18f9667e"
  },
  {
    "url": "assets/js/321.8efffee5.js",
    "revision": "1288f3cd7753f16027379aed61cec08b"
  },
  {
    "url": "assets/js/322.5567a74b.js",
    "revision": "63ed9cd0b659412b117d075c7ca4f2b9"
  },
  {
    "url": "assets/js/323.60865083.js",
    "revision": "bfc5b3f1e28f66eb98bf1e71c1576ef5"
  },
  {
    "url": "assets/js/324.84141b0a.js",
    "revision": "c8e13b213bd2f5880219800e0165515a"
  },
  {
    "url": "assets/js/325.264359c3.js",
    "revision": "16f493aba0b1435c26b7ae64acf7da63"
  },
  {
    "url": "assets/js/326.57d50319.js",
    "revision": "b5423b1ad64ecbd516613bcdd2c22df8"
  },
  {
    "url": "assets/js/327.2b98fa3d.js",
    "revision": "68f94484bc7511762415230ad8100b2d"
  },
  {
    "url": "assets/js/328.d7dfc16a.js",
    "revision": "c625f36c7617e91f524746ea68f6003a"
  },
  {
    "url": "assets/js/329.eecd76de.js",
    "revision": "f9b77ee23de885afdef4f6c0be71efb9"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.aab70c1d.js",
    "revision": "c0db000965f377e09f57ec1630f72f81"
  },
  {
    "url": "assets/js/331.87d65dc7.js",
    "revision": "c789a95e4f36e656e9e786ae92a246f7"
  },
  {
    "url": "assets/js/332.255609ad.js",
    "revision": "6827e8eda47a86613fb0cfd6ccc34e26"
  },
  {
    "url": "assets/js/333.cdfd4210.js",
    "revision": "b8c88ae14701a4c7bbaaf362cb3f2356"
  },
  {
    "url": "assets/js/334.cd1a9ddf.js",
    "revision": "cbbae4b2c2988f9e11d01fe283973fe0"
  },
  {
    "url": "assets/js/335.735229fd.js",
    "revision": "3f051066b937390a1254a0ed0edcc828"
  },
  {
    "url": "assets/js/336.7316be8d.js",
    "revision": "5305bf791061ff917bdee62ec52ff687"
  },
  {
    "url": "assets/js/337.99ac963f.js",
    "revision": "f6786f4784a5544b991b0318c82549ce"
  },
  {
    "url": "assets/js/338.52aa247a.js",
    "revision": "d43116678952ed6040d3666eb699da2b"
  },
  {
    "url": "assets/js/339.f794a33e.js",
    "revision": "9ffa22bfc28d301dfe0eef2229ec14cd"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.e5c3cea7.js",
    "revision": "9aab280f2e68224500698aa6db93effb"
  },
  {
    "url": "assets/js/341.baec67c4.js",
    "revision": "1f2b19215dcebc713e82521a8bdb5f87"
  },
  {
    "url": "assets/js/342.499ea2ac.js",
    "revision": "290ef33e901ed669ee04a901a08f4fbb"
  },
  {
    "url": "assets/js/343.494f94bf.js",
    "revision": "c465a5ec806d92895094621a10f2461f"
  },
  {
    "url": "assets/js/344.6d9f505a.js",
    "revision": "60595e1e8c0abd34df47aae9d889d840"
  },
  {
    "url": "assets/js/345.b09ea276.js",
    "revision": "97fe8ab405d4ae7f12248def72484352"
  },
  {
    "url": "assets/js/346.cbaab14d.js",
    "revision": "ae931616a2e5ba31e591ae4930a75e5a"
  },
  {
    "url": "assets/js/347.7735c47c.js",
    "revision": "d14bbc8cabdd48d25573e83d85b6fe06"
  },
  {
    "url": "assets/js/348.23321f6d.js",
    "revision": "bec645143d7721cb64737ba19e3b4c00"
  },
  {
    "url": "assets/js/349.a830a7b1.js",
    "revision": "440d97ed59e34b9f221e924b6e88caa2"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.124641c4.js",
    "revision": "b8914c2a294594920fc555f969dd486c"
  },
  {
    "url": "assets/js/351.b14746f6.js",
    "revision": "07f0439cba8b9074f548cae85e280e9c"
  },
  {
    "url": "assets/js/352.e3d54661.js",
    "revision": "7d05182014bcd7033b6e4edfa1516f9b"
  },
  {
    "url": "assets/js/353.263f1601.js",
    "revision": "91376047bd724b672f123d812632f148"
  },
  {
    "url": "assets/js/354.89737d7f.js",
    "revision": "f92143f839e1b07b36944cf34695ff6f"
  },
  {
    "url": "assets/js/355.c34a26c6.js",
    "revision": "dbeecf9241a2fe6862a5ee3c2b71cba5"
  },
  {
    "url": "assets/js/356.48ba1e85.js",
    "revision": "93563605329130e227bf30c72c92270a"
  },
  {
    "url": "assets/js/357.c83b1482.js",
    "revision": "a9bfcd96070bbc1d1a9c6426fcc9063a"
  },
  {
    "url": "assets/js/358.af7d804b.js",
    "revision": "6136c21a30104da8013afe395eac1c9a"
  },
  {
    "url": "assets/js/359.e6e2b2d2.js",
    "revision": "04ef1030238fc00070d7aff145417d17"
  },
  {
    "url": "assets/js/36.08cfec20.js",
    "revision": "657646ac0c5a7eee8cdf3bd4b90c5d48"
  },
  {
    "url": "assets/js/360.0e13ac9c.js",
    "revision": "bcc6ea9005cd8cabefc4ae4169c69184"
  },
  {
    "url": "assets/js/361.0d32835c.js",
    "revision": "cf15729f4a4e11d772d734013bcd8e66"
  },
  {
    "url": "assets/js/362.e498ed9e.js",
    "revision": "f04673bc920265d34fb50181d509117e"
  },
  {
    "url": "assets/js/363.fe683d75.js",
    "revision": "6693be4b323f33f3baf27d62a29239ad"
  },
  {
    "url": "assets/js/364.11d7275d.js",
    "revision": "59d2fc2bbb636071a12be9a0d1f5c928"
  },
  {
    "url": "assets/js/365.9e220da1.js",
    "revision": "dc9806d5f1ff582f33f4dda46e6921ad"
  },
  {
    "url": "assets/js/366.02d90408.js",
    "revision": "51fcdf12f2f521cf701779bab677aea4"
  },
  {
    "url": "assets/js/367.a7db95cc.js",
    "revision": "b3e7862c4d2ff50ba85e381b6ee30c91"
  },
  {
    "url": "assets/js/368.74aafc99.js",
    "revision": "93486cbe6e1c50b88692f950fcd17ed8"
  },
  {
    "url": "assets/js/369.a82c83aa.js",
    "revision": "212f6bf0098baaa761b3af12756b778d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.e11d23f9.js",
    "revision": "5034f00a4543e9c3c100a8dd5992bf1c"
  },
  {
    "url": "assets/js/371.860913cd.js",
    "revision": "a0d44e4e6dff873f7b9326f768eb8563"
  },
  {
    "url": "assets/js/372.10991ff2.js",
    "revision": "c891b2b25bba2d9b7b94eb11f7b88689"
  },
  {
    "url": "assets/js/373.ec6e8702.js",
    "revision": "d5e7b79fc243516d40206124874ec1c2"
  },
  {
    "url": "assets/js/374.ce82e647.js",
    "revision": "efad0f5fe61dd88bf6da74744f273499"
  },
  {
    "url": "assets/js/375.ff7bab23.js",
    "revision": "c20e7844cfc0c55d005b8d0c0df0c818"
  },
  {
    "url": "assets/js/376.027f34e2.js",
    "revision": "d2c614066ba826fbc9ef6f83da52655f"
  },
  {
    "url": "assets/js/377.bd695018.js",
    "revision": "328ea76e22e464568193717ddaeb2ed1"
  },
  {
    "url": "assets/js/378.79ee8a73.js",
    "revision": "fd8c5fc843e6dfee697776d98b16a1ad"
  },
  {
    "url": "assets/js/379.3cc1985a.js",
    "revision": "7faab2adeb6246a26016089161441bff"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.7f6608a5.js",
    "revision": "e6bb785562057691900a44a08143a110"
  },
  {
    "url": "assets/js/381.963e348d.js",
    "revision": "5fd45d4a1969fde3430181e486abee57"
  },
  {
    "url": "assets/js/382.6a53577a.js",
    "revision": "f46089d5d23b77c59e76399e0cfc9bd8"
  },
  {
    "url": "assets/js/383.dbd58101.js",
    "revision": "bd0f228695b76888eb25e2efdddd98e4"
  },
  {
    "url": "assets/js/384.7edc8f27.js",
    "revision": "0c1eb3b5fba73f855d0cf4771a013b6d"
  },
  {
    "url": "assets/js/385.2066c04c.js",
    "revision": "503cdd3cde20a86dab584d33703a02dd"
  },
  {
    "url": "assets/js/386.132dc469.js",
    "revision": "830a9ebfe78f19d9a692f58e3ac78d4b"
  },
  {
    "url": "assets/js/387.16c22260.js",
    "revision": "7448647369593238c73e6a608fd3405a"
  },
  {
    "url": "assets/js/388.ecd698f6.js",
    "revision": "062c9fee3753c813ac05e8e82367d002"
  },
  {
    "url": "assets/js/389.f86b853b.js",
    "revision": "717fe68db1df6665b7e138396ca35670"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.b263855b.js",
    "revision": "31716d9a8316d4a593ba3ab22c8c6382"
  },
  {
    "url": "assets/js/391.8ca86723.js",
    "revision": "d66117b30df2fa7e4d8bafc53dd0abc7"
  },
  {
    "url": "assets/js/392.1a35a740.js",
    "revision": "b52f29f8f75e3bdaa8065c65a2a0583d"
  },
  {
    "url": "assets/js/393.5723868b.js",
    "revision": "cd80de0263e78fa6a783f969ac98e8f7"
  },
  {
    "url": "assets/js/394.630e9414.js",
    "revision": "d5b1cc24d25dabdfbaf73227d9fc792c"
  },
  {
    "url": "assets/js/395.854b232d.js",
    "revision": "51a2dbc94cec6e81c9d52966e62815a8"
  },
  {
    "url": "assets/js/396.17ab6921.js",
    "revision": "0a6927d35b876310673345de2929b4fe"
  },
  {
    "url": "assets/js/397.bcbce5a6.js",
    "revision": "c6ce8d231f105e57fa4716a9fa7421c5"
  },
  {
    "url": "assets/js/398.d0cbeef0.js",
    "revision": "31af7dd8ab9a45ba30d1deab965ec490"
  },
  {
    "url": "assets/js/399.f5d50a50.js",
    "revision": "7e16b7ae609dd35d632e4f3eab396265"
  },
  {
    "url": "assets/js/4.c5bcd50c.js",
    "revision": "57a1784a4380954506435b3501ded8ad"
  },
  {
    "url": "assets/js/40.c709c7e5.js",
    "revision": "bc0d63e1824af5519c8fbfb596b9f2ab"
  },
  {
    "url": "assets/js/400.e56c51ae.js",
    "revision": "9808b10ab09f2ba3bbcee93b256a8164"
  },
  {
    "url": "assets/js/401.960d190e.js",
    "revision": "67720a15b42c802a86074e02ba0503e6"
  },
  {
    "url": "assets/js/41.ef1b43df.js",
    "revision": "f31f6beaa82e1a28956ab888b914912e"
  },
  {
    "url": "assets/js/42.348e5e74.js",
    "revision": "5c85bbbd53038041a5df28b515b86c53"
  },
  {
    "url": "assets/js/43.38a07350.js",
    "revision": "9ca0cf9e49e4b9a633b42b2b452f6548"
  },
  {
    "url": "assets/js/44.b550d91a.js",
    "revision": "5e5ef8ea0dd4dce388358d86c09e85a0"
  },
  {
    "url": "assets/js/45.7e271a67.js",
    "revision": "fa502e25afaadcaecfb2b46a7647b5fd"
  },
  {
    "url": "assets/js/46.dc3d5618.js",
    "revision": "d83b6b7f529462ab3795a21c91016316"
  },
  {
    "url": "assets/js/47.7ce90f2e.js",
    "revision": "2dd117bf46809b79da28cc691f232de4"
  },
  {
    "url": "assets/js/48.c2ba7446.js",
    "revision": "fe6fb9eeccad157f7cf2cd516eb01de5"
  },
  {
    "url": "assets/js/49.229a4eb7.js",
    "revision": "7b1488ddcbf6c4410c94054e06dc3fe1"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.63e6d1b5.js",
    "revision": "e221e419ecca7730e2686b46713d2220"
  },
  {
    "url": "assets/js/51.34ee273f.js",
    "revision": "5e6bd7dc9c29a8c10209db8bf64f7555"
  },
  {
    "url": "assets/js/52.bab62c42.js",
    "revision": "14536939bab85f8997b5cfdeb867a588"
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
    "url": "assets/js/55.28c71071.js",
    "revision": "64c9c60a2bd3c0a461e06ce9080c8ef0"
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
    "url": "assets/js/59.b29fec37.js",
    "revision": "e49ec7d8cac7d8940bd836f637ddca2a"
  },
  {
    "url": "assets/js/60.4b56ff10.js",
    "revision": "de95f30f9548948c40c2eb790ca2e019"
  },
  {
    "url": "assets/js/61.ac7f284f.js",
    "revision": "872042efc6f111e024bc16fe59307ae6"
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
    "url": "assets/js/67.0e247d57.js",
    "revision": "9011db8ff42b706f22a4b15a92ce3a34"
  },
  {
    "url": "assets/js/68.2f5285c2.js",
    "revision": "90495f6963ae3fffca3cb5a18104b043"
  },
  {
    "url": "assets/js/69.af908571.js",
    "revision": "a153d897548d0453985371459ddf153f"
  },
  {
    "url": "assets/js/70.aabef992.js",
    "revision": "cb3d3f24d9192001612fbbff1e3d4d81"
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
    "url": "assets/js/74.fef97ae8.js",
    "revision": "49512bdab67e7c3b68eb2d3222b20cdc"
  },
  {
    "url": "assets/js/75.36eaa40a.js",
    "revision": "d6785154926b55f3acb4857cf4cdd67a"
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
    "url": "assets/js/78.58f33b81.js",
    "revision": "a02e345eae97064ff23944f14bfb767a"
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
    "url": "assets/js/81.fa46da8a.js",
    "revision": "84b6634b8931b1dccb1dfae2c751a830"
  },
  {
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
  },
  {
    "url": "assets/js/83.7ff7f679.js",
    "revision": "ca8a838d67055a6ccbe993c7ed9c4108"
  },
  {
    "url": "assets/js/84.59938c01.js",
    "revision": "dfd48104104087558eaea5b21cf32093"
  },
  {
    "url": "assets/js/85.b3cb5fd0.js",
    "revision": "bb14c7b491f44922b8d29f7dbb866c7c"
  },
  {
    "url": "assets/js/86.bee2e56e.js",
    "revision": "6d492707997c81bc985f791d0de4d516"
  },
  {
    "url": "assets/js/87.18e84ac8.js",
    "revision": "777cb2cb3fab029bc0a20a3603221a9d"
  },
  {
    "url": "assets/js/88.5fa970e4.js",
    "revision": "ed493c3859065d0bab77a2ce49d45995"
  },
  {
    "url": "assets/js/89.eb94f076.js",
    "revision": "9950c8e764eef4e608002d086da2b49b"
  },
  {
    "url": "assets/js/9.419fe095.js",
    "revision": "4cf56cae9d9360bb02f9add46b46a121"
  },
  {
    "url": "assets/js/90.061b2143.js",
    "revision": "efbcf4c7dabefbfa80456c79a140a415"
  },
  {
    "url": "assets/js/91.ef0d5e97.js",
    "revision": "b455f90c9e76d0164e05b18bdfeb80b2"
  },
  {
    "url": "assets/js/92.d32d01b1.js",
    "revision": "97e3ff7744949aa6898c7230c1eb9ef8"
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
    "url": "assets/js/97.a9d77f55.js",
    "revision": "1da8d85f5cd5d966422d86ef10232d0a"
  },
  {
    "url": "assets/js/98.2c7d54ad.js",
    "revision": "89f61c4edebb4703a4f38a08fd5e6721"
  },
  {
    "url": "assets/js/99.9927c6e4.js",
    "revision": "206a2b96103deba7fa5d16060ea5fc13"
  },
  {
    "url": "assets/js/app.d535b7e1.js",
    "revision": "d88d4f0b28cb7f7374c96813a98e1db3"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "381dafd719fc145c2aaaad5c8779a6fa"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "feed7bb600829f8bf1292ff719c8cd28"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "00f047c560148f128413277a278c8707"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "79e65ad9e6c3cbd121acdf0b974548d0"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "1e4c582355c6f5ea6b86fee8a32a18ce"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "d8044ac16aa328c85c775636a41014ac"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "4d84e501d12ee703de8b1c0e17beca50"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "3a9ae2a33aa2882840654bb6282d0c84"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "8940081d0dcc79559066adc0dd7e2420"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3d9de23096c6a4b1ad6570ce4899e004"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "3e4135da2baa128b7286f3c5a07bb8fd"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "b73b6c27e45ca222f8fdc320eddebef3"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "b5a8d131cd7056df5c5bed30cafa84fb"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "d0ca66a0c3b884995c4dedabf67cd1c9"
  },
  {
    "url": "master/api/index.html",
    "revision": "a2eb92fa7422dc1f4706bba6ad80aea2"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "af1a5df72aedb5aded4044dd32b3a172"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "be7191dc287a7b665439a5e153c66678"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "3ec2d1686eb26c7f098e85e62d8b1c19"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "7ea38e1d5cca57aee587c8c111ab8f77"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "f0be02e5c6f66659c06f8410b3e4a9f6"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "80e32ee7ea95d942c7dc5f63071ac027"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "3e84075a842da2014a04353290c20219"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "c855a00d22892cbc32f35077d01ceed7"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "4226abb141c07c8e20b832bd78af1972"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "03a7533dcc4cd43125282e32bc583568"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "cbda497b2e085e85821bd5a60f82cb1e"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "163beab4c274c0649d242f178fabdc12"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "4c92ad47a4f005b287802aca1c0f1408"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "e968ec853e23798068f6cb103167e0b8"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "b08a10e0d3bfba71d3c158252f7351e3"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "2491d81ba2f9f360ae999ecf03512381"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "8c0eadc820ca665b8693c19b311952a2"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "559a58e6441775ee55f2c1dc42386e7f"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "ef46a08ab0e52d0155298be6c9845674"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "596f97641a7ec9605689ffd6e29e6e04"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "61050ec5f3f80265cd23a1f4c6451e73"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "37bd42f0dfe9379152884cfe0d2f91d0"
  },
  {
    "url": "master/packages/index.html",
    "revision": "cc9bf2e65b44ca7908b77b0ec3009654"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "0989fe1e3a0639610b719dc99f683c36"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "16435d6b5453cbb2f094cec6adca663e"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "3d02c029018b93781c45b8678c072cf0"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "edc90c42a85358f4f8af3daefa749a1d"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "764cb592057c4ad3b33012e40e7929b4"
  },
  {
    "url": "master/packages/views.html",
    "revision": "37633071d34a4f09295ae46fb5494737"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "4559d180e06fbf4c7733e28cbdbec3e9"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "d436421cef631456d3a6684202083914"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "63838c0997653d35b2b4dba73155c4da"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "a77d9e92c5d2865a356b3a853378c7d6"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "2fa9ab91e2cde4befb8f0b299341ff6d"
  },
  {
    "url": "master/themes/index.html",
    "revision": "547e210a82a1599360177a6f508bd7b4"
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

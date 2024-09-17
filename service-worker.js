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
    "revision": "499cb47611aaa71e562a241ffb2fa322"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "147b56fdb156d3425f7dfcfc958dcbcd"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "9c88531ebd0e1fad1fc24a0f923a7604"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "82399da28be1edc8c9e28484d3696dd7"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "c4c488374a9bfa1d0d589c1bddc5e576"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "714be56516fd1ccf5b94d67f2490ce81"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "45b988c8bfb0ad3942bb05487ba84a34"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "41981bf1b913f35a220f50e1050a14b3"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "41c62ba8cdf8f725bdc85de03bb2ac10"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "084c27a557e4be8facbd2ccbe84fc9d2"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "c70ba650f7d9df2e61a320930385a428"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "f5fdb92bd0e5d7b7b38684b5490c1d5e"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "4724e2168eb682959ee83f4f69d543e2"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "db02f335c109239c9d041e862248b3c7"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "119c5bcb792de254e3cc18f77c21d8a9"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "a6e999f80a7dfcb2cda2faef76853248"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "6d4e0ddea19178f12ed4701433574e49"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "443e2f0f7c1fdcc9aa34bf63e3a4258f"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "6e38055c7fc74f00ccc7e81476448f76"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "0dad6f97ba430b051a7d5d176f215f7a"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "2b497129480bce6c5f615a6c2629ebcc"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "781009f2593ea42832e4ff464fbeef47"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "4521cd04512cf9158ca0df802f58e575"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "06bce0a28f74521c0b70b29ddeb95796"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "31295a63ba121732f3b2427c77a3ad05"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "8de18e0f84f9ce2f3213202ae0ce79a5"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "7137b9043b9806b9b5cd2728bef77e32"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "e36b86fe3f889ded4700262eec2735d1"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "b33f56bdb8fd19d2fac944af87d998b5"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "3b4f9c8f8d628928eb503e327cb03c42"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "3bd25d7c0da839ca8b7f0c4de1afdc12"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "06cecb60b83373d2c1ad398c629870e8"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "b020a908ed90b280b8ad539b4f05dbae"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "8aa3bf452b43142706433ca9b87f645a"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "468ecf5287bf6b866cc755b456ea0b1d"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "af970fffe78a67fe486f946746258fa6"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "edebe9f35e50d969da33361f0bfd7f7c"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "ff21bd3848bfde65e2a43d47c73eb0ff"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "dc2c4ed1356ba5bcbcacd5619faf3717"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "65ecb012a595c5a9bc7d8b9e23b1ecb7"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "36dd88f28d27dd24768ca830741ac2d4"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "883212794e507a246503e3cdccc371cd"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "984c37a6dc58256662234273a0b2c2e4"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "1f3d35c82872cf607ab400c4025589a8"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "4f953d3e592a8309a642dd2615acc49c"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "86d2ca7addbb468bf5c7e374831c9312"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "0e68e45a5d14b5e34791b3246de585b6"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "e981e35369aefc8e936ea442748664e4"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "ca04c6504dc093a3bcd5331e0bccf37a"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "fff40ba2c2be0ecf220d942b5bb77cf3"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "76bd125ea046591053b53f4e9b8d17a6"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "3210c27abd24361eba493b74c79ff834"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "19278f338c71c096fd9e04ebe7776e97"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a8c941dde4532b871f55192ae27f6a8e"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "64b893891f0769693ff6308c5661a9f7"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "21c0cd0771af3098803352ae52c1d76e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "bee30eb2ded60d460bd4363538d8806e"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ee034a9aadba18f75cccc78ee8a1c954"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "de363780232041af4af0254ffc33fb9c"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "43e528ff576b6a05c6ff8bee110bb3a9"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "2d2b155eedeb8e9fc55ace63f08a89cf"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "590df77efde8ded013dd356fbb9b277e"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "8e77860a13f8b1157bfee6c770354d8a"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f0059a9cb538da94d333e75693af734e"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "27dfeee63c212bf6f451b8d3e94df1e6"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "d426acde9777b7e38b3fc89a1f3f5f3e"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "20ca4b264502bd9174381af56fc318c8"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "bea2eb91e43629f278e32a0d2cbde3b3"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "7ec2eb98a73079b378f55403920efe60"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8df43b2736468e1f42abfe8ebc1067a3"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "7d8720645fc52de9e4eef829d34bc54c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "58685666f3a90c00265934ac3b6d29bf"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "f6f9eb2d666f40a01ca9890546f96984"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "078e2b7f59d936002f22e2ac6931675a"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "fdf561180496fbc95e865a99ce997dc9"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "d323f745ece91a94c76034aa7afb5def"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "372b7f9c85ae39714827e760a1c45312"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "58dd72b22da6cebe7dbf06d58f95b949"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "61fdd3293ab4c49de6f4e8ade55fdf22"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "53155404915e6aa29a933ff7127656db"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "cfe70abdd249b391d161d1281507d34e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "3739f9bba02e8220784591e363810d11"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "24977173e259030a9bd1c8825fefaf11"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "1644d09478a4274e02af626b33c628cd"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "18ca0f81508a69a0ea6517b92df752ef"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "f77af39caddad5f11b5ac7d1c51b4d49"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "bfca30a66a4dfa3956e9c8ae4e42244a"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "d802240d2b5e2d4b7f029325a0e66b42"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "d054ed90ad1a5546263940d172856377"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "4d0f2ba127b9268716a325568185e625"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "e5ccab7953619291edcf8dcff6747e85"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "43398b0992880f51b0f6a4a27dc5ec74"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "8c526e8d3f996e7b0b60a13b4e108c24"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "dc53be00125bf0a08dd78b5aee02775f"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "5a7b73a1e6d1371479bab5390c27f47f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "49817add47ff79072466a471284bebec"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "ddcdc1e502fc981319848ee9f4e0d454"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "f5f291f90117294e635446fbbdbbda29"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "477aa871fe0580663a6637b13e7c31d5"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "346153d71498a2450e3209070f8c237c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "82a86cb0dc61c8414aa4aa664dda4bde"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "2a1aea25cbe58f9ae64a400901faa825"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "33903998b49f2b765d36dcc83125fee8"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "e18f19eeeaa5f138e4e86c38f519de36"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "cdfeb5c024eec11734ed02c85e29d38c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "178542ed2587c05bc4de055efa55a9fd"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "4a0d2063a275a762c4cd8943999a7107"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "56f30c0cb0beaa44db67b1ef51e3e22c"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "e6a02a2913deb3eb48af4e5f910e429d"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "e1220213d8b7ead9ef178a7e310d39f9"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "e43b1b646a3acdc04e5f3086582fd771"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "0fdc9c45912ed99d5b41e17ba505bd26"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "ce8d9f943b1fe5a43be7ab399765fcde"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "9ae94c879ef60a2dc6e011649ca90e5e"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "f21ed8f264778645d388aeaa1cac2e50"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "80727e8c4a6327cb49556154424ae42c"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "77271897a11a1689aae20c64366f1068"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "e6f987e11a150da9faafda00a31f99b2"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "57427938a3f60149aa0a8a322387fda0"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "a106c1d94a16f32539acc2df6db6d502"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "d2bbd94745cd4407721fcca243cbad55"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "4a50614fe7fd50baf0e6a56f028376cd"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "86f52993ca2f49a57db24bca52af7df1"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "753813208c1355d5f52c1d8a4564e58e"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "b20193d02b2ec21cde3e083c9061778c"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "f93dc5c9c7c81d0c864072f8ee9de62a"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "4deb7e11a6b545dd427e802ad28e674b"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "d2ed837818b925280af3ff42f142cbd2"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f938d60768910c17cf22f28ed10be14e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "1895896a32d3ce9f12720d1ae4943b6a"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "888dfb20623dbaac197d009a5c02f2a3"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "abdc5d4cc393725ff75b40c540f4cc45"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "54a1ebf954732a979813f763af543f85"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "060a99de622ae513ebe30533c8908b82"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "59151a325ddf575eae67eb6320825aa7"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "c7e117a6fed4bf5f5e753626e030be29"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "b55b9d684bc9bd36af6bcd963faa1de2"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "13e6295f3b9fe269fa44b3b4e04c60c8"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "57a1c88ae59edf51d9ba15acd0308614"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "7a284edb15f5668e52958fe44eb1c0fa"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "4794aadb4182035c47eb8c16270be2a8"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "18467159e1b18d10cd02e707280b2dc0"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "e6f54240efe407be231080f5f9bb4ed9"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "cb8936c8ecb29ba092f9a35512b0c78e"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "f64badac08caec3150ceb668e3595bbe"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "35ebceb87cb55b2feeef7ae18958b503"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "fd6101facf8375d9efde803d28922721"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "8012a230bd9bebbb404ebcb41d3a4f92"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "d191f9b430fc1dff35c21f8db300b040"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "22bcc8cd1c79fb68a24b0a5394dd5535"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "1a82e67cb1c6b09dbb45e92f7c765737"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "bca630da5c3a42f88be2af932ea6aee0"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "03c6db79c3036bc7e285e1bff6cb98de"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "2376e4f6539d7c4e3fb5ad46f4ecc621"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "37171f5db1b4d69a0c7ed0929be3ed6c"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "332d2ebdd2faed039b7b19f1d9aca334"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "9a9753f62bf50e38535ca65cdf662017"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "99876d40d4f9e854d596dcea900f5b93"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "ccafa50dfaf3f2ffef62427bf625c622"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "0e372b336ac4091e6a98c4773c6a8bd6"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "65ac7bea19d2b93404ed1a57cb08f0d8"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "f5b028a9221d3b8684aa68ab89159b1c"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "41184d47a8581a88d6ed1bf7cc3e845f"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "e9f6d4704065965e576ca4f12f197227"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "fc895541a2f4c58a7af67d7c426ae142"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "4ff4b02240bd271c621eab1cb3bad22a"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "bd535ff94667fd4cbb7b3adc9b832b8d"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "99e0bcd86f884cb4920c929b7aa8ae90"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "dc9113128c345df05090c91ed4b2c5b9"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "8fb22e0d5230899f505982f7b62683d5"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "e746c19e9e5de18eccf6aa6ec01d18fb"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "020fe39bba59c7d0626952e054363cf1"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "4d95d2bd68b9ec03f98f9768e27126d0"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "a63c5b6cb7fc4c27afc0aa300ebbda7a"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "2c1a55dd970d730524b7bc722124da0b"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "dc42bb152a5a6c53685bd4d28b0346a0"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "c7de6b7b055be76130f1f3823db4a484"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "afb8c07b05a3d17cde478ce2aacd5583"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "88daef60eac2eeef65796af6964581f2"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "b87c93b4ab86e74da100d937e815583d"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "edc684d9ff0af7448d942a42346a7512"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "5383a3f4e903fd1d79f29894b1fe5996"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "affbccda875a4ab494da3c1f7e16d089"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "07e33c066ca148a2f3574a072dbcf4cd"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "790a7dfcecfd4a626518e4969f333412"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "ff711ff952711879eeb594686229f9f9"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "19a788d5e60a255a79768760150e2854"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "516d8b4b807bbf4509de91c0f5fa2ccb"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "f0ee7e023c65765b99670e3b766d8b7f"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "081e4ae1f2b2641096c1c58d41316ff7"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f4f239dfeec9d112898a76438c021951"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "3cdc7cb97790ee7a9f2f9e1fc551da0f"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "b8a422801ad7f8e445d73fc8272e487a"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "1280830f3a7a71f755467c2b20d1a423"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "4b0c113daa7ec9093f03a0f6e512e5c0"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "d8e817d9b8f620be8c8c7efc508f328f"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "266822c17871e8bf07d8ae7ab822fb75"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "79d9b6749ce5f86730735a26967cc3c5"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "49f5ddcaee717303925be62f36b410b0"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "53dabbce8722abbd76242db23e8ac2b0"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "323f569c4cbde96f151ebfcba45ac4d0"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "e7fda3336e0060e518046f72c7dda43f"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "9e045ae4a6b59aa3343be8da9c8f8c96"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "b3ed68014b5ebd74997072b1e021d4b7"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "45044dc6393b8100a9374cab3106d013"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "546644f5bd930c5ff28bca5bbf1d985e"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "5a17bc8d325d3c9bde03abd1a2ed4bef"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "1b31d1367c89925dfad34248a511fbc8"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "45ccaae6c63d02e8cc1f926a1dee6c70"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "ea0e75a21127f2208517ee5e986d8a39"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "b76f436430714706dacd263de33be462"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "77944f89046c82a50fe6046b299a1ce5"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "38063aa06d97a510fed48aaef29205aa"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "82eb70f3f984e5e9dda89199070714b0"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "a7085942fbbd1f39e4f92d532da07f18"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "54817919b599d336697a13b9f6dc554a"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "1372c400ccfb978ef868f858326d1e04"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "31d3bb84525fafd445fd7f245c981d19"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "fd0794e091d38936a037e3bffcca92e1"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "2f8684602393a89802bb6b2482310682"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "536c5bc6fbbfd440581f9d5d9faab498"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "0b8b87c0a1c3200a3a4dc79e4d192b80"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "bd3423ab52dc1bff67d63abe2d816409"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "66e5f9b5b8eaf11e1cef9788670860eb"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "dfd767c5ee270090c6fd55c926d4c42c"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "791c5aa48253282b2ed082f94a2fea12"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "6c9379103bdca9ade1fca56294a28d3b"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "3bdb1a69cf8da03c1815343632d5589e"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "9d26cbe435b1838281dfb6ea2471ab8c"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "b6ca80caff445d5dcf39edb7bd6ae57f"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "92bddabd23cc7fc34d095e94b5f568ae"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "77c4030e7ca9f30e258e70de3d430f70"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "2ebd9e40a151feb2f677a775403f6a1f"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "b69e2e3ce4119bf2d30d5752ee43c326"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "22ccb3a33e598351e1a9f9e610b1bb57"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "510cd28f4347c04934c09f1c05fbd444"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "a4dce6fd55adebef34fab1083264b51f"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "9280554feb2e01a0b4810090b84a7bd0"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "ab76c742d4c26f070ce6c007aeb9df7a"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "5edcfd5264cd8a1239d93eb16075c7f9"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "463a83a51a257b51d28fe9b0d865b035"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "6d12b29a4de8705508d245fab64e3f6d"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "8ed0e2320b5720f5d0e07c85965c01ab"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "855e83bc77e6b5784890a40c74d0287c"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "d09f342a89004bbd055978ff2efbbe0a"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "6b890c1c65eada1a69f7c333fbb227f9"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "ab26c1fa3980c0a459b7090fadb4e5eb"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "99dc208a0502f3dce176b5562b03069a"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "62874855e0366f64ef77df1ea1754b72"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "62e8a34538c9e7c504867bf31f026b4a"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "56c95b4eff5ee8a27681c92e4a820c04"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "161dbf04f77439237b0ea92a2dce54f3"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "d99c866efa74a21a42880dd8af17caaa"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "836d913078acb07d11699c4161121a2c"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "2b21d5ceb0f0e42699bb0f144babcf8a"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "62ae085f0b13c561f516fc2272e9ec0e"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "1b2d112b7b238a502156da40278e74d4"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "939f9afb6f93839ee2fa9c71a825937c"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "ffac45dd3a5d88daaa5a86512bf03d5f"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "29869f57f857866bb2837641a8daa6e5"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "efb049c8d9b571b102b61f135895420c"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "e18c5713b56e7e059d6a71a78b993b31"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "979c96f046f1d7e219d21748a8db95cc"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "3100ff944f923f7b9e1566231683b839"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "e686238748ef9e6b7afa496d97fe9bb1"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "2fbe69276c3bff1a218aa578abcae45d"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "caf20ec021ba7f8526ecdf0a68e7ff36"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "5a3e3888c2b41b9ac2f482c30ebfda03"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "663d1e0552f0b053ef72be8d322c7309"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "4830a50d68c21f96a67b641098ce55ab"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "7a64c1ad72becb65bc62a1cf5b72229b"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "aa887a8ce0800316854b3c16dfc52868"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "d3f9f3de8ce4304d143a627e05c7f18c"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "23fc4807993ebc81306f7a7bda1d04d9"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "1360d8bdf3d7f58a8b9ce8429c51e1a2"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "c6834d5dd100b3ed38119abbedbc5b96"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "e24a9bb221bcf24dc7e18066ffa16b7f"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "ce147e4a912d931351dc69029a8df3af"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "82802f35e8af68fbe2abf9ddcec37bd2"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "8c016836e9595f985a6b9ae06403494b"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "56c3b1dd79235c1ad3b1ce315c2432b8"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "c7c8617bc79e2cf914413eb12d8e2fc9"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "03ae7fbed3e903ecbae3ee63d6a2c184"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "baeea78bdd851f04da463acf2bff190b"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "9b540ff55f3ef482165228fd8d2d86f9"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "1ddf7d479c4758411a4801630c2ab84d"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "81ac098a6271a3b86dc60b1181b42b14"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "c5f4d0baa01435e668856288fd6a5eba"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8ac1487a8bc8c2ceb6061503686d9b00"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "dfe968e68e5cb91108b22e8558e5ec88"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "2330882678a82ed17eb77fd4833f6fe9"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "01f53a4fff864efc91224fbe2e34ce2f"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "6b698f025682adcc49db8cae6497be4a"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "ce04269ec7458defa7afbb42fd928462"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "97605d72bd63c2a5dd0ec2d72866804a"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "47a62dc27f7e89247f25f065e3c87ed4"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "098d33af49779a80c3096606c708ce58"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "678275fe77df0ea483f7366fa8ab4b02"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "7aa98a81c1689fe3b80cb6c51f5f3223"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "aa95072ce712a9831b1983321fafd252"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "0ba67e911d4250de8e00ae716c463fe4"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "fdd7ade17e16e53c1a95dddab8e882d9"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "ee1d9da646d392edb18ba7dae9ce0b15"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "f850b057a15c821c0f3f5981b37a6ff0"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "84f0fe4864b1c22668f524738db31881"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "9a177564b70eee9f88c3be665af4b7b6"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "f8c74e564e9ae36f65ac56dcc53b85ff"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "1aad06624e1e0c4bc548480b005c83d8"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "4ece99fb31e0b7653444d11da73d5db5"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "1fd85c504e53d0e941c2ea3b0299f494"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "92be61ce5d85e0c3313b0cf6af9137d1"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "68171ffc6fcbfec6cd9a51d5721da6f5"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "df98501b58cd9974f1df050630d2814b"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "131fd21ef0344c876ec46918dbb72710"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "989fa3be82a0e0973297b2f1e67c6040"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "0eb15a421405a0f279a085ebdd71e617"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "90c75908d096816b3c37789347ccbd8d"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "8ee8e42eb9fa3c5108dcb0c9a4afd4dc"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "6d181734119627e529c4e57dde02b85a"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "1e55a05671fe17c047dbc251f6e71784"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "f3a3a75c05b4568698e0b631f741b9f9"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "66501e65d455ba2898a1a273a5bbd98d"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "d69688f58118bd261c735f1d5124220d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "f006ae106ce4f4126612db81b00ae621"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "68529aef7fa639fb4f154ca66dcd9237"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "529b89931babe1e6d35778146b00c97e"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "0ccd55c50e501db016f42eb92b4ea444"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "b12c26341f25cd9e611deb2fa1bfc592"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "94af7981473f29eb7de08c6a0d584600"
  },
  {
    "url": "404.html",
    "revision": "4a1f00a45af13d7949598adca9b671e7"
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
    "url": "assets/js/1.36db704f.js",
    "revision": "98ec44bf82b0cf7b90bd71db5845042d"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.c0a9f14d.js",
    "revision": "d9f10e640debf4c76768185f2c746828"
  },
  {
    "url": "assets/js/101.dcdddcdd.js",
    "revision": "8086529b777a3a3a53323a4d219dfb37"
  },
  {
    "url": "assets/js/102.2a84c982.js",
    "revision": "b1221f8254d6bb31919dc72b4920231f"
  },
  {
    "url": "assets/js/103.85b0eeed.js",
    "revision": "774d776c495dda969e9d18ac0e5684e1"
  },
  {
    "url": "assets/js/104.3830058a.js",
    "revision": "a6b50582812767e42945d376e27dc42c"
  },
  {
    "url": "assets/js/105.247eb7b4.js",
    "revision": "d10e0159b628b44d00e88ce351b268be"
  },
  {
    "url": "assets/js/106.6121e55e.js",
    "revision": "b43291582527ab5079420142e4c3e22e"
  },
  {
    "url": "assets/js/107.6997e0da.js",
    "revision": "b9c7f05a5c9692085b94be11798675bd"
  },
  {
    "url": "assets/js/108.70b357a7.js",
    "revision": "e2a7d13da162414a21a5d53f1c38b255"
  },
  {
    "url": "assets/js/109.52902ba3.js",
    "revision": "f676725ad0ed50b2bb039b93d31c8a11"
  },
  {
    "url": "assets/js/11.67b42b8a.js",
    "revision": "e314fd43bd3ec31152f3c2d3a4722b0d"
  },
  {
    "url": "assets/js/110.1bc25a44.js",
    "revision": "3d23e6bc82a9abce13498b646265b0d9"
  },
  {
    "url": "assets/js/111.589101ae.js",
    "revision": "4d9dc53d7f2487619bca8a43f2552a6b"
  },
  {
    "url": "assets/js/112.e69341d8.js",
    "revision": "5f119e1cafb511e529e40149fd70e221"
  },
  {
    "url": "assets/js/113.c6b5345a.js",
    "revision": "3f2ece02ec17847471c29fde898df6d7"
  },
  {
    "url": "assets/js/114.3bb21058.js",
    "revision": "71de2e056b30daef6603bc7d25825971"
  },
  {
    "url": "assets/js/115.38ca6963.js",
    "revision": "b78895738c1282550def382483385b18"
  },
  {
    "url": "assets/js/116.fd220ea5.js",
    "revision": "dd41b767d52779eeef6ac85d7816e246"
  },
  {
    "url": "assets/js/117.f504de8f.js",
    "revision": "414e21ccc7b134f624e057f7967ea103"
  },
  {
    "url": "assets/js/118.c8636ff3.js",
    "revision": "8e462b3e0f06bb252d72e9e73b225b1e"
  },
  {
    "url": "assets/js/119.ccd9b84b.js",
    "revision": "72e005f36fb99988ccb5870f61f064eb"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.a3bbbb41.js",
    "revision": "2668ed63a15097488e70f0385679ac25"
  },
  {
    "url": "assets/js/121.55eb8a8e.js",
    "revision": "0e2a2ed264d41922b4bb1cdb2abefcb5"
  },
  {
    "url": "assets/js/122.606c8806.js",
    "revision": "9dc24a40ead697b765e1921eea65391d"
  },
  {
    "url": "assets/js/123.bc31b48d.js",
    "revision": "e3bf5e8e8780905369ad85596e5bc2af"
  },
  {
    "url": "assets/js/124.f09c2759.js",
    "revision": "ff16c944cd0cc2cf4109a048d17ec9ef"
  },
  {
    "url": "assets/js/125.0c1757e7.js",
    "revision": "09ec2f73ef235b538f69aa1c0453f007"
  },
  {
    "url": "assets/js/126.3095a737.js",
    "revision": "791f4d7290555e77911a0a464c9f8e9e"
  },
  {
    "url": "assets/js/127.6cf7491f.js",
    "revision": "e466e7cf25cab2256cf2023385c3ce6e"
  },
  {
    "url": "assets/js/128.5fd862bb.js",
    "revision": "d50172d8a7bf99c656cbeb1728bbf95a"
  },
  {
    "url": "assets/js/129.5f3c376d.js",
    "revision": "4f41213ca0ce5c626c27bbf9ebc98e9f"
  },
  {
    "url": "assets/js/13.4a774b3a.js",
    "revision": "4872c9bb194969c98b9627ff178495c1"
  },
  {
    "url": "assets/js/130.3f9b2466.js",
    "revision": "b099333e7562fafd002bea1b317a9782"
  },
  {
    "url": "assets/js/131.8dafbc20.js",
    "revision": "82f8c40d679e013e6e0487be9718a252"
  },
  {
    "url": "assets/js/132.b3b9790f.js",
    "revision": "2fe35ab91646b387031e417e9c7336e5"
  },
  {
    "url": "assets/js/133.0b5227d1.js",
    "revision": "bb105fdfaff73cffd150ae40a03d3dc7"
  },
  {
    "url": "assets/js/134.10fe1678.js",
    "revision": "1a275821f9f9264f5a0044872da77e95"
  },
  {
    "url": "assets/js/135.65d85c48.js",
    "revision": "e46326dce6196e0f205511c2a03037d2"
  },
  {
    "url": "assets/js/136.70788199.js",
    "revision": "866ab0ae1c2594a24f3684a1f82eb0a6"
  },
  {
    "url": "assets/js/137.68ae19c5.js",
    "revision": "d5ab14f0e844c79a15eda2a963eea0a2"
  },
  {
    "url": "assets/js/138.66913383.js",
    "revision": "0dbf1294c22dacfb826364f70ecccfa3"
  },
  {
    "url": "assets/js/139.970b8bae.js",
    "revision": "ec48353cd0d47485a5537b38b2b62101"
  },
  {
    "url": "assets/js/14.4deebed3.js",
    "revision": "0e2f598ec0597d1997d949be26456de3"
  },
  {
    "url": "assets/js/140.84e4c8e6.js",
    "revision": "6ddd5a5c3057ac26ef93ff60241e95fb"
  },
  {
    "url": "assets/js/141.1018f2ea.js",
    "revision": "23977e13a29d860651f29906fa4bdaa7"
  },
  {
    "url": "assets/js/142.ca3e9e31.js",
    "revision": "0810e06ef8460e3d832390b32909c079"
  },
  {
    "url": "assets/js/143.23016ff8.js",
    "revision": "08b0e156f0d37805149b8932fa001bf4"
  },
  {
    "url": "assets/js/144.45c09c77.js",
    "revision": "d334af60829c08a2e89cddeb07296cf0"
  },
  {
    "url": "assets/js/145.48ce6e8d.js",
    "revision": "67491f657b13ec3467ad321fe1309ca0"
  },
  {
    "url": "assets/js/146.cb812ad0.js",
    "revision": "e80583bf08bb960fee696aba96b56f5e"
  },
  {
    "url": "assets/js/147.f033733f.js",
    "revision": "0ff1aa4be0f31ebd2019e733c9ef2657"
  },
  {
    "url": "assets/js/148.7785c78b.js",
    "revision": "c256ba4883715cca468c3a850f89c9cb"
  },
  {
    "url": "assets/js/149.c711b9a5.js",
    "revision": "0b5bdaeef5cb7c28e57398677ba6edca"
  },
  {
    "url": "assets/js/15.c74cc0d9.js",
    "revision": "fadfbd1cf09773c26528a72ab7a131a4"
  },
  {
    "url": "assets/js/150.1b02c9a6.js",
    "revision": "b2014882df0955e21ceaa3f99c3177da"
  },
  {
    "url": "assets/js/151.662f03db.js",
    "revision": "59cac10e9578254e32161bb3902a76a5"
  },
  {
    "url": "assets/js/152.d401fe4a.js",
    "revision": "22d91aa17198ec9209dcad449ba4267a"
  },
  {
    "url": "assets/js/153.5e4efb60.js",
    "revision": "b7e01d909f3fa8b455709294c646b62b"
  },
  {
    "url": "assets/js/154.d5289892.js",
    "revision": "3d81885315359f65ae7da37af0a03194"
  },
  {
    "url": "assets/js/155.c3c8747c.js",
    "revision": "dbfa10dbd2c255dd798a60e35de5c74c"
  },
  {
    "url": "assets/js/156.9216060e.js",
    "revision": "7beddc416f45c4aa4f2e755858405c64"
  },
  {
    "url": "assets/js/157.2682d359.js",
    "revision": "d31c79d7805e264ccf68f4a8dc9887b2"
  },
  {
    "url": "assets/js/158.e438fffb.js",
    "revision": "9adf2c7ad1b6b65ae26c4452b8ca508f"
  },
  {
    "url": "assets/js/159.634d6653.js",
    "revision": "e9826ac46b909b0a41980ab623a652f8"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.23e4b084.js",
    "revision": "ec020903c4e2c418081809bcf53ba5b8"
  },
  {
    "url": "assets/js/161.a81619cb.js",
    "revision": "74741b86498131ef8463a2bfa32647a4"
  },
  {
    "url": "assets/js/162.10fbe09c.js",
    "revision": "1b2c8d631e18c566a0292ab08cf38069"
  },
  {
    "url": "assets/js/163.956de2ed.js",
    "revision": "e410edb4dbc8d84428d24ee3dbf11332"
  },
  {
    "url": "assets/js/164.2d887a7f.js",
    "revision": "4b03c6b6bbf2f5af9e9f56e23289dbef"
  },
  {
    "url": "assets/js/165.d7927ec1.js",
    "revision": "ad5798515f0f2bc2837d3e57840cb640"
  },
  {
    "url": "assets/js/166.23daf2f6.js",
    "revision": "c9995c7a97d1d41a1be5990280654e35"
  },
  {
    "url": "assets/js/167.a43ae972.js",
    "revision": "3ca0da2d718d508456d1e45918fead4c"
  },
  {
    "url": "assets/js/168.177982e3.js",
    "revision": "a1d07cb16b0f0e359734b374f1f65ee7"
  },
  {
    "url": "assets/js/169.ca391b7f.js",
    "revision": "7deacad5d9a52a632afd9775dc185ee1"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.f20e60fa.js",
    "revision": "fa16085b30e9a3b1a328f107c18565be"
  },
  {
    "url": "assets/js/171.7d35ae5c.js",
    "revision": "92518192844cae5470c1392c51997f75"
  },
  {
    "url": "assets/js/172.30000f46.js",
    "revision": "348de340d14005a6fb5a1c78809cf2f7"
  },
  {
    "url": "assets/js/173.ff866c8b.js",
    "revision": "afedf9ae9bf946d161ab54366379e849"
  },
  {
    "url": "assets/js/174.2c1ebf0f.js",
    "revision": "efb37e1d8a90c608931e6202c8cd3a02"
  },
  {
    "url": "assets/js/175.c3bed7f0.js",
    "revision": "cd43bf793d1c5727ae89c53d723440d3"
  },
  {
    "url": "assets/js/176.9f408497.js",
    "revision": "3f2b615cf1683628ae1f16a4250e6b43"
  },
  {
    "url": "assets/js/177.38aa7f75.js",
    "revision": "27caa2086cf49ccbf81b2ebe1d65dac0"
  },
  {
    "url": "assets/js/178.a6a95265.js",
    "revision": "d6f1684d6b2ea1163d7f3917d7e55c84"
  },
  {
    "url": "assets/js/179.6c05dcc1.js",
    "revision": "ac6a055bdfa55ee321bb55d9ab982196"
  },
  {
    "url": "assets/js/18.1a8d9e78.js",
    "revision": "5f1bc4ebca2efe8dab86d8d6af9ccdb5"
  },
  {
    "url": "assets/js/180.59ce0f0a.js",
    "revision": "4888647cbe9ad76a97efb3089dea6977"
  },
  {
    "url": "assets/js/181.b1ff3f60.js",
    "revision": "5dbcc56bab289a6d8546acedb13d0b85"
  },
  {
    "url": "assets/js/182.bd3d3e0f.js",
    "revision": "f8f3a263da027702298410fe7f1fd729"
  },
  {
    "url": "assets/js/183.6c989b6d.js",
    "revision": "e853e5e7c05718a57d27f4a381ec8847"
  },
  {
    "url": "assets/js/184.038d060a.js",
    "revision": "4e0ad9efdc100c927d1ee9c553834a6e"
  },
  {
    "url": "assets/js/185.233c8181.js",
    "revision": "0d24e174f9609c75b816e32f4a675885"
  },
  {
    "url": "assets/js/186.a2f1c8bf.js",
    "revision": "39c4990ffeb2b8b522947718d02977b1"
  },
  {
    "url": "assets/js/187.4224bd0b.js",
    "revision": "25acfad5587dc938897c09d18e8bf628"
  },
  {
    "url": "assets/js/188.e8b36aa9.js",
    "revision": "7ddfacd255c85a3ce4dcf1579cde944e"
  },
  {
    "url": "assets/js/189.3192ba3a.js",
    "revision": "990018d89c2bf5b8d1b82d1fbec0df6b"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.b2867bee.js",
    "revision": "7fe737be26eb0850f926452079a7f2bf"
  },
  {
    "url": "assets/js/191.9118dccf.js",
    "revision": "dd5ec8e2bb1a002c438b5559c00b4a02"
  },
  {
    "url": "assets/js/192.5fa2591a.js",
    "revision": "2a3bcac000f77bbeee51f99c984d37be"
  },
  {
    "url": "assets/js/193.94f6a408.js",
    "revision": "5cd570bf8ac8e1ec9d347e8202b654a3"
  },
  {
    "url": "assets/js/194.ce7991b5.js",
    "revision": "393a9d5cbe8abcd932f0d2e420841337"
  },
  {
    "url": "assets/js/195.724fd55f.js",
    "revision": "5b0aaed49333c3d6c9e1a3babab54127"
  },
  {
    "url": "assets/js/196.9f25ddb7.js",
    "revision": "be7039257bc1f2104443568f3097d144"
  },
  {
    "url": "assets/js/197.276d3fed.js",
    "revision": "290553da96bd7b5f22771c90e43b96a1"
  },
  {
    "url": "assets/js/198.96ccef89.js",
    "revision": "f75e685b2245f4c8939ba3494cc77f00"
  },
  {
    "url": "assets/js/199.055731cb.js",
    "revision": "ecd7af1048c21623f4304d9504c5f380"
  },
  {
    "url": "assets/js/2.f3792584.js",
    "revision": "a4344a7ceb442c027e9a57d46448d49e"
  },
  {
    "url": "assets/js/20.6c838152.js",
    "revision": "5e1f31e17ca8203aad5d368a852f396d"
  },
  {
    "url": "assets/js/200.a0df2da3.js",
    "revision": "d8813842e42e2eefc93c4eff27f14a01"
  },
  {
    "url": "assets/js/201.7c0d8e24.js",
    "revision": "586ca117d0aedd932fd4af25ea8c25e1"
  },
  {
    "url": "assets/js/202.ed4f8448.js",
    "revision": "03f83e01d8ffe85480c2ec1759a98161"
  },
  {
    "url": "assets/js/203.68bcea7f.js",
    "revision": "90c92796b745b7e97f47cf71b67a49f0"
  },
  {
    "url": "assets/js/204.7b55790b.js",
    "revision": "a6396bee1f0b9bf47d19331611fc20c3"
  },
  {
    "url": "assets/js/205.8e97eaaf.js",
    "revision": "d0ae61c5cee275eebfdeeaddb7ece9d0"
  },
  {
    "url": "assets/js/206.6383d548.js",
    "revision": "74125bd0e8666421adca3918bdb1e55e"
  },
  {
    "url": "assets/js/207.946b0683.js",
    "revision": "ba8d988eb7c7b2b3a5f83eea181bb73f"
  },
  {
    "url": "assets/js/208.667a6f51.js",
    "revision": "74ea955bbd6d6300bec2026e1f65351b"
  },
  {
    "url": "assets/js/209.832efc20.js",
    "revision": "b32c7fec50f4ce255a257fddacc6739a"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.4cc03e0d.js",
    "revision": "1f01b4e02c3c31e9d2dc84ae4786ea08"
  },
  {
    "url": "assets/js/211.b2cba369.js",
    "revision": "bc99dc4303417781a76426d99e07dfb9"
  },
  {
    "url": "assets/js/212.4cda4683.js",
    "revision": "fa5e8667820d8d6c31bf430ad832a0b3"
  },
  {
    "url": "assets/js/213.ea464795.js",
    "revision": "9c4e90e1d4bd1049e5318df20abd3b3f"
  },
  {
    "url": "assets/js/214.bfe2f37c.js",
    "revision": "0f2a8b69d5077094257fe703933600d3"
  },
  {
    "url": "assets/js/215.f4f38487.js",
    "revision": "e9f3802cbfc5b8e88fe716c3036f958b"
  },
  {
    "url": "assets/js/216.004c3e24.js",
    "revision": "9c421386f40f8fb0b6db4a44a4dd8311"
  },
  {
    "url": "assets/js/217.b62d9575.js",
    "revision": "35ffaac38e4c232e93b6f45a2df08a39"
  },
  {
    "url": "assets/js/218.94215a92.js",
    "revision": "7f110a3c85f0978ae3926323721bcc92"
  },
  {
    "url": "assets/js/219.e23a7442.js",
    "revision": "13c361f6c968bbed06f37cf4b682e272"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.b08b85f7.js",
    "revision": "f473487aeef008307e00d11f62c8a204"
  },
  {
    "url": "assets/js/221.3fb619ca.js",
    "revision": "b9296564ef42b5067c47246e256b33cf"
  },
  {
    "url": "assets/js/222.d95ecbe1.js",
    "revision": "6b2c75cd3a09db1fc029df7a5ba918a5"
  },
  {
    "url": "assets/js/223.228e1fec.js",
    "revision": "de71aaea598d60ef818ea0dc306d32b7"
  },
  {
    "url": "assets/js/224.41cf9cd3.js",
    "revision": "e95dc845d3270a6e4625d38b3a721d6a"
  },
  {
    "url": "assets/js/225.84b4305c.js",
    "revision": "c8c8bed2d9fa86a71e610e491a5096b1"
  },
  {
    "url": "assets/js/226.bc863060.js",
    "revision": "c1bbdacabd0f5c5a3f6e93f314ca6ec6"
  },
  {
    "url": "assets/js/227.c96d4593.js",
    "revision": "ee52b0c36b2eaeeea7e628c779e9fe53"
  },
  {
    "url": "assets/js/228.979f4cbb.js",
    "revision": "d2427624e0d3086845863214522db910"
  },
  {
    "url": "assets/js/229.03de166b.js",
    "revision": "f5cc80e7333673f8e53cd4a862029d4a"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.ce7ada90.js",
    "revision": "18d8d4f311374fbf45a5e7d20a678183"
  },
  {
    "url": "assets/js/231.641be1d3.js",
    "revision": "5a2bdb86e9c8e63d4b1eb1a837dc5f9b"
  },
  {
    "url": "assets/js/232.2d3ab449.js",
    "revision": "efd6183f5a3146898d875d3ee12d450a"
  },
  {
    "url": "assets/js/233.c9b96f7e.js",
    "revision": "81ecc0bb0286db4a2acc5ea906851a3d"
  },
  {
    "url": "assets/js/234.c8ae65ee.js",
    "revision": "c1e7e8ec834a4dcf993804ea710255b0"
  },
  {
    "url": "assets/js/235.ef15af2a.js",
    "revision": "1a9dd30c1fdb6aa5f54f7456f492fb14"
  },
  {
    "url": "assets/js/236.0fad275d.js",
    "revision": "c87021d3a1b032373b7a607881e2be1c"
  },
  {
    "url": "assets/js/237.f38103cc.js",
    "revision": "a05a91156af0ef0f5fc15adda8193211"
  },
  {
    "url": "assets/js/238.0066564e.js",
    "revision": "6ceebb3d0ec69a4aa7558e66568b6c76"
  },
  {
    "url": "assets/js/239.72391229.js",
    "revision": "f0841f7829f81ab6406b1be30856bbbd"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.de19873d.js",
    "revision": "7e683918c53c8a1dd11259e6b4748bca"
  },
  {
    "url": "assets/js/241.026e58c1.js",
    "revision": "d5973302dfba3d6066b9f8046b2b4480"
  },
  {
    "url": "assets/js/242.02431a5d.js",
    "revision": "e993c90c8779ef69e0806b22c1e4d9fd"
  },
  {
    "url": "assets/js/243.f0a9e866.js",
    "revision": "1f90bbe2865e6fe6328ce9f6a829b992"
  },
  {
    "url": "assets/js/244.bc333b9c.js",
    "revision": "bf908de5850f59a9d77f8d1997ee7d49"
  },
  {
    "url": "assets/js/245.445f388f.js",
    "revision": "7b466522070174b399737f928deacf46"
  },
  {
    "url": "assets/js/246.9eb33f37.js",
    "revision": "46e11f30dc613b6170550f0c851bdeaa"
  },
  {
    "url": "assets/js/247.59e1c3ee.js",
    "revision": "17c6c12c17a33c4bfc94b993e8a4eb62"
  },
  {
    "url": "assets/js/248.6948794b.js",
    "revision": "00ea96071cd5f4a80194952fbec02deb"
  },
  {
    "url": "assets/js/249.faaf74b6.js",
    "revision": "83da0058fe0625843a414d9727f858b7"
  },
  {
    "url": "assets/js/25.6c2742ab.js",
    "revision": "bbda7bc66f63b24c442f3b7cdfe17ac2"
  },
  {
    "url": "assets/js/250.22800b69.js",
    "revision": "04962dea87ccecd2d2ad7477b295007b"
  },
  {
    "url": "assets/js/251.f8372d62.js",
    "revision": "b6f9eb62cfc8d9d83ff45e12511d2b6f"
  },
  {
    "url": "assets/js/252.dc91421f.js",
    "revision": "753171d52b05e564d6fd9d639a9c55a0"
  },
  {
    "url": "assets/js/253.4a8ee6db.js",
    "revision": "6e56c0f85baad9d335363585f29ad426"
  },
  {
    "url": "assets/js/254.621f78db.js",
    "revision": "99f374f7092ec51b9033fbeb94cfcdeb"
  },
  {
    "url": "assets/js/255.b9883b56.js",
    "revision": "52edad0ef726f9981998b0daaff21552"
  },
  {
    "url": "assets/js/256.6378a7ba.js",
    "revision": "cc7f478609e991883b3cb06f9c3267d6"
  },
  {
    "url": "assets/js/257.c6e90bcd.js",
    "revision": "d062ef7204450a8b4b4911a15430f327"
  },
  {
    "url": "assets/js/258.5b91378b.js",
    "revision": "76bf7e3297efbb22ae2dc44565f0a5c7"
  },
  {
    "url": "assets/js/259.220fbc69.js",
    "revision": "0369c137fe30b15761b0906cec6deda1"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.82978bb9.js",
    "revision": "e9f9e9e7e8d6541cfb8038b4206ff1a9"
  },
  {
    "url": "assets/js/261.bf4e6817.js",
    "revision": "c5be9ccc717ffe39b033a67cec29ed18"
  },
  {
    "url": "assets/js/262.30ebdf5c.js",
    "revision": "685117df8d300d419cdcefe8f7c6d656"
  },
  {
    "url": "assets/js/263.06205bcf.js",
    "revision": "5e06bffa7e161707f677e1e2c4195aa5"
  },
  {
    "url": "assets/js/264.6c9fd623.js",
    "revision": "be2124da0feda4bc83a742301fba26b1"
  },
  {
    "url": "assets/js/265.c2b593ef.js",
    "revision": "ef878ea0b39682d1184e64ae2ede5083"
  },
  {
    "url": "assets/js/266.163a415c.js",
    "revision": "80c7235c52b8d58e1bb51bc9a64fa42c"
  },
  {
    "url": "assets/js/267.06c9983a.js",
    "revision": "26f7437a54fa116b96e7fde661dca050"
  },
  {
    "url": "assets/js/268.94f925f2.js",
    "revision": "efb925b0a10c97807f436c78995541ae"
  },
  {
    "url": "assets/js/269.b9f40f33.js",
    "revision": "ecb1dd406f9010de5d7dd61fcb7b1879"
  },
  {
    "url": "assets/js/27.245e0933.js",
    "revision": "408a327aaf59f67bbddd7e0e3c59d719"
  },
  {
    "url": "assets/js/270.0068790d.js",
    "revision": "65e851c80d2f2b9d2931c6fc4aa9d072"
  },
  {
    "url": "assets/js/271.bbd03845.js",
    "revision": "412578217640327ac83140700a6da358"
  },
  {
    "url": "assets/js/272.0fb650fc.js",
    "revision": "440379d9ad8a66a8591e2428ed516b3e"
  },
  {
    "url": "assets/js/273.156cfb06.js",
    "revision": "942e1ad2c983ad812bdc0cd9b5bb1144"
  },
  {
    "url": "assets/js/274.7d005ca9.js",
    "revision": "353522cf00b2c1f1ca0e218ad7372b90"
  },
  {
    "url": "assets/js/275.f588689c.js",
    "revision": "0a4bf92915ef0a3eba142ff458bdf4a0"
  },
  {
    "url": "assets/js/276.f4891d06.js",
    "revision": "28141e120b48ae4d983665ce7bcd51c0"
  },
  {
    "url": "assets/js/277.52da4aea.js",
    "revision": "b508f839b1c6a93724e8b177c251879f"
  },
  {
    "url": "assets/js/278.ad6a1a8e.js",
    "revision": "ece1b8b0c4df3fd689161d799aa44826"
  },
  {
    "url": "assets/js/279.eddad417.js",
    "revision": "94ace556099033a853e56de58a460923"
  },
  {
    "url": "assets/js/28.bdcf7e75.js",
    "revision": "65a9f8ebbe7f9fe18ba33c095a001cec"
  },
  {
    "url": "assets/js/280.5c959b1f.js",
    "revision": "7aee9a6abc9179603e0f78850e6ed961"
  },
  {
    "url": "assets/js/281.6f9be523.js",
    "revision": "8186c0bf7f281867fa1556363a61e737"
  },
  {
    "url": "assets/js/282.82b55a02.js",
    "revision": "3e1fb8228f46420349668b0132c41e21"
  },
  {
    "url": "assets/js/283.0a9d3110.js",
    "revision": "6a0f55829ad6f5bcce8e0fded12681c7"
  },
  {
    "url": "assets/js/284.9ea316ec.js",
    "revision": "62ef59693af8a9998e9ee9525fb7d2b4"
  },
  {
    "url": "assets/js/285.c2136dda.js",
    "revision": "e658cfffa51e3fd7856bd5e05a6c999f"
  },
  {
    "url": "assets/js/286.0e2e1147.js",
    "revision": "275196be34ef0659e0e9a11ca6163cf7"
  },
  {
    "url": "assets/js/287.6153b860.js",
    "revision": "10d9cd70e1f8e59b3fdf4ce1f14e4a55"
  },
  {
    "url": "assets/js/288.604c6feb.js",
    "revision": "96c494a52ecb8aad24c76de753d2d4fe"
  },
  {
    "url": "assets/js/289.93c21deb.js",
    "revision": "0525e128319d5a8a911721e8c60dc44f"
  },
  {
    "url": "assets/js/29.e9c35710.js",
    "revision": "33ce49d67c09490f0ce6e00e5b517d43"
  },
  {
    "url": "assets/js/290.8d817655.js",
    "revision": "41f615a108993b770a4095ba5d7e26cd"
  },
  {
    "url": "assets/js/291.eb569a87.js",
    "revision": "7e552adf4361726fc2565b92b538e285"
  },
  {
    "url": "assets/js/292.4c3ed35c.js",
    "revision": "57d5106963a0e804c6605e3bdf1cdfad"
  },
  {
    "url": "assets/js/293.40f50aea.js",
    "revision": "e062f4eaaf437728a4a205ac88a577f5"
  },
  {
    "url": "assets/js/294.516c7c8f.js",
    "revision": "654851ef10fadb6a779f85df6f4d571e"
  },
  {
    "url": "assets/js/295.5a0f9609.js",
    "revision": "1cd1515299a6955c0c1f08be1b333c2d"
  },
  {
    "url": "assets/js/296.973f00ad.js",
    "revision": "63a7595bba858ed184d7a626bcd02e8a"
  },
  {
    "url": "assets/js/297.6e511da8.js",
    "revision": "b04cfd1e9c6305945c4f634d13cc3665"
  },
  {
    "url": "assets/js/298.40463839.js",
    "revision": "e852ecbf0c0756813e36c2986892137f"
  },
  {
    "url": "assets/js/299.65981cde.js",
    "revision": "a86661353c80569f09dd118482c6f690"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.238d93af.js",
    "revision": "cd4723265c78768167b36d6987501fd4"
  },
  {
    "url": "assets/js/300.43fdd6fd.js",
    "revision": "304cd5d8c693e24deac668014a6413cf"
  },
  {
    "url": "assets/js/301.aa3ed562.js",
    "revision": "2c059190a17832a0304c73eaf8680b81"
  },
  {
    "url": "assets/js/302.a84ae390.js",
    "revision": "aab918933acc74d86b460e9b9c9a75d0"
  },
  {
    "url": "assets/js/303.1ef41ce1.js",
    "revision": "d9272309a0f5c2fc33479d3932e50e3f"
  },
  {
    "url": "assets/js/304.37105731.js",
    "revision": "70c872df41363f96870a0f2a76f454e5"
  },
  {
    "url": "assets/js/305.e63136ab.js",
    "revision": "be31f38f1b0c5b7163537e47eac50c3b"
  },
  {
    "url": "assets/js/306.3f91aa22.js",
    "revision": "7dce904340aa1d57cc7d2a20c846145e"
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
    "url": "assets/js/312.ba469153.js",
    "revision": "73d23181058e8d54e31d61e52d58040d"
  },
  {
    "url": "assets/js/313.3d916846.js",
    "revision": "24e2b93234027a616647211606260a00"
  },
  {
    "url": "assets/js/314.c56ce4f3.js",
    "revision": "8d0e4f01ec8064f985c50467d1d79980"
  },
  {
    "url": "assets/js/315.2bd0a38d.js",
    "revision": "1d143c78f0bc7d0f68ce54abf48cf457"
  },
  {
    "url": "assets/js/316.f262484e.js",
    "revision": "7490cd891736f2eec1e151d4306fe154"
  },
  {
    "url": "assets/js/317.8abd1218.js",
    "revision": "cd1762f8470ace1aa16540cbf79caf5a"
  },
  {
    "url": "assets/js/318.c9203d39.js",
    "revision": "fb8c611ad3c7b79d27f058cc4d2a0282"
  },
  {
    "url": "assets/js/319.171a3ecf.js",
    "revision": "98e147cc52a489ad681ece977d406cc2"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.afa8c73d.js",
    "revision": "cf1009dea260b1d36d0d98d3552ffd06"
  },
  {
    "url": "assets/js/321.4cd70acf.js",
    "revision": "38de4f2868426961a0a8b54734698f45"
  },
  {
    "url": "assets/js/322.728f6f4c.js",
    "revision": "69426179f11b91a8f3525e51a82ce099"
  },
  {
    "url": "assets/js/323.85709388.js",
    "revision": "47da88e84f749755bb82d95b8fea45d8"
  },
  {
    "url": "assets/js/324.07ee1b49.js",
    "revision": "0e9090e7553ffbfd64d08aa82b92ff91"
  },
  {
    "url": "assets/js/325.04a86006.js",
    "revision": "f3b8b19ad46a897c34fee5a144504121"
  },
  {
    "url": "assets/js/326.aae5894b.js",
    "revision": "20268fc22950c8b83d0f268ed3047eb9"
  },
  {
    "url": "assets/js/327.48469305.js",
    "revision": "2605a47b2069b050507503aa8e23dad1"
  },
  {
    "url": "assets/js/328.cb63ac4a.js",
    "revision": "1ec62d52b9f9c426d5d933fc2f8a2ed9"
  },
  {
    "url": "assets/js/329.78861e13.js",
    "revision": "d1bc882adc155f9a7bfbe359d625ed27"
  },
  {
    "url": "assets/js/33.f22fa451.js",
    "revision": "348c067f373ab60c1101d5e5dd8de199"
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
    "url": "assets/js/333.1d90a1f3.js",
    "revision": "8dec9a1b132dd50981da918d19d487ff"
  },
  {
    "url": "assets/js/334.86283d3c.js",
    "revision": "dc953d5b43802d7d8cd95a9498d250e3"
  },
  {
    "url": "assets/js/335.cb2d9d55.js",
    "revision": "9d849ce4c93d32ca6978cb8d377355c3"
  },
  {
    "url": "assets/js/336.46a31362.js",
    "revision": "183ef1fecef6a76400296ab5cef04e35"
  },
  {
    "url": "assets/js/337.d8273ada.js",
    "revision": "4ae8fb6933dc3d5e35233975c621f94b"
  },
  {
    "url": "assets/js/338.5ceca645.js",
    "revision": "4fc66b711628eabccaf31f039fc23aad"
  },
  {
    "url": "assets/js/339.5d59aef0.js",
    "revision": "49cf6be8f8760e5bde0c2fd7f3e478af"
  },
  {
    "url": "assets/js/34.51c5df11.js",
    "revision": "52d97a98135f3875a6f7d5025fabaede"
  },
  {
    "url": "assets/js/340.a434750b.js",
    "revision": "44c17e5b98d9e71a451872782542fe66"
  },
  {
    "url": "assets/js/341.1f8ebe29.js",
    "revision": "a2c5db8b2b7f6b79260c4a0532c54d0f"
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
    "url": "assets/js/344.57157997.js",
    "revision": "255a673ac93e7e1530c07cecd755af74"
  },
  {
    "url": "assets/js/345.30698527.js",
    "revision": "ed3d14ccad7e0b104e1eb9571f15a55e"
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
    "url": "assets/js/348.97890167.js",
    "revision": "fedde1aa1b89ba67b52afd02b564a215"
  },
  {
    "url": "assets/js/349.3b0c09c0.js",
    "revision": "e45edad18c03af34f26c3d975929f996"
  },
  {
    "url": "assets/js/35.e717caff.js",
    "revision": "e1c897706044ee87a0d85127234709c6"
  },
  {
    "url": "assets/js/350.d08cd820.js",
    "revision": "06d8f96f80460a14710c28b1b2a68c93"
  },
  {
    "url": "assets/js/351.6c94bbe0.js",
    "revision": "fbfbb717d0de263bd0e72d888224ba4a"
  },
  {
    "url": "assets/js/352.eeb968ad.js",
    "revision": "c2cb9d7f974326328d136061af0a3384"
  },
  {
    "url": "assets/js/353.830738e7.js",
    "revision": "e04a9aa790fa2232ce2a7d0b19622378"
  },
  {
    "url": "assets/js/354.bd614d4f.js",
    "revision": "1e54648256d3e870473b1b8eafa76321"
  },
  {
    "url": "assets/js/355.cc96d263.js",
    "revision": "439bc1e83669488cf18136226899d8cf"
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
    "url": "assets/js/358.e35d8ee1.js",
    "revision": "339ad18b66052bda169bc4edf458833b"
  },
  {
    "url": "assets/js/359.8062d79e.js",
    "revision": "7d0add8ac508a196fc8f530564e485a9"
  },
  {
    "url": "assets/js/36.57bf307d.js",
    "revision": "7add8c725537ba3320c3f75c201d5311"
  },
  {
    "url": "assets/js/360.561d4f2d.js",
    "revision": "ac293294ea3a887b3bd32575aa2d4a13"
  },
  {
    "url": "assets/js/361.786fc91d.js",
    "revision": "b77af7eb0d0eae7eaf8ee166fc756a35"
  },
  {
    "url": "assets/js/362.29f09703.js",
    "revision": "b3aa5b440b84b041fcbc4aaff18af83e"
  },
  {
    "url": "assets/js/363.f718dd39.js",
    "revision": "e3156754ba6432e00155bbb5f757cb83"
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
    "url": "assets/js/366.91895102.js",
    "revision": "3c4a14ec91e133aa07bf6eb4e7247175"
  },
  {
    "url": "assets/js/367.42b963c9.js",
    "revision": "2abb743e9da77e113c1b3371b3e83eeb"
  },
  {
    "url": "assets/js/368.7fb5cfa3.js",
    "revision": "e26490050efc04b4d28e9eb911053b32"
  },
  {
    "url": "assets/js/369.aa11a09a.js",
    "revision": "d533d434c281b310f4b3937c452962cc"
  },
  {
    "url": "assets/js/37.e0c2c773.js",
    "revision": "a17b863fed384c4693ca32bc9232f69b"
  },
  {
    "url": "assets/js/370.60d17952.js",
    "revision": "5e82cd0ad16868306a2d56e653fe40d9"
  },
  {
    "url": "assets/js/371.96d65434.js",
    "revision": "0c08bb4f6168a21712c516d10abd54b0"
  },
  {
    "url": "assets/js/372.a4feff2e.js",
    "revision": "260d85c2383f53fedc6fb93841f1146f"
  },
  {
    "url": "assets/js/373.451fc10f.js",
    "revision": "86e6d85dc05e3d7b4129b2182f52d834"
  },
  {
    "url": "assets/js/374.0cd87498.js",
    "revision": "4b70c9448e711ced2df2747322fbc957"
  },
  {
    "url": "assets/js/375.c96ef41f.js",
    "revision": "df7032cb0adea2985983b8a8cdbd258c"
  },
  {
    "url": "assets/js/376.d9527362.js",
    "revision": "4f08988f837dbcb7997fa8e6d6a41d9d"
  },
  {
    "url": "assets/js/377.aeebc13b.js",
    "revision": "ca84291e9641537b0f304bd44179d4c6"
  },
  {
    "url": "assets/js/378.130c7d3c.js",
    "revision": "0bbc4b0f446ba095a58822083eb2b60f"
  },
  {
    "url": "assets/js/379.f27a4212.js",
    "revision": "b0c9a6c98a2665f8c66f3e8a9574010d"
  },
  {
    "url": "assets/js/38.b34ea377.js",
    "revision": "aea450b712576a627cf42dc0f5ca0f37"
  },
  {
    "url": "assets/js/380.8107ba8b.js",
    "revision": "f6eb386df86c0e7b7bf000a432c2863b"
  },
  {
    "url": "assets/js/381.7bd64c48.js",
    "revision": "e224d343383c939d2bf14e77f8ec669e"
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
    "url": "assets/js/384.7c318ec0.js",
    "revision": "006aa0765aacec4d800e077fb9d898b7"
  },
  {
    "url": "assets/js/385.96a0e933.js",
    "revision": "fd52379483d1829e3968f387764ec478"
  },
  {
    "url": "assets/js/386.e99f8a3d.js",
    "revision": "e2e169b0b59ddc5ca6ba6eee4bb73945"
  },
  {
    "url": "assets/js/387.53856512.js",
    "revision": "2b02fce0cb729be0256911bfdd490df5"
  },
  {
    "url": "assets/js/388.edf5572f.js",
    "revision": "ba2e36823d5e046f4569467141f9cc1b"
  },
  {
    "url": "assets/js/389.281536e0.js",
    "revision": "9a22c815c3ea17b3362324ec107c04fe"
  },
  {
    "url": "assets/js/39.cc5eae7e.js",
    "revision": "24f7bab39338f35035365ed44ecaf864"
  },
  {
    "url": "assets/js/390.9dd07661.js",
    "revision": "e8055416bf58540a2f08f142a1624e6e"
  },
  {
    "url": "assets/js/391.e4067425.js",
    "revision": "825fe20f37562aab28c8cadb0aa177a2"
  },
  {
    "url": "assets/js/392.ea477334.js",
    "revision": "5b2b2cd23f24f0349d6c74bd6166afff"
  },
  {
    "url": "assets/js/393.289f1902.js",
    "revision": "bb2149f9efffc95c574530a8d7b1dafd"
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
    "url": "assets/js/396.3d1a45e4.js",
    "revision": "a2f16f4e1767ea178e2b3a746764cfc7"
  },
  {
    "url": "assets/js/397.b3d33c3a.js",
    "revision": "d3ffeff21a51737d0fe6b46bb9bbede9"
  },
  {
    "url": "assets/js/398.4bcf7a8d.js",
    "revision": "105e714f6f34a2254ea449abde9fb4d2"
  },
  {
    "url": "assets/js/399.f82a1b49.js",
    "revision": "c696454e9a716f673238b021cfc890fc"
  },
  {
    "url": "assets/js/4.eba0954c.js",
    "revision": "4b5c6b0e5ff13efd3f511fb0de1b7e7e"
  },
  {
    "url": "assets/js/40.c709c7e5.js",
    "revision": "bc0d63e1824af5519c8fbfb596b9f2ab"
  },
  {
    "url": "assets/js/400.95f218a1.js",
    "revision": "5211984ca47c6ed5914ea8c781a83661"
  },
  {
    "url": "assets/js/41.a1360862.js",
    "revision": "8f9e4290b23ffbb87340910a6e36f0bb"
  },
  {
    "url": "assets/js/42.abbdf04f.js",
    "revision": "9b79b8008d7c4ef08448773afa054ea7"
  },
  {
    "url": "assets/js/43.5692fa2e.js",
    "revision": "1a4d2004faf85090c8a6af444a5f56c4"
  },
  {
    "url": "assets/js/44.96ff5ded.js",
    "revision": "f318318fc128aa6eb8dd5de2d90f53e0"
  },
  {
    "url": "assets/js/45.927591e8.js",
    "revision": "f572be2501259eea5dca4ebcb6138a2c"
  },
  {
    "url": "assets/js/46.f668dcd3.js",
    "revision": "6a8d7bf56136e0625985ba3a57d32528"
  },
  {
    "url": "assets/js/47.74bb2580.js",
    "revision": "807c2576a64167f6f9cc07bac267c8a2"
  },
  {
    "url": "assets/js/48.c120b593.js",
    "revision": "726793179b70838b5e6e16457b96b81e"
  },
  {
    "url": "assets/js/49.d1938ca6.js",
    "revision": "f5130844ccc026e2b525345e579ca657"
  },
  {
    "url": "assets/js/5.f7ea3f38.js",
    "revision": "0424953ef121dd5a71bed6e46ec4c76d"
  },
  {
    "url": "assets/js/50.f6bee82e.js",
    "revision": "ec7f5fabe469e17def639ab7bc6dc2f9"
  },
  {
    "url": "assets/js/51.c1b82382.js",
    "revision": "7d86737a5d2f09e78e5cbe3f7a8a4953"
  },
  {
    "url": "assets/js/52.3b2d5fc6.js",
    "revision": "ef42f8dbe244a5b29ecc896e8c462acf"
  },
  {
    "url": "assets/js/53.f8cd7c93.js",
    "revision": "048772fb47bca587e619b6f87dcbee0d"
  },
  {
    "url": "assets/js/54.c98ab58b.js",
    "revision": "20d32e369829e4c9cd7c128204bf1225"
  },
  {
    "url": "assets/js/55.4aeb8c98.js",
    "revision": "fe5e6e86720729e3f0088c37cbdbe049"
  },
  {
    "url": "assets/js/56.919f9449.js",
    "revision": "f51302d7ca58322c477933f23cee3155"
  },
  {
    "url": "assets/js/57.7ba3cfd1.js",
    "revision": "6b78983a40d466c0850695b74bf09151"
  },
  {
    "url": "assets/js/58.cfe1e0ee.js",
    "revision": "5babd64e573e81b3850d386e5e9e61b4"
  },
  {
    "url": "assets/js/59.a8f836b8.js",
    "revision": "c52a4ef6950a71750d8b4415dab840e8"
  },
  {
    "url": "assets/js/60.07ba4d66.js",
    "revision": "8088c96925f457810defaba12f5709bd"
  },
  {
    "url": "assets/js/61.9c813e4e.js",
    "revision": "21f2d71c7c6bf700085861daa24997ed"
  },
  {
    "url": "assets/js/62.724c1d24.js",
    "revision": "496305ca58f6b013e2f6faaab601bcc3"
  },
  {
    "url": "assets/js/63.afe79047.js",
    "revision": "f11b8be11109e17fcdd3daf6b4b936ca"
  },
  {
    "url": "assets/js/64.5df13b0f.js",
    "revision": "aba511ba0103fce02a656f4c6d4f5d80"
  },
  {
    "url": "assets/js/65.07cc9279.js",
    "revision": "642da9be60959bf961ddd66fd9936f5f"
  },
  {
    "url": "assets/js/66.a91194d8.js",
    "revision": "16c1338dcc92e95fe6dd819ec763ea98"
  },
  {
    "url": "assets/js/67.0b294909.js",
    "revision": "bf1419332086ac3ab8615aec88a5a213"
  },
  {
    "url": "assets/js/68.f89aaf58.js",
    "revision": "7832ef4c91c394e8b978debdf29ad570"
  },
  {
    "url": "assets/js/69.b86654cd.js",
    "revision": "5dbae0e7f330b101ade6c2933033c792"
  },
  {
    "url": "assets/js/70.fe318b5d.js",
    "revision": "e947b8afe8eb00f9f892c1c7358f3046"
  },
  {
    "url": "assets/js/71.53104a45.js",
    "revision": "770918da0d03dc8b1895b303eeae008d"
  },
  {
    "url": "assets/js/72.8f736381.js",
    "revision": "87a05ba240d529f47dab8148adc2e2e0"
  },
  {
    "url": "assets/js/73.2db902be.js",
    "revision": "359d2239165c6f4acb394f390a6f2a94"
  },
  {
    "url": "assets/js/74.5705ced4.js",
    "revision": "226e333d55d4376c68c58da6a8e28540"
  },
  {
    "url": "assets/js/75.fbf3482e.js",
    "revision": "65388da78cb7902af2923a0d04bc5475"
  },
  {
    "url": "assets/js/76.145cfb5c.js",
    "revision": "5dff08d2f00c53c75e62955e61463229"
  },
  {
    "url": "assets/js/77.57a7e114.js",
    "revision": "8f8d80fc5bfa60836d236b6777623d89"
  },
  {
    "url": "assets/js/78.ce8b778f.js",
    "revision": "83ec968f278742ceb3eee1b1d57d6452"
  },
  {
    "url": "assets/js/79.dd2048bb.js",
    "revision": "132b2518775b60bdbe9546f12e7ca8c1"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
  },
  {
    "url": "assets/js/80.8d3a627a.js",
    "revision": "792ed57b58c605e4f1988e3b4b1ca379"
  },
  {
    "url": "assets/js/81.30ee296c.js",
    "revision": "78a67a00259cbdcc9fd0ba5b41f81bea"
  },
  {
    "url": "assets/js/82.d9f420bc.js",
    "revision": "d67acbd802c0558aec260a029875acda"
  },
  {
    "url": "assets/js/83.84dd8f13.js",
    "revision": "d10a796fe5ca4ffa74b7e622e7db2db8"
  },
  {
    "url": "assets/js/84.13145a99.js",
    "revision": "60074b3a254d6d69ecd7d0022145d77c"
  },
  {
    "url": "assets/js/85.b0a906f5.js",
    "revision": "63e43706d2d6d536c0c6b88df207b5ce"
  },
  {
    "url": "assets/js/86.9f30d58a.js",
    "revision": "d88735f535f2a5ece58ffd0ae283b52c"
  },
  {
    "url": "assets/js/87.173a63c0.js",
    "revision": "d8805fa04e05c330d5ebfa8dbaab3675"
  },
  {
    "url": "assets/js/88.4753e825.js",
    "revision": "3e118d1fcc686f65ed76060fda3118b2"
  },
  {
    "url": "assets/js/89.62017a9a.js",
    "revision": "bd3799d7a07ab41173cc0e10832bb17b"
  },
  {
    "url": "assets/js/9.2d0bf723.js",
    "revision": "80ce4ff1d3443fc062ae3df36be78d19"
  },
  {
    "url": "assets/js/90.95155936.js",
    "revision": "89389a0fe09ed22b1e0a0e0b1d00e290"
  },
  {
    "url": "assets/js/91.b60e5c54.js",
    "revision": "7cad94bce4fa74e42bbdb17312e3b8c6"
  },
  {
    "url": "assets/js/92.3d9d46df.js",
    "revision": "39676a2c2805fd033b197c40e2f306a8"
  },
  {
    "url": "assets/js/93.791be7a3.js",
    "revision": "45daaf8829312d3981cbd7d28050f03c"
  },
  {
    "url": "assets/js/94.24d0a3e6.js",
    "revision": "32622088750bac6663f248271947f057"
  },
  {
    "url": "assets/js/95.9f7dca9d.js",
    "revision": "a01d3764707f95b97497d6ca3abb5ca0"
  },
  {
    "url": "assets/js/96.53f1a979.js",
    "revision": "5649889f162bbb093f39e5c287446609"
  },
  {
    "url": "assets/js/97.34096759.js",
    "revision": "bd3de4264297702519a4d273cb18da1a"
  },
  {
    "url": "assets/js/98.50484be9.js",
    "revision": "a0b8b920ddf20816324fbc4b3bdf4ca0"
  },
  {
    "url": "assets/js/99.8779ead4.js",
    "revision": "24831f91f6e98ea4aff6eb7320472812"
  },
  {
    "url": "assets/js/app.07be10eb.js",
    "revision": "7a02233239a2f991daea3d5371ca2959"
  },
  {
    "url": "assets/js/vendors~docsearch.b946cead.js",
    "revision": "95f46747ba2506a90c061b1557f20d51"
  },
  {
    "url": "index.html",
    "revision": "f15fa8415451e879c20613bd6fca945e"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "8faa7cb96d41093d6893b3f8c46c8506"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "547cc0730cab2520ea3668424e6c1008"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "af9b0ba3d5333bd028afb34ae955d180"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "a464a484661e422ff10b594c69381a06"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "22747a6cfbfe2b699ef6120257af3d1f"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "3bd80fe9c7dc42e8805ad45388f56f78"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "81d0574d9989b1f139aa153258625bbb"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "6488ebe49c480ce423c7c6970dfb09f3"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "914cd9b633fa05208c42c50643096150"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "91b8a6cfabf3a45262d65de95cc1a14b"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "07f6d535f6f1953cc55153683118894e"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "3701a5867ed0926a06c029f623072289"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "09aa0614b044c16a6973eb8ec549fa40"
  },
  {
    "url": "master/api/index.html",
    "revision": "fd1bb55d8f7ad49fedabfccd7c1e7911"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "bd4c2afadee337f289c8cca2d533b57b"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "6926a95b6ef933932d641368a8ab814e"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "5e2c8c1ecf726e33c47028a3aab0a8ec"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "6d9e54bca2627ff12bde5d43b3294606"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "8cc52c11dc9b3bf43782c17fcfb58a13"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "731150e1375ab79d2b6b2e5f1514700c"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "9e5c20976a53d6265eecf82c87ef419d"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "11c2ee4b0d30bff7217f677598d8b310"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "8d4b3d5b556d69b35eca644586699c1a"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "38911546532c302f60845cb37175455d"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "9269eb27c1bda0ed38c200b2a66cadfa"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "4510d608a542abe06b61ffafe3391aaf"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "51589581ae06df215f463462f72603fb"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "8f1d926e1fe4aa7aca9d78ccfe506531"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "e41ad92136763717ef9405b400ff2e66"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "5313e7d722e5f295b4a8fd630a490616"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "34026e0b6d91db22f4e72d4c4333103d"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "ad8d3c24001c282567ec7d672e176dcf"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "7e6ec3839b74fe738f61cfb1320bf5a2"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "ac4e169317d11a5715b9b98622454417"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "2210ee333b198dc70d672656d3800b9d"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "558febc6678ef6e929c4de45cf4293aa"
  },
  {
    "url": "master/packages/index.html",
    "revision": "5704a662935648576f08a225f7ca72f6"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "4352b35a455c49a5f1bdf9cf79dd00d0"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "f6dba5f15d49f3de6656a4006fe5ea0d"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "9fd50904b90b40540ef8451ef3d76ce3"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "84561875f72e459b488c3de4cdde47c9"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "ada6c05d9f385cda6f3d7af36b9b7c49"
  },
  {
    "url": "master/packages/views.html",
    "revision": "cbc27700c7c52d22578e19125e908865"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "1492c63ca40a2eacc3a2342069f2bd8c"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "94cf884831f4990a5d07ba964deb8cf4"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "d32d655f5cefebf0a4866b1fc83af0f9"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "18e9faa864be377360754b3d6a2e3649"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "6ab73e09a33293b23a3806e4ff6e63ea"
  },
  {
    "url": "master/themes/index.html",
    "revision": "e9379354828c705d0e788eea4cfd600c"
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

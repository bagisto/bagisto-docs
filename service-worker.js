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
    "revision": "23e18fb017595c90f26cb61b43a059d9"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "ec475f743d5a21e8b1b976129d542e1b"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "091d0288986626447ff81c40062f2bec"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "d2cf51bc4bae3e7ad6271ac88ea77877"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "e3e1bd7a3fb3ac0f5712432e4529509e"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "fd866e9006046bd514c29fc1f21f4049"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "fa9e5bb462279d4f9f8ac84845afe0f8"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f4a3812dc46d78affa1fb80d8e5e1d63"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "0e9a0f47ebd4059ed836bead87f84caf"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "78d9d56609e86050d8315a29f5afba4e"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "d6b951b97bc67c3e6fa23c0b481c9f76"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "0811a81a9e211c35c56c338da31ce9ee"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "a6bb4379d8e4ebb34c1d510fb70b103a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "d8ec032448d87f1f6890cea888d83773"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "43b826df7aa6a2b411aa69af27847fa0"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "934a7a0ce66845aed017495fe4a6356c"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "6c440b6fa4c455c1f733bfc70eef30b4"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "ed29e8917fe660d03e3f0c455431f052"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a7cf776479b010d38fce46842d3814fe"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "590d1060e1d3b2705fa2dfbc64ca899d"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "8b9fa37ece4d8c2b65e87a1eb3ad7786"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "2dee46ea258f7ea05a92ccf3aee343d9"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "cf5b42888684c7e05894fcd1bf96a0cb"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "66e888e31fcf14b1513b4ef91c5d533b"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "f48c993c6ca803141489215af6e676bc"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "f3053a502c50c8828777917be96986d0"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "2fad4f56bc57698c12264010ea32a8e2"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "dc8869be530994cded87c8285fe8ef67"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "377fa76f2ccbedd82ec23128e7b0ee4c"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c7df55bd0833236729d29e7dd94bb810"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ba079046d0ffb464a59fe9b0a354d5bf"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "7fd62cf58cad60402ada3015377a5639"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "d3f1a95e675c4727143010580e3c7ab6"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "6771a75ad9028a3fc4afcfc49adf8b88"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "b3213988a2b5499761050aa7f81c15ae"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "6f78a48b1e6724c0ed047cc1cd45df65"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "ee93199b9979997ff0200b30360ec86e"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "95cf8dfab9c7d62fda27ccd0810f5b16"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "cd625294c7044f68577cc70c2cd28ad8"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "53ccae91eb54f63760c450d666b30b5f"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "64a202f1f7d0915f046c9df566d0b566"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "50a0cf0456052feefb79334dc0a6ebca"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "8b425eb63231661f84ee2cf630d96a1f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "8b4df2a6cc925e10af1240926aebeebb"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "c8ead52bf9075d143e74459e6bb0e587"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "35d1e1b1b5f0bc1ff73840728de196dd"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "ec67b200a032b02820b269b73c1a40a1"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "b9766c05833e8affbc255be6b4034b2b"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "9e8ae4c6f9057777815a641605e80e88"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "6f1a4fed7e389b847d95571b60cacaf8"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "5ff96ab56f7a237aa4b2eaa001b6f0b2"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "367618944c8277881ca9c90364a3cf34"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "a692df9ebce07dec4eb51561ecaa1f2b"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "39e85d2a7449981724acca08eea34934"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "0ac21e75c4df4519bf3d3e72ed1cfa00"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "74407e54e2d381bbd111f0cdef83fdc1"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d6d49e805c12372ca46ec2b2670eb332"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b85b435ee5fee85a19c0dc2189037437"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "f57ea17c6032ba668fae100e55556584"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "f38c26ac81daf32b28fb6c14e5b13e02"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "e343c31a76b4c8f74c0188fa5b5439ab"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "866ff28c15db0fcd739800c4321969d8"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "c3571dfabe63ff5d05aaf963401bdb54"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "7fd32801b6d11c0cf21bd279ba695abe"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "9d4cff4c80b397a3d840e03168501503"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "70b0dc1f0d7c4d935505e3ae54359c7f"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "987ec7f845bf191a7c67e75a590d4cb4"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "c6c8490c65e193b95057f4401ea14e47"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "c9b05a6d7d523f22d0fa5a021b5419d9"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "99a82de891b997dd0eca4e659d32e244"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "57ed12a662349c95261d8b52a91d07cb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "fc972ced82b2dbd86839c4524428f89f"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8e5382a747b0f5a2101ee396eec2c7f0"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6da6f03521feca3e82fa1d685327a4fc"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "6bff2225448beb6a58aa5da4a2b166a5"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "6b69167046d8ed4a39f9545c48400b8e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ebbafc39e5bbe2e6af0d0897e9b2c186"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "569ce80b866e4b60ca09d918953d9188"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9a254833c246708370c9024ccc99a928"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "3358d8d2b8513c52f81c05031ce8699b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "77baee18a94543236e2860ec3e4381c9"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "95b83c0a3fff8c3f0f2894a78285b647"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "89f8b99fda16f5f4fdaa270d61181824"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "a6b11042c2b82a66b207588bca41ca7f"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "6e6cd8056ddfac37478a8c98f03708f2"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "e4dcdd2853011de64db34a3587821888"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "7c1fcfdbcd51aefadfe06e283d15f00c"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "71fb8ff09cda759c663b9ac8c9e5e944"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "506e020067a98024d6f0b2a8361e02ed"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "e0565127ebfa5034343cc81240a65092"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "b141ee6d722585cbe7cf8b8437c85258"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "bf77560516334ad8392b09a166c658ca"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f0a3b680cba2c9788c5634754bc828d9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b2b7f678175f705727767937f28a63e3"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "8e1c7aa119bd65df2dac88b5a4900a7f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "0c8fb3731085d50ef8580865f785a9ab"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "f009d36e9370397c4e386dc0a1b9f1d7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "5545044d4184f76bdb3c4c966071ecaf"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "5d45a6f57047f900c6168e9051ca4a3e"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "2bde58482765c01c1e4aa25501f00a7f"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "b0bbae1ae5719638067af5508e93e78f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "a00cf4ce600f4b83c7c886a1e2178e6c"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "1c29f6f08df2bd34c4c973a6eea57229"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "4ec4095cc77afc001b9e7663bc35a205"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "02e6b08d83f79aaf7989bc848f5f2a9d"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "375cc316fe9d518fcf39fdc65b117a7e"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "cbbbd756d6217e397687ba1e9dea7f4a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "a3dc9e07d0cbdd9f737b27af4413aeea"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "e56171b491d8d023ae0ed665faede981"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "a793e5568ec772b9f3e240d0c5e6d1e9"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "2cd97d94783f9424f36b9b37e2baa457"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "ad3c8e98aabedc9cd1e548bac5b3e50f"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "3f92c4721cc21265a236918aa3a6d77c"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "dbabbcc68a0e0f6318826b811a697031"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "caf6fa410844f73d0e6be76b88f05cb2"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "ee0d6faa8910307d9d87d918c692faf7"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "b9040170666441d0d9dbfd74ef20ad60"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "60b1f1ca28c67deb21b39caa97283b51"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a4c0b3055181102b6cc50424e086bf30"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b62bbe0539fdefa319464375e68b7594"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "5eddbaf072c3cf94a79e9e5b756c94fd"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "9bc6041ee6ba49d3fbd5af3bf2c0cd3c"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "360829c5c3dff0e9fed5add04063985c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "6e0a3f967ed4bd13e2069e2b161dcb68"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "40abd75b53e2c14da64744d5fc814429"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "849c5673472b1d3fc4cd8a586437c030"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "1617aba8c27b47f33e2dcd8c12a87a55"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "a8a98933f61be8718f0f184ead9f8008"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "9ae26c6fc0c96c78e6d9581cb235e040"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "ca96c1d732716bcf1cb3e112387ef254"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "e3841531a0da3419105fca0930974f3a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "6df02c54f6c09e556843bfea84602d49"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "9dc7a3410ac0610955f0acb4b52c680d"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "d8d4e6007d656f50a8c9ccc4815e1872"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "2294b9bb930b9611b41c12fa3a3a9d89"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "f41dafb280928a545a68412530f104c9"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "bad1435d3894eb80890f5fb0b61900c5"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "21eb6f7c9e8428cb620f59f862b2ecbb"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "7e5940f02aee70f9d8982efe3f9581d4"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "e2c737c6ae6bc1dc5b6feb51cc3e144b"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d31b545540c81a14ad85b7b36620e737"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "7a7e5b4fbf8ea5a921079377c6d56b87"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "1f369b6e86e0c956d0ab9d568fe75214"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "8eaa23109a1c0ce86e6bb5e0e8f9d3d4"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "317eea3a1a49f5e9fe192271adbc2854"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "504a7cc700e9128b3b7a81a9eba086a6"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "48b8b9e316a39d0a6a5549df0da6ea18"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "58f0fb8f117d5cbae742c48dbcef9e55"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "284379e50b02a30a7b54066567c0f329"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "46a78b1bcd4c23b8b4a47ddcf8783a37"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "2ec0e87c02a9057d3c5e999548380877"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "f8c5b8be15c8383d04f38c48278fe5af"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "b07cdd31a8c6f98162f2fe4ec99fb67d"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "d38b2284ee2cfba3b6246418e4bdc71d"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "4f0651f32028f7516a99e936dc88e88a"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "1e8e317359c6c6019fd3f1674dc7cfd7"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "4af20cb0125e20675faedf46680db729"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f649c48d05924a64a95dd6050ff07b5e"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "6681388d0de0ef290786d6bdb60353fa"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "1ccedf964f2811330b0975e3a6ac5ee6"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "61acd9d278882457f2e915ee2af7bbeb"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "88d25995d26f141e2d9716b569333018"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "74447076574ed901c9d63c2e72664936"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "c3e0cad98fb3b35cc760471a3dd75ecd"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "1e4c6f37610466602926f2086eca40a3"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "0af0ad7509e692c6400a092b483b2280"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "6185e53b17c88f4aeb5a952366e2a1f8"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "3593c87adef10110f6c85db6be310396"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "806ee560bc9f0cd36c05a1060e4b705d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "6816f2c5f9bfea1405d36248307c1e36"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "fb9ea77fae3caeee654bd6490374519f"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "ea9da5b4f195c35bbc8d0243196b6106"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "ce86d5c6a0749b36a7e6aca6863b1393"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "e372f3fc11804075c79aa1ecac13b385"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "41ff4fe8329bef187d3dbad09bf683e2"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "596877c170ca2fad0e2f4693b088a7a9"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "d212662c3c6f11ad00909465bc2f43b8"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "055e71efc0d15bfb3c315d74b98082d8"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "13176ddd371b6a1418e65e6858788731"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "ddef9d5604f1aa648ce7009ee036a5ed"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "20f9591f558f0d8faff5436efa3183c5"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "99dcea810896b06e06ad130af5e1b05a"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "37d33833558b64fd331d239cee1a05ce"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "cd8e15b17c24f66a4697c7d650be923d"
  },
  {
    "url": "404.html",
    "revision": "93da65b7e85290da99babcfe7ba4dbdd"
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
    "url": "assets/js/10.c7ee7149.js",
    "revision": "a995b118e7d26e5cc00718ef45f01d7a"
  },
  {
    "url": "assets/js/100.eb2c1958.js",
    "revision": "5632a8ad8bd0de51c3f4c373f7a0f6e0"
  },
  {
    "url": "assets/js/101.b877b8ef.js",
    "revision": "9079e22a833dc0836340e1951f1a5127"
  },
  {
    "url": "assets/js/102.fa70f183.js",
    "revision": "4ffde747f38457fee9c162e3b952f7c9"
  },
  {
    "url": "assets/js/103.cd067644.js",
    "revision": "a4e53b12c5f005006af1e234ed4d5b5e"
  },
  {
    "url": "assets/js/104.cee52a1d.js",
    "revision": "a3e336bf29e0274b1112f8d7479799b9"
  },
  {
    "url": "assets/js/105.5abb1d23.js",
    "revision": "d7b5ac78dbb84b363aa88df0f7795b27"
  },
  {
    "url": "assets/js/106.95a77cdd.js",
    "revision": "e2472e9b8ccb0d99fa4bebdc3993e5f8"
  },
  {
    "url": "assets/js/107.fce4ebff.js",
    "revision": "dcdea7ac49a037554fdc2c4b6373559a"
  },
  {
    "url": "assets/js/108.26b2acf9.js",
    "revision": "b861c7446a6e3796d6794e1b61bc007e"
  },
  {
    "url": "assets/js/109.6fbed98e.js",
    "revision": "da01eeaed245574403b783783b5e133f"
  },
  {
    "url": "assets/js/11.20ade292.js",
    "revision": "98b5e2581aec1e4ec24f589df47c90b7"
  },
  {
    "url": "assets/js/110.252b5405.js",
    "revision": "ad3a16975b704a0165ff9b733d125e1e"
  },
  {
    "url": "assets/js/111.ba57cfa3.js",
    "revision": "2f3523162fa2b1e5f0abfcc61087c315"
  },
  {
    "url": "assets/js/112.61410990.js",
    "revision": "f485c47d6ca660bc3e14cb38d4f1d49e"
  },
  {
    "url": "assets/js/113.c194288f.js",
    "revision": "cd2f34b87668f25f9da0678375711015"
  },
  {
    "url": "assets/js/114.9801d35d.js",
    "revision": "7121d607e36190bc4a8c489b82f74cf7"
  },
  {
    "url": "assets/js/115.e8f7a18d.js",
    "revision": "9eacc11e85b0dc6095dd8c07a6720b84"
  },
  {
    "url": "assets/js/116.8bcc99b0.js",
    "revision": "b5652f033a50eb9efece9308189f75d0"
  },
  {
    "url": "assets/js/117.6de7d2f7.js",
    "revision": "2af15b952e111820c42bb584f92a9478"
  },
  {
    "url": "assets/js/118.b2deab59.js",
    "revision": "619874b618c550939b9346b85023bdfc"
  },
  {
    "url": "assets/js/119.0c15f6ab.js",
    "revision": "5ea2e945b0bfe8b5aec081a0b81bd055"
  },
  {
    "url": "assets/js/12.6dc663c6.js",
    "revision": "94023bbc3d8efd5554b8f723e8f9cae4"
  },
  {
    "url": "assets/js/120.48aea012.js",
    "revision": "4efb8ef24036a077cd975835226b2189"
  },
  {
    "url": "assets/js/121.3041b277.js",
    "revision": "9be3dace6730fe236200df2f02fd6c5e"
  },
  {
    "url": "assets/js/122.ef50c9bb.js",
    "revision": "d96c455d7552b614d1153d5a45cab8ae"
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
    "url": "assets/js/125.1f76b72c.js",
    "revision": "f2bd18147230ef0e5c7711a31ddbd128"
  },
  {
    "url": "assets/js/126.670d0820.js",
    "revision": "8c6e3cbd15a20eff8fb7773279f668b3"
  },
  {
    "url": "assets/js/127.78dc0a6f.js",
    "revision": "043e97d42fab0e425b05a1ff8761bf7e"
  },
  {
    "url": "assets/js/128.e55b6335.js",
    "revision": "d761cbaac0ed26228b9ca24dec9bba21"
  },
  {
    "url": "assets/js/129.4dfd121f.js",
    "revision": "ef17714f7560cd8fc734fc73a3930aaa"
  },
  {
    "url": "assets/js/13.2ecebdcc.js",
    "revision": "59a65d30753d5df4392d3238bf5786db"
  },
  {
    "url": "assets/js/130.4091fdf8.js",
    "revision": "fbc481a6eba4526c47ed9ce410e2fa67"
  },
  {
    "url": "assets/js/131.dc6e5472.js",
    "revision": "f14fdf5f42fc8a3e2017226d2249c192"
  },
  {
    "url": "assets/js/132.d10ddfbf.js",
    "revision": "980ee8ee4e353abd3099b5f53bc7eff7"
  },
  {
    "url": "assets/js/133.fddf300c.js",
    "revision": "a54f3cb32144b4401ac39115935ee76c"
  },
  {
    "url": "assets/js/134.73eee3c5.js",
    "revision": "4e83f28a12fb9eb53e734a923761d955"
  },
  {
    "url": "assets/js/135.1f8a84be.js",
    "revision": "b7634481d56e76e21f7fd76cb9c07684"
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
    "url": "assets/js/138.4fa367f6.js",
    "revision": "e9bd52bb3b89899931a16e8cb1b53483"
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
    "url": "assets/js/140.201763ad.js",
    "revision": "8bb38816e940e58d8ed90e5b05d05639"
  },
  {
    "url": "assets/js/141.6f62d37c.js",
    "revision": "1f5e92b1d5c25af080efcf6ef360a9b5"
  },
  {
    "url": "assets/js/142.6c29bafc.js",
    "revision": "03e44f9f7aa1121b284478f75f730a64"
  },
  {
    "url": "assets/js/143.c0b6fc76.js",
    "revision": "7424a5b44449327a379a231e4c230a8d"
  },
  {
    "url": "assets/js/144.07ba2792.js",
    "revision": "22a99fd3369b74887143321b3154e791"
  },
  {
    "url": "assets/js/145.733bbed1.js",
    "revision": "2ae8e1d09eafc56b0171e720eb074118"
  },
  {
    "url": "assets/js/146.3aa6c615.js",
    "revision": "8cdfe17a0328686a310d7685729d30cb"
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
    "url": "assets/js/15.da20658c.js",
    "revision": "cf1043451ffe51fb1f45b7683d9d485f"
  },
  {
    "url": "assets/js/150.a152f19d.js",
    "revision": "d2964509c57b092a38e917e27fa4983e"
  },
  {
    "url": "assets/js/151.b6e07312.js",
    "revision": "280789bcac964b26eaefbf1e08d13b58"
  },
  {
    "url": "assets/js/152.9da4400b.js",
    "revision": "fbc2469ab8519293ae572344ed62592b"
  },
  {
    "url": "assets/js/153.3151baa6.js",
    "revision": "8a5645a5c3a9223a8a81e723369313d2"
  },
  {
    "url": "assets/js/154.b72c4115.js",
    "revision": "69118009e7c2943bcce7723a4bdcd8fd"
  },
  {
    "url": "assets/js/155.d0fa1c52.js",
    "revision": "394d9f075f57a30c4496e8b3b73fd058"
  },
  {
    "url": "assets/js/156.099f3737.js",
    "revision": "e0ecf621e313f415e71d96be7770a420"
  },
  {
    "url": "assets/js/157.a050e4c3.js",
    "revision": "4890dd2b5956612d3e167438851b2122"
  },
  {
    "url": "assets/js/158.8ce37907.js",
    "revision": "ec9e2fe416425337dc5ea9f816ac910c"
  },
  {
    "url": "assets/js/159.9c4b07b2.js",
    "revision": "b07c7635332c4edaa183a9d2f1d28772"
  },
  {
    "url": "assets/js/16.675d607f.js",
    "revision": "43a642946abcd447673ded3ed9c0eaa1"
  },
  {
    "url": "assets/js/160.8b4bcafa.js",
    "revision": "268dd801ccd3951a6d899ca7a6b7f4dd"
  },
  {
    "url": "assets/js/161.283a8b9d.js",
    "revision": "35dcb94dcd33189fa995a1f7ae158b6b"
  },
  {
    "url": "assets/js/162.22e0eeb6.js",
    "revision": "210d2816c8ca03af2c2fc75e5cdac018"
  },
  {
    "url": "assets/js/163.1553e8e0.js",
    "revision": "8e366412fdfe0a3a13c9e31cfd856dbf"
  },
  {
    "url": "assets/js/164.f005d114.js",
    "revision": "ac6068e35fd2ad94d0b6829fc099e51f"
  },
  {
    "url": "assets/js/165.dee23832.js",
    "revision": "277507f490fe1283997a7f3eda09ca8a"
  },
  {
    "url": "assets/js/166.ffde0e76.js",
    "revision": "4d17a3cd719da4aebf1dd70d7249e202"
  },
  {
    "url": "assets/js/167.897ff868.js",
    "revision": "b76511dabce8428ecb057b64bd5fa735"
  },
  {
    "url": "assets/js/168.8867f6d0.js",
    "revision": "7b87709b882759e6b5b93e1605467e69"
  },
  {
    "url": "assets/js/169.c3015a9c.js",
    "revision": "9e19bbb1c64effde22dc4f365cfa0b23"
  },
  {
    "url": "assets/js/17.18619478.js",
    "revision": "feba15f698b0cc926fd6e6742ae2c3c8"
  },
  {
    "url": "assets/js/170.c0428302.js",
    "revision": "d117a3b02e7f6fdede57ad6233bc758f"
  },
  {
    "url": "assets/js/171.002a3321.js",
    "revision": "8003933ae4772ae35a6a09c94886b2eb"
  },
  {
    "url": "assets/js/172.7541f9c4.js",
    "revision": "bad95a6d28b6fb12744ad8fc82ce3280"
  },
  {
    "url": "assets/js/173.8a730493.js",
    "revision": "c08782d27bca010ec51b437aa20cbf96"
  },
  {
    "url": "assets/js/174.dbc8a27a.js",
    "revision": "993bf60314fd2da456ba18be3f4a65fe"
  },
  {
    "url": "assets/js/175.d7e4de7a.js",
    "revision": "92c07991cffb1f991b64e309734d6abf"
  },
  {
    "url": "assets/js/176.94fc2443.js",
    "revision": "340634752b8f98d86e37837bedf8dff8"
  },
  {
    "url": "assets/js/177.9d8b5f6e.js",
    "revision": "13035dd75dee95bb6288100b1e98b120"
  },
  {
    "url": "assets/js/178.f4da6034.js",
    "revision": "c5947b53861c883c2bdcd708be52e4e6"
  },
  {
    "url": "assets/js/179.446ae35a.js",
    "revision": "013ef2fd5b6a243aa57b0edb510df77e"
  },
  {
    "url": "assets/js/18.b0d8b10b.js",
    "revision": "f6ee5b767f325dabc8e557b38ae83a22"
  },
  {
    "url": "assets/js/180.368e31aa.js",
    "revision": "d80163253983d0daea6b4184ce574b12"
  },
  {
    "url": "assets/js/181.8fd65e21.js",
    "revision": "e3e5fc52117d9e47234cb485326e2524"
  },
  {
    "url": "assets/js/182.4cc65053.js",
    "revision": "95f4add144657c880851809233957af1"
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
    "url": "assets/js/185.d01816f0.js",
    "revision": "9eec0473d3f7b6e156358349eda2bfa1"
  },
  {
    "url": "assets/js/186.8e94f63c.js",
    "revision": "69e6e8b0b9384e4bf0d81bb1255008a4"
  },
  {
    "url": "assets/js/187.f26dfc36.js",
    "revision": "c526d96f4d6fdee26546da663f801b2a"
  },
  {
    "url": "assets/js/188.1c5a19e4.js",
    "revision": "efbca526de1568ff38622f57d372db6f"
  },
  {
    "url": "assets/js/189.80140e9d.js",
    "revision": "158565e71479fec35e4b53c1d146c290"
  },
  {
    "url": "assets/js/19.0699141a.js",
    "revision": "0dedf3362685ee7677b348b6a8e3e270"
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
    "url": "assets/js/22.d56ddbe1.js",
    "revision": "39c6dce626eae40a8a218f6847627475"
  },
  {
    "url": "assets/js/23.757bdc9d.js",
    "revision": "a55f17f1bb2a726e217d47fc8742171f"
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
    "url": "assets/js/26.aa8244f8.js",
    "revision": "a554ca49c4e70a39b116bbf8516e94a1"
  },
  {
    "url": "assets/js/27.8dd67952.js",
    "revision": "086bbc0a276d51edee37f714ca8c13eb"
  },
  {
    "url": "assets/js/28.6eb0cd5f.js",
    "revision": "db536fd114bb29a2ea5ea91b8f5a5ffc"
  },
  {
    "url": "assets/js/29.8a5ce6b5.js",
    "revision": "eb8304f0225b54c17866881efcfc753a"
  },
  {
    "url": "assets/js/3.28090f58.js",
    "revision": "e8e73a9257ea16044750c416460cf6df"
  },
  {
    "url": "assets/js/30.69955d18.js",
    "revision": "b6682f50655238ae953a9b75d934978b"
  },
  {
    "url": "assets/js/31.ee01bd2e.js",
    "revision": "4eeb86deef69593d8754a79859ce27c6"
  },
  {
    "url": "assets/js/32.a9618577.js",
    "revision": "a25e56e414753b34f06cee1d1d1200f6"
  },
  {
    "url": "assets/js/33.236a9cdc.js",
    "revision": "e4f5f38a5ebd447f1ad7b40b4efa8034"
  },
  {
    "url": "assets/js/34.247b52f6.js",
    "revision": "15853fdcf3128ad1734143ac5a3422bd"
  },
  {
    "url": "assets/js/35.eb711243.js",
    "revision": "c821b4d635da50d7cdcfc10050ecfdbb"
  },
  {
    "url": "assets/js/36.4df70dad.js",
    "revision": "fb6c65043e42c394f126c1ac30ddb0d0"
  },
  {
    "url": "assets/js/37.71da65d7.js",
    "revision": "a9ee6ef1171fadeaf02cb942842dc676"
  },
  {
    "url": "assets/js/38.a8b0e376.js",
    "revision": "8694e1291472f88028e0dc4f74c29854"
  },
  {
    "url": "assets/js/39.c3b3a11a.js",
    "revision": "c4387418112db91f18310e3e7f4e2531"
  },
  {
    "url": "assets/js/4.38834f61.js",
    "revision": "7939b3d8fbcc0a2969510709e0311b1e"
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
    "url": "assets/js/45.431fe3dc.js",
    "revision": "da4c99236b4c19b6df335b38da1d10a2"
  },
  {
    "url": "assets/js/46.fa442179.js",
    "revision": "af01b490ea001091cf89bd6fb814e2c4"
  },
  {
    "url": "assets/js/47.c58c0e53.js",
    "revision": "b08f7f8843a54f9b9da5465e853b0e9f"
  },
  {
    "url": "assets/js/48.a8849bca.js",
    "revision": "acc0a592916c5593b15531501975590f"
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
    "url": "assets/js/52.550d4f6d.js",
    "revision": "6d56efc90b869b1cc146b223d373b3ba"
  },
  {
    "url": "assets/js/53.156776c9.js",
    "revision": "744d1cba142038d5a6d73abd094e4ec1"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
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
    "url": "assets/js/58.d77aa79a.js",
    "revision": "f5bca4992829bd7d5ade2e225e0cca98"
  },
  {
    "url": "assets/js/59.2f32c928.js",
    "revision": "0cea871764a681c1d3fc391ede1e183f"
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
    "url": "assets/js/61.83490ea6.js",
    "revision": "b3fffb5b2b927fc863c1ee5cd9e6b2f4"
  },
  {
    "url": "assets/js/62.9d6df6ba.js",
    "revision": "071092460610e4f347240af7a803cee8"
  },
  {
    "url": "assets/js/63.ad36c441.js",
    "revision": "5397abb4acb5892a436e4cd2c4eb1915"
  },
  {
    "url": "assets/js/64.480803be.js",
    "revision": "2d0bcde1af8448b6a8cd05b4267029f2"
  },
  {
    "url": "assets/js/65.3d9c4f4c.js",
    "revision": "aaf555560575442e2ebe9f4f2a593c96"
  },
  {
    "url": "assets/js/66.65eefce6.js",
    "revision": "9e95468e9c10c8dd077f21f937c971da"
  },
  {
    "url": "assets/js/67.b1789c9f.js",
    "revision": "eb6c73c0b955b95d38a6252159774fd3"
  },
  {
    "url": "assets/js/68.c03bfcfc.js",
    "revision": "b7b8dc7c5f6ed586d691812a9b422d45"
  },
  {
    "url": "assets/js/69.0f18e61b.js",
    "revision": "4ab904b58ccfd6f2ec2e0a658d36ccf1"
  },
  {
    "url": "assets/js/7.f5b04767.js",
    "revision": "d48b9d35e99d9ba4b4b2ae490fa5401d"
  },
  {
    "url": "assets/js/70.c79dfc8b.js",
    "revision": "6582b0275c1cc33c4f3e8b9880da9bdb"
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
    "url": "assets/js/73.bad78f45.js",
    "revision": "99c6d6da986e313c36d7361c254b1401"
  },
  {
    "url": "assets/js/74.95258a5e.js",
    "revision": "13d4a1c21f2c9b8c0e92de543cca4006"
  },
  {
    "url": "assets/js/75.f7c1b039.js",
    "revision": "1ca3a48940a0f95473540b606ba419b7"
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
    "url": "assets/js/80.044fcba7.js",
    "revision": "850a8fc8b13e03fd5608386696c3a0b2"
  },
  {
    "url": "assets/js/81.8c308c18.js",
    "revision": "f3636a222b9b69870e78687be6ae9e2d"
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
    "url": "assets/js/84.ca00eeb7.js",
    "revision": "7f027ce9238f371106daab5868ef680a"
  },
  {
    "url": "assets/js/85.d4b107d9.js",
    "revision": "ddd311723b1d6732ea47fc94cb68fe3d"
  },
  {
    "url": "assets/js/86.e7d0fa0f.js",
    "revision": "2679b9810e748e42b37c26c72be2ffd0"
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
    "url": "assets/js/90.3ddb2c53.js",
    "revision": "cebdd1ce4bd5dcaef84ee3f7b76f7047"
  },
  {
    "url": "assets/js/91.473346c5.js",
    "revision": "7d69f9ae41700e5b42b17dd502cc11ac"
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
    "url": "assets/js/95.5a2b1da4.js",
    "revision": "a0174e1acb019455856f94f7d873f500"
  },
  {
    "url": "assets/js/96.0a534bcb.js",
    "revision": "2926a4183a848721a3f586034893d90c"
  },
  {
    "url": "assets/js/97.66be9633.js",
    "revision": "ba58b961413d642e72d94dbf51593c6e"
  },
  {
    "url": "assets/js/98.f6932ac2.js",
    "revision": "fe4ffe81f92772e781cdd60c702cbbef"
  },
  {
    "url": "assets/js/99.f27157cc.js",
    "revision": "44f1c3678d7535f108c6c439545dcbd6"
  },
  {
    "url": "assets/js/app.a83eaf0d.js",
    "revision": "2dc7318409cbf8e87479525168fe96e8"
  },
  {
    "url": "index.html",
    "revision": "79e5b7e0a23111397a977e96517fc4ef"
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

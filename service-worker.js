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
    "revision": "c62d892545a522a5adf04e1bcb6eb215"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "9356d4e70c3023591eec05e32d825b8e"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "216a8ff09a14037e1fcaff2ba4d74fdd"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "b8f8b15b9504ed15b4a4e9c01758a77b"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "4ad2cc77eb8617c6d85929a8166a8a98"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "69810685c70d61dabd6ca0244c1fc33c"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "d172ff3f6d5454331de4803b558e19a3"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9672edc9658f127410f51e361974dcdd"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "3eb6f47774e3532305d8916e324dac1a"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "6131da61eb59855bdd9c7265173fabb8"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "1d6c165a1751e4b4b3db8c419f72f59a"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "51bd572fe28f291b04a603c38a768176"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "df2c193b9e990f1e330b0a01faff884b"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "01a49af04f789f2bda98d1daf3cc7634"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "b1f65ec336eb0c3540c2f16db3acce63"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "967b807a4de6dcdbfe7401181741e1b7"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "170403761e32e4fe6dbbd3825ef8c03c"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "f3d47b6ce75c10a727836c1f6d4d0a46"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "fe2cc4f3f075c178f1dafde2b2d14659"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "a85b8aa16a5873db755e9631e7d90e91"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "07f6bac5f13b27d175bbd619769d196c"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "00673604a4ebc212e56c929de721512e"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "289c9f835137b1459c45fcec0d59cd57"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "e60bb2389fcedb045a620bb5400b30a9"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "926ac3cb71ab3d783ca2e5ffc96fa56e"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "948039bca007dcdf670a49af89caf81b"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "fd28077117f980cfb66814adaf5f0bd7"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "e6e53c1ad45ee19c4ea3e9fe0cb7f82f"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "870af6ee21098871020d90e806f537c5"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "795d3614bc2ed4c3302a834ebe25a612"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ef613f26a3eb657d00ab7140bcf162c8"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "35583675ce7dcb389087a9218e215030"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "a2c3e8b1b7e384a0b1d30fea80f91b32"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "06f32f5cf31c5641f57822b31ed40747"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "1d4120aae0c54440f81618bcaa09f084"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "f9a9b81c804fd3a9db9a858c50a7a5b8"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b0081661ce9840a82c2af5f26cf07859"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "4f9c6cb9023b0aa57e526c0c03951e6e"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "bd15ee24c6720d86664baaf16bc1477b"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "6126a21431723c498137d8ea177840d1"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "537401c4451a05e740a32180f298dd2b"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "a47a97d0d4f19e252ab340f13e744121"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "384b00875e53374c4adb8d1608b1d08f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "7fffb2c6ed5976aec06e27a0ec589487"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "306ad742514bb04d118a76f0d399b762"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "ef5e5a0b29e504bb8f2fff9035cdbbb6"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "307c8f8eb3b1e0c7011c25c0a634879c"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "720dca634d012c1738ee52afe42ffbd5"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "e57d0191f98d9b6486bd3a3d98277298"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "a24b387113fd4f9daaab1f98c94c1ac5"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "3ddf30bc42eb585be9e4e3a4fccd3aa7"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "7d2ca7b8a4697aac9ffc8cc9a7d9b1a5"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e8161eee738c516a0d4bc4097e71d305"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "b36dfe47d04b4ef2a2a59a0beb8a6f9c"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "6609b24349627c610ea90cf48967f1c8"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "adbf0b23feab87243486ba101e174f80"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "dcea3cd101da5b28cdff42413396bcd5"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dcd567c9cb21ef458399cdff827b6aa8"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "10db8a2220d555b7b3bce3f1b1dd678d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "83f65686f0a4ed1f629e547d4163d882"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "b82542989626baabbedb2aeb206e73f3"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "516d0e434429749dfac06a2b9de8d343"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "8e08b82e76c81f811e1c967ee31cdd72"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "5768b0efca31182f149dbd46b2e773d9"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "9b3839712afc266a84b2e51e89121b94"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "db0cfe32de6d0327a6a19fda2828361c"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "c29a5e024d972d6b0f800da264eb977a"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "a96c68b8dfdb1a3752aa1b836d6a31e9"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "89f3a1239ddcd9683bcbbe04f04c8623"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1484f56f979018641ae6bf5ceba3ffed"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "23ade84569fc076d488fabb83886a703"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7ec0efaa11afcb601f3df5b60b3fa28e"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "a6f99f659444f77cad9e9bb427ec6bfe"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "5e51b6eabd1687fb5ac15a0150ac0cf0"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "054d53b46114a12f8f01cd5dd02258ed"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "a3bfdb385752df8a02acc747cf302f68"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "6afa9386c8f5cda8775e1dc415adb1e8"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b68888a60ddccb6deea3171120539e62"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "2e4ac8cfbbe709fd727b430d2935f878"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "2162793c9d79ce55a50799c3b9cda28f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "5f3cffed29ed3bf705318831f5e36b04"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "6693015940820281dda97541c5d0a3e6"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "b6fc6a97e27f8f1855d34060153e25ce"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f041e06c6e633556cc7dbb8bad4acc8b"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "aa3758f1618592d1153f071171295940"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "c17b91fa59acd028e1b27d1c9de167e8"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "e41511459bf1483fcd913ac59b9d439d"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "3525c598f40c6b6ddeec3c77efe8c3d9"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "4a241be030f9ee47cd1f06a9aff046be"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "3a2014dcf4a78f5582aae11e6e7e17f6"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8b99a059b777ed87f85b1d6e64528295"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "1d930744e471d5eb02f840917adc49bb"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "299383a2ddfc3bbd716cdc7549c02210"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "db32965df959d2bab179681d53ba6405"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "6232e70b161b6aefe2b8bcb3fbb9be4b"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5d1fc0d27bcebbe14cf663a5a1b93c24"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "38f0d1fca9d4c296bb0fe43b5a4565ff"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "e7e7fd06e5cf524dbc501e9850083fb1"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "40dab82039b52f14aa6cb02a3ef7d879"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "e659f440cf0bb0745e953c787e75405c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "305663ef1ff7688639c26637b380218a"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "5208288703d2d1e2b9c9f625f40b0df3"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "605b477b7acb1e3bc7065a92a732a415"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "ae469b9f1a7e0d3192ad8709b0f700b7"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "1dd829c306278925515e96819ce28187"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "f747a958507e74c75df5cd7b9cd8bba8"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "f4211339cf2933b1188c45565b68bc4c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "abd7d04169cf77e1deeea051bf9b40cd"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5dc70b05ee3a47df952569a9b927f5d0"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "66ec422ec39bf529ab335b0a7fa6d5fe"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "0dcf3e3269fafa8195d4f9bf1afdada7"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "e20d8a28e75cf876b73892b3058067c1"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "2daeb4333539e0da9ad447c34a534c7f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "c3f5cd45d38c989324d4c25b77b5598d"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "75cef61ce419e93dfcce205892bf0103"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "e317e58d10c7974ea6896123b8311134"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8b5a4c607564d201d42a6f8f2e7385fe"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "1fe564fe5e7e248b4a22fd2b31fe14aa"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "1280d586770b516a2a4814db40e5221e"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "08f0a2676f5b53bde646adcd76b48384"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "365c4162e3e8ca2c4ef0c5bd7a58155e"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "33dec34a5504c44ce378597067668e70"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "4a2de0ee6be7cc78f31a29da74268c37"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "1bc8c39e9944fd96c33ae386fcedaef4"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "8e8d8b33d1f82dd3ae5714c1e90f9c2f"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "38a52a25e52c2e114cb5f3eb4c164d19"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "cd00ce707d98da35fe0942259ec69f6e"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "b63556a00ce17362e1403a70d65742ee"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ffcb0fa90a46f894d3fad892f62f760c"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "9a49fdde12f2bd5315c0422ecc3d1f12"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "26b221b6cd81f539b81614ed7c38007a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "2073c549d6f70ecbe863ab6986d81990"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "513773f5b6d1dc01d2f7a1a9de426d1c"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "c7e09031e58012996f6c9048bd836402"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "843a4908adc5c4448986bdad572e505a"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "ea147d3e5bac8b85e55c8b709148d797"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "3eccd5fe96110772fe4052318b6c8d04"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "7fe848b72ec24302582620bc55504f5e"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "3a6cd0044006513f04379aec7e6c97bd"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "ca0d30d8e7b7e6695c548cf92fc182ee"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a7f143b83439228cba42be7cfdcadd37"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "93b0f9f8f1a9103bb15047f047c909c8"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "541ddb6d9047d7dfa10816337f990da1"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "129a321e6eb8478a23999b0bb55cbf9f"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "b7648a744a6a1f62cb548c9c8ba68fff"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "8b23ea7196fdac6737b6544257135209"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "4c50a931d7cbea91644e3505c3ebfb8d"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "40daaf7e294029fbcd2fd4fde235ecb7"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "991098a946a42c18726e34250d8e720c"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "bac73bc8e4187b20cf6f108c6cd28625"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "c2317d59b287d39332a8f45e7e9e0c5f"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "9ca7baff7d6d2564041a138748e3244b"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "c4a46c15d0801398c1d6df04a7d21769"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "43ea8799cb7cc87952d8fdd0df0db992"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "8d9f3feb5c7b79e90ba01a2f6813c2ad"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "1e09b37d8a0a742e072c83847d71205f"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "c433cd5a44fbd3009740dcbfae4d584e"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "bbcd0d4fe7da792dda7a54b0a1aadcbc"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "602a2c3d2c5497324d322db55a2c383e"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "7fc2f35f24cb4a2bd0932426b1f74bae"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "bcb96de4a3b064891f44fded89793f06"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "b6ffcde17d5791ada3ccf3cce3092f7a"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "cb2b5d8427ede3453fc6213191253a0b"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "1d3bcc0725a8d48ff3e1a1961fe2d04e"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "75d1b8056ac0ffd2f43f5cca12fc5e2e"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "23aaa74a5955bd747d111e294f3fb9c8"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "17e3871146aee1d22d50176cc45ea81a"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "93ee7692e23f1c85f4e3ad41f41a043a"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "b4f7038f14d3ddff84e459e2180c1c41"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "12fff77a7eb017aa2f41991c2bf44a4b"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "158eeeb7d6257d333346dbe5f26537b2"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "8beda9174b7887e3bb316c54acae0642"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "c9926364ce4010244452f6b865c2f799"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "b7509f3f151e5082333d5d5f067df80e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "4cc8c8025ce88a5f667da750141cc1eb"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "448c0bba6399815a75e1da1eae536501"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "330bfebb634ee14a57e3d82664acd227"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "8b2a1438d9dceccf891f91d0a8906cc0"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "358d15174d05a0ed9261347c0191fddb"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "280da2efd7910f3c297bafee4ee0d7c9"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "df4ff4645bd0e89b4425ce528179bdb1"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "44b1b1293f4a20e1206af5dde8b9e3db"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "b87f49ff706442526f250ec02a84a558"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "602986f0b8b5405973a931b7ffd98944"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "d02a73a06b9f8f1e175c4055e2f5d33e"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "83ecff5dc16f777b8afbac362a86f6f3"
  },
  {
    "url": "404.html",
    "revision": "d9ff1b3006d557756780602bd8c152be"
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
    "url": "assets/js/1.21461986.js",
    "revision": "8a227c4867d7cba306c824556fc232a9"
  },
  {
    "url": "assets/js/10.92ba3509.js",
    "revision": "17687b07fd59c5a65e3b0400e3f5dfba"
  },
  {
    "url": "assets/js/100.11117995.js",
    "revision": "39d9e6721feb71271647e866cab8359d"
  },
  {
    "url": "assets/js/101.6a6198e0.js",
    "revision": "911b3f58b73bbf1c67e81b6c933e63f2"
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
    "url": "assets/js/107.32e4863b.js",
    "revision": "4775d3fbcfb8920d25731ded5ca724ca"
  },
  {
    "url": "assets/js/108.a4782d67.js",
    "revision": "e354fac0593a3e7ba11395f55e0ae69a"
  },
  {
    "url": "assets/js/109.6f9dc4b1.js",
    "revision": "fe6f6c53de0f9927a1ad2fcf796a152e"
  },
  {
    "url": "assets/js/11.726fe31d.js",
    "revision": "c5b89462282e75cb1a175ee47375c623"
  },
  {
    "url": "assets/js/110.9aeeea1c.js",
    "revision": "970ffc915c9987e87f1e2e6c421c384a"
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
    "url": "assets/js/113.fb7dd1a5.js",
    "revision": "6da1d6e5918c1ef15ae5a07d59898672"
  },
  {
    "url": "assets/js/114.038a7299.js",
    "revision": "e71c8dd9105244d762d6676b73164dca"
  },
  {
    "url": "assets/js/115.d2508595.js",
    "revision": "fca10617cc399746e1949337e78368d9"
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
    "url": "assets/js/118.00a0517c.js",
    "revision": "68e0b43b0d7839d1c207022aa2ca11e0"
  },
  {
    "url": "assets/js/119.5552a03f.js",
    "revision": "51573c31fdbacbb9a88005ed87356a53"
  },
  {
    "url": "assets/js/12.96cd577c.js",
    "revision": "c0e95e5fbbd7658fc34d4aa840453df1"
  },
  {
    "url": "assets/js/120.8551a7c1.js",
    "revision": "2acd38316f9e28df788daac51786851c"
  },
  {
    "url": "assets/js/121.93b93350.js",
    "revision": "df6d441bfacc4c4be8b20229bfba6a80"
  },
  {
    "url": "assets/js/122.f1372d5e.js",
    "revision": "be32f2aa9ad1a05085239b5565f22be0"
  },
  {
    "url": "assets/js/123.5a1db59c.js",
    "revision": "2cdf51ecc90a608bf612fdffb5b9aeab"
  },
  {
    "url": "assets/js/124.eb6a5e28.js",
    "revision": "459d3c0d1b6018ff9b563b6beb7193e0"
  },
  {
    "url": "assets/js/125.c02723cd.js",
    "revision": "77b63cdbfe86e0c52f13b0fdfc32625c"
  },
  {
    "url": "assets/js/126.1a7ec03d.js",
    "revision": "2f8b6bf97cdc20c00892f10173159e4e"
  },
  {
    "url": "assets/js/127.7e716221.js",
    "revision": "4371511552dfff4b77a9dd10637d0111"
  },
  {
    "url": "assets/js/128.817df207.js",
    "revision": "06b7c4287189f1baa08b6a22fbc08df0"
  },
  {
    "url": "assets/js/129.b2688a32.js",
    "revision": "0e812eea3a3ae576fd3edaa3770d5d54"
  },
  {
    "url": "assets/js/13.3da4b295.js",
    "revision": "ff5cc6dbddfd8e8329f01efec956a1d2"
  },
  {
    "url": "assets/js/130.2eae8acb.js",
    "revision": "238407aa90103eb901bf953ea288ddbb"
  },
  {
    "url": "assets/js/131.86a62b0c.js",
    "revision": "e54a26cd84e61e8f26e05744b069c190"
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
    "url": "assets/js/134.5023bef4.js",
    "revision": "7925701ae1114b6cdb68dc33cd7afd68"
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
    "url": "assets/js/138.b08702af.js",
    "revision": "f24fbb24f761a3e563918c8aeef4e429"
  },
  {
    "url": "assets/js/139.0417e1ed.js",
    "revision": "91ed956bf7cee4da37f67df722cd8231"
  },
  {
    "url": "assets/js/14.1cbb58a4.js",
    "revision": "2babba03a2984e03af15b1bddf87564c"
  },
  {
    "url": "assets/js/140.150d2d0c.js",
    "revision": "bb382bfb56233df1189035c5ca84848d"
  },
  {
    "url": "assets/js/141.c3cf07b9.js",
    "revision": "036867eba0fb366abe6ea58e5c2f34be"
  },
  {
    "url": "assets/js/142.7f002d2d.js",
    "revision": "fb624a26f7c11750063d7cfe904f4ba7"
  },
  {
    "url": "assets/js/143.a655251e.js",
    "revision": "aa3e1c898eb32342ef4a510ddee83124"
  },
  {
    "url": "assets/js/144.ec2a569b.js",
    "revision": "e8ac030062c09c0a029dc02fdefc3b50"
  },
  {
    "url": "assets/js/145.31799d3b.js",
    "revision": "ff7536a35a8bc22633d0cc96075f5d82"
  },
  {
    "url": "assets/js/146.37f3df9d.js",
    "revision": "2c409170b5f6e0560189f01ff11dde15"
  },
  {
    "url": "assets/js/147.82aae408.js",
    "revision": "956795efedd5ad80099ca88776507c0d"
  },
  {
    "url": "assets/js/148.6dfa45bf.js",
    "revision": "e566f4c5ed99be9571b52740a9f35635"
  },
  {
    "url": "assets/js/149.930bfcf9.js",
    "revision": "33986b7af2d35193860cf481294c448d"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.f46f4049.js",
    "revision": "df568f8eea62afca55ef78cca7700dc3"
  },
  {
    "url": "assets/js/151.67973ed2.js",
    "revision": "b80badbc2c6d304ab0d577ba4316635e"
  },
  {
    "url": "assets/js/152.d793208f.js",
    "revision": "bff9e271a091c175f352642685ba7f0c"
  },
  {
    "url": "assets/js/153.8fd20731.js",
    "revision": "1b7a60526cf6c3a430110538e65ade37"
  },
  {
    "url": "assets/js/154.20bf6f7b.js",
    "revision": "ecb0d5744e6f60d02891f0f5b829e816"
  },
  {
    "url": "assets/js/155.20f57574.js",
    "revision": "cdb406a7df4bb0a36a55e0681854da72"
  },
  {
    "url": "assets/js/156.222c18ad.js",
    "revision": "62ab037666d17db31477f8b1c33eea6a"
  },
  {
    "url": "assets/js/157.692fdbd6.js",
    "revision": "9ae658513ef43f99125bb7ec5f607c67"
  },
  {
    "url": "assets/js/158.d96a1a77.js",
    "revision": "ff732832edc3b280aedeeaf3c1eef97a"
  },
  {
    "url": "assets/js/159.ae2e0c06.js",
    "revision": "34a95b1ba8a564c920adf8862a5dbc0c"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.7f0185bb.js",
    "revision": "94e1435bee0e678c93e4f2b4bf58b66b"
  },
  {
    "url": "assets/js/161.77db1fc2.js",
    "revision": "402cd893f267c9b5af8f5906fe3a59a8"
  },
  {
    "url": "assets/js/162.f50a6b4d.js",
    "revision": "db66185095071055bb192f3b4074e552"
  },
  {
    "url": "assets/js/163.09fef156.js",
    "revision": "4087995a10ef0b290ca045986d803c35"
  },
  {
    "url": "assets/js/164.a0420f9d.js",
    "revision": "2c219123aa441667d9d62a110fd6a7af"
  },
  {
    "url": "assets/js/165.2561794f.js",
    "revision": "d2c32435bdb424a61984099b2669bdbe"
  },
  {
    "url": "assets/js/166.ec29c7c5.js",
    "revision": "81fbb194a2025e8e245175065aa89646"
  },
  {
    "url": "assets/js/167.16ff9d0c.js",
    "revision": "61426712495b9013babe6acd5e32a680"
  },
  {
    "url": "assets/js/168.edea88b8.js",
    "revision": "22a9f15e041d2b77516ee249fc4c5b79"
  },
  {
    "url": "assets/js/169.d3764a5d.js",
    "revision": "e59d96b6dedaec3b33dae07b3ba99570"
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
    "url": "assets/js/171.33086d7c.js",
    "revision": "53ed5aa99486681688e70c15ee87de05"
  },
  {
    "url": "assets/js/172.df8c3856.js",
    "revision": "9e4aa09c7364d0fe90296a4c6842a89d"
  },
  {
    "url": "assets/js/173.555936cc.js",
    "revision": "37c098b0323e5d1f932a6902487cb616"
  },
  {
    "url": "assets/js/174.6e7a2fe2.js",
    "revision": "c5243bd786e8aa30a873dfb429df7fc4"
  },
  {
    "url": "assets/js/175.a996b6d2.js",
    "revision": "450ce794542bfff4723943acede0c1be"
  },
  {
    "url": "assets/js/176.3b05282c.js",
    "revision": "a6c32e12f21e88fb355d92d258f8261d"
  },
  {
    "url": "assets/js/177.458999f8.js",
    "revision": "e04fbbb3ab095611f9c7d5f628236e50"
  },
  {
    "url": "assets/js/178.d21dad01.js",
    "revision": "7184dc47583d547aeee69c5bea7a39f9"
  },
  {
    "url": "assets/js/179.0a9bd361.js",
    "revision": "cb416c7a610e023cd5d35ac8ffc4dde6"
  },
  {
    "url": "assets/js/18.a6c2c274.js",
    "revision": "fc69ca1a53b011793d059cef2f2a9293"
  },
  {
    "url": "assets/js/180.7fd1e5f9.js",
    "revision": "3dab53a93495422563534744b3b234e9"
  },
  {
    "url": "assets/js/181.bb54f62a.js",
    "revision": "48a14f5e26974db357e44ba2e928cbf4"
  },
  {
    "url": "assets/js/182.c450c823.js",
    "revision": "0a4650a7d4faee1ffa0bc79b8c7f8fde"
  },
  {
    "url": "assets/js/183.a6871b4c.js",
    "revision": "a1f129ce521b5bec8a0da60c4d183b87"
  },
  {
    "url": "assets/js/184.f0f4e915.js",
    "revision": "e56b83ef047635d1eef164de39c64d48"
  },
  {
    "url": "assets/js/185.7a264ed9.js",
    "revision": "a145e5b58f1683563bbd9a5ad170999c"
  },
  {
    "url": "assets/js/186.5361cb3e.js",
    "revision": "30902d1062ea51d4b8c02f042ce1e67c"
  },
  {
    "url": "assets/js/187.04b02a09.js",
    "revision": "0666c98989b9db9950085c9a2459ed97"
  },
  {
    "url": "assets/js/188.91b83b4c.js",
    "revision": "115f16efa19ee0690cab4e9db16cf1a5"
  },
  {
    "url": "assets/js/189.8d52467b.js",
    "revision": "473965d57b3485378863775f33f24c15"
  },
  {
    "url": "assets/js/19.fd820c2d.js",
    "revision": "1fab7e2d650d2c9490cee7e4887edcb7"
  },
  {
    "url": "assets/js/190.361b79e9.js",
    "revision": "9337a22d716b791d631c1f3d4dc36b98"
  },
  {
    "url": "assets/js/191.d8ba9279.js",
    "revision": "851639ff39b67600a86083805b43d6b7"
  },
  {
    "url": "assets/js/192.58243206.js",
    "revision": "495bca981ba44557f7b42f433eb097e9"
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
    "url": "assets/js/195.163c8c11.js",
    "revision": "dfcf52c697a0238a4dc2fe1a99c8d68a"
  },
  {
    "url": "assets/js/196.b734a75e.js",
    "revision": "04b314902936543c56dd49bc8e81dae3"
  },
  {
    "url": "assets/js/197.2d384b5c.js",
    "revision": "ed4f187cde8f5a1834454f70402e714b"
  },
  {
    "url": "assets/js/198.4339f8a4.js",
    "revision": "d06043eb06b704d3bfc2e5b901db1888"
  },
  {
    "url": "assets/js/199.f5f0a431.js",
    "revision": "838da6badf8e0cd08de4a64d92ddb7d5"
  },
  {
    "url": "assets/js/2.7d126712.js",
    "revision": "10f52ed669480417e696bba5e4c57c38"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.5036d445.js",
    "revision": "1db1fb97a073892dc1879a55357169f6"
  },
  {
    "url": "assets/js/201.046e095d.js",
    "revision": "bbd728e078b7c79eec3de1cfec9b4d44"
  },
  {
    "url": "assets/js/202.294500ba.js",
    "revision": "e2375379ce72b955a57f95e0b2aa5505"
  },
  {
    "url": "assets/js/203.4b2097fe.js",
    "revision": "4dc6aba1a8db45b81be675d728a19aef"
  },
  {
    "url": "assets/js/204.040d5929.js",
    "revision": "f1d3612f395e20b6dd0b1ec28c709fd3"
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
    "url": "assets/js/207.e86e9d09.js",
    "revision": "42cb55315e197452b6a67be732c6dc59"
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
    "url": "assets/js/26.20f2fd84.js",
    "revision": "f6dc25d7f9ba145d6bae066463a62e00"
  },
  {
    "url": "assets/js/27.7531562d.js",
    "revision": "5ccaf91ba670e66f3ab779b3fb0b9d41"
  },
  {
    "url": "assets/js/28.f5ae16e7.js",
    "revision": "f9d5fd3a35fb1ead74e97027b4d96d89"
  },
  {
    "url": "assets/js/29.d0071091.js",
    "revision": "5627640913b5559270a2d3038e693fcc"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.e5cf8a61.js",
    "revision": "37a2704b47b9d81e6419a79efef4d402"
  },
  {
    "url": "assets/js/31.ea4b447b.js",
    "revision": "40b3e218c341cbf7dc8fda96f6d32615"
  },
  {
    "url": "assets/js/32.df1cee38.js",
    "revision": "9479bee8e85e9eb1f3ad7ec4ba19bbd9"
  },
  {
    "url": "assets/js/33.4b247680.js",
    "revision": "4d117c9499965f397670da21db3b5b46"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.d9998842.js",
    "revision": "40e22f0689489b57fe70f2ff88222931"
  },
  {
    "url": "assets/js/36.bd9144b6.js",
    "revision": "ebc1bf2ba304561d8ac1442b616e4d44"
  },
  {
    "url": "assets/js/37.479f809b.js",
    "revision": "84f96dae0b32d6c989ad17a3b69989fe"
  },
  {
    "url": "assets/js/38.3854acc9.js",
    "revision": "48ff93f2ef6e145c91ce76010fecfa80"
  },
  {
    "url": "assets/js/39.f24d794f.js",
    "revision": "e3d91df591cde109a8421aeaf78cbd9a"
  },
  {
    "url": "assets/js/4.13675134.js",
    "revision": "81c3d5b99c6319527a2f510e3d1f2607"
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
    "url": "assets/js/43.8abd6b4a.js",
    "revision": "170f09fd39b620c1e169a6d7b56e9b33"
  },
  {
    "url": "assets/js/44.4b3e7fee.js",
    "revision": "27a7e55f8932a39983bd97e999f7b6df"
  },
  {
    "url": "assets/js/45.f730d5fd.js",
    "revision": "3df859de50478c94eaaba87aaa0d5c9a"
  },
  {
    "url": "assets/js/46.72262c3d.js",
    "revision": "16720ce151a53694615bedd2b8c5c5fe"
  },
  {
    "url": "assets/js/47.24fe93f8.js",
    "revision": "79cee1149737efaa44269f55f8e945dc"
  },
  {
    "url": "assets/js/48.227f6386.js",
    "revision": "839da30eb55e43b67485fe9455ac0a2e"
  },
  {
    "url": "assets/js/49.333dc777.js",
    "revision": "08d769528ebb93194c3fcf5cd140ebd6"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.478ff5a8.js",
    "revision": "36d215afc35906c1e094930ca24b7224"
  },
  {
    "url": "assets/js/51.7f6b0fcc.js",
    "revision": "bd00782bdccb3fef459e4f600802ca70"
  },
  {
    "url": "assets/js/52.64c664bd.js",
    "revision": "166fada034cc3e6b2a5f9193618aee2d"
  },
  {
    "url": "assets/js/53.c59928c2.js",
    "revision": "d5614c5c3c55ad08786ef4ace36523de"
  },
  {
    "url": "assets/js/54.8be396ec.js",
    "revision": "bf34c118cbfae558eaf3fcf9f3ebf7e2"
  },
  {
    "url": "assets/js/55.cea09aee.js",
    "revision": "bc3f4cb52f16a7a0d61b130cb1f188e9"
  },
  {
    "url": "assets/js/56.10db94e7.js",
    "revision": "1ca5e112503832126a288d2e1d9f37d9"
  },
  {
    "url": "assets/js/57.d6e9cc4c.js",
    "revision": "3bdd7d02edc12e076f8321ec9596af54"
  },
  {
    "url": "assets/js/58.75cc37f9.js",
    "revision": "f4e5a24f692b7081372ba3cca49e4c4a"
  },
  {
    "url": "assets/js/59.deb7bb65.js",
    "revision": "ded51797d75a49395730f8b07f83d1e6"
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
    "url": "assets/js/62.ca98b87c.js",
    "revision": "b754bcf02b4be3be693ffdd79f26add2"
  },
  {
    "url": "assets/js/63.b6549b4e.js",
    "revision": "46796cc7e36a8d90a67d7536bcb994ae"
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
    "url": "assets/js/67.bec75fdf.js",
    "revision": "dde56fe722bbc1845aa44bec42314849"
  },
  {
    "url": "assets/js/68.5648b517.js",
    "revision": "104a8bf6c11707a6f0f5fea39ab49d37"
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
    "url": "assets/js/76.936f0d3b.js",
    "revision": "76ee5baf8a1636c50f5dd35186a16554"
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
    "url": "assets/js/8.6e3cee84.js",
    "revision": "4686ef4fb807a062b654009c935f6ed6"
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
    "url": "assets/js/82.fec9bb36.js",
    "revision": "c0a654ea5a55e0630015e6326ec41855"
  },
  {
    "url": "assets/js/83.9fdc0404.js",
    "revision": "ccbc2c6e351d039b88bbaef49c648df9"
  },
  {
    "url": "assets/js/84.45f53f68.js",
    "revision": "e99fef9f8cfef85720b3416305758d09"
  },
  {
    "url": "assets/js/85.702a2e79.js",
    "revision": "58d761b712f78ab62781ba8ec4d43141"
  },
  {
    "url": "assets/js/86.5946d2a1.js",
    "revision": "5babeeef81d404ecae18c4fb0b917cab"
  },
  {
    "url": "assets/js/87.b722f582.js",
    "revision": "670df6bf5f519a348f001d4ff5210ac9"
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
    "url": "assets/js/9.35d6a814.js",
    "revision": "8cd2bbb3ecd8348a01722f9b89917548"
  },
  {
    "url": "assets/js/90.ceb041e7.js",
    "revision": "f1066070965dcd84a3e3f9ac79297b39"
  },
  {
    "url": "assets/js/91.5a8c9b7c.js",
    "revision": "a6040a6bf8b0e2f57331ff20ac23bd00"
  },
  {
    "url": "assets/js/92.de76435e.js",
    "revision": "49cba4dea28e77edf1478d7de02281b8"
  },
  {
    "url": "assets/js/93.2414730c.js",
    "revision": "1341c5e36480dfa39bf0e98dad229279"
  },
  {
    "url": "assets/js/94.4eec34e4.js",
    "revision": "e222e3d78ea020829781a884773248ec"
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
    "url": "assets/js/app.3a79ebb9.js",
    "revision": "e0c262d4628c6d5426ef90f0bd441c19"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "ac278dd324a439dcea2166e26ae4cd4c"
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

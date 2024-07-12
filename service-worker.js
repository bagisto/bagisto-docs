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
    "revision": "52dca2f80e0ee168648067109ff940f6"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "53101ea91cdac9c156586ce18ee912d1"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "24e45fca5cb95032aa9026c558f8d2ff"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "cb7d4f51164eea48ca15e6b849e06849"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "d41b0c0b664727628a1662ca295ac725"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "238fc9b8002491aac13dcbdcabaed61b"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "f64de638da71d308fdd1bbe556e8ea61"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2a233ad94e1d26fe1a13b1cbc4167020"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "4f2f2eb41175edcad8b0ffe50a6aa166"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "5276443e9a932fd5404562394175cb4b"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "646ffe55a95d5a4deb8d992e026b6b56"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "439284f1fd50c8a281ee32d10d72cda2"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "3c2750a7d3a15ddb9dde0f4fd8a45e8d"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "99d133999ada64dc73225959e73573e7"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "1a9afbae5e040aa5083e22e36f347690"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "e7af992b01fe193759304a351387a73d"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "d61aac518793b3ba240b9c76abdba665"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "b0ff299628672b3d83221027b8da2e98"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "a82244829561bbacd021e0a146edb2a4"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "ccd51297e657ca8bd4f817707d5269bc"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "84e8ed19a4982560b29981f7a9992c0e"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "2da335cc2ce94c1c1f299a73276b2fad"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "759ae21a85b1dbfa03eb0275f34ff197"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "077825ab30b66001a23bcff6175fa35b"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "a535c4609fc50436e4dfba628ec1f3f0"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "b7be1d4ddf1a8f6114203fef4fb966e9"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "97a6a4e7ab619221d72f265c42526739"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "c4f588e4915148d14c70ed286cb4135c"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "3321b08c9606d13817fae1ea9d769c94"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "72238414ebd93247a3d7d36d2b55d9ee"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "ffe7cba17445b86fae24a33ca9b611fb"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "cf96a1427bd768e01a498d9686e51eec"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "1bb16b8c33bf7fd38e12b72f42153ef2"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "cb6a1069f7e82a9eb3bd5c8db12bde30"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "6cb72b9a9d4e8b0a318291bd966f2e80"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "25db6223d25eb7cbdf8699b82b978547"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "2f284076ed4e86d5a595a42b932f9bcc"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "271837e768da65c0f629c815e741f7ef"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "12d906761df59d469b49910d75f1337a"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "2c6a26a5a5b9723f171c6ab090c51d9e"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "22810b2d5428006570ba2329681447a3"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "79408a4d7b3fde93a721bb1598b4b292"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "eb46aedd502cb82bc7c7a6290071a412"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "e5c2258e26afec89728109991284cd3c"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "2d904e8d8ee193929e258e88e9605c26"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "0e4d4705d7fc07f481c3f87debe7d765"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "3d2b6a55c5191045a00a709ab1423402"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "f5c225b083d04a4446ae78e6c1ebff74"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "5275adbe4f9a7c1dfc67ac504ac47083"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "3f271b05bc5cbdf07e6b28f5bb3ef1f8"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "58d560b19a936bedf43a1efa2d92e92b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "b03d5ed4f6c8793c105c4994fd7a0cea"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "092d04b033cb2833090bc78151d3a5c4"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "7743ee16a587ded866c6eec9f905e2e0"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "96ff0fda5605f77353d8a34860251219"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "619bdeef05ff6c0f93b28a106175a07b"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "0e0f078a7ad29a186815cc166f724c4f"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "7bccfe9bf0591ee96cf4a25ccdc04962"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "4135bf3e9ba7dc498496d204c032775e"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "1e9ab57ba133aab0408ddcd0bf0dd0af"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "65bcd05a463045ab7f43a5167cafa70c"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "562002571ffe9bade923a15396600548"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "79fff68960d8185febd457a104ba3445"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "f680a59eb4833c427c5963ebf9576cb6"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "fbb8756f42f90e6aa443f6f4692b40cb"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "30c751802d98e8900e1d66ccb9d40b44"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "aff629abb5a394e41d6b63e47b3dc3d9"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "e04dd9253d251ad4b55c95e3d9b39a42"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "15911b35499a0576929df2863519692c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "224ef05cc7032dfaeb228353e025a247"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "52c69eadbe5c2e060f7c777c5b922635"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "085a692b88038690e42768dc69b203a8"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "500cf99bda307a54a84f25a973f3a19d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "f342245a630fd04a151b7acd13694579"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "203ac8e52afef5d952c743e18a888c2e"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "f91bd9482a74a04598d4ebb7c1b65df9"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ed18a47b45110dc0090748c14df990c0"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "5143827646495d92ce6e7af136125786"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "de2cfb54a94b33f47005aa8ebf2618ba"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "b58b8574e15e6852c9bf636e4db73cfd"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "363e4ee4cdae2cb85db1fa4198d506cf"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "f307333f79c0bc9d28c7fe605f4deb6f"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "ba54b7be4adb7cb8ab88132f8c8a29e6"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "4e0cd4b9b9bf741721232a08c78c316b"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "6478b9eab4e6a89f589d563d6a51fd0f"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "27e5f777dc1f8260e4481184554a9ce8"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "0262a6d6b22cf81ac37e2470d83b903c"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "d4f9a5823be49427110928707c96e25b"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "25b2d9843c8006f08194899503e40c04"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "8e13c7a0af1ff8e51eb0b178b645f15a"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "6fd355c53e32b53a99624499ffe6b142"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "aa6f10adf57e9f2a401d5ceb711b5ec4"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "b62ff18c89a813447d4568026ed46c2d"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "dd97aa1c43156e714b5fe228219378d2"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "fbcc41920f48fa794ff5e96a989c6cb5"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "b522605e647eb9851515f6887269b331"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "1886bf329004f5313a8f120989007238"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "59e6fea460a9c88c2e4bff3a0f0f086e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "a50f8b93470951ca1f2e7f7a81051aee"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "b51437d124e353a74184ce7fa88621a6"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "3b976e595ba9a4bf8540d75c52b10cd9"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "0fc1ed373981463df3ca10917948fc10"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "6a1ad1df46feaa9de96d3034f0a72367"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "f2437b77ebd2a1af02e04e815bfb0564"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "59c7c2f7bc7e021d078ed02f8a9c09c2"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "3bf64c382bcf961fc25703f8f7b063f9"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "863a8590a72e5e8723b98a61d7fbf1f4"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b14367999d9000402eeb64bfbf5dd232"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "d95e59c84dc07b51710a6ec2d59ba77a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "45e3261e46015efecff261c19d4589e6"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "6777b1a689f2e4ca52d4f1757d834a4b"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "15fba3ade709e78aa218e0880a74b44e"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "47c648de9a390ba1f55fb075cf215cd1"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "68eb4051a8e94d214c4283b563db2c24"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "205bc0b51c02d5c886d49a91b54bfb9f"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "f1002e4a123b6878187be54f1fe7120a"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "f66ec96c052ef4ce589e435cc8d61da0"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "61278557dd67841d888fd31700acba86"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "87880dba8766b6152f09431f27d96b17"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "3230df797c3cd35e265c8ef38a2a4750"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "a127e39595b951a2ff917cb9f550a9f9"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "836163548536c811c61392e91cbf6000"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "cf7d90b1f8d60e9344d5e1cbb6599995"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "ee29924710caa0b075efe02611b5d19f"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "7a3f6c0bc141c792c277d580b09fb369"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "50ab2c8f148f1acce02b32e00bc37467"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "501873f7662ac0d764289b14fb61ad64"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "7e412777797bd0a6702cd5c46e90eb75"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "91ec2a015741fa745d1115862757e733"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "db22edb16e52ae39085c3be9e3b850a0"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "8f59b1aae7674d3dd9f76bf7a9179a84"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "c4bcaf51dc6ce604d24957d6938eef5a"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "d228eedc9d0b19e4882e017dde6fc583"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "310b46df764810f84f1435b5c281f46b"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "660a9d9aacaf3e23c52d2ba4ec69b107"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "61b2c17bb04aa27b2531a587ff8376bd"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "17ee1c28972ee46fc3c224a75e68eaaf"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "cd9a036cab991f8e1a01c517c4b4cef7"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "382e0d3cd3729d5c4bb44f9623b20303"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "0b4d72bf9c0b1bcaf856ffbac7b50309"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "146ad2c77ace3bd7912d230cab630cb0"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "686a53bc8a264f11c510dafc5f68fc77"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "ad95be12d269017bb8798e9a0e7ec7c9"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "b7f56077b6973e456380a055bf1b5422"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "a235fe9a4181689dfe333e5ef9ddbea0"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "a149f48f73359f5fcbbf2a0ffc1738e1"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "b5ebf15e262893ea5216ddf7eab3a87c"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "eeb9781931124565ed609d4197886889"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "2ab22c2c8d03bf497cf1cf172ce18bbe"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "cd7c520506645105d9f4420be78e3fe2"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "c7df250a7c3a31e07e9da0af79e10d38"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "13a44df43fc4de33b0ea3c295ac25322"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "884f2955996bb75ff975433604e32cfc"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "1a2e6d682e6d55a6c13f68146e198aac"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "e61fb86b015b3e5fbfb53403b3d87170"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "c3dfcc00faa0fa330cc87e5d5b78b146"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "dd3f4b9355ef3cc4bebf1bfe896bd75f"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "ff8b42012e0076b536d0f57abd097acd"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "8ba3db48a8474c6b732057e0ab521006"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "5cf87635220989499495b16009a6f3c9"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "f4096d420ef1789b97cc68894a5518ae"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "f3e257f2c6f240d2b33833b362ddc17e"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "6c7cd8916d22dfaa295b636a351bda96"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "7095464173c7bcd140e059c3e71f975d"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "1bf283f4275c5724c4aa48b95da0a49a"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "580015e6c5ca5a9242568c369b79a2a9"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "3df15c08304bd42a731916fb0cff9429"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "64f040a481c7ca0b10310b2b4083ed1c"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "0e4bf99be4aef4ac341aab5f878a770c"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "637610be7c317e17a1a6469b2f73315d"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "4b0115bb696ef921bd57b900a4f37ba2"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "1b6706f7226dd19132e4c605a2590fdd"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "8bf91d61f985fe9def447e188b35343e"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "672c7ee5a3243305399cf65f5af1ec1d"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "0718921bf56d5130e1ec9da7c0df8fcd"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "569ad8b2b1b9eb3f4c395d04880454ac"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "b005a5d1b27280b72c06edcf8bf324d2"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "fb6a1c51c9c1cfc8149000eea1ed5680"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "8d5054cb061df111987e1e56a6726e00"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "451f853818aca3a92045e6e3e3db56d5"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "b7caa338afcfc6dd4322f1c95495dcd5"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "4cc610a4ef37c6486e82d8a27fd09541"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "be1eb8fcdd16edc1f5cc780dfeff58c1"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "edc0a6714afd9ab60566795d00a8a0bf"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "77fdf382f081a74062a92a6121858eb8"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "58a653b9432f024532d5a7d889df79c3"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "e7c8986def01a961f2aed667003ce524"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "947a223222563d155e069088df831a19"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "6330d0f5386bf13dbad7bb568e78df0a"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "cbb65e76243948f4d1e57ec54d514c3a"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a718659161ef405eaa60ae31867c6555"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "bc7d03f7dc8ac42dce60433e15e68ebb"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "a3c56b0cb301c7bd1f5239f325bf8b10"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "e49983433084ecd9fb00aeeac28f5492"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "92beb9221d9cc092f3ea76d87d081270"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "d23efb3579a024b16cb558121df45189"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "96e4669d14e737edce0ab8951fec6bb6"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "a85365f026351f97fbe1c484c98a0c66"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "a51e1c4281389274b8f15d73f349c294"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "faea3b3a451f549ec688468bd90b94b2"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "bf43510df60a43eda8e93c2c722b67f5"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "fd83b5dade2d1bfffff3f72f055dcb27"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "cb6f55b65da168e1b5848d0fd15c8908"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "1ac3996da602e50be5bd1949ae1c20f6"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "53ece2a6616ed9823f9fe9f7a4fd64d1"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "30cfbe7464ba704ef2ff5f9af4261acd"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "9b051e983c65951b19ec45284e580856"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "b1cc072546f622df1f85e36b08caaff4"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "04cc728e6592dd32c3dbc19997538ff5"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "8280bb7794f6d4f07905f21aa48e43ed"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "1f55928ce4bb6f1f2860f2d1c58a028f"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "145da42339c7ed2cbda71c9a772b47ee"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "c3ad46d2fadee855deb7c44422cc220e"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "25724169e0d0004fe4d177539299243e"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "498f973c8de089fb614178cee99703fb"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "bd7d621509eca4f618c94312c082257e"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "cc4ce73f16bfe4fb4c31c68fa43e6c93"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "4ec0ba057c26fce0b23972c11f321d29"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "d510dc32909f824bd51fcc28975988ec"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "2e2bab1a99375192220baf01a24e7526"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "532ede36c96640af72c3667727134cc3"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "fd0984516d619cac55990fc52d3f6067"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "e79c2379d7f3bd79c11f654588a55b5d"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "63ecf5ecb6bee69d44d698391d774327"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "08b05fccbec53a8cacc7df66827fbbb1"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "089f5b6bb6e62d4235e20ca12f9a470f"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "e15021512c517383ab01827dc946df6e"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "1fbed16853972c84b1a57d9cf5d830be"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "e6dfbf6bf60e62344d1637d4f09ce1bf"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "560b6bcbff84816cec338c2311694d4e"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "1ce153bec122b4c11a773912c1394a9c"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "c16b1fece0cc7a8f9612b748bfb8b94f"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "3664db65ec2e7a9aa311d66b73d0591e"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "422094a8750c896789ddb0e1f327931d"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "573e0a4064348bfeac20ee636e1bf2c6"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "62cdb5565940680b6987c2187705b273"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "a7677c13794e5b7ee2fba8e2cf335442"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "806953fbab570d0620b1b96082fa1631"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "a3cbf0e3ccbad157d9a3343404552bb1"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f7b1649462c5bee8d769975f3ff85598"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "924382fb401bf736f898cee4d311790d"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "08a1af39fb69a0c79f9bc52e86977b58"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "2baf12fdb16b2decb31bfe12712595ad"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "caf1d3a65e260d0abdd324ccc2f63e6f"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "575bdc8587a875a81615204c4b41e69c"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "93cfa029b8fd1151225d2b9d431a699c"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "3432a85905c56689f21ffe3886895ac1"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "1555e5c0732082e935be416b71fcb798"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "2ecbb250d726561933f9b9b8b79ea1e1"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "63361ff48abf24085ee243039ecfda7a"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "823636e4a2b7d0f3962f239cec5ee334"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "79b2924aba947e3b76438a022215441f"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "5b6d04c43a10852361cb6c6701a0f8ac"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "dea29715888f3c635d3d4311d1999f38"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "c273995d276dbdadbe6032fee5139f55"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "f403a11c1196dbf71714509e8609949f"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "26899a9371334915137ef848b515850a"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "2a85bfd40807ef04cc4da58da57d279b"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "d2570e71e3abf56b200eb55720ba6b46"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "740582aab432c1d6e41845d2c0f953ee"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "49ccfe3b20dc10189d3318b6b4c585dd"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "0ee77d17ea7bc6075be771302a52f3d6"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "0692a3b92eb31f631a8527336ecabccd"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "2d9d7ab8af88eb7de5547c5ced6cc8e2"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "d640b1cc7881921e84fb8cfdcb0f3396"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "04fef8a481b92a97341b320fd90b8623"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "03ed7224d6946ba9954ac8aa1a4623c9"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "1c830be159801a5f4d5c06f8383374e8"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "31148a0944293cea4459b3197ec42d2d"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "d1e8f7304c1478529aed7c162fee3b21"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "e62c78486e591ad787fd58a28ffa930b"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "03ba9af9265a1b4f82fdc5bced6a68f6"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "d27735f70421e9a39c311ef7992b9b8c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "73f6a6857ac09c4b34cfd3e9533d5ede"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "f1883abb947b634edadaf9833c942c95"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "6b5185cbfcc14517f124df18f6a7ce15"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "a59e10393ceadae765d859bbc8a5fa5c"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "f16f20448ea9ca8cc5cccd2dda1525f6"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "f07cd5c0a86f18d1bebaf9347d21e798"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "70440962d28a4d8ba901a191dbeb71ca"
  },
  {
    "url": "404.html",
    "revision": "78492ae7ffaa0f9025c072c95e281011"
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
    "url": "assets/js/1.a1b2b715.js",
    "revision": "1b932d47015d9b9b6f3a5afacbc2c80d"
  },
  {
    "url": "assets/js/10.c2e9b4d0.js",
    "revision": "7dd13e1659473cbebb79e56b1d6392fe"
  },
  {
    "url": "assets/js/100.1a12ae18.js",
    "revision": "f26e952978e346a8e4414afb439a5ec7"
  },
  {
    "url": "assets/js/101.b89ad18f.js",
    "revision": "f09692687327c9b5240e6e34f5a65f0e"
  },
  {
    "url": "assets/js/102.d49cdbf7.js",
    "revision": "2232e4079a3d87fbace52ebb1eabd628"
  },
  {
    "url": "assets/js/103.abf4dd35.js",
    "revision": "b966a346669eacf3962af089aea9ba9c"
  },
  {
    "url": "assets/js/104.e46259bb.js",
    "revision": "add4b86395038701f80ab2ee824c81d1"
  },
  {
    "url": "assets/js/105.b4a6bafc.js",
    "revision": "e9a47be4be73acc1f887b9f99c00e1e7"
  },
  {
    "url": "assets/js/106.c6842119.js",
    "revision": "1819c2654a49d1f096e9eeb161f2f44e"
  },
  {
    "url": "assets/js/107.41bdcb23.js",
    "revision": "eec51db4590172529a9e01e696c84d80"
  },
  {
    "url": "assets/js/108.6dba3c82.js",
    "revision": "46cabb65ca6f7420e3a9603515a5e3b9"
  },
  {
    "url": "assets/js/109.244fb86a.js",
    "revision": "83e0eec4c3c29cbfe870835ba8faa46d"
  },
  {
    "url": "assets/js/11.dbfab5d9.js",
    "revision": "19ff478e838627c2487b0340aea53d5f"
  },
  {
    "url": "assets/js/110.e6bd50b2.js",
    "revision": "74aed1aae36f6a0fc0872a200190cb5b"
  },
  {
    "url": "assets/js/111.bfbbe4b2.js",
    "revision": "b48d8ddaa807252cbc5765925d943e49"
  },
  {
    "url": "assets/js/112.7de42dc5.js",
    "revision": "b6e579a6b5368d99d72887de806c7286"
  },
  {
    "url": "assets/js/113.613a46c9.js",
    "revision": "265dbd4dd827b143eeb97cbc6f218bdc"
  },
  {
    "url": "assets/js/114.26b7cc08.js",
    "revision": "b0bea15e415397deaf696592dda95bf3"
  },
  {
    "url": "assets/js/115.d295b319.js",
    "revision": "41869f13082127433e1bea48bd70d705"
  },
  {
    "url": "assets/js/116.1fc1480a.js",
    "revision": "7224a4f374a407801925bb5a01305616"
  },
  {
    "url": "assets/js/117.a30b20fe.js",
    "revision": "1d29da1a124181c159ec955e7b8a7dbd"
  },
  {
    "url": "assets/js/118.c5756d26.js",
    "revision": "541f6e2fd23b785cdae3bed37bd8bea5"
  },
  {
    "url": "assets/js/119.462ef238.js",
    "revision": "80fe0e6038edc4083ac9bfa131e7a682"
  },
  {
    "url": "assets/js/12.f6c7832b.js",
    "revision": "a054848c1e5fb9e1dbc72c57114395eb"
  },
  {
    "url": "assets/js/120.c887a808.js",
    "revision": "fd80d7e0dc5bfc97adfdd5d3a8cf7a1c"
  },
  {
    "url": "assets/js/121.97a206a5.js",
    "revision": "c487aaa9a71eca821f0233f17d91630e"
  },
  {
    "url": "assets/js/122.4c53e8ee.js",
    "revision": "4aa0ffd0806f7dcc763959188ecc26e9"
  },
  {
    "url": "assets/js/123.8d240b99.js",
    "revision": "468204f30040522b99dd918c60a194ca"
  },
  {
    "url": "assets/js/124.6ee7b987.js",
    "revision": "39903a59721250aa1f311c14818b8287"
  },
  {
    "url": "assets/js/125.d0c73b60.js",
    "revision": "676781c0a2d3f7f7cf8a4f1497618088"
  },
  {
    "url": "assets/js/126.706dc783.js",
    "revision": "9508529252c0a910c4488609498a8e9a"
  },
  {
    "url": "assets/js/127.7e716221.js",
    "revision": "4371511552dfff4b77a9dd10637d0111"
  },
  {
    "url": "assets/js/128.1ae334e9.js",
    "revision": "1d981e8bc810691265daba78ec3c7aa4"
  },
  {
    "url": "assets/js/129.0a65413e.js",
    "revision": "61fd481511790b73f97f6083354007ca"
  },
  {
    "url": "assets/js/13.8538b79c.js",
    "revision": "3d42696a7fad0a28445f328d5b3faa09"
  },
  {
    "url": "assets/js/130.72993eec.js",
    "revision": "6383723e35e20acde6f2aaff98c05db5"
  },
  {
    "url": "assets/js/131.febcb7fe.js",
    "revision": "0ea2f7637366d13cd3e01fa5783e20e4"
  },
  {
    "url": "assets/js/132.250529ba.js",
    "revision": "631e2d2e4aaefa7b583ccd9ea8928cdc"
  },
  {
    "url": "assets/js/133.06ec56ee.js",
    "revision": "6138cf41483519165f6b9d77d2d2926a"
  },
  {
    "url": "assets/js/134.c594a152.js",
    "revision": "bcd45b12b2628d3d738272c0441879bf"
  },
  {
    "url": "assets/js/135.2024aad7.js",
    "revision": "00ba13ea2b993081243e59555bafae35"
  },
  {
    "url": "assets/js/136.3dcd317d.js",
    "revision": "e5e805f8c77b92524a36a7576ddda707"
  },
  {
    "url": "assets/js/137.81f2c959.js",
    "revision": "300e4ec8ea95ea334d32af7bb17058be"
  },
  {
    "url": "assets/js/138.ff3dc55a.js",
    "revision": "a6ebcffcfcd70ac7beec8c67354666d5"
  },
  {
    "url": "assets/js/139.d1682096.js",
    "revision": "64e7e644a50f3bb737329df0a1e2aa12"
  },
  {
    "url": "assets/js/14.3a557582.js",
    "revision": "442bcf271108c5aec8bcd673ad22c156"
  },
  {
    "url": "assets/js/140.af07f9c8.js",
    "revision": "e46337a233ba214e512b064eee4080f2"
  },
  {
    "url": "assets/js/141.e6bc8cd9.js",
    "revision": "5d28453761b15fe6c09ca443c677b021"
  },
  {
    "url": "assets/js/142.f0d8c51c.js",
    "revision": "2e935524c1326da31eeed5a929814f96"
  },
  {
    "url": "assets/js/143.dfab2982.js",
    "revision": "d22d9f570573beddf7d1907960e083d0"
  },
  {
    "url": "assets/js/144.923cc283.js",
    "revision": "71d350e303ce57a6768ad4608a776340"
  },
  {
    "url": "assets/js/145.e9406acd.js",
    "revision": "89557ffcd0054566e258161fb78d75ee"
  },
  {
    "url": "assets/js/146.07460c11.js",
    "revision": "a3b130e9ff7f91ac4ac5bfac51b976c7"
  },
  {
    "url": "assets/js/147.00dfbeba.js",
    "revision": "d63ac540eedfa6069536d1c1267d0c12"
  },
  {
    "url": "assets/js/148.c3e02814.js",
    "revision": "4c6d9b1381a0abbf1a024a895a522a12"
  },
  {
    "url": "assets/js/149.aae06cd3.js",
    "revision": "200576371e279952729b3edc382c10f5"
  },
  {
    "url": "assets/js/15.901e70e5.js",
    "revision": "30f0332004aba9a9719af650404d7f38"
  },
  {
    "url": "assets/js/150.f65e5cd3.js",
    "revision": "6e94a6e80dbf581dc7364724e1fbeeb3"
  },
  {
    "url": "assets/js/151.09dae1b6.js",
    "revision": "6df56d28e3c2be27c63203c680ccbb74"
  },
  {
    "url": "assets/js/152.fe868daa.js",
    "revision": "05366826e467337cf4d0bc0b843cb74a"
  },
  {
    "url": "assets/js/153.4defb077.js",
    "revision": "2518e4035fc8b4f3b63f8b6f622e61c7"
  },
  {
    "url": "assets/js/154.88f4b7ce.js",
    "revision": "751af381a249ff3a9dde80a6ad8c72d0"
  },
  {
    "url": "assets/js/155.4d5abeec.js",
    "revision": "bcf09e75b1d672aeaaff697407d4579a"
  },
  {
    "url": "assets/js/156.701ed465.js",
    "revision": "0b99e35e30da787596df19553d6082a4"
  },
  {
    "url": "assets/js/157.60f434ca.js",
    "revision": "7d408ea98b3050661e63478e0020ad57"
  },
  {
    "url": "assets/js/158.a3431a2b.js",
    "revision": "b86ec42827688502f38080e8550f239e"
  },
  {
    "url": "assets/js/159.29f85d11.js",
    "revision": "d1511442764bf855be1885e47c3dca49"
  },
  {
    "url": "assets/js/16.3469baab.js",
    "revision": "28e9771458206c7e3a042a87ddb6f74c"
  },
  {
    "url": "assets/js/160.d504781c.js",
    "revision": "442c6ad36481914ae386b85ca74256d1"
  },
  {
    "url": "assets/js/161.a3e0f04e.js",
    "revision": "aa7b8922c98907ab40723bb7be522f86"
  },
  {
    "url": "assets/js/162.3fcdc882.js",
    "revision": "88e9b11a231feebe96f9d249696180c0"
  },
  {
    "url": "assets/js/163.02709b41.js",
    "revision": "671c91b56bc4693ecece4cd6729d6055"
  },
  {
    "url": "assets/js/164.f4fc03e3.js",
    "revision": "1c6e0ac3a1d6b245aa6115a5fcbb5c34"
  },
  {
    "url": "assets/js/165.5dfa1f15.js",
    "revision": "11d999ed22234893c7677562fd41171e"
  },
  {
    "url": "assets/js/166.1f7c9403.js",
    "revision": "078ce81e12e9b0e35f28f70a7b7b5ad1"
  },
  {
    "url": "assets/js/167.5aedbaf2.js",
    "revision": "7d53f356419675eb58d2bea717b58855"
  },
  {
    "url": "assets/js/168.cde2ca5d.js",
    "revision": "9f0f506d16119d431382786b10546cf2"
  },
  {
    "url": "assets/js/169.d4298526.js",
    "revision": "547971b8029d11c101a40191194c7b3f"
  },
  {
    "url": "assets/js/17.85c551f5.js",
    "revision": "cbd76fb1684e6ae716f6485440bc1db2"
  },
  {
    "url": "assets/js/170.66b79dbb.js",
    "revision": "088a499645d1a72981679b91c062db08"
  },
  {
    "url": "assets/js/171.b920f2ac.js",
    "revision": "f0e3395ad41b04bed874e654d6f659b4"
  },
  {
    "url": "assets/js/172.a2862f10.js",
    "revision": "8a7ff1798aaa4a0d06cd76caa3406fdc"
  },
  {
    "url": "assets/js/173.1711eb16.js",
    "revision": "90ca49062b3afa420d307384bd3bb680"
  },
  {
    "url": "assets/js/174.9e05eb85.js",
    "revision": "0ccd0afadb64d3239d6a79cf0cb3ca46"
  },
  {
    "url": "assets/js/175.0ea70c0f.js",
    "revision": "9cc5ff9006ae85dba9477351b5826296"
  },
  {
    "url": "assets/js/176.bca660d9.js",
    "revision": "ecfb0662d1d8852ab4bafad966417083"
  },
  {
    "url": "assets/js/177.385850fd.js",
    "revision": "0bba371711f36dba647450a0fd747659"
  },
  {
    "url": "assets/js/178.197c4cc9.js",
    "revision": "62e15de16f3b32ca5689bbf4f92b2950"
  },
  {
    "url": "assets/js/179.25f45fe1.js",
    "revision": "e3f880992de6eaa35d8fbbbbb85b381c"
  },
  {
    "url": "assets/js/18.94010ee4.js",
    "revision": "f6a3208d8ea4ed8cf4114c08afeea772"
  },
  {
    "url": "assets/js/180.eebaa91b.js",
    "revision": "13865396629575ea67ce6a35c97ea700"
  },
  {
    "url": "assets/js/181.d014f4c9.js",
    "revision": "30a5cf46d24d19adafea99ee80ebe1d5"
  },
  {
    "url": "assets/js/182.7cab53cf.js",
    "revision": "13556f78513742e6801136546f7bd2ec"
  },
  {
    "url": "assets/js/183.728ffe62.js",
    "revision": "476fffccdb3077f04c5a8a8728c9527e"
  },
  {
    "url": "assets/js/184.ff816d35.js",
    "revision": "281c2d6c18aac6bc3a97bc7121a48715"
  },
  {
    "url": "assets/js/185.39988495.js",
    "revision": "d10b33099592f4734afc18f16fb854ba"
  },
  {
    "url": "assets/js/186.fa4d1f56.js",
    "revision": "c233e7973c1a25263d598696e1fd46aa"
  },
  {
    "url": "assets/js/187.be549ce0.js",
    "revision": "70c01dd88c10d1e64b48f067532a9551"
  },
  {
    "url": "assets/js/188.21a33703.js",
    "revision": "b348342171516d7e518d55f25f65b3a4"
  },
  {
    "url": "assets/js/189.435cf3ed.js",
    "revision": "cff4b1040c1639b4165e6bc0474f97e3"
  },
  {
    "url": "assets/js/19.5dd4a00a.js",
    "revision": "cd5dfa590f15f27aa595f6fa2d27a90d"
  },
  {
    "url": "assets/js/190.9a2e83ce.js",
    "revision": "17026d6cc678cbfaa284b39e2769e803"
  },
  {
    "url": "assets/js/191.b3882572.js",
    "revision": "573f722c766e4bd39dba3a5e2fd468a0"
  },
  {
    "url": "assets/js/192.6bf01ad7.js",
    "revision": "97daf21408dd0ff2135b88551a5df8e5"
  },
  {
    "url": "assets/js/193.6bb549b6.js",
    "revision": "0cbe0d13e9a0e3369fd73461b5aee89e"
  },
  {
    "url": "assets/js/194.4c541ab2.js",
    "revision": "735711728cf2fa11880711d803a31acc"
  },
  {
    "url": "assets/js/195.9e6a1405.js",
    "revision": "f25c3f2cc720b919100013ab45044030"
  },
  {
    "url": "assets/js/196.8e38e99a.js",
    "revision": "a45b3ee28367049776aa2f79b209e00d"
  },
  {
    "url": "assets/js/197.98ec458a.js",
    "revision": "7a0e46434c8b07a6c7a965ad9819a37f"
  },
  {
    "url": "assets/js/198.5a45a5fb.js",
    "revision": "49937897452976ea16b46fe2aaae3838"
  },
  {
    "url": "assets/js/199.07177ef5.js",
    "revision": "5a4614284613a087df45da42c97060ef"
  },
  {
    "url": "assets/js/2.fe5a4212.js",
    "revision": "998c96920d5c18a875cb0a9c6475b26c"
  },
  {
    "url": "assets/js/20.01f949a2.js",
    "revision": "b4bebadcfc59a5978ab818c6ccbf61ad"
  },
  {
    "url": "assets/js/200.798542dd.js",
    "revision": "95ff94a7a8a3f5668fe503b3210ffba6"
  },
  {
    "url": "assets/js/201.20b2f230.js",
    "revision": "e36f0ad1aa773a02d969f1e8b47f76ef"
  },
  {
    "url": "assets/js/202.2bcdb13d.js",
    "revision": "09d47d55879c3c9b6f38c536a7a3eb9d"
  },
  {
    "url": "assets/js/203.1c16d237.js",
    "revision": "a4d5e78f9ab97484b1b6a5855d8af6e6"
  },
  {
    "url": "assets/js/204.44a1967c.js",
    "revision": "b2d5771ad6ac25cb2a710e4c7512e8e6"
  },
  {
    "url": "assets/js/205.7598d613.js",
    "revision": "816d68a4580cbdec112ae827ca301f7c"
  },
  {
    "url": "assets/js/206.270227fc.js",
    "revision": "c8197ae9a7b17db810752871fe7574ca"
  },
  {
    "url": "assets/js/207.d60b6803.js",
    "revision": "42f10d81026b88351f0335ccf27ea0a1"
  },
  {
    "url": "assets/js/208.f32d7fa0.js",
    "revision": "d7e56eda3e7ea16f7d69aebac7a16061"
  },
  {
    "url": "assets/js/209.e3993f98.js",
    "revision": "37ca70870863456b311444e3c6ad2872"
  },
  {
    "url": "assets/js/21.4bf23474.js",
    "revision": "e654bb172998850b5c2dee3bba5f7b66"
  },
  {
    "url": "assets/js/210.2c2de8f4.js",
    "revision": "00f49865b58bd312abe7afd3b7055f2a"
  },
  {
    "url": "assets/js/211.efcd6ee1.js",
    "revision": "cb8e43ba7483cce069b9e326ddab3775"
  },
  {
    "url": "assets/js/212.0a51de0b.js",
    "revision": "1c792c148504c062b3047adcbbc17750"
  },
  {
    "url": "assets/js/213.f3527d63.js",
    "revision": "330263b0487bd23521a08e6d88650629"
  },
  {
    "url": "assets/js/214.07f8898e.js",
    "revision": "50043f9d5cb261e946f8c1e994488d89"
  },
  {
    "url": "assets/js/215.126eabf7.js",
    "revision": "cf9fef4bdc10ebb715742352016d92af"
  },
  {
    "url": "assets/js/216.03e8b330.js",
    "revision": "7798d59f3ea0c81398adc8f8d85a425b"
  },
  {
    "url": "assets/js/217.48c7348b.js",
    "revision": "04e8b652effaffd8b49400f48cfdfe81"
  },
  {
    "url": "assets/js/218.e5d2249c.js",
    "revision": "f7bc7fb557a796f3a73517aeb619a464"
  },
  {
    "url": "assets/js/219.9710c4a4.js",
    "revision": "a175728d1e1de176bbc7ad1f32fc7fcd"
  },
  {
    "url": "assets/js/22.7a3bd80d.js",
    "revision": "bdc9b04938dda021a7715b49a739abc2"
  },
  {
    "url": "assets/js/220.0eb306e1.js",
    "revision": "4256ae7210d7d038d866b700d136ca9b"
  },
  {
    "url": "assets/js/221.98f96024.js",
    "revision": "e70656b08fb4c0fba8e9201be97f4f6a"
  },
  {
    "url": "assets/js/222.4a207dab.js",
    "revision": "c090dd421cf4e2b7394c77f3a7aaa1ff"
  },
  {
    "url": "assets/js/223.244e7e39.js",
    "revision": "90783a65ecbb8999bfb71074d9c5891e"
  },
  {
    "url": "assets/js/224.91126760.js",
    "revision": "c55493965aa875f0c72abd45b9f47130"
  },
  {
    "url": "assets/js/225.6c6c9039.js",
    "revision": "fb1fb9c793c6730e8e01363028ff60b9"
  },
  {
    "url": "assets/js/226.c470cef0.js",
    "revision": "4fdce9de0c84b52c06367d6d9b3bf679"
  },
  {
    "url": "assets/js/227.4539f987.js",
    "revision": "1da7c529dd2ed5f83cc54904c8dc976a"
  },
  {
    "url": "assets/js/228.05f399ed.js",
    "revision": "57a811507e5995b74962b4abe64fa5eb"
  },
  {
    "url": "assets/js/229.7203bb0d.js",
    "revision": "7f67bb98a7f23f089c48dda7b42024bf"
  },
  {
    "url": "assets/js/23.a95478c3.js",
    "revision": "db8401423c6cdf25ebac351a463dbc7f"
  },
  {
    "url": "assets/js/230.53b9a342.js",
    "revision": "ee6cbbfdf9f7581c77e0be5dcc0000f4"
  },
  {
    "url": "assets/js/231.53280d8a.js",
    "revision": "fad32f8b63ec3a9cdd0a4f2267c98da0"
  },
  {
    "url": "assets/js/232.9fbcd690.js",
    "revision": "38aa8663ba17705b9bbe004739fff8b3"
  },
  {
    "url": "assets/js/233.8a5a7ef2.js",
    "revision": "006ab2fa95fe43cf3863e20fdd0cb374"
  },
  {
    "url": "assets/js/234.5f1625d4.js",
    "revision": "cc65a8b135c2700c24c8299732d150af"
  },
  {
    "url": "assets/js/235.57bcffc4.js",
    "revision": "e669ddec5471873ba7138846bc89bf25"
  },
  {
    "url": "assets/js/236.ce4b26d7.js",
    "revision": "79b2d669b125b1f820b9f52d1f8ab165"
  },
  {
    "url": "assets/js/237.f3085d89.js",
    "revision": "6d059c918a2501b133f22f2aac3efe95"
  },
  {
    "url": "assets/js/238.bbc5470f.js",
    "revision": "c9c1fee0428f9556b02dd4f9edf61b3f"
  },
  {
    "url": "assets/js/239.9b9f8c1f.js",
    "revision": "6efda74a24c298facd2bcbe1063c10db"
  },
  {
    "url": "assets/js/24.6a174b11.js",
    "revision": "ddab69a3c4914842f354b2051413428f"
  },
  {
    "url": "assets/js/240.0960dc6f.js",
    "revision": "246140dd35f1df0dd89427ae10656f56"
  },
  {
    "url": "assets/js/241.b86c2c3f.js",
    "revision": "627b7ee4d6db0aaaba2fcf2d3df3a508"
  },
  {
    "url": "assets/js/242.91bb2803.js",
    "revision": "aef0893dd3a9d96802c97e9a8b670556"
  },
  {
    "url": "assets/js/243.f2fe82c5.js",
    "revision": "da91ec909e26c1302e6d678c356f107c"
  },
  {
    "url": "assets/js/244.2ab35062.js",
    "revision": "b2fe9c2e38c9f5c28a987ff2e5b84440"
  },
  {
    "url": "assets/js/245.89b8c3d1.js",
    "revision": "607ce30a1914b2f4b218358399c3e23c"
  },
  {
    "url": "assets/js/246.c95995cd.js",
    "revision": "acb133478871ec5e6449de944e72dac4"
  },
  {
    "url": "assets/js/247.2d0fff34.js",
    "revision": "627deb93788da4e86049816911e630d8"
  },
  {
    "url": "assets/js/248.c44b3bc9.js",
    "revision": "8c1943252aa1c47e9ad290040bdeaaec"
  },
  {
    "url": "assets/js/249.1fcd5f88.js",
    "revision": "57ddce02c2a5acec2642ce5b6fba9494"
  },
  {
    "url": "assets/js/25.61bda1c7.js",
    "revision": "fa8035347293d9a199b89e5439507f9c"
  },
  {
    "url": "assets/js/250.5805be35.js",
    "revision": "53b886b99e2302ea1d0e214ccd3edee1"
  },
  {
    "url": "assets/js/251.3d45004f.js",
    "revision": "40ca14930b1b80c25bf49b9c98ebb851"
  },
  {
    "url": "assets/js/252.cfb8dbbe.js",
    "revision": "f1b082d86b9036beb9ed0a563e7b08f7"
  },
  {
    "url": "assets/js/253.b217bbfd.js",
    "revision": "116de62808bd5e3ee73b96ff4ae4727c"
  },
  {
    "url": "assets/js/254.cfa9bc53.js",
    "revision": "b8dbaec6d19bf601e689c1c4fb51d8fd"
  },
  {
    "url": "assets/js/255.eb8a67e8.js",
    "revision": "80560bdf444df13283aee8b5aebb4d2c"
  },
  {
    "url": "assets/js/256.788398f9.js",
    "revision": "105fad277673d0007156a95d8283d23a"
  },
  {
    "url": "assets/js/257.d1225c83.js",
    "revision": "8ec5eb523e616bfacf5467097ebf4dac"
  },
  {
    "url": "assets/js/258.0fd6719d.js",
    "revision": "501efd8ebbb7561176653e8fcc475705"
  },
  {
    "url": "assets/js/259.6f51dbb9.js",
    "revision": "b43702099a92dea2e7d01cee8a2e3c9a"
  },
  {
    "url": "assets/js/26.2d70bce1.js",
    "revision": "ae059139bbba55f14e501a5e1154f757"
  },
  {
    "url": "assets/js/260.8f38ccef.js",
    "revision": "3035f2942e9dffba41c159bab96cad31"
  },
  {
    "url": "assets/js/261.0d62b76f.js",
    "revision": "40e774ca76d9611dcfe2e01e443ce6e0"
  },
  {
    "url": "assets/js/262.acc690d7.js",
    "revision": "4ec044aa43496909ddb944f81e455154"
  },
  {
    "url": "assets/js/263.b2bb2acf.js",
    "revision": "9ac6c1a2f29c6fc51301a131bb3d46b4"
  },
  {
    "url": "assets/js/264.a82e118b.js",
    "revision": "6feb8fec795c8594b7aabffd49783d6c"
  },
  {
    "url": "assets/js/265.c6e389b5.js",
    "revision": "baa6e1d5eabae6082d48dd74648f3be8"
  },
  {
    "url": "assets/js/266.d4b18b9b.js",
    "revision": "37174463c17e023ddafc0b67ba591f0d"
  },
  {
    "url": "assets/js/267.745c8f54.js",
    "revision": "d80edd9244bd18d2eecdf84c6566c3cf"
  },
  {
    "url": "assets/js/268.ab628bda.js",
    "revision": "5f5f30e1b71d98b98645c8021cd1d93a"
  },
  {
    "url": "assets/js/269.8024ed22.js",
    "revision": "fd50b406e70b1416b634da83cf89b181"
  },
  {
    "url": "assets/js/27.05910f06.js",
    "revision": "8ead1bfab3df44296272531ddae82787"
  },
  {
    "url": "assets/js/270.08bef3f7.js",
    "revision": "87934b33a2c6061b959681204559be03"
  },
  {
    "url": "assets/js/271.b8ecf575.js",
    "revision": "936a380992b96b564e543ff7695bbbd4"
  },
  {
    "url": "assets/js/272.e36eefed.js",
    "revision": "e4b7158286181094f84febcc7b8e0fc8"
  },
  {
    "url": "assets/js/273.8ee30514.js",
    "revision": "fd43cf50846bb18126dc58def73e3b0c"
  },
  {
    "url": "assets/js/274.48748a1d.js",
    "revision": "f55ab5093ac6a42d446e869e5af729d4"
  },
  {
    "url": "assets/js/275.fa738180.js",
    "revision": "e4bd651b36fdfcfa2c95564318ab1446"
  },
  {
    "url": "assets/js/276.66e6ac1f.js",
    "revision": "34118c210bb5e150075b32d2b830dd60"
  },
  {
    "url": "assets/js/277.7904f5fa.js",
    "revision": "c072808fcbb5026cf288c9cdb6e4aa8d"
  },
  {
    "url": "assets/js/278.48d924f0.js",
    "revision": "0bad7cfdbcad97373defe1da8b78df29"
  },
  {
    "url": "assets/js/279.e799cd65.js",
    "revision": "dc91f9fdfa9eea1ba932c1b2fe8e5b5c"
  },
  {
    "url": "assets/js/28.c8d70411.js",
    "revision": "aab21d59b3211fa845ab7afae57fb340"
  },
  {
    "url": "assets/js/280.9bbac6e7.js",
    "revision": "b085f2dfc8269c99f7fd16cb733f6487"
  },
  {
    "url": "assets/js/281.8aac07ea.js",
    "revision": "88f7febe7477051f87e30033e13418c3"
  },
  {
    "url": "assets/js/282.6975c62f.js",
    "revision": "db6c0b6cb0f9f21ec97e46c8b8ac0c8c"
  },
  {
    "url": "assets/js/283.924c28fc.js",
    "revision": "61c0a66c0d611741bf087f0656dc17d1"
  },
  {
    "url": "assets/js/284.4bdb5694.js",
    "revision": "6f867f8c4854de0235d1aa17bf522338"
  },
  {
    "url": "assets/js/285.dea26ca3.js",
    "revision": "ab1e9248efed9b4a25fbb6d748585c45"
  },
  {
    "url": "assets/js/286.f131bab4.js",
    "revision": "b2480c03bf8f3411418f2b537bd5f117"
  },
  {
    "url": "assets/js/287.7773a02d.js",
    "revision": "dee42f815d1a0a67a79c0f2c173cb84f"
  },
  {
    "url": "assets/js/288.263df02f.js",
    "revision": "73d16b5db41218787159c7f3ce7c6067"
  },
  {
    "url": "assets/js/289.ccdfcd45.js",
    "revision": "7cf859f07c694a2cdde380e0a67b622e"
  },
  {
    "url": "assets/js/29.e8720dc9.js",
    "revision": "559e7ae4536cc388c33ea129a5e429ae"
  },
  {
    "url": "assets/js/290.5cccd507.js",
    "revision": "14d69ee18729da7f9d13d0a3f05186ff"
  },
  {
    "url": "assets/js/291.2d60db18.js",
    "revision": "eca4f1377751972b03fa6d248ee4bd98"
  },
  {
    "url": "assets/js/292.731a3cf3.js",
    "revision": "5583db775c668766034841bfecb34e1b"
  },
  {
    "url": "assets/js/293.c30b1714.js",
    "revision": "808e881f4507760436911f3a80a18adc"
  },
  {
    "url": "assets/js/294.79369f2e.js",
    "revision": "70c1861c7b2e9340503c50019479ac81"
  },
  {
    "url": "assets/js/295.71ee2f23.js",
    "revision": "30105199a1eaad2fa777f3b05a1cde7b"
  },
  {
    "url": "assets/js/296.3b2b1aaa.js",
    "revision": "41c650d2ee9487243ed62806906b0b2a"
  },
  {
    "url": "assets/js/297.0a164edd.js",
    "revision": "a60dc3415491e33512fcaf9648cf32e4"
  },
  {
    "url": "assets/js/298.4f5ba46f.js",
    "revision": "427893ab5921a5d527fb67707a35fd6b"
  },
  {
    "url": "assets/js/299.1b773d8c.js",
    "revision": "01974051500111ba1b7e996ab80c197f"
  },
  {
    "url": "assets/js/3.b02c4595.js",
    "revision": "0dafd6d3829a08a51c41cf47f045b516"
  },
  {
    "url": "assets/js/30.5031c484.js",
    "revision": "8a9434b1d9e75ce3133206daaac1c2d1"
  },
  {
    "url": "assets/js/300.28229de1.js",
    "revision": "56c41a58fe65706d1fbbe71f89ca2cad"
  },
  {
    "url": "assets/js/301.295a028a.js",
    "revision": "a6dcdb88a7ce1de52238730ef1666f78"
  },
  {
    "url": "assets/js/302.c33e5b3d.js",
    "revision": "354287dd83d1d8d4b98ff8ccce89235b"
  },
  {
    "url": "assets/js/303.a8634bc6.js",
    "revision": "6dcbcbdec881e164d37a9a6f0ae6eab3"
  },
  {
    "url": "assets/js/304.fde6896b.js",
    "revision": "142ca9fa2131148463e6ba89a418eb51"
  },
  {
    "url": "assets/js/305.35786315.js",
    "revision": "44e11d169ea430685bc4cafa14e64c8d"
  },
  {
    "url": "assets/js/306.36ce89cd.js",
    "revision": "ffb393a0cd219babbad6397879effb1b"
  },
  {
    "url": "assets/js/307.1da67a10.js",
    "revision": "87cf71fafc06556b7b70e636500bfd6c"
  },
  {
    "url": "assets/js/308.4244f733.js",
    "revision": "c965f1911bbd8ae403e4534afccffc83"
  },
  {
    "url": "assets/js/309.92f6c275.js",
    "revision": "11340bab14b02e3a6bfcee49658b6852"
  },
  {
    "url": "assets/js/31.065d1d73.js",
    "revision": "059a0cbb5208e8570bfbc1b4d8af0a7f"
  },
  {
    "url": "assets/js/310.97a66f8a.js",
    "revision": "1ca8494e9fe39e80cd3bf92f1ff280f7"
  },
  {
    "url": "assets/js/311.fca42b54.js",
    "revision": "3ef1921b6a93fb9d92df04c342ca17f6"
  },
  {
    "url": "assets/js/312.707d853e.js",
    "revision": "45fa85925f5835d14f591fd0e80f195d"
  },
  {
    "url": "assets/js/313.c8fcc2ed.js",
    "revision": "a238aaaf17e6b71b8a4c561ce4ccf9a9"
  },
  {
    "url": "assets/js/314.36960063.js",
    "revision": "ae6c73372cb275b6be417c51c04047c7"
  },
  {
    "url": "assets/js/315.41cdad76.js",
    "revision": "ae384bb366564ab9c9bea67632dfd024"
  },
  {
    "url": "assets/js/316.51303b4f.js",
    "revision": "a97a2e9b6c16c612d5c31666ab500ca9"
  },
  {
    "url": "assets/js/317.9ccde55b.js",
    "revision": "495e869e4d71b07f630388eb4d4df320"
  },
  {
    "url": "assets/js/318.7c700d59.js",
    "revision": "d5cde42d67ed06df1ff6b02e15379740"
  },
  {
    "url": "assets/js/319.32d148f4.js",
    "revision": "eb20a7d3aeaf1168da5668d2e1a66314"
  },
  {
    "url": "assets/js/32.1e997844.js",
    "revision": "d485228f4af34083689a90ffb38e4f62"
  },
  {
    "url": "assets/js/320.b3561f67.js",
    "revision": "576755b89781fab2d5566816f6787d39"
  },
  {
    "url": "assets/js/321.a5c48d7a.js",
    "revision": "6de026705a5042dd68908cf16c3bc87e"
  },
  {
    "url": "assets/js/322.0e27fc3b.js",
    "revision": "51f96141c3b7040519c4ae14b3f712b3"
  },
  {
    "url": "assets/js/323.495d8dd0.js",
    "revision": "ace48cdee7ad4d84b183fbad5aa826c3"
  },
  {
    "url": "assets/js/324.a89ad0fa.js",
    "revision": "365376842d1641b334720122bb6a8598"
  },
  {
    "url": "assets/js/325.64c49f9a.js",
    "revision": "83197a07dc01da67309c80df1655ea9c"
  },
  {
    "url": "assets/js/326.5f0c3a25.js",
    "revision": "a2bd935f250eff3df98113817d5ba4f3"
  },
  {
    "url": "assets/js/327.9d9bcda8.js",
    "revision": "cd6a3f71c3d7229f0fa15e55e62211ef"
  },
  {
    "url": "assets/js/328.b6e57f22.js",
    "revision": "2a4b35b936c6a9327c36b01864760619"
  },
  {
    "url": "assets/js/329.23eeffd6.js",
    "revision": "bf5c0722b329cf2df77106acd3a78e72"
  },
  {
    "url": "assets/js/33.51ee273b.js",
    "revision": "9f69c30d3128a5da968e13798fdd28cf"
  },
  {
    "url": "assets/js/330.98dd00e5.js",
    "revision": "0fe700c2ed375ac49962d5d85eb0ba6f"
  },
  {
    "url": "assets/js/331.ee297cdb.js",
    "revision": "34dc626277593092a3464d693f12d629"
  },
  {
    "url": "assets/js/332.442f3566.js",
    "revision": "af6463a732c1729dcdb2a36a345ef196"
  },
  {
    "url": "assets/js/333.acc39296.js",
    "revision": "32b23f0d075da2f32c391f7a324f42cd"
  },
  {
    "url": "assets/js/334.94e8e82e.js",
    "revision": "fb4c63f7039e4f6e9dd5ef3c13808507"
  },
  {
    "url": "assets/js/335.14c1c8a0.js",
    "revision": "a3182d2f435568dff691c9c6bc1d3eee"
  },
  {
    "url": "assets/js/336.8a801311.js",
    "revision": "f701c144aba1faf46082a261fc431a8b"
  },
  {
    "url": "assets/js/337.0c79fa18.js",
    "revision": "d8253efa373c6c6556f557e16a3a495e"
  },
  {
    "url": "assets/js/338.b423a356.js",
    "revision": "b6836b163cd3b655a27a0ffef3317d18"
  },
  {
    "url": "assets/js/339.8f6c43ce.js",
    "revision": "f4c029e2d32d11d9719e49f9f66697a5"
  },
  {
    "url": "assets/js/34.03f32214.js",
    "revision": "866338ec677e272578903216162a5664"
  },
  {
    "url": "assets/js/340.6e252c59.js",
    "revision": "3014d80f2cbafcd10d97690fa7815f91"
  },
  {
    "url": "assets/js/341.972f92b0.js",
    "revision": "53183a6fc5e4f3acd6781bdcefc78f1c"
  },
  {
    "url": "assets/js/342.f6cf387b.js",
    "revision": "71e23e69e1e82ee4b22309bba64a9c0b"
  },
  {
    "url": "assets/js/343.fa5e5192.js",
    "revision": "f2b8ede3d1f6ec32146d4696541a790b"
  },
  {
    "url": "assets/js/344.000e7260.js",
    "revision": "3c3db66d3d67d2aa0c74759a2f953c1c"
  },
  {
    "url": "assets/js/345.e72e7c2c.js",
    "revision": "c576a16eed889f2cb5db80035b09b552"
  },
  {
    "url": "assets/js/346.c544088e.js",
    "revision": "53381293d5aaeb8d496650b024563633"
  },
  {
    "url": "assets/js/347.bc191304.js",
    "revision": "6feda95dda1fcf39669021eb5556c45e"
  },
  {
    "url": "assets/js/348.f49c6239.js",
    "revision": "ef73845bff81ccbe5447548a8d8a9195"
  },
  {
    "url": "assets/js/349.ccb116b2.js",
    "revision": "df96b24e365aca24bce4f4b2cde16be4"
  },
  {
    "url": "assets/js/35.5d47c431.js",
    "revision": "1a85110cfe4618d11bb956fae1a07b3b"
  },
  {
    "url": "assets/js/350.8d0ce783.js",
    "revision": "b293a272a7d9ebb04281bd86f84b2fe8"
  },
  {
    "url": "assets/js/351.b7d9a4db.js",
    "revision": "b9a6a088b2ff1b2809f44df54562128e"
  },
  {
    "url": "assets/js/36.99c3cec3.js",
    "revision": "08f2d279df9081128148bb3182bc2224"
  },
  {
    "url": "assets/js/37.84f2d3cf.js",
    "revision": "bc853d2bf01f590d52e9486c82cd9fc9"
  },
  {
    "url": "assets/js/38.7bc0a8fb.js",
    "revision": "fdf7973a14b4cc3157aca9e6068133db"
  },
  {
    "url": "assets/js/39.a8162706.js",
    "revision": "8bd51cde4eb21dbbd746a40a116de392"
  },
  {
    "url": "assets/js/4.2087ab43.js",
    "revision": "c09acbbee247cf7b0a2e4c3b96302e71"
  },
  {
    "url": "assets/js/40.3ea23f39.js",
    "revision": "8d9fd76b5952e11d95dd8c47c685501d"
  },
  {
    "url": "assets/js/41.403e47be.js",
    "revision": "eb4fb52f6734a85dcc8db722fe2e4bc2"
  },
  {
    "url": "assets/js/42.4b8e342d.js",
    "revision": "82804f0a81186b381fc0e3bed249dd20"
  },
  {
    "url": "assets/js/43.7d428f90.js",
    "revision": "5c076d73b63c4b7a3c56b6105a7698e0"
  },
  {
    "url": "assets/js/44.81fab426.js",
    "revision": "b7e76595d382d0f3047b4052a2cfe41f"
  },
  {
    "url": "assets/js/45.9ff6fcb2.js",
    "revision": "2d4c4d36a52de83aff95be7be3d7254e"
  },
  {
    "url": "assets/js/46.a165b19e.js",
    "revision": "00128810b1a6d15d2e549edbb93eed07"
  },
  {
    "url": "assets/js/47.8f5d37cc.js",
    "revision": "1c2af435cc99ada99934bae67285c004"
  },
  {
    "url": "assets/js/48.ff62a1c8.js",
    "revision": "cee511720c9a1c80bd5142c7b1ae8040"
  },
  {
    "url": "assets/js/49.d869f65b.js",
    "revision": "1538a4f0d5951ce331ab94617760ddbc"
  },
  {
    "url": "assets/js/5.d11cb774.js",
    "revision": "bf37a02c3fbcca5ff3e4a7bb12a810da"
  },
  {
    "url": "assets/js/50.73e336fb.js",
    "revision": "e3f4997315a2e733408395ff9ce9695b"
  },
  {
    "url": "assets/js/51.5362d142.js",
    "revision": "55b9f62e1e2469b5da5095a96a1f0700"
  },
  {
    "url": "assets/js/52.cf06f6a5.js",
    "revision": "1ef5767c9414801c26587dd18e768960"
  },
  {
    "url": "assets/js/53.b1aee4e7.js",
    "revision": "8eb5ad9c26258227ac8b50de56e7bfbd"
  },
  {
    "url": "assets/js/54.102988e3.js",
    "revision": "8df37dcb243cc7503f6bb4b436542f4b"
  },
  {
    "url": "assets/js/55.51db00d1.js",
    "revision": "5c2ecff55654ec9322a8f009a3cea216"
  },
  {
    "url": "assets/js/56.c65d8879.js",
    "revision": "b51c47bdc220dee6d9d0c71d243cd3ea"
  },
  {
    "url": "assets/js/57.112a1416.js",
    "revision": "79396b3093db7e6f792b476546c971fe"
  },
  {
    "url": "assets/js/58.e8a11549.js",
    "revision": "3f599e89c919081581fe503c961b94a4"
  },
  {
    "url": "assets/js/59.75da252f.js",
    "revision": "62dc812c4c518e90591fb3dc9a98869d"
  },
  {
    "url": "assets/js/60.48658398.js",
    "revision": "f8e7e4d788559aee332b7a1e7313e1c4"
  },
  {
    "url": "assets/js/61.1cf80e8e.js",
    "revision": "991adc6df20e75fe1590691464719c41"
  },
  {
    "url": "assets/js/62.d6d136ae.js",
    "revision": "f68d7d5c9926031a187d16bdda17d723"
  },
  {
    "url": "assets/js/63.cd50bd1c.js",
    "revision": "94394198fcf21ee749c43a2500ce56d0"
  },
  {
    "url": "assets/js/64.3eaaf136.js",
    "revision": "625c8db01601a7057a966fa077385cb7"
  },
  {
    "url": "assets/js/65.c72d5283.js",
    "revision": "f409200c27879ba9850c0810f46fac94"
  },
  {
    "url": "assets/js/66.a0e5066f.js",
    "revision": "872bf1a0b81f880022c1dc83de23891e"
  },
  {
    "url": "assets/js/67.a1f23e9e.js",
    "revision": "f7abb7c8de461fcdfea6bb50bb9c5d72"
  },
  {
    "url": "assets/js/68.80872816.js",
    "revision": "be14a522f1e43fffc95abe4fedfef1a0"
  },
  {
    "url": "assets/js/69.3d8d724e.js",
    "revision": "c00e528ee1faaee2e807a472f0ee938f"
  },
  {
    "url": "assets/js/70.67b52627.js",
    "revision": "f47795361a639e5860fa8e85bcaee380"
  },
  {
    "url": "assets/js/71.8056347e.js",
    "revision": "6fb210dcb541e5d28518be72bc7f3c36"
  },
  {
    "url": "assets/js/72.2028049f.js",
    "revision": "24fc1327d4e9733de8a4714f428e9169"
  },
  {
    "url": "assets/js/73.250e21df.js",
    "revision": "a278cd5ce55e081f265d84fa94e62a50"
  },
  {
    "url": "assets/js/74.3df865fb.js",
    "revision": "b3aea774c65f5cef81e86dadd0c59e9e"
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
    "url": "assets/js/77.17f30139.js",
    "revision": "1662c5aab7a0711de2ee160fb998d01f"
  },
  {
    "url": "assets/js/78.c7849e86.js",
    "revision": "58c71609febe1986d8a0426e5ad1df6f"
  },
  {
    "url": "assets/js/79.72e970ae.js",
    "revision": "f7a3be22509e62385c002fcb796b4b12"
  },
  {
    "url": "assets/js/8.81beaff7.js",
    "revision": "438d0ce6ebbe208913e036accf3ac8d6"
  },
  {
    "url": "assets/js/80.8774d8ab.js",
    "revision": "c8f1af67fb1939472db1261bf9de2c6b"
  },
  {
    "url": "assets/js/81.8ef5797b.js",
    "revision": "7f02ffc3d35dc078db2e9b2d35f0e3bc"
  },
  {
    "url": "assets/js/82.79775327.js",
    "revision": "b9e94908fb1108374f1284d31d203dad"
  },
  {
    "url": "assets/js/83.fc176827.js",
    "revision": "1c5e7411de13de2fc56a43c6a587ad5c"
  },
  {
    "url": "assets/js/84.d931bcf3.js",
    "revision": "2851df041fcdcb4719862335ae508563"
  },
  {
    "url": "assets/js/85.87c9fcad.js",
    "revision": "3c26e9c0951b4616d022486b1633e436"
  },
  {
    "url": "assets/js/86.73ccb4cb.js",
    "revision": "08346513472eebab2f38ffa59a96d216"
  },
  {
    "url": "assets/js/87.acaf6bb0.js",
    "revision": "4121a8f2d8b43c0b0cf6f336b84a9d35"
  },
  {
    "url": "assets/js/88.c89c10c3.js",
    "revision": "7ddf14d07222e5cd19add8f50b3106d6"
  },
  {
    "url": "assets/js/89.2a925cf6.js",
    "revision": "9a5970599c66357ffb290cb112461f4f"
  },
  {
    "url": "assets/js/9.7d63a852.js",
    "revision": "6959beaeb0f057cba455e90d3968a3df"
  },
  {
    "url": "assets/js/90.77595da1.js",
    "revision": "d8429403474ddbd1141d5f260539ebd2"
  },
  {
    "url": "assets/js/91.0687a31e.js",
    "revision": "12fc3ab0c5a40346ac521a9d2936ac75"
  },
  {
    "url": "assets/js/92.790de864.js",
    "revision": "7d93595f6e55ff1a8d9bbd10fe6e2814"
  },
  {
    "url": "assets/js/93.425664bd.js",
    "revision": "63d85c8002dbf158cd08a6cba4211e44"
  },
  {
    "url": "assets/js/94.f06d98d6.js",
    "revision": "3d72a3de9512a6797ea530d07aeb2e03"
  },
  {
    "url": "assets/js/95.f47a98ed.js",
    "revision": "7ae98b4c674e22599de1b7898b6c14b1"
  },
  {
    "url": "assets/js/96.f71e9443.js",
    "revision": "723eb7fdaad41bb8c69471403a39a241"
  },
  {
    "url": "assets/js/97.c3d280b9.js",
    "revision": "60b44fff2f43adaa203fae1161caf508"
  },
  {
    "url": "assets/js/98.f8a507c5.js",
    "revision": "59e8fd9628075fce1b81df51c314e8ce"
  },
  {
    "url": "assets/js/99.bf0fff42.js",
    "revision": "dda15c098a899fb06e23dc18abc1714c"
  },
  {
    "url": "assets/js/app.53dd6974.js",
    "revision": "81f4e9883459c8d7f18191a8772a9e58"
  },
  {
    "url": "assets/js/vendors~docsearch.70becf99.js",
    "revision": "4098d2f5bced23ccbfec4e7737f2e45f"
  },
  {
    "url": "index.html",
    "revision": "a0357ca2a71ee9478f8006a586fd3729"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "e7d49f1d0db96abd0098354a912799c8"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "e862345de59efb844638be3d350a37d6"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "7422de54eb2cf2fcee9947d6a0cb34ed"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "cc7e51368413e12aadd4706df490e01d"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "f7d52f619a31672028be0ce4c369e71f"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "582b148087f44d99b6d5f7d798542145"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "ac0eff96ff28b6b5da0a0f26c3fa38a6"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "c4ba6789e0c7a88559639bdd36781683"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "105384b1297e76278c44707f12117406"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "c829a80f53b9c373db81c5b8b1c9b67d"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "156422817755ff64f2a4b55bf1d22469"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "342deb1945ff56cce9195bf8b95f2022"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "2714251ff33e622b60cc439dbe9fd184"
  },
  {
    "url": "master/api/index.html",
    "revision": "73aa76df5699a6641825180cf6f4c7f1"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "a516fb47d3c520aa412103ffa7369889"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "149728150aa8451f96b3b3c22dcd6615"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "81090b8f85a7146d90f96473297c5fb5"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "94f6f9ba6a950621d02ec24dc2c002d0"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "2093a606d545b467f854b887979bd0a2"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "35997f8cfe272811747bd7f74a8c7de8"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "ea08b6452ee843030da2e270d9f19728"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "0ca5f6050964e8ac041f6ee0e0ba366a"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "a0465e494da06ebe2b53cfa937fff8e0"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "ebbeff91cac063bee8ed13a198829201"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "e494de303e9e1dfb041073664501b8b7"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "2ebcaabfaf5ebb71fbbf0cf84742da18"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "8046a4d74df1c544d04a68c1bdfaa96a"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "a3637de020287d466a6b03487d653f1f"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "8cd248d9b5555e032414509017a42353"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "b8a1ddc67c4cea54c55bc8103930e65c"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "0a83c94af23b15cca5bbd161bee89943"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "9cd4bfa5e9918682415cbf52e88e0729"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "4bbacd06b04a258b2b58da3d301b1160"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "18cae7bab6d7243970626004c096615f"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "36fefb3da5a6a90f433405506566e09f"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "da6977476f7465a17cffbd5d440737e0"
  },
  {
    "url": "master/packages/index.html",
    "revision": "20145e69fbd549b09644b4728915a453"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "15caad4739d71aa94a727d7caed51c20"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "d45f4217d9ec6f59ffeb146831f1fe61"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "37ef5aa8591c2bb8a53b8affcc9aac96"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "8b00b2516cc0373a36f1a0e973d0583b"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "5a4a20066482455d395dac71c3db491d"
  },
  {
    "url": "master/packages/views.html",
    "revision": "871d055db95c44a395ea65cb9a4b7d3e"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "cfbae4d5a36c0eb3e97aaf4685f262ed"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "8b1b69d0cd679820e182bbc08f9b4baf"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "9812ac6246c4c12090758d6a08ed9520"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "43fd5c37592566ef8ff60584707eccbe"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "ee4622cec054ecf56209bb0d8569b9d3"
  },
  {
    "url": "master/themes/index.html",
    "revision": "d784f1f27ff7a84bf7454a4da7dc7beb"
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

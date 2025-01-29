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
    "revision": "1620f4cbce5d5a28fa94cd4d51570ced"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "f00f52454935a000ae953fbbf2cf6215"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "3af01b9fac3807fb8656b535d1f84ef8"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "972420dc0333b16116398e706744cb67"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "0592d10037523cec35da467cd2001445"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "288c6379c17a6394305f87a60ba6a648"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "8bd5f8950ec22ac1bc1636b06d10dfa0"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8783d747a920fe80ed2e83e6fd95b4fd"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "ae9b323d45ff3b496bbdce772ec1de86"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "5696f4a9c317de2ccee966cc66ee42af"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "ffc3d4b43455cb0d1f640a116fa84fa3"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "7cca562bc446c079b00ffade47af50e2"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5b80cab0b969c3c9fe18f49f97db58d0"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "1060337cebeaeb003f864aee32387008"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "e89e7a2157a0bc562641f7e5ad716362"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "3f1117159408ebcf228aa6179dad0b0a"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "8aef61a2c00af34f907c3e24a0cb31e5"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "145b1f00ba63846358081d39f9ea04c5"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "4082fd44d275c5f2e97b7936b8a7548a"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "33cdd55782c329ceaddcfa516ad0fc90"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "963fa372b090c872a8c8dd25b940710b"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "06fbfbaa846b0be6fbb106377d58526f"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "6e04e2b595ea65f302f224b804382080"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5235e9e3332d63835df77701dfcaaa90"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "4700069cf74e876edf34ddcfc39a2121"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "a4607e9ecea17a22151df87a1c5b2051"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "13b2d576ffa29e59422bf67915978976"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "3339359d753d4fc746ef4cad412d2fae"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "e7502ecc8be15649770115ac1d3e93cb"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "fcbece5a2be0e3f36dd2f1f46982af5a"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "fcddd23f04a416104ae88851ae88ab85"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "d9ed27878e11e8b13709a768796d4828"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "b09f6e2a6f4b92c7297f3b2980d6d63c"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "a8e4a73629d2d56224efc82a2e8548fb"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "28ce4c56e685ed07ded6df517140744d"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "fdf7eea528ee887f329b2821303eb8f4"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "60a78f4c957bcef014ba6f2e2813ab8a"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "8a4443534df344b1eb8a5611e8a92333"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "af9446e6eb7568dd19520edd5ad7a637"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "29313b1920063c4671692eac4c8c14fa"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "38f12debe68145c0474572ceab8a2e80"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "15ab43b1cde774fadc40a9f9671b40fc"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "21d32c2cd3e454bf59518d66c4d0c127"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d3c325d9de11edcb3924b94d5e45e851"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "ce4b268151fe431f5d139a4ab369394b"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "5b5d78fd3a9401e8cdb2e5c04b63266d"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "06ab9c0cd24633d8692f95c665b40a08"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "26d25e05a417da97be813a48546e03a9"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "8050c4b3281a74f1414edf163724026d"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "50d1f22d3bbb52589d37f8b08c6d7009"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "c6d25eaabd42f6d998764f5e8de83a9b"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "732dcf8f897d884cfc3e27898e7e8c4e"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "ad48d48ad8a70168155af8fde2245c4a"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "bc8f2d540ec928f8926b98d07d887425"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "0cffae7e454a5759159a859c6711f580"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "99d621ee84e27203c33e3ffd134e8876"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "90fb1e850bb556c8b474c7d43beceb33"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a36eaca925e2651ac631f4e44ebd09bd"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "9ab6ef7b53410a31efa0a4eacf518ad0"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "2bbcf7c5c10eeabd98cc2516ce3bbe0c"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "25821d47572470437a58238898882ef2"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "f927c67a9f48ad25157433a513805bbe"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "740d26c08c7115518bdf9ada1e7f2b89"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a499b9f3a07145f1d6152b5e42b5396c"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3c16dbdbf369dbe051a380d56ce1e539"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "0e4aa4ed70a11ddeeb37051552486390"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "03c61085ec52545c62591144b5557df7"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "002ac6ca87d137b3c7ecbb23c2c05ac1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "13694db6c3a2514553ca22b28689f63d"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "953321d8fd50ad2285dead1de9c0ad65"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "ed88f56f0d6ea3a593824e6cc635d162"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "032ac812f3d15da6e1cc48c9415f4741"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "1a9520817dec9ccda97ed02b113f6f2c"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6724ad3fa55205ef979234cb9feb5a04"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "5d3ce7c191ad78c800a56f186dd45ef0"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "ab4b8d4df54ffa0875d189eadc09912b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ba9f64d618d6e03385d7c69ea4dc5e1c"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "20da1bf1592710da2ce4abe544b782a8"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "87eb767a7145827688bb7fdf710748c6"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "3f16190fc0d7459cd3a4ce380c8f71e4"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "9e04efcbe98dcc136b2b2cd65110fdcb"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "214e5d17a4db81ab8008c2c71f16d02d"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "406d6c3bd37ceac59f9b97f2249e9f34"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f8580e6e7a7d9d853b24c846715ae0c8"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "5538c0bd984fb1946087f9e661853307"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "d36c9e4e8d1938db8c1ed82454a2cbd9"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "74e32d6e7db82882f92c6dfa49a83bf2"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "4ee0cb164b12ce9b85fafd3c4d0e30e4"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "da72199a446f2c0be03d959ba4cab70e"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "0e3efeccda0ca5434a571a0e97914bad"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "cf6953bd2525c03a19e12f8f91990db3"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "2d3bbcbc626c19ab69a46c9f67d04b5e"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "45feb247fca6eaa96a8e26eff436d0e1"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "4afa8eee6ed6ab4a03467e10d553efff"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "d2073357704b58df3ae7bbead4fe06d0"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "8ccbe5b7e97e29e55265d3e67de76bf1"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "22eb2f4b178cf9a1145dd7344221d81c"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "0f5bd13af5ed5306111b9b2ebc46da4d"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "6f4617ef54509be39e73dc4c563f3130"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "e9c07f325a951f25c1cb84c1ee19c2f4"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "d2c2ec6c561f6d6056d30f005094374e"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "722da8eaac7196d95856187be65669b6"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "2ef5ac26a0ed3f7defe23b754dfcf030"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "eb4c1aba9d525d878891fafcf1dd7e4c"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "722e9a68e73a483a53d1a90d0f69842d"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "ef8b50c8656710ca46b5a969c2d50237"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "2dc0d2a318b46f01965f616cbb7e4905"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "c7d722805ae44799075efd86ac963bf8"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "fca1a6729ee18463705b9eb80c31371e"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "842bbffc3ad3190f85a1f7516adcfe61"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "e35e0b271b4d28e7e10f00f07c2cb6fd"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "005a05ff3c0cc099cc2499a6bc604aff"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "c40dae39e46394aa9019820cb069f1dc"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "4ba4531da16f599d41d9e8966b8eed79"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "00942b38aaa1b89fe4b6f447d0266b1a"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "8e989e054321ca666f5c934571923344"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8b95d9ec39165c0598dde7ed3796975e"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "bce45dcc79434a1ae2f9d9072d998262"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "4029bfc8c0865d7de5d455762d1028de"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "b87004532ce1dd67fd48af8d55574e1c"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "d4cb927950fcc43e9798d10f58d51818"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "7b38e433fca4b7edd3b0ce19a251c95e"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "c2d05a314d1b868830f736cc7c30d053"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "e6cee51a1499ef6839e3784c177431cb"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "991ce90dcdfdd0c03694bf2cbc5d3955"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "36eb82cb68fd516f7bc5b1c87009a5bb"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "78844f5d988f39717789a715c67c9f9d"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "69ba80b91b89ce7a4141aefa65b7a459"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "dd1213103c27abfc6f7b75be4149824f"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "7f98d2f36d1b573b3fbfca9e87279d29"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "c647df85d0ab897962aa9140be82b310"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "2e5c47792ef381788e090bbb23de0358"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "5cac95ace421a07444e948701327c14b"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "67bf6fadaca7f935db70c588e3771b08"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "06a07a6126e34e1d318817fecb6fb9df"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "387ebfd8a74a2d43175bddd43cff09ba"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "7d4f25c37e8cedf5d55005f8733edcc0"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "e3ebe827c34b0d75dc976ba02db945bd"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "33559e67d99de6b7a04c1fdb980edaaa"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "0333a6a4b70995ac59b24b0a69cfcb4f"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "1eaf7afd1706a8fd692e36017dd9f5d4"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cdbe2fbb7fc39c2987dc09cf817ee5ce"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "ea9504584538f2963283a7d64e20f9d6"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "d7b7bf6629e566a166c07e4207336317"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "b78758aad1bafde24cff21798220a16c"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "4f35f3949699144b73e992a8787143d4"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "6395ef0256ef6ca10278d8d78527224c"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "d7d543c0cfe1f6492e28bc025ac9dad3"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "6973729ed42a9c4ca6328b44d6888ae6"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "5370cc9d0828a05ec97f27060ac4e1f3"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "a6f8c100afd770dc7645fec096937225"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "52caeb6bde24ca7897fc4a7d979fcc50"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "2aeeca340d228d2ec58490ca2711a557"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "84074848f2cce8c42dd1ec54ac3421a9"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "88e1288b1c2e0e11bc86e4209e7e482d"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "e76cb8e601ef9d51373716da2ea0df82"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "e5a91893db81393cf8880564da60b50b"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "9eb10d1ce90d539f6f6b6efd0cf7e7fc"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "df41fa70ddb7701fcb824931204d23a5"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "cfd27c06d9f2a6ebefad5a1c1b7cb8e5"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "09567ce05beebaeeaa65ebde0bb5d634"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "542b409bdba83cca4584aee1d865fd33"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "e2efc1095408b82817fdbc40c89d1b68"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "437daad13cbdb4d365188693bb70102a"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "6f4f63b8e06d38ca447c22e500e1ed18"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "1db79c62c07f2b5dd7d4ec8ff3955240"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "9634c0d19d2876a6e403c9182d9d5326"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "5be2ce8b06477cb639b545925726530a"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "27a50b3ab82713523ecd5d9d400eef07"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "bc896ab088febff9eb1e162214855c66"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "30e5df5bde71ea312d1ca707133443fd"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "c910a7f2a32ccb5aa1ffc8ea425ae411"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "5861cc671f10557969822ddcd82f21dd"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "fc4917a2823bb31e559e23722b8b9ad9"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "1a862d8aa3dfcccdc3c8dfc6e01824dc"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "3ecefc76bd79e75677180acc0dfe6033"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "a945650bd283057fcab254b2e226625b"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "840ce768b940a3e489c94418ee224c41"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "979fa5980dc59db86e6abebf103a9ae3"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "2603278c58895c233f7fb37578bbbc20"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "c33a33b8732f9fb3ca4f050552760d87"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "18f1897bc06bc15f71439e3fb6c5842f"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "8c79a385b99693d43da2eb1eb40776dc"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "e3e8c0be90305b4d93c25092d0b6cbb4"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "45a5d062d7e25c9dd5d470029ec9ec46"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "797274790da094b85f3287aed4fcd847"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "0b5834937ece6a2a6b3ffc08508f8475"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "18aebc1860c7d92b57223fed5e37aefe"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "d28606e123cede91023d7dbaa6cdfec7"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "3d8a6beaba5bd4f854050f3339c85713"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "217047184a533a37dcbe5410ab350322"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "dbd871094c27a03772dc2bb28cb0c93f"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ebe1a6dcdd35d9a0125f249ae210cfb8"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "81724d1c1d92e74d791440afafd872e0"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "7c4444b9efaa28c59b96c4c9c563e25a"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "4de6ce116115d338198fb65536a80373"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "8c66f0edec5cddf05d0fd6c8c0ea0129"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "f0cdccc5eeeeb57ef9c3c2601e6fc45d"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "178bb99e2fddc2e5fd78f8c7852a563a"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "e6d6e81a19a053ca8df45b077337d9ab"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "732592495ad024e65f7bfd4c3ffa8f1e"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "899f6472eebdd4ff78458a73b8287c53"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "ec5f26fbf2d8453c2811e34b0d716999"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "72d4f33192c8d095c3c78d0ec4215e5a"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "f64b2ca1a2478d53f6ce65762a38afee"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "d6c71f875b21fa25850fa4b22fdcc487"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "45356d6cbd9e331cc70793e41d9e34a0"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "398d696cc624b66644dcbbcf9151c013"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "b094dfc52258c5e5f09b624ee09ea0a7"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "9b3c2a0bf1c807d5b6917876244caf51"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "b6c568128728bd835886966232df6e73"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "28acb4ed73e3fe0eb4eac16bebf6f04c"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "9f264b38a72da025ef447a0b79654f4d"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "09ce2a61c7745fe0e7d2af2cd88154a6"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "07c3b54fd1c77cf7199e4f3e0ead51a1"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "93b82c307ee92afc6036899b931e0fa9"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "c514b62b16e719d15726164ce5adabc1"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "c2e519355437ed074841c72f2713d668"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "6d04e5edf0a284f7cec46cbc45ee4b3b"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "baaace1860a99664790228d7ba4609aa"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "82c3dd9027d743599ffcaf56178108b1"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "8fb597b77b5a5f97c1a2ed01b64235aa"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "3e1d5a099b016057e78a94883e330502"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "512101772c8d4cbab04b6bc52512b3e0"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "319c7cb489b580c8992c91765e43422b"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "1e373f13973f20a8fa52cf2ea7ce28b4"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "39d128645575fda73961c23b17ea4f6a"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "7c15a7758b6ebfcb8118944569fdd7cd"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "d3b0bab5cb691f6a6ef6ac2e5474fc67"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "9d21c4b241b65f15e77ae6890fe997f4"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "66e9f81cddd38e5d9b591dbfbcd8a6c3"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "1913de661b0ee51dc7a8a7c8112ccd72"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "2e568326d24c788f997ee8312c32cd16"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "c7a248afa8b3124cc32d52f6eb8d3ff5"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "33e58da0b983e84754fcb917a33185f5"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "ec8c6daef9c56f65b57f44f30e0f6a59"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "52481eefbf66c6c5372862d31aefe3fa"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "a3a1521de94c3db764b91cd15ca50bd6"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "ca52934f95687c1e10b8cd38b6b364c8"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "94ce4c7fb80761ab36ab75f8a823541f"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "e363e9f4cabb598b29883eb1d490b3b7"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "d045be68ef6dfd4d279a969ac2c5f618"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "5c410292339784756eb4e422e64c7d0b"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "07b53c4a9551b0bacad1081f9d5f868b"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "2d0e9e1fdea2344e67097442c565fe52"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "028b58613d1e1533be8942497a50ecdc"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "191cf56a4d25c022ec61d0e99d332be7"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "346ccfd322d42b52e042f5b82f561585"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "3ef468c488e5ae09e5dad6d59d3436d8"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "ced1e16c78fc17a28c50c76a7b7490f4"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "9a5fdeb722d7b5c98c05a1b5341dc6ae"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "8879d951ccca17ef2c1ce8b8543237a5"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "c8331207b29ef1d464b637038dbd8770"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "01bc97a2af653a348a3e8fe17961eeaa"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "371b271f3e7905c6787c8b4c6aaf045d"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "ade8dd2f1d64ba54fc10d1c7977e0ddb"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "995f6d02b3caa26b67e5861ca553a69b"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "e29f191a12895192bba33edaef6b609d"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "9d7f70f8d11303fc6b9f8c92fc975a42"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "0cd7d8ba562a8b472fe4aa047610d6de"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "87580eaf5a54af8dd7f506d13aa8722b"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "29bded555903be60418fc6a45580f10b"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "4493aa52e35d97f4185fc8b825615322"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "7f64a5eadcafacbd14c7076879a68a0c"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "3f1bc5b2a2e1062a356669831978dffc"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "82203738bba28b4b199031b9726c9473"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "9e0827d84456a235fa0f2f1b0844f456"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "015b6d162fce4f07ea181fa7a98652b1"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "31d88b9e276b64755771e7bfe6dee6a2"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "4d4ef7736cd52bdae43faf9794f93c3a"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "94066e0adeebbe231106b6d2b3c5a8bd"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "7cce466e763a953dc1116dc5c453987f"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "b2c41d0e4113586d99dc0e3c5f64bf52"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "4a8a458ba1d02a535c20c210aa54e839"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "1dd51a8ac4742aacfed79f641f99f8f3"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "424bcffec9c0e1049c22157888b43ce0"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "6dc2a4b1e4f6992e308741b8bc031715"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "07ab0a3399e626bd79984b3780830ca9"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "c6a1e750308036a5d80d489338b8fb61"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "f791f84c69162c54fd2c577d4f63f1a0"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "6f7fb54f20ca85d40cf6b4918778cc9c"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "1d9205aeab10f3dcecfa57c412f00732"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "3afc50e17243680a7eccdbe83aa3b179"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "a46d4cae22cdb883f6328a1f74ed71a6"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "77fda4423f26599ba34747d22cafa467"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "ae6dd3aeba7a115bbb0fffd8af38c355"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "11970363245fbfed74372bd23549b3b2"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "48ce9bf62878d94420b0fb0241bed663"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "b0ef5f375627d25315ec681f6083fe02"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "d070e94e4e5a70b8e6c32f2dfa925f8c"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "a65e5d331bcc6580bd4fc357411f58c2"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "c32009842c3b20056db84b54c51d0e97"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "fbc9c6fee04a91036b2d7fab6a64ae34"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "4f138541f2c95c3393145763a6548626"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "646efa89fb20d3cbaa0c2e9f5b94bbb6"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "daa38172dcd70e1fc1a621bd21f0af61"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "ac5868d8448c4ed7e663968cd072e34b"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "d7e0e8e6d267a44db20bcdefe7a766ed"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "4eb0f358197fe8dac669d91beb106bd1"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "b8151bac532a7ee55ca46df6310ce188"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "d11149abb118184b5c2e4f627e4e0b8a"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "392c08bb38390e184e44751b420616db"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "566edd9a0c695906e21ad9a2ac5ac12c"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "a56c41e467f478521b599c9adecdfcd0"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "d3e2cfdaa5ab18403720439b8aafe50c"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "4e352d8b5b1b9eda2c4588718c75357b"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "c44f98c06522b1abb24811f6b2c92cbe"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "5d309b706da2ea52d35d117f519c6fe1"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "0e723b01a7663924bacdef6bd855783d"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "4256fae9f115b71d43125b5e0ebec8d4"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "dbfa4504f740fa489d26946b8ab86a48"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "6b7d0172479f4b10e95704ab330c4b53"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "58ea85b8988dc45f1ee294839c04509f"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "964cc98ef773c55a6ec10c34bb24b286"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "89d9b3f9401f5d21386d5f8534f0deb2"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "00cec4f34f05c9d7c71cb7cc2338c637"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "1911065e7b121c77cb3e073c44d79f4a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "bbb9ed4ff0dc25bc0110eac189e6571f"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "ed98ed4482a0fcaf8a53bc8eb30d42ac"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "18116f71ffc5734ab8c0525e1758ad30"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "b4b74cd686534ce1a8cfa652d6a02103"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "ae3bde10dedff6016b06ed398755399d"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "9f1299de43e7e1bdcf8922f9a36962b0"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "39c79faa0c7563946ed661dd1256243e"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "7a7a4c07a8e3cc1fbc15e0d09176bf10"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "252b4ce43406b7b1a60c8f1798dec275"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "008e48b20fdbda0ea9f037b8d39a4cfb"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "a30598cab1c27e7519855124444837e6"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "a172fa6c4242514410ae77d0baf4e8a5"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "fee14006978303f8ec21e87270c96e5a"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "1e3151420a00430eb1758f598dd38e13"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "02041e94865762e0cfd422b32960775d"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "cd0d121b6da61883ef6d5d3764daf827"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "92e660c19da56468f5cdead80bd629ea"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "fb5dc71d82e460dfe9f18edaf731bd36"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "a7017e939130f0c12bb1574ddd22e941"
  },
  {
    "url": "404.html",
    "revision": "4248f1b5c32c9f8e5d91a41c561eff44"
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
    "url": "assets/img/create-image-ec2.8b5ede7a.png",
    "revision": "8b5ede7a87d660433e1301892da28295"
  },
  {
    "url": "assets/img/create-loadbalancer.1f352060.png",
    "revision": "1f35206006fd0dcf30a50b21582a08ae"
  },
  {
    "url": "assets/img/create-target-group.9b7b3385.png",
    "revision": "9b7b33854370a1b37ca92c0b713ba640"
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
    "url": "assets/img/loadbalancer-port-80.540ede6d.png",
    "revision": "540ede6d9f0353c0a9ce724fbd1494c4"
  },
  {
    "url": "assets/img/loadbalancer-port.9e77b96d.png",
    "revision": "9e77b96d743d9f3c9ce1d39ecb4079a8"
  },
  {
    "url": "assets/img/loadbalancer-result.9c0b7fbd.png",
    "revision": "9c0b7fbdc2ef530fe8ccb450d9051156"
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
    "url": "assets/img/target-group.98f7415d.png",
    "revision": "98f7415d43e154592baea6c7eaffe426"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/1.6333da02.js",
    "revision": "40922d2391982abd638fdd89790e661b"
  },
  {
    "url": "assets/js/10.b10f8350.js",
    "revision": "cc56137cc16f06adc48caa0758f9c788"
  },
  {
    "url": "assets/js/100.a87e7ac6.js",
    "revision": "ffcf6ab67982fd5f6975ad9f0a7ab1ee"
  },
  {
    "url": "assets/js/101.e7450a60.js",
    "revision": "b616a7bbfbb65ccd44ee3bccfc2adf8d"
  },
  {
    "url": "assets/js/102.7b06344f.js",
    "revision": "e9121680007f5ee9223356b51d1a4457"
  },
  {
    "url": "assets/js/103.196a76c3.js",
    "revision": "82afa04e57bf5b285e6e3298df453004"
  },
  {
    "url": "assets/js/104.408cceee.js",
    "revision": "334f9dc65a182620edcac72b4e30d307"
  },
  {
    "url": "assets/js/105.4ab50b21.js",
    "revision": "c78f2919dbf11055b11d747969203865"
  },
  {
    "url": "assets/js/106.5b3ea1e3.js",
    "revision": "62d745730af305d4ce61350736bae3b8"
  },
  {
    "url": "assets/js/107.9be2bd29.js",
    "revision": "bb7c3dc72f20747dec5d5acff1a05f77"
  },
  {
    "url": "assets/js/108.7a9528da.js",
    "revision": "31ca854faba2689178f9b3ab22209cf8"
  },
  {
    "url": "assets/js/109.fab66bc7.js",
    "revision": "c8476c22cc275d2397d6e4d7069d8b22"
  },
  {
    "url": "assets/js/11.5f99e3ab.js",
    "revision": "472c252202da25222d0f06f183abe821"
  },
  {
    "url": "assets/js/110.4abcf887.js",
    "revision": "c8cb0401ffbc9c277bb84ec0daa0ddb8"
  },
  {
    "url": "assets/js/111.53085fb9.js",
    "revision": "b14f32aeb5e2c399dc132abe5aebb64c"
  },
  {
    "url": "assets/js/112.80346222.js",
    "revision": "e279332349e48d1e238bd0234b3f3c5b"
  },
  {
    "url": "assets/js/113.63e1c080.js",
    "revision": "c11b7a0d441916535f21a17caf9a27b5"
  },
  {
    "url": "assets/js/114.82631df0.js",
    "revision": "1ac08711e3945c51eb83ca5b1c19e1fc"
  },
  {
    "url": "assets/js/115.85bbe48b.js",
    "revision": "47d14f9b4d9cd780a53aa7edbfe378d3"
  },
  {
    "url": "assets/js/116.2132da54.js",
    "revision": "350e00c0c51bed1a3efcfc7e87191eab"
  },
  {
    "url": "assets/js/117.8dfe6ce6.js",
    "revision": "99d4e4b8163af3539c925159d44987b2"
  },
  {
    "url": "assets/js/118.ac76f5cd.js",
    "revision": "21b00d80a25c887f676576c9c20df952"
  },
  {
    "url": "assets/js/119.4d2180d7.js",
    "revision": "e016f495b32b2d7148b5532d47096ab0"
  },
  {
    "url": "assets/js/12.92d20551.js",
    "revision": "f996c11e897d63ac16d33cc99d7f4549"
  },
  {
    "url": "assets/js/120.51d6d928.js",
    "revision": "fd7bd609f4b1239d0b34d166f8730df3"
  },
  {
    "url": "assets/js/121.4c37fc63.js",
    "revision": "4ff37d4c1b5f34ad8e28049192591d0a"
  },
  {
    "url": "assets/js/122.b831494f.js",
    "revision": "4e4a0ff9e2c0f7c62129ecefc7090ccb"
  },
  {
    "url": "assets/js/123.362a728a.js",
    "revision": "e28e3e78f9a754f160702a62ed3805ed"
  },
  {
    "url": "assets/js/124.e8d9b2be.js",
    "revision": "08936e63e9953197f1017580b869b519"
  },
  {
    "url": "assets/js/125.e19dfae1.js",
    "revision": "88d9229b518bf29bcaed4c961cc4db36"
  },
  {
    "url": "assets/js/126.5cf869dd.js",
    "revision": "ece67ff153c97f9109718f72ac55ebf7"
  },
  {
    "url": "assets/js/127.baa7adc6.js",
    "revision": "31a1910e23f4949a586c349e321b19e4"
  },
  {
    "url": "assets/js/128.abf1e69c.js",
    "revision": "622c6e072633234fd7243beb315a54cb"
  },
  {
    "url": "assets/js/129.2fcaca27.js",
    "revision": "2d67eb4e3970877b395ff18a290e9734"
  },
  {
    "url": "assets/js/13.58deac7c.js",
    "revision": "3354e6101843362880dd733c46ed1d98"
  },
  {
    "url": "assets/js/130.4d953cb1.js",
    "revision": "7086663324ec701032e667f713329670"
  },
  {
    "url": "assets/js/131.eb5ceba8.js",
    "revision": "36d476c8d972449a2df9d1afa5abb8cf"
  },
  {
    "url": "assets/js/132.87476b87.js",
    "revision": "96fb6488dbc22fc99e0131eabfc278e4"
  },
  {
    "url": "assets/js/133.4218100e.js",
    "revision": "e1b4e971ca557fc7b5015b93f8f3f7b3"
  },
  {
    "url": "assets/js/134.4a6026a8.js",
    "revision": "7f258eb5e42c5954f6d7d33253ca2e84"
  },
  {
    "url": "assets/js/135.94022bd2.js",
    "revision": "7d9384828d9e55eef82998118a51f592"
  },
  {
    "url": "assets/js/136.75bf3c8a.js",
    "revision": "6df1a89b6e6638ad961572f6cdd931ab"
  },
  {
    "url": "assets/js/137.533f861c.js",
    "revision": "eeda14b97132d3d6d5e5363f6e38db11"
  },
  {
    "url": "assets/js/138.04d3e1c3.js",
    "revision": "9f5b047ab27c4561559f8b7bb521a756"
  },
  {
    "url": "assets/js/139.9b93d79e.js",
    "revision": "d0039d782eebef78a921647528210288"
  },
  {
    "url": "assets/js/14.387ea2d2.js",
    "revision": "c41646ca0c23331ea92575a734e185de"
  },
  {
    "url": "assets/js/140.4a34784c.js",
    "revision": "1fbbb3bedcaabe9e27d0a439f9fb8249"
  },
  {
    "url": "assets/js/141.3dff81ba.js",
    "revision": "14b88fd4b7e005f6455ed9bf2eaa5ebf"
  },
  {
    "url": "assets/js/142.3b704838.js",
    "revision": "69523e2403707a926db1833cd5fb8729"
  },
  {
    "url": "assets/js/143.e4d7b5ba.js",
    "revision": "db3f23714c3d7e0f0c39ab2fced0c5d4"
  },
  {
    "url": "assets/js/144.808174f2.js",
    "revision": "ce99668ea2149fec2706a9c5fb553c29"
  },
  {
    "url": "assets/js/145.ce94fddd.js",
    "revision": "3cc6d179ba15b578d3c56e40ad731746"
  },
  {
    "url": "assets/js/146.84730d67.js",
    "revision": "4a8bb58349ff82b181a5efcd14cf0a55"
  },
  {
    "url": "assets/js/147.a007094b.js",
    "revision": "fa717a96447ee36c0f13f5ca6924bf9c"
  },
  {
    "url": "assets/js/148.7913f323.js",
    "revision": "ae647ee6178999556d8158e98172514d"
  },
  {
    "url": "assets/js/149.2fdde0c7.js",
    "revision": "47f9b8f53d05bfc01ec73077beff1528"
  },
  {
    "url": "assets/js/15.7a20a62a.js",
    "revision": "4644fe6eb02bc4160aec73492591d63f"
  },
  {
    "url": "assets/js/150.248e95bf.js",
    "revision": "8fd56f4294c4a70f5110b9ff5b6016a7"
  },
  {
    "url": "assets/js/151.da9e9d3c.js",
    "revision": "dbcb719424355b6ec6ce40b9c84bb337"
  },
  {
    "url": "assets/js/152.a27f81ba.js",
    "revision": "f0207fd4f486a94c12f778536b5d95e2"
  },
  {
    "url": "assets/js/153.484c34c2.js",
    "revision": "ffb9568b005752f5fa53e36dcf48b0d0"
  },
  {
    "url": "assets/js/154.c1e352e5.js",
    "revision": "8bdd5391a6a8f4aa9217feeb475eedb8"
  },
  {
    "url": "assets/js/155.9554d6ea.js",
    "revision": "b87c1af7ed228aef0d28d1bf468a5b2a"
  },
  {
    "url": "assets/js/156.90acc1e9.js",
    "revision": "ea3d0a5f63a1ef7b706642f992a76d0a"
  },
  {
    "url": "assets/js/157.cce06c58.js",
    "revision": "41b877b80cd4aff7afdf1a9ecc55cc19"
  },
  {
    "url": "assets/js/158.b3e0f350.js",
    "revision": "7e665d527d78db3f040e1a593a8583a4"
  },
  {
    "url": "assets/js/159.c757bfff.js",
    "revision": "2c101a6b3d9af45beb289d5da2a6c427"
  },
  {
    "url": "assets/js/16.7ebccac5.js",
    "revision": "ab4a4c8cb0dd667bd2a8172abffbdf69"
  },
  {
    "url": "assets/js/160.13538626.js",
    "revision": "48214a2605b86f680cc7b2bf1b3177b2"
  },
  {
    "url": "assets/js/161.9a25a9fb.js",
    "revision": "730262f57616f40cab5e24b69800ad17"
  },
  {
    "url": "assets/js/162.edd5e302.js",
    "revision": "ebb29fb936b64fd02213413d7051bcbc"
  },
  {
    "url": "assets/js/163.06525c65.js",
    "revision": "6348b1ddd29c43b71fce0f2991b7baff"
  },
  {
    "url": "assets/js/164.6a3e09d1.js",
    "revision": "ec0063de75c33af244423f05bc27e02d"
  },
  {
    "url": "assets/js/165.c7e09fd6.js",
    "revision": "1d398cfec793c5d52a8cfe27909ab14a"
  },
  {
    "url": "assets/js/166.d066c391.js",
    "revision": "8657c5d4c53e90206dad81d7becf3869"
  },
  {
    "url": "assets/js/167.e3f29c37.js",
    "revision": "8ccbf716aba93993cb4287f034546fe5"
  },
  {
    "url": "assets/js/168.b8786157.js",
    "revision": "d3fd09866f2318126082d51882202f07"
  },
  {
    "url": "assets/js/169.9c5c13a7.js",
    "revision": "88a5543acb737eb35a82f2b155e6bbb3"
  },
  {
    "url": "assets/js/17.1d31b3fd.js",
    "revision": "65686780d85c07e8345cc41d726d58a1"
  },
  {
    "url": "assets/js/170.91cbb6dc.js",
    "revision": "c1edf1cccce6d565d59ab22702d74720"
  },
  {
    "url": "assets/js/171.e2b06adc.js",
    "revision": "708c68b98a96e1d5bdce31799b63ce69"
  },
  {
    "url": "assets/js/172.7f9c2a87.js",
    "revision": "ff4f6aebac1c660995b5aee40f9070c1"
  },
  {
    "url": "assets/js/173.94c40d72.js",
    "revision": "00c5a215e8be2d3ea7b649b8da20a6a5"
  },
  {
    "url": "assets/js/174.4c3a9716.js",
    "revision": "14b82d96f6667e315280b5f0d03b9dde"
  },
  {
    "url": "assets/js/175.9103c697.js",
    "revision": "3832dfb1e01ff2c1d1bc9c611be78be1"
  },
  {
    "url": "assets/js/176.3fdc86e7.js",
    "revision": "c1dc508735a6b34a89dd03c7b5266270"
  },
  {
    "url": "assets/js/177.ae7e4e5e.js",
    "revision": "9e10b9398a2b9c90c3f220a8ae0bb3af"
  },
  {
    "url": "assets/js/178.d8e08833.js",
    "revision": "98792051b874306f9996525f699b41ce"
  },
  {
    "url": "assets/js/179.f8013924.js",
    "revision": "b0f9357a83285502a9edd5b1e8f7c47d"
  },
  {
    "url": "assets/js/18.d563b820.js",
    "revision": "4d17c18523d57106ec9d9fbe4e96567e"
  },
  {
    "url": "assets/js/180.bc50d980.js",
    "revision": "c79d602a71b0658d7c644c4ebf974f26"
  },
  {
    "url": "assets/js/181.1ac4acf1.js",
    "revision": "91491ceb7175e5b2630470219f22103f"
  },
  {
    "url": "assets/js/182.2decac74.js",
    "revision": "d33cf3fb18987aaba7e6f30e0885087e"
  },
  {
    "url": "assets/js/183.752f1395.js",
    "revision": "5e5f85b5ff1f3f2a8bfe14bd5b194f6e"
  },
  {
    "url": "assets/js/184.86bb2296.js",
    "revision": "60e533cc0f1328493e0076f637e5a4cd"
  },
  {
    "url": "assets/js/185.82c995fd.js",
    "revision": "7cbec5d92f8fca3a9c55f17a2d966145"
  },
  {
    "url": "assets/js/186.e0ea1791.js",
    "revision": "b93b6ac5dbc2d45282c7a676e220c8b1"
  },
  {
    "url": "assets/js/187.a54054e1.js",
    "revision": "78841ce64e1cd9203dc34b32199e51ae"
  },
  {
    "url": "assets/js/188.e236a9c6.js",
    "revision": "afe6931f47b0b2d8a86cf97ec42c278a"
  },
  {
    "url": "assets/js/189.fe718905.js",
    "revision": "c66d92e88cebc816abd47c4992eed879"
  },
  {
    "url": "assets/js/19.02cd5a75.js",
    "revision": "86ab2bc3f5476bb0e5e2e5577c81d65a"
  },
  {
    "url": "assets/js/190.5109f544.js",
    "revision": "a25b7df3bf4a8ba4b4ffc566eaea79af"
  },
  {
    "url": "assets/js/191.327e26ef.js",
    "revision": "5616d2cc52356a557cf8658d774c805a"
  },
  {
    "url": "assets/js/192.239bdea0.js",
    "revision": "96fbfee174b57ec581ff0b1419b54453"
  },
  {
    "url": "assets/js/193.08265df7.js",
    "revision": "0721acb44241f87eeeb829718a890bd0"
  },
  {
    "url": "assets/js/194.672bc0a9.js",
    "revision": "7d3fa32c05d6225f9667098d1b10cda8"
  },
  {
    "url": "assets/js/195.8e11dee4.js",
    "revision": "86a6454b266fcde695d91f5f051bc1ff"
  },
  {
    "url": "assets/js/196.d583ff6f.js",
    "revision": "1c4409eec5ee25d1a657febebc5296e6"
  },
  {
    "url": "assets/js/197.f8e0e65f.js",
    "revision": "8ac067ee944eb62b12d79241cf580cff"
  },
  {
    "url": "assets/js/198.353482cf.js",
    "revision": "c7ff229f7b62b334ccaefe794a1eeed6"
  },
  {
    "url": "assets/js/199.32e48ac4.js",
    "revision": "9525e618e399fb5e18f347123a44433e"
  },
  {
    "url": "assets/js/2.e209e37b.js",
    "revision": "170368eb4e43282510d0913e39504261"
  },
  {
    "url": "assets/js/20.4b58a7e8.js",
    "revision": "a29754501b447a3053f011f3910a3911"
  },
  {
    "url": "assets/js/200.81f5804c.js",
    "revision": "a9ba81e3dfd463dbea3c9010f02ee3b6"
  },
  {
    "url": "assets/js/201.11423baf.js",
    "revision": "abe61d931c264593d4f516b3037e9622"
  },
  {
    "url": "assets/js/202.17ef3ec7.js",
    "revision": "bf5e093418018d88edeedc018b5a06ed"
  },
  {
    "url": "assets/js/203.5cb677d1.js",
    "revision": "afccd27e614213fc3b81ca3b25f8868d"
  },
  {
    "url": "assets/js/204.fd9d465b.js",
    "revision": "b1c12484c063f82f59fdbb1c135c6382"
  },
  {
    "url": "assets/js/205.39ddd1ff.js",
    "revision": "26af299c120b1ebe8b1dacacba9cbcc8"
  },
  {
    "url": "assets/js/206.83113623.js",
    "revision": "ab095aeac8d2b82b057f5691c9641292"
  },
  {
    "url": "assets/js/207.7ef3d3e1.js",
    "revision": "ff147591ff577b8f39ff2ea245fc316a"
  },
  {
    "url": "assets/js/208.48ea3001.js",
    "revision": "80749f5945cd5781df711d6557a5ded4"
  },
  {
    "url": "assets/js/209.ed0686c8.js",
    "revision": "24f582c74130fe3f2520847a5e082669"
  },
  {
    "url": "assets/js/21.4d00e250.js",
    "revision": "75e60530b1d9e0a84a9a6e3daf352174"
  },
  {
    "url": "assets/js/210.9839a956.js",
    "revision": "64863a417ba548bcf6a935a87184d74b"
  },
  {
    "url": "assets/js/211.4f943452.js",
    "revision": "7587415d808f154bfe82837c513808ea"
  },
  {
    "url": "assets/js/212.2d726a73.js",
    "revision": "f368c2783325e31dd6ebea04b193a674"
  },
  {
    "url": "assets/js/213.a05c2326.js",
    "revision": "6cebf1a7a3c3480d672b456820d69b2a"
  },
  {
    "url": "assets/js/214.90f15d3b.js",
    "revision": "a3b329777d40ee3773f91c2b9710b233"
  },
  {
    "url": "assets/js/215.df864549.js",
    "revision": "105971e58328cba7324169b48dc8047a"
  },
  {
    "url": "assets/js/216.086acacc.js",
    "revision": "f630fc97033e21a9884512c02c0f0b7e"
  },
  {
    "url": "assets/js/217.3cec8f02.js",
    "revision": "4cab339ed43afc4a0b32e75c2eef3045"
  },
  {
    "url": "assets/js/218.399d037f.js",
    "revision": "ae9ac66a4e200ee6bf039dad38f13658"
  },
  {
    "url": "assets/js/219.feb83c50.js",
    "revision": "11e5729e59953555e674e69c1666020d"
  },
  {
    "url": "assets/js/22.6be74b7c.js",
    "revision": "f0c75c7de474dd2b075b205b8c0186ed"
  },
  {
    "url": "assets/js/220.7e3afaac.js",
    "revision": "e4d635442277617dd4c4ea2b15753b34"
  },
  {
    "url": "assets/js/221.15a726e6.js",
    "revision": "b93b107771b1e07d7b19c9402d3c7dbd"
  },
  {
    "url": "assets/js/222.3a3cedda.js",
    "revision": "5bc2c0719c5b79596d63ce8b01835fc6"
  },
  {
    "url": "assets/js/223.b8e9c8c1.js",
    "revision": "2c283e20fb615562cef4ae79f9ab57b7"
  },
  {
    "url": "assets/js/224.b096f8d9.js",
    "revision": "786fee6e134454cb4b4e245232161fbd"
  },
  {
    "url": "assets/js/225.8cab1080.js",
    "revision": "289c8a292034a743cd42187c4d1fd200"
  },
  {
    "url": "assets/js/226.dd64f760.js",
    "revision": "06857db333f1c659401c1f0a98675220"
  },
  {
    "url": "assets/js/227.f32dce49.js",
    "revision": "228986c8eca61de7b791f02bd75d8778"
  },
  {
    "url": "assets/js/228.9f80d2a0.js",
    "revision": "0fb1802b1fa33a33c242a22d5c0cc3f0"
  },
  {
    "url": "assets/js/229.3c5040f1.js",
    "revision": "fe3b7e6ed25bdc60b19dcbab1511f8ff"
  },
  {
    "url": "assets/js/23.5f31bcd4.js",
    "revision": "67c89f3c6500466117451a8d054feed1"
  },
  {
    "url": "assets/js/230.f4e3a24e.js",
    "revision": "52cb7f96df005cd916335dff664f3d91"
  },
  {
    "url": "assets/js/231.27c0d344.js",
    "revision": "77978e6931c174bb88dde64934c011c9"
  },
  {
    "url": "assets/js/232.d13adae3.js",
    "revision": "f4fd6631996dc9ac75b0f99c925e6974"
  },
  {
    "url": "assets/js/233.acf88670.js",
    "revision": "9844e6ea1d7bfd0775cc526f487d8874"
  },
  {
    "url": "assets/js/234.fffd3331.js",
    "revision": "e39ec69b53337f8e8e31e5ead02a3db4"
  },
  {
    "url": "assets/js/235.562830cb.js",
    "revision": "009c52272dd869c20048c1f9bcbe9792"
  },
  {
    "url": "assets/js/236.3c7f6571.js",
    "revision": "ba84794788644a8fe3c5a1f02d223d48"
  },
  {
    "url": "assets/js/237.30ce3b6d.js",
    "revision": "942c02c96d8685edd29addcd3bacfea7"
  },
  {
    "url": "assets/js/238.ba1e5e16.js",
    "revision": "9c3c54702a6b57e7c92a85ab38ca4f9c"
  },
  {
    "url": "assets/js/239.4bfabf7a.js",
    "revision": "d6e0d90bd88e9cb93a6d4c0d356b61e3"
  },
  {
    "url": "assets/js/24.62c6af5e.js",
    "revision": "7fcd67aaf5d446544f51e68bfb9a0cf6"
  },
  {
    "url": "assets/js/240.99e577e1.js",
    "revision": "00576bfcf9b3af1a0f27e63f4927a178"
  },
  {
    "url": "assets/js/241.c72e1482.js",
    "revision": "8664dbce8385b52f9f3de30db1fa203b"
  },
  {
    "url": "assets/js/242.d0c716be.js",
    "revision": "6e32c8824358017fe13c3b90080b7935"
  },
  {
    "url": "assets/js/243.b0320cdc.js",
    "revision": "97b8ca75336124a615c75b3241ac2d41"
  },
  {
    "url": "assets/js/244.dd434a69.js",
    "revision": "dacaf40a8ca4616410ad96c49147b535"
  },
  {
    "url": "assets/js/245.ff8a83a5.js",
    "revision": "9d58e93213d5777c37ea7fcfeabc360a"
  },
  {
    "url": "assets/js/246.c26bea6b.js",
    "revision": "54eca4a48b92b0bd5fb5e53154da7e1d"
  },
  {
    "url": "assets/js/247.d2c5127f.js",
    "revision": "111dc79538fb9aecb3d569edecc10718"
  },
  {
    "url": "assets/js/248.7a3637e5.js",
    "revision": "cad373f96b7fa6ded04be50392c6c956"
  },
  {
    "url": "assets/js/249.6e991fc2.js",
    "revision": "b1d522dee926987b891be1e2fd2f8e23"
  },
  {
    "url": "assets/js/25.79e4c073.js",
    "revision": "77938acf727a50660250289a50dd6ac0"
  },
  {
    "url": "assets/js/250.eb91ad43.js",
    "revision": "c07f579caa8431e2626f7c981574ffd6"
  },
  {
    "url": "assets/js/251.a02fe621.js",
    "revision": "c8085e769109e272e0f8ab6686a42bae"
  },
  {
    "url": "assets/js/252.376aab66.js",
    "revision": "55c98b7cb430dc6694f4224d63dd8dae"
  },
  {
    "url": "assets/js/253.a927cf86.js",
    "revision": "f9011207609c5a0819e49ed39ff68c9a"
  },
  {
    "url": "assets/js/254.06dc6c05.js",
    "revision": "e02a5f14c79457dee95de084e9910469"
  },
  {
    "url": "assets/js/255.8bc57f78.js",
    "revision": "985cb17fbca1d88ddf210ef8e14a9694"
  },
  {
    "url": "assets/js/256.5d2431bf.js",
    "revision": "11f67c4b0368c18a3a9c45f8c97e5159"
  },
  {
    "url": "assets/js/257.b6775447.js",
    "revision": "7897e01279c11e3c774eed57cfbcd42e"
  },
  {
    "url": "assets/js/258.1e348b16.js",
    "revision": "da8593e11f80d7c67da1780f34655b01"
  },
  {
    "url": "assets/js/259.0c57a747.js",
    "revision": "f00b24dcece391bd14d500cca0875c82"
  },
  {
    "url": "assets/js/26.fe5c140a.js",
    "revision": "16b01ecdecd9f9d05de63d5aa45fc3db"
  },
  {
    "url": "assets/js/260.5b40703d.js",
    "revision": "be7654ac879cadfd65fc6c0d500863b0"
  },
  {
    "url": "assets/js/261.ece8596b.js",
    "revision": "db46b20163f6d7e7725f4ea825e9f3f3"
  },
  {
    "url": "assets/js/262.be5a08e7.js",
    "revision": "9a6d94c0a2a26306f34d6801e64dfd68"
  },
  {
    "url": "assets/js/263.0e0f990f.js",
    "revision": "e2570d71794fa156abbe9a2c7d25a94a"
  },
  {
    "url": "assets/js/264.afa5e8aa.js",
    "revision": "05f1d19394ad574527f2cad72bb84d1c"
  },
  {
    "url": "assets/js/265.ed20027d.js",
    "revision": "fb648b8d82f03e9a5325eefef80594e6"
  },
  {
    "url": "assets/js/266.c04ea822.js",
    "revision": "64d03e49ef4c0dc1773feb7c5a318c25"
  },
  {
    "url": "assets/js/267.7b885e2b.js",
    "revision": "13f40d9dd1fb26c591276cbfa9a147fd"
  },
  {
    "url": "assets/js/268.065be03e.js",
    "revision": "de51ce37f67da9083d89794472a2663d"
  },
  {
    "url": "assets/js/269.1da1b40d.js",
    "revision": "139d86857e1be5c0bce44e3361eb7234"
  },
  {
    "url": "assets/js/27.48cfe5a7.js",
    "revision": "3bff1c1a1d5a7ae7376e8f98479fd45d"
  },
  {
    "url": "assets/js/270.e41db14d.js",
    "revision": "4ce23a942bf4869790d8ac0fc491c3a4"
  },
  {
    "url": "assets/js/271.91550b42.js",
    "revision": "3425c05289413672ad71a37b7dce8e03"
  },
  {
    "url": "assets/js/272.44fea2d0.js",
    "revision": "506ce438a0670de35b54f93bd5a3cd0d"
  },
  {
    "url": "assets/js/273.366031fb.js",
    "revision": "9583b8ab4f0458aff31175f4d377ef61"
  },
  {
    "url": "assets/js/274.fe1b0c93.js",
    "revision": "00c72268519e149289fe395401843232"
  },
  {
    "url": "assets/js/275.ee80df36.js",
    "revision": "50ab642643c06696c79fd8bad1695ead"
  },
  {
    "url": "assets/js/276.4f1d1544.js",
    "revision": "98524cf1b920b44c27fe44ba72fe8711"
  },
  {
    "url": "assets/js/277.d0f01ff4.js",
    "revision": "daa1839973218d9913f4f552292f8aa7"
  },
  {
    "url": "assets/js/278.32c586a9.js",
    "revision": "25e976726774b750fbd972a09b09e828"
  },
  {
    "url": "assets/js/279.ab5444f5.js",
    "revision": "3f3b7dd30cbf8237ca8fb33efb1bb8ec"
  },
  {
    "url": "assets/js/28.6fa4b86e.js",
    "revision": "e0166ae9f58cdda87f68e5c6e6b84071"
  },
  {
    "url": "assets/js/280.e90a7c68.js",
    "revision": "2f8ab24f1cdb0de90ae6a0e530dce0f1"
  },
  {
    "url": "assets/js/281.1692a74c.js",
    "revision": "f2baaee0b674eb675a7f331de6d68490"
  },
  {
    "url": "assets/js/282.1729fdd6.js",
    "revision": "b97c62ea807c21ecd8bcdd666d6f7043"
  },
  {
    "url": "assets/js/283.c3aeec1e.js",
    "revision": "df4bc29a948dc615277ea15d2539f680"
  },
  {
    "url": "assets/js/284.5f9ded22.js",
    "revision": "942e6822215119bc79c6561b1513924e"
  },
  {
    "url": "assets/js/285.62a5ef8e.js",
    "revision": "09807f5b58de073617f0fc590e5faddf"
  },
  {
    "url": "assets/js/286.18e888b3.js",
    "revision": "d0f9c102890401b4793bcf8db608dfe6"
  },
  {
    "url": "assets/js/287.7e278e35.js",
    "revision": "43bb22bd2a66772a947d66c1201f6342"
  },
  {
    "url": "assets/js/288.320ca463.js",
    "revision": "39a9bff9502ad78b99266fdb70d09fd0"
  },
  {
    "url": "assets/js/289.7c89677a.js",
    "revision": "9e5a75e9709333c7b8a3311a6260a68e"
  },
  {
    "url": "assets/js/29.6b6a7f20.js",
    "revision": "5a128e42053516a89cc3903904bc3d51"
  },
  {
    "url": "assets/js/290.71d9698a.js",
    "revision": "59bb21ade643648a2045529bbd624ebb"
  },
  {
    "url": "assets/js/291.4a53c2c5.js",
    "revision": "efc2c835cea8f4d71a87e767d643bfa2"
  },
  {
    "url": "assets/js/292.eb60aab5.js",
    "revision": "f0693a6a542ad20001752e35a7eeafb4"
  },
  {
    "url": "assets/js/293.63ad2c1a.js",
    "revision": "91b603f9c24472e05b67f28e6a44c99b"
  },
  {
    "url": "assets/js/294.f2d50be4.js",
    "revision": "189057670a7e6e5ab233302c30f55d58"
  },
  {
    "url": "assets/js/295.4fe7b660.js",
    "revision": "c5e8482862c50bad30c16c14f936c37a"
  },
  {
    "url": "assets/js/296.e4416d78.js",
    "revision": "ac614a28530ad639d60e77c1a30f5b4f"
  },
  {
    "url": "assets/js/297.192bb1ed.js",
    "revision": "4bf5d939e74dd82020e403f2043e44af"
  },
  {
    "url": "assets/js/298.6d5ece8c.js",
    "revision": "3a7796ae9c850975475d5661905454ef"
  },
  {
    "url": "assets/js/299.ba82fbbf.js",
    "revision": "e66847d5e7a36a224195eef73c7e995a"
  },
  {
    "url": "assets/js/3.a52f58e0.js",
    "revision": "91c282d620350538c59e700c928192c2"
  },
  {
    "url": "assets/js/30.b80b2570.js",
    "revision": "31a86acced7908e7deaf85ed138069a5"
  },
  {
    "url": "assets/js/300.0596e903.js",
    "revision": "660b3ecf616321c9331ad0690fcb3e19"
  },
  {
    "url": "assets/js/301.cdc4e315.js",
    "revision": "6f7e720f4bae3e183f21c20d2b1952e8"
  },
  {
    "url": "assets/js/302.dac01a78.js",
    "revision": "f2a21fcc0efae55400077ca9d5116bc2"
  },
  {
    "url": "assets/js/303.f8f189e0.js",
    "revision": "e7ef2ca9d57adb7b34d82c6a8e602a68"
  },
  {
    "url": "assets/js/304.479685e9.js",
    "revision": "7b49c71bed33d048749abd650f243d23"
  },
  {
    "url": "assets/js/305.675461c3.js",
    "revision": "bedfb7ddaea5ddb5b57bf0bb31f8b31c"
  },
  {
    "url": "assets/js/306.1eb7c8a0.js",
    "revision": "f5a7a51d27763b6e84468175d29eecee"
  },
  {
    "url": "assets/js/307.7c4433e3.js",
    "revision": "f62edc3d4464b9924776e3701ef71af5"
  },
  {
    "url": "assets/js/308.1f55c3ec.js",
    "revision": "bc6f143b758bac5e7ed7258502e8ab43"
  },
  {
    "url": "assets/js/309.62acfc9b.js",
    "revision": "57b9a29d129b52f8bbe8d62b14bc5943"
  },
  {
    "url": "assets/js/31.e75d51e0.js",
    "revision": "3fc7442d93237624e9819666fb408728"
  },
  {
    "url": "assets/js/310.6e5a1e03.js",
    "revision": "46fe3b10f7cfd5acef3d8544dc854f06"
  },
  {
    "url": "assets/js/311.9bea7991.js",
    "revision": "b0c558a2acf0f7c66a5f63215776164c"
  },
  {
    "url": "assets/js/312.52e83828.js",
    "revision": "9316556a6ded2aafea15840f438c2fcb"
  },
  {
    "url": "assets/js/313.b017122f.js",
    "revision": "f30f4a029ff6631a49ecf93dd2a5a982"
  },
  {
    "url": "assets/js/314.a23557c3.js",
    "revision": "11689d2cb42dc2242918ee8142846559"
  },
  {
    "url": "assets/js/315.4799c811.js",
    "revision": "566f2002e524c38694f1ca08df7e2379"
  },
  {
    "url": "assets/js/316.6405f371.js",
    "revision": "787ea1291a6e1a51467cffbb713b8403"
  },
  {
    "url": "assets/js/317.6201a460.js",
    "revision": "8897ddaac59a3a3236cea7efb5eaf59e"
  },
  {
    "url": "assets/js/318.533c0e7d.js",
    "revision": "64aab792433cc3e582068fce2428be8b"
  },
  {
    "url": "assets/js/319.da3b4425.js",
    "revision": "eec5b59af3fc6b19b5dd2fc1446fa91c"
  },
  {
    "url": "assets/js/32.ceaf2290.js",
    "revision": "c7efe5c9ee99a547d45653f113c77bdc"
  },
  {
    "url": "assets/js/320.252ae683.js",
    "revision": "3289a01140c948c519357fa9e15dbfc0"
  },
  {
    "url": "assets/js/321.bbe708f2.js",
    "revision": "ec31b204b7923dc62404628e66646fe2"
  },
  {
    "url": "assets/js/322.ff881f82.js",
    "revision": "49f0cf5ec436741a14e20db650061729"
  },
  {
    "url": "assets/js/323.7ae3d352.js",
    "revision": "e75b9645e1d0e4f2dafd738b491c507a"
  },
  {
    "url": "assets/js/324.912ead7b.js",
    "revision": "0f7471e72e99a634c26fa2f000925e99"
  },
  {
    "url": "assets/js/325.5a0bb870.js",
    "revision": "c5402b0d8a03625a27a577d53f73e362"
  },
  {
    "url": "assets/js/326.8a12b0bc.js",
    "revision": "974b71894f531880ae76d7935fda35de"
  },
  {
    "url": "assets/js/327.481ec247.js",
    "revision": "7be0dd9057dd729747a7e709e50b72df"
  },
  {
    "url": "assets/js/328.12f44e5e.js",
    "revision": "eb1db18866cad42bae06c3e186d95df3"
  },
  {
    "url": "assets/js/329.181bba2c.js",
    "revision": "dfb4028340a744166ec06bd1af810373"
  },
  {
    "url": "assets/js/33.bd366ad7.js",
    "revision": "9b3b5105793bd22fc6a4781c18c5376d"
  },
  {
    "url": "assets/js/330.5eb3dd54.js",
    "revision": "b5fc934ac48285597b9942fe3d826b06"
  },
  {
    "url": "assets/js/331.f27e3c73.js",
    "revision": "03446f22db0632cdd2d65f7b6d052d92"
  },
  {
    "url": "assets/js/332.258aecbf.js",
    "revision": "39a7c57e3a9ff9b810149c4ae46e2e88"
  },
  {
    "url": "assets/js/333.6532859f.js",
    "revision": "98e9611370b053c73d1c80797de0a52b"
  },
  {
    "url": "assets/js/334.8c32ab0f.js",
    "revision": "9a579bdd4a312e41f85bfe77e0517c70"
  },
  {
    "url": "assets/js/335.a06d7cc6.js",
    "revision": "769129e762afd9215127ee822aff724f"
  },
  {
    "url": "assets/js/336.905742af.js",
    "revision": "9d1c9cf47cc899e806e946805e83d301"
  },
  {
    "url": "assets/js/337.200dae19.js",
    "revision": "bea2f9f860a13e008b45a80128f3decb"
  },
  {
    "url": "assets/js/338.f903db89.js",
    "revision": "c322e3f76974447c4aeb22d3edeae211"
  },
  {
    "url": "assets/js/339.ed376fe0.js",
    "revision": "40d482ff8a92d6e5abaed14ec5af4d30"
  },
  {
    "url": "assets/js/34.43a073dc.js",
    "revision": "fc128f5b36476fb4663632767e324a77"
  },
  {
    "url": "assets/js/340.6eac3ec3.js",
    "revision": "671ff62602a16597c3562bac56133291"
  },
  {
    "url": "assets/js/341.10f68cae.js",
    "revision": "fe65396a14bc6402388e4ffd9f724835"
  },
  {
    "url": "assets/js/342.7e6c4bf7.js",
    "revision": "658ba54181cc01fccce8206d5591cab6"
  },
  {
    "url": "assets/js/343.d422fd1e.js",
    "revision": "04aff391381935f9133f2db1540e61e3"
  },
  {
    "url": "assets/js/344.c6accef7.js",
    "revision": "9a1110722b93db39c9706400a5616de5"
  },
  {
    "url": "assets/js/345.df735b24.js",
    "revision": "49e7ba148bbbc7396107f5ba9792cddc"
  },
  {
    "url": "assets/js/346.2d725b21.js",
    "revision": "16919a5692464c2be39882aeaf85e953"
  },
  {
    "url": "assets/js/347.48ad4e96.js",
    "revision": "05f6fea6d06bee0581aa143eafcc706c"
  },
  {
    "url": "assets/js/348.13ef04bc.js",
    "revision": "882f81da8340d973ce3246dc97163ddd"
  },
  {
    "url": "assets/js/349.bb8e12d0.js",
    "revision": "1b9c2c799dc1dfa4ffaf39f65f9ddb98"
  },
  {
    "url": "assets/js/35.04547d08.js",
    "revision": "19710efa0fac1805ad2a04acca02b200"
  },
  {
    "url": "assets/js/350.21c72060.js",
    "revision": "78f8da839caa5357cbe9fd25ef5ed3fc"
  },
  {
    "url": "assets/js/351.0c9a5781.js",
    "revision": "9e5b94dcdbd9cfb23e0c07c2593bb41b"
  },
  {
    "url": "assets/js/352.abad6405.js",
    "revision": "064cfba9027732f773a2d4730c003ddf"
  },
  {
    "url": "assets/js/353.333c6b14.js",
    "revision": "1944a205b2957a9c1abaa5c27037fd97"
  },
  {
    "url": "assets/js/354.13e1902b.js",
    "revision": "a32670689d529831697604dd5bcf15ca"
  },
  {
    "url": "assets/js/355.325e906a.js",
    "revision": "2a10cbe48e98bb0403768561d590086f"
  },
  {
    "url": "assets/js/356.9732d4f2.js",
    "revision": "15dc0debf337fb563db181f138fe9fc1"
  },
  {
    "url": "assets/js/357.5f8c8b6f.js",
    "revision": "28d42cdd39f491957f31b9dc661dab1b"
  },
  {
    "url": "assets/js/358.8c61d5a6.js",
    "revision": "569f49b12b769e656f48e6f79b8911bb"
  },
  {
    "url": "assets/js/359.16ca7194.js",
    "revision": "682b628427004c76a082abda7cc419dc"
  },
  {
    "url": "assets/js/36.76e02e8a.js",
    "revision": "98d85bb7d547e418a5707d7336074f4e"
  },
  {
    "url": "assets/js/360.2efa0e37.js",
    "revision": "79e46d3311ce3c3ab6263a909521ed94"
  },
  {
    "url": "assets/js/361.23e607d1.js",
    "revision": "f02d54f4eab29faf7cbf9f8be7834327"
  },
  {
    "url": "assets/js/362.1d25f557.js",
    "revision": "1d7022b47207b0fcfadebb7ee5741e09"
  },
  {
    "url": "assets/js/363.3653033f.js",
    "revision": "4323f0d1081b8e679b8afdf67464f301"
  },
  {
    "url": "assets/js/364.82d09760.js",
    "revision": "918293a743d58cc702850ba3f42b624e"
  },
  {
    "url": "assets/js/365.b5205b2d.js",
    "revision": "a4405f0a4caf7c9e1017f55d700e0cf2"
  },
  {
    "url": "assets/js/366.634078eb.js",
    "revision": "f3af2b312d259dad0c142918730c4c23"
  },
  {
    "url": "assets/js/367.3eafc89d.js",
    "revision": "65d10beb071ce9ce588ef435496f4819"
  },
  {
    "url": "assets/js/368.52465253.js",
    "revision": "a001fcd12934243144ca3c0ec006e29c"
  },
  {
    "url": "assets/js/369.acd7a046.js",
    "revision": "5859e1c47512d3197cc82486f9db8075"
  },
  {
    "url": "assets/js/37.df619fe5.js",
    "revision": "89fe4ca1e086a75836a9ad40694ea817"
  },
  {
    "url": "assets/js/370.a2f02926.js",
    "revision": "fd41244b3f57f3312ffbc4fee9931d26"
  },
  {
    "url": "assets/js/371.e8fd55ba.js",
    "revision": "753cd4a01a3e72d8279a8625077b46fd"
  },
  {
    "url": "assets/js/372.53dc8e06.js",
    "revision": "b76cff32e13594fa33e93b29f269e526"
  },
  {
    "url": "assets/js/373.ffea1ffd.js",
    "revision": "4b78ad2642f2f53ada51d6049f0256fa"
  },
  {
    "url": "assets/js/374.160b242a.js",
    "revision": "6ae112b037fefe8ce057e419d6e3742a"
  },
  {
    "url": "assets/js/375.45524829.js",
    "revision": "fe527e69c343921ad5c33ad07e3e2b20"
  },
  {
    "url": "assets/js/376.7e53c9d8.js",
    "revision": "5f3b0b3a0090def6ebf2a2e9800d8962"
  },
  {
    "url": "assets/js/377.80073a4b.js",
    "revision": "f590a3731a22a32c62408059c74e9b35"
  },
  {
    "url": "assets/js/378.dcb5f3da.js",
    "revision": "212b30b47f4ebfbc8b3f71b3f90df76d"
  },
  {
    "url": "assets/js/379.4a9a466c.js",
    "revision": "f3fd1fd0e48bc59955b78d16ddd6f1ee"
  },
  {
    "url": "assets/js/38.fac7adfb.js",
    "revision": "52801fc4fc8d8b704a403e5a34020a37"
  },
  {
    "url": "assets/js/380.8f3751b2.js",
    "revision": "5c42d576516dcb710ceb3d6a7997077c"
  },
  {
    "url": "assets/js/381.0c61487e.js",
    "revision": "b0b433f28c16d567eaee491c41385e6f"
  },
  {
    "url": "assets/js/382.e65960a7.js",
    "revision": "6a7a7f6b525677cb6225e0ebabe277f8"
  },
  {
    "url": "assets/js/383.7d32e14f.js",
    "revision": "238adeae800ef6810b08a72ea230c65e"
  },
  {
    "url": "assets/js/384.1ff993de.js",
    "revision": "0589c91b47c970dd00e4bc9158739412"
  },
  {
    "url": "assets/js/385.8bb84025.js",
    "revision": "5ab841f052672a28b53afa7a57a525a0"
  },
  {
    "url": "assets/js/386.8cf1e832.js",
    "revision": "79b1e0e8ed9a6008ac0859900125ea8d"
  },
  {
    "url": "assets/js/387.ddc92a9a.js",
    "revision": "322fd3987d0c293b33337735d32038aa"
  },
  {
    "url": "assets/js/388.62e31cd3.js",
    "revision": "d2e093e1a44f3ee0bf6d8c0c84e526cb"
  },
  {
    "url": "assets/js/389.ada510bd.js",
    "revision": "131ce51eff344b3a671cce8b47673d42"
  },
  {
    "url": "assets/js/39.ffae0b2c.js",
    "revision": "4cd70f28ec605a49d94e936e2bb209f9"
  },
  {
    "url": "assets/js/390.d57d80d7.js",
    "revision": "be5902fc8f3338554130ba18704b9eb2"
  },
  {
    "url": "assets/js/391.ce2d8e75.js",
    "revision": "90382c503b102a22638eeb668d235d44"
  },
  {
    "url": "assets/js/392.5a57ca4a.js",
    "revision": "b8cbc6507c386d053eec5a68e4744897"
  },
  {
    "url": "assets/js/393.fb62a02d.js",
    "revision": "89e4f6064d467da5b1690504a708bc0b"
  },
  {
    "url": "assets/js/394.53ff072e.js",
    "revision": "082c823fa4aa2c9419dbba0ddb040a3d"
  },
  {
    "url": "assets/js/395.60ecca0c.js",
    "revision": "164c9ef58a810f8e710bf64db5cac7aa"
  },
  {
    "url": "assets/js/396.2835f7c3.js",
    "revision": "7899104d67f5e58f47608eb55d48dcb2"
  },
  {
    "url": "assets/js/397.fc9bc627.js",
    "revision": "6e7d2ac469f580ede64e6dbbc8c8a4ba"
  },
  {
    "url": "assets/js/398.e0e31658.js",
    "revision": "67757e860e3d3bff7b05b53b0267a253"
  },
  {
    "url": "assets/js/399.a031adca.js",
    "revision": "0a5c55d2c9843c987358e7be5b20b074"
  },
  {
    "url": "assets/js/4.678de952.js",
    "revision": "27663f79a6b509c89db63eeda0c9ffe7"
  },
  {
    "url": "assets/js/40.980e4ba4.js",
    "revision": "3d1e6476d2d9f3615fef14f586806d22"
  },
  {
    "url": "assets/js/400.b350e3e7.js",
    "revision": "33c4dd6f36b526caf10cfeff76d8d267"
  },
  {
    "url": "assets/js/401.5d9667c5.js",
    "revision": "a48a21be16cb4857f70a945600003715"
  },
  {
    "url": "assets/js/402.825a458b.js",
    "revision": "5ab4ac7410d4de05b908bc574d8b6bd4"
  },
  {
    "url": "assets/js/403.c3af1764.js",
    "revision": "57383ad332b30dd63cec9eaa3521890b"
  },
  {
    "url": "assets/js/404.4048d4d8.js",
    "revision": "abcbf26f98e288bafd59083113d4667e"
  },
  {
    "url": "assets/js/405.97405c0b.js",
    "revision": "74b027f3b1841c54712e79c994f8f065"
  },
  {
    "url": "assets/js/406.cbdd6f9a.js",
    "revision": "347f636b9b74cb2ce75b2d42198c1fd6"
  },
  {
    "url": "assets/js/407.f9e2b895.js",
    "revision": "4e132ed9cac16db119c3f50a7941137c"
  },
  {
    "url": "assets/js/408.5e8138c4.js",
    "revision": "d756aa4a99aa4a2876e1204e41447946"
  },
  {
    "url": "assets/js/409.6bec5789.js",
    "revision": "244fd9ebdad4b92ff0a2c07218db94b2"
  },
  {
    "url": "assets/js/41.cafe75a0.js",
    "revision": "144e1220580fb818acb9b15e4941df65"
  },
  {
    "url": "assets/js/410.92ad1089.js",
    "revision": "6d03e4b190ebae9dc4239a45f36da342"
  },
  {
    "url": "assets/js/42.190b18b4.js",
    "revision": "1835a9d2240b12914144d7a51a0a1d3f"
  },
  {
    "url": "assets/js/43.4efb4f70.js",
    "revision": "7b2e8fb0abe74ce2af7689411d32eae8"
  },
  {
    "url": "assets/js/44.ceba8858.js",
    "revision": "75d8d8c052a2552a3d96e81bc72d2c32"
  },
  {
    "url": "assets/js/45.9bfba896.js",
    "revision": "70acc0aeaa0afea04b520ccd8ecb1aac"
  },
  {
    "url": "assets/js/46.33f46e3a.js",
    "revision": "be07a9c30711cfd950d4aaa234d05257"
  },
  {
    "url": "assets/js/47.8e813622.js",
    "revision": "fcd3409f2132328b2f04c980003becb5"
  },
  {
    "url": "assets/js/48.9f61e0c2.js",
    "revision": "d4b54fd50c273b601140b202acb65305"
  },
  {
    "url": "assets/js/49.27c44fc1.js",
    "revision": "c90e47b7fbd77fc4519df6147024e517"
  },
  {
    "url": "assets/js/5.0fd143cf.js",
    "revision": "aa187cedb9c2183b186b23518adc322d"
  },
  {
    "url": "assets/js/50.6b929a36.js",
    "revision": "3b413b8d457e7a2144b043f3183c2f08"
  },
  {
    "url": "assets/js/51.aad7beff.js",
    "revision": "a53f5f030b3873fae426d6ef4f59890e"
  },
  {
    "url": "assets/js/52.bcf13bd4.js",
    "revision": "7f82a656c034e2118d87dfa926e8b853"
  },
  {
    "url": "assets/js/53.9748dcb3.js",
    "revision": "8ea18b5e3d19d7765536575960394d54"
  },
  {
    "url": "assets/js/54.24d22a96.js",
    "revision": "767e8940cbb0f02fde7d931a225d7141"
  },
  {
    "url": "assets/js/55.5ca6eb43.js",
    "revision": "d20b035bd9ccb0d5957516dec4d16c2b"
  },
  {
    "url": "assets/js/56.cd9c9b18.js",
    "revision": "1a2b53538e10317a1baa8eacf65140b0"
  },
  {
    "url": "assets/js/57.a6d57c51.js",
    "revision": "64c4a236937cd7fc77a41ad83d28b131"
  },
  {
    "url": "assets/js/58.8e217a5b.js",
    "revision": "6c10a9190f3912a953ccd7d260346bc5"
  },
  {
    "url": "assets/js/59.193dffe2.js",
    "revision": "be49d414da8aebc5a962cdd52a8aecab"
  },
  {
    "url": "assets/js/60.6ba8c78a.js",
    "revision": "fc4e4f34298172071ab6260b219c40b2"
  },
  {
    "url": "assets/js/61.63bceeb8.js",
    "revision": "51ed6a13061b35b2f108f39d8353598e"
  },
  {
    "url": "assets/js/62.6edcdb45.js",
    "revision": "32a2af85fcdde6e98008fc6b239d2b2d"
  },
  {
    "url": "assets/js/63.7dd755b8.js",
    "revision": "a81bcbea571d6085bd0290ae8f1e8f54"
  },
  {
    "url": "assets/js/64.19793166.js",
    "revision": "af1f7dc2e26a274218f987e6585a53e7"
  },
  {
    "url": "assets/js/65.7940e332.js",
    "revision": "f1de0366e4c08e374ed86c9bca08c130"
  },
  {
    "url": "assets/js/66.fb6605f2.js",
    "revision": "9912671657bed19a1af1a9d58cdd1dee"
  },
  {
    "url": "assets/js/67.8274ed6e.js",
    "revision": "872df843a8e7a89865fe9f0fbc03290d"
  },
  {
    "url": "assets/js/68.9ec74ed0.js",
    "revision": "d15c7302c29422c975c35b3a5297aa40"
  },
  {
    "url": "assets/js/69.a72f92a8.js",
    "revision": "9c8882cd7cbf3a25ff5cb1955f128cd1"
  },
  {
    "url": "assets/js/70.03f79cc0.js",
    "revision": "3321b5a2abf96de3aa4302f448a7db2b"
  },
  {
    "url": "assets/js/71.900542ed.js",
    "revision": "d3620827d523a3f0d7f57d59c1c3cdde"
  },
  {
    "url": "assets/js/72.8c358b95.js",
    "revision": "a02605d75dea54f034beb093949ebfba"
  },
  {
    "url": "assets/js/73.93c069c4.js",
    "revision": "59a4a17ae37f8c88357636e13baaff9e"
  },
  {
    "url": "assets/js/74.0e085422.js",
    "revision": "52ec10122b5b56adc63d67ada7f5f12c"
  },
  {
    "url": "assets/js/75.0b4786f8.js",
    "revision": "12f2eb5df2caa07f39a8c04ff8c81e2e"
  },
  {
    "url": "assets/js/76.ad580534.js",
    "revision": "e91eda772d167f7258a8b557ef0c93fa"
  },
  {
    "url": "assets/js/77.e58e3f33.js",
    "revision": "a67feadf8e5e08ba0fef1ba59564869c"
  },
  {
    "url": "assets/js/78.5e8538e9.js",
    "revision": "c8f03adacd550f2bf1c33f619b13bbe9"
  },
  {
    "url": "assets/js/79.c704b2ac.js",
    "revision": "9cab5ff2706496c8976edf0d2373cd2a"
  },
  {
    "url": "assets/js/8.94aecf24.js",
    "revision": "f947ade354e6303a666af31eb790969b"
  },
  {
    "url": "assets/js/80.c6bf56b2.js",
    "revision": "b7ea06926973d1fc81f7884703655d9a"
  },
  {
    "url": "assets/js/81.925381d5.js",
    "revision": "ecc0d8e63ef0d7cd6b4f180c2ddeb9df"
  },
  {
    "url": "assets/js/82.06218e66.js",
    "revision": "5f35f94c2238d890edd8ece85427c06e"
  },
  {
    "url": "assets/js/83.73a0056b.js",
    "revision": "fcf4155a2ef3c6e6cf07681be7d36350"
  },
  {
    "url": "assets/js/84.8d8587d5.js",
    "revision": "6984c58746e4cd1943aa5057b145daf1"
  },
  {
    "url": "assets/js/85.536378a0.js",
    "revision": "53715a9f650aa445f2f9da134f1a9fa3"
  },
  {
    "url": "assets/js/86.855164ac.js",
    "revision": "5b791fbe57fb98e5fef6b0feac993074"
  },
  {
    "url": "assets/js/87.34641872.js",
    "revision": "845cb6c4f5a775473e947a32564d87ee"
  },
  {
    "url": "assets/js/88.2f4410cb.js",
    "revision": "b2ded114c3b72bbd52478deecac08bfd"
  },
  {
    "url": "assets/js/89.6b126ab7.js",
    "revision": "c0306d305ea29cb6bd4ff3c29a94513e"
  },
  {
    "url": "assets/js/9.9fcdfa06.js",
    "revision": "734a22bdd3a34896183ba71e7f872ec9"
  },
  {
    "url": "assets/js/90.e6e09ae9.js",
    "revision": "949e3635e6a0905ac80bcc0bbfa491c3"
  },
  {
    "url": "assets/js/91.efdd02ee.js",
    "revision": "06162f148ed03b0cbee24e26c82630c5"
  },
  {
    "url": "assets/js/92.ed6a4238.js",
    "revision": "ea726c59c1bbb69327120209f915009a"
  },
  {
    "url": "assets/js/93.05d5e201.js",
    "revision": "d9f082cb825ed2ca37b19dd3a20558e5"
  },
  {
    "url": "assets/js/94.be059411.js",
    "revision": "927838aa4c07edddee7e218c7a210515"
  },
  {
    "url": "assets/js/95.f44fc974.js",
    "revision": "24ff37d2e1e8eb197beaf9aa680ad9a7"
  },
  {
    "url": "assets/js/96.26729828.js",
    "revision": "9f95603ffa96af2957183039bb3760ce"
  },
  {
    "url": "assets/js/97.caf31d1f.js",
    "revision": "39d9fe972894d36d7e6c964b3f85a6c1"
  },
  {
    "url": "assets/js/98.28e1f038.js",
    "revision": "16664a89f38aec5ec97f148e8bab2137"
  },
  {
    "url": "assets/js/99.f7dd9523.js",
    "revision": "dc2b1be4bad66d5bade4ea95122815a5"
  },
  {
    "url": "assets/js/app.de7d857d.js",
    "revision": "ef8db82f2bace2a467b37efa6707e59d"
  },
  {
    "url": "assets/js/vendors~docsearch.6a47252a.js",
    "revision": "283b06b648f596e234a96938109ffca4"
  },
  {
    "url": "index.html",
    "revision": "410ddb74c7d805bb42b29ba8362f6286"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "466115cd9f4683758fe78dd53941d5d0"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "dd348d06b1c02d462e3eec8e8c5070fc"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "c7906d36641d6875004710e312e43b22"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "95b11884e64f18019d7121101d67d5c0"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "be42f515dd2d71e4e6cfddd5b90b1497"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "665b602a0b05744be1c50539e1056e81"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "3569b6cfd520505d92e0988f2f5dad19"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "cac71ab69d266b97b635542267a77c02"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "9cdc4871373cd754347bdcfd6bd14656"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "1f981d03169c26a2ee188413ada9e4cd"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "94374176102cb8070ddc422d39aa9f05"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "91c0b55c4d559b96f52c77f99702b068"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "017360b31290fe5360680fb94c519936"
  },
  {
    "url": "master/api/index.html",
    "revision": "f67e23407f31ddf2c40d6c5af446f4a5"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "7717b824359aefa33e08a17ac0c8443d"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "6078b5822508ab2f25f41a476a05eaff"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "8eed21d446908def94d6e8bf6083b8a6"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "9c9fc9789eb9d5564097e9e26c856e02"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "bdcb6aa2f855c5c711e20870c9d22a33"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "c7b1f926f2eb424c060606c7a24cef6f"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "013fe8942408db0432f4c6f6a6936404"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "d3b85ed0c89e76dc356c0127a9622b85"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "bba8664c7b25ea109571a408e6de0f05"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "9412f2f86eaf49e74803cf2f5ffe79f2"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "366f5c4961274536ac9ee0292e5f1e72"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "903696b44c8b47b16b153291c64ebfca"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "98ec71466e4995a747e16f924f90f918"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "edbff1079c8d27f6eba852e60999e52d"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "a65653349e3b5298a60854f0d9524a31"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "bcbb663e8bcaea92db6d4c6ba0560d8c"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "be17def05270a2f9ad21df7601b28e99"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "54e3cc197eb4ebfdb5fc3932cf53747d"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "3dc5e2dea09b006629519f347f58323e"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "ae1279d6c6250728e65970a67473b283"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "6f238592b633214b087c360b3fc76c54"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "e95b56349e6a693587682a37d33036dc"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "8ff614637271b26239ca1e0b5ab4d2a1"
  },
  {
    "url": "master/packages/index.html",
    "revision": "36c58ffff7ab9c188020f80db10fcc05"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "323087ea53a854ebb661f889d1564fcf"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "717901be45184b6fa9918bbd39654eb3"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "b1325631bc2dfbac4e72f8ca72e37020"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "bfd2d10e5759c2b0e94d86110bc67ba0"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "905b34b0d179a5dba4147bcac87e2b4b"
  },
  {
    "url": "master/packages/views.html",
    "revision": "a61e53cbf0576af48540c1f6bb55f8f5"
  },
  {
    "url": "master/performance/index.html",
    "revision": "69ec266f58d7480f933a760bd75fec6b"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "704c1482937c64d065370f23cc6e5f53"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "d26af0e1a5cd9f539d3bd0362221ed10"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "69ced50815fc5bef4d3843fef886818e"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "93df61498bad8013a8b8f7d017678e82"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "31d3213a8ce4da15612c43a3cc5a16af"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "6adfffb25e435af1146ee0145c8959ed"
  },
  {
    "url": "master/themes/index.html",
    "revision": "7061790aef18ec36193965f4cde4dbfa"
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

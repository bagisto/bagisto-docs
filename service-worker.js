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
    "revision": "7ce704c11c718e1f9b4c408edead1d7c"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "26851db4915a66d8a47a2a4c28dd72f6"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "25b9db4bc6e141d676aec41bdc499edd"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "2f48e70fd2d21deb9c8327f1fb9d5c6b"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "499a3aaa74159b7ddb2b83e389e20a7b"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "976d5deff708141e3c45186e205d1434"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "10f8d3f12454ec601f045acb1984382d"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "18ae3ae91ac005289ac679f8a35a8e6b"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "fbb40d0d9727fdefe2d1b13b11ca1b9d"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "ed772d3b4c988edc2e064f8edccc36d3"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "56265d241498c691b330fe491daf7767"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "44676326f58b40beedb6adcb27f95488"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "4eecafd278bb319d726ea24d03f6524a"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "1619e4864c94bb5ff56feeb29c19f19b"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "5673b98d055767175f3cbba659ac0006"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "3560b218fda886247a7edb88615cd287"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "ec4b3b1ee4c3d89a13e4ee3cfeebd27a"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "255d99db8521d307f8375a7573499b40"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "bf6145180e18610b8b47a0c1e65f3dca"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "464b75705546e51e35ca363ed1fe3721"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "14843f300f55eaf79f353fc91277619b"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "b80812a1c244769816621c7a5e7dc8d3"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "271c46857c439723c5238590f9c62c13"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "70de4859f7ecaaecf6f698d2b6512e91"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "bb9af475ec1776a9c6d5bfd2fcfb42b9"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "df80c8e27700a6f9912acf1d94afece8"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "d40790855e7827cb960522191bf56b03"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "8a71552f914c2adddc630739bfb62cdf"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "b70c48afd48d9961e4559cac6dcbfebf"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "c74a2204bcf86e42488b1c5eec83a945"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "1e38e21d898cd211754a1a54d32fe4dc"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "92e7c9234c5c8de327990bcfd74b6ac7"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "121e27e537543106ff715c7f18b2d483"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "3e10db9d56bbfd1cc6dbc918ce64ffdd"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "f366f2e3de936d2ec08d180beeb2ed8f"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "2d0957e375b805a97d68745d244454b6"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "cc41f1b03b8e64ac43c5b7a17f3bc64d"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "6b748363cb678201091754f2fb553570"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "18db62b4bb06945c192d7cd016428acc"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "2a1c4d204ef12ca9f214f03229bd1cbd"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "2b84571f139de1d1fb9e15fd6feb435c"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "6a69733cb78ace261a90560bf0ce06b4"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "5ca8dd61a3638ecec6212269d6c0cb8b"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "afbad545079f6accd1a8eacc1424047b"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "0dc8cd18ac3ebb469d664d59c09df055"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "5e39a1c28e1351899054c6f324d70145"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "bf6fd23b5770e49b7ac372953aca7d25"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "ebdb4548e04209c35e8286a7c11d9871"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "7048226f2b8e674a397927276e815f7a"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "7de96ecc2dd97c6cea0cc5cd20eae3cd"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "360ab4f67d423344be98289088d1f82c"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "ebbb0d9acf774f84a4b4ffc4e7da919a"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "bb0bc61a8c0bf3a6c8ff109e1506c943"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "4c2add1b9f35dc9eb2b80cc7cfbdedf7"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "ecf7907e7a9a5ef9bf1b87c3cc7f446f"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "aca14a598196db47c544eada389f4755"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "07598aa45c253c814ba3405d62558f4a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "632214b6aa4a5f5f92a19422af0649a8"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "b3f6b585d9a2b5e23eba067fd4fcda38"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "15f0b9fa56a730e6033fa1a7f5730f17"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "632ce0b97a0143d10a28aba14d99813d"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "91d7b7f7c751cbb6b162f7ce218d2289"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "78f94146aa960b928ae98b48df3f8f08"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "205eae4cc690f4285753893f7861ef88"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "26bc36744b4af9a81d13acaf05f84a1f"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "3d9066060b18180586e484dea4a1d266"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "05f68d844c5ef958903773aa0420a6ce"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "b731c134519fe76d46c3b84256ead801"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "93773ee1ee295a56e117679d34cf9bbf"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "0de9326552f6dff1c1a2cc911a8dc29b"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "5c6120220c733e7917b9fe9f08a63d35"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "e1b2bdbefbf78f4990381e1913b8dbaa"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "07d96d6ef9f348002a33b89224f8e5ca"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "2fd536daf97555203dba2e9a09c2ef93"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "42f475ce67ebb0f9e0776c3f552f0e33"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "2f8e95ecd7b0deb956fa20bcac88443e"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "8313f6d0f791cbcf1cc21e39eed5849b"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "e00a97a7ba098d93abb247dc89490eb6"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "9afff31f3228525209dac1e763cf9c18"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "614246635e98e30fb21f3f51ac4eef90"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "54f58131f48db31a43e35b8f4d2785d8"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "75764b3be6a77b619f7c519ce9b3ff12"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "9b28754d4e97f6c88e62c6a1a8657136"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "1b705f11478bf439a9e082376b22a8d1"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "6ffc11d9cb1c461d4aa4ab3a223163cd"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "eaa328cd7be044f397cc737d22b4b2d1"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "7e4953bf321c2442519fe82ea913c38d"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "f4e910384d52214d2dee1c08fa349262"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "824c40c0987a5b1263b68d387150cb5b"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "1425dcade3189df7a698ae564ba59695"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "5c274d898311ceabeab7cecf787e9f40"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "bb4ac6dc1a50f00922396aa49005ea4a"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "b739113b5c690f28f676d3f90edba7b3"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "ba1bfb436c8705ec954edd8c0811e0f0"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "e07e3d61c80df74e5174ef33b9c964d1"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "468277ae580e9ec711b27f1e9df23ecf"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "21e3608c003dac65dcdbd1847145ce68"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "4b38e0f3511ef43d335cc072250d4d0e"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ff3160e48e5b88d98827c036ea26006b"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "b488fd1177164d505934063f92a1ef59"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ffe9ae3f174608352efe7b01ca3fd8fc"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "c9536162c8d206117cc223513796ef69"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "494d7926c2540cdabf44b185968a5a4e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "519544649d382b5743e77be587998014"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "a68849d1ddef2f753fd945f3ea52f83b"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "0f8f1d3fe6638af0553e24901d6e1ceb"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8a4dab4d559adc6b650f30e9483747a6"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "f2847fb64b7cc70e1c2827f807cf050d"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "cd9f9f6d6edb7063d264bc6ca866e095"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "0affa9e5a6dae1580c8ad42c3d415322"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "a0cf03a7ffaa4f27a47833965359643e"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "3cd3f00afefe4e2fb3094767025d7ad7"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "ccc2a581c9573ca976a58e0a01b2740a"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "ef72851eaec4ab413a42df4257b455da"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "aa581c20f62a8c5abf41e2df7fafdd32"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "35af7ebd0ec0f6405e4c0c6adebfc17a"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "31f7808da345ef9f2865b0f04fee64fc"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "c60c49c350fac1357285472b8f4d1ba4"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "f04b2018289a7916586de410ce76fb47"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "ab22d2400a5de67b7842fe722b04623d"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "01e2d5dd2b2f87def6e37f73fe0131ee"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "dc468b44a4c7f0420c7d674218377aa5"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "32b26a8c75e14a9890fda4216e52a189"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "6ac27dc4f1c512943eece24b7878acab"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "f8db44ff9b07192e2299d00eecfaaf88"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "16522d934b0bace0d2617689cf05c60b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "8b93c757e0a3d7c833763f40fd4c3a4b"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "8000027af6bbdc09c15f63a80957aa60"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "061ff2ff22d469d8324d99c29481e00a"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "27167c5a471d6442db8a6df6825d2cb8"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "5ed6576ba587a09988d3de9a173727ae"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "d4febcc199429498b14a38b36dc7598e"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "8150d9ddc6ed967090c52ac7fe04ac50"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "23ab7d71945b40bc0e56f26b280d84f7"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "2f38579c3f3dcb2c62ee67eb7df12fda"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "0851809495ee8560c931931ace936f16"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "3f5ced928b1a5de681ecd791a463ade9"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "35bdcf48579f4edd49cdf0fcb4daae53"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "2deb647b9cf3d7a58abe5983ef663688"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "45efa8e252d2c4786409ad547e61563c"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ee3411cde829ad4ac550d4bd1666bc05"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "d1e4a14fb7fd07140c2130568f79fe61"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "2ed1bb6b67454da895bdd2477ea2432f"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "38b3dba099b4fd54e92cbd500e4ea8ef"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "68214ecbf3cbde2b145ae4c6da1275f6"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "8179ef94c6d313755e5acdbf40e53ccf"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "3c9feaca404a7adf54c0527a022e2a37"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "33a8c2919701f1cf4b192b1d9558f209"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "da401eb235003c8def9dcf7833a1192e"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "d0b98c3e4c1d74fd1389a50e788c5cdb"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "7334a5a3d76b53f511d3046e58dc08cf"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "2145f5af9eecc8d52c70a85c1e41671f"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "d7409579068bdca12a30260613ca1677"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "3bbc4089f5786d79a08395fe74d3dad7"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "c14c08f1c14d21e25e5ee2ffd0291ab8"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a2455e112a1150e145bc518c101567e5"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "83884b2b63bfa7ec7091375101d55699"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "18c998dfbac5d24e29f5a5a6d884cd9b"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "1bc832eaf8cdf9bd6982e108b4e590cb"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "9a66994d6b6988f56ec536afc86805da"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "8f4829f428e53e67c8b5626a6f056e45"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "eecd2d5dcdde67515eeaee6883df8bd6"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "dfd224145a465d1e59de327afe9ab3d0"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "390344bca847f6181619e39f97bd4a2e"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "22433446f2ce3f6926a53974c2f24aa8"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "5738069e94649fcb103b517720990c67"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "4c2ebc12a4e60a1beb7c8d16eee437e1"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "8ea8a61e30f5832ef014365e1981967b"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "839419f900195331e0f4aaf3bfd51eb8"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "cd08ccdce1adfa67d42c20c44fd1f270"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "f922514398b485a6291b2832823be082"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "88e829c2a5302acfaf2fd0b9c19eb1f7"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "918f40018d58f62f5c1de0ca98a01b55"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "1fb94f98979c1532c99333061680932b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "6bc23611ae742da978882c4996d04e7c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "bfb673408d3fe445796504ae22f19eaa"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "d94849d5911de444493443a1079f935c"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "86807d71b1d1eaee6db77ebae22b087c"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "cfb6dad22dfc6d9410034ac49c54f051"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "a206a96d486f79592b2a492fa6247690"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "4f1f0c141204ea0c4002ff7a3976bba0"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "aa3d267de2f3f290d33eb3d0e1a8c4fc"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "e9b4dee3cdf95785750688d8edd1f5e9"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "5e3979255d74fad9422cf52798026f42"
  },
  {
    "url": "404.html",
    "revision": "c59f772d51fce881af4fd0f7619a6af3"
  },
  {
    "url": "assets/css/0.styles.3c367bfe.css",
    "revision": "3a1ebc21b86291251328834c0d5063c2"
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
    "url": "assets/js/10.5e02b531.js",
    "revision": "b82f4ace34bf20621e95690942b985b8"
  },
  {
    "url": "assets/js/100.47a0a494.js",
    "revision": "d925decb50a85c244a895a82de1d057a"
  },
  {
    "url": "assets/js/101.9fa4502d.js",
    "revision": "3927a798a3e314e4d75a96adbddfd153"
  },
  {
    "url": "assets/js/102.8cbb1f15.js",
    "revision": "46af919072850773782f37808ceb87ba"
  },
  {
    "url": "assets/js/103.ef305808.js",
    "revision": "a9dcaebc96674897d05123fff05c57aa"
  },
  {
    "url": "assets/js/104.c72317b7.js",
    "revision": "bed935081a317520aa375d8a29746033"
  },
  {
    "url": "assets/js/105.8584d4df.js",
    "revision": "043b1355a6414acb32c4ee6fe6588496"
  },
  {
    "url": "assets/js/106.3b496805.js",
    "revision": "23a8eb753ad0b42ba1cfe99f960fb6fc"
  },
  {
    "url": "assets/js/107.2766b0e4.js",
    "revision": "a804aa200221b0daa7b6f9ae6dc77891"
  },
  {
    "url": "assets/js/108.a21bf0d8.js",
    "revision": "7b73d57904f8344ff475f4656f4d9971"
  },
  {
    "url": "assets/js/109.db73fb7c.js",
    "revision": "3bfd1c4c0a92864540810304cab2312d"
  },
  {
    "url": "assets/js/11.74e014db.js",
    "revision": "21b1aa27daec398a7cfe1dc804b60572"
  },
  {
    "url": "assets/js/110.df1a5bf8.js",
    "revision": "f2e48977499f312cdfd2fc4c1fabac49"
  },
  {
    "url": "assets/js/111.16c98f67.js",
    "revision": "68eb05d72be212dae69a8b68898513c2"
  },
  {
    "url": "assets/js/112.71c2d5ec.js",
    "revision": "72ea4f9629192d40e9a280f9f533e2a1"
  },
  {
    "url": "assets/js/113.53a9e427.js",
    "revision": "62cc459ee9c720b8e1ec42d7bf6d0c6b"
  },
  {
    "url": "assets/js/114.8f2ac39f.js",
    "revision": "d0c1574cb1b12c2cf217fa2909584827"
  },
  {
    "url": "assets/js/115.386fc380.js",
    "revision": "70a9079e1425e93d63f08484e6b0c6d4"
  },
  {
    "url": "assets/js/116.5aea00d7.js",
    "revision": "ff14caeface9e63cb7f06d338db49afc"
  },
  {
    "url": "assets/js/117.69c4f4b4.js",
    "revision": "e72137e60dca6f098dede3eb8e07c258"
  },
  {
    "url": "assets/js/118.63a60a6e.js",
    "revision": "b55c6f5ec0bde6a92cb36b22a50b6bde"
  },
  {
    "url": "assets/js/119.3d5f426a.js",
    "revision": "d4f9d894e2547f6cf48e716857e15d23"
  },
  {
    "url": "assets/js/12.48d66047.js",
    "revision": "da782fc3c5d813f910aec60af974ff1f"
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
    "url": "assets/js/125.e1d76194.js",
    "revision": "528d8c6cf9945eae7d673c47bab6a18b"
  },
  {
    "url": "assets/js/126.1f350578.js",
    "revision": "bcfd6801d5177acdd88999628aca68d5"
  },
  {
    "url": "assets/js/127.cec4e034.js",
    "revision": "aad49464c6526f45254aef5af188a06a"
  },
  {
    "url": "assets/js/128.888dd438.js",
    "revision": "c90c88ac00003b7a1e45b0685bab6d44"
  },
  {
    "url": "assets/js/129.57877b8f.js",
    "revision": "da44041a0c77483cf25931731f8d1d6f"
  },
  {
    "url": "assets/js/13.e2d65956.js",
    "revision": "818376197472471477eb8ef4a5c7a1fa"
  },
  {
    "url": "assets/js/130.4ff3d56d.js",
    "revision": "218f30ec5048dec1e7a935648bb84c45"
  },
  {
    "url": "assets/js/131.2b382360.js",
    "revision": "da7f5b1b9c0cb3e0c395a8d0e998b5ac"
  },
  {
    "url": "assets/js/132.bcc74523.js",
    "revision": "107d962c8992888b39d48c8cb7af2bc5"
  },
  {
    "url": "assets/js/133.fddf300c.js",
    "revision": "a54f3cb32144b4401ac39115935ee76c"
  },
  {
    "url": "assets/js/134.a119a757.js",
    "revision": "fb60082753ac3ad38761ad0cb1b0792c"
  },
  {
    "url": "assets/js/135.e93fa723.js",
    "revision": "2d04f6e69390cc0604299e0e700fe39b"
  },
  {
    "url": "assets/js/136.03311d00.js",
    "revision": "694dea87b2b12149dffb537de2a83629"
  },
  {
    "url": "assets/js/137.9eaca89c.js",
    "revision": "1affa9297237f615e21bf8c396c15f4b"
  },
  {
    "url": "assets/js/138.0bd567c1.js",
    "revision": "83273b6d97b1f5627e9f249116cc4cf3"
  },
  {
    "url": "assets/js/139.471254ee.js",
    "revision": "3f36314562a20becc59c300049b3bdf3"
  },
  {
    "url": "assets/js/14.0e83bd04.js",
    "revision": "ee88ae31e8bb7fdf27f740e03724c2c9"
  },
  {
    "url": "assets/js/140.1dcd1d05.js",
    "revision": "7b8b3ec10148265cd304eaa2d2dd7232"
  },
  {
    "url": "assets/js/141.24e22b80.js",
    "revision": "12ea66b6d25dd07bb282dd63ce5e86c6"
  },
  {
    "url": "assets/js/142.2383d919.js",
    "revision": "85e25196521335dff404cd9ff575e716"
  },
  {
    "url": "assets/js/143.d9392e0d.js",
    "revision": "3d5f3072af3e27d98868fb73f872eb09"
  },
  {
    "url": "assets/js/144.2c6350b5.js",
    "revision": "c8b9dffb05d4af639039d2a3fd78d5b6"
  },
  {
    "url": "assets/js/145.733bbed1.js",
    "revision": "2ae8e1d09eafc56b0171e720eb074118"
  },
  {
    "url": "assets/js/146.2d5cc8ce.js",
    "revision": "fed844b8f05ad87c49acb55340c072e4"
  },
  {
    "url": "assets/js/147.87951906.js",
    "revision": "50b88bb2f454728056d309ef5c3ed314"
  },
  {
    "url": "assets/js/148.e1a0f13b.js",
    "revision": "82f98604acd0e208b436ce96d2083a54"
  },
  {
    "url": "assets/js/149.19582a3f.js",
    "revision": "a9385d908791e2b2178d94b4ea28ebe9"
  },
  {
    "url": "assets/js/15.600b128b.js",
    "revision": "bbb761c1bc65f02ce81155b426cfeb7d"
  },
  {
    "url": "assets/js/150.06a664ac.js",
    "revision": "fd5fc6551e4a2a3279851e7ced9b4a80"
  },
  {
    "url": "assets/js/151.5e66b5a2.js",
    "revision": "df9e45774d759f4707b4868b2db81498"
  },
  {
    "url": "assets/js/152.c5794d1e.js",
    "revision": "6cb8e10b4d04f826c76de969e4a8052e"
  },
  {
    "url": "assets/js/153.63f4f76d.js",
    "revision": "889ca17b91670aa9c077b61335a07a18"
  },
  {
    "url": "assets/js/154.90935ee8.js",
    "revision": "a21c6a9e76afbae7177d2242ad096519"
  },
  {
    "url": "assets/js/155.d0fa1c52.js",
    "revision": "394d9f075f57a30c4496e8b3b73fd058"
  },
  {
    "url": "assets/js/156.0f6b7d75.js",
    "revision": "68fc4ed49e8f838eded6496c196a8c14"
  },
  {
    "url": "assets/js/157.07a1d69a.js",
    "revision": "41c4614d7231b46f62ed4e0b0f795f92"
  },
  {
    "url": "assets/js/158.338a72f4.js",
    "revision": "ca27b372c3596dc0d043101653c2531b"
  },
  {
    "url": "assets/js/159.28dd7cd9.js",
    "revision": "6bc3a1cd2aa5d8efebed91be24a442cb"
  },
  {
    "url": "assets/js/16.c3848914.js",
    "revision": "1bbec836d7c4c7dc7fd8753b350e1397"
  },
  {
    "url": "assets/js/160.d3d2f695.js",
    "revision": "93f6b8e73e98c807038a23139925b045"
  },
  {
    "url": "assets/js/161.1ae28f2b.js",
    "revision": "2bea93125cd20246596a54012a380268"
  },
  {
    "url": "assets/js/162.ccd758de.js",
    "revision": "3b46a85bc96f5ba1a2d078915fd6789f"
  },
  {
    "url": "assets/js/163.1553e8e0.js",
    "revision": "8e366412fdfe0a3a13c9e31cfd856dbf"
  },
  {
    "url": "assets/js/164.8f3a44c5.js",
    "revision": "811352449b7809f9e89a3ae4564beb2e"
  },
  {
    "url": "assets/js/165.78b2e4cd.js",
    "revision": "79077708b5fccaf985390206bff9562f"
  },
  {
    "url": "assets/js/166.d165cdbd.js",
    "revision": "f53993a8b2ba6ae3f1446a8857923b08"
  },
  {
    "url": "assets/js/167.ae4629de.js",
    "revision": "c834c9d3169fd3e278d2c91251cf2eef"
  },
  {
    "url": "assets/js/168.a3392cf5.js",
    "revision": "c0e016e7d57d9fd57a86c3b58f1012f5"
  },
  {
    "url": "assets/js/169.c3015a9c.js",
    "revision": "9e19bbb1c64effde22dc4f365cfa0b23"
  },
  {
    "url": "assets/js/17.dfa10068.js",
    "revision": "23e2cbe065258a9008488f79458fce7d"
  },
  {
    "url": "assets/js/170.52ed84a6.js",
    "revision": "c19415986043590cd14a0a92eccde372"
  },
  {
    "url": "assets/js/171.762da798.js",
    "revision": "61e7c38e362b55ade2e02c9a5106481a"
  },
  {
    "url": "assets/js/172.7881ab38.js",
    "revision": "43b4dae86145a34d44d53ef151a4cade"
  },
  {
    "url": "assets/js/173.12fcf768.js",
    "revision": "093ce6d62a81c186624572d1ac10f890"
  },
  {
    "url": "assets/js/174.2e5c1b54.js",
    "revision": "3453008bf3b56f56d7597bce974f5bfc"
  },
  {
    "url": "assets/js/175.f94ca812.js",
    "revision": "c43a5dc04c16f3ebb9a127d342f5e1cf"
  },
  {
    "url": "assets/js/176.374410de.js",
    "revision": "97cd1b1f8f4745575d129d2574c53f05"
  },
  {
    "url": "assets/js/177.a75bdb9c.js",
    "revision": "2a919125a4cf5e1b59aa29708772fc17"
  },
  {
    "url": "assets/js/178.bf1c1d85.js",
    "revision": "9dfa3cfb918edd12b65670403a10a380"
  },
  {
    "url": "assets/js/179.729dfd65.js",
    "revision": "d781d433138a11eb7c8634ac5e3ef56d"
  },
  {
    "url": "assets/js/18.efc0bb7d.js",
    "revision": "63b4ce651ec9f502b618d5c7dc16051c"
  },
  {
    "url": "assets/js/180.368e31aa.js",
    "revision": "d80163253983d0daea6b4184ce574b12"
  },
  {
    "url": "assets/js/181.cb382f33.js",
    "revision": "7166075bd26a68248124d6d51f457a4f"
  },
  {
    "url": "assets/js/182.ba46f94d.js",
    "revision": "bd54f48626ac07231dad10d652f65e5d"
  },
  {
    "url": "assets/js/183.b8d3d0ef.js",
    "revision": "288187f4c759b01510bada8b4987c98e"
  },
  {
    "url": "assets/js/184.367f834e.js",
    "revision": "f2b50105cffbf8d87b4cafd0756e3005"
  },
  {
    "url": "assets/js/185.39aa03fd.js",
    "revision": "659186f26a7471609038c85e6559088f"
  },
  {
    "url": "assets/js/186.f1e83321.js",
    "revision": "54ade5f0abe3f9e45b0b1073c3a46b20"
  },
  {
    "url": "assets/js/187.0644314e.js",
    "revision": "1c41aebc70cef37de64f9dce87ed7af0"
  },
  {
    "url": "assets/js/188.8ba79572.js",
    "revision": "b95b2ac5b6ba02d0b3bd72d831048f08"
  },
  {
    "url": "assets/js/189.5accb97d.js",
    "revision": "990ac373a3a102b32e562d59591139a3"
  },
  {
    "url": "assets/js/19.5a7ad473.js",
    "revision": "b2886645f18a8eff4ad44a92eebe0a23"
  },
  {
    "url": "assets/js/190.646fb926.js",
    "revision": "2d9092c1f09287527d8e1c7c89eb3406"
  },
  {
    "url": "assets/js/2.0f0bea8e.js",
    "revision": "fd08ab50995a6aaccb93bf495275c2b0"
  },
  {
    "url": "assets/js/20.aca6995f.js",
    "revision": "7480e7e6605454d01ea7619f872f48f6"
  },
  {
    "url": "assets/js/21.ca7c24e1.js",
    "revision": "ae6db68da485475125a14905d645d932"
  },
  {
    "url": "assets/js/22.fce6d927.js",
    "revision": "a61698d2b266b1d89c6c22860ed85b6a"
  },
  {
    "url": "assets/js/23.c73a584b.js",
    "revision": "a2633ddd615ea6944e93647332a6b2f9"
  },
  {
    "url": "assets/js/24.ffe6e3b0.js",
    "revision": "c3dd8582e3d296cdd73ca680d1a4fb50"
  },
  {
    "url": "assets/js/25.c51c47af.js",
    "revision": "3e3e51958a1b6f5e405ec95f93784859"
  },
  {
    "url": "assets/js/26.0e5d43c5.js",
    "revision": "df373fdd11868dd88c32c2af9572a7fa"
  },
  {
    "url": "assets/js/27.01be5958.js",
    "revision": "e6c23b3d7f1a7efb98d0276ce1789a0c"
  },
  {
    "url": "assets/js/28.1aaf3087.js",
    "revision": "f382941fd36402a4194fc7ecc4828aa9"
  },
  {
    "url": "assets/js/29.d92f7ef5.js",
    "revision": "712cb5ec0c24029a5ccad888cb40b9a4"
  },
  {
    "url": "assets/js/3.c7be380e.js",
    "revision": "47a333828ae175ebf6a9ccf39faf1de0"
  },
  {
    "url": "assets/js/30.b0615168.js",
    "revision": "fc2f71cd2a367f13f53ac551576f35f2"
  },
  {
    "url": "assets/js/31.dd68ccd0.js",
    "revision": "a688fe6c69b75d21e0b2b81b86e01c74"
  },
  {
    "url": "assets/js/32.8de41028.js",
    "revision": "a451f55550c3b2828610a82e48d294e5"
  },
  {
    "url": "assets/js/33.fb6918ea.js",
    "revision": "4f1623d8c045496ee3da1c6b7cd1c725"
  },
  {
    "url": "assets/js/34.9b3ac84c.js",
    "revision": "b1e256220aca857cc20e0e1dede756db"
  },
  {
    "url": "assets/js/35.406346fc.js",
    "revision": "d200cfa1d9f25796e63d59e0e9ac0689"
  },
  {
    "url": "assets/js/36.c360f6fb.js",
    "revision": "b6d18b489e3c435f540a7bf3cb3171b8"
  },
  {
    "url": "assets/js/37.76c0ca3f.js",
    "revision": "ffd0331a8938f5168f545313592bba63"
  },
  {
    "url": "assets/js/38.58e1c360.js",
    "revision": "d646b56f2afaac1147434bf0983dc7f9"
  },
  {
    "url": "assets/js/39.9d124fa2.js",
    "revision": "b64eebdd84b7603c12890bee07c05093"
  },
  {
    "url": "assets/js/4.dc6320ac.js",
    "revision": "6f695302764692ddfa9839786cdb1e4f"
  },
  {
    "url": "assets/js/40.4b7eb587.js",
    "revision": "42a693b468c987bb6061c5d71d6f85b9"
  },
  {
    "url": "assets/js/41.9760b85b.js",
    "revision": "ff6fdd2e83b2b71a71ba6abb66d35c52"
  },
  {
    "url": "assets/js/42.6c0d6a92.js",
    "revision": "dd2e0c459f27ddbb50d76b59611b9033"
  },
  {
    "url": "assets/js/43.12cb5053.js",
    "revision": "4502b53159c016e3a5e3429896765696"
  },
  {
    "url": "assets/js/44.a90be45e.js",
    "revision": "4d7c9c7fc5049091e1f850c3abda157e"
  },
  {
    "url": "assets/js/45.85109c4d.js",
    "revision": "6f3615e1ec658829c5658254d7f8cb7b"
  },
  {
    "url": "assets/js/46.3ab955f1.js",
    "revision": "a9726c9bf3ac127c9e8767958ea4afb7"
  },
  {
    "url": "assets/js/47.63e31ae7.js",
    "revision": "758f849c04a8fc9420fd5cf4f1aa3508"
  },
  {
    "url": "assets/js/48.a8849bca.js",
    "revision": "acc0a592916c5593b15531501975590f"
  },
  {
    "url": "assets/js/49.29d47d40.js",
    "revision": "5b6f251ab4b271b1b0e16642b7efa148"
  },
  {
    "url": "assets/js/5.9c77cbe0.js",
    "revision": "37b86e6ffc379e1e9007423eb2dabdc6"
  },
  {
    "url": "assets/js/50.e660e583.js",
    "revision": "09859bc2d55c48e5c6519b7e627366a0"
  },
  {
    "url": "assets/js/51.46e1e138.js",
    "revision": "953a22e63d97780cec5df9295c441ea9"
  },
  {
    "url": "assets/js/52.65c730c5.js",
    "revision": "82851ed543bc464ac058cc1c4fa6bd47"
  },
  {
    "url": "assets/js/53.d0ebe33d.js",
    "revision": "8b7f34caf622fe629b67ba5dd98bc269"
  },
  {
    "url": "assets/js/54.b90b79b9.js",
    "revision": "f57bb72a99fd70b5e256e5c39c7d0ab6"
  },
  {
    "url": "assets/js/55.6ef0621c.js",
    "revision": "4433d8accc0e70d1a08903c057518414"
  },
  {
    "url": "assets/js/56.ddd788e4.js",
    "revision": "6168caf397502a6200cb96cd057b4ed9"
  },
  {
    "url": "assets/js/57.04a15b16.js",
    "revision": "209b509e589779852f1e040b8e4a4459"
  },
  {
    "url": "assets/js/58.2f7bc410.js",
    "revision": "40a89a82b8ae52de59ba731c55a8f2b9"
  },
  {
    "url": "assets/js/59.02f4ba36.js",
    "revision": "8cda3dc20429eca5aca52362f39fb0b1"
  },
  {
    "url": "assets/js/6.7785ba45.js",
    "revision": "ec126c70f76de5f38a85ef622a33fbad"
  },
  {
    "url": "assets/js/60.a9ab7792.js",
    "revision": "79bda478370f8bc6649c505430c16704"
  },
  {
    "url": "assets/js/61.919e5138.js",
    "revision": "b58c8d26663a3db08d98be39253eda89"
  },
  {
    "url": "assets/js/62.4878b1b4.js",
    "revision": "8bdbc3bc4d1d14343c5b7c29adfbfc8e"
  },
  {
    "url": "assets/js/63.85248506.js",
    "revision": "97640a422c07f1d7acf43e2728a00240"
  },
  {
    "url": "assets/js/64.155be54c.js",
    "revision": "4c82a64141426f740409a25a435360a2"
  },
  {
    "url": "assets/js/65.9d905810.js",
    "revision": "f5039777ed57a976f40e09cb6f00f856"
  },
  {
    "url": "assets/js/66.7101cc5a.js",
    "revision": "11717757185c042be217a2ec18ea4825"
  },
  {
    "url": "assets/js/67.ab5b2cf0.js",
    "revision": "d9f747114fa5ac4f4f05ec5b7d00e3a7"
  },
  {
    "url": "assets/js/68.dbd5a167.js",
    "revision": "2f82c54021c367c917974937ea908d36"
  },
  {
    "url": "assets/js/69.e9edfaff.js",
    "revision": "392c47cd9ffdb7fbe4aa6ee42899e6a9"
  },
  {
    "url": "assets/js/7.2c0271a7.js",
    "revision": "fe17b77eac05279a8c9affb96335a351"
  },
  {
    "url": "assets/js/70.f8c2faf4.js",
    "revision": "db95c146bc6e1b553b13994328d1004d"
  },
  {
    "url": "assets/js/71.0bebded4.js",
    "revision": "54394d35a7fc79c61c5c44b337d3d87d"
  },
  {
    "url": "assets/js/72.da5b925d.js",
    "revision": "f8597e992d4705561411d53c4784edbc"
  },
  {
    "url": "assets/js/73.6dac5b5f.js",
    "revision": "f236cba11a4991ec8451dc55aed4c408"
  },
  {
    "url": "assets/js/74.c46b9418.js",
    "revision": "0730b08a093758804515fc5cfc37a1b9"
  },
  {
    "url": "assets/js/75.aead22dc.js",
    "revision": "f9836456f66ab604c36dc5baf9d0184f"
  },
  {
    "url": "assets/js/76.1a08f8b2.js",
    "revision": "ada7904d0b95d02360847873d735b07a"
  },
  {
    "url": "assets/js/77.b7a82fbb.js",
    "revision": "ccf0858d2bbae295fb3262d78ce7142a"
  },
  {
    "url": "assets/js/78.1ca608a6.js",
    "revision": "60fe80c9dcfb13eda46aab2715369e18"
  },
  {
    "url": "assets/js/79.f1338f92.js",
    "revision": "7b68caa411446765fefa723cfe2bcec5"
  },
  {
    "url": "assets/js/8.4d4f85f7.js",
    "revision": "31e9a2d8ac0f149ed29d55e3d1a7626c"
  },
  {
    "url": "assets/js/80.28fda9f9.js",
    "revision": "579741f6b1415c36e29f9c0cacd3c141"
  },
  {
    "url": "assets/js/81.5faf3b61.js",
    "revision": "b872aa96968cc19308049f04e37e966e"
  },
  {
    "url": "assets/js/82.74d827ef.js",
    "revision": "58f8016c0ba22ef8dd5ab9da91b296a3"
  },
  {
    "url": "assets/js/83.f283b59f.js",
    "revision": "f2f6ef0baa23eccd9584d7977df42772"
  },
  {
    "url": "assets/js/84.dc4bff5b.js",
    "revision": "3c65bb856b520df45ce91acca044f949"
  },
  {
    "url": "assets/js/85.283461c9.js",
    "revision": "5e39dbd07e9bc3c8859203a2bee14193"
  },
  {
    "url": "assets/js/86.9502716d.js",
    "revision": "64eb51450b355c19a345e6b489111a45"
  },
  {
    "url": "assets/js/87.89f6956c.js",
    "revision": "d5680fdb2bc2a7d965557bc39641e200"
  },
  {
    "url": "assets/js/88.beaf1753.js",
    "revision": "b57fb34d50e1e13363459d26a9f483c7"
  },
  {
    "url": "assets/js/89.5f0f0685.js",
    "revision": "1b7d4382cb903bbf216b26c1c9768a30"
  },
  {
    "url": "assets/js/9.df19c560.js",
    "revision": "ba8d1f14e2da71e11efd7479fb865a1c"
  },
  {
    "url": "assets/js/90.3caa9f3a.js",
    "revision": "ee8b1b59aabb6c55abb3a928ab6c5e6f"
  },
  {
    "url": "assets/js/91.a2895f7a.js",
    "revision": "075c23438a89a8e557f24aa813c66825"
  },
  {
    "url": "assets/js/92.9bc227a8.js",
    "revision": "7375e019cdb780d474ac5be29d0e7a2c"
  },
  {
    "url": "assets/js/93.52253ed2.js",
    "revision": "ad606a349923c3dd92bcfcf7923e2a18"
  },
  {
    "url": "assets/js/94.1ea654d5.js",
    "revision": "e508d36762d1878246ade40732064e1c"
  },
  {
    "url": "assets/js/95.7b366bf9.js",
    "revision": "4657f02b014883207e636e707c91407b"
  },
  {
    "url": "assets/js/96.2b00c280.js",
    "revision": "ee9163c8c0c1125dcdda55aa79758b5e"
  },
  {
    "url": "assets/js/97.53d0a4e5.js",
    "revision": "3ce821fd2a1564dd6209eb52831a141e"
  },
  {
    "url": "assets/js/98.958af27a.js",
    "revision": "9878a73f7ff01eb03188e0a51b0ed3de"
  },
  {
    "url": "assets/js/99.1c923e50.js",
    "revision": "7bae88802b86d9d26c4a39d36a0c8acc"
  },
  {
    "url": "assets/js/app.cfb45b8a.js",
    "revision": "f1eff952f5831ba2dbbe14d9963df8df"
  },
  {
    "url": "index.html",
    "revision": "4eff2bf23152c15dce220202b4d35114"
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

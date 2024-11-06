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
    "revision": "962ee6a56ccfcb4d72aa7e07344eacc0"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "30abf862ca8811c4955ad3992e65d187"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "1a8f83a468aa3df80670481f2809794a"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "9e3131d322d32426280420502c86a3f5"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "b837fcbed9d0864744ed3b653ed986b9"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "66a1f727978e185e2422edce5d98799a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "f3132dfcc10a515a4da678aac8f0ed6d"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8aa1ff64adb7bc6115684a8be5868537"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "28239dda30f9e7dba2033715b2935b44"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "d70ab067b3b2d39c66f7e91a1e06a0dd"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "daa77674cb33c7a53c0ce6a596fd235b"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "79b8a3cace8eae2cc2a9de0e49ef62ae"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "bc0eff274a267fb483244b6aa9413159"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "98f36d2e550977b0a1ebc8517e94b385"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "5e28329ffe8f44b3257f4d28acfdd997"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "fd1407b9132f1b16989c7175886ac590"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "36e8bdecc365a7769cf78cf569b16fdd"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "ececc30939b572e3e7fadf58f709cce8"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "fde9d14c0feaaef90e689e4476e92ddb"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "846ace538258c87550f0098af108bfa5"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "b024e9bd437f5f7f001efff8d0088600"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "32114d01a8fccba576763720a04badf2"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "7895506e15941e51587c52c621a6107d"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "b751628b78aa4741165dd0f62fa75a03"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "b13ab94a0317703e05115609b5379bc3"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "30a86c6bc2d432bbbbf770941b3c7887"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "eccafbc876ac2312a536fbb41f3bcdb9"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "2eb4b1a8f2f5f49a5e7989534b9760b6"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "d058c6333945a604be5f589491718b0c"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "20a307f7f61a08c8fbabd99ac27eb025"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "520a5fb318c99a8df27c2799b035683c"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "23751b58e3f1093c1c6e1399b4db0a55"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "27c9236dbab16ce0d5bd77e4ce6e837e"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "7cff62b4461d2ad2def0be8160c79251"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "6df7a25ae1cf3b53367da0e44e851dd8"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "efe939b48f5110625b98a4ba815313fd"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "1a1c3a271c00705fa7d969191495f2aa"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "9e7b7c9ddd7f6a655e223389f7bdb8fa"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "3940e122471d7e9bc74f8da0de0b459e"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "702b5542ba34e65c2ba72f4696058e92"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "a8551126ddd7751febe7afe827a4e3b3"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "511935ad2b5a3ff944f7cb2ed27113b2"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "e8e838a949724f150971c835d4d35658"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "d53fa90f8a47588db08ad6db010d770b"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "38f9b22201712fd52b2ac7e8f5e6f9fe"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "31471018b7dabc7f4e8b9060c92f4ba3"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "a9f5639e8b1ac702f85f885b5e64a358"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "3d561b23f7b557d240b14754fdef4b50"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "71155287c6fb30f48f8cd850fadba0b7"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "61c176ce0b1a0147bd46f86ed1c9dcd8"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "4adb8662be157eb7dd06896313644ad1"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "990fe6b1a7995695bf6a0830d45fe390"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "0dde79f0ced85529195f0f4ea52d0af6"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "fe83a2dbdfeae31530caacd50e7da9c1"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "f76fa13f830e8fef83f2422fcf1beb9d"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "be77ccf5726036b8d1e8dc9fd14dfb97"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "df36073568aa9b9f619e9cd00a3661e2"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fcf0ab025886bd52c76d6b220c1aeba4"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "91eaaad69bea5a342dd62465a0c06e31"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "92d31924f2ec9c6816d6614e31ce4213"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "0a90a8bc527e82274e92c65f9ee844d0"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8eb8aa60b693799b542b8fcc9616aa7f"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "882b9021a8575dac4e3bfac684152121"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "9e2897f8c7a60835e39c332713d20457"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "3884a54fa90194fd5bd54ec940db9ab9"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "a974e7528c7ec5e25beec9c3ed316ed9"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "cc0de38f68a895d89c19a4a46da91acd"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "e15e2637e05429a5a704118a19ab478d"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "a2c23b619463be593eb7b87493a2e33a"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1f652c6ce183484d933ba642c36b6d17"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a0c608da4f4ee20b5d2a45506dde5cfb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "8b2b8e458b567cd726f056475bcbfdaa"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "122b057f6d30f50925891132e854ae91"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "db3664d3edd16d35e619219d22258196"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ed594c7ef6ec308ccb87176b5f986a17"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "cf6e2cf6bfa3204bfe2bbc9d957eeee6"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "2b83bfab0258d6d2a493e551cfd3cc3b"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "c3f0538b7d5716603b3cc30a83344338"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "d838e120322766562951a56d6e873753"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "7210293dde16cc4072c527bc26e9a768"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "c04cdf96925c234af54c4714a4f27a18"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "2b3286c45d61c9470266594b5abdf366"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "9f96205ca2b235d3a3c10c8105f1be83"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "f6003cc90a07265b2a3e0ff973309b6e"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "b3ec55037f33a8026c00f3548380997e"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "f9225682d32f887086dd364bcd9f561a"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "dab5ece3fb8fcfa3f6cd7e5cd3a26cda"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "50f378f06b4f09a2d1ea7d1f36bf293c"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "d3588179b0dacc5f77c6651cb2994f64"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "13f24fd37ea13b06227c7b50427e9176"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "2ec4e6599b120cc28c4d9540b5568d52"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "a8eca298f1091bdf826b3a507b76e4a8"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "6e1e093411eac411d7b60b6163f4a51a"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "b99741b5b4080427082f3237fc91fbbb"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "587d176a255bded72d8001c8f90a06a2"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "7b88c3d271651b30f23f48a8fadfbc57"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "007404cd9f11a765f3ec963ef628fd02"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "75646fd7ce413009af031f84688c0d97"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "ee208410821439545f8f49fe79555c7f"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "e53b70fc3c3a960e0930d7bec872fb1c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f13f899bd4a36ac77e8042e4a37e03a8"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "fd22e7ccbe35130e9360d445439e7dc7"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "607bf79543c0ca956dba3cb6d798cc36"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "292da936be75dcfde8fbc04944fe7ddf"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "742de47a1823c7cfa575a5901b4b0171"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "7647322fdf973816f973d189f5c48a3b"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "7f54ab538a90b33a14609c129c7c8145"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "414615570f54f084600af048e7b32f74"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "30f4afc18d1b9543efcfdfcf2f7b3844"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "652dfad95a35919ac4e0b33ac189a78f"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "c487cb6c7c0e05bcadb83a09af553fba"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "94cac8a413efcb0e1b59b3b25b6bd8ae"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "4b8330ad6eb25ed0e61e3cf7864e8e95"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "734a4fcb36533c7a091d667dc55783dc"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "38e4fa83f94c63547149d545dc7b95bf"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "de513cc08ff60a4a1bdf96650e17536c"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "daa587f366e26a7357203b6f11a2cced"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "ebbbc8dcab8151cf6ec05987cd29f344"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "6411e3825bfea64385c30c0d553e1d0e"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "0396e347943fbee592d3340a49620435"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "76df012546310e4db1e2e1822ad0036f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "c9317a38f0e2afc181e206dca11cd55a"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "84e3052d9daa4f7955df0ba2a5e4c692"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0e107e6aea5ce64afbe16e91c847db0b"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "c854491984142e04fe2440af57b07ee8"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "1b50d9341a7f5d0e1fc31f4baf9260bb"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "810cb929e7915b004228fc8dc698e3e5"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "811dec9db89a7fd1296a8d2ba0b89615"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "ae210368c4d7593c05318b0a92856f5d"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "552b8f31939cc6caad2d32e567009b2d"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ed9692f63a85a5ac1e9fa4278bf362aa"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "828fce25e543db3b485c78b47cb3ca6a"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "5ca63053d26e36f46713073706c569b8"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "5eb16c2373b2a3e5dc0588c41900f6e5"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "9ec1f91fd92df5b9dbe397a0bb0f3461"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "72407b5d0e7cb2688f8f7a71477b7786"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "c92f3289aec29742e3b060f48099754e"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "c0d6ee2b48275cba05e8243870ff82df"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "06b1c323198b7203bdab539cc2fd08cc"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "9de7ba4cc65ddf15bdacc7843378d1fe"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "296cd00de98833d0da4c239ffcff81b5"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d6b9d5299cea908be41d8aeb9169b989"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "c2aa648a98ca621cc32e19957132bc22"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "5d013eecfa5cbc7e1a471e07357eff8b"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "9d39502468876752b0813dac7d47bc7c"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "9e09ae6eff77b7c8c841612cc3710f12"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "fe6928f300d82aaa777f9a5f73aa67ed"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "327a84ef989bb8e801e9816500da62c4"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "6809e9313d86b0747f18c90a1d9ef247"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "bbfc3e8f0cf10119f1d357e3f3bea88e"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "eb856312644da46aff35673b971ad688"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "2e23785a937de676130c72fedb50b08c"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "b3d60947a4c0c865faf7d1b03d851580"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "14098bed141f616ccd9f6f376dd20ce4"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "505721997b447b6bcbae148532bb39d7"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "ae49a535c62d18348ad0c4bfbdff8db3"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "1b19e140b6ae05587b3621bb438183ca"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "3f0d60d1928ab75dc777ac38701e9073"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "477db3597df63f30de556d9c516de30e"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "4d81e21903eaf4abc85ddb240743a6ef"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "ff5deb464d7a9e01f7ccbe0f41cb002b"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "15a55d960aefb07ef8a8ee4fc7260bee"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "6a71560ee377ed86dff0657de1215656"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "f37a5fcda7c414b915595972828b7cee"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "76852a16eb6bb4cf58d8275fb481964d"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "cb9149925f5d082ca55de320194cf90f"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "c04e39a47c4be6be68cb52d1fc64f670"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "002e1cfe758f6629e8d7a26092228563"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "ca18e6d2f2a0ed07668afe6a7e470ae1"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "6eaa92bab14ac396668903a6878022de"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "fc1b43a7761b2fc1a3fc9e78eafc623c"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "08619c1fbad0b33122270b65acdfc414"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "7810392c513f916065a32299192cc85b"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "fe94800a29d86da4722f1ec1cd57093e"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "1c01dda5a077cbd276a4b3d740ada7da"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "90708c42d22f82aeaf7239f10a80e423"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "11abd489a3a5131d45f02e22d1d49f42"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "f1ec7f32d81a3f3417c8a8b99a69a0cd"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "a045289a73071dda585ff76031aa1dc7"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "5e94bc36c33eea0979dde6e47977edf7"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "445e4d1461a078de0084a03374068ba6"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "e98be1704c6e7b9b1c3f0a08c3fac5b0"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "14715d89b4406ba3523f5bca8c4d9b2f"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "dafcca358d5b4cd14c892b796c099597"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "b5d8c26bbc65595c1eaeda83060dbb7c"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "8b27af3d8e662e45e1d70f9036aefa5d"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "aa3a88d085a16205af3e8e40621921d6"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "1966a9daf13f27b74314e2e43c38efda"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "735edc51c01e30db26b1e1284eb3c6b9"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "9584b2713adb4766be1c146bd6aaa861"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "439311f5aa90088181988b1be106fb86"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "762b0ee38fc32d9f362613f87b484ec2"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "fa71390d1de2e852d95cbb2de3aca4a5"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "fcdef41e03286743c4a801d6f5caabe5"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "5f0b86867261195d0fe32aea05a8c2c0"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "215f1e07218c933aca05f448028551c5"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "2a4101a811c08a7bc311f02e71ee557c"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "eee5f489a50afa2dec3956b5b85a6e6f"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "b19aef2090b9243f6a4a0294736888a6"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "983387c6ce44204fb5806e0f49b1f4f2"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "71e1a21ef04b88eab74821992d6c5b9b"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "b42929490fba2ae38f8efabd2f29b413"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "1f15d664399068f1c710f67338d9222d"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "8f72ea3487965b3cd4022ccc7b3a41b4"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "77fb323a4327f44f7fdd9f826cf4b96f"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "030de016b43eba51da5374850c08aba8"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "9009bfc1abc0fb6593b9474387c97620"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "fa6f87ac3ef84dc87ea253371b2934a3"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "b6e7dc646f8c6673eb7ec335d1e029df"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "d6fc1722492c68054eee06b7bd8ee295"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "ae3649be6fb903f77f19ed961a086e69"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "51a325b41b0a83cf168ed1236d70016f"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "cf5dbb8edc3bcde728b6d3f566e2ebe4"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "9afaeb961557ec1f9f382de495657458"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "df689e9f3977a5de78cdcd78262f70d4"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "77fb481650acf973ed59b0ea933942e3"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "373beec9009903c567e89448b5928754"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "fbac24c872621f830c9f901bc75f75c7"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "c0133599826cdd768ceee6e70847d875"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "444fbd2d6a01a81bb31b6731c6567148"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "55282d2978abeedde81f7ad44bd4c698"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "795e56e4db0d514bee6692906e180b63"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "b29fa0e706b5c475eeb711502ccc5754"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "e9f8ad197c7bda2e3ae662dc254198e3"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "98230cec8674eeb3b2d4b2b25f55f0ad"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "300dd3a18cdd11ed55108b49ea42b42b"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "5295d4fe3e323f9912bd6be93d3f2950"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "5bdb37d896dfc2d8f90e2d9004f6d255"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "e4d4282e9df25f1e62c4653f053da645"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "e8886a69df1bf812d3d6f92cf91438cc"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "498201dd8e1f1fc548b7a24a6aeb9a69"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "c39eb083db304f6ac15e57582bcf2ec6"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "92c9aafa81291bccc1936d7edcbba19e"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "6a865823293961b365a0328b1e3e210b"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "4b0d5390094e88735a6c5db0d652a521"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "57db0f957ecb3c4243910d813ab7625c"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "09c4e4b97d1cb57517d2c66427ea9422"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "51c12993dd8dd0b99340a852e8ae2d04"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "0414442451b136b27d5535ec3404b5e4"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "44fd0cf2d763e48c22a0bfb7dfaedbb2"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "cf64d4b7e0823ff5bc972dfdccc1ed7d"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "f171916f65e5c3b4698959b9d54a8343"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "40b81865fa3407295a7599d9e6fa25a9"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "87c62c3c6a41fcec4fad3a8cdf9f5ff9"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "dbec5b669ca70edfefa87cb71080fd68"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "1bced46cca816fcb5b84f828777dfa50"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "19c91a49b620898216cc137c5bb3fb96"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "e3d49b14c6debda6ac2b838e59fd5bdc"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "cf86d5024821fd72da2efaaec42f7de0"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "8e0d9733c6858f2bac1b04fc55098f30"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "22cdca5e0e6a086ae3db5b129ff1e0f4"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "2e83f44d44090f0bada1798e0160207d"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "d2d03c0b5500c06d524c4d63b503c03a"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "3a3d22ebb2c7bae85c5ade14cbfece07"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "3f8b65a0d7974b1fd66a8096ec13375b"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "d9fe6630bb936c9e713466798b9e4ea2"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "cd034ab9a4020d5679313a9f62c9bac9"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "2f250b59f5aefe3895beddf585204ff8"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "14380eb0e8a421d83317b0d86379fc53"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "51ba32ac572e02f509ed7ab399286a69"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "5722261672f1e0b6dcecf16b2784cfd7"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "0e9448a20814311dab5889dab6db9cf9"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "ce219671de7185c62387210996846001"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "a2e2fc766ab5cd8813dcb9f2a7a97d13"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "745b3e0b2655b0da298425f28ee93a5c"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "b8c9f75c1a5503b71b78d623e82b60ea"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "a94e11b1120629658aaee1fbcbd4f360"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "d7979221500897a0536a5e60f47b926e"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "13844320eea1b69a48528553e942125e"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "5f20acc0976804ba1e869712582a588f"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "4063d24036346dae51d0d99e9ca84732"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "835fbb25da1968e7e75023967efb69c0"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "117fbdfe228b972d03a8b13d08e0a920"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "5ef83f6b6df1a4a796399dccaa0bed9c"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "56115ed313300d53fdbf9608f49e0216"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "493065b56bbb08f58b6771379df1afe8"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "b5f078614b8022a1aca8427e9e56db72"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "bd811d4797e4db430b151e0f99a3f75f"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "2a5fbc5fb92a9e46ae7ba54cc7f72fae"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "aa77e73a0f10e6db65d26365fcf38ff0"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "5781984bb5f065a24ff06ef2c6c0070a"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "3bf3b3b063bf673b2e93e55a249c7572"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "19c1aa0a4a38185e93225e62318a6b76"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "7cc00fc395c4d2d03ed08795df5343a5"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "797dd27e7009b352bd3837e9dd382ce4"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "c20bf42105d1dfa6851e5acb488c3e87"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "59634c255a3fd415c1bd8331b17eab85"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "7bb3dafd8bcdfa6e751155b474413c12"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "d7ea36bb3cfea7cc6e6ee3a06650c547"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "acf20ed175440de87f50799106dc4aed"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "80ea41d196d1ec29788152090d90a66d"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "faa9d1f57ae41540d7c7e94c0a9977a1"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "900c69dbb0b296929ec27610518a6274"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "b2c9cc6c16d1c15dbf2abeb4a1217b52"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "8fdf0059efc001df070f9723f495440f"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "b3004fd6085c54316d2203419d3871e5"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "c96ff8ddb76973181c51d9ac14c533da"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "3f43aa2e681fb43908a33fa6bfa480da"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "f9b70a15ff71412ee99805a727eccd7b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "dc844e463712526f7e8b4bfe34cae3f6"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "edeab47da9687400a6fa3b6ad5c58ae3"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "c0887f9389f323427cf35454f4877788"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "1746e16f08182a8c278dc3d754bc6f59"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "041c7d3c84d98b451e930694a707333a"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "33701b8b0deae6bcbc6bb24e6904dc74"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "165816991f2591c226de1b6fed812694"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "407f5c211fb0c89567ea7d29f0928cd9"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "feda0f2ccc056063535ca44381865465"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "53484ac01882d4b18b1ab0048342e453"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "1e4f3f5237ca660cf9f89bf433415688"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "a4d52e8e1434af52693154fef7768774"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "0a1107b641d7bcdd585ea412b2aeb4aa"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "5474601d17d8e2c45e85a15e8eb42c5a"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "10a9fc1be4f2123b7058b76279618ddc"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "c4ff037ac606bfd54520bf0fa177ae68"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "a63ca6de9347f634adaf99228f5891a4"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "62a08b5f0b0f809071c1dea7414bb01d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "0cd45938931159d6885636badec9003c"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "e42ed5d77d3bef51656bdfb835936d10"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "043623fe88209cc38902b78182406581"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "80b8bda8330cbc8c72a6482afbeeaedf"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "7ebaf67e04c4b5d06705bd7fe1e2b5b9"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "1a3a307de3129e951b18db1336009f9c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "f08d21afc46ab4cf5431da83e92dbce4"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "d1da8885e850e255ef390123f7bf63fb"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "8e1375404e827c5414c11f4782419b3f"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "24fa47f4db2e1ddd04b0c656bdd46cb9"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "15f3d37db5634dea67161c8f15faff0c"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "0f4bc9edcc0e3caef083538d4f7b5684"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "42296674370e07a8188716e3134e2702"
  },
  {
    "url": "404.html",
    "revision": "6ea4ba8f811822b856ce3fbaaab4d01d"
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
    "url": "assets/js/1.c221fa01.js",
    "revision": "629eda5394e941a87bce0fe900b1b47b"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.98fac64b.js",
    "revision": "40607203702bb1b83a3ec3b89a850074"
  },
  {
    "url": "assets/js/101.0e865dde.js",
    "revision": "1c26147f9512ed4fd608280f4ccec371"
  },
  {
    "url": "assets/js/102.32da362e.js",
    "revision": "f5a4a123e4fd5da415866e4e918965dd"
  },
  {
    "url": "assets/js/103.7d749b9e.js",
    "revision": "b88ce408e6d4d701878cffabffbce678"
  },
  {
    "url": "assets/js/104.02079c2e.js",
    "revision": "4646eff9b742f24356a1b59bb0c1377e"
  },
  {
    "url": "assets/js/105.1ea7e793.js",
    "revision": "56b6d853ac0047ef70a2af3ea4f2cc85"
  },
  {
    "url": "assets/js/106.f28352fe.js",
    "revision": "9ff34d200fed8290710cf7ceb165a1b3"
  },
  {
    "url": "assets/js/107.6b5b4082.js",
    "revision": "1fcd041d6f7d1f7aae75d5414f52b43c"
  },
  {
    "url": "assets/js/108.8aa12172.js",
    "revision": "636a77cfe260b51b0fb032ac3a42f865"
  },
  {
    "url": "assets/js/109.b27d066a.js",
    "revision": "67d59863fe0219fef4f5ab123db5bde0"
  },
  {
    "url": "assets/js/11.589caf18.js",
    "revision": "b30a8573a21bf4c5cb36554520719e8a"
  },
  {
    "url": "assets/js/110.022deffe.js",
    "revision": "efdb4c079364f30b41be1ffd39303aa9"
  },
  {
    "url": "assets/js/111.a6145704.js",
    "revision": "d2c5a5a0e188d4aeb6cd9befbd1be5f2"
  },
  {
    "url": "assets/js/112.22e33d42.js",
    "revision": "e3420b0445f8f5386b16d15f06f4adf1"
  },
  {
    "url": "assets/js/113.caf50036.js",
    "revision": "e384084b449a1295c22cd92d791b694d"
  },
  {
    "url": "assets/js/114.d2373d11.js",
    "revision": "bba39ba781d4a7f50ae28c2f308c10f4"
  },
  {
    "url": "assets/js/115.a23b9006.js",
    "revision": "16130061a0a622e8066d27e06e14bcf5"
  },
  {
    "url": "assets/js/116.ec5e70f2.js",
    "revision": "a6713637db22ad06c06be7a85d665f5b"
  },
  {
    "url": "assets/js/117.b43e51c0.js",
    "revision": "75dcd7da8cf1a7939fb24cdedc5e975f"
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
    "url": "assets/js/12.ffb79c3c.js",
    "revision": "116ca60d4b24eb41276c2f4870f75771"
  },
  {
    "url": "assets/js/120.2bd284b4.js",
    "revision": "0d2182203d860ffad09c8fbc52e0825b"
  },
  {
    "url": "assets/js/121.8ac26daa.js",
    "revision": "2b4614fcf81292545db4c8c8a948fe98"
  },
  {
    "url": "assets/js/122.70ddf07a.js",
    "revision": "0f3f47bb6599a4a8ccf73a51bc7633c8"
  },
  {
    "url": "assets/js/123.54f254a1.js",
    "revision": "34285ef1956f09b3a96c63bfd74c03dc"
  },
  {
    "url": "assets/js/124.6e66ad78.js",
    "revision": "618daa22134c82c2d768395e3395c516"
  },
  {
    "url": "assets/js/125.a66636e8.js",
    "revision": "dfb72e3e5ebc820dc07b3de560da539b"
  },
  {
    "url": "assets/js/126.abb88bc7.js",
    "revision": "c0131c0e1cc7dc05efea99c3bd344939"
  },
  {
    "url": "assets/js/127.da79fd04.js",
    "revision": "240d9429c969497905ff170ebeb7d41d"
  },
  {
    "url": "assets/js/128.a0d30036.js",
    "revision": "636648639491cfe32633b47cebeb2063"
  },
  {
    "url": "assets/js/129.f952fe85.js",
    "revision": "78886b841fd01e832825f6c1e9cd431a"
  },
  {
    "url": "assets/js/13.db31692c.js",
    "revision": "e70c41c80785ce1f8cfba51f65462343"
  },
  {
    "url": "assets/js/130.a71466e4.js",
    "revision": "12e8c245881b0b8f80477443e9fd5089"
  },
  {
    "url": "assets/js/131.e9cb6f36.js",
    "revision": "651df35e364ceb8ce00544d6d7c9d686"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.39966d1a.js",
    "revision": "782676b8c28be4de4ea47ca5c8651260"
  },
  {
    "url": "assets/js/134.2dd085e4.js",
    "revision": "4dbf02bb70c60dfb0716b39b8f9606f3"
  },
  {
    "url": "assets/js/135.36f2c2f3.js",
    "revision": "a27a933b2c45f8fc7d55ae2af67bb17f"
  },
  {
    "url": "assets/js/136.878ebc68.js",
    "revision": "e19e8516877a670e326e21c075936d58"
  },
  {
    "url": "assets/js/137.1bbff9a7.js",
    "revision": "2bcca8e4e284ef0497ed95b7180e6743"
  },
  {
    "url": "assets/js/138.91a5b455.js",
    "revision": "837878e865795a11d4494b8a2c708b34"
  },
  {
    "url": "assets/js/139.9a5b2252.js",
    "revision": "7ef71a3b332d1e306f4a37c06ad2c394"
  },
  {
    "url": "assets/js/14.4deebed3.js",
    "revision": "0e2f598ec0597d1997d949be26456de3"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.72b74ec3.js",
    "revision": "84830da6a62b2b1b9eeb0d389a74c58a"
  },
  {
    "url": "assets/js/142.78e9515b.js",
    "revision": "bb106faf0f92b5e2f82111868801a301"
  },
  {
    "url": "assets/js/143.73a59bf7.js",
    "revision": "ce9b211429dcaa99bb95f3d50d705ed5"
  },
  {
    "url": "assets/js/144.828a0a88.js",
    "revision": "837a72d21cd30cb37b37f3ae9f818e87"
  },
  {
    "url": "assets/js/145.f93a3df7.js",
    "revision": "31ef87d485b795ada98ed102603bae34"
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
    "url": "assets/js/148.de28b431.js",
    "revision": "a7871d3e60cdc9caa26a167fb835ec49"
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
    "url": "assets/js/151.b92ecdcc.js",
    "revision": "040a7561e27cf89d934ccf991e8814bd"
  },
  {
    "url": "assets/js/152.8e13c887.js",
    "revision": "b2cc68e614dc10ebda21a854f16dd1b0"
  },
  {
    "url": "assets/js/153.9857c66c.js",
    "revision": "06f132bb50ce503b0e28601a1cb191b0"
  },
  {
    "url": "assets/js/154.9111c951.js",
    "revision": "4eade948b03ee6a949502e240b68e04e"
  },
  {
    "url": "assets/js/155.45a80ad7.js",
    "revision": "eb9c07c5b3272fa1894ce3b6c9d30d66"
  },
  {
    "url": "assets/js/156.63982553.js",
    "revision": "f5ac2bf7ff58ba21b4a60b357dc648aa"
  },
  {
    "url": "assets/js/157.aa69cb10.js",
    "revision": "01a96c0300f74b48b5453da92e2eeaef"
  },
  {
    "url": "assets/js/158.3b203f16.js",
    "revision": "4c69df09fe3aa1ccb5dd4fbe30be616b"
  },
  {
    "url": "assets/js/159.d6b91f4d.js",
    "revision": "c2c40c1b292b20c6c82230b07bc42085"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.c3dd0862.js",
    "revision": "4a028e9f5db384b3c71b10af786b9039"
  },
  {
    "url": "assets/js/161.62ed7457.js",
    "revision": "b831b7df619c0724ad1715325aa4c493"
  },
  {
    "url": "assets/js/162.bb874844.js",
    "revision": "bae04fe1381075b3dbaa60023700b3d5"
  },
  {
    "url": "assets/js/163.11e7021b.js",
    "revision": "c0b638a160ebe406d6c0399a92e0ed38"
  },
  {
    "url": "assets/js/164.77a36066.js",
    "revision": "d5678d209bbcd9395b22603dfd2daa3d"
  },
  {
    "url": "assets/js/165.ce4012ac.js",
    "revision": "25d4b80370292e6f57d96ab60862007d"
  },
  {
    "url": "assets/js/166.38d25b39.js",
    "revision": "f54fd8b702b78aa6d04ff65b1b266029"
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
    "url": "assets/js/169.b4c41fa6.js",
    "revision": "588f68e58fe1a46ab8017700c25c1d10"
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
    "url": "assets/js/172.7fbb9c11.js",
    "revision": "97bd85c547d030f8199b8443d7e287d1"
  },
  {
    "url": "assets/js/173.4227ec6d.js",
    "revision": "7487f2066c9c633ea710592e7e89499a"
  },
  {
    "url": "assets/js/174.39fdd174.js",
    "revision": "838d76c82532e0f998f5712a894c3d4e"
  },
  {
    "url": "assets/js/175.86cac7a6.js",
    "revision": "fa094450c2a4e8119fcd28c3708f9b01"
  },
  {
    "url": "assets/js/176.ea7fd02e.js",
    "revision": "66544807c779a96103d012594fc649db"
  },
  {
    "url": "assets/js/177.8f34d886.js",
    "revision": "8a7c4a04caa0b340677c4f59150f6cd9"
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
    "url": "assets/js/18.8158193a.js",
    "revision": "afc5beafe40653dadffc598008472d42"
  },
  {
    "url": "assets/js/180.82986240.js",
    "revision": "b6c7bd6a11921e4cd5f9f0a5e956292f"
  },
  {
    "url": "assets/js/181.3d2c6830.js",
    "revision": "ead9ffa792e1daccf24800307151ccb1"
  },
  {
    "url": "assets/js/182.c3aaffef.js",
    "revision": "7f05176b0e985a7f7ebe2384d103e685"
  },
  {
    "url": "assets/js/183.63fc1079.js",
    "revision": "f0125c6aaf3129ad0dfd606616f41ccc"
  },
  {
    "url": "assets/js/184.ff625438.js",
    "revision": "d7f69e6afbfca884c059c298002a2be9"
  },
  {
    "url": "assets/js/185.d34457f0.js",
    "revision": "e09c850d3afc200927f941905d7a9ec4"
  },
  {
    "url": "assets/js/186.a2808f5a.js",
    "revision": "bb5bdadac831087b23e31d9cfbea5868"
  },
  {
    "url": "assets/js/187.5bee7456.js",
    "revision": "573bfb0fc4d3c004a914b1b5e55ad8ee"
  },
  {
    "url": "assets/js/188.a935294b.js",
    "revision": "42a220fe6a2f27dfbcb047ad05071529"
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
    "url": "assets/js/190.293693be.js",
    "revision": "6853cef578ab20690f6cd391c47d4035"
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
    "url": "assets/js/193.df1e7a28.js",
    "revision": "b6eb54c400954e86bc23a641438dcf11"
  },
  {
    "url": "assets/js/194.e357447d.js",
    "revision": "2cc5d6b09c56bc1770af99e293c9f861"
  },
  {
    "url": "assets/js/195.4f9d564c.js",
    "revision": "07dc3036fb9d1ec1375fc4115c473b2b"
  },
  {
    "url": "assets/js/196.90c28467.js",
    "revision": "95581c7a2d7df2a8a742fbfe937fb883"
  },
  {
    "url": "assets/js/197.5f7814ec.js",
    "revision": "3b7268c9ea556a10de9ee206b0b3deeb"
  },
  {
    "url": "assets/js/198.fbdf6ec2.js",
    "revision": "baf7bc034a881f50b30dc3a32a9705d5"
  },
  {
    "url": "assets/js/199.47520de0.js",
    "revision": "48d0d094b152e66f4cfcff1b61f835d4"
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
    "url": "assets/js/200.c0b57e96.js",
    "revision": "6a8263b6ce56d79a7fa010da9e599e5f"
  },
  {
    "url": "assets/js/201.a470c89f.js",
    "revision": "cc6400f3dce0051f953d45a254e99118"
  },
  {
    "url": "assets/js/202.c309ced9.js",
    "revision": "dfd1631415bc92e0d7d6dde3e4d8c8bc"
  },
  {
    "url": "assets/js/203.be70b315.js",
    "revision": "fe921b956f645d1f66afe50e1c510297"
  },
  {
    "url": "assets/js/204.31c5fb11.js",
    "revision": "df3900b5c5019f2e09fb53c467b6a655"
  },
  {
    "url": "assets/js/205.724444d9.js",
    "revision": "13894dd937dd9af190763b0057d9e3fc"
  },
  {
    "url": "assets/js/206.328819b1.js",
    "revision": "9cab5095c31095584c76ee870726796c"
  },
  {
    "url": "assets/js/207.ce1f5975.js",
    "revision": "8a98242f65b22fc8418bff9eb5c9cdad"
  },
  {
    "url": "assets/js/208.33a26182.js",
    "revision": "4feee8efd8a46b1ece700956f599a709"
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
    "url": "assets/js/210.3264c2ad.js",
    "revision": "4703f779e42ce434ea17890737e7a326"
  },
  {
    "url": "assets/js/211.40da6204.js",
    "revision": "7b0cc403c45b4c24d2d499394f0db448"
  },
  {
    "url": "assets/js/212.c4a5ff2e.js",
    "revision": "f81f00f8f70e1bfcf7935f8cf72a0c2d"
  },
  {
    "url": "assets/js/213.bdb9e73c.js",
    "revision": "7cfab1bc8137c04de243b84540d9e1d8"
  },
  {
    "url": "assets/js/214.d733e4b5.js",
    "revision": "e5b002e3e59d2b1bf265af5a603eed22"
  },
  {
    "url": "assets/js/215.e7837b81.js",
    "revision": "988bf3e07f1f9931e7307ff0de4a272e"
  },
  {
    "url": "assets/js/216.22d85d43.js",
    "revision": "c6676a2c8165df9c7592ed6ab9c916ee"
  },
  {
    "url": "assets/js/217.f69091b7.js",
    "revision": "4a26ba4bb254644c6f4a3fa19dc2d8b5"
  },
  {
    "url": "assets/js/218.f8eb416d.js",
    "revision": "eaf339de101a77d860f47655dea8a804"
  },
  {
    "url": "assets/js/219.2fafaa02.js",
    "revision": "2aa9d1ec48161dc2993147b5a39e8f9c"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.9abec3c1.js",
    "revision": "152b69a121bfd0b0f6d03e6383512f36"
  },
  {
    "url": "assets/js/221.e2946bd7.js",
    "revision": "e5a5e51ae38a42eb25771706c2c8bd8b"
  },
  {
    "url": "assets/js/222.811a0022.js",
    "revision": "619570da2a4aae21ef1b91d4bd8deed3"
  },
  {
    "url": "assets/js/223.0066b62d.js",
    "revision": "7911d7928e56407e88b6530a69726996"
  },
  {
    "url": "assets/js/224.6d59ee8f.js",
    "revision": "c1af713e15462cddfb56cc6fbac57422"
  },
  {
    "url": "assets/js/225.ced8da37.js",
    "revision": "edc108144ad928dc77a0dbfeae1f9b02"
  },
  {
    "url": "assets/js/226.d8ccae80.js",
    "revision": "9b3ffda41d91b28ecada32ade06395a6"
  },
  {
    "url": "assets/js/227.a64e1695.js",
    "revision": "028aff6e84384d8c19d9538665f7bc5f"
  },
  {
    "url": "assets/js/228.5c246930.js",
    "revision": "69b703e7b894ca385f1ab2ff62a69fc6"
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
    "url": "assets/js/230.477703eb.js",
    "revision": "185cc5fcb5cc6799e45c7a8bd4e6c743"
  },
  {
    "url": "assets/js/231.60aa2626.js",
    "revision": "a1f0fa15e3524dea9be1f25c9ed72ea9"
  },
  {
    "url": "assets/js/232.e9ef3f02.js",
    "revision": "fea3d04e6848ce4ec55cd190622762fe"
  },
  {
    "url": "assets/js/233.da73ad46.js",
    "revision": "9c0f30a88b608c6cc809608dc5ddc748"
  },
  {
    "url": "assets/js/234.917ba950.js",
    "revision": "dbfa9a0d6b560fc3d716c70bb96d87db"
  },
  {
    "url": "assets/js/235.f69273ac.js",
    "revision": "3d2a79a599d4647c7c3863f47d0ca3f0"
  },
  {
    "url": "assets/js/236.bd165f92.js",
    "revision": "7f17b7fd77c6cae6f422dca395e26756"
  },
  {
    "url": "assets/js/237.6968bda7.js",
    "revision": "6db5fda82fc4383a25e6c842328d9492"
  },
  {
    "url": "assets/js/238.a4f01c11.js",
    "revision": "31efe0b699f27aa87766599029c94e7b"
  },
  {
    "url": "assets/js/239.5b69517a.js",
    "revision": "51b628dbf854acde58a5dfd15dbc0de4"
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
    "url": "assets/js/241.001cdedd.js",
    "revision": "0bcad0269d34e3d115abf3a0407868a0"
  },
  {
    "url": "assets/js/242.d8f9a99e.js",
    "revision": "29d4e6d3425edd25c99fcc969d4e7397"
  },
  {
    "url": "assets/js/243.cf953b9e.js",
    "revision": "69d4898820b093ec4123e58c8949acda"
  },
  {
    "url": "assets/js/244.33a916b4.js",
    "revision": "f3a8f5a2a3abfdc25b976ec5bf5084f5"
  },
  {
    "url": "assets/js/245.2431a2a3.js",
    "revision": "2e5259d9f8af53c2727ed222271db751"
  },
  {
    "url": "assets/js/246.30577e9e.js",
    "revision": "61fe378c93fdbe82573dc3689b780720"
  },
  {
    "url": "assets/js/247.630aec19.js",
    "revision": "b890c20211906be79f478c6d7b91ffc7"
  },
  {
    "url": "assets/js/248.d0eca37c.js",
    "revision": "415174e4c7ddaf0edd08cdc5d871f07b"
  },
  {
    "url": "assets/js/249.43228c49.js",
    "revision": "2410ce6b04d30f1bb5ef24c99489c090"
  },
  {
    "url": "assets/js/25.811676f3.js",
    "revision": "92e7a8cbcc4937d2e08b59ba12a5fba7"
  },
  {
    "url": "assets/js/250.e76e7f80.js",
    "revision": "2462f50161651b75fd1f6bedddf520b7"
  },
  {
    "url": "assets/js/251.14ae1035.js",
    "revision": "42b25c6a8ba8a65f1c3e579727ffd7b4"
  },
  {
    "url": "assets/js/252.18a1554c.js",
    "revision": "ca148aeb60af195f314a1839d9b768a4"
  },
  {
    "url": "assets/js/253.8450657f.js",
    "revision": "ff637562ebdd64db5549b4f1ed9f6e71"
  },
  {
    "url": "assets/js/254.4dd0a4fd.js",
    "revision": "b8fee56bcec80840a59f31f0e4758591"
  },
  {
    "url": "assets/js/255.d99ccae7.js",
    "revision": "678b7e8061db82fa97c32d62df5569e5"
  },
  {
    "url": "assets/js/256.c0b432ae.js",
    "revision": "c7213fd4969176429da5618e9239a412"
  },
  {
    "url": "assets/js/257.9b2fab76.js",
    "revision": "3234ab8e06df837efaf179ff02e58e1e"
  },
  {
    "url": "assets/js/258.817b9290.js",
    "revision": "4753bf94e8853f5d72038049a9fd8209"
  },
  {
    "url": "assets/js/259.b2d6a237.js",
    "revision": "0f02438d6bc9253b2f746654562b59e3"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.156c1370.js",
    "revision": "80f9423154b0ff1437a774e49bc32333"
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
    "url": "assets/js/264.fb109969.js",
    "revision": "53bb02d64637a57f1ba000bc903479f6"
  },
  {
    "url": "assets/js/265.80247018.js",
    "revision": "01e9df4b65fc62a9d54ce31544fa89a4"
  },
  {
    "url": "assets/js/266.508c7466.js",
    "revision": "d28288f46bc56d1ff7aa1bee038507e6"
  },
  {
    "url": "assets/js/267.78fcc9ac.js",
    "revision": "2421433be5767bf8bec70dcfb57bb9ae"
  },
  {
    "url": "assets/js/268.c9a3cfed.js",
    "revision": "9e3cba74bbaf09d7eb053db86abbf17d"
  },
  {
    "url": "assets/js/269.e0a36a95.js",
    "revision": "a448cf69a7aea70b7e146e942c6ba9d9"
  },
  {
    "url": "assets/js/27.b11ead76.js",
    "revision": "cad92440ec564e8ebb19d6b23bbad8c9"
  },
  {
    "url": "assets/js/270.8f30116f.js",
    "revision": "9810f152763fe41225242b42efe26ab0"
  },
  {
    "url": "assets/js/271.feef3b6d.js",
    "revision": "a5f99045233fe056c43d112cfdc3f461"
  },
  {
    "url": "assets/js/272.2753534e.js",
    "revision": "389676f99e83994f7acc87a9d8c02eee"
  },
  {
    "url": "assets/js/273.f14408a9.js",
    "revision": "78f12be5b54a2ba90c48fce4ba8544c7"
  },
  {
    "url": "assets/js/274.e7325e85.js",
    "revision": "626402a74a5068ff750c2bd8ac2864c1"
  },
  {
    "url": "assets/js/275.afb3444f.js",
    "revision": "74487809ad28166a762e9a011709d08b"
  },
  {
    "url": "assets/js/276.fa34f407.js",
    "revision": "93d7a1780c804c3ac2de8b7666f6b7c0"
  },
  {
    "url": "assets/js/277.b68afc29.js",
    "revision": "db7bc471f1d35a34db9e74726bbe4760"
  },
  {
    "url": "assets/js/278.ccb58e54.js",
    "revision": "823c389549611813f1be27d4321d00b4"
  },
  {
    "url": "assets/js/279.8e45a825.js",
    "revision": "7b8d173a30a22ed2662dc0fbd5d79163"
  },
  {
    "url": "assets/js/28.bdcf7e75.js",
    "revision": "65a9f8ebbe7f9fe18ba33c095a001cec"
  },
  {
    "url": "assets/js/280.a1be0ee5.js",
    "revision": "3542189579e61827c72425f3e9dfb930"
  },
  {
    "url": "assets/js/281.cfb8df59.js",
    "revision": "8ce5b064548244e163068777158c9afc"
  },
  {
    "url": "assets/js/282.43ce01f0.js",
    "revision": "c8942c4bf47c29117442be56d6d774ed"
  },
  {
    "url": "assets/js/283.49276513.js",
    "revision": "c4b7a8021dcfc2e7e87dfc2024caaf30"
  },
  {
    "url": "assets/js/284.76b4bc57.js",
    "revision": "7aaca21e0bb278fb238c78eb8c5f01d4"
  },
  {
    "url": "assets/js/285.7921975d.js",
    "revision": "fb74d808c793efd8b3d02a2be6b57f84"
  },
  {
    "url": "assets/js/286.f0d2b977.js",
    "revision": "95fe8c17036675d232ef3007f6689d6f"
  },
  {
    "url": "assets/js/287.7a81a7de.js",
    "revision": "9abaa14b23295021fc9b81db7c29b75b"
  },
  {
    "url": "assets/js/288.3235c247.js",
    "revision": "a57feebf588b07149ef5cb428dbee83c"
  },
  {
    "url": "assets/js/289.bce2b03e.js",
    "revision": "9110f17c3678fbc041a7af138d3824d9"
  },
  {
    "url": "assets/js/29.786e850a.js",
    "revision": "e4a05eab3a08dbe4e84fc89587145c4c"
  },
  {
    "url": "assets/js/290.44dcab04.js",
    "revision": "abc11d063ae708c9ac0f95381ff36ace"
  },
  {
    "url": "assets/js/291.62c3805e.js",
    "revision": "68db7769e8cd8fb5594b8db49f50d2ad"
  },
  {
    "url": "assets/js/292.a9fd1512.js",
    "revision": "06d9b32ee439f5f5a9fc02276241736d"
  },
  {
    "url": "assets/js/293.909e9c8e.js",
    "revision": "9b4a8aa948e109992aa0f8304aa4d153"
  },
  {
    "url": "assets/js/294.a70c5b38.js",
    "revision": "83335de0154139e76376fb7e35ee9527"
  },
  {
    "url": "assets/js/295.719ea88f.js",
    "revision": "da5254c7c67faea861fa945f4c97a42b"
  },
  {
    "url": "assets/js/296.2de99a33.js",
    "revision": "824ea363653c66b6f5f1230ad80a324d"
  },
  {
    "url": "assets/js/297.038cf132.js",
    "revision": "b9b6d13ceedc15bc2c9c2fc43c845259"
  },
  {
    "url": "assets/js/298.2c1845e6.js",
    "revision": "d84622cc265265e6f325e972c3b69977"
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
    "url": "assets/js/30.dd276ea5.js",
    "revision": "77a506ee1ff5c2e0ede539b6d85b7531"
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
    "url": "assets/js/302.f56715e1.js",
    "revision": "3c2da7b3a92e06f8a2f3498fcd2bc92f"
  },
  {
    "url": "assets/js/303.3530f547.js",
    "revision": "16578e115c5ec6051d2aeb75c772b6ce"
  },
  {
    "url": "assets/js/304.0121ac08.js",
    "revision": "8a93defaea40995476abc611d81cee9b"
  },
  {
    "url": "assets/js/305.6ac1fb97.js",
    "revision": "ee2adaaa2f7183a7ac7f604058e7a681"
  },
  {
    "url": "assets/js/306.89ce57ca.js",
    "revision": "a5e62c8b73247dd40058ac14b94d2c79"
  },
  {
    "url": "assets/js/307.e7ab4aa7.js",
    "revision": "54e3ebcab9e34b8d0f22db94ea9dc9f4"
  },
  {
    "url": "assets/js/308.0e00eda1.js",
    "revision": "11495870f735337e4cec79ae1dea1c46"
  },
  {
    "url": "assets/js/309.7bc50092.js",
    "revision": "c8dac9857ccbfcc9b4ef553c35868884"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.74000acb.js",
    "revision": "1c38c64ac1d248ca32fc31e24c42eda4"
  },
  {
    "url": "assets/js/311.6349061c.js",
    "revision": "fd3658b8cea2559c0e8d64329ab24f80"
  },
  {
    "url": "assets/js/312.3e5e8c07.js",
    "revision": "b3bb60623c422a7c227f9ffde1930f92"
  },
  {
    "url": "assets/js/313.2702785f.js",
    "revision": "802aa8ba6829c9639bc06a9474244c04"
  },
  {
    "url": "assets/js/314.ed0a7b44.js",
    "revision": "c607590b967ac4c67237653eef837a7e"
  },
  {
    "url": "assets/js/315.1023440e.js",
    "revision": "f45608552873be3f5310674b85084b52"
  },
  {
    "url": "assets/js/316.0fb2ccd5.js",
    "revision": "477fb10ec08e88c2f49b12762b38468b"
  },
  {
    "url": "assets/js/317.6ff42dca.js",
    "revision": "adecb978db338aac4a0acd5d5a1a4ec7"
  },
  {
    "url": "assets/js/318.4f8b0476.js",
    "revision": "ba89d3cce1ecee46d202d49ff47146c4"
  },
  {
    "url": "assets/js/319.b1e24fd1.js",
    "revision": "13c02b2f05c6abc896e96236e9e8a7b7"
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
    "url": "assets/js/321.a3bfbc8f.js",
    "revision": "b18ca55ff3047eaaa36cdd1248f49132"
  },
  {
    "url": "assets/js/322.5567a74b.js",
    "revision": "63ed9cd0b659412b117d075c7ca4f2b9"
  },
  {
    "url": "assets/js/323.eb47bc63.js",
    "revision": "abf262798275457ef7d603fb88976ed0"
  },
  {
    "url": "assets/js/324.fd5c5238.js",
    "revision": "ba5016561cdaf23a05cb7c7b88de3fb8"
  },
  {
    "url": "assets/js/325.264359c3.js",
    "revision": "16f493aba0b1435c26b7ae64acf7da63"
  },
  {
    "url": "assets/js/326.c68258b6.js",
    "revision": "c64b45e225b3ec03e9070e23538403d0"
  },
  {
    "url": "assets/js/327.b6a1dbf3.js",
    "revision": "14d635e7941dd4d98b61e34f834c7f40"
  },
  {
    "url": "assets/js/328.d43145a5.js",
    "revision": "194260c892a8cd62fc008fa203dc26b1"
  },
  {
    "url": "assets/js/329.4088c1bf.js",
    "revision": "e4c660b58117e25104a11ff41f3d246f"
  },
  {
    "url": "assets/js/33.61b5a872.js",
    "revision": "bd7e4d18c54436a9b8747bb48127c593"
  },
  {
    "url": "assets/js/330.0aa72121.js",
    "revision": "529570568aeaea4566aeb240d5f328d5"
  },
  {
    "url": "assets/js/331.50c5b7c6.js",
    "revision": "0d8cf0fb44330c4e6a8b025bf3dad46f"
  },
  {
    "url": "assets/js/332.61174b2a.js",
    "revision": "5a4ff5e20e4a7fdee457acc3e8628a37"
  },
  {
    "url": "assets/js/333.7a899c33.js",
    "revision": "61e764deb854345c02829b0abcb2c16a"
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
    "url": "assets/js/336.2f22cc8c.js",
    "revision": "98a6988bcfd558155a194d7bd7305de7"
  },
  {
    "url": "assets/js/337.99ac963f.js",
    "revision": "f6786f4784a5544b991b0318c82549ce"
  },
  {
    "url": "assets/js/338.48750bc5.js",
    "revision": "ec500c8cc0eec8856610264ffb72d4e1"
  },
  {
    "url": "assets/js/339.f794a33e.js",
    "revision": "9ffa22bfc28d301dfe0eef2229ec14cd"
  },
  {
    "url": "assets/js/34.51c5df11.js",
    "revision": "52d97a98135f3875a6f7d5025fabaede"
  },
  {
    "url": "assets/js/340.9db2fe65.js",
    "revision": "1879d13cbd2e8dd795a97016e9ce5d79"
  },
  {
    "url": "assets/js/341.baec67c4.js",
    "revision": "1f2b19215dcebc713e82521a8bdb5f87"
  },
  {
    "url": "assets/js/342.795ab3aa.js",
    "revision": "1e9d88f5ec63e018a47ff131965d16d4"
  },
  {
    "url": "assets/js/343.b07421a7.js",
    "revision": "836c3776c2983c90b2836e5e5f168c1b"
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
    "url": "assets/js/346.51d50730.js",
    "revision": "507c4fa2a69718db187dbc68710914e7"
  },
  {
    "url": "assets/js/347.dc229385.js",
    "revision": "1122f7c8723f47e919e6be984468ef3c"
  },
  {
    "url": "assets/js/348.f8809df2.js",
    "revision": "158dc95a10c5462b73e94e3ae1d8540e"
  },
  {
    "url": "assets/js/349.cbc64ac0.js",
    "revision": "2f24196a3e1cb37b1ed71dd1440e66d8"
  },
  {
    "url": "assets/js/35.56f7ae85.js",
    "revision": "b934ac1d163452ea1120212dc596c45d"
  },
  {
    "url": "assets/js/350.78915a8d.js",
    "revision": "6e1f2165dd46f617c37e53dce5d9feb7"
  },
  {
    "url": "assets/js/351.6bfe2a62.js",
    "revision": "0bb5cc55faaf708a0b4e1c8a84473b1c"
  },
  {
    "url": "assets/js/352.529a78ce.js",
    "revision": "c2bfdbc698bbed2428851f2aa16346d3"
  },
  {
    "url": "assets/js/353.263f1601.js",
    "revision": "91376047bd724b672f123d812632f148"
  },
  {
    "url": "assets/js/354.8da51156.js",
    "revision": "f3eeb914c9ee35acf7b9625b3615fe79"
  },
  {
    "url": "assets/js/355.329e120a.js",
    "revision": "a442ffc6e53e1f0eb11e624a0081007d"
  },
  {
    "url": "assets/js/356.ed27d6cb.js",
    "revision": "c2e80d886ac8836a3f565acdcb2aefd9"
  },
  {
    "url": "assets/js/357.55141dbb.js",
    "revision": "eb8e2085d8e020d24bac35aaec542219"
  },
  {
    "url": "assets/js/358.d86ac7a8.js",
    "revision": "8d97d5d87a7ac4083537dc37e14be429"
  },
  {
    "url": "assets/js/359.e6e2b2d2.js",
    "revision": "04ef1030238fc00070d7aff145417d17"
  },
  {
    "url": "assets/js/36.57bf307d.js",
    "revision": "7add8c725537ba3320c3f75c201d5311"
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
    "url": "assets/js/362.f37fd0c0.js",
    "revision": "ff597b1ee76eb2dd09b66d359efb188a"
  },
  {
    "url": "assets/js/363.fe683d75.js",
    "revision": "6693be4b323f33f3baf27d62a29239ad"
  },
  {
    "url": "assets/js/364.753a7e42.js",
    "revision": "94ea8ba63427a0478031abcc4cb3038a"
  },
  {
    "url": "assets/js/365.09cb2e96.js",
    "revision": "777b6184c8bf91e77880c266d2ba8d39"
  },
  {
    "url": "assets/js/366.97d155dc.js",
    "revision": "1bc5cbc3494a0fe192ebc8997c7b524a"
  },
  {
    "url": "assets/js/367.c596021e.js",
    "revision": "1bc1f279fd7339286959591fd6ba74a8"
  },
  {
    "url": "assets/js/368.43f07ce3.js",
    "revision": "1ac7552e45d54c751a38e127f0d1dee3"
  },
  {
    "url": "assets/js/369.5eb759db.js",
    "revision": "fd7c75c73fd161e2c6217ec3034b1b23"
  },
  {
    "url": "assets/js/37.31289eb7.js",
    "revision": "72184a5a871d6ce555ea56059cc16b18"
  },
  {
    "url": "assets/js/370.f3cb381d.js",
    "revision": "2edf47429d0ae212b6c38f160200b473"
  },
  {
    "url": "assets/js/371.d07da25b.js",
    "revision": "2dc02a0c64c74c692ad2bbba415778d7"
  },
  {
    "url": "assets/js/372.e14f9ef2.js",
    "revision": "57acada5f463e9bc7b22efab32126d0e"
  },
  {
    "url": "assets/js/373.c1a36989.js",
    "revision": "68f4f91acc58a0fcda9af2740ac03779"
  },
  {
    "url": "assets/js/374.ce82e647.js",
    "revision": "efad0f5fe61dd88bf6da74744f273499"
  },
  {
    "url": "assets/js/375.5a8f90e2.js",
    "revision": "460262ac8577f65373ff11afe92e45ee"
  },
  {
    "url": "assets/js/376.8571700b.js",
    "revision": "58014f0cc07655c23c0a18ee638c7bf1"
  },
  {
    "url": "assets/js/377.8874458c.js",
    "revision": "5df65e6edaabb2bcbc9cc2e96bfede37"
  },
  {
    "url": "assets/js/378.2391abbf.js",
    "revision": "ef6372b2ba46fbe868ebcf9530a8c18d"
  },
  {
    "url": "assets/js/379.ad84f943.js",
    "revision": "eb2a574f17faf17575bcf289630cf6af"
  },
  {
    "url": "assets/js/38.96d74a59.js",
    "revision": "9312a1cef3ed9dcea7ab6719f2236294"
  },
  {
    "url": "assets/js/380.cc4069e1.js",
    "revision": "2a33dcc7c013a20f09aed393d98a396b"
  },
  {
    "url": "assets/js/381.205b30ce.js",
    "revision": "3a604901e3c9aa307f466edb6b70a61d"
  },
  {
    "url": "assets/js/382.9c2d2861.js",
    "revision": "f6b47e685d2e25bf7e144d9a8edf6b9d"
  },
  {
    "url": "assets/js/383.7790e50c.js",
    "revision": "8604923aa215e952ce5853f01fadda66"
  },
  {
    "url": "assets/js/384.1fd9189b.js",
    "revision": "e3c3fdc6b92755404281fd39ff13b241"
  },
  {
    "url": "assets/js/385.846a915c.js",
    "revision": "f031b33eef9f258e964844087dd21ba3"
  },
  {
    "url": "assets/js/386.3a955403.js",
    "revision": "62d9d77c833ea7025d40aac85f1f6152"
  },
  {
    "url": "assets/js/387.16c22260.js",
    "revision": "7448647369593238c73e6a608fd3405a"
  },
  {
    "url": "assets/js/388.8944305d.js",
    "revision": "0cbc6fd6c9d757fe34fb6813479207ed"
  },
  {
    "url": "assets/js/389.9c1c16b3.js",
    "revision": "d1a8acfdd62a758bd1c4b28cf3595cd9"
  },
  {
    "url": "assets/js/39.92ebce3d.js",
    "revision": "7491a30d7f6e47c34adf40ad571ea644"
  },
  {
    "url": "assets/js/390.60877b8f.js",
    "revision": "bf68a2be08bc9a4867567b9d01a1a872"
  },
  {
    "url": "assets/js/391.e8c34c32.js",
    "revision": "a1f448515c6b5526174b2a7f1fb851fb"
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
    "url": "assets/js/394.2b0b3a17.js",
    "revision": "7d0ab4924eac1b11ddebdb2992673dd5"
  },
  {
    "url": "assets/js/395.854b232d.js",
    "revision": "51a2dbc94cec6e81c9d52966e62815a8"
  },
  {
    "url": "assets/js/396.39e7f2d1.js",
    "revision": "4be7ca87c30e65727016f1f206d0eab7"
  },
  {
    "url": "assets/js/397.2ab34d85.js",
    "revision": "89e50c41248cc4fdec458cdda3f21a5d"
  },
  {
    "url": "assets/js/398.bb4b06e9.js",
    "revision": "586f39db012b1b4d5a28b73135e3bd29"
  },
  {
    "url": "assets/js/399.e8b6752e.js",
    "revision": "d66a9bda77f29b7381bbe5c00288eabb"
  },
  {
    "url": "assets/js/4.c5bcd50c.js",
    "revision": "57a1784a4380954506435b3501ded8ad"
  },
  {
    "url": "assets/js/40.93f895bc.js",
    "revision": "65f862984ec569cdc1d041593f35c976"
  },
  {
    "url": "assets/js/400.c0c0717c.js",
    "revision": "f82d897f252c90d7a8014ff632c04089"
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
    "url": "assets/js/42.feacc84f.js",
    "revision": "c000982f368a77840d85c94f895124a9"
  },
  {
    "url": "assets/js/43.1c75ed15.js",
    "revision": "04fbe904b3c2e0526816f540ac06955f"
  },
  {
    "url": "assets/js/44.0bdbb0e7.js",
    "revision": "04f29b134be081772ef59da9ff03f3cd"
  },
  {
    "url": "assets/js/45.69efb30e.js",
    "revision": "e384abbbba028fa785708941dde049e6"
  },
  {
    "url": "assets/js/46.6afd7980.js",
    "revision": "484ffbded0f372fa5068f20dcf8b627e"
  },
  {
    "url": "assets/js/47.2399a425.js",
    "revision": "9469eb4cc77292cc138fcf3152585578"
  },
  {
    "url": "assets/js/48.36d40c38.js",
    "revision": "088c9509f940c607d5ec6442af0f7799"
  },
  {
    "url": "assets/js/49.6c712694.js",
    "revision": "0b4079c4a204ac9beadbfecb03c37cc6"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.f6bee82e.js",
    "revision": "ec7f5fabe469e17def639ab7bc6dc2f9"
  },
  {
    "url": "assets/js/51.bc88767f.js",
    "revision": "7f0d85604a2b4435454f380243879d5d"
  },
  {
    "url": "assets/js/52.5af54a0b.js",
    "revision": "e3f1221b1eba1c89d9fe85118ed40185"
  },
  {
    "url": "assets/js/53.a4c814f3.js",
    "revision": "2b022c9e14526ee8468cd2514135a923"
  },
  {
    "url": "assets/js/54.1d7ae6fd.js",
    "revision": "b4099d878aaee26c38c219cfd4c629a7"
  },
  {
    "url": "assets/js/55.42c3cf43.js",
    "revision": "a7777947614b0c387f2989992e124ae0"
  },
  {
    "url": "assets/js/56.c1f23aee.js",
    "revision": "f3ca792a59ef9b59cdfc1fc1984514d8"
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
    "url": "assets/js/59.71007cca.js",
    "revision": "632da3486a14e30380143575ea5fdde9"
  },
  {
    "url": "assets/js/60.72db62c1.js",
    "revision": "b12fd54069bc071e50ee8a902d7a39a2"
  },
  {
    "url": "assets/js/61.ac7f284f.js",
    "revision": "872042efc6f111e024bc16fe59307ae6"
  },
  {
    "url": "assets/js/62.a0ebe015.js",
    "revision": "f85bba42ba361f5587dd606b29269bec"
  },
  {
    "url": "assets/js/63.56e57fbf.js",
    "revision": "fa68f9bcae7064787b2ba13dfa39bdee"
  },
  {
    "url": "assets/js/64.c524218d.js",
    "revision": "85dbd9c2607236f820bc26e0f9638cf2"
  },
  {
    "url": "assets/js/65.7f504c38.js",
    "revision": "0da626b434ec069a89a1c2546ac226cd"
  },
  {
    "url": "assets/js/66.037c02d3.js",
    "revision": "99066bfdc7ec99adb7cf6d762c86cd1f"
  },
  {
    "url": "assets/js/67.934b0fc5.js",
    "revision": "997740c97e30de1daea54ecb2c9aa145"
  },
  {
    "url": "assets/js/68.9230f9a2.js",
    "revision": "d28fa9212d1c42a8ca5e6523f1fce283"
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
    "url": "assets/js/72.050d2004.js",
    "revision": "9c46839f790cdd7b45b8f6e75aa2d3b1"
  },
  {
    "url": "assets/js/73.4e9309c8.js",
    "revision": "341358ef097c56650dcff3359378d64d"
  },
  {
    "url": "assets/js/74.efe1e833.js",
    "revision": "b9a87d98a112541feb6a7830ab9ba17c"
  },
  {
    "url": "assets/js/75.790c1d3d.js",
    "revision": "cd23095b15a696b6ad4cf978b9c2f951"
  },
  {
    "url": "assets/js/76.1dcb71e0.js",
    "revision": "17ba62c3d2d7b2bcabed67550afce999"
  },
  {
    "url": "assets/js/77.8142b962.js",
    "revision": "2d20e993ee5cb8ffca2acc1c0a24835b"
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
    "url": "assets/js/8.fc5dd4d1.js",
    "revision": "ada3e0fcd7c9635ed0ce898dad4cb8dc"
  },
  {
    "url": "assets/js/80.f81b865d.js",
    "revision": "b6fc0d5ba9e40272ac3a266242bd9140"
  },
  {
    "url": "assets/js/81.5650e67a.js",
    "revision": "67e80b3763358e24ec5074522b64d2dc"
  },
  {
    "url": "assets/js/82.6fa26b85.js",
    "revision": "2bb8def0e798587559d8881c89e56537"
  },
  {
    "url": "assets/js/83.c064f57e.js",
    "revision": "7733e17c0e9ebfabf05e103a5398318b"
  },
  {
    "url": "assets/js/84.2c3a8730.js",
    "revision": "91cc81a7553f3b7e855232ae1d40e5e2"
  },
  {
    "url": "assets/js/85.63a1d859.js",
    "revision": "5de33273ad31c5191ac2e40a4152d63d"
  },
  {
    "url": "assets/js/86.4c1c445a.js",
    "revision": "0757dc465c33502d7b1d3039d2535802"
  },
  {
    "url": "assets/js/87.82dfccfc.js",
    "revision": "82087d75257e9ef82663781ef600682d"
  },
  {
    "url": "assets/js/88.1a7bff99.js",
    "revision": "ce68698aec6de51af7390b23f8756199"
  },
  {
    "url": "assets/js/89.898fb65e.js",
    "revision": "a9563c9b62c95035e46420b3aba898f6"
  },
  {
    "url": "assets/js/9.3ea819e8.js",
    "revision": "8496bc0ce82dd6c80e32c43b78206fcf"
  },
  {
    "url": "assets/js/90.5800dbe8.js",
    "revision": "c96d107cd326d4dd4bd479bf642c53ca"
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
    "url": "assets/js/93.c2db35e8.js",
    "revision": "0c2a186a1041860622e5902dfa87ac6b"
  },
  {
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.14e2b2df.js",
    "revision": "aad023141df2cea3a6ea3f7a7e593d5a"
  },
  {
    "url": "assets/js/96.a2295a49.js",
    "revision": "2373bcd406a20d0a79081fcd38a9332f"
  },
  {
    "url": "assets/js/97.79f84fc3.js",
    "revision": "447d5e141668f4aa9f8a7d66b8d521fb"
  },
  {
    "url": "assets/js/98.00790181.js",
    "revision": "eba536902a8fd2c3ca4cdce99a5f2817"
  },
  {
    "url": "assets/js/99.c6825870.js",
    "revision": "f0e0a71a37b81cece3c0f01aa4d40acd"
  },
  {
    "url": "assets/js/app.172641d6.js",
    "revision": "c6f00f848586d3e8f159d9bc7d4abfd2"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "084ebc52107243f1cb60206e030b859e"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "69a6e3fc1cb81a8013d3c90640a22b11"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "efe7a62aedb82234af840b9aa8a1da45"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "cb6e5165b704854001287e00060b5369"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "50fcdf1b9b3e5e7ee27b0ef0cc5e83e4"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "cc7be7d2e483ebdc9fd0fd4bfaae804d"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "b6f580e3608a2c557b49051096897203"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "ee4c861be61aa03f90d82f745c07d09f"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "a2497a2fd122bfced13a6394823644a8"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "31c81cb116124324ddfda802e73618f1"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "82d39a26c950c62ac6d19285204e1409"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "dc8345299cfcf0165b03a3239324b109"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "05e30c27385e61d37f624f2020fafb87"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "5de9c7b6cd62e1b6a0aacd0fb94d2cbc"
  },
  {
    "url": "master/api/index.html",
    "revision": "8e64b0c14edda3d8fe80e7b25991ced2"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "b5824c0d424a43cab977186ef02da96c"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "df6b51a33fabf9ca57a207f1b6f19546"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "b9706fa6f687c546ce102ff622a6ea10"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "778537b6c4ead2d471a7f002b5aba8c1"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "00af1fe0466eb613d64704b48db18e22"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "37e601a0b74520782406fdd89c3159e5"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "d85f6880f5836b9dee1463d9e1eb0652"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "111aea7ccfa105323b753a7a25de21db"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "ee80a27334414ddf28dffaf5cd5bec0e"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "d6a38ac3c84fdf1ad4c38d1234674efb"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "c0ee9b428326a0a8d711c673a8300f59"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "17a673bca1912c78a859eea29bdb62a6"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "0c69c6fe07e602c0a060f5ef343d2f62"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "f9b498f387e99e1cfb3a77db7ba242aa"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "8a1bd9ef1252c05e39eed3cc6c543ec4"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "e24340fee477609dffbd36187035502e"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "a14b3ecd383eb3556cbf6a268d99a7b4"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "c64e38c9d2f3750d6a9cce27632fff94"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "0831c9f810606912bc6f13e8af594ecb"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "7fd563461bae45e42191b78cd0258ec0"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "9877091aec0c85766765d5ab6fc23c2d"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "e7acfad58e157b5e2bc2d3421fe5fded"
  },
  {
    "url": "master/packages/index.html",
    "revision": "9517dca2d9ad0467fb5f2f30bce2afa5"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "697e6f214fbe71c874dd7914b5b67dc4"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "01ed339941e4d1d10bdcecd360651eea"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "51be4dbe4ef49ecaf67d3ae749686af2"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "28bde583cec2798f64ee2d8281e31702"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "0ace404df84c5b78f24ba22221ab3a41"
  },
  {
    "url": "master/packages/views.html",
    "revision": "2d79817f4e1f1fdde4aa9032b8dd8db0"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "8abd49767d455f763b09141f40ef7c47"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "7b998ac9307f61bc13d32fc1a7b52aef"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "9f2434b63ea69a2cbb4cf3331c2440db"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "7d6ade4bb32aaf379cc33175f5a2346d"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "51b26597c5792d7135bb171cc4db810e"
  },
  {
    "url": "master/themes/index.html",
    "revision": "a8aba67b2d5a8dca37a3a932bba2adf9"
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

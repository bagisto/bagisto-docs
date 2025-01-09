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
    "revision": "baca31e332b526d3b98eca631985508a"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "6f35d69af2cdc74b7b8104d5afbe9544"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "79e93cad17df812aa4b2e2d03c708052"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "8adeb8871c0fd6d8ce5a25583c5b1d03"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "880bbea2f64cfd432e64cc9e9c372fad"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "f0f46e985426e983d3d19ae4da604435"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "78627db9d37a136f640fc0818cbf6020"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "46fc205cc9027b107c0b24e41f43b939"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "3292192aafbd0969b81ee36b2a34e785"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "d6d2e7c6d9c2e7f3646d8839130945f4"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "887b8fc7569fe1659e9dbae36e322183"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "cc1973a5410b0df5b5e2fa1afeb2e92f"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "fd2b66fd27fa75a850997ad9bc223e49"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "4455806810a33dcc62057ce160b5322c"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "2443af8e5cd2f9c45b49f84faa271382"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "720b0576ffd1636be8cb6fe230408f3c"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "4773ad1ff0bd80e7be470303aa3f5ad2"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "54fefc42e494900351e8c876a6356337"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "e77cdbcddf34602e00faf0e4589fe477"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "511e8a31f7804c8b20a10543d3b69a7f"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "905d287f12234c49a1af81be09238405"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "80bcd6b4cda7a405852ff9daa21f4bde"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "64460cf86137c11ea055b704484a42e9"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "12e342a4a007e48d4541745d8da5594b"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "188f5b193b5592ad3b6da6de7e7b3612"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "6cfbb86b2b30cc7bcad3e32c72ca204b"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "d79a0334c17e7cb6787b54fdbd65e335"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "2490d92acb87a1e25b8b01d9484b2e39"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "b0a8fd1af2fe350990ad1be278febcba"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "577554d6e74df682844969db668273c4"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "ef2de589b49de49487bb17f719d02021"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "b943ec12189d3c9e63e9040ca3ef13f8"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "595bcb3d6bbff489cda744ca24d7f10e"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "a8d83d237d8b73b4359ed2884a559e87"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "2c653e6f9738db538775d5cbef6c5457"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "196d9f1846aa3f410e59fe102cc4e096"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "e7c85e0a5e7d250563bbf700f8d1b018"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "7526e1ba10fbe97ef45ec20fd7054e49"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "21ee595ff7f74abf47f2d850aaa189a5"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "58f03b60cc1237259dc786f537940271"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "d9777f0932cbaf68bf00a850915e7d90"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "476d1769c2bb84225f054bf687be68f9"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "a8229517df16ad34cb8ada17d87b985f"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "6fe7955ceb9fab9b0967fbb6ca3566f7"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "3cac1993a047e621e2e22296b247f5cc"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "33f8f90d3f983647f59230b486dca894"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e335ea8a5b4b2d64b5a25b5f7b732f70"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "c54e26009fff0c335a97f08b317fd2c2"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "f3263c11053d3e67f236fc9097d2ddd4"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "dab943d85f14d371f74772f3e3eba82a"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "129b53e1436c769a1b40e4cd95c1c002"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "1953c3c1c17b85f1f7708e613883d80b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "3e79bf09ab865ae050962d4d3ab3aa0b"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "0c6827f4c70fb4e993174c8373e8bf67"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "0ac0dbabca92ad5d0a35b5558105e196"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "ded806af98b51611ad4606cd735e3fe4"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "34a0df1609e9d79018e89251b386da7f"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "962485ff891e41df0cb493c7c88d7ab5"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "9121d34cbbb82297c1cefa1af8e5a0cd"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "8c2b99dda1146405574d9935171c3acf"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "1e1f64c4bde93e3091ee6609531eb47e"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "9ace271d73f2700c9e28f4898976bc57"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "a35fb4180b381eabd65de714283a77d4"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "6056329bd6c198dd7dae7f98b48cc878"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "280ee6e74a3c09d5d9be4828c00486eb"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "bb19c6e54ed1f24f019ce8266b573848"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "35e5ccee56ac7b9930a1df2316f2ff60"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "1973cb07099d4c0301b0af2ec8622660"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "db1ff7d1d12bd894785922bd2e5719b4"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "5108fb47c1417f4b52f9c727c0ae0dd3"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "72bba5e58d0b18a872170ee87029d523"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "05107473107e537799a0bba1a55bc1cf"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "cde3a82f908e21e5e539fd8e3767ac4a"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8f48386b4c0869c6bf068047ccddc330"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "e38d1ef89233eadc10af47aa6d21a0e5"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "a5c9e1fd4275faeb50666a55031f9a75"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "936727a3cbacd61864494622897fbe73"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "4cc6377583d5a6c7ef28ec226eeb418d"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "10f45700944358511322d0e8a8aedfeb"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "bd0975dbacf1f9d76025f2807269740b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "3564e551e05ddc74a986f4cd456c3800"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ef0f66c180a97379dbef55f9726fbcb6"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "33ca2f80da3f108f51da4e5ebbd18ccf"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "d75a7c97827dd621240ce48968472485"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4b31823f782474b1ede778037802e7f6"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "2f269754514ffa4cb4a6f67faf2ced88"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "112f6ceb4a5eb01584095c10b1e9e35c"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "184fec8b993d0d841f3c4e8ce0d8afb5"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "c6e5cdeec6d919b177b9f0f80deadb12"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "63ad46dd25f47a45894d627e08423116"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "fde954023a322c56a1f0dc880be2d576"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "c88a61167d931e40ffe644861a226ee3"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "56483a7009a857c00b458d7d074f05f5"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "7b6c13aa6e93e5c26040e51829661d77"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "506b552001bc70a872c2a0c2c07131de"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "61dab5d71af91fc6c41978569b6640ef"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "e4d7e91f20b981ea02e1f3463c08281c"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "b9bcc945b49664c53b629c8217959bb2"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "7dc1576b55b4befa1dbb2d85b1e35e26"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "6cb5ca19bf80539b1af67742505dc68d"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f7e0d8768004953e26aba6f7ad8f3705"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "2393743999c71f0a44e6c3fb2e6cb685"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "bec884d6e958174fe68f3cf32b5d2568"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "54e9b024cfe1544cd9eaf68f71243adb"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "68084352201470435bf1f8145d4270d9"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "c37e1b1dab15136fdbc8e5a2cc9f102e"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "0f58ca6e2e3b6be0918bbbe77e65d820"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "33f410d3e2fadde5b79c68cfb3cb8319"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "9cefdacf21e407e24010b99c505dfb86"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "25b2e975064df6b870e3d0923e44cef9"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "00417a6af37923b26733d650f21ec66f"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "34291156ed07bd9bc5044e3f58889090"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "e986e7cbd4f7b373515ee84d2973b1ca"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f1da5aa5f0749c075f0e0e2869c0e771"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "061121daf7001622bf9579fb65731488"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "ba7e2bae101bef504ef3ff1150591199"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "c27cf98fd47194b69302157e5d0ce581"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "f49fce679af0f38ed81a8c3892a2a290"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "a4f8df353a18e709e4520a19cc77bfbb"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "24797260bf3ffdc90bf6d7b9d6fb36e4"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "e51ec028ca65318c3a85111b7d9f1eca"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "da8c9d9764ff993a8552a2806ab7186b"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "9f9e3a342a1210e54b6e202b688f8b0d"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "8304201128fcb5886405f1a59ec8c897"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "2ac6a06986c7c6a49063020b1047a979"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "803961c8db06054b26375b08032e3113"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "e6eaedf33edae52a359de95098187903"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "85fd69e4b4c24b725de63f38f40a4d30"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "b5d890d20d23de840e7525a538ba1475"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "bc5e4181cbc412d439fc5d267f511879"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "59ed747b505ea00f8b54b44df09cb677"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "198d9b19b4e5096eabe44a275d2ca82a"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "6e5588847f2bcdf1e0923df256f30b7f"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "0246c873e04faf5867aa50fe861be530"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "4268d2baf64d77635f232239bed19ca3"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "3971cc9bcadaed31fe6a7fbb6420d421"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "afae9114b76ebee6d632796aeadfdb88"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "829536d0dfed711d1f36545d391ba228"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "371d0eff550e6242380472ac2130507a"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "14d9bd9494970457d577f4cb39e530d9"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "be9c471a8cfdd053b6c9824a5a929a96"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "040e1fe111bc3c92e2101f37a5af0d1f"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "cb8ee7eda2fee50ec778b9354def10a4"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "4311b1a905f4f47e463fb8648006a6b7"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "a0d503ef44b712d81fb211a67a6ea1ea"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "6ce0f2a1654f911a9886da677a26db22"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "60e46c29debd8ca0dfc14363aea5801b"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "eb79d26ec3d2263661d36fe682a71829"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "3f58f2e01e57224186bacc90644b8d2f"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "077b5665534ee403ebfa02eb9f3a1fb0"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "35fc4839c1442f496700563d708cb599"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "34f34f20d8379d741d3b545b3e0f22ae"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "c6ec38564a921626a739df72a44915c1"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "1084954cc33b26f2b5544167a9cf5388"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "e834927c2d33daa402b4fb1fd57a0c45"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "fe63b67c17a151169411cee98ba4392f"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "afb20362cbf12cd9bec2456b20cc129e"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "da74d168ff635039ebd2f91da49a7cbe"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "9a934b74c89c8364e638fa92191bbd59"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "ec234da18377d8c921c53fbf045d3dbd"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "c82bd3745c4aa916e281394fc16c87b5"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "845198652a70edb12c886362bd401c55"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "e21bae072b5b7414a1058d3379bcc355"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "89477ee272bc54fb1d76935f35e85788"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "5704d96ba05ebdd021ec40fed3b701e8"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "8eafe67d7aafa9f541d3bb91b1e73aa4"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "900a68839e6222ecbf14e69391d34f47"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "04876785b786b6ce92752c50751ac829"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "cbba80584e053075e62c4ebe2b4af769"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "d996cb5c9569ddf8cc075dc6b2bb1ede"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "13de9572746f6dcd5538873eafd7b002"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "d63811b8fcfef773346e2116430c0748"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "bdcab3378b710f3706a17d299f8b785a"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "4edb1de8f0830591edddb13225c0e4c7"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "5c467885b2ec8ebb32980c0cea9ecc02"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "bd9d5e889fbbf587b035813689eb709b"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "c2cf0a589f3cfe40747f4f8d2448139e"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "9abf780c26a57b2f8da54f4838222d65"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "42a0f231f2548942a76a91bb6c3ae669"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "b2359db12da24231a0af46cca9ef34bb"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "3f46f964c4a82b2aa41ce0e8467fcf3e"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "e92b899f249ed122b2274ad4133d8844"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "9b4ba3de9ac2f3fe26b2510828f9cd12"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "4f6c69b4b1fef7a69c3272d8d7001ef5"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "6c8b8fda20a7f8f6d208f41dd108a5ed"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "483b5c08e02cdcf2241c6f0c70cdffef"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "e2ab1c2460b1f711b4693d926fbabeee"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "00564cb2358b349a392fdc028dfd8b1d"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "4c08e65c0408082cbf1996b6c600f133"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "586904b565ff0f8d21293e6510f441e0"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ac1554082af1efe57c753164af19bcff"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "e0efc2793a7cdbb7c1a0da9fd31ea032"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "5b13a0e74418e2727529d3e3426e492d"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "bbb6724e2f77c78874e2c559666f0fce"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "69aa3d0ec3a45c519e2b3a0818fec238"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "fc88383233ae99a837020916e3a56aef"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "50c637afb77c5fadf56a6b2849a75723"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "e007fbe74cce0958d487741e75b45622"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "b7d9fc6bd232d86bae29855dfc763091"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "29f47f99cd01b2b41af117406295042c"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "c8b7e88cea9424835b931c56b01bc4a4"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "6a8a231e9e45593ef10f06fa625804d4"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "e3fa4dedeab10827d17b4a0899a7ed87"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "ed50bc7ba21cec679a4bb8b0dbd494ff"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "bc0ba79aee655f5f025a1a3be65b0d55"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "6a00e97ce837b21429e2177016dca141"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "c107652ae6c198011dd27b45b00c739a"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "7dc6afcde2c078e5360814c0c117e0a1"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "7d1f86e4a6b943088f28fe22900e93cb"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "285813eed344f0d5a1a91659b5c941bf"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "cb560089b42805bc9781ae35d86c4fff"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "b0628154c0d4ad6cf7ff87e9fc2f0a69"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "d4398f398b86d21ecdc40a592a34d840"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "0e3cf474f1e76f00cc816f8ac5e7e28d"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "73ca036c26540f4fb2a1e5f75f3eeab4"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "5749032907b2f91ef5b2335b2b34b7dd"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "a0d63559cc1f72ed7065ced8036d43ca"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "6da333bad56272db047907a393a32621"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "1ce5719438ca0478a8c98813b66ddc22"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "c96dca66715c74f09b390a1e02f36185"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "b63b422134f87292c2f4190d2efb9e7d"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "6d23ec0fd3c5e1d0aad9b80dcac9a06d"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "6daa6d91e8475c9a376556434e054527"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "b6b9c96314e8e7f89e5432dea4690ebd"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "2ddcd68c6491e07f7871c2b4a45a3fe6"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "d24bbd2078d1583603e798480bd0643d"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "aa78ad90e9fa6205c437f338a7849c6f"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "6ca60c562dbd723808810ceb19a090c4"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "b961af865694c172fb2714872043ce5e"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "6128618db171252644bc64432bcb7d73"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "587a35c3cd857da0c8256fe42a352d7f"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "b8a055fffb6f9cd491e3bf68886e8762"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "0c04e79c3d0ed6cdfb932531500a9bbb"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "a5cc3b07c9dc1e32677a5d998ebc8c1a"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "4b07c54e0ca5061967bf9aa528bcff3f"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "3e7888cb74fbe7dfdea3c79e9efe0168"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "cb1e44b945aea86edf9847fe6f6972f4"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "6d36d43df969d9e37645a49c15bd0ea1"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "b66f6bbb033b29306f7239a9f0e16693"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "aefb98330b245711039edc7372e8a24c"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "d0972150296ce48989ddc753176e20f3"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "49d577e4c5902a8223f6eafddd42f9e1"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "058d941d819952e0afee871ab5d1928d"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "22bb8cc2da076e9867fe9d42bcc5c941"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "d501b056d2e6d6e0b56968fe4e7460d5"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "18af880009292a9b013ba1a5d32995d2"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "66e4d1a3c59f340326655505874f96f2"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "d1bb5ab913c071fb7e2ec7b5ec77d18a"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "17f145be69c3a8b97472cccb8dab1d0e"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "cbe4010a9c6b18d4b5c497796dad2847"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "43f1406fbbc0e13ca994731d561cbeb6"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "1d582b6f1f1c6a16534e0b999282c114"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "c5f98d2c929c628df11060f41fb1f32f"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "88108112436c926491675667a4ca1785"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "193d8f561ae412e50b98e581fb4ca575"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "cbff4339e75f6ce8490fc0931aad299e"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "9bba995b594f2a01d50da8c670c94fff"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "364db119e3b38344184f9634eccc84a2"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "3abf1b2fd0ef14bde5aa4ceec0f66a4c"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "44d7b0a520d98205aee2189b2fb55dc1"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "05b47360b71aa7a71a545982b0f0cf85"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "2d8dc715f2592b0bbccf20849e58b306"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "721f9cab20306751ee8fb3d5442f5238"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "0f2033f43aa765ec112d60720e5d034e"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "447b5b5774b6961276cde7d0b2d56ffc"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "b3834e476773517c39bb0353b3a55465"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "15527545428c7b61e130d213413e47d9"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "0b2294c1813df95e254a2bac83cfea26"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "d448dbf56d93c04f91bbdb0fc1819488"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "e1515bfb284614969217c88be1945e1a"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "c256a2e2d8792706a61e64f8889763e5"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "1234b71d24db7bedcd80f06caed7b7d7"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "4d6bab2a0706fe4020eae948e1a61eca"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "4c378b5bef7cf0ad8eec30cee77ebe3a"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "3d28f3d3b1c79b052c529d35566570e6"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "17b2dd94c9724f1760f94ec3a507a2fe"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "fda2d15e5cbc4f2b7dd6f3b681ef42b3"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "baef7dff52db45c13bfa4239dbb3e14e"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "c0d1845f02b2984d5b231303737bfa62"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "fb0091628fb3ee8c531522f62e69248f"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "923a86656d30ae610671014585469c26"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "128b38f27b19e5bc4e2650a2feb43574"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "247ceeab9dfad2a785c5d88e45610a4f"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "9e04d8c59230d136cb3496238c4f9756"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "66a30ddebec148b767fe76c93c725067"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "9ac18d875b88f1e4bd235127467fdfea"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "3a3fe7a3a72339993885c051ae969f3a"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "1c5907156827a110b9b8f4cf9a983f4d"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "2deb8964e66e2d59e3a97fea78401dcb"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bbc31de53a62e52c0d460a9abf504ce8"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "d6b19a983e06c354bc8e9e66b7cdeb13"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "03ee95b0b2adecf9cf9a10c74e1ee9de"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "d2a992f62393199e68ba596079e59004"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "10fce2fd5cfd493268d4add5dffb7581"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "1bfb0cd7ff55f52e91dbe7ced0e0a46f"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "753013f41037fd919c8482d7747d2929"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "43381b23bb0afa07bb12523c48eb4a6e"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "a2e5f5c846040e7045482bce054346b6"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "b65998aa6d1f02923cb1c8b3a0f62282"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "dac1267ae44136336c943ad6a01f743a"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "571538b9780f6d403e0de23db58e087e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "50357237b1f63bc24107fc36f79a4420"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "308b9d029bfd909829872205afe37dd7"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "db6510fc90d7dd6a09f37b377e3ab348"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "fee48c5b1a822f5825194e7877c07af7"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "0a9bacf5bf8bffd50732e94ad195a64f"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "2cb39e2d178134c0cb930af5d98b5327"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "aecd58ce5760b37fa5af176e8b7cafd8"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "6a0fce8712f56064486dc8dd0c983b05"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "f60d9f3bc8dbd8a09bfa8b52b81cdd30"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "93e58de5a3c1476057a159c5b15a5d43"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "fb2fcb675caf0f03a1b1639b395393b0"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "a16a9884cc51f0253843ca63c2c19e8e"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "b91ff10261947a789fecc8ce109e05dd"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "71710893abd28694e4ef97afe9e81dfb"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "33c3f6a712011c67feaec4aad78f8164"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "dc23329e2e0eb646c08c82c29f33b98c"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "f28427459afcf8621e57d9099dde05e8"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "16965720802f867ba9a8a52b08d49514"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "d000b15f44a33a28a1322f2dcb72e5f6"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "5ec403d989bfed117aa5a0df47eb6149"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "523cb8bc1686dbd4b5fa1f46e78a9147"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "01e71fd8bcc044a0d2b13b687f321a21"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "9c11e70060995220d0dbac23cac0a1c5"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "13652ecd6c49e0e689b3049cd519e011"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "4e390884f1879797c489f3707165d9cf"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "4894548f5ed4fcc51276def8b4693e25"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "b63200b1cd015297532ccb795555eb43"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "d6dcf785e9cbd66661a87c469113904c"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "7bb75ff5c65cd784d8f368e8e8e3e569"
  },
  {
    "url": "404.html",
    "revision": "72b8ba01bf79a13aca96aaff884236e8"
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
    "url": "assets/js/100.bf663e68.js",
    "revision": "37bda28eae8b72c61e63677d7504c5b4"
  },
  {
    "url": "assets/js/101.1ccb5c37.js",
    "revision": "ed83dfc244febac6ac03637c2097c6d8"
  },
  {
    "url": "assets/js/102.d468772c.js",
    "revision": "8b7ea1a6ccd2b3ccfce9328b4a05cfa1"
  },
  {
    "url": "assets/js/103.59e73842.js",
    "revision": "914b3c4c3324cf249a7b4cf2789cdf7a"
  },
  {
    "url": "assets/js/104.f47de549.js",
    "revision": "a3adf34cadf1b9eb5db089b0dc93683d"
  },
  {
    "url": "assets/js/105.460c6aca.js",
    "revision": "540437c93d1cb7cc1cf47ab9f0018b39"
  },
  {
    "url": "assets/js/106.db28e7b1.js",
    "revision": "dc802c230bb58ad1340a37adc68b22f1"
  },
  {
    "url": "assets/js/107.a6aae5a0.js",
    "revision": "44a5912a0f69c3a032268863ff3b4523"
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
    "url": "assets/js/11.1081fc70.js",
    "revision": "c98ac50debb97b22333fd9c26e8c7362"
  },
  {
    "url": "assets/js/110.18383e0b.js",
    "revision": "e67bd7dd8a9dfa53cfd012fae8aa2cf7"
  },
  {
    "url": "assets/js/111.22d8e9c6.js",
    "revision": "d4f7edd187ef74b4ea9adcf8457b3d41"
  },
  {
    "url": "assets/js/112.87f39dfb.js",
    "revision": "9571abe6c91af776b2e1288fad9e3c26"
  },
  {
    "url": "assets/js/113.caf50036.js",
    "revision": "e384084b449a1295c22cd92d791b694d"
  },
  {
    "url": "assets/js/114.91e0833d.js",
    "revision": "bf7abdf198c63cde40c4a5781158b75b"
  },
  {
    "url": "assets/js/115.2a994a20.js",
    "revision": "c734006ecf3c580284a2416f2c7e3cbe"
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
    "url": "assets/js/118.1995ec71.js",
    "revision": "cd712ef059ea5c798d381315006c01f5"
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
    "url": "assets/js/120.f7957dcf.js",
    "revision": "f7c92f53340e4261dbc1e3574f872a5a"
  },
  {
    "url": "assets/js/121.62ad709e.js",
    "revision": "3679146969e25300895671f1d5e02988"
  },
  {
    "url": "assets/js/122.81ed40d4.js",
    "revision": "c8076ffd3367b1d9802e94b7ea531f45"
  },
  {
    "url": "assets/js/123.0120fb8e.js",
    "revision": "e79355002ab58cb9a2857ebbeba794fa"
  },
  {
    "url": "assets/js/124.90f11753.js",
    "revision": "ef261c3cc651a66a1b7fabe010dba456"
  },
  {
    "url": "assets/js/125.5fb1d62a.js",
    "revision": "d7620be8fe1285396f4536c139653fcf"
  },
  {
    "url": "assets/js/126.589928d8.js",
    "revision": "952ea85d7c876ff1cb3c8f89d33350a8"
  },
  {
    "url": "assets/js/127.efc359fb.js",
    "revision": "9ddef33eff9efd74c7e161b1484b70fb"
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
    "url": "assets/js/13.5a6645d4.js",
    "revision": "17d137d5e89cae820089229f051bab46"
  },
  {
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
  },
  {
    "url": "assets/js/131.03f3419c.js",
    "revision": "96a7ce1c6836e463b64edacae7ba5489"
  },
  {
    "url": "assets/js/132.decbb103.js",
    "revision": "858d50e9a16421d6c867befa22b28b12"
  },
  {
    "url": "assets/js/133.a89599ac.js",
    "revision": "1235c3cb19e44882b7993ef4d9f09642"
  },
  {
    "url": "assets/js/134.b69cb431.js",
    "revision": "59e6018954ec6c0bf900d0d10742cc9f"
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
    "url": "assets/js/137.3b3c0244.js",
    "revision": "f0c63eebd40afbc371155a822b999838"
  },
  {
    "url": "assets/js/138.1215bc1a.js",
    "revision": "3acb49fd3ada4bfa889b83d9d4c799b4"
  },
  {
    "url": "assets/js/139.3922c9e0.js",
    "revision": "ad259713bce66225c263912872852193"
  },
  {
    "url": "assets/js/14.8c161f1f.js",
    "revision": "5f202c7d732c18a5a87f2fbeefdc36dd"
  },
  {
    "url": "assets/js/140.f93c48bc.js",
    "revision": "60865fc0af18ec66a13ec56f93e1d314"
  },
  {
    "url": "assets/js/141.891c9c83.js",
    "revision": "1763869bf8045eddd21cea6618e50d16"
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
    "url": "assets/js/144.dcb19599.js",
    "revision": "031c44e37ef12f9013d89d5bdd097587"
  },
  {
    "url": "assets/js/145.07fa4a11.js",
    "revision": "531b9aa5dee107b8d41805d4c2506729"
  },
  {
    "url": "assets/js/146.83714787.js",
    "revision": "3dab961927fbbb197bb129df748a28f5"
  },
  {
    "url": "assets/js/147.848d0645.js",
    "revision": "6b9460282b8b8e6ade377446393b58af"
  },
  {
    "url": "assets/js/148.4aa40664.js",
    "revision": "b537a88f43c306f7f742300f88b60670"
  },
  {
    "url": "assets/js/149.adab3b63.js",
    "revision": "b240be57f044476d4f78bccd79df9184"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.d58ad5d4.js",
    "revision": "675638fa0908f311b7eaa2c8c76e6512"
  },
  {
    "url": "assets/js/151.9af42afd.js",
    "revision": "7821937c9342410cbff49a2649c59ebb"
  },
  {
    "url": "assets/js/152.0562421e.js",
    "revision": "7f9184b107c8db1c3a10307a63d2f775"
  },
  {
    "url": "assets/js/153.8f90dee0.js",
    "revision": "8506e6446e4d68ee2493ba0805182b9e"
  },
  {
    "url": "assets/js/154.7457d3ef.js",
    "revision": "f551c7139f4c4560ff91d47950b76aad"
  },
  {
    "url": "assets/js/155.6309f2d2.js",
    "revision": "02353148972ffdc8cff4d96562bad5e4"
  },
  {
    "url": "assets/js/156.d2faeb2b.js",
    "revision": "872ac82ec674db6639a0391bbd17a120"
  },
  {
    "url": "assets/js/157.7818768a.js",
    "revision": "43b5d0b02b7305a0d0296bb8783fe85e"
  },
  {
    "url": "assets/js/158.9a2eb8ec.js",
    "revision": "2f4c8d178c5115beabefbd1f1fe8bcc2"
  },
  {
    "url": "assets/js/159.6a568888.js",
    "revision": "7ef6c969df22d627ca7800b186877f5b"
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
    "url": "assets/js/161.a63f5d60.js",
    "revision": "9d220f564575a7bf9e81d99f48dc0a86"
  },
  {
    "url": "assets/js/162.efbd9fe9.js",
    "revision": "1b2c8d631e18c566a0292ab08cf38069"
  },
  {
    "url": "assets/js/163.e1f8e6f7.js",
    "revision": "7f764277e5bc2976a2d9411fdcfbdc22"
  },
  {
    "url": "assets/js/164.77a36066.js",
    "revision": "d5678d209bbcd9395b22603dfd2daa3d"
  },
  {
    "url": "assets/js/165.222fd72f.js",
    "revision": "cc46554acb2080abc9ad117e6b5ff120"
  },
  {
    "url": "assets/js/166.e21eb529.js",
    "revision": "93e77a184b81e15b51cfeb740784420e"
  },
  {
    "url": "assets/js/167.8dc58614.js",
    "revision": "3685b006f6c52885f9d331c31bb6eceb"
  },
  {
    "url": "assets/js/168.d6cc71f1.js",
    "revision": "cafd656e0c051078b59a4db9f26e3693"
  },
  {
    "url": "assets/js/169.37beff22.js",
    "revision": "80b5276b7c447cc9474e048e550b2bfa"
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
    "url": "assets/js/171.ef6b2c36.js",
    "revision": "e58e15693177096e85e34bc222f28eb5"
  },
  {
    "url": "assets/js/172.2964329e.js",
    "revision": "82175ddd703ba3b05f5e86c3aa5a1f1d"
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
    "url": "assets/js/175.35890577.js",
    "revision": "2f01135a8b3e795059feb4fde164a8e7"
  },
  {
    "url": "assets/js/176.dcaa5cc1.js",
    "revision": "6d10257bff2e72fd9d4be4afbeb791a2"
  },
  {
    "url": "assets/js/177.6b1dffe7.js",
    "revision": "d3c5867d8b821a77c76e6b0a63044f74"
  },
  {
    "url": "assets/js/178.11ad38bf.js",
    "revision": "69fbadd72eb916c6e1d818172f5ba1b1"
  },
  {
    "url": "assets/js/179.8689e1bf.js",
    "revision": "02101be3a0ff048bf68b35f6fdb1857b"
  },
  {
    "url": "assets/js/18.9258674f.js",
    "revision": "5288863685993cd679d9b89ce68a2710"
  },
  {
    "url": "assets/js/180.126c536b.js",
    "revision": "df29333f18e53180d97f195671b9447f"
  },
  {
    "url": "assets/js/181.0b6bc242.js",
    "revision": "60340fcd969ef57d6c6184aaae0159df"
  },
  {
    "url": "assets/js/182.0699f3d6.js",
    "revision": "16fa4f153604d34c0d6499349bacb610"
  },
  {
    "url": "assets/js/183.093ba1ed.js",
    "revision": "a967857854bb14664707109429a92a52"
  },
  {
    "url": "assets/js/184.9b0a00fb.js",
    "revision": "e86fabc516b8dc0bcd8a6a6e2a063b43"
  },
  {
    "url": "assets/js/185.506de468.js",
    "revision": "fdae0192fd561091bd7272cb6570d341"
  },
  {
    "url": "assets/js/186.0a59efb7.js",
    "revision": "21e3166afd87f338a1d3b1ef17883bc5"
  },
  {
    "url": "assets/js/187.4d3d7021.js",
    "revision": "a566102ca2a25aaf9fc0e074103012be"
  },
  {
    "url": "assets/js/188.c463a603.js",
    "revision": "0802b2de7b39e53777e9c4f9bb43d89d"
  },
  {
    "url": "assets/js/189.bc1f6825.js",
    "revision": "269bb42a978d27b7a768c6fe20baf0f3"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.640683b0.js",
    "revision": "1da7cd3bd5e3e05d94325d45f19b7564"
  },
  {
    "url": "assets/js/191.fac77b20.js",
    "revision": "f8a58bff70ca49a001e9502215dd7474"
  },
  {
    "url": "assets/js/192.343688c4.js",
    "revision": "3a5d73ff519d2fc827c596946ca9ade5"
  },
  {
    "url": "assets/js/193.e23b78d0.js",
    "revision": "bda9777d8d528755e8941374c3148810"
  },
  {
    "url": "assets/js/194.ccd76fb8.js",
    "revision": "d7e00c8fd6c5b9a6722059831ee03d5a"
  },
  {
    "url": "assets/js/195.eb48805d.js",
    "revision": "65d661836810d2f70bce4b117f468fec"
  },
  {
    "url": "assets/js/196.88b21837.js",
    "revision": "21f2520a245d534575246a63c44f684e"
  },
  {
    "url": "assets/js/197.bed5f73e.js",
    "revision": "b9c42bb511943489b46a650b0e06f554"
  },
  {
    "url": "assets/js/198.fbdf6ec2.js",
    "revision": "baf7bc034a881f50b30dc3a32a9705d5"
  },
  {
    "url": "assets/js/199.84d4d90d.js",
    "revision": "a8b9c7a3291d24b3165839e723f562e2"
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
    "url": "assets/js/201.9a06f514.js",
    "revision": "0ec4f61062da978eebc4bbc5d6b7bfe3"
  },
  {
    "url": "assets/js/202.c27c0212.js",
    "revision": "b4cae8d72194cf81e597787ade485d5b"
  },
  {
    "url": "assets/js/203.da4ab6eb.js",
    "revision": "3cf6087c4c616e8d69668f6cb1a1eb6c"
  },
  {
    "url": "assets/js/204.a5828fcb.js",
    "revision": "7627698323cbbe03d4dda09b87896448"
  },
  {
    "url": "assets/js/205.bce1d76f.js",
    "revision": "2ede47426de9d44869d496ebdd03b3c5"
  },
  {
    "url": "assets/js/206.2c633f0e.js",
    "revision": "181efd57accfbdf55d037b71eaeddebc"
  },
  {
    "url": "assets/js/207.8ca3c140.js",
    "revision": "a79b8ded25ed7e39ed25032cd603ba61"
  },
  {
    "url": "assets/js/208.ae25c583.js",
    "revision": "993a99e9db09d4affbef9784e0aba66c"
  },
  {
    "url": "assets/js/209.527f4eb5.js",
    "revision": "3c2a6ec76ac63a41f582e0fae37e4004"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.8b8881fd.js",
    "revision": "2b105b685f01cbb4eb65b356ecc8cac4"
  },
  {
    "url": "assets/js/211.f67942b3.js",
    "revision": "d98c303416d86420338ab84d93804dd9"
  },
  {
    "url": "assets/js/212.42016fe9.js",
    "revision": "504ea6ffa607881fbcc15dc5e2a5b8a5"
  },
  {
    "url": "assets/js/213.49891273.js",
    "revision": "e007f268ae563ba6cd170823dca61327"
  },
  {
    "url": "assets/js/214.ba063ac0.js",
    "revision": "8c28484719678451aa9c0a696dc33057"
  },
  {
    "url": "assets/js/215.4cc56f4f.js",
    "revision": "60352b5e1930c39cdf0892d8154352f1"
  },
  {
    "url": "assets/js/216.03a9ba70.js",
    "revision": "35a47c46b540291a76efbe061a5f320e"
  },
  {
    "url": "assets/js/217.f69091b7.js",
    "revision": "4a26ba4bb254644c6f4a3fa19dc2d8b5"
  },
  {
    "url": "assets/js/218.e6c242d0.js",
    "revision": "2341a7853984818da6ae8a787681d947"
  },
  {
    "url": "assets/js/219.9ff6665f.js",
    "revision": "4fc41067e336decde34aa3cdbb44d8e1"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.224f6f03.js",
    "revision": "7218121fb9180cace5d867d45b1bf860"
  },
  {
    "url": "assets/js/221.30b52b01.js",
    "revision": "d0eab08242e2ebff30a986875f641f2b"
  },
  {
    "url": "assets/js/222.50b7c4ee.js",
    "revision": "029b880ac0331826c6047ec0bf4935e6"
  },
  {
    "url": "assets/js/223.c1a8e675.js",
    "revision": "f6ad56f28ad5fed371b424d13d9ca000"
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
    "url": "assets/js/226.b3360b95.js",
    "revision": "25405364d4f19596abe0dd73e4e56154"
  },
  {
    "url": "assets/js/227.57b62ec5.js",
    "revision": "7cad279f00f73b0e9ea07984d5ad019d"
  },
  {
    "url": "assets/js/228.47b26ea2.js",
    "revision": "b578f75ceab7309f6dafa158f67a8abf"
  },
  {
    "url": "assets/js/229.6130aa09.js",
    "revision": "7f5e020e0e3aacfde458529c6b28058a"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.96677767.js",
    "revision": "7ad96d28870c05d048a893bf676305d1"
  },
  {
    "url": "assets/js/231.3522f657.js",
    "revision": "6c62004e2b7af56d7a12b36388902ffe"
  },
  {
    "url": "assets/js/232.f83edd0d.js",
    "revision": "8bf083427362dcf4e56cdf8322ef5391"
  },
  {
    "url": "assets/js/233.2b15590b.js",
    "revision": "1338f9030f183f7108c8de811a399571"
  },
  {
    "url": "assets/js/234.743fe962.js",
    "revision": "2f20aa02af59d398d54143c9e3a52a54"
  },
  {
    "url": "assets/js/235.f69273ac.js",
    "revision": "3d2a79a599d4647c7c3863f47d0ca3f0"
  },
  {
    "url": "assets/js/236.d1d871c3.js",
    "revision": "5bf3c0de518d2af95d2b2a37fdb16101"
  },
  {
    "url": "assets/js/237.fadac5e1.js",
    "revision": "54fae50476ce3d1039a74f68ea437450"
  },
  {
    "url": "assets/js/238.a39f992e.js",
    "revision": "6f50e2d5c6fca85422da33274e3a9773"
  },
  {
    "url": "assets/js/239.2e41b8c3.js",
    "revision": "587bfc54c09fa7cd30954e70c4d31f12"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.5e1569d6.js",
    "revision": "2648be1d9c83d2b3e27ae9ae0017acd8"
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
    "url": "assets/js/243.d0baa1f1.js",
    "revision": "4ff8b35d5df7d4553b4256a90a00dc5a"
  },
  {
    "url": "assets/js/244.fc437d09.js",
    "revision": "1084bb2751e25156758661e00e3ca72d"
  },
  {
    "url": "assets/js/245.92321c8b.js",
    "revision": "793e7e7825fffe3f6583520070ab2530"
  },
  {
    "url": "assets/js/246.30577e9e.js",
    "revision": "61fe378c93fdbe82573dc3689b780720"
  },
  {
    "url": "assets/js/247.a22c8d47.js",
    "revision": "ff163e36e6f1d12dbef1c7996bf87642"
  },
  {
    "url": "assets/js/248.f3ad498d.js",
    "revision": "70086fdd0d7b371cbe24f46c9bfc7d70"
  },
  {
    "url": "assets/js/249.42de761e.js",
    "revision": "29bb76bb110f4f0d954f6b47c03afcf7"
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
    "url": "assets/js/251.a27bf773.js",
    "revision": "c0e02ff3f896890c6a05f08fe3011a43"
  },
  {
    "url": "assets/js/252.8c6b6f7d.js",
    "revision": "b51993efebdc2c9249e0a734b362074f"
  },
  {
    "url": "assets/js/253.d5358fb8.js",
    "revision": "ba3485aeb4c985522b15a0fdbab3d6d3"
  },
  {
    "url": "assets/js/254.c426d3d3.js",
    "revision": "852265b1ddee99329654cede6f51d6a8"
  },
  {
    "url": "assets/js/255.22c30c46.js",
    "revision": "431837078f21815c29a19515f98aeed3"
  },
  {
    "url": "assets/js/256.698f9f42.js",
    "revision": "a3d3f24044923c3f67c15529dfcc04b0"
  },
  {
    "url": "assets/js/257.578f1af2.js",
    "revision": "babea62560b1195c0d85f6a4e53d32af"
  },
  {
    "url": "assets/js/258.9f52a755.js",
    "revision": "1a934b511f20f9baa9821ad37ab6290f"
  },
  {
    "url": "assets/js/259.25bed776.js",
    "revision": "4b8150eef1823fb06b4ab660136a80c5"
  },
  {
    "url": "assets/js/26.4bef914a.js",
    "revision": "4ce8cbe0d74c3a704ff2ff99c68c41bf"
  },
  {
    "url": "assets/js/260.cc2c0d48.js",
    "revision": "119ce154dbdb61a7eae6c84619df53bb"
  },
  {
    "url": "assets/js/261.1f93a44c.js",
    "revision": "aceaabe458c82c5505a8d322e2fbd1ff"
  },
  {
    "url": "assets/js/262.f22e2142.js",
    "revision": "1b5d4158c040803b9220ba0f8f24c463"
  },
  {
    "url": "assets/js/263.3808d0a8.js",
    "revision": "0436914a2531bdd7b41c893134115f45"
  },
  {
    "url": "assets/js/264.fb109969.js",
    "revision": "53bb02d64637a57f1ba000bc903479f6"
  },
  {
    "url": "assets/js/265.d858c025.js",
    "revision": "df947a4fca01a407caf2e80810389db3"
  },
  {
    "url": "assets/js/266.0dfebe55.js",
    "revision": "329354f03938e2a0aed659bd91131901"
  },
  {
    "url": "assets/js/267.7eab4281.js",
    "revision": "de780d0a111565c063b1c3e9355af4a4"
  },
  {
    "url": "assets/js/268.8c4954dc.js",
    "revision": "806b355a6fc207c17e51f8f61aa00aae"
  },
  {
    "url": "assets/js/269.61cbb922.js",
    "revision": "f6baa1da885cc5b05abae20b989f9d5a"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.02c948f9.js",
    "revision": "f20e794dcb64275c7a8b934a9eddb0ae"
  },
  {
    "url": "assets/js/271.965ef2db.js",
    "revision": "128a12cc8cdab4d443f65beb892f681d"
  },
  {
    "url": "assets/js/272.26616036.js",
    "revision": "25c85f5dc888d9f184a6d6d032a3a3f7"
  },
  {
    "url": "assets/js/273.3f13aab5.js",
    "revision": "214708b33a60eceeaeed2829f39e402f"
  },
  {
    "url": "assets/js/274.f1e1efe9.js",
    "revision": "eff00b8aff0b1167052c42266f9c9d2c"
  },
  {
    "url": "assets/js/275.151d1d19.js",
    "revision": "9d1774096d88c292ef2595f03822c01a"
  },
  {
    "url": "assets/js/276.07c780d0.js",
    "revision": "76f04386ed8774a21510dbcd86841476"
  },
  {
    "url": "assets/js/277.98b8b2ec.js",
    "revision": "5b65b3eb7a4fd51f58cf25a9951c5829"
  },
  {
    "url": "assets/js/278.1e2ebb2e.js",
    "revision": "771ba4c70a86e07341c6d68ec2c9b3ff"
  },
  {
    "url": "assets/js/279.7e856a8d.js",
    "revision": "aec816ed24bc4d517d906ca86bdd721b"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.2c2b840f.js",
    "revision": "2532f3fee220c75cbfe1f0c5ecf1c315"
  },
  {
    "url": "assets/js/281.8a22dc1e.js",
    "revision": "5f83ca9e3b10eb269d0e2d753e1e2ab5"
  },
  {
    "url": "assets/js/282.43ce01f0.js",
    "revision": "c8942c4bf47c29117442be56d6d774ed"
  },
  {
    "url": "assets/js/283.e0d1c975.js",
    "revision": "92874f7f6048ba432737e990ef441d0b"
  },
  {
    "url": "assets/js/284.17211842.js",
    "revision": "c632cfa15315193095acf4b055d043e7"
  },
  {
    "url": "assets/js/285.f7ed5fc9.js",
    "revision": "e994ba5e6203fb17579e493615e2d64c"
  },
  {
    "url": "assets/js/286.ebfb5f8b.js",
    "revision": "a415dcc48b51cdf644c6fd085eb85013"
  },
  {
    "url": "assets/js/287.31c55865.js",
    "revision": "732b50b70bc797c78d841e78408e8c94"
  },
  {
    "url": "assets/js/288.3235c247.js",
    "revision": "a57feebf588b07149ef5cb428dbee83c"
  },
  {
    "url": "assets/js/289.ba973681.js",
    "revision": "5d05db1b154f7fa33e10ae1b39e616a3"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.037ceed5.js",
    "revision": "f9f6ca5e495ed206d9c09aaf94273d6a"
  },
  {
    "url": "assets/js/291.a2fa02fc.js",
    "revision": "50c67be3e0d96874569c8777d078f23d"
  },
  {
    "url": "assets/js/292.9480fee2.js",
    "revision": "a5be7619734aed6169e3c36fa6e99f1e"
  },
  {
    "url": "assets/js/293.909e9c8e.js",
    "revision": "9b4a8aa948e109992aa0f8304aa4d153"
  },
  {
    "url": "assets/js/294.5094a5b7.js",
    "revision": "fcd78e5973af59be4818b1b3dd6612d7"
  },
  {
    "url": "assets/js/295.13b35c09.js",
    "revision": "dc7ff9739b7f49be055b4ef68696abfa"
  },
  {
    "url": "assets/js/296.0afe4138.js",
    "revision": "2d437c599334c24bba90cea2e33f0835"
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
    "url": "assets/js/299.c60c6e40.js",
    "revision": "d430fd8e7d2c95daf5cd8c8ca164af1f"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.a3d0b802.js",
    "revision": "3a26b95be4961e6b4c5b381b447af674"
  },
  {
    "url": "assets/js/300.2c589bd4.js",
    "revision": "2b08cc10532ec883a67212b18dc4d824"
  },
  {
    "url": "assets/js/301.6d357f12.js",
    "revision": "dda5950550dfd9f37ec4c6ebb529a677"
  },
  {
    "url": "assets/js/302.efb4e783.js",
    "revision": "9adee5d6b34d291d0f073c65fc7ab0a1"
  },
  {
    "url": "assets/js/303.031f3953.js",
    "revision": "f68be53d20e41fcfc9a8405f3a81bb11"
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
    "url": "assets/js/306.50d67e1d.js",
    "revision": "5d0f2ad98adb8f5043ad282d54052930"
  },
  {
    "url": "assets/js/307.37090019.js",
    "revision": "467c11ae3d551bd6d189f540141dcf8f"
  },
  {
    "url": "assets/js/308.b0b6e726.js",
    "revision": "ee1d4acb753a509a0f336adb773ef5f5"
  },
  {
    "url": "assets/js/309.961c58c8.js",
    "revision": "90d3d618ab6e7e6e3b4e6a5c9e5b57b4"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.7cd287d8.js",
    "revision": "5d3ee3dd68193b6c4b3e0cc273d8aa9c"
  },
  {
    "url": "assets/js/311.fe828c63.js",
    "revision": "b79c0bb03e814ce115c54de287639b5d"
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
    "url": "assets/js/315.35fb1a37.js",
    "revision": "6fb73befffbec101f5fdc74706c39953"
  },
  {
    "url": "assets/js/316.3c3ae67f.js",
    "revision": "4b4790663cf95ffcae9405d6f33a1104"
  },
  {
    "url": "assets/js/317.ea1063f6.js",
    "revision": "f117fd48a683e98ff4b321c6fc4f8fb9"
  },
  {
    "url": "assets/js/318.4523b53a.js",
    "revision": "95c5dccd28f9036c3bf77274bcace1c5"
  },
  {
    "url": "assets/js/319.df915d8c.js",
    "revision": "de52cc1d9712447a52f79c9594ac910c"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.28c266b7.js",
    "revision": "a24c62d0e4163a9427e062a6c84a0757"
  },
  {
    "url": "assets/js/321.1a0a1ea2.js",
    "revision": "29fa6e254ce956031167f8fdec215a5f"
  },
  {
    "url": "assets/js/322.5567a74b.js",
    "revision": "63ed9cd0b659412b117d075c7ca4f2b9"
  },
  {
    "url": "assets/js/323.ff3da071.js",
    "revision": "53a59fa94e1773ba5736635d422f7a8f"
  },
  {
    "url": "assets/js/324.2a386122.js",
    "revision": "7c3b56a0c53266478ee0a882e217aae5"
  },
  {
    "url": "assets/js/325.49e31265.js",
    "revision": "30ccb08fb2155f297d9c1cc31d43c6ec"
  },
  {
    "url": "assets/js/326.57d50319.js",
    "revision": "b5423b1ad64ecbd516613bcdd2c22df8"
  },
  {
    "url": "assets/js/327.d565a148.js",
    "revision": "cbb45fc9912d7252f01b5c20beb98542"
  },
  {
    "url": "assets/js/328.82e5b31b.js",
    "revision": "d38174eb33e89321eaecefa088490f52"
  },
  {
    "url": "assets/js/329.7f663d22.js",
    "revision": "2cc53a36a116db498828dbedda82e8d6"
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
    "url": "assets/js/333.6b8e88b3.js",
    "revision": "4b40ed6fe0a6b7b5346e12e301e5c983"
  },
  {
    "url": "assets/js/334.8775e1c0.js",
    "revision": "a136d887c2b40815b20b3ffd2d5c25ec"
  },
  {
    "url": "assets/js/335.f16a165c.js",
    "revision": "e8fa84cf274cbcc38b175c8bebf4fdec"
  },
  {
    "url": "assets/js/336.3c64e134.js",
    "revision": "3cec17fcc38f6ccec2017af7e30e9504"
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
    "url": "assets/js/340.dd3383e0.js",
    "revision": "3ce79a852316da0b6f4a9b37363eab30"
  },
  {
    "url": "assets/js/341.2774d5cd.js",
    "revision": "5d12c12be2055ce5ddf261377ad7896b"
  },
  {
    "url": "assets/js/342.499ea2ac.js",
    "revision": "290ef33e901ed669ee04a901a08f4fbb"
  },
  {
    "url": "assets/js/343.6b3a3b7d.js",
    "revision": "12b8916670b160e314bd291e4d2abdd5"
  },
  {
    "url": "assets/js/344.58a1dc46.js",
    "revision": "3a7a472ce2c410db63caf7999e2f7dc5"
  },
  {
    "url": "assets/js/345.b09ea276.js",
    "revision": "97fe8ab405d4ae7f12248def72484352"
  },
  {
    "url": "assets/js/346.9b3f0454.js",
    "revision": "08f8692bd48d92373403d0db7745c3c6"
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
    "url": "assets/js/349.cbc64ac0.js",
    "revision": "2f24196a3e1cb37b1ed71dd1440e66d8"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.a7023e6f.js",
    "revision": "17d659a10761f2c9b785f06d924c693d"
  },
  {
    "url": "assets/js/351.b14746f6.js",
    "revision": "07f0439cba8b9074f548cae85e280e9c"
  },
  {
    "url": "assets/js/352.7526f37c.js",
    "revision": "dbf913332a6eecc134eae2c6e6e303d5"
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
    "url": "assets/js/355.5488a027.js",
    "revision": "7ea74c9a5e05e64fde49eadc433feb3a"
  },
  {
    "url": "assets/js/356.bf8d4427.js",
    "revision": "a407d1d02cf694c1a61a1cc38c5193ab"
  },
  {
    "url": "assets/js/357.bfe748a5.js",
    "revision": "61fda4cc5b05a9dac29a85c551cab84f"
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
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.74ba8e2a.js",
    "revision": "a5721747f951d515c633c50d37edadf9"
  },
  {
    "url": "assets/js/361.5cdcf7e0.js",
    "revision": "93d79d07b3aeff182a882075fcdbdb43"
  },
  {
    "url": "assets/js/362.65f2b457.js",
    "revision": "e7b0b918822eb010d85c08a81f6baffb"
  },
  {
    "url": "assets/js/363.e3a64c53.js",
    "revision": "ae49c3598037fdf7ab0237902ff78793"
  },
  {
    "url": "assets/js/364.81d74331.js",
    "revision": "41e69b16571e42319491e61297377ab1"
  },
  {
    "url": "assets/js/365.decc15f6.js",
    "revision": "12d7c3b4790b913143e4db7205899d8a"
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
    "url": "assets/js/368.5d50fa4e.js",
    "revision": "79711b5cc20693e4c42f6fd84371b8fc"
  },
  {
    "url": "assets/js/369.a82c83aa.js",
    "revision": "212f6bf0098baaa761b3af12756b778d"
  },
  {
    "url": "assets/js/37.cb44a25d.js",
    "revision": "e5136953dbbe8c85a4c95dab41146baa"
  },
  {
    "url": "assets/js/370.f3cb381d.js",
    "revision": "2edf47429d0ae212b6c38f160200b473"
  },
  {
    "url": "assets/js/371.f8e30c66.js",
    "revision": "a745e534fb0ced9f25d69e3cde25b7cc"
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
    "url": "assets/js/376.e1de6e02.js",
    "revision": "3eb2e8cecf93ab3b1b339f7d3e3da323"
  },
  {
    "url": "assets/js/377.64d1f976.js",
    "revision": "877d0fb7669bb139567aeeb8b230cf41"
  },
  {
    "url": "assets/js/378.4c151f1c.js",
    "revision": "63fd864b718d1077850fff4a65b1eb1b"
  },
  {
    "url": "assets/js/379.4dd8115c.js",
    "revision": "14cf6f40923c0084570383cc6a240e32"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.73f3e021.js",
    "revision": "79f5570333508560a8ea12d7022cbccf"
  },
  {
    "url": "assets/js/381.6821ba85.js",
    "revision": "03273fe6cd478b158b96f8f1e3350971"
  },
  {
    "url": "assets/js/382.33dea46e.js",
    "revision": "d3f719680f7c8b20d4c4750a1a4d36b5"
  },
  {
    "url": "assets/js/383.848c1ce6.js",
    "revision": "8c42308c82cf3cc6b2d1bb1b67a80a8b"
  },
  {
    "url": "assets/js/384.116874e8.js",
    "revision": "b503fe4f9da538badb54b220fd56f0e9"
  },
  {
    "url": "assets/js/385.089faa4d.js",
    "revision": "eee8fafade7ef149b723065b603828a2"
  },
  {
    "url": "assets/js/386.14a9dc7c.js",
    "revision": "a5f954a847e3bf3d567987f650b929bf"
  },
  {
    "url": "assets/js/387.75dd8028.js",
    "revision": "dc887194359fd513edd2eb758d7f3f63"
  },
  {
    "url": "assets/js/388.6cd6aead.js",
    "revision": "2208544d738330d8111c98eb11ccc4fb"
  },
  {
    "url": "assets/js/389.d67c171f.js",
    "revision": "2357c97e8fe56a75d188f975f5deadc4"
  },
  {
    "url": "assets/js/39.92ebce3d.js",
    "revision": "7491a30d7f6e47c34adf40ad571ea644"
  },
  {
    "url": "assets/js/390.7917d05e.js",
    "revision": "802c55a384e8f8a462d35efff67d5386"
  },
  {
    "url": "assets/js/391.cc134d55.js",
    "revision": "ca4b09c4d11abe4f799a122ef7152c4f"
  },
  {
    "url": "assets/js/392.e4d0f982.js",
    "revision": "e6c848b46254a4840bb29669f180b006"
  },
  {
    "url": "assets/js/393.65bf0af3.js",
    "revision": "b2cee50137b7e87524341564925e84c6"
  },
  {
    "url": "assets/js/394.e75a87d0.js",
    "revision": "41ef76fbbc7519a9b9b0672b2d41da90"
  },
  {
    "url": "assets/js/395.7abfdb0b.js",
    "revision": "79e53849e428f0e2bff959eb6b8dd880"
  },
  {
    "url": "assets/js/396.371607bf.js",
    "revision": "5cb63eac34009ae8c1e6d2d96f5023b1"
  },
  {
    "url": "assets/js/397.744e3a35.js",
    "revision": "6c5fd1fc81c0078983fac3bc55f08cdc"
  },
  {
    "url": "assets/js/398.75edef45.js",
    "revision": "f307c291d23568d0e9ff52cc333860a7"
  },
  {
    "url": "assets/js/399.1eaa3a0e.js",
    "revision": "e3a7b0642e8cc9b2a03e027167eb6ffb"
  },
  {
    "url": "assets/js/4.b1372804.js",
    "revision": "6a3bd0a2aa0211666ad5e408c38dea92"
  },
  {
    "url": "assets/js/40.f0cfe08a.js",
    "revision": "4c8f9c35e50b9036195320c6d1dfc40f"
  },
  {
    "url": "assets/js/400.2702cba6.js",
    "revision": "a0d2dcada0945540ef767aeeb3871971"
  },
  {
    "url": "assets/js/401.9d56cb53.js",
    "revision": "0968c5fa3197af9a65c2a582c107bff5"
  },
  {
    "url": "assets/js/402.df1ef83b.js",
    "revision": "4e4afb166a9ab0ae1e42229b58eaeb79"
  },
  {
    "url": "assets/js/41.289045cc.js",
    "revision": "04ec13df88f827302855db68dbab11ff"
  },
  {
    "url": "assets/js/42.56b69059.js",
    "revision": "f777035e119d74b9110186cc8567816a"
  },
  {
    "url": "assets/js/43.e6ba968d.js",
    "revision": "6581d44019fdc3f8f9ca2793c18a8b2e"
  },
  {
    "url": "assets/js/44.5d8b11f4.js",
    "revision": "c7201d0c69784953b77da6f19eeca86a"
  },
  {
    "url": "assets/js/45.a438a0c1.js",
    "revision": "84bb1fae7ae56b4a9972ef8f7f5bb1d1"
  },
  {
    "url": "assets/js/46.dfdbb40b.js",
    "revision": "88180d2d28d45d44e1be1e65e5ca2595"
  },
  {
    "url": "assets/js/47.0aee6c62.js",
    "revision": "44747642ec63ee99be4e1421a4e394ac"
  },
  {
    "url": "assets/js/48.891367e3.js",
    "revision": "fdc4bac363095f1b347d900b73e595cc"
  },
  {
    "url": "assets/js/49.d068bcea.js",
    "revision": "c4885bb92b0e9d857a1a4e9cef565547"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.81cf1355.js",
    "revision": "db4cd758dc12fd120a492bf58fbc7b7b"
  },
  {
    "url": "assets/js/51.cc8aca9d.js",
    "revision": "b0d0a6a5e6b16e9a9187c8d1d02dd0ad"
  },
  {
    "url": "assets/js/52.86009824.js",
    "revision": "274cca1aefbafa22ff931c535fa3920a"
  },
  {
    "url": "assets/js/53.9fb76d08.js",
    "revision": "7ad11456acd3a3cb7656295c2d6370df"
  },
  {
    "url": "assets/js/54.c6ce44bf.js",
    "revision": "f1f34f22d3677e1ed5e6e2690c01cd40"
  },
  {
    "url": "assets/js/55.d86f3ad5.js",
    "revision": "3ed22107ec2dce7988cf4bab14a0c413"
  },
  {
    "url": "assets/js/56.4138ae24.js",
    "revision": "30dbdd04298883453be24d82e92a1890"
  },
  {
    "url": "assets/js/57.7d1a10c1.js",
    "revision": "8d3e924cf2f0ca134a255bc9696b0ab0"
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
    "url": "assets/js/60.f18ed3b4.js",
    "revision": "603df73f22b758cb6b6aa9d963404c09"
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
    "url": "assets/js/67.b5725a2d.js",
    "revision": "9b8238663961f5ae8ee85de56cd206b7"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
  },
  {
    "url": "assets/js/69.72306453.js",
    "revision": "1499f0e155b3ffffb0b7987138542d4f"
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
    "url": "assets/js/73.6931c73e.js",
    "revision": "aef7edeadd72f0b9449b5088be754e1d"
  },
  {
    "url": "assets/js/74.efe1e833.js",
    "revision": "b9a87d98a112541feb6a7830ab9ba17c"
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
    "url": "assets/js/77.ba010e02.js",
    "revision": "f2625f630a250fd62c36f9856331ecfe"
  },
  {
    "url": "assets/js/78.ddd569f1.js",
    "revision": "d7ed4570993f882b7f090330faec4702"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.fc5dd4d1.js",
    "revision": "ada3e0fcd7c9635ed0ce898dad4cb8dc"
  },
  {
    "url": "assets/js/80.beabf95a.js",
    "revision": "853fd3b11d02883747fe7ba1ee9b72af"
  },
  {
    "url": "assets/js/81.62742b8c.js",
    "revision": "2a0d06d5096c4f4e85495e787513705e"
  },
  {
    "url": "assets/js/82.f41beff7.js",
    "revision": "e082af291f9363bbb24a2a3cf95d253e"
  },
  {
    "url": "assets/js/83.7ff7f679.js",
    "revision": "ca8a838d67055a6ccbe993c7ed9c4108"
  },
  {
    "url": "assets/js/84.452790f5.js",
    "revision": "ba78c5d145e714f61c4225364aa62d08"
  },
  {
    "url": "assets/js/85.ee1721fb.js",
    "revision": "fd9fba8752234603b493c0790455a7c5"
  },
  {
    "url": "assets/js/86.f87afeab.js",
    "revision": "81bc87eb284afbf9f59fb3506238e7e7"
  },
  {
    "url": "assets/js/87.c76b88ea.js",
    "revision": "42d117137843db6c5986c030e9111217"
  },
  {
    "url": "assets/js/88.e20a0c9a.js",
    "revision": "78df686c119172293e65bbc6ad6f959f"
  },
  {
    "url": "assets/js/89.eb94f076.js",
    "revision": "9950c8e764eef4e608002d086da2b49b"
  },
  {
    "url": "assets/js/9.6f65949f.js",
    "revision": "ee857a4d62cc6e3cdee3cd04bbae7d3a"
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
    "url": "assets/js/95.226d2667.js",
    "revision": "4731056d0c0b9ffdac7f6a90d418efe0"
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
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.8787f496.js",
    "revision": "8e3e3dc59bd01b78c2429a2cd24db2b3"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "423b6aaa7b296c70124e97ee403cfad0"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "3ed55f46cc9a282e1006dc0e57f0e6ba"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "da9ee7934a655d69eab5ef3fe40e025a"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "5fd7227761dd42eeec77280de2546777"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "2db8ac5ca3242128ddac282f8b29eff3"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "07290c4e57f9faa6e19b59ad6bddeb4c"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "fe7c654c6b14b82964328836038ae274"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "71e01fa2a7824244c60687dca1294fe5"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "1f1d5ee14d38d50db4f88bcd6b8e9c15"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "023c990eb565c9f8325ef68274ab5861"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "1f72959c6f647ed301dcbb5bedb963eb"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "ac5af57eb17d088601ac94267304dead"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "e1397dcc95710024aaeb4602de66bb49"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "0257d6edb693b4b954ec3d16b45be2e6"
  },
  {
    "url": "master/api/index.html",
    "revision": "78ef01d2612ce737b0b2ee0b38504798"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "f06727ec83fb191374a5922a221d2140"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "294c756b8c21922c8eca6cf2a814688f"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "02c0b50978a39b39e30ecd72158e70d4"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "a064adca068f86f3aa4aa0bc3782e773"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "e8ffda1d9be143348f006c8a890e6ad5"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "1f291cb48fa75d217842eba34ad9dc77"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "b3ca475e766939970e79ba4f44d8fd18"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "8fb1cab0e15aa7aea230dfe07a5cc277"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "8506fb92a54e82b464362fc27f7a9824"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "74babf902e9323e7e16d0e1880c242c1"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "80bc67947c8cb9514cbf571cc9c2c689"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "f21fcda3db232668961f0d2987611a73"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "2bc8a660c4276ca202af1897d481e812"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "c4d471c497e3242ee4520dbf6ba2f7cf"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "23f25bd0748fb3f3e9398fcf4a64888d"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "9f2c0bd6e8868ac60f158f9d5abd81bb"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "1b366af1ea8c6c1b11f311ff441227db"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "61a1f874e4dbc705d6fcacd59724cf37"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "6e069db33fdfb233947d3df53e920e85"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "02364357e1e8d432d01def3a94d60e08"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "2a60c1e131d90ad630cce72b5bb7a0f2"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "62d3619b8d63f471b294a6e0af79a7a4"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "f20817210866da15bbdc80d6da050e88"
  },
  {
    "url": "master/packages/index.html",
    "revision": "7fc37c3377ce6a78acee311cc5def0fe"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "772d7398b1a785145023e3c91466a083"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "ef1a6f2a29dc403d5ff7085722b61ed0"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "b892e0fa3b3e09511e940cf4508ef745"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "692d9e96420a05187237c20f6ed70933"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "5192390dcf42fadb02d36cccb8c44a0b"
  },
  {
    "url": "master/packages/views.html",
    "revision": "bceeff2a7c324463d7b46de779ac63c5"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "489d2cc177da6f354e4aff827d60cff0"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "216f1ef92e37795d4bf4bb8d9c47f9bb"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "ac5d0a795b5e5c4c913ac630ba8ba192"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "2c0951dd41d72f3f8a32f163f29ae8d1"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "c03a787125c3004e625c5271efa51dca"
  },
  {
    "url": "master/themes/index.html",
    "revision": "2297fadde2800d89dd701ae12e2204ca"
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

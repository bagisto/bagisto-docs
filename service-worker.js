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
    "revision": "5652607e8d3d0870efa2c9ff43bc1e2a"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a77ef29b4f342eb3de72c4b87cc7c365"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "b002d368194beca417094149ac3804e0"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "1cb6038aad534047385db9dc6f48e4ce"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "56d95a38881d3d92009a870db50c8e08"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "00ed1435a1faaf420a6602d3cdae034c"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "22d5cd055c4798871dd561e8a3901b6f"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "27f5f22c4a2e97e2b28ed4085a47b4bc"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "4df5a317511573becbc6c681e4bc0ead"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "270cc236f8a4e68b966cd57d1d50dc2c"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "827051576742f90aa6bfe1d03badc257"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "0f9dc3954fcda28c811d5873f60c4412"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "0b7cb146ae41212912fe9298cc14b4d3"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "27d3904ed10d5dcabdd1738c2a7b9e99"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "0ead47fedf7b480ada9bc0b0075e07cf"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "95812deaba7e730ac585374f2085d763"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "2421a61ac88dc4daef9a0ffef857e97f"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "47630d60d9753de69657131e02c92cbc"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "fea5f0917ae7761498bcbde645e22521"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "964970723b9825b655b3da08a4753ae5"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "f17232493adc454a14f33c422af01f49"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "a05f889244365341f15bf4ed09d0314a"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "dce3416dd448d4c0bf6e53700b29a11e"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "04cc5e28ea02f0b093065cfb18ace2b8"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "54aba204091f41cf7cace65f5ba6ca0c"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "e0bb8027b3e5ef4097e3b71e41694c9a"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "6b8b837d3f8da881369c46bd606ce894"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "945f74804e02786043bb3934a429cbdd"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "7fa5fcebc04efe9a4db7158e38a03a8e"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "81e79194bc1d07f65d81ae72a55b0c46"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "9242ebd99cd9fee01e1c752c4f8275bb"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "ef408307cb3716d09be08c155ad9dc29"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ff6fb700de50beec62005d91bcdd1a71"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "715832a41545eb0046c0179681e471df"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "00087f4c6b4c9ebaebc232cdbc358dcc"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "4181e090c0875d9f85d53a1162f04bc8"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "b82d2f4c03dd2b7df13453a954520126"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "eda5fbb2e7bf01ef04fdff7010d21de5"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "30d3e944d26c5c817e0f69606123fb20"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "995c5f5b4ad266b456736b8214ce78e9"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "5362c72958c28ef01ac0d170a1769e05"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "271f684c7e4fabf8f0202fd58345c560"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "b1cf999d7d0ee1eea373db19850b68ba"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "720afe1008a87052a39e5e3af8ed30ae"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "cabcde13ca842b975ff870cec594534b"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "1477960295fb53e4b8e24a615f7f2517"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "0ed7f2ca1ca67bdf4ccaa7638cc2fa95"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "b331176ccd7da32f94d8887c2124d361"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "56d9f2fa47d9cd3f5d711f12b8477ec8"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "2c494156ad0e1f5be0184e4fd890fabe"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "afae826fc696ebfa9d8bddd9adc9a6c5"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "c88561077be3f1e774e76705cb1db341"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "ab131c8b051c8e7135f21efd488f86da"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "72879457090de96c6fe1c1b365d6559f"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "523b4ebe205417c18cbb568cc549318d"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "cfaba92165ec9c8abec84a410e303f04"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "ee8303861519555a89f16f654b3bffb5"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0b8196a042d2f428c27e4aa347a9cdc8"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "8ea40451619bed62d9be8d84567a73e7"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "d5fb353e39023365d8925a3e23768aad"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "5f055fb803fb04dabd95f6a88619b801"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a3c0040cb7e865b83106dbdd5f7348b4"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "50336bbee4622c70bbe0ed67edbbfe8b"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "eb2ffeae675c235ffa9635357bf0daf1"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "9a9dd0fa6800a7cc5d2bdbc15a21d050"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "805482457f81096072fcf88296ccd3ee"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "f4a25ce235a9ee60868c4eb799a6291d"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "f9345bac0ee0049a08aa4bce54311992"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "5a1e8e7ca2fb66a53a9414dfd71bfd49"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "3dd39706a036f135c55739ad3114cc33"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "cd3488fc4557ae55279a1bd3c4c0b5e4"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "6a3a6a60c4769bb857712839627536c1"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "cb16f4eedea31bb8f7d3e60d4c749b4d"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "d699ff36c59637dbfdb0dc757534626b"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "153b14695c1cf6222f8daa70f3607012"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "b0d56757e0099f1358d519991f355953"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "e4b5c858f9e4604fcbd3aaed7d75b92c"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "07abca9aea96664802c3e1ca041770a3"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "39fabd821b1205402f0e823e770c6f4d"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "44bb3d9da90a2bbac51e3b348a9e3e4e"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "540cf2fc71055a865ff6737cd5ccc6b1"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "2c12bbfd67075966a61391c35b371e46"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "c381c216d6c27b55cc8a4fed1edf4758"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "2696328ccab1f9a65fa9cf5b503fa17d"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "12af1ebf099201f9ae91cb10dfd85c70"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "dbff857ea01cbd282416ef31b8b705ef"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "f0ad0a7fcce136b3493df5e430711f05"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "0414405f9d3c1006ff08bcbce09631fb"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "6adf1372b34fa89e3c19dd309e0c34df"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "4293671134981bdd5e704fda7d08a7c9"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "7d1270040ff7d84d195ea46d7194e157"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "ad650f5320dc18c4f443cdda35c21291"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "cf1ef99cf05f4bfc4e89927f11464306"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "eee006557379f532cd0534e3b4aa80f1"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "db96a9c0cab321fda012b2191b54a671"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "e77e5e1f9b4acb7555480cc75bf8cbbc"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "3b32fba34681c0a38a609ea9611c6711"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "f6614713e4ae9f4ad1eea24fe146c576"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "49b0e38661ee16e7cf234000a5cb792c"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "321fff67072f95476c52293e90981ef5"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "4d1de3a76ca2619d187127cdaa28907d"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "76c8a6a4abdd8471f8b8d58308ab0ffa"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "0276be70632fea02d8b645c53f22986b"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "b3c472f1827cbe16d73f5da2fc428b28"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "394641d12dca97eb8b82fa9b399e75b5"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "e7fde59b5b5a4f6bc96bdfea6d8f5ca3"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "a348f8de68db168a7804af71d8750226"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "1946159c3a4be8a700f7b502b824b684"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "98a36e9fca94699ce8cd07e31568c63a"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "30b1f7277392468a0103937fe6c22b32"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "b9ac4460f41ce01da0f5cc7f306844ff"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "1cf8d3c25df9e42e332f5c0466e966f1"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "bf1b3f06afea11e500673c9553f1a2bb"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b275484f5ec6ae7297e7791b826a2098"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "7e3c3e632de0d96fa5e2fe46e86503a5"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "29d87654c488b1150a9234303555bda9"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "249ae9448a6007e9a7ce36b48287a113"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "f064c7aa1eb845d62e866d5e9f0a7b89"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "9812b9acb0102129d7c5022383e324a5"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "ea2fd59425bb6c96445b6c40297fa327"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "55cd68944b9bca6a34691ecd68b0f907"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "bebcab9189e41acb42e6470a76f29adc"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "e63ba2be34cda323be1bec3bfa784b76"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "e87807a85df6c72fc69b971c1b388c5d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "f8d886407e29fe04d382ae29c7dac191"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "28ac2ccde6cf2fd666ea4b47e1b06277"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "716bcab0568fafa844ec918a3fd5f2ba"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "0327d732d43029e85db4439c31657031"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "b4bb403fa55091b1d61ae65a3a90155f"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "fb2908d6b9e0feebb9dfcb7bb328572d"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "4336aa05995421d120bbaf77256de552"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "385eba0ad718fcdf61d4d09979ad55c8"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "d5988613c0975626d723fbb02638d156"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "ed613535e519378632847e30586e8626"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "81d08e68f76a76a54d85a02063b62de2"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "959269f78c8319a60bd0ecca5b831ceb"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "9f6052f50fb34b3ed446bd9e2594adc3"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "c3847973b60395b7fa82d1680c6b4eb6"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "cc985a0724b4afdebc10361209e00365"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "18590455ab0c0e1073ccc7b6de3d162a"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "faed9abdda9d20118777448426147241"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "cbbd1159d2c4f208db6ab52444cbda0a"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "75c4f6105f7f583edcebbc7cebce2353"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "8c361f0d80e8855f3c3abfe492b4e592"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "be421885780d970435276220ca606534"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "a629a9b8c663cb542c9fdb4b20556c12"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "4cee02cfc0151b2508f2f98b1a7e2fa5"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "0b2a93821daec27fa5d5260f4c13b803"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "c8c234383459ac50a712778b835915a0"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "1b75604d9fd37d2514571681d2c35455"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "9d4b4a419a00c7d4f441760e6340b128"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a31a49834c16632a18afacaf51d56088"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "b963edad614e5412ab189ff8cbf406cc"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "186bfed89c1cbd7436d63ef4d5584fd1"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "0e2bf98050dcbbf61eeb4100341db3f1"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "cdfafbee11ec7300719569e3cc58ad31"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "85f893fb9c7af9a94129768aa91bd6e6"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "58992d412ff9eb63949ab680111d20c2"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "6a86ec316f620ce314e8ac46827724f3"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "f1dc88cd0f8c3322793258b445e9748a"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "5b72221419d469df951f74d7af4b0103"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "527c6ffe787ee5a9dc3f8e989fc92e51"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "d94001a19bfe25d847cc3ceed2089cb6"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "989d737f86c25d2979ede65c9ca3db28"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "b49f00f52b1fd3c525615692bbcbc96a"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "52a6c60cf7875ba6dd348d82e7a6a8d3"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "f74e1c2e3e4b143b7726d3203ce9ccff"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "32ebd99794110af33b4b0ef2a565bc3c"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "20265e7d4fb23e53b3681d6d8bd59e6f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "859efe23b98eb4d6d2f604bcc6c60343"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "ebaab9a116cdf998aa7c9b646e9993d2"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "8221f870cc0df42c6c4f3131376dfc8f"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "69f3ec5126e6f518d1132c167d360d1b"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "e53260e2c3fab9758e9b93e70252ed26"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "8b1c816c9d8715a28a893cc9a254c542"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "f493b5a1172dd4c50dfa8b68ef67426b"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "7cd11c7f45b28a5e77bce48ccd7404d5"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "66f89c1a67eddce98fc899979051cba2"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "ea83f3962517f91c1e270f2637558c2b"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "d5c3390745cc7c688128445b74934aea"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "c00c412faa3f358f6a6e102cccb432e5"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "f61333014050ebe82beba6000794c704"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "b5ae574cd6d101e75804118ee864101f"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "b5e8339b631d9efacc7ff05d82ddc521"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "2817783910c42736cacc297484ca4675"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "7211ef4682ccb86f158967c6302992b4"
  },
  {
    "url": "404.html",
    "revision": "6a14fd2630e00490941e47a5c826798e"
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
    "url": "assets/js/100.01eedab5.js",
    "revision": "e1a44cf7d7043103710feeaf2ca4dcdf"
  },
  {
    "url": "assets/js/101.13b8b7f5.js",
    "revision": "d76fd23df80687be74990a4c875437c5"
  },
  {
    "url": "assets/js/102.6d97b94c.js",
    "revision": "f6dfade8e917b582f72f262c07389430"
  },
  {
    "url": "assets/js/103.90f66cda.js",
    "revision": "c1dec079649c3263e52f6c0c5970e38f"
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
    "url": "assets/js/107.113f2d68.js",
    "revision": "c1d3e4f78a66dedc0021ab6d2322faa7"
  },
  {
    "url": "assets/js/108.a86125ea.js",
    "revision": "d9d10b7707fde6ac6764b3c1c80560d9"
  },
  {
    "url": "assets/js/109.6f9dc4b1.js",
    "revision": "fe6f6c53de0f9927a1ad2fcf796a152e"
  },
  {
    "url": "assets/js/11.4d1c43d9.js",
    "revision": "f0024c46457b384a5ca7495530708e2e"
  },
  {
    "url": "assets/js/110.aae063c2.js",
    "revision": "583e03c5fd5b6a8addc9f4ee33e82d7c"
  },
  {
    "url": "assets/js/111.180ef911.js",
    "revision": "564947815477692cc148b92ebe682209"
  },
  {
    "url": "assets/js/112.dd31c6e8.js",
    "revision": "a3fb59e87bac23da650e437e626257ea"
  },
  {
    "url": "assets/js/113.31eadb21.js",
    "revision": "4d0083d4f150c22457d495987e5c5468"
  },
  {
    "url": "assets/js/114.31e9c8a2.js",
    "revision": "2f789a60ecef7d481a46b482e2f776f1"
  },
  {
    "url": "assets/js/115.03642dd8.js",
    "revision": "ba0ca12174566193311e6370418ae19a"
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
    "url": "assets/js/118.e4e48e39.js",
    "revision": "06f2f66893f0b2b377484c9ac2c8e084"
  },
  {
    "url": "assets/js/119.860c23cd.js",
    "revision": "472df81be9a2c53c89efac39da502542"
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
    "url": "assets/js/121.3ff6f469.js",
    "revision": "9d93c21e75064ee4fae1f45e523bb312"
  },
  {
    "url": "assets/js/122.3933c67c.js",
    "revision": "1fe9e7bc080c5ee48bea68d302946d3d"
  },
  {
    "url": "assets/js/123.c9034e76.js",
    "revision": "03fc033a47d7902579dacd2502b68209"
  },
  {
    "url": "assets/js/124.79331dc8.js",
    "revision": "1fc3fbd27697bfe5e26cac52b5831ca9"
  },
  {
    "url": "assets/js/125.ec6fc0e5.js",
    "revision": "606822ffbcfdcb99fab8e0a97d103943"
  },
  {
    "url": "assets/js/126.1a7ec03d.js",
    "revision": "2f8b6bf97cdc20c00892f10173159e4e"
  },
  {
    "url": "assets/js/127.f110c0ea.js",
    "revision": "3de886a54a7730d62b4d276a7f0bff04"
  },
  {
    "url": "assets/js/128.4419add5.js",
    "revision": "175fe4f3780f69c0f65cfa656502b848"
  },
  {
    "url": "assets/js/129.54f52d33.js",
    "revision": "f23d6f2929a4511a6ca21a3b457c6a3f"
  },
  {
    "url": "assets/js/13.8126d997.js",
    "revision": "0df8147f99a8d0fd42a7eef53287d40d"
  },
  {
    "url": "assets/js/130.2d6e1f1a.js",
    "revision": "676e88c93308418cf9c1d7ef3c5fbc2e"
  },
  {
    "url": "assets/js/131.86a62b0c.js",
    "revision": "e54a26cd84e61e8f26e05744b069c190"
  },
  {
    "url": "assets/js/132.06173240.js",
    "revision": "97eacd3e9064a9919d02ae33315a52ec"
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
    "url": "assets/js/138.5f5c61dd.js",
    "revision": "272960f843efb3ecc2e31b42e4b69223"
  },
  {
    "url": "assets/js/139.21c0b435.js",
    "revision": "db931686dbaa733ea005f811a5e465b0"
  },
  {
    "url": "assets/js/14.ce199eb9.js",
    "revision": "91755461c121a573970fab16651d4f93"
  },
  {
    "url": "assets/js/140.af07f9c8.js",
    "revision": "e46337a233ba214e512b064eee4080f2"
  },
  {
    "url": "assets/js/141.a1ba4905.js",
    "revision": "b91fe7964e7bb5348b79f01065728e83"
  },
  {
    "url": "assets/js/142.2d10ead5.js",
    "revision": "221fe22f7fbc2ff43ec71fadce9a0992"
  },
  {
    "url": "assets/js/143.a655251e.js",
    "revision": "aa3e1c898eb32342ef4a510ddee83124"
  },
  {
    "url": "assets/js/144.0092812b.js",
    "revision": "de15d524c50f41bf3343b68a67c719e9"
  },
  {
    "url": "assets/js/145.a703a4b3.js",
    "revision": "954f92749ff66ba0822fcb61f9ff4d37"
  },
  {
    "url": "assets/js/146.37f3df9d.js",
    "revision": "2c409170b5f6e0560189f01ff11dde15"
  },
  {
    "url": "assets/js/147.ff3c14f1.js",
    "revision": "38865e349c60540e47e3d204fe495e30"
  },
  {
    "url": "assets/js/148.ce8da4da.js",
    "revision": "e42ee857a572f40e7a7fb3db08c8c6f8"
  },
  {
    "url": "assets/js/149.3ea92b65.js",
    "revision": "9f7344a66b138de36ea3cc2f63c576da"
  },
  {
    "url": "assets/js/15.fd661c60.js",
    "revision": "7325476e7f894897546cd4badcaa0460"
  },
  {
    "url": "assets/js/150.485b2057.js",
    "revision": "1ebfe1fe30b1b875fe768e1bb7f462b1"
  },
  {
    "url": "assets/js/151.219ae2f7.js",
    "revision": "b4887873b86622ebd76e4d468c2d7034"
  },
  {
    "url": "assets/js/152.e050c6a3.js",
    "revision": "da786e7302c75e2690205d63eb6f1a30"
  },
  {
    "url": "assets/js/153.2b592c58.js",
    "revision": "6fc41ca96072733a7e6a3e8b21256319"
  },
  {
    "url": "assets/js/154.85b2f01d.js",
    "revision": "f3edfff235940c3ab4a2ae5623f8b4e4"
  },
  {
    "url": "assets/js/155.b1172280.js",
    "revision": "dc0e805b888f1d03f49195cbf2f82061"
  },
  {
    "url": "assets/js/156.222c18ad.js",
    "revision": "62ab037666d17db31477f8b1c33eea6a"
  },
  {
    "url": "assets/js/157.192dd846.js",
    "revision": "71bb6053b823f74c2e49fa0f73aee39a"
  },
  {
    "url": "assets/js/158.57ec7bd8.js",
    "revision": "ecd2eff8e3e757fc08e0792f3ae5d5c1"
  },
  {
    "url": "assets/js/159.83801550.js",
    "revision": "3554ec0009fb16367ea6f2ca1cabc1ee"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.4ca11d28.js",
    "revision": "9dec21a62229e08218cb099c1654a732"
  },
  {
    "url": "assets/js/161.65b36eb4.js",
    "revision": "e7a1de97405942c86e4976238635a072"
  },
  {
    "url": "assets/js/162.6e561f52.js",
    "revision": "1fc28a768943b856d988d9279101b7cc"
  },
  {
    "url": "assets/js/163.76c32401.js",
    "revision": "fd2f3d1405376e41f0f81835b5500125"
  },
  {
    "url": "assets/js/164.128e9e11.js",
    "revision": "42f589fe187b16915768f6b3ff8e1c28"
  },
  {
    "url": "assets/js/165.2b6c48b8.js",
    "revision": "85f39ae66c2eeab808c6d5bfc375e604"
  },
  {
    "url": "assets/js/166.66e995bb.js",
    "revision": "664559dd5d8120d856fab95c167ae801"
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
    "url": "assets/js/170.d44e63c5.js",
    "revision": "4a168aa0155df0ad3655a373c4936acb"
  },
  {
    "url": "assets/js/171.4f0b69d9.js",
    "revision": "82e96e8063c70107fab86716888206c4"
  },
  {
    "url": "assets/js/172.a229c7c3.js",
    "revision": "f3517f26d0f7521f961f910eb586280a"
  },
  {
    "url": "assets/js/173.21109e67.js",
    "revision": "b7db98c52075fa765f871e4f22e129ef"
  },
  {
    "url": "assets/js/174.d23bd11a.js",
    "revision": "eae97453ac77ddc5f393018d91e53be4"
  },
  {
    "url": "assets/js/175.965da8a5.js",
    "revision": "4993c6e8727c0c2f8165d620c92f7f1f"
  },
  {
    "url": "assets/js/176.e5822288.js",
    "revision": "82e0778c48cbdb6dc576de3f0a79e897"
  },
  {
    "url": "assets/js/177.65a96dd1.js",
    "revision": "029616ade4dd19d5af4fd7735fb8768f"
  },
  {
    "url": "assets/js/178.f6127841.js",
    "revision": "48215f2a449d477397702e3e60ebdc69"
  },
  {
    "url": "assets/js/179.0a9bd361.js",
    "revision": "cb416c7a610e023cd5d35ac8ffc4dde6"
  },
  {
    "url": "assets/js/18.7efb5c2b.js",
    "revision": "78944f97b0f9237edfe4598383181946"
  },
  {
    "url": "assets/js/180.7a24f674.js",
    "revision": "bfd67ab8fe30000c674a0f2ba255e6a2"
  },
  {
    "url": "assets/js/181.c9360e3a.js",
    "revision": "a0ba750185c6be3eb01284980da451e2"
  },
  {
    "url": "assets/js/182.69475a0d.js",
    "revision": "9a4aee8d8ba89c01af04ff61b7677072"
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
    "url": "assets/js/185.c1aabc4f.js",
    "revision": "30931664ec1d9dd49aa1dd3cd6cb3175"
  },
  {
    "url": "assets/js/186.cec64efa.js",
    "revision": "199e55438caecdf7d5a84ba9e2459087"
  },
  {
    "url": "assets/js/187.8e398f3b.js",
    "revision": "0ac0991193f63db8a0d21d31bf22df06"
  },
  {
    "url": "assets/js/188.976d0c40.js",
    "revision": "ce2f06ba62f9930d992363b5fd1c2502"
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
    "url": "assets/js/191.de0adae3.js",
    "revision": "5f2baa11f1bd2307a4884ca0fe828185"
  },
  {
    "url": "assets/js/192.c0d8d19c.js",
    "revision": "d7147066d6c372462a96f3326f16db82"
  },
  {
    "url": "assets/js/193.928a91cc.js",
    "revision": "aa04c8d7f682dd317842d943c5f36678"
  },
  {
    "url": "assets/js/194.9dbb2d05.js",
    "revision": "d009d048b9f2494c214584976e562404"
  },
  {
    "url": "assets/js/195.989fe801.js",
    "revision": "13260f21a3cdf488098226277175bc97"
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
    "url": "assets/js/198.d04b345a.js",
    "revision": "a786ac8d2e0960dcda4d0b76261b4615"
  },
  {
    "url": "assets/js/199.1ec406a6.js",
    "revision": "6a943a33d76637287b74a18a4a612dd7"
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
    "url": "assets/js/200.afe72f1b.js",
    "revision": "2d8535f8b3fa5dbc9336bbebb1057e1b"
  },
  {
    "url": "assets/js/201.046e095d.js",
    "revision": "bbd728e078b7c79eec3de1cfec9b4d44"
  },
  {
    "url": "assets/js/202.c2c4787e.js",
    "revision": "2bf94e9392ad7a0adb6e3566264a57ed"
  },
  {
    "url": "assets/js/203.16903156.js",
    "revision": "d3d81ba2a5b7622067e917efed60be1f"
  },
  {
    "url": "assets/js/204.7ae21b8b.js",
    "revision": "509d37878de8ccd0560341f38cf545ec"
  },
  {
    "url": "assets/js/205.443e32c9.js",
    "revision": "88f1ffba802607608cb43f9668ee5088"
  },
  {
    "url": "assets/js/206.dc13ef5e.js",
    "revision": "d7fcc867fee8a628b2bb62317321a949"
  },
  {
    "url": "assets/js/207.39061d06.js",
    "revision": "d64eb2473cb0761996a23531af713a87"
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
    "url": "assets/js/25.4ff25889.js",
    "revision": "3d824cb4b57f7de0aab8179cb089d85a"
  },
  {
    "url": "assets/js/26.73d2074e.js",
    "revision": "1568fc857a78b86b47d70d780c36efc8"
  },
  {
    "url": "assets/js/27.7531562d.js",
    "revision": "5ccaf91ba670e66f3ab779b3fb0b9d41"
  },
  {
    "url": "assets/js/28.1bed99db.js",
    "revision": "d3e99ddb0da3dc216bcb151558a08093"
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
    "url": "assets/js/30.5bbbb10a.js",
    "revision": "585daa3a05d19f7abd1f9da39a916c4e"
  },
  {
    "url": "assets/js/31.3e39db18.js",
    "revision": "af6a881f6b7e1ddb1dbd7e408d772204"
  },
  {
    "url": "assets/js/32.513c7b00.js",
    "revision": "08b1e969c5870c690d402585140b3951"
  },
  {
    "url": "assets/js/33.644a7369.js",
    "revision": "c0b5690354dabb0281566ae03a8d1d6a"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.55c66615.js",
    "revision": "658880fec667d73685f94b051e4242e6"
  },
  {
    "url": "assets/js/36.98f41756.js",
    "revision": "abb86ed5bd11dd240fd41bfd113ffaea"
  },
  {
    "url": "assets/js/37.479f809b.js",
    "revision": "84f96dae0b32d6c989ad17a3b69989fe"
  },
  {
    "url": "assets/js/38.873aae3c.js",
    "revision": "839744dffcb0686045f0ca311c3e78d7"
  },
  {
    "url": "assets/js/39.27afe970.js",
    "revision": "1bd782ed34f7f46ab43e8f76f661e11f"
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
    "url": "assets/js/42.7da817d5.js",
    "revision": "ce6c1b87500f465e7c0c5ac44efe5bad"
  },
  {
    "url": "assets/js/43.12bdd92c.js",
    "revision": "6d72d9271bb5860ce962a8bd1fd9678c"
  },
  {
    "url": "assets/js/44.0a335d78.js",
    "revision": "cdd342798031329eaa925acded2cdae5"
  },
  {
    "url": "assets/js/45.9173c07e.js",
    "revision": "972732c36c3a9ef94cbdb760b27aa010"
  },
  {
    "url": "assets/js/46.ad42eeaf.js",
    "revision": "8bd0f6f4357c70c958e0d01ee3c69f74"
  },
  {
    "url": "assets/js/47.a22b117b.js",
    "revision": "26a4d9857f2d9874f281b0223fa53094"
  },
  {
    "url": "assets/js/48.70720320.js",
    "revision": "884e98eab80e880c740787ca9be46877"
  },
  {
    "url": "assets/js/49.2113e7be.js",
    "revision": "fd86abd9065738619decd4113043e338"
  },
  {
    "url": "assets/js/5.15f50a03.js",
    "revision": "0b10ec7950e22736b0f34bcfedfab169"
  },
  {
    "url": "assets/js/50.e08c0896.js",
    "revision": "cdd325a02ab7323f456f76d608c6ecef"
  },
  {
    "url": "assets/js/51.4859aef0.js",
    "revision": "efad4669a06be3ae3c7cf444873c4581"
  },
  {
    "url": "assets/js/52.191d259a.js",
    "revision": "225d4e9b277a07912c42ceaa82c1eaa2"
  },
  {
    "url": "assets/js/53.9163cbdb.js",
    "revision": "01289cf3e77bd679760777f23a911274"
  },
  {
    "url": "assets/js/54.8be396ec.js",
    "revision": "bf34c118cbfae558eaf3fcf9f3ebf7e2"
  },
  {
    "url": "assets/js/55.2fdef05f.js",
    "revision": "9a0b29db5df79c6408db4b54c15c36ec"
  },
  {
    "url": "assets/js/56.55ac0318.js",
    "revision": "37e4b75c8ec722ae6da002995ced60ff"
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
    "url": "assets/js/60.eae1c13c.js",
    "revision": "9c68771cc6fd6d2697ebf39b513cf8f5"
  },
  {
    "url": "assets/js/61.fb99ae47.js",
    "revision": "e8c25661ef1530e041abbd3b0a9b37bc"
  },
  {
    "url": "assets/js/62.9529d0c0.js",
    "revision": "cc2a5969481562902a15dca10b6cc927"
  },
  {
    "url": "assets/js/63.50db7efa.js",
    "revision": "b389cfb5d5ca915609b00d8b2dfc6b93"
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
    "url": "assets/js/67.aef703f1.js",
    "revision": "7c0afa7bda1e00531ddea2f0d235e0f6"
  },
  {
    "url": "assets/js/68.f4d149b0.js",
    "revision": "bc0de18a85e581d702e2602d707a601c"
  },
  {
    "url": "assets/js/69.19dc9610.js",
    "revision": "5b62ebc48818d1d113f350fc1042c91d"
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
    "url": "assets/js/74.3118011b.js",
    "revision": "178f24635ecc16a1299ca729060c8002"
  },
  {
    "url": "assets/js/75.de66f7b9.js",
    "revision": "f8be1add3ef5afd6426b0b3e56d9ef03"
  },
  {
    "url": "assets/js/76.115c789a.js",
    "revision": "6923588cea315603a4fc5e6bbdb19f8e"
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
    "url": "assets/js/82.cc63f2ae.js",
    "revision": "2d291b09e1566cc4b5e4b4ed1db0aa80"
  },
  {
    "url": "assets/js/83.27a5d72a.js",
    "revision": "58a7f3feb8f9e799e2f207c92786437a"
  },
  {
    "url": "assets/js/84.86c2b9e3.js",
    "revision": "0de0e23845de206145e16b07203af82e"
  },
  {
    "url": "assets/js/85.c29a306e.js",
    "revision": "40ca7f1622f64b893f6adf87273276c7"
  },
  {
    "url": "assets/js/86.bc60fb4c.js",
    "revision": "553037ab17fe556d2c2e2658b1b670aa"
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
    "url": "assets/js/89.33b27b78.js",
    "revision": "564f31a7649a9cb24f73668a8876f015"
  },
  {
    "url": "assets/js/9.cc335231.js",
    "revision": "635766b5133a5a65c8231dd4b179bc04"
  },
  {
    "url": "assets/js/90.414d2bb4.js",
    "revision": "427ee81b9c1ad11891804a97d17a5f80"
  },
  {
    "url": "assets/js/91.22e71b7c.js",
    "revision": "339a926d6419161776f520d764899141"
  },
  {
    "url": "assets/js/92.f23ba5fa.js",
    "revision": "04dd8613520504c004eea346d696ff76"
  },
  {
    "url": "assets/js/93.2414730c.js",
    "revision": "1341c5e36480dfa39bf0e98dad229279"
  },
  {
    "url": "assets/js/94.7e170124.js",
    "revision": "0f88f79bcfdbc50869607ccf34d6efa8"
  },
  {
    "url": "assets/js/95.a35aa36c.js",
    "revision": "6b4ee6a6ebdb5a7421df74a29f7fafb4"
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
    "url": "assets/js/99.1a56f8cd.js",
    "revision": "d0b4c3012dc0f18421f629d6b02e39c2"
  },
  {
    "url": "assets/js/app.7e3a56c9.js",
    "revision": "9e40283119bf4c17d479e696cc3d52a1"
  },
  {
    "url": "assets/js/vendors~docsearch.fb43712d.js",
    "revision": "48ff23311a3e3ff858cd971e67589373"
  },
  {
    "url": "index.html",
    "revision": "4a258b4092ecc8644dc8d807e6107d2d"
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

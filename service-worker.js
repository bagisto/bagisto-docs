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
    "revision": "89aebf4e10d8ed97902437b65abeaedb"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "78df0377c46051100829920d6ff6740c"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "0c0bc4b2f6762058c8f5a20f735af364"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "1431ea59c0937e6ee6e309155bc1c1df"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "dd0c6797a7f2fed1fa9ca570b9fc04a2"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "505133338485578923783459a2c3c0df"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "5c30d314dc4d6f1e8e8084380933b987"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "b4275611d139c321f20368760a96165e"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "03cb87d4aa0d7ba1b0017534c8336b61"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "651328119828dce0b90af274900eb016"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "9fd7413a717ce2773890f012b8b9e364"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "64134fc659fe2fbbbfdcdf25eb3d0c3f"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "25aeef1b2763c9f22cf9774faa5508ac"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "0de9c663885b77f0754ba4d1f3d11456"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "79644e0248dd5a635105a3d1ca2d463a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "776053d715d865ba3aaabd867da802c1"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "7fbd6996036cde34aa1e429de992496f"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "0d49dab526e06f5dec59ca57e04dd8a1"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "53b108773c428b2a85b21ed673376882"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "4da08e2c1663777d61ef0668375a9c20"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "656dac35016d315f2718d9d3b525bced"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "dbd59185b6158048b4d267c2b2d39fa4"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "f36ec947be9d4ec7046d4eff35f0df56"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "de543b3504d015344d3f4b12a47a9556"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "0464594510c6a7768974019bc8b8742a"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "4fedb90972456d30257d80cb030da474"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "2e991c1ef635cbf8949e32fd437b8c7e"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "ceeb6aa1ba60ef17ce1348748d8fe2f2"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "d0f0fc46b4db0d6e3584c74da02acf49"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "17036c56a771726b1d4f9cf1e1b6aec9"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "ced9fe6e1d3e013a87d3e4fc3fb2bc05"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "8fb21eee449df5c884535ce2ac3e963e"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "7277ff7429c772b14fb205d29e5c1ffd"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "aa9c26687ad56261bc8bbd9f2cdbf58b"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "a39b834d2aaaed74a80d8eac04376bb8"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "fa86a1f1958497659e1ab577fb8e93b4"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "4f625bf4173445a1ce4c4975601ad2e7"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "d9d511c9bf6d7bc181afa07573c89ada"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "b4d3bdff4fc3201159f6cd3365b4e92d"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "111faf33d8b271e3f0e564506cd439df"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "94db7a57aaebd5a59bc39aa510eea28c"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "27cfcd3dda12901ab959b4e1f304c1d0"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "aa7d6dc64ee3b65c9b0fdfba341dda9d"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "289eafb6872de883cde8a10ccb89a37d"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "16e9647e54c497eb4215655fd53c4cf3"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "f332e819eacc9e7b2f4d9553ae638353"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "58c1f09f830175d448f0499d7e9de009"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "501a6e5e0d840b7f662b256630a43f71"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "5a0d606b58b4e15d72a7f7e4fb046165"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "2e553d40a69bf167e13ea857acce17e0"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "0ebbfd4dba74921297a4d484df0e0c61"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "5b2aad3e9dd05fd9d288c1179df1cebb"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "1cfcb57cdcf752a0a2d3e9c300307657"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "a0e8818ade51f74dfd754db0659a8839"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "d45bc78f88305a21793b3f61b659491b"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "eec1bd1c33f9ea95fd565d6203d6f4df"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "814305e9e7037f3505526b2b0b21deee"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bb7a4258be0a3bcaa496d07a0e3ff69c"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "9f820d6028e7c39d948d5cf6bc1e62d9"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "f9af278f5bcefa9cfd39baac3337b8cb"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "233704f43cca922178d69ed921efd3d5"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "7506dd2e92a6e6627e4bd2bb67eae58b"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "dcd0a85c9fdb6479dcd1d54c02a83686"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "9e6dd34cd95e0259b3b038518ace29f5"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "5130a590eed17dd6ae642052bd56894e"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "0a2bea961fb68ede578553869e824647"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "d55edb8cb020efd72530e2019c929da9"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "2780f60c05170919b51272f2b43853b1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "bac71fe5e1fc22495fa572d2a7d3d77a"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "8cb5b8652e9fb828c647caa3fe1a49cc"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "027e9f45a5a852073bd4d7cc2a878015"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "755b1520f81aa532ec075ff92afbb7fc"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "68ab14365f4881ad0752c2e54a2c0973"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "7ad8cf77bffde6ac6858dbfb853f352f"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "1a59f158ffc6e75fa09535b806fb71de"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "3df2df7abaa6af369226c326ed2bbc22"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "f9045cfd3758eaabb29098ac5ff966da"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "3494df27e841f1dd49ec9f186268fa1b"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "23a665c2e24f9525b9fb9fdb71240337"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "d3f1d17d414c9552902c62df55e21d53"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "4998e193c13084f415664b053a3455f4"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "0d1b3347aa204a0a1d63e234d4649e4f"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "878b0037a4c9e671688fbab7f873b932"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "c7c6a9496b566ab9f8b4dfa702049419"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "03261dc50288fa88a282bfbfefdbe66f"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "d5e9f0a2c88999d6861fe4ccd8f169ba"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "33068ece38f066ce677833e64e9f8c7c"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "a9c9e2a5e2a12187c2b27915f7af1262"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "850d7387925beb7b3a431bc55bfd4f39"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "3f2ebe1d70e08e1292d1eb2199187e2b"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "8140e8af6a8b4ed662c483b487aaf18d"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "9007d725094fec83e36b0fbb56298101"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f7c56d4dfc0e73ba124343766e84ebd3"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "700767a4b26f2564aab8c78d7591c241"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "db0b2ae1b585a3d376e108d42892940c"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "1a5c67334e272c4a63c537727022fe3f"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "49327457ca18b42653d016a2fc33cb4f"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "f844dcde41086c05c217adcc456a9060"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "4ec51eca1739ae5204ee721b59fe7c8b"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "f4f98ba4cce76231e754a8eb31b808a9"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "c6fab1aa870b6d0c405444f8f34beb87"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "44505180d2c096f6893f10302a680126"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "51b8f24ac9315a8d99fd7de942b93832"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "f10c260e721e68c2b30f05aa0238e16e"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "0bae4ddf1d1b10dfff4528dd4280db7c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "efe7151b20b330739488c57eb1fa8735"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8fc719db1054adf97609d0ed14f3a841"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "4fb55e3e83e7ef0f7691d6033c03ff60"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "b1dad92e7f768c619c53abf22a6607c2"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3979e3b3486a13b41fb26fb3e31c6fa7"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "5bb30d82b6ec286ba3028e35a3656dcf"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "4f952056936472a9929caa2f4ec4a422"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "695589a70698a3d8b789357609b1d305"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b599dfbf983d19859c842393dadd4e0a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "802756c14d310252e7b48753b1e2f579"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "6eb89ec192b84a0d94648bcc30a05a78"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9edecbe4d0c6ed95a94d3b40260ee8c2"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "6bc3d13b9674d25bfb98f81311e03bb6"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "c4cfade7d43eb5ea87639786a7933985"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "9486ec71811ffc76e1f482e1b8b6cd05"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "6db170f35afa210bd18b13ca9c6d6c1c"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "4bc1c8a84e0b7e51619c77bf39c628a9"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "31de916893684b9e0dcb9d459d638714"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "b33dc044a007a99b58e7140426c20dea"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "92ccc431e54d9408f5031565d28f3d56"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "67abedac8d8a5c4163e2e15df74909be"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "0bcdf0aa5cf3976cacded4fa12ae294e"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "9a1b9ec5ed4d47c0c70102d208e1dbb5"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "c5f6d72c9c42a2e56c3b07d208b6d0f4"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "17c7856158762c828084bd5ca47af11c"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "b7d298507e61ce9b270cfb0859109255"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "e69ddbcdb2af52d8b5c81d8931eb9eba"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "9725b94f7374b84bb62ae7e0edbe746c"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "01f98326911cc841c6bbcd05aa40ff3d"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "6baf9423d3a1ae65776cb1a1f4823dc6"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "847d516bd941951931ee5fc27acbb98d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "3b55f71a203457c8be90fbe59b150052"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "5d20e290db87eb7136d727f18c332c2b"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "19c263defa446ce1db75a7c82924ed95"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "f24a7fa14f9a3ea1886f7b16cf599b0d"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "183497b8f161cc622f751b5461ff94b0"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "78b66743da4c6bed8535057e29c5574d"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "c8bca11eae10279549daa36bff802fdf"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "51fa52cfdd55eac07323e98aebb37e89"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "a364b90f586f2cd21479a6d4bb7eb3c1"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "81806dc82a43b898f2ddd3f88e9bf7f8"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "3ce03b8f74f6b8a4b6cab34ae94800c7"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "9578a3dd4f81796264aaf9dba9121e70"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "a577f493a58e509ae688660f0b0a883d"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "158554a84f70c9f1641228ae6f56d4e6"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "973fedff8ea0fa1c242d46fede1cbb9f"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "b46177fff9afbf2c2b2e1a30e29ece08"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "f04c8fe4f74021b1688b5e4058b212aa"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "90bd9dac8e11ae0de0b980b8b1423a75"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "c269acf5790a301086de5964495f97cc"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "daf5dd19501cd3f4cc9e80413179e5db"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "06a5a38c4fc4e66778342a8c9d1a507e"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "6a0ac4b4bec4c1b0147465d94ee0c42c"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "37c8c59f734024f3de3eb223da401746"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "e252de9fb50b9bb10cb7e60d70406d05"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "e487fe682187bd11b5a3cff559522b6a"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "3c2d793cde7dbd64c19487400c15267f"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "eee70d23a985bd5419556c01f01e6f23"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "89b6be96ac18ddef58ee3586482db97c"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "363724e20400eb205d2edb8b5c33f38d"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "0f0ab2cb6076566d427fb0d071f15824"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "ea19fc05444fedb5105cdbfe5c8fea96"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "5e3160a36f08b21c2377e49fcc98e0ba"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "4b101c180cd41834256109b30065cd6e"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "b0dd5efaf975b7650c53d9fe2291f281"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "19f25110d966e447dfaf28f443380fc8"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "f7f37ea59927853c6f50a440bb0aa1df"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "434c94c16c25937dd80aca7ed86daeb1"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "2f8f35b47165404a287b6a16afa513d6"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "f2c0f66b07fb5b2d26624b47009cdb82"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "0bd82e38d68e23c49ae2e73f28c54229"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "5b1e2deae88477d10d311b6ec54a2bfd"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "86e3a5d467394a4a5b732252f039077b"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "79971d07bce87962010c1942a168efa9"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "4454d057870fd8dae0c6d570b2eb0733"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "3a16f26f94ce4e680b71dfac5120b0b4"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "20ee691f5f54ea9880f2a9ae8051aa8b"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "977273ef9b2c1840870ae8940473daad"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "a8702808a8d61721a922eab8eb23c640"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "8e5e5ab5c5689f995ff9ee8ba7b07f63"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "8242481a989db272660cba4457fb4d35"
  },
  {
    "url": "404.html",
    "revision": "d1e7a713bec23b10d671242d5fb93961"
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
    "url": "assets/js/1.6dd4f8a7.js",
    "revision": "fb1a346597e13e37b55030d372772710"
  },
  {
    "url": "assets/js/10.552b3bcc.js",
    "revision": "f5d53005c2a7e3b392a2a4a92619e951"
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
    "url": "assets/js/102.5244d841.js",
    "revision": "c784ee73e3c3f4a3d0f36b5f1f82b9e6"
  },
  {
    "url": "assets/js/103.1ed1e82c.js",
    "revision": "185e8161c26edbde6bfa945e61ecbf80"
  },
  {
    "url": "assets/js/104.6ad45901.js",
    "revision": "9cc7268a655061f188f05649602d3871"
  },
  {
    "url": "assets/js/105.f4960f9b.js",
    "revision": "5cdf4faadae205db95dd86baeb7bdd93"
  },
  {
    "url": "assets/js/106.d4a2b4c3.js",
    "revision": "7c31fa06f62d6f4f71262929c58f403e"
  },
  {
    "url": "assets/js/107.86dca3b8.js",
    "revision": "1994488c20c92f4722646049727f75e9"
  },
  {
    "url": "assets/js/108.97059133.js",
    "revision": "2ba28e3e4e0d39f9e10680b9b86e9140"
  },
  {
    "url": "assets/js/109.4f6b65e7.js",
    "revision": "7d874755be8dd46faecfbaf6bc47a7d5"
  },
  {
    "url": "assets/js/11.b125821e.js",
    "revision": "d27643bba0d75f18ec4bc184db7af955"
  },
  {
    "url": "assets/js/110.e6bd50b2.js",
    "revision": "74aed1aae36f6a0fc0872a200190cb5b"
  },
  {
    "url": "assets/js/111.7ecbdb62.js",
    "revision": "7508de357aeab899ff57359b6d167b78"
  },
  {
    "url": "assets/js/112.e873efac.js",
    "revision": "db1554c9c6d9fa069ff9999a997d8c87"
  },
  {
    "url": "assets/js/113.3b5b573a.js",
    "revision": "1db37a75381c52a77b04cbff92290269"
  },
  {
    "url": "assets/js/114.c37baf25.js",
    "revision": "2c947de7b6a264eebeece583cc02f90a"
  },
  {
    "url": "assets/js/115.08ec3f27.js",
    "revision": "91aafb43caeda06a73d4d07c6b588a7b"
  },
  {
    "url": "assets/js/116.54bb137f.js",
    "revision": "049ba87b49912fa67ef9b3f84ab26172"
  },
  {
    "url": "assets/js/117.a30b20fe.js",
    "revision": "1d29da1a124181c159ec955e7b8a7dbd"
  },
  {
    "url": "assets/js/118.c8d70cb9.js",
    "revision": "322f96b90d43d991b317aef085952f5e"
  },
  {
    "url": "assets/js/119.5552a03f.js",
    "revision": "51573c31fdbacbb9a88005ed87356a53"
  },
  {
    "url": "assets/js/12.20029f38.js",
    "revision": "99d3523fd907ab63246343665007212c"
  },
  {
    "url": "assets/js/120.0adbe40b.js",
    "revision": "4d4ca0f37358d4481b987ce6dce07723"
  },
  {
    "url": "assets/js/121.a3b55553.js",
    "revision": "fa1e19f7efe98fc0cc8e2150d7d2a508"
  },
  {
    "url": "assets/js/122.4c53e8ee.js",
    "revision": "4aa0ffd0806f7dcc763959188ecc26e9"
  },
  {
    "url": "assets/js/123.9bce9508.js",
    "revision": "e2a80bbf5c9a1c676f6dd8397a138a9e"
  },
  {
    "url": "assets/js/124.1f6658ae.js",
    "revision": "fbeed440ca0e125281e7db5b847d7d45"
  },
  {
    "url": "assets/js/125.08af82b3.js",
    "revision": "1c2c1742ab8a2e46d988bff8ae0d5c87"
  },
  {
    "url": "assets/js/126.d594e7c3.js",
    "revision": "7363290ad50660fc5a6f479a4c24ed2c"
  },
  {
    "url": "assets/js/127.eb8d8126.js",
    "revision": "1ea8ce9142d10952ab9ac6845ef169b4"
  },
  {
    "url": "assets/js/128.bc36ea04.js",
    "revision": "463d9d34ce4aaedd73e4b3e72c5061ec"
  },
  {
    "url": "assets/js/129.0a65413e.js",
    "revision": "61fd481511790b73f97f6083354007ca"
  },
  {
    "url": "assets/js/13.3ce53542.js",
    "revision": "5a314d02468eea868afb0048a841e5b5"
  },
  {
    "url": "assets/js/130.615bd537.js",
    "revision": "9a586f23a2af8ebbb3c2df36d519d983"
  },
  {
    "url": "assets/js/131.38488703.js",
    "revision": "169e4a0f95ee46c14d00e13456457e2b"
  },
  {
    "url": "assets/js/132.250529ba.js",
    "revision": "631e2d2e4aaefa7b583ccd9ea8928cdc"
  },
  {
    "url": "assets/js/133.03f20321.js",
    "revision": "87141740ef5f158e9dafb73e78e52e59"
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
    "url": "assets/js/136.e3e94b2a.js",
    "revision": "9f83880884122371a7b364ca7dbf62e2"
  },
  {
    "url": "assets/js/137.ae037548.js",
    "revision": "fcc350793a90201418d902f4c740cba1"
  },
  {
    "url": "assets/js/138.77a2c9c7.js",
    "revision": "1b6a88d3af253dcc2162a1b115e81ce5"
  },
  {
    "url": "assets/js/139.a2134738.js",
    "revision": "c40874b1f1890474289ee5d81c556dd3"
  },
  {
    "url": "assets/js/14.f80c4203.js",
    "revision": "bb7d02611769afc387a78cc0e50265b9"
  },
  {
    "url": "assets/js/140.9b5bc93a.js",
    "revision": "dd028c17df972633e8866398df292e7d"
  },
  {
    "url": "assets/js/141.2462d179.js",
    "revision": "860419606259c31d12ff867456e0dba4"
  },
  {
    "url": "assets/js/142.032bef8e.js",
    "revision": "e49b3c0439632be05f244b5e7966aefb"
  },
  {
    "url": "assets/js/143.3e4e3656.js",
    "revision": "ed4363b16f30ff5bae027720fc0c4da0"
  },
  {
    "url": "assets/js/144.923cc283.js",
    "revision": "71d350e303ce57a6768ad4608a776340"
  },
  {
    "url": "assets/js/145.bf60ebba.js",
    "revision": "2df6a751bb6940d63b6fd8f53212a0c3"
  },
  {
    "url": "assets/js/146.6731c76f.js",
    "revision": "f1091e6ab7075e5fb3ab632a6abf9cdb"
  },
  {
    "url": "assets/js/147.7e46f4fb.js",
    "revision": "e899986c16160d13f4eac40d4b858bec"
  },
  {
    "url": "assets/js/148.98dfdba9.js",
    "revision": "0eeb2b7f69aeefc469db226cb66ad471"
  },
  {
    "url": "assets/js/149.0a169202.js",
    "revision": "c0782049880a5ec494999c9b7f5a08f7"
  },
  {
    "url": "assets/js/15.2296da08.js",
    "revision": "fc19334e38725c2fb1182d6f58667359"
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
    "url": "assets/js/154.5a3eeffb.js",
    "revision": "1069ad72eb819fb384fbc41a32474c5a"
  },
  {
    "url": "assets/js/155.384337c0.js",
    "revision": "3105f7ea69455b45336635a6ee70fa04"
  },
  {
    "url": "assets/js/156.701ed465.js",
    "revision": "0b99e35e30da787596df19553d6082a4"
  },
  {
    "url": "assets/js/157.be7cf548.js",
    "revision": "de0e9e43c24210a2a3d73c96b3ab3c15"
  },
  {
    "url": "assets/js/158.59f811d0.js",
    "revision": "159b392022928eb7218c2e486683b30c"
  },
  {
    "url": "assets/js/159.29f85d11.js",
    "revision": "d1511442764bf855be1885e47c3dca49"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.d504781c.js",
    "revision": "442c6ad36481914ae386b85ca74256d1"
  },
  {
    "url": "assets/js/161.6beaf180.js",
    "revision": "e1bacb04a8681b0605b1d1c21e6c9785"
  },
  {
    "url": "assets/js/162.c5b39ccc.js",
    "revision": "64a13b01dea5e3ad06aa689bc4577b6f"
  },
  {
    "url": "assets/js/163.baf5e5b0.js",
    "revision": "0d1f974badae129aac6cc72cee0ccee3"
  },
  {
    "url": "assets/js/164.e0daf473.js",
    "revision": "3f7ca256a2c6bbc62a4bdadd666997a7"
  },
  {
    "url": "assets/js/165.9f0c5d68.js",
    "revision": "5ad585932074f295282c3b36dfb079ae"
  },
  {
    "url": "assets/js/166.cc746790.js",
    "revision": "dda90baedd6f4d8020d6fd94148985b6"
  },
  {
    "url": "assets/js/167.32fc6bf5.js",
    "revision": "eaa93238ad40680c4f38f2cf77d79fa2"
  },
  {
    "url": "assets/js/168.ff971372.js",
    "revision": "0ae28449d5ecf13faedde6cd858a81cc"
  },
  {
    "url": "assets/js/169.628a94df.js",
    "revision": "eb365a3083461397265432c17170aa18"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.9803c10b.js",
    "revision": "b240e3468b695cb5ec7611b146f7e5c2"
  },
  {
    "url": "assets/js/171.26a873fe.js",
    "revision": "8626dbd296f73014f025c1077bdac588"
  },
  {
    "url": "assets/js/172.78d4c85d.js",
    "revision": "0c292ae8678dec7f780bae83d858cba3"
  },
  {
    "url": "assets/js/173.11456e53.js",
    "revision": "e4802fffb2caf857169fd6ee4278d33f"
  },
  {
    "url": "assets/js/174.227c74a4.js",
    "revision": "e059b0f04e1299672b829a51a24f7bf1"
  },
  {
    "url": "assets/js/175.7e6cdf16.js",
    "revision": "a54d95bf14a5f6058a9ab0ccd546732f"
  },
  {
    "url": "assets/js/176.e7c68405.js",
    "revision": "3115a5981f0b5ad42a34a5777359c299"
  },
  {
    "url": "assets/js/177.b3afc7d9.js",
    "revision": "9573cc39ff38ab20dbbce5ae8e53584f"
  },
  {
    "url": "assets/js/178.a8b00933.js",
    "revision": "bf314a9421460e6244ec091533d87b04"
  },
  {
    "url": "assets/js/179.ccc4a331.js",
    "revision": "02801c17fbd77b5685a09c22c31344f9"
  },
  {
    "url": "assets/js/18.9c87cafd.js",
    "revision": "aed537f361723c7c2fc603576c60cc09"
  },
  {
    "url": "assets/js/180.1d92e5a6.js",
    "revision": "966908dccf2468f24d986ed6709cdc67"
  },
  {
    "url": "assets/js/181.a0a543e2.js",
    "revision": "220a6c9e25d7e2cd03d253824e20a056"
  },
  {
    "url": "assets/js/182.5511dbf0.js",
    "revision": "40d47694202c8d6d2f6f358784d30bc5"
  },
  {
    "url": "assets/js/183.78be5171.js",
    "revision": "bf58e9b4f4a15ead128864fb58c681cd"
  },
  {
    "url": "assets/js/184.6ba7b381.js",
    "revision": "36a95e8675c0aefd7c9ff59b1c034dab"
  },
  {
    "url": "assets/js/185.f39e31a8.js",
    "revision": "f9629a809e583bcdd64bfa7a825c4a89"
  },
  {
    "url": "assets/js/186.9162f7d1.js",
    "revision": "a3800c5a8164aac611cc2fc52d83d18e"
  },
  {
    "url": "assets/js/187.9286e7f8.js",
    "revision": "bc49f957c8259e6b82235d3ffcedb22c"
  },
  {
    "url": "assets/js/188.ffb7cd4a.js",
    "revision": "82f88fba1db54171410f728b53fdbc91"
  },
  {
    "url": "assets/js/189.5a703bc5.js",
    "revision": "7db9d6413987eafeb3b75f653c659f45"
  },
  {
    "url": "assets/js/19.adf9b905.js",
    "revision": "db3407784a9143e05fce1d347d3bb5b9"
  },
  {
    "url": "assets/js/190.1134d356.js",
    "revision": "f9efd0c18fb4111a8f6eb90ec8d60ba8"
  },
  {
    "url": "assets/js/191.89444f08.js",
    "revision": "5e9eb2e5d18903cf1c7eae9a73be9576"
  },
  {
    "url": "assets/js/192.966c95ec.js",
    "revision": "d0ef2efc22e9748e9d4f951f9ea7e0cb"
  },
  {
    "url": "assets/js/193.6aea9d57.js",
    "revision": "b27595d09b2b534359293721772e2c78"
  },
  {
    "url": "assets/js/194.8137e6f4.js",
    "revision": "a0f6dbbd3e968be35513fce953f6db08"
  },
  {
    "url": "assets/js/195.c177244c.js",
    "revision": "cc1d7ff2f70b0f09f6ab32d6913cdf95"
  },
  {
    "url": "assets/js/196.2bcf3fe5.js",
    "revision": "364bfdf166d45f12d2cfe41c110ebee2"
  },
  {
    "url": "assets/js/197.74446753.js",
    "revision": "94e2f84fb2c0ae9385a001f3471311d3"
  },
  {
    "url": "assets/js/198.e11cc989.js",
    "revision": "f4f3dd40fa5e23b867c055621158620a"
  },
  {
    "url": "assets/js/199.c3758c98.js",
    "revision": "850780cf81f286882de85389fc3457ca"
  },
  {
    "url": "assets/js/2.f6140c89.js",
    "revision": "545c298639f03711be7877a4884063b3"
  },
  {
    "url": "assets/js/20.58d18bcb.js",
    "revision": "1e07fc7a0c163eb6bdcfa1136eb485a2"
  },
  {
    "url": "assets/js/200.9a80a648.js",
    "revision": "8235a57f97e60117ae70fd8fed14b967"
  },
  {
    "url": "assets/js/201.bc55336c.js",
    "revision": "f6c6d9255f5342a079b76b3414149e45"
  },
  {
    "url": "assets/js/202.fe05721b.js",
    "revision": "4bbc99b911b8eae9466ddf6aef605c02"
  },
  {
    "url": "assets/js/203.e9a4bc50.js",
    "revision": "4afdd9c7759bba42194dd13aa2e0edbb"
  },
  {
    "url": "assets/js/204.94a00bf2.js",
    "revision": "70495ec5da621e1a88316eafabb5b906"
  },
  {
    "url": "assets/js/205.473365ad.js",
    "revision": "a98fa8324cd16abd14d948323ce3c560"
  },
  {
    "url": "assets/js/206.4597a4cc.js",
    "revision": "09285e4167a2b253f82dd9e6229f731e"
  },
  {
    "url": "assets/js/207.a65f33fa.js",
    "revision": "062276ea66484efdb7092468b6d471bc"
  },
  {
    "url": "assets/js/208.7d80c584.js",
    "revision": "e4b6c06a718a7c9da6d34d589ae12b1c"
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
    "url": "assets/js/23.086f54d5.js",
    "revision": "f97be441322eae661d7ff383e25fd372"
  },
  {
    "url": "assets/js/24.71c8156e.js",
    "revision": "f48070543d853e5d22e81ded7ef472bd"
  },
  {
    "url": "assets/js/25.f848abf3.js",
    "revision": "f2d21f8719821f015a043545c8f09898"
  },
  {
    "url": "assets/js/26.c9857e4a.js",
    "revision": "dd4e0a6f1f579c6d33b9802f94376a0e"
  },
  {
    "url": "assets/js/27.607e82cd.js",
    "revision": "b2fdeb7f57b137ad6e512a91fd88b556"
  },
  {
    "url": "assets/js/28.b162cd2e.js",
    "revision": "5ecd8204e4f7d8c26501ae3110d05ac6"
  },
  {
    "url": "assets/js/29.82f49fa2.js",
    "revision": "c689afdc728776f6f20ccb0a00d68808"
  },
  {
    "url": "assets/js/3.4e98f9f6.js",
    "revision": "61b48eb787fe33dc3277eb72c338876e"
  },
  {
    "url": "assets/js/30.06430d55.js",
    "revision": "79db131047fb5dc7b0f4a926fe754f50"
  },
  {
    "url": "assets/js/31.e55eb019.js",
    "revision": "2fc647e68967747c2c5c119d7cffa9dc"
  },
  {
    "url": "assets/js/32.a84aa4f8.js",
    "revision": "b2266bc8a299ffef156abb97a148d956"
  },
  {
    "url": "assets/js/33.6369e002.js",
    "revision": "059d726e3ae762e623edad4ea7a1f326"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.d776bfdf.js",
    "revision": "e0e28f3306b2b6541e7cb6442e15fa07"
  },
  {
    "url": "assets/js/36.05d08f3d.js",
    "revision": "5d69e91f0e4d436d52495d39031ae561"
  },
  {
    "url": "assets/js/37.51ed2ef8.js",
    "revision": "8da780200f842c2af903250304d90c16"
  },
  {
    "url": "assets/js/38.1d0b5e5a.js",
    "revision": "04a4fbf369c8af1a60bde56bb13b70d4"
  },
  {
    "url": "assets/js/39.93c7bc70.js",
    "revision": "406d373461c585ec8109c53e6ab03757"
  },
  {
    "url": "assets/js/4.59fc6872.js",
    "revision": "99f4420391c28e81f0421158f69f8cf8"
  },
  {
    "url": "assets/js/40.a06039ee.js",
    "revision": "6bee71d16592aa242ec069cda8d1f997"
  },
  {
    "url": "assets/js/41.5dfdaed6.js",
    "revision": "1a5787311dcd165d2197b05d1ae02211"
  },
  {
    "url": "assets/js/42.436a9fd2.js",
    "revision": "f3df89e6d07b6c2c6a8c09ca6b16ac3c"
  },
  {
    "url": "assets/js/43.2ca766b6.js",
    "revision": "f336e39c1ea9a449dfb09384238f3429"
  },
  {
    "url": "assets/js/44.f2fa1de3.js",
    "revision": "3744d88414f4d9b539efb93f0063b4f4"
  },
  {
    "url": "assets/js/45.904400e5.js",
    "revision": "4d50c401a8a59b24766c4e60744cf054"
  },
  {
    "url": "assets/js/46.0c96e38b.js",
    "revision": "3fe46f514484db41edccbba6b5893245"
  },
  {
    "url": "assets/js/47.3c03855c.js",
    "revision": "e957318dd2fcf16a45cc5c06016800b2"
  },
  {
    "url": "assets/js/48.aed48441.js",
    "revision": "4942ae11c047e4d0d0f3d4c5e242ffe6"
  },
  {
    "url": "assets/js/49.8ea2fe1d.js",
    "revision": "02bbebbc98452eefa35b226ac99dc37e"
  },
  {
    "url": "assets/js/5.ef1926b9.js",
    "revision": "9b080f84114dc3bc552f574a78fdc52d"
  },
  {
    "url": "assets/js/50.ae385377.js",
    "revision": "3ad94ff37839176d280f2875a7749910"
  },
  {
    "url": "assets/js/51.004ce04f.js",
    "revision": "e377d3212027ad4f47beb5ed73aba69e"
  },
  {
    "url": "assets/js/52.8e557325.js",
    "revision": "647933f3c1a77026f778e7a857061ff7"
  },
  {
    "url": "assets/js/53.9d824190.js",
    "revision": "f8438f837bd6dbaf3211f4d99f885137"
  },
  {
    "url": "assets/js/54.4e3522c7.js",
    "revision": "e8eb8c9d142e8e91f74cd151b6c23488"
  },
  {
    "url": "assets/js/55.18ed7d80.js",
    "revision": "2a13f95ddf45433a9ee01acb1404ddad"
  },
  {
    "url": "assets/js/56.07aaf026.js",
    "revision": "8b32aaee25166319a0efdcaa8641b17c"
  },
  {
    "url": "assets/js/57.112a1416.js",
    "revision": "79396b3093db7e6f792b476546c971fe"
  },
  {
    "url": "assets/js/58.f16c7192.js",
    "revision": "dfb91fa92cc8069d7b26b527860c76f0"
  },
  {
    "url": "assets/js/59.1f8b636e.js",
    "revision": "5b833f136bf66a48ce43697b2021b34c"
  },
  {
    "url": "assets/js/60.f6fd7e9a.js",
    "revision": "2c8503d610aee9031ad78c64e0c85b6e"
  },
  {
    "url": "assets/js/61.276b3889.js",
    "revision": "e4c5a690caa846595fbe5ec9933942a7"
  },
  {
    "url": "assets/js/62.180e6489.js",
    "revision": "2d47de36f54c1dc16ba544caf93b67f6"
  },
  {
    "url": "assets/js/63.f9618695.js",
    "revision": "daddc5fcd60578b244f66096ca684d4c"
  },
  {
    "url": "assets/js/64.d9c11311.js",
    "revision": "71723cadfa9ecada8f256f3b33e244a5"
  },
  {
    "url": "assets/js/65.052c65b9.js",
    "revision": "b04226e2f507758112fbf9c3d65d89c4"
  },
  {
    "url": "assets/js/66.acd4a62a.js",
    "revision": "25e5747b5cee54e3ac4dee2f3b118327"
  },
  {
    "url": "assets/js/67.7d9c2046.js",
    "revision": "2391c6b792c9aa0f756797d2307e8199"
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
    "url": "assets/js/70.2fb1db62.js",
    "revision": "f7b215c697b89867a0af6629c8c2d9e7"
  },
  {
    "url": "assets/js/71.8056347e.js",
    "revision": "6fb210dcb541e5d28518be72bc7f3c36"
  },
  {
    "url": "assets/js/72.3629bb4a.js",
    "revision": "620f4321c1f81e1c54be9eea3d886e0e"
  },
  {
    "url": "assets/js/73.8c3f59ce.js",
    "revision": "bcb04274a9fd8463048473104374360d"
  },
  {
    "url": "assets/js/74.efbfb4cf.js",
    "revision": "bc412c0e48baf6a3a4142591d38b0c13"
  },
  {
    "url": "assets/js/75.98898394.js",
    "revision": "09f9b63509dcb999561a2d6c5d4339b4"
  },
  {
    "url": "assets/js/76.52022aff.js",
    "revision": "81f204a20a129d3f0346a6e88f73d3d7"
  },
  {
    "url": "assets/js/77.9f490f3d.js",
    "revision": "ab5bcc1b675e38e8630c0972c893c106"
  },
  {
    "url": "assets/js/78.c00896e6.js",
    "revision": "91b352dfc2660ee47baf1230ff4410bb"
  },
  {
    "url": "assets/js/79.c854552b.js",
    "revision": "0ac4050a15d07beb82132833239d9839"
  },
  {
    "url": "assets/js/8.1432828c.js",
    "revision": "7c313c64bcbfd5af6e24f63ea1131eaf"
  },
  {
    "url": "assets/js/80.422261b6.js",
    "revision": "e7de2ca1b0bd96884d3aa67e7da9dca7"
  },
  {
    "url": "assets/js/81.f6d9361e.js",
    "revision": "a7c6d3992f36e33357d6715ee133dd63"
  },
  {
    "url": "assets/js/82.79775327.js",
    "revision": "b9e94908fb1108374f1284d31d203dad"
  },
  {
    "url": "assets/js/83.9964fad3.js",
    "revision": "f981adb81e1cc7feff6df677583bacc5"
  },
  {
    "url": "assets/js/84.d931bcf3.js",
    "revision": "2851df041fcdcb4719862335ae508563"
  },
  {
    "url": "assets/js/85.abcac79c.js",
    "revision": "e78caa8df247f90e8235824d6c782da9"
  },
  {
    "url": "assets/js/86.496c9162.js",
    "revision": "b270fdba70c3102d29600a0a467bbf0f"
  },
  {
    "url": "assets/js/87.89094592.js",
    "revision": "68c391cfe70a4ebff5e62934cd1a7a3d"
  },
  {
    "url": "assets/js/88.9c6c4159.js",
    "revision": "89e412fca29a9e5d763cd4752e5fe43e"
  },
  {
    "url": "assets/js/89.ef09667a.js",
    "revision": "859c94f368e78b2834736dd7e901e1ff"
  },
  {
    "url": "assets/js/9.4e221773.js",
    "revision": "d0c83214e067dcc60c4876398d9bb1cd"
  },
  {
    "url": "assets/js/90.9bb80dd6.js",
    "revision": "40fa7b02c9542a98e23557a243fc85aa"
  },
  {
    "url": "assets/js/91.34a35554.js",
    "revision": "6014f45c364cd297e1b7e1d37ff5a051"
  },
  {
    "url": "assets/js/92.8b333e92.js",
    "revision": "fd818680c2da4c830f17662415fe7683"
  },
  {
    "url": "assets/js/93.0b8725e6.js",
    "revision": "40d845d3f11af41cd948d78efbc94f2c"
  },
  {
    "url": "assets/js/94.5d69653f.js",
    "revision": "b28383bddaea3d0104e8b419aaf23e35"
  },
  {
    "url": "assets/js/95.0cdbfaa8.js",
    "revision": "0ce4405ac17f172c9a40611ebe1d15a9"
  },
  {
    "url": "assets/js/96.bba263a4.js",
    "revision": "d0790868a4f6e9f302186b02d7535cb1"
  },
  {
    "url": "assets/js/97.ef45a441.js",
    "revision": "abd1f4645f335ef343766cbeda89733d"
  },
  {
    "url": "assets/js/98.0e001acf.js",
    "revision": "78576eb9f1d9a98bb13623b19e5104b1"
  },
  {
    "url": "assets/js/99.dd5cdabc.js",
    "revision": "fffacd043c06f85564b5fcb5d1c623f0"
  },
  {
    "url": "assets/js/app.43065cdc.js",
    "revision": "1aab34761073dee297b369dd80371f2e"
  },
  {
    "url": "assets/js/vendors~docsearch.31b40087.js",
    "revision": "01fa9fd5944a871b5ff6158ef543b0dd"
  },
  {
    "url": "index.html",
    "revision": "c0b533d598afb25ab3f07b0fbe3a6c64"
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

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
    "revision": "8bb6017adfee7a00cdb4d136af833414"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "be2f2505044afb09d154af5deee1443c"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "9c7c6111fc6591d4cd8dbe7653594656"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "2e51a5593ef6e7e6e85f832ee635d9cf"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "8060e1e849cd2b6e453c8439eaa5f49e"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "22a2ac4db4eb84e4c8425140ad600b05"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "dd0625af0592924f2a8784c8a5eddf0e"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "90332d7fc6759b8b6051d97ee9673fb4"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "6c05636619e4ddadacaeb896b971114f"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "00310e07ca6de49c46f2facc10c5e14d"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "3c8077399bd72f9eabbabe56716bf606"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "fa0300cf6c8517dace6a3b82f1df0324"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "240b314600944a723d6ce4923faa5ab1"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "0dad2c6fe5e092f1497a15be7ddce961"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "61e791071748bc5bcbdcd8ffe66752e0"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "1fa711d7f9ca07d2b112a8b4d78593f6"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "b939e9b21c78db290b528e489069bf63"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "8e64fbd01d5e27e06fccb1e6d6daa893"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "55f2a355cb12486825ff4bc76fc3b28f"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "d35e1da1e6ec0beffdf8cf50df206108"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "c416bf270728e4352b605d9ebd3ed3ec"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "44bedc4ad25ac10d56bc226cbbe66922"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "4764d713add3080dc73debd676d52148"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "6a9042d14f086bbd46d1aadc2b6df349"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "818a5a0d11abc6ed8e6ce4f8fae2857d"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "42dd83cf684a632c87eb7d3c0bea07e7"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "5d8733e76008eb43b778f75fb55c2396"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "08188d91d062f62bde342dc6e2ab43a5"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "502265f318b343d7e2b3497dd7b7b8bc"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "9ad89585a4a6e0d33ff48406725f27c9"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "32b286499108254f028390c38859ad63"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "a0dce674ad80734d3116cdcd4b6f624f"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "58375e2d7887615d3e1f4192a547e909"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "549d13c53a18eed852529fb46c412bb4"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "a0723718a134127635b5bd2711bc8e7c"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "82836fc8070bca892350de04272e9ad9"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "6a5e7337c61278abddb799311660f648"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "8e4cd745ab1e0a82e5f56f36a34193ba"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "61112092447eb97ecd313e163a3d5812"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "47731bfb142acd2c6b537b8c620155b7"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "c0450afb6cc17b51a894c6e921638fc1"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "df536c17bbfcc9f9d9ee11c87b2491cd"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "30268edfb2d8a66f3f2632bd5ff7fd27"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "1c4f05a501d7d121ce9954915ba44d63"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "10d831d7953ecd403c99055f11faefe7"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "17953f971b397b1f29787158a0062450"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "71a7040143a748b1b5e06cf86fca5956"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "f3dd8bbb2e95d54a5e90e3690499c78e"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "013e6378f5228698f3cc347da038f591"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "0bbb21f7ef9c6bf78c42673d4b38ee01"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "a75b53ac0eb394eecad0d2b59dbcb470"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "c1bf9368e720d4e172ddc0e9ce8682a3"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "88671d701204c88d1626d0ee3bab1625"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "288d53400d3631b29fcfaf93f1169ae3"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "acce6b5a7d38016a9661ab40dc35e803"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "95ea690c3bf6e42f6d2c052447769019"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "0160dc9c364f3ac3d09cbc9a30c3b337"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d5366166e6d41f0e92dde51f9cbed1d2"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "3ace543268cef22144397b2e96526e63"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "8db34f9f1473e370313d737902f189e8"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "08f57caae021c27656d82fc75953f829"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "77d858a9975c349a93ac1e5a28b6fb6f"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7712d12382f484464951d86309ef3bbf"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "d0c4f9082b26720f82b02d7cb89bab55"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d9123dcd5aa9091a8ed53cdbf93a7314"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "cdd1605da1b9854db660cacd5bdb00d7"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "a3c73bd5d9c6aa91d563674415940b27"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "7680f1efdd7ffece14057859d3c5ad5c"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ecb70a29bd337fe68ddfae9dfca50883"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "294346dbec985be06738f934be58f4a7"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "8ac9700766734b2ac8fae360a93f78ee"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "9f31bedabfd4dc2402df2edf37db1f0b"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "96c0c78274a5899664f5d79cbbaeb6c1"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "364d34ec0389abc359598fd3489335a4"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "fcbc5b2dfbfd905038a49e627f8bdd86"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "d42a42d6015979885f0a1a55f90cf981"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ebe25f6102077d45f7aba5bd7720eeaa"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "237d77673ba1b037d2446b9a6b50f0c9"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "204fa82ec9c0e044ed4eec3ed9617529"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "41cbb377aa348fb6dcc25d07205a9e6f"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "f5bd5ce53eb807990e1e3096e4afcfab"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "10b91a3e93d568c2b82ded44c0d6f512"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "694b983a66889342a6a97db36ab15338"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "3c6dd064dfed7bf55532240e8e2d545d"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "6d8014a2223d59963e1d7d4de1625adf"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "68459c9e19a07a5fadd824e0bf8bebfb"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "e67eb919f3aedbae1645d713e8719043"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "51fcdefb9e05c8a7ce44860f0cbbbec6"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "889d7558ae8742a2021396d59e08025f"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "d5283b6414cdb6cd68e983e6ddb8c5eb"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "4e9dca1ea56c525d8e8ca0beda55265d"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "185e482be1fbb66cc6342161ffb482ee"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "331fe88809a99ac0fec6ec4f7d669cdd"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "6354bc08827011aa0c24f9e472bfa9ec"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "e79552825ad46f144a18b4b12971c8ae"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "075a6284bd05ebacb63f03e44981f9a2"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "ae4bc438b6e4ebfb2fd8bfe5ccfa3a27"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "2e0877d5bdb11883bc7c15efc9066e68"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "7e98bc0a8f9de56f7391dd9731bc8c57"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "51b021effc6bad77c62b3ad6da9ea0e6"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "5eb3840d44361b2d31f8d1ef3c557f50"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "3f510b4bef75794ea522105edd44c7c1"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "63ec92175b1565aa7f1d702f9e15714b"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "5fa4f8b88c9d14f1453afdbeff93034a"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "1f4b9590bb0d0faf7813d94259340812"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "9041d38a0ae223d27bf7cfbb5eb4f525"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "32994c84448d16edeeab2e5bd6936a45"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "841f9e16dbbc7fa6bb6b320fffdea1fa"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "3b2ac18d86077608c4d0327a0bba7c98"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "8bca9919eddef96ed3eacfa187e05861"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "53897379591c66df0e26a3e118b33f66"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "a34d0766a361a7e1b57a7eb59eb8b003"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "76a5055ceb944a189f152851e749e175"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "723fd686f3bce0cc21d29f8256eb4246"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "908112e372f04fbacc55a5b44b78855b"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "82f82405b4a2cdb02a2632b2df3ef787"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "62bb08bb6514bdb68281daad29442f9e"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "1580cf3b9ae92b64673646aaec23f08f"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "3b07b0670d458023e7b342537dd3db93"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "bdda777745df376a790f8117bec0e1fd"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "ddc6a639d3f58a7532ff7eacf95cee93"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "66c0dba851babef5c6c7dbd10d6d3aa3"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "d0d397277c620361015c43af9402dc05"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "94b438c0820aa627c77b924ce6b3dc63"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "d1bf3234a4598a8ad455fed29fcc72b1"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "3bf8eb8f73b234ca177bb341d05d0292"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "e904cc507b6133c27ecef3e985a042af"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "0eda50aaf5cc9a75c24848516db01baf"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "8710ae03cf00212be53a095c1d3bebda"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "1531dfd1ccfb65baf7849f370d084094"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "9fa02968b92d21a4e993e192294d67ea"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "2472390724a97fbbf794209b115962a1"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "54402c4015d1732780b47a7fc3f8966f"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "57f039e5277df7b861761c3dc28c48b8"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "904441ae92f64a99519a5cf293defbc3"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "6e867ab47ad2b58bc31d50df7b25f232"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "ac4b0c2a1e64e08b26ddc8b99dd6b9bb"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "56e508cdd0fed842b969b87909cf2853"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "2b0d0d15c7dec8cb65fff651e092d02b"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "bb4eeeb2ce95b0bbeb15541ff6572bc3"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3e92e764af1f4dbac49c1653f355432a"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "745d6d126f933741bd86282101286d78"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "81a384fb8ec5435047f023edd4e548e4"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "85d16302535c5e0baf660fc100eab581"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "b764b141820bff8c6ee9b77ef16ba104"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "a6b419123ff2009bcc8e9e492b0433f3"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "73e89918f564c455b6ee069963caceb0"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "9a51c0c046c9c0ee0d733272bb3fcef6"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "955b57e15deb10b8c478e5b89d277012"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "7ed4976bc8571b08cb263c1c4d7827bd"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "748ef93fd5306bb36dd6404c6f4e1dee"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "871e998f5514de2f1f33a7f72d73021d"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "e2d0edac93f0c2389c441a723384c541"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "49105e9b51b4013c825aad8987f4439e"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "8004ccd8b2362d24ae61ea1b07da430a"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "0f9133e68720bf740023d1580fe01ab0"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "587c18404b23fd2b2e955e4944c390b6"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "74d9f6226247c44c651c3148689c3a10"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "e43124963597990013591d595600e5c5"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "80dda8efa4c46cece06c023c647f07be"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "2c823d4833fdaca9056a4948297c5dc5"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "5010621f7c5a5189b3a5c132054cb8d5"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "0c935c9e77d0655b5d6f3d66ee35750c"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "f43fc9cc42c53bcbe93bdbfe06fe8642"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "a8c311f97435bad196bbcf16f36bb8c3"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "db77d891ff5de1a26fdd1aca8d3a0bf0"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "a7b362560976031da7e83a56e3aaee23"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "53b803d2a427a98121e3ccabe41b77d4"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "13c479227763574b51dda50c22b46e9e"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "39ea2bebd619a97b19aa60e8ad24c5d1"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "a751eea380013a78ef95ce84777d3965"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "d40ad938b28c834fb46cde5a3690ea82"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "5403218796be7d3d72a988aae6f1621b"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "ade36e0bca28c09d747565215ba80607"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "bc2bcbda23c95aade95801e6b92da408"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "a07fa1c6484118cffb7632a08f1c760d"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "c0d4585d6dab789817de11f9028ad86a"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "cd988446f557834dadf94fabc5e80c96"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "aace322d675e80d2ae36acea5b2e997c"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "ba8b83c3e77230cb2b5e421b80a794e5"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "8e9c036ca655fbad35034d4a66a34f4f"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "5e1c17b93506fa2e2b3dbcc629e71227"
  },
  {
    "url": "404.html",
    "revision": "ef956c2109dd28e3bf1de3d50ff01c65"
  },
  {
    "url": "assets/css/0.styles.74cf57b0.css",
    "revision": "3940e9ec40b59a4daa7a4d21e3df65d0"
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
    "url": "assets/js/10.47abe10b.js",
    "revision": "884531af452a9656cd6f437b85c02adf"
  },
  {
    "url": "assets/js/100.a44c1c9e.js",
    "revision": "f8e771267baca7a383793d285f1da667"
  },
  {
    "url": "assets/js/101.0adf040a.js",
    "revision": "a7328bee54476b6df211d45d7fc3e1db"
  },
  {
    "url": "assets/js/102.0ae65d85.js",
    "revision": "a458d3cb986020ec897958ea9e6c3d84"
  },
  {
    "url": "assets/js/103.28e648b8.js",
    "revision": "c2ec4c4641906a378bb0091634fedb01"
  },
  {
    "url": "assets/js/104.d3585483.js",
    "revision": "a0de0a38f8a63f74a1c7acb2a96958b1"
  },
  {
    "url": "assets/js/105.516742eb.js",
    "revision": "83544141139ab20319cfba1049b2eb55"
  },
  {
    "url": "assets/js/106.e9c288a0.js",
    "revision": "1844dc3d210266947840e9c87adb6692"
  },
  {
    "url": "assets/js/107.d5adc601.js",
    "revision": "2d038c2ec9e70fe51a143dec5d8ff79d"
  },
  {
    "url": "assets/js/108.d7b11cda.js",
    "revision": "b2fa613ab01352b0e9e08ff47a7688cd"
  },
  {
    "url": "assets/js/109.60f1426a.js",
    "revision": "c3d6e28d3f84507d9a17170ff44c31bc"
  },
  {
    "url": "assets/js/11.c33b8c6d.js",
    "revision": "0765ac0970b76b53c2346a2a4d5e2997"
  },
  {
    "url": "assets/js/110.ccc68371.js",
    "revision": "ee088f0e40288427383cdbe330cb0c1d"
  },
  {
    "url": "assets/js/111.0ad39cfa.js",
    "revision": "858fa24244ea56f61d31b34c7175e125"
  },
  {
    "url": "assets/js/112.8259bfa2.js",
    "revision": "a4e0c053551604d096bef3077384c858"
  },
  {
    "url": "assets/js/113.5cd70541.js",
    "revision": "31bb7ac36906757a22f1a2c9a23f6a5c"
  },
  {
    "url": "assets/js/114.a0b63035.js",
    "revision": "6116e4e1f9af16b0cfc4b84a12043903"
  },
  {
    "url": "assets/js/115.386fc380.js",
    "revision": "70a9079e1425e93d63f08484e6b0c6d4"
  },
  {
    "url": "assets/js/116.d2a7ed41.js",
    "revision": "524d345790faf290be75c7459f94e643"
  },
  {
    "url": "assets/js/117.76704abd.js",
    "revision": "9aec4b56d5b6def697c3fee58b09a27c"
  },
  {
    "url": "assets/js/118.c5341320.js",
    "revision": "380c449c8b2db09b6a4853d45975b624"
  },
  {
    "url": "assets/js/119.b8b212e5.js",
    "revision": "11c1ba6c23b6b2d36acd84bc250a99e8"
  },
  {
    "url": "assets/js/12.dc76d0fd.js",
    "revision": "24c983a8043a8676ac4e5ef0a080ae1c"
  },
  {
    "url": "assets/js/120.c9056b04.js",
    "revision": "2605ce4a4f95d5710e81421dd9547960"
  },
  {
    "url": "assets/js/121.bf5a9319.js",
    "revision": "c02e291391940ed260b57084703d5d56"
  },
  {
    "url": "assets/js/122.855601c9.js",
    "revision": "98073d15043aa9996b51a6f8bcfc5d67"
  },
  {
    "url": "assets/js/123.8ec469de.js",
    "revision": "b2e8d8e46e881a711b83e395c6ab8f65"
  },
  {
    "url": "assets/js/124.6191c9e2.js",
    "revision": "84c086f5785a1460a23fe072a3665e8b"
  },
  {
    "url": "assets/js/125.0c4ae716.js",
    "revision": "f12d577c7c3dcb117447e1e6eebdb0ef"
  },
  {
    "url": "assets/js/126.1cb5602b.js",
    "revision": "13ce3f5ee2761432141f51598bb80b22"
  },
  {
    "url": "assets/js/127.661318c1.js",
    "revision": "869f3c2a117ec53e6142ed1c092e9550"
  },
  {
    "url": "assets/js/128.a544aa2b.js",
    "revision": "9c17a9bbfc3ed520b8e2c64aa9621465"
  },
  {
    "url": "assets/js/129.d349f696.js",
    "revision": "272aa78bb4d17ba8b0beb71f7a15c11d"
  },
  {
    "url": "assets/js/13.31a0560d.js",
    "revision": "ea6e92214fa52736f15523075918fc6d"
  },
  {
    "url": "assets/js/130.a737fe59.js",
    "revision": "e63cf43830a74faafe30b3c1d1cce270"
  },
  {
    "url": "assets/js/131.8c4c755e.js",
    "revision": "07f44e600c63d971e86743cf8b753d33"
  },
  {
    "url": "assets/js/132.6880a306.js",
    "revision": "a71b2ec5ddc9bdb09062dd2d36f89b4c"
  },
  {
    "url": "assets/js/133.5976e079.js",
    "revision": "f83793ff1f51dc6b701ee025ec67dfd7"
  },
  {
    "url": "assets/js/134.6385b50e.js",
    "revision": "ba6d0fb3710fa6b7b1f8db59a74de049"
  },
  {
    "url": "assets/js/135.a5706e05.js",
    "revision": "ca52e201a4ae2547863c054ba564bcd5"
  },
  {
    "url": "assets/js/136.c1841743.js",
    "revision": "a1767ae7bb1a9a6a71f20426b8dfbf82"
  },
  {
    "url": "assets/js/137.76f957e1.js",
    "revision": "4d6b151b0ebc3888860a6687fe39788d"
  },
  {
    "url": "assets/js/138.9a3913af.js",
    "revision": "d49a6bbebcd3870ea2ba2df2da9a7c25"
  },
  {
    "url": "assets/js/139.93fc5682.js",
    "revision": "04e58e82a87f10c2cdeea26d08399810"
  },
  {
    "url": "assets/js/14.2de5f04f.js",
    "revision": "445196def24ff4a502a6675e6e4eb32d"
  },
  {
    "url": "assets/js/140.7f6cbd18.js",
    "revision": "e21041d5071b31c718490ec0862a4915"
  },
  {
    "url": "assets/js/141.3e73d559.js",
    "revision": "c89a74c852c9b42a097a08768794ae8c"
  },
  {
    "url": "assets/js/142.e84d99ab.js",
    "revision": "7481773b8a636b2947a4af05c506095f"
  },
  {
    "url": "assets/js/143.579c011b.js",
    "revision": "b42863002f111e3b36d9cda2fe9a378e"
  },
  {
    "url": "assets/js/144.f91a79d9.js",
    "revision": "a678c19ff41815cbdbab1a5b80d14e66"
  },
  {
    "url": "assets/js/145.45574e94.js",
    "revision": "5edc1c0ba51a79e7c3bb9216bd11a624"
  },
  {
    "url": "assets/js/146.e51aa531.js",
    "revision": "e2d903d0e649cc3a9cdec6a8042998fc"
  },
  {
    "url": "assets/js/147.d8cf0b0a.js",
    "revision": "2a849d7d89003cc702b7728fcc9ac10c"
  },
  {
    "url": "assets/js/148.e1a0f13b.js",
    "revision": "82f98604acd0e208b436ce96d2083a54"
  },
  {
    "url": "assets/js/149.7aa7a711.js",
    "revision": "e5247e5230f68cdf384a4efd7413ece3"
  },
  {
    "url": "assets/js/15.a6e108a7.js",
    "revision": "5f451d1dbac737e97224d18e0725030f"
  },
  {
    "url": "assets/js/150.cd8fcf55.js",
    "revision": "a4022b69327254e2beffbd38d4b70ec6"
  },
  {
    "url": "assets/js/151.d5512906.js",
    "revision": "20c4c0453605f6c086b59650d9b7694c"
  },
  {
    "url": "assets/js/152.48bb3e07.js",
    "revision": "d006b4d3584d3c42e2b312919bcb8077"
  },
  {
    "url": "assets/js/153.9ba45c86.js",
    "revision": "ccb7ff38c4ddceff2ceca5e7ad390b5e"
  },
  {
    "url": "assets/js/154.b71e34b7.js",
    "revision": "80308f07019e513406df5a27e5534e42"
  },
  {
    "url": "assets/js/155.360582eb.js",
    "revision": "820a992f49c37ab0c0232c20f61fac4e"
  },
  {
    "url": "assets/js/156.38f4eb7d.js",
    "revision": "a668df29d619aa2784c0bfffdde8020c"
  },
  {
    "url": "assets/js/157.930f754f.js",
    "revision": "5cd6a0f9ea05fee477fb0c0f08431509"
  },
  {
    "url": "assets/js/158.8f17ac26.js",
    "revision": "ab5221a37166f9d97d98281f0c36f299"
  },
  {
    "url": "assets/js/159.d3167d79.js",
    "revision": "5fba2024b6a2df2e0bc431c134bbef68"
  },
  {
    "url": "assets/js/16.f5bf3695.js",
    "revision": "4e27335ce76784629f64a9c99f477300"
  },
  {
    "url": "assets/js/160.1757f763.js",
    "revision": "d469015ba2083c7c131e1df461401828"
  },
  {
    "url": "assets/js/161.b7bcec74.js",
    "revision": "720622f94cdb58f124b54eb2559280e5"
  },
  {
    "url": "assets/js/162.b94ba949.js",
    "revision": "b64145dfe764ecf9285237725b35476d"
  },
  {
    "url": "assets/js/163.76dad7d9.js",
    "revision": "b0e1efc2cdee4aa8cef7c2bbc6973189"
  },
  {
    "url": "assets/js/164.99755de0.js",
    "revision": "a3ccb573477cde79f58daa421a3efb28"
  },
  {
    "url": "assets/js/165.c5bd84e2.js",
    "revision": "8916c031391a5d3abf98e10d081aa26e"
  },
  {
    "url": "assets/js/166.371c9bb7.js",
    "revision": "7ab7202a7a1e89d64fc8d107528fdfbc"
  },
  {
    "url": "assets/js/167.8c62d886.js",
    "revision": "0c99a5c41dd688f170af7b9c04a0eda7"
  },
  {
    "url": "assets/js/168.665e35e9.js",
    "revision": "f4c8f4ec72edac2ce1575ce920ed9866"
  },
  {
    "url": "assets/js/169.39ac806a.js",
    "revision": "0c998af0ae96d2a40514ee5f1d54c304"
  },
  {
    "url": "assets/js/17.28e7525b.js",
    "revision": "eb3dc509287158c8f296d0bc0fcfbd0a"
  },
  {
    "url": "assets/js/170.33a81ba7.js",
    "revision": "f31b2f23a0f01893da41b7becc98796b"
  },
  {
    "url": "assets/js/171.904a128f.js",
    "revision": "fb01d682acb9244f89d7b68fccf1f89d"
  },
  {
    "url": "assets/js/172.e8d26e9c.js",
    "revision": "a513aa6d3797b2f05aedd1b2f150d24a"
  },
  {
    "url": "assets/js/173.c44be12e.js",
    "revision": "3bbb739760d43b778532d2ab97f3c354"
  },
  {
    "url": "assets/js/174.4b2e6a7f.js",
    "revision": "fcd5b0f619a536e7922f0e80dd0c3864"
  },
  {
    "url": "assets/js/175.f730edc0.js",
    "revision": "29e82d5bfc07789705c10a91cb506c0c"
  },
  {
    "url": "assets/js/176.498e36de.js",
    "revision": "7b6a652d7729cce8dc24cf4c5d90fb48"
  },
  {
    "url": "assets/js/177.91e1c738.js",
    "revision": "ca62a57ca05127c03c8c28dca3ab864f"
  },
  {
    "url": "assets/js/178.724ffd2b.js",
    "revision": "b2c11518e19c20fbd2e7d6668ca30ee6"
  },
  {
    "url": "assets/js/179.78c2e721.js",
    "revision": "ffc6a1032177fff216fe3839e18e66d7"
  },
  {
    "url": "assets/js/18.b61ab550.js",
    "revision": "3097bfcc3ff5f0e8b7add001ae65ef4a"
  },
  {
    "url": "assets/js/180.a6fc3fd5.js",
    "revision": "d223e82fad2e15819b6c8c8597f96098"
  },
  {
    "url": "assets/js/181.524f3dbc.js",
    "revision": "4375c2043faba9a010ace9811f08cc43"
  },
  {
    "url": "assets/js/182.6487d5d3.js",
    "revision": "9f8a951ea898167a7d99b0791441de14"
  },
  {
    "url": "assets/js/183.57ad85e4.js",
    "revision": "11a6ff53a82563617130e7ba4f42ca10"
  },
  {
    "url": "assets/js/184.a130aca5.js",
    "revision": "fca473e17ba4048f720239edfb073bd2"
  },
  {
    "url": "assets/js/185.4b3b7f83.js",
    "revision": "4ab878ab87018ccbfce58c7747885630"
  },
  {
    "url": "assets/js/186.5800caa6.js",
    "revision": "c12b27c4733e5950e6c396a032fc157e"
  },
  {
    "url": "assets/js/187.4817db8a.js",
    "revision": "6ef5cc23f67a7281f431e6fd967a4bd0"
  },
  {
    "url": "assets/js/188.26ada386.js",
    "revision": "6c40f70524fa18e95d83045350618381"
  },
  {
    "url": "assets/js/19.eefcc17a.js",
    "revision": "9dcb9095427b8b9457fa71fc72995ef8"
  },
  {
    "url": "assets/js/2.6b6ad87c.js",
    "revision": "b688a1d0fb147cd70752b0b4b3fd066b"
  },
  {
    "url": "assets/js/20.c45c4087.js",
    "revision": "a66fd37edcbad0ee1cc209dce5cd65f1"
  },
  {
    "url": "assets/js/21.08719b46.js",
    "revision": "92f915726848c39c6dc0083545ab40fe"
  },
  {
    "url": "assets/js/22.e3d781ec.js",
    "revision": "661b4d5ebb390f0b9455c4c1a080f835"
  },
  {
    "url": "assets/js/23.35b35311.js",
    "revision": "611efb886ba7116435df28f81fca050d"
  },
  {
    "url": "assets/js/24.f647471f.js",
    "revision": "a520aecb4b40406dbf187251df771772"
  },
  {
    "url": "assets/js/25.35df6331.js",
    "revision": "51a7ea748d53bb3740965d62ddbc739b"
  },
  {
    "url": "assets/js/26.97e87380.js",
    "revision": "9f2eef5db79f6bba6f864ecd5f3fbec4"
  },
  {
    "url": "assets/js/27.5bf60111.js",
    "revision": "1ad77a6f9d201275619dbd6cd875fb6e"
  },
  {
    "url": "assets/js/28.e840f59f.js",
    "revision": "af59189ae02ecef153959a2514d53196"
  },
  {
    "url": "assets/js/29.d505e0ef.js",
    "revision": "fdeec52bde09b0ae4598a7525878399b"
  },
  {
    "url": "assets/js/3.826a146d.js",
    "revision": "db5549a7fd88958c849060462e59f777"
  },
  {
    "url": "assets/js/30.09e7b0c2.js",
    "revision": "1c73e8c1a56749929e5331d597a6fd55"
  },
  {
    "url": "assets/js/31.ea15f4e9.js",
    "revision": "f53dcebfd982abe41831268fb1eb33c7"
  },
  {
    "url": "assets/js/32.50a83e5c.js",
    "revision": "6d320d243e5af9bf7d97ab016d0267bb"
  },
  {
    "url": "assets/js/33.54e79561.js",
    "revision": "07538c6f5617d95dc48a69d875f6ce8d"
  },
  {
    "url": "assets/js/34.9b3ac84c.js",
    "revision": "b1e256220aca857cc20e0e1dede756db"
  },
  {
    "url": "assets/js/35.7c97d4f2.js",
    "revision": "1a7a02603fa92094503079b07379f065"
  },
  {
    "url": "assets/js/36.da857de3.js",
    "revision": "60fc33fabcecf2c0760cda845e8d348e"
  },
  {
    "url": "assets/js/37.5b238c31.js",
    "revision": "43ecda2054544bd613c398b59c6edf9a"
  },
  {
    "url": "assets/js/38.9e54fcf2.js",
    "revision": "0b0267782964ab5bedce65250d2bf5a5"
  },
  {
    "url": "assets/js/39.58b561a4.js",
    "revision": "3d1bc1f0d2b38dea569dd75a6deb6587"
  },
  {
    "url": "assets/js/4.cc4cc0b5.js",
    "revision": "1bf9b8f8be4aeff78eddb2a01c817211"
  },
  {
    "url": "assets/js/40.4b33ac9d.js",
    "revision": "d240cd037769f8239893f9c9c8ee9de1"
  },
  {
    "url": "assets/js/41.d515f8f0.js",
    "revision": "83ad5594cc6955320bf57b00b0aa45c1"
  },
  {
    "url": "assets/js/42.4e56fc68.js",
    "revision": "c3a85fad372c5e6e81f09b8110c17dcd"
  },
  {
    "url": "assets/js/43.12cb5053.js",
    "revision": "4502b53159c016e3a5e3429896765696"
  },
  {
    "url": "assets/js/44.c68563c8.js",
    "revision": "5c2b87b799442e793c439a24cc880995"
  },
  {
    "url": "assets/js/45.f1807bff.js",
    "revision": "c029eaf99e8ce74c94cde30a47a0b129"
  },
  {
    "url": "assets/js/46.9a6f1351.js",
    "revision": "cf81607f6ac54ea81136ff0f785916eb"
  },
  {
    "url": "assets/js/47.3226eedf.js",
    "revision": "11df10f1946a71fca38f68634852e0ea"
  },
  {
    "url": "assets/js/48.f1ae40c8.js",
    "revision": "a83c06f8a986fb6b438055b8fe518b8d"
  },
  {
    "url": "assets/js/49.91235418.js",
    "revision": "122394d17413c37f9fefb5d207b7c6b3"
  },
  {
    "url": "assets/js/5.66fd9d37.js",
    "revision": "25b7acca5a3a031f4b127083fb63fbc2"
  },
  {
    "url": "assets/js/50.83aab505.js",
    "revision": "086b36e5eba7a6ce67278fc5c1549167"
  },
  {
    "url": "assets/js/51.eef46805.js",
    "revision": "7c2c51fd67fdbe1da705cdc70a2a7982"
  },
  {
    "url": "assets/js/52.76c298f7.js",
    "revision": "b3d880c1a6ea1356ee75d1c5090d247f"
  },
  {
    "url": "assets/js/53.c9ab87b7.js",
    "revision": "26706b40137b94e8feb80d6558d23176"
  },
  {
    "url": "assets/js/54.94e0e9d3.js",
    "revision": "13087e10079ca5ac3b9640f60b330497"
  },
  {
    "url": "assets/js/55.6ef0621c.js",
    "revision": "4433d8accc0e70d1a08903c057518414"
  },
  {
    "url": "assets/js/56.faa85996.js",
    "revision": "7e7b1232a469cdb9a0fab20b5a18615e"
  },
  {
    "url": "assets/js/57.04f1d768.js",
    "revision": "c6de4e67c21cadbf2b10cb0dfeeb765f"
  },
  {
    "url": "assets/js/58.42501e36.js",
    "revision": "fa033b288b072f241921afd98faeea07"
  },
  {
    "url": "assets/js/59.710fe114.js",
    "revision": "116d1123506abb3b1fe18c4cfaa82dd5"
  },
  {
    "url": "assets/js/6.3ec98cad.js",
    "revision": "f5da373cbd6861c0ef990056e011233c"
  },
  {
    "url": "assets/js/60.d1ee0ee4.js",
    "revision": "ac22fbcc53ab1f8325c3c779d4f75064"
  },
  {
    "url": "assets/js/61.a74737cf.js",
    "revision": "8c995dd10954082b29c155140e8a15a1"
  },
  {
    "url": "assets/js/62.f47193e6.js",
    "revision": "939b1e3252304b1fd75b469993241fe1"
  },
  {
    "url": "assets/js/63.af570ecf.js",
    "revision": "1ee0710d0f794cc8bbd67f466723a1fa"
  },
  {
    "url": "assets/js/64.ccffe906.js",
    "revision": "643fdfe72479dd5732e8c9d4aa0c5849"
  },
  {
    "url": "assets/js/65.dc0e6f5f.js",
    "revision": "898e0ec78bb9e430200039e6dbc4238f"
  },
  {
    "url": "assets/js/66.61419441.js",
    "revision": "f00cd18688e694e916c76aa3716d945d"
  },
  {
    "url": "assets/js/67.6309a3ff.js",
    "revision": "34f11dc9865eec731d4da402695c0294"
  },
  {
    "url": "assets/js/68.5e5fcbff.js",
    "revision": "2557a514185895c8938f27ec7b2addff"
  },
  {
    "url": "assets/js/69.28cff7b2.js",
    "revision": "b6b5bbbfe7275966d18f4a93420b46d3"
  },
  {
    "url": "assets/js/7.0214b9c1.js",
    "revision": "f913bc10371e18c0abf71fdcaa628381"
  },
  {
    "url": "assets/js/70.7cac1002.js",
    "revision": "600e9227ec872a996a853a4a0d6773c0"
  },
  {
    "url": "assets/js/71.fc0a25f0.js",
    "revision": "ddafcf74514d7f2bc7a5931d39236aed"
  },
  {
    "url": "assets/js/72.e3e56d8a.js",
    "revision": "43bee5350b2a9531bf6572d99e23a279"
  },
  {
    "url": "assets/js/73.6dac5b5f.js",
    "revision": "f236cba11a4991ec8451dc55aed4c408"
  },
  {
    "url": "assets/js/74.62879d15.js",
    "revision": "343f5349fc4f903be2bcd43632ba9afb"
  },
  {
    "url": "assets/js/75.9396f685.js",
    "revision": "7872f0da94de9bd84ce4134273ca81d2"
  },
  {
    "url": "assets/js/76.fbdc23f2.js",
    "revision": "576ce1bffc4b2766aefac62731abf252"
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
    "url": "assets/js/79.d233442d.js",
    "revision": "a6a4ce9e7f1be30628de91c5c61da734"
  },
  {
    "url": "assets/js/8.434b2a7a.js",
    "revision": "9660ab3403e61840204ebe69ea59a276"
  },
  {
    "url": "assets/js/80.582ddf8f.js",
    "revision": "991df0fa3a500322120fca264a69c507"
  },
  {
    "url": "assets/js/81.e37f93b3.js",
    "revision": "ae65d83d5d4bad34dc4fa61970d7cc70"
  },
  {
    "url": "assets/js/82.8dcf6ba8.js",
    "revision": "a2e49544ed4466c3a6ce0e76b08d29c9"
  },
  {
    "url": "assets/js/83.895b86e8.js",
    "revision": "66dcc7c98515d94e1f60f0fb3d023d79"
  },
  {
    "url": "assets/js/84.4c3847a7.js",
    "revision": "71d196a6c793358fadf5e20293931a0d"
  },
  {
    "url": "assets/js/85.869a04e8.js",
    "revision": "c0e2abfba411e3c30c652a38d61c1ae8"
  },
  {
    "url": "assets/js/86.490ce686.js",
    "revision": "3f4c601b6fa128e8ff09c84aa28d4415"
  },
  {
    "url": "assets/js/87.1e0b50ea.js",
    "revision": "621dc8126375338f8b7e57417b85c66c"
  },
  {
    "url": "assets/js/88.5ad45bb6.js",
    "revision": "a7e34b43d7d446782f4f3d63a5cf42d6"
  },
  {
    "url": "assets/js/89.b2ff48b4.js",
    "revision": "a4bfb0186f66e1d2feae5bc48689f8b3"
  },
  {
    "url": "assets/js/9.df19c560.js",
    "revision": "ba8d1f14e2da71e11efd7479fb865a1c"
  },
  {
    "url": "assets/js/90.f6efdaaa.js",
    "revision": "9d1be4a70e6b593b544922893ca0857c"
  },
  {
    "url": "assets/js/91.fd42b5e5.js",
    "revision": "54897f58070e87962734fd78757cfdc2"
  },
  {
    "url": "assets/js/92.2312da92.js",
    "revision": "f637bfbfe1204de33c6fa7aa6a6b7baf"
  },
  {
    "url": "assets/js/93.81a25cc1.js",
    "revision": "7d07f030f7f16bd2a2b597972fa43c65"
  },
  {
    "url": "assets/js/94.cd96ac16.js",
    "revision": "241461a045001c0c88e06578a830b6bf"
  },
  {
    "url": "assets/js/95.d2f3016a.js",
    "revision": "03971e01d6bda5d66d2b0d0b16ad556c"
  },
  {
    "url": "assets/js/96.0a534bcb.js",
    "revision": "2926a4183a848721a3f586034893d90c"
  },
  {
    "url": "assets/js/97.4334f468.js",
    "revision": "ff042cf372d5acc70462dec26445ecac"
  },
  {
    "url": "assets/js/98.acdad685.js",
    "revision": "29728e1f144fc3fec6ca56b5e9ec3712"
  },
  {
    "url": "assets/js/99.c4f086d5.js",
    "revision": "ffa54d9e11827f7f43584bf4b0c0b7bd"
  },
  {
    "url": "assets/js/app.7bc57ea9.js",
    "revision": "79b704508300114437ce620d8801f6f8"
  },
  {
    "url": "index.html",
    "revision": "c224471911c5f948a2d89985cf865582"
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

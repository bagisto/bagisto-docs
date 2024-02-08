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
    "revision": "c916a6a2f03039c3c2b1ea8504164946"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "9ad30c0f8646dfe9309f6c0a2fbc520c"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "cdc0cf9525c7fef523632e965b2aa3eb"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "81bc1cde41c7704e9740dcd34dbfda07"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "9174146eedc1d3e55e098d859fd0be7e"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "48fe29d46286c8fd5abc98eaa7d4655e"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "eb793fb68612be5902e777d5eda2ac25"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "77c0b8b44700b8779958f0b315b9aec1"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "f2808d22231c795642c5aa6e31ff5690"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "01f2c1fec9f989aea5b517610650716b"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "2d312fd1a186868ebe2f4a4a6a0c5ea8"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "1fd958bb18c4dccf741cd54a4d44a433"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "2501cdc77fdf088a62cdc0c9571d6ddc"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "b251bc4e8d30e1ebb7b1bd756651bdfd"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "df24f82d6c218cdd8acce203621e108a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "ee2a48b907e5a7a95e33b9a616aa8c3e"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "a5aa8f45109f0414510939366e3fd408"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "c9c5cddf3fb241f6bacc460eb8cf1732"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "fe913601ba625540fae2878de5f84bfb"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "a5c2715c032a52ee82f485bf5a1a0ca0"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "f058cca171c3b0fbc961d1e33c4fbc32"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "e58fc6aa4bccff8a904358fc027aff4a"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "983e0647c0d1a59d795e047f01fc0070"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "fedb437ab6cb6790aafed896b19cf00c"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "2333da9b084fa7c1d2c8b03fe5b70867"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "f2791934ad52dd5ca4b20f2bd33030e8"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "da3797cc746aeafec29f467d019ca4a8"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "407c30612aebf8e8106ee4e5d026b62b"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "966b93d4460ce88383231dff4bac8301"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "4ddd6dd057981e24c24c81de2679d2cc"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "e71b47701cc9163d1379d6439319a4e2"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "e1764ada9d400d58439ecfc07b8a02a0"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "729d9096508bd8c00e3de00fd1938a9d"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "8afc92378b2fd24c97a6b21cb83e108d"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "9385b6873e8c5a20069f07d49293f25e"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "f4da8085aa34a418832c7a99d597406c"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "ea233f7f27d5f66e3be91067096c151a"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "04943a0dd1c4a9255e59743dccc0290b"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "e22c051a76a963b41921712244ce7a6b"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "37ebec6af8497497a1a71e0a6b7640a6"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "5c74e7578534df3b1a97a05b751ca28d"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "bfad053f7c7c74bb9e0e14bacbba5be0"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "299f3e75addbfe20f02af5d1c93df7c0"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "987a3d131352f5128ccc9872a242115e"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "bb91fef611db8900794310cee767b4da"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "6e8876f555b73f26f997f5f90ecdb834"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "40e2ecb562e73fa703df5ebe87f5de64"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "56444810182c22f6a922de1c9bc4f704"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "fb0ae55395c1177245650013fa03d71b"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "45cde7536296c42d1067c30a9ac9a163"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "0cc768c358d0e155e62fea5e701957f8"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "ea89be839acdee34c41e7815a08066c7"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "8004b8142634f64554dc7da6a7a42b62"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "89f004ef0fb30af279a68affda241b23"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "18c1174b5e2fb06efa83c032ed11dfe0"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "f203833ca2fedf03c23b12b981eb5e20"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "16d5f06bd5012302d2da7efda2f2dcae"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "6a49fb91b382e604ea01a9aa2d7bd36c"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "e64059d1a78fd6ada8f9b068e6fb67e1"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "ed8fb41d6f540d1deab5a2af640ad36d"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "6e860dd1668fc12a3f3bb20f7ce2ebe4"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a795017d8d33f7d6079f4b5d17f16f94"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "4add0c3414b6671e22158fb357aa7779"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "a4b5fac7cfec543d5125b8b09875c799"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "06a49cc89069a98f0ff210ae9f33f2e7"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "ff102f24e442e6e6b6eb4ce72ca20a8b"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "a5fec0fc67c50af2ac5cc08c718f7a9b"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "369ab0b58e8c540ca57175325382f0f4"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "1c49269ed109721061288ea14db2cb22"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "eaad8dba04028dfc5e57c9b1df3a5476"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "53a5b9120389c1d60865e2dea5250367"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "f3616c2f3b704d3c83f04dfc4ffe3d1d"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "7e4751a8b6d1f49ed62b330bb060ce45"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "f756aa93d431da1295a0dc1e04f30337"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "c83df3338eadcfa729e8fea414a025c0"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "28653ead70e204cbfe9443a9b0108697"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "fff80da1230a4d59d4798460f4246a74"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "c056eff87ef3b613c69b15cd2a180a01"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "439356c2b4829752c71b61929cdd50b0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "5b1125aa825134cdc2893d3ace352ce0"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "90eb2b220225a144898cf8dbcc371e7e"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "ee22951c4b9cb6b62179c2a698367159"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "648a02df80fb2f93be10c30bc420421f"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "ea245dd4883db2e151f41a0df5521f4f"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "8c55c87b33284996587cfb585c5f1b51"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "53ff969c8520b527494c0cc7534e167f"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "43c970673c7ee091ce8d970d7c2c36c4"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "518ef67b71ca1f8fd8d451bc168fcc6b"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "6d0a638396dd3e7fee06a79063a678b8"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "a77851ebec4f1ebe8654c163a6956caf"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "2f13ae9e9e0b3a55ad308afab0dfac89"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "42424ac3d2ff4ed27666d21e4c6f4181"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "9baf036227672d6c9d5116629af5cfa0"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "f397d2b675f84549e4822b82914ab5de"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "07335edfd9d5ef866eec952bdefc0b9f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "3152284ce16122c9c28a3e6383a5ac09"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "e75391865123a0c21f5a79be2c24172b"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "c19556ce5663454b2b81a820c80dd06f"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "342bdac12172655f743c5cc841c6950e"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "d8809088ca7dbe4527065ed0f4912b0d"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "390e4cc4c544540f2ddd0ebfdda6d10f"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "9639165a97b457274892aa36c717478e"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "981b841af2a05a78e8c892a419f3ef69"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "21211db9c2bc497324bef9bef5352cf2"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "06336a307763f711e6b60313e3b1cd0c"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "073ad9f4db052f8a21bdd1451e5737c8"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "0cfd985407f9c763b92da1aea9c4eb43"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "c5bc00c1ece4e5e038e644993d924b0b"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "5d9c787d057f4a67553d00db0b77c43d"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "fbe26eab993f0d614ce833b8a2d22cc1"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "45e828542d371ab34db03c8680e97d0f"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "6e2a07f6c8afea6f52b211f0aa518aa7"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "8e0b0879ef922cc9da69f47c95495e9f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "b4cbb172c1e6f5fc08900a913ed4ac23"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "bb08abbf6d4db591ff619f39029935de"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "88dbe1ff506991155268e372977da405"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "b0e7cf57810470ce57ef042177145772"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "763c5c23781739d7bd0935cc7dbf82e2"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "ce80ffc02cc2c39c92a7ff5095cce59f"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "56e8fed5f243c6db4693199a0e23f07e"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "f0f4bac2cd0d524b5491bde7e0978f43"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "216832059fe203f5956c8eb87e09c8f5"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "20ea90febe8948bca24e3f55eaf614ab"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "9b09fc0110b097c31a26fe5b94297ae9"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "53098046249a98fba3fb5809a73f3641"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "60a08c1fc815c9475219f5953d51adcd"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "45a587375d891894da96dda933c79197"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "627dc3e00944b2a2fc8d5aa5497ab131"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f7b919c79ecc1a85e49a038120e6fc34"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "e72edf5f2088bf39057d639beff103d9"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "098cdcd0ab8564c4ec9afa294de6980e"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "3acbc6321479de5a1a02abd9c39d9058"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "2b5e046923e39b28ba4b8b9027ea314b"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "b63bb406a7a1438f7bc1e5b87b66733a"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "31e39b6ca3a1662008b07d132c87b7d4"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "57275dd49b4fcffd6a2bed5d6c3908cd"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "c39efde1ec754d5fe9e95f74fbac9a20"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "db2edddf1adbb2c0994448b741326d10"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "5e2e27711770f0bc464e897250535956"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "7961b795a9de268be73356344a31b462"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "03907f7a1534c17cde088bd354baad59"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "67943178121915bde87bca713cc71dcd"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "18b25fbaafcde4e8d4b47d0966b9e28e"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "48cb8f99e56ffbf7a4c2269bda79f6d7"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "2b02d7cd2e436724fee49f0715527841"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "3cdce545e3f6df4e9934d8ae36896277"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "e02b38686440bc4474cb47a875a70d5b"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "2ec00daeb59ae567bdccd09af911dfe2"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "fee75b0679d164a26ae2d10420a98287"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "14ccc2ae4c96c36943af765d173c7750"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "8bb6c7c8125e96f05911a2354740eeb5"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "2bc09997082236bccd01569ba224a336"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "00ee822f837d64e0048b5ab5154b24da"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "ba2fc031588889901f69a68e00bb262d"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "b44d02aabc9961ebc64f36bb389d562a"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "4fb61952f65408396990bd921fd344b5"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "53f1d71f1c4aafa21efc3f62478eddde"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "8eda3411a778e3e9b1c65853a11f57f5"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "f14037811f8480d2180f1e76203ad07a"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "e36295936c12a0caa215197a2e187233"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "d80dec0d6c40b2e1bda5726cf08d5837"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "3bfbb8d618eea1a9ea84c94dc817b301"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "65ca70189490d3dae91bdb0991c9f41c"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "d0e2b9dfc89fc897c657f49f16ce0575"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "b3863148c9cc63f06768ed9f6c8a769b"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "bf676e502b61b27b72089db30c3d309a"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "07ad0b644740e27d48f964a38dffcf90"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "c01f6beadc6a0c1928071681907f0dd9"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "ccd311572c80356375729c62e42d759d"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "46126b9944dbb098203dde155d6fba36"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "1b641a084dd7b6a2e03ba396becb9367"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "dc268fd5ced3fa62521c7dc24a4f1959"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "ce0a5f40141a201cec9945ab0ae8eda7"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "672c28cdb445881210c6ef843ac88b03"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "a0caa1e07760ff9c337fa1bf0f3c969a"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "1e7681cbe487e7d51ac854c9233e5bd1"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "32924f17020bf2b2f5818216fb78526d"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "97ef0c5bf47ffc4740fcb42450a76604"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "ce13140e163957aab3777a761878170a"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "7ca84e7af8876bbace12438a9027894b"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "5e3bde0c1c85a82d56094b8d67515c2d"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "5c5ec05d74bcb7ff187a69fd1b3b00b3"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "8af27021b25b183ab62177e65513cad4"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "8b9028e3e72e477ec09e485029e448f3"
  },
  {
    "url": "404.html",
    "revision": "7a7362d74758d500e2ec97cb6dad83e3"
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
    "url": "assets/js/10.325f1088.js",
    "revision": "7c979ccd8ce47fca4b3186c0dd788e36"
  },
  {
    "url": "assets/js/100.47a0a494.js",
    "revision": "d925decb50a85c244a895a82de1d057a"
  },
  {
    "url": "assets/js/101.b019a552.js",
    "revision": "9afdd94e5c8ff7937195e4b5eca4bfce"
  },
  {
    "url": "assets/js/102.70e2c7af.js",
    "revision": "b409d2b1535349878f47870c0ddb0ea8"
  },
  {
    "url": "assets/js/103.2d364458.js",
    "revision": "f0e812bb24ae0bea4dc112199db3a9e7"
  },
  {
    "url": "assets/js/104.a216dc4e.js",
    "revision": "14607024f240d9b0f220395f142636e7"
  },
  {
    "url": "assets/js/105.0a085bc0.js",
    "revision": "bb8894a4a1951316636fd1fe77a5698e"
  },
  {
    "url": "assets/js/106.07c142cf.js",
    "revision": "8799e0c2095373d170edbe7ca45e9e81"
  },
  {
    "url": "assets/js/107.3e0f469a.js",
    "revision": "da09c14cedf19958dcec123dcbc64820"
  },
  {
    "url": "assets/js/108.29f161e6.js",
    "revision": "a76542c3e18d9a0b92975496748e844a"
  },
  {
    "url": "assets/js/109.db73fb7c.js",
    "revision": "3bfd1c4c0a92864540810304cab2312d"
  },
  {
    "url": "assets/js/11.4c86c15d.js",
    "revision": "71816ce794d82a2fd536337e0c821d9d"
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
    "url": "assets/js/112.ca3f152f.js",
    "revision": "adac14a0920299ed6b2c3ad158fb208c"
  },
  {
    "url": "assets/js/113.9bb607e7.js",
    "revision": "b7661985da6ad984be19785cfc98a548"
  },
  {
    "url": "assets/js/114.a0b63035.js",
    "revision": "6116e4e1f9af16b0cfc4b84a12043903"
  },
  {
    "url": "assets/js/115.e5ecc078.js",
    "revision": "0075104e6a574a599d51fec766043616"
  },
  {
    "url": "assets/js/116.883ffde7.js",
    "revision": "d840bc408f436c1a5a27453dd47cf28d"
  },
  {
    "url": "assets/js/117.3b2e20dc.js",
    "revision": "0efcd439b011eee6a7fee38820e4ef43"
  },
  {
    "url": "assets/js/118.8dfb113f.js",
    "revision": "23bf33a81ef66c3fabb3464278752f2e"
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
    "url": "assets/js/120.e57223aa.js",
    "revision": "70f2a45ef31d775c400e923bd97b71f9"
  },
  {
    "url": "assets/js/121.dfb110cc.js",
    "revision": "aea03a435b438e960e44c59a128208bf"
  },
  {
    "url": "assets/js/122.47a5a45f.js",
    "revision": "9508ca6e6a6ca0f3fa79e82bae99920a"
  },
  {
    "url": "assets/js/123.14708e61.js",
    "revision": "639d67b3717f996858e4a6ce11ab7d24"
  },
  {
    "url": "assets/js/124.d639f86f.js",
    "revision": "6bbacf5d3deafbdafabd6183d98fc0dd"
  },
  {
    "url": "assets/js/125.1f76b72c.js",
    "revision": "f2bd18147230ef0e5c7711a31ddbd128"
  },
  {
    "url": "assets/js/126.2343b0f7.js",
    "revision": "acf187afafa80bdd76ec09b80597ec46"
  },
  {
    "url": "assets/js/127.661318c1.js",
    "revision": "869f3c2a117ec53e6142ed1c092e9550"
  },
  {
    "url": "assets/js/128.faac4047.js",
    "revision": "011f7fca0c3830552f0e2118689d23a4"
  },
  {
    "url": "assets/js/129.5120f627.js",
    "revision": "f9fdda65d55a17d81e7fe1a137c26365"
  },
  {
    "url": "assets/js/13.e2d65956.js",
    "revision": "818376197472471477eb8ef4a5c7a1fa"
  },
  {
    "url": "assets/js/130.113af7ad.js",
    "revision": "8351da18a38dba85bec8bcd6bf763748"
  },
  {
    "url": "assets/js/131.c08cb3fc.js",
    "revision": "01769955bc39e5660a60019583ada628"
  },
  {
    "url": "assets/js/132.6357e997.js",
    "revision": "a394c07af606f20a089aad8258daf956"
  },
  {
    "url": "assets/js/133.df77833e.js",
    "revision": "14b8e9d111086f2ab3fdb423301cc60b"
  },
  {
    "url": "assets/js/134.6385b50e.js",
    "revision": "ba6d0fb3710fa6b7b1f8db59a74de049"
  },
  {
    "url": "assets/js/135.1f8a84be.js",
    "revision": "b7634481d56e76e21f7fd76cb9c07684"
  },
  {
    "url": "assets/js/136.b5f0413d.js",
    "revision": "53debf6688a5f5e0df532c72c026e7b4"
  },
  {
    "url": "assets/js/137.ee8b6f2d.js",
    "revision": "aeed52f84652bda96009fabc9a8e5b5a"
  },
  {
    "url": "assets/js/138.7a45da48.js",
    "revision": "f323380c3198976753b24f7bfa8fed88"
  },
  {
    "url": "assets/js/139.0eba23f1.js",
    "revision": "afa90d6a5c2c02131d377083795c8279"
  },
  {
    "url": "assets/js/14.2c0f86dc.js",
    "revision": "4b7e9f2dd8698e1a4948a652cb1a7b48"
  },
  {
    "url": "assets/js/140.5ec900f1.js",
    "revision": "43abd268de45a67a4152168c56f0d833"
  },
  {
    "url": "assets/js/141.6f62d37c.js",
    "revision": "1f5e92b1d5c25af080efcf6ef360a9b5"
  },
  {
    "url": "assets/js/142.2383d919.js",
    "revision": "85e25196521335dff404cd9ff575e716"
  },
  {
    "url": "assets/js/143.5843ae1b.js",
    "revision": "619641dc05a927ffbd9e8650f7917423"
  },
  {
    "url": "assets/js/144.a9f94d16.js",
    "revision": "65fcf4216c4fca6e897936877f852769"
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
    "url": "assets/js/147.b438b611.js",
    "revision": "7eb0b8fdad836923813cafbc0bba46d3"
  },
  {
    "url": "assets/js/148.2892d8c3.js",
    "revision": "d34794f942363837e4a124d81b24825d"
  },
  {
    "url": "assets/js/149.dcce7006.js",
    "revision": "fc7e43f8a015fd5849488520e6956226"
  },
  {
    "url": "assets/js/15.f8169f13.js",
    "revision": "0fee681d4b02219cdc4054a407109a72"
  },
  {
    "url": "assets/js/150.399614de.js",
    "revision": "a6d1dcbafb31af3e0c1cb22ce0dcd881"
  },
  {
    "url": "assets/js/151.ae7688af.js",
    "revision": "0c83506027d2a15d14b2ba71c5610e0a"
  },
  {
    "url": "assets/js/152.f5cff590.js",
    "revision": "ed464b5eded292e25bd2863f49ff7413"
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
    "url": "assets/js/155.e23aa9bc.js",
    "revision": "261bfc6b2aa56c398357398b110ef860"
  },
  {
    "url": "assets/js/156.c603c4b0.js",
    "revision": "17f5692f942f17e5c8c3cb8d46d66093"
  },
  {
    "url": "assets/js/157.33f1f1eb.js",
    "revision": "02a98ee073693ddad0119118e0c06a54"
  },
  {
    "url": "assets/js/158.338a72f4.js",
    "revision": "ca27b372c3596dc0d043101653c2531b"
  },
  {
    "url": "assets/js/159.9c4b07b2.js",
    "revision": "b07c7635332c4edaa183a9d2f1d28772"
  },
  {
    "url": "assets/js/16.ffcd3ce8.js",
    "revision": "3a7c64e6523eb2dec9ffe322bf651ba7"
  },
  {
    "url": "assets/js/160.95b77be3.js",
    "revision": "49dc97fe3e3ea1fa494fb8e0edae6464"
  },
  {
    "url": "assets/js/161.1ae28f2b.js",
    "revision": "2bea93125cd20246596a54012a380268"
  },
  {
    "url": "assets/js/162.1abde942.js",
    "revision": "22f1c894a7a68f6e163f5c032914ccef"
  },
  {
    "url": "assets/js/163.53fbf7d8.js",
    "revision": "9b499103245ea75e98ae98245bcc3247"
  },
  {
    "url": "assets/js/164.c24d5c9f.js",
    "revision": "ff63fec955a940c69923b96ea6c213e0"
  },
  {
    "url": "assets/js/165.cf9515ad.js",
    "revision": "70a4cad5d4aecc2ecb8de4a9b53ca1a8"
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
    "url": "assets/js/168.8867f6d0.js",
    "revision": "7b87709b882759e6b5b93e1605467e69"
  },
  {
    "url": "assets/js/169.c3015a9c.js",
    "revision": "9e19bbb1c64effde22dc4f365cfa0b23"
  },
  {
    "url": "assets/js/17.935859d2.js",
    "revision": "29902bee7d6cee55d03a96c1cf998802"
  },
  {
    "url": "assets/js/170.52ed84a6.js",
    "revision": "c19415986043590cd14a0a92eccde372"
  },
  {
    "url": "assets/js/171.e99187b2.js",
    "revision": "3805e5d9bed30d8ea8b5d9464dd0954b"
  },
  {
    "url": "assets/js/172.7541f9c4.js",
    "revision": "bad95a6d28b6fb12744ad8fc82ce3280"
  },
  {
    "url": "assets/js/173.6b0a8be5.js",
    "revision": "d894c90c70b5d8f94728b270bd6c9f7a"
  },
  {
    "url": "assets/js/174.dbc8a27a.js",
    "revision": "993bf60314fd2da456ba18be3f4a65fe"
  },
  {
    "url": "assets/js/175.63dbe7bf.js",
    "revision": "cd42892b50f872ced3c85b19a126eb0e"
  },
  {
    "url": "assets/js/176.88ea1cc4.js",
    "revision": "08b3581b38aa29d0847e8717c67bf664"
  },
  {
    "url": "assets/js/177.e53e228c.js",
    "revision": "3330d2c254da000ca26e39aa4348f11a"
  },
  {
    "url": "assets/js/178.a0a9704d.js",
    "revision": "d3be61654ce97a36b24f05126dd68bab"
  },
  {
    "url": "assets/js/179.d3ae8deb.js",
    "revision": "c5c50c5b9ae2805c37d53c229d33aae6"
  },
  {
    "url": "assets/js/18.e3b36fd9.js",
    "revision": "95f9894bae163cabee515c1598bbb00e"
  },
  {
    "url": "assets/js/180.389239e3.js",
    "revision": "aad1c1776cbdc8bec03e96af8d529cbb"
  },
  {
    "url": "assets/js/181.1ab194d8.js",
    "revision": "ea9eb1c8bd98ff240464accf20f48ed0"
  },
  {
    "url": "assets/js/182.4cc65053.js",
    "revision": "95f4add144657c880851809233957af1"
  },
  {
    "url": "assets/js/183.68093bce.js",
    "revision": "b556cbdc78e3d61053b4cb835158ee05"
  },
  {
    "url": "assets/js/184.3289e1cc.js",
    "revision": "d9a7167ccae25bd3aee5e2525eadd850"
  },
  {
    "url": "assets/js/185.98b78f91.js",
    "revision": "e3c16cbc426909ea5d93c85d9d2b3184"
  },
  {
    "url": "assets/js/186.968e1c64.js",
    "revision": "e10822ddb293e88485dc4feb209421fe"
  },
  {
    "url": "assets/js/187.fb89ee69.js",
    "revision": "83082f86f9acfb86ba437260b1818153"
  },
  {
    "url": "assets/js/188.1c5a19e4.js",
    "revision": "efbca526de1568ff38622f57d372db6f"
  },
  {
    "url": "assets/js/189.d5cdb00a.js",
    "revision": "0ff3eeb603b6ca2c982bc36a8c2bb66f"
  },
  {
    "url": "assets/js/19.36b005a1.js",
    "revision": "0bf08c8aa387331e9c61db2b578b35cf"
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
    "url": "assets/js/21.8fba312a.js",
    "revision": "f9f55d6c9a1f7111e552a8368b62e11f"
  },
  {
    "url": "assets/js/22.71593b75.js",
    "revision": "3d446e1127fe3dc464b528b9b08fdbe6"
  },
  {
    "url": "assets/js/23.c73a584b.js",
    "revision": "a2633ddd615ea6944e93647332a6b2f9"
  },
  {
    "url": "assets/js/24.6b7c388a.js",
    "revision": "97ef44f3aa8ef310a9b65e17a5699497"
  },
  {
    "url": "assets/js/25.92dbd84c.js",
    "revision": "ee8e2cc29cd115d161a37150d0908285"
  },
  {
    "url": "assets/js/26.0e5d43c5.js",
    "revision": "df373fdd11868dd88c32c2af9572a7fa"
  },
  {
    "url": "assets/js/27.42ad2e36.js",
    "revision": "8ba91b28fbfe6821fcb50958e658209e"
  },
  {
    "url": "assets/js/28.2d376017.js",
    "revision": "b8028ae024c0a26fb05ac2999a239895"
  },
  {
    "url": "assets/js/29.fc3d5881.js",
    "revision": "fc9d36aafe94ef74ec7ce6d827690390"
  },
  {
    "url": "assets/js/3.975a3cc6.js",
    "revision": "95f308fde31f8c15b10708d217822514"
  },
  {
    "url": "assets/js/30.8245e0b4.js",
    "revision": "bf3c6888af5d9b705914e0b0956cc34a"
  },
  {
    "url": "assets/js/31.1dcdb276.js",
    "revision": "4be5e981d6fa66eb3eff72b1e3e82c0a"
  },
  {
    "url": "assets/js/32.3460574f.js",
    "revision": "acb71dc66baa77f84bd8e50bec5520ec"
  },
  {
    "url": "assets/js/33.fb6918ea.js",
    "revision": "4f1623d8c045496ee3da1c6b7cd1c725"
  },
  {
    "url": "assets/js/34.115b6e71.js",
    "revision": "e572201a8f44a1035c0ead2492354801"
  },
  {
    "url": "assets/js/35.224a4452.js",
    "revision": "5ef51163804cce00417bbe7adccc2ec3"
  },
  {
    "url": "assets/js/36.ad4ce359.js",
    "revision": "358fc00cf4eb5932b36090881688ef5f"
  },
  {
    "url": "assets/js/37.767cb7ea.js",
    "revision": "492709971719b418a9ba4e48f294a923"
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
    "url": "assets/js/41.2a2bcf63.js",
    "revision": "762d5bf833d003b375c6fd99fda27054"
  },
  {
    "url": "assets/js/42.34096dc5.js",
    "revision": "25bed1d6bf5b30678fda678351e74dbd"
  },
  {
    "url": "assets/js/43.12cb5053.js",
    "revision": "4502b53159c016e3a5e3429896765696"
  },
  {
    "url": "assets/js/44.c23ac79f.js",
    "revision": "cfdf6e508f5bad504b108d7dd47d7e82"
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
    "url": "assets/js/47.71f8faa6.js",
    "revision": "2c53cd5e8362373677b20b8d255aef22"
  },
  {
    "url": "assets/js/48.e3940bb5.js",
    "revision": "4879254c1b685174cad3b2f9a7d0f3cf"
  },
  {
    "url": "assets/js/49.bd574f10.js",
    "revision": "739345ad7fc1c0ed332d74389a48074b"
  },
  {
    "url": "assets/js/5.94dc272b.js",
    "revision": "619a2fbf5840b8183f2bce0e8c1d27d2"
  },
  {
    "url": "assets/js/50.0a203e95.js",
    "revision": "2ca17ff84befe01bc7118a1e9efd6c51"
  },
  {
    "url": "assets/js/51.46e1e138.js",
    "revision": "953a22e63d97780cec5df9295c441ea9"
  },
  {
    "url": "assets/js/52.76c298f7.js",
    "revision": "b3d880c1a6ea1356ee75d1c5090d247f"
  },
  {
    "url": "assets/js/53.d0ebe33d.js",
    "revision": "8b7f34caf622fe629b67ba5dd98bc269"
  },
  {
    "url": "assets/js/54.e5b30ffb.js",
    "revision": "17c37b3738c6f29c1d82d433d28fd20b"
  },
  {
    "url": "assets/js/55.c60a980a.js",
    "revision": "19063956f9f77b7975cfa437a085e481"
  },
  {
    "url": "assets/js/56.fb1df89f.js",
    "revision": "07f992a609c32b95e4eb1decdd6e013d"
  },
  {
    "url": "assets/js/57.1c095848.js",
    "revision": "12eea5dea1b17a975e4404bb91f0d24d"
  },
  {
    "url": "assets/js/58.a3049512.js",
    "revision": "4995646127e5d143bf62d5bd26ad7d50"
  },
  {
    "url": "assets/js/59.2f32c928.js",
    "revision": "0cea871764a681c1d3fc391ede1e183f"
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
    "url": "assets/js/61.8f456904.js",
    "revision": "af7e5ff0bab047156994a3e66f9cd7cf"
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
    "url": "assets/js/64.ccffe906.js",
    "revision": "643fdfe72479dd5732e8c9d4aa0c5849"
  },
  {
    "url": "assets/js/65.74803268.js",
    "revision": "fd60b4f3b47d400e672b8edeb599e5ce"
  },
  {
    "url": "assets/js/66.7101cc5a.js",
    "revision": "11717757185c042be217a2ec18ea4825"
  },
  {
    "url": "assets/js/67.5731bcb5.js",
    "revision": "f1fc76e231fbfc706938ef50945c49ca"
  },
  {
    "url": "assets/js/68.5e5fcbff.js",
    "revision": "2557a514185895c8938f27ec7b2addff"
  },
  {
    "url": "assets/js/69.0f18e61b.js",
    "revision": "4ab904b58ccfd6f2ec2e0a658d36ccf1"
  },
  {
    "url": "assets/js/7.2c0271a7.js",
    "revision": "fe17b77eac05279a8c9affb96335a351"
  },
  {
    "url": "assets/js/70.447febb1.js",
    "revision": "b904dac3eea2636c635bf1e218aca590"
  },
  {
    "url": "assets/js/71.34fcec0b.js",
    "revision": "682d920511338866aac151e53647f7a7"
  },
  {
    "url": "assets/js/72.da5b925d.js",
    "revision": "f8597e992d4705561411d53c4784edbc"
  },
  {
    "url": "assets/js/73.227ff668.js",
    "revision": "a9e72fc8252262fde63d0cee9bc76fee"
  },
  {
    "url": "assets/js/74.95258a5e.js",
    "revision": "13d4a1c21f2c9b8c0e92de543cca4006"
  },
  {
    "url": "assets/js/75.9396f685.js",
    "revision": "7872f0da94de9bd84ce4134273ca81d2"
  },
  {
    "url": "assets/js/76.0f9ccebc.js",
    "revision": "a2cffc4654c12a60fc9ee4c8fc9f3378"
  },
  {
    "url": "assets/js/77.64f56c45.js",
    "revision": "91f2ee8fcf1a218646d1c9c6394c9f3a"
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
    "url": "assets/js/80.c5374780.js",
    "revision": "cfe5f37a6349f90283a764976232dd7c"
  },
  {
    "url": "assets/js/81.5faf3b61.js",
    "revision": "b872aa96968cc19308049f04e37e966e"
  },
  {
    "url": "assets/js/82.e6c68a33.js",
    "revision": "be9cd13caa2d8ef73ca50060b91df3aa"
  },
  {
    "url": "assets/js/83.80338452.js",
    "revision": "87813ca3b5d239b57f2ce22986d2d0d5"
  },
  {
    "url": "assets/js/84.f88bdc56.js",
    "revision": "80ef1db1293dd42671378a1dca9f11c7"
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
    "url": "assets/js/87.23154b36.js",
    "revision": "8c6072871fc132a75b70eee8d36650e1"
  },
  {
    "url": "assets/js/88.0784aebb.js",
    "revision": "69cd69c14cfff2eea38b073697be96ff"
  },
  {
    "url": "assets/js/89.5f0f0685.js",
    "revision": "1b7d4382cb903bbf216b26c1c9768a30"
  },
  {
    "url": "assets/js/9.eaeab872.js",
    "revision": "80cc0a8604fecec36a5940914fdd2dad"
  },
  {
    "url": "assets/js/90.4ad6827a.js",
    "revision": "3343ee2b0f4bde894580d9bf0a9d8c2e"
  },
  {
    "url": "assets/js/91.473346c5.js",
    "revision": "7d69f9ae41700e5b42b17dd502cc11ac"
  },
  {
    "url": "assets/js/92.f4e257e8.js",
    "revision": "a0a3402411c680ad65bda1977838bd7a"
  },
  {
    "url": "assets/js/93.c23fd431.js",
    "revision": "649f3673d184231e30377989bc726c81"
  },
  {
    "url": "assets/js/94.1ea654d5.js",
    "revision": "e508d36762d1878246ade40732064e1c"
  },
  {
    "url": "assets/js/95.9f68f12c.js",
    "revision": "bf6d5195b23c7240edaba269d5962bb9"
  },
  {
    "url": "assets/js/96.9a48ec24.js",
    "revision": "feabfc5fc6af848f58b4dfbf789012e1"
  },
  {
    "url": "assets/js/97.1ed8d73d.js",
    "revision": "147107bd941f0d676824112328f8d6e8"
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
    "url": "assets/js/app.533777d8.js",
    "revision": "a64ab208fcb3bb74d7d537c8c075039b"
  },
  {
    "url": "index.html",
    "revision": "63d5ce0ed3e154702b64a87d5394003f"
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

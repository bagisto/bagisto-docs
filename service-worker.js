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
    "revision": "41f9e6c48cb6c441ce251fac4872f83c"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "fd4544a124398e73a59a36cd715c2733"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "abfb44e1adf025b82d3a2f96b5bf4830"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "35b55498bb23849af563afb5d6eb0cb4"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "f5334a814a185e3a5d7616893784b794"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "458e19c0784a1b6f1500223ff4a71256"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "f0efce731a230381446ca5de01ac6013"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d197ba2d741186dd5e1169b20ffe3a2d"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "022b67f49addecb3f1fb95bda5f10b34"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "651e8e3116188194a15ce47860ff829e"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "0e3045bdda4c2a914bd000c90de7c2e4"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "c95dd9d1e0b57a03a0d43e077479364a"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5859e570598ebabcc584f500bdfb0e89"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "267e023cd024ab74286e8533b2cda508"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "4f4e1ff2c0a2b05e7d6904576b5e8bfb"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "a7d362d760b0899142ce625b2284e415"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "60d025285c3da0481cacd0bbca1a8e82"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "fddcb142c366d0f8fe64180cad50f507"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "b5c9d0a5b46bf1df07f452c7d0a99bd5"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "0ff5d44213c07fa649044963274d61ec"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "54d1b3ef380d42f995accac5a51e1856"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "563f8ef0b1b64a708d25b07071a08b0e"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "df0daed838b38f7dc74961f170e9d09b"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "e8580c3eba08828066184f50622fb2c0"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "a8d79542d9dce96735ceffb059c3876c"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "43f3c87fb2a605b42eebbbf476fa54d8"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "833e3970e8bd30a50151a0d26172f4d6"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "47a349a69118614b06ca03eb0584f3fe"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "38c96511851330398b9ceced69c20a4b"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "dc744dbaa1b33a300c61ffd8f9a127c3"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "d211f82b52569eeccf821ed28ab4e0c0"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "8a9c492907ea90f7653e7d6875d80271"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "4b0efe5ee1706738a68638210e156fcc"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "6f24366e42f6831f59dcc25283ea159e"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "5b177f71d33968a5874a233a5385fdaa"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "360fe40fdb7d589c37bac2d8b452b364"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "63733f5a57c846c2b2de963e772728db"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "66e8cb61dc7c3054428e840958a93c34"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "09e975302e02b7ec583ce4fa17e5bf16"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "68bb96ea67bc67387d5f4757fe2c421e"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "b9275787ab9f08174dc6604b4b4ca4b2"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "3518fa395a357ee773906d6f422a11de"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "a8da8c8a27e30767708ef26ad105b814"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "4767568e7756bbedecef731e8317664b"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "f6339e63c105f1981ac6a956d3157958"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "14acb6490476c4ec23670176be5ea62f"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "8e2ab003a9b379519eaa21099b16001c"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "2dcee8e9a197bf623e56d5e112b1564f"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "a3f922b92766479a98aff1c9fcf5439f"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "07f253c3150aac57be67d9bb37c58fbe"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "e5a16517bff878e835aeb5b58fa50fa0"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "0f3ea2e3b67cd2948b9c5faae8854add"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "b0e2277821bddfac6a5260823d8d035b"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "de44220412e3030901594a28bfbaa288"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "6f909ce443b51f95f0b9fbaf0684dd78"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "38c27e66805df2460d18c35c316e9273"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "40b47507cc9eb5e96b193f942e41231c"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "16e54b77dab911bb560f070cdb4043ee"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "816a1cc0f5bf506af406211dec210c10"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a1f19b7f21420b78475d3bae2618c5a0"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "5782909bd4d6633d35c697419985b24f"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "1ceca8daa47f32d7ad0197cf94add294"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "2f9799aac688a85a46f4f067d858cff6"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "77b0cf26bcbf9f293a4a38503cbeff9e"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d3cab83415e499de8e84e1b36c954018"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "bc0a6a3878648a7f239c46f0c436317b"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "374813d032d86989ef6f657fe5be6fff"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "ac0bd1fcc8957fb4e15c7a150c89ada4"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ac10adaf5dc2c0c99c5125997ea5d5ec"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "31ea66e5ac24846d3766a591c1c5331d"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "1f6e268cdc1aa6221bb91e7eba3a59c2"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "b3b0e47f07d2e2926b579f454c2ba01d"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "e94141827c190873d7768b2c03677cdb"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "0f39d07a3b2ba29ae5b270973347337a"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ef7088df50479a2a041f5b1d6374f0f7"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "84b14877e72bceb2256b0d2b109c81dc"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "b4e8e279988ba655f669a57f6d49f33f"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "400a0b0c1c1093616be7323fe292516a"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "c11d98a42afa1dbbedec7a902e5d4d28"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4d6a3b7105b16b074731a4c92f3fc414"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "1011282d00acbef0abd7152b0e59a468"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "0e5e6e51dd02ad7b9b8f4a510b975182"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "3964eadb30e8253467ad9aa89bacb163"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "cdf3608da72cdc225b9856b1cca73123"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "f51eeec63dfa9d9616f2e1ace10034ed"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "942027c05dfd72accd8f54f8cd1bd464"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "a8cfc3048c79df7e4cfc3cdfaafcc6e4"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "37d279ddc368926e2bbec18073ca73b1"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "23b6e7b60a4d0dd25be72fefe5639c8e"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "5b06f86bdc921e0f8fe08882b09cf520"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "c089482e895786fc7bf604b83fe6cd38"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "fd07544051d965f4a91b4ebcc86b70dd"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "856db06db3326e46da09d350b3bc67ef"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "2f014710e852f9254886d3329a462937"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "41aa704d0f56a08d6c323a25a9e7c789"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "f4385fa191297735eb7f62ecf26f15ac"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "79352c8b58e6e93e68f32aef6f9c654e"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "0afe3effd69a7db4ee723c1858f5c3ef"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "5f51ebca4abdffeea44e3799328bf204"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "b2f55f447d6ae1618bdbc47febfc2b02"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "ca53d7c46af691e88d4a523e7d090d73"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "6e1ae8dec2f88696716a1fa366312f35"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "f75b32e07cf2749d6a01abc4c40fd86e"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "1ecde6bb6ff30f8a1071017e3dd6ba16"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "7489115431993971b243a4a905f59ca7"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "2d56a676bdfd1e3ef4edec455cdbf9ed"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "4f60e56587683ca272ee1b16a0f2f1c9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "dd7aaea3a270d6af31f66d70f8045b14"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "b74bfa0a39f1460935acf9b00ecd4b98"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "97667e2641157a25830840a292c71e40"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "281b9f97b9177694f63bfe8d1961b276"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "5625530bd7b86638441c793992a790da"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7ec2aef07355eadc29660647af1382a9"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "4e51daf22497900fd4c94c3e0df26958"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "95734facd43bf73f9c92682f72ab6475"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "e64a77ae6e5ba69106be426b2e59232d"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "9b162472505d9e6cfa4b3c91afd7f758"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "7d741253864a2fb744efa20c8bf623ee"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "1a0eb64e1548643ac217b7fa23cbcd2f"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "a3e2c38bf1b0940654cdf12e5d68da52"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "d991622f28f378dfe8387801caf0d946"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "ca845ea0043dc867155487cbe704226a"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "e1ad9eb532099055b768361d0a509fb4"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "e2c6d1780ae4877b2a73f961c3e1e500"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "cc24bd5833225906ce18ac0258dd9f4a"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "7f6dd668ecfa0947f8dd73e0dbaf1a2b"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "a5185c9bf0a79325d4439e7845f03f99"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "dce94f4c7a85bc7d9b685280fb9ebd1e"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "7c26fa883bbb3ff6acd5ed79c0bffde7"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "83b9f3db5fb77bdc460747ebdf3f0a18"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "ef9a0638fb40d9f846045af3ceeeccbd"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "7aa974e9cfbd4ba9f41d541461e05ce3"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "aa75bced156f45368a273b1b0bbbd007"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "3600cb6c9aba576bedf7cc615e14fd02"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "c5e73492573a5e3081ae08919d693e70"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "72197fd7e20860cb04ddac9dcc7e27c7"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "646fbfe9a1fd369a37c681f9f11317a1"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "ec0191bedd1431d01b9605a60d4bf2c4"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "30fbf6d6f67aa91e61ef754a683719be"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "3acea20125ad727bfd6cf07337fd1960"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "229f688d10de868af3edd52c227f979b"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d7411cb16f85468120b2830ed4a152ae"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "c2368f8f0d82aa6031af4a57a3bd095e"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "96d3a0dbc19b16a3583bc7eeb99c0dc1"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "714df40157e364120190d021df957394"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "0c2e4cde2b6818357000262e971c7265"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "693e5ec423b8e13d5ee102b6d95ba68d"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "db6ce8771d9cf086479e8ed514cedddf"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "cc5ac6ffffd4d1b13eddcb80d69e6ec7"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "7fe7aeddf904fb2c7a5d7049cf1c5ae0"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "51cc898ab727128aae5f8710be25927a"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "9546e93f9a741399c5a5b303bdd37399"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "97c54e7683be58482532717df70a7b80"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "05d335e6c912e2ee40fa268007cd69d2"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "2283b2fe749294a670ba746273b0111c"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "56f3711e1af0e218b90dcf0ba79c0f17"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "3848ae13cbce638a2a6cd125637a9997"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "9581c7a864439e51ac04ad6c590c2679"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "bd8a21808ede99b994503a69f502f493"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "34918c1f4dd7e1366f0c04d901cd475f"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "c8b178b673b07540895221b1cb7c9c47"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "cc77d24d691dc88455eae0b6791e91ea"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "ff4f793c696120174b7f5f7b5709de0e"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "1dfa9000a0ac4ec4c2b976e4f53ae080"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "a80cf846b1c42e6670e8e4f0d827c484"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "dee5c019760a59a169174f23aa4caea6"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "1ac84deec89200f9ff59e1eb54279f4f"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "1322d44a037a8efa9ebbde9d93cd42f0"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "c277c85e78a11f1d01088cfa78599d9e"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "68b0d38ad612078ed377dcf2fa7a385a"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "72af69a4aafa441f483e2d0ae1cc13ac"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "0c089bc9ac3369152a8576560934fab0"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "0dc5852b98646e8c869320cd1e55da39"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "1d41cad35dee0d381d16a88b48a2a7a8"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "28622c94047fea3346d3f429e8bd87eb"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "75ef1068bb2fdd395ce4265f0d1d1733"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "05e453d6bb6d7aa5dd9ebdb771d1b197"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "56aa7dd7303140c3995e6ecbe979af6c"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "4ae6571cc23782cda36d62d7bfc9acd4"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "aa1e0216f0c785c103b775af13db21ad"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "b50026b6011826fb09b019901f8f4ff9"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "74ea877cddbc248aff580647fef08664"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "b6cfe2f09cb388e5c4ae40f59c54baca"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "7cfab1201d71db6d45f89962dd170c30"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "a9c824e88ae9491071050cecbbc7d729"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "133b2b0a324ee43b2f72777896419cd2"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "6bcf4915380aa525bc5b8c108582dfa2"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "2c083b1ed21815e77932b2dafe7eb1a0"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "63c8ba5fb631d10a844c9f87512ad87c"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "fd77a490d514793f0f3b6d1d7e68b423"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "d3e9c54f633a1e10fd6d47a87f8f5e7e"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "0463d40118788fed1c33f8729fb59f73"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ce313981aa281a06882deb2d3175a0b2"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "44fb4c153d773ad92555b74ad6a43351"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "8b81f9e4acd5cc6753a33912839757af"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "09c1de2d862b42d2323601fabb6f0741"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "1b052e8443a2b92b383d1cde91c00fd7"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "255606e28aca1b74c0daf0d4d247f769"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "783f57fed95a937aba3d6c4783cd6966"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "0406ee6a6950baa62268beb0d5d77496"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "ceccd1ffcfd499efb412509b47381ebc"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "c1813873cd089adec6eb6e79840e8d4f"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "81a7e756497553c43de82dffbc76ee70"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "b0de17aa42df02b248815aa82a8fcf83"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "0a82eddfe9e016dc339dbf9bfcc14ef6"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "f03fda9ee5402fa7ce1cf41aa7b39df9"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "5ed1a63264bc772bd33389292daba635"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "14d2b8125c9cbdd10e44ab8e85ee5c2a"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "72055138d488d6e010c44362b5e67508"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "8ecb427c6eacf24a06bf5e2abd278c0a"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "4748031fdaad49658f1cdf8b8f26247a"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "2f24cde64d1c4cd2781fd3e8ac79931a"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "ce7d0af49e99d2e95fa61bcb1138b55a"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "43c160d3d5bad3632af7070d92fca792"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "b53771c0a66465a82c3b3065533c1e30"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "8a9dfef1c78472333d278f0dc4a87524"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "743468088dda19ea09b7228bfaa9daf4"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "34eebf20bd7168e94abb11163acf43e0"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "885c2f1613ec89020a0a2dd036da2bb5"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "ef73a4d57fa84d95c91facbecb435ce0"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "40a27e1c1851abd42649af60c5a8e2dc"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "9cb4d5933cbd8b31855aeaa74dec8735"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "3b2423c21a9d165f28b17c2d0c1f0b92"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "87d5ab4572d7d56c1be2305d0726f4bb"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "ee192da3fc72663c98f1ced98a95fd21"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "02daf4f1bebac2a21183ce03dc2f75d4"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "4f2a111f4c795a48f422880752543364"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "99dacb4ca97af0a2a016ee03300e6bc6"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "2e17696fb1f1cd0432026fbd37ccad99"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "d54a7a014873a9176405497cfab51dda"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "7cad4bd8b5b7cccfc715947b6093a2d8"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "51b37577eb4c7fce975c51eb61fbffc0"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "5210adfea7655d4eebf93c34b288d621"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "f9f7069a49f186036d3d158e9f3eb0cc"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "5fea828da73f6c1844f04634558a6ff2"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "e02e103f36da4e087a813fa6f88b107e"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "21204c215529a05fd70764e3e0b9ee18"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "3acb5fad1593133e5abc6d5d4d1a5807"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "d8760d6313a9967a8842fe27641d4333"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "82625b87394a7a77d4815a489149470f"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "de45811ce595776f9b54a68fc0373de1"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "4d861a027a2bd081090b8dee88db40cb"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "4948dd08b6ef7f5a8130ef55df3f047a"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d2fd3b078cd3731d1e708d781de955ca"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "3b0f56d96c3dd718afb4dc0fa0de4837"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "386da451c7ef39114ea83b84f9f51205"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "76e316bfad1bc5a2658757b791c4566d"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "dae5f7879762f83cd05be44d0161ad7b"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "937552a730196741b8b969e4c3a486df"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "235e47afd3405dbe1c72e13a23038967"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "68e0846a98ca4816f69c8928d1777f9a"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "30e350e6e12e57c6419de26f2cfd17ee"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "6bdfa3862f6b807be542c7202af21106"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "c40487e0b82dd7fb090d76f0231f6b9e"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "13ceccd9446b99df4f880fab514e57a0"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "1a6d87d6bab2ace3544cdc9313493869"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "7f128180c9a1b85aa2b8c84cc48ba4ea"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "b87eb8955c7f211cea3323163149c42e"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "459ea8cc0723741bfc468a2399b506f3"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "dae4bc95dbb49acd8625b74ab74ea1a6"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "6eda93da415172b70583e92248ce08bd"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "27f5fc31ffd1d63128594b52071aa9ab"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "9494c151cd60c216e0f0afdbc9188ce9"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "f9ff4b875021a637c19ae6f99770a99a"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "d0ba8743e62a11e1f7844b91e811ffde"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "8ff8d550233e07667a35c6d268090db0"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "00cffce6f76b43c42d19d65f86527e71"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "9980ec45821c90b1065fc7050e29da97"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "44ca01fed6f4f9a10be2572331c8a8d3"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "ba7d5df60d055124c76b47e73662388d"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "74c5e2bb56a1201b5a4274590f2c9073"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "8ddf0db24bb17a559e8be9e2e3d920e6"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "ebfd03ddc1de0730f1dfd2cfe76a6145"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "d51bfe1312bdeca093c5f91536a8477d"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "3e3e5f056e37256e65a177aa6fa4ac0f"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "ef2975eae377add637eb7cd7d686a02f"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "e2a1023b584db93e859c5f07ed22f483"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "a229f4042efabaaafbbc3a16929bb67e"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "f27cb478286a9af0e9e1ee3e03bb47fe"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "2b4b5bb90ca67dc8773fdba41e856621"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "117079d878d0900cc82be4713a2eb4a9"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "45504ead5fbc12ad64dac20d54e72e4e"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "5fe16b1a8f1dc7328136f621b90be274"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "ad37c58f1652715f9878fc2e0f641f9d"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "072588b07540a1078bf6786b2a645a0b"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "00a548c052c02f1e923846166cc46d73"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "99390f78f2d7bc72da225bf93e9e8c2a"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "591ed386f1ce40ae5106ab59e8400bb8"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "9f7812b65382128b8d1a2719c97a9e2f"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "18f872cfb7e485d34fc60ddc1fb1269b"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "3e94f34536e956d7c0600fd65da91e01"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "a53fd4ad85d6d7cb99004a747771fb5a"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "e28f367c660f59c7b0a03c7b0a8833a2"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "e44a3f924cc820858cc1c6ca60b3a5b8"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "7bdef29cbfa5232fa63c8cf3e0f54384"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2fc608fea102761299a55b3dac55e208"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "29f6ce757c44937ea711ffe0ef0edbba"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "a552ad9dd73f25cdc6fb670de5a159f7"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "cece56762a3e73e092d7e907f8171d64"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "55d8788a8dc4498296af92cbff2ea2a3"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "5daab90553235b2cb7cfe09ca63d5d06"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "90ef6a29d0c36e6c929782bb717eb646"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "dc3bae6ab419c012a613230ac9916715"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "b5310864a2fa3d1e0544f44f1a48fc73"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "a395ba7dea22b5fab61407d98cd78bc7"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "862e6d9028b4e4ce71723770d0dc9971"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "1a70c191d380809d2e150da6d7afcb1b"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "8913f30d5cde1e9c5cde764871684a0c"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "8a20df7b30a2a2d08a0fc62a4573795c"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "b90535d92afca42cc77ac5dfb9aa4bda"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a396182b8617b018a8d2e966cdd702d4"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "6f1251d3bd8a2cedbfb2cd9b41fbefee"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "9796396873a9f4984022ebe2c8ee589e"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "973c729bbf229d71394e84cca7f37a32"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "6eea9a82d774a33fbfcaebbfb2d2375a"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "df1d5bfaf3105f540f81bb859e6fe751"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "a27cc68d63774cf274d86604cf64cc02"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "8a15535a56e47567f016d8f58b0ebde6"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "febf75935039ed712329af7b4529a500"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "826090d1f9749a844293a31c24f7ff4f"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "2a6d27cada0edd6d39cc5a44d0e1e783"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "eb6a237c12b547443d40eee9064a3602"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "15f690f69257d96ea0c1d66bb8f170ca"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "8dc1f7cc4b0de92bd9db174213194425"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "6ccec20b251f891ea5c15330226e8220"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "d737aec84e42c6b2f614b8fe6053a426"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "71f3347775fff436f62ab91bd591fa39"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "7381a173e9615af0319850c661e238ce"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "68a429eb27b06004b0e46ce5a30627fb"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "3e17469a8b1685705afa0521d0ba516b"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "c1e5aaf8c3f662772e72010c81538542"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "990e4c6a8277dbe7c3e3803ca0f4e254"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "6276cd6d9a39797b0d03768cce869f9d"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "8a5ff7efdafb3148cc2783e446dcedc7"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "343364d0364773e04e35256a0e83211c"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "7da1e83dc14bcc1f7ad51620a7855885"
  },
  {
    "url": "404.html",
    "revision": "48a6bfd08a60e63952776362e60a3048"
  },
  {
    "url": "assets/css/0.styles.0d3d3e7d.css",
    "revision": "9e164653950b881a187d429847cb030b"
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
    "url": "assets/js/1.9d1d6014.js",
    "revision": "70c9f11f2722a60008448795b90fc6c3"
  },
  {
    "url": "assets/js/10.6a6b8f35.js",
    "revision": "e733a8135cae1b158a806af6d19a8cd6"
  },
  {
    "url": "assets/js/100.b6b79dd5.js",
    "revision": "84aba6dfebefcaaaac6f85522ec6b4f2"
  },
  {
    "url": "assets/js/101.c82a99c7.js",
    "revision": "cc8ddd2bc257f5c7e9f211b00f8a4697"
  },
  {
    "url": "assets/js/102.7c7f89a0.js",
    "revision": "d53efd4a42ba6ab1b97b3c6bb4c24f7d"
  },
  {
    "url": "assets/js/103.ed13c17f.js",
    "revision": "e85112f7f1a5f37386cc0ed7c7e2d773"
  },
  {
    "url": "assets/js/104.eb0dd0c4.js",
    "revision": "102b96e4aaecd62ce6f9500fb48ff64d"
  },
  {
    "url": "assets/js/105.a91e6ce4.js",
    "revision": "598aee0b5adec5d56f0adfea4b072772"
  },
  {
    "url": "assets/js/106.5d63a84c.js",
    "revision": "3312c23212db2d559a64e016920c809c"
  },
  {
    "url": "assets/js/107.fe60e6f4.js",
    "revision": "1ec6005d7c8feebf99da03b6060e3cea"
  },
  {
    "url": "assets/js/108.41c1b1a2.js",
    "revision": "a9a4681f8acd612859d759b35379852f"
  },
  {
    "url": "assets/js/109.f9a5aca8.js",
    "revision": "58174f1c562cba37565f01f07ac2814f"
  },
  {
    "url": "assets/js/11.8b954949.js",
    "revision": "4b1e7de1975649ecf40a26f2b4e0c301"
  },
  {
    "url": "assets/js/110.cafd1b55.js",
    "revision": "67660b3d2503a25ede537d7209bf1fe1"
  },
  {
    "url": "assets/js/111.ed98c57e.js",
    "revision": "e03fea5d53498d8a1e145cbeaf541d6e"
  },
  {
    "url": "assets/js/112.741fa1e2.js",
    "revision": "383d852dfaaa84809f1b057dd954005e"
  },
  {
    "url": "assets/js/113.d5479124.js",
    "revision": "96492a4f27039678377b89952f14ceb6"
  },
  {
    "url": "assets/js/114.698865a3.js",
    "revision": "9e17c35bd2592f2d8678bc6c3490233a"
  },
  {
    "url": "assets/js/115.bb31c748.js",
    "revision": "b6cdcc91a5041dc28bc8cc1c96909d27"
  },
  {
    "url": "assets/js/116.561174c0.js",
    "revision": "91b90a13620b1a9a2548ffa6f29db6cd"
  },
  {
    "url": "assets/js/117.74191023.js",
    "revision": "06fd16f59945c6ccfce94ac3215c082a"
  },
  {
    "url": "assets/js/118.bede2e12.js",
    "revision": "a1f01f4c60c5b02d08da351cb0ca7b1e"
  },
  {
    "url": "assets/js/119.aaa5b1cb.js",
    "revision": "c6912a79d2d5476bdcb17d2896763d09"
  },
  {
    "url": "assets/js/12.db523a6a.js",
    "revision": "e756b7317ad43362114b1185cea053ad"
  },
  {
    "url": "assets/js/120.f1172aeb.js",
    "revision": "06ff66ca29c3b4475c7c0ed908dbec7d"
  },
  {
    "url": "assets/js/121.f2231bbb.js",
    "revision": "6304c2117887f60144abd240113d772a"
  },
  {
    "url": "assets/js/122.7a230d26.js",
    "revision": "2869751d4f387f2aaedd3722607ce217"
  },
  {
    "url": "assets/js/123.3b0058df.js",
    "revision": "a5c49446e1a965ddcd38ecb99ff1c85a"
  },
  {
    "url": "assets/js/124.c603ad38.js",
    "revision": "be21d3c75f2ec4d7b6d2a621e931a0d6"
  },
  {
    "url": "assets/js/125.2acc1f4f.js",
    "revision": "3aca4a8b3a3a27c9ac66eab00a4c57de"
  },
  {
    "url": "assets/js/126.6ecd69ec.js",
    "revision": "7b5b54e60d87e7186df339c840133f15"
  },
  {
    "url": "assets/js/127.6bceee9e.js",
    "revision": "55daf04c351df5e5bb6bb9aa5be8b7fc"
  },
  {
    "url": "assets/js/128.9f930aa2.js",
    "revision": "8eb0ec15f2f2648145102cfc7bd20ef4"
  },
  {
    "url": "assets/js/129.05fbffaa.js",
    "revision": "a49ae5d9d26c38e312beda31df80c27c"
  },
  {
    "url": "assets/js/13.4ea53a21.js",
    "revision": "624ef7e2930cf051769872152b0b4790"
  },
  {
    "url": "assets/js/130.371aa458.js",
    "revision": "2b0d0ab40c095c107283aa094a469a0b"
  },
  {
    "url": "assets/js/131.f51d90c5.js",
    "revision": "82a13db4a631a52dcf5edd965055eb44"
  },
  {
    "url": "assets/js/132.eee7e47d.js",
    "revision": "ab758f5a4ce233a48431eae23fe1ab22"
  },
  {
    "url": "assets/js/133.d68a08b3.js",
    "revision": "5b133536c6d61f7f3cb1a310a2030249"
  },
  {
    "url": "assets/js/134.5ee0f9c9.js",
    "revision": "39948405a414ad28879a4909c535ddf8"
  },
  {
    "url": "assets/js/135.be8ee34b.js",
    "revision": "bcf9e2560a331de74ad247c1087f766c"
  },
  {
    "url": "assets/js/136.454ee856.js",
    "revision": "3ed97bd1fb1ff9950fda67c8ee00c296"
  },
  {
    "url": "assets/js/137.0bea76bf.js",
    "revision": "7aa8b24202003daf46dd435608d743f1"
  },
  {
    "url": "assets/js/138.51143ed4.js",
    "revision": "cbe502e02f046962f8245b3549cbc9fb"
  },
  {
    "url": "assets/js/139.35a3bbbf.js",
    "revision": "6776674aad9b565358e26bdf6d47b792"
  },
  {
    "url": "assets/js/14.a16c57a9.js",
    "revision": "fdd94bc85f24f3e2178d43dcfd3630dd"
  },
  {
    "url": "assets/js/140.04bab051.js",
    "revision": "5d8239bd677c5c74aaffc00dc5565405"
  },
  {
    "url": "assets/js/141.08b521cd.js",
    "revision": "465d568037a1ef5f4da4c91ddff356b9"
  },
  {
    "url": "assets/js/142.12204587.js",
    "revision": "8c44a5a3180286c68bf6ecbf01314d9a"
  },
  {
    "url": "assets/js/143.f6909121.js",
    "revision": "61563d4c9a893ea79a296d445365a94e"
  },
  {
    "url": "assets/js/144.cccbb924.js",
    "revision": "d5b99282128ef5dc18be26e8e403d4c5"
  },
  {
    "url": "assets/js/145.81934cd9.js",
    "revision": "42fce418941f77f0bcb3473d599e52d8"
  },
  {
    "url": "assets/js/146.6687bedc.js",
    "revision": "96bc1282968072fff60d198027599d82"
  },
  {
    "url": "assets/js/147.faeb42a7.js",
    "revision": "3a2c95c9c04f62289bf2515f668dbbbe"
  },
  {
    "url": "assets/js/148.529cb532.js",
    "revision": "938c64913f87cd565333851817b68a8e"
  },
  {
    "url": "assets/js/149.b9b293e4.js",
    "revision": "ebd8a54b3741da86d8c6127cff3a350e"
  },
  {
    "url": "assets/js/15.2ad49f9b.js",
    "revision": "9266939c5fefb9bd863336abcd37448a"
  },
  {
    "url": "assets/js/150.ee5c1c8b.js",
    "revision": "eb3b1f179be66affe5ea6730bb323456"
  },
  {
    "url": "assets/js/151.1f6ee453.js",
    "revision": "2e6a749600ed494553854868b9b66d84"
  },
  {
    "url": "assets/js/152.76b5b9a6.js",
    "revision": "ebf635480547c88790cfc92e45b929ab"
  },
  {
    "url": "assets/js/153.6d5f17e4.js",
    "revision": "db41b2a35a4953db21f4eca355931354"
  },
  {
    "url": "assets/js/154.e2797b90.js",
    "revision": "abd3678c1ea6f1a80fa31a159e578c5d"
  },
  {
    "url": "assets/js/155.07a069f0.js",
    "revision": "c29b7577a109f0d6713fd3f761798d70"
  },
  {
    "url": "assets/js/156.2e26c5bd.js",
    "revision": "581da0c2cebfcad5cfd2f9eb8e339d70"
  },
  {
    "url": "assets/js/157.129f4090.js",
    "revision": "ede0c375838225912841e564f462cf34"
  },
  {
    "url": "assets/js/158.7a9b9972.js",
    "revision": "ae08a94824296e6dde988b84c28513d3"
  },
  {
    "url": "assets/js/159.befc70c0.js",
    "revision": "59b1db72408eaf35e165629fb13653fd"
  },
  {
    "url": "assets/js/16.5d41ee2c.js",
    "revision": "63e170c8419edb3577959c0ba640ce57"
  },
  {
    "url": "assets/js/160.044f5659.js",
    "revision": "0b26395ad9148d8412588395c19890fe"
  },
  {
    "url": "assets/js/161.75f7c490.js",
    "revision": "0eb697e940ec5b0264903e86a2c93821"
  },
  {
    "url": "assets/js/162.94dd0df8.js",
    "revision": "a76b947230d8d6a74fcf00d366ed5471"
  },
  {
    "url": "assets/js/163.3562e7ab.js",
    "revision": "bd73c430b252b9f20297429d15a101bc"
  },
  {
    "url": "assets/js/164.655c8389.js",
    "revision": "8797f6f2db4dbfe1245707140b76e251"
  },
  {
    "url": "assets/js/165.edf09bdf.js",
    "revision": "4c0cddd910b920af174429f5b97fbfea"
  },
  {
    "url": "assets/js/166.667bd119.js",
    "revision": "bcaa60ca7ba4870056470d1d2e3dc6a4"
  },
  {
    "url": "assets/js/167.aa75f4a2.js",
    "revision": "8ccbf716aba93993cb4287f034546fe5"
  },
  {
    "url": "assets/js/168.c07e31a7.js",
    "revision": "1b304a2d66dc703c826f01ad66dc5337"
  },
  {
    "url": "assets/js/169.da3534ff.js",
    "revision": "fe09f927d6dfcef6c784b6940d4e2eaf"
  },
  {
    "url": "assets/js/17.d2d5f43e.js",
    "revision": "03203dab5f01f558e77243d559e89a7e"
  },
  {
    "url": "assets/js/170.6f524dd6.js",
    "revision": "62def771bb14882d7c44ec5f2a5983dd"
  },
  {
    "url": "assets/js/171.09a0fc2d.js",
    "revision": "32c4aa7a098b32439cd699611603fdde"
  },
  {
    "url": "assets/js/172.b39fd4e6.js",
    "revision": "3c100947741d9925aa45c4bbd359af2e"
  },
  {
    "url": "assets/js/173.0266b1ba.js",
    "revision": "256687e714701e5006b5d92da2138b7a"
  },
  {
    "url": "assets/js/174.548ba319.js",
    "revision": "dc0edfe819348fcc446039222a09c0dd"
  },
  {
    "url": "assets/js/175.61472f58.js",
    "revision": "ff78d1e93f3ae619f026bf72485f7cea"
  },
  {
    "url": "assets/js/176.7044a9dc.js",
    "revision": "535114f7b9fbff43fad84e66ff1601fc"
  },
  {
    "url": "assets/js/177.ffe472fb.js",
    "revision": "06806047dbfb5f28d0e327eac2ee6d35"
  },
  {
    "url": "assets/js/178.f649599f.js",
    "revision": "9c6eb6cea9572bf62a9a74b3dcb6ef82"
  },
  {
    "url": "assets/js/179.42b310eb.js",
    "revision": "21ad9821dba0bc0e2f6f2abcc41f7a9e"
  },
  {
    "url": "assets/js/18.0d308363.js",
    "revision": "b1374d5baea8dd1711ee32d79d177505"
  },
  {
    "url": "assets/js/180.66353a99.js",
    "revision": "be5a75133ccac91fe2d96da8ccd5c0ce"
  },
  {
    "url": "assets/js/181.f18e4fcf.js",
    "revision": "a8cd1a56b14f410a1f82ae1a0cf3273c"
  },
  {
    "url": "assets/js/182.70e479f6.js",
    "revision": "4164ff6c004fc881ce0fb532e3e8a879"
  },
  {
    "url": "assets/js/183.ef14fc42.js",
    "revision": "4368c17c2a203dec65d1abed407f0284"
  },
  {
    "url": "assets/js/184.5f84213b.js",
    "revision": "0db2280be020bab2ae87a52440dcad49"
  },
  {
    "url": "assets/js/185.71d5571e.js",
    "revision": "4ee49daf820f95c52f0a31a768fe0370"
  },
  {
    "url": "assets/js/186.2bf9953d.js",
    "revision": "41ff705705fcc0e6fcbbf8f0e7246a65"
  },
  {
    "url": "assets/js/187.55f97e7d.js",
    "revision": "2d126f75875115c759fc7295c2b38261"
  },
  {
    "url": "assets/js/188.4ff64282.js",
    "revision": "ef30f61650a24f1df5e3c4aa4309c3fb"
  },
  {
    "url": "assets/js/189.287fb98a.js",
    "revision": "918e02e4d4f2e3a602901b14585eadb2"
  },
  {
    "url": "assets/js/19.5be545ce.js",
    "revision": "1b5806fe9af816f7df50b0448b524245"
  },
  {
    "url": "assets/js/190.37603c95.js",
    "revision": "3a1c1af3d00ad341456af88c79e4373f"
  },
  {
    "url": "assets/js/191.f5dc61af.js",
    "revision": "7be489d8822300cdd897a1861962dda2"
  },
  {
    "url": "assets/js/192.ff19ba7a.js",
    "revision": "544e4ab93aa1c83055deff5a280e6c06"
  },
  {
    "url": "assets/js/193.4e77b044.js",
    "revision": "56645c4d23de22070f6a40955d0b6aa8"
  },
  {
    "url": "assets/js/194.71f2e50f.js",
    "revision": "316ee5be9ac1a0a51eb34454aa66e009"
  },
  {
    "url": "assets/js/195.f2a85832.js",
    "revision": "7f09accdfa372e2e20a861b8149697ba"
  },
  {
    "url": "assets/js/196.2fdc38fa.js",
    "revision": "b2cc26d35f4c4de9333eaef37eb348d5"
  },
  {
    "url": "assets/js/197.e215fddc.js",
    "revision": "d1e14ae9b7a0426c99cdb3707dddc6d3"
  },
  {
    "url": "assets/js/198.ddd2a278.js",
    "revision": "8921bbf1af0faf2971e15541b2a089c6"
  },
  {
    "url": "assets/js/199.91bc9f39.js",
    "revision": "97f78765a511beb844409d3d3ba63de6"
  },
  {
    "url": "assets/js/2.f60fb795.js",
    "revision": "64570ce90e9ca32b0ae88584c1831a23"
  },
  {
    "url": "assets/js/20.01455754.js",
    "revision": "663782270690cbfb3a824bf628b484df"
  },
  {
    "url": "assets/js/200.5522065d.js",
    "revision": "a3f060de643f81aa35665129d67ffd81"
  },
  {
    "url": "assets/js/201.eb89fbad.js",
    "revision": "3b03d00c8fe45578bb859173160f223b"
  },
  {
    "url": "assets/js/202.9cd3502d.js",
    "revision": "1e1d994e2d0218f702367116e8518afd"
  },
  {
    "url": "assets/js/203.fa955d53.js",
    "revision": "6c3bc8eb9cfd72e526b2cb8da1153f15"
  },
  {
    "url": "assets/js/204.6db5ffc8.js",
    "revision": "d69556bf033457805666ea9e398ccf8d"
  },
  {
    "url": "assets/js/205.f8a267fe.js",
    "revision": "a93c5adddb2b4303d58a4467d5976b4e"
  },
  {
    "url": "assets/js/206.c9056ce7.js",
    "revision": "12713048c129624686892c8d55bc07f9"
  },
  {
    "url": "assets/js/207.fad02ed6.js",
    "revision": "8d3cd915bb7759c3e4db0dbb619f1ad5"
  },
  {
    "url": "assets/js/208.d97e56a1.js",
    "revision": "06ad148dc7cf0740a1447b19bf56adc2"
  },
  {
    "url": "assets/js/209.d2f39cb8.js",
    "revision": "7fe7c0aa115484d807105bdbdb466245"
  },
  {
    "url": "assets/js/21.329df3b0.js",
    "revision": "84ee8486d8c489e22eafa7ad5599effa"
  },
  {
    "url": "assets/js/210.97bd2493.js",
    "revision": "d2bdc1bec2d0594fff4d1a486292851c"
  },
  {
    "url": "assets/js/211.20e6198c.js",
    "revision": "19a0648c79a8dc51d5beb6cc0a7106a8"
  },
  {
    "url": "assets/js/212.96377791.js",
    "revision": "b9c6c7df64897d757409049172e64217"
  },
  {
    "url": "assets/js/213.2cf5b662.js",
    "revision": "5f2ea24f5e8afe912300c690038815b5"
  },
  {
    "url": "assets/js/214.e22710cb.js",
    "revision": "d0c3f03342f8c713bda14b35d8540a2a"
  },
  {
    "url": "assets/js/215.de6a6f2e.js",
    "revision": "fbbf0bcbac227ce2a33d7675dd19769f"
  },
  {
    "url": "assets/js/216.e686a22a.js",
    "revision": "dbab2ec608fb1cac86488a386e925369"
  },
  {
    "url": "assets/js/217.581fb603.js",
    "revision": "05d79487eb362d8685135c695013e8f3"
  },
  {
    "url": "assets/js/218.7c3a20dc.js",
    "revision": "79ff4d9c8ec2b13c33864c219ab137c1"
  },
  {
    "url": "assets/js/219.cf9fed1e.js",
    "revision": "5ec41bda278f0a229fcd9c4dcd31d6ed"
  },
  {
    "url": "assets/js/22.54e9474d.js",
    "revision": "ef1debb3371d49dba86a7295d3d3b518"
  },
  {
    "url": "assets/js/220.91ee17da.js",
    "revision": "7f9eac060bf3fd753c6822e72cc0a098"
  },
  {
    "url": "assets/js/221.11f7a348.js",
    "revision": "5a9ae4b5f8c78b1a8d9d8ecda5710c3c"
  },
  {
    "url": "assets/js/222.3d0cb53e.js",
    "revision": "c93f053c0570250f694dfff03ca39f70"
  },
  {
    "url": "assets/js/223.7ace628a.js",
    "revision": "645e1692f3f229ab3e75a10b167a129e"
  },
  {
    "url": "assets/js/224.2d44f046.js",
    "revision": "8f136ea27bac27b8c63c83e97654ff4a"
  },
  {
    "url": "assets/js/225.80c9a1fe.js",
    "revision": "8680a383d9b247c5a7a096b1ab592cb0"
  },
  {
    "url": "assets/js/226.4d6e1807.js",
    "revision": "628cc9b8db9cdcd84a73bfb65cd21ba4"
  },
  {
    "url": "assets/js/227.d8e1708b.js",
    "revision": "2b03544ded8a972ae41b9093cc21aa38"
  },
  {
    "url": "assets/js/228.0400d1ca.js",
    "revision": "8e2b2a7b9673e733f1a0629444a46cfe"
  },
  {
    "url": "assets/js/229.2c413bf5.js",
    "revision": "e5b3c825eff03d9b76ece712682dd881"
  },
  {
    "url": "assets/js/23.35bf827d.js",
    "revision": "a6237424347020dc04196dedb49c39b4"
  },
  {
    "url": "assets/js/230.167cafd9.js",
    "revision": "a607888d8eb233904009b88524ff511c"
  },
  {
    "url": "assets/js/231.b2395b09.js",
    "revision": "b2758c9e23aa5fff14a2e3c8acb43e13"
  },
  {
    "url": "assets/js/232.b7923396.js",
    "revision": "3d0178f78cebfbcaf84d4d5fc821835e"
  },
  {
    "url": "assets/js/233.2a9370c3.js",
    "revision": "8cfc3e85240a2a91abd778ccaf2d86de"
  },
  {
    "url": "assets/js/234.de1c3255.js",
    "revision": "c10f05e17c6e993f5003db50f811a87b"
  },
  {
    "url": "assets/js/235.8feea0d8.js",
    "revision": "6516a9107d003d1ee112701f7bda2d0f"
  },
  {
    "url": "assets/js/236.76124afc.js",
    "revision": "05a5183514d3cff688628f0edfd9c617"
  },
  {
    "url": "assets/js/237.ff101761.js",
    "revision": "b1fb797d56129d8ce9a2025a8d69c523"
  },
  {
    "url": "assets/js/238.0c9b6c9c.js",
    "revision": "1d087e6ad42af0a888a8b31a203d54bf"
  },
  {
    "url": "assets/js/239.339d26ff.js",
    "revision": "8f9288595a6e042b89da54d750a81b44"
  },
  {
    "url": "assets/js/24.78de70a6.js",
    "revision": "203b069d3a2f431e051e87f69e6b61bf"
  },
  {
    "url": "assets/js/240.e24c5e5f.js",
    "revision": "c649efa31f7211041083941867983a43"
  },
  {
    "url": "assets/js/241.6eb64459.js",
    "revision": "a89029d3325ab1db83b64b6778a5d6c7"
  },
  {
    "url": "assets/js/242.af574f3d.js",
    "revision": "dbf3aa6158e183477e28135454005a34"
  },
  {
    "url": "assets/js/243.849b3523.js",
    "revision": "19cf17180f9960ac94076492cba4bce0"
  },
  {
    "url": "assets/js/244.19707128.js",
    "revision": "d05b6563b793554f64080746a270a571"
  },
  {
    "url": "assets/js/245.d0c6c188.js",
    "revision": "fb0bf545696b92dc143c0b161c2713d8"
  },
  {
    "url": "assets/js/246.c7317dd6.js",
    "revision": "3c149870a272a0f4a7bd39f708d55300"
  },
  {
    "url": "assets/js/247.f30598b7.js",
    "revision": "ba9e27dcd9d7fc65b78bd0936cfb7705"
  },
  {
    "url": "assets/js/248.ab7f636a.js",
    "revision": "4d770db8ad1049e00d39e3f02e6a6ad2"
  },
  {
    "url": "assets/js/249.aa952188.js",
    "revision": "fcfadcdc40a59a442b1467b6390b8070"
  },
  {
    "url": "assets/js/25.7c1612ef.js",
    "revision": "7b761fe8a33712542f86bdf366da746c"
  },
  {
    "url": "assets/js/250.6b74530e.js",
    "revision": "e1c6e7d726850dc86efd40c903718a29"
  },
  {
    "url": "assets/js/251.a21a322f.js",
    "revision": "560988d3550f4bd36caed7fdcdba06aa"
  },
  {
    "url": "assets/js/252.adbdc2d2.js",
    "revision": "47d15137048d3104142cb6879094bd27"
  },
  {
    "url": "assets/js/253.4c89c007.js",
    "revision": "e57973c4be43f0973698119360fcee1e"
  },
  {
    "url": "assets/js/254.1ddb7519.js",
    "revision": "109cb7bc4d1b607f8c01985d9925eb72"
  },
  {
    "url": "assets/js/255.2bd47c4b.js",
    "revision": "40a2c867dbd4325336e30942e5599cab"
  },
  {
    "url": "assets/js/256.81cec226.js",
    "revision": "a18f70a86cb6cfec0778d5cd26fe2947"
  },
  {
    "url": "assets/js/257.9075bdbb.js",
    "revision": "707e91f5f14f39890ec97fb2ceda756a"
  },
  {
    "url": "assets/js/258.dba0c648.js",
    "revision": "7af9d7a3591a31be6481ca9470de1386"
  },
  {
    "url": "assets/js/259.d79625c5.js",
    "revision": "baeb3ced94cec35c579d255d338162d8"
  },
  {
    "url": "assets/js/26.3957fc57.js",
    "revision": "8565308f823b64167cac3c0623628b50"
  },
  {
    "url": "assets/js/260.00f872c6.js",
    "revision": "e090fb64a97b1ed98a69b1b6503a4fc4"
  },
  {
    "url": "assets/js/261.1a7c8aaf.js",
    "revision": "04ed567088554fe2f728a01f9653bf17"
  },
  {
    "url": "assets/js/262.161b2ab4.js",
    "revision": "faf479999519c0dd4b51998f784c7f40"
  },
  {
    "url": "assets/js/263.8ced92c4.js",
    "revision": "acfa6c42080dbae37e55db1feae1af6c"
  },
  {
    "url": "assets/js/264.75b55569.js",
    "revision": "6bac1e8d7c1749f552c0aaa265d7df9c"
  },
  {
    "url": "assets/js/265.f94c9113.js",
    "revision": "a04c0de49968e0717da1c8aa8cf68466"
  },
  {
    "url": "assets/js/266.6cf10ee2.js",
    "revision": "324dd64dd0e920e6d1b69f3ebde02bd2"
  },
  {
    "url": "assets/js/267.1d31e558.js",
    "revision": "b47b94bd3bf7dba5c259c92f1e5247ad"
  },
  {
    "url": "assets/js/268.d64af66d.js",
    "revision": "e84657cb4002fc9567a96a471b91819e"
  },
  {
    "url": "assets/js/269.1066858e.js",
    "revision": "e00489122ada97ff93361fe573d382ce"
  },
  {
    "url": "assets/js/27.2b8266d6.js",
    "revision": "3ef7252e75a3a184542806a7a9b34f3f"
  },
  {
    "url": "assets/js/270.9bf10b14.js",
    "revision": "e982dd7ecc36d2ac4f70a3eb1d793266"
  },
  {
    "url": "assets/js/271.713a326b.js",
    "revision": "1f42604386494aebfdd6619b0549eb80"
  },
  {
    "url": "assets/js/272.55a252e5.js",
    "revision": "7909206bfa03488f725826a38ff0ff8b"
  },
  {
    "url": "assets/js/273.1148d9ff.js",
    "revision": "9132c5718e4039c20de367ef2ce95125"
  },
  {
    "url": "assets/js/274.3ebe8cda.js",
    "revision": "a60e6862bbacd82c7412a4dee7d17862"
  },
  {
    "url": "assets/js/275.41c11752.js",
    "revision": "d5f220834fae205818e447c6bfc25ae3"
  },
  {
    "url": "assets/js/276.48f66109.js",
    "revision": "4e5d8459f4823e9cf5b69226a2079cdb"
  },
  {
    "url": "assets/js/277.94bbce46.js",
    "revision": "982b32b18a84a25153def0c63f832d32"
  },
  {
    "url": "assets/js/278.e65c41bb.js",
    "revision": "ef68f2836d6836222938461c1eccb3f2"
  },
  {
    "url": "assets/js/279.77211549.js",
    "revision": "19016750cd256b48a7701f8b2087064c"
  },
  {
    "url": "assets/js/28.95d5f6c0.js",
    "revision": "ef1cdee21a78063770b725f5b1d626cc"
  },
  {
    "url": "assets/js/280.24a0ec3a.js",
    "revision": "6944d30f447680b43a37c3b6ef47f9c1"
  },
  {
    "url": "assets/js/281.4e01d289.js",
    "revision": "eda0defe97d4eb6a37e542a93eab97c9"
  },
  {
    "url": "assets/js/282.1ad32c52.js",
    "revision": "be76c6a11ff46b43ef5bd3ce2b03a592"
  },
  {
    "url": "assets/js/283.d928b421.js",
    "revision": "7a446809577d19f00154ec035570fa3b"
  },
  {
    "url": "assets/js/284.34b844ca.js",
    "revision": "0f4831107b16505c037789a8e673e6bc"
  },
  {
    "url": "assets/js/285.b1bba65a.js",
    "revision": "cbda72ba9076f780e1bf304adb7137f5"
  },
  {
    "url": "assets/js/286.a289f091.js",
    "revision": "2b003fd7e0aa29473e6489af1c28e6dd"
  },
  {
    "url": "assets/js/287.2a3c5061.js",
    "revision": "5e62d3fdad23fd4d5518c4840b994099"
  },
  {
    "url": "assets/js/288.aa9404bc.js",
    "revision": "a6ca046b7ae0ebdd703a8ead6f62a9ef"
  },
  {
    "url": "assets/js/289.82aa8d9f.js",
    "revision": "a4f89a8b8a17cf4b0d5b4b3b637d10f3"
  },
  {
    "url": "assets/js/29.cd622e96.js",
    "revision": "2c4cff71d3f642919afa86b7d716ef6a"
  },
  {
    "url": "assets/js/290.77523642.js",
    "revision": "fec8a8be9a168508a543c56f31f9b0dc"
  },
  {
    "url": "assets/js/291.20db0c01.js",
    "revision": "72ad1d643c39e453a11b7990780c1efe"
  },
  {
    "url": "assets/js/292.7b1e2027.js",
    "revision": "3f72aa9fc4b8082fb683bf2a69c3b41c"
  },
  {
    "url": "assets/js/293.d5dcf114.js",
    "revision": "962f6d0d17f809eb254fd5e3eceeff84"
  },
  {
    "url": "assets/js/294.c181e779.js",
    "revision": "cbb21680424ef8ecfaa55f838a68f276"
  },
  {
    "url": "assets/js/295.10b91031.js",
    "revision": "18d62fcfa54200d293d838dfc4923512"
  },
  {
    "url": "assets/js/296.3dd85db2.js",
    "revision": "e1901830d916c597c937f44a6fd83c3d"
  },
  {
    "url": "assets/js/297.5da30d04.js",
    "revision": "12d790a287204e4edc8e838ad90ffedb"
  },
  {
    "url": "assets/js/298.d6c6cf2d.js",
    "revision": "af2a9e374a2ab51e50c781319eeaa8a8"
  },
  {
    "url": "assets/js/299.cfd71036.js",
    "revision": "009215e3f9eb98a37bf262b6e46e9374"
  },
  {
    "url": "assets/js/3.38524212.js",
    "revision": "c527a98b7c8ea60616770d87411fcc60"
  },
  {
    "url": "assets/js/30.76112fda.js",
    "revision": "79e0ca239a0bea906e92eb8769f30d0c"
  },
  {
    "url": "assets/js/300.de0f7521.js",
    "revision": "f0d34979a28f38ec44f13686092ee095"
  },
  {
    "url": "assets/js/301.99139518.js",
    "revision": "886b15082fbe28a60cad41e5a9848812"
  },
  {
    "url": "assets/js/302.f67ca0ab.js",
    "revision": "f4710972358a93ff0e4cfc85afbc9879"
  },
  {
    "url": "assets/js/303.48a4e348.js",
    "revision": "1a9e77d95c970f37c4f5c4853d64fe61"
  },
  {
    "url": "assets/js/304.afd62b7d.js",
    "revision": "93c54a4ccbfe214753cd889151e62107"
  },
  {
    "url": "assets/js/305.4798711d.js",
    "revision": "979cc0c272a9a35c34e818be01ab5f27"
  },
  {
    "url": "assets/js/306.9c0c46a1.js",
    "revision": "de71530e198ad4aa7dbf520f5cac4027"
  },
  {
    "url": "assets/js/307.fad837a9.js",
    "revision": "0c1a6453c3c9439e7e4821f272cd989a"
  },
  {
    "url": "assets/js/308.4eecbce3.js",
    "revision": "147eb7498fe77ebd7970c681a02b54c5"
  },
  {
    "url": "assets/js/309.78ec28d5.js",
    "revision": "f4bafb0cb122a76062454d87df5190cf"
  },
  {
    "url": "assets/js/31.8ed34412.js",
    "revision": "31706a77c8d956143d7193a42c2889dd"
  },
  {
    "url": "assets/js/310.c9693d7e.js",
    "revision": "8805da827b8115a6340e57a9ee9d5043"
  },
  {
    "url": "assets/js/311.a9f9ca66.js",
    "revision": "b29c591bf03da6f5abdec48f63477b6b"
  },
  {
    "url": "assets/js/312.70dd23be.js",
    "revision": "7c308728412c115c4c93b3d894433563"
  },
  {
    "url": "assets/js/313.5feffd66.js",
    "revision": "9cf8a703836b6aa3c88f57dae771e9e1"
  },
  {
    "url": "assets/js/314.d054f2e4.js",
    "revision": "b37be98dc69f0d3ce14a88337c00eb6c"
  },
  {
    "url": "assets/js/315.a56bfd54.js",
    "revision": "25d65117aae281c0c41c5f1aa7b1cc62"
  },
  {
    "url": "assets/js/316.a6619468.js",
    "revision": "2d3460b6629ee89a4374590a1ce8cf3a"
  },
  {
    "url": "assets/js/317.03375104.js",
    "revision": "c6e2a41bed4d40546cf83ced3eb897fd"
  },
  {
    "url": "assets/js/318.fc3b1078.js",
    "revision": "5d5933ce04188dec6f948eda39638cca"
  },
  {
    "url": "assets/js/319.cdc06fe6.js",
    "revision": "b1683ca3272d96f75612629cd9e4f3c7"
  },
  {
    "url": "assets/js/32.d8a5aa7d.js",
    "revision": "8ad321febc4c9e6f533b982860793ec5"
  },
  {
    "url": "assets/js/320.0851b40c.js",
    "revision": "2f1956ba720a76d85034cec2cb6bbd86"
  },
  {
    "url": "assets/js/321.f5de6b44.js",
    "revision": "a9fb5f99728b51db598e7561a43ddb48"
  },
  {
    "url": "assets/js/322.9ce475f1.js",
    "revision": "39c47ce673944f57b44f0d75e0b1af91"
  },
  {
    "url": "assets/js/323.03806fa2.js",
    "revision": "eb2695dbb4cb87fba2a9dccf0bd63e4a"
  },
  {
    "url": "assets/js/324.018c7b3a.js",
    "revision": "e699be0be2b1fe2f2e8f557d755eba38"
  },
  {
    "url": "assets/js/325.f290d1a9.js",
    "revision": "b03ba9e1a08eb635227a0418b5dbb11d"
  },
  {
    "url": "assets/js/326.567f816e.js",
    "revision": "42e0e85d4beed78a4e0a612dc05aeb22"
  },
  {
    "url": "assets/js/327.b2a3f9a2.js",
    "revision": "d1f3a512382b399ec850c206d90935f2"
  },
  {
    "url": "assets/js/328.79fe6a0b.js",
    "revision": "bcda656562ccf099539de9a12c75b083"
  },
  {
    "url": "assets/js/329.706bcee8.js",
    "revision": "c615351935c67cca4383a67f26a56af1"
  },
  {
    "url": "assets/js/33.5cf93912.js",
    "revision": "8482e3ddb35593daf07232caae3a6837"
  },
  {
    "url": "assets/js/330.3856b36d.js",
    "revision": "24af9ab5f27e0f56297a0c29d7d296de"
  },
  {
    "url": "assets/js/331.dc9f0e6c.js",
    "revision": "6dde2660acd0c99bee43a4d2ef1d1f5f"
  },
  {
    "url": "assets/js/332.99bfd370.js",
    "revision": "9e95ac61ba79303346c012118983e210"
  },
  {
    "url": "assets/js/333.15406102.js",
    "revision": "aaa1f8dd2d012c9e0ae0102a455e497f"
  },
  {
    "url": "assets/js/334.5c0ef5ed.js",
    "revision": "61fcd363e73ee83880629dce697ed580"
  },
  {
    "url": "assets/js/335.49a80b62.js",
    "revision": "90aef9287f5d6d8305115db5c868c087"
  },
  {
    "url": "assets/js/336.514ea371.js",
    "revision": "3b2db6a22245986e79243827cd3e37a7"
  },
  {
    "url": "assets/js/337.c90f64ad.js",
    "revision": "405389e47c5e22fdff4b54e49379daaa"
  },
  {
    "url": "assets/js/338.1661afd1.js",
    "revision": "4686a270a99921ab0481b6dd09fa0ad9"
  },
  {
    "url": "assets/js/339.c6cf2df7.js",
    "revision": "f64ae6b93c4666a821b3314e9a91c98d"
  },
  {
    "url": "assets/js/34.cf2ad804.js",
    "revision": "c852e215c1a5e247c0fe23819c4859f1"
  },
  {
    "url": "assets/js/340.0fb34b81.js",
    "revision": "6b8707373b58816fcd7b23fd41b35509"
  },
  {
    "url": "assets/js/341.49d07d80.js",
    "revision": "419d0cbea4fa69d4db942d7c1625811e"
  },
  {
    "url": "assets/js/342.606f921c.js",
    "revision": "c4cb55383483c18b09f38ff82ce95188"
  },
  {
    "url": "assets/js/343.349c73b5.js",
    "revision": "fe419c1af283e4573fb1d2eec57e987c"
  },
  {
    "url": "assets/js/344.a9fe76c6.js",
    "revision": "b72c14544a522359ef4375b2af211351"
  },
  {
    "url": "assets/js/345.b5e28f34.js",
    "revision": "54b24467764dfd3d370062e66fc2c0cb"
  },
  {
    "url": "assets/js/346.2b012920.js",
    "revision": "d269cc7ef1d036bee4e582f8cd20e727"
  },
  {
    "url": "assets/js/347.3a6616d4.js",
    "revision": "0b901578b10377c8f0f845f16403d2e9"
  },
  {
    "url": "assets/js/348.6bed73f3.js",
    "revision": "552cdf7fb82aabac42ba10e2857deba4"
  },
  {
    "url": "assets/js/349.9ab55d14.js",
    "revision": "e834a8eb604cf51c21c95a8f8cd33986"
  },
  {
    "url": "assets/js/35.ef0f867d.js",
    "revision": "cfafb31aa541ec4caca057ed666edbfb"
  },
  {
    "url": "assets/js/350.b67aa36d.js",
    "revision": "b42454987044e9051f7de0a82acd1526"
  },
  {
    "url": "assets/js/351.53daf851.js",
    "revision": "c9d3b2979d0283436094ec43d3b5b103"
  },
  {
    "url": "assets/js/352.e10718fb.js",
    "revision": "2dc83e56c68eb4359e6c7ee493019688"
  },
  {
    "url": "assets/js/353.a02b126c.js",
    "revision": "38c7266d5a255aa1887dc9c12291eb49"
  },
  {
    "url": "assets/js/354.39436a9d.js",
    "revision": "f0e0943491e61c0fe4c0dce12d3ed682"
  },
  {
    "url": "assets/js/355.6317bbf5.js",
    "revision": "1d88985466b6e2eafeabd8f0879ed103"
  },
  {
    "url": "assets/js/356.82a2b81f.js",
    "revision": "cf0a66afd70b4ecf819c036cf18f7b13"
  },
  {
    "url": "assets/js/357.12461787.js",
    "revision": "cc1f683526e3049ffa5ce5247ae93ae2"
  },
  {
    "url": "assets/js/358.ce3018a5.js",
    "revision": "d9a1cf8a11ba5de2d19d50f7213d741c"
  },
  {
    "url": "assets/js/359.be7358d2.js",
    "revision": "b852197b5d1f23a20cc1f16e4a3d4753"
  },
  {
    "url": "assets/js/36.da893917.js",
    "revision": "ca8c80456fb05ae45ab63b42cdb5932a"
  },
  {
    "url": "assets/js/360.7602de03.js",
    "revision": "708dbf22dce6204689cc5853b904017d"
  },
  {
    "url": "assets/js/361.e42d4fba.js",
    "revision": "db1f7a579c1e920ad0f5f6fa5197742e"
  },
  {
    "url": "assets/js/362.03e8c021.js",
    "revision": "30f8503ece3520c7cb19d807d185daa0"
  },
  {
    "url": "assets/js/363.d26b9375.js",
    "revision": "064060d086bec8a17497d0eb13c427a3"
  },
  {
    "url": "assets/js/364.b582b188.js",
    "revision": "ad875cae588f6c0c38dea22e4cf7a8d9"
  },
  {
    "url": "assets/js/365.899cd94c.js",
    "revision": "4b61a99a11beaba65fa14c9eef40cc3c"
  },
  {
    "url": "assets/js/366.facbbec7.js",
    "revision": "585d1eaa97b4aa01d429c13c4522b377"
  },
  {
    "url": "assets/js/367.235d46f2.js",
    "revision": "77abc1d5158743032a03b9e56b6ba3a2"
  },
  {
    "url": "assets/js/368.2c681863.js",
    "revision": "7cb1786e39b12ff9ad2c0400dad76216"
  },
  {
    "url": "assets/js/369.d8b7cc46.js",
    "revision": "cce6cf7eddd50124a963858686156502"
  },
  {
    "url": "assets/js/37.f8d4d932.js",
    "revision": "f3c4096d8b88aa32187257a33eff27ef"
  },
  {
    "url": "assets/js/370.ba2561fc.js",
    "revision": "f5ea634e29f4ba74aa3b157843194c06"
  },
  {
    "url": "assets/js/371.291d58c6.js",
    "revision": "0a3408b851c6867d5f5bc6113cbcb6a0"
  },
  {
    "url": "assets/js/372.d8918846.js",
    "revision": "17fb0329ad14f86936cc049e73b472f7"
  },
  {
    "url": "assets/js/373.941c60bd.js",
    "revision": "5daccf4188592453a15779cc5fba7b3c"
  },
  {
    "url": "assets/js/374.d7d63844.js",
    "revision": "1600f771b719863ca30a97a69207b018"
  },
  {
    "url": "assets/js/375.4f553961.js",
    "revision": "0d3859b94ea9fa9d614c4e0719c972f8"
  },
  {
    "url": "assets/js/376.5d44edad.js",
    "revision": "8719ce02b3fa17b040be947649cf4093"
  },
  {
    "url": "assets/js/377.31308c9f.js",
    "revision": "0ae4155abcdafbdc012343b961f3d4ff"
  },
  {
    "url": "assets/js/378.c826f916.js",
    "revision": "b432e8e49167e07a10ff458c17f52d2b"
  },
  {
    "url": "assets/js/379.b9347aa4.js",
    "revision": "b90f0b46beb395bc13fd66c1a31d14a6"
  },
  {
    "url": "assets/js/38.6f91c283.js",
    "revision": "6a9c2c9477916190a64b82dde2bbd4f6"
  },
  {
    "url": "assets/js/380.ed643105.js",
    "revision": "08c409764942479e84e9907dd83b323f"
  },
  {
    "url": "assets/js/381.07a7f5fe.js",
    "revision": "5f41c847457e09ca4dadcfc042724f13"
  },
  {
    "url": "assets/js/382.c4e4db2f.js",
    "revision": "5bd8f0caa6c7158697d6f904b4085a03"
  },
  {
    "url": "assets/js/383.3eef9f8b.js",
    "revision": "61eb3a0e002e1beb027f6653a4ddb687"
  },
  {
    "url": "assets/js/384.fe43ef29.js",
    "revision": "535f51924e5b856fc4ea83378bc353a6"
  },
  {
    "url": "assets/js/385.de45f3dd.js",
    "revision": "b048b011b4596b8b2d8595cc105f803b"
  },
  {
    "url": "assets/js/386.f2567dd2.js",
    "revision": "86930482e1055f41bbe831935af74bda"
  },
  {
    "url": "assets/js/387.cff7b46f.js",
    "revision": "e7630d4f35d370996ac10f2bade5b912"
  },
  {
    "url": "assets/js/388.ea28b8e5.js",
    "revision": "2c1515d8c4b675b1d663ba0e4e1eed9a"
  },
  {
    "url": "assets/js/389.153d7193.js",
    "revision": "24ef5632f7cb8df6fbd252a76d180216"
  },
  {
    "url": "assets/js/39.8e9a3120.js",
    "revision": "c586c67b1f447fbf2c060bb7e073ca25"
  },
  {
    "url": "assets/js/390.1db5367a.js",
    "revision": "e5c52b005396708cc255f25c97068d15"
  },
  {
    "url": "assets/js/391.bcea98df.js",
    "revision": "7e2dd30b150988e32b50e6653bebf275"
  },
  {
    "url": "assets/js/392.90977dbc.js",
    "revision": "a68a38afb5dc26ae1f858b57f6055028"
  },
  {
    "url": "assets/js/393.cbd2d828.js",
    "revision": "abec9cbfb7806f8ab74022c8d9f740b4"
  },
  {
    "url": "assets/js/394.c47b46c5.js",
    "revision": "32787c660f72faeec5c468551adb6dad"
  },
  {
    "url": "assets/js/395.4d9451cc.js",
    "revision": "1228a25d4184448145d4e81c5e85e040"
  },
  {
    "url": "assets/js/396.34c6a44e.js",
    "revision": "97058733b95ac8423833edeead2ccb39"
  },
  {
    "url": "assets/js/397.5b4dd836.js",
    "revision": "51373f09739097ca9b28aadf9f83fcf7"
  },
  {
    "url": "assets/js/398.f4c9f07a.js",
    "revision": "e69115abc24b68c15b80c3616ce36b8a"
  },
  {
    "url": "assets/js/399.5e126f23.js",
    "revision": "327e62ac6a2b8a6cf81570ac7b51bcb4"
  },
  {
    "url": "assets/js/4.a85727f4.js",
    "revision": "bd5f15e972de8a60fa9da59c48ed9d00"
  },
  {
    "url": "assets/js/40.e0522198.js",
    "revision": "5c4d0b02bed6a166f36b23c3a02e6af5"
  },
  {
    "url": "assets/js/400.bb0fbb04.js",
    "revision": "67fe985a91b1b34d61790693e62440a4"
  },
  {
    "url": "assets/js/401.7239c3d9.js",
    "revision": "ce6260816b2e026a1df45110bd604c3e"
  },
  {
    "url": "assets/js/402.7c938fe4.js",
    "revision": "887718d63e46689aa64383ba7d3f0047"
  },
  {
    "url": "assets/js/403.bbcdf7d8.js",
    "revision": "0775d386110096f2064efd969568135b"
  },
  {
    "url": "assets/js/404.df15795a.js",
    "revision": "343955307ee981381fa4836a175a2f8f"
  },
  {
    "url": "assets/js/405.ee1e75fc.js",
    "revision": "a5c5bab507c135720233307592c1d0c0"
  },
  {
    "url": "assets/js/406.d5a2ed3e.js",
    "revision": "da534f0c65ca1b10a9bbecf0ebdf6ca9"
  },
  {
    "url": "assets/js/407.c935d117.js",
    "revision": "b35dc37a75bdcbdf41fa330de17af641"
  },
  {
    "url": "assets/js/408.80ac6962.js",
    "revision": "b2056b12d79cc151700b960ac83d0b54"
  },
  {
    "url": "assets/js/409.58769297.js",
    "revision": "eaff065d8d440c87c95906ebff56e387"
  },
  {
    "url": "assets/js/41.33d3a21b.js",
    "revision": "36602f5077e076e4a70cd5bd66172dd2"
  },
  {
    "url": "assets/js/410.aa424f81.js",
    "revision": "1e30b4b554fa9ecf533acd256ecabd71"
  },
  {
    "url": "assets/js/411.52a1598c.js",
    "revision": "296c3126934ffc2b37f37320f9c908bc"
  },
  {
    "url": "assets/js/42.a3f1fdfd.js",
    "revision": "e7325d3d67fcbf9fb1e19f53e7940e72"
  },
  {
    "url": "assets/js/43.a696ab14.js",
    "revision": "e68b01482856ccc402eae54b4fcd1ded"
  },
  {
    "url": "assets/js/44.9e5501cd.js",
    "revision": "1656a89784c4b1eab67956409b78d7ab"
  },
  {
    "url": "assets/js/45.4a4da04a.js",
    "revision": "43c2ee46d571a3cb16c220718659fe4b"
  },
  {
    "url": "assets/js/46.2974441b.js",
    "revision": "f7ff4c50c0150e61bbdc8c0ceb42a979"
  },
  {
    "url": "assets/js/47.72bace1a.js",
    "revision": "d6f6b768c80597a44a1f36fcb7e23405"
  },
  {
    "url": "assets/js/48.fbf80316.js",
    "revision": "c75fbb3ba7a8f4d458141f6b998d9e26"
  },
  {
    "url": "assets/js/49.c96dfbc4.js",
    "revision": "bec945004f1d8b47bdfc0338ac1cbaa5"
  },
  {
    "url": "assets/js/5.34a45051.js",
    "revision": "bd7b1d4aba8586b8cd2f07e9f38e5abe"
  },
  {
    "url": "assets/js/50.802fa0da.js",
    "revision": "8f588d2aa30f7ef25b0c8ddec37d49e6"
  },
  {
    "url": "assets/js/51.a55d3226.js",
    "revision": "32de2f08a60045575d741ffe34ef2cd2"
  },
  {
    "url": "assets/js/52.c5a8c210.js",
    "revision": "76230a41b64bb98d9418786166492841"
  },
  {
    "url": "assets/js/53.2db89cf0.js",
    "revision": "7bf5a51ecc13de7aafcff4930eb270fa"
  },
  {
    "url": "assets/js/54.a4f594d9.js",
    "revision": "74aba8d33e366be11e1655a17601ae52"
  },
  {
    "url": "assets/js/55.b55b0083.js",
    "revision": "c0e1cbc70776e6ee938d7fb7f632912b"
  },
  {
    "url": "assets/js/56.ec2a1861.js",
    "revision": "fdc5ebd88f26b973d85a906b2399e11f"
  },
  {
    "url": "assets/js/57.6e75907b.js",
    "revision": "64d80206d264b5823dbf53da20eb584f"
  },
  {
    "url": "assets/js/58.b19c269c.js",
    "revision": "74aa105699489e16a0f426e60cb2d7e2"
  },
  {
    "url": "assets/js/59.4d15ff31.js",
    "revision": "db9f75545d01643220526b131bc3d2ba"
  },
  {
    "url": "assets/js/60.dc4b605a.js",
    "revision": "656d2cbdcef305f25f45649e2ed9dd60"
  },
  {
    "url": "assets/js/61.dc2a5dd8.js",
    "revision": "f1a5db1096fb6dac0109df44b5f104a2"
  },
  {
    "url": "assets/js/62.96c2c9a1.js",
    "revision": "d3dbe9e2adcacb306cc5a040fdfff299"
  },
  {
    "url": "assets/js/63.22876f0b.js",
    "revision": "f129e55d2a9ead3839ecff01a1c755e7"
  },
  {
    "url": "assets/js/64.352bc1d0.js",
    "revision": "85cd22860406be04511991c6219539d7"
  },
  {
    "url": "assets/js/65.43a2f558.js",
    "revision": "b28039d7cfe9ec2debd40ef12cc60f11"
  },
  {
    "url": "assets/js/66.54395ecf.js",
    "revision": "9aeca59c4321e472c4ac67bf8ae0b957"
  },
  {
    "url": "assets/js/67.7b18e8ba.js",
    "revision": "58ee493b63ee4a1b48a14d95d36e5e47"
  },
  {
    "url": "assets/js/68.0c53bc1f.js",
    "revision": "8999b1fda44fbd0467ab1276decbd56f"
  },
  {
    "url": "assets/js/69.0629d78b.js",
    "revision": "fb16448ea7a7ec365726ad8fd78f9674"
  },
  {
    "url": "assets/js/70.9b0729cb.js",
    "revision": "f483a7e5b84b23fec470aa9485abe580"
  },
  {
    "url": "assets/js/71.4ef49233.js",
    "revision": "4b62af1393a5c3fcfc405d5f64a53599"
  },
  {
    "url": "assets/js/72.b4427d96.js",
    "revision": "6000f13b743ee4c40237def02ffa30e9"
  },
  {
    "url": "assets/js/73.5246261c.js",
    "revision": "fdf97dc8d4e9e48da8aa66e3dca7b891"
  },
  {
    "url": "assets/js/74.eb3be7cf.js",
    "revision": "a6d7629b90ebadf169ce2bc92162d9cb"
  },
  {
    "url": "assets/js/75.3ae6a6e1.js",
    "revision": "0d5e7e720147ba7c882c9991aaa54fdd"
  },
  {
    "url": "assets/js/76.e96dd6f4.js",
    "revision": "b2ac26ad69b656c916a4f9e01a0d5c10"
  },
  {
    "url": "assets/js/77.593433bd.js",
    "revision": "dc4f318b33467d52305bbcdca91d29e2"
  },
  {
    "url": "assets/js/78.56e62e5e.js",
    "revision": "4241147744bb1633ba7ba8b4d2352c20"
  },
  {
    "url": "assets/js/79.3851e858.js",
    "revision": "8f7cbbc0d9ca9ca86e8bce48ec1b6a88"
  },
  {
    "url": "assets/js/8.084d3998.js",
    "revision": "1b4aeaef7517342317360e0307bbb580"
  },
  {
    "url": "assets/js/80.78e2fa96.js",
    "revision": "2c950579f90e271a2d9a337921a77ef6"
  },
  {
    "url": "assets/js/81.7c54b612.js",
    "revision": "cf0d97dd7f1b016c8fef5bfc7b8537c6"
  },
  {
    "url": "assets/js/82.7ec33ef2.js",
    "revision": "c87984f7b97f5ff7b53a6124c19f5c4f"
  },
  {
    "url": "assets/js/83.52d10d46.js",
    "revision": "4c023765d3fc451c5c8263adf1b87258"
  },
  {
    "url": "assets/js/84.25042566.js",
    "revision": "20dfb90362b868f532042d5078a79942"
  },
  {
    "url": "assets/js/85.cbf2b3af.js",
    "revision": "a4f20220cd026bdbdcca7040b3ba36f4"
  },
  {
    "url": "assets/js/86.c2097731.js",
    "revision": "8e5cfeb847ce2283c3e82f81aeeffdcb"
  },
  {
    "url": "assets/js/87.0b2a4574.js",
    "revision": "1803a0d2a3451949ca0dd16a319d3459"
  },
  {
    "url": "assets/js/88.225c0a88.js",
    "revision": "df3f9e8578755e875868158f2d870630"
  },
  {
    "url": "assets/js/89.f6d67937.js",
    "revision": "e4cb4e184c94757802af78cb4cdabe99"
  },
  {
    "url": "assets/js/9.8f891d21.js",
    "revision": "5a4af0ffcbdd1ce0a59e67914c92f5ec"
  },
  {
    "url": "assets/js/90.cff14b5e.js",
    "revision": "235b00d1b4abbe282080ef79ba172713"
  },
  {
    "url": "assets/js/91.d9720dcf.js",
    "revision": "e19b4e0a7cf5be4291f6a4de032c68b2"
  },
  {
    "url": "assets/js/92.59881622.js",
    "revision": "e02f7f2cbdcba365b4b58ab6a61392d0"
  },
  {
    "url": "assets/js/93.2b8a6f8c.js",
    "revision": "4bae8d96d272d75668125451322ee072"
  },
  {
    "url": "assets/js/94.d71ddf5f.js",
    "revision": "a3b6fdfec78e35c36e13f3788c1855e9"
  },
  {
    "url": "assets/js/95.b85ef31d.js",
    "revision": "1002ffe33af6bdf6e5dd97096dc53d81"
  },
  {
    "url": "assets/js/96.d50a233d.js",
    "revision": "a1ee85fbe1bb82ea64607f82f8a60993"
  },
  {
    "url": "assets/js/97.554ada3c.js",
    "revision": "62fbc07752678e822b70a7ff00a43dcb"
  },
  {
    "url": "assets/js/98.ed82f3e5.js",
    "revision": "c011a9193a04efdab8eb7fd6f487ba69"
  },
  {
    "url": "assets/js/99.41795172.js",
    "revision": "cde0c262d08699de8d55228ac3ddddfc"
  },
  {
    "url": "assets/js/app.ca449244.js",
    "revision": "c437504952d1322255aad5d62e4d8f76"
  },
  {
    "url": "assets/js/vendors~docsearch.a4198619.js",
    "revision": "d66481b8b9070e66a0d61d98e5f0db85"
  },
  {
    "url": "index.html",
    "revision": "a4a30ab82bb8982b8fa46320a6bd2ad8"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "a5f0fe8374225b095d3ab1efcd6e388e"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "308c8a386f9ccbd3b7dda5b2dd354eac"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "c7aafb7029f593b72803ea043722231a"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "09435ee29c610e5acb574c889690f5fc"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "5c023b8d9a5ce9d08ba4e3760fe60616"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "865b66e6b0da9dca4a72f26d1d58bca0"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "4b2923f607456e35a6b576f23853992c"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "6f07bb31f7fd93b2381e9326912441de"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0b476e3572aa4e0b2958493972c1c56f"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "b8ecb9bc8c93903ede4938630231e7db"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "46f9ac4b883dd4668636305aa3960923"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "375df1bce447cc8ed868886ec2e49299"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "614c17496f2421d138718eb378532b8c"
  },
  {
    "url": "master/api/index.html",
    "revision": "ba23f1d6471eeb8a326fb8050acc0bb1"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "083cbfb109cadf48b322939854f9bd92"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "5abe34c1d16edd6b0f7a5600bae68862"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "dd9a8cd22af94e17499dc59b2988ca41"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "bbc600143bb5bc3d3862f4d479643ebd"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "79998b7f803342913fe4f89912fedd3e"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "e65b9dbb5b2b7f6c0b5158a48d32fb4a"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "7ecd789664b877d095f310e12f76b983"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "887b9f21591756ef80acdc2bb4c2880b"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "fe5c091c639de9553ef3604bceda55a1"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "2ac8a7652fe32773e1def536ac8dd7a2"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "c21b4f106ff875481d54749fc0d248c4"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "81b848997c2f7edaeb690c9f7a30114e"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "a7c0405e5668076057ca0af0f621cb61"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "ef79a4cb36469a9a63eb98d47a282b9e"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "1e5ec1d1c1bf463ddcc31c6480989498"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "38d921d4e189fbfe595954985a8bebf9"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "59ce56c4b3de285b9c2a19945c684f5e"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "08f4be4d13539f5a18da620c594523d8"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "e9d4f79f753ad04f9a32ff3484d2df00"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "8cb3c1c47106e466a4e6dff4acd1c5bc"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "bb7115a4f980ee1726b27c163b3080e4"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "fc6011c210da58621af74c181a2dd069"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "24296b4956453cdc1e224d2e1c102fc2"
  },
  {
    "url": "master/packages/index.html",
    "revision": "10ef65378b711e35365ecf16df00580a"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "41b168f8a775fa98b9aaeb5ddb40f2de"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "b75ca2b05be862c417c570658d855744"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "553117b103104e4c688085543d828723"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "e46572cb286df7c7b616bf5d0e8bd099"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "4f7e8877b1c100fad156e9b774dc6061"
  },
  {
    "url": "master/packages/views.html",
    "revision": "66fc215bbea876b6b5cbb999832a9736"
  },
  {
    "url": "master/performance/index.html",
    "revision": "10242959c18a36d0144075d6d16c6620"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "e7fe236c9c9675e650e8f1ef8617a374"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "24ddff496f05955822421a8863349044"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "182b006dac7e0e8128feabc491b4ea29"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "118eb90d05fbb8477d72c6cd695a558e"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "6a7ca8ef034229d2ecbdd14deee6ed64"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "e45c2506dc43d1cf8ba1108c350f84fa"
  },
  {
    "url": "master/themes/index.html",
    "revision": "4b5c1b88840d8651ff6914bd4ff61d15"
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

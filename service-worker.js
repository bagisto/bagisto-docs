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
    "revision": "c61211a1428a57f9532298911f331271"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "2fc8db5b2a170248b15431a2bcc2bac3"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "62fe504814d26bd50c4b05fe7600a0b7"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "680176548777cae4ba8cab00d0f241d8"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "7ff2b9313943dbf3589a96580920017f"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "7c0997d7d290489e925fdc040d55689a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "a8c7cf4f5c5e1107b1c3acb693b55dca"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "37b3cf318c452d657106d337b6d145de"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "f63cef5ed0c82f4383b9687a136b27ea"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "811c61eeaa8fa15f264032ed5ab416b8"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "aedb05b8a0f5ce57b96819d3f28eece6"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "3ea0ce9bcc5dd60f762b9b482148aa3e"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "c645bd8acb2f9ce096022c977eacf4f7"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "3946892fedfae7686b87472a22b6bca2"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "a4678f6a37e842c9afa3a0896fa247b6"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "2243cdb1eef84bb994e9c00352429a44"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "19eae3c4c71062ff5fb5a8508c464f78"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "47a553448e4c4c984c145e43c38ee409"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "7334baea137789b772ecfc805cf228e7"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "630b4861dec6fb2c9e55f602e8736f77"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "fa6641248e1ed33ea082f8fd72704e48"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "91c73d5a73067be22597ddd93a47418b"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "98ad9dad2ba333b81e732ede7620fb69"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "cd5a5ffa6670e2ccee248e619a45a553"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "c1e37f9b3b74322a7c1690668a353112"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "8f7e983e2dc4f1ff9e91573baf7db54f"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "0bada0a75a2abd1200c01192f9417c1d"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "2a4e833c8c259afb5cb12bec2e77c03e"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "ea884f462b2a344124eae97c7dbff5b8"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "08d4032331e8affc7323626cf8a62914"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "91cd47eec48986918b432710594788e6"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "981e23839995a6f4aff08c6dcd94f171"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "73b1116aeb74d65dd3ebbe20ce387c02"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "05fb165acd0f5d605c108465b20a015f"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "967262bdb1e74c0e7fdf264ad8b6c39f"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "4c231ac3a386841d90c2b79984ec3701"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "5b04253e5bfcdf7553ad56b88ae48103"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "a7ad0fa0dbc38e7446b811efcfa1618d"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "2d352e92d3ed0c56d85be7ac912ff978"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "3ab601bf2f6bddc5fd6e3b0597565af0"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "623e6c5544c6b9902bc08b5ed9a7872d"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "5c52ceafd9801ba73a643445c111eb95"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "6f8a3639cbe5b6f74b3f233c705de1b1"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "6ab2f0c1f99d7255918c3b717bb256c9"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "d3babee0e288f4b2dc00e56c9f780ff7"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "75ebc5e619310b2cc18e98da27709bee"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "8b1d33f350183ab6bead9df1b8beb3ef"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "ebd89d41bd434bfba50a9fe8cdbb30ba"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "0d323ccb9ba3ebae20e38ab9e1cb02d1"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "07fc40dc22c4ebe555624ed442300c65"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "ea5ca6ba1e9c0bf42e9c989d200e2c76"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "0d980287c9c9daef673f90233d127c2e"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e83902c08ba8c84b2b8a629d8cbced45"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "6d85e4e0f25ac532043c06aecdab57ad"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4170db9313526ab35fea63bb1afb0640"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "956d0935ab6d70ff952dccce3cf8585e"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d2136c7eed33ed6193e7c0c5312fc4ad"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "dde1a6e17f27637292d8fb6cc06dc54f"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "f0156f2261880eb15974bbf2dc143ae4"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "4e7a6f280c7c9e852303df52f6c52fd2"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "a846cfffc39a133983bd070803d36302"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "29fdd666ec27b1020377179971eb3222"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "a4c2ea6ee27a16d314c29315a4ea2c2f"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "dd5dfa4a6b3d19ea0de68cfbd28670f2"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "cdf8822e8c3312bb3501a84e9aecb1ae"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "adc72020c1765663450cf3cc013c2930"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "4687dac0814d4df95d8cd396f03f6d7f"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "d5eb702e8c0cd8a1447167fa90b4c670"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ccf410203e293d9b3ceafa22cf801538"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "a3eeb67d3dae83c1cccc7bc11c4bcc49"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "84bdd501faf63bfb432569fb407dc706"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "98e7b8fe367fa41615e57dbe36d8765e"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "944d9570fb97739436bfc853a652de1f"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "fd0189b5448d1f131d95e7009fcfd64c"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "573006686fd714a695c33f0650a417c9"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "00c151326fc8aecc9c383dcebaee1a5a"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "672c5548f0a637b428bfe32174831229"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "411ff45f4a3b5c42686cdaf05d01c700"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "92de1ba048c172183ecda934b734cd37"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "ca48d1a7e7a07237c960a6798d5e3e26"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "3e7b3fec8271381f0dcb5fd671dc283d"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "dd9ff2ef52cc14b160057bc9f2a93a64"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "e6d9faacd3648e787653e9e732e76e2b"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "6bfc48bb189145e8fbdaed467491f1e0"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "4c94c5ede66f4680a8801b25082b8727"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "2bea875dba556ed7ac3e9b762842bf53"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "3ec783c6c4eeb56c4a471056dedaa93b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "500e337c1ee4dd6c6acadc1b08b65647"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "c48bdc655fc5eeb48a129541f8fca737"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "fdfc276d23e61cb06d6e1f2e4cba9aeb"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "3e7117a3ac2de4eaeff4706027759235"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "bb23a57248a0fbed12b9e60474288da5"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "bd82355c6a19368c82709815ab0702ac"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "c1597752da8233109fffc28ab9adcb0c"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "e784f5aec0c4fd7e828cf22cda1966be"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "58aedc2ab0c8d8400e80816298c59fb0"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "c6adf4b1997381918cd71d226878c7e7"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "ad70a059250eba88f27de050b1528dc2"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "64dc4944caedd4c1c50ee4174c41f5b5"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "1136011ed6accb95bacbfce1b6196c5c"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "085df17f1fadd533e9645959e5d3bb66"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "6b1aa534ae22fbfc5a55c572ea72aa77"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "c02acc0f5acdba13650df4c79d6bf1eb"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "6a3016e8640e69bc53f773659b32e6b1"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "c10f152623f8c1bbfc0de41223f220f9"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "77e8cd3adaa8ca80238cad2f9aec10cc"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "59e4b72c96a37755cfed5c17ba812fdf"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "b020eecc6d8133294329cb74b36d4539"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "a4831999edaa3af1daeb4ee884e7b951"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "8d9cea6dbc9e2b5a67326112372c0699"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "6526683b8dd22a45b7111f2808a46b41"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b604c58c4d56d8e2480780a359977f6f"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "329ebc04a28688a62c568636f9c2e32a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f9f45d1f3127765444c95d35c2f76de3"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "24e17fb359089198b772ca6162e02c8e"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "a3e7162f33358e5a702903243f0ef489"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "d83077275254d83fb6db726a6ff49681"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "da7115f07771cd4f6b9c272e563aab65"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "951efaa70328182640ac9822cf58a82b"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "85bdd25aadca94a613139583210a94d3"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "d4a2e370f6655f168733b96490366976"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "47db214340f89b00001ec3d9d61d987f"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "61309f452710eb160695d3677d8de074"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0240b4588a9d3397c509523f7f5b6abd"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "38c09b0e4c556ce57aa11c8146ffee3b"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "cc4321db8c6f151b57c17199f65aa0b1"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "c8121bc9ff9fd55008b80431f6225e06"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "0b082de53138b963d5a68403e6bdc94a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "f8e6720d31f5f50dd686b188571e72f4"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "9f9102089d8f9b3750fb84c68de806c5"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "486de8ee2051c608fd16ccd9489d8c25"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "0e1cd1a53511b885ae18298755b2aaac"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "8ec841010ac92450348f72f78fd17373"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "df02fa916d193fabee0ec97e85493923"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "701b2b18531af10738fa51acaac1b108"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "ebfa3514c1b23901e780057aefe95352"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "53f447fab71697e0b0e9ffaebadb5897"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "7c2f5119f10e70023678e64c83080d4b"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "40f9c063d758cce1279602831fe21f24"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "7dd6cb77f730e9b1e612577fbb82c68c"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "89d90383b81c5f7fb5767c4ea608977d"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "a594a1f9f1b227601146059fd6f07173"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "7529fedcd44d4f7f06b5180acade808e"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "940bdee9ff1a429f88f3e91b4117ff0d"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "7ca7f58fab93a4e8ca355841038387b9"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "28aca1676e06b284bb13020e95ece22c"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "8d8cb6d03ec015af10af915a9a95fdab"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "4ef28eb161f6e300af24d10fb6f4fe21"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "5e5abedf125b020edf0bd2702c3b2897"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "c9583495a4deb6f6cfb8283879b676b9"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "028a33c0c318d830d94ed15135dc21ff"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "44e9d520c82ac020bbfba2988c331f4f"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "b3aea4dd0d0b44308e857cbb72b45bd3"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "56b1e1bc06f1aca2a670ef5d3dd45bc1"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "1f578d9dde0900d43b5d70e6c71fcdde"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "0d03437941068c9527a5696952855691"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "7e40a4f86f356d6a28237d3fc1623963"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "c3f3b7a3980e2deae4f1980574b3fc27"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "c8c05a47da8fbe55cd07657755ee6b94"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "48444fd61c66bf78242905e732981496"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "159d9a436e48f8dfba5e4c3fcc3bde86"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "83f093a3fc6cf195effe52334b3d0d80"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "0b09d5bb5039400c393422d63b3ae033"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "c48c55f9976b47fdcf628e54f323f9ee"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "e8e0989c15747b6bc7d120dba5b30e7c"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "b176f37eaac12cbb7bb50e38919b3829"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "298c6b8765f67327d1a7e2fa9f8cfe63"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "a742943fcce31609dede038359fd752f"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "0dc4464627ad850495b2ab4e58eab6c5"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "904e129db95ce1947493516becbc4ff4"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "4917c4554cdd35612ebf043dc7015533"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "590c096edaff778bf2236ca7d3c8a2fc"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "8c4c59eed6cde40306118147eb24d146"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "df87cf8ea2b2a4a2626eb56e85fae32e"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "648bcc60c3a0867ddc4e8ddab983771c"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "e6026c4aa1ef2e44452131c875cd8638"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "035ab5de6b82048dca7682fd625d668d"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "10e97b6a76b126c33ee20fcaa8749c0a"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "91da79f14eac12d3ed3e0b1d091067d9"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "7868d26c107b489b8dd3d2cfc59d0c85"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "7a6cabf52ab23d8277de4d91fe0ba84d"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "f5c50050079ea5880e4aea5d6d995469"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "1ef182d169b7bdc74ffe9ca6740f5722"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "4c4f86c3da20a4fd554c5b1cf4265bc7"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "5e32371ed571bbbfdc197bab4206aa33"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "4397f82ae9d133e64123beda8bc4eb12"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "aab556ca99ebbc9787ab1178529f1226"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "acd3a02aa0b8c445effc8face45a2124"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "08306c2c728f39f9ea97b26809849cb1"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "d7f7bd849699445e827d0caf8f65f978"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "a8b8932fe8c9e188c60857c8e0fbac4c"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "ac4fd81ebe41bbeb6c50c4083229aa59"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "fb77c1687478f48fb3d6e3943f5f14d1"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "ff4b82cc8af91592fe65799743d90f04"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "e6508021c339699525c10b28e5c0833b"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "6d4dd7cfb7dd7b2d0a0f49a6d4cbb5be"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "6f1580866fa5ef3bbebe74f7139ae72b"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "301b0fb72e552fb6b22bef9d1479c1f7"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "f26b3bd19bc471ce0df7b38a2cf09b2d"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "1daa5c16dd0b321d3eb86ee543d66788"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "7ee4f33fcae1bf1e4b6fe7dab355d763"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "f5b1e1835a831176e844e36f5a43da70"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "bf3f1908fe48fdccecd2d1956d15d896"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "bd8142e02714c58a466c5e6eccca1af9"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "7a2362dfa2b5086b1c5f158ccc54f907"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "448ff350d49b602edebd30c9097eaad0"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "6d811797a6196cde9aeae059d6243051"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "3ac2e2937978c6cafcdb4752b6743d0b"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "e538b6c497dd010215d579a435539771"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "127c3f7c2ff96ebde637682c5522bbd0"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "5ab36f8eab28455a742051447cefe9e8"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "ae80f1719f12fa8da7ecbc5d95f3684c"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "89aa5873c9c1c7cd4f69231ac3d4e565"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "6aead17d857c820f49025fed5adaad82"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "e9399836fcfc072d5d9ccde6d328f0e7"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "d7e20d2ad20dad57cb706f5a6a3de5fd"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "a3e6b37bd1b936a94656c80571b7bbb3"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "70b53eded0ba6334558580a42fded165"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "0f665f85c3df26dc3e12a7009af22dcc"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "90dddba96cd35061a6ef02e25e048b1d"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "8fdfed99ed78ff2b644631ef0a54ce48"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "af1e0f0075f108d3e7464d9c97ce41cd"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "65e8457f89b2192816399d13d4185c48"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "b2d724d96eb0548dd6ea52be3f2d3da4"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "bd42ba250066694a175c78233e9d17b3"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "c4ae4479f4e84474d82a23a0a7bd226f"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "fb5f497ef05272553165f9886915fc31"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "66e4f689230b5b1fb90ea59bc002295f"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "c5435ea85507a0d0cd27b151ec55f5a7"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "2f75dd75547efec5b0d96cd3ed066287"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "5d239f00dc958ab663e723a255bb70a1"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "70550431ff0c37418ca48e1f31209d06"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "13c5cb0bcdca8be6953f0e15705d8afc"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "280ab7a87534846e8937733ed363fd80"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "d156898d9674d513e0a593362d89da0c"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "598c6dc64cf666a749e4f6a9c4c43525"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "0ac756ea5cc3e190819fabad12d6cab3"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "526be81042a9765966121e03a311159a"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "8606503ef39ec862ba7dd8f752f50eff"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "241b3308c03eb12d5828759061d524a2"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "b991a0c4ee7246a4c7aaf721bc8adf53"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "b3c30c2c4fda0117db99a6ec4f1176c1"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "1902af63f94feb58436a16b01307f345"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0401dd419ccaa2ce6c1f9f9760aac5b5"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "03873437fcf637afcfcf0f4c722411c0"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "ca706a8019bfd0563f0254fe90b811f7"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "c109388b60cecec6164d60721e290390"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "09298a1fe1d15971fc2d0fc10ec01edd"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "0874ad7d79722f646185421fe73c4d40"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "29770e45cbb9b5bed8cb546f5b42f7e7"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "dfd9de77fc2517cdc5629772518360e8"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "33760eea16e8bc8b2bdd6dd9431103d7"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "8f1336106a0a0c4b835b07530f022e55"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "4786b43680316183604142a1ffdb2582"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "6d6ab1db061e720b4c120dd4b498e3fb"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "53089cd803cac3a9e7f7b6dbd105f086"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "f77be4a349270294aaaa63e7cfcdb6fa"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "dc979a9859fe97902baa08464094eb8c"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "cda09dbf4898093a302a9ddac5bbd74c"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "3871f00ec4c14ef7e16a929f543d8b34"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "32d432386db269cba0e4452f4af58f60"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "eea0e495e9eefa19abf162280e5301ff"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "7145033ea2654e327da2317bf4a5b2ca"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "53e3c93c787955cf1ae83e578abbcccc"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "7f15172e1d36f9ba669f6bb89f463793"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "8cce909b08af021b9126c06a146e5d1e"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "a027e3e56858c75e01460b179efcab3a"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "1e6a556e89149d0542b7ef6b1baa6451"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "5801a09226b44d9173b92364ec6d243a"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "ba76e4a4398f43eccf1d498567618f7b"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "5e6808bcbdcd9de320f71b54fc613310"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "d447739e8f9c20f34e1e7398f5a42d62"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "141654cc5777aa6cc35d2906a0c1492e"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "964f6fab775ec1e524cab29ce3793f2b"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "bacba31b569291d502410d7fb0de05dd"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "a63afb5f7cfa337a9e33ebcf6a8f6bc0"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "8ee420be1465bd5644541f1fe9012d00"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "1d6a0b2ddd27e1612dd42605d27119a7"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "932fdd68043b3b35628bd6c4f2c6e2b9"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "3207528ccdac95c211e32ed9c6e0976d"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "45e6db1bc6aba4e8483fc63731e18a15"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "12ac841871e5e82f3779abbdffd8c641"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "7ae1fc9edcac2c42a11a2e21e1671abd"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "524be15a5d494f86845e5bbf42b4b810"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "84f351d4735049c0f8bad98b345ec664"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "3299bd7d5d89c689de3689ef7d66f681"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "86661aadf0b4bbdfb56647b7320e58bf"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "263b10872cc3006775dc2b0fe087fffe"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "db00106f9f49ee36739f8c70dbacbea6"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "0002209769ff976de960c0b19240232c"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "58bc9c3768cbbe54d549bfd43620a839"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "020c55d227e087f9e711e339bdd2e645"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "25cc45aa38a220fb4be90b38a6d2cee2"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "cf81e27d26e2f138b2d1b41fb6b97f3a"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "7149a7f09105b548f97857e31983ba57"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "597135588b1437bbd1e41513646458cf"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "3cd5fa2259f81018f23f865eb0bb40d4"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "82a72968620b4f20fd83dd6a405f9722"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "393050305e3eb841e7a1dd2e22a238f6"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "ef6c79816c9b86baa35ec1b79d68ee20"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "9b83415439cd0531f25bd8bc975bd417"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "52f2ea849d30b4160a350ec5a3c5120d"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "712d3a025e8e0f2dc7ce5bc473dfb301"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "4ad66ff531e091a1712784d1177fe241"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "4a9aaa34621d8daeceece12087d0bc29"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "32d71dbf8ec589d22b43d51b712d7c7e"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "a5e005cd148a41f9ee0d36bef6376eb9"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "9e762172ac81667307ced51f8ab5c489"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "95d1ea0d1fcd1f268ed4a5312d072c5a"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "bb46c11bba41371a25256b6ded1628ac"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "7abb2860c2336e6522dded5c3e895f79"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "d176167e7ce28a779bd470854f253f7c"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "f9d81169e976ac449a51426ffcf69d86"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "8a5a1e53d92aeac3cc1cf2337923b6a6"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "a4d324a57f203acaf3ca837f11991d2f"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "8f710ef29c5e1e469e10c1b73ed538f7"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "a39e2ccac2b1af953475bd7ae03187bf"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "bb04a8f241d873aeea037819013d360a"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "8a2fb2fc73c47205418736fe1b47de5f"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "fe14dc82834345ed31d2ba33027160fa"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "693e055ddf5084f1d286a67ed43ffd53"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "9cb374858958bb65d6fa86acf429051d"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "88a035cb734fdae9088ce48c8262f123"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "3c85158fc5298c0dd7a8d24d8b3ad293"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "e971dbf8a79a387b6bb9da6a8858289b"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "de8a22c51a6cfb695dc338b12b302355"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "e008323604534bcb30ea7962edf2dfcd"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "04754b94f3193b22fc752eea4223df66"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "661a2cf11d4014009998a86280f8cd9c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "35c625e0629d9819d9a79f44bc5668cd"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "cdd6163a81fcc22c596164e4ce548ec5"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "0a2f43191b44ec493b3d1a13016a269d"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "e3e25346f50c5edea903d7ead3f3821c"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "dd2252a2807239245e77169cf83bc5d6"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "5d1be1b27941e00b8e0d193373842d73"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "742f248e9a8a5fa2d6bdcf2f4aa07410"
  },
  {
    "url": "404.html",
    "revision": "e9426bfd1f3f1b2e933e044164f7dc78"
  },
  {
    "url": "assets/css/0.styles.3d1d61bc.css",
    "revision": "baf1cc885fa1c46377c9ed839e36ea27"
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
    "url": "assets/js/1.b40da5da.js",
    "revision": "723dd1c5fe51afbb6e2c53670cdf1e72"
  },
  {
    "url": "assets/js/10.aaa781ff.js",
    "revision": "31b116419463b0ac2d91cf552bd50ba3"
  },
  {
    "url": "assets/js/100.e3347408.js",
    "revision": "153abc6aa4a7fd81d407624acd6202a5"
  },
  {
    "url": "assets/js/101.a819f732.js",
    "revision": "a7f07f4d3f5b57c0fb2eb72c2290f25c"
  },
  {
    "url": "assets/js/102.7a836c03.js",
    "revision": "16c98d407669b85ba697e5483d0fb5b5"
  },
  {
    "url": "assets/js/103.dd9ce382.js",
    "revision": "ad76c237394e8bd847bd78b0e06082c9"
  },
  {
    "url": "assets/js/104.8dae23b4.js",
    "revision": "629835dd4dd5b7f3bf08c821ad256a23"
  },
  {
    "url": "assets/js/105.9a125139.js",
    "revision": "56fb9a22244346dc512760923c6d079c"
  },
  {
    "url": "assets/js/106.6b8bfaca.js",
    "revision": "08dec7b0e69f4aa7d810f6dd44deab52"
  },
  {
    "url": "assets/js/107.1d197d03.js",
    "revision": "8d9e4f4c00da607d039968bfa5aede92"
  },
  {
    "url": "assets/js/108.c229c336.js",
    "revision": "5216bdbc93aa5f5b6fde55229e4aa349"
  },
  {
    "url": "assets/js/109.794b68d9.js",
    "revision": "90a6189a7a0ca022b6cb69e5df4933ad"
  },
  {
    "url": "assets/js/11.272c3840.js",
    "revision": "656771636aa670a3223305dafa895cba"
  },
  {
    "url": "assets/js/110.1119b585.js",
    "revision": "715383996623a28d80be3311eff76f21"
  },
  {
    "url": "assets/js/111.bafceccf.js",
    "revision": "7c99b552c3a4ca48fd8a4d22783a56ed"
  },
  {
    "url": "assets/js/112.7afc4672.js",
    "revision": "48f20d8f7f10d10923159666c99de64d"
  },
  {
    "url": "assets/js/113.db0f575e.js",
    "revision": "e3bafa1b59fb3898a259db3af19d2dd1"
  },
  {
    "url": "assets/js/114.995a3868.js",
    "revision": "9180915d888ade174f45ad32342654e6"
  },
  {
    "url": "assets/js/115.032d9350.js",
    "revision": "ea72f03d9aceee807ecef3f74e475c89"
  },
  {
    "url": "assets/js/116.b9ef448d.js",
    "revision": "7457dcee321fb1aa5ecbaece05d02278"
  },
  {
    "url": "assets/js/117.b45ce2b3.js",
    "revision": "bc337a58cbe4d3c01e404b6f3b97c7dc"
  },
  {
    "url": "assets/js/118.dc9b6879.js",
    "revision": "80ff7a8e1cfb8e689e98e63dcb449586"
  },
  {
    "url": "assets/js/119.aaa5b1cb.js",
    "revision": "c6912a79d2d5476bdcb17d2896763d09"
  },
  {
    "url": "assets/js/12.2613f6fc.js",
    "revision": "6036d57560b3a6353820df27fa72d35a"
  },
  {
    "url": "assets/js/120.7ced444e.js",
    "revision": "6aade14f450f2a66a1f6c0a3c262ac55"
  },
  {
    "url": "assets/js/121.8ca729f1.js",
    "revision": "35593c60d21c0d5cda260858ab0520ff"
  },
  {
    "url": "assets/js/122.8efe6431.js",
    "revision": "fb58664b9beb55bf7c48cb6e708695c7"
  },
  {
    "url": "assets/js/123.5d8fe972.js",
    "revision": "f1ab43decea64e65fe27d205d8c7c77b"
  },
  {
    "url": "assets/js/124.39b0f6e6.js",
    "revision": "e08ed7d1a9b4cfb5d6202c484d8d717c"
  },
  {
    "url": "assets/js/125.2acc1f4f.js",
    "revision": "3aca4a8b3a3a27c9ac66eab00a4c57de"
  },
  {
    "url": "assets/js/126.eaa46e49.js",
    "revision": "fa5f3d9e804b51e8e25b078af12db767"
  },
  {
    "url": "assets/js/127.4125c808.js",
    "revision": "1bc10fd59568d284bdb2de1388b09d9c"
  },
  {
    "url": "assets/js/128.a613a421.js",
    "revision": "6eecf1900b92565d5054865fd57d01c1"
  },
  {
    "url": "assets/js/129.f8ae5884.js",
    "revision": "a506007cd1b07b1d75611705cc269b82"
  },
  {
    "url": "assets/js/13.0b88ecc1.js",
    "revision": "ee2f0a8f37f4d6193dd07581a7ae58d6"
  },
  {
    "url": "assets/js/130.301052ed.js",
    "revision": "2f4c5dafc857bc6bb04fb66e9fd4cbce"
  },
  {
    "url": "assets/js/131.f51d90c5.js",
    "revision": "82a13db4a631a52dcf5edd965055eb44"
  },
  {
    "url": "assets/js/132.d337e4d4.js",
    "revision": "8b2693c88b558821593e81d553893dfd"
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
    "url": "assets/js/136.62841e36.js",
    "revision": "4729ebf34a1906e7172c82f2d5f0d226"
  },
  {
    "url": "assets/js/137.6508c286.js",
    "revision": "fc063d41fa93c2569a31ebc214006cd6"
  },
  {
    "url": "assets/js/138.ebaa95b1.js",
    "revision": "d5234ca769187470af8c4318eb7f799a"
  },
  {
    "url": "assets/js/139.79f17490.js",
    "revision": "3f622da9ca8fcf82afbe275e40d26f68"
  },
  {
    "url": "assets/js/14.fe2f2ae7.js",
    "revision": "7f3b9c79006149a3815c0a2a64418ff9"
  },
  {
    "url": "assets/js/140.f57891f5.js",
    "revision": "15100cce41e736a759091730e97dcce6"
  },
  {
    "url": "assets/js/141.176efd98.js",
    "revision": "2e6e10328c8eddd39d3334f9b2f5e1dd"
  },
  {
    "url": "assets/js/142.997a717c.js",
    "revision": "f694b8e364441080519560a3898df8ad"
  },
  {
    "url": "assets/js/143.a65bd19a.js",
    "revision": "b0bd7e32f23580277d5f75104210a4a8"
  },
  {
    "url": "assets/js/144.39362c1f.js",
    "revision": "83e1551eecd1d88a06b349d24215c0b3"
  },
  {
    "url": "assets/js/145.74394394.js",
    "revision": "b7daa56568e8071e9746db8f557c906d"
  },
  {
    "url": "assets/js/146.6687bedc.js",
    "revision": "96bc1282968072fff60d198027599d82"
  },
  {
    "url": "assets/js/147.f202b5a1.js",
    "revision": "c6b46f0c97f46f54f8d9ee38b4c8ee4f"
  },
  {
    "url": "assets/js/148.cb3159e8.js",
    "revision": "d15c003537385fcb2ccb5fcaeece7a9b"
  },
  {
    "url": "assets/js/149.c09f8a15.js",
    "revision": "795285bb961d55574c62c73e9e9beadd"
  },
  {
    "url": "assets/js/15.df9cfe55.js",
    "revision": "4c46e8ce0f2ddd6833bb80c69ab1b7f2"
  },
  {
    "url": "assets/js/150.fb6881ad.js",
    "revision": "7753ea09ff08c7dce7d3ef035414851e"
  },
  {
    "url": "assets/js/151.52d91f3f.js",
    "revision": "de6fc82f1bdc92a0f8c0014559dd0d0a"
  },
  {
    "url": "assets/js/152.76b5b9a6.js",
    "revision": "ebf635480547c88790cfc92e45b929ab"
  },
  {
    "url": "assets/js/153.932571be.js",
    "revision": "385de709590cfc5365cee66558c0d05d"
  },
  {
    "url": "assets/js/154.e2797b90.js",
    "revision": "abd3678c1ea6f1a80fa31a159e578c5d"
  },
  {
    "url": "assets/js/155.9dfc0537.js",
    "revision": "45baa756e5ae692308dfd6097bc5819e"
  },
  {
    "url": "assets/js/156.016ed98f.js",
    "revision": "61319baa0707a9a946ec2a4fad43311a"
  },
  {
    "url": "assets/js/157.129f4090.js",
    "revision": "ede0c375838225912841e564f462cf34"
  },
  {
    "url": "assets/js/158.04120712.js",
    "revision": "ad46c2d914cb86af208c44090ddd96a5"
  },
  {
    "url": "assets/js/159.fcfa2372.js",
    "revision": "224dc834e4e394e7e2eed979f3a63ced"
  },
  {
    "url": "assets/js/16.3302afcc.js",
    "revision": "94c714fcff7ad85b6988ea7009751720"
  },
  {
    "url": "assets/js/160.ef768c92.js",
    "revision": "6eeb5a22fb1a07e8d88bb511e9c52924"
  },
  {
    "url": "assets/js/161.63f83db7.js",
    "revision": "7129a29bd296f01152a77a2a05b2b8f3"
  },
  {
    "url": "assets/js/162.52616e5a.js",
    "revision": "36e31275a822a5552ca585ea6f45ad75"
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
    "url": "assets/js/167.2e07e6a2.js",
    "revision": "aadeb4ea1984e75c5d02c15b3a8ef05b"
  },
  {
    "url": "assets/js/168.09d8f470.js",
    "revision": "bf9ed47e91ebfd8bc94320c79de38ac0"
  },
  {
    "url": "assets/js/169.fdebc1dc.js",
    "revision": "c6028ede18fc16101c5959ca256ee4ae"
  },
  {
    "url": "assets/js/17.96f63d09.js",
    "revision": "9cf78f527fad92705ff223616e42b497"
  },
  {
    "url": "assets/js/170.14db7b0f.js",
    "revision": "1676d903f956be0dc561aaed45a5bfdb"
  },
  {
    "url": "assets/js/171.7b176900.js",
    "revision": "5d826824068226581de40348eaa91498"
  },
  {
    "url": "assets/js/172.b39fd4e6.js",
    "revision": "3c100947741d9925aa45c4bbd359af2e"
  },
  {
    "url": "assets/js/173.c146696c.js",
    "revision": "628b093d4975e36c7ee3ca44ba4ef307"
  },
  {
    "url": "assets/js/174.548ba319.js",
    "revision": "dc0edfe819348fcc446039222a09c0dd"
  },
  {
    "url": "assets/js/175.bfa5f670.js",
    "revision": "c7e16f71389b76bb44364e59eb4edd2e"
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
    "url": "assets/js/178.98f38ba2.js",
    "revision": "01bcd673fcd6527ab3c666754e39bed3"
  },
  {
    "url": "assets/js/179.88b390a8.js",
    "revision": "2ffbf6ef5356782c6df934edda808b0e"
  },
  {
    "url": "assets/js/18.2e4d1446.js",
    "revision": "08fe9397c3e60a90ec7d3d8417bb0a1c"
  },
  {
    "url": "assets/js/180.d38263e7.js",
    "revision": "f6f2d48f2e7bc95e075cc90150f63950"
  },
  {
    "url": "assets/js/181.274bdbd8.js",
    "revision": "c9d19fa0bc161587babec50bd2a2ba8d"
  },
  {
    "url": "assets/js/182.87249cdc.js",
    "revision": "f611faa2d3699a3b8b1600ab5c9cfe52"
  },
  {
    "url": "assets/js/183.3c2a9451.js",
    "revision": "7155de6d917e9d4bad1d934efc65632b"
  },
  {
    "url": "assets/js/184.6eb6c009.js",
    "revision": "84e18f30347b3217f6329fd22311ff30"
  },
  {
    "url": "assets/js/185.17093df6.js",
    "revision": "a7c0721e9855fa8e84a64eda9e68034c"
  },
  {
    "url": "assets/js/186.7221f853.js",
    "revision": "6d154c7119570f9591a4aff9fe765d9f"
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
    "url": "assets/js/189.13e20e74.js",
    "revision": "eb908d453521e7c5ecc3d5d4f46a3082"
  },
  {
    "url": "assets/js/19.7f33beb1.js",
    "revision": "b97d7bef20611c4642176c8ba86fbe72"
  },
  {
    "url": "assets/js/190.5cf5813a.js",
    "revision": "fdcb6e689e28cfa60684c8db94e5e2ae"
  },
  {
    "url": "assets/js/191.4768967d.js",
    "revision": "8e42036ee784309fdc538f5effeb5604"
  },
  {
    "url": "assets/js/192.46eca970.js",
    "revision": "9b41fa81453835fd7a6ba8e56232202a"
  },
  {
    "url": "assets/js/193.4e0b7528.js",
    "revision": "d4066dd5b04f53ed64fad7a566a872e6"
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
    "url": "assets/js/196.2dc82ef8.js",
    "revision": "6edd5963afe135b290b30ec6cd629b22"
  },
  {
    "url": "assets/js/197.7a98f83a.js",
    "revision": "27f9f0e651a4dcbda6552e952416d650"
  },
  {
    "url": "assets/js/198.8a16114f.js",
    "revision": "bc60fd41cb6a3ce8aecd68e416b99111"
  },
  {
    "url": "assets/js/199.7518db2b.js",
    "revision": "b45b93422e13eb38cebe8789a9959282"
  },
  {
    "url": "assets/js/2.2673f7b9.js",
    "revision": "a1a56adc4e81667f7993520683e12a94"
  },
  {
    "url": "assets/js/20.10d6940d.js",
    "revision": "4e7e624b4d6b5c6e0bc9e681edfe123c"
  },
  {
    "url": "assets/js/200.afd6df58.js",
    "revision": "acf0451f52a6020584725550a97eb121"
  },
  {
    "url": "assets/js/201.6ed9ec8c.js",
    "revision": "365e5d057967a35c472f136ea3ca91f5"
  },
  {
    "url": "assets/js/202.2915238b.js",
    "revision": "56e72abc1cb113d2db94f9c1e425c7da"
  },
  {
    "url": "assets/js/203.020403d7.js",
    "revision": "4fb1d335be45155f4bb15c0343decaf9"
  },
  {
    "url": "assets/js/204.6db5ffc8.js",
    "revision": "d69556bf033457805666ea9e398ccf8d"
  },
  {
    "url": "assets/js/205.2200b4f1.js",
    "revision": "472c87309739ead07417806980099590"
  },
  {
    "url": "assets/js/206.86e4a283.js",
    "revision": "903c53e18694d533edb9ef9fae90cf31"
  },
  {
    "url": "assets/js/207.5551ac44.js",
    "revision": "167b43ac1c83c272d0e25dcfbe048e2a"
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
    "url": "assets/js/21.1f5e0518.js",
    "revision": "f05448f6ecfccd3273edb82b51a753b6"
  },
  {
    "url": "assets/js/210.f2c9bf0f.js",
    "revision": "5a56bb280660c7a583d9420cdc580c57"
  },
  {
    "url": "assets/js/211.c67a96bd.js",
    "revision": "572c7a49aa03db9d70c2a2280c827ba7"
  },
  {
    "url": "assets/js/212.176b598e.js",
    "revision": "0605f06a1b569388d116eedbfade0796"
  },
  {
    "url": "assets/js/213.53c16893.js",
    "revision": "cb2a41a0ce90b2e9109e4846d2724f27"
  },
  {
    "url": "assets/js/214.e22710cb.js",
    "revision": "d0c3f03342f8c713bda14b35d8540a2a"
  },
  {
    "url": "assets/js/215.0b199dc8.js",
    "revision": "7e17bd64499ea780b9f70b57aa8e8674"
  },
  {
    "url": "assets/js/216.0c82b0d7.js",
    "revision": "f73eb62d8762513a0598e4963db7fda2"
  },
  {
    "url": "assets/js/217.e9447c8a.js",
    "revision": "7dae2ce71d29bbdd7d4c7acf363e5209"
  },
  {
    "url": "assets/js/218.27dc97a8.js",
    "revision": "1fb098342fa54a0ddebcd7c65d5c80b6"
  },
  {
    "url": "assets/js/219.d1a8895f.js",
    "revision": "8f3c705eb3444c408246d02a6b8240c9"
  },
  {
    "url": "assets/js/22.7821d021.js",
    "revision": "fabe2d813b05bbd888ec925e82f8811b"
  },
  {
    "url": "assets/js/220.98208cb6.js",
    "revision": "900b35272503fb9b35c3ebae26596234"
  },
  {
    "url": "assets/js/221.ea80e3dd.js",
    "revision": "a53683f95cff0f52e5a3df32a626815f"
  },
  {
    "url": "assets/js/222.6667ef7a.js",
    "revision": "d5f6c73d223517801d3ac6eb633c7a8f"
  },
  {
    "url": "assets/js/223.0c652441.js",
    "revision": "3ed48ea06787bb17ee5876d321626d20"
  },
  {
    "url": "assets/js/224.ae3b952a.js",
    "revision": "b6386c50f866a5c3c83afdae406b4425"
  },
  {
    "url": "assets/js/225.80c9a1fe.js",
    "revision": "8680a383d9b247c5a7a096b1ab592cb0"
  },
  {
    "url": "assets/js/226.cfa9d260.js",
    "revision": "78ec4ef570e2eb6982327765cc4e9fee"
  },
  {
    "url": "assets/js/227.2f96f2c5.js",
    "revision": "0a279c5530bee67e083dc288f69d7f57"
  },
  {
    "url": "assets/js/228.50e95d13.js",
    "revision": "da6503ea70594eb0375796c08555b124"
  },
  {
    "url": "assets/js/229.a3594024.js",
    "revision": "68c3c6c956cc5d71826bcf219d4c73a7"
  },
  {
    "url": "assets/js/23.c1a51090.js",
    "revision": "295151a511b3207d02824b38f94344b5"
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
    "url": "assets/js/232.ebea8343.js",
    "revision": "a6ee93867f4edaea62328528634ee30e"
  },
  {
    "url": "assets/js/233.eba28822.js",
    "revision": "078d3c8d4b8f5143f3a67644507de5f7"
  },
  {
    "url": "assets/js/234.c49c1483.js",
    "revision": "2df2c4daed4e5a71d6e54dddb3ebc404"
  },
  {
    "url": "assets/js/235.a39afbf4.js",
    "revision": "8c24d3b9d12ebead3b1d80b6d9bb69af"
  },
  {
    "url": "assets/js/236.f77c3703.js",
    "revision": "1cf2899af800f145abddf90993147390"
  },
  {
    "url": "assets/js/237.f0b16056.js",
    "revision": "a99d4e14405b7edbccad11ac3148d78d"
  },
  {
    "url": "assets/js/238.5652d6a7.js",
    "revision": "9a941fe4729e7df01ecf75b5e9472fd6"
  },
  {
    "url": "assets/js/239.f59d5d5c.js",
    "revision": "ce97fb6fc21f70e23ed9c85cd1163d62"
  },
  {
    "url": "assets/js/24.2ff66e88.js",
    "revision": "c971d4761659da5edf4d7f8e266c87d4"
  },
  {
    "url": "assets/js/240.2da97b89.js",
    "revision": "3540ac13b4670880ac8cda056a72e477"
  },
  {
    "url": "assets/js/241.0089d62e.js",
    "revision": "137409c702666b9650062f6153a5d670"
  },
  {
    "url": "assets/js/242.c329f9a0.js",
    "revision": "1eeca30c57de70960408c3853adfbe08"
  },
  {
    "url": "assets/js/243.634e7a97.js",
    "revision": "d41634de27a1ca40cd653b98ed66e6bb"
  },
  {
    "url": "assets/js/244.3d4b229d.js",
    "revision": "0aee34027ab48def22795a3be6b8dc0d"
  },
  {
    "url": "assets/js/245.1040f491.js",
    "revision": "d45d27a7adde933b0bc4bef4c68088df"
  },
  {
    "url": "assets/js/246.f553cdac.js",
    "revision": "d8d20d8ac85b69cd58561d4e12fb7748"
  },
  {
    "url": "assets/js/247.4f260d90.js",
    "revision": "d6a8b7077ac6be0f7e3e488cc7c2a8d9"
  },
  {
    "url": "assets/js/248.601e1f92.js",
    "revision": "30c7088ede21cb9bc6c9c6da007c645f"
  },
  {
    "url": "assets/js/249.aa952188.js",
    "revision": "fcfadcdc40a59a442b1467b6390b8070"
  },
  {
    "url": "assets/js/25.94ab9d94.js",
    "revision": "44495cc00d257698843137180f46bfcf"
  },
  {
    "url": "assets/js/250.dece075c.js",
    "revision": "c97213b313a598c8e17e0fb7d6462d8c"
  },
  {
    "url": "assets/js/251.a21a322f.js",
    "revision": "560988d3550f4bd36caed7fdcdba06aa"
  },
  {
    "url": "assets/js/252.faffd3c8.js",
    "revision": "658a1e06ad652c3cbe6eecbd079fe1fc"
  },
  {
    "url": "assets/js/253.226bba35.js",
    "revision": "6ea5b2f9ff79fd8b370d01dbce91f03c"
  },
  {
    "url": "assets/js/254.1ddb7519.js",
    "revision": "109cb7bc4d1b607f8c01985d9925eb72"
  },
  {
    "url": "assets/js/255.bda54566.js",
    "revision": "f13ad84b5362811a8559eff5b94769df"
  },
  {
    "url": "assets/js/256.454ecdf0.js",
    "revision": "b1ba6905add18fb2f7baddf32b4c3fd6"
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
    "url": "assets/js/259.428e10fe.js",
    "revision": "ca7dc1e1f630267ef623bf702e632647"
  },
  {
    "url": "assets/js/26.382d59f0.js",
    "revision": "d2fdafbe89eacbdc33c26959e071458d"
  },
  {
    "url": "assets/js/260.00f872c6.js",
    "revision": "e090fb64a97b1ed98a69b1b6503a4fc4"
  },
  {
    "url": "assets/js/261.d15c6ea3.js",
    "revision": "340472aab89c75f70a1c87af69a015af"
  },
  {
    "url": "assets/js/262.e2cf297d.js",
    "revision": "884b8bf72b585f9ac1554a27b7f49d8d"
  },
  {
    "url": "assets/js/263.7713d45c.js",
    "revision": "faceac813b6409059d36f5c022953c1a"
  },
  {
    "url": "assets/js/264.3ba10def.js",
    "revision": "0b16339869b0b3758eb9237eb8c0a17c"
  },
  {
    "url": "assets/js/265.ee9ef96a.js",
    "revision": "cea545c20392d9d3a73caeeb89151327"
  },
  {
    "url": "assets/js/266.1710707b.js",
    "revision": "3bd05d4d0af11cf962a73cf9666e05a1"
  },
  {
    "url": "assets/js/267.b7385204.js",
    "revision": "bdac2c36c83f4b3d1931abac9e73312d"
  },
  {
    "url": "assets/js/268.63cdd396.js",
    "revision": "a82af88e492399757eb38c37d1b24ac1"
  },
  {
    "url": "assets/js/269.9fb70d4d.js",
    "revision": "7b604f346b1e961b0b9b3bc329c9a515"
  },
  {
    "url": "assets/js/27.8c94e1ca.js",
    "revision": "4682f4818db8fba5347d9158327b2dba"
  },
  {
    "url": "assets/js/270.d9351c1d.js",
    "revision": "e8e95774e3fc6e739a61edc7645a924e"
  },
  {
    "url": "assets/js/271.b7124cdd.js",
    "revision": "ba0a81fa2e589b0a6c9461c18fb823f8"
  },
  {
    "url": "assets/js/272.2a3bbb31.js",
    "revision": "555278870b53eb3097218ad527eb55f5"
  },
  {
    "url": "assets/js/273.9e0b617a.js",
    "revision": "5c8846506c72d347b7040b49bc349be5"
  },
  {
    "url": "assets/js/274.eb345f2c.js",
    "revision": "3a388137da8dd8b6c6b5c5cad228cdfa"
  },
  {
    "url": "assets/js/275.e4e74425.js",
    "revision": "8e94d5cd592eb7fb235817a7dd0b91d1"
  },
  {
    "url": "assets/js/276.fef6eeab.js",
    "revision": "f49058dd7b88699f3e3c34179988f9a0"
  },
  {
    "url": "assets/js/277.c98ce500.js",
    "revision": "fa08f39049ce5deb5680770c82bb06a8"
  },
  {
    "url": "assets/js/278.d50371fd.js",
    "revision": "b41c09d1960f3184a5af04365d765bf6"
  },
  {
    "url": "assets/js/279.4f59bb4b.js",
    "revision": "482cc1818fe18163fec203c25e110178"
  },
  {
    "url": "assets/js/28.32bad3ba.js",
    "revision": "a8155fcb29dc7d62325e7d4148041e80"
  },
  {
    "url": "assets/js/280.24a0ec3a.js",
    "revision": "6944d30f447680b43a37c3b6ef47f9c1"
  },
  {
    "url": "assets/js/281.45f0ce32.js",
    "revision": "e983600403d0cdf6448e3529dde9a882"
  },
  {
    "url": "assets/js/282.e50c8288.js",
    "revision": "d238325bd8d3fa6f87eadf2902ded6b0"
  },
  {
    "url": "assets/js/283.36f71811.js",
    "revision": "bafa3b02695e300c3c0e9bec6ef57903"
  },
  {
    "url": "assets/js/284.c98d0c7a.js",
    "revision": "4b64f83ac7e748cefcfdc7dc55d34f8d"
  },
  {
    "url": "assets/js/285.b1bba65a.js",
    "revision": "cbda72ba9076f780e1bf304adb7137f5"
  },
  {
    "url": "assets/js/286.3273df5b.js",
    "revision": "e5a25ae03675e32ef80b9b9b6f87a316"
  },
  {
    "url": "assets/js/287.83207ca9.js",
    "revision": "13c76dccdd43845c884f768dc29073bd"
  },
  {
    "url": "assets/js/288.17f690e6.js",
    "revision": "898b8ed9e62a0e25d5845787845d2637"
  },
  {
    "url": "assets/js/289.82aa8d9f.js",
    "revision": "a4f89a8b8a17cf4b0d5b4b3b637d10f3"
  },
  {
    "url": "assets/js/29.857b7c8e.js",
    "revision": "bbedc8c21728b80c6b90ebada6bd0dda"
  },
  {
    "url": "assets/js/290.03ad5cce.js",
    "revision": "8c21e2af131d62f36301047571883c49"
  },
  {
    "url": "assets/js/291.29dd90e1.js",
    "revision": "37b3f7e461d14d50fd2664df6f1de3f8"
  },
  {
    "url": "assets/js/292.1bb4d4e3.js",
    "revision": "129f082c0f026022c273758c7981cfd1"
  },
  {
    "url": "assets/js/293.b9fa1183.js",
    "revision": "32fddf0ef657e97a61a16d006d8f9b77"
  },
  {
    "url": "assets/js/294.c181e779.js",
    "revision": "cbb21680424ef8ecfaa55f838a68f276"
  },
  {
    "url": "assets/js/295.85d32843.js",
    "revision": "d22c2dd2aee05b4fe374dc72cb49c7b6"
  },
  {
    "url": "assets/js/296.802570fa.js",
    "revision": "ed8d83ef7d72a33b8156a6f978db11b1"
  },
  {
    "url": "assets/js/297.f2f6b670.js",
    "revision": "8631fa404d0f832f6f0de73b3eb136b9"
  },
  {
    "url": "assets/js/298.d6c6cf2d.js",
    "revision": "af2a9e374a2ab51e50c781319eeaa8a8"
  },
  {
    "url": "assets/js/299.639c15fc.js",
    "revision": "88ab7a8b1ed66cff4d36fb24e41b6398"
  },
  {
    "url": "assets/js/3.e5733598.js",
    "revision": "d3fb647fab233b2e9409e7e8b83302cd"
  },
  {
    "url": "assets/js/30.4ab6d7ab.js",
    "revision": "34220f4199adae5c5a0616f3c731586e"
  },
  {
    "url": "assets/js/300.de0f7521.js",
    "revision": "f0d34979a28f38ec44f13686092ee095"
  },
  {
    "url": "assets/js/301.0871b8b4.js",
    "revision": "e1e5c1d716a87d56d40be93c1a0b4655"
  },
  {
    "url": "assets/js/302.9d024e25.js",
    "revision": "ea4dc9c756d0d8b77bef5bb930f22b97"
  },
  {
    "url": "assets/js/303.538f2faf.js",
    "revision": "29b92a05f326695e80b50b5157e2592c"
  },
  {
    "url": "assets/js/304.afd62b7d.js",
    "revision": "93c54a4ccbfe214753cd889151e62107"
  },
  {
    "url": "assets/js/305.b65a83b6.js",
    "revision": "ac7eec9c553bb6b503764635b51cdafe"
  },
  {
    "url": "assets/js/306.415ccc37.js",
    "revision": "3bc278293bf50b87e8a9e28eb2ed0ebd"
  },
  {
    "url": "assets/js/307.dd32bfa6.js",
    "revision": "309ab743554da5a9d8cea832d4e89a15"
  },
  {
    "url": "assets/js/308.fda82762.js",
    "revision": "e1a33a3ea83f0e2ce3192853331a4e79"
  },
  {
    "url": "assets/js/309.ee1a214d.js",
    "revision": "f5d2a8f355052d1d6d9f08e0d53fce8a"
  },
  {
    "url": "assets/js/31.2bf8e6b5.js",
    "revision": "fe95942d3b426513e094275d673f09d8"
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
    "url": "assets/js/312.6b0f2101.js",
    "revision": "08b1245db244748bf14e111215aa839a"
  },
  {
    "url": "assets/js/313.ca70f14e.js",
    "revision": "c0764b2c9b79f2c946bf5f60a5f857a7"
  },
  {
    "url": "assets/js/314.bddc9a91.js",
    "revision": "62f20f4e89c2f5802f9165c0fe54449d"
  },
  {
    "url": "assets/js/315.330da35e.js",
    "revision": "d1afb358384fb9033d1a66ba6a5ef4c8"
  },
  {
    "url": "assets/js/316.b801aa5e.js",
    "revision": "77894894531f5bf1cec300c601603dc5"
  },
  {
    "url": "assets/js/317.cdea1974.js",
    "revision": "c76d38b8848b11fe8d526366215258c7"
  },
  {
    "url": "assets/js/318.13c53d10.js",
    "revision": "f47cbead396a6070009a98eaa66cac7c"
  },
  {
    "url": "assets/js/319.d30a8051.js",
    "revision": "6f9815288ac387f8f34bd9d7b2680efb"
  },
  {
    "url": "assets/js/32.4b6a01d7.js",
    "revision": "28a14d76915756d9a14f01cac1cd93fb"
  },
  {
    "url": "assets/js/320.c6d27e53.js",
    "revision": "e69056af75f45e0787f50df42281d052"
  },
  {
    "url": "assets/js/321.d7cc804c.js",
    "revision": "c36121f51c8cfe746f024b2270953251"
  },
  {
    "url": "assets/js/322.e976d030.js",
    "revision": "8b611d35171cffc821f2aa49995d87f6"
  },
  {
    "url": "assets/js/323.03806fa2.js",
    "revision": "eb2695dbb4cb87fba2a9dccf0bd63e4a"
  },
  {
    "url": "assets/js/324.67b2a6de.js",
    "revision": "24c180f313ad779a7c0a9fa6ccbc5752"
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
    "url": "assets/js/327.2b123c2e.js",
    "revision": "e2b1f87ed987d078902de0a8e9535449"
  },
  {
    "url": "assets/js/328.f3c1d259.js",
    "revision": "436b17503fdc9544633d9157a4c2181a"
  },
  {
    "url": "assets/js/329.272cf730.js",
    "revision": "def7ab9a0cc78a7050356489e1180e33"
  },
  {
    "url": "assets/js/33.f2a13299.js",
    "revision": "cc8c2da8ea43324f2b4a33bc02bf5d11"
  },
  {
    "url": "assets/js/330.06699b63.js",
    "revision": "19867e330b33fb0e27c505aa73f199eb"
  },
  {
    "url": "assets/js/331.ff3afff7.js",
    "revision": "ea943195647c831ab946707ac75279eb"
  },
  {
    "url": "assets/js/332.53be1d84.js",
    "revision": "f242209deb743201fd8ce4f1c4e8ea65"
  },
  {
    "url": "assets/js/333.821ec829.js",
    "revision": "89ebbd0a2996f9623f82cd0b9cb7a7c5"
  },
  {
    "url": "assets/js/334.5d3d3dd7.js",
    "revision": "ae9fa8b7897902c3481df091087eb27d"
  },
  {
    "url": "assets/js/335.96976933.js",
    "revision": "8f0877228aed11e8cb8430f18ba4d9df"
  },
  {
    "url": "assets/js/336.74c7bcf7.js",
    "revision": "6bf47c74345771a3282ab62213975298"
  },
  {
    "url": "assets/js/337.5e7878dd.js",
    "revision": "f01969eb7bfc7547355a9f4c434ab3e7"
  },
  {
    "url": "assets/js/338.1661afd1.js",
    "revision": "4686a270a99921ab0481b6dd09fa0ad9"
  },
  {
    "url": "assets/js/339.6c496a0e.js",
    "revision": "b51b84642139a0404ef4f7d01f6c8b6b"
  },
  {
    "url": "assets/js/34.27d636b6.js",
    "revision": "72736239192e5ddfc8c326027c9c4f19"
  },
  {
    "url": "assets/js/340.78c4d188.js",
    "revision": "377bd8ec73905ee91f79c8a9f4a3f26c"
  },
  {
    "url": "assets/js/341.49d07d80.js",
    "revision": "419d0cbea4fa69d4db942d7c1625811e"
  },
  {
    "url": "assets/js/342.b75dd23c.js",
    "revision": "3cf779c05b592f8bdae08ffb3cd95025"
  },
  {
    "url": "assets/js/343.9cd92f9b.js",
    "revision": "2ee1b0dba9e65dbac5811f06eca19b2e"
  },
  {
    "url": "assets/js/344.0522e8c3.js",
    "revision": "d3dd16c1a3fe079d47e76d827a415947"
  },
  {
    "url": "assets/js/345.19cc50d9.js",
    "revision": "2791ab7790e736f12ad49c09b2181f62"
  },
  {
    "url": "assets/js/346.cb7505a9.js",
    "revision": "7587347cd30159cc61a144fb9f5fe905"
  },
  {
    "url": "assets/js/347.c7766451.js",
    "revision": "86062bfc5b744d8cd8a7f1b3dd7264a0"
  },
  {
    "url": "assets/js/348.9a12789e.js",
    "revision": "87b4e46ff7adb4942ad1c2075f64bc7d"
  },
  {
    "url": "assets/js/349.4d2a01c3.js",
    "revision": "386394ff2f56f8db1623f28e22e70a0a"
  },
  {
    "url": "assets/js/35.d464dd90.js",
    "revision": "f3a3c86c4fb1249107a17b07451db3cc"
  },
  {
    "url": "assets/js/350.c754761b.js",
    "revision": "b9d9bc078e1c1bba6e18bfb3d0782ceb"
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
    "url": "assets/js/353.e063a4e8.js",
    "revision": "8b4cdd8915c101a5d2b3bc516f889abd"
  },
  {
    "url": "assets/js/354.c96854db.js",
    "revision": "7ea8c7698d14c7e2f924a19a9387528b"
  },
  {
    "url": "assets/js/355.90de1c53.js",
    "revision": "518c7a941ac7db80be45e25488472003"
  },
  {
    "url": "assets/js/356.a0d9f8ca.js",
    "revision": "719143f711cccd7436baf8e602348978"
  },
  {
    "url": "assets/js/357.0a2b415c.js",
    "revision": "86c669d925494ba5681a429f4284a9d8"
  },
  {
    "url": "assets/js/358.8a977cef.js",
    "revision": "a9b21efbbfc42e4bf06399f8d25de32c"
  },
  {
    "url": "assets/js/359.5f910f05.js",
    "revision": "86365b8d14d9dffa354146a983d99190"
  },
  {
    "url": "assets/js/36.ec9d485f.js",
    "revision": "bd3e4a03c2b4a063cd88c89edbfd4e81"
  },
  {
    "url": "assets/js/360.209aa327.js",
    "revision": "b57f74dcd71db3e5682af6efa0bb6f26"
  },
  {
    "url": "assets/js/361.5dd5534d.js",
    "revision": "3c5d44425d42f9820878f96e50a56f86"
  },
  {
    "url": "assets/js/362.2a803cdc.js",
    "revision": "671ef5f314c903add581bf69cbf4148d"
  },
  {
    "url": "assets/js/363.f0a00dfa.js",
    "revision": "791ce794bd43b54afe841f30ed7d13e5"
  },
  {
    "url": "assets/js/364.b582b188.js",
    "revision": "ad875cae588f6c0c38dea22e4cf7a8d9"
  },
  {
    "url": "assets/js/365.2fcb2b46.js",
    "revision": "924e76fe51cd31128269ba49fb5ccc9f"
  },
  {
    "url": "assets/js/366.facbbec7.js",
    "revision": "585d1eaa97b4aa01d429c13c4522b377"
  },
  {
    "url": "assets/js/367.f67cabf3.js",
    "revision": "b0fd16d2d1b758d7fab5cc050925dacc"
  },
  {
    "url": "assets/js/368.2c681863.js",
    "revision": "7cb1786e39b12ff9ad2c0400dad76216"
  },
  {
    "url": "assets/js/369.1c88930e.js",
    "revision": "cdd43b20170ea3eec67207437f104839"
  },
  {
    "url": "assets/js/37.5409ae1b.js",
    "revision": "c5fe921c4eb48e486c7c713f8bdda04a"
  },
  {
    "url": "assets/js/370.db4c1b60.js",
    "revision": "ef3075fc08f42be327f492e34bb92b94"
  },
  {
    "url": "assets/js/371.0e44195d.js",
    "revision": "6f2b356963e0c4d956d562709c5b3816"
  },
  {
    "url": "assets/js/372.fc956a75.js",
    "revision": "6d9493a2c0af000633bb1fa0fef48509"
  },
  {
    "url": "assets/js/373.c9772580.js",
    "revision": "5fa3dee28bbbabace230471edebbd37f"
  },
  {
    "url": "assets/js/374.536420cf.js",
    "revision": "a812a9ad8c0640860d3b4a051985d263"
  },
  {
    "url": "assets/js/375.4f553961.js",
    "revision": "0d3859b94ea9fa9d614c4e0719c972f8"
  },
  {
    "url": "assets/js/376.0479d71f.js",
    "revision": "5f016191e3670e361ff3c8a00491e174"
  },
  {
    "url": "assets/js/377.fca92546.js",
    "revision": "5bc2cd182bc1a41cc1dac71d19121bd4"
  },
  {
    "url": "assets/js/378.c826f916.js",
    "revision": "b432e8e49167e07a10ff458c17f52d2b"
  },
  {
    "url": "assets/js/379.e1a3d66e.js",
    "revision": "692122026bce4978a7ab1810ac53616b"
  },
  {
    "url": "assets/js/38.9c2b7e67.js",
    "revision": "742f77422f14ba3b716c8c7a3dc8a1e5"
  },
  {
    "url": "assets/js/380.18f6877a.js",
    "revision": "4addc8cfed20e97a6f1436de2d5c3480"
  },
  {
    "url": "assets/js/381.8904f302.js",
    "revision": "ee83119897c282d86b0432d7977b6fc0"
  },
  {
    "url": "assets/js/382.c4748f2e.js",
    "revision": "780d8c54b27a289787e8622d918b5ae0"
  },
  {
    "url": "assets/js/383.9c599947.js",
    "revision": "5ef1eae7041976f6d1484e763370a6b1"
  },
  {
    "url": "assets/js/384.c7dd32ee.js",
    "revision": "3b42f6dbba86c6f5897a4160e9ef51bd"
  },
  {
    "url": "assets/js/385.f610f485.js",
    "revision": "27319bc95f01554dd5fe7a8ec88bba94"
  },
  {
    "url": "assets/js/386.aa9c43ee.js",
    "revision": "19cf8ee0bee5be97d93d0de72fb6228e"
  },
  {
    "url": "assets/js/387.bdeffa22.js",
    "revision": "4227267130d43e70bf584ebbeb906f3c"
  },
  {
    "url": "assets/js/388.6a050025.js",
    "revision": "cbeb97adfcfb7e9abb9d0621574dd655"
  },
  {
    "url": "assets/js/389.f35088fc.js",
    "revision": "673dc281a7a1b5d1a81d378ccd801c38"
  },
  {
    "url": "assets/js/39.6da24b52.js",
    "revision": "42824271d0f339f7e335aea6f42b62a2"
  },
  {
    "url": "assets/js/390.955f0476.js",
    "revision": "bba52e5b790d91c7c85caba4a3bcd1ae"
  },
  {
    "url": "assets/js/391.244d3dd1.js",
    "revision": "660fcbd68bcbbcee1ee99fa68df59c3a"
  },
  {
    "url": "assets/js/392.d21068e1.js",
    "revision": "e3635fc23caf87c0eebff6c919dace90"
  },
  {
    "url": "assets/js/393.42b025eb.js",
    "revision": "03baf09fe92e46d8e01e4baa98264002"
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
    "url": "assets/js/397.679ec1ab.js",
    "revision": "905cd9a30cb6c9d507a75031adf4ebc5"
  },
  {
    "url": "assets/js/398.cef0f13b.js",
    "revision": "3504bd14be500185e11f92f14b8b863a"
  },
  {
    "url": "assets/js/399.3bf45f1d.js",
    "revision": "884ed21abf577f258cde4fa28b49c114"
  },
  {
    "url": "assets/js/4.726a0b87.js",
    "revision": "40582c2884f5f592326f80080ee0987c"
  },
  {
    "url": "assets/js/40.ee94c7b5.js",
    "revision": "88c5938362f7fd9b9722200d334fe6e1"
  },
  {
    "url": "assets/js/400.d783f7f1.js",
    "revision": "7e10ba4c16e3d5c2b5ae09687cd8f23b"
  },
  {
    "url": "assets/js/401.fd4c5aea.js",
    "revision": "2bf9f584410fb2c22cd39e21bd82b575"
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
    "url": "assets/js/405.0660c121.js",
    "revision": "3ed87290aa32c5819623e302b0ea6c44"
  },
  {
    "url": "assets/js/406.c78d47de.js",
    "revision": "848881ab267bb62905ede185af57b1c8"
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
    "url": "assets/js/409.16dc0376.js",
    "revision": "958d69541bd9ff97611cd4dfa65682f7"
  },
  {
    "url": "assets/js/41.341cf1fc.js",
    "revision": "08142de4edf70fc2cca75e5c97cf35a0"
  },
  {
    "url": "assets/js/410.aa424f81.js",
    "revision": "1e30b4b554fa9ecf533acd256ecabd71"
  },
  {
    "url": "assets/js/411.87a759d2.js",
    "revision": "7523458cc40e512aa46fd5eb51536f36"
  },
  {
    "url": "assets/js/42.a3f1fdfd.js",
    "revision": "e7325d3d67fcbf9fb1e19f53e7940e72"
  },
  {
    "url": "assets/js/43.0557f0cc.js",
    "revision": "913f6e5cc82a7f7ec27fce4ddb331d23"
  },
  {
    "url": "assets/js/44.9774af04.js",
    "revision": "6d89a2e14d6db3baea74374225b0a84f"
  },
  {
    "url": "assets/js/45.61e3fb16.js",
    "revision": "c39f0f447a62830331c81316234d8a66"
  },
  {
    "url": "assets/js/46.e9b1ab9b.js",
    "revision": "be8f5643ac2c198d1580fefe5a3f3476"
  },
  {
    "url": "assets/js/47.5a8a20c4.js",
    "revision": "3bda33c4a5f9f73a7b4952555501777d"
  },
  {
    "url": "assets/js/48.ff2c9b75.js",
    "revision": "f12cd64c44c0796af8f6db8b9243a67a"
  },
  {
    "url": "assets/js/49.86d2e93c.js",
    "revision": "5fc0ca31a112e0d34ea6d9e49aacc542"
  },
  {
    "url": "assets/js/5.0faa48c4.js",
    "revision": "ec7f63ef0a1d4b9aa6b6eae053dab7f1"
  },
  {
    "url": "assets/js/50.cb5cdcaa.js",
    "revision": "0f5a2c6212ea2735a7861b3c41f25575"
  },
  {
    "url": "assets/js/51.ca5445cb.js",
    "revision": "8404a523e76533e22efc9e89ee485ac1"
  },
  {
    "url": "assets/js/52.14e95133.js",
    "revision": "1686574cd1b8aa2af511555922d7f075"
  },
  {
    "url": "assets/js/53.76984849.js",
    "revision": "996676e70d16864612cb6a9f3560436f"
  },
  {
    "url": "assets/js/54.bbbed9be.js",
    "revision": "a901309db283d7fafa23d8b88ec17b5b"
  },
  {
    "url": "assets/js/55.f1e5e05b.js",
    "revision": "1e041f702d6db0926311da1bbba33ea6"
  },
  {
    "url": "assets/js/56.cb361147.js",
    "revision": "10c077084d8bc95c7a622cf2c5c0dbaa"
  },
  {
    "url": "assets/js/57.6259d7c9.js",
    "revision": "681583ef6e71a31383cfcbcc89c5bc74"
  },
  {
    "url": "assets/js/58.4b77c92a.js",
    "revision": "8cc44c0dda29be907a987440ed6c734b"
  },
  {
    "url": "assets/js/59.e54019b4.js",
    "revision": "29e2e70555f630d60521a0fd48fdd6f7"
  },
  {
    "url": "assets/js/60.8e838a5e.js",
    "revision": "ffa4b59c9a8ab5c7627d350f93c196c2"
  },
  {
    "url": "assets/js/61.e7fb838f.js",
    "revision": "8ca27c625e10bcbca86d96502637c725"
  },
  {
    "url": "assets/js/62.7ef75602.js",
    "revision": "cc6b0994d36e194594602f0f444ceec9"
  },
  {
    "url": "assets/js/63.c6b21a96.js",
    "revision": "22c76afb62a14d3f89dabc98463dca53"
  },
  {
    "url": "assets/js/64.ddf56630.js",
    "revision": "c38ceb09158c9c5488d08e6e663cf0b9"
  },
  {
    "url": "assets/js/65.f5cadb0e.js",
    "revision": "df7c27b404a4d71266c30963a992a87f"
  },
  {
    "url": "assets/js/66.d8319fd7.js",
    "revision": "9bab19df86c670519ea579609501ce62"
  },
  {
    "url": "assets/js/67.a6368c14.js",
    "revision": "d3d40b6cbcbc1ed71a13f284397476b4"
  },
  {
    "url": "assets/js/68.183b9d87.js",
    "revision": "232a13fd016dd697e6bc87f59dc00dbf"
  },
  {
    "url": "assets/js/69.f4336778.js",
    "revision": "562ddab55294dea6c8c3989a88e19c0b"
  },
  {
    "url": "assets/js/70.aabcff2f.js",
    "revision": "91e1506e8fe58587e4fdf72a357c7eed"
  },
  {
    "url": "assets/js/71.bdef0e74.js",
    "revision": "738b303a5eeb3130912a41bd85227c40"
  },
  {
    "url": "assets/js/72.3725e94d.js",
    "revision": "558c749a550e53422f987e7eb20ab34b"
  },
  {
    "url": "assets/js/73.5246261c.js",
    "revision": "fdf97dc8d4e9e48da8aa66e3dca7b891"
  },
  {
    "url": "assets/js/74.3d2c25ec.js",
    "revision": "bbad0e5c51f9f3fee455af706f55acf7"
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
    "url": "assets/js/77.75ab0b0c.js",
    "revision": "7d5f275f90c083db10fe7a4832109c70"
  },
  {
    "url": "assets/js/78.8a528c56.js",
    "revision": "241357f47c0441e4ab11ca6dfad63028"
  },
  {
    "url": "assets/js/79.3851e858.js",
    "revision": "8f7cbbc0d9ca9ca86e8bce48ec1b6a88"
  },
  {
    "url": "assets/js/8.3b46e62a.js",
    "revision": "aaf2c0e8534d03a2eb53cf1c10810d80"
  },
  {
    "url": "assets/js/80.d3ed4496.js",
    "revision": "1cfe74704a247cc470bb964427a010f3"
  },
  {
    "url": "assets/js/81.5149c6b8.js",
    "revision": "18d8db35fac1bee4e5198eb29e2d0db4"
  },
  {
    "url": "assets/js/82.f43e7ca1.js",
    "revision": "d91dd5f187c062dbe6f07dff59d317f7"
  },
  {
    "url": "assets/js/83.e0162145.js",
    "revision": "582eb9fd640367008d0d315f90b5a476"
  },
  {
    "url": "assets/js/84.25042566.js",
    "revision": "20dfb90362b868f532042d5078a79942"
  },
  {
    "url": "assets/js/85.7d7013e5.js",
    "revision": "9ba1cb559d40acdeb49d82153a2bf886"
  },
  {
    "url": "assets/js/86.c2097731.js",
    "revision": "8e5cfeb847ce2283c3e82f81aeeffdcb"
  },
  {
    "url": "assets/js/87.81ac6d9e.js",
    "revision": "9f3dcfe71dd766c7c4104cea843cff47"
  },
  {
    "url": "assets/js/88.0a716f4a.js",
    "revision": "f9697621c42f02b145021eb7f05b322f"
  },
  {
    "url": "assets/js/89.f6d67937.js",
    "revision": "e4cb4e184c94757802af78cb4cdabe99"
  },
  {
    "url": "assets/js/9.06ac8a0f.js",
    "revision": "2ce9ba598ca850fe48a262096a5f57ea"
  },
  {
    "url": "assets/js/90.cff14b5e.js",
    "revision": "235b00d1b4abbe282080ef79ba172713"
  },
  {
    "url": "assets/js/91.dfb67e91.js",
    "revision": "2826d3ed2a850fe3ec1b0bfdf31f3f79"
  },
  {
    "url": "assets/js/92.be9e6667.js",
    "revision": "62f3bd60832d8844a101589430663cd1"
  },
  {
    "url": "assets/js/93.14a8448d.js",
    "revision": "07cc972e2d23a9cae342b0fd06d2788e"
  },
  {
    "url": "assets/js/94.6d7558ff.js",
    "revision": "b4a81738ab79ad24e83de1e170a8fbd5"
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
    "url": "assets/js/99.04105bd2.js",
    "revision": "183b9ab9bfb638e35a550fd37101abba"
  },
  {
    "url": "assets/js/app.964c65ff.js",
    "revision": "bf45c2fccea5e6a5cce8327901036bbc"
  },
  {
    "url": "assets/js/vendors~docsearch.51a53fdf.js",
    "revision": "903855d9e01214fe931e7689ddd0ac13"
  },
  {
    "url": "index.html",
    "revision": "9bacc6b6c736dbcf1029bb382de9be38"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "29c49958c4ea246ccc5540e5252a4a45"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "22beae739defd4b9fbd080239dcbe427"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "616fc3e1e8bda7709ad67a499bb4952a"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "be2bbff1d6917ab4e6d2aac0d9244453"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "df03fe7560166c777dbb4b771a1b36aa"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "a5da198ace920708cb36aeafc956c855"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "0b0859863ec1cb10522efb1a8fbb2c61"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "31a29bcbd563aff651fd82cbdc03fe42"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2ba052ed4864be30a3e2461238a070fc"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "0de73b9575227a8a5b1c39ec491d7bbf"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "7bc9354d55bf9c628aaaea188ac71dbd"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "41d0927eb5356821dcd1c0406af48b54"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "9b522c5852984ad105fd106b824cafd8"
  },
  {
    "url": "master/api/index.html",
    "revision": "77fafe28495c4b3dfed7671845fea90f"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "586675158a7a694a938bf6d91e155e2a"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "fd7429401d034c0fe775bfde72f9face"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "19cbe7f9693a94559b590eb14dd4ed06"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "05fbfcaf5bf3c7c7ef44e0bc4b666c0e"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "ab8cac041b8da97bddf27a822f50d68d"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "bed4b44722f6baae9684c7301b565cbc"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "45e3471fa7b1b9811a436f252fec35eb"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "88c2dd3ae8df23f9997199fea341e6e9"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "6821e3befb56bdc58657b28d9a829676"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "924962a835b9b55ecf47fcff4beb5693"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "835d100bae7c302bfffc11707e3b71e7"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "f31b1302c1d5ea2d5d018c22837cd407"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "61ee13d6ed8a57f0c2b7929e9343c077"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "bc726541592b52f13c17e3ce3bebdeda"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "ba5c554f26de53ba9e801103c203be90"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "cddb482bca1ed9529e3d2b707e1b71e7"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "b819f874bad5eebd874744f24bdaf88c"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "895cc4cd3a9a9cb96c3941730b8cb8a7"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "7fcbba0e3145826647c855ebb67b5e81"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "abc88def612c8e8df59f0cca9c1a8cb5"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "a891bad8d1d6bbf7b5a7e4159223884e"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "aafcd9e5eff1827d3b4df1410c018f69"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "8c51a63981625479414a46bfc19235f6"
  },
  {
    "url": "master/packages/index.html",
    "revision": "b49e60e1ce072304e63024dff06ce34d"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "765956022c52802471f569f29e1af9ed"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "46af50896429ed0b924ee9a12238d960"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "57704736bff5f07c5b35f287e7291bff"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "294a281df90a3ec637d8b3e7206bd427"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "3cec4ad06fc1ef6561de97964a89c321"
  },
  {
    "url": "master/packages/views.html",
    "revision": "26ab2fe0368ed6ea9c8ffada11200744"
  },
  {
    "url": "master/performance/index.html",
    "revision": "9ad1e6595d567795b45db4f8f4b0a666"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "cbabb71b8199a1d886033713df841915"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "aac00108bf2d03b8a3057f834a8624f4"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "00fc2258d8556793b94d1681a529a257"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "f15e13e1b05a7d4533d08cdd24b8c9c9"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "74c242593cb52160f44276eca1e36999"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "6013de853da6ede3953ec16ede225b37"
  },
  {
    "url": "master/themes/index.html",
    "revision": "36f18b74aec0e3452684e27fe9d221d0"
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

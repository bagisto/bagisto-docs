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
    "revision": "c01a631c5898b14e3b63c1cd83d9a328"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "4ee78ab79d80e9d842d9bbe18481b460"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "dbf1e0fc42da1fa8c1b15935eee36480"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "898959574125a087259dfe759c7f4998"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "2099dbf7d931358601a7d4fa30dedb0f"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "c4ddc029837ad5a8031707446986e244"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "b9a4ed30f7ac45af301e70a106478eb3"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "f40de96933402f02d299ef595584e0f6"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "39d949101d21dae31ac5f34b215dddaa"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "9f3b62dede136776cbb24ed227c39230"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "83e064cd53a17fc360ce6b06fafa64d6"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "a167196bcd093a2b27d20e09579857c8"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "45db41fe3abaa2e2e2bbe8e210162f3c"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "3ed532c9983527b040c285b86a6e9e18"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "b00847f28fe53d6c2c2523732a677676"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "9419aa3e1fe70dd936124326ec4fb99b"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "c4e5b6d5d8f7e90331947361fbbe368f"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "acf4497a8bd264e6b6b4eb7f29a0433e"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "ebf5470e8a31f952d4fac8165d87db74"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "fe592b5729a6f62688acbe1b2350b348"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "4af8eb7c4cb1e33e0449e78cce506396"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "228b1748276073ea43caadded700a150"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "e79757c6d5630666f8f7eaac6baaa9ed"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "e2620d43f22383ac0ce0913c93232c04"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "df92cd2358050b3f48cf9b87c0f66780"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "1894c4e8b3353fd11d1f115f79f30932"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "0e45df07a5b7f677f9591e035852f9c3"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "5e975725703a2c2290718109e20b7e4e"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "95ce3b8949888c864e0286233f547bbb"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "bb405546e9981eaa1ceba51a21ce33d0"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "e586e10499ed3c1e7011d884f514840b"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "777671067571c1e95cfc2cc0a08441f3"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "3b0f2004cf52a35f9dcdd7aa3d8088b4"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "c728669cae3900353842a2278fbef3ad"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "85e47ebb57ff660d4416f3a06cd44abe"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "b80fc1c242429beab3a3521735576888"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "71cb9ec63b85296de0af6e7af863931d"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "33904d02b1128b33e4eb0cb84bea0ac0"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "689c612533e7d24aef423ee6fc1d0db1"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "cae6bb5b8d462a16ce67de487d21a4b9"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "7d60dd0857e3b28b1777387670650903"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "820d25585870bea895b01f81347ffdfb"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "f31d246a38d6fe96e9ea2802088ff961"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "1ae7f0bac9157c15a72e2c26a5430a12"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "9a231dab0df3028a523da32811a54118"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "4a606a7bdf2fd6adee9eb4d5ef164c9c"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "b0175b0f071462ed71689217bb351b7e"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "8b45a6ef00f26d83fd8bf923ecae4842"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "21bd8a69f03b58c38a93484d642a0bbd"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "5e64e65906c3ae7a95bb5d5c923b26c4"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "2c925c23331b2d58cd1b0bc49af24ca6"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "fd54785ea08abc0160cb1ad7cf6c50ed"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "a2200052600cec424bcdcfbc0a3bda6b"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "272fa9c0d828d1be562dae5fb0b36a3a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "d9c6450862b53709e575d196f9d50b74"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "6934e4c83043a462e4be1d2dac7b7b1b"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "65af96090238657b007791f71c865037"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "02097a1af5c36e35a38b8728d3e617be"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c6b248cdbf2f9498962c633661960044"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "38b517bc57157f6a00716453cd5cf0bc"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "7c7c9ddf89040cb01be8fb5fa6e6cf83"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "c60aa072086f7468741fe54c88bc642a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "fb0d2a9cf41f3d73d5f89600eb6f3bb4"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "0e238f1da78ab74b7f5f3f4892ec5b56"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "80b2e383506c084c3b045a8f99faeaae"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "d25741b42c760473390cab06a2136243"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "89a9d99aa9aae49c302803952d822004"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "3a2ab1cb23b982caa508b5626dab7a05"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "1698d5ecf3b4cfbe8731662ab98d6df1"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "dbdea0a99f534f1c5c64090f25985559"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "114661a7619c278f1443cf588a75ea69"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "76fc0b68347ffaeee7cef524bf1e4b17"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "449b1b926bade94e83d3ad506b06ca16"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "e9dac748321d243068efaa42a09dc3b3"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "a305db8acb2bbdd99683c52053c35f93"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "da3fb6573be333b94142f1db791ddbe3"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "aad04d019188a70a05650b46cea03879"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "626656902c40d8089e685b4af47715b3"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "80456733f702142dc1cb28a673f09e3a"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "a6182f294b2b15a4af5f5b419d704c72"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "d9f86012e0b5e760c931fbd1fc2f5abd"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "6238f0506e5ec0f50ae592e0ada71ff7"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "96c4ad3cee9f814e30d389019c67c8f0"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "22e91890b0396df7c21eaee0262f9bbb"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "ddb52da549365b5f5e748c8cb5304333"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "b72e7ce32b9f37f664124dcc2c44a4a1"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "94ebba7ed196a0535a926bdcbdde4fb2"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "cfa0e4c5aa06c5e3efa7facd91f55681"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "3814711e7a7b8ea81e05ea1ba26d2681"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "c2dd12318ed482318c5ada6f770a0930"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "e64679ca9f99e4195bff268cc2f5b97b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "4412f6363cc441f3bd6c24bdd762d087"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "302ad819fe0435c8ec70da7d9b155cbc"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "754f5278f83e15157eee81b132b2fda5"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "f299eb8cb3801be1c63d68557528da34"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5302e38a61ad0fe2cfc7ed8e02c28284"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "d63d6837006c6d3533dc908d4b9e66af"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "dc1e3efe302f366256eab9f0ebaf415b"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "fd0a98cec43124b53762f4f8de0c1c1d"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8ddad7db8310e662d6422796d68e5f9e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "8f4e9e34b05b622292fd0868c7f5d3fb"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "8e9494f0169d6ad2976f1f26c98f65d9"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "78813abb4498badabd061a28a630df9b"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "6002a1f469b3ef31f52955e4a024fad0"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "a9b96726790c114c5853dd826ee58a86"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "cd98b548f5503da7a4b676f26379081c"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "19bfd7c992789b635b8b048352b920c9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "dbe2f0d341328ea094921e5558cf8d3d"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "f423f558848881e6acd67df39bea29c1"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "000b5ae72a4b26a9f59b5a0a70d82641"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "1ea6a47689e1d0432a989fa6cc20d496"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "b3e5144429ec2f111812b0f19b8d6b63"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "1d64edc4edf4fc5d9d44c5e9bb6effef"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "696b6cb7fd2ba570d7774c9788c937a7"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "46f097a74b808734cfcf301a0bef7d4a"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "92d6392026619532c775b345a139ea6e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "e0f32a7e2d7b9027b6a249035db3b55b"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "76593284a60dd67e81973cf340efccaa"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "0bc096a16c4bc8aff7f3966e7a169fe4"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "fd7b203aaa881b81d25c9488c85ef9f1"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "0f2eff3144d150130201423a43fe538a"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "45caf4dff52d443ee2671b1cc398ac1f"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "b96005b81f2628a862a89378c4b4403f"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "37f2b530298ca81f22dc9c0a6cbcad4c"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "6e0dc9c3794b9f6f86be7c09d67d0a7b"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "65577131297101309ce7101cb3cc700c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "96c7eeed502dfd2aeefddd3aeda86835"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "723abfdf2cb7cbdb67a087b6eff7cd06"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "00deda226a2e079584c47d1299b6e04d"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "a8718e1557e9d2584e44d18c572c007d"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "15c6be5208f77fb8837477e4d8ca01cf"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "91a7836e3c64664a5d68f81a0ecd5d4b"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "a131fe6aa147e5e1631d539a6c3fccca"
  },
  {
    "url": "404.html",
    "revision": "c274b7b0b5d1d9870919b1d5846edc86"
  },
  {
    "url": "assets/css/0.styles.fbbe2a77.css",
    "revision": "66ff016f7409fa70fbeac58e867b4144"
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
    "url": "assets/js/10.35857dd9.js",
    "revision": "d8926842eae3f5215a8bbb0acaf6d131"
  },
  {
    "url": "assets/js/100.8f44e0a5.js",
    "revision": "aa1fd304e6083f3c7c8291493e4b2816"
  },
  {
    "url": "assets/js/101.b2dda452.js",
    "revision": "661c415058f2ab0c10d00bba37a471de"
  },
  {
    "url": "assets/js/102.39b97480.js",
    "revision": "f463125bc489c171f0169aae14bace47"
  },
  {
    "url": "assets/js/103.54b28125.js",
    "revision": "d56e9095d9c5b474917b9f7f6c986623"
  },
  {
    "url": "assets/js/104.d10a2619.js",
    "revision": "2844eb335acaf56cafcd92cf945bf5ac"
  },
  {
    "url": "assets/js/105.60dbd0f1.js",
    "revision": "a99bdb30058d5da391e9213e2a86cc02"
  },
  {
    "url": "assets/js/106.0b9fb3e7.js",
    "revision": "a6642ce17362f250e593663a2d61df7b"
  },
  {
    "url": "assets/js/107.a91103d9.js",
    "revision": "0f036b3541c8ed64dfef38b2af237de9"
  },
  {
    "url": "assets/js/108.34eadfa4.js",
    "revision": "e09abdd4a35a1bab492c8b102f94b327"
  },
  {
    "url": "assets/js/109.09230eb9.js",
    "revision": "0e3be7acddc8382f202f3a1bbec0e930"
  },
  {
    "url": "assets/js/11.844d878e.js",
    "revision": "a8fcb410d9fa2dfba8279c97ba4a938a"
  },
  {
    "url": "assets/js/110.16c59fb6.js",
    "revision": "f735cd47b81f9d4f3f6278a6e73a74fd"
  },
  {
    "url": "assets/js/111.20238ba4.js",
    "revision": "b5e6e445d1b12932cdca5db3cdf4b85f"
  },
  {
    "url": "assets/js/112.00ee18ac.js",
    "revision": "cd9f34d65f5b0abf19f6ec3eae6f3cea"
  },
  {
    "url": "assets/js/113.bfb95327.js",
    "revision": "73d2b9db1c48b8a6a71c6f5621613629"
  },
  {
    "url": "assets/js/114.5d4d006f.js",
    "revision": "b0a97c39bf50caf825ab5b931f95bd38"
  },
  {
    "url": "assets/js/115.ad49df57.js",
    "revision": "ee93a2551465f294fdc32f31c03fb666"
  },
  {
    "url": "assets/js/116.c8f59c5b.js",
    "revision": "bba4bd2d145833ac5cc6a6d0266b6964"
  },
  {
    "url": "assets/js/117.4522973c.js",
    "revision": "52a550ffc49b2aab41d7b3ca493118a7"
  },
  {
    "url": "assets/js/118.9ec622d4.js",
    "revision": "9337fa2ab70db098260b5dc6b5965b99"
  },
  {
    "url": "assets/js/119.5f83e1db.js",
    "revision": "a9f946943f053f212e90658afe90a9f8"
  },
  {
    "url": "assets/js/12.b524b462.js",
    "revision": "f5e62d2a46e8e94b3665d931bc07ba53"
  },
  {
    "url": "assets/js/120.eac437dc.js",
    "revision": "0240c190085732e766e0e45ee1c5cbb6"
  },
  {
    "url": "assets/js/121.1d9468c6.js",
    "revision": "54d02ac7cf614eba78dc5a0bb22db384"
  },
  {
    "url": "assets/js/122.e56cb48c.js",
    "revision": "facbf24c679e8dd61b4c669f9192816c"
  },
  {
    "url": "assets/js/123.98208e2d.js",
    "revision": "5d30a7e713013943f3161f79bd96f008"
  },
  {
    "url": "assets/js/124.d46a6ff1.js",
    "revision": "35915afec1700c1c53a596a40a9795e0"
  },
  {
    "url": "assets/js/125.5d1aebf6.js",
    "revision": "700cb9ea3ee6aca1078b1a0ff028b292"
  },
  {
    "url": "assets/js/126.b6c0a43b.js",
    "revision": "35d3cd64dc03120bed82a3703c2df549"
  },
  {
    "url": "assets/js/127.7d788e70.js",
    "revision": "ef447b237ea69012c33fd7e5f2bc9548"
  },
  {
    "url": "assets/js/128.397daf1c.js",
    "revision": "9f9e2160b7355bb0fdd54f5d26859983"
  },
  {
    "url": "assets/js/129.41094fd6.js",
    "revision": "8c72e1123ef0ebc8972b32b2c5ec1260"
  },
  {
    "url": "assets/js/13.9b26e67c.js",
    "revision": "248fcd3c51062a4ec33edf0111707c96"
  },
  {
    "url": "assets/js/130.b5f0ae77.js",
    "revision": "76d9ce1bf58fae6596f41fbb2a58a2d9"
  },
  {
    "url": "assets/js/131.638cd64d.js",
    "revision": "525f520b62fae3c9bed1045a05602d0c"
  },
  {
    "url": "assets/js/132.ba5be34b.js",
    "revision": "f2b8e9779943c721ca2179a083151015"
  },
  {
    "url": "assets/js/133.d76f69e7.js",
    "revision": "dfb406b0d88384974a0ab0b3385f9f7a"
  },
  {
    "url": "assets/js/134.d00e08b8.js",
    "revision": "143d1999e02069bb81b2cdaaba849333"
  },
  {
    "url": "assets/js/135.e8192cae.js",
    "revision": "15d9d73f6b5fb13b39dfc353688a966a"
  },
  {
    "url": "assets/js/136.2198d49a.js",
    "revision": "894d8ea54261a5bdaf04d954c9c6f089"
  },
  {
    "url": "assets/js/137.e98ba6b8.js",
    "revision": "db82179545011c34ed2263fd4160a7f0"
  },
  {
    "url": "assets/js/138.f17c4e3e.js",
    "revision": "fa663be490408b8f0f0a40444aa0de73"
  },
  {
    "url": "assets/js/139.51ea954d.js",
    "revision": "e0323edbaac949ab3f6a72d52a30b0b9"
  },
  {
    "url": "assets/js/14.7628eca3.js",
    "revision": "017ba794fc6329291188bbbf4de1d286"
  },
  {
    "url": "assets/js/15.70d5b891.js",
    "revision": "30ec4c9bf57bad9ddc1d27b252934412"
  },
  {
    "url": "assets/js/16.3fe29d7d.js",
    "revision": "8806574dcfc78874df126c1239ee4215"
  },
  {
    "url": "assets/js/17.de0c9697.js",
    "revision": "2a34f32c27d3c02d3b0ac1409ea612fb"
  },
  {
    "url": "assets/js/18.5db46c1e.js",
    "revision": "188f972c9377736c8ecbf21a7d7a17df"
  },
  {
    "url": "assets/js/19.aa2b7f24.js",
    "revision": "9915f667fb50c05eb38e37e89bbda1c7"
  },
  {
    "url": "assets/js/2.a30a3103.js",
    "revision": "2f06fca1e787d9c9c630ee04c8bf3bef"
  },
  {
    "url": "assets/js/20.2e89e8a5.js",
    "revision": "80c2bb9df27f081b57a3168be7877613"
  },
  {
    "url": "assets/js/21.e492622b.js",
    "revision": "94d966668858cb8797f6c0bc5fb87126"
  },
  {
    "url": "assets/js/22.3ffce076.js",
    "revision": "cae589fa5d70a6734c64da8946f61a92"
  },
  {
    "url": "assets/js/23.ca17aa44.js",
    "revision": "184d52989ae853caa98ac2fb6604eaab"
  },
  {
    "url": "assets/js/24.725cd654.js",
    "revision": "21f0c4850eecf46973a5331fe0b8c4bd"
  },
  {
    "url": "assets/js/25.412a25f5.js",
    "revision": "3534430e578f67bc013b9bbe35fe5862"
  },
  {
    "url": "assets/js/26.fa5e707f.js",
    "revision": "ece3f82f5d0b1f887c21f5fea27afa9a"
  },
  {
    "url": "assets/js/27.e61805d9.js",
    "revision": "776f64bf452983300e7d1690676928e2"
  },
  {
    "url": "assets/js/28.f1afb74d.js",
    "revision": "b32e9c90dea4f57671778e6552b39387"
  },
  {
    "url": "assets/js/29.2c642c91.js",
    "revision": "cdd04be53984ffa2d82feb664f7b56ed"
  },
  {
    "url": "assets/js/3.dfe0ff5b.js",
    "revision": "53164525c23476780843740853e8033e"
  },
  {
    "url": "assets/js/30.d4ea4077.js",
    "revision": "328b20e7feb06ab26bcb9ccf218744c2"
  },
  {
    "url": "assets/js/31.2fca18da.js",
    "revision": "aed3be91b8c692b74e3da31f9cbb3ec5"
  },
  {
    "url": "assets/js/32.4e227cba.js",
    "revision": "af50fd45457a1ae144481f570b87ad9d"
  },
  {
    "url": "assets/js/33.eac14764.js",
    "revision": "aeab27d0d593ab5fb7c21653da3e1792"
  },
  {
    "url": "assets/js/34.d9f75b35.js",
    "revision": "362e95b84a69c8a89775e24af5f4e7c2"
  },
  {
    "url": "assets/js/35.d802dc58.js",
    "revision": "3dee9dd36eee59d849d14c0af0cdef0e"
  },
  {
    "url": "assets/js/36.21ee0ad1.js",
    "revision": "04cf035fd7941d5bfaab34616882b561"
  },
  {
    "url": "assets/js/37.4e62905e.js",
    "revision": "02ec089f10a1b04ad76ad785f46f0e05"
  },
  {
    "url": "assets/js/38.9786ae09.js",
    "revision": "c6de6eac75f96b8d67a45c20d7c728c2"
  },
  {
    "url": "assets/js/39.e49ef9b8.js",
    "revision": "7dfcf46c05a83653c3c59f47780ea760"
  },
  {
    "url": "assets/js/4.113b7809.js",
    "revision": "e2f20ba9efbb7ee0f3c1d1ffe96a7ddb"
  },
  {
    "url": "assets/js/40.0dcbe372.js",
    "revision": "b33775eed14797a322f6641366a93a32"
  },
  {
    "url": "assets/js/41.6593db50.js",
    "revision": "3aa7cc3c5d46244f4224f415bcbe635c"
  },
  {
    "url": "assets/js/42.029317a9.js",
    "revision": "70b870d905a0f3ef25becc3b9009d97a"
  },
  {
    "url": "assets/js/43.22419c5c.js",
    "revision": "8cfe5ced4d8b9529a7d2aeb94b8da706"
  },
  {
    "url": "assets/js/44.70d14f9c.js",
    "revision": "ec0dbc5e947fe7beb056a86fc6ba4cf7"
  },
  {
    "url": "assets/js/45.0366dca4.js",
    "revision": "34481c5a445d972df9e689c4e723192f"
  },
  {
    "url": "assets/js/46.3bfffe01.js",
    "revision": "068e6d85acb4dcfe7c1ffb5f6a268415"
  },
  {
    "url": "assets/js/47.1a7739c4.js",
    "revision": "602c05ebeb6f878d7165d500cb75d2d7"
  },
  {
    "url": "assets/js/48.8b0e0f21.js",
    "revision": "73751326037798da806668642104612f"
  },
  {
    "url": "assets/js/49.12a98ecb.js",
    "revision": "bb422d892388153435b6f9a9685dfae4"
  },
  {
    "url": "assets/js/5.ce99a332.js",
    "revision": "ef7f8760c7a4d3e5e63b328d7a253548"
  },
  {
    "url": "assets/js/50.447687b8.js",
    "revision": "3b6ee8797e518f731742056ba7e87a6c"
  },
  {
    "url": "assets/js/51.e2bb9210.js",
    "revision": "19761ad5ee888300ea9a7fc5eeac3660"
  },
  {
    "url": "assets/js/52.a228f13b.js",
    "revision": "232befdb6b1d81b18ab79115e440abbe"
  },
  {
    "url": "assets/js/53.54edd495.js",
    "revision": "8165ebf9cb0abc258b8f270d95abad6b"
  },
  {
    "url": "assets/js/54.23f25432.js",
    "revision": "0799448220981d0024027afea62a23a7"
  },
  {
    "url": "assets/js/55.41ee9575.js",
    "revision": "60087dd37ef9576b86346bb67ace2d93"
  },
  {
    "url": "assets/js/56.461a5af1.js",
    "revision": "352c8fd2f56a767699e85b39065e4d5c"
  },
  {
    "url": "assets/js/57.c0023bfc.js",
    "revision": "076928f76aae7a6e386b502376aa7906"
  },
  {
    "url": "assets/js/58.f948b044.js",
    "revision": "122ab10bc87ecb6c18a93e5c5f1ce15a"
  },
  {
    "url": "assets/js/59.c9e007d9.js",
    "revision": "0dfffc292c769ca30a9cfbb03064542e"
  },
  {
    "url": "assets/js/6.52bc9ee1.js",
    "revision": "7c963830775e78a0a3534d451db4210e"
  },
  {
    "url": "assets/js/60.412ddca0.js",
    "revision": "99ab0022857d5d29cd4ea40a734fe797"
  },
  {
    "url": "assets/js/61.9fb68905.js",
    "revision": "764cace0e2f5cc6462121b9d349d03b9"
  },
  {
    "url": "assets/js/62.e7d12712.js",
    "revision": "deb3d5e889e281486eea6b6ffbc27950"
  },
  {
    "url": "assets/js/63.cda3f00b.js",
    "revision": "19ff55e6391b2a2683ef35fa998e8b49"
  },
  {
    "url": "assets/js/64.e25778d8.js",
    "revision": "9e344c994bc04959bf14098042511b69"
  },
  {
    "url": "assets/js/65.01e1b8d9.js",
    "revision": "a7faf3d0dfa917744bb90edb8a10d407"
  },
  {
    "url": "assets/js/66.a0dbc271.js",
    "revision": "390eaf0affbee40714b1dbdf33282f20"
  },
  {
    "url": "assets/js/67.ae39f307.js",
    "revision": "d90c21fe5a6ae119e14b83a54271c2ad"
  },
  {
    "url": "assets/js/68.5b11bdc2.js",
    "revision": "d638ce181504c21d6aece752ff1e2e56"
  },
  {
    "url": "assets/js/69.eee9ef7a.js",
    "revision": "975152695c11ef424f8f2aabee1d1f6e"
  },
  {
    "url": "assets/js/7.9049a077.js",
    "revision": "53834182605b48b573632d362e937dc1"
  },
  {
    "url": "assets/js/70.28aedd34.js",
    "revision": "6c331c1d7095a578b2bc0e57f4614593"
  },
  {
    "url": "assets/js/71.f451a366.js",
    "revision": "979ff2e29d7c0640f8c477e55e811c54"
  },
  {
    "url": "assets/js/72.706a1926.js",
    "revision": "b79110e05a6f1bfa6dd0fec0577ad9b9"
  },
  {
    "url": "assets/js/73.116eb797.js",
    "revision": "75e7583241c2551d581e78ea7e2f3f0e"
  },
  {
    "url": "assets/js/74.a7f96947.js",
    "revision": "14fc1a1f548e801c73c79b397bde3a37"
  },
  {
    "url": "assets/js/75.af625e48.js",
    "revision": "c98f365f22dad6ecff6bf4f40f241860"
  },
  {
    "url": "assets/js/76.9fdc214e.js",
    "revision": "f45f1ca631d1f7f15e7758ce278580d2"
  },
  {
    "url": "assets/js/77.3ca8abc2.js",
    "revision": "236ef6eedd5fdd6d4cb87db5968742a0"
  },
  {
    "url": "assets/js/78.8abf6fd7.js",
    "revision": "924e96ae04788d5f845966ddc24f0360"
  },
  {
    "url": "assets/js/79.eba31189.js",
    "revision": "0bcc88e78c271d0664c3ab0bd14d85db"
  },
  {
    "url": "assets/js/8.a94751b0.js",
    "revision": "05594de372452af5cdb2ede58ed6ef6b"
  },
  {
    "url": "assets/js/80.848515a3.js",
    "revision": "b718648ccf1c86b7de087aedae9e508b"
  },
  {
    "url": "assets/js/81.a716e0d0.js",
    "revision": "ea3792c33d8ea9f0a2c14d5c1b5d88fb"
  },
  {
    "url": "assets/js/82.938f8db2.js",
    "revision": "e273ed81ce4f822b9445430fb5463dc3"
  },
  {
    "url": "assets/js/83.373815c5.js",
    "revision": "26633e98729cda9e2cdf7e2a57c64d06"
  },
  {
    "url": "assets/js/84.0e7cdbf5.js",
    "revision": "f8e5feb8eb29a63397790a17617bd062"
  },
  {
    "url": "assets/js/85.a83c28b2.js",
    "revision": "03a833cdf949673a5f067d98e837afea"
  },
  {
    "url": "assets/js/86.062967f4.js",
    "revision": "7540fc8447f886392df8d77ff7dc306b"
  },
  {
    "url": "assets/js/87.92f301ea.js",
    "revision": "2964ae79093cf427d1f20a7293a14c62"
  },
  {
    "url": "assets/js/88.da72158b.js",
    "revision": "d150f051ea68acd1bc0fe4e71510f476"
  },
  {
    "url": "assets/js/89.408af7ab.js",
    "revision": "505e67c68df313b0b5d7e72384455513"
  },
  {
    "url": "assets/js/9.067a2bd1.js",
    "revision": "c47c4bafb7bffd279df450f9fbc3192b"
  },
  {
    "url": "assets/js/90.2b841437.js",
    "revision": "57a8e07d2a29ff0527a71616e27b16fe"
  },
  {
    "url": "assets/js/91.2aeddb2c.js",
    "revision": "d217b8f7a07c45ce99e7ee990c5b9b94"
  },
  {
    "url": "assets/js/92.cf96e6fb.js",
    "revision": "9d1222a0b362adab9397579bb83e9155"
  },
  {
    "url": "assets/js/93.8fbc5682.js",
    "revision": "68eb3a303e0d2891fa64667a1c5c8fc7"
  },
  {
    "url": "assets/js/94.42b8ae3b.js",
    "revision": "534c2dbdb4c7e135611d83edf67f7564"
  },
  {
    "url": "assets/js/95.7fa40ac2.js",
    "revision": "9c73b02d1a8f97535efd1cda2ef9dfe0"
  },
  {
    "url": "assets/js/96.2135c6ed.js",
    "revision": "0329d8ffa4a788a13eb913c94d9fa0fb"
  },
  {
    "url": "assets/js/97.33738d35.js",
    "revision": "10bbb1c04598ca2d24d79cff404edec4"
  },
  {
    "url": "assets/js/98.5fcb71d8.js",
    "revision": "23c1bd03a2efd3632e389faecb583dff"
  },
  {
    "url": "assets/js/99.10c6eae6.js",
    "revision": "804dae50ca19b331da2bf63c5a3b5d98"
  },
  {
    "url": "assets/js/app.d3be1cd1.js",
    "revision": "ce404d1a47d5c13046cb21c5d9a7a1c3"
  },
  {
    "url": "index.html",
    "revision": "8312b0768c5fc8336155d443ee880db4"
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

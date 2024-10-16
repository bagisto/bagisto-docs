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
    "revision": "bb88f33d32e4245e318257fe271f0704"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "fc95798b5c2ec4061a862ff317148f08"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "bc17ad5b1f899c9ab7c586d602d0dd16"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "bec8490f4c3acc4387b65a06608c7c7e"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "4b14620400807ecef7c4fb13773646d9"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "0289c64502e80c3a4345c5b1dd2e6a6a"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "40e5cd3bf3a9938f70a4704cd27bec8c"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "2c2b81665c0059cc86aad271047b4679"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "58abe8adc275620733ba27a38813100d"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "03139d8cef520c890bd923b06dd063e2"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "902975bdb203387a00688540033eaa5b"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "369b8cdd791a2f1a3ab91fcaf003ad91"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "a543cba45d00b8619cc73138782f50db"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "0b2e4f7bc6467d37e2eb16a37442f7d5"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "1c0ff4dd540bce98b0cb248c492df277"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "5c594b622baf3777fea8ca579ba7d33c"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "6c1adc1527874afa53c6089c403a18e2"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "67bb8538a11443ad45fac48727c06079"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "de77edce1c5285516b26452bf31fb861"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "72290cf287feba80b2232d30c7a620fd"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "f15c58bcb109e8656cdd77b57ee45731"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "397774ca9dc7eb72593a68b676f88b4a"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "8f8b4be276462e6e3bf95611032ca170"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "0bc2fb54ebd7086f99a35e0bb79689e2"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "faa6c0e421b95158271d69fc821fbca4"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "777f7b3c263db6f296e716aea8ef2537"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "a287decdbc34713c96ac2240f597fd1c"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "92fd3e1c51d59705e4a7d3ce84d3b22a"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "185360ff9563b4ee185fbfce297eeacb"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "b1650ce24608824a6d044405485c7c7e"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "c86fc24a80e95e2759f59b73de886229"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "b28a6f3aef9f9b670e39bacd8d552223"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "8657eb0e6877ae9126c7aa4b0ff48fd0"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "15334c535b6ae44d66d506dd55c5f5ff"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "fd5ddd6394ed82fe486d0a43e10e7215"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "de5499d5a2258dd0b54cc1d9ed32552b"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "f603c2575c030755fe0e4a65fc72b38f"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "671318c677e1d6d146be0cf89cac07b8"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "7605ecea30b93ea93a9522ba76354afb"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "9c80b004844f4c06a9ee3d3229a9a029"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "a41f9bf62ff83140369b483ce57d07da"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "526e2320f0bd401433aec554bf1159f6"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "160bc38e2a09d3239b3d0faf16809f01"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "59303a22a57d05b16d6b5a789c4dc952"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "0619f5e8ae3a280c52b81a908fd42fa4"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "ab43eab48ec820dd2e0cc53c5b6cea33"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "0f441cf0ef0a02ef39c1ef4900debfc1"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "69c88905321afc3e87cb6f65e3508a52"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "aafda79aee75220373391db2d49fbb69"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "ce4ff62e14dbe62f11dddd2470a419fe"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "45861cd3c1d910b263a243a4c60160c3"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "aa6f5a6f29a7802c20bab8380ecfee45"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "f47847360b830007fd6ae37aa91b74c8"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "e947fabc7223ce0d3dd0fcc4cb469184"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "4a51b8134f0198b966ec8694f17ad8a8"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "9ffa483b46f8355005d6d9c298e181c6"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "6f54b0cdbd9775a4182c1f0eca420d57"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "990a563d43d4ca1f9f9359089bd29036"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "fd65cf2e37d16c98f0b9975128ab3d6f"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "093e9947c05121fd7a729acb5f0118f9"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "0f66220413c452b1f033884aa43873a5"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "ef9e7a7d55fdb9f049aa76ebfda5d43e"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "4a45209a9bdd10d8e3af9f96bbe16fcf"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "cfb5f15884af57e65e952af43dab5df2"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d3f42cee761e108c9dfc02fb4025d89d"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "4ee00198b0f77ac6aa8b52a8f2d98587"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "18ed6867e4a0b2bba939556f0ee58581"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "569f229cd7c2cfa6e9dced7c45ae39f5"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "fb38402f2691cdab21446ebb81e0a4bd"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "f3cdd95a1f12d953b23a274453051ab5"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "093c908069f50e5f6e5e12758494aec9"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "0af832cf2e7dc601f5aaf7d6423b63b2"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "71b960d723374a24e15d5b2fa13bf09c"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "8be837c5d04e33bd99683ffe83ec505e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "56843cf878855d1d077c372aff3733a8"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "08e022d6851bf57b39531dc84d2004c4"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ca4b8f140d662f7feabf2ab97ad7285f"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "d32ec36800ba714ac6885149163079c0"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "d8d2a3e935aef2e329c0f6d56f734d07"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "50eb0b481a406b50a4fd2290d4579661"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "865d6db31df6dc4de2b921d91c3c2357"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "cc9bc77512db950c068a5c5147cf72fc"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "fec9bb9fd754e672368b2068374e598f"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "1df848dc02acf138e48a6cae66cc44d7"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "8c093a23b07a7edd14c44568a1c369b5"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "3622631aed32625da7850e408848c527"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "a3f2029312ef8afc0a3532fa1618174b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "8cd6ff4aff724f1014f6e049b207cb26"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "6a62fdeb96e7ec9d5f05af35ec8ecf3a"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "006688fdf61651cae0a987aa35eae8da"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "20904f22a7bd3b3499fec4ea554ab061"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "6d938b3ee8b8317b0490f83b48a520e4"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "77f3ae3df70703fc1f947c5b504e230d"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "6f1ebba271907c30967fd8b420fe318b"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "9c88e1996208baa38728109f8cdf4460"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "5ad53311c03bec6fc3efa3fae14e2de5"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "6397bfbbe9e2a1ec019e4f28521101e4"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "5cec3d79edcd93c0c4fc26f9cb7c5b9a"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "855432b1953441a5d65b33756a5544f6"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "8ae20694a1d0b09e93e1231979d43622"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "696ec330fa438214021bc7d0f49a0deb"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "c2e2a013a2e6dc1c1068b014cb92175e"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "39214bc17719889e4507966aa95aaea8"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "989cceb0f49a2a7a959b52c4e5079e26"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "f10049292c325a0d989304f74480ab64"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "4f4cd2b2c68668e85a3899bc50f16fe6"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "506eff8abb274b50e1fd3c78d2fc3224"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "88e1ba66cdf7efcaf4300baf115c348c"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "1c4ae69a31b580ff5b0b04122926facd"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "ea1efb3b6a7572f7464ff3e42ebbb75b"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "fb416b341a0222b5265cc38ecb7c0351"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "630de722eddfc3e5e1da382fbb5abc3c"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "51c8055564e660993c574f816bb43df1"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "5a49e61e540cfc8786173e9b9299ca18"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "549281dfd0b60edd32aae816bfc4ea95"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "87a9d90faa0e3291ba76a0da33405adc"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "c69d5fe6483827dcefc7658b136f967e"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "70b20bf73f910911d2bb8d7099365395"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "090b122fff16d96511e53be934e41328"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "fc74720fbcff9b68639ea961521e356b"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "6c52ead72da84fa5e8995aae2b131fa6"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "d9f5ef6aa285f4537e84029e2634fcb5"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "4344aaa139b42c820efd602b613e07ff"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "34ade045773a89ba4344534c905e5434"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "95a496aceaa83789ba0a963ade7b28b6"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "fa171f9cb9cef382690e2d77424f9241"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "2a1e28581e826aa7d55223e26fe22017"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "413b72ce2eaeba6629e702d73ca96a2a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "0766fdedc990a8aa0d35149248c7969e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "fc1a423ca01a5795e3de67b4fbcf8b14"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "544ea8f28ca775e12c7580354bf04fe1"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "5ce26a31dc5c8d6b12281569abdc37fc"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "7b83b6a5d353928f5d1b2c606eec7476"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "a6796e34dd39eee6adddbc90b929ea36"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "4113c98871cd5de6bee6cb5b327b194a"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "73e78ed29692e78b757fe0f1c8bebf4f"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "94bd3e746d55ac8f5b1a90d91016a9ef"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "6eb767b7995f39cdd65a287f781407d0"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "075b6fe3d8510e18593f986c3525965b"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "12329d9a590c223dd5484ce36a212d3c"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "2b3aed22b90da247debc4b79a178d2d9"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "926baa24a33a402de35090200e758c31"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "e33e8b80cb3e6965d964adb9d3b1f1a4"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "36cd33883b95c5670656fa2822103255"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "e13f25ac6c446674158f48d4b700c500"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "6a3d35a0315abe085017dadb8bd4c750"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "0476521ff27d5fa0c697d9d8cebd0e69"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "c235fbd3b8dba24b189e35febe70363c"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "4792fdfdc6a5eed89492b66468d3ba81"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "53302e88c31037a7fd92c82cca110f7b"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "b09a88d2468cce72c95366aed0312417"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "3ce85392481b5e916eea429738ca45e9"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "6d855f7cccbb102d1b8574187a55c21e"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "cc9fd295dd367c35a870476b700e04fd"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "1508570a7b39a64684932d3b4e42dc71"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "29fe489680fdbbdf9d46b3fc77281a48"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "63f1f51ac6955f3594d3520aee2ee87d"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "9010ae4db014bb2b7676cd3c51402b7f"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "f08c7c2fed942de7c91e2c1fdd97d93d"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "5c6b0863fe11b507248ec96aa6589d32"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "fb26aa54577adf2fd04b2a5cccd4a701"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "76ed9414c6f648332109765bb2395d59"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "b003cf89c8bd4aef083d8ab4b2f45637"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "91de4c982c3de490f120cd75284ddccf"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "eb396746a568205ce3dfb6b475d1f068"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "58e494e1082df5b6fe419a8c1f98de7c"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "63f27efeec2268c0f54a01b5fe026def"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "71be6a706abfe10bf7e2dc928e38c8bd"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "40038c838b088f913b63ce05fcd22883"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "c106943a351ba084b8f58b54e9af12b7"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "69d979da813426a9ee52c6c386324f64"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "159174d94b41ba42aa59f58a777af6a5"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "669199215c48c3ff8e40056a09ec79d9"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "0048891087da14c7eeec71c0a9781ade"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "35e498397744362199aa81555d1f648c"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "ec30aebaf976ca593b284aea64a3ee35"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "a598f388f71e6273228777bb9353cfe5"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "b554110825484e0007fbbab8e7139544"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "f233e69011ab03c150e985b25c09689d"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "d50877dc6bf9dbf976e042dbe15d199d"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "a00bb17b75c9e352886997b46a9d93c5"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "d2ea1cedde1887c1a71802efa27c9b5a"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "3e72b6cff3b7b1e814152f0d1cd03285"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "c7a6aec2f3c4eab89c8618cc66b28193"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "77d4948e0fed0f4623d13e9c4c021703"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "6c45fdd3f5e3f6aa8a2af9660d76c07a"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "4477a320f5891a794818df236fa4e83d"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "3f39fd8e7858c31f0b6fbb842f69e846"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "1d2338f07719f1e0c269bc03e3004c4b"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "208760dcb455a8aaa91100abcb9dc069"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "70301012538398f606fd946f8319f75a"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "d6c9070dc6b51c7359a035b6e0a6f722"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "eea113073178e8be79130442b3f096a4"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "738f81f4c2c19960e6d28c9c2b60b7ea"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "927f05cdea5455f4202ef15443beb9c0"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "d1e1cb09502356f6ffb61f5d2e3bc7fd"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "66eb3266037eb26dfb86deb850285104"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "77481493de205f6740a4ecf62b0244cb"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "13d5eb81dba736aa38f1d9bb4c869259"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "a355a1d9e95f02d2cf6906745731f50b"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "162705b2a60038b034c7cfae79b180b7"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "7efc15b2d9ff149db1e2580807ff53ab"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "215a089b26181f5fe1c775997b443d98"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "d3b4e3cc5b48a8c8d2555a1280031278"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "2afa9ffaf5d223d3a3a45a602e57235c"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "9f846c704667d9d3e45386a07df92ea6"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "6ba459defc35fa45b0fd9dda2237461f"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "8c2ab8060a7c8d3d7b28a0d47d695f1e"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "47434f907f0cd59cb4a3339c60118496"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "54419fbd56777bfe6aae07b53d3448fd"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "3181d95a70ca66842b9b8a6fbad39c62"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "41a75b69f9bd85f7915496895a5a98aa"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "d10ce72928ee99d2e53656cbedffaefe"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "2941553668cad284e0760725f4f087bc"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "fb56805497c1b250f56554e79f001677"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "9cdfc303bf69695e9983376ef0d1eda7"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "ab938f49bbd8e9f585e0d2b268d4a690"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "8f8d03d1869fb61a2ead30f2e471c2e9"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "8c14c26315ff4ed00d179ecac6b2ee19"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "b2ad1cda224927f64a818d7061dee29a"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "c65111aeef0325c8b93a1dc7c645616c"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "2443a5645de1beb44c00261dbf085e47"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "ecec1d130a575d8ba1eed7dbb3cd769e"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "5b60dcf5d96044dcb813e3f9b7efb87b"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "f0f47d8e6e83941ea7ccfdbe94937abe"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "fb6e90e8b000534c4ee88ea448d2a50d"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "00b71af29ce86a123f53d41be9481636"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "c5ad7b40db4b15545056ba9afa4c2bcd"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "b4fb8ed46df17f02c8a880aa1bf47daa"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "f15d94aab94c3a9c57eaabdc39791b9e"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "0d1eede40029681412f1e06b51bb981a"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "488126abefea947abd173ee21b8c2487"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "51eadac3e5647438e8f5f2cf2a3302bd"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "e1005a506863a1618b0b80ed78c7b4a7"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "d91248e0dca6c8c3c75ed2e29d6fa2d6"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "df2349bf14dc4bf15ece2c5cc907ffca"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "4154c4830c92006cf1af468904803cbd"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "1b10738f36041cf4ea4065762aa8711e"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "8ec0838b59f6021f3dc030e16c824d75"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3f66e815ba80a05dfbf40498828bd72f"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "64d6e74bb5bd000bd7babfc3e6db1a19"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "dc85dad5c2ed53b288867b287df26130"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "b50ca3b661273c66503a93d66659eb6c"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "805402062f79046a8737b5a054ab3b20"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "674f7a7256b0912685d5f9b605b16dfb"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "215de14f00948390979f8e63961d4241"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "afdc99a9855f4ef61a25a9fd9d595c93"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "f55d60484a168fee6e3c01c3796b4e55"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "883d2ee07644334829ce3ae22cc547c5"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "3b6a582676710f4b1daca0996644ca58"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "9d795197bdcb5a232b8e997b6e574236"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "66eb372b1bbcfe4b99337d5f3ec738cc"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "74a4d8986ed019088a49a49f31a48592"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "a056d6d65a14e05efe99b389ca94b1e0"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "96141382140f2aabf8bb9e1d54549ae5"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "3be8904c9304f560f63b5e959d6bf3a3"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "f156d6a72f2e65158e66758b266c5863"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "ea720849ad518a3e73d9794fc6d2cd0f"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "8c74c757028e0d9d315dc1fdcaf1314c"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "9069ec46a64d24ede9253381883e26a2"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "582881f8bf3add225ae85c0780856ca7"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "486c588b7c4bafd7952e86f12846f489"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "fd3b8c6154ad8fda81e3c0c5b8008ec9"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "922a68867c959bc4a113a31f5f05d534"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "978bec2d88e66757f8eff21784da68b4"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "ad9daa230fa743eaf215a615b0d72b2f"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "054bb419208f718a1fee047b0049fd91"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "7ed80f57bf49f8e69e209935061a82cf"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "74156c83073561e042dbaa4302562ed9"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "f08438c271c513e95c0d71fe0acb8c89"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "e1207419a4b6bdc15c1c215268b0d0ea"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "61b5f29fbc7b1c0ad25787ba3f6b8f81"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "2145946aaffc3851a2e8194e6545c532"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "52cbc15b9a6f370724b612f14c514af2"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "365ed9d89731f91926bd1508da2adc99"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "35c411aec42c3d6758a5147a43b6eb5a"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "7ef6fe8e6c12ca266f06dfe6f4b34a3c"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "5e53aa9ecd7d8abcb879590879ba5eb0"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "b566340aca63115f7e78531d2620bf98"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "cc2d6fab585fd86daf11dd3c8efeb80a"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "5175ea1c710aa5448eab240e493e8ba7"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "dd1ce388d197101fe2e2a6701f3985c1"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "5568dd8d1a00daec281b57ddd7cd433a"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "0e4b1bb77b1efea80bdcaa09ce8ab089"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "69492edaa5657786edbf62b19bfff50e"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "c2ea06cdd0aedf945b8c046e5449e018"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "62a9bcf8e443da15fe12bdc75de0027d"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "a143207f55529db284f8ae442617db07"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "830506aa42f3f580ebe76876b5b87654"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "458bb61e2145a9b54786573284776077"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "ea6e8863b4dcbc7bae901b6c2ff29ee3"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "f7280a5b992a0f1ce8a24ff5362fb2ca"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "74ee6582c6a5cf66f5819a49365ffc07"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "f05f93208607ecd738649793c3f998e7"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "ddb9701ef5b1db5698143e343ad9e67c"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "d402cdcda95d66c55869f30dca3a8be3"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "dfa98a54439debd24e5ec1330e2fdfc4"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "426202303fbac3cafd482a3d8b96a8c2"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "36f64ca4ae0bb5bf51b15d9909aafcc2"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "36203a00c535f267789eb2306d787a96"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "371de2f366425e0af82c8156380d3061"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "75747e0ebef61afd220b0a3b56bbf13a"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "a5b7b55c165c8bcc78ce3c17224b0680"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "99a6ec5f39d65f5a567bd481bac54465"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "d040315b67c6ca53e7abe3826732fff9"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "df4a273a05ebe05155fe4b643563d07c"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "6d2754c815555860f364d85079d6cfa5"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "e17c29a619f70521a343922ff22f1816"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "510e3f258e94fff5850f2b32ed15304a"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "4aef3ac5c52460058d0eb30636c422e9"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "6d7e0b42fe065ac12eba1a23bed5da5d"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "0f97e04fcf61dc8ebc1f95c9ac76ab99"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "e476230aa2bf14069e20b80d5d7dbe3a"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "db587f6c8721da173d6b99db357fc570"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "94cd203bce2d3a14e5fe6d304b4e9d7a"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "26f275660a44b4374d6b6a908a6c1e16"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "ecfbc1c4e63b26573151f98365d2132a"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "8e9c9394287db43d145c6412fba98388"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "53d9bcab3f6e7c865b38f9f5c3534b16"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "d5ef7109b4f186dda790f04bfc8f074f"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "edb7b5e0fbaaf0e99967fa2b89110417"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "2b76c3acdb5ef570ba53ad20145be7b2"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "bad29f1d81d119ab420040a9ef9b3371"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "5533ecec78a6e0b0058f90e4242a8ef7"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "bcc352fd28109e0bde7df1ac3a28b28c"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "796ee88253193a2ca821657c31e4aae6"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "91dc6e5401667236b0c70e427890426e"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "4f8bd733a2e061e4222bf078394c8dd4"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "287aecf82a8a6c0fc1435f4b69344183"
  },
  {
    "url": "404.html",
    "revision": "f97c8e6e5da358c8c9ef0f504697a912"
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
    "url": "assets/js/1.72f1e422.js",
    "revision": "bc8155637c6dc68a5277da9c1cdaec33"
  },
  {
    "url": "assets/js/10.b7692d66.js",
    "revision": "427faca45820aba121ec3f789c4d78e5"
  },
  {
    "url": "assets/js/100.031a5896.js",
    "revision": "4c0d953fa45f654e9d41950a43e16c83"
  },
  {
    "url": "assets/js/101.0e865dde.js",
    "revision": "1c26147f9512ed4fd608280f4ccec371"
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
    "url": "assets/js/104.6d5188f5.js",
    "revision": "9fe20fbe3554d14802f9810c79d458b2"
  },
  {
    "url": "assets/js/105.b0197c01.js",
    "revision": "33eb9187e2d0762a0453121133b091fe"
  },
  {
    "url": "assets/js/106.db28e7b1.js",
    "revision": "dc802c230bb58ad1340a37adc68b22f1"
  },
  {
    "url": "assets/js/107.ee8630dc.js",
    "revision": "aa28805fd75ef67cf9015d659be98c27"
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
    "url": "assets/js/11.589caf18.js",
    "revision": "b30a8573a21bf4c5cb36554520719e8a"
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
    "url": "assets/js/112.7ed2342e.js",
    "revision": "146dad5bdc4a29e0065a09b479225ab3"
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
    "url": "assets/js/119.a6a4c979.js",
    "revision": "49c5ed9db630a655881a8873ea995690"
  },
  {
    "url": "assets/js/12.0e95f2a6.js",
    "revision": "87a3c89e493012d3de04d0187d08b175"
  },
  {
    "url": "assets/js/120.7dd18ad6.js",
    "revision": "8675e524104bc3e7e5ef83c04e007ec1"
  },
  {
    "url": "assets/js/121.8ac26daa.js",
    "revision": "2b4614fcf81292545db4c8c8a948fe98"
  },
  {
    "url": "assets/js/122.ffbb1f0b.js",
    "revision": "560fc8d8d5d15a580e584efd6d1e726d"
  },
  {
    "url": "assets/js/123.0d4e2205.js",
    "revision": "e83fc579b2f6e1b350e7cdefc78b8d6c"
  },
  {
    "url": "assets/js/124.13b28ddb.js",
    "revision": "34884cfa201f4d92be4a87bd018dc66b"
  },
  {
    "url": "assets/js/125.a66636e8.js",
    "revision": "dfb72e3e5ebc820dc07b3de560da539b"
  },
  {
    "url": "assets/js/126.589928d8.js",
    "revision": "952ea85d7c876ff1cb3c8f89d33350a8"
  },
  {
    "url": "assets/js/127.9b65318f.js",
    "revision": "41c2d09d347d223281120fcac828fb6a"
  },
  {
    "url": "assets/js/128.7d4b722a.js",
    "revision": "f120367ab796a51b355b0329ece88da5"
  },
  {
    "url": "assets/js/129.22a256b7.js",
    "revision": "5eff25156b06c67d2be2d04a29067efe"
  },
  {
    "url": "assets/js/13.db31692c.js",
    "revision": "e70c41c80785ce1f8cfba51f65462343"
  },
  {
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
  },
  {
    "url": "assets/js/131.5e887ebc.js",
    "revision": "cf840c0a7accac559768662ff92011e4"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.9bdfb38f.js",
    "revision": "11dcf4c86bdc142e9ed7c7220b1d23b6"
  },
  {
    "url": "assets/js/134.dfa88bfa.js",
    "revision": "f8640948ca07ac95d863223142440fc5"
  },
  {
    "url": "assets/js/135.3a6094ab.js",
    "revision": "8c2ae43bae873db764f2fd8ad64d79fc"
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
    "url": "assets/js/138.1215bc1a.js",
    "revision": "3acb49fd3ada4bfa889b83d9d4c799b4"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.52b7c015.js",
    "revision": "286bfdab9719ac984aef635da411edee"
  },
  {
    "url": "assets/js/140.b99048fa.js",
    "revision": "02c88e68e675417e4ad6caf523ea10ac"
  },
  {
    "url": "assets/js/141.5ce799ba.js",
    "revision": "3a0da07594ebee763f90d840a6f968bc"
  },
  {
    "url": "assets/js/142.e6bcef07.js",
    "revision": "36bf5b460554a06f4664e3c026fddbe8"
  },
  {
    "url": "assets/js/143.fa7420bb.js",
    "revision": "578d240d1a48ae7634717d643c6bc61e"
  },
  {
    "url": "assets/js/144.e241e46a.js",
    "revision": "a00209c208af01e883c10506601dcc36"
  },
  {
    "url": "assets/js/145.b7afacb0.js",
    "revision": "1da649e58e03fa31e7c01ca830a9230d"
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
    "url": "assets/js/148.9d1756dc.js",
    "revision": "d4284fc8d1dfcd92f416a47396a7ab12"
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
    "url": "assets/js/151.06196730.js",
    "revision": "fecc8b52856f117116b0b215ab01d76e"
  },
  {
    "url": "assets/js/152.1919649a.js",
    "revision": "9933178c72c13fa5faab13e0f4f94f7d"
  },
  {
    "url": "assets/js/153.38c2880c.js",
    "revision": "af370343c9e3356141548714e480ba5a"
  },
  {
    "url": "assets/js/154.73aa2e41.js",
    "revision": "db528ab0330f497c1dc307b5f620329a"
  },
  {
    "url": "assets/js/155.20dc79e4.js",
    "revision": "8233cfda184954d04e4f3ae03e0286d2"
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
    "url": "assets/js/158.043ca37a.js",
    "revision": "d5f0d1e9c51859556e82086c9048b549"
  },
  {
    "url": "assets/js/159.2687e6bc.js",
    "revision": "639f862171f02a05f641c03d39b6ff35"
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
    "url": "assets/js/161.744e65da.js",
    "revision": "2b1744ec515f49cd699d571f0edb7607"
  },
  {
    "url": "assets/js/162.00b434cd.js",
    "revision": "aae28cf8b6c16d9214c3078e6024d0c1"
  },
  {
    "url": "assets/js/163.e1f8e6f7.js",
    "revision": "7f764277e5bc2976a2d9411fdcfbdc22"
  },
  {
    "url": "assets/js/164.b6f6fa5e.js",
    "revision": "e785622de343d93196ad3c701d960e52"
  },
  {
    "url": "assets/js/165.8e0f13ba.js",
    "revision": "e55db322534b09260963ec52ceec91eb"
  },
  {
    "url": "assets/js/166.e21eb529.js",
    "revision": "93e77a184b81e15b51cfeb740784420e"
  },
  {
    "url": "assets/js/167.5db9d448.js",
    "revision": "9b407df96d89c06568c20e9db3185ec2"
  },
  {
    "url": "assets/js/168.64857784.js",
    "revision": "4686b6b500add137de3fa5892ec228f2"
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
    "url": "assets/js/170.2eecec6a.js",
    "revision": "2ebbe613485432e6f627823bc8c80c0e"
  },
  {
    "url": "assets/js/171.c9eaf3cc.js",
    "revision": "b25933eb9004cb3b12a85a70eea8331e"
  },
  {
    "url": "assets/js/172.1045b626.js",
    "revision": "7e815ee4a2fee4a8948ee3121f691dff"
  },
  {
    "url": "assets/js/173.40ac80b0.js",
    "revision": "f23e1e80b0903cccabb10403152b000f"
  },
  {
    "url": "assets/js/174.39fdd174.js",
    "revision": "838d76c82532e0f998f5712a894c3d4e"
  },
  {
    "url": "assets/js/175.ca6dbd93.js",
    "revision": "ba63c3717f97b17d71a4db4deaea2055"
  },
  {
    "url": "assets/js/176.b37a4e5c.js",
    "revision": "ed52cfcdfbeb70f41dff20b8acf59ae9"
  },
  {
    "url": "assets/js/177.999bb726.js",
    "revision": "bb381152f759b537924415c4a4cb20fa"
  },
  {
    "url": "assets/js/178.72980b1a.js",
    "revision": "2e27d432931c212853f11f00e5cf476d"
  },
  {
    "url": "assets/js/179.9d76f832.js",
    "revision": "b50879560a9967e40c1d323a0d987191"
  },
  {
    "url": "assets/js/18.6b7395cd.js",
    "revision": "78e94a82556de7d56aa6f5b23b3311c6"
  },
  {
    "url": "assets/js/180.82986240.js",
    "revision": "b6c7bd6a11921e4cd5f9f0a5e956292f"
  },
  {
    "url": "assets/js/181.f1ab3b32.js",
    "revision": "6056f9e8b805b0f0d97fffb00aeb8ef7"
  },
  {
    "url": "assets/js/182.ed443d1a.js",
    "revision": "3abb81801f2f5e22e2e0a237efa6d4d4"
  },
  {
    "url": "assets/js/183.093ba1ed.js",
    "revision": "a967857854bb14664707109429a92a52"
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
    "url": "assets/js/186.b2f1ee6d.js",
    "revision": "ff5af21e1f71b76c0752ce8581ded8dc"
  },
  {
    "url": "assets/js/187.e53418ba.js",
    "revision": "9d1a14264540befcdede054e9c173f57"
  },
  {
    "url": "assets/js/188.34efcdc3.js",
    "revision": "3ef0cb0b0b0f8d47c03695afc8530304"
  },
  {
    "url": "assets/js/189.15b0cd1f.js",
    "revision": "cd5f2755891d44eb66acf322a339233d"
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
    "url": "assets/js/193.cf2886c3.js",
    "revision": "86dcd8c8408cb99e9f42ceb00c674cbb"
  },
  {
    "url": "assets/js/194.1c2f7dc2.js",
    "revision": "26a3ca6f1b70be0b74cd28df51d81944"
  },
  {
    "url": "assets/js/195.537c3915.js",
    "revision": "87df34465d9e20821fd858827b24d623"
  },
  {
    "url": "assets/js/196.4ed1a3b8.js",
    "revision": "7d2fac119addf32bf49b1c507a695389"
  },
  {
    "url": "assets/js/197.b662b50c.js",
    "revision": "3d8b132e06f7a95c4e05084cb955f81f"
  },
  {
    "url": "assets/js/198.ce3c4fd4.js",
    "revision": "4828072703f4c71c5ad98815d9e4f586"
  },
  {
    "url": "assets/js/199.5ff5437a.js",
    "revision": "f11496cf61b12ea23c173c012b1384ac"
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
    "url": "assets/js/200.2c8d218a.js",
    "revision": "c1d555c4e8623b4d90b9e9a3048aa9d8"
  },
  {
    "url": "assets/js/201.a470c89f.js",
    "revision": "cc6400f3dce0051f953d45a254e99118"
  },
  {
    "url": "assets/js/202.0df1f956.js",
    "revision": "4b7b901c98c818eeca1936e9a20cafcc"
  },
  {
    "url": "assets/js/203.2f5fdbb8.js",
    "revision": "9d394d71ce0dcf0b730a94f8d38ac7a0"
  },
  {
    "url": "assets/js/204.c231e73e.js",
    "revision": "b4385fa875e182dd8b52864c2061cb86"
  },
  {
    "url": "assets/js/205.32d9c7cb.js",
    "revision": "fabaac90ff468f863a7b05ad0c0d6424"
  },
  {
    "url": "assets/js/206.6e42a2de.js",
    "revision": "2ccd80c16825ba77ca8538af00312115"
  },
  {
    "url": "assets/js/207.9460b659.js",
    "revision": "fd2ad82f22aef69990f0bacca76f1c5b"
  },
  {
    "url": "assets/js/208.8033a43e.js",
    "revision": "7d82aee902ec3cb5b7695a71cca4e96f"
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
    "url": "assets/js/211.a20edde6.js",
    "revision": "c8ae68ab83e9fb6381e8a21757fdadeb"
  },
  {
    "url": "assets/js/212.390b0497.js",
    "revision": "1edf774e1f95afd0f52354c0f9078a16"
  },
  {
    "url": "assets/js/213.8f1c5d12.js",
    "revision": "a29740efc67d4de52b3c6c8194cc47c0"
  },
  {
    "url": "assets/js/214.56e4de65.js",
    "revision": "70c1267b20d14953c3564a95e8f1bf69"
  },
  {
    "url": "assets/js/215.9549455c.js",
    "revision": "11c8b790c98af144d20ef7401e723f5f"
  },
  {
    "url": "assets/js/216.df14ef6b.js",
    "revision": "6a9f911d2968ea44dc2c239ebccc5098"
  },
  {
    "url": "assets/js/217.a56375d6.js",
    "revision": "e589871002493ac7c35e7b8875ef5b43"
  },
  {
    "url": "assets/js/218.f8eb416d.js",
    "revision": "eaf339de101a77d860f47655dea8a804"
  },
  {
    "url": "assets/js/219.29a624b7.js",
    "revision": "e3129cee20240fcc7cfc342446bf5734"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.0e9425bd.js",
    "revision": "581867bcb1b9c208e409b207f27d4976"
  },
  {
    "url": "assets/js/221.e87c2e30.js",
    "revision": "1fb5a7e84fea6defb5abbaa4e911ae49"
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
    "url": "assets/js/225.e9d947dd.js",
    "revision": "5d99ea0ceaacc2d82950f37ca923b67d"
  },
  {
    "url": "assets/js/226.2dca5ed6.js",
    "revision": "54bd24dc69086fb0d07a8f79c6c16c62"
  },
  {
    "url": "assets/js/227.a64e1695.js",
    "revision": "028aff6e84384d8c19d9538665f7bc5f"
  },
  {
    "url": "assets/js/228.47b26ea2.js",
    "revision": "b578f75ceab7309f6dafa158f67a8abf"
  },
  {
    "url": "assets/js/229.3b1e83cb.js",
    "revision": "45ad94aa2b6de34c1284c41ef706d313"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.53e0900c.js",
    "revision": "92dd283cdcc0df47a51d03094b9843a3"
  },
  {
    "url": "assets/js/231.71345118.js",
    "revision": "2c46315fa073967aef60d8d032fe5e72"
  },
  {
    "url": "assets/js/232.d9259fbc.js",
    "revision": "6984d97c44b09470c82d98200c2c6da9"
  },
  {
    "url": "assets/js/233.ab5f45f0.js",
    "revision": "4d6da73955cfee870e3a6e1d33c6986b"
  },
  {
    "url": "assets/js/234.0a855ad6.js",
    "revision": "9fd8e7afc6bba48190c19a7de9d4baad"
  },
  {
    "url": "assets/js/235.a54658e5.js",
    "revision": "b37ca57614214d0d69365539d38c0d70"
  },
  {
    "url": "assets/js/236.d1d871c3.js",
    "revision": "5bf3c0de518d2af95d2b2a37fdb16101"
  },
  {
    "url": "assets/js/237.6968bda7.js",
    "revision": "6db5fda82fc4383a25e6c842328d9492"
  },
  {
    "url": "assets/js/238.9a4d5b8c.js",
    "revision": "327e0fce8c8dc6b3b0a3cb483700345c"
  },
  {
    "url": "assets/js/239.27b59e9f.js",
    "revision": "6c8db9e2275c99f33377e011afee182a"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.543497da.js",
    "revision": "02d849f571fadeec60b45fc35273cf86"
  },
  {
    "url": "assets/js/241.001cdedd.js",
    "revision": "0bcad0269d34e3d115abf3a0407868a0"
  },
  {
    "url": "assets/js/242.989f13b3.js",
    "revision": "a5991c78081a69683e15bfa2daf4877d"
  },
  {
    "url": "assets/js/243.df11c8e9.js",
    "revision": "3b4876eb12ebf9a21d3e377c76616eaf"
  },
  {
    "url": "assets/js/244.421e2da4.js",
    "revision": "8b38269665a051b9d6ec5752e3f3e7a1"
  },
  {
    "url": "assets/js/245.32d05108.js",
    "revision": "94b631ed8e27da393b27dad5600761ab"
  },
  {
    "url": "assets/js/246.bd8e2f5d.js",
    "revision": "23da81de16ca63e8d5f46d249dfdb94e"
  },
  {
    "url": "assets/js/247.2ff09de5.js",
    "revision": "647624c1d0ddbf749c4f9d2f8ba31fdc"
  },
  {
    "url": "assets/js/248.40039e63.js",
    "revision": "c03636b4ac3b45af145ef98a81aad40e"
  },
  {
    "url": "assets/js/249.7602d5d8.js",
    "revision": "6fe529a99518fbe5a1a0a82adebc4100"
  },
  {
    "url": "assets/js/25.811676f3.js",
    "revision": "92e7a8cbcc4937d2e08b59ba12a5fba7"
  },
  {
    "url": "assets/js/250.0155b9de.js",
    "revision": "ebbc3f1fdaa19f5a924934a87916f8c3"
  },
  {
    "url": "assets/js/251.c70b9eba.js",
    "revision": "ac96173f5ec843fb16dd51032a5fdc5c"
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
    "url": "assets/js/254.f6eab416.js",
    "revision": "fdb474a3f03ce6d0a2a8e20cbb45f457"
  },
  {
    "url": "assets/js/255.448c6d24.js",
    "revision": "755efbbeef9e1018194d1545b5245ec1"
  },
  {
    "url": "assets/js/256.7789061b.js",
    "revision": "2843f4fe863176496d1cd6ccf65256bb"
  },
  {
    "url": "assets/js/257.578f1af2.js",
    "revision": "babea62560b1195c0d85f6a4e53d32af"
  },
  {
    "url": "assets/js/258.922cac5e.js",
    "revision": "159cfec9c54e8528f5668855f42a9c38"
  },
  {
    "url": "assets/js/259.f80f9888.js",
    "revision": "508cdfb955452d17d2eb9a24d24e00bf"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.539a627b.js",
    "revision": "120dfafb22f6405097fdb8bbe8be7b78"
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
    "url": "assets/js/264.04379cb6.js",
    "revision": "d441b9fda3570b4075c49639ee000fa5"
  },
  {
    "url": "assets/js/265.64e1cba8.js",
    "revision": "d6570894330c6835e1203bf7bf11ce32"
  },
  {
    "url": "assets/js/266.b15bd9ed.js",
    "revision": "92d371d4d24440251f7867cc9323d654"
  },
  {
    "url": "assets/js/267.1afd4f30.js",
    "revision": "bfe8973709967639fb4b8f307104d0d9"
  },
  {
    "url": "assets/js/268.6176e382.js",
    "revision": "94946f2252ca9048bd6a9f14bd3ed52f"
  },
  {
    "url": "assets/js/269.e0a36a95.js",
    "revision": "a448cf69a7aea70b7e146e942c6ba9d9"
  },
  {
    "url": "assets/js/27.63f83887.js",
    "revision": "68483c644b5d70eeab2d18f3642b5d37"
  },
  {
    "url": "assets/js/270.fc7e740c.js",
    "revision": "ffb1aabaa91c367037549cd65d74649e"
  },
  {
    "url": "assets/js/271.6e3aa9b1.js",
    "revision": "ad0a3caf5c04c5e63a8d6a06b64b3a8d"
  },
  {
    "url": "assets/js/272.f659f2e7.js",
    "revision": "b29eca8fa088d4e88fde49ac2610cb5c"
  },
  {
    "url": "assets/js/273.d7086cf8.js",
    "revision": "880526107aa37d3011c1264f37e9938e"
  },
  {
    "url": "assets/js/274.7558234c.js",
    "revision": "3434f10e09846b40ec2cd6fd8589df39"
  },
  {
    "url": "assets/js/275.32f6baa0.js",
    "revision": "ea046ebef6ef4631c76d1c423b72355f"
  },
  {
    "url": "assets/js/276.69f60be9.js",
    "revision": "cce19fec2fe4d34290d239d9c55d66e3"
  },
  {
    "url": "assets/js/277.168df992.js",
    "revision": "3b08c792498d7fac279875b85cd53db4"
  },
  {
    "url": "assets/js/278.d0dfce40.js",
    "revision": "24641a7520645c4073dec56b3c12c2e9"
  },
  {
    "url": "assets/js/279.4331f985.js",
    "revision": "6f44cb71de9ba1d7d1cf5a594b1da9ab"
  },
  {
    "url": "assets/js/28.d4ed8751.js",
    "revision": "b23bdb42b59955507f62d77bc21b39ee"
  },
  {
    "url": "assets/js/280.6b97a7fd.js",
    "revision": "a3fa8a2f9bc05d52656e7f6dfde59a98"
  },
  {
    "url": "assets/js/281.4babcfa0.js",
    "revision": "2532a5fcea54bc6a861376b2021ed723"
  },
  {
    "url": "assets/js/282.a5f9b83f.js",
    "revision": "9fef67f85a64ee2136ed942b765b2f63"
  },
  {
    "url": "assets/js/283.8b8c6b5d.js",
    "revision": "2dfeb369064b0efb9e367177fe467d66"
  },
  {
    "url": "assets/js/284.51f65cb7.js",
    "revision": "ab91efb7141d31238109072dbaa2581f"
  },
  {
    "url": "assets/js/285.fcfa659a.js",
    "revision": "fbe61a94ab525550011dea11ac3b17ce"
  },
  {
    "url": "assets/js/286.782b1d0c.js",
    "revision": "6796bd93dd659717ebd24ab5b01a8dae"
  },
  {
    "url": "assets/js/287.47207722.js",
    "revision": "50154b99904c297c5d28c36e393c5e0f"
  },
  {
    "url": "assets/js/288.144695f6.js",
    "revision": "3eeed1f3d711f8ef2faecad729daa895"
  },
  {
    "url": "assets/js/289.0443ccef.js",
    "revision": "25188439d63a9f0e1d626e8e7c01ee0b"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.fa7c35db.js",
    "revision": "5b5669e2eae2499b55637e068b308585"
  },
  {
    "url": "assets/js/291.3b170166.js",
    "revision": "845fcc0410f0ef2e551101a72000062f"
  },
  {
    "url": "assets/js/292.f4084009.js",
    "revision": "f874898ab4c00331820983b23eadd276"
  },
  {
    "url": "assets/js/293.3cd0d3d8.js",
    "revision": "72d4e39d9ea9fbb3b5ad49cf2a9b5abb"
  },
  {
    "url": "assets/js/294.aa64ef48.js",
    "revision": "9e161308989620e38dab241100e67227"
  },
  {
    "url": "assets/js/295.6aacd851.js",
    "revision": "86dfc8340c5df58bd5fc57ef73b0db92"
  },
  {
    "url": "assets/js/296.310fd8e9.js",
    "revision": "d623f14d3fbbfd1f92228093029ca303"
  },
  {
    "url": "assets/js/297.81547e91.js",
    "revision": "994e6a43f7e9603d9c9f4a599b2fad87"
  },
  {
    "url": "assets/js/298.268971ee.js",
    "revision": "47ab4e54a5e61c4029e4726de7c0c81e"
  },
  {
    "url": "assets/js/299.4a0293b5.js",
    "revision": "c41062d4723f501a9b51a4b4fdbf5f65"
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
    "url": "assets/js/300.d3cd0dfc.js",
    "revision": "b26dc22267a02be127e63fbed3fc6937"
  },
  {
    "url": "assets/js/301.6368ada2.js",
    "revision": "244fa99304801f356ac841106c041cbf"
  },
  {
    "url": "assets/js/302.e1fccc18.js",
    "revision": "f4e047e9d8dad2837de97426da8a5f0b"
  },
  {
    "url": "assets/js/303.5e18ee15.js",
    "revision": "a10e45d50b89ba1566ac58487cf60537"
  },
  {
    "url": "assets/js/304.a0ed5b3e.js",
    "revision": "0d3c7c2926e7fc34e043738c7adad3eb"
  },
  {
    "url": "assets/js/305.58b3b160.js",
    "revision": "17c9658822c43b91104bf538dba8ca49"
  },
  {
    "url": "assets/js/306.de0887c2.js",
    "revision": "2317d244312d0bbca25cfed0bcd81b80"
  },
  {
    "url": "assets/js/307.7db63bb9.js",
    "revision": "8ed9ab38b1500562894c820cf1c57977"
  },
  {
    "url": "assets/js/308.08dbba06.js",
    "revision": "5c6a05bb09c04d4262458d247a627dc9"
  },
  {
    "url": "assets/js/309.5feb03a8.js",
    "revision": "f639e56849cdf46a082576beeaedf609"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.c4387205.js",
    "revision": "d03dae6d69e10ab0f34ce743ccffe6ff"
  },
  {
    "url": "assets/js/311.d5baf6a3.js",
    "revision": "005d2824f5212e1d82844accb753c5b2"
  },
  {
    "url": "assets/js/312.84cdfccf.js",
    "revision": "1c2e8a262b5469873ea925e249b97786"
  },
  {
    "url": "assets/js/313.1593b130.js",
    "revision": "60d9148497c28d428a6475f3865b86a3"
  },
  {
    "url": "assets/js/314.fcf15115.js",
    "revision": "46e0f37e3b6e3478e395424e504c2fc8"
  },
  {
    "url": "assets/js/315.2bd0a38d.js",
    "revision": "1d143c78f0bc7d0f68ce54abf48cf457"
  },
  {
    "url": "assets/js/316.3fe8a648.js",
    "revision": "3906ae029f305716a9c9f64971aed6a3"
  },
  {
    "url": "assets/js/317.dbc61fea.js",
    "revision": "58d5da23b425037cfeabcbc89ef6db44"
  },
  {
    "url": "assets/js/318.c9203d39.js",
    "revision": "fb8c611ad3c7b79d27f058cc4d2a0282"
  },
  {
    "url": "assets/js/319.6a29632a.js",
    "revision": "6156fdba4961a2248eb777f799df3a19"
  },
  {
    "url": "assets/js/32.fde084b2.js",
    "revision": "870d179630e2ee36e0c290f7ce91213b"
  },
  {
    "url": "assets/js/320.dbe0e732.js",
    "revision": "ac1f4b0547b74380c6724bc853db75cd"
  },
  {
    "url": "assets/js/321.85518729.js",
    "revision": "8737f7b6008d717a5e059fd03c50fd3f"
  },
  {
    "url": "assets/js/322.b42b2921.js",
    "revision": "aca5894c294da5bdbc1d832b6e3651ce"
  },
  {
    "url": "assets/js/323.85709388.js",
    "revision": "47da88e84f749755bb82d95b8fea45d8"
  },
  {
    "url": "assets/js/324.ab956e38.js",
    "revision": "6b8505faaf5895aa16c8b91515bfa7d7"
  },
  {
    "url": "assets/js/325.8cbfc74f.js",
    "revision": "7f2184b3fcefb746be93a5024042636c"
  },
  {
    "url": "assets/js/326.4275cce8.js",
    "revision": "9d6a3b1f9feed18dbaf95295de9e921f"
  },
  {
    "url": "assets/js/327.c0f902b1.js",
    "revision": "b6c0f4125a58436cb948ef1f47ee6953"
  },
  {
    "url": "assets/js/328.cb63ac4a.js",
    "revision": "1ec62d52b9f9c426d5d933fc2f8a2ed9"
  },
  {
    "url": "assets/js/329.2cc4d92e.js",
    "revision": "74c52de8deb8b74f4f79f00151ad7b85"
  },
  {
    "url": "assets/js/33.30f381d4.js",
    "revision": "66f4ebb3d1f513dea3b18f794041a792"
  },
  {
    "url": "assets/js/330.4b382083.js",
    "revision": "e231d01cd8251a6569b339c37efff9b1"
  },
  {
    "url": "assets/js/331.13f98cd4.js",
    "revision": "d1f4ef3bbdbea021b5edc1f01519ce56"
  },
  {
    "url": "assets/js/332.835236c2.js",
    "revision": "870a5b79084b1403d6bfcac9f89e2faf"
  },
  {
    "url": "assets/js/333.d2797f6e.js",
    "revision": "63372f8046858c9c8ecb362c3bf4fa48"
  },
  {
    "url": "assets/js/334.44fb31c1.js",
    "revision": "8a343c27f797799bf320fe0497737b32"
  },
  {
    "url": "assets/js/335.1ac88f2f.js",
    "revision": "df455c779e5c7c27088b50648e5ecdae"
  },
  {
    "url": "assets/js/336.8f96f6bc.js",
    "revision": "866b0930ea1282952b997457bd45887b"
  },
  {
    "url": "assets/js/337.8e3e12af.js",
    "revision": "b2758bba89a13f251424645a846ee0c7"
  },
  {
    "url": "assets/js/338.d18d8d0f.js",
    "revision": "43ac4e9a3f98c75a64cf8d59868ba670"
  },
  {
    "url": "assets/js/339.462db77e.js",
    "revision": "1e1c93536185e06383dc5fb25e315e5f"
  },
  {
    "url": "assets/js/34.32699862.js",
    "revision": "5e7b45b9a5ee0d2fd015c95101c0383a"
  },
  {
    "url": "assets/js/340.77caf216.js",
    "revision": "2317573d12bb4568739bba7e1c645580"
  },
  {
    "url": "assets/js/341.78e001d7.js",
    "revision": "65dd9854e7aac2b1b9e12bd3541a389e"
  },
  {
    "url": "assets/js/342.a41d7af3.js",
    "revision": "4a3146979dd8211fc76664dc53dd05b8"
  },
  {
    "url": "assets/js/343.59331f3f.js",
    "revision": "089be06fce7ed7d636d4ec07a61d2ab2"
  },
  {
    "url": "assets/js/344.e10ed771.js",
    "revision": "1bea0ac3c5b4a3227f86d29528313dbd"
  },
  {
    "url": "assets/js/345.38a43438.js",
    "revision": "bb1d5486d945b1b465b3b50225a825ed"
  },
  {
    "url": "assets/js/346.88bcee36.js",
    "revision": "77ea7ab69bebb14231f732a295403d58"
  },
  {
    "url": "assets/js/347.34ab7b52.js",
    "revision": "e3bcb3bb011243286cd9727f42163bdf"
  },
  {
    "url": "assets/js/348.d92100a9.js",
    "revision": "8564bc1e23fcba5e90eb91093e2243da"
  },
  {
    "url": "assets/js/349.6fe9c0fe.js",
    "revision": "c9e35a855fb89ece742fbb88d18d39ec"
  },
  {
    "url": "assets/js/35.bacc2ab2.js",
    "revision": "71c74b45de0f8497eda911be58dcba35"
  },
  {
    "url": "assets/js/350.552745cf.js",
    "revision": "3134839200e90756232df7af4820d58e"
  },
  {
    "url": "assets/js/351.5c564289.js",
    "revision": "bf9912c722a6d81416083b635f3eb7e5"
  },
  {
    "url": "assets/js/352.bff582b3.js",
    "revision": "7bca5141aae12132c55ef09f5e542fb6"
  },
  {
    "url": "assets/js/353.51a3f5f3.js",
    "revision": "1f6a33f1373d387df14c79eb5753d1aa"
  },
  {
    "url": "assets/js/354.9b71b3c2.js",
    "revision": "44ef57a3d5c262a9a80329d014a1e623"
  },
  {
    "url": "assets/js/355.e0655db5.js",
    "revision": "c48930e2ca278416c7891d990d115888"
  },
  {
    "url": "assets/js/356.eeba4e15.js",
    "revision": "e381cf1981aa50045081eb4088e8feb2"
  },
  {
    "url": "assets/js/357.875b946f.js",
    "revision": "6f10f508e369905683dedc47a88fd3d1"
  },
  {
    "url": "assets/js/358.4150d71b.js",
    "revision": "e9120714c049c14b3b94980ae3413cfb"
  },
  {
    "url": "assets/js/359.d21540a1.js",
    "revision": "e57ca124482d00dcd7087f33981e2e7d"
  },
  {
    "url": "assets/js/36.a7a02539.js",
    "revision": "d072a89a473973c6ec1b876b5bd9caec"
  },
  {
    "url": "assets/js/360.2f4ad534.js",
    "revision": "eb52e823ce2bd386490634c131571ab3"
  },
  {
    "url": "assets/js/361.0fb93162.js",
    "revision": "e002e2ce2a8d55cebfb23f088b83f894"
  },
  {
    "url": "assets/js/362.220c2bc7.js",
    "revision": "170d963cd49d15f846b091f59948e265"
  },
  {
    "url": "assets/js/363.b2263a58.js",
    "revision": "a496c4d6d37f64ffa0f80ff216ee396f"
  },
  {
    "url": "assets/js/364.c0f69470.js",
    "revision": "f546255271060b1423d6335da5542fea"
  },
  {
    "url": "assets/js/365.1f5e5f72.js",
    "revision": "9088f76b66dc6924c8fc849a44c92522"
  },
  {
    "url": "assets/js/366.e9a031f3.js",
    "revision": "1baf1e37f6d75348cb73cebae829ef8c"
  },
  {
    "url": "assets/js/367.1058a9db.js",
    "revision": "64ad4df0ab5c09228ef12bc74cca69c8"
  },
  {
    "url": "assets/js/368.17d0abaa.js",
    "revision": "9a169c471e9e1cfa2f44e0f896adcc6f"
  },
  {
    "url": "assets/js/369.c22adbd6.js",
    "revision": "fd7e2a311b90a70cae524ab6ea55194d"
  },
  {
    "url": "assets/js/37.d294aa19.js",
    "revision": "32ae5f11683fc7874a3b80ac9f0c20fa"
  },
  {
    "url": "assets/js/370.503e637e.js",
    "revision": "f3f811ac61adea744ed4ce3d66f75144"
  },
  {
    "url": "assets/js/371.5b9c6e0b.js",
    "revision": "f8391d07fe024344c9bc1bdd9114e830"
  },
  {
    "url": "assets/js/372.e491b81f.js",
    "revision": "71446669caa34722a3500e1d7df3abd8"
  },
  {
    "url": "assets/js/373.304f22a4.js",
    "revision": "19940cca7eb4b8102196f3baa1061a90"
  },
  {
    "url": "assets/js/374.4e83daf6.js",
    "revision": "375e5ae680a7a9d828c41f10c798246f"
  },
  {
    "url": "assets/js/375.f609b384.js",
    "revision": "cf467270eb16b69ce2c6879eca125627"
  },
  {
    "url": "assets/js/376.8180889e.js",
    "revision": "55448b11b1a28a389b22c467f7f426e8"
  },
  {
    "url": "assets/js/377.b6406df5.js",
    "revision": "077857114e370cde7cf363c6a5a87ec2"
  },
  {
    "url": "assets/js/378.c0328f5f.js",
    "revision": "9b55b6faa49ba7c7eee5d166a3cf6b4e"
  },
  {
    "url": "assets/js/379.569ed1e8.js",
    "revision": "79e39e513b7f884ba6e4990b6d925f59"
  },
  {
    "url": "assets/js/38.f27ab152.js",
    "revision": "08267f57ab96e676355c6c33c0bce790"
  },
  {
    "url": "assets/js/380.5a409b3d.js",
    "revision": "73702c60e64de76f3690d8040726f770"
  },
  {
    "url": "assets/js/381.b255ccf2.js",
    "revision": "53a84d0eaf5a6fd444cdf152dc18e4b7"
  },
  {
    "url": "assets/js/382.0b4db7ae.js",
    "revision": "792753f406bbba53f2ffaa0db2e8c52f"
  },
  {
    "url": "assets/js/383.3455afb8.js",
    "revision": "5b41c2f5787b24f236a09e07ddefd60e"
  },
  {
    "url": "assets/js/384.f07a1f7f.js",
    "revision": "19a7c7d800ff299d996fd8ec375c2459"
  },
  {
    "url": "assets/js/385.eeb6ae56.js",
    "revision": "239697fb7371f6520f38e09a5fd5c0ab"
  },
  {
    "url": "assets/js/386.34dfef62.js",
    "revision": "aa1c6f8502cd04f5a9db48265f7f7018"
  },
  {
    "url": "assets/js/387.cb443fff.js",
    "revision": "1399b9e7e32a0c61fe5690f431be36d6"
  },
  {
    "url": "assets/js/388.82c429c4.js",
    "revision": "e6f24a235fb4ff21fb9d9cf73114fbe3"
  },
  {
    "url": "assets/js/389.eee7c375.js",
    "revision": "d529b5b47b98eb6fb180dcd96ab153a2"
  },
  {
    "url": "assets/js/39.e5ca4782.js",
    "revision": "5de750f3158dc717d52a3a22e094236e"
  },
  {
    "url": "assets/js/390.6dbebeab.js",
    "revision": "b42fea9fe4203d747823dd57ba7e0993"
  },
  {
    "url": "assets/js/391.953958d8.js",
    "revision": "29360ff6b9c8d4949ac6c8812676710b"
  },
  {
    "url": "assets/js/392.49f9c53d.js",
    "revision": "532c06f04a827275ab569c7878e3e017"
  },
  {
    "url": "assets/js/393.91c9a592.js",
    "revision": "4b5d56f10f4a94014d6195927e48064d"
  },
  {
    "url": "assets/js/394.bd041b5f.js",
    "revision": "da059c503db19e82334af21d1cf73b0e"
  },
  {
    "url": "assets/js/395.84f65d70.js",
    "revision": "85f366edcc67fda216439e95342b5fb3"
  },
  {
    "url": "assets/js/396.b2b0a081.js",
    "revision": "57e22b90a340532444cff757bc421c33"
  },
  {
    "url": "assets/js/397.62ba9fb9.js",
    "revision": "0ce98f9967a15baad8313285e6209f00"
  },
  {
    "url": "assets/js/398.3b80be54.js",
    "revision": "13c3065b6b3d60e72abc506869658839"
  },
  {
    "url": "assets/js/399.85076e82.js",
    "revision": "10744e12acdf28ebb18bc005e7107f38"
  },
  {
    "url": "assets/js/4.645b31fe.js",
    "revision": "83f736a9c571e791e27cc81280b1d266"
  },
  {
    "url": "assets/js/40.6214d2e7.js",
    "revision": "47cfc7833e968c64ebd92f9b0eda1797"
  },
  {
    "url": "assets/js/400.59df523f.js",
    "revision": "709e9e88c1ba26d92896723a11dd6127"
  },
  {
    "url": "assets/js/41.8caa3613.js",
    "revision": "6568f84623386e98e4e3fd6684b0952c"
  },
  {
    "url": "assets/js/42.bd77c3ae.js",
    "revision": "6c81d17f4a7b76fb8cfdcceb990610d7"
  },
  {
    "url": "assets/js/43.47f511c8.js",
    "revision": "a0348f9daebcae69a48008ed6e263e4c"
  },
  {
    "url": "assets/js/44.534f8efd.js",
    "revision": "067d9a7448ea5c7351eff6de689fbb3c"
  },
  {
    "url": "assets/js/45.69efb30e.js",
    "revision": "e384abbbba028fa785708941dde049e6"
  },
  {
    "url": "assets/js/46.c6e251ba.js",
    "revision": "bd2ba9473047fc35d5350453a3f8319f"
  },
  {
    "url": "assets/js/47.f6c7dc37.js",
    "revision": "c605fbcd0c343da83cd84356c66f0bc9"
  },
  {
    "url": "assets/js/48.1344d82d.js",
    "revision": "548a27112b8a18863b736dbbfeb00b83"
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
    "url": "assets/js/50.c883457a.js",
    "revision": "4fbdb5f4d1825164e16f10def8a488b9"
  },
  {
    "url": "assets/js/51.cc8aca9d.js",
    "revision": "b0d0a6a5e6b16e9a9187c8d1d02dd0ad"
  },
  {
    "url": "assets/js/52.3ac77ac0.js",
    "revision": "f9145fbb35dfecd0c2ccee0eaa52a2a8"
  },
  {
    "url": "assets/js/53.7ff228e3.js",
    "revision": "be5e503b8a4b439ffd54475797e9b723"
  },
  {
    "url": "assets/js/54.4be361ca.js",
    "revision": "717013320376eede757dc2c77d13abd5"
  },
  {
    "url": "assets/js/55.3ee221e9.js",
    "revision": "0d5738593b7de1577848da971d6075a5"
  },
  {
    "url": "assets/js/56.c1f23aee.js",
    "revision": "f3ca792a59ef9b59cdfc1fc1984514d8"
  },
  {
    "url": "assets/js/57.51ca6399.js",
    "revision": "83dad115592d60b802fa8f4cfa699747"
  },
  {
    "url": "assets/js/58.0e6d1655.js",
    "revision": "e653cdeb4365b4338ece646296b7416b"
  },
  {
    "url": "assets/js/59.9236f2fa.js",
    "revision": "109d1628d2263fb12a90d483d62267ab"
  },
  {
    "url": "assets/js/60.4b56ff10.js",
    "revision": "de95f30f9548948c40c2eb790ca2e019"
  },
  {
    "url": "assets/js/61.ac7f284f.js",
    "revision": "872042efc6f111e024bc16fe59307ae6"
  },
  {
    "url": "assets/js/62.278a0db5.js",
    "revision": "0595190fc90cc7d328cdc4e890d7fe3a"
  },
  {
    "url": "assets/js/63.56e57fbf.js",
    "revision": "fa68f9bcae7064787b2ba13dfa39bdee"
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
    "url": "assets/js/67.5245ae9f.js",
    "revision": "67500cb4d6e4ae7e5e461511cfad76f0"
  },
  {
    "url": "assets/js/68.2f5285c2.js",
    "revision": "90495f6963ae3fffca3cb5a18104b043"
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
    "url": "assets/js/72.d7d6b306.js",
    "revision": "f4b2e6840ffe0c6c28a586ad29971380"
  },
  {
    "url": "assets/js/73.19f9e469.js",
    "revision": "14438cdf13b86425bd34d5195063e158"
  },
  {
    "url": "assets/js/74.175a4308.js",
    "revision": "7626b77b454c13021b016a5e582b2dfe"
  },
  {
    "url": "assets/js/75.3c0c1a42.js",
    "revision": "62279273140b0998f4750147926f8804"
  },
  {
    "url": "assets/js/76.f54fc795.js",
    "revision": "3d05123ad637848c00cc87264545a53a"
  },
  {
    "url": "assets/js/77.d9cb7006.js",
    "revision": "95e94a78ccfdc50648dc98f1b80d535b"
  },
  {
    "url": "assets/js/78.c3c10b44.js",
    "revision": "d1e2ceafdfd3552c430bb5576865eade"
  },
  {
    "url": "assets/js/79.02a65dd9.js",
    "revision": "f8d31d3a80a77c3106ba58403b01d104"
  },
  {
    "url": "assets/js/8.f7a16c10.js",
    "revision": "716717777f0ec71f1805230de8459500"
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
    "url": "assets/js/82.56630506.js",
    "revision": "a7b49d93d57bc23819d449a5bf0c4490"
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
    "url": "assets/js/85.b3cb5fd0.js",
    "revision": "bb14c7b491f44922b8d29f7dbb866c7c"
  },
  {
    "url": "assets/js/86.4c1c445a.js",
    "revision": "0757dc465c33502d7b1d3039d2535802"
  },
  {
    "url": "assets/js/87.15f4d877.js",
    "revision": "31a5cf9c4ff37c99d7f074b16fd2422d"
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
    "url": "assets/js/9.d393fc5c.js",
    "revision": "ad51d5f8ce79b519c54785745f662b7c"
  },
  {
    "url": "assets/js/90.5800dbe8.js",
    "revision": "c96d107cd326d4dd4bd479bf642c53ca"
  },
  {
    "url": "assets/js/91.9d5a2518.js",
    "revision": "ff96701a0ad77e752bb5ced43e827f7c"
  },
  {
    "url": "assets/js/92.d32d01b1.js",
    "revision": "97e3ff7744949aa6898c7230c1eb9ef8"
  },
  {
    "url": "assets/js/93.8ff0d345.js",
    "revision": "7b1b3a9a4ac206ba3a76c65e319e9cde"
  },
  {
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.aab53072.js",
    "revision": "9c6b09a30f7cd54a264bc93192f97fe7"
  },
  {
    "url": "assets/js/96.0313d3cf.js",
    "revision": "68e4a3c38e43466be1258da78e9b3e35"
  },
  {
    "url": "assets/js/97.a26e301d.js",
    "revision": "f30a932d607df925850dfd7556114e21"
  },
  {
    "url": "assets/js/98.10cf74cb.js",
    "revision": "e93449db78e7ecad06bc9080aa134c5e"
  },
  {
    "url": "assets/js/99.972acb25.js",
    "revision": "978fea16d8388e9fb8672e3f02f8b880"
  },
  {
    "url": "assets/js/app.82cc5ee1.js",
    "revision": "0ce621de8e02b37e7e6b6d801df9df85"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "39a4d337055cf7822ab675652c0e90bb"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "8c17ca7168b51bbac8708e05bd98aaa0"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "4038a54b759f3299b1df1abb655f1fe8"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "42349bbff6bd2b165f5030ad0dea9506"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "53919292f99222bf979339a9e0d4df3d"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "4d1e766022c4585705a849fd15a44792"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "2b616083f70dffcba0a9637936607728"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "e48717881c24c8022b970005bf85e436"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "838054c77ef583a242895e2f37446a6c"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cb4b31d674d52e47c3a5a58aaf6e29f7"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "9927e737e659fdceb8e850f7afbad7c2"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "14404c13af91927b0db9cd9d5dde6049"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "fd795a5f09cec9f5c6cd667f96b36061"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "ab1a08ae9434c27ca9b1c8fd3697c2bd"
  },
  {
    "url": "master/api/index.html",
    "revision": "c17a5b61cb4ca018b938a2530255dab3"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "d6b5a25a32ab618fc941fa4f6f66658f"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "79c8bd077def15d03b80bbfc948e7051"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "9544bae45d8ed57a7a467cef99dd70c9"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "f3b7a5fec5a59dfc7f5f441ba04f0ef1"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "ba92633ce515b81da0600f003e3326e9"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "79037688df1a340e7cef428ca8a7a529"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "0b8a73e5b9a8141ad77fc7977330b763"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "f8011e61e71a87e075f8b35f9e4dd782"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "d93fd395adad09184d6bde871bcc4c0d"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "8a4f72c129301da2022a39769a132bf6"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "9d22967881fa74c49fb8e51c1baa9c75"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "6e6c26dd46927d1d1ec43c5096dc1eca"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "b9b9664e8b7613d9affa2c01da905695"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "603820e7fd77863e8d181ef08027b6e2"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "0144d728a5964bd56ff9b69416509c3a"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "2913521dbcad2f16ed2fc7ef9d36ef2c"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "88c3ac6219a1f5d14ad6940d7c792f5e"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "8b69ceadfc8204ce8d853d0b85f7694f"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "c8b20d7c89d1a054958a793526260dbf"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "ff4bec9235f3d76d5054d73a39eb72f6"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "8c99765de98734c2e9a9341bb0145d5f"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "0420ce79ada48ab6d642dea6439397f3"
  },
  {
    "url": "master/packages/index.html",
    "revision": "a3798c52c908a2b27579350ebd5fa721"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "4bf55f483c8d6a1148037f62a257886c"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "eace4517a6bc9dda735902c1eb2fc38d"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "c7b4ee1b870b0ca66f126493cd139212"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "073185af1dd503c14c689ff151ee43e7"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "5d1e0027c2731616f9ffcfbd723bcffd"
  },
  {
    "url": "master/packages/views.html",
    "revision": "7ccb7798b5fcaf8c15da3d2c1551c05e"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "f9bcd55845d0b1c8e3f9b108a010a9d6"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "6fa4a9f357c28c6aa1d8466e4cc75b66"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "66c911a4830f0bca8d2ca94ed5b533fd"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "dbbaa2230d2bb9e3a81b4cfbc82c53b6"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "fb3d6a51276e6c03256b559a3574b4e8"
  },
  {
    "url": "master/themes/index.html",
    "revision": "7070606e83f2f3409e691eabbed208e9"
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

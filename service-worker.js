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
    "revision": "e53b3c5c129dd63ff5151b255e765c3c"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "fbed93d6bec2613a8ac8d465acef0315"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "8028820a0af30a49efda867854dd5e5d"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "5e328458adca79d434d449edca54d805"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "fe699dd241359bc812bbbb2bf7e58184"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "52d9b8e7f750fde0c0d4886b8d2ce7f9"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "e892d0cdc183d4fd54dfad970fb514d6"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ae4254ec112f6b70919b412c421f5b8e"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "5edec4c1a9e7c4fa90212eb80b1775fa"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "5442fbafc10bf2810ebf6a37a292286d"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "f13c657ab9b860f10bf044e9169cbf9f"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "2d2d3fbf652dc660dfe6cf0ee39ff1fe"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "f49b81717d7f09a6aadd345ff5eb8bc8"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "374c282c5788d8df46f742c1a7585a75"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "240fc2bdd998fb39d1767ff46fb43296"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "296f2a39befbd6b874e546f4986ab316"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "171985e295498b98aae08748824d80d0"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "4148949000f3df2042be1c9bddbbd1d7"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "7f73699607b4167dfb1b591f2bc401f1"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "ee71d7752b146389b7b07a077cabd439"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "7728f19e08bf9e64733cbb44294c547c"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "2f5073abb57806f8a004a14711b00f1b"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "4aa179a7dee1f0f2a37152f850202d52"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "5022864d3cf18354ecb455606159d194"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "eeebd9f00dbaad4ee943fc90643a6df6"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "06070bc27db79b28cfd5b6e701dcac40"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "abff509672a4315372f2be6a984dd17f"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "a1f22a2489294b3bcf095cb8fc62c461"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "1e1b3ec7c861440f874444fb67499d68"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "6008fd09e6ef311bd5f098f2a2e95600"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "ffde21cceeec42b1142cc4e331d38c84"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "498e81a8a02be04e105310acbab9688f"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "1f040b2ade18a5bd2d8844f91220eecf"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "394e1d8c70f1a9cf47c134b03168b19e"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "4e41d1d6c4a2b1742f551c8df82905ee"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "2c2d911371629abcba3d4d5141d3d8c9"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "9e322ce03ac79e8f60c71c67df7fb918"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "6053bcf52343183f5decd1a2edec42c0"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "eb61b5cf00c1a37ae22296926f033273"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "aaa832457d7495a62a9f00539ea4695a"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "a58cc81f69287df12f648d563cda8e00"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "60746d8b33ddbad7dbc5223abcbf2ea2"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "4c5cbd471ec35510bcaaf7c4cfa111f3"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "ccac76458b91bb81d5e1a1b26b3139bd"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "5523c2db96dadb4a3a92bd770be79671"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "59912f8d05d42cc2e492f2bd1a4c55ee"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "90c9e3f209b7debd31d4b12b5bc180eb"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "4cc797f68e181a9cad3289fb4799056a"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "71b85ac32e3a3247ed49dc6222d2e3df"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "2d6189ef73b2ac7009ee94402a891c2b"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "b99c1c9ef8490441884e172a46c7ee3a"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "5b327d53c83af6a4a500838d085baac2"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "75769ad0684767256101b9f617e11103"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "c9b0ca1c62a376a92e40a8ae41e7871b"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "91a57de8f1408c86be73bcf146313d7e"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "cb9b28b5f6c313eec1c579ed3171cb78"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "54910b4f88de95a86af536764f2e5bb6"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ecea0c17dfb4a3f287a04e589cb1b5f8"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "c5933a62ff5045eed575b04105ee1462"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "f3895d60a05962c304adaca5fb8949be"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "06acc8e1034dcce09309b0dda509dc82"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a2f7c4214afd802e9a986e06d461819a"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "66596622cd0f1f4a7d63d61c7294e00b"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3c626f170aebbc43ce5bbb2121cd532a"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d9b7c1d4809d9407703cab1afa617e9f"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "32b662249f3591a51d528d389966314f"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "66052526a89ab0b199cd9e8535a1d063"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "cdafb86b7f6ba83fed2e786092adbf52"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "22a464109d2577c85cbc16f3e6716114"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "00659497269c77d2da6b0b2633a19776"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "0f44b61617b29bbace7521ec38e3446c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "b7f98d0af4592ab79d342a1c211fd0a5"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "088af59104aae58ea18e001a82ee820e"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "81a40ba920c2803ce2211830ed52a5aa"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "6b337bec2580fca4d2d0dbd0c95eaee9"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "aac270f190d12bd18c11013f10e0900b"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "e3160c1e6ffefefd36e4e720a0de6827"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "b5470b5d45b3cbb44773804fd7a3e50a"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "3726364a63d64fe0dd006a1adacf1625"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4459998c7451270e18135d862a5c98f7"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "943593ebe4601919a37bd8744b836f53"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "d50a5236cc8f0b12cd436b741d8d16e9"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "b82b830e633318216ba5bbf679cb5507"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "eef2ad70b2867b424939532d4d0cd135"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "5d49e3c9c965c6d95296d277825bbad3"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "beb8a81741a6d43e48445b1a0df5938c"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "7e5aa5bd8b7b847018c6bdc9629b3e7b"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "b1ab572df8d5ff06d654f20c763997ef"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "460db4371843e9665ee37c6c8cc9bbff"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "2facf843a0179b7bf10acc3a867dfeb4"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "97d07847df62245bf1c37c4d83b1dd5b"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "aae7723ea7c25e40a9b1ef4aaca6e61a"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "88b3e8aa1b4aea6a3044e75b542dc078"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "d2dd15a7692933b475dce13bea45fca7"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "60f20ca4c63cba8c97e328496cdfa3c2"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "4c9f2146680eb000e151fca6a00feed5"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "35556666e2966832d24ecd416dcf6762"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "a8519d1195fb52db791f73d0eda96380"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "81a6fd7b8d066d663e063bbf01660148"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "fe0e38af074aadb5dcccae8bfd5dfbeb"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "d6b7c57121b335d4091ab56b4ff48037"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "91b654c9ed4cf55aef4b21c871275b9b"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "ee5e0c0bf74794a7d68b1906a17360ec"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "83033e6515734ecf79516e01d9c18965"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "2f6dfe54ab11acce05c136b263491b80"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "bca50c339b0597f456f8c5c5b7894922"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "d088cdffffce49aaf89d1b8bc976df1d"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "99e970c9f58d2940cf755756a467c7f3"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "69909b649ef6240533329928ea626a3d"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "5b486c57f3d60d910a906fa35b436fdb"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "dc36c4cc7c8a80b95b84db0053ec0f60"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "98d4685b3474591caf0a64887c9f8a2a"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "a51693f257bb8bbc6097db5b2d2bb256"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "dd7928e96b2fc67aedc92d92fe1da037"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "2711995748b56e633d121d2ccea4dd95"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "1751733b6c69683adf7274e78ae6de8d"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "f927a64d65f96bd3a860f8ba374b7dd1"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "2afdaa10142558176fb3ba8aaaa3531d"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "6514f3590b975fe04f5e456a0b9c7838"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "3dbc2d59185e5118bc39e0981f0784b6"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "d9e28390c2d2063e67b44a57bdee295f"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "07180eec84315cc29c7d5c998310f2ea"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "bca5bcb8e59520ad73680b4b950ba9a7"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "963be30465c98523158b27270789bd22"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "4df861e44a4eda4c048c6214e49a5f92"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "2c6a202e593a9a32a6f715011cd53997"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "762909321916af230996265311f93c12"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "add731d253e95de3184739fefda41aab"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "4bfd0fe612d8f4923e846375b08d6112"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "c3baba844d0c947ab3c97ba957e2eeb8"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "d50fd37264e6c2da5c9b1ddbfaf3df16"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "68e7820b158889ba32b043533598808c"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "7fc738af8825dd66f7a609f98df05a25"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "7e8073d452149a90cbb0529289d993d6"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "93c666de961e27e94fe5aaf3521e8bb7"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "5fcbcd0cc8db0a1b1040939d8fc5f918"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "54094be464dc37dd58e2eec3cae940c4"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "17b57177851b4702d0f38d3e7213330b"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "74e3adf1b283e55f67a56c496303d282"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "d8c5f0a7c580502c9f5946e0e07e5fdb"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "93604b9fbc91caf8dcca6fd3c2fb2c6b"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "44d7cc40a2378b76b21a488faf905d59"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "9af34a443464b5ded54326b2c4166374"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "d6c9a23fbd3de8fe0f2af1bf1ee1f1e8"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "2a541f6cfa3a0ddac3df71bfd6ccbbe3"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "96fb2951794e6f9afb5ce401409504e5"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "ac417cb0950d28dc5e7cd2966d6eb551"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "0223fcdf4ede9d3f1f1e63d42c89372f"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "f000b866e54db18bb38cc336963a38a3"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "9cafaec24c651e4136eb436eb59fea60"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "75ae3ac9cd130b7f32745c07c5920a55"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "c80fb12ab350d10d0323553e5436c076"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "d3195de1ef4344a6b435fed313b61cb8"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "81125e8a71d713a9e91cf3d0278f806d"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "fe813ff20d0e3a03eae4936e8e83aabd"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "cdc86277b6744f86e8a540123c356776"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "c5055485a16a64460122790ce46179eb"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "27cb06b1ebf07812839bdde8001a5320"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "b33bf64997b3a46649ebefe6ca6fd938"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "213d1ebdf557cd4fc169677f96bb0c81"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "e494b38ba7b6aee48fe9a0ba927854ee"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "896ec93dfcb739211e571300ea83af2b"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "50f73ee57cf1900e70379d083ccefb28"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "139f0ffa5c3ab96be8299971164b2ab0"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "89c66483c986a4871370891e3d3672aa"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "f0ca66547a10ae05d0fe7e3b58132863"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "1b417dea8b09c75100b1e8dbfb98048c"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "cbd98eb8e185fc5909b05268e1912d06"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "fc8211b300135f9f7347b46cc84d53cd"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "00befc988cc7f37794f9b62345fb0ac4"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "df732dc0094f1cd9af6c59aa81e2be21"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "4b6c434e0ab0578ac12e7deafde93002"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "5d63ec8d0593c19423ef2c243b371116"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "d810e366d2de4242c26147732e756465"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "4036efbe6569b1cb375f7a590aa38375"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "641d06c3b263cddea2933d15228d1803"
  },
  {
    "url": "2.0/performance/index.html",
    "revision": "a1e666b7c9824b55d848baef1262f6ea"
  },
  {
    "url": "2.0/performance/loadbalancing.html",
    "revision": "c084177b6d9924d792af555b73e6afc3"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "27989b2536a8e6deb2ce0aae4dc9b382"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "705dc3b6a27293fa252ca2cb949da718"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "2fc6115fc6ea1bee207c3c5699f4cc6b"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "613b7e66071b440c28454e3b5a20ba54"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "fc753b3c135c29b5da2bdadec7325577"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "9a8abde61f9210c5fe37d67026c29551"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "c7db143f659f75764517ececa5ef66ad"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "23655e75113345f1a81fe7a9dc8d6497"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "ddc42115c07f3d61d8a2d55f74211268"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "9e18006c6d5e6b87ac8d2cb5ee04a6da"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "6905ff1362994cb1e0d124f31aa80158"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "12f06e868836e8a3475de5def5929b02"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "25835595b9c32b8c4da84a906ff4edcd"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "9c63c086d2a2ed3fe0f6a5bcd90df1bb"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "78ef3e501ed7e647a32bdd66b0cbe7ae"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "5808b1f087315574d29d452b8b7a783d"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "351b7a52429abbe807beb76977bb6e96"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "6f62d4cd7432e00c16464a672d048584"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "eb91ab2635a401576dab55c2b4acf238"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "7bdcc1ea33b64e1636a48a8bdaa09b21"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "b072fc90c2a5f1377db39f0428acaac3"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "27f97e813821941b620ca61343922fe6"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "d656aa01b16d86cfa31e256cae62b8e7"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "67886365104e72fd672b9bb0263a4a75"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "1a3c0365f700fd54e2f5a98c71846efc"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "658292a86479e9dbf6eba948fa90b3fd"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "991a4639c765e1dec59e8726c3614fdd"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "26a538c2f46431712f649796b9f87d5f"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "0643ae96e298a768744178d9ae2f1e6e"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "0e3477b9cf7dff1f4064bd6a649b9e93"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "a0177cea8f7565cdd81ff67033f7c6d4"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "18d2a835cef570e3c0cbd8fb76144948"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "6d564838f9e66b02edf00be087618d12"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "5ae7fe3e423440c94b48bde9e1159f5d"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "009ab314c71f2c6b484a8be9cca4c672"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "15044175be37f12aa015423715f0c538"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "a22f15724781475b9403e3c78387ba45"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "483289dd48442b03f432253357f13539"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "fbc13ca886e4da4a9c56bb9d2a122b95"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "3e62ecbb23409a4d93f6b5d55993483b"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "3d4a54422b33aac705fffb7969df9d42"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "82f74103b3dd8e0d82f9f2a1d481e55a"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "374ab64b43c62f0ed792c58ddba0fc90"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "16a332b88d0aaa3f3b312692728c7899"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "0e6366c40e50727e5b18962c0400bf25"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "c3492f0de991e1f487dfe7543e4fe217"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "883f209d4fcfdd70cdc235d655138327"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "20b722db1af9927a983f733d75f60586"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "d71364dc1f09c2b3481e7add508670bb"
  },
  {
    "url": "2.1/performance/index.html",
    "revision": "2ad05ab514f898f25035bb57ddc94781"
  },
  {
    "url": "2.1/performance/loadbalancing.html",
    "revision": "ec05020c9e6a3f1bec87e3374e7967d1"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "18d71487f1fb05913036d6a59243ad10"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "c0f8a11cbec0d948fa16f296dd8dea30"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "48be33c7684f0edec848b4040acb87dd"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "d0582d81642705f036c533ec3249d45a"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "b7603ccf0d17c688437a461f1a0544b7"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "4829a54f3450f4365ff618dabb7bf22d"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "a744d8bde7203635cd44259a27051f8c"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "7c0f4c664ff37f2c18e664916dff66b0"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "4ff734694a898dc12a955c5ca6cb596c"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "ddcbf5546ac5653c5e79bdad2fd57e87"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "d4ebe8800f4cd4843f079d2aa6c981c0"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "e5878a56b0ffd05833728d6fc820e801"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "3662c76794b61dfac6ce498857a1a0df"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "4f60f96b215e211b78cbc0761f062122"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "0b43e5794bb0a925aef7bd28070ce9b0"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "ad2cacb87fe3726ca024d82a9e042034"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "4ba69b03e0e597486cd92e49b2f20d33"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "54b1d8f1be355ca8ca0793f07b59ccf3"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "fafe7d1cdf68f48c09a94bc7848bd37b"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "29533bedca26503b3347057c3fe481c4"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "23a5a8d0eede9028d6aa377510614684"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "f2122d9bf2cfb9993199d054dc33b079"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "4ba7e70f8fe7f18ea0c2e625db8f4753"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "7bdb049c8c7cf41645888f43840b56de"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "c819dac6fe3a35ca441fde2a77fcc47d"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "85644939ff09318f855275c64b152336"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "ae13dc18347f86a986c9e25a202e154d"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "58bc26fa66dbdf1d12c21de4ad40a60e"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "dabad5f55ccba0b34d0d95808611dd75"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "a9ee2f00284ea9126b0d4b55c9e9b531"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "4200409cbc1798de16d0a4dd96b61579"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "111a579de569f5c8913d21cc10d5dddb"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "a247c3a89bdd7151bc7f7e9a7b21c13f"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "8426e166f8a71b8237b1a00a810f1e01"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "b54f7de88d33cc58950da9843fdc540b"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "6db185faad32b4cd1e6794aac9a987bf"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "6d426df6a4ba061b42d73acc4c18b03f"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "55722d742a0e11799225870f0aee9171"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "5b68bd3a78f5fe2703702f48f8711f2f"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "9d2fa7d1a2bd13ff85ba2e8af0e0f5b6"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "66af58d0375ca88abe1dcfb8b59fab5e"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "b0c3da6155e6a07f6753593a3d0a4d73"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "4ba9c5a5eb8f4dd0f8497d917a97a5c8"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "af44001e8a77ddd30b677dc0c07f224b"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "09b3cb90dcdbb8f73722258d970df766"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "5acbdb836cdcc74648b460c62a27c365"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "5744fdcfd9ca62aaf73e4891682f6a31"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "d279896333f3c5cd8dc3c3f24b1172d7"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "6f9a18861a825a4414d5908e80887896"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "d8f423c34fef2e2dc72817f7c5a1a939"
  },
  {
    "url": "2.2/performance/index.html",
    "revision": "097057d7315a0f84932a5f3d0c98fe7e"
  },
  {
    "url": "2.2/performance/loadbalancing.html",
    "revision": "99b5d61d13023c25a9a734a7275e2eec"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "28d1d4442b553c9dfffaa5f83d56ac32"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "6490f338f31e6da345d64b92c9d8b323"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "16deba461f597c2d448a47d7f784df42"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "ca20f29ab960f28da8a1479752bc2acf"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "f3cca4ace5481e5fde08e2cfaca23b77"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "578bacb757449f2a9075996cd37eeccc"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "066015d802cc67fa47ceaf9d8a0366c3"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "d8bb36445f2534dc04e42e9e0d7038cc"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "af0bbedeac74861e652fba3091c83ddd"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "211edfe3141236aa0b0fef81384a351d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "8735e6fd764afcde693653f5ddd2ad19"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "67da0fd5021834779f029f24555a4b90"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "a6c3c959de10ea3968c321876742da4b"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "77d03c9245150f6a3e5956fc658251ac"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3bf248172c3f7c0214c8494ac129a41e"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "146dcb69573d1fc4544eb5bcbf3d74fa"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "f6fcfb5df04969748c99215622932016"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "da67311c836db325160d014d66a84d71"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "0014d3d524eda5912f91278e3c19eb47"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "fafda301a8d1f9ceb8653c23221739c7"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "acdf352ad77bcfcfe9858a7a4d17db65"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "23bc7066f9e038d1bae63923fac51d9d"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "68124a8e72de0704edbd624e8bd12c61"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "173043487ababe68fbf55272a973d50b"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "242a3d3a83401445bc8c1748b34a360c"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "b729e909a298875cb25e49532c34551f"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "3b59af4520a0f37cb859df2c1e3c4aa9"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "30afb26d0d64975558a715056e3da06a"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "5623a6425c6aa92ceaaafafa2a3ce29e"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "a405daa6013a363eaf33d48eefecdf9c"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "12af449540f7f793bde3a7085343d8ce"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "5710eb53a1666a7eaa4129cb8baf5233"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "e6c2aa869e86cc8be9f35e603b8663a8"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "0480099acadd3248f804ca9619fb7425"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "a94387f37a89366b8f415f423e44f73d"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "9ac5b907d058782410b06964b2e09619"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "82aa10c160b39f97be89327caf7a19c2"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "4af3ed3198e674ae47fc9e873275cbe3"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "1f498cc2af047cfa472744076a011253"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "df654bd961642f2714110b15824fe6d6"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "0a432a093410532b4fc65e2ab4818108"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "b626b728fea225b1838beca58216e03a"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "ea4a996163f6f53202277f9dea7b2f85"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "401538d6fc02382a505bf1240a4f63e0"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "84c1c263e82b012182f5660419a233a6"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "3b9546c3a9af7f1e05ca82a7a8aa47d6"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "9732cee4585b2ae0f6248b0e8ec2aca8"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "e9ba684270bc82709dde92f7e7409178"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "766b052d5a5165a8768c49b9763b07c2"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "a7e1d28dc05f93c72a47a05d08409304"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "4eec4305f8c6cdab126040fcbf8000d0"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "95dc025768c99107465b45463a7e08f7"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "526b3f8892f2ebfb59a1fa256a3683e8"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "76202b5179d7b6728f02e3bef4fffb5e"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "811ba5929adc8e5e0ffa0bc2bcc169df"
  },
  {
    "url": "404.html",
    "revision": "d0735131375e47777ef18a1781386b95"
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
    "url": "assets/js/100.56d8df8d.js",
    "revision": "3da4abc422ccb98a397a2ff9282b34fc"
  },
  {
    "url": "assets/js/101.c82a99c7.js",
    "revision": "cc8ddd2bc257f5c7e9f211b00f8a4697"
  },
  {
    "url": "assets/js/102.36d2050d.js",
    "revision": "0952bf86988e753c5dcc470d1883944f"
  },
  {
    "url": "assets/js/103.440a1a7b.js",
    "revision": "b08a09d8e6fdc51fb8df700b62375119"
  },
  {
    "url": "assets/js/104.069d269b.js",
    "revision": "0e6dfaf4e86ff6ca90f9f9db85490817"
  },
  {
    "url": "assets/js/105.73ed06eb.js",
    "revision": "4e0dfc8a303464c841089d166d67bd7d"
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
    "url": "assets/js/108.41c1b1a2.js",
    "revision": "a9a4681f8acd612859d759b35379852f"
  },
  {
    "url": "assets/js/109.6a8bec0d.js",
    "revision": "0d1291a958c7af10924e2638fab0f23b"
  },
  {
    "url": "assets/js/11.e467e7aa.js",
    "revision": "d27955c34dffdea6cbd6f2c93836f738"
  },
  {
    "url": "assets/js/110.1119b585.js",
    "revision": "715383996623a28d80be3311eff76f21"
  },
  {
    "url": "assets/js/111.5333766c.js",
    "revision": "02782dd77f4ff9ccd047cbbdd076dbd5"
  },
  {
    "url": "assets/js/112.7dc2ec56.js",
    "revision": "ecd1b8381acc976ea8813bc435e91971"
  },
  {
    "url": "assets/js/113.db0f575e.js",
    "revision": "e3bafa1b59fb3898a259db3af19d2dd1"
  },
  {
    "url": "assets/js/114.cfe8338b.js",
    "revision": "392ebada95610d810f14960c1576a314"
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
    "url": "assets/js/117.4170ae25.js",
    "revision": "580043280def2e0e6f4281be5ce33291"
  },
  {
    "url": "assets/js/118.bede2e12.js",
    "revision": "a1f01f4c60c5b02d08da351cb0ca7b1e"
  },
  {
    "url": "assets/js/119.572f2ac0.js",
    "revision": "c374fb56fdc2e8c73028b6efd96650ec"
  },
  {
    "url": "assets/js/12.db523a6a.js",
    "revision": "e756b7317ad43362114b1185cea053ad"
  },
  {
    "url": "assets/js/120.7ced444e.js",
    "revision": "6aade14f450f2a66a1f6c0a3c262ac55"
  },
  {
    "url": "assets/js/121.a08aa16a.js",
    "revision": "ebce147d86c8eab6e3732c848404bdc0"
  },
  {
    "url": "assets/js/122.907c4e7d.js",
    "revision": "c869ea5de07d9a43df68bdf53a3df912"
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
    "url": "assets/js/127.1ec848b4.js",
    "revision": "8d2c64aad08eac2e11c57c6df9d1b95d"
  },
  {
    "url": "assets/js/128.5eadac43.js",
    "revision": "b313e448362f4a7f6b3be91452c5347d"
  },
  {
    "url": "assets/js/129.51ac3946.js",
    "revision": "4b1376cb3e1d1b91ef8836321f87a02d"
  },
  {
    "url": "assets/js/13.ac288e7a.js",
    "revision": "e0c29bff93826ccaaad45fe9781d92c5"
  },
  {
    "url": "assets/js/130.444706a3.js",
    "revision": "a90a7822ff2ab6ae1568fa55e34ec179"
  },
  {
    "url": "assets/js/131.c5212169.js",
    "revision": "d9b6b1774bbb9c70a374fee539db1c7b"
  },
  {
    "url": "assets/js/132.e38a453d.js",
    "revision": "34e822540671ea570d8838f295dbaadc"
  },
  {
    "url": "assets/js/133.b834216f.js",
    "revision": "cd047af526246604f47cc714ae4886c5"
  },
  {
    "url": "assets/js/134.275b07a1.js",
    "revision": "b749614d9beede263d2b610c35d60e6a"
  },
  {
    "url": "assets/js/135.7a385cb6.js",
    "revision": "6d27582a9c3265cffdc76c2ab76af9d9"
  },
  {
    "url": "assets/js/136.3d48f2e1.js",
    "revision": "067cf3aaa0bb94a0b6b66401fa60c773"
  },
  {
    "url": "assets/js/137.8ffa2c2b.js",
    "revision": "55646f7e0e765723f04386b2bcfae254"
  },
  {
    "url": "assets/js/138.1565811b.js",
    "revision": "36301ea7d2c45062144121a9c572d3c6"
  },
  {
    "url": "assets/js/139.66923a30.js",
    "revision": "ecdea40607f89d96e5b5eb7ce5d67cb0"
  },
  {
    "url": "assets/js/14.8225a7a9.js",
    "revision": "fdd94bc85f24f3e2178d43dcfd3630dd"
  },
  {
    "url": "assets/js/140.fdd5bfec.js",
    "revision": "4130421aa93643fd5e7d70cb56aba11a"
  },
  {
    "url": "assets/js/141.08b521cd.js",
    "revision": "465d568037a1ef5f4da4c91ddff356b9"
  },
  {
    "url": "assets/js/142.894f5733.js",
    "revision": "bfd2df9f271a9be0755685284116c7b3"
  },
  {
    "url": "assets/js/143.d9144c67.js",
    "revision": "c5d9dfb0e0b8b86139bdd26d2f82d85c"
  },
  {
    "url": "assets/js/144.39362c1f.js",
    "revision": "83e1551eecd1d88a06b349d24215c0b3"
  },
  {
    "url": "assets/js/145.6647f343.js",
    "revision": "94d719bf9451927b26bdb8dfa2e7dc45"
  },
  {
    "url": "assets/js/146.cb6de9c3.js",
    "revision": "2500313b4973598a9003f248e84595db"
  },
  {
    "url": "assets/js/147.2aeaf0c8.js",
    "revision": "2d4f098817aa8b3d515a14e575680ff1"
  },
  {
    "url": "assets/js/148.7bed58fd.js",
    "revision": "b6e1bd44608d77661686709cd6ea8500"
  },
  {
    "url": "assets/js/149.4fc17be1.js",
    "revision": "11946d2f4ba00e5aed86c94534f06e3c"
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
    "url": "assets/js/151.623b07b6.js",
    "revision": "50991db2f728b86704e425be8495f380"
  },
  {
    "url": "assets/js/152.892c5cff.js",
    "revision": "87584e34422779df50463b35a3a9a43c"
  },
  {
    "url": "assets/js/153.932571be.js",
    "revision": "385de709590cfc5365cee66558c0d05d"
  },
  {
    "url": "assets/js/154.c56cb681.js",
    "revision": "569b09e3b037a322001847061ea930c1"
  },
  {
    "url": "assets/js/155.74989088.js",
    "revision": "80e45f5c395e58b3785a9ef2fa15a07b"
  },
  {
    "url": "assets/js/156.a1a442db.js",
    "revision": "468f4b2966d91ead0187409f4141aa4b"
  },
  {
    "url": "assets/js/157.c2c21984.js",
    "revision": "5f06c38cd46fdcb4194b6a314c64a59e"
  },
  {
    "url": "assets/js/158.7a9b9972.js",
    "revision": "ae08a94824296e6dde988b84c28513d3"
  },
  {
    "url": "assets/js/159.aeb04f5f.js",
    "revision": "45d9e0c6625351f4e37c6812033ab898"
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
    "url": "assets/js/161.63f83db7.js",
    "revision": "7129a29bd296f01152a77a2a05b2b8f3"
  },
  {
    "url": "assets/js/162.3e8a102e.js",
    "revision": "16a3ff71d29670fec551330184a1b3de"
  },
  {
    "url": "assets/js/163.3562e7ab.js",
    "revision": "bd73c430b252b9f20297429d15a101bc"
  },
  {
    "url": "assets/js/164.080bcb55.js",
    "revision": "327e784e0b27b24690705acb356b0784"
  },
  {
    "url": "assets/js/165.2ac9b181.js",
    "revision": "7666dbf96a550c8608039f0cef35c908"
  },
  {
    "url": "assets/js/166.7ca96344.js",
    "revision": "b4c0df847fbdc65146c441b989d2e0f9"
  },
  {
    "url": "assets/js/167.7dfa6986.js",
    "revision": "7b7665ee6d10b993a7cdcef48ff46fb7"
  },
  {
    "url": "assets/js/168.a31d8f87.js",
    "revision": "91aaf4d903d53218f7111fe1fb946f87"
  },
  {
    "url": "assets/js/169.fdebc1dc.js",
    "revision": "c6028ede18fc16101c5959ca256ee4ae"
  },
  {
    "url": "assets/js/17.d2d5f43e.js",
    "revision": "03203dab5f01f558e77243d559e89a7e"
  },
  {
    "url": "assets/js/170.0bec6a35.js",
    "revision": "7f4df48e63ad736474fdd08127307fb8"
  },
  {
    "url": "assets/js/171.09a0fc2d.js",
    "revision": "32c4aa7a098b32439cd699611603fdde"
  },
  {
    "url": "assets/js/172.93276a26.js",
    "revision": "2a4f89618b0ad748091087be0e8bfedc"
  },
  {
    "url": "assets/js/173.85a26d7b.js",
    "revision": "b332eff809beea3f3a0bd55a2b7ad491"
  },
  {
    "url": "assets/js/174.2285982b.js",
    "revision": "d24399878dac847a8cec0b408fd9200c"
  },
  {
    "url": "assets/js/175.33d2bf80.js",
    "revision": "7a295678527ddeca1be6f66176091c18"
  },
  {
    "url": "assets/js/176.282b64bd.js",
    "revision": "43922385d1e6b1b11baa1664ede59d3d"
  },
  {
    "url": "assets/js/177.a01ce3e4.js",
    "revision": "a164f684c6010e99ef491f087c4f317d"
  },
  {
    "url": "assets/js/178.d6c78b5c.js",
    "revision": "31a24a101cd2f56c3bb57e1f102d2513"
  },
  {
    "url": "assets/js/179.430bf74c.js",
    "revision": "8887e74d8bf36a1bd85421a0c1e8830b"
  },
  {
    "url": "assets/js/18.0d308363.js",
    "revision": "b1374d5baea8dd1711ee32d79d177505"
  },
  {
    "url": "assets/js/180.c64196b7.js",
    "revision": "e9555d44632db0b521c29c248f1d9732"
  },
  {
    "url": "assets/js/181.f18e4fcf.js",
    "revision": "a8cd1a56b14f410a1f82ae1a0cf3273c"
  },
  {
    "url": "assets/js/182.672fbdae.js",
    "revision": "a30e523b78f1a8be8041f8d8f81168d6"
  },
  {
    "url": "assets/js/183.ef14fc42.js",
    "revision": "4368c17c2a203dec65d1abed407f0284"
  },
  {
    "url": "assets/js/184.963d737a.js",
    "revision": "8bec86b7e401df2343ac2375fd6707f6"
  },
  {
    "url": "assets/js/185.792b0792.js",
    "revision": "290d5f825e95c08e8abab2fb548e0d4f"
  },
  {
    "url": "assets/js/186.2bf9953d.js",
    "revision": "41ff705705fcc0e6fcbbf8f0e7246a65"
  },
  {
    "url": "assets/js/187.3bca26e7.js",
    "revision": "caa59618d62cb19058ed4466fee53397"
  },
  {
    "url": "assets/js/188.726d933e.js",
    "revision": "bc925088d1cdd7efd6921ccaa4cb9ec5"
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
    "url": "assets/js/190.15020a83.js",
    "revision": "016976426cff022a8525469b5ab07591"
  },
  {
    "url": "assets/js/191.4768967d.js",
    "revision": "8e42036ee784309fdc538f5effeb5604"
  },
  {
    "url": "assets/js/192.1ab7f65c.js",
    "revision": "dfa50aec222acc5f49b4ebeabb1975a9"
  },
  {
    "url": "assets/js/193.585546d4.js",
    "revision": "90fa3ce76c637e83981a045469cca74b"
  },
  {
    "url": "assets/js/194.0ed705bb.js",
    "revision": "5e36d452480e6ee742aa21c206bf8d7a"
  },
  {
    "url": "assets/js/195.f2a85832.js",
    "revision": "7f09accdfa372e2e20a861b8149697ba"
  },
  {
    "url": "assets/js/196.dad34c66.js",
    "revision": "c8ff5df0f1bf43acb1ec3e7c8aacd36e"
  },
  {
    "url": "assets/js/197.36071ccc.js",
    "revision": "af4e3827255983e25768324d0471bdf4"
  },
  {
    "url": "assets/js/198.7d4c1c14.js",
    "revision": "02ef45257e1b1c5d34ff059132609d5f"
  },
  {
    "url": "assets/js/199.7518db2b.js",
    "revision": "b45b93422e13eb38cebe8789a9959282"
  },
  {
    "url": "assets/js/2.f60fb795.js",
    "revision": "64570ce90e9ca32b0ae88584c1831a23"
  },
  {
    "url": "assets/js/20.9207cc26.js",
    "revision": "90f424404b3396c2c3561f089680708b"
  },
  {
    "url": "assets/js/200.c3adc0de.js",
    "revision": "3c894382ca11fe6c7c2cae18c846b59d"
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
    "url": "assets/js/204.81b80b2e.js",
    "revision": "674df3037e046065c0809839aeb78b21"
  },
  {
    "url": "assets/js/205.437c7d3e.js",
    "revision": "0b9c78aedf3e386c4153b7aff4af4b62"
  },
  {
    "url": "assets/js/206.580ba386.js",
    "revision": "4127de22e35c1157db390d7ed526a2cc"
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
    "url": "assets/js/209.ad79b228.js",
    "revision": "82d9c249a12fe51910a0a6e4a8d95512"
  },
  {
    "url": "assets/js/21.329df3b0.js",
    "revision": "84ee8486d8c489e22eafa7ad5599effa"
  },
  {
    "url": "assets/js/210.f2c9bf0f.js",
    "revision": "5a56bb280660c7a583d9420cdc580c57"
  },
  {
    "url": "assets/js/211.d2d3b8da.js",
    "revision": "562e02b83a87d70024d35e328f64c8a5"
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
    "url": "assets/js/217.a52446de.js",
    "revision": "9e4990079c9473a63e435a7aa6cd5f58"
  },
  {
    "url": "assets/js/218.e512ff3d.js",
    "revision": "f24168b028fcb4e8c62a960cf0a85681"
  },
  {
    "url": "assets/js/219.83fe0cdc.js",
    "revision": "e19310ef1e05c4ef2af5ed8293e16a39"
  },
  {
    "url": "assets/js/22.54e9474d.js",
    "revision": "ef1debb3371d49dba86a7295d3d3b518"
  },
  {
    "url": "assets/js/220.98208cb6.js",
    "revision": "900b35272503fb9b35c3ebae26596234"
  },
  {
    "url": "assets/js/221.f5223dde.js",
    "revision": "6363310488153a6ec5b593744dda0823"
  },
  {
    "url": "assets/js/222.f50dbd91.js",
    "revision": "67774edc09f7e3179d66c2d0579fc6b6"
  },
  {
    "url": "assets/js/223.db865265.js",
    "revision": "24b15a27abe31d7bb30a920a028f3237"
  },
  {
    "url": "assets/js/224.acde20ef.js",
    "revision": "32575e3d69164a7c25bd3af89dacc5de"
  },
  {
    "url": "assets/js/225.491f8ac7.js",
    "revision": "7676450d27caadcb4072b00b8cfd3572"
  },
  {
    "url": "assets/js/226.4d6e1807.js",
    "revision": "628cc9b8db9cdcd84a73bfb65cd21ba4"
  },
  {
    "url": "assets/js/227.2d0f3814.js",
    "revision": "ca1ec18470a3433edd257625fa0653ce"
  },
  {
    "url": "assets/js/228.55daf5ea.js",
    "revision": "ba084cd9c084ce81a75d4bc28854ae7c"
  },
  {
    "url": "assets/js/229.1bd93c4c.js",
    "revision": "5758fe887080a983321499726fab75ec"
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
    "url": "assets/js/231.698b8d7b.js",
    "revision": "b444723e9312c1d1a62d25638475e7b8"
  },
  {
    "url": "assets/js/232.4a679dc6.js",
    "revision": "290d4c6c979c0227422126292cb04ebf"
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
    "url": "assets/js/241.bfc7fd37.js",
    "revision": "104fc3c7ff4e5c4c34a6ac515ad1af08"
  },
  {
    "url": "assets/js/242.46c013fe.js",
    "revision": "78fb67393267c94bc00adfb7c5db6266"
  },
  {
    "url": "assets/js/243.5a21aabe.js",
    "revision": "92bd14335c5b6715fc1b3500174d3071"
  },
  {
    "url": "assets/js/244.19707128.js",
    "revision": "d05b6563b793554f64080746a270a571"
  },
  {
    "url": "assets/js/245.5f02437d.js",
    "revision": "693a7e5e92d051c528dd01712ce5dacf"
  },
  {
    "url": "assets/js/246.c7317dd6.js",
    "revision": "3c149870a272a0f4a7bd39f708d55300"
  },
  {
    "url": "assets/js/247.63ba26e5.js",
    "revision": "d03d94514ab45085b7ece7dbbe8d6ce6"
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
    "url": "assets/js/253.4716f2a5.js",
    "revision": "2239a0be39ac77ff9f17da2952c5fa4c"
  },
  {
    "url": "assets/js/254.1ddb7519.js",
    "revision": "109cb7bc4d1b607f8c01985d9925eb72"
  },
  {
    "url": "assets/js/255.918794f0.js",
    "revision": "96c9c59eb898fc61608446f3670851c7"
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
    "url": "assets/js/261.381f78ca.js",
    "revision": "33cea132d8734b77b978fe528d132a1f"
  },
  {
    "url": "assets/js/262.4949f1c0.js",
    "revision": "5f4e60000360e35b607249cedc1f10ca"
  },
  {
    "url": "assets/js/263.ca2b393d.js",
    "revision": "bc7116c151ffc8a85a34ff27194a6252"
  },
  {
    "url": "assets/js/264.cea777ac.js",
    "revision": "d0b95706a617d0d45b1e30877a0deb10"
  },
  {
    "url": "assets/js/265.1ffc4a47.js",
    "revision": "b4d2d88be2e80db1e3963a4ad732d904"
  },
  {
    "url": "assets/js/266.8317f70f.js",
    "revision": "d8c2c36b2cab785cd5ee56c4ba478a52"
  },
  {
    "url": "assets/js/267.b7385204.js",
    "revision": "bdac2c36c83f4b3d1931abac9e73312d"
  },
  {
    "url": "assets/js/268.76db94b0.js",
    "revision": "f8b3e2514d53dbe4b6bc08443ff7a375"
  },
  {
    "url": "assets/js/269.3d0261ca.js",
    "revision": "c280982908362e3bf0e81f14fcff661a"
  },
  {
    "url": "assets/js/27.2b8266d6.js",
    "revision": "3ef7252e75a3a184542806a7a9b34f3f"
  },
  {
    "url": "assets/js/270.42d974db.js",
    "revision": "cb463c0a5a2904525df552af5888bc7c"
  },
  {
    "url": "assets/js/271.39847d64.js",
    "revision": "ec9dbf602a5d312fd1a0dd9b60af3473"
  },
  {
    "url": "assets/js/272.59ad4808.js",
    "revision": "03416a6c2409473ec3e697550236237a"
  },
  {
    "url": "assets/js/273.7011e607.js",
    "revision": "780c20dc8662c030fd6031ad059ccff2"
  },
  {
    "url": "assets/js/274.06219d54.js",
    "revision": "8c5d7070b1687b17685bf15b5d92e9b7"
  },
  {
    "url": "assets/js/275.48822552.js",
    "revision": "2343f51e5a2789676a2d3180a3cd973b"
  },
  {
    "url": "assets/js/276.5c8ef040.js",
    "revision": "1a53383175fbb29cd1f5cca2cd8cee48"
  },
  {
    "url": "assets/js/277.d3dc2df4.js",
    "revision": "246e81684b9bd43c043c9f1287adba26"
  },
  {
    "url": "assets/js/278.5f221d03.js",
    "revision": "a9a67a3413e8c2eb79b52f827d1cfbd2"
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
    "url": "assets/js/280.78e7fab6.js",
    "revision": "7882ce6781f65554ea9123181df0615b"
  },
  {
    "url": "assets/js/281.4e01d289.js",
    "revision": "eda0defe97d4eb6a37e542a93eab97c9"
  },
  {
    "url": "assets/js/282.e50c8288.js",
    "revision": "d238325bd8d3fa6f87eadf2902ded6b0"
  },
  {
    "url": "assets/js/283.b7a9ff03.js",
    "revision": "98f2cc63cd288bf9bf3f106ca614429e"
  },
  {
    "url": "assets/js/284.2383d499.js",
    "revision": "edd635ea2d103bae20b621f0675cad98"
  },
  {
    "url": "assets/js/285.7db9db8e.js",
    "revision": "ffdd27d86f80527e4acf7e1a7fa312ed"
  },
  {
    "url": "assets/js/286.a289f091.js",
    "revision": "2b003fd7e0aa29473e6489af1c28e6dd"
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
    "url": "assets/js/29.cd622e96.js",
    "revision": "2c4cff71d3f642919afa86b7d716ef6a"
  },
  {
    "url": "assets/js/290.ad4b1d2c.js",
    "revision": "3db2bf9a5b84228a076352e187bf5458"
  },
  {
    "url": "assets/js/291.395496f3.js",
    "revision": "0feb47bd96a099c5735644560a431182"
  },
  {
    "url": "assets/js/292.f7376c1c.js",
    "revision": "e755f6e707bea3d6490d4bf62c87fae5"
  },
  {
    "url": "assets/js/293.d5dcf114.js",
    "revision": "962f6d0d17f809eb254fd5e3eceeff84"
  },
  {
    "url": "assets/js/294.fca785c3.js",
    "revision": "db5271fa40da72d0102cbc52358bb2cd"
  },
  {
    "url": "assets/js/295.765bbde4.js",
    "revision": "b25d2a5a817f7c1bda7dcbee421f8f44"
  },
  {
    "url": "assets/js/296.32eb16e7.js",
    "revision": "fa71057d14c40e06c7f8c921416e1d00"
  },
  {
    "url": "assets/js/297.128b36fe.js",
    "revision": "dc20eca0628006ac8b28b1dd80099061"
  },
  {
    "url": "assets/js/298.5d27f87b.js",
    "revision": "ba229857b8d439f6825bf07da1b13682"
  },
  {
    "url": "assets/js/299.639c15fc.js",
    "revision": "88ab7a8b1ed66cff4d36fb24e41b6398"
  },
  {
    "url": "assets/js/3.38524212.js",
    "revision": "c527a98b7c8ea60616770d87411fcc60"
  },
  {
    "url": "assets/js/30.cd34faaf.js",
    "revision": "fdf03cc6315ac6635dc196191eab1889"
  },
  {
    "url": "assets/js/300.cafe4736.js",
    "revision": "0b23382aafb0179758b385af7a0bb776"
  },
  {
    "url": "assets/js/301.710ec844.js",
    "revision": "cb21f6a35d82a2642582257741f9b717"
  },
  {
    "url": "assets/js/302.043d4871.js",
    "revision": "3a03101f6a5ccd16f8f74ea0487efc71"
  },
  {
    "url": "assets/js/303.7bc93dd7.js",
    "revision": "84d48540d263d87429cecec2d24ad163"
  },
  {
    "url": "assets/js/304.75ad0736.js",
    "revision": "93cd61e7c51e53f86f0a227dea6979e2"
  },
  {
    "url": "assets/js/305.7d60f813.js",
    "revision": "3a7161b0cc21c04d71827514d58c0bcc"
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
    "url": "assets/js/308.4eecbce3.js",
    "revision": "147eb7498fe77ebd7970c681a02b54c5"
  },
  {
    "url": "assets/js/309.78ec28d5.js",
    "revision": "f4bafb0cb122a76062454d87df5190cf"
  },
  {
    "url": "assets/js/31.fe5502f5.js",
    "revision": "05a636c3a8ea0187764beff3ac884efa"
  },
  {
    "url": "assets/js/310.5ed86ec0.js",
    "revision": "f08b364a4b9f8a1c764033413b9d7b92"
  },
  {
    "url": "assets/js/311.a69abfea.js",
    "revision": "1739cfe9b3efc57d92d1b9eafd5c6674"
  },
  {
    "url": "assets/js/312.80a94705.js",
    "revision": "504b4524ab6a68de2a3f532185c3fce4"
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
    "url": "assets/js/315.f8fd4600.js",
    "revision": "2201a92fc038e15bf11cefb83605e74c"
  },
  {
    "url": "assets/js/316.945fb777.js",
    "revision": "23bd5924f8cb126e3bfeb774a14fb79a"
  },
  {
    "url": "assets/js/317.3e1a3338.js",
    "revision": "2140eef645892d4c4d79d0a46a63c604"
  },
  {
    "url": "assets/js/318.ade199b5.js",
    "revision": "33bce41aecc6b072b1783a899e1f8e64"
  },
  {
    "url": "assets/js/319.ac0539f3.js",
    "revision": "dd96d556e60aee5e2bdd74d9d76e3522"
  },
  {
    "url": "assets/js/32.bb0bb275.js",
    "revision": "3c8554b6c3b2c2abd81dad73c770c100"
  },
  {
    "url": "assets/js/320.6beadd5e.js",
    "revision": "4b7554676a1708d419748ffe19e4f34d"
  },
  {
    "url": "assets/js/321.9e5dc080.js",
    "revision": "784c9e150da4cfb4bd2f89cc4d2a1da2"
  },
  {
    "url": "assets/js/322.da9058c7.js",
    "revision": "5e9d71abc7eae42c75c54586bf887027"
  },
  {
    "url": "assets/js/323.07bb7d8c.js",
    "revision": "ec04a7380fae6f588da949f134befbd7"
  },
  {
    "url": "assets/js/324.b0f4048d.js",
    "revision": "3bf3365c3bad871cea36cda9190c09f7"
  },
  {
    "url": "assets/js/325.f290d1a9.js",
    "revision": "b03ba9e1a08eb635227a0418b5dbb11d"
  },
  {
    "url": "assets/js/326.0ee4b104.js",
    "revision": "2e29bc09e5ce57930251a0a272a393cd"
  },
  {
    "url": "assets/js/327.2b123c2e.js",
    "revision": "e2b1f87ed987d078902de0a8e9535449"
  },
  {
    "url": "assets/js/328.79fe6a0b.js",
    "revision": "bcda656562ccf099539de9a12c75b083"
  },
  {
    "url": "assets/js/329.9490bb46.js",
    "revision": "2e576640e4e86692b735579893fcd0ce"
  },
  {
    "url": "assets/js/33.c5654691.js",
    "revision": "80a8aaaa1a917c78e3e7ea45da04060e"
  },
  {
    "url": "assets/js/330.3856b36d.js",
    "revision": "24af9ab5f27e0f56297a0c29d7d296de"
  },
  {
    "url": "assets/js/331.ff3afff7.js",
    "revision": "ea943195647c831ab946707ac75279eb"
  },
  {
    "url": "assets/js/332.6bd59e9f.js",
    "revision": "ae66fd7b1c716c0a31e6a4ca7f22a600"
  },
  {
    "url": "assets/js/333.e7881157.js",
    "revision": "214a0e4f637ae4d344cf73ac480acce9"
  },
  {
    "url": "assets/js/334.4b4e1ba5.js",
    "revision": "d6b70766060cde8af5c9df0d6d450508"
  },
  {
    "url": "assets/js/335.975735a5.js",
    "revision": "d50676968798e617cadf6f931cad3069"
  },
  {
    "url": "assets/js/336.c085b0a4.js",
    "revision": "f2eb2d42e225f13056d09088ad37b3cb"
  },
  {
    "url": "assets/js/337.5e7878dd.js",
    "revision": "f01969eb7bfc7547355a9f4c434ab3e7"
  },
  {
    "url": "assets/js/338.8e93d720.js",
    "revision": "84c7e49b0ec2263fbaed41839c0b92bc"
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
    "url": "assets/js/340.9dd2bf8c.js",
    "revision": "9f39827f023cb50dbc624af7d5664818"
  },
  {
    "url": "assets/js/341.d6011aa7.js",
    "revision": "e78874bff8412cb74115c56b43e432ec"
  },
  {
    "url": "assets/js/342.606f921c.js",
    "revision": "c4cb55383483c18b09f38ff82ce95188"
  },
  {
    "url": "assets/js/343.725847c5.js",
    "revision": "faff05aaad6c9cdae9737122153eaeb4"
  },
  {
    "url": "assets/js/344.9cb68d26.js",
    "revision": "4f2eec855a4f41f4b5d99107cc6b9580"
  },
  {
    "url": "assets/js/345.c456a0f7.js",
    "revision": "dc7d1b1db30979829a26862581547186"
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
    "url": "assets/js/348.379f25a4.js",
    "revision": "60a22463458efda5da988f308995deaf"
  },
  {
    "url": "assets/js/349.4d2a01c3.js",
    "revision": "386394ff2f56f8db1623f28e22e70a0a"
  },
  {
    "url": "assets/js/35.bfec71be.js",
    "revision": "c6e3b0e4fe4a6a39e419605fbe9a5703"
  },
  {
    "url": "assets/js/350.acb86927.js",
    "revision": "afa05cb4b6ca3e3c4526345fc372e313"
  },
  {
    "url": "assets/js/351.df0360e7.js",
    "revision": "12cf6abae4a9a92a25340cb3d0a1b8cb"
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
    "url": "assets/js/355.f2d2f435.js",
    "revision": "cd0503d9165069348f44a09c117d0f91"
  },
  {
    "url": "assets/js/356.3a3484d8.js",
    "revision": "c76f4ed961e0958d000646d997df7fe5"
  },
  {
    "url": "assets/js/357.6d9e16b2.js",
    "revision": "1322f45ac6ff291ecb92c1c9b54ac29f"
  },
  {
    "url": "assets/js/358.ce3018a5.js",
    "revision": "d9a1cf8a11ba5de2d19d50f7213d741c"
  },
  {
    "url": "assets/js/359.5f910f05.js",
    "revision": "86365b8d14d9dffa354146a983d99190"
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
    "url": "assets/js/361.189535b6.js",
    "revision": "e9bbd75c10b227c3e6ec0683a608f9fb"
  },
  {
    "url": "assets/js/362.6fb16e16.js",
    "revision": "d02c2a63cb5375d68e6f4fc56553236d"
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
    "url": "assets/js/365.a27710d8.js",
    "revision": "c4e48edb377a334be22e48f47a5de168"
  },
  {
    "url": "assets/js/366.c5c4bc15.js",
    "revision": "0dc897befd86c72fd00d3150c481d4c6"
  },
  {
    "url": "assets/js/367.ddaac428.js",
    "revision": "280e7c67aa8f7b20799fdfb13125db2e"
  },
  {
    "url": "assets/js/368.83926200.js",
    "revision": "6c2f173f929e094c38b49d658e4c608a"
  },
  {
    "url": "assets/js/369.aea5bc6c.js",
    "revision": "eafddae39b14f3678c8d38da8518aae8"
  },
  {
    "url": "assets/js/37.7ab32842.js",
    "revision": "785d1b0b35cc4e4c1afa21acf7f892f8"
  },
  {
    "url": "assets/js/370.ba2561fc.js",
    "revision": "f5ea634e29f4ba74aa3b157843194c06"
  },
  {
    "url": "assets/js/371.8b0866b4.js",
    "revision": "b5e81fa5d2c0804b3f4749c9965b1600"
  },
  {
    "url": "assets/js/372.a53dd99d.js",
    "revision": "456366b4398f1d7d0b105cee04d4e7dd"
  },
  {
    "url": "assets/js/373.885ba4bc.js",
    "revision": "1893b719627c9f984b03f150b394ed25"
  },
  {
    "url": "assets/js/374.ade4e754.js",
    "revision": "44a11561a8eee346772e4ce517bae9e9"
  },
  {
    "url": "assets/js/375.566fa268.js",
    "revision": "e309af7922830c9269c5f8f3bb393798"
  },
  {
    "url": "assets/js/376.15001a25.js",
    "revision": "4cdc37c0f1998fa1c2e1d5ea8d5a77d4"
  },
  {
    "url": "assets/js/377.886a60d1.js",
    "revision": "4edb3d165e2ad57b7e52950cf307f0bc"
  },
  {
    "url": "assets/js/378.ff7cd8c5.js",
    "revision": "1a3749955592c8770d30a6189a71fa8b"
  },
  {
    "url": "assets/js/379.e79cf6aa.js",
    "revision": "6d74e5076f472f185d527de828e005b2"
  },
  {
    "url": "assets/js/38.c1fb5fc6.js",
    "revision": "34d7136d7df7f13679ffd0f787ccf40b"
  },
  {
    "url": "assets/js/380.cc351cbe.js",
    "revision": "113a0f07e94dd0d29cebb39d695a31d0"
  },
  {
    "url": "assets/js/381.a9f80230.js",
    "revision": "4591bf40807a5680418d9e4cd8b52974"
  },
  {
    "url": "assets/js/382.e8dd8d72.js",
    "revision": "f51222d8b32f1d5ce926d863cd9053b0"
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
    "url": "assets/js/385.95e4bb23.js",
    "revision": "844dc6f25ad6673be4ae1e1f25f8f014"
  },
  {
    "url": "assets/js/386.3c1dd92d.js",
    "revision": "c28c771f561299587412884f7754d283"
  },
  {
    "url": "assets/js/387.cff7b46f.js",
    "revision": "e7630d4f35d370996ac10f2bade5b912"
  },
  {
    "url": "assets/js/388.5972beba.js",
    "revision": "d7de4b1a4ed1f5a7b980f0c29560d22a"
  },
  {
    "url": "assets/js/389.6853840b.js",
    "revision": "305253fc5d94dec26f8d4a9390194a72"
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
    "url": "assets/js/391.2286af47.js",
    "revision": "c537645de22e895b42e83395861fad76"
  },
  {
    "url": "assets/js/392.877f6eb9.js",
    "revision": "37f1b7e13a0fac4b9f52e340ad313657"
  },
  {
    "url": "assets/js/393.cbd2d828.js",
    "revision": "abec9cbfb7806f8ab74022c8d9f740b4"
  },
  {
    "url": "assets/js/394.c9d69207.js",
    "revision": "affd098a51f19dbe9a88bfbc582ec3a4"
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
    "url": "assets/js/398.cef0f13b.js",
    "revision": "3504bd14be500185e11f92f14b8b863a"
  },
  {
    "url": "assets/js/399.61af3446.js",
    "revision": "49d67d3746a44425bbf588ffe2a0d4b5"
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
    "url": "assets/js/402.593260f7.js",
    "revision": "adeb0fafe68c03106437fda7636f31fc"
  },
  {
    "url": "assets/js/403.bbcdf7d8.js",
    "revision": "0775d386110096f2064efd969568135b"
  },
  {
    "url": "assets/js/404.59eb058b.js",
    "revision": "d91e45197b3335a3f132c056827b3319"
  },
  {
    "url": "assets/js/405.8be90af7.js",
    "revision": "451080b630d8537ab005797c49f9755e"
  },
  {
    "url": "assets/js/406.9cf4c776.js",
    "revision": "2533bd7a86e89be9f574438374ad8059"
  },
  {
    "url": "assets/js/407.c935d117.js",
    "revision": "b35dc37a75bdcbdf41fa330de17af641"
  },
  {
    "url": "assets/js/408.8a4c9046.js",
    "revision": "15b65e58b45a03069f610742b099fe0e"
  },
  {
    "url": "assets/js/409.a3a0af48.js",
    "revision": "a58d00f9fd692ed48784a3e7d44c6d77"
  },
  {
    "url": "assets/js/41.3da09379.js",
    "revision": "a49316f943100b9ac62fe741dd36fa64"
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
    "url": "assets/js/42.f149b4a3.js",
    "revision": "b07d82757fdea03ade4a03210c2e6fa4"
  },
  {
    "url": "assets/js/43.40b922ca.js",
    "revision": "ce59031cb5489b3615abda9279a4fbd1"
  },
  {
    "url": "assets/js/44.647b348e.js",
    "revision": "fc5defe3844281fc52f879ac1a1a39ef"
  },
  {
    "url": "assets/js/45.d42fec7a.js",
    "revision": "c7eef912c00e160fbf9383c3b5091faf"
  },
  {
    "url": "assets/js/46.0267cd3f.js",
    "revision": "ca82949473b6d821a8bcb09bf1629696"
  },
  {
    "url": "assets/js/47.4974dded.js",
    "revision": "0c6279b87a28f3a65dd9c1f300a9cc08"
  },
  {
    "url": "assets/js/48.fbf80316.js",
    "revision": "c75fbb3ba7a8f4d458141f6b998d9e26"
  },
  {
    "url": "assets/js/49.76bc8496.js",
    "revision": "7de465d59f01bd8adde65ee23ba28905"
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
    "url": "assets/js/51.aa86dc75.js",
    "revision": "6b50577673822d7c15e2248b23ddf2e7"
  },
  {
    "url": "assets/js/52.6de3883b.js",
    "revision": "6bae775c400d090e20d3ea0b2e805c90"
  },
  {
    "url": "assets/js/53.c711e1bc.js",
    "revision": "1abcd99349a5f4f1c5c3a60d9390e0a7"
  },
  {
    "url": "assets/js/54.7cc21f55.js",
    "revision": "d775abc987ded351ae9b27f110682497"
  },
  {
    "url": "assets/js/55.45122282.js",
    "revision": "0c51f18ae8913cdbb1233a313c0c6a88"
  },
  {
    "url": "assets/js/56.8b1dba27.js",
    "revision": "ee37e93c51f3fcb3a5dd480ddf6ed84e"
  },
  {
    "url": "assets/js/57.df2f2430.js",
    "revision": "9b0953ebf7ee2be6fb9b4a269e4fcdb5"
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
    "url": "assets/js/60.05c22782.js",
    "revision": "668bae2c1ef78185156ad5891f3059fa"
  },
  {
    "url": "assets/js/61.7d7254cb.js",
    "revision": "e9f03154434d398a302ddcae08c1bef9"
  },
  {
    "url": "assets/js/62.b9a38620.js",
    "revision": "d2ee3234c063eb0f4951ee881ad15446"
  },
  {
    "url": "assets/js/63.02e538f6.js",
    "revision": "ed9e3917b42ba2bea7a785a6fd6665b4"
  },
  {
    "url": "assets/js/64.c443283f.js",
    "revision": "f6e83d23590f61081d82ca77023d03e5"
  },
  {
    "url": "assets/js/65.32d47653.js",
    "revision": "f8758d4685e0015e4c72d573db6ce158"
  },
  {
    "url": "assets/js/66.696d6c0d.js",
    "revision": "4c8f40f421a398408017bdea05190d29"
  },
  {
    "url": "assets/js/67.e9184cb0.js",
    "revision": "84e2deb5686dad1e7231c182f46e966b"
  },
  {
    "url": "assets/js/68.183b9d87.js",
    "revision": "232a13fd016dd697e6bc87f59dc00dbf"
  },
  {
    "url": "assets/js/69.3496a6eb.js",
    "revision": "9807cae75c49a146333e893b9b6ab680"
  },
  {
    "url": "assets/js/70.b819c977.js",
    "revision": "0b32d62a1461f340100ab129bc69dd75"
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
    "url": "assets/js/73.d438693e.js",
    "revision": "be3a742cd1d014bce509cc848d823dd6"
  },
  {
    "url": "assets/js/74.e94aba3d.js",
    "revision": "4f6a07419defb5261a3736253886f3f6"
  },
  {
    "url": "assets/js/75.99616ddc.js",
    "revision": "a543f3756ce516758221f8b33ecd2c1a"
  },
  {
    "url": "assets/js/76.ec877d3a.js",
    "revision": "e80c1a4f3f6b3cb5991648c434dd5c61"
  },
  {
    "url": "assets/js/77.61d31c15.js",
    "revision": "4ab2bf2a02c08133557584a910e5cc30"
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
    "url": "assets/js/85.7d7013e5.js",
    "revision": "9ba1cb559d40acdeb49d82153a2bf886"
  },
  {
    "url": "assets/js/86.f5a7c995.js",
    "revision": "ad2cc58cd189e3f0ba42104021cfedc1"
  },
  {
    "url": "assets/js/87.0f1316d6.js",
    "revision": "551d69116b1226a02556eac8856b31e0"
  },
  {
    "url": "assets/js/88.d940cbc7.js",
    "revision": "6651682f411abd14c25497ad9d412735"
  },
  {
    "url": "assets/js/89.52a0e662.js",
    "revision": "b2ff401f1c99e7c7c40c7623b943b282"
  },
  {
    "url": "assets/js/9.048b5ba8.js",
    "revision": "95f03153ab2816e72510b767f6c40588"
  },
  {
    "url": "assets/js/90.5e45275a.js",
    "revision": "0419580186519e5ef68ff183fb26efa7"
  },
  {
    "url": "assets/js/91.f4385840.js",
    "revision": "d426d5eec05dc651f09108904a45f209"
  },
  {
    "url": "assets/js/92.59881622.js",
    "revision": "e02f7f2cbdcba365b4b58ab6a61392d0"
  },
  {
    "url": "assets/js/93.307e9a56.js",
    "revision": "1186bd20363607c64897078d1e92924c"
  },
  {
    "url": "assets/js/94.2c040f42.js",
    "revision": "915790e10ac6b88cf7d381c72f18be3c"
  },
  {
    "url": "assets/js/95.b85ef31d.js",
    "revision": "1002ffe33af6bdf6e5dd97096dc53d81"
  },
  {
    "url": "assets/js/96.4155dfde.js",
    "revision": "09e44eb17e3e856b146093d10b0ece67"
  },
  {
    "url": "assets/js/97.7bc07c6a.js",
    "revision": "a4a5c8970f55ec8e33b63415125548c4"
  },
  {
    "url": "assets/js/98.788d3cae.js",
    "revision": "d138394b11f32b5349aaa41d6e588d85"
  },
  {
    "url": "assets/js/99.09e3d9bc.js",
    "revision": "d5bc9098229cf243b6d717616c685450"
  },
  {
    "url": "assets/js/app.fb4087ca.js",
    "revision": "dc7be33d8d4357c2a1eabd162ee63468"
  },
  {
    "url": "assets/js/vendors~docsearch.a4198619.js",
    "revision": "d66481b8b9070e66a0d61d98e5f0db85"
  },
  {
    "url": "index.html",
    "revision": "9f6f72cbb1b2bb9d330097c33101de01"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "d274eee9091d2c13f876ad72015f57bd"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "81937b899998e626145af76c6be37121"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "052f48ff53bac0b8478e0c592373febe"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "940b8dc923fecad68a92776ef6419baf"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "d401ecf6364d4827bf0861df97bdce14"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "d73f6bf3fc728e53331c6c745102b744"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "3300883a27194418c0933b31bbc76c39"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "783b380cef9fdf6b5f51f9a958dd5fbb"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8cc59cd4ce936eef3aa8427aa9eabdd7"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "28c81789a0724aa2fcab98f69332e456"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "58c84e467256cf84ef384254f40b89cc"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "e5ef5f2216122ee043cb30a71658c1b6"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "f2c43ead03bd7adeca16b7610971c91a"
  },
  {
    "url": "master/api/index.html",
    "revision": "cc5626c65e2407070faddcad16de6f93"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "49ca0fb607631d46275922f36af78178"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "bb25020fc80022b86545c740875da026"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "8caade5ba57cc19523e226249f50e843"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "ed7c8a6f78010b7918de86e731753519"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "8a0a1d28a1c53f52dc8b79c81e858a3b"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "a3af632d409249eadf58644723ecd05e"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "247c42f084d2014ac8b3a6b0a013bafc"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "0da3728cb6e59d700da1c2e962b2b682"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "4407f4d73741ed9b31adfa057b3467a2"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "b14f78c415a7cfe9cf4bc86fca44f273"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "a13a78bcdbe13156cfc44ff5746388bc"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "8f511b43fff30307f54725958887fe88"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "1fbe2f8aba2161982f200ed9db9ef35f"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "ac516fc6cfd4c4e49e2df8334c6e55c3"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "79909d057d65a81561c1ec1cd05715e1"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "6322948ae2730d524617c826450ef839"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "eb03696048a862d089f20555e8c2e9f1"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "555466dde4c2e357bff5070bbb39dfb5"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "5dcf272d37fc2f6cadc9c543ebefa1ee"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "f217546ff62042806acf1af3bfaafd21"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "ecf93911bb5c8ff5b0f2c11c13e37bce"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "27ab0eac8a438065d4aeae6b21009902"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "ca47ec9fc9e1f996042b9e358f248443"
  },
  {
    "url": "master/packages/index.html",
    "revision": "26e7521cebe43e395d6dccf7d68ebb1b"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "bb208b0a0080814e5dcb15d90df15fcc"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "2a3171182c664b35a67511c7b50f93a8"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "200c357b4a9806a18126401aab05a5fa"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "c526801a05705b6555b8c64cb2ded3ec"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "12287cd0e7a3776ef4dfc8ccc9ad9eb9"
  },
  {
    "url": "master/packages/views.html",
    "revision": "c5013acfee627842cc4e85e8859693d8"
  },
  {
    "url": "master/performance/index.html",
    "revision": "2515ac680c79b80941dc393fc6f5b9e0"
  },
  {
    "url": "master/performance/loadbalancing.html",
    "revision": "dd17fd45cc2077941befbb67501cad60"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "2d3f3c7db834c3caecc2023c2de5389d"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "4e7edfef7357d6279acd9ba8cee07c36"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "dd36a1ba6cbb4e0f782b691865c5d124"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "40ddddad9ace2e5f55d362afc46fab7f"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "33c9faf00c9957ce6b81844aba581637"
  },
  {
    "url": "master/themes/index.html",
    "revision": "58cd1498d4cb67964b741fcb0b73a251"
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

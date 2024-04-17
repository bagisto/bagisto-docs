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
    "revision": "62826affab740ca8b0ca68d81dea94e6"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "22f9ef16582a731f13b30ae955255fdb"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "65f6aca26efbb6a8afa500e388b4d569"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "0587ae787f08d6724979c3dd44c511df"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "256ea84fa8305f167e6930a916f44c97"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "d19c4de253bdb0e3941cec5ee9238405"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "6a79a0be674ce08836c5d5a5bee22cb8"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e29df538ecdc7debabb041794c2c9e61"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "30b5449c4ed18e8685e1a1b3ef8b9b2f"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "d459e4677cf34c77c04890cd0e1b694c"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "59d47c2756846d8b0b1f667acaa602b1"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "ace0b8aa9a618aa242fafff6706a3e6d"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "d3ebca64ee7b2d2bc258f43246dbb669"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "0f2de4df9f860c231a2224f8625bc7ab"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "b17131e18f783c8d519f0337c3e51728"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "a1fbceb33a384a5c94160b0ac6a22893"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "d31c87c8ee099fa73a31faaa799b903c"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "42d39663f8a1c86108def444d6ab6efc"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "2801fbc90e0ff5ad6d048c132ff6d2a4"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "003c5385982de7434c02b47c9f7bf2bf"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "fb42966e60745fc20134e01515637bb9"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "34ae383757c1a7778adc4217765f69fb"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "3da1cb1713ebec7a00a5c84bff9edb42"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "1e7609761dce5f5dc6a9207d0124c7ca"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "6c1f024e09db45206f92dd138958c86c"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "4009cadf518d195c47d34c25f790d626"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "76a40449f4e37f9a2c05f8cbacfdcfdc"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "b3e09e448a796fdecf7aff6ba492092c"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "726332bd15c527523e1521b18e3067a3"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "646297e15a201d540c7e1beadcba7ea8"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "fd976bc7d3f4d06ffd2576068ef26391"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "e876b2efa60b8b38b6b6f2029fc78d6f"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "571122ad57f7a4c674997e7e4f2917a0"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "5bb12a401244596343e206c04561d2a8"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "7833c3d0d987f357e90f17c66d22f7f8"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "d430c4480eaa8eb5cf97ba77f2e382b9"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "6fc83a15f3eca326bf098f0f7a1ce3b5"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "31af5fd3bc763acd0d57dccdc866da0c"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "de76854b57ce02216687d72d102caa05"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "ecb9a325391302afd80cbd33874f83b8"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "dea78d731f0ce14927d5242335e73b0d"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "fd07e0c6ae4cbb4efc8667583f703a8d"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "0b06cb3517ae70a53a3f26448361da07"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "91ed9cc18ef90be54a3a3679a6d3a7a4"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "5744ebbe22789c51a738b83ccb847be8"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "1867e64dd41f0fc196303486fca92e41"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "6254e6a41cc52ab9305c20a7291f9125"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "4c7f0e3142e121b5f1c4f0cc16844399"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "bb714791a63b127993ae5b6ec2e281b0"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "1a6cd36b0f84f84f4ea01ac17043e825"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "b55da967dc052ce4122db05404a7c84e"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "06c1f42317fe85eedc425eff2eff4c54"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "bd9a5449adcd9a6ec302fa73a4377c60"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "cc46cfdd63f000b71e4f4730bc209af3"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "c26a2cf924dd3499187b2ffc2bce1ed9"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "8f96472f23a4ae08479d33dbd1ef3257"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "d7c2790c9ba239d704638eadcaed6540"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e9846ee12ba1d33dc55fcfeebb6f0fff"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "ef8b0e6d3f5c5b0a6152e5ff6a56f0a2"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "e6f9a2f098bde925f98ce837734f5485"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "12d1114fca06d88e9c35cce1053e123f"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "361c75faf043c90cc365e61755c9bd58"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "e75db11029c93e78e2e92432dfba181d"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "b51e0ffcfa7af7767756a1b0c5f958a0"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "f8fed2b7c828fb766d61283bf15dff94"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "ebdb521b5740393088fd2d7b8de22ffd"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "703eb8389bd83e2f149a5aa29b1991a3"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "4bdd1a857848c113c1414378b68ca1f8"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "844bb5bb9e77dc9a7217669f30700360"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "b7abb1902323741501a5bfb10e2a3641"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "82f85f80eba8e27759ca18b1895d87fb"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "9170a58fcb3814ff196852b5d9e87d01"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "aab84bb5c871ff2d0acdacfdf1fa1551"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "0652383da639349c3d5c1b0f448e90b0"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "02159a42aa192c45572c53ef36a9f270"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "3c487301c32fa0262aa09ffae16a16db"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "cd69fdad1421e18955ae9c7633b2e9ce"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "cc673552386082612276e07759507827"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "3c01d04d925f3e04e2e41c993194af0c"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "eb51a2612a02ee75ef74b3c5d4d56f05"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "0b8512035dd098bbbe7d7cd5953c9b82"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "086b6bbab50e1e28eeefa3d604f6517e"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "d031ed4d90d498bf15b6e75dc7c6eefe"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "b5ea0ac2b943c16425a1e8352f40e416"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "62bf9eb37331eeadb2c0755ba0ce7b78"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "251eadc7082def9bac569685c5fdcae6"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "cd0a64bf7b4c13d2fc122cf1383b8ad7"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "fa0f5b21eff6e2166035c9119bc3b4e8"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "fe87e0804072eeec72a6421c10868642"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "923eac0285b229286cea5b0e58bac262"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "c40861308dc3a381ab505d29fe6b450e"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "181999e1be2db90bf59d37045520f8e2"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "ad751de05eda118eb55c4b0c7a9e4b50"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "c6ca33459f7656dc19088fc6a16fa5b7"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "a2a8b83c2e7c8f6f7dfb0c21c3c21056"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "8b9e19a0602582a3465eade73d5c7930"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "053977bc081fea884cd6a6360f2c53cc"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "68fcd52815ee75db29ec539e569827cf"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "4937dccbd8c7148c789cc62eb7de57a3"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "2ac1c055408374abc0ff682055e64612"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "f94da3b368916a94c02b08acb1697564"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "5697b3d8740d6173ef49cc62354f6590"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "da563fa2e806cd6a82617e86d714af33"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "d1e9583022d7e0290cf49043650b88e9"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "09297d073f780a29aa629df5c1038052"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "d92ea8c0c35026959bd766c49721662a"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "cd678142ab59a75c22962d58c72b476c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "9166611128f91f86cae8ceaa809cea94"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "ecf6a1fa930e6eb90e6fe345e266afc0"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "3a30e81e68dcf3567e41560d2ca5d679"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "58bbee7dbacf65780060cb07ff3254ac"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "3fa5d538379586ce460843463bedea36"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "e9a7e6ea922de3cb56bafee349a2581c"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "6d60ae71a2723f1d195b647a63fe61e9"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "ffd401dbed2fff49c7e6020477a9cb93"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "f1c1204d565014e6290eedd17a75f216"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "8e12dde3e9671d8c1fdd8b21a2e5a7c9"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "a06bb0fd0593d9a0d98567c4d2a9966a"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "48d0010251da3ecd8797a2e40830af81"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "aa276fd105225a0ed05d4103d1139257"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "f32baf3dcea81bf19bef8286283fcd14"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "e292e9b04f6439bf807fefeffb3e1489"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "f916a68e3fd69bcaf2cdc49d88a20374"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "23420617c4e10bf7a278736d06ff4493"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "6937ca4be8ac053d0a16997366563276"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "490e242202b6f0aaf14c51c3ab72897f"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "89bfa42eb0d4a529ae02da78261b6221"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "c05784e25dc714cb0de73b68cfcf2937"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "418c7f7b6c0ac0ac19968c9302819a38"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "78fe51bc37bcec3634a5cbe3a1cfe817"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "840c781ff017324d037e2cf6d37233e0"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "c67f8f4e66e363dfee448a8ae571c3ae"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "1f73356518a26c9683a2f5c06e899106"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "7a80057ce23ea719b596d6dae06a1b18"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "85a97be3b3653bcdc6ff90cd6e6fe62c"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "49f539f450449291b0eead0a66b7b77d"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "712fb50cecec4b74d1dc1467e86fc8dc"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "698471bc197a2a8e7a3fff8da341afae"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "ebec8c177a05a4e7b60352f099917896"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "0a8c7510ef1b30a1436f964f07967a6b"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3043711bb77f53ef0f37123fa2115801"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "0ae9fbb4a2642a4f916cd9471fd8b4a4"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "431afdf85214a5b7719cea941e966fe4"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "cd49ab63b41c642c02ba3be7627c9ccb"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "daa16fc18d69784150f74f37a8a123df"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "b5d56535f82029d56f9182661b6bd675"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "e19a7278a18e98e7d9d321e28eec6f1b"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "ad5b60be796d2b8f1d82a51f27d38bbc"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "9c0a8c5e5a3e827243093c86c6a98182"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "5372f156b9cee3c78bb73952bcfee7bf"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "47b3257a5e6485c601b38f25445d5267"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "87a8386079929abdc54de59289faf706"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "43dad44c16a0541761b34e391b0f8347"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "be9ac629d9be2dc836583f71ffe8e202"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "d229893d517dc803cecd811ea8569220"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "def95f21f479a30970356b2ad5926a97"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "3b2c67233fd5ee0350a99433ed9a0e56"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "75d9a5fc255ebe0aaf50703365758698"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "4bd11eacc8f555a4dc5a51ae08867aaa"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "3200278944e68b1e4870d5f89e733e77"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "09bf75c95a2ea2775f9a2c00cc3cf93e"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "93ecbab22565687617cb7028724fa667"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "600331f4548cb911686ce7657060b7a3"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "76a43e557017bb9e35f985d760784f04"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "daee6146f68a49f3ff54af50d5fcc591"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "467c2384ab023457d17efd4a2b50e6a5"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "bed53ff3e41972a330d9c9cbe296a29b"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "d2eab5e75ed0fe831f1bdae7933d9224"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "71627d05a2a8ff7336fed8c5f3e7f3b3"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "3609346c0e392887b7b718ba71dde205"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "5c4b1312f7c4aa4a584c9301ef3d4fdd"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "4d8f91be6aaeb201dc37ac2f03250529"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "740d88cc72720419b8ef93b6f3c763e8"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "71d4d78ef9dbc9afd8de0e2a027123f4"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "6a7441a7825f3c30deca9edc47427b1b"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "2beee53a0e5ac73a76f5742c36173100"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "a1073b7764baa9e4a1ea073b139e6da1"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "92999cbff81e8f4b9b7640026d84dcda"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "e3f385bac1f85bae0bd679d693936fda"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "687cd6be0dda5bd92b143fc33950aa05"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "3de732b83bfbab13ac7ed0c8e7651b8b"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "4b0fb6e7833b0f577882d74447bd1089"
  },
  {
    "url": "2.x/themes/integrate-image-search-in-theme.html",
    "revision": "af6bea2faba16444ec4a044eb59d4244"
  },
  {
    "url": "2.x/themes/notification.html",
    "revision": "d56ff5022e7786594c4ad5b9e028038e"
  },
  {
    "url": "404.html",
    "revision": "5fd485184b3849e6866542a5d5fcd8b3"
  },
  {
    "url": "assets/css/0.styles.96c1d9de.css",
    "revision": "d0078f913e24effeffa73299ae9081c5"
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
    "url": "assets/js/10.592a2da4.js",
    "revision": "be874686f34c177e59f6ab77855a0e7d"
  },
  {
    "url": "assets/js/100.54471ada.js",
    "revision": "1f29e877bc10667aa4e7634d28529ae3"
  },
  {
    "url": "assets/js/101.9502ad6c.js",
    "revision": "108c0bec30260c19845093d85c2e8045"
  },
  {
    "url": "assets/js/102.1c4c011e.js",
    "revision": "42e67a837638311daa00bd03d46f67c6"
  },
  {
    "url": "assets/js/103.d5c22db8.js",
    "revision": "8f8af378fc731713a404675f499093ab"
  },
  {
    "url": "assets/js/104.05ee1b9c.js",
    "revision": "9249e7d92f4bc01fb87ee77f8816f6aa"
  },
  {
    "url": "assets/js/105.b8c03599.js",
    "revision": "3dc231d3482d6df939021a475fe155b2"
  },
  {
    "url": "assets/js/106.27c43693.js",
    "revision": "51a82f81f8dd38c4e703dda294576b31"
  },
  {
    "url": "assets/js/107.355e8159.js",
    "revision": "e27fda12939087fbf8b29b6b35f42c98"
  },
  {
    "url": "assets/js/108.37dadba1.js",
    "revision": "5314768ae9bfbee058f4a37bbb4b08c2"
  },
  {
    "url": "assets/js/109.d7c55e7a.js",
    "revision": "160670e72bdd736611f5876109c7ba82"
  },
  {
    "url": "assets/js/11.705873d9.js",
    "revision": "14e63431182d33c8efacd6592db71120"
  },
  {
    "url": "assets/js/110.b3e917aa.js",
    "revision": "e9e5fecb28d49f62191c692f65d99a47"
  },
  {
    "url": "assets/js/111.130b1734.js",
    "revision": "4721bdb507ad7e26aa725cb6af4572b2"
  },
  {
    "url": "assets/js/112.8259bfa2.js",
    "revision": "a4e0c053551604d096bef3077384c858"
  },
  {
    "url": "assets/js/113.a2231ab7.js",
    "revision": "e77d962cd267fdb25a9a14c74acf8186"
  },
  {
    "url": "assets/js/114.c576cc71.js",
    "revision": "da491798dca96fdd220ef4926204fd51"
  },
  {
    "url": "assets/js/115.6953d655.js",
    "revision": "ee9058e2597724c1556d0b1dc8f6c535"
  },
  {
    "url": "assets/js/116.2130111f.js",
    "revision": "79f83b953e0b8ce6c55893cf95390d22"
  },
  {
    "url": "assets/js/117.359d26d3.js",
    "revision": "8fd03e97d24938cdb5a0aeaa75942034"
  },
  {
    "url": "assets/js/118.b10deeff.js",
    "revision": "0e9b21df9b0910026fb6b0daef3d6171"
  },
  {
    "url": "assets/js/119.6e02b083.js",
    "revision": "4490dd099fe95ec363cc9f064f25d743"
  },
  {
    "url": "assets/js/12.6965f2c4.js",
    "revision": "188a84793e8c8df3c44a1faaeed1e84a"
  },
  {
    "url": "assets/js/120.e51d46e9.js",
    "revision": "f954ac7e99121c1bc4ba9cdc10e4af46"
  },
  {
    "url": "assets/js/121.2b5598ce.js",
    "revision": "f4b90115eb8c42b031837875471a7b70"
  },
  {
    "url": "assets/js/122.26f875c3.js",
    "revision": "5c9964d0fa9da7849b16d9225402bc26"
  },
  {
    "url": "assets/js/123.538160bf.js",
    "revision": "a387f5ed07f47df04f5b43262618cf3c"
  },
  {
    "url": "assets/js/124.cd72b3e1.js",
    "revision": "fd8a6333b78da5b2fba6843e0fb807ee"
  },
  {
    "url": "assets/js/125.80222b1e.js",
    "revision": "8e4050dd17392dd414394c439789bb0a"
  },
  {
    "url": "assets/js/126.1d83bf23.js",
    "revision": "c3afabc90c42591180056474a3205d19"
  },
  {
    "url": "assets/js/127.0e75d335.js",
    "revision": "3fd51b56de93c75303f9433c2a833a73"
  },
  {
    "url": "assets/js/128.80ce20c6.js",
    "revision": "7fc467199449bef4806d2149294c854b"
  },
  {
    "url": "assets/js/129.1aa09d7f.js",
    "revision": "1b2df9d0fd1c80d72e53b54ed9fc575e"
  },
  {
    "url": "assets/js/13.a092f219.js",
    "revision": "5d95d15be8cba44f92b720408600ab80"
  },
  {
    "url": "assets/js/130.2b9d465c.js",
    "revision": "593e3cc9849ebf7230992b35713316f4"
  },
  {
    "url": "assets/js/131.6b48989d.js",
    "revision": "99b90c3a8211b81e539da38c0f77aa97"
  },
  {
    "url": "assets/js/132.bcc74523.js",
    "revision": "107d962c8992888b39d48c8cb7af2bc5"
  },
  {
    "url": "assets/js/133.6a84c492.js",
    "revision": "82ea8aae3aecdbde409087c64a8141a3"
  },
  {
    "url": "assets/js/134.01dc988a.js",
    "revision": "6ff5394e9367923f3ccee63c48ad0ea0"
  },
  {
    "url": "assets/js/135.80c94488.js",
    "revision": "895f5a5b116f191aaf4336520a6dae52"
  },
  {
    "url": "assets/js/136.dd5005a9.js",
    "revision": "494f2d3978f527c38f24315dac0d2ad5"
  },
  {
    "url": "assets/js/137.1cafafcc.js",
    "revision": "402159dc3b9abc7c960ff5e236356ec1"
  },
  {
    "url": "assets/js/138.fb3b9ac6.js",
    "revision": "02a5284aeee38363540631dc9d79a0fa"
  },
  {
    "url": "assets/js/139.31e50273.js",
    "revision": "43699ace890528293c0c5e57bb782837"
  },
  {
    "url": "assets/js/14.2cd0d386.js",
    "revision": "96e47c991cfed950104c9e46e1df51e2"
  },
  {
    "url": "assets/js/140.bab69686.js",
    "revision": "0c1feedd3f3982dc1506d39e16f6d3d7"
  },
  {
    "url": "assets/js/141.d70c9ee7.js",
    "revision": "5b7bdfbca066c9a07dcad35336796c65"
  },
  {
    "url": "assets/js/142.83543374.js",
    "revision": "8b9cfdca1bf36d97182a4bb1f256d0f7"
  },
  {
    "url": "assets/js/143.1e2503a4.js",
    "revision": "4036d3fe41031e311533e6102666785c"
  },
  {
    "url": "assets/js/144.07ba2792.js",
    "revision": "22a99fd3369b74887143321b3154e791"
  },
  {
    "url": "assets/js/145.272fc4eb.js",
    "revision": "fa5c3a5776e229c2970b800681474d1a"
  },
  {
    "url": "assets/js/146.bfea2e89.js",
    "revision": "afe2d56bfd04ce7cc4895b064c5128e4"
  },
  {
    "url": "assets/js/147.c7bb5ff8.js",
    "revision": "4eedabb80c78ab7e85e45b4c308420b2"
  },
  {
    "url": "assets/js/148.a624c0ac.js",
    "revision": "d52f7e8e65602968341140e1b998292a"
  },
  {
    "url": "assets/js/149.f990cdf2.js",
    "revision": "467c51dec89bc0f2cc58badbe8ea9aea"
  },
  {
    "url": "assets/js/15.0a7bef41.js",
    "revision": "28635a2fb43b3cfeb1bd41c3907f0c66"
  },
  {
    "url": "assets/js/150.f52fe2b1.js",
    "revision": "10a8ae4982df2838424b7c820f9686c0"
  },
  {
    "url": "assets/js/151.f774c377.js",
    "revision": "68d0a737ac12a6375533d83b2662f1fb"
  },
  {
    "url": "assets/js/152.9da4400b.js",
    "revision": "fbc2469ab8519293ae572344ed62592b"
  },
  {
    "url": "assets/js/153.5db31b46.js",
    "revision": "87b3cd3a306adae8995df65eb0abe37b"
  },
  {
    "url": "assets/js/154.725d165b.js",
    "revision": "af6402cbe0f178b3d9cb78fa72b3b6bc"
  },
  {
    "url": "assets/js/155.daacc8aa.js",
    "revision": "d637bbf79922db7007d676e2fa033d8e"
  },
  {
    "url": "assets/js/156.99d21216.js",
    "revision": "f349f84d02ff1f84de0257e40a081b89"
  },
  {
    "url": "assets/js/157.a050e4c3.js",
    "revision": "4890dd2b5956612d3e167438851b2122"
  },
  {
    "url": "assets/js/158.960c9af1.js",
    "revision": "89bde8ac72a4f749746cfb48d437dcb2"
  },
  {
    "url": "assets/js/159.f51f908d.js",
    "revision": "3b18c2bb1736aa5043ef827634484606"
  },
  {
    "url": "assets/js/16.649630c5.js",
    "revision": "1ecf91e45cad43581a21e59dfed8a547"
  },
  {
    "url": "assets/js/160.68c473a8.js",
    "revision": "cdb3eb53a1b73f383e28e84d5bcb89e2"
  },
  {
    "url": "assets/js/161.6aad89fb.js",
    "revision": "477052bed3417e2d0b162ec197848ca6"
  },
  {
    "url": "assets/js/162.af39ed02.js",
    "revision": "57648a060093ae4383512abf67d2b5ae"
  },
  {
    "url": "assets/js/163.678cc928.js",
    "revision": "75741ce220c1752eb1f1357458c22a82"
  },
  {
    "url": "assets/js/164.72df0a20.js",
    "revision": "8edcc02aa3288bb12f72ebc356790ba4"
  },
  {
    "url": "assets/js/165.0e4db513.js",
    "revision": "f71d9b8762f16b439c0aa3176da23de5"
  },
  {
    "url": "assets/js/166.ffde0e76.js",
    "revision": "4d17a3cd719da4aebf1dd70d7249e202"
  },
  {
    "url": "assets/js/167.f84d3074.js",
    "revision": "8f4e217639c294f8a958463f205c2a90"
  },
  {
    "url": "assets/js/168.df637fb0.js",
    "revision": "c861a5613c95c984072e68e642b2868f"
  },
  {
    "url": "assets/js/169.defef63a.js",
    "revision": "82e35bd052f55962aae107f953f1cf5a"
  },
  {
    "url": "assets/js/17.2234714a.js",
    "revision": "4523059005e9decbcdd43487b3bd518b"
  },
  {
    "url": "assets/js/170.2f6fcdf7.js",
    "revision": "efc12bf749e0a404c035ddda191cb23c"
  },
  {
    "url": "assets/js/171.b1890002.js",
    "revision": "e08c311d68cad840e2057b5ade92bd8f"
  },
  {
    "url": "assets/js/172.16ece2f8.js",
    "revision": "5c4742e0e7fdea4a597dff8b40810755"
  },
  {
    "url": "assets/js/173.e0784f4d.js",
    "revision": "46f00a8e1cc8c8c41a62cd239a623301"
  },
  {
    "url": "assets/js/174.33d219ae.js",
    "revision": "5f27682e0a92f51cffdd2b86ec05d3ce"
  },
  {
    "url": "assets/js/175.cf2264ca.js",
    "revision": "c9c37ea8c42d02c992f2bea045fab59a"
  },
  {
    "url": "assets/js/176.365f9ba5.js",
    "revision": "f0e105d234476c50e65491cc32f4aacd"
  },
  {
    "url": "assets/js/177.eb66130f.js",
    "revision": "c67f6f4962e51c2b696b7bd0ab9aae05"
  },
  {
    "url": "assets/js/178.4517c7b0.js",
    "revision": "b213dbce4c045c7b815b51b2fe50cefb"
  },
  {
    "url": "assets/js/179.342bc359.js",
    "revision": "26a672bc76789d687bc31f7539c9e7e6"
  },
  {
    "url": "assets/js/18.60a720f6.js",
    "revision": "5085ad2763e841486b189d63daf28412"
  },
  {
    "url": "assets/js/180.2a4cdf17.js",
    "revision": "6e226e663e9dda04c40e104398af0e79"
  },
  {
    "url": "assets/js/181.bf0f2d51.js",
    "revision": "113184ab22fc61e70a472f10eb9497e2"
  },
  {
    "url": "assets/js/182.b383f6c0.js",
    "revision": "eca19d9b8daac66913a7fb7d32fe5d6d"
  },
  {
    "url": "assets/js/183.7c55a659.js",
    "revision": "921e9cd15f39cc6c12691e135f54afbd"
  },
  {
    "url": "assets/js/184.28f71b86.js",
    "revision": "0f23fda407b0cfbec43df6dbd563b2ad"
  },
  {
    "url": "assets/js/185.f0197908.js",
    "revision": "2ce37376121e4f469ebbe148b8396661"
  },
  {
    "url": "assets/js/186.f234a050.js",
    "revision": "48e33d1bf88cc05878871431f2b32e42"
  },
  {
    "url": "assets/js/187.1c6bbe25.js",
    "revision": "09ef430abac435616061eaa6f213f2c3"
  },
  {
    "url": "assets/js/188.538400ad.js",
    "revision": "6cd65a5cd6f72c5aaf6a71e0898de5a3"
  },
  {
    "url": "assets/js/189.fb1a72cc.js",
    "revision": "954e740956934d0b53b1b1ed54847aa3"
  },
  {
    "url": "assets/js/19.8a689b22.js",
    "revision": "83f9fac0b37aee619c3104457e023068"
  },
  {
    "url": "assets/js/190.88f0f1d5.js",
    "revision": "7e3fd1e2ff2bdedf18ff36a9ba800c83"
  },
  {
    "url": "assets/js/2.765ba0d3.js",
    "revision": "7dd3859d268b0d05f19cb401ff313faa"
  },
  {
    "url": "assets/js/20.21582e9a.js",
    "revision": "5524047d6d8125a25bffdc2b87ea7af9"
  },
  {
    "url": "assets/js/21.cbba55f0.js",
    "revision": "3ef2994c166e7332413fab10ade8cbeb"
  },
  {
    "url": "assets/js/22.5d129b6a.js",
    "revision": "c062f5b526d61126957b0f038f7e9e7e"
  },
  {
    "url": "assets/js/23.78426e48.js",
    "revision": "f4e565c9524f1d7bea82526e343101d5"
  },
  {
    "url": "assets/js/24.cabef352.js",
    "revision": "835964bd4e530a4bbd3b4e72b2482700"
  },
  {
    "url": "assets/js/25.3377b8ea.js",
    "revision": "ce47d1f4d9d596bd6aa6a3b9e04eeb51"
  },
  {
    "url": "assets/js/26.70318b83.js",
    "revision": "71deb21afecf8049a912f05ee55f3ee4"
  },
  {
    "url": "assets/js/27.f77f9f83.js",
    "revision": "48ea2866b1007478de7e7606e9c805e5"
  },
  {
    "url": "assets/js/28.87f2bf9a.js",
    "revision": "9a27c2c2d942f025c6c2a66e9d315c7b"
  },
  {
    "url": "assets/js/29.b984876e.js",
    "revision": "2a8896c065fba15f3d53643b5fdac9f6"
  },
  {
    "url": "assets/js/3.b3c66d1e.js",
    "revision": "2e08defe94f71049dd1bdcd7ecfd0141"
  },
  {
    "url": "assets/js/30.f901692a.js",
    "revision": "56b9412ee8ab24d46f2a28c65d4f5c8c"
  },
  {
    "url": "assets/js/31.d584325e.js",
    "revision": "49ab0c4400f14326bcff8a28c1076497"
  },
  {
    "url": "assets/js/32.b29c7e8e.js",
    "revision": "c8b21608c06b2d17c3a6d4df6295a772"
  },
  {
    "url": "assets/js/33.64515a99.js",
    "revision": "81ca34c1a5690ac144b8af1e20b28948"
  },
  {
    "url": "assets/js/34.6bde2c7d.js",
    "revision": "53e13b64e90e423cbea0eb601664f582"
  },
  {
    "url": "assets/js/35.d20cf308.js",
    "revision": "5f6a05ee5b747c0be8d88e8f6a3d0926"
  },
  {
    "url": "assets/js/36.634ea037.js",
    "revision": "da3144b7e1f43af526011c7fdc83faa0"
  },
  {
    "url": "assets/js/37.06d91a16.js",
    "revision": "d851b4a8a43bea55a6b1aa41846e8ae1"
  },
  {
    "url": "assets/js/38.9f0da1b8.js",
    "revision": "8366cc5e53478b00e0db0a87f7ce85bc"
  },
  {
    "url": "assets/js/39.cb589aa8.js",
    "revision": "84d4e6ffa0bcb5cb31701e6216b49ae4"
  },
  {
    "url": "assets/js/4.039a66ad.js",
    "revision": "1085fe413246fda2810bd5229aa55efd"
  },
  {
    "url": "assets/js/40.25b9bbf5.js",
    "revision": "67da8e85052d945b6d4568ab0a369d6e"
  },
  {
    "url": "assets/js/41.c81f664c.js",
    "revision": "21445d338e652566b3be8bd9c3f2f716"
  },
  {
    "url": "assets/js/42.63f4658d.js",
    "revision": "24c89bb3a36448bb55ac7ef3a03b3730"
  },
  {
    "url": "assets/js/43.1d00d0fb.js",
    "revision": "63ab7e569e28473c3b6c0bf798e8b515"
  },
  {
    "url": "assets/js/44.64ab773f.js",
    "revision": "f7fe8963e75617b14667c5ed31d93e37"
  },
  {
    "url": "assets/js/45.a5253be7.js",
    "revision": "29b636c8c7cd80322c97af6c934040f9"
  },
  {
    "url": "assets/js/46.8622f440.js",
    "revision": "7ac4650a80daab6fa12b879224dddbbc"
  },
  {
    "url": "assets/js/47.85878e22.js",
    "revision": "06e5e70c3eb184b06151b160298ffa98"
  },
  {
    "url": "assets/js/48.d94ca3a6.js",
    "revision": "75074c73d2d6b336c4873495df17ad0b"
  },
  {
    "url": "assets/js/49.bc461903.js",
    "revision": "ea417449633ea9e586ef129d5295acac"
  },
  {
    "url": "assets/js/5.ed549ee0.js",
    "revision": "03ff0e02b683c142d3517bc4e007bd4b"
  },
  {
    "url": "assets/js/50.663ef778.js",
    "revision": "121c6b9dab3aa13d96a5861f3fc75e70"
  },
  {
    "url": "assets/js/51.4664927b.js",
    "revision": "79fd4095b4528dfd391185a2628d1d62"
  },
  {
    "url": "assets/js/52.0a961909.js",
    "revision": "ec4664f0727fa25508bb2205150edead"
  },
  {
    "url": "assets/js/53.f8126425.js",
    "revision": "b7e7f5fa342e97b751f491168a1427e6"
  },
  {
    "url": "assets/js/54.21391662.js",
    "revision": "33b5cca926f4361a8a0068b6cc90bcbd"
  },
  {
    "url": "assets/js/55.96b6e897.js",
    "revision": "948b7c88895e31384370dce297a7bfc6"
  },
  {
    "url": "assets/js/56.f1b8aa9d.js",
    "revision": "156f937f1a87849a39073cdb1aadb59c"
  },
  {
    "url": "assets/js/57.80d48017.js",
    "revision": "aecd63d8ebef8e94474fef8c8eddc02e"
  },
  {
    "url": "assets/js/58.bff1edad.js",
    "revision": "1cecc7b03e22e9957ff828e3d60b39ae"
  },
  {
    "url": "assets/js/59.9941cae5.js",
    "revision": "058300d5ad54e7186a3402143119b7f8"
  },
  {
    "url": "assets/js/6.306de04c.js",
    "revision": "2af94fabb5bea7cdaee8e67cbc93f8e6"
  },
  {
    "url": "assets/js/60.15760277.js",
    "revision": "1ff0e485600a175cbc364c31da9f37d3"
  },
  {
    "url": "assets/js/61.cc1a4831.js",
    "revision": "38f30a4a72201ac122ec4dd2a4988a20"
  },
  {
    "url": "assets/js/62.f9543827.js",
    "revision": "25f3b5acdbb9079bd0e8cb49589c4ad8"
  },
  {
    "url": "assets/js/63.c314da4a.js",
    "revision": "e63f428a4d2639f1df3e394c9b9b197c"
  },
  {
    "url": "assets/js/64.03dc0d33.js",
    "revision": "55b3bca7b121858342f511712c31a250"
  },
  {
    "url": "assets/js/65.42099112.js",
    "revision": "89ce5d0bf35fcc135a4f511734e4d423"
  },
  {
    "url": "assets/js/66.d77a58dd.js",
    "revision": "8302ab593ffe70cedd4e1d70e70f8add"
  },
  {
    "url": "assets/js/67.71e7985f.js",
    "revision": "16809202e7ccf08087fbef68042c4061"
  },
  {
    "url": "assets/js/68.451df372.js",
    "revision": "6c2b8b439bc9f933f5ad6109a5638816"
  },
  {
    "url": "assets/js/69.4ed3fbc3.js",
    "revision": "3e943d33710917b13a2d5cea9b764025"
  },
  {
    "url": "assets/js/7.57f93c4b.js",
    "revision": "9db7fb0c656c9c9398dfaf70d2e435ea"
  },
  {
    "url": "assets/js/70.6f4d856d.js",
    "revision": "9a34e58224b0740b0f4b706d5e99204f"
  },
  {
    "url": "assets/js/71.313d2fa7.js",
    "revision": "e0affb96334868b54caa2d1ae4a3611e"
  },
  {
    "url": "assets/js/72.aa7c6250.js",
    "revision": "da57f10bc1436fb36493899d5a096d8a"
  },
  {
    "url": "assets/js/73.98d8e79f.js",
    "revision": "740e991624183559fe7a723f574bddbc"
  },
  {
    "url": "assets/js/74.57cf3167.js",
    "revision": "f02bba20d2d32cd168c807902ec29de4"
  },
  {
    "url": "assets/js/75.d9422e48.js",
    "revision": "1d841184098701d887c8b46769f61c50"
  },
  {
    "url": "assets/js/76.dc46f4d7.js",
    "revision": "5436b23e9dcb7ca662d897e8fe1c02eb"
  },
  {
    "url": "assets/js/77.9951424c.js",
    "revision": "687ed811564c0767345d22d164829788"
  },
  {
    "url": "assets/js/78.95b9c3f2.js",
    "revision": "8e4e2f42f8f48df9733ac7c99a2d2c47"
  },
  {
    "url": "assets/js/79.fc0c35fb.js",
    "revision": "7067a2c5d675c0326407b14a8e1756d9"
  },
  {
    "url": "assets/js/8.7833f373.js",
    "revision": "f8dcbd26ec3fc7fb36d5bcdb149804ab"
  },
  {
    "url": "assets/js/80.2666e915.js",
    "revision": "9524713de566c54d121d753baf68650f"
  },
  {
    "url": "assets/js/81.4c75ee9f.js",
    "revision": "de2fc097f43980fb67aa976f0ec2fced"
  },
  {
    "url": "assets/js/82.ebfadbf6.js",
    "revision": "bb3e55f09d9d11f0cec71474e87e842b"
  },
  {
    "url": "assets/js/83.c4e86b65.js",
    "revision": "9b32273fc0b09541772bbf3cef686041"
  },
  {
    "url": "assets/js/84.347e4af5.js",
    "revision": "f5ca81931343bbfd8998ae6dc95073e2"
  },
  {
    "url": "assets/js/85.679bc9e1.js",
    "revision": "5537993fcac3e45e7b132536ce78dd9a"
  },
  {
    "url": "assets/js/86.8bd0e9f6.js",
    "revision": "db10ac965e3a707389fcff82735abfdc"
  },
  {
    "url": "assets/js/87.a30c80d2.js",
    "revision": "0ed7ea7b05b0562dd14826e5f200b087"
  },
  {
    "url": "assets/js/88.da88907e.js",
    "revision": "f5fc254fd00e342568628190f17ca56e"
  },
  {
    "url": "assets/js/89.a6aa54b0.js",
    "revision": "c579b50fb4a31eeea0a46db56a42a334"
  },
  {
    "url": "assets/js/9.b832aade.js",
    "revision": "c1ab8143de580d2b47ea33fa1b65aa2e"
  },
  {
    "url": "assets/js/90.7c1b8a3a.js",
    "revision": "65958e7c9c72f37a27a9caaa64ad61b8"
  },
  {
    "url": "assets/js/91.147fe762.js",
    "revision": "e454451f67c5792bca6234edd05d3895"
  },
  {
    "url": "assets/js/92.b47e56a4.js",
    "revision": "214869786217c71394fe00fa37f58afe"
  },
  {
    "url": "assets/js/93.7d4d81b5.js",
    "revision": "a15235c9d73dec3beb0a113e7494f1d6"
  },
  {
    "url": "assets/js/94.655c5773.js",
    "revision": "258da16d47706844f1a8852c942e1e9a"
  },
  {
    "url": "assets/js/95.fdf59d12.js",
    "revision": "a845f294aa25a72857a8dd7c0f61f85c"
  },
  {
    "url": "assets/js/96.7cc9caf1.js",
    "revision": "1f367e3eb79f89fb86e5faf31d1a4ee4"
  },
  {
    "url": "assets/js/97.80896468.js",
    "revision": "24e9c62a4a7dc8bc015aa685660db7fd"
  },
  {
    "url": "assets/js/98.396990ad.js",
    "revision": "ce433e03567df916223c9ae762453652"
  },
  {
    "url": "assets/js/99.47cc3017.js",
    "revision": "d76710b1a622e984d17767280616bad3"
  },
  {
    "url": "assets/js/app.6d588302.js",
    "revision": "18cde97d9808a8cdb0a7a780b53fa830"
  },
  {
    "url": "index.html",
    "revision": "bc53332957f5800db1c286f96edc4a20"
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

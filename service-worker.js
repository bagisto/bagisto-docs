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
    "revision": "8c13e534b081cf823e9bf059e0699795"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "5a1fc104e45d847b2c16a34a9a6e603c"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "82db6969942c9a8f4666d5a9dbae0197"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "ef45a683b1306190102ab99e96b31da7"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "0e77e49cc2a90ce54381fc0082276e33"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "07c95b1bc294201a2cc4e115c1f42b6b"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "1f72c03f8cc9f9fa93b75ea03747cad7"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "bcefd61642f059eac23e11de7e2fb207"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "b8d9c7ae4d58730e28409c8117da587f"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "91a0f11af9e572a8968035ce7b2af7b7"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "ffb0ff961c615112b0b47405a34c7d1d"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "2c7dc5ebd25954ba8cc91cac6d44b149"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "dba8e99d3120cdeb7828e2e08913d003"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "be8dbca087a3c7056a0cbe7af07e1973"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "fe2aa4f3623f73357a2247ef8d4cc70a"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "d14fb5cf1e72cb9d815c38093f7785d7"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "fc23785cf72ae7ed7575036e8395d41a"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "1d076d36db0a96d2f3fd7e551bd7fa74"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "6a8f0eef9480c83e34c3c34ffe9bd1cc"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "241e6a48afeb425a43edc7286979dd87"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "a4610c783e8a2b0a9fb70264418e85cf"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "acdea52189abf4d5cbf6eeb44e6c3abd"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "ea5d0bf5943dea6ab4a411f7347ab4f4"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "2d551222f313b1c45d9b7dda06c6ea17"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "3882a8752916d1dfe10478ba54ab960c"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "ad7e64aee409ae27666f188ff773f3ad"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "34f33e49fff5dcc798fdfc2a191236ef"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "2a227e9581f8a616cb16779d4acf2947"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "fc8601471f0681d061bec0d58039ec9f"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "a25c5de22bf5893052aff3c96c40464d"
  },
  {
    "url": "1.5.x/packages/create-system-configuration.html",
    "revision": "0494b5bfb651705eb8106e0152f8081d"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "d5886a0a1b2944138bc845e1bb44aac6"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "117b43f173d51bad75198052643f1785"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "9f6831c2abeaa2e84d55fa1fb33b1780"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "084460beb23f15a6077fb6be2812d556"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "32360033488e1464a455e37bd440c56d"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "1329f7b64fda786880da0d8cbb542221"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "2da08ab1f31d5f5e2bc76155392503ba"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "482fb034ae3d35cf6d09bf67c9431091"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "30795f532fd2189788b3cc0f5f3817b4"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "db9dfcb936516f1338b1d035c10a90eb"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "253126cd01de85008c41eab08d2e8c35"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "944cb66e5ba46ab44b0d0ccf34d2354e"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "6992c76fd8be64d28d9c0d4d84974f23"
  },
  {
    "url": "1.5.x/themes/create-store-theme.html",
    "revision": "31657ec725d18bdd18e6c2ce3c9a5a66"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "bf15ef7a7a05c10b003802d6c430ce6c"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "d1b8c3c312ad94c8b31d231cb747b42c"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "88d9a2fa0ea1ffbb08cea12ae605dbe0"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "21fda82868ca96fe9cb8aaa4a3297814"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "6d4bf34585714b4ee593796a48bd312c"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "f1101937d9ac170c8de860a5f6eb9f62"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "433087bff2369dcde01eb67c81314509"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "f30835f63a860338642421d2f2c20dcf"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "940cbaded09a7284564e36afeabbc213"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "8a029ea3539a99a282c01549adc6e83f"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "2773562565a6e568320bf2b8682b67ee"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "2ab38ee6fd1a4ee56d7b73f2ef65da83"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "50cad13c9132d2e99280c17ea8169515"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "3f1a3f6079f585e68c0f6cb3377089ed"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "48c1ce84bcfdc36e9f33b88fdb99ab28"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "174b733ce94a9fe69e0861acf2529e78"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "e89f2409ad762f71b5773d87c56c71d6"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "7b96eae172e3d83a669af31ed0f9ab90"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "70d59f4be5b8b97ed8bfce845f06b91f"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "40f2a7bffc5dd9b766ac402d76b5812d"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "1d08a9b390e21ecf93f6b6cd4d82db83"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "76ed9dc0e6a3eeba165c79b34272e5c0"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "3fa587a8541f7c11a08c998d858ea24e"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "ac0e6ec756b7c2f212235d6870bc192d"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "9d5ac1ca376b1d656f3d91d6448d5dbe"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "9f5e2821830ff892f355f353ade472ef"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "7149b8611347ebd89c6b68a8b8979434"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "8011b35f0dce34290f6f6334a3e18f54"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "969baf84ba5cbfa5fd6bc8033beb6335"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "91a692582086f85fa2fce85eab296618"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "d2d93b7ef00c4634657d975b8c8e9f28"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "c05c5943eecd7fc399e157828f3b8df2"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "7eddacd0c02509b124bd8d27cbbceb57"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "7c503e189271881eb8f3c2d9ecf8ce6c"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "222117378beb808f43370800227a3d05"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "8fa11d323e419355146fb683809bd8d7"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "71858e6eab0a86599bb52a1437817be1"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "479304920529fd6ec2aa90af883875e3"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "63d5cf633eb5b1df90bafaf4a7b57d2d"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "35ffd77cd2c275e36c919a51706b03c6"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "5574d4896b787a6798a7c2f577d70f85"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "b54418cbd3388766601c0e5a14955637"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "3ec7810b6305a46f10ad09866593f91d"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "77009ba5424852967e38d1eb25159638"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "ec8b066e497292e7831521702c390332"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "613b92f706d231e6cb3a1cadf788c6dd"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "8bb56cd47d4fb326d5404ed6e9c24110"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "6ed66d090f04cb26274872348a5602e9"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "16024ac4ab8e6c94d5125013f46686c3"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "d4e95f7012fa16873be45491c54347f8"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "159e20a4d312467ae390d0ae39b683f0"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "af3e1fc7da1341a54004fbfa1f4edcea"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "6035a664714f599385bfa1550be332dc"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "55c4a662b30a5c9b6975e94f3c356715"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "4a4224a292f74569d25a243fb99744ab"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "bc8d3ff318ec95f450aba89f36ad9413"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "8002936b7394e9eaecf607068d0955be"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "6ba52204250427d84ee7e2728bb416c0"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "71e78c16e3d832712aeb42388d424d13"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "a2c96a41e039eec89345d915f01c4766"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "8eaa341a4138f71e23c3030b58fa9a89"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "555606e6cda99f3fcc86b83aad025a64"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "39f90c2bc33defa0fd4cb45ce6073d14"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "c51c23b0256de7ae6231f575da14a334"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "b2f6af365f8d59f6533e7b4af2ce259e"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "451d583138f6cc9378e2d6a71e2137ff"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "43597974561973ca66788a2bbfea0d02"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "7eea8e409d62f6e623b7bd8b048076e8"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "f964d24f9dfe553164763a48dfdcc220"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "2d6c9ac71d1ac89f5147917dff7176b1"
  },
  {
    "url": "1.x/packages/create-system-configuration.html",
    "revision": "a84e469d12f960cb7b7af4f53133276e"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "e674d6dfd9a32c1572201c7680482007"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "810b3a867d28de9b8c9dd35c6eedc0be"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "5e462a550d08bab6c0698f3c313c10f7"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "e6e47b0058d2bcc67c1df50ccf36b371"
  },
  {
    "url": "1.x/themes/create-store-theme.html",
    "revision": "3ccc66adad84a20408cbf06ae9a7e677"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "dc04a37ccb4b6321d6d465493113c1c1"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "5bad1da97dee5184d7370899a36d539c"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "924aac9881c20085e8ee1d3e777c7245"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "ba00b48eaa9048e8636bd475fb5d3178"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "d30030613cdd514849fa198f9cca0673"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "f8ad01b1a8e901d2cb1b6135265cfa9f"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "5961471449e505ad79b3f412ffe564f8"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "29d6eba397f9e529363c126720dedcd0"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "3eeffa47e2add1412e4253b88681a146"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "f5634b28f7c5d3480411a540b21b25d5"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "f65256aefc8d25aff63ee75482696cb1"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "77ebc125c43cad7dcee18080cea3175e"
  },
  {
    "url": "2.0/advanced/change-email-template.html",
    "revision": "e29f3eb4fff2cdcc397144db978da788"
  },
  {
    "url": "2.0/advanced/create-data-import.html",
    "revision": "f52305c67fc5c4d06da82eb2e9c86994"
  },
  {
    "url": "2.0/advanced/create-payment-method.html",
    "revision": "a1b42c3eaa18bd69c08c765dd2b0acb7"
  },
  {
    "url": "2.0/advanced/create-product-type.html",
    "revision": "dc5e03d2d7b797e6a7477e446aaba25b"
  },
  {
    "url": "2.0/advanced/create-shipping-method.html",
    "revision": "c46ab834ff527a085b1e97f02a39ad78"
  },
  {
    "url": "2.0/advanced/events.html",
    "revision": "6c6b9259f073b317a6bf623deb12c0a8"
  },
  {
    "url": "2.0/advanced/helpers.html",
    "revision": "a5232f686f3af2f6705b6dfe504cecc4"
  },
  {
    "url": "2.0/advanced/index.html",
    "revision": "92b762c9489b166fb387309c418b5edf"
  },
  {
    "url": "2.0/advanced/indexing-products-to-elasticsearch.html",
    "revision": "cb7f0ca05a56326f76049585fb30bd88"
  },
  {
    "url": "2.0/advanced/override-core-model.html",
    "revision": "03329b2a8c1fe95f5ccf8ee8ca7a83f7"
  },
  {
    "url": "2.0/advanced/render-event.html",
    "revision": "f27328b43a908a11da9c24201254674a"
  },
  {
    "url": "2.0/advanced/security-practice.html",
    "revision": "c70cfd856bb0c6ba81b94d5dffc37135"
  },
  {
    "url": "2.0/api/getting-started-with-the-api.html",
    "revision": "ee6650dc951a00275bda3ba1184b6763"
  },
  {
    "url": "2.0/api/index.html",
    "revision": "4973ab2705b549e01b59b5db827388e7"
  },
  {
    "url": "2.0/architecture/frontend.html",
    "revision": "46c34dac1efc4ac04d1717b37b8402f0"
  },
  {
    "url": "2.0/architecture/index.html",
    "revision": "c929005a2b5ec636d2c8220d22b6c747"
  },
  {
    "url": "2.0/architecture/modular-design.html",
    "revision": "7dd256d20d52da59210af6bd24038261"
  },
  {
    "url": "2.0/architecture/packages.html",
    "revision": "52b339829023e2e1f4942f4e771e05f3"
  },
  {
    "url": "2.0/architecture/performance.html",
    "revision": "cb8683c806e771cba227101ddd66bea3"
  },
  {
    "url": "2.0/architecture/repository-pattern.html",
    "revision": "443c07e19138c2a8c97e1f595771d384"
  },
  {
    "url": "2.0/architecture/theme.html",
    "revision": "40fa95c79a9a63afbd0f8caef9aa34be"
  },
  {
    "url": "2.0/deploy/index.html",
    "revision": "4a511527d01bb850950ac226b0ea2edb"
  },
  {
    "url": "2.0/introduction/docker.html",
    "revision": "6c20cbdda226ca1999011d5e523922af"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "215e67c9fb2473b501a05044882912ff"
  },
  {
    "url": "2.0/introduction/installation.html",
    "revision": "fa212484b22213f82cb87b657d095af2"
  },
  {
    "url": "2.0/introduction/requirements.html",
    "revision": "5e39a304a722678bb3c9f1ca157aa107"
  },
  {
    "url": "2.0/packages/add-menu-in-admin.html",
    "revision": "7d95c7e4b4dc45a07c7694e766575156"
  },
  {
    "url": "2.0/packages/blade-components.html",
    "revision": "5ab9b2330cf8273f774a9acd478bd591"
  },
  {
    "url": "2.0/packages/bundling-assets.html",
    "revision": "371348eb3451ed50bd94953f5eaf0b64"
  },
  {
    "url": "2.0/packages/controllers.html",
    "revision": "f0c36cd70abb6c6d10e0c028bf90a8d7"
  },
  {
    "url": "2.0/packages/create-acl.html",
    "revision": "f5bd4a8f1688da18b6aa3f0d5f022634"
  },
  {
    "url": "2.0/packages/create-migrations.html",
    "revision": "efe7af79a5b3c58425c5d68ddeeea63b"
  },
  {
    "url": "2.0/packages/create-models.html",
    "revision": "c76642a855c10269c7465a72290e49bf"
  },
  {
    "url": "2.0/packages/create-package.html",
    "revision": "86c506f4262f8b57fd7afcbf7fdc28e7"
  },
  {
    "url": "2.0/packages/create-system-configuration.html",
    "revision": "3519423ffa5ba8c637f53e724e5d9023"
  },
  {
    "url": "2.0/packages/datagrid.html",
    "revision": "38cd4f8546a4d2df8c107cd982b0e60a"
  },
  {
    "url": "2.0/packages/index.html",
    "revision": "c23d8e3efdeaadcbf31cf7db93dc18d8"
  },
  {
    "url": "2.0/packages/layouts.html",
    "revision": "54a59fd0c5242cb1fd025cf38258d6e5"
  },
  {
    "url": "2.0/packages/localization.html",
    "revision": "3b396ead4b7d8a75cc5527c5cf09e68b"
  },
  {
    "url": "2.0/packages/routes.html",
    "revision": "9b594a7dfc3b5fd4574bb42ff6b3a580"
  },
  {
    "url": "2.0/packages/store-data-through-repositories.html",
    "revision": "0362ba83b0863996ffb3a55362a295ce"
  },
  {
    "url": "2.0/packages/validation.html",
    "revision": "1e49ef54f8cbea4ca42eeaf72112f28c"
  },
  {
    "url": "2.0/packages/views.html",
    "revision": "8b9d4356f382b93703368e18ebb476e2"
  },
  {
    "url": "2.0/prologue/contribution-guide.html",
    "revision": "ae2852c3ab0d72f4c2f7373f8b7db8f3"
  },
  {
    "url": "2.0/prologue/index.html",
    "revision": "d547398a6b62f332e0167df4c4413a09"
  },
  {
    "url": "2.0/prologue/upgrade-guide.html",
    "revision": "4923e2ce260b4ddc343a16217515a83e"
  },
  {
    "url": "2.0/themes/create-admin-theme.html",
    "revision": "8bae6c79eb058c5e6ddaf8d133b8546e"
  },
  {
    "url": "2.0/themes/create-store-theme.html",
    "revision": "09c83fffd2f73c70329b1ebbb66d1ba4"
  },
  {
    "url": "2.0/themes/index.html",
    "revision": "d9661c10b99d8ab656227746888d2712"
  },
  {
    "url": "2.1/advanced/change-email-template.html",
    "revision": "d36443dcfade4c5afc74f114fa5f472d"
  },
  {
    "url": "2.1/advanced/create-data-import.html",
    "revision": "c87842a27cce0735ef7475b68e31dd14"
  },
  {
    "url": "2.1/advanced/create-payment-method.html",
    "revision": "ed8bb00548f3ada90a96f1d96dc7a314"
  },
  {
    "url": "2.1/advanced/create-product-type.html",
    "revision": "293bf46b0360ac4aaccb18f094f41595"
  },
  {
    "url": "2.1/advanced/create-shipping-method.html",
    "revision": "32f58980e57f9aac438c4241b88256a0"
  },
  {
    "url": "2.1/advanced/events.html",
    "revision": "701ac7337866d10521c77ce4a5723e13"
  },
  {
    "url": "2.1/advanced/helpers.html",
    "revision": "0e0742cb257e06449d1de769d6af85d0"
  },
  {
    "url": "2.1/advanced/index.html",
    "revision": "05474f0eeea5848af86ff93fc36a3476"
  },
  {
    "url": "2.1/advanced/indexing-products-to-elasticsearch.html",
    "revision": "d8cbadec6b12c397decc924e07cc4b60"
  },
  {
    "url": "2.1/advanced/override-core-model.html",
    "revision": "d3fc4bc35bc4e2658cee86a94c7288a2"
  },
  {
    "url": "2.1/advanced/render-event.html",
    "revision": "86c6790bae18378170470b75bc01ad7e"
  },
  {
    "url": "2.1/advanced/security-practice.html",
    "revision": "4cfb6675109001dff206d0b8bd858845"
  },
  {
    "url": "2.1/api/getting-started-with-the-api.html",
    "revision": "4c1b95aba38eb4c4ec1933189a289ee8"
  },
  {
    "url": "2.1/api/index.html",
    "revision": "e2bc29b4ba65a265c91216d9154569b1"
  },
  {
    "url": "2.1/architecture/frontend.html",
    "revision": "0e3c4d2c3a9ae38b3498802d67f6fde9"
  },
  {
    "url": "2.1/architecture/index.html",
    "revision": "b94ff2605ebb662b736b5b6ef1fb238b"
  },
  {
    "url": "2.1/architecture/modular-design.html",
    "revision": "d4de205a4f88a2e16e71be79f91bfe4a"
  },
  {
    "url": "2.1/architecture/packages.html",
    "revision": "7b73d3195d13e11fe0f62a0f527b7d87"
  },
  {
    "url": "2.1/architecture/performance.html",
    "revision": "3c04eb66eaf3bd125f7c8ab394a0af73"
  },
  {
    "url": "2.1/architecture/repository-pattern.html",
    "revision": "d42c9723d944c2d3adef7937889f5740"
  },
  {
    "url": "2.1/architecture/theme.html",
    "revision": "d6e5e23b051e7d1e9cbe02132a573cd8"
  },
  {
    "url": "2.1/deploy/index.html",
    "revision": "879d018ef01bb0973077750416cf409a"
  },
  {
    "url": "2.1/introduction/docker.html",
    "revision": "b2fafbf3a0b6dbda8bfd1319161cf524"
  },
  {
    "url": "2.1/introduction/index.html",
    "revision": "1d670bc1f2c5c86a1b7a156df217ba1f"
  },
  {
    "url": "2.1/introduction/installation.html",
    "revision": "3eb2499608715fd68f9e2781efdca32c"
  },
  {
    "url": "2.1/introduction/requirements.html",
    "revision": "520e91dd61b598f7081ef0e3d69a6e5b"
  },
  {
    "url": "2.1/packages/add-menu-in-admin.html",
    "revision": "06fab3c816847bc41a4da08d4972ff24"
  },
  {
    "url": "2.1/packages/blade-components.html",
    "revision": "562f8c4a0555db86dc861b8c9c50c55b"
  },
  {
    "url": "2.1/packages/bundling-assets.html",
    "revision": "a1ca79e0ad9ababa518a6f985ecdecd3"
  },
  {
    "url": "2.1/packages/controllers.html",
    "revision": "b603623e796c1d4aed24209fc7f4fb58"
  },
  {
    "url": "2.1/packages/create-acl.html",
    "revision": "ee677243c003af7fda3a1cc4c8618025"
  },
  {
    "url": "2.1/packages/create-migrations.html",
    "revision": "8e811c8512eb310d11743dffdc6f5247"
  },
  {
    "url": "2.1/packages/create-models.html",
    "revision": "f6131ecd962fd7ccaf8f6650f4b4d929"
  },
  {
    "url": "2.1/packages/create-package.html",
    "revision": "d013c22e8243077fcce8281ae9004e46"
  },
  {
    "url": "2.1/packages/create-system-configuration.html",
    "revision": "eceb2dcd84cf105e92aba43cb642ae26"
  },
  {
    "url": "2.1/packages/datagrid.html",
    "revision": "9916ebcc89673d964ed27d311f03c864"
  },
  {
    "url": "2.1/packages/index.html",
    "revision": "12a5dbf5be9f85e18593f5b6fece31a0"
  },
  {
    "url": "2.1/packages/layouts.html",
    "revision": "59afc23c148c14f72f01c83f9b89118f"
  },
  {
    "url": "2.1/packages/localization.html",
    "revision": "3aa004c850be4661cca054e33b6de6ae"
  },
  {
    "url": "2.1/packages/routes.html",
    "revision": "511cb91e5112bb2870f2c75f36fd89da"
  },
  {
    "url": "2.1/packages/store-data-through-repositories.html",
    "revision": "abd06ce9675b752ce753204c45293c1f"
  },
  {
    "url": "2.1/packages/validation.html",
    "revision": "d9676e1217b9055bd0a8fbb8acbb5466"
  },
  {
    "url": "2.1/packages/views.html",
    "revision": "09a7aac421a1ca9f525244b7ee66b316"
  },
  {
    "url": "2.1/prologue/contribution-guide.html",
    "revision": "89a748cb0321284a7942af37d2e238cc"
  },
  {
    "url": "2.1/prologue/index.html",
    "revision": "e6da3024602615df4c29ca169bf72cf4"
  },
  {
    "url": "2.1/prologue/upgrade-guide.html",
    "revision": "a17d6167b48965627f0d219a8c5f5c4d"
  },
  {
    "url": "2.1/themes/create-admin-theme.html",
    "revision": "e1704ea67c8c303c708fcd683ba1beea"
  },
  {
    "url": "2.1/themes/create-store-theme.html",
    "revision": "85dd87a6005f89516887a9cba1ec2605"
  },
  {
    "url": "2.1/themes/index.html",
    "revision": "3307ab0522f9f74cfdcf95cd2c96667e"
  },
  {
    "url": "2.2/advanced/change-email-template.html",
    "revision": "7cdc10a4974c3cfd94a8f33f396f7e02"
  },
  {
    "url": "2.2/advanced/create-data-import.html",
    "revision": "ef8c82cde5c55611f347aa62c97202cf"
  },
  {
    "url": "2.2/advanced/create-payment-method.html",
    "revision": "32631d84f0e3ed0c7b5367c4189543f1"
  },
  {
    "url": "2.2/advanced/create-product-type.html",
    "revision": "1680d18402c7b4203f9f8ec873786fe9"
  },
  {
    "url": "2.2/advanced/create-shipping-method.html",
    "revision": "e84604ad26a31845385a82c925627bb2"
  },
  {
    "url": "2.2/advanced/events.html",
    "revision": "69916196fc530c24ff2fa3a2702d8282"
  },
  {
    "url": "2.2/advanced/helpers.html",
    "revision": "9e717fd33e26b795c7d3ecd19c82bdb4"
  },
  {
    "url": "2.2/advanced/index.html",
    "revision": "813343e2a7a6a07a9c10a5f937e0b79f"
  },
  {
    "url": "2.2/advanced/indexing-products-to-elasticsearch.html",
    "revision": "3dcae4f2cc7668f65bb242bdd879cc2c"
  },
  {
    "url": "2.2/advanced/override-core-model.html",
    "revision": "1f1862022b0c751d7de156b3b28766c2"
  },
  {
    "url": "2.2/advanced/render-event.html",
    "revision": "545a931efaf730f4d7e51ab6325a3412"
  },
  {
    "url": "2.2/advanced/security-practice.html",
    "revision": "74b84952260c996bed728d9b0c116189"
  },
  {
    "url": "2.2/api/getting-started-with-the-api.html",
    "revision": "c06893bcef05aed8111d49b871ad1cfe"
  },
  {
    "url": "2.2/api/graphql-api.html",
    "revision": "66b86b4c24d6dc298e08692732456e8d"
  },
  {
    "url": "2.2/api/index.html",
    "revision": "391387f77286ca52351cc1514a5559bc"
  },
  {
    "url": "2.2/architecture/frontend.html",
    "revision": "d345becebbd1d2f4fd53ddc05f95efb0"
  },
  {
    "url": "2.2/architecture/index.html",
    "revision": "769469cdc5a3343bca02bcbdd5d7be80"
  },
  {
    "url": "2.2/architecture/modular-design.html",
    "revision": "dbe35b75231d74e4db1cc425038e7513"
  },
  {
    "url": "2.2/architecture/packages.html",
    "revision": "127c7114f0510b32dc3474f6e84f9129"
  },
  {
    "url": "2.2/architecture/performance.html",
    "revision": "5950f52383ec3cdf33778f45a7fe971e"
  },
  {
    "url": "2.2/architecture/repository-pattern.html",
    "revision": "dbc0a8e403aa4aa80a4885594cdadfa9"
  },
  {
    "url": "2.2/architecture/theme.html",
    "revision": "9d41f7fd5dbfd6a979b19acbc7e9e7ae"
  },
  {
    "url": "2.2/deploy/index.html",
    "revision": "07696733945882361ad9dce27f62b7b7"
  },
  {
    "url": "2.2/introduction/docker.html",
    "revision": "023f0eee49592030741364febaffba57"
  },
  {
    "url": "2.2/introduction/index.html",
    "revision": "37b63d2b17447b435cb915f3eefd6716"
  },
  {
    "url": "2.2/introduction/installation.html",
    "revision": "b13b482830e4dcfcd3d49ff519255ee5"
  },
  {
    "url": "2.2/introduction/requirements.html",
    "revision": "ff3b38fb2f257ffeb5c6532b0fd2159b"
  },
  {
    "url": "2.2/packages/add-menu-in-admin.html",
    "revision": "a1dfd07c6554342e117e986dc499b9cb"
  },
  {
    "url": "2.2/packages/blade-components.html",
    "revision": "74ec83f85667ba21b364c154d998613a"
  },
  {
    "url": "2.2/packages/bundling-assets.html",
    "revision": "7a5408e06660f1718cd8d75b1af9c1f1"
  },
  {
    "url": "2.2/packages/controllers.html",
    "revision": "867574faf989bfd760b1e1ccbaa98491"
  },
  {
    "url": "2.2/packages/create-acl.html",
    "revision": "d8707eabb2ad8e5b82c5fadcad5af25b"
  },
  {
    "url": "2.2/packages/create-migrations.html",
    "revision": "bfd2d527593165bac783e9636c27f2e1"
  },
  {
    "url": "2.2/packages/create-models.html",
    "revision": "1a2210b67fafb48ca911bd0393425217"
  },
  {
    "url": "2.2/packages/create-package.html",
    "revision": "a7aaf1a86b10752c83fa1ff01b33fc97"
  },
  {
    "url": "2.2/packages/create-system-configuration.html",
    "revision": "90405c1d663117db550e3ecc43332d68"
  },
  {
    "url": "2.2/packages/datagrid.html",
    "revision": "e7f9fe53307c711b80f49a3f7432506f"
  },
  {
    "url": "2.2/packages/index.html",
    "revision": "65547dd9fc36a90af353af9ba4f96447"
  },
  {
    "url": "2.2/packages/layouts.html",
    "revision": "11655a56c016a1692477e8f5bc2f66b5"
  },
  {
    "url": "2.2/packages/localization.html",
    "revision": "8ff3e58153cfba885d1603316fafdba1"
  },
  {
    "url": "2.2/packages/routes.html",
    "revision": "3f53876eaf6b7f5832f3cf23e5991b92"
  },
  {
    "url": "2.2/packages/store-data-through-repositories.html",
    "revision": "2bfc1e5ed2a20a735b9d1beaded1f2bf"
  },
  {
    "url": "2.2/packages/validation.html",
    "revision": "93401cd4a92a578ed3c284b397dc4aee"
  },
  {
    "url": "2.2/packages/views.html",
    "revision": "325f507922c04a13e203584e4a162085"
  },
  {
    "url": "2.2/prologue/contribution-guide.html",
    "revision": "06f8662d0da01f58526fbccf56f9cf10"
  },
  {
    "url": "2.2/prologue/index.html",
    "revision": "26108ab6479ee564e126ab03f1563239"
  },
  {
    "url": "2.2/prologue/upgrade-guide.html",
    "revision": "3849f9c5af94a8c1e3bd54f23d663438"
  },
  {
    "url": "2.2/themes/create-admin-theme.html",
    "revision": "dab693b5f26d20ff2bf6b376c547a71d"
  },
  {
    "url": "2.2/themes/create-store-theme.html",
    "revision": "564129c824aed68fdbbda5b04cc63ea3"
  },
  {
    "url": "2.2/themes/index.html",
    "revision": "46cdca9610705439a4eee14e10269669"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "71a11863f9974213ee72d0c1ccaabe61"
  },
  {
    "url": "2.x/advanced/create-data-import.html",
    "revision": "dc143da331dc33e7301d3b45d73713dd"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "bf215e6dd46a589d59f1e2db96afac9b"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "b335a9618fa44afbee30b25792870631"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "24caf7fd45a8e9eed9edff5d89facfa1"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "34ce8c09b44025ec3b430e76779a6a30"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "b163976ff0fee10135f5505ec161f5ec"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "f9d3120fd6c074cad792c0f61cf01f7e"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "982d5a85cabdb2324862c172f3d52bc4"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "c5af535ee6e2e38328765c50359e513f"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "ed96e2ad162ebcf8344faf9371bb24cf"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "01638a11f8944b9cf773b7d39f20d4cb"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "28cde97bfe183ef45cd86c881a48947b"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "8ca4245dd6bd38cff8c86e3388ea3203"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "ad8cfd093ed77ae62bec15a13b69a191"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "63dd4cbb09e964d6fc1f7bce7e65522e"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "92355bd8cc0f69819ac76abeb49dca74"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "00fa4ed254177c83cc3fd1082c8fad09"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "6febf63c8cec1cc2d61038d46bb8fa25"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "3ac8e05295ef8dac4e97c61df2fd356e"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "37e034eb615b5646cdccc42897c553af"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "54aac70b6c52436ee59a2c5784d38b7d"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "b495f5cc2ef9eb8188e76d8f24762da3"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "5618061ab025919a9481dadf6c4abcc7"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "f51de978533132edb4c4d210bffaf7c2"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "94b98033c3b3e6bcc2dde2312b21d6e2"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "06fd1076bb01adb3ba3cfb879e45d207"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "bf23ea0d4f85adb713ccd9d6a8c3000d"
  },
  {
    "url": "2.x/packages/bundling-assets.html",
    "revision": "45fc0a67e1e03f95fe6490077b9ac20e"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "d887824dcfd9cf24cdd8b4b8fee1f781"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "f1f08a60b9186d4ddd9788ce3c2ced62"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "c5eed1219f0f8627f292edb101e0207a"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "24f6d21de953347c9453516471242a4a"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "a341a89fc849d347de228d7a31ef5d0d"
  },
  {
    "url": "2.x/packages/create-system-configuration.html",
    "revision": "8b97a14ee9eb19a3b993a94654b474df"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "453186b09d100d8111313b82bd80e481"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "2a5b85e0ee744772beb766f2f7fad75b"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "31dab9b14cd501f88a52c105879cdb64"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "8273033f9ca40378056124b9b2713a5e"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "e4a9d601798eccbc74df04d68f117391"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "4323d990074230d016916edf58cb840d"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "18ba29e60f99d6007017e57e23e3b71c"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "dcd00b569048bf884b92bde056a472ef"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "6f07aed9cbb141f4fbe80f5cfa6c6526"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "d014282072bbd80ae7abd816f4d81156"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "5f81ff57045f2fa7af00455c4c554e16"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "a006bf6970302dc131aa6f8435058b06"
  },
  {
    "url": "2.x/themes/create-store-theme.html",
    "revision": "c09d0e87f67d967ced2aefa62a35c903"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "de047987e84d1f0520c7a65261ff584d"
  },
  {
    "url": "404.html",
    "revision": "f0e1186cc17bd4eab9321705d46761c7"
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
    "url": "assets/js/1.c221fa01.js",
    "revision": "629eda5394e941a87bce0fe900b1b47b"
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
    "url": "assets/js/101.7d01048d.js",
    "revision": "5eabd12e1f1acf6b122c5e15ce929e70"
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
    "url": "assets/js/106.f8da0760.js",
    "revision": "3bd828a93ff55746c2f740007b42f9bf"
  },
  {
    "url": "assets/js/107.ee8630dc.js",
    "revision": "aa28805fd75ef67cf9015d659be98c27"
  },
  {
    "url": "assets/js/108.8aa12172.js",
    "revision": "636a77cfe260b51b0fb032ac3a42f865"
  },
  {
    "url": "assets/js/109.4fce3fa3.js",
    "revision": "f50251b52d394643fee5b871631014d8"
  },
  {
    "url": "assets/js/11.b7206ec7.js",
    "revision": "b9fceafb37f3e146850a52dd018e2898"
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
    "url": "assets/js/112.95402ce2.js",
    "revision": "df163ad4ae82416ca3beb4d36d724bb2"
  },
  {
    "url": "assets/js/113.74cfc86d.js",
    "revision": "7462061996af2f34bf09bee6e983575f"
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
    "url": "assets/js/12.ffb79c3c.js",
    "revision": "116ca60d4b24eb41276c2f4870f75771"
  },
  {
    "url": "assets/js/120.7cd52bde.js",
    "revision": "0858270755d2e316133b3333a9d1d8ba"
  },
  {
    "url": "assets/js/121.9d375b46.js",
    "revision": "f4e4168995fef877ce4fb637595f3491"
  },
  {
    "url": "assets/js/122.81ed40d4.js",
    "revision": "c8076ffd3367b1d9802e94b7ea531f45"
  },
  {
    "url": "assets/js/123.54f254a1.js",
    "revision": "34285ef1956f09b3a96c63bfd74c03dc"
  },
  {
    "url": "assets/js/124.3843fbe5.js",
    "revision": "e4b7e1990210402bc21174ebf4fecba8"
  },
  {
    "url": "assets/js/125.5fb1d62a.js",
    "revision": "d7620be8fe1285396f4536c139653fcf"
  },
  {
    "url": "assets/js/126.abb88bc7.js",
    "revision": "c0131c0e1cc7dc05efea99c3bd344939"
  },
  {
    "url": "assets/js/127.da79fd04.js",
    "revision": "240d9429c969497905ff170ebeb7d41d"
  },
  {
    "url": "assets/js/128.123f6d17.js",
    "revision": "adcd09aba133c07c0b6d2e0e6e73918a"
  },
  {
    "url": "assets/js/129.d2fed830.js",
    "revision": "ea1963ef98b1cc0982bd2fe4796a8079"
  },
  {
    "url": "assets/js/13.5a6645d4.js",
    "revision": "17d137d5e89cae820089229f051bab46"
  },
  {
    "url": "assets/js/130.99cfadda.js",
    "revision": "5e1e5fb34fe30cf7f16a3a028628eca9"
  },
  {
    "url": "assets/js/131.0c92c928.js",
    "revision": "cfd0dd75f4846d73524a8b9cd5cd964d"
  },
  {
    "url": "assets/js/132.061a801b.js",
    "revision": "17fd312d6cd08474b22f5e3be0cde445"
  },
  {
    "url": "assets/js/133.a88726ed.js",
    "revision": "e5ad4ecd65fd090d570af5a9c7b0b57c"
  },
  {
    "url": "assets/js/134.afed9891.js",
    "revision": "3eaf2d1f7f4b167e7991da1d7904eaf5"
  },
  {
    "url": "assets/js/135.36f2c2f3.js",
    "revision": "a27a933b2c45f8fc7d55ae2af67bb17f"
  },
  {
    "url": "assets/js/136.9fcb8de7.js",
    "revision": "b91e1cb64083738535b61f23596bcad5"
  },
  {
    "url": "assets/js/137.461abf78.js",
    "revision": "6c48cac07d5e46ff42924ec5aad06fb0"
  },
  {
    "url": "assets/js/138.72a0465e.js",
    "revision": "e389b4cb225d63bc4d8e149d080dee28"
  },
  {
    "url": "assets/js/139.24cddeb6.js",
    "revision": "98c5ec23aa5505e72f97150bd76014fa"
  },
  {
    "url": "assets/js/14.8c161f1f.js",
    "revision": "5f202c7d732c18a5a87f2fbeefdc36dd"
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
    "url": "assets/js/145.83ceb845.js",
    "revision": "f3070f69bcced095846f814f77646041"
  },
  {
    "url": "assets/js/146.08c25ac8.js",
    "revision": "4c0577f024ddec7cf5a55c77c9d214af"
  },
  {
    "url": "assets/js/147.ebe00e25.js",
    "revision": "14721ec11f494da9955aa5c93de42b0e"
  },
  {
    "url": "assets/js/148.cfb15dda.js",
    "revision": "b701e82424306d793b30971094e43c9a"
  },
  {
    "url": "assets/js/149.97fa4a1e.js",
    "revision": "89fe2d341ebfbb556bda6ecdce4bf15a"
  },
  {
    "url": "assets/js/15.0619c360.js",
    "revision": "9f1c4c9b9c69f060902625b11ba4a16b"
  },
  {
    "url": "assets/js/150.6410bd04.js",
    "revision": "e0184b2814979df131a8ff597d636138"
  },
  {
    "url": "assets/js/151.b92ecdcc.js",
    "revision": "040a7561e27cf89d934ccf991e8814bd"
  },
  {
    "url": "assets/js/152.c3f5f5cc.js",
    "revision": "17db0807a215b788fa580b3c254dc104"
  },
  {
    "url": "assets/js/153.9857c66c.js",
    "revision": "06f132bb50ce503b0e28601a1cb191b0"
  },
  {
    "url": "assets/js/154.7457d3ef.js",
    "revision": "f551c7139f4c4560ff91d47950b76aad"
  },
  {
    "url": "assets/js/155.20dc79e4.js",
    "revision": "8233cfda184954d04e4f3ae03e0286d2"
  },
  {
    "url": "assets/js/156.b5b02682.js",
    "revision": "7f4ab057c14231ff76d9a31062683639"
  },
  {
    "url": "assets/js/157.38bed49a.js",
    "revision": "28bd75f2d9304523c2af60feb4a610e3"
  },
  {
    "url": "assets/js/158.8185b9bc.js",
    "revision": "6166a0a28cc2b31e2ce7a764ea8be232"
  },
  {
    "url": "assets/js/159.6a568888.js",
    "revision": "7ef6c969df22d627ca7800b186877f5b"
  },
  {
    "url": "assets/js/16.dbfdb420.js",
    "revision": "d6a428e200ee57ac1dcaa459b51ae6a5"
  },
  {
    "url": "assets/js/160.bb3fd589.js",
    "revision": "cf9619d8ed6fe7f06d37eb794ccd8396"
  },
  {
    "url": "assets/js/161.a63f5d60.js",
    "revision": "9d220f564575a7bf9e81d99f48dc0a86"
  },
  {
    "url": "assets/js/162.a64b4dc2.js",
    "revision": "b94b754a25a4eb59ecdc66f7bbf0e88b"
  },
  {
    "url": "assets/js/163.1e7a0022.js",
    "revision": "ce6967b8bbaf46c8c57978a96c72f0e5"
  },
  {
    "url": "assets/js/164.a5bcf745.js",
    "revision": "065ff9c374a18a2f846697a0c56eec83"
  },
  {
    "url": "assets/js/165.222fd72f.js",
    "revision": "cc46554acb2080abc9ad117e6b5ff120"
  },
  {
    "url": "assets/js/166.38d25b39.js",
    "revision": "f54fd8b702b78aa6d04ff65b1b266029"
  },
  {
    "url": "assets/js/167.8dc58614.js",
    "revision": "3685b006f6c52885f9d331c31bb6eceb"
  },
  {
    "url": "assets/js/168.d6cc71f1.js",
    "revision": "cafd656e0c051078b59a4db9f26e3693"
  },
  {
    "url": "assets/js/169.3d939af5.js",
    "revision": "f96f5e730ad1921e35f63e5ee78ac6d1"
  },
  {
    "url": "assets/js/17.8b47afb5.js",
    "revision": "29ca63db8763c31bd724ebaacca4b305"
  },
  {
    "url": "assets/js/170.d508c3ac.js",
    "revision": "3cb34fd99c34f963ba5aae9978c5ac4c"
  },
  {
    "url": "assets/js/171.778daf70.js",
    "revision": "248f0fd2402e63fa49b71634341d6d9d"
  },
  {
    "url": "assets/js/172.7d655829.js",
    "revision": "2956c7e555cbf24ff5ef5e5ce1e969c5"
  },
  {
    "url": "assets/js/173.c6559e14.js",
    "revision": "8516edbbfb64a5d36ee2c87bab869c0f"
  },
  {
    "url": "assets/js/174.728dfad8.js",
    "revision": "00cd8020016f0cc884b3bc242d601403"
  },
  {
    "url": "assets/js/175.a049439e.js",
    "revision": "e9889ae72871b050b5d383b6b77cc85d"
  },
  {
    "url": "assets/js/176.a5d88faf.js",
    "revision": "5617695f3216345cff739f132053e1ea"
  },
  {
    "url": "assets/js/177.ba483307.js",
    "revision": "32c77803c5e6d4783c27e000558b2d4d"
  },
  {
    "url": "assets/js/178.c8ea6152.js",
    "revision": "1b38eb3177aa4b092cae45b265061e1f"
  },
  {
    "url": "assets/js/179.22041374.js",
    "revision": "2e28d8a47995f6144273d3fc3972b893"
  },
  {
    "url": "assets/js/18.cec912c9.js",
    "revision": "9f7b2c40b47f5b159ff3ce687a215879"
  },
  {
    "url": "assets/js/180.187cca4e.js",
    "revision": "c0e972d8e95451fdd87b56db11737cb7"
  },
  {
    "url": "assets/js/181.3d2c6830.js",
    "revision": "ead9ffa792e1daccf24800307151ccb1"
  },
  {
    "url": "assets/js/182.ad2b2816.js",
    "revision": "a1e7fd51479b383bd5fc0661983216bf"
  },
  {
    "url": "assets/js/183.09816acf.js",
    "revision": "d3868cfeae04fc1326c58fcbb52397a8"
  },
  {
    "url": "assets/js/184.ff625438.js",
    "revision": "d7f69e6afbfca884c059c298002a2be9"
  },
  {
    "url": "assets/js/185.506de468.js",
    "revision": "fdae0192fd561091bd7272cb6570d341"
  },
  {
    "url": "assets/js/186.d9ee0ee8.js",
    "revision": "4e41ab36f341f60f96a4f1ca0c23af19"
  },
  {
    "url": "assets/js/187.8c7f459f.js",
    "revision": "614cdd5bfbaa24342cce884a1acd8acc"
  },
  {
    "url": "assets/js/188.c463a603.js",
    "revision": "0802b2de7b39e53777e9c4f9bb43d89d"
  },
  {
    "url": "assets/js/189.bc1f6825.js",
    "revision": "269bb42a978d27b7a768c6fe20baf0f3"
  },
  {
    "url": "assets/js/19.ea834b6b.js",
    "revision": "776cbe76a3f4bbc69082a30b95fcb6d3"
  },
  {
    "url": "assets/js/190.640683b0.js",
    "revision": "1da7cd3bd5e3e05d94325d45f19b7564"
  },
  {
    "url": "assets/js/191.cc40221a.js",
    "revision": "420dbcfa93f10059c8d3667a9a8f6160"
  },
  {
    "url": "assets/js/192.2ea788f5.js",
    "revision": "c987efe22922e799f7aea21474ddbec3"
  },
  {
    "url": "assets/js/193.df1e7a28.js",
    "revision": "b6eb54c400954e86bc23a641438dcf11"
  },
  {
    "url": "assets/js/194.e357447d.js",
    "revision": "2cc5d6b09c56bc1770af99e293c9f861"
  },
  {
    "url": "assets/js/195.bd06880d.js",
    "revision": "85938193aa4516e3e77ffb500c2e3fce"
  },
  {
    "url": "assets/js/196.88b21837.js",
    "revision": "21f2520a245d534575246a63c44f684e"
  },
  {
    "url": "assets/js/197.f8cb3576.js",
    "revision": "9bf1d505b2768ebe2299051cf50999a8"
  },
  {
    "url": "assets/js/198.14ca99ee.js",
    "revision": "fdccb7ef2cb839079497012ec69b763e"
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
    "url": "assets/js/200.fd71ddaf.js",
    "revision": "6398dedf004e125ebd9e6779007d1bda"
  },
  {
    "url": "assets/js/201.a0dbe0fb.js",
    "revision": "d1ff6f9875a806944c32a02e1ddcf355"
  },
  {
    "url": "assets/js/202.843a03e2.js",
    "revision": "044f77f9890f7dcaf4860e87a37a6ab1"
  },
  {
    "url": "assets/js/203.2f5fdbb8.js",
    "revision": "9d394d71ce0dcf0b730a94f8d38ac7a0"
  },
  {
    "url": "assets/js/204.d1e18d2f.js",
    "revision": "88790b8bf0262c6a1472c108873152d7"
  },
  {
    "url": "assets/js/205.6bcb7703.js",
    "revision": "df22d73d4259e31bea4aacebd3d9ecef"
  },
  {
    "url": "assets/js/206.93b5b9fa.js",
    "revision": "6b7a7999b242e45b9c1e0cc9da84d536"
  },
  {
    "url": "assets/js/207.b63ace35.js",
    "revision": "05960f7272114bd172263c7171ee34b1"
  },
  {
    "url": "assets/js/208.25f866ab.js",
    "revision": "d8c47a321a326ed87a304b9f89d06699"
  },
  {
    "url": "assets/js/209.2bc62a7e.js",
    "revision": "f73d49e7c3dce453fe626a1218f9c4c2"
  },
  {
    "url": "assets/js/21.0dda211f.js",
    "revision": "211d3838f7f50a8b813d6281a99b9caa"
  },
  {
    "url": "assets/js/210.335504cb.js",
    "revision": "5810088f5aa4f1f558136026d00b5bfb"
  },
  {
    "url": "assets/js/211.c1df8eb8.js",
    "revision": "cca2134bcfc72459943fbe0d02ccf14d"
  },
  {
    "url": "assets/js/212.42016fe9.js",
    "revision": "504ea6ffa607881fbcc15dc5e2a5b8a5"
  },
  {
    "url": "assets/js/213.8f1c5d12.js",
    "revision": "a29740efc67d4de52b3c6c8194cc47c0"
  },
  {
    "url": "assets/js/214.2de75553.js",
    "revision": "e99a0810ab47dbd89c446961c868549c"
  },
  {
    "url": "assets/js/215.a6505192.js",
    "revision": "19833c59fd041878ce448fa4a6f89a26"
  },
  {
    "url": "assets/js/216.03a9ba70.js",
    "revision": "35a47c46b540291a76efbe061a5f320e"
  },
  {
    "url": "assets/js/217.f69091b7.js",
    "revision": "4a26ba4bb254644c6f4a3fa19dc2d8b5"
  },
  {
    "url": "assets/js/218.a1a6eaa8.js",
    "revision": "65f39a01aad20a27425bc6305a1c4154"
  },
  {
    "url": "assets/js/219.71b9ce06.js",
    "revision": "a38dd5c7caf46156a66245df29bf3125"
  },
  {
    "url": "assets/js/22.2800b9be.js",
    "revision": "875fd3593aa11c415f99e7b5e67a00e4"
  },
  {
    "url": "assets/js/220.4e769659.js",
    "revision": "776beb90f7c866976cab58ad499e3d40"
  },
  {
    "url": "assets/js/221.f98b2cb5.js",
    "revision": "96765f132610a56cfb609c11ffd15ea6"
  },
  {
    "url": "assets/js/222.811a0022.js",
    "revision": "619570da2a4aae21ef1b91d4bd8deed3"
  },
  {
    "url": "assets/js/223.c1a8e675.js",
    "revision": "f6ad56f28ad5fed371b424d13d9ca000"
  },
  {
    "url": "assets/js/224.63bc8a53.js",
    "revision": "00cecab2817f93b87981bbba68f2dae9"
  },
  {
    "url": "assets/js/225.2ef324e8.js",
    "revision": "b5cb8a9864568a13eca3d407c5d1b760"
  },
  {
    "url": "assets/js/226.b3360b95.js",
    "revision": "25405364d4f19596abe0dd73e4e56154"
  },
  {
    "url": "assets/js/227.57b62ec5.js",
    "revision": "7cad279f00f73b0e9ea07984d5ad019d"
  },
  {
    "url": "assets/js/228.1f92a2d5.js",
    "revision": "c22f25f232a44a7f6a6324719ff00788"
  },
  {
    "url": "assets/js/229.6205ce7a.js",
    "revision": "329ce95c4bdfcadcdec27aec6b64fabd"
  },
  {
    "url": "assets/js/23.685a1118.js",
    "revision": "7ddd84d6a95dc66883bcba657494fa5e"
  },
  {
    "url": "assets/js/230.96677767.js",
    "revision": "7ad96d28870c05d048a893bf676305d1"
  },
  {
    "url": "assets/js/231.71345118.js",
    "revision": "2c46315fa073967aef60d8d032fe5e72"
  },
  {
    "url": "assets/js/232.8419a5ad.js",
    "revision": "f0f5fe30d2ed1708763425ff6260e607"
  },
  {
    "url": "assets/js/233.d079d588.js",
    "revision": "9fcfdc2e903d37f91e423480c2dc0403"
  },
  {
    "url": "assets/js/234.917ba950.js",
    "revision": "dbfa9a0d6b560fc3d716c70bb96d87db"
  },
  {
    "url": "assets/js/235.def638e9.js",
    "revision": "555d17e2ad8752d0b95c951fd3022377"
  },
  {
    "url": "assets/js/236.d1d871c3.js",
    "revision": "5bf3c0de518d2af95d2b2a37fdb16101"
  },
  {
    "url": "assets/js/237.68e523a4.js",
    "revision": "012480c00bb58719dbade5bfb5444a14"
  },
  {
    "url": "assets/js/238.3ddc13ed.js",
    "revision": "6313fcbf1d46b96211d096a52bfde00f"
  },
  {
    "url": "assets/js/239.5b69517a.js",
    "revision": "51b628dbf854acde58a5dfd15dbc0de4"
  },
  {
    "url": "assets/js/24.363fd375.js",
    "revision": "318e04878440ca2a6bf894c25d992879"
  },
  {
    "url": "assets/js/240.5417807e.js",
    "revision": "1d8fe16ebd0b7d886fe469d5735aa831"
  },
  {
    "url": "assets/js/241.0cf98306.js",
    "revision": "5541d6064169f423cb3a4d3d8d75abee"
  },
  {
    "url": "assets/js/242.febda471.js",
    "revision": "3905d59a705f7bcff04626f00e093717"
  },
  {
    "url": "assets/js/243.6cd805ec.js",
    "revision": "060d48d789ea224b0c89cf225497dba4"
  },
  {
    "url": "assets/js/244.fc437d09.js",
    "revision": "1084bb2751e25156758661e00e3ca72d"
  },
  {
    "url": "assets/js/245.92321c8b.js",
    "revision": "793e7e7825fffe3f6583520070ab2530"
  },
  {
    "url": "assets/js/246.f5979aa9.js",
    "revision": "d19a05bd0044e66cca506a363f6af6fa"
  },
  {
    "url": "assets/js/247.ad3b2f24.js",
    "revision": "f2f863c711a8eb05b5973b4a938ad8e1"
  },
  {
    "url": "assets/js/248.eb8716d2.js",
    "revision": "8e56a9d0ddb0bda588efb506e8fc34c3"
  },
  {
    "url": "assets/js/249.7602d5d8.js",
    "revision": "6fe529a99518fbe5a1a0a82adebc4100"
  },
  {
    "url": "assets/js/25.d93d5a37.js",
    "revision": "5810a87154f8e47a47ed562e68b45b94"
  },
  {
    "url": "assets/js/250.d199dd1f.js",
    "revision": "5dbd184f53f9c70f82b4587a5ffcb924"
  },
  {
    "url": "assets/js/251.a27bf773.js",
    "revision": "c0e02ff3f896890c6a05f08fe3011a43"
  },
  {
    "url": "assets/js/252.8c6b6f7d.js",
    "revision": "b51993efebdc2c9249e0a734b362074f"
  },
  {
    "url": "assets/js/253.d5358fb8.js",
    "revision": "ba3485aeb4c985522b15a0fdbab3d6d3"
  },
  {
    "url": "assets/js/254.c426d3d3.js",
    "revision": "852265b1ddee99329654cede6f51d6a8"
  },
  {
    "url": "assets/js/255.22c30c46.js",
    "revision": "431837078f21815c29a19515f98aeed3"
  },
  {
    "url": "assets/js/256.698f9f42.js",
    "revision": "a3d3f24044923c3f67c15529dfcc04b0"
  },
  {
    "url": "assets/js/257.40db8f62.js",
    "revision": "6c7c995d6583571057c02f4e9785f0b5"
  },
  {
    "url": "assets/js/258.4c4c2116.js",
    "revision": "e7b06ff75519640fef463c4fb77f0a90"
  },
  {
    "url": "assets/js/259.b2d6a237.js",
    "revision": "0f02438d6bc9253b2f746654562b59e3"
  },
  {
    "url": "assets/js/26.4bb29c0d.js",
    "revision": "5e7cc494450b4be26702b740bcdb1e1b"
  },
  {
    "url": "assets/js/260.479eb3d4.js",
    "revision": "1c098013404b96dfbc74ed776cde280c"
  },
  {
    "url": "assets/js/261.1f93a44c.js",
    "revision": "aceaabe458c82c5505a8d322e2fbd1ff"
  },
  {
    "url": "assets/js/262.8ef81b60.js",
    "revision": "4ea59722847b4b9cb63c0e0a01ede6a1"
  },
  {
    "url": "assets/js/263.794b4ade.js",
    "revision": "6d150d2bb48f51c21be763ab75e2f435"
  },
  {
    "url": "assets/js/264.42ff4322.js",
    "revision": "9a801f750d0d3a30aa4a68ec361f77bc"
  },
  {
    "url": "assets/js/265.6b0233a5.js",
    "revision": "0a79b181ee21642017af897365f4ddc3"
  },
  {
    "url": "assets/js/266.9f0f04fa.js",
    "revision": "a3058bef50caf099b05cf5bd5ad48c0c"
  },
  {
    "url": "assets/js/267.aa26a434.js",
    "revision": "3d412ca082e09474f39da1de1a2acd9d"
  },
  {
    "url": "assets/js/268.9b7ebd71.js",
    "revision": "907e26aa63586d6f970f88a986aad80d"
  },
  {
    "url": "assets/js/269.aa6af161.js",
    "revision": "213849a3e4cef331f69958524fa8bc4f"
  },
  {
    "url": "assets/js/27.4dbe6d9b.js",
    "revision": "42d2911e44e44dbeb4f46ee782dfd08a"
  },
  {
    "url": "assets/js/270.b96cc168.js",
    "revision": "de9b84b94a78a2b1154035d1ab406796"
  },
  {
    "url": "assets/js/271.13031df7.js",
    "revision": "d6664cd9f5fb5a6c8c8b611fe27d795d"
  },
  {
    "url": "assets/js/272.461b7123.js",
    "revision": "cf9248240d7a56e8932d225881da407e"
  },
  {
    "url": "assets/js/273.3f13aab5.js",
    "revision": "214708b33a60eceeaeed2829f39e402f"
  },
  {
    "url": "assets/js/274.4998eeb9.js",
    "revision": "e81dacaff36333f5429f1f6c4ea4cdb5"
  },
  {
    "url": "assets/js/275.afb3444f.js",
    "revision": "74487809ad28166a762e9a011709d08b"
  },
  {
    "url": "assets/js/276.1bd6217b.js",
    "revision": "27dd3c7864694a10dfc79235bae1c376"
  },
  {
    "url": "assets/js/277.1c6127ab.js",
    "revision": "2371e334d929a1aab94f023099b6d706"
  },
  {
    "url": "assets/js/278.c42a075c.js",
    "revision": "7b78ae57fa2d0b1b136dedb87298fc63"
  },
  {
    "url": "assets/js/279.20805f1c.js",
    "revision": "3b37e8070d1f0d05e52dbaa93c19dc3f"
  },
  {
    "url": "assets/js/28.e18ee082.js",
    "revision": "34005919d91bbe95ba32842ae55335b5"
  },
  {
    "url": "assets/js/280.a1be0ee5.js",
    "revision": "3542189579e61827c72425f3e9dfb930"
  },
  {
    "url": "assets/js/281.cb3383e8.js",
    "revision": "5d885c8a84485c752d696ab4793d82be"
  },
  {
    "url": "assets/js/282.43ce01f0.js",
    "revision": "c8942c4bf47c29117442be56d6d774ed"
  },
  {
    "url": "assets/js/283.585525de.js",
    "revision": "08a57cea058046a4d9747dddebb3d04e"
  },
  {
    "url": "assets/js/284.76b4bc57.js",
    "revision": "7aaca21e0bb278fb238c78eb8c5f01d4"
  },
  {
    "url": "assets/js/285.64b24024.js",
    "revision": "6d70b06199efe0071cd5adb0653cd1e8"
  },
  {
    "url": "assets/js/286.3a138203.js",
    "revision": "620714943a66a6684240aa64d821c983"
  },
  {
    "url": "assets/js/287.7a81a7de.js",
    "revision": "9abaa14b23295021fc9b81db7c29b75b"
  },
  {
    "url": "assets/js/288.6f9c0355.js",
    "revision": "10be28125f894f96cad89a288295c8a4"
  },
  {
    "url": "assets/js/289.b7132016.js",
    "revision": "b9db38fff38674e3a4fbe0914129deae"
  },
  {
    "url": "assets/js/29.5de25280.js",
    "revision": "1b35dd79c3b0124528aad322c2969d58"
  },
  {
    "url": "assets/js/290.c9788edd.js",
    "revision": "c2c2165ddafc1f4c22665e29dd30b84a"
  },
  {
    "url": "assets/js/291.62c3805e.js",
    "revision": "68db7769e8cd8fb5594b8db49f50d2ad"
  },
  {
    "url": "assets/js/292.d5aadd0a.js",
    "revision": "60861bb86f2bf367ef0e835b902397ae"
  },
  {
    "url": "assets/js/293.c1bf85a5.js",
    "revision": "bf950f2d3ca0fe0b41bd6e88c122dee3"
  },
  {
    "url": "assets/js/294.5752a9bb.js",
    "revision": "0eabcaecdd930bfd73996d9cbb1e38b2"
  },
  {
    "url": "assets/js/295.719ea88f.js",
    "revision": "da5254c7c67faea861fa945f4c97a42b"
  },
  {
    "url": "assets/js/296.86900171.js",
    "revision": "bb618119e4afc1037329ead5b77b0f86"
  },
  {
    "url": "assets/js/297.7eec6c4c.js",
    "revision": "25c4f0afea3131a760e553400476aadd"
  },
  {
    "url": "assets/js/298.f6b2fd32.js",
    "revision": "df000239b0f303b9cc3490dad15f2672"
  },
  {
    "url": "assets/js/299.5d9d3e25.js",
    "revision": "8e8394f293fb8845478c7beda5674a6c"
  },
  {
    "url": "assets/js/3.ddcee77c.js",
    "revision": "e7fc0f8d01d548e5c81b34dc590c119a"
  },
  {
    "url": "assets/js/30.df842c8f.js",
    "revision": "a21c5f4f49fa6b33f88976beea7efbde"
  },
  {
    "url": "assets/js/300.22b8da42.js",
    "revision": "fa849590d50dbd49439b34e07872108e"
  },
  {
    "url": "assets/js/301.0e11bc77.js",
    "revision": "5401cf8257dcc4a14a36984d1b0e8ba9"
  },
  {
    "url": "assets/js/302.efb4e783.js",
    "revision": "9adee5d6b34d291d0f073c65fc7ab0a1"
  },
  {
    "url": "assets/js/303.3530f547.js",
    "revision": "16578e115c5ec6051d2aeb75c772b6ce"
  },
  {
    "url": "assets/js/304.0121ac08.js",
    "revision": "8a93defaea40995476abc611d81cee9b"
  },
  {
    "url": "assets/js/305.6ac1fb97.js",
    "revision": "ee2adaaa2f7183a7ac7f604058e7a681"
  },
  {
    "url": "assets/js/306.637392c5.js",
    "revision": "bb605c28a33f17533af8de6af3d54022"
  },
  {
    "url": "assets/js/307.e3d4f977.js",
    "revision": "7c61204fe3df92a3a62f85ff1b9948ee"
  },
  {
    "url": "assets/js/308.e4b2c8aa.js",
    "revision": "5a48398be6050e03ded0c7c6071a9659"
  },
  {
    "url": "assets/js/309.2c12a4ff.js",
    "revision": "696cc92a5a91764511989d8078cccd19"
  },
  {
    "url": "assets/js/31.5dc4d61d.js",
    "revision": "e4e36fb91f48e3b986a3cfbf21babe8a"
  },
  {
    "url": "assets/js/310.a5a40518.js",
    "revision": "565f26e49111529baf7b5a8a13254035"
  },
  {
    "url": "assets/js/311.8a25a8d0.js",
    "revision": "9de4f859c50c0977a085fa3b4a93e7fe"
  },
  {
    "url": "assets/js/312.6099d444.js",
    "revision": "882e498d1598e03f04ee81a935f593f4"
  },
  {
    "url": "assets/js/313.3658df42.js",
    "revision": "babae8fb1a29b4cf97118d663fddb6de"
  },
  {
    "url": "assets/js/314.692020f6.js",
    "revision": "c98cf41146b2eb07d215ddf1c6017d19"
  },
  {
    "url": "assets/js/315.14b5cf0f.js",
    "revision": "92c98f2ac6a7f8457d5487e6e4a0b960"
  },
  {
    "url": "assets/js/316.be61993a.js",
    "revision": "0f0eac89675ddbdb5d0f37d439062821"
  },
  {
    "url": "assets/js/317.80d65d01.js",
    "revision": "af37c8afa5bd984ad9b1768a3b9e8ea4"
  },
  {
    "url": "assets/js/318.4523b53a.js",
    "revision": "95c5dccd28f9036c3bf77274bcace1c5"
  },
  {
    "url": "assets/js/319.1fa694ab.js",
    "revision": "7b99cb6263e5a116fdbcf9996cdecf5c"
  },
  {
    "url": "assets/js/32.aeaf4cfe.js",
    "revision": "cb880c72f64355c35e5ac0b03f2f82e6"
  },
  {
    "url": "assets/js/320.20e90745.js",
    "revision": "630275aed6fd187c7b7c8a9f8bbd9059"
  },
  {
    "url": "assets/js/321.8efffee5.js",
    "revision": "1288f3cd7753f16027379aed61cec08b"
  },
  {
    "url": "assets/js/322.b8152af3.js",
    "revision": "923bbbd22f057aa3bb26458444726957"
  },
  {
    "url": "assets/js/323.2a8e4077.js",
    "revision": "d8ea10d109b9f780ac15bd10346baff5"
  },
  {
    "url": "assets/js/324.37041c44.js",
    "revision": "1557713ddae5ec46712ce999b345ee35"
  },
  {
    "url": "assets/js/325.49e31265.js",
    "revision": "30ccb08fb2155f297d9c1cc31d43c6ec"
  },
  {
    "url": "assets/js/326.8d9198da.js",
    "revision": "7bdbea8a28b65c0fe88b9401b1f63bf8"
  },
  {
    "url": "assets/js/327.d565a148.js",
    "revision": "cbb45fc9912d7252f01b5c20beb98542"
  },
  {
    "url": "assets/js/328.d43145a5.js",
    "revision": "194260c892a8cd62fc008fa203dc26b1"
  },
  {
    "url": "assets/js/329.eecd76de.js",
    "revision": "f9b77ee23de885afdef4f6c0be71efb9"
  },
  {
    "url": "assets/js/33.a2436aaf.js",
    "revision": "f0ee093ccc6555a406ec7048b90128e6"
  },
  {
    "url": "assets/js/330.0aa72121.js",
    "revision": "529570568aeaea4566aeb240d5f328d5"
  },
  {
    "url": "assets/js/331.dafc408a.js",
    "revision": "9518b6cc31d135e6a61de88a349e3ee5"
  },
  {
    "url": "assets/js/332.61174b2a.js",
    "revision": "5a4ff5e20e4a7fdee457acc3e8628a37"
  },
  {
    "url": "assets/js/333.6b8e88b3.js",
    "revision": "4b40ed6fe0a6b7b5346e12e301e5c983"
  },
  {
    "url": "assets/js/334.8775e1c0.js",
    "revision": "a136d887c2b40815b20b3ffd2d5c25ec"
  },
  {
    "url": "assets/js/335.f16a165c.js",
    "revision": "e8fa84cf274cbcc38b175c8bebf4fdec"
  },
  {
    "url": "assets/js/336.3c64e134.js",
    "revision": "3cec17fcc38f6ccec2017af7e30e9504"
  },
  {
    "url": "assets/js/337.76455f24.js",
    "revision": "a9a066623d895fc8bac284a56623116f"
  },
  {
    "url": "assets/js/338.d7060fc6.js",
    "revision": "fcd5ad7b13926f3f63e40bbc59e4f826"
  },
  {
    "url": "assets/js/339.f794a33e.js",
    "revision": "9ffa22bfc28d301dfe0eef2229ec14cd"
  },
  {
    "url": "assets/js/34.218e28cf.js",
    "revision": "3b9aec4122f363734b469acd6ad946b3"
  },
  {
    "url": "assets/js/340.e5c3cea7.js",
    "revision": "9aab280f2e68224500698aa6db93effb"
  },
  {
    "url": "assets/js/341.baec67c4.js",
    "revision": "1f2b19215dcebc713e82521a8bdb5f87"
  },
  {
    "url": "assets/js/342.499ea2ac.js",
    "revision": "290ef33e901ed669ee04a901a08f4fbb"
  },
  {
    "url": "assets/js/343.1b7e80d9.js",
    "revision": "7ec32f9e578be5675f00dc015b22d0a1"
  },
  {
    "url": "assets/js/344.5a3b63ea.js",
    "revision": "282bd87cf4b7fd66795d76789c1c66b4"
  },
  {
    "url": "assets/js/345.29e98487.js",
    "revision": "1b874c1562a88e09e0363c0500b65155"
  },
  {
    "url": "assets/js/346.76324f72.js",
    "revision": "7ff32f0921f98b59ad41fb845d90faa3"
  },
  {
    "url": "assets/js/347.7735c47c.js",
    "revision": "d14bbc8cabdd48d25573e83d85b6fe06"
  },
  {
    "url": "assets/js/348.f8809df2.js",
    "revision": "158dc95a10c5462b73e94e3ae1d8540e"
  },
  {
    "url": "assets/js/349.faf2ddb5.js",
    "revision": "fadba26f7cc82a805bd9cc37ccb1f440"
  },
  {
    "url": "assets/js/35.cbf43961.js",
    "revision": "962113abe228b8af5374143c729cfb3f"
  },
  {
    "url": "assets/js/350.2ab3e4c3.js",
    "revision": "ee2e6d439a9b9f7772fa93fad509c2f0"
  },
  {
    "url": "assets/js/351.8dbf1525.js",
    "revision": "1fbc09970c10235e1bb331cabaf0113a"
  },
  {
    "url": "assets/js/352.7526f37c.js",
    "revision": "dbf913332a6eecc134eae2c6e6e303d5"
  },
  {
    "url": "assets/js/353.260a4cd7.js",
    "revision": "1455875b2283d8d4cf478c78b105a3e3"
  },
  {
    "url": "assets/js/354.d82ed9af.js",
    "revision": "8b0e1537bf46609994ec8384a09a12ef"
  },
  {
    "url": "assets/js/355.5488a027.js",
    "revision": "7ea74c9a5e05e64fde49eadc433feb3a"
  },
  {
    "url": "assets/js/356.ed27d6cb.js",
    "revision": "c2e80d886ac8836a3f565acdcb2aefd9"
  },
  {
    "url": "assets/js/357.c83b1482.js",
    "revision": "a9bfcd96070bbc1d1a9c6426fcc9063a"
  },
  {
    "url": "assets/js/358.af7d804b.js",
    "revision": "6136c21a30104da8013afe395eac1c9a"
  },
  {
    "url": "assets/js/359.14cf09c9.js",
    "revision": "bc629fe69dca695da2287217b59e6066"
  },
  {
    "url": "assets/js/36.57bf307d.js",
    "revision": "7add8c725537ba3320c3f75c201d5311"
  },
  {
    "url": "assets/js/360.e5c8715e.js",
    "revision": "b35b1ff0b2809294177a5a60e3b68e75"
  },
  {
    "url": "assets/js/361.5cdcf7e0.js",
    "revision": "93d79d07b3aeff182a882075fcdbdb43"
  },
  {
    "url": "assets/js/362.f37fd0c0.js",
    "revision": "ff597b1ee76eb2dd09b66d359efb188a"
  },
  {
    "url": "assets/js/363.fe683d75.js",
    "revision": "6693be4b323f33f3baf27d62a29239ad"
  },
  {
    "url": "assets/js/364.3542e765.js",
    "revision": "0fd83a5e88a73b59fa9e1d9b15ca8a46"
  },
  {
    "url": "assets/js/365.9e220da1.js",
    "revision": "dc9806d5f1ff582f33f4dda46e6921ad"
  },
  {
    "url": "assets/js/366.02d90408.js",
    "revision": "51fcdf12f2f521cf701779bab677aea4"
  },
  {
    "url": "assets/js/367.a7db95cc.js",
    "revision": "b3e7862c4d2ff50ba85e381b6ee30c91"
  },
  {
    "url": "assets/js/368.43f07ce3.js",
    "revision": "1ac7552e45d54c751a38e127f0d1dee3"
  },
  {
    "url": "assets/js/369.10f87487.js",
    "revision": "6c3a715babcdb6403a62e36fc53b7e58"
  },
  {
    "url": "assets/js/37.ae368d3f.js",
    "revision": "488d36354211239080a6491952b48d6b"
  },
  {
    "url": "assets/js/370.f3cb381d.js",
    "revision": "2edf47429d0ae212b6c38f160200b473"
  },
  {
    "url": "assets/js/371.d07da25b.js",
    "revision": "2dc02a0c64c74c692ad2bbba415778d7"
  },
  {
    "url": "assets/js/372.e14f9ef2.js",
    "revision": "57acada5f463e9bc7b22efab32126d0e"
  },
  {
    "url": "assets/js/373.babb8764.js",
    "revision": "a7bf4238a7c6831d92971f35ca5103a0"
  },
  {
    "url": "assets/js/374.ce82e647.js",
    "revision": "efad0f5fe61dd88bf6da74744f273499"
  },
  {
    "url": "assets/js/375.ff7bab23.js",
    "revision": "c20e7844cfc0c55d005b8d0c0df0c818"
  },
  {
    "url": "assets/js/376.e1de6e02.js",
    "revision": "3eb2e8cecf93ab3b1b339f7d3e3da323"
  },
  {
    "url": "assets/js/377.64d1f976.js",
    "revision": "877d0fb7669bb139567aeeb8b230cf41"
  },
  {
    "url": "assets/js/378.93c7ea69.js",
    "revision": "3a53466eddc66b7dd87cd9c601468f88"
  },
  {
    "url": "assets/js/379.4dd8115c.js",
    "revision": "14cf6f40923c0084570383cc6a240e32"
  },
  {
    "url": "assets/js/38.a422d943.js",
    "revision": "c9eafd9d9d023f9dcff8a34ca2e5b93a"
  },
  {
    "url": "assets/js/380.d3b26fbc.js",
    "revision": "d9431d76a42f4e4930bd3be6079713c3"
  },
  {
    "url": "assets/js/381.208c9e91.js",
    "revision": "b4c2a2ad860c196a9c15dbe5e427ec5c"
  },
  {
    "url": "assets/js/382.1a66f3ce.js",
    "revision": "25758b64bfb10dc7a0aee63d35e5bf29"
  },
  {
    "url": "assets/js/383.8bc2115a.js",
    "revision": "cd529c2c945195d53dc87afc4d72dd0e"
  },
  {
    "url": "assets/js/384.116874e8.js",
    "revision": "b503fe4f9da538badb54b220fd56f0e9"
  },
  {
    "url": "assets/js/385.e184fc6f.js",
    "revision": "828e5d4434a970162db7ca634aad7b80"
  },
  {
    "url": "assets/js/386.c0de7ac4.js",
    "revision": "a5747a5f3804591df0329da3766e4a70"
  },
  {
    "url": "assets/js/387.75dd8028.js",
    "revision": "dc887194359fd513edd2eb758d7f3f63"
  },
  {
    "url": "assets/js/388.6cd6aead.js",
    "revision": "2208544d738330d8111c98eb11ccc4fb"
  },
  {
    "url": "assets/js/389.0b1f8c9e.js",
    "revision": "372598ca762b9cd7a56483660c845011"
  },
  {
    "url": "assets/js/39.075d474a.js",
    "revision": "7dbdf2399bedfd8922ab81cc7ed8924c"
  },
  {
    "url": "assets/js/390.2a31c5dc.js",
    "revision": "079109b303b90374f025722b91c96c3d"
  },
  {
    "url": "assets/js/391.d45bb5ce.js",
    "revision": "e976e46c4e390702570c6bbcef9a1593"
  },
  {
    "url": "assets/js/392.ae38026a.js",
    "revision": "f32639f60f79013b04b1b6c3bd7a1dd0"
  },
  {
    "url": "assets/js/393.65bf0af3.js",
    "revision": "b2cee50137b7e87524341564925e84c6"
  },
  {
    "url": "assets/js/394.a6b6fb56.js",
    "revision": "04fc3cdf5d2df772190f886d64def23e"
  },
  {
    "url": "assets/js/395.18c668a6.js",
    "revision": "a6efdb2f73d938c3baefa6a0382bcada"
  },
  {
    "url": "assets/js/396.89b97942.js",
    "revision": "e34d40626f4ce49e2beb3fd345c6f603"
  },
  {
    "url": "assets/js/397.744e3a35.js",
    "revision": "6c5fd1fc81c0078983fac3bc55f08cdc"
  },
  {
    "url": "assets/js/398.75edef45.js",
    "revision": "f307c291d23568d0e9ff52cc333860a7"
  },
  {
    "url": "assets/js/399.1eaa3a0e.js",
    "revision": "e3a7b0642e8cc9b2a03e027167eb6ffb"
  },
  {
    "url": "assets/js/4.b1372804.js",
    "revision": "6a3bd0a2aa0211666ad5e408c38dea92"
  },
  {
    "url": "assets/js/40.02d6dcd8.js",
    "revision": "a4215f68fac8bc38279c48847d9a9242"
  },
  {
    "url": "assets/js/400.2702cba6.js",
    "revision": "a0d2dcada0945540ef767aeeb3871971"
  },
  {
    "url": "assets/js/401.9d56cb53.js",
    "revision": "0968c5fa3197af9a65c2a582c107bff5"
  },
  {
    "url": "assets/js/402.df1ef83b.js",
    "revision": "4e4afb166a9ab0ae1e42229b58eaeb79"
  },
  {
    "url": "assets/js/41.38f3dfd9.js",
    "revision": "5c5c732f89f0359839c4d560a428efc2"
  },
  {
    "url": "assets/js/42.a9556851.js",
    "revision": "c1e3b548d881e4e5132839eb94242d0e"
  },
  {
    "url": "assets/js/43.053c19e7.js",
    "revision": "5fdbdf0cb031d0d999ed904494e4d9cd"
  },
  {
    "url": "assets/js/44.5d8b11f4.js",
    "revision": "c7201d0c69784953b77da6f19eeca86a"
  },
  {
    "url": "assets/js/45.bc5ad395.js",
    "revision": "4507ed55641a81f9f769d094a4a14731"
  },
  {
    "url": "assets/js/46.c6e251ba.js",
    "revision": "bd2ba9473047fc35d5350453a3f8319f"
  },
  {
    "url": "assets/js/47.2399a425.js",
    "revision": "9469eb4cc77292cc138fcf3152585578"
  },
  {
    "url": "assets/js/48.07929a0c.js",
    "revision": "3ed56a4a828bcbd309718c5dcf7583bf"
  },
  {
    "url": "assets/js/49.d068bcea.js",
    "revision": "c4885bb92b0e9d857a1a4e9cef565547"
  },
  {
    "url": "assets/js/5.96e08f27.js",
    "revision": "2162a49a3f0c6fac5213122de0ea3dfb"
  },
  {
    "url": "assets/js/50.8dcb2188.js",
    "revision": "3d6cc4be05276178edcc17640f8a54d0"
  },
  {
    "url": "assets/js/51.bc88767f.js",
    "revision": "7f0d85604a2b4435454f380243879d5d"
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
    "url": "assets/js/56.4138ae24.js",
    "revision": "30dbdd04298883453be24d82e92a1890"
  },
  {
    "url": "assets/js/57.7d1a10c1.js",
    "revision": "8d3e924cf2f0ca134a255bc9696b0ab0"
  },
  {
    "url": "assets/js/58.66e60b5a.js",
    "revision": "e4700d19cd3311a9f135193cc2901eb0"
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
    "url": "assets/js/62.7cdf5dba.js",
    "revision": "80aa8e07ec1067b8351d99f99a71bf7b"
  },
  {
    "url": "assets/js/63.2cc4ae33.js",
    "revision": "88fdd640524e55c5503c885d3edf4a0f"
  },
  {
    "url": "assets/js/64.62bffc04.js",
    "revision": "549b58e66a7266d44de3c721836e66e1"
  },
  {
    "url": "assets/js/65.64117476.js",
    "revision": "42c1892388db95883ab6714f31ab991a"
  },
  {
    "url": "assets/js/66.3f808829.js",
    "revision": "6fb24f97234b8509cee606532609ee2f"
  },
  {
    "url": "assets/js/67.934b0fc5.js",
    "revision": "997740c97e30de1daea54ecb2c9aa145"
  },
  {
    "url": "assets/js/68.28f06b25.js",
    "revision": "7668a09416a874a088acc7eb444a75f9"
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
    "url": "assets/js/72.23a0e58b.js",
    "revision": "6512ad0d2ba323925d3fe505a8ade228"
  },
  {
    "url": "assets/js/73.4e9309c8.js",
    "revision": "341358ef097c56650dcff3359378d64d"
  },
  {
    "url": "assets/js/74.fef97ae8.js",
    "revision": "49512bdab67e7c3b68eb2d3222b20cdc"
  },
  {
    "url": "assets/js/75.2fcbd61b.js",
    "revision": "ecbdeeddc9a1b71b486c7b4cd4aab85a"
  },
  {
    "url": "assets/js/76.288a3e46.js",
    "revision": "99db64ea047423afd5b169066c4b07cd"
  },
  {
    "url": "assets/js/77.ba010e02.js",
    "revision": "f2625f630a250fd62c36f9856331ecfe"
  },
  {
    "url": "assets/js/78.ddd569f1.js",
    "revision": "d7ed4570993f882b7f090330faec4702"
  },
  {
    "url": "assets/js/79.d397e910.js",
    "revision": "e470f3f02aeae9343c3169f5feb8adda"
  },
  {
    "url": "assets/js/8.fc5dd4d1.js",
    "revision": "ada3e0fcd7c9635ed0ce898dad4cb8dc"
  },
  {
    "url": "assets/js/80.f81b865d.js",
    "revision": "b6fc0d5ba9e40272ac3a266242bd9140"
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
    "url": "assets/js/83.3cce012a.js",
    "revision": "4fbfb5b3ed91af8295acd5996bc19fd2"
  },
  {
    "url": "assets/js/84.2c3a8730.js",
    "revision": "91cc81a7553f3b7e855232ae1d40e5e2"
  },
  {
    "url": "assets/js/85.c0171591.js",
    "revision": "120b26c8ac0d2a3156b87ac1f428e82a"
  },
  {
    "url": "assets/js/86.bee2e56e.js",
    "revision": "6d492707997c81bc985f791d0de4d516"
  },
  {
    "url": "assets/js/87.18e84ac8.js",
    "revision": "777cb2cb3fab029bc0a20a3603221a9d"
  },
  {
    "url": "assets/js/88.5fa970e4.js",
    "revision": "ed493c3859065d0bab77a2ce49d45995"
  },
  {
    "url": "assets/js/89.eb94f076.js",
    "revision": "9950c8e764eef4e608002d086da2b49b"
  },
  {
    "url": "assets/js/9.9c2bedc6.js",
    "revision": "681552c73aa40827de683c8da6fe5271"
  },
  {
    "url": "assets/js/90.061b2143.js",
    "revision": "efbcf4c7dabefbfa80456c79a140a415"
  },
  {
    "url": "assets/js/91.c987bbce.js",
    "revision": "35c9dbc93aa8bc5f1dbf9d877d009c89"
  },
  {
    "url": "assets/js/92.0839728b.js",
    "revision": "a362eaba1ee99f5099dcf0c4bb1d7056"
  },
  {
    "url": "assets/js/93.4de36706.js",
    "revision": "eb06e793c55d9f150f0b7e10555c8635"
  },
  {
    "url": "assets/js/94.e4b1aae6.js",
    "revision": "ad9d3c1ce79e9292f2d73e0f837d9210"
  },
  {
    "url": "assets/js/95.226d2667.js",
    "revision": "4731056d0c0b9ffdac7f6a90d418efe0"
  },
  {
    "url": "assets/js/96.a2295a49.js",
    "revision": "2373bcd406a20d0a79081fcd38a9332f"
  },
  {
    "url": "assets/js/97.79f84fc3.js",
    "revision": "447d5e141668f4aa9f8a7d66b8d521fb"
  },
  {
    "url": "assets/js/98.00790181.js",
    "revision": "eba536902a8fd2c3ca4cdce99a5f2817"
  },
  {
    "url": "assets/js/99.7e6e6b6f.js",
    "revision": "df3112f7108953c8ffcdfb38aa0739d1"
  },
  {
    "url": "assets/js/app.55c57b7b.js",
    "revision": "fe954ec2ebb18966cd9c3ad4b24304de"
  },
  {
    "url": "assets/js/vendors~docsearch.0d470d63.js",
    "revision": "57840ca3eed4068b0de103c1e9a0d705"
  },
  {
    "url": "index.html",
    "revision": "b9161bfc3a25b573820b662a35b5f506"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "master/advanced/change-email-template.html",
    "revision": "dddfb37ce9095ab973bfd1902f86097b"
  },
  {
    "url": "master/advanced/create-data-import.html",
    "revision": "054702fde9b02ec4115a18aa4df6302a"
  },
  {
    "url": "master/advanced/create-payment-method.html",
    "revision": "a52351d87e1517de69497ece7a1687b6"
  },
  {
    "url": "master/advanced/create-product-type.html",
    "revision": "ddc84794c9d1264f8f37b420ec8bffce"
  },
  {
    "url": "master/advanced/create-shipping-method.html",
    "revision": "5150bcc5115855cfba9c6c777f86e8bb"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "dce1c961ae7354fb0cf8088056fe34c4"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "e3977e683e3ed82bc2955d50111a21c1"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "ba8d18a8ba53fde7485f70a941c09ab8"
  },
  {
    "url": "master/advanced/indexing-products-to-elasticsearch.html",
    "revision": "88ab75abad5406c8ba7e322ed72e27ce"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "bfc27ca5092a4ee0214c08044567084a"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "a75468881a6e3cbe2617f1e8878698c0"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "98c1910b90f05787cd7db0c5227a5ade"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "fac1172926ad99000ae11af4fecc322f"
  },
  {
    "url": "master/api/index.html",
    "revision": "c57ae363cb7ac46ade0a635670973cfb"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "b24df02a38eb733ca796cc0a1583993e"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "4364cb9caa31a54497e7e53fbdcfc175"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "1e93528e00f779e601089f3b737ae367"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "249da88f7ab8585fe5d4501b56b025c9"
  },
  {
    "url": "master/architecture/performance.html",
    "revision": "e6cc247e5acf42200e21dfa9b0b3b76b"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "57a2e5e223f12ce47064d65d163345fa"
  },
  {
    "url": "master/architecture/theme.html",
    "revision": "447d9d82d90e4faa333af1fe5bd9fc3a"
  },
  {
    "url": "master/deploy/index.html",
    "revision": "7918f61357d11ea7799ff2cfbcf71c20"
  },
  {
    "url": "master/introduction/docker.html",
    "revision": "2d7afcc6e9f986ca78c548688eab22b7"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "986a808c4260d2670d450e04ced0ebf5"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "d41ef3b8e28a12786eb234e963589ea2"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "848b6634008475603d10d4f480209eb0"
  },
  {
    "url": "master/introduction/sail.html",
    "revision": "48695784ae6f1b19a93b5f04aeb5c8d4"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "016e36d40d86e0a552da9d68428064a8"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "7c07f68ca6358372f84ae524385c07e7"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "9a128042b0217d5706987334d3898e89"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "f4552af7e8d0ce6581c0e57e380322e0"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "a16746d82b5dcfd4711217d092f4a448"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "6d67b45755acb3a9d1eae3f5191b4d96"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "79321171e25f26a7854e606b75c3331d"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "08f78217fcab6edfce0acb2231fa159c"
  },
  {
    "url": "master/packages/create-system-configuration.html",
    "revision": "8ad32b4068cfba67cb7f29ecfefa00a1"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "bdda3588aadb38f15e6e83eec17bd3b4"
  },
  {
    "url": "master/packages/index.html",
    "revision": "d7c46d49d513d3ff866d3663f55de356"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "55735771c50af68c93c7e1fc29027b17"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "de13c3632967cf0b55b87cf58b196785"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "e27446a8d0d4f143448ff3d1f36bb83b"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "1de8bcdc37a3dd8460983f4a3dfe6117"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "2bb03097dc0ae338780f52c33b158f8a"
  },
  {
    "url": "master/packages/views.html",
    "revision": "879b93be2d6de44328b40ae2c62d7f3b"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "da634840f5bc87ada8ed0a7df997b7f7"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "2532a255373a7df68a475fde6d29a596"
  },
  {
    "url": "master/prologue/upgrade-guide.html",
    "revision": "f2c0c5d8694e1e4138a2635b5d289f78"
  },
  {
    "url": "master/themes/create-admin-theme.html",
    "revision": "a1e6707a36d21008527e3b20252db8b7"
  },
  {
    "url": "master/themes/create-store-theme.html",
    "revision": "97419afcdfca02c1ea723c9df35b6931"
  },
  {
    "url": "master/themes/index.html",
    "revision": "c51037c03420560835053acb23e61027"
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

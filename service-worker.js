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
    "revision": "89f0fc71de8c30e5e3f3ad7bb22e9f6f"
  },
  {
    "url": "1.5.x/advanced/create-payment-method.html",
    "revision": "a117ac708abeeef80ba9afb653276e5f"
  },
  {
    "url": "1.5.x/advanced/create-product-type.html",
    "revision": "12de3dcb0963e841c86b9c897170632a"
  },
  {
    "url": "1.5.x/advanced/create-shipping-method.html",
    "revision": "95729f12245626d75387979f797e2629"
  },
  {
    "url": "1.5.x/advanced/events.html",
    "revision": "3cd2f2ea8aa7d228aff087a58333ef06"
  },
  {
    "url": "1.5.x/advanced/helpers.html",
    "revision": "13ea1815e8a05823f308b8a597512534"
  },
  {
    "url": "1.5.x/advanced/index.html",
    "revision": "7c0718a16bfde474cd33df08d8b77d79"
  },
  {
    "url": "1.5.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "ae4aca0854d7c2fb14f965c9d6404a9a"
  },
  {
    "url": "1.5.x/advanced/override-core-model.html",
    "revision": "a32b1357890feca52f74a36232ee9bc3"
  },
  {
    "url": "1.5.x/advanced/render-event.html",
    "revision": "13d2231999e020c3233dcbcc48129c06"
  },
  {
    "url": "1.5.x/advanced/security-practice.html",
    "revision": "d34c829e12dea1d89fa17850c37145eb"
  },
  {
    "url": "1.5.x/architecture/frontend.html",
    "revision": "84b0b92cb41ec7e738cc54321611aa65"
  },
  {
    "url": "1.5.x/architecture/index.html",
    "revision": "5844061f676fce0ed873bc9234ee12ec"
  },
  {
    "url": "1.5.x/architecture/modular-design.html",
    "revision": "553a5d350e80611b93ac9a056b8803f9"
  },
  {
    "url": "1.5.x/architecture/packages.html",
    "revision": "e31487cdf1ef3317a32c7d8b0e543b71"
  },
  {
    "url": "1.5.x/architecture/performance.html",
    "revision": "d23d611d90d6a27baf0b7ada656d17e1"
  },
  {
    "url": "1.5.x/architecture/repository-pattern.html",
    "revision": "2707a0d8ce7ae49cde92200442ab97d9"
  },
  {
    "url": "1.5.x/architecture/theme.html",
    "revision": "9998ab573bb8e86a433b36ea4843c710"
  },
  {
    "url": "1.5.x/deploy/index.html",
    "revision": "223ea59e1ff46164bef9e709c7a7713c"
  },
  {
    "url": "1.5.x/introduction/docker.html",
    "revision": "3ae15dd120bd5e261923fa8f7dcd32cc"
  },
  {
    "url": "1.5.x/introduction/index.html",
    "revision": "413675973dbfef71382a8e334fadccf6"
  },
  {
    "url": "1.5.x/introduction/installation.html",
    "revision": "a1fe60c9fcb2cf9cda96f97616e25758"
  },
  {
    "url": "1.5.x/introduction/requirements.html",
    "revision": "19486d013e7932f8dd5005b32eac3a14"
  },
  {
    "url": "1.5.x/packages/add-menu-in-admin.html",
    "revision": "01487814bb6e75b613ff0d35ed5db080"
  },
  {
    "url": "1.5.x/packages/assets.html",
    "revision": "e346220acf30430fa554d4be4e396e74"
  },
  {
    "url": "1.5.x/packages/controllers.html",
    "revision": "76f9c259c3bdb56dbb41cf4e275745ac"
  },
  {
    "url": "1.5.x/packages/create-acl.html",
    "revision": "0e62300685aac0318452ba51f08ffe54"
  },
  {
    "url": "1.5.x/packages/create-custom-configuration.html",
    "revision": "bc4c487ac1ed14f957085b9a817d106b"
  },
  {
    "url": "1.5.x/packages/create-migrations.html",
    "revision": "738a1170bc4d9aeea396c5e5f227384b"
  },
  {
    "url": "1.5.x/packages/create-models.html",
    "revision": "0d2e8a7ff2d6694d94efa3e34bc24256"
  },
  {
    "url": "1.5.x/packages/create-package.html",
    "revision": "f1ad3cb5abfc46d3d8bb359c249b211f"
  },
  {
    "url": "1.5.x/packages/customize-hompepage-menu.html",
    "revision": "4c059ce082f3d881271044fdfd6b0b8f"
  },
  {
    "url": "1.5.x/packages/datagrid.html",
    "revision": "ff228024f80c6bd9f0979fa3bda4d7f6"
  },
  {
    "url": "1.5.x/packages/index.html",
    "revision": "3aa810d6a0b10ec9bea02557b7628002"
  },
  {
    "url": "1.5.x/packages/layouts.html",
    "revision": "9b37a55482d79519cb42e1428d22de7a"
  },
  {
    "url": "1.5.x/packages/localization.html",
    "revision": "777ca9f12b41c818e39bad6d35de08b2"
  },
  {
    "url": "1.5.x/packages/routes.html",
    "revision": "536e681188d84f406a108868806082e7"
  },
  {
    "url": "1.5.x/packages/store-data-through-repositories.html",
    "revision": "a53385e20a5cfd6289e5db8d44243c0a"
  },
  {
    "url": "1.5.x/packages/validation.html",
    "revision": "085e6b9927fa0e6cfda84d79a8b55b34"
  },
  {
    "url": "1.5.x/packages/views.html",
    "revision": "ab7f029dcd95b24fb34ff26bb60a7e97"
  },
  {
    "url": "1.5.x/prologue/contribution-guide.html",
    "revision": "6f9d35c633e69f298e3f702acd95e4e4"
  },
  {
    "url": "1.5.x/prologue/index.html",
    "revision": "ef4d92dd7c2bd97adf813ee35921648a"
  },
  {
    "url": "1.5.x/prologue/upgrade-guide.html",
    "revision": "0a697e2864e89e3c52fb8bdf9bb38352"
  },
  {
    "url": "1.5.x/themes/create-admin-theme.html",
    "revision": "f96c3fa27e4e076fa32674c04439ed86"
  },
  {
    "url": "1.5.x/themes/create-theme.html",
    "revision": "6637831ab2be87166f948e4ed5121ed6"
  },
  {
    "url": "1.5.x/themes/index.html",
    "revision": "e36a72f40ea3cba5bb467cfedfd060f0"
  },
  {
    "url": "1.5.x/themes/integrate-image-search-in-theme.html",
    "revision": "e4c9371bf869e8bece338afcbd2fb889"
  },
  {
    "url": "1.5.x/themes/notification.html",
    "revision": "f8a943e66263891ca6c1c382741db6e0"
  },
  {
    "url": "1.x/admin-theme/index.html",
    "revision": "ca0b52e30eda43556a96c510e47c98be"
  },
  {
    "url": "1.x/admin-theme/notification.html",
    "revision": "e839a1bc0252d2da9dd3d487b0889433"
  },
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "0ac35bc2a7b511ef3c5658980b0153f6"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "0b91be3eb6075d08bd6728b80b6b324b"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "e3bf233247fcd93937c3f71faaef7a87"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "1b67d231fd0cfc412f881119d4a543b4"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "fbbec2c7dc90f182bb05c84e2efbcd3f"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "03038fe6f121957b26802da1a223f340"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "92a626d6c2c9a7761bfdeb60f66e3412"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "c62422855f1bfc2fe158545ef0f584cf"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "532a1638aabd3db8e140ec81fd92392d"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a310f34d99230b098b9815ca6ffff731"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "011a64bde705215c1f0aac4d05d90cbb"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "a16a599e93558c6d5a5675a889c3a376"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "1b191101dd7eee7b703e6fceedeec0c9"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "2a2c09a5fc2f29df789361ab6357629e"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "76bcf247b8268df1aa85d0ec33d48ded"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "1b74da6e8aa3410ae9ad7d63a85d18b2"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "c02231188be0f1532be2c8a5f9ad03b6"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "6b2b73dd3fc67de9ba1a467f0aec93f1"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "7f2ddd270eed10784aa54e5600ac00e9"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "0ff6901ef2b76e327d523ed22c39ae59"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a3305d1b6ddcfb2412243ae5179095de"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "cd44f2d084b5b53177f56439755fcaa0"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "24961e5d1969295275d978cd7e246ff5"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "9e832057e51ebf3ebc256ee0fcd9acac"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "ea4ece052141daec893689897aef78b9"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "11e8147cf9f4bba09735f5a252f4de7d"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "dc6f7d07ad2ff1ea6a32e692b2b4941e"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "75e1322c7504f7a4648cdf11e21bd232"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "666a9d2e9a6603fb97132dc172b0ef38"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-families.html",
    "revision": "4623d881126eecb29dadfd0d02b0320b"
  },
  {
    "url": "1.x/graphql-admin-api/attribute-groups.html",
    "revision": "835a9b63f0cbf74a2946abe8bb779a2c"
  },
  {
    "url": "1.x/graphql-admin-api/attributes.html",
    "revision": "02d7af1605485d51070b042895f87aa9"
  },
  {
    "url": "1.x/graphql-admin-api/categories.html",
    "revision": "524aa33a1d4a672e393533a80e73d156"
  },
  {
    "url": "1.x/graphql-admin-api/cms.html",
    "revision": "086a43b64eb2782751a01ff2c6d2bb01"
  },
  {
    "url": "1.x/graphql-admin-api/customers.html",
    "revision": "e6e05c0fbc57e7d84fb3a82d5a8b749f"
  },
  {
    "url": "1.x/graphql-admin-api/explanation.html",
    "revision": "e5eace371acf79581798a019e463a422"
  },
  {
    "url": "1.x/graphql-admin-api/getting-started-with-the-api.html",
    "revision": "0d3e36f44b830eb12e3e6cee5f037e57"
  },
  {
    "url": "1.x/graphql-admin-api/index.html",
    "revision": "7f57c0224b77c9c925dd645ec703a80e"
  },
  {
    "url": "1.x/graphql-admin-api/installation.html",
    "revision": "5aa92f43d65f38fb95e4dbe57a7b7198"
  },
  {
    "url": "1.x/graphql-admin-api/products.html",
    "revision": "db5e490a074e5941c052ef44ec462c2d"
  },
  {
    "url": "1.x/graphql-admin-api/promotions.html",
    "revision": "0d6edadbe551571670a6d07cfca28fee"
  },
  {
    "url": "1.x/graphql-admin-api/sales.html",
    "revision": "e95537e4d77e64f8555d5d5b739e4d84"
  },
  {
    "url": "1.x/graphql-admin-api/settings.html",
    "revision": "f01dc509f16971ee6ef815de8d9cb349"
  },
  {
    "url": "1.x/graphql-admin-api/velocity.html",
    "revision": "c5af0a7db6b125cb6528e062b5a860f9"
  },
  {
    "url": "1.x/graphql-shop-api/addresses.html",
    "revision": "2d946e17897df71c1c7a0faf461ae14f"
  },
  {
    "url": "1.x/graphql-shop-api/cart.html",
    "revision": "8314c107d2ac4b6b67e602d0c46f3cf6"
  },
  {
    "url": "1.x/graphql-shop-api/checkout.html",
    "revision": "174f884c4aabe5cea9243dac9010a5fb"
  },
  {
    "url": "1.x/graphql-shop-api/compare.html",
    "revision": "2163c5664d94b6d9206893c38255a8dc"
  },
  {
    "url": "1.x/graphql-shop-api/downloadable-links.html",
    "revision": "a1e3a88d59453ada077c2f6b6cc02d51"
  },
  {
    "url": "1.x/graphql-shop-api/getting-started-with-the-api.html",
    "revision": "ee53e48157c308d6eccedf3659bbc55e"
  },
  {
    "url": "1.x/graphql-shop-api/homepage.html",
    "revision": "00acd66d36db3ba14690ff6b7a25caea"
  },
  {
    "url": "1.x/graphql-shop-api/index.html",
    "revision": "83b97936429da85ece730ebd9897415d"
  },
  {
    "url": "1.x/graphql-shop-api/orders.html",
    "revision": "469b847c1dd68e7559a907e07e034f0d"
  },
  {
    "url": "1.x/graphql-shop-api/reviews.html",
    "revision": "ca27f954c9c5500bf890396a1ea5b4e7"
  },
  {
    "url": "1.x/graphql-shop-api/wishlists.html",
    "revision": "f2f8d4826a1c00c837e5a168f37e1d13"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "c1fe394bc07d7460d88b46722b081079"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "84f1a8ea7e0c738d58aa8de6a406c82c"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "1bc0d6da52721b2a7fe6b7384d4b56a8"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "850a693bcec6752e6061659b0ec82abd"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "406e541fd250aa5359bbb39c1634f724"
  },
  {
    "url": "1.x/packages/add-menu-in-admin.html",
    "revision": "e6eec352d06c453a70e93181184b7069"
  },
  {
    "url": "1.x/packages/create-acl.html",
    "revision": "bec5181bd9fb4f894ef88b82740996fd"
  },
  {
    "url": "1.x/packages/create-custom-configuration.html",
    "revision": "58bec6f635b6bf1d85ad545a79610052"
  },
  {
    "url": "1.x/packages/create-migrations.html",
    "revision": "62ad34c70ce7d970d86884c8b83d4e9a"
  },
  {
    "url": "1.x/packages/create-models.html",
    "revision": "62cf14eb6eb0b59ad33b6e6a5040a358"
  },
  {
    "url": "1.x/packages/create-package.html",
    "revision": "990903ae5d07bd92501b4a4a19d2de31"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "56ffb1c1e55673cf9b5e504099ac3409"
  },
  {
    "url": "1.x/packages/store-data-through-repositories.html",
    "revision": "97bf7ebbb56c08588d70cf4cccabaec5"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "8465960e4edc5e1be9a5da8072221c4a"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "f2d26db6b4cb41df445774408419d371"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "d064e28657a903b18bcc9bfb40c680c9"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "c4ff1b4742e880ea6e862ea60ca2926c"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "85ddff18fc4fd395404c92afd54bd860"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "8d1dcd75b6a52c8d2bae35301345a943"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "61d4e6f7b233e809d6556665accc6c30"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "032809dec0a5537f79a7d372abe67f4f"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "2c18502c906f726b915ea4354dc75490"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "91d52f41f192a3321fa738a73dae952a"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "424f89855c7b9faa335acbd010aa9306"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "43ecf8d98a1bca11bbedfbcd985d0b40"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "301df4bfd04440a5a9b5bd83739af07a"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "c41a56ea5385ebad9777d33055c04b18"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "4b7c608047990935410f4e08179c3d04"
  },
  {
    "url": "2.x/advanced/change-email-template.html",
    "revision": "2561f606a57d146fc55be4812d3ccb60"
  },
  {
    "url": "2.x/advanced/create-payment-method.html",
    "revision": "045275511acec926ab602aebf38644d2"
  },
  {
    "url": "2.x/advanced/create-product-type.html",
    "revision": "93d7a73f702120290153fe031ce9fbcb"
  },
  {
    "url": "2.x/advanced/create-shipping-method.html",
    "revision": "a031194aa67f09402e865a35ecef17de"
  },
  {
    "url": "2.x/advanced/events.html",
    "revision": "ce91a3489454ebd9630964f3e162cf92"
  },
  {
    "url": "2.x/advanced/helpers.html",
    "revision": "9f2042758300d54082de49f022cda78e"
  },
  {
    "url": "2.x/advanced/index.html",
    "revision": "95b693e1d2650311f0f9a0aa65483b90"
  },
  {
    "url": "2.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "8b23533ea17f46205b8a583721239565"
  },
  {
    "url": "2.x/advanced/override-core-model.html",
    "revision": "dfa72717146b0e292d31337ad6534c2d"
  },
  {
    "url": "2.x/advanced/render-event.html",
    "revision": "4332b57445a84592ee52f109ad887740"
  },
  {
    "url": "2.x/advanced/security-practice.html",
    "revision": "39c4c67d1371e430e4623ae01d58ff48"
  },
  {
    "url": "2.x/api/getting-started-with-the-api.html",
    "revision": "98a543dc71c94fc3d73c1655246b238e"
  },
  {
    "url": "2.x/api/index.html",
    "revision": "cdedb2d2eb03b27f1f566aa922298837"
  },
  {
    "url": "2.x/architecture/frontend.html",
    "revision": "ae0123425cc361e30f8e4f94410c660e"
  },
  {
    "url": "2.x/architecture/index.html",
    "revision": "86c543fbb9266b4842e54a9243991f3a"
  },
  {
    "url": "2.x/architecture/modular-design.html",
    "revision": "a4331b620bc505e6eb224a842147ddc9"
  },
  {
    "url": "2.x/architecture/packages.html",
    "revision": "44069e7304d7ddaed0cf51df60a9672c"
  },
  {
    "url": "2.x/architecture/performance.html",
    "revision": "01479939f9459d82656759c5d399dd3a"
  },
  {
    "url": "2.x/architecture/repository-pattern.html",
    "revision": "af90a942a51454f7da91701a6b0dabc7"
  },
  {
    "url": "2.x/architecture/theme.html",
    "revision": "300011f8d07d9e11b9fa95cd4b3ee07f"
  },
  {
    "url": "2.x/deploy/index.html",
    "revision": "a5ae401138047c38a8e304c816a10e1a"
  },
  {
    "url": "2.x/features/index.html",
    "revision": "ccfebda429d1d20ed68edc80049f1f3d"
  },
  {
    "url": "2.x/features/integrate-image-search-in-theme.html",
    "revision": "d5704a4fcbfa92d1f283b46bae17d140"
  },
  {
    "url": "2.x/features/notification.html",
    "revision": "92f3d85f76c6d279f2bee82912df861a"
  },
  {
    "url": "2.x/introduction/docker.html",
    "revision": "3185237fd6b974f1b3a44e2be74db46f"
  },
  {
    "url": "2.x/introduction/index.html",
    "revision": "3e5059e8e9b8a95b4c565820a8e818c4"
  },
  {
    "url": "2.x/introduction/installation.html",
    "revision": "dbb1f3b620da75049dcf4a12a92d5329"
  },
  {
    "url": "2.x/introduction/requirements.html",
    "revision": "53417da98b9b4181c9ced767933c48ec"
  },
  {
    "url": "2.x/packages/add-menu-in-admin.html",
    "revision": "e0c9dc22e896dfe08b796831f8db86e8"
  },
  {
    "url": "2.x/packages/assets.html",
    "revision": "13d9f4942b05fd7ad40a854bc294ffbf"
  },
  {
    "url": "2.x/packages/blade-components.html",
    "revision": "46f597cfb9cf8f864d55203487ab6737"
  },
  {
    "url": "2.x/packages/controllers.html",
    "revision": "31496739c193faa5d0b6aa374bfaefc4"
  },
  {
    "url": "2.x/packages/create-acl.html",
    "revision": "bb9fe4b894a80f8a3210f95bcb83225d"
  },
  {
    "url": "2.x/packages/create-custom-configuration.html",
    "revision": "c3786f9fd74d890c3d2d61b6f2ebb83f"
  },
  {
    "url": "2.x/packages/create-data-import.html",
    "revision": "c263496c98a8d4f797088b3109060737"
  },
  {
    "url": "2.x/packages/create-migrations.html",
    "revision": "0cd73a10b9c19390809149555cddb746"
  },
  {
    "url": "2.x/packages/create-models.html",
    "revision": "c533daf76cd0df3d1a770509d9bfc05f"
  },
  {
    "url": "2.x/packages/create-package.html",
    "revision": "3764bccb695e630dcd9d7cb736e223de"
  },
  {
    "url": "2.x/packages/customize-hompepage-menu.html",
    "revision": "f492f14ad1c114b32dde84f9296842bf"
  },
  {
    "url": "2.x/packages/datagrid.html",
    "revision": "03b7463cff4f0388e28484d5195da167"
  },
  {
    "url": "2.x/packages/index.html",
    "revision": "ddfd8d7530fbff70355e15ac8e12939b"
  },
  {
    "url": "2.x/packages/layouts.html",
    "revision": "4eff685997cff2c3801f1c2ad73b5f74"
  },
  {
    "url": "2.x/packages/localization.html",
    "revision": "61f6db354c54a7e4d4995a0106e1ebcd"
  },
  {
    "url": "2.x/packages/routes.html",
    "revision": "472c2e181bbbacd673cf6f69f79d5010"
  },
  {
    "url": "2.x/packages/store-data-through-repositories.html",
    "revision": "19de3c8d5f46585ecc3d03fc52492313"
  },
  {
    "url": "2.x/packages/validation.html",
    "revision": "d233fbe8ea3040a32fa72911dcdbf7ca"
  },
  {
    "url": "2.x/packages/views.html",
    "revision": "4f7857441b97466754f2c7f073cc879d"
  },
  {
    "url": "2.x/prologue/contribution-guide.html",
    "revision": "d9c9e9f193305562bb47207c3e79b753"
  },
  {
    "url": "2.x/prologue/index.html",
    "revision": "0156593984a38a1548960a70432604b7"
  },
  {
    "url": "2.x/prologue/upgrade-guide.html",
    "revision": "57bd824fcde49a39c12c50fc1aaf846f"
  },
  {
    "url": "2.x/themes/create-admin-theme.html",
    "revision": "5b7366b352e4a7d505450fbfb521e456"
  },
  {
    "url": "2.x/themes/create-theme.html",
    "revision": "7f70045e95695d0b0e5f85d1ba08bb05"
  },
  {
    "url": "2.x/themes/index.html",
    "revision": "1a100ae079e3ec05f7d1c16e93aefee1"
  },
  {
    "url": "404.html",
    "revision": "6ed018bb1a69922857128ae35dee3f1c"
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
    "url": "assets/js/101.58e8b39c.js",
    "revision": "cff6a71922da026c11bc6970f14b5a51"
  },
  {
    "url": "assets/js/102.094bf9ff.js",
    "revision": "cbb393a139d6f6124ffb28d370868b33"
  },
  {
    "url": "assets/js/103.abf4dd35.js",
    "revision": "b966a346669eacf3962af089aea9ba9c"
  },
  {
    "url": "assets/js/104.6ad45901.js",
    "revision": "9cc7268a655061f188f05649602d3871"
  },
  {
    "url": "assets/js/105.07cf108e.js",
    "revision": "2634f98b3842fa4b97ba6672c7ed422c"
  },
  {
    "url": "assets/js/106.013cdec9.js",
    "revision": "e7f65dcf0e62eea83e4dd45ea698ce01"
  },
  {
    "url": "assets/js/107.7fdf0eb5.js",
    "revision": "8059234227a723795c56f49d8009c1bb"
  },
  {
    "url": "assets/js/108.dbbab42a.js",
    "revision": "22a8ce772aa891d13d00f1310a24b9ec"
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
    "url": "assets/js/112.83373594.js",
    "revision": "60b918ca42c64226a9983c994f196dc4"
  },
  {
    "url": "assets/js/113.068d1636.js",
    "revision": "61762c1390141fd6fee3a534281e306c"
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
    "url": "assets/js/116.f2c6e75f.js",
    "revision": "e141fc694e1c33b4b20fa4c1cf29ae4c"
  },
  {
    "url": "assets/js/117.c4b5f0d7.js",
    "revision": "2dfa07e98aa2917cbf49f3106be69fd8"
  },
  {
    "url": "assets/js/118.0b6b2c74.js",
    "revision": "208f92a202f6ae672374c34620abf1be"
  },
  {
    "url": "assets/js/119.bbd9894c.js",
    "revision": "29b6eebface9d7a1125ec1f528a1e050"
  },
  {
    "url": "assets/js/12.20029f38.js",
    "revision": "99d3523fd907ab63246343665007212c"
  },
  {
    "url": "assets/js/120.9d12c116.js",
    "revision": "4b3db0a52338d4a82e8ed882db1e6a18"
  },
  {
    "url": "assets/js/121.158404a1.js",
    "revision": "c21a727d9bea44871653bc880378c6b8"
  },
  {
    "url": "assets/js/122.9a437a83.js",
    "revision": "2520f4a5b1eb67f83ca56518497cf08e"
  },
  {
    "url": "assets/js/123.40188402.js",
    "revision": "a47574273070b43d83ba0b8b7e7a7099"
  },
  {
    "url": "assets/js/124.4492f39a.js",
    "revision": "c04c74147cfbbc25b66fae767a099aa8"
  },
  {
    "url": "assets/js/125.6d66bb5d.js",
    "revision": "eeae009675084453e0fadecdb6d74529"
  },
  {
    "url": "assets/js/126.d594e7c3.js",
    "revision": "7363290ad50660fc5a6f479a4c24ed2c"
  },
  {
    "url": "assets/js/127.02c30baa.js",
    "revision": "583f7e489d348bed442610f91dbbf75e"
  },
  {
    "url": "assets/js/128.817df207.js",
    "revision": "06b7c4287189f1baa08b6a22fbc08df0"
  },
  {
    "url": "assets/js/129.fe43b521.js",
    "revision": "75605fd35edd4f49cfde1ab2c6e0c7a5"
  },
  {
    "url": "assets/js/13.ac69c0d1.js",
    "revision": "4ae539735d44af18da4f74c4be8c0bc6"
  },
  {
    "url": "assets/js/130.615bd537.js",
    "revision": "9a586f23a2af8ebbb3c2df36d519d983"
  },
  {
    "url": "assets/js/131.8461d5d4.js",
    "revision": "09a47687d00585897eadf45a5444f6c9"
  },
  {
    "url": "assets/js/132.250529ba.js",
    "revision": "631e2d2e4aaefa7b583ccd9ea8928cdc"
  },
  {
    "url": "assets/js/133.06ec56ee.js",
    "revision": "6138cf41483519165f6b9d77d2d2926a"
  },
  {
    "url": "assets/js/134.c594a152.js",
    "revision": "bcd45b12b2628d3d738272c0441879bf"
  },
  {
    "url": "assets/js/135.80ff8f53.js",
    "revision": "694cf9ed02fb74474ad86cb4121d6395"
  },
  {
    "url": "assets/js/136.455ad817.js",
    "revision": "b04d432ee9dbbe1d8dd80696d081e674"
  },
  {
    "url": "assets/js/137.1de9f34d.js",
    "revision": "fa8da2a9c674e1d70fa2d357beeb278e"
  },
  {
    "url": "assets/js/138.cae04588.js",
    "revision": "54c6a0dbfb1d54d0958a2edc5fc5f5a0"
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
    "url": "assets/js/140.3d8225d5.js",
    "revision": "9b9e8319b6758f43bf18013b64778d8a"
  },
  {
    "url": "assets/js/141.2462d179.js",
    "revision": "860419606259c31d12ff867456e0dba4"
  },
  {
    "url": "assets/js/142.edbd60c2.js",
    "revision": "e4b9e53137f6888bb491e70cfd93918f"
  },
  {
    "url": "assets/js/143.aafd2950.js",
    "revision": "4778477efccb4a46c638487385cf00d3"
  },
  {
    "url": "assets/js/144.2ec65353.js",
    "revision": "e7979e5aba0dd77cb4e6d05082006871"
  },
  {
    "url": "assets/js/145.a02c138c.js",
    "revision": "1044941d69a378dc31df9b201b751624"
  },
  {
    "url": "assets/js/146.35a24558.js",
    "revision": "5257f9ccfd301a42af5d92d1e3c3ccf9"
  },
  {
    "url": "assets/js/147.a916799f.js",
    "revision": "3f650007f0dc19b8d7fdf51342abe88f"
  },
  {
    "url": "assets/js/148.c3e02814.js",
    "revision": "4c6d9b1381a0abbf1a024a895a522a12"
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
    "url": "assets/js/151.15b75046.js",
    "revision": "432d85e80acc7435c632ccf5722c03a6"
  },
  {
    "url": "assets/js/152.5bae47f4.js",
    "revision": "9adc514fbd660d26fde75542b2920009"
  },
  {
    "url": "assets/js/153.f32d2dc5.js",
    "revision": "ab48d5dd29aa6378ae78002b37c1969e"
  },
  {
    "url": "assets/js/154.c29249fe.js",
    "revision": "bbce7a4159e9a076c7d41a1b867adc4e"
  },
  {
    "url": "assets/js/155.4d5abeec.js",
    "revision": "bcf09e75b1d672aeaaff697407d4579a"
  },
  {
    "url": "assets/js/156.7b7c16d2.js",
    "revision": "34d755b561ff041474b0a99d624c3ec3"
  },
  {
    "url": "assets/js/157.2c6116c8.js",
    "revision": "12a81226863306daa4bee942e570a817"
  },
  {
    "url": "assets/js/158.a3431a2b.js",
    "revision": "b86ec42827688502f38080e8550f239e"
  },
  {
    "url": "assets/js/159.560daa8c.js",
    "revision": "4a77f58f457c3b955da3b35424d84641"
  },
  {
    "url": "assets/js/16.a4b19f82.js",
    "revision": "7fd281fd11027a3f1e1a19162e07c83b"
  },
  {
    "url": "assets/js/160.44510a26.js",
    "revision": "b5b77d5709e6ef9c58c32e427903e012"
  },
  {
    "url": "assets/js/161.ac75d2b4.js",
    "revision": "da90fac006f6e7836ec5a346ccdec135"
  },
  {
    "url": "assets/js/162.6280a9ab.js",
    "revision": "54c374aaf70cbe3e40969e678a9893e4"
  },
  {
    "url": "assets/js/163.baf5e5b0.js",
    "revision": "0d1f974badae129aac6cc72cee0ccee3"
  },
  {
    "url": "assets/js/164.6dedea27.js",
    "revision": "20b8cf765419944835a376fe3b5d3820"
  },
  {
    "url": "assets/js/165.163a570b.js",
    "revision": "fdbf355f6e7311abb93eeac537997431"
  },
  {
    "url": "assets/js/166.8b3ac352.js",
    "revision": "7c919148af6b1c30372b55348fc28c75"
  },
  {
    "url": "assets/js/167.c3481781.js",
    "revision": "68adbbf3cf60ea525a5192929fbf65e1"
  },
  {
    "url": "assets/js/168.c6ecc9d2.js",
    "revision": "05352d08736bf11508ccbde97a74a75a"
  },
  {
    "url": "assets/js/169.827ecaff.js",
    "revision": "090e5fb068ff1c792a844575142d469b"
  },
  {
    "url": "assets/js/17.76164163.js",
    "revision": "3fa53ecb09953a139898a6c6dee84f4e"
  },
  {
    "url": "assets/js/170.a7190e3a.js",
    "revision": "86f2357950204048e37591088202a7b2"
  },
  {
    "url": "assets/js/171.18ca9679.js",
    "revision": "e0d58d6e27cc68addb5d7a2a1c99e80c"
  },
  {
    "url": "assets/js/172.22663b94.js",
    "revision": "e4f13338a4a8e48a70afd98bb3530465"
  },
  {
    "url": "assets/js/173.42596469.js",
    "revision": "7ded5e539b53a438d3844499061cabdf"
  },
  {
    "url": "assets/js/174.b9afc572.js",
    "revision": "11f253ca8a75a5ee0a4241d9a6bf7084"
  },
  {
    "url": "assets/js/175.feed8bf3.js",
    "revision": "43155a9d5a5d88cdd6f239a9bc88ed0c"
  },
  {
    "url": "assets/js/176.325d79f3.js",
    "revision": "b04b6aa5f8df025fdf923a2251d13ee6"
  },
  {
    "url": "assets/js/177.b3afc7d9.js",
    "revision": "9573cc39ff38ab20dbbce5ae8e53584f"
  },
  {
    "url": "assets/js/178.2a72136d.js",
    "revision": "2452dfc437ff098fdbff2deb3bf3a889"
  },
  {
    "url": "assets/js/179.d87202fd.js",
    "revision": "87480459a5d1dec5f2eb8301fd4ad197"
  },
  {
    "url": "assets/js/18.0c359fa4.js",
    "revision": "e6a6b169cd547a40ca8f0715777f98d7"
  },
  {
    "url": "assets/js/180.5ffbd623.js",
    "revision": "5a9364d057654747de5c17d466fa4cda"
  },
  {
    "url": "assets/js/181.55f50c6d.js",
    "revision": "55099ce138bf35d8a75ed366b01f0d33"
  },
  {
    "url": "assets/js/182.5511dbf0.js",
    "revision": "40d47694202c8d6d2f6f358784d30bc5"
  },
  {
    "url": "assets/js/183.6134a302.js",
    "revision": "49f54e1260375ab669a0f6af8c5b6a69"
  },
  {
    "url": "assets/js/184.bfc7102b.js",
    "revision": "398f7f3d2fcc6c9e73befca0b9d49f82"
  },
  {
    "url": "assets/js/185.5c197bea.js",
    "revision": "f21b005064f7724e59006e26c1f95e7a"
  },
  {
    "url": "assets/js/186.a787177c.js",
    "revision": "cdfd475238433a7fa6e77f37a475a07b"
  },
  {
    "url": "assets/js/187.6145a238.js",
    "revision": "33fe7111bc17d030a81c2fbaa4c50459"
  },
  {
    "url": "assets/js/188.0627331b.js",
    "revision": "aa39fa1018f6a84d40fba4ca812836b9"
  },
  {
    "url": "assets/js/189.b59163b4.js",
    "revision": "547cb90439c241c95d80f571d4641fee"
  },
  {
    "url": "assets/js/19.adf9b905.js",
    "revision": "db3407784a9143e05fce1d347d3bb5b9"
  },
  {
    "url": "assets/js/190.8e7ee790.js",
    "revision": "08e333d78a9529663fdd92d679601deb"
  },
  {
    "url": "assets/js/191.b57f1e51.js",
    "revision": "4049bd909ed42c3fa89938337fe86161"
  },
  {
    "url": "assets/js/192.6a7ffcd6.js",
    "revision": "b6efca2c04f27bf675cef7d91a9b2782"
  },
  {
    "url": "assets/js/193.2b681115.js",
    "revision": "b68eb3bfec52f7b22d35e31348282938"
  },
  {
    "url": "assets/js/194.8137e6f4.js",
    "revision": "a0f6dbbd3e968be35513fce953f6db08"
  },
  {
    "url": "assets/js/195.da136315.js",
    "revision": "53ae0b85a3dce5972f4f66223c46c5a7"
  },
  {
    "url": "assets/js/196.2bcf3fe5.js",
    "revision": "364bfdf166d45f12d2cfe41c110ebee2"
  },
  {
    "url": "assets/js/197.ccb45ac3.js",
    "revision": "60c8db55b1e274ab1f79ec1bc7cb0d84"
  },
  {
    "url": "assets/js/198.715462b3.js",
    "revision": "3656a393b4d5f9f3232d7435c1e30637"
  },
  {
    "url": "assets/js/199.b77e1af9.js",
    "revision": "54116876e5f0d5ddb8b5b67fb2acf55c"
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
    "url": "assets/js/200.61da63cf.js",
    "revision": "2a49521973bc39fea87745e626beff74"
  },
  {
    "url": "assets/js/201.5ca181ba.js",
    "revision": "c33224d4a3ede2b341dafaa4ed75fe27"
  },
  {
    "url": "assets/js/202.fe05721b.js",
    "revision": "4bbc99b911b8eae9466ddf6aef605c02"
  },
  {
    "url": "assets/js/203.3ccd8ccc.js",
    "revision": "270b7a7bf0cfdd90b307cc7c8d11e009"
  },
  {
    "url": "assets/js/204.ff977461.js",
    "revision": "d1d15c2ee5bbfe635153b18e31fe3ff7"
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
    "url": "assets/js/207.232e2dee.js",
    "revision": "99bfe20d5a391651b880dfa034b28e1d"
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
    "url": "assets/js/25.e53b8880.js",
    "revision": "ac008e05d6da9e9bbf848e75deb7db9e"
  },
  {
    "url": "assets/js/26.d0667780.js",
    "revision": "9d0164c3f5e9a59ddbb51353cb6b516d"
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
    "url": "assets/js/30.681e77c4.js",
    "revision": "cec8f17bb7afcef073e58c826575cc9c"
  },
  {
    "url": "assets/js/31.42dde086.js",
    "revision": "87c25f1f5d401b42ffd114221d92f48b"
  },
  {
    "url": "assets/js/32.cda49d2b.js",
    "revision": "77cda8477fad734eed78044dff1939ec"
  },
  {
    "url": "assets/js/33.4740da79.js",
    "revision": "6127dcc84725f1ac56c127cba7955973"
  },
  {
    "url": "assets/js/34.3ee4670d.js",
    "revision": "8502be157ab1dc94066f6aab1e4e24ce"
  },
  {
    "url": "assets/js/35.2e3262cd.js",
    "revision": "5bac3ebaa657a65d9d162f6ca1d8e11c"
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
    "url": "assets/js/38.876073b6.js",
    "revision": "ec73560423fb62ee1859b278a09f1382"
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
    "url": "assets/js/41.c6b69fe9.js",
    "revision": "7f8ab3fcff0f16bf8650705d6340e106"
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
    "url": "assets/js/44.6d1ef15a.js",
    "revision": "e195e621037c362ce4a7cba47d67e90b"
  },
  {
    "url": "assets/js/45.10e55dd5.js",
    "revision": "6a9c48d9bf2ed01a9df3222142587e42"
  },
  {
    "url": "assets/js/46.7bf317e8.js",
    "revision": "cca5946a43627f6b16b9d47e3c8b23bb"
  },
  {
    "url": "assets/js/47.7bb77cea.js",
    "revision": "c36c192027d9f99a037ce42867f6d563"
  },
  {
    "url": "assets/js/48.a28ae78b.js",
    "revision": "7811db80c192fd061918a3889a3c81cf"
  },
  {
    "url": "assets/js/49.faa346be.js",
    "revision": "8dbb4d2b73cfd6c2bc684b2016681c0d"
  },
  {
    "url": "assets/js/5.ef1926b9.js",
    "revision": "9b080f84114dc3bc552f574a78fdc52d"
  },
  {
    "url": "assets/js/50.8bab96c6.js",
    "revision": "54448b4b0e5b9fd365f0ad7694ca6582"
  },
  {
    "url": "assets/js/51.b359726f.js",
    "revision": "62ea9f821fc521e0a7a8d7ec0911476b"
  },
  {
    "url": "assets/js/52.15e21d67.js",
    "revision": "ef17f09546eda0f41a8661baa2282f01"
  },
  {
    "url": "assets/js/53.9d6bffb4.js",
    "revision": "6f47d83146316a006b53023d44df5614"
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
    "url": "assets/js/56.c65d8879.js",
    "revision": "b51c47bdc220dee6d9d0c71d243cd3ea"
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
    "url": "assets/js/62.d6d136ae.js",
    "revision": "f68d7d5c9926031a187d16bdda17d723"
  },
  {
    "url": "assets/js/63.a5a98586.js",
    "revision": "1afdb54dd342feb795268f41012a4b4f"
  },
  {
    "url": "assets/js/64.5daf5f71.js",
    "revision": "c1dbcb1a95d6138d37db65063bc92d56"
  },
  {
    "url": "assets/js/65.c72d5283.js",
    "revision": "f409200c27879ba9850c0810f46fac94"
  },
  {
    "url": "assets/js/66.a0e5066f.js",
    "revision": "872bf1a0b81f880022c1dc83de23891e"
  },
  {
    "url": "assets/js/67.a847601a.js",
    "revision": "a47e25939974949c6db19e39da20123a"
  },
  {
    "url": "assets/js/68.a395e9e3.js",
    "revision": "adf741065f2177ea33426e4fb7370007"
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
    "url": "assets/js/72.d400b9fd.js",
    "revision": "6830769cfc53382e7e2aa91ed65da62c"
  },
  {
    "url": "assets/js/73.49678976.js",
    "revision": "38c2d90254e0b9327a250bc66637ef77"
  },
  {
    "url": "assets/js/74.365ba9c7.js",
    "revision": "e3f33e3b94b147cf4eedad74688bd969"
  },
  {
    "url": "assets/js/75.9821ea9d.js",
    "revision": "778a16295e7ddb88e1199296208ce78c"
  },
  {
    "url": "assets/js/76.7c4f998d.js",
    "revision": "55d1bfff64e0dc7484a618d8435791d5"
  },
  {
    "url": "assets/js/77.e80153a7.js",
    "revision": "9cd8bffcd9ecad68de00382835f587df"
  },
  {
    "url": "assets/js/78.0da34dfe.js",
    "revision": "d5daaf43916dd063b597c9d95e43774a"
  },
  {
    "url": "assets/js/79.b515d01f.js",
    "revision": "24d89f53391c52270432d628097413e8"
  },
  {
    "url": "assets/js/8.1432828c.js",
    "revision": "7c313c64bcbfd5af6e24f63ea1131eaf"
  },
  {
    "url": "assets/js/80.8774d8ab.js",
    "revision": "c8f1af67fb1939472db1261bf9de2c6b"
  },
  {
    "url": "assets/js/81.f6d9361e.js",
    "revision": "a7c6d3992f36e33357d6715ee133dd63"
  },
  {
    "url": "assets/js/82.bf5c1b8c.js",
    "revision": "b9f1eab823f3a0654511ee0362f4e851"
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
    "url": "assets/js/85.eef83097.js",
    "revision": "1cfdc23b09e970c49b9c2b59c6b5bdc7"
  },
  {
    "url": "assets/js/86.73ccb4cb.js",
    "revision": "08346513472eebab2f38ffa59a96d216"
  },
  {
    "url": "assets/js/87.acaf6bb0.js",
    "revision": "4121a8f2d8b43c0b0cf6f336b84a9d35"
  },
  {
    "url": "assets/js/88.859d02b9.js",
    "revision": "70566b571bfad160ea06d5ce04908a21"
  },
  {
    "url": "assets/js/89.23a48a00.js",
    "revision": "798604d592b0ee3115971527e152f1b8"
  },
  {
    "url": "assets/js/9.d34443d1.js",
    "revision": "7c14095f83b01305140a2c3282b35194"
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
    "url": "assets/js/97.3545db70.js",
    "revision": "764f427900fff5eab2b11661add89d85"
  },
  {
    "url": "assets/js/98.0e001acf.js",
    "revision": "78576eb9f1d9a98bb13623b19e5104b1"
  },
  {
    "url": "assets/js/99.bf0fff42.js",
    "revision": "dda15c098a899fb06e23dc18abc1714c"
  },
  {
    "url": "assets/js/app.59c17208.js",
    "revision": "ccf58fb436afd6d8d9955b68f9f426c8"
  },
  {
    "url": "assets/js/vendors~docsearch.31b40087.js",
    "revision": "01fa9fd5944a871b5ff6158ef543b0dd"
  },
  {
    "url": "index.html",
    "revision": "c44528d7002d80606f6a4e8abc5aee39"
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

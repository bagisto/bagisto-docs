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
    "url": "404.html",
    "revision": "4a96b9aae85c3af676e1091942157076"
  },
  {
    "url": "advanced/create_payment_method.html",
    "revision": "00def3ec07167271d42fe8c16c766117"
  },
  {
    "url": "advanced/create_shipping_method.html",
    "revision": "1f7d4b8002d1bed01aa12c4a09a4a927"
  },
  {
    "url": "advanced/datagrid.html",
    "revision": "b91f83f4b60408f36f33c790e4de94c9"
  },
  {
    "url": "advanced/events.html",
    "revision": "3a2058f5b2de19637d5fea708caa383b"
  },
  {
    "url": "advanced/index.html",
    "revision": "580d7212ad53dfe612350bd8372e2555"
  },
  {
    "url": "advanced/override-core-model.html",
    "revision": "baa54f4bad9e13eb5319502ca60aeedc"
  },
  {
    "url": "advanced/render_event.html",
    "revision": "870dd540dcc8fb18ff0f140291d25995"
  },
  {
    "url": "advanced/security_practice.html",
    "revision": "f375d659ef6912488903600379638f8c"
  },
  {
    "url": "api/cart.html",
    "revision": "a5a86bb4b27fb286bde51fc48b95074a"
  },
  {
    "url": "api/categories.html",
    "revision": "40ad49f2c933caae01e76b1a934b67a3"
  },
  {
    "url": "api/customer_addresses.html",
    "revision": "25fddf32ca585e72402dd428e963f31d"
  },
  {
    "url": "api/customer_review.html",
    "revision": "9c371a59a6b0418f6d7660c752b29b3c"
  },
  {
    "url": "api/customer_wishlist.html",
    "revision": "55fe34dacfaca376c09367f8c849113b"
  },
  {
    "url": "api/customers.html",
    "revision": "dafe1e2b68ec73573ae93dcb7bce3b90"
  },
  {
    "url": "api/index.html",
    "revision": "707a8770678be4488fbc9bcb4b6adbf9"
  },
  {
    "url": "api/invoice_shipment.html",
    "revision": "0dacd59a8617701e597ff95dddb64b2d"
  },
  {
    "url": "api/order.html",
    "revision": "c120dbc8ccd19fc12704151a04c79ccd"
  },
  {
    "url": "api/product_review.html",
    "revision": "9da46a2c0c3ff3652e458db1e270501a"
  },
  {
    "url": "api/products.html",
    "revision": "866dcfd3ae5ca239989bb9eeafa5c95e"
  },
  {
    "url": "assets/css/0.styles.fb7b26fb.css",
    "revision": "d397ded3f75e375ade473ed68295d888"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_create.5b95f787.jpg",
    "revision": "5b95f787eb2a1df4a4e3c40a18e560d7"
  },
  {
    "url": "assets/img/bagisto_add_getId.b8ef4301.jpg",
    "revision": "b8ef43017a2208a5ace5013ee5f7b391"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_add_no_pag.e0d835b9.jpg",
    "revision": "e0d835b90c7818878e275b05270d8e2e"
  },
  {
    "url": "assets/img/bagisto_add_save.fe38c3ed.jpg",
    "revision": "fe38c3ed21adc08631d3bcfd8fa186fa"
  },
  {
    "url": "assets/img/bagisto_addresses_pag.f925e963.jpg",
    "revision": "f925e9638da6a01f569dbd6cb4b7e494"
  },
  {
    "url": "assets/img/bagisto_addresses.69c52e23.jpg",
    "revision": "69c52e23567ce96ec654b5cd68f042da"
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
    "url": "assets/img/bagisto_cat_descendant.e53deefd.jpg",
    "revision": "e53deefdbf887826dba9dc8006d48173"
  },
  {
    "url": "assets/img/bagisto_cat_link.f8bd6e52.jpg",
    "revision": "f8bd6e5292e86564b039e43010239e2a"
  },
  {
    "url": "assets/img/bagisto_cat_meta.47625f4d.jpg",
    "revision": "47625f4df14ecc90da91e351e9295795"
  },
  {
    "url": "assets/img/bagisto_cat_no_pagination.3350fde7.jpg",
    "revision": "3350fde78614d1a8b09d295e4df5884d"
  },
  {
    "url": "assets/img/bagisto_cat_path.e1616a77.jpg",
    "revision": "e1616a774753a2b4b70d443f745faa58"
  },
  {
    "url": "assets/img/bagisto_cat_single.65f010dc.jpg",
    "revision": "65f010dc94198418def69206df4450b6"
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
    "url": "assets/img/bagisto_cust_id.08e1e6bf.jpg",
    "revision": "08e1e6bf1914ad3ba98219c9ba9eb342"
  },
  {
    "url": "assets/img/bagisto_cust_login.89c4f1c2.jpg",
    "revision": "89c4f1c2af6d4465cec3eb1dc63513e9"
  },
  {
    "url": "assets/img/bagisto_cust_profile.a00014cb.jpg",
    "revision": "a00014cbddae59c57e21688b62da0c78"
  },
  {
    "url": "assets/img/bagisto_cust_reg_error.2b51538d.jpg",
    "revision": "2b51538d85438321c0b35bd7756b68d5"
  },
  {
    "url": "assets/img/bagisto_cust_wishlists.1d1a29e1.jpg",
    "revision": "1d1a29e10e01a2a230f659f23f9d9002"
  },
  {
    "url": "assets/img/bagisto_invoices_id.a4ee4dcb.jpg",
    "revision": "a4ee4dcb34fe39c1cf20c12cb6280a01"
  },
  {
    "url": "assets/img/bagisto_invoices_order_id.c4a4caf7.jpg",
    "revision": "c4a4caf7099755eeae7a059f2f97b01a"
  },
  {
    "url": "assets/img/bagisto_invoices.4d11d760.jpg",
    "revision": "4d11d76031369e63d4c99c124ee87fba"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_cust_no_pag.4c5388dd.jpg",
    "revision": "4c5388ddf40afa36e2347659e9e76514"
  },
  {
    "url": "assets/img/bagisto_orders_cust_pag.da21cece.jpg",
    "revision": "da21cece8227bfbf0fe411826e0d7dcb"
  },
  {
    "url": "assets/img/bagisto_orders_custId.fb57ac66.jpg",
    "revision": "fb57ac66c0e3718eaf8beaadfaf43e88"
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
    "url": "assets/img/bagisto_orders_page.9bd58762.jpg",
    "revision": "9bd58762f642d8e5f67fe4d8e70fc30e"
  },
  {
    "url": "assets/img/bagisto_orders.b384037f.jpg",
    "revision": "b384037f25063a44656fd456cd316ef9"
  },
  {
    "url": "assets/img/bagisto_prod_category.f025ec53.jpg",
    "revision": "f025ec532bdeec8ad026544ccd1a2719"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_id.021f216e.jpg",
    "revision": "021f216e2bee0648642c0c605d944fee"
  },
  {
    "url": "assets/img/bagisto_prod_name.855f9003.jpg",
    "revision": "855f900374561eff2d9b7b29c3e18bf6"
  },
  {
    "url": "assets/img/bagisto_prod_new.e292e708.jpg",
    "revision": "e292e708de80f8aac040099d9e9f8827"
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
    "url": "assets/img/bagisto_prod_sku.164513e5.jpg",
    "revision": "164513e5123741fde135af9cf0399006"
  },
  {
    "url": "assets/img/bagisto_prod_url_key.176d6ada.jpg",
    "revision": "176d6ada81ce94457d38726141cef7bb"
  },
  {
    "url": "assets/img/bagisto_reviews_cust_id.82b878ea.jpg",
    "revision": "82b878ea0e9eda36c07b9901c294730c"
  },
  {
    "url": "assets/img/bagisto_reviews_cust_no_page.18ac3613.jpg",
    "revision": "18ac3613db7babe7c1c7e5fe5841487c"
  },
  {
    "url": "assets/img/bagisto_reviews_cust_page.b56d32c8.jpg",
    "revision": "b56d32c80bf6cda1007c3f7d8dad2615"
  },
  {
    "url": "assets/img/bagisto_reviews_id.d4ea6ff1.jpg",
    "revision": "d4ea6ff18034ae0b5f7808587c66f3a6"
  },
  {
    "url": "assets/img/bagisto_reviews_no_page.9572dc0e.jpg",
    "revision": "9572dc0e6d2febecbc21b452672317dc"
  },
  {
    "url": "assets/img/bagisto_reviews_page.48a878f3.jpg",
    "revision": "48a878f31618485ea58cfcd8e1713200"
  },
  {
    "url": "assets/img/bagisto_reviews_prod_id.f7ecf7a1.jpg",
    "revision": "f7ecf7a11c6fcf6f2eef90cd33af62b5"
  },
  {
    "url": "assets/img/bagisto_reviews.429446e1.jpg",
    "revision": "429446e112ad7532eef464f30afb29fe"
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
    "url": "assets/img/bagisto_shipment_id.3fb5125a.jpg",
    "revision": "3fb5125a7b783a33d5e434e22bc3ff93"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_add.fdddfac5.jpg",
    "revision": "fdddfac5bd1483f6df432d32380b9041"
  },
  {
    "url": "assets/img/bagisto_wishlist_cust.5d9493f8.jpg",
    "revision": "5d9493f867e90342a51e8a76c3f0411b"
  },
  {
    "url": "assets/img/bagisto_wishlist_no_page.8db6977d.jpg",
    "revision": "8db6977d2e5848cc704b5c71a2684fdc"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
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
    "url": "assets/img/demo_products.86acc2d1.jpg",
    "revision": "86acc2d17a24f156e867f75404f9e121"
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
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
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
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
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
    "url": "assets/js/10.ae7f1853.js",
    "revision": "6b316221e5a13fbbe46f6bc05eafcc91"
  },
  {
    "url": "assets/js/11.0f7a854a.js",
    "revision": "5b76f28151dd6877ad6fb2b08d98daea"
  },
  {
    "url": "assets/js/12.96314bf7.js",
    "revision": "4f3b093da5f7faab9d8165ba5aafb865"
  },
  {
    "url": "assets/js/13.2989bd4a.js",
    "revision": "71f25aecae73548d3dcc8b38c2f7519a"
  },
  {
    "url": "assets/js/14.191d5799.js",
    "revision": "8e4bb66592782656503454c5a71dbcc0"
  },
  {
    "url": "assets/js/15.e8a13489.js",
    "revision": "12c924948239e0c163b9ace2eaa55d14"
  },
  {
    "url": "assets/js/16.b2df1065.js",
    "revision": "32c81e388b5cca54fabe06d24d7c6c60"
  },
  {
    "url": "assets/js/17.1069056a.js",
    "revision": "51e5a368533d29fdd7a40b0850b4be7e"
  },
  {
    "url": "assets/js/18.d89fff88.js",
    "revision": "8be3cf695e751773d887369c260f3614"
  },
  {
    "url": "assets/js/19.dd57f93b.js",
    "revision": "40a1e8067a182bd66592320b67a5e9a3"
  },
  {
    "url": "assets/js/2.756090ec.js",
    "revision": "0d0cc8fed71809a6ebd2f382ca68d009"
  },
  {
    "url": "assets/js/20.56eebfc8.js",
    "revision": "6ed763ea708a90b61110f4229aa38ceb"
  },
  {
    "url": "assets/js/21.f2200271.js",
    "revision": "cdfd8d7ec3b758742a38460442b24454"
  },
  {
    "url": "assets/js/22.c847ddce.js",
    "revision": "8b5f9f4c770479343d6b427564a9b668"
  },
  {
    "url": "assets/js/23.b0e3e03a.js",
    "revision": "558ebd2b44d6e59af511813c5ee62fa7"
  },
  {
    "url": "assets/js/24.bb967f90.js",
    "revision": "a621e505f45ba5995cd67bee9e90f600"
  },
  {
    "url": "assets/js/25.8347795a.js",
    "revision": "1d79458ce61c40655331e6afce68266d"
  },
  {
    "url": "assets/js/26.582a7e81.js",
    "revision": "9ec04661e98df18e56356042be4a1f3d"
  },
  {
    "url": "assets/js/27.ebeff1af.js",
    "revision": "d3903743a6a22999bbe4bb7d438299d9"
  },
  {
    "url": "assets/js/28.7032be97.js",
    "revision": "7b2a0656b38dc7ced87af508f5d51fed"
  },
  {
    "url": "assets/js/29.d3ca228c.js",
    "revision": "2df71b7f61a52333f950ae9d3f1c6f4f"
  },
  {
    "url": "assets/js/3.5a02b4fd.js",
    "revision": "4eb5d9c2098abe05cc7e80ffe7eefdfd"
  },
  {
    "url": "assets/js/30.1fdb5730.js",
    "revision": "c1cf89446305915814434f819f87d4a0"
  },
  {
    "url": "assets/js/31.3d98127d.js",
    "revision": "5d9c2b6aba105c221e8e6f1335f6ca19"
  },
  {
    "url": "assets/js/32.a4bbaa3d.js",
    "revision": "66f0473c6d101c1583d101c5408b4677"
  },
  {
    "url": "assets/js/33.751f6adf.js",
    "revision": "93e100e57d3bdf0c56e8c62aa8012a3a"
  },
  {
    "url": "assets/js/34.fc516bb7.js",
    "revision": "6a3b5f472f0ff1d5eb25f0736eb4a8d5"
  },
  {
    "url": "assets/js/35.f56446d8.js",
    "revision": "4153eb2d022f964e4b4e89cc27d147b5"
  },
  {
    "url": "assets/js/36.af7a079a.js",
    "revision": "98f4da85c868b8c688e457dd8352bb15"
  },
  {
    "url": "assets/js/37.3afc8e6c.js",
    "revision": "3c37f04e352e98bf743aeb860b3407b0"
  },
  {
    "url": "assets/js/38.8b056cfd.js",
    "revision": "cd88f5961d60c3128cc574c46575e739"
  },
  {
    "url": "assets/js/39.13e2bf4f.js",
    "revision": "a5fd354809db65a10be2e8359b84212c"
  },
  {
    "url": "assets/js/4.4a09aac9.js",
    "revision": "51bc75f3c7541183f8b4b626e1636acb"
  },
  {
    "url": "assets/js/40.000bb741.js",
    "revision": "bf8ab0cdf7d5529a439aaf362e40504d"
  },
  {
    "url": "assets/js/5.fa6d64aa.js",
    "revision": "ecc0061f531015e6a01e58910c7ab5e8"
  },
  {
    "url": "assets/js/6.ed0205c6.js",
    "revision": "1255cc9b99801ee063723d3fbc869217"
  },
  {
    "url": "assets/js/7.90026d33.js",
    "revision": "75e4caa4c2a7129b941918b7b575fd5e"
  },
  {
    "url": "assets/js/8.a91d0209.js",
    "revision": "b90262b3fabea9bf8f3b86147221fd16"
  },
  {
    "url": "assets/js/9.825c0d2b.js",
    "revision": "019220c1cd040e7aad3fa382d94d3f84"
  },
  {
    "url": "assets/js/app.58c4aafb.js",
    "revision": "2043cf515dca82c025c3b1b91314f80d"
  },
  {
    "url": "index.html",
    "revision": "5f0b7b66c6d90d5e7087599a0b61b13a"
  },
  {
    "url": "introduction/folders.html",
    "revision": "7100a124bb782a916a4968add0169c4d"
  },
  {
    "url": "introduction/index.html",
    "revision": "b7013c08d86251905b5d1967d044d1ce"
  },
  {
    "url": "introduction/installation.html",
    "revision": "6adc5bda91a23bfb7b8ce3dc110dc304"
  },
  {
    "url": "introduction/requirements.html",
    "revision": "6a72a16a8adf89a443b0bf62f21d4d1f"
  },
  {
    "url": "introduction/upgrade_to_latest_bagisto.html",
    "revision": "eb0a6bb3f870a9e87f8b1294f4cce59e"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "packages/backend_menu.html",
    "revision": "8e6b6a09434f7281d09b653a88c63274"
  },
  {
    "url": "packages/create.html",
    "revision": "e0dc59de9347fe59324e09dfceb456c3"
  },
  {
    "url": "packages/index.html",
    "revision": "246dced2b53d506ef1c8b1dfe4ab42c4"
  },
  {
    "url": "themes/create_admin_theme.html",
    "revision": "7e48489ba367c99eef1c1546ab5c7ed2"
  },
  {
    "url": "themes/create_theme.html",
    "revision": "a46795965d64b381f2aeda8c45d4cc00"
  },
  {
    "url": "themes/index.html",
    "revision": "ae1b416624b56a6461f5737ad124b158"
  },
  {
    "url": "translations/index.html",
    "revision": "9fb92e02f494b8755edc7df5df4462eb"
  },
  {
    "url": "user_guides/cart_catalog_rule.html",
    "revision": "4304b753fe01c61d7a340cf6bd8a529c"
  },
  {
    "url": "user_guides/cart_rule.html",
    "revision": "937dc29c16f237758f5bf0d9830184ec"
  },
  {
    "url": "user_guides/index.html",
    "revision": "5ab19f4e9fef2334abb4cbce07f1bcc9"
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

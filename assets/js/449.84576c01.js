(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{850:function(e,n,t){"use strict";t.r(n);var o=t(10),a=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"package-development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-development"}},[e._v("#")]),e._v(" Package Development")]),e._v(" "),n("p",[e._v("If you are looking to extend the functionalities of Bagisto eCommerce platform, creating a package is the way to go. A package is a self-contained module that adds specific features to the platform. It allows developers to add custom functionality to the platform without modifying the core codebase.")]),e._v(" "),n("p",[e._v("This guide will walk you through the process of developing a package for Bagisto.")]),e._v(" "),n("p",[e._v("In Bagisto, we have created numerous packages located at "),n("strong",[n("code",[e._v("packages/Webkul/")])]),e._v(". Below is a basic tree structure of a package:")]),e._v(" "),n("div",{staticClass:"language-directory-structure extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("└── Webkul\n    └── Blog\n        └── src\n            ├── Config\n            │   ├── acl.php\n            │   ├── admin-menu.php\n            │   ├── shop-menu.php\n            │   └── system.php\n            ├── Console\n            │   └── Commands\n            ├── Contracts\n            │   └── Post.php\n            ├── Database\n            │   ├── Migrations\n            │   │   └── 2024_10_10_122434_create_posts_table.php\n            │   └── Seeders\n            ├── Events\n            ├── Http\n            │   ├── Controllers\n            │   │   ├── Admin\n            │   │   │   └── PostController.php\n            │   │   └── Shop\n            │   │       └── PostController.php\n            │   ├── Middleware\n            │   └── Requests\n            ├── Listeners\n            ├── Mail\n            ├── Models\n            │   ├── Post.php\n            │   └── PostProxy.php\n            ├── Providers\n            │   ├── BlogServiceProvider.php\n            │   └── ModuleServiceProvider.php\n            ├── Routes\n            │   ├── admin-routes.php\n            │   └── shop-routes.php\n            ├── Repositories\n            │   └── PostRepository.php\n            └── Resources\n                ├── assets\n                │   ├── images\n                │   │   └── blog-icon.png\n                │   ├── js\n                │   │   └── app.js\n                │   └── css\n                │       └── app.css\n                ├── lang\n                │   └── app.php\n                └── views\n                    ├── admin\n                    │   └── blog\n                    │      ├── create.blade.php\n                    │      ├── edit.blade.php\n                    │      └── index.blade.php\n                    └── shop\n                        └── default\n                            ├── index.blade.php\n                            └── blog-details.blade.php\n\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);
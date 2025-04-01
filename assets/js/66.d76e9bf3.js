(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{294:function(t,e,s){t.exports=s.p+"assets/img/new-theme-added.f06bacb5.png"},871:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"store-theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store-theme"}},[t._v("#")]),t._v(" Store Theme")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#configuration"}},[t._v("Configuration")]),e("ul",[e("li",[e("a",{attrs:{href:"#explanation-of-parameters"}},[t._v("Explanation of Parameters")])])])]),e("li",[e("a",{attrs:{href:"#creating-a-theme"}},[t._v("Creating a Theme")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Configuring the store theme in Bagisto allows you to customize the visual appearance and functionality of your online store. Themes define the layout, styling, and user interface elements that create a unique brand experience for your customers.")]),t._v(" "),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("To configure the store theme in Bagisto, follow these steps:")])]),t._v(" "),e("li",[e("p",[t._v("Locate the "),e("code",[t._v("themes.php")]),t._v(" File. Navigate to the "),e("code",[t._v("config")]),t._v(" folder located in the root directory of your Bagisto project.")])]),t._v(" "),e("li",[e("p",[t._v("Open the "),e("code",[t._v("themes.php")]),t._v(" File. Find the "),e("code",[t._v("themes.php")]),t._v(" file within the config directory and open it for editing.")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- app\n- bin\n- bootstrap\n- config\n    ├── ...\n    └── themes.php\n- database\n- packages\n    └── Webkul\n")])])]),e("ul",[e("li",[e("p",[t._v("Open the "),e("code",[t._v("themes.php")]),t._v(" file to view and configure theme settings")])]),t._v(" "),e("li",[e("p",[t._v("This file contains arrays that define different themes available in your application.")])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop-default'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Default'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/shop/default'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/themes/default/views'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop-default-vite.hot'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/shop/default/build'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),e("p",[t._v("Let's go through the parameters defined in the "),e("code",[t._v("themes.php")]),t._v(" file as understanding them will help you in creating a custom theme.")]),t._v(" "),e("h3",{attrs:{id:"explanation-of-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation-of-parameters"}},[t._v("#")]),t._v(" Explanation of Parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("shop-default")]),t._v(" This parameter at the top of the file indicates the currently active or default theme for the shop in Bagisto. It is set to "),e("code",[t._v("'shop-default'")]),t._v(", representing the name of the currently active theme.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("shop")]),t._v(" This parameter allows you to define the configurations for your custom theme for the shop end. You can create and use multiple themes simultaneously in Bagisto.")])]),t._v(" "),e("li",[e("p",[t._v("Inside the "),e("code",[t._v("'shop'")]),t._v(" array, there is another array named "),e("code",[t._v("'default'")]),t._v(", which represents your currently active theme. It contains several key-value pairs that are explained below:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("views_path")]),t._v(" This parameter specifies the path to the views or blade files for your custom theme.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("assets_path")]),t._v(" It determines the path to the assets such as images, CSS files, and JavaScript files for your theme.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("name")]),t._v(" This parameter defines a global name for your theme inside Bagisto.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("parent")]),t._v(" This is an optional parameter that allows you to customize existing themes in Bagisto. By setting the "),e("code",[t._v("'parent'")]),t._v(" parameter to the value of the "),e("code",[t._v("'name'")]),t._v(" parameter listed above, you can inherit the configuration of the parent theme and make further customizations.")])])])])]),t._v(" "),e("p",[t._v("Once you have defined the paths and names for your custom theme in the "),e("code",[t._v("themes.php")]),t._v(" file, you can start creating your view files. Make sure to cover all the GET routes of the shop package that include a parameter called "),e("code",[t._v("'view'")]),t._v(". You can find the route file of the shop package located at "),e("code",[t._v("packages/Webkul/Shop/src/Http/routes.php")]),t._v(".")]),t._v(" "),e("p",[t._v("Ensure that the name of your blade file matches the value passed in the GET route file. For example:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Shop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CategoryController")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store front header nav-menu fetch")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/categories/{slug}'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CategoryController")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop.categories.index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("We are using Laravel 10 based routing system, which involves keeping view files inside the controller's section. This allows for the creation of custom view files, as well as redirection in controllers.")]),t._v(" "),e("p",[t._v("For all the views, check all the GET routes as they include a "),e("code",[t._v("'view'")]),t._v(" parameter with the corresponding value to be used.")]),t._v(" "),e("p",[t._v("By following these steps, you can configure and create custom view files for your store theme in Bagisto. This allows you to personalize the appearance and layout of your storefront to align with your branding and provide an enhanced user experience.")]),t._v(" "),e("h2",{attrs:{id:"creating-a-theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-theme"}},[t._v("#")]),t._v(" Creating a Theme")]),t._v(" "),e("p",[t._v("To create a new theme, follow these steps:")]),t._v(" "),e("ul",[e("li",[t._v("Add a new theme entry to the "),e("code",[t._v("themes")]),t._v(" array in the "),e("code",[t._v("themes.php")]),t._v(" file:")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop-default'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Default'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/shop/default'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/themes/default/views'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop-default-vite.hot'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/shop/default/build'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'new-theme'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'New Theme'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/shop/new-theme'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/themes/new-theme/views'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop-new-theme-vite.hot'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/shop/new-theme/build'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),e("ul",[e("li",[t._v("Create the necessary directories for your new theme")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("└── resources\n    └── themes\n        └── new-theme\n            └── views\n                └── layout.blade.php\n                └── home.blade.php\n")])])]),e("ul",[e("li",[e("p",[t._v("In the "),e("code",[t._v("views")]),t._v(" directory, create the view files required for your theme, such as "),e("code",[t._v("layout.blade.php")]),t._v(" and "),e("code",[t._v("home.blade.php")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Ensure that your theme's assets (CSS, JS, images, etc.) are placed in the specified "),e("code",[t._v("assets_path")]),t._v(":")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("└── public\n    └── themes\n        └── shop\n            └── new-theme\n                └── css\n                └── js\n                └── images\n")])])]),e("p",[t._v("By following these steps, you can create and configure a new theme for your Bagisto store, enabling you to customize the appearance and layout to suit your branding and design preferences.")]),t._v(" "),e("p",[t._v("After adding your new theme, you will be able to select it when creating a new section for your storefront homepage from the admin panel.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(294),alt:"limiting-error-messages"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{567:function(t,s,e){"use strict";e.r(s);var a=e(10),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"admin-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-theme"}},[t._v("#")]),t._v(" Admin Theme")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#configuration"}},[t._v("Configuration")])]),s("li",[s("a",{attrs:{href:"#creating-a-theme"}},[t._v("Creating a Theme")]),s("ul",[s("li",[s("a",{attrs:{href:"#add-a-new-theme-entry"}},[t._v("Add a New Theme Entry")])]),s("li",[s("a",{attrs:{href:"#specify-the-path-to-views-and-assets"}},[t._v("Specify the Path to Views and Assets")])]),s("li",[s("a",{attrs:{href:"#customize-the-dashboard-page"}},[t._v("Customize the Dashboard Page")])]),s("li",[s("a",{attrs:{href:"#activate-the-new-theme"}},[t._v("Activate the New Theme")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("In Bagisto, the flexibility to customize the look and feel of your admin panel allows you to create a more personalized and efficient backend experience. This guide provides a step-by-step process to configure and create a new admin theme. By following these instructions, you will be able to set up custom views and assets, tailoring the admin interface to better suit your brand and operational needs.")]),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("To configure the admin theme in Bagisto, follow these steps:")]),t._v(" "),s("ul",[s("li",[t._v("Locate the "),s("code",[t._v("themes.php")]),t._v(" file inside the "),s("code",[t._v("config")]),t._v(" folder located in your project's root directory. Look for the keys "),s("code",[t._v("admin-default")]),t._v(" and "),s("code",[t._v("admin")]),t._v(". The configuration will appear as follows:")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/admin/default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/admin-themes/default/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default-vite.hot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/admin/default/build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("admin-default")]),t._v(" "),s("td",[t._v("Sets the current theme for the admin area")])]),t._v(" "),s("tr",[s("td",[t._v("admin")]),t._v(" "),s("td",[t._v("Stores a list of available themes")])])])]),t._v(" "),s("h2",{attrs:{id:"creating-a-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-theme"}},[t._v("#")]),t._v(" Creating a Theme")]),t._v(" "),s("p",[t._v("To create a new admin theme, follow these steps")]),t._v(" "),s("h3",{attrs:{id:"add-a-new-theme-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-new-theme-entry"}},[t._v("#")]),t._v(" Add a New Theme Entry")]),t._v(" "),s("p",[t._v("Update the themes.php file inside the config folder to include your new theme. Add the new theme entry under the admin array:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/admin/default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/admin-themes/default/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default-vite.hot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/admin/default/build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'new-theme'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'new-theme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/admin/new-theme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/admin-themes/new-theme/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'vite'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hot_file'")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-new-theme-vite.hot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'build_directory'")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes/admin/new-theme/build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_assets_directory'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'src/Resources/assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("h3",{attrs:{id:"specify-the-path-to-views-and-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-path-to-views-and-assets"}},[t._v("#")]),t._v(" Specify the Path to Views and Assets")]),t._v(" "),s("p",[t._v("Ensure the paths to the views and assets folders are according to your desired structure. For example")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Views structure:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- resources\n└── admin-themes\n    └── new-theme\n        └── views\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Assets structure:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- public\n└── admin-themes\n    └── new-theme\n        └── assets\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"customize-the-dashboard-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customize-the-dashboard-page"}},[t._v("#")]),t._v(" Customize the Dashboard Page")]),t._v(" "),s("p",[t._v("Create the directory structure for the dashboard page in the "),s("code",[t._v("new-theme")]),t._v(" folder, mirroring the structure in the "),s("code",[t._v("default")]),t._v(" folder. For example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- resources\n    └── admin-themes\n        └── new-theme\n            └── views\n                └── dashboard\n                    └── index.blade.php\n")])])]),s("p",[t._v("Add the desired content for the dashboard page in the index.blade.php file. For example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" Theme Sample\n")])])]),s("h3",{attrs:{id:"activate-the-new-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activate-the-new-theme"}},[t._v("#")]),t._v(" Activate the New Theme")]),t._v(" "),s("p",[t._v("Change the value of the "),s("code",[t._v("admin-default")]),t._v(" key in the "),s("code",[t._v("config/themes.php")]),t._v(" file to activate the new theme")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin-default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'new-theme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("Now, when you access the dashboard page in the admin area, you should see the customized version provided by the new theme")])])}),[],!1,null,null,null);s.default=n.exports}}]);
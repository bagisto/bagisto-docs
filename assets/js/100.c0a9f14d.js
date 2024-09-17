(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{452:function(t,s,e){"use strict";e.r(s);var n=e(10),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"create-your-own-product-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-own-product-type"}},[t._v("#")]),t._v(" Create your own product type")]),t._v(" "),s("p",[t._v("By default Bagisto provides the following product types: simple, configurable, virtual, grouped, downloadable, bundled and bookings.\nIf the default product types do not meet your requirements, you can create your own product type.")]),t._v(" "),s("h2",{attrs:{id:"steps-to-create-your-own-product-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-create-your-own-product-types"}},[t._v("#")]),t._v(" Steps to create your own product-types")]),t._v(" "),s("p",[t._v("You may access this super-functionality of creating your own product-types by following the points listed below.")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(': To demonstrate the process here, we will be creating a new product-type say "'),s("code",[t._v("coupon")]),t._v('"')]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create your own package, you can check out the "),s("a",{attrs:{href:"../packages"}},[t._v("Package Development")]),t._v(" section if you need help with this.")])]),t._v(" "),s("li",[s("p",[t._v("Within the Config folder of your package, create a file "),s("code",[t._v("product_types.php")])])]),t._v(" "),s("li",[s("p",[t._v("Write the below piece of code in it, which is will be used to add product-type in your project.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'coupon'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'coupon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Coupon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ACME\\Coupon\\Type\\Coupon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("After that, we need to merge this "),s("code",[t._v("Config/product_types.php")]),t._v("  with a core product_types option. For this, we use the method mergeConfigFrom() in the register method of the service provider("),s("code",[t._v("ACME\\Coupon\\Providers\\CouponServiceProvider.php")]),t._v(").")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Coupon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CouponServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n          * Register services.\n          *\n          * @return void\n          */")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeConfigFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/Config/product_types.php'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'product_types'")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n")])])])])]),t._v(" "),s("li",[s("p",[t._v("In 3rd point above, that have mentioned key "),s("code",[t._v("class")]),t._v(" which loads coupon product type. So, you need to create a file "),s("code",[t._v("Coupon.php")]),t._v(" within your package under Type folder and add the below code.")])])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Coupon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Coupon")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractType")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[s("p",[t._v("After successfully completion of above steps, your product type will get created. But, still we don't have any code written for coupon type product in the "),s("code",[t._v("Type/Coupon.php")]),t._v(". To inherit basic functionality of any product to your product type, we need to inherit the classes from the Product package "),s("code",[t._v("type/AbstractType.php")]),t._v(" file.")])]),t._v(" "),s("li",[s("p",[t._v("Extending "),s("code",[t._v("AbstractType.php")]),t._v(" class within your product_type ("),s("code",[t._v("Type\\Coupon.php")]),t._v(") class let you to provide some core functionality of product. But, in addition, if user need to defined it's own custom methods, then he can define within their "),s("code",[t._v("Coupon.php")]),t._v(" file.")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);
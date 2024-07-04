(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{449:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"override-core-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#override-core-model"}},[t._v("#")]),t._v(" Override core model")]),t._v(" "),s("p",[t._v("Concord is a Laravel Extension that helps building modules on top of Laravel's built-in Service Providers.\nBagisto uses Concord for managing their modules.\nThe concept of model proxies has been introduced. Proxies, as the name suggests will drive you to the actual model class.")]),t._v(" "),s("p",[t._v("Concord's concept also requires to have an interface "),s("strong",[s("em",[t._v("Product")])]),t._v(" and this way it's possible to freely bind a concrete class to it using Concord's "),s("strong",[t._v("registerModel()")]),t._v(" method.")]),t._v(" "),s("p",[s("code",[t._v("Models\\Product")]),t._v(" class gets bound to the "),s("code",[t._v("Contracts\\Product")]),t._v(" interface within the module (consider it as a default). If the application wants to extend that class, it invokes Concord's "),s("strong",[t._v("registerModel()")]),t._v(" again, and that's all.")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("registerModel()")]),t._v(" method also silently binds the interface to the implementation with Laravel's service container so you can simply type-hint the interface at any point where automatic injection happens.")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(" : "),s("em",[t._v("For more details check")]),t._v(" "),s("a",{staticClass:"bagsito-link",attrs:{href:"https://github.com/artkonekt/concord",target:"_blank"}},[t._v(" Concord ")]),t._v(" "),s("em",[t._v("on github or refer to its")]),s("a",{staticClass:"bagsito-link",attrs:{href:"https://artkonekt.github.io/concord/#/",target:"_blank"}},[t._v(" Documentation ")])]),t._v(" "),s("p",[t._v("Overriding Model class in the application:")]),t._v(" "),s("p",[t._v("Concord modules generally define an interface for every eloquent model. If you want to override a model you can tell concord to use another class for that interface. Below, you may have a look at code")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("AppServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n        * Bootstrap any application services.\n        *\n        * @return void\n        */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("concord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the code shown above, "),s("strong",[t._v("registerModel()")]),t._v(" method accepts two parameters, described below:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("The first parameter states your Contracts path which you want to override.")])]),t._v(" "),s("li",[s("p",[t._v("The second parameter states the model path from where you will override the model.")])])]),t._v(" "),s("p",[t._v("The model from which you want to override must extend your model path as shown below")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ProductBaseModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Product")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductBaseModel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{500:function(t,s,e){"use strict";e.r(s);var a=e(10),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"override-core-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#override-core-model"}},[t._v("#")]),t._v(" Override Core Model")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#overriding-a-model-class"}},[t._v("Overriding a Model Class")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Bagisto utilizes Concord, a Laravel extension, for building modules on top of Laravel's built-in service providers. Concord introduces the concept of model proxies, which allow you to override and extend core models in a modular way.")]),t._v(" "),s("p",[t._v("Concord requires the existence of an interface, such as "),s("strong",[t._v("Product")]),t._v(", which serves as a contract that can be bound to a concrete class using Concord's "),s("strong",[t._v("registerModel()")]),t._v(" method.")]),t._v(" "),s("p",[t._v("By default, the "),s("strong",[s("code",[t._v("Models\\Product")])]),t._v(" class is bound to the "),s("strong",[s("code",[t._v("Contracts\\Product")])]),t._v(" interface within the module. If you want to extend or override this class, you can use Concord's "),s("strong",[t._v("registerModel()")]),t._v(" method.")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("registerModel()")]),t._v(" method handles the binding of the interface and implementation in Laravel's service container, enabling you to easily type-hint the interface for automatic injection.")]),t._v(" "),s("p",[t._v("For more details, you can visit the "),s("a",{attrs:{href:"https://github.com/artkonekt/concord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concord GitHub repository"),s("OutboundLink")],1),t._v(" or refer to the "),s("a",{attrs:{href:"https://artkonekt.github.io/concord/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concord documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"overriding-a-model-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overriding-a-model-class"}},[t._v("#")]),t._v(" Overriding a Model Class")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("In Concord modules, an interface is typically defined for each Eloquent model. If you wish to override a model, you can instruct Concord to use another class for that interface. Here's an example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("BlogServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Bootstrap any application services.\n     *\n     * @return void\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("concord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("In the code above, the "),s("strong",[t._v("registerModel()")]),t._v(" method accepts two parameters:")]),t._v(" "),s("ul",[s("li",[t._v("The first parameter specifies the path to the interface (contract) you want to override.")]),t._v(" "),s("li",[t._v("The second parameter specifies the path to the model class that will override the default implementation.")])])]),t._v(" "),s("li",[s("p",[t._v("The model class you're overriding must extend your specified model path, as shown in the example below:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ProductBaseModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Product")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductBaseModel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),s("p",[t._v("By following this approach, you can override core models in Bagisto using Concord's module system.")])])}),[],!1,null,null,null);s.default=n.exports}}]);
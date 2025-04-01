(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{831:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"override-core-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#override-core-model"}},[t._v("#")]),t._v(" Override Core Model")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#overriding-a-model-class"}},[t._v("Overriding a Model Class")]),e("ul",[e("li",[e("a",{attrs:{href:"#define-an-interface-contract"}},[t._v("Define an Interface (Contract)")])]),e("li",[e("a",{attrs:{href:"#register-the-model-override"}},[t._v("Register the Model Override")])]),e("li",[e("a",{attrs:{href:"#implement-the-custom-model-class"}},[t._v("Implement the Custom Model Class")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Bagisto utilizes Concord, a Laravel extension, for building modules on top of Laravel's built-in service providers. Concord introduces the concept of model proxies, which allow you to override and extend core models in a modular way.")]),t._v(" "),e("p",[t._v("Concord requires the existence of an interface, such as "),e("code",[t._v("Product")]),t._v(", which serves as a contract that can be bound to a concrete class using Concord's "),e("code",[t._v("registerModel()")]),t._v(" method.")]),t._v(" "),e("p",[t._v("By default, the "),e("code",[t._v("Models\\Product")]),t._v(" class is bound to the "),e("code",[t._v("Contracts\\Product")]),t._v(" interface within the module. If you want to extend or override this class, you can use Concord's "),e("code",[t._v("registerModel()")]),t._v(" method.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("registerModel()")]),t._v(" method handles the binding of the interface and implementation in Laravel's service container, enabling you to easily type-hint the interface for automatic injection.")]),t._v(" "),e("p",[t._v("For more details, you can visit the "),e("a",{attrs:{href:"https://github.com/artkonekt/concord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concord GitHub repository"),e("OutboundLink")],1),t._v(" or refer to the "),e("a",{attrs:{href:"https://artkonekt.github.io/concord/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concord documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"overriding-a-model-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overriding-a-model-class"}},[t._v("#")]),t._v(" Overriding a Model Class")]),t._v(" "),e("p",[t._v("To override a core model in Bagisto using Concord, follow these steps:")]),t._v(" "),e("h3",{attrs:{id:"define-an-interface-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-an-interface-contract"}},[t._v("#")]),t._v(" Define an Interface (Contract)")]),t._v(" "),e("p",[t._v("In Bagisto's modular structure, each Eloquent model typically corresponds to an interface. This interface acts as a contract that specifies the methods the model must implement.")]),t._v(" "),e("h3",{attrs:{id:"register-the-model-override"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-the-model-override"}},[t._v("#")]),t._v(" Register the Model Override")]),t._v(" "),e("p",[t._v("Use Concord's registerModel() method in your module's service provider (ServiceProvider) to bind your custom model implementation to the interface. Here’s how you can do it:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CustomModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CustomModuleServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Bootstrap any application services.\n     *\n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("concord")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("ul",[e("li",[t._v("Replace "),e("code",[t._v("\\Webkul\\Product\\Contracts\\Product::class")]),t._v(" with the interface you wish to override.")]),t._v(" "),e("li",[t._v("Replace "),e("code",[t._v("\\App\\Http\\Product::class")]),t._v(" with the path to your custom model class that extends the core model you are overriding.")])]),t._v(" "),e("h3",{attrs:{id:"implement-the-custom-model-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implement-the-custom-model-class"}},[t._v("#")]),t._v(" Implement the Custom Model Class")]),t._v(" "),e("p",[t._v("Your custom model class (Product in this example) should extend the base core model ("),e("code",[t._v("ProductBaseModel")]),t._v("), ensuring it adheres to the contract specified by the interface. Here’s an example:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ProductBaseModel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Product")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductBaseModel")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("Once registered, you can use dependency injection or other Laravel mechanisms to reference the interface("),e("code",[t._v("\\Webkul\\Product\\Contracts\\Product::class")]),t._v(") throughout your application. Laravel's service container will automatically resolve your custom model implementation ("),e("code",[t._v("\\App\\Http\\Product::class")]),t._v(") where the interface is referenced.")]),t._v(" "),e("p",[t._v("By following this approach, you can effectively extend and override core models within Bagisto using Concord, maintaining modularity and flexibility in your application's architecture.")])])}),[],!1,null,null,null);e.default=n.exports}}]);
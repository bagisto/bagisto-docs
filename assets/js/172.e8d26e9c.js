(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{523:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" Models")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#using-bagisto-package-generator"}},[t._v("Using Bagisto Package Generator")])]),s("li",[s("a",{attrs:{href:"#using-laravel-artisan-command"}},[t._v("Using Laravel Artisan Command")]),s("ul",[s("li",[s("a",{attrs:{href:"#contract"}},[t._v("Contract")])]),s("li",[s("a",{attrs:{href:"#proxy"}},[t._v("Proxy")])]),s("li",[s("a",{attrs:{href:"#model"}},[t._v("Model")])]),s("li",[s("a",{attrs:{href:"#module-service-provider"}},[t._v("Module Service Provider")])])])])])]),s("p"),t._v(" "),s("p",[t._v("To understand Models in detail, you can visit the Laravel documentation "),s("a",{attrs:{href:"https://laravel.com/docs/10.x/eloquent",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("We are using the "),s("a",{attrs:{href:"https://packagist.org/packages/konekt/concord",target:"_blank",rel:"noopener noreferrer"}},[t._v("konekt/concord"),s("OutboundLink")],1),t._v(" package, which is an extension of Laravel. It helps in building modular Laravel applications.")]),t._v(" "),s("h2",{attrs:{id:"using-bagisto-package-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-bagisto-package-generator"}},[t._v("#")]),t._v(" Using Bagisto Package Generator")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("This command creates a new "),s("strong",[s("code",[t._v("Post")])]),t._v(" Model inside your package.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan package:make-model Post Webkul/Blog\n")])])])]),t._v(" "),s("li",[s("p",[t._v("This command creates the following files:")]),t._v(" "),s("ul",[s("li",[t._v("New model "),s("strong",[s("code",[t._v("Post.php")])]),t._v(" in the "),s("strong",[s("code",[t._v("packages/Webkul/Blog/src/Models")])]),t._v(" directory.")]),t._v(" "),s("li",[t._v("New model proxy "),s("strong",[s("code",[t._v("PostProxy.php")])]),t._v(" in the "),s("strong",[s("code",[t._v("packages/Webkul/Blog/src/Models")])]),t._v(" directory.")]),t._v(" "),s("li",[t._v("New model contract "),s("strong",[s("code",[t._v("Post.php*")])]),t._v(" in the "),s("strong",[s("code",[t._v("packages/Webkul/Blog/src/Contracts")])]),t._v(" directory.")])])])]),t._v(" "),s("h2",{attrs:{id:"using-laravel-artisan-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-laravel-artisan-command"}},[t._v("#")]),t._v(" Using Laravel Artisan Command")]),t._v(" "),s("p",[t._v("Before creating the model class, we need to create two things: the "),s("strong",[s("code",[t._v("Contract")])]),t._v(" and the "),s("strong",[s("code",[t._v("Proxy")])]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract"}},[t._v("#")]),t._v(" Contract")]),t._v(" "),s("p",[t._v("Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, the "),s("strong",[s("code",[t._v("Illuminate\\Contracts\\Queue\\Queue")])]),t._v(" contract defines the methods needed for queueing jobs, while the "),s("strong",[s("code",[t._v("Illuminate\\Contracts\\Mail\\Mailer")])]),t._v(" contract defines the methods needed for sending an email.")]),t._v(" "),s("p",[t._v("Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with various drivers and a mailer implementation powered by SwiftMailer.")]),t._v(" "),s("p",[t._v("All Laravel contracts are stored in their own GitHub repository. This provides a quick reference for all available contracts and a single, decoupled package that can be used by package developers.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Now, create a folder named "),s("strong",[s("code",[t._v("Contracts")])]),t._v(" inside "),s("strong",[s("code",[t._v("Webkul/Blog/src/")])]),t._v(" and create an interface file named "),s("strong",[s("code",[t._v("Post.php")])]),t._v(".")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("packages\n└── Webkul\n    └── Blog\n        └── src\n            ├── ...\n            └── Contracts\n                └── Post.php\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Copy the following code into the "),s("strong",[s("code",[t._v("Post.php")])]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Post")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),s("h3",{attrs:{id:"proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),s("p",[t._v("Proxies, as their name suggests, lead you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Now, create a "),s("strong",[s("code",[t._v("Models")])]),t._v(" folder inside "),s("strong",[s("code",[t._v("packages/Webkul/Blog/src/")])]),t._v(". Inside the "),s("strong",[s("code",[t._v("Models")])]),t._v(" folder, create a model proxy file named "),s("strong",[s("code",[t._v("PostProxy.php")])]),t._v(". This Proxy class will extend "),s("strong",[s("code",[t._v("Konekt\\Concord\\Proxies\\ModelProxy")])]),t._v(".")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                ├── Contracts\n                │   └── Post.php\n                └── Models\n                    └── PostProxy.php\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Copy the following code into the "),s("strong",[s("code",[t._v("PostProxy.php")])]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Konekt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Proxies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ModelProxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("PostProxy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelProxy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),s("h3",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" Model")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("The simple way to create a model is to execute the "),s("code",[t._v("make:model")]),t._v(" artisan command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan make:model Post\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Now, move your "),s("strong",[s("code",[t._v("Post")])]),t._v(" model from the project root directory (i.e., "),s("strong",[s("code",[t._v("App/Models")])]),t._v(") to the "),s("strong",[s("code",[t._v("packages/Webkul/Blog/src/Models")])]),t._v(" folder.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                ├── Contracts\n                │   └── Post.php\n                └── Models\n                    ├── Post.php\n                    └── PostProxy.php\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Copy the following code into the "),s("strong",[s("code",[t._v("Post.php")])]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Relations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BelongsTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Admin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" PostContract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Post")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostContract")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * The attributes that are mass assignable.\n    *\n    * @var $fillable\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fillable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'status'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Get the user that owns the post.\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("BelongsTo")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("belongsTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Admin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),s("h3",{attrs:{id:"module-service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-service-provider"}},[t._v("#")]),t._v(" Module Service Provider")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Now, we need to create a provider named "),s("strong",[s("code",[t._v("ModuleServiceProvider.php")])]),t._v(" inside "),s("strong",[s("code",[t._v("Webkul/Blog/src/Providers")])]),t._v(".")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("└── packages\n  └── Webkul\n      └── Blog\n          └── src\n              ├── ...\n              └── Providers\n                  ├── BlogServiceProvider.php\n                  └── ModuleServiceProvider.php\n")])])])]),t._v(" "),s("li",[s("p",[t._v("In this file, we register the models used in this package. You can see the code below.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Konekt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Concord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BaseModuleServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("ModuleServiceProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseModuleServiceProvider")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$models")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("Finally, register your "),s("strong",[s("code",[t._v("ModuleServiceProvider.php")])]),t._v(" in the "),s("strong",[s("code",[t._v("config/concord.php")])]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'modules'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other service providers")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ModuleServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{246:function(t,a,e){t.exports=e.p+"assets/img/mail-sample.6aa3d730.png"},493:function(t,a,e){"use strict";e.r(a);var s=e(10),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"email-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-template"}},[t._v("#")]),t._v(" Email Template")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#email-template-flow"}},[t._v("Email Template Flow")])]),a("li",[a("a",{attrs:{href:"#changing-email-template"}},[t._v("Changing Email Template")])]),a("li",[a("a",{attrs:{href:"#email-template-sample"}},[t._v("Email Template Sample")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("In this section, we will explain how to customize the email templates in Bagisto. Customizing email templates allows you to personalize the appearance of your emails according to your preferences.")]),t._v(" "),a("h2",{attrs:{id:"email-template-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-template-flow"}},[t._v("#")]),t._v(" Email Template Flow")]),t._v(" "),a("p",[t._v("Before we dive into template customization, let's understand how email templates work in Bagisto.")]),t._v(" "),a("p",[t._v("Bagisto provides various mail notification classes, such as "),a("strong",[a("code",[t._v("CancelOrderAdminNotification")])]),t._v(" and "),a("strong",[a("code",[t._v("NewCustomerNotification")])]),t._v(", located in the "),a("strong",[a("code",[t._v("Webkul\\Admin\\Mail")])]),t._v(" namespace. Let's take the "),a("strong",[a("code",[t._v("CancelOrderAdminNotification")])]),t._v(" class as an example.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queueable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mailable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SerializesModels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CancelOrderAdminNotification")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mailable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Queueable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SerializesModels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Order.\n     *\n     * @var \\Webkul\\Sales\\Contracts\\Order\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Constructor.\n     *\n     * @param  \\Webkul\\Sales\\Contracts\\Order  $order\n     * @return void\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Build.\n     *\n     * @return void\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSenderEmailDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSenderEmailDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAdminEmailDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trans")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::app.mail.order.cancel.subject'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::emails.sales.order-cancel-admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("In the "),a("strong",[a("code",[t._v("build()")])]),t._v(" method of the above class, you can see that the main view file, "),a("strong",[a("code",[t._v("view('shop::emails.sales.order-cancel-admin')")])]),t._v(", is loaded from the shop package.")]),t._v(" "),a("p",[t._v("Now, let's explore the view file mentioned in "),a("strong",[a("code",[t._v("view('shop::emails.sales.order-cancel-admin')")])]),t._v(". If you check the file at the path "),a("strong",[a("code",[t._v("packages/Webkul/Shop/src/Resources/views/emails/sales/order-cancel-admin.blade.php")])]),t._v(", you will find it. This view file uses the main layout component "),a("strong",[a("code",[t._v("shop::emails.layouts.master")])]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::emails.layouts.master'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n@endcomponent\n")])])]),a("p",[t._v("This layout component is responsible for the overall email layout. If desired, you can explore this file as well. Now, let's proceed to learn how to change these email templates.")]),t._v(" "),a("h2",{attrs:{id:"changing-email-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-email-template"}},[t._v("#")]),t._v(" Changing Email Template")]),t._v(" "),a("p",[t._v("To customize the email template, the recommended approach is to override the package's view. Since all email views are defined in the shop package, we need to override the view within the shop package.")]),t._v(" "),a("p",[t._v("Here's how you can override the view for the same file we mentioned above, "),a("strong",[a("code",[t._v("view('shop::emails.sales.order-cancel-admin')")])]),t._v(".")]),t._v(" "),a("p",[t._v("Bagisto registers two locations for views: the application's "),a("strong",[a("code",[t._v("resources/themes")])]),t._v(" directory specified in "),a("strong",[a("code",[t._v("config/themes.php")])]),t._v(", and the directory you specify. If you are using the default theme, "),a("strong",[a("code",[t._v("shop")])]),t._v(" package, Bagisto will first check if a custom version of the view exists in the "),a("strong",[a("code",[t._v("resources/themes/default")])]),t._v(" directory. If the view has not been customized, Bagisto will then search the package's view directory.")]),t._v(" "),a("p",[t._v("To override the view, create the same directory structure in the application's "),a("strong",[a("code",[t._v("resources/themes/default")])]),t._v(" directory:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- resources/\n  └── themes/\n      └── default/\n          └── views/\n              └── emails/\n                  └── sales/\n                      └── order-cancel-admin.blade.php\n")])])]),a("p",[t._v("For example, create a file named "),a("strong",[a("code",[t._v("order-cancel-admin.blade.php")])]),t._v(" within the "),a("strong",[a("code",[t._v("sales")])]),t._v(" directory, and modify its content as desired:")]),t._v(" "),a("div",{staticClass:"language-blade extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro cumque numquam neque dicta quo, accusantium, perferendis sed beatae nesc\n\n    iunt eum impedit vel doloribus dolor excepturi vero tenetur perspiciatis saepe?\n")])])]),a("p",[t._v("Now you can test the modified email template.")]),t._v(" "),a("h2",{attrs:{id:"email-template-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-template-sample"}},[t._v("#")]),t._v(" Email Template Sample")]),t._v(" "),a("p",[a("img",{attrs:{src:e(246),alt:"Email Template Sample"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);
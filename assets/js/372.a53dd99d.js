(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{778:function(t,e,n){"use strict";n.r(e);var a=n(10),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"view-render-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-render-event"}},[t._v("#")]),t._v(" View Render Event")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#render-view"}},[t._v("Render View")]),e("ul",[e("li",[e("a",{attrs:{href:"#listening-to-events"}},[t._v("Listening to Events")])]),e("li",[e("a",{attrs:{href:"#implementation-details"}},[t._v("Implementation Details")])]),e("li",[e("a",{attrs:{href:"#considerations"}},[t._v("Considerations")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("view_render_event()")]),t._v(" function in Bagisto allows developers to inject content dynamically before or after the main content of a template. This functionality is useful for modifying template output without directly altering the template file itself, enhancing flexibility and maintainability in your application.")]),t._v(" "),e("h2",{attrs:{id:"render-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render-view"}},[t._v("#")]),t._v(" Render View")]),t._v(" "),e("p",[t._v("To utilize the "),e("code",[t._v("view_render_event()")]),t._v(" function effectively, follow these steps:")]),t._v(" "),e("p",[t._v("You can use "),e("code",[t._v("view_render_event()")]),t._v(" within your Blade templates (*.blade.php) to specify points where content should be injected. Here’s an example:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("shop")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("layouts")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("view_render_event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bagisto.shop.home.content.before'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("view_render_event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bagisto.shop.home.content.after'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("shop")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("layouts")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("In this example "),e("code",[t._v("bagisto.shop.home.content.before")]),t._v(" and "),e("code",[t._v("bagisto.shop.home.content.after")]),t._v(" are custom event names that denote where content should be injected before and after the home_page_content section, respectively.")]),t._v(" "),e("h3",{attrs:{id:"listening-to-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listening-to-events"}},[t._v("#")]),t._v(" Listening to Events")]),t._v(" "),e("p",[t._v("To handle these events and inject content dynamically, you need to listen to them in your application’s event system (typically in the "),e("code",[t._v("EventServiceProvider")]),t._v(").")]),t._v(" "),e("p",[t._v("Open your "),e("code",[t._v("EventServiceProvider.php")]),t._v(" file located in "),e("code",[t._v("app/Providers")]),t._v(" or similar directory.")]),t._v(" "),e("p",[t._v("In the "),e("code",[t._v("boot()")]),t._v(" method of your "),e("code",[t._v("EventServiceProvider")]),t._v(", add event listeners as follows:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CustomExtension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CustomExtensionServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Register any events for your application.\n     *\n     * @return void\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bagisto.shop.home.content.before'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$viewRenderEventManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$viewRenderEventManager")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTemplate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'path/to/before_content_template.blade.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bagisto.shop.home.content.after'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$viewRenderEventManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$viewRenderEventManager")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTemplate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'path/to/after_content_template.blade.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("Replace "),e("code",[t._v("'path/to/before_content_template.blade.php'")]),t._v(" and "),e("code",[t._v("'path/to/after_content_template.blade.php'")]),t._v(" with the actual paths to the Blade template files you want to inject.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Make sure that you have registered the "),e("strong",[e("code",[t._v("EventServiceProvider")])]),t._v(" in your own service provider.")])]),t._v(" "),e("h3",{attrs:{id:"implementation-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[t._v("#")]),t._v(" Implementation Details")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("$viewRenderEventManager->addTemplate()")]),t._v(": This method adds the specified template file to the rendering queue for the corresponding event. When the event is triggered during template rendering, Bagisto will include the specified template's content at the designated injection point.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Event Handling")]),t._v(": Ensure that you properly handle the events within your application’s event flow. This involves registering listeners correctly in EventServiceProvider and ensuring that the templates being injected are structured and formatted according to your application's requirements.")])])]),t._v(" "),e("h3",{attrs:{id:"considerations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#considerations"}},[t._v("#")]),t._v(" Considerations")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("Integration")]),t._v(": Integrate this functionality carefully into your Bagisto application to maintain coherence and readability of your codebase")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Customization")]),t._v(": Customize event names ("),e("code",[t._v("'bagisto.shop.home.content.before'")]),t._v(", "),e("code",[t._v("'bagisto.shop.home.content.after'")]),t._v(") and template paths according to your specific application needs and structure.")])])]),t._v(" "),e("p",[t._v("By following these steps, you can effectively leverage the "),e("code",[t._v("view_render_event()")]),t._v(" function in Bagisto to dynamically inject content into template sections, enhancing flexibility and customization options within your application.")])])}),[],!1,null,null,null);e.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{558:function(a,e,t){"use strict";t.r(e);var s=t(10),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"localization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[a._v("#")]),a._v(" Localization")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#publishing-the-language-files"}},[a._v("Publishing the Language Files")])]),e("li",[e("a",{attrs:{href:"#configuring-the-locale"}},[a._v("Configuring the Locale")])]),e("li",[e("a",{attrs:{href:"#create-a-new-locale"}},[a._v("Create a new Locale")]),e("ul",[e("li",[e("a",{attrs:{href:"#directory-structure"}},[a._v("Directory Structure")])]),e("li",[e("a",{attrs:{href:"#writing-a-translation-in-app-php"}},[a._v("Writing a Translation in app.php")])])])]),e("li",[e("a",{attrs:{href:"#load-translation-from-package"}},[a._v("Load Translation from Package")]),e("ul",[e("li",[e("a",{attrs:{href:"#update-the-service-provider"}},[a._v("Update the Service Provider")])]),e("li",[e("a",{attrs:{href:"#use-translations-in-blade-files"}},[a._v("Use Translations in Blade Files")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("Laravel's localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application.")]),a._v(" "),e("p",[a._v("Language strings may be stored in files within the application's lang directory. Within this directory, there may be subdirectories for each language supported by the application. This is the approach Laravel uses to manage translation strings for built-in Laravel features such as validation error messages:")]),a._v(" "),e("p",[a._v("To learn in detail about Localization, you can visit the Laravel documentation "),e("a",{attrs:{href:"https://laravel.com/docs/11.x/localization",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"publishing-the-language-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishing-the-language-files"}},[a._v("#")]),a._v(" Publishing the Language Files")]),a._v(" "),e("p",[a._v("By default, the Laravel application skeleton does not include the lang directory. If you would like to customize Laravel's language files or create your own, you should scaffold the lang directory via the lang:publish Artisan command. The lang:publish command will create the lang directory in your application and publish the default set of language files used by Laravel:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("php artisan lang:publish\n")])])]),e("h2",{attrs:{id:"configuring-the-locale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-locale"}},[a._v("#")]),a._v(" Configuring the Locale")]),a._v(" "),e("p",[a._v("The default language for your application is stored in the "),e("code",[a._v("config/app.php")]),a._v(" configuration file's "),e("code",[a._v("locale")]),a._v(" configuration option, which is typically set using the "),e("code",[a._v("APP_LOCALE")]),a._v(" environment variable. You are free to modify this value to suit the needs of your application.")]),a._v(" "),e("p",[a._v("You may also configure a "),e("code",[a._v('"fallback language"')]),a._v(", which will be used when the default language does not contain a given translation string. Like the default language, the fallback language is also configured in the "),e("code",[a._v("config/app.php")]),a._v(" configuration file, and its value is typically set using the APP_FALLBACK_LOCALE environment variable.")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[a._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n  |--------------------------------------------------------------------------\n  | Application Locale Configuration\n  |--------------------------------------------------------------------------\n  |\n  | The application locale determines the default locale that will be used\n  | by the translation service provider. You are free to set this value\n  | to any of the locales which will be supported by the application.\n  |\n  */")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'locale'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'APP_LOCALE'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'en'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n  |--------------------------------------------------------------------------\n  | Application Fallback Locale\n  |--------------------------------------------------------------------------\n  |\n  | The fallback locale determines the locale to use when the current one\n  | is not available. You may change the value to correspond to any of\n  | the language folders that are provided through your application.\n  |\n  */")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'fallback_locale'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'en'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),e("h2",{attrs:{id:"create-a-new-locale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-locale"}},[a._v("#")]),a._v(" Create a new Locale")]),a._v(" "),e("p",[a._v("To support localization in your package, you need to create language files. Follow the steps below to set up a language file for English translations.")]),a._v(" "),e("h4",{attrs:{id:"create-the-lang-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-lang-folder"}},[a._v("#")]),a._v(" Create the "),e("code",[a._v("lang")]),a._v(" Folder")]),a._v(" "),e("ul",[e("li",[a._v("Navigate to the "),e("code",[a._v("packages/Webkul/Blog/src/Resources")]),a._v(" directory.")]),a._v(" "),e("li",[a._v("Create a folder named "),e("code",[a._v("lang")]),a._v(".")])]),a._v(" "),e("h4",{attrs:{id:"create-language-code-folders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-language-code-folders"}},[a._v("#")]),a._v(" Create Language Code Folders")]),a._v(" "),e("ul",[e("li",[a._v("Inside the "),e("code",[a._v("lang")]),a._v(" folder, create different folders for each language you want to support. For example, you can create folders for English ("),e("code",[a._v("en")]),a._v("), Hindi ("),e("code",[a._v("hi")]),a._v("), etc.")]),a._v(" "),e("li",[a._v("For now, let's create a folder named "),e("code",[a._v("en")]),a._v(" to represent English.")])]),a._v(" "),e("h4",{attrs:{id:"create-the-app-php-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-app-php-file"}},[a._v("#")]),a._v(" Create the "),e("code",[a._v("app.php")]),a._v(" File")]),a._v(" "),e("ul",[e("li",[a._v("Inside the "),e("code",[a._v("en")]),a._v(" folder, create a file named "),e("code",[a._v("app.php")]),a._v(" for language translations.")])]),a._v(" "),e("h3",{attrs:{id:"directory-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[a._v("#")]),a._v(" Directory Structure")]),a._v(" "),e("p",[a._v("The updated directory structure will look like this:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("└── packages\n    └── Webkul\n        └── Blog\n            └── src\n                ├── ...\n                └── Resources\n                    ├── ...\n                    └── lang\n                        └── en\n                            └── app.php\n")])])]),e("h3",{attrs:{id:"writing-a-translation-in-app-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-translation-in-app-php"}},[a._v("#")]),a._v(" Writing a Translation in "),e("code",[a._v("app.php")])]),a._v(" "),e("p",[a._v("To add translations for your package, you can edit the "),e("code",[a._v("app.php")]),a._v(" file located in the language folder ("),e("code",[a._v("en")]),a._v(" in this case). Below is an example of how you can define translations:")]),a._v(" "),e("h4",{attrs:{id:"open-the-app-php-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-the-app-php-file"}},[a._v("#")]),a._v(" Open the "),e("code",[a._v("app.php")]),a._v(" File")]),a._v(" "),e("ul",[e("li",[a._v("Navigate to "),e("code",[a._v("packages/Webkul/Blog/src/Resources/lang/en")]),a._v(".")]),a._v(" "),e("li",[a._v("Open the "),e("code",[a._v("app.php")]),a._v(" file.")])]),a._v(" "),e("h4",{attrs:{id:"add-the-translation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-the-translation"}},[a._v("#")]),a._v(" Add the Translation")]),a._v(" "),e("ul",[e("li",[a._v("Inside "),e("code",[a._v("app.php")]),a._v(", define your translations as an associative array. For example:")])]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'admin'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'name'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'John Doe'")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),e("h2",{attrs:{id:"load-translation-from-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-translation-from-package"}},[a._v("#")]),a._v(" Load Translation from Package")]),a._v(" "),e("p",[a._v("To make translations from your package accessible, you need to register the language file in the service provider and then use them in your Blade templates.")]),a._v(" "),e("h3",{attrs:{id:"update-the-service-provider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-the-service-provider"}},[a._v("#")]),a._v(" Update the Service Provider")]),a._v(" "),e("ul",[e("li",[a._v("Open the "),e("code",[a._v("BlogServiceProvider.php")]),a._v(" file located in "),e("code",[a._v("packages/Webkul/Blog/src/Providers")]),a._v(".")]),a._v(" "),e("li",[a._v("Add the following code to the "),e("code",[a._v("boot")]),a._v(" method:")])]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Blog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[a._v("BlogServiceProvider")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceProvider")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n    * Bootstrap services.\n    *\n    * @return void\n    */")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//... ")]),a._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadTranslationsFrom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'/../Resources/lang'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'blog'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),e("h4",{attrs:{id:"explanation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[a._v("#")]),a._v(" Explanation")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("This code uses "),e("code",[a._v("$this->loadTranslationsFrom")]),a._v(" to register translations from the lang directory of your package ("),e("code",[a._v("packages/ Webkul/Blog/src/Resources/lang")]),a._v(") under the namespace "),e("code",[a._v("'blog'")]),a._v(".")])]),a._v(" "),e("li",[e("p",[a._v("The "),e("code",[a._v("loadTranslationsFrom")]),a._v(" method registers translations for the "),e("code",[a._v("'blog'")]),a._v(" namespace from the specified path ("),e("code",[a._v("__DIR__ . '/../Resources/lang'")]),a._v(").")])]),a._v(" "),e("li",[e("p",[a._v("This makes translations accessible throughout your Laravel application using the "),e("code",[a._v("'blog'")]),a._v(" namespace prefix.")])])]),a._v(" "),e("h3",{attrs:{id:"use-translations-in-blade-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-translations-in-blade-files"}},[a._v("#")]),a._v(" Use Translations in Blade Files")]),a._v(" "),e("p",[a._v("In your Blade templates ("),e("code",[a._v(".blade.php")]),a._v(" files), you can use the "),e("code",[a._v("@lang")]),a._v(" helper function to retrieve translations. Use the namespace 'blog' followed by the translation key. For example:")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[a._v("@lang('blog::app.admin.name')\n")])])]),e("h4",{attrs:{id:"explanation-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation-2"}},[a._v("#")]),a._v(" Explanation")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("The "),e("code",[a._v("@lang('blog::app.admin.name')")]),a._v(" syntax fetches the translation for "),e("code",[a._v("'name'")]),a._v(" under the "),e("code",[a._v("'admin'")]),a._v(" section from your package's translation file ("),e("code",[a._v("app.php")]),a._v(").")])]),a._v(" "),e("li",[e("p",[a._v("Replace "),e("code",[a._v("'app.admin.name'")]),a._v(" with your actual translation keys to use different translations as needed in your application.")])])]),a._v(" "),e("p",[a._v("By following these steps, you've effectively loaded translations from your package and integrated them into your Laravel application's Blade templates. This allows you to maintain language-specific content and support localization within your package.")])])}),[],!1,null,null,null);e.default=n.exports}}]);
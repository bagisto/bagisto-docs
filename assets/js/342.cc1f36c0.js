(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{742:function(e,t,s){"use strict";s.r(t);var a=s(10),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#server-configuration"}},[e._v("Server Configuration")])]),t("li",[t("a",{attrs:{href:"#php-extensions"}},[e._v("PHP Extensions")])]),t("li",[t("a",{attrs:{href:"#php-configuration"}},[e._v("PHP Configuration")])]),t("li",[t("a",{attrs:{href:"#supported-database-servers"}},[e._v("Supported Database Servers")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"server-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration"}},[e._v("#")]),e._v(" Server Configuration")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Server")]),e._v(": Apache 2 or NGINX")]),e._v(" "),t("li",[t("strong",[e._v("RAM")]),e._v(": 4GB or higher")]),e._v(" "),t("li",[t("strong",[e._v("Node")]),e._v(": 18.12.0 LTS or higher")]),e._v(" "),t("li",[t("strong",[e._v("PHP")]),e._v(": 8.1 or higher")]),e._v(" "),t("li",[t("strong",[e._v("Composer")]),e._v(": 2.5 or higher")])]),e._v(" "),t("h2",{attrs:{id:"php-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-extensions"}},[e._v("#")]),e._v(" PHP Extensions")]),e._v(" "),t("p",[e._v("Ensure the following extensions are installed and enabled. You can check using the "),t("strong",[t("code",[e._v("phpinfo()")])]),e._v(" page or the "),t("strong",[t("code",[e._v("php -m")])]),e._v(" command.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("php-intl extension")]),e._v(": This extension is required for internationalization support in Bagisto.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("php-gd extension")]),e._v(": The "),t("strong",[t("code",[e._v("php-gd")])]),e._v(" extension must be properly installed to ensure correct image functionality in the project. If not installed correctly, image-related features may not work as expected.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("It is important to ensure proper installation of the "),t("strong",[t("code",[e._v("php-gd")])]),e._v(" extension to avoid any issues with image manipulation in Bagisto.")])])])]),e._v(" "),t("h2",{attrs:{id:"php-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-configuration"}},[e._v("#")]),e._v(" PHP Configuration")]),e._v(" "),t("p",[e._v("Open your "),t("strong",[t("code",[e._v("php.ini")])]),e._v(" file and modify the following settings.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("memory_limit")]),e._v(": Set the "),t("strong",[t("code",[e._v("memory_limit")])]),e._v(" directive to "),t("strong",[t("code",[e._v("4G")])]),e._v(" or higher to ensure sufficient memory allocation for the application.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("max_execution_time")]),e._v(": Adjust the "),t("strong",[t("code",[e._v("max_execution_time")])]),e._v(" directive to "),t("strong",[t("code",[e._v("360")])]),e._v(" or higher. This value determines the maximum time (in seconds) a script is allowed to run. Increasing this value ensures that longer operations, such as import/export processes, can be completed successfully.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("date.timezone")]),e._v(": Set the "),t("strong",[t("code",[e._v("date.timezone")])]),e._v(" directive to your specific timezone. For example, "),t("strong",[t("code",[e._v("Asia/Kolkata")])]),e._v(". This ensures that date and time-related functions work accurately based on the specified timezone.")])])]),e._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("memory_limit")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("4G")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("max_execution_time")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("360")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("date.timezone")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Asia/Kolkata <- Change this to your own timezone.")]),e._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Remember to restart your web server")]),e._v(" "),t("p",[e._v("Whenever you make changes to the PHP configuration file, be sure to restart Apache or NGINX to apply the modifications.")])]),e._v(" "),t("h2",{attrs:{id:"supported-database-servers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-database-servers"}},[e._v("#")]),e._v(" Supported Database Servers")]),e._v(" "),t("p",[e._v("Bagisto supports the following database servers:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("MySQL")]),e._v(": Version 8.0.32 or higher is recommended for optimal performance and compatibility.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Database Collation")]),e._v(": The recommended collation for the database is "),t("strong",[t("code",[e._v("utf8mb4_unicode_ci")])]),e._v(", which ensures proper handling of Unicode characters and multilingual support.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
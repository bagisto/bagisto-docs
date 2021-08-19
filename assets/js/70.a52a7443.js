(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{558:function(t,a,s){"use strict";s.r(a);var e=s(28),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("h2",{attrs:{id:"use-our-gui-installer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-our-gui-installer"}},[t._v("#")]),t._v(" Use Our GUI Installer")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://bagisto.com/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Bagisto"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Extract the contents of the zip file.")]),t._v(" "),s("li",[t._v("Point your HTTP server to the public/ directory of the project and open it on your browser."),s("br"),t._v("For example:\n"),s("ul",[s("li",[s("code",[t._v("https://example.com/")])])])]),t._v(" "),s("li",[t._v("This will detect Bagisto and start the installer.")])]),t._v(" "),s("h2",{attrs:{id:"install-bagisto-using-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-bagisto-using-composer"}},[t._v("#")]),t._v(" Install Bagisto Using "),s("em",[t._v("composer")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("composer create-project bagisto/bagisto\n")])])]),s("ul",[s("li",[t._v("Start the installation script.")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan bagisto:install\n")])])]),s("h3",{attrs:{id:"features-of-this-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features-of-this-command"}},[t._v("#")]),t._v(" Features of this command")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("It will check if the .env file is already created or not."),s("br"),t._v(" "),s("strong",[t._v("Only if the .env file already exists then please provide the following details")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-   APP_TIMEZONE\n-   APP_LOCALE\n-   LOG_CHANNEL\n-   APP_CURRENCY\n-   DB_DATABASE\n-   DB_USERNAME\n-   DB_PASSWORD\n")])])]),s("ul",[s("li",[t._v("To start the installation, provide the details of the following command prompts:")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("-  Please "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" the default locale or press enter to "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("continue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": \n-  Please enter the default timezone "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Asia/Kolkata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n-  Please enter the default currency "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("USD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": \n-  What is the database name to be used by Bagisto?: \n-  What is your database username?:\n-  What is your database password?:\n")])])]),s("h1",{attrs:{id:"start-using-bagisto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-using-bagisto"}},[t._v("#")]),t._v(" Start Using Bagisto")]),t._v(" "),s("h3",{attrs:{id:"on-a-production-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-a-production-server"}},[t._v("#")]),t._v(" On a production server")]),t._v(" "),s("ul",[s("li",[t._v("Open your domain on the browser."),s("br"),t._v(" For example:\n"),s("ul",[s("li",[s("code",[t._v("https://example.com/")])])])])]),t._v(" "),s("h3",{attrs:{id:"on-your-local-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-your-local-device"}},[t._v("#")]),t._v(" On your local device")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan serve\n")])])]),s("h3",{attrs:{id:"how-to-log-in-to-your-domain-as-an-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-log-in-to-your-domain-as-an-admin"}},[t._v("#")]),t._v(" How to log in to your domain as an admin")]),t._v(" "),s("p",[t._v("Go to "),s("code",[t._v("https://example.com/admin/")]),t._v(", in case "),s("code",[t._v("php artisan bagisto:install")]),t._v(" is opted, use the following credentials.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("email: admin@example.com\npassword: admin123\n")])])]),s("h3",{attrs:{id:"how-to-log-in-to-your-domain-as-a-customer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-log-in-to-your-domain-as-a-customer"}},[t._v("#")]),t._v(" How to log in to your domain as a customer")]),t._v(" "),s("p",[t._v("You can directly register on "),s("code",[t._v("https://example.com/customer/register")]),t._v(" as a customer, and then log in to your domain.")])])}),[],!1,null,null,null);a.default=o.exports}}]);
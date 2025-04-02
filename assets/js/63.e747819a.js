(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{280:function(t,e,s){t.exports=s.p+"assets/img/limiting-error-messages.5887bc7c.png"},772:function(t,e,s){"use strict";s.r(e);var a=s(10),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"best-security-practices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-security-practices"}},[t._v("#")]),t._v(" Best Security Practices")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#software-updates"}},[t._v("Software Updates")])]),e("li",[e("a",{attrs:{href:"#limiting-error-messages"}},[t._v("Limiting Error Messages")])]),e("li",[e("a",{attrs:{href:"#limiting-admin-access"}},[t._v("Limiting Admin Access")])]),e("li",[e("a",{attrs:{href:"#restricting-unnecessary-files"}},[t._v("Restricting Unnecessary Files")])]),e("li",[e("a",{attrs:{href:"#restricting-php-execution-inside-storage"}},[t._v("Restricting PHP Execution Inside Storage")])]),e("li",[e("a",{attrs:{href:"#server-hardening"}},[t._v("Server Hardening")])]),e("li",[e("a",{attrs:{href:"#strong-passwords"}},[t._v("Strong Passwords")])]),e("li",[e("a",{attrs:{href:"#implementation-of-http-security-headers"}},[t._v("Implementation of HTTP Security Headers")]),e("ul",[e("li",[e("a",{attrs:{href:"#http-strict-transport-security-hsts"}},[t._v("HTTP Strict Transport Security (HSTS)")])]),e("li",[e("a",{attrs:{href:"#cross-site-scripting-protection-x-xss-protection"}},[t._v("Cross-Site Scripting Protection (X-XSS Protection)")])]),e("li",[e("a",{attrs:{href:"#x-frame-options​"}},[t._v("X-Frame-Options​")])]),e("li",[e("a",{attrs:{href:"#x-content-type-options​"}},[t._v("X-Content-Type-Options​")])]),e("li",[e("a",{attrs:{href:"#content-security-policy-csp"}},[t._v("Content Security Policy (CSP)")])]),e("li",[e("a",{attrs:{href:"#continuous-logging-and-monitoring"}},[t._v("Continuous Logging And Monitoring")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"software-updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#software-updates"}},[t._v("#")]),t._v(" Software Updates")]),t._v(" "),e("p",[t._v("To ensure the security of your system, follow these best practices:")]),t._v(" "),e("ul",[e("li",[t._v("Use HTTPS to encrypt communication. Google now considers HTTPS as a ranking factor.")]),t._v(" "),e("li",[t._v("Keep all software on the server up-to-date, including Bagisto, the database, Adminer/phpMyAdmin, Apache, Redis, etc.")]),t._v(" "),e("li",[t._v("Regularly update the server operating system to apply available security patches.")]),t._v(" "),e("li",[t._v("Manage files only through secure communication protocols like SSH, SFTP, or HTTPS. Disable FTP.")]),t._v(" "),e("li",[t._v("Use the "),e("strong",[e("code",[t._v(".htaccess")])]),t._v(" file to protect system files when using the Apache web server.")]),t._v(" "),e("li",[t._v("Disable unused ports and stop unnecessary services running on the server.")]),t._v(" "),e("li",[t._v("Restrict access to the admin panel by allowing only specific IP addresses and enforcing two-factor authorization for admin logins.")]),t._v(" "),e("li",[t._v("Ensure the use of strong and unique passwords.")]),t._v(" "),e("li",[t._v("Configure and update the firewall properly to secure the connection between payment card data and the public network.")])]),t._v(" "),e("h2",{attrs:{id:"limiting-error-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limiting-error-messages"}},[t._v("#")]),t._v(" Limiting Error Messages")]),t._v(" "),e("p",[t._v("To limit the exposure of sensitive information in error messages, follow these steps:")]),t._v(" "),e("ul",[e("li",[t._v("Edit your Apache configuration file to avoid displaying server and operating system details.")]),t._v(" "),e("li",[t._v("Set "),e("strong",[e("code",[t._v("ServerSignature")])]),t._v(" to "),e("strong",[e("code",[t._v("Off")])]),t._v(" (by default, it is "),e("strong",[e("code",[t._v("On")])]),t._v(").")]),t._v(" "),e("li",[t._v("Add "),e("strong",[e("code",[t._v("ServerTokens Prod")])]),t._v(" to display Apache only as the product.")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Screenshot")]),t._v(" "),e("p",[e("img",{attrs:{src:s(280),alt:"limiting-error-messages"}})])]),t._v(" "),e("h2",{attrs:{id:"limiting-admin-access"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limiting-admin-access"}},[t._v("#")]),t._v(" Limiting Admin Access")]),t._v(" "),e("p",[t._v("To restrict access to the admin area, modify the "),e("strong",[e("code",[t._v(".htaccess")])]),t._v(" file with the following code:")]),t._v(" "),e("div",{staticClass:"language-apacheconf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-apacheconf"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[t._v("RewriteEngine")]),t._v(" On\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[t._v("RewriteCond")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("%{REQUEST_URI}")]),t._v(" .*/admin\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[t._v("RewriteCond")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("%{REMOTE_ADDR}")]),t._v(" !=<IP address>\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[t._v("RewriteCond")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("%{REMOTE_ADDR}")]),t._v(" !=<IP address>\n"),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[t._v("RewriteRule")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v(" ^(.*)$")]),t._v(" - "),e("span",{pre:!0,attrs:{class:"token directive-flags keyword"}},[t._v("[R=403,L]")]),t._v("\n")])])]),e("p",[t._v('Ensure that there are no accessible development leftovers on the server, such as "log files," ".git directories," "database dumps," or "zip files."')]),t._v(" "),e("h2",{attrs:{id:"restricting-unnecessary-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restricting-unnecessary-files"}},[t._v("#")]),t._v(" Restricting Unnecessary Files")]),t._v(" "),e("p",[t._v("To restrict access to unnecessary files, add the following code to your "),e("strong",[e("code",[t._v(".htaccess")])]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-apacheconf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-apacheconf"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FilesMatch")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\.(git|zip|tar|sql)$"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[t._v("Require")]),t._v(" all denied\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("FilesMatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Consider using a Web Application Firewall (WAF) to analyze traffic and detect suspicious patterns, such as credit card information being sent to attackers. Additionally, restrict public access to only ports 80 (HTTP) and 443 (HTTPS), while blocking other ports.")]),t._v(" "),e("h2",{attrs:{id:"restricting-php-execution-inside-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restricting-php-execution-inside-storage"}},[t._v("#")]),t._v(" Restricting PHP Execution Inside Storage")]),t._v(" "),e("p",[t._v("To restrict PHP execution inside the storage directory, modify your Apache configuration file:")]),t._v(" "),e("div",{staticClass:"language-apacheconf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-apacheconf"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Directory")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/www/bagisto/public/storage/"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FilesMatch")]),e("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\.php$"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive-inline property"}},[t._v("Require")]),t._v(" all denied\n    "),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("FilesMatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    php_flag engine off\n"),e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token directive-block tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Don't forget to restart Apache after making these changes.")]),t._v(" "),e("h2",{attrs:{id:"server-hardening"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-hardening"}},[t._v("#")]),t._v(" Server Hardening")]),t._v(" "),e("p",[t._v("Take the following measures to harden your server:")]),t._v(" "),e("ul",[e("li",[t._v("Use the "),e("strong",[e("code",[t._v("mod_security")])]),t._v(" module to detect and prevent intrusions.")]),t._v(" "),e("li",[t._v("Implement the "),e("strong",[e("code",[t._v("mod_passive")])]),t._v(" module to prevent brute force attacks.")]),t._v(" "),e("li",[t._v("Allow only specific users to log in.")]),t._v(" "),e("li",[t._v("Disable login for users with empty passwords.")]),t._v(" "),e("li",[t._v("Review and configure iptable rules to prevent unauthorized access and activity.")]),t._v(" "),e("li",[t._v("Regularly back up important files and store them remotely in a secure environment.")])]),t._v(" "),e("h2",{attrs:{id:"strong-passwords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strong-passwords"}},[t._v("#")]),t._v(" Strong Passwords")]),t._v(" "),e("p",[t._v("Ensure the use of strong and unique passwords and encourage periodic password changes. You can use a password generator tool ("),e("a",{attrs:{href:"https://passwords-generator.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Password Generator"),e("OutboundLink")],1),t._v(") to create strong passwords. Limit access to the Bagisto admin")]),t._v(" "),e("p",[t._v("panel by updating the whitelist with authorized IP addresses.")]),t._v(" "),e("h2",{attrs:{id:"implementation-of-http-security-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-http-security-headers"}},[t._v("#")]),t._v(" Implementation of HTTP Security Headers")]),t._v(" "),e("p",[t._v("Implementing the following HTTP security headers enhances web security:")]),t._v(" "),e("h3",{attrs:{id:"http-strict-transport-security-hsts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-strict-transport-security-hsts"}},[t._v("#")]),t._v(" HTTP Strict Transport Security (HSTS)")]),t._v(" "),e("p",[t._v("Set the "),e("strong",[e("code",[t._v("Strict-Transport-Security")])]),t._v(" response header to instruct the browser to only access the application using HTTPS:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Strict-Transport-Security: max-age=<expire-time>\n")])])]),e("h3",{attrs:{id:"cross-site-scripting-protection-x-xss-protection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cross-site-scripting-protection-x-xss-protection"}},[t._v("#")]),t._v(" Cross-Site Scripting Protection (X-XSS Protection)")]),t._v(" "),e("p",[t._v("Set the "),e("strong",[e("code",[t._v("X-XSS-Protection")])]),t._v(" response header to enable browsers to detect and prevent cross-site scripting (XSS) attacks:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("X-XSS-Protection: 1; mode=block\n")])])]),e("h3",{attrs:{id:"x-frame-options​"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options​"}},[t._v("#")]),t._v(" X-Frame-Options​")]),t._v(" "),e("p",[t._v("The "),e("strong",[e("code",[t._v("X-Frame-Options")])]),t._v(" response header protects applications against clickjacking. It specifies whether the content can be displayed within frames:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("X-Frame-Options: deny\n")])])]),e("h3",{attrs:{id:"x-content-type-options​"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x-content-type-options​"}},[t._v("#")]),t._v(" X-Content-Type-Options​")]),t._v(" "),e("p",[t._v("The "),e("strong",[e("code",[t._v("X-Content-Type-Options")])]),t._v(" response header forces the browser to disable MIME sniffing, preventing MIME sniffing vulnerabilities:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("X-Content-Type-Options: nosniff\n")])])]),e("h3",{attrs:{id:"content-security-policy-csp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy-csp"}},[t._v("#")]),t._v(" Content Security Policy (CSP)")]),t._v(" "),e("p",[t._v("Implement a Content Security Policy (CSP) response header to control resources that can be loaded in users' browsers. CSP helps detect and mitigate attacks such as XSS and clickjacking.")]),t._v(" "),e("h3",{attrs:{id:"continuous-logging-and-monitoring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#continuous-logging-and-monitoring"}},[t._v("#")]),t._v(" Continuous Logging And Monitoring")]),t._v(" "),e("p",[t._v("Maintain continuous logging and monitoring of all network access and cardholder data activities. Keep an eye out for large volume orders of a single item from new customers, a series of orders shipped to the same address but using different payment methods.")]),t._v(" "),e("p",[t._v("By implementing these best security practices, you can enhance the security of your system and protect it from potential threats.")])])}),[],!1,null,null,null);e.default=r.exports}}]);
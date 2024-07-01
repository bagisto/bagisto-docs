(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{377:function(t,s,a){t.exports=a.p+"assets/img/product-index.bc0a70c6.png"},528:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"elasticsearch-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-configuration"}},[t._v("#")]),t._v(" Elasticsearch Configuration")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#environment-setup"}},[t._v("Environment Setup")])]),s("li",[s("a",{attrs:{href:"#configuration-setup"}},[t._v("Configuration Setup")]),s("ul",[s("li",[s("a",{attrs:{href:"#default-connection"}},[t._v("Default Connection")])]),s("li",[s("a",{attrs:{href:"#available-connections"}},[t._v("Available Connections")])]),s("li",[s("a",{attrs:{href:"#api-key-authentication"}},[t._v("API Key Authentication")])]),s("li",[s("a",{attrs:{href:"#elasticsearch-cloud"}},[t._v("Elasticsearch Cloud")])]),s("li",[s("a",{attrs:{href:"#ca-bundle"}},[t._v("CA Bundle")])]),s("li",[s("a",{attrs:{href:"#retries"}},[t._v("Retries")])])])]),s("li",[s("a",{attrs:{href:"#indexing"}},[t._v("Indexing")])]),s("li",[s("a",{attrs:{href:"#checking-indexes"}},[t._v("Checking Indexes")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Elasticsearch is a powerful distributed search and analytics engine, built on Apache Lucene, designed for scalability and real-time data processing. It excels at fast full-text search, complex querying, and handling large volumes of data with high availability. Elasticsearch is widely used for applications requiring robust search capabilities, from real-time logging and analytics to e-commerce product search and personalized recommendations.")]),t._v(" "),s("p",[t._v("In this section, we will explain how to configure Elasticsearch for indexing products from the database.")]),t._v(" "),s("h2",{attrs:{id:"environment-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-setup"}},[t._v("#")]),t._v(" Environment Setup")]),t._v(" "),s("p",[t._v("Before we proceed, make sure you have "),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch"),s("OutboundLink")],1),t._v(" installed on your system. By default, Elasticsearch uses port "),s("strong",[s("code",[t._v("9200")])]),t._v(". We will be using the same port for our configuration.")]),t._v(" "),s("p",[t._v("To verify if Elasticsearch is installed successfully on your system, open your browser and navigate to "),s("strong",[s("code",[t._v("http://localhost:9200")])]),t._v(". If you see the following output, it means Elasticsearch is installed:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webkul-pc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elasticsearch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cluster_uuid"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"suPotT8zQjCOlq9dteWKyQ"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.6.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_flavor"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_hash"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d58d0f136141f03239816a4e360a8d17b6d8f29"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_date"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-02-13T09:35:20.314882762Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build_snapshot"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lucene_version"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9.4.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum_wire_compatibility_version"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.17.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum_index_compatibility_version"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.0.0"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tagline"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You Know, for Search"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Alternatively, you can use the curl command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9200'")]),t._v("\n")])])]),s("p",[t._v("This command should return a similar JSON response, confirming Elasticsearch's availability and version details.")]),t._v(" "),s("h2",{attrs:{id:"configuration-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-setup"}},[t._v("#")]),t._v(" Configuration Setup")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This configuration is for the latest version 2.1.0")])]),t._v(" "),s("p",[t._v("To configure Elasticsearch, you can set the necessary value in the "),s("code",[t._v("config/elasticsearch.php")]),t._v(" file of your project.")]),t._v(" "),s("h3",{attrs:{id:"default-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-connection"}},[t._v("#")]),t._v(" Default Connection")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("connection")]),t._v(" key specifies the default Elasticsearch connection to use when building a client.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Here you can specify the connection to use when building a client.\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'connection'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"available-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-connections"}},[t._v("#")]),t._v(" Available Connections")]),t._v(" "),s("p",[t._v("You can define multiple Elasticsearch connections with different configurations under the connections array.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * These are the available connections parameters that you can use to connect\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hosts'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'http://localhost:9200'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_USER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pass'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_PASS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"api-key-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-key-authentication"}},[t._v("#")]),t._v(" API Key Authentication")]),t._v(" "),s("p",[t._v("You can connect with API key authentication by setting the "),s("code",[t._v("api")]),t._v(" key instead of the "),s("code",[t._v("user")]),t._v(" and "),s("code",[t._v("pass")]),t._v(" keys.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hosts'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_API_KEY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"elasticsearch-cloud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-cloud"}},[t._v("#")]),t._v(" Elasticsearch Cloud")]),t._v(" "),s("p",[t._v("You can connect to Elastic Cloud with the Cloud ID using the "),s("code",[t._v("cloud")]),t._v(" key")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cloud'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_CLOUD_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * If you are authenticating with API KEY then set user and pass as null\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api_key'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_API_KEY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * If you are authenticating with username and password then set api_key as null\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_USER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pass'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_PASS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"ca-bundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ca-bundle"}},[t._v("#")]),t._v(" CA Bundle")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("caBundle")]),t._v(" option allows you to specify the path to the CA Bundle certificate if required for SSL/TLS connections.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * If you have the http_ca.crt certificate copied during the start of Elasticsearch\n * then the path here\n *\n * @see https://www.elastic.co/guide/en/elasticsearch/client/php-api/current/connecting.html#auth-http\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'caBundle'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"retries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retries"}},[t._v("#")]),t._v(" Retries")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("retries")]),t._v(" option controls the number of times the client will retry requests. By default, it retries as many times as there are nodes in the Elasticsearch cluster.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * By default, the client will retry n times, where n = number of nodes in\n * your cluster. If you would like to disable retries, or change the number,\n * you can do so here.\n *\n * @see https://www.elastic.co/guide/en/elasticsearch/client/php-api/current/set-retries.html\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'retries'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Not")]),t._v(" "),s("p",[t._v("Below are the essential configuration details for setting up Elasticsearch in version 2.0.0")])]),t._v(" "),s("p",[t._v("To configure Elasticsearch, you can set the necessary key-value pairs in the "),s("strong",[s("code",[t._v(".env")])]),t._v(" file of your project.")]),t._v(" "),s("p",[t._v("Open the "),s("strong",[s("code",[t._v(".env")])]),t._v(" file and add the following lines:")]),t._v(" "),s("div",{staticClass:"language-env extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ELASTICSEARCH_PORT=9200\nELASTICSEARCH_HOST=localhost\n")])])]),s("p",[t._v("Save the file and run the following command to cache the configuration:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan config:cache\n")])])]),s("p",[t._v("Now your environment is set up and ready to index products.")]),t._v(" "),s("p",[t._v("If you encounter any issues, you can directly set the configuration in the "),s("strong",[s("code",[t._v("config/elasticsearch.php")])]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hosts'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'host'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'localhost'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'port'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTICSEARCH_PORT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Additional configuration options can be added here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"indexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexing"}},[t._v("#")]),t._v(" Indexing")]),t._v(" "),s("p",[t._v("After setting up the environment and configuration, new products will be automatically indexed when created.")]),t._v(" "),s("p",[t._v("To index existing products, run the following command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("php artisan indexer:index\n")])])]),s("p",[t._v("This command will index all the data from the "),s("strong",[s("code",[t._v("product_flat")])]),t._v(" table to the Elasticsearch index.")]),t._v(" "),s("h2",{attrs:{id:"checking-indexes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-indexes"}},[t._v("#")]),t._v(" Checking Indexes")]),t._v(" "),s("p",[t._v("To check if your products have been indexed successfully, open your browser and navigate to "),s("strong",[s("code",[t._v("http://localhost:9200/_cat/indices?v")])]),t._v(". You should see information about the imported index.")]),t._v(" "),s("p",[t._v("Alternatively, you can use the curl command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-X")]),t._v(" GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9200/_cat/indices?v'")]),t._v("\n")])])]),s("p",[t._v("The output will provide details about the product index:")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Output")]),t._v(" "),s("p",[s("img",{attrs:{src:a(377),alt:"Product Index Information"}})])]),t._v(" "),s("p",[t._v("By following these steps, you have successfully configured Elasticsearch and indexed your products.")])])}),[],!1,null,null,null);s.default=e.exports}}]);
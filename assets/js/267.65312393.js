(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{641:function(e,t,a){"use strict";a.r(t);var n=a(10),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indexing"}},[e._v("#")]),e._v(" Indexing")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#essential-indexers-in-bagisto"}},[e._v("Essential Indexers in Bagisto")]),t("ul",[t("li",[t("a",{attrs:{href:"#price-indexing"}},[e._v("Price Indexing")])]),t("li",[t("a",{attrs:{href:"#inventory-indexing"}},[e._v("Inventory Indexing")])]),t("li",[t("a",{attrs:{href:"#flat-indexing"}},[e._v("Flat Indexing")])]),t("li",[t("a",{attrs:{href:"#catalog-rule-indexing"}},[e._v("Catalog Rule Indexing")])]),t("li",[t("a",{attrs:{href:"#elasticsearch"}},[e._v("ElasticSearch")])])])]),t("li",[t("a",{attrs:{href:"#configuration-setup"}},[e._v("Configuration Setup")])]),t("li",[t("a",{attrs:{href:"#re-indexing"}},[e._v("Re-indexing")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("When dealing with large volumes of data and retrieving complex information like variants and prices, optimizing queries becomes a challenge.")]),e._v(" "),t("p",[e._v("Indexers create and maintain indexes, which are data structures optimized for quick retrieval of information. When data is added to a system, the indexer analyzes it and extracts key information or metadata. This metadata is then stored in the index, along with pointers to the original data.")]),e._v(" "),t("p",[e._v("By indexing data, the system can quickly locate relevant information without having to scan through every piece of data sequentially. This greatly speeds up search and retrieval operations, especially in large datasets.")]),e._v(" "),t("p",[e._v("Indexers improve the overall user experience. Users can quickly find what they're looking for, leading to increased satisfaction and productivity.")]),e._v(" "),t("h2",{attrs:{id:"essential-indexers-in-bagisto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#essential-indexers-in-bagisto"}},[e._v("#")]),e._v(" Essential Indexers in Bagisto")]),e._v(" "),t("p",[e._v("To enhance "),t("strong",[e._v("Bagisto's")]),e._v(" performance, the following indexers play a crucial role:")]),e._v(" "),t("h3",{attrs:{id:"price-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#price-indexing"}},[e._v("#")]),e._v(" Price Indexing")]),e._v(" "),t("p",[e._v("Price indexing is a crucial component of eCommerce operations, ensuring that product prices are accurately reflected across the storefront. This documentation will delve into how Bagisto handles price indexing.")]),e._v(" "),t("p",[e._v("The price indexing process in Bagisto involves updating product prices in the database whenever changes occur. This process ensures that the latest price information is reflected accurately across the storefront.")]),e._v(" "),t("h3",{attrs:{id:"inventory-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inventory-indexing"}},[e._v("#")]),e._v(" Inventory Indexing")]),e._v(" "),t("p",[e._v("Similar to price indexing, the inventory indexing process in Bagisto involves updating product quantities in the database. Whenever a product is purchased, returned, or restocked, Bagisto automatically adjusts the inventory levels accordingly. This real-time synchronization ensures that inventory information remains accurate and up to date. Ensures that all pricing rules, including catalog rules, are applied consistently and accurately across the store.")]),e._v(" "),t("h3",{attrs:{id:"flat-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flat-indexing"}},[e._v("#")]),e._v(" Flat Indexing")]),e._v(" "),t("p",[e._v("Flat indexing in Bagisto is a vital mechanism designed to enhance the performance and efficiency of product data retrieval.\nThe indexer processes products in batches, which is efficient for handling large datasets without overwhelming the system.\nIt manages a set of fillable attribute codes that are essential during the creation of the flat index. The flat indexer takes into account various channels and locales, ensuring that product data is accurately indexed for different market segments.  A predefined list of attribute codes, such as "),t("code",[e._v("sku")]),e._v(", "),t("code",[e._v("name")]),e._v(", "),t("code",[e._v("price")]),e._v(", "),t("code",[e._v("weight")]),e._v(", and "),t("code",[e._v("status")]),e._v(", that can be populated during the indexing process.\nBy default, the Flat Indexer reindexes products based on product creation or update events. However, there are scenarios where you might need to reindex the flat index in response to changes in channels or locales. In such cases, you can manually trigger the re-indexing process to ensure that the flat tables reflect the latest channel and locale updates.")]),e._v(" "),t("h3",{attrs:{id:"catalog-rule-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#catalog-rule-indexing"}},[e._v("#")]),e._v(" Catalog Rule Indexing")]),e._v(" "),t("p",[e._v("Catalog rule indexing in Bagisto ensures that product prices are updated based on any changes to catalog rules, such as offers expiring or being updated. To maintain accurate pricing, Bagisto schedules the catalog rule indexer to run daily. This scheduled task ensures that any modifications to catalog rules are promptly applied to the product prices.")]),e._v(" "),t("p",[e._v("The catalog rule indexing process is set to execute at 00:01 every day. The product prices are consistently recalculated and updated based on the current catalog rules. This automatic re-indexing guarantees that any changes in promotional offers, discounts, or other pricing rules are reflected in the product listings without any manual intervention.")]),e._v(" "),t("h3",{attrs:{id:"elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" ElasticSearch")]),e._v(" "),t("p",[e._v("As Elastic is designed to handle large amounts of data and provide fast and scalable search capabilities, "),t("strong",[e._v("Bagisto")]),e._v(" leverages its capabilities to index all products, thereby significantly enhancing the search functionality.")]),e._v(" "),t("h2",{attrs:{id:"configuration-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-setup"}},[e._v("#")]),e._v(" Configuration Setup")]),e._v(" "),t("p",[e._v("To configure Elasticsearch, please refer to the "),t("a",{attrs:{href:"https://devdocs.bagisto.com/2.x/advanced/indexing-products-to-elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration Setup"),t("OutboundLink")],1),e._v(" documentation.")]),e._v(" "),t("h2",{attrs:{id:"re-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#re-indexing"}},[e._v("#")]),e._v(" Re-indexing")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Re-indexCommands")]),e._v(" console command is responsible for re-indexing data within Bagisto, facilitating efficient data retrieval and search functionality. This command offers flexibility in selecting specific indexers and re-indexing modes to suit varying requirements.")]),e._v(" "),t("p",[e._v("By default, re-indexing is executed at the scheduled time or based on specific events, such as product creation or updates. However, there may be situations where you need to manually trigger re-indexing. This can be done using the following commands:")]),e._v(" "),t("h4",{attrs:{id:"command-signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-signature"}},[e._v("#")]),e._v(" Command Signature")]),e._v(" "),t("p",[e._v("The command "),t("code",[e._v("php artisan indexer:index")]),e._v(" in Bagisto is used to manage the re-indexing of various indexers. Here is a detailed description of its usage:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan indexer:index "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("--type"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("--mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[t("p",[t("strong",[e._v("--type")]),e._v(": Specifies the type of indexers to reindex.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("--mode")]),e._v(": Specifies the re-indexing mode, either "),t("code",[e._v("full")]),e._v(" for full re-indexing or selective for "),t("code",[e._v("selective")]),e._v(" re-indexing (default).")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Full Reindexing for All Types")])])])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan indexer:index "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("full\n")])])]),t("p",[e._v("This command performs a full re-indexing for all indexers by default.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Selective Re-indexing")])])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("php artisan indexer:index "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("price\n")])])]),t("p",[e._v("This command performs selective re-indexing specifically for the price indexer.")]),e._v(" "),t("p",[e._v("Price and price rule indexing are scheduled to re-index at a specific time each day to ensure that the latest pricing information is accurately reflected in searches and displays. The following commands are scheduled to run daily at 00:01 AM:")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$schedule")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'indexer:index --type=price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dailyAt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'00:01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$schedule")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'product:price-rule:index'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dailyAt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'00:01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
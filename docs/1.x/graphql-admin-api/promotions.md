## Catalog Rules

In this section, we will see all the APIs which are related to Catalog Rules.

### 1. Get All Catalog Rules

You can get all the Catalog Rules from the Bagisto store. You can achieve this job by using the `Catalog Rules` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: You can pass all the related fileds that you want in response.

- Query
  ~~~query
    query catalogRules {
      catalogRules {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          name
          description
          startsFrom
          endsTill
          status
          conditionType
          conditions
          endOtherRules
          actionType
          discountAmount
          sortOrder
          createdAt
          updatedAt
          channels {
            id
            code
            name
            description
            theme
            homePageContent
            footerContent
            hostname
            defaultLocaleId
            baseCurrencyId
            rootCategoryId
            homeSeo
            locales {
              id
              name
              code
              direction
            }
            defaultLocale
            currencies {
              id
              name
              code
              symbol
            }
            inventorySources {
              id
              code
              name
              description
              contactName
              contactEmail
              contactNumber
              contactFax
              country
              state
              city
              street
              postcode
              priority
              latitude
              longitude
              status
            }
            baseCurrency
            rootCategory
            logoUrl
            faviconUrl
          }
          customerGroups {
            id
            name
            code
            isUserDefined
            createdAt
            updatedAt
          }
          catalogRuleProducts {
            id
            startsFrom
            endsTill
            discountAmount
            actionType
            endOtherRules
            sortOrder
            catalogRuleId
            channelId
            customerGroupId
            productId
            product {
              id
              type
              attributeFamilyId
              sku
              parentId
              variants {
                id
                type
                attributeFamilyId
                sku
                parentId
              }
            }
          }
          catalogRuleProductPrices {
            id
            price
            ruleDate
            startsFrom
            endsTill
            productId
            catalogRuleId
            channelId
            customerGroupId
          }
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "catalogRules": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "test rule",
                    "description": "test rule",
                    "startsFrom": "2021-05-25",
                    "endsTill": "2021-05-27",
                    "status": true,
                    "conditionType": true,
                    "conditions": "null",
                    "endOtherRules": true,
                    "actionType": "by_percent",
                    "discountAmount": 10,
                    "sortOrder": 1,
                    "createdAt": "2021-05-26 17:28:54",
                    "updatedAt": "2021-05-26 17:28:54",
                    "channels": [
                        {
                            "id": "1",
                            "code": "default",
                            "name": "Default",
                            "description": null,
                            "theme": "velocity",
                            "homePageContent": "\n                    <p>@include(\"shop::home.slider\") @include(\"shop::home.featured-products\") @include(\"shop::home.new-products\")</p>\n                        <div class=\"banner-container\">\n                        <div class=\"left-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/1.webp data-src=http://localhost/graphql/public/themes/default/assets/images/1.webp class=\"lazyload\" alt=\"test\" width=\"720\" height=\"720\" />\n                        </div>\n                        <div class=\"right-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/2.webp data-src=http://localhost/graphql/public/themes/default/assets/images/2.webp class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/3.webp data-src=http://localhost/graphql/public/themes/default/assets/images/3.webp  class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                        </div>\n                    </div>\n                ",
                            "footerContent": "\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Quick Links</span>\n                        <ul class=\"list-group\">\n                            <li><a href=\"@php echo route('shop.cms.page', 'about-us') @endphp\">About Us</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'return-policy') @endphp\">Return Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'refund-policy') @endphp\">Refund Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-conditions') @endphp\">Terms and conditions</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-of-use') @endphp\">Terms of Use</a></li><li><a href=\"@php echo route('shop.cms.page', 'contact-us') @endphp\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Connect With Us</span>\n                            <ul class=\"list-group\">\n                                <li><a href=\"#\"><span class=\"icon icon-facebook\"></span>Facebook </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-twitter\"></span> Twitter </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-instagram\"></span> Instagram </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-google-plus\"></span>Google+ </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-linkedin\"></span>LinkedIn </a></li>\n                            </ul>\n                        </div>\n                ",
                            "hostname": "http://localhost/graphql/public",
                            "defaultLocaleId": 1,
                            "baseCurrencyId": 1,
                            "rootCategoryId": 1,
                            "homeSeo": "{\"meta_title\": \"Demo store\", \"meta_keywords\": \"Demo store meta keyword\", \"meta_description\": \"Demo store meta description\"}",
                            "locales": [
                                {
                                    "id": "1",
                                    "name": "English",
                                    "code": "en",
                                    "direction": "ltr"
                                }
                            ],
                            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                            "currencies": [
                                {
                                    "id": "1",
                                    "name": "US Dollar",
                                    "code": "USD",
                                    "symbol": "$"
                                }
                            ],
                            "inventorySources": [
                                {
                                    "id": "1",
                                    "code": "default",
                                    "name": "Default",
                                    "description": null,
                                    "contactName": "Detroit Warehouse",
                                    "contactEmail": "warehouse@example.com",
                                    "contactNumber": "1234567899",
                                    "contactFax": null,
                                    "country": "US",
                                    "state": "MI",
                                    "city": "Detroit",
                                    "street": "12th Street",
                                    "postcode": "48127",
                                    "priority": 0,
                                    "latitude": null,
                                    "longitude": null,
                                    "status": true
                                }
                            ],
                            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                            "logoUrl": null,
                            "faviconUrl": null
                        },
                        {
                            "id": "2",
                            "code": "newca",
                            "name": "nerty",
                            "description": "ajsyg",
                            "theme": "gdg",
                            "homePageContent": "fhg",
                            "footerContent": "fh",
                            "hostname": "http://bag1.com",
                            "defaultLocaleId": 1,
                            "baseCurrencyId": 1,
                            "rootCategoryId": 1,
                            "homeSeo": "{\"meta_title\": \"gfyj\", \"meta_keywords\": \"gvgh\", \"meta_description\": \"gcg\"}",
                            "locales": [
                                {
                                    "id": "1",
                                    "name": "English",
                                    "code": "en",
                                    "direction": "ltr"
                                }
                            ],
                            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                            "currencies": [
                                {
                                    "id": "1",
                                    "name": "US Dollar",
                                    "code": "USD",
                                    "symbol": "$"
                                }
                            ],
                            "inventorySources": [
                                {
                                    "id": "1",
                                    "code": "default",
                                    "name": "Default",
                                    "description": null,
                                    "contactName": "Detroit Warehouse",
                                    "contactEmail": "warehouse@example.com",
                                    "contactNumber": "1234567899",
                                    "contactFax": null,
                                    "country": "US",
                                    "state": "MI",
                                    "city": "Detroit",
                                    "street": "12th Street",
                                    "postcode": "48127",
                                    "priority": 0,
                                    "latitude": null,
                                    "longitude": null,
                                    "status": true
                                }
                            ],
                            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                            "logoUrl": null,
                            "faviconUrl": null
                        }
                    ],
                    "customerGroups": [
                        {
                            "id": "1",
                            "name": "Guest",
                            "code": "guest",
                            "isUserDefined": false,
                            "createdAt": null,
                            "updatedAt": null
                        },
                        {
                            "id": "2",
                            "name": "General",
                            "code": "general",
                            "isUserDefined": false,
                            "createdAt": null,
                            "updatedAt": null
                        },
                        {
                            "id": "3",
                            "name": "Wholesale",
                            "code": "wholesale",
                            "isUserDefined": false,
                            "createdAt": null,
                            "updatedAt": null
                        },
                        {
                            "id": "4",
                            "name": "VIP Customers",
                            "code": "vip",
                            "isUserDefined": false,
                            "createdAt": "2021-05-26 16:32:06",
                            "updatedAt": "2021-05-26 16:33:57"
                        }
                    ],
                    "catalogRuleProducts": [],
                    "catalogRuleProductPrices": []
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Catalog Rule By ID

To get the  specific Catalog Rule, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query catalogRule {
      catalogRule(id: 1) {
        id
        name
        description
        startsFrom
        endsTill
        status
        conditionType
        conditions
        endOtherRules
        actionType
        discountAmount
        sortOrder
        createdAt
        updatedAt
        channels {
          id
          code
          name
          description
          theme
          homePageContent
          footerContent
          hostname
          defaultLocaleId
          baseCurrencyId
          rootCategoryId
          homeSeo
          locales {
            id
            name
            code
            direction
          }
          defaultLocale
          currencies {
            id
            name
            code
            symbol
          }
          inventorySources {
            id
            code
            name
            description
            contactName
            contactEmail
            contactNumber
            contactFax
            country
            state
            city
            street
            postcode
            priority
            latitude
            longitude
            status
          }
          baseCurrency
          rootCategory
          logoUrl
          faviconUrl
        }
        customerGroups {
          id
          name
          code
          isUserDefined
          createdAt
          updatedAt
        }
        catalogRuleProducts {
          id
          startsFrom
          endsTill
          discountAmount
          actionType
          endOtherRules
          sortOrder
          catalogRuleId
          channelId
          customerGroupId
          productId
          product {
            id
            type
            attributeFamilyId
            sku
            parentId
            variants {
              id
              type
              attributeFamilyId
              sku
              parentId
            }
          }
        }
        catalogRuleProductPrices {
          id
          price
          ruleDate
          startsFrom
          endsTill
          productId
          catalogRuleId
          channelId
          customerGroupId
        }
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "catalogRule": {
            "id": "1",
            "name": "test rule",
            "description": "test rule",
            "startsFrom": "2021-05-25",
            "endsTill": "2021-05-27",
            "status": true,
            "conditionType": true,
            "conditions": "null",
            "endOtherRules": true,
            "actionType": "by_percent",
            "discountAmount": 10,
            "sortOrder": 1,
            "createdAt": "2021-05-26 17:28:54",
            "updatedAt": "2021-05-26 17:28:54",
            "channels": [
                {
                    "id": "1",
                    "code": "default",
                    "name": "Default",
                    "description": null,
                    "theme": "velocity",
                    "homePageContent": "\n                    <p>@include(\"shop::home.slider\") @include(\"shop::home.featured-products\") @include(\"shop::home.new-products\")</p>\n                        <div class=\"banner-container\">\n                        <div class=\"left-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/1.webp data-src=http://localhost/graphql/public/themes/default/assets/images/1.webp class=\"lazyload\" alt=\"test\" width=\"720\" height=\"720\" />\n                        </div>\n                        <div class=\"right-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/2.webp data-src=http://localhost/graphql/public/themes/default/assets/images/2.webp class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/3.webp data-src=http://localhost/graphql/public/themes/default/assets/images/3.webp  class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                        </div>\n                    </div>\n                ",
                    "footerContent": "\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Quick Links</span>\n                        <ul class=\"list-group\">\n                            <li><a href=\"@php echo route('shop.cms.page', 'about-us') @endphp\">About Us</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'return-policy') @endphp\">Return Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'refund-policy') @endphp\">Refund Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-conditions') @endphp\">Terms and conditions</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-of-use') @endphp\">Terms of Use</a></li><li><a href=\"@php echo route('shop.cms.page', 'contact-us') @endphp\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Connect With Us</span>\n                            <ul class=\"list-group\">\n                                <li><a href=\"#\"><span class=\"icon icon-facebook\"></span>Facebook </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-twitter\"></span> Twitter </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-instagram\"></span> Instagram </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-google-plus\"></span>Google+ </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-linkedin\"></span>LinkedIn </a></li>\n                            </ul>\n                        </div>\n                ",
                    "hostname": "http://localhost/graphql/public",
                    "defaultLocaleId": 1,
                    "baseCurrencyId": 1,
                    "rootCategoryId": 1,
                    "homeSeo": "{\"meta_title\": \"Demo store\", \"meta_keywords\": \"Demo store meta keyword\", \"meta_description\": \"Demo store meta description\"}",
                    "locales": [
                        {
                            "id": "1",
                            "name": "English",
                            "code": "en",
                            "direction": "ltr"
                        }
                    ],
                    "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                    "currencies": [
                        {
                            "id": "1",
                            "name": "US Dollar",
                            "code": "USD",
                            "symbol": "$"
                        }
                    ],
                    "inventorySources": [
                        {
                            "id": "1",
                            "code": "default",
                            "name": "Default",
                            "description": null,
                            "contactName": "Detroit Warehouse",
                            "contactEmail": "warehouse@example.com",
                            "contactNumber": "1234567899",
                            "contactFax": null,
                            "country": "US",
                            "state": "MI",
                            "city": "Detroit",
                            "street": "12th Street",
                            "postcode": "48127",
                            "priority": 0,
                            "latitude": null,
                            "longitude": null,
                            "status": true
                        }
                    ],
                    "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                    "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                    "logoUrl": null,
                    "faviconUrl": null
                },
                {
                    "id": "2",
                    "code": "newca",
                    "name": "nerty",
                    "description": "ajsyg",
                    "theme": "gdg",
                    "homePageContent": "fhg",
                    "footerContent": "fh",
                    "hostname": "http://bag1.com",
                    "defaultLocaleId": 1,
                    "baseCurrencyId": 1,
                    "rootCategoryId": 1,
                    "homeSeo": "{\"meta_title\": \"gfyj\", \"meta_keywords\": \"gvgh\", \"meta_description\": \"gcg\"}",
                    "locales": [
                        {
                            "id": "1",
                            "name": "English",
                            "code": "en",
                            "direction": "ltr"
                        }
                    ],
                    "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                    "currencies": [
                        {
                            "id": "1",
                            "name": "US Dollar",
                            "code": "USD",
                            "symbol": "$"
                        }
                    ],
                    "inventorySources": [
                        {
                            "id": "1",
                            "code": "default",
                            "name": "Default",
                            "description": null,
                            "contactName": "Detroit Warehouse",
                            "contactEmail": "warehouse@example.com",
                            "contactNumber": "1234567899",
                            "contactFax": null,
                            "country": "US",
                            "state": "MI",
                            "city": "Detroit",
                            "street": "12th Street",
                            "postcode": "48127",
                            "priority": 0,
                            "latitude": null,
                            "longitude": null,
                            "status": true
                        }
                    ],
                    "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                    "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                    "logoUrl": null,
                    "faviconUrl": null
                }
            ],
            "customerGroups": [
                {
                    "id": "1",
                    "name": "Guest",
                    "code": "guest",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "2",
                    "name": "General",
                    "code": "general",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "3",
                    "name": "Wholesale",
                    "code": "wholesale",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "4",
                    "name": "VIP Customers",
                    "code": "vip",
                    "isUserDefined": false,
                    "createdAt": "2021-05-26 16:32:06",
                    "updatedAt": "2021-05-26 16:33:57"
                }
            ],
            "catalogRuleProducts": [],
            "catalogRuleProductPrices": []
        }
    }
  }
  ~~~
:::

### 3. Get Filtered Catalog Rule

You can get the filter data from  the Catalog Rule by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

Let's take an example,

- Request Query

~~~query
    query catalogRules {
      catalogRules(input:{ 
        id:1
        name: "test rule"
        start: "2021-05-25"
        end: "2021-05-27"
        status: true
        priority:1
      }) {
          paginatorInfo {
            count
            currentPage
            lastPage
            total
          }
          data {
            id
            name
            description
            startsFrom
            endsTill
            status
            conditionType
            conditions
            endOtherRules
            actionType
            discountAmount
            sortOrder
            createdAt
            updatedAt
            catalogRuleProducts {
              id
              startsFrom
              endsTill
              discountAmount
              actionType
              endOtherRules
              sortOrder
              catalogRuleId
              channelId
              customerGroupId
              productId
              product {
                id
                type
                attributeFamilyId
                sku
                parentId
                variants {
                  id
                  type
                  attributeFamilyId
                  sku
                  parentId
                }
              }
            }
            catalogRuleProductPrices {
              id
              price
              ruleDate
              startsFrom
              endsTill
              productId
              catalogRuleId
              channelId
              customerGroupId
            }
          }
        }
      }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "catalogRules": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "test rule",
                    "description": "test rule",
                    "startsFrom": "2021-05-25",
                    "endsTill": "2021-05-27",
                    "status": true,
                    "conditionType": true,
                    "conditions": "null",
                    "endOtherRules": true,
                    "actionType": "by_percent",
                    "discountAmount": 10,
                    "sortOrder": 1,
                    "createdAt": "2021-05-26 17:28:54",
                    "updatedAt": "2021-05-26 17:28:54",
                    "catalogRuleProducts": [
                        {
                            "id": "1",
                            "startsFrom": "2021-05-25 00:00:01",
                            "endsTill": "2021-05-27 23:59:59",
                            "discountAmount": 10,
                            "actionType": "by_percent",
                            "endOtherRules": true,
                            "sortOrder": 1,
                            "catalogRuleId": "1",
                            "channelId": "1",
                            "customerGroupId": "2",
                            "productId": "1",
                            "product": {
                                "id": "1",
                                "type": "simple",
                                "attributeFamilyId": 1,
                                "sku": "test-product",
                                "parentId": null,
                                "variants": []
                            }
                        }
                    ],
                    "catalogRuleProductPrices": [
                        {
                            "id": "1",
                            "price": 4.5,
                            "ruleDate": "2021-05-26",
                            "startsFrom": "2021-05-25 00:00:01",
                            "endsTill": "2021-05-27 23:59:59",
                            "productId": "1",
                            "catalogRuleId": "1",
                            "channelId": "1",
                            "customerGroupId": "1"
                        },
                    ]
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Get Catalog Rule Products

You can get the Catalog Rule Products from the Bagisto store. You can achieve this job by using the `Catalog Rules` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: You can pass all the related fileds that you want in response.

- Query
  ~~~query
    query catalogRuleProducts {
      catalogRuleProducts(input: {
        catalogRuleId: 1
      }) {
          paginatorInfo {
            count
            currentPage
            lastPage
            total
          }
          data {
            id
            startsFrom
            endsTill
            discountAmount
            actionType
            endOtherRules
            sortOrder
            catalogRuleId
            channelId
            customerGroupId
            productId
            product {
              id
              type
              attributeFamilyId
              sku
              parentId
              variants {
                id
                type
                attributeFamilyId
                sku
                parentId
              }
            }
          }
        }
      }
  ~~~

::: details Response

~~~json
{
  "data": {
        "catalogRuleProducts": {
            "paginatorInfo": {
                "count": 8,
                "currentPage": 1,
                "lastPage": 1,
                "total": 8
            },
            "data": [
                {
                    "id": "1",
                    "startsFrom": "2021-05-25 00:00:01",
                    "endsTill": "2021-05-27 23:59:59",
                    "discountAmount": 10,
                    "actionType": "by_percent",
                    "endOtherRules": true,
                    "sortOrder": 1,
                    "catalogRuleId": "1",
                    "channelId": "1",
                    "customerGroupId": "2",
                    "productId": "1",
                    "product": {
                        "id": "1",
                        "type": "simple",
                        "attributeFamilyId": 1,
                        "sku": "test-product",
                        "parentId": null,
                        "variants": []
                    }
                }
            ]
        }
    }
}
~~~
:::



### 5. Get Catalog Rule Product By Id

You can get the Catalog Rule Products By Id from the Bagisto store. You can achieve this job by using the `Catalog Rule Product` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: You can pass all the related fileds that you want in response.

- Query
  ~~~query
    query catalogRuleProduct {
      catalogRuleProduct(
        id: 1,
        input: {
          catalogRuleId: 1
        }
      ) {
        id
        startsFrom
        endsTill
        discountAmount
        actionType
        endOtherRules
        sortOrder
        catalogRuleId
        channelId
        customerGroupId
        productId
        product {
          id
          type
          attributeFamilyId
          sku
          parentId
          variants {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "catalogRuleProduct": {
            "id": "1",
            "startsFrom": "2021-05-25 00:00:01",
            "endsTill": "2021-05-27 23:59:59",
            "discountAmount": 10,
            "actionType": "by_percent",
            "endOtherRules": true,
            "sortOrder": 1,
            "catalogRuleId": "1",
            "channelId": "1",
            "customerGroupId": "2",
            "productId": "1",
            "product": {
                "id": "1",
                "type": "simple",
                "attributeFamilyId": 1,
                "sku": "test-product",
                "parentId": null,
                "variants": []
            }
        }
    }
}
~~~
:::

### 6. Get Catalog Rule Products Prices

You can get the Catalog Rule Products Prices from the Bagisto store. You can achieve this job by using the `Catalog Rule Products Price` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: You can pass all the related fileds that you want in response.

- Query
  ~~~query
    query catalogRuleProductPrices {
      catalogRuleProductPrices(input: {
        catalogRuleId: 1,
        productId: 1,
        customerGroupId: 1,
        channelId: 1
      }) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          price
          ruleDate
          startsFrom
          endsTill
          productId
          catalogRuleId
          channelId
          customerGroupId
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "catalogRuleProductPrices": {
            "paginatorInfo": {
                "count": 3,
                "currentPage": 1,
                "lastPage": 1,
                "total": 3
            },
            "data": [
                {
                    "id": "1",
                    "price": 4.5,
                    "ruleDate": "2021-05-26",
                    "startsFrom": "2021-05-25 00:00:01",
                    "endsTill": "2021-05-27 23:59:59",
                    "productId": "1",
                    "catalogRuleId": "1",
                    "channelId": "1",
                    "customerGroupId": "1"
                },
                {
                    "id": "2",
                    "price": 4.5,
                    "ruleDate": "2021-05-25",
                    "startsFrom": "2021-05-25 00:00:01",
                    "endsTill": "2021-05-27 23:59:59",
                    "productId": "1",
                    "catalogRuleId": "1",
                    "channelId": "1",
                    "customerGroupId": "1"
                },
                {
                    "id": "3",
                    "price": 4.5,
                    "ruleDate": "2021-05-27",
                    "startsFrom": "2021-05-25 00:00:01",
                    "endsTill": "2021-05-27 23:59:59",
                    "productId": "1",
                    "catalogRuleId": "1",
                    "channelId": "1",
                    "customerGroupId": "1"
                }
            ]
        }
    }
}
~~~
:::



### 7. Get Catalog Rule Product Prices By Id

You can get the Catalog Rule Product Prices By Id from the Bagisto store. You can achieve this job by using the `Catalog Rule Product Price` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: You can pass all the related fileds that you want in response.

- Query
  ~~~query
    query catalogRuleProductPrice {
      catalogRuleProductPrice(
        id: 1,
        input: {
          catalogRuleId: 1,
          productId: 1,
          customerGroupId: 1,
          channelId: 1
        }
      ) {
        id
        price
        ruleDate
        startsFrom
        endsTill
        productId
        catalogRuleId
        channelId
        customerGroupId
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "catalogRuleProductPrice": {
            "id": "1",
            "price": 4.5,
            "ruleDate": "2021-05-26",
            "startsFrom": "2021-05-25 00:00:01",
            "endsTill": "2021-05-27 23:59:59",
            "productId": "1",
            "catalogRuleId": "1",
            "channelId": "1",
            "customerGroupId": "1"
        }
    }
}
~~~
:::

### 8. Create a new Catalog Rule

  To create a Catalog Rule, you have to perform mutation on Catalog Rule and paas the related fields in the request.
  API call resource will create a new Catalog Rule, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createCatalogRule {
        createCatalogRule(input: {
          name: "test1"
          status:true
          description: "testetsetste"
          channels:1
          customerGroups:1
          startsFrom: "2021-05-26 17:28:54"
          endsTill: "2021-05-27 17:28:54"
          conditionType: 1
          sortOrder:1
          actionType: "by_percent"
          discountAmount: 10
          endOtherRules:false
        }) {
          id
          name
          description
          startsFrom
          endsTill
          status
          conditionType
          conditions
          endOtherRules
          actionType
          discountAmount
          sortOrder
          createdAt
          updatedAt
        }
      } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createCatalogRule": {
            "id": "2",
            "name": "test1",
            "description": "testetsetste",
            "startsFrom": "2021-05-26",
            "endsTill": "2021-05-27",
            "status": true,
            "conditionType": true,
            "conditions": "null",
            "endOtherRules": false,
            "actionType": "by_percent",
            "discountAmount": 10,
            "sortOrder": 1,
            "createdAt": "2021-05-26 19:35:43",
            "updatedAt": "2021-05-26 19:35:43"
        }
    }
  }
  ~~~
:::

### 9. Update Catalog Rule

By using this API call you can update the Catalog Rule. To do this , you have to perform update mutation on Catalog Rule and paas the related fields in the request.
API call will update a Catalog Rule, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateCatalogRule {
      updateCatalogRule(id: 2,input: {
        name: "testupdated"
        status:true
        description: "testetsetste"
        channels:1
        customerGroups:1
        startsFrom: "2021-05-26 17:28:54"
        endsTill: "2021-05-27 17:28:54"
        conditionType: 1
        sortOrder:1
        actionType: "by_percent"
        discountAmount: 10
        endOtherRules:false
      }) {
        id
        name
        description
        startsFrom
        endsTill
        status
        conditionType
        conditions
        endOtherRules
        actionType
        discountAmount
        sortOrder
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateCatalogRule": {
            "id": "2",
            "name": "test1",
            "description": "testetsetste",
            "startsFrom": "2021-05-26",
            "endsTill": "2021-05-27",
            "status": true,
            "conditionType": true,
            "conditions": "null",
            "endOtherRules": false,
            "actionType": "by_percent",
            "discountAmount": 10,
            "sortOrder": 1,
            "createdAt": "2021-05-26 19:35:43",
            "updatedAt": "2021-05-26 19:35:43"
        }
    }
  }
  ~~~
:::

### 10. Delete a Catalog Rule

To delete a Catalog Rule, you have to perform mutation on Catalog Rule by passing the id of that Catalog Rule.
API call will delete a Catalog Rule, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteCatalogRule {
      deleteCatalogRule(id: 2) {
          success
      }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteCatalogRule": {
            "success": "Catalog Rule deleted successfully."
        }
    }
  }
  ~~~
:::

## Cart Rules

In this section, we will see all the APIs which are related to Catalog Rules.

### 1. Get All Cart Rules

You can get all the Cart Rules from the Bagisto store. You can achieve this job by using the `Cart Rules` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

- Query
  ~~~query
    query cartRules {
      cartRules {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          name
          description
          startsFrom
          endsTill
          status
          couponType
          useAutoGeneration
          usagePerCustomer
          usesPerCoupon
          timesUsed
          conditionType
          conditions
          actions
          endOtherRules
          usesAttributeConditions
          actionType
          discountAmount
          discountQuantity
          discountStep
          applyToShipping
          freeShipping
          sortOrder
          createdAt
          updatedAt
          cartRuleChannels {
            id
            code
            name
            description
            theme
            homePageContent
            footerContent
            hostname
            defaultLocaleId
            baseCurrencyId
            rootCategoryId
            homeSeo
            locales {
              id
              name
              code
              direction
            }
            defaultLocale
            currencies {
              id
              name
              code
              symbol
            }
            inventorySources {
              id
              code
              name
              description
              contactName
              contactEmail
              contactNumber
              contactFax
              country
              state
              city
              street
              postcode
              priority
              latitude
              longitude
              status
            }
            baseCurrency
            rootCategory
            logoUrl
            faviconUrl
          }
          cartRuleCustomerGroups {
            id
            name
            code
            isUserDefined
            createdAt
            updatedAt
          }
          cartRuleCoupon {
            id
            code
            usageLimit
            usagePerCustomer
            isPrimary
            timesUsed
            expiredAt
            type
            cartRuleId
            createdAt
            updatedAt
            couponUsage {
              id
              timesUsed
              cartRuleCouponId
            }
          }
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "cartRules": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "test cartrule",
                    "description": "test cartrule",
                    "startsFrom": "2021-05-26 12:00:00",
                    "endsTill": "2021-05-27 12:00:00",
                    "status": true,
                    "couponType": 1,
                    "useAutoGeneration": false,
                    "usagePerCustomer": 2,
                    "usesPerCoupon": 2,
                    "timesUsed": 0,
                    "conditionType": "1",
                    "conditions": null,
                    "actions": null,
                    "endOtherRules": false,
                    "usesAttributeConditions": false,
                    "actionType": "by_percent",
                    "discountAmount": 10,
                    "discountQuantity": 1,
                    "discountStep": 1,
                    "applyToShipping": false,
                    "freeShipping": false,
                    "sortOrder": 1,
                    "createdAt": "2021-05-26 19:49:08",
                    "updatedAt": "2021-05-26 19:49:08",
                    "cartRuleChannels": [
                        {
                            "id": "1",
                            "code": "default",
                            "name": "Default",
                            "description": null,
                            "theme": "velocity",
                            "homePageContent": "\n                    <p>@include(\"shop::home.slider\") @include(\"shop::home.featured-products\") @include(\"shop::home.new-products\")</p>\n                        <div class=\"banner-container\">\n                        <div class=\"left-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/1.webp data-src=http://localhost/graphql/public/themes/default/assets/images/1.webp class=\"lazyload\" alt=\"test\" width=\"720\" height=\"720\" />\n                        </div>\n                        <div class=\"right-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/2.webp data-src=http://localhost/graphql/public/themes/default/assets/images/2.webp class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/3.webp data-src=http://localhost/graphql/public/themes/default/assets/images/3.webp  class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                        </div>\n                    </div>\n                ",
                            "footerContent": "\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Quick Links</span>\n                        <ul class=\"list-group\">\n                            <li><a href=\"@php echo route('shop.cms.page', 'about-us') @endphp\">About Us</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'return-policy') @endphp\">Return Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'refund-policy') @endphp\">Refund Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-conditions') @endphp\">Terms and conditions</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-of-use') @endphp\">Terms of Use</a></li><li><a href=\"@php echo route('shop.cms.page', 'contact-us') @endphp\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Connect With Us</span>\n                            <ul class=\"list-group\">\n                                <li><a href=\"#\"><span class=\"icon icon-facebook\"></span>Facebook </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-twitter\"></span> Twitter </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-instagram\"></span> Instagram </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-google-plus\"></span>Google+ </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-linkedin\"></span>LinkedIn </a></li>\n                            </ul>\n                        </div>\n                ",
                            "hostname": "http://localhost/graphql/public",
                            "defaultLocaleId": 1,
                            "baseCurrencyId": 1,
                            "rootCategoryId": 1,
                            "homeSeo": "{\"meta_title\": \"Demo store\", \"meta_keywords\": \"Demo store meta keyword\", \"meta_description\": \"Demo store meta description\"}",
                            "locales": [
                                {
                                    "id": "1",
                                    "name": "English",
                                    "code": "en",
                                    "direction": "ltr"
                                }
                            ],
                            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                            "currencies": [
                                {
                                    "id": "1",
                                    "name": "US Dollar",
                                    "code": "USD",
                                    "symbol": "$"
                                }
                            ],
                            "inventorySources": [
                                {
                                    "id": "1",
                                    "code": "default",
                                    "name": "Default",
                                    "description": null,
                                    "contactName": "Detroit Warehouse",
                                    "contactEmail": "warehouse@example.com",
                                    "contactNumber": "1234567899",
                                    "contactFax": null,
                                    "country": "US",
                                    "state": "MI",
                                    "city": "Detroit",
                                    "street": "12th Street",
                                    "postcode": "48127",
                                    "priority": 0,
                                    "latitude": null,
                                    "longitude": null,
                                    "status": true
                                }
                            ],
                            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                            "logoUrl": null,
                            "faviconUrl": null
                        },
                        {
                            "id": "2",
                            "code": "newca",
                            "name": "nerty",
                            "description": "ajsyg",
                            "theme": "gdg",
                            "homePageContent": "fhg",
                            "footerContent": "fh",
                            "hostname": "http://bag1.com",
                            "defaultLocaleId": 1,
                            "baseCurrencyId": 1,
                            "rootCategoryId": 1,
                            "homeSeo": "{\"meta_title\": \"gfyj\", \"meta_keywords\": \"gvgh\", \"meta_description\": \"gcg\"}",
                            "locales": [
                                {
                                    "id": "1",
                                    "name": "English",
                                    "code": "en",
                                    "direction": "ltr"
                                }
                            ],
                            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                            "currencies": [
                                {
                                    "id": "1",
                                    "name": "US Dollar",
                                    "code": "USD",
                                    "symbol": "$"
                                }
                            ],
                            "inventorySources": [
                                {
                                    "id": "1",
                                    "code": "default",
                                    "name": "Default",
                                    "description": null,
                                    "contactName": "Detroit Warehouse",
                                    "contactEmail": "warehouse@example.com",
                                    "contactNumber": "1234567899",
                                    "contactFax": null,
                                    "country": "US",
                                    "state": "MI",
                                    "city": "Detroit",
                                    "street": "12th Street",
                                    "postcode": "48127",
                                    "priority": 0,
                                    "latitude": null,
                                    "longitude": null,
                                    "status": true
                                }
                            ],
                            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                            "logoUrl": null,
                            "faviconUrl": null
                        }
                    ],
                    "cartRuleCustomerGroups": [
                        {
                            "id": "2",
                            "name": "General",
                            "code": "general",
                            "isUserDefined": false,
                            "createdAt": null,
                            "updatedAt": null
                        }
                    ],
                    "cartRuleCoupon": {
                        "id": "1",
                        "code": "TEST",
                        "usageLimit": 2,
                        "usagePerCustomer": 2,
                        "isPrimary": true,
                        "timesUsed": 0,
                        "expiredAt": "2021-05-27",
                        "type": 0,
                        "cartRuleId": "1",
                        "createdAt": "2021-05-26 19:49:09",
                        "updatedAt": "2021-05-26 19:49:09",
                        "couponUsage": []
                    }
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Cart Rule By ID

To get the  specific Cart Rule, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query cartRule {
      cartRule(id: 1) {
        id
        name
        description
        startsFrom
        endsTill
        status
        couponType
        useAutoGeneration
        usagePerCustomer
        usesPerCoupon
        timesUsed
        conditionType
        conditions
        actions
        endOtherRules
        usesAttributeConditions
        actionType
        discountAmount
        discountQuantity
        discountStep
        applyToShipping
        freeShipping
        sortOrder
        createdAt
        updatedAt
        cartRuleChannels {
          id
          code
          name
          description
          theme
          homePageContent
          footerContent
          hostname
          defaultLocaleId
          baseCurrencyId
          rootCategoryId
          homeSeo
        }
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "cartRule": {
            "id": "1",
            "name": "test cartrule",
            "description": "test cartrule",
            "startsFrom": "2021-05-26 12:00:00",
            "endsTill": "2021-05-27 12:00:00",
            "status": true,
            "couponType": 1,
            "useAutoGeneration": false,
            "usagePerCustomer": 2,
            "usesPerCoupon": 2,
            "timesUsed": 0,
            "conditionType": "1",
            "conditions": null,
            "actions": null,
            "endOtherRules": false,
            "usesAttributeConditions": false,
            "actionType": "by_percent",
            "discountAmount": 10,
            "discountQuantity": 1,
            "discountStep": 1,
            "applyToShipping": false,
            "freeShipping": false,
            "sortOrder": 1,
            "createdAt": "2021-05-26 19:49:08",
            "updatedAt": "2021-05-26 19:49:08",
            "cartRuleChannels": [
                {
                    "id": "1",
                    "code": "default",
                    "name": "Default",
                    "description": null,
                    "theme": "velocity",
                    "footerContent": "\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Quick Links</span>\n                        <ul class=\"list-group\">\n                            <li><a href=\"@php echo route('shop.cms.page', 'about-us') @endphp\">About Us</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'return-policy') @endphp\">Return Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'refund-policy') @endphp\">Refund Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-conditions') @endphp\">Terms and conditions</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-of-use') @endphp\">Terms of Use</a></li><li><a href=\"@php echo route('shop.cms.page', 'contact-us') @endphp\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Connect With Us</span>\n                            <ul class=\"list-group\">\n                                <li><a href=\"#\"><span class=\"icon icon-facebook\"></span>Facebook </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-twitter\"></span> Twitter </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-instagram\"></span> Instagram </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-google-plus\"></span>Google+ </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-linkedin\"></span>LinkedIn </a></li>\n                            </ul>\n                        </div>\n                ",
                    "hostname": "http://localhost/graphql/public",
                    "defaultLocaleId": 1,
                    "baseCurrencyId": 1,
                    "rootCategoryId": 1,
                    "homeSeo": "{\"meta_title\": \"Demo store\", \"meta_keywords\": \"Demo store meta keyword\", \"meta_description\": \"Demo store meta description\"}"
                },
                {
                    "id": "2",
                    "code": "newca",
                    "name": "nerty",
                    "description": "ajsyg",
                    "theme": "gdg",
                    "footerContent": "fh",
                    "hostname": "http://bag1.com",
                    "defaultLocaleId": 1,
                    "baseCurrencyId": 1,
                    "rootCategoryId": 1,
                    "homeSeo": "{\"meta_title\": \"gfyj\", \"meta_keywords\": \"gvgh\", \"meta_description\": \"gcg\"}"
                }
            ]
        }
    }
  }
  ~~~
:::

### 3. Get Filtered Cart Rule

You can get the filter data from  the Cart Rule by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

Let's take an example,

- Request Query

~~~query
    query cartRules {
      cartRules(input: {
        id:1
        name: "test cartrule"
      }, page: 1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          name
          description
          startsFrom
          endsTill
          status
          couponType
          useAutoGeneration
          usagePerCustomer
          usesPerCoupon
          timesUsed
          conditionType
          conditions
          actions
          endOtherRules
          usesAttributeConditions
          actionType
          discountAmount
          discountQuantity
          discountStep
          applyToShipping
          freeShipping
          sortOrder
          createdAt
          updatedAt
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "cartRules": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "test cartrule",
                    "description": "test cartrule",
                    "startsFrom": "2021-05-26 12:00:00",
                    "endsTill": "2021-05-27 12:00:00",
                    "status": true,
                    "couponType": 1,
                    "useAutoGeneration": false,
                    "usagePerCustomer": 2,
                    "usesPerCoupon": 2,
                    "timesUsed": 0,
                    "conditionType": "1",
                    "conditions": null,
                    "actions": null,
                    "endOtherRules": false,
                    "usesAttributeConditions": false,
                    "actionType": "by_percent",
                    "discountAmount": 10,
                    "discountQuantity": 1,
                    "discountStep": 1,
                    "applyToShipping": false,
                    "freeShipping": false,
                    "sortOrder": 1,
                    "createdAt": "2021-05-26 19:49:08",
                    "updatedAt": "2021-05-26 19:49:08"
                }
            ]
        }
    }
  }
  ~~~
:::


### 8. Create a new Cart Rule

  To create a Cart Rule, you have to perform mutation on Cart Rule and paas the related fields in the request.
  API call resource will create a new Cart Rule, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createCartRule {
      createCartRule(input: {
        name: "cartrule1"
        description: "cartrule1"
        channels:1
        customerGroups:1
        startsFrom: "2021-05-26 19:49:08"
        endsTill: "2021-05-27 19:49:08"
        status: true
        couponType: 1
        useAutoGeneration:true
        usagePerCustomer:1
        usesPerCoupon:1
        timesUsed:1
        conditionType:false
        endOtherRules:false
        usesAttributeConditions: false
        actionType: "by_percent"
        discountAmount: 10
        discountQuantity: 1
        discountStep: 1
        applyToShipping:false
        freeShipping: true
        sortOrder:1
        couponCode: "CARTTEsT"
      }) {
        id
        name
        description
        startsFrom
        endsTill
        status
        couponType
        useAutoGeneration
        usagePerCustomer
        usesPerCoupon
        timesUsed
        conditionType
        conditions
        actions
        endOtherRules
        usesAttributeConditions
        actionType
        discountAmount
        discountQuantity
        discountStep
        applyToShipping
        freeShipping
        sortOrder
        createdAt
        updatedAt
      }
    } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createCartRule": {
            "id": "2",
            "name": "cartrule1",
            "description": "cartrule1",
            "startsFrom": "2021-05-26 19:49:08",
            "endsTill": "2021-05-27 19:49:08",
            "status": true,
            "couponType": 1,
            "useAutoGeneration": true,
            "usagePerCustomer": 1,
            "usesPerCoupon": 1,
            "timesUsed": 1,
            "conditionType": "",
            "conditions": null,
            "actions": null,
            "endOtherRules": false,
            "usesAttributeConditions": false,
            "actionType": "by_percent",
            "discountAmount": 10,
            "discountQuantity": 1,
            "discountStep": 1,
            "applyToShipping": false,
            "freeShipping": true,
            "sortOrder": 1,
            "createdAt": "2021-05-26 20:09:03",
            "updatedAt": "2021-05-26 20:09:03"
        }
    }
  }
  ~~~
:::

### 9. Update Cart Rule

By using this API call you can update the Cart Rule. To do this , you have to perform update mutation on Cart Rule and paas the related fields in the request.
API call will update a Cart Rule, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateCartRule {
      updateCartRule(id: 2,input: {
        name: "cartrule1upadted"
        description: "cartrule1upadted"
        channels:1
        customerGroups:1
        startsFrom: "2021-05-26 19:49:08"
        endsTill: "2021-05-27 19:49:08"
        status: true
        couponType: 1
        useAutoGeneration:true
        usagePerCustomer:1
        usesPerCoupon:1
        timesUsed:1
        conditionType:false
        endOtherRules:false
        usesAttributeConditions: false
        actionType: "by_percent"
        discountAmount: 10
        discountQuantity: 1
        discountStep: 1
        applyToShipping:false
        freeShipping: true
        sortOrder:1
        couponCode: "CARTTEsT"
      }) {
        id
        name
        description
        startsFrom
        endsTill
        status
        couponType
        useAutoGeneration
        usagePerCustomer
        usesPerCoupon
        timesUsed
        conditionType
        conditions
        actions
        endOtherRules
        usesAttributeConditions
        actionType
        discountAmount
        discountQuantity
        discountStep
        applyToShipping
        freeShipping
        sortOrder
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateCartRule": {
            "id": "2",
            "name": "cartrule1",
            "description": "cartrule1",
            "startsFrom": "2021-05-26 19:49:08",
            "endsTill": "2021-05-27 19:49:08",
            "status": true,
            "couponType": 1,
            "useAutoGeneration": true,
            "usagePerCustomer": 1,
            "usesPerCoupon": 1,
            "timesUsed": 1,
            "conditionType": "0",
            "conditions": null,
            "actions": null,
            "endOtherRules": false,
            "usesAttributeConditions": false,
            "actionType": "by_percent",
            "discountAmount": 10,
            "discountQuantity": 1,
            "discountStep": 1,
            "applyToShipping": false,
            "freeShipping": true,
            "sortOrder": 1,
            "createdAt": "2021-05-26 20:09:03",
            "updatedAt": "2021-05-26 20:09:03"
        }
    }
  }
  ~~~
:::

### 10. Delete a Cart Rule

To delete a Cart Rule, you have to perform mutation on Cart Rule by passing the id of that Cart Rule.
API call will delete a Cart Rule, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteCartRule {
      deleteCartRule(id: 2) {
          success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteCartRule": {
            "success": "Cart Rule deleted successfully."
        }
    }
  }
  ~~~
:::
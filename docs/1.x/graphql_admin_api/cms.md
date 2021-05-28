## CMS Pages

In this section, we will see all the APIs which are related to CMS Pages.

### 1. Get all CMS Page

You can get all the CMS Page from the Bagisto store. You can achieve this job by using the `CMS Page` API call.

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
    query cmspages {
      cmsPages(page:1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          layout
          createdAt
          updatedAt
          translations {
            id
            urlKey
            metaDescription
            metaTitle
            pageTitle
            metaKeywords
            htmlContent
            locale
            cmsPageId
          }
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
          }
          success
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "cmsPages": {
            "paginatorInfo": {
                "count": 10,
                "currentPage": 1,
                "lastPage": 2,
                "total": 11
            },
            "data": [
                {
                    "id": "1",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "1",
                            "urlKey": "about-us",
                            "metaDescription": "",
                            "metaTitle": "about us",
                            "pageTitle": "About Us",
                            "metaKeywords": "aboutus",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "1"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "2",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "2",
                            "urlKey": "return-policy",
                            "metaDescription": "",
                            "metaTitle": "return policy",
                            "pageTitle": "Return Policy",
                            "metaKeywords": "return, policy",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Return policy page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "2"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "3",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "3",
                            "urlKey": "refund-policy",
                            "metaDescription": "",
                            "metaTitle": "Refund policy",
                            "pageTitle": "Refund Policy",
                            "metaKeywords": "refund, policy",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Refund policy page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "3"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "4",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "4",
                            "urlKey": "terms-conditions",
                            "metaDescription": "",
                            "metaTitle": "Terms & Conditions",
                            "pageTitle": "Terms & Conditions",
                            "metaKeywords": "term, conditions",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Terms & conditions page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "4"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "5",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "5",
                            "urlKey": "terms-of-use",
                            "metaDescription": "",
                            "metaTitle": "Terms of use",
                            "pageTitle": "Terms of use",
                            "metaKeywords": "term, use",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Terms of use page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "5"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "6",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "6",
                            "urlKey": "contact-us",
                            "metaDescription": "",
                            "metaTitle": "Contact Us",
                            "pageTitle": "Contact Us",
                            "metaKeywords": "contact, us",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Contact us page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "6"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "7",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "7",
                            "urlKey": "cutomer-service",
                            "metaDescription": "",
                            "metaTitle": "Customer Service",
                            "pageTitle": "Customer Service",
                            "metaKeywords": "customer, service",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Customer service  page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "7"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "8",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "8",
                            "urlKey": "whats-new",
                            "metaDescription": "",
                            "metaTitle": "What's New",
                            "pageTitle": "What's New",
                            "metaKeywords": "new",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">What's New page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "8"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "9",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "9",
                            "urlKey": "payment-policy",
                            "metaDescription": "",
                            "metaTitle": "Payment Policy",
                            "pageTitle": "Payment Policy",
                            "metaKeywords": "payment, policy",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Payment Policy page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "9"
                        }
                    ],
                    "channels": [],
                    "success": null
                },
                {
                    "id": "10",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "10",
                            "urlKey": "shipping-policy",
                            "metaDescription": "",
                            "metaTitle": "Shipping Policy",
                            "pageTitle": "Shipping Policy",
                            "metaKeywords": "shipping, policy",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">Shipping Policy  page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "10"
                        }
                    ],
                    "channels": [],
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get CMS Page By ID

To get the  specific CMS Page, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
  query cmspage {
    cmsPage(id:1) {
      id
      layout
      createdAt
      updatedAt
      translations {
        id
        urlKey
        metaDescription
        metaTitle
        pageTitle
        metaKeywords
        htmlContent
        locale
        cmsPageId
      }
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
      }
      success
    }
  }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "cmsPage": {
            "id": "1",
            "layout": null,
            "createdAt": "2021-05-05 15:36:49",
            "updatedAt": "2021-05-05 15:36:49",
            "translations": [
                {
                    "id": "1",
                    "urlKey": "about-us",
                    "metaDescription": "",
                    "metaTitle": "about us",
                    "pageTitle": "About Us",
                    "metaKeywords": "aboutus",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "en",
                    "cmsPageId": "1"
                }
            ],
            "channels": [],
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered CMS Page

You can get the filter data from  the CMS Pages by passing the input fileds in the request and that you want in the response.

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
  query cmspages {
    cmsPages(input: {
      id:1
    }, page:1) {
      paginatorInfo {
        count
        currentPage
        lastPage
        total
      }
      data {
        id
        layout
        createdAt
        updatedAt
        translations {
          id
          urlKey
          metaDescription
          metaTitle
          pageTitle
          metaKeywords
          htmlContent
          locale
          cmsPageId
        }
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
        }
        success
      }
    }
  }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "cmsPages": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "layout": null,
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "translations": [
                        {
                            "id": "1",
                            "urlKey": "about-us",
                            "metaDescription": "",
                            "metaTitle": "about us",
                            "pageTitle": "About Us",
                            "metaKeywords": "aboutus",
                            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                            "locale": "en",
                            "cmsPageId": "1"
                        }
                    ],
                    "channels": [],
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
  :::


### 4. Get CMS Translations 

You can get  the CMS Page Translations from the Bagisto store. You can achieve this job by using the `CMS Page Translations` API call.

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
    query cmsPageTranslations {
      cmsPageTranslations(input: {
        cmsPageId:1
        id:1
      }, page:1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          urlKey
          metaDescription
          metaTitle
          pageTitle
          metaKeywords
          htmlContent
          locale
          cmsPageId
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "cmsPageTranslations": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "urlKey": "about-us",
                    "metaDescription": "",
                    "metaTitle": "about us",
                    "pageTitle": "About Us",
                    "metaKeywords": "aboutus",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "en",
                    "cmsPageId": "1"
                }
            ]
        }
    }
}
~~~
:::

### 5. Get CMS Translations By ID

To get the  specific CMS Translations, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query cmsPageTranslation {
      cmsPageTranslation(id:1,input: {
        cmsPageId:1
        id:1
      }) {
        id
        urlKey
        metaDescription
        metaTitle
        pageTitle
        metaKeywords
        htmlContent
        locale
        cmsPageId
      }
    } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "cmsPageTranslation": {
            "id": "1",
            "urlKey": "about-us",
            "metaDescription": "",
            "metaTitle": "about us",
            "pageTitle": "About Us",
            "metaKeywords": "aboutus",
            "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
            "locale": "en",
            "cmsPageId": "1"
        }
    }
  }
  ~~~

:::

### 6. Create a new CMS Page

  To create a CMS Page, you have to perform mutation on CMS Page and paas the related fields in the request.
  API call resource will create a new CMS Page, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
  mutation{
    createCmsPage(input:{
      pageTitle: "test"
      channels:1
      htmlContent: "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>"
      metaTitle: "testetest us"
      urlKey: "test-us"
      metaKeywords: "testsesese"
      metaDescription: "teste data"
      locale:"en"
    }) {
      id
      layout
      createdAt
      updatedAt
      translations {
        id
        urlKey
        metaDescription
        metaTitle
        pageTitle
        metaKeywords
        htmlContent
        locale
        cmsPageId
      }
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
      }
      success
    }
  }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createCmsPage": {
            "id": "12",
            "layout": null,
            "createdAt": "2021-05-25 18:32:22",
            "updatedAt": "2021-05-25 18:32:22",
            "translations": [
                {
                    "id": "12",
                    "urlKey": "test-us",
                    "metaDescription": "teste data",
                    "metaTitle": "testetest us",
                    "pageTitle": "test",
                    "metaKeywords": "testsesese",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "en",
                    "cmsPageId": "12"
                },
                {
                    "id": "13",
                    "urlKey": "test-us",
                    "metaDescription": "teste data",
                    "metaTitle": "testetest us",
                    "pageTitle": "test",
                    "metaKeywords": "testsesese",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "nl",
                    "cmsPageId": "12"
                },
                {
                    "id": "14",
                    "urlKey": "test-us",
                    "metaDescription": "teste data",
                    "metaTitle": "testetest us",
                    "pageTitle": "test",
                    "metaKeywords": "testsesese",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "tr",
                    "cmsPageId": "12"
                }
            ],
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
                    "rootCategoryId": 1
                }
            ],
            "success": null
        }
    }
  }
  ~~~
:::

### 7. Update CMS Page

By using this API call you can update the CMS Page. To do this , you have to perform update mutation on CMS Page and paas the related fields in the request.
API call will update a CMS Page, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation{
      updateCmsPage(id:12,input:{
        pageTitle: "testUpdate"
        channels:1
        htmlContent: "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>"
        metaTitle: "testetest us"
        urlKey: "test-us"
        metaKeywords: "testsesese"
        metaDescription: "teste data"
        locale:"en"
      }) {
        id
        layout
        createdAt
        updatedAt
        translations {
          id
          urlKey
          metaDescription
          metaTitle
          pageTitle
          metaKeywords
          htmlContent
          locale
          cmsPageId
        }
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
        }
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateCmsPage": {
            "id": "12",
            "layout": null,
            "createdAt": "2021-05-25 18:32:22",
            "updatedAt": "2021-05-25 18:32:22",
            "translations": [
                {
                    "id": "12",
                    "urlKey": "test-us",
                    "metaDescription": "teste data",
                    "metaTitle": "testetest us",
                    "pageTitle": "testUpdate",
                    "metaKeywords": "testsesese",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "en",
                    "cmsPageId": "12"
                },
                {
                    "id": "13",
                    "urlKey": "test-us",
                    "metaDescription": "teste data",
                    "metaTitle": "testetest us",
                    "pageTitle": "test",
                    "metaKeywords": "testsesese",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "nl",
                    "cmsPageId": "12"
                },
                {
                    "id": "14",
                    "urlKey": "test-us",
                    "metaDescription": "teste data",
                    "metaTitle": "testetest us",
                    "pageTitle": "test",
                    "metaKeywords": "testsesese",
                    "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">About us page content</div></div>",
                    "locale": "tr",
                    "cmsPageId": "12"
                }
            ],
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
                    "rootCategoryId": 1
                }
            ],
            "success": null
        }
    }
  }
  ~~~
:::

### 8. Delete a CMS Page

To delete a CMS Page, you have to perform mutation on CMS Page by passing the id of that CMS Page.
API call will delete a CMS Page, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation{
      deleteCmsPage(id:12){
        success
        }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteCmsPage": {
            "success": "CMS Page deleted successfully."
        }
    }
  }
  ~~~
:::

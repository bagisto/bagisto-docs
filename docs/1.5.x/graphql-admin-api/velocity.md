## Meta Data

In this section, we will see all the APIs which are related to Velocity Meta Data.

### 1. Get MetaData

You can get all the MetaData from the Bagisto store. You can achieve this job by using the `MetaData` API call.

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
    query velocityMetaData {
      velocityMetaData(page: 1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          homePageContent
          footerLeftContent
          footerMiddleContent
          slider
          advertisement
          sidebarCategoryCount
          featuredProductCount
          newProductsCount
          subscriptionBarContent
          productViewImages
          productPolicy
          locale
          channel
          headerContentCount
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
        "velocityMetaData": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "homePageContent": "<p>@include('shop::home.advertisements.advertisement-four')@include('shop::home.featured-products') @include('shop::home.product-policy') @include('shop::home.advertisements.advertisement-three') @include('shop::home.new-products') @include('shop::home.advertisements.advertisement-two')</p>",
                    "footerLeftContent": "<p>We love to craft softwares and solve the real world problems with the binaries. We are highly committed to our goals. We invest our resources to create world class easy to use softwares and applications for the enterprise business with the top notch, on the edge technology expertise.</p>",
                    "footerMiddleContent": "<div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/about-us') !!}\">About Us</a></li><li><a href=\"{!! url('page/cutomer-service') !!}\">Customer Service</a></li><li><a href=\"{!! url('page/whats-new') !!}\">What&rsquo;s New</a></li><li><a href=\"{!! url('page/contact-us') !!}\">Contact Us </a></li></ul></div><div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/return-policy') !!}\"> Order and Returns </a></li><li><a href=\"{!! url('page/payment-policy') !!}\"> Payment Policy </a></li><li><a href=\"{!! url('page/shipping-policy') !!}\"> Shipping Policy</a></li><li><a href=\"{!! url('page/privacy-policy') !!}\"> Privacy and Cookies Policy </a></li></ul></div>",
                    "slider": true,
                    "advertisement": "null",
                    "sidebarCategoryCount": 9,
                    "featuredProductCount": 10,
                    "newProductsCount": 10,
                    "subscriptionBarContent": "<div class=\"social-icons col-lg-6\"><a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-facebook\" title=\"facebook\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-twitter\" title=\"twitter\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-linked-in\" title=\"linkedin\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-pintrest\" title=\"Pinterest\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-youtube\" title=\"Youtube\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-instagram\" title=\"instagram\"></i></a></div>",
                    "productViewImages": null,
                    "productPolicy": "<div class=\"row col-12 remove-padding-margin\"><div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-van-ship fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Free Shipping on Order $20 or More</span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Replace &amp; Return Available </span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Exchange and EMI Available </span></div></div></div></div></div>",
                    "locale": "en",
                    "channel": "default",
                    "headerContentCount": "5",
                    "createdAt": null,
                    "updatedAt": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Meta Data By ID

To get the  specific Meta Data, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query metaData {
      metaData(id: 1){
        id
        homePageContent
        footerLeftContent
        footerMiddleContent
        slider
        advertisement
        sidebarCategoryCount
        featuredProductCount
        newProductsCount
        subscriptionBarContent
        productViewImages
        productPolicy
        locale
        channel
        headerContentCount
        createdAt
        updatedAt
      }     
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "metaData": {
            "id": "1",
            "homePageContent": "<p>@include('shop::home.advertisements.advertisement-four')@include('shop::home.featured-products') @include('shop::home.product-policy') @include('shop::home.advertisements.advertisement-three') @include('shop::home.new-products') @include('shop::home.advertisements.advertisement-two')</p>",
            "footerLeftContent": "<p>We love to craft softwares and solve the real world problems with the binaries. We are highly committed to our goals. We invest our resources to create world class easy to use softwares and applications for the enterprise business with the top notch, on the edge technology expertise.</p>",
            "footerMiddleContent": "<div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/about-us') !!}\">About Us</a></li><li><a href=\"{!! url('page/cutomer-service') !!}\">Customer Service</a></li><li><a href=\"{!! url('page/whats-new') !!}\">What&rsquo;s New</a></li><li><a href=\"{!! url('page/contact-us') !!}\">Contact Us </a></li></ul></div><div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/return-policy') !!}\"> Order and Returns </a></li><li><a href=\"{!! url('page/payment-policy') !!}\"> Payment Policy </a></li><li><a href=\"{!! url('page/shipping-policy') !!}\"> Shipping Policy</a></li><li><a href=\"{!! url('page/privacy-policy') !!}\"> Privacy and Cookies Policy </a></li></ul></div>",
            "slider": true,
            "advertisement": "null",
            "sidebarCategoryCount": 9,
            "featuredProductCount": 10,
            "newProductsCount": 10,
            "subscriptionBarContent": "<div class=\"social-icons col-lg-6\"><a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-facebook\" title=\"facebook\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-twitter\" title=\"twitter\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-linked-in\" title=\"linkedin\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-pintrest\" title=\"Pinterest\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-youtube\" title=\"Youtube\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-instagram\" title=\"instagram\"></i></a></div>",
            "productViewImages": null,
            "productPolicy": "<div class=\"row col-12 remove-padding-margin\"><div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-van-ship fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Free Shipping on Order $20 or More</span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Replace &amp; Return Available </span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Exchange and EMI Available </span></div></div></div></div></div>",
            "locale": "en",
            "channel": "default",
            "headerContentCount": "5",
            "createdAt": null,
            "updatedAt": null
        }
    }
  }
  ~~~

:::

### 3. Update Meta Data

By using this API call you can update the Meta Data. To do this , you have to perform update mutation on Meta Data and paas the related fields in the request.
API call will update a Meta Data, only if the admin has logged in.


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
        updateMetaData(id:1,input:{
          homePageContent: "<p>@include('shop::home.advertisements.advertisement-four')@include('shop::home.featured-products') @include('shop::home.product-policy') @include('shop::home.advertisements.advertisement-three') @include('shop::home.new-products') @include('shop::home.advertisements.advertisement-two')</p>",
          footerLeftContent: "<p>We love to craft softwares and solve the real world problems with the binaries. We are highly committed to our goals. We invest our resources to create world class easy to use softwares and applications for the enterprise business with the top notch, on the edge technology expertise.</p>",
          footerMiddleContent: "<div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/about-us') !!}\">About Us</a></li><li><a href=\"{!! url('page/cutomer-service') !!}\">Customer Service</a></li><li><a href=\"{!! url('page/whats-new') !!}\">What&rsquo;s New</a></li><li><a href=\"{!! url('page/contact-us') !!}\">Contact Us </a></li></ul></div><div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/return-policy') !!}\"> Order and Returns </a></li><li><a href=\"{!! url('page/payment-policy') !!}\"> Payment Policy </a></li><li><a href=\"{!! url('page/shipping-policy') !!}\"> Shipping Policy</a></li><li><a href=\"{!! url('page/privacy-policy') !!}\"> Privacy and Cookies Policy </a></li></ul></div>",
          slider: true,
          sidebarCategoryCount: 9,
          featuredProductCount: 5,
          newProductsCount: 5,
          subscriptionBarContent: "<div class=\"social-icons col-lg-6\"><a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-facebook\" title=\"facebook\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-twitter\" title=\"twitter\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-linked-in\" title=\"linkedin\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-pintrest\" title=\"Pinterest\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-youtube\" title=\"Youtube\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-instagram\" title=\"instagram\"></i></a></div>",
          productPolicy: "<div class=\"row col-12 remove-padding-margin\"><div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-van-ship fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Free Shipping on Order $20 or More</span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Replace &amp; Return Available </span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Exchange and EMI Available </span></div></div></div></div></div>",
          locale: "en",
          channel: "default",
          headerContentCount: 9,
          images: {
          advertisementFour: [
            "https://demo.bagisto.com/bagisto-182-75-44-194/cache/large/product/157/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
            "https://demo.bagisto.com/bagisto-182-75-44-194/cache/large/product/157/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
          ]
          advertisementThree: [
            "https://demo.bagisto.com/bagisto-182-75-44-194/cache/large/product/157/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
            "https://demo.bagisto.com/stripe-common/themes/velocity/assets/images/big-sale-banner.png"
          ]
          advertisementTwo: [
            "https://demo.bagisto.com/bagisto-182-75-44-194/cache/large/product/157/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
            "https://demo.bagisto.com/bagisto-182-75-44-194/cache/large/product/157/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
          ]
        }
        }) {
          id
          homePageContent
          footerLeftContent
          footerMiddleContent
          slider
          advertisement
          sidebarCategoryCount
          featuredProductCount
          newProductsCount
          subscriptionBarContent
          productViewImages
          productPolicy
          locale
          channel
          headerContentCount
          createdAt
          updatedAt
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateMetaData": {
            "id": "1",
            "homePageContent": "<p>@include('shop::home.advertisements.advertisement-four')@include('shop::home.featured-products') @include('shop::home.product-policy') @include('shop::home.advertisements.advertisement-three') @include('shop::home.new-products') @include('shop::home.advertisements.advertisement-two')</p>",
            "footerLeftContent": "<p>We love to craft softwares and solve the real world problems with the binaries. We are highly committed to our goals. We invest our resources to create world class easy to use softwares and applications for the enterprise business with the top notch, on the edge technology expertise.</p>",
            "footerMiddleContent": "<div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/about-us') !!}\">About Us</a></li><li><a href=\"{!! url('page/cutomer-service') !!}\">Customer Service</a></li><li><a href=\"{!! url('page/whats-new') !!}\">What&rsquo;s New</a></li><li><a href=\"{!! url('page/contact-us') !!}\">Contact Us </a></li></ul></div><div class=\"col-lg-6 col-md-12 col-sm-12 no-padding\"><ul type=\"none\"><li><a href=\"{!! url('page/return-policy') !!}\"> Order and Returns </a></li><li><a href=\"{!! url('page/payment-policy') !!}\"> Payment Policy </a></li><li><a href=\"{!! url('page/shipping-policy') !!}\"> Shipping Policy</a></li><li><a href=\"{!! url('page/privacy-policy') !!}\"> Privacy and Cookies Policy </a></li></ul></div>",
            "slider": true,
            "advertisement": "null",
            "sidebarCategoryCount": 9,
            "featuredProductCount": 5,
            "newProductsCount": 5,
            "subscriptionBarContent": "<div class=\"social-icons col-lg-6\"><a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-facebook\" title=\"facebook\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-twitter\" title=\"twitter\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-linked-in\" title=\"linkedin\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-pintrest\" title=\"Pinterest\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-youtube\" title=\"Youtube\"></i> </a> <a href=\"https://webkul.com\" target=\"_blank\" class=\"unset\" rel=\"noopener noreferrer\"><i class=\"fs24 within-circle rango-instagram\" title=\"instagram\"></i></a></div>",
            "productViewImages": null,
            "productPolicy": "<div class=\"row col-12 remove-padding-margin\"><div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-van-ship fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Free Shipping on Order $20 or More</span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Replace &amp; Return Available </span></div></div></div></div> <div class=\"col-lg-4 col-sm-12 product-policy-wrapper\"><div class=\"card\"><div class=\"policy\"><div class=\"left\"><i class=\"rango-exchnage fs40\"></i></div> <div class=\"right\"><span class=\"font-setting fs20\">Product Exchange and EMI Available </span></div></div></div></div></div>",
            "locale": "en",
            "channel": "default",
            "headerContentCount": "9",
            "createdAt": null,
            "updatedAt": "2021-05-26 13:22:10"
        }
    }
  }
  ~~~
:::

## Header Content

In this section, we will see all the APIs which are related to Velocity Meta Data.

### 1. Get Header Content

You can get all the Header Content from the Bagisto store. You can achieve this job by using the `Header Content` API call.

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
    query headerContents {
      headerContents {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          contentType
          position
          status
          translations {
            id
            contentId
            title
            customTitle
            customHeading
            pageLink
            linkTarget
            catalogType
            products
            description
            locale
            createdAt
            updatedAt
          }
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "headerContents": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "contentType": "category",
                    "position": 1,
                    "status": true,
                    "translations": [
                        {
                            "id": "1",
                            "contentId": "1",
                            "title": "Test Header Content",
                            "customTitle": null,
                            "customHeading": null,
                            "pageLink": "test",
                            "linkTarget": false,
                            "catalogType": null,
                            "products": null,
                            "description": null,
                            "locale": "en",
                            "createdAt": null,
                            "updatedAt": null
                        },
                        {
                            "id": "2",
                            "contentId": "1",
                            "title": "Test Header Content",
                            "customTitle": null,
                            "customHeading": null,
                            "pageLink": null,
                            "linkTarget": false,
                            "catalogType": null,
                            "products": null,
                            "description": null,
                            "locale": "nl",
                            "createdAt": null,
                            "updatedAt": null
                        },
                        {
                            "id": "3",
                            "contentId": "1",
                            "title": "Test Header Content",
                            "customTitle": null,
                            "customHeading": null,
                            "pageLink": null,
                            "linkTarget": false,
                            "catalogType": null,
                            "products": null,
                            "description": null,
                            "locale": "tr",
                            "createdAt": null,
                            "updatedAt": null
                        }
                    ]
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Header Content By ID

To get the  specific Header Content, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query headerContent {
      headerContent(id: 1) {
        id
        contentType
        position
        status
        translations {
          id
          contentId
          title
          customTitle
          customHeading
          pageLink
          linkTarget
          catalogType
          products
          description
          locale
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
        "headerContent": {
            "id": "1",
            "contentType": "category",
            "position": 1,
            "status": true,
            "translations": [
                {
                    "id": "1",
                    "contentId": "1",
                    "title": "Test Header Content",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": "test",
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "en",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "2",
                    "contentId": "1",
                    "title": "Test Header Content",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": null,
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "nl",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "3",
                    "contentId": "1",
                    "title": "Test Header Content",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": null,
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "tr",
                    "createdAt": null,
                    "updatedAt": null
                }
            ]
        }
    }
  }
  ~~~
:::

### 3. Get Filtered Header Content

You can get the filter data from  the Header Content by passing the input fileds in the request and that you want in the response.

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
    query headerContents {
      headerContents(input: {
        id:1
        contentType: "category"
      }, page: 1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          contentType
          position
          status
          translations {
            id
            contentId
            title
            customTitle
            customHeading
            pageLink
            linkTarget
            catalogType
            products
            description
            locale
            createdAt
            updatedAt
          }
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "headerContents": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "contentType": "category",
                    "position": 1,
                    "status": true,
                    "translations": [
                        {
                            "id": "1",
                            "contentId": "1",
                            "title": "Test Header Content",
                            "customTitle": null,
                            "customHeading": null,
                            "pageLink": "test",
                            "linkTarget": false,
                            "catalogType": null,
                            "products": null,
                            "description": null,
                            "locale": "en",
                            "createdAt": null,
                            "updatedAt": null
                        },
                        {
                            "id": "2",
                            "contentId": "1",
                            "title": "Test Header Content",
                            "customTitle": null,
                            "customHeading": null,
                            "pageLink": null,
                            "linkTarget": false,
                            "catalogType": null,
                            "products": null,
                            "description": null,
                            "locale": "nl",
                            "createdAt": null,
                            "updatedAt": null
                        },
                        {
                            "id": "3",
                            "contentId": "1",
                            "title": "Test Header Content",
                            "customTitle": null,
                            "customHeading": null,
                            "pageLink": null,
                            "linkTarget": false,
                            "catalogType": null,
                            "products": null,
                            "description": null,
                            "locale": "tr",
                            "createdAt": null,
                            "updatedAt": null
                        }
                    ]
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new Header Content

  To create a Header Content, you have to perform mutation on Header Content and paas the related fields in the request.
  API call resource will create a new Header Content, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createHeaderContent {
      createHeaderContent(input: {
        title: "Test"
        position: 2
        status: false
        contentType: "category"
        locale: "en"
        pageLink: "test"
        linkTarget: true
      }) {
        id
        contentType
        position
        status
        translations {
          id
          contentId
          title
          customTitle
          customHeading
          pageLink
          linkTarget
          catalogType
          products
          description
          locale
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
        "createHeaderContent": {
            "id": "2",
            "contentType": "category",
            "position": 2,
            "status": false,
            "translations": [
                {
                    "id": "4",
                    "contentId": "2",
                    "title": "Test",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": null,
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "en",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "5",
                    "contentId": "2",
                    "title": "Test",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": null,
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "nl",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "6",
                    "contentId": "2",
                    "title": "Test",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": null,
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "tr",
                    "createdAt": null,
                    "updatedAt": null
                }
            ]
        }
    }
  }
  ~~~
:::

### 5. Update Header Content

By using this API call you can update the Header Content. To do this , you have to perform update mutation on Header Content and paas the related fields in the request.
API call will update a Header Content, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateHeaderContent {
      updateHeaderContent(
        id: 1,
        input: {
          title: "Test"
          position: 2
          status: true
          contentType: "category"
          locale: "en"
          pageLink: "test"
          linkTarget: false
        }
      ) {
          id
          contentType
          position
          status
          translations {
            id
            contentId
            title
            customTitle
            customHeading
            pageLink
            linkTarget
            catalogType
            products
            description
            locale
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
        "updateHeaderContent": {
            "id": "1",
            "contentType": "category",
            "position": 2,
            "status": true,
            "translations": [
                {
                    "id": "1",
                    "contentId": "1",
                    "title": "Test",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": "test",
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "en",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "2",
                    "contentId": "1",
                    "title": "Test Header Content",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": null,
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "nl",
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "3",
                    "contentId": "1",
                    "title": "Test Header Content",
                    "customTitle": null,
                    "customHeading": null,
                    "pageLink": null,
                    "linkTarget": false,
                    "catalogType": null,
                    "products": null,
                    "description": null,
                    "locale": "tr",
                    "createdAt": null,
                    "updatedAt": null
                }
            ]
        }
    }
  }
  ~~~
:::

### 6. Delete a Header Content

To delete a Header Content, you have to perform mutation on Header Content by passing the id of that Header Content.
API call will delete a Header Content, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteHeaderContent {
      deleteHeaderContent(id: 1) {
        success
      }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteHeaderContent": {
            "success": "Header Content deleted successfully."
        }
    }
  }
  ~~~
:
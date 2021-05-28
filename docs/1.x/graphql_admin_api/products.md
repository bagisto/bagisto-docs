# Products

In this section, we will see all the APIs which are related to Products.

##  Get All Products

You can get all the Products from the Bagisto store. You can achieve this job by using the `Products` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: No need to pass the all fields with the request, Pass the fields that you want in response.

- Query
  ~~~query
    query products {
      products {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          type
          attributeFamilyId
          sku
          parentId
          productFlats {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
            color
            colorLabel
            size
            sizeLabel
            locale
            channel
            productId
            parentId
            minPrice
            maxPrice
            metaTitle
            metaKeywords
            metaDescription
            width
            height
            depth
            variants {
              id
              sku
              name
              description
              shortDescription
              urlKey
              new
              featured
              status
              visibleIndividually
              thumbnail
              price
              locale
              channel
              productId
              parentId
            }
            parent {
              id
              sku
              name
              description
              shortDescription
              urlKey
              new
              featured
              status
              visibleIndividually
              thumbnail
              price
              cost
              specialPrice
              specialPriceFrom
              specialPriceTo
              weight
            }
            createdAt
            updatedAt
          }
          variants {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
          parent {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
          attributeFamily {
            id
            code
            name
            status
            isUserDefined
          }
          attributeValues {
            id
            productId
            attributeId
            locale
            channel
            textValue
            booleanValue
            integerValue
            floatValue
            dateTimeValue
            dateValue
            jsonValue
            attribute {
              id
              code
              adminName
              type
            }
          }
          superAttributes {
            id
            code
            adminName
            type
            position
          }
          categories {
            id
            name
            description
            slug
            urlPath
            imageUrl
            metaTitle
            metaDescription
            metaKeywords
            position
            status
            displayMode
            parentId
            filterableAttributes {
              id
              adminName
              code
              type
              position
            }
            translations {
              id
              name
              description
              localeId
              locale
            }
            createdAt
            updatedAt
          }
          inventories {
            id
            qty
            productId
            inventorySourceId
            vendorId
            inventorySource {
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
          }
          images {
            id
            type
            path
            productId
          }
          orderedInventories {
            id
            qty
            productId
            channelId
          }
          reviews {
            id
            title
            rating
            comment
            status
            productId
            customerId
            customerName
            createdAt
            updatedAt
          }
          groupedProducts {
            id
            qty
            sortOrder
            productId
            associatedProductId
            associatedProduct {
              id
              type
              attributeFamilyId
              sku
              parentId
            }
          }
          downloadableSamples {
            id
            url
            file
            fileName
            type
            sortOrder
            productId
            createdAt
            updatedAt
            translations {
              id
              locale
              title
              productDownloadableSampleId
            }
          }
          downloadableLinks {
            id
            title
            price
            url
            file
            fileName
            type
            sampleUrl
            sampleFile
            sampleFileName
            sampleType
            sortOrder
            productId
            downloads
            translations {
              id
              locale
              title
              productDownloadableLinkId
            }
          }
          bundleOptions {
            id
            type
            isRequired
            sortOrder
            productId
            bundleOptionProducts {
              id
              qty
              isUserDefined
              sortOrder
              isDefault
              productBundleOptionId
              productId
            }
            translations {
              id
              locale
              label
              productBundleOptionId
            }
          }
          customerGroupPrices {
            id
            qty
            valueType
            value
            productId
            customerGroupId
            createdAt
            updatedAt
          }
          booking {
            id
            type
            qty
            location
            showLocation
            availableEveryWeek
            availableFrom
            availableTo
            productId
            defaultSlot {
              id
              bookingType
              duration
              breakTime
              slots {
                to
                toDay
                from
                fromDay
              }
              bookingProductId
            }
            appointmentSlot {
              id
              duration
              breakTime
              sameSlotAllDays
              slots {
                from
                to
              }
              bookingProductId
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
        "products": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "test-product",
                    "parentId": null,
                    "productFlats": [
                        {
                            "id": "1",
                            "sku": "test-product",
                            "name": "testOutlet",
                            "description": "<p>testOutlet</p>",
                            "shortDescription": "<p>testOutlet</p>",
                            "urlKey": "testoutlet",
                            "new": true,
                            "featured": true,
                            "status": true,
                            "visibleIndividually": true,
                            "thumbnail": null,
                            "price": 5,
                            "cost": null,
                            "specialPrice": null,
                            "specialPriceFrom": null,
                            "specialPriceTo": null,
                            "weight": 3,
                            "color": 1,
                            "colorLabel": "Red",
                            "size": 6,
                            "sizeLabel": "S",
                            "locale": "en",
                            "channel": "default",
                            "productId": "1",
                            "parentId": null,
                            "minPrice": 4.5,
                            "maxPrice": 4.5,
                            "metaTitle": "",
                            "metaKeywords": "",
                            "metaDescription": "",
                            "width": 0,
                            "height": 0,
                            "depth": 0,
                            "variants": [],
                            "parent": null,
                            "createdAt": "2021-05-26 17:43:12",
                            "updatedAt": "2021-05-26 17:43:12"
                        }
                    ],
                    "variants": [],
                    "parent": null,
                    "attributeFamily": {
                        "id": "1",
                        "code": "default",
                        "name": "Default",
                        "status": false,
                        "isUserDefined": true
                    },
                    "attributeValues": [
                        {
                            "id": "1",
                            "productId": "1",
                            "attributeId": "9",
                            "locale": "en",
                            "channel": "default",
                            "textValue": "<p>testOutlet</p>",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "9",
                                "code": "short_description",
                                "adminName": "Short Description",
                                "type": "textarea"
                            }
                        },
                        {
                            "id": "2",
                            "productId": "1",
                            "attributeId": "10",
                            "locale": "en",
                            "channel": "default",
                            "textValue": "<p>testOutlet</p>",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "10",
                                "code": "description",
                                "adminName": "Description",
                                "type": "textarea"
                            }
                        },
                        {
                            "id": "3",
                            "productId": "1",
                            "attributeId": "1",
                            "locale": null,
                            "channel": null,
                            "textValue": "test-product",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "1",
                                "code": "sku",
                                "adminName": "SKU",
                                "type": "text"
                            }
                        },
                        {
                            "id": "4",
                            "productId": "1",
                            "attributeId": "2",
                            "locale": "en",
                            "channel": "default",
                            "textValue": "testOutlet",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "2",
                                "code": "name",
                                "adminName": "Name",
                                "type": "text"
                            }
                        },
                        {
                            "id": "5",
                            "productId": "1",
                            "attributeId": "3",
                            "locale": null,
                            "channel": null,
                            "textValue": "testoutlet",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "3",
                                "code": "url_key",
                                "adminName": "URL Key",
                                "type": "text"
                            }
                        },
                        {
                            "id": "6",
                            "productId": "1",
                            "attributeId": "4",
                            "locale": null,
                            "channel": "default",
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": 0,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "4",
                                "code": "tax_category_id",
                                "adminName": "Tax Category",
                                "type": "select"
                            }
                        },
                        {
                            "id": "7",
                            "productId": "1",
                            "attributeId": "5",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": true,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "5",
                                "code": "new",
                                "adminName": "New",
                                "type": "boolean"
                            }
                        },
                        {
                            "id": "8",
                            "productId": "1",
                            "attributeId": "6",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": true,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "6",
                                "code": "featured",
                                "adminName": "Featured",
                                "type": "boolean"
                            }
                        },
                        {
                            "id": "9",
                            "productId": "1",
                            "attributeId": "7",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": true,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "7",
                                "code": "visible_individually",
                                "adminName": "Visible Individually",
                                "type": "boolean"
                            }
                        },
                        {
                            "id": "10",
                            "productId": "1",
                            "attributeId": "8",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": true,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "8",
                                "code": "status",
                                "adminName": "Status",
                                "type": "boolean"
                            }
                        },
                        {
                            "id": "11",
                            "productId": "1",
                            "attributeId": "23",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": 1,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "23",
                                "code": "color",
                                "adminName": "Color",
                                "type": "select"
                            }
                        },
                        {
                            "id": "12",
                            "productId": "1",
                            "attributeId": "24",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": 6,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "24",
                                "code": "size",
                                "adminName": "Size",
                                "type": "select"
                            }
                        },
                        {
                            "id": "13",
                            "productId": "1",
                            "attributeId": "26",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": true,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "26",
                                "code": "guest_checkout",
                                "adminName": "Guest Checkout",
                                "type": "boolean"
                            }
                        },
                        {
                            "id": "14",
                            "productId": "1",
                            "attributeId": "27",
                            "locale": null,
                            "channel": null,
                            "textValue": "",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "27",
                                "code": "product_number",
                                "adminName": "Product Number",
                                "type": "text"
                            }
                        },
                        {
                            "id": "15",
                            "productId": "1",
                            "attributeId": "16",
                            "locale": "en",
                            "channel": "default",
                            "textValue": "",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "16",
                                "code": "meta_title",
                                "adminName": "Meta Title",
                                "type": "textarea"
                            }
                        },
                        {
                            "id": "16",
                            "productId": "1",
                            "attributeId": "17",
                            "locale": "en",
                            "channel": "default",
                            "textValue": "",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "17",
                                "code": "meta_keywords",
                                "adminName": "Meta Keywords",
                                "type": "textarea"
                            }
                        },
                        {
                            "id": "17",
                            "productId": "1",
                            "attributeId": "18",
                            "locale": "en",
                            "channel": "default",
                            "textValue": "",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "18",
                                "code": "meta_description",
                                "adminName": "Meta Description",
                                "type": "textarea"
                            }
                        },
                        {
                            "id": "18",
                            "productId": "1",
                            "attributeId": "11",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": 5,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "11",
                                "code": "price",
                                "adminName": "Price",
                                "type": "price"
                            }
                        },
                        {
                            "id": "19",
                            "productId": "1",
                            "attributeId": "12",
                            "locale": null,
                            "channel": "default",
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "12",
                                "code": "cost",
                                "adminName": "Cost",
                                "type": "price"
                            }
                        },
                        {
                            "id": "20",
                            "productId": "1",
                            "attributeId": "13",
                            "locale": null,
                            "channel": null,
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "13",
                                "code": "special_price",
                                "adminName": "Special Price",
                                "type": "price"
                            }
                        },
                        {
                            "id": "21",
                            "productId": "1",
                            "attributeId": "14",
                            "locale": null,
                            "channel": "default",
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "14",
                                "code": "special_price_from",
                                "adminName": "Special Price From",
                                "type": "date"
                            }
                        },
                        {
                            "id": "22",
                            "productId": "1",
                            "attributeId": "15",
                            "locale": null,
                            "channel": "default",
                            "textValue": null,
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "15",
                                "code": "special_price_to",
                                "adminName": "Special Price To",
                                "type": "date"
                            }
                        },
                        {
                            "id": "23",
                            "productId": "1",
                            "attributeId": "19",
                            "locale": null,
                            "channel": null,
                            "textValue": "",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "19",
                                "code": "width",
                                "adminName": "Width",
                                "type": "text"
                            }
                        },
                        {
                            "id": "24",
                            "productId": "1",
                            "attributeId": "20",
                            "locale": null,
                            "channel": null,
                            "textValue": "",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "20",
                                "code": "height",
                                "adminName": "Height",
                                "type": "text"
                            }
                        },
                        {
                            "id": "25",
                            "productId": "1",
                            "attributeId": "21",
                            "locale": null,
                            "channel": null,
                            "textValue": "",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "21",
                                "code": "depth",
                                "adminName": "Depth",
                                "type": "text"
                            }
                        },
                        {
                            "id": "26",
                            "productId": "1",
                            "attributeId": "22",
                            "locale": null,
                            "channel": null,
                            "textValue": "3",
                            "booleanValue": null,
                            "integerValue": null,
                            "floatValue": null,
                            "dateTimeValue": null,
                            "dateValue": null,
                            "jsonValue": null,
                            "attribute": {
                                "id": "22",
                                "code": "weight",
                                "adminName": "Weight",
                                "type": "text"
                            }
                        }
                    ],
                    "superAttributes": [],
                    "categories": [],
                    "inventories": [
                        {
                            "id": "1",
                            "qty": 3,
                            "productId": "1",
                            "inventorySourceId": "1",
                            "vendorId": 0,
                            "inventorySource": {
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
                        },
                        {
                            "id": "2",
                            "qty": 0,
                            "productId": "1",
                            "inventorySourceId": "2",
                            "vendorId": 0,
                            "inventorySource": {
                                "id": "2",
                                "code": "new",
                                "name": "demoinventory",
                                "description": "demo",
                                "contactName": "jyoti",
                                "contactEmail": "jyoti@webkul.com",
                                "contactNumber": "7252756566",
                                "contactFax": null,
                                "country": "IN",
                                "state": "UP",
                                "city": "Gorakhpur",
                                "street": "d-54",
                                "postcode": "273003",
                                "priority": 1,
                                "latitude": null,
                                "longitude": null,
                                "status": true
                            }
                        }
                    ],
                    "images": [],
                    "orderedInventories": [],
                    "reviews": [],
                    "groupedProducts": [],
                    "downloadableSamples": [],
                    "downloadableLinks": [],
                    "bundleOptions": [],
                    "customerGroupPrices": [],
                    "booking": null
                }
            ]
        }
    }
}
~~~
:::

##  Get Product By ID

To get the  specific Product, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can Pass all the fields of the above request.

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query product {
      product(id: 1) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          createdAt
          updatedAt
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        reviews {
          id
          title
          rating
          comment
          status
          productId
          customerId
          customerName
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

### 3. Get Filtered Products

You can get the filter data from  the Products by passing the input fileds in the request and that you want in the response.

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
    query products {
      products(input:{
        type: "simple"
        id: "1"
        sku: "test-product"
      },page:1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          type
          attributeFamilyId
          sku
          parentId
          productFlats {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
            color
            colorLabel
            size
            sizeLabel
            locale
            channel
            productId
            parentId
            minPrice
            maxPrice
            metaTitle
            metaKeywords
            metaDescription
            width
            height
            depth
            createdAt
            updatedAt
          }
          inventories {
            id
            qty
            productId
            inventorySourceId
            vendorId
            inventorySource {
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
          }
          images {
            id
            type
            path
            productId
          }
          orderedInventories {
            id
            qty
            productId
            channelId
          }
          reviews {
            id
            title
            rating
            comment
            status
            productId
            customerId
            customerName
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
        "products": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "test-product",
                    "parentId": null,
                    "productFlats": [
                        {
                            "id": "1",
                            "sku": "test-product",
                            "name": "testOutlet",
                            "description": "<p>testOutlet</p>",
                            "shortDescription": "<p>testOutlet</p>",
                            "urlKey": "testoutlet",
                            "new": true,
                            "featured": true,
                            "status": true,
                            "visibleIndividually": true,
                            "thumbnail": null,
                            "price": 5,
                            "cost": null,
                            "specialPrice": null,
                            "specialPriceFrom": null,
                            "specialPriceTo": null,
                            "weight": 3,
                            "color": 1,
                            "colorLabel": "Red",
                            "size": 6,
                            "sizeLabel": "S",
                            "locale": "en",
                            "channel": "default",
                            "productId": "1",
                            "parentId": null,
                            "minPrice": 4.5,
                            "maxPrice": 4.5,
                            "metaTitle": "",
                            "metaKeywords": "",
                            "metaDescription": "",
                            "width": 0,
                            "height": 0,
                            "depth": 0,
                            "createdAt": "2021-05-26 17:43:12",
                            "updatedAt": "2021-05-26 17:43:12"
                        }
                    ],
                    "inventories": [
                        {
                            "id": "1",
                            "qty": 3,
                            "productId": "1",
                            "inventorySourceId": "1",
                            "vendorId": 0,
                            "inventorySource": {
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
                        },
                        {
                            "id": "2",
                            "qty": 0,
                            "productId": "1",
                            "inventorySourceId": "2",
                            "vendorId": 0,
                            "inventorySource": {
                                "id": "2",
                                "code": "new",
                                "name": "demoinventory",
                                "description": "demo",
                                "contactName": "jyoti",
                                "contactEmail": "jyoti@webkul.com",
                                "contactNumber": "7252756566",
                                "contactFax": null,
                                "country": "IN",
                                "state": "UP",
                                "city": "Gorakhpur",
                                "street": "d-54",
                                "postcode": "273003",
                                "priority": 1,
                                "latitude": null,
                                "longitude": null,
                                "status": true
                            }
                        }
                    ],
                    "images": [],
                    "orderedInventories": [],
                    "reviews": []
                }
            ]
        }
    }
  }
  ~~~
:::


### 4. Delete a Product

To delete a Product, you have to perform mutation on Product by passing the id of that Product.
API call will delete a Product, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteProduct {
      deleteProduct(id: 2) {
          success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteProduct": {
            "success": "Product deleted successfully."
        }
    }
  }
  ~~~
:::

## Simple Products

In this section, we will see all the APIs which are related to Simple Products.

### 1. Create a new Simple Product

  To create a Simple Product, you have to perform mutation on Product and paas the related fields in the request.
  API call resource will create a new Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |


### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "simple"
        attributeFamilyId: 1
        sku: "men-cloths"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        variants {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        parent {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        attributeValues {
          id
          productId
          attributeId
          locale
          channel
          textValue
          booleanValue
          integerValue
          floatValue
          dateTimeValue
          dateValue
          jsonValue
          attribute {
            id
            code
            adminName
            type
          }
        }
        superAttributes {
          id
          code
          adminName
          type
          position
        }
        categories {
          id
          name
          description
          slug
          urlPath
          imageUrl
          metaTitle
          metaDescription
          metaKeywords
          position
          status
          displayMode
          parentId
          filterableAttributes {
            id
            adminName
            code
            type
            position
          }
          translations {
            id
            name
            description
            localeId
            locale
          }
          createdAt
          updatedAt
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        reviews {
          id
          title
          rating
          comment
          status
          productId
          customerId
          customerName
          createdAt
          updatedAt
        }
        groupedProducts {
          id
          qty
          sortOrder
          productId
          associatedProductId
          associatedProduct {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
        }
        downloadableSamples {
          id
          url
          file
          fileName
          type
          sortOrder
          productId
          createdAt
          updatedAt
          translations {
            id
            locale
            title
            productDownloadableSampleId
          }
        }
        downloadableLinks {
          id
          title
          price
          url
          file
          fileName
          type
          sampleUrl
          sampleFile
          sampleFileName
          sampleType
          sortOrder
          productId
          downloads
          translations {
            id
            locale
            title
            productDownloadableLinkId
          }
        }
        bundleOptions {
          id
          type
          isRequired
          sortOrder
          productId
          bundleOptionProducts {
          id
          qty
          isUserDefined
          sortOrder
          isDefault
          productBundleOptionId
          productId
        }
        translations {
          id
          locale
          label
          productBundleOptionId
        }
      }
      customerGroupPrices {
        id
        qty
        valueType
        value
        productId
        customerGroupId
        createdAt
        updatedAt
      }
      booking {
        id
        type
        qty
        location
        showLocation
        availableEveryWeek
        availableFrom
        availableTo
        productId
        defaultSlot {
          id
          bookingType
          duration
          breakTime
          slots {
            to
            toDay
            from
            fromDay
          }
          bookingProductId
        }
        appointmentSlot {
          id
          duration
          breakTime
          sameSlotAllDays
          slots {
            from
            to
          }
          bookingProductId
        }
      }
    }
  } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createProduct": {
            "id": "2",
            "type": "simple",
            "attributeFamilyId": 1,
            "sku": "men-cloths",
            "parentId": null,
            "productFlats": [
                {
                    "id": "2",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "2",
                    "parentId": null,
                    "minPrice": null,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-26 20:55:15",
                    "updatedAt": "2021-05-26 20:55:15"
                }
            ],
            "variants": [],
            "parent": null,
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "attributeValues": [],
            "superAttributes": [],
            "categories": [],
            "inventories": [],
            "images": [],
            "orderedInventories": [],
            "reviews": [],
            "groupedProducts": [],
            "downloadableSamples": [],
            "downloadableLinks": [],
            "bundleOptions": [],
            "customerGroupPrices": [],
            "booking": null
        }
    }
  }
  ~~~
:::

### 2. Update Product

By using this API call you can update the Product. To do this , you have to perform update mutation on Product and paas the related fields in the request.
API call will update a Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds with request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 2, input: {
        channel: "default"
        locale: "en"
        sku: "men-cloths"
        name: "Men Cloths"
        urlKey: "men-cloths"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        },	{
          customerGroupId: 3
          qty: 3
          valueType: "discount"
          value: 2
        }]
        inventories: [{
          inventorySourceId: 1
          qty: 111
        },	{
          inventorySourceId: 2
            qty: 222
        }]
        categories: 1
        channels: [1]
        upSell: [1]
        images: [
            "http://graphqlnew.com/themes/velocity/assets/images/banner.png",
            "http://graphqlnew.com/themes/velocity/assets/images/kids.png",
            "http://graphqlnew.com/themes/velocity/assets/images/headphones.png"
        ]
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          createdAt
          updatedAt
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        reviews {
          id
          title
          rating
          comment
          status
          productId
          customerId
          customerName
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
        "updateProduct": {
            "id": "2",
            "type": "simple",
            "attributeFamilyId": 1,
            "sku": "men-cloths",
            "parentId": null,
            "productFlats": [
                {
                    "id": "2",
                    "sku": "men-cloths",
                    "name": "Men Cloths",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "men-cloths",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "specialPrice": 11.3,
                    "specialPriceFrom": "2021-02-08",
                    "specialPriceTo": "2021-02-28",
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "2",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "createdAt": "2021-05-26 20:55:15",
                    "updatedAt": "2021-05-26 20:55:15"
                }
            ],
            "inventories": [
                {
                    "id": "3",
                    "qty": 111,
                    "productId": "2",
                    "inventorySourceId": "1",
                    "vendorId": 0,
                    "inventorySource": {
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
                },
                {
                    "id": "4",
                    "qty": 222,
                    "productId": "2",
                    "inventorySourceId": "2",
                    "vendorId": 0,
                    "inventorySource": {
                        "id": "2",
                        "code": "new",
                        "name": "demoinventory",
                        "description": "demo",
                        "contactName": "jyoti",
                        "contactEmail": "jyoti@webkul.com",
                        "contactNumber": "7252756566",
                        "contactFax": null,
                        "country": "IN",
                        "state": "UP",
                        "city": "Gorakhpur",
                        "street": "d-54",
                        "postcode": "273003",
                        "priority": 1,
                        "latitude": null,
                        "longitude": null,
                        "status": true
                    }
                }
            ],
            "images": [],
            "orderedInventories": [],
            "reviews": []
        }
    }
  }
  ~~~
:::


## Configurable Products

In this section, we will see all the APIs which are related to Configurable Products.

### 1. Create a new Configurable Product

  To create a Configurable Product, you have to perform mutation on Configurable Product and paas the related fields in the request.
  API call resource will create a new Configurable Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "configurable"
        attributeFamilyId: 1
        sku: "home-decor-2"
        # use super_attributes and family index in configurable type product only
        superAttributes: [{
            attributeCode: "color"
            values: [1, 2]
          },  {
            attributeCode: "size"
            values: [6]
          }]
          family: 1
        }) {
          id
          type
          attributeFamilyId
          sku
          parentId
          productFlats {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
            color
            colorLabel
            size
            sizeLabel
            locale
            channel
            productId
            parentId
            minPrice
            maxPrice
            metaTitle
            metaKeywords
            metaDescription
            width
            height
            depth
            variants {
              id
              sku
              name
              description
              shortDescription
              urlKey
              new
              featured
              status
              visibleIndividually
              thumbnail
              price
              locale
              channel
              productId
              parentId
            }
            parent {
              id
              sku
              name
              description
              shortDescription
              urlKey
              new
              featured
              status
              visibleIndividually
              thumbnail
              price
              cost
              specialPrice
              specialPriceFrom
              specialPriceTo
              weight
            }
            createdAt
            updatedAt
          }
          variants {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
          parent {
            id
            type
            attributeFamilyId
            sku
            parentId
          }
          attributeFamily {
            id
            code
            name
            status
            isUserDefined
          }
          attributeValues {
            id
            productId
            attributeId
            locale
            channel
            textValue
            booleanValue
            integerValue
            floatValue
            dateTimeValue
            dateValue
            jsonValue
            attribute {
              id
              code
              adminName
              type
            }
          }
          superAttributes {
            id
            code
            adminName
            type
            position
          }
          categories {
            id
            name
            description
            slug
            urlPath
            imageUrl
            metaTitle
            metaDescription
            metaKeywords
            position
            status
            displayMode
            parentId
            filterableAttributes {
              id
              adminName
              code
              type
              position
            }
            translations {
              id
              name
              description
              localeId
              locale
            }
            createdAt
            updatedAt
          }
          inventories {
            id
            qty
            productId
            inventorySourceId
            vendorId
            inventorySource {
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
          }
          images {
            id
            type
            path
            productId
          }
          orderedInventories {
            id
            qty
            productId
            channelId
          }
          reviews {
            id
            title
            rating
            comment
            status
            productId
            customerId
            customerName
            createdAt
            updatedAt
          }
          groupedProducts {
            id
            qty
            sortOrder
            productId
            associatedProductId
            associatedProduct {
              id
              type
              attributeFamilyId
              sku
              parentId
            }
          }
          downloadableSamples {
            id
            url
            file
            fileName
            type
            sortOrder
            productId
            createdAt
            updatedAt
            translations {
              id
              locale
              title
              productDownloadableSampleId
            }
          }
          downloadableLinks {
            id
            title
            price
            url
            file
            fileName
            type
            sampleUrl
            sampleFile
            sampleFileName
            sampleType
            sortOrder
            productId
            downloads
            translations {
              id
              locale
              title
              productDownloadableLinkId
            }
          }
          bundleOptions {
            id
            type
            isRequired
            sortOrder
            productId
            bundleOptionProducts {
              id
              qty
              isUserDefined
              sortOrder
              isDefault
              productBundleOptionId
              productId
            }
            translations {
              id
              locale
              label
              productBundleOptionId
            }
          }
          customerGroupPrices {
            id
            qty
            valueType
            value
            productId
            customerGroupId
            createdAt
            updatedAt
          }
          booking {
            id
            type
            qty
            location
            showLocation
            availableEveryWeek
            availableFrom
            availableTo
            productId
            defaultSlot {
              id
              bookingType
              duration
              breakTime
              slots {
                to
                toDay
                from
                fromDay
              }
              bookingProductId
            }
            appointmentSlot {
              id
              duration
              breakTime
              sameSlotAllDays
              slots {
                from
                to
              }
              bookingProductId
            }
          }
        }
      } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createProduct": {
            "id": "3",
            "type": "configurable",
            "attributeFamilyId": 1,
            "sku": "home-decor-2",
            "parentId": null,
            "productFlats": [
                {
                    "id": "3",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "3",
                    "parentId": null,
                    "minPrice": 0,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [
                        {
                            "id": "4",
                            "sku": "home-decor-2-variant-1-6",
                            "name": "",
                            "description": null,
                            "shortDescription": null,
                            "urlKey": null,
                            "new": null,
                            "featured": null,
                            "status": true,
                            "visibleIndividually": null,
                            "thumbnail": null,
                            "price": 0,
                            "locale": "en",
                            "channel": "default",
                            "productId": "4",
                            "parentId": 3
                        },
                        {
                            "id": "5",
                            "sku": "home-decor-2-variant-2-6",
                            "name": "",
                            "description": null,
                            "shortDescription": null,
                            "urlKey": null,
                            "new": null,
                            "featured": null,
                            "status": true,
                            "visibleIndividually": null,
                            "thumbnail": null,
                            "price": 0,
                            "locale": "en",
                            "channel": "default",
                            "productId": "5",
                            "parentId": 3
                        }
                    ],
                    "parent": null,
                    "createdAt": "2021-05-27 10:40:11",
                    "updatedAt": "2021-05-27 10:40:11"
                }
            ],
            "variants": [
                {
                    "id": "4",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "home-decor-2-variant-1-6",
                    "parentId": "3"
                },
                {
                    "id": "5",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "home-decor-2-variant-2-6",
                    "parentId": "3"
                }
            ],
            "parent": null,
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "attributeValues": [],
            "superAttributes": [
                {
                    "id": "23",
                    "code": "color",
                    "adminName": "Color",
                    "type": "select",
                    "position": 26
                },
                {
                    "id": "24",
                    "code": "size",
                    "adminName": "Size",
                    "type": "select",
                    "position": 27
                }
            ],
            "categories": [],
            "inventories": [],
            "images": [],
            "orderedInventories": [],
            "reviews": [],
            "groupedProducts": [],
            "downloadableSamples": [],
            "downloadableLinks": [],
            "bundleOptions": [],
            "customerGroupPrices": [],
            "booking": null
        }
    }
  }
  ~~~
:::

### 2. Update Configurable Product

By using this API call you can update the Configurable Product. To do this , you have to perform update mutation on Configurable Product and paas the related fields in the request.
API call will update a Configurable Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 3, input: {
        channel: "default"
        locale: "en"
        sku: "home-decor-2"
        name: "Home Decor-2"
        urlKey: "home-decor-2"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        },	{
          customerGroupId: 3
          qty: 3
          valueType: "discount"
          value: 2
        }]
        inventories: [{
          inventorySourceId: 1
          qty: 111
        },	{
          inventorySourceId: 2
          qty: 222
        }]
        channels: [1]
        upSell: [1]
        images: [
          "http://graphqlnew.com/themes/velocity/assets/images/banner.png",
          "http://graphqlnew.com/themes/velocity/assets/images/kids.png",
          "http://graphqlnew.com/themes/velocity/assets/images/headphones.png"
        ]
        # variants index passed only in case of configurable type product
        variants: [{
          variantId: 4
          sku: "home-decor-1-variant-1-6"
          name: "Red-S"
          color: 1
          size: 6
          inventories: [{
            inventorySourceId: 1
            qty: 111
          },  {
            inventorySourceId: 2
            qty: 222
          }]
          price: 10.0000
          weight: 1
          status: true
        },  {
          variantId: 5
          sku: "home-decor-1-variant-2-6"
          name: "Green-S"
          color: 2
          size: 6
          inventories: [{
            inventorySourceId: 1
            qty: 23
          },  {
            inventorySourceId: 2
            qty: 32
          }]
          price: 7.5000
          weight: 1.45
          status: true
        }]
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        variants {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        parent {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        attributeValues {
          id
          productId
          attributeId
          locale
          channel
          textValue
          booleanValue
          integerValue
          floatValue
          dateTimeValue
          dateValue
          jsonValue
          attribute {
            id
            code
            adminName
            type
          }
        }
        superAttributes {
          id
          code
          adminName
          type
          position
        }
        categories {
          id
          name
          description
          slug
          urlPath
          imageUrl
          metaTitle
          metaDescription
          metaKeywords
          position
          status
          displayMode
          parentId
          filterableAttributes {
            id
            adminName
            code
            type
            position
          }
          translations {
            id
            name
            description
            localeId
            locale
          }
          createdAt
          updatedAt
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        reviews {
          id
          title
          rating
          comment
          status
          productId
          customerId
          customerName
          createdAt
          updatedAt
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
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
        "updateProduct": {
            "id": "3",
            "type": "configurable",
            "attributeFamilyId": 1,
            "sku": "home-decor-2",
            "parentId": null,
            "productFlats": [
                {
                    "id": "3",
                    "sku": "home-decor-2",
                    "name": "Home Decor-2",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "home-decor-2",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "specialPrice": 11.3,
                    "specialPriceFrom": "2021-02-08",
                    "specialPriceTo": "2021-02-28",
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "3",
                    "parentId": null,
                    "minPrice": 0,
                    "maxPrice": 0,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [
                        {
                            "id": "4",
                            "sku": "home-decor-1-variant-1-6",
                            "name": "Red-S",
                            "description": null,
                            "shortDescription": null,
                            "urlKey": null,
                            "new": null,
                            "featured": null,
                            "status": true,
                            "visibleIndividually": null,
                            "thumbnail": null,
                            "price": 10,
                            "locale": "en",
                            "channel": "default",
                            "productId": "4",
                            "parentId": 3
                        },
                        {
                            "id": "5",
                            "sku": "home-decor-1-variant-2-6",
                            "name": "Green-S",
                            "description": null,
                            "shortDescription": null,
                            "urlKey": null,
                            "new": null,
                            "featured": null,
                            "status": true,
                            "visibleIndividually": null,
                            "thumbnail": null,
                            "price": 7.5,
                            "locale": "en",
                            "channel": "default",
                            "productId": "5",
                            "parentId": 3
                        }
                    ],
                    "parent": null,
                    "createdAt": "2021-05-27 10:40:11",
                    "updatedAt": "2021-05-27 10:40:11"
                }
            ],
            "variants": [
                {
                    "id": "4",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "home-decor-1-variant-1-6",
                    "parentId": "3"
                },
                {
                    "id": "5",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "home-decor-1-variant-2-6",
                    "parentId": "3"
                }
            ],
            "parent": null,
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "attributeValues": [
                {
                    "id": "76",
                    "productId": "3",
                    "attributeId": "9",
                    "locale": "en",
                    "channel": "default",
                    "textValue": "<p>Home Decor Short Description</p>",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "9",
                        "code": "short_description",
                        "adminName": "Short Description",
                        "type": "textarea"
                    }
                },
                {
                    "id": "77",
                    "productId": "3",
                    "attributeId": "10",
                    "locale": "en",
                    "channel": "default",
                    "textValue": "<p>Home Decor Description</p>",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "10",
                        "code": "description",
                        "adminName": "Description",
                        "type": "textarea"
                    }
                },
                {
                    "id": "78",
                    "productId": "3",
                    "attributeId": "1",
                    "locale": null,
                    "channel": null,
                    "textValue": "home-decor-2",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "1",
                        "code": "sku",
                        "adminName": "SKU",
                        "type": "text"
                    }
                },
                {
                    "id": "79",
                    "productId": "3",
                    "attributeId": "2",
                    "locale": "en",
                    "channel": "default",
                    "textValue": "Home Decor-2",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "2",
                        "code": "name",
                        "adminName": "Name",
                        "type": "text"
                    }
                },
                {
                    "id": "80",
                    "productId": "3",
                    "attributeId": "3",
                    "locale": null,
                    "channel": null,
                    "textValue": "home-decor-2",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "3",
                        "code": "url_key",
                        "adminName": "URL Key",
                        "type": "text"
                    }
                },
                {
                    "id": "81",
                    "productId": "3",
                    "attributeId": "4",
                    "locale": null,
                    "channel": "default",
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": 1,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "4",
                        "code": "tax_category_id",
                        "adminName": "Tax Category",
                        "type": "select"
                    }
                },
                {
                    "id": "82",
                    "productId": "3",
                    "attributeId": "5",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": true,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "5",
                        "code": "new",
                        "adminName": "New",
                        "type": "boolean"
                    }
                },
                {
                    "id": "83",
                    "productId": "3",
                    "attributeId": "6",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": true,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "6",
                        "code": "featured",
                        "adminName": "Featured",
                        "type": "boolean"
                    }
                },
                {
                    "id": "84",
                    "productId": "3",
                    "attributeId": "7",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": true,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "7",
                        "code": "visible_individually",
                        "adminName": "Visible Individually",
                        "type": "boolean"
                    }
                },
                {
                    "id": "85",
                    "productId": "3",
                    "attributeId": "8",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": true,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "8",
                        "code": "status",
                        "adminName": "Status",
                        "type": "boolean"
                    }
                },
                {
                    "id": "86",
                    "productId": "3",
                    "attributeId": "23",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": 3,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "23",
                        "code": "color",
                        "adminName": "Color",
                        "type": "select"
                    }
                },
                {
                    "id": "87",
                    "productId": "3",
                    "attributeId": "24",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": 9,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "24",
                        "code": "size",
                        "adminName": "Size",
                        "type": "select"
                    }
                },
                {
                    "id": "88",
                    "productId": "3",
                    "attributeId": "26",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": true,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "26",
                        "code": "guest_checkout",
                        "adminName": "Guest Checkout",
                        "type": "boolean"
                    }
                },
                {
                    "id": "89",
                    "productId": "3",
                    "attributeId": "16",
                    "locale": "en",
                    "channel": "default",
                    "textValue": "Home Decor Meta Title",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "16",
                        "code": "meta_title",
                        "adminName": "Meta Title",
                        "type": "textarea"
                    }
                },
                {
                    "id": "90",
                    "productId": "3",
                    "attributeId": "17",
                    "locale": "en",
                    "channel": "default",
                    "textValue": "Home Decor Meta Keywords",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "17",
                        "code": "meta_keywords",
                        "adminName": "Meta Keywords",
                        "type": "textarea"
                    }
                },
                {
                    "id": "91",
                    "productId": "3",
                    "attributeId": "18",
                    "locale": "en",
                    "channel": "default",
                    "textValue": "Home Decor Meta Description",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "18",
                        "code": "meta_description",
                        "adminName": "Meta Description",
                        "type": "textarea"
                    }
                },
                {
                    "id": "92",
                    "productId": "3",
                    "attributeId": "11",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": 12.55,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "11",
                        "code": "price",
                        "adminName": "Price",
                        "type": "price"
                    }
                },
                {
                    "id": "93",
                    "productId": "3",
                    "attributeId": "12",
                    "locale": null,
                    "channel": "default",
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": 11.5,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "12",
                        "code": "cost",
                        "adminName": "Cost",
                        "type": "price"
                    }
                },
                {
                    "id": "94",
                    "productId": "3",
                    "attributeId": "13",
                    "locale": null,
                    "channel": null,
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": 11.3,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "13",
                        "code": "special_price",
                        "adminName": "Special Price",
                        "type": "price"
                    }
                },
                {
                    "id": "95",
                    "productId": "3",
                    "attributeId": "14",
                    "locale": null,
                    "channel": "default",
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": "2021-02-08",
                    "jsonValue": null,
                    "attribute": {
                        "id": "14",
                        "code": "special_price_from",
                        "adminName": "Special Price From",
                        "type": "date"
                    }
                },
                {
                    "id": "96",
                    "productId": "3",
                    "attributeId": "15",
                    "locale": null,
                    "channel": "default",
                    "textValue": null,
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": "2021-02-28",
                    "jsonValue": null,
                    "attribute": {
                        "id": "15",
                        "code": "special_price_to",
                        "adminName": "Special Price To",
                        "type": "date"
                    }
                },
                {
                    "id": "97",
                    "productId": "3",
                    "attributeId": "19",
                    "locale": null,
                    "channel": null,
                    "textValue": "30",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "19",
                        "code": "width",
                        "adminName": "Width",
                        "type": "text"
                    }
                },
                {
                    "id": "98",
                    "productId": "3",
                    "attributeId": "20",
                    "locale": null,
                    "channel": null,
                    "textValue": "24",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "20",
                        "code": "height",
                        "adminName": "Height",
                        "type": "text"
                    }
                },
                {
                    "id": "99",
                    "productId": "3",
                    "attributeId": "21",
                    "locale": null,
                    "channel": null,
                    "textValue": "11",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "21",
                        "code": "depth",
                        "adminName": "Depth",
                        "type": "text"
                    }
                },
                {
                    "id": "100",
                    "productId": "3",
                    "attributeId": "22",
                    "locale": null,
                    "channel": null,
                    "textValue": "5.2",
                    "booleanValue": null,
                    "integerValue": null,
                    "floatValue": null,
                    "dateTimeValue": null,
                    "dateValue": null,
                    "jsonValue": null,
                    "attribute": {
                        "id": "22",
                        "code": "weight",
                        "adminName": "Weight",
                        "type": "text"
                    }
                }
            ],
            "superAttributes": [
                {
                    "id": "23",
                    "code": "color",
                    "adminName": "Color",
                    "type": "select",
                    "position": 26
                },
                {
                    "id": "24",
                    "code": "size",
                    "adminName": "Size",
                    "type": "select",
                    "position": 27
                }
            ],
            "categories": [],
            "inventories": [
                {
                    "id": "5",
                    "qty": 111,
                    "productId": "3",
                    "inventorySourceId": "1",
                    "vendorId": 0,
                    "inventorySource": {
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
                },
                {
                    "id": "6",
                    "qty": 222,
                    "productId": "3",
                    "inventorySourceId": "2",
                    "vendorId": 0,
                    "inventorySource": {
                        "id": "2",
                        "code": "new",
                        "name": "demoinventory",
                        "description": "demo",
                        "contactName": "jyoti",
                        "contactEmail": "jyoti@webkul.com",
                        "contactNumber": "7252756566",
                        "contactFax": null,
                        "country": "IN",
                        "state": "UP",
                        "city": "Gorakhpur",
                        "street": "d-54",
                        "postcode": "273003",
                        "priority": 1,
                        "latitude": null,
                        "longitude": null,
                        "status": true
                    }
                }
            ],
            "images": [],
            "orderedInventories": [],
            "reviews": [],
            "customerGroupPrices": [
                {
                    "id": "9",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 10,
                    "productId": "3",
                    "customerGroupId": "2",
                    "createdAt": "2021-05-27 11:35:35",
                    "updatedAt": "2021-05-27 11:35:35"
                },
                {
                    "id": "10",
                    "qty": 3,
                    "valueType": "discount",
                    "value": 2,
                    "productId": "3",
                    "customerGroupId": "3",
                    "createdAt": "2021-05-27 11:35:35",
                    "updatedAt": "2021-05-27 11:35:35"
                }
            ],
        }
    }
  }
  ~~~
:::

## Virtual Products

In this section, we will see all the APIs which are related to Virtual Products.

### 1. Create a new Virtual Product

  To create a Virtual Product, you have to perform mutation on Virtual Product and paas the related fields in the request.
  API call resource will create a new Virtual Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "virtual"
        attributeFamilyId: 1
        sku: "virtual-demo"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
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
        "createProduct": {
            "id": "6",
            "type": "virtual",
            "attributeFamilyId": 1,
            "sku": "virtual-demo",
            "parentId": null,
            "productFlats": [
                {
                    "id": "6",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "6",
                    "parentId": null,
                    "minPrice": null,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 12:07:19",
                    "updatedAt": "2021-05-27 12:07:19"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [],
            "images": [],
            "orderedInventories": [],
            "reviews": [],
            "customerGroupPrices": [],
        }
    }
  }
  ~~~
:::

### 2. Update Virtual Product

By using this API call you can update the Virtual Product. To do this , you have to perform update mutation on Virtual Product and paas the related fields in the request.
API call will update a Virtual Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 6, input: {
        channel: "default"
        locale: "en"
        sku: "virtual-demo"
        name: "Online Tuition Classes"
        urlKey: "online-tuition-classes"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 0
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        customerGroupPrices: [{
          customerGroupId: null
          qty: 2
          valueType: "fixed"
          value: 5
        }]
        inventories: [{
          inventorySourceId: 1
          qty: 111
        },	{
          inventorySourceId: 2
          qty: 222
        }]
        channels: [1]
        upSell: 1
        images: [
          "https://cdn.pixabay.com/photo/2021/02/01/12/28/fisherman-5970480_960_720.jpg",
          "http://graphqlnew.com/themes/velocity/assets/images/kids.png",
          "http://graphqlnew.com/themes/velocity/assets/images/headphones.png"
        ]
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
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
        "updateProduct": {
            "id": "6",
            "type": "virtual",
            "attributeFamilyId": 1,
            "sku": "virtual-demo",
            "parentId": null,
            "productFlats": [
                {
                    "id": "6",
                    "sku": "virtual-demo",
                    "name": "Online Tuition Classes",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "online-tuition-classes",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 0,
                    "specialPrice": 11.3,
                    "specialPriceFrom": "2021-02-08",
                    "specialPriceTo": "2021-02-28",
                    "weight": null,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "6",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 12:07:19",
                    "updatedAt": "2021-05-27 12:07:19"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [
                {
                    "id": "11",
                    "qty": 111,
                    "productId": "6",
                    "inventorySourceId": "1",
                    "vendorId": 0,
                    "inventorySource": {
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
                },
                {
                    "id": "12",
                    "qty": 222,
                    "productId": "6",
                    "inventorySourceId": "2",
                    "vendorId": 0,
                    "inventorySource": {
                        "id": "2",
                        "code": "new",
                        "name": "demoinventory",
                        "description": "demo",
                        "contactName": "jyoti",
                        "contactEmail": "jyoti@webkul.com",
                        "contactNumber": "7252756566",
                        "contactFax": null,
                        "country": "IN",
                        "state": "UP",
                        "city": "Gorakhpur",
                        "street": "d-54",
                        "postcode": "273003",
                        "priority": 1,
                        "latitude": null,
                        "longitude": null,
                        "status": true
                    }
                }
            ],
            "images": [
                {
                    "id": "2",
                    "type": null,
                    "path": "product/6/fisherman-5970480_960_720.jpg",
                    "productId": "6"
                }
            ],
            "orderedInventories": [],
            "customerGroupPrices": [
                {
                    "id": "12",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 5,
                    "productId": "6",
                    "customerGroupId": null,
                    "createdAt": "2021-05-27 12:17:34",
                    "updatedAt": "2021-05-27 12:17:34"
                }
            ]
        }
    }
  ~~~
:::

## Grouped Products

In this section, we will see all the APIs which are related to Grouped Products.

### 1. Create a new Grouped Product

  To create a Grouped Product, you have to perform mutation on Grouped Product and paas the related fields in the request.
  API call resource will create a new Grouped Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "grouped"
        attributeFamilyId: 1
        sku: "grouped-demo"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        images {
          id
          type
          path
          productId
        }
      }
    }
  ~~~
::: details Response
  ~~~json
  {
     "data": {
        "createProduct": {
            "id": "7",
            "type": "grouped",
            "attributeFamilyId": 1,
            "sku": "grouped-demo",
            "parentId": null,
            "productFlats": [
                {
                    "id": "7",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "7",
                    "parentId": null,
                    "minPrice": 0,
                    "maxPrice": 0,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 12:29:56",
                    "updatedAt": "2021-05-27 12:29:56"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "images": [],
        }
    }
  }
  ~~~
:::

### 2. Update Grouped Product

By using this API call you can update the Grouped Product. To do this , you have to perform update mutation on Grouped Product and paas the related fields in the request.
API call will update a Grouped Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 7, input: {
        channel: "default"
        locale: "en"
        sku: "grouped-demo"
        name: "Phone Accessories"
        urlKey: "phone-accessories"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 0
        links: [{
          associatedProductId: 1
          qty: 3
          sortOrder: 0
        }]
        channels: [1]
        upSell: 1
        images: [
          "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg"
        ]
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        groupedProducts {
          id
          qty
          sortOrder
          productId
          associatedProductId
          associatedProduct {
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
        "updateProduct": {
            "id": "7",
            "type": "grouped",
            "attributeFamilyId": 1,
            "sku": "grouped-demo",
            "parentId": null,
            "productFlats": [
                {
                    "id": "7",
                    "sku": "grouped-demo",
                    "name": "Phone Accessories",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "phone-accessories",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 0,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "7",
                    "parentId": null,
                    "minPrice": 4.5,
                    "maxPrice": 4.5,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 12:29:56",
                    "updatedAt": "2021-05-27 12:29:56"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [],
            "images": [
                {
                    "id": "5",
                    "type": null,
                    "path": "product/7/mobile-phone-1917737_960_720.jpg",
                    "productId": "7"
                },
                {
                    "id": "6",
                    "type": null,
                    "path": "product/7/iphone-410311_960_720.jpg",
                    "productId": "7"
                }
            ],
            "orderedInventories": [],
            "groupedProducts": [
                {
                    "id": "4",
                    "qty": 3,
                    "sortOrder": 0,
                    "productId": "7",
                    "associatedProductId": "1",
                    "associatedProduct": {
                        "id": "1",
                        "type": "simple",
                        "attributeFamilyId": 1,
                        "sku": "test-product",
                        "parentId": null
                    }
                }
            ]
        }
    }
  ~~~
:::

## Downloadable Products

In this section, we will see all the APIs which are related to Downloadable Products.

### 1. Create a new Downloadable Product

  To create a Downloadable Product, you have to perform mutation on Downloadable Product and paas the related fields in the request.
  API call resource will create a new Downloadable Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "downloadable"
        attributeFamilyId: 1
        sku: "e-book"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
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
        "createProduct": {
            "id": "8",
            "type": "downloadable",
            "attributeFamilyId": 1,
            "sku": "e-book",
            "parentId": null,
            "productFlats": [
                {
                    "id": "8",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "8",
                    "parentId": null,
                    "minPrice": null,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 12:52:39",
                    "updatedAt": "2021-05-27 12:52:39"
                }
            ]
        }
    }
  }
  ~~~
:::

### 2. Update Downloadable Product

By using this API call you can update the Downloadable Product. To do this , you have to perform update mutation on Downloadable Product and paas the related fields in the request.
API call will update a Downloadable Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 8, input: {
        channel: "default"
        locale: "en"
        sku: "e-book"
        name: "e-book"
        urlKey: "e-book"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        },	{
          customerGroupId: 3
          qty: 3
          valueType: "discount"
          value: 2
        }]
        inventories: [{
          inventorySourceId: 1
          qty: 111
        },	{
          inventorySourceId: 2
          qty: 222
        }]
        channels: [1]
        images: [
          "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg"
        ]
        downloadableLinks: [{
          locales: {
            code: "en"
            title: "Link 1"
          }
          price: 2
          type: "url"
          url: "https://cdn.pixabay.com/photo/2015/07/14/12/46/hot-air-balloon-844872__340.jpg"
          sampleType: "url"
          sampleUrl: "https://cdn.pixabay.com/photo/2019/12/17/13/11/manipulation-4701594__340.jpg"
          downloads: 5
          sortOrder: 0
        },  {
          locales: {
            code: "en"
            title: "Link 2"
          }
          price: 4
          type: "url"
          url: "https://cdn.pixabay.com/photo/2015/01/20/13/13/ipad-605439_960_720.jpg"
          sampleType: "url"
          sampleUrl: "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg"
          downloads: 8
          sortOrder: 1
        },  {
          locales: {
            code: "en"
            title: "Link 3"
          }
          price: 6
          type: "url"
          url: "https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_960_720.png"
          sampleType: "url"
          sampleUrl: ""
          downloads: 3
          sortOrder: 2
        }]
        downloadableSamples: [{
          locales: {
            code: "en"
            title: "Sample 1"
          }
          type: "url"
          url: "https://cdn.pixabay.com/photo/2015/06/08/15/09/photography-801891_960_720.jpg"
          sortOrder: 0
        }]
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        downloadableSamples {
          id
          url
          file
          fileName
          type
          sortOrder
          productId
          createdAt
          updatedAt
          translations {
            id
            locale
            title
            productDownloadableSampleId
          }
        }
        downloadableLinks {
          id
          title
          price
          url
          file
          fileName
          type
          sampleUrl
          sampleFile
          sampleFileName
          sampleType
          sortOrder
          productId
          downloads
          translations {
            id
            locale
            title
            productDownloadableLinkId
          }
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
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
        "updateProduct": {
            "id": "8",
            "type": "downloadable",
            "attributeFamilyId": 1,
            "sku": "e-book",
            "parentId": null,
            "productFlats": [
                {
                    "id": "8",
                    "sku": "e-book",
                    "name": "e-book",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "e-book",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "specialPrice": 11.3,
                    "specialPriceFrom": "2021-02-08",
                    "specialPriceTo": "2021-02-28",
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "8",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 12:52:39",
                    "updatedAt": "2021-05-27 12:52:39"
                }
            ],
            "variants": [],
            "parent": null,
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [
                {
                    "id": "13",
                    "qty": 111,
                    "productId": "8",
                    "inventorySourceId": "1",
                    "vendorId": 0,
                    "inventorySource": {
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
                },
                {
                    "id": "14",
                    "qty": 222,
                    "productId": "8",
                    "inventorySourceId": "2",
                    "vendorId": 0,
                    "inventorySource": {
                        "id": "2",
                        "code": "new",
                        "name": "demoinventory",
                        "description": "demo",
                        "contactName": "jyoti",
                        "contactEmail": "jyoti@webkul.com",
                        "contactNumber": "7252756566",
                        "contactFax": null,
                        "country": "IN",
                        "state": "UP",
                        "city": "Gorakhpur",
                        "street": "d-54",
                        "postcode": "273003",
                        "priority": 1,
                        "latitude": null,
                        "longitude": null,
                        "status": true
                    }
                }
            ],
            "images": [
                {
                    "id": "8",
                    "type": null,
                    "path": "product/8/guitar-756326_960_720.jpg",
                    "productId": "8"
                }
            ],
            "orderedInventories": [],
            "downloadableSamples": [
                {
                    "id": "2",
                    "url": "https://cdn.pixabay.com/photo/2015/06/08/15/09/photography-801891_960_720.jpg",
                    "file": null,
                    "fileName": null,
                    "type": "url",
                    "sortOrder": 0,
                    "productId": "8",
                    "createdAt": "2021-05-27 13:04:03",
                    "updatedAt": "2021-05-27 13:04:03",
                    "translations": [
                        {
                            "id": "2",
                            "locale": "en",
                            "title": "Sample 1",
                            "productDownloadableSampleId": "2"
                        }
                    ]
                }
            ],
            "downloadableLinks": [
                {
                    "id": "4",
                    "title": "Link 3",
                    "price": 6,
                    "url": "https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_960_720.png",
                    "file": null,
                    "fileName": null,
                    "type": "url",
                    "sampleUrl": "",
                    "sampleFile": null,
                    "sampleFileName": null,
                    "sampleType": "url",
                    "sortOrder": 2,
                    "productId": "8",
                    "downloads": 3,
                    "translations": [
                        {
                            "id": "4",
                            "locale": "en",
                            "title": "Link 3",
                            "productDownloadableLinkId": "4"
                        }
                    ]
                },
                {
                    "id": "5",
                    "title": "Link 2",
                    "price": 4,
                    "url": "https://cdn.pixabay.com/photo/2015/01/20/13/13/ipad-605439_960_720.jpg",
                    "file": null,
                    "fileName": null,
                    "type": "url",
                    "sampleUrl": "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg",
                    "sampleFile": null,
                    "sampleFileName": null,
                    "sampleType": "url",
                    "sortOrder": 1,
                    "productId": "8",
                    "downloads": 8,
                    "translations": [
                        {
                            "id": "5",
                            "locale": "en",
                            "title": "Link 2",
                            "productDownloadableLinkId": "5"
                        }
                    ]
                }
            ],
            "customerGroupPrices": [
                {
                    "id": "15",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 10,
                    "productId": "8",
                    "customerGroupId": "2",
                    "createdAt": "2021-05-27 13:04:03",
                    "updatedAt": "2021-05-27 13:04:03"
                },
                {
                    "id": "16",
                    "qty": 3,
                    "valueType": "discount",
                    "value": 2,
                    "productId": "8",
                    "customerGroupId": "3",
                    "createdAt": "2021-05-27 13:04:03",
                    "updatedAt": "2021-05-27 13:04:03"
                }
            ]
        }
    }
  }
  ~~~
:::

## Bundle Products

In this section, we will see all the APIs which are related to Bundle Products.

### 1. Create a new Bundle Product

  To create a Bundle Product, you have to perform mutation on Bundle Product and paas the related fields in the request.
  API call resource will create a new Bundle Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "bundle"
        attributeFamilyId: 1
        sku: "bundle-demo"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        bundleOptions {
          id
          type
          isRequired
          sortOrder
          productId
          bundleOptionProducts {
            id
            qty
            isUserDefined
            sortOrder
            isDefault
            productBundleOptionId
            productId
          }
          translations {
            id
            locale
            label
            productBundleOptionId
          }
        }
      }
    }
  ~~~
::: details Response
  ~~~json
  {
     "data": {
        "createProduct": {
            "id": "9",
            "type": "bundle",
            "attributeFamilyId": 1,
            "sku": "bundle-demo",
            "parentId": null,
            "productFlats": [
                {
                    "id": "9",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "9",
                    "parentId": null,
                    "minPrice": 0,
                    "maxPrice": 0,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 13:11:58",
                    "updatedAt": "2021-05-27 13:11:58"
                }
            ],
            "variants": [],
            "parent": null,
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "groupedProducts": [], 
        }
    }
  }
  ~~~
:::

### 2. Update Bundle Product

By using this API call you can update the Bundle Product. To do this , you have to perform update mutation on Bundle Product and paas the related fields in the request.
API call will update a Bundle Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 9, input: {
        channel: "default"
        locale: "en"
        sku: "bundle-demo"
        name: "Bundle Box"
        urlKey: "bundle-demo"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        },	{
          customerGroupId: 3
          qty: 3
          valueType: "discount"
          value: 2
        }]
        inventories: [{
          inventorySourceId: 1
          qty: 111
        },	{
          inventorySourceId: 2
          qty: 222
        }]
        channels: [1]
        upSell: 1
        images: [
          "https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_960_720.png"
        ]
        bundleOptions: [{
          locales: {
            code: "en"
            label: "Select 1"
          }
          type: "select"
          isRequired: true
          sortOrder: 0
          products: [{
            isDefault: true
            productId: 1
            qty: 1
            sortOrder: 1
          }]
        },  {
            
          locales: {
            code: "en"
            label: "Radio 1"
          }
          type: "radio"
          isRequired: true
          sortOrder: 1
          products: [{
            productId: 1
            qty: 2
            sortOrder: 1
          }]
        },  {
          locales: {
            code: "en"
            label: "Checkbox 1"
          }
          type: "checkbox"
          isRequired: false
          sortOrder: 3
          products: [{
            productId: 1
            qty: 4
            sortOrder: 2
          }]
        },  {
          locales: {
            code: "en"
            label: "Multi Select 1"
          }
          type: "multiselect"
          isRequired: true
          sortOrder: 4
          products: [{
            productId: 1
            qty: 1
            sortOrder: 3
          }]
        }]
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        bundleOptions {
          id
          type
          isRequired
          sortOrder
          productId
          bundleOptionProducts {
            id
            qty
            isUserDefined
            sortOrder
            isDefault
            productBundleOptionId
            productId
          }
          translations {
            id
            locale
            label
            productBundleOptionId
          }
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
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
        "updateProduct": {
            "id": "9",
            "type": "bundle",
            "attributeFamilyId": 1,
            "sku": "bundle-demo",
            "parentId": null,
            "productFlats": [
                {
                    "id": "9",
                    "sku": "bundle-demo",
                    "name": "Bundle Box",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "bundle-demo",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "specialPrice": 11.3,
                    "specialPriceFrom": "2021-02-08",
                    "specialPriceTo": "2021-02-28",
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "9",
                    "parentId": null,
                    "minPrice": 13.5,
                    "maxPrice": 31.5,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 13:11:58",
                    "updatedAt": "2021-05-27 13:11:58"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [
                {
                    "id": "15",
                    "qty": 111,
                    "productId": "9",
                    "inventorySourceId": "1",
                    "vendorId": 0,
                    "inventorySource": {
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
                },
                {
                    "id": "16",
                    "qty": 222,
                    "productId": "9",
                    "inventorySourceId": "2",
                    "vendorId": 0,
                    "inventorySource": {
                        "id": "2",
                        "code": "new",
                        "name": "demoinventory",
                        "description": "demo",
                        "contactName": "jyoti",
                        "contactEmail": "jyoti@webkul.com",
                        "contactNumber": "7252756566",
                        "contactFax": null,
                        "country": "IN",
                        "state": "UP",
                        "city": "Gorakhpur",
                        "street": "d-54",
                        "postcode": "273003",
                        "priority": 1,
                        "latitude": null,
                        "longitude": null,
                        "status": true
                    }
                }
            ],
            "images": [
                {
                    "id": "10",
                    "type": null,
                    "path": "product/9/cars-5970663_960_720.png",
                    "productId": "9"
                }
            ],
            "orderedInventories": [],
            "bundleOptions": [
                {
                    "id": "10",
                    "type": "checkbox",
                    "isRequired": false,
                    "sortOrder": 3,
                    "productId": "9",
                    "bundleOptionProducts": [
                        {
                            "id": "14",
                            "qty": 4,
                            "isUserDefined": true,
                            "sortOrder": 2,
                            "isDefault": false,
                            "productBundleOptionId": "10",
                            "productId": "1"
                        }
                    ],
                    "translations": [
                        {
                            "id": "10",
                            "locale": "en",
                            "label": "Checkbox 1",
                            "productBundleOptionId": "10"
                        }
                    ]
                },
                {
                    "id": "11",
                    "type": "radio",
                    "isRequired": true,
                    "sortOrder": 1,
                    "productId": "9",
                    "bundleOptionProducts": [
                        {
                            "id": "15",
                            "qty": 2,
                            "isUserDefined": true,
                            "sortOrder": 1,
                            "isDefault": true,
                            "productBundleOptionId": "11",
                            "productId": "1"
                        }
                    ],
                    "translations": [
                        {
                            "id": "11",
                            "locale": "en",
                            "label": "Radio 1",
                            "productBundleOptionId": "11"
                        }
                    ]
                },
                {
                    "id": "12",
                    "type": "multiselect",
                    "isRequired": true,
                    "sortOrder": 4,
                    "productId": "9",
                    "bundleOptionProducts": [
                        {
                            "id": "16",
                            "qty": 1,
                            "isUserDefined": true,
                            "sortOrder": 3,
                            "isDefault": true,
                            "productBundleOptionId": "12",
                            "productId": "1"
                        }
                    ],
                    "translations": [
                        {
                            "id": "12",
                            "locale": "en",
                            "label": "Multi Select 1",
                            "productBundleOptionId": "12"
                        }
                    ]
                }
            ],
            "customerGroupPrices": [
                {
                    "id": "29",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 10,
                    "productId": "9",
                    "customerGroupId": "2",
                    "createdAt": "2021-05-27 13:37:23",
                    "updatedAt": "2021-05-27 13:37:23"
                },
                {
                    "id": "30",
                    "qty": 3,
                    "valueType": "discount",
                    "value": 2,
                    "productId": "9",
                    "customerGroupId": "3",
                    "createdAt": "2021-05-27 13:37:23",
                    "updatedAt": "2021-05-27 13:37:23"
                }
            ]
        }
    }
  }
  ~~~
:::

## Booking Products

In this section, we will see all the APIs which are related to Booking Products.

### 1. Create a new Booking Product

  To create a Booking Product, you have to perform mutation on Booking Product and paas the related fields in the request.
  API call resource will create a new Booking Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "booking"
        attributeFamilyId: 1
        sku: "appointment-booking1"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        booking {
          id
          type
          qty
          location
          showLocation
          availableEveryWeek
          availableFrom
          availableTo
          productId
          defaultSlot {
            id
            bookingType
            duration
            breakTime
            slots {
              to
              toDay
              from
              fromDay
            }
            bookingProductId
          }
        }
      }
    }
  ~~~
::: details Response
  ~~~json
  {
     "data": {
        "createProduct": {
            "id": "11",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "appointment-booking1",
            "parentId": null,
            "productFlats": [
                {
                    "id": "11",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "11",
                    "parentId": null,
                    "minPrice": null,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 15:32:06",
                    "updatedAt": "2021-05-27 15:32:06"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "orderedInventories": [],
            "booking": null
        }
    }
  }
  ~~~
:::

### 2. Update Default Booking Product

By using this API call you can update the Default Booking Product. To do this , you have to perform update mutation on Default Booking Product and paas the related fields in the request.
API call will update a Default Booking Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 11, input: {
        channel: "default"
        locale: "en"
        sku: "booking-prod"
        name: "Appointment"
        urlKey: "appointment"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        },	{
          customerGroupId: 3
          qty: 3
          valueType: "discount"
          value: 2
        }]
        channels: [1]
        images: [
          "https://cdn.pixabay.com/photo/2015/11/03/08/58/meeting-1019875_960_720.jpg"
        ]
        booking: {
          type: "default"
          location: "Noida"
          qty: 120
          availableFrom: "2021-02-10 12:00:00"
          availableTo: "2021-02-28 12:00:00"
          bookingType: "one"
          slots: [{
            fromDay: 1
            from: "09:00"
            toDay: 5
            to: "12:00"
          },  {
            fromDay: 1
            from: "12:30"
            toDay: 5
            to: "15:00"
          },  {
            fromDay: 4
            from: "17:00"
            toDay: 6
            to: "20:00"
          }]
        }
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        booking {
          id
          type
          qty
          location
          showLocation
          availableEveryWeek
          availableFrom
          availableTo
          productId
          defaultSlot {
            id
            bookingType
            duration
            breakTime
            slots {
              to
              toDay
              from
              fromDay
            }
            bookingProductId
          }
        }
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "updateProduct": {
            "id": "11",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "booking-prod",
            "parentId": null,
            "productFlats": [
                {
                    "id": "11",
                    "sku": "booking-prod",
                    "name": "Appointment",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "appointment",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "specialPrice": 11.3,
                    "specialPriceFrom": "2021-02-08",
                    "specialPriceTo": "2021-02-28",
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "11",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 15:32:06",
                    "updatedAt": "2021-05-27 15:37:06"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "superAttributes": [],
            "categories": [],
            "inventories": [],
            "images": [
                {
                    "id": "12",
                    "type": null,
                    "path": "product/11/meeting-1019875_960_720.jpg",
                    "productId": "11"
                }
            ],
            "orderedInventories": [],
            "reviews": [],
            "groupedProducts": [],
            "downloadableSamples": [],
            "downloadableLinks": [],
            "bundleOptions": [],
            "customerGroupPrices": [
                {
                    "id": "33",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 10,
                    "productId": "11",
                    "customerGroupId": "2",
                    "createdAt": "2021-05-27 15:46:37",
                    "updatedAt": "2021-05-27 15:46:37"
                },
                {
                    "id": "34",
                    "qty": 3,
                    "valueType": "discount",
                    "value": 2,
                    "productId": "11",
                    "customerGroupId": "3",
                    "createdAt": "2021-05-27 15:46:37",
                    "updatedAt": "2021-05-27 15:46:37"
                }
            ],
            "booking": {
                "id": "1",
                "type": "default",
                "qty": 120,
                "location": "Noida",
                "showLocation": false,
                "availableEveryWeek": null,
                "availableFrom": "2021-02-10 12:00:00",
                "availableTo": "2021-02-28 12:00:00",
                "productId": "11",
                "defaultSlot": {
                    "id": "1",
                    "bookingType": "one",
                    "duration": null,
                    "breakTime": null,
                    "slots": [
                        {
                            "to": "12:00",
                            "toDay": 5,
                            "from": "09:00",
                            "fromDay": 1
                        },
                        {
                            "to": "15:00",
                            "toDay": 5,
                            "from": "12:30",
                            "fromDay": 1
                        },
                        {
                            "to": "20:00",
                            "toDay": 6,
                            "from": "17:00",
                            "fromDay": 4
                        }
                    ],
                    "bookingProductId": "1"
                },
                "appointmentSlot": null
            }
        }
    }
  }
  ~~~
:::

### 3. Update Appointment Booking Product

By using this API call you can update the Appointment Booking Product. To do this , you have to perform update mutation on Appointment Booking Product and paas the related fields in the request.
API call will update a Appointment Booking Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 11, input: {
        channel: "default"
        locale: "en"
        sku: "appointment-booking1"
        name: "Dr. Appointment"
        urlKey: "dr-appointment"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        }]
        channels: [1]
        images: [
          "https://cdn.pixabay.com/photo/2015/11/03/08/58/meeting-1019875_960_720.jpg"
        ]
        booking: {
          type: "appointment"
          location: "Dehradun"
          qty: 14
          availableEveryWeek: false
          availableFrom: "2021-02-10 12:00:00"
          availableTo: "2021-02-28 12:00:00"
          duration: 45
          breakTime: 15

          # # In case same_slot_all_days: set to true
          # same_slot_all_days: true
          # slots: [{
          #     from: "09:00"
          #     to: "09:45"
          # },  {
          #     from: "10:00"
          #     to: "10:45"
          # },  {
          #     from: "11:00"
          #     to: "11:45"
          # },  {
          #     from: "14:00"
          #     to: "14:45"
          # }]
          
          # In case same_slot_all_days: set to false 
          sameSlotAllDays: false
          slots: [{
            day: 0
            from: "09:00"
            to: "09:45"
          },  {
            day: 0
            from: "10:00"
            to: "10:45"
          },  {
            day: 1
            from: "11:00"
            to: "11:45"
          },  {
            day: 5
            from: "09:00"
            to: "09:45"
          },  {
            day: 5
            from: "11:00"
            to: "11:45"
          },  {
            day: 5
            from: "12:00"
            to: "12:45"
          }]
        }
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
          createdAt
          updatedAt
        }
        booking {
          id
          type
          qty
          location
          showLocation
          availableEveryWeek
          availableFrom
          availableTo
          productId
          appointmentSlot {
            id
            duration
            breakTime
            sameSlotAllDays
            slots {
              id
              from
              to
            }
            bookingProductId
          }
        }
        sameDaySlots {
          id
          day
          from
          to
        }
        differentDaySlots {
          id
          day
          from
          to
        }
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "updateProduct": {
            "id": "11",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "appointment-booking1",
            "parentId": null,
            "productFlats": [
                {
                    "id": "11",
                    "sku": "appointment-booking1",
                    "name": "Dr. Appointment",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "dr-appointment",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "specialPrice": 11.3,
                    "specialPriceFrom": "2021-02-08",
                    "specialPriceTo": "2021-02-28",
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "11",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 15:32:06",
                    "updatedAt": "2021-05-27 15:51:37"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [],
            "images": [
                {
                    "id": "13",
                    "type": null,
                    "path": "product/11/meeting-1019875_960_720.jpg",
                    "productId": "11"
                }
            ],
            "orderedInventories": [],
            "customerGroupPrices": [
                {
                    "id": "37",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 10,
                    "productId": "11",
                    "customerGroupId": "2",
                    "createdAt": "2021-05-27 15:52:03",
                    "updatedAt": "2021-05-27 15:52:03"
                }
            ],
            "booking": {
                "id": "1",
                "type": "appointment",
                "qty": 14,
                "location": "Dehradun",
                "showLocation": false,
                "availableEveryWeek": false,
                "availableFrom": "2021-02-10 12:00:00",
                "availableTo": "2021-02-28 12:00:00",
                "productId": "11",
                "appointmentSlot": {
                    "id": "1",
                    "duration": 45,
                    "breakTime": 15,
                    "sameSlotAllDays": false,
                    "slots": [
                        {
                            "id": null,
                            "from": null,
                            "to": null
                        },
                        {
                            "id": null,
                            "from": null,
                            "to": null
                        },
                        {
                            "id": null,
                            "from": null,
                            "to": null
                        },
                        {
                            "id": null,
                            "from": null,
                            "to": null
                        },
                        {
                            "id": null,
                            "from": null,
                            "to": null
                        },
                        {
                            "id": null,
                            "from": null,
                            "to": null
                        },
                        {
                            "id": null,
                            "from": null,
                            "to": null
                        }
                    ],
                    "bookingProductId": "1"
                }
            },
            "sameDaySlots": [],
            "differentDaySlots": [
                {
                    "id": "0_slot_0",
                    "day": 0,
                    "from": "09:00",
                    "to": "09:45"
                },
                {
                    "id": "0_slot_1",
                    "day": 0,
                    "from": "10:00",
                    "to": "10:45"
                },
                {
                    "id": "1_slot_0",
                    "day": 1,
                    "from": "11:00",
                    "to": "11:45"
                },
                {
                    "id": "5_slot_0",
                    "day": 5,
                    "from": "09:00",
                    "to": "09:45"
                },
                {
                    "id": "5_slot_1",
                    "day": 5,
                    "from": "11:00",
                    "to": "11:45"
                },
                {
                    "id": "5_slot_2",
                    "day": 5,
                    "from": "12:00",
                    "to": "12:45"
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new Event Booking Product

  To create a Event Booking Product, you have to perform mutation on Booking Product and paas the related fields in the request.
  API call resource will create a new Event Booking Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "booking"
        attributeFamilyId: 1
        sku: "event-booking"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        variants {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        parent {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
          createdAt
          updatedAt
        }
        booking {
          id
          type
          qty
          location
          showLocation
          availableEveryWeek
          availableFrom
          availableTo
          productId
          defaultSlot {
            id
            bookingType
            duration
            breakTime
            slots {
              to
              toDay
              from
              fromDay
            }
            bookingProductId
          }
          appointmentSlot {
            id
            duration
            breakTime
            sameSlotAllDays
            slots {
              from
              to
            }
            bookingProductId
          }
        }
      }
    }
  ~~~
::: details Response
  ~~~json
  {
     "data": {
        "createProduct": {
            "id": "12",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "event-booking",
            "parentId": null,
            "productFlats": [
                {
                    "id": "12",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "specialPrice": null,
                    "specialPriceFrom": null,
                    "specialPriceTo": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "12",
                    "parentId": null,
                    "minPrice": null,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 16:04:24",
                    "updatedAt": "2021-05-27 16:04:24"
                }
            ],
            "variants": [],
            "parent": null,
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [],
            "images": [],
            "orderedInventories": [],
            "customerGroupPrices": [],
            "booking": null
        }
    }
  }
  ~~~
:::

### 5. Update Event Booking Product

By using this API call you can update the Event Booking Product. To do this , you have to perform update mutation on Event Booking Product and paas the related fields in the request.
API call will update a Event Booking Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 12, input: {
        channel: "default"
        locale: "en"
        sku: "event-booking"
        name: "Music Show"
        urlKey: "music-show"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        }]
        channels: [1]
        images: [
          "https://cdn.pixabay.com/photo/2015/11/03/08/58/meeting-1019875_960_720.jpg"
        ]
        booking: {
          type: "event"
          location: "Meerut"
          availableFrom: "2021-02-10 12:00:00"
          availableTo: "2021-02-28 12:00:00"
          tickets: [{
            locales: {
              locale: "en"
              name: "First Show"
              description: "First Music Show "
            }
            price: 4
            qty: 50
          },  {
            locales: {
              locale: "en"
              name: "Evening Show"
              description: "Evening Music Show"
            }
            price: 7
            qty: 40
          }]
        }
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
          createdAt
          updatedAt
        }
        booking {
          id
          type
          location
          showLocation
          availableFrom
          availableTo
          productId
          eventTickets {
            id
            price
            qty
            translations {
              locale
              name
              description
            }
            bookingProductId
          }
        }
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "updateProduct": {
            "id": "12",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "event-booking",
            "parentId": null,
            "productFlats": [
                {
                    "id": "12",
                    "sku": "event-booking",
                    "name": "Music Show",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "music-show",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "12",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 16:04:24",
                    "updatedAt": "2021-05-27 16:04:24"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [],
            "images": [
                {
                    "id": "15",
                    "type": null,
                    "path": "product/12/meeting-1019875_960_720.jpg",
                    "productId": "12"
                }
            ],
            "orderedInventories": [],
            "customerGroupPrices": [
                {
                    "id": "39",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 10,
                    "productId": "12",
                    "customerGroupId": "2",
                    "createdAt": "2021-05-27 16:18:30",
                    "updatedAt": "2021-05-27 16:18:30"
                }
            ],
            "booking": {
                "id": "2",
                "type": "event",
                "location": "Meerut",
                "showLocation": false,
                "availableFrom": "2021-02-10 12:00:00",
                "availableTo": "2021-02-28 12:00:00",
                "productId": "12",
                "eventTickets": [
                    {
                        "id": "3",
                        "price": 4,
                        "qty": 50,
                        "translations": [
                            {
                                "locale": "en",
                                "name": "First Show",
                                "description": "First Music Show"
                            }
                        ],
                        "bookingProductId": "2"
                    },
                    {
                        "id": "4",
                        "price": 7,
                        "qty": 40,
                        "translations": [
                            {
                                "locale": "en",
                                "name": "Evening Show",
                                "description": "Evening Music Show"
                            }
                        ],
                        "bookingProductId": "2"
                    }
                ]
            }
        }
    }
  }
  ~~~
:::

### 6. Create a new Rental Booking Product

  To create a Event Rental Booking Product, you have to perform mutation on Rental Booking Product and paas the related fields in the request.
  API call resource will create a new Event Rental Booking Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
          type: "booking"
          attributeFamilyId: 1
          sku: "ac-on-rent"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        variants {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        parent {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
          createdAt
          updatedAt
        }
        booking {
          id
          type
          qty
          location
          showLocation
          availableEveryWeek
          availableFrom
          availableTo
          productId
          defaultSlot {
            id
            bookingType
            duration
            breakTime
            slots {
              to
              toDay
              from
              fromDay
            }
            bookingProductId
          }
          appointmentSlot {
            id
            duration
            breakTime
            sameSlotAllDays
            slots {
              from
              to
            }
            bookingProductId
          }
        }
      }
    }
  ~~~
::: details Response
  ~~~json
  {
     "data": {
        "createProduct": {
            "id": "13",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "ac-on-rent",
            "parentId": null,
            "productFlats": [
                {
                    "id": "13",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "13",
                    "parentId": null,
                    "minPrice": null,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 16:30:11",
                    "updatedAt": "2021-05-27 16:30:11"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [],
            "images": [],
            "orderedInventories": [],
            "customerGroupPrices": [],
            "booking": null
        }
    }
  }
  ~~~
:::

### 7. Update Rental Booking Product

By using this API call you can update the Rental Booking Product. To do this , you have to perform update mutation on Rental Booking Product and paas the related fields in the request.
API call will update a Rental Booking Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 13, input: {
        channel: "default"
        locale: "en"
        sku: "ac-on-rent"
        name: "AC On Rent"
        urlKey: "ac-on-rent"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        inventories: [{
          inventorySourceId: 1
          qty: 111
        }]
        channels: [1]
        images: [
          "http://graphqlnew.com/themes/velocity/assets/images/kids.png",
        ]
        booking: {
          type: "rental"
          location: "UK"
          qty: 23
          availableEveryWeek: false
          availableFrom: "2021-02-10 12:00:00"
          availableTo: "2021-02-28 12:00:00"
          sameSlotAllDays: false
          rentalSlot: {
            rentingType: "hourly"
            dailyPrice: null
            hourlyPrice: 4.20
            slots: [{
              day: 0
              from: "09:00"
              to: "09:45"
            },  {
              day: 0
              from: "10:00"
              to: "10:45"
            },  {
              day: 2
              from: "11:00"
              to: "11:45"
            },  {
              day: 2
              from: "12:00"
              to: "12:45"
            }]
          }
        }
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
          createdAt
          updatedAt
        }
        booking {
          id
          type
          location
          showLocation
          availableFrom
          availableTo
          productId
          eventTickets {
            id
            price
            qty
            translations {
              locale
              name
              description
            }
            bookingProductId
          }
        }
        sameDaySlots {
          id
          day
          from
          to
        }
        differentDaySlots {
          id
          day
          from
          to
        } 
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "updateProduct": {
            "id": "13",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "ac-on-rent",
            "parentId": null,
            "productFlats": [
                {
                    "id": "13",
                    "sku": "ac-on-rent",
                    "name": "AC On Rent",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "ac-on-rent",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "13",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 16:30:11",
                    "updatedAt": "2021-05-27 16:30:11"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [
                {
                    "id": "17",
                    "qty": 111,
                    "productId": "13",
                    "inventorySourceId": "1",
                    "vendorId": 0,
                    "inventorySource": {
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
                }
            ],
            "images": [],
            "orderedInventories": [],
            "customerGroupPrices": [],
            "booking": {
                "type": "rental",
                "location": "UK",
                "qty": 23,
                "availableEveryWeek": false,
                "availableFrom": "2021-02-10 12:00:00",
                "availableTo": "2021-02-28 12:00:00",
                "rentalSlot": {
                    "rentingType": "hourly",
                    "dailyPrice": null,
                    "hourlyPrice": 4.2,
                    "slots": [
                        {
                            "from": null,
                            "to": null
                        },
                        {
                            "from": null,
                            "to": null
                        }
                    ]
                }
            },
            "sameDaySlots": [],
            "differentDaySlots": [
                {
                    "id": null,
                    "day": 0,
                    "from": "09:00",
                    "to": "09:45"
                },
                {
                    "id": null,
                    "day": 0,
                    "from": "10:00",
                    "to": "10:45"
                },
                {
                    "id": null,
                    "day": 2,
                    "from": "11:00",
                    "to": "11:45"
                },
                {
                    "id": null,
                    "day": 2,
                    "from": "12:00",
                    "to": "12:45"
                }
            ]
        }
    }
  }
  ~~~
:::

### 8. Create a new Table Booking Product

  To create a Event Table Booking Product, you have to perform mutation on Table Booking Product and paas the related fields in the request.
  API call resource will create a new Event Table Booking Product, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: Here you can pass Only those filed with the request that you want in the response.

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createProduct {
      createProduct(input: {
        type: "booking"
        attributeFamilyId: 1
        sku: "hotel-table"
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          specialPrice
          specialPriceFrom
          specialPriceTo
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        variants {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        parent {
          id
          type
          attributeFamilyId
          sku
          parentId
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
          createdAt
          updatedAt
        }
        booking {
          id
          type
          qty
          location
          showLocation
          availableEveryWeek
          availableFrom
          availableTo
          productId
          defaultSlot {
            id
            bookingType
            duration
            breakTime
            slots {
              to
              toDay
              from
              fromDay
            }
            bookingProductId
          }
          appointmentSlot {
            id
            duration
            breakTime
            sameSlotAllDays
            slots {
              from
              to
            }
            bookingProductId
          }
        }
      }
    }
  ~~~
::: details Response
  ~~~json
  {
     "data": {
        "createProduct": {
            "id": "14",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "hotel-table",
            "parentId": null,
            "productFlats": [
                {
                    "id": "14",
                    "sku": "",
                    "name": null,
                    "description": null,
                    "shortDescription": null,
                    "urlKey": null,
                    "new": null,
                    "featured": null,
                    "status": null,
                    "visibleIndividually": null,
                    "thumbnail": null,
                    "price": null,
                    "cost": null,
                    "weight": null,
                    "color": null,
                    "colorLabel": null,
                    "size": null,
                    "sizeLabel": null,
                    "locale": "en",
                    "channel": "default",
                    "productId": "14",
                    "parentId": null,
                    "minPrice": null,
                    "maxPrice": null,
                    "metaTitle": null,
                    "metaKeywords": null,
                    "metaDescription": null,
                    "width": null,
                    "height": null,
                    "depth": null,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 16:45:57",
                    "updatedAt": "2021-05-27 16:45:57"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [],
            "images": [],
            "orderedInventories": [],
            "customerGroupPrices": [],
            "booking": null
        }
    }
  }
  ~~~
:::

### 7. Update Table Booking Product

By using this API call you can update the Table Booking Product. To do this , you have to perform update mutation on Table Booking Product and paas the related fields in the request.
API call will update a Table Booking Product, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateProduct {
      updateProduct(id: 14, input: {
        channel: "default"
        locale: "en"
        sku: "hotel-table"
        name: "Hotel Table"
        urlKey: "hotel-table"
        taxCategoryId: 1
        new: true
        featured: true
        visibleIndividually: true
        status: true
        guestCheckout: true
        color: 3
        size: 9
        shortDescription: "<p>Home Decor Short Description</p>"
        description: "<p>Home Decor Description</p>"
        metaTitle: "Home Decor Meta Title"
        metaKeywords: "Home Decor Meta Keywords"
        metaDescription: "Home Decor Meta Description"
        price: 12.55
        cost: 11.50
        specialPrice: 11.30
        specialPriceFrom: "2021-02-08"
        specialPriceTo: "2021-02-28"
        width: 30
        height: 24
        depth: 11
        weight: 5.20
        customerGroupPrices: [{
          customerGroupId: 2
          qty: 2
          valueType: "fixed"
          value: 10
        }]
        inventories: [{
          inventorySourceId: 1
          qty: 111
        },	{
          inventorySourceId: 2
          qty: 222
        }]
        channels: [1]
        images: [
          "http://graphqlnew.com/themes/velocity/assets/images/headphones.png"
        ]
        booking: {
          type: "table"
          location: "Hisar"
          qty: 5
          duration: 45
          breakTime: 15
          availableEveryWeek: true
          availableFrom: "2021-02-11 12:00:00"
          availableTo: "2021-02-18 12:00:00"
          sameSlotAllDays: true
          tableSlot: {
            priceType: "guest"
            guestLimit: 5
            preventSchedulingBefore: 3
            slots: [{
              day: 0
              from: "09:00"
              to: "09:45"
            },  {
              day: 1
              from: "10:00"
              to: "10:45"
            },  {
              day: 2
              from: "11:00"
              to: "11:45"
            },  {
              day: 3
              from: "12:00"
              to: "12:45"
            }]
          }
        }
      }) {
        id
        type
        attributeFamilyId
        sku
        parentId
        productFlats {
          id
          sku
          name
          description
          shortDescription
          urlKey
          new
          featured
          status
          visibleIndividually
          thumbnail
          price
          cost
          weight
          color
          colorLabel
          size
          sizeLabel
          locale
          channel
          productId
          parentId
          minPrice
          maxPrice
          metaTitle
          metaKeywords
          metaDescription
          width
          height
          depth
          variants {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            locale
            channel
            productId
            parentId
          }
          parent {
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
          }
          createdAt
          updatedAt
        }
        attributeFamily {
          id
          code
          name
          status
          isUserDefined
        }
        inventories {
          id
          qty
          productId
          inventorySourceId
          vendorId
          inventorySource {
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
        }
        images {
          id
          type
          path
          productId
        }
        orderedInventories {
          id
          qty
          productId
          channelId
        }
        customerGroupPrices {
          id
          qty
          valueType
          value
          productId
          customerGroupId
          createdAt
          updatedAt
        }
        booking {
          id
          type
          location
          showLocation
          availableFrom
          availableTo
          productId
          eventTickets {
            id
            price
            qty
            translations {
              locale
              name
              description
            }
            bookingProductId
          }
        }
        sameDaySlots {
          id
          day
          from
          to
        }
        differentDaySlots {
          id
          day
          from
          to
        } 
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "updateProduct": {
            "id": "14",
            "type": "booking",
            "attributeFamilyId": 1,
            "sku": "hotel-table",
            "parentId": null,
            "productFlats": [
                {
                    "id": "14",
                    "sku": "hotel-table",
                    "name": "Hotel Table",
                    "description": "<p>Home Decor Description</p>",
                    "shortDescription": "<p>Home Decor Short Description</p>",
                    "urlKey": "hotel-table",
                    "new": true,
                    "featured": true,
                    "status": true,
                    "visibleIndividually": true,
                    "thumbnail": null,
                    "price": 12.55,
                    "cost": 11.5,
                    "weight": 5.2,
                    "color": 3,
                    "colorLabel": "Yellow",
                    "size": 9,
                    "sizeLabel": "XL",
                    "locale": "en",
                    "channel": "default",
                    "productId": "14",
                    "parentId": null,
                    "minPrice": 11.295,
                    "maxPrice": 11.295,
                    "metaTitle": "Home Decor Meta Title",
                    "metaKeywords": "Home Decor Meta Keywords",
                    "metaDescription": "Home Decor Meta Description",
                    "width": 30,
                    "height": 24,
                    "depth": 11,
                    "variants": [],
                    "parent": null,
                    "createdAt": "2021-05-27 16:45:57",
                    "updatedAt": "2021-05-27 16:45:57"
                }
            ],
            "attributeFamily": {
                "id": "1",
                "code": "default",
                "name": "Default",
                "status": false,
                "isUserDefined": true
            },
            "inventories": [
                {
                    "id": "19",
                    "qty": 111,
                    "productId": "14",
                    "inventorySourceId": "1",
                    "vendorId": 0,
                    "inventorySource": {
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
                },
                {
                    "id": "20",
                    "qty": 222,
                    "productId": "14",
                    "inventorySourceId": "2",
                    "vendorId": 0,
                    "inventorySource": {
                        "id": "2",
                        "code": "new",
                        "name": "demoinventory",
                        "description": "demo",
                        "contactName": "jyoti",
                        "contactEmail": "jyoti@webkul.com",
                        "contactNumber": "7252756566",
                        "contactFax": null,
                        "country": "IN",
                        "state": "UP",
                        "city": "Gorakhpur",
                        "street": "d-54",
                        "postcode": "273003",
                        "priority": 1,
                        "latitude": null,
                        "longitude": null,
                        "status": true
                    }
                }
            ],
            "images": [],
            "orderedInventories": [],
            "customerGroupPrices": [
                {
                    "id": "42",
                    "qty": 2,
                    "valueType": "fixed",
                    "value": 10,
                    "productId": "14",
                    "customerGroupId": "2",
                    "createdAt": "2021-05-27 16:51:26",
                    "updatedAt": "2021-05-27 16:51:26"
                }
            ],
            "booking": {
                "type": "table",
                "location": "Hisar",
                "qty": 5,
                "availableEveryWeek": true,
                "availableFrom": "2021-02-11 12:00:00",
                "availableTo": "2021-02-18 12:00:00",
                "tableSlot": {
                    "priceType": "guest",
                    "guestLimit": 5,
                    "duration": 45,
                    "breakTime": 15,
                    "sameSlotAllDays": true,
                    "preventSchedulingBefore": true,
                    "slots": [
                        {
                            "from": "09:00",
                            "to": "09:45"
                        },
                        {
                            "from": "10:00",
                            "to": "10:45"
                        },
                        {
                            "from": "11:00",
                            "to": "11:45"
                        },
                        {
                            "from": "12:00",
                            "to": "12:45"
                        }
                    ]
                }
            },
            "sameDaySlots": [
                {
                    "id": null,
                    "day": 0,
                    "from": "09:00",
                    "to": "09:45"
                },
                {
                    "id": null,
                    "day": 1,
                    "from": "10:00",
                    "to": "10:45"
                },
                {
                    "id": null,
                    "day": 2,
                    "from": "11:00",
                    "to": "11:45"
                },
                {
                    "id": null,
                    "day": 3,
                    "from": "12:00",
                    "to": "12:45"
                }
            ],
            "differentDaySlots": []
        }
    }
  }
  ~~~
:::

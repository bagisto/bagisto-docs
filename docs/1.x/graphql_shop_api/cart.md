# Cart

In this section, we will see all the APIs which are related to Customer Cart.

## Get Cart

You can get all the  Cart from the Bagisto store. You can achieve this job by using the `Cart` API call.

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
    query cartDetail {
        cartDetail {
            id
            customerEmail
            customerFirstName
            customerLastName
            shippingMethod
            couponCode
            isGift
            itemsCount
            itemsQty
            exchangeRate
            globalCurrencyCode
            baseCurrencyCode
            channelCurrencyCode
            cartCurrencyCode
            grandTotal
            baseGrandTotal
            subTotal
            baseSubTotal
            taxTotal
            baseTaxTotal
            discountAmount
            baseDiscountAmount
            checkoutMethod
            isGuest
            isActive
            conversionTime
            customerId
            channelId
            appliedCartRuleIds
            createdAt
            updatedAt
            items {
                id
                quantity
                sku
                type
                name
                couponCode
                weight
                totalWeight
                baseTotalWeight
                price
                basePrice
                total
                baseTotal
                taxPercent
                taxAmount
                baseTaxAmount
                discountPercent
                discountAmount
                baseDiscountAmount
                additional
                parentId
                productId
                cartId
                taxCategoryId
                customPrice
                appliedCartRuleIds
                createdAt
                updatedAt
                product {
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
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "cartDetail": {
            "id": "6",
            "customerEmail": "naresh.verma327@webkul.com",
            "customerFirstName": "Naresh",
            "customerLastName": "Verma",
            "shippingMethod": null,
            "couponCode": null,
            "isGift": false,
            "itemsCount": 1,
            "itemsQty": 1,
            "exchangeRate": null,
            "globalCurrencyCode": "USD",
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "cartCurrencyCode": "USD",
            "grandTotal": 5,
            "baseGrandTotal": 5,
            "subTotal": 5,
            "baseSubTotal": 5,
            "taxTotal": 0,
            "baseTaxTotal": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "checkoutMethod": null,
            "isGuest": false,
            "isActive": true,
            "conversionTime": null,
            "customerId": "5",
            "channelId": "1",
            "appliedCartRuleIds": "",
            "createdAt": "2021-05-28 17:25:25",
            "updatedAt": "2021-05-28 17:25:26",
            "items": [
                {
                    "id": "6",
                    "quantity": 1,
                    "sku": "test-product",
                    "type": "simple",
                    "name": "testOutlet",
                    "couponCode": null,
                    "weight": 3,
                    "totalWeight": 3,
                    "baseTotalWeight": 3,
                    "price": 5,
                    "basePrice": 5,
                    "total": 5,
                    "baseTotal": 5,
                    "taxPercent": 0,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "discountPercent": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "additional": "{\"quantity\":1,\"product_id\":\"1\"}",
                    "parentId": null,
                    "productId": "1",
                    "cartId": "6",
                    "taxCategoryId": null,
                    "customPrice": null,
                    "appliedCartRuleIds": "",
                    "createdAt": "2021-05-28 17:25:25",
                    "updatedAt": "2021-05-28 17:25:26",
                    "product": {
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
                                "minPrice": 5,
                                "maxPrice": 5,
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
                        "orderedInventories": [
                            {
                                "id": "1",
                                "qty": 0,
                                "productId": "1",
                                "channelId": "1"
                            }
                        ],
                        "reviews": [
                            {
                                "id": "1",
                                "title": "Where does it come from?",
                                "rating": 4,
                                "comment": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                                "status": true,
                                "productId": "1",
                                "customerId": "5",
                                "createdAt": "2021-05-28 15:41:51",
                                "updatedAt": "2021-05-28 15:41:51"
                            }
                        ],
                        "groupedProducts": [],
                        "downloadableSamples": [],
                        "downloadableLinks": [],
                        "bundleOptions": [],
                        "customerGroupPrices": [],
                        "booking": null
                    }
                }
            ]
        }
    }
}
~~~
:::

## Get Cart Items

You can get all the Cart Items from the Bagisto store. You can achieve this job by using the `Cart Items` API call.

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
    query cartItems {
        cartItems {
            id
            quantity
            sku
            type
            name
            couponCode
            weight
            totalWeight
            baseTotalWeight
            price
            basePrice
            total
            baseTotal
            taxPercent
            taxAmount
            baseTaxAmount
            discountPercent
            discountAmount
            baseDiscountAmount
            additional
            parentId
            productId
            cartId
            taxCategoryId
            customPrice
            appliedCartRuleIds
            createdAt
            updatedAt
            product {
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
        "cartItems": [
            {
                "id": "6",
                "quantity": 1,
                "sku": "test-product",
                "type": "simple",
                "name": "testOutlet",
                "couponCode": null,
                "weight": 3,
                "totalWeight": 3,
                "baseTotalWeight": 3,
                "price": 5,
                "basePrice": 5,
                "total": 5,
                "baseTotal": 5,
                "taxPercent": 0,
                "taxAmount": 0,
                "baseTaxAmount": 0,
                "discountPercent": 0,
                "discountAmount": 0,
                "baseDiscountAmount": 0,
                "additional": "{\"quantity\":1,\"product_id\":\"1\"}",
                "parentId": null,
                "productId": "1",
                "cartId": "6",
                "taxCategoryId": null,
                "customPrice": null,
                "appliedCartRuleIds": "",
                "createdAt": "2021-05-28 17:25:25",
                "updatedAt": "2021-05-28 17:25:26",
                "product": {
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
                            "minPrice": 5,
                            "maxPrice": 5,
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
                    "orderedInventories": [
                        {
                            "id": "1",
                            "qty": 0,
                            "productId": "1",
                            "channelId": "1"
                        }
                    ],
                    "reviews": [
                        {
                            "id": "1",
                            "title": "Where does it come from?",
                            "rating": 4,
                            "comment": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                            "status": true,
                            "productId": "1",
                            "customerId": "5",
                            "createdAt": "2021-05-28 15:41:51",
                            "updatedAt": "2021-05-28 15:41:51"
                        }
                    ],
                    "groupedProducts": [],
                    "downloadableSamples": [],
                    "downloadableLinks": [],
                    "bundleOptions": [],
                    "customerGroupPrices": [],
                    "booking": null
                }
            }
        ]
    }
}
~~~
:::


## Get Cart Item By Id

You can get the Specific Cart Items from the Bagisto store by passing the `id` field with the request. You can achieve this job by using the `Cart Items` API call.

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
    query cartItem {
        cartItem(id: 8) {
            id
            quantity
            sku
            type
            name
            couponCode
            weight
            totalWeight
            baseTotalWeight
            price
            basePrice
            total
            baseTotal
            taxPercent
            taxAmount
            baseTaxAmount
            discountPercent
            discountAmount
            baseDiscountAmount
            additional
            parentId
            productId
            cartId
            taxCategoryId
            customPrice
            appliedCartRuleIds
            createdAt
            updatedAt
            product {
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
        "cartItem": {
            "id": "8",
            "quantity": 1,
            "sku": "test-product",
            "type": "simple",
            "name": "testOutlet",
            "couponCode": null,
            "weight": 3,
            "totalWeight": 3,
            "baseTotalWeight": 3,
            "price": 5,
            "basePrice": 5,
            "total": 5,
            "baseTotal": 5,
            "taxPercent": 0,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountPercent": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "additional": "{\"quantity\":1,\"product_id\":\"1\"}",
            "parentId": null,
            "productId": "1",
            "cartId": "8",
            "taxCategoryId": null,
            "customPrice": null,
            "appliedCartRuleIds": "",
            "createdAt": "2021-05-28 18:06:51",
            "updatedAt": "2021-05-28 18:06:52",
            "product": {
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
                        "minPrice": 5,
                        "maxPrice": 5,
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
                "orderedInventories": [
                    {
                        "id": "1",
                        "qty": 0,
                        "productId": "1",
                        "channelId": "1"
                    }
                ],
                "reviews": [
                    {
                        "id": "1",
                        "title": "Where does it come from?",
                        "rating": 4,
                        "comment": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                        "status": true,
                        "productId": "1",
                        "customerId": "5",
                        "createdAt": "2021-05-28 15:41:51",
                        "updatedAt": "2021-05-28 15:41:51"
                    }
                ],
                "groupedProducts": [],
                "downloadableSamples": [],
                "downloadableLinks": [],
                "bundleOptions": [],
                "customerGroupPrices": [],
                "booking": null
            }
        }
    }
}
~~~
:::


## Add Item To Cart

You can Add a product to Cart. You can achieve this job by using the `Cart` API call.

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
    mutation addItemToCart {
        addItemToCart(input: {
            productId: 1
            quantity: 1

            # Only use while adding configurable product to cart
            # selectedConfigurableOption: 4
            # superAttribute: [{
            #     attributeId: 23
            #     attributeOptionId: 4
            # },  {
            #     attributeId: 24
            #     attributeOptionId: 6
            # }]

            # Only use while adding grouped product to cart
            # qty: [{
            #     productId: 5
            #     quantity: 3
            # },  {
            #     productId: 1
            #     quantity: 2
            # }]

            # Only use while adding downloadable product to cart
            # links: [6, 8]

            # Only use while adding bundled product to cart
            # bundleOptions: [{
            #     bundleOptionId: 9
            #     bundleOptionProductId: [8]
            #     qty: 2
            # },  {
            #     bundleOptionId: 10
            #     bundleOptionProductId: [10]
            #     qty: 3
            # },  {
            #     bundleOptionId: 11
            #     bundleOptionProductId: [11, 12]
            # },  {
            #     bundleOptionId: 13
            #     bundleOptionProductId: [15]
            # }]

            # Only use while adding booking(default, appointment, rental, table) product to cart
            # booking: {
            #     date: "2021-02-15"
            #     slot: {
            #         from: 1613374200
            #         to: 1613376900
            #     }
            #     note: "Booking Table"

            #     # Only use while adding booking(event) product to cart
            #     qty: [{
            #         ticketId: 11
            #         quantity: 2
            #     },  {
            #         ticketId: 12
            #         quantity: 1
            #     }]
            # }
        }) {
            success
            cart {
                id
                customerEmail
                customerFirstName
                customerLastName
                shippingMethod
                couponCode
                isGift
                itemsCount
                itemsQty
                exchangeRate
                globalCurrencyCode
                baseCurrencyCode
                channelCurrencyCode
                cartCurrencyCode
                grandTotal
                baseGrandTotal
                subTotal
                baseSubTotal
                taxTotal
                baseTaxTotal
                discountAmount
                baseDiscountAmount
                checkoutMethod
                isGuest
                isActive
                conversionTime
                customerId
                channelId
                appliedCartRuleIds
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
        "addToWishlist": {
            "success": "Item Successfully Added To Wishlist",
            "wishlist": {
                "id": "1",
                "channelId": "1",
                "productId": "1",
                "customerId": "5",
                "itemOptions": null,
                "additional": "null",
                "movedToCart": null,
                "shared": null,
                "timeOfMoving": null,
                "createdAt": "2021-05-28 15:59:00",
                "updatedAt": "2021-05-28 15:59:00",
                "customer": {
                    "id": "5",
                    "firstName": "Naresh",
                    "lastName": "Verma",
                    "name": "Naresh Verma",
                    "gender": null,
                    "dateOfBirth": null,
                    "email": "naresh.verma327@webkul.com",
                    "phone": null,
                    "password": "$2y$10$tIP1ciRlUCI0ahjsYsjHsenTvXen1PBQKfRu0OklpufOAjf/ruC2O",
                    "apiToken": "r1bxG3wNl2No0mbTEEJnD6hWkADKcsMA8jnHDnA0zteEw2RRhaqAuUxehzqx7pARAS6WA9jLG3sanFhg",
                    "customerGroupId": 2,
                    "subscribedToNewsLetter": false,
                    "isVerified": true,
                    "token": "d5308d5f06d01d3393501cb6ebf4ae06",
                    "notes": null,
                    "status": true,
                    "createdAt": "2021-05-28 12:54:56",
                    "updatedAt": "2021-05-28 12:54:56"
                },
                "product": {
                    "id": "1",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "test-product",
                    "parentId": null,
                    "createdAt": "2021-05-26 17:43:12",
                    "updatedAt": "2021-05-26 17:43:12"
                },
                "channel": {
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
                    "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                    "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                    "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":16,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                    "logoUrl": null,
                    "faviconUrl": null,
                    "success": null
                }
            }
        }
    }
}
~~~
:::

## Update Cart Item

To Update Cart Item You need to pass the cart item id  and quantityt with the request. You can achieve this job by using the `CartUpdate` API call.

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
    mutation updateItemToCart {
        updateItemToCart(input: {
            qty: [{
                cartItemId: 6
                quantity: 3
            }]
        }) {
            success
            cart {
                id
                customerEmail
                customerFirstName
                customerLastName
                shippingMethod
                couponCode
                isGift
                itemsCount
                itemsQty
                exchangeRate
                globalCurrencyCode
                baseCurrencyCode
                channelCurrencyCode
                cartCurrencyCode
                grandTotal
                baseGrandTotal
                subTotal
                baseSubTotal
                taxTotal
                baseTaxTotal
                discountAmount
                baseDiscountAmount
                checkoutMethod
                isGuest
                isActive
                conversionTime
                customerId
                channelId
                appliedCartRuleIds
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
        "addToWishlist": {
            "success": "Item Successfully Added To Wishlist",
            "wishlist": {
                "id": "1",
                "channelId": "1",
                "productId": "1",
                "customerId": "5",
                "itemOptions": null,
                "additional": "null",
                "movedToCart": null,
                "shared": null,
                "timeOfMoving": null,
                "createdAt": "2021-05-28 15:59:00",
                "updatedAt": "2021-05-28 15:59:00",
                "customer": {
                    "id": "5",
                    "firstName": "Naresh",
                    "lastName": "Verma",
                    "name": "Naresh Verma",
                    "gender": null,
                    "dateOfBirth": null,
                    "email": "naresh.verma327@webkul.com",
                    "phone": null,
                    "password": "$2y$10$tIP1ciRlUCI0ahjsYsjHsenTvXen1PBQKfRu0OklpufOAjf/ruC2O",
                    "apiToken": "r1bxG3wNl2No0mbTEEJnD6hWkADKcsMA8jnHDnA0zteEw2RRhaqAuUxehzqx7pARAS6WA9jLG3sanFhg",
                    "customerGroupId": 2,
                    "subscribedToNewsLetter": false,
                    "isVerified": true,
                    "token": "d5308d5f06d01d3393501cb6ebf4ae06",
                    "notes": null,
                    "status": true,
                    "createdAt": "2021-05-28 12:54:56",
                    "updatedAt": "2021-05-28 12:54:56"
                },
                "product": {
                    "id": "1",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "test-product",
                    "parentId": null,
                    "createdAt": "2021-05-26 17:43:12",
                    "updatedAt": "2021-05-26 17:43:12"
                },
                "channel": {
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
                    "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                    "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                    "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":16,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                    "logoUrl": null,
                    "faviconUrl": null,
                    "success": null
                }
            }
        }
    }
}
~~~
:::

## Remove Cart Item

To remove a Cart Item , you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    mutation removeCartItem {
        removeCartItem(id: 6) {
            success
            cart {
                id
                customerEmail
                customerFirstName
                customerLastName
                shippingMethod
                couponCode
                isGift
                itemsCount
                itemsQty
                exchangeRate
                globalCurrencyCode
                baseCurrencyCode
                channelCurrencyCode
                cartCurrencyCode
                grandTotal
                baseGrandTotal
                subTotal
                baseSubTotal
                taxTotal
                baseTaxTotal
                discountAmount
                baseDiscountAmount
                checkoutMethod
                isGuest
                isActive
                conversionTime
                customerId
                channelId
                appliedCartRuleIds
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
        "removeCartItem": {
            "success": "Success: Cart item has been removed successfully.",
            "cart": null
        }
    }
  }
  ~~~
:::

## Move To Wishlist

You can move a cart item from cart to wishlist from the Bagisto store. You can achieve this job by using the `Move To Wishlist` API call.

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
    mutation moveToWishlist {
        moveToWishlist(id: 7) {
            success
            cart {
                id
                customerEmail
                customerFirstName
                customerLastName
                shippingMethod
                couponCode
                isGift
                itemsCount
                itemsQty
                exchangeRate
                globalCurrencyCode
                baseCurrencyCode
                channelCurrencyCode
                cartCurrencyCode
                grandTotal
                baseGrandTotal
                subTotal
                baseSubTotal
                taxTotal
                baseTaxTotal
                discountAmount
                baseDiscountAmount
                checkoutMethod
                isGuest
                isActive
                conversionTime
                customerId
                channelId
                appliedCartRuleIds
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
            "moveToWishlist": {
                "success": "Success: Cart item moved to wishlist successfully.",
                "cart": null
            }
        }
    }
  ~~~
:::
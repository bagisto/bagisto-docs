# Orders

In this section, we will see all the APIs which are related to Customer Orders.

## Get Customer Orders

You can get all the Customer Orders from the Bagisto store. You can achieve this job by using the `Customer Orders` API call.

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
    query ordersList {
        ordersList(input: {
            page: 1
            limit: 10
        }) {
            id
            incrementId
            status
            channelName
            isGuest
            customerEmail
            customerFirstName
            customerLastName
            customerCompanyName
            customerVatId
            shippingMethod
            shippingTitle
            shippingDescription
            couponCode
            isGift
            totalItemCount
            totalQtyOrdered
            baseCurrencyCode
            channelCurrencyCode
            orderCurrencyCode
            grandTotal
            baseGrandTotal
            grandTotalInvoiced
            baseGrandTotalInvoiced
            grandTotalRefunded
            baseGrandTotalRefunded
            subTotal
            baseSubTotal
            subTotalInvoiced
            baseSubTotalInvoiced
            subTotalRefunded
            baseSubTotalRefunded
            discountPercent
            discountAmount
            baseDiscountAmount
            discountInvoiced
            baseDiscountInvoiced
            discountRefunded
            baseDiscountRefunded
            taxAmount
            baseTaxAmount
            taxAmountInvoiced
            baseTaxAmountInvoiced
            taxAmountRefunded
            baseTaxAmountRefunded
            shippingAmount
            baseShippingAmount
            shippingInvoiced
            baseShippingInvoiced
            shippingRefunded
            baseShippingRefunded
            customerId
            customerType
            channelId
            channelType
            cartId
            appliedCartRuleIds
            shippingDiscountAmount
            baseShippingDiscountAmount
            createdAt
            updatedAt
            billingAddress {
                id
                customerId
                cartId
                orderId
                firstName
                lastName
                gender
                companyName
                address1
                address2
                postcode
                city
                state
                country
                email
                phone
                vatId
                defaultAddress
            }
            shippingAddress {
                id
                customerId
                cartId
                orderId
                firstName
                lastName
                gender
                companyName
                address1
                address2
                postcode
                city
                state
                country
                email
                phone
                vatId
                defaultAddress
            }
            items {
                id
                sku
                type
                name
                couponCode
                weight
                totalWeight
                qtyOrdered
                qtyShipped
                qtyInvoiced
                qtyCanceled
                qtyRefunded
                price
                basePrice
                total
                baseTotal
                totalInvoiced
                baseTotalInvoiced
                amountRefunded
                baseAmountRefunded
                discountPercent
                discountAmount
                baseDiscountAmount
                discountInvoiced
                baseDiscountInvoiced
                discountRefunded
                baseDiscountRefunded
                taxPercent
                taxAmount
                baseTaxAmount
                taxAmountInvoiced
                baseTaxAmountInvoiced
                taxAmountRefunded
                baseTaxAmountRefunded
                productId
                productType
                orderId
                parentId
                additional
                createdAt
                updatedAt
                product {
                    id
                    type
                    attributeFamilyId
                    sku
                    parentId
                    createdAt
                    updatedAt
                }
                child {
                    id
                    sku
                    type
                    name
                    couponCode
                    weight
                    totalWeight
                    qtyOrdered
                    qtyShipped
                    qtyInvoiced
                    qtyCanceled
                    qtyRefunded
                    price
                    basePrice
                    total
                    baseTotal
                    totalInvoiced
                    baseTotalInvoiced
                }
                invoiceItems {
                    id
                    sku
                    type
                    name
                    description
                    qty
                    price
                    basePrice
                    total
                    baseTotal
                    taxAmount
                    baseTaxAmount
                    productId
                    productType
                    orderItemId
                    invoiceId
                    parentId
                }
                shipmentItems {
                    id
                    name
                    description
                    sku
                    qty
                    weight
                    price
                    basePrice
                    total
                    baseTotal
                    productId
                    productType
                    orderItemId
                    shipmentId
                }
                refundItems {
                    id
                    name
                    description
                    sku
                    qty
                    price
                    basePrice
                    total
                    baseTotal
                    taxAmount
                    baseTaxAmount
                    discountPercent
                    discountAmount
                    baseDiscountAmount
                    productId
                    productType
                    orderItemId
                    refundId
                    parentId
                }
            }
            shipments {
                id
                status
                totalQty
                totalWeight
                carrierCode
                carrierTitle
                trackNumber
                emailSent
                customerId
                customerType
                orderId
                orderAddressId
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
        "ordersList": [
            {
                "id": 3,
                "incrementId": "3",
                "status": "pending",
                "channelName": "Default",
                "isGuest": 0,
                "customerEmail": "naresh.verma327@webkul.com",
                "customerFirstName": "Naresh",
                "customerLastName": "Verma",
                "customerCompanyName": null,
                "customerVatId": null,
                "shippingMethod": "flatrate_flatrate",
                "shippingTitle": "Flat Rate - Flat Rate",
                "shippingDescription": "Flat Rate Shipping",
                "couponCode": null,
                "isGift": 0,
                "totalItemCount": 1,
                "totalQtyOrdered": 1,
                "baseCurrencyCode": "USD",
                "channelCurrencyCode": "USD",
                "orderCurrencyCode": "USD",
                "grandTotal": 15,
                "baseGrandTotal": 15,
                "grandTotalInvoiced": 0,
                "baseGrandTotalInvoiced": 0,
                "grandTotalRefunded": 0,
                "baseGrandTotalRefunded": 0,
                "subTotal": 5,
                "baseSubTotal": 5,
                "subTotalInvoiced": 0,
                "baseSubTotalInvoiced": 0,
                "subTotalRefunded": 0,
                "baseSubTotalRefunded": 0,
                "discountPercent": 0,
                "discountAmount": 0,
                "baseDiscountAmount": 0,
                "discountInvoiced": 0,
                "baseDiscountInvoiced": 0,
                "discountRefunded": 0,
                "baseDiscountRefunded": 0,
                "taxAmount": 0,
                "baseTaxAmount": 0,
                "taxAmountInvoiced": 0,
                "baseTaxAmountInvoiced": 0,
                "taxAmountRefunded": 0,
                "baseTaxAmountRefunded": 0,
                "shippingAmount": 10,
                "baseShippingAmount": 10,
                "shippingInvoiced": 0,
                "baseShippingInvoiced": 0,
                "shippingRefunded": 0,
                "baseShippingRefunded": 0,
                "customerId": 5,
                "customerType": "Webkul\\Customer\\Models\\Customer",
                "channelId": 1,
                "channelType": "Webkul\\Core\\Models\\Channel",
                "cartId": "3",
                "appliedCartRuleIds": "",
                "shippingDiscountAmount": 0,
                "baseShippingDiscountAmount": 0,
                "createdAt": "2021-05-28 14:28:51",
                "updatedAt": "2021-05-28 14:28:51",
                "billingAddress": {
                    "id": 16,
                    "customerId": 5,
                    "cartId": null,
                    "orderId": 3,
                    "firstName": "Tom Demo2",
                    "lastName": "Martin Demo2",
                    "gender": null,
                    "companyName": "Webkul2",
                    "address1": "3180  Bluff",
                    "address2": "Street",
                    "postcode": "15742222222",
                    "city": "GLEN CAMPBELL",
                    "state": "PA",
                    "country": "US",
                    "email": "naresh.verma327@webkul.com",
                    "phone": "234343544",
                    "vatId": "INV12345678904",
                    "defaultAddress": 0
                },
                "shippingAddress": {
                    "id": 15,
                    "customerId": 5,
                    "cartId": null,
                    "orderId": 3,
                    "firstName": "Tom Demo2",
                    "lastName": "Martin Demo2",
                    "gender": null,
                    "companyName": "Webkul2",
                    "address1": "3180  Bluff",
                    "address2": "Street",
                    "postcode": "15742222222",
                    "city": "GLEN CAMPBELL",
                    "state": "PA",
                    "country": "US",
                    "email": "naresh.verma327@webkul.com",
                    "phone": "234343544",
                    "vatId": "INV12345678904",
                    "defaultAddress": 0
                },
                "items": [
                    {
                        "id": "3",
                        "sku": "test-product",
                        "type": "simple",
                        "name": "testOutlet",
                        "couponCode": null,
                        "weight": 3,
                        "totalWeight": 3,
                        "qtyOrdered": 1,
                        "qtyShipped": 0,
                        "qtyInvoiced": 0,
                        "qtyCanceled": 0,
                        "qtyRefunded": 0,
                        "price": 5,
                        "basePrice": 5,
                        "total": 5,
                        "baseTotal": 5,
                        "totalInvoiced": 0,
                        "baseTotalInvoiced": 0,
                        "amountRefunded": 0,
                        "baseAmountRefunded": 0,
                        "discountPercent": 0,
                        "discountAmount": 0,
                        "baseDiscountAmount": 0,
                        "discountInvoiced": 0,
                        "baseDiscountInvoiced": 0,
                        "discountRefunded": 0,
                        "baseDiscountRefunded": 0,
                        "taxPercent": 0,
                        "taxAmount": 0,
                        "baseTaxAmount": 0,
                        "taxAmountInvoiced": 0,
                        "baseTaxAmountInvoiced": 0,
                        "taxAmountRefunded": 0,
                        "baseTaxAmountRefunded": 0,
                        "productId": "1",
                        "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                        "orderId": "3",
                        "parentId": null,
                        "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                        "createdAt": "2021-05-28 14:28:51",
                        "updatedAt": "2021-05-28 14:28:51",
                        "product": {
                            "id": "1",
                            "type": "simple",
                            "attributeFamilyId": 1,
                            "sku": "test-product",
                            "parentId": null,
                            "createdAt": "2021-05-26 17:43:12",
                            "updatedAt": "2021-05-26 17:43:12"
                        },
                        "child": null,
                        "invoiceItems": [],
                        "shipmentItems": [],
                        "refundItems": []
                    }
                ],
                "shipments": []
            }
        ]
    }
}
~~~
:::

## Get Customer Order By ID

To get the  specific Customer Order, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query orderDetail {
        orderDetail(id: 3) {
            id
            incrementId
            status
            channelName
            isGuest
            customerEmail
            customerFirstName
            customerLastName
            customerCompanyName
            customerVatId
            shippingMethod
            shippingTitle
            shippingDescription
            couponCode
            isGift
            totalItemCount
            totalQtyOrdered
            baseCurrencyCode
            channelCurrencyCode
            orderCurrencyCode
            grandTotal
            baseGrandTotal
            grandTotalInvoiced
            baseGrandTotalInvoiced
            grandTotalRefunded
            baseGrandTotalRefunded
            subTotal
            baseSubTotal
            subTotalInvoiced
            baseSubTotalInvoiced
            subTotalRefunded
            baseSubTotalRefunded
            discountPercent
            discountAmount
            baseDiscountAmount
            discountInvoiced
            baseDiscountInvoiced
            discountRefunded
            baseDiscountRefunded
            taxAmount
            baseTaxAmount
            taxAmountInvoiced
            baseTaxAmountInvoiced
            taxAmountRefunded
            baseTaxAmountRefunded
            shippingAmount
            baseShippingAmount
            shippingInvoiced
            baseShippingInvoiced
            shippingRefunded
            baseShippingRefunded
            customerId
            customerType
            channelId
            channelType
            cartId
            appliedCartRuleIds
            shippingDiscountAmount
            baseShippingDiscountAmount
            createdAt
            updatedAt
            billingAddress {
                id
                customerId
                cartId
                orderId
                firstName
                lastName
                gender
                companyName
                address1
                address2
                postcode
                city
                state
                country
                email
                phone
                vatId
                defaultAddress
            }
            shippingAddress {
                id
                customerId
                cartId
                orderId
                firstName
                lastName
                gender
                companyName
                address1
                address2
                postcode
                city
                state
                country
                email
                phone
                vatId
                defaultAddress
            }
            items {
                id
                sku
                type
                name
                couponCode
                weight
                totalWeight
                qtyOrdered
                qtyShipped
                qtyInvoiced
                qtyCanceled
                qtyRefunded
                price
                basePrice
                total
                baseTotal
                totalInvoiced
                baseTotalInvoiced
                amountRefunded
                baseAmountRefunded
                discountPercent
                discountAmount
                baseDiscountAmount
                discountInvoiced
                baseDiscountInvoiced
                discountRefunded
                baseDiscountRefunded
                taxPercent
                taxAmount
                baseTaxAmount
                taxAmountInvoiced
                baseTaxAmountInvoiced
                taxAmountRefunded
                baseTaxAmountRefunded
                productId
                productType
                orderId
                parentId
                additional
                createdAt
                updatedAt
                product {
                    id
                    type
                    attributeFamilyId
                    sku
                    parentId
                    createdAt
                    updatedAt
                }
                child {
                    id
                    sku
                    type
                    name
                    couponCode
                    weight
                    totalWeight
                    qtyOrdered
                    qtyShipped
                    qtyInvoiced
                    qtyCanceled
                    qtyRefunded
                    price
                    basePrice
                    total
                    baseTotal
                    totalInvoiced
                    baseTotalInvoiced
                }
                invoiceItems {
                    id
                    sku
                    type
                    name
                    description
                    qty
                    price
                    basePrice
                    total
                    baseTotal
                    taxAmount
                    baseTaxAmount
                    productId
                    productType
                    orderItemId
                    invoiceId
                    parentId
                }
                shipmentItems {
                    id
                    name
                    description
                    sku
                    qty
                    weight
                    price
                    basePrice
                    total
                    baseTotal
                    productId
                    productType
                    orderItemId
                    shipmentId
                }
                refundItems {
                    id
                    name
                    description
                    sku
                    qty
                    price
                    basePrice
                    total
                    baseTotal
                    taxAmount
                    baseTaxAmount
                    discountPercent
                    discountAmount
                    baseDiscountAmount
                    productId
                    productType
                    orderItemId
                    refundId
                    parentId
                }
            }
            shipments {
                id
                status
                totalQty
                totalWeight
                carrierCode
                carrierTitle
                trackNumber
                emailSent
                customerId
                customerType
                orderId
                orderAddressId
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
        "orderDetail": {
            "id": 3,
            "incrementId": "3",
            "status": "pending",
            "channelName": "Default",
            "isGuest": 0,
            "customerEmail": "naresh.verma327@webkul.com",
            "customerFirstName": "Naresh",
            "customerLastName": "Verma",
            "customerCompanyName": null,
            "customerVatId": null,
            "shippingMethod": "flatrate_flatrate",
            "shippingTitle": "Flat Rate - Flat Rate",
            "shippingDescription": "Flat Rate Shipping",
            "couponCode": null,
            "isGift": 0,
            "totalItemCount": 1,
            "totalQtyOrdered": 1,
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "orderCurrencyCode": "USD",
            "grandTotal": 15,
            "baseGrandTotal": 15,
            "grandTotalInvoiced": 0,
            "baseGrandTotalInvoiced": 0,
            "grandTotalRefunded": 0,
            "baseGrandTotalRefunded": 0,
            "subTotal": 5,
            "baseSubTotal": 5,
            "subTotalInvoiced": 0,
            "baseSubTotalInvoiced": 0,
            "subTotalRefunded": 0,
            "baseSubTotalRefunded": 0,
            "discountPercent": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "discountInvoiced": 0,
            "baseDiscountInvoiced": 0,
            "discountRefunded": 0,
            "baseDiscountRefunded": 0,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "taxAmountInvoiced": 0,
            "baseTaxAmountInvoiced": 0,
            "taxAmountRefunded": 0,
            "baseTaxAmountRefunded": 0,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "shippingInvoiced": 0,
            "baseShippingInvoiced": 0,
            "shippingRefunded": 0,
            "baseShippingRefunded": 0,
            "customerId": 5,
            "customerType": "Webkul\\Customer\\Models\\Customer",
            "channelId": 1,
            "channelType": "Webkul\\Core\\Models\\Channel",
            "cartId": "3",
            "appliedCartRuleIds": "",
            "shippingDiscountAmount": 0,
            "baseShippingDiscountAmount": 0,
            "createdAt": "2021-05-28 14:28:51",
            "updatedAt": "2021-05-28 14:28:51",
            "billingAddress": {
                "id": 16,
                "customerId": 5,
                "cartId": null,
                "orderId": 3,
                "firstName": "Tom Demo2",
                "lastName": "Martin Demo2",
                "gender": null,
                "companyName": "Webkul2",
                "address1": "3180  Bluff",
                "address2": "Street",
                "postcode": "15742222222",
                "city": "GLEN CAMPBELL",
                "state": "PA",
                "country": "US",
                "email": "naresh.verma327@webkul.com",
                "phone": "234343544",
                "vatId": "INV12345678904",
                "defaultAddress": 0
            },
            "shippingAddress": {
                "id": 15,
                "customerId": 5,
                "cartId": null,
                "orderId": 3,
                "firstName": "Tom Demo2",
                "lastName": "Martin Demo2",
                "gender": null,
                "companyName": "Webkul2",
                "address1": "3180  Bluff",
                "address2": "Street",
                "postcode": "15742222222",
                "city": "GLEN CAMPBELL",
                "state": "PA",
                "country": "US",
                "email": "naresh.verma327@webkul.com",
                "phone": "234343544",
                "vatId": "INV12345678904",
                "defaultAddress": 0
            },
            "items": [
                {
                    "id": "3",
                    "sku": "test-product",
                    "type": "simple",
                    "name": "testOutlet",
                    "couponCode": null,
                    "weight": 3,
                    "totalWeight": 3,
                    "qtyOrdered": 1,
                    "qtyShipped": 0,
                    "qtyInvoiced": 0,
                    "qtyCanceled": 0,
                    "qtyRefunded": 0,
                    "price": 5,
                    "basePrice": 5,
                    "total": 5,
                    "baseTotal": 5,
                    "totalInvoiced": 0,
                    "baseTotalInvoiced": 0,
                    "amountRefunded": 0,
                    "baseAmountRefunded": 0,
                    "discountPercent": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "discountInvoiced": 0,
                    "baseDiscountInvoiced": 0,
                    "discountRefunded": 0,
                    "baseDiscountRefunded": 0,
                    "taxPercent": 0,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "taxAmountInvoiced": 0,
                    "baseTaxAmountInvoiced": 0,
                    "taxAmountRefunded": 0,
                    "baseTaxAmountRefunded": 0,
                    "productId": "1",
                    "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                    "orderId": "3",
                    "parentId": null,
                    "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                    "createdAt": "2021-05-28 14:28:51",
                    "updatedAt": "2021-05-28 14:28:51",
                    "product": {
                        "id": "1",
                        "type": "simple",
                        "attributeFamilyId": 1,
                        "sku": "test-product",
                        "parentId": null,
                        "createdAt": "2021-05-26 17:43:12",
                        "updatedAt": "2021-05-26 17:43:12"
                    },
                    "child": null,
                    "invoiceItems": [],
                    "shipmentItems": [],
                    "refundItems": []
                }
            ],
            "shipments": []
        }
    }
  }
  ~~~
:::



## Get Customer Invoices

You can get all the Customer Invoices from the Bagisto store. You can achieve this job by using the `Customer Invoices` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note** You can pass all the input fields to filter the invoice data.

- Query
  ~~~query
    query viewInvoices {
        viewInvoices(input: {
            page: 1
            limit: 10
            # id: 1
            # orderId: 3
            # quantity: 1
            # grandTotal: 5.35
            # baseGrandTotal: 5.35
            # invoiceDate: "2021-02-12 20:36:26"
        }) {
            id
            incrementId
            state
            emailSent
            totalQty
            baseCurrencyCode
            channelCurrencyCode
            orderCurrencyCode
            subTotal
            baseSubTotal
            grandTotal
            baseGrandTotal
            shippingAmount
            baseShippingAmount
            taxAmount
            baseTaxAmount
            discountAmount
            baseDiscountAmount
            orderId
            orderAddressId
            createdAt
            updatedAt
            transactionId
            items {
                id
                sku
                type
                name
                description
                qty
                price
                basePrice
                total
                baseTotal
                taxAmount
                baseTaxAmount
                productId
                productType
                orderItemId
                invoiceId
                parentId
                additional
                discountPercent
                discountAmount
                baseDiscountAmount
                createdAt
                updatedAt
                orderItem {
                    id
                    sku
                    type
                    name
                    couponCode
                    weight
                    totalWeight
                    qtyOrdered
                    qtyShipped
                    qtyInvoiced
                    qtyCanceled
                    qtyRefunded
                    price
                    basePrice
                    total
                    baseTotal
                    totalInvoiced
                    baseTotalInvoiced
                    amountRefunded
                    baseAmountRefunded
                    discountPercent
                    discountAmount
                    baseDiscountAmount
                    discountInvoiced
                    baseDiscountInvoiced
                    discountRefunded
                    baseDiscountRefunded
                    taxPercent
                    taxAmount
                    baseTaxAmount
                    taxAmountInvoiced
                    baseTaxAmountInvoiced
                    taxAmountRefunded
                    baseTaxAmountRefunded
                    productId
                    productType
                    orderId
                    parentId
                    additional
                    createdAt
                    updatedAt
                }
                product {
                    id
                    type
                    attributeFamilyId
                    sku
                    parentId
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
        "viewInvoices": [
            {
                "id": 2,
                "incrementId": null,
                "state": "paid",
                "emailSent": 0,
                "totalQty": 1,
                "baseCurrencyCode": "USD",
                "channelCurrencyCode": "USD",
                "orderCurrencyCode": "USD",
                "subTotal": 5,
                "baseSubTotal": 5,
                "grandTotal": 15,
                "baseGrandTotal": 15,
                "shippingAmount": 10,
                "baseShippingAmount": 10,
                "taxAmount": 0,
                "baseTaxAmount": 0,
                "discountAmount": 0,
                "baseDiscountAmount": 0,
                "orderId": 3,
                "orderAddressId": 16,
                "createdAt": "2021-05-28 14:30:32",
                "updatedAt": "2021-05-28 14:30:32",
                "transactionId": null,
                "items": [
                    {
                        "id": "2",
                        "sku": "test-product",
                        "type": "simple",
                        "name": "testOutlet",
                        "description": null,
                        "qty": 1,
                        "price": 5,
                        "basePrice": 5,
                        "total": 5,
                        "baseTotal": 5,
                        "taxAmount": 0,
                        "baseTaxAmount": 0,
                        "productId": "1",
                        "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                        "orderItemId": "3",
                        "invoiceId": "2",
                        "parentId": null,
                        "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                        "discountPercent": 0,
                        "discountAmount": 0,
                        "baseDiscountAmount": 0,
                        "createdAt": "2021-05-28 14:30:32",
                        "updatedAt": "2021-05-28 14:30:32",
                        "orderItem": {
                            "id": "3",
                            "sku": "test-product",
                            "type": "simple",
                            "name": "testOutlet",
                            "couponCode": null,
                            "weight": 3,
                            "totalWeight": 3,
                            "qtyOrdered": 1,
                            "qtyShipped": 1,
                            "qtyInvoiced": 1,
                            "qtyCanceled": 0,
                            "qtyRefunded": 0,
                            "price": 5,
                            "basePrice": 5,
                            "total": 5,
                            "baseTotal": 5,
                            "totalInvoiced": 5,
                            "baseTotalInvoiced": 5,
                            "amountRefunded": 0,
                            "baseAmountRefunded": 0,
                            "discountPercent": 0,
                            "discountAmount": 0,
                            "baseDiscountAmount": 0,
                            "discountInvoiced": 0,
                            "baseDiscountInvoiced": 0,
                            "discountRefunded": 0,
                            "baseDiscountRefunded": 0,
                            "taxPercent": 0,
                            "taxAmount": 0,
                            "baseTaxAmount": 0,
                            "taxAmountInvoiced": 0,
                            "baseTaxAmountInvoiced": 0,
                            "taxAmountRefunded": 0,
                            "baseTaxAmountRefunded": 0,
                            "productId": "1",
                            "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                            "orderId": "3",
                            "parentId": null,
                            "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                            "createdAt": "2021-05-28 14:28:51",
                            "updatedAt": "2021-05-28 14:31:00"
                        },
                        "product": {
                            "id": "1",
                            "type": "simple",
                            "attributeFamilyId": 1,
                            "sku": "test-product",
                            "parentId": null,
                            "createdAt": "2021-05-26 17:43:12",
                            "updatedAt": "2021-05-26 17:43:12"
                        }
                    }
                ]
            }
        ]
    }
}
~~~
:::

## Get Customer Invoice By ID

To get the  specific Customer Order Invoice, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query viewInvoice {
        viewInvoice(id: 2) {
            id
            incrementId
            state
            emailSent
            totalQty
            baseCurrencyCode
            channelCurrencyCode
            orderCurrencyCode
            subTotal
            baseSubTotal
            grandTotal
            baseGrandTotal
            shippingAmount
            baseShippingAmount
            taxAmount
            baseTaxAmount
            discountAmount
            baseDiscountAmount
            orderId
            orderAddressId
            createdAt
            updatedAt
            transactionId
            items {
                id
                sku
                type
                name
                description
                qty
                price
                basePrice
                total
                baseTotal
                taxAmount
                baseTaxAmount
                productId
                productType
                orderItemId
                invoiceId
                parentId
                additional
                discountPercent
                discountAmount
                baseDiscountAmount
                createdAt
                updatedAt
                orderItem {
                    id
                    sku
                    type
                    name
                    couponCode
                    weight
                    totalWeight
                    qtyOrdered
                    qtyShipped
                    qtyInvoiced
                    qtyCanceled
                    qtyRefunded
                    price
                    basePrice
                    total
                    baseTotal
                    totalInvoiced
                    baseTotalInvoiced
                    amountRefunded
                    baseAmountRefunded
                    discountPercent
                    discountAmount
                    baseDiscountAmount
                    discountInvoiced
                    baseDiscountInvoiced
                    discountRefunded
                    baseDiscountRefunded
                    taxPercent
                    taxAmount
                    baseTaxAmount
                    taxAmountInvoiced
                    baseTaxAmountInvoiced
                    taxAmountRefunded
                    baseTaxAmountRefunded
                    productId
                    productType
                    orderId
                    parentId
                    additional
                    createdAt
                    updatedAt
                }
                product {
                    id
                    type
                    attributeFamilyId
                    sku
                    parentId
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
        "viewInvoice": {
            "id": 2,
            "incrementId": null,
            "state": "paid",
            "emailSent": 0,
            "totalQty": 1,
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "orderCurrencyCode": "USD",
            "subTotal": 5,
            "baseSubTotal": 5,
            "grandTotal": 15,
            "baseGrandTotal": 15,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "orderId": 3,
            "orderAddressId": 16,
            "createdAt": "2021-05-28 14:30:32",
            "updatedAt": "2021-05-28 14:30:32",
            "transactionId": null,
            "items": [
                {
                    "id": "2",
                    "sku": "test-product",
                    "type": "simple",
                    "name": "testOutlet",
                    "description": null,
                    "qty": 1,
                    "price": 5,
                    "basePrice": 5,
                    "total": 5,
                    "baseTotal": 5,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "productId": "1",
                    "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                    "orderItemId": "3",
                    "invoiceId": "2",
                    "parentId": null,
                    "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                    "discountPercent": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "createdAt": "2021-05-28 14:30:32",
                    "updatedAt": "2021-05-28 14:30:32",
                    "orderItem": {
                        "id": "3",
                        "sku": "test-product",
                        "type": "simple",
                        "name": "testOutlet",
                        "couponCode": null,
                        "weight": 3,
                        "totalWeight": 3,
                        "qtyOrdered": 1,
                        "qtyShipped": 1,
                        "qtyInvoiced": 1,
                        "qtyCanceled": 0,
                        "qtyRefunded": 0,
                        "price": 5,
                        "basePrice": 5,
                        "total": 5,
                        "baseTotal": 5,
                        "totalInvoiced": 5,
                        "baseTotalInvoiced": 5,
                        "amountRefunded": 0,
                        "baseAmountRefunded": 0,
                        "discountPercent": 0,
                        "discountAmount": 0,
                        "baseDiscountAmount": 0,
                        "discountInvoiced": 0,
                        "baseDiscountInvoiced": 0,
                        "discountRefunded": 0,
                        "baseDiscountRefunded": 0,
                        "taxPercent": 0,
                        "taxAmount": 0,
                        "baseTaxAmount": 0,
                        "taxAmountInvoiced": 0,
                        "baseTaxAmountInvoiced": 0,
                        "taxAmountRefunded": 0,
                        "baseTaxAmountRefunded": 0,
                        "productId": "1",
                        "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                        "orderId": "3",
                        "parentId": null,
                        "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                        "createdAt": "2021-05-28 14:28:51",
                        "updatedAt": "2021-05-28 14:31:00"
                    },
                    "product": {
                        "id": "1",
                        "type": "simple",
                        "attributeFamilyId": 1,
                        "sku": "test-product",
                        "parentId": null,
                        "createdAt": "2021-05-26 17:43:12",
                        "updatedAt": "2021-05-26 17:43:12"
                    }
                }
            ]
        }
    }
  }
  ~~~
:::

## Get Customer Shipments

You can get all the Customer Shipments from the Bagisto store. You can achieve this job by using the `Customer Shipments` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note** You can pass all the input fields to filter the shipment data.

- Query
  ~~~query
    query viewShipments {
        viewShipments(input: {
            page: 1
            limit: 10
            # orderId: 3
            # carrierTitle: "DHL"
            # trackNumber: "3333"
            # shipmentDateFrom: "2021-02-16 00:00:01"
            # shipmentDateTo: "2021-02-16 23:00:00"
            # shipmentDate: "2021-02-16 19:17:21"
        }) {
            id
            status
            totalQty
            totalWeight
            carrierCode
            carrierTitle
            trackNumber
            emailSent
            customerId
            customerType
            orderId
            orderAddressId
            createdAt
            updatedAt
            inventorySourceId
            inventorySourceName
            order {
                id
                incrementId
                status
                channelName
                isGuest
                customerEmail
                customerFirstName
                customerLastName
                customerCompanyName
                customerVatId
                shippingMethod
                shippingTitle
                shippingDescription
                couponCode
                isGift
                totalItemCount
                totalQtyOrdered
                baseCurrencyCode
                channelCurrencyCode
                orderCurrencyCode
                grandTotal
                baseGrandTotal
                grandTotalInvoiced
                baseGrandTotalInvoiced
                grandTotalRefunded
                baseGrandTotalRefunded
                subTotal
                baseSubTotal
                subTotalInvoiced
                baseSubTotalInvoiced
                subTotalRefunded
                baseSubTotalRefunded
                discountPercent
                discountAmount
                baseDiscountAmount
                discountInvoiced
                baseDiscountInvoiced
                discountRefunded
                baseDiscountRefunded
                taxAmount
                baseTaxAmount
                taxAmountInvoiced
                baseTaxAmountInvoiced
                taxAmountRefunded
                baseTaxAmountRefunded
                shippingAmount
                baseShippingAmount
                shippingInvoiced
                baseShippingInvoiced
                shippingRefunded
                baseShippingRefunded
                customerId
                customerType
                channelId
                channelType
                cartId
                appliedCartRuleIds
                shippingDiscountAmount
                baseShippingDiscountAmount
                createdAt
                updatedAt
            }
            items {
                id
                name
                description
                sku
                qty
                weight
                price
                basePrice
                total
                baseTotal
                productId
                productType
                orderItemId
                shipmentId
                additional
                createdAt
                updatedAt
            }
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
            }
            customer {
                id
                firstName
                lastName
                name
                gender
                dateOfBirth
                email
                phone
                password
                apiToken
                customerGroupId
                subscribedToNewsLetter
                isVerified
                token
                notes
                status
                customerGroup {
                    id
                    name
                    code
                    isUserDefined
                    createdAt
                    updatedAt
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
        "viewShipments": [
            {
                "id": 2,
                "status": null,
                "totalQty": 1,
                "totalWeight": null,
                "carrierCode": null,
                "carrierTitle": "FEDEX",
                "trackNumber": "32414zx",
                "emailSent": 0,
                "customerId": 5,
                "customerType": "Webkul\\Customer\\Models\\Customer",
                "orderId": 3,
                "orderAddressId": 15,
                "createdAt": "2021-05-28 14:31:00",
                "updatedAt": "2021-05-28 14:31:00",
                "inventorySourceId": 1,
                "inventorySourceName": "Default",
                "order": {
                    "id": 3,
                    "incrementId": "3",
                    "status": "completed",
                    "channelName": "Default",
                    "isGuest": 0,
                    "customerEmail": "naresh.verma327@webkul.com",
                    "customerFirstName": "Naresh",
                    "customerLastName": "Verma",
                    "customerCompanyName": null,
                    "customerVatId": null,
                    "shippingMethod": "flatrate_flatrate",
                    "shippingTitle": "Flat Rate - Flat Rate",
                    "shippingDescription": "Flat Rate Shipping",
                    "couponCode": null,
                    "isGift": 0,
                    "totalItemCount": 1,
                    "totalQtyOrdered": 1,
                    "baseCurrencyCode": "USD",
                    "channelCurrencyCode": "USD",
                    "orderCurrencyCode": "USD",
                    "grandTotal": 15,
                    "baseGrandTotal": 15,
                    "grandTotalInvoiced": 15,
                    "baseGrandTotalInvoiced": 15,
                    "grandTotalRefunded": 0,
                    "baseGrandTotalRefunded": 0,
                    "subTotal": 5,
                    "baseSubTotal": 5,
                    "subTotalInvoiced": 5,
                    "baseSubTotalInvoiced": 5,
                    "subTotalRefunded": 0,
                    "baseSubTotalRefunded": 0,
                    "discountPercent": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "discountInvoiced": 0,
                    "baseDiscountInvoiced": 0,
                    "discountRefunded": 0,
                    "baseDiscountRefunded": 0,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "taxAmountInvoiced": 0,
                    "baseTaxAmountInvoiced": 0,
                    "taxAmountRefunded": 0,
                    "baseTaxAmountRefunded": 0,
                    "shippingAmount": 10,
                    "baseShippingAmount": 10,
                    "shippingInvoiced": 10,
                    "baseShippingInvoiced": 10,
                    "shippingRefunded": 0,
                    "baseShippingRefunded": 0,
                    "customerId": 5,
                    "customerType": "Webkul\\Customer\\Models\\Customer",
                    "channelId": 1,
                    "channelType": "Webkul\\Core\\Models\\Channel",
                    "cartId": "3",
                    "appliedCartRuleIds": "",
                    "shippingDiscountAmount": 0,
                    "baseShippingDiscountAmount": 0,
                    "createdAt": "2021-05-28 14:28:51",
                    "updatedAt": "2021-05-28 14:31:00"
                },
                "items": [
                    {
                        "id": 2,
                        "name": "testOutlet",
                        "description": null,
                        "sku": "test-product",
                        "qty": 1,
                        "weight": 3,
                        "price": 5,
                        "basePrice": 5,
                        "total": 5,
                        "baseTotal": 5,
                        "productId": "1",
                        "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                        "orderItemId": "3",
                        "shipmentId": "2",
                        "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                        "createdAt": "2021-05-28 14:31:00",
                        "updatedAt": "2021-05-28 14:31:00"
                    }
                ],
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
                    "longitude": null
                },
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
                    "customerGroup": {
                        "id": "2",
                        "name": "General",
                        "code": "general",
                        "isUserDefined": false,
                        "createdAt": null,
                        "updatedAt": null
                    },
                    "createdAt": "2021-05-28 12:54:56",
                    "updatedAt": "2021-05-28 12:54:56"
                }
            }
        ]
    }
}
~~~
:::

## Get Customer Shipment By ID

To get the  specific Customer Order Shipment, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query viewShipment {
        viewShipment(id: 2) {
            id
            status
            totalQty
            totalWeight
            carrierCode
            carrierTitle
            trackNumber
            emailSent
            customerId
            customerType
            orderId
            orderAddressId
            createdAt
            updatedAt
            inventorySourceId
            inventorySourceName
            order {
                id
                incrementId
                status
                channelName
                isGuest
                customerEmail
                customerFirstName
                customerLastName
                customerCompanyName
                customerVatId
                shippingMethod
                shippingTitle
                shippingDescription
                couponCode
                isGift
                totalItemCount
                totalQtyOrdered
                baseCurrencyCode
                channelCurrencyCode
                orderCurrencyCode
                grandTotal
                baseGrandTotal
                grandTotalInvoiced
                baseGrandTotalInvoiced
                grandTotalRefunded
                baseGrandTotalRefunded
                subTotal
                baseSubTotal
                subTotalInvoiced
                baseSubTotalInvoiced
                subTotalRefunded
                baseSubTotalRefunded
                discountPercent
                discountAmount
                baseDiscountAmount
                discountInvoiced
                baseDiscountInvoiced
                discountRefunded
                baseDiscountRefunded
                taxAmount
                baseTaxAmount
                taxAmountInvoiced
                baseTaxAmountInvoiced
                taxAmountRefunded
                baseTaxAmountRefunded
                shippingAmount
                baseShippingAmount
                shippingInvoiced
                baseShippingInvoiced
                shippingRefunded
                baseShippingRefunded
                customerId
                customerType
                channelId
                channelType
                cartId
                appliedCartRuleIds
                shippingDiscountAmount
                baseShippingDiscountAmount
                createdAt
                updatedAt
            }
            items {
                id
                name
                description
                sku
                qty
                weight
                price
                basePrice
                total
                baseTotal
                productId
                productType
                orderItemId
                shipmentId
                additional
                createdAt
                updatedAt
            }
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
            }
            customer {
                id
                firstName
                lastName
                name
                gender
                dateOfBirth
                email
                phone
                password
                apiToken
                customerGroupId
                subscribedToNewsLetter
                isVerified
                token
                notes
                status
                customerGroup {
                    id
                    name
                    code
                    isUserDefined
                    createdAt
                    updatedAt
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
        "viewShipment": {
            "id": 2,
            "status": null,
            "totalQty": 1,
            "totalWeight": null,
            "carrierCode": null,
            "carrierTitle": "FEDEX",
            "trackNumber": "32414zx",
            "emailSent": 0,
            "customerId": 5,
            "customerType": "Webkul\\Customer\\Models\\Customer",
            "orderId": 3,
            "orderAddressId": 15,
            "createdAt": "2021-05-28 14:31:00",
            "updatedAt": "2021-05-28 14:31:00",
            "inventorySourceId": 1,
            "inventorySourceName": "Default",
            "order": {
                "id": 3,
                "incrementId": "3",
                "status": "completed",
                "channelName": "Default",
                "isGuest": 0,
                "customerEmail": "naresh.verma327@webkul.com",
                "customerFirstName": "Naresh",
                "customerLastName": "Verma",
                "customerCompanyName": null,
                "customerVatId": null,
                "shippingMethod": "flatrate_flatrate",
                "shippingTitle": "Flat Rate - Flat Rate",
                "shippingDescription": "Flat Rate Shipping",
                "couponCode": null,
                "isGift": 0,
                "totalItemCount": 1,
                "totalQtyOrdered": 1,
                "baseCurrencyCode": "USD",
                "channelCurrencyCode": "USD",
                "orderCurrencyCode": "USD",
                "grandTotal": 15,
                "baseGrandTotal": 15,
                "grandTotalInvoiced": 15,
                "baseGrandTotalInvoiced": 15,
                "grandTotalRefunded": 0,
                "baseGrandTotalRefunded": 0,
                "subTotal": 5,
                "baseSubTotal": 5,
                "subTotalInvoiced": 5,
                "baseSubTotalInvoiced": 5,
                "subTotalRefunded": 0,
                "baseSubTotalRefunded": 0,
                "discountPercent": 0,
                "discountAmount": 0,
                "baseDiscountAmount": 0,
                "discountInvoiced": 0,
                "baseDiscountInvoiced": 0,
                "discountRefunded": 0,
                "baseDiscountRefunded": 0,
                "taxAmount": 0,
                "baseTaxAmount": 0,
                "taxAmountInvoiced": 0,
                "baseTaxAmountInvoiced": 0,
                "taxAmountRefunded": 0,
                "baseTaxAmountRefunded": 0,
                "shippingAmount": 10,
                "baseShippingAmount": 10,
                "shippingInvoiced": 10,
                "baseShippingInvoiced": 10,
                "shippingRefunded": 0,
                "baseShippingRefunded": 0,
                "customerId": 5,
                "customerType": "Webkul\\Customer\\Models\\Customer",
                "channelId": 1,
                "channelType": "Webkul\\Core\\Models\\Channel",
                "cartId": "3",
                "appliedCartRuleIds": "",
                "shippingDiscountAmount": 0,
                "baseShippingDiscountAmount": 0,
                "createdAt": "2021-05-28 14:28:51",
                "updatedAt": "2021-05-28 14:31:00"
            },
            "items": [
                {
                    "id": 2,
                    "name": "testOutlet",
                    "description": null,
                    "sku": "test-product",
                    "qty": 1,
                    "weight": 3,
                    "price": 5,
                    "basePrice": 5,
                    "total": 5,
                    "baseTotal": 5,
                    "productId": "1",
                    "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                    "orderItemId": "3",
                    "shipmentId": "2",
                    "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                    "createdAt": "2021-05-28 14:31:00",
                    "updatedAt": "2021-05-28 14:31:00"
                }
            ],
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
                "longitude": null
            },
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
                "customerGroup": {
                    "id": "2",
                    "name": "General",
                    "code": "general",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                },
                "createdAt": "2021-05-28 12:54:56",
                "updatedAt": "2021-05-28 12:54:56"
            }
        }
    }
  }
  ~~~
:::

## Get Customer Refunds

You can get all the Customer Refunds from the Bagisto store. You can achieve this job by using the `Customer Refunds` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note** You can pass all the input fields to filter the refund data.

- Query
  ~~~query
    query viewRefunds {
        viewRefunds(input: {
            page: 1
            limit: 10
            # id: 1
            # orderId: 1
            # quantity: 2
            # adjustmentRefund: 1.22
            # adjustmentFee: 3.45
            # shippingAmount: 47.50
            # taxAmount: 1.13
            # discountAmount: 1.45
            # grandTotal: 5.35
            # baseGrandTotal: 5.35
            # refundDate: "2021-02-12 20:36:26"
        }) {
            id
            incrementId
            state
            emailSent
            totalQty
            baseCurrencyCode
            channelCurrencyCode
            orderCurrencyCode
            adjustmentRefund
            baseAdjustmentRefund
            adjustmentFee
            baseAdjustmentFee
            subTotal
            baseSubTotal
            grandTotal
            baseGrandTotal
            shippingAmount
            baseShippingAmount
            taxAmount
            baseTaxAmount
            discountPercent
            discountAmount
            baseDiscountAmount
            orderId
            createdAt
            updatedAt
            items {
                id
                name
                description
                sku
                qty
                price
                basePrice
                total
                baseTotal
                taxAmount
                baseTaxAmount
                discountPercent
                discountAmount
                baseDiscountAmount
                productId
                productType
                orderItemId
                refundId
                parentId
                additional
                createdAt
                updatedAt
            }
            order {
                id
                incrementId
                status
                channelName
                isGuest
                customerEmail
                customerFirstName
                customerLastName
                customerCompanyName
                customerVatId
                shippingMethod
                shippingTitle
                shippingDescription
                couponCode
                isGift
                totalItemCount
                totalQtyOrdered
                baseCurrencyCode
                channelCurrencyCode
                orderCurrencyCode
                grandTotal
                baseGrandTotal
                grandTotalInvoiced
                baseGrandTotalInvoiced
                grandTotalRefunded
                baseGrandTotalRefunded
                subTotal
                baseSubTotal
                subTotalInvoiced
                baseSubTotalInvoiced
                subTotalRefunded
                baseSubTotalRefunded
                discountPercent
                discountAmount
                baseDiscountAmount
                discountInvoiced
                baseDiscountInvoiced
                discountRefunded
                baseDiscountRefunded
                taxAmount
                baseTaxAmount
                taxAmountInvoiced
                baseTaxAmountInvoiced
                taxAmountRefunded
                baseTaxAmountRefunded
                shippingAmount
                baseShippingAmount
                shippingInvoiced
                baseShippingInvoiced
                shippingRefunded
                baseShippingRefunded
                customerId
                customerType
                channelId
                channelType
                cartId
                appliedCartRuleIds
                shippingDiscountAmount
                baseShippingDiscountAmount
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
        "viewRefunds": [
            {
                "id": 2,
                "incrementId": null,
                "state": "refunded",
                "emailSent": 0,
                "totalQty": 1,
                "baseCurrencyCode": "USD",
                "channelCurrencyCode": "USD",
                "orderCurrencyCode": "USD",
                "adjustmentRefund": 0,
                "baseAdjustmentRefund": 0,
                "adjustmentFee": 0,
                "baseAdjustmentFee": 0,
                "subTotal": 5,
                "baseSubTotal": 5,
                "grandTotal": 15,
                "baseGrandTotal": 15,
                "shippingAmount": 10,
                "baseShippingAmount": 10,
                "taxAmount": 0,
                "baseTaxAmount": 0,
                "discountPercent": 0,
                "discountAmount": 0,
                "baseDiscountAmount": 0,
                "orderId": 3,
                "createdAt": "2021-05-28 15:22:34",
                "updatedAt": "2021-05-28 15:22:34",
                "items": [
                    {
                        "id": 2,
                        "name": "testOutlet",
                        "description": null,
                        "sku": "test-product",
                        "qty": 1,
                        "price": 5,
                        "basePrice": 5,
                        "total": 5,
                        "baseTotal": 5,
                        "taxAmount": 0,
                        "baseTaxAmount": 0,
                        "discountPercent": 0,
                        "discountAmount": 0,
                        "baseDiscountAmount": 0,
                        "productId": 1,
                        "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                        "orderItemId": 3,
                        "refundId": 2,
                        "parentId": null,
                        "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                        "createdAt": "2021-05-28 15:22:34",
                        "updatedAt": "2021-05-28 15:22:34"
                    }
                ],
                "order": {
                    "id": 3,
                    "incrementId": "3",
                    "status": "closed",
                    "channelName": "Default",
                    "isGuest": 0,
                    "customerEmail": "naresh.verma327@webkul.com",
                    "customerFirstName": "Naresh",
                    "customerLastName": "Verma",
                    "customerCompanyName": null,
                    "customerVatId": null,
                    "shippingMethod": "flatrate_flatrate",
                    "shippingTitle": "Flat Rate - Flat Rate",
                    "shippingDescription": "Flat Rate Shipping",
                    "couponCode": null,
                    "isGift": 0,
                    "totalItemCount": 1,
                    "totalQtyOrdered": 1,
                    "baseCurrencyCode": "USD",
                    "channelCurrencyCode": "USD",
                    "orderCurrencyCode": "USD",
                    "grandTotal": 15,
                    "baseGrandTotal": 15,
                    "grandTotalInvoiced": 15,
                    "baseGrandTotalInvoiced": 15,
                    "grandTotalRefunded": 15,
                    "baseGrandTotalRefunded": 15,
                    "subTotal": 5,
                    "baseSubTotal": 5,
                    "subTotalInvoiced": 5,
                    "baseSubTotalInvoiced": 5,
                    "subTotalRefunded": 5,
                    "baseSubTotalRefunded": 5,
                    "discountPercent": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "discountInvoiced": 0,
                    "baseDiscountInvoiced": 0,
                    "discountRefunded": 0,
                    "baseDiscountRefunded": 0,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "taxAmountInvoiced": 0,
                    "baseTaxAmountInvoiced": 0,
                    "taxAmountRefunded": 0,
                    "baseTaxAmountRefunded": 0,
                    "shippingAmount": 10,
                    "baseShippingAmount": 10,
                    "shippingInvoiced": 10,
                    "baseShippingInvoiced": 10,
                    "shippingRefunded": 10,
                    "baseShippingRefunded": 10,
                    "customerId": 5,
                    "customerType": "Webkul\\Customer\\Models\\Customer",
                    "channelId": 1,
                    "channelType": "Webkul\\Core\\Models\\Channel",
                    "cartId": "3",
                    "appliedCartRuleIds": "",
                    "shippingDiscountAmount": 0,
                    "baseShippingDiscountAmount": 0,
                    "createdAt": "2021-05-28 14:28:51",
                    "updatedAt": "2021-05-28 15:22:34"
                }
            }
        ]
    }
}
~~~
:::

## Get Customer Refund By ID

To get the  specific Customer Order Refund, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query viewRefund {
        viewRefund(id: 2) {
            id
            incrementId
            state
            emailSent
            totalQty
            baseCurrencyCode
            channelCurrencyCode
            orderCurrencyCode
            adjustmentRefund
            baseAdjustmentRefund
            adjustmentFee
            baseAdjustmentFee
            subTotal
            baseSubTotal
            grandTotal
            baseGrandTotal
            shippingAmount
            baseShippingAmount
            taxAmount
            baseTaxAmount
            discountPercent
            discountAmount
            baseDiscountAmount
            orderId
            createdAt
            updatedAt
            items {
                id
                name
                description
                sku
                qty
                price
                basePrice
                total
                baseTotal
                taxAmount
                baseTaxAmount
                discountPercent
                discountAmount
                baseDiscountAmount
                productId
                productType
                orderItemId
                refundId
                parentId
                additional
                createdAt
                updatedAt
            }
            order {
                id
                incrementId
                status
                channelName
                isGuest
                customerEmail
                customerFirstName
                customerLastName
                customerCompanyName
                customerVatId
                shippingMethod
                shippingTitle
                shippingDescription
                couponCode
                isGift
                totalItemCount
                totalQtyOrdered
                baseCurrencyCode
                channelCurrencyCode
                orderCurrencyCode
                grandTotal
                baseGrandTotal
                grandTotalInvoiced
                baseGrandTotalInvoiced
                grandTotalRefunded
                baseGrandTotalRefunded
                subTotal
                baseSubTotal
                subTotalInvoiced
                baseSubTotalInvoiced
                subTotalRefunded
                baseSubTotalRefunded
                discountPercent
                discountAmount
                baseDiscountAmount
                discountInvoiced
                baseDiscountInvoiced
                discountRefunded
                baseDiscountRefunded
                taxAmount
                baseTaxAmount
                taxAmountInvoiced
                baseTaxAmountInvoiced
                taxAmountRefunded
                baseTaxAmountRefunded
                shippingAmount
                baseShippingAmount
                shippingInvoiced
                baseShippingInvoiced
                shippingRefunded
                baseShippingRefunded
                customerId
                customerType
                channelId
                channelType
                cartId
                appliedCartRuleIds
                shippingDiscountAmount
                baseShippingDiscountAmount
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
        "viewRefund": {
            "id": 2,
            "incrementId": null,
            "state": "refunded",
            "emailSent": 0,
            "totalQty": 1,
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "orderCurrencyCode": "USD",
            "adjustmentRefund": 0,
            "baseAdjustmentRefund": 0,
            "adjustmentFee": 0,
            "baseAdjustmentFee": 0,
            "subTotal": 5,
            "baseSubTotal": 5,
            "grandTotal": 15,
            "baseGrandTotal": 15,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountPercent": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "orderId": 3,
            "createdAt": "2021-05-28 15:22:34",
            "updatedAt": "2021-05-28 15:22:34",
            "items": [
                {
                    "id": 2,
                    "name": "testOutlet",
                    "description": null,
                    "sku": "test-product",
                    "qty": 1,
                    "price": 5,
                    "basePrice": 5,
                    "total": 5,
                    "baseTotal": 5,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "discountPercent": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "productId": 1,
                    "productType": "Webkul\\GraphQLAPI\\Models\\Catalog\\Product",
                    "orderItemId": 3,
                    "refundId": 2,
                    "parentId": null,
                    "additional": "{\"_token\":\"CdIv16Fyz7kXgGr6zs8P3brDWldnU5U0jsCZOGdI\",\"locale\":\"en\",\"quantity\":\"1\",\"product_id\":\"1\"}",
                    "createdAt": "2021-05-28 15:22:34",
                    "updatedAt": "2021-05-28 15:22:34"
                }
            ],
            "order": {
                "id": 3,
                "incrementId": "3",
                "status": "closed",
                "channelName": "Default",
                "isGuest": 0,
                "customerEmail": "naresh.verma327@webkul.com",
                "customerFirstName": "Naresh",
                "customerLastName": "Verma",
                "customerCompanyName": null,
                "customerVatId": null,
                "shippingMethod": "flatrate_flatrate",
                "shippingTitle": "Flat Rate - Flat Rate",
                "shippingDescription": "Flat Rate Shipping",
                "couponCode": null,
                "isGift": 0,
                "totalItemCount": 1,
                "totalQtyOrdered": 1,
                "baseCurrencyCode": "USD",
                "channelCurrencyCode": "USD",
                "orderCurrencyCode": "USD",
                "grandTotal": 15,
                "baseGrandTotal": 15,
                "grandTotalInvoiced": 15,
                "baseGrandTotalInvoiced": 15,
                "grandTotalRefunded": 15,
                "baseGrandTotalRefunded": 15,
                "subTotal": 5,
                "baseSubTotal": 5,
                "subTotalInvoiced": 5,
                "baseSubTotalInvoiced": 5,
                "subTotalRefunded": 5,
                "baseSubTotalRefunded": 5,
                "discountPercent": 0,
                "discountAmount": 0,
                "baseDiscountAmount": 0,
                "discountInvoiced": 0,
                "baseDiscountInvoiced": 0,
                "discountRefunded": 0,
                "baseDiscountRefunded": 0,
                "taxAmount": 0,
                "baseTaxAmount": 0,
                "taxAmountInvoiced": 0,
                "baseTaxAmountInvoiced": 0,
                "taxAmountRefunded": 0,
                "baseTaxAmountRefunded": 0,
                "shippingAmount": 10,
                "baseShippingAmount": 10,
                "shippingInvoiced": 10,
                "baseShippingInvoiced": 10,
                "shippingRefunded": 10,
                "baseShippingRefunded": 10,
                "customerId": 5,
                "customerType": "Webkul\\Customer\\Models\\Customer",
                "channelId": 1,
                "channelType": "Webkul\\Core\\Models\\Channel",
                "cartId": "3",
                "appliedCartRuleIds": "",
                "shippingDiscountAmount": 0,
                "baseShippingDiscountAmount": 0,
                "createdAt": "2021-05-28 14:28:51",
                "updatedAt": "2021-05-28 15:22:34"
            }
        }
    }
  }
  ~~~
:::

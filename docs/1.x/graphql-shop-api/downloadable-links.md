# Downloadable Links

In this section, we will see all the APIs which are related to Customer Downloadable Links.

## Get All Downloadable Links

You can get all the  Downloadable Links from the Bagisto store. You can achieve this job by using the `Downloadable Links` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note** You can pass all the input fields to filter the Downloadable link data.


- Query
  ~~~query
    query downloadableLinkPurchases {
        downloadableLinkPurchases(input: {
            page: 1
            limit: 10
            # id: 1
            # orderId: 3
            # orderItemId: 9
            # productName: "e-book"
            # linkName: "link 1"
            # status: "available"
            # downloadBought: 3
            # downloadUsed: 1
        }) {
            id
            productName
            name
            url
            file
            fileName
            type
            downloadBought
            downloadUsed
            status
            customerId
            orderId
            orderItemId
            createdAt
            updatedAt
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
            }
        }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "downloadableLinkPurchases": [
            {
                "id": "1",
                "productName": "e-book",
                "name": "Link 3",
                "url": "https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_960_720.png",
                "file": null,
                "fileName": null,
                "type": "url",
                "downloadBought": 3,
                "downloadUsed": 0,
                "status": true,
                "customerId": "5",
                "orderId": "4",
                "orderItemId": "4",
                "createdAt": "2021-05-28 17:03:10",
                "updatedAt": "2021-05-28 17:03:35",
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
                    "status": true
                },
                "order": {
                    "id": 4,
                    "incrementId": "4",
                    "status": "completed",
                    "channelName": "Default",
                    "isGuest": 0,
                    "customerEmail": "naresh.verma327@webkul.com",
                    "customerFirstName": "Naresh",
                    "customerLastName": "Verma",
                    "customerCompanyName": null,
                    "customerVatId": null,
                    "shippingMethod": null,
                    "shippingTitle": null,
                    "shippingDescription": null,
                    "couponCode": null,
                    "isGift": 0,
                    "totalItemCount": 1,
                    "totalQtyOrdered": 1,
                    "baseCurrencyCode": "USD",
                    "channelCurrencyCode": "USD",
                    "orderCurrencyCode": "USD",
                    "grandTotal": 18.55,
                    "baseGrandTotal": 18.55,
                    "grandTotalInvoiced": 18.55,
                    "baseGrandTotalInvoiced": 18.55,
                    "grandTotalRefunded": 0,
                    "baseGrandTotalRefunded": 0,
                    "subTotal": 18.55,
                    "baseSubTotal": 18.55,
                    "subTotalInvoiced": 18.55,
                    "baseSubTotalInvoiced": 18.55,
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
                    "shippingAmount": 0,
                    "baseShippingAmount": 0,
                    "shippingInvoiced": 0,
                    "baseShippingInvoiced": 0,
                    "shippingRefunded": 0,
                    "baseShippingRefunded": 0,
                    "customerId": 5,
                    "customerType": "Webkul\\Customer\\Models\\Customer",
                    "channelId": 1,
                    "channelType": "Webkul\\Core\\Models\\Channel",
                    "cartId": "5",
                    "appliedCartRuleIds": "",
                    "shippingDiscountAmount": 0,
                    "baseShippingDiscountAmount": 0,
                    "createdAt": "2021-05-28 17:03:10",
                    "updatedAt": "2021-05-28 17:03:35"
                },
                "orderItem": {
                    "id": "4",
                    "sku": "e-book",
                    "type": "downloadable",
                    "name": "e-book",
                    "couponCode": null,
                    "weight": 5.2,
                    "totalWeight": 5.2,
                    "qtyOrdered": 1,
                    "qtyShipped": 0,
                    "qtyInvoiced": 1,
                    "qtyCanceled": 0,
                    "qtyRefunded": 0,
                    "price": 18.55,
                    "basePrice": 18.55,
                    "total": 18.55,
                    "baseTotal": 18.55
                }
            }
        ]
    }
}
~~~
:::

## Get Downloadable Link By ID

To get the  specific Downloadable Link, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query downloadableLinkPurchase {
        downloadableLinkPurchase(id: 1) {
            id
            productName
            name
            url
            file
            fileName
            type
            downloadBought
            downloadUsed
            status
            customerId
            orderId
            orderItemId
            createdAt
            updatedAt
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
            }
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "downloadableLinkPurchase": {
            "id": "1",
            "productName": "e-book",
            "name": "Link 3",
            "url": "https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_960_720.png",
            "file": null,
            "fileName": null,
            "type": "url",
            "downloadBought": 3,
            "downloadUsed": 0,
            "status": true,
            "customerId": "5",
            "orderId": "4",
            "orderItemId": "4",
            "createdAt": "2021-05-28 17:03:10",
            "updatedAt": "2021-05-28 17:03:35",
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
                "status": true
            },
            "order": {
                "id": 4,
                "incrementId": "4",
                "status": "completed",
                "channelName": "Default",
                "isGuest": 0,
                "customerEmail": "naresh.verma327@webkul.com",
                "customerFirstName": "Naresh",
                "customerLastName": "Verma",
                "customerCompanyName": null,
                "customerVatId": null,
                "shippingMethod": null,
                "shippingTitle": null,
                "shippingDescription": null,
                "couponCode": null,
                "isGift": 0,
                "totalItemCount": 1,
                "totalQtyOrdered": 1,
                "baseCurrencyCode": "USD",
                "channelCurrencyCode": "USD",
                "orderCurrencyCode": "USD",
                "grandTotal": 18.55,
                "baseGrandTotal": 18.55,
                "grandTotalInvoiced": 18.55,
                "baseGrandTotalInvoiced": 18.55,
                "grandTotalRefunded": 0,
                "baseGrandTotalRefunded": 0,
                "subTotal": 18.55,
                "baseSubTotal": 18.55,
                "subTotalInvoiced": 18.55,
                "baseSubTotalInvoiced": 18.55,
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
                "shippingAmount": 0,
                "baseShippingAmount": 0,
                "shippingInvoiced": 0,
                "baseShippingInvoiced": 0,
                "shippingRefunded": 0,
                "baseShippingRefunded": 0,
                "customerId": 5,
                "customerType": "Webkul\\Customer\\Models\\Customer",
                "channelId": 1,
                "channelType": "Webkul\\Core\\Models\\Channel",
                "cartId": "5",
                "appliedCartRuleIds": "",
                "shippingDiscountAmount": 0,
                "baseShippingDiscountAmount": 0,
                "createdAt": "2021-05-28 17:03:10",
                "updatedAt": "2021-05-28 17:03:35"
            },
            "orderItem": {
                "id": "4",
                "sku": "e-book",
                "type": "downloadable",
                "name": "e-book",
                "couponCode": null,
                "weight": 5.2,
                "totalWeight": 5.2,
                "qtyOrdered": 1,
                "qtyShipped": 0,
                "qtyInvoiced": 1,
                "qtyCanceled": 0,
                "qtyRefunded": 0,
                "price": 18.55,
                "basePrice": 18.55,
                "total": 18.55,
                "baseTotal": 18.55
            }
        }
    }
  }
  ~~~
:::
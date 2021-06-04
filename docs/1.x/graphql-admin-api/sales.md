# Orders

In this section, we will see all the APIs which are related to Orders.

##  Get All Orders

You can get all the Orders from the Bagisto store. You can achieve this job by using the `Orders` API call.

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
    query orders {
        orders(page:1){
            paginatorInfo {
                count
                currentPage
                lastPage
                total
            }
            data{
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
                billingAddress{id}
                shippingAddress{id}
                refunds{
                    id
                    incrementId
                    state
                    emailSent
                    totalQty
                }
                addresses{
                    id
                }
                items{
                    id
                }
                comments{
                    id
                }
                shipments{
                    id
                    status
                    totalQty
                    totalWeight
                    carrierCode
                    carrierTitle
                }
                invoices{
                    id
                    incrementId
                    state
                }
                customer{
                    id
                }
                payment{
                    id
                }
                channel{
                    id
                }
                cart{
                    id
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
        "orders": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": 1,
                    "incrementId": "1",
                    "status": "pending",
                    "channelName": "Default",
                    "isGuest": 1,
                    "customerEmail": "naresh.verma3271@webkul.com",
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
                    "grandTotal": 14.5,
                    "baseGrandTotal": 14.5,
                    "grandTotalInvoiced": 0,
                    "baseGrandTotalInvoiced": 0,
                    "grandTotalRefunded": 0,
                    "baseGrandTotalRefunded": 0,
                    "subTotal": 4.5,
                    "baseSubTotal": 4.5,
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
                    "customerId": null,
                    "customerType": null,
                    "channelId": 1,
                    "channelType": "Webkul\\Core\\Models\\Channel",
                    "cartId": "1",
                    "appliedCartRuleIds": "",
                    "shippingDiscountAmount": 0,
                    "baseShippingDiscountAmount": 0,
                    "createdAt": "2021-05-27 19:45:28",
                    "updatedAt": "2021-05-27 19:45:28",
                    "billingAddress": {
                        "id": 6
                    },
                    "shippingAddress": {
                        "id": 5
                    },
                    "refunds": [],
                    "addresses": [
                        {
                            "id": 5
                        },
                        {
                            "id": 6
                        }
                    ],
                    "items": [
                        {
                            "id": "1"
                        }
                    ],
                    "comments": [],
                    "shipments": [],
                    "invoices": [],
                    "customer": null,
                    "payment": {
                        "id": "1"
                    },
                    "channel": {
                        "id": "1"
                    },
                    "cart": {
                        "id": "1"
                    },
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

##  Get Order By ID

To get the  specific Order, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query order {
        order(id:1){
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
            billingAddress{id}
            shippingAddress{id}
            refunds{
                id
                incrementId
                state
                emailSent
                totalQty
            }
            addresses{
                id
            }
            items{
                id
            }
            comments{
                id
            }
            shipments{
                id
                status
                totalQty
                totalWeight
                carrierCode
                carrierTitle
            }
            invoices{
                id
                incrementId
                state
            }
            customer{
                id
            }
            payment{
                id
            }
            channel{
                id
            }
            cart{
                id
            }
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "order": {
            "id": 1,
            "incrementId": "1",
            "status": "pending",
            "channelName": "Default",
            "isGuest": 1,
            "customerEmail": "naresh.verma3271@webkul.com",
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
            "grandTotal": 14.5,
            "baseGrandTotal": 14.5,
            "grandTotalInvoiced": 0,
            "baseGrandTotalInvoiced": 0,
            "grandTotalRefunded": 0,
            "baseGrandTotalRefunded": 0,
            "subTotal": 4.5,
            "baseSubTotal": 4.5,
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
            "customerId": null,
            "customerType": null,
            "channelId": 1,
            "channelType": "Webkul\\Core\\Models\\Channel",
            "cartId": "1",
            "appliedCartRuleIds": "",
            "shippingDiscountAmount": 0,
            "baseShippingDiscountAmount": 0,
            "createdAt": "2021-05-27 19:45:28",
            "updatedAt": "2021-05-27 19:45:28",
            "billingAddress": {
                "id": 6
            },
            "shippingAddress": {
                "id": 5
            },
            "refunds": [],
            "addresses": [
                {
                    "id": 5
                },
                {
                    "id": 6
                }
            ],
            "items": [
                {
                    "id": "1"
                }
            ],
            "comments": [],
            "shipments": [],
            "invoices": [],
            "customer": null,
            "payment": {
                "id": "1"
            },
            "channel": {
                "id": "1"
            },
            "cart": {
                "id": "1"
            },
            "success": null
        }
    }
  }
  ~~~

:::

##  Get Filtered Orders

You can get the filter data from  the Orders by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response for Filter Data.

### Examples

Let's take an example,

- Request Query

~~~query
    query orders {
        orders(page:1, input: {
            status: "pending"
        }){
            paginatorInfo {
                count
                currentPage
                lastPage
                total
            }
            data{
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
                billingAddress{id}
                shippingAddress{id}
                refunds{
                    id
                    incrementId
                    state
                    emailSent
                    totalQty
                }
                addresses{
                    id
                }
                items{
                    id
                }
                comments{
                    id
                }
                shipments{
                    id
                    status
                    totalQty
                    totalWeight
                    carrierCode
                    carrierTitle
                }
                invoices{
                    id
                    incrementId
                    state
                }
                customer{
                    id
                }
                payment{
                    id
                }
                channel{
                    id
                }
                cart{
                    id
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
        "orders": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": 1,
                    "incrementId": "1",
                    "status": "pending",
                    "channelName": "Default",
                    "isGuest": 1,
                    "customerEmail": "naresh.verma3271@webkul.com",
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
                    "grandTotal": 14.5,
                    "baseGrandTotal": 14.5,
                    "grandTotalInvoiced": 0,
                    "baseGrandTotalInvoiced": 0,
                    "grandTotalRefunded": 0,
                    "baseGrandTotalRefunded": 0,
                    "subTotal": 4.5,
                    "baseSubTotal": 4.5,
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
                    "customerId": null,
                    "customerType": null,
                    "channelId": 1,
                    "channelType": "Webkul\\Core\\Models\\Channel",
                    "cartId": "1",
                    "appliedCartRuleIds": "",
                    "shippingDiscountAmount": 0,
                    "baseShippingDiscountAmount": 0,
                    "createdAt": "2021-05-27 19:45:28",
                    "updatedAt": "2021-05-27 19:45:28",
                    "billingAddress": {
                        "id": 6
                    },
                    "shippingAddress": {
                        "id": 5
                    },
                    "refunds": [],
                    "addresses": [
                        {
                            "id": 5
                        },
                        {
                            "id": 6
                        }
                    ],
                    "items": [
                        {
                            "id": "1"
                        }
                    ],
                    "comments": [],
                    "shipments": [],
                    "invoices": [],
                    "customer": null,
                    "payment": {
                        "id": "1"
                    },
                    "channel": {
                        "id": "1"
                    },
                    "cart": {
                        "id": "1"
                    },
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
:::


##  Get All Invoices

You can get all the Invoices from the Bagisto store. You can achieve this job by using the `Invoices` API call.

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
    query invoices{
        invoices(page:1){
            paginatorInfo {
                count
                currentPage
                lastPage
                total
            }
            data{
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
                items{
                    id
                    sku
                }
                order{
                    id
                    
                }
            }
        }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "invoices": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": 1,
                    "incrementId": null,
                    "state": "paid",
                    "emailSent": 0,
                    "totalQty": 1,
                    "baseCurrencyCode": "USD",
                    "channelCurrencyCode": "USD",
                    "orderCurrencyCode": "USD",
                    "subTotal": 4.5,
                    "baseSubTotal": 4.5,
                    "grandTotal": 14.5,
                    "baseGrandTotal": 14.5,
                    "shippingAmount": 10,
                    "baseShippingAmount": 10,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "orderId": 1,
                    "orderAddressId": 6,
                    "createdAt": "2021-05-27 19:56:11",
                    "updatedAt": "2021-05-27 19:56:11",
                    "transactionId": null,
                    "items": [
                        {
                            "id": "1",
                            "sku": "test-product"
                        }
                    ],
                    "order": {
                        "id": 1
                    }
                }
            ]
        }
    }
}
~~~
:::

##  Get Invoice By ID

To get the  specific Invoice, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query invoice{
        invoice(id:1){
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
            items{
                id
                sku
            }
            order{
                id
                
            }
        }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "invoice": {
            "id": 1,
            "incrementId": null,
            "state": "paid",
            "emailSent": 0,
            "totalQty": 1,
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "orderCurrencyCode": "USD",
            "subTotal": 4.5,
            "baseSubTotal": 4.5,
            "grandTotal": 14.5,
            "baseGrandTotal": 14.5,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "orderId": 1,
            "orderAddressId": 6,
            "createdAt": "2021-05-27 19:56:11",
            "updatedAt": "2021-05-27 19:56:11",
            "transactionId": null,
            "items": [
                {
                    "id": "1",
                    "sku": "test-product"
                }
            ],
            "order": {
                "id": 1
            }
        }
    }
  }
  ~~~

:::


##  Create a new Order Invoice 

  To create a Order Invoice , you have to perform mutation on Order Invoice  and paas the related fields in the request.
  API call resource will create a new Order Invoice , only if the admin has logged in.

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
    mutation createInvoice{
        createInvoice(input:{
            orderId: 1
            invoiceData: {
                orderItemId:1
                quantity:1
            }
        }){
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
            items{id}
            order{id}
        }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createInvoice": {
            "id": 1,
            "incrementId": null,
            "state": "paid",
            "emailSent": null,
            "totalQty": 1,
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "orderCurrencyCode": "USD",
            "subTotal": 4.5,
            "baseSubTotal": 4.5,
            "grandTotal": 14.5,
            "baseGrandTotal": 14.5,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "orderId": 1,
            "orderAddressId": 6,
            "createdAt": "2021-05-27 19:56:11",
            "updatedAt": "2021-05-27 19:56:11",
            "transactionId": null,
            "items": [
                {
                    "id": "1"
                }
            ],
            "order": {
                "id": 1
            }
        }
    }
  }
  ~~~
:::


##  Get All Shipments

You can get all the Shipments from the Bagisto store. You can achieve this job by using the `Shipments` API call.

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
    query shipments {
        shipments(page:1){
            paginatorInfo {
                count
                currentPage
                lastPage
                total
            }
            data{
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
                order{
                    id
                }
                items{
                    id
                }
                inventorySource{
                    id
                    code
                    name
                }
                customer{
                    id
                    firstName
                    lastName
                }
            }
        }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "shipments": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": 1,
                    "status": null,
                    "totalQty": 1,
                    "totalWeight": null,
                    "carrierCode": null,
                    "carrierTitle": "newship",
                    "trackNumber": "7nh6354",
                    "emailSent": 0,
                    "customerId": null,
                    "customerType": null,
                    "orderId": 1,
                    "orderAddressId": 5,
                    "createdAt": "2021-05-27 20:17:30",
                    "updatedAt": "2021-05-27 20:17:31",
                    "inventorySourceId": 1,
                    "inventorySourceName": "Default",
                    "order": {
                        "id": 1
                    },
                    "items": [
                        {
                            "id": 1
                        }
                    ],
                    "inventorySource": {
                        "id": "1",
                        "code": "default",
                        "name": "Default"
                    },
                    "customer": null
                }
            ]
        }
    }
}
~~~
:::

##  Get Shipment By ID

To get the  specific Shipment, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query shipment {
        shipment(id:1){
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
            order{
                id
            }
            items{
                id
            }
            inventorySource{
                id
                code
                name
            }
            customer{
                id
                firstName
                lastName
            }
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "shipment": {
            "id": 1,
            "status": null,
            "totalQty": 1,
            "totalWeight": null,
            "carrierCode": null,
            "carrierTitle": "newship",
            "trackNumber": "7nh6354",
            "emailSent": 0,
            "customerId": null,
            "customerType": null,
            "orderId": 1,
            "orderAddressId": 5,
            "createdAt": "2021-05-27 20:17:30",
            "updatedAt": "2021-05-27 20:17:31",
            "inventorySourceId": 1,
            "inventorySourceName": "Default",
            "order": {
                "id": 1
            },
            "items": [
                {
                    "id": 1
                }
            ],
            "inventorySource": {
                "id": "1",
                "code": "default",
                "name": "Default"
            },
            "customer": null
        }
    }
  }
  ~~~

:::

##  Create a new Order Shipment 

  To create a Order Shipment , you have to perform mutation on Order Shipment  and paas the related fields in the request.
  API call resource will create a new Order Shipment , only if the admin has logged in.

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
    mutation{
        createShipment(input:{
            orderId:1
            carrierTitle:"newship"
            trackNumber:"7nh6354"
            inventorySourceId:1
            shipmentData:{
                orderItemId:1
                quantity:1
            }
        }){
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
        order{id}
        items{id}
        inventorySource{id}
        customer{id}
        }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createShipment": {
            "id": 1,
            "status": null,
            "totalQty": 1,
            "totalWeight": null,
            "carrierCode": null,
            "carrierTitle": "newship",
            "trackNumber": "7nh6354",
            "emailSent": null,
            "customerId": null,
            "customerType": null,
            "orderId": 1,
            "orderAddressId": 5,
            "createdAt": "2021-05-27 20:17:30",
            "updatedAt": "2021-05-27 20:17:31",
            "inventorySourceId": 1,
            "inventorySourceName": "Default",
            "order": {
                "id": 1
            },
            "items": [
                {
                    "id": 1
                }
            ],
            "inventorySource": {
                "id": "1"
            },
            "customer": null
        }
    }
  }
  ~~~
:::

##  Get All Refunds

You can get all the Refunds from the Bagisto store. You can achieve this job by using the `Refunds` API call.

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
    query refunds {
        refunds(page:1){
            paginatorInfo {
                count
                currentPage
                lastPage
                total
            }
            data{
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
                items{
                    id
                }
                order{
                    id
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
        "refunds": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": 1,
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
                    "subTotal": 4.5,
                    "baseSubTotal": 4.5,
                    "grandTotal": 14.5,
                    "baseGrandTotal": 14.5,
                    "shippingAmount": 10,
                    "baseShippingAmount": 10,
                    "taxAmount": 0,
                    "baseTaxAmount": 0,
                    "discountPercent": 0,
                    "discountAmount": 0,
                    "baseDiscountAmount": 0,
                    "orderId": 1,
                    "createdAt": "2021-05-27 20:27:29",
                    "updatedAt": "2021-05-27 20:27:29",
                    "items": [
                        {
                            "id": 1
                        }
                    ],
                    "order": {
                        "id": 1
                    },
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

##  Get Refund By ID

To get the  specific Refund, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query refund {
        refund(id:1){
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
            items{
                id
            }
            order{
                id
            }
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "refund": {
            "id": 1,
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
            "subTotal": 4.5,
            "baseSubTotal": 4.5,
            "grandTotal": 14.5,
            "baseGrandTotal": 14.5,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountPercent": 0,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "orderId": 1,
            "createdAt": "2021-05-27 20:27:29",
            "updatedAt": "2021-05-27 20:27:29",
            "items": [
                {
                    "id": 1
                }
            ],
            "order": {
                "id": 1
            },
            "success": null
        }
    }
  }
  ~~~

:::

##  Create a new Order Refund 

  To create a Order Refund , you have to perform mutation on Order Refund  and paas the related fields in the request.
  API call resource will create a new Order Refund , only if the admin has logged in.

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
    mutation{
        createRefund(input:{
            orderId:1
            refundShipping:10
            adjustmentRefund:0
            adjustmentFee:0
            refundData:{
                orderItemId:1
                quantity:1
            }           
        }){
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
            items{id}
            order{id}
            success
        }
    }

  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createRefund": {
            "id": 1,
            "incrementId": null,
            "state": "refunded",
            "emailSent": null,
            "totalQty": 1,
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "orderCurrencyCode": "USD",
            "adjustmentRefund": 0,
            "baseAdjustmentRefund": 0,
            "adjustmentFee": 0,
            "baseAdjustmentFee": 0,
            "subTotal": 4.5,
            "baseSubTotal": 4.5,
            "grandTotal": 14.5,
            "baseGrandTotal": 14.5,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountPercent": null,
            "discountAmount": 0,
            "baseDiscountAmount": 0,
            "orderId": 1,
            "createdAt": "2021-05-27 20:27:29",
            "updatedAt": "2021-05-27 20:27:29",
            "items": [
                {
                    "id": 1
                }
            ],
            "order": {
                "id": 1
            },
            "success": "Refund created successfully."
        }
    }
  }
  ~~~
:::

##  Cancel an Order

  To Cancel an Order , you have to perform mutation on Order  and paas the related fields in the request.
  API call resource will Cancel an Order , only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |


  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation cancelORder{
        cancelOrder(id:2)
        {success}
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "cancelOrder": {
            "success": "Order canceled successfully."
        }
    }
  }
  ~~~
:::
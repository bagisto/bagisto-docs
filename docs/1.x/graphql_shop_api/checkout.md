# Checkout

In this section, we will see all the APIs which are related to Checkout Process.

**Note** Make sure customer have item in the cart.

## Get Checkout addresses

You can get all the  Checkout addresses from the Bagisto store. You can achieve this job by using the `checkoutAddresses` API call.

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
    query checkoutAddresses {
        checkoutAddresses {
            success
            isGuest
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
                createdAt
                updatedAt
            }
            addresses {
                id
                address
            }
            addressList {
                id
                customerId
                companyName
                firstName
                lastName
                address1
                address2
                country
                state
                city
                postcode
                phone
                vatId
                addressType
                createdAt
                updatedAt
            }
            cartCount
            defaultCountry
        }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "checkoutAddresses": {
            "success": "Success: Customer's addresses fetched successfully.",
            "isGuest": false,
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
            "addresses": [
                {
                    "id": 12,
                    "address": "Naresh Verma\n                            3180  Bluff, GLEN CAMPBELL, PA, US, \n                            15742222222\n                            T: 234343544"
                }
            ],
            "addressList": [
                {
                    "id": "12",
                    "customerId": 5,
                    "companyName": "Webkul2",
                    "firstName": "Tom Demo2",
                    "lastName": "Martin Demo2",
                    "address1": "3180  Bluff",
                    "address2": "Street",
                    "country": "US",
                    "state": "PA",
                    "city": "GLEN CAMPBELL",
                    "postcode": "15742222222",
                    "phone": "234343544",
                    "vatId": "INV12345678904",
                    "addressType": "customer",
                    "createdAt": "2021-05-28 12:59:46",
                    "updatedAt": "2021-05-28 12:59:46"
                }
            ],
            "cartCount": 1,
            "defaultCountry": "IN"
        }
    }
}
~~~
:::

## Get Shipping Methods

After you get the checkout addresses you need to select the address for checkout or you can pass the billing and shipping address for the checkout. You can achieve this job by using the `shippingMethods` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

**Note** No need to save the shipping method for `Virtual` and `Downloadable` and `Booking` type Product. You can jump to `savePayment` Mutation. [Save Payment API](#save-payment-methods)

- Query
  ~~~query
    mutation shippingMethods {
        shippingMethods(input: {
            billingAddressId: 12
            shippingAddressId: 12
            billing: {
                companyName: "C. Trades"
                firstName: "Doug"
                lastName: "D Nelson"
                email: "doug@example.com"
                address1: "836 Hog"
                address2: " Camp Road"
                city: "Wheeling"
                country: "US"
                state: "Illinois"
                postcode: "60090"
                phone: "708-491-5303"
                useForShipping: false
                saveAsAddress: true
            }
            shipping: {
                companyName: "C. Trades"
                firstName: "Doug"
                lastName: "D Nelson"
                email: "doug@example.com"
                address1: "2252  Charmaine Lane"
                address2: ""
                city: "ROCKLEDGE"
                country: "US"
                state: "Georgia"
                postcode: "30454"
                phone: "806-494-1788"
                saveAsAddress: true
            }
        }) {
            success
            cartTotal
            cartCount
            shippingMethods {
                title
                methods {
                    code
                    label
                    price
                    formattedPrice
                    basePrice
                    formattedBasePrice
                }
            }
            paymentMethods {
                method
                method_title
                description
                sort
            }
            jumpToSection
        }
    }
  ~~~
::: details Response

~~~json
{
  "data": {
        "shippingMethods": {
            "success": "Success: Cart address save successfully.",
            "cartTotal": "$10.00",
            "cartCount": 1,
            "shippingMethods": [
                {
                    "title": "Flat Rate",
                    "methods": {
                        "code": "flatrate_flatrate",
                        "label": "Flat Rate",
                        "price": 20,
                        "formattedPrice": "$20.00",
                        "basePrice": 20,
                        "formattedBasePrice": "$20.00"
                    }
                },
                {
                    "title": "Free Shipping",
                    "methods": {
                        "code": "free_free",
                        "label": "Free Shipping",
                        "price": 0,
                        "formattedPrice": "$0.00",
                        "basePrice": 0,
                        "formattedBasePrice": "$0.00"
                    }
                }
            ],
            "paymentMethods": null,
            "jumpToSection": "shipping"
        }
    }
}
~~~
:::


## Get Payment Methods

Ater You selected the address for checkout and get the list of shipping methods, now you can call the paymentMethods mutation to select the shipping method and to get the list of the payment methods. You can achieve this job by using the `paymentMethods` API call.

**Note** You need to pass the shipping method `code` with the request to select that shipping method.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

- Query
  ~~~query
    mutation paymentMethods {
        paymentMethods(input: {
            shippingMethod: "flatrate_flatrate"
        }) {
            success
            cartTotal
            cartCount
            paymentMethods {
                method
                method_title
                description
                sort
            }
            jumpToSection
        }
    }
  ~~~
::: details Response

~~~json
{
  "data": {
        "paymentMethods": {
            "success": "Success: Shipment has been selected successfully.",
            "cartTotal": "$10.00",
            "cartCount": 1,
            "paymentMethods": [
                {
                    "method": "paypal_smart_button",
                    "method_title": "PayPal Smart Button",
                    "description": "PayPal",
                    "sort": 0
                },
                {
                    "method": "cashondelivery",
                    "method_title": "Cash On Delivery",
                    "description": "Cash On Delivery",
                    "sort": 1
                },
                {
                    "method": "moneytransfer",
                    "method_title": "Money Transfer",
                    "description": "Money Transfer",
                    "sort": 2
                },
                {
                    "method": "paypal_standard",
                    "method_title": "PayPal Standard",
                    "description": "PayPal Standard",
                    "sort": 3
                }
            ],
            "jumpToSection": "payment"
        }
    }
}
~~~
:::


## Save Payment Methods

Ater You selected the shipping methods for checkout and get the list of Payment methods, now you can call the savePayment mutation to select the payment method and to get checkout review. You can achieve this job by using the `savePayment` API call.

**Note** You need to pass the payment `method` with the request to select that payment method.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

- Query
  ~~~query
    mutation savePayment {
        savePayment(input: {
            payment: {
                method: "cashondelivery"
            }
        }) {
            success
            jumpToSection
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
        "savePayment": {
            "success": "Success: Payment method selected successfully.",
            "jumpToSection": "review",
            "cart": {
                "id": "10",
                "customerEmail": "naresh.verma327@webkul.com",
                "customerFirstName": "Naresh",
                "customerLastName": "Verma",
                "shippingMethod": "flatrate_flatrate",
                "couponCode": null,
                "isGift": false,
                "itemsCount": 1,
                "itemsQty": 2,
                "exchangeRate": null,
                "globalCurrencyCode": "USD",
                "baseCurrencyCode": "USD",
                "channelCurrencyCode": "USD",
                "cartCurrencyCode": "USD",
                "grandTotal": 30,
                "baseGrandTotal": 30,
                "subTotal": 10,
                "baseSubTotal": 10,
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
                "createdAt": "2021-05-28 18:39:13",
                "updatedAt": "2021-05-28 18:54:39"
            }
        }
    }
}
~~~
:::

## Apply Coupon

After saving the payment method for checkout you can apply coupon code for checkout process. You can achieve this job by using the `applyCoupon` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

- Query
  ~~~query
    mutation applyCoupon {
        applyCoupon(input: {
            code: "C84U8FTR4TEM"
        }) {
            success
            message
        }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "applyCoupon": {
            "success": false,
            "message": "Coupon code is invalid."
        }
    }
}
~~~
:::

## Place Order

After Following all the above checkout process steps place your order. to perform this action you have to call the `placeOrder` API.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    mutation placeOrder {
        placeOrder {
            success
            redirectUrl
        }
    }
  ~~~

::: details Response
  ~~~json
    {
        "data": {
            "placeOrder": {
                "success": "1",
                "redirectUrl": null
            }
        }
    }
  ~~~
:::
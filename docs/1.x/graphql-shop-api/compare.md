# Compare

In this section, we will see all the APIs which are related to Customer Compare Products.

## Get Compare Products

You can get all the  Compare Products from the Bagisto store. You can achieve this job by using the `Compare Products` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note** You can pass all the input fields to filter the Compare Product data.


- Query
  ~~~query
    query compareProducts {
        compareProducts(input: {
            page: 1
            limit: 10
            # id: 2
            # productFlatId: 49
            # productName: "Music Show"
            # price: 11.30
        }) {
            id
            productFlatId
            customerId
            createdAt
            updatedAt
            productFlat {
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
        }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "compareProducts": [
            {
                "id": "1",
                "productFlatId": "1",
                "customerId": "5",
                "createdAt": "2021-05-28 16:33:03",
                "updatedAt": "2021-05-28 16:33:03",
                "productFlat": {
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
                    "createdAt": "2021-05-26 17:43:12",
                    "updatedAt": "2021-05-26 17:43:12"
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
                    "createdAt": "2021-05-28 12:54:56",
                    "updatedAt": "2021-05-28 12:54:56"
                }
            }
        ]
    }
}
~~~
:::

## Get Compare Product By ID

To get the  specific Compare Product, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query compareProduct {
        compareProduct(id: 1) {
            id
            productFlatId
            customerId
            createdAt
            updatedAt
            productFlat {
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
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "compareProduct": {
            "id": "1",
            "productFlatId": "1",
            "customerId": "5",
            "createdAt": "2021-05-28 16:33:03",
            "updatedAt": "2021-05-28 16:33:03",
            "productFlat": {
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
                "createdAt": "2021-05-26 17:43:12",
                "updatedAt": "2021-05-26 17:43:12"
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
                "createdAt": "2021-05-28 12:54:56",
                "updatedAt": "2021-05-28 12:54:56"
            }
        }
    }
  }
  ~~~
:::



## Add To Compare

You can Add a product to Compare. You can achieve this job by using the `Compare` API call.

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
    mutation addToCompare {
        addToCompare(input: {
            productFlatId: 1
        }) {
            success
            compareProduct {
                id
                productFlatId
                customerId
                createdAt
                updatedAt
                productFlat {
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
            }
        }
    }
  ~~~

::: details Response

~~~json
{
   "data": {
        "addToCompare": {
            "success": "Item successfully added to compare list",
            "compareProduct": {
                "id": "1",
                "productFlatId": "1",
                "customerId": "5",
                "createdAt": "2021-05-28 16:33:03",
                "updatedAt": "2021-05-28 16:33:03",
                "productFlat": {
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
                    "createdAt": "2021-05-26 17:43:12",
                    "updatedAt": "2021-05-26 17:43:12"
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
                    "createdAt": "2021-05-28 12:54:56",
                    "updatedAt": "2021-05-28 12:54:56"
                }
            }
        }
    }
}
~~~
:::

## Remove Product From Compare

To remove a product from the Compare, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    mutation removeFromCompareProduct {
        removeFromCompareProduct(input: {
            productFlatId: 1
        }) {
            status
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "removeFromCompareProduct": {
            "status": true,
            "success": "Item successfully removed from compare list"
        }
    }
  }
  ~~~
:

## Remove All Product From Compare

To remove all product from the Compare, you have to pass related fields with  query request .

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    mutation removeAllCompareProducts {
        removeAllCompareProducts {
            status
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "removeAllCompareProducts": {
            "status": true,
            "success": "All Items successfully removed from compare list"
        }
    }
  }
  ~~~
:::
# Reviews

In this section, we will see all the APIs which are related to Customer Reviews.

## Get Customer Reviews

You can get all the Customer Reviews from the Bagisto store. You can achieve this job by using the `Customer Reviews` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note** You can pass all the input fields to filter the Review data.

- Query
  ~~~query
    query reviewsList {
        reviewsList(input: {
            page: 1
            limit: 10
            # id: 3
            # title: "Why do we use it?"
            # rating: 3
            # customerName: "Anna Gole"
            # productName: "e-book"
            # productId: 9
            # status: "approved"
        }) {
            id
            title
            rating
            comment
            status
            createdAt
            updatedAt
            productId
            customerId
            customerName
            product {
                id
                type
                attributeFamilyId
                sku
                parentId
                createdAt
                updatedAt
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
            }
        }
    }
  ~~~

::: details Response

~~~json
{
    "data": {
        "reviewsList": [
            {
                "id": "1",
                "title": "Where does it come from?",
                "rating": 4,
                "comment": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                "status": true,
                "createdAt": "2021-05-28 15:41:51",
                "updatedAt": "2021-05-28 15:41:51",
                "productId": "1",
                "customerId": "5",
                "customerName": "Naresh Verma",
                "product": {
                    "id": "1",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "test-product",
                    "parentId": null,
                    "createdAt": "2021-05-26 17:43:12",
                    "updatedAt": "2021-05-26 17:43:12",
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
                            "createdAt": "2021-05-26 17:43:12",
                            "updatedAt": "2021-05-26 17:43:12"
                        }
                    ]
                }
            }
        ]
    }
}
~~~
:::

## Get Customer Review By ID

To get the  specific Customer Review, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query reviewDetail {
        reviewDetail(id: 1) {
            id
            title
            rating
            comment
            status
            createdAt
            updatedAt
            productId
            customerId
            customerName
            product {
                id
                type
                attributeFamilyId
                sku
                parentId
                createdAt
                updatedAt
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
            }
        }
    } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "reviewDetail": {
            "id": "1",
            "title": "Where does it come from?",
            "rating": 4,
            "comment": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            "status": true,
            "createdAt": "2021-05-28 15:41:51",
            "updatedAt": "2021-05-28 15:41:51",
            "productId": "1",
            "customerId": "5",
            "customerName": "Naresh Verma",
            "product": {
                "id": "1",
                "type": "simple",
                "attributeFamilyId": 1,
                "sku": "test-product",
                "parentId": null,
                "createdAt": "2021-05-26 17:43:12",
                "updatedAt": "2021-05-26 17:43:12",
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
                        "createdAt": "2021-05-26 17:43:12",
                        "updatedAt": "2021-05-26 17:43:12"
                    }
                ]
            }
        }
    }
  }
  ~~~
:::



## Create a new Review

  To create a Review, you have to perform mutation on Review and paas the related fields in the request.
  API call resource will create a new Review, only if the Customer has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createReview {
        createReview(input: {
            name: "Ruby J So"
            title: "Where does it come from?"
            rating: 4
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            productId: 1
        }) {
            success
            review {
                id
                title
                rating
                comment
                status
                createdAt
                updatedAt
                productId
                customerId
                customerName
                product {
                    id
                    type
                    attributeFamilyId
                    sku
                    parentId
                    createdAt
                    updatedAt
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
                }
            }
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createReview": {
            "success": "Product Review submitted successfully.",
            "review": {
                "id": "1",
                "title": "Where does it come from?",
                "rating": 4,
                "comment": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                "status": true,
                "createdAt": "2021-05-28 15:41:51",
                "updatedAt": "2021-05-28 15:41:51",
                "productId": "1",
                "customerId": "5",
                "customerName": "Naresh Verma",
                "product": {
                    "id": "1",
                    "type": "simple",
                    "attributeFamilyId": 1,
                    "sku": "test-product",
                    "parentId": null,
                    "createdAt": "2021-05-26 17:43:12",
                    "updatedAt": "2021-05-26 17:43:12",
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
                            "createdAt": "2021-05-26 17:43:12",
                            "updatedAt": "2021-05-26 17:43:12"
                        }
                    ]
                }
            }
        }
    }
  }
  ~~~
:::

# Reviews

In this section, we will check all the reviews' API based on customers as well as products. Also we will see how to create a review.

## Get all reviews

You can get all the reviews of the Bagisto store. You can achieve this job by using `reviews` API call resource. There is no need of customer authentication.

- Request

  `GET <host>/api/reviews(?page,limit,pagination)`

- Params

  | Name       | Info                                         | Type   |
  | ---------- | -------------------------------------------- | ------ |
  | limit      | Maximum number of records in each request    | Number |
  | page       | Records for specific page based on the limit | Number |
  | pagination | Will display all the records if set to `0`   | Number |

::: tip

If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

### Examples

#### 1. Get reviews for specific page,

- Request

  `GET https://example.com/api/reviews?page=1`

::: details Response

~~~json
{
    "data": [
        {
            "id": 10,
            "title": "Awesome Product & Service ",
            "rating": "3.0",
            "comment": "Awesome Product & Service ",
            "name": "John Doe",
            "status": "approved",
        },
        {
            "id": 9,
            "title": "Awesome Product Quality",
            "rating": "4.0",
            "comment": "Awesome Product Quality",
            "name": "John Doe",
            "status": "approved",
        },
        {...},
        {...},
    ],
    "links": {
        "first": "https://example.com/api/reviews?page=1",
        "last": "https://example.com/api/reviews?page=2",
        "prev": null,
        "next": null
    },
    "meta": {...}
}
~~~

:::

#### 2. Get all reviews without pagination,

- Request

  `GET https://example.com/api/reviews?pagination=0`

::: details Response

~~~json
{
    "data": [
        {
            "id": 6,
            "title": "Great product & Service!!!",
            "rating": "4.0",
            "comment": "Beautiful bangles. Better than I expected.",
            "name": "John Doe",
            "status": "approved",
        },
        {
            "id": 5,
            "title": "Very good product.. Recommend to all",
            "rating": "5.0",
            "comment": "I have ordered 2 sets. The product i received was good, i loved it.",
            "name": "Peter Doe",
            "status": "approved",
        },
        {
            "id": 4,
            "title": "Awesome Product & Service ",
            "rating": "3.0",
            "comment": "Awesome Product & Service ",
            "name": "John Doe",
            "status": "approved",
        },
        {...},
        {...},
        {...}
    ]
}
~~~

:::

## Get review by id

To get the specific review detail, you have to pass a review id i.e. `id` as a request payload like `reviews/{id}` in API URL.

- Request

  `GET <host>/api/reviews/{id}`

- Params

  | Name | Info         | Type   |
  | ---- | ------------ | ------ |
  | id   | Review's ID. | Number |

### Examples

#### 1. Get specific review by id,

- Request

  `GET https://example.com/api/reviews/2`

- Response

  ~~~json
  {
      "data": {
          "id": 2,
          "title": "Awesome Product & Service ",
          "rating": "3.0",
          "comment": "Awesome Product & Service ",
          "name": "John Doe",
          "status": "approved",
          "product": {...},
          "customer": {...}
      }
  }
  ~~~

## Get reviews by customer's id

This request will fetch all the reviews by customer's id.

- Request

  `GET <host>/api/reviews(?customer_id,limit,page,pagination)`

- Params

  | Name        | Info                                         | Type   |
  | ----------- | -------------------------------------------- | ------ |
  | customer_id | Customer's ID.                               | Number |
  | limit       | Maximum number of records in each request    | Number |
  | page        | Records for specific page based on the limit | Number |
  | pagination  | Will display all the records if set to `0`   | Number |

### Examples

#### 1. Get data of the specific page,

- Request

  `GET https://example.com/api/reviews?customer_id=1&page=1`

  ::: tip
  If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

  `GET https://example.com/api/reviews?customer_id=1`
  :::

::: details Response

~~~json
{
    {
        "data": [
            {
                "id": 4,
                "title": "Good Product",
                "rating": "5.0",
                "comment": "Nice...",
                "name": "John Doe",
                "status": "approved",
                "product": {...},
                "customer": {...},
            },
            {
                "id": 3,
                "title": "Value For Money",
                "rating": "5.0",
                "comment": "Very nice product. Made with good quality.",
                "name": "John Doe",
                "status": "approved",
                "product": {...},
                "customer": {...},
            }
            {
                "id": 2,
                "title": "Great product & Service!!!",
                "rating": "4.0",
                "comment": "Beautiful bangles. Better than I expected.",
                "name": "John Doe",
                "status": "approved",
                "product": {...},
                "customer": {...}
            },
            {
                "id": 1,
                "title": "Awesome Product & Service ",
                "rating": "3.0",
                "comment": "Awesome Product & Service ",
                "name": "John Doe",
                "status": "approved",
                "product": {...},
                "customer": {...}
            },
        ],
        "links": {
            "first": "https://example.com/api/reviews?customer_id=1&page=1",
            "last": "https://example.com/api/reviews?customer_id=1&page=1",
            "prev": null,
            "next": null
        },
        "meta": {...}
    }
}
~~~

:::

#### 2. Get all customer's reviews without pagination

You can also get all customer's reviews of Bagisto Store in a single API call without using pagination. For this you have to pass `pagination=0` in the query parameter with the `reviews?customer_id={id}` resource in the API URL.

- Request

  `GET https://example.com/api/reviews?customer_id=1&pagination=0`

::: details Response

~~~json
{
    "data": [
        {
            "id": 4,
            "title": "Good Product",
            "rating": "5.0",
            "comment": "Nice...",
            "name": "John Doe",
            "status": "approved",
            "product": {...},
            "customer": {...},
        },
        {
            "id": 3,
            "title": "Value For Money",
            "rating": "5.0",
            "comment": "Very nice product. Made with good quality.",
            "name": "John Doe",
            "status": "approved",
            "product": {...},
            "customer": {...},
        }
        {
            "id": 2,
            "title": "Great product & Service!!!",
            "rating": "4.0",
            "comment": "Beautiful bangles. Better than I expected.",
            "name": "John Doe",
            "status": "approved",
            "product": {...},
            "customer": {...}
        },
        {
            "id": 1,
            "title": "Awesome Product & Service ",
            "rating": "3.0",
            "comment": "Awesome Product & Service ",
            "name": "John Doe",
            "status": "approved",
            "product": {...},
            "customer": {...}
        }
    ]
}
~~~

:::

## Get review by product's id

To get all the reviews of a specific product, you have to pass a `product_id` as a query parameter like `reviews?product_id={id}` in API URL. To use this API call customer authentication is not required.

- Request

  `GET <host>/api/reviews(?product_id,limit,page,pagination)`

- Params

  | Name       | Info                                         | Type   |
  | ---------- | -------------------------------------------- | ------ |
  | product_id | Product's ID.                                | Number |
  | limit      | Maximum number of records in each request    | Number |
  | page       | Records for specific page based on the limit | Number |
  | pagination | Will display all the records if set to `0`   | Number |

### Examples

#### 1. Get data of the specific page,

- Request

  `GET https://example.com/api/reviews?product_id=1&page=1`

  ::: tip
  If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

  `GET https://example.com/api/reviews?product_id=1`
  :::

::: details Response

~~~json
{
    "data": [
        {
            "id": 4,
            "title": "Great product & Service!!!",
            "rating": "4.0",
            "comment": "Beautiful bangles. Better than I expected.",
            "name": "John Doe",
            "status": "approved",
            "product": {...},
        },
        {
            "id": 3,
            "title": "Very good product.. Recommend to all",
            "rating": "5.0",
            "comment": "I have ordered 2 sets. The product i received was good, i loved it..",
            "name": "Peter Doe",
            "status": "approved",
            "product": {...},
        }
    ],
    "links": {...},
    "meta": {...}
}
~~~

:::

## Create products's review

To post a review of a specific product, you have to login as a customer.

- Request

  `POST <host>/api/reviews/{product_id}/create`

- Params

  | Name       | Info                           | Type   |
  | ---------- | ------------------------------ | ------ |
  | product_id | Product's ID.                  | Number |
  | rating     | Specify rating of the product. | Number |
  | title      | Title for review.              | String |
  | comment    | Comments for review.           | String |

### Examples

#### 1. Creating review for the product,

- Request

  `POST https://example.com/api/reviews/1/create`

- Params

  | Name       | Value                 |
  | ---------- | --------------------- |
  | rating     | 5                     |
  | title      | Awesome Product       |
  | comment    | Good quality product. |

::: details Response

~~~json
{
    "message": "Your review submitted successfully.",
    "data": {
        "id": 6,
        "title": "Awesome Product",
        "rating": "5.0",
        "comment": "Good quality product.",
        "name": "John Doe",
        "status": "pending",
        "product": {...},
        "customer": {...},
        "created_at": "2020-09-28T14:27:27.000000Z",
        "updated_at": "2020-09-28T14:27:27.000000Z"
    }
}
~~~

:::
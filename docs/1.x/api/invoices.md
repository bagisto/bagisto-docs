# Invoices

In this section, we will check all the invoices' API.

## Get invoices from all orders

You can get all the invoices for the Bagisto store's orders. To get the invoices of the store, the customer must be logged-in to the Bagisto store. You can achieve this job by using the `invoices` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request
  
  `GET <host>/api/invoices(?limit,page,pagination)`

- Params

  | Name          | Info                                         | Type   |
  | ------------- | -------------------------------------------- | ------ |
  | limit         | Maximum number of records in each request    | Number |
  | page          | Records for specific page based on the limit | Number |
  | pagination    | Will display all the records if set to `0`   | Number |

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

### Examples

#### 1. Get invoices with pagination

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/invoices?page=1`

  ::: tip

    If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

    `GET http(s)://example.com/api/invoices`

  :::

::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 8,
              "state": "paid",
              "email_sent": 0,
              "total_qty": 4,
              "sub_total": "190.0000",
              "base_sub_total": "190.0000",
              "grand_total": "230.0000",
              "order_address": {...},
              "transaction_id": null,
              "items": [
                  {...},
                  {...}
              ],
          },
          {...},
          ...
          {...}
      ],
      "links": {
          "first": "https://example.com/api/invoices?page=1",
          "last": "https://example.com/api/invoices?page=1",
          "prev": null,
          "next": null
      },
      "meta": {...}
  }
  ~~~

:::

#### 2. Get all invoices without pagination

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/invoices?pagination=0`

::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 8,
              "state": "paid",
              "email_sent": 0,
              "total_qty": 4,
              "sub_total": "190.0000",
              "base_sub_total": "190.0000",
              "grand_total": "230.0000",
              "order_address": {...},
              "transaction_id": null,
              "items": [
                  {...},
                  {...}
              ],
          },
          {...},
          ...
          {...}
      ]
  }
  ~~~

:::

## Get invoices by order's id

To get the details of a specific order's invoice, you have to pass an `order_id` as a query parameter like `invoices?order_id={id}` in API URL. By using this resource and query parameter, you will get only a single invoice detail regarding the provided `order_id` in response.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/invoices(?order_id,limit,page,pagination)`

- Params

  | Name          | Info                                         | Type   |
  | ------------- | -------------------------------------------- | ------ |
  | order_id      | Order's ID                                   | Number |
  | limit         | Maximum number of records in each request    | Number |
  | page          | Records for specific page based on the limit | Number |
  | pagination    | Will display all the records if set to `0`   | Number |

### Examples

#### 1. Get all invoices by order's id

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/invoices?order_id=3&pagination=0`

::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 1,
              "state": "paid",
              "email_sent": 0,
              "total_qty": 2,
              "sub_total": "60.0000",
              "grand_total": "80.0000",
              "shipping_amount": "20.0000",
              "items": [
                  {...},
                  {...}
              ],
          }
      ]
  }
  ~~~

:::

## Get invoice by id

To get the details of a specific invoice, you have to pass an `invoice_id` as a request payload in API URL.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/invoices/{invoice_id}`

- Params

  | Name          | Info         | Type   |
  | ------------- | ------------ | ------ |
  | invoice_id    | Invoice's ID | Number |
  
### Examples

#### 1. Let's fetch specific invoice

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/invoices/2`

::: details Response

  ~~~json
  {
      "data": {
          "id": 2,
          "state": "paid",
          "email_sent": 0,
          "total_qty": 4,
          "sub_total": "190.0000",
          "grand_total": "230.0000",
          "shipping_amount": "40.0000",
          "tax_amount": "0.0000",
          "discount_amount": "0.0000",
          "order_address": {...},
          "transaction_id": null,
          "items": [
              {...},
              {...}
          ],
      }
  }
  ~~~

:::

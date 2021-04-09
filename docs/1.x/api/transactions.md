# Transactions

In this section, we will see all the APIs which are related to transactions. In Bagisto, we save all the transactions done by the customers using the Paypal Smart Button option.

::: warning

These are all transactions that are saved in the database after the payment done by the customers using the Paypal Smart Button option.

:::

## Get all transactions

You can get all the transaction data from the Bagisto store. To get the data from the store, the customer must be authenticated. You can achieve this job by using the `transactions` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/transactions(?limit,page,pagination)`

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

#### 1. Records for specific page

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/transactions?page=1`

  ::: tip

    If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

    `GET http(s)://example.com/api/transactions`

  :::

::: details Response

~~~json
{
    "data": [
        {
            "id": 1,
            "transaction_id": "47427618SF330010G",
            "status": "COMPLETED",
            "type": "CAPTURE",
            "payment_method": "paypal_smart_button",
            "data": "{\"0\": {\"items\": [{\"sku\": \"12\", \"name\": \"Soft Toy\", \"category\": \"PHYSICAL_GOODS\", \"quantity\": \"1\", \"unit_amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}], \"payee\": {\"merchant_id\": \"85PGX7H6T2ZLW\", \"email_address\": \"prachiwebkul-facilitator@gmail.com\"}, \"amount\": {\"value\": \"150.00\", \"breakdown\": {\"shipping\": {\"value\": \"0.00\", \"currency_code\": \"USD\"}, \"tax_total\": {\"value\": \"0.00\", \"currency_code\": \"USD\"}, \"item_total\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}, \"currency_code\": \"USD\"}, \"payments\": {\"captures\": [{\"id\": \"2U5068420K488272L\", \"links\": [{\"rel\": \"self\", \"href\": \"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L\", \"method\": \"GET\"}, {\"rel\": \"refund\", \"href\": \"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L/refund\", \"method\": \"POST\"}, {\"rel\": \"up\", \"href\": \"https://api.sandbox.paypal.com/v2/checkout/orders/47427618SF330010G\", \"method\": \"GET\"}], \"amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}, \"status\": \"COMPLETED\", \"create_time\": \"2021-04-09T09:28:03Z\", \"update_time\": \"2021-04-09T09:28:03Z\", \"final_capture\": true, \"seller_protection\": {\"status\": \"ELIGIBLE\", \"dispute_categories\": [\"ITEM_NOT_RECEIVED\", \"UNAUTHORIZED_TRANSACTION\"]}, \"seller_receivable_breakdown\": {\"net_amount\": {\"value\": \"143.85\", \"currency_code\": \"USD\"}, \"paypal_fee\": {\"value\": \"6.15\", \"currency_code\": \"USD\"}, \"gross_amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}}]}, \"shipping\": {\"name\": {\"full_name\": \"John Doe\"}, \"address\": {\"postal_code\": \"110045\", \"admin_area_1\": \"DL\", \"admin_area_2\": \"New Delhi\", \"country_code\": \"IN\", \"address_line_1\": \"Dwarka\"}}, \"reference_id\": \"default\", \"soft_descriptor\": \"PAYPAL *TESTFACILIT\"}, \"name\": {\"surname\": \"Doe\", \"given_name\": \"John\"}, \"address\": {\"postal_code\": \"110045\", \"admin_area_1\": \"DL\", \"admin_area_2\": \"New Delhi\", \"country_code\": \"IN\", \"address_line_1\": \"Dwarka\"}, \"payer_id\": \"8KC42JLS656PQ\", \"email_address\": \"sb-eyqoq4881652@personal.example.com\"}",
            "updated_at": "2021-04-09T09:28:08.000000Z",
            "created_at": "2021-04-09T09:28:08.000000Z"
        }
    ],
    "links": {
        "first": "https://example.com/api/transactions?page=1",
        "last": "https://example.com/api/transactions?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://example.com/api/transactions?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "https://example.com/api/transactions",
        "per_page": 10,
        "to": 1,
        "total": 1
    }
}
~~~

:::

#### 2. Get all transactions without pagination

You can also get all the transaction data at once from the Bagisto store without pagination. To get the data, the customer must be authenticated. For this, you have to pass `pagination=0` in the query parameter with the `transactions` resource in the API URL.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/public/api/transactions?pagination=0`

::: details Response

~~~json
{
    "data": [
        {
            "id": 1,
            "transaction_id": "47427618SF330010G",
            "status": "COMPLETED",
            "type": "CAPTURE",
            "payment_method": "paypal_smart_button",
            "data": "{\"0\": {\"items\": [{\"sku\": \"12\", \"name\": \"Soft Toy\", \"category\": \"PHYSICAL_GOODS\", \"quantity\": \"1\", \"unit_amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}], \"payee\": {\"merchant_id\": \"85PGX7H6T2ZLW\", \"email_address\": \"prachiwebkul-facilitator@gmail.com\"}, \"amount\": {\"value\": \"150.00\", \"breakdown\": {\"shipping\": {\"value\": \"0.00\", \"currency_code\": \"USD\"}, \"tax_total\": {\"value\": \"0.00\", \"currency_code\": \"USD\"}, \"item_total\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}, \"currency_code\": \"USD\"}, \"payments\": {\"captures\": [{\"id\": \"2U5068420K488272L\", \"links\": [{\"rel\": \"self\", \"href\": \"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L\", \"method\": \"GET\"}, {\"rel\": \"refund\", \"href\": \"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L/refund\", \"method\": \"POST\"}, {\"rel\": \"up\", \"href\": \"https://api.sandbox.paypal.com/v2/checkout/orders/47427618SF330010G\", \"method\": \"GET\"}], \"amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}, \"status\": \"COMPLETED\", \"create_time\": \"2021-04-09T09:28:03Z\", \"update_time\": \"2021-04-09T09:28:03Z\", \"final_capture\": true, \"seller_protection\": {\"status\": \"ELIGIBLE\", \"dispute_categories\": [\"ITEM_NOT_RECEIVED\", \"UNAUTHORIZED_TRANSACTION\"]}, \"seller_receivable_breakdown\": {\"net_amount\": {\"value\": \"143.85\", \"currency_code\": \"USD\"}, \"paypal_fee\": {\"value\": \"6.15\", \"currency_code\": \"USD\"}, \"gross_amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}}]}, \"shipping\": {\"name\": {\"full_name\": \"John Doe\"}, \"address\": {\"postal_code\": \"110045\", \"admin_area_1\": \"DL\", \"admin_area_2\": \"New Delhi\", \"country_code\": \"IN\", \"address_line_1\": \"Dwarka\"}}, \"reference_id\": \"default\", \"soft_descriptor\": \"PAYPAL *TESTFACILIT\"}, \"name\": {\"surname\": \"Doe\", \"given_name\": \"John\"}, \"address\": {\"postal_code\": \"110045\", \"admin_area_1\": \"DL\", \"admin_area_2\": \"New Delhi\", \"country_code\": \"IN\", \"address_line_1\": \"Dwarka\"}, \"payer_id\": \"8KC42JLS656PQ\", \"email_address\": \"sb-eyqoq4881652@personal.example.com\"}",
            "updated_at": "2021-04-09T09:28:08.000000Z",
            "created_at": "2021-04-09T09:28:08.000000Z"
        }
    ]
}
~~~

:::

## Get transaction by id

To get the specific transaction details, you have to pass an `transaction_id` as a request payload in the API URL.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/transactions/{transaction_id}`

- Params

  | Name           | Info             | Type   |
  | -------------- | ---------------- | ------ |
  | transaction_id | Transaction's ID | Number |

### Examples

Let's fetch specific transaction,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/transactions/1`

::: details Response

~~~json
{
    "id": 1,
    "transaction_id": "47427618SF330010G",
    "status": "COMPLETED",
    "type": "CAPTURE",
    "payment_method": "paypal_smart_button",
    "data": "{\"0\": {\"items\": [{\"sku\": \"12\", \"name\": \"Soft Toy\", \"category\": \"PHYSICAL_GOODS\", \"quantity\": \"1\", \"unit_amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}], \"payee\": {\"merchant_id\": \"85PGX7H6T2ZLW\", \"email_address\": \"prachiwebkul-facilitator@gmail.com\"}, \"amount\": {\"value\": \"150.00\", \"breakdown\": {\"shipping\": {\"value\": \"0.00\", \"currency_code\": \"USD\"}, \"tax_total\": {\"value\": \"0.00\", \"currency_code\": \"USD\"}, \"item_total\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}, \"currency_code\": \"USD\"}, \"payments\": {\"captures\": [{\"id\": \"2U5068420K488272L\", \"links\": [{\"rel\": \"self\", \"href\": \"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L\", \"method\": \"GET\"}, {\"rel\": \"refund\", \"href\": \"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L/refund\", \"method\": \"POST\"}, {\"rel\": \"up\", \"href\": \"https://api.sandbox.paypal.com/v2/checkout/orders/47427618SF330010G\", \"method\": \"GET\"}], \"amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}, \"status\": \"COMPLETED\", \"create_time\": \"2021-04-09T09:28:03Z\", \"update_time\": \"2021-04-09T09:28:03Z\", \"final_capture\": true, \"seller_protection\": {\"status\": \"ELIGIBLE\", \"dispute_categories\": [\"ITEM_NOT_RECEIVED\", \"UNAUTHORIZED_TRANSACTION\"]}, \"seller_receivable_breakdown\": {\"net_amount\": {\"value\": \"143.85\", \"currency_code\": \"USD\"}, \"paypal_fee\": {\"value\": \"6.15\", \"currency_code\": \"USD\"}, \"gross_amount\": {\"value\": \"150.00\", \"currency_code\": \"USD\"}}}]}, \"shipping\": {\"name\": {\"full_name\": \"John Doe\"}, \"address\": {\"postal_code\": \"110045\", \"admin_area_1\": \"DL\", \"admin_area_2\": \"New Delhi\", \"country_code\": \"IN\", \"address_line_1\": \"Dwarka\"}}, \"reference_id\": \"default\", \"soft_descriptor\": \"PAYPAL *TESTFACILIT\"}, \"name\": {\"surname\": \"Doe\", \"given_name\": \"John\"}, \"address\": {\"postal_code\": \"110045\", \"admin_area_1\": \"DL\", \"admin_area_2\": \"New Delhi\", \"country_code\": \"IN\", \"address_line_1\": \"Dwarka\"}, \"payer_id\": \"8KC42JLS656PQ\", \"email_address\": \"sb-eyqoq4881652@personal.example.com\"}",
    "updated_at": "2021-04-09T09:28:08.000000Z",
    "created_at": "2021-04-09T09:28:08.000000Z"
}
~~~

:::

# Attributes

In this section, we are using the attributes' API. An Attribute is a specification or characteristics of a product for example color, size, pattern are an attribute of T-Shirt. You can as create many attributes for a single product. Product Attribute plays a major factor in buying decision of the Customer.

## Get all attributes

This api request will fetch all the attributes.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/attributes(?limit,page,pagination)`

- Params

  | Name          | Info                                         | Type   |
  | ------------- | -------------------------------------------- | ------ |
  | limit         | Maximum number of records in each request    | Number |
  | page          | Records for specific page based on the limit | Number |
  | pagination    | will display all the records if set to `0`   | Number |

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

### Examples

#### 1. Get attributes of the specific page

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/attributes?page=1`

  ::: tip

    If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

    `GET http(s)://example.com/api/attributes`
  
  :::

::: details Response

  ~~~json
  {
      "data": [
          {
            "id":27,
            "code":"product_number",
            "type":"text",
            "name":"Product Number",
            "swatch_type":null,
            "options":[],
            "created_at":"2021-05-24T05:09:12.000000Z",
            "updated_at":"2021-05-24T05:09:12.000000Z"
          },
          {...},
          {...}
      ],
      "links": {
          "first": "https://example.com/api/attributes?page=1",
          "last": "https://example.com/api/attributes?page=3",
          "prev": null,
          "next": "https://example.com/api/attributes?page=2"
      },
      "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 3,
          "links": [...],
          "path": "https://example.com/api/attributes",
          "per_page": 10,
          "to": 10,
          "total": 27
      }
  }
  ~~~

:::

#### 2. Get attributes of the specific page with limit

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/attributes?page=1&limit=5`

::: details Response

  ~~~json
  {
    "data": [
      {
        "id": 27,
        "code": "product_number",
        "type": "text",
        "name": "Product Number",
        "swatch_type": null,
        "options": [],
        "created_at": "2021-05-24T05:09:12.000000Z",
        "updated_at": "2021-05-24T05:09:12.000000Z"
      },
      {
        "id": 26,
        "code": "guest_checkout",
        "type": "boolean",
        "name": "Allow Guest Checkout",
        "swatch_type": null,
        "options": [],
        "created_at": "2021-05-24T05:09:12.000000Z",
        "updated_at": "2021-05-24T05:09:12.000000Z"
      },
      {
        "id": 25,
        "code": "brand",
        "type": "select",
        "name": "Brand",
        "swatch_type": null,
        "options": [],
        "created_at": "2021-05-24T05:09:12.000000Z",
        "updated_at": "2021-05-24T05:09:12.000000Z"
      },
      {
        "id": 24,
        "code": "size",
        "type": "select",
        "name": "Size",
        "swatch_type": null,
        "options": [
          { "id": 6, "admin_name": "S", "label": "S", "swatch_value": null },
          { "id": 7, "admin_name": "M", "label": "M", "swatch_value": null },
          { "id": 8, "admin_name": "L", "label": "L", "swatch_value": null },
          { "id": 9, "admin_name": "XL", "label": "XL", "swatch_value": null }
        ],
        "created_at": "2021-05-24T05:09:12.000000Z",
        "updated_at": "2021-05-24T05:09:12.000000Z"
      },
      {
        "id": 23,
        "code": "color",
        "type": "select",
        "name": "Color",
        "swatch_type": null,
        "options": [
          { "id": 1, "admin_name": "Red", "label": "Red", "swatch_value": null },
          {
            "id": 2,
            "admin_name": "Green",
            "label": "Green",
            "swatch_value": null
          },
          {
            "id": 3,
            "admin_name": "Yellow",
            "label": "Yellow",
            "swatch_value": null
          },
          {
            "id": 4,
            "admin_name": "Black",
            "label": "Black",
            "swatch_value": null
          },
          {
            "id": 5,
            "admin_name": "White",
            "label": "White",
            "swatch_value": null
          }
        ],
        "created_at": "2021-05-24T05:09:12.000000Z",
        "updated_at": "2021-05-24T05:09:12.000000Z"
      }
    ],
    "links": {
      "first": "https://example.com/api/attributes?limit=5&page=1",
      "last": "https://example.com/api/attributes?limit=5&page=6",
      "prev": null,
      "next": "https://example.com/api/attributes?limit=5&page=2"
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 6,
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "https://example.com/api/attributes?limit=5&page=1",
          "label": "1",
          "active": true
        },
        {
          "url": "https://example.com/api/attributes?limit=5&page=2",
          "label": "2",
          "active": false
        },
        {
          "url": "https://example.com/api/attributes?limit=5&page=3",
          "label": "3",
          "active": false
        },
        {
          "url": "https://example.com/api/attributes?limit=5&page=4",
          "label": "4",
          "active": false
        },
        {
          "url": "https://example.com/api/attributes?limit=5&page=5",
          "label": "5",
          "active": false
        },
        {
          "url": "https://example.com/api/attributes?limit=5&page=6",
          "label": "6",
          "active": false
        },
        {
          "url": "https://example.com/api/attributes?limit=5&page=2",
          "label": "Next &raquo;",
          "active": false
        }
      ],
      "path": "https://example.com/api/attributes",
      "per_page": "5",
      "to": 5,
      "total": 27
    }
  }
  ~~~

:::

#### 3. Get all attributes without pagination

If you don't want to use the pagination and want to access all the store's attributes at once, then you have to send a filter parameter named as`pagination` with value `zero`. By doing this you will get all attributes objects at once in the data object and this will not give you link and meta objects.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/attributes?pagination=0`

::: details Response

  ~~~json
  {
    "data": [
      {
        "id": 27,
        "code": "product_number",
        "type": "text",
        "name": "Product Number",
        "swatch_type": null,
        "options": [],
        "created_at": "2021-05-24T05:09:12.000000Z",
        "updated_at": "2021-05-24T05:09:12.000000Z"
      },
      {
        "id": 26,
        "code": "guest_checkout",
        "type": "boolean",
        "name": "Allow Guest Checkout",
        "swatch_type": null,
        "options": [],
        "created_at": "2021-05-24T05:09:12.000000Z",
        "updated_at": "2021-05-24T05:09:12.000000Z"
      },
      {...},
      {...},
      {...},
      {...}
    ]
  }
  ~~~

:::

## Get attribute by id

For fetching any specific attribute, you have to provide the attribute's id as an input parameter.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/attributes/{id}`

- Params

  | Name | Info           | Type   |
  | ---- | -------------- | ------ |
  | id   | Attribute's id | Number |

### Examples

#### 1. Let's try to fetch attribute by id

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/attributes/1`

::: details Response

  ~~~json
  {
    "data": {
      "id": 1,
      "code": "sku",
      "type": "text",
      "name": "SKU",
      "swatch_type": null,
      "options": [],
      "created_at": "2021-05-24T05:09:12.000000Z",
      "updated_at": "2021-05-24T05:09:12.000000Z"
    }
  }
  ~~~

:::

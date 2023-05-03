# Attribute Families

Attribute families are the group of attributes that can be assigned to the product according to the product's needs.

## Get all attribute familes

This api request will fetch all the attribute families.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/families(?limit,page,pagination)`

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

#### 1. Get attribute families of the specific page

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/families?page=1`

  ::: tip

    If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

    `GET http(s)://example.com/api/families`
  
  :::

::: details Response

  ~~~json
  {
    "data": [
      {
        "id": 1,
        "code": "default",
        "name": "Default",
        "status": 0,
        "groups": [...]
        "created_at": null,
        "updated_at": null
      }
    ],
    "links": {
      "first": "https://example.com/api/families?page=1",
      "last": "https://example.com/api/families?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        { "url": null, "label": "&laquo; Previous", "active": false },
        {
          "url": "https://example.com/api/families?page=1",
          "label": "1",
          "active": true
        },
        { "url": null, "label": "Next &raquo;", "active": false }
      ],
      "path": "https://example.com/api/families",
      "per_page": 10,
      "to": 1,
      "total": 1
    }
  }
  ~~~

:::

#### 2. Get attribute families of the specific page with limit

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/families?page=1&limit=5`

::: details Response

  ~~~json
  {
    "data": [
      {
        "id": 1,
        "code": "default",
        "name": "Default",
        "status": 0,
        "groups": [...],
        "created_at": null,
        "updated_at": null
      }
    ],
    "links": {
      "first": "https://example.com/api/families?limit=5&page=1",
      "last": "https://example.com/api/families?limit=5&page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        { "url": null, "label": "&laquo; Previous", "active": false },
        {
          "url": "https://example.com/api/families?limit=5&page=1",
          "label": "1",
          "active": true
        },
        { "url": null, "label": "Next &raquo;", "active": false }
      ],
      "path": "https://example.com/api/families",
      "per_page": "5",
      "to": 1,
      "total": 1
    }
  }
  ~~~

:::

#### 3. Get all attribute families without pagination

If you don't want to use the pagination and want to access all the store's attribute families at once, then you have to send a filter parameter named as`pagination` with value `zero`. By doing this you will get all attributes objects at once in the data object and this will not give you link and meta objects.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/families?pagination=0`

::: details Response

  ~~~json
  {
    "data": [
      {
        "id": 1,
        "code": "default",
        "name": "Default",
        "status": 0,
        "groups": [...],
        "created_at": null,
        "updated_at": null
      }
    ]
  }
  ~~~

:::

## Get attribute family by id

For fetching any specific attribute family, you have to provide the attribute family's id as an input parameter.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/families/{id}`

- Params

  | Name | Info                  | Type   |
  | ---- | --------------------- | ------ |
  | id   | Attribute Family's id | Number |

### Examples

#### 1. Let's try to fetch attribute family by id

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/families/1`

::: details Response

  ~~~json
  {
    "data": {
      "id": 1,
      "code": "default",
      "name": "Default",
      "status": 0,
      "groups": [...],
      "created_at": null,
      "updated_at": null
    }
  }
  ~~~

:::

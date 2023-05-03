# Categories

In this section, we are using the categories' API. We will fetch all the categories based on `id` and `parent_id` as well.

## Get all categories

This api request will fetch all the categories.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/categories(?limit,page,pagination)`

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

#### 1. Get categories of the specific page

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/categories?page=1`

  ::: tip

    If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

    `GET http(s)://example.com/api/categories`
  
  :::

::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 3,
              "code": null,
              "name": "Laptops",
              "slug": "laptops",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "Laptops",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-08T23:41:24.000000Z",
              "updated_at": "2020-09-08T23:41:24.000000Z"
          },
          {...},
          {...}
      ],
      "links": {
          "first": "https://example.com/api/categories?page=1",
          "last": "https://example.com/api/categories?page=1",
          "prev": null,
          "next": null
      },
      "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 1,
          "path": "https://example.com/api/categories",
          "per_page": 10,
          "to": 3,
          "total": 3
      }
  }
  ~~~

:::

#### 2. Get categories of the specific page with limit

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/categories?page=1&limit=10`

::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 10,
              "code": null,
              "name": "Lights",
              "slug": "lights",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-24T11:44:42.000000Z",
              "updated_at": "2020-09-24T11:44:42.000000Z"
          },
          {...},
          {...},
          {...},
          {...}
      ],
      "links": {
          "first": "https://example.com/api/categories?limit=5&page=1",
          "last": "https://example.com/api/categories?limit=5&page=2",
          "prev": null,
          "next": "https://example.com/api/categories?limit=5&page=2"
      },
      "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 2,
          "path": "https://example.com/api/categories",
          "per_page": "5",
          "to": 5,
          "total": 10
      }
  }
  ~~~

:::

#### 3. Get all categories without pagination

If you don't want to use the pagination and want to access all the store's categories at once, then you have to send a filter parameter named as`pagination` with value `zero`. By doing this you will get all categories objects at once in the data object and this will not give you link and meta objects.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/categories?pagination=0`

::: details Response

  ~~~json
  {
    "data": [
          {
              "id": 10,
              "code": null,
              "name": "Lights",
              "slug": "lights",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-24T11:44:42.000000Z",
              "updated_at": "2020-09-24T11:44:42.000000Z"
          },
          {...},
          {...},
          {...},
          {...},
          {...},
          {...},
          {...},
          {...},
          {...}
      ]
  }
  ~~~

:::

## Get category by id

For fetching any specific category, you have to provide the category's id as an input parameter.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/categories/{id}`

- Params

  | Name | Info          | Type   |
  | ---- | ------------- | ------ |
  | id   | Category's id | Number |

### Examples

#### 1. Let's try to fetch category by id

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/categories/6`

::: details Response

  ~~~json
  {
      "data": {
          "id": 6,
          "code": null,
          "name": "Kitchen Appliances",
          "slug": "kitchen-appliances",
          "display_mode": "products_only",
          "description": "",
          "meta_title": "",
          "meta_description": "",
          "meta_keywords": "",
          "status": 1,
          "image_url": null,
          "additional": null,
          "created_at": "2020-09-24T11:42:17.000000Z",
          "updated_at": "2020-09-24T11:42:17.000000Z"
      }
  }
  ~~~

:::

## Get descendant categories of specific category

This api request will fetch all the descendant categories based on the `parent_id`.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/descendant-categories(?parent_id)`

- Params

  | Name      | Info                                 | Type   |
  | --------- | ------------------------------------ | ------ |
  | parent_id | Parent id of the descendant category | Number |

### Examples

#### 1. Get data based on the `parent_id` which have descendant categories

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/descendant-categories?parent_id=2`

::: details Response

  ~~~json
  {
    "data": [
          {
              "id": 3,
              "code": null,
              "name": "Bike Accessories",
              "slug": "bike-accessories",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-22T07:16:32.000000Z",
              "updated_at": "2020-09-24T13:08:21.000000Z"
          },
          {
              "id": 11,
              "code": null,
              "name": "Bike Tyres",
              "slug": "bike-tyres",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-24T13:20:01.000000Z",
              "updated_at": "2020-09-24T13:20:01.000000Z"
          }
      ]
  }
  ~~~

:::

#### 2. Let's try with `parent_id` which have no descendant categories

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/descendant-categories?parent_id=3`

::: details Response

  ~~~json
  {
      "data": []
  }
  ~~~

:::

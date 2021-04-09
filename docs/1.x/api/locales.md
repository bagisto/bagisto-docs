# Locales

In this section, we will see all the APIs which are related to locales.

## Get all locales

You can get all the locales from the Bagisto store. You can achieve this job by using the `locales` API call resource.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/locales(?limit,page,pagination)`

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

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/locales?page=1`

  ::: tip

    If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

    `GET http(s)://example.com/api/locales`

  :::

::: details Response

~~~json
{
    "data": [
        {
            "id": 4,
            "code": "tr",
            "name": "Türkçe",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 3,
            "code": "nl",
            "name": "Dutch",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "code": "fr",
            "name": "French",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 1,
            "code": "en",
            "name": "English",
            "created_at": null,
            "updated_at": null
        }
    ],
    "links": {
        "first": "https://example.com/api/locales?page=1",
        "last": "https://example.com/api/locales?page=1",
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
                "url": "https://example.com/api/locales?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "https://example.com/api/locales",
        "per_page": 10,
        "to": 4,
        "total": 4
    }
}
~~~

:::

#### 2. Get all locales without pagination

You can also get all the locales at once from the Bagisto store without pagination. For this, you have to pass `pagination=0` in the query parameter with the `locales` resource in the API URL.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/public/api/locales?pagination=0`

::: details Response

~~~json
{
    "data": [
        {
            "id": 4,
            "code": "tr",
            "name": "Türkçe",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 3,
            "code": "nl",
            "name": "Dutch",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "code": "fr",
            "name": "French",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 1,
            "code": "en",
            "name": "English",
            "created_at": null,
            "updated_at": null
        }
    ]
}
~~~

:::

## Get locale by id

To get the specific locale details, you have to pass an `locale_id` as a request payload in the API URL.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/locales/{locale_id}`

- Params

  | Name      | Info        | Type   |
  | --------- | ----------- | ------ |
  | locale_id | Locale's ID | Number |

### Examples

Let's fetch specific locale,

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET http(s)://example.com/api/locales/1`

::: details Response

~~~json
{
    "data": {
        "id": 1,
        "code": "en",
        "name": "English",
        "created_at": null,
        "updated_at": null
    }
}
~~~

:::

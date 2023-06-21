# Wishlists

In this section, we will see how wishlists' API works.

## Get all wishlists

You can also get all the wishlists of store's customers. To get the wishlists, customer must be logged-in to the Bagisto store.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/wishlist(?limit,page,pagination)`

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

#### 1. Get wishlists for specific page

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist?page=1`

#### 2. Get wishlists for specific page with limit

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist?limit=2&page=1`

::: details Response (Example 1 & 2)

![bagisto_wishlist_page](../../assets/1.x/images/api/bagisto_wishlist_page.jpg)

:::

#### 3. Get all wishlists without pagination

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist?pagination=0`

::: details Response

```json
{
    "data": [
        {
            "id": 9,
            "product": {
                "id": 5,
                "type": "simple",
                "name": "Home Decor Bottles",
                "url_key": "home-decor-bottles",
                "price": 10,
                "formated_price": "$10.00",
                "short_description": "<p>Home Decor Bottles</p>",
                "description": "<p>Home Decor Bottles</p>",
                "sku": "bottles",
            }
        },
        {
            "id": 8,
            "product": {...}
        },
        {
            "id": 7,
            "product": {...}
        }
    ]
}
```

:::

## Get wishlists by customer's id

To get all wishlists of a specific customer, you have to pass a `customer_id` as a query parameter in API url.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/wishlist(?customer_id,limit,page,pagination)`

- Params

  | Name        | Info                                         | Type   |
  | ----------- | -------------------------------------------- | ------ |
  | customer_id | Customer's ID                                | Number |
  | limit       | Maximum number of records in each request    | Number |
  | page        | Records for specific page based on the limit | Number |
  | pagination  | Will display all the records if set to `0`   | Number |

### Examples

#### 1. If you want all the wishlists by `customer_id`

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist?customer_id=1&pagination=0`

::: details Response:

```json
{
    "data": [
        {
            "id": 7,
            "product": {...},
        },
        {...},
        {...},
        {...},
        ...
        {...}
    ]
}
```

:::

#### 2. If you want wishlists for specific page by `customer_id`

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist?customer_id=1&page=1`

::: details Response:

```json
{
    "data": [
        {
            "id": 7,
            "product": {...},
        },
        {...},
        {...},
        {...},
        ...
        {...}
    ],
    "links": {
        "first": "https://example.com/api/wishlist?customer_id=1&page=1",
        "last": "https://example.com/api/wishlist?customer_id=1&page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "https://example.com/api/wishlist",
        "per_page": 10,
        "to": 2,
        "total": 9
    }
}
```

:::

## Add product to wishlist

To add a product to customer's wishlist, you have to pass a `product_id` as a request payload like `wishlist/add/{product_id}` in API URL.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist/add/{product_id}`

- Params

  | Name       | Info       | Type   |
  | ---------- | ---------- | ------ |
  | product_id | Product ID | Number |

### Examples

Let's add one product to wishlist,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist/add/11`

::: details Response

```json
{
  "data": {
    "id": 11,
    "product": {
      "id": 1,
      "type": "simple",
      "name": "Leather Shoes",
      "url_key": "leather-shoes",
      "price": 50,
      "formated_price": "$50.00",
      "short_description": "<p>Leather Shoes</p>",
      "description": "<p>Leather Shoes</p>",
      "sku": "men-leather-shoes"
    }
  },
  "message": "Item Successfully Added To Wishlist"
}
```

:::

## Remove product from wishlist

For removing the product from the wishlist, you need to hit the same add API again. Just like a toggle. It will remove if the wishlist is already added.

### Examples

Hitting the same add API again,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/wishlist/add/11`

::: details Response

```json
{
  "data": null,
  "message": "Item removed from wishlist successfully."
}
```

:::

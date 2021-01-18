# Addresses

In this section, we will use all the addresses' API. We will check the creation of address, fetching of addresses, and updation of address.

## Create a new address

To add an address, you have to use the `addresses/create` endpoint url and have to pass the address fields in the request payload. This `addresses/create` API call resource will create a new address of the customer, only if that customer has logged in the store.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `POST <host>/api/addresses/create`

- Params

  | Name         | Info         | Type   |
  | ------------ | ------------ | ------ |
  | address1     | Address      | Array  |
  | city         | City         | String |
  | country      | Country      | String |
  | country_name | Country Name | String |
  | phone        | Phone        | String |
  | postcode     | Post Code    | String |
  | state        | State        | String |

### Examples

Let's take an example of creating an address,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `POST http(s)://example.com/api/addresses/create`

- Params

  | Name         | Value           |
  | ------------ | --------------- |
  | address1     | ['Clock Tower'] |
  | city         | Dehradun        |
  | country      | IN              |
  | country_name | India           |
  | phone        | 0123456798      |
  | postcode     | 248001          |
  | state        | UT              |

  ~~~json
  {
      "address1": [
          "Clock Tower"
      ],
      "city": "Dehradun",
      "country": "IN",
      "country_name": "India",
      "phone": "0123456798",
      "postcode": "248001",
      "state": "UT"
  }
  ~~~

::: details Response

  ~~~json
  {
      "message":"Address has been created successfully.",
      "data": {...} // This contains the data you send to the api.
  }
  ~~~

:::

## Get all addresses

To get all the address of a customer, that customer must be logged in to the store. You can achieve this job by using `addresses` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/addresses`

### Examples

Let's take an example,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/addresses`

::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 3,
              "address1": [...],
              "country": "IN",
              "country_name": "India",
              "state": "UT",
              "city": "Dehradun",
              "postcode": 248001,
              "phone": "01345679",
          },
          {
              "id": 2,
              "address1": [...],
              "country": "IN",
              "country_name": "India",
              "state": "UP",
              "city": "Noida",
              "postcode": 201301,
              "phone": "012345679",
          },
      ]
  }
  ~~~

:::

## Get address by id

To get the customer's specific address, you have to pass an `address_id` as a request payload like `addresses/{address_id}` in API URL. By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/addresses/{address_id}`

- Params

  | Name       | Info    | Type   |
  | ---------- | ------- | ------ |
  | address_id | Address | Number |

### Examples

Let's take an example,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/addresses/1`

::: details Response

  ~~~json
  {
      "data": {
          "id": 1,
          "address1": [
              "Block H-ARP Park, Sector 63 "
          ],
          "country": "IN",
          "country_name": "India",
          "state": "UP",
          "city": "Noida",
          "postcode": 201301,
          "phone": "0132456789",
          "created_at": {
              "date": "",
              "timezone_type": 3,
              "timezone": "Asia/Kolkata"
          },
          "updated_at": {
              "date": "",
              "timezone_type": 3,
              "timezone": "Asia/Kolkata"
          },
      }
  }
  ~~~

:::

## Update address

To update the customer's specific address, you have to pass an `address_id` as a request payload like `addresses/{address_id}` in API URL.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `PUT <host>/api/addresses/1`

- Params

  | Name         | Info         | Type   |
  | ------------ | ------------ | ------ |
  | address1     | Address      | Array  |
  | city         | City         | String |
  | country      | Country      | String |
  | country_name | Country Name | String |
  | phone        | Phone        | String |
  | postcode     | Post Code    | String |
  | state        | State        | String |

### Examples

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `PUT http(s)://example.com/api/addresses/1`

- Params

  ~~~json
  {
      "id": 1,
      "address1": [
          "Clock Tower"
      ],
      "city": "New Delhi",
      "country": "IN",
      "country_name": "India",
      "phone": "9876543210",
      "postcode": "248001",
      "state": "DL"
  }
  ~~~

::: details Response

  ~~~json
  {
      "message":"Your address has been updated successfully.",
      "data": {...} // Address' detail.
  }
  ~~~

:::

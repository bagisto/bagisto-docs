# Customers

In this section, we will use all APIs which relates to customer like registration, authentication, details and reset password.

Let's start with registration first,

## Registration

You can create/register a new customer in the Bagisto store. To achieve this task, you can use the `customer/register` API call resource.

- Headers

  | Key                   | Value            |
  | --------------------- | ---------------- |
  | Accept                | application/json |

- Request

  `POST <host>/api/customer/register`

- Params

  | Name                  | Info             | Type   |
  | --------------------- | ---------------- | ------ |
  | email                 | Email            | String |
  | first_name            | First Name       | String |
  | last_name             | Last Name        | String |
  | password              | Password         | String |
  | password_confirmation | Confirm Password | String |

### Examples

#### 1. Let's register/create a new customer

- Headers

  | Key                   | Value            |
  | --------------------- | ---------------- |
  | Accept                | application/json |

- Request

  `POST http(s)://example.com/api/customer/register`

- Params

  | Name                  | Value                 |
  | --------------------- | --------------------- |
  | email                 | john@example.com      |
  | first_name            | John                  |
  | last_name             | Doe                   |
  | password              | john123               |
  | password_confirmation | john123               |

::: details Response

  ~~~json
  {
      message: "Your account has been created successfully."
  }
  ~~~

:::

#### 2. If customer is already in the Bagisto store with the same email address

Now, hit the above request one more time.

::: details Response

  ~~~json
  {
      message: "The given data was invalid.",
      errors: {
          email: ["The email has already been taken."]
      }
  }
  ~~~

:::

## Authentication

To authenticate at the Bagisto store, the customer needs a valid email address and password.

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request
  
  Now here is your choice, whether you want to use **JWT API guard** or normal **customer guard**.

  ::: tip

    If you want to know more about the JWT Authentication, please check here [JWT Authentication](./getting-started-with-the-api#_1-jwt-authentication).

  :::

  For JWT API guard, you need to pass the token key in the query string.

  `POST <host>/api/customer/login?token=true`

  For normal customer guard,

  `POST <host>/api/customer/login`

- Params

  | Name          | Info                  | Type   |
  | ------------- | --------------------- | ------ |
  | email         | Email for customer    | String |
  | password      | Password for customer | String |

### Both Examples

#### 1. Let's try the customer authentication with JWT API guard

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request

  `POST http(s)://example.com/api/customer/login?token=true`

- Params

  | Key      | Value            |
  | -------- | ---------------- |
  | email    | john@example.com |
  | password | john123          |

::: details Response

  Once you send the request, you will get some random token string that will be used to access the API data.

  ~~~json
  {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2RldmVsb3BtZW50XC9iYWdpc3RvLW1hc3RlclwvcHVibGljXC9hcGlcL2N1c3RvbWVyXC9sb2dpbiIsImlhdCI6MTYxMDY5Njk2MSwiZXhwIjoxNjEwNzAwNTYxLCJuYmYiOjE2MTA2OTY5NjEsImp0aSI6IkpuMU9aUWoxd1BVaXlLaHQiLCJzdWIiOjEsInBydiI6IjhmY2EwODhhYmFlMmY5YThmODRhNWYwYmY2YTY1MjQ0OTA1NWJlMDAifQ.6mKgyRgMHxi_W6gf2cgb7Rdcut73L1YEBauYZ8soKSU",
      "message": "Logged in successfully.",
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::

#### 2. Let's try without token

By removing the token key from request will activate the **customer guard**.

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request

  `POST http(s)://example.com/api/customer/login`

- Params

  | Key      | Value            |
  | -------- | ---------------- |
  | email    | john@example.com |
  | password | john123          |

::: details Response

  Once you send the request, then you will get data without token because now the **customer guard** is active.

  ~~~json
  {
      "token": true,
      "message": "Logged in successfully.",
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::

## Details

You can get the customer's details only for the logged-in customer. To retrieve the customer's information you can use the `customer/get` resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/customer/get`

### Examples

Let's fetch the customer data,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/customer/get`

::: details Response

  ~~~json
  {
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::

## Details by id

You can also get the customer information by using `customer_id` as a request payload. To achieve this, you can use the `customers/{id}` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/customers/{id}`

- Params

  | Name | Info        | Type   |
  | ---- | ----------- | ------ |
  | id   | Customer ID | Number |

::: warning

  This request will return the current logged in customer's details.

:::

### Examples

Let's fetch the customer data,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/customers/1`

::: details Response

  ~~~json
  {
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::

## Profile details

To update the current logged in customer's account information, you need to use the `customer/profile` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `PUT <host>/api/customer/profile`

- Params

  | Name          | Info          | Type   |
  | ------------- | ------------- | ------ |
  | first_name    | First Name    | String |
  | last_name     | Last Name     | String |
  | gender        | Gender        | String |
  | date_of_birth | Date Of Birth | Date   |
  | email         | E-Mail        | String |
  | password      | Password      | String |

### Examples

#### 1. Updating current logged in user

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `PUT http(s)://example.com/api/customer/profile`

- Params

  | Name       | Value            |
  | ---------- | ---------------- |
  | first_name | John             |
  | last_name  | Doe              |
  | name       | John Doe         |
  | email      | john@example.com |

::: details Response

  ~~~json
  {
      "message": "Your account has been updated successfully.",
      "data": {...}
  }
  ~~~

:::

## Logout

You can logout the customer from the Bagisto store with the help of `customer/logout` resources. No need to provide any request payload in the API call.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/customer/logout`

### Examples

- Request

  `GET http(s)://example.com/api/customer/logout`

::: details Response

  ~~~json
  {
      "message": "Logged out successfully!"
  }
  ~~~

:::

## Reset password

You can also use the API to reset the customer's password by providing the valid customer's email address. In this API request, you have to use the `customer/forgot-password` resource with `email` as a request payload. An email will be sent on the provided email address, only if the same email address exists in the Bagisto store.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |

- Request

  `POST <host>/api/customer/forgot-password`

- Params

  | Name          | Info  | Type   |
  | ------------- | ----- | ------ |
  | email         | Email | String |

### Examples

#### 1. Let's try the customer forgot password request

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |

- Request

  `POST http(s)://example.com/api/customer/forgot-password`

- Params

  | Name  | Value            |
  | ----- | ---------------- |
  | email | john@example.com |

::: details Response

  ~~~json
  {
      "message": "We have e-mailed your password reset link!"
  }
  ~~~

:::

#### 2. In case you provide an invalid or unregistered email address, then no email will be sent to the provided email address

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |

- Request

  `GET http(s)://example.com/api/customer/forgot-password`

- Params

  | Name  | Value             |
  | ----- | ----------------- |
  | email | peter@example.com |

::: details Response

  ~~~json
  {
      "error": "We can't find a user with that e-mail address."
  }
  ~~~

:::

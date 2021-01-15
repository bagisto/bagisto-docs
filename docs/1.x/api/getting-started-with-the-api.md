# Getting started with Bagisto Web APIs

Let's get started with authentication and some endpoint examples.

Because most of the time you need authentication access to private APIs like a customer, order, invoice, etc.

## Overview

If you seeing the whole [Bagisto](https://bagisto.com) web API, we are using the [**JWT**](https://jwt.io/) package for token-based authentication. However, we left this to the developer whether he wants to authenticate via. **JWT API guard** or normal **customer guard**.

When you going through the documentation, you will see one of the examples i.e. with or without tokens. Let discuss both of them.

## Authentication

As you saw in the overview, authentication can be done on token based or without token based. In this section we are just giving the basic sample of the authentication level. Let's discuss both,

::: warning

  You are required to send a valid **User Agent** header in your request.

:::

### 1. **JWT** Authentication

To activate the **JWT** authentication, you just need to pass one extra key-value pair in your request i.e. `token=true`.

  | Key   | Value |
  | ----- | ----- |
  | token | true  |

This will tell [Bagisto](https://bagisto.com) app to use **JWT API guard**. If you not passing then it will ignore that and the normal **customer guard** will be activated. This is the reason why most of the time request failed.

So, let's try to authenticate the user by using **JWT**. Please send valid **User Agent** header in your request whether you are using postman, curl or some other clients.

::: tip

  Here we are showing just a sample of API for the usage of **JWT** token. If you are familiar with all these things you can start with the [Customer](./customers) API section.

:::

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request

  `GET http(s)://example.com/api/customer/login?token=true`

- Params

  | Key      | Value            |
  | -------- | ---------------- |
  | email    | john@example.com |
  | password | john123          |

- Response

  - Once you send the request, you will get some random token string that will be used to access the API data.

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

### 2. Normal Authentication via. Customer Guard

By removing the token key from request will activate the **customer guard**.

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request

  `GET http(s)://example.com/api/customer/login`

- Params

  | Key      | Value            |
  | -------- | ---------------- |
  | email    | john@example.com |
  | password | john123          |

- Response

  - Once you send the request, then you will get data without token because now the **customer guard** is active.

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

## Accessing Data

Now, we have authentication. Let's try to access current customer data by using **JWT**. We are using customer API,

::: tip

  Here we are showing just a sample of API for the usage of **JWT** token. If you are familiar with all these things you can start with the [Customer](./customers) API section.

:::

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ::: tip

    As you check the **JWT** authentication we got some token string, we just need to put that token in the request header. For e.g.,

    ~~~request-header
    Accept:application/json
    Authorization:Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
    ~~~

  :::

- Request

  `GET http(s)://example.com/api/customer/get?token=true`

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

If you don't want to use **JWT**, then just remove the token key from the query string.

::: warning

  You have to re-login again to access without the **JWT** token because this time it will hit the **customer guard**.

:::

## Conclusion

If you reach here, then we assume that you have some idea and familiarity with the [Bagisto](https://bagisto.com) API's guard.

Now, let's explore the [Bagisto](https://bagisto.com) API more briefly.

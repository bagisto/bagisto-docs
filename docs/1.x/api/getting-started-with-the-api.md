# Authentication

[[toc]]

## Introduction

By default the [Bagisto](https://bagisto.com) API makes use of the [JWT package](https://jwt.io/) for token-based authentication.  
You can however choose either if you want to authenticate via. **JWT API guard** or with the normal **customer guard**.  
When you are going through the api documentation, you will see one of the examples i.e. with or without tokens. Let discuss both of them.

## Auth Guards

::: warning
You are required to send a valid **User Agent** header in your request.
:::

### JWT Authentication

To activate the **JWT** authentication, you just need to pass one extra key-value pair in your request i.e. `token=true`.

  | Key   | Value |
  | ----- | ----- |
  | token | true  |

This will tell the Bagisto api to use the **JWT API guard**. If you are not passing this, the normal **customer guard** will be activated.  

So, let's try to authenticate the user by using **JWT**. Please send valid **User Agent** header in your request whether you are using postman, curl or some other clients.

::: tip Reminder

  Here we are showing just a sample of API for the usage of **JWT** token. If you are familiar with all these things you can start with the [Customer](./customers) API section.

:::

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

### Customer Guard

By removing the token key from your request the **customer guard** will be activated.

#### Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request

  `POST http(s)://example.com/api/customer/login`

#### Params

  | Key      | Value            |
  | -------- | ---------------- |
  | email    | john@example.com |
  | password | john123          |

#### Response

Once you send the request, you will get data without any token because now the **customer guard** is active.

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

Once you are authenticated, try to access the current customer data by using **JWT**, use the customer API endpoint for this,

::: tip

Here we are just showing a example of how to collect data from the API with the usage of a **JWT** token.
If you are familiar with all these things you can start with the [Customer](./customers) API section.

:::

#### Headers

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

#### Request

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

  You have to re-login again to access without the **JWT** token because currently it will use the **customer guard**.

:::

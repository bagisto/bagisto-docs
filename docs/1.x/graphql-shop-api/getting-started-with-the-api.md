# Authentication

[[toc]]

## Introduction

By default the [Bagisto](https://bagisto.com) GraphQL API makes use of the [JWT package](https://jwt.io/) for token-based authentication.  

So, let's try to authenticate the Customer by using **JWT**. Please send valid **User Agent** header in your request whether you are using postman, curl or some other clients.

To check the customer's API (front APIs), you have to put all the shop schemas at the end in the schema file (i.e. packages/Webkul/GraphQLAPI/graphql/schema.graphql).

**Note** Put all shop schemas #import /shop/*/*.graphql after #import /promotion/*.graphql this line.

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

- Headers

  | Key           | Value                 |
  | ------        | ----------------      |
  | Accept        | application/json      |



- Query

  ~~~query
  mutation customerLogin {
      customerLogin(input: {
          email: "test@webkul.com"
        password: "admin123"
      }) {
          status
          success
          accessToken
          tokenType
          expiresIn
          customer {
              id
              firstName
              lastName
              name
              gender
              dateOfBirth
              email
              phone
              password
              apiToken
              customerGroupId
              subscribedToNewsLetter
              isVerified
              token
              notes
              status
              createdAt
              updatedAt
          }
      }
  }
  ~~~

- Response

  - Once you send the request, you will get some random token string that will be used to access the API data.

  ~~~json
    {
        "data": {
          "customerLogin": {
              "status": true,
              "success": "Success: Customer login successfully.",
              "accessToken": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2dyYXBocWxcL3B1YmxpY1wvZ3JhcGhxbCIsImlhdCI6MTYyMjE4NDAyNywiZXhwIjoxNjUzNzIwMDI3LCJuYmYiOjE2MjIxODQwMjcsImp0aSI6ImRTa3JpSjZqU2d1QTBQVG4iLCJzdWIiOjMsInBydiI6IjhmY2EwODhhYmFlMmY5YThmODRhNWYwYmY2YTY1MjQ0OTA1NWJlMDAifQ.YXUdp9S1cDCGUkLdv7NijMgx0bcX5KbokcjSIMwEE0U",
              "tokenType": "Bearer",
              "expiresIn": 31536000,
              "customer": {
                  "id": "3",
                  "firstName": "test",
                  "lastName": "test",
                  "name": "Test Test",
                  "gender": null,
                  "dateOfBirth": null,
                  "email": "test@webkul.com",
                  "phone": null,
                  "password": "$2y$10$QSz44sL1TcKwNYBHcX6go.OIMjxN1eakuJnHYrB.Rj0jyM172yfXW",
                  "apiToken": "wWFsZbvoXPdL0NdWxK4cR23SAd6UJnVDDqsMrBgYmUeJvoCzEJDl4b9rn7eR9ckFC5mIaZmVg9vmXamd",
                  "customerGroupId": 2,
                  "subscribedToNewsLetter": false,
                  "isVerified": true,
                  "token": "4274363173b91b41790653255c037bbd",
                  "notes": null,
                  "status": true,
                  "createdAt": "2021-05-28 11:59:21",
                  "updatedAt": "2021-05-28 11:59:21"
              }
          }
      }
    }
  ~~~

## Get Customer Details

Once you are authenticated, try to access the current User data by using **JWT**, use the Single GraphQL API endpoint for this,

::: tip

Here we are just showing a example of how to collect data from the GraphQL API with the usage of a **JWT** token.

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

- Query
  ~~~query
    query accountInfo {
        accountInfo {
            id
            firstName
            lastName
            name
            gender
            dateOfBirth
            email
            phone
            password
            apiToken
            customerGroupId
            subscribedToNewsLetter
            isVerified
            token
            notes
            status
            createdAt
            updatedAt
        }
    }
  ~~~

::: details Response

~~~json
{
    "data": {
        "accountInfo": {
            "id": "3",
            "firstName": "test",
            "lastName": "test",
            "name": "Test Test",
            "gender": null,
            "dateOfBirth": null,
            "email": "test@webkul.com",
            "phone": null,
            "password": "$2y$10$QSz44sL1TcKwNYBHcX6go.OIMjxN1eakuJnHYrB.Rj0jyM172yfXW",
            "apiToken": "wWFsZbvoXPdL0NdWxK4cR23SAd6UJnVDDqsMrBgYmUeJvoCzEJDl4b9rn7eR9ckFC5mIaZmVg9vmXamd",
            "customerGroupId": 2,
            "subscribedToNewsLetter": false,
            "isVerified": true,
            "token": "4274363173b91b41790653255c037bbd",
            "notes": null,
            "status": true,
            "createdAt": "2021-05-28 11:59:21",
            "updatedAt": "2021-05-28 11:59:21"
        }
    }
}
~~~

:::


## Register a new Customer

  To Register a new Customer, you have to perform mutation on customer and paas related fields in the request.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation customerRegister {
        customerRegister(input: {
            firstName: "John"
            lastName: "Doe"
            email: "john@example.com"
            password: "demo12345"
            passwordConfirmation: "demo12345"
        }) {
            status
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "customerRegister": {
            "status": true,
            "success": "Account created successfully."
        }
    }
  }
  ~~~
:::

## Update a Customer

  To update a Customer, you have to perform mutation on Customer by passing related fields of logged in customer in the request query.
  API call resource will update a Customer, only if the customer has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
      mutation updateAccount {
          updateAccount(input: {
              firstName: "John"
              lastName: "Doe"
              email: "john@example.com"
              gender: "Male"
              dateOfBirth: "2019-10-30"
              phone: "345789876"
              oldpassword: "demo12345"
              password: "demo123456"
              passwordConfirmation: "demo123456"
          }) {
              id
              firstName
              lastName
              name
              gender
              dateOfBirth
              email
              phone
              password
              apiToken
              customerGroupId
              subscribedToNewsLetter
              isVerified
              token
              notes
              status
              createdAt
              updatedAt
          }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateAccount": {
            "id": "4",
            "firstName": "John",
            "lastName": "Doe",
            "name": "John Doe",
            "gender": "Male",
            "dateOfBirth": "2019-10-30",
            "email": "john@example.com",
            "phone": "345789876",
            "password": "$2y$10$u8P14NRoevQmJM0VVO.7hOKX98hrtArPd9WawkL7ljHywJtYMS/QS",
            "apiToken": "7LaahSQCR9tQYVy894pZ7C79C9uIksxGbks0svVG5fzqjP023532jIWoMR2oW0McnQdpIBQttHbn2J2d",
            "customerGroupId": 2,
            "subscribedToNewsLetter": false,
            "isVerified": true,
            "token": "e043dc2f63147521a14bb9109f779247",
            "notes": null,
            "status": true,
            "createdAt": "2021-05-28 12:18:22",
            "updatedAt": "2021-05-28 12:24:51"
        }
    }
  }
  ~~~
:::

## Forgot Password

If you Forgot Password, you have to perform mutation on Customer by passing the registered email of that Customer. and a mail will be received on that email id.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation 
    mutation forgotPassword {
        forgotPassword(input: {
            email: "john@example.com"
        }) {
            status
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "forgotPassword": {
            "status": true,
            "success": "We have e-mailed your reset password link."
        }
    }
  }
  ~~~
:::

## Delete a Customer

To delete a Customer, you have to perform mutation on Customer by passing the Password of that Customer.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
      mutation deleteAccount {
          deleteAccount(input: {
              password: "demo123456"
          }) {
              status
              success
          }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteAccount": {
            "status": true,
            "success": "Customer deleted successfully."
        }
    }
  }
  ~~~
:::

## Logout

You can logout the Customer by performing the logout mutaion on customer.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

  - Request Mutation
  ~~~Mutation
      mutation customerLogout {
          customerLogout {
              status
              success
          }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "customerLogout": {
            "status": true,
            "success": "Success: Customer logout successfully."
        }
    }
  }
  ~~~
:::

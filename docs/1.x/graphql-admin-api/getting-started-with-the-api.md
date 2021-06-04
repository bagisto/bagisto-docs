# Authentication

[[toc]]

## Introduction

By default the [Bagisto](https://bagisto.com) GraphQL API makes use of the [JWT package](https://jwt.io/) for token-based authentication.  

So, let's try to authenticate the Admin by using **JWT**. Please send valid **User Agent** header in your request whether you are using postman, curl or some other clients.

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

- Headers

  | Key           | Value                 |
  | ------        | ----------------      |
  | Accept        | application/json      |



- Query

  ~~~query
    mutation {
      userLogin(input : {
        email: "test@webkul.com"  
        password: "admin123"
      }) 
      {
        status
        success
        accessToken
        tokenType
        expiresIn
        user {
            id
            name
            email
            password
            apiToken
            roleId
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
        "userLogin": {
            "status": true,
            "success": "Success: User login successfuly.",
            "accessToken": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9iYWdzYWFzLmNvbVwvZ3JhcGhxbCIsImlhdCI6MTYyMDA0NTYyMywiZXhwIjoxNjIwMDQ5MjIzLCJuYmYiOjE2MjAwNDU2MjMsImp0aSI6Ikc5M09uck53WVdxNVlPSHUiLCJzdWIiOjksInBydiI6ImQ5MDA0NmUwMDg0MmQ1ZDMzMjA2OTMyNmVmMzhlMzIyMTJmMDhlMTQifQ.uenKsESWx3qhdkB4jcTofmG9EegNhwvAN6KcMZG1GBs",
            "tokenType": "Bearer",
            "expiresIn": 3600,
            "user": {
                "id": "9",
                "name": "admin test",
                "email": "test@webkul.com",
                "password": "$2y$10$Iasq3fDPQ14E4/ZCF.l6qOYkq0ODtdIrAiq3i7McMsBDBug7EyqgS",
                "apiToken": null,
                "roleId": 9,
                "status": true,
                "createdAt": "2021-02-23 13:47:20",
                "updatedAt": "2021-02-23 13:47:20"
            }
         }
       }
    }
    ~~~

## Get Users

Once you are authenticated, try to access the current Admin data by using **JWT**, use the Single GraphQL API endpoint for this,

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
    query users{
      users(page:1){
          paginatorInfo {
              count
              currentPage
                lastPage
                total  
          }
          data{
              id
              name
              email
              password
              apiToken
              roleId
              status
              role{id}
              createdAt
              updatedAt
              success
          }
      }
    }
  ~~~

::: details Response

~~~json
{
    "data": {
        "users": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "Example",
                    "email": "admin@example.com",
                    "password": "$2y$10$2wE6y44/8NLpL3oiEXb4F.YfcmBYI2SsDUn43eNKxKj7cNOffi5hu",
                    "apiToken": "VsB2TagdY8Ea2ZdCyr3MTliyGc5fDHNrWraMnjQt5MlYa0o6GdhU5sKZpYl73gHYXgWeljbjddLw22t9",
                    "roleId": 1,
                    "status": true,
                    "role": {
                        "id": "1"
                    },
                    "createdAt": "2021-05-05 15:36:49",
                    "updatedAt": "2021-05-05 15:36:49",
                    "success": null
                }
            ]
        }
    }
}
~~~

:::

## Get User By ID

To get the  specific user, you have to pass an `id` on query .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Query
  ~~~Query
  query users{
    user(id:1){
        id
        name
        email
        password
        apiToken
        roleId
        status
        role{id}
        createdAt
        updatedAt
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
          "user": {
              "id": "1",
              "name": "Example",
              "email": "admin@example.com",
              "password": "$2y$10$2wE6y44/8NLpL3oiEXb4F.YfcmBYI2SsDUn43eNKxKj7cNOffi5hu",
              "apiToken": "VsB2TagdY8Ea2ZdCyr3MTliyGc5fDHNrWraMnjQt5MlYa0o6GdhU5sKZpYl73gHYXgWeljbjddLw22t9",
              "roleId": 1,
              "status": true,
              "role": {
                  "id": "1"
              },
              "createdAt": "2021-05-05 15:36:49",
              "updatedAt": "2021-05-05 15:36:49",
              "success": null
          }
      }
    }
  ~~~

  :::

  ## Create a new User

  To create a user, you have to perform mutation on users and paas users fields in the request.
  API call resource will create a new user, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
  mutation{
    createUser(input:{
      name:"naresh"
      email:"naresh.verma327@webkul.com"
      password:"admin123"
      passwordConfirmation:"admin123"
      roleId:1
      status:true
        }){
          id
          name
          email
          password
          apiToken
          roleId
          status
          role{id}
          createdAt
          updatedAt
          success
        }
      }
  ~~~

  ::: details Response
  ~~~json
  {
    "data": {
        "createUser": {
            "id": "3",
            "name": "naresh",
            "email": "naresh.verma327@webkul.com",
            "password": "$2y$10$zpAn6jjtD/22jDAPpzCeeuYVehzfuyOotdCZVD6ZxnP97t9jH7y3G",
            "apiToken": "lPxwBwxUrwiEfLF2zSWdUHCD3BQt6CuqCGwBGW07wO0mvf7ROdoD5361bWVgHWtnnTIvrP9tsLzVyrM1",
            "roleId": 1,
            "status": true,
            "role": {
                "id": "1"
            },
            "createdAt": "2021-05-05 17:32:54",
            "updatedAt": "2021-05-05 17:32:54",
            "success": null
        }
    }
  }
  ~~~
:::

  ## Update a User

  To update a user, you have to perform mutation on users by passing the id of that user and  users fields in the request query.
  API call resource will create a new user, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
      mutation{
        updateUser(id:3,input:{
        name:"nareshverma"
        email:"naresh.verma327@webkul.com"
        password:"admin123"
        passwordConfirmation:"admin123"
        roleId:1
        status:true   
        })
        {
          id
          name
          email
          password
          apiToken
          roleId
          status
          role{id}
          createdAt
          updatedAt
          success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateUser": {
            "id": "3",
            "name": "nareshverma",
            "email": "naresh.verma327@webkul.com",
            "password": "$2y$10$h/p4.yOWgLxKj3Twsc4IFek1KOnSeb.j8VWxRRB.D23rABz1pYP2y",
            "apiToken": "lPxwBwxUrwiEfLF2zSWdUHCD3BQt6CuqCGwBGW07wO0mvf7ROdoD5361bWVgHWtnnTIvrP9tsLzVyrM1",
            "roleId": 1,
            "status": true,
            "role": {
                "id": "1"
            },
            "createdAt": "2021-05-05 17:32:54",
            "updatedAt": "2021-05-05 17:40:26",
            "success": null
        }
    }
  }
  ~~~
:::

## Delete a User

To delete a user, you have to perform mutation on users by passing the id of that user.
API call resource will create a new user, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
      mutation{
        deleteUser(id:3){
            success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteUser": {
            "success": "Admin deleted successfully."
        }
    }
  }
  ~~~
:::

## Logout

You can logout the admin by performing the logout mutaion on user.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

  - Request Mutation
  ~~~Mutation
      mutation{
        userLogout{
            status
            success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "userLogout": {
            "status": true,
            "success": "Success: User logout successfully."
        }
    }
  }
  ~~~
:::

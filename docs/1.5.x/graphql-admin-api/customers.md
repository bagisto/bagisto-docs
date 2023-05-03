## Customers

In this section, we will see all the APIs which are related to Customer's.

### 1. Get All Customer's

You can get all the Customer's from the Bagisto store. You can achieve this job by using the `Customers` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

- Query
  ~~~query
    query customers {
      customers(page:1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          firstName
          lastName
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
          customerGroup {
            id
            name
            code
            isUserDefined
            createdAt
            updatedAt
          }
          addresses {
            id
            customerId
            companyName
            firstName
            lastName
            address1
            address2
            country
            state
            city
            postcode
            phone
            vatId
            addressType
            defaultAddress
          }
          defaultAddress {
            id
            companyName
            address1
            address2
            country
            state
            city
            postcode
            phone
          }
          createdAt
          updatedAt
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "customers": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "firstName": "Naresh",
                    "lastName": "Verma",
                    "gender": "Male",
                    "dateOfBirth": "1996-03-04",
                    "email": "naresh.verma327@webkul.com",
                    "phone": "0324224324343",
                    "password": "$2y$10$REg4zdIfJ8TgsOJst1uZCuhPn91Zl8jbju1f3jORraWuEDqz88PLy",
                    "apiToken": null,
                    "customerGroupId": 2,
                    "subscribedToNewsLetter": false,
                    "isVerified": true,
                    "token": null,
                    "notes": null,
                    "status": true,
                    "customerGroup": {
                        "id": "2",
                        "name": "General",
                        "code": "general",
                        "isUserDefined": false,
                        "createdAt": null,
                        "updatedAt": null
                    },
                    "addresses": [
                        {
                            "id": "1",
                            "customerId": 1,
                            "companyName": "Nitinv pvt ltd",
                            "firstName": "naresh",
                            "lastName": "Verma",
                            "address1": "3rd, arv",
                            "address2": null,
                            "country": "IN",
                            "state": "UT",
                            "city": "Eindhoven",
                            "postcode": "5642CV",
                            "phone": "45454545052045",
                            "vatId": "",
                            "addressType": "customer",
                            "defaultAddress": true
                        }
                    ],
                    "defaultAddress": {
                        "id": "1",
                        "companyName": "Nitinv pvt ltd",
                        "address1": "3rd, arv",
                        "address2": null,
                        "country": "IN",
                        "state": "UT",
                        "city": "Eindhoven",
                        "postcode": "5642CV",
                        "phone": "45454545052045"
                    },
                    "createdAt": "2021-05-26 15:42:59",
                    "updatedAt": "2021-05-26 15:42:59"
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Customer's By ID

To get the  specific Customer's, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query customer {
      customer(id: 1) {
        id
        firstName
        lastName
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
        customerGroup {
          id
          name
          code
          isUserDefined
          createdAt
          updatedAt
        }
        addresses {
          id
          customerId
          companyName
          firstName
          lastName
          address1
          address2
          country
          state
          city
          postcode
          phone
          vatId
          addressType
          defaultAddress
        }
        defaultAddress {
          id
          companyName
          address1
          address2
          country
          state
          city
          postcode
          phone
        }
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "customer": {
            "id": "1",
            "firstName": "Naresh",
            "lastName": "Verma",
            "gender": "Male",
            "dateOfBirth": "1996-03-04",
            "email": "naresh.verma327@webkul.com",
            "phone": "0324224324343",
            "password": "$2y$10$REg4zdIfJ8TgsOJst1uZCuhPn91Zl8jbju1f3jORraWuEDqz88PLy",
            "apiToken": null,
            "customerGroupId": 2,
            "subscribedToNewsLetter": false,
            "isVerified": true,
            "token": null,
            "notes": null,
            "status": true,
            "customerGroup": {
                "id": "2",
                "name": "General",
                "code": "general",
                "isUserDefined": false,
                "createdAt": null,
                "updatedAt": null
            },
            "addresses": [
                {
                    "id": "1",
                    "customerId": 1,
                    "companyName": "Nitinv pvt ltd",
                    "firstName": "naresh",
                    "lastName": "Verma",
                    "address1": "3rd, arv",
                    "address2": null,
                    "country": "IN",
                    "state": "UT",
                    "city": "Eindhoven",
                    "postcode": "5642CV",
                    "phone": "45454545052045",
                    "vatId": "",
                    "addressType": "customer",
                    "defaultAddress": true
                }
            ],
            "defaultAddress": {
                "id": "1",
                "companyName": "Nitinv pvt ltd",
                "address1": "3rd, arv",
                "address2": null,
                "country": "IN",
                "state": "UT",
                "city": "Eindhoven",
                "postcode": "5642CV",
                "phone": "45454545052045"
            },
            "createdAt": "2021-05-26 15:42:59",
            "updatedAt": "2021-05-26 15:42:59"
        }
    }
  }
  ~~~
:::

### 3. Get Filtered Customer's

You can get the filter data from  the Customer's by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

Let's take an example,

- Request Query

~~~query
    query customers {
      customers(input: {
        id:1
      },page:1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
      }
      data {
        id
        firstName
        lastName
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
        customerGroup {
          id
          name
          code
          isUserDefined
          createdAt
          updatedAt
        }
        addresses {
          id
          customerId
          companyName
          firstName
          lastName
          address1
          address2
          country
          state
          city
          postcode
          phone
          vatId
          addressType
          defaultAddress
        }
        defaultAddress {
          id
          companyName
          address1
          address2
          country
          state
          city
          postcode
          phone
        }
        createdAt
        updatedAt
      }
    }
  }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "customers": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "firstName": "Naresh",
                    "lastName": "Verma",
                    "gender": "Male",
                    "dateOfBirth": "1996-03-04",
                    "email": "naresh.verma327@webkul.com",
                    "phone": "0324224324343",
                    "password": "$2y$10$REg4zdIfJ8TgsOJst1uZCuhPn91Zl8jbju1f3jORraWuEDqz88PLy",
                    "apiToken": null,
                    "customerGroupId": 2,
                    "subscribedToNewsLetter": false,
                    "isVerified": true,
                    "token": null,
                    "notes": null,
                    "status": true,
                    "customerGroup": {
                        "id": "2",
                        "name": "General",
                        "code": "general",
                        "isUserDefined": false,
                        "createdAt": null,
                        "updatedAt": null
                    },
                    "addresses": [
                        {
                            "id": "1",
                            "customerId": 1,
                            "companyName": "Nitinv pvt ltd",
                            "firstName": "naresh",
                            "lastName": "Verma",
                            "address1": "3rd, arv",
                            "address2": null,
                            "country": "IN",
                            "state": "UT",
                            "city": "Eindhoven",
                            "postcode": "5642CV",
                            "phone": "45454545052045",
                            "vatId": "",
                            "addressType": "customer",
                            "defaultAddress": true
                        }
                    ],
                    "defaultAddress": {
                        "id": "1",
                        "companyName": "Nitinv pvt ltd",
                        "address1": "3rd, arv",
                        "address2": null,
                        "country": "IN",
                        "state": "UT",
                        "city": "Eindhoven",
                        "postcode": "5642CV",
                        "phone": "45454545052045"
                    },
                    "createdAt": "2021-05-26 15:42:59",
                    "updatedAt": "2021-05-26 15:42:59"
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new Customer

  To create a Customer, you have to perform mutation on Customer and paas the related fields in the request.
  API call resource will create a new Customer, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createCustomer {
      createCustomer(input: {
        firstName: "Peter"
        lastName: "Doe"
        email: "peter@example.com"
        gender: "Male"
        dateOfBirth: "17/04/1994"
        customerGroupId: 2
        phone: "987654321"
        status: false
      }) {
        id
        firstName
        lastName
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
        customerGroup {
          id
          name
          code
          isUserDefined
          createdAt
          updatedAt
        }
        addresses {
          id
          customerId
          companyName
          firstName
          lastName
          address1
          address2
          country
          state
          city
          postcode
          phone
          vatId
          addressType
          defaultAddress
        }
        defaultAddress {
          id
          companyName
          address1
          address2
          country
          state
          city
          postcode
          phone
        }
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createCustomer": {
            "id": "3",
            "firstName": "Peter",
            "lastName": "Doe",
            "gender": "Male",
            "dateOfBirth": "1994-04-17",
            "email": "peter@example.com",
            "phone": "987654321",
            "password": "$2y$10$XZdipyt7nrh3qzXF691Uiu9K.Pp2BgfSD5d651hVmlcJNycGs92E.",
            "apiToken": null,
            "customerGroupId": 2,
            "subscribedToNewsLetter": null,
            "isVerified": true,
            "token": null,
            "notes": null,
            "status": false,
            "customerGroup": {
                "id": "2",
                "name": "General",
                "code": "general",
                "isUserDefined": false,
                "createdAt": null,
                "updatedAt": null
            },
            "addresses": [],
            "defaultAddress": null,
            "createdAt": "2021-05-26 15:54:52",
            "updatedAt": "2021-05-26 15:54:52"
        }
    }
  }
  ~~~
:::

### 5. Update Customer

By using this API call you can update the Customer. To do this , you have to perform update mutation on Customer and paas the related fields in the request.
API call will update a Customer, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateCustomer {
      updateCustomer(id:3, input: {
        firstName: "Kim"
        lastName: "Thomson"
        email: "peter1@example.com"
        gender: "Female"
        dateOfBirth: "2019-10-30"
        customerGroupId: 1
        phone: "6543213456"
        status: true
      }) {
        id
        firstName
        lastName
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
        customerGroup {
          id
          name
          code
          isUserDefined
          createdAt
          updatedAt
        }
        addresses {
          id
          customerId
          companyName
          firstName
          lastName
          address1
          address2
          country
          state
          city
          postcode
          phone
          vatId
          addressType
          defaultAddress
        }
        defaultAddress {
          id
          companyName
          address1
          address2
          country
          state
          city
          postcode
          phone
        }
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateCustomer": {
            "id": "3",
            "firstName": "Kim",
            "lastName": "Thomson",
            "gender": "Female",
            "dateOfBirth": "2019-10-30",
            "email": "peter1@example.com",
            "phone": "6543213456",
            "password": "$2y$10$XZdipyt7nrh3qzXF691Uiu9K.Pp2BgfSD5d651hVmlcJNycGs92E.",
            "apiToken": null,
            "customerGroupId": 1,
            "subscribedToNewsLetter": false,
            "isVerified": true,
            "token": null,
            "notes": null,
            "status": true,
            "customerGroup": {
                "id": "1",
                "name": "Guest",
                "code": "guest",
                "isUserDefined": false,
                "createdAt": null,
                "updatedAt": null
            },
            "addresses": [],
            "defaultAddress": null,
            "createdAt": "2021-05-26 15:54:52",
            "updatedAt": "2021-05-26 15:58:32"
        }
    }
  }
  ~~~
:::

### 6. Delete a Customer

To delete a Customer, you have to perform mutation on Customer by passing the id of that Customer.
API call will delete a Customer, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Mutation
  ~~~Mutation
      mutation deleteCustomer {
          deleteCustomer(id: 3) {
              success
          }
      }
  ~~~

::: details Response
  ~~~json
    "data": {
        "deleteCustomer": {
            "success": "Customer deleted successfully."
        }
    }
  ~~~
:::

## Customer's Addresses

In this section, we will see all the APIs which are related to Customer's Addresses.

### 1. Get All Customer's Addresses

You can get all the Customer's Addresses from the Bagisto store. You can achieve this job by using the `Customer's Addresses` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

- Query
  ~~~query
    query customerAddresses {
      customerAddresses {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          customerId
          companyName
          firstName
          lastName
          address1
          address2
          country
          state
          city
          postcode
          phone
          vatId
          addressType
          defaultAddress
          createdAt
          updatedAt
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "customerAddresses": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "customerId": 1,
                    "companyName": "Nitinv pvt ltd",
                    "firstName": "naresh",
                    "lastName": "Verma",
                    "address1": "3rd, arv",
                    "address2": null,
                    "country": "IN",
                    "state": "UT",
                    "city": "Eindhoven",
                    "postcode": "5642CV",
                    "phone": "45454545052045",
                    "vatId": "",
                    "addressType": "customer",
                    "defaultAddress": true,
                    "createdAt": "2021-05-26 15:44:32",
                    "updatedAt": "2021-05-26 15:44:45"
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Customer's Addresses By ID

To get the  specific Customer's Addresses, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query customerAddress {
      customerAddress(id: 1) {
        id
        customerId
        companyName
        firstName
        lastName
        address1
        address2
        country
        state
        city
        postcode
        phone
        vatId
        addressType
        defaultAddress
        createdAt
        updatedAt
      }
    } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "customerAddress": {
            "id": "1",
            "customerId": 1,
            "companyName": "Nitinv pvt ltd",
            "firstName": "naresh",
            "lastName": "Verma",
            "address1": "3rd, arv",
            "address2": null,
            "country": "IN",
            "state": "UT",
            "city": "Eindhoven",
            "postcode": "5642CV",
            "phone": "45454545052045",
            "vatId": "",
            "addressType": "customer",
            "defaultAddress": true,
            "createdAt": "2021-05-26 15:44:32",
            "updatedAt": "2021-05-26 15:44:45"
        }
    }
  }
  ~~~
:::

### 3. Get Filtered Customer's Addresses

You can get the filter data from  the Customer's Addresses by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

Let's take an example,

- Request Query

~~~query
    query customerAddresses {
      customerAddresses(input: {
        customerId: 1
      }) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          customerId
          companyName
          firstName
          lastName
          address1
          address2
          country
          state
          city
          postcode
          phone
          vatId
          addressType
          defaultAddress
          createdAt
          updatedAt
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "customerAddresses": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "customerId": 1,
                    "companyName": "Nitinv pvt ltd",
                    "firstName": "naresh",
                    "lastName": "Verma",
                    "address1": "3rd, arv",
                    "address2": null,
                    "country": "IN",
                    "state": "UT",
                    "city": "Eindhoven",
                    "postcode": "5642CV",
                    "phone": "45454545052045",
                    "vatId": "",
                    "addressType": "customer",
                    "defaultAddress": true,
                    "createdAt": "2021-05-26 15:44:32",
                    "updatedAt": "2021-05-26 15:44:45"
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new Customer Address

  To create a Customer Address, you have to perform mutation on Customer Address and paas the related fields in the request.
  API call resource will create a new Customer Address, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createCustomerAddress {
      createCustomerAddress(input: {
        customerId: 1
        companyName: "Webkul"
        firstName: "Tom Demo"
        lastName: "Martin Demo"
        address1: "3180  Bluff"
        address2: "Street"
        country: "US"
        state: "PA"
        city: "GLEN CAMPBELL"
        postcode: "15742"
        phone: "234343544"
        vatId: "INV12345678902"
        defaultAddress: false
      }) {
        id
        customerId
        companyName
        firstName
        lastName
        address1
        address2
        country
        state
        city
        postcode
        phone
        vatId
        addressType
        defaultAddress
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createCustomerAddress": {
            "id": "2",
            "customerId": 1,
            "companyName": "Webkul",
            "firstName": "Tom Demo",
            "lastName": "Martin Demo",
            "address1": "3180  Bluff",
            "address2": "Street",
            "country": "US",
            "state": "PA",
            "city": "GLEN CAMPBELL",
            "postcode": "15742",
            "phone": "234343544",
            "vatId": "INV12345678902",
            "addressType": "customer",
            "defaultAddress": true,
            "createdAt": "2021-05-26 16:17:48",
            "updatedAt": "2021-05-26 16:17:48"
        }
    }
  }
  ~~~
:::

### 5. Update Customer Address

By using this API call you can update the Customer Address. To do this , you have to perform update mutation on Customer Address and paas the related fields in the request.
API call will update a Customer Address, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateCustomerAddress {
      updateCustomerAddress(id: 2, input: {
        customerId: 1
        companyName: "Velocity"
        firstName: "Tom"
        lastName: "Martin"
        address1: "3180 Bluff Street"
        address2: ""
        country: "IN"
        state: "UP"
        city: "Noida"
        postcode: "201301"
        phone: "1234123455"
        vatId: "INV12342278902"
      }) {
        id
        customerId
        companyName
        firstName
        lastName
        address1
        address2
        country
        state
        city
        postcode
        phone
        vatId
        addressType
        defaultAddress
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateCustomerAddress": {
            "id": "2",
            "customerId": 1,
            "companyName": "Velocity",
            "firstName": "Tom",
            "lastName": "Martin",
            "address1": "3180 Bluff Street",
            "address2": "",
            "country": "IN",
            "state": "UP",
            "city": "Noida",
            "postcode": "201301",
            "phone": "1234123455",
            "vatId": "INV12342278902",
            "addressType": "customer",
            "defaultAddress": false,
            "createdAt": "2021-05-26 16:17:48",
            "updatedAt": "2021-05-26 16:19:58"
        }
    }
  }
  ~~~
:::

### 6. Delete a Customer Address

To delete a Customer Address, you have to perform mutation on Customer Address by passing the id of that Customer Address.
API call will delete a Customer Address, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteCustomerAddress {
      deleteCustomerAddress(id: 1) {
          success
      }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteCustomerAddress": {
          "success": "Customer's Address deleted successfully."
        }
    }
  }
  ~~~
:::

## Customer Groups

In this section, we will see all the APIs which are related to Customer Groups.

### 1. Get All Customer Groups

You can get all the Customer Groups from the Bagisto store. You can achieve this job by using the `Customer Groups` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

- Query
  ~~~query
    query customerGroups {
      customerGroups {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          name
          code
          isUserDefined
          createdAt
          updatedAt
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "customerGroups": {
            "paginatorInfo": {
                "count": 3,
                "currentPage": 1,
                "lastPage": 1,
                "total": 3
            },
            "data": [
                {
                    "id": "1",
                    "name": "Guest",
                    "code": "guest",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "2",
                    "name": "General",
                    "code": "general",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                },
                {
                    "id": "3",
                    "name": "Wholesale",
                    "code": "wholesale",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Customer Group By ID

To get the  specific Customer Group, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query customerGroup {
      customerGroup(id: 2) {
        id
        name
        code
        isUserDefined
        createdAt
        updatedAt
      }
    } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "customerGroup": {
            "id": "2",
            "name": "General",
            "code": "general",
            "isUserDefined": false,
            "createdAt": null,
            "updatedAt": null
        }
    }
  }
  ~~~
:::

### 3. Get Filtered Customer Groups

You can get the filter data from  the Customer Groups by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

**Note**: You can pass all the related fileds that you want in response.

### Examples

Let's take an example,

- Request Query

~~~query
    query customerGroups {
      customerGroups(input: {
        code: "general"
      }) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          name
          code
          isUserDefined
          createdAt
          updatedAt
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "customerGroups": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "2",
                    "name": "General",
                    "code": "general",
                    "isUserDefined": false,
                    "createdAt": null,
                    "updatedAt": null
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new Customer Group

  To create a Customer Group, you have to perform mutation on Customer Group and paas the related fields in the request.
  API call resource will create a new Customer Group, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createCustomerGroup {
      createCustomerGroup(input: {
        name: "VIP Group"
        code: "vip"
        isUserDefined: false
      }) {
        id
        name
        code
        isUserDefined
        createdAt
        updatedAt
      }
    } 
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createCustomerGroup": {
            "id": "4",
            "name": "VIP Group",
            "code": "vip",
            "isUserDefined": false,
            "createdAt": "2021-05-26 16:32:06",
            "updatedAt": "2021-05-26 16:32:06"
        }
    }
  }
  ~~~
:::

### 5. Update Customer Group

By using this API call you can update the Customer Group. To do this , you have to perform update mutation on Customer Group and paas the related fields in the request.
API call will update a Customer Group, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation   
    mutation updateCustomerGroup {
      updateCustomerGroup(id: 4, input: {
        name: "VIP Customers"
        code: "vip"
        isUserDefined: false
      }) {
        id
        name
        code
        isUserDefined
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateCustomerGroup": {
            "id": "4",
            "name": "VIP Customers",
            "code": "vip",
            "isUserDefined": false,
            "createdAt": "2021-05-26 16:32:06",
            "updatedAt": "2021-05-26 16:33:57"
        }
    }
  }
  ~~~
:::

### 6. Delete a Customer Group

To delete a Customer Group, you have to perform mutation on Customer Group by passing the id of that Customer Group.
API call will delete a Customer Group, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteCustomerGroup {
      deleteCustomerGroup(id: 4) {
          success
      }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteCustomerGroup": {
          "success": "Customer group deleted successfully."
        }
    }
  }
  ~~~
:::

## Subscribers

In this section, we will see all the APIs which are related to Subscribers.

### 1. Get All Newsletter Subscribers

You can get all the Newsletter Subscribers from the Bagisto store. You can achieve this job by using the `Newsletter Subscribers` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

- Query
  ~~~query
    query newsletterSubscribers {
      newsletterSubscribers {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          email
          isSubscribed
          token
          channelId
          createdAt
          updatedAt
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "newsletterSubscribers": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "email": "gagan@exmaple.com",
                    "isSubscribed": true,
                    "token": "60ae2f20a2b4e",
                    "channelId": 1,
                    "createdAt": "2021-05-26 16:51:08",
                    "updatedAt": "2021-05-26 16:51:08"
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Newsletter Subscriber By ID

To get the  specific Newsletter Subscribers, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query newsletterSubscriber {
      newsletterSubscriber(id: 1) {
        id
        email
        isSubscribed
        token
        channelId
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "newsletterSubscriber": {
            "id": "1",
            "email": "gagan@exmaple.com",
            "isSubscribed": true,
            "token": "60ae2f20a2b4e",
            "channelId": 1,
            "createdAt": "2021-05-26 16:51:08",
            "updatedAt": "2021-05-26 16:51:08"
        }
    }
  }
  ~~~
:::


### 3. Add a new Newsletter Subscriber

  To add a Newsletter Subscriber, you have to perform mutation on Newsletter Subscriber and paas the related fields in the request.
  API call resource will add a new Newsletter Subscriber, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation subscribe {
      subscribe(input: {
        email: "gagan1@exmaple.com"
      }) {
        email
        isSubscribed
        token
        channelId
        createdAt
        updatedAt
      }
    } 
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "subscribe": {
            "email": "gagan1@exmaple.com",
            "isSubscribed": true,
            "token": "60ae30df240a2",
            "channelId": 1,
            "createdAt": "2021-05-26 16:58:35",
            "updatedAt": "2021-05-26 16:58:35"
        }
    }
  }
  ~~~
:::

### 4. unsubscribe a Newsletter Subscriber

By using this API call you can unsubscribe the Newsletter Subscriber. To do this , you have to perform unsubscribe mutation on Newsletter Subscriber and paas the related fields in the request.
API call will unsubscribe a Newsletter Subscriber, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation   
    mutation unSubscribe {
      unSubscribe(token: "60ae30df240a2") {
        id
        email
        isSubscribed
        token
        channelId
        createdAt
        updatedAt
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "unSubscribe": {
            "id": "2",
            "email": "gagan1@exmaple.com",
            "isSubscribed": false,
            "token": "60ae30df240a2",
            "channelId": 1,
            "createdAt": "2021-05-26 16:58:35",
            "updatedAt": "2021-05-26 17:01:18"
        }
    }
  }
  ~~~
:::

### 5. Delete a Newsletter Subscriber

To delete a Newsletter Subscriber, you have to perform mutation on Newsletter Subscriber by passing the id of that Newsletter Subscriber.
API call will delete a Newsletter Subscriber, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteSubscriber {
      deleteSubscriber(email: "gagan1@exmaple.com") {
        success
      }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteSubscriber": {
            "success": "Subscriber deleted successfully."
        }
    }
  }
  ~~~
:::

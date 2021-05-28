# Customer Addresses

In this section, we will see all the APIs which are related to Customer Addresses.

## Get Customer Addresses

You can get all the Customer Addresses from the Bagisto store. You can achieve this job by using the `Customer Addresses` API call.

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
    query addresses {
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
            createdAt
            updatedAt
        }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "addresses": [
            {
                "id": "11",
                "customerId": 5,
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
                "vatId": "INV12345678904",
                "addressType": "customer",
                "defaultAddress": false,
                "createdAt": "2021-05-28 12:59:29",
                "updatedAt": "2021-05-28 12:59:29"
            },
            {
                "id": "12",
                "customerId": 5,
                "companyName": "Webkul2",
                "firstName": "Tom Demo2",
                "lastName": "Martin Demo2",
                "address1": "3180  Bluff",
                "address2": "Street",
                "country": "US",
                "state": "PA",
                "city": "GLEN CAMPBELL",
                "postcode": "15742222222",
                "phone": "234343544",
                "vatId": "INV12345678904",
                "addressType": "customer",
                "defaultAddress": false,
                "createdAt": "2021-05-28 12:59:46",
                "updatedAt": "2021-05-28 12:59:46"
            }
        ]
    }
}
~~~
:::

## Get Customer Address By ID

To get the  specific Customer Address, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query address {
        address(id: 11) {
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
        "address": {
            "id": "11",
            "customerId": 5,
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
            "vatId": "INV12345678904",
            "addressType": "customer",
            "defaultAddress": false,
            "createdAt": "2021-05-28 12:59:29",
            "updatedAt": "2021-05-28 12:59:29"
        }
    }
  }
  ~~~
:::


## Create a new Customer Address

  To create a Customer Address, you have to perform mutation on Customer Address and paas the related fields in the request.
  API call resource will create a new Customer Address, only if the Customer has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createAddress {
        createAddress(input: {
            companyName: "Webkul2"
            firstName: "Tom Demo2"
            lastName: "Martin Demo2"
            address1: "3180  Bluff"
            address2: "Street"
            country: "US"
            state: "PA"
            city: "GLEN CAMPBELL"
            postcode: "15742222222"
            phone: "234343544"
            vatId: "INV12345678904"
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
        "createAddress": {
            "id": "12",
            "customerId": 5,
            "companyName": "Webkul2",
            "firstName": "Tom Demo2",
            "lastName": "Martin Demo2",
            "address1": "3180  Bluff",
            "address2": "Street",
            "country": "US",
            "state": "PA",
            "city": "GLEN CAMPBELL",
            "postcode": "15742222222",
            "phone": "234343544",
            "vatId": "INV12345678904",
            "addressType": "customer",
            "defaultAddress": false,
            "createdAt": "2021-05-28 12:59:46",
            "updatedAt": "2021-05-28 12:59:46"
        }
    }
  }
  ~~~
:::

## Update Customer Address

By using this API call you can update the Customer Address. To do this , you have to perform update mutation on Customer Address and paas the related fields in the request.
API call will update a Customer Address, only if the customer has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateAddress {
        updateAddress(id: 11, input: {
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
        "updateAddress": {
            "id": "11",
            "customerId": 5,
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
            "createdAt": "2021-05-28 12:59:29",
            "updatedAt": "2021-05-28 13:07:52"
        }
    }
  }
  ~~~
:::

## Delete a Customer Address

To delete a Customer Address, you have to perform mutation on Customer Address by passing the id of that Customer Address.
API call will delete a Customer Address, only if the customer has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteAddress {
        deleteAddress(id: 11) {
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

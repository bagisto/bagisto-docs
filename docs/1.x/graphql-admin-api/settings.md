## Locales

In this section, we will see all the APIs which are related to locales.

### 1. Get all locales

You can get all the locales from the Bagisto store. You can achieve this job by using the `locales` API call.

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
    query locales{
      locales(page:1){
        paginatorInfo {
            count
            currentPage
            lastPage
            total
        }
        data{
          id
          name
          code
          direction
          success
        }       
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "locales": {
            "paginatorInfo": {
                "count": 4,
                "currentPage": 1,
                "lastPage": 1,
                "total": 4
            },
            "data": [
                {
                    "id": "1",
                    "name": "English",
                    "code": "en",
                    "direction": "ltr",
                    "success": null
                },
                {
                    "id": "2",
                    "name": "French",
                    "code": "fr",
                    "direction": "ltr",
                    "success": null
                },
                {
                    "id": "3",
                    "name": "Dutch",
                    "code": "nl",
                    "direction": "ltr",
                    "success": null
                },
                {
                    "id": "4",
                    "name": "Türkçe",
                    "code": "tr",
                    "direction": "ltr",
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Locale By ID

To get the  specific Locale, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
  query locales{
    locale(id:1){
      id
      name
      code
      direction
      success
    }
  }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "locale": {
            "id": "1",
            "name": "English",
            "code": "en",
            "direction": "ltr",
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered Locale

You can get the filter data from  the Locales by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
  query locales{
      locales(input: {
              code: "en"
              name: "English"
              direction: "ltr"
          }){
          paginatorInfo {
              count
              currentPage
              lastPage
              total
          }
          data{
              id
              name
              code
              direction
              success
          }       
      }
  }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "locales": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "English",
                    "code": "en",
                    "direction": "ltr",
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
  :::

### 4. Create a new Locale

  To create a Locale, you have to perform mutation on Locale and paas the related fields in the request.
  API call resource will create a new Locale, only if the admin has logged in.

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
    createChannel(input:{
      code:"newca"
      name:"nerty"
      description:"ajsyg"
      theme:"gdg"
      homePageContent:"fhg"
      footerContent:"fh"
      hostname:"http://bag1.com"
      defaultLocaleId:1
      baseCurrencyId:1
      rootCategoryId:1
      locales:1
      currencies:1
      inventorySources:1
      seoTitle:"gfyj"
      seoDescription:"gcg"
      seoKeywords:"gvgh"
    })
    {
      id
      code
      name
      description
      theme
      homePageContent
      footerContent
      hostname
      defaultLocaleId
      baseCurrencyId
      rootCategoryId
      homeSeo
      locales{id}
      defaultLocale
      currencies{id}
      inventorySources{id}
      baseCurrency
      rootCategory
      logoUrl
      faviconUrl
      success
    }
  }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createChannel": {
            "id": "2",
            "code": "newca",
            "name": "nerty",
            "description": "ajsyg",
            "theme": "gdg",
            "homePageContent": "fhg",
            "footerContent": "fh",
            "hostname": "http://bag1.com",
            "defaultLocaleId": 1,
            "baseCurrencyId": 1,
            "rootCategoryId": 1,
            "homeSeo": "{\"meta_title\":\"gfyj\",\"meta_description\":\"gcg\",\"meta_keywords\":\"gvgh\"}",
            "locales": [
                {
                    "id": "1"
                }
            ],
            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
            "currencies": [
                {
                    "id": "1"
                }
            ],
            "inventorySources": [
                {
                    "id": "1"
                }
            ],
            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
            "logoUrl": null,
            "faviconUrl": null,
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update Locale

By using this API call you can update the Locale. To do this , you have to perform update mutation on Locale and paas the related fields in the request.
API call will update a Locale, only if the admin has logged in.


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
    updateLocale(id:2,input:{
        code:"trr"
        name:"Türkçe"
        direction:"LTR"
    }){
      id
      name
      code
      direction
      success
    }
  }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateLocale": {
            "id": "2",
            "name": "Türkçe",
            "code": "trr",
            "direction": "LTR",
            "success": null
        }
    }
  }
  ~~~
:::

### 6. Delete a Locale

To delete a Locale, you have to perform mutation on Locale by passing the id of that Locale.
API call will delete a Locale, only if the admin has logged in.

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
      deleteLocale(id:2){
          success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteLocale": {
            "success": "Locale deleted successfully."
        }
    }
  }
  ~~~
:::



## Currency

In this section, we will see all the APIs which are related to Currencies.

### 1. Get all Currencies

You can get all the Currencies from the Bagisto store. You can achieve this job by using the `Currencies` API call.

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
    query currencies{
      currencies(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          name
          code
          symbol
          exchangeRate {
            id
            targetCurrency
            rate
            createdAt
            updatedAt
            currency {
              name
              code
              symbol
            }
            success
          }
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
      "currencies": {
          "paginatorInfo": {
              "count": 2,
              "currentPage": 1,
              "lastPage": 1,
              "total": 2
          },
          "data": [
              {
                  "id": "1",
                  "name": "US Dollar",
                  "code": "USD",
                  "symbol": "$",
                  "exchangeRate": null,
                  "createdAt": null,
                  "updatedAt": null,
                  "success": null
              },
              {
                  "id": "2",
                  "name": "Euro",
                  "code": "EUR",
                  "symbol": "€",
                  "exchangeRate": null,
                  "createdAt": null,
                  "updatedAt": null,
                  "success": null
              }
          ]
      }
    }
}
~~~
:::

### 2. Get Currency By ID

To get the  specific Currency, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
  query currency{
    currency(id:1){
      id
      name
      code
      symbol
      exchangeRate {
          id
          targetCurrency
          rate
          createdAt
          updatedAt
          
          success
      }
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
      "currency": {
        "id": "1",
        "name": "US Dollar",
        "code": "USD",
        "symbol": "$",
        "exchangeRate": null,
        "createdAt": null,
        "updatedAt": null,
        "success": null
      }
    }
  }
  ~~~

:::

### 3. Get Filtered Currency

You can get the filter data from the Currencies by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
  query currencies{
    currencies(input:{
        id: 1
        code: "USD"
      }){
      paginatorInfo {
        count
        currentPage
        lastPage
        total
      }
      data{
        id
        name
        code
        symbol
        exchangeRate {
          id
          targetCurrency
          rate
          createdAt
          updatedAt
          currency {
            name
            code
            symbol
          }
          success
        }
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
        "currencies": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "US Dollar",
                    "code": "USD",
                    "symbol": "$",
                    "exchangeRate": null,
                    "createdAt": null,
                    "updatedAt": null,
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
  :::

### 4. Create a new Currency

  To create a Currency, you have to perform mutation on Currency and paas the related fields in the request.
  API call will create a new Currency, only if the admin has logged in.

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
        createCurrency(input:{
          name:"newcurrency"
          code:"new"
          symbol:"%"
        }){
          id
          name
          code
          symbol
          exchangeRate{id}
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
        "createCurrency": {
            "id": "3",
            "name": "newcurrency",
            "code": "NEW",
            "symbol": "%",
            "exchangeRate": null,
            "createdAt": "2021-05-21 11:11:18",
            "updatedAt": "2021-05-21 11:11:18",
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update Currency

By using this API call you can update the Currency. To do this , you have to perform update mutation on Currency and paas the related fields in the request.
API call will update a Currency, only if the admin has logged in.


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
        updateCurrency(id:3,input:{
          name:"ind"
          code:"IND"
          symbol:"&"
        })
        {
          id
          name
          code
          symbol
          exchangeRate{id}
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
      "updateCurrency": {
        "id": "3",
        "name": "ind",
        "code": "IND",
        "symbol": "&",
        "exchangeRate": null,
        "createdAt": "2021-05-21 11:11:18",
        "updatedAt": "2021-05-21 11:15:49",
        "success": null
      }
    }
  }
  ~~~
:::

### 6. Delete a Currency

To delete a Currency, you have to perform mutation on Currency by passing the id of that Currency.
API call will delete a Currency, only if the admin has logged in.

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
      deleteCurrency(id:3)
      {
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
      "deleteCurrency": {
        "success": "Currency deleted successfully."
      }
    }
  }
  ~~~
:::



## Exchange Rates

In this section, we will see all the APIs which are related to Exchange Rates.

### 1. Get all Exchange Rates

You can get all the Exchange Rates from the Bagisto store. You can achieve this job by using the `Exchange Rates` API call.

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
    query exchangeRates{
      exchangeRates(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
            id
            targetCurrency
            rate
            createdAt
            updatedAt
            currency {
              id
              name
              code
              symbol
              success
            }
            success
          }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "exchangeRates": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "targetCurrency": 2,
                    "rate": 1.5,
                    "createdAt": "2021-05-21 11:57:49",
                    "updatedAt": "2021-05-21 11:57:49",
                    "currency": {
                        "id": "2",
                        "name": "Euro",
                        "code": "EUR",
                        "symbol": "€",
                        "success": null
                    },
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Exchange Rate By ID

To get the  specific Exchange Rate, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
  query exchangeRate{
    exchangeRate(id:1){
       
            id
            targetCurrency
            rate
            createdAt
            updatedAt
            currency {
                id
                name
                code
                symbol
                success
            }
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "exchangeRate": {
            "id": "1",
            "targetCurrency": 2,
            "rate": 1.5,
            "createdAt": "2021-05-21 11:57:49",
            "updatedAt": "2021-05-21 11:57:49",
            "currency": {
                "id": "2",
                "name": "Euro",
                "code": "EUR",
                "symbol": "€",
                "success": null
            },
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered Exchange Rates

You can get the filter data from the Exchange Rates by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
  query exchangeRates{
    exchangeRates(input: {
      id : 1
      currency: "EUR" 
    }, page:1){
      paginatorInfo {
          count
          currentPage
          lastPage
          total
      }
      data{
        id
        targetCurrency
        rate
        createdAt
        updatedAt
        currency {
            id
            name
            code
            symbol
            success
        }
        success
      }
    }
  }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "exchangeRates": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "targetCurrency": 2,
                    "rate": 1.5,
                    "createdAt": "2021-05-21 11:57:49",
                    "updatedAt": "2021-05-21 11:57:49",
                    "currency": {
                        "id": "2",
                        "name": "Euro",
                        "code": "EUR",
                        "symbol": "€",
                        "success": null
                    },
                    "success": null
                }
            ]
        }
  }
  ~~~
  :::

### 4. Create a new Exchange Rate

  To create a Exchange Rate, you have to perform mutation on Exchange Rate and paas the related fields in the request.
  API call will create a new Exchange Rate, only if the admin has logged in.

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
        createExchangeRate(input:{
            targetCurrency:2
            rate:5
        }){
          id
          targetCurrency
          rate
          createdAt
          updatedAt
          # currency{id}
          success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createExchangeRate": {
            "id": "2",
            "targetCurrency": 2,
            "rate": 5,
            "createdAt": "2021-05-21 13:09:42",
            "updatedAt": "2021-05-21 13:09:42",
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update Exchange Rate

By using this API call you can update the Exchange Rate. To do this , you have to perform update mutation on Exchange Rate and paas the related fields in the request.
API call will update a Exchange Rate, only if the admin has logged in.


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
        updateExchangeRate(id:2,input:{
          targetCurrency:2
          rate:2.5
        }){
          id
          targetCurrency
          rate
          createdAt
          updatedAt
          currency{id}
          success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
      "updateExchangeRate": {
        "id": "2",
        "targetCurrency": 2,
        "rate": 2.5,
        "createdAt": "2021-05-21 13:09:42",
        "updatedAt": "2021-05-21 13:22:17",
        "currency": {
            "id": "2"
        },
        "success": null
      }
    }
  }
  ~~~
:::

### 6. Delete a Exchange Rate

To delete a Exchange Rate, you have to perform mutation on Exchange Rate by passing the id of that Exchange Rate.
API call will delete a Exchange Rate, only if the admin has logged in.

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
        deleteExchangeRate(id:2){
            success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
      "deleteExchangeRate": {
        "success": "Exchange Rate deleted successfully."
      }
    }
  }
  ~~~
:::

## Inventory Sources

In this section, we will see all the APIs which are related to Inventory Sources.

### 1. Get all Inventory Sources

You can get all the Inventory Sources from the Bagisto store. You can achieve this job by using the `invetory-sources` API call.

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
    query inventorySources{
      inventorySources(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          code
          name
          description
          contactName
          contactEmail
          contactNumber
          contactFax
          country
          state
          city
          street
          postcode
          priority
          latitude
          longitude
          status
          success
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "inventorySources": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "code": "default",
                    "name": "Default",
                    "description": null,
                    "contactName": "Detroit Warehouse",
                    "contactEmail": "warehouse@example.com",
                    "contactNumber": "1234567899",
                    "contactFax": null,
                    "country": "US",
                    "state": "MI",
                    "city": "Detroit",
                    "street": "12th Street",
                    "postcode": "48127",
                    "priority": 0,
                    "latitude": null,
                    "longitude": null,
                    "status": true,
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Inventory Source By ID

To get the  specific Inventory Source, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query inventorySource{
      inventorySource(id:1){
        id
        code
        name
        description
        contactName
        contactEmail
        contactNumber
        contactFax
        country
        state
        city
        street
        postcode
        priority
        latitude
        longitude
        status
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "inventorySource": {
            "id": "1",
            "code": "default",
            "name": "Default",
            "description": null,
            "contactName": "Detroit Warehouse",
            "contactEmail": "warehouse@example.com",
            "contactNumber": "1234567899",
            "contactFax": null,
            "country": "US",
            "state": "MI",
            "city": "Detroit",
            "street": "12th Street",
            "postcode": "48127",
            "priority": 0,
            "latitude": null,
            "longitude": null,
            "status": true,
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered Inventory Source

You can get the filter data from  the Inventory Sources by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
    query inventorySources{
      inventorySources(input: {
        id: 1
        code: "default"
        name: "Default"
        priority: 0
        status: true
      },page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          code
          name
          description
          contactName
          contactEmail
          contactNumber
          contactFax
          country
          state
          city
          street
          postcode
          priority
          latitude
          longitude
          status
          success
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "inventorySources": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "code": "default",
                    "name": "Default",
                    "description": null,
                    "contactName": "Detroit Warehouse",
                    "contactEmail": "warehouse@example.com",
                    "contactNumber": "1234567899",
                    "contactFax": null,
                    "country": "US",
                    "state": "MI",
                    "city": "Detroit",
                    "street": "12th Street",
                    "postcode": "48127",
                    "priority": 0,
                    "latitude": null,
                    "longitude": null,
                    "status": true,
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
  :::

### 4. Create a new Inventory Source

  To create a Inventory Source, you have to perform mutation on Inventory Source and paas the related fields in the request.
  API call resource will create a new Inventory Source, only if the admin has logged in.

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
      createInventorySource(input:{
        code:"demo"
        name:"demoinventory"
        description:"demo"
        contactName:"naresh.verma"
        contactEmail:"naresh.verma327@webkul.com"
        contactNumber:"7252756566"
        country:"IN"
        state:"UK"
        city:"nainital"
        street:"ramnagar"
        postcode:"263140"
        priority:1
        status:true
      }){
        id
        code
        name
        description
        contactName
        contactEmail
        contactNumber
        contactFax
        country
        state
        city
        street
        postcode
        priority
        latitude
        longitude
        status
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createInventorySource": {
            "id": "3",
            "code": "demo",
            "name": "demoinventory",
            "description": "demo",
            "contactName": "naresh.verma",
            "contactEmail": "naresh.verma327@webkul.com",
            "contactNumber": "7252756566",
            "contactFax": null,
            "country": "IN",
            "state": "UK",
            "city": "nainital",
            "street": "ramnagar",
            "postcode": "263140",
            "priority": 1,
            "latitude": null,
            "longitude": null,
            "status": true,
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update Inventory Source

By using this API call you can update the Inventory Source. To do this , you have to perform update mutation on Inventory Source and paas the related fields in the request.
API call will update a Inventory Source, only if the admin has logged in.


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
        updateInventorySource(id:3,input:{
          code:"demoupdate"
          name:"demoinventory"
          description:"demo"
          contactName:"naresh.verma"
          contactEmail:"naresh.verma327@webkul.com"
          contactNumber:"7252756566"
          country:"IN"
          state:"UK"
          city:"nainital"
          street:"ramnagar"
          postcode:"263140"
          priority:1
          status:true
        }){
          id
          code
          name
          description
          contactName
          contactEmail
          contactNumber
          contactFax
          country
          state
          city
          street
          postcode
          priority
          latitude
          longitude
          status
          success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateInventorySource": {
            "id": "3",
            "code": "demoupdate",
            "name": "demoinventory",
            "description": "demo",
            "contactName": "naresh.verma",
            "contactEmail": "naresh.verma327@webkul.com",
            "contactNumber": "7252756566",
            "contactFax": null,
            "country": "IN",
            "state": "UK",
            "city": "nainital",
            "street": "ramnagar",
            "postcode": "263140",
            "priority": 1,
            "latitude": null,
            "longitude": null,
            "status": true,
            "success": null
        }
    }
  }
  ~~~
:::

### 6. Delete a Inventory Source

To delete a Inventory Source, you have to perform mutation on Inventory Source by passing the id of that Inventory Source.
API call will delete a Inventory Source, only if the admin has logged in.

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
      deleteInventorySource(id:3){
          success
      }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteInventorySource": {
            "success": "Inventory source deleted successfully."
        }
    }
  }
  ~~~
:::

## Channels

In this section, we will see all the APIs which are related to channels.

### 1. Get all channels

You can get all the channels from the Bagisto store. You can achieve this job by using the `channels` API call.

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
    query channels{
      channels(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          code
          name
          description
          theme
          homePageContent
          footerContent
          hostname
          defaultLocaleId
          baseCurrencyId
          rootCategoryId
          homeSeo
          locales{id}
          defaultLocale
          currencies{id}
          inventorySources{id}
          baseCurrency
          rootCategory
          logoUrl
          faviconUrl
          success
        }
      }
    }
  ~~~
::: tip

  You can use all fields to get the all related data. like here we have used `locales` field and and under this resource we have user id , so you can get all the related fields to locale here by defining the locale fields in the request query.

:::

::: details Response

~~~json
{
  "data": {
      "channels": {
          "paginatorInfo": {
              "count": 1,
              "currentPage": 1,
              "lastPage": 1,
              "total": 1
          },
          "data": [
              {
                  "id": "1",
                  "code": "default",
                  "name": "Default",
                  "description": null,
                  "theme": "velocity",
                  "homePageContent": "\n                    <p>@include(\"shop::home.slider\") @include(\"shop::home.featured-products\") @include(\"shop::home.new-products\")</p>\n                        <div class=\"banner-container\">\n                        <div class=\"left-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/1.webp data-src=http://localhost/graphql/public/themes/default/assets/images/1.webp class=\"lazyload\" alt=\"test\" width=\"720\" height=\"720\" />\n                        </div>\n                        <div class=\"right-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/2.webp data-src=http://localhost/graphql/public/themes/default/assets/images/2.webp class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/3.webp data-src=http://localhost/graphql/public/themes/default/assets/images/3.webp  class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                        </div>\n                    </div>\n                ",
                  "footerContent": "\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Quick Links</span>\n                        <ul class=\"list-group\">\n                            <li><a href=\"@php echo route('shop.cms.page', 'about-us') @endphp\">About Us</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'return-policy') @endphp\">Return Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'refund-policy') @endphp\">Refund Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-conditions') @endphp\">Terms and conditions</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-of-use') @endphp\">Terms of Use</a></li><li><a href=\"@php echo route('shop.cms.page', 'contact-us') @endphp\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Connect With Us</span>\n                            <ul class=\"list-group\">\n                                <li><a href=\"#\"><span class=\"icon icon-facebook\"></span>Facebook </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-twitter\"></span> Twitter </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-instagram\"></span> Instagram </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-google-plus\"></span>Google+ </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-linkedin\"></span>LinkedIn </a></li>\n                            </ul>\n                        </div>\n                ",
                  "hostname": "http://localhost/graphql/public",
                  "defaultLocaleId": 1,
                  "baseCurrencyId": 1,
                  "rootCategoryId": 1,
                  "homeSeo": "{\"meta_title\": \"Demo store\", \"meta_keywords\": \"Demo store meta keyword\", \"meta_description\": \"Demo store meta description\"}",
                  "locales": [
                      {
                          "id": "1"
                      }
                  ],
                  "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                  "currencies": [
                      {
                          "id": "1"
                      }
                  ],
                  "inventorySources": [
                      {
                          "id": "1"
                      }
                  ],
                  "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                  "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                  "logoUrl": null,
                  "faviconUrl": null,
                  "success": null
              }
          ]
      }
  }
}
~~~
:::

### 2. Get Channel By ID

To get the  specific channel, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
  query channels{
    channel(id:1){
        id
        code
        name
        description
        theme
        homePageContent
        footerContent
        hostname
        defaultLocaleId
        baseCurrencyId
        rootCategoryId
        homeSeo
        locales{id}
        defaultLocale
        currencies{id}
        inventorySources{id}
        baseCurrency
        rootCategory
        logoUrl
        faviconUrl
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "channel": {
            "id": "1",
            "code": "default",
            "name": "Default",
            "description": null,
            "theme": "velocity",
            "homePageContent": "\n                    <p>@include(\"shop::home.slider\") @include(\"shop::home.featured-products\") @include(\"shop::home.new-products\")</p>\n                        <div class=\"banner-container\">\n                        <div class=\"left-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/1.webp data-src=http://localhost/graphql/public/themes/default/assets/images/1.webp class=\"lazyload\" alt=\"test\" width=\"720\" height=\"720\" />\n                        </div>\n                        <div class=\"right-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/2.webp data-src=http://localhost/graphql/public/themes/default/assets/images/2.webp class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/3.webp data-src=http://localhost/graphql/public/themes/default/assets/images/3.webp  class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                        </div>\n                    </div>\n                ",
            "footerContent": "\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Quick Links</span>\n                        <ul class=\"list-group\">\n                            <li><a href=\"@php echo route('shop.cms.page', 'about-us') @endphp\">About Us</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'return-policy') @endphp\">Return Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'refund-policy') @endphp\">Refund Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-conditions') @endphp\">Terms and conditions</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-of-use') @endphp\">Terms of Use</a></li><li><a href=\"@php echo route('shop.cms.page', 'contact-us') @endphp\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Connect With Us</span>\n                            <ul class=\"list-group\">\n                                <li><a href=\"#\"><span class=\"icon icon-facebook\"></span>Facebook </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-twitter\"></span> Twitter </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-instagram\"></span> Instagram </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-google-plus\"></span>Google+ </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-linkedin\"></span>LinkedIn </a></li>\n                            </ul>\n                        </div>\n                ",
            "hostname": "http://localhost/graphql/public",
            "defaultLocaleId": 1,
            "baseCurrencyId": 1,
            "rootCategoryId": 1,
            "homeSeo": "{\"meta_title\": \"Demo store\", \"meta_keywords\": \"Demo store meta keyword\", \"meta_description\": \"Demo store meta description\"}",
            "locales": [
                {
                    "id": "1"
                }
            ],
            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
            "currencies": [
                {
                    "id": "1"
                }
            ],
            "inventorySources": [
                {
                    "id": "1"
                }
            ],
            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
            "logoUrl": null,
            "faviconUrl": null,
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered Channels

You can get the filter data from  the channels by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
query channels{
    channels(input: {
            id: 1
            code: "default"
            hostname: "http://localhost/graphql/public"
        }){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          code
          name
          description
          theme
          homePageContent
          footerContent
          hostname
          defaultLocaleId
          baseCurrencyId
          rootCategoryId
          homeSeo
          locales{
              id
          }
          defaultLocale
          currencies{
              id
          }
          inventorySources{
              id
          }
          baseCurrency
          rootCategory
          logoUrl
          faviconUrl
          success
        }
    }
}
~~~

::: details Response
  ~~~json
  {
    "data": {
        "channels": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "code": "default",
                    "name": "Default",
                    "description": null,
                    "theme": "velocity",
                    "homePageContent": "\n                    <p>@include(\"shop::home.slider\") @include(\"shop::home.featured-products\") @include(\"shop::home.new-products\")</p>\n                        <div class=\"banner-container\">\n                        <div class=\"left-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/1.webp data-src=http://localhost/graphql/public/themes/default/assets/images/1.webp class=\"lazyload\" alt=\"test\" width=\"720\" height=\"720\" />\n                        </div>\n                        <div class=\"right-banner\">\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/2.webp data-src=http://localhost/graphql/public/themes/default/assets/images/2.webp class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                            <img src=http://localhost/graphql/public/themes/default/assets/images/3.webp data-src=http://localhost/graphql/public/themes/default/assets/images/3.webp  class=\"lazyload\" alt=\"test\" width=\"460\" height=\"330\" />\n                        </div>\n                    </div>\n                ",
                    "footerContent": "\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Quick Links</span>\n                        <ul class=\"list-group\">\n                            <li><a href=\"@php echo route('shop.cms.page', 'about-us') @endphp\">About Us</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'return-policy') @endphp\">Return Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'refund-policy') @endphp\">Refund Policy</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-conditions') @endphp\">Terms and conditions</a></li>\n                            <li><a href=\"@php echo route('shop.cms.page', 'terms-of-use') @endphp\">Terms of Use</a></li><li><a href=\"@php echo route('shop.cms.page', 'contact-us') @endphp\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"list-container\">\n                        <span class=\"list-heading\">Connect With Us</span>\n                            <ul class=\"list-group\">\n                                <li><a href=\"#\"><span class=\"icon icon-facebook\"></span>Facebook </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-twitter\"></span> Twitter </a></li>\n                                <li><a href=\"#\"><span class=\"icon icon-instagram\"></span> Instagram </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-google-plus\"></span>Google+ </a></li>\n                                <li><a href=\"#\"> <span class=\"icon icon-linkedin\"></span>LinkedIn </a></li>\n                            </ul>\n                        </div>\n                ",
                    "hostname": "http://localhost/graphql/public",
                    "defaultLocaleId": 1,
                    "baseCurrencyId": 1,
                    "rootCategoryId": 1,
                    "homeSeo": "{\"meta_title\": \"Demo store\", \"meta_keywords\": \"Demo store meta keyword\", \"meta_description\": \"Demo store meta description\"}",
                    "locales": [
                        {
                            "id": "1"
                        }
                    ],
                    "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
                    "currencies": [
                        {
                            "id": "1"
                        }
                    ],
                    "inventorySources": [
                        {
                            "id": "1"
                        }
                    ],
                    "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
                    "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
                    "logoUrl": null,
                    "faviconUrl": null,
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
  :::

### 4. Create a new Channel

  To create a Channel, you have to perform mutation on Channel and paas the related fields in the request.
  API call resource will create a new Channel, only if the admin has logged in.

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
    createChannel(input:{
      code:"newca"
      name:"nerty"
      description:"ajsyg"
      theme:"gdg"
      homePageContent:"fhg"
      footerContent:"fh"
      hostname:"http://bag1.com"
      defaultLocaleId:1
      baseCurrencyId:1
      rootCategoryId:1
      locales:1
      currencies:1
      inventorySources:1
      seoTitle:"gfyj"
      seoDescription:"gcg"
      seoKeywords:"gvgh"
    })
    {
      id
      code
      name
      description
      theme
      homePageContent
      footerContent
      hostname
      defaultLocaleId
      baseCurrencyId
      rootCategoryId
      homeSeo
      locales{id}
      defaultLocale
      currencies{id}
      inventorySources{id}
      baseCurrency
      rootCategory
      logoUrl
      faviconUrl
      success
    }
  }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createChannel": {
            "id": "2",
            "code": "newca",
            "name": "nerty",
            "description": "ajsyg",
            "theme": "gdg",
            "homePageContent": "fhg",
            "footerContent": "fh",
            "hostname": "http://bag1.com",
            "defaultLocaleId": 1,
            "baseCurrencyId": 1,
            "rootCategoryId": 1,
            "homeSeo": "{\"meta_title\":\"gfyj\",\"meta_description\":\"gcg\",\"meta_keywords\":\"gvgh\"}",
            "locales": [
                {
                    "id": "1"
                }
            ],
            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
            "currencies": [
                {
                    "id": "1"
                }
            ],
            "inventorySources": [
                {
                    "id": "1"
                }
            ],
            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
            "logoUrl": null,
            "faviconUrl": null,
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update Channel

By using this API call you can update the channel. To do this , you have to perform update mutation on Channel and paas the related fields in the request.
  API call resource will update a Channel, only if the admin has logged in.


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
    updateChannel(id:3,input:{
      code:"newca"
      name:"newchannel"
      description:"fjy"
      theme:"default"
      homePageContent:"wfedh"
      footerContent:"wygdeyjufw"
      hostname:"http:newhost"
      defaultLocaleId:1
      baseCurrencyId:1
      rootCategoryId:1
      locales:1
      currencies:1
      inventorySources:1
      seoTitle:"hghefd"
      seoDescription:"whfj"
      seoKeywords:"wedf"
    })
   {
      id
      code
      name
      description
      theme
      homePageContent
      footerContent
      hostname
      defaultLocaleId
      baseCurrencyId
      rootCategoryId
      homeSeo
      locales{id}
      defaultLocale
      currencies{id}
      inventorySources{id}
      baseCurrency
      rootCategory
      logoUrl
      faviconUrl
      success  
    }
  }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateChannel": {
            "id": "3",
            "code": "newchannel",
            "name": "newchannel",
            "description": "fjy",
            "theme": "default",
            "homePageContent": "wfedh",
            "footerContent": "wygdeyjufw",
            "hostname": "http:newhost",
            "defaultLocaleId": 1,
            "baseCurrencyId": 1,
            "rootCategoryId": 1,
            "homeSeo": "{\"meta_title\":\"hghefd\",\"meta_description\":\"whfj\",\"meta_keywords\":\"wedf\"}",
            "locales": [
                {
                    "id": "1"
                }
            ],
            "defaultLocale": "{\"id\":1,\"code\":\"en\",\"name\":\"English\",\"created_at\":null,\"updated_at\":null,\"direction\":\"ltr\",\"locale_image\":null}",
            "currencies": [
                {
                    "id": "1"
                }
            ],
            "inventorySources": [
                {
                    "id": "1"
                }
            ],
            "baseCurrency": "{\"id\":1,\"code\":\"USD\",\"name\":\"US Dollar\",\"created_at\":null,\"updated_at\":null,\"symbol\":\"$\"}",
            "rootCategory": "{\"id\":1,\"position\":1,\"image\":null,\"status\":1,\"_lft\":1,\"_rgt\":14,\"parent_id\":null,\"created_at\":\"2021-05-05T10:06:44.000000Z\",\"updated_at\":\"2021-05-05T10:06:44.000000Z\",\"display_mode\":\"products_and_description\",\"category_icon_path\":null,\"additional\":null,\"name\":\"Root\",\"description\":\"Root\",\"slug\":\"root\",\"url_path\":\"\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"translations\":[{\"id\":1,\"name\":\"Root\",\"slug\":\"root\",\"description\":\"Root\",\"meta_title\":\"\",\"meta_description\":\"\",\"meta_keywords\":\"\",\"category_id\":1,\"locale\":\"en\",\"locale_id\":null,\"url_path\":\"\"}]}",
            "logoUrl": null,
            "faviconUrl": null,
            "success": null
        }
    }
  }
  ~~~
:::

### 6. Delete a Channel

To delete a Channel, you have to perform mutation on Channel by passing the id of that Channel.
API call resource will channel a Channel, only if the admin has logged in.

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
        deleteChannel(id:3)
        {
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteChannel": {
            "success": "Channel deleted successfully."
        }
    }
  }
  ~~~
:::

## Sliders

In this section, we will see all the APIs which are related to Slider.

### 1. Get all Slider

You can get all the Slider from the Bagisto store. You can achieve this job by using the `slider` API call.

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
    query sliders{
      sliders(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }   
        data{
          id
          title
          path
          content
          channelId
          locale
          sliderPath
          imgPath
          channel{
              id
          }
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "sliders": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "title": "testslider",
                    "path": "slider_images/Default/1L0uZrZrMaadZGRh8pNCLcKXNhrhQugs84AXRkui.jpg",
                    "content": "<p>testcontent</p>",
                    "channelId": "1",
                    "locale": "en",
                    "sliderPath": "test",
                    "imgPath": null,
                    "channel": {
                        "id": "1"
                    }
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Slider By ID

To get the  specific Slider, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query slider{
      slider(id:1){
        id
        title
        path
        content
        channelId
        locale
        sliderPath
        imgPath
        channel{
            id
        }
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "slider": {
            "id": "1",
            "title": "testslider",
            "path": "slider_images/Default/1L0uZrZrMaadZGRh8pNCLcKXNhrhQugs84AXRkui.jpg",
            "content": "<p>testcontent</p>",
            "channelId": "1",
            "locale": "en",
            "sliderPath": "test",
            "imgPath": null,
            "channel": {
                "id": "1"
            }
        }
    }
  }
  ~~~

:::

### 3. Get Filtered Sliders

You can get the filter data from  the Sliders by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
    query sliders{
      sliders(input: {
        id:1
        title: "testslider"
        locale: "en"
      },page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }   
        data{
          id
          title
          path
          content
          channelId
          locale
          sliderPath
          imgPath
          channel{
            id
          }
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "sliders": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "title": "testslider",
                    "path": "slider_images/Default/1L0uZrZrMaadZGRh8pNCLcKXNhrhQugs84AXRkui.jpg",
                    "content": "<p>testcontent</p>",
                    "channelId": "1",
                    "locale": "en",
                    "sliderPath": "test",
                    "imgPath": null,
                    "channel": {
                        "id": "1"
                    }
                }
            ]
        }
    }
  }
  ~~~
:::

## User Roles

In this section, we will see all the APIs which are related to User Roles.

### 1. Get all User Roles

You can get all the User Roles from the Bagisto store. You can achieve this job by using the `user roles` API call.

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
    query roles{
      roles(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          name
          description
          permissionType
          permissions
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
        "roles": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "Administrator",
                    "description": "Administrator role",
                    "permissionType": "all",
                    "permissions": null,
                    "createdAt": null,
                    "updatedAt": null,
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get User Roles By ID

To get the  specific User Roles, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query role{
      role(id:1){
        id
        name
        description
        permissionType
        permissions
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
        "role": {
            "id": "1",
            "name": "Administrator",
            "description": "Administrator role",
            "permissionType": "all",
            "permissions": null,
            "createdAt": null,
            "updatedAt": null,
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered User Roles

You can get the filter data from  the User Roles by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
    query roles{
      roles(input: {
        name: "Administrator"
        permissionType: "all"
      }, page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          name
          description
          permissionType
          permissions
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
        "roles": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "name": "Administrator",
                    "description": "Administrator role",
                    "permissionType": "all",
                    "permissions": null,
                    "createdAt": null,
                    "updatedAt": null,
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new User Roles

  To create a User Roles, you have to perform mutation on User Roles and paas the related fields in the request.
  API call resource will create a new User Roles, only if the admin has logged in.

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
        createRole(input:{
          name:"custom"
          description:"rle description fo user"
          permissionType:"Custom"
          permissions:["dashboard","sales","sales.orders"]
        }){
          id
          name
          description
          permissionType
          permissions
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
        "createRole": {
            "id": "2",
            "name": "custom",
            "description": "rle description fo user",
            "permissionType": "Custom",
            "permissions": [
                "dashboard",
                "sales",
                "sales.orders"
            ],
            "createdAt": "2021-05-21 17:35:21",
            "updatedAt": "2021-05-21 17:35:21",
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update User Roles

By using this API call you can update the User Roles. To do this , you have to perform update mutation on User Roles and paas the related fields in the request.
  API call resource will update a User Roles, only if the admin has logged in.


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
        updateRole(id:2,input:{
          name:"custom"
          description:"hsdh"
          permissionType:"Custom"
          permissions:["Dashboard","Sales","Sales.Orders","Sales.Invoice","Sales.Shipment"]
        })
        {        
          id
          name
          description
          permissionType
          permissions
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
        "updateRole": {
            "id": "2",
            "name": "custom",
            "description": "hsdh",
            "permissionType": "Custom",
            "permissions": [
                "Dashboard",
                "Sales",
                "Sales.Orders",
                "Sales.Invoice",
                "Sales.Shipment"
            ],
            "createdAt": "2021-05-21 17:35:21",
            "updatedAt": "2021-05-21 17:38:35",
            "success": null
        }
    }
  }
  ~~~
:::

### 6. Delete a User Roles

To delete a User Roles, you have to perform mutation on User Roles by passing the id of that User Roles.
API call resource will User Roles a User Roles, only if the admin has logged in.

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
        deleteRole(id:2){
            success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
      "deleteRole": {
        "success": "Role deleted successfully."
      }
    }
  }
  ~~~
:::

## Tax Rates

In this section, we will see all the APIs which are related to Tax Rates.

### 1. Get all Tax Rates

You can get all the Tax Rates from the Bagisto store. You can achieve this job by using the `tax rates` API call.

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
    query taxRates{
      taxRates(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total      
        }
        data{
          id
          identifier
          isZip
          zipCode
          zipFrom
          zipTo
          state
          country
          taxRate
          taxCategories{
            id
            code
            name
          }
          success      
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "taxRates": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "identifier": "test",
                    "isZip": 1,
                    "zipCode": null,
                    "zipFrom": "46077",
                    "zipTo": "46080",
                    "state": "KL",
                    "country": "IN",
                    "taxRate": 3,
                    "taxCategories": [],
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Tax Rates By ID

To get the  specific Tax Rates, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query taxRate{
      taxRate(id:1){
        id
        identifier
        isZip
        zipCode
        zipFrom
        zipTo
        state
        country
        taxRate
        taxCategories{
          id
          code
          name
        }
        success        
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "taxRate": {
            "id": "1",
            "identifier": "test",
            "isZip": 1,
            "zipCode": null,
            "zipFrom": "46077",
            "zipTo": "46080",
            "state": "KL",
            "country": "IN",
            "taxRate": 3,
            "taxCategories": [],
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered Tax Rates

You can get the filter data from  the Tax Rates by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
    query taxRates{
      taxRates(input: {
        id: 1
        identifier: "test"
        isZip: 1
      }, page:1){
      paginatorInfo {
        count
        currentPage
        lastPage
        total
      }
      data{
        id
        identifier
        isZip
        zipCode
        zipFrom
        zipTo
        state
        country
        taxRate
        taxCategories{
          id
          code
          name
        }
        success    
      }
    }
  }
~~~

::: details Response
  ~~~json
  {
     "data": {
        "taxRates": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "identifier": "test",
                    "isZip": 1,
                    "zipCode": null,
                    "zipFrom": "46077",
                    "zipTo": "46080",
                    "state": "KL",
                    "country": "IN",
                    "taxRate": 3,
                    "taxCategories": [],
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new Tax Rate

  To create a Tax Rate, you have to perform mutation on Tax Rate and paas the related fields in the request.
  API call resource will create a new Tax Rate, only if the admin has logged in.

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
        createTaxRate(input:{
          identifier:"taxrate3"
          isZip:1
          zipFrom:"201301"
          zipTo:"273003"
          state:"UP"
          country:"IN"
          taxRate:5
        }){
          id
          identifier
          isZip
          zipCode
          zipFrom
          zipTo
          state
          country
          taxRate
          taxCategories{id}
          success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createTaxRate": {
            "id": "2",
            "identifier": "taxrate3",
            "isZip": 1,
            "zipCode": null,
            "zipFrom": "201301",
            "zipTo": "273003",
            "state": "UP",
            "country": "IN",
            "taxRate": 5,
            "taxCategories": [],
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update Tax Rate

By using this API call you can update the Tax Rate. To do this , you have to perform update mutation on Tax Rate and paas the related fields in the request.
  API call resource will update a Tax Rate, only if the admin has logged in.


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
        updateTaxRate(id:2,input:{
          identifier:"NEW"
          isZip:1
          zipCode:"0"
          zipFrom:"201301"
          zipTo:"273003"
          state:"UP"
          country:"IN"
          taxRate:2
        }){
          id
          identifier
          isZip
          zipCode
          zipFrom
          zipTo
          state
          country
          taxRate
          taxCategories{id}
          success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateTaxRate": {
            "id": "2",
            "identifier": "NEW",
            "isZip": 1,
            "zipCode": "0",
            "zipFrom": "201301",
            "zipTo": "273003",
            "state": "UP",
            "country": "IN",
            "taxRate": 2,
            "taxCategories": [],
            "success": null
        }
    }
  }
  ~~~
:::

### 6. Delete a Tax Rate

To delete a Tax Rate, you have to perform mutation on Tax Rate by passing the id of that Tax Rate.
API call resource will Tax Rate a Tax Rate, only if the admin has logged in.

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
        deleteTaxRate(id:2){
            success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteTaxRate": {
            "success": "Tax Rate deleted successfully."
        }
    }
  }
  ~~~
:::

## Tax Categories

In this section, we will see all the APIs which are related to Tax Categories.

### 1. Get all Tax Categories

You can get all the Tax Categories from the Bagisto store. You can achieve this job by using the `tax categories` API call.

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
    query taxCategories{
      taxCategories(page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data{
          id
          code
          name
          description
          taxRates{id}
          success
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "taxCategories": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "code": "test1",
                    "name": "testCategory",
                    "description": "testCategory",
                    "taxRates": [
                        {
                            "id": "1"
                        }
                    ],
                    "success": null
                }
            ]
        }
    }
}
~~~
:::

### 2. Get Tax Category By ID

To get the  specific Tax Category, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query taxCategory{
      taxCategory(id:1){ 
        id
        code
        name
        description
        taxRates{
          id
          identifier
          isZip
          zipCode
          zipFrom
          zipTo
          state
          country
          taxRate
        }
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "taxCategory": {
            "id": "1",
            "code": "test1",
            "name": "testCategory",
            "description": "testCategory",
            "taxRates": [
                {
                    "id": "1",
                    "identifier": "test",
                    "isZip": 1,
                    "zipCode": null,
                    "zipFrom": "46077",
                    "zipTo": "46080",
                    "state": "KL",
                    "country": "IN",
                    "taxRate": 3
                }
            ],
            "success": null
        }
    }
  }
  ~~~

:::

### 3. Get Filtered Tax Categories

You can get the filter data from  the Tax Categories by passing the input fileds in the request and that you want in the response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query

~~~query
    query taxCategories{
      taxCategories(input: {
        id: 1
        code: "test1"
        name: "testCategory"
      },page:1){
        paginatorInfo {
          count
          currentPage
          lastPage
          total
      
        }
        data{
          id
          code
          name
          description
          taxRates{id}
          success
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "taxCategories": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "1",
                    "code": "test1",
                    "name": "testCategory",
                    "description": "testCategory",
                    "taxRates": [
                        {
                            "id": "1"
                        }
                    ],
                    "success": null
                }
            ]
        }
    }
  }
  ~~~
:::

### 4. Create a new Tax Category

  To create a Tax Category, you have to perform mutation on Tax Category and paas the related fields in the request.
  API call resource will create a new Tax Category, only if the admin has logged in.

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
      createTaxCategory(input:{
        code:"taxablegoods"
        name:"TaxableGoods"
        description:"hgasgsja"
        taxrates:1
      })
      {
        id
        code
        name
        description
        taxRates{id}
        success
      }
    } 
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "createTaxCategory": {
            "id": "2",
            "code": "taxablegoods",
            "name": "TaxableGoods",
            "description": "hgasgsja",
            "taxRates": [
                {
                    "id": "1"
                }
            ],
            "success": null
        }
    }
  }
  ~~~
:::

### 5. Update Tax Category

By using this API call you can update the Tax Category. To do this , you have to perform update mutation on Tax Category and paas the related fields in the request.
  API call resource will update a Tax Category, only if the admin has logged in.


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
      updateTaxCategory(id:2,input:{
        code:"taxable"
        name:"TaxableGoods"
        description:"adding taxrate"
        taxrates:1

      }){
        id
        code
        name
        description
        taxRates{id}
        success
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateTaxCategory": {
            "id": "2",
            "code": "taxable",
            "name": "TaxableGoods",
            "description": "adding taxrate",
            "taxRates": [
                {
                    "id": "1"
                }
            ],
            "success": null
        }
    }
  }
  ~~~
:::

### 6. Delete a Tax Category

To delete a Tax Category, you have to perform mutation on Tax Category by passing the id of that Tax Category.
API call resource will Tax Category a Tax Category, only if the admin has logged in.

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
        deleteTaxCategory(id:2){
          success
        }
      }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "deleteTaxCategory": {
            "success": "Tax Category deleted successfully."
        }
    }
  }
  ~~~
:::

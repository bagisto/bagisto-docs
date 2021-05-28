# Categories

In this section, we will see all the APIs which are related to Categories.

##  Get All Categories

You can get all the Categories from the Bagisto store. You can achieve this job by using the `Categories` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: You can pass all the related fileds that you want in response.

- Query
  ~~~query
    query categories {
      categories {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
          id
          name
          description
          slug
          urlPath
          imageUrl
          metaTitle
          metaDescription
          metaKeywords
          position
          status
          displayMode
          parentId
          filterableAttributes {
            id
            adminName
            code
            type
            position
          }
          translations {
            id
            name
            description
            localeId
            locale
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
        "categories": {
            "paginatorInfo": {
                "count": 2,
                "currentPage": 1,
                "lastPage": 1,
                "total": 2
            },
            "data": [
                {
                    "id": "1",
                    "name": "Root",
                    "description": "Root",
                    "slug": "root",
                    "urlPath": "",
                    "imageUrl": null,
                    "metaTitle": "",
                    "metaDescription": "",
                    "metaKeywords": "",
                    "position": 1,
                    "status": true,
                    "displayMode": "products_and_description",
                    "parentId": null,
                    "filterableAttributes": [],
                    "translations": [
                        {
                            "id": "1",
                            "name": "Root",
                            "description": "Root",
                            "localeId": null,
                            "locale": "en"
                        }
                    ],
                    "createdAt": "2021-05-05 15:36:44",
                    "updatedAt": "2021-05-05 15:36:44"
                },
                {
                    "id": "2",
                    "name": "Shop",
                    "description": "<p>Test Category</p>",
                    "slug": "shop",
                    "urlPath": "shop",
                    "imageUrl": "http://localhost/graphql/public/storage/category/2/veI5gArm9nBKUFPwvvmmoRccLdtlJXhHBtaGzL4a.jpg",
                    "metaTitle": "",
                    "metaDescription": "",
                    "metaKeywords": "",
                    "position": 1,
                    "status": true,
                    "displayMode": "products_and_description",
                    "parentId": "1",
                    "filterableAttributes": [
                        {
                            "id": "11",
                            "adminName": "Price",
                            "code": "price",
                            "type": "price",
                            "position": 13
                        },
                        {
                            "id": "23",
                            "adminName": "Color",
                            "code": "color",
                            "type": "select",
                            "position": 26
                        },
                        {
                            "id": "24",
                            "adminName": "Size",
                            "code": "size",
                            "type": "select",
                            "position": 27
                        },
                        {
                            "id": "25",
                            "adminName": "Brand",
                            "code": "brand",
                            "type": "select",
                            "position": 28
                        }
                    ],
                    "translations": [
                        {
                            "id": "2",
                            "name": "Shop",
                            "description": "<p>Test Category</p>",
                            "localeId": "1",
                            "locale": "en"
                        },
                        {
                            "id": "3",
                            "name": "Shop",
                            "description": "<p>Test Category</p>",
                            "localeId": "3",
                            "locale": "nl"
                        },
                        {
                            "id": "4",
                            "name": "Shop",
                            "description": "<p>Test Category</p>",
                            "localeId": "4",
                            "locale": "tr"
                        }
                    ],
                    "createdAt": "2021-05-27 18:06:22",
                    "updatedAt": "2021-05-27 18:06:23"
                }
            ]
        }
    }
}
~~~
:::

##  Get Category Data By ID

To get the  specific Category, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query category {
      category(id: 2) {
        id
        name
        description
        slug
        urlPath
        imageUrl
        metaTitle
        metaDescription
        metaKeywords
        position
        status
        displayMode
        parentId
        filterableAttributes {
          id
          adminName
          code
          type
          position
        }
        translations {
          id
          name
          description
          localeId
          locale
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
        "category": {
            "id": "2",
            "name": "Shop",
            "description": "<p>Test Category</p>",
            "slug": "shop",
            "urlPath": "shop",
            "imageUrl": "http://localhost/graphql/public/storage/category/2/veI5gArm9nBKUFPwvvmmoRccLdtlJXhHBtaGzL4a.jpg",
            "metaTitle": "",
            "metaDescription": "",
            "metaKeywords": "",
            "position": 1,
            "status": true,
            "displayMode": "products_and_description",
            "parentId": "1",
            "filterableAttributes": [
                {
                    "id": "11",
                    "adminName": "Price",
                    "code": "price",
                    "type": "price",
                    "position": 13
                },
                {
                    "id": "23",
                    "adminName": "Color",
                    "code": "color",
                    "type": "select",
                    "position": 26
                },
                {
                    "id": "24",
                    "adminName": "Size",
                    "code": "size",
                    "type": "select",
                    "position": 27
                },
                {
                    "id": "25",
                    "adminName": "Brand",
                    "code": "brand",
                    "type": "select",
                    "position": 28
                }
            ],
            "translations": [
                {
                    "id": "2",
                    "name": "Shop",
                    "description": "<p>Test Category</p>",
                    "localeId": "1",
                    "locale": "en"
                },
                {
                    "id": "3",
                    "name": "Shop",
                    "description": "<p>Test Category</p>",
                    "localeId": "3",
                    "locale": "nl"
                },
                {
                    "id": "4",
                    "name": "Shop",
                    "description": "<p>Test Category</p>",
                    "localeId": "4",
                    "locale": "tr"
                }
            ],
            "createdAt": "2021-05-27 18:06:22",
            "updatedAt": "2021-05-27 18:06:23"
        }
    }
  }
  ~~~

:::

##  Get Filtered Categories

You can get the filter data from  the Categories by passing the input fileds in the request and that you want in the response.

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
    query categories {
      categories(page:1, input: {
        id:2
        name:"Shop"
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
          description
          slug
          urlPath
          imageUrl
          metaTitle
          metaDescription
          metaKeywords
          position
          status
          displayMode
          parentId
          filterableAttributes {
            id
            adminName
            code
            type
            position
          }
          translations {
            id
            name
            description
            localeId
            locale
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
        "categories": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
                {
                    "id": "2",
                    "name": "Shop",
                    "description": "<p>Test Category</p>",
                    "slug": "shop",
                    "urlPath": "shop",
                    "imageUrl": "http://localhost/graphql/public/storage/category/2/veI5gArm9nBKUFPwvvmmoRccLdtlJXhHBtaGzL4a.jpg",
                    "metaTitle": "",
                    "metaDescription": "",
                    "metaKeywords": "",
                    "position": 1,
                    "status": true,
                    "displayMode": "products_and_description",
                    "parentId": "1",
                    "filterableAttributes": [
                        {
                            "id": "11",
                            "adminName": "Price",
                            "code": "price",
                            "type": "price",
                            "position": 13
                        },
                        {
                            "id": "23",
                            "adminName": "Color",
                            "code": "color",
                            "type": "select",
                            "position": 26
                        },
                        {
                            "id": "24",
                            "adminName": "Size",
                            "code": "size",
                            "type": "select",
                            "position": 27
                        },
                        {
                            "id": "25",
                            "adminName": "Brand",
                            "code": "brand",
                            "type": "select",
                            "position": 28
                        }
                    ],
                    "translations": [
                        {
                            "id": "2",
                            "name": "Shop",
                            "description": "<p>Test Category</p>",
                            "localeId": "1",
                            "locale": "en"
                        },
                        {
                            "id": "3",
                            "name": "Shop",
                            "description": "<p>Test Category</p>",
                            "localeId": "3",
                            "locale": "nl"
                        },
                        {
                            "id": "4",
                            "name": "Shop",
                            "description": "<p>Test Category</p>",
                            "localeId": "4",
                            "locale": "tr"
                        }
                    ],
                    "createdAt": "2021-05-27 18:06:22",
                    "updatedAt": "2021-05-27 18:06:23"
                }
            ]
        }
    }
  }
  ~~~
:::

##  Get All Filterable Attributes

You can get all the Filterable Attributes from the Bagisto store. You can achieve this job by using the `Filterable Attributes` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

**Note**: You can pass all the related fileds that you want in response.

- Query
  ~~~query
    query filterableAttributes {
      filterableAttributes {
        id
        code
        adminName
        type
        position
        isRequired
        isUnique
        validation
        valuePerLocale
        valuePerChannel
        isFilterable
        isConfigurable
        isVisibleOnFront
        isUserDefined
        swatchType
        useInFlat
        isComparable
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "filterableAttributes": [
            {
                "id": "11",
                "code": "price",
                "adminName": "Price",
                "type": "price",
                "position": 13,
                "isRequired": true,
                "isUnique": false,
                "validation": "decimal",
                "valuePerLocale": false,
                "valuePerChannel": false,
                "isFilterable": true,
                "isConfigurable": false,
                "isVisibleOnFront": false,
                "isUserDefined": false,
                "swatchType": null,
                "useInFlat": true,
                "isComparable": true
            },
            {
                "id": "23",
                "code": "color",
                "adminName": "Color",
                "type": "select",
                "position": 26,
                "isRequired": false,
                "isUnique": false,
                "validation": null,
                "valuePerLocale": false,
                "valuePerChannel": false,
                "isFilterable": true,
                "isConfigurable": true,
                "isVisibleOnFront": false,
                "isUserDefined": true,
                "swatchType": null,
                "useInFlat": true,
                "isComparable": false
            },
            {
                "id": "24",
                "code": "size",
                "adminName": "Size",
                "type": "select",
                "position": 27,
                "isRequired": false,
                "isUnique": false,
                "validation": null,
                "valuePerLocale": false,
                "valuePerChannel": false,
                "isFilterable": true,
                "isConfigurable": true,
                "isVisibleOnFront": false,
                "isUserDefined": true,
                "swatchType": null,
                "useInFlat": true,
                "isComparable": false
            },
            {
                "id": "25",
                "code": "brand",
                "adminName": "Brand",
                "type": "select",
                "position": 28,
                "isRequired": false,
                "isUnique": false,
                "validation": null,
                "valuePerLocale": false,
                "valuePerChannel": false,
                "isFilterable": true,
                "isConfigurable": false,
                "isVisibleOnFront": true,
                "isUserDefined": true,
                "swatchType": null,
                "useInFlat": true,
                "isComparable": false
            }
        ]
    }
}
~~~
:::

##  Create a new Category

  To create a Category, you have to perform mutation on Category and paas the related fields in the request.
  API call resource will create a new Category, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createCategory {
      createCategory(input: {
        name:"Women's Cloths"
        locale: "all"
        slug: "women-cloths"
        description: "demo women Cloths description"
        status: false
        position: 1
        displayMode: "products_and_description"
        parentId: 2
        metaTitle: "demo women Cloths meta title"
        metaDescription: "demo Cloths meta title"
        metaKeywords: "demo women Cloths meta title"
        image: "http://graphqlnew.com/storage/category/4/NnPWmwMBRDcpPSfZCIhgska892t9f4zaI10nrMDu.jpg"
      }) {
        id
        name
        description
        slug
        urlPath
        imageUrl
        metaTitle
        metaDescription
        metaKeywords
        position
        status
        displayMode
        parentId
        filterableAttributes {
          id
          adminName
          code
          type
          position
        }
        translations {
          id
          name
          description
          localeId
          locale
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
        "createCategory": {
            "id": "3",
            "name": "Women's Cloths",
            "description": "demo women Cloths description",
            "slug": "women-cloths",
            "urlPath": null,
            "imageUrl": null,
            "metaTitle": "demo women Cloths meta title",
            "metaDescription": "demo Cloths meta title",
            "metaKeywords": "demo women Cloths meta title",
            "position": 1,
            "status": false,
            "displayMode": "products_and_description",
            "parentId": "2",
            "filterableAttributes": [],
            "translations": [
                {
                    "id": "5",
                    "name": "Women's Cloths",
                    "description": "demo women Cloths description",
                    "localeId": "1",
                    "locale": "en"
                },
                {
                    "id": "6",
                    "name": "Women's Cloths",
                    "description": "demo women Cloths description",
                    "localeId": "3",
                    "locale": "nl"
                },
                {
                    "id": "7",
                    "name": "Women's Cloths",
                    "description": "demo women Cloths description",
                    "localeId": "4",
                    "locale": "tr"
                }
            ],
            "createdAt": "2021-05-27 18:20:43",
            "updatedAt": "2021-05-27 18:20:44"
        }
    }
  }
  ~~~
:::

##  Update a Category

By using this API call you can update the Category. To do this , you have to perform update mutation on Category and paas the related fields in the request.
API call will update a Category, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateCategory {
      updateCategory(id: 3, input: {
        name:"Women Collection"
        locale: "fr"
        slug: "women-cloths"
        description: "Description de la Women Collection"
        status: true
        position: 1
        displayMode: "products_and_description"
        parentId: 2
        metaTitle: "Meta titre de Women Collection"
        metaDescription: "Meta description de la Women Collection"
        metaKeywords: "Méta-mots-clés Women Collection"
        image: "http://graphqlnew.com/storage/category/3/GVATxwzSS8nbWfiA7WWnpnjmsFQMnW9prOrItqpf.jpg"
      }) {
        id
        name
        description
        slug
        urlPath
        imageUrl
        metaTitle
        metaDescription
        metaKeywords
        position
        status
        displayMode
        parentId
        filterableAttributes {
          id
          adminName
          code
          type
          position
        }
        translations {
          id
          name
          description
          localeId
          locale
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
        "updateCategory": {
            "id": "3",
            "name": "Women's Cloths",
            "description": "demo women Cloths description",
            "slug": "women-cloths",
            "urlPath": "shop/women-cloths",
            "imageUrl": null,
            "metaTitle": "demo women Cloths meta title",
            "metaDescription": "demo Cloths meta title",
            "metaKeywords": "demo women Cloths meta title",
            "position": 1,
            "status": true,
            "displayMode": "products_and_description",
            "parentId": "2",
            "filterableAttributes": [],
            "translations": [
                {
                    "id": "5",
                    "name": "Women's Cloths",
                    "description": "demo women Cloths description",
                    "localeId": "1",
                    "locale": "en"
                },
                {
                    "id": "6",
                    "name": "Women's Cloths",
                    "description": "demo women Cloths description",
                    "localeId": "3",
                    "locale": "nl"
                },
                {
                    "id": "7",
                    "name": "Women's Cloths",
                    "description": "demo women Cloths description",
                    "localeId": "4",
                    "locale": "tr"
                }
            ],
            "createdAt": "2021-05-27 18:20:43",
            "updatedAt": "2021-05-27 18:24:26"
        }
    }
  }
  ~~~
:::

##  Delete a Category

To delete a Category, you have to perform mutation on Category by passing the id of that Category.
API call will delete a Category, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteCategory {
      deleteCategory(id: 3) {
          success
      }
    }

  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteCategory": {
            "success": "Category deleted successfully."
        }
    }
  }
  ~~~
:
# Attributes

In this section, we will see all the APIs which are related to Attributes.

##  Get All Attributes

You can get all the Attributes from the Bagisto store. You can achieve this job by using the `Attributes` API call.

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
    query attributes {
      attributes(page: 1) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
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
          options {
            id
            adminName
            swatchValue
            sortOrder
            attributeId
            attribute {
              id
              adminName
            }
            translations {
              id
              locale
              label
              attributeOptionId
            }
          }
          translations {
            id
            locale
            name
            attributeId
          }
        }
      }
    }
  ~~~

::: details Response

~~~json
{
  "data": {
        "attributes": {
            "paginatorInfo": {
                "count": 10,
                "currentPage": 1,
                "lastPage": 3,
                "total": 27
            },
            "data": [
                {
                    "id": "1",
                    "code": "sku",
                    "adminName": "SKU",
                    "type": "text",
                    "position": 1,
                    "isRequired": true,
                    "isUnique": true,
                    "validation": null,
                    "valuePerLocale": false,
                    "valuePerChannel": false,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "1",
                            "locale": "en",
                            "name": "SKU",
                            "attributeId": "1"
                        }
                    ]
                },
                {
                    "id": "2",
                    "code": "name",
                    "adminName": "Name",
                    "type": "text",
                    "position": 3,
                    "isRequired": true,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": true,
                    "valuePerChannel": true,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": true,
                    "options": [],
                    "translations": [
                        {
                            "id": "2",
                            "locale": "en",
                            "name": "Name",
                            "attributeId": "2"
                        }
                    ]
                },
                {
                    "id": "3",
                    "code": "url_key",
                    "adminName": "URL Key",
                    "type": "text",
                    "position": 4,
                    "isRequired": true,
                    "isUnique": true,
                    "validation": null,
                    "valuePerLocale": false,
                    "valuePerChannel": false,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "3",
                            "locale": "en",
                            "name": "URL Key",
                            "attributeId": "3"
                        }
                    ]
                },
                {
                    "id": "4",
                    "code": "tax_category_id",
                    "adminName": "Tax Category",
                    "type": "select",
                    "position": 5,
                    "isRequired": false,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": false,
                    "valuePerChannel": true,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "4",
                            "locale": "en",
                            "name": "Tax Category",
                            "attributeId": "4"
                        }
                    ]
                },
                {
                    "id": "5",
                    "code": "new",
                    "adminName": "New",
                    "type": "boolean",
                    "position": 6,
                    "isRequired": false,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": false,
                    "valuePerChannel": false,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "5",
                            "locale": "en",
                            "name": "New",
                            "attributeId": "5"
                        }
                    ]
                },
                {
                    "id": "6",
                    "code": "featured",
                    "adminName": "Featured",
                    "type": "boolean",
                    "position": 7,
                    "isRequired": false,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": false,
                    "valuePerChannel": false,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "6",
                            "locale": "en",
                            "name": "Featured",
                            "attributeId": "6"
                        }
                    ]
                },
                {
                    "id": "7",
                    "code": "visible_individually",
                    "adminName": "Visible Individually",
                    "type": "boolean",
                    "position": 9,
                    "isRequired": true,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": false,
                    "valuePerChannel": false,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "7",
                            "locale": "en",
                            "name": "Visible Individually",
                            "attributeId": "7"
                        }
                    ]
                },
                {
                    "id": "8",
                    "code": "status",
                    "adminName": "Status",
                    "type": "boolean",
                    "position": 10,
                    "isRequired": true,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": false,
                    "valuePerChannel": false,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "8",
                            "locale": "en",
                            "name": "Status",
                            "attributeId": "8"
                        }
                    ]
                },
                {
                    "id": "9",
                    "code": "short_description",
                    "adminName": "Short Description",
                    "type": "textarea",
                    "position": 11,
                    "isRequired": true,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": true,
                    "valuePerChannel": true,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": false,
                    "options": [],
                    "translations": [
                        {
                            "id": "9",
                            "locale": "en",
                            "name": "Short Description",
                            "attributeId": "9"
                        }
                    ]
                },
                {
                    "id": "10",
                    "code": "description",
                    "adminName": "Description",
                    "type": "textarea",
                    "position": 12,
                    "isRequired": true,
                    "isUnique": false,
                    "validation": null,
                    "valuePerLocale": true,
                    "valuePerChannel": true,
                    "isFilterable": false,
                    "isConfigurable": false,
                    "isVisibleOnFront": false,
                    "isUserDefined": false,
                    "swatchType": null,
                    "useInFlat": true,
                    "isComparable": true,
                    "options": [],
                    "translations": [
                        {
                            "id": "10",
                            "locale": "en",
                            "name": "Description",
                            "attributeId": "10"
                        }
                    ]
                }
            ]
        }
    }
}
~~~
:::

##  Get Attribute Data By ID

To get the  specific Attribute, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query attribute {
      attribute(id: 1) {
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
        options {
          id
          adminName
          swatchValue
          sortOrder
          attributeId
          attribute {
            id
            adminName
          }
          translations {
            id
            locale
            label
            attributeOptionId
          }
        }
        translations {
          id
          locale
          name
          attributeId
        }
      }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "attribute": {
            "id": "1",
            "code": "sku",
            "adminName": "SKU",
            "type": "text",
            "position": 1,
            "isRequired": true,
            "isUnique": true,
            "validation": null,
            "valuePerLocale": false,
            "valuePerChannel": false,
            "isFilterable": false,
            "isConfigurable": false,
            "isVisibleOnFront": false,
            "isUserDefined": false,
            "swatchType": null,
            "useInFlat": true,
            "isComparable": false,
            "options": [],
            "translations": [
                {
                    "id": "1",
                    "locale": "en",
                    "name": "SKU",
                    "attributeId": "1"
                }
            ]
        }
    }
  }
  ~~~

:::

##  Get Filtered Attributes

You can get the filter data from  the Attributes by passing the input fileds in the request and that you want in the response.

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
    query attributes {
      attributes(
        page: 1,
        input: {
            code: "size"
        }
      ) {
        paginatorInfo {
          count
          currentPage
          lastPage
          total
        }
        data {
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
          options {
            id
            adminName
            swatchValue
            sortOrder
            attributeId
            attribute {
              id
              adminName
            }
            translations {
              id
              locale
              label
              attributeOptionId
            }
          }
          translations {
            id
            locale
            name
            attributeId
          }
        }
      }
    }
~~~

::: details Response
  ~~~json
  {
    "data": {
        "attributes": {
            "paginatorInfo": {
                "count": 1,
                "currentPage": 1,
                "lastPage": 1,
                "total": 1
            },
            "data": [
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
                    "isComparable": false,
                    "options": [
                        {
                            "id": "6",
                            "adminName": "S",
                            "swatchValue": null,
                            "sortOrder": 1,
                            "attributeId": "24",
                            "attribute": {
                                "id": "24",
                                "adminName": "Size"
                            },
                            "translations": [
                                {
                                    "id": "6",
                                    "locale": "en",
                                    "label": "S",
                                    "attributeOptionId": "6"
                                }
                            ]
                        },
                        {
                            "id": "7",
                            "adminName": "M",
                            "swatchValue": null,
                            "sortOrder": 2,
                            "attributeId": "24",
                            "attribute": {
                                "id": "24",
                                "adminName": "Size"
                            },
                            "translations": [
                                {
                                    "id": "7",
                                    "locale": "en",
                                    "label": "M",
                                    "attributeOptionId": "7"
                                }
                            ]
                        },
                        {
                            "id": "8",
                            "adminName": "L",
                            "swatchValue": null,
                            "sortOrder": 3,
                            "attributeId": "24",
                            "attribute": {
                                "id": "24",
                                "adminName": "Size"
                            },
                            "translations": [
                                {
                                    "id": "8",
                                    "locale": "en",
                                    "label": "L",
                                    "attributeOptionId": "8"
                                }
                            ]
                        },
                        {
                            "id": "9",
                            "adminName": "XL",
                            "swatchValue": null,
                            "sortOrder": 4,
                            "attributeId": "24",
                            "attribute": {
                                "id": "24",
                                "adminName": "Size"
                            },
                            "translations": [
                                {
                                    "id": "9",
                                    "locale": "en",
                                    "label": "XL",
                                    "attributeOptionId": "9"
                                }
                            ]
                        }
                    ],
                    "translations": [
                        {
                            "id": "24",
                            "locale": "en",
                            "name": "Size",
                            "attributeId": "24"
                        }
                    ]
                }
            ]
        }
    }
  }
  ~~~
:::


##  Create a new Attribute

  To create a Attribute, you have to perform mutation on Attribute and paas the related fields in the request.
  API call resource will create a new Attribute, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createAttribute {
        createAttribute(input: {
            code: "multi"
            type: "select"
            adminName: "Multi Option Attr"
            translations: [{
                code: "en"
                name: "Age Validation"
            }, {
                code: "fr"
                name: "Validation de l'âge"
            }, {
                code: "nl"
                name: "Leeftijd validatie"
            }, {
                code: "tr"
                name: "Yaş Doğrulaması"
            }]
            isRequired: true
            isUnique: false
            validation: ""
            valuePerLocale: true
            valuePerChannel: true
            isFilterable: true
            isConfigurable: false
            isVisibleOnFront: true
            useInFlat: false
            isComparable: true
            swatchType: "image"
            options: [{
                adminName: "Option 1"
                swatchValue: "http://admin1.saascust.com/cache/medium/product/572/SpKvqowiHC2dkmvRweIsTXiiqmVZAv7UamsmLl6G.jpeg"
                translations: [{
                    code: "en"
                    label: "Option 1"
                }, {
                    code: "fr"
                    label: "Option 1"
                }, {
                    code: "nl"
                    label: "Optie 1"
                }, {
                    code: "tr"
                    label: "seçenek 1"
                }]
            },  {
                adminName: "Option 2"
                swatchValue: "http://admin1.saascust.com/cache/medium/product/571/xFs7waxcd6MSOO8mWwBX3topPN9r8bWeHOvHz4Zq.jpeg"
                translations: [{
                    code: "en"
                    label: "Option 2"
                }, {
                    code: "fr"
                    label: "Option 2"
                }, {
                    code: "nl"
                    label: "Optie 2"
                }, {
                    code: "tr"
                    label: "seçenek 2"
                }]
            }]
        }) {
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
            options {
                id
                adminName
                swatchValue
                sortOrder
                attributeId
                attribute {
                    id
                    adminName
                }
                translations {
                    id
                    locale
                    label
                    attributeOptionId
                }
            }
            translations {
                id
                locale
                name
                attributeId
            }
        }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createAttribute": {
            "id": "28",
            "code": "multi",
            "adminName": "Multi Option Attr",
            "type": "select",
            "position": null,
            "isRequired": true,
            "isUnique": false,
            "validation": "",
            "valuePerLocale": null,
            "valuePerChannel": true,
            "isFilterable": true,
            "isConfigurable": false,
            "isVisibleOnFront": true,
            "isUserDefined": true,
            "swatchType": "image",
            "useInFlat": false,
            "isComparable": true,
            "options": [
                {
                    "id": "10",
                    "adminName": "Option 1",
                    "swatchValue": null,
                    "sortOrder": 1,
                    "attributeId": "28",
                    "attribute": {
                        "id": "28",
                        "adminName": "Multi Option Attr"
                    },
                    "translations": [
                        {
                            "id": "10",
                            "locale": "en",
                            "label": "Option 1",
                            "attributeOptionId": "10"
                        },
                        {
                            "id": "11",
                            "locale": "nl",
                            "label": "Optie 1",
                            "attributeOptionId": "10"
                        },
                        {
                            "id": "12",
                            "locale": "tr",
                            "label": "seçenek 1",
                            "attributeOptionId": "10"
                        }
                    ]
                },
                {
                    "id": "11",
                    "adminName": "Option 2",
                    "swatchValue": null,
                    "sortOrder": 2,
                    "attributeId": "28",
                    "attribute": {
                        "id": "28",
                        "adminName": "Multi Option Attr"
                    },
                    "translations": [
                        {
                            "id": "13",
                            "locale": "en",
                            "label": "Option 2",
                            "attributeOptionId": "11"
                        },
                        {
                            "id": "14",
                            "locale": "nl",
                            "label": "Optie 2",
                            "attributeOptionId": "11"
                        },
                        {
                            "id": "15",
                            "locale": "tr",
                            "label": "seçenek 2",
                            "attributeOptionId": "11"
                        }
                    ]
                }
            ],
            "translations": [
                {
                    "id": "28",
                    "locale": "en",
                    "name": "Age Validation",
                    "attributeId": "28"
                },
                {
                    "id": "29",
                    "locale": "nl",
                    "name": "Leeftijd validatie",
                    "attributeId": "28"
                },
                {
                    "id": "30",
                    "locale": "tr",
                    "name": "Yaş Doğrulaması",
                    "attributeId": "28"
                }
            ]
        }
    }
  }
  ~~~
:::

##  Update a Attribute

By using this API call you can update the Attribute. To do this , you have to perform update mutation on Attribute and paas the related fields in the request.
API call will update a Attribute, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateAttribute {
        updateAttribute(id: 28, input: {
            code: "multi"
            type: "select"
            adminName: "Multi Option Attr"
            translations: [{
                code: "en"
                name: "Age Validation"
            }, {
                code: "fr"
                name: "Validation de l'âge"
            }, {
                code: "nl"
                name: "Leeftijd validatie"
            }, {
                code: "tr"
                name: "Yaş Doğrulaması"
            }]
            isRequired: true
            isUnique: false
            validation: ""
            valuePerLocale: true
            valuePerChannel: true
            isFilterable: true
            isConfigurable: false
            isVisibleOnFront: true
            useInFlat: false
            isComparable: true
            swatchType: "image"
            options: [{
                adminName: "Option 1"
                swatchValue: "http://admin1.saascust.com/cache/medium/product/572/SpKvqowiHC2dkmvRweIsTXiiqmVZAv7UamsmLl6G.jpeg"
                translations: [{
                    code: "en"
                    label: "Option 1"
                }, {
                    code: "fr"
                    label: "Option 1"
                }, {
                    code: "nl"
                    label: "Optie 1"
                }, {
                    code: "tr"
                    label: "seçenek 1"
                }]
            },  {
                adminName: "Option 2"
                swatchValue: "http://admin1.saascust.com/cache/medium/product/571/xFs7waxcd6MSOO8mWwBX3topPN9r8bWeHOvHz4Zq.jpeg"
                translations: [{
                    code: "en"
                    label: "Option 2"
                }, {
                    code: "fr"
                    label: "Option 2"
                }, {
                    code: "nl"
                    label: "Optie 2"
                }, {
                    code: "tr"
                    label: "seçenek 2"
                }]
            },  {
                adminName: "Option 3"
                swatchValue: "http://super.saascust.com/cache/medium/product/447/85Nd2GkelYxn68czxM4gW8QsBpVNcwrN9JVQsLzp.jpeg"
                translations: [{
                    code: "en"
                    label: "Option 3"
                }, {
                    code: "fr"
                    label: "Option 3"
                }, {
                    code: "nl"
                    label: "Optie 3"
                }, {
                    code: "tr"
                    label: "seçenek 3"
                }]
            }]
        }) {
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
            options {
                id
                adminName
                swatchValue
                sortOrder
                attributeId
                attribute {
                    id
                    adminName
                }
                translations {
                    id
                    locale
                    label
                    attributeOptionId
                }
            }
            translations {
                id
                locale
                name
                attributeId
            }
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateAttribute": {
            "id": "28",
            "code": "multi",
            "adminName": "Multi Option Attr",
            "type": "select",
            "position": null,
            "isRequired": true,
            "isUnique": false,
            "validation": "",
            "valuePerLocale": false,
            "valuePerChannel": true,
            "isFilterable": true,
            "isConfigurable": false,
            "isVisibleOnFront": true,
            "isUserDefined": true,
            "swatchType": "image",
            "useInFlat": false,
            "isComparable": true,
            "options": [
                {
                    "id": "12",
                    "adminName": "Option 1",
                    "swatchValue": null,
                    "sortOrder": 1,
                    "attributeId": "28",
                    "attribute": {
                        "id": "28",
                        "adminName": "Multi Option Attr"
                    },
                    "translations": [
                        {
                            "id": "16",
                            "locale": "en",
                            "label": "Option 1",
                            "attributeOptionId": "12"
                        },
                        {
                            "id": "17",
                            "locale": "nl",
                            "label": "Optie 1",
                            "attributeOptionId": "12"
                        },
                        {
                            "id": "18",
                            "locale": "tr",
                            "label": "seçenek 1",
                            "attributeOptionId": "12"
                        }
                    ]
                },
                {
                    "id": "13",
                    "adminName": "Option 2",
                    "swatchValue": null,
                    "sortOrder": 2,
                    "attributeId": "28",
                    "attribute": {
                        "id": "28",
                        "adminName": "Multi Option Attr"
                    },
                    "translations": [
                        {
                            "id": "19",
                            "locale": "en",
                            "label": "Option 2",
                            "attributeOptionId": "13"
                        },
                        {
                            "id": "20",
                            "locale": "nl",
                            "label": "Optie 2",
                            "attributeOptionId": "13"
                        },
                        {
                            "id": "21",
                            "locale": "tr",
                            "label": "seçenek 2",
                            "attributeOptionId": "13"
                        }
                    ]
                },
                {
                    "id": "14",
                    "adminName": "Option 3",
                    "swatchValue": null,
                    "sortOrder": 3,
                    "attributeId": "28",
                    "attribute": {
                        "id": "28",
                        "adminName": "Multi Option Attr"
                    },
                    "translations": [
                        {
                            "id": "22",
                            "locale": "en",
                            "label": "Option 3",
                            "attributeOptionId": "14"
                        },
                        {
                            "id": "23",
                            "locale": "nl",
                            "label": "Optie 3",
                            "attributeOptionId": "14"
                        },
                        {
                            "id": "24",
                            "locale": "tr",
                            "label": "seçenek 3",
                            "attributeOptionId": "14"
                        }
                    ]
                }
            ],
            "translations": [
                {
                    "id": "28",
                    "locale": "en",
                    "name": "Age Validation",
                    "attributeId": "28"
                },
                {
                    "id": "29",
                    "locale": "nl",
                    "name": "Leeftijd validatie",
                    "attributeId": "28"
                },
                {
                    "id": "30",
                    "locale": "tr",
                    "name": "Yaş Doğrulaması",
                    "attributeId": "28"
                }
            ]
        }
    }
  }
  ~~~
:::

##  Delete a Attribute

To delete a Attribute, you have to perform mutation on Attribute by passing the id of that Attribute.
API call will delete a Attribute, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteAttribute {
        deleteAttribute(id: 28) {
            success
        }
    }


  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteAttribute": {
            "success": "Attribute deleted successfully."
        }
    }
  }
  ~~~
:::

##  Get All Attribute Options

You can get all the Attribute Options from the Bagisto store. You can achieve this job by using the `Attribute Options` API call.

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
    query attributeOptions {
        attributeOptions {
              paginatorInfo {
                  count
                  currentPage
                  lastPage
                  total
              }
              data {
                  id
                  adminName
                  swatchValue
                  sortOrder
                  attributeId
                  attribute {
                      id
                      adminName
                  }
                  translations {
                      id
                      locale
                      label
                      attributeOptionId
                  }
              }
          }
      }
  ~~~
::: details Response

~~~json
{
  "data": {
        "attributeOptions": {
            "paginatorInfo": {
                "count": 9,
                "currentPage": 1,
                "lastPage": 1,
                "total": 9
            },
            "data": [
                {
                    "id": "1",
                    "adminName": "Red",
                    "swatchValue": null,
                    "sortOrder": 1,
                    "attributeId": "23",
                    "attribute": {
                        "id": "23",
                        "adminName": "Color"
                    },
                    "translations": [
                        {
                            "id": "1",
                            "locale": "en",
                            "label": "Red",
                            "attributeOptionId": "1"
                        }
                    ]
                },
                {
                    "id": "2",
                    "adminName": "Green",
                    "swatchValue": null,
                    "sortOrder": 2,
                    "attributeId": "23",
                    "attribute": {
                        "id": "23",
                        "adminName": "Color"
                    },
                    "translations": [
                        {
                            "id": "2",
                            "locale": "en",
                            "label": "Green",
                            "attributeOptionId": "2"
                        }
                    ]
                },
                {
                    "id": "3",
                    "adminName": "Yellow",
                    "swatchValue": null,
                    "sortOrder": 3,
                    "attributeId": "23",
                    "attribute": {
                        "id": "23",
                        "adminName": "Color"
                    },
                    "translations": [
                        {
                            "id": "3",
                            "locale": "en",
                            "label": "Yellow",
                            "attributeOptionId": "3"
                        }
                    ]
                },
                {
                    "id": "4",
                    "adminName": "Black",
                    "swatchValue": null,
                    "sortOrder": 4,
                    "attributeId": "23",
                    "attribute": {
                        "id": "23",
                        "adminName": "Color"
                    },
                    "translations": [
                        {
                            "id": "4",
                            "locale": "en",
                            "label": "Black",
                            "attributeOptionId": "4"
                        }
                    ]
                },
                {
                    "id": "5",
                    "adminName": "White",
                    "swatchValue": null,
                    "sortOrder": 5,
                    "attributeId": "23",
                    "attribute": {
                        "id": "23",
                        "adminName": "Color"
                    },
                    "translations": [
                        {
                            "id": "5",
                            "locale": "en",
                            "label": "White",
                            "attributeOptionId": "5"
                        }
                    ]
                },
                {
                    "id": "6",
                    "adminName": "S",
                    "swatchValue": null,
                    "sortOrder": 1,
                    "attributeId": "24",
                    "attribute": {
                        "id": "24",
                        "adminName": "Size"
                    },
                    "translations": [
                        {
                            "id": "6",
                            "locale": "en",
                            "label": "S",
                            "attributeOptionId": "6"
                        }
                    ]
                },
                {
                    "id": "7",
                    "adminName": "M",
                    "swatchValue": null,
                    "sortOrder": 2,
                    "attributeId": "24",
                    "attribute": {
                        "id": "24",
                        "adminName": "Size"
                    },
                    "translations": [
                        {
                            "id": "7",
                            "locale": "en",
                            "label": "M",
                            "attributeOptionId": "7"
                        }
                    ]
                },
                {
                    "id": "8",
                    "adminName": "L",
                    "swatchValue": null,
                    "sortOrder": 3,
                    "attributeId": "24",
                    "attribute": {
                        "id": "24",
                        "adminName": "Size"
                    },
                    "translations": [
                        {
                            "id": "8",
                            "locale": "en",
                            "label": "L",
                            "attributeOptionId": "8"
                        }
                    ]
                },
                {
                    "id": "9",
                    "adminName": "XL",
                    "swatchValue": null,
                    "sortOrder": 4,
                    "attributeId": "24",
                    "attribute": {
                        "id": "24",
                        "adminName": "Size"
                    },
                    "translations": [
                        {
                            "id": "9",
                            "locale": "en",
                            "label": "XL",
                            "attributeOptionId": "9"
                        }
                    ]
                }
            ]
        }
    }
}
~~~
:::

##  Get Attribute Option By ID

To get the  specific Attribute Option, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query attributeOption {
        attributeOption(id: 4) {
              id
              adminName
              swatchValue
              sortOrder
              attributeId
              attribute {
                  id
                  adminName
              }
              translations {
                  id
                  locale
                  label
                  attributeOptionId
              }
          }
      }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "attributeOption": {
            "id": "4",
            "adminName": "Black",
            "swatchValue": null,
            "sortOrder": 4,
            "attributeId": "23",
            "attribute": {
                "id": "23",
                "adminName": "Color"
            },
            "translations": [
                {
                    "id": "4",
                    "locale": "en",
                    "label": "Black",
                    "attributeOptionId": "4"
                }
            ]
        }
    }
  }
  ~~~
:::

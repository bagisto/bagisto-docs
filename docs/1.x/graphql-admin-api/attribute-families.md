# Attribute Families

In this section, we will see all the APIs which are related to Attribute Families.

##  Get All Attribute Families

You can get all the Attribute Families from the Bagisto store. You can achieve this job by using the `Attribute Families` API call.

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

- Request Query
  ~~~query
    query attributeFamilies {
        attributeFamilies {
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
                status
                isUserDefined
                attributeGroups {
                    id
                    name
                    position
                    isUserDefined
                    attributeFamilyId
                    customAttributes {
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
                products {
                    id
                    type
                    sku
                    parentId
                    productFlats {
                        id
                        name
                        status
                    }
                }
            }
        }
    }
  ~~~
::: details Response

~~~json
{
  "data": {
        "attributeFamilies": {
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
                    "status": false,
                    "isUserDefined": true,
                    "attributeGroups": [
                        {
                            "id": "1",
                            "name": "General",
                            "position": 1,
                            "isUserDefined": false,
                            "attributeFamilyId": "1",
                            "customAttributes": [
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
                                    "id": "27",
                                    "code": "product_number",
                                    "adminName": "Product Number",
                                    "type": "text",
                                    "position": 2,
                                    "isRequired": false,
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
                                            "id": "27",
                                            "locale": "en",
                                            "name": "Product Number",
                                            "attributeId": "27"
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
                                    "id": "26",
                                    "code": "guest_checkout",
                                    "adminName": "Guest Checkout",
                                    "type": "boolean",
                                    "position": 8,
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
                                            "id": "26",
                                            "locale": "en",
                                            "name": "Allow Guest Checkout",
                                            "attributeId": "26"
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
                                    "isComparable": false,
                                    "options": [
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
                                        }
                                    ],
                                    "translations": [
                                        {
                                            "id": "23",
                                            "locale": "en",
                                            "name": "Color",
                                            "attributeId": "23"
                                        }
                                    ]
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
                                    "isComparable": false,
                                    "options": [],
                                    "translations": [
                                        {
                                            "id": "25",
                                            "locale": "en",
                                            "name": "Brand",
                                            "attributeId": "25"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "name": "Description",
                            "position": 2,
                            "isUserDefined": false,
                            "attributeFamilyId": "1",
                            "customAttributes": [
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
                        },
                        {
                            "id": "3",
                            "name": "Meta Description",
                            "position": 3,
                            "isUserDefined": false,
                            "attributeFamilyId": "1",
                            "customAttributes": [
                                {
                                    "id": "16",
                                    "code": "meta_title",
                                    "adminName": "Meta Title",
                                    "type": "textarea",
                                    "position": 18,
                                    "isRequired": false,
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
                                            "id": "16",
                                            "locale": "en",
                                            "name": "Meta Description",
                                            "attributeId": "16"
                                        }
                                    ]
                                },
                                {
                                    "id": "17",
                                    "code": "meta_keywords",
                                    "adminName": "Meta Keywords",
                                    "type": "textarea",
                                    "position": 20,
                                    "isRequired": false,
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
                                            "id": "17",
                                            "locale": "en",
                                            "name": "Meta Keywords",
                                            "attributeId": "17"
                                        }
                                    ]
                                },
                                {
                                    "id": "18",
                                    "code": "meta_description",
                                    "adminName": "Meta Description",
                                    "type": "textarea",
                                    "position": 21,
                                    "isRequired": false,
                                    "isUnique": false,
                                    "validation": null,
                                    "valuePerLocale": true,
                                    "valuePerChannel": true,
                                    "isFilterable": false,
                                    "isConfigurable": false,
                                    "isVisibleOnFront": false,
                                    "isUserDefined": true,
                                    "swatchType": null,
                                    "useInFlat": true,
                                    "isComparable": false,
                                    "options": [],
                                    "translations": [
                                        {
                                            "id": "18",
                                            "locale": "en",
                                            "name": "Meta Description",
                                            "attributeId": "18"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "4",
                            "name": "Price",
                            "position": 4,
                            "isUserDefined": false,
                            "attributeFamilyId": "1",
                            "customAttributes": [
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
                                    "isComparable": true,
                                    "options": [],
                                    "translations": [
                                        {
                                            "id": "11",
                                            "locale": "en",
                                            "name": "Price",
                                            "attributeId": "11"
                                        }
                                    ]
                                },
                                {
                                    "id": "12",
                                    "code": "cost",
                                    "adminName": "Cost",
                                    "type": "price",
                                    "position": 14,
                                    "isRequired": false,
                                    "isUnique": false,
                                    "validation": "decimal",
                                    "valuePerLocale": false,
                                    "valuePerChannel": true,
                                    "isFilterable": false,
                                    "isConfigurable": false,
                                    "isVisibleOnFront": false,
                                    "isUserDefined": true,
                                    "swatchType": null,
                                    "useInFlat": true,
                                    "isComparable": false,
                                    "options": [],
                                    "translations": [
                                        {
                                            "id": "12",
                                            "locale": "en",
                                            "name": "Cost",
                                            "attributeId": "12"
                                        }
                                    ]
                                },
                                {
                                    "id": "13",
                                    "code": "special_price",
                                    "adminName": "Special Price",
                                    "type": "price",
                                    "position": 15,
                                    "isRequired": false,
                                    "isUnique": false,
                                    "validation": "decimal",
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
                                            "id": "13",
                                            "locale": "en",
                                            "name": "Special Price",
                                            "attributeId": "13"
                                        }
                                    ]
                                },
                                {
                                    "id": "14",
                                    "code": "special_price_from",
                                    "adminName": "Special Price From",
                                    "type": "date",
                                    "position": 16,
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
                                            "id": "14",
                                            "locale": "en",
                                            "name": "Special Price From",
                                            "attributeId": "14"
                                        }
                                    ]
                                },
                                {
                                    "id": "15",
                                    "code": "special_price_to",
                                    "adminName": "Special Price To",
                                    "type": "date",
                                    "position": 17,
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
                                            "id": "15",
                                            "locale": "en",
                                            "name": "Special Price To",
                                            "attributeId": "15"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "5",
                            "name": "Shipping",
                            "position": 5,
                            "isUserDefined": false,
                            "attributeFamilyId": "1",
                            "customAttributes": [
                                {
                                    "id": "19",
                                    "code": "width",
                                    "adminName": "Width",
                                    "type": "text",
                                    "position": 22,
                                    "isRequired": false,
                                    "isUnique": false,
                                    "validation": "decimal",
                                    "valuePerLocale": false,
                                    "valuePerChannel": false,
                                    "isFilterable": false,
                                    "isConfigurable": false,
                                    "isVisibleOnFront": false,
                                    "isUserDefined": true,
                                    "swatchType": null,
                                    "useInFlat": true,
                                    "isComparable": false,
                                    "options": [],
                                    "translations": [
                                        {
                                            "id": "19",
                                            "locale": "en",
                                            "name": "Width",
                                            "attributeId": "19"
                                        }
                                    ]
                                },
                                {
                                    "id": "20",
                                    "code": "height",
                                    "adminName": "Height",
                                    "type": "text",
                                    "position": 23,
                                    "isRequired": false,
                                    "isUnique": false,
                                    "validation": "decimal",
                                    "valuePerLocale": false,
                                    "valuePerChannel": false,
                                    "isFilterable": false,
                                    "isConfigurable": false,
                                    "isVisibleOnFront": false,
                                    "isUserDefined": true,
                                    "swatchType": null,
                                    "useInFlat": true,
                                    "isComparable": false,
                                    "options": [],
                                    "translations": [
                                        {
                                            "id": "20",
                                            "locale": "en",
                                            "name": "Height",
                                            "attributeId": "20"
                                        }
                                    ]
                                },
                                {
                                    "id": "21",
                                    "code": "depth",
                                    "adminName": "Depth",
                                    "type": "text",
                                    "position": 24,
                                    "isRequired": false,
                                    "isUnique": false,
                                    "validation": "decimal",
                                    "valuePerLocale": false,
                                    "valuePerChannel": false,
                                    "isFilterable": false,
                                    "isConfigurable": false,
                                    "isVisibleOnFront": false,
                                    "isUserDefined": true,
                                    "swatchType": null,
                                    "useInFlat": true,
                                    "isComparable": false,
                                    "options": [],
                                    "translations": [
                                        {
                                            "id": "21",
                                            "locale": "en",
                                            "name": "Depth",
                                            "attributeId": "21"
                                        }
                                    ]
                                },
                                {
                                    "id": "22",
                                    "code": "weight",
                                    "adminName": "Weight",
                                    "type": "text",
                                    "position": 25,
                                    "isRequired": true,
                                    "isUnique": false,
                                    "validation": "decimal",
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
                                            "id": "22",
                                            "locale": "en",
                                            "name": "Weight",
                                            "attributeId": "22"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "products": [
                        {
                            "id": "1",
                            "type": "simple",
                            "sku": "test-product",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "1",
                                    "name": "testOutlet",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "3",
                            "type": "configurable",
                            "sku": "home-decor-2",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "3",
                                    "name": "Home Decor-2",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "4",
                            "type": "simple",
                            "sku": "home-decor-1-variant-1-6",
                            "parentId": "3",
                            "productFlats": [
                                {
                                    "id": "4",
                                    "name": "Red-S",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "5",
                            "type": "simple",
                            "sku": "home-decor-1-variant-2-6",
                            "parentId": "3",
                            "productFlats": [
                                {
                                    "id": "5",
                                    "name": "Green-S",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "6",
                            "type": "virtual",
                            "sku": "virtual-demo",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "6",
                                    "name": "Online Tuition Classes",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "7",
                            "type": "grouped",
                            "sku": "grouped-demo",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "7",
                                    "name": "Phone Accessories",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "8",
                            "type": "downloadable",
                            "sku": "e-book",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "8",
                                    "name": "e-book",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "9",
                            "type": "bundle",
                            "sku": "bundle-demo",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "9",
                                    "name": "Bundle Box",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "10",
                            "type": "booking",
                            "sku": "appointment-booking",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "10",
                                    "name": null,
                                    "status": null
                                }
                            ]
                        },
                        {
                            "id": "11",
                            "type": "booking",
                            "sku": "appointment-booking1",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "11",
                                    "name": "Dr. Appointment",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "12",
                            "type": "booking",
                            "sku": "event-booking",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "12",
                                    "name": "Music Show",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "13",
                            "type": "booking",
                            "sku": "ac-on-rent",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "13",
                                    "name": "AC On Rent",
                                    "status": true
                                }
                            ]
                        },
                        {
                            "id": "14",
                            "type": "booking",
                            "sku": "hotel-table",
                            "parentId": null,
                            "productFlats": [
                                {
                                    "id": "14",
                                    "name": "Hotel Table",
                                    "status": true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
~~~
:::

##  Get Attribute Family By ID

To get the  specific Attribute Family, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query attributeFamily {
        attributeFamily(id: 1) {
            id
            code
            name
            status
            isUserDefined
            attributeGroups {
                id
                name
                position
                isUserDefined
                attributeFamilyId
                customAttributes {
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
    }
  ~~~
::: details Response
  ~~~json
  {
    "data": {
        "attributeFamily": {
            "id": "1",
            "code": "default",
            "name": "Default",
            "status": false,
            "isUserDefined": true,
            "attributeGroups": [
                {
                    "id": "1",
                    "name": "General",
                    "position": 1,
                    "isUserDefined": false,
                    "attributeFamilyId": "1",
                    "customAttributes": [
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
                            "id": "27",
                            "code": "product_number",
                            "adminName": "Product Number",
                            "type": "text",
                            "position": 2,
                            "isRequired": false,
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
                                    "id": "27",
                                    "locale": "en",
                                    "name": "Product Number",
                                    "attributeId": "27"
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
                            "id": "26",
                            "code": "guest_checkout",
                            "adminName": "Guest Checkout",
                            "type": "boolean",
                            "position": 8,
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
                                    "id": "26",
                                    "locale": "en",
                                    "name": "Allow Guest Checkout",
                                    "attributeId": "26"
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
                            "isComparable": false,
                            "options": [
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
                                }
                            ],
                            "translations": [
                                {
                                    "id": "23",
                                    "locale": "en",
                                    "name": "Color",
                                    "attributeId": "23"
                                }
                            ]
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
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "25",
                                    "locale": "en",
                                    "name": "Brand",
                                    "attributeId": "25"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "2",
                    "name": "Description",
                    "position": 2,
                    "isUserDefined": false,
                    "attributeFamilyId": "1",
                    "customAttributes": [
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
                },
                {
                    "id": "3",
                    "name": "Meta Description",
                    "position": 3,
                    "isUserDefined": false,
                    "attributeFamilyId": "1",
                    "customAttributes": [
                        {
                            "id": "16",
                            "code": "meta_title",
                            "adminName": "Meta Title",
                            "type": "textarea",
                            "position": 18,
                            "isRequired": false,
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
                                    "id": "16",
                                    "locale": "en",
                                    "name": "Meta Description",
                                    "attributeId": "16"
                                }
                            ]
                        },
                        {
                            "id": "17",
                            "code": "meta_keywords",
                            "adminName": "Meta Keywords",
                            "type": "textarea",
                            "position": 20,
                            "isRequired": false,
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
                                    "id": "17",
                                    "locale": "en",
                                    "name": "Meta Keywords",
                                    "attributeId": "17"
                                }
                            ]
                        },
                        {
                            "id": "18",
                            "code": "meta_description",
                            "adminName": "Meta Description",
                            "type": "textarea",
                            "position": 21,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": null,
                            "valuePerLocale": true,
                            "valuePerChannel": true,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "18",
                                    "locale": "en",
                                    "name": "Meta Description",
                                    "attributeId": "18"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "4",
                    "name": "Price",
                    "position": 4,
                    "isUserDefined": false,
                    "attributeFamilyId": "1",
                    "customAttributes": [
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
                            "isComparable": true,
                            "options": [],
                            "translations": [
                                {
                                    "id": "11",
                                    "locale": "en",
                                    "name": "Price",
                                    "attributeId": "11"
                                }
                            ]
                        },
                        {
                            "id": "12",
                            "code": "cost",
                            "adminName": "Cost",
                            "type": "price",
                            "position": 14,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": true,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "12",
                                    "locale": "en",
                                    "name": "Cost",
                                    "attributeId": "12"
                                }
                            ]
                        },
                        {
                            "id": "13",
                            "code": "special_price",
                            "adminName": "Special Price",
                            "type": "price",
                            "position": 15,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
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
                                    "id": "13",
                                    "locale": "en",
                                    "name": "Special Price",
                                    "attributeId": "13"
                                }
                            ]
                        },
                        {
                            "id": "14",
                            "code": "special_price_from",
                            "adminName": "Special Price From",
                            "type": "date",
                            "position": 16,
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
                                    "id": "14",
                                    "locale": "en",
                                    "name": "Special Price From",
                                    "attributeId": "14"
                                }
                            ]
                        },
                        {
                            "id": "15",
                            "code": "special_price_to",
                            "adminName": "Special Price To",
                            "type": "date",
                            "position": 17,
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
                                    "id": "15",
                                    "locale": "en",
                                    "name": "Special Price To",
                                    "attributeId": "15"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "5",
                    "name": "Shipping",
                    "position": 5,
                    "isUserDefined": false,
                    "attributeFamilyId": "1",
                    "customAttributes": [
                        {
                            "id": "19",
                            "code": "width",
                            "adminName": "Width",
                            "type": "text",
                            "position": 22,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": false,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "19",
                                    "locale": "en",
                                    "name": "Width",
                                    "attributeId": "19"
                                }
                            ]
                        },
                        {
                            "id": "20",
                            "code": "height",
                            "adminName": "Height",
                            "type": "text",
                            "position": 23,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": false,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "20",
                                    "locale": "en",
                                    "name": "Height",
                                    "attributeId": "20"
                                }
                            ]
                        },
                        {
                            "id": "21",
                            "code": "depth",
                            "adminName": "Depth",
                            "type": "text",
                            "position": 24,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": false,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "21",
                                    "locale": "en",
                                    "name": "Depth",
                                    "attributeId": "21"
                                }
                            ]
                        },
                        {
                            "id": "22",
                            "code": "weight",
                            "adminName": "Weight",
                            "type": "text",
                            "position": 25,
                            "isRequired": true,
                            "isUnique": false,
                            "validation": "decimal",
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
                                    "id": "22",
                                    "locale": "en",
                                    "name": "Weight",
                                    "attributeId": "22"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
  }
  ~~~
:::

##  Create a new Attribute Family

  To create a Attribute Family, you have to perform mutation on Attribute Family and paas the related fields in the request.
  API call resource will create a new Attribute Family, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createAttributeFamily {
        createAttributeFamily(input: {
            code: "new_family"
            name: "New Family"
            attributeGroups: [{
                name: "General"
                position: 1
                isUserDefined: false
                customAttributes: [{
                    id: 1
                }, 	{
                    id: 2
                }, 	{
                    id: 3
                }, 	{
                    id: 4
                }, 	{
                    id: 5
                }]
            },	{
                name: "Description"
                position: 2
                isUserDefined: false
                customAttributes: [{
                    id: 9
                }, 	{
                    id: 10
                }]
            },	{
                name: "Text Group"
                position: 3
                isUserDefined: true
                customAttributes: [{
                    id: 19
                }, 	{
                    id: 20
                }]
            }]
        }) {
            id
            code
            name
            status
            isUserDefined
            attributeGroups {
                id
                name
                position
                isUserDefined
                attributeFamilyId
                customAttributes {
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
            products {
                id
                type
                sku
                parentId
                productFlats {
                    id
                    name
                    status
                }
            }
        }
    }
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createAttributeFamily": {
            "id": "2",
            "code": "new_family",
            "name": "New Family",
            "status": null,
            "isUserDefined": null,
            "attributeGroups": [
                {
                    "id": "7",
                    "name": "General",
                    "position": 1,
                    "isUserDefined": false,
                    "attributeFamilyId": "2",
                    "customAttributes": [
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
                        }
                    ]
                },
                {
                    "id": "8",
                    "name": "Description",
                    "position": 2,
                    "isUserDefined": false,
                    "attributeFamilyId": "2",
                    "customAttributes": [
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
                },
                {
                    "id": "9",
                    "name": "Text Group",
                    "position": 3,
                    "isUserDefined": true,
                    "attributeFamilyId": "2",
                    "customAttributes": [
                        {
                            "id": "19",
                            "code": "width",
                            "adminName": "Width",
                            "type": "text",
                            "position": 22,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": false,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "19",
                                    "locale": "en",
                                    "name": "Width",
                                    "attributeId": "19"
                                }
                            ]
                        },
                        {
                            "id": "20",
                            "code": "height",
                            "adminName": "Height",
                            "type": "text",
                            "position": 23,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": false,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "20",
                                    "locale": "en",
                                    "name": "Height",
                                    "attributeId": "20"
                                }
                            ]
                        }
                    ]
                }
            ],
            "products": []
        }
    }
  }
  ~~~
:::

##  Update a Attribute Family

By using this API call you can update the Attribute Family. To do this , you have to perform update mutation on Attribute Family and paas the related fields in the request.
API call will update a Attribute Family, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateAttributeFamily {
        updateAttributeFamily(id: 2, input: {
            code: "new_family"
            name: "Fashion Family"
            attributeGroups: [{
                name: "General"
                position: 1
                isUserDefined: false
                customAttributes: [{
                    id: 1
                }, 	{
                    id: 2
                }, 	{
                    id: 3
                }, 	{
                    id: 4
                }, 	{
                    id: 5
                }]
            },	{
                name: "Description"
                position: 2
                isUserDefined: false
                customAttributes: [{
                    id: 9
                }, 	{
                    id: 10
                }]
            },	{
                name: "Text Group"
                position: 3
                isUserDefined: true
                customAttributes: [{
                    id: 19
                }, 	{
                    id: 20
                }]
            }]
        }) {
            id
            code
            name
            status
            isUserDefined
            attributeGroups {
                id
                name
                position
                isUserDefined
                attributeFamilyId
                customAttributes {
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
            products {
                id
                type
                sku
                parentId
                productFlats {
                    id
                    name
                    status
                }
            }
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateAttributeFamily": {
            "id": "2",
            "code": "new_family",
            "name": "Fashion Family",
            "status": false,
            "isUserDefined": true,
            "attributeGroups": [
                {
                    "id": "10",
                    "name": "General",
                    "position": 1,
                    "isUserDefined": false,
                    "attributeFamilyId": "2",
                    "customAttributes": [
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
                        }
                    ]
                },
                {
                    "id": "11",
                    "name": "Description",
                    "position": 2,
                    "isUserDefined": false,
                    "attributeFamilyId": "2",
                    "customAttributes": [
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
                },
                {
                    "id": "12",
                    "name": "Text Group",
                    "position": 3,
                    "isUserDefined": true,
                    "attributeFamilyId": "2",
                    "customAttributes": [
                        {
                            "id": "19",
                            "code": "width",
                            "adminName": "Width",
                            "type": "text",
                            "position": 22,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": false,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "19",
                                    "locale": "en",
                                    "name": "Width",
                                    "attributeId": "19"
                                }
                            ]
                        },
                        {
                            "id": "20",
                            "code": "height",
                            "adminName": "Height",
                            "type": "text",
                            "position": 23,
                            "isRequired": false,
                            "isUnique": false,
                            "validation": "decimal",
                            "valuePerLocale": false,
                            "valuePerChannel": false,
                            "isFilterable": false,
                            "isConfigurable": false,
                            "isVisibleOnFront": false,
                            "isUserDefined": true,
                            "swatchType": null,
                            "useInFlat": true,
                            "isComparable": false,
                            "options": [],
                            "translations": [
                                {
                                    "id": "20",
                                    "locale": "en",
                                    "name": "Height",
                                    "attributeId": "20"
                                }
                            ]
                        }
                    ]
                }
            ],
            "products": []
        }
    }
  }
  ~~~
:::

##  Delete a Attribute Family

To delete a Attribute Family, you have to perform mutation on Attribute Family by passing the id of that Attribute Family.
API call will delete a Attribute Family, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteAttributeFamily {
        deleteAttributeFamily(id: 2) {
            success
        }
    }
  ~~~

::: details Response
  ~~~json
    {
        "data": {
            "deleteAttributeFamily": {
                "success": "Family deleted successfully."
            }
        }
    }
  ~~~
:::

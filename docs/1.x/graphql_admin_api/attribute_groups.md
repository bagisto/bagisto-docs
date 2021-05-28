# Attribute Groups

In this section, we will see all the APIs which are related to Attribute Groups.

##  Get All Attribute Groups

You can get all the Attribute Groups from the Bagisto store. You can achieve this job by using the `Attribute Groups` API call.

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
    query attributeGroups {
        attributeGroups {
            paginatorInfo {
                count
                currentPage
                lastPage
                total
            }
            data {
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
        "attributeGroups": {
            "paginatorInfo": {
                "count": 5,
                "currentPage": 1,
                "lastPage": 1,
                "total": 5
            },
            "data": [
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

##  Get Attribute Group By ID

To get the  specific Attribute Group, you have to pass an `id` field with  query request .By using this resource and request payload, you will get only a single object under the `data` object in response.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

Let's take an example,

- Request Query
  ~~~Query
    query attributeGroup {
        attributeGroup(id: 2) {
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
  ~~~
::: details Response
  ~~~json
  {
    "data": {
        "attributeGroup": {
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
        }
    }
  }
  ~~~

:::


##  Create a new Attribute Group

  To create a Attribute Group, you have to perform mutation on Attribute Group and paas the related fields in the request.
  API call resource will create a new Attribute Group, only if the admin has logged in.

  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

  ### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation createAttributeGroup {
        createAttributeGroup(input: {
            name: "Dummy Group"
            position: 8
            isUserDefined: true
            attributeFamilyId: 1
        }) {
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
  ~~~

::: details Response
  ~~~json
  {
     "data": {
        "createAttributeGroup": {
            "id": "6",
            "name": "Dummy Group",
            "position": 8,
            "isUserDefined": true,
            "attributeFamilyId": "1",
            "customAttributes": []
        }
    }
  }
  ~~~
:::

##  Update a Attribute Group

By using this API call you can update the Attribute Group. To do this , you have to perform update mutation on Attribute Group and paas the related fields in the request.
API call will update a Attribute Group, only if the admin has logged in.


  - Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation updateAttributeGroup {
        updateAttributeGroup(id: 6, input: {
            name: "New Group"
            position: 4
            isUserDefined: true
            attributeFamilyId: 1
        }) {
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
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "updateAttributeGroup": {
            "id": "6",
            "name": "New Group",
            "position": 4,
            "isUserDefined": true,
            "attributeFamilyId": "1",
            "customAttributes": []
        }
    }
  }
  ~~~
:::

##  Delete a Attribute Group

To delete a Attribute Group, you have to perform mutation on Attribute Group by passing the id of that Attribute Group.
API call will delete a Attribute Group, only if the admin has logged in.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |
  | Authorization | Bearer `token-string` |

### Examples

  Let's take an example,

- Request Mutation
  ~~~Mutation
    mutation deleteAttributeGroup {
        deleteAttributeGroup(id: 6) {
            success
        }
    }
  ~~~

::: details Response
  ~~~json
  {
    "data": {
        "deleteAttributeGroup": {
            "success": "Attribute Group deleted successfully."
        }
    }
  }
  ~~~
:::

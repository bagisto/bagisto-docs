# Home Page Content

In this section, we will see all the APIs which are related to Home Page Content.

## Get New Products

You can get New Products of home page from the Bagisto store by passing the count of products. You can achieve this job by using the `newProducts` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

- Query
  ~~~query
    query newProducts{
        newProducts(count:3){
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
            color
            colorLabel
            size
            sizeLabel
            locale
            channel
            productId
            parentId
            minPrice
            maxPrice
            metaTitle
            metaKeywords
            metaDescription
            width
            height
            depth
            product{
                id
            }
            variants {
                id
            }
            parent {
                id
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
        "newProducts": [
            {
                "id": "8",
                "sku": "e-book",
                "name": "e-book",
                "description": "<p>Home Decor Description</p>",
                "shortDescription": "<p>Home Decor Short Description</p>",
                "urlKey": "e-book",
                "new": true,
                "featured": true,
                "status": true,
                "visibleIndividually": true,
                "thumbnail": null,
                "price": 12.55,
                "cost": 11.5,
                "specialPrice": 11.3,
                "specialPriceFrom": "2021-02-08",
                "specialPriceTo": "2021-02-28",
                "weight": 5.2,
                "color": 3,
                "colorLabel": "Yellow",
                "size": 9,
                "sizeLabel": "XL",
                "locale": "en",
                "channel": "default",
                "productId": "8",
                "parentId": null,
                "minPrice": 11.295,
                "maxPrice": 11.295,
                "metaTitle": "Home Decor Meta Title",
                "metaKeywords": "Home Decor Meta Keywords",
                "metaDescription": "Home Decor Meta Description",
                "width": 30,
                "height": 24,
                "depth": 11,
                "product": {
                    "id": "8"
                },
                "variants": [],
                "parent": null,
                "createdAt": "2021-05-27 12:52:39",
                "updatedAt": "2021-05-27 12:52:39"
            },
            {
                "id": "12",
                "sku": "event-booking",
                "name": "Music Show",
                "description": "<p>Home Decor Description</p>",
                "shortDescription": "<p>Home Decor Short Description</p>",
                "urlKey": "music-show",
                "new": true,
                "featured": true,
                "status": true,
                "visibleIndividually": true,
                "thumbnail": null,
                "price": 12.55,
                "cost": 11.5,
                "specialPrice": null,
                "specialPriceFrom": null,
                "specialPriceTo": null,
                "weight": 5.2,
                "color": 3,
                "colorLabel": "Yellow",
                "size": 9,
                "sizeLabel": "XL",
                "locale": "en",
                "channel": "default",
                "productId": "12",
                "parentId": null,
                "minPrice": 11.295,
                "maxPrice": 11.295,
                "metaTitle": "Home Decor Meta Title",
                "metaKeywords": "Home Decor Meta Keywords",
                "metaDescription": "Home Decor Meta Description",
                "width": 30,
                "height": 24,
                "depth": 11,
                "product": {
                    "id": "12"
                },
                "variants": [],
                "parent": null,
                "createdAt": "2021-05-27 16:04:24",
                "updatedAt": "2021-05-27 16:04:24"
            },
            {
                "id": "9",
                "sku": "bundle-demo",
                "name": "Bundle Box",
                "description": "<p>Home Decor Description</p>",
                "shortDescription": "<p>Home Decor Short Description</p>",
                "urlKey": "bundle-demo",
                "new": true,
                "featured": true,
                "status": true,
                "visibleIndividually": true,
                "thumbnail": null,
                "price": 12.55,
                "cost": 11.5,
                "specialPrice": 11.3,
                "specialPriceFrom": "2021-02-08",
                "specialPriceTo": "2021-02-28",
                "weight": 5.2,
                "color": 3,
                "colorLabel": "Yellow",
                "size": 9,
                "sizeLabel": "XL",
                "locale": "en",
                "channel": "default",
                "productId": "9",
                "parentId": null,
                "minPrice": 13.5,
                "maxPrice": 31.5,
                "metaTitle": "Home Decor Meta Title",
                "metaKeywords": "Home Decor Meta Keywords",
                "metaDescription": "Home Decor Meta Description",
                "width": 30,
                "height": 24,
                "depth": 11,
                "product": {
                    "id": "9"
                },
                "variants": [],
                "parent": null,
                "createdAt": "2021-05-27 13:11:58",
                "updatedAt": "2021-05-27 13:11:58"
            }
        ]
    }
}
~~~
:::

## Get Featured Products

You can get Featured Products Products of home page from the Bagisto store by passing the count of products. You can achieve this job by using the `featuredProducts` API call.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Single Request Endpoint

  `POST http(s)://example.com/graphql`

- Query
  ~~~query
    query featuredProducts{
        featuredProducts(count:3){
            id
            sku
            name
            description
            shortDescription
            urlKey
            new
            featured
            status
            visibleIndividually
            thumbnail
            price
            cost
            specialPrice
            specialPriceFrom
            specialPriceTo
            weight
            color
            colorLabel
            size
            sizeLabel
            locale
            channel
            productId
            parentId
            minPrice
            maxPrice
            metaTitle
            metaKeywords
            metaDescription
            width
            height
            depth
            product{
                id
            }
            variants {
                id
            }
            parent {
                id
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
        "featuredProducts": [
            {
                "id": "8",
                "sku": "e-book",
                "name": "e-book",
                "description": "<p>Home Decor Description</p>",
                "shortDescription": "<p>Home Decor Short Description</p>",
                "urlKey": "e-book",
                "new": true,
                "featured": true,
                "status": true,
                "visibleIndividually": true,
                "thumbnail": null,
                "price": 12.55,
                "cost": 11.5,
                "specialPrice": 11.3,
                "specialPriceFrom": "2021-02-08",
                "specialPriceTo": "2021-02-28",
                "weight": 5.2,
                "color": 3,
                "colorLabel": "Yellow",
                "size": 9,
                "sizeLabel": "XL",
                "locale": "en",
                "channel": "default",
                "productId": "8",
                "parentId": null,
                "minPrice": 11.295,
                "maxPrice": 11.295,
                "metaTitle": "Home Decor Meta Title",
                "metaKeywords": "Home Decor Meta Keywords",
                "metaDescription": "Home Decor Meta Description",
                "width": 30,
                "height": 24,
                "depth": 11,
                "product": {
                    "id": "8"
                },
                "variants": [],
                "parent": null,
                "createdAt": "2021-05-27 12:52:39",
                "updatedAt": "2021-05-27 12:52:39"
            },
            {
                "id": "12",
                "sku": "event-booking",
                "name": "Music Show",
                "description": "<p>Home Decor Description</p>",
                "shortDescription": "<p>Home Decor Short Description</p>",
                "urlKey": "music-show",
                "new": true,
                "featured": true,
                "status": true,
                "visibleIndividually": true,
                "thumbnail": null,
                "price": 12.55,
                "cost": 11.5,
                "specialPrice": null,
                "specialPriceFrom": null,
                "specialPriceTo": null,
                "weight": 5.2,
                "color": 3,
                "colorLabel": "Yellow",
                "size": 9,
                "sizeLabel": "XL",
                "locale": "en",
                "channel": "default",
                "productId": "12",
                "parentId": null,
                "minPrice": 11.295,
                "maxPrice": 11.295,
                "metaTitle": "Home Decor Meta Title",
                "metaKeywords": "Home Decor Meta Keywords",
                "metaDescription": "Home Decor Meta Description",
                "width": 30,
                "height": 24,
                "depth": 11,
                "product": {
                    "id": "12"
                },
                "variants": [],
                "parent": null,
                "createdAt": "2021-05-27 16:04:24",
                "updatedAt": "2021-05-27 16:04:24"
            },
            {
                "id": "9",
                "sku": "bundle-demo",
                "name": "Bundle Box",
                "description": "<p>Home Decor Description</p>",
                "shortDescription": "<p>Home Decor Short Description</p>",
                "urlKey": "bundle-demo",
                "new": true,
                "featured": true,
                "status": true,
                "visibleIndividually": true,
                "thumbnail": null,
                "price": 12.55,
                "cost": 11.5,
                "specialPrice": 11.3,
                "specialPriceFrom": "2021-02-08",
                "specialPriceTo": "2021-02-28",
                "weight": 5.2,
                "color": 3,
                "colorLabel": "Yellow",
                "size": 9,
                "sizeLabel": "XL",
                "locale": "en",
                "channel": "default",
                "productId": "9",
                "parentId": null,
                "minPrice": 13.5,
                "maxPrice": 31.5,
                "metaTitle": "Home Decor Meta Title",
                "metaKeywords": "Home Decor Meta Keywords",
                "metaDescription": "Home Decor Meta Description",
                "width": 30,
                "height": 24,
                "depth": 11,
                "product": {
                    "id": "9"
                },
                "variants": [],
                "parent": null,
                "createdAt": "2021-05-27 13:11:58",
                "updatedAt": "2021-05-27 13:11:58"
            }
        ]
    }
}
~~~
:::

## Get Home Sliders

To get the Home Page Slider you have to call the `homeSliders` API.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |

Let's take an example,

- Request Query
  ~~~Query
    query homeSliders{
        homeSliders(count:10){
            id
            title
            path
            content
            channelId
            locale
            sliderPath
            imgPath
            channel {
                id
            }
        }
    } 
  ~~~

::: details Response
  ~~~json
    {
        "data": {
            "homeSliders": [
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
  ~~~
:::


## Get Advertisements

To get the Advertisements you have to call the `advertisements` API.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |

Let's take an example,

- Request Query
  ~~~Query
    query advertisements{
        advertisements{
            advertisementFour {
                path
            }
            advertisementThree {
                path
            }
            advertisementTwo {
                path
            }
        }
    } 
  ~~~

::: details Response
  ~~~json
    {
        "data": {
            "advertisements": [
                {
                    "advertisementFour": [
                        {
                            "path": "velocity/images/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
                        },
                        {
                            "path": "velocity/images/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
                        }
                    ],
                    "advertisementThree": [
                        {
                            "path": "velocity/images/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
                        },
                        {
                            "path": "velocity/images/big-sale-banner.png"
                        }
                    ],
                    "advertisementTwo": [
                        {
                            "path": "velocity/images/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
                        },
                        {
                            "path": "velocity/images/tnyNbLh4GDwMy0P3qwbP5OcFU0nr9g9j0zhNyFiA.jpeg"
                        }
                    ]
                }
            ]
        }
    }
  ~~~
:::

## Get Home Category

To get the Home Category you have to call the `homeCategories` API.

- Headers

  | Key           | Value                 |
  | ------------- | --------------------- |
  | Accept        | application/json      |

Let's take an example,

- Request Query
  ~~~Query
    query homeCategories{
        homeCategories{
            id
            name
            description
            slug
            urlPath
            image
            imageUrl
            metaTitle
            metaDescription
            metaKeywords
            position
            status
            displayMode
            parentId
            additional
            filterableAttributes {
                id
                code
                adminName
                type
                validation
                position
                isFilterable
            }
            translations {
                id
                name
                slug
                description
                metaTitle
                metaDescription
                metaKeywords
                category_id
                locale
                localeId
                urlPath
            }
            createdAt
            updatedAt
            count
            success
        }
    }
  ~~~

::: details Response
  ~~~json
    {
        "data": {
            "homeCategories": [
                {
                    "id": "2",
                    "name": "Shop",
                    "description": "<p>Test Category</p>",
                    "slug": "shop",
                    "urlPath": "shop",
                    "image": "category/2/veI5gArm9nBKUFPwvvmmoRccLdtlJXhHBtaGzL4a.jpg",
                    "imageUrl": "http://localhost/graphql/public/storage/category/2/veI5gArm9nBKUFPwvvmmoRccLdtlJXhHBtaGzL4a.jpg",
                    "metaTitle": "",
                    "metaDescription": "",
                    "metaKeywords": "",
                    "position": 1,
                    "status": true,
                    "displayMode": "products_and_description",
                    "parentId": "1",
                    "additional": null,
                    "filterableAttributes": [
                        {
                            "id": "11",
                            "code": "price",
                            "adminName": "Price",
                            "type": "price",
                            "validation": "decimal",
                            "position": 13,
                            "isFilterable": 1
                        },
                        {
                            "id": "23",
                            "code": "color",
                            "adminName": "Color",
                            "type": "select",
                            "validation": null,
                            "position": 26,
                            "isFilterable": 1
                        },
                        {
                            "id": "24",
                            "code": "size",
                            "adminName": "Size",
                            "type": "select",
                            "validation": null,
                            "position": 27,
                            "isFilterable": 1
                        },
                        {
                            "id": "25",
                            "code": "brand",
                            "adminName": "Brand",
                            "type": "select",
                            "validation": null,
                            "position": 28,
                            "isFilterable": 1
                        }
                    ],
                    "translations": [
                        {
                            "id": "2",
                            "name": "Shop",
                            "slug": "shop",
                            "description": "<p>Test Category</p>",
                            "metaTitle": "",
                            "metaDescription": "",
                            "metaKeywords": "",
                            "category_id": "2",
                            "locale": "en",
                            "localeId": "1",
                            "urlPath": "shop"
                        },
                        {
                            "id": "3",
                            "name": "Shop",
                            "slug": "shop",
                            "description": "<p>Test Category</p>",
                            "metaTitle": "",
                            "metaDescription": "",
                            "metaKeywords": "",
                            "category_id": "2",
                            "locale": "nl",
                            "localeId": "3",
                            "urlPath": "shop"
                        },
                        {
                            "id": "4",
                            "name": "Shop",
                            "slug": "shop",
                            "description": "<p>Test Category</p>",
                            "metaTitle": "",
                            "metaDescription": "",
                            "metaKeywords": "",
                            "category_id": "2",
                            "locale": "tr",
                            "localeId": "4",
                            "urlPath": "shop"
                        }
                    ],
                    "createdAt": "2021-05-27 18:06:22",
                    "updatedAt": "2021-05-27 18:06:23",
                    "count": 0,
                    "success": null
                }
            ]
        }
    }
  ~~~
:::


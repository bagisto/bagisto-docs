---
title: Order Requests | Bagisto Web APIs Documentation
layout: default
---

# How To Create Requests For Orders

<div style="margin-top: -18px; float: right;">
    <img  src="assets/images/icons/Icon-Pencil-Large.svg" alt="edit" height="16px"/>
    <a href="https://github.com/bagisto/bagisto-docs/blob/master/api_order.md" target="_blank">edit on github</a>
</div>

## 1. Get All Bagisto's Orders:

You can get all the orders of the Bagisto Store. To get the orders of the store, the customer must be logged in to the Bagisto Store. You can achieve this job by using **`orders`** API call resource.
Currently, this **`orders`** resource is helpful for both admin,user and customer too.

> _http(s)://example.com/public/api/orders_

**Note**: _In the `orders` resource API call, we used `GET HTTP verb` to get all the orders of the Bagisto Store._

###### Request:

> _http(s)://example.com/public/api/orders_

###### Response:

    {
        "data": [
            {
                "id": 3,
                "status": "pending",
                "status_label": "Pending",
                "channel_name": "Default",
                "is_guest": 0,
                "customer_email": "peterdoe@example.com",
                "customer_first_name": "Peter",
                "customer_last_name": "Doe",
                "shipping_method": "flatrate_flatrate",
                "shipping_title": "Flat Rate - Flat Rate",
                "payment_title": "Cash On Delivery",
                "shipping_description": "This is a flat rate",
                "items": [{...}, {...}, {...}],
                ...

            },
            {...},
            {...},
        ],
        "links": {...},
        "meta": {...}
    }

![bagisto_orders](assets/images/Bagisto_Api/bagisto_orders.jpg){:class="screenshot-dimension center"}

### 1.1 Get Orders With Pagination: <a id="get-orders-with-pagination"></a>

> _http(s)://example.com/public/api/orders?page=1_

> _http(s)://example.com/public/api/orders?limit=5&page=1_

**Note**: _If you didn't use the page(?page=x) filter, then it returns the data of the first page by default. You can also provide the limit request parameter in the API url._

![bagisto_orders_page](assets/images/Bagisto_Api/bagisto_orders_page.jpg){:class="screenshot-dimension center"}

#### Explanation:

- In the above response, you will find the three Objects with below mentioned indexes:
  1. data
  2. link
  3. meta

#### data object:

Under the data object, you will find an array with multiple objects that contains the details of the orders. You can use the order's index data by accessing these order sub-objects.

**Note**: _Regarding both link and meta objects, we already explained these objects functionality in_ <a href="api_category.html#link-object" target="_blank" class="bagsito-link"> _Category API_ </a> _section._

### 1.2 Get Orders Without Pagination:

You can also get all the orders at once of Bagisto Store without pagination. To get the orders, customer must be logged in to the Bagisto Store. For this you have to pass **`pagination=0`** in the query parameter with the **`orders`** resource in API URL.

###### Request:

> _http(s)://example.com/public/api/orders?pagination=0_

##### Response:

    {
        "data": [
            {
                "id": 3,
                "status": "pending",
                "status_label": "Pending",
                "channel_name": "Default",
                "is_guest": 0,
                "customer_email": "peterdoe@example.com",
                "customer_first_name": "Peter",
                "customer_last_name": "Doe",
                "shipping_method": "flatrate_flatrate",
                "shipping_title": "Flat Rate - Flat Rate",
                "payment_title": "Cash On Delivery",
                "shipping_description": "This is a flat rate",
                "items": [{...}, {...}, {...}],
                ...

            },
            {...},
            {...},
        ]
    }

![bagisto_orders_no_pag](assets/images/Bagisto_Api/bagisto_orders_no_pag.jpg){:class="screenshot-dimension center"}

## 2. Get All Orders Of Specific Customer: <a id="get-customer-orders"></a>

To get all the orders of a specific customer, you have to pass a customer_id as a query parameter like **`orders?customer_id={id}`** in API url. To use this API call customer authentication is required, means that customer must be login into the store.

> _http(s)://example.com/public/api/orders?customer_id={id}_

- This **`'orders?customer_id={id}'`** API call resource will return the customer's orders details, only if that customer has logged in to the store.

**Note**: _In the `orders?customer_id={id}` resource API call, we used `GET HTTP verb` to get all the orders of a customer._

##### Request:

> _http(s)://example.com/public/api/orders?customer_id=2_

##### Response:

    {
        "data": [
            {
                "id": 3,
                "status": "pending",
                "customer_email": "peterdoe@webkul.com",
                "customer_first_name": "Peter",
                "customer_last_name": "Doe",
                "shipping_method": "flatrate_flatrate",
                "shipping_title": "Flat Rate - Flat Rate",
                "payment_title": "Cash On Delivery",
                "total_qty_ordered": 2,
                "grand_total": "80.0000",
                "customer": {...},
                "shipping_address": {...},
                "billing_address": {...},
                "items": [{...},{...},{...}],
            },
            {
                "id": 2,
                "status": "pending",
                "customer_email": "peterdoe@webkul.com",
                "customer_first_name": "Peter",
                "customer_last_name": "Doe",
                "shipping_method": "flatrate_flatrate",
                "shipping_title": "Flat Rate - Flat Rate",
                "payment_title": "Cash On Delivery",
                "total_qty_ordered": 5,
                "grand_total": "400.0000",
                "customer": {...},
                "shipping_address": {...},
                "billing_address": {...},
                "items": [{...},{...},{...}],
            }
        ],
        "links": {...},
        "meta": {...}
    }

![bagisto_orders_custId](assets/images/Bagisto_Api/bagisto_orders_custId.jpg){:class="screenshot-dimension center"}

### 2.1 Get Customer's Orders With Pagination: <a id="get-customer-orders-pagination"></a>

> _http(s)://example.com/public/api/orders?customer_id=2&limit=5&page=1_

#### Response

    {
        "data": [
            {...}
        ],
        "links": {
            "first": "http://localhost/public/api/orders?customer_id=2&limit=1&page=1",
            "last": "http://localhost/public/api/orders?customer_id=2&limit=1&page=1",
            "prev": "http://localhost/public/api/orders?customer_id=2&limit=1&page=1",
            "next": null
        },
        "meta": {
            "current_page": 2,
            "from": 2,
            "last_page": 2,
            "path": "http://localhost/public/api/orders",
            "per_page": "1",
            "to": 2,
            "total": 2
        }
    }

![bagisto_orders_cust_pag](assets/images/Bagisto_Api/bagisto_orders_cust_pag.jpg){:class="screenshot-dimension center"}

**Note**: _If you didn't use the page(?page=x) filter, then it returns the data of the first page by default. You can also provide the limit and page request parameters with the customer_id query parameter in the API url._

### 2.2 Get Customer's Orders Without Pagination: <a id="get-customer-orders-no-pagination"></a>

> _http(s)://example.com/public/api/orders?customer_id=2&pagination=0_

#### Response

    {
        "data": [
            {
                "id": 3,
                "status": "pending",
                "customer_email": "peterdoe@webkul.com",
                "customer_first_name": "Peter",
                "customer_last_name": "Doe",
                "total_qty_ordered": 2,
                "grand_total": "80.0000",
                "customer": {...},
                "shipping_address": {...},
                "billing_address": {...},
                "items": [{...},{...},{...}],
            },
            {
                "id": 2,
                "status": "pending",
                "customer_email": "peterdoe@webkul.com",
                "customer_first_name": "Peter",
                "customer_last_name": "Doe",
                "total_qty_ordered": 5,
                "grand_total": "400.0000",
                "customer": {...},
                "shipping_address": {...},
                "billing_address": {...},
                "items": [{...},{...},{...}],
            },
            {...}
        ]
    }

![bagisto_orders_cust_no_pag](assets/images/Bagisto_Api/bagisto_orders_cust_no_pag.jpg){:class="screenshot-dimension center"}

**Note**: _If you didn't want customer's order data according to page wise, then you can pass the `pagination=0` query parameter with the `customer_id` parameter in the API url._

## 3. Get Specific Order Based On Order Id: <a id="get-specific-order"></a>

To get the specific order details, you have to pass an order_id as a request payload like **`orders/{order_id}`** in API url. By using this resource and request payload, you will get only `a single object` under **`data object`** in response.

> _http(s)://example.com/public/api/orders/{id}_

- This **`orders/{id}`** API call resource will return the single order details, only if the customer of that order has logged in to the store.

**Note**: _In the `orders/{id}` resource API call, we used `GET HTTP verb` to get the single order of login customer._

##### Request:

> _http(s)://example.com/public/api/order/3_

##### Response:

    {
        "data": {
            "id": 3,
            "status": "pending",
            "status_label": "Pending",
            "channel_name": "Default",
            "customer_email": "peterdoe@example.com",
            "customer_first_name": "Peter",
            "customer_last_name": "Doe",
            "shipping_method": "flatrate_flatrate",
            "shipping_title": "Flat Rate - Flat Rate",
            "payment_title": "Cash On Delivery",
            "total_qty_ordered": 2,
            "grand_total": "80.0000",
            "customer": {...},
            "shipping_address": {...},
            "billing_address": {...},
            "items": [
                {...},
                {...}
            ],
            "invoices": [],
            "shipments": [],
            }
        }
    }

![bagisto_orders_id](assets/images/Bagisto_Api/bagisto_orders_id.jpg){:class="screenshot-dimension center"}

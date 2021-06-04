# Explanation

If you check all the sections in which we have used paginatorInfo, in all the responses, you will find that there are four objects key i.e. `count`, `currentPage`, and `lastPage` and `total`. In this section, we will explain all the four keys.

Let's take an example of the user section, we have some response in which we got these four keys.

~~~json
{
    "paginatorInfo": {
        "count": {...},
        "currentPage": {...},
        "lastPage": {...},
        "total": {...}
    },
}
~~~

## 1. Count Object `count`

In the count object key, you will find the count of many objects which represent the Bagisto admin users.

## 2. CurrentPage Object `currentPage`

In the currentPage object, you will find the current page number.

## 3. lastPage Object `lastPage`

`lastPage` object will only used with pagination. you will find the last page number.

## 3. Total Object `total`

`total` object will only used with pagination. you will find the total page number.

By defining the page number you can get the data of that perticular page.

Let's take an example of the user section,

- Request
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
          }
        }
      }
    }
~~~

- Response

~~~json
  {
    "data": {
        "users": {
            "paginatorInfo": {
                "count": 2,
                "currentPage": 1,
                "lastPage": 1,
                "total": 2
            },
            "data": [
                {
                    "id": "1",
                    "name": "Example",
                }
            ]
        }
      }
  }
~~~
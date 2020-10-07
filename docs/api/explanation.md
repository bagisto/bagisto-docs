# Explanation

If you check all the sections in which we have used pagination, in all the responses, you will find that there are three objects key i.e. `data`, `links`, and `meta`. In this section, we will explain all the three keys.

Let's take an example of the categories section, we have some response in which we got these three keys.

~~~json
{
    "data": [{...},{...},...,{...}],
    "links": {...},
    "meta": {...}
}
~~~

## 1. Data Object `data`

In the data object key, you will find the collection of many objects which represent the Bagisto store's categories.

## 2. Links Object `links`

In the links object, you will find four more object keys, which will be used according to pagination,

  ~~~json
  "links": {
      "first": "https://example.com/api/categories?limit=5&pagination=342234&page=1",
      "last": "https://example.com/api/categories?limit=5&pagination=342234&page=2",
      "prev": null,
      "next": "https://example.com/api/categories?limit=5&pagination=342234&page=2"
  }
  ~~~

  | Name          | Info                                                                                                                |
  | ------------- | ------------------------------------------------------------------------------------------------------------------- |
  | first         | Display the first url link of the called API with filter variable.                                                  |
  | last          | Display the last url link of the called API with filter variable.                                                   |
  | prev          | Display the previous url of the current called API url.                                                             |
  | next          | Display the next url of the current called API url. If no next url available then it will contain the `null` value. |

## 3. Meta Object `meta`

`meta` object will only used with pagination. Under meta object, you will find seven object keys,

  ~~~json
  "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 2,
      "path": "https://example.com/api/categories",
      "per_page": "5",
      "to": 5,
      "total": 10
  }
  ~~~

  | Name          | Info                                                                                               | 
  | ------------- | -------------------------------------------------------------------------------------------------- |
  | current_page  | Display the current page number.                                                                   |
  | from          | Display the first count of the returned data object based on the provided page and limit filters.  |
  | last_page     | Display the last page number.                                                                      |
  | path          | Display the current api url without input parameters.                                              |
  | per_page      | Display the total of records in a single page.                                                     |
  | to            | Display the last count of the returned data object based on the provided page and limit filters.   |
  | total         | Display the total number of records in the store.                                                  |
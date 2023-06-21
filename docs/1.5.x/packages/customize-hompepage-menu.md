# Homepage Menu

[[TOC]]

This section provides an overview of menu items, how to access them, and how they can be customized. Both the **`default`** and **`velocity`** themes display categories in the menu items.

## Accessing Categories

To access the menu categories, you can utilize the **`CategoryRepository`** class located in the **`Webkul\Category\Repositories\CategoryRepository`** namespace. This repository class provides useful methods for retrieving and managing categories.

One such method is **`getVisibleCategoryTree`**, which returns a list of all visible categories under the specified root category. You can pass the ID of the main root category as a parameter to this method.

## Example from the Default Theme

In the default theme's blade file, you can find the following code snippet:

```php
@foreach (app('Webkul\Category\Repositories\CategoryRepository')->getVisibleCategoryTree(core()->getCurrentChannel()->root_category_id) as $category)
    // ...
@endforeach
```

You can iterate through the retrieved categories and customize the menu according to your specific requirements.

::: tip

The **`CategoryRepository`** class provides several other methods for working with categories. Take some time to explore and utilize those methods as needed.

:::
# Customize homepage menu

In this section, we will give you an overview of the menu items. How you can access the menu items and how it can be used for customization. In both themes i.e. default and velocity, we are displaying the categories in the menu items.

## Accessing categories

If you check the shop package, you will come to know that we have used the `CategoryRepository` class in the namespace `Webkul\Category\Repositories\CategoryRepository`.

In this class, there is a method named `getVisibleCategoryTree`. This method will give you the listing of all the categories. You just need to pass the main root category id.

## Sample from default theme

If you check the blade file in the default theme, here is the below code,

~~~php
foreach (app('Webkul\Category\Repositories\CategoryRepository')->getVisibleCategoryTree(core()->getCurrentChannel()->root_category_id) as $category) {
    ...
}
~~~

Now loop through these and customize your menu according to your needs.

::: tip

There are several more categories methods present in the repository. Just go ahead explore those also.

:::

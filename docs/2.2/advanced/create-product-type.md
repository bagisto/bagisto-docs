# Product Type

[[TOC]]

## Introduction

Bagisto provides several default product types, including simple, configurable, virtual, grouped, downloadable, and bundled. However, if these default product types do not meet your requirements, you can create your own custom product types.

Bagisto comes with several built-in product types like simple, configurable, and others to handle different kinds of products. However, if these types don't fit what you need for your store, Bagisto lets you create your own custom product types.

Creating custom product types in Bagisto means you can define new types of products that suit your business perfectly. This flexibility allows you to manage and showcase products in ways that are tailored to your specific needs, ensuring your online store can offer exactly what your customers are looking for.

## Creating a New Product Type

To extend the functionality of Bagisto by introducing a new product type, such as "custom_product," follow these straightforward steps:

**Note**: In this example, we will create a new product type called "custom_product".

### Package Creation

Begin by creating a new package for your custom development needs. If you're unfamiliar with package development in Bagisto, you can find detailed guidance in the [Package Development](../packages) section.

### Configuration File Setup

Within your package's `Config` directory, establish a new file named `product_types.php`. This file will serve as the configuration hub for defining your custom product types.

### Define the Product Type:

Populate the `product_types.php` file with the necessary configuration details to define your new product type. Here’s an example of how to structure this configuration:

```php
<?php

return [
    'custom_product' => [
        'key'   => 'custom_product',
        'name'  => 'CustomProduct',
        'class' => 'Webkul\Blog\Type\CustomProduct',
        'sort'  => 7
    ],
];
```

#### Explanation

- `key` : A unique identifier for your product type, used internally within Bagisto.
- `name` : The display name of your product type, which will be visible in the admin panel and to your customers.
- `class` : The namespace of the PHP class that defines the behavior and attributes of your custom product type. This class should be located in your package's directory structure.
- `sort`: An optional field to specify the position of your product type in lists or dropdowns within Bagisto. Lower numbers appear higher in the list.

## Merging the Configuration

Follow these steps to merge the configuration and define its behavior:

### Merge Configuration in ServiceProvider

In your package's service provider (e.g., `CustomProductServiceProvider.php`), utilize the `mergeConfigFrom()` method within the `register()` method to integrate your product type configuration with Bagisto's core configurations. Here's an example snippet:

```php
<?php

namespace Webkul\Blog\Providers;

use Illuminate\Support\ServiceProvider;

class CustomProductServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //...

        $this->mergeConfigFrom(
            dirname(__DIR__) . '/Config/product_types.php',
            'product_types'
        );
    }
}
```

### Define Product Type Class

Within your package, create a PHP class file named `CustomProduct.php` under `src/Type` directory. This class will define the specific behavior and attributes of your "custom_product" product type. Here’s a basic example to get started:

```php
<?php

namespace Webkul\Blog\Type;

use Webkul\Product\Type\AbstractType;

class CustomProduct extends AbstractType
{
//
}
```

Replace the placeholder comments with actual methods and properties tailored to your product type's requirements.

### Extending AbstractType:

After completing the above steps, your product type will be created. However, the `Type/CustomProduct.php` file does not have any code specific to the custom_product type product yet. To inherit the basic functionality of any product type, you need to extend the classes from the Product package, specifically the `type/AbstractType.php` file.

By extending the `AbstractType.php` class in your product type (`Type/CustomProduct.php`), you can provide the core functionality of a product. Additionally, if you need to define custom methods for your product type, you can do so within the `CustomProduct.php` file.

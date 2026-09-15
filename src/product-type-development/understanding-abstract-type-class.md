# Understanding the AbstractType Class

Every product type extends `Webkul\Product\Type\AbstractType`, in `packages/Webkul/Product/src/Type/AbstractType.php`. It decides whether a product can be sold, whether it ships, what the admin edit page shows and which rows go into the cart. This page lists the properties and methods custom types change, with core's own types as examples.

## What the Base Class Provides

`Product::getTypeInstance()` resolves your class from the container, calls `setProduct()` with the product and caches the instance on the model, so inside every method `$this->product` is the product being handled.

Most flags are plain properties that a matching method returns, so a type that only changes a flag sets the property instead of overriding the method:

| Property | Default | Returned by | What it changes |
|---|---|---|---|
| `$isStockable` | `true` | `isStockable()` | Whether the item is shipped: the cart model's `$cart->haveStockableItems()` decides whether checkout asks for shipping, `$cart->hasOnlyStockableItems()` whether cash on delivery is offered |
| `$showQuantityBox` | `false` | `showQuantityBox()` | The quantity box on the product page; `Virtual` sets it to `true` |
| `$haveSufficientQuantity` | `true` | `haveSufficientQuantity()` | Whether a quantity can be sold |
| `$isComposite` | `false` | `isComposite()` | Composite types keep their stock on child products; the admin edit page hides their inventory group |
| `$hasVariants` | `false` | `hasVariants()` | When the admin creates a product of a variant type, it asks for the configurable attributes first |
| `$canBeAddedToCartWithoutOptions` | `true` | `canBeAddedToCartWithoutOptions()` | Reported by the admin's `ProductResource` as `is_options_required` |
| `$canBeCopied` | `true` | `canBeCopied()` | `copy()` throws for a type that can't be copied |
| `$skipAttributes` | `[]` | `getEditableAttributes()` | Attribute codes left off the admin edit page and out of its validation; `manage_stock` in the list also makes `isInventoryManageable()` return `false` |
| `$additionalViews` | `[]` | `getAdditionalViews()` | Blade views the admin edit page includes |

`$isChildrenCalculated` and `$canBeMovedFromWishlistToCart` complete the set. Every type must also provide two things itself:

- **`getPriceIndexer()`**: not declared on the base class, but the price index job (`Webkul\Product\Helpers\Indexers\Price::getTypeIndexer()`) and `getFinalPrice()` call it. Return `app(\Webkul\Product\Helpers\Indexers\Price\Simple::class)` unless your pricing needs its own indexer.
- **A constructor that calls `parent::__construct()`**, if you add dependencies, since the base constructor takes eight repositories that the container injects.

Only `haveSufficientQuantity()`, `isInventoryManageable()`, `canBeCopied()`, `handleQuantity()`, `validateCartItem()` and `isCartItemInactive()` declare a return type. An override of any other method may add one, but it must still allow every value callers expect.

## Key Methods to Understand

These are the methods custom types override most, with the place core calls each one:

| Method | Called from |
|---|---|
| `isSaleable()` | The storefront's product resources (`is_saleable`), which enable or disable **Add To Cart** |
| `isStockable()` | The cart model's `$cart->haveStockableItems()` and `$cart->hasOnlyStockableItems()`, `OrderItem::isStockable()` and `FlatRate`'s per-unit pricing |
| `haveSufficientQuantity(int $qty): bool` | `isSaleable()` with a quantity of one, and `prepareForCart()` with the requested quantity |
| `showQuantityBox()` | The product page |
| `totalQuantity()` | `Product::totalQuantity()`, and the stock checks of `Simple` and `Virtual` |
| `getTypeValidationRules()` | `Admin\Http\Requests\ProductForm` when the product is saved |
| `update(array $data, $id, $attributes = [])` | `ProductRepository::update()` when the product is saved |
| `getProductPrices()` | `getPriceHtml()`, the storefront `ProductResource` (`prices`), and the configurable and bundle option helpers |
| `getPriceHtml()` | The product page, and the storefront product and product card resources (`price_html`) |
| `prepareForCart($data)` | `Cart::addProduct()` |
| `getAdditionalOptions($data)` | `prepareForCart()`, to build the cart item's `additional` |
| `compareOptions($options1, $options2)` | `Cart::getItemByProduct()`, to find an existing cart line |

## Product Availability Control

### `isSaleable()`

The base returns `false` when the product is disabled or `haveSufficientQuantity(1)` is false, and `true` otherwise. Call the parent first and add your own condition; a type that must never be sold at a price of zero, for example:

```php
/**
 * Return true if this product type is saleable.
 *
 * @return bool
 */
public function isSaleable()
{
    if (! parent::isSaleable()) {
        return false;
    }

    return (float) $this->product->price > 0;
}
```

`Downloadable` replaces the check instead of extending it: it sells an enabled product only once the product has downloadable links.

### `haveSufficientQuantity(int $qty): bool`

The base returns the `$haveSufficientQuantity` property, `true`, so a type ignores stock until it overrides this. `Virtual` checks the inventory only when the product manages stock:

**File:** `packages/Webkul/Product/src/Type/Virtual.php`

```php
/**
 * Have sufficient quantity.
 */
public function haveSufficientQuantity(int $qty): bool
{
    if (! $this->product->manage_stock) {
        return true;
    }

    return $qty <= $this->totalQuantity();
}
```

When it returns `false`, `prepareForCart()` throws `InsufficientProductInventoryException` and `isSaleable()` returns `false`.

## Inventory and Stock Control

### `isStockable()`

"Stockable" means the item is shipped, not that its stock is counted; `isInventoryManageable()` answers the second question. A type that is never shipped sets the property:

```php
/**
 * Subscriptions are not shipped.
 *
 * @var bool
 */
protected $isStockable = false;
```

A cart holding only such items skips the shipping step, cash on delivery isn't offered for it, and its order items are never shipped. `Virtual` and `Downloadable` set the same property.

### `totalQuantity()`

The base reads the quantity from the product's inventory index row for the current channel, which the inventory indexer maintains, and returns `0` when there is none. Override it only when your type counts availability somewhere other than product inventories.

## Pricing and Display Methods

### `getProductPrices()` and `getPriceHtml()`

`getProductPrices()` returns a `regular` price (the product's `price`) and a `final` price (`getMinimalPrice()`), each as a converted `price` and a `formatted_price`. `getPriceHtml()` renders `shop::products.prices.index` with the `product` and those `prices`; override it to render a view of your own that receives the same data, for example to print "per month" after the price.

::: warning Displayed Price and Charged Price
Both methods only display a price. The cart charges `getFinalPrice()`, which reads the [price index](../advanced/understanding-indexers.md) that `getPriceIndexer()` builds, and `getMinimalPrice()` reads the same index. A different price, such as a subscription discount, belongs in a price indexer of your own: extend `Webkul\Product\Helpers\Indexers\Price\AbstractType`, override its `getMinimalPrice($qty = null)`, and return your indexer from `getPriceIndexer()`. Overriding `getProductPrices()` alone shows one price and charges another.
:::

## Validation Methods

### `getTypeValidationRules()`

Returns extra rules for the admin's product form. `Admin\Http\Requests\ProductForm` merges them into its rules when the product is saved, and a rule keyed by an attribute code replaces the `required` or `nullable` rule the form would otherwise build for that attribute. The base returns an empty array. `Downloadable` validates its links:

**File:** `packages/Webkul/Product/src/Type/Downloadable.php`

```php
/**
 * Returns validation rules.
 *
 * @return array
 */
public function getTypeValidationRules()
{
    return [
        'downloadable_links.*.type' => 'required',
        'downloadable_links.*.file' => 'required_if:type,==,file',
        'downloadable_links.*.file_name' => 'required_if:type,==,file',
        'downloadable_links.*.url' => 'required_if:type,==,url',
        'downloadable_links.*.downloads' => 'required',
        'downloadable_links.*.sort_order' => 'required',
    ];
}
```

## Admin Interface Customization

### `$additionalViews` Property

Lists extra Blade views to include in the product edit page:

```php
/**
 * These blade files will be included in product edit page.
 *
 * @var array
 */
protected $additionalViews = [
    'subscription::admin.catalog.products.edit.subscription-settings',
];
```

The admin edit page includes two things for a type, in this order:

**File:** `packages/Webkul/Admin/src/Resources/views/catalog/products/edit.blade.php`

```blade
<!-- Product Type View Blade File -->
@includeIf('admin::catalog.products.edit.types.' . $product->type)

<!-- Related, Cross Sells, Up Sells View Blade File -->
@include('admin::catalog.products.edit.links')

<!-- Include Product Type Additional Blade Files If Any -->
@foreach ($product->getTypeInstance()->getAdditionalViews() as $view)
    @includeIf($view)
@endforeach
```

The first is a per-type partial in the `admin` namespace, where core's types keep theirs (see [Creating a Store Theme](../theme-development/creating-store-theme.md#how-views-are-resolved) for overriding it from the admin theme). `$additionalViews` takes any namespace, so a package can ship the views itself with `loadViewsFrom()`. Both use `@includeIf`, so a missing view is skipped silently; if your fields don't appear, check the view name first. Both kinds of view see the edit page's `$product`.

Fields added this way are saved only if something saves them. `AbstractType::update()` saves the attribute values of the product's attribute family, its channels, categories, related products, inventories, images, videos and customer group prices, and ignores any other input. For anything else, override `update()`, call the parent, and save your data through a repository, as `Downloadable` does for its links:

**File:** `packages/Webkul/Product/src/Type/Downloadable.php`

```php
/**
 * Update.
 *
 * @param  int  $id
 * @param  array  $attributes
 * @return Product
 */
public function update(array $data, $id, $attributes = [])
{
    $product = parent::update($data, $id, $attributes);

    if (! empty($attributes)) {
        return $product;
    }

    $this->productDownloadableLinkRepository->saveLinks($data, $product);

    $this->productDownloadableSampleRepository->saveSamples($data, $product);

    return $product;
}
```

### `$skipAttributes` Property

Lists the attribute codes this type doesn't use. `Virtual` leaves out the physical ones:

**File:** `packages/Webkul/Product/src/Type/Virtual.php`

```php
/**
 * Skip attribute for virtual product type.
 *
 * @var array
 */
protected $skipAttributes = [
    'length',
    'width',
    'height',
    'weight',
    'depth',
    'allow_rma',
    'rma_rule_id',
];
```

A code the attribute family doesn't have is ignored. `Downloadable` also lists `manage_stock` and `guest_checkout`; `manage_stock` in the list makes `isInventoryManageable()` return `false`.

The storefront has no equivalent hook: `shop::products.view` includes the option partials of core's types from a fixed list, so a custom type adds its controls by overriding that view in a theme or through the page's [View Render Events](../advanced/view-render-events.md#product-page-events), as [Building Your Subscription Product Type](./building-your-subscription-product-type.md#step-3-add-the-frequency-field-to-the-product-page) does.

## Cart Integration

### `prepareForCart($data)`

The most important method: it turns an add-to-cart request into the rows `Cart::addProduct()` saves as cart items.

**File:** `packages/Webkul/Product/src/Type/AbstractType.php`

```php
/**
 * Add product. Returns error message if can't prepare product.
 *
 * @param  array  $data
 * @return array
 *
 * @throws InsufficientProductInventoryException
 */
public function prepareForCart($data)
{
    $data['quantity'] = $this->handleQuantity((int) $data['quantity']);

    $data = $this->getQtyRequest($data);

    if (! $this->haveSufficientQuantity($data['quantity'])) {
        throw new InsufficientProductInventoryException(trans('product::app.checkout.cart.inventory-warning'));
    }

    $price = $this->getFinalPrice();

    $products = [
        [
            'product_id' => $this->product->id,
            'sku' => $this->product->sku,
            'quantity' => $data['quantity'],
            'name' => $this->product->name,
            'price' => $convertedPrice = core()->convertPrice($price),
            'price_incl_tax' => $convertedPrice,
            'base_price' => $price,
            'base_price_incl_tax' => $price,
            'total' => $convertedPrice * $data['quantity'],
            'total_incl_tax' => $convertedPrice * $data['quantity'],
            'base_total' => $price * $data['quantity'],
            'base_total_incl_tax' => $price * $data['quantity'],
            'weight' => (float) ($this->product->weight ?? 0),
            'total_weight' => (float) ($this->product->weight ?? 0) * $data['quantity'],
            'base_total_weight' => (float) ($this->product->weight ?? 0) * $data['quantity'],
            'type' => $this->product->type,
            'additional' => $this->getAdditionalOptions($data),
        ],
    ];

    return $products;
}
```

`getQtyRequest()` adds the quantity already in the cart when `Cart::getItemByProduct()` finds a matching line, which is why the stock check sees the combined quantity.

An override returns an **array** of cart-item rows on success or a **string** error message, which `Cart::addProduct()` turns into an exception carrying that message; core's `Simple` returns one when required customizable options are missing. Keep the signature untyped, as the base declares it: a `: array` return type throws the moment an error is reported. The subscription type's override, which refuses a request without a frequency, is in [Building Your Subscription Product Type](./building-your-subscription-product-type.md#step-1-enhance-the-subscription-class). If your type extends `Simple` and changes the rows the parent returns, check them with `is_string()` first.

### `getAdditionalOptions($data)` and `compareOptions($options1, $options2)`

`getAdditionalOptions()` decides what is stored in the cart item's `additional` column, which is copied to the order item; the base returns the request data unchanged. An `attributes` list of `attribute_name` and `option_label` pairs in it is printed with the item in the storefront cart and on the admin order page.

`compareOptions()` decides whether a new request belongs to an existing cart line. The base compares only the product id and the parent id, so a type whose options should give separate lines overrides it. The subscription type overrides both.

## Exploring More Methods

A few other methods are worth knowing before you override them:

| Method | Role |
|---|---|
| `create(array $data)` | Creates the product row and assigns it to the default channel |
| `copy()` | Duplicates the product for the admin's copy action, unless `canBeCopied()` is false |
| `validateCartItem(CartItem $item): CartItemValidationResult` | Re-prices a cart item from `getFinalPrice()`, and marks it inactive when its product was disabled or removed from the cart's channel. `Cart::validateItems()` calls it for every item, and `collectTotals()` runs that first |
| `isCartItemInactive(\Webkul\Checkout\Contracts\CartItem $item): bool` | The inactive check itself; it also checks the children of `bundle` and `configurable` items by type name |
| `getOrderedItem($item)` | The item whose product data an order line shows; the base returns the item itself |
| `getBaseImage($item)` | The image shown for a cart or order item |
| `priceRuleCanBeApplied()` | Whether catalog price rules apply to the type |
| `isInventoryManageable(): bool` | Whether stock is counted; `false` when `manage_stock` is in `$skipAttributes` |

## Next Step

Next, put these methods to work: a frequency field, separate cart lines per frequency and a checkout without shipping.

**Continue to:** [Building Your Subscription Product Type](./building-your-subscription-product-type.md)

---
title: Cart Rule | Bagisto
layout: default
---

# Cart Rule

To Add cart-rule, you need to explore promotions menu -> Cart Rules. Here, we have a option to Add Cart Rule
. Options you will find in creating cart rules as below:

- **General Information**

  1. Rule Name: the name of cart rule is given
  2. Description: the description of cart rule is given
  3. Start: From the date & time, the cart rule will be applicable
  4. End: upto the date & time, the cart rule will be applicable
  5. Customer Groups: Bydefault, we have provided three option of customer group as 'guest', 'general', 'wholesale'. But, if needed, we can create customer groups from **customers -> groups menu**.
  6. Channels: this multi-select box shows the available channels
  7. Is active: this accepts the boolean value of enable/disable cart rule
  8. Use Coupon: this accepts the boolean value for enable/disable coupons
  9. Priority: this sets the priority of one cart rule over another

- **Conditions**

  Within this, two dropdown options are available

  1. All Conditions are true: We have an option to add condition based on which cart rule will implement if all the conditions are true.
  2. Any condition is true: We have an option to add condition based on which cart rule will implement if in all listed condition any condition is true.

- **Actions**

The section provide actions on cart rules on multiple criteria. For this, we have an multiple form-fields i.e.,

1. **_Apply_**:

   - Percentage of product
   - Apply as fixed amount

2. **_Discount Amount_**: This field based on above _apply_ field i.e.,

   - If percentage of product is selected then this field accepts the percent value which will be the amount of percentage apply as a discount on product.

   - If apply as fixed amount is selected then the specified amount in this field will be deducted/reduced from the product price

3. **_Buy Atleast_**: It accepts numeric value that determine how many product quantity need to be purchase to apply cart rule/discount

4. **_Max. Quantity Allowed To Be Discounted_**: In this, we specifies on how many product quantity discount will be applied.

5. **_Free Shipping_**: Accepts boolean value for enable/disable free shipping means **_no delivery charges_**

6. **_Apply to shipping_**: Accepts boolean value and determines whether discount applies to shipping cost or not.

7. **_End other rules_**: Accepts boolean value to enable/disbale other discount i.e., If non-couponables rules are applied such as offer, sale etc. Then, there is no need to apply coupons.

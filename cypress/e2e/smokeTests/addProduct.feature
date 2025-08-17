Feature: Add Product to Cart

Scenario: Add multiple products to the shopping cart successfully
  Given Navigate to website
  When I add 3 products to the cart
  Then I should see the product added confirmation
  And The cart should update with the new product


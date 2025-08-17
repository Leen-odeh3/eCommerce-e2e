Feature: Add Product to Cart

  Scenario: Add a product to the shopping cart successfully
    Given Navigate to website
    When I select a product to add and click add to cart
    Then I should see the product added confirmation
    And The cart should update with the new product

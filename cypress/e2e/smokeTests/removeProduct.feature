Feature: Remove product from cart

  Scenario: User removes a product from the cart
    Given Navigate to website
    Then I should see the home page successfully

    When I add products to the cart
    And I click the 'Cart' Link
    Then I should see the cart page

    When I click the 'X' button corresponding to a product
    Then I should verify that the product is removed from the cart

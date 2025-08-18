Feature: Add to cart from Recommended items

  Scenario: User adds recommended product to cart
    Given I navigate to the homepage
    When I scroll to bottom of the page
    Then I should see "RECOMMENDED ITEMS" section
    When I click on "Add To Cart" on recommended product
    And I click on "View Cart" button
    Then I should see the product in the cart page

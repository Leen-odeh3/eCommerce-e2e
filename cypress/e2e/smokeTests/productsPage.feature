Feature: Verify All Products and product detail page

  Scenario: User should be able to view all products and product details
    Given I navigate to website
    When I should see the home page visible successfully
    
    Then I click on the "Products" button
    And I should be navigated to the "products" page successfully
    And I should see the products list
    When I click on "View Product" of the first product
    Then I should be navigated to the product detail page
    And I should see product details including name, category, price, availability, condition, and brand

Feature: Search Products and Verify Cart After Login
  As a user
  I want to search for products and verify them in the cart
  So that my cart remains after login

  Background:
    Given I am on the home page

  @regression
  Scenario: Search products and verify cart after login
    When I click on the 'Products' button
    Then I should be navigated to the ALL PRODUCTS page
    When I search for "Tshirt"
    Then I should see the 'SEARCHED PRODUCTS' section
    And I should see all related products
    When I add all searched products to the cart
    And I click the 'Cart' button
    Then I should see the searched products in the cart
    When I click on the 'Signup / Login' button
    And I login with valid credentials
    And I click the 'Cart' button again
    Then I should see the searched products in the cart

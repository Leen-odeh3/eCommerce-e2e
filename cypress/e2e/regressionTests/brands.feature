Feature: View & Cart Brand Products
  As a user
  I want to view products by brand
  So that I can filter and see brand-specific products

  Background:
    Given I am on the home page

  @regression
  Scenario: View brand products
    When I click on the 'Products' button
    Then I should see the 'Brands' section visible
    When I click on the brand 'Polo'
    Then I should be navigated to the 'Polo' brand page and see its products
    When I click on the brand 'Babyhug'
    Then I should be navigated to the 'Babyhug' brand page and see its products

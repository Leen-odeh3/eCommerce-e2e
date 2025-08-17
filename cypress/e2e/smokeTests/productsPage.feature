Feature: Verify All Products and product detail page

Scenario: User should be able to view all products and product details
  Given I navigate to website
  When I should see the home page visible successfully
  And I click on the "Products" button
  And I should be navigated to the "products" page successfully
  And I should see the products list
  When I click on "View Product" of the first product
  Then I should be navigated to the product detail page
  And I should see product details including name, category, price, availability, condition, and brand
  And Go To HomePage

Scenario: User should be able to search for a product
  Given I navigate to website
  Then I should see the home page visible successfully
  When I click on the "Products" button
  Then I should be navigated to the "products" page successfully
  When I enter "Sleeves Printed Top - White" in search input and click search button
  Then I should see "Searched Products"
  And I should see all products related to search

Scenario: Verify all returned products contain the search keyword
  Given I navigate to website
  Then I should see the home page visible successfully
  When I click on the "Products" button
  Then I should be navigated to the "products" page successfully
  When I enter "shirt" in search input and click search button
  Then I should see "Searched Products"
  And each displayed product name should contain the word "shirt"

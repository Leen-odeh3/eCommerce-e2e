Feature: Download Invoice after purchase order
  As a registered user
  I want to place an order and download the invoice
  So that I can verify the purchase

  @smoke
  Scenario: Download Invoice after placing an order
    Given I open the Automation Exercise home page
    When I add products to the cart
    And I proceed to checkout after login
    And I place an order with comment and payment details
    Then I should see the order success message
    And I download the invoice and verify it

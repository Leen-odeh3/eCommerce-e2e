Feature: Place Order: Register while Checkout
  As a user
  I want to register and place an order during checkout
  So that I can complete my purchase successfully

  Background:
    Given I navigate to website
    And I verify that the home page is visible successfully

  @smoke
  Scenario: Place an order while registering during checkout
    When I add products to the cart "5"
    And I click on the 'View Cart' button
    Then I should see the cart page displayed
    When  I click on 'Proceed To Checkout' button
    And I click on 'Register / Login' button
    And I fill all details in Signup and create an account
    Then I should see the message 'ACCOUNT CREATED!' and click the 'Continue' button
    When I click on the Cart button
    And I click on 'Proceed To Checkout' button
    When I enter a description in the comment text area and click 'Place Order'
    And I enter payment details: Name on Card, Card Number, CVC, Expiration Date
    And I click 'Pay and Confirm Order' button
    Then I should see the success message 'Your order has been placed successfully!'
Feature: Place Order after Registering Before Checkout

  Scenario: User registers before checkout and places an order successfully
    Given Navigate to website
    Then I should see the home page successfully

    When I click the 'Signup / Login' button
    And I fill in all required signup details and create an account
    Then I should see 'ACCOUNT CREATED!' message
    And I click the 'Continue' button

    When I add products to the cart
    And I click the 'Cart' Page
    Then I should see the cart page

    When I click 'Proceed To Checkout'
    When I enter a description in the comment text area
    # And I click the 'Place Order' button
    And I enter payment details: Name on Card, Card Number, CVC, Expiration date
    And I click the 'Pay and Confirm Order' button

    Then I should see the success message 'Your order has been placed successfully!'

    # When I click the 'Delete Account' button
    # Then I should see 'ACCOUNT DELETED!' message
    # And I click the 'Continue' button
